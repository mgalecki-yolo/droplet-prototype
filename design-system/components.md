# Komponenty UI

Figma fileKey: `8Q6f8lepXFXel1BVjyJeNU`

---

## Gorna nawigacja — architektura

Dwa niezalezne elementy — **nie mylic**:

| Element | Node | Uzycie |
|---------|------|--------|
| `App Top` | 3673:47113 | Nawigacja strony (scroll header) |
| `Top Element` | 4165:53333 | Naglowek bottom sheetu / modala |
| `Top navi pattern` | 3673:47053 | Sekcja z przykladami uzycia App Top |

---

## App Top (node 3673:47113)

Scroll header — pojawia sie na gorze ekranow aplikacji.

**Wymiary:** 393 x 109px
**Tlo:** gradient ov40 (`#F2F0EC`) od przezroczystosci do pelnego koloru (efekt scroll fade)
**Backdrop blur:** 10px

**Struktura wewnetrzna:**
```
App Top (109px)
├── Status bar iPhone (59px)
└── Top Action (50px)
    ├── Left: NaviButton42Px (back) + opcjonalny tytul
    └── Right: opcjonalne przyciski akcji
```

**Tytul w App Top:** H40 — 16px Bold (700), kolor bw10 `#101828`

**Scroll behavior (Top navi pattern, node 3673:47053):**

Dwa stany nawigacji gornej — przelaczane na scroll:

| Stan | Opis |
|------|------|
| **Top page** | App Top (109px) bez tla/blur. Duzy tytul H15 (23px SemiBold) wyswietlany PONIZEJ App Top w contencie strony, z gap `10px` od dolnej krawedzi App Top. Tytul w headerze ukryty (`opacity:0`). |
| **Scroll** | App Top z tlem gradient ov40 + backdrop-blur 10px. Maly tytul H40 (16px Bold) pojawia sie wycentrowany w headerze (`opacity:1`). Duzy tytul scrolluje sie pod header. Przelaczenie na `scrollTop > 40px`. |

**Wymiary Top page (z Figmy, 393x149px):**
```
Top page frame (149px)
├── Status bar iPhone (0→59px)
├── Top Action (59→109px, h=50px)
│   ├── Back button: x=16, y=59, 42x42px
│   └── Title (hidden): centered, H40 16px Bold
├── Gap: 10px (109→119px)
└── Big Title: x=16, y=119, 361x30px, H15 23px SemiBold
```

**Warianty:**
| Wariant | Opis |
|---------|------|
| No actions | Tylko tytul |
| Actions on left | Back button + tytul |
| Actions on both sides | Back + tytul + 2 przyciski prawo |
| App Top (scroll) | 4 instancje z roznymi kombinacjami |
| App Top with Icons | Wariant z ikonami |
| Search | Szukajka — Search Input na gorze |
| Search + categories | Szukajka + poziomy scroll buttonow kategorii |
| Search + categories + filters | Szukajka + kategorie + filtry |
| Product Page | Wariant na stronie produktu (przezroczyste tlo, glass buttons) |
| Product Page Scroll | Wariant po scrollu na stronie produktu (tlo gradient + blur) |
| Wide Sheet Top | Naglowek Wide Sheet (grabber + toolbar) |
| Wide Sheet Top Solid | Naglowek Wide Sheet z solidnym tlem |
| **Show** (node `1829:416392`) | Wariant na ekranie live show — ciemne tlo z gradientem `rgba(57,57,57,0.5)→transparent`, backdrop-blur 2px. Left: Show Button (back) + User Avatar 32px + nazwa hosta (14px Bold white) + rating (Icon Star Full 12px + 4.8) + followers (Icon Followers 12px + 5k) + Follow pill (bg rd10, 10px SemiBold white). Right: Live Badge + Show Button (down chevron). |

---

## Top Element (node 4165:53333)

Naglowek **bottom sheetow / modali** — zgodny z Apple HIG Sheets.

**Struktura:**
```
Top Element
├── Grabber (5px x 36px, kolor: vibrant/primary)
└── Toolbar
    ├── Left Section: NaviButton42Px
    ├── Title (center): 20px SemiBold 600, bw30 #222A35, tracking -0.43px
    └── Right Section: 1-2 x NaviButton42Px
```

**Zaokraglenie gornych rogow:** `38px`

---

## Navi Button 42px (node 850:7633)

**Rozmiar bazowy:** `42 x 42px` (single icon), zmienna szerokosc dla double/text
**Shadow:** Interactive `0px 2px 8px rgba(0,0,0,0.06)`
**Rounded:** `296px` (pill)

| Wariant | Tlo | Zawartosc |
|---------|-----|-----------|
| iOS Glass | Droplet Glass (blur + glass overlay, 67% opacity) | Ikona 18px (np. Close) |
| iOS Glass Action | Droplet Glass + rd10 `#FF4252` accent | Ikona 18px white (np. Check) |
| iOS Glass Double | Droplet Glass, szerszy pill | 2 ikony 18px, gap 24px (np. Share + More) |
| iOS Glass Text | Droplet Glass, szerszy pill | Tekst B10 16px SemiBold bw20 (np. "Follow") |
| FlatGray | bg white | Ikona 18px |
| FlatGray Action | bg rd10 `#FF4252` | Ikona 18px white |
| FlatGray Double | bg white, szerszy pill | 2 ikony 18px, gap 24px |
| FlatGray Text | bg white, szerszy pill (98px) | Tekst B10 16px SemiBold bw20 |

