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
