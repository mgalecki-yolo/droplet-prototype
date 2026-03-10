# Przeplywy

## FigJam Flow Board

- **URL:** https://www.figma.com/board/smdQpxfQiBbesEFpLBlhq6/Droplet-Flow
- **Zasada:** FigJam zawiera PNG screenshoty + strzalki (flow). Detale komponentow pobieramy z glownego pliku Figma per ekran.

---

## Mapa ekranow — Node ID (glowny plik Figma)

| # | Ekran | Node ID | Figma link |
|---|-------|---------|------------|
| 1 | Droplet Home | `4979:110252` | [link](https://www.figma.com/design/8Q6f8lepXFXel1BVjyJeNU/Droplet-App?node-id=4979-110252) |
| 2 | Browse (kategorie) | `460:3644` | [link](https://www.figma.com/design/8Q6f8lepXFXel1BVjyJeNU/Droplet-App?node-id=460-3644) |
| 3 | Seller Profile | `4210:168633` | [link](https://www.figma.com/design/8Q6f8lepXFXel1BVjyJeNU/Droplet-App?node-id=4210-168633) |
| 4 | Live Show (Buyer) | `2332:27496` | [link](https://www.figma.com/design/8Q6f8lepXFXel1BVjyJeNU/Droplet-App?node-id=2332-27496) |
| 5 | Seller Hub Summary | `3006:27970` | [link](https://www.figma.com/design/8Q6f8lepXFXel1BVjyJeNU/Droplet-App?node-id=3006-27970) |
| 6 | Schedule Show (empty) | `3009:28145` | [link](https://www.figma.com/design/8Q6f8lepXFXel1BVjyJeNU/Droplet-App?node-id=3009-28145) |
| 7 | Schedule Show (filled) | `3144:34807` | [link](https://www.figma.com/design/8Q6f8lepXFXel1BVjyJeNU/Droplet-App?node-id=3144-34807) |
| 8 | Show Scheduled (dark) | `3009:30776` | [link](https://www.figma.com/design/8Q6f8lepXFXel1BVjyJeNU/Droplet-App?node-id=3009-30776) |
| 9 | Add Products (empty) | `4566:35739` | [link](https://www.figma.com/design/8Q6f8lepXFXel1BVjyJeNU/Droplet-App?node-id=4566-35739) |
| 10 | Add Products (media) | `4569:37283` | [link](https://www.figma.com/design/8Q6f8lepXFXel1BVjyJeNU/Droplet-App?node-id=4569-37283) |
| 11 | Add Products (drafts) | `4569:36199` | [link](https://www.figma.com/design/8Q6f8lepXFXel1BVjyJeNU/Droplet-App?node-id=4569-36199) |
| 12 | Review Product | `4733:40207` | [link](https://www.figma.com/design/8Q6f8lepXFXel1BVjyJeNU/Droplet-App?node-id=4733-40207) |
| 13 | Products list | `5189:45460` | [link](https://www.figma.com/design/8Q6f8lepXFXel1BVjyJeNU/Droplet-App?node-id=5189-45460) |

---

## Flow — nawigacja (strzalki z FigJam)

### Ekran startowy: Home
- Home → Browse (tab Browse)
- Home → Seller Profile (tap na hosta)
- Home → Live Show (tap na live show)
- Home → Seller Hub (tab Sell)

### Z Live Show:
- Live Show → Seller Profile (tap na hosta)

### Sciezka A: Schedule Show (z Seller Hub)
1. Seller Hub → Schedule Show (empty)
2. Schedule Show (empty) → Schedule Show (filled)
3. Schedule Show (filled) → Show Scheduled (dark)
4. Show Scheduled → powrot do Seller Hub

### Sciezka B: Add Products (z Seller Hub)
1. Seller Hub → Add Products (empty)
2. Add Products (empty) → Add Products (media selected)
3. Add Products (media) → Add Products (drafts)
4. Add Products (drafts) → Review Product
5. Review Product → Products list
6. Products list → powrot (petla do Add Products)

### Powroty:
- Add Products (media) → Seller Hub (back)
- Review Product → Add Products (drafts) (back)

---

# FLOW A: Seller — Schedule Show

## Journey

Seller chce zaplanowac nowy live show z poziomu Seller Hub.

1. Seller jest na **Seller Hub Summary** → tapuje "Schedule Show"
2. Otwiera sie **Schedule Show (empty)** — pusty formularz
3. Seller wypelnia dane show (nazwa, data, moderatorzy, powtarzanie)
4. Opcjonalnie nagrywa/dodaje video intro
5. Wybiera kategorie, ustawienia tresci, widocznosc
6. Tapuje "Schedule Show" → walidacja → show zostaje zaplanowany
7. Przechodzi na **Show Scheduled (dark)** — ekran potwierdzenia
8. Z Show Scheduled moze: dodac produkty, udostepnic, edytowac, wrocic do Seller Hub

## Ekrany

| Krok | Ekran | Node ID | Status |
|------|-------|---------|--------|
| 1 | Seller Hub Summary | `3006:27970` | ✅ zdefiniowany |
| 2-6 | Schedule Show (empty) | `3009:28145` | ✅ zdefiniowany |
| 6 | Schedule Show (filled) | `3144:34807` | ✅ zdefiniowany |
| 7-8 | Show Scheduled (dark) | `3009:30776` | ✅ zdefiniowany |

## Stany ekranow

### Seller Hub Summary

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| default | Seller ma zaplanowane show i produkty | Sekcja "Upcoming Shows" z Show Tile + sekcja "Products" z Prod Tile Horizontal |
| no-shows | Brak zaplanowanych show | Sekcja "Upcoming Shows" z empty state (tekst zachety), przycisk "Schedule Show" widoczny |
| no-products | Brak produktow | Sekcja "Products" z empty state, przycisk "Add Product" widoczny |
| empty | Nowy seller, brak show i produktow | Obie sekcje w empty state |

**Komponenty:** App Top (No actions, tytul "Seller Hub"), Show Tile (Coming Soon), Prod Tile Horizontal, Button 1CTA ("Schedule Show", "Add Product"), App Tabbar (5 buttons, Sell aktywny)

### Schedule Show (empty)

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| default | Pusty formularz | Wszystkie pola w stanie Default (placeholder), brak video, CTA "Schedule Show" na dole |
| video-tips | Sekcja "Introduce your show" widoczna | Dashed border placeholder + "Add or record video (Optional)" + lista tipow (Vertical 9:16, Up to 25s, Show yourself, Explain what you'll sell) |
| category-recently-used | Seller ma historie kategorii | Chipsy "Recently used" nad dropdownem Category (np. "Coins & Money", "Figures & Statues") |
| validation-error | Brak wymaganych pol | Podswietlone pola: Name (wymagane), Date & Time (wymagane). Reszta opcjonalna |

**Pola formularza:**
- **Name your show** — Form Input (Default → Filled), wymagane
- **Date & Time** — Form Input z ikona kalendarza (Right Icon), wymagane, otwiera natywny picker
- **Add Moderators (optional)** — Form Input z chevron (Right Icon), otwiera liste/wyszukiwarke userow
- **Repeats** — Form Input z chevron, wartosci: "Does not repeat" / "Daily" / "Weekly" / "Custom"
- **Introduce your show** — Video upload area (dashed border), opcjonalne
- **Category** — Recently used chips (Button Category) + Form Input z chevron
- **Explicit content** — Switch (Off domyslnie)
- **Show Discoverability** — Radio Button: Public (domyslnie off) / Private (domyslnie on)
- **Schedule Show** — Button 1CTA (rd10, full-width), aktywny gdy Name + Date wypelnione

### Schedule Show (filled)

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| default | Formularz z danymi | Pola wypelnione, video preview widoczny, CTA aktywny |
| video-uploaded | Video dodane | Miniatura video z overlay (data show, tytul), przyciski "Edit Video" + "Delete" (trash) |
| video-processing | Video sie przetwarza | Loading indicator na miniaturze video |

**Roznice vs empty:** pola Filled (label gora + wartosc), chipsy kategorii zaznaczone, video preview widoczny z przyciskami edycji

### Show Scheduled (dark)

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| default | Show zaplanowany, czas w przyszlosci | Ciemne tlo, karta "Show Starts [data], [godzina]", "Start Show" (1CTA rd10), "Add Products to This Show" (2CTA bialy) |
| show-starting-soon | <15 min do startu | Taki sam, ale tekst "Show Starts in X minutes" |
| show-live | Czas startu minal | "Start Show" staje sie aktywne/pulsujace |
| no-products | Brak produktow przypisanych do show | "Add Products to This Show" ma badge/podswietlenie zachecajace |

**Layout ciemnego ekranu:**
- **Gora:** App Top wariant Show (avatar hosta + nazwa + badge "Scheduled" + chevron down)
- **Srodek:** Karta z data/godzina + 2 przyciski CTA (Stack pionowy)
- **Prawo-dol:** Pionowy pasek ikon — Add to Calendar, Share, Add Video (z badge jesli brak), Edit, Products (Show Shop Button z badge liczby produktow)
- **Dol:** Chat input (placeholder "Say something...") — nieaktywny przed startem show

**Ikony prawego paska:**
- Add to Calendar (ikona) — dodaje do kalendarza urzadzenia
- Share (Icon Share) — udostepnia link do show
- Add Video (Icon Camera) — z czerwona kropka jesli brak video intro
- Edit (Icon Edit) — wraca do Schedule Show (filled) do edycji
- Products (Show Shop Button) — otwiera Add Products flow, badge z liczba produktow

---

# FLOW B: Seller — Add Products

## Journey

Seller dodaje produkty do swojego katalogu — moze to robic z Seller Hub lub z ekranu Show Scheduled.

1. Seller tapuje "Add Product" (z Seller Hub) lub "Add Products to This Show" (z Show Scheduled)
2. Otwiera sie **Add Products (empty)** — 2 taby: Media Library / Drafts
3. Tab Media Library: seller wybiera zdjecia/video z biblioteki
4. Po wybraniu mediow przechodzi do stanu **Add Products (media selected)**
5. Tapuje "Create X Product" → system tworzy draft(y) produktu z wybranych mediow
6. Automatyczne przejscie na tab **Add Products (drafts)** — lista draftow
7. Seller tapuje "Review Product" przy wybranym drafcie
8. Otwiera sie **Review Product** — pelny formularz edycji produktu
9. Seller wypelnia dane i tapuje "Save Draft" lub "Publish"
10. Toast potwierdzenia → powrot do listy draftow lub **Products list**
11. Z Products list moze zarzadzac produktami (aktywne, drafty, nieaktywne, wyprzedane)

## Ekrany

| Krok | Ekran | Node ID | Status |
|------|-------|---------|--------|
| 1 | Seller Hub Summary | `3006:27970` | ✅ zdefiniowany |
| 1 | Show Scheduled (dark) | `3009:30776` | ✅ zdefiniowany |
| 2-3 | Add Products (empty) | `4566:35739` | ✅ zdefiniowany |
| 4-5 | Add Products (media) | `4569:37283` | ✅ zdefiniowany |
| 6 | Add Products (drafts) | `4569:36199` | ✅ zdefiniowany |
| 7-9 | Review Product | `4733:40207` | ✅ zdefiniowany |
| 10-11 | Products list | `5189:45460` | ✅ zdefiniowany |

## Stany ekranow

### Add Products (empty)

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| default-media | Tab Media Library aktywny, brak mediow | Empty state: ikona obrazka + sparkles, "Add Photos and Videos", tekst pomocniczy "Add your photos and videos first, then create multiple products." |
| default-drafts | Tab Drafts aktywny, brak draftow | Empty state (analogiczny tekst o draftach) |
| has-drafts-badge | Tab Media Library aktywny, ale istnieja drafty | Tab "Drafts" z badge (liczba draftow, np. "20") |

**Komponenty:** App Top (Actions on both sides: X close prawo, tytul "Add Products"), segmented tabs (Media Library / Drafts)

### Add Products (media selected)

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| default | 1+ media zaznaczone | Siatka Image Library Tile (Unselected/Selected), zaznaczone maja numerki (1, 2, 3...), "Add Media" placeholder (dashed), Action Bar na dole: "Delete" (2CTA) + "Create X Product" (1CTA rd10) |
| multi-select | Wiele zdjec zaznaczonych | Jak default, ale "Create X Products" (liczba mnoga), numerki selekcji na zdjeciach |
| max-media | Osiagnieto limit mediow | "Add Media" placeholder znika lub jest disabled |
| has-video | Zaznaczono video | Image Library Tile z Play badge (lewy-dol), reszta jak default |

**Logika selekcji:**
- Tap na niezaznaczone zdjecie → zaznacza (numer kolejny)
- Tap na zaznaczone zdjecie → odznacza (numerki sie przeliczaja)
- Kazde zaznaczone zdjecie = 1 produkt (1 media → 1 draft)
- Przycisk "Create X Product" pokazuje liczbe zaznaczonych mediow

**Komponenty:** Image Library Tile (Selected/Unselected), Action Bar (Delete + Create), App Top (X close)

### Add Products (drafts)

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| default | Lista draftow | Tab "Drafts X" aktywny (X = liczba), lista produktow: miniatura + nazwa + opcjonalny badge "Recently Added" + Trash icon + "Review Product" button (1CTA rd10) per produkt |
| single-draft | 1 draft | Lista z 1 pozycja |
| recently-created | Swiezo utworzone drafty | Badge "Recently Added" na nowych draftach |

**Akcje per produkt:**
- Trash icon → Action Sheet potwierdzenia usuwania
- "Review Product" (1CTA rd10) → otwiera Review Product dla tego draftu

### Review Product

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| default-draft | Nowy draft z jednym zdjeciem | Cover photo + "Add Media" placeholder, nazwa wypelniona z media, opis pusty (0/150), Category/For Who/Condition domyslne, Buy now tab aktywny, Price/Quantity puste, Save Draft + Publish |
| filled | Wszystkie pola wypelnione | Jak default ale pola Filled, Publish aktywny |
| auction-mode | Przelaczono na tab Auction | Zamiast Price: "Starting bid" + "Min increment", brak Quantity |
| has-variants | Dodano wariant(y) | Sekcja wariantow rozwinieta, "+ Add Variant" pod spodem |
| reserved-for-live | Wlaczony toggle "Reserved for Live" | Switch On, tekst "The product can only be purchased within a show." |
| validation-error | Proba Publish bez wymaganych pol | Podswietlone brakujace pola: nazwa (wymagana), Category (wymagana), Price (wymagana) |

**Pola formularza:**
- **Cover photo** — miniatura 96x96, rounded 12px, badge "Cover"
- **Add Media** — dashed placeholder, otwiera Media Library
- **Nazwa produktu** — Form Input (tekstowy), wymagane
- **Opis** — Form Input multiline, max 150 znakow, licznik "X/150"
- **Category** — Form Input z chevron, otwiera picker, wymagane
- **For Who** — Form Input z chevron (Women/Men/Unisex/Kids)
- **Condition** — Form Input z chevron (New/Like New/Lightly Used/Used)
- **Buy now / Auction** — Segmented toggle (2 taby)
- **Price** — Form Input numeryczny, wymagane (w trybie Buy now)
- **Quantity** — Form Input numeryczny, domyslnie 1 (w trybie Buy now)
- **+ Add Variant** — Link button, otwiera formularz wariantu
- **Reserved for Live** — Switch (Off domyslnie)
- **Shipping size** — Form Input z chevron
- **Save Draft** — Button 2CTA (bialy), zawsze aktywny
- **Publish** — Button 1CTA (rd10), aktywny gdy wymagane pola wypelnione

**Po Save Draft:** Toast "Your product has been saved as draft" → powrot do Add Products (drafts)
**Po Publish:** Toast "Your product has been created / Review it in Drafts" → powrot do Products list (tab Active)

### Products list

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| default | Lista aktywnych produktow | App Top (back + "Manage"), tytul "Products", Tabs: Active (X) / Drafts (X) / Inactive (X) / Sold out, Filter pills: All / Auction / Buy now, lista produktow, "Add Product" (1CTA rd10) na dole |
| tab-drafts | Tab Drafts aktywny | Lista draftow (produkty bez ceny, status draft) |
| tab-inactive | Tab Inactive aktywny | Produkty dezaktywowane |
| tab-sold-out | Tab Sold out aktywny | Produkty wyprzedane (Quantity = 0) |
| filter-auction | Filtr "Auction" aktywny | Tylko produkty typu Auction widoczne |
| filter-buy-now | Filtr "Buy now" aktywny | Tylko produkty typu Buy Now widoczne |
| empty-tab | Wybrany tab nie ma produktow | Empty state w obszarze listy |
| manage-mode | Po tapnieciu "Manage" | Checkboxy na produktach, bulk actions na dole (Action Bar: Delete + Move) |

**Produkt na liscie (Prod Tile Horizontal wariant):**
- Miniatura 140x140, rounded 12px
- Nazwa (F22 14px SemiBold)
- Atrybuty: "Variants: X", "Quantity: X" (badge pills)
- Cena (Price Badge — Buy now: "$90", Auction: "From $1")
- Menu "..." (Context Menu: Edit, Deactivate, Duplicate, Delete)

---

# FLOW C: Seller — Prowadzenie Live Show

## Journey

Seller uruchamia i prowadzi transmisje na zywo — zarzadza aukcjami, sprzedaza, chatem.

1. Seller jest na **Show Scheduled (dark)** → tapuje "Start Show"
2. Otwiera sie kamera → **Live Show (Seller Mode)**
3. Seller widzi chat (Seller Mode), prawą kolumnę ikon (Seller), Show Tool (Seller Mode)
4. Seller wybiera produkt z listy → produkt pojawia sie w Show Tool
5. Seller tapuje "Start Auction" → aukcja rusza, timer odlicza
6. Buyerzy licytuja → "X Bids" aktualizuje sie na zywo
7. Aukcja konczy sie → seller tapuje "Run Next" → nastepny produkt
8. Alternatywnie: seller przelacza na Buy Mode → "Run Next" przechodzi do kolejnego produktu w trybie kup teraz
9. Seller konczy show → ekran podsumowania

## Ekrany

| Krok | Ekran | Node ID | Status |
|------|-------|---------|--------|
| 1 | Show Scheduled (dark) | `3009:30776` | ✅ zdefiniowany |
| 2-9 | Live Show (Seller Mode) | `2332:27496` (bazowy) | ⚠️ wariant Seller — do zdefiniowania w Figmie |

## Stany ekranow

### Live Show — Seller Mode

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| pre-show | Przed startem, kamera wlaczona | Podglad kamery, App Top Show (nazwa hosta + "Scheduled" badge), brak chatu, "Go Live" CTA |
| live-no-product | Live aktywne, brak produktu w Show Tool | Video pelny ekran, App Top Show (Live Badge z liczba widzow), Show Chat Seller Mode, Show Right Section Icons Seller, brak Show Tool |
| live-auction-ready | Produkt wybrany, aukcja niegotowa | Show Tool Seller Mode z miniaturka produktu + nazwa + "Start Auction" (Show Seller Button) |
| live-auction-active | Aukcja trwa | Show Tool z aktualnym bid, timer odliczajacy, "X Bids" (Show Seller Button wariant "Bids - auction live") |
| live-auction-ended | Aukcja zakonczona | Show Seller Button wariant "Next Auction" — "23 bids" pill + "Run Next" CTA |
| live-buy-mode | Tryb Buy Now aktywny | Show Tool z produktem, "X sold" pill + "Run Next" CTA (Show Seller Button wariant "Buy Mode") |
| live-giveaway | Giveaway aktywny | Show Giveaway Modal widoczny, timer losowania |
| show-ended | Show zakonczony | Ekran podsumowania (do zdefiniowania) |

**Roznice Seller vs Buyer Mode:**
- **Chat:** Show Chat wariant Seller Mode — dodatkowy Show Button 38px (Icon Shortcut) obok inputa
- **Ikony prawa kolumna:** Show Right Section Icons wariant Seller — Promote, Clip, Share, Switch Camera, Products (zamiast Clip, Share, Wallet, Products w Buyer)
- **Show Tool:** wariant Seller Mode — Show Seller Button zamiast Bid slider
- **App Top:** taki sam wariant Show, ale seller widzi swoj profil

**Komponenty Seller-only:**
- Show Seller Button (4 warianty: Start Auction, Bids live, Next Auction, Buy Mode)
- Show Chat Seller Mode (z przyciskiem Shortcut)
- Show Right Section Icons Seller

---

# FLOW D: Buyer — Przegladanie i kupowanie

## Journey

Uzytkownik (buyer) wchodzi do aplikacji, przegląda oferty i kupuje produkty — przez live show lub bezposrednio.

1. Buyer otwiera aplikacje → **Home** z karuzelami show
2. Przegląda karuzele: Live Now, Followed Hosts, popularne kategorie (do ~8 karuzeli)
3. Moze tapnac kategorie z paska → przechodzi na **Subcategory** z 2 karuzelami + lista produktow
4. Moze tapnac show tile → wchodzi w **Live Show (Buyer)**
5. Moze tapnac produkt (z Subcategory lub Seller Profile) → wchodzi na **Product Page**
6. Z Product Page: Buy Now → **Checkout**, lub Go to Show → Live Show, lub Notify Me → notyfikacja push
7. W Live Show: ogląda, licytuje (Bid slider) lub kupuje (Buy Now), ustawia wallet i adres dostawy
8. Po zakupie: zamówienie widoczne w **Activity → Orders**

## Ekrany

| Krok | Ekran | Node ID | Status |
|------|-------|---------|--------|
| 1-2 | Home | `4979:110252` | ✅ zbudowany |
| 3 | Subcategory | — | ⚠️ czesciowo zbudowany |
| 4,7 | Live Show (Buyer) | `2332:27496` | ⚠️ czesciowo zbudowany |
| 5-6 | Product Page | — | ❌ nowy ekran — do zaprojektowania |
| 6 | Checkout (sheet) | — | ❌ nowy ekran — do zaprojektowania |
| 7 | Wallet (sheet w show) | — | ❌ nowy ekran — do zaprojektowania |
| 7 | Delivery Address (sheet w show) | — | ❌ nowy ekran — do zaprojektowania |
| 8 | Activity → Orders | — | ❌ pusty shell |

## Stany ekranow

### Home

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| default | Pelny ekran z karuzelami | Search Input (placeholder) + Category Buttons (10, scroll poziomy) + karuzele Show Tile |
| loading | Ladowanie karuzeli | Skeleton placeholdery na karuzele |
| no-live | Brak aktualnych live shows | Karuzela "Live Now" pusta lub ukryta, reszta widoczna |

**Karuzele (kolejnosc od gory):**
1. **Live Now** — aktualnie trwajace show (Show Tile wariant Default z Live Badge + liczba widzow)
2. **Followed Hosts** — show od sprzedawcow ktorych followuje (Show Tile wariant Coming Soon lub Default)
3. **Popularne w tym tygodniu** — algorytmicznie dobrane wg najpopularniejszych kategorii
4. **Najwiecej ogladajacych** — show sortowane po viewerach
5-8. Kolejne karuzele — dobierane algorytmicznie, rozne klucze

**Category Buttons (10):**
- Fashion (ma podkategorie), Collectibles (ma podkategorie), Beauty, Home, Electronics, For Kids, Handmade, Food & Nature, Outdoor & Sports, Mystery
- Tap na kategorie BEZ podkategorii → Subcategory (z produktami tej kategorii)
- Tap na kategorie Z podkategoriami → lista podkategorii → potem Subcategory

**Komponenty:** Search Input, Button Category (scroll), Show Tile (Default/Coming Soon), App Tabbar (5 buttons, Start aktywny)

### Subcategory

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| default | Kategoria z live shows i produktami | App Top (back + nazwa kategorii), 2 karuzele (Live Now + Upcoming) + lista produktow poniżej |
| no-live | Brak live shows w kategorii | Karuzele puste/ukryte, tylko lista produktow |
| empty | Brak show i produktow | Empty state z zacheta |

**Layout:**
- **Karuzela 1:** "Live Now" — show aktualnie trwajace w tej kategorii (Show Tile Default)
- **Karuzela 2:** "Upcoming" — zaplanowane show w tej kategorii (Show Tile Coming Soon)
- **Lista produktow:** Prod Tile Vertical — produkty wszystkich sprzedawcow w kategorii (followowani i nie)
- Scroll w dol: jesli nie znajde nic w karuzelach, moge przegladac produkty

**Komponenty:** App Top (Actions on left, back + tytul kategorii), Show Tile, Prod Tile Vertical, App Tabbar

### Product Page

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| buy-now | Produkt w trybie Buy Now | Zdjecie + opis + atrybuty + Follow seller + Message + Track + **"Buy Now" CTA** |
| auction-live | Produkt w trybie aukcji, show trwa | Zdjecie + opis + atrybuty + Follow seller + Message + Track + **"Go to Show" CTA** |
| auction-upcoming | Produkt w trybie aukcji, show zaplanowany | Zdjecie + opis + atrybuty + Follow seller + Message + Track + **"Notify Me" CTA** |
| auction-no-show | Produkt aukcyjny, brak zaplanowanego show | Zdjecie + opis + atrybuty + Follow + Message + Track + informacja "Available in upcoming shows" |

**Elementy ekranu:**
- **Zdjecie produktu** — glowne zdjecie, galeria jesli wiecej
- **Nazwa i opis** — tekst, podstawowe atrybuty (rozmiar, stan, kategoria)
- **Sprzedawca** — User Avatar + nazwa + przycisk **Follow**
- **Message** — przycisk "Napisz do sprzedawcy w sprawie tego przedmiotu" → otwiera Messages w Activity
- **Track / Watch** — przycisk sledzenia produktu (powiadomienia o zmianach)
- **CTA (dolny pasek):**
  - Buy Now: App Tabbar wariant "Product Two Button Message" — ikona Message (52px) + "Buy Now" (rd10, 293px)
  - Auction live: App Tabbar wariant "Product Two Buttons" — Message + "Go to Show"
  - Auction upcoming: App Tabbar wariant "Product Two Buttons" — Message + "Notify Me"

**Komponenty:** App Top (back + tytul), User Avatar, Prod Tile (zdjecie), Product Page Details Element, App Tabbar (Product warianty), Button Follow

### Live Show (Buyer) — rozszerzenie

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| watching | Ogladam show, brak aktywnego produktu | Video + App Top Show + Show Chat Buyer + Show Right Section Icons Buyer |
| product-buy-now | Sprzedawca pokazuje produkt Buy Now | + Show Tool z produktem + "Buy Now" CTA (Bid slider zamieniony na Buy button) |
| product-auction | Sprzedawca prowadzi aukcje | + Show Tool z produktem + Bid slider ("Bid $X" + double chevron) |
| bidding | Zlozono oferte, czekam | Show Tool z aktualnym bid, timer |
| outbid | Ktos przebil moja oferte | Toast/alert "You've been outbid" + mozliwosc ponownego bida |
| won | Wygralem aukcje | Modal/toast "You won!" + przejscie do checkout |
| lost | Przegralem aukcje | Toast "Auction ended" + info kto wygral |
| checkout-in-show | Kupuje (Buy Now lub po wygranej aukcji) | Checkout sheet (overlay) — karta + adres → potwierdzenie |

**Wallet i adres dostawy (z prawej kolumny ikon):**
- Ikona **Wallet** (Show Right Section Icons) → otwiera sheet z opcjami platnosci
  - Dodaj karte / wybierz zapisana karte
  - Apple Pay
- Ikona **Adres** → otwiera sheet z adresem dostawy
  - Paczkomat (wybor z mapy/listy)
  - Zwykly adres (formularz)
- Buyer moze ustawic wallet i adres PRZED zakupem, na etapie show
- Przy checkout: jesli wallet i adres juz ustawione → szybkie potwierdzenie

**Komponenty:** App Top Show, Show Chat Buyer, Show Right Section Icons Buyer (Clip, Share, Wallet, Products), Show Tool, App Tabbar (Two Buttons: Pre-Bid + Buy Now)

### Checkout (sheet)

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| default | Podsumowanie zamowienia | Produkt (miniatura + nazwa + cena) + metoda platnosci + adres dostawy + "Confirm" CTA |
| no-payment | Brak metody platnosci | Sekcja platnosci podswietlona, "Add Payment Method" link |
| no-address | Brak adresu dostawy | Sekcja adresu podswietlona, "Add Address" link |
| processing | Platnosc w trakcie | Loading indicator na CTA |
| confirmed | Zamowienie potwierdzone | Checkmark + "Order Confirmed" + "View in Orders" link |
| failed | Platnosc nie powiodla sie | Error message + "Try Again" CTA |

**Komponenty:** Wide Sheet (Top Element + content), Form Input (platnosc, adres), Button 1CTA (Confirm), Company Logo (Apple Pay/karta)

### Activity — Orders

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| default | Lista zamowien | 3 taby: Orders / Notifications / Messages. Lista zamowien z miniatura + nazwa + status + data |
| empty | Brak zamowien | Empty state z zacheta do przegladania show |
| order-detail | Szczegoly zamowienia | Produkt + status (Paid/Shipped/Delivered/Returned) + tracking + sprzedawca |

**Statusy zamowien:** Paid → Shipped → Delivered (happy path), Returned (zwrot)

### Activity — Notifications

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| default | Lista notyfikacji | Typ: "Produkt dodany do show", "Show startuje za 5 min", "Twoja aukcja wygrana" itp. |
| empty | Brak notyfikacji | Empty state |

### Activity — Messages

| Stan | Opis | Elementy widoczne |
|------|------|-------------------|
| default | Lista konwersacji | Konwersacje ze sprzedawcami + watek Droplet (administracyjny) |
| conversation | Otwarta rozmowa | Chat z jednym sprzedawca — wiadomosci + input |
| droplet-thread | Watek Droplet | Ogloszenia i nowosci od administratora aplikacji |

**Zrodla wiadomosci:** z poziomu Product Page ("Message seller") lub z poziomu Seller Profile

---

# FLOW D — Nawigacja (podsumowanie)

### Z Home:
- Home → Subcategory (tap na Category Button)
- Home → Live Show (tap na Show Tile)
- Home → Browse (tab Browse)
- Home → Seller Hub (tab Sell)
- Home → Activity (tab Activity)
- Home → Profile (tab Account)

### Z Subcategory:
- Subcategory → Live Show (tap na Show Tile)
- Subcategory → Product Page (tap na produkt)
- Subcategory → Home (back)

### Z Product Page:
- Product Page → Checkout (Buy Now CTA)
- Product Page → Live Show (Go to Show CTA)
- Product Page → push notification (Notify Me CTA)
- Product Page → Messages (Message seller)
- Product Page → Seller Profile (tap na sprzedawce)

### Z Live Show (Buyer):
- Live Show → Wallet sheet (ikona Wallet)
- Live Show → Delivery Address sheet (ikona adresu)
- Live Show → Checkout sheet (po Buy Now lub wygranej aukcji)
- Live Show → Seller Profile (tap na hosta w App Top)

### Z Activity:
- Activity Orders → Order Detail
- Activity Messages → Conversation
- Activity Notifications → powiazany ekran (show, produkt, zamowienie)

---

# Opisy ekranow (referencja)

## Home (Start)
- Szukajka (Search Input, placeholder)
- Poziomy scroll buttonow kategorii (Category Button)
- Karuzele show przewijane w prawo (Show Tile) — pogrupowane tematycznie
- Tab Bar na dole (App Tabbar wariant 5 buttons, Start aktywny)

## Browse (Kategorie)
- Siatka kategorii (Category z pastelowymi ikonami, Main Category Pastel Icons 56px)
- Tap na kategorie → lista show i produktow w danej kategorii

## Seller Profile
- Avatar (User Avatar 72px), nazwa, bio, Follow button (Navi Button 42px Text)
- Statystyki: Followers, Following, Rating, Reviews
- Message / Share buttons (Navi Button 42px)
- Seller Reviews (Review Tile)
- Upcoming Shows (Show Tile, Coming Soon)
- Finished Shows (Show Tile, Passed)
- Products (Prod Tile Vertical)

## Live Show (Buyer)
- Pelny ekran video
- App Top wariant Show (info o hoscie, Live Badge, follow)
- Show Chat wariant Buyer Mode (wiadomosci, pinned comment, input)
- Show Right Section Icons wariant Buyer (Clip, Share, Wallet, Products)
- Show Tool (produkt, cena, Bid slider / Buy Now)

---

# Pozostale flow (do zaimplementowania pozniej)

## Buyer — Ogladanie i kupowanie na aukcji
- Buyer dolacza do live show
- Widzi produkty w Show Tool
- Przesuwa Bid slider → stawia oferte
- Aukcja konczy sie → wygrywa → Checkout
- Stany: watching, bidding, outbid, won, lost

## Buyer — Buy Now
- Buyer widzi produkt w trybie Buy Now
- Tapuje "Buy Now" → Checkout sheet
- Wybiera adres + platnosc → potwierdza
- Stany: browsing, checkout, confirmed, payment-failed

## Giveaway (podczas show)
- Host uruchamia giveaway → Show Giveaway Modal
- Buyer: "Enter Giveaway!" CTA
- Timer + losowanie + wynik
- Stany: entry-open, countdown, drawing, winner-announced

## Activity
- Zamowienia (lista z statusami: Paid, Shipped, Delivered, Returned)
- Wiadomosci (czat z sellerami/buyerami)
- Powiadomienia (show alerts, order updates, giveaway results)

## Account
- Profil uzytkownika (User Avatar, edycja bio, social links)
- Ustawienia (adresy, platnosci, notyfikacje, prywatnosc)

## Wallet / Checkout
- Opcje platnosci (Apple Pay, karta — Company Logo warianty)
- Adresy dostawy (Kurier, Paczkomat)
- Stany: address-selection, payment-selection, processing, confirmed, failed