**Droplet Glass — szczegolowa struktura (z Figmy node 4199:51633):**
```
BG Droplet Glass (42x42px)
├── Blur (absolute, inset: -26px, opacity: 0.67)
│   ├── Mask (bg white, inset: -50px) → Shape (bg black, inset: 76px, rounded 1000px)
│   └── Inner Blur: backdrop-blur 20px, bg rgba(0,0,0,0.04), filter blur(10px),
│        mix-blend-mode: hard-light, rounded 1000px
├── Fill (absolute, inset: 0, rounded: 296px)
│   ├── #333 (solid!) — mix-blend-mode: color-dodge
│   └── rgba(255,255,255,0.65) — bialy fill 65%
└── Glass Effect (transparent placeholder)
```

**CSS approximation:**
- Base: `backdrop-filter: blur(20px)`, `background: rgba(255,255,255,0.65)`, `box-shadow: Interactive`
- `::before`: `background: #333` (SOLID, nie rgba!), `mix-blend-mode: color-dodge`
- `::after`: `background: rgba(0,0,0,0.04)`, `mix-blend-mode: hard-light`, `filter: blur(10px)`, `opacity: 0.67`

**iOS Glass Action fill** (node 4199:52546): jak wyzej ale Fill zawiera dodatkowo `rgb(255,66,82)` (rd10) pod bialym layerem

---

## Button (node 32:11897)

**Shadow:** `0px 2px 8px rgba(0,0,0,0.06)` — uzywana na wszystkich bialych przyciskach

| Wariant | Tlo | Wymiary | Tekst | Uwagi |
|---------|-----|---------|-------|-------|
| Category | `#FFFFFF` | h-36px, pill | B20 12px SemiBold bw20 | shadow, pl-8px pr-16px |
| Category Selected | `ov15 #E3E1DC` | h-36px, pill | B20 12px SemiBold bw20 | bez shadow |
| Sub Category | `#FFFFFF` | h-36px, pill | B20 12px SemiBold bw20 | shadow, gap-4px |
| Sub Category Selected | `ov15 #E3E1DC` | h-36px, pill | B20 12px SemiBold bw20 | ma przycisk X (28px) |
| User | `#FFFFFF` | h-36px, pill | B20 12px SemiBold bw20 | avatar 32px + label, shadow |
| User Selected | `ov15 #E3E1DC` | h-36px, pill | B20 12px SemiBold bw20 | ma przycisk X (28px) |
| 36px Icon | `#FFFFFF` | 36x36px | — | ikona, shadow, rounded-40px |
| 36px Default | `#FFFFFF` | h-36px | B20 12px SemiBold bw20 | ikona + label, shadow |
| 36px Selected | `ov15 #E3E1DC` | h-36px | B20 12px SemiBold bw20 | ma przycisk X (28px) |
| **1CTA** | `rd10 #FF4252` | 52x114px | **B10 16px SemiBold white** | glowny CTA, shadow, rounded-70px |
| **2CTA** | `#FFFFFF` | 52x114px | **B10 16px SemiBold bw30** | drugorzedny CTA, shadow, rounded-70px |
| 1CTA Disable | `gw20 #D9D9D9` | 52x114px | B10 16px SemiBold bw40 | nieaktywny, bez shadow |
| Link | transparent | h-38px | 12px Medium bl10 `#0091FF` | px-16px, rounded-50px |

---

## Checkbox (node 2784:29426)

**Rozmiar:** `24 x 24px`

| Stan | Wyglad |
|------|--------|
| On | Kolko z obramowaniem (akcentowane) + Icon Check 16px wewnatrz |
| Off | Puste kolko z obramowaniem bw40/ov20 |
| Disable | Szare wypelnione kolko |

---

## Radio Button (node 850:6357)

**Rozmiar:** `24 x 24px`

| Stan | Wyglad |
|------|--------|
| On | Obramowanie akcentowane + wypelnione kolko w srodku |
| Off | Puste kolko z obramowaniem |
| Disable | Szare obramowanie + szare kolko |

---

## Switch (node 2345:28317)

**Wymiary:** `53 x 28px`, track rounded `18px`, thumb `28 x 20px` white rounded `18px`

| Stan | Tlo tracka | Pozycja thumba | Uwagi |
|------|-----------|----------------|-------|
| Off | gw10 `#BCBCBC` | Lewo | — |
| On | bw20 `#2A2F35` | Prawo | — |
| On Locked | bw40 `#7B8494` | Prawo | Icon Locker Full 16px na thumbie |

---

## Form Input (node 879:6392)

**Wymiary:** `349 x 60px`, bg white, border `1px solid ov20 #E9E6DD`, rounded `26px`

| Stan | Opis |
|------|------|
| Default | Placeholder F11 16px Regular, bw40 `#7B8494`, tracking -0.5px |
| Filled | Label F20 13px Regular bw40 (gora) + wartosc F10 16px Medium bw10 `#101828` (dol) |

**Opcjonalne elementy prawej strony:**
- **Right Link:** tekst 13px Regular bl10 `#0091FF`
- **Right Label:** tekst 13px Regular bw40 + opcjonalna ikonka (np. Apple Pay)
- **Right Icon:** Icon Right Chevron 18px
- **Support Text:** 12px Regular black, padding-left 16px (pod inputem, gap 4px)

---

## Search Input (node 3380:40412)

**Wymiary:** `361 x 42px`, bg white, fully rounded (pill), shadow Interactive `0px 2px 8px rgba(0,0,0,0.06)`
**Padding:** `px-12px py-10px`

**Struktura:**
```
Search Input
├── Icon Search 16px (lewo)
├── Placeholder: F11 16px Regular, gw10 #BCBCBC, tracking -0.5px
└── Close/Clear button 24px (prawo, bw30 circle)
```

---

## User Avatar (node 125:3437)

**Ksztalt:** kolo (fully rounded)

