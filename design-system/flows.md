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
| 4 | Live Show | `2332:27496` | [link](https://www.figma.com/design/8Q6f8lepXFXel1BVjyJeNU/Droplet-App?node-id=2332-27496) |
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

## Opisy ekranow

### Home (Start)
- Szukajka (placeholder)
- Poziomy scroll buttonow kategorii (Category Button)
- Karuzele show przewijane w prawo (Show Tile) — pogrupowane tematycznie
- Tab Bar na dole (App Tabbar)

### Browse (Kategorie)
- Siatka kategorii (Category z pastelowymi ikonami)
- Tap na kategorie → lista show i produktow w danej kategorii

### Seller Profile
- Avatar, nazwa, bio, Follow button
- Statystyki: Followers, Following, Rating, Reviews
- Message / Share buttons
- Seller Reviews (Review Tile)
- Upcoming Shows (Show Tile)
- Finished Shows (Show Tile)
- Products (Prod Tile Vertical)

### Live Show
- Pelny ekran video
- App Top wariant Show (info o hoscie, Live Badge, follow)
- Show Chat (wiadomosci, pinned comment, input)
- Show Right Section Icons (Clip, Share, Wallet, Products)
- Show Tool (produkt, cena, Bid slider / Buy Now)

### Seller Hub Summary
- Tytul "Seller Hub"
- Upcoming Shows + Schedule Show button (rd10)
- Show Tile z nadchodzacym show
- Products + Add Product button (rd10)
- Lista produktow (Prod Tile Horizontal)
- App Tabbar

### Schedule Show (empty)
- Formularz: Name, Date & Time, Moderators, Repeats
- Introduce your show (video upload + tips)
- Category (recently used chips + dropdown)
- Content Settings (explicit content toggle)
- Show Discoverability (Public/Private)
- Schedule Show button (rd10)

### Schedule Show (filled)
- Ten sam formularz wypelniony danymi
- Video preview z edycja

### Show Scheduled (dark)
- Ciemny ekran z "Show Starts Tomorrow, 9:36 PM"
- Start Show button (rd10)
- Add Products to This Show button (bialy)
- Ikony: Add to Calendar, Share, Add Video, Edit, Products

### Add Products (empty)
- Media Library / Drafts tabs
- Empty state z ikona + "Add Photos and Videos"
- Tekst pomocniczy

### Add Products (media selected)
- Media Library tab, Drafts z badge
- Siatka zdjec z numerkami selekcji
- Add Media placeholder
- Delete + Create 1 Product button (rd10)

### Add Products (drafts)
- Drafts tab (Drafts 3)
- Lista produktow z miniaturka, nazwa, "Recently Added" badge
- Trash icon + Review Product button (rd10) per produkt

### Review Product
- Back arrow + tytul "Review Product"
- Zdjecie produktu (Cover) + Add Media
- Pola: nazwa, opis (0/150), Category, For Who, Condition
- Buy now / Auction toggle
- Price, Quantity, + Add Variant
- Reserved for Live toggle
- Shipping size
- Save Draft + Publish buttons

### Products list
- Back arrow + Manage button
- Tytul "Products"
- Tabs: Active, Drafts, Inactive, Sold out
- Filter pills: All, Auction, Buy now
- Lista produktow (miniaturka, nazwa, warianty, cena, menu ...)
- Add Product button (rd10)

---

## Pozostale flow (do zaimplementowania pozniej)

### Show — Seller
- Prowadzenie transmisji live
- Show Chat Seller Mode
- Show Right Section Icons Seller
- Show Seller Button (Start Auction / Bids live / Next Auction / Buy Mode)

### Giveaway (podczas show)
- Host uruchamia giveaway
- Buyer: Enter Giveaway modal
- Timer + losowanie + wynik

### Activity
- Zamowienia, Wiadomosci, Powiadomienia

### Account
- Profil uzytkownika, Ustawienia

### Wallet / Checkout
- Opcje platnosci (Apple Pay, karta)
- Adresy dostawy (Kurier, Paczkomat)
