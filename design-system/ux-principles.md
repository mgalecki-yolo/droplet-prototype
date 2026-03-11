# Zasady UX — Droplet App

---

## Czym jest Droplet

Droplet to mobilna platforma live commerce, na ktorej sprzedawcy prowadza transmisje wideo i sprzedaja produkty w czasie rzeczywistym. Kupujacy ogladaja show, licytuja, kupuja i rozmawiaja ze sprzedawca przez czat.

**Droplet to nie jest sklep internetowy.** To rynek pelny straganow — sprzedawca rozmawia, pokazuje towar, improwizuje, a kupujacy przegladaja, pytaja i kupuja oczami. Show jest sercem platformy.

**Aplikacja jest wylacznie mobilna** — nie ma panelu desktopowego. Kazdy flow (prowadzenie show, zarzadzanie produktami, zamowienia, payouty) musi byc kompletny i wygodny na telefonie.

---

## Konkurencja

| Aplikacja | Relacja |
|-----------|---------|
| **Whatnot** | Najwiekszy konkurent. Silny w kolekcjonerskich niszach (karty, sneakersy). Zrodlo inspiracji dla mechaniki aukcyjnej i seller tools. |
| **Tilt** | Europejski live shopping, mocniejszy akcent na entertainment i spolecznosc. |

Droplet laczy szerszy katalog kategorii (nie tylko kolekcjonerstwo) z pelna mechanika aukcyjna. Konkurencja jest zrodlem referensow, nie lista bledow do unikania.

---

## Kto uzywa Droplet

### Sprzedawca (Host)

Sprzedawcami sa zarowno **osoby prywatne** budujace wlasna marke, jak i **firmy zajmujace sie handlem detalicznym**. Ten sam sprzedawca moze zachowywac sie roznie w zaleznosci od sytuacji:

- **Spontanicznie:** "Dostalem karton nowego towaru, wchodze live od razu" — instant show, minimum danych, natychmiastowy start.
- **Planowo:** "Robie show co tydzien w piatek" — zaplanowane show z zajawka wideo, data, lista produktow przygotowana z wyprzedzeniem.

To nie sa dwa typy ludzi — to dwa tryby zachowania **tej samej osoby**. UI musi plynnie obslugiwac oba scenariusze bez przelaczania miedzy "trybami".

### Kupujacy (Buyer)

Kupujacy przychodzi **po show, nie po produkt**. Moze szukac w kategoriach, ale tym co go zatrzymuje jest zywe show i element niespodzianki — nie wie z gory co kupi i za ile.

Kupujacy "kupuje oczami" — widzi to co sprzedawca pokazuje na kamerze. Strona produktu jest bardziej symboliczna — sluzy do dodania do ulubionych i do zapytania o produkt na czacie ("Hej, a te buty co miales, masz je jeszcze?").

---

## Fundamenty UX

### 1. Show jest najwazniejsze

Mimo ze Droplet ma warstwe e-commerce (profile sprzedawcow, listy produktow, Buy Now), **show jest tym miejscem gdzie to ma sie dziac**. Kazda decyzja projektowa powinna prowadzic uzytkownika w kierunku show — z kategorii, z profilu sprzedawcy, z listy produktow.

### 2. Sprzedawca kontroluje tempo

Show na Droplet to **nie aukcja w stylu amerykanskim** — szybka, stresujaca, pod presja czasu. To raczej targ: sprzedawca rozmawia, pokazuje towar, odpowiada na pytania, improwizuje. Sam moderuje tempo. Zadne rozwiazanie UI nie powinno narzucac pospiechu ani generowac sztucznej presji.

### 3. Bezposredni kontakt sprzedawca–kupujacy

Czat jest glownym kanalem komunikacji podczas show. Kupujacy pytaja ("pokaz z lewej strony", "jaki rozmiar?"), sprzedawca odpowiada glosem lub na czacie. Ten kontakt jest **bardzo bezposredni** — UI musi go wspierac, nie blokowac.

### 4. Sprzedawca robi kilka rzeczy naraz

Podczas show sprzedawca jednoczesnie:
- Prowadzi transmisje wideo (trzyma telefon)
- Odpowiada na czacie
- Zarzadza produktami z panelu (dodaje do show, startuje aukcje)
- Moze dodac **nowy produkt na zywo** — zdjecie → nowy produkt → przypiety do show

UI musi byc na tyle prosty, zeby to wszystko dalo sie robic jednorecznie, bez zaglebienia w podmenu.