| Wariant | Rozmiar | Opis |
|---------|---------|------|
| Default 72px | 72x72px | Bg bl10 `#0091FF`, inicjal 20px SemiBold 600 white, tracking -0.5px |
| Default 48px | 48x48px | Bg bl10, inicjal 16px Bold 700 white |
| Default 32px | 32x32px | Bg bl10, inicjal 10px Bold 700 white |
| Default 16px | 16x16px | Bg bl10, inicjal 5px Bold 700 white |
| Picture 72px | 72x72px | Zdjecie profilowe, rounded-full |
| Picture 48px | 48x48px | Zdjecie profilowe, rounded-full |
| Picture 32px | 32x32px | Zdjecie profilowe, rounded-full |
| Picture 16px | 16x16px | Zdjecie profilowe, rounded-full |

---

## App Tabbar (node 348:3711)

**Wymiary:** 412 x 114px
**Tlo:** efekt glass — backdrop-blur, bg `ov40 #F2F0EC` 90% opacity
**Shadow BG:** `0px 0px 10px rgba(0,0,0,0.1)`

**Warianty:**
| Wariant | Opis |
|---------|------|
| `5 buttons` | Glowna nawigacja: Start / Browse / Sell / Activity / Account |
| `One Button` | Jeden pelnoszerokosciowy CTA (rd10, 361px) |
| `Two Buttons` | Pre-Bid (bialy, 112px) + Buy Now (rd10, 233px) |
| `Product Two Button Message` | Ikona Message (52px) + Buy Now (rd10, 293px) |
| `Product Two Buttons` | Message + Notify — dwa rowne biale przyciski |
| `Single Circle button` | Jeden okragly przycisk 52x52px (rd10) z ikona Plus |
| `Seller Page Search` | Pole wyszukiwania (42px, bg white, shadow) |
| `2CTA + 2CTA + 2CTA` | Trzy podwojne przyciski w rzedzie |
| `Product Page Flash Sale` | Wariant dla Flash Sale na Product Page |

**Zakladki w "5 buttons":**
- Ikony: 28x28px slot, ikony 20px
- Etykiety: 10px Medium, bw20 `#2A2F35`
- Aktywna zakladka: bg `rgba(227,225,220,0.8)` rounded-100px
- Tabs: Start, Browse, Sell, Activity, Account
- Padding: pt-16px pb-25px px-25px

**Placeholder dla wyszukiwania:** F11 16px Regular, gw10 `#BCBCBC`, tracking -0.5px

---

## Prod Tile Vertical (node 997:8089)

**Szerokosc:** `175px` stala
**Shadow zdjecia:** Show Shadow `0px 2px 8px rgba(0,0,0,0.25)`
**Zaokraglenie zdjecia:** `12px`
**Gap pod zdjeciem:** `4px`
**Padding dolny:** `16px`

**Warianty i wysokosci zdjecia:**
| Wariant | Wysokosc zdjecia | Badge |
|---------|-----------------|-------|
| Buy Now | 147px | `Buy Now` — czarne, biale litery |
| Flash Sale | 215px | `Flash Sale` z ikona Flash |
| Auction | 98px | `Hammer` + czas aukcji |
| Product In Show | 98px | `In Show` — obramowanie rd10 |
| Product NOW on Show | 98px | `Live Now` — tlo rd10 |
| Sold on list | 147px | `Sold` — ciemna nakladka |

**Product Badge:** `bg rgba(0,0,0,0.75)`, border `rgba(255,255,255,0.25)`, h-24px, rounded-40px, tekst F100 10px SemiBold white
**Price Badge:** `bg gw20 #D9D9D9`, rounded-37px, h-24px, px-8px, tekst F60 12px SemiBold
**Nazwa produktu:** F60 12px SemiBold, bw30 `#222A35`, overflow ellipsis
**Seller name:** F50 12px Bold, bw20 `#2A2F35`, z avatarem 16px
**Cena:** F60 12px SemiBold, bw40 `#7B8494`

---

## Prod Tile Horizontal (node 1023:9084)

**Wymiary:** `361 x 140px`, gap miedzy foto a trescia `12px`
**Zdjecie:** `140 x 140px`, rounded `12px`, shadow Show Shadow `0px 2px 8px rgba(0,0,0,0.25)`

| Wariant | Badge na zdjeciu | Przycisk akcji |
|---------|-----------------|----------------|
| Live Now | Product Badge "Live Now" (rd10) | "Live Auction" 36px white |
| Giveaway | Brak (bg gw30 `#F7F6F4` + logo Droplet) | "Join Giveaway" 36px white |
| Buy Now | Live Badge Alert | "Buy Now" 36px white |
| Place Your Bid | Live Badge Alert | "Place Your Bid" 36px white |
| Just Sold | Ciemna nakladka + "Sold" + badge "Now" | Brak |
| Sold (Sold List) | Badge z czasem (np. "23 min ago") | Brak |
| Activity - Purchase | Badge statusu zamowienia (Price Badge) | Brak — widok zamowienia kupujacego |

**Nazwa produktu:** F22 14px SemiBold, bw30 `#222A35`
**Attribute badges:** border gw20, F60 12px SemiBold bw40 (np. "Variants: 3", "Quantity: 92")
**Cena:** F60 12px SemiBold bw40 + Price Badge
**Sold info:** F50 12px Bold bw10 "Buyer" + username bl10 + "Sold for $X"

---

## Show Tile (node 925:10712)

**Szerokosc:** `154px`, shadow: Show Shadow `0px 2px 8px rgba(0,0,0,0.25)`
**Zaokraglenie:** `10px`
**Gradient na zdjeciu:** `rgba(0,0,0,0) 65% → rgba(0,0,0,0.75) 100%` (bottom fade)

