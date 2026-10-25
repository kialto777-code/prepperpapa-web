// PrepperPapa -- ANGOL SZOVEGTAR (teljes felulet-forditas)
//
// Fonok kerese 2026-08-23: "a teljes alkalmazas nyelvi valtozatat is meg kell csinalni".
//
// A KULCS MAGA A MAGYAR SZOVEG, nem egy azonosito. Ket okbol:
//   1. a szoveg fele MENET KoZBEN keletkezik (kirajzolt listak, uzenetek), arra nem lehet
//      elore `data-i18n` jelolot tenni;
//   2. igy a szotar ONALLOAN olvashato: latszik, mit mire forditunk, es egy uj magyar
//      mondat hozzaadasa egy sor.
// A felulet-fordito (`ppSzovegForditas` az index.html-ben) a szoveg-csomopontokat jarja
// vegig, es a NORMALIZALT (osszevont szokozu) alakra keres.
//
// A LISTA FORRASA MERES, NEM TALALGATAS: `node scripts/pp-i18n-gyujtes.mjs` valodi
// bongeszoben vegigjarja mind a 24 kepernyot, es kigyujti, mire nem vonatkozik ma
// semmilyen forditasi szabaly. Ha uj szoveg kerul az appba, ujra kell futtatni.
//
// A `data-i18n` kulcsok (115 db) NEM ide tartoznak -- azok a `PP_SZOTAR`-ban vannak,
// es ez a fajl NEM irja felul oket (a fordito atlepi a mar megjelolt elemeket).
window.PP_FORD_SZOTAR = window.PP_FORD_SZOTAR || {};
window.PP_FORD_SZOTAR.en = {
  // ===== 2026-10-25 v43.377 (card 6b4458db, Boss 18:55): Local room help, step by step =====
  "Mire jó: a Helyi szoba internet nélkül köti össze a közeledben lévő telefonokat, ha egy Wi-Fi-n vagytok (vagy Bluetooth-on). Például áramszünetben, vagy otthon a családdal, amikor nincs térerő.": "What it is for: the Local room connects the phones near you without internet, when you are on one Wi-Fi (or on Bluetooth). For example in a power cut, or at home with the family when there is no signal.",
  "Szoba nyitása: az egyik telefonon a + gombbal nyiss egy új helyi szobát, és adj neki nevet. Ez a telefon lesz a gazda; amíg a szoba kell, az appja maradjon nyitva.": "Opening a room: on one phone open a new local room with the + button and give it a name. This phone becomes the host; keep its app open while the room is needed.",
  "Belépés a másik telefonról: kapcsolódj ugyanarra a Wi-Fi-re, nyisd meg a Helyi szobát, és koppints a listában megjelenő szobára. A gazda jóváhagyja a belépést; a szoba jelszava (kulcsa) titkosítja az üzeneteket, és minden telefonon ugyanannak kell lennie.": "Joining from the other phone: connect to the same Wi-Fi, open the Local room and tap the room that appears in the list. The host approves the entry; the room password (key) encrypts the messages and must be the same on every phone.",
  "A pontok: zöld = él a kapcsolat; piros = most nem éri el a gazdát. A listában a halvány szoba most nincs hatótávon.": "The dots: green = the connection is alive; red = the host cannot be reached right now. A faded room in the list is out of range now.",
  "Ha „a gazda nem érhető el”: nézd meg, hogy ugyanazon a Wi-Fi-n vagytok-e, és a gazdánál nyitva van-e az app; kapcsold ki a mobiladatot; vendég Wi-Fi-n a router elszigetelheti a készülékeket. Három sikertelen próba után az app ezt ki is írja, és újra keresi a gazdát.": "If \"the host cannot be reached\": check that you are on the same Wi-Fi and the app is open on the host's phone; switch mobile data off; on a guest Wi-Fi the router may isolate the devices. After three failed attempts the app says this too and looks for the host again.",
  // ===== 2026-10-25 v43.352 (idea #63, card 6b4458db): native volume guard =====
  "A telefonos appban ezen a lapon a hangerő magától maximumra áll, és kilépéskor visszaáll a korábbira. A hang a telefon hangszóróján szól akkor is, ha fülhallgató vagy Bluetooth-eszköz csatlakozik.": "In the phone app the volume goes to maximum by itself on this screen, and returns to the previous level when you leave. The sound plays from the phone speaker even when headphones or a Bluetooth device are connected.",
  // ===== 2026-10-19 v43.313 (card 6b4458db) =====
  "(sérült üzenet — egy 2026. 10. 12. előtti szerverhiba levágta, nem állítható helyre)": "(damaged message — cut off by a server fault before 12 Oct 2026, cannot be restored)",
  "Ezen a készüléken a böngésző nem támogatja a rezgést (iPhone-on a Safari nem tudja). A kapcsoló ezért nem aktív.": "This device's browser does not support vibration (Safari on iPhone cannot do it). The switch is therefore inactive.",
  "Bejelentéseim": "My reports",
  "Újdonságok": "What's new",
  "Facebook-csoport": "Facebook group",
  "Facebook-oldal": "Facebook page",
  // ===== 2026-10-19: sugo-szovegek a kepernyokhoz igazitva (kartya eaaba276, Fonok 1a) =====
  "A gyűrű a jelen lévő típusok átlagát mutatja, a színe a leggyengébbet. A sávokon látod, melyik terület gyenge: egy alacsony érték az átlag mögött is ott lehet.": "The ring shows the average of the types present, and its colour shows the weakest one. The bars show which area is weak: a low value can hide behind the average.",
  "Nyelv: az app felületének nyelve. A tartalom (tudástár, Biblia) egyelőre nem változik tőle; a Biblia fordítását a Biblia fejlécében választod.": "Language: the language of the app interface. The content (knowledge base, Bible) does not change with it yet; you choose the Bible translation in the Bible header.",
  "Fény-SOS képernyővel: a kijelző villogtatja a jelet. Ez minden telefonon megy, akkor is, ha a vaku nem indul.": "Light SOS with the screen: the display flashes the signal. This works on every phone, even if the flash does not start.",
  "Esés után automatikus SOS: alapból ki van kapcsolva. Ha bekapcsolod, és a telefon nagy ütés után egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a Jól vagyok gombot, SOS üzenetet küld a helyzeteddel minden szobádba, és megszólal a vészsíp.": "Automatic SOS after a fall: it is off by default. If you turn it on and the phone does not move for a minute after a hard impact, it counts down out loud. If you do not press the I'm OK button, it sends an SOS message with your location to all your rooms, and the emergency whistle sounds.",
  "Export: a lista fájlba, például a családnak. A teljes készlet törlése (Készlet ürítése) a Beállítások > Adatkezelés alatt van; előtte exportálj.": "Export: the list into a file, for the family for example. Deleting the whole inventory (Clear inventory) is under Settings > Data; export first.",
  // ===== 2026-10-11 23:4x: teljes atnezes (bemutatkozas, visszajelzes, hianyzo feliratok) =====
  "Üdv Prepperek!": "Greetings, Preppers!",
  "PrepperPapa vagyok, egy készülődő ember, aki mindenhez érteni szeret. Gyerekkorom óta vonz minden, ami hálózattól és rendszertől független, és az az érzés, amikor arra számíthatsz, ami a fejedben van tudás, és ami nálad van eszköz.": "I am PrepperPapa, a man who prepares and loves to understand everything. Since childhood I have been drawn to everything that is independent of the grid and the system, and to the feeling of being able to rely on the knowledge in your head and the tools in your hands.",
  "A prepperekről sokan hideg, bezárkózó embereket képzelnek el. Én azt hiszem, hogy a felkészülést nem a félelemnek kell vezetnie, hanem az önfeláldozó szeretetnek.": "Many imagine preppers as cold, withdrawn people. I believe that preparing should be driven not by fear, but by self-giving love.",
  "Ezért álmodtam meg ezt az alkalmazást: hogy mindenkinek reménysége legyen a sötétségben, és a nehéz időkben valódi eszköz, valódi segítség legyen a kezében, akkor is, ha nincs áram és nincs térerő.": "That is why I dreamed up this app: so that everyone has hope in the darkness, and in hard times a real tool, real help in their hands, even when there is no power and no signal.",
  "Készülj, ne félj!": "Prepare, do not fear!",
  "Erőt reménységet!": "Strength and hope!",
  "Hibát találtál, vagy ötleted van?": "Found a bug, or have an idea?",
  "Írd meg, és ha kell, csatolj képet. Minden visszajelzést elolvasunk.": "Write to us, and attach a picture if needed. We read every message.",
  "Visszajelzés küldése": "Send feedback",
  "a sajátod, pl. +36 30 123 4567": "your own, e.g. +36 30 123 4567",
  "Küldetést kaptam: a tíz szűz példázatát, hogy fel kell készülni. Az eszesek éjfélkor nem tudtak a saját olajukból adni": "I received a mission: the parable of the ten virgins, that we must be prepared. At midnight the wise could not give from their own oil",
  "Máté 25,9": "Matthew 25:9",
  ", ezért a tudást időben kell átadni.": ", so knowledge has to be passed on in time.",
  "A csomagod felhasználó-korlátja betelt:": "Your plan's user limit is reached:",
  "A csomagod termék-korlátja betelt:": "Your plan's item limit is reached:",
  "A felolvasás nem indult el: a telefonon nincs ehhez a nyelvhez felolvasó hang (Beállítások → Szövegfelolvasás).": "Reading aloud did not start: the phone has no voice for this language (Settings → Text-to-speech).",
  "A kamerát nem sikerült elindítani. Adj rá engedélyt a telefon beállításaiban.": "The camera could not be started. Allow it in the phone's settings.",
  "A mentős beolvashatja.": "Paramedics can scan it.",
  "A próba-csomag beállítva.": "Trial plan set.",
  "Bővíts a Beállításokban, vagy törölj egy tagot.": "Upgrade in Settings, or delete a member.",
  "Bővíts a Beállításokban, vagy törölj egy tételt.": "Upgrade in Settings, or delete an item.",
  "Felhasználók": "Users",
  "Fizetek": "I pay",
  "Gyorsabb": "Faster",
  "Hiányzik:": "Missing:",
  "Lassabb": "Slower",
  "Megnézem térképen": "Show on map",
  "Modulok": "Modules",
  "Nincs internet: a telefon hangja olvas": "No internet: the phone's voice is reading",
  "Próba-mód kikapcsolva, a valódi feloldásod áll vissza.": "Trial mode off, your real unlock is restored.",
  "Szünet": "Pause",
  "Termékek": "Items",
  "Teszt-adatok betöltve: 3 fő, 1 háziállat, 5 helyszín (köztük autó és hétvégi ház),": "Test data loaded: 3 people, 1 pet, 5 places (including a car and a weekend house),",
  "Vissza az igéhez": "Back to the verse",
  "Vészkártyák": "Emergency cards",
  "adat frissítve a már felvett teszt-tagoknál": "data updated for the test members already added",
  "egy sincs": "none",
  "korlátlan": "unlimited",
  "légvonalban": "as the crow flies",
  "légvonalban, szakaszonként összeadva": "as the crow flies, added up leg by leg",
  "megálló": "stop",
  "mérés az elmúlt 48 órából. A telefon légnyomás-szenzora automatikusan méri; kézzel is bevihetsz értéket.": "readings from the last 48 hours. The phone's pressure sensor measures automatically; you can also enter values by hand.",
  "nincs ismert": "none known",
  "nincs megadva": "not set",
  "válassz könyvet": "choose a book",
  "összesen": "in total",
  "A többiek a „Szobák a hálón\" listában magától látják a szobát. Ha valakinél mégsem jelenik meg, ezt a címet írja be a „Csatlakozás más szobájához\" gombbal.": "Others see the room automatically in the \"Rooms on the network\" list. If it does not appear for someone, they can enter this address with the \"Join someone else's room\" button.",
  "Másik cím": "Other address",
  "A szoba címe": "Room address",
  "Vissza a saját szobámba": "Back to my own room",
  "Fénykép": "Photo",
  "Jóváírva.": "Credited.",
  "küldött neked": "sent you",
  "Gíra küldése neki": "Send gíra to them",
  // ===== 2026-10-11 22:3x: gira-kozosseg a gazda dontese =====
  "A szoba gazdája Gíra-közösségnek jelölte: a telefonod magától részt vesz.": "The room admin marked it as a Gíra community: your phone takes part automatically.",
  "Ezt a szoba gazdája kapcsolja be; még nem jelölte Gíra-közösségnek.": "The room admin switches this on; it is not marked as a Gíra community yet.",
  "Bekapcsolva a szoba minden tagjának. Átküldöm a Gíra-könyvet…": "Switched on for every member of the room. Sending the Gíra book…",
  "Kikapcsolva a szoba minden tagjának.": "Switched off for every member of the room.",
  "A szoba gazdája kapcsolja be; ilyenkor minden tag telefonja magától átküldi ide a Gíra-könyvét, és innen fogadja a többiekét. A szoba minden tagja látja a gíra-mozgásokat.": "The room admin switches it on; then every member's phone sends its Gíra book here automatically and receives the others'. Every member of the room sees the gíra movements.",
  // ===== 2026-10-11 22:2x: LoRa a radio-kalkulatorban =====
  "LoRa (868 MHz) — engedély nélküli adatrádió": "LoRa (868 MHz) — licence-free data radio",
  "Engedély nélkül használható: alapból 25 mW, a 869,4-869,65 MHz-es alsávon 500 mW, korlátozott adásidővel. Nem beszéd, hanem rövid szöveges üzenet; cserébe kis teljesítménnyel is kilométereket visz, mert a zaj alatt is vesz. A telefon nem tud LoRát: egy LoRa-egység kell, amihez a telefon Bluetooth-on csatlakozik.": "Licence-free: 25 mW by default, 500 mW on the 869.4-869.65 MHz sub-band, with limited airtime. Not voice, but short text messages; in return it covers kilometres with little power, because it receives below the noise. Phones have no LoRa: you need a LoRa unit that the phone connects to over Bluetooth.",
  // ===== 2026-10-11 21:4x: gira minusz-hatar =====
  "ennyit fizethetsz most": "you can pay now",
  "Ez túllépné a mínusz-határodat.": "This would exceed your minus limit.",
  "Most legfeljebb ennyit fizethetsz:": "The most you can pay now:",
  "határ": "limit",
  "Mínuszba mehetsz": "You can go down to",
  "gíráig": "gíra",
  "most ennyit fizethetsz": "payable now",
  // ===== 2026-10-11 21:3x: gira-egyenleg az urlapon =====
  "Egyenleged": "Your balance",
  "a gíra nem mehet mínuszba, ezért fizetni akkor tudsz, ha előbb kapsz valakitől.": "gíra cannot go negative, so you can pay once someone has paid you first.",
  "Ennyi gírád nincs. Egyenleged:": "You do not have that much gíra. Your balance:",
  "A gíra nem mehet mínuszba: előbb kapnod kell valakitől.": "Gíra cannot go negative: someone has to pay you first.",
  // ===== 2026-10-11 21:3x: legnyomas-kartya, mozgas-szures =====
  "Járműben vagy (a GPS szerint 15 km/h felett): a riasztás szünetel, mert ilyenkor a nyomás az emelkedőtől és a szellőzéstől is változik.": "You are in a vehicle (over 15 km/h by GPS): the alarm is paused, because the pressure then also changes with hills and ventilation.",
  "Magasság-korrekcióval: közben": "Altitude-corrected: meanwhile",
  "volt a szintkülönbség, a mért nyers változás": "height difference, the raw measured change was",
  "Szenzor, előzmény, tudnivalók": "Sensor, history, notes",
  // ===== 2026-10-11 21:0x: szintarcsa, 24 oras napiv, allo tajolo, felolvaso-ertesites =====
  "Válassz színt a tárcsán": "Pick a colour on the wheel",
  "Fényerő": "Brightness",
  "Kiválasztom": "Select",
  "napkelte": "sunrise",
  "napnyugta": "sunset",
  "éjközép": "midnight",
  "Nappal": "Daylight",
  "Éjszaka": "Night",
  "Biblia felolvasás": "Bible reading",
  "Jó irány": "On course",
  "Fordulj jobbra": "Turn right",
  "Fordulj balra": "Turn left",
  "Fordulj a kívánt irányba, és nyomd meg: Irány felvétele.": "Face the direction you want and press: Record direction.",
  "Állítsd fel a telefont: álló módban a hátsó kamera irányát mérjük, fektetve ez nem pontos.": "Hold the phone upright: in upright mode we measure where the back camera points; lying flat this is not accurate.",
  "Álló mód: a hátsó kamera iránya számít. A keret zöld, ha a felvett irányba nézel, és piros, ha nem.": "Upright mode: the back camera direction counts. The frame is green when you face the recorded direction, red when you do not.",
  "Vízszintes": "Flat",
  "Álló": "Upright",
  "Kamera a háttérben": "Camera in background",
  "A hátsó kamera képe a tájoló mögött, hogy lásd, merre mutat.": "The back camera image behind the compass, so you see where it points.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Privát üzenet neki":
    "Private message to them",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "még nincs Gíra-azonosítója":
    "no Gíra ID yet",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Elküldve a szobán keresztül":
    "Sent through the room",
  "Nála magától jóváíródik, és a nyugtája is magától visszajön.":
    "It is credited on their side automatically, and their receipt comes back automatically too.",
  "A szobába most nem ment el (nincs kapcsolat vagy kulcs). Itt a QR, ezzel is átadhatod.":
    "Could not send to the room right now (no connection or key). Here is the QR, you can hand it over with this too.",
  "Gíra-fizetés":
    "Gíra payment",
  "hamis aláírás, nem fogadom el":
    "bad signature, not accepted",
  "jóváírva nálad":
    "credited to you",
  "Szobatársat választhatsz, ha egy Gíra-közösség szobában ők is bekapcsolták.":
    "You can pick a room mate if they also turned it on in a Gíra community room.",
  "Szobatárs kiválasztása…":
    "Choose a room mate…",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Helyek":
    "Places",
  "a határok közelítők":
    "borders are approximate",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Gíra-közösség":
    "Gíra community",
  "A telefon ebbe a szobába magától átküldi a Gíra-könyvedet, és innen fogadja a többiekét. A szoba minden tagja látja a gíra-mozgásokat.":
    "The phone automatically sends your Gíra ledger to this room and receives the others' from here. Every member of the room sees the Gíra transactions.",
  "Gíra-közösségnek jelölt szobák":
    "Rooms marked as Gíra community",
  "A szoba beállításaiban kapcsolhatod be („Gíra-közösség”); oda a telefon magától átküldi a könyvet.":
    "Turn it on in a room's settings (“Gíra community”); the phone sends the ledger there automatically.",
  "Utoljára egyeztetve":
    "Last synced",
  "Egyeztetés most":
    "Sync now",
  "szoba":
    "room(s)",
  "Nincs elérhető Gíra-közösség szoba. Kapcsold be egy szoba beállításaiban.":
    "No reachable Gíra community room. Turn it on in a room's settings.",
  "Bekapcsolva. Átküldöm a Gíra-könyvet…":
    "On. Sending the Gíra ledger…",
  "Kikapcsolva. Ide többé nem küldöm a könyvet.":
    "Off. The ledger will no longer be sent here.",
  "Bekapcsolva, a könyv átment.":
    "On, the ledger went through.",
  "Bekapcsolva. A könyv akkor megy át, amikor a szoba elérhető és van aláírt tételed.":
    "On. The ledger will go through when the room is reachable and you have signed records.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Titkos kódok":
    "Secret codes",
  "Kérek":
    "Request",
  "Beolvasás":
    "Scan",
  "Azonosítóm":
    "My ID",
  "Nincs kamera? Beillesztés szövegből":
    "No camera? Paste from text",
  "Mozgások":
    "Transactions",
  "Zárolás":
    "Lock",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Apokrif könyvek":
    "Apocryphal books",
  "Énok ↓":
    "Enoch ↓",
  "Énok könyve letöltése":
    "Download the Book of Enoch",
  "Nem sikerült, próbáld újra":
    "Failed, try again",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "SÜRGŐS ·":
    "URGENT ·",
  "Nincs találat erre:":
    "No results for:",
  "3 nappal":
    "3 days",
  "Megnézem":
    "Take a look",
  "Összes kategória":
    "All categories",
  "(te)":
    "(you)",
  "ENGEDÉLYKÖTELES, mint a 2 méter. Beépítésben, épületek között jobb, mint a 2 méter; nyílt terepen rosszabb.":
    "LICENSE REQUIRED, like 2 metres. Inside built-up areas, between buildings, it works better than 2 metres; in open terrain, worse.",
  "Írd be az e-mail címed. Küldünk rá egy 6 jegyű kódot; ha beírod, bent vagy. Jelszó nem kell, a telefon megjegyzi a belépést.":
    "Enter your e-mail address. We send a 6-digit code to it; once you type it in, you are in. No password needed, the phone remembers the login.",
  "Add meg az e-mail címed és az ÚJ jelszót kétszer. Küldünk egy kódot e-mailben; ha beírod, az új jelszó lép életbe.":
    "Enter your e-mail address and the NEW password twice. We send a code by e-mail; once you type it in, the new password takes effect.",
  "Bekapcsolva, de a bezárt appos értesítés regisztrálása most nem sikerült; amíg az app fut, jelez.":
    "Turned on, but registering notifications for when the app is closed failed just now; while the app is running, it will alert you.",
  "Alul írod az üzenetet; a papírrepülő gomb küldi el a szoba minden tagjának.":
    "Type your message at the bottom; the paper plane button sends it to every member of the room.",
  "Az értesítés le van tiltva. A telefon Beállítások > Alkalmazások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Notifications are blocked. You can allow them again in the phone's Settings > Apps > PrepperPapa > Notifications.",
  "Az értesítés le van tiltva. A telefon Beállítások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Notifications are blocked. You can allow them again in the phone's Settings > PrepperPapa > Notifications.",
  "Letiltva. A telefon Beállítások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Blocked. You can allow it again in the phone's Settings > PrepperPapa > Notifications.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Kép csatolása":
    "Attach image",
  "Új helyi szoba":
    "New local room",
  "Nincs internetkapcsolat.":
    "No internet connection.",
  "Visszajelzés":
    "Feedback",
  "Saját vészkártya adatai":
    "My emergency card details",
  "Nem ez volt.":
    "That wasn't it.",
  "Eredmény":
    "Result",
  "E-mail cím":
    "Email address",
  "helyi háló, internet nélkül":
    "local network, no internet",
  "Forgatás balra":
    "Rotate left",
  "Forgatás jobbra":
    "Rotate right",
  "Saját telefonszám":
    "My phone number",
  "Térképről":
    "From map",
  "Koppints a másoláshoz":
    "Tap to copy",
  "Belépés e-mail címmel":
    "Sign in with email",
  "A szoba kódja, koppints a másoláshoz":
    "Room code, tap to copy",
  "A jel nem vált pont és vonás között. Ez nem tiszta Morze — állíts a vételen, és próbáld újra.":
    "The signal doesn't switch between dot and dash. This isn't clean Morse — adjust the receiver and try again.",
  "Ez nagyjából":
    "That's roughly",
  "18650 (a gyártó saját cellája kb. 3400 mAh)":
    "18650 (the manufacturer's own cell is approx. 3400 mAh)",
  "kWh hőigénnyel, összesen":
    "kWh heat demand, in total",
  "Állj":
    "Stop",
  "Kód küldése e-mailben":
    "Send code by email",
  "Add meg az e-mail címed.":
    "Enter your email address.",
  "Ez nem tűnik e-mail címnek.":
    "That doesn't look like an email address.",
  "Nem sikerült, próbáld újra.":
    "That didn't work, try again.",
  "nincs bejelentkezve":
    "not signed in",
  "Kikapcsolva ezen az eszközön.":
    "Turned off on this device.",
  "Kicsinyítem...":
    "Shrinking...",
  "Kép törölve.":
    "Image deleted.",
  "Ezt a képet nem tudom megnyitni.":
    "I can't open this image.",
  "Frissítés keresése":
    "Check for updates",
  "Normál":
    "Normal",
  "Ki vagyok?":
    "Who am I?",
  "2018 óta készítek videókat PrepperPapa néven a felkészülésről. Hiszem, hogy a keresztény értékek és a jó gyakorlati eszközök együtt segítenek abban, hogy könnyebben vegyük a mindennapok kihívásait, ezért a célom az, hogy fényt hozzak az életedbe, lelkiekben és a szó szoros értelmében is.":
    "I've been making videos about preparedness under the name PrepperPapa since 2018. I believe that Christian values and good practical tools together help us cope more easily with everyday challenges, so my goal is to bring light into your life, both spiritually and in the literal sense of the word.",
  "Lámpákat, késeket, táskákat és energiaforrásokat tesztelek valós használatban, és ha valami nem vált be, azt is elmondom. Nem világvége-hangulatot árulok, hanem azt a néhány dolgot mutatom meg, ami egy áramszünetben, egy viharban vagy egy túrán tényleg számít.":
    "I test lights, knives, bags and power sources in real use, and if something doesn't hold up, I say so too. I'm not selling doomsday gloom; I show the few things that really matter during a power cut, a storm or a hike.",
  "Felkészülés józan ésszel, magyar valóságra.":
    "Preparedness with common sense, for Hungarian reality.",
  "Elérhetőségek":
    "Contact",
  "Prepper Vészkijárat csoport":
    "Prepper Vészkijárat group",
  "Gyülekező fórum":
    "Gyülekező forum",
  "Melyik betű?":
    "Which letter?",
  "Mi hiányzik?":
    "What's missing?",
  "Az adat a Háztartásból jön, személyenként: vércsoport, allergia, gyógyszer, betegség, a saját telefonszám és a vészhelyzeti kontakt (név és telefon). Akinél még nincs kontakt megadva, ott a saját kártyád kontaktját használjuk.":
    "The data comes from Household, per person: blood type, allergies, medication, illnesses, their own phone number and the emergency contact (name and phone). Where no contact has been set yet, we use the contact from your own card.",
  "Vészhelyzeti kontakt – ki?":
    "Emergency contact – who?",
  "anya, apa, szomszéd…":
    "mother, father, neighbour…",
  "Vészhelyzeti kontakt – telefon":
    "Emergency contact – phone",
  "A jegyzet neve":
    "Note name",
  "Értesítések":
    "Notifications",
  "Lejáró élelmiszer és készlet":
    "Expiring food and supplies",
  "Mennyivel előre szóljon:":
    "How far in advance to notify:",
  "1 héttel":
    "1 week",
  "2 héttel":
    "2 weeks",
  "1 hónappal":
    "1 month",
  "Próbaértesítés":
    "Test notification",
  "Rezgő visszajelzés":
    "Haptic feedback",
  "Rövid rezgés a gombok megnyomásakor":
    "Short vibration when pressing buttons",
  "A készülék rövid koppanással jelez minden gombnyomást.":
    "The device signals every button press with a short tap.",
  "Készlet ürítése":
    "Clear stock",
  "Fejlesztői próba-mód":
    "Developer test mode",
  "Teszt funkció: beállíthatsz egy fizetős csomagot, és az app úgy viselkedik, mintha azt vásárolták volna meg. Csak ezen a készüléken, csak a felületen. A valódi feloldásaid megmaradnak, kikapcsolva visszaáll minden.":
    "Test feature: you can set a paid plan, and the app behaves as if it had been purchased. Only on this device, only in the interface. Your real unlocks are kept; turning it off restores everything.",
  "Próba-mód bekapcsolása":
    "Turn on test mode",
  "Felhasználó-korlát":
    "User limit",
  "Termék-korlát":
    "Item limit",
  "A 0 korlátlant jelent.":
    "0 means unlimited.",
  "Beállítás":
    "Set",
  "Próba-mód ki":
    "Test mode off",
  "Vészhelyzeti kontakt neve":
    "Emergency contact name",
  "pl. anya, apa, szomszéd":
    "e.g. mother, father, neighbour",
  "Vészhelyzeti kontakt telefonszáma":
    "Emergency contact phone number",
  "Koordináta térképről":
    "Coordinates from map",
  "· vagy egy bemásolt Google Térkép-link. Ha nem tudom értelmezni, szólok — üresen nem mentem el. Vagy nyomd meg a":
    "· or a pasted Google Maps link. If I can't interpret it, I'll tell you — I won't save it empty. Or press the",
  "gombot, és húzd a térképet a célkereszt alá.":
    "button and drag the map under the crosshair.",
  "Koordináta a térképről":
    "Coordinates from the map",
  "Ezt választom":
    "Choose this",
  "MESH-hálózat: szöveg a közeledben lévőknek, internet nélkül":
    "MESH network: text to people near you, without internet",
  "Internet és térerő nélkül: közös Wi-Fi-n, hotspoton vagy Bluetooth-on. Itt látod a saját szobáidat és a közelben hallottakat.":
    "Without internet or signal: over shared Wi-Fi, hotspot or Bluetooth. Here you see your own rooms and the ones heard nearby.",
  "Csatlakozás címmel":
    "Join by address",
  "Ez látszik a szobák listáján, ezen ismerik fel. A telefonod a képet magától lekicsinyíti.":
    "This shows in the room list; it's how people recognise it. Your phone shrinks the image automatically.",
  "Fiók":
    "Account",
  "Jelszó megváltoztatása":
    "Change password",
  "Kép a szobához (nem kötelező)":
    "Room image (optional)",
  "Mérés fut… tartsd a jelen,":
    "Measuring… keep sending the signal for",
  "másodperc.":
    "seconds.",
  "Kevés jel érkezett. Indítsd újra, és nézd meg, hogy a vétel egyáltalán lát-e jelet.":
    "Too little signal arrived. Restart, and check whether the receiver sees any signal at all.",
  "mért arány":
    "measured ratio",
  "Mért sebesség":
    "Measured speed",
  "Beállítom":
    "Set it",
  "A vétel sebessége beállítva":
    "Receive speed set",
  "Figyelj: lekopogom a betűt. Előbb a sor, aztán az oszlop.":
    "Listen: I'll tap out the letter. First the row, then the column.",
  "Kopogd le ezt a betűt":
    "Tap out this letter",
  "Írd be, melyik betűt hallottad.":
    "Type which letter you heard.",
  "Írd le, mit hallottál, aztán nyomd meg az Ellenőrzést.":
    "Write down what you heard, then press Check.",
  "Saját telefon:":
    "My phone:",
  "Ez a cikk zárt: a bővített tudástár nincs feloldva ezen a készüléken.":
    "This article is locked: the extended knowledge base is not unlocked on this device.",
  "Előbb írd be a szöveget a mezőbe, aztán koppints a lapra.":
    "First type the text in the field, then tap the page.",
  "T Szöveg":
    "T Text",
  "Eldobod a rajzot?":
    "Discard the drawing?",
  "Új lapot kezdesz? A mostani rajz elvész.":
    "Start a new page? The current drawing will be lost.",
  "Adj nevet a jegyzetnek.":
    "Give the note a name.",
  "Wh tárolt energia":
    "Wh stored energy",
  "saját megadás":
    "custom value",
  "A megadott wattórából 10 százalékot levonunk átalakítási veszteségre.":
    "We deduct 10 percent of the given watt-hours for conversion loss.",
  "A savas akkut csak félig szabad lemeríteni, különben tönkremegy, és az átalakító is elvisz 15 százalékot. Ezért a névlegesnek nagyjából 42 százalékával számolunk.":
    "A lead-acid battery may only be discharged halfway, otherwise it gets ruined, and the inverter also takes 15 percent. So we count with roughly 42 percent of the nominal capacity.",
  "A LiFePO4-et 80 százalékig le lehet meríteni (a savasat csak felére), az átalakító 10 százalékot visz.":
    "LiFePO4 can be discharged to 80 percent (lead-acid only to half), the inverter takes 10 percent.",
  "A tárolt energiából kb. 10 százalékot elvisz az átalakítás, ezért nem a teljes wattóra használható fel.":
    "Conversion takes about 10 percent of the stored energy, so not all the watt-hours are usable.",
  "saját eszköz":
    "custom device",
  "Tölts ki legalább egy sort: hány darab, hány watt, hány óra naponta.":
    "Fill in at least one row: how many, how many watts, how many hours a day.",
  "Nem fogy el":
    "Never runs out",
  "Ez nem fér el egyszerre. A felsorolt fogyasztók együtt":
    "This won't fit at the same time. The listed devices together draw",
  "wattot kérnek, a gép":
    "watts, the unit",
  "Nem attól múlik, hogy mekkora a wattórája — ennyit egyszerre nem bír.":
    "It's not about its watt-hours — it simply can't handle that much at once.",
  "Vagy nagyobb teljesítményű gép kell, vagy nem egyszerre kell működtetni őket.":
    "Either you need a more powerful unit, or don't run them at the same time.",
  "Az indulási áram kiviheti. A folyamatos fogyasztás belefér,":
    "The startup current may trip it. Continuous consumption fits,",
  "de a motoros készülék induláskor kb.":
    "but the motorised device draws approx.",
  "wattot húz pár másodpercig,":
    "watts for a few seconds at startup,",
  "a gép":
    "the unit",
  "wattos. Ilyenkor a gép lekapcsol, pedig „papíron belefért volna\".":
    "watts. In that case the unit shuts off, even though \"on paper it fit\".",
  "Wh valóban felhasználható energia kell":
    "Wh of actually usable energy is needed",
  "(névlegesen kb.":
    "(nominally approx.",
  "Wh, a veszteség miatt).":
    "Wh, due to losses).",
  "A választott gép ezt tudja.":
    "The selected unit can do this.",
  "A választott gép ehhez kevés.":
    "The selected unit is not enough for this.",
  "Ezek elegendők lennének erre a listára:":
    "These would be enough for this list:",
  "A napelem naponta":
    "The solar panel gives",
  "wattórával többet ad, mint amennyit elhasználsz. Ez így önfenntartó — de csak amíg süt: két borús nap":
    "watt-hours more per day than you use. That makes it self-sustaining — but only while the sun shines: two cloudy days would take",
  "wattórát vinne el a tartalékból.":
    "watt-hours from the reserve.",
  "ezzel a listával.":
    "with this list.",
  "Napi fogyasztás:":
    "Daily consumption:",
  "| csúcsterhelés:":
    "| peak load:",
  "(a gép":
    "(the unit's",
  "Wh névlegesből":
    "Wh nominal gives",
  "Wh a valóban felhasználható.":
    "Wh actually usable.",
  "A napelem:":
    "Solar panel:",
  "napfényórának felel meg, tehát napi kb.":
    "sun hours, so approx.",
  "Wh jön be. A névleges teljesítmény 70 százalékával számolunk:":
    "Wh comes in per day. We count with 70 percent of the nominal power:",
  "az állásszög, a hő és a töltésvezérlő mind levesz belőle.":
    "tilt angle, heat and the charge controller all take a share.",
  "teletöltése ilyen időben":
    "full charge in this weather",
  "Saját / kézi megadás (bármilyen lámpa)":
    "Custom / manual entry (any light)",
  "NEXTORCH eStar (fejlámpa, max. 1300 lm)":
    "NEXTORCH eStar (headlamp, max. 1300 lm)",
  "2× 1200 mAh (2400 mAh összesen)":
    "2× 1200 mAh (2400 mAh in total)",
  "NEXTORCH myStar V2.0 (fejlámpa, max. 760 lm)":
    "NEXTORCH myStar V2.0 (headlamp, max. 760 lm)",
  "NEXTORCH iStar (fejlámpa, max. 450 lm)":
    "NEXTORCH iStar (headlamp, max. 450 lm)",
  "Piros villogó":
    "Red flashing",
  "NEXTORCH MAX STAR (fejlámpa, max. 1200 lm)":
    "NEXTORCH MAX STAR (headlamp, max. 1200 lm)",
  "NEXTORCH oStar (sisak-/fejlámpa, max. 500 lm)":
    "NEXTORCH oStar (helmet/headlamp, max. 500 lm)",
  "Decathlon Quechua HL50 (fejlámpa, 50 lm)":
    "Decathlon Quechua HL50 (headlamp, 50 lm)",
  "Decathlon Ontrail 900 (fejlámpa terepfutáshoz)":
    "Decathlon Ontrail 900 (trail-running headlamp)",
  "Boost, 900→350 lm (túlmelegedés ellen csökken)":
    "Boost, 900→350 lm (steps down to prevent overheating)",
  "Erős, 300 lm, állandó fényerő":
    "High, 300 lm, constant brightness",
  "Decathlon Caperlan Moonlight 500 (horgász fejlámpa)":
    "Decathlon Caperlan Moonlight 500 (fishing headlamp)",
  "Horgászat, 80 lm":
    "Fishing, 80 lm",
  "Optimál, 200 lm":
    "Optimal, 200 lm",
  "UV mód":
    "UV mode",
  "Decathlon Forclaz ONNight 300 (fejlámpa túrázáshoz)":
    "Decathlon Forclaz ONNight 300 (hiking headlamp)",
  "Környezeti fény":
    "Ambient light",
  "Erős, 130 lm":
    "High, 130 lm",
  "Saját megadás (mA)":
    "Custom value (mA)",
  "Kis 5 mm-es LED (jelzőfény-szerű, gyenge)":
    "Small 5 mm LED (indicator-type, weak)",
  "~1 W teljesítmény-LED (pl. Cree XP-E)":
    "~1 W power LED (e.g. Cree XP-E)",
  "~3 W teljesítmény-LED (pl. Cree XP-G, Osram)":
    "~3 W power LED (e.g. Cree XP-G, Osram)",
  "~5 W teljesítmény-LED (erős fejlámpa/zseblámpa)":
    "~5 W power LED (strong headlamp/flashlight)",
  "COB LED-sáv (kempinglámpa)":
    "COB LED strip (camping lantern)",
  "Saját megadás (mAh)":
    "Custom value (mAh)",
  "AA alkáli elem (~2500 mAh)":
    "AA alkaline battery (~2500 mAh)",
  "AA NiMH tölthető akku (~2000 mAh)":
    "AA NiMH rechargeable (~2000 mAh)",
  "AAA alkáli elem (~1000 mAh)":
    "AAA alkaline battery (~1000 mAh)",
  "— a gyártó szerint":
    "— according to the manufacturer",
  "— a gyártó saját, mért adata":
    "— the manufacturer's own measured data",
  "Add meg az akku kapacitását és a LED áramfelvételét is.":
    "Enter both the battery capacity and the LED current draw.",
  "mAh névleges kapacitásból":
    "mAh nominal capacity gives",
  "mAh a valóban felhasználható (a merítési és driver-veszteség miatt 15 százalékot levonva),":
    "mAh actually usable (minus 15 percent for discharge and driver losses),",
  "mA folyamatos áramfelvétel mellett.":
    "mA continuous current draw.",
  "Rejtőzködés, fekvés, olvasás. Ennyivel nem hízol és nem is fogysz gyorsan, de a fejed tiszta marad.":
    "Hiding, lying down, reading. You won't gain or lose weight fast on this, but your head stays clear.",
  "Járkálás, ház körüli teendők. Ez a nemzetközi vészhelyzeti tervezés alapszáma is.":
    "Walking around, chores around the house. This is also the baseline figure of international emergency planning.",
  "Favágás, sáncolás, teherrel gyaloglás, hideg. Ez a szám gyorsan elviszi a készletet -- éppen ezért érdemes előre számolni vele.":
    "Chopping wood, digging, walking with a load, cold. This number eats through supplies fast -- which is exactly why it's worth planning for in advance.",
  "kcal fejenként naponta.":
    "kcal per person per day.",
  "saját tétel":
    "custom item",
  "egység":
    "unit",
  "Engedély nélküli, 4 watt AM/FM (SSB-n 12). Nagy antennát kíván, de a hosszú hullám jobban hajlik a domb mögé, mint bármelyik kézirádió.":
    "Licence-free, 4 watts AM/FM (12 on SSB). Needs a big antenna, but the long wave bends behind hills better than any handheld radio.",
  "ENGEDÉLYKÖTELES: vizsga és hívójel kell hozzá. Vészhelyzetben az életveszély elhárítására a törvény enged kivételt, de arra épülő tervet ne csinálj -- a vizsga előre megszerezhető.":
    "LICENCE REQUIRED: you need an exam and a call sign. In an emergency the law allows an exception to avert danger to life, but don't build a plan on that -- the exam can be taken in advance.",
  "ENGEDÉLYKÖTELES. Itt NEM a rálátás dönt: nappal 100-400 km-re, éjjel akár több ezerre visz az ionoszféráról visszaverődve. Ezt a kalkulátor nem modellezi -- lásd a figyelmeztetést az eredménynél.":
    "LICENCE REQUIRED. Here line of sight is NOT what decides: by day 100-400 km, at night even thousands, bouncing off the ionosphere. This calculator doesn't model that -- see the warning in the result.",
  "ENGEDÉLYKÖTELES. Éjszakai sáv, a környék (50-300 km) megbízható lefedésére a legjobb -- ez a klasszikus \"megyényi\" összeköttetés.":
    "LICENCE REQUIRED. Night band, best for reliable coverage of the area (50-300 km) -- the classic \"county-wide\" link.",
  "Mező, tópart, autópálya. Itt a rálátás a korlát, nem a terep.":
    "Field, lakeshore, motorway. Here line of sight is the limit, not the terrain.",
  "A domb mögé a jel behajlik, de gyengülve. Egy dombtetőre felsétálni többet ér, mint tízszeres teljesítmény.":
    "The signal bends behind a hill, but weakened. Walking up a hilltop is worth more than ten times the power.",
  "A lombozat a rövid hullámot nyeli el jobban, ezért itt a 70 centi a leggyengébb.":
    "Foliage absorbs shorter waves more, so 70 cm is the weakest here.",
  "Itt fordul meg a sorrend: a 70 centi jobban jut át épületek között, a CB-nek meg antennája sincs hova.":
    "Here the order flips: 70 cm gets through between buildings better, and CB has nowhere to put an antenna.",
  "Völgyben ülve a rálátás nulla. Itt a megoldás nem a watt, hanem az átjátszó vagy a gerincre feljutás.":
    "Sitting in a valley, line of sight is zero. The answer here isn't watts but a repeater or getting up onto the ridge.",
  "talajhullám":
    "ground wave",
  "terep és teljesítmény":
    "terrain and power",
  "rálátás (a Föld görbülete)":
    "line of sight (Earth's curvature)",
  "Adj meg legalább egy embert.":
    "Enter at least one person.",
  "Tölts ki legalább egy tételt (mennyiség és kcal), vagy add meg az összeset egyben.":
    "Fill in at least one item (quantity and kcal), or enter the total at once.",
  "kcal hiányzik a":
    "kcal missing for",
  "húskonzerv .":
    "canned meat .",
  "Ennyi ideig elég a készlet":
    "The supplies last this long",
  "felnőttnek":
    "adults",
  "Napi igény:":
    "Daily need:",
  "készlet:":
    "supplies:",
  "kcal kell.":
    "kcal needed.",
  "Ez megvan.":
    "You have that.",
  "Ehhez a készlet kevés.":
    "The supplies are not enough for this.",
  "A gyerekekkel a felnőtt adag 60 százalékával számoltunk — ez átlag,":
    "For children we counted 60 percent of an adult portion — that's an average,",
  "egy tizenkét éves többet eszik egy hároméves(nél). A kalória nem minden:":
    "a twelve-year-old eats more than a three-year-old. Calories aren't everything:",
  "fehérje, só és zsír nélkül a puszta kalória pár hét alatt legyengít, és a":
    "without protein, salt and fat, bare calories weaken you within a few weeks, and",
  "C-vitamin hiánya hetek alatt jelentkezik. Ez a szám a KIHÚZÁST méri, nem az egészséget.":
    "vitamin C deficiency shows up within weeks. This number measures SURVIVAL, not health.",
  "A víz nincs ebben a számban, és hamarabb fogy el.":
    "Water is not included in this number, and it runs out sooner.",
  "Élelem nélkül hetekig el lehet lenni, víz nélkül napokig. Ha a készletet tervezed,":
    "You can go weeks without food, but only days without water. If you're planning supplies,",
  "a vízzel kezdd — arra külön kalkulátor van.":
    "start with water — there's a separate calculator for that.",
  "Ez a teljesítmény PMR446-on nem legális. A sávon":
    "This power is not legal on PMR446. On this band",
  "maximum 0,5 watt engedélyezett, gyári antennával. A számot kiszámoltuk, de egy":
    "a maximum of 0.5 watts is allowed, with the factory antenna. We calculated the number, but with a",
  "erősebb adóval a saját frekvenciádon te zavarod meg azokat, akikkel beszélni akarsz.":
    "stronger transmitter on your own frequency you disturb the very people you want to talk to.",
  "Ez a sáv engedélyköteles.":
    "This band requires a licence.",
  "használatához":
    "to use it",
  "vizsga és hívójel kell. A vizsga előre megszerezhető — és pont ez a lényeg:":
    "you need an exam and a call sign. The exam can be taken in advance — and that's exactly the point:",
  "egy vészhelyzetben már késő elkezdeni.":
    "in an emergency it's too late to start.",
  "kilométerre ezen a sávon a teljesítmény":
    "kilometres on this band, the power",
  "nem elég — bármennyi. A rálátásod":
    "is not enough — no matter how much. Your line of sight is",
  "kilométer, és a Föld görbülete":
    "kilometres, and VHF/UHF signals don't bend behind",
  "mögé a VHF/UHF jel nem hajlik be. Amin múlik: magasság (menj fel egy dombra vagy":
    "the Earth's curvature. What it depends on: height (go up a hill or",
  "tedd fel az antennát), átjátszó , vagy alacsonyabb sáv (CB vagy rövidhullám).":
    "raise the antenna), a repeater, or a lower band (CB or shortwave).",
  "kilométerhez kb.":
    "kilometres would need approx.",
  "watt kellene ezen a sávon és ezen a terepen":
    "watts on this band and this terrain",
  "— ami már nem kézirádió-kategória, és rendszerint olcsóbb feljebb vinni az antennát.":
    "— which is no longer handheld-radio territory, and it's usually cheaper to raise the antenna.",
  "Ennyire várható összeköttetés":
    "Expected range",
  "méter antennamagassággal.":
    "metres of antenna height.",
  "Amin most múlik:":
    "What it depends on now:",
  "Rövidhullámon a talajhullámmal számoltunk.":
    "On shortwave we calculated with ground wave.",
  "A rálátásod":
    "Your line of sight is",
  "km, a terep és a teljesítmény":
    "km, terrain and power allow",
  "km-t enged — a kettő közül a kisebbik számít.":
    "km — the smaller of the two counts.",
  "A watt a leggyengébb eszközöd. A távolság a teljesítmény negyedik":
    "Watts are your weakest tool. Distance grows with the fourth",
  "gyökével nő: négyszer annyi watt másfélszer nagyobb távolság. Egy méterrel feljebb tett":
    "root of power: four times the watts gives one and a half times the distance. An antenna raised one metre higher",
  "antenna rendszerint többet ad, mint a teljesítmény megduplázása — és nem fogyaszt.":
    "usually gives more than doubling the power — and uses no energy.",
  "Rövidhullámon ez a szám csak a talajhullám. A 7 és a 3,6":
    "On shortwave this number is only the ground wave. The real range of the 7 and 3.6",
  "megahertzes sáv igazi hatótávját az ionoszféra adja: napszaktól és napfolt-tevékenységtől":
    "megahertz bands comes from the ionosphere: depending on time of day and sunspot activity,",
  "függően 100-tól több ezer kilométerig. Azt ez a kalkulátor nem modellezi — arra":
    "from 100 to several thousand kilometres. This calculator doesn't model that — for that",
  "terjedési előrejelzés kell.":
    "you need a propagation forecast.",
  "Tölts ki minden mezőt.":
    "Fill in every field.",
  "kg fa, ez körülbelül":
    "kg of wood, that's about",
  "ömlesztett köbméter":
    "loose cubic metres",
  "Légszáraz keményfával és 70 százalékos kályha-hatásfokkal számolva. Nedves fa ennek a felét adja, tehát kétszer annyi kell belőle.":
    "Calculated with air-dried hardwood and 70 percent stove efficiency. Wet wood gives half of this, so you need twice as much.",
  "kg gáz, ez":
    "kg of gas, that's",
  "darab 11,5 kilós palack":
    "11.5 kg cylinders",
  "PB-gázt zárt térben égetni életveszélyes lehet. Szén-monoxid keletkezik, ami szagtalan, és álmodban öl meg. Kell mellé szén-monoxid-érzékelő, és kell folyamatos szellőzés — nem elég percenként kinyitni az ablakot.":
    "Burning LPG indoors can be life-threatening. It produces carbon monoxide, which is odourless and kills you in your sleep. You need a carbon monoxide detector and continuous ventilation — opening the window every few minutes is not enough.",
  "Párát is termel: minden elégetett kiló gázból másfél liter víz kerül a levegőbe. Ettől penészedik a fal, és hidegebbnek érzed a szobát.":
    "It also produces moisture: every kilo of gas burned puts one and a half litres of water into the air. This makes walls go mouldy and the room feel colder.",
  "Palackot soha ne tarts a lakótérben tartalékként, és ne a fűtés mellett.":
    "Never keep a spare cylinder in the living space, and never next to the heater.",
  "Tölts ki mindkét mezőt.":
    "Fill in both fields.",
  "négyzetméter tetőről":
    "square metres of roof",
  "milliméter esőből, húsz százalék veszteséggel számolva.":
    "millimetres of rain, calculated with twenty percent loss.",
  "A tető vízszintes vetülete számít, nem a ferde felület: felülről nézve mekkora.":
    "What counts is the roof's horizontal projection, not the sloped surface: how big it is seen from above.",
  "Ivásra és főzésre, három liter fejenként naponta:":
    "For drinking and cooking, three litres per person per day:",
  "Az első lefolyó vizet engedd el. Az mossa le a tetőről a port, a madárürüléket és a leveleket. Nagyjából az első fél milliméter esőnek megfelelő mennyiség.":
    "Let the first runoff go. It washes dust, bird droppings and leaves off the roof. Roughly the amount of the first half millimetre of rain.",
  "A tető anyaga számít. Bitumenzsindelyről, ólomtartalmú festésről vagy azbesztpalán át gyűjtött vizet ne igyál. Mosásra, öblítésre az is jó.":
    "The roof material matters. Don't drink water collected from bitumen shingles, lead-based paint or asbestos sheets. It's fine for washing and flushing.",
  "Az összegyűjtött víz nem ivóvíz. A Víztisztítás rész fent megmondja, mennyi forralás vagy hipó kell hozzá.":
    "Collected water is not drinking water. The Water purification section above tells you how much boiling or bleach it needs.",
  "Dörgés":
    "Thunder",
  "Most várd meg a dörgést, és nyomd meg újra.":
    "Now wait for the thunder and press again.",
  "Ez a fejed fölött van. Azonnal menj be épületbe vagy autóba. Fa alá soha.":
    "It's right above you. Get into a building or car immediately. Never under a tree.",
  "Tíz kilométeren belül van, tehát veszélyes. A következő villám már téged is elérhet: menj fedezékbe, és maradj is ott.":
    "It's within ten kilometres, so it's dangerous. The next lightning could reach you: take cover and stay there.",
  "Egyelőre távol van, de figyeld: ha az idő rövidül, közeledik.":
    "It's far away for now, but watch it: if the time gets shorter, it's approaching.",
  "másodperc telt el. A hang három másodperc alatt tesz meg egy kilométert.":
    "seconds passed. Sound travels one kilometre in three seconds.",
  "Harminc-harminc szabály: ha a dörgés harminc másodpercen belül megjön, menj fedezékbe, és az utolsó dörgés után még harminc percig maradj bent. A vihar utolsó villámai a legalattomosabbak, mert akkor már mindenki előjön.":
    "Thirty-thirty rule: if the thunder arrives within thirty seconds, take cover, and stay inside for thirty minutes after the last thunder. The last strikes of a storm are the most treacherous, because by then everyone comes out.",
  "Add meg a távolságot.":
    "Enter the distance.",
  "tartalékkal.":
    "with a reserve.",
  ": ebből":
    ": of this,",
  "már sötétben lenne. Vagy indulj hamarabb, vagy vigyél lámpát.":
    "would already be in the dark. Either set off earlier or take a light.",
  "kilométer":
    "kilometres",
  "méter emelkedés.":
    "metres of ascent.",
  "Az emelkedés minden hatszáz métere egy órát ad hozzá. Most indulva":
    "Every six hundred metres of ascent adds an hour. Setting off now, you'd arrive at",
  "-kor érnél oda.":
    ".",
  "Pihenő nincs benne. Hosszabb úton számolj óránként tíz perccel, és étkezéssel.":
    "No breaks included. On longer routes count ten minutes per hour, plus meals.",
  "Mérés…":
    "Measuring…",
  "nyomás.":
    "compressions.",
  "Forralás (ez a legbiztosabb)":
    "Boiling (the safest)",
  "Buzgó forrás":
    "Rolling boil",
  "— kétezer méter felett vagy, ott hosszabb kell, mert alacsonyabb a forráspont.":
    "— you're above two thousand metres, where it needs longer because the boiling point is lower.",
  "Hagyd kihűlni fedő alatt.":
    "Let it cool under a lid.",
  "Ha nem tudsz forralni: hipó":
    "If you can't boil: bleach",
  "vízhez":
    "of water",
  "százalékos hipó, ami körülbelül":
    "percent bleach, which is about",
  "Keverd el, várj":
    "Stir, wait",
  "percet, és utána is enyhén klóros szagúnak kell lennie.":
    "minutes, and afterwards it should still smell slightly of chlorine.",
  "Ha nem érzed a szagot, adj hozzá ugyanennyit, és várj még":
    "If you can't smell it, add the same amount again and wait another",
  "Zavaros vizet előbb tisztítsd le. Hagyd ülepedni, majd szűrd át ruhán vagy kávéfilteren. A hipó a lebegő szennyeződésre pazarlódik el, és nem jut a kórokozókra.":
    "Clean cloudy water first. Let it settle, then filter it through cloth or a coffee filter. Bleach gets wasted on floating particles and doesn't reach the pathogens.",
  "Illatosított, sűrített vagy tisztítószeres hipót ne használj. Csak sima nátrium-hipoklorit oldat való bele.":
    "Don't use scented, concentrated or detergent bleach. Only plain sodium hypochlorite solution will do.",
  "Amit ez nem old meg: vegyszer, olaj, növényvédőszer, nehézfém, sóstalanítás. Ezeket sem a forralás, sem a hipó nem távolítja el, a forralás inkább töményíti őket. Ipari terület, út menti árok vagy szántóföld melletti vízzel ne is próbálkozz.":
    "What this doesn't solve: chemicals, oil, pesticides, heavy metals, desalination. Neither boiling nor bleach removes these; boiling actually concentrates them. Don't even try with water from industrial areas, roadside ditches or next to farmland.",
  "A hipó nem öl meg mindent. A Cryptosporidium ellenáll neki. Ha ilyet gyanítasz (állati ürülékkel érintkezett felszíni víz), forralj, vagy használj arra való szűrőt.":
    "Bleach doesn't kill everything. Cryptosporidium resists it. If you suspect it (surface water that has been in contact with animal faeces), boil it, or use a filter made for it.",
  "csempe van eltárolva ezen a készüléken.":
    "tiles stored on this device.",
  "Ez a kivágás túl nagy:":
    "This area is too large:",
  "csempe lenne. Nagyíts rá jobban, és úgy töltsd le.":
    "tiles. Zoom in more and download it that way.",
  "csempe letöltése (kb.":
    "tiles to download (approx.",
  "nagyításon. Folytatod?":
    "zoom level. Continue?",
  "Letöltés…":
    "Downloading…",
  "Letöltés:":
    "Downloading:",
  "Kész:":
    "Done:",
  "nem jött le)":
    "failed)",
  ". Összesen":
    ". In total",
  "csempe van eltárolva.":
    "tiles stored.",
  "Kilépés a teljes képernyőből":
    "Exit full screen",
  "Várj, amíg a térkép betölt.":
    "Wait for the map to load.",
  "Nincs eltárolt csempe.":
    "No stored tiles.",
  "Törlöd a letöltött térkép-területeket?":
    "Delete the downloaded map areas?",
  "Törölve. A térkép ezután csak online töltődik.":
    "Deleted. From now on the map loads online only.",
  "A mikrofon nem indult el:":
    "The microphone didn't start:",
  "Vétel leállítása":
    "Stop receiving",
  "Vétel fut. Tartsd a hangforráshoz.":
    "Receiving. Hold it to the sound source.",
  "sor vétel alatt…":
    "lines received…",
  "Vétel fut, még nincs jel.":
    "Receiving, no signal yet.",
  "Vétel leállítva.":
    "Receiving stopped.",
  "Dekódolás…":
    "Decoding…",
  "sor dekódolva.":
    "lines decoded.",
  "Nem találtam SSTV-jelet ebben a felvételben.":
    "I found no SSTV signal in this recording.",
  "Nem sikerült a kép betöltése.":
    "Failed to load the image.",
  "Kódolás…":
    "Encoding…",
  "Küldés…":
    "Sending…",
  "mp) — tartsd a vevő mikrofonjához":
    "s) — hold it to the receiver's microphone",
  "Kész.":
    "Done.",
  "Leállítva.":
    "Stopped.",
  "WAV készítése…":
    "Creating WAV…",
  "WAV letöltve:":
    "WAV downloaded:",
  "Üzenet csak neki:":
    "Message to them only:",
  "kilépett, innentől mindenkinek írsz.":
    "left, from now on you're writing to everyone.",
  "Zárt üzenet. Ehhez a szoba kulcsa kell.":
    "Locked message. You need the room key for this.",
  "csak neki":
    "only to them",
  "csak neked":
    "only to you",
  "csak neki:":
    "only to them:",
  "Az internetes szobákhoz egyszer be kell lépned.":
    "You need to sign in once for internet rooms.",
  "Nem vagy bejelentkezve. Töltsd újra a lapot, és add meg a jelszót.":
    "You're not signed in. Reload the page and enter your password.",
  "Jelszó megjelenítése":
    "Show password",
  "Belépés jelszóval":
    "Sign in with password",
  "Az e-mail címed és a jelszavad. A telefon megjegyzi, többször nem kell.":
    "Your email address and password. The phone remembers them, you won't need to enter them again.",
  "Belépés e-mailes kóddal (jelszó nélkül)":
    "Sign in with email code (no password)",
  "Új fiók":
    "New account",
  "Új jelszó beállítása":
    "Set new password",
  "Add meg az e-mail címed, és válassz jelszót (legalább 8 karakter), kétszer. Utána küldünk egy 6 jegyű kódot e-mailben.":
    "Enter your email address and choose a password (at least 8 characters), twice. Then we'll send you a 6-digit code by email.",
  "Jelszó (legalább 8 karakter)":
    "Password (at least 8 characters)",
  "Jelszó még egyszer":
    "Password again",
  "Vissza a belépéshez":
    "Back to sign in",
  "Írd be a kódot":
    "Enter the code",
  "Küldtünk egy 6 jegyű kódot ide:":
    "We sent a 6-digit code to:",
  "Nézd meg a levelezőben (a Spam mappát is), és írd be. 10 percig érvényes.":
    "Check your mailbox (including the Spam folder) and enter it. Valid for 10 minutes.",
  "6 jegyű kód":
    "6-digit code",
  "Megerősítés":
    "Confirm",
  "Elölről":
    "Start over",
  "Bejelentkeztél. A telefon megjegyzi.":
    "You're signed in. The phone will remember it.",
  "Ellenőrzés folyamatban…":
    "Checking…",
  "Belépés folyamatban…":
    "Signing in…",
  "Küldés folyamatban, pár másodperc…":
    "Sending, a few seconds…",
  "Add meg az e-mail címed és a jelszavad.":
    "Enter your email address and password.",
  "Hibás e-mail cím vagy jelszó.":
    "Wrong email address or password.",
  "Ha elfelejtetted, nyomd meg az „Elfelejtettem a jelszót\" gombot.":
    "If you forgot it, press the \"I forgot my password\" button.",
  "A jelszó legalább 8 karakter legyen.":
    "The password must be at least 8 characters.",
  "A két jelszó nem egyezik. Írd be újra mindkettőt.":
    "The two passwords don't match. Enter both again.",
  "A kód 6 számjegy.":
    "The code is 6 digits.",
  "Hibás kód.":
    "Wrong code.",
  "Nem vagy bejelentkezve.":
    "You're not signed in.",
  "Kiléptél.":
    "You've signed out.",
  "nincs kapcsolat":
    "no connection",
  "Bekapcsolva. Ha valaki ír ide, jelez a telefonod, akkor is, ha az app be van zárva.":
    "Turned on. If someone writes here, your phone will alert you, even if the app is closed.",
  "Ha valaki ír ide, jelezzen a telefonod.":
    "Have your phone alert you when someone writes here.",
  "Ez a böngésző nem tud értesítést fogadni. Telefonon tedd ki az appot a főképernyőre.":
    "This browser can't receive notifications. On a phone, add the app to the home screen.",
  "Bekapcsolva. Ha valaki ír ide, jelez a telefonod.":
    "Turned on. If someone writes here, your phone will alert you.",
  "Nem adtál engedélyt az értesítéshez. A telefon beállításainál, az alkalmazásnál adhatod meg.":
    "You didn't allow notifications. You can allow them in the phone's settings, under the app.",
  "Bekapcsolva. Küldök egy próbát.":
    "Turned on. I'll send a test.",
  "Nem adtál engedélyt. A telefon beállításainál később visszaadhatod.":
    "You didn't give permission. You can grant it later in the phone's settings.",
  "a szerver nem adott kulcsot":
    "the server didn't provide a key",
  "a szerver nem fogadta el a feliratkozást":
    "the server didn't accept the subscription",
  "Bekapcsolva. Küldök egy próbát, hogy lásd, tényleg megérkezik.":
    "Turned on. I'll send a test so you can see it really arrives.",
  "A próbát a szerver elküldte a Google-nek. Pár másodpercen belül meg kell jelennie a telefon értesítései között, akkor is, ha bezárod az appot.":
    "The server sent the test to Google. It should appear among your phone's notifications within a few seconds, even if you close the app.",
  "Próba: így jelez majd, ha valaki ír ide.":
    "Test: this is how it will alert you when someone writes here.",
  "Kiküldtem a próbát, nézd meg a telefon értesítései között.":
    "Test sent, check your phone's notifications.",
  "Nincs engedély az értesítéshez.":
    "No permission for notifications.",
  "Ezen az eszközön nincs bekapcsolva az értesítés.":
    "Notifications are not turned on on this device.",
  "A próba nem ment ki.":
    "The test wasn't sent.",
  "A próbaértesítést a szolgáltató átvette. Ha pár másodpercen belül nem":
    "The provider accepted the test notification. If it doesn't",
  "jelenik meg a telefonodon, akkor a telefon beállításánál akad el, nem az appban.":
    "appear on your phone within a few seconds, it's stuck in the phone's settings, not in the app.",
  "Nyiss egyet: internet és térerő nélkül, egy hálón":
    "Open one: without internet or signal, on one network",
  "Minden nyelv":
    "All languages",
  "Erre a keresésre nincs nyitott szoba.":
    "No open room matches this search.",
  "Ezen a nyelven most nincs nyitott szoba. Állítsd vissza Minden nyelvre.":
    "There's no open room in this language right now. Switch back to All languages.",
  "indította":
    "started it",
  "nem vagy tag — koppints a jelentkezéshez":
    "you're not a member — tap to request to join",
  "tag olvasta el":
    "members read it",
  "Elküldve":
    "Sent",
  "Még senki nem olvasta el":
    "No one has read it yet",
  "Módosítás: írd át, és küldd el. A mező kiürítésével elveted.":
    "Edit: rewrite it and send. Clearing the field discards it.",
  "Módosítva:":
    "Edited:",
  "Törlöd ezt az üzenetet? Mindenkinél eltűnik a tartalma, és azoknál is, akik elmentették.":
    "Delete this message? Its content disappears for everyone, including those who saved it.",
  "Törölt üzenet":
    "Deleted message",
  "(zárt üzenet — kérj új meghívó linket a szoba gazdájától)":
    "(locked message — ask the room owner for a new invite link)",
  "(zárt üzenet — ez a kulcs nem ehhez a szobához való)":
    "(locked message — this key isn't for this room)",
  "(zárt üzenet — nincs meg a kulcs)":
    "(locked message — key missing)",
  "Rendszerüzenet":
    "System message",
  "Állandó jel — a névtől és a képtől független":
    "Permanent marker — independent of name and picture",
  "Ehhez a szobához most készült titkosító kulcs. Küldj ÚJ meghívó linket a tagoknak, hogy olvasni tudják az üzeneteidet.":
    "A new encryption key was just created for this room. Send NEW invite links to the members so they can read your messages.",
  "Kapcsolódva.":
    "Connected.",
  "Megszakadt a kapcsolat, újrapróbálom...":
    "Connection lost, retrying...",
  "belépési kérelmet küldött — a fogaskerék mögött döntesz róla.":
    "sent a join request — decide on it behind the gear icon.",
  "új üzenetet írt.":
    "wrote a new message.",
  "Kész. A szobák listáján már ez látszik. (":
    "Done. This is what the room list shows now. (",
  "Adj nevet a szobának.":
    "Give the room a name.",
  "Kész, a szoba létrejött. Itt a kódja, és itt tudsz képet feltölteni vagy meghívót küldeni. Ugyanezt később a fogaskerék alatt éred el.":
    "Done, the room has been created. Here's its code, and here you can upload an image or send an invite. You can reach the same later under the gear icon.",
  "Írd be a szoba kódját.":
    "Enter the room code.",
  "Kérelem elküldve. Amíg a gazda jóvá nem hagyja, nem látod az üzeneteket.":
    "Request sent. Until the owner approves it, you can't see the messages.",
  "Már tag vagy ebben a szobában.":
    "You're already a member of this room.",
  "Nincs ilyen kódú szoba.":
    "No room with this code.",
  "Illeszd be a meghívó linket.":
    "Paste the invite link.",
  "Ebben nincs meghívó. Másold be a teljes linket.":
    "There's no invite in this. Copy the full link.",
  "Beváltom...":
    "Redeeming...",
  "Kész. A csempén már ez látszik. (":
    "Done. This is what the tile shows now. (",
  "Erről a szobáról nem jelez.":
    "No alerts from this room.",
  "Küldöm...":
    "Sending...",
  "A szoba kódja a vágólapon.":
    "Room code copied to clipboard.",
  "Nem sikerült a vágólapra tenni. Jelöld ki és másold ki kézzel.":
    "Couldn't copy to clipboard. Select it and copy it manually.",
  "Biztosan törlöd? A szoba MINDENKINEK megszűnik, az üzenetekkel együtt. Ez nem vonható vissza.":
    "Are you sure you want to delete it? The room will be gone for EVERYONE, along with the messages. This can't be undone.",
  "Biztosan kilépsz? A szoba a többieknek megmarad, te nem látod tovább.":
    "Are you sure you want to leave? The room stays for the others, you won't see it anymore.",
  "A szoba megszűnt.":
    "The room has been deleted.",
  "Kiléptél a szobából.":
    "You left the room.",
  "Nem fért el a tárolóban. Próbálj kisebb képet.":
    "It didn't fit in storage. Try a smaller image.",
  "Mentve. Igazíthatod a kivágást, majd nyomd meg a Kész gombot.":
    "Saved. You can adjust the crop, then press Done.",
  "Mentve. Minden szobában ezen a néven látnak.":
    "Saved. You'll appear under this name in every room.",
  "Ezt a nevet ebben a szobában már használja valaki. Adj meg másikat.":
    "Someone in this room already uses this name. Choose another.",
  "Ez a név szabad ebben a szobában.":
    "This name is available in this room.",
  "Ezt a nevet már használja valaki ebben a szobában.":
    "Someone in this room already uses this name.",
  "Egy embert enged be, és 7 nap múlva lejár.":
    "Lets in one person, and expires in 7 days.",
  "PrepperPapa meghívó":
    "PrepperPapa invite",
  "Meghívlak a(z) „":
    "I'm inviting you to the room \"",
  "\" szobába:":
    "\":",
  "A linket a böngésző CÍMSORÁBA illeszd be, ne a keresőbe.":
    "Paste the link into the browser's ADDRESS BAR, not the search box.",
  "A vágólapra másolva. Egy embert enged be, és 7 nap múlva lejár.":
    "Copied to clipboard. Lets in one person, and expires in 7 days.",
  "Kép csatolva — koppints az elvetéshez":
    "Image attached — tap to discard",
  "A csatolt képet elvetettem.":
    "Attached image discarded.",
  "Kép csatolva. A Küldéssel megy el.":
    "Image attached. It goes out when you press Send.",
  "A módosítás elvetve.":
    "Edit discarded.",
  "Módosítva.":
    "Edited.",
  "Lejárt a módosítási idő (15 perc).":
    "The edit window has expired (15 minutes).",
  "A módosítás nem sikerült.":
    "The edit failed.",
  "Az üzenet nem ment el.":
    "The message wasn't sent.",
  "Ez a meghívó lejárt. Kérj újat attól, aki küldte.":
    "This invite has expired. Ask the person who sent it for a new one.",
  "Ezt a meghívót már felhasználták. Kérj újat attól, aki küldte.":
    "This invite has already been used. Ask the person who sent it for a new one.",
  "Ismeretlen meghívó. Lehet, hogy hiányzik a link vége.":
    "Unknown invite. The end of the link may be missing.",
  "A meghívót most nem sikerült beváltani. Van interneted?":
    "Couldn't redeem the invite right now. Are you online?",
  "Küldés: kiválasztasz egy képet, és a telefon hangként játssza le.":
    "Send: pick an image, and the phone plays it as sound.",
  "Vétel: a telefon hallgatja a hangot, és soronként rajzolja ki a képet.":
    "Receive: the phone listens to the sound and draws the image line by line.",
  "Kép választása: a telefon magától átméretezi a 320x256-os keretre.":
    "Choose image: the phone automatically resizes it to the 320x256 frame.",
  "Lejátszás: ugyanaz a gomb indít és állít. A WAV a hangot fájlba menti, ha máshogy akarod átvinni.":
    "Playback: the same button starts and stops. WAV saves the sound to a file if you want to transfer it another way.",
  "Vétel indítása: ugyanaz a gomb indít és állít. Tartsd a telefont a hangszóró közelébe.":
    "Start receiving: the same button starts and stops. Hold the phone close to the speaker.",
  "Hangfájlból is megy, ha valaki felvételt küld.":
    "It also works from an audio file, if someone sends a recording.",
  "A kész képet elmentheted, vagy törölheted és új vételbe kezdhetsz.":
    "You can save the finished image, or delete it and start a new reception.",
  "Forralás":
    "Boiling",
  "A Szoba zárt csoport, ami interneten át is elérhető: aki messze van, az is beszélget.":
    "A Room is a closed group that's also reachable over the internet: people far away can chat too.",
  "A gemkapoccsal képet csatolsz, a háromszög jellel sürgősnek jelölöd — az pirossal emeli ki mindenkinél.":
    "Use the paperclip to attach an image, and the triangle sign to mark it urgent — it gets highlighted in red for everyone.",
  "Egy üzenetet hosszan nyomva tudsz rá emojival válaszolni, elmenteni, a sajátodat módosítani vagy törölni.":
    "Long-press a message to react with an emoji, save it, or edit or delete your own.",
  "A fejlécben a fogaskerék nyitja a szoba beállításait: értesítés, tagok, belépési kérelmek, a szoba kódja.":
    "The gear icon in the header opens room settings: notifications, members, join requests, room code.",
  "Az üzenetek szövege és képei végponttól végpontig titkosítva mennek: a szerver ezeket nem tudja elolvasni. A neveket, a profilképeket, a szoba képét, a reakciókat és az időpontokat viszont látja.":
    "The text and pictures of messages are end-to-end encrypted: the server cannot read them. It does see the names, profile pictures, the room picture, reactions and times.",
  "Kezdőlap":
    "Home",
  "Előbb add meg a neved — így látnak a többiek a szobákban.":
    "First enter your name — that's how others see you in rooms.",
  "Tegyél fel egy profilképet — a neved mellett jelenik meg.":
    "Add a profile picture — it appears next to your name.",
  "(meg nem volt nyitva a szoba kepernyo)":
    "(the room screen had not been opened yet)",
  "Frissítés keresése…":
    "Checking for updates…",
  "Főoldal":
    "Home",
  "Lámpa, vészfény":
    "Light, emergency light",
  "Vészjelzés fény/hang":
    "Emergency signal light/sound",
  "A menüsor — ez mindig elérhető alul":
    "The menu bar — always available at the bottom",
  "Félkövér":
    "Bold",
  "Dőlt":
    "Italic",
  "Felsorolás":
    "Bulleted list",
  "Lista":
    "List",
  "Szerkesztés":
    "Edit",
  "Most jöhet két befúvás, ha vállalod. Ha nem, folytasd a nyomásokat szünet nélkül.":
    "Now give two rescue breaths, if you are willing. If not, keep doing compressions without a pause.",
  // ===== MENTETT uZENETEK a Profilon (2026-10-06) =====
  "Mentett üzenetek":
    "Saved messages",
  "Amit egy szobában hosszan nyomva elmentettél. A mentés hivatkozás, nem másolat: ha a szerzője törli az üzenetet, innen is eltűnik.":
    "What you saved by pressing and holding a message in a room. A save is a reference, not a copy: if the author deletes the message, it disappears from here too.",
  // ===== FAX (SSTV): csak Martin M1 (Fonok dontese, 2026-10-06 21:00) =====
  "Martin M1 mód: 320×256 képpont, egy kép ~114 másodperc. Ez az idő magából az SSTV-ből jön — a kép soronként épül fel hangból, és nem gyorsítható.":
    "Martin M1 mode: 320×256 pixels, one image takes ~114 seconds. That time comes from SSTV itself — the picture is built line by line from sound, and cannot be sped up.",
  "Küldéshez: a másik eszközön indíts SSTV-vevőt (a mi Fax-vevőnket, vagy pl. Robot36, MMSSTV) Martin M1 módban, és tartsd a hangszórót a mikrofonjához. A VIS-fejléc automatikus, a vevő magától felismeri a módot. Egy kép ~114 másodperc, és ez alatt a hangnak folyamatosnak kell lennie.":
    "To send: start an SSTV receiver on the other device (our own Fax receiver, or e.g. Robot36, MMSSTV) in Martin M1 mode and hold the speaker to its microphone. The VIS header is automatic, the receiver detects the mode by itself. One image takes ~114 seconds, and the sound must be continuous throughout.",
  // ===== SZOBA: szabalyzat, belepesi kerelem, meghivo-bevaltas, profil (2026-10-06) =====
  // A SZABALYZAT JOGI SZOVEG: Istvan irta magyarul, a forditas Marveene -- ATNEZESRE VAR.
  "Szoba-szabályzat és adatkezelés":
    "Room rules and data handling",
  "A Szoba zárt, meghívásos közösségi tér.":
    "The Room is a closed, invitation-only community space.",
  "Nem osztok meg jogsértő tartalmat, más személyes adatát, zaklató üzenetet vagy kereskedelmi, reklám tartalmat.":
    "I will not share unlawful content, other people’s personal data, harassing messages, or commercial or advertising content.",
  "Tilos a fegyver, lőszer, robbanóanyag, kábítószer és bármilyen tiltott áru adásvétele, cseréje vagy közvetítése — ajánlat, kereslet és kapcsolatfelvétel formájában is.":
    "Trading, exchanging or brokering weapons, ammunition, explosives, drugs or any prohibited goods is forbidden — including offers, requests and making contact.",
  "Tilos fegyver, lőszer, robbanóanyag vagy más veszélyes eszköz készítéséhez, átalakításához útmutatót megosztani, és tilos bármilyen bűncselekményre felbujtani vagy azt megszervezni. A felkészülés, a készletezés, az elsősegély és a rádiózás mint téma ettől természetesen megmarad.":
    "Sharing instructions for making or modifying weapons, ammunition, explosives or other dangerous devices is forbidden, as is inciting or organising any crime. Preparedness, stockpiling, first aid and radio remain perfectly valid topics.",
  "Amit beírok, a szoba többi tagja látja, és el is mentheti — a titkosítás a szervertől védi az üzenetet, a tagoktól nem.":
    "Whatever I write is visible to the other members, who can also save it — encryption protects the message from the server, not from the members.",
  "A szobát létrehozó gazda felel a szobában folytatott tartalomért: ő dönt a belépésről, ő távolíthat el tagot, és más üzenetét is csak ő törölheti.": "The host who created the room is responsible for the content in it: they decide who may join, they can remove a member, and only they may delete someone else's message.",
  "Járművek": "Vehicles",
  "Helyszínek": "Places",
  "Telefonszám": "Phone number",
  "Hajó": "Boat",
  "A gazda bármikor eltávolíthat egy tagot, és bármikor törölheti a szobát — ez minden tag üzenetét visszavonhatatlanul megszünteti.":
    "The host may remove a member at any time and delete the room at any time — this irreversibly destroys every member’s messages.",
  "Ha kilépek vagy eltávolítanak, a szerver több üzenetet nem ad ki nekem — a készülékemen már meglévők viszont olvashatók maradnak.":
    "If I leave or am removed, the server sends me no further messages — but those already on my device remain readable.",
  "A szobában megosztott hely- vagy készlet-adat érzékeny: a saját biztonságomért én felelek.":
    "Location or supply information shared in the room is sensitive: I am responsible for my own safety.",
  "A szoba használata saját belátást és felelősséget kíván.":
    "Using the room requires your own judgement and responsibility.",
  "16 év alatti csak szülő vagy gondviselő hozzájárulásával csatlakozhat.":
    "Anyone under 16 may join only with the consent of a parent or guardian.",
  "A szerver tárolja: a szoba és a tagok nevét, a profilképet, az üzenetek TITKOSÍTOTT tartalmát, a képeket (max 500 kB), a reakciókat és az olvasási jelzéseket.":
    "The server stores: the room and member names, the profile picture, the ENCRYPTED content of messages, the images (max 500 kB), the reactions and the read receipts.",
  "Ha meghívó linket kaptál, és az böngészőben nyílt meg, másold ide az egészet — innen az app váltja be.":
    "If you received an invitation link and it opened in a browser, paste the whole thing here — the app will redeem it.",
  "Meghívó beváltása":
    "Redeem invitation",
  "Eszköz-diagnosztika":
    "Device diagnostics",
  "Értesítés erről a szobáról":
    "Notification about this room",
  "Ha valaki ír ide, jelezzen a telefonod — akkor is, ha az app be van zárva.":
    "If someone writes here, let your phone alert you — even when the app is closed.",
  "Ez a másik út, és szándékosan marad meg. A meghívó link csak ott működik, ahol át is tudod küldeni. A kódot viszont be lehet mondani telefonon vagy rádión, le lehet írni egy papírra, le lehet adni morzével — nyolc karakter, és kész.":
    "This is the other way in, and it stays on purpose. An invitation link only works where you can actually send it. A code, however, can be said over the phone or radio, written on paper, or sent in Morse — eight characters, and done.",
  "Aki a kódot ismeri, kérelmet küld; te döntöd el, beengeded-e. A jóváhagyással a te készüléked adja át neki a szoba kulcsát, a szerver nem látja.":
    "Whoever knows the code sends a request; you decide whether to let them in. On approval your device hands them the room key — the server never sees it.",
  "Profil":
    "Profile",
  "Profilkép":
    "Profile picture",
  "A neved mellett jelenik meg. Nem kötelező.":
    "It appears next to your name. Optional.",
  "Húzd a képet a körben, a csúszkával nagyíts. Csak a körben látszó rész kerül mentésre.":
    "Drag the picture inside the circle, zoom with the slider. Only the part visible in the circle is saved.",
  // TELJES FORDITAS-KOR (Fonok, 2026-10-05 21:36: "az osszes forditas megtortenjen mindenhol")
  "Válaszd ki, mit szeretnél: adást vagy vételt.":
    "Choose what you want: sending or receiving.",
  "Morze kulcs":
    "Morse key",
  "Kopogás (rács-kód)":
    "Tapping (tap code)",
  "72h csomag":
    "72h kit",
  "Export":
    "Export",
  "Egészségügyi adatok":
    "Health data",
  "Nem kötelező, de ebből jön a vészkártyád, és ebből számoljuk, mi kell a csomagba.":
    "Not required, but your emergency card comes from this, and we use it to work out what goes in the kit.",
  "Lámpa-üzemidő":
    "Lamp runtime",
  "Meddig világít egy fejlámpa vagy zseblámpa":
    "How long a head torch or flashlight lasts",
  "Lámpa-üzemidő: meddig világít":
    "Lamp runtime: how long it lasts",
  "Lámpa vagy fejlámpa":
    "Flashlight or head torch",
  "Üzemmód":
    "Mode",
  "LED / fényerő-osztály":
    "LED / brightness class",
  "LED áramfelvétel (mA)":
    "LED current draw (mA)",
  "Elem / akku típusa":
    "Battery type",
  "Kapacitás (mAh)":
    "Capacity (mAh)",
  "Hány elem/akku (párhuzamosan összeadódó kapacitás)":
    "How many cells (capacity adds up in parallel)",
  "A gyártói adat a fényerő NÉVLEGES üzemideje — a valóságban a hideg, az elem életkora és a fokozatos elhalványulás ennél mindig kevesebbet ad. A saját megadásos számításnál a névleges kapacitásból 15 százalékot levonunk erre.":
    "The manufacturer figure is the NOMINAL runtime for that brightness; in reality cold, battery age and gradual dimming always give less. In the manual calculation we subtract 15 percent from the nominal capacity for this.",
  "Ezt látják a többiek":
    "This is what the others see",
  "minden szobában":
    "in every room",
  ". Egy nevet használ a rendszer; a szobába lépéskor ezt kérdezi meg, ha még nincs megadva.":
    ". The system uses one name; it asks for it when you enter a room, if it is not set yet.",
  "Szalag ✕":
    "Tape ✕",
  "Saját térképek":
    "Your own maps",
  // Igazitas finomhangolasa (Fonok kerese 2026-10-05 20:52)
  "Finomhangolás":
    "Fine-tuning",
  "Alaphelyzet":
    "Reset",
  "A saját térkép a helyén van.":
    "Your own map is in place.",
  // UJ PONT felvevo a terkepen (Fonok kerese 2026-10-05 20:37)
  "Új pont":
    "New point",
  "Menedék":
    "Shelter",
  "Tűzrakó":
    "Fire site",
  "Veszély":
    "Danger",
  "Találkozó":
    "Meeting point",
  "A pont neve":
    "Name of the point",
  "Koppints a térképre újra, ha arrébb tennéd. A pont csak a Mentéssel jön létre.":
    "Tap the map again to move it. The point is created only by Save.",
  // VAD- ES ROVAR-TAVOLTARTO (Fonok kerese 2026-10-05 20:16)
  "Vad- és rovar-távoltartó":
    "Wildlife and insect deterrent",
  "Vadak ellen":
    "Against wildlife",
  "Szúnyogok ellen":
    "Against mosquitoes",
  "Vad-frekvencia":
    "Wildlife frequency",
  "Szúnyog-frekvencia":
    "Mosquito frequency",
  "Hz, lassan söprő hang. A legtöbb felnőtt ezt már nem hallja.":
    "Hz, a slowly sweeping tone. Most adults can no longer hear this.",
  "Hz, folyamatos hang.":
    "Hz, a continuous tone.",
  "AMIT EZ TUD ÉS AMIT NEM. A telefon hangszórója ilyen magas hangon lényegesen halkabb, mint a vészsípnál, és ezt a készüléked dönti el, nem az app. A szúnyogriasztó ultrahangnak nincs bizonyított hatása, több vizsgálat is eredménytelennek találta. Nagyobb vadnál a bizonyítottan működő eszköz a HANGOS, EMBERI FÜLNEK IS HALLHATÓ zaj, tehát az SOS lap vészsípja, nem ez. Ezt a két gombot akkor használd, ha ki akarod próbálni, és ne építs rá védelmet.":
    "WHAT THIS CAN AND CANNOT DO. At such a high pitch your phone's speaker is considerably quieter than it is for the emergency whistle, and that is decided by your device, not by the app. Ultrasonic mosquito repelling has no proven effect; several studies found it ineffective. Against larger wildlife the tool with proven effect is LOUD noise that HUMANS CAN HEAR TOO, that is, the emergency whistle on the SOS page, not this. Use these two buttons if you want to try them, and do not build your safety on them.",
  "Ne tartsd a füledhez, és ne irányítsd más fülére. Kutya, macska és más házi állat jóval magasabbra hall, mint az ember: nekik ez zavaró lehet akkor is, ha te nem hallod.":
    "Do not hold it to your ear and do not point it at anyone else's ear. Dogs, cats and other pets hear much higher than people do: this can disturb them even when you hear nothing.",
  // TERKEP mester-gomb es funkcio-tabla (Fonok kerese 2026-10-05 20:11)
  "Térkép-funkciók":
    "Map functions",
  "Helyzet és pontok":
    "Position and points",
  "Mérés":
    "Measuring",
  "Térkép és tároló":
    "Map and storage",
  // TERKEP lap: data-i18n kulcsok, amiknek SEM a PP_SZOTAR-ban, SEM itt nem volt forditasa
  "Vissza":
    "Back",
  "Kész":
    "Done",
  "Tárolt térkép törlése":
    "Delete stored map",
  "Saját térkép hozzáadása":
    "Add your own map",
  "Saját térkép: fotózz le egy turista- vagy katonai térképet, és igazítsd rá az alaptérképre 2–3 ismert pont (falu, csúcs, útkereszteződés) párosításával. A kép rétegként az alaptérkép fölé kerül, átlátszósága állítható, és a készüléken tárolódik, térerő nélkül is megvan. A rajzolt, nem méretarányos térképeknél az igazítás közelítő. A pontjaidat ugyanúgy teszed le, mint eddig: valódi koordinátán tárolódnak, a rétegtől függetlenül.":
    "Your own map: photograph a hiking or military map and align it onto the base map by matching 2-3 known points (a village, a peak, a crossroads). The picture becomes a layer above the base map, its transparency can be set, and it is stored on the device, so you have it without signal. On drawn, not-to-scale maps the alignment is approximate. You place your points as before: they are stored at real coordinates, independently of the layer.",
  // TERKEP lebego gomb-panel (Fonok kerese 2026-10-05 19:56)
  "Gombok elrejtése":
    "Hide the buttons",
  "Gombok megjelenítése":
    "Show the buttons",
  // FAX kep-igazito (Fonok kerese 2026-10-05 19:50): forgatas + zoom + tolas a kereten belul
  "Ez nem papír-fax: egy képet küld hangként, szabványos SSTV módban, amit bármely SSTV-vevő megért. A keret ezért kötött: 320x256 képpont, fekvő. Egy gépelt A4-es laphoz ez kevés, de egy rövid, nagy betűs kézírás olvashatóan átmegy.":
    "This is not a paper fax: it sends a picture as sound, in standard SSTV mode, which any SSTV receiver understands. That is why the frame is fixed: 320x256 pixels, landscape. For a typed A4 page this is too little, but a short note in large handwriting comes through legibly.",
  "Forgatás":
    "Rotate",
  "Teljes kép":
    "Whole image",
  "Nagyítás":
    "Zoom",
  "A keretbe eső rész:":
    "The part inside the frame:",
  "képpont a forrásból":
    "pixels from the source",
  "Húzd a képet a helyére, két ujjal nagyíthatsz, a Forgatás kilencven fokonként fordít. Amit a keretben látsz, pontosan az megy el. A Forgatás és a Teljes kép újra beilleszti a képet a keretbe, onnan tudsz belezoomolni.":
    "Drag the picture into place, pinch with two fingers to zoom, and Rotate turns it by ninety degrees. What you see in the frame is exactly what gets sent. Rotate and Whole image fit the picture back into the frame, and you can zoom in from there.",
  // FAX (SSTV) -- allo kep kezelese + a ket fax lap feliratai, 2026-10-05 (Fonok: 'ne vesszen el ... egy csomo adat')
  "Fax küldés":
    "Send fax",
  "Fax vétel":
    "Receive fax",
  "Álló kép":
    "Portrait image",
  "Elforgatva, teljes felbontás":
    "Rotated, full resolution",
  "Egész kép, fekete sávokkal":
    "Whole image, with black bars",
  "Kitöltés, a széleket levágja":
    "Fill the frame, cropping the edges",
  "Álló kép elforgatva, teljes felbontás:":
    "Portrait image rotated, full resolution:",
  "A keretre vágva, a széleit levágta:":
    "Cropped to the frame, edges cut off:",
  "Egész kép, fekete sávokkal:":
    "Whole image, with black bars:",
  "Egész kép a keretben:":
    "Whole image in the frame:",
  "képpont a 320×256-os keretből":
    "pixels out of the 320×256 frame",
  "A saját vételünk egyelőre csak Martin M1-et fejt vissza. A többi mód adásra kész, és egy szabványos SSTV-vevő (Robot36, MMSSTV) veszi, de ezt a telefonod nem tudja magának visszaolvasni.":
    "Our own receiver currently decodes only Martin M1. The other modes are ready for sending, and a standard SSTV receiver (Robot36, MMSSTV) picks them up, but your phone cannot read them back for itself yet.",
  "A fax kerete fekvő, 320x256 képpont, ezt a mód szabványa adja. Álló képnél az elforgatás használja ki a legjobban a keretet, tehát ott veszik el a legkevesebb részlet, a vevő oldalán viszont fordítsd el a telefont. A kitöltés levágja a kép tetejét és alját. Fekvő képnél mindhárom beállítás ugyanazt adja.":
    "The fax frame is landscape, 320x256 pixels, set by the mode standard. For a portrait image, rotating uses the frame best, so the least detail is lost, but turn the phone on the receiving side. Filling cuts off the top and the bottom of the image. For a landscape image all three settings give the same result.",
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
  "Számológép": "Calculator",
  "Nagy gombok, szalag, memória — kesztyűben és sötétben is": "Big keys, tape, memory — usable in gloves and in the dark",

  // --- ATTRIBUTUM-SZOVEGEK (2026-08-26, Istvan). Thomas merte az angol keszlet
  // felvetele kozben: a `placeholder`/`title`/`aria-label` magyarul allt. A fordito
  // MAR bejarja az attributumokat -- ezek a kulcsok hianyoztak a szotarbol.
  // A `pl.` MAGYAR roviditès: nyelvenkent mas (e.g. / z. B. / p. ej. / np. / ex. / напр.),
  // es a tizedesjel is (`1013.2` angolul, `1013,2` a tobbin).
  "Keresés a tételek közt": "Search among items",
  "Mégse": "Cancel",
  "Szalag ürítése": "Clear the tape",
  "Visszavonás": "Undo",
  "a tétel neve": "the item name",
  "az eszköz neve": "the device name",
  "hány darab": "how many",
  "kalória egységenként": "calories per unit",
  "mennyiség": "quantity",
  "sor törlése": "delete row",
  "Új lap": "New sheet",
  "Írd be a szöveget, majd koppints a lapra": "Type the text, then tap the sheet",
  "pl. 15": "e.g. 15",
  "pl. 18": "e.g. 18",
  "pl. 85": "e.g. 85",
  "pl. 500": "e.g. 500",
  "pl. 47.4979, 19.0402": "e.g. 47.4979, 19.0402",
  "pl. A Rh+": "e.g. A Rh+",
  "pl. Anna": "e.g. Anna",
  "pl. 1013,2": "e.g. 1013.2",
  "pl. 6,5": "e.g. 6.5",
  "pl. Feri": "e.g. Frank",
  "pl. Otthon": "e.g. Home",
  "pl. SOS Fonok": "e.g. SOS Dad",
  "pl. inzulin": "e.g. insulin",

  // --- NYOMTATOTT VESZKARTYA (2026-08-26, Istvan). Thomas merte: a nyomtatott lap
  // angol nyelven is vegig MAGYAR volt. A lap KULON ablakban keszul, tehat a DOM-bejaro
  // fordito nem eri el -- a szoveg a felepiteskor fordul (`ppForditSzoveg` a cardNyomtat-ban).
  "VÉSZKÁRTYA": "EMERGENCY CARD",
  "CSALÁDI VÉSZKÁRTYA": "FAMILY EMERGENCY CARD",
  "Születés:": "Born:",
  "Allergia:": "Allergies:",
  "Kontakt:": "Contact:",
  "személyes QR": "personal QR",
  "családi QR": "family QR",
  "allergia:": "allergy:",
  "gyógyszer:": "medication:",
  "A böngésző letiltotta az új ablakot. Engedélyezd, és próbáld újra.": "The browser blocked the new window. Allow it and try again.",
  "Nincs profil, amiből kártyát csinálhatnék. A Háztartásnál vedd fel őket.": "There is no profile to make a card from. Add them under Household.",

  // --- Helyszin-tipusok, alap fogalmak ---
  'Otthon': 'Home',
  'Nyaraló': 'Holiday home',
  'Hétvégi ház': 'Weekend house',
  'Garázs': 'Garage',
  'Lakókocsi': 'Caravan',
  'Jármű': 'Vehicle',
  'Rejtési pont': 'Cache point',
  'Egyéb': 'Other',
  'egyéb': 'other',
  'Gépjármű': 'Motor vehicle',
  'Autó': 'Car',
  'Autós': 'Car kit',
  'Motorkerékpár': 'Motorcycle',
  'Elektromos bicikli': 'E-bike',
  'Elektromos roller': 'E-scooter',
  'Utánfutó': 'Trailer',
  '(motoros)': '(motorised)',

  // --- Gyakori gombok, cimkek ---
  'Megnevezés': 'Name',
  'Név': 'Name',
  'A neved': 'Your name',
  'Törlés': 'Delete',
  'Mentés': 'Save',
  'Mégsem': 'Cancel',
  'Hozzáadás': 'Add',
  'Küldés': 'Send',
  'Kilépés': 'Exit',
  'Csatlakozás': 'Join',
  'Csatlakozz': 'Join',
  'Nincs': 'None',
  'Számold ki': 'Calculate',
  'Kategória': 'Category',
  'Cím': 'Address',
  'Adat': 'Data',
  'Beállítások': 'Settings',
  'Feloldás': 'Unlock',
  'A feloldás': 'Unlocking',
  'Zárolás': 'Lock',
  'Értesítés': 'Notification',
  'Értesítés bekapcsolása': 'Turn on notifications',
  'Beolvasás kamerával': 'Scan with camera',
  'Betöltés fájlból': 'Load from file',
  'Fájl kiválasztása és mentés': 'Choose file and save',
  'Kép mentése': 'Save image',
  'Kép választása': 'Choose image',
  'Betűsor másolása': 'Copy letter string',
  'Hangfájlból': 'From audio file',
  'English': 'English',

  // --- Fo kepernyok, csempek ---
  'Kommunikáció': 'Comms',
  'Morze': 'Morse',
  'Fax (SSTV)': 'Fax (SSTV)',
  // 2026-10-19 (kartya 43a80047): "(SSTV)" kivetve; a feloldas a fiokhoz kotott, max. ket keszulek
  "Használati útmutató": "User guide",
  "Fax": "Fax",
  "Fax: kép átküldése hangban, rádión is. Ugyanaz a gomb indít és állít.": "Fax: sending a picture inside sound, over radio too. The same button starts and stops it.",
  "A kód a fiókodhoz tartozik, és legfeljebb két készüléken használhatod. A feloldott modulok offline is működnek, semmi nem zár le. Ha kódot kaptál, itt válthatod be.": "The code belongs to your account and you can use it on up to two devices. Unlocked modules also work offline, nothing gets locked. If you received a code, you can redeem it here.",
  "Feloldva ✓ A kód a fiókodhoz tartozik, legfeljebb két készüléken.": "Unlocked ✓ The code belongs to your account, on up to two devices.",
  'Üzenet': 'Message',
  'Hangüzenet': 'Voice message',
  'Digitális üzenet': 'Digital message',
  'Helyi szoba': 'Local room',
  'Tudástár': 'Knowledge base',
  'Vészkártya': 'Emergency card',
  'Titkos QR': 'Secret QR',
  'Biblia': 'Bible',
  'Imádság': 'Prayer',
  'Háztartás': 'Household',
  'Alapismeretek': 'Basics',
  'Élelmiszer és víz': 'Food and water',
  'Egészségügy': 'Health',
  'Háborús övezet': 'War zone',
  'SOS': 'SOS',
  'Alaptérkép': 'Base map',
  'Irattárca': 'Document wallet',
  'Dokumentum': 'Document',
  'Dokumentumok · nyílt (QR)': 'Documents · open (QR)',
  'Dokumentumok · PIN-zár': 'Documents · PIN lock',
  'Dokumentumok és adatmentés': 'Documents and backup',
  'Belépési és helyreállítási kódok': 'Access and recovery codes',
  'Belépési kérelmek': 'Join requests',
  'Gyakorlónap': 'Practice day',
  'Csomaglista személyre és útra': 'Packing list by person and trip',
  'EDC: a mindennap magadnál hordott felszerelés': 'EDC: the gear you carry every day',

  // --- Haztartas, szemelyek, allatok ---
  'Családtagok': 'Family members',
  'Családtag hozzáadása': 'Add family member',
  'Családtag törlése': 'Delete family member',
  'Családtagok · állatok · helyszínek': 'Family · animals · locations',
  'Családtagok vészkártyái': 'Family emergency cards',
  'Családi kártya (egy QR)': 'Family card (one QR)',
  'Családi jelszó': 'Family password',
  'Háziállatok': 'Pets',
  'Háziállat a felkészülésben': 'Pets in preparedness',
  '+ Új háziállat': '+ New pet',
  '+ Új helyszín': '+ New location',
  'Állat hozzáadása': 'Add animal',
  'Állat törlése': 'Delete animal',
  'Faj': 'Species',
  'felnőtt férfi': 'adult male',
  'felnőtt nő': 'adult female',
  'gyermek': 'child',
  'csecsemő': 'infant',
  'fiú': 'boy',
  'haszonállat': 'livestock',
  'Helyszín hozzáadása': 'Add location',
  'Helyszín törlése': 'Delete location',
  'Helyszínek készültsége': 'Readiness by location',
  'Ingatlanok és helyszínek': 'Properties and locations',
  'Emelet': 'Floor',
  'Alapterület (m²)': 'Floor area (m²)',
  'GPS koordináta': 'GPS coordinates',
  'Hány napra': 'For how many days',
  'Kalória': 'Calories',
  'Meddig elég az élelmed, és mennyi hiányzik': 'How long your food lasts, and what is missing',
  'Rádió-hatótáv': 'Radio range',
  'Meddig hallanak a sávtól és a tereptől függően': 'How far you are heard, by band and terrain',
  'Kalória: meddig elég az élelmed': 'Calories: how long your food lasts',
  'Hány felnőtt?': 'How many adults?',
  'Hány gyerek? (kb. 12 év alatt)': 'How many children? (under about 12)',
  'Mit csináltok ezekben a napokban?': 'What will you be doing on those days?',
  'Mi van a készletben?': 'What is in the stockpile?',
  '+ Saját tétel hozzáadása': '+ Add your own item',
  'Vagy add meg egyben, ha tudod': 'Or give the total, if you know it',
  'összes kilokalória (üresen hagyhatod)': 'total kilocalories (can be left empty)',
  'Mi ez? (pl. szárított hús)': 'What is it? (e.g. dried meat)',
  'kcal/egység': 'kcal/unit',
  'mennyi': 'how much',
  'bent maradunk, keveset mozgunk': 'staying in, moving little',
  'normál napi ügyintézés': 'normal day of errands',
  'fizikai munka, gyaloglás': 'physical work, walking',
  'Rizs': 'Rice',
  'Száraztészta': 'Dry pasta',
  'Liszt': 'Flour',
  'Bab, lencse, borsó': 'Beans, lentils, peas',
  'Zabpehely': 'Rolled oats',
  'Cukor, méz': 'Sugar, honey',
  'Olaj, zsír': 'Oil, fat',
  'Húskonzerv (400 g)': 'Canned meat (400 g)',
  'Zöldségkonzerv (400 g)': 'Canned vegetables (400 g)',
  'Tejpor': 'Milk powder',
  'Keksz, kétszersült': 'Biscuits, rusk',
  'Csokoládé, müzliszelet': 'Chocolate, cereal bar',
  'Rádió: meddig hallanak': 'Radio: how far you are heard',
  'Milyen sávon?': 'Which band?',
  'Adóteljesítmény (watt)': 'Transmit power (watts)',
  'Milyen terepen?': 'What terrain?',
  'Milyen magasan van az antennád? (méter)': 'How high is your antenna? (metres)',
  'És a másiké?': 'And the other one?',
  'Mekkora távolságot szeretnél áthidalni? (km, üresen hagyhatod)': 'What distance would you like to cover? (km, can be left empty)',
  'nyílt, sík terep': 'open, flat terrain',
  'dombos, hullámos': 'hilly, rolling',
  'erdő, sűrű növényzet': 'forest, dense vegetation',
  'város, beépített': 'town, built-up',
  'hegyvidék, völgyben': 'mountains, in a valley',
  '(db)': '(pcs)',
  '(kg)': '(kg)',
  '(liter/kg)': '(litre/kg)',
  '(egység)': '(unit)',
  'Hány napra kell?': 'For how many days?',
  'Hány napra tervezel itt': 'How many days you plan here',

  // --- Egeszseg, veszkartya ---
  'Vércsoport': 'Blood type',
  'Allergia': 'Allergy',
  'Allergiák': 'Allergies',
  'Gyógyszer': 'Medication',
  'Gyógyszerek': 'Medications',
  'Érszorító': 'Tourniquet',
  'Elsősegélykészlet': 'First aid kit',
  'Glutén': 'Gluten',
  'Diófélék': 'Tree nuts',
  'Földimogyoró': 'Peanut',
  'Hal / tenger gyümölcsei': 'Fish / seafood',
  'Darázs- és méhcsípés': 'Wasp and bee sting',
  'Kullancsriasztó': 'Tick repellent',
  'Naptej': 'Sunscreen',
  'CPAP': 'CPAP',
  'Bébiétel': 'Baby food',
  'Állateledel': 'Pet food',
  'Tisztálkodó eszközök': 'Hygiene items',
  'Női higiéniai termékek': 'Feminine hygiene products',

  // --- Keszlet, kategoriak ---
  'Kannás víz': 'Water canister',
  'Palackos víz': 'Bottled water',
  'Száraz élelmiszer': 'Dry food',
  'Konzerv': 'Canned food',
  'MRE pack': 'MRE pack',
  'Romlandó': 'Perishable',
  'Hosszú távú': 'Long term',
  '30 napos': '30-day',
  '72 órás': '72-hour',
  'Menekülőzsák': 'Bug-out bag',
  'Téli túra': 'Winter trip',
  'Vízi túra': 'Water trip',
  'Hálózsák': 'Sleeping bag',
  'Derékalj': 'Sleeping mat',
  'Párna': 'Pillow',
  'Sátor/sátorlap': 'Tent / tarp',
  'Fejlámpa': 'Headlamp',
  'Kézilámpa': 'Flashlight',
  'Munkalámpa': 'Work light',
  'Szikravető': 'Fire steel',
  'Gyújtós': 'Kindling',
  'Főzőfej': 'Camp stove',
  'Spiritusz égő': 'Spirit burner',
  'Hobokályha': 'Hobo stove',
  'Fa tüzelésű kályha': 'Wood-burning stove',
  'Dízel kályha': 'Diesel heater',
  'Vegyi melegítő': 'Chemical heater',
  'Ágyfűtés': 'Bed warming',
  'Gázpalack': 'Gas cylinder',
  'Tüzifa': 'Firewood',
  'Fűtőolaj': 'Heating oil',
  'Fa, kályhában': 'Wood, in a stove',
  'Hideg időjárási öltözet': 'Cold-weather clothing',
  'Meleg időjárási öltözet': 'Warm-weather clothing',
  'EDC csomag felszerelései': 'EDC pack contents',
  'Víztisztító tabletta': 'Water purification tablets',
  'Vízszűrő': 'Water filter',
  'Ciszterna': 'Cistern',
  'Esővíz': 'Rainwater',
  'Esővíz: mennyi gyűlik össze': 'Rainwater: how much collects',
  'Hűtő': 'Fridge',

  // --- Aram, energia ---
  'Áram': 'Power',
  'Áramforrás': 'Power source',
  'Áram: mit tudsz róla üzemeltetni, és meddig': 'Power: what you can run from it, and for how long',
  'Powerbank': 'Power bank',
  'Power station': 'Power station',
  'Tank / akku': 'Tank / battery',
  'Kapacitás (Wh/db)': 'Capacity (Wh each)',
  'Autó-/szünetmentes akku 100 Ah': 'Car / UPS battery 100 Ah',
  'Anker 521 PowerHouse (256 Wh)': 'Anker 521 PowerHouse (256 Wh)',
  'Bluetti AC200L (2048 Wh)': 'Bluetti AC200L (2048 Wh)',
  'Bluetti EB70 (716 Wh)': 'Bluetti EB70 (716 Wh)',
  'EcoFlow Delta 2 (1024 Wh)': 'EcoFlow Delta 2 (1024 Wh)',
  'EcoFlow River 2 (256 Wh)': 'EcoFlow River 2 (256 Wh)',
  'EcoFlow River 2 Pro (768 Wh)': 'EcoFlow River 2 Pro (768 Wh)',
  'Szolárpanel': 'Solar panel',

  // --- uzemanyag, futes ---
  'Üzemanyag': 'Fuel',
  'Üzemanyag (mobilitás)': 'Fuel (mobility)',
  'Üzemanyag-készlet': 'Fuel stock',
  'benzin': 'petrol',
  'dízel': 'diesel',
  'Fogyasztás (/100 km)': 'Consumption (/100 km)',
  'Most mennyi van benne': 'How much is in it now',
  'tele': 'full',
  'háromnegyed': 'three quarters',
  'fele': 'half',
  'negyede': 'a quarter',
  'ötöde': 'a fifth',
  'tizede': 'a tenth',
  'üres': 'empty',
  'Fűtés': 'Heating',
  'Fűtés áram nélkül is?': 'Heating without power too?',
  'Fűtés hatásfoka (%)': 'Heating efficiency (%)',
  'Fűtés: mennyi tüzelő kell': 'Heating: how much fuel is needed',
  'Fűtött terület (m²)': 'Heated area (m²)',
  'Átlagos (100 W/m²)': 'Average (100 W/m²)',
  'igen (kandalló, kályha, fa)': 'yes (fireplace, stove, wood)',
  'igen (kút kézi szivattyúval, ciszterna)': 'yes (well with hand pump, cistern)',
  'Energia (kcal/100 g)': 'Energy (kcal/100 g)',
  'Emelkedés összesen (m)': 'Total ascent (m)',
  '5% nátrium-hipoklorit (a szokásos háztartási)': '5% sodium hypochlorite (standard household)',
  '10% (ipari)': '10% (industrial)',
  'A hipó töménysége (nézd meg az üvegen)': 'Bleach concentration (check the bottle)',

  // --- Morze, hang, feny ---
  'WPM': 'WPM',
  'Hz': 'Hz',
  'Hang:': 'Sound:',
  'Hangerő:': 'Volume:',
  'Hangmagasság:': 'Pitch:',
  'Fényerő:': 'Brightness:',
  'Fehér': 'White',
  'hang és fény, hálózat nélkül': 'sound and light, without a network',
  "Vétel sebesség (magától követi a jelet, kézzel is állíthatod):": "Receive speed (follows the signal by itself, you can also set it by hand):",
  "Vétel-sebesség: magától követi a vett Morze tempóját, és a csúszkát is odaállítja. Kézzel is állíthatod, onnan követi tovább.": "Receive speed: follows the pace of the incoming Morse by itself and moves the slider there. You can also set it by hand; it follows on from there.",
  'Vétel sebesség (állítsd a vett Morze tempójához):':
    'Receive speed (set it to the pace of the incoming Morse):',
  'Érzékenység (balra érzékenyebb, jobbra szigorúbb a zajra):':
    'Sensitivity (left: more sensitive, right: stricter about noise):',
  'Ha nem indul a kamera.': 'If the camera does not start.',
  'Internet nem kell.': 'No internet needed.',
  'A szoba képe': 'Room image',
  'A szoba kódja': 'Room code',
  'Helyzet (GPS)': 'Position (GPS)',
  'Helyzetem küldése': 'Send my position',
  'A mostani helyzetem': 'My current position',
  'Iratai az Irattárcában': 'Their documents in the Document wallet',
  'Amikor akut helyzetben kell döntened': 'When you must decide in an acute situation',
  'Amikor éjszaka nem hagy aludni a félelem': 'When fear keeps you awake at night',
  'Gyerekekkel és idősekkel': 'With children and elderly',
  'Amit a rendszer garantál:': 'What the system guarantees:',
  'Amit nem garantál:': 'What it does not guarantee:',
  'Amit vészhelyzetben tudni kell róla (nem kötelező)':
    'What is worth knowing in an emergency (optional)',
  'Ez a közös titok. Aki ismeri, az olvassa a kódjaidat, aki nem, annak értelmetlen betűsor. Add meg ugyanazt a jelszót azon a készüléken is, amelyik olvasni fogja.':
    'This is the shared secret. Whoever knows it can read your codes; to anyone else it is a meaningless string. Enter the same password on the device that will read it.',
  'PIN beállítása': 'Set PIN',
  'Állíts be egy PIN-t (4-6 számjegy)': 'Set a PIN (4-6 digits)',
  'Biblia letöltése': 'Download the Bible',
  'Ezen a készüléken még nincs feloldott modul.': 'No module has been unlocked on this device yet.',
  'Ezt látják a többiek. Ugyanaz, mint a helyi szobában.':
    'This is what the others see. The same as in the local room.',
  'Előbb vedd fel a Háztartásnál, kik vagytok — a lista onnan jön.':
    'First add who you are under Household — the list comes from there.',
  'Előbb vedd fel a Háztartásnál, kik vagytok. A lista abból dolgozik.':
    'First add who you are under Household. The list works from that.',
  'Előbb vegyél fel helyszínt a Háztartásnál. Alapesetben az otthon az első.':
    'First add a location under Household. By default home comes first.',
  'A törlés itt van, nem a listában — hogy ne lehessen véletlenül megnyomni.':
    'Deletion is here, not in the list — so it cannot be pressed by accident.',
  'A mentős beolvashatja. Az adat a QR-ben van, nem megy szerverre.':
    'A paramedic can scan it. The data is in the QR code; it is not sent to a server.',
  'Egészségügyi vészhelyzeti adatok. A mentős beolvashatja (nyílt QR). Helyben tárolva.':
    'Medical emergency data. A paramedic can scan it (open QR). Stored locally.',
  'Egészségügyi adatok (nem kötelező, de ebből tudjuk, mi kell a csomagba)':
    'Health data (optional, but it tells us what the pack needs)',
  'Allergia (koppints, amennyi kell — a mezőbe írja be, ott át is írhatod)':
    'Allergies (tap as many as needed — they go into the field, where you can edit them)',
  'Kié (üresen hagyva: közös)': 'Whose (left empty: shared)',
  'Melyik készlethez tartozik (több is lehet)': 'Which stock it belongs to (can be several)',
  'Tárolási hely (több is lehet)': 'Storage location (can be several)',
  'A koordináta többféle alakban mehet:': 'The coordinate can be given in several forms:',
  'Három rövid jel, szünet, ismétlés — ez a nemzetközi vészjelzés. Hangosabban és tovább hallatszik, mint a kiabálás.':
    'Three short signals, a pause, then repeat — this is the international distress signal. It carries louder and longer than shouting.',
  'A kód alatti betűsor UGYANEZ az adat. Faxon a képet küldd, morzével a betűsort.':
    'The letter string under the code is THE SAME data. Send the image by fax, the letter string by Morse.',
  'A lejátszás ugyanazzal a gombbal indul és áll. Nincs külön Állj gomb — ha újra rákoppintasz, leáll.':
    'Playback starts and stops with the same button. There is no separate Stop button — tap it again and it stops.',
  'A wattóra és a watt nem ugyanaz, és ezt szokás összekeverni.':
    'Watt-hour and watt are not the same, and they are commonly confused.',
  'A wattóra (Wh) azt mondja meg, MEDDIG megy; a watt (W) azt, hogy MIT tudsz egyáltalán ráakasztani. Egy 2000 wattórás gép sem indít el egy 2000 wattos vízforralót, ha csak 600 wattot tud leadni — akkor sem, ha tele van.':
    'The watt-hour (Wh) tells you HOW LONG it runs; the watt (W) tells you WHAT you can hang on it at all. Even a 2000 Wh unit will not start a 2000 W kettle if it can only deliver 600 W — not even when fully charged.',
  'Helyszínenként: kik érkeznek oda, hány napra, és elég-e az ott lévő víz és élelem.':
    'Per location: who arrives there, for how many days, and whether the water and food there is enough.',

  // --- 2. koteg: SOS, Morze, SSTV kepernyok ---
  'Telepítés a kezdőképernyőre': 'Install to home screen',
  'Nemzetközi vészjelzés Morzéval: SOS (··· ─── ···), folyamatosan ismételve. Fénnyel, hang nélkül — a hangjelzés lent külön van, mert az mást tud.':
    'International distress signal in Morse: SOS (··· ─── ···), repeated continuously. With light, without sound — the audible signal is separate below, because it does something different.',
  'TEKERD FEL A HANGERŐT. Az app a telefon hangerejét nem tudja felülírni, tehát ha az le van halkítva, a síp is halk lesz.':
    'TURN THE VOLUME UP. The app cannot override the phone volume, so if that is turned down, the whistle will be quiet too.',
  'Hz. A 3-4 kHz a legjobban hallható tartomány, ezért sípol ott a mentőmellény sípja is.':
    'Hz. 3-4 kHz is the most audible range, which is why a lifejacket whistle sounds there too.',
  'Percenként 110 koppanás. Nyomd a mellkas közepét a koppanás ütemére, körülbelül 5-6 centit, és hagyd teljesen visszaemelkedni.':
    '110 beats per minute. Press the centre of the chest to the beat, about 5-6 centimetres deep, and let it rise back fully.',
  'Ez ütemadó, nem oktatás. Mentő: 112. Ha van a közelben defibrillátor, valaki hozza, de te ne hagyd abba.':
    'This is a metronome, not training. Ambulance: 112. If a defibrillator is nearby, have someone fetch it, but do not stop.',
  '— egységes európai segélyhívó (mentő, tűzoltó, rendőrség). Térerő nélkül is hívható, ha van bármilyen hálózat a közelben.':
    '— the single European emergency number (ambulance, fire, police). It can be dialled without your own signal, if any network is nearby.',
  'A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan. Töltsd ki a':
    'Your emergency card (blood type, allergies, medication, contact) shows up here quickly. Fill it in under',
  'szekcióban.': 'section.',
  'Írj be szöveget, játszd le hangként vagy fénnyel, vagy vegyél kamerával/mikrofonnal.':
    'Type text, play it as sound or light, or receive with the camera / microphone.',
  'Próbaidő: még 14 nap. A lejárat után sem áll le semmi.':
    'Trial period: 14 days left. Nothing stops working after it expires.',
  'Szöveg': 'Text',
  'Sebesség:': 'Speed:',
  'Ismétlés (folyamatos)': 'Repeat (continuous)',
  'Lejátszás': 'Play',
  'Villogtatás (Lejátszás és SOS is):': 'Flashing (both Play and SOS):',
  'Képernyő': 'Screen',
  'Vaku': 'Flash',
  'Mindkettő': 'Both',
  'Vétel: KAMERA (fény → szöveg)': 'Receive: CAMERA (light → text)',
  'Kamera vétel indítása': 'Start camera reception',
  'Nagyítás (távoli fényhez):': 'Zoom (for a distant light):',
  'Indítsd, és irányítsd a kamerát egy Morzét villogó fényre (pl. egy másik telefon vakuja). A háttér legyen sötét, a fény a kép KÖZEPÉN. A fény-küszöb magától hangolódik; a "Fényerő" sáv és a lámpa mutatja, mit lát. A "Vétel sebesség" csúszkát állítsd a vett Morze tempójához, amíg tisztán jönnek a betűk.':
    'Start it and point the camera at a light flashing Morse (for example another phone’s flash). Keep the background dark and the light in the CENTRE of the frame. The light threshold tunes itself; the "Brightness" bar and the lamp show what it sees. Set the "Receive speed" slider to the pace of the incoming Morse until the letters come through cleanly.',
  'Vétel: MIKROFON (hang → szöveg)': 'Receive: MICROPHONE (sound → text)',
  'Mikrofon vétel indítása': 'Start microphone reception',
  'FONTOS: külön eszközről vedd (az egyik telefon lejátssza, a másikon fut a vétel) -- ugyanazon a telefonon a mikrofon foglalása miatt a lejátszás halkul. Tartsd a Morze-hangot a mikrofon közelébe. Csendes környezet a legjobb; a hangerő-sáv és a lámpa mutatja, mit hall. Kalibrálás: a "Vétel sebesség" csúszkát told lassan, amíg a szövegben tisztán, hibátlanul jönnek a betűk.':
    'IMPORTANT: receive from a separate device (one phone plays, the other receives) -- on the same phone the microphone claim makes playback quieter. Hold the Morse sound near the microphone. A quiet environment works best; the volume bar and the lamp show what it hears. Calibration: move the "Receive speed" slider slowly until the letters come through cleanly and without errors.',
  'Tanuló: Morze → szöveg (kézi: illeszd be . és -, szóköz a betűk közt, / a szavak közt)':
    'Trainer: Morse → text (manual: paste . and -, space between letters, / between words)',
  'A kétirányú kód-tábla (nemzetközi + magyar Á/É/Ö/Ü) és az interaktív tanuló a végleges appban bővül. Egyelőre a fenti mező visszafejt bármilyen beírt Morze-jelet.':
    'The two-way code table (international + Hungarian Á/É/Ö/Ü) and the interactive trainer will be extended in the final app. For now the field above decodes any Morse you type in.',
  'Kép küldése hangként (Martin M1). Játszd egy másik telefon SSTV-vevőjébe vagy egy rádió mikrofonjába.':
    'Send an image as sound (Martin M1). Play it into another phone’s SSTV receiver or into a radio microphone.',
  'Mód': 'Mode',
  'Martin M1 (320×256, működik)': 'Martin M1 (320×256, working)',
  'Robot36 (hamarosan)': 'Robot36 (coming soon)',
  'Scottie S1 (hamarosan)': 'Scottie S1 (coming soon)',
  'PD120 (hamarosan)': 'PD120 (coming soon)',
  'Kép': 'Image',
  'Kódolás és lejátszás': 'Encode and play',
  'Küldéshez: a másik eszközön indíts SSTV-vevőt (pl. Robot36 vagy MMSSTV) Martin M1 módban, és tartsd a hangszórót a mikrofonjához. A VIS-fejléc automatikus, a vevő magától felismeri a módot. Egy kép ~114 másodperc.':
    'To send: start an SSTV receiver on the other device (for example Robot36 or MMSSTV) in Martin M1 mode, and hold the speaker to its microphone. The VIS header is automatic, so the receiver detects the mode by itself. One image takes about 114 seconds.',
  'Vétel (hang → kép)': 'Receive (sound → image)',
  'Vétel indítása': 'Start reception',
  'Martin M1-et fogad. Tartsd a telefont a hangszóró vagy a rádió közelébe, és a kép soronként épül fel. Csendes környezet kell hozzá: a mikrofon minden mást is hall. Hangfájlból is megy, ha valaki felvételt küld.':
    'It receives Martin M1. Hold the phone near the speaker or the radio and the image builds up line by line. It needs a quiet environment: the microphone hears everything else too. It also works from an audio file if someone sends a recording.',

  // --- Tudastar temanevek ---
  'Készletezés': 'Stockpiling',
  'Menedék és tábor': 'Shelter and camp',
  'Városi túlélés': 'Urban survival',
  'Tájékozódás és mozgás': 'Navigation and movement',
  'Jelek és időjárás olvasása': 'Reading signs and weather',
  'Közlekedés és mobilitás': 'Transport and mobility',
  'Lelki felkészültség': 'Mental preparedness',
  'Tartós áramszünet': 'Long power outage',
  'Tűzvédelem otthon': 'Fire safety at home',
  'Pénz és megélhetés': 'Money and livelihood',
  'Víznyerés és víztisztítás': 'Water sourcing and purification',
  'Mikro-önellátás': 'Micro self-sufficiency',

  // --- Keszlet-tetel urlap, terkep ---
  'Új tétel': 'New item',
  'Mennyiség': 'Quantity',
  'Mennyiség (db)': 'Quantity (pcs)',
  'Súly (gramm/db)': 'Weight (grams each)',
  'Vonalkód / QR beolvasása': 'Scan barcode / QR',
  'Lejárat (opcionális)': 'Expiry (optional)',
  'Lejárat': 'Expiry',
  'Tétel adatlapja': 'Item details',
  'Tétel törlése': 'Delete item',
  '+6 hónap': '+6 months',
  '+1 év': '+1 year',
  '+2 év': '+2 years',
  '+5 év': '+5 years',
  'Turista / domborzat': 'Hiking / terrain',
  'Műhold': 'Satellite',
  'Pont ide, ahol vagyok': 'Point here, where I am',
  'Terület letöltése': 'Download area',
  'Koppints a térképre pont hozzáadásához (menedék, víz, találkozópont). Ha ott':
    'Tap the map to add a point (shelter, water, meeting point). If you are',
  'állsz': 'standing there',
  ', ahová a pont való, a': ', where the point belongs, the',
  'pontosabb: az a GPS-edet használja, nem azt, ahová az ujjad ér. A':
    'is more accurate: it uses your GPS, not where your finger lands. The',
  'a mostani koordinátádat adja tovább üzenetben, a': 'passes on your current coordinates in a message, while',
  'Pontok kimentése': 'Export points',
  'pedig GPX-fájlba menti mindet, amit a térkép- és navigációs programok beolvasnak. A pontok és a jelenlegi pozíció helyben tárolódnak. A':
    'saves all of them into a GPX file that map and navigation programs can read. The points and your current position are stored locally. The',
  'a most látható kivágást menti a készülékre, három nagyítási szinten — utána térerő nélkül is megvan.':
    'saves the currently visible area to the device at three zoom levels — after that you have it without any signal.',

  // --- Veszkartya, Biblia, tarca ---
  'Rendszeres gyógyszerek': 'Regular medication',
  'Rendszeres gyógyszer': 'Regular medication',
  'Krónikus betegségek': 'Chronic conditions',
  'Krónikus betegség': 'Chronic condition',
  'Vészhelyzeti kontakt (név, telefon)': 'Emergency contact (name, phone)',
  'QR-kód generálása': 'Generate QR code',
  'A QR a fenti adatokat kódolja. Kihelyezheted a zárolt képernyődre vagy kinyomtatva a hátizsákodba.':
    'The QR encodes the data above. You can put it on your lock screen or print it for your backpack.',
  'Mindenkinek, akinek van profilja a Háztartásnál. Az adat onnan jön: vércsoport, allergia, gyógyszer, betegség. A vészhelyzeti kontakt a fenti közös mezőből.':
    'For everyone who has a profile under Household. The data comes from there: blood type, allergy, medication, condition. The emergency contact comes from the shared field above.',
  'Még nincs profil. A Háztartásnál vedd fel, kik vagytok — mindenki kap egy kártyát.':
    'No profile yet. Add who you are under Household — everyone gets a card.',
  'Mind nyomtatása': 'Print all',
  'Megtérő ima': 'Prayer of repentance',
  'Letöltés': 'Download',
  // A SZoVEG NEM MONDHAT KAROLIT AZ ANGOL LAPON (Thomas lelete, 2026-08-23 22:3x).
  // A `bibFajl()` angolul a `kjv.json`-t tolti le -- a felirat tehat MAST igert, mint amit a
  // gomb csinal, es epp azon a lapon, ahol a felhasznalo eldonti, letolt-e 4 megabajtot.
  // Ez nem forditas-kerdes volt, hanem TEVES ALLITAS: a szo szerinti forditasom orokolte a
  // magyar forditas nevet.
  // SUGO-ABRAK (SVG) feliratai. Ezek NEM `.screen` nezetben allnak, hanem sugo-abrakban,
  // ezert a kulso mero (`pp-i18n-kulso-ellenorzes.mjs`) nem jart rajtuk -- ugyanaz a vakfolt,
  // mint a Biblia belso kepernyoi voltak. Kezzel atnezve, 2026-08-23.
  'halvány': 'dim',
  'erős': 'bright',
  'É': 'N',
  'az üvegről olvasd le': 'read it off the glass',
  '‹ Fejezetek': '‹ Chapters',
  '‹ Előző': '‹ Previous',
  'Következő ›': 'Next ›',
  'A kiemeléseidhez előbb töltsd le a Bibliát.': 'Download the Bible first to see your highlights.',
  'A teljes Károli-fordítás egyszer letöltődik (kb. 4 MB), és utána internet nélkül is elérhető marad.':
    'The full King James Version downloads once (about 4 MB) and stays available offline afterwards.',
  'Vészhelyzeti igék': 'Verses for emergencies',
  'Próféciák': 'Prophecies',
  'Kiemeléseim': 'My highlights',
  'Token tárca': 'Token wallet',
  'Titkos kódok PIN mögött, helyben tárolva. Ugyanaz a PIN nyitja, mint az Irattárcát.':
    'Secret codes behind a PIN, stored locally. The same PIN opens it as the Document wallet.',
  'Új PIN (4-6 számjegy)': 'New PIN (4-6 digits)',
  'TESZT ÜZEMMÓD: a PIN most': 'TEST MODE: the PIN is currently',
  ', előre kitöltve. Éles használat előtt ez kikerül, és saját PIN-t adsz meg.':
    ', pre-filled. Before real use this goes away and you set your own PIN.',
  'A web-demó nem ad operációs rendszer szintű titkosítást: a kódok a böngésző tárolójában vannak. Valódi seed-mondatot vagy éles banki kódot majd a végleges appba tegyél (biometrikus zár, titkosított tár). Itt a folyamatot próbáld ki. A teljes mentésbe ez a rész SOSEM kerül bele.':
    'The web demo does not provide operating-system level encryption: the codes live in the browser storage. Put a real seed phrase or a live banking code into the final app only (biometric lock, encrypted store). Here you can try the process. This part is NEVER included in a full backup.',
  'Súgó — hogyan fizetek, hogyan kérek': 'Help — how to pay, how to request',
  'Fizetés, három lépés.': 'Payment, three steps.',
  '1. Ő megmutatja az azonosító-QR-jét, vagy küld egy kérést. Te beolvasod: ettől nálad kitöltődik az űrlap.':
    '1. They show their identity QR or send a request. You scan it, and the form fills in on your side.',
  '2. Megadod az összeget és hogy miért, majd Fizetés elkészítése. A telefonod aláírja, és mutat egy QR-t.':
    '2. You enter the amount and the reason, then Create payment. Your phone signs it and shows a QR.',
  'Ő beolvassa ezt a QR-t.': 'They scan that QR.',
  'Az érték ekkor kerül át hozzá — a telefonja ellenőrzi az aláírást, és jóváírja.':
    'That is when the value moves to them — their phone verifies the signature and credits it.',
  'Pénzkérés.': 'Requesting money.',
  'Kérek gírát, beírod mennyit és miért, kapsz egy QR-t. Ő beolvassa, és nála kitöltve áll a fizetés, csak jóvá kell hagynia.':
    'Request gira, you enter how much and why, and you get a QR. They scan it, the payment stands filled in on their side, and they only need to approve it.',
  'Miért két beolvasás?': 'Why two scans?',
  'Mert az ő kódja csak azt mondja meg, kinek és mennyit. Az értéket a te aláírásod viszi át, és az a te QR-edben van. Amíg ő nem olvasta be, a tétel nálad „átadásra vár” jelöléssel áll.':
    'Because their code only says to whom and how much. The value is carried by your signature, and that is in your QR. Until they have scanned it, the item stands on your side marked "awaiting handover".',
  'Minden a két telefon között megy, kamerával és képernyővel. Se szerver, se térerő.':
    'Everything happens between the two phones, with camera and screen. No server, no signal.',
  'Van, ahol a böngésző nem tud QR-t olvasni (jellemzően iPhone Safari). Ilyenkor a Beillesztés szövegből gomb ugyanazt tudja: a fizetés elkészítése után a QR alatti Szöveg másolása gombbal átküldöd a tételt üzenetben, ő pedig a Beillesztés szövegből gombbal beveszi. Az ellenőrzés ugyanúgy megtörténik, az aláírás a szövegben is benne van.':
    'On some devices the browser cannot read QR codes (typically iPhone Safari). There the Paste from text button does the same: after creating the payment, use Copy text under the QR to send the item in a message, and they take it in with Paste from text. Verification happens the same way — the signature is in the text as well.',
  'a nevedben más nem tud fizetni (a titkos kulcs a telefonodon marad), és egy aláírt tétel utólag nem módosítható észrevétlenül.':
    'nobody can pay in your name (the private key stays on your phone), and a signed item cannot be altered later without it showing.',
  'offline a kettős költést megelőzni nem lehet. Ha valaki ugyanazt a gírát két embernek adja, az akkor derül ki, amikor a két tétel találkozik — és a saját aláírása bizonyítja. Ezért érdemes időnként összefésülni a könyveket a közösségben.':
    'offline double spending cannot be prevented. If someone gives the same gira to two people, it comes to light when the two items meet — and their own signature proves it. This is why it is worth reconciling the books in the community from time to time.',
  'Rekesz': 'Compartment',
  'Kripto-kulcsok': 'Crypto keys',
  'Új bejegyzés': 'New entry',
  'Seed-mondatnál a papír-másolat nem elavult ötlet: egy elveszett vagy letörölt telefon a kulcsot is viszi. Amit ide beírsz, azt tartsd meg máshol is.':
    'For a seed phrase a paper copy is not an outdated idea: a lost or wiped phone takes the key with it. Keep whatever you type here somewhere else too.',
  'PIN-nel védett helyi tároló okmányokhoz (szig, jogosítvány, TAJ, biztosítás, forgalmi).':
    'PIN-protected local store for documents (ID card, driving licence, health card, insurance, vehicle registration).',
  'A PIN és a dokumentumok CSAK ezen az eszközön, a böngésződben tárolódnak — a vészkártyával ellentétben ezt csak te nyithatod meg. Figyelem: a web-demó nem nyújt OS-szintű titkosítást; VALÓDI okmányokat majd a végleges appba tölts (biometrikus zár, titkosított tár). Itt a folyamatot teszteld.':
    'The PIN and the documents are stored ONLY on this device, in your browser — unlike the emergency card, only you can open this. Note: the web demo does not provide OS-level encryption; upload REAL documents only into the final app (biometric lock, encrypted store). Here you can test the process.',
  'Szűrés: kinek az iratait mutassuk': 'Filter: whose documents to show',
  'Új dokumentum': 'New document',
  'Ehhez a dokumentumhoz: kié? Személy, állat vagy jármű. Ha egyiket sem jelölöd, közösként mentjük.':
    'For this document: whose is it? A person, an animal or a vehicle. If you mark none, we save it as shared.',
  'Magyar': 'Hungarian',
  'véglegesen': 'permanently',
  'szól erre a készülékre, nincs lejárata és nincs megújítás. Ha kódot kaptál, itt válthatod be.':
    'applies to this device, with no expiry and no renewal. If you received a code, you can redeem it here.',
  'Kód beváltása': 'Redeem code',
  'Névjegy': 'About',
  'PrepperPapa — vészhelyzeti prepper eszköztár.': 'PrepperPapa — an emergency prepper toolkit.',
  'Verzió:': 'Version:',
  'Web-demo a gyors próbához. A végleges app: Flutter, Google Play.':
    'Web demo for a quick try. The final app: Flutter, Google Play.',
  'Teljes fejadattal számol: 3 liter fő/nap. Ez a helyben maradáshoz és az autós úthoz való — nyaraló, tábor, otthon.':
    'It calculates with a full ration: 3 litres per person per day. This is for staying put and for car travel — holiday home, camp, home.',
  'Ki tartozik a háztartáshoz és hol vannak a helyszíneid. A készültségi számítás ebből dolgozik.':
    'Who belongs to the household and where your locations are. The readiness calculation works from this.',
  'Még nincs családtag felvéve.': 'No family member added yet.',
  'Még nincs állat felvéve.': 'No animal added yet.',
  "Még nincs jármű felvéve. Autó, kisbusz, lakókocsi vagy hajó lehet.": "No vehicle added yet. It can be a car, a van, a caravan or a boat.",
  'Még nincs helyszín felvéve. Alapesetben az otthon az első.':
    'No location added yet. By default home comes first.',
  'Születési dátum': 'Date of birth',
  'Ki ő': 'Who they are',
  'kiskorú': 'minor',
  'Neme (gyereknél)': 'Sex (for a child)',
  'lány': 'girl',
  'kutya': 'dog',
  'macska': 'cat',
  'Teherbírás (kg)': 'Load capacity (kg)',
  'Testtömeg (kg)': 'Body weight (kg)',
  'Laktóz': 'Lactose',
  'Glutén': 'Gluten',
  'Tojás': 'Egg',
  'Szója': 'Soy',
  'Penicillin': 'Penicillin',
  'Pollen': 'Pollen',
  'Poratka': 'Dust mite',
  'Latex': 'Latex',
  'Jód': 'Iodine',
  'Típus': 'Type',
  '· vagy egy bemásolt Google Térkép-link. Ha nem tudom értelmezni, szólok — üresen nem mentem el.':
    '· or a pasted Google Maps link. If I cannot interpret it, I will say so — I will not save it empty.',
  'Megközelítés': 'Access',
  'nem (csak árammal/gázzal)': 'no (only with electricity / gas)',
  'Víz áram nélkül is?': 'Water without power too?',
  'nem (vezetékes/szivattyús)': 'no (mains / pumped)',
  'Napi fűtésigény (kWh)': 'Daily heating demand (kWh)',
  'Kijáratok száma': 'Number of exits',
  'Több': 'More',
  'Morze · fax · helyi szoba': 'Morse · fax · local room',
  'Térkép': 'Map',
  'Kockázatelemzés': 'Risk analysis',
  'Mit vigyek?': 'What to pack?',
  'Titkosított üzenet · helyzet · lista': 'Encrypted message · position · list',
  'Ezen a készüléken a böngésző nem éri el a légnyomás-szenzort, ezért kézzel kell bevinni az értéket. A telefonos appban magától mér majd. Addig is: írj be egy értéket, és a trendet innentől számolja.':
    'On this device the browser cannot reach the air-pressure sensor, so the value has to be entered by hand. The phone app will measure it by itself. Until then: type a value, and the trend is calculated from here on.',
  'Két mérés kell a trendhez.': 'Two readings are needed for a trend.',
  'Ha autóval hegyre mész, a nyomás esik, de nem jön vihar: száz méter emelkedés körülbelül 12 hPa. Ilyen napon ne vedd komolyan a jelzést.':
    'If you drive up a hill, the pressure drops but no storm is coming: a hundred metres of ascent is about 12 hPa. On a day like that, do not take the warning seriously.',
  'Kalkulátor': 'Calculator',
  'Meddig visz el egy powerbank vagy egy akku': 'How far a power bank or a battery gets you',
  'Mennyi fa vagy gáz kell N napra': 'How much wood or gas is needed for N days',
  'Mennyi gyűlik össze a tetőről': 'How much collects from the roof',
  'Menetidő': 'Travel time',
  'Meddig tart gyalog, és odaérsz-e világosban': 'How long it takes on foot, and whether you arrive in daylight',
  'Villám': 'Lightning',
  'Milyen messze van a vihar': 'How far the storm is',
  'Víztisztítás': 'Water purification',
  'Mennyi hipó kell, és meddig kell forralni': 'How much bleach is needed, and how long to boil',
  'Mennyi víz': 'How much water',
  'Milyen a víz': 'What the water is like',
  'Tiszta, átlátszó': 'Clear, transparent',
  'Zavaros, hideg vagy színes': 'Cloudy, cold or coloured',
  'Tengerszint feletti magasság (méter)': 'Altitude above sea level (metres)',

  // --- 3. koteg: kalkulatorok, titkos kod, helyi szoba, lampa ---
  'Saját / kézi megadás': 'Own / manual entry',
  'Powerbank 20 000 mAh (~74 Wh)': 'Power bank 20,000 mAh (~74 Wh)',
  'Kapacitás (Wh)': 'Capacity (Wh)',
  'Max. teljesítmény (W)': 'Max. output (W)',
  'Jackery Explorer 1000: 1002 Wh tárolt energia, 1000 W folyamatos kimenet':
    'Jackery Explorer 1000: 1002 Wh stored energy, 1000 W continuous output',
  'Mit üzemeltetnél? (hány darab · watt · naponta mennyit)': 'What would you run? (how many · watts · how long daily)',
  'nem használom': 'not using it',
  'negyed óra': 'quarter hour',
  'fél óra': 'half an hour',
  '1 óra': '1 hour',
  '2 óra': '2 hours',
  '3 óra': '3 hours',
  '4 óra': '4 hours',
  '5 óra': '5 hours',
  '6 óra': '6 hours',
  '8 óra': '8 hours',
  '10 óra': '10 hours',
  '12 óra': '12 hours',
  '16 óra': '16 hours',
  'egész nap': 'all day',
  'Telefon töltés': 'Phone charging',
  'LED lámpa': 'LED lamp',
  'Wifi router': 'Wi-Fi router',
  'Rádió, PMR': 'Radio, PMR',
  'Laptop': 'Laptop',
  'TV': 'TV',
  'Szivattyú, kút': 'Pump, well',
  'Vízforraló': 'Kettle',
  'Van napelemed?': 'Do you have a solar panel?',
  'Melyik évszakban?': 'Which season?',
  'Milyen idő van?': 'What is the weather like?',
  'A panel névleges teljesítménye (W)': 'Rated panel power (W)',
  '+ Saját eszköz hozzáadása': '+ Add your own device',
  'Mi ez? (pl. oxigénkoncentrátor)': 'What is it? (e.g. oxygen concentrator)',
  'Megnézem a boltban ↗': 'View it in the shop ↗',
  'nyár (június-augusztus)': 'summer (June-August)',
  'tavasz (március-május)': 'spring (March-May)',
  'ősz (szeptember-november)': 'autumn (September-November)',
  'tél (december-február)': 'winter (December-February)',
  'derült, napos': 'clear, sunny',
  'változó, felhős': 'variable, cloudy',
  'borult, esős': 'overcast, rainy',
  'nincs napelem': 'no solar panel',
  'saját panel — megadom a wattot': 'my own panel — I enter the watts',
  'Panel': 'Panel',
  'Milyen a ház': 'What the house is like',
  'Jól szigetelt (60 W/m²)': 'Well insulated (60 W/m²)',
  'Rossz, régi (140 W/m²)': 'Poor, old (140 W/m²)',
  'Mivel fűtesz': 'What you heat with',
  'PB-gáz palackkal': 'With LPG cylinder',
  'Tetőfelület vízszintes vetülete (m²)': 'Horizontal projection of the roof (m²)',
  'Mennyi eső esett vagy várható (mm)': 'How much rain fell or is expected (mm)',
  'Menetidő gyalog': 'Walking time',
  'Távolság (km)': 'Distance (km)',
  'Milyen terep': 'What the terrain is like',
  'Jó út, sík (5 km/h)': 'Good road, flat (5 km/h)',
  'Ösvény, erdei út (4 km/h)': 'Trail, forest track (4 km/h)',
  'Nehéz terep, hó, sár (3 km/h)': 'Rough terrain, snow, mud (3 km/h)',
  'Mit viszel': 'What you carry',
  'Könnyű, napi cucc': 'Light, everyday kit',
  'Megpakolt hátizsák': 'Loaded backpack',
  'Nehéz teher vagy gyerekkel': 'Heavy load or with a child',
  'Villám: milyen messze van': 'Lightning: how far away it is',
  'Nyomd meg a villanáskor, aztán újra, amikor meghallod a dörgést.':
    'Press it at the flash, then again when you hear the thunder.',
  'Villanás': 'Flash',

  // --- Titkos kod ---
  'Jelszó': 'Password',
  'Jelszó mentése': 'Save password',
  'Nincs saját jelszó.': 'No own password.',
  'beállítva': 'set',
  "Tudástár: a cikkekből most már tizennyolc helyen gomb vezet át az app funkcióira (Készlet, Vészkártya, Kockázatelemzés, Tudástár).": "Knowledge base: buttons now lead from the articles to the app functions in eighteen places (Inventory, Emergency card, Risk assessment, Knowledge base).",
  "Irattárca és Token tárca: a tartalom mostantól titkosítva tárolódik, a kulcs a PIN-edből készül, a PIN-t nem tároljuk. Az első belépéskor a meglévő adatod magától átkerül titkosított formába. Fontos: elfelejtett PIN mellett a tartalom nem állítható vissza.": "Document wallet and Token wallet: contents are now stored encrypted, the key is made from your PIN, and the PIN is not stored. On first unlock your existing data is moved to encrypted form automatically. Important: if you forget the PIN, the contents cannot be recovered.",
  "A kódok titkosítva tárolódnak ezen az eszközön: a kulcs a PIN-edből készül (AES-256), magát a PIN-t nem tároljuk. Ha elfelejted a PIN-t, a tartalom nem állítható vissza, ezért a seed-mondatról tarts papírmásolatot is. A teljes mentésbe ez a rész SOSEM kerül bele.": "Codes are stored encrypted on this device: the key is made from your PIN (AES‑256), and the PIN itself is not stored. If you forget the PIN, the contents cannot be recovered, so keep a paper copy of your seed phrase too. This section is NEVER included in the full backup.",
  "A dokumentumok CSAK ezen az eszközön tárolódnak, a PIN-edből képzett kulccsal titkosítva (AES-256) — a vészkártyával ellentétben ezt csak te nyithatod meg. A PIN-t nem tároljuk: ha elfelejted, a dokumentumok nem állíthatók vissza.": "Documents are stored ONLY on this device, encrypted with a key made from your PIN (AES‑256) — unlike the emergency card, only you can open this. The PIN is not stored: if you forget it, the documents cannot be recovered.",
  "Tudástár: a cikkekben álló hivatkozások (például „a 20.2 cikk”) kattinthatók, és a cikkekből gomb vezet át az app megfelelő funkciójára.": "Knowledge base: references in the articles (for example “article 20.2”) are clickable, and buttons in the articles lead to the matching app function.",
  "Vagyonkezelő: új, választós oldalak saját legördülő listával.": "Assets: new selection pages with their own drop-down list.",
  "Térkép, navigáció: alul egy sáv mutatja a hátralévő és a megtett utat, a sebességet és a várható érkezést; a sarkában a leállító gomb.": "Map, navigation: a bar at the bottom shows the distance left and done, your speed and the expected arrival; the stop button is in its corner.",
  "Térkép, navigáció: tervezett útvonalon a ▲ gomb megnyitja a szintgrafikont: hol vagy, merre emelkedik vagy lejt az út, mennyit kell még mászni, és mikor jön a következő emelkedő.": "Map, navigation: on a planned route the ▲ button opens the elevation profile: where you are, where the route climbs or descends, how much climbing is left, and when the next climb comes.",
  "Tudástár: ötvenegy új kép került a cikkekbe, így már mind a kilencvenkilenc cikkben legalább két kép van.": "Knowledge base: fifty-one new images were added, so all ninety-nine articles now have at least two images.",
  "Közös ima · stopper": "Group prayer · timer",
  "Indítás": "Start",
  "Folytatás": "Resume",
  "Újra": "Again",
  "perc": "min",
  "Letelt az idő. Az Újra gombbal még egy kör indul.": "Time is up. Tap Again for one more round.",
  "Vége. Az Újra gombbal elölről kezdheted.": "Done. Tap Again to start over.",
  "Második kör": "Second round",
  "Ima-stopper": "Prayer timer",
  "Útvonal": "Route",
  "Körút": "Loop",
  "igen": "yes",
  "MTSZ-szám": "MTSZ no.",
  "Jelzés festve": "Marking painted",
  "Weboldal": "Website",
  "Az út mentén": "Along the route",
  "menetidő": "walking time",
  "érkezés": "arrival",
  "ó": "h",
  "p": "min",
  "Magassági adat nélkül, az emelkedőkkel nem számolva.": "Without elevation data, climbs not counted.",
  "Bezárás": "Close",
  "Imák: a lista alján egy kis harang gomb nyitja a közös imához való stoppert. Te állítod be a perceket; lejáratkor halkan csilingel, és amíg nem nyúlsz hozzá, tízmásodpercenként újra jelez. Az Újra gomb még egy kört indít, annak a végén egyszer csilingel, és leáll.": "Prayers: a small bell button at the bottom of the list opens the timer for group prayer. You set the minutes; when it ends it chimes softly and repeats every ten seconds until you touch it. Again starts one more round, which chimes once at the end and stops.",
  "Imák: a stopper harang gombja az app saját ikon-stílusát kapta.": "Prayers: the timer's bell button now uses the app's own icon style.",
  "Tudástár: harminckilenc új kép került a prémium cikkekbe, így már szinte minden cikkben van kép.": "Knowledge base: thirty-nine new images were added to the premium articles, so almost every article now has an image.",
  "Tudástár: a már letöltött prémium cikkek is frissülnek, ha új változat jelenik meg. A PMR446 cikkbe bekerült a csatornák frekvencia-táblázata és a digitális PMR.": "Knowledge base: premium articles you already downloaded now update when a new version appears. The PMR446 article now includes the channel frequency table and digital PMR.",
  "Tudástár: tizenöt prémium cikkben megjelentek a képek, tizenegy cikk új képet kapott.": "Knowledge base: images now appear in fifteen premium articles, and eleven articles got a new image.",
  "Újdonságok: a korábbi bejegyzések is olvashatók most már minden nyelven.": "What's new: earlier entries can now also be read in every language.",
  // Ujdonsagok v43.126-v43.138 (2026-10-12 22:1x, hianypotlas)
  "Szobák: ha a „Csak neki” címzés látszik, az üzenet biztosan privátként megy el. Ha a címzés egy másik szobából maradt itt, az app nem küldi el csoportba, hanem szól, hogy válaszd ki újra a címzettet.": "Rooms: if the “Only to” addressing is shown, the message is sure to go as private. If the addressing was left over from another room, the app does not send it to the group but tells you to choose the recipient again.",
  "Vagyonkezelő: az euró, a dollár és a nemesfémek árfolyama internet mellett magától frissül (a Magyar Nemzeti Bank és a tőzsdei ár alapján). A kézzel beírt érték marad.": "Assets: the euro, dollar and precious-metal rates update by themselves when online (based on the Hungarian National Bank and market prices). A value you typed in by hand is kept.",
  "Vagyonkezelő: kikerültek belőle a cégspecifikus részek, csak az általános pénzügyi funkciók maradtak.": "Assets: the company-specific parts were removed, only the general finance functions remain.",
  "Vagyonkezelő: bal oldali menü (a bal felső gombbal). Minden menüpont egy témát mutat, így nem kell végtelen hosszan görgetni. A főoldalon a számlák egyenlege csempékben.": "Assets: left-side menu (via the top-left button). Each menu item shows one topic, so there is no endless scrolling. The main page shows account balances in tiles.",
  "Visszajelzés: a „Bejelentéseim” alatt látod a saját bejelentéseidet, és hogy hol tart mindegyik. A kijavított hibánál egy koppintással jelezheted, hogy nálad is működik-e.": "Feedback: under “My reports” you see your own reports and where each one stands. For a fixed bug you can confirm with one tap whether it works for you too.",
  "Újdonságok: verziónként itt olvasható, mi változott és mi lett javítva.": "What's new: here you can read, version by version, what changed and what was fixed.",
  "Biblia: egyszerre több olvasási tervet is követhetsz, a „Másik terv” gombbal válthatsz köztük. A haladás tervenként megmarad.": "Bible: you can follow several reading plans at once and switch between them with the “Other plan” button. Progress is kept per plan.",
  "Biblia: „A Biblia egy év alatt” heti felosztásban is választható, 52 hétre bontva.": "Bible: “The Bible in a year” can also be chosen in a weekly split, divided into 52 weeks.",
  "Biblia: a „Terv leállítása” gomb a terv tetején is ott van, nem kell a lista aljáig görgetni érte.": "Bible: the “Stop plan” button is now also at the top of the plan, no need to scroll to the bottom of the list.",
  "Biztonsági javítások a Szobákban és a prémium tartalmak védelmében.": "Security fixes in Rooms and in the protection of premium content.",
  "Szobák: elrejtett üzenetről már nem jön értesítés.": "Rooms: you no longer get notifications about hidden messages.",
  "Gíra: ha a névjegy elsőre nem ért célba, magától újra elküldődik.": "Gira: if your contact card did not get through the first time, it is sent again automatically.",
  "Gíra: a közösséghez később csatlakozó tag is megkapja a közösség jelzéseit.": "Gira: a member who joins the community later also receives the community's signals.",
  "A kezdőképernyőre tett webes ikon ugyanaz lett, mint a telepített alkalmazásé.": "The web icon placed on the home screen is now the same as the installed app's.",
  "Térkép: a funkciók ikonos csempékben jelennek meg, az iránytű folyamatosan forog.": "Map: the functions appear as tiles with icons, and the compass turns continuously.",
  "Szobák: a tagok egymásnak is átadhatják a szoba titkosító kulcsát, így új eszközön is olvasható minden korábbi üzenet.": "Rooms: members can also pass the room's encryption key to each other, so all earlier messages are readable on a new device too.",
  "Titkos QR: a családi jelszó egy összecsukható sor lett az oldal tetején, színes jelzéssel (be van-e állítva). Így az oldal rögtön a kód készítésével kezdődik.": "Secret QR: the family password is now a collapsible row at the top of the page, with a coloured marker (whether it is set). So the page starts right away with creating a code.",
  "Közös jelszó: koppints a Családi jelszó sorra, és adj meg egy mondatot, amit csak ti tudtok. Ugyanaz kell mindkét telefonon; mentsd el.": "Shared password: tap the Family password row and enter a sentence only you know. The same one is needed on both phones; save it.",
  'nincs beállítva': 'not set',
  'Saját jelszó nélkül a beépített kulcs véd, ami MINDEN PrepperPapa-készüléken megvan. Az idegen, aki sima szkennerrel ránéz, csak betűsort lát, de aki letöltötte az appot, elolvassa. Ez álcázás, nem titkosítás.':
    'Without your own password the built-in key protects it, and that key is on EVERY PrepperPapa device. A stranger looking at it with a plain scanner only sees a string of letters, but anyone who downloaded the app can read it. This is camouflage, not encryption.',
  'Kód készítése': 'Create code',
  'Mit teszel bele?': 'What do you put in it?',
  'Lista': 'List',
  'Személyes adat': 'Personal data',
  'Koordináta': 'Coordinate',
  'Lista címe': 'List title',
  'Sorok (soronként egy)': 'Rows (one per line)',
  'QR készítése': 'Create QR',
  'Morze fénnyel': 'Morse with light',
  'Morze hanggal': 'Morse with sound',
  'Rádión ne add le.': 'Do not transmit it over radio.',
  'Az amatőr sávokon tilos információrejtő módszert alkalmazni (15/2013. NMHH rendelet 15. § (6) e)), és a forgalmazást közérthető nyelven kell folytatni (15. § (4)). Ez a kód egyikbe sem fér bele, és a saját jelszó nélkül készült változatra is áll. Morzézni szabad, rejtett tartalmat leadni nem. QR-kódban, papíron, kézből átadva használható.':
    'On amateur bands it is prohibited to use any method that conceals information (Hungarian NMHH decree 15/2013, § 15 (6) e)), and traffic must be conducted in plain language (§ 15 (4)). This code fits neither rule, and that also holds for the variant made without your own password. Sending Morse is allowed, transmitting hidden content is not. It can be used in a QR code, on paper, handed over in person.',
  'Kód beolvasása': 'Scan code',
  'Vagy írd be a betűsort (morzéból, faxról)': 'Or type in the letter string (from Morse, from fax)',
  'Megfejtés': 'Decoded',

  // --- Helyi szoba, szobak ---
  'Ahogy üzenni tudsz, amikor a telefonhálózat nem segít. Válaszd ki, mivel próbálkozol: a helyi szoba szöveget visz a közeledben lévőknek, a hang pedig ott is átmegy, ahol semmilyen hálózat nincs.':
    'How you can send a message when the phone network is no help. Choose what to try: the local room carries text to those near you, while sound gets through even where there is no network at all.',
  'szöveg, hálón': 'text, over a network',
  'Szöveg a közeledben lévőknek, közös hálón, internet nélkül':
    'Text to those near you, on a shared network, without internet',
  // MESH (Fonok, 2026-10-06 21:44 es 21:47): a helyi szoba neve es leirasa a mesh-halozatot
  // is kimondja -- ez ugyanaz a szoba, csak a nevevel egyutt most a technologiat is viszi.
  'Helyi szoba (mesh)': 'Local room (mesh)',
  'Mesh-hálózat: szöveg a közeledben lévőknek, internet nélkül': 'Mesh network: text to those near you, without internet',
  'Szobák (interneten)': 'Rooms (over the internet)',
  'Zárt csoportok távolról is, belépés a szoba gazdájának jóváhagyásával':
    'Closed groups from a distance too, joining with the room owner’s approval',
  'Rövid üzenet hanggal vagy fénnyel, vétel kamerával és mikrofonnal':
    'Short message with sound or light, received with camera and microphone',
  'Kép átküldése hangban, rádión is': 'Sending an image as sound, over radio too',
  'névtelen (te)': 'anonymous (you)',
  'Ez a modul akkor működik, ha a készülékek egy hálón vannak, és azon valaki futtatja a szobát. Internet nem kell hozzá.':
    'This module works when the devices are on one network and someone runs the room on it. No internet is needed.',
  'kapcsold be a telefonodon a mobil hotspotot (vagy használjatok egy közös routert), a többiek csatlakozzanak rá, és nyissák meg ugyanazt a címet, amit te. Aki megnyitotta, az bent van a szobában.':
    'turn on the mobile hotspot on your phone (or use a shared router), have the others connect to it and open the same address as you. Whoever opened it is in the room.',
  'Közös jelszó. Aki ugyanezt adja meg, az olvassa az üzeneteket, akinek nincs meg, annak értelmetlen betűsor marad. A kulcsot NE a szobában küldd el, hanem élőszóban vagy papíron add át.':
    'A shared password. Whoever enters the same one reads the messages; for anyone without it, it stays a meaningless string. Do NOT send the key in the room — pass it on in person or on paper.',
  'Nincs kulcs. Az üzenetek nyíltan mennek: aki a hálón van és megnyitja a szobát, olvassa őket.':
    'No key. Messages go in the clear: anyone on the network who opens the room reads them.',
  'Szobák': 'Rooms',
  'Még egy szobában sem vagy benne.': 'You are not in any room yet.',
  'Nyitott közösségek. Egy koppintás, és megy a jelentkezésed — a szoba gazdája engedi be.':
    'Open communities. One tap and your request goes out — the room owner lets you in.',
  'Új szoba': 'New room',
  'Te leszel a gazdája. Aki csatlakozni akar, kérelmet küld, és te döntöd el, beengeded-e. A szoba kódját add meg nekik, azzal találnak rá.':
    'You will be the owner. Anyone who wants to join sends a request and you decide whether to let them in. Give them the room code so they can find it.',
  'Szoba létrehozása': 'Create room',
  'Írd be a szoba kódját. A gazda jóváhagyásáig nem látod az üzeneteket.':
    'Enter the room code. Until the owner approves, you cannot see the messages.',
  'Kérelem küldése': 'Send request',
  'A böngészőben letiltottad az értesítést. A telefon beállításainál lehet visszaadni — innen nem tudom.':
    'You blocked notifications in the browser. They can be restored in the phone settings — I cannot do it from here.',
  'Próba': 'Test',
  'Szoba': 'Room',
  'Kapcsolódás...': 'Connecting...',
  'Sürgős': 'Urgent',
  'Meghívó': 'Invitation',
  'Készíts egy meghívót, és küldd át annak, akit be akarsz hívni. Ő megnyitja, és bent van — nem kell külön jóváhagynod, és nem kell a szoba kódját közhírré tenni.':
    'Create an invitation and send it to the person you want to invite. They open it and they are in — no separate approval is needed, and the room code does not have to be made public.',
  'Meghívó készítése': 'Create invitation',
  'Vagy legyen nyitott:': 'Or make it open:',
  'ha kirakod, a szoba megjelenik mindenkinél a „Csatlakozz" listában, és jelentkezni tudnak rá. Beengedni akkor is te engeded be őket.':
    'if you list it, the room appears in everyone’s "Join" list and they can apply. Even then, it is you who lets them in.',
  'Jelenjen meg a Csatlakozz listában': 'Show it in the Join list',
  'Ez látszik a csempén, ezen ismerik fel. Fényképet válassz, ne rajzot — kis méretben az mond valamit. A telefonod a képet magától lekicsinyíti.':
    'This shows on the tile, this is how it is recognised. Choose a photo, not a drawing — at small size a photo says something. Your phone shrinks the image automatically.',
  'Kép törlése': 'Delete image',
  'Ez a másik út: aki a kódot ismeri, kérelmet küldhet, és te döntöd el, beengeded-e. Meghívóval egyszerűbb.':
    'This is the other way: anyone who knows the code can send a request and you decide whether to let them in. An invitation is simpler.',
  'Kihagyom': 'Skip',
  'Tovább': 'Next',
  'Tartsd a vonalkódot a keretbe.': 'Hold the barcode inside the frame.',
  'Húzd az ujjad: vízszintben a szín, függőlegesen a fényerő. Koppints a képernyőre a gombok elrejtéséhez / előhozásához.':
    'Drag your finger: horizontally the colour, vertically the brightness. Tap the screen to hide / show the buttons.',
  'Piros': 'Red',
  'Zöld': 'Green',
  'Villogás': 'Flashing',
  'LED ki': 'LED off',

  // --- NEM FORDITANDO, de a szotarban ALL, hogy a meres tudja: ez SZANDEKOSAN azonos.
  // (marka- es szabvanynevek, mertekegysegek, sajat termeknev)
  'PrepperPapa': 'PrepperPapa',
  'SOS': 'SOS',
  'SSTV': 'SSTV',
  'WAV': 'WAV',
  'WPM': 'WPM',
  'Hz': 'Hz',
  'CPAP': 'CPAP',
  'ForTiPrep': 'ForTiPrep',
  'Leaflet': 'Leaflet',
  '© OpenStreetMap': '© OpenStreetMap',
  'Jackery Explorer 240': 'Jackery Explorer 240',
  'Jackery Explorer 1000': 'Jackery Explorer 1000',
  'PowerMax 2400 Pro': 'PowerMax 2400 Pro',
  'LiFePO4 100 Ah (12 V)': 'LiFePO4 100 Ah (12 V)',
  '47°29\'52.4"N 19°02\'24.7"E': '47°29\'52.4"N 19°02\'24.7"E',

  // --- 4. koteg: A KESZULTSEGI CSEMPEK ES A DEMO-ADAT (Fonok, 2026-08-23 20:19:
  // "a teszt adatok meg tovabbra is magyarul vannak" -- kepernyokeppel).
  // A `PP_DEMO_EN` (az index.html-ben) csak az ELoALLITASKOR futott le; ami mar be volt
  // vive, az magyarul maradt. A felulet-fordito mostantol azt a szotarat is hasznalja,
  // ezek pedig azok a sorok, amik egyikbol sem voltak meg.
  'otthon': 'home',
  'Teszt autó': 'Test car',
  'Teszt Apa': 'Test Dad',
  'Teszt Anya': 'Test Mum',
  'Teszt Gyerek': 'Test Child',
  'Víz': 'Water',
  'Étel': 'Food',
  'Azaz': 'That is',
  'nincs ide rendelt készlet': 'no stock assigned here',
  'Készültség': 'Readiness',
  'Készlet': 'Stock',
  'Kockázat': 'Risk',
  'Közösség': 'Community',
  'Iránytű': 'Compass',
  'Fény': 'Light',
  'Vagyonkezelő': 'Assets',
  'Otthon ': 'Home ',

  // --- 5. koteg: ami a 4. utan MARADT (merve, nem talalgatva) ---
  'nincs megadva, ki jön': 'not set who is coming',
  'Nincs megadva, ki érkezik ide.': 'It is not set who arrives here.',
  'Kik érkeznek ide:': 'Who arrives here:',
  'Mi van itt (nincs ide rendelt tétel)': 'What is here (no item assigned)',
  'Sípolás': 'Whistle',
  'Ütem indítása': 'Start the beat',
  'vércsoport hiányzik · nincs ismert allergia': 'blood type missing · no known allergy',
  'Rögzítés a térképre (itt vagyok most)': 'Pin to the map (I am here now)',
  'Kezdőlapon látszik ✓': 'Shown on the home screen ✓',
  '+ Új családtag': '+ New family member',
  'Otthon · készültség: nincs adat': 'Home · readiness: no data',
  'Jármű · készültség: nincs adat': 'Vehicle · readiness: no data',
  'Ez a készülék nem ad iránytű-adatot, vagy nincs rá engedély. A nap és hold rész ettől függetlenül működik.':
    'This device gives no compass data, or permission is missing. The sun and moon section works independently of it.',
  'víz 5 liter elemlámpa gyógyszerek': 'water 5 litres\ntorch\nmedication',
  'Ennyi holdfénynél nyílt terepen lámpa nélkül is lehet menni.':
    'With this much moonlight you can move in open terrain without a lamp.',
  'A számítás a térkép utolsó nézete alapján készült, néhány perc pontossággal.':
    'The calculation is based on the last map view, accurate to within a few minutes.',
  'A böngészőben letiltottad. A telefon beállításainál lehet visszaadni.':
    'You blocked it in the browser. It can be restored in the phone settings.',
  'Kapcsolódva · egyedül vagy a szobában': 'Connected · you are alone in the room',
  'növekvő hold, 82%': 'waxing moon, 82%',

  // --- Attributumok: placeholder / title / aria-label ---
  'Súgó': 'Help',
  'Frissítés': 'Refresh',
  'Éjszakai mód': 'Night mode',
  'Tájoló': 'Compass',
  'Kalkulátorok': 'Calculators',
  'Gyülekező': 'Gathering',
  'Másikat': 'Another one',
  'Másik tanács': 'Another tip',
  'Keresés a tudástárban…': 'Search the knowledge base…',
  'Megnevezés (pl. Palackozott víz)': 'Name (e.g. Bottled water)',
  'a dobozról, pl. 380': 'from the box, e.g. 380',
  'pl. 37 vagy 2000': 'e.g. 37 or 2000',
  'teli tank, liter vagy kWh': 'full tank, litres or kWh',
  'Egyéb hely megnevezése': 'Name of the other location',
  'Teljes képernyő': 'Full screen',
  'Húzd, ha görgetnél': 'Drag to scroll',
  'Nyomtatás': 'Print',
  'Keresés: szó, vagy hely (Ján 3,16)': 'Search: a word, or a reference (John 3:16)',
  'Betűméret': 'Text size',
  'Megnevezés (pl. Gmail helyreállítási kódok)': 'Name (e.g. Gmail recovery codes)',
  'A kód, kulcs vagy seed-mondat': 'The code, key or seed phrase',
  'Megjegyzés (hol használod, melyik fiók)': 'Note (where you use it, which account)',
  'Megnevezés (pl. Személyi igazolvány)': 'Name (e.g. ID card)',
  'Kód (pl. PP-MINTA-1234)': 'Code (e.g. PP-SAMPLE-1234)',
  'mennyit bír hátizsákban': 'how much it can carry in a backpack',
  'pl. glutén, kivi — vesszővel': 'e.g. gluten, kiwi — comma separated',
  'pl. cukorbetegség': 'e.g. diabetes',
  'pl. Bogáncs': 'e.g. Rex',
  'egy mondat, ha a GPS nem visz oda': 'one sentence, in case GPS does not take you there',
  'üresen: alapterület vagy típus szerint': 'empty: by floor area or type',
  'üresen: típus szerint (ház 75, lakókocsi 80)': 'empty: by type (house 75, caravan 80)',
  '0 = földszint': '0 = ground floor',
  'A nap pályája ma': 'The sun’s path today',
  'Holdfázis: növekvő hold': 'Moon phase: waxing moon',
  'Értesítés a telefonra': 'Notification to the phone',
  'watt darabonként': 'watts each',
  'ó/nap': 'h/day',
  'óra/nap': 'hours/day',
  'óra naponta': 'hours per day',
  'összesen W': 'total W',
  'napos óra': 'sunny hours',
  'pl. egy mondat, amit csak ti tudtok': 'e.g. a sentence only you know',
  'Amit át akarsz adni.': 'What you want to pass on.',
  'pl. Találkozó, Rejtek': 'e.g. Meeting point, Cache',
  'pl. Vércsoport és gyógyszerek': 'e.g. Blood type and medication',
  'Amit csak a családod olvashat.': 'What only your family may read.',
  'pl. Feri, vagy Kovácsék': 'e.g. Joe, or the Smiths',
  'Írd ide az üzenetet': 'Type the message here',
  // A PELDANEV IS FORDITANDO, NEM CSAK A KERET (Thomas, 2026-08-23). Az elso valtozatom
  // "e.g. Cegléd round" volt: angol mondat magyar helynevvel. Nem hiba, de idegen -- egy
  // peldanak ismerosnek kell lennie annak, aki olvassa.
  'pl. Ceglédi kör': 'e.g. Neighbourhood group',
  'a szoba kódja': 'the room code',
  'Bezárás': 'Close',
  'Ige — Máté 6,34': 'Verse — Matthew 6:34',

  // --- 6. koteg: AMIT A LAP MAGA JELENTETT (`scripts/pp-i18n-hiany.mjs`) ---
  // Ez a lista nem a forrasbol, hanem a FUTO lapbol jon: a fordito feljegyzi, mire nem
  // talalt szabalyt. Nulla hamis talalat -- ami itt all, azt Fonok tenylegesen latta.
  'A tájoló indul…': 'The compass is starting…',
  'Nem kaptunk engedélyt az iránytűhöz. A nap és hold rész ettől függetlenül működik.':
    'We did not get permission for the compass. The sun and moon section works independently of it.',
  'db': 'pcs',
  'lejár:': 'expires:',
  'LEJÁRT': 'EXPIRED',
  '1 hónapon belül lejár': 'expires within a month',
  'fél éven belül lejár': 'expires within six months',
  'hatótáv kb.': 'range approx.',
  'kg teherbírás': 'kg load capacity',
  'Mi van itt': 'What is here',
  'tétel': 'items',
  'Mi van itt (nincs ide rendelt tétel)': 'What is here (no item assigned)',
  'Térképen ✓ — pozíció frissítése': 'On the map ✓ — update position',
  'térképen ✓': 'on the map ✓',
  'készültség': 'readiness',
  'készültség: nincs adat': 'readiness: no data',
  'fő': 'people',
  'nap': 'days',
  'Teszt-adatok betöltve: 3 fő, 1 háziállat, 4 helyszín (közte autó),':
    'Demo data loaded: 3 people, 1 pet, 4 locations (including a car),',
  'készlet-tétel ✓ (a neveket az adatlapjukon átírhatod)':
    'stock items ✓ (you can rename them on their detail pages)',
  'óra': 'h',
  'perc': 'min',
  'Napkeltéig még': 'Sunrise in',
  'Napnyugtáig még': 'Sunset in',
  'A nap': 'The sun set',
  '-e ment le.': ' ago.',
  'Ezen a szélességen ma nem megy le a nap.': 'At this latitude the sun does not set today.',
  'Ezen a szélességen ma nem kel fel a nap.': 'At this latitude the sun does not rise today.',
  'napra': 'days',
  'Víz:': 'Water:',
  'Élelem:': 'Food:',
  'Áram:': 'Power:',
  'Fűtés:': 'Heating:',
  'Étel': 'Food',
  'nincs megmérve': 'not measured',
  'nincs ide rendelt áramforrás': 'no power source assigned here',
  '— a szükséglet': '— the requirement would be',
  'lenne': 'for',
  '— powerbank, power station és napelem-termelés; az üzemanyag a fűtésnél számít':
    '— power bank, power station and solar output; fuel counts towards heating',
  'A gyűrű a vízre és az élelemre vonatkozik: a gyengébbiket mutatja.':
    'The ring covers water and food: it shows the weaker of the two.',
  'A leggyengébb': 'The weakest link:',
  'A gyűrű a jelen lévő típusok átlagát mutatja, a színe a leggyengébbet.':
    'The ring shows the average of the types present; its colour shows the weakest one.',
  'Leggyengébb:': 'Weakest:',
  '— a készültség ezt mutatja, mert a hiányzó láncszem dönt.':
    '— readiness shows this, because the missing link decides.',
  'élelem': 'food',
  'víz': 'water',
  'fűtés': 'heating',
  'áram': 'power',
  'Áramszünetre: hordozható energia': 'For a power cut: portable energy',
  'Hirdetés': 'Advertisement',
  'delelés': 'solar noon',
  'A nap pályája ma': 'The sun’s path today',
  'Holdfázis:': 'Moon phase:',
  'Használható fény': 'Usable light between',
  'és': 'and',
  'között: a napkelte előtt és a napnyugta után is van még annyi, amivel lehet menni.':
    ': there is still enough light before sunrise and after sunset to move.',
  'A számítás': 'The calculation is based on',
  'alapján készült, néhány perc pontossággal.': ', accurate to within a few minutes.',
  'a térkép utolsó nézete': 'the last map view',
  'egy mentett pontod': 'one of your saved points',
  'a mostani helyzeted': 'your current position',
  'növekvő hold': 'waxing moon',
  'fogyó hold': 'waning moon',
  'újhold': 'new moon',
  'telihold': 'full moon',
  'első negyed': 'first quarter',
  'utolsó negyed': 'last quarter',
  'Ennyi holdfénynél nyílt terepen lámpa nélkül is lehet menni.':
    'With this much moonlight you can move in open terrain without a lamp.',
  'Ma éjjel gyakorlatilag nincs holdfény, számolj lámpával.':
    'Tonight there is practically no moonlight — count on a lamp.',
  'Közepes holdfény: nyílt terepen segít, erdőben nem.':
    'Medium moonlight: it helps in open terrain, not in woodland.',
  'mérés az elmúlt 48 órából. Ezen a készüléken a böngésző nem éri el a légnyomás-szenzort, ezért kézzel viszed be; a telefonos appban magától fog mérni.':
    'readings in the last 48 hours. On this device the browser cannot reach the air-pressure sensor, so you enter it by hand; the phone app will measure it by itself.',
  'Ez a böngésző nem tud értesítést megjeleníteni': 'This browser cannot show notifications',
  'Bekapcsolva — riasztáskor a telefonod jelez': 'On — your phone alerts you on a warning',
  'Kikapcsolva': 'Off',
  'Adás indítása': 'Start transmitting',
  'Adás megy — koppints újra': 'Transmitting — tap again',
  'Adás': 'Transmit',
  'Vétel': 'Receive',
  'Vétel megy — koppints újra': 'Receiving — tap again',
  'Megy — koppints újra': 'Running — tap again',
  'Áll — koppints újra': 'Stopped — tap again',
  'Fény-SOS': 'Light SOS',
  'alapok — mindenkinek': 'basics — for everyone',
  'részletek, mélyebben': 'details, in depth',
  'ennyi áll a tárcádban': 'this much is in your wallet',
  'nincs internet · minden a kódban': 'no internet · everything is in the code',
  'a leggyengébb': 'the weakest link',
  'Indítás': 'Start',
  'Számolók': 'Calculators',
  'Nem sikerült a helymeghatározás:': 'Location could not be determined:',
  'A térkép utolsó nézete alapján is tudok számolni, nyisd meg egyszer a térképet.':
    'I can also calculate from the last map view — open the map once.',
  'Ehhez előbb le kell tölteni a Biblia szövegét (a Biblia képernyőn, egyszer).':
    'This first needs the Bible text to be downloaded (on the Bible screen, once).',
  // --- BIBLIA-KEPERNYo (Thomas merese, 2026-08-23 22:3x: a 4 MB letoltese UTAN epulo
  // nezetek MIND magyarok voltak -- azok minden korabbi bejarasbol kimaradtak).
  '‹ Könyvek': '‹ Books',
  'Ószövetség': 'Old Testament',
  'Újszövetség': 'New Testament',
  '300+ találat (az elsőket mutatom)': '300+ matches (showing the first ones)',
  'találat': 'matches',
  'Nincs találat erre:': 'No match for:',
  // A csupasz 'fejezet' es 'Egesz fejezet' EN-BOL IS hianyzott (2026-09-06, Fonok
  // kepernyokepe a Kolosszeiek konyv fejezet-racsanal): a szamos mintak megvoltak,
  // ez a ket kulcs (label es gomb, szam nelkul) nem.
  'fejezet': 'Chapter',
  'Egész fejezet': 'Full chapter',
  'Még nincs kiemelt vers. Nyiss meg egy fejezetet, és koppints egy versre.':
    'No highlighted verse yet. Open a chapter and tap a verse.',
  'Klasszikus prófétai szakaszok. Az értelmezésük felekezetenként eltér — itt a szöveg áll, magyarázat nélkül.':
    'Classic prophetic passages. Their interpretation differs between denominations — here the text stands on its own, without commentary.',
  // Veszhelyzeti igek -- a nyolc kategoria
  'Amikor félsz': 'When you are afraid',
  'Amikor nem tudod, mit tegyél': 'When you do not know what to do',
  'Amikor kifogytál az erődből': 'When your strength has run out',
  'Amikor veszteség ér': 'When loss comes',
  'Amikor félted a családodat': 'When you fear for your family',
  'Amikor az ellátás a kérdés': 'When provision is the question',
  'Amikor másokon kell segítened': 'When you have to help others',
  'Amikor a kitartás a tét': 'When endurance is at stake',
  // Profeciak -- az ot cimke
  'Jézus beszéde az utolsó időkről': 'Jesus’ discourse on the last days',
  'Dániel látomásai': 'The visions of Daniel',
  'A szenvedő szolga és a Messiás': 'The suffering servant and the Messiah',
  'Az utolsó idők jellemzői': 'Marks of the last days',
  'Ítélet és helyreállítás': 'Judgement and restoration',
  'teherbírás': 'load capacity',
  'Bogáncs': 'Rex',
  'Belépés': 'Sign in',
  'Betöltés...': 'Loading...',
  'Betöltés…': 'Loading…',
  'Értem': 'Got it',
  'Ha valaki ír egy szobádba, jelezzen a telefonod — akkor is, ha az app be van zárva.':
    'If someone writes in one of your rooms, let your phone alert you — even when the app is closed.',
  'Ehhez tudni kell, hol vagy. Nyomd meg a Mérés a helyzetemre gombot.':
    'This needs to know where you are. Press the Measure at my position button.',
  'Nézd meg most, mennyi üzemanyag van az autóban. Ha kevesebb mint fél tank, tankolj fel a héten, és onnantól tartsd ezt a szintet. Ez az egyetlen szokás, ami pénzbe nem kerül, mert azt a benzint úgyis megvennéd, csak korábban.':
    'Check now how much fuel is in the car. If it is less than half a tank, fill up this week and keep it at that level from then on. This is the one habit that costs nothing, because you would buy that petrol anyway — only sooner.',
  'Tudástár — Közlekedés és mobilitás': 'Knowledge base — Transport and mobility',
  'A lista a családtagjaidból áll össze, akiket a Háztartásnál vettél fel.':
    'The list is built from the family members you added under Household.',
  'A dokumentumok a telefonodon maradnak. Nem megy belőlük semmi sehova, felhőbe sem.':
    'The documents stay on your phone. Nothing goes anywhere from them, not to any cloud.',
  'A gomb be- és kikapcsol. Ugyanaz a gomb indítja az adást és állítja meg — nincs külön Állj.':
    'The button toggles on and off. The same button starts and stops transmitting — there is no separate Stop.',
  'A gyűrű a leggyengébb láncszemet mutatja, nem az átlagot. Egy hiányzó dolog lehúzza az egészet — és ez szándékos.':
    'The ring shows the weakest link, not the average. One missing item drags the whole thing down — and that is deliberate.',
  'A vétel és az adás ugyanazzal a gombbal kapcsol. Amíg megy, hagyd a telefont nyugton.':
    'Receiving and transmitting toggle with the same button. While it runs, leave the phone still.',
  "Egy témán belül két réteg van. Az alap- és az életmentő cikkek ingyenesek, mindenkinek.": "Each topic has two layers. The basic and the life-saving articles are free, for everyone.",
  'Ezt látja az, aki megtalálja a telefonodat. Csak azt írd bele, amit egy idegen is láthat.':
    'This is what someone who finds your phone will see. Only put in what a stranger may see.',
  'Felveszed az azimutot, és a tájoló megmutatja a visszautat is — nem kell fejben tartanod.':
    'You record the azimuth and the compass shows the way back too — you do not have to keep it in your head.',
  'Itt veszed fel a családot. Innen jön a fejadag-számítás és a helyszínek listája is.':
    'This is where you add the family. The ration calculation and the list of locations come from here.',
  'Keresés szó szerint, és amit megjelölsz, azt könyvjelzővel bármikor visszatalálod.':
    'Search word for word, and whatever you mark you can find again any time with a bookmark.',
  'Koppints a térképre, és ott új pontot veszel fel.': 'Tap the map to add a new point there.',
  'Több számoló van egy helyen — víz, élelem, üzemanyag. Nincs külön csempéjük, mind itt található.':
    'Several calculators in one place — water, food, fuel. They have no separate tile; they are all here.',
  'Új tételt a listához adsz: megadod, mi az, hova teszed, és mikor jár le.':
    'You add a new item to the list: what it is, where you put it, and when it expires.',
  'A gombok be- és kikapcsolnak. Ugyanaz a gomb indítja és állítja le a jelzést.':
    'The buttons toggle on and off. The same button starts and stops the signal.',
  'A QR-kód a TELJES adatot viszi, nem egy linket. Ezért működik akkor is, ha nincs internet — a másik telefon a kódból olvassa ki.':
    'The QR code carries the FULL data, not a link. That is why it works without internet too — the other phone reads it straight from the code.',
  'A vaku nem minden telefonon működik. Ha nem indul, használd a képernyő-fényt — az mindenhol megy.':
    'The flash does not work on every phone. If it does not start, use the screen light — that works everywhere.',
  'A szám azt mutatja, mennyi áll a tárcádban.': 'The number shows how much is in your wallet.',

  // --- TAJOLO-IRANYOK. Egy betus kulcsok, de a fordito TELJES szoveg-csomopontra
  // illeszt, tehat egy magaban allo "É" csak az iranytu cimkeje lehet.
  'É': 'N', 'D': 'S', 'K': 'E', 'Ny': 'W',
  'ÉK': 'NE', 'ÉNy': 'NW', 'DK': 'SE', 'DNy': 'SW',

  // --- A TARTALEK IGEK. Ezek a lapban allnak (nem a letoltott Bibliaban), tehat akkor is
  // megjelennek, ha a Biblia meg nincs letoltve -- es eddig ilyenkor MAGYARUL alltak ott
  // az angol feluleten is. A szoveg a most letoltott KJV-bol valo, betuhiven.
  'Példabeszédek 22,3': 'Proverbs 22:3',
  'Az eszes meglátja a bajt és elrejti magát; a bolondok pedig neki mennek és kárát vallják.':
    'A prudent man foreseeth the evil, and hideth himself: but the simple pass on, and are punished.',
  '2Timóteus 1,7': '2 Timothy 1:7',
  'Mert nem félelemnek lelkét adott nékünk az Isten; hanem erőnek és szeretetnek és józanságnak lelkét.':
    'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.',
  'Máté 6,34': 'Matthew 6:34',
  'Ne aggodalmaskodjatok tehát a holnap felől; mert a holnap majd aggodalmaskodik a maga dolgai felől. Elég minden napnak a maga baja.':
    'Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof.',
  // A ZSOLTAROK SZAMOZASA ELTER: a Karoli 46,2-3 a KJV-ben 46:1-2 (a magyar kiadas a
  // felirat-verset is szamozza). Ezert NEM eleg a szamot atirni -- ez a par a KJV
  // megfelelo KET verse, osszefuzve, ahogy a magyar oldalon is egyben all.
  'Zsoltárok 46,2-3': 'Psalm 46:1-2',
  'Isten a mi oltalmunk és erősségünk! igen bizonyos segítség a nyomorúságban. Azért nem félünk, ha elváltoznék is a föld, ha hegyek omlanának is a tenger közepébe.':
    'God is our refuge and strength, a very present help in trouble. Therefore will not we fear, though the earth be removed, and though the mountains be carried into the midst of the sea.',
  'Jakab 1,3': 'James 1:3',
  'Tudván, hogy a ti hiteteknek megpróbáltatása kitartást szerez.':
    'Knowing this, that the trying of your faith worketh patience.',

  // --- AZ IMAK SZoVEGE (Fonok kepernyokepe, 2026-08-23 20:54: a Biblia lapon a harom ima
  // MAGYARUL allt az angol feluleten). A cimuk mar fordult, a torzsuk nem -- az a rosszabb
  // eset, mert ugy nez ki, mintha kesz lenne.
  //
  // A HARMADIK (Megtero ima) IDEGEN SZoVEG: a hit.hu-rol valo, szo szerinti atvetel, egy
  // Fonok altal jovahagyott szo-elteressel. Itt FORDITAS all, nem egy angol nyelvteruleten
  // szokasos ima BEHELYETTESITESE -- mas ember imadsagat leforditani szabad, kicserelni nem.
  'Uram, Te látod, mi nyomaszt engem. Ma éjjel nem tudom megoldani, és nem is akarom azt hazudni Neked, hogy nem félek. Kérlek, vedd le rólam a holnap terhét, és adj erőt ahhoz, amit ma kell elhordoznom. Csendesíts le. Te őrködsz, én alhatok. Jézus nevében, ámen.':
    'Lord, you see what weighs on me. I cannot solve it tonight, and I do not want to lie to you that I am not afraid. Please take tomorrow’s burden off me, and give me strength for what I must carry today. Quiet me. You keep watch, so I can sleep. In Jesus’ name, amen.',
  'Uram, most kell döntenem, és nincs időm. Adj tiszta fejet, és őrizz meg a pániktól. Mutasd meg a következő egy lépést, nem az egészet, csak a következőt. Legyen erőm megtenni. Jézus nevében, ámen.':
    'Lord, I have to decide now, and I have no time. Give me a clear head and keep me from panic. Show me the next single step — not the whole way, only the next one. Give me the strength to take it. In Jesus’ name, amen.',
  'Mennyei Atyám! Az Úr Jézus Krisztus nevében megyek eléd. Elismerem, hogy mindenható, örökkévaló Isten vagy, az egész világmindenségnek a teremtője. Én is a Te teremtményed vagyok. Elismerem, hogy bűnös ember vagyok, és sokat vétkeztem ellened. De én ma elhatározom, hogy megtérek és elfogadom a Názáreti Jézus áldozatát, és elismerem, hogy erre az áldozatra nekem is szükségem van. Ezért a szívemet, életemet megnyitom. Kérlek Uram, jöjj a szívembe. Bocsásd meg a bűneimet, szabadíts meg engem a bűntől és annak minden következményétől! Hiszek Benned Jézus. Hiszem, hogy Te vagy az élő Istennek a Fia, ki meghaltál az én bűneimért és feltámadtál a halálból, hogy megigazítsál engem. Elfogadlak Uramnak, Megváltómnak, Szabadítómnak és átadom az életemet, szívemet Neked. Szabadíts meg Uram! Tiszta szívet teremts bennem! Te azt ígérted, hogy a zörgetőnek ajtó nyittatik. Én Isten jelenlétébe akarok kerülni, és Te vagy az Út. Kérlek, vezess engem a Mindenható jelenlétébe! Dicsérlek és áldalak. Szeretlek Uram szívemből, lelkemből, erőmből, a Názáreti Jézus nevében. Dicsőség Istennek, most és mindörökké! Ámen!':
    'Heavenly Father! I come before you in the name of the Lord Jesus Christ. I acknowledge that you are almighty, everlasting God, the creator of the whole universe. I too am your creature. I acknowledge that I am a sinful man, and that I have sinned much against you. But today I resolve to repent and to accept the sacrifice of Jesus of Nazareth, and I acknowledge that I too need that sacrifice. Therefore I open my heart and my life. I ask you, Lord, come into my heart. Forgive my sins, deliver me from sin and from all its consequences! I believe in you, Jesus. I believe that you are the Son of the living God, who died for my sins and rose from the dead to justify me. I accept you as my Lord, my Redeemer, my Deliverer, and I give my life and my heart to you. Deliver me, Lord! Create in me a clean heart! You promised that to him who knocks the door shall be opened. I want to come into God’s presence, and you are the Way. Please lead me into the presence of the Almighty! I praise you and bless you. I love you, Lord, with my heart, my soul and my strength, in the name of Jesus of Nazareth. Glory to God, now and for ever! Amen!',

  // --- FELTETELES ES DINAMIKUS SZoVEGEK (Fonok kepernyokepei, 2026-08-24 06:01) ---
  //
  // MIERT NEM VOLT ITT EGYIK SEM, holott a gyujtes 24 kepernyot bejart: MINDEGYIK CSAK
  // BIZONYOS ALLAPOTBAN JELENIK MEG. A "futes keves" figyelmeztetes akkor rajzolodik ki,
  // ha az adott helyszin futes-szazaleka 50 alatt van (Fonoknel a Caravan 19%-on all);
  // a szoba-sorok akkor, ha van egyaltalan szoba a listan. A gyujto a MEGJELENITETT
  // szoveget latja, tehat egy fel nem vett agrol nem tud. Ez nem a gyujto hibaja, hanem
  // a HATOKoRE -- es 2026-08-24 ota a `pp-i18n-forras.mjs` a FORRASBOL is keres.
  'fűtés kevés': 'low heating',
  'még egyedül': 'on your own so far',
  'te indítottad': 'you started it',
  'Csatlakozom': 'Join',
  'jelentkezés elküldve': 'request sent',
  'a gazda nem engedett be': 'the owner did not let you in',
  'jóváhagyásra vár': 'waiting for approval',
  'névtelen': 'anonymous',

  // --- AJANLAT-DOBOZOK TORZSSZoVEGE (`ajanlatok.json`) ---
  // A negy CIM mar benne volt a szotarban, a negy SZoVEG egyike sem. A kepernyokepen
  // pont ez latszik: angol cim alatt magyar bekezdes. Ket kulon mezo egy fajlban --
  // aki az egyiket felvette, a masikat nem latta.
  'Egy powerbank a telefonhoz kevés, ha a router és a lámpa is menne. Nézd meg, mekkora kapacitás kell három napra.':
    'One power bank is not enough for the phone if the router and the lamp are to run too. Check how much capacity you need for three days.',
  'A nyílt lángú fűtés zárt térben szén-monoxidot termel. Ha bent fűtesz, CO-érzékelő nem opció, hanem alapfelszerelés.':
    'Open-flame heating produces carbon monoxide in an enclosed space. If you heat indoors, a CO detector is not optional — it is basic equipment.',
  'Napi három liter fejenként, csak ivásra. Mellé egy szűrő vagy klórtabletta, ha a csapvíz eredete kétségessé válik.':
    'Three litres per person per day, for drinking alone. Add a filter or chlorine tablets in case the origin of the tap water becomes doubtful.',
  'Fejlámpa, hogy szabad maradjon a két kezed, és tartalék elem hozzá. A gyertya tűzveszély, nem megoldás.':
    'A head torch so both your hands stay free, and spare batteries for it. A candle is a fire hazard, not a solution.',

  // --- A KOCKAZATELEMZES FuTES-BLOKKJA (Fonok kepernyokepe, negyedik kep) ---
  // A blokk szamokat fuz ossze szoveggel, ezert a kodban all `ppForditSzoveg` hivasokkal
  // (index.html ~6020); ezek a darabjai.
  'Fűtés:': 'Heating:',
  '— ennyi jut ténylegesen a fűtésbe,': '— this is what actually reaches the heating,',
  'Nyers tüzelő:': 'Raw fuel:',
  '(tüzifa, fűtőolaj és gázpalack együtt) — ebből a berendezés': '(firewood, heating oil and gas cylinder together) — of which the appliance delivers',
  '%-ot ad át': '%',
  'Napi fűtésigény:': 'Daily heating demand:',
  // ==========================================================================
  // A 2026-08-24-I NAGY POTLAS -- 277 MERT HIANY (Fonok tizenegy kepernyokepe)
  // ==========================================================================
  // MIERT ILYEN NAGY EGY ADAG: 08-23-an azt jelentettem, hogy "0 magyar szoveg maradt".
  // A bongeszos mero valoban nullat adott -- de csak arra, ami AKKOR ki volt rajzolva.
  // Fonok sajat tesztadataival egy egesz kepernyo (Mit vigyek / csomaglista-generator)
  // elojott, ami az en ures appomban nem is letezett. A `pp-i18n-forras.mjs` (forras-alapu
  // mero) 277 valodi hianyt talalt. Reszletek: `app-nyelvi-valtozat-hianypotlas` skill.

  // --- A KEZDoLAPI CSEMPE ROVID SAV-CIMKEI (Fonok, 2026-08-24 06:21: "eleg csak Heat") ---
  // A `(csempe)` utotag NEM jelenik meg semmi: a kod kulcskent kepzi (`ppSavCimke`), es ha
  // nincs benne a szotarban, visszaesik a teljes alakra. A negy-oszlopos racsban a hosszabb
  // angol szo rafut a savra -- ezert a csempen rovid, a kockazatelemzesen teljes cimke all.
  'Víz (csempe)': 'Water',
  'Étel (csempe)': 'Food',
  'Fűtés (csempe)': 'Heat',
  'Áram (csempe)': 'Power',

  // --- Keszlet-kategoriak, kis- es nagybetus alak (a lista es a szuro mast hasznal) ---
  'KÖZÖS': 'SHARED',
  'Közös': 'Shared',
  'közös': 'shared',
  'Közös felszerelés': 'Shared gear',
  'Közös felszerelés (egyszer az egész csoportnak)': 'Shared gear (once for the whole group)',
  'kannás víz': 'water canister',
  'palackos víz': 'bottled water',
  'száraz élelmiszer': 'dry food',
  'romlandó': 'perishable',
  'tüzifa': 'firewood',
  'fűtőolaj': 'heating oil',
  'gázpalack': 'gas cylinder',
  'üzemanyag-készlet': 'fuel stock',
  'üzemanyag (mobilitás)': 'fuel (mobility)',
  'üzemanyag': 'fuel',
  'bébiétel': 'baby food',
  'háziállat': 'pet',
  'saját gyógyszer': 'own medication',
  'hátizsák': 'backpack',
  '1 készlet': '1 set',
  'Gyógyszer:': 'Medication:',
  'Vércsoport:': 'Blood type:',
  'Betegség:': 'Condition:',
  'Vércsoport-kártya:': 'Blood type card:',

  // --- optgroup feliratok (a keszlet-tetel urlapjan) ---
  'Élelmiszer': 'Food',
  'Elsősegély': 'First aid',
  'Eszközök - alvás/menedék': 'Gear - sleep / shelter',
  'Eszközök - főzés/tűzgyújtás': 'Gear - cooking / fire',
  'Eszközök - fűtés': 'Gear - heating',
  'Eszközök - világítás': 'Gear - lighting',
  'Eszközök - öltözet': 'Gear - clothing',
  'Eszközök - EDC': 'Gear - EDC',
  'Higiénia': 'Hygiene',
  'Mobilitás': 'Mobility',
  'Mobilitás:': 'Mobility:',

  // --- Felulet-gombok, cimkek ---
  'Mit vigyek': 'What to pack',
  'Fény-SOS (képernyő)': 'Light SOS (screen)',
  'Fény-SOS (vaku)': 'Light SOS (flash)',
  'Ürítés': 'Clear',
  'Pontok kimentése (GPX)': 'Export points (GPX)',
  'Teljes mentés': 'Full backup',
  'Visszatöltés': 'Restore',
  'Checklista nyomtatása': 'Print checklist',
  'Kezdő': 'Home',
  'Lámpa': 'Light',
  'Beállít': 'Settings',
  'LED be': 'LED on',
  'Nincs vaku': 'No flash',
  'Kamera vétel leállítása': 'Stop camera reception',
  'Mikrofon vétel leállítása': 'Stop microphone reception',
  'Másolás': 'Copy',
  'Beillesztés szövegből': 'Paste from text',
  'Bemutató-adatok betöltése': 'Load demo data',
  'A neved a közösségben': 'Your name in the community',
  'Összes kategória': 'All categories',
  'Összes készlet': 'All stocks',
  'Mennyiség (ml/db)': 'Quantity (ml each)',
  'Hol áll általában': 'Where it usually stands',
  'Miért (pl. 10 tojás, favágás)': 'Why (e.g. 10 eggs, wood cutting)',
  'Ez összesen': 'That is a total of',
  'kg vagy liter': 'kg or litres',
  'Nincs találat.': 'No results.',
  '(névtelen)': '(unnamed)',
  'nincs adat': 'no data',
  'Összesen': 'In total',
  'Élelem': 'Food',
  'hiányzik': 'missing',
  'Hiányzik': 'Missing',
  'személyre szóló': 'personal',
  'alap ruházat': 'basic clothing',
  'állat-specifikus': 'animal-specific',
  'autó': 'car',
  'pár': 'pairs',
  '1 pár': '1 pair',
  '1 pár (lábon)': '1 pair (worn)',
  'egy az egész csoportnak': 'one for the whole group',
  'kép': 'image',
  'PDF/fájl': 'PDF / file',
  'a tárban': 'in storage',
  'tárolt': 'stored',
  'átadásra vár': 'awaiting transfer',
  'Gíra': 'Gira',
  'Hány gírát kérsz': 'How many gira you request',
  'Hány gíra': 'How many gira',
  'Kinek (azonosító)': 'To whom (identifier)',
  'Neve (nem kötelező)': 'Name (optional)',
  'Kezdőlapon nem látszik': 'Not shown on the home screen',
  'Nincs napkelte vagy napnyugta': 'No sunrise or sunset',
  'Légnyomás az elmúlt órákban': 'Air pressure over the past hours',

  // --- Hibauzenetek, allapotok ---
  'Adj nevet a dokumentumnak.': 'Give the document a name.',
  'Nem sikerült.': 'It did not work.',
  'Nem sikerült:': 'It did not work:',
  'Nem sikerült a kamera:': 'The camera failed:',
  'Nem sikerült a mikrofon:': 'The microphone failed:',
  'Nem fért el: megtelt a tár. Törölj egy régi dokumentumot.':
    'It did not fit: the storage is full. Delete an old document.',
  'Add meg a PIN-t': 'Enter the PIN',
  '4-6 számjegy kell.': '4-6 digits are required.',
  'Hibás PIN.': 'Wrong PIN.',
  'Feldolgozás:': 'Processing:',
  'Feldolgozás…': 'Processing…',
  '(túl nagy fájl)': '(file too large)',
  '(nem sikerült beolvasni)': '(could not be read)',
  '(PDF, max 2 MB. Fényképezd le inkább — a fotót magamtól kicsinyítem)':
    '(PDF, max 2 MB. Better to photograph it — I shrink the photo myself)',
  'Még nincs dokumentum.': 'No document yet.',
  'Törlöd a dokumentumot?': 'Delete the document?',
  'Biztosan törlöd? Koppints újra': 'Are you sure? Tap again',
  'Előbb vegyél fel családtagot a Háztartásnál.': 'First add a family member under Household.',
  'Ezen az eszközön nincs helymeghatározás': 'This device has no location service',
  'Helymeghatározás…': 'Locating…',
  'Új változat érhető el (': 'A new version is available (',
  'Áramforrás hiányzik': 'No power source',
  'Kevés a tüzelő': 'Not enough fuel',
  'Kevés a víz': 'Not enough water',
  'Nincs fényforrás': 'No light source',
  'A tudástár üres.': 'The knowledge base is empty.',
  'zárt': 'locked',
  'Bővített tudástár': 'Extended knowledge base',
  'Ebben a témában': 'In this topic there are',
  'további cikk van, a bevezetőjüket fent olvashatod.':
    'more articles; you can read their introductions above.',
  'A teljes szövegük a bővített tudástár része, ami egyszeri feloldással, véglegesen elérhető.':
    'Their full text is part of the extended knowledge base, available permanently with a one-off unlock.',
  'Ennek a cikknek a szövege nem jött meg.': 'The text of this article did not arrive.',
  'A cikk szövege most nem érhető el.': 'The article text is not available right now.',
  'Tudástár —': 'Knowledge base —',

  // --- CSOMAGLISTA-TETELEK (a "Mit vigyek" generator) ---
  'Elsősegély-készlet': 'First aid kit',
  'Fejlámpa + tartalék elem': 'Headlamp + spare batteries',
  'Powerbank (feltöltve)': 'Power bank (charged)',
  'Vízszűrő vagy víztisztító tabletta': 'Water filter or purification tablets',
  'Öngyújtó / vízálló gyufa': 'Lighter / waterproof matches',
  'Többfunkciós kés': 'Multi-tool knife',
  'Gázfőző + gázpalack': 'Gas stove + gas cylinder',
  'Spirituszfőző (denaturált szesz) + üzemanyag': 'Spirit stove (denatured alcohol) + fuel',
  'Vegyi melegítő tasak (tűz nélkül)': 'Chemical heat pack (no fire)',
  'Bögre / edény a főzéshez': 'Mug / pot for cooking',
  'Hőfólia': 'Emergency blanket',
  'Papírtérkép és iránytű': 'Paper map and compass',
  'Készpénz kis címletekben': 'Cash in small denominations',
  'Dokumentum-másolatok': 'Copies of documents',
  'Vízhatlan zsák (dry bag)': 'Waterproof bag (dry bag)',
  'Mentőmellény': 'Life jacket',
  'Gyorsan száradó ruha': 'Quick-drying clothes',
  'Vízálló tok a telefonra': 'Waterproof phone case',
  'Réteges téli öltözet': 'Layered winter clothing',
  'Sapka, sál, kesztyű': 'Hat, scarf, gloves',
  'Vízhatlan bakancs': 'Waterproof boots',
  'Kémiai melegítő párna': 'Chemical heat pad',
  'Réteges őszi öltözet': 'Layered autumn clothing',
  'Fejlámpa (korán sötétedik)': 'Headlamp (it gets dark early)',
  'Naptej és fejfedő': 'Sunscreen and headwear',
  'Rovarriasztó': 'Insect repellent',
  'Extra víz (meleg miatt)': 'Extra water (because of the heat)',
  'Kanna víz (tartalék)': 'Water canister (reserve)',
  'Hálózsák / takaró': 'Sleeping bag / blanket',
  'Szerszámkészlet': 'Tool kit',
  'Ponyva / sátorlap': 'Tarp / groundsheet',
  'Bakancs vagy zárt cipő': 'Boots or closed shoes',
  'Alsónemű': 'Underwear',
  'Póló': 'T-shirt',
  'Hosszú nadrág': 'Long trousers',
  'Pulóver vagy polár': 'Jumper or fleece',
  'Aláöltözet (hosszú alsó, hosszú ujjú)': 'Base layer (long johns, long sleeve)',
  'Esőkabát vagy esőponcsó': 'Rain jacket or poncho',
  'Kesztyű': 'Gloves',
  'Váltóruha (csecsemő)': 'Change of clothes (infant)',
  'Zokni / rugdalózó': 'Socks / babygrow',
  'Sapka (csecsemő)': 'Hat (infant)',
  'Esővédő a babahordozóra': 'Rain cover for the baby carrier',
  'intim higiénia (tisztasági betét / tampon)': 'intimate hygiene (pads / tampons)',
  'intim higiénia, ha lány': 'intimate hygiene, if a girl',
  'tápszer (a szokásos márka, napi adag +2 nap)': 'formula (the usual brand, daily dose +2 days)',
  'pelenka (napi 6-8 db)': 'nappies (6-8 a day)',
  'törlőkendő': 'wet wipes',
  'cumi és pótcumi': 'dummy and spare dummy',
  'saját tápja (NE váltsunk hirtelen: gyomorrontást okoz)':
    'their own feed (do NOT switch suddenly: it upsets the stomach)',
  'oltási könyv másolata': 'copy of the vaccination record',
  'póráz és szájkosár': 'lead and muzzle',
  'víztisztító tabletta': 'water purification tablets',
  'vízszűrő': 'water filter',

  // --- CSOMAGLISTA magyarazo szovegek ---
  'Inzulin hűtve: hűtőtáska + gélakku': 'Insulin chilled: cool bag + gel pack',
  'az inzulin 2-8 °C-ot kíván': 'insulin needs 2-8 °C',
  'Vércukormérő, tesztcsík, lándzsa': 'Glucose meter, test strips, lancets',
  'cukorbetegség az adatlapján': 'diabetes on their record',
  'Szőlőcukor / gyors cukor': 'Glucose tablets / fast sugar',
  'hipoglikémia esetére': 'in case of hypoglycaemia',
  'Tartalék toll/tű + éles-gyűjtő': 'Spare pen / needle + sharps container',
  'ha az egyik elromlik vagy elvész': 'in case one breaks or gets lost',
  'Allergia-gyógyszer (': 'Allergy medication (',
  'allergia az adatlapján': 'allergy on their record',
  'Adrenalin autoinjektor, ha fel van írva': 'Adrenaline auto-injector, if prescribed',
  'súlyos allergiás reakció percek alatt kialakulhat':
    'a severe allergic reaction can develop within minutes',
  'az adatlapjáról': 'from their record',
  'az ő adatlapjáról, +2 nap tartalék': 'from their record, +2 days spare',
  'amit viszünk; a teljes igény': 'what we take; the full need is',
  'indulásra; a teljes igény': 'for departure; the full need is',
  ': nincs megadva a testtömeg, 15 kg-mal számoltam. Az adatlapján javítható.':
    ': body weight is not given, I calculated with 15 kg. It can be corrected on their record.',
  'Több helyen is bejelölve:': 'Marked in several places:',
  '— mindegyiknél teljes mennyiséggel számít.': '— it counts with the full quantity at each.',
  'A víz csak az indulásra elég: a teljes igény': 'The water is only enough for departure: the full need is',
  'liter lenne, ebből': 'litres, of which',
  'liter megy veletek. A többit útközben kell megszerezni és tisztítani.':
    'litres go with you. The rest has to be sourced and purified on the way.',
  'Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez túrához való, és a listán kiírom, mennyit kell útközben szerezni.':
    'It only counts what you can carry: 1.5 litres per person. That suits a hike, and the list states how much has to be sourced on the way.',
  'Jelöld ki, ki megy. Enélkül nem tudom kiszámolni, mennyi kell.':
    'Select who is going. Without that I cannot work out how much is needed.',
  'kategóriájú ruházatot kíván. A készletedben': 'category clothing is required. In your stock there are',
  'ilyen tétel van.': 'such items.',
  'nincs ilyen tétel — a készletnél ez egy kategória.': 'there is no such item — in the stock this is a category.',
  'liter víz és': 'litres of water and',
  'kcal élelem. Becsült tömeg:': 'kcal of food. Estimated weight:',
  'A víz csak az indulásra elég.': 'The water is only enough for departure.',
  'napra valójában': 'days it would actually take',
  'liter kellene, ennyit viszont nem lehet elvinni.': 'litres, but that much cannot be carried.',
  'liter, amit útközben kell megszerezni:': 'litres, which have to be sourced on the way:',
  'vízszűrő, víztisztító tabletta, ismert vízvételi pont. Ezt a listán is nézd meg.':
    'water filter, purification tablets, a known water point. Check this on the list too.',
  'A készletedben most': 'Your stock currently has',
  'kcal van megadva, ami ennek az útnak a': 'kcal recorded, which is',
  'Hiányzik még kb.': 'About',
  'Ez elég.': 'That is enough.',
  'tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz.':
    'items have no energy value (kcal/100 g), so they are not counted. Reading it off the packet makes this more accurate.',
  'Ez nehezebb, mint amit el tudtok vinni. A kijelölt személyek együtt kb.':
    'This is heavier than you can carry. The selected people together can take about',
  'kg-ot bírnak, a lista': 'kg, and the list is',
  'kg. A víz a legnehezebb: fontold meg a vízszűrőt kanna helyett, vagy vidd rövidebb szakaszra.':
    'kg. Water is the heaviest: consider a filter instead of a canister, or take it for a shorter leg.',
  'Belefér: a kijelöltek kb.': 'It fits: those selected can take about',
  'kg-ot bírnak.': 'kg.',
  'fő között: fejenként kb.': 'people: about',
  'Nála:': 'They carry:',
  'kg (ebből': 'kg (of which',
  'kg a sajátja': 'kg their own',
  'kg a közösből': 'kg from the shared gear',
  '· teherbírása': '· capacity',
  '— EZ TÖBB, MINT AMIT ELBÍR': '— THIS IS MORE THAN THEY CAN CARRY',
  '— belefér': '— it fits',
  'A hiányzik jelölésűek a beszerzési listád. Most': 'The items marked missing are your shopping list. Right now',
  'ilyen van. A vizet és az élelmet a készlet KATEGÓRIÁJÁBÓL ismeri fel, a többit a nevéből.':
    'such. Water and food are recognised from the stock CATEGORY, everything else from the name.',
  'A víz- és energia-számok tervezési értékek, nem orvosi előírás. A csecsemő és az állat külön normával számol.':
    'The water and energy figures are planning values, not medical prescriptions. Infants and animals are calculated with separate norms.',
  'Egy power station a telefont, a lámpát és egy rádiót is elviszi napokig. Kisebb igényre powerbank is elég.':
    'A power station will run the phone, the lamp and a radio for days. For a smaller need a power bank is enough.',
  'Tűzifa, PB-palack vagy fűtőolaj — a kockázatelemzés kiszámolja, mennyi kell a megadott napokra.':
    'Firewood, an LPG cylinder or heating oil — the risk analysis works out how much is needed for the given days.',
  'Kannás víz és víztisztító a legolcsóbb biztosíték. Egy IBC tartály hosszú távra megoldja.':
    'Canister water and a purifier are the cheapest insurance. An IBC tank solves it long term.',
  'Egy fejlámpa a legfontosabb: szabadon hagyja a kezed. Mellé egy tartalék elemkészlet.':
    'A headlamp matters most: it leaves your hands free. Add a spare set of batteries.',
  'A tárolt üzemanyag a fűtésnél is szerepel: ugyanaz a liter vagy fűt, vagy visz.':
    'Stored fuel also appears under heating: the same litre either heats or moves you.',
  'Ehhez a helyszínhez még nincs készlet rendelve, ezért nem tudjuk mérni. A Készletnél a tétel Tárolási helyénél tudod bejelölni.':
    'No stock is assigned to this location yet, so we cannot measure it. You can mark it under the item’s Storage location in Stock.',
  'Ehhez a helyszínhez nincs tétel rendelve. A Készletnél a tétel Tárolási helyénél tudod bejelölni.':
    'No item is assigned to this location. You can mark it under the item’s Storage location in Stock.',
  ': nincs hatótáv — add meg a fogyasztást az adatlapján':
    ': no range — enter the consumption on its record',
  '20000 = 20 liter (millilitert kérünk)': '20000 = 20 litres (we ask for millilitres)',
  '5000 = egy 5 literes kanna': '5000 = a 5-litre canister',
  '1500 = másfél literes': '1500 = a 1.5-litre bottle',
  '100000 = egy mázsa': '100000 = 100 kg',
  '11500 = egy 11,5 kg-os PB': '11500 = an 11.5 kg LPG cylinder',
  '. Ez soknak tűnik. Biztos, hogy jó a mennyiség': '. That looks like a lot. Are you sure the quantity',
  'és az egységnyi súly? (Egy IBC tartály például 1 darab, 1000 kg.) OK = mégis felveszem.':
    'and the unit weight are right? (An IBC tank, for example, is 1 piece, 1000 kg.) OK = add it anyway.',
  'A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan. Töltsd ki a Vészkártya szekcióban.':
    'Your emergency card (blood type, allergies, medication, contact) appears here quickly. Fill it in under the Emergency card section.',
  'pl. Amit hozz magaddal': 'e.g. What to bring with you',
  'víz 5 liter&#10;elemlámpa&#10;gyógyszerek': 'water 5 litres&#10;torch&#10;medication',
  'Vízitúra': 'Water trip',
  'Őszi túra': 'Autumn trip',
  'Nyári túra': 'Summer trip',
  'Esőkabát': 'Rain jacket',
  'Ehhez a helyszínhez még nincs készlet rendelve, ezért nem tudjuk mérni. A Készletnél a tétel Tárolási helyénél válaszd ki:':
    'No stock is assigned to this location yet, so we cannot measure it. Select it under the item’s Storage location in Stock:',
  'élelmiszernél hiányzik az energia (kcal/100 g) — addig az étel „?”.':
    'food items are missing their energy value (kcal/100 g) — until then food shows as "?".',
  'Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez túrához való, és a listán kiírom, mennyi hiányzik a teljes fejadaghoz.':
    'It only counts what you can carry: 1.5 litres per person. That suits a hike, and the list states how much is missing from the full ration.',
  'tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz a kép.':
    'items have no energy value (kcal/100 g), so they are not counted. Reading it off the packet gives a more accurate picture.',
  'A víz- és energia-számok tervezési értékek, nem orvosi előírás. A csecsemő és az állat külön normán fut, nem a felnőtt arányosításából.':
    'The water and energy figures are planning values, not medical prescriptions. Infants and animals run on separate norms, not scaled down from an adult.',

  // --- oSSZEFuZoTT SZoVEG ToREDEKEI ---
  // Ezek a kepernyon SOSEM allnak onmagukban -- a lap szamokkal fuzi ossze oket
  // (`k.fo + ' fő · ' + k.napok + ' nap'`). A DOM-ban viszont KULoN szoveg-csomopontkent
  // jelennek meg, tehat a fordito kulon-kulon lat es cserel rajtuk. Ezert kell szotar-sor
  // MINDEGYIKHEZ -- egy hianyzo darab kozepen magyarul hagyja a mondatot.
  'fő ·': 'people ·',
  'nap ·': 'days ·',
  'fő/állat ·': 'people/animals ·',
  'fő)': 'people)',
  'Víz (': 'Water (',
  'kg testtömegre)': 'kg body weight)',
  '0,06 l/testtömeg-kg/nap': '0.06 l/kg body weight/day',
  'l/nap ×': 'l/day ×',
  'kcal/nap ×': 'kcal/day ×',
  'személyre szóló (': 'personal (',
  ': be van írva a betegség (': ': the condition is recorded (',
  'fejenként egy (': 'one each (',
  '— a': '— the',
  '-es tank': ' tank',
  'm² alapján': 'based on m²',
  '%-a .': '%.',

  // A ket forras-megjelolesnek NEGY erteke lehet (index.html:5717 es 5720); a negyedik
  // (`N m² alapjan`) szamot tartalmaz, ezert az a mintak kozott all.
  'a helyszín típusa szerint': 'by location type',
  'kézzel megadott': 'entered manually',
  'kézzel megadott napi igény': 'daily demand entered manually',

  // A hianyzo kcal-figyelmeztetes a futes-blokk alatt all, ugyanabban a `note` dobozban.
  'itteni élelmiszernél hiányzik a súly vagy az energia (kcal/100 g), ezért nem számít bele. Nyisd meg a tételt a Készletnél, és írd be a doboz adatait.':
    'food items here are missing weight or energy (kcal/100 g), so they are not counted. Open the item under Stock and enter the details from the packet.',

  // --- POTLAS 2026-08-31 (Marveen): a het szotar osszevetesebol hianyzo kulcsok.
  // Az UKRAN valtozat volt az egyetlen teljes (1218 kulcs); ezek a tobbi hatbol
  // kimaradtak. Forditatlanul nem hibaznak, hanem MAGYARUL jelennek meg.
  'A szoba kulcsa': 'Room key',
  'A tudástár betöltése folyamatban…': 'Loading the knowledge base…',
  'Távolság mérése': 'Measure distance',
  'Törölve.': 'Deleted.',
  'helyszín': 'location',
  'Élelmiszer:': 'Food:',
  'Összes hely': 'All locations',
  'ÜTEM INDÍTÁSA': 'START RHYTHM',
  'D': 'S',
  'DK': 'SE',
  'DNy': 'SW',
  'K': 'E',
  'Ny': 'W',
  'ÉNy': 'NW',

  // --- POTLAS 2026-08-31 (Marveen), a `pp-i18n-hiany.mjs` MERESEBoL: 18 szoveg, ami
  // tenylegesen MAGYARUL jelent meg az idegen nyelvu feluleten. A kulcsok a mero
  // kimenetebol valok (`store/pp-i18n-hiany.json`), nem kezzel gepelve.
  // Az ALLPOWERS-tetelknel a MARKANEV es a TIPUS valtozatlan, csak a leiras fordul.
  '2 méter (145 MHz) — amatőr': '2 metres (145 MHz) — amateur',
  '40 méter (7 MHz) — amatőr, rövidhullám': '40 metres (7 MHz) — amateur, shortwave',
  '70 cm (435 MHz) — amatőr': '70 cm (435 MHz) — amateur',
  '80 méter (3,6 MHz) — amatőr, rövidhullám': '80 metres (3.6 MHz) — amateur, shortwave',
  'CB (27 MHz) — polgári sáv': 'CB (27 MHz) — citizens band',
  'PMR446 (446 MHz) — engedély nélküli kézirádió': 'PMR446 (446 MHz) — licence-free handheld',
  'ALLPOWERS B1000 bővítő akku (1152 Wh)': 'ALLPOWERS B1000 expansion battery (1152 Wh)',
  'ALLPOWERS B3000 bővítő akku (3168 Wh)': 'ALLPOWERS B3000 expansion battery (3168 Wh)',
  'ALLPOWERS P1800 (1024 Wh): 1024 Wh tárolt energia, 1800 W folyamatos kimenet': 'ALLPOWERS P1800 (1024 Wh): 1024 Wh stored energy, 1800 W continuous output',
  'ALLPOWERS SF100 (100 W, hajlékony)': 'ALLPOWERS SF100 (100 W, flexible)',
  'ALLPOWERS SF200 (200 W, hajlékony)': 'ALLPOWERS SF200 (200 W, flexible)',
  'ALLPOWERS SP012 (100 W, terepszínű)': 'ALLPOWERS SP012 (100 W, camouflage)',
  'Jegyzet rajzolása': 'Draw a note',
  '2100 kcal fejenként naponta. Járkálás, ház körüli teendők. Ez a nemzetközi vészhelyzeti tervezés alapszáma is.': '2100 kcal per person per day. Walking about, chores around the house. This is also the baseline figure used in international emergency planning.',
  'A hatótávot HÁROM dolog dönti el, és a watt csak az egyik — rendszerint a legkisebb súlyú. A másik kettő: hogy MILYEN SÁVON adsz, és hogy MI van közted és a másik között. Ezért nem lehet egy rádióra egyetlen kilométer-számot mondani.': 'THREE things decide the range, and watts are only one of them — usually the least important. The other two: WHICH BAND you transmit on, and WHAT is between you and the other station. That is why no single kilometre figure can be given for a radio.',
  'Írd be, amit tudsz — ami nincs a listán, azt add hozzá a végén. A kilogrammnál a SZÁRAZ tömeg számít (a rizs főzve nehezebb, de ugyanannyi kalória).': 'Enter what you know — add anything not on the list at the end. For kilograms the DRY weight counts (rice is heavier cooked, but has the same calories).',
  'Magyarországon engedély nélkül használható, de a törvény MAXIMUM 0,5 wattot és gyári, nem cserélhető antennát enged. Ezért van, hogy a doboz 10 kilométert ígér, a valóság meg 1-3.': 'In Hungary it may be used without a licence, but the law allows a MAXIMUM of 0.5 watts and a factory-fitted, non-replaceable antenna. That is why the box promises 10 kilometres and reality gives 1-3.',
  'Nem fogyókúrás számoló. Azt mondja meg, hogy a KÉSZLETED hány napra elég, és mennyi hiányzik ahhoz a naphoz, ameddig ki akarod húzni. A napi szükséglet nem „normál" étkezés: vészhelyzetben a cél a működőképesség, nem a jóllakottság.': 'Not a weight-loss calculator. It tells you how many days YOUR STOCK will last, and how much is missing to reach the day you want to hold out to. The daily requirement is not a \'normal\' diet: in an emergency the goal is staying functional, not feeling full.',

  // SUGO-TURA (coach) szovegei, 2026-10-05 -- Fonok: "Menjen a forditas."
  "Helyi szoba: szöveg a közeledben lévőknek, közös hálón, internet nélkül.": "Local room: text to those near you, on a shared network, without internet.",
  "Szobák: zárt csoport, amit a gazda kódjával lehet elérni, interneten át. Messziről is.": "Rooms: a closed group reachable with the owner's code, over the internet. Even from far away.",
  "Morze: rövid üzenet hanggal vagy fénnyel; a vétel kamerával és mikrofonnal megy.": "Morse: a short message by sound or light; reception works with the camera and the microphone.",
  "Fax (SSTV): kép átküldése hangban, rádión is. Ugyanaz a gomb indít és állít.": "Fax (SSTV): sending a picture inside sound, over radio too. The same button starts and stops it.",
  "Adás: ide írod az üzenetet, és a telefon hanggal vagy fénnyel leadja.": "Send: you type the message here, and the phone sends it by sound or light.",
  "Olvasás fényből: a kamera a másik villogó fényét olvassa vissza szöveggé.": "Read from light: the camera reads the other side's blinking light back into text.",
  "Olvasás hangból: a mikrofon a sípoló jelet fejti vissza.": "Read from sound: the microphone decodes the beeping signal.",
  "Gyakorló: hallás utáni fejtés, kézi kulcs és kopogás — itt tanulod meg.": "Trainer: decoding by ear, hand key and knocking — this is where you learn it.",
  "Alapok: időzítés, sebesség, a teljes ábécé, és mit tegyél zárt helyen.": "Basics: timing, speed, the full alphabet, and what to do in a closed space.",
  "A szoba beállításai": "Room settings",
  "A szoba kódja: ezt add meg annak, akit behívsz. Koppints rá, és a vágólapra kerül.": "The room code: give this to whoever you invite. Tap it and it goes to the clipboard.",
  "Értesítés: a készülék engedélye, és külön az, hogy EBBEN a szobában jelezzen-e.": "Notification: the device permission, and separately whether it should alert you in THIS room.",
  "A neved: ezen a néven látnak minden szobában. Egy szobában egy nevet csak egy valaki használhat.": "Your name: people see you under this name in every room. In one room a name can be used by only one person.",
  "Tagok: a szoba tagjainak listája. Ha te vagy a gazda, egy tagra koppintva eltávolíthatod: az új üzeneteket már nem látja, és csak új meghívóval jöhet vissza.":
    "Members: the list of the room’s members. If you are the host, tap a member to remove them: they no longer see new messages and can only come back with a new invitation.",
  "Megszüntetés: ha te vagy a gazda, a törlés mindenkinek megszünteti. Ha nem, csak te lépsz ki.": "Removal: if you are the owner, deleting removes the room for everyone. If not, only you leave.",
  "A helyi szoba beállításai": "Local room settings",
  "A szoba kulcsa: közös jelszó. Akinek nincs meg, annak értelmetlen betűsor marad az üzenet.": "The room key: a shared password. Without it the message stays a meaningless string of letters.",
  "A neved: ezt látják a többiek az üzeneted mellett.": "Your name: this is what the others see next to your message.",
  "Morze adás": "Morse send",
  "Ide írod az üzenetet. Ékezet és cirill nem megy: a Morze-tábla latin betűt és számot ismer.": "You type the message here. Accents and Cyrillic do not work: the Morse table knows Latin letters and digits.",
  "Alatta rögtön látod, hogy néz ki Morze-jelekben.": "Right below it you see what it looks like in Morse signals.",
  "Adás: ugyanaz a gomb indít és állít. Nincs külön Állj.": "Send: the same button starts and stops. There is no separate Stop.",
  "SOS: egy koppintás, és megy a nemzetközi vészjel, amíg le nem állítod.": "SOS: one tap and the international distress signal goes out until you stop it.",
  "A fogaskerék alatt a sebesség, a hangmagasság, az ismétlés és a villogtatás.": "Under the gear icon: speed, pitch, repeat and flashing.",
  "Olvasás fényből": "Read from light",
  "Indítsd, és irányítsd a kamerát a villogó fényre. Sötét háttér, a fény a kép közepén.": "Start it and point the camera at the blinking light. Dark background, the light in the middle of the frame.",
  "A lámpa és a sáv mutatja, mit lát a kamera. Ha nem villan, nem jó a kivágás.": "The lamp and the bar show what the camera sees. If it does not blink, the framing is wrong.",
  "Fent a nyers jel, alatta a megfejtett szöveg.": "The raw signal on top, the decoded text below it.",
  "A fogaskerék alatt a vétel-sebesség, a nagyítás és a kalibráció.": "Under the gear icon: reception speed, zoom and calibration.",
  "Olvasás hangból": "Read from sound",
  "Indítsd, és tartsd a telefont a hang felé. Csendben megy a legjobban.": "Start it and hold the phone towards the sound. It works best in silence.",
  "A lámpa és a frekvencia mutatja, mit hall. Zajra az érzékenységet szigorítsd.": "The lamp and the frequency show what it hears. Against noise, tighten the sensitivity.",
  "A fogaskerék alatt a vétel-sebesség, az érzékenység és a kalibráció.": "Under the gear icon: reception speed, sensitivity and calibration.",
  "Morze gyakorló": "Morse trainer",
  "Három mód: hallás után, kézi kulcs és kopogás. Egy koppintás a váltás.": "Three modes: by ear, hand key and knocking. One tap switches between them.",
  "Mit gyakorolsz: betű, szám, három jel vagy szó. Kezdd a betűvel.": "What you practise: letter, number, three signs or word. Start with the letter.",
  "Új feladat lejátszik egy jelet. Ha nem kaptad el, játszd le újra.": "New exercise plays a signal. If you did not catch it, play it again.",
  "Írd le, amit hallottál, és ellenőrizd. A megoldás és a Morze-minta csak utána látszik.": "Write down what you heard and check it. The answer and the Morse pattern only show afterwards.",
  "Kézi kulcs": "Hand key",
  "Nyomd és tartsd: rövid a pont, hosszú a vonás. Gépen a szóköz is kulcs.": "Press and hold: short is a dot, long is a dash. On a computer the space bar is a key too.",
  "Fent a jel, alatta amit a gép kiolvasott belőle. A szünet hossza adja a betű- és szóhatárt.": "The signal on top, below it what the app read out of it. The length of the pause makes the letter and word boundary.",
  "Törlés: tiszta lappal kezdesz.": "Clear: you start with a clean sheet.",
  "Kopogás": "Knocking",
  "A rács: minden betű két koppintás-csoport, előbb a sor, aztán az oszlop. A C és a K egy mezőn van.": "The grid: every letter is two groups of knocks, first the row, then the column. C and K share one cell.",
  "Mutat egy betűt, te lekopogod: sor, szünet, oszlop. A szünet zárja a csoportot.": "It shows a letter and you knock it: row, pause, column. The pause closes the group.",
  "Megmondja, jó volt-e, és kiírja a betű helyét a rácsban.": "It tells you whether it was right, and shows the letter's place in the grid.",
  "Morze alapok": "Morse basics",
  "A teljes ábécé. Ez a táblázat magából a kódból épül, tehát nem tud eltérni attól, amit az app ad.": "The full alphabet. This table is built from the code itself, so it cannot differ from what the app sends.",
  "Kézi visszafejtés: ha leírtad a hallott jelet, ide beírva megkapod a szöveget.": "Decode by hand: if you wrote down the signal you heard, type it here and you get the text.",
  "Adás beállításai": "Send settings",
  "Sebesség és hangmagasság. Kezdőnek a lassabb a jobb.": "Speed and pitch. For a beginner the slower one is better.",
  "Ismétlés: addig megy a jel, amíg le nem állítod.": "Repeat: the signal keeps going until you stop it.",
  "Fény, hang vagy mindkettő. A vaku nem minden telefonon megy; a képernyő mindig.": "Light, sound or both. The flash does not work on every phone; the screen always does.",
  "Kalibrációs adás: a PARIS szót küldi, amiből a másik fél beállítja a tempót.": "Calibration transmission: it sends the word PARIS, from which the other side sets the tempo.",
  "Fény-vétel beállításai": "Light reception settings",
  "Vétel-sebesség: állítsd a vett Morze tempójához, amíg tisztán jönnek a betűk.": "Reception speed: set it to the tempo of the received Morse, until the letters come through cleanly.",
  "Nagyítás: távoli fényhez.": "Zoom: for a distant light.",
  "Kalibráció: a másik PARIS-t küld, ez megméri belőle a tempót.": "Calibration: the other side sends PARIS, and this measures the tempo from it.",
  "Hang-vétel beállításai": "Sound reception settings",
  "Vétel-sebesség: állítsd a vett Morze tempójához.": "Reception speed: set it to the tempo of the received Morse.",
  "Érzékenység: balra érzékenyebb, jobbra szigorúbb a zajra.": "Sensitivity: to the left more sensitive, to the right stricter against noise.",
  "Mód: Martin M1 a biztos; a vevőnek ugyanezt kell tudnia.": "Mode: Martin M1 is the safe one; the receiver has to know the same.",
  "Kép választása, majd Adás: a telefon hangként játssza le. Tartsd a rádió mikrofonjához.": "Pick a picture, then Send: the phone plays it as sound. Hold it to the radio's microphone.",
  "Vétel: ugyanaz a gomb indít és állít. Hangfájlból is megy, ha valaki felvételt küld.": "Reception: the same button starts and stops. It also works from an audio file if someone sends a recording.",
  "Nyomd hosszan a térképet: ott új pontot veszel fel. A helyszínek jelölőjén a szám a készültség, nem sorszám.": "Press and hold the map: that is where you add a new point. On the markers of your locations the number is the readiness level, not a serial number.",
  "Mérés: két koppintás, és megkapod a távolságot.": "Measuring: two taps and you get the distance.",
  "Pont ide, ahol vagyok: a GPS helyedet menti. Helyzetem küldése: elküldöd valakinek, hol vagy.": "A point right here: it saves your GPS position. Send my position: you send someone where you are.",
  "Pontok kimentése (GPX): a pontjaid fájlba, más térképbe is.": "Export points (GPX): your points into a file, for other maps too.",
  "Terület letöltése: a térkép offline is meglesz. Ha nem kell már, a Tárolt térkép törlése felszabadítja a helyet.": "Download area: the map will be there offline as well. If you no longer need it, Delete stored map frees up the space.",
  "A bővített tudástár a Prémium része: prémium kóddal, egyszeri feloldással, véglegesen. A cikk elején látod, meddig tart az ingyenes rész és hol kezdődik a bővített.": "The extended knowledge base is part of Premium: unlocked once with a premium code, for good. At the start of the article you see where the free part ends and the extended one begins.",
  "Kereséssel gyorsabban odaérsz, mint görgetéssel.": "Searching gets you there faster than scrolling.",
  "Új tétel: mi az, mennyi, hol tartod, mikor jár le. A lejárat színe magától változik.": "New item: what it is, how much, where you keep it, when it expires. The colour of the expiry changes by itself.",
  "Szűrés kategóriára, helyszínre és készlet-fajtára: a 72 órás csomagot például külön látod.": "Filter by category, location and stock type: the 72-hour pack, for instance, you see separately.",
  "72h csomag: egy koppintással feltölti az alap-listát, amit aztán a sajátodra igazítasz.": "72h pack: one tap fills in the basic list, which you then adjust to your own.",
  "Export: a lista fájlba, például a családnak. Ürítés: mindent töröl, előtte exportálj.": "Export: the list into a file, for the family for example. Clearing: deletes everything, export first.",
  "Kik mennek: a lista a Háztartásnál felvett családtagokból áll össze.": "Who is going: the list is built from the family members added under Household.",
  "Hogyan és milyen út: autóval más fér, mint hátizsákkal; a túra fajtája hozza a saját tételeit.": "How and what kind of trip: a car takes different things than a backpack; the type of trip brings its own items.",
  "Hány napra: ebből számol a víz és az élelem.": "For how many days: the water and the food are calculated from this.",
  "A súlykeret azt mutatja, mennyit bírtok el összesen, nem azt, mennyi fér a zsákba.": "The weight limit shows how much you can carry together, not how much fits into the bag.",
  "Itt veszed fel a családot. Innen jön a fejadag és a Mit vigyek lista.": "This is where you add the family. The daily ration and the What to take list come from here.",
  "Háziállat is számít: víz és élelem neki is kell.": "Pets count too: they need water and food as well.",
  "Helyszín: otthon, nyaraló, autó. Mindegyiknek saját készlete és készültség-kártyája lesz a kezdőlapon.": "Location: home, holiday house, car. Each gets its own stock and readiness card on the home page.",
  "Ezt látja, aki megtalálja a telefonod. Csak azt írd ide, amit egy idegen is láthat.": "This is what someone who finds your phone sees. Only write here what a stranger may see as well.",
  "Vércsoport, allergia, gyógyszer, betegség: ez az, ami egy mentőnek számít.": "Blood type, allergy, medicine, illness: this is what matters to a paramedic.",
  "Kit hívjanak: egy név és egy szám elég.": "Who to call: one name and one number is enough.",
  "QR-kód: a kártya egy képben, amit a másik telefon beolvas.": "QR code: the card in a single image that another phone can scan.",
  "Nyomtatás: a tárcába. Mind nyomtatása minden családtagét, a Családi kártya egy QR-ral az egész családot.": "Printing: into the wallet. Print all prints every family member's, and the Family card holds the whole family in one QR.",
  "PIN: az iratok zárva vannak, amíg be nem írod.": "PIN: the documents stay locked until you type it in.",
  "Hozzáadás: fotó vagy PDF. A telefonon marad, felhőbe nem megy.": "Add: a photo or a PDF. It stays on the phone, it does not go to the cloud.",
  "Közös jelszó: egy mondat, amit csak ti tudtok. Ugyanaz kell mindkét telefonon; mentsd el.": "Shared password: a sentence only you know. The same one is needed on both phones; save it.",
  "Üzenet vagy hely, majd QR készítése. A kód a teljes adatot viszi, nem linket: internet nélkül is megy.": "A message or a place, then Create QR. The code carries the full data, not a link: it works without internet too.",
  "Beolvasás kamerával vagy fájlból, majd Megfejtés. Csak a jelszó birtokosa olvassa.": "Scan with the camera or from a file, then Decode. Only the holder of the password can read it.",
  "Az imádságok mindig itt vannak, letöltés nélkül is. Koppints egy címre, és olvasd.": "The prayers are always here, even without downloading. Tap a title and read.",
  "A teljes Biblia egyszer letöltendő, utána offline is működik. Ha ez a gomb látszik, még nincs letöltve.": "The full Bible has to be downloaded once, after that it works offline as well. If this button is visible, it is not downloaded yet.",
  "A könyvek rácsa: Ószövetség fent, Újszövetség lent. Koppints a könyvre, aztán a fejezetre, aztán a versre.": "The grid of books: Old Testament on top, New Testament below. Tap the book, then the chapter, then the verse.",
  "Keresés szó szerint, vagy hely szerint (Ján 3,16). Amit megjelölsz, a Kiemeléseim alatt visszatalálod.": "Search by words, or by place (John 3:16). Whatever you mark you will find again under My highlights.",
  "PIN: a tárca zárva van, amíg be nem írod. Első használatkor te adod meg.": "PIN: the wallet stays locked until you type it in. On first use you set it yourself.",
  "A szám azt mutatja, mennyi áll a tárcádban; a rekeszek külön célra tesznek félre.": "The number shows how much is in your wallet; the compartments set money aside for separate purposes.",
  "Felveszed az azimutot, és a tájoló mutatja a visszautat is. Törlés, ha új irány kell.": "You take the azimuth and the compass shows the way back too. Clear it if you need a new direction.",
  "Napkelte, napnyugta, holdfázis: mennyi világosod van. Mérés a helyzetemre pontosít GPS-szel.": "Sunrise, sunset, moon phase: how much daylight you have. Measure refines it to your position with GPS.",
  "Légnyomás: írd be vagy mérd a szenzorral, és rögzítsd. Az esés vihart jelez; a küszöb és az értesítés itt állítható.": "Air pressure: type it in or measure it with the sensor, and record it. A drop signals a storm; the threshold and the notification can be set here.",
  "Több számoló egy helyen: koppints arra, amelyik kell. Mindegyik egy kérdésre válaszol: meddig elég, mennyi kell.": "Several calculators in one place: tap the one you need. Each answers one question: how long it lasts, how much is needed.",
  "Víztisztítás: mennyi hipó kell, és meddig kell forralni. A töménységet az üvegről olvasd le.": "Water purification: how much bleach is needed, and how long you have to boil. Read the concentration off the bottle.",
  "Két út van: forralás vagy hipó. A forralás egyszerűbb, a hipó akkor jó, ha nincs mivel tüzelni.": "There are two ways: boiling or bleach. Boiling is simpler, bleach is good when there is nothing to make a fire with.",
  "A hipó töménységét az ÜVEGRŐL olvasd le. A megadott mennyiségek 5 százalékos szerre szólnak — gyengébből több kell. Ha az üvegen más áll, ne fejből számolj.": "Read the concentration of the bleach OFF THE BOTTLE. The amounts given are for a 5 percent agent — a weaker one needs more. If the bottle says something else, do not calculate from memory.",
  "A számoló a megadott töménységgel dolgozik. Ha átállítod, a mennyiség is változik — ezért kérdezi meg.": "The calculator works with the concentration you gave. If you change it, the amount changes too — that is why it asks.",
  "A Szoba zárt csoport, ami interneten át is elérhető: aki messze van, az is beszélget. A Helyi szoba ezzel szemben a közeledben lévőknek szól, hálózat nélkül.": "A Room is a closed group reachable over the internet as well: even someone far away can talk. The Local room, by contrast, is for those near you, without a network.",
  "Új szobát itt hozol létre. Te leszel a gazdája: te engeded be, aki kér.": "This is where you create a new room. You will be its owner: you let in whoever asks.",
  "Ha máshoz csatlakoznál: írd be a gazdától kapott kódot, és küldd el a kérelmet. A gazda jóváhagyása után vagy bent.": "If you want to join someone else: type the code you got from the owner and send the request. After the owner approves it you are in.",
  "Ide írod az üzenetet, és a Küldés viszi el a szoba minden tagjának.": "You type the message here, and Send takes it to every member of the room.",
  "A Sürgős jelölés pirossal emeli ki az üzenetet mindenkinél.": "The Urgent mark highlights the message in red for everybody.",
  "Gazdaként itt látod a belépési kérelmeket, és itt adod ki a meghívó-kódot.": "As an owner this is where you see the join requests, and where you issue the invitation code.",
  "Helyi üzenetek": "Local messages",
  "A Helyi szoba a közeledben lévő telefonoknak szól, közös hálón, internet nélkül. A pont zölden mutatja, ha él a kapcsolat.": "The Local room is for the phones near you, on a shared network, without internet. The dot shows green if the connection is alive.",
  "Ha nem talál senkit: Próbáld újra. Mindenkinek ugyanazon a helyi hálón kell lennie.": "If it finds nobody: Try again. Everyone has to be on the same local network.",
  "A közös kulcs titkosítja az üzeneteket: ugyanazt a kulcsot add meg minden telefonon, és mentsd el.": "The shared key encrypts the messages: give the same key on every phone, and save it.",
  "Kommunikáció: üzenet szöveggel, hanggal vagy fénnyel, akkor is, ha nincs térerő.": "Communication: a message by text, sound or light, even when there is no signal.",
  "Térkép: helyszíneid, offline térképpel és mért távolsággal.": "Map: your locations, with an offline map and measured distance.",
  "Tudástár: a felkészülés cikkei, kereshetően.": "Knowledge base: the articles of preparedness, searchable.",
  "Készlet: mi van, hol van, mikor jár le.": "Stock: what you have, where it is, when it expires.",
  "Mit vigyek: a csomaglista a családodra és az útra szabva.": "What to take: the packing list tailored to your family and the trip.",
  "Kockázat: a leggyengébb pontod egy gyűrűn.": "Risk: your weakest point on one ring.",
  "Háztartás: a családtagok és a helyszínek; innen számol minden más.": "Household: the family members and the locations; everything else is calculated from here.",
  "Vészkártya: amit egy idegen láthat, ha megtalálja a telefonod.": "Emergency card: what a stranger may see if they find your phone.",
  "Irattárca: az iratok fotói a telefonon, PIN mögött.": "Document wallet: photos of your documents on the phone, behind a PIN.",
  "Titkos QR: üzenet vagy hely, amit csak a kód olvasója lát.": "Secret QR: a message or a place that only the holder of the code sees.",
  "Biblia: imádságok, keresés, kiemelések, offline.": "Bible: prayers, search, highlights, offline.",
  "Token tárca: az egyenleged és a rekeszeid.": "Token wallet: your balance and your compartments.",
  "Tájoló: irány, azimut, napkelte és napnyugta.": "Compass: direction, azimuth, sunrise and sunset.",
  "Kalkulátor: víz, áram, kalória, fűtés és a többi számoló egy helyen.": "Calculator: water, power, calories, heating and the other calculators in one place.",
  "Vagyonkezelő: kiadás, bevétel, zsebek, a saját lapján.": "Asset manager: expenses, income, pockets, on its own page.",
  "Gyülekező: a közösség fóruma, interneten.": "Community: the forum of the community, on the internet.",
  "Nyelv: az app felülete azonnal átvált, a tudástár cikkei is, ha van fordításuk.": "Language: the interface of the app switches over at once, and so do the knowledge base articles, if they have a translation.",
  "Teljes mentés: minden adatod egy fájlba, amit vissza tudsz tölteni egy másik telefonon.": "Full backup: all your data into one file that you can restore on another phone.",
  "Visszatöltés a mentett fájlból. A biztonsági másolatból akkor állíts vissza, ha egy mentés félresikerült.": "Restoring from the saved file. Restore from the backup copy if a save went wrong.",
  "Menüsor bemutatása: az alsó gombok súgója újra.": "Menu bar tour: the help for the bottom buttons again.",
  "Gyári visszaállítás mindent töröl a telefonról. Előtte ments.": "Factory reset deletes everything from the phone. Save first.",
  "Ha az app sötét vagy üres marad: engedélyezd a vírusirtóban (például Avast), vagy használd a böngészős változatot. A Play-áruházban vásárolt prémium árát 48 órán belül visszakérheted.": "If the app stays dark or empty: allow it in your antivirus (for example Avast), or use the browser version. A premium purchase made on Google Play can be refunded within 48 hours.",
  "Itt minden modul listában is elérhető, ugyanoda visz, mint a kezdőlap csempéi.": "Here every module is available in a list as well, it takes you to the same place as the tiles on the home page.",
  "Add meg, mi az, mennyi, és mennyit nyom: ebből számol a készlet és a Mit vigyek.": "Give what it is, how much, and how much it weighs: the stock and the What to take are calculated from this.",
  "A lejárathoz elég egy gyors gomb: +6 hónap, +1 év. A színe magától változik, ahogy közeledik.": "For the expiry a quick button is enough: +6 months, +1 year. Its colour changes by itself as it gets closer.",
  "Hol tartod: a helyszín dönti el, melyik készültség-kártyán jelenik meg.": "Where you keep it: the location decides which readiness card it appears on.",
  "A képernyő-fény húzással állítható: minél erősebb, annál messzebbről látszik — de annál gyorsabban fogy az akku.": "The screen light is adjusted by dragging: the stronger it is, the further away it can be seen — but the faster the battery drains.",
  "Böngészőből iPhone-on a vaku egyáltalán nem indul, Androidon sem mindenhol. A képernyő-fény viszont mindig van.": "From a browser on an iPhone the flash does not start at all, and not everywhere on Android either. The screen light, however, is always there.",
  "Sípolás: éles hang a telefonból; a Folyamatos addig szól, amíg le nem állítod. A hangmagasság állítható.": "Whistling: a sharp sound from the phone; the Continuous one sounds until you stop it. The pitch can be adjusted.",
  "Újraélesztés üteme: a gomb tartja a helyes tempót. Nyomd a mellkast a jelre.": "Resuscitation rhythm: the button keeps the right tempo. Press the chest on the beat.",
  "112 hívása: közvetlenül tárcsáz. Ha nincs térerő, a segélyhívás akkor is próbálkozik.": "Calling 112: it dials directly. If there is no signal, the emergency call still tries.",
  'Mobiltelefon': 'Mobile phone',
  'Kézi rádió (adóvevő)': 'Handheld radio (transceiver)',
  'Zsebrádió': 'Pocket radio',
  'Átjátszó': 'Repeater',
  'Antenna': 'Antenna',
  'Takaró / pokróc': 'Blanket',
};

// ============================================================================
// MINTAK -- ami SZAMOT tartalmaz, az nem lehet szotar-kulcs
// ============================================================================
// A keszultsegi csempen "3 fő · 7 nap" all, es ebbol annyi valtozat van, ahany szam-par.
// Szotarba tenni oket nem lehet (sosem lenne kesz), ezert MINTAKENT allnak itt.
// A csere a fordito `String.replace`-evel megy, tehat a `$1`/`$2` a szam-csoportokra utal.
// 2026-10-11: Biblia nyito csempek, beallitasok, vers-menu, jegyzetek, kereszthivatkozasok, hang-letoltes
Object.assign(window.PP_FORD_SZOTAR.en, {
  "+ Új kategória…": "+ New category…",
  "A letölthető hanganyag listája most nem érhető el.": "The list of downloadable audio is not available right now.",
  "A letöltés csak nyitott alkalmazással halad. Ha bezárod, a következő megnyitáskor magától folytatódik.": "The download only progresses while the app is open. If you close it, it resumes by itself the next time you open it.",
  "A letöltés megállt": "The download stopped",
  "A letöltéshez be kell jelentkezned a fiókodba (Profil → Fiók).": "To download, sign in to your account (Profile → Account).",
  "A letöltéshez újra be kell lépned. Frissítsd az oldalt, és lépj be.": "To download, you need to log in again. Refresh the page and log in.",
  "A telefon saját hangja": "The phone's own voice",
  "A vers a vágólapra került, illeszd be, ahová szeretnéd.": "The verse has been copied to the clipboard; paste it wherever you like.",
  "A versek mellett egy kis jel mutatja, ha más igék kapcsolódnak hozzá; rákoppintva átugorhatsz a kapcsolódó igére. Forrás: OpenBible.info (CC BY).": "A small mark next to a verse shows when other verses are related to it; tap it to jump to the related verse. Source: OpenBible.info (CC BY).",
  "Az új kategória neve:": "Name of the new category:",
  "Biblia beállítások": "Bible settings",
  "Csak magyar nyelven érhető el.": "Only available in Hungarian.",
  "Ez az eszköz nem enged másolni.": "This device does not allow copying.",
  "Felolvasás beállításai": "Read-aloud settings",
  "Felolvasó hang": "Reading voice",
  "Forrás: OpenBible.info kereszthivatkozások (CC BY), a legtöbbet szavazottak.": "Source: OpenBible.info cross-references (CC BY), the most voted.",
  "Imák": "Prayers",
  "Jegyzeteim": "My notes",
  "Jobb minőségű, természetesebb felolvasás a Károli-fordításhoz. Internettel azonnal szól; ha letöltöd, internet nélkül is.": "Higher quality, more natural reading of the Károli translation. Plays instantly online; once downloaded, offline too.",
  "Kapcsolódó igék": "Related verses",
  "Kereszthivatkozások": "Cross-references",
  "Kereszthivatkozások megjelenítése": "Show cross-references",
  "Keresés": "Search",
  "Kiemelés": "Highlight",
  "Kiemelés levétele": "Remove highlight",
  "Kiemelések": "Highlights",
  "Kommentár": "Comment",
  "Kommentár hozzáadása": "Add comment",
  "Kommentár megnyitása": "Open comment",
  "Kommentár szerkesztése": "Edit comment",
  "Kommentárjaim": "My comments",
  "Kommentárok": "Comments",
  "Könyvjelző": "Bookmark",
  "Könyvjelző hozzáadása": "Add bookmark",
  "Könyvjelző módosítása": "Change bookmark",
  "Könyvjelző törlése": "Delete bookmark",
  "Könyvjelzők": "Bookmarks",
  "Letöltve": "Downloaded",
  "Letöltés folyamatban": "Download in progress",
  "Letöltés folytatása": "Continue download",
  "Letöltés internet nélküli felolvasáshoz": "Download for offline reading",
  "Megosztás": "Share",
  "Megszakadt az internetkapcsolat. Amit már letöltöttél, megmarad; a gombbal folytathatod.": "The internet connection dropped. What you already downloaded is kept; continue with the button.",
  "Melyik szóra keressünk a Bibliában?": "Which word should we search for in the Bible?",
  "Mind törlése": "Delete all",
  "Még nincs kiemelt vers. Tartsd nyomva egy verset, és válaszd a Kiemelés pontot.": "No highlighted verse yet. Press and hold a verse and choose Highlight.",
  "Még nincs kommentár. Tartsd nyomva egy verset, és válaszd a Kommentár hozzáadása pontot.": "No comment yet. Press and hold a verse and choose Add comment.",
  "Még nincs könyvjelző. Tartsd nyomva egy verset, és válaszd a Könyvjelző hozzáadása pontot.": "No bookmark yet. Press and hold a verse and choose Add bookmark.",
  "Nem foglal helyet, internet nélkül is szól. Kisebb telefonokra ezt ajánljuk.": "Uses no storage and works offline. Recommended for smaller phones.",
  "PrepperPapa hang": "PrepperPapa voice",
  "Saját szín hozzáadása": "Add your own colour",
  "Saját szín törlése: tartsd nyomva a színt.": "Delete your own colour: press and hold it.",
  "Teljes Biblia letöltése": "Download the whole Bible",
  "Törlöd az összes letöltött hanganyagot?": "Delete all downloaded audio?",
  "Törlöd ezt a saját színt a választékból? A már kiemelt versek megmaradnak.": "Remove this colour from your palette? Verses already highlighted stay highlighted.",
  "Válassz színt": "Choose a colour",
  "Vár": "Queued",
  "Általános": "General",
  "Várakozó könyvek": "Books waiting",
});

// 2026-10-11: a Biblia sugo v4 szovegei
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Biblia: itt a könyvek rácsa és a keresés. A teljes szöveg egyszer letöltendő, utána internet nélkül is olvasható.": "Bible: the book grid and search are here. Download the full text once, then you can read it offline.",
  "Imák: mindig elérhetők, letöltés nélkül is. Koppints egy címre, és olvasd.": "Prayers: always available, even without a download. Tap a title and read.",
  "Vészhelyzeti igék és próféciák: válogatott szakaszok, egy koppintással.": "Emergency verses and prophecies: selected passages, one tap away.",
  "Az app bibliaolvasót tartalmaz. A lelki felkészültség rész keresztény szemszögből készült.": "The app includes a Bible reader. The spiritual preparedness section is written from a Christian perspective.",
  "Tartsd nyomva egy verset: keresés, kiemelés, kommentár, könyvjelző és megosztás. Amit így jelölsz, a Kiemeléseim és a Kommentárjaim alatt visszatalálod.": "Press and hold a verse: search, highlight, comment, bookmark and share. Whatever you mark this way, you will find under My highlights and My comments.",
  "Beállítások: a felolvasó hang, a letöltés internet nélküli felolvasáshoz, és a kereszthivatkozások bekapcsolása.": "Settings: the reading voice, downloading for offline reading, and turning on cross-references.",
});

// 2026-10-11: Biblia forditas-valaszto
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Biblia-fordítás": "Bible translation",
  "Itt azok a fordítások látszanak, amelyeket már letöltöttél. Másik nyelvű Bibliát a felület nyelvének átállításával tölthetsz le.": "Only translations you have already downloaded are shown here. To download a Bible in another language, switch the app language.",
  "Ez a fordítás most nem érhető el.": "This translation is not available right now.",
});

// MEGVALLASOK + SAJAT IMA (Fonok 2026-10-11 10:09/10:10)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Megvallások": "Confessions",
  "Még nincs itt semmi. A jobb alsó plusz gombbal hozzáadhatsz egy sajátot.": "Nothing here yet. Use the plus button at the bottom right to add your own.",
  "Csak ezen a készüléken tárolódik.": "Stored on this device only.",
  "Saját hozzáadása": "Add your own",
  "Add meg a címet és a szöveget.": "Enter a title and the text.",
  "Nem sikerült menteni.": "Could not save.",
  "Biztosan törlöd?": "Delete it?",
  "saját": "own",
});

// OLVASASI TERV (Fonok 2026-10-11 10:42)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Olvasási terv": "Reading plan",
  "Válassz egy tervet. A haladásodat a telefon megjegyzi, és mutatja, hol tartasz.": "Choose a plan. Your phone remembers your progress and shows where you are.",
  "Válassz egy tervet. Több tervet is olvashatsz egyszerre, mindegyiknél külön megmarad, hol tartasz.": "Choose a plan. You can read several plans at once; each one keeps its own place.",
  "Teljes Biblia egy év alatt": "Whole Bible in a year",
  "Az elejétől a végéig, a könyvek sorrendjében.": "From beginning to end, in book order.",
  "Kronologikus Biblia egy év alatt": "Chronological Bible in a year",
  "Az események időrendjében: Jób a pátriárkák korában, a Zsoltárok Dávid idején, a próféták a királyok mellett, a levelek az Apostolok cselekedetei közé illesztve.": "In the order of events: Job in the age of the patriarchs, the Psalms in David's time, the prophets alongside the kings, the letters placed within Acts.",
  "Teljes Biblia 90 nap alatt": "Whole Bible in 90 days",
  "Gyors ütemű, a könyvek sorrendjében.": "Fast pace, in book order.",
  "Újszövetség 90 nap alatt": "New Testament in 90 days",
  "Máté evangéliumától a Jelenésekig.": "From Matthew to Revelation.",
  "Az evangéliumok 30 nap alatt": "The Gospels in 30 days",
  "Máté, Márk, Lukács és János.": "Matthew, Mark, Luke and John.",
  "Zsoltárok és Példabeszédek 60 nap alatt": "Psalms and Proverbs in 60 days",
  "Napi néhány zsoltár és egy kis bölcsesség.": "A few psalms and a little wisdom every day.",
  "Elindítod ezt a tervet?": "Start this plan?",
  "A tervet befejezted. Áldás rá!": "You have finished the plan. God bless!",
  "Tartod az ütemet.": "You are on schedule.",
  "Elolvastam": "I have read it",
  "Minden nap": "Every day",
  "Terv leállítása": "Stop plan",
  "Leállítod a tervet? A haladásod törlődik.": "Stop the plan? Your progress will be deleted.",
});

// SUGO bible v5 (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Biblia: itt a könyvek rácsa és a keresés. Fönt a fordítás, a könyv, a fejezet és a vers koppintható, így gyorsan odaugrasz. A teljes szöveg egyszer letöltendő, utána internet nélkül is olvasható.": "Bible: the book grid and search. At the top, the translation, book, chapter and verse can be tapped to jump there quickly. The full text is downloaded once and then works offline.",
  "Imák és megvallások: a jobb alsó plusz gombbal hozzáadhatod a sajátjaidat. Ezek csak ezen a telefonon tárolódnak.": "Prayers and confessions: add your own with the plus button at the bottom right. They are stored on this phone only.",
  "Olvasási terv: válassz egy tervet, például a kronologikusat, és itt látod, hol tartasz, és mi a következő olvasmány.": "Reading plan: choose a plan, for example the chronological one, and see where you are and what to read next.",
});

// SZOBAKULCS UJ ESZKOZON (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Ezen az eszközön nincs meg ennek a szobának a kulcsa: a korábbi üzenetek egy másik kulccsal készültek (másik telefonon vagy újratelepítés előtt). Ha megvan egy régi meghívó linked ehhez a szobához, nyisd meg azt ezen a telefonon, és minden olvasható lesz. Ha most új kulcsot készítesz, a régi tagok csak új meghívó link után olvassák az üzeneteidet. Készítsek új kulcsot?": "This device does not have the key for this room: earlier messages were made with a different key (on another phone or before a reinstall). If you still have an old invite link for this room, open it on this phone and everything becomes readable. If you create a new key now, older members can only read your messages after a new invite link. Create a new key?",
  "Új titkosító kulcs készült. Küldj ÚJ meghívó linket minden tagnak.": "A new encryption key was created. Send a NEW invite link to every member.",
});

// GIRA KONYV-OSSZEFESULES (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Gíra-könyv csomag (ismeretlen formátum)": "Gira ledger package (unknown format)",
  "Gíra-könyv": "Gira ledger",
  "hamis aláírás": "forged signature",
  "KÉTSZERI KÖLTÉS": "DOUBLE SPEND",
  "aláírások rendben": "signatures OK",
  "Előbb csatlakozz egy helyi szobához (Bluetooth vagy wifi).": "First join a local room (Bluetooth or wifi).",
  "Még nincs aláírt gíra-tételed, amit megoszthatnál.": "You have no signed gira items to share yet.",
  "A helyi szobának nincs titkosító kulcsa, ezért nem küldöm el a könyvet.": "The local room has no encryption key, so I will not send the ledger.",
  "Elküldve a helyi szobába": "Sent to the local room",
  "csomag": "packages",
  "Nem ment el minden csomag. Nézd meg, hogy egy hálón vagytok-e.": "Not every package was sent. Check that you are on the same network.",
  "Előbb nyiss meg egy online szobát.": "First open an online room.",
  "Az online szobának nincs titkosító kulcsa ezen a telefonon, ezért nem küldöm el a könyvet.": "The online room has no encryption key on this phone, so I will not send the ledger.",
  "Elküldve az online szobába": "Sent to the online room",
  "Nem ment el minden csomag.": "Not every package was sent.",
  "Könyvek összefésülése": "Reconcile ledgers",
  "A tagok kicserélik az aláírt gíra-tételeiket, és a telefon minden aláírást ellenőriz. Ha valaki ugyanazt a gírát kétszer adta oda, itt kiderül. Szerver és blokklánc nélkül megy: a szoba csak továbbítja a titkosított csomagot.": "Members exchange their signed gira items and the phone verifies every signature. If someone gave the same gira twice, it shows up here. No server and no blockchain: the room only forwards the encrypted package.",
  "Küldés a helyi szobába (Bluetooth / wifi)": "Send to the local room (Bluetooth / wifi)",
  "Küldés az online szobába": "Send to the online room",
  "Közösségi könyv": "Community ledger",
  "kétszeri költés": "double spends",
  "sorszám": "number",
});

window.PP_FORD_MINTAK = window.PP_FORD_MINTAK || {};
window.PP_FORD_MINTAK.en = (function () {
  // SZAMNEV-EGYEZTETES. A magyar szamnev utan nem egyeztet, a het celnyelvbol hat igen.
  // A `csere` ezeknel FUGGVENY (a motor 2026-09-02 ota elfogadja, `index.html`), es a
  // szignatura a nativ String.replace-e: (match, p1, p2, ...).
  // Kezzel, szam-osztalyonkent kulon sorral ez het nyelven kb. 330 bejegyzes lenne
  // -- ket szammal ugyanis a ket osztaly SZORZODIK (3x3).
  // KET ALAK: egyes szam csak a pontos 1-nel.
  const alak = (n, egy, tobb) => (n === 1 ? egy : tobb);
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
    csere: (_, n) => 'In this topic there ' + (+n === 1 ? 'is' : 'are') + ' ' + n + ' more article' + (+n === 1 ? '' : 's') + (+n === 1 ? '; you can read its introduction above.' : '; you can read their introductions above.') },
  { minta: /^(\d+) fő · (\d+) nap$/,
    csere: (_, a, b) => a + ' ' + alak(+a, 'person', 'people') + ' · ' + b + ' ' + alak(+b, 'day', 'days') },
  { minta: /^(\d+) fő$/,
    csere: (_, n) => n + ' ' + alak(+n, 'person', 'people') },
  { minta: /^(\d+) nap$/,
    csere: (_, n) => n + ' ' + alak(+n, 'day', 'days') },
  { minta: /^(\d+) db$/, csere: '$1 pcs' },
  { minta: /^(\d+) tétel$/,
    csere: (_, n) => n + ' ' + alak(+n, 'item', 'items') },
  { minta: /^IGE — (.+)$/, csere: 'VERSE — $1' },
  { minta: /^Ige — (.+)$/, csere: 'Verse — $1' },
  // A tudastar-temak neve a csempe-fejlecben is megjelenik, elotaggal.
  { minta: /^Tudástár — (.+)$/, csere: 'Knowledge base — $1' },
  // A Biblia belso kepernyoi (konyv -> fejezet -> vers) csak a 4 MB letoltese UTAN epulnek fel,
  // ezert minden korabbi meresunkbol kimaradtak. A fejezet-szamok mintaval mennek.
  { minta: /^(\d+)\. fejezet$/, csere: 'Chapter $1' },
  { minta: /^(\d+) fejezet$/,
    csere: (_, n) => n + ' ' + alak(+n, 'chapter', 'chapters') },
  // A vers-kepernyo fejlece ("3. fejezet · vers") osszetett -- a fenti minta nem illik ra
  // a " · vers" toldalek miatt, kulon minta kell (2026-09-06).
  { minta: /^(\d+)\. fejezet · vers$/, csere: 'Chapter $1 · verse' },
  // A Biblia-letoltes visszajelzesei szamot tartalmaznak, tehat mintaval mennek.
  { minta: /^Kész: (\d+) könyv, offline is megvan\.$/, csere: 'Done: $1 books, available offline.' },
  { minta: /^Nem sikerült: (.+)$/, csere: 'Failed: $1' },
  { minta: /^Felvéve: (.+)$/, csere: 'Added: $1' },
  { minta: /^Módosítva: (.+)$/, csere: 'Updated: $1' },
  { minta: /^Törlöd: (.+)$/, csere: 'Delete: $1' },
  // A bongeszo SAJAT hibauzenetet fuzzuk a mienkhez (angolul jon), ezert csak a keret fordul.
  { minta: /^Nem sikerült a helymeghatározás: (.+)$/, csere: 'Location could not be determined: $1' },
  { minta: /^Nem sikerült a helymeghatározás\.$/, csere: 'Location could not be determined.' },
  // VESZKARTYA-osszefoglalok (Fonok kepernyokepe 2026-08-23 20:5x). A vercsoport es az
  // allergia-lista osszefuzve all egy csomopontban, tehat csak mintaval fogható meg.
  { minta: /^vércsoport hiányzik · allergia: (.+)$/, csere: 'blood type missing · allergy: $1' },
  { minta: /^vércsoport hiányzik · nincs ismert allergia$/, csere: 'blood type missing · no known allergy' },
  { minta: /^(.+) · nincs ismert allergia$/, csere: '$1 · no known allergy' },
  { minta: /^(.+) · allergia: (.+)$/, csere: '$1 · allergy: $2' },
  // A nap-ora ket idopontot tartalmaz, tehat a mondat egeszben nem lehet szotar-kulcs.
  {
    minta: /^Használható fény (\d{1,2}:\d{2}) és (\d{1,2}:\d{2}) között: a napkelte előtt és a napnyugta után is van még annyi, amivel lehet menni\.$/,
    csere: 'Usable light between $1 and $2: there is still enough before sunrise and after sunset to move.',
  },
  { minta: /^növekvő hold, (\d+)%$/, csere: 'waxing moon, $1%' },
  { minta: /^fogyó hold, (\d+)%$/, csere: 'waning moon, $1%' },
  { minta: /^(\d+) fő · (\d+) nap · (.+)$/,
    csere: (_, a, b, c) => a + ' ' + alak(+a, 'person', 'people') + ' · ' + b + ' ' + alak(+b, 'day', 'days') + ' · ' + c },

  // KoZoSSEGI SZOBAK (Fonok kepernyokepe 2026-08-24 06:01). A sor egyetlen szoveg-
  // csomopontban all ossze (`nev + ' · N tag · Gazda inditotta'`), tehat szotar-kulcsnak
  // nem alkalmas. A SZOBA NEVE ES A GAZDA NEVE ADAT: a minta valtozatlanul atviszi oket
  // ($1, $3) -- egy "Gyulekezo" nevu szobat leforditani ugyanaz a hiba lenne, mint egy
  // cegnevet leforditani egy kimeno levelben.
  // A SORREND ITT SZAMIT: a fordito az ELSo illeszkedo mintat hasznalja, ezert a
  // harom-mezos alak all elol, a ket-mezos utana.
  { minta: /^(.+) · (\d+) tag · te indítottad$/,
    csere: (_, a, n) => a + ' · ' + n + ' ' + alak(+n, 'member', 'members') + ' · you started it' },
  { minta: /^(.+) · (\d+) tag · (.+) indította$/,
    csere: (_, a, n, k) => a + ' · ' + n + ' ' + alak(+n, 'member', 'members') + ' · started by ' + k },
  { minta: /^(\d+) tag · te indítottad$/,
    csere: (_, n) => n + ' ' + alak(+n, 'member', 'members') + ' · you started it' },
  { minta: /^(\d+) tag · (.+) indította$/,
    csere: (_, n, k) => n + ' ' + alak(+n, 'member', 'members') + ' · started by ' + k },
  { minta: /^még egyedül · te indítottad$/, csere: 'on your own so far · you started it' },
  { minta: /^még egyedül · (.+) indította$/, csere: 'on your own so far · started by $1' },
  { minta: /^(.+) · (\d+) tag$/,
    csere: (_, a, n) => a + ' · ' + n + ' ' + alak(+n, 'member', 'members') },
  { minta: /^(.+) · te indítottad$/, csere: '$1 · you started it' },
  { minta: /^(.+) · (.+) indította$/, csere: '$1 · started by $2' },
  { minta: /^(\d+) tag$/,
    csere: (_, n) => n + ' ' + alak(+n, 'member', 'members') },

  // A futesigeny harmadik forras-alakja teruletet tartalmaz, tehat szam van benne.
  { minta: /^([\d.,]+) m² alapján$/, csere: 'based on $1 m²' },
  // OLVASASI TERV (2026-10-11)
  { minta: /^Kész: (\d+) \/ (\d+) nap \((\d+)%\)$/, csere: "Done: $1 / $2 days ($3%)" },
  { minta: /^Következő olvasmány: (\d+)\. nap$/, csere: "Next reading: day $1" },
  { minta: /^Lemaradás: (\d+) nap$/, csere: (_, n) => 'Behind by ' + n + ' ' + alak(+n, "day", "days") },
  { minta: /^Előrébb jársz: (\d+) nap$/, csere: (_, n) => 'Ahead by ' + n + ' ' + alak(+n, "day", "days") },
  { minta: /^Napi átlag: ([\d,]+) fejezet$/, csere: "Daily average: $1 chapters" },
  { minta: /^(\d+)\. nap( •)?$/, csere: (_, n, p) => "Day #".replace('#', n) + (p || '') },
  ];
})();

// ===== 2026-10-13: ujjlenyomatos feloldas + PIN modositasa (v43.157) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Ujjlenyomattal": "With fingerprint",
  "Ujjlenyomat bekapcsolása": "Turn on fingerprint unlock",
  "Tárca feloldása": "Unlock wallet",
  "PIN-nel": "Use PIN",
  "Az ujjlenyomathoz mentett PIN már nem érvényes. Add meg a PIN-t, utána újra bekapcsolhatod.": "The PIN saved for your fingerprint is no longer valid. Enter your PIN, then you can turn it on again.",
  "Új ujjlenyomatot vettél fel a telefonon, ezért egyszer add meg a PIN-t.": "A new fingerprint was added on the phone, so enter your PIN once.",
  "Az ujjlenyomatos feloldás most nem sikerült, add meg a PIN-t.": "Fingerprint unlock did not work this time, enter your PIN.",
  "Bekapcsolod az ujjlenyomatos feloldást? A PIN-t ekkor a telefon saját biztonsági kulcstára őrzi, az ujjad csak azt nyitja. A PIN ugyanúgy működik.": "Turn on fingerprint unlock? Your PIN is then kept by the phone's own secure keystore, and your finger only opens that. The PIN keeps working as before.",
  "Bekapcsolom": "Turn it on",
  "Most nem": "Not now",
  "Bekapcsolva: legközelebb ujjlenyomattal is beléphetsz.": "Turned on: next time you can also unlock with your fingerprint.",
  "Nem kapcsoltuk be. Később is megteheted: koppints újra a gombra.": "Not turned on. You can do it later: tap the button again.",
  "Nem sikerült bekapcsolni.": "Could not turn it on.",
  "A tár megnyitása nem sikerült.": "Could not open the vault.",
  "PIN módosítása": "Change PIN",
  "Régi PIN": "Old PIN",
  "Új PIN (4-6 számjegy)": "New PIN (4-6 digits)",
  "Új PIN még egyszer": "New PIN again",
  "Hibás a régi PIN.": "The old PIN is wrong.",
  "Az új PIN 4-6 számjegy legyen.": "The new PIN must be 4-6 digits.",
  "A két új PIN nem egyezik.": "The two new PINs do not match.",
  "A PIN módosítása nem sikerült, a régi PIN maradt érvényben.": "Changing the PIN failed; the old PIN is still valid.",
  "A PIN megváltozott.": "The PIN has been changed.",
  "A PIN megváltozott. Az ujjlenyomatos feloldás kikapcsolt, a következő PIN-es belépéskor újra bekapcsolhatod.": "The PIN has been changed. Fingerprint unlock was turned off; you can turn it on again at your next PIN login."
});

// ===== 2026-10-13: teszt-PIN, 6 szamjegy, Gira-kulcs a PIN mogott (v43.159) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Állíts be egy PIN-t (6 számjegy)": "Set a PIN (6 digits)",
  "Új PIN (6 számjegy)": "New PIN (6 digits)",
  "6 számjegy kell.": "6 digits are needed.",
  "Az új PIN 6 számjegy legyen.": "The new PIN must be 6 digits.",
  "Tesztidőszak: a PIN 000000": "Test period: the PIN is 000000",
  "Tesztidőszak: a PIN 0000": "Test period: the PIN is 0000",
  "A Gíra aláíró kulcsa a PIN mögött van: nyisd meg a Token tárcát.": "The Gíra signing key is behind the PIN: open the Token wallet."
});

// ===== 2026-10-13: ujjlenyomat-animacio (v43.160) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Tedd az ujjad az érzékelőre": "Place your finger on the sensor",
  "Feloldva": "Unlocked"
});

// ===== 2026-10-13: ujjlenyomat-kor huzasa (v43.161) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Ha a kör nem az ujjlenyomat-olvasón van, húzd a helyére: a telefon megjegyzi.": "If the ring is not on the fingerprint sensor, drag it there: the phone will remember."
});

// ===== 2026-10-13: OSM-alapreteg elore letoltese szunetel (v43.162) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Az alaptérkép előre letöltése szünetel, amíg elkészül a saját térképszerverünk. A már megnézett részek megmaradnak; a Turista réteget továbbra is letöltheted.": "Pre-downloading the base map is paused until our own map server is ready. Parts you have already viewed stay saved; you can still download the Hiking layer."
});


// ===== 2026-10-13: app-engedely a tesztidoszakra (v43.169, 0a58dbbb) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "PrepperPapa · tesztidőszak": "PrepperPapa · test period",
  "A tesztidőszakban az app csak jóváhagyott tesztelői fiókkal használható. Lépj be az e-mail címeddel: kapsz egy 6 jegyű kódot, és utána a telefon megjegyzi, frissítés után sem kell újra.": "During the test period the app can only be used with an approved tester account. Sign in with your e-mail address: you will get a 6-digit code, and after that the phone remembers it, even after updates.",
  "Belépés": "Sign in",
  "Engedély kérése…": "Requesting licence…",
  "Ehhez a fiókhoz nincs engedély. Ha szerinted ez hiba, írj a prepperpapa@gmail.com címre.": "This account has no licence. If you think this is a mistake, write to prepperpapa@gmail.com.",
  "Az első belépéshez internetkapcsolat kell.": "The first sign-in needs an internet connection.",
  "Az engedély most nem sikerült, próbáld újra.": "The licence could not be obtained right now, please try again.",
  "Lejárt az engedélyed. Lépj be újra (ehhez internet kell).": "Your licence has expired. Sign in again (this needs internet)."
});


// ===== 2026-10-13: terkep-kereso es turistapontok (v43.171, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "saját pont": "own point",
  "helyszín": "place",
  "Nincs találat.": "No results.",
  "Turistaút": "Hiking trail",
  "internet kell hozzá": "needs internet",
  "nemzetközi": "international",
  "országos": "national",
  "regionális": "regional",
  "helyi": "local",
  "csúcs": "peak",
  "nyereg": "saddle",
  "forrás": "spring",
  "ivóvíz": "drinking water",
  "kút": "well",
  "barlang": "cave",
  "kilátópont": "viewpoint",
  "kilátó": "lookout tower",
  "menedékház, esőbeálló": "hut, shelter",
  "táborhely": "campsite",
  "pihenőhely": "picnic site",
  "útjelző tábla": "guidepost",
  "rom": "ruins",
  "vár": "castle",
  "kereszt, kápolna": "cross, chapel"
});
Object.assign(window.PP_FORD_SZOTAR.en, {"Turistaút, csúcs, forrás, hely…": "Trail, peak, spring, place…"});

// ===== 2026-10-13: utvonalon megyek (v43.172, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Indulás": "Start",
  "Leállítás": "Stop",
  "Navigáció indul": "Navigation starting",
  "Indulj el az útvonalon: az első lépésekből látom, merre mész.": "Start walking along the route: your first steps show me which way you are going.",
  "Letértél az útvonalról.": "You have left the route.",
  "Letértél az útvonalról": "You have left the route",
  "Az útvonal": "Route",
  "irány": "bearing",
  "Visszatértél az útvonalra.": "You are back on the route.",
  "Az útvonalon vagy": "You are on the route",
  "Indulj el: az első lépésekből látom, merre mész.": "Start walking: your first steps show me which way you are going.",
  "Megérkeztél az útvonal végére.": "You have reached the end of the route.",
  "Hátra": "Remaining",
  "Megtett": "Distance done",
  "Érkezés": "Arrival",
  "Szintgrafikon": "Elevation profile",
  "emelkedő": "climb",
  "múlva": "in",
  "előtted": "ahead",
  "cél": "finish",
  "utána ezt kövesd:": "then follow:",
  "élesen jobbra": "sharp right",
  "jobbra": "right",
  "élesen balra": "sharp left",
  "balra": "left",
  "Most fordulj": "Turn now",
  "méter múlva fordulj": "metres, then turn",
  "Egyenesen tovább": "Continue straight"
});

// ===== 2026-10-13: utvonaltervezes A-bol B-be (v43.173, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Útvonal ide": "Route here",
  "Innen indulok": "Start from here",
  "Saját helyzetem": "My position",
  "Válaszd ki a célt: keresés vagy egy pont buboréka": "Choose the destination: search or a point’s bubble",
  "Tervezés törlése": "Clear plan",
  "Tervezés…": "Planning…",
  "Nincs GPS-helyzet: válassz kezdőpontot (egy pont buborékán: „Innen indulok”).": "No GPS position: choose a start point (on a point’s bubble: “Start from here”).",
  "A turistaút-hálózat nem töltődött be.": "The trail network did not load.",
  "Nem találtam turistaút-útvonalat a két pont között.": "No trail route found between the two points.",
  "A turistaútig": "To the trail",
  "légvonalban": "as the crow flies",
  "Tervezett útvonal": "Planned route",
  "Kövesd ezt a jelzést:": "Follow this marking:",
  "Kövesd az utat": "Follow the path",
  "és kövesd ezt:": "and follow:"
});

// ===== 2026-10-13: kulfoldi turistautak =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Külföld országonként: térkép és turistautak": "Abroad by country: map and hiking trails",
  "Tájegységek": "Regions",
  "Turistautak és pontok": "Hiking trails and points",
  "Alaptérkép": "Base map",
  "Ennek az országnak a térképe egyben túl nagy.": "This country's map is too large in one piece.",
  "Tájegységenként letöltheted: nyisd le a listáját.": "You can download it by region: open its list.",
  "Országonként külön letölthetők a turistautak a pontokkal és az útvonaltervezővel (ezek az online térképen is működnek, és kevés helyet foglalnak), és külön az alaptérkép a térerő nélküli használathoz. Az alaptérképet az első kéréskor a szerver készíti elő, ez néhány perc lehet.": "For each country you can download the hiking trails with points and the route planner separately (they also work on the online map and take little space), and separately the base map for use without signal. The server prepares the base map on the first request, which can take a few minutes.",
  "tájegységenként letölthető": "downloadable by region",
  "a méret letöltéskor derül ki": "size is known once downloaded",
  "Ennek a tájegységnek a térképe egyben túl nagy.": "This region's map is too large in one piece.",
  "A tájegység térképét most nem sikerült előkészíteni.": "The region's map could not be prepared right now.",
  "Előkészítés…": "Preparing…",
  "a térkép túl nagy egyben": "the map is too large in one piece",
  "Most egy másik ország térképe készül, próbáld újra pár perc múlva.": "Another country's map is being prepared, try again in a few minutes.",
  "Az ország térképét most nem sikerült előkészíteni.": "The country's map could not be prepared right now.",
  "A külföldi lista most nem érhető el.": "The foreign list is not available right now.",
  "A két pont túl messze van egymástól (legfeljebb kb. 80 km).": "The two points are too far apart (at most about 80 km)."
});

// ===== 2026-10-13: GPX be/ki (v43.178) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Nincs kiválasztott útvonal.": "No route selected.",
  "Az útvonal megjelent, de a telefon tárhelye megtelt, nem mentődött el.": "The route is shown, but the phone storage is full, so it was not saved.",
  "Ezt a fájlt nem tudtam GPX-ként beolvasni.": "I could not read this file as GPX.",
  "GPX útvonal betöltése": "Load a GPX route",
  "fájl a telefonról": "file from the phone"
});

// ===== 2026-10-13: tajolo hangvezetes (v43.179) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Hangvezetés": "Audio guidance",
  "Előbb vegyél fel egy irányt, utána szól a hangvezetés.": "Set a bearing first, then the audio guidance starts."
});
// ===== 2026-10-14: jelzes nelkuli utak, ujratervezes, hosszu nyomas (v43.182) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Kijelölt pont": "Selected point",
  "Új útvonalat tervezek innen…": "Planning a new route from here…",
  "Új útvonalat terveztem, hossza": "New route planned, length",
  "Jelzés nélküli ösvényen": "On an unmarked path",
  "Jelzés nélküli földúton": "On an unmarked dirt track",
  "Utcán vagy közúton": "On a street or road",
  "a jelzés nélküli ösvényt": "the unmarked path",
  "a földutat": "the dirt track",
  "az utcát vagy közutat": "the street or road",
  "Az út végétől a célig": "From the end of the path to the destination",
  "teljes túra": "whole trail",
  "szakasz": "sections",
  "Rádióamatőr átjátszók": "Amateur radio repeaters",
  "Rádióamatőr átjátszó": "Amateur radio repeater",
  "Kimenő (hallgatás)": "Output (listen)",
  "Bemenő / eltolás": "Input / shift",
  "Mód": "Mode",
  "Csak rádióamatőr vizsgával és engedéllyel használható.": "Usable only with an amateur radio licence.",
  "Az alaptérképet az OpenStreetMap szabályai miatt nem lehet előre letölteni (a megnézett részek megmaradnak). Internet nélkül a Saját térkép működik: Magyarországra tájegységenként letöltheted itt lent, az „Offline térkép” csoportban.": "The base map cannot be downloaded in advance because of OpenStreetMap's rules (the parts you have viewed are kept). Without internet the Own map works: for Hungary you can download it by region below.",
  "Átváltok a Saját térképre": "Switch to the Own map",
  "Saját térkép bekapcsolva. A tájegységeket itt lent, az „Offline térkép” csoportban töltheted le.": "Own map switched on. Download the regions below, under “Offline map by region”."
});

// ===== 2026-10-15: femkereso + eses-erzekeles (kartya 898b5891) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Fémkereső: vas és acél a közelben": "Metal detector: iron and steel nearby",
 "Fémkereső": "Metal detector",
 "Vezeték, cső, fém a falban vagy a földben": "Wire, pipe, metal in the wall or ground",
 "Nullázás után itt látszik a változás": "After zeroing, the change shows here",
 "Nullázás": "Zero",
 "Hang: be": "Sound: on",
 "Hang: ki": "Sound: off",
 "Tartsd a telefont távol a fémtől, és nyomd meg a Nullázást. Utána lassan húzd végig a falon vagy a talajon: fém közelében nő a szám, és sűrűbben, magasabban pittyeg.": "Hold the phone away from metal and press Zero. Then slowly sweep it along the wall or ground: near metal the number rises and it beeps faster and higher.",
 "AMIT EZ TUD ÉS AMIT NEM. A vas- és acéltárgyat (cső, szög, vasbeton, áramalatti vezeték) néhány centiméterről érzékeli, mélyebbről nem. Rezet, alumíniumot, aranyat nem talál. A pontosság telefononként nagyon eltér; ne erre bízd, hogy fúrhatsz-e a falba.": "WHAT IT CAN AND CANNOT DO. It senses iron and steel (pipe, nail, rebar, live cable) from a few centimetres, not deeper. It does not find copper, aluminium or gold. Accuracy varies a lot between phones; do not rely on it to decide whether you can drill into a wall.",
 "Ehhez a telefonos PrepperPapa app kell: a böngésző nem adja ki az iránytű-érzékelő nyers értékét.": "This needs the PrepperPapa phone app: the browser does not expose the compass sensor's raw value.",
 "a nullához képest": "relative to zero",
 "Az érzékelő pontatlan: mozgasd a telefont nyolcas alakban néhányszor, aztán nullázz.": "The sensor is inaccurate: move the phone in a figure-eight a few times, then zero.",
 "Esés-érzékelés": "Fall detection",
 "Esés után automatikus SOS": "Automatic SOS after a fall",
 "Ha a telefon nagy ütést érez, és utána egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a": "If the phone feels a hard impact and then does not move for a minute, it counts down loudly. If you do not press the",
 "Jól vagyok": "I'm OK",
 "gombot, SOS üzenetet küld a helyzeteddel minden szobádba, és megszólal a vészsíp.": "button, it sends an SOS message with your location to all your rooms and the emergency whistle sounds.",
 "Esést érzékeltem": "Fall detected",
 "másodperc múlva SOS üzenet megy a helyzeteddel": "seconds until an SOS message with your location is sent",
 "SOS most": "SOS now",
 "Bekapcsolva. Háttérben és kikapcsolt képernyőn is figyel.": "On. It also watches in the background and with the screen off.",
 "Bekapcsolva, de csak addig figyel, amíg az app nyitva van (a telefonos appban háttérben is).": "On, but it only watches while the app is open (in the phone app also in the background).",
 "A mozgás-érzékelő használatát nem engedélyezted.": "You did not allow the motion sensor.",
 "Rendben, nem küldtem SOS-t.": "OK, no SOS was sent.",
 "Esést érzékeltem, és nem reagálok.": "I have detected a fall and I am not responding.",
 "Itt vagyok": "I am here",
 "A helyzetemet nem sikerült meghatározni.": "My location could not be determined.",
 "SOS elküldve": "SOS sent",
 "szobába": "rooms",
 "Az SOS üzenet nem ment el (nincs szoba vagy kapcsolat). A vészsíp szól.": "The SOS message was not sent (no room or no connection). The whistle is sounding.",
 "Eszközök": "Tools",
 "Fémdetektor": "Metal detector",
 "Víz, áram, kalória, fűtés és a többi számoló": "Water, power, calories, heating and the other calculators",
 "Eszközök: a kalkulátorok, a fémdetektor, a tükör és a vad- és rovarriasztó egy helyen.": "Tools: the calculators, the metal detector, the mirror and the wildlife and insect repeller in one place.",
 "Tükör": "Mirror",
 "Előlapi kamera fénykerettel, sérülés megnézéséhez": "Front camera with a light frame, to check an injury",
 "Fény: be": "Light: on",
 "Fény: ki": "Light: off",
 "A kamera nem nyitható meg. Engedélyezd a kamerát az app beállításaiban.": "The camera can't be opened. Allow the camera in the app settings.",
 "Két ujjal csippentve nagyítasz. A fehér keret világítja meg az arcod; sötétben tedd a képernyő fényerejét maximumra.": "Pinch with two fingers to zoom. The white frame lights your face; in the dark, turn the screen brightness to maximum.",
 "Privát üzenet": "Private message",
 "Gíra küldése": "Send gíra",
 "Vad- és rovarriasztó": "Wildlife and insect repeller",
 "Magas hang vadak és szúnyogok ellen": "High-pitched sound against wildlife and mosquitoes",
 "A riasztó hangja most nem indult el.": "The repeller sound did not start.",
 "Előzmény": "History",
 "Legutóbb olvasott igék": "Recently read verses",
 "Korábbi keresések": "Previous searches",
 "Még nincs olvasott ige. Amit a Bibliában megnyitsz, itt jelenik meg.": "No verses read yet. What you open in the Bible will appear here.",
 "Még nincs korábbi keresés. Amit itt keresel, ide kerül.": "No previous searches yet. What you search for here will be listed.",
 "Olvasási terv: csak ez az olvasmány látszik, a felolvasás a végén megáll.": "Reading plan: only this reading is shown, and read-aloud stops at its end.",
 "Az olvasmány vége": "End of the reading",
 "Vissza a tervemhez": "Back to my plan",
 "Ébresztő": "Alarm",
 "Reggel felébreszti a telefont, és felolvassa a terv mai olvasmányát.": "Wakes the phone in the morning and reads today's reading of the plan aloud.",
 "Bekapcsolva": "On",
 "Kikapcsolva": "Off",
 "Időpont": "Time",
 "Napok": "Days",
 "Válassz legalább egy napot.": "Choose at least one day.",
 "Következő ébresztés:": "Next alarm:",
 "Ebben a böngészőben és iPhone-on az ébresztő nem tud megszólalni: a weboldal nem kapcsolhatja be a lezárt telefont. Az ébresztő az Android appban működik. A beállításod itt megmarad.": "In this browser and on iPhone the alarm cannot ring: a web page cannot turn on a locked phone. The alarm works in the Android app. Your setting is kept here.",
 "Ehhez az ébresztőhöz frissítsd az appot a legújabb változatra.": "Update the app to the latest version to use this alarm.",
 "Az értesítés nincs engedélyezve: enélkül az ébresztő nem tud megjelenni.": "Notifications are not allowed: without them the alarm cannot appear.",
 "Értesítés engedélyezése": "Allow notifications",
 "A pontos időzítés nincs engedélyezve (Ébresztők és emlékeztetők): az ébresztő így akár negyed órát is késhet.": "Exact timing is not allowed (Alarms & reminders): the alarm may be up to a quarter of an hour late.",
 "Pontos időzítés engedélyezése": "Allow exact timing",
 "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon csak értesítés jelenik meg, a felolvasás a koppintásra indul.": "Full-screen notifications are not allowed: on a locked phone only a notification appears, and reading starts when you tap it.",
 "Teljes képernyő engedélyezése": "Allow full screen",
 "Az ébresztő be van állítva.": "The alarm is set.",
 "Az ébresztőt most nem sikerült beállítani. Próbáld újra később.": "The alarm could not be set right now. Please try again later.",
 "Bibliaolvasás ébresztő": "Bible reading alarm",
 "Reggeli ige": "Morning word",
 "A mai olvasmány felolvasása indul.": "Today's reading is starting.",
 "Szundi 10 perc": "Snooze 10 min"
});

// ===== 2026-10-18: Bible alarm polish (v43.259): stop button, time picker, spoken intro/blessing =====
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Leállítom": "Stop",
 "Óra": "Hour",
 "Perc": "Minute",
 "{konyv} {a}. fejezet": "{konyv} chapter {a}",
 "{konyv} {a}–{b}. fejezet": "{konyv} chapters {a} to {b}",
 "Jó reggelt! Olvasási terv: {terv}. A mai olvasmány: {resz}.": "Good morning! Reading plan: {terv}. Today's reading: {resz}.",
 "Jó reggelt! {ido} van. Ma {datum}. A mai olvasmány: {resz}.": "Good morning! It is {ido}. Today is {datum}. Today's reading: {resz}.",
 "Áldott napot kívánok!": "Have a blessed day!"
});

// ===== 2026-10-18: daily tester task popup (v43.261, card 84c182b9): the popup and the seeded tasks =====
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Mai tesztfeladat": "Today's test task",
 "Hogyan működik": "How it works",
 "Mit próbálj ki": "What to try",
 "Ezt a feladatot a készüléked és a felület alapján kaptad, név nélkül.": "You got this task based on your device and on whether you use the app or the browser, without your name.",
 "Működik": "Works",
 "Hibás": "Broken",
 "Később": "Later",
 "Köszönjük, megkaptuk a visszajelzést.": "Thank you, we received your feedback.",
 "Most nincs kapcsolat. Elmentettem, és magától elküldöm, amint lesz.": "No connection right now. Saved, and it will be sent automatically once there is one.",
 "Ezt a szerver most nem fogadta el. Próbáld újra később.": "The server did not accept this now. Please try again later.",
 "Most nem érem el a szervert. Próbáld újra később.": "Cannot reach the server right now. Please try again later.",
 "Mára nincs több tesztfeladat. Köszönjük a segítséget!": "No more test tasks for today. Thank you for your help!",
 "Tesztfeladat": "Test task",
 "Mi nem működött?": "What did not work?",
 "Biblia: az olvasási terv ébresztője": "Bible: the reading plan alarm",
 "Az olvasási terv ébresztője a beállított időben felébreszti a telefont, a lezárt képernyő fölött megnyitja az aznapi olvasmányt, és felolvassa. Halkan indul, és bő fél perc alatt erősödik fel; előtte egy rövid köszöntés elmondja, mi a mai olvasmány. Amíg olvas, a képernyő alján egy nagy Leállítom gomb van.": "The reading plan alarm wakes the phone at the set time, opens today's reading over the lock screen and reads it aloud. It starts quietly and gets louder over about half a minute; before that, a short greeting says what today's reading is. While it reads, there is a big Stop button at the bottom of the screen.",
 "Biblia > Olvasási terv: nyiss meg egy futó tervet, kapcsold be az ébresztőt, és állítsd az időpontot 2 perccel későbbre.": "Bible > Reading plan: open a running plan, switch the alarm on and set it 2 minutes ahead.",
 "Zárd le a telefont, és tedd le. Figyeld: felébred-e a telefon, halkan indul-e a hang, és elhangzik-e a köszöntés.": "Lock the phone and put it down. Watch: does the phone wake up, does the sound start quietly, and do you hear the greeting?",
 "Koppints a nagy Leállítom gombra: a felolvasásnak azonnal meg kell állnia.": "Tap the big Stop button: the reading must stop at once.",
 "Biblia: a könyvcsoportok színei": "Bible: colours of the book groups",
 "A Biblia könyvlistáján a könyvek csoportonként színes csempéken állnak. A csoportok ugyanazt az öt zöld árnyalatot kapják, de világos és sötét váltakozva, hogy két szomszédos csoport jól elváljon egymástól. Éjszakai módban ugyanez vörös árnyalatokkal.": "In the Bible's book list the books stand on coloured tiles, group by group. The groups use the same five shades of green, but light and dark alternate, so two neighbouring groups are clearly separated. In night mode the same with shades of red.",
 "Nyisd meg a Bibliát, és koppints a Biblia csempére, hogy megjelenjen a könyvek listája.": "Open the Bible and tap the Bible tile to show the list of books.",
 "Nézd végig a csempéket: jól elválnak-e a szomszédos csoportok, és minden könyvnév olvasható-e a háttéren?": "Look through the tiles: are neighbouring groups clearly separated, and is every book name readable on its background?",
 "Lenyíló lista: a vissza csak a listát zárja": "Drop-down list: back closes only the list",
 "Ha egy lenyíló lista (például a Rádió-hatótáv sávválasztója) nyitva van, a vissza gomb először csak a listát zárja be, és ugyanazon a képernyőn maradsz. Ha közben másik képernyőre lépsz, a nyitott lista nem maradhat ott a következő képernyő fölött.": "When a drop-down list (for example the band selector of Radio range) is open, the back button first closes only the list, and you stay on the same screen. If you move to another screen meanwhile, the open list must not stay over the next screen.",
 "Kalkulátor > Rádió-hatótáv: koppints a sáv választójára, hogy lenyíljon a lista.": "Calculator > Radio range: tap the band selector to open the list.",
 "Nyomd meg a vissza gombot: a lista bezárul, és a Rádió-hatótáv képernyő marad.": "Press the back button: the list closes and the Radio range screen stays.",
 "Nyisd ki újra a listát, és lépj át egy másik képernyőre: a lista nem maradhat ott lebegve.": "Open the list again and move to another screen: the list must not stay there floating.",
 "Szobák: privát üzenet (Csak neki)": "Rooms: private message (Only to)",
 "Egy internetes szobában egy tagnak úgy is írhatsz, hogy csak ő lássa. Ilyenkor a beíró mező fölött „Csak neki” sáv áll a nevével; amíg ez látszik, az üzenet biztosan privátként megy el, és a sáv nem takarja el a legutolsó üzenetet. Ha mégsem megy el, az app megmondja, miért, és a beírt szöveg megmarad.": "In an internet room you can write to one member so that only they see it. Then an \"Only to\" bar with their name stands above the input field; while it is shown, the message surely goes as private, and the bar does not cover the last message. If it still does not go out, the app tells you why, and your text is kept.",
 "Nyiss meg egy szobát, ahol van legalább egy másik tag, és koppints egy tőle jött üzenet mellett a képére.": "Open a room with at least one other member, and tap the picture next to a message from them.",
 "Írj egy rövid üzenetet, és küldd el. A legutolsó üzenetnek a „Csak neki” sáv fölött kell látszania.": "Write a short message and send it. The last message must be visible above the \"Only to\" bar.",
 "Ha meg tudod kérdezni: a címzett megkapta, a többiek nem látják.": "If you can ask: the recipient got it, the others do not see it."
});
// ===== 2026-10-18: Noah for every tester (v43.262, card 84bede18): Android-only note, download confirm, memory reason, daily task =====
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Noah, az offline MI segéd a telefonra telepített Android appban fut: a nyelvi modellt a telefon egyszer letölti, utána internet nélkül, helyben válaszol. A böngészős változatban és iPhone-on nem érhető el, mert ide a modell nem tölthető le.": "Noah, the offline AI assistant, runs in the Android app installed on the phone: the phone downloads the language model once, and after that it answers locally, without internet. It is not available in the browser version or on iPhone, because the model cannot be downloaded there.",
 "Ehhez Android 11 vagy újabb, legalább 6 GB memóriás telefon kell, és 6-8 GB szabad hely.": "This needs a phone with Android 11 or newer, at least 6 GB of memory, and 6-8 GB of free space.",
 "A nyelvi modell válasz közben kb. 3 GB memóriát használ. 6 GB-nál kevesebb memóriájú telefonon a rendszer ilyenkor leállítaná az appot, ezért itt Noah nem használható.": "While answering, the language model uses about 3 GB of memory. On a phone with less than 6 GB of memory the system would stop the app, so Noah cannot be used here.",
 "Ezen a telefonon nem fut:": "It does not run on this phone:",
 "Android 11 vagy újabb kell": "Android 11 or newer is needed",
 "64 bites ARM processzor kell": "a 64-bit ARM processor is needed",
 "legalább 6 GB memória kell": "at least 6 GB of memory is needed",
 "nem támogatott": "not supported",
 "Ehhez a modellhez kevés a telefon memóriája.": "This phone does not have enough memory for this model.",
 "Letöltöd a(z) {modell} modellt?": "Download the {modell} model?",
 "Letöltés: {meret}, egyszer kell letölteni.": "Download: {meret}, needed only once.",
 "Szabad hely: kb. {hely} kell, mert az első használatkor a telefon még egyszer ennyit foglal a gyorsabb futáshoz.": "Free space: about {hely} is needed, because on first use the phone takes the same amount again to run faster.",
 "Memória: legalább {ajanlott} GB-os telefon ajánlott.": "Memory: a phone with at least {ajanlott} GB is recommended.",
 "Ez a telefon {ram} GB-os.": "This phone has {ram} GB.",
 "Most mobilinternetet használsz: a letöltés {meret} adatforgalom. Wi-Fi ajánlott.": "You are on mobile data now: the download is {meret} of data traffic. Wi-Fi is recommended.",
 "Offline MI segéd": "Offline AI assistant",
 "Offline MI segéd használata": "Use the offline AI assistant",
 "A segéd a fejléc gombjával nyílik; a modell letöltése és a beállításai a segéd oldalán vannak.": "The assistant opens with the header button; the model download and its settings are on the assistant's page.",
 "Offline MI segéd · a tudástárból, forrással": "Offline AI assistant · from the knowledge base, with sources",
 "Kérdezz": "Ask",
 "Noah, az offline MI segéd": "Noah, the offline AI assistant",
 "Noah a telefonon futó MI segéd: a tudástárból, a Bibliából és az app adataidból válaszol, internet nélkül. A nyelvi modellt egyszer kell letölteni (2,6 vagy 3,7 GB). Letöltés előtt az app kiírja a méretet, a szükséges szabad helyet és memóriát, mobilinterneten pedig Wi-Fi-t javasol. 6 GB-nál kevesebb memóriájú telefonon nem használható, és ezt meg is indokolja.": "Noah is the AI assistant running on the phone: it answers from the knowledge base, the Bible and your app data, without internet. The language model has to be downloaded once (2.6 or 3.7 GB). Before the download the app shows the size, the free space and memory needed, and on mobile data it recommends Wi-Fi. On a phone with less than 6 GB of memory it cannot be used, and the app explains why.",
 "Beállítások: kapcsold be az „Offline MI segéd használata” pontot, majd nyisd meg Noah-t a fejléc szikra gombjával.": "Settings: switch on “Use the offline AI assistant”, then open Noah with the spark button in the header.",
 "A fogaskerék alatt nyomd meg a Letöltés gombot: nézd meg, kiírja-e a méretet, a helyet és a memóriát, mielőtt elindul. Wi-Fi-n töltsd le.": "Under the gear, press Download: check whether it shows the size, the space and the memory before it starts. Download it on Wi-Fi.",
 "Kérdezz tőle valamit, például: „Hogyan tisztítsak vizet?” Nézd meg, kapsz-e választ forrással.": "Ask it something, for example: “How do I purify water?” Check whether you get an answer with a source.",
 "Ha a telefon nagy ütést érez, és utána egy percig nem mozdul, felkapcsolja a kijelzőt (lezárt telefonon is), és hangosan visszaszámol. Ha nem nyomod meg a": "If the phone feels a hard impact and then does not move for a minute, it turns on the screen (also on a locked phone) and counts down loudly. If you do not press the",
 "Utána megszólal a vészsíp.": "Then the emergency whistle sounds.",
 "Esés-riasztás": "Fall alarm",
 "%d másodperc múlva SOS üzenet megy a helyzeteddel. Ha jól vagy, nyomd meg: Jól vagyok.": "An SOS message with your location will be sent in %d seconds. If you are OK, press: I'm OK.",
 "Az értesítés nincs engedélyezve: enélkül esés után a lezárt telefonon nem jelenik meg a visszaszámlálás.": "Notifications are not allowed: without them the countdown cannot appear on the locked phone after a fall.",
 "A teljes képernyős értesítés nincs engedélyezve: esés után a lezárt telefonon csak egy értesítés jelenik meg a visszaszámlálással és a Jól vagyok gombbal, a nagy számláló koppintásra nyílik meg.": "Full-screen notifications are not allowed: after a fall the locked phone only shows a notification with the countdown and the I'm OK button; the large counter opens when you tap it.",
 "Esés után a lezárt telefonon is felkapcsolja a kijelzőt, és mutatja a visszaszámlálást.": "After a fall it turns on the screen, even on a locked phone, and shows the countdown.",
 "Megnyitom": "Open",
 "Láttam": "Seen",
 "Egy szobatárs": "A room member",
 "vészjelzést küldött": "sent an emergency signal",
 "Helyi szoba": "Local room",
 "Itt van": "Location",
 "Megnézem a térképen": "Show on the map",
 "SOS · vészjelzés": "SOS · emergency signal",
 "Egy szobatárs vészjelzést küldött.": "A room member sent an emergency signal.",
 "SOS a szobából": "SOS from a room",
 "Egy szobatárs vészjelzést küldött: a lezárt telefon is felébred.": "A room member sent an emergency signal: the locked phone wakes up too.",
 "RIASZTÁS": "ALARM",
 "Eszköz-riasztás": "Device alarm",
 "Egy eszköz riasztást küldött.": "A device sent an alarm.",
 "Eszköz-riasztás a szobából": "Device alarm from a room",
 "Egy eszköz riasztást küldött: a lezárt telefon is felébred.": "A device sent an alarm: the locked phone wakes up too.",
 "Ideje visszafordulni": "Time to turn back",
 "visszaút": "way back",
 "Ma már elmúlt a sötétedés: lámpával indulj vissza.": "It is already dark today: head back with a light.",
 "A visszafordulás ideje már elmúlt: indulj vissza most.": "The turnaround time has passed: head back now.",
 "Sötétedésig": "Until dark",
 "Már sötétedik.": "It is getting dark.",
 "Visszaút": "Way back",
 "Tartalék": "Margin",
 "Ha most elindulsz, világosban érsz vissza.": "If you start now, you will get back in daylight.",
 "A visszaút hosszabb, mint ami a sötétedésig hátravan: indulj most, és készítsd elő a lámpát.": "The way back is longer than the time left until dark: start now and get your light ready.",
 "A tájoló a felvett irány ellentétére mutat: ez a visszaút.": "The compass points opposite the recorded bearing: that is the way back.",
 "A tájoló a kiindulópont felé mutat.": "The compass points towards the starting point.",
 "Nincs GPS-helyzet: a térképen látod a kiindulópontot.": "No GPS position: the starting point is shown on the map.",
 "Kiindulópont": "Starting point",
 "Élesítve, ekkor szól:": "Armed, rings at:",
 "Szólt": "Rang",
 "Visszafordulási ébresztő": "Turnaround alarm",
 "Túrán a visszafordulás idejében felébreszti a telefont, és mutatja, mennyi idő van sötétedésig, és mennyi a visszaút.": "On a hike it wakes the phone at the turnaround time and shows how much time is left until dark and how long the way back takes.",
 "Túra indítása": "Start hike",
 "Visszaút ideje (perc)": "Way back (minutes)",
 "A fenti számításból": "From the calculation above",
 "A tervezett útvonalból": "From the planned route",
 "A fenti Menetidővel kiszámolhatod: add meg a visszaút távolságát és emelkedését.": "You can work it out with Walking time above: enter the distance and climb of the way back.",
 "Biztonsági tartalék (perc)": "Safety margin (minutes)",
 "Sötétedés": "Dusk",
 "Napnyugta": "Sunset",
 "A szürkület vége (kb. fél órával a napnyugta után)": "End of twilight (about half an hour after sunset)",
 "tartalék": "margin",
 "Visszafordulás időpontja (kézzel)": "Turnaround time (set by hand)",
 "Számított időre": "Use calculated time",
 "Böngészőben és iPhone-on csak akkor szól, ha az oldal nyitva van. A lezárt telefont az Android app ébreszti fel.": "In the browser and on iPhone it only rings while the page is open. The Android app wakes the locked phone.",
 "Az ébresztő be van állítva, lezárt telefonon is szól.": "The alarm is set and rings on the locked phone too.",
 "Visszafordulás": "Turn back",
 "Visszafordulás (kézzel állítva)": "Turn back (set by hand)",
 "Nincs helyzet a napnyugtához: engedélyezd a helymeghatározást, vagy nyisd meg egyszer a térképet.": "No position for the sunset: allow location, or open the map once.",
 "Add meg a visszaút idejét.": "Enter how long the way back takes.",
 "Ezen a helyen ma nincs napnyugta.": "There is no sunset here today.",
 "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon csak értesítés jelenik meg.": "Full-screen notifications are not allowed: the locked phone only shows a notification.",
 "VISSZA": "TURN BACK",
 "Visszaút indítása": "Start the way back",
 "Indulj vissza, hogy világosban érj le.": "Head back to get down in daylight.",
 "Túrán a visszafordulás idejében a lezárt telefon is felébred.": "On a hike the locked phone wakes up at the turnaround time.",
 // ===== 2026-10-18: hatterzene a felolvasas alatt (kartya 694fc83c) =====
 "Háttérzene": "Background music",
 "Halk, ismétlődő zene a felolvasás alatt. Előbb töltsd le; utána internet nélkül is szól. A hangerejét felolvasás közben a hangjegy gombbal állíthatod.": "Soft, looping music under the reading. Download it first; after that it plays without internet too. Adjust its volume during reading with the music-note button.",
 "Zene a Biblia felolvasása alatt": "Music during Bible reading",
 "Ki": "Off",
 "nincs letöltve": "not downloaded",
 "Biblia-felolvasáshoz": "For Bible reading",
 "Ébresztőhöz": "For the alarm",
 "Akusztikus gitár": "Acoustic guitar",
 "Kelta": "Celtic",
 "Epikus 1": "Epic 1",
 "Epikus 2": "Epic 2",
 "Epikus 3": "Epic 3",
 "Zene": "Music",
 "Háttérzenét a Biblia beállításaiban (fogaskerék) tölthetsz le.": "Download background music in the Bible settings (gear icon).",
 "A letöltött zene hiányos volt, ezért nem mentettük el. Próbáld újra.": "The downloaded music was incomplete, so it was not saved. Please try again.",
 "Ez a zene most nem érhető el a szerveren.": "This music is not available on the server right now.",
 // a felolvaso panel (hangjegy gomb) feliratai -- eddig forditatlanok voltak (2026-10-18, 694fc83c mellett)
 "Felolvasás": "Reading aloud",
 "Szünet a versek között": "Pause between verses",
 "Sebesség": "Speed",
 "Zene hangereje": "Music volume",
 "Zene választása": "Choose music",
 "Nincs kiválasztott zene": "No music chosen",
 "Zene szünet": "Pause music",
 "Zene indítása": "Start music",
 "Telefon zenelejátszója (hangereje itt nem állítható)": "Phone's music player (its volume cannot be set here)",
 "Megvallás felolvasás": "Confession reading",
 "Ima felolvasás": "Prayer reading",
 "Saját zene a telefonról": "Own music from the phone",
 "Telefon hangja": "Phone voice",
 "Előbb töltsd le; utána internet nélkül is szól.": "Download it first; then it plays without internet too.",
 "Csatazene": "Battle music",
 "Tempó": "Tempo",
 "Lassú": "Slow",
 "Szünet a mondatok után": "Pause after each sentence",
 "Auto": "Auto",
 "Auto: a mondat hossza": "Auto: length of the sentence",
 "Minden mondat után megáll, hogy hangosan elismételhesd. A zene a szünetben is szól.": "It stops after every sentence so you can repeat it aloud. The music keeps playing in the pause.",
 "A telefon beszédmotorja: ha a Google magyar hangja telepítve van, azzal olvas. Nem foglal helyet, internet nélkül is szól.": "The phone's speech engine: if Google's voice for the language is installed, it reads with that. Takes no space, works without internet.",
 "Előre felolvasott hang a Károli-fordításhoz. Internettel azonnal szól; ha letöltöd, internet nélkül is.": "A pre-recorded voice for the Károli translation. Plays at once with internet; once downloaded, also without.",
 "Letöltés": "Download",
 "Törlés": "Delete",
 "A PrepperPapa hang a saját tempójában szól (nem lassítjuk, mert torzítana).": "The PrepperPapa voice plays at its own pace (we do not slow it down, it would distort).",
 "jobb": "better",
 "internet": "internet",
 "letöltött": "downloaded",
 "Hang": "Voice",
 "Most ez szól": "Playing now",
 "A telefon beszédmotorja: internettel a Google legjobb hangján olvas, internet nélkül a telefonra letöltött hangon. Nem foglal helyet.": "The phone's speech engine: with internet it reads with Google's best voice, without internet with the voice downloaded to the phone. Takes no space.",
 "A Lassú egy külön, lassabban felolvasott felvétel.": "The Slow tempo is a separate recording, read more slowly.",
 "A Lassú tempó lassabban beszélteti a telefon hangját.": "The Slow tempo makes the phone's voice speak more slowly."
});

// ===== 2026-10-18: vilagterkep-letoltes (korabban hianyzo kulcsok) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "a telefonon": "on the phone",
  "A letöltés nem sikerült": "The download failed",
  "A letöltéshez be kell jelentkezni (Beállítások).": "You need to sign in to download (Settings)."
});

// ===== 2026-10-18: AKTUALIS VILAGHELYZET terkep-reteg (kartya 771683de) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Világhelyzet (események)": "World situation (events)",
  "Tűzveszély-előrejelzés (EFFIS) – veszély, nem tilalom": "Fire danger forecast (EFFIS) – danger, not a ban",
  "Földrengés": "Earthquake",
  "Erdőtűz": "Wildfire",
  "Árvíz": "Flood",
  "Trópusi ciklon": "Tropical cyclone",
  "Vulkánkitörés": "Volcanic eruption",
  "Aszály": "Drought",
  "Járvány": "Epidemic",
  "Háborús övezet": "War zone",
  "Tűzgyújtási tilalom": "Fire ban",
  "Súlyosság": "Severity",
  "alacsony": "low",
  "közepes": "medium",
  "magas": "high",
  "Nagy háború (évi 10 000+ halott)": "Major war (10,000+ deaths a year)",
  "Háború (évi 1000–9999 halott)": "War (1,000–9,999 deaths a year)",
  "Fegyveres konfliktus (évi 100–999 halott)": "Armed conflict (100–999 deaths a year)",
  "Összecsapások (évi 100 alatti halott)": "Clashes (under 100 deaths a year)",
  "Megye": "County",
  "Napi tilalom": "Daily ban",
  "A tilalom a megye külterületi erdeire, fásításaira és azok 200 méteres sávjára vonatkozik.": "The ban covers the county's forests and tree plantations outside settlements and a 200-metre strip around them.",
  "Erősség": "Magnitude",
  "Mélység": "Depth",
  "Cunamiriasztás": "Tsunami alert",
  "Hírek alapján (előző nap):": "From news reports (previous day):",
  "független forrás": "independent sources",
  "esemény": "events",
  "Érintett ország, a konfliktus fő helyszíne máshol van.": "Involved country; the main scene of the conflict is elsewhere.",
  "Időpont": "Time",
  "Forrás": "Source",
  "Forrás megnyitása": "Open source",
  "Világhelyzet": "World situation",
  "nincs adat": "no data",
  "frissítve": "updated",
  "mentett adat (offline)": "saved data (offline)",
  "Még nincs letöltött világhelyzet-adat. Kapcsold be internettel.": "No world situation data downloaded yet. Turn it on with internet.",
  "Távolról ikonok, közelítve az érintett terület körvonallal és fátyollal. Koppints egy jelre vagy területre a részletekért.": "Icons from afar; zoomed in, the affected area is outlined and veiled. Tap a sign or an area for details.",
  "tűzveszély-előrejelzés (FWI), csak internettel. Ez veszély-index, NEM tilalom.": "fire danger forecast (FWI), internet only. This is a danger index, NOT a ban.",
  "Források": "Sources",
  "később (hozzáférésre vár)": "later (awaiting access)",
  "most nem frissült": "not updated now"
});

// ===== 2026-10-18 16:4x: vilaghelyzet v2 (haboru / instabilitas, tilalom tavolrol egy jel; kartya 771683de) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Fegyveres összecsapás / instabilitás": "Armed clashes / instability",
  "Felkelés, terrorizmus vagy szervezett bűnözés (nem háború)": "Insurgency, terrorism or organised crime (not a war)",
  "helyszín": "places",
  "Megyék tilalommal": "Counties with a ban",
  "Közelíts a megyék megjelenítéséhez.": "Zoom in to see the counties."
});

// ===== 2026-10-18: ige-melletti jegyzetek (Biblia, kartya c7ec8846) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Mértékegység": "Units of measure",
  "Scofield-jegyzet": "Scofield note",
  "Jegyzetek": "Notes",
  "Jegyzetek az igék mellett": "Notes beside the verses",
  "Ahol egy vershez jegyzet tartozik, egy kis jel áll mellette; rákoppintva megnyílik. A jegyzetcsomag a most olvasott fordításhoz tartozik, és letöltés után internet nélkül is megvan.": "Where a verse has a note, a small mark stands beside it; tap it to open. The note pack belongs to the translation you are reading, and once downloaded it works without internet.",
  "Ehhez a fordításhoz még nincs jegyzetcsomag.": "There is no note pack for this translation yet.",
  "A letölthető jegyzetcsomagok listája most nem érhető el.": "The list of downloadable note packs is not available right now.",
  "Jelek megjelenítése": "Show marks",
  "jegyzet": "notes",
  "Még nincs letöltve": "Not downloaded yet",
  "Törlöd ezt a jegyzetcsomagot?": "Delete this note pack?"
});

// ===== APOKRIF KONYVEK a Bibliaban (kartya 28758956, 2026-10-18) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Apokrifek ↓": "Apocrypha ↓",
  "Apokrif könyvek letöltése": "Download the apocryphal books",
  "Deuterokanonikus könyvek": "Deuterocanonical books",
  "Ószövetségi apokrifek": "Old Testament apocrypha",
  "További ószövetségi apokrifek": "Other Old Testament apocrypha",
  "Pszeudepigráfák": "Pseudepigrapha",
  "Apostoli atyák": "Apostolic Fathers",
  "vers": "verse",
  "Énok könyvei letöltése": "Download the books of Enoch",
  "Énok 2–3 ↓": "Enoch 2–3 ↓"
});

// ===== OFFLINE TERKEP CSOPORT a terkep-funkciok tablan (2026-10-18) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Helyzet, pontok és mérés": "Position, points and measuring",
  "Offline térkép": "Offline map",
  "A tájegységek letöltése a telefonos alkalmazásban működik.": "Downloading regions works in the phone app.",
  "Külföld: országok és tájegységeik ›": "Abroad: countries and their regions ›",
  "Magyarország tájegységei": "Regions of Hungary",
  "Külföldi térképek": "Maps abroad",
  "A saját térképet tájegységenként töltheted le: itt lent, az „Offline térkép” csoportban.": "You can download the own map by region: right below, in the “Offline map” group.",
  "A tájegységek listája most nem érhető el (nincs kapcsolat vagy belépés).": "The list of regions is not available right now (no connection or not signed in).",
  "Saját térkép bekapcsolva. A tájegységeket itt lent, az „Offline térkép” csoportban töltheted le.": "Own map switched on. Download the regions right below, in the “Offline map” group.",
  "Az alaptérképet az OpenStreetMap szabályai miatt nem lehet előre letölteni (a megnézett részek megmaradnak). Internet nélkül a Saját térkép működik: Magyarországra tájegységenként letöltheted itt lent, az „Offline térkép” csoportban.": "The base map cannot be downloaded in advance because of OpenStreetMap's rules (the parts you have viewed are kept). Without internet the Own map works: for Hungary you can download it by region right below, in the “Offline map” group.",
  // 2026-10-19 (card 4c1a5683): own country first, Más országok térképei, separate trails / points
  "Turistautak": "Hiking trails",
  "Turistapontok": "Hiking points",
  "Az egész ország": "The whole country",
  "Más országok térképei": "Maps of other countries",
  "Más országok térképei ›": "Maps of other countries ›",
  "A telefon beállításaiból nem derül ki, melyik a saját országod: a Más országok térképei között megtalálod.": "The phone's settings do not show which country is yours: you will find it under Maps of other countries.",
  "Koppints egy országra, és lenyílik. Az alaptérkép, a turistautak és a turistapontok külön-külön letölthetők, az egész országra vagy tájegységenként. A turistautak és a pontok az online térképen is működnek, és kevés helyet foglalnak. Az alaptérképet az első kéréskor a szerver készíti elő, ez néhány perc lehet.": "Tap a country to open it. The base map, the hiking trails and the hiking points can be downloaded separately, for the whole country or region by region. The trails and the points also work on the online map and take little space. The server prepares the base map on the first request, which can take a few minutes."
});

// 2026-10-19 (card 19b4756f): second recorded Bible voice (Charon)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "A PrepperPapa hang felvétele": "PrepperPapa voice recording",
  "Imre (gépi)": "Imre (synthetic)",
  "Charon (új, jobb minőségű)": "Charon (new, better quality)",
  "Az eredeti felvétel, a teljes Biblia elérhető.": "The original recording, the whole Bible is available.",
  "Új, természetesebb felvétel, könyvenként érkezik. Amelyik könyv még nem készült el, azt Imre olvassa fel.": "A new, more natural recording, arriving book by book. Books not yet finished are read by Imre.",
  "Letöltés közben a felvétel nem váltható.": "The recording cannot be switched during a download.",
  "A Charon-felvétel készül, könyvenként érkezik. Amint egy könyv elkészül, itt letölthető lesz.": "The Charon recording is in progress, arriving book by book. As soon as a book is finished, it can be downloaded here.",
  "A Charon-felvétel készül, könyvenként érkezik.": "The Charon recording is in progress, arriving book by book.",
  "Minden elkészült könyv letöltése": "Download all finished books"
});

// 2026-10-19 (card eaaba276): calculator validation, settlement search, secret QR, compass, household, reminders
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Add meg, hány liter vizet tisztítasz (nullánál több).": "Enter how many litres of water you are treating (more than zero).",
  "Ez a számoló legfeljebb 10 000 literig számol.": "This calculator works up to 10,000 litres.",
  "A magasság -500 és 9000 méter között legyen.": "The altitude must be between -500 and 9000 metres.",
  "Tölts ki minden mezőt nullánál nagyobb számmal.": "Fill in every field with a number greater than zero.",
  "A fűtött terület legfeljebb 2000 m² lehet.": "The heated area can be at most 2000 m².",
  "Legfeljebb 365 napra számol.": "It calculates for at most 365 days.",
  "Tölts ki mindkét mezőt nullánál nagyobb számmal.": "Fill in both fields with a number greater than zero.",
  "A tetőfelület legfeljebb 10 000 m² lehet.": "The roof area can be at most 10,000 m².",
  "Egyetlen esőből legfeljebb 500 mm-rel számol: ennél több egy esőzésből nem esik.": "It counts at most 500 mm for a single rain: more than that does not fall in one rainfall.",
  "Gyalog legfeljebb 1000 km-rel számol. Hosszabb utat bonts szakaszokra.": "On foot it calculates at most 1000 km. Split a longer route into sections.",
  "Az emelkedés nem lehet negatív: a lejtőt ne vond le, írj 0-t.": "The climb cannot be negative: do not subtract the descent, enter 0.",
  "Az összes emelkedés legfeljebb 20 000 méter lehet.": "The total climb can be at most 20,000 metres.",
  "A létszám nem lehet negatív.": "The number of people cannot be negative.",
  "Add meg, hány felnőtt és hány gyerek van (legalább egy fő).": "Enter how many adults and children there are (at least one person).",
  "Legfeljebb 500 főre számol.": "It calculates for at most 500 people.",
  "Hány napra kell? Legalább 1 napot adj meg.": "For how many days? Enter at least 1 day.",
  "Legfeljebb 3650 napra (10 évre) számol.": "It calculates for at most 3650 days (10 years).",
  "Legalább 1 elem vagy akku kell.": "At least 1 battery is needed.",
  "Legfeljebb 100 elemmel számol.": "It calculates with at most 100 batteries.",
  "Add meg a LED áramfelvételét (mA, nullánál több).": "Enter the LED current draw (mA, more than zero).",
  "Add meg az elem vagy akku kapacitását (mAh, nullánál több).": "Enter the battery capacity (mAh, more than zero).",
  "Add meg az adóteljesítményt (watt, nullánál több).": "Enter the transmit power (watts, more than zero).",
  "Legfeljebb 1500 wattal számol.": "It calculates with at most 1500 watts.",
  "Az antennamagasság 0 és 1000 méter között legyen.": "The antenna height must be between 0 and 1000 metres.",
  "A távolság nem lehet negatív.": "The distance cannot be negative.",
  "A napok száma nem lehet negatív.": "The number of days cannot be negative.",
  "Hány napra: 1 és 60 nap között adj meg egy számot.": "How many days: enter a number between 1 and 60.",
  "város": "town",
  "település": "village",
  "településrész": "part of a town",
  "tanya, külterület": "farmstead, outskirts",
  "A koordinátát nem tudtam értelmezni. Írd be így: 47.4979, 19.0402": "I could not read the coordinate. Enter it like this: 47.4979, 19.0402",
  "Tölts ki valamit, amit bele lehet tenni.": "Fill in something to put into it.",
  "Túl hosszú: ennyi szöveg nem fér el egy QR-kódban. Rövidítsd le, vagy oszd két kódra.": "Too long: this much text does not fit into one QR code. Shorten it, or split it into two codes.",
  "A titkosítás nem sikerült. Próbáld újra.": "The encryption failed. Try again.",
  "Előre:": "Ahead:",
  "Az É betű mindig az északot mutatja, a felső jel az, amerre a telefon néz.": "The N always points north; the mark at the top is where the phone is facing.",
  "vércsoport": "blood type",
  "kontakt": "contact",
  "még nincs felvéve": "none added yet",
  "Bekapcsolva.": "On.",
  "Kikapcsolva.": "Off.",
  "Reggel 9-kor szól, a fent választott idővel a lejárat előtt és a lejárat napján, akkor is, ha az app be van zárva.": "It alerts at 9 in the morning, the time chosen above before the expiry and on the expiry day, even when the app is closed.",
  "Most nincs olyan tétel, aminek közelgő lejárata lenne.": "Right now no item is close to its expiry date.",
  "Beütemezett emlékeztetők:": "Scheduled reminders:",
  "Kapcsold be, és engedélyezd az értesítést: szól, mielőtt egy élelmiszer vagy készlet-tétel lejár.": "Switch it on and allow notifications: it alerts before a food or supply item expires.",
  "Bekapcsolva. Amikor megnyitod az appot, naponta egyszer jelez a lejáró tételekről.": "On. When you open the app, it alerts once a day about expiring items.",
  "Helyi szoba (MESH)": "Local room (MESH)",
  "Offline segéd · tudástár, Biblia, készlet, térkép": "Offline helper · knowledge base, Bible, supplies, map"
});

Object.assign(window.PP_FORD_SZOTAR.en, {
  "Név a szobákban (ezen látnak a csevegésben)": "Name in rooms (others see this in the chat)",
  "A családtag fényképe a profilképed is lesz a szobákban.": "The family member's photo will also be your profile picture in rooms."
});

// kartya 28758956: halk jeloles az apokrif konyveknel
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Nem a Szentírás része – ajánlott irodalom.": "Not part of Scripture – recommended reading."
});

// kartya 6b4458db: veszkartya-cimkek + riaszto probahang (v43.308)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "A kártya tulajdonosának telefonszáma": "Card owner's phone number",
  "A kártya tulajdonosának telefonszáma:": "Card owner's phone number:",
  "Vész esetén értesítendő személy": "Emergency contact (person to notify)",
  "Vész esetén értesítendő telefonszáma": "Emergency contact phone number",
  "Vész esetén értesítendő:": "Emergency contact:",
  "pl. +36 30 123 4567": "e.g. +36 30 123 4567",
  "Szól, de hallhatatlanul magas. Ha semmit nem hallasz, az normális.": "It is playing, but too high-pitched to hear. If you hear nothing, that is normal.",
  "Próbahang": "Test tone",
  "A próbahang nem indult el.": "The test tone did not start."
});
// ===== 2026-10-20 v43.326 (card 6b287cfb): PIN recovery code, reminder sentence, PIN setup without a default PIN =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Írd be a PIN-kódod": "Enter your PIN",
  "Írd be még egyszer": "Enter it again",
  "A PIN még egyszer": "PIN again",
  "Elfelejtettem a PIN-t": "I forgot my PIN",
  "Állíts be egy PIN-kódot (6 számjegy)": "Set a PIN (6 digits)",
  "A PIN 6 számjegy legyen.": "The PIN must be 6 digits.",
  "A két PIN nem egyezik.": "The two PINs do not match.",
  "Válassz másik PIN-kódot.": "Choose a different PIN.",
  "Mentési kód a PIN-hez": "Recovery code for your PIN",
  "Ha elfelejted a PIN-t, ezzel a kóddal nyithatod meg a tárat, és állíthatsz be új PIN-t. Írd le papírra, és tartsd biztonságos helyen. Csak most látod: a telefon nem őrzi meg, és sehova nem küldjük el.": "If you forget your PIN, this code opens the store and lets you set a new PIN. Write it down on paper and keep it somewhere safe. You only see it now: the phone does not keep it, and we never send it anywhere.",
  "Emlékeztető mondat (nem kötelező; titkosítás nélkül tárolódik, ne írd bele a PIN-t)": "Reminder sentence (optional; stored unencrypted, do not put the PIN in it)",
  "A kód utolsó négy karaktere (ellenőrzéshez)": "The last four characters of the code (to check)",
  "Leírtam": "I wrote it down",
  "Később": "Later",
  "Mentve. A mentési kód mostantól érvényes.": "Saved. The recovery code is valid from now on.",
  "Nem egyezik a kód utolsó négy karakterével. Nézd meg újra a leírt kódot.": "That does not match the last four characters of the code. Look at the code you wrote down again.",
  "A mentés nem sikerült, próbáld újra.": "Saving failed, please try again.",
  "Rendben, a következő belépéskor újra felajánljuk.": "OK, we will offer it again at your next login.",
  "Emlékeztető mondat:": "Reminder sentence:",
  "Új PIN ujjlenyomattal": "New PIN with fingerprint",
  "Mentési kód": "Recovery code",
  "Ehhez a tárhoz még nincs mentési kód, és az ujjlenyomatos feloldás sincs bekapcsolva, ezért a PIN nem állítható vissza.": "This store has no recovery code yet, and fingerprint unlock is not turned on, so the PIN cannot be recovered.",
  "Új PIN beállítása": "Set new PIN",
  "Az ujjlenyomat rendben. Add meg az új PIN-t.": "Fingerprint OK. Enter the new PIN.",
  "Az ujjlenyomatos feloldás most nem sikerült.": "Fingerprint unlock did not work just now.",
  "Hibás mentési kód.": "Wrong recovery code.",
  "Az új PIN beállítása nem sikerült, a régi PIN maradt érvényben.": "Setting the new PIN failed; the old PIN is still valid.",
  "A dokumentumok CSAK ezen az eszközön tárolódnak, a PIN-edből képzett kulccsal titkosítva (AES-256) — a vészkártyával ellentétben ezt csak te nyithatod meg. A PIN-t nem tároljuk. Ha elfelejted, a mentési kóddal vagy ujjlenyomattal állíthatsz be újat; ezek nélkül a dokumentumok nem állíthatók vissza.": "The documents are stored ONLY on this device, encrypted with a key made from your PIN (AES-256) — unlike the emergency card, only you can open them. We do not store the PIN. If you forget it, you can set a new one with the recovery code or your fingerprint; without these the documents cannot be recovered.",
  "A kódok titkosítva tárolódnak ezen az eszközön: a kulcs a PIN-edből készül (AES-256), magát a PIN-t nem tároljuk. Ha elfelejted a PIN-t, a mentési kóddal vagy ujjlenyomattal állíthatsz be újat; ezek nélkül a tartalom nem állítható vissza, ezért a seed-mondatról tarts papírmásolatot is. A teljes mentésbe ez a rész SOSEM kerül bele.": "The codes are stored encrypted on this device: the key is made from your PIN (AES-256); the PIN itself is not stored. If you forget the PIN, you can set a new one with the recovery code or your fingerprint; without these the content cannot be recovered, so keep a paper copy of the seed phrase too. This part is NEVER included in the full backup."
});
// ===== 2026-10-20 v43.327 (card 6b287cfb): wallet-creation acknowledgement (HU text approved by the owner 21:39) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Értem, hogy a tárcám kulcsait (PIN, helyreállító kód, seed phrase) csak én ismerem. Ha elveszítem őket, a tárcám tartalma végleg elveszhet, és a PrepperPapa nem tudja visszaállítani. A kulcsok biztonságos megőrzése az én felelősségem.": "I understand that only I know the keys of my wallet (PIN, recovery code, seed phrase). If I lose them, the contents of my wallet may be lost for good, and PrepperPapa cannot restore them. Keeping the keys safe is my responsibility.",
  "Rendben": "OK",
  "A tárca létrehozásához jelöld be, hogy tudomásul vetted a fenti szöveget.": "To create the wallet, tick the box to confirm you have read the text above."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): "Fontos tudnivaló" notice (HU approved by the owner 21:47, TG 28515) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Fontos tudnivaló az Irattárcáról és a tárcáról": "Important information about the Document wallet and the wallet",
  "Az adataid csak a te eszközödön vannak, titkosítva. A PrepperPapa nem fér hozzájuk, és nem tudja visszaállítani őket.": "Your data is only on your own device, encrypted. PrepperPapa has no access to it and cannot restore it.",
  "A PIN-kódod, a helyreállító kódod és a tárcád kulcsai (seed phrase) kizárólag nálad vannak. Ha elveszíted, megosztod vagy illetéktelen megszerzi őket, az adataid és a tárcád tartalma végleg elveszhet.": "Your PIN, your recovery code and your wallet's keys (seed phrase) are only with you. If you lose them, share them or someone unauthorised obtains them, your data and the contents of your wallet may be lost for good.",
  "Ha a helyreállító kódot e-mailben is kéred, a hozzáférésed csak olyan biztonságos, mint a postafiókod.": "If you also ask for the recovery code by e-mail, your access is only as secure as your mailbox.",
  "A kulcsok, a kód, a postafiók és az eszköz biztonságos megőrzéséért, valamint a mentésekért te felelsz. A PrepperPapa nem felel az ebből eredő kárért, kivéve azt a felelősséget, amelyet jogszabály nem enged kizárni.": "You are responsible for keeping the keys, the code, the mailbox and the device safe, and for the backups. PrepperPapa is not liable for any damage resulting from this, except for liability that the law does not allow to be excluded.",
  "Elolvastam, értem.": "I have read and understood this."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): Gíra paragraph (HU approved by the owner 21:58, TG 28530) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "A gíra a közösségen belüli elszámolás egysége, nem pénz és nem fizetőeszköz. A PrepperPapa nem váltja át pénzre, nem garantálja az értékét, és nem részese a tagok közötti ügyleteknek. A tagok közötti vitákat és elszámolást a felhasználók egymás közt rendezik. Az offline fizetésnél előfordulhat, hogy ugyanazt a gírát kétszer költik el; ennek kockázata a felhasználókat terheli.": "The gíra is a unit of account within the community; it is not money and not a means of payment. PrepperPapa does not exchange it for money, does not guarantee its value, and is not a party to transactions between members. Disputes and settlement between members are resolved by the users among themselves. With offline payments the same gíra may be spent twice; this risk is borne by the users."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): SOS fail-closed -- nothing goes out unencrypted =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Az SOS NEM ment el: a titkosítás nem sikerült, ezért nyíltan nem küldöm el. Életveszélyben hívd a 112-t! A vészsíp szól.": "The SOS was NOT sent: encryption failed, so it is not sent unencrypted. In a life-threatening emergency, call 112! The emergency whistle is sounding.",
  "{n} helyre NEM ment el, mert a titkosítás nem sikerült. Életveszélyben hívd a 112-t!": "It was NOT sent to {n} place(s) because encryption failed. In a life-threatening emergency, call 112!"
});
// ===== 2026-10-20 v43.329 (card 6b287cfb): room chat fail-closed -- nothing goes out unencrypted =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Az üzenet nem ment el: a titkosítás nem sikerült, vagy ezen a telefonon hiányzik a szoba kulcsa. Titkosítatlanul nem küldöm el. A szöveg megmaradt: lépj be újra a szobába (vagy kérj új meghívót a gazdától), és küldd újra.": "The message was NOT sent: encryption failed, or the room key is missing on this phone. It is not sent unencrypted. Your text is kept: re-join the room (or ask the host for a new invitation) and send it again.",
  "A kép nem ment el: a titkosítás nem sikerült, vagy hiányzik a szoba kulcsa. Titkosítatlanul nem küldöm el. Lépj be újra a szobába.": "The picture was NOT sent: encryption failed, or the room key is missing. It is not sent unencrypted. Re-join the room."
});
// ===== 2026-10-20 v43.329 (card 6b287cfb): SOS / fall-detection notices (HU approved by the owner, TG 28555) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Ez nem segélyhívás. Az SOS-jelzés és az esés-érzékelés csak a te szobáidba, az ott lévő tagoknak küld értesítést. Nem hívja a mentőket, a rendőrséget vagy a tűzoltókat, és nem biztos, hogy bárki időben meglátja. Az esés-érzékelés nem pontos: téves riasztást adhat, és előfordulhat, hogy egy esést nem érzékel. Életveszélyben, balesetnél, rosszullétnél hívd a 112-t. A PrepperPapa nem segélyszolgálat, és nem garantálja, hogy a jelzés célba ér.": "This is not an emergency call. The SOS alert and fall detection only send a notification to your rooms, to the members there. It does not call the ambulance, the police or the fire brigade, and it is not certain that anyone will see it in time. Fall detection is not accurate: it may give a false alarm, and it may fail to detect a fall. In a life-threatening situation, an accident or if you feel unwell, call 112. PrepperPapa is not an emergency service and does not guarantee that the alert reaches anyone.",
  "Az SOS elküldi a pontos helyedet, és ha bejelölted, a Vészkártyád adatait (vércsoport, allergia, gyógyszer, betegség, kontakt) is az összes szobádnak.": "The SOS sends your exact location and, if you ticked it, your Emergency card data (blood type, allergy, medication, illness, contact) to all your rooms.",
  "A Vészkártya adataimat is küldjétek az SOS-szal.": "Send my Emergency card data with the SOS too.",
  "Ez nem hívja a mentőket. Életveszélyben hívd a 112-t.": "This does not call the ambulance. In a life-threatening emergency, call 112.",
  "%s SOS-jelzést küldött. Ha nem éred el, és veszélyben lehet, hívd a 112-t.": "%s sent an SOS alert. If you cannot reach them and they may be in danger, call 112.",
  "(zárt kép — ehhez a szobához nincs meg a kulcs)": "(sealed picture — the key for this room is missing)",
  "Fontos tudnivaló az SOS-ról és az esés-érzékelésről": "Important information about SOS and fall detection",
  "Nem kell megnyomnod: a telefon két percenként magától egyeztet. A gomb csak azonnali egyeztetésre való.": "You do not need to press it: the phone syncs by itself every two minutes. The button is only for an immediate sync.",
  "Nincs elérhető Gíra-szoba: egy szoba gazdája kapcsolhatja be a szoba beállításaiban („Gíra-közösség”).": "No Gíra room available: a room owner can switch it on in the room settings (\"Gíra community\").",
  "Automatikus egyeztetés bekapcsolva, de most nincs elérhető Gíra-szoba": "Automatic sync on, but no Gíra room is reachable right now",
  "utoljára próbálva": "last tried",
  "Automatikus egyeztetés bekapcsolva": "Automatic sync on",
  "utoljára ellenőrizve": "last checked",
  "Utolsó változás elküldve": "Last change sent",
  "Utolsó beérkezett könyv": "Last book received",
  "Fortiprep vagy konzerv": "Fortiprep or canned food",
  "Mennyibe kerül a tartalék hosszú távon": "What your reserve costs in the long run",
  "Fortiprep vagy konzerv: mennyibe kerül a tartalék": "Fortiprep or canned food: what the reserve costs",
  "Ugyanannyi kalóriát hasonlít össze ugyanarra az időszakra. Az árakat a saját boltod szerint átírhatod.": "It compares the same calories over the same period. You can change the prices to match your own shop.",
  "Hány fő": "People",
  "Hány napra": "Days",
  "Napi kalória fejenként (kcal)": "Daily calories per person (kcal)",
  "Hány évig álljon a tartalék": "Years the reserve should last",
  "Egy csomag ára (Ft)": "Price of one pack (HUF)",
  "Kalória egy csomagban (kcal)": "Calories in one pack (kcal)",
  "Eltarthatóság (év)": "Shelf life (years)",
  "Alapérték: 42 adagos (14 napos, egy fős) csomag a PP-2-2026 kóddal, 2026. augusztusi áron. A mostani gyártás minőségmegőrzési ideje 2050. november.": "Default: 42-portion (14-day, one-person) pack with the PP-2-2026 code, August 2026 price. The current batch is best before November 2050.",
  "Konzerv": "Canned food",
  "Egy doboz ára (Ft)": "Price of one can (HUF)",
  "Kalória egy dobozban (kcal)": "Calories in one can (kcal)",
  "A konzervnél azzal számol, hogy lejáratkor az egészet lecseréled. Ha rotálva megeszed, a csere nem veszteség, de figyelni kell rá.": "For canned food it assumes you replace everything when it expires. If you eat it in rotation, the replacement is not a loss, but you have to keep track of it.",
  "A FortiPrep 14 napos csomagja a PP-2-2026 kóddal, kedvezménnyel:": "FortiPrep's 14-day pack with the PP-2-2026 code, discounted:",
  "Megnézem a FortiPrep oldalán": "View on the FortiPrep site",
  "Minden mezőbe nullánál nagyobb számot írj.": "Enter a number greater than zero in every field.",
  "Ekkora értékkel nem számol.": "It does not calculate with values this large.",
  "Erre az időszakra a Fortiprep az olcsóbb.": "For this period Fortiprep is cheaper.",
  "Erre az időszakra a konzerv az olcsóbb.": "For this period canned food is cheaper.",
  "Erre az időszakra a kettő ugyanannyiba kerül.": "For this period both cost the same.",
  "Különbség": "Difference",
  "Szükséges kalória (kcal)": "Calories needed (kcal)",
  "Csomag": "Packs",
  "Egyszeri vásárlás": "One-off purchase",
  "Ezer kalória ára": "Price per 1000 kcal",
  "Vásárlás a teljes időszakra": "Purchases over the whole period",
  "Összesen": "Total",
  "Évente": "Per year",
  "Doboz": "Cans",
  "FortiPrep 14 napos csomag, 15% kedvezménnyel": "FortiPrep 14-day pack, 15% off",
  "Kuponkód": "Coupon code",
  "Másol": "Copy",
  "A gomb mögötti link magától érvényesíti a kódot a kosárban.": "The link behind the button applies the code in the cart automatically.",
  "Megveszem kedvezménnyel": "Buy with the discount",
  // Biblia konyvszin-sema (2026-10-25, kartya 6b4458db)
  "Könyvszínek": "Book colours",
  "Új": "New",
  "Régi": "Old",
  "Minden könyvcsoport saját színt kap, az Ószövetségben és az Újszövetségben is.": "Every book group gets its own colour, in the Old and the New Testament too.",
  "A korábbi zöld árnyalatok: az Újszövetség is az Ószövetség színeit kapja.": "The earlier green shades: the New Testament uses the Old Testament colours too.",
  // Biblia terkep: helyleiras (2026-10-25, kartya 6b4458db)
  "biztos": "certain",
  "valószínű": "probable",
  "lehetséges": "possible",
  "Mai azonosítás": "Modern identification",
  "Megjegyzés (OpenBible, angolul)": "Note (OpenBible, in English)",
  "Más nevek (angol fordításokban)": "Other names (in English translations)",
  "További versek": "Other verses"
});
// ===== 2026-10-25 v43.355: camera Morse follows the tempo (#65); Noah memory lines from about 8 GB (#52) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Indítsd, és irányítsd a kamerát egy Morzét villogó fényre (pl. egy másik telefon vakuja). A háttér legyen sötét, a fény a kép KÖZEPÉN. A fény-küszöb magától hangolódik; a \"Fényerő\" sáv és a lámpa mutatja, mit lát. A vétel magától követi a villogás tempóját, és a \"Vétel sebesség\" csúszkát is odaállítja; kézzel is állíthatod.": "Start it and point the camera at a light flashing Morse (for example another phone’s flash). Keep the background dark and the light in the CENTRE of the frame. The light threshold tunes itself; the \"Brightness\" bar and the lamp show what it sees. Reception follows the tempo of the flashing by itself and also moves the \"Receive speed\" slider there; you can set it by hand too.",
 "A nyelvi modell válasz közben kb. 3 GB memóriát használ, ezért Noah legalább 5,5 GB jelentett memóriát kér, ami kb. 8 GB-os telefonnak felel meg. Kisebb telefonon a rendszer válasz közben leállítaná az appot, ezért itt Noah nem használható.": "While answering, the language model uses about 3 GB of memory, so Noah needs at least 5.5 GB of reported memory, which matches a phone of about 8 GB. On a smaller phone the system would stop the app while it answers, so Noah cannot be used here.",
 "A telefon memóriáját nem sikerült lekérdezni.": "The phone's memory could not be read.",
 "A telefon által jelentett memória: {jel} GB, ez kb. {nev} GB-os telefon (a rendszer a névleges memória kb. 90%-át jelenti).": "Memory reported by the phone: {jel} GB, that is a phone of about {nev} GB (the system reports about 90% of the nominal memory).",
 "Ebbe a telefonba mindkét modell belefér (E2B és E4B).": "Both models fit on this phone (E2B and E4B).",
 "Ebbe a telefonba az E2B modell fér bele. Az E4B nem, mert ahhoz legalább {kapu} GB jelentett memória kell.": "The E2B model fits on this phone. The E4B does not, because it needs at least {kapu} GB of reported memory.",
 "Ebbe a telefonba egyik modell sem fér bele.": "Neither model fits on this phone.",
 "Noah kb. 8 GB-os telefontól fut (a telefon névleges memóriája), a nagyobb E4B modell kb. 10 GB-ostól.": "Noah runs from a phone of about 8 GB (the phone's nominal memory), the larger E4B model from about 10 GB.",
 "A telefon {jel} GB memóriát jelent, ez kb. {nev} GB-os telefon.": "The phone reports {jel} GB of memory, that is a phone of about {nev} GB.",
 "Ez a telefon: {modell}.": "This phone: {modell}.",
 "Szabad hely: {hely}.": "Free space: {hely}.",
 "Ajánlott: {modell}.": "Recommended: {modell}.",
 "nem választható: legalább {ajanlott} GB-os telefon kell": "not available: a phone with at least {ajanlott} GB is needed",
 "ez kb. {nev} GB-os": "this one is about {nev} GB",
 "Ajánlott memória: legalább {ajanlott} GB-os telefon": "Recommended memory: a phone with at least {ajanlott} GB",
 "ez a telefon {jel} GB-ot jelent, kb. {nev} GB-os": "this phone reports {jel} GB, about a {nev} GB phone",
 "ezért ez a modell itt nem választható": "so this model cannot be chosen here",
 "ennek a telefonnak a memóriáját nem sikerült lekérdezni": "the memory of this phone could not be read",
 "Processzor:": "Processor:",
 "kb. 8 GB-os telefon kell": "a phone of about 8 GB is needed",
 "Ehhez Android 11 vagy újabb, kb. 8 GB-os (névleges memóriájú) telefon kell, és 6-8 GB szabad hely.": "This needs a phone with Android 11 or newer, about 8 GB of (nominal) memory, and 6-8 GB of free space.",
  "Becslés a légnyomás-trendből (Zambretti-módszer), a félgömb és az évszak szerint igazítva. Szelet és felhőzetet nem lát, ezért csak tájékoztató.": "Estimate from the air pressure trend (Zambretti method), adjusted for hemisphere and season. It cannot see wind or clouds, so it is for guidance only.",
  "Magasság nélkül csak a trendet veszi figyelembe, a nyomás szintjét nem.": "Without altitude it uses only the trend, not the pressure level.",
  "A trópusokon a légnyomás napi ingadozása elfedi a frontokat, ezért itt a becslés kevésbé megbízható.": "In the tropics the daily pressure swing masks weather fronts, so the estimate is less reliable here.",
  "A sarkvidéken a módszer kevésbé megbízható.": "In polar regions the method is less reliable.",
  "Becslés": "Estimate",
  "Napos, nyugodt idő": "Sunny, settled",
  "Változékony idő": "Changeable",
  "Eső valószínű": "Rain likely",
  "Vihar, sok eső": "Storm, heavy rain",
  "Gyorsan emelkedik": "Rising fast",
  "Lassan emelkedik": "Rising slowly",
  "Állandó": "Steady",
  "Lassan süllyed": "Falling slowly",
  "Gyorsan süllyed": "Falling fast"
});
// Vercsoport calculator (2026-10-25, card 6b4458db): the red-cell table of tudastar article 3.6
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Vércsoport": "Blood type",
 "Kinek adhatsz vért, és kitől kaphatsz": "Who you can give blood to, and who you can receive it from",
 "Vércsoport: kinek adhatsz, kitől kaphatsz": "Blood type: who you can give to, who you can receive from",
 "Vérátömlesztést csak egészségügyi személyzet végez, vércsoport-meghatározás és keresztpróba után.": "Blood transfusions are given only by medical staff, after blood typing and cross-matching.",
 "Terepen vért adni vagy kapni nem szabad. Ezt nem lehet rögtönözni.": "Never give or receive blood in the field. This cannot be improvised.",
 "A kalkulátor tájékoztató: arra való, hogy értsd a szabályt, nem arra, hogy terepen dönts belőle.": "This calculator is for information: it helps you understand the rule, not decide from it in the field.",
 "A te vércsoportod": "Your blood type",
 "Válaszd ki": "Choose",
 "Mutasd": "Show",
 "Források: Magyar Vöröskereszt, Ausztrál Vöröskereszt (Lifeblood), Amerikai Vöröskereszt.": "Sources: Hungarian Red Cross, Australian Red Cross Lifeblood, American Red Cross.",
 "Válaszd ki a vércsoportodat.": "Choose your blood type.",
 "Kinek adhatsz vörösvérsejtet": "Who you can give red cells to",
 "Kitől kaphatsz vörösvérsejtet": "Who you can receive red cells from",
 "Mind a nyolc vércsoportnak": "All eight blood types",
 "Mind a nyolc vércsoporttól": "All eight blood types",
 "A 0 Rh-negatív vörösvérsejt bárkinek adható, ezért hívják univerzális vörösvérsejt-adónak.": "O negative red cells can be given to anyone, which is why O negative is called the universal red cell donor.",
 "A plazmánál a szabály megfordul: az AB vércsoportú plazma bárkinek adható, a 0 vércsoportú csak 0 vércsoportúnak.": "For plasma the rule is reversed: AB plasma can be given to anyone, O plasma only to group O.",
 "Ez tájékoztató, nem döntési alap.": "This is for information, not a basis for decisions.",
 "Hogy egy beteg milyen vért kap, azt vércsoport-meghatározás és keresztpróba után az ellátó orvos dönti el.": "Which blood a patient receives is decided by the treating doctor, after blood typing and cross-matching.",
 "0 Rh-negatív": "O negative",
 "0 Rh-pozitív": "O positive",
 "A Rh-negatív": "A negative",
 "A Rh-pozitív": "A positive",
 "B Rh-negatív": "B negative",
 "B Rh-pozitív": "B positive",
 "AB Rh-negatív": "AB negative",
 "AB Rh-pozitív": "AB positive"
});
// Bible package by default (2026-10-25, card 6b4458db): notes and apocrypha download with the Bible, settings keep display switches
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Ahol egy vershez jegyzet tartozik, egy kis jel áll mellette; rákoppintva megnyílik. A jegyzetek a Bibliával együtt töltődnek le, és internet nélkül is megvannak.": "Where a verse has a note, a small mark stands next to it; tap it to open. The notes download together with the Bible and are available without internet.",
 "A Bibliával együtt töltődik le": "Downloads with the Bible",
 "Apokrif könyvek megjelenítése": "Show apocryphal books"
});

// feedback sheet fields + one-press screenshot (card 6b4458db, v43.374)
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Típus": "Type",
 "Modul": "Module",
 "Leírás": "Description",
 "Képernyőkép": "Screenshot",
 "Képernyőkép erről a képernyőről": "Screenshot of this screen",
 "Kép feltöltése": "Upload a picture",
 "Kép eltávolítása": "Remove picture",
 "Ezt a képet nem tudtam beolvasni.": "I could not read this picture.",
 "Hiba": "Error",
 "Ötlet": "Idea",
 "Kérdés": "Question",
 "Működik (kipróbáltam, rendben)": "Works (I tried it, it is fine)"
});

// ===== 2026-10-25 v43.375: Noah in every language, answer report, about/licence, morning summary, sun path (card 6b287cfb) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Válasz jelentése": "Report this answer",
 "A jelentéssel a kérdésed és Noah válasza a PrepperPapa csapatához kerül, hogy kijavíthassuk. Mást nem küldünk el.": "With the report, your question and Noah's answer go to the PrepperPapa team so that we can fix it. Nothing else is sent.",
 "Mi a gond a válasszal?": "What is wrong with the answer?",
 "Sértő vagy bántó": "Offensive or hurtful",
 "Veszélyes vagy káros": "Dangerous or harmful",
 "Téves vagy félrevezető": "Wrong or misleading",
 "Megjegyzés (nem kötelező)": "Comment (optional)",
 "A jelentett válasz": "The reported answer",
 "A szerver most nem fogadta el a jelentést. Próbáld újra később.": "The server did not accept the report right now. Try again later.",
 "Jelentve": "Reported",
 "Köszönjük, a jelentést megkaptuk.": "Thank you, we have received the report.",
 "Noah névjegye": "About Noah",
 "Noah a Gemma 4 nyílt nyelvi modellel működik (Gemma 4, Google, Apache 2.0 licenc).": "Noah runs on the open Gemma 4 language model (Gemma 4, Google, Apache 2.0 licence).",
 "A Gemma 4 modellt a Google fejlesztette és adja ki az Apache License 2.0 licenc szerint. A licenc szövege:": "The Gemma 4 model was developed by Google and is released under the Apache License 2.0. The licence text:",
 "A PrepperPapa nem a Google terméke, és a Google nem támogatja vagy hagyja jóvá.": "PrepperPapa is not a Google product and is not sponsored or endorsed by Google.",
 "Noah válaszait gépi modell írja, és tévedhet. Ha egy válasz sértő, veszélyes vagy téves, a válasz alatti „Válasz jelentése” gombbal jelezd nekünk.": "Noah's answers are written by a machine model and can be wrong. If an answer is offensive, dangerous or wrong, tell us with the “Report this answer” button under it.",
 "Noah, az offline MI segéd: Gemma 4, Google, Apache 2.0 licenc.": "Noah, the offline AI assistant: Gemma 4, Google, Apache 2.0 licence.",
 "A modell a Google Gemma 4 (Apache 2.0 licenc), a Google hivatalos LiteRT-tárából (Hugging Face) töltődik le. Wi-Fi ajánlott.": "The model is Google Gemma 4 (Apache 2.0 licence), downloaded from Google's official LiteRT repository (Hugging Face). Wi-Fi recommended.",
 "Reggeli összefoglaló": "Morning summary",
 "Minden reggel értesítés: a készlet hiányai, a készenléti szint, egy ige és egy felkészülési tanács. Ha megnyitod Noah-t, kártyaként is látod.": "A notification every morning: the gaps in your stock, your readiness level, a Bible verse and a preparedness tip. When you open Noah, you also see it as a card.",
 "Reggeli összefoglaló bekapcsolva": "Morning summary on",
 "Mutasd most": "Show it now",
 "Értesítés engedélyezése": "Allow notifications",
 "Noah · Reggeli összefoglaló": "Noah · Morning summary",
 "Készenlét: {hely}, {szint} szint, {pct}%.": "Readiness: {hely}, {szint} level, {pct}%.",
 "Hiányzik a következő szinthez: {lista}.": "Missing for the next level: {lista}.",
 "Készenlét: még nem mérhető. Add meg a Háztartásban a helyszínt, kik érkeznek oda, és rendelj hozzá készletet.": "Readiness: not measurable yet. In Household, add the place, who arrives there, and assign stock to it.",
 "Hiányzik: {lista}.": "Missing: {lista}.",
 "Ige ({hely}): {szoveg}": "Verse ({hely}): {szoveg}",
 "Tipp: {szoveg}": "Tip: {szoveg}",
 "A reggeli összefoglaló a telefonra telepített Android appban működik.": "The morning summary works in the Android app installed on the phone.",
 "Kikapcsolva.": "Switched off.",
 "Az értesítéshez engedély kell: koppints az „Értesítés engedélyezése” gombra.": "The notification needs permission: tap “Allow notifications”.",
 "Beütemezve: a következő {n} reggel, {ido}-kor.": "Scheduled: the next {n} mornings at {ido}.",
 "Minden reggel {ido}-kor.": "Every morning at {ido}.",
 "A tipp a tudástárban": "The tip in the knowledge base",
 "A nap pályájához tudni kell, hol vagy: nyomd meg lent a „Mérés a helyzetemre” gombot.": "For the sun's path the app needs to know where you are: press “Measure my position” below.",
 "A nap most a horizont alatt van: a pályáját nappal rajzolom a képre.": "The sun is below the horizon now: its path is drawn on the picture in the daytime.",
 "A nap pályájához iránytű- és dőlésadat kell.": "The sun's path needs compass and tilt data.",
 "Napkelte": "Sunrise",
 "delel": "noon",
 "A pálya most nincs a képen: fordulj {fok}° felé.": "The path is not in the picture now: turn towards {fok}°.",
 "A segéd beállításai": "Assistant settings",
 "A segédhez először le kell tölteni a nyelvi modellt a telefonra (egyszer, Wi-Fi ajánlott).": "For the assistant, first download the language model to the phone (once, Wi-Fi recommended).",
 "A választ a telefonon futó gépi modell írja. Életveszélyben a forráscikket olvasd el, és hívd a 112-t. Az igét a Károli-fordításból az app illeszti be, nem a modell.": "The answer is written by a machine model running on the phone. In a life-threatening situation read the source article and call the emergency number. Bible verses are inserted by the app from its Bible translation, not by the model.",
 "Amit még tudjon rólad. Kérdezzben is mondhatod: „jegyezd meg, hogy …”": "Anything else it should know about you. You can also say it in Ask: “remember that …”",
 "Az első használatkor a telefon még egyszer ennyi helyet foglal a gyorsabb futáshoz, tehát a letöltés méretének kétszerese kell szabadon.": "On first use the phone takes the same amount of space again for faster running, so twice the download size must be free.",
 "Csak ezen a telefonon marad, sehova nem küldjük el. Gépelés közben magától mentődik.": "It stays on this phone only and is never sent anywhere. It saves itself as you type.",
 "Hogyan tisztítsak vizet, ha nincs forraló?": "How do I purify water if I cannot boil it?",
 "Hogyan tisztítsak vizet?": "How do I purify water?",
 "Hol van megírva, hogy ne aggódjunk a holnapért?": "Where is it written that we should not worry about tomorrow?",
 "Hol van megírva, hogy ne aggódjunk?": "Where is it written not to worry?",
 "Károli-fordítás": "The app's Bible translation",
 "Kérdezz a tudástárból, a Bibliából, vagy bármiről. Internet nélkül, a telefonon fut.": "Ask about the knowledge base, the Bible, or anything. It runs on the phone, without internet.",
 "Lakóhely, térség (pl. Gyömrő, Pest megye)": "Where you live, region (e.g. town, county)",
 "Megszakítás": "Cancel download",
 "Mit tudsz?": "What can you do?",
 "Modell letöltése": "Download the model",
 "Részletes válaszok": "Detailed answers",
 "Rövid válaszok": "Short answers",
 "Rólam (a válaszokhoz)": "About me (for the answers)",
 "A Háztartás családtagjait is vegye figyelembe": "Also take the Household members into account",
 "Írj egy kérdést…": "Write a question…",
 "Új beszélgetés": "New conversation",
 "Még nincs letöltött modell.": "No model downloaded yet.",
 "Letöltve": "Downloaded",
 "A letöltés megszakítva.": "The download was cancelled.",
 "Kész, a modell a telefonon van.": "Done, the model is on the phone.",
 "Mentve, csak ezen a telefonon.": "Saved, on this phone only.",
 "Törölve.": "Deleted.",
 "{n} liter víz": "{n} litres of water",
 "{n} kcal élelem": "{n} kcal of food",
 "{n} kWh hasznos fűtési energia": "{n} kWh of usable heating energy",
 "{fo} fő és {allat} állat, {nap} napra": "{fo} people and {allat} animals, for {nap} days",
 "{fo} fő, {nap} napra": "{fo} people, for {nap} days",
 "**{hely}**: nincs megadva, ki érkezik ide, ezért a készenléti szint nem számolható (Háztartás › Helyszínek › {hely}).": "**{hely}**: it is not set who arrives here, so the readiness level cannot be calculated (Household › Places › {hely}).",
 "**{hely}** ({keret}): ehhez a helyszínhez még nincs készlet rendelve, ezért a szint nem mérhető. A Készletnél a tétel Tárolási helyénél válaszd ki: {hely}.": "**{hely}** ({keret}): no stock is assigned to this place yet, so the level cannot be measured. In Stock, choose it at the item's Storage place: {hely}.",
 "**{hely}** ({keret}): van ide rendelt készlet, de se víz, se mérhető élelem, se fűtés nincs benne, ezért a szint nem számolható.": "**{hely}** ({keret}): stock is assigned here, but it has no water, no measurable food and no heating, so the level cannot be calculated.",
 "**{hely}** ({keret}): **{szint}** készenléti szint, {pct}%.": "**{hely}** ({keret}): readiness level **{szint}**, {pct}%.",
 "élelem": "food",
 "fűtés": "heating",
 "jó": "good",
 "gyenge": "weak",
 "teljes": "full",
 "Az élelmiszereknél nincs megadva az energia (kcal), ezért az élelem nem mérhető.": "The energy (kcal) of the food items is not set, so food cannot be measured.",
 "A teljes (100%) készlethez hiányzik: {lista}.": "Missing for the full (100%) stock: {lista}.",
 "A következő, {szint} szinthez (minden legalább {min}%) hiányzik: {lista}.": "Missing for the next level, {szint} (everything at least {min}%): {lista}.",
 "Minden mért összetevő 100%.": "Every measured component is at 100%.",
 "A Háztartásban még nincs helyszín, ezért a készenléti szint nem számolható. Vedd fel az otthonodat a Háztartás › Helyszínek alatt, és add meg, kik érkeznek oda és hány napra számolsz.": "There is no place in Household yet, so the readiness level cannot be calculated. Add your home under Household › Places, and set who arrives there and for how many days you plan.",
 "A készlet üres: még egyetlen tételt sem vettél fel.": "The stock is empty: you have not added a single item yet.",
 "A készleted üres: még egyetlen tételt sem vettél fel.": "Your stock is empty: you have not added a single item yet.",
 "A Mi hiányzik? listából ({db} tétel, az első 6):": "From the What is missing? list ({db} items, the first 6):",
 "A Mi hiányzik? listából ({db} tétel):": "From the What is missing? list ({db} items):",
 "tag": "member",
 "{n} éves": "{n} years old",
 "{db} db": "{db} pcs",
 "lejár:": "expires:",
 "A Háztartásban még nincs helyszín. A Háztartás › Helyszínek alatt veheted fel.": "There is no place in Household yet. You can add one under Household › Places.",
 "Helyszíneid ({db}):": "Your places ({db}):",
 "{n} fő": "{n} people",
 "{n} állat": "{n} animals",
 "{n} nap": "{n} days",
 "A Háztartásban nincs háziállat felvéve.": "No pet is added in Household.",
 "Háziállataid ({db}):": "Your pets ({db}):",
 "állat": "animal",
 "A Háztartásban még nincs családtag felvéve. A Háztartás › Családtagok alatt veheted fel őket.": "No family member is added in Household yet. You can add them under Household › Family members.",
 "A háztartásod ({db} fő):": "Your household ({db} people):",
 "A Háztartásban nincs családtag felvéve.": "No family member is added in Household.",
 "Háziállat:": "Pet:",
 "Nincs mentett pontod a térképen.": "You have no saved point on the map.",
 "Mentett pontjaid ({db}):": "Your saved points ({db}):",
 "A készletben ({db} tétel):": "In the stock ({db} items):",
 "… és még {n}": "… and {n} more",
 "Ilyen tétel nincs a készletedben. (A készletben {db} tétel van.)": "There is no such item in your stock. (The stock has {db} items.)",
 "A készletedben {db} tétel van, összesen {ossz} darab. Kategóriánként:": "Your stock has {db} items, {ossz} pieces in total. By category:",
 "{t} tétel, {db} db": "{t} items, {db} pcs",
 "{nap} napos túra hátizsákkal": "a {nap}-day hike with a backpack",
 "{nap} napos út autóval": "a {nap}-day trip by car",
 "{nap} napos út": "a {nap}-day trip",
 "A Háztartásban még nincs családtag, ezért nem tudom kijelölni, kik mennek. A Mit vigyek? ablakot megnyitom, a napokat beállítottam ({nap}); a résztvevőket a Háztartás › Családtagok alatt vedd fel, utána a lista kiszámolja, mi kell.": "There is no family member in Household yet, so I cannot choose who goes. I am opening the What to take? window with the days set ({nap}); add the participants under Household › Family members, then the list calculates what is needed.",
 "Összeállítottam: {fej}, {fo} fő és {allat} állat ({nevek}). Megnyitom a Mit vigyek? ablakban, kitöltve; a listát ott látod és pipálhatod.": "Put together: {fej}, {fo} people and {allat} animals ({nevek}). I am opening it filled in, in the What to take? window; you see the list there and can tick it off.",
 "Összeállítottam: {fej}, {fo} fő ({nevek}). Megnyitom a Mit vigyek? ablakban, kitöltve; a listát ott látod és pipálhatod.": "Put together: {fej}, {fo} people ({nevek}). I am opening it filled in, in the What to take? window; you see the list there and can tick it off.",
 "A Háztartásban csak {ossz} fő van, őket jelöltem ki. A hiányzó {hiany} főt vedd fel a Háztartásnál, hogy a lista velük is számoljon.": "Household has only {ossz} people, I chose them. Add the missing {hiany} people in Household so that the list counts them too.",
 "A napok számát nem mondtad, {nap} nappal számoltam.": "You did not say the number of days, I counted with {nap} days.",
 "Hová tervezzem az útvonalat? Írd meg a cél nevét (település, turistapont, saját pont vagy helyszín), például: „Tervezd meg az útvonalat Dobogókőre.”": "Where should I plan the route to? Write the destination's name (settlement, hiking point, saved point or place).",
 "Nem találom ezt a helyet: „{cel}”. Sem a saját pontjaid, sem a helyszíneid, sem a letöltött turistapontok, sem a települések között nincs ilyen nevű. Útvonalat fejből nem írok le; ha máshogy hívják, írd meg pontosabban, vagy a térképen egy pont buborékán válaszd az „Útvonal ide”-t.": "I cannot find this place: “{cel}”. There is nothing with this name among your saved points, your places, the downloaded hiking points or the settlements. I never describe a route from memory; if it is called differently, write it more precisely, or on the map choose “Route here” on a point's bubble.",
 "Nem tudom, hol vagy (nincs GPS-helyzet), ezért a távolságot nem tudom megmondani.": "I do not know where you are (no GPS position), so I cannot tell the distance.",
 "légvonalban {km} km, {egtaj} felé ({fok}°), {honnan} alapján.": "{km} km as the crow flies, towards the {egtaj} ({fok}°), based on {honnan}.",
 "észak": "north",
 "északkelet": "north-east",
 "kelet": "east",
 "délkelet": "south-east",
 "dél": "south",
 "délnyugat": "south-west",
 "nyugat": "west",
 "északnyugat": "north-west",
 "a mostani helyzeted": "your current position",
 "az otthonod helye": "your home's location",
 "a térkép utolsó nézete": "the map's last view",
 "egy mentett pontod": "one of your saved points",
 "saját pont": "own point",
 "község": "village",
 "településrész": "part of a settlement",
 "turistapont": "hiking point",
 "Útvonal ide: {nev} ({al}). Megnyitom a térképen a tervezőt: a mostani helyzetedből, turistautakon számolja (legfeljebb kb. 80 km).": "Route to: {nev} ({al}). I am opening the planner on the map: it calculates from your current position along hiking trails (up to about 80 km).",
 "Több hely is illik erre: „{cel}”. Melyikre gondolsz? Koppints rá, vagy írd meg pontosabban.": "Several places match this: “{cel}”. Which one do you mean? Tap it or write it more precisely.",
 "(… és még {n})": "(… and {n} more)",
 "lejárt {d} ({n} napja)": "expired {d} ({n} days ago)",
 "ma jár le ({d})": "expires today ({d})",
 "{d} ({n} nap múlva)": "{d} (in {n} days)",
 "… és még {n} tétel": "… and {n} more items",
 "Lejárt ({db} tétel):": "Expired ({db} items):",
 "Semmi nem járt le a készletedben.": "Nothing in your stock has expired.",
 "{nap} napon belül lejár ({db} tétel):": "Expires within {nap} days ({db} items):",
 "{nap} napon belül sem jár le semmi. A következő lejáratok:": "Nothing expires within {nap} days either. The next expiry dates:",
 "{db} tételnél nincs megadva lejárati dátum, ezeket nem tudom figyelni.": "{db} items have no expiry date set, I cannot watch those.",
 "Nem tudom, hol vagy: nincs GPS-helyzet, mentett pont vagy otthon-koordináta, ezért a napkeltét nem tudom kiszámolni.": "I do not know where you are: there is no GPS position, saved point or home coordinate, so I cannot calculate sunrise.",
 "{nap}: ezen a helyen ma nincs napkelte vagy napnyugta.": "{nap}: at this place there is no sunrise or sunset today.",
 "{nap} ({honnan} alapján): napkelte {kelte}, napnyugta {nyugta}; világos még a polgári szürkület végéig, {szurk}. Hold: {hold}, {szaz}% megvilágítva. (Az app számolja, néhány perc pontossággal.)": "{nap} (based on {honnan}): sunrise {kelte}, sunset {nyugta}; still light until the end of civil twilight, {szurk}. Moon: {hold}, {szaz}% lit. (Calculated by the app, to within a few minutes.)",
 "újhold": "new moon",
 "növekvő sarló": "waxing crescent",
 "első negyed": "first quarter",
 "növekvő hold": "waxing gibbous",
 "fogyó hold": "waning gibbous",
 "utolsó negyed": "last quarter",
 "fogyó sarló": "waning crescent",
 "Mit jegyezzek meg?": "What should I remember?",
 "Megjegyeztem: {mit}": "Remembered: {mit}",
 "(A segéd beállításai › Rólam alatt látod és szerkesztheted.)": "(You can see and edit it under Assistant settings › About me.)",
 "Megnyitás: Mi hiányzik?": "Open: What is missing?",
 "Megnyitás: Mit vigyek?": "Open: What to take?",
 "Útvonal a térképen: {nev}": "Route on the map: {nev}",
 "Melyik turistautat nyissam meg?": "Which hiking trail should I open?",
 "{nev}: megnyitom a térképen.": "{nev}: opening it on the map.",
 "Itt vagyok. Miben segíthetek?": "I am here. How can I help?",
 "Erről offline nem tudok megbízhatót mondani: sem a tudástár, sem a Biblia nem ír róla, és kitalálni nem fogok.": "I cannot say anything reliable about this offline: neither the knowledge base nor the Bible writes about it, and I will not make it up.",
 "Alaposabban is kerestem, de a Bibliában ({biblia}) erre nem találtam helyet: „{q}”.": "I searched more thoroughly too, but found no passage in the Bible ({biblia}) for this: “{q}”.",
 "A Bibliában ({biblia}) erre nem találtam helyet: „{q}”.": "I found no passage in the Bible ({biblia}) for this: “{q}”.",
 "Szó szerint nem így áll, de talán erre gondolsz:": "It does not stand like this word for word, but perhaps you mean this:",
 "Ez csak a telefonra telepített appban működik.": "This only works in the app installed on the phone.",
 "{nev} gondolkodik…": "{nev} is thinking…",
 "Nem érhető el:": "Not available:",
 "Előbb töltsd le a modellt: a fogaskerék alatt, „Modell letöltése”.": "Download the model first: under the gear, “Download the model”.",
 "A modell betöltése (első alkalommal 10-60 másodperc)…": "Loading the model (10-60 seconds the first time)…",
 "Nincs elég szabad hely a telefonon a modell első betöltéséhez (a letöltés méretének megfelelő hely kell).": "There is not enough free space on the phone for the model's first load (space equal to the download size is needed).",
 "Hiba:": "Error:",
 "A Bibliában itt van megírva (elöl az eredeti hely, utána, ahol idézik):": "In the Bible it is written here (the original place first, then where it is quoted):",
 "A gép {n} nem létező vagy hibás igehelyet írt, ezeket kivettük.": "The machine wrote {n} non-existent or wrong Bible references; we removed them.",
 "Alaposabban kerestem.": "I searched more thoroughly.",
 "A Bibliában ({biblia}), talán erre gondolsz:": "In the Bible ({biblia}), perhaps you mean this:",
 "A Bibliában ({biblia})": "In the Bible ({biblia})",
 "Forrás a tudástárból": "Source from the knowledge base",
 "Erről a prémium tudástár is ír: {lista}. (Zárolt cikk szövege nem kerül a modell elé.)": "The premium knowledge base also writes about this: {lista}. (The text of a locked article is not given to the model.)",
 "Megnyitás a térképen: {nev}": "Open on the map: {nev}",
 "A válaszban említett hely": "The passage mentioned in the answer",
 "Szia, Noah vagyok, a PrepperPapa segédje.": "Hi, I am Noah, the PrepperPapa assistant.",
 "Ezt tudom:": "This is what I can do:",
 "• **Készlet:** megmondom, milyen készenléti szinten áll egy helyszíned, és mi hiányzik a következő szinthez; a számokat az app számolja a készletedből, nem én találom ki. Például: „Milyen készenléti szinten áll az otthon?”, „Mi hiányzik?”": "• **Stock:** I tell you the readiness level of one of your places and what is missing for the next level; the numbers are calculated by the app from your stock, I do not make them up. For example: “What is the readiness level at home?”, “What is missing?”",
 "• **Út tervezése:** összerakok egy több napos utat a háztartásod tagjaiból, és kitöltve megnyitom a Mit vigyek? ablakban. Például: „Rakj össze egy 3 napos túrát 4 főre.”": "• **Trip planning:** I put together a trip of several days from your household members and open it filled in, in the What to take? window. For example: “Put together a 3-day hike for 4 people.”",
 "• **Útvonal:** a térképen megtervezem az útvonalat a mostani helyzetedből; a célt a saját pontjaid, a helyszíneid, a turistapontok és a települések között keresem, és ha több is illik, megkérdezem, melyikre gondolsz. A turistautakat név szerint is megnyitom a térképen. Például: „Hogyan jutok el a hétvégi házhoz?”, „Mutasd meg a térképen az E4-et.”": "• **Route:** I plan the route on the map from your current position; I look for the destination among your saved points, your places, the hiking points and the settlements, and if several match, I ask which one you mean. I also open hiking trails on the map by name. For example: “How do I get to the weekend house?”, “Show the E4 on the map.”",
 "• **Tudástár:** a PrepperPapa tudástárából válaszolok, és megmutatom, melyik cikkből (rákoppintva megnyílik). Például: „Hogyan tisztítsak vizet, ha nincs forraló?”": "• **Knowledge base:** I answer from the PrepperPapa knowledge base and show which article it comes from (tap it to open). For example: “How do I purify water if I cannot boil it?”",
 "• **Megjegyzem,** amit magadról mondasz, és a beszélgetés utolsó öt kérdésére emlékszem. Például: „Jegyezd meg, hogy két kutyánk van.”": "• **I remember** what you tell me about yourself, and I remember the last five questions of the conversation. For example: “Remember that we have two dogs.”",
 "• **Az app többi adata:** ismerem a háztartásodat (családtagok, háziállatok), a helyszíneidet és a mentett pontjaidat. A titkos kódokat, az Irattárcát és a Gíra kulcsait nem látom. Például: „Kik vannak a háztartásomban?”": "• **The app's other data:** I know your household (family members, pets), your places and your saved points. I do not see the secret codes, the Document wallet or the Gíra keys. For example: “Who is in my household?”",
 "• Ha sem a tudástár, sem a Biblia nem ír a kérdésről, általános tudásból válaszolok, és ezt jelzem. Egészségről és veszélyről nem találgatok, útvonalat pedig fejből soha nem írok le: azt csak a térkép tervezője számolja.": "• If neither the knowledge base nor the Bible writes about the question, I answer from general knowledge and say so. I do not guess about health or danger, and I never describe a route from memory: only the map's planner calculates that.",
 "**Lelki segítség**": "**Spiritual help**",
 "Lelkileg is melletted vagyok: ha félsz, elfáradtál vagy gyászolsz, igét teszek a válasz mellé, és a Bibliában is keresek: megmutatom, hol van megírva valami, a helyre koppintva megnyílik. Az igeverset soha nem én írom: mindig a Károli-fordítás pontos szövegéből jön. Például: „Hol van megírva, hogy ne aggódjunk a holnapért?”": "I am with you in spirit too: if you are afraid, tired or grieving, I put a Bible verse next to the answer, and I also search the Bible: I show where something is written, and tapping the reference opens it. I never write the verse myself: it always comes from the exact text of the app's Bible translation. For example: “Where is it written that we should not worry about tomorrow?”",
 "Internet nélkül működöm, itt futok a telefonodon. Amit kérdezel, amit válaszolok, és amit magadról megadsz, a telefonon marad: semmit nem küldök el sehova, akkor sem, ha van internet, kivéve, ha egy válaszomat te magad jelented a „Válasz jelentése” gombbal: akkor a kérdés és a válasz szövege a PrepperPapa csapatához kerül. Internet csak a nyelvi modell egyszeri letöltéséhez kell, és a térképhez, ha egy területét még nem töltötted le.": "I work without internet, I run here on your phone. What you ask, what I answer and what you tell me about yourself stay on the phone: I send nothing anywhere, even when there is internet, except when you yourself report one of my answers with the “Report this answer” button: then the question and the answer text go to the PrepperPapa team. Internet is only needed for the one-time download of the language model, and for the map if you have not downloaded an area yet.",
 "Tévedhetek; életveszélyben a 112 az első.": "I can be wrong; in a life-threatening situation, call the emergency number first."
});
