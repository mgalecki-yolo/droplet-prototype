#!/usr/bin/env node
/**
 * sync-figma.js — Figma → HTML sync helper
 *
 * Wykrywa zmiany właściwości w węzłach Figmy i raportuje co się zmieniło.
 * Claude czyta raport i aktualizuje HTML.
 *
 * Użycie:
 *   node sync-figma.js            # jednorazowy diff
 *   node sync-figma.js --watch    # polling co 60s
 *   node sync-figma.js --reset    # usuń snapshot (zacznij od nowa)
 *
 * Wymagane:
 *   export FIGMA_TOKEN=your_personal_access_token
 *   (Figma → Settings → Personal access tokens)
 */

const https = require('https');
const fs = require('fs');
const crypto = require('crypto');

// ── Konfiguracja ────────────────────────────────────────────────────────────

const FILE_KEY = '8Q6f8lepXFXel1BVjyJeNU';
const SNAPSHOT_FILE = '.figma-snapshot.json';
const POLL_INTERVAL_MS = 60_000;

// Węzły do śledzenia — edytuj figma-nodes.json
const NODES_FILE = require('path').join(__dirname, 'figma-nodes.json');
const WATCH_NODES = JSON.parse(require('fs').readFileSync(NODES_FILE, 'utf8'));

// ── Helpers ──────────────────────────────────────────────────────────────────

function rgbToHex(r, g, b) {
  const toHex = v => Math.round(v * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function fetchFigmaNode(token, fileKey, nodeId) {
  return new Promise((resolve, reject) => {
    const id = nodeId.replace(':', '-');
    const options = {
      hostname: 'api.figma.com',
      path: `/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}&geometry=paths`,
      headers: { 'X-Figma-Token': token },
    };
    https.get(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error('Invalid JSON from Figma API')); }
      });
    }).on('error', reject);
  });
}

// ── Ekstrakcja właściwości ───────────────────────────────────────────────────

function extractProps(node, parentPath = '') {
  const result = {};
  const path = parentPath ? `${parentPath} › ${node.name}` : node.name;
  const id = node.id;

  // Kolory wypełnienia
  if (node.fills) {
    node.fills.forEach((fill, i) => {
      if (fill.type === 'SOLID' && fill.color) {
        const hex = rgbToHex(fill.color.r, fill.color.g, fill.color.b);
        const opacity = fill.opacity !== undefined ? fill.opacity : 1;
        result[`${id}::fill[${i}]`] = { path, value: hex, opacity, type: 'fill' };
      }
    });
  }

  // Kolor obramowania
  if (node.strokes) {
    node.strokes.forEach((stroke, i) => {
      if (stroke.type === 'SOLID' && stroke.color) {
        const hex = rgbToHex(stroke.color.r, stroke.color.g, stroke.color.b);
        result[`${id}::stroke[${i}]`] = { path, value: hex, type: 'stroke' };
      }
    });
  }

  // Border radius
  if (node.cornerRadius !== undefined) {
    result[`${id}::cornerRadius`] = { path, value: node.cornerRadius, type: 'cornerRadius' };
  }

  // Tekst
  if (node.type === 'TEXT' && node.characters !== undefined) {
    result[`${id}::text`] = { path, value: node.characters, type: 'text' };
  }

  // Rozmiar i styl fontu
  if (node.style) {
    if (node.style.fontSize) {
      result[`${id}::fontSize`] = { path, value: node.style.fontSize, type: 'fontSize' };
    }
    if (node.style.fontWeight) {
      result[`${id}::fontWeight`] = { path, value: node.style.fontWeight, type: 'fontWeight' };
    }
    if (node.style.letterSpacing) {
      result[`${id}::letterSpacing`] = { path, value: node.style.letterSpacing, type: 'letterSpacing' };
    }
  }

  // Opacity
  if (node.opacity !== undefined && node.opacity !== 1) {
    result[`${id}::opacity`] = { path, value: node.opacity, type: 'opacity' };
  }

  // Layout (padding, gap)
  if (node.paddingLeft !== undefined) {
    result[`${id}::padding`] = {
      path,
      value: `${node.paddingTop}/${node.paddingRight}/${node.paddingBottom}/${node.paddingLeft}`,
      type: 'padding',
    };
  }
  if (node.itemSpacing !== undefined) {
    result[`${id}::gap`] = { path, value: node.itemSpacing, type: 'gap' };
  }

  // Recurse
  if (node.children) {
    node.children.forEach(child => Object.assign(result, extractProps(child, path)));
  }

  return result;
}

// ── Snapshot I/O ─────────────────────────────────────────────────────────────

function loadSnapshot() {
  try {
    return JSON.parse(fs.readFileSync(SNAPSHOT_FILE, 'utf8'));
  } catch {
    return {};
  }
}

function saveSnapshot(data) {
  fs.writeFileSync(SNAPSHOT_FILE, JSON.stringify(data, null, 2));
}

// ── Diff ─────────────────────────────────────────────────────────────────────