| Wariant | Badge gorny | Opis |
|---------|-------------|------|
| Default | Live Badge rd10 (liczba widzow) | Aktywny show |
| Coming Soon | Alert badge (liczba alertow) | Zaplanowany, badge z data |
| Passed | "Replay" badge bw10 | Zakonczony show |
| On grid (Seller Hub) | Live Badge / Alert badge | Wariant gridowy na Seller Hub — mniejszy tile |

**Tytul show:** F22 14px SemiBold, white, text-shadow `0px 1px 1px rgba(0,0,0,0.6)`
**Hostname:** F45 13px Bold, bw20 `#2A2F35`, z User Avatar 32px

---

## Live Badge (node 63:18637)

**Wysokosc:** `26px`, rounded `28px`
**Shadow:** `0px 3.758px 15.032px rgba(255,255,255,0.3), 0px 1.879px 3.758px rgba(0,0,0,0.1)`
**Border:** `rgba(255,255,255,0.3)` solid

| Wariant | Tlo | Ikona | Tekst |
|---------|-----|-------|-------|
| Live (26XI Live) | `rgba(255,66,82,0.85)` | — | Liczba widzow, B40 10px Bold white |
| Rehearsal | `rgba(255,66,82,0.85)` | — | "Rehearsal", B40 10px Bold white |
| Bookmark | `rgba(255,255,255,0.85)` | Icon Bookmark 12px | Liczba, 10px Bold `#364153` |
| Bookmark Selected | bw10 `#101828` | Icon Bookmark Full 12px | Liczba, 10px Bold white |
| Alert | `rgba(255,255,255,0.85)` | Icon Alert 12px | Liczba, 10px Bold bw30 |
| Alert Selected | bw10 `#101828` | Icon Alert Full 12px | Liczba, 10px Bold white |

---

## Product Badge (node 997:7420)

Naklejka na zdjeciu. `h-24px`, rounded `40px`, tekst F100 10px SemiBold white.

| Wariant | Tlo | Border |
|---------|-----|--------|
| Buy Now | `rgba(0,0,0,0.75)` | `rgba(255,255,255,0.25)` |
| Auction | `rgba(0,0,0,0.75)` | `rgba(255,255,255,0.25)` + Icon Hammer + czas |
| Flash Sale | `rgba(0,0,0,0.75)` | `rgba(255,255,255,0.25)` + Icon Flash + czas |
| In Show | `rgba(0,0,0,0.75)` | rd10 `#FF4252` |
| Live Now | `rgba(255,66,82,0.85)` | rd10 `#FF4252` |

---

## Price Badge (node 997:7850)

Pill z cena. `h-24px`, rounded `37px`, `px-8px`, tekst F60 12px SemiBold.

| Wariant | Tlo | Zawartosc |
|---------|-----|-----------|
| Buy Now | gw20 `#D9D9D9` | Cena + Icon Protection |
| Auction | gw20 `#D9D9D9` | Icon Hammer + "From $X" |
| Auction on going | gw20 `#D9D9D9` | Aktualna cena |
| Flashsale | gw20 `#D9D9D9` | Icon Flash + cena |
| Green | gr10 `#34C759` | Tekst bialy |
| Red / Sold Out | rd10 `#FF4252` | "Sold Out" bialy |
| Stroke | border gw20 | bw40 (np. "Variants 4") |
| Type8 / Payment Pending | or10 `#FF8D28` | Tekst bialy |
| Blue | bl10 `#0091FF` | Tekst bialy |
| Grey | gw10 `#BCBCBC` | Tekst bialy |

---

## Internal Message (node 747:7828)

**Tlo:** white, rounded `20px`, padding `12px`, szerokosc `349px`

| Wariant | Ikona | Kolor tytulu |
|---------|-------|--------------|
| Default | Icon Info | bw30 `#222A35` |
| Default with link | Icon Info | bw30 + chevron prawo |
| Warning | Icon Warning | or10 `#FF8D28` |
| Warning one line | Icon Report | bw10 `#101828`, szerokosc 217px |

**Tytul:** F50 12px Bold, **Opis:** F70 12px Regular

---

## Product Page — Details Element (node 1281:21238)

**Szerokosc:** `361px`, padding `py-15px`, separator: border-bottom `ov30 #EFEDE8`

| Wariant | Opis |
|---------|------|
| One Line | Label F60 12px SemiBold bw40 (lewa) + wartosc F40 13px SemiBold bw30 (prawa) + opcjonalny chevron |
| Multiline | Wiele par: Atrybut bw40 12px / Wartosc bw30 13px line-height 18px |

---

## Category Button (node 153:1373)

**Wymiary:** `72 x 86px`, rounded `39px`
**Ikona:** Category Pastel Icon 40x40px w slocie 43x43px
**Etykieta:** F75 11px SemiBold, bw20 `#2A2F35`, text-center, line-height 14px

---

## Main Category Icons (node 499:8990)

Ilustracyjne ikony `56x56px` dla kategorii: Fashion, Homemade, Beauty, Home, Collectible, Electronics, ForKids, Food & Drink, Outdoor & Sports, Mystery.

---

## Separator (node 2189:29932)

**Linia:** `1px` border-top, kolor ov20 `#E9E6DD`
**Szerokosc:** `325px` (z wcieciem od lewej, wyrownany do prawej)

---

## Context Menu (node 1433:16862)

**Wymiary:** `288px` szerokosc, rounded `36px`, py-10px
**Tlo:** Liquid Glass (frosted glass, bg `rgba(245,245,245,0.6)`)
**Shadow:** `0px 8px 40px rgba(0,0,0,0.12)`