### 5. Produkt nie jest gwiazda — gwiazda jest sprzedawca

Strona produktu to punkt wejscia do rozmowy, nie do transakcji. Kupujacy podejmuje decyzje na podstawie tego co widzi na kamerze i co uslyszal od sprzedawcy, nie na podstawie opisu produktu.

### 6. Mobile-first i mobile-only

Zadne rozwiazanie nie moze zakladac "to doprecyzujesz na desktopie". Kazdy flow musi byc kompletny na malym ekranie. Sprzedawca prawdopodobnie trzyma telefon jedna reka podczas show.

### 7. Natywny iOS — Apple HIG i iOS 26

Aplikacja jest kodowana w **React Native** i projektowana w oparciu o **Apple Human Interface Guidelines** z patternami charakterystycznymi dla **iOS 26** (Liquid Glass). To jest fundamentalna zasada:

- **NIE wymyslaj wlasnych patternow UI** — kazde rozwiazanie musi byc oparte o natywne patterny iOS
- Sheety, modaly, nawigacja, gesty, context menu, action sheety — wszystko zgodnie z HIG
- Jesli Apple ma natywne rozwiazanie problemu (np. search bar, tab bar, swipe actions, pull-to-refresh) — uzywamy go zamiast tworzenia wlasnego
- W razie watpliwosci — sprawdz jak dany problem rozwiazuje iOS 26, nie wymyslaj od zera
- Referencja: https://developer.apple.com/design/human-interface-guidelines/

---

## Tryby sprzedazy

| Tryb | Gdzie dostepny | Opis |
|------|---------------|------|
| **Buy Now** | Na profilu sprzedawcy (jak e-commerce) ORAZ podczas show | Produkt dostepny do natychmiastowego zakupu. Kupujacy moze kupic w dowolnym momencie. |
| **Aukcja** | Wylacznie podczas aktywnego show | Sprzedawca startuje licytacje, kupujacy licytuja w czasie rzeczywistym. |

**Host decyduje** o trybie sprzedazy kazdego produktu — wybiera produkty ze swojego katalogu i przypisuje je do show jako Buy Now lub Aukcja. To nie jest zdeterminowane przy dodawaniu produktu.

---

## Kupowanie podczas show

### Buy Now w trakcie show

1. Kupujacy widzi przycisk **Buy Now** przy produkcie
2. Tap → prosty checkout: ilosc (jesli wiecej niz 1) + podsumowanie
3. Platnosc karta podpieta w Wallecie
4. Wysylka na zapisany adres (lub dodanie nowego przy okazji)
5. Zamowienie trafia do zakladki Activity

### Aukcja

1. Host wystawia produkt i startuje licytacje z podstawowymi parametrami:
   - **Sudden death** — aukcja konczy sie twardo po ustalonym czasie
   - **Przedluzanie** — kazdy nowy bid przesuwa czas zakonczenia
2. Kupujacy widzi **slider Bid** — przesuwa zeby licytowac
3. Ostatni bid wygrywa
4. **Zwyciezca** dostaje powiadomienie + mozliwosc oplacenia (ten sam flow co Buy Now)
5. **Pozostali widzowie** widza kto wygral

Platnosc i dostawa za wygrana aukcje sa identyczne jak przy Buy Now — z danych zapisanych w Wallecie.

### Wallet

Ikonka po prawej stronie ekranu show. Kupujacy konfiguruje:
- **Metode platnosci:** karta, BLIK, inny operator
- **Adres dostawy:** paczkomat (z polami) lub kurier (z data dostawy)

Dane w Wallecie = checkout w sekundach. Brak Walleta = uzytkownik moze ustawic przy pierwszym zakupie.

---

## Dwa sposoby uruchamiania show

### Instant Show
- Jak "instant meeting" w Google Meet
- Minimum danych: nazwa, kategoria
- Zajawka wideo opcjonalna (ale nie wymagana)
- Natychmiastowy start transmisji

### Scheduled Show
- Planowanie z wyprzedzeniem
- Tytul, kategoria, zajawka wideo (nagrana lub dodana)
- Ustalona data i godzina
- Opcja cyklicznosci (np. co tydzien)
- Sprzedawca buduje liste produktow przed show

Ten sam sprzedawca korzysta z obu trybów w zaleznosci od sytuacji.

---

## Glowne ekrany aplikacji

### Home