function diff(prev, next) {
  const changes = [];
  const allKeys = new Set([...Object.keys(prev), ...Object.keys(next)]);

  for (const key of allKeys) {
    if (!prev[key] && next[key]) {
      changes.push({ kind: 'added', key, ...next[key] });
    } else if (prev[key] && !next[key]) {
      changes.push({ kind: 'removed', key, ...prev[key] });
    } else if (JSON.stringify(prev[key].value) !== JSON.stringify(next[key].value)) {
      changes.push({ kind: 'changed', key, path: next[key].path, type: next[key].type, from: prev[key].value, to: next[key].value });
    }
  }

  return changes;
}

// ── Report ───────────────────────────────────────────────────────────────────

function printChanges(nodeName, changes) {
  if (changes.length === 0) {
    console.log(`  ✓ ${nodeName} — brak zmian`);
    return;
  }

  console.log(`\n  ⚡ ${nodeName} — ${changes.length} zmian(y):`);
  changes.forEach(c => {
    const loc = c.path;
    if (c.kind === 'changed') {
      console.log(`     [${c.type}] ${loc}`);
      console.log(`       było:  ${c.from}`);
      console.log(`       jest:  ${c.to}`);
    } else if (c.kind === 'added') {
      console.log(`     [+] ${loc} — ${c.type}: ${c.value}`);
    } else if (c.kind === 'removed') {
      console.log(`     [-] ${loc} — ${c.type}: ${c.value}`);
    }
  });
}

// ── Main ──────────────────────────────────────────────────────────────────────

// Wczytaj .env jeśli istnieje
const ENV_FILE = require('path').join(__dirname, '.env');
if (require('fs').existsSync(ENV_FILE)) {
  require('fs').readFileSync(ENV_FILE, 'utf8').split('\n').forEach(line => {
    const m = line.match(/^([^=]+)=(.+)$/);
    if (m) process.env[m[1].trim()] = m[2].trim();
  });
}

const TOKEN = process.env.FIGMA_TOKEN;
const args = process.argv.slice(2);

if (args.includes('--reset')) {
  if (fs.existsSync(SNAPSHOT_FILE)) {
    fs.unlinkSync(SNAPSHOT_FILE);
    console.log('✓ Snapshot usunięty. Następne uruchomienie zapisze nowy punkt odniesienia.');
  } else {
    console.log('Brak snapshotu do usunięcia.');
  }
  process.exit(0);
}

if (!TOKEN) {
  console.error('❌  Brak FIGMA_TOKEN.');
  console.error('    1. Wejdź na figma.com → Settings → Personal access tokens');
  console.error('    2. Wygeneruj token');
  console.error('    3. export FIGMA_TOKEN=twój_token');
  process.exit(1);
}

async function runSync() {
  const timestamp = new Date().toLocaleTimeString('pl-PL');
  console.log(`\n[${timestamp}] Sprawdzam Figmę...`);

  const snapshot = loadSnapshot();
  const nextSnapshot = {};
  let totalChanges = 0;

  for (const [name, nodeId] of Object.entries(WATCH_NODES)) {
    try {
      const data = await fetchFigmaNode(TOKEN, FILE_KEY, nodeId);

      if (data.err) {
        console.error(`  ❌ ${name}: ${data.err}`);
        continue;
      }

      const nodeData = data.nodes[nodeId.replace('-', ':')]
                    || data.nodes[nodeId];

      if (!nodeData || !nodeData.document) {
        console.error(`  ❌ ${name}: węzeł nie znaleziony (ID: ${nodeId})`);
        continue;
      }

      const props = extractProps(nodeData.document);
      const isFirstRun = !snapshot[nodeId];
      const prevProps = snapshot[nodeId] || {};
      const changes = isFirstRun ? [] : diff(prevProps, props);

      if (!isFirstRun) printChanges(name, changes);
      nextSnapshot[nodeId] = props;
      totalChanges += changes.length;

    } catch (err) {
      console.error(`  ❌ ${name}: ${err.message}`);
    }
  }

  // Zapisz nowy snapshot tylko jeśli wszystko OK
  if (Object.keys(nextSnapshot).length > 0) {
    // Zachowaj wpisy dla węzłów które nie były odpytywane w tej sesji
    saveSnapshot({ ...snapshot, ...nextSnapshot });
  }

  if (Object.keys(snapshot).length === 0) {
    console.log('\n  📸 Zapisano punkt odniesienia (snapshot). Kolejne uruchomienie pokaże diff.');
  } else {
    console.log(`\n  Łącznie zmian: ${totalChanges}`);
    if (totalChanges > 0) {
      console.log('  → Przekaż ten raport Claude\'owi i powiedz "wdróż zmiany".');
    }
  }
}

if (args.includes('--watch')) {
  console.log(`👁  Tryb watch — sprawdzam co ${POLL_INTERVAL_MS / 1000}s. Ctrl+C żeby zatrzymać.`);
  runSync();
  setInterval(runSync, POLL_INTERVAL_MS);
} else {
  runSync();
}