**Struktura pozycji menu:**
```
Item (px-8px)
├── Icon 18px (pt-12px, wyrownanie do gory)
├── Label & Subtitle (py-10px, gap-2px)
│   ├── Label: F10 16px Medium, kolor primary
│   └── Subtitle: F20 13px Regular, bw40 #7B8494
└── Icon Right Chevron 12px (prawo)
```

**Separator miedzy pozycjami:** 1px, `#e6e6e6`, px-8px

---

## Popup Component (node 1148:12203)

**Overlay:** bg `rgba(0,0,0,0.25)`, pelny ekran 393x852px
**Karta:** `300px` szerokosc, rounded `34px`, glass effect, padding `14px`
**Shadow:** `0px 8px 40px rgba(0,0,0,0.12)`

**Warianty stylu:**
| Styl | Opis |
|------|------|
| System | Standardowy systemowy popup (neutral) |
| Brand | Popup z brandingiem Droplet (accent rd10) |

**Struktura:**
```
Popup Card (300px, rounded 34px)
├── Title: H30 20px SemiBold, tracking -0.5px, black
├── Description: F30 13px Medium, black
├── Action Button: h-38px, bg white, rounded 50px, shadow 0px 0px 10px rgba(0,0,0,0.1)
│   └── Tekst: B20 12px SemiBold bw20
└── Link Button: h-38px, transparent, tekst B30 12px Medium bl10 #0091FF
```
**Padding wewnetrzny:** pt-8px pb-24px px-8px (content), gap 10px miedzy elementami

---

## Review Tile (node 1589:17566)

**Tlo:** white, rounded `13px`, padding `12px`, shadow Interactive `0px 2px 8px rgba(0,0,0,0.06)`

| Wariant | Szerokosc |
|---------|-----------|
| Short | `253px` |
| Wide | `362px` |

**Struktura:**
```
Review Tile
├── Header (gap 8px)
│   ├── User Avatar 32px (Default)
│   └── Info
│       ├── Username: F50 12px Bold, bw30 #222A35
│       └── Data: F70 12px Regular, bw40 #7B8494
├── Stars (gap 4px)
│   └── 5x Icon Star Full 12px (kolor yl10 #FFCC00)
└── Tresc: F20 13px Regular, bw40 #7B8494 (gap 16px od headera)
```

---

## Category Pastel Icons (node 3474:32163)

Ilustracyjne ikony pastelowe `40x40px` uzywane w Category Button. Kazda ikona to rasterowy obrazek (nie wektor).

**Rozmiar:** `40 x 40px`
**Uzycie:** wewnatrz Category Button (node 153:1373)

**Dostepne ikony (69):**
Accessories, Antiques & Vintage Home, Art & Posters, Baazar 2, Bags, Beauty, Beauty Tools & Devices, Books & Learning, Boutique, Camping & Outdoor, Candle & Aromas, Car Accessories, Ceramics & Clay Art, Cheese & Local product, Clothes, Clothes for Kids, Coins, Collectibles, Consoles & Games, Crotchet & Textiles, Decorations, Electronics, Electronics 2, Electronics & Gadgets, Fashion, Figures & Statues, Fishing Gear, Food, For You, Furniture & Lightning, Hair & Nails, Handmade, Handmade for Kids, Handmade Jewelry, Herbal Products, Home, Home Decor, Honey & Jams, Household & Chemistry, Jewelry, Kids, Kitchenware, Lingerie & Socks, Makeup Skin Care, Model Cars & Toys, Mystery, Mystery Boxes, Natural Beauty & Wellness, Natural Products, Outdoor Sports, Outdoor Sports 2, Outlet, Outlet Electronics, Perfumes, Return Auctions, Second Hand, Skincare, Small Appliances, Sneakers, Sport Cards, Sportswear & Accessories, Surprise Fashion, Tech & Gadgets, Tools & Hardware, Towels Blankets & Bedding, Toys & Vehicles, Trading Cards, Vintage Collectibles, Watches

---

## Sheet / Bottom Sheet (node 3745:48856)

Kontener bottom sheetu — zgodny z Apple HIG Sheets.
Ref: https://developer.apple.com/design/human-interface-guidelines/sheets

**Tlo:** gw30 `#F7F6F4`, opacity 98%
**Zaokraglenie:** top `34px`, bottom `56px`
**Padding:** `32px`

**Uzycie:** Sheet laczy sie z Top Element (node 4165:53333) jako naglowek — grabber + toolbar z tytulem i przyciskami nawigacji.

---

## Action Sheet (node 5229:45228)

Modalny dialog potwierdzenia akcji (np. usuwanie). Zgodny z iOS Action Sheet.

**Tlo:** gw30 `#F7F6F4`, opacity 98%, rounded `34px`, padding `14px`

**Struktura:**
```
Action Sheet (rounded 34px)
├── Title: H30 20px SemiBold, tracking -0.5px, black
├── Description: 16px Regular, black, line-height 22px
├── 1CTA Button: h-52px, bg rd10 #FF4252, B10 16px SemiBold white, rounded 70px, full-width
└── 2CTA Button: h-52px, bg white, B10 16px SemiBold bw20, rounded 70px, full-width
```
**Padding tresci:** pt-8px pb-24px px-8px, gap 10px miedzy elementami
**Shadow przyciskow:** Interactive `0px 2px 8px rgba(0,0,0,0.06)`

---

## Action Bar (node 3186:45292)

Dolny pasek z przyciskami akcji (np. Bulk Selection). Przypiety do dolu ekranu.

