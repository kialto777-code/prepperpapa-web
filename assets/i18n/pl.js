// PrepperPapa -- LENGYEL SZOVEGTAR (teljes felulet-forditas)
//
// Fonok kerese 2026-08-24 12:49: "Megbeszéltük, hogy készülni fog lengyelül, románul és spanyolul."
//
// A SZERKEZET AZONOS AZ `en.js`-EVEL: a kulcs MAGA A MAGYAR SZoVEG.
//
// **EZ A HAROM SZoTAR KoZuL AZ ELSo.** Egy nyelv NEM egy fajl:
//   1. ez a fajl              -> `PP_FORD_SZOTAR.pl`   (szoveg-egyezes)
//   2. `i18n/vagyon-pl.js`    -> `PP_VAGYON_SZOTAR.pl` (Vagyon modul, KET azonos fajlban)
//   3. `PP_SZOTAR.pl`         -> az index.html-be agyazva (`data-i18n` elemek)
// A 3. NEM fajl, tehat fajl-szintu grep nem talalja meg. Ha barmelyik hianyzik, a felulet
// NEM hibat ad, hanem csendben magyarul marad.
//
// AZ oT BIBLIAI IGEVERS A KIADOTT SZoVEGBoL VAN, NEM TOLEM. Forras 2026-10-22 (v43.344) ota ujra: Uwspolczesniona
// Biblia Gdanska (UBG 2017, `ubg2017.json`, a Fundacja Wrota Nadziei irasos engedelyevel, az o .txt-jukbol),
// szo szerint masolva (a Ps 46 felirata nelkul). ELOZMENY: v43.331-v43.343 kozott a Biblia Gdanska 1881 szovege
// allt itt (az engedely megerkezeseig), elotte is az UBG.
//
// A ZSOLTAR HIVATKOZASA SZANDEKOSAN "46:1-2", NEM "46,2-3": a magyar Karoli a feliratot is
// versnek szamolja, a lengyel Gdanska nem -- ugyanaz a szoveg egy szammal feljebb all.
// Ez ugyanaz a helyzet, mint az angol KJV-nel (`Psalm 46:1-2`), es NEM elgepeles.


window.PP_FORD_SZOTAR = window.PP_FORD_SZOTAR || {};
window.PP_FORD_SZOTAR.pl = {
  // ===== 2026-10-25 v43.381 (card 43a80047, Boss 23:38): premium code from the purchase e-mail link =====
  "Túl sok hibás kódot írtál be. Biztonsági okból egy ideig nem próbálhatod újra.": "Wpisano zbyt wiele błędnych kodów. Ze względów bezpieczeństwa przez jakiś czas nie można spróbować ponownie.",
  "Újra próbálhatod ekkor:": "Można spróbować ponownie o:",
  "A vásárlási levélben kapott kódod be van írva. Koppints a „Kód beváltása” gombra.": "Kod z e-maila z zakupem jest już wpisany. Dotknij „Zrealizuj kod”.",
  // ===== 2026-10-25 v43.380 (Thomas 24623): stale offline region =====
  "Új változat a szerveren": "Nowa wersja na serwerze",
  // ===== 2026-10-25 v43.380 (card 6b287cfb, Boss 20:13): Solar panel setup tool =====
  "Napelem-beállítás": "Ustawienie panelu słonecznego",
  "Merre nézzen és mennyire dőljön a panel, évszakonként": "W którą stronę ustawić panel i jak go nachylić, w zależności od pory roku",
  "Helyszín": "Lokalizacja",
  "Mérés a helyzetemre": "Oblicz dla mojej pozycji",
  "Kézi megadás": "Wpisz ręcznie",
  "Dátum": "Data",
  "Ma": "Dziś",
  "Téli napforduló": "Przesilenie zimowe",
  "Tavaszi napéjegyenlőség": "Równonoc wiosenna",
  "Nyári napforduló": "Przesilenie letnie",
  "Őszi napéjegyenlőség": "Równonoc jesienna",
  "A nap járása": "Droga słońca",
  "Ajánlott beállítás": "Zalecane ustawienie",
  "Panel igazítása a tájolóval": "Ustaw panel kompasem",
  "Várható termelés ezen a napon": "Przewidywana produkcja tego dnia",
  "Szélesség, pl. 47.50": "Szerokość, np. 47.50",
  "Hosszúság, pl. 19.04": "Długość, np. 19.04",
  "pl. 400": "np. 400",
  "A szélesség -90 és 90, a hosszúság -180 és 180 fok közötti szám.": "Szerokość to liczba od -90 do 90, długość od -180 do 180 stopni.",
  "Még nem tudom, hol vagy. Nyomd meg a „Mérés a helyzetemre” gombot, vagy add meg kézzel.": "Nie wiem jeszcze, gdzie jesteś. Naciśnij „Oblicz dla mojej pozycji” albo wpisz ją ręcznie.",
  "kézzel megadva": "wpisana ręcznie",
  "Ezen a napon itt a nap nem kel fel.": "Tego dnia słońce tu nie wschodzi.",
  "Ezen a napon itt a nap nem nyugszik le.": "Tego dnia słońce tu nie zachodzi.",
  "Nappal hossza:": "Długość dnia:",
  "napsütés derült égnél, 10° fölött:": "słońce przy czystym niebie, powyżej 10°:",
  "A panel erre nézzen (valódi égtáj, nem mágneses).": "Panel ma patrzeć w tę stronę (kierunek geograficzny, nie magnetyczny).",
  "Erre a napra": "Na ten dzień",
  "Tél": "Zima",
  "Tavasz": "Wiosna",
  "Nyár": "Lato",
  "Ősz": "Jesień",
  "Egész évre, fixen": "Cały rok, na stałe",
  "A dőlésszög a vízszinteshez mért szög: 0° = fekvő panel, 90° = függőleges.": "Nachylenie mierzy się od poziomu: 0° = panel leżący, 90° = pionowy.",
  "Add meg a panel teljesítményét (a címkéjén W-ban), és kiszámolom, nagyjából mennyit termel ezen a napon.": "Podaj moc panelu (w W, z tabliczki), a obliczę w przybliżeniu, ile wyprodukuje tego dnia.",
  "A napra ajánlott dőléssel": "Z nachyleniem zalecanym na ten dzień",
  "Az egész évre beállított dőléssel": "Z nachyleniem całorocznym",
  "Becslés, felhő nélkül: tiszta égbolttal, árnyék nélkül, 20% veszteséggel számolva. Felhős időben ennek csak a töredéke jön, borult égnél akár a tizede.": "Szacunek, bez chmur: czyste niebo, bez cienia, 20% strat. Przy zachmurzeniu tylko ułamek tego, przy pełnym zachmurzeniu nawet jedna dziesiąta.",
  "a választott nap": "wybrany dzień",
  "napfordulók, napéjegyenlőség": "przesilenia, równonoc",
  "Tartsd a telefont állva, a kamerával a panel felé: a kamera bekapcsol, és a nap pályája a képen látszik. A tájoló a panel irányára mutat.": "Trzymaj telefon pionowo, aparatem w kierunku panelu: aparat się włączy, a droga słońca pojawi się na obrazie. Kompas wskazuje kierunek panelu.",
  "AMIT EZ TUD ÉS AMIT NEM. A nap helyzetét és a napkeltét pár perc pontossággal számolja, internet nélkül. A dőlésszög és a termelés tiszta égboltra szóló becslés: a felhőt, az árnyékot (fa, ház, domb) és a panel melegedését nem ismeri. A tájoló mágneses irányt mutat, ami Magyarországon kb. 5 fokkal tér el a valódi déltől; a panel termelésén ez alig látszik.": "CO TO POTRAFI, A CZEGO NIE. Oblicza położenie słońca i wschód z dokładnością do kilku minut, bez internetu. Nachylenie i produkcja to szacunki dla czystego nieba: nie zna chmur, cienia (drzewa, domy, wzgórza) ani nagrzewania się panelu. Kompas pokazuje kierunek magnetyczny, który może różnić się o kilka stopni od geograficznego południa; w produkcji prawie tego nie widać.",
  // ===== 2026-10-25 v43.379: short closed-message bubble =====
  "Zárt üzenet": "Wiadomość zaszyfrowana",
  // ===== 2026-10-25 v43.378 (card 6b4458db, Boss 20:26): offline map page, one row per region =====
  "Tájegységek letöltése": "Pobierz regiony",
  "Alaptérkép, turistautak, pontok": "Mapa bazowa, szlaki, punkty",
  "Hiányzó részek letöltése": "Pobierz brakujące części",
  "hiányzik": "brakuje",
  // ===== 2026-10-25 v43.377 (card 6b4458db, Boss 18:55): Local room help, step by step =====
  "Mire jó: a Helyi szoba internet nélkül köti össze a közeledben lévő telefonokat, ha egy Wi-Fi-n vagytok (vagy Bluetooth-on). Például áramszünetben, vagy otthon a családdal, amikor nincs térerő.": "Do czego służy: Pokój lokalny łączy telefony w pobliżu bez internetu, gdy jesteście w jednej sieci Wi-Fi (lub przez Bluetooth). Na przykład podczas przerwy w dostawie prądu albo w domu z rodziną, gdy nie ma zasięgu.",
  "Szoba nyitása: az egyik telefonon a + gombbal nyiss egy új helyi szobát, és adj neki nevet. Ez a telefon lesz a gazda; amíg a szoba kell, az appja maradjon nyitva.": "Otwarcie pokoju: na jednym telefonie otwórz nowy pokój lokalny przyciskiem + i nadaj mu nazwę. Ten telefon zostanie gospodarzem; dopóki pokój jest potrzebny, aplikacja na nim powinna być otwarta.",
  "Belépés a másik telefonról: kapcsolódj ugyanarra a Wi-Fi-re, nyisd meg a Helyi szobát, és koppints a listában megjelenő szobára. A gazda jóváhagyja a belépést; a szoba jelszava (kulcsa) titkosítja az üzeneteket, és minden telefonon ugyanannak kell lennie.": "Dołączenie z drugiego telefonu: połącz się z tą samą siecią Wi-Fi, otwórz Pokój lokalny i dotknij pokoju na liście. Gospodarz zatwierdza wejście; hasło (klucz) pokoju szyfruje wiadomości i musi być takie samo na każdym telefonie.",
  "A pontok: zöld = él a kapcsolat; piros = most nem éri el a gazdát. A listában a halvány szoba most nincs hatótávon.": "Kropki: zielona = połączenie działa; czerwona = gospodarz jest teraz nieosiągalny. Wyblakły pokój na liście jest teraz poza zasięgiem.",
  "Ha „a gazda nem érhető el”: nézd meg, hogy ugyanazon a Wi-Fi-n vagytok-e, és a gazdánál nyitva van-e az app; kapcsold ki a mobiladatot; vendég Wi-Fi-n a router elszigetelheti a készülékeket. Három sikertelen próba után az app ezt ki is írja, és újra keresi a gazdát.": "Jeśli „gospodarz jest nieosiągalny”: sprawdź, czy jesteście w tej samej sieci Wi-Fi i czy aplikacja u gospodarza jest otwarta; wyłącz dane komórkowe; w sieci dla gości router może izolować urządzenia. Po trzech nieudanych próbach aplikacja też to podpowie i ponownie poszuka gospodarza.",
  // ===== 2026-10-25 v43.352 (idea #63, card 6b4458db): native volume guard =====
  "A telefonos appban ezen a lapon a hangerő magától maximumra áll, és kilépéskor visszaáll a korábbira. A hang a telefon hangszóróján szól akkor is, ha fülhallgató vagy Bluetooth-eszköz csatlakozik.": "W aplikacji na telefonie na tym ekranie głośność sama ustawia się na maksimum, a po wyjściu wraca do poprzedniej. Dźwięk płynie z głośnika telefonu nawet wtedy, gdy podłączone są słuchawki lub urządzenie Bluetooth.",
  // ===== 2026-10-19 v43.313 (card 6b4458db) =====
  "(sérült üzenet — egy 2026. 10. 12. előtti szerverhiba levágta, nem állítható helyre)": "(uszkodzona wiadomość — ucięta przez błąd serwera sprzed 12.10.2026, nie da się jej odtworzyć)",
  "Ezen a készüléken a böngésző nem támogatja a rezgést (iPhone-on a Safari nem tudja). A kapcsoló ezért nem aktív.": "Przeglądarka na tym urządzeniu nie obsługuje wibracji (Safari na iPhonie tego nie potrafi). Dlatego przełącznik jest nieaktywny.",
  "Bejelentéseim": "Moje zgłoszenia",
  "Újdonságok": "Nowości",
  "Facebook-csoport": "Grupa na Facebooku",
  "Facebook-oldal": "Strona na Facebooku",
  // ===== 2026-10-19: sugo-szovegek a kepernyokhoz igazitva (kartya eaaba276, Fonok 1a) =====
  "A gyűrű a jelen lévő típusok átlagát mutatja, a színe a leggyengébbet. A sávokon látod, melyik terület gyenge: egy alacsony érték az átlag mögött is ott lehet.": "Pierścień pokazuje średnią obecnych typów, a jego kolor najsłabszy. Na paskach widzisz, który obszar jest słaby: niska wartość może kryć się za średnią.",
  "Nyelv: az app felületének nyelve. A tartalom (tudástár, Biblia) egyelőre nem változik tőle; a Biblia fordítását a Biblia fejlécében választod.": "Język: język interfejsu aplikacji. Treści (baza wiedzy, Biblia) na razie się od tego nie zmieniają; przekład Biblii wybierasz w nagłówku Biblii.",
  "Fény-SOS képernyővel: a kijelző villogtatja a jelet. Ez minden telefonon megy, akkor is, ha a vaku nem indul.": "SOS światłem ekranu: wyświetlacz miga sygnałem. Działa na każdym telefonie, nawet jeśli lampa błyskowa się nie włącza.",
  "Esés után automatikus SOS: alapból ki van kapcsolva. Ha bekapcsolod, és a telefon nagy ütés után egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a Jól vagyok gombot, SOS üzenetet küld a helyzeteddel minden szobádba, és megszólal a vészsíp.": "Automatyczny SOS po upadku: domyślnie jest wyłączony. Jeśli go włączysz, a telefon po mocnym uderzeniu przez minutę się nie porusza, głośno odlicza. Jeśli nie naciśniesz przycisku Nic mi nie jest, wyśle wiadomość SOS z twoją lokalizacją do wszystkich twoich pokoi i włączy się gwizdek alarmowy.",
  "Export: a lista fájlba, például a családnak. A teljes készlet törlése (Készlet ürítése) a Beállítások > Adatkezelés alatt van; előtte exportálj.": "Eksport: lista do pliku, na przykład dla rodziny. Usunięcie całego spisu (Wyczyść zapasy) jest w Ustawienia > Dane; wcześniej wyeksportuj.",
  // ===== 2026-10-11 23:4x: teljes atnezes (bemutatkozas, visszajelzes, hianyzo feliratok) =====
  "Üdv Prepperek!": "Witajcie, prepperzy!",
  "PrepperPapa vagyok, egy készülődő ember, aki mindenhez érteni szeret. Gyerekkorom óta vonz minden, ami hálózattól és rendszertől független, és az az érzés, amikor arra számíthatsz, ami a fejedben van tudás, és ami nálad van eszköz.": "Jestem PrepperPapa, człowiek, który się przygotowuje i lubi rozumieć wszystko. Od dziecka pociąga mnie wszystko, co niezależne od sieci i systemu, i to uczucie, gdy możesz polegać na wiedzy w głowie i narzędziach, które masz przy sobie.",
  "A prepperekről sokan hideg, bezárkózó embereket képzelnek el. Én azt hiszem, hogy a felkészülést nem a félelemnek kell vezetnie, hanem az önfeláldozó szeretetnek.": "Wielu wyobraża sobie prepperów jako zimnych, zamkniętych ludzi. Wierzę, że przygotowaniami nie powinien kierować strach, lecz ofiarna miłość.",
  "Ezért álmodtam meg ezt az alkalmazást: hogy mindenkinek reménysége legyen a sötétségben, és a nehéz időkben valódi eszköz, valódi segítség legyen a kezében, akkor is, ha nincs áram és nincs térerő.": "Dlatego wymarzyłem tę aplikację: aby każdy miał nadzieję w ciemności, a w trudnych czasach prawdziwe narzędzie, prawdziwą pomoc w ręku, nawet gdy nie ma prądu ani zasięgu.",
  "Készülj, ne félj!": "Przygotuj się, nie bój się!",
  "Erőt reménységet!": "Siły i nadziei!",
  "Hibát találtál, vagy ötleted van?": "Znalazłeś błąd albo masz pomysł?",
  "Írd meg, és ha kell, csatolj képet. Minden visszajelzést elolvasunk.": "Napisz do nas, a w razie potrzeby dołącz zdjęcie. Czytamy każdą wiadomość.",
  "Visszajelzés küldése": "Wyślij opinię",
  "a sajátod, pl. +36 30 123 4567": "twój własny, np. +36 30 123 4567",
  "Küldetést kaptam: a tíz szűz példázatát, hogy fel kell készülni. Az eszesek éjfélkor nem tudtak a saját olajukból adni": "Otrzymałem misję: przypowieść o dziesięciu pannach, że trzeba być przygotowanym. O północy mądre nie mogły dać ze swojej oliwy",
  "Máté 25,9": "Mt 25,9",
  ", ezért a tudást időben kell átadni.": ", dlatego wiedzę trzeba przekazać na czas.",
  "A csomagod felhasználó-korlátja betelt:": "Osiągnięto limit użytkowników twojego pakietu:",
  "A csomagod termék-korlátja betelt:": "Osiągnięto limit produktów twojego pakietu:",
  "A felolvasás nem indult el: a telefonon nincs ehhez a nyelvhez felolvasó hang (Beállítások → Szövegfelolvasás).": "Czytanie nie ruszyło: telefon nie ma głosu dla tego języka (Ustawienia → Zamiana tekstu na mowę).",
  "A kamerát nem sikerült elindítani. Adj rá engedélyt a telefon beállításaiban.": "Nie udało się uruchomić aparatu. Zezwól na to w ustawieniach telefonu.",
  "A mentős beolvashatja.": "Ratownik może go zeskanować.",
  "A próba-csomag beállítva.": "Pakiet próbny ustawiony.",
  "Bővíts a Beállításokban, vagy törölj egy tagot.": "Rozszerz w Ustawieniach albo usuń członka.",
  "Bővíts a Beállításokban, vagy törölj egy tételt.": "Rozszerz w Ustawieniach albo usuń pozycję.",
  "Felhasználók": "Użytkownicy",
  "Fizetek": "Płacę",
  "Gyorsabb": "Szybciej",
  "Hiányzik:": "Brakuje:",
  "Lassabb": "Wolniej",
  "Megnézem térképen": "Pokaż na mapie",
  "Modulok": "Moduły",
  "Nincs internet: a telefon hangja olvas": "Brak internetu: czyta głos telefonu",
  "Próba-mód kikapcsolva, a valódi feloldásod áll vissza.": "Tryb próbny wyłączony, przywrócono twoje prawdziwe odblokowanie.",
  "Szünet": "Pauza",
  "Termékek": "Produkty",
  "Teszt-adatok betöltve: 3 fő, 1 háziállat, 5 helyszín (köztük autó és hétvégi ház),": "Wczytano dane testowe: 3 osoby, 1 zwierzę, 5 miejsc (w tym samochód i domek letniskowy),",
  "Vissza az igéhez": "Wróć do wersetu",
  "Vészkártyák": "Karty awaryjne",
  "adat frissítve a már felvett teszt-tagoknál": "zaktualizowano dane już dodanych członków testowych",
  "egy sincs": "brak",
  "korlátlan": "bez limitu",
  "légvonalban": "w linii prostej",
  "légvonalban, szakaszonként összeadva": "w linii prostej, sumując odcinek po odcinku",
  "megálló": "przystanek",
  "mérés az elmúlt 48 órából. A telefon légnyomás-szenzora automatikusan méri; kézzel is bevihetsz értéket.": "pomiarów z ostatnich 48 godzin. Czujnik ciśnienia telefonu mierzy automatycznie; możesz też wpisać wartości ręcznie.",
  "nincs ismert": "brak znanych",
  "nincs megadva": "nie podano",
  "válassz könyvet": "wybierz księgę",
  "összesen": "łącznie",
  "A többiek a „Szobák a hálón\" listában magától látják a szobát. Ha valakinél mégsem jelenik meg, ezt a címet írja be a „Csatlakozás más szobájához\" gombbal.": "Pozostali widzą pokój automatycznie na liście „Pokoje w sieci”. Jeśli u kogoś się nie pojawi, niech wpisze ten adres przyciskiem „Dołącz do cudzego pokoju”.",
  "Másik cím": "Inny adres",
  "A szoba címe": "Adres pokoju",
  "Vissza a saját szobámba": "Wróć do mojego pokoju",
  "Fénykép": "Zdjęcie",
  "Jóváírva.": "Zaksięgowano.",
  "küldött neked": "wysłał ci",
  "Gíra küldése neki": "Wyślij mu gíra",
  // ===== 2026-10-11 22:3x: gira-kozosseg a gazda dontese =====
  "A szoba gazdája Gíra-közösségnek jelölte: a telefonod magától részt vesz.": "Administrator pokoju oznaczył go jako społeczność Gíra: twój telefon uczestniczy automatycznie.",
  "Ezt a szoba gazdája kapcsolja be; még nem jelölte Gíra-közösségnek.": "To włącza administrator pokoju; jeszcze nie oznaczono jako społeczność Gíra.",
  "Bekapcsolva a szoba minden tagjának. Átküldöm a Gíra-könyvet…": "Włączono dla wszystkich członków pokoju. Wysyłam księgę Gíra…",
  "Kikapcsolva a szoba minden tagjának.": "Wyłączono dla wszystkich członków pokoju.",
  "A szoba gazdája kapcsolja be; ilyenkor minden tag telefonja magától átküldi ide a Gíra-könyvét, és innen fogadja a többiekét. A szoba minden tagja látja a gíra-mozgásokat.": "Włącza to administrator pokoju; wtedy telefon każdego członka sam wysyła tu swoją księgę Gíra i odbiera księgi innych. Wszyscy członkowie widzą ruchy gíra.",
  // ===== 2026-10-11 22:2x: LoRa a radio-kalkulatorban =====
  "LoRa (868 MHz) — engedély nélküli adatrádió": "LoRa (868 MHz) — radio danych bez licencji",
  "Engedély nélkül használható: alapból 25 mW, a 869,4-869,65 MHz-es alsávon 500 mW, korlátozott adásidővel. Nem beszéd, hanem rövid szöveges üzenet; cserébe kis teljesítménnyel is kilométereket visz, mert a zaj alatt is vesz. A telefon nem tud LoRát: egy LoRa-egység kell, amihez a telefon Bluetooth-on csatlakozik.": "Bez licencji: domyślnie 25 mW, w podpaśmie 869,4-869,65 MHz 500 mW, z ograniczonym czasem nadawania. Nie głos, lecz krótkie wiadomości tekstowe; za to małą mocą sięga kilometrów, bo odbiera poniżej szumu. Telefon nie ma LoRa: potrzebny jest moduł LoRa, z którym telefon łączy się przez Bluetooth.",
  // ===== 2026-10-11 21:4x: gira minusz-hatar =====
  "ennyit fizethetsz most": "możesz teraz zapłacić",
  "Ez túllépné a mínusz-határodat.": "To przekroczyłoby twój limit debetu.",
  "Most legfeljebb ennyit fizethetsz:": "Teraz możesz zapłacić najwyżej:",
  "határ": "limit",
  "Mínuszba mehetsz": "Możesz zejść do",
  "gíráig": "gíra",
  "most ennyit fizethetsz": "teraz do zapłaty",
  // ===== 2026-10-11 21:3x: gira-egyenleg az urlapon =====
  "Egyenleged": "Twoje saldo",
  "a gíra nem mehet mínuszba, ezért fizetni akkor tudsz, ha előbb kapsz valakitől.": "gíra nie może spaść poniżej zera, więc zapłacisz, gdy najpierw ktoś zapłaci tobie.",
  "Ennyi gírád nincs. Egyenleged:": "Nie masz tyle gíra. Twoje saldo:",
  "A gíra nem mehet mínuszba: előbb kapnod kell valakitől.": "Gíra nie może spaść poniżej zera: najpierw ktoś musi ci zapłacić.",
  // ===== 2026-10-11 21:3x: legnyomas-kartya, mozgas-szures =====
  "Járműben vagy (a GPS szerint 15 km/h felett): a riasztás szünetel, mert ilyenkor a nyomás az emelkedőtől és a szellőzéstől is változik.": "Jesteś w pojeździe (wg GPS powyżej 15 km/h): alarm jest wstrzymany, bo ciśnienie zmienia się wtedy także od wzniesień i wentylacji.",
  "Magasság-korrekcióval: közben": "Z korektą wysokości: w tym czasie",
  "volt a szintkülönbség, a mért nyers változás": "różnicy wysokości, zmierzona surowa zmiana to",
  "Szenzor, előzmény, tudnivalók": "Czujnik, historia, uwagi",
  // ===== 2026-10-11 21:0x: szintarcsa, 24 oras napiv, allo tajolo, felolvaso-ertesites =====
  "Válassz színt a tárcsán": "Wybierz kolor na kole",
  "Fényerő": "Jasność",
  "Kiválasztom": "Wybierz",
  "napkelte": "wschód",
  "napnyugta": "zachód",
  "éjközép": "północ",
  "Nappal": "Dzień",
  "Éjszaka": "Noc",
  "Biblia felolvasás": "Czytanie Biblii",
  "Jó irány": "Dobry kierunek",
  "Fordulj jobbra": "Skręć w prawo",
  "Fordulj balra": "Skręć w lewo",
  "Fordulj a kívánt irányba, és nyomd meg: Irány felvétele.": "Ustaw się w wybranym kierunku i naciśnij: Zapisz kierunek.",
  "Állítsd fel a telefont: álló módban a hátsó kamera irányát mérjük, fektetve ez nem pontos.": "Ustaw telefon pionowo: w trybie pionowym mierzymy kierunek tylnego aparatu, na płasko nie jest to dokładne.",
  "Álló mód: a hátsó kamera iránya számít. A keret zöld, ha a felvett irányba nézel, és piros, ha nem.": "Tryb pionowy: liczy się kierunek tylnego aparatu. Ramka jest zielona, gdy patrzysz w zapisanym kierunku, a czerwona, gdy nie.",
  "Vízszintes": "Poziomo",
  "Álló": "Pionowo",
  "Kamera a háttérben": "Kamera w tle",
  "A hátsó kamera képe a tájoló mögött, hogy lásd, merre mutat.": "Obraz z tylnego aparatu za kompasem, abyś widział, gdzie wskazuje.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Privát üzenet neki":
    "Prywatna wiadomość",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "még nincs Gíra-azonosítója":
    "jeszcze bez ID Gíra",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Elküldve a szobán keresztül":
    "Wysłano przez pokój",
  "Nála magától jóváíródik, és a nyugtája is magától visszajön.":
    "U odbiorcy zostanie zaksięgowane automatycznie, a jego pokwitowanie też wróci automatycznie.",
  "A szobába most nem ment el (nincs kapcsolat vagy kulcs). Itt a QR, ezzel is átadhatod.":
    "Nie udało się teraz wysłać do pokoju (brak połączenia lub klucza). Oto kod QR, nim też możesz przekazać.",
  "Gíra-fizetés":
    "Płatność Gíra",
  "hamis aláírás, nem fogadom el":
    "fałszywy podpis, nie przyjęto",
  "jóváírva nálad":
    "zaksięgowano u Ciebie",
  "Szobatársat választhatsz, ha egy Gíra-közösség szobában ők is bekapcsolták.":
    "Możesz wybrać współlokatora pokoju, jeśli też to włączył w pokoju społeczności Gíra.",
  "Szobatárs kiválasztása…":
    "Wybierz osobę z pokoju…",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Helyek":
    "Miejsca",
  "a határok közelítők":
    "granice są przybliżone",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Gíra-közösség":
    "Społeczność Gíra",
  "A telefon ebbe a szobába magától átküldi a Gíra-könyvedet, és innen fogadja a többiekét. A szoba minden tagja látja a gíra-mozgásokat.":
    "Telefon automatycznie wysyła Twoją księgę Gíra do tego pokoju i odbiera tu księgi innych. Każdy członek pokoju widzi ruchy Gíra.",
  "Gíra-közösségnek jelölt szobák":
    "Pokoje oznaczone jako społeczność Gíra",
  "A szoba beállításaiban kapcsolhatod be („Gíra-közösség”); oda a telefon magától átküldi a könyvet.":
    "Włącz to w ustawieniach pokoju („Społeczność Gíra”); telefon automatycznie wyśle tam księgę.",
  "Utoljára egyeztetve":
    "Ostatnia synchronizacja",
  "Egyeztetés most":
    "Synchronizuj teraz",
  "szoba":
    "pokój/pokoje",
  "Nincs elérhető Gíra-közösség szoba. Kapcsold be egy szoba beállításaiban.":
    "Brak dostępnego pokoju społeczności Gíra. Włącz go w ustawieniach pokoju.",
  "Bekapcsolva. Átküldöm a Gíra-könyvet…":
    "Włączono. Wysyłam księgę Gíra…",
  "Kikapcsolva. Ide többé nem küldöm a könyvet.":
    "Wyłączono. Księga nie będzie już tu wysyłana.",
  "Bekapcsolva, a könyv átment.":
    "Włączono, księga dotarła.",
  "Bekapcsolva. A könyv akkor megy át, amikor a szoba elérhető és van aláírt tételed.":
    "Włączono. Księga zostanie wysłana, gdy pokój będzie dostępny i będziesz mieć podpisane wpisy.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Titkos kódok":
    "Tajne kody",
  "Kérek":
    "Poproś",
  "Beolvasás":
    "Skanuj",
  "Azonosítóm":
    "Mój ID",
  "Nincs kamera? Beillesztés szövegből":
    "Brak aparatu? Wklej z tekstu",
  "Mozgások":
    "Ruchy",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Apokrif könyvek":
    "Księgi apokryficzne",
  "Énok ↓":
    "Henoch ↓",
  "Énok könyve letöltése":
    "Pobierz Księgę Henocha",
  "Nem sikerült, próbáld újra":
    "Nie udało się, spróbuj ponownie",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "SÜRGŐS ·":
    "PILNE ·",
  "3 nappal":
    "3 dni wcześniej",
  "Megnézem":
    "Zobacz",
  "(te)":
    "(ty)",
  "ENGEDÉLYKÖTELES, mint a 2 méter. Beépítésben, épületek között jobb, mint a 2 méter; nyílt terepen rosszabb.":
    "WYMAGA POZWOLENIA, jak pasmo 2 m. W zabudowie, między budynkami działa lepiej niż 2 m; w otwartym terenie gorzej.",
  "Írd be az e-mail címed. Küldünk rá egy 6 jegyű kódot; ha beírod, bent vagy. Jelszó nem kell, a telefon megjegyzi a belépést.":
    "Wpisz swój adres e-mail. Wyślemy na niego 6-cyfrowy kod; gdy go wpiszesz, jesteś w środku. Hasło nie jest potrzebne, telefon zapamięta logowanie.",
  "Add meg az e-mail címed és az ÚJ jelszót kétszer. Küldünk egy kódot e-mailben; ha beírod, az új jelszó lép életbe.":
    "Podaj adres e-mail i NOWE hasło dwa razy. Wyślemy kod e-mailem; gdy go wpiszesz, nowe hasło zacznie obowiązywać.",
  "Bekapcsolva, de a bezárt appos értesítés regisztrálása most nem sikerült; amíg az app fut, jelez.":
    "Włączone, ale rejestracja powiadomień przy zamkniętej aplikacji teraz się nie udała; dopóki aplikacja działa, będzie powiadamiać.",
  "Alul írod az üzenetet; a papírrepülő gomb küldi el a szoba minden tagjának.":
    "Wiadomość piszesz na dole; przycisk z papierowym samolotem wysyła ją do wszystkich członków pokoju.",
  "Az értesítés le van tiltva. A telefon Beállítások > Alkalmazások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Powiadomienia są zablokowane. Możesz je ponownie włączyć w Ustawieniach telefonu > Aplikacje > PrepperPapa > Powiadomienia.",
  "Az értesítés le van tiltva. A telefon Beállítások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Powiadomienia są zablokowane. Możesz je ponownie włączyć w Ustawieniach telefonu > PrepperPapa > Powiadomienia.",
  "Letiltva. A telefon Beállítások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Zablokowane. Możesz to ponownie włączyć w Ustawieniach telefonu > PrepperPapa > Powiadomienia.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Kép csatolása":
    "Załącz zdjęcie",
  "Új helyi szoba":
    "Nowy pokój lokalny",
  "Nincs internetkapcsolat.":
    "Brak połączenia z internetem.",
  "Visszajelzés":
    "Opinie",
  "Saját vészkártya adatai":
    "Dane twojej karty alarmowej",
  "Nem ez volt.":
    "To nie było to.",
  "Eredmény":
    "Wynik",
  "E-mail cím":
    "Adres e-mail",
  "helyi háló, internet nélkül":
    "sieć lokalna, bez internetu",
  "Forgatás balra":
    "Obróć w lewo",
  "Forgatás jobbra":
    "Obróć w prawo",
  "Saját telefonszám":
    "Twój numer telefonu",
  "Térképről":
    "Z mapy",
  "Koppints a másoláshoz":
    "Dotknij, aby skopiować",
  "Belépés e-mail címmel":
    "Logowanie adresem e-mail",
  "A szoba kódja, koppints a másoláshoz":
    "Kod pokoju, dotknij, aby skopiować",
  "A jel nem vált pont és vonás között. Ez nem tiszta Morze — állíts a vételen, és próbáld újra.":
    "Sygnał nie przełącza się między kropką a kreską. To nie jest czysty Morse — ustaw odbiór i spróbuj ponownie.",
  "Ez nagyjából":
    "Odpowiada to mniej więcej",
  "18650 (a gyártó saját cellája kb. 3400 mAh)":
    "18650 (własne ogniwo producenta ok. 3400 mAh)",
  "kWh hőigénnyel, összesen":
    "kWh zapotrzebowania na ciepło, łącznie",
  "Állj":
    "Stop",
  "Kód küldése e-mailben":
    "Wyślij kod e-mailem",
  "Add meg az e-mail címed.":
    "Podaj swój adres e-mail.",
  "Ez nem tűnik e-mail címnek.":
    "To nie wygląda na adres e-mail.",
  "Nem sikerült, próbáld újra.":
    "Nie udało się, spróbuj ponownie.",
  "nincs bejelentkezve":
    "niezalogowany",
  "Kikapcsolva ezen az eszközön.":
    "Wyłączone na tym urządzeniu.",
  "Kicsinyítem...":
    "Zmniejszam...",
  "Kép törölve.":
    "Zdjęcie usunięte.",
  "Ezt a képet nem tudom megnyitni.":
    "Nie mogę otworzyć tego zdjęcia.",
  "Frissítés keresése":
    "Sprawdź aktualizacje",
  "Normál":
    "Normalny",
  "Ki vagyok?":
    "Kim jestem?",
  "2018 óta készítek videókat PrepperPapa néven a felkészülésről. Hiszem, hogy a keresztény értékek és a jó gyakorlati eszközök együtt segítenek abban, hogy könnyebben vegyük a mindennapok kihívásait, ezért a célom az, hogy fényt hozzak az életedbe, lelkiekben és a szó szoros értelmében is.":
    "Od 2018 roku tworzę filmy o przygotowaniu pod nazwą PrepperPapa. Wierzę, że wartości chrześcijańskie i dobre praktyczne narzędzia razem pomagają łatwiej radzić sobie z wyzwaniami codzienności, dlatego moim celem jest wnieść światło do twojego życia, duchowo i dosłownie.",
  "Lámpákat, késeket, táskákat és energiaforrásokat tesztelek valós használatban, és ha valami nem vált be, azt is elmondom. Nem világvége-hangulatot árulok, hanem azt a néhány dolgot mutatom meg, ami egy áramszünetben, egy viharban vagy egy túrán tényleg számít.":
    "Testuję latarki, noże, plecaki i źródła energii w prawdziwym użyciu, a jeśli coś się nie sprawdziło, też o tym mówię. Nie sprzedaję nastroju końca świata, tylko pokazuję tych kilka rzeczy, które naprawdę mają znaczenie podczas przerwy w dostawie prądu, burzy czy wędrówki.",
  "Felkészülés józan ésszel, magyar valóságra.":
    "Przygotowanie ze zdrowym rozsądkiem, na węgierskie realia.",
  "Elérhetőségek":
    "Kontakt",
  "Prepper Vészkijárat csoport":
    "Grupa Prepper Vészkijárat",
  "Gyülekező fórum":
    "Forum Gyülekező",
  "Melyik betű?":
    "Która litera?",
  "Mi hiányzik?":
    "Czego brakuje?",
  "Az adat a Háztartásból jön, személyenként: vércsoport, allergia, gyógyszer, betegség, a saját telefonszám és a vészhelyzeti kontakt (név és telefon). Akinél még nincs kontakt megadva, ott a saját kártyád kontaktját használjuk.":
    "Dane pochodzą z Gospodarstwa domowego, dla każdej osoby: grupa krwi, alergia, leki, choroby, własny numer telefonu i kontakt alarmowy (imię i telefon). Jeśli ktoś nie ma jeszcze podanego kontaktu, używamy kontaktu z twojej karty.",
  "Vészhelyzeti kontakt – ki?":
    "Kontakt alarmowy – kto?",
  "anya, apa, szomszéd…":
    "mama, tata, sąsiad…",
  "Vészhelyzeti kontakt – telefon":
    "Kontakt alarmowy – telefon",
  "A jegyzet neve":
    "Nazwa notatki",
  "Értesítések":
    "Powiadomienia",
  "Lejáró élelmiszer és készlet":
    "Żywność i zapasy z kończącym się terminem",
  "Mennyivel előre szóljon:":
    "Z jakim wyprzedzeniem powiadomić:",
  "1 héttel":
    "1 tydzień",
  "2 héttel":
    "2 tygodnie",
  "1 hónappal":
    "1 miesiąc",
  "Próbaértesítés":
    "Powiadomienie testowe",
  "Rezgő visszajelzés":
    "Wibracje",
  "Rövid rezgés a gombok megnyomásakor":
    "Krótka wibracja przy naciśnięciu przycisków",
  "A készülék rövid koppanással jelez minden gombnyomást.":
    "Urządzenie sygnalizuje każde naciśnięcie przycisku krótkim stuknięciem.",
  "Készlet ürítése":
    "Opróżnij zapasy",
  "Fejlesztői próba-mód":
    "Tryb testowy dewelopera",
  "Teszt funkció: beállíthatsz egy fizetős csomagot, és az app úgy viselkedik, mintha azt vásárolták volna meg. Csak ezen a készüléken, csak a felületen. A valódi feloldásaid megmaradnak, kikapcsolva visszaáll minden.":
    "Funkcja testowa: możesz ustawić płatny pakiet, a aplikacja będzie się zachowywać tak, jakby został kupiony. Tylko na tym urządzeniu, tylko w interfejsie. Twoje prawdziwe odblokowania zostają, po wyłączeniu wszystko wraca.",
  "Próba-mód bekapcsolása":
    "Włącz tryb testowy",
  "Felhasználó-korlát":
    "Limit użytkowników",
  "Termék-korlát":
    "Limit produktów",
  "A 0 korlátlant jelent.":
    "0 oznacza brak limitu.",
  "Beállítás":
    "Ustaw",
  "Próba-mód ki":
    "Wyłącz tryb testowy",
  "Vészhelyzeti kontakt neve":
    "Imię kontaktu alarmowego",
  "pl. anya, apa, szomszéd":
    "np. mama, tata, sąsiad",
  "Vészhelyzeti kontakt telefonszáma":
    "Numer telefonu kontaktu alarmowego",
  "Koordináta térképről":
    "Współrzędne z mapy",
  "· vagy egy bemásolt Google Térkép-link. Ha nem tudom értelmezni, szólok — üresen nem mentem el. Vagy nyomd meg a":
    "· lub wklejony link do Map Google. Jeśli go nie zrozumiem, powiem — pustego nie zapiszę. Albo naciśnij przycisk",
  "gombot, és húzd a térképet a célkereszt alá.":
    "i przesuń mapę pod celownik.",
  "Koordináta a térképről":
    "Współrzędne z mapy",
  "Ezt választom":
    "Wybieram to",
  "MESH-hálózat: szöveg a közeledben lévőknek, internet nélkül":
    "Sieć MESH: tekst dla osób w pobliżu, bez internetu",
  "Internet és térerő nélkül: közös Wi-Fi-n, hotspoton vagy Bluetooth-on. Itt látod a saját szobáidat és a közelben hallottakat.":
    "Bez internetu i zasięgu: przez wspólne Wi-Fi, hotspot lub Bluetooth. Tu widzisz swoje pokoje i te usłyszane w pobliżu.",
  "Csatlakozás címmel":
    "Dołącz przez adres",
  "Ez látszik a szobák listáján, ezen ismerik fel. A telefonod a képet magától lekicsinyíti.":
    "To widać na liście pokoi, po tym go rozpoznają. Telefon sam zmniejszy zdjęcie.",
  "Fiók":
    "Konto",
  "Jelszó megváltoztatása":
    "Zmień hasło",
  "Kép a szobához (nem kötelező)":
    "Zdjęcie pokoju (opcjonalne)",
  "Mérés fut… tartsd a jelen,":
    "Pomiar trwa… trzymaj sygnał przez",
  "másodperc.":
    "sekund.",
  "Kevés jel érkezett. Indítsd újra, és nézd meg, hogy a vétel egyáltalán lát-e jelet.":
    "Dotarło mało sygnału. Uruchom ponownie i sprawdź, czy odbiór w ogóle widzi sygnał.",
  "mért arány":
    "zmierzony stosunek",
  "Mért sebesség":
    "Zmierzona prędkość",
  "Beállítom":
    "Ustawiam",
  "A vétel sebessége beállítva":
    "Prędkość odbioru ustawiona",
  "Figyelj: lekopogom a betűt. Előbb a sor, aztán az oszlop.":
    "Uwaga: wystukam literę. Najpierw wiersz, potem kolumna.",
  "Kopogd le ezt a betűt":
    "Wystukaj tę literę",
  "Írd be, melyik betűt hallottad.":
    "Wpisz, którą literę usłyszałeś.",
  "Írd le, mit hallottál, aztán nyomd meg az Ellenőrzést.":
    "Zapisz, co usłyszałeś, a potem naciśnij Sprawdź.",
  "Saját telefon:":
    "Twój telefon:",
  "Ez a cikk zárt: a bővített tudástár nincs feloldva ezen a készüléken.":
    "Ten artykuł jest zablokowany: rozszerzona baza wiedzy nie jest odblokowana na tym urządzeniu.",
  "Előbb írd be a szöveget a mezőbe, aztán koppints a lapra.":
    "Najpierw wpisz tekst w pole, a potem dotknij kartki.",
  "T Szöveg":
    "T Tekst",
  "Eldobod a rajzot?":
    "Odrzucić rysunek?",
  "Új lapot kezdesz? A mostani rajz elvész.":
    "Zaczynasz nową kartkę? Obecny rysunek przepadnie.",
  "Adj nevet a jegyzetnek.":
    "Nazwij notatkę.",
  "Wh tárolt energia":
    "Wh zmagazynowanej energii",
  "saját megadás":
    "własna wartość",
  "A megadott wattórából 10 százalékot levonunk átalakítási veszteségre.":
    "Od podanych watogodzin odejmujemy 10 procent na straty przetwarzania.",
  "A savas akkut csak félig szabad lemeríteni, különben tönkremegy, és az átalakító is elvisz 15 százalékot. Ezért a névlegesnek nagyjából 42 százalékával számolunk.":
    "Akumulator kwasowy można rozładować tylko do połowy, inaczej się zniszczy, a przetwornica zabiera jeszcze 15 procent. Dlatego liczymy mniej więcej 42 procent wartości nominalnej.",
  "A LiFePO4-et 80 százalékig le lehet meríteni (a savasat csak felére), az átalakító 10 százalékot visz.":
    "LiFePO4 można rozładować do 80 procent (kwasowy tylko do połowy), przetwornica zabiera 10 procent.",
  "A tárolt energiából kb. 10 százalékot elvisz az átalakítás, ezért nem a teljes wattóra használható fel.":
    "Ze zmagazynowanej energii ok. 10 procent zabiera przetwarzanie, dlatego nie da się wykorzystać pełnych watogodzin.",
  "saját eszköz":
    "własne urządzenie",
  "Tölts ki legalább egy sort: hány darab, hány watt, hány óra naponta.":
    "Wypełnij co najmniej jeden wiersz: ile sztuk, ile watów, ile godzin dziennie.",
  "Nem fogy el":
    "Nie wyczerpie się",
  "Ez nem fér el egyszerre. A felsorolt fogyasztók együtt":
    "To się nie zmieści naraz. Wymienione odbiorniki razem pobierają",
  "wattot kérnek, a gép":
    "W, a urządzenie",
  "Nem attól múlik, hogy mekkora a wattórája — ennyit egyszerre nem bír.":
    "Nie chodzi o to, ile ma watogodzin — tyle naraz nie uciągnie.",
  "Vagy nagyobb teljesítményű gép kell, vagy nem egyszerre kell működtetni őket.":
    "Potrzebne jest albo mocniejsze urządzenie, albo nie mogą działać jednocześnie.",
  "Az indulási áram kiviheti. A folyamatos fogyasztás belefér,":
    "Prąd rozruchowy może je wyłączyć. Ciągły pobór się mieści,",
  "de a motoros készülék induláskor kb.":
    "ale urządzenie z silnikiem przy starcie pobiera ok.",
  "wattot húz pár másodpercig,":
    "W przez kilka sekund,",
  "a gép":
    "a urządzenie ma",
  "wattos. Ilyenkor a gép lekapcsol, pedig „papíron belefért volna\".":
    "W. Wtedy urządzenie się wyłącza, choć „na papierze się mieściło”.",
  "Wh valóban felhasználható energia kell":
    "Wh faktycznie dostępnej energii jest potrzebne",
  "(névlegesen kb.":
    "(nominalnie ok.",
  "Wh, a veszteség miatt).":
    "Wh, ze względu na straty).",
  "A választott gép ezt tudja.":
    "Wybrane urządzenie to potrafi.",
  "A választott gép ehhez kevés.":
    "Wybrane urządzenie jest na to za słabe.",
  "Ezek elegendők lennének erre a listára:":
    "Na tę listę wystarczyłyby te:",
  "A napelem naponta":
    "Panel słoneczny daje dziennie o",
  "wattórával többet ad, mint amennyit elhasználsz. Ez így önfenntartó — de csak amíg süt: két borús nap":
    "Wh więcej, niż zużywasz. W ten sposób jest samowystarczalny — ale tylko dopóki świeci słońce: dwa pochmurne dni",
  "wattórát vinne el a tartalékból.":
    "Wh zabrałyby z rezerwy.",
  "ezzel a listával.":
    "z tą listą.",
  "Napi fogyasztás:":
    "Dzienne zużycie:",
  "| csúcsterhelés:":
    "| szczytowe obciążenie:",
  "(a gép":
    "(urządzenie",
  "Wh névlegesből":
    "Wh nominalnie, z tego",
  "Wh a valóban felhasználható.":
    "Wh faktycznie do wykorzystania.",
  "A napelem:":
    "Panel słoneczny:",
  "napfényórának felel meg, tehát napi kb.":
    "godzinom słońca, więc dziennie wpływa ok.",
  "Wh jön be. A névleges teljesítmény 70 százalékával számolunk:":
    "Wh. Liczymy 70 procent mocy nominalnej:",
  "az állásszög, a hő és a töltésvezérlő mind levesz belőle.":
    "kąt nachylenia, temperatura i regulator ładowania — każde coś zabiera.",
  "teletöltése ilyen időben":
    "pełne naładowanie przy takiej pogodzie",
  "Saját / kézi megadás (bármilyen lámpa)":
    "Własne / ręczne dane (dowolna latarka)",
  "NEXTORCH eStar (fejlámpa, max. 1300 lm)":
    "NEXTORCH eStar (czołówka, maks. 1300 lm)",
  "2× 1200 mAh (2400 mAh összesen)":
    "2× 1200 mAh (łącznie 2400 mAh)",
  "NEXTORCH myStar V2.0 (fejlámpa, max. 760 lm)":
    "NEXTORCH myStar V2.0 (czołówka, maks. 760 lm)",
  "NEXTORCH iStar (fejlámpa, max. 450 lm)":
    "NEXTORCH iStar (czołówka, maks. 450 lm)",
  "Piros villogó":
    "Czerwone miganie",
  "NEXTORCH MAX STAR (fejlámpa, max. 1200 lm)":
    "NEXTORCH MAX STAR (czołówka, maks. 1200 lm)",
  "NEXTORCH oStar (sisak-/fejlámpa, max. 500 lm)":
    "NEXTORCH oStar (latarka na kask / czołówka, maks. 500 lm)",
  "Decathlon Quechua HL50 (fejlámpa, 50 lm)":
    "Decathlon Quechua HL50 (czołówka, 50 lm)",
  "Decathlon Ontrail 900 (fejlámpa terepfutáshoz)":
    "Decathlon Ontrail 900 (czołówka do biegania w terenie)",
  "Boost, 900→350 lm (túlmelegedés ellen csökken)":
    "Boost, 900→350 lm (spada, by zapobiec przegrzaniu)",
  "Erős, 300 lm, állandó fényerő":
    "Mocny, 300 lm, stała jasność",
  "Decathlon Caperlan Moonlight 500 (horgász fejlámpa)":
    "Decathlon Caperlan Moonlight 500 (czołówka wędkarska)",
  "Horgászat, 80 lm":
    "Wędkowanie, 80 lm",
  "Optimál, 200 lm":
    "Optymalny, 200 lm",
  "UV mód":
    "Tryb UV",
  "Decathlon Forclaz ONNight 300 (fejlámpa túrázáshoz)":
    "Decathlon Forclaz ONNight 300 (czołówka turystyczna)",
  "Környezeti fény":
    "Światło otoczenia",
  "Erős, 130 lm":
    "Mocny, 130 lm",
  "Saját megadás (mA)":
    "Własna wartość (mA)",
  "Kis 5 mm-es LED (jelzőfény-szerű, gyenge)":
    "Mała dioda LED 5 mm (jak kontrolka, słaba)",
  "~1 W teljesítmény-LED (pl. Cree XP-E)":
    "~1 W dioda mocy (np. Cree XP-E)",
  "~3 W teljesítmény-LED (pl. Cree XP-G, Osram)":
    "~3 W dioda mocy (np. Cree XP-G, Osram)",
  "~5 W teljesítmény-LED (erős fejlámpa/zseblámpa)":
    "~5 W dioda mocy (mocna czołówka/latarka)",
  "COB LED-sáv (kempinglámpa)":
    "Pasek LED COB (lampa kempingowa)",
  "Saját megadás (mAh)":
    "Własna wartość (mAh)",
  "AA alkáli elem (~2500 mAh)":
    "Bateria alkaliczna AA (~2500 mAh)",
  "AA NiMH tölthető akku (~2000 mAh)":
    "Akumulator NiMH AA (~2000 mAh)",
  "AAA alkáli elem (~1000 mAh)":
    "Bateria alkaliczna AAA (~1000 mAh)",
  "— a gyártó szerint":
    "— według producenta",
  "— a gyártó saját, mért adata":
    "— własne, zmierzone dane producenta",
  "Add meg az akku kapacitását és a LED áramfelvételét is.":
    "Podaj pojemność akumulatora i pobór prądu diody LED.",
  "mAh névleges kapacitásból":
    "mAh pojemności nominalnej, z tego",
  "mAh a valóban felhasználható (a merítési és driver-veszteség miatt 15 százalékot levonva),":
    "mAh faktycznie do wykorzystania (po odjęciu 15 procent strat rozładowania i sterownika),",
  "mA folyamatos áramfelvétel mellett.":
    "mA przy ciągłym poborze prądu.",
  "Rejtőzködés, fekvés, olvasás. Ennyivel nem hízol és nem is fogysz gyorsan, de a fejed tiszta marad.":
    "Ukrywanie się, leżenie, czytanie. Na tym nie przytyjesz ani szybko nie schudniesz, a głowa pozostanie jasna.",
  "Járkálás, ház körüli teendők. Ez a nemzetközi vészhelyzeti tervezés alapszáma is.":
    "Chodzenie, prace wokół domu. To także podstawowa liczba w międzynarodowym planowaniu kryzysowym.",
  "Favágás, sáncolás, teherrel gyaloglás, hideg. Ez a szám gyorsan elviszi a készletet -- éppen ezért érdemes előre számolni vele.":
    "Rąbanie drewna, kopanie okopów, marsz z obciążeniem, zimno. Ta liczba szybko pochłania zapasy -- właśnie dlatego warto uwzględnić ją z góry.",
  "kcal fejenként naponta.":
    "kcal na osobę dziennie.",
  "saját tétel":
    "własna pozycja",
  "egység":
    "jednostka",
  "Engedély nélküli, 4 watt AM/FM (SSB-n 12). Nagy antennát kíván, de a hosszú hullám jobban hajlik a domb mögé, mint bármelyik kézirádió.":
    "Bez licencji, 4 W AM/FM (na SSB 12). Wymaga dużej anteny, ale dłuższa fala lepiej ugina się za wzgórze niż w jakimkolwiek radiu ręcznym.",
  "ENGEDÉLYKÖTELES: vizsga és hívójel kell hozzá. Vészhelyzetben az életveszély elhárítására a törvény enged kivételt, de arra épülő tervet ne csinálj -- a vizsga előre megszerezhető.":
    "WYMAGA LICENCJI: potrzebny egzamin i znak wywoławczy. W sytuacji zagrożenia prawo dopuszcza wyjątek dla ratowania życia, ale nie opieraj na tym planu -- egzamin można zdać wcześniej.",
  "ENGEDÉLYKÖTELES. Itt NEM a rálátás dönt: nappal 100-400 km-re, éjjel akár több ezerre visz az ionoszféráról visszaverődve. Ezt a kalkulátor nem modellezi -- lásd a figyelmeztetést az eredménynél.":
    "WYMAGA LICENCJI. Tu NIE decyduje widoczność: w dzień niesie na 100-400 km, w nocy nawet na tysiące, odbijając się od jonosfery. Kalkulator tego nie modeluje -- zobacz ostrzeżenie przy wyniku.",
  "ENGEDÉLYKÖTELES. Éjszakai sáv, a környék (50-300 km) megbízható lefedésére a legjobb -- ez a klasszikus \"megyényi\" összeköttetés.":
    "WYMAGA LICENCJI. Pasmo nocne, najlepsze do pewnego pokrycia okolicy (50-300 km) -- to klasyczna łączność \"na cały powiat\".",
  "Mező, tópart, autópálya. Itt a rálátás a korlát, nem a terep.":
    "Pole, brzeg jeziora, autostrada. Tu ograniczeniem jest widoczność, nie teren.",
  "A domb mögé a jel behajlik, de gyengülve. Egy dombtetőre felsétálni többet ér, mint tízszeres teljesítmény.":
    "Za wzgórze sygnał się ugina, ale słabnie. Wejście na szczyt wzgórza daje więcej niż dziesięciokrotna moc.",
  "A lombozat a rövid hullámot nyeli el jobban, ezért itt a 70 centi a leggyengébb.":
    "Liście mocniej pochłaniają krótszą falę, dlatego tu pasmo 70 cm wypada najsłabiej.",
  "Itt fordul meg a sorrend: a 70 centi jobban jut át épületek között, a CB-nek meg antennája sincs hova.":
    "Tu kolejność się odwraca: 70 cm lepiej przechodzi między budynkami, a CB nie ma nawet gdzie postawić anteny.",
  "Völgyben ülve a rálátás nulla. Itt a megoldás nem a watt, hanem az átjátszó vagy a gerincre feljutás.":
    "W dolinie widoczność wynosi zero. Tu rozwiązaniem nie są waty, tylko przemiennik albo wejście na grzbiet.",
  "talajhullám":
    "fala przyziemna",
  "terep és teljesítmény":
    "teren i moc",
  "rálátás (a Föld görbülete)":
    "widoczność (krzywizna Ziemi)",
  "Adj meg legalább egy embert.":
    "Podaj co najmniej jedną osobę.",
  "Tölts ki legalább egy tételt (mennyiség és kcal), vagy add meg az összeset egyben.":
    "Wypełnij co najmniej jedną pozycję (ilość i kcal) albo podaj całość łącznie.",
  "kcal hiányzik a":
    "kcal brakuje do",
  "húskonzerv .":
    "konserw mięsnych .",
  "Ennyi ideig elég a készlet":
    "Na tyle wystarczą zapasy",
  "felnőttnek":
    "dorosłych",
  "Napi igény:":
    "Dzienne zapotrzebowanie:",
  "készlet:":
    "zapasy:",
  "kcal kell.":
    "kcal potrzeba.",
  "Ez megvan.":
    "To jest.",
  "Ehhez a készlet kevés.":
    "Na to zapasy są za małe.",
  "A gyerekekkel a felnőtt adag 60 százalékával számoltunk — ez átlag,":
    "Dla dzieci liczyliśmy 60 procent porcji dorosłego — to średnia,",
  "egy tizenkét éves többet eszik egy hároméves(nél). A kalória nem minden:":
    "dwunastolatek je więcej niż trzylatek. Kalorie to nie wszystko:",
  "fehérje, só és zsír nélkül a puszta kalória pár hét alatt legyengít, és a":
    "bez białka, soli i tłuszczu same kalorie w kilka tygodni osłabiają, a",
  "C-vitamin hiánya hetek alatt jelentkezik. Ez a szám a KIHÚZÁST méri, nem az egészséget.":
    "niedobór witaminy C pojawia się po kilku tygodniach. Ta liczba mierzy PRZETRWANIE, nie zdrowie.",
  "A víz nincs ebben a számban, és hamarabb fogy el.":
    "Woda nie jest wliczona w tę liczbę, a kończy się szybciej.",
  "Élelem nélkül hetekig el lehet lenni, víz nélkül napokig. Ha a készletet tervezed,":
    "Bez jedzenia można przetrwać tygodnie, bez wody tylko dni. Jeśli planujesz zapasy,",
  "a vízzel kezdd — arra külön kalkulátor van.":
    "zacznij od wody — jest do tego osobny kalkulator.",
  "Ez a teljesítmény PMR446-on nem legális. A sávon":
    "Ta moc jest nielegalna na PMR446. Na tym paśmie",
  "maximum 0,5 watt engedélyezett, gyári antennával. A számot kiszámoltuk, de egy":
    "dozwolone jest maksymalnie 0,5 W, z fabryczną anteną. Liczbę policzyliśmy, ale",
  "erősebb adóval a saját frekvenciádon te zavarod meg azokat, akikkel beszélni akarsz.":
    "mocniejszym nadajnikiem na własnej częstotliwości zakłócasz tych, z którymi chcesz rozmawiać.",
  "Ez a sáv engedélyköteles.":
    "To pasmo wymaga licencji.",
  "használatához":
    "do korzystania z niego",
  "vizsga és hívójel kell. A vizsga előre megszerezhető — és pont ez a lényeg:":
    "potrzebny jest egzamin i znak wywoławczy. Egzamin można zdać wcześniej — i właśnie o to chodzi:",
  "egy vészhelyzetben már késő elkezdeni.":
    "w sytuacji kryzysowej jest już za późno, żeby zaczynać.",
  "kilométerre ezen a sávon a teljesítmény":
    "km na tym paśmie moc",
  "nem elég — bármennyi. A rálátásod":
    "nie wystarczy — żadna. Twoja widoczność to",
  "kilométer, és a Föld görbülete":
    "km, a za krzywiznę Ziemi",
  "mögé a VHF/UHF jel nem hajlik be. Amin múlik: magasság (menj fel egy dombra vagy":
    "sygnał VHF/UHF się nie ugina. Od czego zależy: wysokość (wejdź na wzgórze albo",
  "tedd fel az antennát), átjátszó , vagy alacsonyabb sáv (CB vagy rövidhullám).":
    "podnieś antenę), przemiennik , albo niższe pasmo (CB lub fale krótkie).",
  "kilométerhez kb.":
    "km potrzeba ok.",
  "watt kellene ezen a sávon és ezen a terepen":
    "W na tym paśmie i w tym terenie",
  "— ami már nem kézirádió-kategória, és rendszerint olcsóbb feljebb vinni az antennát.":
    "— a to już nie kategoria radia ręcznego, i zwykle taniej jest podnieść antenę.",
  "Ennyire várható összeköttetés":
    "Spodziewany zasięg łączności",
  "méter antennamagassággal.":
    "m wysokości anteny.",
  "Amin most múlik:":
    "Od czego teraz zależy:",
  "Rövidhullámon a talajhullámmal számoltunk.":
    "Na falach krótkich liczyliśmy z falą przyziemną.",
  "A rálátásod":
    "Twoja widoczność",
  "km, a terep és a teljesítmény":
    "km, teren i moc pozwalają na",
  "km-t enged — a kettő közül a kisebbik számít.":
    "km — liczy się mniejsza z tych dwóch wartości.",
  "A watt a leggyengébb eszközöd. A távolság a teljesítmény negyedik":
    "Waty to twoje najsłabsze narzędzie. Zasięg rośnie z czwartym",
  "gyökével nő: négyszer annyi watt másfélszer nagyobb távolság. Egy méterrel feljebb tett":
    "pierwiastkiem mocy: cztery razy więcej watów to półtora raza większy zasięg. Antena podniesiona o metr",
  "antenna rendszerint többet ad, mint a teljesítmény megduplázása — és nem fogyaszt.":
    "zwykle daje więcej niż podwojenie mocy — i nie zużywa energii.",
  "Rövidhullámon ez a szám csak a talajhullám. A 7 és a 3,6":
    "Na falach krótkich ta liczba to tylko fala przyziemna. Prawdziwy zasięg pasm 7 i 3,6",
  "megahertzes sáv igazi hatótávját az ionoszféra adja: napszaktól és napfolt-tevékenységtől":
    "MHz daje jonosfera: zależnie od pory dnia i aktywności słonecznej",
  "függően 100-tól több ezer kilométerig. Azt ez a kalkulátor nem modellezi — arra":
    "od 100 do kilku tysięcy kilometrów. Ten kalkulator tego nie modeluje — do tego",
  "terjedési előrejelzés kell.":
    "potrzebna jest prognoza propagacji.",
  "Tölts ki minden mezőt.":
    "Wypełnij wszystkie pola.",
  "kg fa, ez körülbelül":
    "kg drewna, to około",
  "ömlesztett köbméter":
    "metrów sześciennych luzem",
  "Légszáraz keményfával és 70 százalékos kályha-hatásfokkal számolva. Nedves fa ennek a felét adja, tehát kétszer annyi kell belőle.":
    "Przy suchym drewnie liściastym i 70-procentowej sprawności pieca. Mokre drewno daje połowę tego, więc potrzeba go dwa razy więcej.",
  "kg gáz, ez":
    "kg gazu, to",
  "darab 11,5 kilós palack":
    "butli 11,5 kg",
  "PB-gázt zárt térben égetni életveszélyes lehet. Szén-monoxid keletkezik, ami szagtalan, és álmodban öl meg. Kell mellé szén-monoxid-érzékelő, és kell folyamatos szellőzés — nem elég percenként kinyitni az ablakot.":
    "Spalanie gazu LPG w zamkniętym pomieszczeniu może zagrażać życiu. Powstaje tlenek węgla, który jest bezwonny i zabija we śnie. Potrzebny jest czujnik tlenku węgla i stała wentylacja — nie wystarczy co jakiś czas otworzyć okno.",
  "Párát is termel: minden elégetett kiló gázból másfél liter víz kerül a levegőbe. Ettől penészedik a fal, és hidegebbnek érzed a szobát.":
    "Wytwarza też parę: z każdego spalonego kilograma gazu do powietrza trafia półtora litra wody. Od tego pleśnieją ściany, a pokój wydaje się zimniejszy.",
  "Palackot soha ne tarts a lakótérben tartalékként, és ne a fűtés mellett.":
    "Nigdy nie trzymaj butli zapasowej w pomieszczeniu mieszkalnym ani obok ogrzewania.",
  "Tölts ki mindkét mezőt.":
    "Wypełnij oba pola.",
  "négyzetméter tetőről":
    "m² dachu przy",
  "milliméter esőből, húsz százalék veszteséggel számolva.":
    "mm deszczu, licząc dwadzieścia procent strat.",
  "A tető vízszintes vetülete számít, nem a ferde felület: felülről nézve mekkora.":
    "Liczy się poziomy rzut dachu, nie skośna powierzchnia: jak duży jest, patrząc z góry.",
  "Ivásra és főzésre, három liter fejenként naponta:":
    "Do picia i gotowania, trzy litry na osobę dziennie:",
  "Az első lefolyó vizet engedd el. Az mossa le a tetőről a port, a madárürüléket és a leveleket. Nagyjából az első fél milliméter esőnek megfelelő mennyiség.":
    "Pierwszą spływającą wodę wylej. Spłukuje ona z dachu kurz, ptasie odchody i liście. Mniej więcej tyle, ile odpowiada pierwszemu pół milimetrowi deszczu.",
  "A tető anyaga számít. Bitumenzsindelyről, ólomtartalmú festésről vagy azbesztpalán át gyűjtött vizet ne igyál. Mosásra, öblítésre az is jó.":
    "Materiał dachu ma znaczenie. Nie pij wody zebranej z gontu bitumicznego, z farby zawierającej ołów ani z eternitu (azbestu). Do prania i płukania się nada.",
  "Az összegyűjtött víz nem ivóvíz. A Víztisztítás rész fent megmondja, mennyi forralás vagy hipó kell hozzá.":
    "Zebrana woda nie jest wodą pitną. Sekcja Uzdatnianie wody powyżej mówi, ile gotowania lub podchlorynu potrzeba.",
  "Dörgés":
    "Grzmot",
  "Most várd meg a dörgést, és nyomd meg újra.":
    "Teraz poczekaj na grzmot i naciśnij ponownie.",
  "Ez a fejed fölött van. Azonnal menj be épületbe vagy autóba. Fa alá soha.":
    "To jest nad tobą. Natychmiast wejdź do budynku albo samochodu. Nigdy pod drzewo.",
  "Tíz kilométeren belül van, tehát veszélyes. A következő villám már téged is elérhet: menj fedezékbe, és maradj is ott.":
    "Jest w promieniu dziesięciu kilometrów, więc jest niebezpiecznie. Następny piorun może trafić już ciebie: schowaj się i zostań w ukryciu.",
  "Egyelőre távol van, de figyeld: ha az idő rövidül, közeledik.":
    "Na razie jest daleko, ale obserwuj: jeśli czas się skraca, burza się zbliża.",
  "másodperc telt el. A hang három másodperc alatt tesz meg egy kilométert.":
    "s minęło. Dźwięk pokonuje kilometr w trzy sekundy.",
  "Harminc-harminc szabály: ha a dörgés harminc másodpercen belül megjön, menj fedezékbe, és az utolsó dörgés után még harminc percig maradj bent. A vihar utolsó villámai a legalattomosabbak, mert akkor már mindenki előjön.":
    "Zasada trzydzieści-trzydzieści: jeśli grzmot przyjdzie w ciągu trzydziestu sekund, schowaj się i zostań w środku jeszcze trzydzieści minut po ostatnim grzmocie. Ostatnie pioruny burzy są najbardziej zdradliwe, bo wtedy wszyscy już wychodzą.",
  "Add meg a távolságot.":
    "Podaj odległość.",
  "tartalékkal.":
    "zapasu.",
  ": ebből":
    ": z tego",
  "már sötétben lenne. Vagy indulj hamarabb, vagy vigyél lámpát.":
    "byłoby już po ciemku. Albo wyjdź wcześniej, albo weź latarkę.",
  "kilométer":
    "km",
  "méter emelkedés.":
    "m podejścia.",
  "Az emelkedés minden hatszáz métere egy órát ad hozzá. Most indulva":
    "Każde sześćset metrów podejścia dodaje godzinę. Wychodząc teraz, dotarłbyś o",
  "-kor érnél oda.":
    ".",
  "Pihenő nincs benne. Hosszabb úton számolj óránként tíz perccel, és étkezéssel.":
    "Odpoczynek nie jest wliczony. Na dłuższej trasie licz dziesięć minut na godzinę, plus posiłki.",
  "Mérés…":
    "Pomiar…",
  "nyomás.":
    "uciśnięć.",
  "Forralás (ez a legbiztosabb)":
    "Gotowanie (najpewniejsze)",
  "Buzgó forrás":
    "Intensywne wrzenie",
  "— kétezer méter felett vagy, ott hosszabb kell, mert alacsonyabb a forráspont.":
    "— jesteś powyżej dwóch tysięcy metrów, tam trzeba dłużej, bo temperatura wrzenia jest niższa.",
  "Hagyd kihűlni fedő alatt.":
    "Pozostaw do ostygnięcia pod przykryciem.",
  "Ha nem tudsz forralni: hipó":
    "Jeśli nie możesz zagotować: podchloryn",
  "vízhez":
    "wody:",
  "százalékos hipó, ami körülbelül":
    "-procentowego podchlorynu, czyli około",
  "Keverd el, várj":
    "Wymieszaj, odczekaj",
  "percet, és utána is enyhén klóros szagúnak kell lennie.":
    "min, a potem woda powinna nadal lekko pachnieć chlorem.",
  "Ha nem érzed a szagot, adj hozzá ugyanennyit, és várj még":
    "Jeśli nie czujesz zapachu, dodaj tyle samo i odczekaj jeszcze",
  "Zavaros vizet előbb tisztítsd le. Hagyd ülepedni, majd szűrd át ruhán vagy kávéfilteren. A hipó a lebegő szennyeződésre pazarlódik el, és nem jut a kórokozókra.":
    "Mętną wodę najpierw oczyść. Pozwól jej się odstać, potem przecedź przez materiał albo filtr do kawy. Podchloryn marnuje się na zawiesinę i nie dociera do zarazków.",
  "Illatosított, sűrített vagy tisztítószeres hipót ne használj. Csak sima nátrium-hipoklorit oldat való bele.":
    "Nie używaj zapachowego, zagęszczonego ani zmieszanego ze środkami czyszczącymi podchlorynu. Nadaje się tylko zwykły roztwór podchlorynu sodu.",
  "Amit ez nem old meg: vegyszer, olaj, növényvédőszer, nehézfém, sóstalanítás. Ezeket sem a forralás, sem a hipó nem távolítja el, a forralás inkább töményíti őket. Ipari terület, út menti árok vagy szántóföld melletti vízzel ne is próbálkozz.":
    "Czego to nie rozwiąże: chemikalia, olej, środki ochrony roślin, metale ciężkie, odsalanie. Tego nie usunie ani gotowanie, ani podchloryn, gotowanie raczej je zagęszcza. Z wodą z terenu przemysłowego, przydrożnego rowu czy obok pola uprawnego nawet nie próbuj.",
  "A hipó nem öl meg mindent. A Cryptosporidium ellenáll neki. Ha ilyet gyanítasz (állati ürülékkel érintkezett felszíni víz), forralj, vagy használj arra való szűrőt.":
    "Podchloryn nie zabija wszystkiego. Cryptosporidium jest na niego odporny. Jeśli tego podejrzewasz (woda powierzchniowa mająca kontakt z odchodami zwierząt), gotuj albo użyj odpowiedniego filtra.",
  "csempe van eltárolva ezen a készüléken.":
    "kafelków zapisanych na tym urządzeniu.",
  "Ez a kivágás túl nagy:":
    "Ten wycinek jest za duży:",
  "csempe lenne. Nagyíts rá jobban, és úgy töltsd le.":
    "kafelków. Powiększ bardziej i wtedy pobierz.",
  "csempe letöltése (kb.":
    "kafelków do pobrania (ok.",
  "nagyításon. Folytatod?":
    "przy powiększeniu. Kontynuować?",
  "Letöltés…":
    "Pobieranie…",
  "Letöltés:":
    "Pobieranie:",
  "Kész:":
    "Gotowe:",
  "nem jött le)":
    "nie pobrano)",
  ". Összesen":
    ". Łącznie",
  "csempe van eltárolva.":
    "kafelków zapisanych.",
  "Kilépés a teljes képernyőből":
    "Wyjdź z pełnego ekranu",
  "Várj, amíg a térkép betölt.":
    "Poczekaj, aż mapa się wczyta.",
  "Nincs eltárolt csempe.":
    "Brak zapisanych kafelków.",
  "Törlöd a letöltött térkép-területeket?":
    "Usunąć pobrane obszary mapy?",
  "Törölve. A térkép ezután csak online töltődik.":
    "Usunięto. Mapa będzie się teraz ładować tylko online.",
  "A mikrofon nem indult el:":
    "Mikrofon się nie uruchomił:",
  "Vétel leállítása":
    "Zatrzymaj odbiór",
  "Vétel fut. Tartsd a hangforráshoz.":
    "Odbiór trwa. Trzymaj przy źródle dźwięku.",
  "sor vétel alatt…":
    "wierszy w trakcie odbioru…",
  "Vétel fut, még nincs jel.":
    "Odbiór trwa, na razie brak sygnału.",
  "Vétel leállítva.":
    "Odbiór zatrzymany.",
  "Dekódolás…":
    "Dekodowanie…",
  "sor dekódolva.":
    "wierszy zdekodowano.",
  "Nem találtam SSTV-jelet ebben a felvételben.":
    "Nie znalazłem sygnału SSTV w tym nagraniu.",
  "Nem sikerült a kép betöltése.":
    "Nie udało się wczytać obrazu.",
  "Kódolás…":
    "Kodowanie…",
  "Küldés…":
    "Wysyłanie…",
  "mp) — tartsd a vevő mikrofonjához":
    "s) — trzymaj przy mikrofonie odbiornika",
  "Kész.":
    "Gotowe.",
  "Leállítva.":
    "Zatrzymano.",
  "WAV készítése…":
    "Tworzenie WAV…",
  "WAV letöltve:":
    "WAV pobrany:",
  "Üzenet csak neki:":
    "Wiadomość tylko do tej osoby:",
  "kilépett, innentől mindenkinek írsz.":
    "wyszedł, od teraz piszesz do wszystkich.",
  "Zárt üzenet. Ehhez a szoba kulcsa kell.":
    "Wiadomość zaszyfrowana. Potrzebny jest do niej klucz pokoju.",
  "csak neki":
    "tylko do tej osoby",
  "csak neked":
    "tylko do ciebie",
  "csak neki:":
    "tylko do tej osoby:",
  "Az internetes szobákhoz egyszer be kell lépned.":
    "Do pokojów internetowych musisz się raz zalogować.",
  "Nem vagy bejelentkezve. Töltsd újra a lapot, és add meg a jelszót.":
    "Nie jesteś zalogowany. Odśwież stronę i podaj hasło.",
  "Jelszó megjelenítése":
    "Pokaż hasło",
  "Belépés jelszóval":
    "Zaloguj się hasłem",
  "Az e-mail címed és a jelszavad. A telefon megjegyzi, többször nem kell.":
    "Twój adres e-mail i hasło. Telefon je zapamięta, nie trzeba będzie ponownie.",
  "Belépés e-mailes kóddal (jelszó nélkül)":
    "Zaloguj się kodem z e-maila (bez hasła)",
  "Új fiók":
    "Nowe konto",
  "Új jelszó beállítása":
    "Ustaw nowe hasło",
  "Add meg az e-mail címed, és válassz jelszót (legalább 8 karakter), kétszer. Utána küldünk egy 6 jegyű kódot e-mailben.":
    "Podaj swój adres e-mail i wybierz hasło (co najmniej 8 znaków), dwa razy. Potem wyślemy ci 6-cyfrowy kod e-mailem.",
  "Jelszó (legalább 8 karakter)":
    "Hasło (co najmniej 8 znaków)",
  "Jelszó még egyszer":
    "Powtórz hasło",
  "Vissza a belépéshez":
    "Wróć do logowania",
  "Írd be a kódot":
    "Wpisz kod",
  "Küldtünk egy 6 jegyű kódot ide:":
    "Wysłaliśmy 6-cyfrowy kod na adres:",
  "Nézd meg a levelezőben (a Spam mappát is), és írd be. 10 percig érvényes.":
    "Sprawdź skrzynkę (także folder Spam) i wpisz go. Jest ważny 10 minut.",
  "6 jegyű kód":
    "6-cyfrowy kod",
  "Megerősítés":
    "Potwierdź",
  "Elölről":
    "Od nowa",
  "Bejelentkeztél. A telefon megjegyzi.":
    "Zalogowano. Telefon to zapamięta.",
  "Ellenőrzés folyamatban…":
    "Sprawdzanie…",
  "Belépés folyamatban…":
    "Logowanie…",
  "Küldés folyamatban, pár másodperc…":
    "Wysyłanie, kilka sekund…",
  "Add meg az e-mail címed és a jelszavad.":
    "Podaj swój adres e-mail i hasło.",
  "Hibás e-mail cím vagy jelszó.":
    "Nieprawidłowy adres e-mail lub hasło.",
  "Ha elfelejtetted, nyomd meg az „Elfelejtettem a jelszót\" gombot.":
    "Jeśli zapomniałeś, naciśnij przycisk „Nie pamiętam hasła”.",
  "A jelszó legalább 8 karakter legyen.":
    "Hasło musi mieć co najmniej 8 znaków.",
  "A két jelszó nem egyezik. Írd be újra mindkettőt.":
    "Hasła się nie zgadzają. Wpisz oba ponownie.",
  "A kód 6 számjegy.":
    "Kod ma 6 cyfr.",
  "Hibás kód.":
    "Nieprawidłowy kod.",
  "Nem vagy bejelentkezve.":
    "Nie jesteś zalogowany.",
  "Kiléptél.":
    "Wylogowano.",
  "nincs kapcsolat":
    "brak połączenia",
  "Bekapcsolva. Ha valaki ír ide, jelez a telefonod, akkor is, ha az app be van zárva.":
    "Włączone. Gdy ktoś tu napisze, telefon da znać, nawet jeśli aplikacja jest zamknięta.",
  "Ha valaki ír ide, jelezzen a telefonod.":
    "Gdy ktoś tu napisze, niech telefon da znać.",
  "Ez a böngésző nem tud értesítést fogadni. Telefonon tedd ki az appot a főképernyőre.":
    "Ta przeglądarka nie może odbierać powiadomień. Na telefonie dodaj aplikację do ekranu głównego.",
  "Bekapcsolva. Ha valaki ír ide, jelez a telefonod.":
    "Włączone. Gdy ktoś tu napisze, telefon da znać.",
  "Nem adtál engedélyt az értesítéshez. A telefon beállításainál, az alkalmazásnál adhatod meg.":
    "Nie zezwoliłeś na powiadomienia. Możesz to zmienić w ustawieniach telefonu, przy aplikacji.",
  "Bekapcsolva. Küldök egy próbát.":
    "Włączone. Wysyłam próbne.",
  "Nem adtál engedélyt. A telefon beállításainál később visszaadhatod.":
    "Nie zezwoliłeś. Możesz to później zmienić w ustawieniach telefonu.",
  "a szerver nem adott kulcsot":
    "serwer nie przekazał klucza",
  "a szerver nem fogadta el a feliratkozást":
    "serwer nie przyjął subskrypcji",
  "Bekapcsolva. Küldök egy próbát, hogy lásd, tényleg megérkezik.":
    "Włączone. Wysyłam próbne, żebyś zobaczył, że naprawdę dociera.",
  "A próbát a szerver elküldte a Google-nek. Pár másodpercen belül meg kell jelennie a telefon értesítései között, akkor is, ha bezárod az appot.":
    "Serwer wysłał próbne powiadomienie do Google. W ciągu kilku sekund powinno pojawić się w powiadomieniach telefonu, nawet jeśli zamkniesz aplikację.",
  "Próba: így jelez majd, ha valaki ír ide.":
    "Próba: tak telefon da znać, gdy ktoś tu napisze.",
  "Kiküldtem a próbát, nézd meg a telefon értesítései között.":
    "Wysłałem próbne, sprawdź powiadomienia telefonu.",
  "Nincs engedély az értesítéshez.":
    "Brak zgody na powiadomienia.",
  "Ezen az eszközön nincs bekapcsolva az értesítés.":
    "Na tym urządzeniu powiadomienia nie są włączone.",
  "A próba nem ment ki.":
    "Próbne powiadomienie nie zostało wysłane.",
  "A próbaértesítést a szolgáltató átvette. Ha pár másodpercen belül nem":
    "Dostawca przyjął próbne powiadomienie. Jeśli w ciągu kilku sekund nie",
  "jelenik meg a telefonodon, akkor a telefon beállításánál akad el, nem az appban.":
    "pojawi się na telefonie, problem jest w ustawieniach telefonu, nie w aplikacji.",
  "Nyiss egyet: internet és térerő nélkül, egy hálón":
    "Otwórz jeden: bez internetu i zasięgu, w jednej sieci",
  "Minden nyelv":
    "Wszystkie języki",
  "Erre a keresésre nincs nyitott szoba.":
    "Brak otwartych pokoi dla tego wyszukiwania.",
  "Ezen a nyelven most nincs nyitott szoba. Állítsd vissza Minden nyelvre.":
    "W tym języku nie ma teraz otwartego pokoju. Przełącz z powrotem na Wszystkie języki.",
  "indította":
    "(założyciel)",
  "nem vagy tag — koppints a jelentkezéshez":
    "nie jesteś członkiem — dotknij, aby poprosić o dołączenie",
  "tag olvasta el":
    "członków przeczytało",
  "Elküldve":
    "Wysłano",
  "Még senki nem olvasta el":
    "Nikt jeszcze nie przeczytał",
  "Módosítás: írd át, és küldd el. A mező kiürítésével elveted.":
    "Edycja: popraw i wyślij. Wyczyszczenie pola anuluje zmianę.",
  "Módosítva:":
    "Edytowano:",
  "Törlöd ezt az üzenetet? Mindenkinél eltűnik a tartalma, és azoknál is, akik elmentették.":
    "Usunąć tę wiadomość? Jej treść zniknie u wszystkich, także u tych, którzy ją zapisali.",
  "Törölt üzenet":
    "Usunięta wiadomość",
  "(zárt üzenet — kérj új meghívó linket a szoba gazdájától)":
    "(wiadomość zaszyfrowana — poproś właściciela pokoju o nowy link z zaproszeniem)",
  "(zárt üzenet — ez a kulcs nem ehhez a szobához való)":
    "(wiadomość zaszyfrowana — ten klucz nie pasuje do tego pokoju)",
  "(zárt üzenet — nincs meg a kulcs)":
    "(wiadomość zaszyfrowana — brak klucza)",
  "Rendszerüzenet":
    "Wiadomość systemowa",
  "Állandó jel — a névtől és a képtől független":
    "Stały znak — niezależny od imienia i zdjęcia",
  "Ehhez a szobához most készült titkosító kulcs. Küldj ÚJ meghívó linket a tagoknak, hogy olvasni tudják az üzeneteidet.":
    "Dla tego pokoju utworzono właśnie klucz szyfrujący. Wyślij członkom NOWY link z zaproszeniem, żeby mogli czytać twoje wiadomości.",
  "Kapcsolódva.":
    "Połączono.",
  "Megszakadt a kapcsolat, újrapróbálom...":
    "Połączenie przerwane, próbuję ponownie...",
  "belépési kérelmet küldött — a fogaskerék mögött döntesz róla.":
    "wysłał(a) prośbę o dołączenie — decydujesz o niej pod kołem zębatym.",
  "új üzenetet írt.":
    "napisał(a) nową wiadomość.",
  "Kész. A szobák listáján már ez látszik. (":
    "Gotowe. Na liście pokoi widać już to. (",
  "Adj nevet a szobának.":
    "Nazwij pokój.",
  "Kész, a szoba létrejött. Itt a kódja, és itt tudsz képet feltölteni vagy meghívót küldeni. Ugyanezt később a fogaskerék alatt éred el.":
    "Gotowe, pokój został utworzony. Tu jest jego kod, tu możesz wgrać zdjęcie albo wysłać zaproszenie. To samo znajdziesz później pod kołem zębatym.",
  "Írd be a szoba kódját.":
    "Wpisz kod pokoju.",
  "Kérelem elküldve. Amíg a gazda jóvá nem hagyja, nem látod az üzeneteket.":
    "Prośba wysłana. Dopóki właściciel jej nie zatwierdzi, nie widzisz wiadomości.",
  "Már tag vagy ebben a szobában.":
    "Jesteś już członkiem tego pokoju.",
  "Nincs ilyen kódú szoba.":
    "Nie ma pokoju o takim kodzie.",
  "Illeszd be a meghívó linket.":
    "Wklej link z zaproszeniem.",
  "Ebben nincs meghívó. Másold be a teljes linket.":
    "Tu nie ma zaproszenia. Skopiuj cały link.",
  "Beváltom...":
    "Realizuję...",
  "Kész. A csempén már ez látszik. (":
    "Gotowe. Na kafelku widać już to. (",
  "Erről a szobáról nem jelez.":
    "Ten pokój nie wysyła powiadomień.",
  "Küldöm...":
    "Wysyłam...",
  "A szoba kódja a vágólapon.":
    "Kod pokoju jest w schowku.",
  "Nem sikerült a vágólapra tenni. Jelöld ki és másold ki kézzel.":
    "Nie udało się skopiować do schowka. Zaznacz i skopiuj ręcznie.",
  "Biztosan törlöd? A szoba MINDENKINEK megszűnik, az üzenetekkel együtt. Ez nem vonható vissza.":
    "Na pewno usunąć? Pokój zniknie DLA WSZYSTKICH, razem z wiadomościami. Tego nie można cofnąć.",
  "Biztosan kilépsz? A szoba a többieknek megmarad, te nem látod tovább.":
    "Na pewno wyjść? Pokój zostaje dla innych, ty go już nie zobaczysz.",
  "A szoba megszűnt.":
    "Pokój został usunięty.",
  "Kiléptél a szobából.":
    "Wyszedłeś z pokoju.",
  "Nem fért el a tárolóban. Próbálj kisebb képet.":
    "Nie zmieściło się w pamięci. Spróbuj mniejszego zdjęcia.",
  "Mentve. Igazíthatod a kivágást, majd nyomd meg a Kész gombot.":
    "Zapisano. Możesz dopasować kadr, a potem naciśnij Gotowe.",
  "Mentve. Minden szobában ezen a néven látnak.":
    "Zapisano. We wszystkich pokojach widzą cię pod tym imieniem.",
  "Ezt a nevet ebben a szobában már használja valaki. Adj meg másikat.":
    "Tego imienia ktoś już używa w tym pokoju. Podaj inne.",
  "Ez a név szabad ebben a szobában.":
    "To imię jest wolne w tym pokoju.",
  "Ezt a nevet már használja valaki ebben a szobában.":
    "Tego imienia ktoś już używa w tym pokoju.",
  "Egy embert enged be, és 7 nap múlva lejár.":
    "Wpuszcza jedną osobę i wygasa po 7 dniach.",
  "PrepperPapa meghívó":
    "Zaproszenie PrepperPapa",
  "Meghívlak a(z) „":
    "Zapraszam cię do pokoju „",
  "\" szobába:":
    "\":",
  "A linket a böngésző CÍMSORÁBA illeszd be, ne a keresőbe.":
    "Wklej link w PASEK ADRESU przeglądarki, nie w wyszukiwarkę.",
  "A vágólapra másolva. Egy embert enged be, és 7 nap múlva lejár.":
    "Skopiowano do schowka. Wpuszcza jedną osobę i wygasa po 7 dniach.",
  "Kép csatolva — koppints az elvetéshez":
    "Zdjęcie załączone — dotknij, aby odrzucić",
  "A csatolt képet elvetettem.":
    "Załączone zdjęcie odrzucone.",
  "Kép csatolva. A Küldéssel megy el.":
    "Zdjęcie załączone. Zostanie wysłane po naciśnięciu Wyślij.",
  "A módosítás elvetve.":
    "Edycja anulowana.",
  "Módosítva.":
    "Edytowano.",
  "Lejárt a módosítási idő (15 perc).":
    "Minął czas na edycję (15 minut).",
  "A módosítás nem sikerült.":
    "Edycja się nie udała.",
  "Az üzenet nem ment el.":
    "Wiadomość nie została wysłana.",
  "Ez a meghívó lejárt. Kérj újat attól, aki küldte.":
    "To zaproszenie wygasło. Poproś o nowe osobę, która je wysłała.",
  "Ezt a meghívót már felhasználták. Kérj újat attól, aki küldte.":
    "To zaproszenie zostało już wykorzystane. Poproś o nowe osobę, która je wysłała.",
  "Ismeretlen meghívó. Lehet, hogy hiányzik a link vége.":
    "Nieznane zaproszenie. Możliwe, że brakuje końcówki linku.",
  "A meghívót most nem sikerült beváltani. Van interneted?":
    "Nie udało się teraz zrealizować zaproszenia. Masz internet?",
  "Küldés: kiválasztasz egy képet, és a telefon hangként játssza le.":
    "Wysyłanie: wybierasz zdjęcie, a telefon odtwarza je jako dźwięk.",
  "Vétel: a telefon hallgatja a hangot, és soronként rajzolja ki a képet.":
    "Odbiór: telefon nasłuchuje dźwięku i rysuje obraz wiersz po wierszu.",
  "Kép választása: a telefon magától átméretezi a 320x256-os keretre.":
    "Wybór zdjęcia: telefon sam dopasuje je do ramki 320x256.",
  "Lejátszás: ugyanaz a gomb indít és állít. A WAV a hangot fájlba menti, ha máshogy akarod átvinni.":
    "Odtwarzanie: ten sam przycisk uruchamia i zatrzymuje. WAV zapisuje dźwięk do pliku, jeśli chcesz go przenieść inaczej.",
  "Vétel indítása: ugyanaz a gomb indít és állít. Tartsd a telefont a hangszóró közelébe.":
    "Start odbioru: ten sam przycisk uruchamia i zatrzymuje. Trzymaj telefon blisko głośnika.",
  "Hangfájlból is megy, ha valaki felvételt küld.":
    "Działa też z pliku dźwiękowego, jeśli ktoś przyśle nagranie.",
  "A kész képet elmentheted, vagy törölheted és új vételbe kezdhetsz.":
    "Gotowy obraz możesz zapisać albo usunąć i zacząć nowy odbiór.",
  "Forralás":
    "Gotowanie",
  "A Szoba zárt csoport, ami interneten át is elérhető: aki messze van, az is beszélget.":
    "Pokój to zamknięta grupa, dostępna też przez internet: rozmawiać może również ktoś, kto jest daleko.",
  "A gemkapoccsal képet csatolsz, a háromszög jellel sürgősnek jelölöd — az pirossal emeli ki mindenkinél.":
    "Spinaczem załączasz zdjęcie, znakiem trójkąta oznaczasz wiadomość jako pilną — u wszystkich wyróżni się na czerwono.",
  "Egy üzenetet hosszan nyomva tudsz rá emojival válaszolni, elmenteni, a sajátodat módosítani vagy törölni.":
    "Przytrzymując wiadomość, możesz odpowiedzieć emoji, zapisać ją, a swoją edytować lub usunąć.",
  "A fejlécben a fogaskerék nyitja a szoba beállításait: értesítés, tagok, belépési kérelmek, a szoba kódja.":
    "Koło zębate w nagłówku otwiera ustawienia pokoju: powiadomienia, członkowie, prośby o dołączenie, kod pokoju.",
  "Az üzenetek szövege és képei végponttól végpontig titkosítva mennek: a szerver ezeket nem tudja elolvasni. A neveket, a profilképeket, a szoba képét, a reakciókat és az időpontokat viszont látja.":
    "Tekst i zdjęcia wiadomości są szyfrowane end-to-end: serwer nie może ich odczytać. Widzi jednak imiona, zdjęcia profilowe, obraz pokoju, reakcje i godziny.",
  "Kezdőlap":
    "Strona startowa",
  "Előbb add meg a neved — így látnak a többiek a szobákban.":
    "Najpierw podaj swoje imię — tak widzą cię inni w pokojach.",
  "Tegyél fel egy profilképet — a neved mellett jelenik meg.":
    "Dodaj zdjęcie profilowe — pojawi się obok twojego imienia.",
  "(meg nem volt nyitva a szoba kepernyo)":
    "(ekran pokoju nie był jeszcze otwarty)",
  "Frissítés keresése…":
    "Szukam aktualizacji…",
  "Főoldal":
    "Strona główna",
  "Lámpa, vészfény":
    "Latarka, światło awaryjne",
  "Vészjelzés fény/hang":
    "Sygnał alarmowy światłem/dźwiękiem",
  "A menüsor — ez mindig elérhető alul":
    "Pasek menu — zawsze dostępny na dole",
  "Félkövér":
    "Pogrubienie",
  "Dőlt":
    "Kursywa",
  "Felsorolás":
    "Wypunktowanie",
  "Szerkesztés":
    "Edytuj",
  "Most jöhet két befúvás, ha vállalod. Ha nem, folytasd a nyomásokat szünet nélkül.":
    "Teraz dwa oddechy ratownicze, jeśli się na to decydujesz. Jeśli nie, uciskaj dalej bez przerwy.",
  // ===== MENTETT uZENETEK a Profilon (2026-10-06) =====
  "Mentett üzenetek":
    "Zapisane wiadomości",
  "Amit egy szobában hosszan nyomva elmentettél. A mentés hivatkozás, nem másolat: ha a szerzője törli az üzenetet, innen is eltűnik.":
    "To, co zapisałeś długim naciśnięciem w pokoju. Zapis to odnośnik, nie kopia: jeśli autor usunie wiadomość, zniknie też stąd.",
  // ===== FAX (SSTV): csak Martin M1 (Fonok dontese, 2026-10-06 21:00) =====
  "Martin M1 mód: 320×256 képpont, egy kép ~114 másodperc. Ez az idő magából az SSTV-ből jön — a kép soronként épül fel hangból, és nem gyorsítható.":
    "Tryb Martin M1: 320×256 pikseli, jeden obraz to ok. 114 sekund. Ten czas wynika z samego SSTV — obraz powstaje linia po linii z dźwięku i nie da się go przyspieszyć.",
  "Küldéshez: a másik eszközön indíts SSTV-vevőt (a mi Fax-vevőnket, vagy pl. Robot36, MMSSTV) Martin M1 módban, és tartsd a hangszórót a mikrofonjához. A VIS-fejléc automatikus, a vevő magától felismeri a módot. Egy kép ~114 másodperc, és ez alatt a hangnak folyamatosnak kell lennie.":
    "Aby wysłać: na drugim urządzeniu uruchom odbiornik SSTV (nasz odbiornik Faks lub np. Robot36, MMSSTV) w trybie Martin M1 i przyłóż głośnik do jego mikrofonu. Nagłówek VIS jest automatyczny, odbiornik sam rozpozna tryb. Jeden obraz to ok. 114 sekund i przez cały ten czas dźwięk musi być ciągły.",
  // ===== SZOBA: szabalyzat, belepesi kerelem, meghivo-bevaltas, profil (2026-10-06) =====
  // A SZABALYZAT JOGI SZOVEG: Istvan irta magyarul, a forditas Marveene -- ATNEZESRE VAR.
  "Szoba-szabályzat és adatkezelés":
    "Regulamin pokoju i przetwarzanie danych",
  "A Szoba zárt, meghívásos közösségi tér.":
    "Pokój to zamknięta przestrzeń społeczności, dostępna na zaproszenie.",
  "Nem osztok meg jogsértő tartalmat, más személyes adatát, zaklató üzenetet vagy kereskedelmi, reklám tartalmat.":
    "Nie udostępniam treści niezgodnych z prawem, danych osobowych innych osób, wiadomości nękających ani treści handlowych lub reklamowych.",
  "Tilos a fegyver, lőszer, robbanóanyag, kábítószer és bármilyen tiltott áru adásvétele, cseréje vagy közvetítése — ajánlat, kereslet és kapcsolatfelvétel formájában is.":
    "Zabroniony jest handel, wymiana lub pośrednictwo w zakresie broni, amunicji, materiałów wybuchowych, narkotyków i wszelkich zakazanych towarów — również w formie ofert, zapytań i nawiązywania kontaktu.",
  "Tilos fegyver, lőszer, robbanóanyag vagy más veszélyes eszköz készítéséhez, átalakításához útmutatót megosztani, és tilos bármilyen bűncselekményre felbujtani vagy azt megszervezni. A felkészülés, a készletezés, az elsősegély és a rádiózás mint téma ettől természetesen megmarad.":
    "Zabronione jest udostępnianie instrukcji wytwarzania lub przerabiania broni, amunicji, materiałów wybuchowych i innych niebezpiecznych urządzeń, a także podżeganie do przestępstwa lub jego organizowanie. Przygotowanie, zapasy, pierwsza pomoc i łączność radiowa pozostają oczywiście dozwolonymi tematami.",
  "Amit beírok, a szoba többi tagja látja, és el is mentheti — a titkosítás a szervertől védi az üzenetet, a tagoktól nem.":
    "To, co piszę, widzą pozostali członkowie i mogą to zapisać — szyfrowanie chroni wiadomość przed serwerem, a nie przed członkami.",
  "A szobát létrehozó gazda felel a szobában folytatott tartalomért: ő dönt a belépésről, ő távolíthat el tagot, és más üzenetét is csak ő törölheti.": "Gospodarz, który utworzył pokój, odpowiada za treści w nim publikowane: decyduje o dołączeniu, może usunąć członka, a wiadomości innych może skasować tylko on.",
  "Járművek": "Pojazdy",
  "Helyszínek": "Miejsca",
  "Telefonszám": "Numer telefonu",
  "Hajó": "Łódź",
  "A gazda bármikor eltávolíthat egy tagot, és bármikor törölheti a szobát — ez minden tag üzenetét visszavonhatatlanul megszünteti.":
    "Gospodarz może w każdej chwili usunąć członka i usunąć pokój — to nieodwracalnie kasuje wiadomości wszystkich członków.",
  "Ha kilépek vagy eltávolítanak, a szerver több üzenetet nem ad ki nekem — a készülékemen már meglévők viszont olvashatók maradnak.":
    "Jeśli wyjdę lub zostanę usunięty, serwer nie wyda mi więcej wiadomości — ale te już obecne na moim urządzeniu pozostają czytelne.",
  "A szobában megosztott hely- vagy készlet-adat érzékeny: a saját biztonságomért én felelek.":
    "Dane o lokalizacji lub zapasach udostępnione w pokoju są wrażliwe: za własne bezpieczeństwo odpowiadam ja.",
  "A szoba használata saját belátást és felelősséget kíván.":
    "Korzystanie z pokoju wymaga własnego rozsądku i odpowiedzialności.",
  "16 év alatti csak szülő vagy gondviselő hozzájárulásával csatlakozhat.":
    "Osoba poniżej 16 lat może dołączyć wyłącznie za zgodą rodzica lub opiekuna.",
  "A szerver tárolja: a szoba és a tagok nevét, a profilképet, az üzenetek TITKOSÍTOTT tartalmát, a képeket (max 500 kB), a reakciókat és az olvasási jelzéseket.":
    "Serwer przechowuje: nazwę pokoju i imiona członków, zdjęcie profilowe, ZASZYFROWANĄ treść wiadomości, obrazy (maks. 500 kB), reakcje i potwierdzenia odczytu.",
  "Ha meghívó linket kaptál, és az böngészőben nyílt meg, másold ide az egészet — innen az app váltja be.":
    "Jeśli dostałeś link z zaproszeniem i otworzył się w przeglądarce, wklej go tu w całości — aplikacja go zrealizuje.",
  "Meghívó beváltása":
    "Zrealizuj zaproszenie",
  "Eszköz-diagnosztika":
    "Diagnostyka urządzenia",
  "Értesítés erről a szobáról":
    "Powiadomienie o tym pokoju",
  "Ha valaki ír ide, jelezzen a telefonod — akkor is, ha az app be van zárva.":
    "Jeśli ktoś tu napisze, niech telefon cię powiadomi — nawet gdy aplikacja jest zamknięta.",
  "Ez a másik út, és szándékosan marad meg. A meghívó link csak ott működik, ahol át is tudod küldeni. A kódot viszont be lehet mondani telefonon vagy rádión, le lehet írni egy papírra, le lehet adni morzével — nyolc karakter, és kész.":
    "To druga droga i zostaje celowo. Link z zaproszeniem działa tylko tam, gdzie możesz go wysłać. Kod można natomiast podyktować przez telefon lub radio, zapisać na papierze, nadać alfabetem Morse’a — osiem znaków i gotowe.",
  "Aki a kódot ismeri, kérelmet küld; te döntöd el, beengeded-e. A jóváhagyással a te készüléked adja át neki a szoba kulcsát, a szerver nem látja.":
    "Kto zna kod, wysyła prośbę; ty decydujesz, czy go wpuścić. Przy zatwierdzeniu twoje urządzenie przekazuje mu klucz pokoju — serwer go nie widzi.",
  "Profil":
    "Profil",
  "Profilkép":
    "Zdjęcie profilowe",
  "A neved mellett jelenik meg. Nem kötelező.":
    "Pojawia się obok twojego imienia. Nieobowiązkowe.",
  "Húzd a képet a körben, a csúszkával nagyíts. Csak a körben látszó rész kerül mentésre.":
    "Przeciągnij obraz w kole, powiększ suwakiem. Zapisywana jest tylko część widoczna w kole.",
  // TELJES FORDITAS-KOR (Fonok, 2026-10-05 21:36: "az osszes forditas megtortenjen mindenhol")
  "Válaszd ki, mit szeretnél: adást vagy vételt.":
    "Wybierz, co chcesz: nadawanie czy odbiór.",
  "Morze kulcs":
    "Klucz telegraficzny",
  "Kopogás (rács-kód)":
    "Stukanie (kod stukany)",
  "72h csomag":
    "Zestaw na 72 h",
  "Export":
    "Eksport",
  "Egészségügyi adatok":
    "Dane zdrowotne",
  "Nem kötelező, de ebből jön a vészkártyád, és ebből számoljuk, mi kell a csomagba.":
    "Nie jest wymagane, ale z tego powstaje twoja karta ratunkowa i na tej podstawie liczymy, co ma być w zestawie.",
  "Lámpa-üzemidő":
    "Czas pracy latarki",
  "Meddig világít egy fejlámpa vagy zseblámpa":
    "Jak długo świeci czołówka lub latarka",
  "Lámpa-üzemidő: meddig világít":
    "Czas pracy latarki: jak długo świeci",
  "Lámpa vagy fejlámpa":
    "Latarka lub czołówka",
  "Üzemmód":
    "Tryb",
  "LED / fényerő-osztály":
    "LED / klasa jasności",
  "LED áramfelvétel (mA)":
    "Pobór prądu LED (mA)",
  "Elem / akku típusa":
    "Typ baterii lub akumulatora",
  "Kapacitás (mAh)":
    "Pojemność (mAh)",
  "Hány elem/akku (párhuzamosan összeadódó kapacitás)":
    "Ile ogniw (równolegle pojemność się sumuje)",
  "A gyártói adat a fényerő NÉVLEGES üzemideje — a valóságban a hideg, az elem életkora és a fokozatos elhalványulás ennél mindig kevesebbet ad. A saját megadásos számításnál a névleges kapacitásból 15 százalékot levonunk erre.":
    "Dane producenta to NOMINALNY czas pracy przy tej jasności; w rzeczywistości mróz, wiek baterii i stopniowe przygasanie zawsze dają mniej. W obliczeniu ręcznym odejmujemy na to 15 procent pojemności nominalnej.",
  "Ezt látják a többiek":
    "To widzą inni",
  "minden szobában":
    "we wszystkich pokojach",
  ". Egy nevet használ a rendszer; a szobába lépéskor ezt kérdezi meg, ha még nincs megadva.":
    ". System używa jednej nazwy; pyta o nią przy wejściu do pokoju, jeśli nie została jeszcze podana.",
  "Szalag ✕":
    "Taśma ✕",
  "Saját térképek":
    "Twoje własne mapy",
  // Igazitas finomhangolasa (Fonok kerese 2026-10-05 20:52)
  "Finomhangolás":
    "Dostrajanie",
  "Alaphelyzet":
    "Reset",
  "A saját térkép a helyén van.":
    "Twoja własna mapa jest na miejscu.",
  // UJ PONT felvevo a terkepen (Fonok kerese 2026-10-05 20:37)
  "Új pont":
    "Nowy punkt",
  "Menedék":
    "Schronienie",
  "Tűzrakó":
    "Miejsce na ogień",
  "Veszély":
    "Niebezpieczeństwo",
  "Találkozó":
    "Miejsce spotkania",
  "A pont neve":
    "Nazwa punktu",
  "Koppints a térképre újra, ha arrébb tennéd. A pont csak a Mentéssel jön létre.":
    "Dotknij mapy ponownie, aby go przesunąć. Punkt powstaje dopiero po zapisaniu.",
  // VAD- ES ROVAR-TAVOLTARTO (Fonok kerese 2026-10-05 20:16)
  "Vad- és rovar-távoltartó":
    "Odstraszacz zwierząt i owadów",
  "Vadak ellen":
    "Przeciw zwierzynie",
  "Szúnyogok ellen":
    "Przeciw komarom",
  "Vad-frekvencia":
    "Częstotliwość na zwierzynę",
  "Szúnyog-frekvencia":
    "Częstotliwość na komary",
  "Hz, lassan söprő hang. A legtöbb felnőtt ezt már nem hallja.":
    "Hz, powoli przesuwający się dźwięk. Większość dorosłych już go nie słyszy.",
  "Hz, folyamatos hang.":
    "Hz, dźwięk ciągły.",
  "AMIT EZ TUD ÉS AMIT NEM. A telefon hangszórója ilyen magas hangon lényegesen halkabb, mint a vészsípnál, és ezt a készüléked dönti el, nem az app. A szúnyogriasztó ultrahangnak nincs bizonyított hatása, több vizsgálat is eredménytelennek találta. Nagyobb vadnál a bizonyítottan működő eszköz a HANGOS, EMBERI FÜLNEK IS HALLHATÓ zaj, tehát az SOS lap vészsípja, nem ez. Ezt a két gombot akkor használd, ha ki akarod próbálni, és ne építs rá védelmet.":
    "CO TO POTRAFI, A CZEGO NIE. Przy tak wysokim dźwięku głośnik telefonu jest znacznie cichszy niż przy gwizdku ratunkowym, a decyduje o tym twoje urządzenie, nie aplikacja. Ultradźwięki na komary nie mają udowodnionego działania; kilka badań uznało je za nieskuteczne. Wobec większej zwierzyny środkiem o udowodnionym działaniu jest GŁOŚNY hałas, SŁYSZALNY TAKŻE DLA CZŁOWIEKA, czyli gwizdek na stronie SOS, a nie to. Używaj tych dwóch przycisków, jeśli chcesz je wypróbować, i nie opieraj na nich swojego bezpieczeństwa.",
  "Ne tartsd a füledhez, és ne irányítsd más fülére. Kutya, macska és más házi állat jóval magasabbra hall, mint az ember: nekik ez zavaró lehet akkor is, ha te nem hallod.":
    "Nie trzymaj go przy uchu i nie kieruj w ucho innej osoby. Psy, koty i inne zwierzęta domowe słyszą znacznie wyżej niż człowiek: może im to przeszkadzać, nawet gdy ty nic nie słyszysz.",
  // TERKEP mester-gomb es funkcio-tabla (Fonok kerese 2026-10-05 20:11)
  "Térkép-funkciók":
    "Funkcje mapy",
  "Helyzet és pontok":
    "Pozycja i punkty",
  "Mérés":
    "Pomiar",
  "Térkép és tároló":
    "Mapa i pamięć",
  // TERKEP lap: data-i18n kulcsok, amiknek SEM a PP_SZOTAR-ban, SEM itt nem volt forditasa
  "Vissza":
    "Wstecz",
  "Kész":
    "Gotowe",
  "Tárolt térkép törlése":
    "Usuń zapisaną mapę",
  "Saját térkép hozzáadása":
    "Dodaj własną mapę",
  "Saját térkép: fotózz le egy turista- vagy katonai térképet, és igazítsd rá az alaptérképre 2–3 ismert pont (falu, csúcs, útkereszteződés) párosításával. A kép rétegként az alaptérkép fölé kerül, átlátszósága állítható, és a készüléken tárolódik, térerő nélkül is megvan. A rajzolt, nem méretarányos térképeknél az igazítás közelítő. A pontjaidat ugyanúgy teszed le, mint eddig: valódi koordinátán tárolódnak, a rétegtől függetlenül.":
    "Własna mapa: sfotografuj mapę turystyczną lub wojskową i dopasuj ją do mapy podstawowej, łącząc 2-3 znane punkty (wieś, szczyt, skrzyżowanie). Obraz staje się warstwą nad mapą podstawową, jego przezroczystość można ustawić, a zapisuje się na urządzeniu, więc masz go bez zasięgu. Na mapach rysowanych, bez skali, dopasowanie jest przybliżone. Punkty stawiasz tak jak dotąd: zapisują się na rzeczywistych współrzędnych, niezależnie od warstwy.",
  // TERKEP lebego gomb-panel (Fonok kerese 2026-10-05 19:56)
  "Gombok elrejtése":
    "Ukryj przyciski",
  "Gombok megjelenítése":
    "Pokaż przyciski",
  // FAX kep-igazito (Fonok kerese 2026-10-05 19:50): forgatas + zoom + tolas a kereten belul
  "Ez nem papír-fax: egy képet küld hangként, szabványos SSTV módban, amit bármely SSTV-vevő megért. A keret ezért kötött: 320x256 képpont, fekvő. Egy gépelt A4-es laphoz ez kevés, de egy rövid, nagy betűs kézírás olvashatóan átmegy.":
    "To nie jest faks papierowy: wysyła obraz jako dźwięk, w standardowym trybie SSTV, który rozumie każdy odbiornik SSTV. Dlatego ramka jest stała: 320x256 pikseli, pozioma. Na maszynopis A4 to za mało, ale krótka notatka dużym pismem dotrze czytelnie.",
  "Forgatás":
    "Obróć",
  "Teljes kép":
    "Całe zdjęcie",
  "Nagyítás":
    "Powiększenie",
  "A keretbe eső rész:":
    "Część w ramce:",
  "képpont a forrásból":
    "pikseli z oryginału",
  "Húzd a képet a helyére, két ujjal nagyíthatsz, a Forgatás kilencven fokonként fordít. Amit a keretben látsz, pontosan az megy el. A Forgatás és a Teljes kép újra beilleszti a képet a keretbe, onnan tudsz belezoomolni.":
    "Przesuń zdjęcie na miejsce, powiększaj dwoma palcami, a Obróć obraca je o dziewięćdziesiąt stopni. To, co widzisz w ramce, dokładnie to zostanie wysłane. Obróć i Całe zdjęcie z powrotem dopasowują zdjęcie do ramki, a stamtąd możesz powiększać.",
  // FAX (SSTV) -- allo kep kezelese + a ket fax lap feliratai, 2026-10-05 (Fonok: 'ne vesszen el ... egy csomo adat')
  "Fax küldés":
    "Wysyłanie faksu",
  "Fax vétel":
    "Odbiór faksu",
  "Álló kép":
    "Zdjęcie pionowe",
  "Elforgatva, teljes felbontás":
    "Obrócone, pełna rozdzielczość",
  "Egész kép, fekete sávokkal":
    "Całe zdjęcie, z czarnymi pasami",
  "Kitöltés, a széleket levágja":
    "Wypełnienie ramki, z obcięciem brzegów",
  "Álló kép elforgatva, teljes felbontás:":
    "Zdjęcie pionowe obrócone, pełna rozdzielczość:",
  "A keretre vágva, a széleit levágta:":
    "Obcięte do ramki, brzegi usunięte:",
  "Egész kép, fekete sávokkal:":
    "Całe zdjęcie, z czarnymi pasami:",
  "Egész kép a keretben:":
    "Całe zdjęcie w ramce:",
  "képpont a 320×256-os keretből":
    "pikseli z ramki 320×256",
  "A saját vételünk egyelőre csak Martin M1-et fejt vissza. A többi mód adásra kész, és egy szabványos SSTV-vevő (Robot36, MMSSTV) veszi, de ezt a telefonod nem tudja magának visszaolvasni.":
    "Nasz własny odbiornik na razie dekoduje tylko Martin M1. Pozostałe tryby są gotowe do nadawania i standardowy odbiornik SSTV (Robot36, MMSSTV) je odbierze, ale twój telefon nie potrafi ich jeszcze sam odczytać.",
  "A fax kerete fekvő, 320x256 képpont, ezt a mód szabványa adja. Álló képnél az elforgatás használja ki a legjobban a keretet, tehát ott veszik el a legkevesebb részlet, a vevő oldalán viszont fordítsd el a telefont. A kitöltés levágja a kép tetejét és alját. Fekvő képnél mindhárom beállítás ugyanazt adja.":
    "Ramka faksu jest pozioma, 320x256 pikseli, tak określa norma trybu. Przy zdjęciu pionowym obrót najlepiej wykorzystuje ramkę, więc traci się najmniej szczegółów, ale po stronie odbiorczej obróć telefon. Wypełnienie obcina górę i dół zdjęcia. Przy zdjęciu poziomym wszystkie trzy ustawienia dają to samo.",
  "Martin M1 (320×256, ~114 mp)":
    "Martin M1 (320×256, ~114 s)",
  "Martin M2 (320×256, ~58 mp)":
    "Martin M2 (320×256, ~58 s)",
  "Scottie S1 (320×256, ~110 mp)":
    "Scottie S1 (320×256, ~110 s)",
  "Scottie S2 (320×256, ~71 mp)":
    "Scottie S2 (320×256, ~71 s)",
  "Scottie DX (320×256, ~269 mp)":
    "Scottie DX (320×256, ~269 s)",
  // --- KALKULATOR-CSEMPE (2026-08-26, Thomas merese: kilenc tetelbol nyolc angol volt,
  // egy magyar). Kesobb hozzaadott csempe, a szotarbol kimaradt.
  "Számológép": "Kalkulator",
  "Nagy gombok, szalag, memória — kesztyűben és sötétben is": "Duże klawisze, taśma, pamięć — także w rękawicach i po ciemku",

  // --- ATTRIBUTUM-SZOVEGEK (2026-08-26, Istvan). Thomas merte az angol keszlet
  // felvetele kozben: a `placeholder`/`title`/`aria-label` magyarul allt. A fordito
  // MAR bejarja az attributumokat -- ezek a kulcsok hianyoztak a szotarbol.
  // A `pl.` MAGYAR roviditès: nyelvenkent mas (e.g. / z. B. / p. ej. / np. / ex. / напр.),
  // es a tizedesjel is (`1013.2` angolul, `1013,2` a tobbin).
  "Keresés a tételek közt": "Szukaj wśród pozycji",
  "Mégse": "Anuluj",
  "Szalag ürítése": "Wyczyść taśmę",
  "Visszavonás": "Cofnij",
  "a tétel neve": "nazwa pozycji",
  "az eszköz neve": "nazwa urządzenia",
  "hány darab": "ile sztuk",
  "kalória egységenként": "kalorie na jednostkę",
  "mennyiség": "ilość",
  "sor törlése": "usuń wiersz",
  "Új lap": "Nowy arkusz",
  "Írd be a szöveget, majd koppints a lapra": "Wpisz tekst, a potem dotknij arkusza",
  "pl. 15": "np. 15",
  "pl. 18": "np. 18",
  "pl. 85": "np. 85",
  "pl. 500": "np. 500",
  "pl. 47.4979, 19.0402": "np. 47.4979, 19.0402",
  "pl. A Rh+": "np. A Rh+",
  "pl. Anna": "np. Anna",
  "pl. 1013,2": "np. 1013,2",
  "pl. 6,5": "np. 6,5",
  "pl. Feri": "np. Franek",
  "pl. Otthon": "np. Dom",
  "pl. SOS Fonok": "np. SOS Tata",
  "pl. inzulin": "np. insulina",

  // --- NYOMTATOTT VESZKARTYA (2026-08-26, Istvan). Thomas merte: a nyomtatott lap
  // angol nyelven is vegig MAGYAR volt. A lap KULON ablakban keszul, tehat a DOM-bejaro
  // fordito nem eri el -- a szoveg a felepiteskor fordul (`ppForditSzoveg` a cardNyomtat-ban).
  "VÉSZKÁRTYA": "KARTA RATUNKOWA",
  "CSALÁDI VÉSZKÁRTYA": "RODZINNA KARTA RATUNKOWA",
  "Születés:": "Urodzenie:",
  "Allergia:": "Alergie:",
  "Kontakt:": "Kontakt:",
  "személyes QR": "QR osobisty",
  "családi QR": "QR rodzinny",
  "allergia:": "alergia:",
  "gyógyszer:": "leki:",
  "A böngésző letiltotta az új ablakot. Engedélyezd, és próbáld újra.": "Przeglądarka zablokowała nowe okno. Zezwól na nie i spróbuj ponownie.",
  "Nincs profil, amiből kártyát csinálhatnék. A Háztartásnál vedd fel őket.": "Nie ma profilu, z którego mógłbym zrobić kartę. Dodaj je w Gospodarstwie domowym.",

  "Otthon": "Dom",
  "Nyaraló": "Domek letniskowy",
  "Hétvégi ház": "Dom weekendowy",
  "Garázs": "Garaż",
  "Lakókocsi": "Przyczepa kempingowa",
  "Jármű": "Pojazd",
  "Rejtési pont": "Kryjówka",
  "Egyéb": "Inne",
  "egyéb": "inne",
  "Gépjármű": "Pojazd silnikowy",
  "Autó": "Samochód",
  "Autós": "Samochodem",
  "Motorkerékpár": "Motocykl",
  "Elektromos bicikli": "Rower elektryczny",
  "Elektromos roller": "Hulajnoga elektryczna",
  "Utánfutó": "Przyczepa",
  "(motoros)": "(silnikowy)",
  "Megnevezés": "Nazwa",
  "Név": "Imię",
  "A neved": "Twoje imię",
  "Törlés": "Usuń",
  "Mentés": "Zapisz",
  "Mégsem": "Anuluj",
  "Hozzáadás": "Dodaj",
  "Küldés": "Wyślij",
  "Kilépés": "Wyjdź",
  "Csatlakozás": "Połączenie",
  "Csatlakozz": "Dołącz",
  "Nincs": "Brak",
  "Számold ki": "Oblicz",
  "Kategória": "Kategoria",
  "Cím": "Adres",
  "Adat": "Dane",
  "Beállítások": "Ustawienia",
  "Feloldás": "Odblokuj",
  "A feloldás": "Odblokowanie",
  "Zárolás": "Zablokuj",
  "Értesítés": "Powiadomienie",
  "Értesítés bekapcsolása": "Włącz powiadomienia",
  "Beolvasás kamerával": "Skanuj aparatem",
  "Betöltés fájlból": "Wczytaj z pliku",
  "Fájl kiválasztása és mentés": "Wybierz plik i zapisz",
  "Kép mentése": "Zapisz obraz",
  "Kép választása": "Wybierz obraz",
  "Betűsor másolása": "Kopiuj ciąg znaków",
  "Hangfájlból": "Z pliku dźwiękowego",
  "English": "English",
  "Kommunikáció": "Komunikacja",
  "Morze": "Morse",
  "Fax (SSTV)": "Faks (SSTV)",
  // 2026-10-19 (kartya 43a80047): "(SSTV)" kivetve; a feloldas a fiokhoz kotott, max. ket keszulek
  "Használati útmutató": "Instrukcja obsługi",
  "Fax": "Faks",
  "Fax: kép átküldése hangban, rádión is. Ugyanaz a gomb indít és állít.": "Faks: przesłanie obrazu w dźwięku, także przez radio. Ten sam przycisk uruchamia i zatrzymuje.",
  "A kód a fiókodhoz tartozik, és legfeljebb két készüléken használhatod. A feloldott modulok offline is működnek, semmi nem zár le. Ha kódot kaptál, itt válthatod be.": "Kod należy do twojego konta i możesz go używać na maksymalnie dwóch urządzeniach. Odblokowane moduły działają także offline, nic się nie blokuje. Jeśli dostałeś kod, tutaj możesz go zrealizować.",
  "Feloldva ✓ A kód a fiókodhoz tartozik, legfeljebb két készüléken.": "Odblokowano ✓ Kod należy do twojego konta, na maksymalnie dwóch urządzeniach.",
  "Üzenet": "Wiadomość",
  "Hangüzenet": "Wiadomość głosowa",
  "Digitális üzenet": "Wiadomość cyfrowa",
  "Helyi szoba": "Pokój lokalny",
  "Tudástár": "Baza wiedzy",
  "Vészkártya": "Karta ratunkowa",
  "Titkos QR": "Tajny kod QR",
  "Biblia": "Biblia",
  "Imádság": "Modlitwa",
  "Háztartás": "Gospodarstwo domowe",
  "Alapismeretek": "Podstawy",
  "Élelmiszer és víz": "Żywność i woda",
  "Egészségügy": "Zdrowie",
  "Háborús övezet": "Strefa wojenna",
  "SOS": "SOS",
  "Alaptérkép": "Mapa podstawowa",
  "Irattárca": "Teczka dokumentów",
  "Dokumentum": "Dokument",
  "Dokumentumok · nyílt (QR)": "Dokumenty · jawne (QR)",
  "Dokumentumok · PIN-zár": "Dokumenty · blokada PIN",
  "Dokumentumok és adatmentés": "Dokumenty i kopia zapasowa",
  "Belépési és helyreállítási kódok": "Kody dostępu i odzyskiwania",
  "Belépési kérelmek": "Prośby o dołączenie",
  "Gyakorlónap": "Dzień ćwiczeń",
  "Csomaglista személyre és útra": "Lista pakowania wg osoby i podróży",
  "EDC: a mindennap magadnál hordott felszerelés": "EDC: wyposażenie noszone codziennie przy sobie",
  "Családtagok": "Członkowie rodziny",
  "Családtag hozzáadása": "Dodaj członka rodziny",
  "Családtag törlése": "Usuń członka rodziny",
  "Családtagok · állatok · helyszínek": "Rodzina · zwierzęta · miejsca",
  "Családtagok vészkártyái": "Karty ratunkowe rodziny",
  "Családi kártya (egy QR)": "Karta rodzinna (jeden QR)",
  "Családi jelszó": "Hasło rodzinne",
  "Háziállatok": "Zwierzęta domowe",
  "Háziállat a felkészülésben": "Zwierzę domowe w przygotowaniach",
  "+ Új háziállat": "+ Nowe zwierzę",
  "+ Új helyszín": "+ Nowe miejsce",
  "Állat hozzáadása": "Dodaj zwierzę",
  "Állat törlése": "Usuń zwierzę",
  "Faj": "Gatunek",
  "felnőtt férfi": "dorosły mężczyzna",
  "felnőtt nő": "dorosła kobieta",
  "gyermek": "dziecko",
  "csecsemő": "niemowlę",
  "fiú": "chłopiec",
  "haszonállat": "zwierzę gospodarskie",
  "Helyszín hozzáadása": "Dodaj miejsce",
  "Helyszín törlése": "Usuń miejsce",
  "Helyszínek készültsége": "Gotowość miejsc",
  "Ingatlanok és helyszínek": "Nieruchomości i miejsca",
  "Emelet": "Piętro",
  "Alapterület (m²)": "Powierzchnia (m²)",
  "GPS koordináta": "Współrzędne GPS",
  "Hány napra": "Na ile dni",
  "Kalória": "Kalorie",
  "Meddig elég az élelmed, és mennyi hiányzik": "Na jak długo starczy jedzenia i czego brakuje",
  "Rádió-hatótáv": "Zasięg radia",
  "Meddig hallanak a sávtól és a tereptől függően": "Jak daleko cię słychać, zależnie od pasma i terenu",
  "Kalória: meddig elég az élelmed": "Kalorie: na jak długo starczy jedzenia",
  "Hány felnőtt?": "Ilu dorosłych?",
  "Hány gyerek? (kb. 12 év alatt)": "Ile dzieci? (poniżej około 12 lat)",
  "Mit csináltok ezekben a napokban?": "Co będziecie robić w tych dniach?",
  "Mi van a készletben?": "Co jest w zapasie?",
  "+ Saját tétel hozzáadása": "+ Dodaj własną pozycję",
  "Vagy add meg egyben, ha tudod": "Albo podaj sumę, jeśli ją znasz",
  "összes kilokalória (üresen hagyhatod)": "łącznie kilokalorii (może zostać puste)",
  "Mi ez? (pl. szárított hús)": "Co to jest? (np. suszone mięso)",
  "kcal/egység": "kcal/jednostka",
  "mennyi": "ile",
  "bent maradunk, keveset mozgunk": "siedzimy w domu, mało ruchu",
  "normál napi ügyintézés": "zwykły dzień spraw",
  "fizikai munka, gyaloglás": "praca fizyczna, marsz",
  "Rizs": "Ryż",
  "Száraztészta": "Makaron suchy",
  "Liszt": "Mąka",
  "Bab, lencse, borsó": "Fasola, soczewica, groch",
  "Zabpehely": "Płatki owsiane",
  "Cukor, méz": "Cukier, miód",
  "Olaj, zsír": "Olej, tłuszcz",
  "Húskonzerv (400 g)": "Konserwa mięsna (400 g)",
  "Zöldségkonzerv (400 g)": "Konserwa warzywna (400 g)",
  "Tejpor": "Mleko w proszku",
  "Keksz, kétszersült": "Herbatniki, sucharki",
  "Csokoládé, müzliszelet": "Czekolada, baton zbożowy",
  "Rádió: meddig hallanak": "Radio: jak daleko cię słychać",
  "Milyen sávon?": "Jakie pasmo?",
  "Adóteljesítmény (watt)": "Moc nadawania (waty)",
  "Milyen terepen?": "Jaki teren?",
  "Milyen magasan van az antennád? (méter)": "Jak wysoko jest twoja antena? (metry)",
  "És a másiké?": "A tego drugiego?",
  "Mekkora távolságot szeretnél áthidalni? (km, üresen hagyhatod)": "Jaki dystans chcesz pokryć? (km, może zostać puste)",
  "nyílt, sík terep": "teren otwarty, płaski",
  "dombos, hullámos": "pagórkowaty, falisty",
  "erdő, sűrű növényzet": "las, gęsta roślinność",
  "város, beépített": "miasto, zabudowa",
  "hegyvidék, völgyben": "góry, w dolinie",
  "(db)": "(szt.)",
  "(kg)": "(kg)",
  "(liter/kg)": "(litr/kg)",
  "(egység)": "(jednostka)",
  "Hány napra kell?": "Na ile dni jest potrzebne?",
  "Hány napra tervezel itt": "Na ile dni planujesz tutaj",
  "Vércsoport": "Grupa krwi",
  "Allergia": "Alergia",
  "Allergiák": "Alergie",
  "Gyógyszer": "Lek",
  "Gyógyszerek": "Leki",
  "Érszorító": "Opaska uciskowa",
  "Elsősegélykészlet": "Apteczka pierwszej pomocy",
  "Glutén": "Gluten",
  "Diófélék": "Orzechy",
  "Földimogyoró": "Orzeszki ziemne",
  "Hal / tenger gyümölcsei": "Ryby / owoce morza",
  "Darázs- és méhcsípés": "Użądlenie osy i pszczoły",
  "Kullancsriasztó": "Odstraszacz kleszczy",
  "Naptej": "Krem z filtrem",
  "CPAP": "CPAP",
  "Bébiétel": "Jedzenie dla niemowląt",
  "Állateledel": "Karma dla zwierząt",
  "Tisztálkodó eszközök": "Artykuły higieniczne",
  "Női higiéniai termékek": "Środki higieny kobiecej",
  "Kannás víz": "Woda w kanistrze",
  "Palackos víz": "Woda butelkowana",
  "Száraz élelmiszer": "Żywność sucha",
  "Konzerv": "Konserwy",
  "MRE pack": "Pakiet MRE",
  "Romlandó": "Łatwo psujące się",
  "Hosszú távú": "Długoterminowe",
  "30 napos": "30 dni",
  "72 órás": "72 godziny",
  "Menekülőzsák": "Plecak ewakuacyjny",
  "Téli túra": "Wyprawa zimowa",
  "Vízi túra": "Wyprawa wodna",
  "Hálózsák": "Śpiwór",
  "Derékalj": "Karimata",
  "Párna": "Poduszka",
  "Sátor/sátorlap": "Namiot/płachta",
  "Fejlámpa": "Latarka czołowa",
  "Kézilámpa": "Latarka ręczna",
  "Munkalámpa": "Lampa warsztatowa",
  "Szikravető": "Krzesiwo",
  "Gyújtós": "Podpałka",
  "Főzőfej": "Palnik kuchenki",
  "Spiritusz égő": "Palnik spirytusowy",
  "Hobokályha": "Piecyk hobo",
  "Fa tüzelésű kályha": "Piec na drewno",
  "Dízel kályha": "Piec na olej napędowy",
  "Vegyi melegítő": "Ogrzewacz chemiczny",
  "Ágyfűtés": "Ogrzewanie łóżka",
  "Gázpalack": "Butla gazowa",
  "Tüzifa": "Drewno opałowe",
  "Fűtőolaj": "Olej opałowy",
  "Fa, kályhában": "Drewno, w piecu",
  "Hideg időjárási öltözet": "Odzież na zimną pogodę",
  "Meleg időjárási öltözet": "Odzież na ciepłą pogodę",
  "EDC csomag felszerelései": "Wyposażenie zestawu EDC",
  "Víztisztító tabletta": "Tabletki do uzdatniania wody",
  "Vízszűrő": "Filtr do wody",
  "Ciszterna": "Cysterna",
  "Esővíz": "Woda deszczowa",
  "Esővíz: mennyi gyűlik össze": "Woda deszczowa: ile się zbierze",
  "Hűtő": "Lodówka",
  "Áram": "Prąd",
  "Áramforrás": "Źródło prądu",
  "Áram: mit tudsz róla üzemeltetni, és meddig": "Prąd: co możesz z niego zasilać i jak długo",
  "Powerbank": "Powerbank",
  "Power station": "Stacja zasilania",
  "Tank / akku": "Zbiornik / akumulator",
  "Kapacitás (Wh/db)": "Pojemność (Wh/szt.)",
  "Autó-/szünetmentes akku 100 Ah": "Akumulator samochodowy/UPS 100 Ah",
  "Anker 521 PowerHouse (256 Wh)": "Anker 521 PowerHouse (256 Wh)",
  "Bluetti AC200L (2048 Wh)": "Bluetti AC200L (2048 Wh)",
  "Bluetti EB70 (716 Wh)": "Bluetti EB70 (716 Wh)",
  "EcoFlow Delta 2 (1024 Wh)": "EcoFlow Delta 2 (1024 Wh)",
  "EcoFlow River 2 (256 Wh)": "EcoFlow River 2 (256 Wh)",
  "EcoFlow River 2 Pro (768 Wh)": "EcoFlow River 2 Pro (768 Wh)",
  "Szolárpanel": "Panel słoneczny",
  "Üzemanyag": "Paliwo",
  "Üzemanyag (mobilitás)": "Paliwo (mobilność)",
  "Üzemanyag-készlet": "Zapas paliwa",
  "benzin": "benzyna",
  "dízel": "olej napędowy",
  "Fogyasztás (/100 km)": "Zużycie (/100 km)",
  "Most mennyi van benne": "Ile jest teraz w środku",
  "tele": "pełny",
  "háromnegyed": "trzy czwarte",
  "fele": "połowa",
  "negyede": "jedna czwarta",
  "ötöde": "jedna piąta",
  "tizede": "jedna dziesiąta",
  "üres": "pusty",
  "Fűtés": "Ogrzewanie",
  "Fűtés áram nélkül is?": "Ogrzewanie także bez prądu?",
  "Fűtés hatásfoka (%)": "Sprawność ogrzewania (%)",
  "Fűtés: mennyi tüzelő kell": "Ogrzewanie: ile potrzeba opału",
  "Fűtött terület (m²)": "Powierzchnia ogrzewana (m²)",
  "Átlagos (100 W/m²)": "Przeciętna (100 W/m²)",
  "igen (kandalló, kályha, fa)": "tak (kominek, piec, drewno)",
  "igen (kút kézi szivattyúval, ciszterna)": "tak (studnia z pompą ręczną, cysterna)",
  "Energia (kcal/100 g)": "Energia (kcal/100 g)",
  "Emelkedés összesen (m)": "Suma przewyższeń (m)",
  "5% nátrium-hipoklorit (a szokásos háztartási)": "5% podchloryn sodu (zwykły domowy)",
  "10% (ipari)": "10% (przemysłowy)",
  "A hipó töménysége (nézd meg az üvegen)": "Stężenie wybielacza (sprawdź na butelce)",
  "WPM": "WPM",
  "Hz": "Hz",
  "Hang:": "Dźwięk:",
  "Hangerő:": "Głośność:",
  "Hangmagasság:": "Wysokość dźwięku:",
  "Fényerő:": "Jasność:",
  "Fehér": "Biały",
  "hang és fény, hálózat nélkül": "dźwięk i światło, bez sieci",
  "Vétel sebesség (magától követi a jelet, kézzel is állíthatod):": "Prędkość odbioru (sama podąża za sygnałem, możesz ją też ustawić ręcznie):",
  "Vétel-sebesség: magától követi a vett Morze tempóját, és a csúszkát is odaállítja. Kézzel is állíthatod, onnan követi tovább.": "Prędkość odbioru: sama podąża za tempem odbieranego Morse'a i przesuwa suwak. Możesz ją też ustawić ręcznie; od tego miejsca podąża dalej.",
  "Vétel sebesség (állítsd a vett Morze tempójához):": "Prędkość odbioru (dostosuj do tempa odbieranego Morse'a):",
  "Érzékenység (balra érzékenyebb, jobbra szigorúbb a zajra):": "Czułość (w lewo czulsza, w prawo bardziej odporna na szum):",
  "Ha nem indul a kamera.": "Jeśli aparat się nie uruchamia.",
  "Internet nem kell.": "Internet nie jest potrzebny.",
  "A szoba képe": "Obraz pokoju",
  "A szoba kódja": "Kod pokoju",
  "Helyzet (GPS)": "Położenie (GPS)",
  "Helyzetem küldése": "Wyślij moje położenie",
  "A mostani helyzetem": "Moje obecne położenie",
  "Iratai az Irattárcában": "Jego dokumenty w Teczce dokumentów",
  "Amikor akut helyzetben kell döntened": "Gdy musisz decydować w ostrej sytuacji",
  "Amikor éjszaka nem hagy aludni a félelem": "Gdy nocą strach nie pozwala ci zasnąć",
  "Gyerekekkel és idősekkel": "Z dziećmi i osobami starszymi",
  "Amit a rendszer garantál:": "Co system gwarantuje:",
  "Amit nem garantál:": "Czego nie gwarantuje:",
  "Amit vészhelyzetben tudni kell róla (nem kötelező)": "Co trzeba o niej wiedzieć w sytuacji awaryjnej (nieobowiązkowe)",
  "Ez a közös titok. Aki ismeri, az olvassa a kódjaidat, aki nem, annak értelmetlen betűsor. Add meg ugyanazt a jelszót azon a készüléken is, amelyik olvasni fogja.": "To wspólny sekret. Kto go zna, odczyta twoje kody; dla pozostałych to bezsensowny ciąg znaków. Podaj to samo hasło także na urządzeniu, które będzie je odczytywać.",
  "PIN beállítása": "Ustaw PIN",
  "Állíts be egy PIN-t (4-6 számjegy)": "Ustaw PIN (4-6 cyfr)",
  "Biblia letöltése": "Pobierz Biblię",
  "Ezen a készüléken még nincs feloldott modul.": "Na tym urządzeniu nie ma jeszcze odblokowanego modułu.",
  "Ezt látják a többiek. Ugyanaz, mint a helyi szobában.": "To widzą pozostali. To samo, co w pokoju lokalnym.",
  "Előbb vedd fel a Háztartásnál, kik vagytok — a lista onnan jön.": "Najpierw wpisz w Gospodarstwie domowym, kim jesteście — lista pochodzi stamtąd.",
  "Előbb vedd fel a Háztartásnál, kik vagytok. A lista abból dolgozik.": "Najpierw wpisz w Gospodarstwie domowym, kim jesteście. Lista korzysta z tych danych.",
  "Előbb vegyél fel helyszínt a Háztartásnál. Alapesetben az otthon az első.": "Najpierw dodaj miejsce w Gospodarstwie domowym. Domyślnie dom jest pierwszy.",
  "A törlés itt van, nem a listában — hogy ne lehessen véletlenül megnyomni.": "Usuwanie jest tutaj, nie na liście — żeby nie dało się nacisnąć przez przypadek.",
  "A mentős beolvashatja. Az adat a QR-ben van, nem megy szerverre.": "Ratownik może to zeskanować. Dane są w kodzie QR i nie trafiają na serwer.",
  "Egészségügyi vészhelyzeti adatok. A mentős beolvashatja (nyílt QR). Helyben tárolva.": "Medyczne dane awaryjne. Ratownik może je zeskanować (jawny QR). Przechowywane lokalnie.",
  "Egészségügyi adatok (nem kötelező, de ebből tudjuk, mi kell a csomagba)": "Dane zdrowotne (nieobowiązkowe, ale z nich wiemy, co ma trafić do zestawu)",
  "Allergia (koppints, amennyi kell — a mezőbe írja be, ott át is írhatod)": "Alergia (stuknij tyle razy, ile trzeba — wpisze się w pole, tam też można to zmienić)",
  "Kié (üresen hagyva: közös)": "Czyje (pozostaw puste: wspólne)",
  "Melyik készlethez tartozik (több is lehet)": "Do którego zapasu należy (może być kilka)",
  "Tárolási hely (több is lehet)": "Miejsce przechowywania (może być kilka)",
  "A koordináta többféle alakban mehet:": "Współrzędne można podać w kilku formatach:",
  "Három rövid jel, szünet, ismétlés — ez a nemzetközi vészjelzés. Hangosabban és tovább hallatszik, mint a kiabálás.": "Trzy krótkie sygnały, przerwa, powtórzenie — to międzynarodowy sygnał alarmowy. Słychać go głośniej i dalej niż krzyk.",
  "A kód alatti betűsor UGYANEZ az adat. Faxon a képet küldd, morzével a betűsort.": "Ciąg znaków pod kodem zawiera TE SAME dane. Faksem wyślij obraz, Morse'em ciąg znaków.",
  "A lejátszás ugyanazzal a gombbal indul és áll. Nincs külön Állj gomb — ha újra rákoppintasz, leáll.": "Odtwarzanie startuje i zatrzymuje się tym samym przyciskiem. Nie ma osobnego przycisku Stop — stuknij ponownie, a się zatrzyma.",
  "A wattóra és a watt nem ugyanaz, és ezt szokás összekeverni.": "Watogodzina i wat to nie to samo, a często się je myli.",
  "A wattóra (Wh) azt mondja meg, MEDDIG megy; a watt (W) azt, hogy MIT tudsz egyáltalán ráakasztani. Egy 2000 wattórás gép sem indít el egy 2000 wattos vízforralót, ha csak 600 wattot tud leadni — akkor sem, ha tele van.": "Watogodzina (Wh) mówi, JAK DŁUGO to działa; wat (W) mówi, CO w ogóle możesz podłączyć. Nawet urządzenie o pojemności 2000 watogodzin nie uruchomi czajnika o mocy 2000 watów, jeśli oddaje tylko 600 watów — nawet gdy jest w pełni naładowane.",
  "Helyszínenként: kik érkeznek oda, hány napra, és elég-e az ott lévő víz és élelem.": "Dla każdego miejsca: kto tam dotrze, na ile dni, i czy wystarczy tamtejszej wody i żywności.",
  "Telepítés a kezdőképernyőre": "Dodaj do ekranu głównego",
  "Nemzetközi vészjelzés Morzéval: SOS (··· ─── ···), folyamatosan ismételve. Fénnyel, hang nélkül — a hangjelzés lent külön van, mert az mást tud.": "Międzynarodowy sygnał alarmowy Morse'em: SOS (··· ─── ···), powtarzany w kółko. Światłem, bez dźwięku — sygnał dźwiękowy jest osobno niżej, bo działa inaczej.",
  "TEKERD FEL A HANGERŐT. Az app a telefon hangerejét nem tudja felülírni, tehát ha az le van halkítva, a síp is halk lesz.": "PODGŁOŚ TELEFON. Aplikacja nie może zmienić głośności telefonu, więc jeśli jest ściszony, gwizdek też będzie cichy.",
  "Hz. A 3-4 kHz a legjobban hallható tartomány, ezért sípol ott a mentőmellény sípja is.": "Hz. 3-4 kHz to najlepiej słyszalny zakres, dlatego właśnie tam gwiżdże też gwizdek kamizelki ratunkowej.",
  "Percenként 110 koppanás. Nyomd a mellkas közepét a koppanás ütemére, körülbelül 5-6 centit, és hagyd teljesen visszaemelkedni.": "110 uderzeń na minutę. Uciskaj środek klatki piersiowej w rytm stuknięć, na około 5-6 centymetrów, i pozwól jej całkowicie wrócić.",
  "Ez ütemadó, nem oktatás. Mentő: 112. Ha van a közelben defibrillátor, valaki hozza, de te ne hagyd abba.": "To metronom, nie szkolenie. Pogotowie: 112. Jeśli w pobliżu jest defibrylator, niech ktoś go przyniesie, ale ty nie przerywaj.",
  "— egységes európai segélyhívó (mentő, tűzoltó, rendőrség). Térerő nélkül is hívható, ha van bármilyen hálózat a közelben.": "— jednolity europejski numer alarmowy (pogotowie, straż pożarna, policja). Można dzwonić nawet bez własnego zasięgu, jeśli w pobliżu jest jakakolwiek sieć.",
  "A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan. Töltsd ki a": "Twoja karta ratunkowa (grupa krwi, alergia, leki, kontakt) pojawi się tu szybko. Wypełnij ją w sekcji",
  "szekcióban.": ".",
  "Írj be szöveget, játszd le hangként vagy fénnyel, vagy vegyél kamerával/mikrofonnal.": "Wpisz tekst, odtwórz go dźwiękiem lub światłem, albo odbierz aparatem/mikrofonem.",
  "Próbaidő: még 14 nap. A lejárat után sem áll le semmi.": "Okres próbny: jeszcze 14 dni. Po jego upływie też nic się nie wyłączy.",
  "Szöveg": "Tekst",
  "Sebesség:": "Prędkość:",
  "Ismétlés (folyamatos)": "Powtarzanie (ciągłe)",
  "Lejátszás": "Odtwarzanie",
  "Villogtatás (Lejátszás és SOS is):": "Miganie (Odtwarzanie i SOS):",
  "Képernyő": "Ekran",
  "Vaku": "Lampa błyskowa",
  "Mindkettő": "Oba",
  "Vétel: KAMERA (fény → szöveg)": "Odbiór: APARAT (światło → tekst)",
  "Kamera vétel indítása": "Uruchom odbiór aparatem",
  "Nagyítás (távoli fényhez):": "Powiększenie (do odległego światła):",
  "Indítsd, és irányítsd a kamerát egy Morzét villogó fényre (pl. egy másik telefon vakuja). A háttér legyen sötét, a fény a kép KÖZEPÉN. A fény-küszöb magától hangolódik; a \"Fényerő\" sáv és a lámpa mutatja, mit lát. A \"Vétel sebesség\" csúszkát állítsd a vett Morze tempójához, amíg tisztán jönnek a betűk.": "Uruchom i skieruj aparat na światło migające Morse'em (np. lampę innego telefonu). Tło powinno być ciemne, a światło na ŚRODKU obrazu. Próg jasności dostraja się sam; pasek \"Jasność\" i lampka pokazują, co jest widziane. Suwak \"Prędkość odbioru\" ustaw na tempo odbieranego Morse'a, aż litery będą przychodzić czysto.",
  "Vétel: MIKROFON (hang → szöveg)": "Odbiór: MIKROFON (dźwięk → tekst)",
  "Mikrofon vétel indítása": "Uruchom odbiór mikrofonem",
  "FONTOS: külön eszközről vedd (az egyik telefon lejátssza, a másikon fut a vétel) -- ugyanazon a telefonon a mikrofon foglalása miatt a lejátszás halkul. Tartsd a Morze-hangot a mikrofon közelébe. Csendes környezet a legjobb; a hangerő-sáv és a lámpa mutatja, mit hall. Kalibrálás: a \"Vétel sebesség\" csúszkát told lassan, amíg a szövegben tisztán, hibátlanul jönnek a betűk.": "WAŻNE: odbieraj z osobnego urządzenia (jeden telefon odtwarza, na drugim działa odbiór) -- na tym samym telefonie odtwarzanie cichnie, bo mikrofon jest zajęty. Trzymaj dźwięk Morse'a blisko mikrofonu. Najlepsze jest ciche otoczenie; pasek głośności i lampka pokazują, co jest słyszane. Kalibracja: przesuwaj suwak \"Prędkość odbioru\" powoli, aż litery w tekście będą przychodzić czysto i bezbłędnie.",
  "Tanuló: Morze → szöveg (kézi: illeszd be . és -, szóköz a betűk közt, / a szavak közt)": "Nauka: Morse → tekst (ręcznie: wstaw . i -, spacja między literami, / między wyrazami)",
  "A kétirányú kód-tábla (nemzetközi + magyar Á/É/Ö/Ü) és az interaktív tanuló a végleges appban bővül. Egyelőre a fenti mező visszafejt bármilyen beírt Morze-jelet.": "Dwukierunkowa tablica kodów (międzynarodowa + węgierskie Á/É/Ö/Ü) oraz interaktywna nauka zostaną rozbudowane w finalnej aplikacji. Na razie powyższe pole odszyfruje każdy wpisany znak Morse'a.",
  "Kép küldése hangként (Martin M1). Játszd egy másik telefon SSTV-vevőjébe vagy egy rádió mikrofonjába.": "Wysyłanie obrazu jako dźwięk (Martin M1). Odtwórz go do odbiornika SSTV innego telefonu albo do mikrofonu radia.",
  "Mód": "Tryb",
  "Martin M1 (320×256, működik)": "Martin M1 (320×256, działa)",
  "Robot36 (hamarosan)": "Robot36 (wkrótce)",
  "Scottie S1 (hamarosan)": "Scottie S1 (wkrótce)",
  "PD120 (hamarosan)": "PD120 (wkrótce)",
  "Kép": "Obraz",
  "Kódolás és lejátszás": "Kodowanie i odtwarzanie",
  "Küldéshez: a másik eszközön indíts SSTV-vevőt (pl. Robot36 vagy MMSSTV) Martin M1 módban, és tartsd a hangszórót a mikrofonjához. A VIS-fejléc automatikus, a vevő magától felismeri a módot. Egy kép ~114 másodperc.": "Aby wysłać: na drugim urządzeniu uruchom odbiornik SSTV (np. Robot36 lub MMSSTV) w trybie Martin M1 i przytrzymaj głośnik przy jego mikrofonie. Nagłówek VIS jest wysyłany automatycznie, odbiornik sam rozpozna tryb. Jeden obraz trwa około 114 sekund.",
  "Vétel (hang → kép)": "Odbiór (dźwięk → obraz)",
  "Vétel indítása": "Uruchom odbiór",
  "Martin M1-et fogad. Tartsd a telefont a hangszóró vagy a rádió közelébe, és a kép soronként épül fel. Csendes környezet kell hozzá: a mikrofon minden mást is hall. Hangfájlból is megy, ha valaki felvételt küld.": "Odbiera Martin M1. Trzymaj telefon blisko głośnika lub radia, a obraz buduje się linia po linii. Potrzebne jest ciche otoczenie: mikrofon słyszy też wszystko inne. Działa również z pliku dźwiękowego, jeśli ktoś przyśle nagranie.",
  "Készletezés": "Gromadzenie zapasów",
  "Menedék és tábor": "Schronienie i obóz",
  "Városi túlélés": "Przetrwanie w mieście",
  "Tájékozódás és mozgás": "Orientacja i poruszanie się",
  "Jelek és időjárás olvasása": "Odczytywanie znaków i pogody",
  "Közlekedés és mobilitás": "Transport i mobilność",
  "Lelki felkészültség": "Przygotowanie duchowe",
  "Tartós áramszünet": "Długotrwała przerwa w dostawie prądu",
  "Tűzvédelem otthon": "Ochrona przeciwpożarowa w domu",
  "Pénz és megélhetés": "Pieniądze i utrzymanie",
  "Víznyerés és víztisztítás": "Pozyskiwanie i uzdatnianie wody",
  "Mikro-önellátás": "Mikro-samowystarczalność",
  "Új tétel": "Nowa pozycja",
  "Mennyiség": "Ilość",
  "Mennyiség (db)": "Ilość (szt.)",
  "Súly (gramm/db)": "Waga (gram/szt.)",
  "Vonalkód / QR beolvasása": "Skanuj kod kreskowy / QR",
  "Lejárat (opcionális)": "Data ważności (opcjonalnie)",
  "Lejárat": "Data ważności",
  "Tétel adatlapja": "Karta pozycji",
  "Tétel törlése": "Usuń pozycję",
  "+6 hónap": "+6 miesięcy",
  "+1 év": "+1 rok",
  "+2 év": "+2 lata",
  "+5 év": "+5 lat",
  "Turista / domborzat": "Turystyczna / rzeźba terenu",
  "Műhold": "Satelita",
  "Pont ide, ahol vagyok": "Punkt tutaj, gdzie jestem",
  "Terület letöltése": "Pobierz obszar",
  "Koppints a térképre pont hozzáadásához (menedék, víz, találkozópont). Ha ott": "Stuknij w mapę, aby dodać punkt (schronienie, woda, punkt spotkań). Jeśli",
  "állsz": "stoisz",
  ", ahová a pont való, a": " tam, gdzie punkt ma trafić,",
  "pontosabb: az a GPS-edet használja, nem azt, ahová az ujjad ér. A": "jest dokładniejszy: korzysta z twojego GPS, a nie z miejsca, w które trafia palec. Przycisk",
  "a mostani koordinátádat adja tovább üzenetben, a": "przekazuje twoje obecne współrzędne w wiadomości, a",
  "Pontok kimentése": "Eksportuj punkty",
  "pedig GPX-fájlba menti mindet, amit a térkép- és navigációs programok beolvasnak. A pontok és a jelenlegi pozíció helyben tárolódnak. A": "zapisuje je wszystkie do pliku GPX, który odczytają programy mapowe i nawigacyjne. Punkty i obecna pozycja są przechowywane lokalnie. Przycisk",
  "a most látható kivágást menti a készülékre, három nagyítási szinten — utána térerő nélkül is megvan.": "zapisuje aktualnie widoczny wycinek na urządzeniu, w trzech poziomach powiększenia — potem masz go także bez zasięgu.",
  "Rendszeres gyógyszerek": "Leki stałe",
  "Rendszeres gyógyszer": "Lek stały",
  "Krónikus betegségek": "Choroby przewlekłe",
  "Krónikus betegség": "Choroba przewlekła",
  "Vészhelyzeti kontakt (név, telefon)": "Kontakt awaryjny (imię, telefon)",
  "QR-kód generálása": "Wygeneruj kod QR",
  "A QR a fenti adatokat kódolja. Kihelyezheted a zárolt képernyődre vagy kinyomtatva a hátizsákodba.": "Kod QR zawiera powyższe dane. Możesz go umieścić na ekranie blokady albo wydrukować i włożyć do plecaka.",
  "Mindenkinek, akinek van profilja a Háztartásnál. Az adat onnan jön: vércsoport, allergia, gyógyszer, betegség. A vészhelyzeti kontakt a fenti közös mezőből.": "Dla każdego, kto ma profil w Gospodarstwie domowym. Dane pochodzą stamtąd: grupa krwi, alergia, leki, choroby. Kontakt awaryjny z powyższego wspólnego pola.",
  "Még nincs profil. A Háztartásnál vedd fel, kik vagytok — mindenki kap egy kártyát.": "Nie ma jeszcze profilu. Wpisz w Gospodarstwie domowym, kim jesteście — każdy dostanie kartę.",
  "Mind nyomtatása": "Drukuj wszystkie",
  "Megtérő ima": "Modlitwa nawrócenia",
  "Letöltés": "Pobierz",
  "halvány": "słabe",
  "erős": "silne",
  "É": "N",
  "az üvegről olvasd le": "odczytaj z butelki",
  "‹ Fejezetek": "‹ Rozdziały",
  "‹ Előző": "‹ Poprzedni",
  "Következő ›": "Następny ›",
  "A kiemeléseidhez előbb töltsd le a Bibliát.": "Aby korzystać z zaznaczeń, najpierw pobierz Biblię.",
  "A teljes Károli-fordítás egyszer letöltődik (kb. 4 MB), és utána internet nélkül is elérhető marad.": "Pełny przekład zostanie pobrany jeden raz (około 4 MB) i potem pozostanie dostępny również bez internetu.",
  "Vészhelyzeti igék": "Wersety na sytuacje kryzysowe",
  "Próféciák": "Proroctwa",
  "Kiemeléseim": "Moje zaznaczenia",
  "Token tárca": "Portfel tokenów",
  "Titkos kódok PIN mögött, helyben tárolva. Ugyanaz a PIN nyitja, mint az Irattárcát.": "Tajne kody za PIN-em, przechowywane lokalnie. Otwiera je ten sam PIN, co Teczkę dokumentów.",
  "Új PIN (4-6 számjegy)": "Nowy PIN (4-6 cyfr)",
  "TESZT ÜZEMMÓD: a PIN most": "TRYB TESTOWY: PIN to teraz",
  ", előre kitöltve. Éles használat előtt ez kikerül, és saját PIN-t adsz meg.": ", wypełniony z góry. Przed prawdziwym użyciem zostanie usunięty i ustawisz własny PIN.",
  "A web-demó nem ad operációs rendszer szintű titkosítást: a kódok a böngésző tárolójában vannak. Valódi seed-mondatot vagy éles banki kódot majd a végleges appba tegyél (biometrikus zár, titkosított tár). Itt a folyamatot próbáld ki. A teljes mentésbe ez a rész SOSEM kerül bele.": "Wersja demo w przeglądarce nie zapewnia szyfrowania na poziomie systemu: kody leżą w pamięci przeglądarki. Prawdziwą frazę seed albo prawdziwy kod bankowy umieść dopiero w finalnej aplikacji (blokada biometryczna, szyfrowany magazyn). Tutaj wypróbuj sam przebieg. Do pełnej kopii zapasowej ta część NIGDY nie trafia.",
  "Súgó — hogyan fizetek, hogyan kérek": "Pomoc — jak płacę, jak proszę o wpłatę",
  "Fizetés, három lépés.": "Płatność w trzech krokach.",
  "1. Ő megmutatja az azonosító-QR-jét, vagy küld egy kérést. Te beolvasod: ettől nálad kitöltődik az űrlap.": "1. On pokazuje swój kod QR tożsamości albo wysyła prośbę. Ty go skanujesz: dzięki temu formularz u ciebie się wypełnia.",
  "2. Megadod az összeget és hogy miért, majd Fizetés elkészítése. A telefonod aláírja, és mutat egy QR-t.": "2. Podajesz kwotę i powód, następnie Przygotuj płatność. Twój telefon ją podpisuje i pokazuje kod QR.",
  "Ő beolvassa ezt a QR-t.": "On skanuje ten kod QR.",
  "Az érték ekkor kerül át hozzá — a telefonja ellenőrzi az aláírást, és jóváírja.": "Dopiero wtedy wartość przechodzi do niego — jego telefon sprawdza podpis i ją zapisuje.",
  "Pénzkérés.": "Prośba o pieniądze.",
  "Kérek gírát, beírod mennyit és miért, kapsz egy QR-t. Ő beolvassa, és nála kitöltve áll a fizetés, csak jóvá kell hagynia.": "Poproś o girę, wpisz ile i za co, a dostaniesz kod QR. On go zeskanuje i płatność stoi u niego wypełniona — musi ją tylko zatwierdzić.",
  "Miért két beolvasás?": "Dlaczego dwa skanowania?",
  "Mert az ő kódja csak azt mondja meg, kinek és mennyit. Az értéket a te aláírásod viszi át, és az a te QR-edben van. Amíg ő nem olvasta be, a tétel nálad „átadásra vár” jelöléssel áll.": "Bo jego kod mówi tylko, komu i ile. Wartość przenosi twój podpis, a ten jest w twoim kodzie QR. Dopóki on go nie zeskanuje, pozycja stoi u ciebie z oznaczeniem „czeka na przekazanie”.",
  "Minden a két telefon között megy, kamerával és képernyővel. Se szerver, se térerő.": "Wszystko odbywa się między dwoma telefonami, przez aparat i ekran. Ani serwera, ani zasięgu.",
  "Van, ahol a böngésző nem tud QR-t olvasni (jellemzően iPhone Safari). Ilyenkor a Beillesztés szövegből gomb ugyanazt tudja: a fizetés elkészítése után a QR alatti Szöveg másolása gombbal átküldöd a tételt üzenetben, ő pedig a Beillesztés szövegből gombbal beveszi. Az ellenőrzés ugyanúgy megtörténik, az aláírás a szövegben is benne van.": "Bywa, że przeglądarka nie potrafi odczytać kodu QR (zwykle Safari na iPhonie). Wtedy przycisk Wklej z tekstu robi to samo: po przygotowaniu płatności przyciskiem Kopiuj tekst pod kodem QR przesyłasz pozycję w wiadomości, a on przyjmuje ją przyciskiem Wklej z tekstu. Sprawdzenie przebiega tak samo, podpis jest zawarty także w tekście.",
  "a nevedben más nem tud fizetni (a titkos kulcs a telefonodon marad), és egy aláírt tétel utólag nem módosítható észrevétlenül.": "nikt inny nie może zapłacić w twoim imieniu (klucz prywatny zostaje na twoim telefonie), a podpisanej pozycji nie da się później niepostrzeżenie zmienić.",
  "offline a kettős költést megelőzni nem lehet. Ha valaki ugyanazt a gírát két embernek adja, az akkor derül ki, amikor a két tétel találkozik — és a saját aláírása bizonyítja. Ezért érdemes időnként összefésülni a könyveket a közösségben.": "offline nie da się zapobiec podwójnemu wydaniu. Jeśli ktoś da tę samą girę dwóm osobom, wyjdzie to na jaw, gdy obie pozycje się spotkają — i dowodzi tego jego własny podpis. Dlatego warto od czasu do czasu uzgadniać księgi we wspólnocie.",
  "Rekesz": "Przegroda",
  "Kripto-kulcsok": "Klucze kryptograficzne",
  "Új bejegyzés": "Nowy wpis",
  "Seed-mondatnál a papír-másolat nem elavult ötlet: egy elveszett vagy letörölt telefon a kulcsot is viszi. Amit ide beírsz, azt tartsd meg máshol is.": "Przy frazie seed kopia na papierze nie jest przestarzałym pomysłem: zgubiony albo wyczyszczony telefon zabiera też klucz. To, co tu wpiszesz, zachowaj również gdzie indziej.",
  "PIN-nel védett helyi tároló okmányokhoz (szig, jogosítvány, TAJ, biztosítás, forgalmi).": "Chroniony PIN-em lokalny magazyn na dokumenty (dowód, prawo jazdy, karta ubezpieczenia, polisa, dowód rejestracyjny).",
  "A PIN és a dokumentumok CSAK ezen az eszközön, a böngésződben tárolódnak — a vészkártyával ellentétben ezt csak te nyithatod meg. Figyelem: a web-demó nem nyújt OS-szintű titkosítást; VALÓDI okmányokat majd a végleges appba tölts (biometrikus zár, titkosított tár). Itt a folyamatot teszteld.": "PIN i dokumenty są przechowywane WYŁĄCZNIE na tym urządzeniu, w twojej przeglądarce — w odróżnieniu od karty ratunkowej otworzysz je tylko ty. Uwaga: wersja demo nie zapewnia szyfrowania na poziomie systemu; PRAWDZIWE dokumenty wgraj dopiero do finalnej aplikacji (blokada biometryczna, szyfrowany magazyn). Tutaj przetestuj sam przebieg.",
  "Szűrés: kinek az iratait mutassuk": "Filtr: czyje dokumenty pokazać",
  "Új dokumentum": "Nowy dokument",
  "Ehhez a dokumentumhoz: kié? Személy, állat vagy jármű. Ha egyiket sem jelölöd, közösként mentjük.": "Do tego dokumentu: czyj jest? Osoba, zwierzę czy pojazd. Jeśli nic nie zaznaczysz, zapiszemy go jako wspólny.",
  "Magyar": "Magyar",
  "véglegesen": "na stałe",
  "szól erre a készülékre, nincs lejárata és nincs megújítás. Ha kódot kaptál, itt válthatod be.": "dotyczy tego urządzenia, bez terminu ważności i bez odnawiania. Jeśli dostałeś kod, tutaj możesz go zrealizować.",
  "Kód beváltása": "Zrealizuj kod",
  "Névjegy": "O aplikacji",
  "PrepperPapa — vészhelyzeti prepper eszköztár.": "PrepperPapa — zestaw narzędzi na sytuacje kryzysowe.",
  "Verzió:": "Wersja:",
  "Web-demo a gyors próbához. A végleges app: Flutter, Google Play.": "Demo w przeglądarce do szybkiego wypróbowania. Finalna aplikacja: Flutter, Google Play.",
  "Teljes fejadattal számol: 3 liter fő/nap. Ez a helyben maradáshoz és az autós úthoz való — nyaraló, tábor, otthon.": "Liczy pełną rację: 3 litry na osobę dziennie. To do pozostania na miejscu i podróży samochodem — domek letniskowy, obóz, dom.",
  "Ki tartozik a háztartáshoz és hol vannak a helyszíneid. A készültségi számítás ebből dolgozik.": "Kto należy do gospodarstwa domowego i gdzie są twoje miejsca. Obliczenie gotowości korzysta z tych danych.",
  "Még nincs családtag felvéve.": "Nie dodano jeszcze żadnego członka rodziny.",
  "Még nincs állat felvéve.": "Nie dodano jeszcze żadnego zwierzęcia.",
  "Még nincs jármű felvéve. Autó, kisbusz, lakókocsi vagy hajó lehet.": "Nie dodano jeszcze pojazdu. Może to być samochód, bus, przyczepa kempingowa lub łódź.",
  "Még nincs helyszín felvéve. Alapesetben az otthon az első.": "Nie dodano jeszcze żadnego miejsca. Domyślnie dom jest pierwszy.",
  "Születési dátum": "Data urodzenia",
  "Ki ő": "Kim jest",
  "kiskorú": "niepełnoletni",
  "Neme (gyereknél)": "Płeć (u dziecka)",
  "lány": "dziewczynka",
  "kutya": "pies",
  "macska": "kot",
  "Teherbírás (kg)": "Udźwig (kg)",
  "Testtömeg (kg)": "Masa ciała (kg)",
  "Laktóz": "Laktoza",
  "Tojás": "Jajko",
  "Szója": "Soja",
  "Penicillin": "Penicylina",
  "Pollen": "Pyłki",
  "Poratka": "Roztocza kurzu",
  "Latex": "Lateks",
  "Jód": "Jod",
  "Típus": "Typ",
  "· vagy egy bemásolt Google Térkép-link. Ha nem tudom értelmezni, szólok — üresen nem mentem el.": "· albo wklejony link z Map Google. Jeśli nie zdołam go zinterpretować, dam znać — pustego nie zapiszę.",
  "Megközelítés": "Dojazd",
  "nem (csak árammal/gázzal)": "nie (tylko prądem/gazem)",
  "Víz áram nélkül is?": "Woda także bez prądu?",
  "nem (vezetékes/szivattyús)": "nie (wodociąg/pompa)",
  "Napi fűtésigény (kWh)": "Dzienne zapotrzebowanie na ogrzewanie (kWh)",
  "Kijáratok száma": "Liczba wyjść",
  "Több": "Więcej",
  "Morze · fax · helyi szoba": "Morse · faks · pokój lokalny",
  "Térkép": "Mapa",
  "Kockázatelemzés": "Analiza ryzyka",
  "Mit vigyek?": "Co zabrać?",
  "Titkosított üzenet · helyzet · lista": "Zaszyfrowana wiadomość · położenie · lista",
  "Ezen a készüléken a böngésző nem éri el a légnyomás-szenzort, ezért kézzel kell bevinni az értéket. A telefonos appban magától mér majd. Addig is: írj be egy értéket, és a trendet innentől számolja.": "Na tym urządzeniu przeglądarka nie ma dostępu do czujnika ciśnienia, dlatego wartość trzeba wpisać ręcznie. W aplikacji telefonicznej będzie mierzyć sama. Na razie: wpisz wartość, a trend będzie liczony od tego momentu.",
  "Két mérés kell a trendhez.": "Do trendu potrzebne są dwa pomiary.",
  "Ha autóval hegyre mész, a nyomás esik, de nem jön vihar: száz méter emelkedés körülbelül 12 hPa. Ilyen napon ne vedd komolyan a jelzést.": "Jeśli jedziesz samochodem w góry, ciśnienie spada, ale burza nie nadchodzi: sto metrów wzniesienia to około 12 hPa. W taki dzień nie traktuj ostrzeżenia poważnie.",
  "Kalkulátor": "Kalkulator",
  "Meddig visz el egy powerbank vagy egy akku": "Na jak długo starczy powerbank albo akumulator",
  "Mennyi fa vagy gáz kell N napra": "Ile drewna albo gazu potrzeba na N dni",
  "Mennyi gyűlik össze a tetőről": "Ile zbierze się z dachu",
  "Menetidő": "Czas przejścia",
  "Meddig tart gyalog, és odaérsz-e világosban": "Ile zajmie pieszo i czy dotrzesz za dnia",
  "Villám": "Piorun",
  "Milyen messze van a vihar": "Jak daleko jest burza",
  "Víztisztítás": "Uzdatnianie wody",
  "Mennyi hipó kell, és meddig kell forralni": "Ile potrzeba wybielacza i jak długo gotować",
  "Mennyi víz": "Ile wody",
  "Milyen a víz": "Jaka jest woda",
  "Tiszta, átlátszó": "Czysta, przejrzysta",
  "Zavaros, hideg vagy színes": "Mętna, zimna lub zabarwiona",
  "Tengerszint feletti magasság (méter)": "Wysokość nad poziomem morza (metry)",
  "Saját / kézi megadás": "Własne / ręcznie",
  "Powerbank 20 000 mAh (~74 Wh)": "Powerbank 20 000 mAh (~74 Wh)",
  "Kapacitás (Wh)": "Pojemność (Wh)",
  "Max. teljesítmény (W)": "Maks. moc (W)",
  "Jackery Explorer 1000: 1002 Wh tárolt energia, 1000 W folyamatos kimenet": "Jackery Explorer 1000: 1002 Wh zmagazynowanej energii, 1000 W mocy ciągłej",
  "Mit üzemeltetnél? (hány darab · watt · naponta mennyit)": "Co chcesz zasilać? (ile sztuk · waty · ile dziennie)",
  "nem használom": "nie używam",
  "negyed óra": "kwadrans",
  "fél óra": "pół godziny",
  "1 óra": "1 godzina",
  "2 óra": "2 godziny",
  "3 óra": "3 godziny",
  "4 óra": "4 godziny",
  "5 óra": "5 godzin",
  "6 óra": "6 godzin",
  "8 óra": "8 godzin",
  "10 óra": "10 godzin",
  "12 óra": "12 godzin",
  "16 óra": "16 godzin",
  "egész nap": "cały dzień",
  "Telefon töltés": "Ładowanie telefonu",
  "LED lámpa": "Lampa LED",
  "Wifi router": "Router Wi-Fi",
  "Rádió, PMR": "Radio, PMR",
  "Laptop": "Laptop",
  "TV": "Telewizor",
  "Szivattyú, kút": "Pompa, studnia",
  "Vízforraló": "Czajnik elektryczny",
  "Van napelemed?": "Masz panel słoneczny?",
  "Melyik évszakban?": "W jakiej porze roku?",
  "Milyen idő van?": "Jaka jest pogoda?",
  "A panel névleges teljesítménye (W)": "Moc znamionowa panelu (W)",
  "+ Saját eszköz hozzáadása": "+ Dodaj własne urządzenie",
  "Mi ez? (pl. oxigénkoncentrátor)": "Co to jest? (np. koncentrator tlenu)",
  "Megnézem a boltban ↗": "Zobacz w sklepie ↗",
  "nyár (június-augusztus)": "lato (czerwiec-sierpień)",
  "tavasz (március-május)": "wiosna (marzec-maj)",
  "ősz (szeptember-november)": "jesień (wrzesień-listopad)",
  "tél (december-február)": "zima (grudzień-luty)",
  "derült, napos": "bezchmurnie, słonecznie",
  "változó, felhős": "zmiennie, pochmurno",
  "borult, esős": "zachmurzenie, deszczowo",
  "nincs napelem": "brak panelu",
  "saját panel — megadom a wattot": "własny panel — podam waty",
  "Panel": "Panel",
  "Milyen a ház": "Jaki jest dom",
  "Jól szigetelt (60 W/m²)": "Dobrze ocieplony (60 W/m²)",
  "Rossz, régi (140 W/m²)": "Słaby, stary (140 W/m²)",
  "Mivel fűtesz": "Czym ogrzewasz",
  "PB-gáz palackkal": "Butlą z gazem płynnym",
  "Tetőfelület vízszintes vetülete (m²)": "Rzut poziomy powierzchni dachu (m²)",
  "Mennyi eső esett vagy várható (mm)": "Ile deszczu spadło lub jest spodziewane (mm)",
  "Menetidő gyalog": "Czas przejścia pieszo",
  "Távolság (km)": "Odległość (km)",
  "Milyen terep": "Jaki teren",
  "Jó út, sík (5 km/h)": "Dobra droga, płasko (5 km/h)",
  "Ösvény, erdei út (4 km/h)": "Ścieżka, droga leśna (4 km/h)",
  "Nehéz terep, hó, sár (3 km/h)": "Trudny teren, śnieg, błoto (3 km/h)",
  "Mit viszel": "Co niesiesz",
  "Könnyű, napi cucc": "Lekki, codzienny bagaż",
  "Megpakolt hátizsák": "Wypakowany plecak",
  "Nehéz teher vagy gyerekkel": "Ciężki ładunek albo z dzieckiem",
  "Villám: milyen messze van": "Piorun: jak daleko jest",
  "Nyomd meg a villanáskor, aztán újra, amikor meghallod a dörgést.": "Naciśnij przy błysku, a potem ponownie, gdy usłyszysz grzmot.",
  "Villanás": "Błysk",
  "Jelszó": "Hasło",
  "Jelszó mentése": "Zapisz hasło",
  "Nincs saját jelszó.": "Brak własnego hasła.",
  "beállítva": "ustawione",
  "Tudástár: a cikkekből most már tizennyolc helyen gomb vezet át az app funkcióira (Készlet, Vészkártya, Kockázatelemzés, Tudástár).": "Baza wiedzy: w osiemnastu miejscach przyciski prowadzą teraz z artykułów do funkcji aplikacji (Zapasy, Karta ratunkowa, Analiza ryzyka, Baza wiedzy).",
  "Irattárca és Token tárca: a tartalom mostantól titkosítva tárolódik, a kulcs a PIN-edből készül, a PIN-t nem tároljuk. Az első belépéskor a meglévő adatod magától átkerül titkosított formába. Fontos: elfelejtett PIN mellett a tartalom nem állítható vissza.": "Portfel dokumentów i portfel tokenów: zawartość jest teraz przechowywana w postaci zaszyfrowanej, klucz powstaje z twojego PIN-u, a PIN nie jest zapisywany. Przy pierwszym otwarciu istniejące dane automatycznie zostaną zaszyfrowane. Ważne: po zapomnieniu PIN-u zawartości nie da się odzyskać.",
  "A kódok titkosítva tárolódnak ezen az eszközön: a kulcs a PIN-edből készül (AES-256), magát a PIN-t nem tároljuk. Ha elfelejted a PIN-t, a tartalom nem állítható vissza, ezért a seed-mondatról tarts papírmásolatot is. A teljes mentésbe ez a rész SOSEM kerül bele.": "Kody są przechowywane w postaci zaszyfrowanej na tym urządzeniu: klucz powstaje z twojego PIN-u (AES‑256), a sam PIN nie jest zapisywany. Jeśli zapomnisz PIN, zawartości nie da się odzyskać, więc trzymaj też papierową kopię frazy seed. Ta część NIGDY nie trafia do pełnej kopii zapasowej.",
  "A dokumentumok CSAK ezen az eszközön tárolódnak, a PIN-edből képzett kulccsal titkosítva (AES-256) — a vészkártyával ellentétben ezt csak te nyithatod meg. A PIN-t nem tároljuk: ha elfelejted, a dokumentumok nem állíthatók vissza.": "Dokumenty są przechowywane TYLKO na tym urządzeniu, zaszyfrowane kluczem utworzonym z twojego PIN-u (AES‑256) — w przeciwieństwie do karty ratunkowej tylko ty możesz je otworzyć. PIN nie jest zapisywany: jeśli go zapomnisz, dokumentów nie da się odzyskać.",
  "Tudástár: a cikkekben álló hivatkozások (például „a 20.2 cikk”) kattinthatók, és a cikkekből gomb vezet át az app megfelelő funkciójára.": "Baza wiedzy: odwołania w artykułach (na przykład „artykuł 20.2”) są klikalne, a przyciski w artykułach prowadzą do odpowiedniej funkcji aplikacji.",
  "Vagyonkezelő: új, választós oldalak saját legördülő listával.": "Majątek: nowe strony wyboru z własną listą rozwijaną.",
  "Térkép, navigáció: alul egy sáv mutatja a hátralévő és a megtett utat, a sebességet és a várható érkezést; a sarkában a leállító gomb.": "Mapa, nawigacja: pasek na dole pokazuje pozostały i przebyty dystans, prędkość i przewidywany czas przybycia; w rogu przycisk zatrzymania.",
  "Térkép, navigáció: tervezett útvonalon a ▲ gomb megnyitja a szintgrafikont: hol vagy, merre emelkedik vagy lejt az út, mennyit kell még mászni, és mikor jön a következő emelkedő.": "Mapa, nawigacja: na zaplanowanej trasie przycisk ▲ otwiera profil wysokości: gdzie jesteś, gdzie trasa wznosi się lub opada, ile podejścia zostało i kiedy będzie następne podejście.",
  "Tudástár: ötvenegy új kép került a cikkekbe, így már mind a kilencvenkilenc cikkben legalább két kép van.": "Baza wiedzy: pięćdziesiąt jeden nowych zdjęć, wszystkie dziewięćdziesiąt dziewięć artykułów ma teraz co najmniej dwa zdjęcia.",
  "Közös ima · stopper": "Wspólna modlitwa · minutnik",
  "Folytatás": "Wznów",
  "Újra": "Jeszcze raz",
  "Letelt az idő. Az Újra gombbal még egy kör indul.": "Czas minął. Dotknij Jeszcze raz, aby zacząć kolejną rundę.",
  "Vége. Az Újra gombbal elölről kezdheted.": "Koniec. Jeszcze raz zaczyna od nowa.",
  "Második kör": "Druga runda",
  "Ima-stopper": "Minutnik modlitwy",
  "Útvonal": "Trasa",
  "Körút": "Pętla",
  "igen": "tak",
  "MTSZ-szám": "Nr MTSZ",
  "Jelzés festve": "Znakowanie malowane",
  "Weboldal": "Strona",
  "Az út mentén": "Wzdłuż trasy",
  "menetidő": "czas marszu",
  "érkezés": "przybycie",
  "ó": "godz",
  "p": "min",
  "Magassági adat nélkül, az emelkedőkkel nem számolva.": "Bez danych wysokości, podejścia nieuwzględnione.",
  "Imák: a lista alján egy kis harang gomb nyitja a közös imához való stoppert. Te állítod be a perceket; lejáratkor halkan csilingel, és amíg nem nyúlsz hozzá, tízmásodpercenként újra jelez. Az Újra gomb még egy kört indít, annak a végén egyszer csilingel, és leáll.": "Modlitwy: mały przycisk dzwonka na dole listy otwiera minutnik do wspólnej modlitwy. Ustawiasz minuty; na końcu cicho dzwoni i powtarza co dziesięć sekund, aż go dotkniesz. Jeszcze raz uruchamia kolejną rundę, która na końcu dzwoni raz i się zatrzymuje.",
  "Imák: a stopper harang gombja az app saját ikon-stílusát kapta.": "Modlitwy: przycisk dzwonka minutnika ma teraz styl ikon aplikacji.",
  "Tudástár: harminckilenc új kép került a prémium cikkekbe, így már szinte minden cikkben van kép.": "Baza wiedzy: do artykułów premium trafiło trzydzieści dziewięć nowych zdjęć, więc prawie każdy artykuł ma już zdjęcie.",
  "Tudástár: a már letöltött prémium cikkek is frissülnek, ha új változat jelenik meg. A PMR446 cikkbe bekerült a csatornák frekvencia-táblázata és a digitális PMR.": "Baza wiedzy: pobrane już artykuły premium aktualizują się, gdy pojawi się nowa wersja. Artykuł o PMR446 zawiera teraz tabelę częstotliwości kanałów i cyfrowy PMR.",
  "Tudástár: tizenöt prémium cikkben megjelentek a képek, tizenegy cikk új képet kapott.": "Baza wiedzy: w piętnastu artykułach premium pojawiły się zdjęcia, jedenaście artykułów dostało nowe zdjęcie.",
  "Újdonságok: a korábbi bejegyzések is olvashatók most már minden nyelven.": "Nowości: wcześniejsze wpisy są teraz dostępne w każdym języku.",
  // Ujdonsagok v43.126-v43.138 (2026-10-12 22:1x, hianypotlas)
  "Szobák: ha a „Csak neki” címzés látszik, az üzenet biztosan privátként megy el. Ha a címzés egy másik szobából maradt itt, az app nem küldi el csoportba, hanem szól, hogy válaszd ki újra a címzettet.": "Pokoje: jeśli widać adresowanie „Tylko do”, wiadomość na pewno pójdzie jako prywatna. Jeśli adresowanie zostało z innego pokoju, aplikacja nie wyśle jej do grupy, tylko poprosi o ponowny wybór odbiorcy.",
  "Vagyonkezelő: az euró, a dollár és a nemesfémek árfolyama internet mellett magától frissül (a Magyar Nemzeti Bank és a tőzsdei ár alapján). A kézzel beírt érték marad.": "Majątek: kursy euro, dolara i metali szlachetnych aktualizują się same przy dostępie do internetu (na podstawie Węgierskiego Banku Narodowego i cen giełdowych). Wartość wpisana ręcznie zostaje.",
  "Vagyonkezelő: kikerültek belőle a cégspecifikus részek, csak az általános pénzügyi funkciók maradtak.": "Majątek: usunięto z niego części specyficzne dla firmy, zostały tylko ogólne funkcje finansowe.",
  "Vagyonkezelő: bal oldali menü (a bal felső gombbal). Minden menüpont egy témát mutat, így nem kell végtelen hosszan görgetni. A főoldalon a számlák egyenlege csempékben.": "Majątek: menu po lewej stronie (przyciskiem w lewym górnym rogu). Każda pozycja menu pokazuje jeden temat, więc nie trzeba bez końca przewijać. Na stronie głównej salda kont w kafelkach.",
  "Visszajelzés: a „Bejelentéseim” alatt látod a saját bejelentéseidet, és hogy hol tart mindegyik. A kijavított hibánál egy koppintással jelezheted, hogy nálad is működik-e.": "Opinie: w „Moich zgłoszeniach” widzisz własne zgłoszenia i na jakim etapie jest każde z nich. Przy naprawionym błędzie jednym dotknięciem potwierdzisz, czy u ciebie też działa.",
  "Újdonságok: verziónként itt olvasható, mi változott és mi lett javítva.": "Nowości: tu przeczytasz, wersja po wersji, co się zmieniło i co zostało naprawione.",
  "Biblia: egyszerre több olvasási tervet is követhetsz, a „Másik terv” gombbal válthatsz köztük. A haladás tervenként megmarad.": "Biblia: możesz śledzić kilka planów czytania naraz i przełączać się między nimi przyciskiem „Inny plan”. Postęp zostaje zapisany dla każdego planu.",
  "Biblia: „A Biblia egy év alatt” heti felosztásban is választható, 52 hétre bontva.": "Biblia: „Biblia w rok” jest też dostępna w podziale tygodniowym, na 52 tygodnie.",
  "Biblia: a „Terv leállítása” gomb a terv tetején is ott van, nem kell a lista aljáig görgetni érte.": "Biblia: przycisk „Zatrzymaj plan” jest teraz także na górze planu, nie trzeba przewijać do końca listy.",
  "Biztonsági javítások a Szobákban és a prémium tartalmak védelmében.": "Poprawki bezpieczeństwa w Pokojach i w ochronie treści premium.",
  "Szobák: elrejtett üzenetről már nem jön értesítés.": "Pokoje: o ukrytych wiadomościach nie przychodzą już powiadomienia.",
  "Gíra: ha a névjegy elsőre nem ért célba, magától újra elküldődik.": "Gira: jeśli wizytówka nie dotarła za pierwszym razem, zostanie wysłana ponownie automatycznie.",
  "Gíra: a közösséghez később csatlakozó tag is megkapja a közösség jelzéseit.": "Gira: członek, który dołączy do społeczności później, także otrzymuje sygnały społeczności.",
  "A kezdőképernyőre tett webes ikon ugyanaz lett, mint a telepített alkalmazásé.": "Ikona internetowa dodana do ekranu głównego jest teraz taka sama jak ikona zainstalowanej aplikacji.",
  "Térkép: a funkciók ikonos csempékben jelennek meg, az iránytű folyamatosan forog.": "Mapa: funkcje pojawiają się jako kafelki z ikonami, kompas obraca się płynnie.",
  "Szobák: a tagok egymásnak is átadhatják a szoba titkosító kulcsát, így új eszközön is olvasható minden korábbi üzenet.": "Pokoje: członkowie mogą też przekazywać sobie nawzajem klucz szyfrujący pokoju, dzięki czemu na nowym urządzeniu można przeczytać wszystkie wcześniejsze wiadomości.",
  "Titkos QR: a családi jelszó egy összecsukható sor lett az oldal tetején, színes jelzéssel (be van-e állítva). Így az oldal rögtön a kód készítésével kezdődik.": "Tajny QR: hasło rodzinne jest teraz zwijanym wierszem u góry strony, z kolorowym oznaczeniem (czy jest ustawione). Dzięki temu strona od razu zaczyna się od tworzenia kodu.",
  "Közös jelszó: koppints a Családi jelszó sorra, és adj meg egy mondatot, amit csak ti tudtok. Ugyanaz kell mindkét telefonon; mentsd el.": "Wspólne hasło: dotknij wiersza Hasło rodzinne i wpisz zdanie, które znacie tylko wy. Na obu telefonach potrzebne jest to samo; zapisz je.",
  "nincs beállítva": "nie ustawiono",
  "Saját jelszó nélkül a beépített kulcs véd, ami MINDEN PrepperPapa-készüléken megvan. Az idegen, aki sima szkennerrel ránéz, csak betűsort lát, de aki letöltötte az appot, elolvassa. Ez álcázás, nem titkosítás.": "Bez własnego hasła chroni cię wbudowany klucz, który ma KAŻDE urządzenie z PrepperPapa. Obcy, który spojrzy zwykłym skanerem, zobaczy tylko ciąg znaków, ale kto pobrał aplikację, ten odczyta. To maskowanie, nie szyfrowanie.",
  "Kód készítése": "Utwórz kod",
  "Mit teszel bele?": "Co w nim umieścisz?",
  "Lista": "Lista",
  "Személyes adat": "Dane osobowe",
  "Koordináta": "Współrzędne",
  "Lista címe": "Tytuł listy",
  "Sorok (soronként egy)": "Wiersze (po jednym w linii)",
  "QR készítése": "Utwórz QR",
  "Morze fénnyel": "Morse światłem",
  "Morze hanggal": "Morse dźwiękiem",
  "Rádión ne add le.": "Nie nadawaj przez radio.",
  "Az amatőr sávokon tilos információrejtő módszert alkalmazni (15/2013. NMHH rendelet 15. § (6) e)), és a forgalmazást közérthető nyelven kell folytatni (15. § (4)). Ez a kód egyikbe sem fér bele, és a saját jelszó nélkül készült változatra is áll. Morzézni szabad, rejtett tartalmat leadni nem. QR-kódban, papíron, kézből átadva használható.": "Na pasmach amatorskich zabronione jest stosowanie metod ukrywania informacji (węgierskie rozporządzenie NMHH 15/2013, § 15 ust. 6 lit. e), a łączność należy prowadzić w języku zrozumiałym (§ 15 ust. 4). Ten kod nie spełnia żadnego z tych wymogów, i dotyczy to również wersji utworzonej bez własnego hasła. Nadawać Morse'em wolno, ukrytych treści nie. W kodzie QR, na papierze, przekazany z ręki do ręki — można go używać.",
  "Kód beolvasása": "Zeskanuj kod",
  "Vagy írd be a betűsort (morzéból, faxról)": "Albo wpisz ciąg znaków (z Morse'a, z faksu)",
  "Megfejtés": "Odszyfrowanie",
  "Ahogy üzenni tudsz, amikor a telefonhálózat nem segít. Válaszd ki, mivel próbálkozol: a helyi szoba szöveget visz a közeledben lévőknek, a hang pedig ott is átmegy, ahol semmilyen hálózat nincs.": "Sposoby przesłania wiadomości, gdy sieć telefoniczna nie pomaga. Wybierz, czego spróbujesz: pokój lokalny przenosi tekst do osób w pobliżu, a dźwięk przechodzi także tam, gdzie nie ma żadnej sieci.",
  "szöveg, hálón": "tekst, w sieci",
  "Szöveg a közeledben lévőknek, közös hálón, internet nélkül": "Tekst do osób w pobliżu, we wspólnej sieci, bez internetu",
  // MESH (Fonok, 2026-10-06 21:44 es 21:47): a helyi szoba neve es leirasa a mesh-halozatot
  // is kimondja -- ez ugyanaz a szoba, csak a nevevel egyutt most a technologiat is viszi.
  "Helyi szoba (mesh)": "Pokój lokalny (mesh)",
  "Mesh-hálózat: szöveg a közeledben lévőknek, internet nélkül": "Sieć mesh: tekst do osób w pobliżu, bez internetu",
  "Szobák (interneten)": "Pokoje (przez internet)",
  "Zárt csoportok távolról is, belépés a szoba gazdájának jóváhagyásával": "Zamknięte grupy również zdalnie, wejście za zgodą właściciela pokoju",
  "Rövid üzenet hanggal vagy fénnyel, vétel kamerával és mikrofonnal": "Krótka wiadomość dźwiękiem lub światłem, odbiór aparatem i mikrofonem",
  "Kép átküldése hangban, rádión is": "Przesyłanie obrazu dźwiękiem, także przez radio",
  "névtelen (te)": "anonimowy (ty)",
  "Ez a modul akkor működik, ha a készülékek egy hálón vannak, és azon valaki futtatja a szobát. Internet nem kell hozzá.": "Ten moduł działa, gdy urządzenia są w jednej sieci i ktoś prowadzi w niej pokój. Internet nie jest do tego potrzebny.",
  "kapcsold be a telefonodon a mobil hotspotot (vagy használjatok egy közös routert), a többiek csatlakozzanak rá, és nyissák meg ugyanazt a címet, amit te. Aki megnyitotta, az bent van a szobában.": "włącz w telefonie hotspot mobilny (albo użyjcie wspólnego routera), pozostali niech się z nim połączą i otworzą ten sam adres, co ty. Kto go otworzył, jest w pokoju.",
  "Közös jelszó. Aki ugyanezt adja meg, az olvassa az üzeneteket, akinek nincs meg, annak értelmetlen betűsor marad. A kulcsot NE a szobában küldd el, hanem élőszóban vagy papíron add át.": "Wspólne hasło. Kto poda to samo, odczyta wiadomości; kto go nie ma, zobaczy bezsensowny ciąg znaków. Klucza NIE wysyłaj w pokoju — przekaż go ustnie albo na papierze.",
  "Nincs kulcs. Az üzenetek nyíltan mennek: aki a hálón van és megnyitja a szobát, olvassa őket.": "Brak klucza. Wiadomości idą otwarcie: kto jest w sieci i otworzy pokój, ten je przeczyta.",
  "Szobák": "Pokoje",
  "Még egy szobában sem vagy benne.": "Nie jesteś jeszcze w żadnym pokoju.",
  "Nyitott közösségek. Egy koppintás, és megy a jelentkezésed — a szoba gazdája engedi be.": "Otwarte społeczności. Jedno stuknięcie i twoje zgłoszenie idzie dalej — wpuszcza właściciel pokoju.",
  "Új szoba": "Nowy pokój",
  "Te leszel a gazdája. Aki csatlakozni akar, kérelmet küld, és te döntöd el, beengeded-e. A szoba kódját add meg nekik, azzal találnak rá.": "Zostaniesz jego właścicielem. Kto chce dołączyć, wysyła prośbę, a ty decydujesz, czy go wpuścisz. Podaj im kod pokoju — dzięki niemu go znajdą.",
  "Szoba létrehozása": "Utwórz pokój",
  "Írd be a szoba kódját. A gazda jóváhagyásáig nem látod az üzeneteket.": "Wpisz kod pokoju. Do zatwierdzenia przez właściciela nie zobaczysz wiadomości.",
  "Kérelem küldése": "Wyślij prośbę",
  "A böngészőben letiltottad az értesítést. A telefon beállításainál lehet visszaadni — innen nem tudom.": "Zablokowałeś powiadomienia w przeglądarce. Można je przywrócić w ustawieniach telefonu — stąd nie mogę.",
  "Próba": "Test",
  "Szoba": "Pokój",
  "Kapcsolódás...": "Łączenie...",
  "Sürgős": "Pilne",
  "Meghívó": "Zaproszenie",
  "Készíts egy meghívót, és küldd át annak, akit be akarsz hívni. Ő megnyitja, és bent van — nem kell külön jóváhagynod, és nem kell a szoba kódját közhírré tenni.": "Utwórz zaproszenie i wyślij je osobie, którą chcesz zaprosić. Ona je otworzy i jest w środku — nie musisz nic dodatkowo zatwierdzać ani rozgłaszać kodu pokoju.",
  "Meghívó készítése": "Utwórz zaproszenie",
  "Vagy legyen nyitott:": "Albo niech będzie otwarty:",
  "ha kirakod, a szoba megjelenik mindenkinél a „Csatlakozz\" listában, és jelentkezni tudnak rá. Beengedni akkor is te engeded be őket.": "jeśli go udostępnisz, pokój pojawi się u wszystkich na liście „Dołącz\" i będą mogli się zgłaszać. Wpuszczasz ich i tak ty.",
  "Jelenjen meg a Csatlakozz listában": "Pokaż na liście Dołącz",
  "Ez látszik a csempén, ezen ismerik fel. Fényképet válassz, ne rajzot — kis méretben az mond valamit. A telefonod a képet magától lekicsinyíti.": "To widać na kafelku, po tym go rozpoznają. Wybierz zdjęcie, nie rysunek — w małym rozmiarze to mówi więcej. Twój telefon sam pomniejszy obraz.",
  "Kép törlése": "Usuń obraz",
  "Ez a másik út: aki a kódot ismeri, kérelmet küldhet, és te döntöd el, beengeded-e. Meghívóval egyszerűbb.": "To druga droga: kto zna kod, może wysłać prośbę, a ty decydujesz, czy go wpuścisz. Z zaproszeniem jest prościej.",
  "Kihagyom": "Pomijam",
  "Tovább": "Dalej",
  "Tartsd a vonalkódot a keretbe.": "Trzymaj kod kreskowy w ramce.",
  "Húzd az ujjad: vízszintben a szín, függőlegesen a fényerő. Koppints a képernyőre a gombok elrejtéséhez / előhozásához.": "Przesuwaj palcem: w poziomie kolor, w pionie jasność. Stuknij w ekran, aby ukryć / pokazać przyciski.",
  "Piros": "Czerwony",
  "Zöld": "Zielony",
  "Villogás": "Miganie",
  "LED ki": "LED wył.",
  "PrepperPapa": "PrepperPapa",
  "SSTV": "SSTV",
  "WAV": "WAV",
  "ForTiPrep": "ForTiPrep",
  "Leaflet": "Leaflet",
  "© OpenStreetMap": "© OpenStreetMap",
  "Jackery Explorer 240": "Jackery Explorer 240",
  "Jackery Explorer 1000": "Jackery Explorer 1000",
  "PowerMax 2400 Pro": "PowerMax 2400 Pro",
  "LiFePO4 100 Ah (12 V)": "LiFePO4 100 Ah (12 V)",
  "47°29'52.4\"N 19°02'24.7\"E": "47°29'52.4\"N 19°02'24.7\"E",
  "otthon": "dom",
  "Teszt autó": "Testowy samochód",
  "Teszt Apa": "Testowy Tata",
  "Teszt Anya": "Testowa Mama",
  "Teszt Gyerek": "Testowe Dziecko",
  "Víz": "Woda",
  "Étel": "Jedzenie",
  "Azaz": "Czyli",
  "nincs ide rendelt készlet": "brak przypisanego zapasu",
  "Készültség": "Gotowość",
  "Készlet": "Zapas",
  "Kockázat": "Ryzyko",
  "Közösség": "Wspólnota",
  "Iránytű": "Kompas",
  "Fény": "Światło",
  "Vagyonkezelő": "Majątek",
  "Otthon ": "Dom ",
  "nincs megadva, ki jön": "nie podano, kto przyjdzie",
  "Nincs megadva, ki érkezik ide.": "Nie podano, kto tu dotrze.",
  "Kik érkeznek ide:": "Kto tu dotrze:",
  "Mi van itt (nincs ide rendelt tétel)": "Co tu jest (brak przypisanych pozycji)",
  "Sípolás": "Gwizdek",
  "Ütem indítása": "Uruchom rytm",
  "vércsoport hiányzik · nincs ismert allergia": "brak grupy krwi · brak znanych alergii",
  "Rögzítés a térképre (itt vagyok most)": "Zapisz na mapie (jestem tu teraz)",
  "Kezdőlapon látszik ✓": "Widoczne na stronie głównej ✓",
  "+ Új családtag": "+ Nowy członek rodziny",
  "Otthon · készültség: nincs adat": "Dom · gotowość: brak danych",
  "Jármű · készültség: nincs adat": "Pojazd · gotowość: brak danych",
  "Ez a készülék nem ad iránytű-adatot, vagy nincs rá engedély. A nap és hold rész ettől függetlenül működik.": "To urządzenie nie podaje danych kompasu albo brak na to zgody. Część o słońcu i księżycu działa niezależnie od tego.",
  "víz 5 liter elemlámpa gyógyszerek": "woda 5 litrów latarka leki",
  "Ennyi holdfénynél nyílt terepen lámpa nélkül is lehet menni.": "Przy takim świetle księżyca w otwartym terenie można iść nawet bez latarki.",
  "A számítás a térkép utolsó nézete alapján készült, néhány perc pontossággal.": "Obliczenie oparto na ostatnim widoku mapy, z dokładnością do kilku minut.",
  "A böngészőben letiltottad. A telefon beállításainál lehet visszaadni.": "Zablokowałeś to w przeglądarce. Można przywrócić w ustawieniach telefonu.",
  "Kapcsolódva · egyedül vagy a szobában": "Połączono · jesteś sam w pokoju",
  "növekvő hold, 82%": "księżyc przybywający, 82%",
  "Súgó": "Pomoc",
  "Frissítés": "Odśwież",
  "Éjszakai mód": "Tryb nocny",
  "Tájoló": "Orientacja",
  "Kalkulátorok": "Kalkulatory",
  "Gyülekező": "Zbiórka",
  "Másikat": "Inne",
  "Másik tanács": "Inna rada",
  "Keresés a tudástárban…": "Szukaj w bazie wiedzy…",
  "Megnevezés (pl. Palackozott víz)": "Nazwa (np. Woda butelkowana)",
  "a dobozról, pl. 380": "z opakowania, np. 380",
  "pl. 37 vagy 2000": "np. 37 albo 2000",
  "teli tank, liter vagy kWh": "pełny zbiornik, litry albo kWh",
  "Egyéb hely megnevezése": "Nazwa innego miejsca",
  "Teljes képernyő": "Pełny ekran",
  "Húzd, ha görgetnél": "Przeciągnij, aby przewinąć",
  "Nyomtatás": "Drukuj",
  "Keresés: szó, vagy hely (Ján 3,16)": "Szukaj: słowo albo miejsce (J 3,16)",
  "Betűméret": "Rozmiar czcionki",
  "Megnevezés (pl. Gmail helyreállítási kódok)": "Nazwa (np. kody odzyskiwania Gmail)",
  "A kód, kulcs vagy seed-mondat": "Kod, klucz albo fraza seed",
  "Megjegyzés (hol használod, melyik fiók)": "Notatka (gdzie używasz, które konto)",
  "Megnevezés (pl. Személyi igazolvány)": "Nazwa (np. Dowód osobisty)",
  "Kód (pl. PP-MINTA-1234)": "Kod (np. PP-WZOR-1234)",
  "mennyit bír hátizsákban": "ile uniesie w plecaku",
  "pl. glutén, kivi — vesszővel": "np. gluten, kiwi — po przecinku",
  "pl. cukorbetegség": "np. cukrzyca",
  "pl. Bogáncs": "np. Burek",
  "egy mondat, ha a GPS nem visz oda": "jedno zdanie, jeśli GPS tam nie doprowadzi",
  "üresen: alapterület vagy típus szerint": "puste: według powierzchni albo typu",
  "üresen: típus szerint (ház 75, lakókocsi 80)": "puste: według typu (dom 75, przyczepa 80)",
  "0 = földszint": "0 = parter",
  "A nap pályája ma": "Droga słońca dzisiaj",
  "Holdfázis: növekvő hold": "Faza księżyca: przybywający",
  "Értesítés a telefonra": "Powiadomienie na telefon",
  "watt darabonként": "watów na sztukę",
  "ó/nap": "godz./dzień",
  "óra/nap": "godzin/dzień",
  "óra naponta": "godzin dziennie",
  "összesen W": "razem W",
  "napos óra": "godzin słonecznych",
  "pl. egy mondat, amit csak ti tudtok": "np. zdanie, które znacie tylko wy",
  "Amit át akarsz adni.": "To, co chcesz przekazać.",
  "pl. Találkozó, Rejtek": "np. Spotkanie, Kryjówka",
  "pl. Vércsoport és gyógyszerek": "np. Grupa krwi i leki",
  "Amit csak a családod olvashat.": "To, co może czytać tylko twoja rodzina.",
  "pl. Feri, vagy Kovácsék": "np. Piotrek albo Kowalscy",
  "Írd ide az üzenetet": "Wpisz tutaj wiadomość",
  "pl. Ceglédi kör": "np. Krąg sąsiedzki",
  "a szoba kódja": "kod pokoju",
  "Bezárás": "Zamknij",
  "Ige — Máté 6,34": "Werset — Mt 6,34",
  "A tájoló indul…": "Orientacja uruchamia się…",
  "Nem kaptunk engedélyt az iránytűhöz. A nap és hold rész ettől függetlenül működik.": "Nie otrzymaliśmy zgody na kompas. Część o słońcu i księżycu działa niezależnie od tego.",
  "db": "szt.",
  "lejár:": "traci ważność:",
  "LEJÁRT": "PRZETERMINOWANE",
  "1 hónapon belül lejár": "traci ważność w ciągu miesiąca",
  "fél éven belül lejár": "traci ważność w ciągu pół roku",
  "hatótáv kb.": "zasięg ok.",
  "kg teherbírás": "kg udźwigu",
  "Mi van itt": "Co tu jest",
  "tétel": "pozycji",
  "Térképen ✓ — pozíció frissítése": "Na mapie ✓ — odśwież pozycję",
  "térképen ✓": "na mapie ✓",
  "készültség": "gotowość",
  "készültség: nincs adat": "gotowość: brak danych",
  "fő": "osób",
  "nap": "dni",
  "Teszt-adatok betöltve: 3 fő, 1 háziállat, 4 helyszín (közte autó),": "Wczytano dane testowe: 3 osoby, 1 zwierzę domowe, 4 miejsca (w tym samochód),",
  "készlet-tétel ✓ (a neveket az adatlapjukon átírhatod)": "pozycji zapasu ✓ (nazwy możesz zmienić w ich kartach)",
  "óra": "godzin",
  "perc": "minut",
  "Napkeltéig még": "Do wschodu słońca jeszcze",
  "Napnyugtáig még": "Do zachodu słońca jeszcze",
  "A nap": "Słońce",
  "-e ment le.": " zaszło.",
  "Ezen a szélességen ma nem megy le a nap.": "Na tej szerokości geograficznej słońce dzisiaj nie zachodzi.",
  "Ezen a szélességen ma nem kel fel a nap.": "Na tej szerokości geograficznej słońce dzisiaj nie wschodzi.",
  "napra": "na dni",
  "Víz:": "Woda:",
  "Élelem:": "Żywność:",
  "Áram:": "Prąd:",
  "Fűtés:": "Ogrzewanie:",
  "nincs megmérve": "nie zmierzono",
  "nincs ide rendelt áramforrás": "brak przypisanego źródła prądu",
  "— a szükséglet": "— zapotrzebowanie",
  "lenne": "wynosiłoby",
  "— powerbank, power station és napelem-termelés; az üzemanyag a fűtésnél számít": "— powerbank, stacja zasilania i produkcja z paneli; paliwo liczy się przy ogrzewaniu",
  "A gyűrű a vízre és az élelemre vonatkozik: a gyengébbiket mutatja.": "Pierścień dotyczy wody i żywności: pokazuje słabszą z nich.",
  "A leggyengébb": "Najsłabsze ogniwo",
  "A gyűrű a jelen lévő típusok átlagát mutatja, a színe a leggyengébbet.": "Pierścień pokazuje średnią obecnych typów; jego kolor pokazuje najsłabszy.",
  "Leggyengébb:": "Najsłabsze:",
  "— a készültség ezt mutatja, mert a hiányzó láncszem dönt.": "— gotowość pokazuje właśnie to, bo decyduje brakujące ogniwo.",
  "élelem": "żywność",
  "víz": "woda",
  "fűtés": "ogrzewanie",
  "áram": "prąd",
  "Áramszünetre: hordozható energia": "Na przerwę w dostawie prądu: energia przenośna",
  "Hirdetés": "Reklama",
  "delelés": "górowanie",
  "Holdfázis:": "Faza księżyca:",
  "Használható fény": "Użyteczne światło",
  "és": "a",
  "között: a napkelte előtt és a napnyugta után is van még annyi, amivel lehet menni.": "pomiędzy: zarówno przed wschodem, jak i po zachodzie słońca jest go jeszcze tyle, że można iść.",
  "A számítás": "Obliczenie oparto na",
  "alapján készült, néhány perc pontossággal.": ", z dokładnością do kilku minut.",
  "a térkép utolsó nézete": "ostatnim widoku mapy",
  "egy mentett pontod": "jednym z twoich zapisanych punktów",
  "a mostani helyzeted": "twojej obecnej pozycji",
  "növekvő hold": "księżyc przybywający",
  "fogyó hold": "księżyc ubywający",
  "újhold": "nów",
  "telihold": "pełnia",
  "első negyed": "pierwsza kwadra",
  "utolsó negyed": "ostatnia kwadra",
  "Ma éjjel gyakorlatilag nincs holdfény, számolj lámpával.": "Dziś w nocy praktycznie nie ma światła księżyca, licz się z latarką.",
  "Közepes holdfény: nyílt terepen segít, erdőben nem.": "Umiarkowane światło księżyca: w otwartym terenie pomaga, w lesie nie.",
  "mérés az elmúlt 48 órából. Ezen a készüléken a böngésző nem éri el a légnyomás-szenzort, ezért kézzel viszed be; a telefonos appban magától fog mérni.": "pomiarów z ostatnich 48 godzin. Na tym urządzeniu przeglądarka nie ma dostępu do czujnika ciśnienia, dlatego wpisujesz je ręcznie; w aplikacji telefonicznej będzie mierzyć sama.",
  "Ez a böngésző nem tud értesítést megjeleníteni": "Ta przeglądarka nie potrafi wyświetlać powiadomień",
  "Bekapcsolva — riasztáskor a telefonod jelez": "Włączone — przy alarmie telefon da znać",
  "Kikapcsolva": "Wyłączone",
  "Adás indítása": "Uruchom nadawanie",
  "Adás megy — koppints újra": "Nadawanie trwa — stuknij ponownie",
  "Adás": "Nadawanie",
  "Vétel": "Odbiór",
  "Vétel megy — koppints újra": "Odbiór trwa — stuknij ponownie",
  "Megy — koppints újra": "Trwa — stuknij ponownie",
  "Áll — koppints újra": "Zatrzymane — stuknij ponownie",
  "Fény-SOS": "SOS światłem",
  "alapok — mindenkinek": "podstawy — dla każdego",
  "részletek, mélyebben": "szczegóły, głębiej",
  "ennyi áll a tárcádban": "tyle stoi w twoim portfelu",
  "nincs internet · minden a kódban": "bez internetu · wszystko w kodzie",
  "a leggyengébb": "najsłabsze ogniwo",
  "Indítás": "Start",
  "Számolók": "Kalkulatory",
  "Nem sikerült a helymeghatározás:": "Nie udało się ustalić położenia:",
  "A térkép utolsó nézete alapján is tudok számolni, nyisd meg egyszer a térképet.": "Mogę policzyć także na podstawie ostatniego widoku mapy — otwórz mapę choć raz.",
  "Ehhez előbb le kell tölteni a Biblia szövegét (a Biblia képernyőn, egyszer).": "Najpierw trzeba pobrać tekst Biblii (na ekranie Biblii, jednorazowo).",
  "‹ Könyvek": "‹ Księgi",
  "Ószövetség": "Stary Testament",
  "Újszövetség": "Nowy Testament",
  "300+ találat (az elsőket mutatom)": "300+ wyników (pokazuję pierwsze)",
  "találat": "wyników",
  "Nincs találat erre:": "Brak wyników dla:",
  "fejezet": "Rozdział",
  "Egész fejezet": "Cały rozdział",
  "Még nincs kiemelt vers. Nyiss meg egy fejezetet, és koppints egy versre.": "Nie ma jeszcze zaznaczonych wersetów. Otwórz rozdział i stuknij w werset.",
  "Klasszikus prófétai szakaszok. Az értelmezésük felekezetenként eltér — itt a szöveg áll, magyarázat nélkül.": "Klasyczne fragmenty prorocze. Ich wykładnia różni się między wyznaniami — tutaj stoi sam tekst, bez komentarza.",
  "Amikor félsz": "Gdy się boisz",
  "Amikor nem tudod, mit tegyél": "Gdy nie wiesz, co robić",
  "Amikor kifogytál az erődből": "Gdy brakuje ci już sił",
  "Amikor veszteség ér": "Gdy dotyka cię strata",
  "Amikor félted a családodat": "Gdy boisz się o rodzinę",
  "Amikor az ellátás a kérdés": "Gdy chodzi o zaopatrzenie",
  "Amikor másokon kell segítened": "Gdy musisz pomóc innym",
  "Amikor a kitartás a tét": "Gdy w grę wchodzi wytrwałość",
  "Jézus beszéde az utolsó időkről": "Mowa Jezusa o czasach ostatecznych",
  "Dániel látomásai": "Widzenia Daniela",
  "A szenvedő szolga és a Messiás": "Cierpiący sługa i Mesjasz",
  "Az utolsó idők jellemzői": "Cechy czasów ostatecznych",
  "Ítélet és helyreállítás": "Sąd i odnowienie",
  "teherbírás": "udźwig",
  "Bogáncs": "Burek",
  "Belépés": "Zaloguj się",
  "Betöltés...": "Wczytywanie...",
  "Betöltés…": "Wczytywanie…",
  "Értem": "Rozumiem",
  "Ha valaki ír egy szobádba, jelezzen a telefonod — akkor is, ha az app be van zárva.": "Gdy ktoś napisze w twoim pokoju, niech telefon da znać — także wtedy, gdy aplikacja jest zamknięta.",
  "Ehhez tudni kell, hol vagy. Nyomd meg a Mérés a helyzetemre gombot.": "Do tego trzeba wiedzieć, gdzie jesteś. Naciśnij przycisk Oblicz dla mojego położenia.",
  "Nézd meg most, mennyi üzemanyag van az autóban. Ha kevesebb mint fél tank, tankolj fel a héten, és onnantól tartsd ezt a szintet. Ez az egyetlen szokás, ami pénzbe nem kerül, mert azt a benzint úgyis megvennéd, csak korábban.": "Sprawdź teraz, ile paliwa jest w samochodzie. Jeśli mniej niż pół baku, zatankuj do pełna w tym tygodniu i od tej pory utrzymuj ten poziom. To jedyny nawyk, który nic nie kosztuje, bo tę benzynę i tak byś kupił — tylko wcześniej.",
  "Tudástár — Közlekedés és mobilitás": "Baza wiedzy — Transport i mobilność",
  "A lista a családtagjaidból áll össze, akiket a Háztartásnál vettél fel.": "Lista składa się z członków twojej rodziny, których wpisałeś w Gospodarstwie domowym.",
  "A dokumentumok a telefonodon maradnak. Nem megy belőlük semmi sehova, felhőbe sem.": "Dokumenty zostają na twoim telefonie. Nic z nich nigdzie nie trafia, także do chmury.",
  "A gomb be- és kikapcsol. Ugyanaz a gomb indítja az adást és állítja meg — nincs külön Állj.": "Przycisk włącza i wyłącza. Ten sam przycisk uruchamia nadawanie i je zatrzymuje — nie ma osobnego Stop.",
  "A gyűrű a leggyengébb láncszemet mutatja, nem az átlagot. Egy hiányzó dolog lehúzza az egészet — és ez szándékos.": "Pierścień pokazuje najsłabsze ogniwo, nie średnią. Jeden brak ciągnie w dół całość — i tak ma być.",
  "A vétel és az adás ugyanazzal a gombbal kapcsol. Amíg megy, hagyd a telefont nyugton.": "Odbiór i nadawanie przełącza ten sam przycisk. Dopóki działa, zostaw telefon w spokoju.",
  "Egy témán belül két réteg van. Az alap- és az életmentő cikkek ingyenesek, mindenkinek.": "W obrębie tematu są dwie warstwy. Artykuły podstawowe i ratujące życie są bezpłatne, dla wszystkich.",
  "Ezt látja az, aki megtalálja a telefonodat. Csak azt írd bele, amit egy idegen is láthat.": "To zobaczy ten, kto znajdzie twój telefon. Wpisz tylko to, co może zobaczyć obcy.",
  "Felveszed az azimutot, és a tájoló megmutatja a visszautat is — nem kell fejben tartanod.": "Zapisujesz azymut, a orientacja pokaże ci także drogę powrotną — nie musisz jej pamiętać.",
  "Itt veszed fel a családot. Innen jön a fejadag-számítás és a helyszínek listája is.": "Tutaj wpisujesz rodzinę. Stąd bierze się obliczenie racji i lista miejsc.",
  "Keresés szó szerint, és amit megjelölsz, azt könyvjelzővel bármikor visszatalálod.": "Wyszukiwanie dosłowne, a to, co zaznaczysz, odnajdziesz w każdej chwili przez zakładkę.",
  "Koppints a térképre, és ott új pontot veszel fel.": "Stuknij w mapę, a w tym miejscu powstanie nowy punkt.",
  "Több számoló van egy helyen — víz, élelem, üzemanyag. Nincs külön csempéjük, mind itt található.": "Kilka kalkulatorów w jednym miejscu — woda, żywność, paliwo. Nie mają własnego kafelka, wszystkie są tutaj.",
  "Új tételt a listához adsz: megadod, mi az, hova teszed, és mikor jár le.": "Dodajesz do listy nową pozycję: co to jest, gdzie ją kładziesz i kiedy traci ważność.",
  "A gombok be- és kikapcsolnak. Ugyanaz a gomb indítja és állítja le a jelzést.": "Przyciski włączają i wyłączają. Ten sam przycisk uruchamia sygnał i go zatrzymuje.",
  "A QR-kód a TELJES adatot viszi, nem egy linket. Ezért működik akkor is, ha nincs internet — a másik telefon a kódból olvassa ki.": "Kod QR niesie PEŁNE dane, nie link. Dlatego działa również bez internetu — drugi telefon odczytuje je wprost z kodu.",
  "A vaku nem minden telefonon működik. Ha nem indul, használd a képernyő-fényt — az mindenhol megy.": "Lampa błyskowa nie działa na każdym telefonie. Jeśli się nie uruchamia, użyj światła ekranu — to działa wszędzie.",
  "A szám azt mutatja, mennyi áll a tárcádban.": "Liczba pokazuje, ile stoi w twoim portfelu.",
  "D": "S",
  "K": "E",
  "Ny": "Z",
  "ÉK": "NE",
  "ÉNy": "NW",
  "DK": "SE",
  "DNy": "SW",
  "Példabeszédek 22,3": "Przypowieści 22,3",
  "Az eszes meglátja a bajt és elrejti magát; a bolondok pedig neki mennek és kárát vallják.": "Roztropny dostrzega zło i ukrywa się, ale prości idą dalej i ponoszą karę.",
  "2Timóteus 1,7": "2 Tymoteusza 1,7",
  "Mert nem félelemnek lelkét adott nékünk az Isten; hanem erőnek és szeretetnek és józanságnak lelkét.": "Nie dał nam bowiem Bóg ducha bojaźni, lecz mocy i miłości, i zdrowego umysłu.",
  "Máté 6,34": "Mateusza 6,34",
  "Ne aggodalmaskodjatok tehát a holnap felől; mert a holnap majd aggodalmaskodik a maga dolgai felől. Elég minden napnak a maga baja.": "Dlatego nie troszczcie się o dzień jutrzejszy, gdyż dzień jutrzejszy sam się zatroszczy o swoje potrzeby. Dosyć ma dzień swego utrapienia.",
  "Zsoltárok 46,2-3": "Psalmy 46:1-2",
  "Isten a mi oltalmunk és erősségünk! igen bizonyos segítség a nyomorúságban. Azért nem félünk, ha elváltoznék is a föld, ha hegyek omlanának is a tenger közepébe.": "Bóg jest naszą ucieczką i siłą, najpewniejszą pomocą w utrapieniu. Dlatego nie będziemy się bać, choćby się poruszyła ziemia, choćby się przeniosły góry w sam środek morza;",
  "Jakab 1,3": "Jakuba 1,3",
  "Tudván, hogy a ti hiteteknek megpróbáltatása kitartást szerez.": "Wiedząc, że doświadczenie waszej wiary wyrabia cierpliwość.",
  "Uram, Te látod, mi nyomaszt engem. Ma éjjel nem tudom megoldani, és nem is akarom azt hazudni Neked, hogy nem félek. Kérlek, vedd le rólam a holnap terhét, és adj erőt ahhoz, amit ma kell elhordoznom. Csendesíts le. Te őrködsz, én alhatok. Jézus nevében, ámen.": "Panie, Ty widzisz, co mnie przygniata. Dziś w nocy nie potrafię tego rozwiązać i nie chcę Ci kłamać, że się nie boję. Proszę, zdejmij ze mnie ciężar jutra i daj siłę do tego, co mam unieść dzisiaj. Ucisz mnie. Ty czuwasz, ja mogę spać. W imię Jezusa, amen.",
  "Uram, most kell döntenem, és nincs időm. Adj tiszta fejet, és őrizz meg a pániktól. Mutasd meg a következő egy lépést, nem az egészet, csak a következőt. Legyen erőm megtenni. Jézus nevében, ámen.": "Panie, muszę teraz zdecydować, a nie mam czasu. Daj mi jasną głowę i zachowaj mnie od paniki. Pokaż mi następny jeden krok, nie całość — tylko następny. Daj mi siłę, bym go zrobił. W imię Jezusa, amen.",
  "Mennyei Atyám! Az Úr Jézus Krisztus nevében megyek eléd. Elismerem, hogy mindenható, örökkévaló Isten vagy, az egész világmindenségnek a teremtője. Én is a Te teremtményed vagyok. Elismerem, hogy bűnös ember vagyok, és sokat vétkeztem ellened. De én ma elhatározom, hogy megtérek és elfogadom a Názáreti Jézus áldozatát, és elismerem, hogy erre az áldozatra nekem is szükségem van. Ezért a szívemet, életemet megnyitom. Kérlek Uram, jöjj a szívembe. Bocsásd meg a bűneimet, szabadíts meg engem a bűntől és annak minden következményétől! Hiszek Benned Jézus. Hiszem, hogy Te vagy az élő Istennek a Fia, ki meghaltál az én bűneimért és feltámadtál a halálból, hogy megigazítsál engem. Elfogadlak Uramnak, Megváltómnak, Szabadítómnak és átadom az életemet, szívemet Neked. Szabadíts meg Uram! Tiszta szívet teremts bennem! Te azt ígérted, hogy a zörgetőnek ajtó nyittatik. Én Isten jelenlétébe akarok kerülni, és Te vagy az Út. Kérlek, vezess engem a Mindenható jelenlétébe! Dicsérlek és áldalak. Szeretlek Uram szívemből, lelkemből, erőmből, a Názáreti Jézus nevében. Dicsőség Istennek, most és mindörökké! Ámen!": "Ojcze niebieski! W imię Pana Jezusa Chrystusa przychodzę przed Ciebie. Wyznaję, że jesteś wszechmogącym, wiecznym Bogiem, Stwórcą całego wszechświata. Ja także jestem Twoim stworzeniem. Wyznaję, że jestem człowiekiem grzesznym i wiele przeciw Tobie zawiniłem. Ale dziś postanawiam się nawrócić i przyjąć ofiarę Jezusa z Nazaretu, i uznaję, że tej ofiary potrzebuję również ja. Dlatego otwieram moje serce i moje życie. Proszę Cię, Panie, przyjdź do mojego serca. Przebacz mi grzechy, uwolnij mnie od grzechu i wszystkich jego skutków! Wierzę w Ciebie, Jezu. Wierzę, że jesteś Synem Boga żywego, który umarł za moje grzechy i zmartwychwstał, aby mnie usprawiedliwić. Przyjmuję Cię jako mojego Pana, Zbawiciela i Wybawiciela, i oddaję Ci moje życie i moje serce. Wybaw mnie, Panie! Stwórz we mnie czyste serce! Obiecałeś, że kołaczącemu będzie otworzone. Chcę wejść w obecność Boga, a Ty jesteś Drogą. Proszę, prowadź mnie przed oblicze Wszechmogącego! Chwalę Cię i błogosławię. Kocham Cię, Panie, z całego serca, z całej duszy, ze wszystkich sił, w imię Jezusa z Nazaretu. Chwała Bogu, teraz i na wieki! Amen!",
  "fűtés kevés": "mało ogrzewania",
  "még egyedül": "jeszcze sam",
  "te indítottad": "ty uruchomiłeś",
  "Csatlakozom": "Dołączam",
  "jelentkezés elküldve": "zgłoszenie wysłane",
  "a gazda nem engedett be": "właściciel cię nie wpuścił",
  "jóváhagyásra vár": "czeka na zatwierdzenie",
  "névtelen": "anonimowy",
  "Egy powerbank a telefonhoz kevés, ha a router és a lámpa is menne. Nézd meg, mekkora kapacitás kell három napra.": "Jeden powerbank do telefonu to za mało, jeśli miałby działać też router i lampa. Sprawdź, jaka pojemność jest potrzebna na trzy dni.",
  "A nyílt lángú fűtés zárt térben szén-monoxidot termel. Ha bent fűtesz, CO-érzékelő nem opció, hanem alapfelszerelés.": "Ogrzewanie otwartym płomieniem w zamkniętym pomieszczeniu wytwarza tlenek węgla. Jeśli grzejesz w środku, czujnik czadu nie jest opcją, tylko wyposażeniem podstawowym.",
  "Napi három liter fejenként, csak ivásra. Mellé egy szűrő vagy klórtabletta, ha a csapvíz eredete kétségessé válik.": "Trzy litry dziennie na osobę, tylko do picia. Do tego filtr albo tabletki chlorowe, jeśli pochodzenie wody z kranu stanie się wątpliwe.",
  "Fejlámpa, hogy szabad maradjon a két kezed, és tartalék elem hozzá. A gyertya tűzveszély, nem megoldás.": "Latarka czołowa, żeby obie ręce zostały wolne, i zapasowe baterie do niej. Świeca to zagrożenie pożarowe, nie rozwiązanie.",
  "— ennyi jut ténylegesen a fűtésbe,": "— tyle trafia faktycznie w ogrzewanie,",
  "Nyers tüzelő:": "Opał surowy:",
  "(tüzifa, fűtőolaj és gázpalack együtt) — ebből a berendezés": "(drewno opałowe, olej opałowy i butla gazowa razem) — z tego urządzenie oddaje",
  "%-ot ad át": "%",
  "Napi fűtésigény:": "Dzienne zapotrzebowanie na ogrzewanie:",
  "Víz (csempe)": "Woda",
  "Étel (csempe)": "Jedzenie",
  "Fűtés (csempe)": "Ciepło",
  "Áram (csempe)": "Prąd",
  "KÖZÖS": "WSPÓLNE",
  "Közös": "Wspólne",
  "közös": "wspólne",
  "Közös felszerelés": "Wyposażenie wspólne",
  "Közös felszerelés (egyszer az egész csoportnak)": "Wyposażenie wspólne (raz dla całej grupy)",
  "kannás víz": "woda w kanistrze",
  "palackos víz": "woda butelkowana",
  "száraz élelmiszer": "żywność sucha",
  "romlandó": "łatwo psujące się",
  "tüzifa": "drewno opałowe",
  "fűtőolaj": "olej opałowy",
  "gázpalack": "butla gazowa",
  "üzemanyag-készlet": "zapas paliwa",
  "üzemanyag (mobilitás)": "paliwo (mobilność)",
  "üzemanyag": "paliwo",
  "bébiétel": "jedzenie dla niemowląt",
  "háziállat": "zwierzę domowe",
  "saját gyógyszer": "własny lek",
  "hátizsák": "plecak",
  "1 készlet": "1 zestaw",
  "Gyógyszer:": "Leki:",
  "Vércsoport:": "Grupa krwi:",
  "Betegség:": "Choroba:",
  "Vércsoport-kártya:": "Karta grupy krwi:",
  "Élelmiszer": "Żywność",
  "Elsősegély": "Pierwsza pomoc",
  "Eszközök - alvás/menedék": "Sprzęt - spanie/schronienie",
  "Eszközök - főzés/tűzgyújtás": "Sprzęt - gotowanie/rozpalanie",
  "Eszközök - fűtés": "Sprzęt - ogrzewanie",
  "Eszközök - világítás": "Sprzęt - oświetlenie",
  "Eszközök - öltözet": "Sprzęt - odzież",
  "Eszközök - EDC": "Sprzęt - EDC",
  "Higiénia": "Higiena",
  "Mobilitás": "Mobilność",
  "Mobilitás:": "Mobilność:",
  "Mit vigyek": "Co zabrać",
  "Fény-SOS (képernyő)": "SOS światłem (ekran)",
  "Fény-SOS (vaku)": "SOS światłem (lampa)",
  "Ürítés": "Opróżnij",
  "Pontok kimentése (GPX)": "Eksportuj punkty (GPX)",
  "Teljes mentés": "Pełna kopia zapasowa",
  "Visszatöltés": "Przywróć",
  "Checklista nyomtatása": "Drukuj listę kontrolną",
  "Kezdő": "Start",
  "Lámpa": "Lampa",
  "Beállít": "Ustaw",
  "LED be": "LED wł.",
  "Nincs vaku": "Brak lampy błyskowej",
  "Kamera vétel leállítása": "Zatrzymaj odbiór aparatem",
  "Mikrofon vétel leállítása": "Zatrzymaj odbiór mikrofonem",
  "Másolás": "Kopiuj",
  "Beillesztés szövegből": "Wklej z tekstu",
  "Bemutató-adatok betöltése": "Wczytaj dane demonstracyjne",
  "A neved a közösségben": "Twoje imię we wspólnocie",
  "Összes kategória": "Wszystkie kategorie",
  "Összes készlet": "Wszystkie zapasy",
  "Mennyiség (ml/db)": "Ilość (ml/szt.)",
  "Hol áll általában": "Gdzie zwykle stoi",
  "Miért (pl. 10 tojás, favágás)": "Za co (np. 10 jajek, rąbanie drewna)",
  "Ez összesen": "To razem",
  "kg vagy liter": "kg albo litrów",
  "Nincs találat.": "Brak wyników.",
  "(névtelen)": "(bez nazwy)",
  "nincs adat": "brak danych",
  "Összesen": "Razem",
  "Élelem": "Żywność",
  "hiányzik": "brakuje",
  "Hiányzik": "Brakuje",
  "személyre szóló": "na osobę",
  "alap ruházat": "odzież podstawowa",
  "állat-specifikus": "specyficzne dla zwierzęcia",
  "autó": "samochód",
  "pár": "para",
  "1 pár": "1 para",
  "1 pár (lábon)": "1 para (na nogach)",
  "egy az egész csoportnak": "jeden dla całej grupy",
  "kép": "obraz",
  "PDF/fájl": "PDF/plik",
  "a tárban": "w pamięci",
  "tárolt": "zapisane",
  "átadásra vár": "czeka na przekazanie",
  "Gíra": "Gira",
  "Hány gírát kérsz": "Ile gir chcesz poprosić",
  "Hány gíra": "Ile gir",
  "Kinek (azonosító)": "Do kogo (identyfikator)",
  "Neve (nem kötelező)": "Nazwa (nieobowiązkowa)",
  "Kezdőlapon nem látszik": "Niewidoczne na stronie głównej",
  "Nincs napkelte vagy napnyugta": "Brak wschodu lub zachodu słońca",
  "Légnyomás az elmúlt órákban": "Ciśnienie w ostatnich godzinach",
  "Adj nevet a dokumentumnak.": "Nadaj dokumentowi nazwę.",
  "Nem sikerült.": "Nie udało się.",
  "Nem sikerült:": "Nie udało się:",
  "Nem sikerült a kamera:": "Nie udało się uruchomić aparatu:",
  "Nem sikerült a mikrofon:": "Nie udało się uruchomić mikrofonu:",
  "Nem fért el: megtelt a tár. Törölj egy régi dokumentumot.": "Nie zmieściło się: pamięć jest pełna. Usuń stary dokument.",
  "Add meg a PIN-t": "Podaj PIN",
  "4-6 számjegy kell.": "Potrzebne są 4-6 cyfr.",
  "Hibás PIN.": "Błędny PIN.",
  "Feldolgozás:": "Przetwarzanie:",
  "Feldolgozás…": "Przetwarzanie…",
  "(túl nagy fájl)": "(plik za duży)",
  "(nem sikerült beolvasni)": "(nie udało się odczytać)",
  "(PDF, max 2 MB. Fényképezd le inkább — a fotót magamtól kicsinyítem)": "(PDF, maks. 2 MB. Lepiej to sfotografuj — zdjęcie pomniejszę sam)",
  "Még nincs dokumentum.": "Nie ma jeszcze dokumentów.",
  "Törlöd a dokumentumot?": "Usunąć dokument?",
  "Biztosan törlöd? Koppints újra": "Na pewno usunąć? Stuknij ponownie",
  "Előbb vegyél fel családtagot a Háztartásnál.": "Najpierw dodaj członka rodziny w Gospodarstwie domowym.",
  "Ezen az eszközön nincs helymeghatározás": "To urządzenie nie ma ustalania położenia",
  "Helymeghatározás…": "Ustalanie położenia…",
  "Új változat érhető el (": "Dostępna jest nowa wersja (",
  "Áramforrás hiányzik": "Brakuje źródła prądu",
  "Kevés a tüzelő": "Za mało opału",
  "Kevés a víz": "Za mało wody",
  "Nincs fényforrás": "Brak źródła światła",
  "A tudástár üres.": "Baza wiedzy jest pusta.",
  "zárt": "zamknięte",
  "Bővített tudástár": "Rozszerzona baza wiedzy",
  "Ebben a témában": "W tym temacie jest jeszcze",
  "további cikk van, a bevezetőjüket fent olvashatod.": "artykułów, ich wstępy możesz przeczytać powyżej.",
  "A teljes szövegük a bővített tudástár része, ami egyszeri feloldással, véglegesen elérhető.": "Ich pełny tekst należy do rozszerzonej bazy wiedzy, dostępnej na stałe po jednorazowym odblokowaniu.",
  "Ennek a cikknek a szövege nem jött meg.": "Tekst tego artykułu nie dotarł.",
  "A cikk szövege most nem érhető el.": "Tekst artykułu jest teraz niedostępny.",
  "Tudástár —": "Wiedza —",
  "Elsősegély-készlet": "Apteczka pierwszej pomocy",
  "Fejlámpa + tartalék elem": "Latarka czołowa + zapasowe baterie",
  "Powerbank (feltöltve)": "Powerbank (naładowany)",
  "Vízszűrő vagy víztisztító tabletta": "Filtr do wody albo tabletki uzdatniające",
  "Öngyújtó / vízálló gyufa": "Zapalniczka / zapałki wodoodporne",
  "Többfunkciós kés": "Nóż wielofunkcyjny",
  "Gázfőző + gázpalack": "Kuchenka gazowa + butla",
  "Spirituszfőző (denaturált szesz) + üzemanyag": "Kuchenka spirytusowa (denaturat) + paliwo",
  "Vegyi melegítő tasak (tűz nélkül)": "Ogrzewacz chemiczny (bez ognia)",
  "Bögre / edény a főzéshez": "Kubek / naczynie do gotowania",
  "Hőfólia": "Folia NRC",
  "Papírtérkép és iránytű": "Mapa papierowa i kompas",
  "Készpénz kis címletekben": "Gotówka w małych nominałach",
  "Dokumentum-másolatok": "Kopie dokumentów",
  "Vízhatlan zsák (dry bag)": "Worek wodoszczelny (dry bag)",
  "Mentőmellény": "Kamizelka ratunkowa",
  "Gyorsan száradó ruha": "Szybkoschnące ubranie",
  "Vízálló tok a telefonra": "Wodoodporne etui na telefon",
  "Réteges téli öltözet": "Zimowa odzież na cebulkę",
  "Sapka, sál, kesztyű": "Czapka, szalik, rękawiczki",
  "Vízhatlan bakancs": "Wodoodporne buty",
  "Kémiai melegítő párna": "Chemiczny ogrzewacz",
  "Réteges őszi öltözet": "Jesienna odzież na cebulkę",
  "Fejlámpa (korán sötétedik)": "Latarka czołowa (wcześnie się ściemnia)",
  "Naptej és fejfedő": "Krem z filtrem i nakrycie głowy",
  "Rovarriasztó": "Środek na owady",
  "Extra víz (meleg miatt)": "Dodatkowa woda (z powodu upału)",
  "Kanna víz (tartalék)": "Kanister wody (zapas)",
  "Hálózsák / takaró": "Śpiwór / koc",
  "Szerszámkészlet": "Zestaw narzędzi",
  "Ponyva / sátorlap": "Plandeka / płachta namiotowa",
  "Bakancs vagy zárt cipő": "Buty trekkingowe albo zabudowane",
  "Alsónemű": "Bielizna",
  "Póló": "Koszulka",
  "Hosszú nadrág": "Długie spodnie",
  "Pulóver vagy polár": "Sweter albo polar",
  "Aláöltözet (hosszú alsó, hosszú ujjú)": "Bielizna termiczna (długie kalesony, długi rękaw)",
  "Esőkabát vagy esőponcsó": "Kurtka przeciwdeszczowa albo peleryna",
  "Kesztyű": "Rękawiczki",
  "Váltóruha (csecsemő)": "Ubranie na zmianę (niemowlę)",
  "Zokni / rugdalózó": "Skarpetki / pajacyk",
  "Sapka (csecsemő)": "Czapeczka (niemowlę)",
  "Esővédő a babahordozóra": "Osłona przeciwdeszczowa na nosidełko",
  "intim higiénia (tisztasági betét / tampon)": "higiena intymna (podpaski / tampony)",
  "intim higiénia, ha lány": "higiena intymna, jeśli dziewczynka",
  "tápszer (a szokásos márka, napi adag +2 nap)": "mleko modyfikowane (zwykła marka, racja dzienna +2 dni)",
  "pelenka (napi 6-8 db)": "pieluchy (6-8 szt. dziennie)",
  "törlőkendő": "chusteczki nawilżane",
  "cumi és pótcumi": "smoczek i zapasowy smoczek",
  "saját tápja (NE váltsunk hirtelen: gyomorrontást okoz)": "jego własna karma (NIE zmieniaj nagle: powoduje rozstrój żołądka)",
  "oltási könyv másolata": "kopia książeczki szczepień",
  "póráz és szájkosár": "smycz i kaganiec",
  "víztisztító tabletta": "tabletki do uzdatniania wody",
  "vízszűrő": "filtr do wody",
  "Inzulin hűtve: hűtőtáska + gélakku": "Insulina w chłodzie: torba chłodząca + wkład chłodzący",
  "az inzulin 2-8 °C-ot kíván": "insulina wymaga 2-8 °C",
  "Vércukormérő, tesztcsík, lándzsa": "Glukometr, paski testowe, nakłuwacz",
  "cukorbetegség az adatlapján": "cukrzyca w jego karcie",
  "Szőlőcukor / gyors cukor": "Glukoza / szybki cukier",
  "hipoglikémia esetére": "na wypadek hipoglikemii",
  "Tartalék toll/tű + éles-gyűjtő": "Zapasowy pen/igła + pojemnik na ostre odpady",
  "ha az egyik elromlik vagy elvész": "jeśli jeden się zepsuje albo zginie",
  "Allergia-gyógyszer (": "Lek na alergię (",
  "allergia az adatlapján": "alergia w jego karcie",
  "Adrenalin autoinjektor, ha fel van írva": "Adrenalina w ampułkostrzykawce, jeśli jest przepisana",
  "súlyos allergiás reakció percek alatt kialakulhat": "ciężka reakcja alergiczna może wystąpić w ciągu minut",
  "az adatlapjáról": "z jego karty",
  "az ő adatlapjáról, +2 nap tartalék": "z jego karty, +2 dni zapasu",
  "amit viszünk; a teljes igény": "co zabieramy; pełne zapotrzebowanie",
  "indulásra; a teljes igény": "na wyjście; pełne zapotrzebowanie",
  ": nincs megadva a testtömeg, 15 kg-mal számoltam. Az adatlapján javítható.": ": nie podano masy ciała, liczyłem 15 kg. Można to poprawić w jego karcie.",
  "Több helyen is bejelölve:": "Zaznaczone w kilku miejscach:",
  "— mindegyiknél teljes mennyiséggel számít.": "— przy każdym liczy się pełną ilość.",
  "A víz csak az indulásra elég: a teljes igény": "Woda wystarczy tylko na wyjście: pełne zapotrzebowanie wynosiłoby",
  "liter lenne, ebből": "litrów, z czego",
  "liter megy veletek. A többit útközben kell megszerezni és tisztítani.": "litrów idzie z wami. Resztę trzeba zdobyć i uzdatnić po drodze.",
  "Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez túrához való, és a listán kiírom, mennyit kell útközben szerezni.": "Liczy tylko to, co uniesiesz: 1,5 litra na osobę. To jest do wyprawy, a na liście wypiszę, ile trzeba zdobyć po drodze.",
  "Jelöld ki, ki megy. Enélkül nem tudom kiszámolni, mennyi kell.": "Zaznacz, kto idzie. Bez tego nie policzę, ile potrzeba.",
  "kategóriájú ruházatot kíván. A készletedben": "— potrzebna jest odzież tej kategorii. W twoim zapasie jest",
  "ilyen tétel van.": "takich pozycji.",
  "nincs ilyen tétel — a készletnél ez egy kategória.": "brak takich pozycji — w zapasie jest to kategoria.",
  "liter víz és": "litrów wody i",
  "kcal élelem. Becsült tömeg:": "kcal żywności. Szacowana masa:",
  "A víz csak az indulásra elég.": "Woda wystarczy tylko na wyjście.",
  "napra valójában": "dni w rzeczywistości",
  "liter kellene, ennyit viszont nem lehet elvinni.": "litrów byłoby potrzebne, tyle jednak nie da się zabrać.",
  "liter, amit útközben kell megszerezni:": "litrów trzeba zdobyć po drodze:",
  "vízszűrő, víztisztító tabletta, ismert vízvételi pont. Ezt a listán is nézd meg.": "filtr do wody, tabletki uzdatniające, znany punkt poboru wody. Zobacz to także na liście.",
  "A készletedben most": "W twoim zapasie jest teraz",
  "kcal van megadva, ami ennek az útnak a": "kcal, co dla tej wyprawy stanowi",
  "Hiányzik még kb.": "Brakuje jeszcze około",
  "Ez elég.": "To wystarczy.",
  "tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz.": "pozycjach nie podano energii (kcal/100 g), nie są one wliczane. Odczytane z opakowania będzie dokładniej.",
  "Ez nehezebb, mint amit el tudtok vinni. A kijelölt személyek együtt kb.": "To cięższe, niż zdołacie unieść. Zaznaczone osoby razem uniosą około",
  "kg-ot bírnak, a lista": "kg, a lista waży",
  "kg. A víz a legnehezebb: fontold meg a vízszűrőt kanna helyett, vagy vidd rövidebb szakaszra.": "kg. Woda jest najcięższa: rozważ filtr zamiast kanistra albo zabierz ją na krótszy odcinek.",
  "Belefér: a kijelöltek kb.": "Mieści się: zaznaczeni uniosą około",
  "kg-ot bírnak.": "kg.",
  "fő között: fejenként kb.": "osób: na osobę około",
  "Nála:": "U niego:",
  "kg (ebből": "kg (z czego",
  "kg a sajátja": "kg własne",
  "kg a közösből": "kg ze wspólnego",
  "· teherbírása": "· udźwig",
  "— EZ TÖBB, MINT AMIT ELBÍR": "— TO WIĘCEJ, NIŻ UNIESIE",
  "— belefér": "— mieści się",
  "A hiányzik jelölésűek a beszerzési listád. Most": "Pozycje oznaczone jako brakujące to twoja lista zakupów. Teraz jest",
  "ilyen van. A vizet és az élelmet a készlet KATEGÓRIÁJÁBÓL ismeri fel, a többit a nevéből.": "takich. Wodę i żywność rozpoznaje po KATEGORII zapasu, resztę po nazwie.",
  "A víz- és energia-számok tervezési értékek, nem orvosi előírás. A csecsemő és az állat külön normával számol.": "Wartości wody i energii są wielkościami planistycznymi, nie zaleceniem lekarskim. Niemowlę i zwierzę liczone są według własnej normy.",
  "Egy power station a telefont, a lámpát és egy rádiót is elviszi napokig. Kisebb igényre powerbank is elég.": "Stacja zasilania pociągnie telefon, lampę i radio przez wiele dni. Przy mniejszym zapotrzebowaniu wystarczy powerbank.",
  "Tűzifa, PB-palack vagy fűtőolaj — a kockázatelemzés kiszámolja, mennyi kell a megadott napokra.": "Drewno opałowe, butla gazowa albo olej opałowy — analiza ryzyka policzy, ile potrzeba na podane dni.",
  "Kannás víz és víztisztító a legolcsóbb biztosíték. Egy IBC tartály hosszú távra megoldja.": "Woda w kanistrze i środek do uzdatniania to najtańsze zabezpieczenie. Zbiornik IBC rozwiązuje to na długo.",
  "Egy fejlámpa a legfontosabb: szabadon hagyja a kezed. Mellé egy tartalék elemkészlet.": "Najważniejsza jest latarka czołowa: zostawia wolne ręce. Do tego zestaw zapasowych baterii.",
  "A tárolt üzemanyag a fűtésnél is szerepel: ugyanaz a liter vagy fűt, vagy visz.": "Zmagazynowane paliwo pojawia się też przy ogrzewaniu: ten sam litr albo grzeje, albo wiezie.",
  "Ehhez a helyszínhez még nincs készlet rendelve, ezért nem tudjuk mérni. A Készletnél a tétel Tárolási helyénél tudod bejelölni.": "Do tego miejsca nie przypisano jeszcze zapasu, dlatego nie możemy nic zmierzyć. Możesz to zaznaczyć w Zapasie, przy Miejscu przechowywania pozycji.",
  "Ehhez a helyszínhez nincs tétel rendelve. A Készletnél a tétel Tárolási helyénél tudod bejelölni.": "Do tego miejsca nie przypisano pozycji. Możesz to zaznaczyć w Zapasie, przy Miejscu przechowywania pozycji.",
  ": nincs hatótáv — add meg a fogyasztást az adatlapján": ": brak zasięgu — podaj zużycie w jego karcie",
  "20000 = 20 liter (millilitert kérünk)": "20000 = 20 litrów (prosimy o mililitry)",
  "5000 = egy 5 literes kanna": "5000 = kanister 5-litrowy",
  "1500 = másfél literes": "1500 = półtora litra",
  "100000 = egy mázsa": "100000 = kwintal",
  "11500 = egy 11,5 kg-os PB": "11500 = butla 11,5 kg",
  ". Ez soknak tűnik. Biztos, hogy jó a mennyiség": ". To wygląda na dużo. Czy na pewno ilość",
  "és az egységnyi súly? (Egy IBC tartály például 1 darab, 1000 kg.) OK = mégis felveszem.": "i waga jednostkowa są poprawne? (Zbiornik IBC to na przykład 1 sztuka, 1000 kg.) OK = mimo to dodaję.",
  "A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan. Töltsd ki a Vészkártya szekcióban.": "Twoja karta ratunkowa (grupa krwi, alergia, leki, kontakt) pojawi się tu szybko. Wypełnij ją w sekcji Karta ratunkowa.",
  "pl. Amit hozz magaddal": "np. Co masz ze sobą przynieść",
  "víz 5 liter&#10;elemlámpa&#10;gyógyszerek": "woda 5 litrów&#10;latarka&#10;leki",
  "Vízitúra": "Wyprawa wodna",
  "Őszi túra": "Wyprawa jesienna",
  "Nyári túra": "Wyprawa letnia",
  "Esőkabát": "Kurtka przeciwdeszczowa",
  "Ehhez a helyszínhez még nincs készlet rendelve, ezért nem tudjuk mérni. A Készletnél a tétel Tárolási helyénél válaszd ki:": "Do tego miejsca nie przypisano jeszcze zapasu, dlatego nie możemy nic zmierzyć. W Zapasie, przy Miejscu przechowywania pozycji wybierz:",
  "élelmiszernél hiányzik az energia (kcal/100 g) — addig az étel „?”.": "artykułach spożywczych brakuje energii (kcal/100 g) — do tego czasu przy jedzeniu stoi „?”.",
  "Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez túrához való, és a listán kiírom, mennyi hiányzik a teljes fejadaghoz.": "Liczy tylko to, co uniesiesz: 1,5 litra na osobę. To jest do wyprawy, a na liście wypiszę, ile brakuje do pełnej racji.",
  "tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz a kép.": "pozycjach nie podano energii (kcal/100 g), nie są one wliczane. Odczytane z opakowania obraz będzie dokładniejszy.",
  "A víz- és energia-számok tervezési értékek, nem orvosi előírás. A csecsemő és az állat külön normán fut, nem a felnőtt arányosításából.": "Wartości wody i energii są wielkościami planistycznymi, nie zaleceniem lekarskim. Niemowlę i zwierzę mają własną normę, nie wyliczaną proporcjonalnie od osoby dorosłej.",
  "fő ·": "osób ·",
  "nap ·": "dni ·",
  "fő/állat ·": "osób/zwierząt ·",
  "fő)": "osób)",
  "Víz (": "Woda (",
  "kg testtömegre)": "kg masy ciała)",
  "0,06 l/testtömeg-kg/nap": "0,06 l/kg masy ciała/dzień",
  "l/nap ×": "l/dzień ×",
  "kcal/nap ×": "kcal/dzień ×",
  "személyre szóló (": "na osobę (",
  ": be van írva a betegség (": ": choroba jest wpisana (",
  "fejenként egy (": "jeden na osobę (",
  "— a": "— z",
  "-es tank": "-litrowy zbiornik",
  "m² alapján": "na podstawie m²",
  "%-a .": "% .",
  "a helyszín típusa szerint": "według typu miejsca",
  "kézzel megadott": "podane ręcznie",
  "kézzel megadott napi igény": "ręcznie podane zapotrzebowanie dzienne",
  "itteni élelmiszernél hiányzik a súly vagy az energia (kcal/100 g), ezért nem számít bele. Nyisd meg a tételt a Készletnél, és írd be a doboz adatait.": "tutejszych artykułach spożywczych brakuje wagi albo energii (kcal/100 g), dlatego nie są wliczane. Otwórz pozycję w Zapasie i wpisz dane z opakowania.",

  // --- POTLAS 2026-08-31 (Marveen): a het szotar osszevetesebol hianyzo kulcsok.
  // Az UKRAN valtozat volt az egyetlen teljes (1218 kulcs); ezek a tobbi hatbol
  // kimaradtak. Forditatlanul nem hibaznak, hanem MAGYARUL jelennek meg.
  "A szoba kulcsa": "Klucz pokoju",
  "A tudástár betöltése folyamatban…": "Ładowanie bazy wiedzy…",
  "Távolság mérése": "Pomiar odległości",
  "Törölve.": "Usunięto.",
  "helyszín": "miejsce",
  "Élelmiszer:": "Żywność:",
  "Összes hely": "Wszystkie miejsca",
  "ÜTEM INDÍTÁSA": "URUCHOM RYTM",

  // --- POTLAS 2026-08-31 (Marveen), a `pp-i18n-hiany.mjs` MERESEBoL: 18 szoveg, ami
  // tenylegesen MAGYARUL jelent meg az idegen nyelvu feluleten. A kulcsok a mero
  // kimenetebol valok (`store/pp-i18n-hiany.json`), nem kezzel gepelve.
  // Az ALLPOWERS-tetelknel a MARKANEV es a TIPUS valtozatlan, csak a leiras fordul.
  "2 méter (145 MHz) — amatőr": "2 metry (145 MHz) — krótkofalarstwo",
  "40 méter (7 MHz) — amatőr, rövidhullám": "40 metrów (7 MHz) — krótkofalarstwo, fale krótkie",
  "70 cm (435 MHz) — amatőr": "70 cm (435 MHz) — krótkofalarstwo",
  "80 méter (3,6 MHz) — amatőr, rövidhullám": "80 metrów (3,6 MHz) — krótkofalarstwo, fale krótkie",
  "CB (27 MHz) — polgári sáv": "CB (27 MHz) — pasmo obywatelskie",
  "PMR446 (446 MHz) — engedély nélküli kézirádió": "PMR446 (446 MHz) — radiotelefon bez zezwolenia",
  "ALLPOWERS B1000 bővítő akku (1152 Wh)": "ALLPOWERS B1000 akumulator rozszerzający (1152 Wh)",
  "ALLPOWERS B3000 bővítő akku (3168 Wh)": "ALLPOWERS B3000 akumulator rozszerzający (3168 Wh)",
  "ALLPOWERS P1800 (1024 Wh): 1024 Wh tárolt energia, 1800 W folyamatos kimenet": "ALLPOWERS P1800 (1024 Wh): 1024 Wh zmagazynowanej energii, 1800 W mocy ciągłej",
  "ALLPOWERS SF100 (100 W, hajlékony)": "ALLPOWERS SF100 (100 W, elastyczny)",
  "ALLPOWERS SF200 (200 W, hajlékony)": "ALLPOWERS SF200 (200 W, elastyczny)",
  "ALLPOWERS SP012 (100 W, terepszínű)": "ALLPOWERS SP012 (100 W, moro)",
  "Jegyzet rajzolása": "Narysuj notatkę",
  "2100 kcal fejenként naponta. Járkálás, ház körüli teendők. Ez a nemzetközi vészhelyzeti tervezés alapszáma is.": "2100 kcal na osobę dziennie. Chodzenie, prace przy domu. To także podstawowa liczba w międzynarodowym planowaniu kryzysowym.",
  "A hatótávot HÁROM dolog dönti el, és a watt csak az egyik — rendszerint a legkisebb súlyú. A másik kettő: hogy MILYEN SÁVON adsz, és hogy MI van közted és a másik között. Ezért nem lehet egy rádióra egyetlen kilométer-számot mondani.": "O zasięgu decydują TRZY rzeczy, a waty to tylko jedna z nich — zwykle najmniej istotna. Pozostałe dwie: w JAKIM PAŚMIE nadajesz i CO znajduje się między tobą a drugą stroną. Dlatego dla radia nie da się podać jednej liczby kilometrów.",
  "Írd be, amit tudsz — ami nincs a listán, azt add hozzá a végén. A kilogrammnál a SZÁRAZ tömeg számít (a rizs főzve nehezebb, de ugyanannyi kalória).": "Wpisz, co wiesz — czego nie ma na liście, dodaj na końcu. Przy kilogramach liczy się masa SUCHA (ryż po ugotowaniu waży więcej, ale ma tyle samo kalorii).",
  "Magyarországon engedély nélkül használható, de a törvény MAXIMUM 0,5 wattot és gyári, nem cserélhető antennát enged. Ezért van, hogy a doboz 10 kilométert ígér, a valóság meg 1-3.": "Na Węgrzech można go używać bez zezwolenia, ale prawo dopuszcza MAKSYMALNIE 0,5 wata i fabryczną, niewymienną antenę. Dlatego pudełko obiecuje 10 kilometrów, a rzeczywistość to 1-3.",
  "Nem fogyókúrás számoló. Azt mondja meg, hogy a KÉSZLETED hány napra elég, és mennyi hiányzik ahhoz a naphoz, ameddig ki akarod húzni. A napi szükséglet nem „normál\" étkezés: vészhelyzetben a cél a működőképesség, nem a jóllakottság.": "To nie kalkulator odchudzania. Mówi, na ile dni wystarczy TWÓJ ZAPAS i ile brakuje do dnia, do którego chcesz wytrzymać. Dzienne zapotrzebowanie to nie 'normalne' odżywianie: w sytuacji kryzysowej celem jest sprawność, a nie sytość.",

  // SUGO-TURA (coach) szovegei, 2026-10-05 -- Fonok: "Menjen a forditas."
  "Helyi szoba: szöveg a közeledben lévőknek, közös hálón, internet nélkül.": "Pokój lokalny: tekst dla tych, którzy są blisko ciebie, we wspólnej sieci, bez internetu.",
  "Szobák: zárt csoport, amit a gazda kódjával lehet elérni, interneten át. Messziről is.": "Pokoje: zamknięta grupa dostępna przez kod właściciela, przez internet. Także z daleka.",
  "Morze: rövid üzenet hanggal vagy fénnyel; a vétel kamerával és mikrofonnal megy.": "Morse: krótka wiadomość dźwiękiem lub światłem; odbiór działa przez kamerę i mikrofon.",
  "Fax (SSTV): kép átküldése hangban, rádión is. Ugyanaz a gomb indít és állít.": "Faks (SSTV): przesłanie obrazu w dźwięku, także przez radio. Ten sam przycisk uruchamia i zatrzymuje.",
  "Adás: ide írod az üzenetet, és a telefon hanggal vagy fénnyel leadja.": "Nadawanie: tutaj wpisujesz wiadomość, a telefon nadaje ją dźwiękiem lub światłem.",
  "Olvasás fényből: a kamera a másik villogó fényét olvassa vissza szöveggé.": "Odczyt ze światła: kamera zamienia migające światło drugiej strony z powrotem w tekst.",
  "Olvasás hangból: a mikrofon a sípoló jelet fejti vissza.": "Odczyt z dźwięku: mikrofon odszyfrowuje piszczący sygnał.",
  "Gyakorló: hallás utáni fejtés, kézi kulcs és kopogás — itt tanulod meg.": "Trener: odczyt ze słuchu, klucz ręczny i stukanie — tutaj się tego uczysz.",
  "Alapok: időzítés, sebesség, a teljes ábécé, és mit tegyél zárt helyen.": "Podstawy: rytm, prędkość, pełny alfabet i co robić w zamkniętym pomieszczeniu.",
  "A szoba beállításai": "Ustawienia pokoju",
  "A szoba kódja: ezt add meg annak, akit behívsz. Koppints rá, és a vágólapra kerül.": "Kod pokoju: podaj go temu, kogo zapraszasz. Dotknij, a trafi do schowka.",
  "Értesítés: a készülék engedélye, és külön az, hogy EBBEN a szobában jelezzen-e.": "Powiadomienie: zgoda urządzenia, i osobno to, czy ma powiadamiać w TYM pokoju.",
  "A neved: ezen a néven látnak minden szobában. Egy szobában egy nevet csak egy valaki használhat.": "Twoja nazwa: pod tą nazwą widzą cię w każdym pokoju. W jednym pokoju nazwy może używać tylko jedna osoba.",
  "Tagok: a szoba tagjainak listája. Ha te vagy a gazda, egy tagra koppintva eltávolíthatod: az új üzeneteket már nem látja, és csak új meghívóval jöhet vissza.":
    "Członkowie: lista członków pokoju. Jeśli jesteś gospodarzem, dotknij członka, aby go usunąć: nie zobaczy już nowych wiadomości i wróci tylko z nowym zaproszeniem.",
  "Megszüntetés: ha te vagy a gazda, a törlés mindenkinek megszünteti. Ha nem, csak te lépsz ki.": "Usunięcie: jeśli jesteś właścicielem, usunięcie likwiduje pokój dla wszystkich. Jeśli nie, wychodzisz tylko ty.",
  "A helyi szoba beállításai": "Ustawienia pokoju lokalnego",
  "A szoba kulcsa: közös jelszó. Akinek nincs meg, annak értelmetlen betűsor marad az üzenet.": "Klucz pokoju: wspólne hasło. Kto go nie ma, dla niego wiadomość pozostaje bezsensownym ciągiem liter.",
  "A neved: ezt látják a többiek az üzeneted mellett.": "Twoja nazwa: to widzą inni obok twojej wiadomości.",
  "Morze adás": "Nadawanie Morsea",
  "Ide írod az üzenetet. Ékezet és cirill nem megy: a Morze-tábla latin betűt és számot ismer.": "Tutaj wpisujesz wiadomość. Polskie znaki i cyrylica nie działają: tablica Morsea zna litery łacińskie i cyfry.",
  "Alatta rögtön látod, hogy néz ki Morze-jelekben.": "Zaraz pod spodem widzisz, jak to wygląda w znakach Morsea.",
  "Adás: ugyanaz a gomb indít és állít. Nincs külön Állj.": "Nadawanie: ten sam przycisk uruchamia i zatrzymuje. Nie ma osobnego Stop.",
  "SOS: egy koppintás, és megy a nemzetközi vészjel, amíg le nem állítod.": "SOS: jedno dotknięcie i międzynarodowy sygnał ratunkowy nadaje, dopóki go nie zatrzymasz.",
  "A fogaskerék alatt a sebesség, a hangmagasság, az ismétlés és a villogtatás.": "Pod kołem zębatym: prędkość, wysokość dźwięku, powtarzanie i miganie.",
  "Olvasás fényből": "Odczyt ze światła",
  "Indítsd, és irányítsd a kamerát a villogó fényre. Sötét háttér, a fény a kép közepén.": "Uruchom i skieruj kamerę na migające światło. Ciemne tło, światło na środku kadru.",
  "A lámpa és a sáv mutatja, mit lát a kamera. Ha nem villan, nem jó a kivágás.": "Lampka i pasek pokazują, co widzi kamera. Jeśli nie miga, kadr jest zły.",
  "Fent a nyers jel, alatta a megfejtett szöveg.": "Na górze surowy sygnał, pod nim odszyfrowany tekst.",
  "A fogaskerék alatt a vétel-sebesség, a nagyítás és a kalibráció.": "Pod kołem zębatym: prędkość odbioru, powiększenie i kalibracja.",
  "Olvasás hangból": "Odczyt z dźwięku",
  "Indítsd, és tartsd a telefont a hang felé. Csendben megy a legjobban.": "Uruchom i skieruj telefon w stronę dźwięku. Najlepiej działa w ciszy.",
  "A lámpa és a frekvencia mutatja, mit hall. Zajra az érzékenységet szigorítsd.": "Lampka i częstotliwość pokazują, co słyszy. Przy hałasie zaostrz czułość.",
  "A fogaskerék alatt a vétel-sebesség, az érzékenység és a kalibráció.": "Pod kołem zębatym: prędkość odbioru, czułość i kalibracja.",
  "Morze gyakorló": "Trener Morsea",
  "Három mód: hallás után, kézi kulcs és kopogás. Egy koppintás a váltás.": "Trzy tryby: ze słuchu, klucz ręczny i stukanie. Jedno dotknięcie przełącza.",
  "Mit gyakorolsz: betű, szám, három jel vagy szó. Kezdd a betűvel.": "Co ćwiczysz: litera, cyfra, trzy znaki albo słowo. Zacznij od litery.",
  "Új feladat lejátszik egy jelet. Ha nem kaptad el, játszd le újra.": "Nowe zadanie odtwarza sygnał. Jeśli go nie złapałeś, odtwórz ponownie.",
  "Írd le, amit hallottál, és ellenőrizd. A megoldás és a Morze-minta csak utána látszik.": "Zapisz, co usłyszałeś, i sprawdź. Rozwiązanie i wzór Morsea pojawiają się dopiero potem.",
  "Kézi kulcs": "Klucz ręczny",
  "Nyomd és tartsd: rövid a pont, hosszú a vonás. Gépen a szóköz is kulcs.": "Naciśnij i przytrzymaj: krótko to kropka, długo to kreska. Na komputerze spacja też jest kluczem.",
  "Fent a jel, alatta amit a gép kiolvasott belőle. A szünet hossza adja a betű- és szóhatárt.": "Na górze sygnał, pod nim to, co aplikacja z niego odczytała. Długość przerwy wyznacza granicę litery i słowa.",
  "Törlés: tiszta lappal kezdesz.": "Wyczyść: zaczynasz z czystą kartką.",
  "Kopogás": "Stukanie",
  "A rács: minden betű két koppintás-csoport, előbb a sor, aztán az oszlop. A C és a K egy mezőn van.": "Siatka: każda litera to dwie grupy stuknięć, najpierw wiersz, potem kolumna. C i K dzielą jedno pole.",
  "Mutat egy betűt, te lekopogod: sor, szünet, oszlop. A szünet zárja a csoportot.": "Pokazuje literę, a ty ją wystukujesz: wiersz, przerwa, kolumna. Przerwa zamyka grupę.",
  "Megmondja, jó volt-e, és kiírja a betű helyét a rácsban.": "Mówi, czy było dobrze, i pokazuje miejsce litery w siatce.",
  "Morze alapok": "Podstawy Morsea",
  "A teljes ábécé. Ez a táblázat magából a kódból épül, tehát nem tud eltérni attól, amit az app ad.": "Pełny alfabet. Ta tabela budowana jest z samego kodu, więc nie może różnić się od tego, co nadaje aplikacja.",
  "Kézi visszafejtés: ha leírtad a hallott jelet, ide beírva megkapod a szöveget.": "Odczyt ręczny: jeśli zapisałeś usłyszany sygnał, wpisz go tutaj, a otrzymasz tekst.",
  "Adás beállításai": "Ustawienia nadawania",
  "Sebesség és hangmagasság. Kezdőnek a lassabb a jobb.": "Prędkość i wysokość dźwięku. Dla początkującego lepsza jest wolniejsza.",
  "Ismétlés: addig megy a jel, amíg le nem állítod.": "Powtarzanie: sygnał nadaje, dopóki go nie zatrzymasz.",
  "Fény, hang vagy mindkettő. A vaku nem minden telefonon megy; a képernyő mindig.": "Światło, dźwięk albo oba. Lampa błyskowa nie działa w każdym telefonie; ekran zawsze.",
  "Kalibrációs adás: a PARIS szót küldi, amiből a másik fél beállítja a tempót.": "Nadawanie kalibracyjne: wysyła słowo PARIS, po którym druga strona ustawia tempo.",
  "Fény-vétel beállításai": "Ustawienia odbioru ze światła",
  "Vétel-sebesség: állítsd a vett Morze tempójához, amíg tisztán jönnek a betűk.": "Prędkość odbioru: ustaw ją na tempo odbieranego Morsea, aż litery będą przychodzić czysto.",
  "Nagyítás: távoli fényhez.": "Powiększenie: do odległego światła.",
  "Kalibráció: a másik PARIS-t küld, ez megméri belőle a tempót.": "Kalibracja: druga strona nadaje PARIS, a z tego mierzone jest tempo.",
  "Hang-vétel beállításai": "Ustawienia odbioru z dźwięku",
  "Vétel-sebesség: állítsd a vett Morze tempójához.": "Prędkość odbioru: ustaw ją na tempo odbieranego Morsea.",
  "Érzékenység: balra érzékenyebb, jobbra szigorúbb a zajra.": "Czułość: w lewo czulsza, w prawo surowsza wobec hałasu.",
  "Mód: Martin M1 a biztos; a vevőnek ugyanezt kell tudnia.": "Tryb: Martin M1 jest pewny; odbiornik musi znać ten sam.",
  "Kép választása, majd Adás: a telefon hangként játssza le. Tartsd a rádió mikrofonjához.": "Wybierz obraz, a potem Nadaj: telefon odtwarza go jako dźwięk. Przyłóż go do mikrofonu radia.",
  "Vétel: ugyanaz a gomb indít és állít. Hangfájlból is megy, ha valaki felvételt küld.": "Odbiór: ten sam przycisk uruchamia i zatrzymuje. Działa też z pliku dźwiękowego, jeśli ktoś przyśle nagranie.",
  "Nyomd hosszan a térképet: ott új pontot veszel fel. A helyszínek jelölőjén a szám a készültség, nem sorszám.": "Przytrzymaj mapę: w tym miejscu dodasz nowy punkt. Na znacznikach Twoich miejsc liczba oznacza poziom gotowości, a nie numer kolejny.",
  "Mérés: két koppintás, és megkapod a távolságot.": "Pomiar: dwa dotknięcia i masz odległość.",
  "Pont ide, ahol vagyok: a GPS helyedet menti. Helyzetem küldése: elküldöd valakinek, hol vagy.": "Punkt dokładnie tutaj: zapisuje twoją pozycję GPS. Wyślij moją pozycję: wysyłasz komuś, gdzie jesteś.",
  "Pontok kimentése (GPX): a pontjaid fájlba, más térképbe is.": "Eksport punktów (GPX): twoje punkty do pliku, także do innych map.",
  "Terület letöltése: a térkép offline is meglesz. Ha nem kell már, a Tárolt térkép törlése felszabadítja a helyet.": "Pobierz obszar: mapa będzie dostępna także offline. Jeśli już jej nie potrzebujesz, Usuń zapisaną mapę zwalnia miejsce.",
  "A bővített tudástár a Prémium része: prémium kóddal, egyszeri feloldással, véglegesen. A cikk elején látod, meddig tart az ingyenes rész és hol kezdődik a bővített.": "Rozszerzona baza wiedzy jest częścią Premium: odblokowana raz kodem premium, na stałe. Na początku artykułu widzisz, gdzie kończy się część darmowa, a zaczyna rozszerzona.",
  "Kereséssel gyorsabban odaérsz, mint görgetéssel.": "Wyszukiwaniem dotrzesz szybciej niż przewijaniem.",
  "Új tétel: mi az, mennyi, hol tartod, mikor jár le. A lejárat színe magától változik.": "Nowa pozycja: co to jest, ile, gdzie trzymasz, kiedy się przeterminuje. Kolor terminu zmienia się sam.",
  "Szűrés kategóriára, helyszínre és készlet-fajtára: a 72 órás csomagot például külön látod.": "Filtrowanie po kategorii, lokalizacji i rodzaju zapasu: pakiet 72-godzinny na przykład widzisz osobno.",
  "72h csomag: egy koppintással feltölti az alap-listát, amit aztán a sajátodra igazítasz.": "Pakiet 72h: jedno dotknięcie wypełnia listę podstawową, którą potem dopasowujesz do swojej.",
  "Export: a lista fájlba, például a családnak. Ürítés: mindent töröl, előtte exportálj.": "Eksport: lista do pliku, na przykład dla rodziny. Opróżnienie: usuwa wszystko, wcześniej wyeksportuj.",
  "Kik mennek: a lista a Háztartásnál felvett családtagokból áll össze.": "Kto idzie: lista powstaje z członków rodziny dodanych w Gospodarstwie.",
  "Hogyan és milyen út: autóval más fér, mint hátizsákkal; a túra fajtája hozza a saját tételeit.": "Jak i jaka droga: do samochodu mieści się co innego niż do plecaka; rodzaj wyprawy przynosi własne pozycje.",
  "Hány napra: ebből számol a víz és az élelem.": "Na ile dni: z tego liczone są woda i jedzenie.",
  "A súlykeret azt mutatja, mennyit bírtok el összesen, nem azt, mennyi fér a zsákba.": "Limit wagi pokazuje, ile udźwigniecie razem, a nie ile zmieści się do plecaka.",
  "Itt veszed fel a családot. Innen jön a fejadag és a Mit vigyek lista.": "Tutaj dodajesz rodzinę. Stąd biorą się racja dzienna i lista Co zabrać.",
  "Háziállat is számít: víz és élelem neki is kell.": "Zwierzęta też się liczą: im również potrzebna jest woda i jedzenie.",
  "Helyszín: otthon, nyaraló, autó. Mindegyiknek saját készlete és készültség-kártyája lesz a kezdőlapon.": "Lokalizacja: dom, domek letniskowy, samochód. Każda będzie miała własny zapas i własną kartę gotowości na stronie głównej.",
  "Ezt látja, aki megtalálja a telefonod. Csak azt írd ide, amit egy idegen is láthat.": "To widzi ten, kto znajdzie twój telefon. Wpisuj tu tylko to, co może zobaczyć także obcy.",
  "Vércsoport, allergia, gyógyszer, betegség: ez az, ami egy mentőnek számít.": "Grupa krwi, alergia, lek, choroba: to się liczy dla ratownika.",
  "Kit hívjanak: egy név és egy szám elég.": "Kogo wezwać: wystarczy jedno imię i jeden numer.",
  "QR-kód: a kártya egy képben, amit a másik telefon beolvas.": "Kod QR: karta w jednym obrazie, który zeskanuje inny telefon.",
  "Nyomtatás: a tárcába. Mind nyomtatása minden családtagét, a Családi kártya egy QR-ral az egész családot.": "Druk: do portfela. Drukuj wszystkie drukuje kartę każdego członka rodziny, a Karta rodzinna mieści całą rodzinę w jednym QR.",
  "PIN: az iratok zárva vannak, amíg be nem írod.": "PIN: dokumenty są zablokowane, dopóki go nie wpiszesz.",
  "Hozzáadás: fotó vagy PDF. A telefonon marad, felhőbe nem megy.": "Dodaj: zdjęcie albo PDF. Zostaje w telefonie, nie trafia do chmury.",
  "Közös jelszó: egy mondat, amit csak ti tudtok. Ugyanaz kell mindkét telefonon; mentsd el.": "Wspólne hasło: zdanie, które znacie tylko wy. Na obu telefonach potrzebne jest to samo; zapisz je.",
  "Üzenet vagy hely, majd QR készítése. A kód a teljes adatot viszi, nem linket: internet nélkül is megy.": "Wiadomość albo miejsce, a potem Utwórz QR. Kod niesie pełne dane, nie link: działa też bez internetu.",
  "Beolvasás kamerával vagy fájlból, majd Megfejtés. Csak a jelszó birtokosa olvassa.": "Odczyt kamerą albo z pliku, a potem Odszyfruj. Czyta tylko ten, kto ma hasło.",
  "Az imádságok mindig itt vannak, letöltés nélkül is. Koppints egy címre, és olvasd.": "Modlitwy są zawsze tutaj, nawet bez pobierania. Dotknij tytułu i czytaj.",
  "A teljes Biblia egyszer letöltendő, utána offline is működik. Ha ez a gomb látszik, még nincs letöltve.": "Pełną Biblię trzeba raz pobrać, potem działa także offline. Jeśli ten przycisk jest widoczny, jeszcze nie została pobrana.",
  "A könyvek rácsa: Ószövetség fent, Újszövetség lent. Koppints a könyvre, aztán a fejezetre, aztán a versre.": "Siatka ksiąg: Stary Testament u góry, Nowy Testament niżej. Dotknij księgi, potem rozdziału, potem wersetu.",
  "Keresés szó szerint, vagy hely szerint (Ján 3,16). Amit megjelölsz, a Kiemeléseim alatt visszatalálod.": "Szukaj po słowach albo po miejscu (J 3,16). To, co zaznaczysz, odnajdziesz w Moich zaznaczeniach.",
  "PIN: a tárca zárva van, amíg be nem írod. Első használatkor te adod meg.": "PIN: portfel jest zablokowany, dopóki go nie wpiszesz. Przy pierwszym użyciu ustalasz go sam.",
  "A szám azt mutatja, mennyi áll a tárcádban; a rekeszek külön célra tesznek félre.": "Liczba pokazuje, ile masz w portfelu; przegródki odkładają na osobne cele.",
  "Felveszed az azimutot, és a tájoló mutatja a visszautat is. Törlés, ha új irány kell.": "Zapisujesz azymut, a kompas pokazuje też drogę powrotną. Wyczyść, jeśli potrzebujesz nowego kierunku.",
  "Napkelte, napnyugta, holdfázis: mennyi világosod van. Mérés a helyzetemre pontosít GPS-szel.": "Wschód, zachód słońca, faza księżyca: ile masz światła dziennego. Pomiar uściśla to do twojej pozycji przez GPS.",
  "Légnyomás: írd be vagy mérd a szenzorral, és rögzítsd. Az esés vihart jelez; a küszöb és az értesítés itt állítható.": "Ciśnienie: wpisz je albo zmierz czujnikiem i zapisz. Spadek zapowiada burzę; próg i powiadomienie ustawisz tutaj.",
  "Több számoló egy helyen: koppints arra, amelyik kell. Mindegyik egy kérdésre válaszol: meddig elég, mennyi kell.": "Kilka kalkulatorów w jednym miejscu: dotknij tego, którego potrzebujesz. Każdy odpowiada na jedno pytanie: na jak długo starczy, ile potrzeba.",
  "Víztisztítás: mennyi hipó kell, és meddig kell forralni. A töménységet az üvegről olvasd le.": "Uzdatnianie wody: ile potrzeba wybielacza i jak długo trzeba gotować. Stężenie odczytaj z butelki.",
  "Két út van: forralás vagy hipó. A forralás egyszerűbb, a hipó akkor jó, ha nincs mivel tüzelni.": "Są dwie drogi: gotowanie albo wybielacz. Gotowanie jest prostsze, wybielacz dobry, gdy nie ma czym rozpalić ognia.",
  "A hipó töménységét az ÜVEGRŐL olvasd le. A megadott mennyiségek 5 százalékos szerre szólnak — gyengébből több kell. Ha az üvegen más áll, ne fejből számolj.": "Stężenie wybielacza odczytaj Z BUTELKI. Podane ilości dotyczą środka 5-procentowego — słabszego potrzeba więcej. Jeśli na butelce jest co innego, nie licz z pamięci.",
  "A számoló a megadott töménységgel dolgozik. Ha átállítod, a mennyiség is változik — ezért kérdezi meg.": "Kalkulator pracuje na podanym stężeniu. Jeśli je zmienisz, zmieni się też ilość — dlatego pyta.",
  "A Szoba zárt csoport, ami interneten át is elérhető: aki messze van, az is beszélget. A Helyi szoba ezzel szemben a közeledben lévőknek szól, hálózat nélkül.": "Pokój to zamknięta grupa dostępna także przez internet: rozmawia też ten, kto jest daleko. Pokój lokalny natomiast jest dla tych blisko ciebie, bez sieci.",
  "Új szobát itt hozol létre. Te leszel a gazdája: te engeded be, aki kér.": "Tutaj tworzysz nowy pokój. Będziesz jego właścicielem: ty wpuszczasz tego, kto prosi.",
  "Ha máshoz csatlakoznál: írd be a gazdától kapott kódot, és küldd el a kérelmet. A gazda jóváhagyása után vagy bent.": "Jeśli chcesz dołączyć do kogoś innego: wpisz kod otrzymany od właściciela i wyślij prośbę. Po jego zgodzie jesteś w środku.",
  "Ide írod az üzenetet, és a Küldés viszi el a szoba minden tagjának.": "Tutaj wpisujesz wiadomość, a Wyślij zanosi ją do wszystkich członków pokoju.",
  "A Sürgős jelölés pirossal emeli ki az üzenetet mindenkinél.": "Oznaczenie Pilne wyróżnia wiadomość na czerwono u wszystkich.",
  "Gazdaként itt látod a belépési kérelmeket, és itt adod ki a meghívó-kódot.": "Jako właściciel widzisz tu prośby o dołączenie i tutaj wydajesz kod zaproszenia.",
  "Helyi üzenetek": "Wiadomości lokalne",
  "A Helyi szoba a közeledben lévő telefonoknak szól, közös hálón, internet nélkül. A pont zölden mutatja, ha él a kapcsolat.": "Pokój lokalny jest dla telefonów blisko ciebie, we wspólnej sieci, bez internetu. Kropka świeci na zielono, gdy połączenie działa.",
  "Ha nem talál senkit: Próbáld újra. Mindenkinek ugyanazon a helyi hálón kell lennie.": "Jeśli nikogo nie znajdzie: Spróbuj ponownie. Wszyscy muszą być w tej samej sieci lokalnej.",
  "A közös kulcs titkosítja az üzeneteket: ugyanazt a kulcsot add meg minden telefonon, és mentsd el.": "Wspólny klucz szyfruje wiadomości: podaj ten sam klucz na każdym telefonie i zapisz go.",
  "Kommunikáció: üzenet szöveggel, hanggal vagy fénnyel, akkor is, ha nincs térerő.": "Komunikacja: wiadomość tekstem, dźwiękiem albo światłem, nawet gdy nie ma zasięgu.",
  "Térkép: helyszíneid, offline térképpel és mért távolsággal.": "Mapa: twoje lokalizacje, z mapą offline i zmierzoną odległością.",
  "Tudástár: a felkészülés cikkei, kereshetően.": "Baza wiedzy: artykuły o przygotowaniu, z wyszukiwaniem.",
  "Készlet: mi van, hol van, mikor jár le.": "Zapasy: co jest, gdzie jest, kiedy się przeterminuje.",
  "Mit vigyek: a csomaglista a családodra és az útra szabva.": "Co zabrać: lista pakowania dopasowana do twojej rodziny i drogi.",
  "Kockázat: a leggyengébb pontod egy gyűrűn.": "Ryzyko: twój najsłabszy punkt na jednym pierścieniu.",
  "Háztartás: a családtagok és a helyszínek; innen számol minden más.": "Gospodarstwo: członkowie rodziny i lokalizacje; stąd liczy się wszystko inne.",
  "Vészkártya: amit egy idegen láthat, ha megtalálja a telefonod.": "Karta ratunkowa: to, co obcy może zobaczyć, jeśli znajdzie twój telefon.",
  "Irattárca: az iratok fotói a telefonon, PIN mögött.": "Portfel dokumentów: zdjęcia twoich dokumentów w telefonie, za PIN-em.",
  "Titkos QR: üzenet vagy hely, amit csak a kód olvasója lát.": "Tajny QR: wiadomość albo miejsce, które widzi tylko posiadacz kodu.",
  "Biblia: imádságok, keresés, kiemelések, offline.": "Biblia: modlitwy, wyszukiwanie, zaznaczenia, offline.",
  "Token tárca: az egyenleged és a rekeszeid.": "Portfel tokenów: twoje saldo i twoje przegródki.",
  "Tájoló: irány, azimut, napkelte és napnyugta.": "Kompas: kierunek, azymut, wschód i zachód słońca.",
  "Kalkulátor: víz, áram, kalória, fűtés és a többi számoló egy helyen.": "Kalkulator: woda, prąd, kalorie, ogrzewanie i pozostałe kalkulatory w jednym miejscu.",
  "Vagyonkezelő: kiadás, bevétel, zsebek, a saját lapján.": "Zarządzanie majątkiem: wydatki, wpływy, kieszenie, na własnej stronie.",
  "Gyülekező: a közösség fóruma, interneten.": "Zbiórka: forum społeczności, w internecie.",
  "Nyelv: az app felülete azonnal átvált, a tudástár cikkei is, ha van fordításuk.": "Język: interfejs aplikacji przełącza się od razu, a artykuły bazy wiedzy też, jeśli mają tłumaczenie.",
  "Teljes mentés: minden adatod egy fájlba, amit vissza tudsz tölteni egy másik telefonon.": "Pełna kopia: wszystkie twoje dane do jednego pliku, który możesz przywrócić na innym telefonie.",
  "Visszatöltés a mentett fájlból. A biztonsági másolatból akkor állíts vissza, ha egy mentés félresikerült.": "Przywracanie z zapisanego pliku. Z kopii zapasowej przywracaj wtedy, gdy zapis się nie udał.",
  "Menüsor bemutatása: az alsó gombok súgója újra.": "Prezentacja paska menu: pomoc dolnych przycisków jeszcze raz.",
  "Gyári visszaállítás mindent töröl a telefonról. Előtte ments.": "Przywrócenie ustawień fabrycznych usuwa wszystko z telefonu. Wcześniej zrób kopię.",
  "Ha az app sötét vagy üres marad: engedélyezd a vírusirtóban (például Avast), vagy használd a böngészős változatot. A Play-áruházban vásárolt prémium árát 48 órán belül visszakérheted.": "Jeśli aplikacja pozostaje ciemna lub pusta: zezwól na nią w programie antywirusowym (na przykład Avast) albo użyj wersji w przeglądarce. Za premium kupione w Google Play możesz uzyskać zwrot w ciągu 48 godzin.",
  "Itt minden modul listában is elérhető, ugyanoda visz, mint a kezdőlap csempéi.": "Tutaj każdy moduł jest dostępny także na liście, prowadzi w to samo miejsce co kafelki strony głównej.",
  "Add meg, mi az, mennyi, és mennyit nyom: ebből számol a készlet és a Mit vigyek.": "Podaj, co to jest, ile i ile waży: z tego liczone są zapasy i Co zabrać.",
  "A lejárathoz elég egy gyors gomb: +6 hónap, +1 év. A színe magától változik, ahogy közeledik.": "Na termin wystarczy szybki przycisk: +6 miesięcy, +1 rok. Kolor zmienia się sam, w miarę zbliżania.",
  "Hol tartod: a helyszín dönti el, melyik készültség-kártyán jelenik meg.": "Gdzie trzymasz: lokalizacja decyduje, na której karcie gotowości się pojawi.",
  "A képernyő-fény húzással állítható: minél erősebb, annál messzebbről látszik — de annál gyorsabban fogy az akku.": "Światło ekranu reguluje się przeciąganiem: im mocniejsze, tym z dalej widoczne — ale tym szybciej ubywa baterii.",
  "Böngészőből iPhone-on a vaku egyáltalán nem indul, Androidon sem mindenhol. A képernyő-fény viszont mindig van.": "Z przeglądarki na iPhonie lampa błyskowa w ogóle się nie uruchamia, na Androidzie też nie wszędzie. Światło ekranu jest natomiast zawsze.",
  "Sípolás: éles hang a telefonból; a Folyamatos addig szól, amíg le nem állítod. A hangmagasság állítható.": "Gwizd: ostry dźwięk z telefonu; Ciągły brzmi, dopóki go nie zatrzymasz. Wysokość dźwięku można regulować.",
  "Újraélesztés üteme: a gomb tartja a helyes tempót. Nyomd a mellkast a jelre.": "Rytm resuscytacji: przycisk utrzymuje właściwe tempo. Uciskaj klatkę piersiową w rytm.",
  "112 hívása: közvetlenül tárcsáz. Ha nincs térerő, a segélyhívás akkor is próbálkozik.": "Połączenie z 112: wybiera bezpośrednio. Jeśli nie ma zasięgu, połączenie alarmowe i tak próbuje.",
  "Mobiltelefon": "Telefon komórkowy",
  "Kézi rádió (adóvevő)": "Radiotelefon ręczny",
  "Zsebrádió": "Radio kieszonkowe",
  "Átjátszó": "Przemiennik",
  "Antenna": "Antena",
  "Takaró / pokróc": "Koc",
};

// 2026-10-11: Biblia nyito csempek, beallitasok, vers-menu, jegyzetek, kereszthivatkozasok, hang-letoltes
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "+ Új kategória…": "+ Nowa kategoria…",
  "A letölthető hanganyag listája most nem érhető el.": "Lista audio do pobrania jest teraz niedostępna.",
  "A letöltés csak nyitott alkalmazással halad. Ha bezárod, a következő megnyitáskor magától folytatódik.": "Pobieranie postępuje tylko przy otwartej aplikacji. Jeśli ją zamkniesz, wznowi się samo przy następnym otwarciu.",
  "A letöltés megállt": "Pobieranie zatrzymane",
  "A letöltéshez be kell jelentkezned a fiókodba (Profil → Fiók).": "Aby pobrać, zaloguj się na swoje konto (Profil → Konto).",
  "A letöltéshez újra be kell lépned. Frissítsd az oldalt, és lépj be.": "Aby pobrać, musisz zalogować się ponownie. Odśwież stronę i zaloguj się.",
  "A telefon saját hangja": "Własny głos telefonu",
  "A vers a vágólapra került, illeszd be, ahová szeretnéd.": "Werset jest w schowku; wklej go, gdzie chcesz.",
  "A versek mellett egy kis jel mutatja, ha más igék kapcsolódnak hozzá; rákoppintva átugorhatsz a kapcsolódó igére. Forrás: OpenBible.info (CC BY).": "Mały znak przy wersecie pokazuje, że łączą się z nim inne wersety; dotknij, aby przejść do powiązanego wersetu. Źródło: OpenBible.info (CC BY).",
  "Az új kategória neve:": "Nazwa nowej kategorii:",
  "Biblia beállítások": "Ustawienia Biblii",
  "Csak magyar nyelven érhető el.": "Dostępne tylko po węgiersku.",
  "Ez az eszköz nem enged másolni.": "To urządzenie nie pozwala kopiować.",
  "Felolvasás beállításai": "Ustawienia czytania na głos",
  "Felolvasó hang": "Głos lektora",
  "Forrás: OpenBible.info kereszthivatkozások (CC BY), a legtöbbet szavazottak.": "Źródło: odsyłacze OpenBible.info (CC BY), najwyżej oceniane.",
  "Imák": "Modlitwy",
  "Jegyzeteim": "Moje notatki",
  "Jobb minőségű, természetesebb felolvasás a Károli-fordításhoz. Internettel azonnal szól; ha letöltöd, internet nélkül is.": "Lepsza, bardziej naturalna lektura przekładu Károli. Z internetem od razu; po pobraniu także offline.",
  "Kapcsolódó igék": "Powiązane wersety",
  "Kereszthivatkozások": "Odsyłacze",
  "Kereszthivatkozások megjelenítése": "Pokaż odsyłacze",
  "Keresés": "Szukaj",
  "Kiemelés": "Zaznacz",
  "Kiemelés levétele": "Usuń zaznaczenie",
  "Kiemelések": "Zaznaczenia",
  "Kommentár": "Komentarz",
  "Kommentár hozzáadása": "Dodaj komentarz",
  "Kommentár megnyitása": "Otwórz komentarz",
  "Kommentár szerkesztése": "Edytuj komentarz",
  "Kommentárjaim": "Moje komentarze",
  "Kommentárok": "Komentarze",
  "Könyvjelző": "Zakładka",
  "Könyvjelző hozzáadása": "Dodaj zakładkę",
  "Könyvjelző módosítása": "Zmień zakładkę",
  "Könyvjelző törlése": "Usuń zakładkę",
  "Könyvjelzők": "Zakładki",
  "Letöltve": "Pobrano",
  "Letöltés folyamatban": "Pobieranie w toku",
  "Letöltés folytatása": "Kontynuuj pobieranie",
  "Letöltés internet nélküli felolvasáshoz": "Pobierz do czytania offline",
  "Megosztás": "Udostępnij",
  "Megszakadt az internetkapcsolat. Amit már letöltöttél, megmarad; a gombbal folytathatod.": "Połączenie z internetem zostało przerwane. To, co już pobrano, zostaje; kontynuuj przyciskiem.",
  "Melyik szóra keressünk a Bibliában?": "Jakiego słowa szukamy w Biblii?",
  "Mind törlése": "Usuń wszystko",
  "Még nincs kiemelt vers. Tartsd nyomva egy verset, és válaszd a Kiemelés pontot.": "Brak zaznaczonych wersetów. Przytrzymaj werset i wybierz Zaznacz.",
  "Még nincs kommentár. Tartsd nyomva egy verset, és válaszd a Kommentár hozzáadása pontot.": "Brak komentarzy. Przytrzymaj werset i wybierz Dodaj komentarz.",
  "Még nincs könyvjelző. Tartsd nyomva egy verset, és válaszd a Könyvjelző hozzáadása pontot.": "Brak zakładek. Przytrzymaj werset i wybierz Dodaj zakładkę.",
  "Nem foglal helyet, internet nélkül is szól. Kisebb telefonokra ezt ajánljuk.": "Nie zajmuje miejsca i działa offline. Polecany dla mniejszych telefonów.",
  "PrepperPapa hang": "Głos PrepperPapa",
  "Saját szín hozzáadása": "Dodaj własny kolor",
  "Saját szín törlése: tartsd nyomva a színt.": "Usuń własny kolor: przytrzymaj go.",
  "Teljes Biblia letöltése": "Pobierz całą Biblię",
  "Törlöd az összes letöltött hanganyagot?": "Usunąć wszystkie pobrane nagrania?",
  "Törlöd ezt a saját színt a választékból? A már kiemelt versek megmaradnak.": "Usunąć ten kolor z palety? Zaznaczone już wersety pozostaną zaznaczone.",
  "Válassz színt": "Wybierz kolor",
  "Vár": "Czeka",
  "Általános": "Ogólne",
  "Várakozó könyvek": "Książki w kolejce",
});

// 2026-10-11: a Biblia sugo v4 szovegei
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Biblia: itt a könyvek rácsa és a keresés. A teljes szöveg egyszer letöltendő, utána internet nélkül is olvasható.": "Biblia: tu jest siatka ksiąg i wyszukiwanie. Pełny tekst pobierasz raz, potem można go czytać offline.",
  "Imák: mindig elérhetők, letöltés nélkül is. Koppints egy címre, és olvasd.": "Modlitwy: zawsze dostępne, nawet bez pobierania. Dotknij tytułu i czytaj.",
  "Vészhelyzeti igék és próféciák: válogatott szakaszok, egy koppintással.": "Wersety na sytuacje kryzysowe i proroctwa: wybrane fragmenty, jednym dotknięciem.",
  "Az app bibliaolvasót tartalmaz. A lelki felkészültség rész keresztény szemszögből készült.": "Aplikacja zawiera czytnik Biblii. Część o przygotowaniu duchowym powstała z perspektywy chrześcijańskiej.",
  "Tartsd nyomva egy verset: keresés, kiemelés, kommentár, könyvjelző és megosztás. Amit így jelölsz, a Kiemeléseim és a Kommentárjaim alatt visszatalálod.": "Przytrzymaj werset: szukaj, zaznacz, komentarz, zakładka i udostępnianie. To, co tak oznaczysz, znajdziesz w Moich zaznaczeniach i Moich komentarzach.",
  "Beállítások: a felolvasó hang, a letöltés internet nélküli felolvasáshoz, és a kereszthivatkozások bekapcsolása.": "Ustawienia: głos lektora, pobieranie do czytania offline i włączanie odsyłaczy.",
});

// 2026-10-11: Biblia forditas-valaszto
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Biblia-fordítás": "Przekład Biblii",
  "Itt azok a fordítások látszanak, amelyeket már letöltöttél. Másik nyelvű Bibliát a felület nyelvének átállításával tölthetsz le.": "Tutaj widać przekłady, które już pobrałeś. Biblię w innym języku pobierzesz, zmieniając język aplikacji.",
  "Ez a fordítás most nem érhető el.": "Ten przekład jest teraz niedostępny.",
});

// MEGVALLASOK + SAJAT IMA (Fonok 2026-10-11 10:09/10:10)
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Megvallások": "Wyznania",
  "Még nincs itt semmi. A jobb alsó plusz gombbal hozzáadhatsz egy sajátot.": "Nic tu jeszcze nie ma. Przyciskiem plus w prawym dolnym rogu dodasz własne.",
  "Csak ezen a készüléken tárolódik.": "Zapisywane tylko na tym urządzeniu.",
  "Saját hozzáadása": "Dodaj własne",
  "Add meg a címet és a szöveget.": "Podaj tytuł i tekst.",
  "Nem sikerült menteni.": "Nie udało się zapisać.",
  "Biztosan törlöd?": "Na pewno usunąć?",
  "saját": "własne",
});

// OLVASASI TERV (Fonok 2026-10-11 10:42)
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Olvasási terv": "Plan czytania",
  "Válassz egy tervet. A haladásodat a telefon megjegyzi, és mutatja, hol tartasz.": "Wybierz plan. Telefon zapamięta twoje postępy i pokaże, gdzie jesteś.",
  "Válassz egy tervet. Több tervet is olvashatsz egyszerre, mindegyiknél külön megmarad, hol tartasz.": "Wybierz plan. Możesz czytać kilka planów naraz; każdy osobno zapamiętuje, gdzie jesteś.",
  "Teljes Biblia egy év alatt": "Cała Biblia w rok",
  "Az elejétől a végéig, a könyvek sorrendjében.": "Od początku do końca, w kolejności ksiąg.",
  "Kronologikus Biblia egy év alatt": "Biblia chronologicznie w rok",
  "Az események időrendjében: Jób a pátriárkák korában, a Zsoltárok Dávid idején, a próféták a királyok mellett, a levelek az Apostolok cselekedetei közé illesztve.": "W kolejności wydarzeń: Hiob w czasach patriarchów, Psalmy w czasach Dawida, prorocy obok królów, listy wplecione w Dzieje Apostolskie.",
  "Teljes Biblia 90 nap alatt": "Cała Biblia w 90 dni",
  "Gyors ütemű, a könyvek sorrendjében.": "Szybkie tempo, w kolejności ksiąg.",
  "Újszövetség 90 nap alatt": "Nowy Testament w 90 dni",
  "Máté evangéliumától a Jelenésekig.": "Od Mateusza do Apokalipsy.",
  "Az evangéliumok 30 nap alatt": "Ewangelie w 30 dni",
  "Máté, Márk, Lukács és János.": "Mateusz, Marek, Łukasz i Jan.",
  "Zsoltárok és Példabeszédek 60 nap alatt": "Psalmy i Przysłowia w 60 dni",
  "Napi néhány zsoltár és egy kis bölcsesség.": "Codziennie kilka psalmów i trochę mądrości.",
  "Elindítod ezt a tervet?": "Rozpocząć ten plan?",
  "A tervet befejezted. Áldás rá!": "Ukończyłeś plan. Szczęść Boże!",
  "Tartod az ütemet.": "Trzymasz tempo.",
  "Elolvastam": "Przeczytane",
  "Minden nap": "Wszystkie dni",
  "Terv leállítása": "Zatrzymaj plan",
  "Leállítod a tervet? A haladásod törlődik.": "Zatrzymać plan? Twoje postępy zostaną usunięte.",
});

// SUGO bible v5 (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Biblia: itt a könyvek rácsa és a keresés. Fönt a fordítás, a könyv, a fejezet és a vers koppintható, így gyorsan odaugrasz. A teljes szöveg egyszer letöltendő, utána internet nélkül is olvasható.": "Biblia: siatka ksiąg i wyszukiwanie. U góry przekład, księgę, rozdział i werset można dotknąć, by szybko tam przejść. Pełny tekst pobierasz raz, potem działa bez internetu.",
  "Imák és megvallások: a jobb alsó plusz gombbal hozzáadhatod a sajátjaidat. Ezek csak ezen a telefonon tárolódnak.": "Modlitwy i wyznania: dodaj własne przyciskiem plus w prawym dolnym rogu. Są zapisywane tylko na tym telefonie.",
  "Olvasási terv: válassz egy tervet, például a kronologikusat, és itt látod, hol tartasz, és mi a következő olvasmány.": "Plan czytania: wybierz plan, na przykład chronologiczny, i zobacz, gdzie jesteś i co czytać dalej.",
});

// SZOBAKULCS UJ ESZKOZON (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Ezen az eszközön nincs meg ennek a szobának a kulcsa: a korábbi üzenetek egy másik kulccsal készültek (másik telefonon vagy újratelepítés előtt). Ha megvan egy régi meghívó linked ehhez a szobához, nyisd meg azt ezen a telefonon, és minden olvasható lesz. Ha most új kulcsot készítesz, a régi tagok csak új meghívó link után olvassák az üzeneteidet. Készítsek új kulcsot?": "To urządzenie nie ma klucza do tego pokoju: wcześniejsze wiadomości powstały z innym kluczem (na innym telefonie lub przed ponowną instalacją). Jeśli masz jeszcze stary link z zaproszeniem do tego pokoju, otwórz go na tym telefonie, a wszystko będzie czytelne. Jeśli teraz utworzysz nowy klucz, dawni członkowie przeczytają twoje wiadomości dopiero po nowym linku. Utworzyć nowy klucz?",
  "Új titkosító kulcs készült. Küldj ÚJ meghívó linket minden tagnak.": "Utworzono nowy klucz szyfrowania. Wyślij NOWY link z zaproszeniem każdemu członkowi.",
});

// GIRA KONYV-OSSZEFESULES (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Gíra-könyv csomag (ismeretlen formátum)": "Pakiet księgi gira (nieznany format)",
  "Gíra-könyv": "Księga gira",
  "hamis aláírás": "fałszywy podpis",
  "KÉTSZERI KÖLTÉS": "PODWÓJNE WYDANIE",
  "aláírások rendben": "podpisy w porządku",
  "Előbb csatlakozz egy helyi szobához (Bluetooth vagy wifi).": "Najpierw dołącz do pokoju lokalnego (Bluetooth lub wifi).",
  "Még nincs aláírt gíra-tételed, amit megoszthatnál.": "Nie masz jeszcze podpisanych pozycji gira do udostępnienia.",
  "A helyi szobának nincs titkosító kulcsa, ezért nem küldöm el a könyvet.": "Pokój lokalny nie ma klucza szyfrowania, więc nie wyślę księgi.",
  "Elküldve a helyi szobába": "Wysłano do pokoju lokalnego",
  "csomag": "pakietów",
  "Nem ment el minden csomag. Nézd meg, hogy egy hálón vagytok-e.": "Nie wszystkie pakiety zostały wysłane. Sprawdź, czy jesteście w tej samej sieci.",
  "Előbb nyiss meg egy online szobát.": "Najpierw otwórz pokój online.",
  "Az online szobának nincs titkosító kulcsa ezen a telefonon, ezért nem küldöm el a könyvet.": "Pokój online nie ma klucza na tym telefonie, więc nie wyślę księgi.",
  "Elküldve az online szobába": "Wysłano do pokoju online",
  "Nem ment el minden csomag.": "Nie wszystkie pakiety zostały wysłane.",
  "Könyvek összefésülése": "Uzgadnianie ksiąg",
  "A tagok kicserélik az aláírt gíra-tételeiket, és a telefon minden aláírást ellenőriz. Ha valaki ugyanazt a gírát kétszer adta oda, itt kiderül. Szerver és blokklánc nélkül megy: a szoba csak továbbítja a titkosított csomagot.": "Członkowie wymieniają podpisane pozycje gira, a telefon sprawdza każdy podpis. Jeśli ktoś dał tę samą girę dwa razy, wyjdzie to tutaj. Bez serwera i bez blockchaina: pokój tylko przekazuje zaszyfrowany pakiet.",
  "Küldés a helyi szobába (Bluetooth / wifi)": "Wyślij do pokoju lokalnego (Bluetooth / wifi)",
  "Küldés az online szobába": "Wyślij do pokoju online",
  "Közösségi könyv": "Księga wspólnoty",
  "kétszeri költés": "podwójne wydania",
  "sorszám": "numer",
});

window.PP_FORD_MINTAK = window.PP_FORD_MINTAK || {};
window.PP_FORD_MINTAK.pl = (function () {
  // SZAMNEV-EGYEZTETES. A magyar szamnev utan nem egyeztet, a het celnyelvbol hat igen.
  // A `csere` ezeknel FUGGVENY (a motor 2026-09-02 ota elfogadja, `index.html`), es a
  // szignatura a nativ String.replace-e: (match, p1, p2, ...).
  // Kezzel, szam-osztalyonkent kulon sorral ez het nyelven kb. 330 bejegyzes lenne
  // -- ket szammal ugyanis a ket osztaly SZORZODIK (3x3).
  // SZLAV HAROM ALAK: 1 (de nem 11) / 2-4 (de nem 12-14) / minden mas.
  // A 11 es a 12-14 azert kivetel, mert azok a 'sok' alakot kerik -- ez a ket
  // csapda az, amit egy naiv `n % 10` vizsgalat elront.
  const alak = (n, egy, keves, sok) => {
    const u = n % 10, sz = n % 100;
    if (u === 1 && sz !== 11) return egy;
    if (u >= 2 && u <= 4 && !(sz >= 12 && sz <= 14)) return keves;
    return sok;
  };
  return [
  // -- SZAM-EGYEZTETES a feloldo-kartya mondatara (Istvan, 2026-09-02).
  // A magyar nem egyeztet a szammal, a het celnyelvbol HAT igen. Ezert nem egy csere all itt,
  // hanem szam-osztalyonkent egy, es a SORREND KoTELEZo: a motor az ELSo illeszkedo mintat
  // hasznalja (`index.html`, a `break`). Az utolso sor a fogd-meg-mind.
  //
  // A SZAM-OSZTALY MAGABAN A REGEXBEN ALL, es ez szandekos: a `csere` mezonek STRINGNEK kell
  // maradnia. Az `index.html:4406` `m.csere.replace(...)`-t hiv rajta, tehat egy fuggveny-ertek
  // nem finomitas lenne, hanem az EGESZ oldal forditasat elszallasztana.
  { minta: /^Ebben a témában (\d+) további cikk van, a bevezetőjüket fent olvashatod\.$/,
    csere: (_, n) => 'W tym temacie ' + (alak(+n, 'jest', 'są', 'jest')) + ' jeszcze ' + n + ' ' + alak(+n, 'artykuł, jego wstęp możesz przeczytać powyżej.', 'artykuły, ich wstępy możesz przeczytać powyżej.', 'artykułów, ich wstępy możesz przeczytać powyżej.') },
  { minta: /^Használható fény (\d{1,2}:\d{2}) és (\d{1,2}:\d{2}) között: a napkelte előtt és a napnyugta után is van még annyi, amivel lehet menni\.$/,
    csere: "Użyteczne światło między $1 a $2: zarówno przed wschodem, jak i po zachodzie słońca jest go jeszcze tyle, że można iść." },
  { minta: /^([\d.,]+) m² alapján$/,
    csere: "na podstawie $1 m²" },
  { minta: /^(\d+) fő · (\d+) nap · (.+)$/,
    csere: (_, a, b, c) => a + ' ' + alak(+a, "osoba", "osoby", "osób") + ' · ' + b + ' ' + alak(+b, "dzień", "dni", "dni") + ' · ' + c },
  { minta: /^(\d+) fő · (\d+) nap$/,
    csere: (_, a, b) => a + ' ' + alak(+a, "osoba", "osoby", "osób") + ' · ' + b + ' ' + alak(+b, "dzień", "dni", "dni") },
  { minta: /^(\d+) fő$/,
    csere: (_, n) => n + ' ' + alak(+n, "osoba", "osoby", "osób") },
  { minta: /^(\d+) nap$/,
    csere: (_, n) => n + ' ' + alak(+n, "dzień", "dni", "dni") },
  { minta: /^(\d+) db$/,
    csere: "$1 szt." },
  { minta: /^(\d+) tétel$/,
    csere: (_, n) => n + ' ' + alak(+n, "pozycja", "pozycje", "pozycji") },
  { minta: /^IGE — (.+)$/,
    csere: "WERSET — $1" },
  { minta: /^Ige — (.+)$/,
    csere: "Werset — $1" },
  { minta: /^Tudástár — (.+)$/,
    csere: "Wiedza — $1" },
  { minta: /^(\d+)\. fejezet$/,
    csere: "Rozdział $1" },
  { minta: /^(\d+)\. fejezet · vers$/,
    csere: "Rozdział $1 · werset" },
  { minta: /^(\d+) fejezet$/,
    csere: (_, n) => n + ' ' + alak(+n, "rozdział", "rozdziały", "rozdziałów") },
  { minta: /^Kész: (\d+) könyv, offline is megvan\.$/,
    csere: "Gotowe: $1 ksiąg, dostępne także offline." },
  { minta: /^Nem sikerült a helymeghatározás: (.+)$/,
    csere: "Nie udało się ustalić położenia: $1" },
  { minta: /^Nem sikerült a helymeghatározás\.$/,
    csere: "Nie udało się ustalić położenia." },
  { minta: /^Nem sikerült: (.+)$/,
    csere: "Nie udało się: $1" },
  { minta: /^Felvéve: (.+)$/,
    csere: "Dodano: $1" },
  { minta: /^Módosítva: (.+)$/,
    csere: "Zmieniono: $1" },
  { minta: /^Törlöd: (.+)$/,
    csere: "Usunąć: $1" },
  { minta: /^vércsoport hiányzik · allergia: (.+)$/,
    csere: "brak grupy krwi · alergia: $1" },
  { minta: /^vércsoport hiányzik · nincs ismert allergia$/,
    csere: "brak grupy krwi · brak znanych alergii" },
  { minta: /^(.+) · nincs ismert allergia$/,
    csere: "$1 · brak znanych alergii" },
  { minta: /^(.+) · allergia: (.+)$/,
    csere: "$1 · alergia: $2" },
  { minta: /^növekvő hold, (\d+)%$/,
    csere: "księżyc przybywający, $1%" },
  { minta: /^fogyó hold, (\d+)%$/,
    csere: "księżyc ubywający, $1%" },
  { minta: /^(.+) · (\d+) tag · te indítottad$/,
    csere: (_, a, n) => a + ' · ' + n + ' ' + alak(+n, "uczestnik", "uczestnicy", "uczestników") + " · ty uruchomiłeś" },
  { minta: /^(.+) · (\d+) tag · (.+) indította$/,
    csere: (_, a, n, k) => a + ' · ' + n + ' ' + alak(+n, "uczestnik", "uczestnicy", "uczestników") + " · uruchomił " + k },
  { minta: /^(\d+) tag · te indítottad$/,
    csere: (_, n) => n + ' ' + alak(+n, "uczestnik", "uczestnicy", "uczestników") + " · ty uruchomiłeś" },
  { minta: /^(\d+) tag · (.+) indította$/,
    csere: (_, n, k) => n + ' ' + alak(+n, "uczestnik", "uczestnicy", "uczestników") + " · uruchomił " + k },
  { minta: /^még egyedül · te indítottad$/,
    csere: "jeszcze sam · ty uruchomiłeś" },
  { minta: /^még egyedül · (.+) indította$/,
    csere: "jeszcze sam · uruchomił $1" },
  { minta: /^(.+) · (\d+) tag$/,
    csere: (_, a, n) => a + ' · ' + n + ' ' + alak(+n, "uczestnik", "uczestnicy", "uczestników") },
  { minta: /^(.+) · te indítottad$/,
    csere: "$1 · ty uruchomiłeś" },
  { minta: /^(.+) · (.+) indította$/,
    csere: "$1 · uruchomił $2" },
  { minta: /^(\d+) tag$/,
    csere: (_, n) => n + ' ' + alak(+n, "uczestnik", "uczestnicy", "uczestników") },
  // OLVASASI TERV (2026-10-11)
  { minta: /^Kész: (\d+) \/ (\d+) nap \((\d+)%\)$/, csere: "Gotowe: $1 / $2 dni ($3%)" },
  { minta: /^Következő olvasmány: (\d+)\. nap$/, csere: "Następne czytanie: dzień $1" },
  { minta: /^Lemaradás: (\d+) nap$/, csere: (_, n) => "Zaległość: " + n + ' ' + alak(+n, "dzień", "dni", "dni") },
  { minta: /^Előrébb jársz: (\d+) nap$/, csere: (_, n) => "Wyprzedzenie: " + n + ' ' + alak(+n, "dzień", "dni", "dni") },
  { minta: /^Napi átlag: ([\d,]+) fejezet$/, csere: "Średnio dziennie: $1 rozdz." },
  { minta: /^(\d+)\. nap( •)?$/, csere: (_, n, p) => "Dzień #".replace('#', n) + (p || '') },
  ];
})();

// ===== 2026-10-13: ujjlenyomatos feloldas + PIN modositasa (v43.157) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Ujjlenyomattal": "Odciskiem palca",
  "Ujjlenyomat bekapcsolása": "Włącz odblokowanie odciskiem palca",
  "Tárca feloldása": "Odblokuj portfel",
  "PIN-nel": "Użyj PIN-u",
  "Az ujjlenyomathoz mentett PIN már nem érvényes. Add meg a PIN-t, utána újra bekapcsolhatod.": "PIN zapisany dla odcisku palca jest już nieważny. Wpisz PIN, potem możesz włączyć to ponownie.",
  "Új ujjlenyomatot vettél fel a telefonon, ezért egyszer add meg a PIN-t.": "Na telefonie dodano nowy odcisk palca, dlatego wpisz raz PIN.",
  "Az ujjlenyomatos feloldás most nem sikerült, add meg a PIN-t.": "Odblokowanie odciskiem palca tym razem się nie udało, wpisz PIN.",
  "Bekapcsolod az ujjlenyomatos feloldást? A PIN-t ekkor a telefon saját biztonsági kulcstára őrzi, az ujjad csak azt nyitja. A PIN ugyanúgy működik.": "Włączyć odblokowanie odciskiem palca? PIN będzie wtedy przechowywany w bezpiecznym magazynie kluczy telefonu, a palec otwiera tylko ten magazyn. PIN działa tak jak dotąd.",
  "Bekapcsolom": "Włączam",
  "Most nem": "Nie teraz",
  "Bekapcsolva: legközelebb ujjlenyomattal is beléphetsz.": "Włączone: następnym razem możesz też wejść odciskiem palca.",
  "Nem kapcsoltuk be. Később is megteheted: koppints újra a gombra.": "Nie włączono. Możesz to zrobić później: dotknij przycisku ponownie.",
  "Nem sikerült bekapcsolni.": "Nie udało się włączyć.",
  "A tár megnyitása nem sikerült.": "Nie udało się otworzyć magazynu.",
  "PIN módosítása": "Zmień PIN",
  "Régi PIN": "Stary PIN",
  "Új PIN (4-6 számjegy)": "Nowy PIN (4-6 cyfr)",
  "Új PIN még egyszer": "Powtórz nowy PIN",
  "Hibás a régi PIN.": "Stary PIN jest błędny.",
  "Az új PIN 4-6 számjegy legyen.": "Nowy PIN musi mieć 4-6 cyfr.",
  "A két új PIN nem egyezik.": "Dwa nowe PIN-y się różnią.",
  "A PIN módosítása nem sikerült, a régi PIN maradt érvényben.": "Zmiana PIN-u nie powiodła się, stary PIN pozostaje ważny.",
  "A PIN megváltozott.": "PIN został zmieniony.",
  "A PIN megváltozott. Az ujjlenyomatos feloldás kikapcsolt, a következő PIN-es belépéskor újra bekapcsolhatod.": "PIN został zmieniony. Odblokowanie odciskiem palca zostało wyłączone; możesz je włączyć przy następnym logowaniu PIN-em."
});

// ===== 2026-10-13: teszt-PIN, 6 szamjegy, Gira-kulcs a PIN mogott (v43.159) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Állíts be egy PIN-t (6 számjegy)": "Ustaw PIN (6 cyfr)",
  "Új PIN (6 számjegy)": "Nowy PIN (6 cyfr)",
  "6 számjegy kell.": "Potrzebne jest 6 cyfr.",
  "Az új PIN 6 számjegy legyen.": "Nowy PIN musi mieć 6 cyfr.",
  "Tesztidőszak: a PIN 000000": "Okres testowy: PIN to 000000",
  "Tesztidőszak: a PIN 0000": "Okres testowy: PIN to 0000",
  "A Gíra aláíró kulcsa a PIN mögött van: nyisd meg a Token tárcát.": "Klucz podpisu Gíry jest za PIN-em: otwórz portfel tokenów."
});

// ===== 2026-10-13: ujjlenyomat-animacio (v43.160) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Tedd az ujjad az érzékelőre": "Połóż palec na czytniku",
  "Feloldva": "Odblokowano"
});

// ===== 2026-10-13: ujjlenyomat-kor huzasa (v43.161) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Ha a kör nem az ujjlenyomat-olvasón van, húzd a helyére: a telefon megjegyzi.": "Jeśli okrąg nie jest nad czytnikiem linii papilarnych, przeciągnij go tam: telefon to zapamięta."
});

// ===== 2026-10-13: OSM-alapreteg elore letoltese szunetel (v43.162) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Az alaptérkép előre letöltése szünetel, amíg elkészül a saját térképszerverünk. A már megnézett részek megmaradnak; a Turista réteget továbbra is letöltheted.": "Wstępne pobieranie mapy podstawowej jest wstrzymane, dopóki nie powstanie nasz własny serwer map. Obejrzane fragmenty zostają zapisane; warstwę turystyczną nadal możesz pobrać."
});


// ===== 2026-10-13: app-engedely a tesztidoszakra (v43.169, 0a58dbbb) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "PrepperPapa · tesztidőszak": "PrepperPapa · okres testowy",
  "A tesztidőszakban az app csak jóváhagyott tesztelői fiókkal használható. Lépj be az e-mail címeddel: kapsz egy 6 jegyű kódot, és utána a telefon megjegyzi, frissítés után sem kell újra.": "W okresie testowym aplikacji można używać tylko z zatwierdzonym kontem testera. Zaloguj się adresem e-mail: dostaniesz 6-cyfrowy kod, a potem telefon to zapamięta, także po aktualizacji.",
  "Belépés": "Zaloguj się",
  "Engedély kérése…": "Pobieranie zezwolenia…",
  "Ehhez a fiókhoz nincs engedély. Ha szerinted ez hiba, írj a prepperpapa@gmail.com címre.": "To konto nie ma zezwolenia. Jeśli uważasz, że to błąd, napisz na prepperpapa@gmail.com.",
  "Az első belépéshez internetkapcsolat kell.": "Pierwsze logowanie wymaga połączenia z internetem.",
  "Az engedély most nem sikerült, próbáld újra.": "Nie udało się teraz uzyskać zezwolenia, spróbuj ponownie.",
  "Lejárt az engedélyed. Lépj be újra (ehhez internet kell).": "Twoje zezwolenie wygasło. Zaloguj się ponownie (potrzebny internet)."
});


// ===== 2026-10-13: terkep-kereso es turistapontok (v43.171, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "saját pont": "własny punkt",
  "helyszín": "miejsce",
  "Nincs találat.": "Brak wyników.",
  "Turistaút": "Szlak",
  "internet kell hozzá": "wymaga internetu",
  "nemzetközi": "międzynarodowy",
  "országos": "krajowy",
  "regionális": "regionalny",
  "helyi": "lokalny",
  "csúcs": "szczyt",
  "nyereg": "przełęcz",
  "forrás": "źródło",
  "ivóvíz": "woda pitna",
  "kút": "studnia",
  "barlang": "jaskinia",
  "kilátópont": "punkt widokowy",
  "kilátó": "wieża widokowa",
  "menedékház, esőbeálló": "schronisko, wiata",
  "táborhely": "pole namiotowe",
  "pihenőhely": "miejsce odpoczynku",
  "útjelző tábla": "drogowskaz",
  "rom": "ruiny",
  "vár": "zamek",
  "kereszt, kápolna": "krzyż, kaplica"
});
Object.assign(window.PP_FORD_SZOTAR.pl, {"Turistaút, csúcs, forrás, hely…": "Szlak, szczyt, źródło, miejsce…"});

// ===== 2026-10-13: utvonalon megyek (v43.172, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Indulás": "Start",
  "Leállítás": "Stop",
  "Navigáció indul": "Nawigacja startuje",
  "Indulj el az útvonalon: az első lépésekből látom, merre mész.": "Ruszaj trasą: po pierwszych krokach widzę, w którą stronę idziesz.",
  "Letértél az útvonalról.": "Zszedłeś z trasy.",
  "Letértél az útvonalról": "Zszedłeś z trasy",
  "Az útvonal": "Trasa",
  "irány": "kierunek",
  "Visszatértél az útvonalra.": "Wróciłeś na trasę.",
  "Az útvonalon vagy": "Jesteś na trasie",
  "Indulj el: az első lépésekből látom, merre mész.": "Ruszaj: po pierwszych krokach widzę kierunek.",
  "Megérkeztél az útvonal végére.": "Dotarłeś do końca trasy.",
  "Hátra": "Pozostało",
  "Megtett": "Przebyto",
  "Érkezés": "Przybycie",
  "Szintgrafikon": "Profil wysokości",
  "emelkedő": "podejście",
  "múlva": "za",
  "előtted": "przed tobą",
  "cél": "cel",
  "utána ezt kövesd:": "potem podążaj:",
  "élesen jobbra": "ostro w prawo",
  "jobbra": "w prawo",
  "élesen balra": "ostro w lewo",
  "balra": "w lewo",
  "Most fordulj": "Skręć teraz",
  "méter múlva fordulj": "metrów, potem skręć",
  "Egyenesen tovább": "Prosto dalej"
});

// ===== 2026-10-13: utvonaltervezes A-bol B-be (v43.173, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Útvonal ide": "Trasa tutaj",
  "Innen indulok": "Start stąd",
  "Saját helyzetem": "Moja pozycja",
  "Válaszd ki a célt: keresés vagy egy pont buboréka": "Wybierz cel: wyszukiwanie lub dymek punktu",
  "Tervezés törlése": "Usuń plan",
  "Tervezés…": "Planowanie…",
  "Nincs GPS-helyzet: válassz kezdőpontot (egy pont buborékán: „Innen indulok”).": "Brak pozycji GPS: wybierz punkt startu („Start stąd” w dymku punktu).",
  "A turistaút-hálózat nem töltődött be.": "Sieć szlaków się nie wczytała.",
  "Nem találtam turistaút-útvonalat a két pont között.": "Brak trasy szlakami między punktami.",
  "A turistaútig": "Do szlaku",
  "légvonalban": "w linii prostej",
  "Tervezett útvonal": "Zaplanowana trasa",
  "Kövesd ezt a jelzést:": "Idź za tym oznakowaniem:",
  "Kövesd az utat": "Idź drogą",
  "és kövesd ezt:": "i idź za:"
});

// ===== 2026-10-13: kulfoldi turistautak =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Külföld országonként: térkép és turistautak": "Zagranica według krajów: mapa i szlaki",
  "Tájegységek": "Regiony",
  "Turistautak és pontok": "Szlaki i punkty",
  "Alaptérkép": "Mapa bazowa",
  "Ennek az országnak a térképe egyben túl nagy.": "Mapa tego kraju jest za duża w jednym kawałku.",
  "Tájegységenként letöltheted: nyisd le a listáját.": "Możesz ją pobrać według regionów: rozwiń listę.",
  "Országonként külön letölthetők a turistautak a pontokkal és az útvonaltervezővel (ezek az online térképen is működnek, és kevés helyet foglalnak), és külön az alaptérkép a térerő nélküli használathoz. Az alaptérképet az első kéréskor a szerver készíti elő, ez néhány perc lehet.": "Dla każdego kraju można osobno pobrać szlaki z punktami i planerem tras (działają też na mapie online i zajmują mało miejsca) oraz osobno mapę bazową do używania bez zasięgu. Mapę bazową serwer przygotowuje przy pierwszym żądaniu, co może potrwać kilka minut.",
  "tájegységenként letölthető": "do pobrania według regionów",
  "a méret letöltéskor derül ki": "rozmiar okaże się przy pobieraniu",
  "Ennek a tájegységnek a térképe egyben túl nagy.": "Mapa tego regionu jest za duża w jednym kawałku.",
  "A tájegység térképét most nem sikerült előkészíteni.": "Nie udało się teraz przygotować mapy regionu.",
  "Előkészítés…": "Przygotowanie…",
  "a térkép túl nagy egyben": "mapa jest za duża w całości",
  "Most egy másik ország térképe készül, próbáld újra pár perc múlva.": "Trwa przygotowanie mapy innego kraju, spróbuj ponownie za kilka minut.",
  "Az ország térképét most nem sikerült előkészíteni.": "Nie udało się teraz przygotować mapy kraju.",
  "A külföldi lista most nem érhető el.": "Lista zagraniczna jest teraz niedostępna.",
  "A két pont túl messze van egymástól (legfeljebb kb. 80 km).": "Punkty są za daleko od siebie (maks. ok. 80 km)."
});

// ===== 2026-10-13: GPX be/ki (v43.178) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Nincs kiválasztott útvonal.": "Nie wybrano trasy.",
  "Az útvonal megjelent, de a telefon tárhelye megtelt, nem mentődött el.": "Trasa jest widoczna, ale pamięć jest pełna, nie została zapisana.",
  "Ezt a fájlt nem tudtam GPX-ként beolvasni.": "Nie udało się odczytać pliku jako GPX.",
  "GPX útvonal betöltése": "Wczytaj trasę GPX",
  "fájl a telefonról": "plik z telefonu"
});

// ===== 2026-10-13: tajolo hangvezetes (v43.179) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Hangvezetés": "Prowadzenie dźwiękiem",
  "Előbb vegyél fel egy irányt, utána szól a hangvezetés.": "Najpierw ustaw kierunek, potem włączy się dźwięk."
});
// ===== 2026-10-14: jelzes nelkuli utak, ujratervezes, hosszu nyomas (v43.182) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Kijelölt pont": "Zaznaczony punkt",
  "Új útvonalat tervezek innen…": "Planuję nową trasę stąd…",
  "Új útvonalat terveztem, hossza": "Zaplanowano nową trasę, długość",
  "Jelzés nélküli ösvényen": "Nieoznakowaną ścieżką",
  "Jelzés nélküli földúton": "Nieoznakowaną drogą gruntową",
  "Utcán vagy közúton": "Ulicą lub drogą",
  "a jelzés nélküli ösvényt": "nieoznakowaną ścieżką",
  "a földutat": "drogą gruntową",
  "az utcát vagy közutat": "ulicą lub drogą",
  "Az út végétől a célig": "Od końca szlaku do celu",
  "teljes túra": "cały szlak",
  "szakasz": "odcinków",
  "Rádióamatőr átjátszók": "Przemienniki krótkofalarskie",
  "Rádióamatőr átjátszó": "Przemiennik krótkofalarski",
  "Kimenő (hallgatás)": "Wyjście (nasłuch)",
  "Bemenő / eltolás": "Wejście / przesunięcie",
  "Csak rádióamatőr vizsgával és engedéllyel használható.": "Tylko z egzaminem i licencją krótkofalarską.",
  "Az alaptérképet az OpenStreetMap szabályai miatt nem lehet előre letölteni (a megnézett részek megmaradnak). Internet nélkül a Saját térkép működik: Magyarországra tájegységenként letöltheted itt lent, az „Offline térkép” csoportban.": "Mapy podstawowej nie można pobrać z wyprzedzeniem ze względu na zasady OpenStreetMap (oglądane fragmenty zostają zapisane). Bez internetu działa Własna mapa: dla Węgier możesz ją pobrać poniżej według regionów.",
  "Átváltok a Saját térképre": "Przełącz na Własną mapę",
  "Saját térkép bekapcsolva. A tájegységeket itt lent, az „Offline térkép” csoportban töltheted le.": "Własna mapa włączona. Regiony pobierzesz poniżej, w sekcji „Mapa offline według regionów”."
});

// ===== 2026-10-15: femkereso + eses-erzekeles (kartya 898b5891) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
 "Fémkereső: vas és acél a közelben": "Wykrywacz metalu: żelazo i stal w pobliżu",
 "Fémkereső": "Wykrywacz metalu",
 "Vezeték, cső, fém a falban vagy a földben": "Przewód, rura, metal w ścianie lub w ziemi",
 "Nullázás után itt látszik a változás": "Po wyzerowaniu tu widać zmianę",
 "Nullázás": "Zeruj",
 "Hang: be": "Dźwięk: wł.",
 "Hang: ki": "Dźwięk: wył.",
 "Tartsd a telefont távol a fémtől, és nyomd meg a Nullázást. Utána lassan húzd végig a falon vagy a talajon: fém közelében nő a szám, és sűrűbben, magasabban pittyeg.": "Trzymaj telefon z dala od metalu i naciśnij Zeruj. Potem powoli przesuwaj go po ścianie lub ziemi: przy metalu liczba rośnie, a sygnał jest częstszy i wyższy.",
 "AMIT EZ TUD ÉS AMIT NEM. A vas- és acéltárgyat (cső, szög, vasbeton, áramalatti vezeték) néhány centiméterről érzékeli, mélyebbről nem. Rezet, alumíniumot, aranyat nem talál. A pontosság telefononként nagyon eltér; ne erre bízd, hogy fúrhatsz-e a falba.": "CO POTRAFI, A CZEGO NIE. Wyczuwa żelazo i stal (rura, gwóźdź, zbrojenie, przewód pod napięciem) z kilku centymetrów, nie głębiej. Nie znajdzie miedzi, aluminium ani złota. Dokładność bardzo różni się między telefonami; nie decyduj na tej podstawie, czy możesz wiercić w ścianie.",
 "Ehhez a telefonos PrepperPapa app kell: a böngésző nem adja ki az iránytű-érzékelő nyers értékét.": "Do tego potrzebna jest aplikacja PrepperPapa na telefon: przeglądarka nie udostępnia surowej wartości czujnika kompasu.",
 "a nullához képest": "względem zera",
 "Az érzékelő pontatlan: mozgasd a telefont nyolcas alakban néhányszor, aztán nullázz.": "Czujnik jest niedokładny: porusz telefonem kilka razy po ósemce, potem wyzeruj.",
 "Esés-érzékelés": "Wykrywanie upadku",
 "Esés után automatikus SOS": "Automatyczny SOS po upadku",
 "Ha a telefon nagy ütést érez, és utána egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a": "Jeśli telefon wyczuje mocne uderzenie, a potem przez minutę się nie porusza, głośno odlicza. Jeśli nie naciśniesz przycisku",
 "Jól vagyok": "Nic mi nie jest",
 "gombot, SOS üzenetet küld a helyzeteddel minden szobádba, és megszólal a vészsíp.": ", wyśle wiadomość SOS z twoją lokalizacją do wszystkich twoich pokoi i włączy się gwizdek alarmowy.",
 "Esést érzékeltem": "Wykryto upadek",
 "másodperc múlva SOS üzenet megy a helyzeteddel": "sekund do wysłania wiadomości SOS z twoją lokalizacją",
 "SOS most": "SOS teraz",
 "Bekapcsolva. Háttérben és kikapcsolt képernyőn is figyel.": "Włączone. Czuwa także w tle i przy wyłączonym ekranie.",
 "Bekapcsolva, de csak addig figyel, amíg az app nyitva van (a telefonos appban háttérben is).": "Włączone, ale czuwa tylko, gdy aplikacja jest otwarta (w aplikacji na telefon także w tle).",
 "A mozgás-érzékelő használatát nem engedélyezted.": "Nie zezwolono na czujnik ruchu.",
 "Rendben, nem küldtem SOS-t.": "W porządku, nie wysłano SOS.",
 "Esést érzékeltem, és nem reagálok.": "Wykryłem upadek i nie reaguję.",
 "Itt vagyok": "Jestem tutaj",
 "A helyzetemet nem sikerült meghatározni.": "Nie udało się ustalić mojej lokalizacji.",
 "SOS elküldve": "SOS wysłany",
 "szobába": "pokoi",
 "Az SOS üzenet nem ment el (nincs szoba vagy kapcsolat). A vészsíp szól.": "Wiadomość SOS nie została wysłana (brak pokoju lub połączenia). Gwizdek alarmowy gra.",
 "Eszközök": "Narzędzia",
 "Fémdetektor": "Wykrywacz metalu",
 "Víz, áram, kalória, fűtés és a többi számoló": "Woda, prąd, kalorie, ogrzewanie i pozostałe kalkulatory",
 "Eszközök: a kalkulátorok, a fémdetektor, a tükör és a vad- és rovarriasztó egy helyen.": "Narzędzia: kalkulatory, wykrywacz metalu, lusterko i odstraszacz zwierząt i owadów w jednym miejscu.",
 "Tükör": "Lusterko",
 "Előlapi kamera fénykerettel, sérülés megnézéséhez": "Przedni aparat z ramką świetlną, do obejrzenia urazu",
 "Fény: be": "Światło: wł.",
 "Fény: ki": "Światło: wył.",
 "A kamera nem nyitható meg. Engedélyezd a kamerát az app beállításaiban.": "Nie można otworzyć aparatu. Zezwól na aparat w ustawieniach aplikacji.",
 "Két ujjal csippentve nagyítasz. A fehér keret világítja meg az arcod; sötétben tedd a képernyő fényerejét maximumra.": "Uszczypnij dwoma palcami, aby powiększyć. Biała ramka oświetla twarz; po ciemku ustaw jasność ekranu na maksimum.",
 "Privát üzenet": "Prywatna wiadomość",
 "Gíra küldése": "Wyślij gíra",
 "Vad- és rovarriasztó": "Odstraszacz zwierząt i owadów",
 "Magas hang vadak és szúnyogok ellen": "Wysoki dźwięk przeciw dzikim zwierzętom i komarom",
 "A riasztó hangja most nem indult el.": "Dźwięk odstraszacza się nie uruchomił.",
 "Előzmény": "Historia",
 "Legutóbb olvasott igék": "Ostatnio czytane wersety",
 "Korábbi keresések": "Poprzednie wyszukiwania",
 "Még nincs olvasott ige. Amit a Bibliában megnyitsz, itt jelenik meg.": "Nie przeczytano jeszcze żadnego wersetu. To, co otworzysz w Biblii, pojawi się tutaj.",
 "Még nincs korábbi keresés. Amit itt keresel, ide kerül.": "Brak poprzednich wyszukiwań. To, czego tu szukasz, pojawi się na tej liście.",
 "Olvasási terv: csak ez az olvasmány látszik, a felolvasás a végén megáll.": "Plan czytania: widać tylko to czytanie, a czytanie na głos kończy się na jego końcu.",
 "Az olvasmány vége": "Koniec czytania",
 "Vissza a tervemhez": "Powrót do mojego planu",
 "Ébresztő": "Budzik",
 "Reggel felébreszti a telefont, és felolvassa a terv mai olvasmányát.": "Rano budzi telefon i czyta na głos dzisiejsze czytanie z planu.",
 "Bekapcsolva": "Włączony",
 "Időpont": "Godzina",
 "Napok": "Dni",
 "Válassz legalább egy napot.": "Wybierz co najmniej jeden dzień.",
 "Következő ébresztés:": "Następny budzik:",
 "Ebben a böngészőben és iPhone-on az ébresztő nem tud megszólalni: a weboldal nem kapcsolhatja be a lezárt telefont. Az ébresztő az Android appban működik. A beállításod itt megmarad.": "W tej przeglądarce i na iPhonie budzik nie może zadzwonić: strona internetowa nie może włączyć zablokowanego telefonu. Budzik działa w aplikacji na Androida. Twoje ustawienie zostaje tutaj zapisane.",
 "Ehhez az ébresztőhöz frissítsd az appot a legújabb változatra.": "Zaktualizuj aplikację do najnowszej wersji, aby korzystać z tego budzika.",
 "Az értesítés nincs engedélyezve: enélkül az ébresztő nem tud megjelenni.": "Powiadomienia nie są dozwolone: bez nich budzik nie może się pojawić.",
 "Értesítés engedélyezése": "Zezwól na powiadomienia",
 "A pontos időzítés nincs engedélyezve (Ébresztők és emlékeztetők): az ébresztő így akár negyed órát is késhet.": "Dokładny czas nie jest dozwolony (Alarmy i przypomnienia): budzik może się spóźnić nawet o kwadrans.",
 "Pontos időzítés engedélyezése": "Zezwól na dokładny czas",
 "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon csak értesítés jelenik meg, a felolvasás a koppintásra indul.": "Powiadomienia pełnoekranowe nie są dozwolone: na zablokowanym telefonie pojawi się tylko powiadomienie, a czytanie zacznie się po jego dotknięciu.",
 "Teljes képernyő engedélyezése": "Zezwól na pełny ekran",
 "Az ébresztő be van állítva.": "Budzik jest ustawiony.",
 "Az ébresztőt most nem sikerült beállítani. Próbáld újra később.": "Nie udało się teraz ustawić budzika. Spróbuj ponownie później.",
 "Bibliaolvasás ébresztő": "Budzik czytania Biblii",
 "Reggeli ige": "Poranne słowo",
 "A mai olvasmány felolvasása indul.": "Zaczyna się dzisiejsze czytanie.",
 "Szundi 10 perc": "Drzemka 10 min"
});

// ===== 2026-10-18: Bible alarm polish (v43.259): stop button, time picker, spoken intro/blessing =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
 "Leállítom": "Zatrzymaj",
 "Óra": "Godzina",
 "Perc": "Minuta",
 "{konyv} {a}. fejezet": "{konyv}, rozdział {a}",
 "{konyv} {a}–{b}. fejezet": "{konyv}, rozdziały od {a} do {b}",
 "Jó reggelt! Olvasási terv: {terv}. A mai olvasmány: {resz}.": "Dzień dobry! Plan czytania: {terv}. Dzisiejsze czytanie: {resz}.",
 "Jó reggelt! {ido} van. Ma {datum}. A mai olvasmány: {resz}.": "Dzień dobry! Jest godzina {ido}. Dziś jest {datum}. Dzisiejsze czytanie: {resz}.",
 "Áldott napot kívánok!": "Życzę błogosławionego dnia!"
});

// ===== 2026-10-18: daily tester task popup (v43.261, card 84c182b9): the popup and the seeded tasks =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
 "Mai tesztfeladat": "Dzisiejsze zadanie testowe",
 "Hogyan működik": "Jak to działa",
 "Mit próbálj ki": "Co wypróbować",
 "Ezt a feladatot a készüléked és a felület alapján kaptad, név nélkül.": "To zadanie dostałeś na podstawie swojego urządzenia i interfejsu (aplikacja lub przeglądarka), bez imienia.",
 "Működik": "Działa",
 "Hibás": "Błąd",
 "Később": "Później",
 "Köszönjük, megkaptuk a visszajelzést.": "Dziękujemy, otrzymaliśmy twoją opinię.",
 "Most nincs kapcsolat. Elmentettem, és magától elküldöm, amint lesz.": "Teraz nie ma połączenia. Zapisałem i wyślę automatycznie, gdy się pojawi.",
 "Ezt a szerver most nem fogadta el. Próbáld újra később.": "Serwer tego teraz nie przyjął. Spróbuj ponownie później.",
 "Most nem érem el a szervert. Próbáld újra később.": "Nie mogę teraz połączyć się z serwerem. Spróbuj ponownie później.",
 "Mára nincs több tesztfeladat. Köszönjük a segítséget!": "Na dziś nie ma więcej zadań testowych. Dziękujemy za pomoc!",
 "Tesztfeladat": "Zadanie testowe",
 "Mi nem működött?": "Co nie działało?",
 "Biblia: az olvasási terv ébresztője": "Biblia: budzik planu czytania",
 "Az olvasási terv ébresztője a beállított időben felébreszti a telefont, a lezárt képernyő fölött megnyitja az aznapi olvasmányt, és felolvassa. Halkan indul, és bő fél perc alatt erősödik fel; előtte egy rövid köszöntés elmondja, mi a mai olvasmány. Amíg olvas, a képernyő alján egy nagy Leállítom gomb van.": "Budzik planu czytania budzi telefon o ustawionej godzinie, otwiera dzisiejsze czytanie nad ekranem blokady i czyta je na głos. Zaczyna cicho i przez ponad pół minuty staje się głośniejszy; wcześniej krótkie powitanie mówi, jakie jest dzisiejsze czytanie. Podczas czytania na dole ekranu jest duży przycisk Zatrzymaj.",
 "Biblia > Olvasási terv: nyiss meg egy futó tervet, kapcsold be az ébresztőt, és állítsd az időpontot 2 perccel későbbre.": "Biblia > Plan czytania: otwórz trwający plan, włącz budzik i ustaw godzinę 2 minuty później.",
 "Zárd le a telefont, és tedd le. Figyeld: felébred-e a telefon, halkan indul-e a hang, és elhangzik-e a köszöntés.": "Zablokuj telefon i odłóż go. Obserwuj: czy telefon się budzi, czy dźwięk zaczyna się cicho i czy słychać powitanie?",
 "Koppints a nagy Leállítom gombra: a felolvasásnak azonnal meg kell állnia.": "Dotknij dużego przycisku Zatrzymaj: czytanie musi natychmiast ustać.",
 "Biblia: a könyvcsoportok színei": "Biblia: kolory grup ksiąg",
 "A Biblia könyvlistáján a könyvek csoportonként színes csempéken állnak. A csoportok ugyanazt az öt zöld árnyalatot kapják, de világos és sötét váltakozva, hogy két szomszédos csoport jól elváljon egymástól. Éjszakai módban ugyanez vörös árnyalatokkal.": "Na liście ksiąg Biblii księgi stoją na kolorowych kafelkach według grup. Grupy mają te same pięć odcieni zieleni, ale jasne i ciemne na przemian, aby dwie sąsiednie grupy dobrze się odróżniały. W trybie nocnym to samo w odcieniach czerwieni.",
 "Nyisd meg a Bibliát, és koppints a Biblia csempére, hogy megjelenjen a könyvek listája.": "Otwórz Biblię i dotknij kafelka Biblia, aby pojawiła się lista ksiąg.",
 "Nézd végig a csempéket: jól elválnak-e a szomszédos csoportok, és minden könyvnév olvasható-e a háttéren?": "Przejrzyj kafelki: czy sąsiednie grupy dobrze się odróżniają i czy każda nazwa księgi jest czytelna na swoim tle?",
 "Lenyíló lista: a vissza csak a listát zárja": "Lista rozwijana: Wstecz zamyka tylko listę",
 "Ha egy lenyíló lista (például a Rádió-hatótáv sávválasztója) nyitva van, a vissza gomb először csak a listát zárja be, és ugyanazon a képernyőn maradsz. Ha közben másik képernyőre lépsz, a nyitott lista nem maradhat ott a következő képernyő fölött.": "Gdy lista rozwijana (na przykład wybór pasma w Zasięgu radia) jest otwarta, przycisk Wstecz najpierw zamyka tylko listę i zostajesz na tym samym ekranie. Jeśli w tym czasie przejdziesz na inny ekran, otwarta lista nie może zostać nad następnym ekranem.",
 "Kalkulátor > Rádió-hatótáv: koppints a sáv választójára, hogy lenyíljon a lista.": "Kalkulator > Zasięg radia: dotknij wyboru pasma, aby rozwinąć listę.",
 "Nyomd meg a vissza gombot: a lista bezárul, és a Rádió-hatótáv képernyő marad.": "Naciśnij Wstecz: lista się zamyka, a ekran Zasięg radia zostaje.",
 "Nyisd ki újra a listát, és lépj át egy másik képernyőre: a lista nem maradhat ott lebegve.": "Otwórz listę ponownie i przejdź na inny ekran: lista nie może tam zostać, unosząc się.",
 "Szobák: privát üzenet (Csak neki)": "Pokoje: wiadomość prywatna (Tylko do)",
 "Egy internetes szobában egy tagnak úgy is írhatsz, hogy csak ő lássa. Ilyenkor a beíró mező fölött „Csak neki” sáv áll a nevével; amíg ez látszik, az üzenet biztosan privátként megy el, és a sáv nem takarja el a legutolsó üzenetet. Ha mégsem megy el, az app megmondja, miért, és a beírt szöveg megmarad.": "W pokoju internetowym możesz napisać do jednego członka tak, że tylko on to zobaczy. Wtedy nad polem wpisywania jest pasek „Tylko do” z jego imieniem; dopóki jest widoczny, wiadomość na pewno idzie jako prywatna, a pasek nie zasłania ostatniej wiadomości. Jeśli mimo to nie wyjdzie, aplikacja powie dlaczego, a wpisany tekst zostaje.",
 "Nyiss meg egy szobát, ahol van legalább egy másik tag, és koppints egy tőle jött üzenet mellett a képére.": "Otwórz pokój z co najmniej jednym innym członkiem i dotknij obrazka obok jego wiadomości.",
 "Írj egy rövid üzenetet, és küldd el. A legutolsó üzenetnek a „Csak neki” sáv fölött kell látszania.": "Napisz krótką wiadomość i wyślij ją. Ostatnia wiadomość musi być widoczna nad paskiem „Tylko do”.",
 "Ha meg tudod kérdezni: a címzett megkapta, a többiek nem látják.": "Jeśli możesz zapytać: odbiorca ją dostał, inni jej nie widzą."
});
// ===== 2026-10-18: Noah for every tester (v43.262, card 84bede18): Android-only note, download confirm, memory reason, daily task =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
 "Noah, az offline MI segéd a telefonra telepített Android appban fut: a nyelvi modellt a telefon egyszer letölti, utána internet nélkül, helyben válaszol. A böngészős változatban és iPhone-on nem érhető el, mert ide a modell nem tölthető le.": "Noah, asystent AI offline, działa w aplikacji na Androida zainstalowanej na telefonie: telefon raz pobiera model językowy, a potem odpowiada lokalnie, bez internetu. Nie jest dostępny w wersji przeglądarkowej ani na iPhonie, bo tam nie da się pobrać modelu.",
 "Ehhez Android 11 vagy újabb, legalább 6 GB memóriás telefon kell, és 6-8 GB szabad hely.": "Potrzebny jest telefon z Androidem 11 lub nowszym, co najmniej 6 GB pamięci i 6-8 GB wolnego miejsca.",
 "A nyelvi modell válasz közben kb. 3 GB memóriát használ. 6 GB-nál kevesebb memóriájú telefonon a rendszer ilyenkor leállítaná az appot, ezért itt Noah nem használható.": "Podczas odpowiadania model językowy zużywa około 3 GB pamięci. Na telefonie z mniej niż 6 GB pamięci system zamknąłby aplikację, dlatego tutaj Noah nie jest dostępny.",
 "Ezen a telefonon nem fut:": "Na tym telefonie nie działa:",
 "Android 11 vagy újabb kell": "potrzebny Android 11 lub nowszy",
 "64 bites ARM processzor kell": "potrzebny 64-bitowy procesor ARM",
 "legalább 6 GB memória kell": "potrzeba co najmniej 6 GB pamięci",
 "nem támogatott": "nieobsługiwane",
 "Ehhez a modellhez kevés a telefon memóriája.": "Ten telefon ma za mało pamięci dla tego modelu.",
 "Letöltöd a(z) {modell} modellt?": "Pobrać model {modell}?",
 "Letöltés: {meret}, egyszer kell letölteni.": "Pobieranie: {meret}, tylko raz.",
 "Szabad hely: kb. {hely} kell, mert az első használatkor a telefon még egyszer ennyit foglal a gyorsabb futáshoz.": "Wolne miejsce: potrzeba ok. {hely}, bo przy pierwszym użyciu telefon zajmuje drugie tyle, aby działać szybciej.",
 "Memória: legalább {ajanlott} GB-os telefon ajánlott.": "Pamięć: zalecany telefon z co najmniej {ajanlott} GB.",
 "Ez a telefon {ram} GB-os.": "Ten telefon ma {ram} GB.",
 "Most mobilinternetet használsz: a letöltés {meret} adatforgalom. Wi-Fi ajánlott.": "Korzystasz teraz z danych komórkowych: pobieranie to {meret} transferu. Zalecane Wi-Fi.",
 "Offline MI segéd": "Asystent AI offline",
 "Offline MI segéd használata": "Używaj asystenta AI offline",
 "A segéd a fejléc gombjával nyílik; a modell letöltése és a beállításai a segéd oldalán vannak.": "Asystent otwiera się przyciskiem w nagłówku; pobieranie modelu i jego ustawienia są na stronie asystenta.",
 "Offline MI segéd · a tudástárból, forrással": "Asystent AI offline · z bazy wiedzy, ze źródłami",
 "Kérdezz": "Zapytaj",
 "Noah, az offline MI segéd": "Noah, asystent AI offline",
 "Noah a telefonon futó MI segéd: a tudástárból, a Bibliából és az app adataidból válaszol, internet nélkül. A nyelvi modellt egyszer kell letölteni (2,6 vagy 3,7 GB). Letöltés előtt az app kiírja a méretet, a szükséges szabad helyet és memóriát, mobilinterneten pedig Wi-Fi-t javasol. 6 GB-nál kevesebb memóriájú telefonon nem használható, és ezt meg is indokolja.": "Noah to asystent AI działający na telefonie: odpowiada z bazy wiedzy, z Biblii i z danych w aplikacji, bez internetu. Model językowy trzeba pobrać raz (2,6 lub 3,7 GB). Przed pobraniem aplikacja pokazuje rozmiar, potrzebne wolne miejsce i pamięć, a przy danych komórkowych zaleca Wi-Fi. Na telefonie z mniej niż 6 GB pamięci nie jest dostępny, a aplikacja wyjaśnia dlaczego.",
 "Beállítások: kapcsold be az „Offline MI segéd használata” pontot, majd nyisd meg Noah-t a fejléc szikra gombjával.": "Ustawienia: włącz „Używaj asystenta AI offline”, a potem otwórz Noaha przyciskiem iskry w nagłówku.",
 "A fogaskerék alatt nyomd meg a Letöltés gombot: nézd meg, kiírja-e a méretet, a helyet és a memóriát, mielőtt elindul. Wi-Fi-n töltsd le.": "Pod kołem zębatym naciśnij Pobierz: sprawdź, czy przed startem pokazuje rozmiar, miejsce i pamięć. Pobierz przez Wi-Fi.",
 "Kérdezz tőle valamit, például: „Hogyan tisztítsak vizet?” Nézd meg, kapsz-e választ forrással.": "Zapytaj go o coś, na przykład: „Jak oczyścić wodę?” Sprawdź, czy dostajesz odpowiedź ze źródłem.",
 "Ha a telefon nagy ütést érez, és utána egy percig nem mozdul, felkapcsolja a kijelzőt (lezárt telefonon is), és hangosan visszaszámol. Ha nem nyomod meg a": "Jeśli telefon wyczuje mocne uderzenie, a potem przez minutę się nie porusza, włącza ekran (także na zablokowanym telefonie) i głośno odlicza. Jeśli nie naciśniesz przycisku",
 "Utána megszólal a vészsíp.": "Potem rozlega się gwizdek alarmowy.",
 "Esés-riasztás": "Alarm upadku",
 "%d másodperc múlva SOS üzenet megy a helyzeteddel. Ha jól vagy, nyomd meg: Jól vagyok.": "Za %d sekund zostanie wysłana wiadomość SOS z twoją lokalizacją. Jeśli wszystko w porządku, naciśnij: Nic mi nie jest.",
 "Az értesítés nincs engedélyezve: enélkül esés után a lezárt telefonon nem jelenik meg a visszaszámlálás.": "Powiadomienia nie są dozwolone: bez nich odliczanie nie pojawi się na zablokowanym telefonie po upadku.",
 "A teljes képernyős értesítés nincs engedélyezve: esés után a lezárt telefonon csak egy értesítés jelenik meg a visszaszámlálással és a Jól vagyok gombbal, a nagy számláló koppintásra nyílik meg.": "Powiadomienia pełnoekranowe nie są dozwolone: po upadku zablokowany telefon pokazuje tylko powiadomienie z odliczaniem i przyciskiem Nic mi nie jest; duży licznik otwiera się po dotknięciu.",
 "Esés után a lezárt telefonon is felkapcsolja a kijelzőt, és mutatja a visszaszámlálást.": "Po upadku włącza ekran, także na zablokowanym telefonie, i pokazuje odliczanie.",
 "Megnyitom": "Otwórz",
 "Láttam": "Widziałem",
 "Egy szobatárs": "Członek pokoju",
 "vészjelzést küldött": "wysłał sygnał alarmowy",
 "Itt van": "Położenie",
 "Megnézem a térképen": "Pokaż na mapie",
 "SOS · vészjelzés": "SOS · sygnał alarmowy",
 "Egy szobatárs vészjelzést küldött.": "Członek pokoju wysłał sygnał alarmowy.",
 "SOS a szobából": "SOS z pokoju",
 "Egy szobatárs vészjelzést küldött: a lezárt telefon is felébred.": "Członek pokoju wysłał sygnał alarmowy: zablokowany telefon też się wybudza.",
 "RIASZTÁS": "ALARM",
 "Eszköz-riasztás": "Alarm urządzenia",
 "Egy eszköz riasztást küldött.": "Urządzenie wysłało alarm.",
 "Eszköz-riasztás a szobából": "Alarm urządzenia z pokoju",
 "Egy eszköz riasztást küldött: a lezárt telefon is felébred.": "Urządzenie wysłało alarm: zablokowany telefon też się wybudzi.",
 "Ideje visszafordulni": "Czas zawracać",
 "visszaút": "powrót",
 "Ma már elmúlt a sötétedés: lámpával indulj vissza.": "Dziś jest już ciemno: wracaj z latarką.",
 "A visszafordulás ideje már elmúlt: indulj vissza most.": "Czas na zawrócenie minął: wracaj teraz.",
 "Sötétedésig": "Do zmroku",
 "Már sötétedik.": "Już się ściemnia.",
 "Visszaút": "Powrót",
 "Tartalék": "Zapas",
 "Ha most elindulsz, világosban érsz vissza.": "Jeśli ruszysz teraz, wrócisz za dnia.",
 "A visszaút hosszabb, mint ami a sötétedésig hátravan: indulj most, és készítsd elő a lámpát.": "Powrót trwa dłużej niż czas do zmroku: ruszaj teraz i przygotuj latarkę.",
 "A tájoló a felvett irány ellentétére mutat: ez a visszaút.": "Kompas wskazuje kierunek przeciwny do zapisanego: to droga powrotna.",
 "A tájoló a kiindulópont felé mutat.": "Kompas wskazuje punkt startowy.",
 "Nincs GPS-helyzet: a térképen látod a kiindulópontot.": "Brak pozycji GPS: punkt startowy widać na mapie.",
 "Kiindulópont": "Punkt startowy",
 "Élesítve, ekkor szól:": "Włączony, zadzwoni o:",
 "Szólt": "Zadzwonił",
 "Visszafordulási ébresztő": "Budzik powrotu",
 "Túrán a visszafordulás idejében felébreszti a telefont, és mutatja, mennyi idő van sötétedésig, és mennyi a visszaút.": "Na wycieczce budzi telefon w porze powrotu i pokazuje, ile czasu zostało do zmroku i ile trwa powrót.",
 "Túra indítása": "Rozpocznij wycieczkę",
 "Visszaút ideje (perc)": "Czas powrotu (minuty)",
 "A fenti számításból": "Z obliczenia powyżej",
 "A tervezett útvonalból": "Z zaplanowanej trasy",
 "A fenti Menetidővel kiszámolhatod: add meg a visszaút távolságát és emelkedését.": "Możesz to obliczyć Czasem marszu powyżej: podaj długość i przewyższenie drogi powrotnej.",
 "Biztonsági tartalék (perc)": "Zapas bezpieczeństwa (minuty)",
 "Sötétedés": "Zmrok",
 "Napnyugta": "Zachód słońca",
 "A szürkület vége (kb. fél órával a napnyugta után)": "Koniec zmierzchu (ok. pół godziny po zachodzie)",
 "tartalék": "zapas",
 "Visszafordulás időpontja (kézzel)": "Pora powrotu (ręcznie)",
 "Számított időre": "Obliczona pora",
 "Böngészőben és iPhone-on csak akkor szól, ha az oldal nyitva van. A lezárt telefont az Android app ébreszti fel.": "W przeglądarce i na iPhonie dzwoni tylko przy otwartej stronie. Zablokowany telefon budzi aplikacja na Androida.",
 "Az ébresztő be van állítva, lezárt telefonon is szól.": "Budzik jest ustawiony i zadzwoni też na zablokowanym telefonie.",
 "Visszafordulás": "Zawróć",
 "Visszafordulás (kézzel állítva)": "Zawróć (ustawione ręcznie)",
 "Nincs helyzet a napnyugtához: engedélyezd a helymeghatározást, vagy nyisd meg egyszer a térképet.": "Brak pozycji do obliczenia zachodu: zezwól na lokalizację albo raz otwórz mapę.",
 "Add meg a visszaút idejét.": "Podaj czas powrotu.",
 "Ezen a helyen ma nincs napnyugta.": "Tu dziś nie ma zachodu słońca.",
 "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon csak értesítés jelenik meg.": "Powiadomienia pełnoekranowe są wyłączone: na zablokowanym telefonie pojawi się tylko powiadomienie.",
 "VISSZA": "POWRÓT",
 "Visszaút indítása": "Rozpocznij powrót",
 "Indulj vissza, hogy világosban érj le.": "Wracaj, aby zejść za dnia.",
 "Túrán a visszafordulás idejében a lezárt telefon is felébred.": "Na wycieczce zablokowany telefon budzi się w porze powrotu.",
 // ===== 2026-10-18: hatterzene a felolvasas alatt (kartya 694fc83c) =====
 "Háttérzene": "Muzyka w tle",
 "Halk, ismétlődő zene a felolvasás alatt. Előbb töltsd le; utána internet nélkül is szól. A hangerejét felolvasás közben a hangjegy gombbal állíthatod.": "Cicha, zapętlona muzyka podczas czytania. Najpierw ją pobierz; potem gra także bez internetu. Głośność ustawisz podczas czytania przyciskiem z nutą.",
 "Zene a Biblia felolvasása alatt": "Muzyka podczas czytania Biblii",
 "Ki": "Wył.",
 "nincs letöltve": "nie pobrano",
 "Biblia-felolvasáshoz": "Do czytania Biblii",
 "Ébresztőhöz": "Do budzika",
 "Akusztikus gitár": "Gitara akustyczna",
 "Kelta": "Celtycka",
 "Epikus 1": "Epicka 1",
 "Epikus 2": "Epicka 2",
 "Epikus 3": "Epicka 3",
 "Zene": "Muzyka",
 "Háttérzenét a Biblia beállításaiban (fogaskerék) tölthetsz le.": "Muzykę w tle pobierzesz w ustawieniach Biblii (koło zębate).",
 "A letöltött zene hiányos volt, ezért nem mentettük el. Próbáld újra.": "Pobrana muzyka była niepełna, więc jej nie zapisano. Spróbuj ponownie.",
 "Ez a zene most nem érhető el a szerveren.": "Ta muzyka nie jest teraz dostępna na serwerze.",
 // a felolvaso panel (hangjegy gomb) feliratai -- eddig forditatlanok voltak (2026-10-18, 694fc83c mellett)
 "Felolvasás": "Czytanie na głos",
 "Szünet a versek között": "Przerwa między wersetami",
 "Sebesség": "Szybkość",
 "Zene hangereje": "Głośność muzyki",
 "Zene választása": "Wybierz muzykę",
 "Nincs kiválasztott zene": "Nie wybrano muzyki",
 "Zene szünet": "Wstrzymaj muzykę",
 "Zene indítása": "Włącz muzykę",
 "Telefon zenelejátszója (hangereje itt nem állítható)": "Odtwarzacz muzyki telefonu (jego głośności nie da się tu ustawić)",
 "Megvallás felolvasás": "Czytanie wyznania",
 "Ima felolvasás": "Czytanie modlitwy",
 "Saját zene a telefonról": "Własna muzyka z telefonu",
 "Telefon hangja": "Głos telefonu",
 "Előbb töltsd le; utána internet nélkül is szól.": "Najpierw pobierz; potem gra także bez internetu.",
 "Csatazene": "Muzyka bitewna",
 "Tempó": "Tempo",
 "Lassú": "Wolno",
 "Szünet a mondatok után": "Przerwa po każdym zdaniu",
 "Auto": "Auto",
 "Auto: a mondat hossza": "Auto: długość zdania",
 "Minden mondat után megáll, hogy hangosan elismételhesd. A zene a szünetben is szól.": "Zatrzymuje się po każdym zdaniu, abyś mógł je powtórzyć na głos. Muzyka gra dalej w przerwie.",
 "A telefon beszédmotorja: ha a Google magyar hangja telepítve van, azzal olvas. Nem foglal helyet, internet nélkül is szól.": "Silnik mowy telefonu: jeśli zainstalowany jest głos Google dla języka, czyta nim. Nie zajmuje miejsca, działa bez internetu.",
 "Előre felolvasott hang a Károli-fordításhoz. Internettel azonnal szól; ha letöltöd, internet nélkül is.": "Nagrany wcześniej głos do przekładu Károli. Z internetem od razu; po pobraniu także bez niego.",
 "A PrepperPapa hang a saját tempójában szól (nem lassítjuk, mert torzítana).": "Głos PrepperPapa gra we własnym tempie (nie zwalniamy go, bo by się zniekształcił).",
 "jobb": "lepszy",
 "internet": "internet",
 "letöltött": "pobrany",
 "Hang": "Głos",
 "Most ez szól": "Teraz czyta",
 "A telefon beszédmotorja: internettel a Google legjobb hangján olvas, internet nélkül a telefonra letöltött hangon. Nem foglal helyet.": "Syntezator mowy telefonu: z internetem czyta najlepszym głosem Google, bez internetu głosem pobranym na telefon. Nie zajmuje miejsca.",
 "A Lassú egy külön, lassabban felolvasott felvétel.": "Wolne tempo to osobne nagranie, czytane wolniej.",
 "A Lassú tempó lassabban beszélteti a telefon hangját.": "Wolne tempo sprawia, że głos telefonu mówi wolniej."
});

// ===== 2026-10-18: vilagterkep-letoltes (korabban hianyzo kulcsok) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "a telefonon": "na telefonie",
  "A letöltés nem sikerült": "Pobieranie nie powiodło się",
  "A letöltéshez be kell jelentkezni (Beállítások).": "Aby pobrać, musisz się zalogować (Ustawienia)."
});

// ===== 2026-10-18: AKTUALIS VILAGHELYZET terkep-reteg (kartya 771683de) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Világhelyzet (események)": "Sytuacja na świecie (zdarzenia)",
  "Tűzveszély-előrejelzés (EFFIS) – veszély, nem tilalom": "Prognoza zagrożenia pożarowego (EFFIS) – zagrożenie, nie zakaz",
  "Földrengés": "Trzęsienie ziemi",
  "Erdőtűz": "Pożar lasu",
  "Árvíz": "Powódź",
  "Trópusi ciklon": "Cyklon tropikalny",
  "Vulkánkitörés": "Erupcja wulkanu",
  "Aszály": "Susza",
  "Járvány": "Epidemia",
  "Háborús övezet": "Strefa wojny",
  "Tűzgyújtási tilalom": "Zakaz rozpalania ognia",
  "Súlyosság": "Stopień zagrożenia",
  "alacsony": "niski",
  "közepes": "średni",
  "magas": "wysoki",
  "Nagy háború (évi 10 000+ halott)": "Duża wojna (ponad 10 000 zabitych rocznie)",
  "Háború (évi 1000–9999 halott)": "Wojna (1000–9999 zabitych rocznie)",
  "Fegyveres konfliktus (évi 100–999 halott)": "Konflikt zbrojny (100–999 zabitych rocznie)",
  "Összecsapások (évi 100 alatti halott)": "Starcia (poniżej 100 zabitych rocznie)",
  "Megye": "Komitat",
  "Napi tilalom": "Zakaz dzienny",
  "A tilalom a megye külterületi erdeire, fásításaira és azok 200 méteres sávjára vonatkozik.": "Zakaz dotyczy lasów i zadrzewień komitatu poza miejscowościami oraz 200-metrowego pasa wokół nich.",
  "Erősség": "Magnituda",
  "Mélység": "Głębokość",
  "Cunamiriasztás": "Ostrzeżenie przed tsunami",
  "Hírek alapján (előző nap):": "Według wiadomości (poprzedni dzień):",
  "független forrás": "niezależnych źródeł",
  "esemény": "zdarzeń",
  "Érintett ország, a konfliktus fő helyszíne máshol van.": "Kraj zaangażowany; główny teatr konfliktu jest gdzie indziej.",
  "Időpont": "Czas",
  "Forrás": "Źródło",
  "Forrás megnyitása": "Otwórz źródło",
  "Világhelyzet": "Sytuacja na świecie",
  "nincs adat": "brak danych",
  "frissítve": "zaktualizowano",
  "mentett adat (offline)": "zapisane dane (offline)",
  "Még nincs letöltött világhelyzet-adat. Kapcsold be internettel.": "Brak pobranych danych o sytuacji na świecie. Włącz z dostępem do internetu.",
  "Távolról ikonok, közelítve az érintett terület körvonallal és fátyollal. Koppints egy jelre vagy területre a részletekért.": "Z daleka ikony; po przybliżeniu obszar objęty zdarzeniem jest obrysowany i zacieniony. Dotknij znaku lub obszaru, aby zobaczyć szczegóły.",
  "tűzveszély-előrejelzés (FWI), csak internettel. Ez veszély-index, NEM tilalom.": "prognoza zagrożenia pożarowego (FWI), tylko z internetem. To wskaźnik zagrożenia, NIE zakaz.",
  "Források": "Źródła",
  "később (hozzáférésre vár)": "później (oczekuje na dostęp)",
  "most nem frissült": "teraz nie zaktualizowano"
});

// ===== 2026-10-18 16:4x: vilaghelyzet v2 (haboru / instabilitas, tilalom tavolrol egy jel; kartya 771683de) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Fegyveres összecsapás / instabilitás": "Starcia zbrojne / niestabilność",
  "Felkelés, terrorizmus vagy szervezett bűnözés (nem háború)": "Rebelia, terroryzm lub przestępczość zorganizowana (nie wojna)",
  "helyszín": "miejsc",
  "Megyék tilalommal": "Komitaty z zakazem",
  "Közelíts a megyék megjelenítéséhez.": "Przybliż, aby zobaczyć komitaty."
});

// ===== 2026-10-18: ige-melletti jegyzetek (Biblia, kartya c7ec8846) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Mértékegység": "Jednostka miary",
  "Scofield-jegyzet": "Przypis Scofielda",
  "Jegyzetek": "Przypisy",
  "Jegyzetek az igék mellett": "Przypisy przy wersetach",
  "Ahol egy vershez jegyzet tartozik, egy kis jel áll mellette; rákoppintva megnyílik. A jegyzetcsomag a most olvasott fordításhoz tartozik, és letöltés után internet nélkül is megvan.": "Gdy do wersetu należy przypis, obok stoi mały znak; dotknij go, aby otworzyć. Pakiet przypisów należy do czytanego przekładu, a po pobraniu działa także bez internetu.",
  "Ehhez a fordításhoz még nincs jegyzetcsomag.": "Dla tego przekładu nie ma jeszcze pakietu przypisów.",
  "A letölthető jegyzetcsomagok listája most nem érhető el.": "Lista pakietów przypisów do pobrania jest teraz niedostępna.",
  "Jelek megjelenítése": "Pokaż znaki",
  "jegyzet": "przypisów",
  "Még nincs letöltve": "Jeszcze nie pobrano",
  "Törlöd ezt a jegyzetcsomagot?": "Usunąć ten pakiet przypisów?"
});

// ===== APOKRIF KONYVEK a Bibliaban (kartya 28758956, 2026-10-18) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Apokrifek ↓": "Apokryfy ↓",
  "Apokrif könyvek letöltése": "Pobierz księgi apokryficzne",
  "Deuterokanonikus könyvek": "Księgi deuterokanoniczne",
  "Ószövetségi apokrifek": "Apokryfy Starego Testamentu",
  "További ószövetségi apokrifek": "Inne apokryfy Starego Testamentu",
  "Pszeudepigráfák": "Pseudoepigrafy",
  "Apostoli atyák": "Ojcowie apostolscy",
  "vers": "werset",
  "Énok könyvei letöltése": "Pobierz księgi Henocha",
  "Énok 2–3 ↓": "Henoch 2–3 ↓"
});

// ===== OFFLINE TERKEP CSOPORT a terkep-funkciok tablan (2026-10-18) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Helyzet, pontok és mérés": "Położenie, punkty i pomiar",
  "Offline térkép": "Mapa offline",
  "A tájegységek letöltése a telefonos alkalmazásban működik.": "Pobieranie regionów działa w aplikacji na telefon.",
  "Külföld: országok és tájegységeik ›": "Zagranica: kraje i ich regiony ›",
  "Magyarország tájegységei": "Regiony Węgier",
  "Külföldi térképek": "Mapy zagraniczne",
  "A saját térképet tájegységenként töltheted le: itt lent, az „Offline térkép” csoportban.": "Własną mapę pobierzesz według regionów: tuż poniżej, w grupie „Mapa offline”.",
  "A tájegységek listája most nem érhető el (nincs kapcsolat vagy belépés).": "Lista regionów jest teraz niedostępna (brak połączenia lub niezalogowano).",
  "Saját térkép bekapcsolva. A tájegységeket itt lent, az „Offline térkép” csoportban töltheted le.": "Własna mapa włączona. Regiony pobierzesz tuż poniżej, w grupie „Mapa offline”.",
  "Az alaptérképet az OpenStreetMap szabályai miatt nem lehet előre letölteni (a megnézett részek megmaradnak). Internet nélkül a Saját térkép működik: Magyarországra tájegységenként letöltheted itt lent, az „Offline térkép” csoportban.": "Mapy podstawowej nie można pobrać z wyprzedzeniem ze względu na zasady OpenStreetMap (oglądane fragmenty zostają zapisane). Bez internetu działa Własna mapa: dla Węgier pobierzesz ją według regionów tuż poniżej, w grupie „Mapa offline”.",
  // 2026-10-19 (card 4c1a5683): own country first, Más országok térképei, separate trails / points
  "Turistautak": "Szlaki turystyczne",
  "Turistapontok": "Punkty turystyczne",
  "Az egész ország": "Cały kraj",
  "Más országok térképei": "Mapy innych krajów",
  "Más országok térképei ›": "Mapy innych krajów ›",
  "A telefon beállításaiból nem derül ki, melyik a saját országod: a Más országok térképei között megtalálod.": "Z ustawień telefonu nie wynika, który kraj jest twój: znajdziesz go w Mapach innych krajów.",
  "Koppints egy országra, és lenyílik. Az alaptérkép, a turistautak és a turistapontok külön-külön letölthetők, az egész országra vagy tájegységenként. A turistautak és a pontok az online térképen is működnek, és kevés helyet foglalnak. Az alaptérképet az első kéréskor a szerver készíti elő, ez néhány perc lehet.": "Dotknij kraju, aby go rozwinąć. Mapę podstawową, szlaki turystyczne i punkty turystyczne można pobrać osobno, dla całego kraju lub według regionów. Szlaki i punkty działają też na mapie online i zajmują mało miejsca. Mapę podstawową serwer przygotowuje przy pierwszym żądaniu, co może potrwać kilka minut."
});

// 2026-10-19 (card 19b4756f): second recorded Bible voice (Charon)
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "A PrepperPapa hang felvétele": "Nagranie głosu PrepperPapa",
  "Imre (gépi)": "Imre (syntetyczny)",
  "Charon (új, jobb minőségű)": "Charon (nowy, lepszej jakości)",
  "Az eredeti felvétel, a teljes Biblia elérhető.": "Oryginalne nagranie, dostępna jest cała Biblia.",
  "Új, természetesebb felvétel, könyvenként érkezik. Amelyik könyv még nem készült el, azt Imre olvassa fel.": "Nowe, bardziej naturalne nagranie, pojawia się księga po księdze. Księgi jeszcze nieukończone czyta Imre.",
  "Letöltés közben a felvétel nem váltható.": "Podczas pobierania nie można zmienić nagrania.",
  "A Charon-felvétel készül, könyvenként érkezik. Amint egy könyv elkészül, itt letölthető lesz.": "Nagranie Charon powstaje, księga po księdze. Gdy tylko księga będzie gotowa, będzie można ją tu pobrać.",
  "A Charon-felvétel készül, könyvenként érkezik.": "Nagranie Charon powstaje, księga po księdze.",
  "Minden elkészült könyv letöltése": "Pobierz wszystkie ukończone księgi"
});

// 2026-10-19 (card eaaba276): calculator validation, settlement search, secret QR, compass, household, reminders
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Add meg, hány liter vizet tisztítasz (nullánál több).": "Podaj, ile litrów wody uzdatniasz (więcej niż zero).",
  "Ez a számoló legfeljebb 10 000 literig számol.": "Ten kalkulator liczy maksymalnie do 10 000 litrów.",
  "A magasság -500 és 9000 méter között legyen.": "Wysokość musi wynosić od -500 do 9000 metrów.",
  "Tölts ki minden mezőt nullánál nagyobb számmal.": "Wypełnij każde pole liczbą większą od zera.",
  "A fűtött terület legfeljebb 2000 m² lehet.": "Ogrzewana powierzchnia może wynosić najwyżej 2000 m².",
  "Legfeljebb 365 napra számol.": "Liczy najwyżej na 365 dni.",
  "Tölts ki mindkét mezőt nullánál nagyobb számmal.": "Wypełnij oba pola liczbą większą od zera.",
  "A tetőfelület legfeljebb 10 000 m² lehet.": "Powierzchnia dachu może wynosić najwyżej 10 000 m².",
  "Egyetlen esőből legfeljebb 500 mm-rel számol: ennél több egy esőzésből nem esik.": "Dla jednego deszczu liczy najwyżej 500 mm: więcej w jednym opadzie nie spada.",
  "Gyalog legfeljebb 1000 km-rel számol. Hosszabb utat bonts szakaszokra.": "Pieszo liczy najwyżej 1000 km. Dłuższą trasę podziel na odcinki.",
  "Az emelkedés nem lehet negatív: a lejtőt ne vond le, írj 0-t.": "Podejście nie może być ujemne: nie odejmuj zejścia, wpisz 0.",
  "Az összes emelkedés legfeljebb 20 000 méter lehet.": "Łączne podejście może wynosić najwyżej 20 000 metrów.",
  "A létszám nem lehet negatív.": "Liczba osób nie może być ujemna.",
  "Add meg, hány felnőtt és hány gyerek van (legalább egy fő).": "Podaj, ilu jest dorosłych i dzieci (co najmniej jedna osoba).",
  "Legfeljebb 500 főre számol.": "Liczy najwyżej na 500 osób.",
  "Hány napra kell? Legalább 1 napot adj meg.": "Na ile dni? Podaj co najmniej 1 dzień.",
  "Legfeljebb 3650 napra (10 évre) számol.": "Liczy najwyżej na 3650 dni (10 lat).",
  "Legalább 1 elem vagy akku kell.": "Potrzebna jest co najmniej 1 bateria lub akumulator.",
  "Legfeljebb 100 elemmel számol.": "Liczy najwyżej ze 100 bateriami.",
  "Add meg a LED áramfelvételét (mA, nullánál több).": "Podaj pobór prądu diody LED (mA, więcej niż zero).",
  "Add meg az elem vagy akku kapacitását (mAh, nullánál több).": "Podaj pojemność baterii lub akumulatora (mAh, więcej niż zero).",
  "Add meg az adóteljesítményt (watt, nullánál több).": "Podaj moc nadawania (waty, więcej niż zero).",
  "Legfeljebb 1500 wattal számol.": "Liczy najwyżej z mocą 1500 watów.",
  "Az antennamagasság 0 és 1000 méter között legyen.": "Wysokość anteny musi wynosić od 0 do 1000 metrów.",
  "A távolság nem lehet negatív.": "Odległość nie może być ujemna.",
  "A napok száma nem lehet negatív.": "Liczba dni nie może być ujemna.",
  "Hány napra: 1 és 60 nap között adj meg egy számot.": "Na ile dni: podaj liczbę od 1 do 60.",
  "város": "miasto",
  "település": "miejscowość",
  "településrész": "część miejscowości",
  "tanya, külterület": "przysiółek, peryferie",
  "A koordinátát nem tudtam értelmezni. Írd be így: 47.4979, 19.0402": "Nie udało się odczytać współrzędnej. Wpisz ją tak: 47.4979, 19.0402",
  "Tölts ki valamit, amit bele lehet tenni.": "Wypełnij coś, co można w nim umieścić.",
  "Túl hosszú: ennyi szöveg nem fér el egy QR-kódban. Rövidítsd le, vagy oszd két kódra.": "Za długie: tyle tekstu nie zmieści się w jednym kodzie QR. Skróć go albo podziel na dwa kody.",
  "A titkosítás nem sikerült. Próbáld újra.": "Szyfrowanie nie powiodło się. Spróbuj ponownie.",
  "Előre:": "Przed tobą:",
  "Az É betű mindig az északot mutatja, a felső jel az, amerre a telefon néz.": "N zawsze wskazuje północ, górny znacznik to kierunek, w którym patrzy telefon.",
  "vércsoport": "grupa krwi",
  "kontakt": "kontakt",
  "még nincs felvéve": "jeszcze nic nie dodano",
  "Bekapcsolva.": "Włączone.",
  "Kikapcsolva.": "Wyłączone.",
  "Reggel 9-kor szól, a fent választott idővel a lejárat előtt és a lejárat napján, akkor is, ha az app be van zárva.": "Powiadamia o 9 rano, z wybranym wyżej wyprzedzeniem przed upływem terminu i w dniu upływu, także gdy aplikacja jest zamknięta.",
  "Most nincs olyan tétel, aminek közelgő lejárata lenne.": "Teraz żadna pozycja nie zbliża się do końca terminu.",
  "Beütemezett emlékeztetők:": "Zaplanowane przypomnienia:",
  "Kapcsold be, és engedélyezd az értesítést: szól, mielőtt egy élelmiszer vagy készlet-tétel lejár.": "Włącz i zezwól na powiadomienia: przypomni, zanim minie termin żywności lub pozycji zapasów.",
  "Bekapcsolva. Amikor megnyitod az appot, naponta egyszer jelez a lejáró tételekről.": "Włączone. Gdy otworzysz aplikację, raz dziennie powiadomi o pozycjach, którym kończy się termin.",
  "Helyi szoba (MESH)": "Pokój lokalny (MESH)",
  "Offline segéd · tudástár, Biblia, készlet, térkép": "Pomocnik offline · baza wiedzy, Biblia, zapasy, mapa"
});

Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Név a szobákban (ezen látnak a csevegésben)": "Nazwa w pokojach (tak widzą cię na czacie)",
  "A családtag fényképe a profilképed is lesz a szobákban.": "Zdjęcie członka rodziny będzie też twoim zdjęciem profilowym w pokojach."
});

// kartya 28758956: halk jeloles az apokrif konyveknel
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Nem a Szentírás része – ajánlott irodalom.": "Nie należy do Pisma Świętego – lektura polecana."
});

// kartya 6b4458db: veszkartya-cimkek + riaszto probahang (v43.308)
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "A kártya tulajdonosának telefonszáma": "Numer telefonu właściciela karty",
  "A kártya tulajdonosának telefonszáma:": "Numer telefonu właściciela karty:",
  "Vész esetén értesítendő személy": "Osoba do powiadomienia w nagłym wypadku",
  "Vész esetén értesítendő telefonszáma": "Telefon osoby do powiadomienia w nagłym wypadku",
  "Vész esetén értesítendő:": "Powiadomić w nagłym wypadku:",
  "pl. +36 30 123 4567": "np. +36 30 123 4567",
  "Szól, de hallhatatlanul magas. Ha semmit nem hallasz, az normális.": "Dźwięk jest odtwarzany, ale jest za wysoki, by go usłyszeć. Jeśli nic nie słyszysz, to normalne.",
  "Próbahang": "Dźwięk testowy",
  "A próbahang nem indult el.": "Dźwięk testowy się nie uruchomił."
});
// ===== 2026-10-20 v43.326 (card 6b287cfb): PIN recovery code, reminder sentence, PIN setup without a default PIN =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Írd be a PIN-kódod": "Wpisz swój PIN",
  "Írd be még egyszer": "Wpisz ponownie",
  "A PIN még egyszer": "PIN jeszcze raz",
  "Elfelejtettem a PIN-t": "Nie pamiętam PIN-u",
  "Állíts be egy PIN-kódot (6 számjegy)": "Ustaw PIN (6 cyfr)",
  "A PIN 6 számjegy legyen.": "PIN musi mieć 6 cyfr.",
  "A két PIN nem egyezik.": "Oba PIN-y się różnią.",
  "Válassz másik PIN-kódot.": "Wybierz inny PIN.",
  "Mentési kód a PIN-hez": "Kod odzyskiwania PIN-u",
  "Ha elfelejted a PIN-t, ezzel a kóddal nyithatod meg a tárat, és állíthatsz be új PIN-t. Írd le papírra, és tartsd biztonságos helyen. Csak most látod: a telefon nem őrzi meg, és sehova nem küldjük el.": "Jeśli zapomnisz PIN-u, ten kod otworzy magazyn i pozwoli ustawić nowy PIN. Zapisz go na papierze i trzymaj w bezpiecznym miejscu. Widzisz go tylko teraz: telefon go nie przechowuje i nigdzie go nie wysyłamy.",
  "Emlékeztető mondat (nem kötelező; titkosítás nélkül tárolódik, ne írd bele a PIN-t)": "Zdanie przypominające (opcjonalne; zapisane bez szyfrowania, nie wpisuj w nie PIN-u)",
  "A kód utolsó négy karaktere (ellenőrzéshez)": "Ostatnie cztery znaki kodu (do sprawdzenia)",
  "Leírtam": "Zapisałem",
  "Később": "Później",
  "Mentve. A mentési kód mostantól érvényes.": "Zapisano. Kod odzyskiwania obowiązuje od teraz.",
  "Nem egyezik a kód utolsó négy karakterével. Nézd meg újra a leírt kódot.": "Nie zgadza się z czterema ostatnimi znakami kodu. Sprawdź ponownie zapisany kod.",
  "A mentés nem sikerült, próbáld újra.": "Nie udało się zapisać, spróbuj ponownie.",
  "Rendben, a következő belépéskor újra felajánljuk.": "Dobrze, zaproponujemy to ponownie przy następnym logowaniu.",
  "Emlékeztető mondat:": "Zdanie przypominające:",
  "Új PIN ujjlenyomattal": "Nowy PIN odciskiem palca",
  "Mentési kód": "Kod odzyskiwania",
  "Ehhez a tárhoz még nincs mentési kód, és az ujjlenyomatos feloldás sincs bekapcsolva, ezért a PIN nem állítható vissza.": "Ten magazyn nie ma jeszcze kodu odzyskiwania, a odblokowanie odciskiem palca nie jest włączone, więc PIN-u nie da się odzyskać.",
  "Új PIN beállítása": "Ustaw nowy PIN",
  "Az ujjlenyomat rendben. Add meg az új PIN-t.": "Odcisk palca w porządku. Wpisz nowy PIN.",
  "Az ujjlenyomatos feloldás most nem sikerült.": "Odblokowanie odciskiem palca teraz się nie udało.",
  "Hibás mentési kód.": "Błędny kod odzyskiwania.",
  "Az új PIN beállítása nem sikerült, a régi PIN maradt érvényben.": "Nie udało się ustawić nowego PIN-u; stary PIN nadal obowiązuje.",
  "A dokumentumok CSAK ezen az eszközön tárolódnak, a PIN-edből képzett kulccsal titkosítva (AES-256) — a vészkártyával ellentétben ezt csak te nyithatod meg. A PIN-t nem tároljuk. Ha elfelejted, a mentési kóddal vagy ujjlenyomattal állíthatsz be újat; ezek nélkül a dokumentumok nem állíthatók vissza.": "Dokumenty są przechowywane TYLKO na tym urządzeniu, zaszyfrowane kluczem utworzonym z twojego PIN-u (AES-256) — w przeciwieństwie do karty awaryjnej tylko ty możesz je otworzyć. PIN-u nie przechowujemy. Jeśli go zapomnisz, nowy ustawisz kodem odzyskiwania lub odciskiem palca; bez nich dokumentów nie da się odzyskać.",
  "A kódok titkosítva tárolódnak ezen az eszközön: a kulcs a PIN-edből készül (AES-256), magát a PIN-t nem tároljuk. Ha elfelejted a PIN-t, a mentési kóddal vagy ujjlenyomattal állíthatsz be újat; ezek nélkül a tartalom nem állítható vissza, ezért a seed-mondatról tarts papírmásolatot is. A teljes mentésbe ez a rész SOSEM kerül bele.": "Kody są przechowywane w postaci zaszyfrowanej na tym urządzeniu: klucz powstaje z twojego PIN-u (AES-256), sam PIN nie jest przechowywany. Jeśli zapomnisz PIN-u, nowy ustawisz kodem odzyskiwania lub odciskiem palca; bez nich zawartości nie da się odzyskać, dlatego trzymaj też papierową kopię frazy seed. Ta część NIGDY nie trafia do pełnej kopii zapasowej."
});
// ===== 2026-10-20 v43.327 (card 6b287cfb): wallet-creation acknowledgement (HU text approved by the owner 21:39) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Értem, hogy a tárcám kulcsait (PIN, helyreállító kód, seed phrase) csak én ismerem. Ha elveszítem őket, a tárcám tartalma végleg elveszhet, és a PrepperPapa nem tudja visszaállítani. A kulcsok biztonságos megőrzése az én felelősségem.": "Rozumiem, że tylko ja znam klucze mojego portfela (PIN, kod odzyskiwania, fraza seed). Jeśli je utracę, zawartość portfela może przepaść na zawsze, a PrepperPapa nie może jej przywrócić. Bezpieczne przechowywanie kluczy jest moją odpowiedzialnością.",
  "Rendben": "OK",
  "A tárca létrehozásához jelöld be, hogy tudomásul vetted a fenti szöveget.": "Aby utworzyć portfel, zaznacz pole, potwierdzając, że zapoznałeś się z powyższym tekstem."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): "Fontos tudnivaló" notice (HU approved by the owner 21:47, TG 28515) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Fontos tudnivaló az Irattárcáról és a tárcáról": "Ważna informacja o Teczce dokumentów i portfelu",
  "Az adataid csak a te eszközödön vannak, titkosítva. A PrepperPapa nem fér hozzájuk, és nem tudja visszaállítani őket.": "Twoje dane są tylko na twoim urządzeniu, zaszyfrowane. PrepperPapa nie ma do nich dostępu i nie może ich przywrócić.",
  "A PIN-kódod, a helyreállító kódod és a tárcád kulcsai (seed phrase) kizárólag nálad vannak. Ha elveszíted, megosztod vagy illetéktelen megszerzi őket, az adataid és a tárcád tartalma végleg elveszhet.": "Twój PIN, kod odzyskiwania i klucze portfela (fraza seed) są wyłącznie u ciebie. Jeśli je zgubisz, udostępnisz albo zdobędzie je osoba nieuprawniona, twoje dane i zawartość portfela mogą przepaść na zawsze.",
  "Ha a helyreállító kódot e-mailben is kéred, a hozzáférésed csak olyan biztonságos, mint a postafiókod.": "Jeśli poprosisz także o kod odzyskiwania e-mailem, twój dostęp jest tylko tak bezpieczny jak twoja skrzynka pocztowa.",
  "A kulcsok, a kód, a postafiók és az eszköz biztonságos megőrzéséért, valamint a mentésekért te felelsz. A PrepperPapa nem felel az ebből eredő kárért, kivéve azt a felelősséget, amelyet jogszabály nem enged kizárni.": "Odpowiadasz za bezpieczne przechowywanie kluczy, kodu, skrzynki pocztowej i urządzenia oraz za kopie zapasowe. PrepperPapa nie odpowiada za wynikłe z tego szkody, z wyjątkiem odpowiedzialności, której prawo nie pozwala wyłączyć.",
  "Elolvastam, értem.": "Przeczytałem i rozumiem."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): Gíra paragraph (HU approved by the owner 21:58, TG 28530) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "A gíra a közösségen belüli elszámolás egysége, nem pénz és nem fizetőeszköz. A PrepperPapa nem váltja át pénzre, nem garantálja az értékét, és nem részese a tagok közötti ügyleteknek. A tagok közötti vitákat és elszámolást a felhasználók egymás közt rendezik. Az offline fizetésnél előfordulhat, hogy ugyanazt a gírát kétszer költik el; ennek kockázata a felhasználókat terheli.": "Gíra to jednostka rozliczeniowa wewnątrz społeczności, nie pieniądz i nie środek płatniczy. PrepperPapa nie wymienia jej na pieniądze, nie gwarantuje jej wartości i nie jest stroną transakcji między członkami. Spory i rozliczenia między członkami użytkownicy załatwiają między sobą. Przy płatnościach offline może się zdarzyć, że ta sama gíra zostanie wydana dwa razy; ryzyko to ponoszą użytkownicy."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): SOS fail-closed -- nothing goes out unencrypted =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Az SOS NEM ment el: a titkosítás nem sikerült, ezért nyíltan nem küldöm el. Életveszélyben hívd a 112-t! A vészsíp szól.": "SOS NIE został wysłany: szyfrowanie się nie powiodło, więc nie zostanie wysłany bez szyfrowania. W zagrożeniu życia dzwoń pod 112! Gwizdek alarmowy działa.",
  "{n} helyre NEM ment el, mert a titkosítás nem sikerült. Életveszélyben hívd a 112-t!": "Do {n} miejsc(a) NIE został wysłany, bo szyfrowanie się nie powiodło. W zagrożeniu życia dzwoń pod 112!"
});
// ===== 2026-10-20 v43.329 (card 6b287cfb): room chat fail-closed -- nothing goes out unencrypted =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Az üzenet nem ment el: a titkosítás nem sikerült, vagy ezen a telefonon hiányzik a szoba kulcsa. Titkosítatlanul nem küldöm el. A szöveg megmaradt: lépj be újra a szobába (vagy kérj új meghívót a gazdától), és küldd újra.": "Wiadomość NIE została wysłana: szyfrowanie się nie powiodło albo na tym telefonie brakuje klucza pokoju. Bez szyfrowania nie zostanie wysłana. Twój tekst został zachowany: dołącz ponownie do pokoju (lub poproś gospodarza o nowe zaproszenie) i wyślij ją jeszcze raz.",
  "A kép nem ment el: a titkosítás nem sikerült, vagy hiányzik a szoba kulcsa. Titkosítatlanul nem küldöm el. Lépj be újra a szobába.": "Zdjęcie NIE zostało wysłane: szyfrowanie się nie powiodło albo brakuje klucza pokoju. Bez szyfrowania nie zostanie wysłane. Dołącz ponownie do pokoju."
});
// ===== 2026-10-20 v43.329 (card 6b287cfb): SOS / fall-detection notices (HU approved by the owner, TG 28555) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
  "Ez nem segélyhívás. Az SOS-jelzés és az esés-érzékelés csak a te szobáidba, az ott lévő tagoknak küld értesítést. Nem hívja a mentőket, a rendőrséget vagy a tűzoltókat, és nem biztos, hogy bárki időben meglátja. Az esés-érzékelés nem pontos: téves riasztást adhat, és előfordulhat, hogy egy esést nem érzékel. Életveszélyben, balesetnél, rosszullétnél hívd a 112-t. A PrepperPapa nem segélyszolgálat, és nem garantálja, hogy a jelzés célba ér.": "To nie jest połączenie alarmowe. Sygnał SOS i wykrywanie upadku wysyłają powiadomienie tylko do twoich pokoi, do ich członków. Nie wzywają karetki, policji ani straży pożarnej i nie ma pewności, że ktoś zobaczy je na czas. Wykrywanie upadku nie jest dokładne: może dać fałszywy alarm i może się zdarzyć, że nie wykryje upadku. W zagrożeniu życia, przy wypadku lub złym samopoczuciu dzwoń pod 112. PrepperPapa nie jest służbą ratunkową i nie gwarantuje, że sygnał dotrze do celu.",
  "Az SOS elküldi a pontos helyedet, és ha bejelölted, a Vészkártyád adatait (vércsoport, allergia, gyógyszer, betegség, kontakt) is az összes szobádnak.": "SOS wysyła twoją dokładną lokalizację, a jeśli to zaznaczyłeś, także dane twojej Karty ratunkowej (grupa krwi, alergia, leki, choroba, kontakt) do wszystkich twoich pokoi.",
  "A Vészkártya adataimat is küldjétek az SOS-szal.": "Wysyłajcie z SOS także dane mojej Karty ratunkowej.",
  "Ez nem hívja a mentőket. Életveszélyben hívd a 112-t.": "To nie wzywa karetki. W zagrożeniu życia dzwoń pod 112.",
  "%s SOS-jelzést küldött. Ha nem éred el, és veszélyben lehet, hívd a 112-t.": "%s wysłał(a) sygnał SOS. Jeśli nie możesz się z nim/nią skontaktować, a może być w niebezpieczeństwie, dzwoń pod 112.",
  "(zárt kép — ehhez a szobához nincs meg a kulcs)": "(zaszyfrowany obraz — brak klucza do tego pokoju)",
  "Fontos tudnivaló az SOS-ról és az esés-érzékelésről": "Ważne informacje o SOS i wykrywaniu upadku",
  "Nem kell megnyomnod: a telefon két percenként magától egyeztet. A gomb csak azonnali egyeztetésre való.": "Nie musisz go naciskać: telefon sam synchronizuje co dwie minuty. Przycisk służy tylko do natychmiastowej synchronizacji.",
  "Nincs elérhető Gíra-szoba: egy szoba gazdája kapcsolhatja be a szoba beállításaiban („Gíra-közösség”).": "Brak dostępnego pokoju Gíra: właściciel pokoju może to włączyć w ustawieniach pokoju („Społeczność Gíra”).",
  "Automatikus egyeztetés bekapcsolva, de most nincs elérhető Gíra-szoba": "Automatyczna synchronizacja włączona, ale teraz żaden pokój Gíra nie jest dostępny",
  "utoljára próbálva": "ostatnia próba",
  "Automatikus egyeztetés bekapcsolva": "Automatyczna synchronizacja włączona",
  "utoljára ellenőrizve": "ostatnio sprawdzono",
  "Utolsó változás elküldve": "Ostatnia zmiana wysłana",
  "Utolsó beérkezett könyv": "Ostatnia otrzymana księga",
  "Fortiprep vagy konzerv": "Fortiprep czy konserwy",
  "Mennyibe kerül a tartalék hosszú távon": "Ile kosztuje zapas w dłuższym okresie",
  "Fortiprep vagy konzerv: mennyibe kerül a tartalék": "Fortiprep czy konserwy: ile kosztuje zapas",
  "Ugyanannyi kalóriát hasonlít össze ugyanarra az időszakra. Az árakat a saját boltod szerint átírhatod.": "Porównuje te same kalorie w tym samym okresie. Ceny możesz zmienić według swojego sklepu.",
  "Hány fő": "Liczba osób",
  "Napi kalória fejenként (kcal)": "Dzienne kalorie na osobę (kcal)",
  "Hány évig álljon a tartalék": "Ile lat ma wystarczyć zapas",
  "Egy csomag ára (Ft)": "Cena jednej paczki (HUF)",
  "Kalória egy csomagban (kcal)": "Kalorie w jednej paczce (kcal)",
  "Eltarthatóság (év)": "Trwałość (lata)",
  "Alapérték: 42 adagos (14 napos, egy fős) csomag a PP-2-2026 kóddal, 2026. augusztusi áron. A mostani gyártás minőségmegőrzési ideje 2050. november.": "Domyślnie: paczka 42 porcji (14 dni, jedna osoba) z kodem PP-2-2026, cena z sierpnia 2026. Obecna partia jest ważna do listopada 2050.",
  "Egy doboz ára (Ft)": "Cena jednej puszki (HUF)",
  "Kalória egy dobozban (kcal)": "Kalorie w jednej puszce (kcal)",
  "A konzervnél azzal számol, hogy lejáratkor az egészet lecseréled. Ha rotálva megeszed, a csere nem veszteség, de figyelni kell rá.": "Przy konserwach zakłada, że po upływie terminu wymieniasz wszystko. Jeśli zjadasz je rotacyjnie, wymiana nie jest stratą, ale trzeba jej pilnować.",
  "A FortiPrep 14 napos csomagja a PP-2-2026 kóddal, kedvezménnyel:": "14-dniowa paczka FortiPrep z kodem PP-2-2026, ze zniżką:",
  "Megnézem a FortiPrep oldalán": "Zobacz na stronie FortiPrep",
  "Minden mezőbe nullánál nagyobb számot írj.": "W każde pole wpisz liczbę większą od zera.",
  "Ekkora értékkel nem számol.": "Nie liczy z tak dużymi wartościami.",
  "Erre az időszakra a Fortiprep az olcsóbb.": "W tym okresie tańszy jest Fortiprep.",
  "Erre az időszakra a konzerv az olcsóbb.": "W tym okresie tańsze są konserwy.",
  "Erre az időszakra a kettő ugyanannyiba kerül.": "W tym okresie oba kosztują tyle samo.",
  "Különbség": "Różnica",
  "Szükséges kalória (kcal)": "Potrzebne kalorie (kcal)",
  "Csomag": "Paczki",
  "Egyszeri vásárlás": "Jednorazowy zakup",
  "Ezer kalória ára": "Cena za 1000 kcal",
  "Vásárlás a teljes időszakra": "Zakupy w całym okresie",
  "Évente": "Rocznie",
  "Doboz": "Puszki",
  "FortiPrep 14 napos csomag, 15% kedvezménnyel": "Paczka FortiPrep na 14 dni, 15% zniżki",
  "Kuponkód": "Kod rabatowy",
  "Másol": "Kopiuj",
  "A gomb mögötti link magától érvényesíti a kódot a kosárban.": "Link pod przyciskiem sam zastosuje kod w koszyku.",
  "Megveszem kedvezménnyel": "Kupuję ze zniżką",
  // Biblia konyvszin-sema (2026-10-25, kartya 6b4458db)
  "Könyvszínek": "Kolory ksiąg",
  "Új": "Nowy",
  "Régi": "Stary",
  "Minden könyvcsoport saját színt kap, az Ószövetségben és az Újszövetségben is.": "Każda grupa ksiąg ma własny kolor, zarówno w Starym, jak i w Nowym Testamencie.",
  "A korábbi zöld árnyalatok: az Újszövetség is az Ószövetség színeit kapja.": "Dawne odcienie zieleni: Nowy Testament dostaje te same kolory co Stary.",
  // Biblia terkep: helyleiras (2026-10-25, kartya 6b4458db)
  "biztos": "pewna",
  "valószínű": "prawdopodobna",
  "lehetséges": "możliwa",
  "Mai azonosítás": "Współczesna identyfikacja",
  "Megjegyzés (OpenBible, angolul)": "Uwaga (OpenBible, po angielsku)",
  "Más nevek (angol fordításokban)": "Inne nazwy (w przekładach angielskich)",
  "További versek": "Inne wersety"
});
// ===== 2026-10-25 v43.355: camera Morse follows the tempo (#65); Noah memory lines from about 8 GB (#52) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
 "Indítsd, és irányítsd a kamerát egy Morzét villogó fényre (pl. egy másik telefon vakuja). A háttér legyen sötét, a fény a kép KÖZEPÉN. A fény-küszöb magától hangolódik; a \"Fényerő\" sáv és a lámpa mutatja, mit lát. A vétel magától követi a villogás tempóját, és a \"Vétel sebesség\" csúszkát is odaállítja; kézzel is állíthatod.": "Uruchom i skieruj aparat na światło migające alfabetem Morse’a (np. lampę błyskową innego telefonu). Tło powinno być ciemne, a światło na ŚRODKU kadru. Próg światła ustawia się sam; pasek \"Jasność\" i lampka pokazują, co widzi. Odbiór sam podąża za tempem migania i ustawia też suwak \"Prędkość odbioru\"; możesz go ustawić także ręcznie.",
 "A nyelvi modell válasz közben kb. 3 GB memóriát használ, ezért Noah legalább 5,5 GB jelentett memóriát kér, ami kb. 8 GB-os telefonnak felel meg. Kisebb telefonon a rendszer válasz közben leállítaná az appot, ezért itt Noah nem használható.": "Podczas odpowiadania model językowy używa około 3 GB pamięci, dlatego Noah potrzebuje co najmniej 5,5 GB zgłaszanej pamięci, co odpowiada telefonowi z około 8 GB. Na mniejszym telefonie system zamknąłby aplikację w trakcie odpowiedzi, dlatego tutaj Noah nie może działać.",
 "A telefon memóriáját nem sikerült lekérdezni.": "Nie udało się odczytać pamięci telefonu.",
 "A telefon által jelentett memória: {jel} GB, ez kb. {nev} GB-os telefon (a rendszer a névleges memória kb. 90%-át jelenti).": "Pamięć zgłaszana przez telefon: {jel} GB, czyli telefon z około {nev} GB (system zgłasza około 90% pamięci nominalnej).",
 "Ebbe a telefonba mindkét modell belefér (E2B és E4B).": "Na tym telefonie zmieszczą się oba modele (E2B i E4B).",
 "Ebbe a telefonba az E2B modell fér bele. Az E4B nem, mert ahhoz legalább {kapu} GB jelentett memória kell.": "Na tym telefonie zmieści się model E2B. E4B nie, bo potrzebuje co najmniej {kapu} GB zgłaszanej pamięci.",
 "Ebbe a telefonba egyik modell sem fér bele.": "Na tym telefonie nie zmieści się żaden model.",
 "Noah kb. 8 GB-os telefontól fut (a telefon névleges memóriája), a nagyobb E4B modell kb. 10 GB-ostól.": "Noah działa od telefonu z około 8 GB (nominalna pamięć telefonu), większy model E4B od około 10 GB.",
 "A telefon {jel} GB memóriát jelent, ez kb. {nev} GB-os telefon.": "Telefon zgłasza {jel} GB pamięci, czyli telefon z około {nev} GB.",
 "Ez a telefon: {modell}.": "Ten telefon: {modell}.",
 "Szabad hely: {hely}.": "Wolne miejsce: {hely}.",
 "Ajánlott: {modell}.": "Zalecany: {modell}.",
 "nem választható: legalább {ajanlott} GB-os telefon kell": "niedostępny: potrzebny telefon z co najmniej {ajanlott} GB",
 "ez kb. {nev} GB-os": "ten ma około {nev} GB",
 "Ajánlott memória: legalább {ajanlott} GB-os telefon": "Zalecana pamięć: telefon z co najmniej {ajanlott} GB",
 "ez a telefon {jel} GB-ot jelent, kb. {nev} GB-os": "ten telefon zgłasza {jel} GB, około {nev} GB",
 "ezért ez a modell itt nem választható": "dlatego tego modelu nie można tu wybrać",
 "ennek a telefonnak a memóriáját nem sikerült lekérdezni": "nie udało się odczytać pamięci tego telefonu",
 "Processzor:": "Procesor:",
 "kb. 8 GB-os telefon kell": "potrzebny telefon z około 8 GB",
 "Ehhez Android 11 vagy újabb, kb. 8 GB-os (névleges memóriájú) telefon kell, és 6-8 GB szabad hely.": "Do tego potrzebny jest telefon z Androidem 11 lub nowszym, około 8 GB pamięci (nominalnej) i 6-8 GB wolnego miejsca.",
  "Becslés a légnyomás-trendből (Zambretti-módszer), a félgömb és az évszak szerint igazítva. Szelet és felhőzetet nem lát, ezért csak tájékoztató.": "Szacunek na podstawie trendu ciśnienia (metoda Zambrettiego), dostosowany do półkuli i pory roku. Nie widzi wiatru ani chmur, więc ma charakter wyłącznie orientacyjny.",
  "Magasság nélkül csak a trendet veszi figyelembe, a nyomás szintjét nem.": "Bez wysokości bierze pod uwagę tylko trend, a nie poziom ciśnienia.",
  "A trópusokon a légnyomás napi ingadozása elfedi a frontokat, ezért itt a becslés kevésbé megbízható.": "W tropikach dobowe wahania ciśnienia maskują fronty, dlatego szacunek jest tu mniej wiarygodny.",
  "A sarkvidéken a módszer kevésbé megbízható.": "W rejonach polarnych metoda jest mniej wiarygodna.",
  "Becslés": "Szacunek",
  "Napos, nyugodt idő": "Słonecznie, spokojnie",
  "Változékony idő": "Zmiennie",
  "Eső valószínű": "Prawdopodobny deszcz",
  "Vihar, sok eső": "Burza, obfity deszcz",
  "Gyorsan emelkedik": "Szybko rośnie",
  "Lassan emelkedik": "Powoli rośnie",
  "Állandó": "Stałe",
  "Lassan süllyed": "Powoli spada",
  "Gyorsan süllyed": "Szybko spada"
});
// Vercsoport calculator (2026-10-25, card 6b4458db): the red-cell table of tudastar article 3.6
Object.assign(window.PP_FORD_SZOTAR.pl, {
 "Vércsoport": "Grupa krwi",
 "Kinek adhatsz vért, és kitől kaphatsz": "Komu możesz oddać krew i od kogo możesz ją otrzymać",
 "Vércsoport: kinek adhatsz, kitől kaphatsz": "Grupa krwi: komu możesz oddać, od kogo możesz otrzymać",
 "Vérátömlesztést csak egészségügyi személyzet végez, vércsoport-meghatározás és keresztpróba után.": "Transfuzję krwi wykonuje wyłącznie personel medyczny, po oznaczeniu grupy krwi i próbie krzyżowej.",
 "Terepen vért adni vagy kapni nem szabad. Ezt nem lehet rögtönözni.": "W terenie nie wolno oddawać ani przyjmować krwi. Tego nie da się zaimprowizować.",
 "A kalkulátor tájékoztató: arra való, hogy értsd a szabályt, nem arra, hogy terepen dönts belőle.": "Kalkulator ma charakter informacyjny: pomaga zrozumieć zasadę, a nie podejmować na jej podstawie decyzji w terenie.",
 "A te vércsoportod": "Twoja grupa krwi",
 "Válaszd ki": "Wybierz",
 "Mutasd": "Pokaż",
 "Források: Magyar Vöröskereszt, Ausztrál Vöröskereszt (Lifeblood), Amerikai Vöröskereszt.": "Źródła: Węgierski Czerwony Krzyż, Australijski Czerwony Krzyż (Lifeblood), Amerykański Czerwony Krzyż.",
 "Válaszd ki a vércsoportodat.": "Wybierz swoją grupę krwi.",
 "Kinek adhatsz vörösvérsejtet": "Komu możesz oddać krwinki czerwone",
 "Kitől kaphatsz vörösvérsejtet": "Od kogo możesz otrzymać krwinki czerwone",
 "Mind a nyolc vércsoportnak": "Wszystkim ośmiu grupom krwi",
 "Mind a nyolc vércsoporttól": "Od wszystkich ośmiu grup krwi",
 "A 0 Rh-negatív vörösvérsejt bárkinek adható, ezért hívják univerzális vörösvérsejt-adónak.": "Krwinki czerwone 0 Rh ujemne można podać każdemu, dlatego grupę 0 Rh ujemną nazywa się uniwersalnym dawcą krwinek czerwonych.",
 "A plazmánál a szabály megfordul: az AB vércsoportú plazma bárkinek adható, a 0 vércsoportú csak 0 vércsoportúnak.": "Przy osoczu zasada się odwraca: osocze AB można podać każdemu, osocze 0 tylko grupie 0.",
 "Ez tájékoztató, nem döntési alap.": "To informacja, a nie podstawa do decyzji.",
 "Hogy egy beteg milyen vért kap, azt vércsoport-meghatározás és keresztpróba után az ellátó orvos dönti el.": "O tym, jaką krew otrzyma pacjent, decyduje lekarz prowadzący po oznaczeniu grupy krwi i próbie krzyżowej.",
 "0 Rh-negatív": "0 Rh ujemna",
 "0 Rh-pozitív": "0 Rh dodatnia",
 "A Rh-negatív": "A Rh ujemna",
 "A Rh-pozitív": "A Rh dodatnia",
 "B Rh-negatív": "B Rh ujemna",
 "B Rh-pozitív": "B Rh dodatnia",
 "AB Rh-negatív": "AB Rh ujemna",
 "AB Rh-pozitív": "AB Rh dodatnia"
});
// Bible package by default (2026-10-25, card 6b4458db): notes and apocrypha download with the Bible, settings keep display switches
Object.assign(window.PP_FORD_SZOTAR.pl, {
 "Ahol egy vershez jegyzet tartozik, egy kis jel áll mellette; rákoppintva megnyílik. A jegyzetek a Bibliával együtt töltődnek le, és internet nélkül is megvannak.": "Przy wersecie, do którego należy przypis, stoi mały znak; dotknij go, aby otworzyć. Przypisy pobierają się razem z Biblią i są dostępne bez internetu.",
 "A Bibliával együtt töltődik le": "Pobiera się razem z Biblią",
 "Apokrif könyvek megjelenítése": "Pokaż księgi apokryficzne"
});

// feedback sheet fields + one-press screenshot (card 6b4458db, v43.374)
Object.assign(window.PP_FORD_SZOTAR.pl, {
 "Típus": "Typ",
 "Modul": "Moduł",
 "Leírás": "Opis",
 "Képernyőkép": "Zrzut ekranu",
 "Képernyőkép erről a képernyőről": "Zrzut tego ekranu",
 "Kép feltöltése": "Prześlij obraz",
 "Kép eltávolítása": "Usuń obraz",
 "Ezt a képet nem tudtam beolvasni.": "Nie udało się odczytać tego obrazu.",
 "Hiba": "Błąd",
 "Ötlet": "Pomysł",
 "Kérdés": "Pytanie",
 "Működik (kipróbáltam, rendben)": "Działa (wypróbowałem, w porządku)"
});

// ===== 2026-10-25 v43.375: Noah in every language, answer report, about/licence, morning summary, sun path (card 6b287cfb) =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
 "Válasz jelentése": "Zgłoś tę odpowiedź",
 "A jelentéssel a kérdésed és Noah válasza a PrepperPapa csapatához kerül, hogy kijavíthassuk. Mást nem küldünk el.": "Wraz ze zgłoszeniem Twoje pytanie i odpowiedź Noaha trafiają do zespołu PrepperPapa, abyśmy mogli to poprawić. Nic więcej nie jest wysyłane.",
 "Mi a gond a válasszal?": "Co jest nie tak z odpowiedzią?",
 "Sértő vagy bántó": "Obraźliwa lub krzywdząca",
 "Veszélyes vagy káros": "Niebezpieczna lub szkodliwa",
 "Téves vagy félrevezető": "Błędna lub wprowadzająca w błąd",
 "Megjegyzés (nem kötelező)": "Uwagi (opcjonalnie)",
 "A jelentett válasz": "Zgłaszana odpowiedź",
 "A szerver most nem fogadta el a jelentést. Próbáld újra később.": "Serwer nie przyjął teraz zgłoszenia. Spróbuj ponownie później.",
 "Jelentve": "Zgłoszono",
 "Köszönjük, a jelentést megkaptuk.": "Dziękujemy, otrzymaliśmy zgłoszenie.",
 "Noah névjegye": "O Noahu",
 "Noah a Gemma 4 nyílt nyelvi modellel működik (Gemma 4, Google, Apache 2.0 licenc).": "Noah działa na otwartym modelu językowym Gemma 4 (Gemma 4, Google, licencja Apache 2.0).",
 "A Gemma 4 modellt a Google fejlesztette és adja ki az Apache License 2.0 licenc szerint. A licenc szövege:": "Model Gemma 4 został opracowany przez Google i jest udostępniany na licencji Apache License 2.0. Tekst licencji:",
 "A PrepperPapa nem a Google terméke, és a Google nem támogatja vagy hagyja jóvá.": "PrepperPapa nie jest produktem Google, a Google go nie sponsoruje ani nie popiera.",
 "Noah válaszait gépi modell írja, és tévedhet. Ha egy válasz sértő, veszélyes vagy téves, a válasz alatti „Válasz jelentése” gombbal jelezd nekünk.": "Odpowiedzi Noaha pisze model maszynowy i mogą być błędne. Jeśli odpowiedź jest obraźliwa, niebezpieczna lub błędna, daj nam znać przyciskiem „Zgłoś tę odpowiedź” pod nią.",
 "Noah, az offline MI segéd: Gemma 4, Google, Apache 2.0 licenc.": "Noah, asystent AI offline: Gemma 4, Google, licencja Apache 2.0.",
 "A modell a Google Gemma 4 (Apache 2.0 licenc), a Google hivatalos LiteRT-tárából (Hugging Face) töltődik le. Wi-Fi ajánlott.": "Model to Google Gemma 4 (licencja Apache 2.0), pobierany z oficjalnego repozytorium LiteRT Google (Hugging Face). Zalecane Wi-Fi.",
 "Reggeli összefoglaló": "Poranne podsumowanie",
 "Minden reggel értesítés: a készlet hiányai, a készenléti szint, egy ige és egy felkészülési tanács. Ha megnyitod Noah-t, kártyaként is látod.": "Co rano powiadomienie: braki w zapasach, poziom gotowości, werset biblijny i porada przygotowawcza. Gdy otworzysz Noaha, zobaczysz to też jako kartę.",
 "Reggeli összefoglaló bekapcsolva": "Poranne podsumowanie włączone",
 "Mutasd most": "Pokaż teraz",
 "Értesítés engedélyezése": "Zezwól na powiadomienia",
 "Noah · Reggeli összefoglaló": "Noah · Poranne podsumowanie",
 "Készenlét: {hely}, {szint} szint, {pct}%.": "Gotowość: {hely}, poziom {szint}, {pct}%.",
 "Hiányzik a következő szinthez: {lista}.": "Brakuje do następnego poziomu: {lista}.",
 "Készenlét: még nem mérhető. Add meg a Háztartásban a helyszínt, kik érkeznek oda, és rendelj hozzá készletet.": "Gotowość: jeszcze nie do zmierzenia. W Gospodarstwie dodaj miejsce, kto tam przyjeżdża, i przypisz do niego zapasy.",
 "Hiányzik: {lista}.": "Brakuje: {lista}.",
 "Ige ({hely}): {szoveg}": "Werset ({hely}): {szoveg}",
 "Tipp: {szoveg}": "Porada: {szoveg}",
 "A reggeli összefoglaló a telefonra telepített Android appban működik.": "Poranne podsumowanie działa w aplikacji na Androida zainstalowanej w telefonie.",
 "Kikapcsolva.": "Wyłączone.",
 "Az értesítéshez engedély kell: koppints az „Értesítés engedélyezése” gombra.": "Powiadomienie wymaga zgody: dotknij „Zezwól na powiadomienia”.",
 "Beütemezve: a következő {n} reggel, {ido}-kor.": "Zaplanowano: następne {n} poranków o {ido}.",
 "Minden reggel {ido}-kor.": "Codziennie rano o {ido}.",
 "A tipp a tudástárban": "Porada w bazie wiedzy",
 "A nap pályájához tudni kell, hol vagy: nyomd meg lent a „Mérés a helyzetemre” gombot.": "Do drogi słońca aplikacja musi wiedzieć, gdzie jesteś: naciśnij poniżej „Pomiar dla mojej pozycji”.",
 "A nap most a horizont alatt van: a pályáját nappal rajzolom a képre.": "Słońce jest teraz pod horyzontem: jego drogę rysuję na obrazie w ciągu dnia.",
 "A nap pályájához iránytű- és dőlésadat kell.": "Droga słońca wymaga danych kompasu i nachylenia.",
 "Napkelte": "Wschód",
 "delel": "południe",
 "A pálya most nincs a képen: fordulj {fok}° felé.": "Drogi nie ma teraz na obrazie: obróć się w kierunku {fok}°.",
 "A segéd beállításai": "Ustawienia asystenta",
 "A segédhez először le kell tölteni a nyelvi modellt a telefonra (egyszer, Wi-Fi ajánlott).": "Dla asystenta najpierw pobierz model językowy na telefon (raz, zalecane Wi-Fi).",
 "A választ a telefonon futó gépi modell írja. Életveszélyben a forráscikket olvasd el, és hívd a 112-t. Az igét a Károli-fordításból az app illeszti be, nem a modell.": "Odpowiedź pisze model maszynowy działający w telefonie. W zagrożeniu życia przeczytaj artykuł źródłowy i zadzwoń pod numer alarmowy. Wersety wstawia aplikacja ze swojego przekładu Biblii, nie model.",
 "Amit még tudjon rólad. Kérdezzben is mondhatod: „jegyezd meg, hogy …”": "Co jeszcze ma o Tobie wiedzieć. Możesz to też powiedzieć w Zapytaj: „zapamiętaj, że …”",
 "Az első használatkor a telefon még egyszer ennyi helyet foglal a gyorsabb futáshoz, tehát a letöltés méretének kétszerese kell szabadon.": "Przy pierwszym użyciu telefon zajmuje drugie tyle miejsca dla szybszego działania, więc wolne musi być dwa razy tyle, ile wynosi pobieranie.",
 "Csak ezen a telefonon marad, sehova nem küldjük el. Gépelés közben magától mentődik.": "Zostaje tylko w tym telefonie i nie jest nigdzie wysyłane. Zapisuje się samo podczas pisania.",
 "Hogyan tisztítsak vizet, ha nincs forraló?": "Jak oczyścić wodę, jeśli nie mogę jej zagotować?",
 "Hogyan tisztítsak vizet?": "Jak oczyścić wodę?",
 "Hol van megírva, hogy ne aggódjunk a holnapért?": "Gdzie jest napisane, żebyśmy nie troszczyli się o jutro?",
 "Hol van megírva, hogy ne aggódjunk?": "Gdzie jest napisane, by się nie martwić?",
 "Károli-fordítás": "Przekład Biblii w aplikacji",
 "Kérdezz a tudástárból, a Bibliából, vagy bármiről. Internet nélkül, a telefonon fut.": "Pytaj o bazę wiedzy, Biblię albo cokolwiek. Działa w telefonie, bez internetu.",
 "Lakóhely, térség (pl. Gyömrő, Pest megye)": "Miejsce zamieszkania, region (np. miasto, powiat)",
 "Megszakítás": "Przerwij",
 "Mit tudsz?": "Co potrafisz?",
 "Modell letöltése": "Pobierz model",
 "Részletes válaszok": "Szczegółowe odpowiedzi",
 "Rövid válaszok": "Krótkie odpowiedzi",
 "Rólam (a válaszokhoz)": "O mnie (do odpowiedzi)",
 "A Háztartás családtagjait is vegye figyelembe": "Uwzględniaj też członków Gospodarstwa",
 "Írj egy kérdést…": "Napisz pytanie…",
 "Új beszélgetés": "Nowa rozmowa",
 "Még nincs letöltött modell.": "Nie pobrano jeszcze modelu.",
 "Letöltve": "Pobrano",
 "A letöltés megszakítva.": "Pobieranie przerwano.",
 "Kész, a modell a telefonon van.": "Gotowe, model jest w telefonie.",
 "Mentve, csak ezen a telefonon.": "Zapisano, tylko w tym telefonie.",
 "Törölve.": "Usunięto.",
 "{n} liter víz": "{n} l wody",
 "{n} kcal élelem": "{n} kcal żywności",
 "{n} kWh hasznos fűtési energia": "{n} kWh użytecznej energii grzewczej",
 "{fo} fő és {allat} állat, {nap} napra": "{fo} os. i {allat} zwierząt, na {nap} dni",
 "{fo} fő, {nap} napra": "{fo} os., na {nap} dni",
 "**{hely}**: nincs megadva, ki érkezik ide, ezért a készenléti szint nem számolható (Háztartás › Helyszínek › {hely}).": "**{hely}**: nie podano, kto tu przyjeżdża, więc nie da się obliczyć poziomu gotowości (Gospodarstwo › Miejsca › {hely}).",
 "**{hely}** ({keret}): ehhez a helyszínhez még nincs készlet rendelve, ezért a szint nem mérhető. A Készletnél a tétel Tárolási helyénél válaszd ki: {hely}.": "**{hely}** ({keret}): do tego miejsca nie przypisano jeszcze zapasów, więc poziomu nie da się zmierzyć. W Zapasach wybierz w Miejscu przechowywania pozycji: {hely}.",
 "**{hely}** ({keret}): van ide rendelt készlet, de se víz, se mérhető élelem, se fűtés nincs benne, ezért a szint nem számolható.": "**{hely}** ({keret}): przypisano tu zapasy, ale nie ma w nich wody, mierzalnej żywności ani ogrzewania, więc poziomu nie da się obliczyć.",
 "**{hely}** ({keret}): **{szint}** készenléti szint, {pct}%.": "**{hely}** ({keret}): poziom gotowości **{szint}**, {pct}%.",
 "élelem": "żywność",
 "fűtés": "ogrzewanie",
 "jó": "dobry",
 "gyenge": "słaby",
 "teljes": "pełny",
 "Az élelmiszereknél nincs megadva az energia (kcal), ezért az élelem nem mérhető.": "Przy żywności nie podano energii (kcal), więc żywności nie da się zmierzyć.",
 "A teljes (100%) készlethez hiányzik: {lista}.": "Do pełnych (100%) zapasów brakuje: {lista}.",
 "A következő, {szint} szinthez (minden legalább {min}%) hiányzik: {lista}.": "Do następnego poziomu, {szint} (wszystko co najmniej {min}%), brakuje: {lista}.",
 "Minden mért összetevő 100%.": "Każdy mierzony składnik ma 100%.",
 "A Háztartásban még nincs helyszín, ezért a készenléti szint nem számolható. Vedd fel az otthonodat a Háztartás › Helyszínek alatt, és add meg, kik érkeznek oda és hány napra számolsz.": "W Gospodarstwie nie ma jeszcze miejsca, więc nie da się obliczyć poziomu gotowości. Dodaj dom w Gospodarstwo › Miejsca i podaj, kto tam przyjeżdża i na ile dni planujesz.",
 "A készlet üres: még egyetlen tételt sem vettél fel.": "Zapasy są puste: nie dodano jeszcze żadnej pozycji.",
 "A készleted üres: még egyetlen tételt sem vettél fel.": "Twoje zapasy są puste: nie dodano jeszcze żadnej pozycji.",
 "A Mi hiányzik? listából ({db} tétel, az első 6):": "Z listy Czego brakuje? ({db} pozycji, pierwsze 6):",
 "A Mi hiányzik? listából ({db} tétel):": "Z listy Czego brakuje? ({db} pozycji):",
 "tag": "członek",
 "{n} éves": "{n} lat",
 "{db} db": "{db} szt.",
 "lejár:": "wygasa:",
 "A Háztartásban még nincs helyszín. A Háztartás › Helyszínek alatt veheted fel.": "W Gospodarstwie nie ma jeszcze miejsca. Możesz je dodać w Gospodarstwo › Miejsca.",
 "Helyszíneid ({db}):": "Twoje miejsca ({db}):",
 "{n} fő": "{n} os.",
 "{n} állat": "{n} zwierząt",
 "{n} nap": "{n} dni",
 "A Háztartásban nincs háziállat felvéve.": "W Gospodarstwie nie dodano zwierzęcia.",
 "Háziállataid ({db}):": "Twoje zwierzęta ({db}):",
 "állat": "zwierzę",
 "A Háztartásban még nincs családtag felvéve. A Háztartás › Családtagok alatt veheted fel őket.": "W Gospodarstwie nie dodano jeszcze członka rodziny. Możesz ich dodać w Gospodarstwo › Członkowie rodziny.",
 "A háztartásod ({db} fő):": "Twoje gospodarstwo ({db} os.):",
 "A Háztartásban nincs családtag felvéve.": "W Gospodarstwie nie dodano członka rodziny.",
 "Háziállat:": "Zwierzę:",
 "Nincs mentett pontod a térképen.": "Nie masz zapisanego punktu na mapie.",
 "Mentett pontjaid ({db}):": "Twoje zapisane punkty ({db}):",
 "A készletben ({db} tétel):": "W zapasach ({db} pozycji):",
 "… és még {n}": "… i jeszcze {n}",
 "Ilyen tétel nincs a készletedben. (A készletben {db} tétel van.)": "Nie ma takiej pozycji w Twoich zapasach. (W zapasach jest {db} pozycji.)",
 "A készletedben {db} tétel van, összesen {ossz} darab. Kategóriánként:": "W Twoich zapasach jest {db} pozycji, łącznie {ossz} szt. Według kategorii:",
 "{t} tétel, {db} db": "{t} poz., {db} szt.",
 "{nap} napos túra hátizsákkal": "{nap}-dniowa wędrówka z plecakiem",
 "{nap} napos út autóval": "{nap}-dniowa podróż samochodem",
 "{nap} napos út": "{nap}-dniowa podróż",
 "A Háztartásban még nincs családtag, ezért nem tudom kijelölni, kik mennek. A Mit vigyek? ablakot megnyitom, a napokat beállítottam ({nap}); a résztvevőket a Háztartás › Családtagok alatt vedd fel, utána a lista kiszámolja, mi kell.": "W Gospodarstwie nie ma jeszcze członka rodziny, więc nie mogę wybrać, kto jedzie. Otwieram okno Co zabrać? z ustawionymi dniami ({nap}); dodaj uczestników w Gospodarstwo › Członkowie rodziny, a lista obliczy, czego potrzeba.",
 "Összeállítottam: {fej}, {fo} fő és {allat} állat ({nevek}). Megnyitom a Mit vigyek? ablakban, kitöltve; a listát ott látod és pipálhatod.": "Zestawiłem: {fej}, {fo} os. i {allat} zwierząt ({nevek}). Otwieram to wypełnione w oknie Co zabrać?; tam widzisz listę i możesz ją odhaczać.",
 "Összeállítottam: {fej}, {fo} fő ({nevek}). Megnyitom a Mit vigyek? ablakban, kitöltve; a listát ott látod és pipálhatod.": "Zestawiłem: {fej}, {fo} os. ({nevek}). Otwieram to wypełnione w oknie Co zabrać?; tam widzisz listę i możesz ją odhaczać.",
 "A Háztartásban csak {ossz} fő van, őket jelöltem ki. A hiányzó {hiany} főt vedd fel a Háztartásnál, hogy a lista velük is számoljon.": "W Gospodarstwie jest tylko {ossz} os., wybrałem je. Dodaj brakujące {hiany} os. w Gospodarstwie, aby lista je też uwzględniła.",
 "A napok számát nem mondtad, {nap} nappal számoltam.": "Nie podano liczby dni, liczyłem {nap} dni.",
 "Hová tervezzem az útvonalat? Írd meg a cél nevét (település, turistapont, saját pont vagy helyszín), például: „Tervezd meg az útvonalat Dobogókőre.”": "Dokąd mam zaplanować trasę? Napisz nazwę celu (miejscowość, punkt turystyczny, zapisany punkt lub miejsce).",
 "Nem találom ezt a helyet: „{cel}”. Sem a saját pontjaid, sem a helyszíneid, sem a letöltött turistapontok, sem a települések között nincs ilyen nevű. Útvonalat fejből nem írok le; ha máshogy hívják, írd meg pontosabban, vagy a térképen egy pont buborékán válaszd az „Útvonal ide”-t.": "Nie znajduję tego miejsca: „{cel}”. Nie ma takiej nazwy wśród Twoich punktów, miejsc, pobranych punktów turystycznych ani miejscowości. Trasy nigdy nie opisuję z pamięci; jeśli nazywa się inaczej, napisz dokładniej albo na mapie wybierz „Trasa tutaj” w dymku punktu.",
 "Nem tudom, hol vagy (nincs GPS-helyzet), ezért a távolságot nem tudom megmondani.": "Nie wiem, gdzie jesteś (brak pozycji GPS), więc nie podam odległości.",
 "légvonalban {km} km, {egtaj} felé ({fok}°), {honnan} alapján.": "w linii prostej {km} km, na {egtaj} ({fok}°), według: {honnan}.",
 "észak": "północ",
 "északkelet": "północny wschód",
 "kelet": "wschód",
 "délkelet": "południowy wschód",
 "dél": "południe",
 "délnyugat": "południowy zachód",
 "nyugat": "zachód",
 "északnyugat": "północny zachód",
 "a mostani helyzeted": "Twoja obecna pozycja",
 "az otthonod helye": "lokalizacja Twojego domu",
 "a térkép utolsó nézete": "ostatni widok mapy",
 "egy mentett pontod": "jeden z Twoich zapisanych punktów",
 "saját pont": "własny punkt",
 "község": "gmina",
 "településrész": "część miejscowości",
 "turistapont": "punkt turystyczny",
 "Útvonal ide: {nev} ({al}). Megnyitom a térképen a tervezőt: a mostani helyzetedből, turistautakon számolja (legfeljebb kb. 80 km).": "Trasa do: {nev} ({al}). Otwieram planer na mapie: liczy od Twojej obecnej pozycji szlakami (do ok. 80 km).",
 "Több hely is illik erre: „{cel}”. Melyikre gondolsz? Koppints rá, vagy írd meg pontosabban.": "Kilka miejsc pasuje do „{cel}”. Które masz na myśli? Dotknij go albo napisz dokładniej.",
 "(… és még {n})": "(… i jeszcze {n})",
 "lejárt {d} ({n} napja)": "wygasło {d} ({n} dni temu)",
 "ma jár le ({d})": "wygasa dziś ({d})",
 "{d} ({n} nap múlva)": "{d} (za {n} dni)",
 "… és még {n} tétel": "… i jeszcze {n} pozycji",
 "Lejárt ({db} tétel):": "Wygasłe ({db} pozycji):",
 "Semmi nem járt le a készletedben.": "Nic w Twoich zapasach nie wygasło.",
 "{nap} napon belül lejár ({db} tétel):": "Wygasa w ciągu {nap} dni ({db} pozycji):",
 "{nap} napon belül sem jár le semmi. A következő lejáratok:": "W ciągu {nap} dni też nic nie wygasa. Najbliższe terminy:",
 "{db} tételnél nincs megadva lejárati dátum, ezeket nem tudom figyelni.": "{db} pozycji nie ma daty ważności, tych nie mogę pilnować.",
 "Nem tudom, hol vagy: nincs GPS-helyzet, mentett pont vagy otthon-koordináta, ezért a napkeltét nem tudom kiszámolni.": "Nie wiem, gdzie jesteś: brak pozycji GPS, zapisanego punktu i współrzędnych domu, więc nie obliczę wschodu słońca.",
 "{nap}: ezen a helyen ma nincs napkelte vagy napnyugta.": "{nap}: w tym miejscu dziś nie ma wschodu ani zachodu słońca.",
 "{nap} ({honnan} alapján): napkelte {kelte}, napnyugta {nyugta}; világos még a polgári szürkület végéig, {szurk}. Hold: {hold}, {szaz}% megvilágítva. (Az app számolja, néhány perc pontossággal.)": "{nap} (według: {honnan}): wschód {kelte}, zachód {nyugta}; jasno do końca zmierzchu cywilnego, {szurk}. Księżyc: {hold}, oświetlony w {szaz}%. (Liczy aplikacja, z dokładnością do kilku minut.)",
 "újhold": "nów",
 "növekvő sarló": "przybywający sierp",
 "első negyed": "pierwsza kwadra",
 "növekvő hold": "przybywający księżyc",
 "fogyó hold": "ubywający księżyc",
 "utolsó negyed": "ostatnia kwadra",
 "fogyó sarló": "ubywający sierp",
 "Mit jegyezzek meg?": "Co mam zapamiętać?",
 "Megjegyeztem: {mit}": "Zapamiętałem: {mit}",
 "(A segéd beállításai › Rólam alatt látod és szerkesztheted.)": "(Widzisz i edytujesz to w Ustawienia asystenta › O mnie.)",
 "Megnyitás: Mi hiányzik?": "Otwórz: Czego brakuje?",
 "Megnyitás: Mit vigyek?": "Otwórz: Co zabrać?",
 "Útvonal a térképen: {nev}": "Trasa na mapie: {nev}",
 "Melyik turistautat nyissam meg?": "Który szlak mam otworzyć?",
 "{nev}: megnyitom a térképen.": "{nev}: otwieram na mapie.",
 "Itt vagyok. Miben segíthetek?": "Jestem tutaj. W czym mogę pomóc?",
 "Erről offline nem tudok megbízhatót mondani: sem a tudástár, sem a Biblia nem ír róla, és kitalálni nem fogok.": "Offline nie mogę powiedzieć o tym nic pewnego: nie pisze o tym ani baza wiedzy, ani Biblia, a zmyślać nie będę.",
 "Alaposabban is kerestem, de a Bibliában ({biblia}) erre nem találtam helyet: „{q}”.": "Szukałem też dokładniej, ale nie znalazłem w Biblii ({biblia}) miejsca na to: „{q}”.",
 "A Bibliában ({biblia}) erre nem találtam helyet: „{q}”.": "Nie znalazłem w Biblii ({biblia}) miejsca na to: „{q}”.",
 "Szó szerint nem így áll, de talán erre gondolsz:": "Dosłownie tak nie stoi, ale może masz na myśli to:",
 "Ez csak a telefonra telepített appban működik.": "To działa tylko w aplikacji zainstalowanej w telefonie.",
 "{nev} gondolkodik…": "{nev} myśli…",
 "Nem érhető el:": "Niedostępne:",
 "Előbb töltsd le a modellt: a fogaskerék alatt, „Modell letöltése”.": "Najpierw pobierz model: pod kołem zębatym, „Pobierz model”.",
 "A modell betöltése (első alkalommal 10-60 másodperc)…": "Ładowanie modelu (za pierwszym razem 10-60 sekund)…",
 "Nincs elég szabad hely a telefonon a modell első betöltéséhez (a letöltés méretének megfelelő hely kell).": "W telefonie brakuje wolnego miejsca na pierwsze załadowanie modelu (potrzeba tyle, ile wynosi pobieranie).",
 "Hiba:": "Błąd:",
 "A Bibliában itt van megírva (elöl az eredeti hely, utána, ahol idézik):": "W Biblii jest to napisane tutaj (najpierw miejsce pierwotne, potem gdzie jest cytowane):",
 "A gép {n} nem létező vagy hibás igehelyet írt, ezeket kivettük.": "Maszyna napisała {n} nieistniejących lub błędnych odnośników biblijnych; usunęliśmy je.",
 "Alaposabban kerestem.": "Szukałem dokładniej.",
 "A Bibliában ({biblia}), talán erre gondolsz:": "W Biblii ({biblia}), może masz na myśli to:",
 "A Bibliában ({biblia})": "W Biblii ({biblia})",
 "Forrás a tudástárból": "Źródło z bazy wiedzy",
 "Erről a prémium tudástár is ír: {lista}. (Zárolt cikk szövege nem kerül a modell elé.)": "Pisze o tym też baza wiedzy premium: {lista}. (Tekst zablokowanego artykułu nie trafia do modelu.)",
 "Megnyitás a térképen: {nev}": "Otwórz na mapie: {nev}",
 "A válaszban említett hely": "Miejsce wspomniane w odpowiedzi",
 "Szia, Noah vagyok, a PrepperPapa segédje.": "Cześć, jestem Noah, asystent PrepperPapa.",
 "Ezt tudom:": "To potrafię:",
 "• **Készlet:** megmondom, milyen készenléti szinten áll egy helyszíned, és mi hiányzik a következő szinthez; a számokat az app számolja a készletedből, nem én találom ki. Például: „Milyen készenléti szinten áll az otthon?”, „Mi hiányzik?”": "• **Zapasy:** mówię, na jakim poziomie gotowości jest Twoje miejsce i czego brakuje do następnego poziomu; liczby oblicza aplikacja z Twoich zapasów, nie wymyślam ich. Na przykład: „Jaki poziom gotowości ma dom?”, „Czego brakuje?”",
 "• **Út tervezése:** összerakok egy több napos utat a háztartásod tagjaiból, és kitöltve megnyitom a Mit vigyek? ablakban. Például: „Rakj össze egy 3 napos túrát 4 főre.”": "• **Planowanie wyjazdu:** zestawiam kilkudniowy wyjazd z członków Twojego gospodarstwa i otwieram go wypełniony w oknie Co zabrać?. Na przykład: „Zestaw 3-dniową wędrówkę dla 4 osób.”",
 "• **Útvonal:** a térképen megtervezem az útvonalat a mostani helyzetedből; a célt a saját pontjaid, a helyszíneid, a turistapontok és a települések között keresem, és ha több is illik, megkérdezem, melyikre gondolsz. A turistautakat név szerint is megnyitom a térképen. Például: „Hogyan jutok el a hétvégi házhoz?”, „Mutasd meg a térképen az E4-et.”": "• **Trasa:** planuję trasę na mapie z Twojej obecnej pozycji; cel szukam wśród Twoich punktów, miejsc, punktów turystycznych i miejscowości, a jeśli pasuje kilka, pytam, które masz na myśli. Szlaki otwieram też na mapie po nazwie. Na przykład: „Jak dojdę do domku letniskowego?”, „Pokaż E4 na mapie.”",
 "• **Tudástár:** a PrepperPapa tudástárából válaszolok, és megmutatom, melyik cikkből (rákoppintva megnyílik). Például: „Hogyan tisztítsak vizet, ha nincs forraló?”": "• **Baza wiedzy:** odpowiadam z bazy wiedzy PrepperPapa i pokazuję, z którego artykułu (dotknij, aby otworzyć). Na przykład: „Jak oczyścić wodę, jeśli nie mogę jej zagotować?”",
 "• **Megjegyzem,** amit magadról mondasz, és a beszélgetés utolsó öt kérdésére emlékszem. Például: „Jegyezd meg, hogy két kutyánk van.”": "• **Zapamiętuję,** co o sobie mówisz, i pamiętam pięć ostatnich pytań rozmowy. Na przykład: „Zapamiętaj, że mamy dwa psy.”",
 "• **Az app többi adata:** ismerem a háztartásodat (családtagok, háziállatok), a helyszíneidet és a mentett pontjaidat. A titkos kódokat, az Irattárcát és a Gíra kulcsait nem látom. Például: „Kik vannak a háztartásomban?”": "• **Pozostałe dane aplikacji:** znam Twoje gospodarstwo (członkowie rodziny, zwierzęta), Twoje miejsca i zapisane punkty. Nie widzę tajnych kodów, Portfela dokumentów ani kluczy Gíra. Na przykład: „Kto jest w moim gospodarstwie?”",
 "• Ha sem a tudástár, sem a Biblia nem ír a kérdésről, általános tudásból válaszolok, és ezt jelzem. Egészségről és veszélyről nem találgatok, útvonalat pedig fejből soha nem írok le: azt csak a térkép tervezője számolja.": "• Jeśli ani baza wiedzy, ani Biblia nie pisze o pytaniu, odpowiadam z wiedzy ogólnej i to zaznaczam. Nie zgaduję w sprawach zdrowia i zagrożenia, a trasy nigdy nie opisuję z pamięci: liczy ją tylko planer mapy.",
 "**Lelki segítség**": "**Wsparcie duchowe**",
 "Lelkileg is melletted vagyok: ha félsz, elfáradtál vagy gyászolsz, igét teszek a válasz mellé, és a Bibliában is keresek: megmutatom, hol van megírva valami, a helyre koppintva megnyílik. Az igeverset soha nem én írom: mindig a Károli-fordítás pontos szövegéből jön. Például: „Hol van megírva, hogy ne aggódjunk a holnapért?”": "Jestem przy Tobie także duchowo: jeśli się boisz, jesteś zmęczony lub w żałobie, dodaję werset do odpowiedzi, a także szukam w Biblii: pokazuję, gdzie coś jest napisane, a dotknięcie odnośnika go otwiera. Wersetu nigdy nie piszę sam: zawsze pochodzi z dokładnego tekstu przekładu Biblii w aplikacji. Na przykład: „Gdzie jest napisane, żebyśmy nie troszczyli się o jutro?”",
 "Internet nélkül működöm, itt futok a telefonodon. Amit kérdezel, amit válaszolok, és amit magadról megadsz, a telefonon marad: semmit nem küldök el sehova, akkor sem, ha van internet, kivéve, ha egy válaszomat te magad jelented a „Válasz jelentése” gombbal: akkor a kérdés és a válasz szövege a PrepperPapa csapatához kerül. Internet csak a nyelvi modell egyszeri letöltéséhez kell, és a térképhez, ha egy területét még nem töltötted le.": "Działam bez internetu, tutaj w Twoim telefonie. To, o co pytasz, co odpowiadam i co o sobie podajesz, zostaje w telefonie: niczego nigdzie nie wysyłam, nawet gdy jest internet, chyba że sam zgłosisz moją odpowiedź przyciskiem „Zgłoś tę odpowiedź”: wtedy pytanie i odpowiedź trafiają do zespołu PrepperPapa. Internet jest potrzebny tylko do jednorazowego pobrania modelu językowego oraz do mapy, jeśli nie pobrano jeszcze obszaru.",
 "Tévedhetek; életveszélyben a 112 az első.": "Mogę się mylić; w zagrożeniu życia najpierw dzwoń pod numer alarmowy."
});

// ===== 2026-10-26 v43.382 (task 6b287cfb-noah-nyelvek, Boss 2026-10-25 16:46): Noah settings sheet and measurement line =====
Object.assign(window.PP_FORD_SZOTAR.pl, {
 "A telefonon: {lista}.": "W telefonie: {lista}.",
 "kísérleti": "eksperymentalny",
 "Letöltés: {modell} {szaz}% ({kesz} / {ossz})": "Pobieranie: {modell} {szaz}% ({kesz} / {ossz})",
 "A letöltés nem sikerült:": "Pobieranie nie powiodło się:",
 "Nincs elég szabad hely a telefonon ehhez a modellhez.": "W telefonie nie ma wystarczająco wolnego miejsca na ten model.",
 "Nem indult el:": "Nie rozpoczęto:",
 "Törlöd, amit a Kérdezz rólad tud?": "Usunąć to, co Zapytaj wie o tobie?",
 "Törlöd a letöltött modellt? Újra le kell tölteni, ha később használnád.": "Usunąć pobrany model? Jeśli zechcesz go później użyć, trzeba będzie pobrać go ponownie.",
 "A Háztartásból: {lista}": "Z gospodarstwa domowego: {lista}",
 "A Háztartásban még nincs családtag.": "W gospodarstwie domowym nie ma jeszcze żadnego członka rodziny.",
 "ő a kérdező": "to on pyta",
 "betöltés {n} mp": "ładowanie {n} s",
 "első szó {n} mp": "pierwsze słowo {n} s",
 "{n} token/mp": "{n} tokenów/s",
 "memória csúcs {n} MB": "szczyt pamięci {n} MB"
});

// Bible settings tidy-up (owner 2026-10-26 17:50): short labels, one display block, one voice list
Object.assign(window.PP_FORD_SZOTAR.pl, {
 "Színes": "Kolorowe",
 "Egyszínű": "Jednokolorowe",
 "zöld árnyalatok": "odcienie zieleni",
 "Megjelenítés az igék mellett": "Wyświetlane przy wersetach",
 "Forrás: OpenBible.info (CC BY)": "Źródło: OpenBible.info (CC BY)",
 "A telefon hangja": "Głos telefonu",
 "Gépi hang · nem foglal helyet": "Głos syntetyczny · nie zajmuje miejsca",
 "Gépi felvétel · magyar": "Nagranie syntetyczne · węgierski",
 "Professzionális · magyar": "Profesjonalny · węgierski",
 "Professzionális · hamarosan": "Profesjonalny · wkrótce",
 "Készül": "W przygotowaniu",
 "Megszakítás": "Anuluj",
 "Letöltés": "Pobierz",
 "Törlés": "Usuń",
 "Letöltés internet nélkül": "Pobierz do użytku offline",
 "magyar": "węgierski",
 "Könyvenként": "Według ksiąg",
 "Mértékegységek": "Jednostki miar"
});

// Bible alarms on their own screen (owner 2026-10-26 17:54): several alarms, each with its own plan
Object.assign(window.PP_FORD_SZOTAR.pl, {
 "Ébresztő törlése": "Usuń budzik",
 "Új ébresztő": "Nowy budzik",
 "Válassz tervet": "Wybierz plan",
 "Törlöd ezt az ébresztőt?": "Usunąć ten budzik?",
 "Az ébresztő egy olvasási terv napi olvasmányát olvassa fel. Előbb indíts el egy tervet.": "Budzik odczytuje dzienne czytanie z planu czytania. Najpierw rozpocznij plan."
});
