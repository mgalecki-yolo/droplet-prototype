# Droplet Prototype — Srodowisko projektowe

Prototyp aplikacji **Droplet App** — platformy live commerce, na ktorej uzytkownicy sprzedaja i kupuja rzeczy przez transmisje wideo (aukcje lub "kup teraz").

## Architektura aplikacji

**Tab Bar (5 zakladek):**

| Tab | Nazwa | Opis |
|-----|-------|------|
| Start | Home | Lista aktualnych show, zaplanowanych i wybranych z kategorii. Od gory: szukajka → poziomy scroll buttonow kategorii → karuzele show. |
| Browse | Kategorie | Mapa kategorii — przegladanie zawartosci wg kategorii, dolaczanie do show. |
| Sell | Seller Hub | Panel sprzedawcy: statystyki profilu, dodawanie show, dodawanie produktow (uzycie w show). |
| Activity | Aktywnosc | Zamowienia, wiadomosci, powiadomienia (perspektywa kupujacego). |
| Account | Konto | Profil uzytkownika, ustawienia. |

**Glowne flow:**
- Ogladanie show (buyer) — dolaczenie do transmisji, licytacja / kup teraz, chat
- Prowadzenie show (seller) — uruchamianie aukcji, zarzadzanie produktami na zywo
- Zarzadzanie produktami — dodawanie, edycja, bulk selection
- Giveaway — konkurs podczas show
- Wallet / Checkout — platnosci, adresy dostawy

---

## Deployment

- **URL:** https://cheery-clafoutis-7deb87.netlify.app
- **GitHub:** https://github.com/mgalecki-yolo/droplet-prototype
- **Hosting:** Netlify (deploy z repozytorium)

## Struktura projektu

Pojedynczy plik `index.html` — brak bundlera, frameworka ani zaleznosci lokalnych.
Fonty ladowane z Google Fonts (Inter).

## Figma

- **File key:** `8Q6f8lepXFXel1BVjyJeNU`
- **URL:** https://www.figma.com/design/8Q6f8lepXFXel1BVjyJeNU/Droplet-App

---

## Design System

Szczegoly design systemu sa w osobnych plikach:

| Plik | Zawartosc |
|------|-----------|
| [`design-system/colors.md`](design-system/colors.md) | Tokeny kolorow, shadows |
| [`design-system/typography.md`](design-system/typography.md) | Typografia, makieta telefonu |
| [`design-system/icons.md`](design-system/icons.md) | Biblioteka ikon (node'y Figma) |
| [`design-system/components.md`](design-system/components.md) | Komponenty UI (46 komponentow) |
| [`design-system/flows.md`](design-system/flows.md) | Przeplywy ekranow |

---

## Status prac

- [x] Faza 1 — Design Tokens (kolory, typografia)
- [x] Faza 2 — Biblioteka ikon
- [x] Faza 2b — Komponenty UI (46/46)
- [ ] Faza 3 — Przeplywy (czesciowo)
- [ ] Faza 4 — Zasady implementacji

---

## Zasady ogolne

- Zawsze uzywaj tokenow z `design-system/colors.md` — nie wymyslaj kolorow spoza palety
- Typografia zawsze z fontu **Inter** z Google Fonts
- Przed implementacja nowego komponentu — sprawdz `design-system/components.md`
- Prototyp to **single HTML file** — zadnych bundlerow, frameworkow, zewnetrznych zaleznosci poza Inter