**Szerokosc:** `393px` (pelna szerokosc ekranu)
**Tlo:** gw30 `#F7F6F4`, opacity 98%
**Border-top:** `1px solid gw20 #D9D9D9`
**Padding:** pt-24px pb-46px px-16px
**Gap miedzy przyciskami:** `16px`

**Uklad przyciskow:**
- **2CTA (lewy):** bg white, h-52px, w-115px, B10 16px SemiBold bw20, rounded 70px
- **1CTA (prawy):** bg rd10 `#FF4252`, h-52px, flex-grow, B10 16px SemiBold white, rounded 70px
- Oba z shadow Interactive `0px 2px 8px rgba(0,0,0,0.06)`

---

## Show Chat Element (node 1281:23844)

Wiadomosc na chacie live show. Wyswietlana na ciemnym tle (overlay na video).

**Warianty:**
| Wariant | Opis |
|---------|------|
| Default | Avatar 32px + username + tresc, gap 8px |
| Pinned | Tlo `rgba(0,0,0,0.1)`, border `1px rgba(255,255,255,0.2)`, rounded 13px, p-8px |

**Opcjonalne badges:**
- **Mod:** bg gw20 `#D9D9D9`, tekst B40 10px Bold bw30 `#222A35`, rounded 20px, px-8px py-2px
- **Host:** bg yl10 `#FFCC00`, tekst B40 10px Bold bw30 `#222A35`, rounded 20px, px-8px py-2px
- **Tipped:** bg bw30 `#222A35`, tekst B40 10px Bold yl10 `#FFCC00`, rounded 20px, px-8px py-2px

**Username:** F60 12px SemiBold, gw20 `#D9D9D9`, text-shadow `1px 1px 3px rgba(0,0,0,0.8)`
**Tresc:** F60 12px SemiBold, white, text-shadow `1px 1px 3px rgba(0,0,0,0.8)`
**Mention (@all):** kolor yl10 `#FFCC00`

---

## Discount (node 2444:31426)

Przekreslona stara cena (przed rabatem).

**Tekst:** F30 13px Medium, kolor `rgba(255,255,255,0.75)`, text-decoration line-through, text-align right

---

## Company Logo (node 2830:27865)

Loga firm do przyciskow logowania / platnosci.

**Rozmiar:** `24 x 24px` (slot), ikona `20 x 20px`

| Wariant | Firma |
|---------|-------|
| Apple | Logo Apple 16x20px |
| Google | Logo Google 20x20px |
| Facebook | Logo Facebook 20x20px |

---

## Category (node 489:4953)

Duzy kafelek kategorii na stronie Browse.

**Wymiary:** `172 x 114px`, rounded `20px`, padding `12px`

| Wariant | Opis |
|---------|------|
| Default | Bg white, shadow Interactive. Nazwa kategorii + subkategorie + viewers + ikona pastelowa 56px |
| Variant2 | Bez bg/shadow, rounded 10px. Logo marki (obrazek) + nazwa marki pod spodem |

**Default — struktura:**
- **Nazwa:** B10 16px SemiBold, bw20 `#2A2F35`
- **Subkategorie:** F90 11px Regular, ov10 `#77716B`, line-height 14px
- **Viewers:** kropka rd10 8px + liczba F80 11px Medium rd10 + "Viewers" F80 11px Medium bw20
- **Ikona:** Main Category Pastel Icons 56x56px (prawy dolny rog)

**Variant2 — struktura:**
- **Logo:** obrazek marki (srodek)
- **Nazwa marki:** B30 12px Medium, bw40 `#7B8494`, text-center

---

## Scroll Edge Effect - Soft (node 4219:52155)

Efekt zanikania krawedzi scrollowalnej listy (np. karuzele kategorii, produktow).

**Backdrop blur:** `5px` (zmienna `--scroll-edge-effect/blur-radius`)
**Wewnetrzny blur:** `30px`, bg ov40 `#F2F0EC`, mix-blend-mode: screen
**Maska:** gradient alpha (przezroczysty → nieprzezroczysty) — tworzy efekt fade-out na krawedziach

---

## Show Button (node 635:7203)

Przyciski akcji wyswietlane na ekranie live show (na ciemnym tle video).

**Rozmiar:** `42 x 42px` (lub 38px / 40px w zaleznosci od wariantu), rounded `296px` (pill)

| Wariant | Tlo | Opis |
|---------|-----|------|
| iOS Glass 42px | Droplet Glass (blur + glass, na ciemnym tle) | Ikona 18px (np. Icon Clip) |
| iOS Glass 38px | Droplet Glass 38px | Ikona 18px |
| FlatGray 42px | `rgba(0,0,0,0.25)` + border `1px rgba(255,255,255,0.2)` | Ikona 18px (np. Down Chevron) |
| FlatGray 38px | `rgba(0,0,0,0.25)` | Ikona 18px |
| no Frame | Brak tla, 40x40px | Sama ikona 18px |

**Roznica vs Navi Button 42px:** Show Button ma ciemne warianty (mix-blend-multiply) przystosowane do overlay na video.

---

## Show Shop Button (node 747:8698)

Przycisk "Products" na ekranie live show — otwiera liste produktow w show.

**Szerokosc:** `48px`
**Ikona:** Icon Shop 24px (w slocie 32px)
**Border:** `2px solid rd10 #FF4252`
**Rounded:** `296px` (pill)
**Etykieta:** "Products" F80 11px Medium, white, text-center, pod przyciskiem (gap 2px)

| Wariant | Tlo przycisku |
|---------|---------------|
| Glass | Droplet Glass (ciemny, `rgba(0,0,0,0.15)`) + blur 48x48px |
| Flat Gray | `rgba(0,0,0,0.2)` |