Po zalogowaniu kupujacy od razu widzi:
- **Karuzele aktywnych show** (live teraz) — miniatury z podgladem co sie dzieje
- **Ponizej:** show pogrupowane tematycznie — trending, popularne, modne ostatnio
- **Szukajka** na gorze + **pill buttony kategorii** pod nia

Zero onboardingu, zero pustych stanow — od razu akcja.

### Browse (po wybraniu kategorii)

Strona dzieli sie na dwie czesci:
1. **Gora — show:** dwie rolki
   - Show hostow ktorych followuje
   - Wszystkie show online w tej kategorii
2. **Dol — produkty:** lista produktow z podkategorii do przegladania

Zasada: **show na gorze, produkty nizej** — priorytet zawsze na zywa transmisje.

### Profil sprzedawcy (z perspektywy kupujacego)

Profil to **wizytowka hosta**, nie sklep. Kolejnosc elementow:

1. **Naglowek:** nazwa, krotki opis, metryki (followers, following, rating, opinie)
2. **Akcje:** message, share, follow, block, report
3. **Opinie kupujacych** — podstawowe reviews od osob ktore kupily
4. **Upcoming Shows** — karuzela nadchodzacych show (kiedy moge wrocic)
5. **Zakonczone Show** — z badge "Replay", mozna obejrzec nagranie
6. **Produkty** — lista z informacjami: Buy Now / dzis na show / jutro na show + cena

Show i osoba sa wazniejsze niz produkty — dlatego produkty sa na dole, nie na gorze.

### Activity (perspektywa kupujacego)

Trzy zakladki:

**Zamowienia:**
- Lista wszystkich zakupow (z show i spoza show)
- Statusy: do oplacenia → oplacone → przygotowywane → wysylane → w drodze → do odebrania → odebrane
- Kazde zamowienie: data, sprzedawca, miniaturka
- Tap → szczegoly: rachunek, klip wideo z momentu zakupu na show (potwierdzenie wideo), tracking dostawy

**Wiadomosci:**
- Wszystkie rozmowy z uzytkownikami + Droplet Admin (jako osobny watek)
- Droplet Admin: sprawy raportowe, info o nowych funkcjach, mozliwosc odpowiedzi
- Inspiracja Vinted: miedzy dymkami wiadomosci pojawiaja sie wygaszone statusy zamowienia ("produkt wyslany") — bez dymkow, jako tlo watku
- UX jak aplikacja SMS na iPhonie

**Powiadomienia:**
- Scope do ustalenia pozniej
- Prawdopodobnie: host startowal show, nadchodzace show, nowe produkty, zmiana ceny obserwowanego produktu

---

## Kategorie

### Glowne kategorie (11)

For You · Fashion · Handmade · Beauty · Home · Collectibles · Electronics · Food & Nature · Outdoor & Sports · For Kids · Mystery

### Znane podkategorie

| Kategoria glowna | Podkategorie |
|------------------|-------------|
| **Fashion** | Clothes, Shoes, Bags, Jewelry, Accessories |
| **Collectibles** | Coins & Money, Figures & Statues, Sports Cards, Trading Cards |

Pozostale podkategorie — do odczytania z Figmy przy implementacji konkretnych ekranow.

**Uwaga:** Kategorii celowo nie ma za duzo. Fokus jest na tym, zeby uzytkownicy wchodzili na show, nie zaglebiali sie w drzewo kategorii.

---

## Seller Hub — przeglad

Zakladka **Sell** (ikona Plus w tabbarze) — dashboard sprzedawcy z aktualnym przegladem konta.

### 4 kafelki dashboardu + 1 link

| Kafelek | Informacja | Akcja |
|---------|-----------|-------|
| **Produkty** | Liczba aktualnych produktow | Przejscie do listy produktow |
| **Shows** | Liczba zaplanowanych show | Przejscie do zarzadzania show |
| **Payout** | Saldo konta + kwota do wyplaty | Przejscie do wallet/payoutu |
| **Zamowienia** | Biezace zamowienia + sprawy do obslugi | Przejscie do listy zamowien |

**Filtrowanie:** Wszystkie 4 kafelki filtrowane wspolnie po dacie — wczoraj / ostatni tydzien / ostatni miesiac / ostatni rok. Domyslny interwal: ostatni tydzien.

**Metryki na kafelkach:** Kazdy kafelek pokazuje glowna liczbe (np. "7 zamowien") oraz **procentowa zmiane vs poprzedni okres** tego samego interwalu (np. tydzien do tygodnia). Wzrost = zielony, spadek = czerwony. Inspiracja: Etsy Seller Hub.

