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

### Strony (Pages) w pliku Figma

| Page ID | Nazwa strony | Zawartosc |
|---------|-------------|-----------|
| `0:1` | App Layout, Home, List, Show | Glowny canvas — Home, Browse, Live Show, Seller Profile, Subcategory i pozostale flow |
| `5509:20252` | Components | Design system — komponenty UI, kolory, logo |
| `5508:67043` | Product page and Profile page | Product Page (buyer), Seller Profile Page |
| `5508:67335` | Schedule Show and Add Product | Schedule Show, Add Products, Seller Hub, Media Library |
| `5508:67044` | Login and register | Zaimplementowane — pomijamy |
| `2255:94805` | Droplet Example Data | Przykladowe produkty, avatary, dane testowe |
| `5474:37882` | Droplet Admin Panel | Zrobione osobna droga — pomijamy |

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

### Zasada weryfikacji komponentow i ikon (KRYTYCZNE)

Przed uzyciem KAZDEGO komponentu lub ikony w kodzie:
1. Sprawdz `design-system/components.md` — TYLKO opisane tam komponenty istnieja
2. Sprawdz liste plikow w `design-system/UI Icons/` — TYLKO te pliki istnieja
3. Potwierdz nazwy w `design-system/icons.md`
4. NIE wymyslaj nazw komponentow ani ikon — jesli nie ma w dokumentacji, nie istnieje
5. Jesli potrzebny element nie istnieje — poinformuj uzytkownika i zaproponuj dostepna alternatywe

**Dostepne komponenty (pelna lista z components.md):**
App Top, Top Element, Navi Button 42px, Button (warianty: Category, Sub Category, User, 36px, 1CTA, 2CTA, 1CTA Disable, Link), Checkbox, Radio Button, Switch, Form Input, Search Input, User Avatar, App Tabbar, Prod Tile Vertical, Prod Tile Horizontal, Show Tile, Live Badge, Product Badge, Price Badge, Internal Message, Product Page Details Element, Category Button, Main Category Icons, Separator, Context Menu, Popup Component, Review Tile, Category Pastel Icons, Sheet / Bottom Sheet, Action Sheet, Action Bar, Show Chat Element, Discount, Company Logo, Category, Scroll Edge Effect Soft, Show Button, Show Shop Button, Show Chat, Show Right Section Icons, Show Tool, Show Seller Button, Show Giveaway Modal, Show Notes, Wide Sheet, Toast / Snackbar, Image Library Tile

**Dostepne ikony (pelna lista z folderu):**
Account, Account Full, Add Photo, Add Video, Alert, Alert Full, Alert Off, Alert Off Full, Block, Bookmark, Bookmark Full, Browse, Browse Full, Camera, Camera Switch, Card, Check, Clip, Clock, Close, Close Round, Collapse, Corners, Datepicker, Double Chevron, Down Chevron, Download, Edit, Eye, Eye Close, Filter, Flash, Flash Sale, Follow User, Followers, Gallery Photo, Gallery Photo Full, Gallery Video, Gallery Video Full, Giveaway, Hammer 2, Info, Left Chevron, Locker, Locker Full, Message, Minus, more, Open, Orders, Orders Full, Package, Paczkomat, Photo, Pin, Play, Play full, Plus, Promote, Protection, Quote, Recipe, Report, Right Chevron, Scan, Search, Sell, Send Chat, Share, Shipping, Shop, Shop Full, Shortcut, Skull, Skull Full, Slow Motion, Sound Off, Sound On, Star, Star Full, Start, Start Full, Trash, Unfollow User, Up Chevron, Upload, Video, Wallet, Warning

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