**Badge z liczba produktow:** bg rd10 `#FF4252`, 16x16px, rounded 8px, tekst B40 10px Bold white, pozycja top-right

---

## Main Category Pastel Icons (node 4083:55866)

Zestaw 10 pastelowych ikon ilustracyjnych uzywanych w komponencie **Category** (`489:4953`).

**Rozmiar:** `56 x 56px` kazda
**Typ:** Rastrowe ilustracje (nie wektorowe — w odroznieniu od Main Category Icons `499:8990`)

| Nazwa | Opis |
|-------|------|
| Fashion | Ubrania / moda |
| Homemade | Reczna robota |
| Beauty | Kosmetyki / uroda |
| Home | Dom / wnetrza |
| Collectible | Kolekcjonerskie |
| Electronics | Elektronika |
| ForKids | Dla dzieci |
| Food & Drink | Jedzenie i napoje |
| Outdoor & Sports | Sport / outdoor |
| Mystery | Mystery / inne |

**Uzycie:** Slot ikony wewnatrz komponentu Category (56x56px rounded area).

---

## Show Chat (node 1247:15538)

Kontener chatu na ekranie live show — zawiera liste **Show Chat Element** oraz pole wpisywania wiadomosci.

**Szerokosc:** `296px`
**Layout:** flex column, gap 4px

| Wariant | Opis |
|---------|------|
| Buyer Mode | Lista wiadomosci + opcjonalny Pinned Comment + input "Say something..." (pill 288x40px, bg `rgba(0,0,0,0.4)`, border `rgba(255,255,255,0.4)`) |
| Seller Mode | Lista wiadomosci + Show Button 38px (Icon Shortcut) + input (pill 238px) obok |

**Pinned Comment:** wariant Pinned z Show Chat Element — `rounded-13px`, bg `rgba(0,0,0,0.1)`, border `1px rgba(255,255,255,0.2)`, padding 8px

**Slow Motion indicator:** Icon Slow Motion 18px + "slow motion is enabled" 10px SemiBold white

**Footer:** mini avatar 16px + tekst statusowy (np. "inky_82 is won!") 10px SemiBold, kolor zielony `#34C759` dla wyroznienia

---

## Show Right Section Icons (node 1663:18661)

Pionowy pasek ikon akcji po prawej stronie ekranu live show.

**Layout:** flex column, gap 16px, pb 22px
**Ikony:** Show Button `40x40px` (no Frame) + etykieta F80 11px Medium white pod kazda ikona

| Wariant | Ikony |
|---------|-------|
| Buyer Flat Gray | Clip (Icon Clip) → Share (Icon Share) → Wallet (Icon Wallet) → Products (Show Shop Button 48px) |
| Seller | Promote (Icon Promote) → Clip (Icon Clip) → Share (Icon Share) → Switch (Icon Camera Switch) → Products (Show Shop Button 48px) |

---

## Show Tool (node 1210:170001)

Dolna sekcja produktu / licytacji na ekranie live show — miniatura produktu, cena, przycisk Bid/CTA.

**Szerokosc:** `361px`, rounded `13px`
**Border:** `1px rgba(255,255,255,0.25)` (warianty z ramka)

| Wariant | Opis |
|---------|------|
| Material FlatGray | Miniatura 48x48 (border white, rounded 4px) + nazwa F21 14px Medium white + atrybuty F80 11px (opacity 0.6) + Discount (przekreslona cena 13px) + Price H40 16px Bold white + timer (Icon Skull Full 12px + czas rd10) + slider Bid (bg rd10 pill, "Bid $1500" F22 14px SemiBold white, double chevron) |
| Material iOS Glass | Jak FlatGray, roznica w renderowaniu tla |
| CTA Disabled | Szary przycisk "Item Sold Out" B10 16px SemiBold bw40, bg `rgba(53,59,66,0.9)` |
| Seller Mode | Miniatura rounded 8px + nazwa + atrybuty + cena/timer + Show Seller Button (Start Auction) |
| Sold Item | Miniatura + nazwa + "Sold" (F60 12px SemiBold rd10 + Icon Skull Full) + slider Bid (wciaz widoczny) |

**Footer info:** "Total: $1500 with 🚚 shipping + 🛡 Buyers protection ℹ" — F80 11px Medium `rgba(255,255,255,0.75)`

---

## Show Seller Button (node 1250:17407)

Przyciski CTA dla sprzedawcy na ekranie live show.

**Wymiary:** `329 x 52px` (pelna szerokosc) lub split `100px + 213px`
**Rounded:** `71px` (pill)
**Border:** `1px rgba(255,255,255,0.25)`
**Tlo zewnetrzne:** `rgba(0,0,0,0.5)`

| Wariant | Opis |
|---------|------|
| Start Auction | Pelna szerokosc, bg rd10 `#FF4252` (46px inner pill), tekst "Start Auction" B10 16px SemiBold white |
| Bids - auction live | Pelna szerokosc, inner pill szary `rgba(53,59,66,0.9)`, tekst "0 Bids" bw40 |
| Next Auction | Split: lewa czesc 100px (szary pill "23 bids" bw40) + prawa 213px (bg rd10 "Run Next" white + Icon Double Chevron) |
| Buy Mode | Split: lewa 100px (szary pill "3 sold" bw40) + prawa 213px (bg rd10 "Run Next" white) |

---

## Show Giveaway Modal (node 1247:14454)

Modal giveaway wyswietlany na ekranie live show — pozwala uzytkownikowi wziac udzial w konkursie.

**Tlo:** `rgba(0,0,0,0.4)`, border `1px rgba(255,255,255,0.2)`, rounded `13px`, padding `16px`
**Layout:** flex column, gap 8px