**Edycja profilu:** Osobny link/przejscie do edycji konta sprzedawcy.

### Produkty (po tapnieciu na kafelek)

4 podstrony/filtry:
- **Active** — widoczne, dostepne do dodania na show. Dodatkowy filtr: All / Auction / Buy Now
- **Drafts** — zaczete, niedokonczone
- **Inactive** — celowo zdeaktywowane
- **Sold Out** — sprzedane

Glowne akcje:
- **Add Product** (CTA na dole) — na kazdej podstronie
- **Manage** (bulk select) — zaznaczanie wielu produktow i akcje zbiorcze (aktywuj/deaktywuj, usun, edytuj cene). Scope bulk actions do doprecyzowania.

### Shows (po tapnieciu na kafelek)

2 podstrony:
- **Upcoming** — zaplanowane show. Kafelek show zawiera: tytul, badge kiedy startuje, liczba obserwujacych
- **Ended** — zakonczone show

Tap na upcoming show → mozliwosc wystartowania w kazdym momencie (nawet jesli scheduled na za tydzien) + dwa przyciski: dodaj show, dodaj produkty do show.

Glowne akcje:
- **Schedule a New Show** (CTA na dole) → formularz tworzenia show
- **Manage** (bulk select) — na obu podstronach, scope do ustalenia

### Payout (po tapnieciu na kafelek)

Inspiracja: Etsy seller app (zakladka Payments).
- Aktualne saldo w aplikacji + mozliwosc wyplaty
- Lista platnosci przychodzacych (za sprzedane produkty)
- Lista platnosci wychodzacych (np. promowanie, wystawianie)
- Szczegolowa specyfikacja jeszcze do doprecyzowania

### Zamowienia sprzedawcy (po tapnieciu na kafelek)

3 podstrony:
- **Nowe** — zamowienia do przygotowania. Moge oznaczyc jako gotowe → przenosi do Wyslane
- **Wyslane** — w trakcie realizacji, tracking statusu dostawy
- **Zrealizowane (Completed)** — odebrane przez kupujacego (na podstawie danych przewoznika)

Kazde zamowienie zawiera: kto kupil, adres wysylki, info platnosci, klip wideo z momentu zakupu na show (potwierdzenie transakcji).

---

## Elementy poza scope (na pozniej)

| Element | Status |
|---------|--------|
| Giveaway | Zaprojektowany w Figmie, ale nie wdrazamy na razie |
| Powiadomienia (szczegoly) | Beda, ale scope ustalony osobno |

---

## Zasady projektowania ekranow

### Co robic

- **Prowadz do show** — z kazdego miejsca w aplikacji powinien byc krotki path do aktywnego show
- **Minimalizuj kroki** — sprzedawca podczas show nie moze klikac przez 5 ekranow zeby dodac produkt
- **Wspieraj improwizacje** — umozliwiaj dodawanie produktow na zywo, szybkie zdjecia, natychmiastowe przypinanie
- **Projektuj na jedna reke** — kluczowe akcje w zasiegu kciuka
- **Uzywaj komponentow z design systemu** — kazdy element musi byc zgodny z `components.md`
- **Checkout w sekundach** — jesli Wallet jest skonfigurowany, zakup (Buy Now lub wygrana aukcja) to 2-3 tapniecia maksymalnie
- **Profil hosta = wizytowka, nie sklep** — show i opinie wyzej, produkty nizej

### Czego nie robic

- **Nie tworz rozbudowanych formularzy** — dodawanie produktu musi byc szybkie, minimum pol
- **Nie blokuj flow show** — zadne modaly potwierdzenia nie moga przerywac trwajacej transmisji
- **Nie projektuj jak klasyczny e-commerce** — strona produktu to nie Amazon, to zaproszenie do rozmowy
- **Nie narzucaj tempa** — zadnych odliczan, presji, wymuszonych timeoutow (chyba ze to mechanika aukcji)
- **Nie komplikuj nawigacji** — sprzedawca musi miec natychmiastowy dostep do produktow, chatu i sterowania show
- **Nie chowaj show** — w kazdym widoku (kategorie, profil, produkty) show musi byc widoczne i latwo dostepne
- **Nie projektuj powiadomien** — scope jeszcze nie ustalony, pomijamy do oddzielnej sesji
