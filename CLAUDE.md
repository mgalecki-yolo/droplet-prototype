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

## Zasady pracy

- Pliki `design-system/*.md` sa zrodlem prawdy dla kolorow, typografii, wymiarow i komponentow — ZAWSZE sprawdzaj przed odpytaniem Figmy
- Tokeny kolorow tylko z `design-system/colors.md`, typografia tylko Inter (Google Fonts)
- Przed implementacja komponentu — sprawdz `design-system/components.md`
- Figma: odpytuj konkretne node ID (lista w `design-system/flows.md`), nigdy cale strony
- Figma: `get_screenshot` do podgladu layoutu, `get_design_context` do szczegolowej implementacji
- FigJam board key: `smdQpxfQiBbesEFpLBlhq6` — do notatek i planowania
- Single HTML file, brak bundlerow/frameworkow

## Zasady budowy ekranow

- Buduj JEDEN ekran na raz — nigdy nie rob wielu ekranow naraz
- Dla kazdego ekranu:
  1. Sprawdz lokalne specs (`components.md`, `typography.md`, `icons.md`)
  2. Odpytaj `get_design_context` z Figmy (konkretny node ID)
  3. Zweryfikuj KAZDA ikone, font, wymiar i kolor przed implementacja
  4. Zbuduj ekran
  5. Poczekaj na review uzytkownika → poprawki → dopiero wtedy nastepny ekran
- NIE zgaduj layoutu, pozycji ani komponentow — zawsze czytaj z Figmy lub lokalnych specs
- Screenshot (`get_screenshot`) daje ogolny obraz — do detali implementacji zawsze uzywaj `get_design_context`