**Struktura:**
```
Show Giveaway Modal
├── Header row (justify-between)
│   ├── Product thumbnail (64x64px, rounded 8px, border white)
│   ├── Product info (190px)
│   │   ├── Nazwa: F21 14px Medium white
│   │   └── Atrybut: F80 11px Medium, opacity 0.6, rgba(255,255,255,0.75)
│   └── Show Button 38px (Icon Collapse — zwijanie)
├── Ikona Giveaway (Icon Giveaway 24px + grafika "Subtract")
├── CTA Button: h-52px, bg rd10 #FF4252, rounded 70px, shadow Interactive
│   └── Tekst: "Enter Giveaway!" B10 16px SemiBold white
└── Link: "Giveaway terms" F90 11px Regular white, underline
```

---

## Show Notes (node 1092:13558)

Przypiety komunikat od hosta wyswietlany na ekranie live show ("From the Host").

**Tlo:** `rgba(255,255,255,0.9)`, rounded `13px`, px 12px, py 8px
**Layout:** flex row, gap 8px, items-center

**Struktura:**
```
Show Notes
├── Emoji "👉" (16px)
├── Label: "From the Host" F75 11px SemiBold, kolor bw20 #2A2F35
└── Icon Down Chevron 16px (rozwijanie/zwijanie)
```

**Warianty:**
| Wariant | Opis |
|---------|------|
| Closed | Zwiniety — tylko emoji + etykieta + chevron |
| Open | Rozwiniety — pelna tresc wiadomosci hosta |
| Open with Scroll | Rozwiniety z przewijaniem dlugiej tresci |

---

## Wide Sheet (node 2345:29420)

Wariant sheeta o pelnej szerokosci ekranu — uzyty np. do "Place Your Bid".

**Tlo:** gradient gw30 `#F7F6F4` (100% → 0%, od 65% do 93%), rounded top `38px`
**Material:** BG Sheet Material (bg gw30, rounded top 34px)

**Struktura:**
```
Wide Sheet (393px, rounded-top 38px)
├── Top Element
│   ├── Grabber (36x5px, bg #CCC, rounded 100px, pt 5px)
│   └── Toolbar (justify-between)
│       ├── Left Section: Navi Button 42px (Icon Close, Droplet Glass)
│       ├── Title: H30 20px SemiBold, tracking -0.5px, bw30 #222A35, text-center
│       └── Right Section: (opcjonalny slot)
└── Content area (scrollable)
```

**Roznica vs Sheet:** Sheet ma standardowa szerokosc z marginesami; Wide Sheet rozciaga sie na pelna szerokosc 393px. Oba uzycia Top Element z Grabberem.

---

## Toast / Snackbar (node 4662:66126)

Pasek powiadomienia wyswietlany u dolu ekranu po akcji (np. utworzenie produktu).

**Wymiary:** `350 x 72px`, rounded `12px`
**Tlo:** gw30 `#F7F6F4`
**Shadow:** Interactive `0px 2px 8px rgba(0,0,0,0.06)`

**Struktura:**
```
Toast (350x72px, rounded 12px)
├── Thumbnail (56x56px, rounded 12px, zdjecie produktu)
├── Text area (pl-16px, pr-8px, py-10px)
│   ├── Message: B30 12px Medium bw20 #2A2F35 ("Your product has been created")
│   └── Action label: F50 12px Bold bw20 #2A2F35 ("Review it in Drafts")
└── CTA Button (36px pill, bg white, shadow Interactive)
    └── Tekst: B20 12px SemiBold bw20 (np. "Drafts")
```

**Opcjonalny loading bar:** 88x4px, bg gw20 `#D9D9D9`, fill rd10 `#FF4252`, rounded `26px`

---

## Image Library Tile (node 4705:37646)

Kafelek zdjecia w bibliotece mediow — sluzy do wyboru zdjec produktu.

**Wymiary:** `112 x 112px`, rounded `12px`, padding `9.584px`
**Shadow:** Show Shadow `0px 2px 8px rgba(0,0,0,0.25)`

### Layout wewnetrzny

Kolumna (flex-col, justify-between, full height):
- **Gora-prawo:** Radio button / selection indicator (24px)
- **Dol:** wiersz (justify-between):
  - **Lewo-dol:** Play badge (jesli video)
  - **Prawo-dol:** Radio button / selection indicator (w wariancie Unselected)

### Warianty

| Wariant | Overlay | Element prawy-dol | Element lewy-dol | Dodatkowe |
|---------|---------|-------------------|-------------------|-----------|
| **Unselected** | Brak | Radio button 24px (bialy outline circle, niezaznaczony) | Product Badge/Icon (Play 12px, pill 24px, rounded 40px, border `rgba(255,255,255,0.25)`) | — |
| **Selected** | `rgba(0,0,0,0.5)` | Blue circle 24px z numerem (F22 14px SemiBold `#101828`) | — | Numer na srodku kolka |
| **Loading** | `rgba(0,0,0,0.5)` | — | — | Progress bar: track 88x4px `#D9D9D9`, fill 54x4px `#FF4252`, rounded 26px, at top:96px left:12px |
| **Disabled** | `rgba(217,217,217,0.5)` | Disabled icon 24px | — | — |

### Radio button (selection circle)
- **Niezaznaczony:** 24px circle, border bialy, tlo przezroczyste
- **Zaznaczony:** 24px circle, tlo jasne (biale/niebieskie), numer 14px SemiBold `#101828` na srodku

### Play badge (video indicator)
- Product Badge/Icon: `h-24px`, rounded `40px`, border `1px solid rgba(255,255,255,0.25)`, padding `0 6px`
- Ikona: Icon Play `12px`
- Pozycja: lewy-dol kafelka
