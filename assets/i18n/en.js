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
  "Könnyített megjelenítés": "Light display mode",
  "Automatikus": "Automatic",
  "Bekapcsolva": "On",
  "Kikapcsolva": "Off",
  "Gyengébb telefonon kikapcsolja a díszítő animációkat és az elmosást, és a Biblia-olvasó alapháttere a statikus zöld lesz, hogy ne akadozzon. Automatikus módban az app első induláskor felméri a telefont, és ha később akadozást érzékel, magától vált.": "On a weaker phone it turns off the decorative animations and the blur, and the Bible reader's default background becomes the static green, so nothing stutters. In automatic mode the app checks the phone on first start and switches by itself if it later notices stutter.",
  "Ezen a telefonon most bekapcsolva.": "On this phone: currently on.",
  "Ezen a telefonon most kikapcsolva.": "On this phone: currently off.",
  "Akadozást érzékeltem, ezért könnyített megjelenítésre váltottam: kevesebb animáció és elmosás. Visszakapcsolás: Beállítások › Általános › Könnyített megjelenítés.": "I noticed stutter, so I switched to the light display mode: fewer animations and less blur. To switch back: Settings › General › Light display mode.",
  "Rejtett szoba": "Hidden room",
  "LoRaWAN átjáró": "LoRaWAN gateway",
  "Meshtastic csomópont": "Meshtastic node",
  "hozzávetőleges hely": "approximate location",
  "Várható befejezés: {d}": "Expected finish: {d}",
  "Várható befejezés: {d} (terv szerint: {t})": "Expected finish: {d} (planned: {t})",
  "Koppints egy típusra: elrejti vagy újra megmutatja a térképen.": "Tap a type: it hides it on the map or shows it again.",
  "Az imakérések belépés után látszanak.": "Prayer requests show after you sign in.",
  "A kérésed átnézésre vár, mert most szokatlanul sok kérés érkezik. Hamarosan valaki megnézi.": "Your request is waiting for review, because an unusually large number of requests are arriving right now. Someone will look at it soon.",
  // after sign-in, the offer to install the web version as a program (Boss TG 37263)
  "Telepítsd programként": "Install it as a program",
  "A {app} telepíthető a számítógépedre vagy a telefonodra: saját ablakban, saját ikonnal nyílik, mint egy program.": "{app} can be installed on your computer or phone: it opens in its own window, with its own icon, like a program.",
  "Telepítés": "Install",
  "iPhone-on és iPaden: koppints a Megosztás gombra, majd a Főképernyőhöz adás pontra. Ezután a {app} saját ikonnal nyílik, mint egy alkalmazás.": "On iPhone and iPad: tap the Share button, then Add to Home Screen. After that {app} opens with its own icon, like an app.",
  "Safariban: Fájl menü, Hozzáadás a Dockhoz. Ezután a {app} saját ablakban, saját ikonnal nyílik, mint egy program.": "In Safari: File menu, Add to Dock. After that {app} opens in its own window, with its own icon, like a program.",
  // ===== 2026-11-08 E2E-encrypted Bible data sync (owner TG 36957/36977/36978/36980/36987; István T4 signed TG 36993) =====
  "Biblia-adatok szinkronizálása": "Bible data sync",
  "Titkosítva, csak te tudod megnyitni.": "Encrypted, only you can open it.",
  "Ha bekapcsolod, a jegyzeteid, könyvjelzőid, kiemeléseid, a megtanult versek, az igekártyák, az olvasási tervek és az elolvasottnak jelölt fejezetek, a játékok, a keresési előzmények, a Biblia beállításai, az imacélok és a vezetett ima állása a fiókodon keresztül minden készülékeden és mindkét alkalmazásban (PrepperPapa, Wordlight) megjelennek. Titkosítva tároljuk, és csak te tudod megnyitni a jelmondatoddal; mi nem tudjuk elolvasni. Ha elfelejted a jelmondatot, a szerveren lévő adat nem nyitható meg. Ha nem kapcsolod be, ezek az adatok csak ezen a készüléken vannak meg, és egy másik telefonon akkor sem jelennek meg, ha ugyanazzal a fiókkal lépsz be.": "If you turn it on, your notes, bookmarks, highlights, learned verses, verse cards, reading plans and the chapters marked as read, games, search history, Bible settings, prayer goals and the state of the guided prayer appear through your account on all your devices and in both apps (PrepperPapa, Wordlight). We store them encrypted, and only you can open them with your passphrase; we cannot read them. If you forget your passphrase, the data on the server cannot be opened. If you do not turn it on, this data exists only on this device and does not appear on another phone even if you sign in with the same account.",
  "Saját imalista szinkronizálása": "Sync my own prayer list",
  "A saját imalistádat, a mások kéréseiből felvetteket is, ugyanígy, titkosítva viszi át a többi készülékedre; csak te tudod megnyitni. Ha nem kapcsolod be, az imalistád csak ezen a készüléken marad.": "Your own prayer list, including the requests of others you have added, is carried to your other devices the same way, encrypted; only you can open it. If you do not turn it on, your prayer list stays only on this device.",
  "Jelmondat": "Passphrase",
  "Adj meg egy jelmondatot a szinkronhoz: egy általad kitalált szót vagy rövid mondatot (legalább 8 karakter és 2 szó, vagy legalább 12 karakter). Ne a neved legyen, és ne a fiókod jelszava. A kis- és nagybetű nem számít.": "Choose a passphrase for the sync: a word or short sentence you make up (at least 8 characters and 2 words, or at least 12 characters). Not your name, and not your account password. Upper and lower case do not matter.",
  "Tovább": "Next",
  "A jelmondat legyen legalább 8 karakter és 2 szó, vagy legalább 12 karakter.": "The passphrase must be at least 8 characters and 2 words, or at least 12 characters.",
  "A jelmondat ne a neved legyen.": "The passphrase must not be your name.",
  "Ezzel a jelmondattal nyithatod meg az adataidat a többi készülékeden. Írd le papírra, és tartsd biztonságos helyen. A telefon nem őrzi meg, és mi sem tudjuk visszaállítani.": "With this passphrase you open your data on your other devices. Write it down on paper and keep it in a safe place. The phone does not keep it, and we cannot recover it either.",
  "A jelmondat utolsó négy karaktere (ellenőrzéshez)": "The last four characters of the passphrase (to check)",
  "Nem egyezik a jelmondat utolsó négy karakterével. Nézd meg újra a leírtat.": "This does not match the last four characters of the passphrase. Look at what you wrote down again.",
  "Add meg a jelmondatot, amelyet a szinkron első bekapcsolásakor választottál.": "Enter the passphrase you chose when you first turned the sync on.",
  "Megnyitás": "Open",
  "Hibás jelmondat.": "Wrong passphrase.",
  "Elfelejtetted? Kapcsold ki a szinkront azon a készüléken, ahol működik, majd kapcsold be újra, és válassz új jelmondatot.": "Forgot it? Turn the sync off on the device where it works, then turn it on again and choose a new passphrase.",
  "Szinkronizálva: {ido}": "Synced: {ido}",
  "Add meg a jelmondatot a folytatáshoz.": "Enter the passphrase to continue.",
  "A szinkront egy másik készülékeden kikapcsoltad. Az adataid ezen a készüléken megmaradtak.": "You turned the sync off on another device. Your data on this device has been kept.",
  "A saját imalista szinkronját egy másik készülékeden kikapcsoltad. Az imalistád ezen a készüléken megmaradt.": "You turned off the sync of your own prayer list on another device. Your prayer list on this device has been kept.",
  "Kikapcsolod a szinkront? A szerveren tárolt titkosított Biblia-adataidat töröljük. Ezen és a többi készülékeden minden megmarad, de ott is leáll a szinkron.": "Turn the sync off? We delete your encrypted Bible data stored on the server. Everything stays on this and your other devices, but the sync stops there too.",
  "Kikapcsolod a saját imalista szinkronját? A szerveren tárolt titkosított imalistádat töröljük. A telefonjaidon megmarad.": "Turn off the sync of your own prayer list? We delete your encrypted prayer list stored on the server. It stays on your phones.",
  "A kikapcsolás most nem sikerült, mert a szervert nem értük el. Próbáld újra később.": "Turning it off did not work now because the server could not be reached. Try again later.",
  "A szinkron kikapcsolva, a szerveren tárolt adatok törölve.": "Sync turned off, the data stored on the server deleted.",
  "Egy pillanat…": "One moment…",
  // ===== 2026-11-09 Bible sync: new device by QR + the passphrase explained (Boss TG 37283, card c7b167f4) =====
  "Új eszköz bekötése": "Set up a new device",
  "Mi a jelmondat? A szinkron saját kulcsa: ezzel nyílnak meg a titkosított Biblia-adataid. Nem azonos a fiókod belépő jelszavával. A belépő jelszó a fiókodba enged be, a jelmondat pedig az adataidat nyitja meg. A jelmondatot mi nem ismerjük.": "What is the passphrase? It is the sync's own key: it opens your encrypted Bible data. It is not your account's sign-in password. The sign-in password lets you into your account; the passphrase opens your data. We do not know your passphrase.",
  "Miért kéri most? Mert ez a készülék még nem ismeri a kulcsot. Új készüléken egyszer kell megadnod, vagy átviheted QR-kóddal egy már bekötött készülékedről. Utána ez a készülék megjegyzi.": "Why is it asked now? Because this device does not know the key yet. On a new device you enter it once, or you bring it over by QR code from a device that is already set up. After that this device remembers it.",
  "QR-kóddal, a legegyszerűbb: a bekötött készülékeden nyisd meg a Biblia beállításokat, a szinkron alatt nyomd meg az „Új eszköz hozzáadása QR-kóddal” gombot, és olvasd be itt a kódot.": "By QR code, the easiest way: on the device that is already set up, open the Bible settings, tap “Add a new device by QR code” under the sync, and scan the code here.",
  "QR-kód beolvasása": "Scan QR code",
  "Vagy írd be a jelmondatot, amelyet a szinkron első bekapcsolásakor választottál.": "Or type the passphrase you chose when you first turned the sync on.",
  "Új jelmondatot úgy választhatsz, hogy a bekötött készüléken kikapcsolod, majd újra bekapcsolod a szinkront. Kikapcsoláskor a szerveren lévő titkosított példány törlődik, a készülékeiden minden megmarad.": "To choose a new passphrase, turn the sync off on the set-up device, then turn it on again. Switching it off deletes the encrypted copy on the server; everything stays on your devices.",
  "Elfelejtetted a jelmondatot? Ha egy bekötött készüléked kéznél van, a QR-kóddal jelmondat nélkül is bekötheted ezt a készüléket.": "Forgot the passphrase? If a device that is already set up is at hand, you can set up this device by QR code without the passphrase.",
  "Tartsd a bekötött készülékeden látható QR-kódot a keretbe.": "Hold the QR code shown on your set-up device inside the frame.",
  "Ez nem a szinkron QR-kódja. A bekötött készüléken az „Új eszköz hozzáadása QR-kóddal” gombbal kérj kódot.": "This is not the sync's QR code. On the set-up device, get a code with the “Add a new device by QR code” button.",
  "Ez a QR-kód lejárt, már felhasználták, vagy egy másik fiókhoz tartozik. Mindkét készüléken ugyanabba a fiókba lépj be, és kérj új kódot a bekötött készüléken.": "This QR code has expired, has already been used, or belongs to another account. Sign in to the same account on both devices and get a new code on the set-up device.",
  "Túl sok sikertelen próbálkozás. Várj 10 percet, vagy írd be a jelmondatot.": "Too many failed attempts. Wait 10 minutes, or type the passphrase.",
  "Ez a QR-kód nem ehhez a szinkronhoz tartozik. Kérj új kódot a bekötött készüléken.": "This QR code does not belong to this sync. Get a new code on the set-up device.",
  "Új eszköz hozzáadása QR-kóddal": "Add a new device by QR code",
  "Egy új telefonon vagy tableten így a jelmondat beírása nélkül is bekapcsolhatod a szinkront.": "This way you can turn the sync on on a new phone or tablet without typing the passphrase.",
  "Új eszköz hozzáadása": "Add a new device",
  "Az új készüléken lépj be ugyanabba a fiókba, kapcsold be a Biblia-adatok szinkronizálását, és válaszd a QR-kód beolvasását. Ezután olvasd be ezt a kódot.": "On the new device, sign in to the same account, turn on Bible data sync and choose to scan the QR code. Then scan this code.",
  "A kód 10 percig érvényes, és csak egyszer használható. A kulcsot titkosítva adja át, mi nem tudjuk elolvasni. Ne mutasd meg másnak, és ne küldd el senkinek.": "The code is valid for 10 minutes and can be used only once. It passes the key on encrypted; we cannot read it. Do not show it to anyone else and do not send it to anyone.",
  "Érvényes még: {ido}": "Valid for: {ido}",
  "A QR-kód lejárt, és töröltük. Kérhetsz újat.": "The QR code has expired and has been deleted. You can get a new one.",
  "Új QR-kód": "New QR code",
  "Az új készülék átvette a kulcsot. A QR-kódot töröltük, többé nem használható.": "The new device has taken the key. The QR code has been deleted and cannot be used again.",
  "A QR-kód most nem készült el, mert a szervert nem értük el. Próbáld újra később.": "The QR code could not be made now because the server could not be reached. Try again later.",
  "Most túl sok QR-kódot kértél. Várj néhány percet, és próbáld újra.": "You have asked for too many QR codes just now. Wait a few minutes and try again.",
  // ===== 2026-11-03 store apps: the same sentences without the browser clause (owner TG 34773) =====
  "Ha meghívó linket kaptál, másold ide az egészet — innen az app váltja be.": "If you received an invitation link, paste the whole thing here — the app will redeem it.",
  "Ha az app sötét vagy üres marad: engedélyezd a vírusirtóban (például Avast). A Play-áruházban vásárolt prémium árát 48 órán belül visszakérheted.": "If the app stays dark or empty: allow it in your antivirus (for example Avast). A premium purchase made on Google Play can be refunded within 48 hours.",
  "iPhone-on az ébresztő nem tud megszólalni. Az ébresztő az Android appban működik. A beállításod itt megmarad.": "On iPhone the alarm cannot ring. The alarm works in the Android app. Your setting is kept here.",
  // ===== 2026-11-03 save the whole app into a file (owner TG 34729/34730/34736) =====
  "Ez a fájl nem tartalomcsomag.": "This file is not a content pack.",
  "Nincs elég szabad hely a telefonon a tartalom betöltéséhez.": "There is not enough free space on the phone to load the content.",
  "Ez a telepítés több részből áll, ezért nem menthető egyetlen fájlba.": "This installation consists of several parts, so it cannot be saved into a single file.",
  "Egy mentés vagy betöltés már folyamatban van.": "A save or load is already in progress.",
  "A betöltés nem sikerült.": "Loading failed.",
  "Offline térképek": "Offline maps",
  "Bibliai hangfelvételek": "Bible recordings",
  "Zenék és imahangok": "Music and prayer sounds",
  "Alkalmazás mentése fájlba": "Save the app to a file",
  "Az alkalmazást egyetlen fájlba mentheted, és internet nélkül telepítheted egy másik Android telefonra. A saját adataid nincsenek benne: azokat a Teljes mentés viszi át, titkosítva.": "You can save the app into a single file and install it on another Android phone without internet. Your own data is not in it: the Full backup carries that over, encrypted.",
  "Letöltött tartalom": "Downloaded content",
  "A letöltött tartalmat külön fájlba mentheted, így a másik telefonnak nem kell újra letöltenie.": "You can save the downloaded content into a separate file, so the other phone does not have to download it again.",
  "Tartalom mentése fájlba": "Save content to a file",
  "Ezen a telefonon még nincs letöltött tartalom.": "There is no downloaded content on this phone yet.",
  "Tartalom betöltése fájlból": "Load content from a file",
  "Hogyan telepítsem a másik telefonra?": "How do I install it on the other phone?",
  "Másold át a fájlokat a másik telefonra: SD-kártyán, USB-kábellel, pendrive-on vagy Bluetooth-on.": "Copy the files to the other phone: on an SD card, with a USB cable, on a USB stick or over Bluetooth.",
  "A másik telefonon nyisd meg az .apk fájlt a Fájlok alkalmazásban, és koppints a Telepítés gombra. Ha a telefon kéri, egyszer engedélyezd az „Ismeretlen alkalmazások telepítése” beállítást annak az alkalmazásnak, amellyel a fájlt megnyitottad.": "On the other phone, open the .apk file in the Files app and tap Install. If the phone asks, allow \"Install unknown apps\" once for the app you opened the file with.",
  "Indítsd el az alkalmazást, nyisd meg a Beállítások, Adatok és mentés részt, koppints a „Tartalom betöltése fájlból” gombra, és válaszd ki a .pptartalom fájlt.": "Start the app, open Settings, Data and backup, tap \"Load content from a file\" and choose the .pptartalom file.",
  "Végül a saját adataidat a Teljes mentés fájljából töltsd vissza a Visszatöltés gombbal, a mentési kulcsoddal.": "Finally, restore your own data from the Full backup file with the Restore button, using your backup key.",
  "Betöltés folyamatban": "Loading",
  "Mentés folyamatban": "Saving",
  "Válassz legalább egy tartalmat.": "Choose at least one kind of content.",
  "A csomagban lévő tartalom felülírja az azonos nevű letöltött fájlokat ezen a telefonon. A saját adataidhoz nem nyúl. Folytatod?": "The content in the pack overwrites the downloaded files of the same name on this phone. Your own data is not touched. Continue?",
  "Megszakítva.": "Cancelled.",
  "Betöltve: {db} fájl, {meret}.": "Loaded: {db} files, {meret}.",
  "Elmentve: {nev} ({meret}).": "Saved: {nev} ({meret}).",
  // ===== 2026-11-03 Biblica Nyitott Újszövetség, free NT-only Hungarian translation (owner TG 34468) =====
  "csak Újszövetség": "New Testament only",
  "letölthető, ingyenes": "downloadable, free",
  "A Nyitott Újszövetség csak az Újszövetséget tartalmazza. Az Ószövetség itt Károli Gáspár fordításában olvasható.": "The Open New Testament (Nyitott Újszövetség) contains the New Testament only. The Old Testament is shown here in the Károli translation.",
  "formázás eltávolítva, a szöveg változatlan": "formatting removed, text unchanged",
  "csak Ószövetség": "Old Testament only",
  "részleges": "partial",
  "Keresés a fordítások között": "Search translations",
  "Nincs ilyen fordítás.": "No such translation.",
  "A letölthető fordítások ingyenesek. Letöltés után internet nélkül is olvashatók.": "The downloadable translations are free. Once downloaded they can be read without internet.",
  "Ez a fordítás nem tartalmazza a halványan jelölt könyveket. Ott ennek a szövege olvasható: {ford}.": "This translation does not contain the faded books. There you read this text instead: {ford}.",
  "Ez a fordítás nem tartalmazza ezt a könyvet. Itt ennek a szövege olvasható: {ford}.": "This translation does not contain this book. Here you read this text instead: {ford}.",
  "jelölések (Strong-számok, jegyzetek, címek) eltávolítva, a szöveg szavai változatlanok": "mark-up (Strong numbers, notes, headings) removed, the words of the text unchanged",
  // ===== 2026-11-03 public beta notice entry in Névjegy (Boss TG 1491; label = the signed title of this language) =====
  "Nyilvános béta tudnivalók": "Public beta: what you should know",
  // ===== 2026-11-02 Gerah escrow + weekly goal (owner TG 33434/33435, decision A TG 1322, card 8ed3c59e; the daily item is the signed wording) =====
  "Napi Bibliaolvasás, heti céllal. Minden nap, amikor eléred a napra beállított olvasási célodat, Gerah kerül letétbe a cél hossza szerint: legalább 10 perces cél után 1, legalább 20 perces után 2, legalább 30 perces után 3; az 5 perces cél után nem jár. Naponta legfeljebb 3 gerah. A letét akkor kerül a tárcádba, ha 7 egymást követő napon eléred a napi célodat. Ha egy nap kimarad, a letét elvész, és a hét nap elölről indul. A Gerah-t a PrepperPapa alkalmazás tárcája tárolja: a Wordlightban végzett olvasásért akkor jár, ha nálad telepítve van a PrepperPapa alkalmazás. A reggeli ébresztős felolvasás is beleszámít.": "Daily Bible reading, with a weekly goal. On every day on which you reach the reading goal you set for that day, Gerah is placed in escrow according to the length of the goal: 1 for a goal of at least 10 minutes, 2 for at least 20 minutes, 3 for at least 30 minutes; a 5-minute goal earns none. At most 3 gerah per day. The escrow moves to your wallet when you reach your daily goal on 7 consecutive days. If you miss a day, the escrow is forfeited and the 7 days start again. Gerah is kept in the wallet of the PrepperPapa app: for reading in Wordlight you get it only if the PrepperPapa app is installed on your device. The morning alarm reading counts too.",
  "Napi Bibliaolvasás, heti céllal: minden nap, amikor eléred a napra beállított olvasási célodat (legalább {p} perc), 1 gerah kerül letétbe. A letét akkor kerül a tárcádba, ha {h} egymást követő napon eléred a napi célodat; ha egy nap kimarad, a letét elvész, és a {h} nap elölről indul. A reggeli ébresztős felolvasás is beleszámít.": "Daily Bible reading, with a weekly goal: on every day on which you reach the reading goal you set for that day (at least {p} minutes), 1 gerah is placed in escrow. The escrow moves to your wallet when you reach your daily goal on {h} consecutive days; if you miss a day, the escrow is forfeited and the {h} days start again. The morning alarm reading counts too.",
  "Ma {n} gerah-t letétbe helyeztünk. Heti cél: {k} / {h} nap.": "Today {n} gerah was placed in escrow. Weekly goal: {k} / {h} days.",
  "Heti cél teljesítve: {n} gerah a tárcádba került!": "Weekly goal reached: {n} gerah moved to your wallet!",
  "heti bibliaolvasási cél": "weekly Bible reading goal",
  "Heti cél · Gerah-letét": "Weekly goal · Gerah escrow",
  "Letétben: {n} gerah": "In escrow: {n} gerah",
  "{k} / {h} nap egymás után": "{k} / {h} days in a row",
  "A {h}. egymást követő olvasott nap után a letét a tárcádba kerül.": "After the {h}th consecutive reading day the escrow moves to your wallet.",
  "Kimaradt egy nap: ez a letét elvész. A következő olvasott nappal a {h} nap elölről indul.": "A day was missed: this escrow is forfeited. With your next reading day the {h} days start again.",
  "Gerah letétben": "Gerah in escrow",
  "letét": "escrow",
  // ===== 2026-11-01 departure-time sheet on the route panel (owner TG 33000/33001) =====
  "Indulás ideje": "Departure time",
  "Év": "Year",
  "Hónap": "Month",
  "Nap": "Day",
  "Növelés": "Increase",
  "Csökkentés": "Decrease",
  // ===== 2026-11-01 other-countries map panel: the downloaded country opens, is marked, and can be deleted whole (owner TG 33154/33158) =====
  "Ország törlése": "Delete the country's maps",
  "Törlés…": "Deleting…",
  "Törlöd {orszag} minden letöltött térképét ({meret})? Alaptérkép, turistautak, turistapontok, a tájegységeké is.": "Delete all downloaded maps of {orszag} ({meret})? Base map, trails, trail points, those of its regions too.",
  "{orszag}: {db} letöltött rész törölve.": "{orszag}: {db} downloaded parts deleted.",
  // ===== 2026-11-01 SOS emergency-card strip (owner TG 32989/32994) =====
  "Fénykép hozzáadása": "Add a photo",
  // ===== 2026-10-31 "Még mindig hibás" sheet (owner decision 2A, TG 32472, card 6b4458db, #101) =====
  "Mi nem működik még?": "What still doesn't work?",
  "Küldés szöveg nélkül": "Send without text",
  "Még mindig hibás": "Still broken",
  // ===== 2026-10-31 Bible dedication statistics (Boss TG 6455, card cf02b3ee) =====
  "Elhivatottság": "Dedication",
  "nap egymás után": "days in a row",
  "Mostani sorozat": "Current streak",
  "Leghosszabb sorozat": "Longest streak",
  "Az elmúlt 7 nap": "The last 7 days",
  "Ezen a héten {n} perc": "This week {n} min",
  "Gerah jóváírva": "Gerah credited",
  "Gerah függőben": "Gerah pending",
  "Gerah megszerezve": "Gerah earned",
  "Gerah ezen a héten": "Gerah this week",
  "A Wordlightnak nincs tárcája. A Gerah-t a PrepperPapa alkalmazásban gyűjtheted be: telepítsd a PrepperPapát.": "Wordlight has no wallet. You can collect your Gerah in the PrepperPapa app: install PrepperPapa.",
  "Az elmúlt 30 nap": "The last 30 days",
  "cél teljesült": "goal reached",
  "olvastál, de kevesebbet": "you read, but less",
  "nem olvastál": "no reading",
  "{k} napon teljesült a cél az utolsó {n} napból ({p}%).": "The goal was reached on {k} of the last {n} days ({p}%).",
  "Ebben a hónapban": "This month",
  "A napló kezdete óta": "Since the log began",
  "Napok teljesült céllal": "Days with the goal reached",
  "A napi percek naplója {d} óta készül. A korábbi napokról csak az ismert, hogy teljesült-e a cél (✓).": "The daily minutes are logged since {d}. For earlier days only whether the goal was reached is known (✓).",
  "Napi cél: {n} perc · módosítás": "Daily goal: {n} min · change",
  "Napi cél beállítása": "Set a daily goal",
  "napi cél: {n} perc": "daily goal: {n} min",
  "{n} nap egymás után": "{n} days in a row",
  // ===== 2026-10-31 app privacy notice link in About (card 44533242, decision 6A, TG 32126) =====
  "Adatkezelési tájékoztató": "Privacy notice",
  // ===== 2026-10-31 newsletter + Wordlight optional account in Settings (card cf02b3ee, TG 31883) =====
  "Bejelentkezve:": "Signed in:",
  "Bejelentkeztél.": "Signed in.",
  "Hírlevél": "Newsletter",
  "Fiók és hírlevél": "Account and newsletter",
  "Nem kötelező. Ugyanaz a fiók, mint a PrepperPapában: e-mail cím és egy 6 jegyű kód, jelszó nem kell. A prémium kód beváltásához és a hírlevélhez kell.": "Optional. The same account as in PrepperPapa: your e-mail address and a 6-digit code, no password needed. It is needed to redeem a premium code and for the newsletter.",
  "Nem kötelező. Ugyanaz a fiók, mint a PrepperPapában: e-mail cím és egy 6 jegyű kód, jelszó nem kell. A fiókodhoz tartozó prémiumhoz és a hírlevélhez kell.": "Optional. The same account as in PrepperPapa: your e-mail address and a 6-digit code, no password needed. It is needed for the premium that belongs to your account and for the newsletter.",
  "Bejelölés után megerősítő e-mailt küldünk; a feliratkozás a levélben lévő gombbal lép életbe. Leiratkozni a pipa kivételével vagy bármelyik hírlevél leiratkozás linkjével lehet.": "After you tick the box we send a confirmation e-mail; the subscription takes effect with the button in that e-mail. You can unsubscribe by unticking the box or with the unsubscribe link in any newsletter.",
  "Feliratkozva.": "Subscribed.",
  "Megerősítésre vár: küldtünk egy levelet ide:": "Waiting for confirmation: we sent an e-mail to",
  "A feliratkozás a levélben lévő gombbal lép életbe (nézd meg a Spam mappát is).": "The subscription takes effect with the button in the e-mail (check the Spam folder too).",
  "A hírlevélhez be kell lépned; a pipa bejelölésekor felajánljuk a belépést.": "You need to sign in for the newsletter; we offer the sign-in when you tick the box.",
  "Küldés folyamatban…": "Sending…",
  "Leiratkoztál a hírlevélről.": "You have unsubscribed from the newsletter.",
  "Elküldtük a megerősítő levelet.": "We have sent the confirmation e-mail.",
  "Ma már több megerősítő levelet nem küldhetünk erre a címre. Próbáld újra holnap.": "We cannot send more confirmation e-mails to this address today. Please try again tomorrow.",
  // ===== 2026-10-28 SOS sharing per room (TG 30631) =====
  "Vészhelyzet ebben a szobában": "Emergency in this room",
  "Szobánként döntöd el, mit kapnak meg az SOS-odból. Ha az SOS-t kikapcsolod, ebbe a szobába semmi nem megy; a hely és a vércsoport csak az SOS-üzenetben jelenik meg.": "You decide per room what it gets from your SOS. If you switch the SOS off, nothing goes to this room; the location and the blood type only ever appear in the SOS message.",
  "SOS-jelzésem ide is menjen": "Send my SOS here too",
  "Lássák a GPS-helyzetemet az SOS-ban": "Show my GPS position in the SOS",
  "Lássák a vércsoportomat az SOS-ban": "Show my blood type in the SOS",
  "Később a szoba beállításaiban is átállíthatod.": "You can change this later in the room settings.",
  "Az SOS egyik szobádba sem ment el: a szobák beállításában mindenhol ki van kapcsolva. A vészsíp szól.": "The SOS went to none of your rooms: it is switched off in every room's settings. The emergency whistle sounds.",
  "Szobánként, a szoba beállításaiban szűkítheted: melyik szoba kapja meg az SOS-t, és látszik-e benne a helyed és a vércsoportod.": "Per room, in the room settings, you can narrow this: which room gets the SOS, and whether it shows your location and blood type.",
  "gombot, SOS üzenetet küld a helyzeteddel a szobáidba (ahová a szoba beállításában engedted), és megszólal a vészsíp.": "button, it sends an SOS message with your location to your rooms (those where the room settings allow it) and the emergency whistle sounds.",
  "Esés után automatikus SOS: alapból ki van kapcsolva. Ha bekapcsolod, és a telefon nagy ütés után egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a Jól vagyok gombot, SOS üzenetet küld a helyzeteddel a szobáidba (ahová a szoba beállításában engedted), és megszólal a vészsíp.": "Automatic SOS after a fall: it is off by default. If you turn it on and the phone does not move for a minute after a hard impact, it counts down out loud. If you do not press the I'm OK button, it sends an SOS message with your location to your rooms (those where the room settings allow it), and the emergency whistle sounds.",
  "Vészhelyzet: szobánként eldöntöd, hogy az SOS-od ide is menjen-e, és látszik-e benne a GPS-helyzeted és a vércsoportod. Alapból mindhárom be van kapcsolva.": "Emergency: per room you decide whether your SOS goes there too, and whether it shows your GPS position and your blood type. All three are on by default.",
  // ===== 2026-10-28 route planning: sunset / dark timing (TG 30629) =====
  "Most": "Now",
  "Napnyugta előtt érkezel, a tartalék:": "You arrive before sunset, spare time:",
  "Napnyugta után érkezel, ennyivel:": "You arrive after sunset, by:",
  "Sötétedés előtt még odaérsz.": "You still get there before dark.",
  "Sötétedés után érkezel.": "You arrive after dark.",
  "Napnyugta után indulsz.": "You start after sunset.",
  "Sötétedés után indulsz.": "You start after dark.",
  "Napnyugtakor itt jársz, a kezdéstől:": "At sunset you are here, from the start:",
  "Sötétedéskor itt jársz, a kezdéstől:": "At dark you are here, from the start:",
  "Az út utolsó szakasza sötétben van:": "The last part of the route is in the dark:",
  "A tábort a sötétedés pontja előtt válaszd ki.": "Pick your camp site before the dark point.",
  // ===== 2026-10-28 Barometer + Napkelte, napnyugta: own screens under Eszkozok (TG 30627) =====
  "Barométer": "Barometer",
  "Légnyomás, trend és viharjelzés": "Air pressure, trend and storm warning",
  "Napkelte, napnyugta": "Sunrise, sunset",
  "Nap és hold: mennyi világosod van, holdfázis": "Sun and moon: how much daylight you have, moon phase",
  "Nem kaptunk engedélyt az iránytűhöz.": "We did not get permission for the compass.",
  "Ez a készülék nem ad iránytű-adatot, vagy nincs rá engedély.": "This device gives no compass data, or there is no permission.",
  "A nap pályájához tudni kell, hol vagy: az Eszközök, Napkelte, napnyugta lapon nyomd meg a „Mérés a helyzetemre” gombot.": "For the sun's path the app needs to know where you are: on the Tools, Sunrise, sunset screen press “Calculate for my position”.",
  "Tájoló: irány és azimut, a visszaút is.": "Compass: direction and azimuth, the way back too.",
  "Eszközök: a kalkulátorok, a fémdetektor, a tükör, a hanggenerátor, a barométer és a napkelte-napnyugta egy helyen.": "Tools: the calculators, the metal detector, the mirror, the tone generator, the barometer and sunrise-sunset in one place.",
  // ===== 2026-10-27 titkosított teljes mentés: Token tárca + Gíra (kártya 96306244) =====
  "Ez a fájl nem PrepperPapa mentés.": "This file is not a PrepperPapa backup.",
  "Nincs elég tárhely ezen a készüléken a visszatöltéshez. Semmi nem változott.": "Not enough storage on this device for the restore. Nothing was changed.",
  "A visszatöltés nem sikerült. Semmi nem változott.": "The restore failed. Nothing was changed.",
  "Ezen a készüléken már vannak saját adataid (készlet, pontok, háztartás). A visszatöltés ezeket a mentésben levőkre cseréli. Előtte a készleted és a háztartásod biztonsági másolatba kerül, amit a „Visszaállítás a biztonsági másolatból” gomb visszahoz. Folytatod?": "This device already has your own data (inventory, points, household). The restore replaces it with the data in the backup. Before that, your inventory and household go into the safety copy, which the “Restore from the safety copy” button brings back. Continue?",
  "Visszatöltés": "Restore",
  "Visszatöltöm": "Restore",
  "Hibás mentés-fájl.": "Invalid backup file.",
  "A teljes mentés egy általad választott mentési kulccsal titkosítva készül. Visszatöltéskor a mentési kulcs kell.": "The full backup is encrypted with a backup key you choose. Restoring it needs the backup key.",
  "A teljes mentés egy általad választott mentési kulccsal titkosítva készül, és benne van a Token tárca és a Gerah is (a tárca PIN-je mögött). Visszatöltéskor a mentési kulcs kell, utána a tárca a PIN-nel nyílik. Az irattárca nem kerül bele.": "The full backup is encrypted with a backup key you choose, and it also contains the Token wallet and your Gerah wallet (behind the wallet PIN). Restoring needs the backup key; afterwards the wallet opens with the PIN. The document wallet is not included.",
  "A mentés óta indított vagy kapott fizetéseid ebből a könyvből hiányoznak (a többiek könyvében megvannak), ezért az egyenleg eltérhet.": "Payments you made or received since the backup are missing from this book (the others' books still have them), so the balance may differ.",
  "A mentésben levő Gerah sérült, ezért nem töltöttünk vissza semmit.": "The Gerah wallet in the backup is damaged, so nothing was restored.",
  "A mentési kulcs legyen legalább 8 karakter és 2 szó, vagy legalább 12 karakter.": "The backup key must be at least 8 characters and 2 words, or at least 12 characters.",
  "A mentési kulcs ne a neved legyen.": "The backup key must not be your name.",
  "A mentési kulcs nem egyezik, a fájlt nem lehetett visszafejteni. Semmit nem írtunk felül.": "The backup key does not match, the file could not be decrypted. Nothing was overwritten.",
  "A mentési kulcsod: „{kod}”. Írd le magadnak most, és ellenőrizd, hogy pontosan így írtad le. Ne felejtsd el ezt a kulcsot, és a tárca PIN-jét se: visszatöltés után a Token tárca és a Gerah a PIN-nel nyílik.": "Your backup key: “{kod}”. Write it down now and check that you wrote it exactly like this. Do not forget this key, and do not forget the wallet PIN either: after restoring, the Token wallet and the Gerah wallet open with the PIN.",
  "A mostani Gerah-d maradt; a mentésben levőt nem vettük át.": "Your current Gerah wallet was kept; the one in the backup was not taken over.",
  "A titkosított mentés nem készült el, nem töltöttünk le semmit.": "The encrypted backup could not be created, nothing was downloaded.",
  "A Token tárca és a Gerah visszaállítása nem sikerült.": "Restoring the Token wallet and the Gerah wallet failed.",
  "Add meg ennek a készüléknek a tárca PIN-jét.": "Enter this device's wallet PIN.",
  "Adj meg egy mentési kulcsot: egy általad kitalált szót vagy rövid mondatot (legalább 8 karakter és 2 szó, vagy legalább 12 karakter). Ne a neved legyen. A kis- és nagybetű nem számít. Írd le magadnak: a mentés csak ezzel tölthető vissza.": "Enter a backup key: a word or short sentence you make up (at least 8 characters and 2 words, or at least 12 characters). It must not be your name. Upper and lower case do not matter. Write it down: the backup can only be restored with it.",
  "Biztosan lecseréled? A mostani Gerah ({most}) kulcsa ezzel elvész ezen a készüléken; ha nincs róla mentésed, véglegesen.": "Replace it? The key of the current Gerah wallet ({most}) will be lost on this device; if you have no backup of it, for good.",
  "Ez egy titkosított mentés. Add meg a mentési kulcsot.": "This is an encrypted backup. Enter the backup key.",
  "Ezen a készüléken már van egy MÁSIK Gerah ({most}). A mentésben levő: {mentes}. Megtartod a mostanit, vagy lecseréled a mentésben levőre?": "This device already has a DIFFERENT Gerah wallet ({most}). The one in the backup: {mentes}. Keep the current one, or replace it with the one in the backup?",
  "Ezen a készüléken már van tárca. A mentett Token tárca átvételéhez add meg azt a PIN-t, amellyel a mentett tárca nyílt.": "This device already has a wallet. To take over the saved Token wallet, enter the PIN the saved wallet opened with.",
  "Gerah visszaállítva: {az}, egyenleg {egy} gerah.": "Gerah wallet restored: {az}, balance {egy} gerah.",
  "Hibás PIN.": "Wrong PIN.",
  "Igen, lecserélem": "Yes, replace it",
  "Igen, nélkülük": "Yes, without them",
  "Javítom": "Let me fix it",
  "Lecserélem": "Replace",
  "Mégsem": "Cancel",
  "Megtartom a mostanit": "Keep the current one",
  "Imatérkép": "Prayer map",
  "Az imatérkép még üres: a vezetett ima világ-lépése után itt jelennek meg az országok, amelyekért imádkoztál.": "The prayer map is still empty: after the world step of a guided prayer, the countries you prayed for appear here.",
  "{n} alkalommal · {p} perc": "{n} times · {p} min",
  "A játékok a Biblia szövegéből dolgoznak, ezért előbb le kell tölteni a Bibliát. A letöltés után a Játékok nyílnak meg.": "The games are built from the Bible text, so the Bible has to be downloaded first. After the download the Games open.",
  "Biztosan lecseréled? A mostani Gerah ({most}) tartalékként megmarad ezen a készüléken, és a két könyv tételei összefésülődnek.": "Replace it? The current Gerah ({most}) stays on this device as a spare, and the entries of the two books are merged.",
  "Gerah átvéve: {az}, egyenleg {egy} gerah.": "Gerah taken over: {az}, balance {egy} gerah.",
  "Régi Gerah-tárca": "Old Gerah wallet",
  "Mindkét PrepperPapa-alkalmazásban van már Gerah-forgalom ({regi} és {most}), ezért itt a mostanit hagytuk. A régit a régi alkalmazás titkosított teljes mentésével, majd itt a visszatöltésével hozhatod át; a mostani akkor sem vész el.": "Both PrepperPapa apps already have Gerah activity ({regi} and {most}), so the current one stays here. You can bring the old one over with an encrypted full backup in the old app and a restore here; the current one is not lost then either.",
  "Ezen a telefonon a régi PrepperPapa-alkalmazásodban van egy Gerah-tárca: {regi}. Átveszed ide?": "Your old PrepperPapa app on this phone has a Gerah wallet: {regi}. Take it over here?",
  "A mostani Gerah-d ({most}) nem vész el: tartalékként megmarad ezen a készüléken.": "Your current Gerah ({most}) is not lost: it stays on this device as a spare.",
  "Átveszem a régi Gerah-tárcámat": "Take over my old Gerah wallet",
  "Az átvétel megszakadt, semmit nem írtunk felül.": "The takeover stopped; nothing was overwritten.",
  "Mentés megszakítva, nem töltöttünk le semmit.": "Backup cancelled, nothing was downloaded.",
  "Titkosított mentés": "Encrypted backup",
  "Titkosított mentés visszatöltése": "Restore encrypted backup",
  "Token tárca visszaállítva: a mentéskor használt PIN-nel nyílik.": "Token wallet restored: it opens with the PIN used when the backup was made.",
  "Token tárca: {n} bejegyzés hozzáadva a tárcádhoz.": "Token wallet: {n} entries added to your wallet.",
  "Visszatöltés megszakítva, semmit nem írtunk felül.": "Restore cancelled, nothing was overwritten.",
  "Visszatöltöd a többi adatot a Token tárca és a Gerah nélkül?": "Restore the rest of the data without the Token wallet and the Gerah wallet?",
  // ===== 2026-10-26 v43.386 (tester #84): water purification, ice-cold water + altitude bands =====
  "Buzgó forrás {perc} percig.": "Rolling boil for {perc} min.",
  "Buzgó forrás {perc} percig — kétezer méter felett vagy, ott hosszabb kell, mert alacsonyabb a forráspont.": "Rolling boil for {perc} min — you are above two thousand metres, where it needs longer because the boiling point is lower.",
  "{liter} liter tiszta vízhez {csepp} csepp {hipo} százalékos hipó, ami körülbelül {ml} milliliter.": "For {liter} litres of clear water: {csepp} drops of {hipo} percent bleach, about {ml} millilitres.",
  "{liter} liter zavaros vízhez {csepp} csepp {hipo} százalékos hipó, ami körülbelül {ml} milliliter.": "For {liter} litres of cloudy water: {csepp} drops of {hipo} percent bleach, about {ml} millilitres.",
  "Keverd el, várj {perc} percet, és utána is enyhén klóros szagúnak kell lennie.": "Stir, wait {perc} minutes, and afterwards it should still smell slightly of chlorine.",
  "Ha nem érzed a szagot, adj hozzá ugyanennyit, és várj még {perc} percet.": "If you cannot smell it, add the same amount again and wait another {perc} minutes.",
  "Zavaros, színes vagy jéghideg (pl. olvadt hó, jeges patak)": "Cloudy, coloured or ice-cold (e.g. melted snow, icy stream)",
  "Tengerszint feletti magasság": "Altitude above sea level",
  "2000 m alatt": "Below 2000 m",
  "2000 m felett": "Above 2000 m",
  // ===== 2026-10-25 v43.381 (card 43a80047, Boss 23:38): premium code from the purchase e-mail link =====
  "Túl sok hibás kódot írtál be. Biztonsági okból egy ideig nem próbálhatod újra.": "You entered too many wrong codes. For security you cannot try again for a while.",
  "Újra próbálhatod ekkor:": "You can try again at:",
  "A linkben kapott kódod be van írva. Koppints a „Kód beváltása” gombra.": "The code from your link has been entered. Tap “Redeem code”.",
  "A linkben kapott kód moduljai ezen a készüléken már fel vannak oldva, a kódot nem kell beváltanod.": "The modules of the code from your link are already unlocked on this device; you do not need to redeem the code.",
  // ===== 2026-10-25 v43.380 (Thomas 24623): stale offline region =====
  "Új változat a szerveren": "New version on the server",
  // ===== 2026-10-25 v43.380 (card 6b287cfb, Boss 20:13): Solar panel setup tool =====
  "Napelem-beállítás": "Solar panel setup",
  "Merre nézzen és mennyire dőljön a panel, évszakonként": "Which way the panel should face and how far to tilt it, by season",
  "Helyszín": "Location",
  "Mérés a helyzetemre": "Calculate for my position",
  "Kézi megadás": "Enter by hand",
  "Dátum": "Date",
  "Ma": "Today",
  "Téli napforduló": "Winter solstice",
  "Tavaszi napéjegyenlőség": "Spring equinox",
  "Nyári napforduló": "Summer solstice",
  "Őszi napéjegyenlőség": "Autumn equinox",
  "A nap járása": "The sun's path",
  "Ajánlott beállítás": "Recommended setting",
  "Panel igazítása a tájolóval": "Align the panel with the compass",
  "Várható termelés ezen a napon": "Expected yield on this day",
  "Szélesség, pl. 47.50": "Latitude, e.g. 47.50",
  "Hosszúság, pl. 19.04": "Longitude, e.g. 19.04",
  "pl. 400": "e.g. 400",
  "A szélesség -90 és 90, a hosszúság -180 és 180 fok közötti szám.": "Latitude is a number between -90 and 90, longitude between -180 and 180 degrees.",
  "Még nem tudom, hol vagy. Nyomd meg a „Mérés a helyzetemre” gombot, vagy add meg kézzel.": "I don't know where you are yet. Tap “Calculate for my position”, or enter it by hand.",
  "kézzel megadva": "entered by hand",
  "Ezen a napon itt a nap nem kel fel.": "On this day the sun does not rise here.",
  "Ezen a napon itt a nap nem nyugszik le.": "On this day the sun does not set here.",
  "Nappal hossza:": "Day length:",
  "napsütés derült égnél, 10° fölött:": "sunshine with a clear sky, above 10°:",
  "A panel erre nézzen (valódi égtáj, nem mágneses).": "Face the panel this way (true direction, not magnetic).",
  "Erre a napra": "For this day",
  "Tél": "Winter",
  "Tavasz": "Spring",
  "Nyár": "Summer",
  "Ősz": "Autumn",
  "Egész évre, fixen": "All year, fixed",
  "A dőlésszög a vízszinteshez mért szög: 0° = fekvő panel, 90° = függőleges.": "The tilt is measured from horizontal: 0° = panel lying flat, 90° = vertical.",
  "Add meg a panel teljesítményét (a címkéjén W-ban), és kiszámolom, nagyjából mennyit termel ezen a napon.": "Enter the panel's power (in W, on its label) and I will work out roughly how much it makes on this day.",
  "A napra ajánlott dőléssel": "With the tilt recommended for the day",
  "Az egész évre beállított dőléssel": "With the all-year tilt",
  "Becslés, felhő nélkül: tiszta égbolttal, árnyék nélkül, 20% veszteséggel számolva. Felhős időben ennek csak a töredéke jön, borult égnél akár a tizede.": "Estimate, no clouds: clear sky, no shade, 20% losses. On a cloudy day you get only a fraction of this, under full overcast as little as a tenth.",
  "a választott nap": "the chosen day",
  "napfordulók, napéjegyenlőség": "solstices, equinox",
  "Tartsd a telefont állva, a kamerával a panel felé: a kamera bekapcsol, és a nap pályája a képen látszik. A tájoló a panel irányára mutat.": "Hold the phone upright, camera towards the panel's direction: the camera turns on and the sun's path shows on the picture. The compass points to the panel's direction.",
  "AMIT EZ TUD ÉS AMIT NEM. A nap helyzetét és a napkeltét pár perc pontossággal számolja, internet nélkül. A dőlésszög és a termelés tiszta égboltra szóló becslés: a felhőt, az árnyékot (fa, ház, domb) és a panel melegedését nem ismeri. A tájoló mágneses irányt mutat, ami Magyarországon kb. 5 fokkal tér el a valódi déltől; a panel termelésén ez alig látszik.": "WHAT THIS CAN AND CANNOT DO. It calculates the sun's position and sunrise to within a few minutes, without internet. The tilt and the yield are clear-sky estimates: it knows nothing of clouds, shade (trees, houses, hills) or the panel heating up. The compass shows magnetic direction, which in Hungary is about 5 degrees off true south; the panel's yield barely notices this.",
  // ===== 2026-10-25 v43.379: short closed-message bubble =====
  "Zárt üzenet": "Locked message",
  // ===== 2026-10-25 v43.378 (card 6b4458db, Boss 20:26): offline map page, one row per region =====
  "Tájegységek letöltése": "Download regions",
  "Alaptérkép, turistautak, pontok": "Base map, trails, points",
  "Hiányzó részek letöltése": "Download the missing parts",
  "hiányzik": "missing",
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
  "Panel összecsukása": "Collapse panel",
  "Panel kinyitása": "Expand panel",
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
  "Gerah küldése neki": "Send Gerah to them",
  // ===== 2026-10-11 22:3x: gira-kozosseg a gazda dontese =====
  "A szoba gazdája Gerah-közösségnek jelölte: a telefonod magától részt vesz.": "The room admin marked it as a Gerah community: your phone takes part automatically.",
  "Ezt a szoba gazdája kapcsolja be; még nem jelölte Gerah-közösségnek.": "The room admin switches this on; it is not marked as a Gerah community yet.",
  "Bekapcsolva a szoba minden tagjának. Átküldöm a Gerah-könyvet…": "Switched on for every member of the room. Sending the Gerah ledger…",
  "Kikapcsolva a szoba minden tagjának.": "Switched off for every member of the room.",
  "A szoba gazdája kapcsolja be; ilyenkor minden tag telefonja magától átküldi ide a Gerah-könyvét, és innen fogadja a többiekét. A szoba minden tagja látja a Gerah-mozgásokat.": "The room admin switches it on; then every member's phone sends its Gerah ledger here automatically and receives the others'. Every member of the room sees the Gerah movements.",
  // ===== 2026-10-11 22:2x: LoRa a radio-kalkulatorban =====
  "LoRa (868 MHz) — engedély nélküli adatrádió": "LoRa (868 MHz) — licence-free data radio",
  "Engedély nélkül használható: alapból 25 mW, a 869,4-869,65 MHz-es alsávon 500 mW, korlátozott adásidővel. Nem beszéd, hanem rövid szöveges üzenet; cserébe kis teljesítménnyel is kilométereket visz, mert a zaj alatt is vesz. A telefon nem tud LoRát: egy LoRa-egység kell, amihez a telefon Bluetooth-on csatlakozik.": "Licence-free: 25 mW by default, 500 mW on the 869.4-869.65 MHz sub-band, with limited airtime. Not voice, but short text messages; in return it covers kilometres with little power, because it receives below the noise. Phones have no LoRa: you need a LoRa unit that the phone connects to over Bluetooth.",
  // ===== 2026-10-11 21:4x: gira minusz-hatar =====
  "ennyit fizethetsz most": "you can pay now",
  "Ez túllépné a mínusz-határodat.": "This would exceed your minus limit.",
  "Most legfeljebb ennyit fizethetsz:": "The most you can pay now:",
  "határ": "limit",
  "Mínuszba mehetsz": "You can go down to",
  "gerah-ig": "gerah",
  "most ennyit fizethetsz": "payable now",
  // ===== 2026-10-11 21:3x: gira-egyenleg az urlapon =====
  "Egyenleged": "Your balance",
  "a Gerah nem mehet mínuszba, ezért fizetni akkor tudsz, ha előbb kapsz valakitől.": "Gerah cannot go negative, so you can pay once someone has paid you first.",
  "Ennyi Gerah-d nincs. Egyenleged:": "You do not have that many Gerah. Your balance:",
  "A Gerah nem mehet mínuszba: előbb kapnod kell valakitől.": "Gerah cannot go negative: someone has to pay you first.",
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
  "még nincs Gerah-azonosítója":
    "no Gerah ID yet",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Elküldve a szobán keresztül":
    "Sent through the room",
  "Nála magától jóváíródik, és a nyugtája is magától visszajön.":
    "It is credited on their side automatically, and their receipt comes back automatically too.",
  "A szobába most nem ment el (nincs kapcsolat vagy kulcs). Itt a QR, ezzel is átadhatod.":
    "Could not send to the room right now (no connection or key). Here is the QR, you can hand it over with this too.",
  "Gerah-fizetés":
    "Gerah payment",
  "hamis aláírás, nem fogadom el":
    "bad signature, not accepted",
  "jóváírva nálad":
    "credited to you",
  "Szobatársat választhatsz, ha egy Gerah-közösség szobában ők is bekapcsolták.":
    "You can pick a room mate if they also turned it on in a Gerah community room.",
  "Szobatárs kiválasztása…":
    "Choose a room mate…",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Helyek":
    "Places",
  "a határok közelítők":
    "borders are approximate",
  "A területhatárok közelítő rekonstrukciók, nem mért vonalak.":
    "Territorial borders are approximate reconstructions, not surveyed lines.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Gerah-közösség":
    "Gerah community",
  "A telefon ebbe a szobába magától átküldi a Gerah-könyvedet, és innen fogadja a többiekét. A szoba minden tagja látja a Gerah-mozgásokat.":
    "The phone automatically sends your Gerah ledger to this room and receives the others' from here. Every member of the room sees the Gerah transactions.",
  "Gerah-közösségnek jelölt szobák":
    "Rooms marked as Gerah community",
  "A szoba beállításaiban kapcsolhatod be („Gerah-közösség”); oda a telefon magától átküldi a könyvet.":
    "Turn it on in a room's settings (“Gerah community”); the phone sends the ledger there automatically.",
  "Utoljára egyeztetve":
    "Last synced",
  "Egyeztetés most":
    "Sync now",
  "szoba":
    "room(s)",
  "Nincs elérhető Gerah-közösség szoba. Kapcsold be egy szoba beállításaiban.":
    "No reachable Gerah community room. Turn it on in a room's settings.",
  "Bekapcsolva. Átküldöm a Gerah-könyvet…":
    "On. Sending the Gerah ledger…",
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
  "Változatok": "Variants",
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
  "Üres üzenetet nem lehet menteni. A törlés külön művelet.":
    "An empty message cannot be saved. Deleting is a separate action.",
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
  "A szerver tárolja: a szoba és a tagok nevét, a profilképet, a bemutatkozásomat, a fiókomhoz kötött azonosítót, az üzenetek küldőjét és idejét, az üzenetek TITKOSÍTOTT tartalmát (néhány régebbi vagy rendszerüzenet szövegét titkosítatlanul), a képeket (max 500 kB), a reakciókat, az olvasási jelzéseket és az eltávolított tagok jegyzékét (e-mail, név). Részletek az adatkezelési tájékoztatóban.":
    "The server stores: the room and member names, the profile picture, my introduction, the ID linked to my account, the sender and time of messages, the ENCRYPTED content of messages (a few older or system messages unencrypted), the images (max 500 kB), the reactions, the read receipts and the list of removed members (e-mail, name). Details in the privacy notice.",
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
  // room cover crop (owner 2026-11-02, TG 33680)
  "Kivágás": "Crop",
  "Feltöltöm...": "Uploading...",
  "Húzd a képet a keretben, két ujjal vagy a csúszkával nagyíts. Csak a keretben látszó rész kerül mentésre.":
    "Drag the picture inside the frame, zoom with two fingers or the slider. Only the part visible in the frame is saved.",
  "Húzd a képet a körben, két ujjal vagy a csúszkával nagyíts. Csak a körben látszó rész kerül mentésre.":
    "Drag the picture inside the circle, zoom with two fingers or the slider. Only the part visible in the circle is saved.",
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
  // HANGGENERATOR (store compliance, owner choice "3b", 2026-10-31)
  "Magas hang": "High-pitched tone",
  "Söprő hang": "Sweeping tone",
  "Folyamatos hang": "Steady tone",
  "Söprő hang frekvenciája": "Sweeping tone frequency",
  "Folyamatos hang frekvenciája": "Steady tone frequency",
  "Hz, lassan söprő hang. A legtöbb felnőtt ezt már nem hallja.":
    "Hz, a slowly sweeping tone. Most adults can no longer hear this.",
  "Hz, folyamatos hang.":
    "Hz, a continuous tone.",
  "A telefon hangszórója ilyen magas hangon lényegesen halkabb, mint a vészsípnál, és ezt a készüléked dönti el, nem az app.": "At such a high pitch your phone's speaker is considerably quieter than it is for the emergency whistle, and that is decided by your device, not by the app.",
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
  'SSTV (képküldés)': 'SSTV (picture sending)',
  'Szobák (internet)': 'Rooms (internet)',
  'Készlet, pakolás': 'Stock, packing',
  'Pénzügy': 'Finances',
  'SOS, lámpa': 'SOS, light',
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
  "Prémium": "Premium",
  "Morze és fax": "Morse and fax",
  "Feloldva ezen a készüléken:": "Unlocked on this device:",
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
  'a GPS-helyzetedre nyitja meg az Új pont ablakot: ott nevet adsz és mented, nem oda kerül, ahová az ujjad ér. A': 'opens the New point form at your GPS position: you name it and save it there, instead of where your finger lands. The',
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
  'Kérek Gerah-t, beírod mennyit és miért, kapsz egy QR-t. Ő beolvassa, és nála kitöltve áll a fizetés, csak jóvá kell hagynia.':
    'Request Gerah, you enter how much and why, and you get a QR. They scan it, the payment stands filled in on their side, and they only need to approve it.',
  'Miért két beolvasás?': 'Why two scans?',
  'Mert az ő kódja csak azt mondja meg, kinek és mennyit. Az értéket a te aláírásod viszi át, és az a te QR-edben van. Amíg ő nem olvasta be, a tétel nálad „átadásra vár” jelöléssel áll.':
    'Because their code only says to whom and how much. The value is carried by your signature, and that is in your QR. Until they have scanned it, the item stands on your side marked "awaiting handover".',
  'Minden a két telefon között megy, kamerával és képernyővel. Se szerver, se térerő.':
    'Everything happens between the two phones, with camera and screen. No server, no signal.',
  'Van, ahol a böngésző nem tud QR-t olvasni (jellemzően iPhone Safari). Ilyenkor a Beillesztés szövegből gomb ugyanazt tudja: a fizetés elkészítése után a QR alatti Szöveg másolása gombbal átküldöd a tételt üzenetben, ő pedig a Beillesztés szövegből gombbal beveszi. Az ellenőrzés ugyanúgy megtörténik, az aláírás a szövegben is benne van.':
    'On some devices the browser cannot read QR codes (typically iPhone Safari). There the Paste from text button does the same: after creating the payment, use Copy text under the QR to send the item in a message, and they take it in with Paste from text. Verification happens the same way — the signature is in the text as well.',
  'a nevedben más nem tud fizetni (a titkos kulcs a telefonodon marad), és egy aláírt tétel utólag nem módosítható észrevétlenül.':
    'nobody can pay in your name (the private key stays on your phone), and a signed item cannot be altered later without it showing.',
  'offline a kettős költést megelőzni nem lehet. Ha valaki ugyanazt a Gerah-t két embernek adja, az akkor derül ki, amikor a két tétel találkozik — és a saját aláírása bizonyítja. Ezért érdemes időnként összefésülni a könyveket a közösségben.':
    'offline double spending cannot be prevented. If someone gives the same Gerah to two people, it comes to light when the two items meet — and their own signature proves it. This is why it is worth reconciling the books in the community from time to time.',
  'Rekesz': 'Compartment',
  'Kripto-kulcsok': 'Crypto keys',
  'Új bejegyzés': 'New entry',
  'Seed-mondatnál a papír-másolat nem elavult ötlet: egy elveszett vagy letörölt telefon a kulcsot is viszi. Amit ide beírsz, azt tartsd meg máshol is.':
    'For a seed phrase a paper copy is not an outdated idea: a lost or wiped phone takes the key with it. Keep whatever you type here somewhere else too.',
  'PIN-nel védett helyi tároló okmányokhoz (szig, jogosítvány, TAJ, biztosítás, forgalmi).':
    'PIN-protected local store for documents (ID card, driving licence, health card, insurance, vehicle registration).',
  'Szűrés: kinek az iratait mutassuk': 'Filter: whose documents to show',
  'Új dokumentum': 'New document',
  'Ehhez a dokumentumhoz: kié? Személy, állat vagy jármű. Ha egyiket sem jelölöd, közösként mentjük.':
    'For this document: whose is it? A person, an animal or a vehicle. If you mark none, we save it as shared.',
  'Magyar': 'Magyar',   // language names are autonyms in every UI language, like de/es/pl/ro/ru (Thomas, iPhone, card 85463120)
  'véglegesen': 'permanently',
  'szól erre a készülékre, nincs lejárata és nincs megújítás. Ha kódot kaptál, itt válthatod be.':
    'applies to this device, with no expiry and no renewal. If you received a code, you can redeem it here.',
  'Kód beváltása': 'Redeem code',
  'Névjegy': 'About',
  'PrepperPapa — vészhelyzeti prepper eszköztár.': 'PrepperPapa — an emergency prepper toolkit.',
  'Verzió:': 'Version:',
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
  'Az első mérés óta eltelt idő:': 'Time since the first reading:',
  'Trendet húsz perctől mondok.': 'A trend is shown from twenty minutes on.',
  'Hézag van a mérésekben. Az előző mérés óta eltelt:': 'There is a gap in the readings. Time since the previous reading:',
  'A hézag óta eltelt idő:': 'Time since the gap:',
  'Közelítő trend: az utóbbi órákban hézag van a mérésekben, ezért az ablak elejét a hézag előtti utolsó mérésből számoltam.': 'Approximate trend: there is a gap in the readings over the last hours, so the start of the window was calculated from the last reading before the gap.',
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
  "Gerah: ha a névjegy elsőre nem ért célba, magától újra elküldődik.": "Gerah: if your contact card did not get through the first time, it is sent again automatically.",
  "Gerah: a közösséghez később csatlakozó tag is megkapja a közösség jelzéseit.": "Gerah: a member who joins the community later also receives the community's signals.",
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
  'Izrael helyreállítása': 'Restoration of Israel',
  'Az Úr eljövetele és az elragadtatás': 'The Lord’s coming and the rapture',
  'Hitehagyás és antikrisztus': 'Apostasy and the Antichrist',
  'Győzelem és reménység': 'Victory and hope',
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
  "A fűtés a tüzelőanyag mennyiségéből számol, darabonként grammban vagy milliliterben (egy 11 kg-os gázpalack = 11000). Most {g} {egyseg}/db van megadva, így ez a tétel a fűtésbe alig vagy egyáltalán nem számít bele.": "Heating is calculated from the amount of fuel, per piece in grams or millilitres (an 11 kg gas cylinder = 11000). Now {g} {egyseg}/pc is entered, so this item counts little or nothing towards heating.",
  "OK = mégis így mentem.": "OK = save it anyway.",
  "Mentve. Figyelem: {g} {egyseg}/db tüzelőanyag a fűtésbe alig számít. A mennyiséget darabonként grammban vagy milliliterben kérjük (egy 11 kg-os gázpalack = 11000).": "Saved. Note: {g} {egyseg}/pc of fuel barely counts towards heating. Please enter the amount per piece in grams or millilitres (an 11 kg gas cylinder = 11000).",
  "mázsa": "quintal (100 kg)",
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
  'nap (csempe)': 'd',
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
  "Személyazonosság létrehozása": "Create identity",
  "A készülék készít egy kulcspárt. A titkos kulcs csak a titkosított mentésbe kerül bele. Ezzel írod alá a fizetéseidet, és ezért nem tud más a nevedben fizetni.": "The device creates a key pair. The private key goes only into the encrypted backup. You sign your payments with it, so nobody else can pay in your name.",
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
  'Gerah': 'Gerah',
  'Hány Gerah-t kérsz': 'How many Gerah you request',
  'Hány Gerah': 'How many Gerah',
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
  "Súly (darabonként)": "Weight (per piece)",
  "Űrtartalom (darabonként)": "Volume (per piece)",
  "5 = egy 5 literes kanna": "5 = a 5-litre canister",
  "1,5 = másfél literes": "1.5 = a 1.5-litre bottle",
  "1000 = 1 IBC (1000 liter)": "1000 = 1 IBC (1000 litres)",
  "20 = 20 liter": "20 = 20 litres",
  "100 = egy mázsa": "100 = one quintal",
  "11,5 = egy 11,5 kg-os PB": "11.5 = an 11.5 kg LPG cylinder",
  "1 = egy mázsa": "1 = one quintal",
  "pl. 0,5": "e.g. 0.5",
  "pl. 5": "e.g. 5",
  "pl. 1": "e.g. 1",
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
  "Pont ide, ahol vagyok: a GPS-helyzetedre nyit új pontot, te nevezed el és mented. Helyzetem küldése: elküldöd valakinek, hol vagy.": "Pin where I am: opens a new point at your GPS position, you name it and save it. Send my position: you send someone where you are.",
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
  "Hamarosan": "Coming soon",
  "Jegyzeteim": "My notes",
  "Játékok": "Games",
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
  "Stúdióhang": "Studio voice",
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
  "Tartsd nyomva egy verset: keresés, kiemelés, jegyzet, könyvjelző és megosztás. Amit így jelölsz, a Kiemeléseim és a Jegyzeteim alatt visszatalálod.": "Press and hold a verse: search, highlight, note, bookmark and share. Whatever you mark this way, you will find under My highlights and My notes.",
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
  "Gerah-könyv csomag (ismeretlen formátum)": "Gerah ledger package (unknown format)",
  "Gerah-könyv": "Gerah ledger",
  "hamis aláírás": "forged signature",
  "KÉTSZERI KÖLTÉS": "DOUBLE SPEND",
  "aláírások rendben": "signatures OK",
  "Előbb csatlakozz egy helyi szobához (Bluetooth vagy wifi).": "First join a local room (Bluetooth or wifi).",
  "Még nincs aláírt Gerah-tételed, amit megoszthatnál.": "You have no signed Gerah items to share yet.",
  "A helyi szobának nincs titkosító kulcsa, ezért nem küldöm el a könyvet.": "The local room has no encryption key, so I will not send the ledger.",
  "Elküldve a helyi szobába": "Sent to the local room",
  "csomag": "packages",
  "Nem ment el minden csomag. Nézd meg, hogy egy hálón vagytok-e.": "Not every package was sent. Check that you are on the same network.",
  "Előbb nyiss meg egy online szobát.": "First open an online room.",
  "Az online szobának nincs titkosító kulcsa ezen a telefonon, ezért nem küldöm el a könyvet.": "The online room has no encryption key on this phone, so I will not send the ledger.",
  "Elküldve az online szobába": "Sent to the online room",
  "Nem ment el minden csomag.": "Not every package was sent.",
  "Könyvek összefésülése": "Reconcile ledgers",
  "A tagok kicserélik az aláírt Gerah-tételeiket, és a telefon minden aláírást ellenőriz. Ha valaki ugyanazt a Gerah-t kétszer adta oda, itt kiderül. Szerver és blokklánc nélkül megy: a szoba csak továbbítja a titkosított csomagot.": "Members exchange their signed Gerah items and the phone verifies every signature. If someone gave the same Gerah twice, it shows up here. No server and no blockchain: the room only forwards the encrypted package.",
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
  // planned target on the readiness tiles (Boss 2026-11-03, TG 34406)
  { minta: /^(\d+) fő · (\d+) napra tervezve$/,
    csere: (_, a, b) => a + ' ' + alak(+a, 'person', 'people') + ' · planned for ' + b + ' ' + alak(+b, 'day', 'days') },
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
  { minta: /^Heti átlag: (\d+) fejezet$/, csere: "Weekly average: $1 chapters" },
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
  "A Gerah aláíró kulcsa a PIN mögött van: nyisd meg a Token tárcát.": "The Gerah signing key is behind the PIN: open the Token wallet."
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
  "kórház": "hospital",
  "rendelőintézet": "clinic",
  "temető": "cemetery",
  "menedékház": "mountain hut",
  "esőbeálló, menedék": "shelter",
  "szálloda": "hotel",
  "vendégház, panzió": "guest house",
  "turistaszálló": "hostel",
  "motel": "motel",
  "üdülő": "resort",
  "apartman": "apartment",
  "szálláshely": "accommodation",
  "szupermarket": "supermarket",
  "áruház": "department store",
  "bevásárlóközpont": "shopping centre",
  "piac": "market",
  "élelmiszerbolt": "grocery",
  "zöldséges": "greengrocer",
  "pékség": "bakery",
  "hentes": "butcher",
  "vegyesbolt": "general store",
  "cukrászda": "pastry shop",
  "édességbolt": "sweet shop",
  "italbolt": "drinks shop",
  "posta": "post office",
  "bolt": "shop",
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
  "Bemenő (adás)": "Input (transmit)",
  "Eltolás": "Offset",
  "Csatorna": "Channel",
  "CTCSS (le/fel)": "CTCSS (down/up)",
  "QTH lokátor": "QTH locator",
  "Magasság": "Elevation",
  "Állapot": "Status",
  "aktív": "active",
  "inaktív": "inactive",
  "Forrás: HA2TO (Orbán Árpád), ha2to.orbel.hu, {d}": "Source: HA2TO (Árpád Orbán), ha2to.orbel.hu, {d}",
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
 "Tükör": "Mirror",
 "Előlapi kamera fénykerettel, sérülés megnézéséhez": "Front camera with a light frame, to check an injury",
 "Fény: be": "Light: on",
 "Fény: ki": "Light: off",
 "A kamera nem nyitható meg. Engedélyezd a kamerát az app beállításaiban.": "The camera can't be opened. Allow the camera in the app settings.",
 "Két ujjal csippentve nagyítasz. A fehér keret világítja meg az arcod; sötétben tedd a képernyő fényerejét maximumra.": "Pinch with two fingers to zoom. The white frame lights your face; in the dark, turn the screen brightness to maximum.",
 "Privát üzenet": "Private message",
 "Gerah küldése": "Send Gerah",
 "Hanggenerátor": "Tone generator",
 "Magas hang állítható frekvenciával": "High-pitched tone with adjustable frequency",
 "A hang most nem indult el.": "The sound did not start.",
 "Előzmény": "History",
 "Legutóbb olvasott igék": "Recently read verses",
 "Korábbi keresések": "Previous searches",
 "1 igehely": "1 verse",
 "{n} igehely": "{n} verses",
 "Még nincs olvasott ige. Amit a Bibliában megnyitsz, itt jelenik meg.": "No verses read yet. What you open in the Bible will appear here.",
 "Még nincs korábbi keresés. Amit itt keresel, ide kerül.": "No previous searches yet. What you search for here will be listed.",
 "Olvasási terv: csak ez az olvasmány látszik, a felolvasás a végén megáll.": "Reading plan: only this reading is shown, and read-aloud stops at its end.",
 "Az olvasmány vége": "End of the reading",
 "Vissza a tervemhez": "Back to my plan",
 "Ébresztő": "Alarm",
 "Ébresztő bekapcsolva": "Alarm on",
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
  // v43.407 (kartya 0ef65ebd): eszkoz-riasztas elore hozasa, szoba beallitasai
  "Az értesítés nincs engedélyezve: enélkül a szoba riasztása nem jelenik meg a telefonon.": "Notifications are not allowed: without them the room's alarm does not appear on the phone.",
  "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon a riasztás csak értesítésként jelenik meg.": "Full-screen notifications are not allowed: on a locked phone the alarm appears only as a notification.",
  "A megjelenítés más alkalmazások felett nincs engedélyezve: amíg a telefont használod, a riasztás oldala nem ugrik elő, csak értesítés érkezik.": "Display over other apps is not allowed: while you are using the phone the alarm page does not pop up, only a notification arrives.",
  "Megjelenítés más alkalmazások felett": "Display over other apps",
  "A szoba riasztása lezárt és használatban lévő telefonon is előreugrik.": "The room's alarm pops up on a locked phone and while the phone is in use.",
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
 "Csendes zongora": "Quiet piano",
 "Csendes vonósok": "Quiet strings",
 "Epikus 1": "Epic 1",
 "Epikus 2": "Epic 2",
 "Epikus 3": "Epic 3",
 "Epikus 4": "Epic 4",
 "Epikus 5": "Epic 5",
 "Epikus 6": "Epic 6",
 "Gitár 1": "Guitar 1",
 "Gitár 2": "Guitar 2",
 "Gitár 3": "Guitar 3",
 "Zene": "Music",
 "Háttérzenét a Biblia beállításaiban (fogaskerék) tölthetsz le.": "Download background music in the Bible settings (gear icon).",
 "A letöltött zene hiányos volt, ezért nem mentettük el. Próbáld újra.": "The downloaded music was incomplete, so it was not saved. Please try again.",
 "Ez a zene most nem érhető el a szerveren.": "This music is not available on the server right now.",
 // a felolvaso panel (hangjegy gomb) feliratai -- eddig forditatlanok voltak (2026-10-18, 694fc83c mellett)
 "Felolvasás leállítása": "Stop reading aloud",
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
 "Automatikus (a nyelv legjobb hangja)": "Automatic (the language's best voice)",
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
 "A Stúdióhang a saját tempójában szól (nem lassítjuk, mert torzítana).": "The studio voice plays at its own pace (we do not slow it down, it would distort).",
 "jobb": "better",
 "internet": "internet",
 "letöltött": "downloaded",
 "Hang": "Voice",
 "Most ez szól": "Playing now",
 "Az internetes hang most nem érhető el, a letöltött hang szól.": "The internet voice is not available now, the downloaded voice is reading.",
 "{b} hang": "Voice {b}",
 "Meghallgatás": "Listen",
 "Meghallgatás: {nev}": "Listen: {nev}",
 "Így szól ez a hang felolvasáskor.": "This is how this voice sounds when reading aloud.",
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
  "Összecsapás": "Armed clashes",
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
  "A Gerah a közösségen belüli elszámolás egysége, nem pénz és nem fizetőeszköz. A PrepperPapa nem váltja át pénzre, nem garantálja az értékét, és nem részese a tagok közötti ügyleteknek. A tagok közötti vitákat és elszámolást a felhasználók egymás közt rendezik. Az offline fizetésnél előfordulhat, hogy ugyanazt a Gerah-t kétszer költik el; ennek kockázata a felhasználókat terheli.": "The Gerah is a unit of account within the community; it is not money and not a means of payment. PrepperPapa does not exchange it for money, does not guarantee its value, and is not a party to transactions between members. Disputes and settlement between members are resolved by the users among themselves. With offline payments the same Gerah may be spent twice; this risk is borne by the users."
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
  "Nincs elérhető Gerah-szoba: egy szoba gazdája kapcsolhatja be a szoba beállításaiban („Gerah-közösség”).": "No Gerah room available: a room owner can switch it on in the room settings (\"Gerah community\").",
  "Automatikus egyeztetés bekapcsolva, de most nincs elérhető Gerah-szoba": "Automatic sync on, but no Gerah room is reachable right now",
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
  "Egy csomag ára": "Price of one pack",
  "Egy doboz ára": "Price of one can",
  "A tesztelés idejére. A technikai adatokat (verzió, készülék, hibák) az app magától hozzáteszi.": "For the testing period. The app adds the technical data (version, device, errors) by itself.",
  "Mi történt, mit csináltál előtte, mit vártál?": "What happened, what did you do before, what did you expect?",
  "Ezt küldi el magától az app": "What the app sends by itself",
  "Nem kötelező: mit próbáltál ki? (pl. útvonal a térképen)": "Optional: what did you try? (e.g. a route on the map)",
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
 "• **Az app többi adata:** ismerem a háztartásodat (családtagok, háziállatok), a helyszíneidet és a mentett pontjaidat. A titkos kódokat, az Irattárcát és a Gerah kulcsait nem látom. Például: „Kik vannak a háztartásomban?”": "• **The app's other data:** I know your household (family members, pets), your places and your saved points. I do not see the secret codes, the Document wallet or the Gerah keys. For example: “Who is in my household?”",
 "• Ha sem a tudástár, sem a Biblia nem ír a kérdésről, általános tudásból válaszolok, és ezt jelzem. Egészségről és veszélyről nem találgatok, útvonalat pedig fejből soha nem írok le: azt csak a térkép tervezője számolja.": "• If neither the knowledge base nor the Bible writes about the question, I answer from general knowledge and say so. I do not guess about health or danger, and I never describe a route from memory: only the map's planner calculates that.",
 "**Lelki segítség**": "**Spiritual help**",
 "Lelkileg is melletted vagyok: ha félsz, elfáradtál vagy gyászolsz, igét teszek a válasz mellé, és a Bibliában is keresek: megmutatom, hol van megírva valami, a helyre koppintva megnyílik. Az igeverset soha nem én írom: mindig a Károli-fordítás pontos szövegéből jön. Például: „Hol van megírva, hogy ne aggódjunk a holnapért?”": "I am with you in spirit too: if you are afraid, tired or grieving, I put a Bible verse next to the answer, and I also search the Bible: I show where something is written, and tapping the reference opens it. I never write the verse myself: it always comes from the exact text of the app's Bible translation. For example: “Where is it written that we should not worry about tomorrow?”",
 "Internet nélkül működöm, itt futok a telefonodon. Amit kérdezel, amit válaszolok, és amit magadról megadsz, a telefonon marad: semmit nem küldök el sehova, akkor sem, ha van internet, kivéve, ha egy válaszomat te magad jelented a „Válasz jelentése” gombbal: akkor a kérdés és a válasz szövege a PrepperPapa csapatához kerül. Internet csak a nyelvi modell egyszeri letöltéséhez kell, és a térképhez, ha egy területét még nem töltötted le.": "I work without internet, I run here on your phone. What you ask, what I answer and what you tell me about yourself stay on the phone: I send nothing anywhere, even when there is internet, except when you yourself report one of my answers with the “Report this answer” button: then the question and the answer text go to the PrepperPapa team. Internet is only needed for the one-time download of the language model, and for the map if you have not downloaded an area yet.",
 "Tévedhetek; életveszélyben a 112 az első.": "I can be wrong; in a life-threatening situation, call the emergency number first."
});

// ===== 2026-10-26 v43.382 (task 6b287cfb-noah-nyelvek, Boss 2026-10-25 16:46): Noah settings sheet and measurement line =====
Object.assign(window.PP_FORD_SZOTAR.en, {
 "A telefonon: {lista}.": "On the phone: {lista}.",
 "kísérleti": "experimental",
 "Letöltés: {modell} {szaz}% ({kesz} / {ossz})": "Downloading: {modell} {szaz}% ({kesz} / {ossz})",
 "A letöltés nem sikerült:": "The download failed:",
 "Nincs elég szabad hely a telefonon ehhez a modellhez.": "There is not enough free space on the phone for this model.",
 "Nem indult el:": "Did not start:",
 "Nem sikerült:": "Failed:",
 "Törlöd, amit a Kérdezz rólad tud?": "Delete what Ask knows about you?",
 "Törlöd a letöltött modellt? Újra le kell tölteni, ha később használnád.": "Delete the downloaded model? You will have to download it again if you want to use it later.",
 "A Háztartásból: {lista}": "From the Household: {lista}",
 "A Háztartásban még nincs családtag.": "There is no family member in the Household yet.",
 "ő a kérdező": "the one asking",
 "betöltés {n} mp": "loading {n} s",
 "első szó {n} mp": "first word {n} s",
 "{n} token/mp": "{n} tokens/s",
 "memória csúcs {n} MB": "peak memory {n} MB"
});

// Bible settings tidy-up (owner 2026-10-26 17:50): short labels, one display block, one voice list
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Színes": "Colour",
 "Rajzos": "Illustrated",
 "Egyszínű": "Single colour",
 "zöld árnyalatok": "green shades",
 "Olvasási háttér": "Reading background",
 "Csillagos ég": "Starry sky",
 "Statikus zöld": "Static green",
 "3D galaxis": "3D galaxy",
 "Mozog a telefon döntésére. Szédülékenyeknek nem ajánlott.": "Moves as you tilt the phone. Not recommended if you get dizzy easily.",
 "Megjelenítés az igék mellett": "Shown next to the verses",
 "Forrás: OpenBible.info (CC BY)": "Source: OpenBible.info (CC BY)",
 "A telefon hangja": "The phone's voice",
 "Gépi hang · nem foglal helyet": "Machine voice · uses no space",
 "Gépi felvétel · magyar": "Machine recording · Hungarian",
 "Professzionális · magyar": "Professional · Hungarian",
 "Saját magadnak nem küldhetsz Gerah-t.": "You cannot send Gerah to yourself.",
 "Finom koppanás": "Gentle tap",
 "Erős koppanás": "Strong tap",
 "LoRa egység csatlakozva": "LoRa unit connected",
 "küldés folyamatban…": "sending…",
 "rádiónak átadva": "handed to radio",
 "Közeli csomópontok térképe": "Nearby nodes map",
 "LoRa-szoba": "LoRa room",
 "Meshtastic®-kompatibilis": "Meshtastic®-compatible",
 "A LoRa-szoba használatához LoRa vevőegység kell, amihez a telefon Bluetooth-on kapcsolódik.": "To use the LoRa room you need a LoRa unit, which the phone connects to over Bluetooth.",
 "LoRa vevőegységgel, Bluetooth-on": "with a LoRa unit, over Bluetooth",
 "LoRa vevőegység kell": "A LoRa unit is needed",
 "Mikor lesznek kaphatók?": "When will they be available?",
 "Nincs LoRa egység a közelben.": "No LoRa unit nearby.",
 "Üzenet a nyilvános LongFast csatornára": "Message to the public LongFast channel",
 "Küldés": "Send",
 "Nyilvános csatorna: mindenki olvassa, aki hallja.": "Public channel: anyone who hears it can read it.",
 "Még nincs üzenet a LongFast csatornán.": "No messages on the LongFast channel yet.",
 "Te": "You",
 "Mesélő · magyar": "Narrator · Hungarian",
 "Ez a könyv Samuel hangján még nincs meg. Addig a legjobb elérhető felvételen hallgathatod: {hang}.": "This book is not yet available in Samuel\u2019s voice. Until then you can listen to the best available recording: {hang}.",
 "Professzionális · hamarosan": "Professional · coming soon",
 "Készül": "In progress",
 "Megszakítás": "Cancel",
 "Letöltés": "Download",
 "Törlés": "Delete",
 "Letöltés internet nélkül": "Download for offline use",
 "magyar": "Hungarian",
 "Könyvenként": "By book",
 "Mértékegységek": "Units of measure"
});

// Bible alarms on their own screen (owner 2026-10-26 17:54): several alarms, each with its own plan
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Ébresztő törlése": "Delete alarm",
 "Ébresztő kipróbálása": "Try the alarm",
 "Új ébresztő": "New alarm",
 "Válassz tervet": "Choose a plan",
 "Törlöd ezt az ébresztőt?": "Delete this alarm?",
 "Az ébresztő egy olvasási terv napi olvasmányát olvassa fel. Előbb indíts el egy tervet.": "The alarm reads out the day's portion of a reading plan. Start a plan first."
});
// v43.389: foreign official fire bans in the fire-ban layer (card 4f0b74b5)
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Területek tilalommal vagy korlátozással": "Areas with a ban or restriction",
 "Közelíts a területek megjelenítéséhez.": "Zoom in to see the areas.",
 "Tűzhasználati korlátozás": "Fire restriction",
 "Tűz miatti területlezárás": "Area closed due to fire danger",
 "Kockázat miatti törvényi korlátozás": "Legal restriction due to fire risk",
 "Terület": "Area",
 "Érvényes": "Valid for",
 "Hatályos ettől": "In force since",
 "Hatályos eddig": "In force until",
 "Ez veszélyszint, nem külön tilalmi rendelet: ezen a szinten a portugál jogszabály (DL 82/2021) korlátozza a tűzhasználatot.": "This is a risk level, not a separate ban order: at this level Portuguese law (DL 82/2021) restricts the use of fire.",
 "A hivatalos forrás nem tartalmazza a helyi (községi) tilalmakat. Indulás előtt ellenőrizd a forrásnál.": "The official source does not include local (municipal) bans. Check with the source before you go."
});

// ===== 2026-10-27 v43.392 (report + block): internet-room report sheet, block list, collapsed messages =====
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Illegális tartalom": "Illegal content",
 "Zaklatás vagy fenyegetés": "Harassment or threats",
 "Kéretlen üzenet (spam)": "Unsolicited message (spam)",
 "Bejelentetted ezt az üzenetet. Elrejtve, a csapat ellenőrzi.": "You reported this message. Hidden; the team is checking it.",
 "Letiltott felhasználó üzenete.": "Message from a blocked user.",
 "Bejelentett üzenet, ellenőrzés alatt.": "Reported message, under review.",
 "Üzenet bejelentése": "Report message",
 "Felhasználó bejelentése": "Report user",
 "A bejelentéssel az üzenet szövege (ahogy a te telefonod megfejtette), a küldője és a szoba neve a PrepperPapa csapatához kerül. Nálad az üzenet azonnal eltűnik, a többieknél ellenőrzésig összecsukva marad.": "With the report, the text of the message (as your phone decrypted it), its sender and the room name go to the PrepperPapa team. The message disappears for you at once; for the others it stays collapsed until it is checked.",
 "A bejelentéssel a felhasználó neve és a szoba neve a PrepperPapa csapatához kerül, hogy ellenőrizhessük.": "With the report, the user's name and the room name go to the PrepperPapa team so that we can check them.",
 "Bejelentett": "Reported",
 "Mi a gond?": "What is the problem?",
 "A felhasználót le is tiltom": "Block this user as well",
 "Bejelentés": "Report",
 "Túl sok bejelentést küldtél rövid idő alatt. Próbáld újra később.": "You sent too many reports in a short time. Try again later.",
 "Most nincs internetkapcsolat. A bejelentés nem ment el, próbáld újra.": "No internet connection right now. The report was not sent; try again.",
 "A bejelentést most nem sikerült elküldeni. Próbáld újra később.": "The report could not be sent right now. Try again later.",
 "Köszönjük, a bejelentést megkaptuk. A csapat hamarosan ellenőrzi.": "Thank you, we received the report. The team will check it shortly.",
 "Letiltod ezt a felhasználót?": "Block this user?",
 "Az üzeneteit nálad elrejtjük, és privát üzenetet nem küldhet neked. A Beállításokban bármikor feloldhatod.": "Their messages will be hidden for you, and they cannot send you private messages. You can unblock them in Settings at any time.",
 "Most nem sikerült, próbáld újra később.": "That did not work right now; try again later.",
 "Letiltva.": "Blocked.",
 "A letiltás feloldva.": "Unblocked.",
 "Nincs letiltott felhasználó.": "No blocked users.",
 "Letiltás feloldása": "Unblock",
 "A küldő letiltása": "Block the sender",
 "Letiltás": "Block",
 "A privát üzenet nem ment el: ez a felhasználó nem fogad tőled privát üzenetet.": "The private message was not sent: this user does not accept private messages from you.",
 "Letiltott felhasználók": "Blocked users",
 "Az internetes szobákban letiltott felhasználók. Az üzeneteiket nálad elrejtjük, és privát üzenetet nem küldhetnek neked.": "Users you blocked in the internet rooms. Their messages are hidden for you, and they cannot send you private messages.",
 "Egyéb": "Other",
 "kép": "picture",
 "Feloldás": "Unblock"
});

// ===== 2026-10-31: report + block in local (Wi-Fi / Bluetooth / mesh) rooms (store audit item 9, owner "10a") =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "A bejelentéssel az üzenet szövege (ahogy a te telefonod megfejtette), a küldője és a szoba neve a PrepperPapa csapatához kerül. Nálad az üzenet azonnal eltűnik. A helyi szobának nincs szervere, ezért a bejelentés a következő internetkapcsolatkor megy el.": "With the report, the text of the message (as your phone decrypted it), its sender and the room name go to the PrepperPapa team. The message disappears for you at once. A local room has no server, so the report is sent at your next internet connection.",
  "A bejelentéssel a felhasználó neve és a szoba neve a PrepperPapa csapatához kerül, hogy ellenőrizhessük. A helyi szobának nincs szervere, ezért a bejelentés a következő internetkapcsolatkor megy el.": "With the report, the user's name and the room name go to the PrepperPapa team so that we can check it. A local room has no server, so the report is sent at your next internet connection.",
  "Az üzeneteit nálad elrejtjük, és értesítést sem kapsz tőle. A Beállításokban bármikor feloldhatod.": "We hide their messages for you, and you get no notifications from them either. You can undo this any time in Settings.",
  "A bejelentést elmentettük. A következő internetkapcsolatkor elküldjük.": "Your report has been saved. We will send it at your next internet connection.",
  "Túl sok bejelentés vár elküldésre. Próbáld újra később.": "Too many reports are waiting to be sent. Please try again later.",
  "A helyi (Wi-Fi, Bluetooth) szobákban letiltott felhasználók. Az üzeneteiket és az értesítéseiket nálad elrejtjük.": "Users blocked in local (Wi-Fi, Bluetooth) rooms. We hide their messages and notifications for you."
});
// v43.393: map search -- coordinate result
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Mentés pontként": "Save as point",
 "ideiglenes jelölő a térképen": "temporary marker on the map"
});

// 2026-10-27: map point categories (marker picker, point list)
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Szállás": "Accommodation",
 "Egészség": "Health",
 "Táborhely": "Campsite",
 "Alap": "Default",
 "jelölő": "marker"
});

// ===== GIRA: GYORS UT ERINTESSEL (owner 2026-10-27, TG 30121-30128): NFC / Bluetooth next to the QR =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Az NFC ki van kapcsolva, ezért most csak a QR-kód működik.":
    "NFC is off, so only the QR code works right now.",
  "NFC bekapcsolása":
    "Turn on NFC",
  "A Bluetooth ki van kapcsolva, ezért most csak a QR-kód működik.":
    "Bluetooth is off, so only the QR code works right now.",
  "Bluetooth bekapcsolása":
    "Turn on Bluetooth",
  "Gyorsabb: a másik telefonon nyomják meg a Beolvasás gombot, és tartsd össze a két telefont.":
    "Faster: on the other phone, tap Scan, then hold the two phones together.",
  "Tartsd össze a két telefont.":
    "Hold the two phones together.",
  "A két telefon túl hamar vált el. Tartsd össze őket újra.":
    "The phones were separated too soon. Hold them together again.",
  "A nyugta nem ért át: a másik telefon a QR-kódjáról olvassa be.":
    "The receipt did not get through: the other phone can scan it from its QR code.",
  "Az átvitel nem sikerült. Próbáld újra, vagy olvasd be a QR-kódot.":
    "The transfer failed. Try again, or scan the QR code.",
  "Átadva. Tartsd még egy pillanatig össze, jön a nyugta.":
    "Handed over. Keep them together a moment longer, the receipt is coming.",
  "Átadva a másik telefonnak.":
    "Handed over to the other phone.",
  "Nem érkezett semmi. Nyomd meg újra a Beolvasás gombot.":
    "Nothing arrived. Tap Scan again.",
  "Tartsd a fizetés QR-kódját a keretbe, vagy tartsd össze a két telefont.":
    "Hold the payment QR code in the frame, or hold the two phones together.",
  "Ha elkészült a fizetés, tartsd újra össze a két telefont.":
    "When the payment is ready, hold the two phones together again."
});

// 2026-10-27: barometer -- no storm alarm in a vehicle (activity recognition), card 4f0b74b5
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Autóban ne riasszon": "No alarm in a vehicle",
 "A telefon mozgásfelismerése jelzi, ha járműben ülsz, és addig nem jön viharriasztás: vezetés közben a légnyomás az emelkedőktől és a szellőzéstől is változik. Ehhez a „Fizikai tevékenység” engedély kell. Helyadatot nem használ, és semmit nem küld el.": "The phone's motion recognition tells when you are in a vehicle, and no storm alarm comes until then: while driving, the air pressure also changes with hills and ventilation. This needs the “Physical activity” permission. It uses no location data and sends nothing anywhere.",
 "Bekapcsolva — most járműben vagy, a riasztás szünetel": "On — you are in a vehicle now, the alarm is paused",
 "Bekapcsolva — járműben szünetel a riasztás": "On — the alarm pauses in a vehicle",
 "Bekapcsolva. Kikapcsolni a telefon beállításaiban lehet: Alkalmazások > PrepperPapa > Engedélyek > Fizikai tevékenység.": "On. It can be switched off in the phone settings: Apps > PrepperPapa > Permissions > Physical activity.",
 "Kész: járműben nem jön viharriasztás.": "Done: no storm alarm in a vehicle.",
 "A telefon már nem kérdez rá. A beállításokban kapcsold be: Engedélyek > Fizikai tevékenység.": "The phone no longer asks. Switch it on in the settings: Permissions > Physical activity.",
 "Nem adtál engedélyt. A riasztást ilyenkor a GPS-sebesség alapján szüneteltetem, ha van helyadat.": "You did not give permission. In that case the alarm is paused by GPS speed, if location is available.",
 "Járműben vagy (a telefon mozgásfelismerése szerint): a riasztás szünetel, mert ilyenkor a nyomás az emelkedőtől és a szellőzéstől is változik.": "You are in a vehicle (by the phone's motion recognition): the alarm is paused, because the pressure then also changes with hills and ventilation.",
 "Az elmúlt órákban járműben is mért a telefon: a riasztást csak a kiszállás utáni mérésekből számolom.": "The phone also measured in a vehicle in the last hours: the alarm is calculated only from the readings after you got out."
});

// ===== GIRA: FIZETES ERINTESSEL (owner 2026-10-29): guided touch payment, re-delivery of a pending payment =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Fogadás érintéssel":
    "Receive by touch",
  "vagy":
    "or",
  "Fizetés érintéssel":
    "Pay by touch",
  "Újra átadás":
    "Hand over again",
  "Az összeg nulla vagy hiányzik.":
    "The amount is zero or missing.",
  "Ez a fizetés már jóváírva volt nálad, másodszor nem írtam jóvá. A nyugtát újra kiadtam.":
    "This payment was already credited to you; it was not credited a second time. The receipt has been issued again.",
  "A másik telefon érintéses fogadásra vár. Írd be az összeget, nyomd meg a Fizetés érintéssel gombot, és tartsátok össze a két telefont.":
    "The other phone is waiting to receive by touch. Enter the amount, tap Pay by touch, and hold the two phones together.",
  "A fizetés nem ért át: a két telefon túl hamar vált el. Tartsátok újra össze (a másik telefonon maradjon nyitva a Fogadás).":
    "The payment did not get through: the phones were separated too soon. Hold them together again (keep Receive open on the other phone).",
  "Érintéssel nem vette át senki. A másik telefonon előbb nyomják meg a Beolvasás gombot, vagy olvassák be a QR-kódot.":
    "Nobody took it by touch. On the other phone, tap Scan first, or scan the QR code.",
  "Érintésre vár. A másik telefonon legyen bekapcsolva a Fogadás érintéssel, és tartsátok össze a két telefont.":
    "Waiting for the touch. On the other phone, Receive by touch must be on; hold the two phones together.",
  "Fizetés aláírva és átadva":
    "Payment signed and handed over",
  "Fizetés aláírása és átadása":
    "Payment is signed and handed over",
  "Nyugta megérkezett. Kész.":
    "Receipt received. Done.",
  "Nyugta visszaérkezése":
    "Receipt coming back",
  "Érintésre vár. A fizető telefonon a Fizetés érintéssel gombot nyomják meg, és tartsátok össze a két telefont.":
    "Waiting for the touch. On the paying phone, tap Pay by touch, and hold the two phones together.",
  "Azonosítód átadva, jön a fizetés…":
    "Your ID handed over, the payment is coming…",
  "Megérkezett és jóváírva":
    "Arrived and credited",
  "Fizetés megérkezése":
    "Payment arriving",
  "Nyugta visszaküldve. Kész.":
    "Receipt sent back. Done.",
  "Nyugta visszaküldése":
    "Sending the receipt back",
  "Még nem jött semmi. A másik telefonon előbb nyomják meg a Fogadás érintéssel gombot, aztán tartsátok össze a két telefont.":
    "Nothing yet. On the other phone, tap Receive by touch first, then hold the two phones together.",
  "Még nem jött semmi. A fizető telefonon előbb írják be az összeget, és nyomják meg a Fizetés érintéssel gombot, aztán tartsátok össze a két telefont.":
    "Nothing yet. On the paying phone, enter the amount and tap Pay by touch first, then hold the two phones together.",
  "A fizetés átment, a nyugta még nem jött meg. Tartsátok újra össze a két telefont, vagy a Beolvasás gombbal olvasd be a nyugta QR-kódját a másik telefonról.":
    "The payment went through, the receipt has not arrived yet. Hold the two phones together again, or use Scan to read the receipt QR code on the other phone.",
  "A fizetés átment, a nyugta még nem jött meg. Tartsátok újra össze a két telefont.":
    "The payment went through, the receipt has not arrived yet. Hold the two phones together again.",
  "A nyugta még nem jött vissza. Tartsátok újra össze a két telefont, vagy a másik telefon olvassa be a QR-kódot.":
    "The receipt has not come back yet. Hold the two phones together again, or let the other phone scan the QR code.",
  "A fizetés még nem jött meg. Tartsátok újra össze a két telefont.":
    "The payment has not arrived yet. Hold the two phones together again.",
  "A nyugta még nem ment vissza. Tartsátok újra össze a két telefont, vagy a fizető olvassa be a nyugta QR-kódját.":
    "The receipt has not gone back yet. Hold the two phones together again, or let the payer scan the receipt QR code.",
  "Lejárt az idő. Nyomd meg újra a Fogadás érintéssel gombot.":
    "Time is up. Tap Receive by touch again.",
  "Lejárt az idő. A fizetés nálad „átadásra vár”: a Mozgások között az Újra átadás gombbal még átadhatod.":
    "Time is up. The payment is “pending handover” on your phone: under Transactions you can still deliver it with Hand over again.",
  "Lejárt az idő, nem jött létre kapcsolat. A másik telefonon előbb nyomják meg a Fogadás érintéssel gombot, aztán nyomd meg újra a Fizetés érintéssel gombot.":
    "Time is up, no connection was made. On the other phone, tap Receive by touch first, then tap Pay by touch again.",
  "Ha az érintés nem megy: a fizető olvassa be ezt a QR-kódot.":
    "If the touch does not work: the payer scans this QR code.",
  "Az érintéses átadás most nem indult el. Olvassák be a QR-kódot.":
    "Handover by touch did not start. Scan the QR code instead.",
  "Az érintéses olvasás nem indult el. Próbáld újra, vagy használd a QR-kódot.":
    "Reading by touch did not start. Try again, or use the QR code.",
  "Ez nem egy másik telefon azonosítója.":
    "This is not another phone's ID.",
  "Ez a fizetés nem ennek a telefonnak szól, hanem neki:":
    "This payment is not for this phone, it is for:",
  "A fizetés nem készült el.":
    "The payment was not made.",
  "A fizetés nem volt érvényes.":
    "The payment was not valid.",
  "Ugyanaz az aláírt fizetés, nem új: a másik telefonon nyomják meg a Fogadás érintéssel gombot, és tartsátok össze a két telefont, vagy olvassa be ezt a QR-kódot.":
    "The same signed payment, not a new one: on the other phone tap Receive by touch and hold the two phones together, or scan this QR code.",
  "Ugyanaz az aláírt fizetés, nem új: a másik telefon olvassa be ezt a QR-kódot.":
    "The same signed payment, not a new one: let the other phone scan this QR code."
});

// ===== GIRA: switch-on offer when the wallet opens (owner 2026-10-29 09:18) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Az érintéses fizetéshez kapcsold be az NFC-t.":
    "Turn on NFC to pay by touch.",
  "Az érintéses fizetéshez kapcsold be a Bluetooth-t.":
    "Turn on Bluetooth to pay by touch."
});
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Érintés nélkül: címzett megadása (QR-kód, szobatárs, azonosító)":
    "Without touch: enter the recipient (QR code, room mate, ID)"
});
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Kész: a fizetés megérkezett, a nyugtát a másik telefon átvette.":
    "Done: the payment arrived and the other phone took the receipt."
});

// ===== 2026-10-29 pack list, compass bearing, SOS card stub, Bible download (Agnes: Hungarian in the EN UI) =====
// Keys with {slots} are templates (index.html ppForditKitolt): the slots are filled after the lookup.
Object.assign(window.PP_FORD_SZOTAR.en, {
  "A kijelölt személyek együtt kb. {keret} kg-ot bírnak, a lista {lista} kg. A víz a legnehezebb: fontold meg a vízszűrőt kanna helyett, vagy vidd rövidebb szakaszra.": "Together the selected people can carry about {keret} kg; the list weighs {lista} kg. Water is the heaviest: consider a water filter instead of a canister, or plan a shorter leg.",
  "A készletedben most {kcal} van megadva, ami ennek az útnak a {sz}.": "Your stock currently lists {kcal}, which is {sz} of what this trip needs.",
  "A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan.": "Your emergency card (blood type, allergies, medication, contact) appears here quickly.",
  "A víz csak az indulásra elég: a teljes igény {teljes} liter lenne, ebből {viz} liter megy veletek. A többit útközben kell megszerezni és tisztítani.": "The water is only enough for departure: the full need would be {teljes} litres, of which {viz} litres go with you. The rest has to be found and purified on the way.",
  "A {haz} a saját adatlapodon pipáld be: {jelolo}.": "In {haz}, on your own profile, tick: {jelolo}.",
  "A {hianyzik} jelölésűek a beszerzési listád. Most {n} ilyen van. A vizet és az élelmet a készlet KATEGÓRIÁJÁBÓL ismeri fel, a többit a nevéből.": "The items marked {hianyzik} are your shopping list. Right now: {n}. Water and food are recognised by their stock CATEGORY, everything else by its name.",
  "Allergia-gyógyszer ({all})": "Allergy medicine ({all})",
  "Az én adataim jelenjenek meg a vészkártyán": "Show my details on the emergency card",
  "Belefér: a kijelöltek kb. {keret} kg-ot bírnak.": "It fits: the selected people can carry about {keret} kg.",
  "Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez {tura} való, és a listán kiírom, mennyi hiányzik a teljes fejadaghoz.": "It only counts what you can carry: 1.5 litres per person. This is meant {tura}, and the list shows how much is missing from the full ration.",
  "Csomaglista": "Packing list",
  "EZ TÖBB, MINT AMIT ELBÍR": "MORE THAN THEY CAN CARRY",
  "Ez nehezebb, mint amit el tudtok vinni.": "This is heavier than you can carry.",
  "Ez {olt} kategóriájú ruházatot kíván. A készletedben nincs ilyen tétel — a készletnél ez egy kategória.": "This calls for clothing in the {olt} category. Your stock has no such item — in the stock this is a category.",
  "Ez {olt} kategóriájú ruházatot kíván. A készletedben {n} ilyen tétel van.": "This calls for clothing in the {olt} category. Such items in your stock: {n}.",
  "Felvett irány: {fok} fok ({betu}). Visszafelé: {vfok} fok ({vbetu}). A zöld háromszög a felvett irányt mutatja.": "Recorded bearing: {fok}° ({betu}). Way back: {vfok}° ({vbetu}). The green triangle shows the recorded bearing.",
  "Gyógyszer: {gy}": "Medicine: {gy}",
  "Hiányzik még kb. {kcal} kcal.": "About {kcal} kcal is still missing.",
  "Háztartásban": "Household",
  "Nem sikerült: {ok}. Ehhez az egy lépéshez internet kell.": "Failed: {ok}. This one step needs the internet.",
  "Nincs iránytű-adat, ezért nincs mit felvenni.": "No compass data, so there is nothing to record.",
  "Nála: {ossz} kg (ebből {sajat} kg a sajátja)": "Carries: {ossz} kg ({sajat} kg of it their own)",
  "Nála: {ossz} kg (ebből {sajat} kg a sajátja, {kozos} kg a közösből)": "Carries: {ossz} kg ({sajat} kg their own, {kozos} kg from the shared gear)",
  "Sapka": "Hat",
  "Termosz meleg itallal": "Thermos with a hot drink",
  "Vércsoport-kártya: {ver}": "Blood type card: {ver}",
  "Víz ({kg} kg testtömegre)": "Water (for {kg} kg body weight)",
  "Zokni": "Socks",
  "amit viszünk; a teljes igény {l} l": "what we carry; the full need is {l} l",
  "belefér": "within the limit",
  "fejenként egy ({fo})": "one each ({fo})",
  "indulásra; a teljes igény {l} l lenne": "for departure; the full need would be {l} l",
  "megvan": "have it",
  "személyre szóló ({tipus})": "personal ({tipus})",
  "teherbírása {kg} kg": "can carry {kg} kg",
  "túrához": "for hiking",
  "{kcal} kcal/nap × {nap}": "{kcal} kcal/day × {nap}",
  "{kesz} / {ossz} bepakolva": "{kesz} / {ossz} packed",
  "{kg} kg, elosztva {fo} között: fejenként kb. {fej} kg": "{kg} kg, shared between {fo}: about {fej} kg each",
  "{l} liter víz": "{l} litres of water",
  "{napra} valójában {teljes} liter kellene, ennyit viszont nem lehet elvinni. Hiányzik {hiany} liter, amit útközben kell megszerezni: vízszűrő, víztisztító tabletta, ismert vízvételi pont. Ezt a listán is nézd meg.": "You would really need {teljes} litres {napra}, but that much cannot be carried. {hiany} litres are missing and have to be found on the way: water filter, purification tablets, a known water point. Check this on the list too.",
  "{nev}: be van írva a betegség ({b}), de nincs megadva gyógyszer. A Háztartás adatlapján pótolható.": "{nev}: a condition is entered ({b}) but no medicine. You can add it on the Household profile.",
  "{nev}: nincs megadva a testtömeg, 15 kg-mal számoltam. Az adatlapján javítható.": "{nev}: no body weight is given, I counted with 15 kg. You can correct it on the profile.",
  "{n} tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz a kép.": "Items with no energy value (kcal/100 g): {n}. They are not counted. Reading it off the package makes the picture more accurate.",
  "{n}%-a": "{n}%",
  "{viz} l/nap × {nap}": "{viz} l/day × {nap}",
  "Összesen {viz} és {kcal} élelem. Becsült tömeg: {kg}.": "In total {viz} and {kcal} of food. Estimated weight: {kg}.",
  "ÉÉK": "NNE",
  "KÉK": "ENE",
  "KDK": "ESE",
  "DDK": "SSE",
  "DDNy": "SSW",
  "NyDNy": "WSW",
  "NyÉNy": "WNW",
  "ÉÉNy": "NNW"
});
// count patterns used by the pack list (`3 pár`, `5 napra`, `4 fő/állat` ...), same plural rules as above
(function () {
  const alak=(n,e,t)=>(n===1?e:t);
  window.PP_FORD_MINTAK.en.push(
    { minta: /^(\d+) fő\/állat$/, csere: (_, n) => n + ' ' + alak(+n, 'person/animal', 'people/animals') },
    { minta: /^(\d+) napra$/, csere: (_, n) => 'for ' + n + ' ' + alak(+n, 'day', 'days') },
    { minta: /^(\d+) csomag$/, csere: (_, n) => n + ' ' + alak(+n, 'pack', 'packs') },
    { minta: /^(\d+) szett$/, csere: (_, n) => n + ' ' + alak(+n, 'set', 'sets') },
    { minta: /^(\d+) pár$/, csere: (_, n) => n + ' ' + alak(+n, 'pair', 'pairs') }
  );
})();
// map locate button title (2026-10-29, written by mapKovetJel)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Követés bekapcsolva — koppints a középre igazításhoz": "Following is on — tap to centre",
  "Hol vagyok (követés visszakapcsolása)": "Where am I (turn following back on)",
  "Hol vagyok": "Where am I"
});
// Bible prayer timer, weekly reading plans, map route GPX button (2026-10-29, untranslated-text sweep)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Ismétlés": "Repeat",
  "Ezen a készüléken nincs meg a szoba kulcsa, ezért a régebbi üzenetek zárva látszanak. A kulcsot a régi eszközöd vagy egy tag adja át, amint valamelyikük megnyitja a szobát. Ha bekapcsoltad a fiókba mentést, a „Visszatöltés a fiókból” is visszahozza.": "There is no room key on this device, so older messages show as locked. Your old device or a member hands the key over as soon as one of them opens the room. If you have the account backup on, “Restore from account” brings it back too.",
  "Beengedted. Ezen a készüléken nincs meg a szoba kulcsa, ezért az új tag a kulcsot egy olyan tagtól kapja meg, akinél megvan, amint az megnyitja a szobát.": "Let in. There is no room key on this device, so the new member gets the key from a member who holds it, as soon as that member opens the room.",
  "{k} ige kimaradt: ebben a fordításban nincs szövege.": "{k} verse(s) left out: no text in this translation.",
  "Jelöld ki a kártyára szánt igéket.": "Tick the verses you want on cards.",
  "Kártyára": "On a card",
  "Kártyák nyomtatásra (PDF)": "Cards to print (PDF)",
  "Vágás az előlap felől, a számok sorrendjében: 1 a függőleges csík közepén, 2 a vízszintes csíkok közepén.": "Cut from the front, in the order of the numbers: 1 the middle of the vertical strip, 2 the middles of the horizontal strips.",
  "Vágás a számok sorrendjében: 1 körbe, 2 a függőleges középvonal, 3 a vízszintes vonalak; mindig sarokjeltől sarokjelig.": "Cut in the order of the numbers: 1 all round, 2 the vertical middle line, 3 the horizontal lines; always from corner mark to corner mark.",
  "Utána kártyánként: 3 belső oldal, 4 felső és alsó él, 5 külső oldal, hogy 95 mm széles legyen.": "Then card by card: 3 inner side, 4 top and bottom edge, 5 outer side, so that it is 95 mm wide.",
  "Hátoldal. Kétoldalas nyomtatás: hosszú él mentén fordítva, 100% (tényleges méret).": "Back side. Double-sided printing: flip on long edge, 100% (actual size).",
  "Készül a PDF…": "Making the PDF…",
  "Kész. Kártyák: {n} · A4 lapok: {l}. Nyomtatás: kétoldalas, hosszú él mentén fordítva, 100% (tényleges méret).": "Done. Cards: {n} · A4 sheets: {l}. Print double-sided, flip on long edge, at 100% (actual size).",
  "Nem sikerült a PDF.": "The PDF could not be made.",
  "Turistautak (jelzések)": "Hiking trails (markings)",
  "Saját térkép (offline)": "My map (offline)",
  "Itt vagy": "You are here",
  "küldés": "send",
  "Még egy szobában sem vagy benne. A + gombbal létrehozhatsz egyet, vagy kóddal csatlakozhatsz.": "You are not in any room yet. Create one with the + button, or join with a code.",
  "{n} szoba": "Rooms: {n}",
  "{a} / {b} szoba": "Rooms: {a} / {b}",
  "nincs szobád": "no rooms",
  "Ezen a nyelven nincs szobád. Állítsd vissza a szűrőt Minden nyelvre, vagy add meg a szoba nyelvét a fogaskerék alatt.": "You have no room in this language. Set the filter back to All languages, or set the room’s language under the gear.",
  "Erre a keresésre nincs szobád.": "No room matches this search.",
  "Mentve ✓": "Saved ✓",
  "{n} lap mentve ✓": "Pages saved: {n} ✓",
  "{regi} mostantól {nev}": "{regi} is now {nev}",
  "Rendszer": "System",
  "Idő": "Time",
  "mp": "s",
  "GPX mentése": "Save GPX",
  "Teljes Biblia egy év alatt, heti bontásban": "Whole Bible in a year, week by week",
  "Kronologikus Biblia egy év alatt, heti bontásban": "Chronological Bible in a year, week by week",
  "A könyvek sorrendjében, hetente egy adag.": "In book order, one portion a week.",
  "Az események időrendjében, hetente egy adag.": "In the order of events, one portion a week."
});
// Bible: original words on tap (Biblia premium, card cf02b3ee, 2026-10-29)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Eredeti szó": "Original word",
  "Héber": "Hebrew",
  "Arámi": "Aramaic",
  "Görög": "Greek",
  "Átírás": "Transliteration",
  "Strong-szám": "Strong number",
  "Jelentés itt": "Meaning here",
  "Szótári alak": "Dictionary form",
  "Eredet": "Origin",
  "Meghatározás": "Definition",
  "A KJV így fordítja": "KJV renders it",
  "Szótár: Strong (1894)": "Dictionary: Strong (1894)",
  "Nincs megbízható egyezés.": "No reliable match.",
  "Ennél a szónál a gépi szó-összekötés nem elég biztos, ezért nem mutatunk eredeti szót.": "For this word the automatic word alignment is not certain enough, so no original word is shown.",
  "Biblia prémium": "Bible Premium",
  "A Biblia prémiumban egy szóra koppintva megjelenik az eredeti héber, arámi vagy görög szó, átírással, Strong-számmal és szótári jelentéssel. Biblia prémium kóddal feloldható.": "With Bible Premium, tapping a word shows the original Hebrew, Aramaic or Greek word with transliteration, Strong number and dictionary meaning. Unlockable with a Bible Premium code.",
  "Vásárlás: {bolt}": "Purchase: {bolt}",
  "Köszönjük! A Biblia prémium feloldva.": "Thank you! Bible Premium is unlocked.",
  "A fizetés függőben van. Amint a bolt jóváhagyja, a Biblia prémium magától feloldódik.": "The payment is pending. As soon as the store approves it, Bible Premium unlocks by itself.",
  "Itt megvásárolhatod az alkalmazásban.": "You can buy it here in the app.",
  "Az eredeti szavak betöltése…": "Loading the original words…",
  "Az eredeti szavak most nem tölthetők be. Az első megnyitáshoz internetkapcsolat kell.": "The original words cannot be loaded now. The first opening needs an internet connection.",
  "Forrás: STEP Bible (www.STEPBible.org), CC BY 4.0": "Source: STEP Bible (www.STEPBible.org), CC BY 4.0",
  "Szótár: Strong-féle héber és görög szótár (1894), közkincs. A szótár szövege angol nyelvű.": "Dictionary: Strong's Hebrew and Greek dictionaries (1894), public domain. The dictionary text is in English.",
  "Válaszd ki, melyiket folytatod, vagy indíts újat.": "Choose which one to continue, or start a new one.",
  "Új terv": "New plan",
  "Terveim": "My plans",
  "Vissza a terveimhez": "Back to my plans",
  // napi ido az Igevel, mindenkinek (2026-10-30, kartya 38877050; nem premium: TG 31829, 2026-10-31)
  "Napi idő az Igével": "Daily time with the Word",
  // napi ido szinkron a fiokon at (opt-in, TG 34411/34413, 2026-11-03)
  "Szinkronizálás a fiókoddal": "Sync with your account",
  "Ha bekapcsolod, a napi bibliaolvasási és imaidőd (naponta a másodpercek száma) a fiókodba kerül, és összeadódik a PrepperPapa és a Wordlight alkalmazásban, illetve a többi készülékeden töltött idővel.": "When switched on, your daily Bible reading and prayer time (the number of seconds per day) is stored in your account and added up with the time spent in the PrepperPapa and Wordlight apps and on your other devices.",
  "Ez az adat utalhat a vallási meggyőződésedre; a bekapcsolással ehhez kifejezetten hozzájárulsz. Bármikor kikapcsolhatod, és a tárolt adatot törölheted.": "This data may reveal your religious beliefs; by switching this on you give your explicit consent to it. You can switch it off at any time and delete the stored data.",
  "Szinkronizálva a fiókoddal.": "Synced with your account.",
  "A szinkronhoz be kell jelentkezned.": "Sign in to use the sync.",
  "A szinkronhoz Biblia prémium kell.": "The sync needs Bible Premium.",
  "A szinkron most nem érhető el, később újrapróbáljuk.": "The sync is not available right now, we will try again later.",
  "Töröljük a fiókodból a szerveren tárolt olvasási és imaidődet is?": "Should we also delete the reading and prayer time stored on the server from your account?",
  "A szerveren tárolt időd törölve.": "The time stored on the server has been deleted.",
  "A törlés most nem sikerült, próbáld újra később.": "The deletion did not work right now, please try again later.",
  "Ima ma: {n} perc": "Prayer today: {n} min",
  "a héten: {n} perc": "this week: {n} min",
  "Ma eddig {n} perc az Igével.": "Today so far: {n} min with the Word.",
  "A mai cél teljesült.": "Today's goal is reached.",
  "Még {m} perc a mai célig.": "{m} min left to today's goal.",
  "Ma {n} / {c} perc az Igével": "Today {n} / {c} min with the Word",
  "Mai cél teljesítve · {n} perc": "Today's goal reached · {n} min",
  "Ha jólesett, maradj még egy kicsit: holnap próbáld meg {m} perccel.": "If it did you good, stay a little longer: tomorrow try {m} minutes.",
  "Holnaptól {m} perc": "{m} min from tomorrow",
  "Ha jólesett, maradj még egy kicsit: ma próbáld meg {m} perccel.": "If it did you good, stay a little longer: today try {m} minutes.",
  "Mától {m} perc": "{m} min from today",
  "Mi a Gerah?": "What is a Gerah?",
  "Ma kibányásztál {n} gerah-t!": "You mined {n} gerah today!",
  "{n} perc · {g} gerah/nap": "{n} min · {g} gerah/day",
  "Hogyan bányászhatsz Gerah-t?": "How can you mine Gerah?",
  "Napi Bibliaolvasás: ha eléred a napra beállított célodat, a cél hossza szerint kapsz Gerah-t: legalább 10 perces cél után {a}, legalább 20 perces után {b}, legalább 30 perces után {c} gerah-t; az 5 perces cél után nem jár. Naponta legfeljebb {m} gerah (a reggeli ébresztő felolvasása is beleszámít).": "Daily Bible reading: when you reach the goal you set for the day, you get Gerah by the length of the goal: {a} for a goal of at least 10 minutes, {b} for at least 20 minutes, {c} gerah for at least 30 minutes; a 5-minute goal earns none. At most {m} gerah a day (the morning alarm read-aloud counts too).",
  "Ajánlás: {n} gerah minden barátodért, aki aktiválja a profilját.": "Referral: {n} gerah for every friend who activates their profile.",
  "Ha a barátod prémiumot vásárol: további {n} gerah ({d} nap után).": "If your friend buys premium: {n} more Gerah (after {d} days).",
  "Induló egyenleg: {n} gerah, egyszer.": "Starting balance: {n} gerah, once.",
  "A napi Gerah-t a PrepperPapa alkalmazás adja:": "The daily Gerah comes with the PrepperPapa app:",
  "Gerah-tárca létrehozása": "Create Gerah wallet",
  "Még nincs Gerah-tárcád, ezért nem kerül semmi letétbe.": "You have no Gerah wallet yet, so nothing goes into escrow.",
  "A mai napért {n} gerah járna, de még nincs Gerah-tárcád, ezért nem került letétbe. Hozd létre a tárcádat mielőbb, hogy a mai nap is letétbe kerülhessen.": "Today would earn {n} gerah, but you have no Gerah wallet yet, so nothing went into escrow. Create your wallet soon so that today can still go into escrow.",
  "Eddig összesen {n} gerah-t kaphattál volna a PrepperPapa alkalmazásban.": "So far you could have earned {n} gerah in the PrepperPapa app.",
  "A mai napot a PrepperPapa alkalmazás veszi át, amikor legközelebb megnyitod. Ha a nap csatlakozik a heti cél egymást követő napjaihoz, {n} gerah kerül érte letétbe, és a heti cél teljesítésekor a tárcádba.": "PrepperPapa takes over today the next time you open it. If the day joins the consecutive days of your weekly goal, {n} gerah goes into escrow for it, and into your wallet when you reach the weekly goal.",
  "Ha ezen a telefonon telepíted, a telepítés napjától a Wordlightban teljesített napokat is átveszi: azokért, amelyek csatlakoznak a heti cél egymást követő napjaihoz, ott Gerah jár.": "If you install it on this phone, from the day of installation it also takes over the days completed in Wordlight: those that join the consecutive days of your weekly goal earn Gerah there.",
  "Wordlight — Biblia, internet nélkül is.": "Wordlight — the Bible, offline too.",
  "A kód a fiókodhoz kötődik: lépj be, utána nyomd meg újra a Kód beváltása gombot.": "The code belongs to your account: log in, then tap Redeem code again.",
  "A visszajelzés küldéséhez be kell lépned. Belépés után küldd el újra.": "To send feedback you need to log in. After logging in, send it again.",
  "Ámen": "Amen",
  "Gratulálok!": "Congratulations!",
  "Ma is {n} percet töltöttél Isten beszédével.": "Today, too, you spent {n} minutes with God's Word.",
  "Köszönöm": "Thank you",
  "Részletek": "Details",
  "{n} perc": "{n} min",
  "Nincs cél": "No goal",
  "Szótár: Strong-féle héber és görög szótár (1894), közkincs.": "Dictionary: Strong's Hebrew and Greek dictionaries (1894), public domain.",
  "Szótár: Strong-féle héber és görög szótár (1894), közkincs; a szótár szövege gépi fordítás.": "Dictionary: Strong's Hebrew and Greek dictionaries (1894), public domain; the dictionary text is a machine translation.",
  "Ehhez a fordításhoz még nincs eredeti szó adat.": "There is no original-word data for this translation yet.",
  "Hiányzó engedély az ébresztőhöz": "The alarm is missing a permission"
});
// reader panel layout (2026-10-31, TG 31909)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Letölthető zenék": "Downloadable music",
  "Nincs": "None"
});
// reader panel music preview (2026-10-31, TG 31957)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Kipróbálom": "Try it"
});

// ===== 2026-10-31: store channels keep only the mandatory account, no tester lock (card 44533242, decision 1a) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "A PrepperPapa használatához fiók kell. Lépj be az e-mail címeddel: kapsz egy 6 jegyű kódot, és utána a telefon megjegyzi, frissítés után sem kell újra.": "PrepperPapa needs an account. Sign in with your e-mail address: you get a 6-digit code, and after that the phone remembers you, even after an update."
});
// map tile store compliance: non-own layers are view-only (2026-10-31, TG 32073)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Ezt a réteget csak megnézni lehet, előre letölteni nem: a szolgáltatója ezt nem engedi (a megnézett részek megmaradnak). Internet nélkül a Saját térkép működik: Magyarországra tájegységenként letöltheted itt lent, az „Offline térkép” csoportban.": "This layer can only be viewed, not downloaded in advance: its provider does not allow it (the parts you have viewed are kept). Without internet the Own map works: for Hungary you can download it by region right below, in the “Offline map” group."
});

// UJ OLVASASI TERVEK (Fonok 2026-10-31, TG 32337/32339, kartya cf02b3ee)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Ószövetség és Újszövetség párhuzamosan": "Old and New Testament side by side",
  "Naponta egy fejezet az Ószövetségből és egy az Újszövetségből. Az Ószövetséget egyszer olvasod végig, az Újszövetség a végére érve elölről kezdődik.": "One chapter from the Old Testament and one from the New Testament each day. You read the Old Testament through once; the New Testament starts again from the beginning when it ends.",
  "Próféciák 41 nap alatt": "Prophecies in 41 days",
  "Messiási próféciák az újszövetségi beteljesedésükkel párban, utána Dániel könyve, végül az utolsó időkről szóló részek és a Jelenések könyve.": "Messianic prophecies paired with their New Testament fulfilment, then the Book of Daniel, and finally the passages on the end times and the Book of Revelation.",
  "Jézus példázatai 17 nap alatt": "The parables of Jesus in 17 days",
  "Naponta egy fejezet az evangéliumokból, amelyben Jézus példázatokban tanít, a magvetőtől a tékozló fiúig.": "One chapter a day from the Gospels in which Jesus teaches in parables, from the sower to the prodigal son.",
  "A Biblia imádságai 20 nap alatt": "The prayers of the Bible in 20 days",
  "Naponta egy fejezet egy nagy imádsággal: Ábrahám, Mózes, Anna, Salamon, Dániel, Jézus és Pál imái és mások.": "One chapter a day with a great prayer: the prayers of Abraham, Moses, Hannah, Solomon, Daniel, Jesus, Paul and others.",
  "Pál levelei 30 nap alatt": "Paul's letters in 30 days",
  "A rómaiakhoz írt levéltől a Filemonhoz írt levélig.": "From the letter to the Romans to the letter to Philemon."
});
// ===== 2026-11-01 prayer room: guided prayer, own prayer topics, daily reminder (owner TG 32583) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Mai vezetett ima": "Today's guided prayer",
  "Mai napindító ima": "Today's morning prayer",
  "Mind a 7 vezetett ima": "All 7 guided prayers",
  "Saját imatémáim": "My prayer topics",
  "Írd fel, amiért imádkozol, és jelöld meg, amikor választ kapsz. Csak ezen a készüléken tárolódik.": "Write down what you are praying for, and mark it when you receive an answer. Stored only on this device.",
  "Imatéma hozzáadása": "Add a prayer topic",
  "Imalista": "Prayer list",
  "Megválaszolt": "Answered",
  "Vezetett imák": "Guided prayers",
  "Hét rövid vezetett ima, a hét minden napjára egy. Mindegyik hálaadással kezdődik, és csenddel zárul.": "Seven short guided prayers, one for each day of the week. Each begins with thanksgiving and ends in silence.",
  "Megválaszolva: {d}": "Answered: {d}",
  "Felírva: {d}": "Written down: {d}",
  "Jegyzet (nem kötelező)": "Note (optional)",
  "Ige (nem kötelező)": "Bible verse (optional)",
  "pl. Fil 4,6": "e.g. Phil 4:6",
  "Hogyan válaszolt? (nem kötelező)": "How was it answered? (optional)",
  "Megválaszolás napja": "Date of the answer",
  "Megválaszoltnak jelölöm": "Mark as answered",
  "Megválaszolva": "Answered",
  "Vissza az imalistára": "Back to the prayer list",
  "Ezt a helyet nem találom a Bibliában. Szövegként megmarad.": "I cannot find this place in the Bible. It is kept as text.",
  "Add meg a címet.": "Enter a title.",
  "Megválaszoltnak jelölve.": "Marked as answered.",
  "Vezetett ima": "Guided prayer",
  "Következő lépés": "Next step",
  "Megnyitás a Bibliában": "Open in the Bible",
  "Az ima véget ért. Ámen.": "The prayer has ended. Amen.",
  "{n}. lépés a {m} közül: {nev}": "Step {n} of {m}: {nev}",
  "Imádkozz minden nap": "Pray every day",
  "Ima-emlékeztető": "Prayer reminder",
  "Az értesítés nincs engedélyezve: enélkül az emlékeztető nem tud megjelenni.": "Notifications are not allowed: without them the reminder cannot appear.",
  "Ezeken a napokon nem szól, mert 10 percen belül Biblia-ébresztő van: {napok}.": "It stays silent on these days because a Bible alarm rings within 10 minutes: {napok}.",
  "Következő: {ido}": "Next: {ido}",
  "Mai vezetett ima: {cim} ({n} perc).": "Today's guided prayer: {cim} ({n} min).",
  "Ideje imádkozni": "Time to pray",
  "Még nincs megválaszolt imatéma. Ha választ kapsz, jelöld meg az imatémánál.": "No answered prayer topic yet. When you receive an answer, mark it on the prayer topic.",
  "Még nincs imatémád. Az Imatéma hozzáadása gombbal írhatsz fel egyet.": "You have no prayer topics yet. Use the Add a prayer topic button to write one down.",
  "Imatéma": "Prayer topic",
  "Új imatéma": "New prayer topic",
  "Hálaadás": "Thanksgiving",
  "Bűnvallás": "Confession",
  "Ige": "Scripture",
  "Kérések": "Requests",
  "Csend": "Silence",
  "Csendben Isten előtt": "Still before God",
  "Köszönd meg a hetet, ami mögötted van. Nevezz meg három dolgot, amiért hálás vagy.": "Give thanks for the week behind you. Name three things you are grateful for.",
  "Nézz vissza őszintén: hol hagytad ki Istent a napjaidból? Mondd el neki, és fogadd el a bocsánatát.": "Look back honestly: where did you leave God out of your days? Tell him, and accept his forgiveness.",
  "Olvasd el lassan, kétszer. Melyik szó szól most hozzád?": "Read it slowly, twice. Which word speaks to you now?",
  "Tedd le elé az előtted álló hetet: a munkát, a családot, a döntéseket. Kérd, hogy ő vezessen.": "Lay the week ahead before him: your work, your family, your decisions. Ask him to lead you.",
  "Maradj csendben. Nem kell szavakat keresned, elég, hogy itt vagy.": "Stay silent. You do not need to look for words; it is enough that you are here.",
  "Aggodalom helyett hálával": "Thanksgiving instead of worry",
  "Kezdd azzal, amit már megkaptál: az egészséggel, az otthonnal, az emberekkel, akik melletted állnak.": "Begin with what you have already received: your health, your home, the people who stand by you.",
  "Melyik aggodalmadat kezelted úgy, mintha Isten nem törődne vele? Valld meg, és engedd el.": "Which of your worries have you treated as if God did not care about it? Confess it and let it go.",
  "Olvasd el, és figyeld meg a sorrendet: imádság, könyörgés, hálaadás.": "Read it and notice the order: prayer, supplication, thanksgiving.",
  "Sorold fel, ami most nyomaszt, egyenként. Mindegyik után mondd ki: Rád bízom.": "List what weighs on you now, one by one. After each, say: I entrust it to you.",
  "Csendben add át neki, ami még benned maradt.": "Silently hand over to him whatever is still left in you.",
  "Tiszta lappal": "A clean slate",
  "Köszönd meg, hogy Isten nem a hibáid szerint bánik veled, hanem kegyelemből.": "Thank him that God does not deal with you by your faults, but by grace.",
  "Kérd, hogy mutassa meg, mit kell rendbe tenned. Nevezd néven, ne mentegesd.": "Ask him to show you what you need to put right. Name it, do not excuse it.",
  "Olvasd el, és vedd komolyan az ígéretét: ha megvallod, megbocsát.": "Read it and take his promise seriously: if you confess, he forgives.",
  "Kérj erőt, hogy ahol kell, bocsánatot kérj, vagy megbocsáss valakinek.": "Ask for strength to apologise where you must, or to forgive someone.",
  "Csendben fogadd el, hogy tiszta lappal indulhatsz.": "Silently accept that you can start with a clean slate.",
  "Ami először jön": "What comes first",
  "Köszönd meg, amit ma már megkaptál, a legkisebbet is.": "Give thanks for what you have already received today, even the smallest thing.",
  "Mi foglalta el mostanában az első helyet Isten helyett? Mondd el neki.": "What has taken first place lately instead of God? Tell him.",
  "Olvasd el, és kérdezd meg magadtól: mi lenne más, ha ez lenne az első?": "Read it and ask yourself: what would be different if this came first?",
  "Kérd, hogy segítsen rendbe tenni a napod sorrendjét. Utána kérj a szükségleteidért is.": "Ask him to help you put your day in the right order. Then ask for what you need, too.",
  "Csendben add át neki a nap hátralevő részét.": "Silently hand him the rest of the day.",
  "Bátran a kegyelem trónja elé": "Boldly before the throne of grace",
  "Köszönd meg, hogy bármikor odamehetsz hozzá, és nem kell érdemet felmutatnod.": "Give thanks that you can come to him at any time without showing any merit.",
  "Mondd el, amiben elbuktál, és ne húzódj vissza tőle szégyenből.": "Tell him where you have failed, and do not hold back from him out of shame.",
  "Olvasd el, és figyeld meg: bizalommal, nem félelemmel.": "Read it and notice: with confidence, not with fear.",
  "Imádkozz másokért: a családodért, a barátaidért, és valakiért, aki most nehéz helyzetben van.": "Pray for others: for your family, your friends, and someone who is in a hard place right now.",
  "Maradj csendben a jelenlétében.": "Stay silent in his presence.",
  "Mindenben hálával": "Thankful in everything",
  "Ma a hála a fő rész. Sorold fel a hét jó pillanatait, egyiket a másik után.": "Today thanksgiving is the main part. List the good moments of the week, one after another.",
  "Hol zúgolódtál a héten? Mondd el neki, és kérd, hogy változtassa meg a szíved.": "Where did you grumble this week? Tell him, and ask him to change your heart.",
  "Olvasd el lassan. Hogyan lehet mindenért hálát adni, a nehézért is?": "Read it slowly. How can you give thanks for everything, even for what is hard?",
  "Kérd, hogy a hétvégén is vele járj, és vigyázzon azokra, akikkel együtt leszel.": "Ask to walk with him over the weekend too, and that he would watch over those you will be with.",
  "Csendben örülj annak, hogy ő veled van.": "Silently rejoice that he is with you.",
  "Megpihenni nála": "Resting in him",
  "Köszönd meg a pihenés lehetőségét, és mindazt, ami ezen a héten elkészült.": "Give thanks for the chance to rest and for everything that was completed this week.",
  "Mit cipelsz, amit nem neked kellene vinned? Mondd el neki.": "What are you carrying that is not yours to carry? Tell him.",
  "Olvasd el, és figyeld meg, kit hív: a megfáradtakat. Téged is.": "Read it and notice whom he calls: the weary. You too.",
  "Kérj nyugalmat a testednek és a lelkednek, és add át neki a jövő hét terheit.": "Ask for rest for your body and your soul, and hand him the burdens of next week.",
  "Pihenj meg csendben a jelenlétében.": "Rest in silence in his presence.",
  "Minden nap {ido}-kor emlékeztet, akkor is, ha az app be van zárva.": "Reminds you every day at {ido}, even when the app is closed.",
  "Minden nap {ido}-kor emlékeztet, amíg az app nyitva van.": "Reminds you every day at {ido} while the app is open."
});

// reading-plan gira (owner 2026-11-01, TG 32585/32609)
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Gerah: a terv befejezésekor {m} gerah ráadás jár": "Gerah: completing the plan earns a {m} gerah bonus",
 "Gerah: {k} megszerezve": "Gerah: {k} earned",
 "A kézi pipa a saját nyilvántartásodnak szól, Gerah-t nem ad. A terv befejezési ráadása a ténylegesen elolvasott vagy végighallgatott napok alapján jár.": "A manual tick is only for your own record and earns no gerah. The plan's completion bonus is based on the days you really read or listen to.",
 "Megjelölve. A terv befejezési ráadásába akkor számít, ha el is olvasod vagy végighallgatod.": "Marked. It counts towards the plan's completion bonus once you also read it or listen to it.",
 "+{n} gerah az olvasási tervért.": "+{n} gerah for the reading plan.",
 "+{n} gerah a terv befejezéséért.": "+{n} gerah for completing the plan.",
 "Ha végigolvasod vagy végighallgatod, a nap beszámít a terv befejezési ráadásába.": "Read or listen to it to the end, and the day counts towards the plan's completion bonus.",
 "Olvasási terv: a tervnapokért nem jár Gerah; a terv végigolvasásakor ráadás jár a ténylegesen elolvasott vagy végighallgatott napok arányában (a teljes Biblia egyéves terve {n} gerah, a többi terv a terjedelme szerint).": "Reading plan: plan days earn no gerah; finishing the plan earns a bonus in proportion to the days you really read or listened to (the one-year plan of the whole Bible {n} gerah, other plans by their length)."
});

// BIBLE SETTINGS / EMERGENCY VERSES / SIGN-IN leftovers (2026-11-01, owner TG 32637)
Object.assign(window.PP_FORD_SZOTAR.en, {
 "Jézus szavai színnel kiemelve": "Words of Jesus highlighted in colour",
 "Az evangéliumokban és a Jelenésekben Jézus szavai más színnel jelennek meg olvasáskor.": "In the Gospels and in Revelation, the words of Jesus appear in a different colour while you read.",
 "Amikor egyedül vagy": "When you are alone",
 "Amikor szorongás gyötör": "When anxiety torments you",
 "Amikor nem tudsz aludni": "When you cannot sleep",
 "Amikor beteg vagy, vagy fájdalmad van": "When you are ill or in pain",
 "Amikor bűntudat nyom": "When guilt weighs on you",
 "Amikor haragszol, vagy megbántottak": "When you are angry or have been hurt",
 "Amikor bátorság kell": "When you need courage",
 "Amikor menekülnöd kell, vagy úton vagy": "When you have to flee or are on the road",
 "Amikor sötét van, és nincs áram": "When it is dark and there is no power",
 "Amikor éhség és szűkösség van": "When there is hunger and want",
 "Amikor víz kell, és szomjazol": "When you need water and are thirsty",
 "Amikor vihar, árvíz vagy tűz fenyeget": "When storm, flood or fire threatens",
 "Amikor a gyermekeidért aggódsz": "When you worry about your children",
 "Amikor reménytelennek látszik minden": "When everything seems hopeless",
 "Amikor gyász ér": "When you are grieving",
 "Amikor a halál gondolata félelemmel tölt el": "When the thought of death fills you with fear",
 "Amikor döntened kell, és nincs idő": "When you must decide and there is no time",
 "Amikor a munka nehéz és sok": "When the work is hard and heavy",
 "Amikor hálát adnál": "When you want to give thanks",
 "Amikor békességre vágysz": "When you long for peace",
 "Amikor bölcsesség kell": "When you need wisdom",
 "Amikor ellenség vagy erőszak fenyeget": "When an enemy or violence threatens"
});
// ===== GERAH: the English name of the Gira (owner 2026-11-01, TG 6601/6603; KJV Ex 30:13 "a shekel is twenty gerahs") =====
// Untranslated wallet texts that carried the word; amounts after a number come from ppGerah() in index.html.
// 2026-11-01 later (TG 32728, TG 6626): the brand is undeclined in every language -- "40 gerah", no English plural.
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Közösségi Gerah": "Community Gerah",
  "Ez egy kis közösségen belüli elszámolás: elvégzett munka, eladott tojás, kölcsönadott szerszám. Az egység neve": "This is a small in-community ledger: work done, eggs sold, tools lent. The unit is called",
  ": régi magyar pénz- és súlymérték, a héber gera szóból — a Bibliában is szerepel (2Móz 30,13: „egy siklus húsz gera”). Először add meg, milyen néven ismerjenek.": ", after the biblical unit of weight (Exodus 30:13: “a shekel is twenty gerahs”). First enter the name others should know you by.",
  "Írd be, hány Gerah-t kérsz.": "Enter how many Gerah you request."
});
window.PP_FORD_MINTAK.en.push(
  { minta: /^(.+) kér tőled (\S+) gerah-t\. Nézd át, és nyomd meg a Fizetés elkészítése gombot\.$/,
    csere: (_, ki, n) => ki + ' asks you for ' + n + ' gerah' + '. Review it and press Create payment.' }
);

// ===== 2026-11-01 Gerah in every language (TG 32728): wallet texts that carry the name =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "{n} gerah kérés": "{n} gerah requested",
  "Igazolva: {n} gerah átvételét aláírta {nev}.": "Confirmed: {nev} signed the receipt of {n} gerah.",
  "{ki} kér tőled {n} gerah-t. Nézd át, és nyomd meg a Fizetés elkészítése gombot.": "{ki} asks you for {n} gerah. Review it and press Create payment."
});

// IMASZOBA page per step + music (owner 2026-11-01, TG 32757-32763)
Object.assign(window.PP_FORD_SZOTAR.en, {
});

// ===== 2026-11-01 prayer room: the 4-week cycle of 28 guided prayers + "Imádság a világért" (text: Énok; owner TG 32765-32783) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  'Imádság a világért': 'Prayer for the world',
  'Mind a 28 vezetett ima': 'All 28 guided prayers',
  '{n}. hét': 'Week {n}',
  'Ezen a héten': 'This week',
  'Négy hét, minden napra egy rövid vezetett ima, a kör négyhetente ismétlődik. Mindegyik hálaadással kezdődik, és csenddel zárul.': 'Four weeks, a short guided prayer for every day; the cycle repeats every four weeks. Each one begins with thanksgiving and ends in silence.',
  'Megnyitás a térképen': 'Open on the map',
  'A térkép világhelyzet-adatából, frissítve {kor}.': 'From the map\'s world-situation data, updated {kor}.',
  'Köszönd meg a hetet, ami mögötted van. Nevezz meg három konkrét dolgot, amiért hálás vagy.': 'Give thanks for the week behind you. Name three specific things you are grateful for.',
  'Uram, köszönöm a mögöttem lévő hetet, a jót is és azt is, amit még nem értek. Köszönöm, hogy nem engedted el a kezemet. Hálás vagyok azért a három dologért, amit most eléd hozok.': 'Lord, thank you for the week behind me, for the good and also for what I do not yet understand. Thank you for not letting go of my hand. I am grateful for the three things I now bring before you.',
  'Uram, voltak napok, amikor nélküled indultam, és nélküled döntöttem. Nem mentegetem magam, hanem eléd teszem. Köszönöm, hogy Jézusért megbocsátasz, és tisztán állhatok előtted.': 'Lord, there were days when I set out without you and made decisions without you. I do not make excuses; I lay it before you. Thank you that you forgive me because of Jesus, and that I can stand before you clean.',
  'Uram, te mondod: csendesedjetek. Elcsendesedek, és elismerem, hogy te vagy az Isten, nem én. Te vagy az, aki a zaj fölött is úr marad.': 'Lord, you say: be still. I become still, and I acknowledge that you are God, not I. You are the one who remains Lord above all the noise.',
  'Uram, eléd teszem a jövő hetet: a munkámat, a családomat és a döntéseket, amik várnak rám. Nem kérem, hogy minden könnyű legyen, azt kérem, hogy te vezess benne. Add, hogy felismerjem a hangodat, amikor szólsz.': 'Lord, I place the coming week before you: my work, my family and the decisions that lie ahead of me. I do not ask that everything be easy; I ask that you lead me through it. Help me recognise your voice when you speak.',
  'Uram, itt vagyok. Nem mondok többet, csak előtted maradok.': 'Lord, here I am. I will say no more; I will simply stay before you.',
  'Uram, mielőtt bármit kérnék, köszönöm, amit már adtál. Köszönöm az otthonomat, az erőmet és azokat az embereket, akik mellettem állnak. Nem magától értetődő, ajándék.': 'Lord, before I ask for anything, thank you for what you have already given. Thank you for my home, my strength and the people who stand by me. None of it is to be taken for granted; it is a gift.',
  'Uram, voltak gondok, amiket úgy cipeltem, mintha te nem látnád. Bocsásd meg, hogy a félelmemnek jobban hittem, mint neked. Most leteszem őket a kezedbe.': 'Lord, there were burdens I carried as if you could not see them. Forgive me for believing my fear more than I believed you. Now I lay them down in your hands.',
  'Uram, te nem azt mondod, hogy ne legyenek gondjaim, hanem hogy hozzam őket eléd. Imádsággal, kéréssel és hálával jövök, ahogy mondtad. Te békességet ígérsz, nem magyarázatot, és ez nekem elég.': 'Lord, you do not tell me to have no cares, but to bring them to you. I come with prayer, with requests and with thanksgiving, as you said. You promise peace, not an explanation, and that is enough for me.',
  'Uram, egyenként hozom eléd, ami ma a vállamon van. Mindegyiket rád bízom, nem azért, mert kicsik, hanem mert te nagy vagy. Őrizd meg a szívemet és a gondolataimat a Krisztus Jézusban.': 'Lord, one by one I bring before you what is on my shoulders today. I entrust each of them to you, not because they are small, but because you are great. Guard my heart and my mind in Christ Jesus.',
  'Uram, ami még bennem maradt, azt is tudod. Átadom szavak nélkül is.': 'Lord, you know what is still left in me too. I hand it over to you, even without words.',
  'Uram, köszönöm, hogy nem azt kapom, amit megérdemlek, hanem kegyelmet. Köszönöm, hogy Jézus már megfizetett azért, amit én nem tudtam volna. Ezért jöhetek most eléd félelem nélkül.': 'Lord, thank you that I do not receive what I deserve, but grace. Thank you that Jesus has already paid for what I never could have. That is why I can come before you now without fear.',
  'Uram, mutasd meg, mi az, amit rendbe kell tennem. Néven nevezem előtted, nem szépítem és nem magyarázom. Te hű és igaz vagy: megbocsátasz, és megtisztítasz minden hamisságtól.': 'Lord, show me what I need to put right. I name it before you; I do not dress it up and I do not explain it away. You are faithful and just: you forgive me and cleanse me from all unrighteousness.',
  'Uram, a te szavad azt mondja: ha megvallom, megbocsátod. Nem a jó érzésemre építek, hanem a te hűségedre. Elfogadom, hogy ami megvallva van, az el is van rendezve.': 'Lord, your word says: if I confess, you forgive. I do not build on my feelings but on your faithfulness. I accept that what has been confessed has also been settled.',
  'Uram, adj erőt, hogy ahol embertől kell bocsánatot kérnem, megtegyem. És adj szívet, hogy annak is megbocsássak, aki engem bántott. Tedd rendbe, amit én már nem tudok.': 'Lord, give me strength to ask forgiveness where I need to ask it of someone. And give me a heart to forgive the one who hurt me too. Put right what I can no longer put right myself.',
  'Uram, tiszta lappal indulok. Köszönöm.': 'Lord, I start with a clean slate. Thank you.',
  'Uram, köszönöm a mai napot, a reggelt, az ételt az asztalon, a tetőt a fejem fölött. Köszönöm a kicsiket is, amiket észre sem veszek. Mindegyik tőled jött.': 'Lord, thank you for today, for the morning, for the food on the table, for the roof over my head. Thank you also for the small things I do not even notice. Every one of them came from you.',
  'Uram, tudom, mi került az első helyre nálam az utóbbi időben, és az nem te voltál. Megvallom, hogy a figyelmemet és az időmet máshová adtam. Bocsáss meg, és segíts újra sorba rakni.': 'Lord, I know what has taken first place in my life lately, and it was not you. I confess that I have given my attention and my time elsewhere. Forgive me, and help me put things back in order.',
  'Uram, te azt mondod: először az országodat és az igazságodat keressem. Nem arra kérsz, hogy ne dolgozzak, hanem hogy ne a gond vezessen. Segíts úgy élni, mintha hinném, hogy te viselsz rám gondot, mert hiszem.': 'Lord, you tell me to seek first your kingdom and your righteousness. You do not ask me not to work, but not to let worry lead me. Help me live as if I believed that you take care of me, because I do believe it.',
  'Uram, rakd rendbe a mai napom sorrendjét: te legyél az első, és minden más a helyére kerüljön. És eléd hozom a szükségleteimet is, mert te mondtad, hogy hozzam. Add meg, ami kell, és adj hálás szívet ahhoz, amit adsz.': 'Lord, put the order of my day right: let you be first, and let everything else fall into place. And I bring my needs before you too, because you told me to bring them. Give me what I need, and give me a thankful heart for what you give.',
  'Uram, a nap többi része a tiéd. Járj velem benne.': 'Lord, the rest of the day is yours. Walk with me through it.',
  'Uram, köszönöm, hogy nem kell bejelentkeznem hozzád, és nem kell érdemet hoznom. Jézus miatt nyitva az út, és te nem fordulsz el. Köszönöm, hogy a trónod kegyelem trónja.': 'Lord, thank you that I do not need an appointment to come to you, and I do not need to bring any merit. Because of Jesus the way is open, and you do not turn away. Thank you that your throne is a throne of grace.',
  'Uram, amiben elbuktam, azt nem rejtem el előled. A szégyen azt mondja, hogy maradjak távol, de te azt mondod, hogy jöjjek közel. Jövök, és kérem az irgalmadat.': 'Lord, I do not hide from you where I have failed. Shame tells me to stay away, but you tell me to come near. I am coming, and I ask for your mercy.',
  'Uram, te bizalommal hívsz, nem rettegéssel. Jézus tudja, milyen embernek lenni, ezért értesz engem. Alkalmas időben segítesz, és ez az idő most van.': 'Lord, you call me to come with confidence, not with dread. Jesus knows what it is to be human, and so you understand me. You help in time of need, and that time is now.',
  'Uram, most nem magamért jövök, hanem másokért. Eléd hozom a családomat, név szerint, és a barátaimat. És eléd hozom azt az embert, akiről tudom, hogy most nehéz helyzetben van: légy közel hozzá, adj neki erőt és reményt, és használj engem, ha kell.': 'Lord, I do not come for myself now, but for others. I bring my family before you, by name, and my friends. And I bring before you the person I know is in a hard place right now: be close to them, give them strength and hope, and use me if you need to.',
  'Uram, itt maradok előtted. Elég, hogy te itt vagy.': 'Lord, I stay here before you. It is enough that you are here.',
  'Uram, ma a hálával kezdem, és nem sietek vele. Végigmegyek a héten, és köszönöm a jó pillanatokat egyiket a másik után: egy beszélgetést, egy elvégzett munkát, egy nyugodt estét. Te voltál mindegyikben, akkor is, ha nem vettem észre.': 'Lord, today I begin with thanksgiving, and I will not rush it. I go through the week and thank you for the good moments one after another: a conversation, a finished piece of work, a peaceful evening. You were in every one of them, even when I did not notice.',
  'Uram, voltak percek a héten, amikor zúgolódtam, és a hiányra néztem, nem rád. Bocsásd meg, és változtasd meg a szívemet. Taníts hálásnak lenni akkor is, amikor nem könnyű.': 'Lord, there were moments this week when I grumbled and looked at what was missing instead of looking at you. Forgive me, and change my heart. Teach me to be thankful even when it is not easy.',
  'Uram, te azt mondod, mindenben adjak hálát, nem mindenért, hanem mindenben. A nehézben is te vagy velem, és ezért ott is van mit köszönnöm. Ez a te akaratod, és én ezt választom.': 'Lord, you tell me to give thanks in everything: not for everything, but in everything. Even in what is hard you are with me, and so there is something to thank you for there too. This is your will, and I choose it.',
  'Uram, a hétvégét is veled szeretném tölteni, ne csak a hétköznapokat. Vigyázz azokra, akikkel együtt leszek, és add, hogy jó legyek hozzájuk. Legyen pihenés és öröm is benne.': 'Lord, I want to spend the weekend with you too, not only the weekdays. Watch over those I will be with, and help me to be good to them. Let there be rest and joy in it as well.',
  'Uram, örülök, hogy velem vagy. Csendben is ezt mondom.': 'Lord, I am glad that you are with me. I say it in silence too.',
  'Uram, köszönöm, hogy ma meg lehet állni. Köszönöm, ami ezen a héten elkészült, és köszönöm, hogy nem rajtam múlik a világ. A pihenés is tőled jön.': 'Lord, thank you that today I can stop. Thank you for what was completed this week, and thank you that the world does not depend on me. Rest also comes from you.',
  'Uram, cipelek dolgokat, amiket nem rám bíztál. Felelősséget, amit te hordozol, aggodalmat, amit te már elrendeztél. Megvallom, hogy nehezen engedem el, és most leteszem.': 'Lord, I am carrying things you never gave me to carry: responsibility that you bear, worry about what you have already taken care of. I confess that I find it hard to let go, and now I lay it down.',
  'Uram, te a megfáradtakat hívod, és én fáradt vagyok. Nem azt kéred, hogy előbb rendbe jöjjek, hanem hogy jöjjek. Jövök hozzád, úgy, ahogy vagyok.': 'Lord, you call the weary, and I am weary. You do not ask me to get myself in order first, only to come. I come to you just as I am.',
  'Uram, adj nyugalmat a testemnek és a lelkemnek. Ami a jövő héten vár, azt is a kezedbe teszem, hogy ne most hordozzam. Újítsd meg az erőmet, ahogy csak te tudod.': 'Lord, give rest to my body and my soul. Whatever awaits me next week I also place in your hands, so that I do not carry it now. Renew my strength, as only you can.',
  'Uram, megpihenek nálad. Nem teszek semmit, csak itt vagyok.': 'Lord, I rest in you. I do nothing; I am simply here.',
  'Az Úr az én pásztorom': 'The Lord is my shepherd',
  'Köszönd meg, hogy van, aki vezet, és nem egyedül kell kitalálnod az utat.': 'Give thanks that there is someone who leads you, and that you do not have to work out the way on your own.',
  'Uram, köszönöm, hogy nem egyedül kell kitalálnom, hová megyek. Te vezetsz, te gondoskodsz, és te ismered az utat, ahol én még nem jártam. Jó a te nyájadhoz tartozni.': 'Lord, thank you that I do not have to work out on my own where I am going. You lead me, you provide, and you know the path where I have never walked. It is good to belong to your flock.',
  'Hol mentél a magad feje után a héten, ahelyett, hogy őt követted volna? Mondd el.': 'Where did you go your own way this week instead of following him? Tell him.',
  'Uram, voltak helyek, ahová a magam feje után mentem, és nem kérdeztelek meg. Megvallom, hogy okosabbnak hittem magam a pásztoromnál. Hozz vissza, és én jövök.': 'Lord, there were places I went my own way and did not ask you. I confess that I thought I knew better than my shepherd. Bring me back, and I will come.',
  'Olvasd el, és mondd ki saját szavaddal: ő az én pásztorom.': 'Read it, and say it in your own words: he is my shepherd.',
  'Uram, te vagy az én pásztorom, nem általánosságban, hanem az enyém. Ha te vezetsz, nem szűkölködöm, mert te tudod, mi kell nekem. Erre építem ezt a hetet.': 'Lord, you are my shepherd, not in general, but mine. If you lead me, I lack nothing, because you know what I need. I build this week on that.',
  'Kérd, hogy a jövő héten a hangját kövesd, és hogy a sötét völgyben is érezd, hogy ott van.': 'Ask to follow his voice next week, and to sense that he is there even in the dark valley.',
  'Uram, add, hogy a jövő héten a te hangodat kövessem, ne a zajt. Ha völgybe vezet az út, add, hogy tudjam, ott is velem vagy. Legelőt és vizet is te adsz, rád bízom.': 'Lord, help me follow your voice next week, not the noise. If the path leads into a valley, let me know that you are with me there too. Pasture and water also come from you; I trust you for them.',
  'Maradj csendben, mint aki biztonságban van.': 'Stay silent, like someone who is safe.',
  'Uram, biztonságban vagyok nálad. Csendben maradok.': 'Lord, I am safe with you. I remain in silence.',
  'Elég a kegyelem': 'Grace is enough',
  'Köszönd meg azokat a helyzeteket, ahol a saját erőd nem volt elég, mégis átjutottál.': 'Give thanks for the situations where your own strength was not enough, and yet you made it through.',
  'Uram, köszönöm azokat a helyzeteket, ahol a saját erőm elfogyott, és mégis átjutottam. Nem én voltam erős, te voltál. Köszönöm, hogy a gyengeségem nem akadály nálad.': 'Lord, thank you for the situations where my own strength ran out and yet I made it through. I was not the strong one; you were. Thank you that my weakness is no obstacle to you.',
  'Hol próbáltad a saját erődből megoldani, amit rá kellett volna bíznod? Valld meg.': 'Where did you try to solve in your own strength what you should have entrusted to him? Confess it.',
  'Uram, megvallom, hogy sokszor a magam erejéből akartam megoldani, amit neked kellett volna átadnom. Büszkeségből vagy félelemből, de nélküled. Bocsáss meg, és taníts rád támaszkodni.': 'Lord, I confess that I often wanted to solve in my own strength what I should have handed over to you. Out of pride or out of fear, but without you. Forgive me, and teach me to lean on you.',
  'Olvasd el. Figyeld meg: Pál nem a gyengeség megszűnését kapta, hanem a kegyelmet benne.': 'Read it. Notice: Paul was not given an end to his weakness, but grace within it.',
  'Uram, te azt mondtad Pálnak: elég neked az én kegyelmem. Nekem is ezt mondod. Nem azt ígéred, hogy elveszed a tövist, hanem hogy az erőd a gyengeségemben teljesedik ki.': 'Lord, you said to Paul: my grace is sufficient for you. You say the same to me. You do not promise to take the thorn away, but that your power is made perfect in my weakness.',
  'Nevezd meg a gyenge pontodat erre a hétre, és kérd, hogy ott Krisztus ereje lakjon.': 'Name your weak point for this week, and ask that Christ\'s power may dwell there.',
  'Uram, tudom, hol vagyok gyenge ezen a héten, és eléd hozom. Ott lakjon a Krisztus ereje, ahol az enyém nem elég. Nem kérem, hogy erős legyek, azt kérem, hogy te legyél erős bennem.': 'Lord, I know where I am weak this week, and I bring it before you. Let the power of Christ dwell there, where mine is not enough. I do not ask to be strong; I ask that you be strong in me.',
  'Csendben hagyd, hogy a kegyelem elég legyen.': 'In silence, let grace be enough.',
  'Uram, elég nekem a kegyelmed. Ezt most elhiszem, és csendben maradok.': 'Lord, your grace is enough for me. I believe it now, and I remain in silence.',
  'Ne félj': 'Do not fear',
  'Köszönd meg azokat a pillanatokat, amikor féltél, és ő mégis ott volt.': 'Give thanks for the moments when you were afraid, and he was there all the same.',
  'Uram, köszönöm azokat a pillanatokat, amikor féltem, és te mégis ott voltál. Köszönöm, hogy nem hagytál egyedül a félelemmel, akkor sem, amikor nem éreztelek. Visszanézve látom a kezedet.': 'Lord, thank you for the moments when I was afraid and you were there all the same. Thank you for not leaving me alone with my fear, even when I could not feel you. Looking back, I can see your hand.',
  'A félelem gyakran olyan döntésekhez vezet, amiket nem vállalnánk tisztán. Hol döntöttél félelemből? Mondd el neki.': 'Fear often leads to decisions we would not make with a clear mind. Where did you decide out of fear? Tell him.',
  'Uram, megvallom, hogy voltak döntéseim, amiket a félelem hozott, nem a hit. Elhallgattam, elkerültem, halogattam, mert féltem. Bocsásd meg, és szabadíts meg a félelem uralmától.': 'Lord, I confess that some of my decisions were made by fear, not by faith. I kept silent, I avoided, I put things off, because I was afraid. Forgive me, and set me free from the rule of fear.',
  'Olvasd el, és számold meg, hány ígéret van egy versben. Mindegyik a jelenlétéből fakad.': 'Read it, and count how many promises there are in a single verse. Each one flows from his presence.',
  'Uram, te azt mondod: ne félj, mert veled vagyok. Nem azt mondod, hogy nincs mitől, hanem hogy te ott vagy. Megerősítesz, megsegítesz, a jobboddal támogatsz, és én ebbe kapaszkodom.': 'Lord, you say: do not fear, for I am with you. You do not say there is nothing to fear, but that you are there. You strengthen me, you help me, you uphold me with your right hand, and I hold on to that.',
  'Nevezd meg a legnagyobb félelmedet most, és tedd mellé a vers szavait.': 'Name your greatest fear right now, and set the words of the verse beside it.',
  'Uram, kimondom előtted, mitől félek most a legjobban. Odateszem mellé a te szavaidat: veled vagyok, megerősítelek. Add, hogy a félelmem kisebb legyen, mint a hitem benned.': 'Lord, I say out loud before you what I fear most right now. I set your words beside it: I am with you, I will strengthen you. Let my fear be smaller than my faith in you.',
  'Maradj csendben, mint akit fog a jobb kéz.': 'Stay silent, like someone held by the right hand.',
  'Uram, te fogsz engem, nem én téged. Ebben nyugszom meg.': 'Lord, you are holding me, not I you. In that I find rest.',
  'Bízd rá az utadat': 'Commit your way to him',
  'Köszönd meg azokat a döntéseket, amiket utólag nézve ő igazgatott.': 'Give thanks for the decisions that, looking back, he was guiding.',
  'Uram, köszönöm azokat a döntéseket, amikről utólag látom, hogy te igazgattad. Akkor nem értettem, most már igen. Köszönöm, hogy a kerülőutak is a te kezedben voltak.': 'Lord, thank you for the decisions that I now see you were guiding. Back then I did not understand; now I do. Thank you that even the detours were in your hands.',
  'Hol támaszkodtál csak a saját értelmedre, és hagytad ki őt a döntésből? Valld meg.': 'Where did you rely only on your own understanding and leave him out of the decision? Confess it.',
  'Uram, megvallom, hogy voltak döntéseim, amikbe nem vontalak be. Mindent kiszámoltam, csak téged nem kérdeztelek meg. Bocsáss meg, és segíts bizalommal élni, ne csak okosan.': 'Lord, I confess that there were decisions I did not include you in. I calculated everything, but I never asked you. Forgive me, and help me live with trust, not just with cleverness.',
  'Olvasd el. Nem az értelmet tiltja, hanem azt, hogy csak arra építs.': 'Read it. It does not forbid understanding, only building on it alone.',
  'Uram, te adtad az értelmemet, és nem kéred, hogy eldobjam. Azt kéred, hogy ne egyedül arra építsek, hanem rád. Minden utamon számolok veled, és te igazgatod az utamat.': 'Lord, you gave me my understanding, and you do not ask me to throw it away. You ask me not to build on it alone, but on you. In all my ways I acknowledge you, and you make my paths straight.',
  'Hozd eléje azt a döntést, ami most előtted áll. Kérj bölcsességet és nyitott szívet az ő irányára.': 'Bring before him the decision that is in front of you now. Ask for wisdom and an open heart to his direction.',
  'Uram, eléd hozom azt a döntést, ami most előttem áll. Adj bölcsességet, és adj nyitott szívet, hogy a te irányodat elfogadjam akkor is, ha más, mint amit terveztem. Igazgasd ezt az utamat.': 'Lord, I bring before you the decision that is in front of me now. Give me wisdom, and give me an open heart to accept your direction even if it is different from what I planned. Make this path of mine straight.',
  'Csendben engedd el a kontrollt.': 'In silence, let go of control.',
  'Uram, az utam a tiéd. Elengedem, és rád bízom.': 'Lord, my way is yours. I let go and entrust it to you.',
  'Egymás terhét': 'One another\'s burdens',
  'Köszönd meg azokat, akik a te terhedet hordozták, amikor nehéz volt.': 'Give thanks for those who carried your burden when things were hard.',
  'Uram, köszönöm azokat az embereket, akik hordozták a terhemet, amikor nehéz volt. Egy hívás, egy ima, egy segítő kéz, amikor kellett. Rajtuk keresztül te voltál ott.': 'Lord, thank you for the people who carried my burden when things were hard. A call, a prayer, a helping hand when I needed it. Through them, you were there.',
  'Kinek a terhe elől fordultál el az utóbbi időben, mert kényelmetlen volt? Mondd el.': 'Whose burden have you turned away from lately because it was uncomfortable? Tell him.',
  'Uram, megvallom, hogy volt valaki, akinek a terhe elől elfordultam, mert kényelmetlen volt. Láttam, és továbbmentem. Bocsásd meg, és adj szívet, ami nem fordul el.': 'Lord, I confess that there was someone whose burden I turned away from because it was uncomfortable. I saw it, and I walked on. Forgive me, and give me a heart that does not turn away.',
  'Olvasd el. A Krisztus törvénye a szeretet: így teljesítjük be.': 'Read it. The law of Christ is love: this is how we fulfil it.',
  'Uram, te azt mondod, hogy egymás terhét hordozzuk, és ezzel a Krisztus törvényét töltjük be. Nem szabály ez, hanem szeretet. Taníts úgy szeretni, ahogy te szerettél engem.': 'Lord, you tell us to carry one another\'s burdens, and so fulfil the law of Christ. This is not a rule; it is love. Teach me to love the way you have loved me.',
  'Nevezz meg három embert, akiknek most teher van a vállán. Imádkozz érte egyenként: egészségért, erőért, kiútért.': 'Name three people who are carrying a burden right now. Pray for them one by one: for health, for strength, for a way out.',
  'Uram, eléd hozok három embert, akik most terhet hordoznak. Az elsőért kérem, hogy adj neki erőt, a másodikért, hogy gyógyítsd, a harmadikért, hogy mutass neki kiutat. És ha engem akarsz használni bármelyiküknél, mutasd meg, hogyan.': 'Lord, I bring before you three people who are carrying a burden right now. For the first I ask that you give them strength, for the second that you heal them, for the third that you show them a way out. And if you want to use me with any of them, show me how.',
  'Csendben kérdezd meg: kihez küld ma?': 'In silence, ask: who is he sending you to today?',
  'Uram, kihez küldesz ma? Csendben várom.': 'Lord, who are you sending me to today? I wait in silence.',
  'Ahogy ő megbocsátott': 'As he forgave',
  'Köszönd meg, hogy neked megbocsáttatott, konkrétan, nem általánosságban.': 'Give thanks that you have been forgiven, specifically, not in general.',
  'Uram, köszönöm, hogy megbocsátottál nekem. Nem általánosságban, hanem azt a konkrét dolgot is, ami most eszembe jut. Krisztusban elrendezted, és nem tartod számon.': 'Lord, thank you for forgiving me. Not in general, but also for the specific thing that comes to mind right now. You settled it in Christ, and you no longer count it against me.',
  'Kire haragszol még? Mondd ki a nevét Isten előtt, és valld meg, ha keserűséget hordozol.': 'Who are you still angry with? Say their name before God, and confess it if you are carrying bitterness.',
  'Uram, van valaki, akire még haragszom, és a nevét most kimondom előtted. Megvallom, hogy keserűséget hordozok, és ez nem tőled van. Vedd ki a szívemből, mert magam nem tudom.': 'Lord, there is someone I am still angry with, and I say their name before you now. I confess that I am carrying bitterness, and it does not come from you. Take it out of my heart, because I cannot do it myself.',
  'Olvasd el. A mérce: ahogy Isten Krisztusban nekem.': 'Read it. The measure: as God forgave me in Christ.',
  'Uram, te azt mondod, úgy bocsássak meg, ahogy te megbocsátottál nekem Krisztusban. Ez a mérce, és én ebből élek. Nem azért bocsátok meg, mert a másik megérdemli, hanem mert én is kegyelmet kaptam.': 'Lord, you tell me to forgive as you forgave me in Christ. That is the measure, and I live by it. I do not forgive because the other person deserves it, but because I too have received grace.',
  'Kérj erőt a megbocsátásra, és áldást arra az emberre. Ha túl nehéz, csak ezt mondd: segíts akarni.': 'Ask for strength to forgive, and for a blessing on that person. If it is too hard, just say: help me to want to.',
  'Uram, adj erőt, hogy megbocsássak annak, akit most eléd hoztam, és áldd meg őt. Ha még nem tudom teljesen, segíts akarni. Tedd meg bennem, amit én még nem tudok megtenni.': 'Lord, give me strength to forgive the one I have just brought before you, and bless them. If I cannot do it fully yet, help me to want to. Do in me what I cannot yet do myself.',
  'Csendben engedd el, ami a kezedben volt.': 'In silence, let go of what was in your hand.',
  'Uram, elengedem. A kezedbe teszem, nem az enyémben tartom.': 'Lord, I let it go. I place it in your hands and no longer hold it in mine.',
  'Megújuló erő': 'Renewed strength',
  'Köszönd meg a hetet, és azt, hogy végigvitt rajta, akkor is, ha elfáradtál.': 'Give thanks for the week, and that he carried you through it, even when you grew tired.',
  'Uram, köszönöm, hogy végigvittél ezen a héten. Volt, hogy elfáradtam, de te nem fáradtál el mellettem. Köszönöm a mai napot, amikor meg lehet állni.': 'Lord, thank you for carrying me through this week. At times I grew tired, but you did not grow tired beside me. Thank you for today, when I can stop.',
  'Hol pótoltad a saját erőddel azt, amit tőle kellett volna várnod? Mondd el.': 'Where did you try to make up with your own strength for what you should have waited for from him? Tell him.',
  'Uram, megvallom, hogy sokszor a saját erőmből próbáltam pótolni azt, amit tőled kellett volna várnom. Hajtottam, mert nem bíztam. Bocsásd meg, és taníts várni rád.': 'Lord, I confess that I often tried to make up with my own strength for what I should have waited for from you. I pushed myself because I did not trust. Forgive me, and teach me to wait for you.',
  'Olvasd el lassan. Az erő azoknak újul meg, akik benne bíznak, nem akik jobban igyekeznek.': 'Read it slowly. Strength is renewed for those who trust in him, not for those who try harder.',
  'Uram, te azt mondod, hogy akik benned bíznak, azok ereje megújul. Nem akik jobban igyekeznek, hanem akik bíznak. Én is ezt választom: nem több erőlködés, hanem több bizalom.': 'Lord, you say that those who trust in you will renew their strength. Not those who try harder, but those who trust. I choose this too: not more striving, but more trust.',
  'Kérj megújulást a testednek, a gondolataidnak és a hitednek a jövő hétre.': 'Ask for renewal for your body, your thoughts and your faith for the coming week.',
  'Uram, újítsd meg az erőmet a jövő hétre: a testemet, a gondolataimat és a hitemet. Add, hogy ne lankadjak meg a hosszú úton, és ne fáradjak el a mindennapiban. Te vagy a forrás, nem én.': 'Lord, renew my strength for the coming week: my body, my thoughts and my faith. Let me not grow faint on the long road, nor weary in the everyday. You are the source, not I.',
  'Pihenj csendben, mint aki vár az Úrra.': 'Rest in silence, like one who waits for the Lord.',
  'Uram, várok rád. Csendben, nem sietve.': 'Lord, I wait for you. In silence, without hurrying.',
  'Világosságom és üdvösségem': 'My light and my salvation',
  'Köszönd meg, hogy van világosságod, amikor minden más sötét.': 'Give thanks that you have a light when everything else is dark.',
  'Uram, köszönöm, hogy te vagy a világosságom, amikor körülöttem sötét van. Köszönöm, hogy az üdvösségem nem rajtam áll, hanem rajtad. Jó ezt egy vasárnap reggel kimondani.': 'Lord, thank you that you are my light when it is dark around me. Thank you that my salvation does not depend on me, but on you. It is good to say this on a Sunday morning.',
  'Mitől remegtél a héten, ami nagyobbnak látszott, mint Isten? Valld meg.': 'What made you tremble this week because it looked bigger than God? Confess it.',
  'Uram, megvallom, hogy voltak dolgok a héten, amik nagyobbnak látszottak, mint te. Remegtem tőlük, mintha te nem lennél az erősségem. Bocsáss meg, és állítsd helyre bennem az arányokat.': 'Lord, I confess that there were things this week that looked bigger than you. I trembled before them, as if you were not my stronghold. Forgive me, and put things back in proportion within me.',
  'Olvasd el, és válaszolj a kérdésre: kitől féljek?': 'Read it, and answer the question: whom shall I fear?',
  'Uram, te kérdezed: kitől féljek? És a válasz az, hogy senkitől, mert te vagy az életem erőssége. Nem azért, mert bátor vagyok, hanem mert a tiéd vagyok.': 'Lord, you ask: whom shall I fear? And the answer is no one, because you are the stronghold of my life. Not because I am brave, but because I am yours.',
  'Kérd, hogy a jövő héten a te világosságában lásd a dolgokat, és hogy a házában lakjon a szíved.': 'Ask to see things in his light next week, and that your heart may dwell in his house.',
  'Uram, add, hogy a jövő héten a te világosságodban lássam a dolgokat, ne a félelem fényében. Legyen a szívem otthon nálad, akármerre jár a testem. Ezt kérem egyedül.': 'Lord, help me see things in your light next week, not in the light of fear. Let my heart be at home with you, wherever my body goes. This one thing I ask.',
  'Maradj csendben az ő világosságában.': 'Stay silent in his light.',
  'Uram, a világosságodban vagyok. Itt maradok.': 'Lord, I am in your light. I will stay here.',
  'A Lélek gyümölcse': 'The fruit of the Spirit',
  'Köszönd meg, hogy a Szentlélek benned lakik, és nem egyedül kell jóvá lenned.': 'Give thanks that the Holy Spirit lives in you, and that you do not have to become good on your own.',
  'Uram, köszönöm, hogy a Szentlelked bennem lakik, és nem egyedül kell jóvá lennem. Köszönöm, hogy a változás nem az én görcsös igyekezetem, hanem a te munkád bennem.': 'Lord, thank you that your Holy Spirit lives in me, and that I do not have to become good on my own. Thank you that change is not my strained effort, but your work in me.',
  'A kilenc gyümölcsből melyik hiányzott a legjobban a hétvégén? Mondd el.': 'Of the nine fruits, which one was missing most over the weekend? Tell him.',
  'Uram, végignézem a Lélek gyümölcseit, és tudom, melyik hiányzott a hétvégén. Kimondom előtted, mi volt az. Bocsásd meg, és ne hagyd, hogy ez legyen a végső szó rólam.': 'Lord, I look through the fruit of the Spirit, and I know which one was missing over the weekend. I name it before you. Forgive me, and do not let this be the final word about me.',
  'Olvasd el lassan a kilenc szót. Melyiket kéri tőled Isten ezen a héten?': 'Read the nine words slowly. Which one is God asking of you this week?',
  'Uram, kilenc szót olvasok, és mindegyik a te természeted. Nem én termelem, a te Lelked termi bennem, ha vele járok. Mutasd meg, melyiket akarod ezen a héten növelni bennem.': 'Lord, I read nine words, and every one of them is your nature. I do not produce them; your Spirit bears them in me when I walk with him. Show me which one you want to grow in me this week.',
  'Kérd azt az egy gyümölcsöt a hétre, és nevezd meg a helyzetet, ahol szükséged lesz rá.': 'Ask for that one fruit for the week, and name the situation where you will need it.',
  'Uram, azt az egy gyümölcsöt kérem erre a hétre, amit most mutattál. Tudom, melyik helyzetben lesz rá szükségem, és eléd hozom azt is. Teremd meg bennem, amit én nem tudok előállítani.': 'Lord, for this week I ask for the one fruit you have just shown me. I know the situation where I will need it, and I bring that before you too. Bear in me what I cannot produce myself.',
  'Csendben engedd, hogy a Lélek dolgozzon.': 'In silence, let the Spirit work.',
  'Uram, dolgozz bennem. Nem állok az utadba.': 'Lord, work in me. I will not stand in your way.',
  'Gyors a hallásra': 'Quick to listen',
  'Köszönd meg azokat, akik meghallgattak téged, és azt, hogy Isten mindig meghallgat.': 'Give thanks for those who listened to you, and that God always listens.',
  'Uram, köszönöm, hogy te mindig meghallgatsz, mielőtt szólnék. És köszönöm azokat az embereket, akik meghallgattak engem, amikor beszélnem kellett. A meghallgatás ajándék, és te adod.': 'Lord, thank you that you always listen to me, even before I speak. And thank you for the people who listened to me when I needed to talk. Being listened to is a gift, and you are the one who gives it.',
  'Hol szóltál túl gyorsan, hol haragudtál túl hamar a héten? Nevezd meg az esetet, és valld meg.': 'Where did you speak too quickly, or get angry too soon, this week? Name the moment, and confess it.',
  'Uram, megvallom, hogy voltak percek, amikor gyorsabban szóltam, mint hallgattam, és hamarabb haragudtam, mint értettem. Egy konkrét eset most eszembe jut, és eléd teszem. Bocsásd meg, és adj szelíd nyelvet.': 'Lord, I confess that there were moments when I spoke faster than I listened, and got angry sooner than I understood. One specific moment comes to mind now, and I lay it before you. Forgive me, and give me a gentle tongue.',
  'Olvasd el a három sorrendet: gyors, késedelmes, késedelmes. Melyik a te gyenge pontod?': 'Read the three in order: quick, slow, slow. Which one is your weak point?',
  'Uram, te azt kéred: gyors legyek a hallásra, késedelmes a szólásra és a haragra. Tudom, hol vagyok ebben gyenge. Taníts először téged hallgatni, aztán az embereket, és csak utána szólni.': 'Lord, you ask me to be quick to listen, slow to speak and slow to anger. I know where I am weak in this. Teach me to listen first to you, then to people, and only then to speak.',
  'Kérj türelmes szívet a mai beszélgetéseidhez, és egy konkrét emberhez, akivel nehezen beszélsz.': 'Ask for a patient heart for today\'s conversations, and for one particular person you find it hard to talk with.',
  'Uram, adj türelmes szívet a mai beszélgetésekhez. Van valaki, akivel nehezen beszélek, őt külön eléd hozom: segíts meghallgatnom, mielőtt válaszolok. Legyen a szavam békesség, ne tűz.': 'Lord, give me a patient heart for today\'s conversations. There is someone I find it hard to talk with, and I bring them before you especially: help me listen before I answer. Let my words bring peace, not fire.',
  'Csendben hallgass, ez a gyakorlat maga.': 'Listen in silence; this is the practice itself.',
  'Uram, hallgatlak. Most nem beszélek.': 'Lord, I am listening to you. I will not speak now.',
  'Nézd a madarakat': 'Look at the birds',
  'Köszönd meg a mindennapi gondviselést: az ételt, a munkát, a hónap végéig kitartó erőt.': 'Give thanks for God\'s daily provision: food, work, and the strength that lasted to the end of the month.',
  'Uram, köszönöm a mindennapi gondviselésedet: az ételt az asztalon, a munkát, ami van, és az erőt, ami kitartott a hónap végéig. Nem magamnak köszönhetem, neked.': 'Lord, thank you for your daily provision: for the food on the table, for the work I have, and for the strength that lasted to the end of the month. I owe it not to myself, but to you.',
  'Hol aggódtál a jövő miatt úgy, mintha az Atya elfelejtett volna? Mondd el.': 'Where did you worry about the future as if the Father had forgotten you? Tell him.',
  'Uram, megvallom, hogy aggódtam a jövő miatt, mintha elfelejtettél volna. Számoltam, forgattam, nem aludtam, és közben nem néztem rád. Bocsásd meg a kishitűségemet.': 'Lord, I confess that I worried about the future as if you had forgotten me. I calculated, I turned it over and over, I could not sleep, and all the while I did not look to you. Forgive my little faith.',
  'Olvasd el. Figyeld meg a kérdést a végén: nem vagytok-e sokkal különbek?': 'Read it. Notice the question at the end: are you not of much more value?',
  'Uram, te a madarakra mutatsz, és azt kérdezed, nem vagyok-e sokkal különb azoknál. A te gyermeked vagyok, nem csak a teremtményed. Ha őket eltartod, engem sem hagysz el.': 'Lord, you point to the birds and ask whether I am not of much more value than they are. I am your child, not only your creature. If you feed them, you will not abandon me either.',
  'Hozd eléje az anyagi és gyakorlati gondjaidat, egyenként, és kérd, hogy ő tartson el.': 'Bring before him your financial and practical worries, one by one, and ask him to provide for you.',
  'Uram, eléd hozom az anyagi és gyakorlati gondjaimat, egyenként, ahogy vannak. Nem kérek fölösleget, azt kérem, hogy te tarts el, ahogy a madarakat. Adj munkát a kezemnek, és bizalmat a szívemnek.': 'Lord, I bring before you my financial and practical worries, one by one, just as they are. I do not ask for more than I need; I ask that you provide for me as you do for the birds. Give work to my hands and trust to my heart.',
  'Csendben nézz ki az ablakon, vagy képzeld el: ő gondot visel.': 'In silence, look out of the window, or imagine it: he takes care of you.',
  'Uram, te gondot viselsz rám. Csendben ezt hagyom bennem leülepedni.': 'Lord, you take care of me. In silence I let this settle within me.',
  'Imádság a vezetőkért': 'Prayer for leaders',
  'Köszönd meg a békét, amiben élsz, a rendet, ami működik, és azokat, akik szolgálnak benne.': 'Give thanks for the peace you live in, for the order that works, and for those who serve within it.',
  'Uram, köszönöm a békét, amiben élek, és a rendet, ami működik körülöttem, akkor is, ha nem tökéletes. Köszönöm azokat, akik ebben szolgálnak, az orvosokat, a tanárokat, a tisztviselőket. Rajtuk keresztül is gondot viselsz.': 'Lord, thank you for the peace I live in, and for the order that works around me, even if it is not perfect. Thank you for those who serve in it: the doctors, the teachers, the public servants. Through them, too, you take care of us.',
  'Hol ítéltél vagy szidtál vezetőket imádság helyett? Valld meg.': 'Where did you judge or criticise leaders instead of praying for them? Confess it.',
  'Uram, megvallom, hogy könnyebben szidtam a vezetőket, mint imádkoztam értük. Ítéltem ott, ahol könyörögnöm kellett volna. Bocsásd meg, és adj szívet, ami inkább kér, mint vádol.': 'Lord, I confess that I have found it easier to criticise leaders than to pray for them. I judged where I should have interceded. Forgive me, and give me a heart that would rather ask than accuse.',
  'Olvasd el. Mindenek előtt: ez a sorrend. És mindenkiért, nem csak azokért, akiket kedvelünk.': 'Read it. First of all: that is the order. And for everyone, not only for those we like.',
  'Uram, te azt kéred, hogy mindenekelőtt imádkozzak minden emberért, a vezetőkért is. Nem azért, mert egyetértek velük, hanem mert te így akarod. Ez nem politika, ez közbenjárás.': 'Lord, you ask me first of all to pray for all people, for leaders too. Not because I agree with them, but because this is what you want. This is not politics; it is intercession.',
  'Imádkozz a saját országod vezetőiért, a településedért, a gyülekezeted vezetőiért, és azokért, akik háborús országokban döntenek.': 'Pray for the leaders of your own country, for your town, for the leaders of your church, and for those who make decisions in countries at war.',
  'Uram, eléd hozom azokat, akik az országomat vezetik, bármilyen oldalon állnak: adj nekik bölcsességet, igazságot és félelmet tőled. Imádkozom a településemért és azokért, akik ott döntenek. Imádkozom a gyülekezetem vezetőiért, hogy hűek maradjanak. És imádkozom azokért, akik háborús országokban döntenek életről és halálról: fordítsd a szívüket a béke felé.': 'Lord, I bring before you those who lead my country, whatever side they are on: give them wisdom, justice and the fear of you. I pray for my town and for those who make decisions there. I pray for the leaders of my church, that they remain faithful. And I pray for those who make decisions about life and death in countries at war: turn their hearts towards peace.',
  'Csendben kérj békét, hogy nyugodalmas életet élhessünk.': 'In silence, ask for peace, so that we may live a quiet and peaceful life.',
  'Uram, adj békét, hogy csendes és nyugodalmas életet élhessünk. Ámen.': 'Lord, give us peace, so that we may live a quiet and peaceful life. Amen.',
  'A reménység Istene': 'The God of hope',
  'Péntek van, a hála napja. Köszönd meg a hét öt jó pillanatát, és köszönd meg a reménységet, ami nem tőled függ.': 'It is Friday, the day of thanksgiving. Give thanks for five good moments of the week, and give thanks for the hope that does not depend on you.',
  'Uram, végigmegyek a héten, és megköszönöm az öt legjobb pillanatát, egyiket a másik után. És köszönöm, hogy a reménységem nem a körülményeimtől függ, hanem tőled. Te vagy a reménység Istene.': 'Lord, I go through the week and thank you for its five best moments, one after another. And thank you that my hope does not depend on my circumstances, but on you. You are the God of hope.',
  'Hol engedted el a reményt a héten, és hol lett belőle keserű beszéd? Mondd el.': 'Where did you let go of hope this week, and where did it turn into bitter words? Tell him.',
  'Uram, megvallom, hogy voltak percek, amikor elengedtem a reményt, és keserű lett a beszédem. Nem hittem, hogy változhat bármi. Bocsásd meg, és töltsd meg újra a szívemet.': 'Lord, I confess that there were moments when I let go of hope, and my words became bitter. I did not believe anything could change. Forgive me, and fill my heart again.',
  'Olvasd el. Az öröm és a békesség a hitből jön, a reménység a Lélek erejéből.': 'Read it. Joy and peace come through believing; hope comes by the power of the Spirit.',
  'Uram, te a reménység Istene vagy, és örömmel, békességgel töltesz be a hitben. Nem én termelem a reményt, a Lelked adja. Hadd bővölködjek benne, ne csak megéljek.': 'Lord, you are the God of hope, and you fill me with joy and peace as I believe. I do not produce hope; your Spirit gives it. Let me overflow with it, not just get by.',
  'Kérj reménységet egy konkrét ügyben, ami most reménytelennek látszik.': 'Ask for hope in one specific matter that seems hopeless right now.',
  'Uram, van egy ügy, ami most reménytelennek látszik, és eléd hozom. Adj reménységet benne, nem vak optimizmust, hanem a te Lelked erejét. Mutasd meg, hol vagy benne te.': 'Lord, there is a matter that seems hopeless right now, and I bring it before you. Give me hope in it, not blind optimism, but the power of your Spirit. Show me where you are in it.',
  'Csendben hagyd, hogy a béke betöltsön.': 'In silence, let peace fill you.',
  'Uram, töltsd be a szívemet békével. Csendben várom.': 'Lord, fill my heart with peace. I wait in silence.',
  'Vizsgálj meg': 'Search me',
  'Köszönd meg, hogy Isten teljesen ismer, és mégis szeret.': 'Give thanks that God knows you completely, and loves you all the same.',
  'Uram, köszönöm, hogy teljesen ismersz, a gondolataimat is, és mégis szeretsz. Előtted nem kell szerepet játszanom. Ez a legnagyobb nyugalom, ami egy hét végén létezik.': 'Lord, thank you that you know me completely, even my thoughts, and you love me all the same. Before you I do not have to play a part. This is the deepest rest there is at the end of a week.',
  'Kérd, hogy ő mutassa meg, mit nem látsz magadban. Várj, és ami eszedbe jut, azt valld meg.': 'Ask him to show you what you cannot see in yourself. Wait, and confess whatever comes to mind.',
  'Uram, vizsgálj meg, és mutasd meg, mit nem látok magamban. Nem védekezem, várok. Ami most eszembe jut, azt megvallom, és kérem, hogy tisztítsd ki belőlem.': 'Lord, search me, and show me what I cannot see in myself. I do not defend myself; I wait. Whatever comes to mind now, I confess, and I ask you to cleanse it from me.',
  'Olvasd el lassan. Ez egy bizalmi kérés: aki szeret, azt engedjük vizsgálni.': 'Read it slowly. This is a request made in trust: we let the one who loves us search us.',
  'Uram, Dávid azt kérte, hogy vizsgáld meg, és én is ezt kérem. Nem félek a tekintetedtől, mert tudom, hogy szeretettel nézel. Vezess az örökkévalóság útján, ne csak a mai napon át.': 'Lord, David asked you to search him, and I ask the same. I am not afraid of your gaze, because I know you look at me with love. Lead me in the way everlasting, not only through today.',
  'Kérd, hogy a jövő héten ott vezessen, ahol a legkönnyebb letérni.': 'Ask him to lead you next week where it is easiest to stray.',
  'Uram, tudom, hol a legkönnyebb letérnem a jövő héten, és eléd hozom. Ott vezess, ott tarts meg. Add, hogy a szívem ne menjen oda, ahová a lábam már ne lépjen.': 'Lord, I know where it will be easiest for me to stray next week, and I bring it before you. Lead me there, hold me fast there. Let my heart not go where my feet should no longer step.',
  'Csendben hagyd, hogy ő nézzen rád, és pihenj ebben.': 'In silence, let him look at you, and rest in that.',
  'Uram, nézz rám. Én csendben maradok a tekinteted alatt.': 'Lord, look at me. I remain in silence under your gaze.',
  'Hálaadással a kapuin': 'Into his gates with thanksgiving',
  'Vasárnap van. Lépj be hálával: köszönd meg, aki ő, nem csak azt, amit ad.': 'It is Sunday. Enter with thanksgiving: thank him for who he is, not only for what he gives.',
  'Uram, hálaadással lépek eléd ezen a reggelen. Köszönöm, aki vagy: hű, jó, irgalmas, a kezdettől a végig ugyanaz. Nem csak az ajándékaidat áldom, hanem a nevedet.': 'Lord, I come before you this morning with thanksgiving. Thank you for who you are: faithful, good, merciful, the same from beginning to end. I praise not only your gifts, but your name.',
  'Mi tart vissza attól, hogy teljes szívvel dicsérd? Mondd el neki.': 'What is holding you back from praising him with your whole heart? Tell him.',
  'Uram, tudom, mi tart vissza attól, hogy teljes szívvel dicsérjelek. Fáradtság, sértődés, vagy egy el nem rendezett dolog. Eléd teszem, hogy ne álljon a kapuban.': 'Lord, I know what is holding me back from praising you with my whole heart. Tiredness, hurt feelings, or something left unresolved. I lay it before you, so that it does not stand in the gateway.',
  'Olvasd el. Kapu, tornác, hála, dicséret: egyre közelebb visz hozzá.': 'Read it. Gates, courts, thanksgiving, praise: each brings you closer to him.',
  'Uram, te hívsz, hogy a kapuidon hálaadással, az udvarodba dicsérettel lépjek be. Minden lépés közelebb visz hozzád. Áldom a nevedet, mert te vagy az Isten.': 'Lord, you call me to enter your gates with thanksgiving and your courts with praise. Every step brings me closer to you. I bless your name, because you are God.',
  'Kérj a gyülekezetedért, a mai istentiszteletért, és azokért, akik ma nem tudnak eljönni.': 'Pray for your church, for today\'s worship service, and for those who cannot come today.',
  'Uram, eléd hozom a gyülekezetemet és a mai istentiszteletet: szólj, és add, hogy halljuk. Imádkozom azokért, akik ma nem tudnak eljönni, mert betegek vagy távol vannak. Légy velük ott, ahol vannak.': 'Lord, I bring before you my church and today\'s worship service: speak, and help us to hear. I pray for those who cannot come today because they are ill or far away. Be with them where they are.',
  'Maradj csendben az ő udvarában.': 'Stay silent in his courts.',
  'Uram, itt vagyok az udvarodban. Jó itt lenni.': 'Lord, here I am in your courts. It is good to be here.',
  'Mint az Úrnak': 'As for the Lord',
  'Köszönd meg a munkádat, azt is, ami fárasztó. Ez a hely, ahol szolgálhatsz.': 'Give thanks for your work, even the tiring parts. This is the place where you can serve.',
  'Uram, köszönöm a munkámat, azt is, ami fárasztó és láthatatlan. Köszönöm, hogy van mit tennem, és van, aki számít rá. Ez a hely, ahol téged szolgálhatlak.': 'Lord, thank you for my work, even the parts that are tiring and unseen. Thank you that I have something to do, and that someone is counting on it. This is the place where I can serve you.',
  'Hol dolgoztál csak a látszatért, vagy csak félszívvel? Valld meg.': 'Where did you work just for appearances, or only half-heartedly? Confess it.',
  'Uram, megvallom, hogy voltak napok, amikor csak a látszatért dolgoztam, vagy félszívvel. Embereknek akartam megfelelni, nem neked. Bocsásd meg, és fordítsd a szívemet feléd a munkámban.': 'Lord, I confess that there were days when I worked just for appearances, or half-heartedly. I wanted to please people, not you. Forgive me, and turn my heart towards you in my work.',
  'Olvasd el. Mint az Úrnak: ez az egyetlen szó megváltoztatja a hétfőt.': 'Read it. As for the Lord: these few words change your Monday.',
  'Uram, amit ma teszek, azt neked teszem, nem embereknek. Ez a mondat megváltoztatja a hétfőmet. A legkisebb feladat is istentisztelet, ha neked végzem.': 'Lord, what I do today I do for you, not for people. This sentence changes my Monday. Even the smallest task is worship if I do it for you.',
  'Hozd eléje a hét munkáját, a nehéz feladatot, és azokat, akikkel dolgozol.': 'Bring before him the week\'s work, the hard task, and the people you work with.',
  'Uram, eléd hozom a hét munkáját és azt a feladatot, ami a legnehezebb lesz. Adj hozzá erőt és tiszta szándékot. Áldd meg azokat, akikkel együtt dolgozom, és add, hogy jó legyen velem dolgozni.': 'Lord, I bring before you this week\'s work and the task that will be hardest. Give me strength for it and a pure intention. Bless those I work with, and let me be good to work with.',
  'Csendben ajánld fel a napot neki.': 'In silence, offer the day to him.',
  'Uram, ez a nap a tiéd. Lélekből, neked.': 'Lord, this day is yours. With all my heart, for you.',
  'Békesség, amit a világ nem ad': 'Peace the world cannot give',
  'Köszönd meg azt a békességet, amit megéltél, amikor emberileg nem volt rá ok.': 'Give thanks for the peace you have known when, humanly speaking, there was no reason for it.',
  'Uram, köszönöm azokat a pillanatokat, amikor békém volt, pedig emberileg nem volt rá ok. Az a te békességed volt, nem az enyém. Köszönöm, hogy nem a világtól függ.': 'Lord, thank you for the moments when I had peace even though, humanly speaking, there was no reason for it. That was your peace, not mine. Thank you that it does not depend on the world.',
  'Mi nyugtalanítja a szívedet? Mondd el, és valld meg, ha a békességet máshol kerested: a kontrollban, a zajban, a menekülésben.': 'What is troubling your heart? Tell him, and confess it if you have looked for peace elsewhere: in control, in noise, in escape.',
  'Uram, megvallom, mi nyugtalanítja a szívemet, és azt is, hogy a békét máshol kerestem: a kontrollban, a zajban, a menekülésben. Nem tőled vártam. Bocsásd meg, és add vissza a békédet.': 'Lord, I confess what is troubling my heart, and also that I have looked for peace elsewhere: in control, in noise, in escape. I did not look to you for it. Forgive me, and give me back your peace.',
  'Olvasd el. Nem úgy, ahogy a világ adja: ez a különbség.': 'Read it. Not as the world gives: that is the difference.',
  'Uram, te azt mondod, az én békességemet adom nektek, nem úgy, ahogy a világ adja. A világ békéje a baj hiánya, a tiéd a te jelenléted a bajban. Ezt kérem, nem a másikat.': 'Lord, you say: my peace I give to you, not as the world gives. The world\'s peace is the absence of trouble; yours is your presence in the trouble. That is what I ask for, not the other.',
  'Kérd a békességét egy konkrét helyzetre, ami most feszültséget okoz.': 'Ask for his peace in one specific situation that is causing tension right now.',
  'Uram, van egy helyzet, ami most feszültséget okoz, és eléd hozom. Add bele a te békességedet, amit nem lehet elvenni. Ne nyugtalankodjék a szívem, és ne féljen.': 'Lord, there is a situation causing tension right now, and I bring it before you. Put your peace into it, the peace no one can take away. Let my heart not be troubled, and let it not be afraid.',
  'Csendben fogadd el a békességét.': 'In silence, receive his peace.',
  'Uram, elfogadom a békességedet. Csendben maradok benne.': 'Lord, I receive your peace. I remain in it, in silence.',
  'Lámpás az úton': 'A lamp on the path',
  'Köszönd meg, hogy van Igéd, és hogy olvashatod, hallgathatod, amikor akarod.': 'Give thanks that you have God\'s Word, and that you can read it and listen to it whenever you want.',
  'Uram, köszönöm, hogy van Igéd, és hogy itt van nálam, olvashatom és hallgathatom, amikor akarom. Sokaknak ez nem adatott meg. Köszönöm, hogy szólsz rajta keresztül.': 'Lord, thank you for your Word, and that I have it right here with me, to read and to listen to whenever I want. Many people have not been given this. Thank you that you speak through it.',
  'Mikor tetted le az Igét, és indultál el a saját fényednél? Mondd el.': 'When did you put the Word down and set out by your own light? Tell him.',
  'Uram, megvallom, hogy sokszor letettem az Igédet, és a saját fényemnél indultam el. Aztán csodálkoztam, hogy sötét van. Bocsásd meg, és hozz vissza a lámpásodhoz.': 'Lord, I confess that I have often put your Word down and set out by my own light. Then I was surprised that it was dark. Forgive me, and bring me back to your lamp.',
  'Olvasd el. A lámpás a következő lépést mutatja, nem az egész utat.': 'Read it. A lamp shows the next step, not the whole way.',
  'Uram, a te Igéd lámpás a lábamnak. Nem az egész utat mutatja, csak a következő lépést, és ez elég. Taníts megelégedni annyi fénnyel, amennyit ma adsz.': 'Lord, your Word is a lamp to my feet. It does not show the whole way, only the next step, and that is enough. Teach me to be content with as much light as you give today.',
  'Kérd, hogy egy konkrét kérdésben az Igéből kapj irányt, és hogy legyen időd olvasni a héten.': 'Ask for direction from the Word in one specific question, and for time to read it this week.',
  'Uram, van egy kérdés, amiben irányt várok, és kérem, hogy az Igéden keresztül szólj bele. Adj időt és csendet a héten, hogy olvassalak, ne csak kapkodjak. Legyen a te szavad az első, amit meghallok.': 'Lord, there is a question in which I am waiting for direction, and I ask you to speak into it through your Word. Give me time and quiet this week to read, not just to rush around. Let your word be the first thing I hear.',
  'Csendben hagyd, hogy a világosság rád essen.': 'In silence, let the light fall on you.',
  'Uram, világíts az ösvényemre. Csendben követlek.': 'Lord, light up my path. I follow you in silence.',
  'Erősek az Úrban': 'Strong in the Lord',
  'Köszönd meg, hogy a harc már eldőlt a kereszten, és te az ő erejében állsz.': 'Give thanks that the battle was already decided on the cross, and that you stand in his strength.',
  'Uram, köszönöm, hogy a döntő harcot te már megnyerted a kereszten. Nem én harcolok a győzelemért, hanem a győzelemből állok meg. Köszönöm a fegyverzetet, amit nem én gyártottam.': 'Lord, thank you that you have already won the decisive battle on the cross. I do not fight for victory; I stand firm from victory. Thank you for the armour that I did not make.',
  'Hol harcoltál emberek ellen, amikor nem ők voltak az igazi ellenség? Valld meg.': 'Where did you fight against people when they were not the real enemy? Confess it.',
  'Uram, megvallom, hogy emberek ellen harcoltam, pedig te azt mondod, nem test és vér ellen van a harcunk. Haraggal válaszoltam ott, ahol imádkozni kellett volna. Bocsásd meg, és nyisd meg a szememet.': 'Lord, I confess that I have fought against people, though you say our struggle is not against flesh and blood. I answered with anger where I should have prayed. Forgive me, and open my eyes.',
  'Olvasd el. Erősek az Úrban, nem magunkban. Megállni, nem rohamozni.': 'Read it. Strong in the Lord, not in ourselves. To stand firm, not to charge.',
  'Uram, te azt mondod, legyek erős az Úrban, a te hatalmas erődben, nem a magaméban. Felöltözöm, amit adsz: az igazságot, a hitet, a békesség evangéliumát. Nem rohamozok, megállok.': 'Lord, you tell me to be strong in the Lord and in your mighty power, not in my own. I put on what you give: truth, faith, the gospel of peace. I do not charge ahead; I stand firm.',
  'Imádkozz közbenjárva: a családodért, hogy megálljanak, a gyülekezetedért, a kísértésben lévő testvéredért, és az üldözött keresztényekért.': 'Pray as an intercessor: for your family, that they stand firm, for your church, for a brother or sister facing temptation, and for persecuted Christians.',
  'Uram, imádkozom a családomért, hogy megálljanak a hitben, és te őrizd őket. Imádkozom a gyülekezetemért, hogy egy legyen és erős. Eléd hozom azt a testvéremet, akiről tudom, hogy kísértésben van: tarts meg őt. És imádkozom az üldözött keresztényekért a világban, hogy hűek maradjanak, és te légy nekik pajzs.': 'Lord, I pray for my family, that they stand firm in faith, and that you keep them. I pray for my church, that it may be united and strong. I bring before you the brother or sister I know is facing temptation: hold them fast. And I pray for persecuted Christians around the world, that they remain faithful, and that you be their shield.',
  'Csendben állj meg az ő erejében.': 'In silence, stand firm in his strength.',
  'Uram, a te erődben állok. Megállok, és te tartasz.': 'Lord, I stand in your strength. I stand firm, and you hold me.',
  'Minden reggel megújul': 'New every morning',
  'A hála napja. Köszönd meg a hét minden reggelét, hogy felkelhettél, és azt, hogy ő minden reggel ugyanaz volt.': 'The day of thanksgiving. Give thanks for every morning of the week, that you could get up, and that he was the same every morning.',
  'Uram, köszönöm a hét minden reggelét, hogy felkelhettem, és hogy te minden reggel ugyanaz voltál. Köszönöm a kegyelmedet, ami nem fogyott el, pedig én sokszor elfogytam. Nagy a te hűséged.': 'Lord, thank you for every morning of this week, that I could get up, and that you were the same every morning. Thank you for your mercy that never ran out, even though I often did. Great is your faithfulness.',
  'Hol kételkedtél a hűségében a héten, mert a körülmény mást mondott? Mondd el.': 'Where did you doubt his faithfulness this week because your circumstances said otherwise? Tell him.',
  'Uram, megvallom, hogy voltak percek a héten, amikor a körülmény mást mondott, mint te, és én a körülménynek hittem. Kételkedtem a hűségedben. Bocsásd meg, te hű maradtál akkor is.': 'Lord, I confess that there were moments this week when my circumstances said something different from you, and I believed my circumstances. I doubted your faithfulness. Forgive me; you remained faithful even then.',
  'Olvasd el. Ez a mondat romok közül hangzik, ezért igaz a te romjaid közt is.': 'Read it. These words were spoken among ruins, which is why they are true among your ruins too.',
  'Uram, ezt a mondatot valaki romok közt mondta ki, és azért igaz az én romjaim közt is. A te irgalmad nem fogyatkozik el, minden reggel megújul. Erre építem a következő reggelt is.': 'Lord, someone spoke these words among ruins, and that is why they are true among my ruins too. Your mercies never come to an end; they are new every morning. On this I build the next morning too.',
  'Kérd, hogy az ő hűsége legyen az, amire a hétvégén építesz, és nem a saját hangulatod.': 'Ask that his faithfulness, not your own mood, be what you build on this weekend.',
  'Uram, add, hogy a hétvégén a te hűségedre építsek, ne a hangulatomra. Újítsd meg a kegyelmedet a holnapi reggelre is, és add, hogy észrevegyem. Te vagy az, akiben nincs változás.': 'Lord, help me build on your faithfulness this weekend, not on my mood. Renew your mercy for tomorrow morning too, and help me notice it. You are the one in whom there is no change.',
  'Csendben nyugodj meg a hűségében.': 'In silence, rest in his faithfulness.',
  'Uram, nagy a te hűséged. Ebben nyugszom meg.': 'Lord, great is your faithfulness. In it I find rest.',
  'Aki elkezdte, elvégzi': 'He who began will complete it',
  'Nézz vissza az elmúlt négy hétre. Köszönd meg, amit Isten elkezdett benned, akkor is, ha még nincs kész.': 'Look back over the past four weeks. Give thanks for what God has begun in you, even if it is not finished yet.',
  'Uram, visszanézek az elmúlt hetekre, és köszönöm, amit elkezdtél bennem. Nincs kész, de elkezdted, és ez a tiéd. Köszönöm, hogy nem hagytad abba, amikor én abbahagytam volna.': 'Lord, I look back over the past weeks, and thank you for what you have begun in me. It is not finished, but you have begun it, and it is yours. Thank you for not stopping when I would have stopped.',
  'Hol adtad fel magad, mintha a befejezés rajtad állna? Valld meg.': 'Where did you give up on yourself, as if finishing it depended on you? Confess it.',
  'Uram, megvallom, hogy voltak percek, amikor feladtam magamat, mintha a befejezés rajtam állna. Elfelejtettem, hogy a munka a tiéd. Bocsásd meg, és emeld fel újra a fejemet.': 'Lord, I confess that there were moments when I gave up on myself, as if finishing it depended on me. I forgot that the work is yours. Forgive me, and lift my head again.',
  'Olvasd el lassan. Aki elkezdte, az végzi el. Nem te.': 'Read it slowly. The one who began it will complete it. Not you.',
  'Uram, te kezdted el bennem a jó dolgot, és te végzed el a Krisztus Jézus napjáig. Nem én tartom magam a kezedben, te tartasz engem. Ebben a bizonyosságban zárom a hetet.': 'Lord, you began the good work in me, and you will carry it on to completion until the day of Christ Jesus. I do not hold myself in your hand; you hold me. In this certainty I close the week.',
  'Kérd, hogy a következő hetekben is folytassa benned a munkáját, és nevezd meg, hol szeretnél növekedni.': 'Ask him to continue his work in you in the weeks ahead, and name where you would like to grow.',
  'Uram, folytasd bennem a munkádat a következő hetekben is. Tudom, hol szeretnék növekedni, és eléd hozom, de rád bízom, hogy mit és milyen sorrendben formálsz. A te időd a jó idő.': 'Lord, continue your work in me in the weeks ahead. I know where I would like to grow, and I bring it before you, but I leave it to you what you shape and in what order. Your timing is the right timing.',
  'Pihenj csendben abban, hogy Isten keze van rajtad, és ő nem engedi el.': 'Rest in silence in the knowledge that God\'s hand is on you, and he will not let go.',
  'Uram, a te kezed van rajtam, és te nem engedsz el. Csendben megpihenek ebben. Ámen.': 'Lord, your hand is on me, and you will not let me go. In silence I rest in this. Amen.',
  'Most emeld fel a tekintetedet a saját ügyeidről a világra. Ezek az események most történnek, és ott emberek vannak.': 'Now lift your eyes from your own concerns to the world. These events are happening right now, and there are people in them.',
  'Uram, most nem magamért kérek, hanem azokért, akiket nem ismerek, de te igen. Eléd hozom a világ bajait, amik ma történnek.': 'Lord, now I am not asking for myself, but for those I do not know, though you do. I bring before you the troubles of the world that are happening today.',
  'Uram, te vagy a mi oltalmunk és erősségünk, bizonyos segítség a nyomorúságban. Hadd legyél az nekik is ma. Ámen.': 'Lord, you are our refuge and strength, a very present help in trouble. Be that for them too today. Amen.',
  'Most nem tudjuk, mi történik épp a világban, de valahol most is baj van. Imádkozz azokért, akikről ma nem szól a hír.': 'We do not know right now what is happening in the world, but somewhere there is trouble even now. Pray for those the news is not talking about today.',
  'Uram, nem tudom, hol van ma a legnagyobb baj a világon, de te tudod. Eléd hozom azokat, akik ebben az órában földrengésben, árvízben, tűzben vagy háborúban vannak, és akikről nem szól a hír. Légy az oltalmuk, adj nekik segítséget és vigaszt, és fordítsd a világ szívét a béke felé. Te vagy a mi oltalmunk és erősségünk, bizonyos segítség a nyomorúságban. Ámen.': 'Lord, I do not know where the greatest trouble in the world is today, but you do. I bring before you those who in this hour are caught in an earthquake, a flood, a fire or a war, and those the news is not talking about. Be their refuge, give them help and comfort, and turn the heart of the world towards peace. You are our refuge and strength, a very present help in trouble. Amen.',
  // Imádság a világért, per event (Énok, ima-vilag-rovid.json, owner 2026-11-02 TG 33947-33954): encouragement + prayer, news labels
  "Amikor a föld megrendül, Isten nem rendül meg. Az imád most valódi kéz lehet a romok fölött.": "When the earth is shaken, God is not. Your prayer can be a real hand over the ruins right now.",
  "A víz gyorsabb az embernél, de nem gyorsabb Istennél. Egy mondat most életet menthet.": "Water is faster than people, but not faster than God. One sentence now can save a life.",
  "A tűz nem kérdez, de Isten hall. Állj oda imádságban azok mellé, akik most mindent hátrahagynak.": "Fire does not ask, but God hears. Stand in prayer beside those who are leaving everything behind.",
  "Isten megígérte, hogy a víz nem lesz úr a földön. Kérd ezt most azoknak, akiknek mindent elvisz.": "God promised that the water would not rule the earth. Ask it now for those it is sweeping away.",
  "Jézus egy szóval elcsendesítette a vihart. Ugyanez a szó ma is érvényes, mondd ki értük.": "Jesus calmed the storm with one word. That word still stands today; speak it for them.",
  "A hegyek Isten kezében vannak. Imádkozz, hogy az emberek időben induljanak, és legyen hová menniük.": "The mountains are in God's hand. Pray that people leave in time and have somewhere to go.",
  "Az aszály csendes baj, ritkán szól róla a hír. Te most mégis eléje viheted Istennek.": "Drought is a quiet disaster, rarely in the news. Yet you can bring it before God now.",
  "Jézus gyógyító keze ma sem rövidült meg. Állj oda a betegek és az ápolók mellé.": "Jesus' healing hand is not shortened today. Stand beside the sick and those who care for them.",
  "Isten nem áll be egyik tömegbe sem, mindkét oldalon az övéit látja. Imádkozz oldal nélkül, békéért.": "God joins neither crowd; he sees his own on both sides. Pray for peace, taking no side.",
  "Boldogok a békességre igyekezők. Az imád ma ott lehet, ahová senki más nem jut el.": "Blessed are the peacemakers. Your prayer today can reach where no one else can go.",
  "Uram, légy {hely} romjai alatt a várakozókkal, adj erőt a mentőknek, és vigasztald a gyászolókat.": "Lord, be with those waiting under the ruins in {hely}, give strength to the rescuers, and comfort those who mourn.",
  "Uram, tartsd vissza a vizet, és vezesd időben magaslatra a part lakóit.": "Lord, hold back the water, and lead the people of the coast to high ground in time.",
  "Uram, védd meg {hely} menekülőit és tűzoltóit, és küldj esőt a lángokra.": "Lord, protect those fleeing and the firefighters in {hely}, and send rain upon the flames.",
  "Uram, őrizd meg {hely} lakóinak életét, és adj menedéket azoknak, akiknek otthona víz alatt áll.": "Lord, keep the people of {hely} alive, and give shelter to those whose homes are under water.",
  "Uram, csendesítsd le a szelet és a vizet {hely} fölött, ahogy a tanítványaid hajóján tetted.": "Lord, calm the wind and the water over {hely}, as you did on your disciples' boat.",
  "Uram, vezesd biztonságba {hely} lakóit, és adj bölcsességet azoknak, akik a kitelepítésről döntenek.": "Lord, lead the people of {hely} to safety, and give wisdom to those who decide on evacuation.",
  "Uram, adj esőt {hely} földjére és kenyeret az asztalukra, és nyisd meg a bővölködők kezét.": "Lord, give rain to the land of {hely} and bread for their table, and open the hands of those who have plenty.",
  "Uram, gyógyítsd {hely} betegeit, és adj erőt és védelmet az orvosoknak és ápolóknak.": "Lord, heal the sick in {hely}, and give strength and protection to the doctors and nurses.",
  "Uram, őrizd meg {hely} életeit mindkét oldalon, és fordítsd a szíveket a béke felé.": "Lord, preserve the lives in {hely} on every side, and turn hearts toward peace.",
  "Uram, védd meg {hely} civiljeit és gyermekeit, gyógyítsd a sebesülteket, és adj békét, bármelyik oldalon állnak.": "Lord, protect the civilians and children of {hely}, heal the wounded, and give peace, whichever side they are on.",
  "Érintett terület": "Affected area",
  "Legnagyobb szélsebesség": "Maximum wind speed",
  "Események": "Events",
  "Halálos áldozatok": "Deaths",
  "Időszak": "Period",
  'Egy földrengés után órák döntenek életekről. Imádkozz a romok alatt lévőkért és a mentőkért.': 'After an earthquake, hours decide over lives. Pray for those under the rubble and for the rescuers.',
  'Uram, eléd hozom {hely} területét, ahol megrendült a föld. Légy azokkal, akik a romok alatt várnak, és adj erőt és gyorsaságot azoknak, akik keresik őket. Vigasztald, aki ma elveszített valakit, és adj fedelet annak, akinek nem maradt.': 'Lord, I bring before you the region of {hely}, where the earth has shaken. Be with those waiting under the rubble, and give strength and speed to those searching for them. Comfort those who have lost someone today, and give shelter to those who have none left.',
  'A tűz otthonokat, erdőket és életeket visz el. Imádkozz a menekülőkért és a tűzoltókért.': 'Fire takes homes, forests and lives. Pray for those fleeing and for the firefighters.',
  'Uram, eléd hozom {hely} területét, ahol tűz pusztít. Védd meg azokat, akik menekülnek, és add, hogy mindenkit elérjen a figyelmeztetés időben. Adj erőt és védelmet a tűzoltóknak, és küldj esőt és szelet úgy, ahogy csak te tudod.': 'Lord, I bring before you the region of {hely}, where fire is raging. Protect those who are fleeing, and let the warning reach everyone in time. Give strength and protection to the firefighters, and send rain and wind as only you can.',
  'Az árvíz lassan jön, és mindent elvisz. Imádkozz azokért, akik az otthonukat látják eltűnni.': 'A flood comes slowly and carries everything away. Pray for those who are watching their homes disappear.',
  'Uram, eléd hozom {hely} lakóit, akiket elért a víz. Őrizd meg az életüket, és adj menedéket azoknak, akiknek az otthona víz alatt áll. Légy a gyerekekkel és az idősekkel, akik nem tudnak maguktól menekülni, és adj türelmet és erőt a visszatéréshez.': 'Lord, I bring before you the people of {hely}, whom the water has reached. Preserve their lives, and give shelter to those whose homes are under water. Be with the children and the elderly who cannot get away on their own, and give patience and strength for the return.',
  'A vihar előtt a várakozás, utána a kár. Imádkozz az útjában lévőkért.': 'Before a storm comes the waiting, after it the damage. Pray for those in its path.',
  'Uram, eléd hozom {hely} területét, amerre a vihar tart vagy ahol már lecsapott. Csendesítsd a szelet és a vizet, ahogy a tanítványaid hajóján tetted. Védd meg azokat, akik az útjában állnak, és adj gyors segítséget, ahol a tetők és a falak már leomlottak.': 'Lord, I bring before you the region of {hely}, where the storm is heading or has already struck. Calm the wind and the waves, as you did on your disciples\' boat. Protect those who are in its path, and send quick help where roofs and walls have already come down.',
  'A hamu és a láva elől menekülni kell. Imádkozz a környék falvaiért és a kitelepítettekért.': 'People must flee from ash and lava. Pray for the surrounding villages and for those who have been evacuated.',
  'Uram, eléd hozom {hely} környékét, ahol a hegy kitört. Védd meg a falvakat és a városokat a láva és a hamu útjából, és adj bölcsességet azoknak, akik a kitelepítésről döntenek. Légy azokkal, akik mindent otthagytak, és adj nekik helyet, ahol megpihenhetnek.': 'Lord, I bring before you the area around {hely}, where the mountain has erupted. Protect the villages and towns from the path of the lava and ash, and give wisdom to those deciding on evacuation. Be with those who have left everything behind, and give them a place where they can rest.',
  'Az aszály csendes katasztrófa, nincs hírverése. Imádkozz az éhezőkért és a földművesekért.': 'Drought is a silent disaster that makes no headlines. Pray for the hungry and for the farmers.',
  'Uram, eléd hozom {hely} lakóit, ahol kiszáradt a föld, és nincs mit enni. Adj esőt a földre és kenyeret az asztalra, és nyisd meg azok kezét, akiknek bőven van. Tartsd meg a gyerekeket, és adj reményt a földműveseknek, akik újra vetnek.': 'Lord, I bring before you the people of {hely}, where the land has dried up and there is nothing to eat. Give rain to the land and bread to the table, and open the hands of those who have plenty. Sustain the children, and give hope to the farmers who are sowing again.',
  'A háborúban mindkét oldalon emberek halnak meg. Imádkozz a civilekért, a sebesültekért és a békéért, oldal nélkül.': 'In war, people die on both sides. Pray for the civilians, the wounded and for peace, without taking sides.',
  'Uram, eléd hozom {hely} területét, ahol fegyverek szólnak. Védd meg a civileket, a gyerekeket, az öregeket és azokat, akiknek nincs hová menniük. Gyógyítsd a sebesülteket, vigasztald a gyászolókat, és fordítsd a döntéshozók szívét a béke felé, bármelyik oldalon állnak. Te vagy a békesség Istene, hadd legyen béke ott is.': 'Lord, I bring before you the region of {hely}, where weapons are firing. Protect the civilians, the children, the elderly and those who have nowhere to go. Heal the wounded, comfort those who mourn, and turn the hearts of those in power towards peace, whatever side they are on. You are the God of peace; let there be peace there too.',
  'Ahol tömegek feszülnek egymásnak, ott félelem és harag van mindkét oldalon. Imádkozz békéért és józanságért, oldal nélkül.': 'Where crowds face off against each other, there is fear and anger on both sides. Pray for peace and calm judgment, without taking sides.',
  'Uram, eléd hozom {hely} területét, ahol feszültség és zavargás van az utcákon. Csendesítsd a haragot, és őrizd meg az életeket, azokét is, akik tüntetnek, és azokét is, akik rendet tartanak. Adj józanságot azoknak, akik döntenek, és add, hogy a sérelmek ne vérrel, hanem szóval oldódjanak meg.': 'Lord, I bring before you the region of {hely}, where there is tension and unrest in the streets. Calm the anger, and protect lives, both of those who are protesting and of those who are keeping order. Give sound judgment to those who make decisions, and let grievances be resolved with words, not with blood.',
  'A járványban a betegek és az ápolók egyformán kimerülnek. Imádkozz gyógyulásért és kitartásért.': 'In an epidemic, the sick and those who care for them are equally exhausted. Pray for healing and endurance.',
  'Uram, eléd hozom {hely} lakóit, ahol betegség terjed. Gyógyítsd a betegeket, és állítsd meg a terjedést, ahogy csak te tudod. Adj erőt és védelmet az orvosoknak és az ápolóknak, akik nem mennek haza, és vigasztald azokat, akik már elveszítettek valakit.': 'Lord, I bring before you the people of {hely}, where disease is spreading. Heal the sick, and stop the spread, as only you can. Give strength and protection to the doctors and nurses who are not going home, and comfort those who have already lost someone.',
  'Nem tudjuk pontosan, mi történik ott, de Isten tudja. Imádkozz azokért, akik benne vannak.': 'We do not know exactly what is happening there, but God knows. Pray for those who are in the middle of it.',
  'Uram, eléd hozom {hely} területét, ahol most baj van, és nem is tudom pontosan, milyen. Te tudod, és te látod minden embert ott. Légy velük, védd meg az életüket, és küldj segítséget időben.': 'Lord, I bring before you the region of {hely}, where there is trouble right now, and I do not even know exactly what kind. You know, and you see every person there. Be with them, protect their lives, and send help in time.',
});

// IGETANULÓ (verse memorizer; owner 2026-11-01, TG 32865 + weekly free limit TG 32871)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Igetanuló": "Verse memorizer",
  "Tanulom": "Learn it",
  "Már tanulod": "Already learning",
  "Biztos": "Known",
  "Mai gyakorlás": "Today's practice",
  "Gyakorlás indítása": "Start practice",
  "Mára nincs esedékes ige.": "No verse is due today.",
  "Még nincs tanulandó ige. Tartsd nyomva egy verset, és válaszd a Tanulom pontot.": "No verse to learn yet. Long-press a verse and choose Learn it.",
  "Ingyenesen hetente egy új ige vehető fel.": "For free you can add one new verse a week.",
  "Ezen a héten már felvettél egy igét. Biblia prémiummal bármennyit tanulhatsz.": "You already added a verse this week. With Bible Premium you can learn as many as you like.",
  "Felvéve a tanulandó igék közé.": "Added to the verses to learn.",
  "Ezt az igét már tanulod.": "You are already learning this verse.",
  "A mentés nem sikerült.": "Saving failed.",
  "Törlés a tanulásból": "Remove from learning",
  "Törlöd ezt az igét a tanulandók közül?": "Remove this verse from the ones to learn?",
  "Mára kész. Holnap folytatjuk.": "Done for today. We continue tomorrow.",
  "Szint {n}/4": "Level {n}/4",
  "Hátra: {n}": "Left: {n}",
  "Még nem": "Not yet",
  "Tudtam": "I knew it",
  // three difficulty levels + tolerant check + dictation (owner 2026-11-02, TG 33572, card 42f73765)
  "Könnyű": "Easy",
  "Nehezebb": "Harder",
  "Nehéz": "Hard",
  "Nehézség": "Difficulty",
  "Írd be a verset, vagy csak a hiányzó szavakat.": "Type the verse, or just the missing words.",
  "Fejezd be a verset.": "Finish the verse.",
  "Írd be a teljes verset.": "Type the whole verse.",
  "Csak az igehely látszik: mondd el vagy írd le a teljes verset.": "Only the reference is shown: say or type the whole verse.",
  "Ellenőrzés": "Check",
  "Bemondás": "Dictate",
  "Hallgatlak…": "Listening…",
  "Tovább": "Next",
  "Helyes! {n}% egyezés.": "Correct! {n}% match.",
  "Még nem pontos: {n}% egyezés. A kiemelt szavak hiányoztak vagy eltértek.": "Not quite yet: {n}% match. The highlighted words were missing or different.",
  "Előbb írd be vagy mondd be a verset.": "Type or dictate the verse first.",
  "A beszédfelismerés nem elérhető ezen a készüléken.": "Speech recognition is not available on this device.",
  "A mikrofon engedélye hiányzik.": "The microphone permission is missing.",
  "Nem hallottam semmit, próbáld újra.": "I heard nothing, try again.",
  "A felismeréshez hálózat kell.": "Recognition needs a network connection.",
  "A felismerés nem sikerült.": "Recognition failed.",
  "Biztos! Ez az ige már a tiéd.": "Known! This verse is yours now.",
  "Igetanuló: a tanulandó igék egyre több szó elrejtésével, napi ismétléssel. Tartsd nyomva egy verset, és válaszd a Tanulom pontot. A kiemeléseidet a Jegyzeteim alatt találod.": "Verse memorizer: learn verses with more and more words hidden, with daily review. Long-press a verse and choose Learn it. Your highlights are under My notes.",
  "Saját imatémám": "My own prayer topic",
  "Még nincs saját imatémád. Az Imádság képernyőn, az Imatéma hozzáadása gombbal írhatsz fel egyet.": "You have no prayer topics yet. On the Prayer screen, the Add prayer topic button lets you write one down.",
  "Indítás felolvasással": "Start with read-aloud",
});

// ===== 2026-11-01: a navigáció kikapcsolt képernyőn is fut, natív értesítés (Főnök TG 33006) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Túranavigáció": "Hiking navigation",
  "A navigáció kikapcsolt képernyőn is fut, az utasítások hangban szólnak.": "Navigation keeps running with the screen off; the instructions are spoken aloud.",
  // GERAH CREDIT NOTICE (owner 2026-11-01, TG 33165 / 33168): settings switch, notification body, task names
  "Értesítés Gerah-jóváírásról": "Notification on Gerah credits",
  "Szól a telefon, amikor Gerah-t kapsz egy teljesített feladatért. A koppintás a Gerah-tárcát nyitja.": "Your phone notifies you when you receive Gerah for a completed task. Tapping it opens the Gerah wallet.",
  "Gratulálunk! +{n} gerah jóváírva: {ok}.": "Congratulations! +{n} gerah credited: {ok}.",
  "Gratulálunk! +{n} gerah a teljesített feladatért: {feladat}.": "Congratulations! +{n} gerah for the completed task: {feladat}.",
  "induló egyenleg": "starting balance",
  "barát ajánlása": "referring a friend",
  "napi bibliaolvasás": "daily Bible reading",
  "olvasási terv befejezése": "completing a reading plan",
  "olvasási terv napja": "a reading-plan day",
});

// ===== 2026-11-01: szoba-chat valasz egy konkret uzenetre (TG 33287) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Válasz visszavonása": "Cancel reply",
  "Válasz": "Reply",
  "Az üzenet nem ment el: túl sok kérés, próbáld újra pár másodperc múlva.": "The message was not sent: too many requests, try again in a few seconds.",
  "📷 Kép": "📷 Photo",
  "Válasz egy korábbi üzenetre": "Reply to an earlier message",
});
Object.assign(window.PP_FORD_SZOTAR.en, {
  // ===== 2026-11-02 central premium offer (card 9f3700c2): the original-word teaser without the code sentence (store variants) =====
  "A Biblia prémiumban egy szóra koppintva megjelenik az eredeti héber, arámi vagy görög szó, átírással, Strong-számmal és szótári jelentéssel.": "With Bible Premium, tapping a word shows the original Hebrew, Aramaic or Greek word with transliteration, Strong number and dictionary meaning.",
});
Object.assign(window.PP_FORD_SZOTAR.en, {
  // ===== 2026-11-02 Bible games tile + Igekvíz (owner TG 33656, card ec633681) =====
  "Bibliai játékok felnőtteknek és gyerekeknek.": "Bible games for adults and children.",
  "Felnőtt": "Adult",
  "Gyerek": "Child",
  "Igekvíz": "Verse quiz",
  "Találomra választott ige: egészítsd ki, fejezd be, vagy mondd el az igehely alapján.": "A randomly chosen verse: fill in the gaps, finish it, or say it from the reference.",
  "Gyerek módban rövid, ismert igék jönnek, könnyű fokozaton.": "In child mode short, well-known verses come, at the easy level.",
  "Felnőtt módban az Igekvíz és az Igehely-párosító válogatott, jelentős igéket hoz (zsoltárok, példabeszédek, Jézus szavai, próféciák), az Igekvíz három fokozaton.": "In adult mode the Verse quiz and Reference match bring selected, meaningful verses (Psalms, Proverbs, the words of Jesus, prophecies); the Verse quiz has three levels.",
  "További játékok hamarosan.": "More games coming soon.",
  "Pont: {n}": "Points: {n}",
  "Sorozat: {n}": "Streak: {n}",
  "Legjobb sorozat: {n}": "Best streak: {n}",
  "Következő": "Next",
  "Most nem találtam igét. Próbáld újra.": "No verse found right now. Try again.",
  "+{n} pont": "+{n} points",
  // ===== 2026-11-02 Bible game 1, Ki mondta? (owner TG 33698, card ec633681) =====
  "Ki mondta?": "Who said it?",
  "Egy ige, négy név: ki mondta ezeket a szavakat?": "One verse, four names: who said these words?",
  "Helyes!": "Correct!",
  "Nem talált. Ezt {n} mondta.": "Not quite. It was {n} who said this.",
  "Isten": "God",
  "Jézus": "Jesus",
  "Az angyal": "The angel",
  "A Sátán": "Satan",
  "A kígyó": "The serpent",
  "Ábrahám": "Abraham",
  "Izsák": "Isaac",
  "Jákób": "Jacob",
  "József": "Joseph",
  "Mózes": "Moses",
  "Józsué": "Joshua",
  "Gedeon": "Gideon",
  "Sámson": "Samson",
  "Dávid": "David",
  "Salamon": "Solomon",
  "Saul": "Saul",
  "Nabukodonozor": "Nebuchadnezzar",
  "Pilátus": "Pilate",
  "Heródes": "Herod",
  "A fáraó": "Pharaoh",
  "Akháb": "Ahab",
  "Góliát": "Goliath",
  "Illés": "Elijah",
  "Elizeus": "Elisha",
  "Ésaiás": "Isaiah",
  "Jeremiás": "Jeremiah",
  "Jónás": "Jonah",
  "Sámuel": "Samuel",
  "Náthán": "Nathan",
  "Dániel": "Daniel",
  "Keresztelő János": "John the Baptist",
  "Péter": "Peter",
  "Pál": "Paul",
  "János apostol": "John the apostle",
  "Jakab": "James",
  "István": "Stephen",
  "Júdás": "Judas",
  "Fülöp": "Philip",
  "Tamás": "Thomas",
  "Mária": "Mary",
  "Erzsébet": "Elizabeth",
  "Márta": "Martha",
  "Ruth": "Ruth",
  "Eszter": "Esther",
  "Anna": "Hannah",
  "Naómi": "Naomi",
  "Jób felesége": "Job's wife",
  "A samáriai asszony": "The Samaritan woman",
  "Ráháb": "Rahab",
  "Jób": "Job",
  "Zákeus": "Zacchaeus",
  "Nikodémus": "Nicodemus",
  "A százados": "The centurion",
  "A lator a kereszten": "The thief on the cross",
  "A tékozló fiú": "The prodigal son",
  "A gazdag ifjú": "The rich young man",
  "Gamáliel": "Gamaliel",
  // ===== 2026-11-02 Bible game 2, Hol van? (owner TG 33698, card ec633681) =====
  "Hol van?": "Where is it?",
  "Egy ige, négy könyv: melyikben van? Felnőtt módban a fejezet is kérdezhető.": "One verse, four books: which one is it in? In adult mode the chapter can be asked too.",
  "Mit kérdezzen?": "What to ask?",
  "Csak a könyv": "Book only",
  "Könyv és fejezet": "Book and chapter",
  "Melyik könyvben van ez az ige?": "Which book is this verse in?",
  "Hányadik fejezet?": "Which chapter?",
  "Nem talált. A helyes könyv: {n}.": "Not quite. The right book: {n}.",
  "Írj be egy fejezetszámot.": "Enter a chapter number.",
  "Helyes! A könyv és a fejezet is talált.": "Correct! Both the book and the chapter.",
  "Közel! A {n}. fejezet volt.": "Close! It was chapter {n}.",
  "A könyv jó, de a {n}. fejezet volt.": "The book is right, but it was chapter {n}.",
  // ===== 2026-11-02 Bible game 3, Igehely-párosító (owner TG 33698, card ec633681) =====
  "Igehely-párosító": "Reference match",
  "Négy-öt ige és az igehelyeik összekeverve: párosítsd őket.": "Four or five verses and their references shuffled: pair them up.",
  "Válassz egy igehelyet, majd az igét, amelyikhez tartozik.": "Pick a reference, then the verse it belongs to.",
  "Kész! Hibátlan.": "Done! Flawless.",
  "Kész! {n} tévesztéssel.": "Done, with {n} slip(s).",
  "Nem ez az. Próbáld újra.": "Not that one. Try again.",
  // ===== 2026-11-02 Bible game 4, Könyvsorrend (owner TG 33698, card ec633681) =====
  "Könyvsorrend": "Book order",
  "Egymás után következő könyvek összekeverve: rakd őket sorba. Felnőtt módban egy egész szövetség is kérhető.": "Consecutive books shuffled: put them in order. In adult mode a whole testament can be asked.",
  "Mennyi könyv?": "How many books?",
  "Hat könyv": "Six books",
  "Egész szövetség": "Whole testament",
  "Rakd sorba az Ószövetség könyveit.": "Put the books of the Old Testament in order.",
  "Rakd sorba az Újszövetség könyveit.": "Put the books of the New Testament in order.",
  "Rakd sorba ezeket az egymás után következő könyveket.": "Put these consecutive books in order.",
  "Nyomd hosszan a könyvet, és húzd a helyére.": "Press and hold a book, then drag it into place.",
  "Helyes! Mind a helyén.": "Correct! All in place.",
  "{n} könyv van a helyén a {m}-ből. A helyes sorrend:": "{n} of {m} books are in place. The right order:",
  // ===== 2026-11-02 children's Bible games + game tiles (owner TG 7440, 7442, 7443) =====
  "Kicsiknek": "For little ones",
  "Igés játékok": "Bible verse games",
  "Memóriajáték": "Memory game",
  "Noé bárkája": "Noah's ark",
  "Ki kicsoda?": "Who is who?",
  "Kirakós": "Puzzle",
  "Hol van Noé bárkája?": "Where is Noah's ark?",
  "Hol van Dávid és Góliát?": "Where are David and Goliath?",
  "Hol van Jónás és a nagy hal?": "Where are Jonah and the big fish?",
  "Hol van a kis Mózes a kosárban?": "Where is baby Moses in the basket?",
  "Hol van Jézus a gyerekekkel?": "Where is Jesus with the children?",
  "Hol van a jó pásztor?": "Where is the Good Shepherd?",
  "Hol van Dániel az oroszlánokkal?": "Where is Daniel with the lions?",
  "Hol van a betlehemi csillag?": "Where is the star of Bethlehem?",
  "Noé megépítette a bárkát, és Isten megmentette őt és az állatokat.": "Noah built the ark, and God saved him and the animals.",
  "A kis Dávid Istenben bízott, és legyőzte az óriás Góliátot.": "Little David trusted God and defeated the giant Goliath.",
  "Jónást elnyelte a nagy hal, de Isten megmentette.": "A big fish swallowed Jonah, but God saved him.",
  "A kis Mózes egy kosárban úszott a folyón, és a királylány megtalálta.": "Baby Moses floated on the river in a basket, and the princess found him.",
  "Jézus szereti a gyerekeket, és megáldotta őket.": "Jesus loves the children, and he blessed them.",
  "Jézus a jó pásztor: megkeresi és hazaviszi az elveszett bárányt.": "Jesus is the Good Shepherd: he finds the lost lamb and carries it home.",
  "Dániel imádkozott, és Isten bezárta az oroszlánok száját.": "Daniel prayed, and God shut the lions' mouths.",
  "A csillag megmutatta az utat a kis Jézushoz Betlehemben.": "The star showed the way to baby Jesus in Bethlehem.",
  "Oroszlán": "Lion",
  "Elefánt": "Elephant",
  "Zsiráf": "Giraffe",
  "Bárány": "Sheep",
  "Tigris": "Tiger",
  "Ló": "Horse",
  "Tehén": "Cow",
  "Teve": "Camel",
  "Nyúl": "Rabbit",
  "Kutya": "Dog",
  "Macska": "Cat",
  "Medve": "Bear",
  "Víziló": "Hippo",
  "Zebra": "Zebra",
  "Kenguru": "Kangaroo",
  "Pingvin": "Penguin",
  "Ügyes vagy!": "Well done!",
  "Mondd el újra": "Say it again",
  "{n} kártya": "{n} cards",
  "Fordítási lehetőségek": "Translation options",
  "Egy játékos": "One player",
  "Ketten": "Two players",
  "{n}. játékos": "Player {n}",
  "{n}. játékos nyert!": "Player {n} wins!",
  "Döntetlen!": "It's a draw!",
  "Kártya": "Card",
  "Vezesd be az állatokat párosával a bárkába!": "Lead the animals into the ark, two by two!",
  "{n}: megvan a pár!": "{n}: the pair is complete!",
  "{n}: előbb a párja jöjjön!": "{n}: its partner comes first!",
  "Próbáld újra!": "Try again!",
  "{n} darab": "{n} pieces",
  "Húzd a darabot a helyére, és a két darab helyet cserél.": "Drag a piece into place and the two pieces swap.",
  "Darab": "Piece",
  "A szoba titkosító kulcsa a régi eszközödről vagy egy másik tagtól érkezik, amint valamelyikük megnyitja a szobát.": "The room's encryption key will arrive from your old device or from another member as soon as one of them opens the room.",
  // READING-PLAN GERAH CONSENT (owner 2026-11-02, TG 1464 "14A")
  "Hozzájárulok, hogy az olvasási terv teljesítését (mely napon mely bibliai fejezetet olvastam) a PrepperPapa a fiókomhoz kötve tárolja a terv befejezési Gerah-ráadásához. Ez vallási meggyőződésre utaló adat lehet. A hozzájárulás bármikor visszavonható a Beállításokban.": "I consent to PrepperPapa storing my reading-plan progress (which Bible chapter I read on which day) linked to my account for the plan's gerah completion bonus. This may be data revealing religious beliefs. The consent can be withdrawn at any time in Settings.",
  "Gerah a terv befejezéséért": "Gerah for completing the plan",
  "A terv befejezési Gerah-ráadásához a telefon elküldi a szervernek, mely napon mely fejezetet olvastad. Ehhez a kifejezett hozzájárulásod kell. Hozzájárulás nélkül a terv ugyanúgy működik, csak Gerah-t nem ír jóvá.": "For the plan's gerah completion bonus the phone sends the server which chapter you read on which day. This needs your explicit consent. Without consent the plan works the same, it just credits no gerah.",
  "Jóváhagyom": "I agree",
  "Nem kérem": "No, thanks",
  "Az olvasási terv Gerah-jóváírása ki van kapcsolva, mert nincs hozzájárulásod. A terv ugyanúgy működik.": "The reading plan's Gerah credit is off because you have not given consent. The plan works the same.",
  "Gerah-jóváírás bekapcsolása": "Turn on the Gerah credit",
  "Hozzájárulás megadva: {ido}.": "Consent given: {ido}.",
  "Nincs hozzájárulás: az olvasási terv működik, de Gerah-t nem ír jóvá.": "No consent: the reading plan works, but credits no Gerah.",
  "Visszavonod a hozzájárulást? A szerveren tárolt olvasásiterv-adataidat töröljük. A már jóváírt Gerah megmarad.": "Withdraw your consent? Your reading plan data stored on the server will be deleted. Gerah already credited stays.",
  "Hozzájárulás visszavonva. A tárolt olvasásiterv-adataidat töröltük, a már jóváírt Gerah megmarad.": "Consent withdrawn. Your stored reading plan data has been deleted; Gerah already credited stays.",
  "Hozzájárulás visszavonva. A tárolt adatok törlését a következő internetkapcsolatkor elküldjük.": "Consent withdrawn. The deletion of the stored data will be sent at the next internet connection.",
  "Olvasási terv: Gerah-jóváírás": "Reading plan: Gerah credit",
});
// 2026-11-03: the guided prayer's encouragements (Énok, IMA_VEZ_BUZD; owner TG 34198) and the Charon voice's
// visible name (owner TG 34202-34212: Mihály, in each language its own form)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "A csend nem üresség, hanem jelenlét. Nem neked kell rendbe tenned a hetet, mielőtt Isten elé állsz: elég, ha megállsz. Ő a zaj fölött is Isten, és ma a te szívedben is az akar lenni.": "Silence is not emptiness, but presence. You do not have to put your week in order before you come before God: it is enough to be still. He is God above the noise, and today he wants to be God in your heart too.",
  "Az aggodalom mindig a holnapban él, a hála a mában. Amikor megköszönöd, amit már kaptál, a félelemnek kevesebb helye marad. Ma ne a terhet sorold elő először, hanem azt, amit Isten már megtett.": "Worry always lives in tomorrow, gratitude lives in today. When you give thanks for what you have already received, fear has less room. Today, do not list your burdens first, but what God has already done.",
  "Isten nem félig bocsát meg. Ha megvallottad, nem kell újra elővenned és újra hordoznod. Ma tiszta lappal indulsz, nem azért, mert jó voltál, hanem mert ő hű és igaz.": "God does not forgive halfway. If you have confessed it, you do not need to pick it up and carry it again. Today you start with a clean slate, not because you were good, but because he is faithful and just.",
  "Ami először jön, az szabja meg a többit. Ha ma az ő országa kerül az első helyre, a teendőid nem tűnnek el, de a helyükre kerülnek. Bízd rá a sorrendet, és figyeld meg, mi adatik hozzá.": "What comes first shapes everything else. If his kingdom takes first place today, your tasks will not disappear, but they will fall into their proper place. Trust him with the order, and watch what is added unto you.",
  "Nem kell kopogtatva, lehajtott fejjel jönnöd. A kegyelem trónja elé bizalommal járulhatsz, mert Jézus már kitárta az ajtót. Amire ma szükséged van, azt kérd bátran: ez a megfelelő idő.": "You do not have to come knocking timidly, with your head bowed low. You may come boldly to the throne of grace, because Jesus has already opened the door wide. Ask boldly for what you need today: this is the right time.",
  "A hála nem a körülményekből fakad, hanem abból, aki a körülmények fölött áll. Nem mindenért, de mindenben adhatsz hálát. Ma keresd meg azt az egy pontot a nehézségben, ahol Isten keze már látszik.": "Gratitude does not spring from circumstances, but from the One who stands above them. Not for everything, but in everything you can give thanks. Today, look for that one point in the hardship where God's hand can already be seen.",
  "Jézus nem azt mondja, hogy előbb erősödj meg, és utána jöhetsz. A fáradtakat hívja. Tedd le nála, ami nyom, ne magyarázd, csak tedd le. A nyugalom nála kezdődik, nem a feladatok végén.": "Jesus does not say: first get stronger, and then you may come. He calls those who are weary. Lay down before him what weighs on you, do not explain it, just lay it down. Rest begins with him, not at the end of your tasks.",
  "Ha az Úr a pásztorod, nem egyedül kell kitalálnod az utat. Ő tudja, hol a legelő és hol a csendes víz. Ma ne a hiányt számold, hanem kövesd a hangját, és meglátod, hogy nem szűkölködsz.": "If the Lord is your shepherd, you do not have to find the way on your own. He knows where the pasture is and where the still waters are. Today, do not count what you lack, but follow his voice, and you will see that you shall not want.",
  "A gyengeséged nem akadály Isten előtt, hanem tér, ahol az ő ereje megmutatkozik. Ma ne szégyelld, ahol kevés vagy. Pont ott mondja neked: elég az én kegyelmem.": "Your weakness is not an obstacle before God, but a space where his strength is shown. Today, do not be ashamed of where you fall short. Right there he says to you: My grace is sufficient for you.",
  "A félelem azt súgja, hogy egyedül vagy. Isten azt mondja: veled vagyok. Nem a félelem nagysága dönt, hanem az, hogy kinek a jobbja tart. Ma kapaszkodj abba a kézbe, ami nem enged el.": "Fear whispers that you are alone. God says: I am with you. It is not the size of your fear that decides, but whose right hand is holding you. Today, hold on to the hand that will not let you go.",
  "Nem kell mindent értened ahhoz, hogy jó úton járj. Elég, ha minden lépésnél őt ismered el. A térkép nála van, neked a következő lépés jut. Tedd meg ma bizalommal.": "You do not have to understand everything to walk the right path. It is enough to acknowledge him in every step. He holds the map, and your part is the next step. Take it today with trust.",
  "Valaki ma nehezebb terhet visz, mint te. Lehet, hogy egy telefon, egy jó szó vagy egy ima az, ami könnyít rajta. Krisztus törvénye ilyen egyszerű lépésekben töltődik be. Kérdezd meg Istent: kinek kellek ma?": "Someone is carrying a heavier burden today than you are. Perhaps a phone call, a kind word or a prayer is what will lighten it. The law of Christ is fulfilled in steps as simple as these. Ask God: who needs me today?",
  "A megbocsátás nem azt jelenti, hogy nem fájt. Azt jelenti, hogy nem te viszed tovább a számlát. Ahogy Isten Krisztusban elengedte a tiédet, úgy engedheted el te is. Ma szabadabban léphetsz ki ebből az imából.": "Forgiveness does not mean it did not hurt. It means you no longer carry the bill. Just as God in Christ has forgiven yours, you too can let it go. Today you can step out of this prayer more freely.",
  "A kifáradás nem bukás. Aki az Úrban bízik, annak az ereje nem egyszer adatik, hanem újra és újra megújul. Ma nem kell repülnöd, ha csak járni tudsz. Ő ott is megtart, és nem fáradsz el.": "Weariness is not failure. Those who wait upon the Lord do not receive strength just once; it is renewed again and again. Today you do not have to fly if you can only walk. He holds you there too, and you will not grow weary.",
  "Ha az Úr a világosságod, a sötétség nem dönthet helyetted. Kitől féljek? Ez nem dac, hanem bizalom. Ma nézz szembe azzal, ami nyugtalanít, és mondd ki hangosan: az Úr az én életem erőssége.": "If the Lord is your light, darkness cannot decide for you. Whom shall I fear? This is not defiance, but trust. Today, face what troubles you, and say it out loud: the Lord is the strength of my life.",
  "A Lélek gyümölcse nem erőfeszítésből terem, hanem abból, hogy közel maradsz hozzá. Nem neked kell előállítanod a békességet és a türelmet. Maradj ma a szőlőtőn, és a gyümölcs megjön.": "The fruit of the Spirit does not grow from effort, but from staying close to him. You do not have to produce peace and patience yourself. Abide in the vine today, and the fruit will come.",
  "A legtöbb sebet nem a tett, hanem a gyors szó ejti. Ma figyelj egy kicsit tovább, mielőtt válaszolsz. Lehet, hogy a csendben meghallod, mit akar mondani a másik, és mit akar mondani Isten.": "Most wounds are caused not by deeds, but by hasty words. Today, listen a little longer before you answer. Perhaps in the silence you will hear what the other person wants to say, and what God wants to say.",
  "A madarak nem aggódnak a holnapi kenyér miatt, mégis van mit enniük. Te sokkal értékesebb vagy előtte. Ma, amikor a gond megszólal, nézz fel egy pillanatra, és emlékezz: az Atya tud rólad.": "The birds do not worry about tomorrow's bread, and yet they have enough to eat. You are worth much more to him than they are. Today, when worry speaks up, look up for a moment and remember: the Father knows about you.",
  "A vezetőkért mondott ima nem politika, hanem szolgálat. Akár egyetértesz velük, akár nem, Isten kezében vannak. Imádkozz értük ma, hogy csendes és nyugodalmas életet élhessünk, te és a családod is.": "Praying for leaders is not politics, but service. Whether you agree with them or not, they are in God's hands. Pray for them today, so that we may lead a quiet and peaceable life, you and your family too.",
  "A reménység nem azon múlik, mit látsz, hanem azon, kiben hiszel. Isten nem kis adagban adja, hanem bővölködni akar benned. Ma engedd, hogy a Szentlélek töltse be azt, ami kiürült.": "Hope does not depend on what you see, but on whom you believe. God does not give it in small portions; he wants you to abound in it. Today, let the Holy Spirit fill what has run empty.",
  "Bátorság Istentől kérni, hogy vizsgáljon meg. Nem azért teszi, hogy elítéljen, hanem hogy vezessen. Ami ma előkerül, azt ne rejtsd el, add oda neki. Ő az örökkévalóság útjára akar vinni.": "It takes courage to ask God to search you. He does not do it to condemn you, but to lead you. Whatever comes to light today, do not hide it, give it to him. He wants to lead you in the way everlasting.",
  "A hálaadás a kapu, amin bejutsz az ő jelenlétébe. Nem kell nagy szavakat keresned. Kezdd azzal, ami ma eszedbe jut, és figyeld meg, hogyan nyílik meg a szíved a dicséretre.": "Thanksgiving is the gate through which you enter his presence. You do not need to search for grand words. Begin with what comes to mind today, and see how your heart opens to praise.",
  "Nincs olyan munka, ami túl kicsi ahhoz, hogy az Úrnak végezd. A mai feladataid, a rutin is, istentisztelet lehet. Tedd ma lélekből, mintha neki tennéd, mert valójában neki teszed.": "No work is too small to do for the Lord. Your tasks today, even the routine, can be worship. Do them heartily today, as unto him, because in truth you are doing them for him.",
  "A világ békessége a körülményektől függ, Jézusé nem. Ő úgy adja, hogy a vihar közepén is megmarad. Ma, ha a szíved nyugtalan, ne a vihar elcsendesedésére várj, hanem vedd át tőle a békességét.": "The peace of the world depends on circumstances, the peace of Jesus does not. He gives it in a way that remains even in the middle of the storm. Today, if your heart is troubled, do not wait for the storm to calm, but receive his peace from him.",
  "Az ige nem reflektor, ami az egész utat bevilágítja, hanem lámpás a lábad elé. Elég a következő lépéshez. Ma ne a távoli kanyarokon aggódj, hanem tedd meg azt a lépést, amit most látsz.": "The word is not a searchlight that lights up the whole road, but a lamp unto your feet. It is enough for the next step. Today, do not worry about the distant bends, but take the step you can see now.",
  "Az erő nem a te izmodból jön, hanem az ő hatalmából. Isten fegyverzete készen áll, csak fel kell öltened. Ma reggel tudatosan vedd magadra: az igazság, a hit, az ige ott van melletted.": "Strength does not come from your own muscles, but from his might. The armour of God is ready, you only have to put it on. This morning, put it on deliberately: truth, faith and the word are there beside you.",
  "Bármi történt tegnap, ma reggel Isten irgalma újra friss. Nem fogyott el, nem kopott meg. Ez a nap új kezdet, mert nagy az ő hűsége, és nem a tiéd tartja meg a napot.": "Whatever happened yesterday, God's mercy is fresh again this morning. It has not run out, it has not worn thin. This day is a new beginning, because great is his faithfulness, and it is not yours that holds the day.",
  "Amit Isten elkezdett benned, azt nem hagyja félbe. Lehet, hogy most nem látod a végét, de ő látja. Ma nyugodj meg abban, hogy a munka az ő kezében van, és ő elvégzi.": "What God has begun in you, he will not leave unfinished. Perhaps you cannot see the end now, but he can. Today, rest in knowing that the work is in his hands, and he will complete it.",
  "Mihály": "Michael",
});

// fiok-mentes: account backup and restore (owner TG 34415, 2026-11-03)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Mentés a fiókodba": "Backup to your account",
  "Ha bekapcsolod, a teljes mentésedet (a készüléken tárolt adataidat, például jegyzeteket, kijelöléseket, könyvjelzőket, olvasási terveket és beállításokat) a fiókodba töltheted, egy általad választott mentési kulccsal titkosítva, és új telefonon ugyanazzal a fiókkal és kulccsal visszatöltheted.": "When switched on, you can upload your full backup (the data stored on this device, e.g. notes, highlights, bookmarks, reading plans and settings) to your account, encrypted with a backup key you choose, and restore it on a new phone with the same account and key.",
  "Mentés a fiókba most": "Back up to account now",
  "Visszatöltés a fiókból": "Restore from account",
  "Automatikus mentés naponta": "Automatic daily backup",
  "Naponta legfeljebb egyszer, csak ha változott valami. Ehhez a mentési kulcsból képzett kulcs ezen a készüléken marad, amíg be van kapcsolva; magát a mentési kulcsot nem tároljuk.": "At most once a day, only if something changed. For this, a key derived from your backup key stays on this device while it is switched on; the backup key itself is not stored.",
  "A fiókba mentéshez be kell jelentkezned.": "Sign in to back up to your account.",
  "A fiókba mentés most nem érhető el, később próbáld újra.": "Account backup is not available right now, please try again later.",
  "A mentés túl nagy a fiókhoz ({m} MB, legfeljebb {max} MB). Készíts helyi teljes mentést fájlba.": "The backup is too large for the account ({m} MB, at most {max} MB). Make a local full backup to a file instead.",
  "A fiókodban tárolt mentés: {t} ({m} MB).": "Backup stored in your account: {t} ({m} MB).",
  "A fiókodban még nincs mentés ebből az alkalmazásból.": "There is no backup from this app in your account yet.",
  "Az automatikus mentés az első kézi mentés után indul.": "The automatic backup starts after the first manual backup.",
  "A fiókodban már van egy mentés ({t}). Lecseréled erre? Az eddigi biztonsági példányként megmarad.": "Your account already holds a backup ({t}). Replace it with this one? The current one is kept as a safety copy.",
  "Mentés megszakítva, nem töltöttünk fel semmit.": "Backup cancelled, nothing was uploaded.",
  "Feltöltés a fiókodba…": "Uploading to your account…",
  "Mentés feltöltve a fiókodba.": "Backup uploaded to your account.",
  "A fiókodban két mentés van: a legutóbbi ({a}) és az előző ({b}). Melyiket töltsük vissza?": "Your account holds two backups: the latest ({a}) and the previous one ({b}). Which one should be restored?",
  "A legutóbbit": "The latest",
  "Az előzőt": "The previous one",
  "A visszatöltés a készüléken levő adataidat felülírja a fiókban tárolt mentéssel ({t}). A mentési kulcs kell hozzá. Folytatod?": "Restoring overwrites the data on this device with the backup stored in your account ({t}). You will need the backup key. Continue?",
  "Visszatöltve a fiókból. A nézetek frissülnek.": "Restored from your account. The views are being refreshed.",
  "Töröljük a fiókodból a tárolt mentéseidet is?": "Should we also delete the backups stored in your account?",
  "A fiókodban tárolt mentés törölve.": "The backup stored in your account has been deleted.",
});

// Igetanulmányozó: two translations side by side, Biblia prémium (owner TG 34609, 2026-11-03)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Igetanulmányozó": "Verse study",
  "Igetanulmányozó ingyen naponta {db} fejezet, ma még {n}.": "Verse study free for {db} chapters a day, {n} left today.",
  "Ma már {db} fejezetet összevetettél az igetanulmányozóban. Holnap újra jár; Biblia prémiummal korlátlanul összevetheted a fordításokat.": "You have already compared {db} chapters in the verse study today. You get them again tomorrow; with Bible Premium you can compare translations without limit.",
  "A két fordítás felcserélése": "Swap the two translations",
  "Előző fejezet": "Previous chapter",
  "Következő fejezet": "Next chapter",
  "Ezt a fordítást most nem sikerült betölteni. Letöltés után internet nélkül is működik.": "This translation could not be loaded right now. Once downloaded it also works without internet.",
  "Válassz egy második fordítást az összevetéshez.": "Choose a second translation to compare.",
  "A két fordítás más nyelvű: a szavak eltérését csak azonos nyelvű fordításoknál jelöljük.": "The two translations are in different languages: differing words are marked only between translations of the same language.",
  "A kiemelt szavak eltérnek a másik fordítástól.": "The highlighted words differ from the other translation.",
  "A második fordításban ez a könyv nincs meg.": "This book is not in the second translation.",
  "nincs megfelelő vers": "no matching verse",
  "Első fordítás": "First translation",
  "Második fordítás": "Second translation",
  "Könyv": "Book",
  "Két fordítás összevetése": "Compare two translations",
  "Maradsz ennél a lépésnél · koppints a folytatáshoz": "Staying on this step · tap to continue",
  "Palackos víz (autó)": "Bottled water (car)",
  "Energiaszelet (autó)": "Energy bars (car)",
  "Powerbank (autó)": "Power bank (car)",
  "Powerbank (hétvégi ház)": "Power bank (weekend house)",
  "Powerbank (rejtek)": "Power bank (cache)",
  "Gázpalack (rejtek)": "Gas cylinder (cache)",
  // Ujdonsagok v43.465 (2026-11-08)
  "Biblia: a Beállításokban választható az olvasási háttér: Csillagos ég, Statikus zöld, vagy 3D galaxis, amely a telefon döntésére mozog (szédülékenyeknek nem ajánlott; felolvasás közben áll).": "Bible: choose the reading background in Settings: Starry sky, Static green, or 3D galaxy, which moves as you tilt the phone (not recommended if you get dizzy easily; it stays still during read-aloud).",
  "Biblia: a könyvek között az apokrif könyvek polca alapból össze van csukva, egy koppintással kinyílik.": "Bible: in the book list the apocrypha shelf is collapsed by default; one tap opens it.",
  "Biblia, lengyel UBG fordítás: a Prédikátor könyve és a Jelenések könyve rövidítése Kaz és Obj.": "Bible, Polish UBG translation: Ecclesiastes and Revelation are now abbreviated Kaz and Obj.",
  "Igekvíz és Igehely-párosító: felnőtt módban csak megjegyzésre érdemes igék jönnek (Zsoltárok, Példabeszédek, Jézus szavai, próféciák).": "Verse quiz and Verse reference match: in adult mode only verses worth memorising come up (Psalms, Proverbs, the words of Jesus, prophecies).",
  "Vezetett ima: a felolvasott szöveg látható marad, és minden lépés megvárja, amíg a felolvasás véget ér.": "Guided prayer: the text being read stays visible, and each step waits until its reading has finished.",
  "Igetanuló: a nyomtatott vágási útmutató szerint minden csíkot a két vágójel között félúton kell elvágni.": "Verse learning: the printed cutting instructions now say to cut each strip halfway between its two cut marks.",
  "Gerah: tárca nélkül az app nem ígér letétet; a panel megmondja, hogy nincs tárca, és egy koppintással a tárcához visz. Az olvasási napok állapota a tárcával együtt átkerül a másik appba.": "Gerah: without a wallet the app no longer promises escrow; the panel says there is no wallet and one tap takes you to the wallet. The state of your reading days moves to the other app together with the wallet.",
  "Tablet: álló és fekvő elrendezés, a tablet elforgatható; a Biblia szövege kitölti a képernyőt, fekvő helyzetben a hivatkozások és jegyzetek oldalt nyílnak, és a kezdőlapon a világhelyzet csempéje jelenik meg.": "Tablet: portrait and landscape layouts, and the tablet may be rotated; the Bible text fills the screen, in landscape cross references and notes open at the side, and the start page shows a world situation tile.",
  "Világhelyzet térkép: új Támadás réteg, a terrortámadások és tömeges gyilkosságok is megjelennek a térképen és a vezetett ima világhelyzet-lépésében.": "World situation map: new Attack layer; terror attacks and mass killings now appear on the map and in the world step of the guided prayer.",
  "Megvallások: a Szellemi fegyverek felvétele megvallás mindenkinek beépítve, a fegyverzet minden darabjához saját képpel.": "Confessions: the confession “Putting on the spiritual armour” is built in for everyone, with its own picture for each piece of the armour.",
  // t='attack' (TG 36837)
  "Terrortámadás / tömeges gyilkosság": "Terror attack / mass killing",
  "Támadás": "Attack",
  "Hírek alapján (48 óra):": "From news reports (48 hours):",
  "Közel van az Úr a megtört szívekhez. Állj most oda imádságban a gyászolók, a sebesültek és a mentők mellé.": "The Lord is close to the brokenhearted. Stand now in prayer beside the mourners, the wounded and the rescuers.",
  "Uram, vigasztald {hely} gyászolóit, gyógyítsd a sebesülteket, és ne engedd, hogy a gyűlölet mondja ki az utolsó szót.": "Lord, comfort the mourners of {hely}, heal the wounded, and do not let hatred have the last word.",
  // Névtelen statisztika (owner TG 36883, 2026-11-08, olvasas-stat.mjs)
  "Névtelen statisztika": "Anonymous statistics",
  "Ha bekapcsolod, egy nap végén az app egyetlen névtelen számsort küld: kerekítve hány percet olvastál és imádkoztál aznap, és melyik alkalmazásban. Nincs benne fiók, e-mail-cím és készülék-azonosító, az IP-címet sem tároljuk.": "If you switch this on, at the end of a day the app sends one anonymous set of numbers: how many minutes you read and prayed that day (rounded), and in which app. It contains no account, no e-mail address and no device ID, and we do not store the IP address either.",
  "Ebből csak napi összesítés készül (hányan olvastak és imádkoztak, átlagosan hány percet), amelyet a Wordlight oldalán közzéteszünk, de tíz főnél kisebb csoportot soha. A beküldött számsor nem köthető hozzád, ezért utólag nem törölhető; kikapcsolás után az app nem küld többet.": "Only daily totals are made from it (how many people read and prayed, and for how many minutes on average), published on the Wordlight website, but never for a group of fewer than ten. The numbers sent cannot be linked to you, so they cannot be deleted afterwards; once you switch this off, the app sends nothing more.",
});
// ===== 2026-11-08 local room mute (Boss TG 36904) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Az üzenetek kikapcsolva is megérkeznek, és itt látod őket. Az SOS-jelzés és az eszköz-riasztás ettől még megszólal.": "Messages still arrive when this is off, and you see them here. An SOS alert and a device alarm still ring.",
});

// ===== 2026-11-08 prayer requests + the redesigned prayer room hub (card 5cde756b, Boss TG 36557) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Imakérés": "Prayer request",
  "Névtelen": "Anonymous",
  "Gépi fordítás": "Machine translation",
  "Valaki imát kért, és most te lehetsz az, aki imádkozik érte. Mondd el a saját szavaiddal, vagy imádkozz így:": "Someone asked for prayer, and now you can be the one who prays for them. Say it in your own words, or pray like this:",
  "Uram, eléd hozom ezt a kérést. Te ismered azt, aki leírta, és tudod, mire van szüksége. Légy vele, adj neki erőt és békességet.": "Lord, I bring this request before you. You know the one who wrote it, and you know what they need. Be with them, give them strength and peace.",
  "Imakérések": "Prayer requests",
  "Kérj imát másoktól, vagy imádkozz azokért, akik kértek. Az imakérések nyilvánosak, becenévvel vagy név nélkül.": "Ask others to pray for you, or pray for those who asked. Prayer requests are public, under a nickname or anonymous.",
  "Mások imakérései": "Others' prayer requests",
  "Saját imakéréseim": "My prayer requests",
  "Imakérés beküldése": "Send a prayer request",
  "Az országok, amelyekért a vezetett imában imádkoztál.": "The countries you prayed for in the guided prayer.",
  "vezetett ima": "guided prayers",
  "ország": "countries",
  "imakérés, amelyért imádkoztál": "requests you prayed for",
  "Család": "Family",
  "Munka és anyagiak": "Work and finances",
  "Gyász": "Grief",
  "Lelki élet": "Spiritual life",
  "Béke": "Peace",
  "Megadod nagyjából, honnan imádkozol? Csak egy kb. 50 km-es körzet közepe kerül a térképre, név nélkül. A pontos helyed a telefonodon marad.": "Will you share roughly where you pray from? Only the centre of an area of about 50 km goes on the map, without a name. Your exact location stays on your phone.",
  "Megadom": "Yes, share",
  "Az imakérésekhez egyszer be kell lépned.": "To use prayer requests, you need to sign in once.",
  "Most nem érem el az imakéréseket. Próbáld újra később.": "I can't reach the prayer requests right now. Please try again later.",
  "Imádkoztak érte: {n}": "Prayers for it: {n}",
  "Eredeti megjelenítése": "Show original",
  "Fordítás megjelenítése": "Show translation",
  "Köszönet": "Thanks",
  "Ez a te kérésed.": "This is your request.",
  "Ma már imádkoztál érte": "You prayed for it today",
  "Imádkozom érte": "I pray for this",
  "Köszönjük, hogy imádkoztál érte.": "Thank you for praying for it.",
  "Az imalistádon van": "On your prayer list",
  "Saját imalistámhoz": "Add to my prayer list",
  "Felírtam az imalistádra. Csak ezen a készüléken tárolódik.": "Added to your prayer list. It is stored only on this device.",
  "Bejelentés vagy letiltás": "Report or block",
  "Mi a gond ezzel a kéréssel?": "What is wrong with this request?",
  "A bejelentést egy ember nézi át. A bejelentő nevét nem látja senki.": "A person reviews the report. Nobody sees who reported it.",
  "Kéretlen vagy reklám": "Spam or advertising",
  "Személyes adat van benne": "Contains personal data",
  "Más ok": "Other reason",
  "Letiltás: ezt a kérést, és ugyanennek a becenévnek a kéréseit nem látod többet ezen a készüléken.": "Block: you will no longer see this request, or other requests under the same nickname, on this device.",
  "Letiltom a beküldőt": "Block the sender",
  "Köszönjük, átnézzük. Ha szeretnéd, le is tilthatod a beküldőt.": "Thank you, we will review it. If you like, you can also block the sender.",
  "Most nem sikerült. Próbáld újra később.": "That didn't work right now. Please try again later.",
  "Letiltva. Ezen a készüléken nem látod többet.": "Blocked. You won't see it on this device any more.",
  "Itt most nincs imakérés.": "There are no prayer requests here right now.",
  "Imádkozz azokért, akik imát kértek. Nem látják, ki vagy: csak azt, hányan imádkoztak értük.": "Pray for those who asked for prayer. They don't see who you are, only how many have prayed for them.",
  "Aktív": "Active",
  "Ország": "Country",
  "Minden ország": "All countries",
  "Minden kategória": "All categories",
  "Továbbiak": "More",
  "Letiltások feloldása ({n})": "Remove blocks ({n})",
  "Feloldod a letiltásokat? A letiltott kéréseket újra látni fogod.": "Remove the blocks? You will see the blocked requests again.",
  "Itt még nincs megválaszolt imakérés.": "No answered prayer requests here yet.",
  "Átnézésre vár": "Waiting for review",
  "Lejárt, megújítható": "Expired, can be renewed",
  "Nem jelent meg": "Not published",
  "Egy kérés 30 napig látszik, utána megújíthatod. Ha választ kaptál, jelöld meg, és írhatsz egy köszönő szót azoknak, akik imádkoztak.": "A request is shown for 30 days, then you can renew it. When you receive an answer, mark it, and you can write a word of thanks to those who prayed.",
  "Még nem küldtél imakérést.": "You haven't sent a prayer request yet.",
  "A kérésed átnézésre vár, mert az automatikus ellenőrzés talált benne valamit (például telefonszámot vagy nevet). Hamarosan valaki megnézi. Ha szeretnéd, addig is átírhatod.": "Your request is waiting for review, because the automatic check found something in it (for example a phone number or a name). Someone will look at it soon. If you like, you can edit it in the meantime.",
  "Egy ember átnézte, és ezt a kérést nem tette közzé. Ha kérdésed van, írj a prepperpapa@gmail.com címre.": "A person reviewed this request and did not publish it. If you have a question, write to prepperpapa@gmail.com.",
  "Megújítva: újabb 30 napig látszik.": "Renewed: shown for another 30 days.",
  "Megújítom (30 nap)": "Renew (30 days)",
  "Köszönő szó": "Word of thanks",
  "Választ kaptam": "I received an answer",
  "Köszönő szó azoknak, akik imádkoztak (nem kötelező)": "A word of thanks to those who prayed (optional)",
  "Átírom": "Edit",
  "Hol imádkoztak érte?": "Where did people pray for it?",
  "Törlöd ezt az imakérést? Mindenkinél eltűnik.": "Delete this prayer request? It disappears for everyone.",
  "Törlöm": "Delete",
  "Miért kérsz imát?": "What would you like prayer for?",
  "Becenév (ha üresen hagyod: Névtelen)": "Nickname (if left empty: Anonymous)",
  "Ország és megye": "Country and county",
  "Helyem megkeresése (kb. 50 km pontossággal)": "Find my location (to about 50 km)",
  "Válassz országot": "Choose a country",
  "Megye vagy tartomány": "County or province",
  "Megye nélkül": "No county",
  "A pontos helyed a telefonodon marad: csak az ország és a megye látszik.": "Your exact location stays on your phone: only the country and county are shown.",
  "Mielőtt elküldöd": "Before you send",
  "A kérésedet mindenki láthatja, aki a Wordlightot vagy a PrepperPapa Bibliát használja, a saját nyelvére fordítva, és a wordlight.hu weboldalon is megjelenik.": "Everyone who uses Wordlight or the PrepperPapa Bible can see your request, translated into their own language, and it also appears on the wordlight.hu website.",
  "Látszik a beceneved és a megyéd vagy tartományod, a pontos helyed nem.": "Your nickname and your county, region or province are shown, your exact location is not.",
  "Ha másért kérsz imát, ne írd ki a teljes nevét, a címét vagy a telefonszámát. Bankszámlát, pénzkérést ne írj bele.": "If you ask for prayer for someone else, do not write their full name, address or phone number. Do not include a bank account or a request for money.",
  "A kérésedet bármikor törölheted.": "You can delete your request at any time.",
  "Elfogadom a Felhasználási feltételeket.": "I accept the Terms of Use.",
  "Felhasználási feltételek": "Terms of Use",
  "Hozzájárulok, hogy a kérésem nyilvánosan megjelenjen, akkor is, ha a hitemre vagy az egészségemre utal.": "I consent to my request being shown publicly, even if it refers to my faith or my health.",
  "Elmúltam 16 éves, vagy a szülőm hozzájárult.": "I am 16 or older, or my parent has given consent.",
  "Beküldés": "Send",
  "A helyedet nem kaptam meg. Válaszd ki az országot és a megyét a listából.": "I couldn't get your location. Choose the country and county from the list.",
  "Ellenőrizd a megyét: határ közelében átírhatod.": "Check the county: near a border you can change it.",
  "Ehhez a helyhez nem találtam megyét. Válaszd ki a listából.": "I couldn't find a county for this place. Choose it from the list.",
  "Írj legalább néhány szót (legalább 10 betűt).": "Write at least a few words (at least 10 characters).",
  "Válassz kategóriát.": "Choose a category.",
  "Válaszd ki az országot.": "Choose the country.",
  "A beküldéshez mindhárom jelölőnégyzet kell.": "To send it, all three boxes must be ticked.",
  "Ma már sok kérést küldtél. Holnap újra küldhetsz.": "You've sent many requests today. You can send again tomorrow.",
  "Valami nem stimmel a kérésben. Nézd át, és próbáld újra.": "Something isn't right in the request. Please check it and try again.",
  "Most nem sikerült elküldeni. Próbáld újra később.": "It couldn't be sent right now. Please try again later.",
  "Köszönjük. A kérésed megjelent, mások imádkozhatnak érte.": "Thank you. Your request has been published, others can pray for it.",
  "Még senki nem adta meg, honnan imádkozott érte.": "Nobody who prayed for it has shared where they prayed from yet.",
  "{n} alkalommal": "{n} times",
  "kb. 50 km-es körzet": "area of about 50 km",
  "Imakérés átírása": "Edit prayer request",
  "Amiért imádkoztál": "What you prayed for",
  "Összes vezetett ima": "All guided prayers",
  "A köszönő szavad átnézésre vár, mert az automatikus ellenőrzés talált benne valamit. Hamarosan valaki megnézi; addig a kérésed nem látszik a listában.": "Your word of thanks is waiting for review, because the automatic check found something in it. Someone will look at it soon; until then your request is not shown in the list.",
  "Az ok: {ok}": "Reason: {ok}",
  "Minden napra egy rövid vezetett ima.": "A short guided prayer for every day.",
  "Fordítás a telefonon…": "Translating on your phone…",
  "Nyelvi csomag letöltése…": "Downloading language pack…",
  "Ezen a telefonon nincs gépi fordítás, az eredeti szöveg látszik.": "This phone has no machine translation, the original text is shown.",
  "Ehhez a nyelvhez a telefon nem tud fordítani, az eredeti szöveg látszik.": "This phone cannot translate this language, the original text is shown.",
  "A nyelvi csomag csak Wi-Fi-n töltődik le, addig az eredeti szöveg látszik.": "The language pack downloads on Wi-Fi only, until then the original text is shown.",
});
// THE YEARLY GUIDED PRAYER (card c5fb3377): the daily block's step and the feast names (owner TG 636/637, 639/640:
// the biblical feasts are shown by name in every country and language)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "A nap igéje": "Verse of the day",
  "Hanuka": "Hanukkah",
  "Purim": "Purim",
  "Pészah": "Passover",
  "Sávuot (a hetek ünnepe)": "Shavuot (Feast of Weeks)",
  "Ros hásáná (a kürtzengés ünnepe)": "Rosh Hashanah (Feast of Trumpets)",
  "Jom kippur (az engesztelés napja)": "Yom Kippur (Day of Atonement)",
  "Szukkot (a sátrak ünnepe)": "Sukkot (Feast of Tabernacles)",
  "Smini aceret (a nyolcadik nap ünnepe)": "Shemini Atzeret (the eighth day)",
  "Húsvét": "Easter",
  "Karácsony": "Christmas",
  "Hálaadás napja": "Thanksgiving Day"
});
// ===== 2026-11-08 Támogatás screen (card a0a2d3d6): store purchase only, never a web hint =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Támogatás": "Support",
  "Választható összegek": "Choose an amount",
  "Ha tetszik az alkalmazás, egy kisebb összeggel támogathatod a fejlesztését. A támogatás önkéntes, és semmit nem old fel: az alkalmazás nálad ugyanúgy működik, akár támogatsz, akár nem.": "If you like the app, you can support its development with a small amount. Support is voluntary and unlocks nothing: the app works exactly the same for you whether you support it or not.",
  "A támogatás hamarosan elérhető.": "Support will be available soon.",
  "Köszönjük, hogy használod az alkalmazást, és hogy gondolsz ránk.": "Thank you for using the app and for thinking of us.",
  "Köszönjük a támogatást!": "Thank you for your support!",
  "A fizetés függőben van. Amint jóváhagyják, megérkezik a támogatásod.": "The payment is pending. Your support will arrive as soon as it is approved."
});

// The built-in "Szellemi fegyverek felvétele" confession was removed for everyone, owner copy only (Boss TG 37206/37207, 2026-11-09).


// ===== 2026-11-08 the dashboard "Irányítópult" (owner 2026-11-08, Ágnes): tablet / laptop panel of the Bible start page =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Irányítópult": "Dashboard",
  "Ma az Igével": "Today with the Word",
  "cél {n} perc": "goal {n} min",
  "nincs napi cél": "no daily goal",
  "olvasás {o} · ima {i} perc": "reading {o} · prayer {i} min",
  "Sorozat": "Streak",
  "Meghallgatott imák": "Answered prayers",
  "összesen {n} imatéma": "prayer topics in total: {n}",
  "Mai ige": "Verse of the day",
  "tovább olvasom ›": "read on ›",
  "{p} perc = {g}": "{p} min = {g}",
  "Gerah-bányászat": "Gerah mining",
  "mai cél teljesítve": "today's goal reached",
  "e héten {n} gerah": "this week {n} gerah",
  "még {n} gyűjthető": "{n} more to collect",
  "A Gerah-hoz legalább 10 perces napi cél kell.": "Gerah needs a daily goal of at least 10 minutes.",
  "még {m} perc a mai Gerah-ig": "{m} min to today's Gerah",
  "a PrepperPapa-tárcádba kerül": "goes to your PrepperPapa wallet",
  "a PrepperPapa alkalmazásban gyűjtheted be": "collect it in the PrepperPapa app",
  "új imakérés": "new prayer request",
  "A világ most": "The world now",
  "frissítve {ido}": "updated {ido}",
  "Térkép: friss események és imakérések": "Map: recent events and prayer requests",
  "Nincs friss hír. Az adatok internetkapcsolattal frissülnek.": "No fresh news. The data updates when you are online.",
  "Imakérés": "Prayer request",
  "Névtelen": "Anonymous",
  "{n} imádkozott érte": "prayed: {n}",
  "{n} terület": "areas: {n}",
  "Befutó hírek": "Incoming news",
  "élő": "live",
  "MOST": "NOW",
  "Áldott éjszakát!": "Blessed night!",
  "Jó reggelt!": "Good morning!",
  "Áldott napot!": "Blessed day!",
  "Áldott estét!": "Blessed evening!",
  "Ma már {n} percet töltöttél az Igével.": "You have already spent {n} minutes with the Word today.",
  "Ma még nem töltöttél időt az Igével.": "You have not spent time with the Word yet today.",
  "ÉLŐ": "LIVE",
});

// ===== 2026-11-08 Bible multi-select (owner TG 37032) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "{n} vers kijelölve": "Verses selected: {n}",
  "Kijelölés megszüntetése": "Clear selection",
  "A versek a vágólapra kerültek, illeszd be, ahová szeretnéd.": "The verses are on the clipboard; paste them wherever you like."
});

// ===== 2026-11-08 i18n gaps (Thomas 30526, card 4f0b74b5): knowledge-base download error, NÉBIH source name =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "A tudástár most nem tölthető le.": "The knowledge base cannot be downloaded right now.",
  "A leggyakoribb ok, hogy lejárt a belépés. Nyisd meg a belépőt, lépj be újra, és gyere vissza ide.": "The most common reason is that your sign-in has expired. Open the sign-in page, sign in again, and come back here.",
  "Ha nem ez volt, akkor a hálózat nem érte el a kiszolgálót — próbáld újra kicsit később. A már letöltött cikkek addig is olvashatók.": "If that was not it, the network could not reach the server. Try again a little later. Articles already downloaded can still be read in the meantime.",
  "NÉBIH erdőtűz – napi tűzgyújtási tilalom": "NÉBIH wildfire: daily fire ban (Hungary)"
});
// the what's-new sheet intro carries the version number, so it is a pattern
window.PP_FORD_MINTAK.en.push({ minta: /^Verziónként, mi változott és mi lett javítva\. A te verziód: (.+)\.$/,
  csere: "Release by release: what changed and what was fixed. Your version: $1." });

// ===== 2026-11-08 local/internet room texts (Thomas 30555) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Kapcsolódva · egyedül vagy a szobában": "Connected · you are alone in the room",
  "Kapcsolódva · {n} ember a szobában": "Connected · people in the room: {n}",
  "Nincs helyi szoba ezen a hálón — helyi kiszolgáló kell hozzá": "No local room on this network. It needs a local server.",
  "Módosítás": "Edit",
  "szerkesztve": "edited",
  "Módosítva:": "Edited:",
  "pl. ABCD EFGH JKLM NPQR STUV": "e.g. ABCD EFGH JKLM NPQR STUV"
});

// ===== 2026-11-08 what's-new history v43.464 and older (Thomas 30526, card 4f0b74b5; owner TG 36991 'nem marad ki semmi') =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Térkép: a magyar rádióamatőr átjátszók (HA2TO listája) a Rádióamatőr átjátszók rétegben; a rétegek neve a választott nyelven jelenik meg.": "Map: Hungarian amateur radio repeaters (the HA2TO list) in the Amateur radio repeaters layer; layer names appear in the chosen language.",
  "LoRa-szoba: Meshtastic®-kompatibilis nyilvános csatorna LoRa vevőegységgel, Bluetooth-on; egység nélkül tájékoztatót mutat.": "LoRa room: Meshtastic®-compatible public channel with a LoRa receiver unit, over Bluetooth; without a unit it shows an information page.",
  "Rezgés: Finom vagy Erős koppanás választható a Beállításokban, a Bibliában is.": "Vibration: choose Gentle tap or Strong tap in Settings, in the Bible too.",
  "Biblia: a felolvasás belépés nélkül is azonnal elindul a telefon hangján, és a versek között alapból nincs szünet.": "Bible: read-aloud starts at once with the phone's voice even without signing in, and by default there is no pause between verses.",
  "Biblia: Samuel választásakor csak a már kész könyvek szólnak; az ébresztő a még nem kész könyvet Mihály vagy Imre hangján olvassa.": "Bible: when Samuel is chosen, only books already finished are read in his voice; the alarm reads a book not yet finished in Mihály's or Imre's voice.",
  "Biblia: ujjal pöckölve a lap azonnal mozdul, és lendülettel gördül tovább.": "Bible: when you flick with your finger, the page moves at once and keeps scrolling with momentum.",
  "Igetanuló: a kiválasztott igék nyomtatható kártyákra kerülnek (PDF), vágójelekkel.": "Verse memorizer: the selected verses go onto printable cards (PDF), with cut marks.",
  "Tablet: a jegyzet a Biblia mellett nyílik meg; a Noé bárkája és a kirakós elfér a képernyőn.": "Tablet: the note opens next to the Bible; Noah's ark and the puzzle fit on the screen.",
  "Helyi szobák: üzenetszerkesztés Mégse gombbal, a vissza gomb csak a szerkesztésből lép ki.": "Local rooms: message editing with a Cancel button; the back button only leaves editing.",
  "Gerah: saját magadnak nem küldhetsz Gerah-t.": "Gerah: you cannot send Gerah to yourself.",
  "Biblia: új felolvasó hang, Samuel, Imre és Mihály mellett külön választható; azokban a könyvekben szól, amelyek már elkészültek az ő hangján.": "Bible: new read-aloud voice, Samuel, selectable separately alongside Imre and Mihály; he reads the books already finished in his voice.",
  "Kezdőlap: a Biblia- és a játékcsempék képei akkor is betöltődnek, ha a telefon egy helyi (Bluetooth) szobához kapcsolódik.": "Home: the images of the Bible and game tiles load even when the phone is connected to a local (Bluetooth) room.",
  "Rezgés: azokon a telefonokon, amelyek a finom koppintást nem érzékeltetik, erősebb és hosszabb rezgés jelzi az érintést.": "Vibration: on phones that do not render the gentle tap, a stronger and longer vibration signals the touch.",
  "Biblia: a napi időbe csak az olvasás és a felolvasás hallgatása számít bele, a jegyzetírás és a keresés nem.": "Bible: only reading and listening to read-aloud count toward daily time, not writing notes or searching.",
  "Play-ből telepített app: a Frissítés keresése gomb minden megnyomásra megkérdezi a Play áruházat, és ha van újabb változat, azonnal felajánlja.": "App installed from Play: the Check for updates button asks the Play Store on every press, and if there is a newer version it offers it at once.",
  "Az app nem záródik be, ha a belső böngészője leáll (például a térképnél): újratölti a lapot, az adatok megmaradnak.": "The app no longer closes if its internal browser stops (for example on the map): it reloads the page and your data is kept.",
  "Gerah: a még átadásra váró küldés visszavonható, az összeg visszakerül az egyenlegre; a jóváírás ajánlókód nélkül is megérkezik a fiók saját tárcájára.": "Gerah: a transfer still waiting for handover can be cancelled, and the amount returns to your balance; credits arrive in the account's own wallet even without a referral code.",
  "Szobák: a később belépett tag is megtudja, hogy Gerah-szobában van, így neki is lehet a szobán át Gerah-t küldeni.": "Rooms: a member who joined later also learns that it is a Gerah room, so Gerah can be sent to them through the room too.",
  "Szobák: kihívó kép (például fürdőruhás vagy fehérneműs) sem tölthető fel szoba- vagy profilképnek.": "Rooms: provocative images (for example in swimwear or underwear) cannot be uploaded as a room or profile picture either.",
  "Imacsengő: saját oldalon, mozgó háttérrel: a szentek imája füstként száll fel a csillagos égbe.": "Prayer bell: its own page with a moving background: the prayers of the saints rise like smoke into the starry sky.",
  "Noé bárkája: minden pár egy hím és egy nőstény állat: a nőstény oroszlánnak nincs sörénye, a többi nőstényen masni van.": "Noah's ark: every pair is a male and a female animal: the lioness has no mane, the other females wear a bow.",
  "Játékok: a hangszóró gombbal le lehet némítani a játékokat. Némítva áthúzott hangszóró látszik, és nem szól sem a beszéd, sem a taps.": "Games: the speaker button mutes the games. When muted a crossed-out speaker is shown, and neither speech nor applause plays.",
  "Memóriajáték: keskeny telefonon sem csúszik oldalra, és a kártyák görgetés nélkül a képernyőn maradnak.": "Memory game: no sideways scrolling even on narrow phones, and the cards stay on screen without scrolling.",
  "Gerah: egy már jóváírt nap nem szakítja meg a heti letétet; a heti kifizetés napján az érme a teljes kifizetett összeget mutatja.": "Gerah: a day already credited does not break the weekly escrow; on the weekly payout day the coin shows the full amount paid out.",
  "Szobák: a törölt szoba nem jön vissza a Vissza gombbal; az új belépési kérelem azonnal megjelenik a szoba beállításainál, az app visszatérésekor is; az elutasított tag a valódi választ látja.": "Rooms: a deleted room does not come back with the Back button; a new join request appears at once in the room settings, also when you return to the app; a rejected member sees the real answer.",
  "Szobák: a szoba- és profilképeket a szerver ellenőrzi, szexuális tartalmú kép nem tölthető fel.": "Rooms: room and profile pictures are checked by the server; images with sexual content cannot be uploaded.",
  "Szobák: a névmegadás, a belépési kérelem, a sürgős üzenet és a riasztás értesítése a telefon nyelvén jelenik meg.": "Rooms: notifications for name entry, join requests, urgent messages and alarms appear in the phone's language.",
  "Kezdőlap: a csempére koppintva mindig a megérintett csempe nyílik meg; a készletmérők rövid felirata minden nyelven helyes.": "Home: tapping a tile always opens the tile you touched; the short labels of the stock gauges are correct in every language.",
  "Biblia: a felolvasás fénye újra szavanként villan fel; új próféciacsoportok; a letöltőoldal a felajánlott fordítást mutatja.": "Bible: the read-aloud light flashes word by word again; new prophecy groups; the download page shows the offered translation.",
  "Kalauzok: egy nyitott kalauz alatt is megnyílik a megérintett menüpont, és a kalauz nem takarja el a névmegadást.": "Guided tours: the menu item you tap opens even under an open guide, and the guide does not cover name entry.",
  "Gerah: ha a napi célt a PrepperPapa és a Wordlight együtt, a fiókon át összeadott idővel éred el, a napi Gerah is jár (eddig csak a gratuláció jött meg).": "Gerah: if you reach the daily goal with PrepperPapa and Wordlight together, with time added up across your account, you now also get the daily Gerah (until now only the congratulation came).",
  "Biblia: felolvasáskor a fény betűről betűre fut végig az éppen kimondott szón, az elöl haladó betű izzik, utána lassan halványul el.": "Bible: during read-aloud the light runs letter by letter across the word being spoken; the leading letter glows, then slowly fades.",
  "Ima: a vezetett ima az igeverset a hivatkozás nélkül olvassa fel.": "Prayer: the guided prayer reads the verse aloud without its reference.",
  "Wordlight: ha a PrepperPapa nincs a telefonon, a napi cél gratulációja minden Gerah-napon felajánlja a napi Gerah-t a PrepperPapa letöltésével.": "Wordlight: if PrepperPapa is not on the phone, the daily goal congratulation offers the daily Gerah on every Gerah day by downloading PrepperPapa.",
  "Olvasási terv: a tervnapokért már nem jár Gerah, a terv végigolvasásakor jár ráadás; a terv szövegei ezt mondják.": "Reading plan: plan days no longer earn Gerah; finishing the plan earns a bonus; the plan texts say so.",
  "Javítások: a napi cél gratulációs lapján a gomb és a link tördelése; a helyi szobák keresése internet nélkül sem ír hibát.": "Fixes: line wrapping of the button and link on the daily goal congratulation page; searching for local rooms shows no error without internet.",
  "Újratelepítés után a telefon ugyanaz a készülék marad: nem foglal új helyet a készülékkeretben, és a szobák nem zárolódnak.": "After reinstalling, the phone stays the same device: it takes no new slot in the device limit, and rooms are not locked.",
  "Első indítás: a menüsor bemutatója minden nyelven a helyes gombokra mutat, és nem jön elé hirdetés vagy értesítési kérdés; az értesítést belépés és a bemutató után kéri.": "First start: the menu bar tour points to the right buttons in every language, and no ad or notification question comes before it; notification permission is asked after sign-in and the tour.",
  "Wordlight: első indításkor megjelenik a Biblia súgója; az Elhivatottság oldal csak akkor kéri a PrepperPapa telepítését, ha nincs fent.": "Wordlight: the Bible help appears on first start; the Dedication page asks you to install PrepperPapa only if it is not installed.",
  "Bemutató-adatok: az autónak, a hétvégi háznak és a rejteknek is van készlete, a családtagoknak vészhelyzeti kapcsolattartója; a kezdőlapról a betöltés helyben történik.": "Demo data: the car, the weekend house and the cache also have stock, and family members have an emergency contact; loading from the start page happens in place.",
  "Egy képernyőn legfeljebb egy hirdetés-kártya; a térkép súgója a Térkép-funkciók gombra mutat.": "At most one ad card per screen; the map help points to the Map functions button.",
  "Megváltozott az adatkezelési tájékoztató (3.1 Készülékeid): erről egyszer szól az app, a tájékoztató linkjével.": "The privacy notice has changed (3.1 Your devices): the app tells you once, with a link to the notice.",
  "Biblia: a PrepperPapa és a Wordlight ugyanazon a telefonon közösen használja a jegyzeteket, címkéket, kiemeléseket, könyvjelzőket, az olvasási előzményt és terveket, az Igetanulót, a játékokat, az imatémákat, a megjelenítési beállításokat és a napi célt. Az első indításkor a két app adatai összeadódnak.": "Bible: on the same phone, PrepperPapa and Wordlight share notes, labels, highlights, bookmarks, reading history and plans, the Verse memorizer, games, prayer topics, display settings and the daily goal. On first start the data of the two apps is merged.",
  "Biblia: a napi idő az Igével appváltáskor azonnal átkerül a másik appba.": "Bible: Daily time with the Word moves to the other app at once when you switch apps.",
  "Biblia: a háttérzene alapból hangosabban (70%-on) szól.": "Bible: background music plays louder by default (at 70%).",
  "Android: induláskor az app nem kér el egyszerre minden engedélyt; a kamerát, mikrofont, helyet és Bluetooth-t akkor kéri, amikor az adott funkciót használod.": "Android: at start the app no longer asks for all permissions at once; it asks for camera, microphone, location and Bluetooth when you use the feature concerned.",
  "Javítások: a helyi szobák Bluetooth-sora minden nyelven lefordítva; a saját térkép újraépítéskor nem ürül ki azonnal.": "Fixes: the Bluetooth row of local rooms is translated in every language; your own map is not emptied at once when it is rebuilt.",
  "Gerah: ha a telefonon a régi tesztelői PrepperPapa app is fent van, az áruházi app felajánlja a régi Gerah-tárca átvételét, ugyanazzal az azonosítóval, egyenleggel és a még függő fizetésekkel. Ehhez egyszer nyisd meg a régi appot, utána az újat.": "Gerah: if the old tester PrepperPapa app is also on the phone, the store app offers to take over the old Gerah wallet, with the same ID, balance and pending payments. To do this, open the old app once, then the new one.",
  "Biblia: a PrepperPapa és a Wordlight ugyanazon a telefonon közösen használja a letöltött Biblia-hangokat, imahangokat és fordításokat, nem kell kétszer letölteni.": "Bible: on the same phone, PrepperPapa and Wordlight share downloaded Bible voices, prayer voices and translations; no need to download them twice.",
  "Biblia: a felolvasás alapból zenével indul; ha még nincs letöltött zene, az első lejátszáskor letölti.": "Bible: read-aloud starts with music by default; if no music is downloaded yet, it is downloaded on first playback.",
  "Szobák: a tagok listájában egy tagra koppintva a Gerah küldése is elérhető.": "Rooms: tapping a member in the member list also offers Send Gerah.",
  "Javítások: Androidon a térkép megnyitása nem omlik össze, ha egy korábbi térképletöltés félbemaradt.": "Fixes: on Android, opening the map no longer crashes if an earlier map download was interrupted.",
  "Ima-segéd: az ige után csend marad az imádkozásra, a világért mondott imában eseményenként szünet; koppintásra a lépés megáll, a térkép megnyitásakor a zene szól tovább; a világ-helyzetek a legfrissebb eseményekkel kezdődnek.": "Prayer helper: after the verse there is silence for praying, and in the prayer for the world a pause after each event; a tap stops the step, music keeps playing when the map opens; world situations start with the latest events.",
  "Biblia: a fordításválasztóban a King James teljes neve áll, a fejlécben a rövid neve; a Strong-szótár tömörebb, elöl a szó fordítási lehetőségeivel; az Igetanulóban a verset hanggal is be lehet mondani.": "Bible: the translation picker shows the full name of the King James, the header its short name; the Strong dictionary is more compact, with the word's possible translations first; in the Verse memorizer you can also say the verse aloud.",
  "Gyerekjátékok: Noé bárkájába az állatok csak párosával mehetnek be; a hangszóró gomb leállítja a mondatot; a memóriajáték 24 kártyáig választható, ketten felváltva, pontgyűjtéssel, és csak a képernyőre kiférő méreteket kínálja.": "Kids' games: animals can only enter Noah's ark in pairs; the speaker button stops the sentence; the memory game offers up to 24 cards, two players taking turns, with scoring, and only sizes that fit on the screen.",
  "Kalkulátor: a FortiPrep és a konzerv ára az ország saját pénznemében jelenik meg, átszámolt alapárral.": "Calculator: the prices of FortiPrep and canned food appear in the country's own currency, with a converted base price.",
  "Visszajelzés: megújult lap, minden felirat a választott nyelven; képernyőkép küldhető a lap mögötti oldalról.": "Feedback: redesigned page, every label in the chosen language; you can send a screenshot of the page behind it.",
  "Javítások: a súgó lépései a saját elemükre mutatnak; ugyanaz a hirdetés nem jön kétszer egymás után; a Beállítások gombjainak felirata nem lóg ki.": "Fixes: help steps point to their own element; the same ad does not come twice in a row; Settings button labels no longer overflow.",
  "Biblia: a jegyzetek gomb a felolvasás gombja fölött lebeg; a jegyzet Biblia gombja visszavisz ahhoz a vershez, ahonnan jöttél; a Scofield-jegyzet rendezett magyarázatként, koppintható hivatkozásokkal jelenik meg.": "Bible: the notes button floats above the read-aloud button; the note's Bible button takes you back to the verse you came from; the Scofield note appears as an ordered explanation with tappable references.",
  "Biblia: a lebegő ablakok az alsó sáv fölött végződnek, a címük nem csúszik a bezárás gomb alá; a felolvasás minden nyelven felkínálja a Stúdióhangot.": "Bible: floating windows end above the bottom bar, and their title does not slide under the close button; read-aloud offers the Studio voice in every language.",
  "Biblia-játékok: Noé bárkájában az állatok a rámpán felsétálnak, bemennek az ajtón, és párosával a fedélzeten állnak; a memóriajáték rácsa minden képernyőre kifér.": "Bible games: in Noah's ark the animals walk up the ramp, go in through the door and stand in pairs on the deck; the memory game grid fits every screen.",
  "Térkép: a panelek a keresősáv üveges hátterét kapták; éjszakai módban a szintvonalak halványak; a világhelyzet jelmagyarázata rövidebb feliratot kapott.": "Map: panels got the frosted glass background of the search bar; in night mode contour lines are faint; the world situation legend has shorter labels.",
  "Készlet: javaslatok a kereső alatt, ml és l mértékegység a folyadékokhoz, a kalória mező csak az élelmiszereknél.": "Stock: suggestions below the search, ml and l units for liquids, the calorie field only for food.",
  "Szobák: a „N készülék” a ténylegesen bent lévő telepítéseket számolja; bejelentkezés után a nyitott szoba újraindul.": "Rooms: “N devices” counts the installs actually inside; after sign-in the open room restarts.",
  "Javítások: esés-figyelés és a tudomásulvétel jelölője együtt mozog; a Gerah küldésénél a Küldés gomb közvetlenül a címzett után áll; a mentés gombjai keskeny képernyőn is kiférnek.": "Fixes: fall detection and the acknowledgement checkbox move together; when sending Gerah the Send button sits right after the recipient; backup buttons fit on narrow screens too.",
  "Biblia: új Igetanulmányozó. Egy fejezetet két kiválasztott fordításban mutat, telefonon versenként egymás alatt, széles képernyőn egymás mellett, az eltérő versszámozással párosítva; azonos nyelvű fordításoknál kiemeli az eltérő szavakat. Az eredeti görög és héber szöveggel is működik. Biblia prémium nélkül naponta 3 fejezet.": "Bible: new Verse study. It shows a chapter in two chosen translations, on phones verse by verse one under the other, on wide screens side by side, paired across different verse numbering; for translations in the same language it highlights the words that differ. It also works with the original Greek and Hebrew text. Without Bible Premium, 3 chapters a day.",
  "Biblia: több mint 70 új, szabadon letölthető fordítás (köztük görög, héber, latin), a fordításválasztóban országonként és nyelvenként csoportosítva; magyarul a Nyitott Újszövetség is.": "Bible: more than 70 new freely downloadable translations (including Greek, Hebrew, Latin), grouped by country and language in the translation picker; in Hungarian also the Nyitott Újszövetség.",
  "Biblia: a keresés alatt kiválasztott szóalak pontosan arra az alakra szűr.": "Bible: a word form selected under search filters for exactly that form.",
  "Biblia: a lebegő ablakok (fordításválasztó, eredeti szó, versmenü, letöltés) új, csillagos égbolt arculatot kaptak, a bezárás gombja a jobb felső sarokban.": "Bible: the floating windows (translation picker, original word, verse menu, download) have a new starry sky look, with the close button in the top right corner.",
  "Biblia: Stúdióhang mindenkinek, a felvételek és a zenék ingyenesek; a felolvasás, az eredeti szó és a Bibliai térkép napi kerettel ingyenes, a keret fogyását az app előre jelzi.": "Bible: Studio voice for everyone, the recordings and music are free; read-aloud, the original word and the Bible map are free with a daily allowance, and the app warns you in advance as it runs low.",
  "Biblia-játékok: Noé bárkájában 16 állat, nagyobb memóriakártyák, az Igetanuló ingyenes, az Igekvíz új válaszmezőt kapott.": "Bible games: 16 animals in Noah's ark, bigger memory cards, the Verse memorizer is free, the Verse quiz has a new answer field.",
  "Térkép: új, áttetsző üveg arculat; a nagyítógombok helyett csíptetéssel nagyíthatsz; a már betöltött térképrészletek megmaradnak, nem töltődnek le újra; a földutak és ösvények turistatérkép-stílusban látszanak.": "Map: new translucent glass look; pinch to zoom instead of the zoom buttons; map tiles already loaded are kept and not downloaded again; dirt roads and paths are shown in hiking map style.",
  "Térkép: a „Más országok térképei” listájának tetején Magyarország is ott van, és a tájegységeihez visz.": "Map: Hungary is now at the top of the “Maps of other countries” list, and takes you to its regions.",
  "Kopogás: hallás utáni módban nagyobb, négyzetes betűrács, a betűre koppintva ellenőriz.": "Knocking: in listening mode a bigger, square letter grid, which checks when you tap a letter.",
  "Mentés a fiókba: az app adatai a fiókodba menthetők, és új telefonon visszatölthetők.": "Back up to account: the app's data can be saved to your account and restored on a new phone.",
  "Wordlight: a napi célidő a PrepperPapa tárcájában is Gerah-t ér, naponta egyszer.": "Wordlight: the daily goal time also earns Gerah in the PrepperPapa wallet, once a day.",
  "A rendszer Vissza gombja a főlapra visz, nem zárja be az appot.": "The system Back button takes you to the main page instead of closing the app.",
  "Javítások: a helynevek 360 képpont szélességen is kiférnek, a hirdetés nem takarja el a nyitott ablakokat, a nyilvános teszt idejére a Wordlightban is fent van a Visszajelzés gomb.": "Fixes: place names fit even at 360 pixels width, ads no longer cover open windows, and during the public test the Feedback button is in Wordlight too.",
  "Gyülekező: a szoba tagjai listában látszanak, névvel és jelenlét-ponttal, fiókonként egy sorban. Ha az app a háttérben fut, a jelenléted akkor is megmarad.": "Community: room members are shown in a list, with name and presence dot, one row per account. Your presence is kept even when the app runs in the background.",
  "Felolvasás: a kiemelt szó pontosabban követi a felvett hangot.": "Read-aloud: the highlighted word follows the recorded voice more precisely.",
  "iPhone: új alkalmazásikon a PrepperPapának és a Wordlightnak.": "iPhone: new app icon for PrepperPapa and Wordlight.",
  "Wordlight: a napi idő kártyája szellősebb lett; a már letöltött Károli-fordításból eltűnnek a felesleges + jelek.": "Wordlight: the daily time card is more spacious; unnecessary + signs disappear from the already downloaded Károli translation.",
  "Google Play és App Store: a bolti változat a tesztelői mellett is elindul ugyanazon a telefonon, és a teszt idejére abban is ott a Visszajelzés gomb.": "Google Play and App Store: the store version also starts next to the tester version on the same phone, and during the test it also has the Feedback button.",
  "Wordlight: a kezdőlapon a napi idő kártyája a csempékkel együtt jelenik meg, és új indítókép fogad a világító lámpással.": "Wordlight: on the start page the daily time card appears together with the tiles, and a new splash screen greets you with the glowing lantern.",
  "Vezetett ima: a felolvasás az ihletet olvassa fel, a háttérzene akkor is szól tovább, ha a felolvasás véget ért, és a Folytatás gomb onnan indít, ahol abbahagytad. Két új, dob nélküli imazene (zongora és vonósok), mindkettő ingyenes.": "Guided prayer: read-aloud reads the inspiration, background music keeps playing after read-aloud ends, and the Continue button starts where you stopped. Two new prayer music tracks without drums (piano and strings), both free.",
  "Világima: eseményenként maga a hír, egy rövid bátorítás és egy ima; a térkép gomb ugyanannál az eseménynél marad.": "World prayer: for each event the news itself, a short encouragement and a prayer; the map button stays on the same event.",
  "Gyülekező: a szobák csempéi húzással rendezhetők, mint a telefon ikonjai. Ha ugyanazzal a fiókkal új telefonra telepítesz, a szobáid megmaradnak. A szobaszabályok utolsó pontja felsorolja, mit tárol a szerver.": "Community: room tiles can be rearranged by dragging, like the phone's icons. If you install on a new phone with the same account, your rooms are kept. The last point of the room rules lists what the server stores.",
  "Wordlight: négyzetes kezdőcsempék, a Játékok színes rácsa és négy új képes játék gyerekeknek; a jegyzetek listájában a kereső a jegyzetekben keres; beszúrt vers után a szöveg alatta folytatódik. Az Igetanuló diktálása Wordlightban is kéri a mikrofont.": "Wordlight: square start tiles, a colourful Games grid and four new picture games for children; the search in the notes list searches the notes; after an inserted verse the text continues below it. Dictation in the Verse memorizer asks for the microphone in Wordlight too.",
  "Felolvasás: a kiemelés azt a szót követi, amit a hang éppen kimond. Olvasási terv: a Gerah jóváírása előtt kifejezett hozzájárulást kérünk.": "Read-aloud: the highlight follows the word the voice is speaking. Reading plan: we ask for explicit consent before crediting Gerah.",
  "Vagyonkezelő: a + gomb és a menüje a telefon gombsora fölött marad. Károli-fordítás: eltűntek a szövegben maradt felesleges + jelek.": "Asset manager: the + button and its menu stay above the phone's button bar. Károli translation: the unnecessary + signs left in the text are gone.",
  "Gyülekező, a szoba képe: a kép választásakor kivágó nyílik a csempe arányában (húzás, két ujjas nagyítás, Kész/Mégse), és az a rész kerül fel, amit te állítasz be; a meglévő kép a Kivágás gombbal újra igazítható. Új szoba létrehozásakor ugyanez a kivágó nyílik.": "Community, room picture: when choosing a picture a cropper opens in the tile's proportions (drag, two-finger zoom, Done/Cancel), and the part you set is uploaded; the existing picture can be readjusted with the Crop button. The same cropper opens when creating a new room.",
  "Háttérzene: a Biblia prémiumhoz tartozó zenék (Gitár 1-3) lakattal jelennek meg, ha nincs feloldva, és koppintásra a feloldást nyitják; a szabad zenék (Akusztikus gitár, Kelta) változatlanul választhatók.": "Background music: the music included with Bible Premium (Guitar 1-3) appears with a lock if not unlocked, and a tap opens the unlock; the free music (Acoustic guitar, Celtic) can be chosen as before.",
  "Frissítés: ha a letöltés hálózatkiesés után megáll, az app magától újraindítja és onnan folytatja, ahol tartott; a kész letöltésnél ablak kérdez: Megnyitás vagy Később, és a csík is mutatja, hogy letöltve.": "Update: if the download stops after a network drop, the app restarts it by itself and continues where it left off; when the download is done a window asks: Open or Later, and the bar also shows it is downloaded.",
  "Gerah a bibliaolvasásért: a napi olvasás Gerahja mostantól letétbe kerül, és hét egymást követő olvasott nap után kerül a tárcádba; a kezdőlap napi kártyája és az összegző oldal mutatja a letétet és a hátralevő napokat. Ha kimarad egy nap, a letét elvész és a hét újraindul.": "Gerah for Bible reading: daily reading Gerah now goes into escrow and moves to your wallet after seven consecutive reading days; the daily card on the start page and the summary page show the escrow and the days left. If you miss a day, the escrow is lost and the week starts again.",
  "Kezdőképernyő-csempék: a választó menü alapból összecsukva; a telefon kezdőképernyőjére tett parancsikon a csempe saját ikonját kapja (a már kitett parancsikonokat vedd le és tedd ki újra).": "Home screen tiles: the picker menu is collapsed by default; a shortcut placed on the phone's home screen gets the tile's own icon (remove the shortcuts already placed and add them again).",
  "Gyülekező chat: a beírómező és a „Csak neki” sáv nem csúszik a telefon rendszer-gombjai alá.": "Community chat: the input field and the “Only to” bar no longer slide under the phone's system buttons.",
  "Felolvasás: a kiemelés szavanként, balról jobbra halad, az aktuális szó zöld koronafénnyel világít, a már felolvasott szöveg fehér marad, és az aktuális vers mögött halvány zöld derengés jelzi, hol tart a felolvasó.": "Read-aloud: the highlight moves word by word, from left to right; the current word glows with a green corona, text already read stays white, and a faint green glow behind the current verse shows where the reader is.",
  "Biblia: mind a 66 könyv csempéjén finom vonalas jelenetrajz jelenik meg, a fejezet- és versválasztó mögött a könyv rajza dereng zölden, és 144 fejezet-csempe a saját jelenetének rajzát kapta, a jelenet első versénél jelöléssel.": "Bible: the tiles of all 66 books show a fine line drawing of a scene, the book's drawing glows green behind the chapter and verse picker, and 144 chapter tiles got a drawing of their own scene, marked at the scene's first verse.",
  "Biblia: a könyvcsempék, a fejezet- és versszámok és az Ószövetség/Újszövetség/Apokrif fejlécek új, díszes betűtípust kaptak; az orosz és ukrán felület saját, hasonló cirill betűt kap.": "Bible: book tiles, chapter and verse numbers and the Old Testament/New Testament/Apocrypha headers have a new ornamental typeface; the Russian and Ukrainian interfaces get a similar Cyrillic typeface of their own.",
  "Biblia: az apokrif könyvek csempéin és a fejezet-választójuk mögött is megjelent a könyv rajza; a Wordlight fejléc-csillanása a belső oldalakon is a lámpás közepén áll; a versválasztó csempéi áttetszőbbek, átsejlik a könyv rajza.": "Bible: the book's drawing now also appears on the apocrypha tiles and behind their chapter picker; the Wordlight header gleam sits at the centre of the lantern on inner pages too; the verse picker tiles are more translucent, letting the book's drawing show through.",
  "Prémium: ahol az app a prémiumot ajánlja (hirdetés bezárása, korlátok, offline térkép, zárt tudástár-cikk, Biblia-zenék és -letöltések, Vagyonkezelő), a bolti változatban egy koppintásra a Play áruházi, az App Store-változatban az App Store vásárlás nyílik; a tesztelői változatban marad a kód beváltása.": "Premium: wherever the app offers premium (closing an ad, limits, offline map, locked knowledge base article, Bible music and downloads, Asset manager), one tap opens the Play Store purchase in the store version and the App Store purchase in the App Store version; the tester version keeps code redemption.",
  "Igetanuló: három fokozat választható (könnyű: hiányzó betűk; nehezebb: a vers első fele látszik, a másodikat te írod; nehéz: csak az igehely), és a megoldás ellenőrizhető: beírva mindkét appban, a Wordlightban mikrofonnal, hanggal bemondva is; az elírást és félrehallást az ellenőrzés tűri, és szavanként mutatja, mi tért el.": "Verse memorizer: three levels to choose from (easy: missing letters; harder: the first half of the verse is shown, you write the second; hard: only the reference), and the answer can be checked: typed in both apps, and in Wordlight also spoken aloud with the microphone; the check tolerates typos and misheard words and shows word by word what differed.",
  "Készültség: a számok napokban, nem százalékban: a gyűrű közepén és a helyszín sorában az áll, hány napra elég mindenből (víz, étel, fűtés legkevesebbje), a Víz/Étel/Fűtés/Áram sorok és a részletező is napot mutatnak, tömör jelöléssel; a gyűrű íve és színe a négy tétel egyenlő súlyú átlaga, az árammal együtt.": "Readiness: figures in days, not percentages: the centre of the ring and the location row show how many days everything lasts (the lowest of water, food, heating), the Water/Food/Heating/Power rows and the breakdown also show days, in compact notation; the arc and colour of the ring are the equally weighted average of the four items, power included.",
  "Biblia: új, kilencedik csempe, a Játékok: felnőtt és gyerek móddal, öt játékkal: az Igekvízzel, ahol találomra választott igét kell kiegészíteni vagy felmondani az Igetanuló három fokozatával; a Ki mondta? játékkal, ahol egy idézethez négy név közül kell a beszélőt eltalálni; a Hol van? játékkal, ahol egy igéhez a könyvet, felnőtt módban a fejezetet is el kell találni; az Igehely-párosítóval, ahol összekevert igéket és igehelyeket kell párba rakni; és a Könyvsorrenddel, ahol a Biblia könyveit kell sorba húzni; pontozással és sorozattal; az Igetanulóban továbbra is a saját, Tanulom-mal jelölt igéid vannak.": "Bible: new ninth tile, Games: with adult and child mode and five games: Verse quiz, where you complete or recite a randomly chosen verse using the three levels of the Verse memorizer; Who said it?, where you guess the speaker of a quote from four names; Where is it?, where you guess the book of a verse, and in adult mode the chapter too; Reference match, where you pair shuffled verses with their references; and Book order, where you drag the books of the Bible into order; with scoring and streaks; the Verse memorizer still holds your own verses marked with Learn it.",
  "Hirdetések: a tulajdonosi nézet „gyakorisági korlát kikapcsolva” teszt-kapcsolója egy óra után magától lejár, így a felugró hirdetés az ingyenes szinten újra a rendes ritmusban jön.": "Ads: the owner view's “frequency limit off” test switch expires by itself after one hour, so the pop-up ad comes at the normal pace again on the free tier.",
  "Gyülekező chat: az üzenet módosítása elvethető (Mégse a beíró fölött, vagy a Vissza gomb), üres szöveg nem menthető; módosításkor az üzenet utólag is fontosnak jelölhető, és ez a többieknél is látszik. A túl sűrű küldés korlátja készülékenként számol, és egy rövid várakozás után az app magától újrapróbálja.": "Community chat: editing a message can be discarded (Cancel above the input, or the Back button), and empty text cannot be saved; when editing, a message can also be marked important afterwards, and the others see this too. The limit on sending too often counts per device, and after a short wait the app retries by itself.",
  "Szobák: a csatlakozott szobák sorrendje hosszú nyomással átrendezhető (nyilakkal vagy húzással, Kész-szel kilépve), és a sorrend megmarad; a szoba neve a csempén legfeljebb két sor, új szobának legfeljebb 32 karakteres név adható.": "Rooms: the order of joined rooms can be rearranged with a long press (with arrows or by dragging, leaving with Done), and the order is kept; a room name on its tile takes at most two lines, and a new room can have a name of at most 32 characters.",
  "Felolvasás: a felolvasott szöveg soronként szürkésből fehérré világosodik, ahogy a felolvasó halad; a köd már csak a szöveget halványítja, a hátteret nem; versváltáskor nincs késés, a kiemelés a görgetéssel együtt ér oda.": "Read-aloud: the text being read brightens line by line from greyish to white as the reader moves on; the fog now dims only the text, not the background; there is no delay when the verse changes, and the highlight arrives together with the scrolling.",
  "Biblia zenék: a zárolt zenék „Biblia prémiummal” feliratára és a feloldó sorra koppintva megnyílik a feloldás a Beállításokban.": "Bible music: tapping the “with Bible Premium” label of locked music or the unlock row opens the unlock in Settings.",
  "Igetanuló: három nehézségi fokozat (könnyű: hiányos betűk; nehezebb: a vers első fele látszik, a másodikat kell befejezni; nehéz: csak az igehely látszik), a választás megmarad. A megoldás beírható és ellenőrizhető: az elírást és a félrehallott szót tűri, a hiányzó vagy eltérő szavakat kiemeli. A Wordlightban mikrofon-gombbal be is mondható.": "Verse memorizer: three difficulty levels (easy: missing letters; harder: the first half of the verse is shown and you finish the second; hard: only the reference is shown), and your choice is kept. The answer can be typed and checked: it tolerates typos and misheard words and highlights missing or different words. In Wordlight it can also be spoken with a microphone button.",
  "Zöld képernyő: a háttérből újranyitott app nem marad többé üres zöld lapon, ott folytatja, ahol voltál; a belépés sem vész el, és ha a szerver mégis kiléptetne, az app maga ajánlja fel az e-mailes belépést.": "Green screen: the app reopened from the background no longer stays on an empty green page, it continues where you were; your sign-in is not lost either, and if the server does sign you out, the app itself offers e-mail sign-in.",
  "Gombok: megnyomáskor rövid animáció a kék négyzet helyett, a PrepperPapában és a Wordlightban is.": "Buttons: a short animation when pressed instead of the blue square, in both PrepperPapa and Wordlight.",
  "Állapotsáv: az óra, az akkumulátor és a kamera-kivágás sávja a lap háttérszínét veszi fel, nappal és éjszaka is.": "Status bar: the bar with the clock, battery and camera cutout takes the page's background colour, by day and by night.",
  "Felolvasás: a köd fixen a képernyő közepén marad, elő- és eltűnéssel vált, a szöveg alatta fut, oldalt nincs sötét szél; a felolvasás-beállítások gomb minden nyelven a saját nyelvén áll és megnyílik (oroszul is); nyelvenként a jobb hang szól.": "Read-aloud: the fog stays fixed in the middle of the screen and switches by fading in and out, the text runs beneath it, with no dark edge at the sides; the read-aloud settings button shows in its own language in every language and opens (in Russian too); for each language the better voice plays.",
  "Biblia: versszámra koppintva kijelölhető a vers (jegyzetbe beszúráshoz); a Charon-letöltés sora és a számlálója javítva; a vezetett ima zenével és felolvasással külön is indítható; a linkből kapott feloldókód nem ragad be; a nyitókép kilenc csempés; Androidon a főoldali csempék a telefon kezdőképernyőjére tehetők.": "Bible: tap a verse number to select the verse (for inserting into a note); the Charon download row and its counter are fixed; the guided prayer can also be started separately with music and read-aloud; an unlock code received from a link no longer gets stuck; the splash screen has nine tiles; on Android the main page tiles can be placed on the phone's home screen.",
  "Térkép: indulási dátum-idő mező az útvonal-tervezőben; elhúzás után egy percig nem húz vissza a GPS-re; háttér-navigáció kikapcsolt kijelzővel, hangos utasítással (Android); keresőmező más országok térképéhez; offline térképek országonként csoportosítva, a letöltés leállítható, a törlés azonnal látszik, egy gombbal az egész ország törölhető; a letöltött külföldi alaptérkép kirajzolódik; a külföldi turistautak kis zoomon nem akasztják meg a térképet; Megosztás gomb az Új pont ablakban; a „Pont ide, ahol vagyok” gomb nem ragad be; a vissza-gesztus a panelt zárja, nem lép ki.": "Map: departure date and time field in the route planner; after dragging it does not snap back to GPS for a minute; background navigation with the screen off, with spoken directions (Android); search field for maps of other countries; offline maps grouped by country, downloads can be stopped, deletion shows at once, and a whole country can be deleted with one button; downloaded foreign base maps are drawn; foreign hiking trails no longer stall the map at low zoom; Share button in the New point window; the “Point where I am” button no longer gets stuck; the back gesture closes the panel instead of leaving.",
  "SOS: mentőkártya fényképpel, QR-kóddal és a mentőknek fontos adatokkal egy blokkban.": "SOS: rescue card with photo, QR code and the data important for rescuers in one block.",
  "Gerah: a jóváírásról értesítés érkezik a telefonra; a Biblia prémium bolti vásárlása előkészítve (a gomb még nem látszik, a kódos feloldás változatlan).": "Gerah: a notification arrives on the phone about credits; store purchase of Bible Premium is prepared (the button is not shown yet, code unlocking is unchanged).",
  "Egyéb: a rendszer felugró ablakai helyett mindenhol az app saját ablakai; Központ: jelentkezések; profilkép-kivágó; a fejléc gombjai mindenhol koppinthatók; Noé-jelenlét felirat javítva; Számlázz-kód szűkítés.": "Other: the app's own windows everywhere instead of system pop-ups; Centre: applications; profile picture cropper; header buttons can be tapped everywhere; Noah presence label fixed; Számlázz code narrowing.",
  "Igetanuló: új csempe a Biblia főoldalán, a szavak lépésről lépésre tűnnek el, az ismétlés napok múlva visszatér; prémium, ingyen hetente egy új ige. A kiemelések a Jegyzeteim alatt maradnak.": "Verse memorizer: new tile on the Bible main page, words disappear step by step, and review comes back days later; premium, one new verse a week free. Highlights stay under My notes.",
  "Jegyzetek: nyomtatható és PDF-be menthető jegyzet; a beszúrt igéknél is megjelenik a jegyzet-jel a fejezetben.": "Notes: notes can be printed and saved as PDF; the note mark also appears in the chapter for inserted verses.",
  "Fejléc minden oldalon: a felső sáv görgetésre elhalványul, a tartalom fölé csúszik, és az oldal feje a legtetejéig ér; a PrepperPapa felirat és a Készlet szűrői nem vágódnak le keskeny telefonon.": "Header on every page: the top bar fades when scrolling and slides over the content, and the page header reaches the very top; the PrepperPapa label and the Stock filters are not cut off on narrow phones.",
  "Imaszoba: újra egyben, lefelé görgethető a teljes ima a huszonnyolc imával; a háttérzene és a felolvasás a felolvasó panelből indul; minden imában egy saját imatémád is megjelenik.": "Prayer room: in one piece again, the whole prayer with the twenty-eight prayers can be scrolled down; background music and read-aloud start from the read-aloud panel; one of your own prayer topics appears in every prayer.",
  "Felolvasás: a hangválasztó (telefon hangja vagy PrepperPapa-hang) minden nyelven látszik, nem csak magyarul.": "Read-aloud: the voice picker (phone voice or PrepperPapa voice) is shown in every language, not only in Hungarian.",
  "Könyvválasztó: nyelvváltás után a könyvek csempéi is az új fordítást mutatják; az apokrif könyvek felirata ugyanakkora, mint a bibliai könyveké.": "Book picker: after a language change the book tiles also show the new translation; apocrypha labels are the same size as those of the biblical books.",
  "Biblia-csempék és napi panel: új, egységes ikonkészlet, áttetsző csempék és halványzöld feliratok, mint a kezdőlapon.": "Bible tiles and daily panel: a new, uniform icon set, translucent tiles and pale green labels, as on the start page.",
  "Wordlight: a fejléc lámpásában a kereszt ragyog, minden harmadik felfénylésnél megcsillan.": "Wordlight: the cross shines in the header lantern and glints at every third flash.",
  "Háztartás: élénkebb csempék generált, zöld tónusú háttérképpel és nagy darabszámmal; a tagok fényképe feltöltéskor nagyítható és beállítható, mint a szobák képe; a csempék tartalma középre igazítva.": "Household: brighter tiles with a generated green-toned background image and large counts; members' photos can be zoomed and adjusted on upload, like room pictures; tile content is centred.",
  "Gerah: a tárcában kisebb érme, arany Gerah felirat és egyenleg; a napelem ikonján új napsugarak.": "Gerah: a smaller coin in the wallet, gold Gerah label and balance; new sunrays on the solar panel icon.",
  "Irattárca: gomb a fejlécben; Noah a Tudástár tetején egy sorban, nem csempeként.": "Document wallet: a button in the header; Noah at the top of the Knowledge base in one row, not as a tile.",
  "Kezdőlap fejléce: a Frissítés keresése gomb helyén Noah gombja áll; a frissítés keresése a Beállításokban és a Több menüben érhető el, az automatikus frissítés változatlan. A fejléc gombjai görgetés nélkül újra reagálnak.": "Start page header: Noah's button now stands where the Check for updates button was; checking for updates is available in Settings and the More menu, automatic updates are unchanged. Header buttons respond again without scrolling.",
  "iPhone: ütemezett értesítések és imaemlékeztető; felolvasás zárolt képernyőn is, zárképernyős gombokkal; bibliai, túra- és SOS-ébresztő; háttér-hely, légnyomás-mintavétel és térkép-letöltés a háttérben.": "iPhone: scheduled notifications and prayer reminder; read-aloud on the locked screen too, with lock screen buttons; Bible, hiking and SOS alarm; background location, air pressure sampling and map download in the background.",
  "iPhone: esés-észlelés és SOS, tükör, riasztó, Face ID a tárca-PIN-hez, megosztás és megosztás-fogadás, mesh Bluetooth-on, nyomtatás.": "iPhone: fall detection and SOS, mirror, alarm, Face ID for the wallet PIN, sharing and receiving shares, mesh over Bluetooth, printing.",
  "Gerah: minden nyelven ez a neve, és a napi Biblia-cél sávos: 10, 20 és 30 perc olvasásért 1, 2, illetve 3 Gerah.": "Gerah: this is its name in every language, and the daily Bible goal is tiered: 1, 2 or 3 Gerah for 10, 20 and 30 minutes of reading.",
  "Imaszoba: 28 vezetett ima négyhetes körben, útmutatással és szó szerinti imával, külön lépés a világért; lépésenként egy oldal, ujjal lapozható, halk háttérzenével.": "Prayer room: 28 guided prayers in a four-week cycle, with guidance and a word-for-word prayer, a separate step for the world; one page per step, swipeable, with soft background music.",
  "Jegyzetek: alacsonyabb fejléc, Biblia-gomb a jegyzetből az igére és jegyzet-gomb a fejezetnézetben, egysoros címkeszűrő.": "Notes: a lower header, a Bible button from the note to the verse and a note button in the chapter view, a one-row label filter.",
  "Wordlight: soha nincs reklám; az országodhoz tartozó imatéma naponta legfeljebb egyszer, csendben ajánlkozik.": "Wordlight: never any ads; the prayer topic for your country is offered quietly, at most once a day.",
  "Wordlight: görgetésnél a fejléc tömör marad, csak a logó és a gombok halványulnak.": "Wordlight: when scrolling the header stays solid, only the logo and the buttons fade.",
  "Felolvasás: a választott hang nem áll vissza az alapra navigálás vagy kilépés után.": "Read-aloud: the chosen voice no longer resets to the default after navigating or leaving.",
  "Fordítások: az angol és a többi nyelvű felületen maradt magyar feliratok javítva (tárca, Vagyonkezelő, felolvasás).": "Translations: Hungarian labels left on the English and other language interfaces fixed (wallet, Asset manager, read-aloud).",
  "iPhone: a helymeghatározás engedélykérése az app nevével jelenik meg.": "iPhone: the location permission request shows the app's name.",
  "Biblia: a kommentárok helyett jegyzetek, címkékkel és csoportos kereséssel.": "Bible: notes instead of commentaries, with labels and grouped search.",
  "Biblia: új Imaszoba, vezetett imával, saját imatémákkal és napi ima-emlékeztetővel.": "Bible: new Prayer room, with guided prayer, your own prayer topics and a daily prayer reminder.",
  "Biblia-kereső: egy találatból visszalépve a találati listára jutsz, ugyanott, ahol abbahagytad.": "Bible search: going back from a result takes you to the results list, at the same place where you left off.",
  "Felolvasás: a hangok állandó betűjelet kapnak (A hang, B hang…), mindegyiket meg lehet hallgatni; a választott hang tényleg felolvas.": "Read-aloud: the voices get permanent letter labels (Voice A, Voice B…), each can be previewed; the chosen voice really reads.",
  "Bibliai ébresztő: köszöntéssel, csengő nélkül, lassan felhangosodva indul; az időválasztó ujjal húzható.": "Bible alarm: starts with a greeting, without a ring, slowly getting louder; the time picker can be dragged with a finger.",
  "Olvasási terv: a ténylegesen elolvasott tervnapokért Gerah jár.": "Reading plan: plan days actually read earn Gerah.",
  "Elhivatottság: rendezett fejléc, nincs üres sáv a kártyák fölött.": "Dedication: a tidy header, no empty band above the cards.",
  "Fordítások: a Biblia-beállítások és a vészhelyzeti igék címei minden nyelven; angolul a Gerah neve Gerah.": "Translations: the titles of the Bible settings and the emergency verses in every language; in English the name of Gerah is Gerah.",
  "Gerah-érme: zöld olajág a galamb csőrében.": "Gerah coin: a green olive branch in the dove's beak.",
  "Biblia prémium: a tulajdonosi be/ki kapcsolók újra látszanak, és nem lehet őket kívülről átállítani.": "Bible Premium: the owner on/off switches are visible again and cannot be changed from outside.",
  "Biblia: a fekete sáv az olvasónézet szélén megszűnt.": "Bible: the black band at the edge of the reading view is gone.",
  "Biblia-kereső: szóváltozatok a mező alatt, ékezet nélkül is talál.": "Bible search: word variants below the field, and it finds words typed without accents too.",
  "Biblia: nagyobb könyvcsempék, az előzmények napok szerint.": "Bible: bigger book tiles, history grouped by day.",
  "Napi olvasási idő: 90 másodperc tétlenség után megáll.": "Daily reading time: stops after 90 seconds of inactivity.",
  "Wordlight: az olvasási terv újraindítás után is a terv napjára nyílik; a cél sáv színe javítva.": "Wordlight: the reading plan opens on the plan's day even after a restart; the colour of the goal bar is fixed.",
  "Térkép: a műholdkép tovább nagyítható szürke „nincs adat” mező nélkül.": "Map: the satellite image can be zoomed further without a grey “no data” field.",
  "Visszajelzés: egy képernyőn elfér; a „Még mindig hibás” saját ablakot nyit szövegmezővel; a morze-nézet mérési adatokat csatol.": "Feedback: fits on one screen; “Still broken” opens its own window with a text field; the Morse view attaches measurement data.",
  "Wordlight: a kezdőlapon a csempék alatt megjelenik a napi olvasási cél sávja.": "Wordlight: the daily reading goal bar appears below the tiles on the start page.",
  "Biblia-kereső: a keresett szó kiemelt színnel látszik a találatokban.": "Bible search: the searched word is shown in a highlight colour in the results.",
  "Biblia-térkép: internettel a világtérkép letöltése nélkül is látszik az alaptérkép (pl. Midián alatt a tenger, a part és a városok).": "Bible map: with internet the base map is shown even without downloading the world map (for example the sea, the coast and the cities below Midian).",
  "Hirdetések: ha a telefon tárolójában hibás vagy üres kép maradt, az app újra letölti.": "Ads: if a broken or empty image is left in the phone's storage, the app downloads it again.",
  "Frissítés: ha az app nem éri el a frissítési listát, 30 másodperc múlva újra próbálja, és a hibát naplózza.": "Update: if the app cannot reach the update list, it retries after 30 seconds and logs the error.",
  "Biblia: a felolvasó panelen a háttérzene gombjain a feliratok kiférnek, a panel nem csúszik oldalra.": "Bible: on the read-aloud panel the labels of the background music buttons fit, and the panel does not slide sideways.",
  "Biblia: hosszú, több fejezeten át tartó olvasásnál a szöveg alja nem homályosodik el.": "Bible: during long reading across several chapters the bottom of the text no longer gets blurred.",
  "Biblia: új olvasási tervek: Ószövetség és Újszövetség párhuzamosan (napi egy-egy fejezet), Próféciák 41 nap alatt, Jézus példázatai, A Biblia imádságai, Pál levelei 30 nap alatt.": "Bible: new reading plans: Old Testament and New Testament in parallel (one chapter of each a day), Prophecies in 41 days, The parables of Jesus, The prayers of the Bible, Paul's letters in 30 days.",
  "Biblia: új elhivatottság-oldal a statisztikákkal; a PrepperPapa kezdőlapján a Biblia csempék alatt a napi olvasási idő, a fejezetnézetben kerek lebegő gyűrű; az aktuális könyvet vastag zöld keret jelöli.": "Bible: new dedication page with statistics; on the PrepperPapa start page the daily reading time below the Bible tiles, a round floating ring in the chapter view; the current book is marked by a thick green frame.",
  "Wordlight: az első megnyitáskor a nyitókép tovább látszik, és lágy áttűnéssel adja át a helyét a Bibliának.": "Wordlight: on first opening the splash screen stays longer and gives way to the Bible with a soft cross-fade.",
  "Frissítés: ha a telefon a Wi-Fi-t „internet nélkülinek” látja, és a letöltés nem indul el, az app 20 másodperc után maga tölti le a frissítést.": "Update: if the phone sees the Wi-Fi as “no internet” and the download does not start, the app downloads the update itself after 20 seconds.",
  "Biblia: a felolvasás beállításai átláthatóbb sorrendben: előbb a hang, aztán a versek közti szünet, végül a háttérzene; a panel nem átlátszó.": "Bible: the read-aloud settings in a clearer order: first the voice, then the pause between verses, finally the background music; the panel is not transparent.",
  "Biblia: a felolvasott vers körüli köd széle lágyabb és kerekebb.": "Bible: the edge of the fog around the verse being read is softer and rounder.",
  "Biblia: az automatikus görgetés felolvasás közben lágyan gyorsul és lassul.": "Bible: automatic scrolling during read-aloud speeds up and slows down smoothly.",
  "Biblia: új „Ébresztő kipróbálása” gomb az ébresztő oldalán, és zene-előhallgatás a felolvasó panelen.": "Bible: new “Try the alarm” button on the alarm page, and music preview on the read-aloud panel.",
  "Biblia: hat új háttér- és ébresztőzene (Epikus 4-6, Gitár 1-3) a Biblia prémiumhoz.": "Bible: six new background and alarm music tracks (Epic 4-6, Guitar 1-3) for Bible Premium.",
  "Gerah: minden nap, amikor eléred a napi bibliaolvasási célt, Gerah-t bányászol (10 perces céltól 1, 20 perctől 2, 30 perctől 3 gerah-t), Biblia prémium nélkül is; a tárcában leírás mutatja, hogyan gyűjthetsz Gerah-t.": "Gerah: every day you reach the daily Bible reading goal you mine Gerah (1 gerah from a 10-minute goal, 2 from 20 minutes, 3 from 30 minutes), even without Bible Premium; a description in the wallet shows how you can collect Gerah.",
  "Beállítások: feliratkozhatsz a hírlevélre; a Wordlightban a fiók és a hírlevél is itt érhető el. A fiók törlése a hírlevélről is leiratkoztat.": "Settings: you can subscribe to the newsletter; in Wordlight the account and the newsletter are also available here. Deleting the account also unsubscribes you from the newsletter.",
  "Belépés: a belépőkódot hozó levélben egy gomb egyből megnyitja az appot.": "Sign-in: a button in the e-mail with the sign-in code opens the app directly.",
  "Helyi szobák (Wi-Fi, Bluetooth): egy üzenetet vagy tagot hosszan nyomva jelenteni vagy letiltani lehet; a letiltottak a Beállításokban oldhatók fel.": "Local rooms (Wi-Fi, Bluetooth): long-press a message or a member to report or block; blocked ones can be unblocked in Settings.",
  "A riasztó helyett egyszerű Hanggenerátor: söprő vagy folyamatos hang, állítható frekvenciával.": "A simple Tone generator instead of the alarm: sweeping or continuous tone, with adjustable frequency.",
  "Térkép: területet csak a saját térképről lehet előre letölteni; a felirat „© OpenStreetMap contributors”.": "Map: areas can be downloaded in advance only from your own map; the credit reads “© OpenStreetMap contributors”.",
  "Térkép: ha a saját térkép üresen maradna, az app magától helyreállítja.": "Map: if your own map would stay empty, the app restores it by itself.",
  "Esésérzékelés: kikapcsolt képernyőnél is pontosan méri a zuhanás idejét.": "Fall detection: measures the fall time precisely even with the screen off.",
  "Prémiummal soha nem jelenik meg felugró ablakos ajánlat.": "With premium a pop-up offer never appears.",
  "Névjegy: új link az app adatkezelési tájékoztatójához, a PrepperPapában és a Wordlightban is.": "About: new link to the app's privacy notice, in both PrepperPapa and Wordlight.",
  "Wordlight: csak azokat az engedélyeket kéri, amelyeket ténylegesen használ.": "Wordlight: asks only for the permissions it actually uses.",
  "iPhone: a helymeghatározás engedélykérő szövege pontosan leírja, hogy SOS-nál és a Helyzetem küldésénél a szoba tagjai megkapják a helyzetet.": "iPhone: the location permission text states exactly that with SOS and Send my location the room members receive your location.",
  "Biblia: a fogaskerék körüli napi olvasásidő-gyűrű újra a hátralévő időt mutatja: reggel tele, olvasás és hallgatás közben fogy, a napi célnál arany.": "Bible: the daily reading time ring around the gear again shows the time left: full in the morning, it decreases while reading and listening, and turns gold at the daily goal.",
  "Napi idő az Igével: a gyűrű, a napi cél és a gratuláció Biblia prémium nélkül is működik, alapból 5 perces céllal.": "Daily time with the Word: the ring, the daily goal and the congratulation work even without Bible Premium, with a 5-minute goal by default.",
  "Térkép: nagyítás és mozgatás közben a túraútvonalak már nem tűnnek el egy pillanatra.": "Map: hiking routes no longer disappear for a moment while zooming and panning.",
  "Biblia: a reggeli ébresztő felolvasása is beleszámít a napi olvasásidőbe és a Gerah-ba.": "Bible: the morning alarm read-aloud also counts toward daily reading time and Gerah.",
  "Wordlight: az app a tesztidőszaki zár nélkül nyílik meg.": "Wordlight: the app opens without the test period lock.",
  "Wordlight: a Kód beváltása a Wordlight saját beállításaiban is működik.": "Wordlight: Redeem code also works in Wordlight's own settings.",
  "Wordlight: bejelentkezés nélkül a kódbeváltás és a hangminta a bejelentkező ablakot, illetve egy Belépés gombot mutat, nem „hamarosan” feliratot.": "Wordlight: without sign-in, code redemption and the voice sample show the sign-in window or a Sign in button, not a “coming soon” label.",
  "Wordlight: első indításkor nem kér mozgás- és fitnesz-engedélyt (a légnyomásmérő nem indul el).": "Wordlight: on first start it does not ask for motion and fitness permission (the barometer does not start).",
  "Wordlight: a Névjegy a Wordlight adatait mutatja.": "Wordlight: About shows Wordlight's details.",
  "Wordlight: havonta egyszer jelzi, hány Gerah-t kaphattál volna a PrepperPapában a teljesített olvasási napjaidért.": "Wordlight: once a month it shows how many Gerah you could have received in PrepperPapa for your completed reading days.",
  "Biblia: az automatikus görgetés lágyan indul, lágyan vált sebességet és lágyan áll meg; koppintásra a szöveg finoman lefékez, húzásra azonnal megáll.": "Bible: automatic scrolling starts smoothly, changes speed smoothly and stops smoothly; a tap brakes the text gently, dragging stops it at once.",
  "Biblia: mind a nyolc csempe új, egységes vonalas ikont kapott, nagyobb méretben, a PrepperPapában és a Wordlightban is.": "Bible: all eight tiles got a new, uniform line icon, in a larger size, in both PrepperPapa and Wordlight.",
  "Biblia: a napi cél gyűrűje a fogaskerék gomb lekerekített négyzetét követi.": "Bible: the daily goal ring follows the rounded square of the gear button.",
  "Wordlight: az app neve mindenhol Wordlight, új indítóikon lámpás nélkül, alatta BIBLIA felirattal.": "Wordlight: the app is called Wordlight everywhere, with a new launcher icon without the lantern, labelled BIBLE below.",
  "Wordlight: a nyitólapon nincs ébresztő és fogaskerék; az ébresztő az olvasási tervnél, a beállítások az olvasásból érhetők el.": "Wordlight: no alarm and no gear on the opening page; the alarm is available at the reading plan, the settings from the reading view.",
  "Wordlight: a beállításokból kikerültek a PrepperPapa készlet- és teszt-adat gombjai.": "Wordlight: the PrepperPapa stock and test data buttons have been removed from the settings.",
  "iPhone: a fióktörlés megerősítő ablaka nem csúszik a menüsor mögé, és lapváltáskor bezárul.": "iPhone: the account deletion confirmation window no longer slides behind the menu bar, and closes when you change pages.",
  "A nyelvválasztóban a magyar minden nyelven Magyar néven szerepel.": "In the language picker Hungarian is listed as Magyar in every language.",
  "Felolvasás: a köd sarkai lekerekítve, nincs szögletes sarok.": "Read-aloud: the corners of the fog are rounded, no square corners.",
  "Felolvasás: a köd alatt minden betű teljes színen áll, és a köd csak a szöveg szélétől kifelé halványul el, oldalt is.": "Read-aloud: under the fog every letter is in full colour, and the fog fades only outward from the edge of the text, at the sides too.",
  "A felolvasott vers ködös kiemelése oldalt is lágyan elhalványul, nincs éles széle.": "The foggy highlight of the verse being read also fades softly at the sides, with no sharp edge.",
  "Biblia-ébresztő: az ébresztő beállításainál egy ige mutatja, miért jó az Igével kelni (Zsoltárok 143,8), minden nyelven a saját Bibliájából.": "Bible alarm: in the alarm settings a verse shows why it is good to wake up with the Word (Psalm 143:8), in every language from its own Bible.",
  "Kalkulátorok: minden kalkulátor tetején keskeny fejléc-szalag a saját képével.": "Calculators: a narrow header ribbon with its own picture at the top of every calculator.",
  "Egyes telefonokon (például Huawei P20) induláskor láthatatlan maradt a belépő képernyő, és nem reagáltak az ikonok: a belépő réteg és az oldal most kényszerítve rajzolódik ki indításkor és visszatéréskor.": "On some phones (for example Huawei P20) the sign-in screen stayed invisible at start and the icons did not respond: the sign-in layer and the page are now forced to draw at start and on return.",
  "Biblia-ébresztő: ha a csengőhang nem indulna el, tartalék hang szól a riasztási hangerőn, így rezgő telefonon is hallható.": "Bible alarm: if the ringtone does not start, a backup sound plays at alarm volume, so it can be heard on a phone set to vibrate too.",
  "Ébresztő bekapcsolásakor az app azonnal szól, ha hiányzik hozzá egy engedély (értesítés, pontos ébresztő, teljes képernyős értesítés), és egy gombbal a beállításhoz visz.": "When you turn on an alarm, the app tells you at once if a permission is missing for it (notification, exact alarm, full-screen notification), and one button takes you to the setting.",
  "Biblia-ébresztő: rezgő vagy néma telefonon is megszólal (a hang a riasztási hangerőn szól), a PrepperPapában és a Wordlight Bibliában is.": "Bible alarm: rings even on a phone set to vibrate or silent (the sound plays at alarm volume), in both PrepperPapa and the Wordlight Bible.",
  "Fiók törlése: a Profil > Fiók kártyán véglegesen törölheted a fiókodat; előtte biztonsági mentést készíthetsz.": "Delete account: on the Profile > Account card you can delete your account permanently; you can make a backup first.",
  "Napi Gerah: minden nap, amikor eléred a napi Ige-célodat, egy Gerah-t kapsz; a reggeli ébresztő felolvasása is beleszámít.": "Daily Gerah: every day you reach your daily Word goal you get one Gerah; the morning alarm read-aloud also counts.",
  "A felolvasott vers ködös kiemelése most egyben átcsúszik a következő versre, és minden betű teljesen a ködön van.": "The foggy highlight of the verse being read now slides over to the next verse in one piece, and every letter is fully on the fog.",
  "A jó minőségű felvett hang angolul a teljes Bibliára letölthető, a többi nyelven a Jelenések könyvére; más nyelven két hang közül választhatsz: a telefon hangja vagy a felvett hang.": "The high-quality recorded voice can be downloaded for the whole Bible in English, and for the Book of Revelation in the other languages; in other languages you can choose between two voices: the phone voice or the recorded voice.",
  "A nyelvválasztóban minden nyelv a saját nevén szerepel.": "In the language picker every language is listed under its own name.",
  "Biblia: az eredeti szó (Strong-szótár) mostantól mind a nyolc nyelv saját Bibliáján működik; a szócikk magyarul és németül fordítva, a többi nyelven angolul.": "Bible: the original word (Strong dictionary) now works on the own Bible of all eight languages; the entry is translated into Hungarian and German, in the other languages it is in English.",
  "Napi idő az Igével: a cél elérésekor teljes képernyős gratuláció, és a reggeli ébresztő felolvasása is beleszámít a napi időbe.": "Daily time with the Word: a full-screen congratulation when the goal is reached, and the morning alarm read-aloud also counts toward daily time.",
  "Wordlight: a beállítások alján ajánló a teljes PrepperPapa alkalmazásról.": "Wordlight: a recommendation of the full PrepperPapa app at the bottom of the settings.",
  "PrepperPapa Biblia: a beállítások alján rövid ismertető a Biblia prémiumról (csak ingyenes felhasználóknak).": "PrepperPapa Bible: a short introduction to Bible Premium at the bottom of the settings (only for free users).",
  "Napi idő az Igével: a fejléc alatti csík helyett halvány gyűrű a Biblia fogaskereke körül, koppintásra mutatja a perceket; a fejezetek végén egy halk sor a mai időről.": "Daily time with the Word: instead of the strip below the header, a faint ring around the Bible gear, which shows the minutes when tapped; a quiet line about today's time at the end of chapters.",
  "A „Napi idő az Igével” beállítás a Biblia beállítások saját helyére került, a hangok közül kivéve.": "The “Daily time with the Word” setting has moved to its own place in the Bible settings, out of the voices.",
  "A felolvasott vers ködös kiemelése most minden oldalán elhalványul, éles szél nélkül.": "The foggy highlight of the verse being read now fades on all sides, with no sharp edge.",
  "A PrepperPapa Bibliája görgetéskor ugyanazt a zöld fényvonalat kapja a fejléc alatt, mint a Wordlight.": "When scrolling, the PrepperPapa Bible gets the same green light line below the header as Wordlight.",
  "Felolvasáskor a telefon lejátszója a Biblia lámpás képét mutatja.": "During read-aloud the phone's player shows the Bible lantern image.",
  "A felolvasó hangválasztó sok hang esetén is olvasható.": "The read-aloud voice picker is readable even with many voices.",
  "Biblia felolvasás: a felolvasott vers zöld kiemelése már nem éles szélű doboz, hanem a betűk szélétől lágyan elhalványul.": "Bible read-aloud: the green highlight of the verse being read is no longer a sharp-edged box, it fades softly from the edges of the letters.",
  "A PrepperPapa Bibliája is csillagos égbolt hátteret kapott, mint a Wordlight alkalmazás (nappali módban).": "The PrepperPapa Bible also got a starry sky background, like the Wordlight app (in day mode).",
  "Napi idő az Igével. Beállítható napi cél (5-60 perc), a fejléc alatti vonal mutatja, mennyi van hátra, a cél elérésekor gratuláció.": "Daily time with the Word. Adjustable daily goal (5-60 minutes), the line below the header shows how much is left, with a congratulation when the goal is reached.",
  "Biblia alkalmazás (Wordlight): a nyitóoldalon a fogaskerék és a súgó gomb feljebb, a jobb felső sarokba került, nem takarja a feliratot.": "Bible app (Wordlight): on the opening page the gear and help buttons moved up to the top right corner and no longer cover the title.",
  "Nagyobb betűméretnél a kezdőlap csempéin a hosszú egyszavas feliratok (pl. Kommunikáció, Vagyonkezelő) nem törnek két sorba.": "At larger font sizes long single-word labels on the start page tiles (for example Communication, Asset manager) no longer break into two lines.",
  "Nagyobb betűméretnél a tájoló tárcsája már nem lóg ki a képernyőről, és a fejlécben az app neve és verziója sem csonkul.": "At larger font sizes the compass dial no longer sticks out of the screen, and the app name and version in the header are not cut off.",
  "Kezdőlap: a Tudástár csempe fölött ugyanakkora a hézag, mint a csempék között.": "Start page: the gap above the Knowledge base tile is the same as between the tiles.",
  "Visszajelzés: ha a képernyőkép fekete lenne, nem csatolja, hanem felajánlja a kép kézi feltöltését.": "Feedback: if the screenshot would be black, it is not attached; instead it offers to upload the picture manually.",
  "Biblia alkalmazás (Wordlight): a nyitóoldalon középen a lámpás, alatta a Wordlight és a Biblia felirat; a lámpás nagyobb és közelebb a felirathoz; görgetéskor a fejléc lassan elhalványul.": "Bible app (Wordlight): the lantern in the centre of the opening page, with the Wordlight and Bible labels below it; the lantern is bigger and closer to the label; when scrolling, the header fades slowly.",
  "Térkép: a letöltött saját térkép azonnal megjelenik, nem vár előbb a szerver válaszára (gyenge hálózaton eddig sokáig üres maradt, miközben a GPS-pont már látszott).": "Map: your downloaded own map appears at once, without waiting for the server's reply first (on a weak network it used to stay empty for a long time while the GPS dot was already visible).",
  "Biblia alkalmazás (Wordlight): ott nyílik meg, ahol legutóbb olvastál, a fejezetnél és a versnél; ha a nyitólapra léptél vissza, a nyitólappal indul.": "Bible app (Wordlight): opens where you last read, at the chapter and the verse; if you went back to the opening page, it starts with the opening page.",
  "A felugró kérdés- és üzenetablakok már nem átlátszók, a mögöttük lévő szöveg nem zavarja az olvasást.": "Pop-up question and message windows are no longer transparent, and the text behind them does not disturb reading.",
  "Helyi szoba: a háttérben futó figyelő is hitelesítve kapcsolódik a központhoz, így az üzenet-, vészjelzés- és panelriasztás-ébresztés a szigorú védelem bekapcsolása után is működik.": "Local room: the watcher running in the background also connects to the hub with authentication, so wake-ups for messages, emergency alerts and panel alarms work even after strict protection is turned on.",
  "Biblia: ha a Biblia beállításaiban nyelvet váltasz, a Biblia azonnal átvált az új nyelvre, és a jegyzetek (Scofield, mértékegységek) is bekapcsolhatók.": "Bible: if you change language in the Bible settings, the Bible switches to the new language at once, and notes (Scofield, units) can also be turned on.",
  "Biblia alkalmazás (Wordlight): a fejlécben a verziószám balra, a Biblia felirat jobbra igazodik, a felirat közelebb van a lámpáshoz.": "Bible app (Wordlight): in the header the version number is aligned left and the Bible label right, and the label is closer to the lantern.",
  "Biblia: az olvasási terv oldal a terveid listájával nyílik, a listáról belépsz egy tervbe és folytatod; az új terv nem rejti el a régieket.": "Bible: the reading plan page opens with the list of your plans; from the list you enter a plan and continue; a new plan does not hide the old ones.",
  "Biblia alkalmazás (Wordlight): sötétebb ikon, és a fejlécben a Biblia felirat a Wordlight jobb széléhez igazodik.": "Bible app (Wordlight): a darker icon, and in the header the Bible label is aligned to the right edge of Wordlight.",
  "Biblia prémium, eredeti szó: a Strong-szótár szócikke magyarul jelenik meg (gépi fordítás).": "Bible Premium, original word: the Strong dictionary entry appears in Hungarian (machine translation).",
  "Biblia: Jézus szavai világosabb színnel; a kikapcsolója a Biblia beállításaiban van.": "Bible: the words of Jesus in a lighter colour; the switch to turn it off is in the Bible settings.",
  "Biblia alkalmazás (Wordlight): minden beállítás (nyelv, adatkezelés, feloldás, névjegy) a saját Biblia-beállításaiban, a PrepperPapa beállításai nem nyílnak meg.": "Bible app (Wordlight): all settings (language, privacy, unlock, about) are in its own Bible settings; the PrepperPapa settings do not open.",
  "Biblia alkalmazás (Wordlight): a fejléc felirata a megtervezett betűvel jelenik meg.": "Bible app (Wordlight): the header label appears in the designed typeface.",
  "Biblia: ha nyitva van a Strong-szótár vagy egy versmenü, a háttérben a Biblia már nem mozdul el.": "Bible: when the Strong dictionary or a verse menu is open, the Bible in the background no longer moves.",
  "Biblia alkalmazás (Wordlight): a térképen csak az alaptérkép, a műhold és a világhelyzet választható.": "Bible app (Wordlight): on the map only the base map, satellite and world situation can be chosen.",
  "Biblia alkalmazás (Wordlight): nincs benne tesztelési visszajelzés és napi tesztfeladat.": "Bible app (Wordlight): it has no test feedback and no daily test task.",
  "Biblia: Jézus szavai alapból piros színnel jelennek meg (a Beállításokban kikapcsolható).": "Bible: the words of Jesus appear in red by default (can be turned off in Settings).",
  "Biblia alkalmazás (Wordlight): a nyelvválasztó a Beállításokba került, a fejlécből kikerült.": "Bible app (Wordlight): the language picker has moved to Settings, out of the header.",
  "Biblia alkalmazás (Wordlight): a fejléc a csillagos háttér része lett, görgetéskor egy halvány zöld fénycsík és a lámpás jelzi, hogy a szöveg alá csúszik.": "Bible app (Wordlight): the header has become part of the starry background; when scrolling, a faint green light strip and the lantern show that the text slides beneath it.",
  "Biblia alkalmazás: saját helyi címen fut, így ha a PrepperPapa is telepítve van, egyik app sem nyílik meg többé üresen a másik miatt.": "Bible app: runs on its own local address, so if PrepperPapa is also installed, neither app opens empty any more because of the other.",
  "Biblia alkalmazás (Wordlight): saját logó a fejlécben, halvány csillagos háttér, és a fejlécből közvetlenül váltható a nyelv.": "Bible app (Wordlight): its own logo in the header, a faint starry background, and the language can be changed directly from the header.",
  "Biblia alkalmazás: a csak PrepperPapához tartozó ablakok és gombok már nem jelennek meg benne.": "Bible app: windows and buttons that belong only to PrepperPapa no longer appear in it.",
  "Gerah: ha a fizető telefonja nem kapja meg időben a nyugtát, az üzenet most a helyes QR-irányt mondja meg.": "Gerah: if the payer's phone does not receive the receipt in time, the message now gives the correct QR direction.",
  "Helyi szoba: a bázis panel saját képet kapott, és a szoba gazdáját a telefon helyesen ismeri fel.": "Local room: the base panel got its own picture, and the phone correctly recognises the room's host.",
  "Biblia alkalmazás: új ikon (lámpás kereszt-lánggal).": "Bible app: new icon (lantern with a cross-shaped flame).",
  "Helyi szoba: a szobának küldött kéréseket a telefon mostantól aláírja, így egy idegen eszköz nem adhatja ki magát tagnak.": "Local room: the phone now signs requests sent to the room, so a foreign device cannot pose as a member.",
  "Biblia: a Jelenések könyve jó minőségű, felvett hanggal mindenkinek ingyenesen letölthető, és internet nélkül is hallgatható; a többi könyv jó minőségű hangja Biblia prémiummal tölthető le. A telefon saját felolvasója továbbra is ingyenes.": "Bible: the Book of Revelation with a high-quality recorded voice can be downloaded free by everyone and listened to without internet; the high-quality voice of the other books can be downloaded with Bible Premium. The phone's own reader remains free.",
  "Biblia: ritkán, bezárhatóan megjelenik egy rövid ajánló arról, mit ad a Biblia prémium; felolvasás közben soha.": "Bible: rarely, and closable, a short recommendation appears about what Bible Premium offers; never during read-aloud.",
  "Fordítások: néhány felirat a térképen, az imaidőzítőben és a heti olvasási terveknél most már minden nyelven megjelenik.": "Translations: some labels on the map, in the prayer timer and in the weekly reading plans now appear in every language.",
  "Biblia: a bekapcsolt ébresztőt már nem narancs pötty jelzi (ami üzenetnek tűnt), hanem a gomb zölden kiemelve.": "Bible: an alarm that is on is no longer shown by an orange dot (which looked like a message) but by the button highlighted in green.",
  "Biblia prémium: a magyar Károliban egy szóra koppintva megjelenik az eredeti héber, arámi vagy görög szó, átírással, Strong-számmal és jelentéssel. Ahol nincs biztos egyezés, ezt kiírja.": "Bible Premium: in the Hungarian Károli, tapping a word shows the original Hebrew, Aramaic or Greek word, with transliteration, Strong number and meaning. Where there is no certain match, it says so.",
  "Biblia prémium: a Jelenések könyve felvett hanggal letölthető, és internet nélkül is hallgatható. A Bibliában ritkán, bezárhatóan megjelenik egy rövid ajánló arról, mit ad a prémium.": "Bible Premium: the Book of Revelation can be downloaded with a recorded voice and listened to without internet. In the Bible a short recommendation about what premium offers appears rarely, and can be closed.",
  "iPhone: a fémdetektor most már értéket mutat; a tájoló és az esésérzékelő nem kér többé angol nyelvű engedélyt; a számológép alsó sora nem csúszik a menüsor alá; az engedélykérő szövegek ékezetesek.": "iPhone: the metal detector now shows a value; the compass and fall detection no longer ask for permission in English; the bottom row of the calculator does not slide under the menu bar; permission request texts have proper accents.",
  "Térkép: nagyításkor és görgetéskor nincsenek többé szürke vagy fekete foltok, a térkép nem töltődik újra minden megnyitáskor, és a turistapontok nem villognak el mozgatás közben.": "Map: no more grey or black patches when zooming and scrolling, the map does not reload on every opening, and hiking points no longer flicker while moving.",
  "Térkép: a háttér gyorsabban, kb. egy másodperc alatt rajzolódik ki nagyítás után; a szintvonalak csak utána töltődnek.": "Map: the background draws faster after zooming, in about one second; contour lines load only after that.",
  "Nyelvek: a Mit pakoljak? lista, a tájoló felvett iránya és égtájai, az SOS vészkártya-szöveg, a Biblia könyvrövidítései és letöltési állapota, a lámpa és a térkép feliratai mostantól minden nyelven a saját nyelvükön jelennek meg.": "Languages: the What to take? list, the compass's recorded bearing and cardinal points, the SOS emergency card text, the Bible book abbreviations and download status, and the labels of the lamp and the map now appear in their own language in every language.",
  "Mit pakoljak?: idegen nyelvű felületen a vízi, téli, őszi és nyári túrához tartozó tételek eddig kimaradtak a listából, most bekerülnek.": "What to take?: on non-Hungarian interfaces the items for water, winter, autumn and summer trips were missing from the list; now they are included.",
  "Helyi szoba: a szoba gazdájának telefonja mostantól mindig a saját szobáját szolgálja ki, és nem próbál Bluetooth-on egy másik készüléken lévő másolathoz kapcsolódni (ettől állt a szoba 25 másodpercig „a gazda nem válaszol” hibával a gazda saját telefonján).": "Local room: the room host's phone now always serves its own room, and does not try to connect over Bluetooth to a copy on another device (this made the room hang for 25 seconds with a “the host does not respond” error on the host's own phone).",
  "iPhone: a Bluetooth-szoba azonosítója és a helyi szoba előzménye mostantól megmarad az app újraindítása után (eddig az iPhone minden indításkor új tagnak látszott a Bluetooth-szobákban).": "iPhone: the Bluetooth room ID and the local room history are now kept after restarting the app (until now the iPhone appeared as a new member in Bluetooth rooms on every start).",
  "Helyi szoba: ha a telefon nem éri el a szoba gazdáját, az app pontosabban feljegyzi, mit lát a hálózaton (saját cím, hallott szobák), hogy a hibát meg lehessen találni.": "Local room: if the phone cannot reach the room's host, the app records more precisely what it sees on the network (own address, rooms heard), so that the fault can be found.",
  "iPhone: az engedély-kapu a bejelentkezés után megnyílik, újraindítás után is nyitva marad, kijelentkezve zárva (az app saját fájljai a Library mappába kerültek).": "iPhone: the permission gate opens after sign-in, stays open after a restart and is closed when signed out (the app's own files have moved to the Library folder).",
  "Szoba-riasztás előreugrása: az eszköz-riasztás (például a bázis panel riasztója) oldala akkor is előreugrik, ha épp a telefont használod, nem csak lezárt képernyőn. Ehhez a rendszer egy egyszeri engedélyt kér: a szoba beállításaiban megjelenik egy „Megjelenítés más alkalmazások felett” gomb, amíg nincs megadva. Ugyanott látszik, ha az értesítés vagy a teljes képernyős értesítés hiányzik.": "Room alarm pop-up: the page of a device alarm (for example the base panel's alarm) pops up even while you are using the phone, not only on a locked screen. For this the system asks for a one-time permission: a “Display over other apps” button appears in the room settings until it is granted. The same place shows if the notification or full-screen notification permission is missing.",
  "Biblia, Scofield-jegyzetek magyarul: a magyar Bibliánál mostantól az eredeti magyar kiadás jegyzetei jelennek meg (Scofield Magyarázó jegyzetek a Bibliához, Evangéliumi Kiadó, a kiadó engedélyével), a korábbi saját fordítás helyett. A könyvek bevezetője az első fejezet első versénél, a jegyzetek előtt áll. A forrás a jegyzetek alatt, apró betűvel látszik. A többi nyelv jegyzetei nem változtak.": "Bible, Scofield notes in Hungarian: the Hungarian Bible now shows the notes of the original Hungarian edition (Scofield Magyarázó jegyzetek a Bibliához, Evangéliumi Kiadó, with the publisher's permission) instead of the earlier own translation. The introduction to each book stands at the first verse of the first chapter, before the notes. The source is shown in small print below the notes. Notes in the other languages have not changed.",
  "Gerah, érintéses fizetés egyszerűbben: a fizetésnél elég az összeg és a miért, a címzett és az azonosító mezői csak az „Érintés nélkül” gombbal nyílnak le (QR-kód, szobatárs). A „Fizetés érintéssel” gombon NFC-jel van, és ha az NFC vagy a Bluetooth ki van kapcsolva, a tárca megnyitásakor rögtön felajánlja a bekapcsolását. Sikeres érintés után a nyugta QR-kódja eltűnik, csak egy „Kész” üzenet marad, és a gombok felirata nem lóg ki.": "Gerah, simpler touch payment: when paying, the amount and the reason are enough; the recipient and ID fields open only with the “Without touch” button (QR code, room mate). The “Pay by touch” button carries an NFC mark, and if NFC or Bluetooth is off, the wallet offers to turn it on as soon as it opens. After a successful touch the receipt's QR code disappears, only a “Done” message remains, and the button labels no longer overflow.",
  "Gerah, fizetés érintéssel (az appban): a fogadó a „Fogadás érintéssel” gombot nyomja meg, a fizető beírja az összeget, és a „Fizetés érintéssel” gombot. Egy összeérintéssel átmegy a fogadó azonosítója, utána az aláírt fizetés, végül vissza a nyugta; a fizetés csak akkor készül el és csak akkor vonódik le, amikor a fogadó azonosítója már megérkezett. Mindkét telefon lépésenként kiírja, hol tart, és ha nem történik semmi, megmondja, mit kell a másik telefonon megnyomni. A QR-kódos út változatlanul megmarad.": "Gerah, pay by touch (in the app): the receiver taps the “Receive by touch” button, the payer enters the amount and taps the “Pay by touch” button. One touch transfers the receiver's ID, then the signed payment, and finally the receipt back; the payment is created and deducted only when the receiver's ID has already arrived. Both phones show step by step where they are, and if nothing happens, they say what to press on the other phone. The QR code route remains unchanged.",
  "Gerah, „átadásra vár” tétel: a Mozgások között az ilyen tételnél „Újra átadás” gomb van. Ugyanazt az aláírt fizetést adja át újra (QR-kóddal vagy érintéssel), nem újat; a fogadónál másodszor nem íródik jóvá, csak a nyugta készül el újra, így a tétel lezárulhat.": "Gerah, “waiting for handover” item: in Transactions such an item has a “Hand over again” button. It hands over the same signed payment again (by QR code or by touch), not a new one; the receiver is not credited a second time, only the receipt is created again, so the item can be closed.",
  "Szobák: csatlakozáskor és később a szoba beállításaiban szobánként beállíthatod, hogy az SOS-jelzésed oda is menjen-e, és ha igen, látszik-e benne a GPS-helyzeted és a vércsoportod. Ahol az SOS ki van kapcsolva, oda semmi nem megy; ahol a hely vagy a vércsoport ki van kapcsolva, abból a szobának szánt üzenetből már a telefonon kimarad. A meglévő szobákban mindhárom be van kapcsolva, ahogy eddig. A helyi (internet nélküli) szobákra is vonatkozik.": "Rooms: when joining and later in the room settings you can set for each room whether your SOS alert goes there too, and if so, whether it shows your GPS position and blood type. Where SOS is off, nothing goes; where location or blood type is off, it is left out of the message meant for that room already on the phone. In existing rooms all three are on, as before. This also applies to local (offline) rooms.",
  "Barométer és Napkelte, napnyugta: a Tájoló alól átkerültek az Eszközök közé, mindkettő saját lapon nyílik. A légnyomás előzménye, a riasztás és az értesítés beállítása, valamint a nap- és holdidők számítása változatlan; a légnyomás-értesítés koppintásra a Barométert nyitja. A Tájolón az irány, a hangvezetés és a kamerás nap-pálya marad.": "Barometer and Sunrise, sunset: moved from under the Compass to Tools, each opens on its own page. Air pressure history, alarm and notification settings, and the calculation of sun and moon times are unchanged; tapping the air pressure notification opens the Barometer. The Compass keeps direction, audio guidance and the camera sun path.",
  "Térkép, útvonaltervezés: a tervezés kártyáján megadhatod az indulás napját és idejét (alapból most). A kártya kiírja a napnyugtát és a sötétedést, hogy napnyugta előtt vagy után érkezel, és ha az út a sötétedés után is tart, mennyi marad sötétben. Az útvonalon jel mutatja, hol leszel napnyugtakor és sötétedéskor, a lépéslistában pedig minden lépés mellett ott a várható időpont. Internet nélkül számol, a menetidővel azonos tempóval.": "Map, route planning: on the planning card you can enter the day and time of departure (now by default). The card shows sunset and dusk, whether you arrive before or after sunset, and if the route continues after dusk, how much of it is in the dark. Marks on the route show where you will be at sunset and at dusk, and the step list shows the expected time next to each step. It calculates without internet, at the same pace as the travel time.",
  "Morze vétel hangból (mikrofon): a hang végét az app most az adott hang saját erősségéhez méri. Így a szoba visszhangja, a hangszóró utózengése és a telefon zajszűrője okozta lecsengés vagy rövidülés kevésbé keveri össze a pontot és a vonást, a betűk nem folynak egybe, a sebesség-csúszka és a kalibráció a valódi tempót mutatja. A visszajelzésbe az app beleteszi, hogy a telefon ténylegesen kikapcsolta-e a mikrofon zajszűrését és hangerő-szabályzását.": "Morse reception from sound (microphone): the app now measures the end of a tone against that tone's own strength. So the fading or shortening caused by room echo, speaker reverb and the phone's noise filter mixes up dots and dashes less, letters do not run together, and the speed slider and calibration show the real tempo. The app includes in the feedback whether the phone actually turned off the microphone's noise suppression and gain control.",
  "Visszajelzés ablak: a beírt szöveg és a kiválasztott típus, modul magától piszkozatként megmarad, ha az ablak véletlenül bezárul. Újranyitáskor visszakerül, és csak sikeres küldés után törlődik.": "Feedback window: the text you typed and the chosen type and module are kept automatically as a draft if the window closes by accident. They come back when you reopen it and are deleted only after a successful send.",
  "Bibliai térkép: az összecsukott információs sáv alja már nem vágódik le, a gombok és a szöveg középen állnak, fent és lent egyforma a térköz.": "Bible map: the bottom of the collapsed information bar is no longer cut off, the buttons and text are centred, with equal spacing at top and bottom.",
  "Profil: az „A neved” mező az app újraindítása után is a mentett nevet mutatja (eddig üresnek látszott, amíg a Szobák képernyőt meg nem nyitottad). Az üresnek látszó mezőbe írt, majd kitörölt karakter már nem törli a mentett nevet. Ha a név mégis elveszett, az app induláskor visszaveszi a profilból készült Gerah-azonosítóból.": "Profile: the “Your name” field shows the saved name even after restarting the app (until now it looked empty until you opened the Rooms screen). A character typed into the field that looks empty and then deleted no longer deletes the saved name. If the name was lost anyway, the app restores it at start from the Gerah ID made from the profile.",
  "A bibliai térkép a kiválasztott helyet a térkép látható részének közepére teszi, nem az információs ablak alá.": "The Bible map puts the selected place in the centre of the visible part of the map, not under the information window.",
  "Az információs ablak a jobb felső sarokban lévő nyíllal összecsukható, ilyenkor csak az ige és a hely neve látszik; újabb koppintásra kinyílik. A térkép mindkét esetben a helyre igazodik.": "The information window can be collapsed with the arrow in the top right corner; then only the verse and the place name are shown; another tap opens it. In both cases the map adjusts to the place.",
  "A bibliai térképen a helyek jól látható, nagyobb jelölőt kaptak, a nevük olvashatóbb, és az egymáshoz közeli helyek feliratai nem takarják egymást. Műholdképen, alaptérképen és éjszakai módban is.": "On the Bible map the places got larger, clearly visible markers, their names are more readable, and labels of places close to each other do not cover each other. On the satellite image, the base map and in night mode too.",
  "Az app felkészült arra, hogy a jövőben frissítés nélkül, távolról is megjelenhessen egy-egy „Hirdetés” jelölésű ajánló egyes képernyők alján. Alapból sehol nincs bekapcsolva, a képernyők változatlanok.": "The app is prepared so that in the future a recommendation marked “Ad” can appear at the bottom of some screens remotely, without an update. By default it is not turned on anywhere, and the screens are unchanged.",
  "A Kockázatelemzés mindig a helyszínek áttekintésével nyílik meg, nem a legutóbb megnézett helyszín részleteivel. A részletek a helyszín kártyájára koppintva nyílnak meg.": "Risk analysis always opens with the overview of locations, not with the details of the location you last viewed. The details open when you tap the location's card.",
  "Az „Ajánld egy barátodnak” kártya most megmutatja a jutalmat: minden barátodért, aki aktiválja a profilját, 10 gerah-t kapsz, ha prémiumot választ, további 50-et.": "The “Recommend to a friend” card now shows the reward: for every friend who activates their profile you get 10 gerah, and 50 more if they choose premium.",
  "Gerah: érintéses fizetésnél a fogadó telefon magától várja a fizetést, miután a fizető érintéssel átvette a kódját – nem kell megnyomni a Beolvasás gombot, csak újra összetartani a két telefont. Ha a QR-kódot kamerával olvassátok be, marad a Beolvasás gomb.": "Gerah: with touch payment the receiving phone waits for the payment by itself after the payer has taken its code by touch: no need to press the Scan button, just hold the two phones together again. If you read the QR code with the camera, the Scan button stays.",
  "A választólisták és felugró ablakok bezáródnak, ha másik oldalra lépsz, és az Android Vissza gomb először a nyitott listát zárja be.": "Pick lists and pop-up windows close when you go to another page, and the Android Back button first closes the open list.",
  "Offline térkép: letölthető egy választható világtérkép (az egész Föld áttekintő nagyításban, kb. 190 MB).": "Offline map: an optional world map can be downloaded (the whole Earth at overview zoom, about 190 MB).",
  "Offline térkép: az egész Magyarország letöltésénél a Megszakítás csak a saját területeit állítja le, a többi letöltést (például a világtérképet) nem.": "Offline map: when downloading the whole of Hungary, Cancel download stops only its own areas, not other downloads (for example the world map).",
  "Biztonsági mentés: a teljes mentést egy saját mentési kulcs védi, amit mentéskor te adsz meg, és érdemes felírnod. A mentésben benne van a Token tárca és a Gerah is; visszatöltés után a tárca a régi PIN-kóddal nyílik. A saját fényképezett térképek is a mentésbe kerülnek, és visszatöltés előtt az app rákérdez, ha a telefonon már vannak saját adataid.": "Backup: the full backup is protected by your own backup key, which you enter when backing up and should write down. The backup includes the Token wallet and Gerah too; after restoring, the wallet opens with the old PIN. Your own photographed maps also go into the backup, and before restoring the app asks if there is already your own data on the phone.",
  "Gerah: fizetés érintéssel. Androidon a két telefon összeérintésével (NFC), iPhone-nal Bluetooth-on, ha a két telefon szinte összeér. A QR-kód továbbra is mindenhol működik.": "Gerah: pay by touch. On Android by touching the two phones together (NFC), with iPhone over Bluetooth when the two phones almost touch. The QR code still works everywhere.",
  "Offline térkép: a letöltés akkor is folytatódik, ha másik oldalra lépsz, kikapcsol a képernyő vagy másik appot nyitsz; megszakadt kapcsolat után onnan folytatja, ahol abbahagyta. Egyszerre több területet is kijelölhetsz letöltésre.": "Offline map: the download continues even if you go to another page, the screen turns off or you open another app; after a lost connection it continues where it left off. You can select several areas for download at once.",
  "Térkép: a kórház, a temető, a menedékház, a szálláshely, a bolt és a posta saját ikont kapott nagy kerek jelölőben; koppintásra jön fel az adatlap. Egy saját pont jelölőjének cseréjénél a választó már nyitva marad, és a buborék linkjeit könnyebb eltalálni.": "Map: hospitals, cemeteries, mountain huts, accommodation, shops and post offices got their own icon in a large round marker; tapping brings up the details sheet. When changing the marker of your own point, the picker now stays open, and the links in the bubble are easier to hit.",
  "Légnyomás: kevesebb energiával mér, a gyors változásoknál sűrűbben. Új kapcsoló: „Autóban ne riasszon” – járműben ülve nem jön viharriasztás.": "Air pressure: measures with less energy, more often during rapid changes. New switch: “No alarm in a vehicle”: no storm alarm comes while you are in a vehicle.",
  "Frissítés: a letöltés kikapcsolt képernyővel és másik appra váltva is folytatódik, megszakadt hálózat után onnan megy tovább, ahol abbahagyta. Ha közben nem az app van elöl, értesítés szól, hogy telepíthető.": "Update: the download continues with the screen off and when you switch to another app, and after a lost network it goes on where it left off. If the app is not in front meanwhile, a notification says it can be installed.",
  "Gyülekező: a fórumban is látszik az alsó menüsáv, a felső „× Gyülekező” sáv eltűnt. A vissza gomb előbb a fórumon belül lép vissza.": "Community: the bottom menu bar is also shown in the forum, and the top “× Gathering” bar is gone. The back button first goes back within the forum.",
  "Térkép: új pont létrehozásakor 11 kategóriából saját jelölőt lehet választani (víz, menedék, gyülekezőhely, veszély, tűzrakóhely és a többi), később is módosítható. Az alaptérkép jelölői (vízvételi hely, csúcsok és a többi) árnyékot kaptak.": "Map: when creating a new point you can choose your own marker from 11 categories (water, shelter, meeting point, danger, fire pit and others), and change it later. The markers of the base map (water points, peaks and others) got shadows.",
  "Térkép: a keresőbe koordinátát is be lehet írni (például 47,4778349, 19,4234878 vagy 47.4778 19.4234). Az első találatra koppintva a térkép odaugrik és ideiglenes jelölőt tesz le; a buborék „Mentés pontként” gombjával lehet belőle saját pont.": "Map: you can also type coordinates into the search (for example 47,4778349, 19,4234878 or 47.4778 19.4234). Tapping the first result makes the map jump there and drop a temporary marker; the bubble's “Save as point” button turns it into your own point.",
  "Térkép: kevesebb memóriát használ, ezért hosszabb használat után sem tűnik el a jobb felső gomb ikonja, és nem maradnak ki csempék a térkép szélén.": "Map: uses less memory, so even after long use the top right button's icon does not disappear and no tiles are missing at the edge of the map.",
  "Internetes szobák: egy üzenetet (hosszan nyomva) vagy egy tagot (a taglistában hosszan nyomva) be lehet jelenteni a PrepperPapa csapatának, okkal és megjegyzéssel. A bejelentett üzenet nálad azonnal eltűnik, a többieknél ellenőrzésig összecsukva marad.": "Internet rooms: a message (long press) or a member (long press in the member list) can be reported to the PrepperPapa team, with a reason and a comment. A reported message disappears for you at once and stays collapsed for the others until it is reviewed.",
  "Internetes szobák: egy felhasználót le lehet tiltani. Az üzeneteit nálad elrejtjük, és privát üzenetet nem küldhet neked; a letiltást a Beállításokban lehet feloldani.": "Internet rooms: a user can be blocked. Their messages are hidden for you and they cannot send you private messages; the block can be lifted in Settings.",
  "Gyülekező: az alkalmazásban a fórum az appon belül nyílik meg, saját képernyőn, bezáró gombbal; a bejelentkezés megmarad. Androidon az első megnyitáskor egyszer felajánlja, hogy a Gyülekezőt kiteszi a kezdőképernyőre, és az is az appban nyitja meg.": "Community: in the app the forum opens inside the app, on its own screen, with a close button; your sign-in is kept. On Android, on first opening it offers once to put the Gathering on the home screen, which also opens it in the app.",
  "Helyi szoba: az esés miatti SOS üzenet a szobában a szövegével jelenik meg, nem olvashatatlan kódként.": "Local room: an SOS message sent because of a fall appears in the room with its text, not as unreadable code.",
  "Helyi szoba: a gépi üzenetek (Gerah-könyv, névjegy) nem küldenek többé üres értesítést.": "Local room: automatic messages (Gerah ledger, contact card) no longer send empty notifications.",
  "Kommunikáció: a Helyi szoba (MESH) mellett ismét a LoRa-jel áll.": "Communication: the LoRa mark is shown again next to Local room (MESH).",
  "Térkép, tűzgyújtási tilalom: a külföldi hivatalos tilalmak (Kanada, Egyesült Államok, Portugália) országonként saját jelet kapnak távolról, nem a magyar jelbe olvadnak; a buborékuk a tilalom fajtáját, a területet, a hivatalos szöveget mutatja, és jelzi, hogy a helyi (községi) tilalmakat a forrás nem tartalmazza.": "Map, fire ban: official foreign bans (Canada, the United States, Portugal) get their own mark per country when zoomed out, not merged into the Hungarian mark; their bubble shows the type of ban, the area and the official text, and notes that local (municipal) bans are not included in the source.",
  "Helyi szoba: nem jelenik meg többé „Zárt üzenet” a saját neveden, amit nem te írtál. A telefon a Gerah-könyvét magától átküldi a szobába, és a szoba gazdájának telefonja eddig a hosszú üzenetet 3000 karakternél levágta, így senki nem tudta kinyitni. Most vágás nélkül átmegy (16 000 karakterig, fölötte a küldés hibát jelez és később újra próbálja), és a gépi üzenetek akkor sem látszanak, ha nem nyílnak ki. A korábban levágott csomagok is eltűnnek az előzményből.": "Local room: a “Locked message” you did not write no longer appears under your own name. The phone sends its Gerah ledger to the room by itself, and until now the room host's phone cut such long messages at 3000 characters, so nobody could open them. Now they go through uncut (up to 16,000 characters; above that, sending reports an error and retries later), and automatic messages are not shown even if they cannot be opened. Packages cut earlier also disappear from the history.",
  "Térkép: könnyebb lett. A világhelyzet csak a képernyő környékén levő eseményeket rajzolja ki, nem az egész bolygót minden mozdulatnál; a turistautak tájegységei és a külföldi főút-csempék csak akkor vannak a térképen, ha a képernyő közelében járunk, a régieket elengedi a memóriából; húzás és nagyítás után egyszer frissít, a mozdulat végén. Kicsinyítve (Európa-nézet) a túraútvonalak nem maradnak a háttérben.": "Map: it is lighter. The world situation draws only the events around the screen, not the whole planet on every move; hiking trail regions and foreign main road tiles are on the map only when we are near the screen area, and old ones are released from memory; after dragging and zooming it refreshes once, at the end of the gesture. When zoomed out (Europe view) hiking routes do not linger in the background.",
  "Térkép: a tűzgyújtási tilalom saját réteg lett a turistautak mellett (eddig a világhelyzet része volt). Aki a világhelyzetet bekapcsolva tartotta, annál ez is be van kapcsolva. A megjelenés ugyanaz: távolról egy jel Magyarország fölött a megyék listájával, közelítve megyénként narancs fátyol.": "Map: the fire ban is now its own layer next to the hiking trails (until now it was part of the world situation). If you kept the world situation on, this is on too. It looks the same: from afar one mark over Hungary with the list of counties, zoomed in an orange veil per county.",
  "Térkép: a fátyol és a térkép alja nem vágódik le egy egyenes vonalnál, ha a térkép mérete menet közben változik.": "Map: the veil and the bottom of the map are no longer cut off at a straight line if the map size changes along the way.",
  "Térkép: a tűzgyújtási tilalom fátyla egyenletes lett, a megyék határán nem sötétebb, a körvonalak lekerekítettek, nem szögletesek.": "Map: the fire ban veil is now even, not darker at county borders, and the outlines are rounded, not angular.",
  "Térkép: a frissítés kijelzése kis üveg-kapszula lett (óra és „29 perce”), pár másodperc után csak az óra marad; koppintásra kinyílik a teljes szöveg, a jelmagyarázat és a források.": "Map: the update indicator is now a small glass capsule (time and “29 min ago”); after a few seconds only the time remains; tapping opens the full text, the legend and the sources.",
  "Légnyomás: ha a mérésekben hézag van, a trend és az előrejelzés-ikon a hézag előtti utolsó mérésből számol (közelítő trendként jelölve), nem tűnik el.": "Air pressure: if there is a gap in the measurements, the trend and the forecast icon are calculated from the last measurement before the gap (marked as an approximate trend) instead of disappearing.",
  "Helyi szoba: az üzenet-beíró kapszula nem lóg ki jobbra, a küldés gomb teljesen látszik. Nagyobb (115%) betűméretnél a szobák képernyője nem nyúlik a menüsor alá, a beíró sor a helyén marad.": "Local room: the message input capsule no longer sticks out to the right, and the send button is fully visible. At a larger (115%) font size the rooms screen does not extend under the menu bar, and the input line stays in place.",
  "Kommunikáció: a Helyi szoba (MESH) mellett semleges hálózat-ikon áll a korábbi LoRa-jel helyett.": "Communication: a neutral network icon stands next to Local room (MESH) instead of the earlier LoRa mark.",
  "Fax: a cím és a csempe újra „Fax (SSTV)”. Bibliai térkép: a forrássor mellett újra a teljes mondat áll, hogy a területhatárok közelítő rekonstrukciók.": "Fax: the title and the tile are “Fax (SSTV)” again. Bible map: the full sentence that the area borders are approximate reconstructions is again next to the source line.",
  "Víztisztítás számoló: a magasság-választóban az alsó lehetőség neve egyszerűen „2000 m alatt”, országnév nélkül, minden nyelven.": "Water purification calculator: in the altitude picker the lower option is simply called “Below 2000 m”, without a country name, in every language.",
  "Víztisztítás számoló: a víz fajtájánál a hideg víz helyett „Zavaros, színes vagy jéghideg (pl. olvadt hó, jeges patak)” áll, a számítás nem változott. A magasságot nem méterben kell beírni, hanem két lehetőség közül választani: 2000 m alatt vagy 2000 m felett. A számoló eredménye mostantól az app nyelvén jelenik meg (eddig más nyelven is magyarul állt).": "Water purification calculator: for the type of water, “Cloudy, coloured or ice-cold (e.g. melted snow, icy stream)” replaces cold water; the calculation has not changed. Altitude is no longer entered in metres but chosen from two options: below 2000 m or above 2000 m. The calculator's result now appears in the app's language (until now it was in Hungarian in other languages too).",
  "Biblia beállítások: rendezettebb lett. A könyvszínek neve Színes és Egyszínű (a választásod megmaradt). A kereszthivatkozások, a Scofield-jegyzet és a mértékegységek egy blokkban, „Megjelenítés az igék mellett” címmel kapcsolhatók. A felolvasó hang egy listából választható (a telefon hangja, Imre, Charon), a letöltés egy sorban, egy gombbal indul és állítható meg; a könyvenkénti lista a „Könyvenként” alatt maradt.": "Bible settings: tidier. Book colours are called Colour and Single colour (your choice is kept). Cross references, the Scofield note and units can be switched in one block, titled “Shown next to the verses”. The read-aloud voice is chosen from one list (phone voice, Imre, Charon); the download starts and stops in one row with one button; the per-book list has stayed under “By book”.",
  "Biblia, ébresztő: az olvasási terv oldaláról kikerült az ébresztő doboz, helyette a Biblia fejlécében egy kis ébresztőóra ikon nyitja az ébresztők oldalát (pötty jelzi, ha van bekapcsolt). Több ébresztő is beállítható, mindegyiknél kiválasztható, melyik olvasási terv mai olvasmányát olvassa fel. Ha az ébresztő végigolvassa a napi olvasmányt, az a nap magától elolvasottnak számít; ha közben leállítod, nem. A korábbi ébresztőd átkerült az új listába.": "Bible, alarm: the alarm box has been removed from the reading plan page; instead a small alarm clock icon in the Bible header opens the alarms page (a dot shows if one is on). Several alarms can be set, and for each you can choose which reading plan's reading for today it reads aloud. If the alarm reads the whole daily reading, that day counts as read automatically; if you stop it meanwhile, it does not. Your earlier alarm has moved to the new list.",
  "Visszajelzés ablak: tömörebb, felülről nyílik le, és felfelé söpörve vagy az alján levő Bezárás fogóval zárható. Amit beküldesz, az nem változott.": "Feedback window: more compact, drops down from the top, and can be closed by swiping up or with the Close handle at its bottom. What you send has not changed.",
  "Hirdetések: a tesztidőszakra a prémium fiókban is bekapcsolható a felugró hirdetés, ugyanazokkal a korlátokkal, mint az ingyenes változatban (minden második megnyitáskor, naponta legfeljebb ötször). A prémium funkciók ettől nem változnak, mind nyitva maradnak.": "Ads: for the test period the pop-up ad can also be turned on in a premium account, with the same limits as in the free version (every second opening, at most five times a day). Premium features do not change because of this, they all stay open.",
  "Gyülekező: a főoldali csempe új ikont kapott, a fórum logójának tüzét, zöldben, mint a többi gomb.": "Community: the main page tile got a new icon, the fire of the forum logo, in green like the other buttons.",
  "Noah minden nyelven jobban ért: a lejárt készletre vonatkozó kérdést, a „nézd meg jobban” kérést egy bibliai válasz után, és a betűvel írt számokat (például „négy fő”) az app mind a nyolc nyelvén felismeri. A Noah-nak adott utasítások és a beállításai (letöltés, Rólam, a válasz alatti mérés) is az app nyelvén jelennek meg.": "Noah understands better in every language: the question about expired stock, the “look more closely” request after a Bible answer, and numbers written in words (for example “four people”) are recognised in all eight languages of the app. Instructions given to Noah and its settings (download, About me, the measurement below the answer) also appear in the app's language.",
  "Prémium kód: a kódot tartalmazó linkre koppintva megnyílik az app, a Beállítások Feloldás részén a kód már be van írva, és csak a „Kód beváltása” gombra kell koppintani. Ha előbb be kell lépned, a kód a belépés után is ott marad.": "Premium code: tapping a link containing the code opens the app, the code is already entered in the Unlock section of Settings, and you only need to tap the “Redeem code” button. If you have to sign in first, the code is still there after sign-in.",
  "Eszközök: új Napelem-beállítás. Megadod a helyet (helymeghatározással vagy kézzel) és a napot (dátum, vagy egy gombbal a téli és nyári napforduló, a tavaszi és őszi napéjegyenlőség, ma), és megmutatja a nap aznapi járását ábrán, a napkeltét, a delelést és a napnyugtát, hogy merre nézzen a panel, mennyire dőljön aznapra, arra az évszakra és egész évre fixen, és hány óra napsütés várható derült égnél. A panel teljesítményét megadva nagyjából kiszámolja a napi termelést (becslés, felhő nélkül). Egy gombbal a tájoló kamerás nézete nyílik, a választott nap pályájával, hogy a panelt a helyére igazítsd.": "Tools: new Solar panel setup. You enter the location (with location services or manually) and the day (a date, or with one button the winter and summer solstice, the spring and autumn equinox, today), and it shows the sun's path that day on a chart, sunrise, solar noon and sunset, which way the panel should face, how much it should tilt for that day, for that season and fixed for the whole year, and how many hours of sunshine to expect under a clear sky. If you enter the panel's power, it roughly calculates daily production (estimate, without clouds). One button opens the compass camera view with the chosen day's sun path, so you can align the panel in place.",
  "Térkép, offline: ha a szerveren egy már letöltött tájegység térképe újabb, a tájegység sorában „Frissítés (méret)” gomb jelenik meg, és a Teljes Magyarország letöltése is hiányzónak számolja. Eddig a telefon a régi letöltött térképet mutatta, és semmi nem jelezte, hogy van újabb.": "Map, offline: if the map of an already downloaded region is newer on the server, an “Update (size)” button appears in the region's row, and the full Hungary download also counts it as missing. Until now the phone showed the old downloaded map and nothing indicated there was a newer one.",
  "Teszt-adatok: a főoldali négy kártya egyike az autó helyett a hétvégi ház, saját készlettel, így valódi százalékokat mutat.": "Test data: one of the four cards on the main page is the weekend house instead of the car, with its own stock, so it shows real percentages.",
  "Helyi szoba: a saját üzeneteid a saját telefonodon sosem jelennek meg „Zárt üzenet”-ként. A telefon minden kulcsot megjegyez, amivel valaha küldött, és ha két szoba között váltasz, miközben az üzenetek még nyílnak, egyik szoba kulcsa sem kerül át a másikba.": "Local room: your own messages never appear as “Locked message” on your own phone. The phone remembers every key it has ever sent with, and if you switch between two rooms while messages are still opening, neither room's key passes to the other.",
  "Helyi szoba: a zárt üzenet buborékja rövid („Zárt üzenet”), nem nyúlik szélesebbre a többi üzenetnél.": "Local room: the bubble of a locked message is short (“Locked message”) and no wider than the other messages.",
  "Helyi szoba: ha a telefon a közös Wi-Fi-n nem éri el a szoba gazdáját (például mert a router nem engedi, hogy a telefonok egymással beszéljenek), és a gazda Bluetooth-on a közelben van, a telefon magától átvált Bluetooth-ra, és ezt egy sorban ki is írja. Ha a Wi-Fi később újra eléri a gazdát, visszavált rá.": "Local room: if the phone cannot reach the room's host on the shared Wi-Fi (for example because the router does not let phones talk to each other), and the host is nearby on Bluetooth, the phone switches to Bluetooth by itself and says so in one line. If Wi-Fi reaches the host again later, it switches back.",
  "Helyi szoba Bluetooth-on: a szoba borítóképe és a tagok profilképe kis méretben ott is megjelenik (egyszer töltődik le, utána a telefon megjegyzi). A nagy kép továbbra sem megy Bluetooth-on, hogy ne lassítsa el a kapcsolatot.": "Local room over Bluetooth: the room's cover image and members' profile pictures also appear there in small size (downloaded once, then the phone remembers them). Large images still do not go over Bluetooth, so as not to slow down the connection.",
  "Térkép, offline: a tájegységek saját, teljes képernyős oldalon nyílnak meg (Térkép-funkciók > Tájegységek letöltése), nem egy kis görgethető ablakban. Egy tájegység letöltése mindig együtt hozza az alaptérképet, a turistautakat és a turistapontokat; ha egy tájegységről csak az alaptérkép van a telefonon, a „Hiányzó részek letöltése” pótolja a többit.": "Map, offline: regions open on their own full-screen page (Map functions > Download regions), not in a small scrollable window. Downloading a region always brings the base map, hiking trails and hiking points together; if only the base map of a region is on the phone, “Download the missing parts” adds the rest.",
  "Tájoló, hangvezetés: az egész hangskála feljebb került, a jó irány hangja jobban hallható. A ritmus és a logika ugyanaz: a jó irányban a legmélyebb, nyugodt kettős sípolás, eltérésnél egyre magasabb és sűrűbb.": "Compass, audio guidance: the whole scale has moved higher, so the tone for the right direction is easier to hear. The rhythm and logic are the same: in the right direction the lowest, calm double beep, when off course higher and more frequent.",
  "Újdonságok ablak: görgetéskor a szöveg nem csúszik át a címen, a bezáró gomb kerek, a cím mellett.": "What's new window: when scrolling the text no longer slides over the title, and the close button is round, next to the title.",
  "Helyi szoba: ha a szoba gazdája közben új jelszót adott meg, a vendég telefonja a legújabb üzenetek kulcsával küld. Eddig az előzmény legrégebbi üzenetének kulcsánál ragadhatott, és az így küldött üzenetek a gazdánál (és később nála is) „Zárt üzenet”-ként jelentek meg. A régi kulccsal írt üzenetek olvashatók maradnak.": "Local room: if the room's host has set a new password meanwhile, the guest's phone sends with the key of the latest messages. Until now it could get stuck at the key of the oldest message in the history, and messages sent that way appeared as “Locked message” at the host (and later for the guest too). Messages written with the old key remain readable.",
  "Helyi szoba: a beíró sor nem takarja el a lap alján lévő gombokat (például „Vissza a saját szobámba”); ha nem fér ki minden, a lap görgethető.": "Local room: the input line no longer covers the buttons at the bottom of the page (for example “Back to my own room”); if everything does not fit, the page can be scrolled.",
  "Kommunikáció és Helyi szobák listája: a profilod a fejlécben, a kérdőjel mellett, ugyanúgy, mint a Szobáknál (koppintásra a Profil nyílik); a Kommunikáció tetején álló külön sor megszűnt.": "Communication and Local rooms list: your profile is in the header, next to the question mark, the same as in Rooms (tapping opens the Profile); the separate row at the top of Communication is gone.",
  "Helyi szoba, súgó (?): elmondja, mire jó a helyi szoba (internet nélkül, egy Wi-Fi-n, például áramszünetben vagy otthon a családdal), és lépésenként végigvezet: szoba nyitása az egyik telefonon, belépés a másikról, mit jelentenek a pontok, és mit tegyél, ha a gazda nem érhető el.": "Local room, help (?): explains what a local room is for (without internet, on one Wi-Fi, for example in a power cut or at home with the family), and guides you step by step: opening a room on one phone, joining from another, what the dots mean, and what to do if the host cannot be reached.",
  "Helyi szoba: a szobához csatlakozás nem várakozik többé a szoba kulcsának ellenőrzésére. Ha az lassú vagy elakad, a kapcsolat akkor is felépül, és legfeljebb 4 másodperc után a meglévő kulccsal megy tovább.": "Local room: joining a room no longer waits for the room key check. If it is slow or gets stuck, the connection is still established, and after at most 4 seconds it continues with the existing key.",
  "Helyi szoba: ha háromszor egymás után nem éri el a szoba gazdáját, rövid ideig újra keresi a hálózaton (ha a gazda új címet kapott, átáll rá és megjegyzi), és kiírja, mit érdemes ellenőrizni: ugyanaz a Wi-Fi, a router elszigetelheti a készülékeket, mobiladat ki; mellette a saját és a szoba címe, eltérő hálózatnál külön figyelmeztetéssel.": "Local room: if it cannot reach the room's host three times in a row, it searches the network again for a short time (if the host got a new address, it switches to it and remembers it), and shows what is worth checking: the same Wi-Fi, the router may isolate devices, mobile data off; next to it your own and the room's address, with a separate warning on a different network.",
  "Helyi szobák: egy hatótávon kívüli szoba (például az Eszközök) koppintásra a saját nevével nyílik meg, és kiírja, hogy a gazdája most nem érhető el; eddig az előzőleg megnyitott szoba neve állt a fejlécben. A lista fejléce mindig a lista címe.": "Local rooms: a room out of range (for example Tools) opens with its own name when tapped and says that its host cannot be reached now; until now the name of the previously opened room was in the header. The list header is always the list's title.",
  "Helyi szoba: a technikai adatok (a másik telefon címe, a Bluetooth-számlálók) egy kis „Részletek” sor alá kerültek.": "Local room: technical data (the other phone's address, Bluetooth counters) have moved under a small “Details” row.",
  "Kommunikáció: a lap tetején a profilod (kép és név), koppintásra a Profil nyílik; ha még nincs, „Hozd létre a profilodat”. Profil nélkül a Kommunikáció és a Helyi szoba egyszer felkínálja a beállítását, a bemutató után.": "Communication: your profile (picture and name) at the top of the page; tapping opens the Profile; if you have none yet, “Create your profile”. Without a profile, Communication and Local room offer to set it up once, after the tour.",
  "Mit vigyek?: rendezettebb lap. A résztvevők egyforma kártyákon, mellettük, hányan mennek; az utazás módja és a víz kétállású kapcsoló, az út típusa gombsor, a napok száma mínusz-plusz léptető.": "What to take?: a tidier page. Participants on identical cards, with how many are going next to them; the mode of travel and water are two-position switches, the trip type is a row of buttons, the number of days a minus-plus stepper.",
  "Noah: az útvonal-válaszban a helyek alcíme (saját pont, helyszín és típusa, település, turistapont és magassága) az app nyelvén jelenik meg.": "Noah: in the route answer the subtitles of places (own point, location and its type, settlement, hiking point and its elevation) appear in the app's language.",
  "Noah: minden válasza alatt „Válasz jelentése” gomb. Ha egy válasz sértő, veszélyes vagy téves, egy koppintással jelezheted nekünk; ilyenkor csak a kérdés és a válasz szövege jut el hozzánk. Internet nélkül a jelentés elmentődik, és magától elmegy, amint lesz kapcsolat.": "Noah: a “Report this answer” button below every answer. If an answer is offensive, dangerous or wrong, you can tell us with one tap; only the text of the question and the answer reaches us. Without internet the report is saved and sent by itself as soon as there is a connection.",
  "Noah: a beállításai alatt új „Noah névjegye” rész: a Google Gemma 4 nyílt modellel működik (Apache 2.0 licenc), a licenc linkjével.": "Noah: a new “About Noah” section in its settings: it runs on the open Google Gemma 4 model (Apache 2.0 licence), with a link to the licence.",
  "Noah reggeli összefoglalója: minden reggel 7:00-kor (a beállításainál átállítható vagy kikapcsolható) értesítés a készlet hiányairól, a készenléti szintről, egy igével és egy felkészülési tanáccsal. Noah-t megnyitva kártyaként is látod.": "Noah's morning summary: every morning at 7:00 (can be changed or turned off in its settings) a notification about stock shortages and the readiness level, with a verse and a preparedness tip. When you open Noah you also see it as a card.",
  "Noah az app nyelvén beszél: a bemutatkozás, a képességei, a kiszámolt válaszok (készenlét, hiányok, lejáratok, háztartás, napkelte) és a gépi válaszok is az app nyelvén jönnek; a Bibliában az adott nyelv saját fordításában keres.": "Noah speaks the app's language: the introduction, its abilities, the calculated answers (readiness, shortages, expiry dates, household, sunrise) and the automatic answers all come in the app's language; in the Bible it searches the language's own translation.",
  "Tájoló: álló, kamerás nézetben a nap mai járása vonalként a képen, napkeltétől napnyugtáig, órajelekkel és a nap mostani helyével, hogy a napelemet hozzá tudd igazítani. Éjszaka és helyzet nélkül kiírja, miért nincs vonal.": "Compass: in the upright camera view, today's path of the sun as a line on the image, from sunrise to sunset, with hour marks and the sun's current position, so you can align your solar panel to it. At night and without a location it explains why there is no line.",
  "Frissítés: a letöltés és a telepítés állapota egyetlen sorban látszik a képernyő tetején (Letöltés 47% → Telepítés… → Erősítsd meg a rendszer ablakában, hiba esetén Újra gomb). Megszűnt a fejléc alatti külön sárga doboz, ami eltakarta a logót, és a százalék sem jelenik meg kétszer.": "Update: download and installation status appear in a single row at the top of the screen (Downloading 47% → Installing… → Confirm in the system window, with a Retry button on error). The separate yellow box below the header that covered the logo is gone, and the percentage no longer appears twice.",
  "Visszajelzés: a mezők rendezettebbek (felirat a mező fölött, nagyobb távolság). Az appban egy gombnyomással csatolható a képernyőkép arról a képernyőről, ahonnan a visszajelzést megnyitottad; a kép feltöltése a galériából is megmaradt. A csatolt képnél bélyegkép és × törlés.": "Feedback: tidier fields (label above the field, more spacing). In the app, one press attaches a screenshot of the screen you opened the feedback from; uploading a picture from the gallery is still possible. An attached picture shows a thumbnail and × to delete.",
  "Térkép, offline: a Magyarország tájegységei fölött új „Teljes Magyarország letöltése” gomb. Előtte kiírja, mennyit tölt le, mennyi van már a telefonon, és mennyi a szabad hely; ha nincs elég hely, szól és nem indul el. Tájegységenként halad, megszakítható, és a Folytatás onnan folytatja.": "Map, offline: a new “Download the whole of Hungary” button above the regions of Hungary. Before starting it shows how much it will download, how much is already on the phone and how much free space there is; if there is not enough space, it says so and does not start. It goes region by region, can be interrupted, and Continue resumes from there.",
  "Térkép: a külföldi és magyar turistaút-tervező hálózat kisebb lett (kb. harmadával kevesebb letöltés), ugyanazokkal az útvonalakkal.": "Map: the foreign and Hungarian hiking route planning network is smaller (about a third less to download), with the same routes.",
  "Helyi szoba: nem jelennek meg többé „Zárt üzenet”-ként a saját és a többiek üzenetei, ha a szoba kulcsa két helyen eltérően volt eltárolva, vagy ha újra beírtad a jelszót: az előző kulcsot is megőrzi, és a régi üzenetek olvashatók maradnak. A tagok profilképe is megjelenik.": "Local room: your own and others' messages no longer appear as “Locked message” if the room key was stored differently in two places or if you re-entered the password: it keeps the previous key too, and old messages remain readable. Members' profile pictures also appear.",
  "Saját térkép: megjelennek a fontos helyek, új, saját ikonokkal: kórház, orvos, gyógyszertár, rendőrség, tűzoltóság, benzinkút, turistaház és menedék, kemping, ivóvíz, élelmiszerbolt, templom, iskola, posta, szállás, étterem, vár és rom, múzeum, látnivaló, állomás, komp, parkoló és még sok más. Az ikon mellett a hely neve áll; a fontosabbak már távolabbi nézetben, a kisebb boltok közelebb nagyítva jelennek meg, egymást nem takarják.": "Own map: important places now appear, with new icons of their own: hospital, doctor, pharmacy, police, fire station, petrol station, mountain hut and shelter, campsite, drinking water, grocery, church, school, post office, accommodation, restaurant, castle and ruin, museum, sight, station, ferry, car park and much more. The place name stands next to the icon; the more important ones appear at a wider view, small shops only when zoomed in closer, and they do not cover each other.",
  "Saját térkép: a hegycsúcsok nevét és magasságát is kiírja (például Kékes 1014 m).": "Own map: it also shows the names and elevations of peaks (for example Kékes 1014 m).",
  "Saját térkép: új rétegek: településhatár (halvány szaggatott vonal), városrészek neve közeli nézetben, kompjáratok (kék szaggatott vonal), csatornák, vizenyős terület (mintával), szikla, sportpálya, kert, óvoda, vasúti terület, peron, gát; nagy védett területek, hegységek és tavak neve dőlt betűvel. Éjszakai módban is.": "Own map: new layers: municipal boundaries (faint dashed line), district names in close view, ferry routes (blue dashed line), canals, wetlands (with a pattern), rock, sports pitches, gardens, kindergartens, railway areas, platforms, dams; names of large protected areas, mountain ranges and lakes in italics. In night mode too.",
  "Frissítés: telepítés közben a felső sáv egysoros („Telepítés folyamatban…”), nem foglal el több helyet a képernyőből.": "Update: during installation the top bar is a single line (“Installing…”) and takes up no more of the screen.",
  "Frissítés: a telepítés után az app magától újra megnyílik. Ahol az Android ezt nem engedi (Android 10-től, ha épp használod a telefont), egy értesítés jelenik meg, egy koppintással megnyitja.": "Update: after installation the app reopens by itself. Where Android does not allow this (from Android 10, if you are using the phone), a notification appears, and one tap opens the app.",
  "Vércsoport-kalkulátor: nincs többé „Mutasd” gomb, az eredmény a vércsoport kiválasztásakor azonnal megjelenik. A kalkulátorból egy gombbal megnyitható a Tudástár 3.6 (Vércsoport) cikke.": "Blood type calculator: no more “Show” button; the result appears as soon as you select the blood type. One button in the calculator opens Knowledge base article 3.6 (Blood type).",
  "Frissítés: az új verzió letöltése már csak akkor indul el, ha megnyomod a frissítés gombot a fejlécben (vagy a frissítési képernyőn). Magától, éjszaka sem tölt le és nem telepít semmit.": "Update: downloading a new version now starts only when you press the update button in the header (or on the update screen). It never downloads or installs anything by itself, not even at night.",
  "Frissítés: a gomb megnyomása után látszik, mi történik: keresés, letöltés százalékban, telepítés, és ha valami nem sikerül, érthető hibaüzenet és Újra gomb.": "Update: after pressing the button you can see what is happening: searching, download in percent, installation, and if something fails, a clear error message and a Retry button.",
  "Frissítési képernyő: a „Most a régi verzióval folytatom (30 perc)” lehetőség már az első megjelenéskor ott van, nem csak egy sikertelen telepítés után.": "Update screen: the “Continue with the old version for now (30 minutes)” option is there from the first appearance, not only after a failed installation.",
  "Biblia: a Scofield-jegyzetek, a mértékegységek és az apokrif könyvek (Énok könyveivel együtt) most a Bibliával együtt töltődnek le, külön letöltés nélkül. A Biblia beállításaiban csak a megjelenítésük kapcsolható ki és be.": "Bible: Scofield notes, units and the apocryphal books (including the books of Enoch) now download together with the Bible, without a separate download. In the Bible settings only their display can be turned on and off.",
  "Biblia felolvasás: ha egy könyv új, jobb minőségű hangja teljesen letöltődött a telefonra, a régi gépi hang ugyanannak a könyvnek a felvételét az app magától törli, hogy helyet szabadítson fel.": "Bible read-aloud: once a book's new, better-quality voice has fully downloaded to the phone, the app deletes the old machine voice recording of the same book by itself to free up space.",
  "Tudástár 3.6 (Vércsoport): a cikkből egy gombbal megnyitható a Vércsoport-kalkulátor, és két új kép került a cikkbe.": "Knowledge base 3.6 (Blood type): one button in the article opens the Blood type calculator, and two new pictures have been added to the article.",
  "Gerah: a tárca képernyőjén, ahol az induló egyenleg megjelenik, ott áll a tájékoztatás is: a Gerah jutalom, nem pénz.": "Gerah: the wallet screen that shows the starting balance also shows the notice: Gerah is a reward, not money.",
  "Ajánld egy barátodnak (Beállítások): egyetlen rendezett kártya. Az „Ajánlói linkem megosztása” gomb a saját ajánlói linkedet küldi el; aki azzal érkezik, annál a kód magától beváltódik, nem kell beírni. A kézi beírás a „Van ajánlókódod?” alatt van.": "Recommend to a friend (Settings): a single, tidy card. The “Share my referral link” button sends your own referral link; for anyone who arrives with it, the code is redeemed by itself, no need to type it. Manual entry is under “Have a referral code?”.",
  "Ajánlói jutalom: a barátod prémium-vásárlása utáni 50 gerah 14 nap elteltével kerül jóváírásra (visszatérített vásárlás után nem jár); fiókonként összesen legfeljebb 50 ajánlás után jár jutalom.": "Referral reward: the 50 gerah after your friend's premium purchase is credited after 14 days (not for a refunded purchase); rewards are given for at most 50 referrals per account in total.",
  "Gerah: mindenki 20 gerah induló egyenleget kap a PrepperPapától, egyszer, amikor a Gerah-tárcája elkészül (a meglévő tárcák is).": "Gerah: everyone gets a starting balance of 20 gerah from PrepperPapa, once, when their Gerah wallet is created (existing wallets too).",
  "Tudástár: a cikkekben a forrás-linkek koppintásra megnyílnak, és a hosszú cím nem lóg ki a képernyőről.": "Knowledge base: source links in articles open when tapped, and long titles no longer overflow the screen.",
  "Biblia: olvasás, könyv- és fejezetválasztás közben eltűnt a fejlécből a „?” gomb (ott nem a Bibliához tartozó súgót mutatta).": "Bible: the “?” button has been removed from the header while reading and choosing books and chapters (there it showed help not related to the Bible).",
  "Eszközök szoba: ha a bázis panel kb. három és fél percig nem jelez (például áramszünet vagy kihúzták), a szobában megjelenik: „megszűnt a tápellátás, a panel nem jelez”; amikor újra jelez: „újra él”. Állapotváltásonként egy üzenet.": "Tools room: if the base panel sends no signal for about three and a half minutes (for example a power cut or it was unplugged), the room shows: “power supply lost, the panel is not responding”; when it signals again: “alive again”. One message per change of state.",
  "Tudástár: új ingyenes cikk, 3.6 Vércsoport: ki kinek adhat vért, és ki kitől kaphat.": "Knowledge base: new free article, 3.6 Blood type: who can give blood to whom, and who can receive from whom.",
  "Súgó (Beállítások): ha az app sötét vagy üres marad, engedélyezd a vírusirtóban (például Avast), vagy használd a böngészős változatot; a Play-áruházban vett prémium 48 órán belül visszakérhető.": "Help (Settings): if the app stays dark or empty, allow it in your antivirus (for example Avast), or use the browser version; premium bought in the Play Store can be refunded within 48 hours.",
  "Biblia, olvasási terv: a tervválasztó nyitómondata most minden nyelven lefordítva jelenik meg.": "Bible, reading plan: the opening sentence of the plan picker now appears translated in every language.",
  "Tájoló, légnyomás: kis időjárás-kép (napos, változékony, eső, vihar) és trend-nyíl a légnyomás elmúlt órákbeli változásából. Becslés: a félgömb, az évszak és a földrajzi szélesség szerint igazítva, szelet és felhőzetet nem lát.": "Compass, air pressure: a small weather picture (sunny, changeable, rain, storm) and a trend arrow from the change in air pressure over the past hours. An estimate: adjusted for hemisphere, season and latitude; it cannot see wind or clouds.",
  "Akkumulátor: a légnyomás-érzékelő csak a Tájoló képernyőn mér folyamatosan; máskor negyedóránként egyszer mér (ebből áll az előzmény és a vihar-riasztás), közben kikapcsol.": "Battery: the air pressure sensor measures continuously only on the Compass screen; otherwise it measures once every quarter of an hour (the history and the storm alarm are built from this) and switches off in between.",
  "Szobák: egy korábban megnyitott internetes szoba azonnal megjelenik a legutóbbi üzenetekkel, az újak és a változások (javítás, törlés, reakció) a kapcsolódás után érkeznek.": "Rooms: an internet room opened before appears at once with the latest messages; new messages and changes (edits, deletions, reactions) arrive after connecting.",
  "Szobák: a szobák borítóképe megmarad a telefonon, ezért azonnal látszik, és hálózatváltáskor (wifi és mobilnet között) sem tűnik el; ha egyszer nem töltődött be, a kapcsolat visszatérésekor újra próbálja. A megváltozott borítóképet a következő listafrissítés lecseréli.": "Rooms: room cover images are kept on the phone, so they show at once and do not disappear when switching networks (between Wi-Fi and mobile data); if one did not load, it tries again when the connection returns. A changed cover image is replaced at the next list refresh.",
  "Biblia, apokrif könyvek: az első csoport címe „Ószövetségi apokrifek” lett (a korábbi „Deuterokanonikus könyvek” helyett).": "Bible, apocryphal books: the first group is now titled “Old Testament apocrypha” (instead of the earlier “Deuterocanonical books”).",
  "Akkumulátor: a térkép vagy a tájoló elhagyása után az iránytű-érzékelő leáll, eddig a többi képernyőn is tovább futott.": "Battery: after leaving the map or the compass the compass sensor stops; until now it kept running on other screens too.",
  "Biblia: olvasás közben a vissza-nyíl és a telefon Vissza gombja (oldalra söprés) ismét egyenesen a Biblia könyveihez visz, nem a fejezetekhez.": "Bible: while reading, the back arrow and the phone's Back button (side swipe) again take you straight to the Bible's books, not to the chapters.",
  "Megosztás: más appból megosztott szöveget (linket, jegyzetet) is el lehet küldeni a PrepperPapába: csak a szobát kell kiválasztani.": "Sharing: text shared from another app (a link, a note) can also be sent to PrepperPapa: you just choose the room.",
  "Eszközök szoba: a LED-szalag és a lámpák állapota érthetően jelenik meg (be/ki, fehér vagy színes fény, szín neve, fényerő), az IR-adónál a tanuló mód; ismeretlen jel és nyers kód nem jelenik meg.": "Tools room: the state of the LED strip and lamps is shown clearly (on/off, white or coloured light, colour name, brightness), and learning mode for the IR transmitter; unknown signals and raw codes are not shown.",
  "Biblia: a fejléc vissza-nyila (és a telefon Vissza gombja) szintenként lép: a szövegből a fejezetekhez, onnan a könyvekhez a keresővel.": "Bible: the header's back arrow (and the phone's Back button) goes one level at a time: from the text to the chapters, from there to the books with the search.",
  "Biblia térkép: a helyek neve az app nyelvén jelenik meg (oroszul, ukránul cirill betűvel), a nevet az adott nyelvű Biblia szövegéből vesszük.": "Bible map: place names appear in the app's language (in Russian and Ukrainian in Cyrillic), taken from the text of the Bible in that language.",
  "Biblia térkép: mindig műholdképen, közelről nyílik, és ilyenkor a turistautak, turistapontok, a világhelyzet és az átjátszók nem töltődnek be (kevesebb memória). A térkép elhagyásakor visszaállnak.": "Bible map: it always opens on the satellite image, close up, and hiking trails, hiking points, the world situation and repeaters are not loaded then (less memory). They come back when you leave the map.",
  "Súgó: a Biblia súgójában jelezzük, hogy az app bibliaolvasót tartalmaz, és a lelki felkészültség rész keresztény szemszögből készült.": "Help: the Bible help states that the app contains a Bible reader and that the spiritual preparedness section is written from a Christian perspective.",
  "Tájoló: a zöld háromszög (felvett irány) ismét fixen áll a számlapon, és pontosan együtt fordul vele.": "Compass: the green triangle (recorded bearing) is fixed on the dial again and turns exactly with it.",
  "Tájoló: a tű folyamatosan, simán fordul (képkockánként), nyugalomban nem remeg; a fokszám csak akkor vált, ha tényleg elfordultál.": "Compass: the needle turns continuously and smoothly (frame by frame) and does not tremble at rest; the degree value changes only when you have really turned.",
  "Tájoló: a felvett irány befogásakor a rezzenés azonnal jön, nem késve.": "Compass: when the recorded bearing is locked in, the vibration comes at once, without delay.",
  "Tájoló hangvezetés: az Android appban indításkor felhangosítja a telefont, leállításkor visszaállítja (fülhallgatóval nem hangosít); minden sípolást egy apró rezzenés kísér, ha a rezgés be van kapcsolva.": "Compass audio guidance: in the Android app it turns the phone's volume up at start and restores it when stopped (not with headphones); every beep comes with a tiny vibration if vibration is on.",
  "Biblia-térkép: a sávban minden igehely (a vers, a további versek, a megjegyzésben álló hivatkozás) koppintható, és pontosan arra a versre visz a Bibliában.": "Bible map: every verse reference in the bar (the verse, the other verses, the reference in the note) can be tapped and takes you to exactly that verse in the Bible.",
  "Biblia-térkép: a sáv bal felső sarkában vissza-nyíl áll a × helyett; ugyanoda visz, mint a telefon Vissza gombja: a vershez, ahonnan jöttél.": "Bible map: a back arrow replaces the × in the bar's top left corner; it goes to the same place as the phone's Back button: the verse you came from.",
  "Tudástár: a már letöltött prémium témák is megkapják a térkép-letöltésről szóló javított mondatot.": "Knowledge base: premium topics already downloaded also get the corrected sentence about map download.",
  "Vagyonkezelő: a lenyitható soroknál a nyíl a sor elejére került, a törlés (×) a másik szélén maradt, így nem lehet véletlenül a törlésre koppintani.": "Asset manager: in expandable rows the arrow has moved to the start of the row, while delete (×) stays at the other edge, so you cannot tap delete by accident.",
  "Vagyonkezelő: a felső sáv jobb oldalán a havi mérleg és alatta a folyó hónap tervezett kiadása áll.": "Asset manager: the right side of the top bar shows the monthly balance, with the current month's planned spending below it.",
  "Tájoló: a tű és a fokszám nyugalomban nem remeg, valódi fordulásnál azonnal követ.": "Compass: the needle and the degree value do not tremble at rest and follow at once when you really turn.",
  "Eszközök szoba: a kapcsolók állapota érthető szöveggel jelenik meg (be- vagy kikapcsolva, mi történik áramszünet után) a nyers kódok helyett.": "Tools room: switch states are shown in clear text (on or off, what happens after a power cut) instead of raw codes.",
  "Tudástár: a térkép offline letöltéséről szóló mondat most az „Offline térkép” csoportra mutat (tájegység vagy ország); a Terület letöltése gomb csak a látható részt menti, legfeljebb 400 csempét.": "Knowledge base: the sentence about downloading the map for offline use now points to the “Offline map” group (region or country); the Download area button saves only the visible part, at most 400 tiles.",
  "Biblia beállítások: a lap mindig azonnal megjelenik. Eddig előfordult, hogy üres maradt, ha a telefon egy háttér-lekérdezésre nem válaszolt.": "Bible settings: the page always appears at once. Until now it sometimes stayed empty if the phone did not answer a background query.",
  "Biblia, „Új” könyvszínek: a Zsoltárok és a Példabeszédek saját színt kapott (mélykék és olíva), nappal és éjszaka is.": "Bible, “New” book colours: Psalms and Proverbs got their own colour (deep blue and olive), by day and by night.",
  "Visszajelzés űrlap: megnyitáskor nem ugrik fel a billentyűzet, előbb körülnézhetsz, és te koppintasz a szövegmezőbe.": "Feedback form: the keyboard does not pop up on opening; you can look around first and tap the text field yourself.",
  "Vagyonkezelő: a menü a felső sávban marad görgetéskor is, és az új tétel űrlapja mentés után bezárul.": "Asset manager: the menu stays in the top bar when scrolling, and the new item form closes after saving.",
  "A prémium kód legfeljebb két készüléken működik, ahogy korábban.": "The premium code works on at most two devices, as before.",
  "Ingyenes fiók: egyszerre egy készüléken használható. Ha egy második készüléken lépsz be, az app felajánlja, hogy válaszd le az elsőt (ugyanúgy, mint a Beállítások, Készülékeim listában), és utána ott működnek a szobák. Az app többi része minden készüléken használható.": "Free account: can be used on one device at a time. If you sign in on a second device, the app offers to unlink the first one (the same as in Settings, My devices), and then rooms work there. The rest of the app can be used on every device.",
  "Készülékeim: leválasztás fiókonként 30 naponta egyszer.": "My devices: unlinking once every 30 days per account.",
  "Biblia: a beállításokban (fogaskerék, a Betűméret alatt) választható a könyvek színe. „Új”: az Ószövetség csoportjai is saját színt kapnak (Mózes könyvei, történeti, bölcsességi könyvek, nagy- és kispróféták), az Újszövetség a mostani színeit tartja, és a fejezetválasztó a könyv színét kapja. „Régi”: a korábbi zöld árnyalatok.": "Bible: the book colours can be chosen in the settings (gear, under Font size). “New”: the Old Testament groups also get their own colours (books of Moses, historical and wisdom books, major and minor prophets), the New Testament keeps its current colours, and the chapter picker takes the book's colour. “Old”: the earlier shades of green.",
  "Biblia olvasó: a fejléc tömör, és a felcsúszott kereső már nem lóg ki mellette. Az árnyék a lap tetején és alján csak a szöveget halványítja, a háttéren nincs fekete sáv.": "Bible reader: the header is solid, and the search that slid up no longer sticks out next to it. The shadow at the top and bottom of the page only dims the text, with no black band on the background.",
  "Biblia térkép: a hely alatt bővebb leírás az OpenBible adataiból (a hely fajtája, mai azonosítása, más nevei, további versek). A „Vissza az igéhez” gomb helyett a Vissza gomb és az oldalra söprés visz pontosan ugyanahhoz a vershez; a bezárás a kis × a sarokban.": "Bible map: a fuller description below the place from OpenBible data (type of place, modern identification, other names, more verses). Instead of the “Back to the verse” button, the Back button and the side swipe take you to exactly the same verse; closing is the small × in the corner.",
  "Biblia versmenü: oldalra söpréssel is bezárul, a „Mégse” sor kikerült, a Kiemelés sorban a 4 legutóbb használt szín egy koppintással kiemel.": "Bible verse menu: it also closes with a side swipe, the “Cancel” row has been removed, and in the Highlight row the 4 most recently used colours highlight with one tap.",
  "Morze vétel kamerával: a vevő most a fényjeleknél is magától követi a beérkező tempót, és a „Vétel sebesség” csúszkát is odaállítja. A kamera képkockáinak pontos idejével számol, így a villogás lassan és gyorsan is helyes betűket ad. Kézzel is állíthatod, onnan követi tovább.": "Morse reception with the camera: the receiver now follows the incoming speed by itself for light signals too, and also sets the “Receive speed” slider to it. It calculates with the exact time of the camera frames, so slow and fast blinking both give correct letters. You can also set it by hand, and it follows on from there.",
  "Tudástár, 10.3: a cikk végén a fél tank szabályra mutató hivatkozás most a jó cikkre, a 10.1-re visz, minden nyelven.": "Knowledge base, 10.3: at the end of the article the reference to the half-tank rule now leads to the right article, 10.1, in every language.",
  "Noah: a segéd beállításai kiírják, mennyi memóriát jelent a telefon, ez kb. hány GB-os telefon, melyik modell fér bele, és ha egyik sem, miért nem. Noah kb. 8 GB-os telefontól fut.": "Noah: the assistant settings show how much memory the phone reports, roughly what size of phone in GB that is, which model fits, and if none does, why not. Noah runs on phones from about 8 GB.",
  "Beállítások, Készülékeim: látod, melyik készülékeiden aktív a prémium (típus, app vagy böngésző, utoljára mikor jelentkezett, és melyik az, amelyiket épp fogod). Amelyik már nem kell, például egy régi tablet, azt két koppintással leválaszthatod, és a helye felszabadul. Leválasztás 30 naponta egyszer.": "Settings, My devices: you see on which of your devices premium is active (type, app or browser, when it last checked in, and which one you are holding). One you no longer need, for example an old tablet, can be unlinked with two taps, and its slot is freed. Unlinking once every 30 days.",
  "Morze vétel hangból: a vevő magától követi a beérkező jel tempóját, lassút és gyorsat is, és a „Vétel sebesség” csúszkát is odaállítja. Kézzel is állíthatod, onnan követi tovább. Az első betűk is helyesen jönnek, ha a csúszka nem a jó tempón állt.": "Morse reception from sound: the receiver follows the speed of the incoming signal by itself, slow and fast, and also sets the “Receive speed” slider to it. You can also set it by hand, and it follows on from there. The first letters also come out right if the slider was not at the right speed.",
  "Vészsíp és hanggenerátor a telefonos appban: a lapjukon a hangerő magától maximumra áll, kilépéskor visszaáll a korábbira, és a hang a telefon hangszóróján szól akkor is, ha fülhallgató vagy Bluetooth-eszköz csatlakozik.": "Emergency whistle and tone generator in the phone app: on their pages the volume goes to maximum by itself and returns to the previous level when you leave, and the sound plays from the phone's speaker even when headphones or a Bluetooth device are connected.",
  "Biblia könyvválasztó: az Újszövetség csoportjai (evangéliumok, Apostolok cselekedetei, Pál levelei, általános levelek, Jelenések) saját, jól elkülönülő színt kaptak.": "Bible book picker: the New Testament groups (gospels, Acts of the Apostles, Paul's letters, general letters, Revelation) got their own, clearly distinct colours.",
  "Az „Ajánld egy barátodnak” a tesztidőszakban egyelőre nem látszik.": "“Recommend to a friend” is not shown for now during the test period.",
  "Biblia olvasás közben: a kereső az előzményekkel fent, a fejléc alatt van; lefelé görgetve felcsúszik, visszahúzva előjön. Olvasáskor a PrepperPapa fejléc nem látszik, a Biblia-fejléc kicsit magasabb lett, alatta finom árnyék a könyv- és fejezetválasztón is.": "While reading the Bible: the search with history is at the top, below the header; it slides up when you scroll down and comes back when you pull back. While reading, the PrepperPapa header is not shown, the Bible header is a little taller, with a fine shadow below it on the book and chapter picker too.",
  "Biblia könyvválasztó: olvasás után a kereső újra teljesen látszik, nem csúszik a fejléc alá.": "Bible book picker: after reading, the search is fully visible again and does not slide under the header.",
  "Frissítés: ha egy frissítés nem fejeződik be, az app névtelenül feljegyzi, hol akadt el, hogy javítani tudjuk. A telepítés jóváhagyása megbízhatóbban nyílik meg.": "Update: if an update does not finish, the app records anonymously where it got stuck, so that we can fix it. Approval of the installation opens more reliably.",
  "Biblia olvasás közben: vékonyabb fejléc, kevesebb szöveget takar. Alul ott a kereső az előzményekkel; lefelé görgetve elbújik, visszahúzva újra előjön.": "While reading the Bible: a thinner header that covers less text. The search with history is at the bottom; it hides when you scroll down and comes back when you pull back.",
  "Ajánlók: ha egy helyen több ajánló is van, az app váltogatja őket, nem mindig ugyanazt mutatja.": "Recommendations: if there are several recommendations in one place, the app rotates them instead of always showing the same one.",
  "Noah: a kérdés elküldése után azonnal látszik, hogy gondolkodik (a három pötty), nem marad üresen a válaszbuborék.": "Noah: right after sending a question you can see that it is thinking (the three dots); the answer bubble does not stay empty.",
  "Biblia: a lengyel UBG 2017 szövegében a kiadó hibajegyzéke szerinti három javítás (4Mózes 26,31, Nehémiás 12,35, Júdás 11). A már letöltött lengyel Biblia magától frissül.": "Bible: three corrections in the Polish UBG 2017 text according to the publisher's errata (Numbers 26:31, Nehemiah 12:35, Jude 11). An already downloaded Polish Bible updates by itself.",
  "Biblia: a lengyel fordítás ismét az Uwspółcześniona Biblia Gdańska (UBG 2017), most már a kiadó (Fundacja Wrota Nadziei) írásos engedélyével. A versek számozása nem változott, a könyvjelzők, kiemelések és jegyzetek ugyanott maradnak; a már letöltött lengyel Biblia magától cserélődik.": "Bible: the Polish translation is again the Uwspółcześniona Biblia Gdańska (UBG 2017), now with the written permission of the publisher (Fundacja Wrota Nadziei). Verse numbering has not changed, and bookmarks, highlights and notes stay in the same place; an already downloaded Polish Bible is replaced by itself.",
  "Fortiprep-kalkulátor: a kedvezményes ajánlat a számítás eredménye után jelenik meg.": "Fortiprep calculator: the discount offer appears after the calculation result.",
  "Fortiprep-kalkulátor: az ajánlat a lap alján jól láthatóan, nagy kuponkóddal (egy koppintással másolható) és kiemelt vásárlás gombbal.": "Fortiprep calculator: the offer is clearly visible at the bottom of the page, with a large coupon code (copied with one tap) and a prominent buy button.",
  "A Fortiprep-kalkulátor csempéje az alkalmazás saját vonalas ikonstílusában jelenik meg.": "The Fortiprep calculator tile appears in the app's own line icon style.",
  "Új kalkulátor: Fortiprep vagy konzerv. Ugyanannyi kalóriára és ugyanarra az időszakra kiszámolja, mennyibe kerül a tartalék, a konzerv lejárat miatti cseréjével együtt.": "New calculator: Fortiprep or canned food. For the same calories and the same period it calculates how much the reserve costs, including replacing canned food as it expires.",
  "A képernyő alján megjelenő hibakereső állapotsor kikerült.": "The debugging status bar at the bottom of the screen has been removed.",
  "Szobák: ha az alkalmazásba visszatérve egy háttér-ellenőrzés nem kapott választ, az elakadt kérések feltorlódhattak, és utána a szoba üres maradhatott (szürke pont, nem jöttek az üzenetek). Az ellenőrzés most egyszerre csak egyszer fut, és a válasz nélküli kérés 10 másodperc után megszakad.": "Rooms: if a background check got no answer when returning to the app, stuck requests could pile up, and afterwards the room could stay empty (grey dot, no messages arriving). The check now runs only once at a time, and a request with no answer is cancelled after 10 seconds.",
  "Bibliai ébresztő: a frissítés nem szakítja meg többé a reggeli felolvasást. Ha ébresztéskor új változat érhető el, a frissítés megvárja az „Áldott napot” zárást, és csak utána indul el magától.": "Bible alarm: an update no longer interrupts the morning read-aloud. If a new version is available at wake-up time, the update waits for the “Have a blessed day” closing and only then starts by itself.",
  "Biblia: fordításváltáskor most ugyanarra a versre jutsz, nem csak ugyanarra a fejezetre, a más számozású helyeken is (a címes zsoltárok, Jóel 3–4, Malakiás 4 és 3,19–24, 3Mózes 5–6 a német Bibliában, az orosz Biblia zsoltárszámozása).": "Bible: when you change translation you now get to the same verse, not just the same chapter, also where numbering differs (titled psalms, Joel 3-4, Malachi 4 and 3:19-24, Leviticus 5-6 in the German Bible, the psalm numbering of the Russian Bible).",
  "Biblia: a kereszthivatkozások a címes zsoltároknál és a más számozású fordításokban is a jó versre mutatnak, és az orosz Bibliában is bekapcsolhatók.": "Bible: cross references point to the right verse in titled psalms and in translations with different numbering, and they can be turned on in the Russian Bible too.",
  "Biblia: a kiemelések, kommentárok és könyvjelzők minden fordításban ugyanannál a versnél látszanak, akármelyikben jelölted őket.": "Bible: highlights, commentaries and bookmarks appear at the same verse in every translation, whichever one you marked them in.",
  "Biblia: a német, a lengyel és a román jegyzetek (Scofield-jegyzetek, mértékegységek) kiemelt szavai és igeidézetei mostantól az app saját Bibliájának szövegét idézik (Luther 1912, Gdańskai Biblia 1881, Biblia 1914). A már letöltött jegyzetcsomag magától frissül.": "Bible: highlighted words and verse quotations in the German, Polish and Romanian notes (Scofield notes, units) now quote the text of the app's own Bible (Luther 1912, Gdańsk Bible 1881, Biblia 1914). An already downloaded notes package updates by itself.",
  "Tudástár: a román „Remény a felkészülés határán” cikk a Példabeszédek 27,12-t idézi (a 22,3 helyett, amely az 1914-es román Bibliában mást mond).": "Knowledge base: the Romanian article “Hope at the edge of preparedness” quotes Proverbs 27:12 (instead of 22:3, which says something different in the 1914 Romanian Bible).",
  "Biblia: a román fordítás mostantól az 1914-es Szent Szinódusi Biblia (ortodox, közkincs). A versek számozása nem változott, a könyvjelzők, kiemelések és jegyzetek ugyanott maradnak; ahol ez a Szeptuagintán alapuló kiadás egy verset nem tartalmaz, a helyén rövid megjegyzés áll.": "Bible: the Romanian translation is now the 1914 Holy Synod Bible (Orthodox, public domain). Verse numbering has not changed, and bookmarks, highlights and notes stay in the same place; where this Septuagint-based edition does not contain a verse, a short note stands in its place.",
  "Hirdetések: az app névtelenül számolja, hányszor jelenik meg és hányszor nyitják meg az egyes hirdetéseket. Személyhez és eszközhöz nem kötött, ugyanúgy, mint a meglévő névtelen használati napló.": "Ads: the app counts anonymously how many times each ad is shown and opened. It is not linked to a person or device, the same as the existing anonymous usage log.",
  "Tudástár: a német és a lengyel „Remény a felkészülés határán” cikk igeversei mostantól az app saját Bibliájából (Luther 1912, Gdańskai Biblia 1881) szó szerint idéznek.": "Knowledge base: the Bible verses of the German and Polish articles “Hope at the edge of preparedness” are now quoted word for word from the app's own Bible (Luther 1912, Gdańsk Bible 1881).",
  "Biblia: a Vészhelyzeti igék és a Próféciák listája minden nyelven teljes (eddig a magyaron kívül csak néhány tétel jelent meg), és a zsoltárok versszámát a választott fordítás számozásához igazítja.": "Bible: the Emergency verses and Prophecies lists are complete in every language (until now only a few items appeared outside Hungarian), and psalm verse numbers are adjusted to the numbering of the chosen translation.",
  "Biblia: fordításváltáskor a Malakiás 4. és a Jóel 3. fejezet a német Bibliában a megfelelő helyen nyílik meg (Malakiás 3,19, illetve Jóel 4), és vissza.": "Bible: when you change translation, Malachi 4 and Joel 3 open at the matching place in the German Bible (Malachi 3:19 and Joel 4), and back.",
  "Biblia: a német fordítás mostantól a Luther-Biblia 1912-es kiadása, a lengyel a Gdańskai Biblia 1881-es kiadása (mindkettő közkincs). A versek számozása nem változott, a könyvjelzők, kiemelések és jegyzetek ugyanott maradnak. Akinek a régi le volt töltve, annál az app magától kicseréli.": "Bible: the German translation is now the 1912 edition of the Luther Bible, the Polish one the 1881 edition of the Gdańsk Bible (both public domain). Verse numbering has not changed, and bookmarks, highlights and notes stay in the same place. If you had the old one downloaded, the app replaces it by itself.",
  "SOS: a hívás gomb és az újraélesztés-ütem „Mentő” sora is annak az országnak a segélyhívó számát mutatja, ahol a telefon van; ha ez nem biztos, „Segélyhívás (az EU-ban 112)”, és a gomb a 112-t hívja. Magyarul változatlanul 112.": "SOS: the call button and the “Ambulance” row of the CPR rhythm show the emergency number of the country the phone is in; if this is not certain, “Emergency call (112 in the EU)”, and the button calls 112. In Hungarian it is 112 as before.",
  "Szobák: az internetes szobába küldött kép is titkosítva megy, a szoba kulcsával, ugyanúgy, mint a szöveg. A korábban küldött képek továbbra is látszanak. Ha a titkosítás nem sikerül, a kép nem megy el, és csatolva marad.": "Rooms: pictures sent to an internet room are also encrypted, with the room key, the same as text. Pictures sent earlier are still shown. If encryption fails, the picture is not sent and stays attached.",
  "Helyi szoba: a nagyobb képek is elmennek (eddig a 100 kB körüli vagy nagyobb kép titkosítása elakadt).": "Local room: larger pictures are sent too (until now encryption got stuck for pictures of about 100 kB or more).",
  "SOS és esés-érzékelés: a nem magyar nyelvű szövegek annak az országnak a segélyhívó számát írják, ahol a telefon van (például 911, 999, 000, 111); ha ez nem biztos, „a helyi segélyhívó számot (az EU-ban 112)”. Magyarul változatlanul 112.": "SOS and fall detection: texts in languages other than Hungarian give the emergency number of the country the phone is in (for example 911, 999, 000, 111); if this is not certain, “the local emergency number (112 in the EU)”. In Hungarian it is 112 as before.",
  "Esés-érzékelés: aki már korábban bekapcsolta, egyszer megkapja a tudnivalót, és az „Elolvastam, értem.” pipával elfogadja; az esés-érzékelés közben bekapcsolva marad.": "Fall detection: anyone who turned it on earlier gets the notice once and accepts it with the “I have read and understood this.” tick; fall detection stays on meanwhile.",
  "Token tárca: a „Könyvek összefésülése” részen látszik, mikor ellenőrizte utoljára magától a telefon (két percenként), mikor küldött változást és mikor kapott könyvet. Ha nincs elérhető Gerah-szoba, ezt írja ki.": "Token wallet: the “Reconcile ledgers” section shows when the phone last checked by itself (every two minutes), when it sent changes and when it received a ledger. If no Gerah room is available, it says so.",
  "Frissítés: a telepítő megnyitása után eltűnik a „Letöltés és telepítés” gomb, helyette egy sor jelzi, hogy a telepítés folyamatban van. Ha nem fejeződik be, a gomb visszajön.": "Update: after the installer opens, the “Download and install” button disappears, and a row shows instead that installation is in progress. If it does not finish, the button comes back.",
  "Kockázatelemzés: az „Eszközök a helyszíneken” lista helyszínenként csoportosít, eszközönként egy sorban; az áthelyezés a sor végi kis gombbal megy.": "Risk analysis: the “Equipment at the locations” list groups by location, one row per item; moving is done with the small button at the end of the row.",
  "Irattárca és Token tárca: a zárolt képernyőn az „Ujjlenyomattal” felirat helyett egy ujjlenyomat-ikon van a Belépés mellett, így minden nyelven elfér.": "Document wallet and Token wallet: on the locked screen a fingerprint icon next to Sign in replaces the “With fingerprint” label, so it fits in every language.",
  "SOS és esés-érzékelés: bekapcsolás előtt egy tudnivalót kell elolvasni és bejelölni (az app nem hív mentőt, életveszélyben a 112-t hívd). A Vészkártya adatai (vércsoport, allergia, gyógyszer, betegség, kontakt) csak akkor mennek az SOS-szal, ha ezt külön bejelölöd; alapból nem mennek. A szobatársak értesítése is a 112-re figyelmeztet.": "SOS and fall detection: before turning them on you must read and tick a notice (the app does not call an ambulance; in a life-threatening situation call 112). Emergency card data (blood type, allergy, medication, illness, contact) go with the SOS only if you tick this separately; by default they do not. The notification to room mates also points to 112.",
  "Szobák: ha egy üzenet titkosítása nem sikerül (például ezen a telefonon hiányzik a szoba kulcsa), az üzenet nem megy el titkosítatlanul. Az app pirossal kiírja, hogy nem ment el, a szöveg a mezőben marad, és újra be kell lépni a szobába. Ugyanez áll a módosításra, a képre és a megosztott képre is.": "Rooms: if encrypting a message fails (for example the room key is missing on this phone), the message is not sent unencrypted. The app shows in red that it was not sent, the text stays in the field, and you need to enter the room again. The same applies to edits, pictures and shared pictures.",
  "Irattárca és Token tárca: az ujjlenyomatos feloldás újra bekapcsolható. Ha a saját PIN beállításakor kikapcsolt, a nyitott tárcában az „Ujjlenyomat bekapcsolása” gombbal, a PIN megadása után visszakapcsolod, és a zárolt képernyőn újra ott az „Ujjlenyomattal” gomb.": "Document wallet and Token wallet: fingerprint unlock can be turned on again. If it was turned off when you set your own PIN, you turn it back on in the open wallet with the “Turn on fingerprint unlock” button after entering the PIN, and the “With fingerprint” button is back on the locked screen.",
  "Irattárca és tárca: a tudomásulvétel helyett egy „Fontos tudnivaló” képernyő jelenik meg a tárca létrehozásakor (meglévő tárcánál egyszer, a következő megnyitáskor). A pipa és a Tovább gomb a szöveg végén van. A Gerah-ról szóló bekezdés a Gerah első megnyitásakor is megjelenik.": "Document wallet and wallet: instead of the acknowledgement, an “Important information” screen appears when the wallet is created (for an existing wallet once, at the next opening). The tick and the Next button are at the end of the text. The paragraph about Gerah also appears when Gerah is first opened.",
  "Tudástár: Noah sora egyetlen keskeny sorba került, így alatta több téma fér el.": "Knowledge base: Noah's row has moved into a single narrow row, so more topics fit below it.",
  "Újranyitás: ha az app üres zöld képernyővel jönne vissza, magától újratölti a lapot, nem kell bezárni és újranyitni.": "Reopening: if the app would come back with an empty green screen, it reloads the page by itself; no need to close and reopen it.",
  "Esés-SOS: ha egy szoba titkosítása nem sikerül, oda az SOS nem megy el titkosítatlanul. Az app pirossal kiírja, hogy az SOS nem ment el, és hogy életveszélyben hívd a 112-t. A vészsíp ilyenkor is szól.": "Fall SOS: if encryption fails for a room, the SOS is not sent there unencrypted. The app shows in red that the SOS was not sent and that in a life-threatening situation you should call 112. The emergency whistle still sounds.",
  "Irattárca és Token tárca: új tárca létrehozásakor tudomásul kell venni, hogy a kulcsokat (PIN, helyreállító kód, seed phrase) csak te ismered; a meglévő tárcáknál ez egyszer, a következő megnyitáskor jelenik meg.": "Document wallet and Token wallet: when creating a new wallet you must acknowledge that only you know the keys (PIN, recovery code, seed phrase); for existing wallets this appears once, at the next opening.",
  "Ki vagyok?: a kép azonnal a helyén van, nem töltődik be később.": "Who am I?: the picture is in place at once and does not load later.",
  "Irattárca és Token tárca: az első megnyitáskor a saját PIN-kódodat állítod be (nincs előre megadott PIN), a mezőben nincsenek előre kitett pöttyök.": "Document wallet and Token wallet: on first opening you set your own PIN (there is no preset PIN), and the field has no pre-filled dots.",
  "Elfelejtett PIN: a beállításkor kapsz egy mentési kódot (írd le papírra), és megadhatsz egy emlékeztető mondatot. Az „Elfelejtettem a PIN-t” alatt a mentési kóddal vagy ujjlenyomattal új PIN-t állíthatsz be, az adataid megmaradnak.": "Forgotten PIN: when setting it up you get a recovery code (write it down on paper) and you can add a reminder sentence. Under “I forgot my PIN” you can set a new PIN with the recovery code or your fingerprint, and your data is kept.",
  "Feloldó kód: a tesztelői kód is a fiókodhoz tartozik. Ugyanazzal a belépéssel legfeljebb két készüléken működik, a második készüléken nem kell újra beírni. Harmadik készüléken nem oldódik fel.": "Unlock code: the tester code also belongs to your account. With the same sign-in it works on at most two devices, and you do not need to enter it again on the second device. It does not unlock on a third device.",
  "Akkumulátor: a helyi szobák háttérszolgáltatása 30 perc csend után leáll, a Bluetooth- és hálózati keresés csak akkor fut, amikor a helyi szobákat nézed vagy egy helyi szoba épp aktív, és takarékos módban keres. A közeli szobák a megnyitás után pár másodperccel jelennek meg; ha hosszabb csend után érkezik helyi üzenet a háttérben, késhet.": "Battery: the local rooms background service stops after 30 minutes of silence; Bluetooth and network scanning run only while you are looking at local rooms or a local room is active, and they scan in power-saving mode. Nearby rooms appear a few seconds after opening; a local message arriving in the background after a longer silence may be delayed.",
  "Kezdőlap: a tudástár- és bibliai ajánló között véletlenszerűen egy termékajánló is sorra kerül, ugyanakkora kártyán, a készleted és a „Mi hiányzik?” alapján (például ha energia vagy víz hiányzik, vagy lejáró tétel van).": "Home: among the knowledge base and Bible recommendations a product recommendation also comes up at random, on a card of the same size, based on your stock and “What's missing?” (for example if energy or water is missing, or an item is about to expire).",
  "Felugró ajánló: két felugró között legalább 30 perc telik el. A tulajdonosi teszt-kapcsoló felirata egyértelműbb lett.": "Pop-up recommendation: at least 30 minutes pass between two pop-ups. The label of the owner test switch is clearer.",
  "Térkép: egy kapott GPS-hivatkozás, Google Térkép-pont vagy koordinátás szöveg megnyitható a PrepperPapa térképén (Android: „Megnyitás ezzel” vagy Megosztás > PrepperPapa). A pont a térkép közepére kerül, a neve kitöltve, a Mentéssel saját pont lesz belőle.": "Map: a GPS link, Google Maps point or text with coordinates that you received can be opened on the PrepperPapa map (Android: “Open with” or Share > PrepperPapa). The point goes to the centre of the map with its name filled in, and Save turns it into your own point.",
  "Ajánlók internet nélkül is: a legutóbb letöltött ajánlók és képeik offline is megjelennek a szokásos gyakorisággal; a termék oldala akkor nyílik meg, amikor lesz kapcsolat.": "Recommendations without internet too: the most recently downloaded recommendations and their pictures also appear offline at the usual frequency; the product page opens when there is a connection.",
  "Kezdőlap: a felugró ajánló egy megnyitás alatt legfeljebb egyszer jelenik meg (minden második megnyitásnál, naponta legfeljebb ötször), akárhányszor térsz vissza a kezdőlapra.": "Home: the pop-up recommendation appears at most once per opening (every second opening, at most five times a day), however many times you return to the start page.",
  "Telepített app: a kötelező frissítés képernyőjéről kikerült a kézi, böngészős letöltés. Ha a telepítés nem indul el, ott a telepítési engedély beállításának útja áll.": "Installed app: manual browser download has been removed from the mandatory update screen. If installation does not start, it shows how to set the install permission instead.",
  "Vagyonkezelő: önálló termék, a prémiumot nem oldja fel. Ha csak a Vagyonkezelő van meg, az működik, minden más (a hirdetésekkel együtt) az ingyenes változat szerint látszik.": "Asset manager: a separate product, it does not unlock premium. If you only have the Asset manager, that works, and everything else (ads included) appears as in the free version.",
  "Kezdőlap: a csempék alatt nincs többé állandó hirdetés-kártya. Ott a váltakozó tudástár- és bibliai ajánló látszik; viharjelzés után néha, véletlenszerűen egy hozzá illő termékajánló is sorra kerül, pontosan a tudástár-ajánló méretében.": "Home: no more permanent ad card below the tiles. The alternating knowledge base and Bible recommendation is shown there; after a storm warning, occasionally and at random, a matching product recommendation also comes up, exactly the size of the knowledge base recommendation.",
  "Mi hiányzik?: minden sor elmondja, miért fontos a hiányzó tétel, és mivel érdemes pótolni. Termékajánló legfeljebb két sorban, kicsiben, a tanács alatt.": "What's missing?: every row says why the missing item matters and what to replace it with. Product recommendations in at most two rows, small, below the advice.",
  "Tükör: a kép ujjal húzva mozgatható, nagyítva minden irányba, így közelről (például kontaktlencse behelyezésekor) a szem a felső kamera mellé tolható. Alapból a kép a képernyő teteje felé tolódik, a telefon megjegyzi az utolsó helyzetet és nagyítást, dupla koppintás visszaállítja. A felső fénykeret keskenyebb lett.": "Mirror: the picture can be moved by dragging with a finger, in every direction when zoomed, so close up (for example when putting in contact lenses) the eye can be moved next to the front camera. By default the picture is shifted toward the top of the screen; the phone remembers the last position and zoom, and a double tap resets it. The top light frame is narrower.",
  "Prémium: a tudástár-cikkek végén is megjelenik egy csendes ajánló (a Készlet lista és az Áram-kalkulátor mellett). Felugró hirdetés továbbra sincs, a kezdőlapon és a Háztartás oldalon sincs hirdetés.": "Premium: a quiet recommendation also appears at the end of knowledge base articles (besides the Stock list and the Power calculator). There are still no pop-up ads, and no ads on the start page or the Household page.",
  "Kezdőlap: az „Ajánld egy barátodnak” kártya naponta legfeljebb egyszer jelenik meg, a nap egy véletlen megnyitásánál, a napi tipp helyén.": "Home: the “Recommend to a friend” card appears at most once a day, at a random opening of the day, in place of the daily tip.",
  "Prémium: nincs felugró hirdetés, és a kezdőlapon meg a Háztartás oldalon sincs hirdetés. Csak a Készlet listában és az Áram-kalkulátorban marad egy-egy csendes ajánló.": "Premium: no pop-up ads, and no ads on the start page or the Household page. Only the Stock list and the Power calculator keep one quiet recommendation each.",
  "Tudástár súgó: az alap- és az életmentő cikkek ingyenesek, a bővített tudástár a Prémium része.": "Knowledge base help: the basic and life-saving articles are free; the extended knowledge base is part of Premium.",
  "Telepített app: a kötelező frissítés képernyőjén mindig ott van a kézi letöltés linkje és a telepítési engedély beállítása, a telefon nyelvén.": "Installed app: the mandatory update screen always has the manual download link and the install permission setting, in the phone's language.",
  "Kezdőlap: az „Ajánld egy barátodnak” kártya ritkábban, véletlenszerűen jelenik meg (nagyjából minden harmadik megnyitáskor), és egy órán belül soha nem jön elő újra. Az ingyenes és a fizetős változatban is így működik.": "Home: the “Recommend to a friend” card appears less often and at random (roughly every third opening), and never comes back within an hour. It works this way in both the free and the paid version.",
  "Gerah: a profilnév megadásával a Gerah-azonosítód is magától elkészül, ugyanezzel a névvel, külön lépés nélkül. Akinek már van profilneve, de Gerah-ja még nincs, annál a következő megnyitáskor jön létre. A kézzel létrehozott Gerah-hoz az app nem nyúl.": "Gerah: entering your profile name also creates your Gerah ID by itself, with the same name, without a separate step. If you already have a profile name but no Gerah yet, it is created at the next opening. The app does not touch a Gerah created manually.",
  "Szobák: megnyitáskor a beszélgetés a végén áll, ha mindent elolvastál; ha van új üzenet, az elsőnél nyílik meg egy „Új üzenetek” elválasztóval. A később betöltődő képek és üzenetek nem mozdítják el.": "Rooms: on opening, the conversation is at the end if you have read everything; if there are new messages, it opens at the first one with a “New messages” divider. Pictures and messages loading later do not move it.",
  "Szobák: a régi szerverhiba miatt csonka üzenetek „sérült üzenet” jelzést kapnak a félrevezető „ez a kulcs nem ehhez a szobához való” helyett.": "Rooms: messages truncated by an old server error are marked “damaged message” instead of the misleading “this key is not for this room”.",
  "A felolvasás hangjegy-gombja csak a Biblia és az imák képernyőjén látszik, és soha nem takarja a narancs + gombot.": "The read-aloud music note button is shown only on the Bible and prayer screens, and never covers the orange + button.",
  "Kezdőlap: az „Ajánld egy barátodnak” kártya teljes egészében a menüsor fölött áll. A felugró ajánlat szimmetrikus, a termék képe egészben látszik, mögötte elmosva.": "Home: the “Recommend to a friend” card sits entirely above the menu bar. The pop-up offer is symmetrical, and the product picture is shown whole, with a blurred copy behind it.",
  "Készlet: a lejárati ajánló sáv a listával együtt gördül, nem ugrál a fejléc alatt.": "Stock: the expiry recommendation bar scrolls with the list and does not jump about below the header.",
  "Beállítások: a rövid rezgés kapcsolója minden megnyitáskor újra ellenőrzi a telefont; alapból bekapcsolt.": "Settings: the short vibration switch checks the phone again on every opening; it is on by default.",
  "Felugró ajánlat az ingyenes változatban: minden második megnyitáskor, naponta legfeljebb ötször.": "Pop-up offer in the free version: every second opening, at most five times a day.",
  "Az „Ajánld egy barátodnak” és a Használati útmutató a választott nyelvű oldalra visz, és csak a Beállításokban van.": "“Recommend to a friend” and the User guide take you to the page in the chosen language, and are only in Settings.",
  "Fordítás: a Ki vagyok? oldal gombjai és a családtag-sor gyógyszer címkéje minden nyelven lefordítva.": "Translation: the buttons of the Who am I? page and the medication label of the family member row are translated in every language.",
  "Ingyenes és prémium változat: ingyen 2 saját családtag, 50 saját termék, interneten a térkép heti 2 útvonaltervezéssel. A prémium kód ezeket feloldja, az offline térképletöltéssel és a bővített tudástárral együtt.": "Free and premium versions: free gives 2 family members of your own, 50 products of your own, and the map online with 2 route plans a week. The premium code unlocks these, together with offline map download and the extended knowledge base.",
  "A bemutató adat a korláton felül is betöltődik, de csak megnézhető: nem szerkeszthető, és nem számít bele a korlátba.": "Demo data also loads beyond the limit, but can only be viewed: it cannot be edited and does not count toward the limit.",
  "Vagyonkezelő: mindenki kipróbálhatja 10 saját tételig és 1 számláig, minta háztartással. A teljes használathoz a külön Vagyonkezelő kell, a prémium kód ezt nem oldja fel.": "Asset manager: everyone can try it with up to 10 items of their own and 1 account, with a sample household. Full use requires the separate Asset manager; the premium code does not unlock it.",
  "Szobák: prémiummal legfeljebb 10 saját szoba és bármennyi tagság.": "Rooms: with premium at most 10 rooms of your own and any number of memberships.",
  "Ajánlások: helyzethez illő ajánló kártyák (például lejáró készletnél), az ingyenes változatban felugró hirdetések is. SOS, lámpa, riasztó, vészkártya, navigáció és éjszakai mód alatt soha nem jelennek meg.": "Recommendations: recommendation cards matching the situation (for example when stock is expiring), and in the free version pop-up ads too. They never appear during SOS, the light, the alarm, the emergency card, navigation or night mode.",
  "A bemutató adat nevei és az életkor most minden nyelven a választott nyelven látszanak.": "Demo data names and ages now appear in the chosen language in every language.",
  "A Morze és a Fax ingyenes: nincs próbaidő és nincs emlékeztető, mindkettő teljes egészében használható.": "Morse and Fax are free: no trial period and no reminder, both can be used in full.",
  "A Fax neve egyszerűbb: a Kommunikáció lapon és a Fax képernyőn csak „Fax” áll.": "Fax has a simpler name: the Communication page and the Fax screen just say “Fax”.",
  "Feloldás: a kód a fiókodhoz tartozik, és legfeljebb két készüléken használható. A feloldott modulok offline is működnek.": "Unlock: the code belongs to your account and can be used on at most two devices. Unlocked modules also work offline.",
  "Használati útmutató: jól látható gomb a Ki vagyok? oldal tetején és a Beállításokban, a prepperpapa.hu útmutatójára visz.": "User guide: a clearly visible button at the top of the Who am I? page and in Settings, leading to the guide on prepperpapa.hu.",
  "Ki vagyok? oldal: az Elérhetőségek közül kikerült a blog.": "Who am I? page: the blog has been removed from Contact.",
  "Térkép: modern térkép-ikonok a turistapontokon. Ivóvíz, forrás, kút, menedékház, táborhely, csúcs, barlang, kilátó, pihenő, útjelző, rom, vár, kereszt és rádió-átjátszó: mind egységes, színes kör, jól látható fehér jellel, éjszakai módban vörösen. A turistautak jelzései (például a piros kereszt) nem változtak.": "Map: modern map icons on hiking points. Drinking water, spring, well, mountain hut, campsite, peak, cave, lookout, rest area, signpost, ruin, castle, cross and radio repeater: all a uniform coloured circle with a clearly visible white symbol, red in night mode. Hiking trail markings (for example the red cross) have not changed.",
  "Háztartás, családtag adatlapja: a vészkártyára kerülő mezők neve ugyanaz, mint a kártyán: „A kártya tulajdonosának telefonszáma”, „Vész esetén értesítendő személy” és „Vész esetén értesítendő telefonszáma”. Így másnak kitöltve is egyértelmű, kinek a számát kell beírni.": "Household, family member details: the fields that go onto the emergency card have the same names as on the card: “Card holder's phone number”, “Person to notify in an emergency” and “Phone number to notify in an emergency”. So it is clear whose number to enter, even when filling it in for someone else.",
  "Vészkártya: a mezők neve egyértelműbb. „A kártya tulajdonosának telefonszáma” (a kártya másnak is kitölthető, ezért nem „saját”), „Vész esetén értesítendő személy” és „Vész esetén értesítendő telefonszáma”. A kártya nézetén, az SOS lapon és a nyomtatott kártyán is így szerepel.": "Emergency card: clearer field names. “Card holder's phone number” (the card can be filled in for someone else, so not “own”), “Person to notify in an emergency” and “Phone number to notify in an emergency”. This is how they appear in the card view, on the SOS page and on the printed card.",
  "Hanggenerátor: a gombok alatt kiírja, hogy a hang szól, csak hallhatatlanul magas, tehát az a normális, ha semmit nem hallasz. Az új Próbahang gomb egy rövid, jól hallható sípot ad, így ellenőrizheted, hogy a telefon hangszórója működik. A futó hangot nem állítja le.": "Tone generator: below the buttons it says that the sound is playing, only inaudibly high, so it is normal if you hear nothing. The new Test tone button gives a short, clearly audible beep, so you can check that the phone's speaker works. It does not stop the running tone.",
  "Ha egy funkcióhoz hiányzik az engedély (kamera, mikrofon, helymeghatározás, értesítés, mozgásérzékelő, Bluetooth), egy lap mondja meg, mi hiányzik, mire kell, és mi a teendő. A telefonos appban egy koppintással megnyílik az app beállítása (értesítésnél az értesítési beállítás), és ha a telefon még rákérdezhet, előbb újra megkérdezi. Böngészőben a lap a böngésző saját kérdését hozza fel újra, és pontosan megmutatja, hol kapcsolhatod be: Chrome, telepített webapp, Samsung Internet, iPhone Safari, főképernyős iPhone-app és számítógép, a te eszközöd áll elöl. Androidon a PrepperPapa app megnyitását is felkínálja.": "If a feature is missing a permission (camera, microphone, location, notification, motion sensor, Bluetooth), a page tells you what is missing, what it is needed for and what to do. In the phone app one tap opens the app's settings (for notifications the notification settings), and if the phone can still ask, it asks again first. In a browser the page brings up the browser's own question again and shows exactly where you can turn it on: Chrome, installed web app, Samsung Internet, iPhone Safari, home screen iPhone app and computer, with your device first. On Android it also offers to open the PrepperPapa app.",
  "Tükör: ha az előlapi kamera nem a szokásos módon nyílik meg, más beállításokkal és a telefon kameralistájából is megpróbálja. Ha a kamerát egy másik alkalmazás fogja, vagy az engedély megvan, de nem jön kép, ezt külön megmondja, a teendővel együtt.": "Mirror: if the front camera does not open in the usual way, it also tries other settings and the phone's camera list. If the camera is held by another app, or permission is granted but no picture comes, it says so separately, together with what to do.",
  "Képküldés a telefon galériájából: a Google Fotókban (vagy bármelyik galériában) a Megosztás menüben megjelenik a PrepperPapa. Kiválasztva egyetlen lépés jön: koppints a szobára, és a kép (több kép is) azonnal elmegy. Utána egy másik szobára is koppinthatsz; a Kész bezárja. Ha még nem léptél be, előbb a belépés jön, utána a szobák.": "Sending pictures from the phone's gallery: in Google Photos (or any gallery) PrepperPapa appears in the Share menu. Choosing it brings a single step: tap the room, and the picture (several pictures too) is sent at once. Then you can tap another room too; Done closes it. If you have not signed in yet, sign-in comes first, then the rooms.",
  "Internetes szobák: az értesítésre koppintva a szoba azonnal a saját nevével nyílik meg, és akkor is betöltődnek az üzenetek, ha a telefon hosszabb ideig a háttérben volt. Eddig ilyenkor előfordult, hogy csak egy üres „Szoba” felirat jelent meg, és a régi üzenetek sem jöttek be. A fejlécben a zöld pont csak akkor zöld, amikor a szoba már tényleg kapcsolódott; ha a kapcsolat nem jön létre, az app magától újrapróbálja.": "Internet rooms: tapping the notification opens the room at once with its own name, and messages load even if the phone was in the background for a longer time. Until now it sometimes showed only an empty “Room” label, and old messages did not come in. The dot in the header is green only when the room has really connected; if the connection is not established, the app retries by itself.",
  "Biblia, apokrif könyvek: az Apokrif könyvek sáv alatt és minden apokrif könyv első fejezete fölött egy halk, kis betűs megjegyzés jelzi, hogy ezek nem a Szentírás részei, hanem ajánlott olvasmányok. A felolvasás ezt nem olvassa fel, a fejezet- és versszámozás nem változott.": "Bible, apocryphal books: below the Apocryphal books bar and above the first chapter of every apocryphal book a quiet, small-print note says that these are not part of Scripture but recommended reading. Read-aloud does not read it, and chapter and verse numbering has not changed.",
  "Letölthető térkép: kevesebb helyet foglal a telefonon. A határ menti tájegységek a határ után 10 km-nél véget érnek (a szomszéd ország külön letölthető), a szintvonalakból kimaradt a felesleges legrészletesebb szint, a turistautak és -pontok tömörítve kerülnek a telefonra, a külföldi turistautak pedig nem jönnek le kétszer. A közeli nézet nem változott.": "Downloadable map: takes less space on the phone. Border regions end 10 km past the border (the neighbouring country can be downloaded separately), the unnecessary most detailed level has been left out of the contour lines, hiking trails and points are compressed on the phone, and foreign hiking trails are no longer downloaded twice. The close view has not changed.",
  "Térkép letöltése: az Alaptérkép sora a valódi letöltési méretet mutatja (benne a domborzat-árnyékolással, amíg még nincs a telefonon).": "Map download: the Base map row shows the real download size (including hill shading, as long as it is not yet on the phone).",
  "Szellemi fegyverek: új, négyperces csatazene a megvalláshoz. Halkan indul, lassan épül fel, a küzdelem után diadalmas résszel zárul, majd elcsendesedik, és hézag nélkül kezdődik újra. Ha a korábbi csatazene le volt töltve, a telefon magától lecseréli az újra.": "Szellemi fegyverek (spiritual armour): new four-minute battle music for the confession. It starts quietly, builds slowly, ends with a triumphant part after the struggle, then fades and starts again without a gap. If the earlier battle music was downloaded, the phone replaces it with the new one by itself.",
  "Kalkulátorok: a telefon által visszatöltött vagy automatikusan kitöltött mezők már nem keverednek össze. Megnyitáskor a választók és a hozzájuk tartozó mezők összeillenek (a Lámpánál a „Saját megadás (mA)” mező, az Áramnál a kézi megadás bolt-link nélkül), és a régi eredmény eltűnik, ha egy adatot módosítasz. A Tájoló mért légnyomás-mezője nem indul 300-zal.": "Calculators: fields restored or autofilled by the phone no longer get mixed up. On opening the pickers and their fields match (for the Lamp the “Custom value (mA)” field, for Power manual entry without a shop link), and an old result disappears when you change a value. The Compass's measured air pressure field no longer starts at 300.",
  "Kalkulátorok: negatív, nulla vagy képtelen értékre (Menetidő, Esővíz, Fűtés, Víztisztítás, Kalória, Mit vigyek, Lámpa, Rádió) rövid, érthető üzenet jelenik meg a csendes vagy furcsa eredmény helyett.": "Calculators: for negative, zero or impossible values (Travel time, Rainwater, Heating, Water purification, Calories, What to take, Lamp, Radio) a short, clear message appears instead of a silent or strange result.",
  "Tudástár kereső: ékezet nélkül és kis-nagybetűtől függetlenül is talál („tuz”, „viz”, „ELELMISZER”), a hosszú keresőszó pedig nem lóg ki a képernyőről.": "Knowledge base search: finds results without accents and regardless of case (“tuz”, “viz”, “ELELMISZER”), and a long search term does not overflow the screen.",
  "Térkép kereső: a magyar települések is kereshetők (például Maglód, Eger), internet nélkül is; a találatra koppintva a térkép odaugrik.": "Map search: Hungarian settlements can also be searched (for example Maglód, Eger), even without internet; tapping a result makes the map jump there.",
  "Titkos QR: túl hosszú szövegnél érthető üzenet jelenik meg, és az előző QR-kód eltűnik.": "Secret QR: for text that is too long a clear message appears, and the previous QR code disappears.",
  "Nyelvek: a Háztartás számlálói ukránul és oroszul is helyes alakban állnak, nyelvváltás után nem marad régi nyelvű felirat (Háztartás címe, iránytű betűi, Tudástár témái), és orosz nyelven a levágott feliratok kiférnek.": "Languages: the Household counters have the correct forms in Ukrainian and Russian too, no old-language labels remain after a language change (Household title, compass letters, Knowledge base topics), and truncated labels fit in Russian.",
  "Éjszakai (piros) mód: a kezdőlap és a Kockázat gyűrűi, a Készlet lejárat-jelzései és gombja, a térkép jelölője, keresője és gombjai, valamint a Lámpa is pirosra vált; a Mit vigyek kijelölt személye pipát kap.": "Night (red) mode: the rings on the start page and in Risk, the Stock expiry marks and button, the map marker, search and buttons, and the Lamp also turn red; the selected person in What to take gets a tick.",
  "Felolvasás a telefon internetes hangjával: a várakozási idő beállítása most már tényleg eljut a Google hangmotorhoz.": "Read-aloud with the phone's online voice: the waiting time setting now really reaches the Google speech engine.",
  "Internetes szobák: a szobalista azonnal megjelenik. A telefon megjegyzi a legutóbb látott listát, és megnyitáskor rögtön azt mutatja, a frissítés a háttérben érkezik. A szobák képe külön, egyszer töltődik le, és utána a telefonról jön, ezért a lista töredék adatforgalommal frissül (négy szobánál kb. 250 kB helyett 1 kB alatt). Ha a szerver épp nem válaszol, a lista akkor is látszik, és egy elakadt kapcsolat sem tartja a „Betöltés...” feliratot a végtelenségig.": "Internet rooms: the room list appears at once. The phone remembers the last list it saw and shows it immediately on opening, with the update arriving in the background. Room pictures are downloaded separately, once, and afterwards come from the phone, so the list refreshes with a fraction of the data traffic (for four rooms under 1 kB instead of about 250 kB). If the server is not responding, the list is still shown, and a stuck connection no longer keeps the “Loading...” label forever.",
  "Értesítések: egy már látott vagy már jelzett szobaüzenetről a telefon nem küld újra értesítést, frissítés vagy újraindulás után sem.": "Notifications: the phone does not notify again about a room message already seen or already notified, not even after an update or restart.",
  "Biblia felolvasás, PrepperPapa hang: a Biblia beállításaiban választható, melyik felvétel olvasson: Imre (gépi, a teljes Biblia) vagy Charon (új, jobb minőségű férfihang). A Charon-felvétel könyvenként érkezik: csak az elkészült könyvek tölthetők le, a többit addig Imre olvassa fel. A két felvétel letöltése külön marad. Alapból továbbra is Imre szól.": "Bible read-aloud, PrepperPapa voice: in the Bible settings you can choose which recording reads: Imre (machine voice, the whole Bible) or Charon (new, better-quality male voice). The Charon recording arrives book by book: only finished books can be downloaded, and until then Imre reads the rest. The two recordings are downloaded separately. Imre is still the default.",
  "Térkép, offline letöltés: a Térkép-funkciók panel „Offline térkép” csoportjában elöl a saját országod áll (a felület nyelve szerint, angolnál a telefon országbeállítása szerint), tájegységenként. Minden tájegységnél három külön sor van: Alaptérkép, Turistautak és Turistapontok; mindegyik külön tölthető le és külön törölhető. Az alaptérkép törlése már nem viszi el a külön letöltött turistautakat és pontokat. Magyarország tájegységeinél is így van.": "Map, offline download: in the “Offline map” group of the Map functions panel your own country comes first (by interface language, for English by the phone's country setting), region by region. Each region has three separate rows: Base map, Hiking trails and Hiking points; each can be downloaded and deleted separately. Deleting the base map no longer removes separately downloaded hiking trails and points. The same applies to the regions of Hungary.",
  "Más országok térképei: a „Külföldi térképek” helyett. A listában csak az országok állnak, egy koppintással lenyílnak, és benne ugyanaz a három sor van az egész országra és a tájegységeire. A telefonos appban a lenyíló tájegységek eddig nem jelentek meg, ez is javítva.": "Maps of other countries: replaces “Maps abroad”. The list shows only the countries, which expand with one tap, with the same three rows for the whole country and its regions. In the phone app the expanding regions did not appear until now; this is fixed too.",
  "Szellemi fegyverek: a megvallást mostantól új, jobb minőségű férfihang olvassa fel, normál és lassú tempóban is.": "Szellemi fegyverek (spiritual armour): the confession is now read by a new, better-quality male voice, at normal and slow tempo.",
  "Biblia felolvasás, a telefon hangja internettel: a felolvasó most ugyanúgy kéri a Google internetes hangját, mint a Google saját könyvolvasója (a nyelv szerint, a Google választja ki a hangot), így ritkábban esik vissza a letöltött hangra.": "Bible read-aloud, the phone's voice with internet: the reader now requests Google's online voice the same way as Google's own book reader (by language, with Google choosing the voice), so it falls back to the downloaded voice less often.",
  "Biblia felolvasás, a telefon hangja internettel: a Google jobb, internetes hangja mostantól a hosszú verseknél és imáknál is megszólal. Eddig a hosszú szövegre a Google szervere nem válaszolt időben, és a telefon szó nélkül a letöltött, gyengébb hangra váltott. Most a felolvasó rövid, mondatnyi részekben adja át a szöveget; a kiemelés, a szünet a versek között, a megállítás és a folytatás ugyanúgy működik.": "Bible read-aloud, the phone's voice with internet: Google's better online voice now also speaks for long verses and prayers. Until now Google's server did not answer in time for long text, and the phone silently switched to the weaker downloaded voice. Now the reader passes the text in short, sentence-sized parts; highlighting, the pause between verses, stopping and resuming work the same way.",
  "Vissza gomb: a telefon Vissza gombja mostantól ugyanoda lép, mint a képernyő bal felső nyila (például a Számológépből a Kalkulátorokhoz, a Háztartás űrlapjából a listához). A Kezdőn a Vissza nem lépked vissza a korábbi képernyőkön, hanem a háttérbe teszi az appot. A Visszajelzés lapot és a súgót a Vissza bezárja, a mögötte lévő képernyő nem mozdul.": "Back button: the phone's Back button now goes to the same place as the top left arrow on the screen (for example from the Calculator to the calculators, from the Household form to the list). On the start page Back does not step back through earlier screens but puts the app in the background. Back closes the Feedback page and the help, and the screen behind them does not move.",
  "Akkumulátor: az app a Kezdőn és a legtöbb képernyőn már nem kér folyamatosan pontos GPS-helyzetet. Folyamatosan csak a nyitott Térkép kéri; a légnyomás-riasztás ritkán vesz mintát, riasztás előtt pedig egy frisset, hogy autóban ne riasszon.": "Battery: on the start page and most screens the app no longer requests a precise GPS position continuously. Only the open Map requests it continuously; the air pressure alarm samples rarely, and takes a fresh one before an alarm so that it does not alarm in a vehicle.",
  "Súgó: a Kockázat, a Beállítások, a Készlet és az SOS súgója a képernyőkhöz igazodik. A Kockázat-gyűrűn a szám az átlag, a színe a leggyengébb terület; az SOS súgója az esés utáni automatikus SOS-t is bemutatja; a „Mi hiányzik?” azt sorolja, ami hiányzik vagy kevés.": "Help: the help for Risk, Settings, Stock and SOS matches the screens. On the Risk ring the number is the average and the colour is the weakest area; the SOS help also presents the automatic SOS after a fall; “What's missing?” lists what is missing or low.",
  "Eszközök szoba az interneten át: ha az eszközök sürgős riasztást küldenek (például élesített riasztónál kinyílik az ajtó), a telefonod akkor is felébred, ha nem vagy a helyi szoba közelében, sőt akkor is, ha az app be van zárva. Ugyanaz a teljes képernyős RIASZTÁS jelenik meg, mint a helyi szobában: mi történt, mikor, melyik eszköz és melyik szoba, riasztó hangon, amíg meg nem nyomod a Láttam vagy a Megnyitom gombot.": "Tools room over the internet: if the devices send an urgent alarm (for example a door opens while the alarm is armed), your phone wakes up even if you are not near the local room, and even if the app is closed. The same full-screen ALARM appears as in the local room: what happened, when, which device and which room, with an alarm sound until you press Seen or Open.",
  "Térkép, offline letöltés: a térkép jobb alsó gombjával nyíló Térkép-funkciók panelen az „Offline térkép” csoport mostantól mindig látszik. Benne Magyarország tájegységei egyenként letölthetők, fölöttük a „Külföld: országok és tájegységeik” gomb nyitja meg az országok listáját, a nagyobb országoknál lenyíló tájegységekkel. Eddig a csoport kis képernyőn vagy nagyobb betűmérettel lecsúszott a panelről.": "Map, offline download: in the Map functions panel opened with the bottom right map button, the “Offline map” group is now always visible. In it the regions of Hungary can be downloaded one by one, and above them the “Abroad: countries and their regions” button opens the list of countries, with expanding regions for the larger countries. Until now the group slid off the panel on small screens or with a larger font size.",
  "Biblia, jegyzetek: a Scofield-jegyzet forrás-sorában „saját fordítás”, a mértékegység-csomagéban „saját összeállítás” áll, mind a nyolc nyelven.": "Bible, notes: the source line of the Scofield note says “own translation”, that of the units package “own compilation”, in all eight languages.",
  "Biblia, keresés: a keresett szót mostantól a szavak elején keresi, ékezettől függetlenül, a ragozott alakokkal együtt (például a „gíra” megtalálja a „gírát”, „gírád” alakokat, az „efa” az „éfát”, de nem a „figefát”). A „sékel” a Károli „siklus”, a „talentum” a „tálentom” szavát is megtalálja. A találati listában és a megnyitott fejezetben a megtalált szó félkövér.": "Bible, search: the searched word is now matched at the start of words, regardless of accents, together with inflected forms (for example “gíra” finds “gírát”, “gírád”, “efa” finds “éfát” but not “figefát”). “Sékel” also finds the Károli word “siklus”, and “talentum” the word “tálentom”. In the results list and the opened chapter the found word is bold.",
  "Biblia, jegyzetek: a Scofield-jegyzet jele mostantól egy kis nyitott könyv, a mértékegységeké marad az „i”. Ha egy vershez mindkettő tartozik, a két jel egymás mellett áll, és mindegyik a saját jegyzeteit nyitja meg.": "Bible, notes: the Scofield note mark is now a small open book, while the units keep the “i”. If a verse has both, the two marks stand side by side, and each opens its own notes.",
  "Biblia, Énok könyvei: a forrás-sorban a fordítás megjelölése mostantól „saját fordítás”, ugyanúgy, mint az apokrif könyveknél.": "Bible, books of Enoch: in the source line the translation is now marked “own translation”, the same as for the apocryphal books.",
  "Biblia, apokrif könyvek: az Apokrif könyvek sávban egy csempével letölthetők a deuterokanonikus könyvek (Tóbiás, Judit, Bölcsesség, Sirák fia, Báruk, Makkabeusok, Eszter és Dániel kiegészítései), 1–2 Ezdrás, Manassé imája, 3–4 Makkabeus, a 151. zsoltár, a pszeudepigráfák (Jubileumok, 12 pátriárka, Ésaiás mennybemenetele, 2 Báruk, Salamon zsoltárai és ódái, Ábrahám apokalipszise) és a Didakhé meg Hermász pásztora, a Biblia nyelvén elérhető kiadásban. Letöltés után internet nélkül is olvashatók, kereshetők és felolvashatók; a valódi fejezet- és versszám látszik (például Dániel 3,24), és minden könyvnél ott a forrása.": "Bible, apocryphal books: in the Apocryphal books bar one tile downloads the deuterocanonical books (Tobit, Judith, Wisdom, Sirach, Baruch, Maccabees, the additions to Esther and Daniel), 1-2 Esdras, the Prayer of Manasseh, 3-4 Maccabees, Psalm 151, the pseudepigrapha (Jubilees, the Twelve Patriarchs, the Ascension of Isaiah, 2 Baruch, the Psalms and Odes of Solomon, the Apocalypse of Abraham) and the Didache and the Shepherd of Hermas, in the edition available in the Bible's language. After download they can be read, searched and read aloud without internet; the real chapter and verse number is shown (for example Daniel 3:24), and every book shows its source.",
  "Frissítés: a telefonos app mostantól úgy telepíti a frissítést, hogy a Biblia-ébresztő teljes képernyős engedélye megmaradjon. Ez a mostanit követő frissítéstől hat. Ha egy frissítés mégis kikapcsolná, az app egy értesítéssel szól, és egy koppintással a beállításhoz visz.": "Update: the phone app now installs updates so that the Bible alarm's full-screen permission is kept. This takes effect from the update after the current one. If an update does turn it off, the app tells you with a notification, and one tap takes you to the setting.",
  "Biblia, ukrán fordítás: az ukrán Biblia mostantól Kulis, Puljuj és Nyecsuj-Levickij közkincs fordítása (1903–1905), a korábbi Ohijenko-fordítás helyett. Aki az ukrán Bibliát már letöltötte, annak frissítéskor magától lecserélődik, a jelölései (kiemelés, kommentár, könyvjelző) átkerülnek a megfelelő versekre. A zsoltárok számozása mostantól a héber (Károlival egyező) számozás.": "Bible, Ukrainian translation: the Ukrainian Bible is now the public domain translation by Kulish, Puluj and Nechuy-Levytsky (1903-1905), instead of the earlier Ohienko translation. If you already downloaded the Ukrainian Bible, it is replaced by itself on update, and your marks (highlights, commentaries, bookmarks) move to the corresponding verses. Psalm numbering is now the Hebrew numbering (matching Károli).",
  "Biblia, jegyzetek az igék mellett: megjelent a Scofield-jegyzet (Scofield Reference Notes, 1917, saját fordítás) mind a nyolc nyelven, 2544 jegyzet könyvbevezetőkkel. A Biblia beállításaiban tölthető le, a mértékegység-csomag mellett.": "Bible, notes next to the verses: the Scofield note (Scofield Reference Notes, 1917, own translation) is here in all eight languages, 2544 notes with book introductions. It can be downloaded in the Bible settings, next to the units package.",
  "Biblia, jegyzetek az igék mellett: ahol egy vershez jegyzet tartozik, egy kis jel áll mellette, rákoppintva megnyílnak a vers jegyzetei fajtánként, a forrással együtt. Az első csomag a bibliai mértékegységek mai értéke (könyök, éfa, siklus, talentum, dénár, órák): centiméterben, literben, kilogrammban, a pénz napszámban. Mind a nyolc Bibliához külön csomag van, a saját versszámozásával; a Biblia beállításaiban tölthető le, utána internet nélkül is megvan, és fajtánként ki-be kapcsolható.": "Bible, notes next to the verses: where a verse has a note, a small mark stands next to it; tapping it opens the verse's notes by type, with the source. The first package is the modern value of biblical units (cubit, ephah, shekel, talent, denarius, hours): in centimetres, litres, kilograms, and money in days' wages. Each of the eight Bibles has its own package with its own verse numbering; it can be downloaded in the Bible settings, then it is available without internet and can be turned on and off by type.",
  "Térkép, Világhelyzet: a háború jele csak a valódi háborúkat mutatja (évi ezer halott fölött). A kisebb fegyveres konfliktusok, felkelések, terrorizmus és szervezett bűnözés új, halványabb jelet kaptak: „Fegyveres összecsapás / instabilitás”. Az érintett, de nem harcoló országok (például akik csak részt vesznek egy háborúban) nem kapnak külön jelet, a hírekből jövő helyszínek pedig országonként egy jelként, csak ott látszanak, ahol újat mutatnak. Afrika fölött a háború-jelek száma 45-ről 11-re csökkent.": "Map, World situation: the war mark now shows only real wars (over a thousand deaths a year). Smaller armed conflicts, insurgencies, terrorism and organised crime got a new, fainter mark: “Armed clashes / instability”. Countries involved but not fighting (for example those only taking part in a war) do not get a separate mark, and locations from news reports appear as one mark per country, only where they show something new. Over Africa the number of war marks fell from 45 to 11.",
  "Térkép, Tűzgyújtási tilalom: távolról egyetlen jel mutatja Magyarországon, rákoppintva a tilalommal érintett megyék listájával. A megyénkénti narancs terület közelítve, megye-szinten jelenik meg, koppintásra a részletekkel, mint eddig.": "Map, Fire ban: from afar a single mark shows it over Hungary; tapping it lists the counties affected by the ban. The orange area per county appears when zoomed in, at county level, with details on tap, as before.",
  "Térkép, új réteg: Világhelyzet. A rétegválasztóban bekapcsolva távolról ikonok jelzik a földrengéseket, erdőtüzeket, árvizeket, ciklonokat, vulkánkitöréseket, járványokat, háborús övezeteket és a magyar tűzgyújtási tilalmat; közelítve az érintett terület körvonallal és fátyollal látszik. Koppintásra rövid leírás, forrás és időpont. Óránként frissül, internet nélkül a legutóbbi állapot látszik.": "Map, new layer: World situation. When turned on in the layer picker, icons mark earthquakes, wildfires, floods, cyclones, volcanic eruptions, epidemics, war zones and the Hungarian fire ban from afar; zoomed in, the affected area is shown with an outline and a veil. Tapping gives a short description, source and time. It updates hourly; without internet the latest state is shown.",
  "Térkép, új réteg: Tűzveszély-előrejelzés (EFFIS). Ez veszély-index, nem tilalom; csak internettel látszik.": "Map, new layer: Fire danger forecast (EFFIS). This is a danger index, not a ban; it is shown only with internet.",
  "Kezdőlap, készültség-csempék: minden csempe a saját helyszínének adatlapját nyitja meg. Eddig bármelyikre koppintva (például a Lakókocsira) a legutóbb megnyitott helyszín, többnyire az otthon jelent meg.": "Home, readiness tiles: each tile opens the details of its own location. Until now tapping any of them (for example the Caravan) showed the last opened location, usually the home.",
  "Eszközök szoba, eszköz adatlap: a jelenléti listában az eszközre (például az áramtárolóra) koppintva megnyílik az adatlapja: jelez-e, töltöttség, mikor jelzett utoljára, és hogy a panelről vagy a felhőből jön. Alul a Helyszín választóval megadhatod, hol van (például a lakókocsiban); ez ugyanoda kerül, mint a Kockázatelemzésben.": "Tools room, device details: tapping a device (for example the power station) in the presence list opens its details: whether it is signalling, charge level, when it last signalled, and whether the data comes from the panel or the cloud. At the bottom the Location picker lets you set where it is (for example in the caravan); this goes to the same place as in Risk analysis.",
  "Kockázatelemzés, helyszín adatlap: új „Eszköz hozzárendelése” gomb. Felsorolja az ismert eszközöket, koppintásra az eszköz ehhez a helyszínhez kerül; ami már itt van, arra koppintva lekerül. Ha még nincs eszköz-adat, a lista azt kéri, hogy egyszer nyisd meg az Eszközök szobát.": "Risk analysis, location details: a new “Assign device” button. It lists the known devices; a tap assigns the device to this location, and tapping one already here removes it. If there is no device data yet, the list asks you to open the Tools room once.",
  "Ha a panel egy korábban látott eszközt épp nem küld, az nem tűnik el a listából: szürkén, „nem jelez” felirattal marad, az utolsó ismert töltöttségével, és a helyszínhez rendelése megmarad.": "If the panel is not currently sending a device seen before, it does not disappear from the list: it stays grey, labelled “not signalling”, with its last known charge level, and its location assignment is kept.",
  "Térkép, külföld országonként: az országok a választott nyelven és annak ábécérendjében látszanak. Minden országnál külön tölthetők le a turistautak a pontokkal és az útvonaltervezővel (ezek az online térképen is működnek, és kevés helyet foglalnak), és külön az alaptérkép a térerő nélküli használathoz.": "Map, abroad by country: countries appear in the chosen language and in its alphabetical order. For each country the hiking trails with the points and the route planner can be downloaded separately (these also work on the online map and take little space), and separately the base map for use without signal.",
  "Térkép, tájegységek: a nagyobb országok (például Németország, Franciaország, Olaszország) alatt lenyíló listában tájegységenként is letölthető az alaptérkép, így a túl nagy országok is használhatók offline.": "Map, regions: in the expanding list under larger countries (for example Germany, France, Italy) the base map can also be downloaded region by region, so very large countries can be used offline too.",
  "Kockázatelemzés, eszközök a helyszíneken: a helyszínek alatt az Eszközök részben a panel és a Tuya-eszközök (például az áramtároló) utolsó ismert állapota látszik, és mindegyiknél kiválaszthatod, melyik helyszínen van (lakókocsi, nyaraló). A helyszín csempéjén látszik, hány eszköze jelez, az adatlapján pedig eszközönként a zöld vagy szürke pont, a töltöttség és hogy utoljára mikor jelzett. Az állapotot az app az Eszközök szoba megnyitásakor frissíti.": "Risk analysis, devices at the locations: below the locations, the Devices section shows the last known state of the panel and the Tuya devices (for example the power station), and for each you can choose which location it is at (caravan, holiday home). The location tile shows how many of its devices are signalling, and its details show for each device the green or grey dot, the charge level and when it last signalled. The app refreshes the state when the Tools room is opened.",
  "Készültség, áramtároló: ha egy helyszínhez áramtároló van rendelve (például PowerMax 2400 Pro), a mért töltöttségéből kiszámolja, hány órára elég áramszünetben (alapból 50 W átlagos fogyasztással: hűtő, világítás, telefontöltés; a helyszín adatlapján átírható). Ez adja a helyszín Áram sávját, és beleszámít a készültség százalékába. Ha a kapacitása nem ismert, az adatlapon megadhatod wattórában.": "Readiness, power station: if a power station is assigned to a location (for example PowerMax 2400 Pro), it calculates from its measured charge how many hours it lasts in a power cut (by default with 50 W average consumption: fridge, lighting, phone charging; changeable in the location details). This gives the location's Power bar and counts toward the readiness percentage. If its capacity is not known, you can enter it in watt-hours in the details.",
  "Noah, Biblia: a saját szavaiddal feltett kérdésre is megtalálja az igét, akkor is, ha a Károli-fordítás más szavakkal mondja (például „Hol van megírva, hogy ne aggódjunk a holnapért?” -> Máté 6,34). Ha a hely nem szó szerint egyezik, „talán erre gondolsz” jelzéssel mutatja. A „Nézd meg jobban” vagy „Keress tovább” kérésre alaposabban, több találattal keres újra.": "Noah, Bible: finds the verse even for a question in your own words, even if the Károli translation says it in other words (for example “Where is it written that we should not worry about tomorrow?” -> Matthew 6:34). If the passage does not match word for word, it shows it with a “maybe you mean this” note. On a “Look more closely” or “Search further” request it searches again more thoroughly, with more results.",
  "Noah, készlet: a „Mi járt le?” kérdésre a lejárt tételeket sorolja (név, darab, dátum, helyszín), utána azokat, amelyek 30 napon belül lejárnak; ha semmi nem járt le, ezt mondja, és megadja a következő lejáratokat. A készlet összesítője külön írja a tételek számát és a darabszámot.": "Noah, stock: for the question “What has expired?” it lists the expired items (name, quantity, date, location), then those expiring within 30 days; if nothing has expired, it says so and gives the next expiry dates. The stock summary gives the number of items and the quantity separately.",
  "Eszközök a szobában: a felhőből olvasott eszköz (pl. a PowerMax áramtároló, amit a panel negyedóránként kérdez le) a neve mellett mutatja az akkumulátor töltöttségét (pl. 88%) és egy kis „felhő” jelzést. Zöld marad, ha az utolsó jelzése 20 percen belüli volt (a többi eszköznél 10 perc).": "Devices in the room: a device read from the cloud (for example the PowerMax power station, which the panel queries every quarter of an hour) shows its battery charge next to its name (for example 88%) and a small “cloud” mark. It stays green if its last signal was within 20 minutes (for other devices 10 minutes).",
  "Megvallások, felolvasás: a hangjegy-panel megvallás közben a megvallás beállításait mutatja (Tempó Normál/Lassú, Szünet a mondatok után, és hogy most melyik hang olvas: a PrepperPapa hang vagy a telefon hangja), ugyanazt, ami a szöveg alatt van. A 0 másodperces szünet valóban szünet nélkül olvas, és a beállítás felolvasás közben, a következő mondattól hat. A Tempó váltása is azonnal hat: a PrepperPapa hangnál a lassabban felolvasott felvételre vált, a telefon hangjánál lassabban beszél.": "Confessions, read-aloud: during a confession the music note panel shows the confession settings (Tempo Normal/Slow, Pause after each sentence, and which voice is reading now: the PrepperPapa voice or the phone's voice), the same as below the text. A 0-second pause really reads without a pause, and the setting takes effect during read-aloud, from the next sentence. Changing the Tempo also takes effect at once: with the PrepperPapa voice it switches to the recording read more slowly, with the phone's voice it speaks more slowly.",
  "Megvallások, csatazene: új, valóban végtelenített változat (nem egy erős nyitással indul újra). Ha a régit letöltötted, az app magától lecseréli az újra (kb. 17 MB, internet kell hozzá); ha a régi volt kiválasztva, az új lesz az.": "Confessions, battle music: a new, truly seamless looping version (it does not restart with a strong opening). If you downloaded the old one, the app replaces it with the new one by itself (about 17 MB, internet needed); if the old one was selected, the new one will be.",
  "Androidos alkalmazás, a telefon hangja: ha van internet, a felolvasás a Google legjobb minőségű (internetes) magyar hangjával szól. Internet nélkül, vagy ha az internetes hang elakad, magától a telefonra letöltött hangra vált, a felolvasás nem áll meg. A lejátszó hangjegy-paneljén választhatsz a hangok közül (pl. „Google 1 (jobb, internet)”, „Google 2 (letöltött)”); a telefon megjegyzi.": "Android app, the phone's voice: with internet, read-aloud uses Google's best-quality (online) Hungarian voice. Without internet, or if the online voice stalls, it switches to the voice downloaded on the phone by itself, and read-aloud does not stop. On the player's music note panel you can choose between the voices (for example “Google 1 (better, internet)”, “Google 2 (downloaded)”); the phone remembers your choice.",
  "Megvallások, Lassú tempó: a Szellemi fegyverek felvétele most valóban lassabban van felolvasva (külön, lassú felolvasás), nem a normál hang lelassítva, ezért nem torzít. A Normál tempó a régi felvétel tempója. A PrepperPapa hangot az app sehol nem gyorsítja és nem lassítja; a sebesség-csúszka a telefon hangjára hat.": "Confessions, Slow tempo: “Szellemi fegyverek felvétele” (putting on the spiritual armour) is now really read more slowly (a separate, slow reading), not the normal voice slowed down, so it is not distorted. Normal tempo is the tempo of the old recording. The app never speeds up or slows down the PrepperPapa voice; the speed slider affects the phone's voice.",
  "iPhone-os alkalmazás: a Lámpa LED-je most a kamera bekapcsolása nélkül világít, ahogy az Androidos alkalmazásban is. A böngészős változatban ez nem változott.": "iPhone app: the Lamp's LED now lights without turning on the camera, as in the Android app. The browser version has not changed.",
  "A háttérzenét most ott választod és töltöd le, ahol szól: az ébresztőnél (két zene), a Biblia lejátszójában felolvasás közben a hangjegy gombbal (három epikus zene) és a Megvallásoknál (új csatazene). A Biblia beállításaiból a közös Háttérzene rész kikerült. A méret a letöltés előtt látszik.": "You now choose and download background music where it plays: at the alarm (two tracks), in the Bible player during read-aloud with the music note button (three epic tracks) and in Confessions (new battle music). The shared Background music section has been removed from the Bible settings. The size is shown before download.",
  "Megvallások: a felolvasás mondatonként halad, és minden mondat után megáll, hogy hangosan elismételhesd. A szünetet te állítod (0-10 másodperc, vagy Auto: annyi, amennyi a mondat felolvasása), alapból 3 másodperc; a tempó Lassú vagy Normál, alapból Lassú. A zene a szünetekben is szól. A Szellemi fegyverek felvétele mondatonként újra felolvasva.": "Confessions: read-aloud goes sentence by sentence and stops after each sentence so that you can repeat it aloud. You set the pause (0-10 seconds, or Auto: as long as the sentence took to read), 3 seconds by default; the tempo is Slow or Normal, Slow by default. Music also plays during the pauses. “Szellemi fegyverek felvétele” (putting on the spiritual armour) has been re-recorded sentence by sentence.",
  "Felolvasó hang a lejátszóban: a Biblia felolvasása közben a hangjegy gomb paneljén választhatsz a telefon hangja (a gomb kiírja, ha a Google hangja szól) és a PrepperPapa hang között. Az app alapból a telefon hangjára áll; a PrepperPapa hang egy koppintással visszakapcsolható.": "Read-aloud voice in the player: during Bible read-aloud you can choose on the music note button's panel between the phone's voice (the button shows if the Google voice is speaking) and the PrepperPapa voice. By default the app uses the phone's voice; the PrepperPapa voice can be switched back with one tap.",
  "Felolvasás kikapcsolt képernyővel: a Biblia felolvasása (a telefon hangjával és a PrepperPapa hanggal is) most akkor is folytatódik, ha a képernyő kikapcsol vagy lezárod a telefont. Eddig néhány vers után elhallgatott, csak a zene szólt tovább, és a következő megnyitáskor indult újra. Az app most egyszerre kb. 45 percnyi szöveget ad át a telefon felolvasójának; amikor újra ránézel, a kiemelés oda ugrik, ahol a felolvasás éppen tart.": "Read-aloud with the screen off: Bible read-aloud (with both the phone's voice and the PrepperPapa voice) now continues even if the screen turns off or you lock the phone. Until now it went silent after a few verses, only the music kept playing, and it restarted at the next opening. The app now passes about 45 minutes of text at once to the phone's reader; when you look again, the highlight jumps to where the reading is.",
  "Az értesítési sáv lejátszójának Szünet, Folytatás és Leállítás gombja lezárt képernyőn is azonnal hat, a zenével együtt. Ha a felolvasás a képernyő kikapcsolt állapotában ér a végére, a zene is leáll.": "The Pause, Resume and Stop buttons of the player in the notification bar take effect at once on the locked screen too, together with the music. If read-aloud reaches the end while the screen is off, the music stops too.",
  "Imák és megvallások felolvasása is folytatódik kikapcsolt képernyővel, és közben a lejátszó az értesítési sávban látszik.": "Prayer and confession read-aloud also continues with the screen off, and meanwhile the player is shown in the notification bar.",
  "A Google beszédhang: ha a telefonra utólag telepíted a Google magyar hangadatát, a következő felolvasástól az szól, az app újraindítása nélkül.": "The Google speech voice: if you install Google's Hungarian voice data on the phone afterwards, it is used from the next read-aloud, without restarting the app.",
  "Eszközök szoba: a panel és az eszközei jelenléte most a szoba fő lapján, a fejléc alatt rögzítve látszik: zöld vagy szürke pont, a panelnél az is, hogy él-e. A sor végén a jelző eszközök száma áll; a sávra koppintva lenyílik a teljes lista azzal, hogy melyik eszköz hány perce jelzett utoljára. A sáv nem takarja az üzeneteket, és csak ott jelenik meg, ahol a panel küld jelenlétet. A szoba tagjainál továbbra is megvan ugyanez a lista.": "Tools room: the presence of the panel and its devices is now shown fixed on the room's main page, below the header: green or grey dot, and for the panel also whether it is alive. The end of the row shows the number of signalling devices; tapping the bar expands the full list, showing how many minutes ago each device last signalled. The bar does not cover messages, and appears only where the panel sends presence. The same list is still available under the room's members.",
  "Háttérzene a felolvasáshoz: a Biblia beállításaiban (fogaskerék) öt zene tölthető le egyenként, a méretük a letöltés előtt látszik: három epikus zene a Biblia felolvasásához, egy akusztikus gitáros és egy kelta az ébresztőhöz. Letöltés után internet nélkül is szólnak, és hézag nélkül ismétlődnek.": "Background music for read-aloud: in the Bible settings (gear) five tracks can be downloaded one by one, with their size shown before download: three epic tracks for Bible read-aloud, one acoustic guitar and one Celtic track for the alarm. After download they play without internet and loop without gaps.",
  "A Biblia felolvasása alatt a beállításokban kiválasztott zene halkan szól (kb. 18 dB-lel a beszéd alatt), és a felolvasással együtt áll le. A hangerejét felolvasás közben a hangjegy gombbal állíthatod.": "During Bible read-aloud the music chosen in the settings plays quietly (about 18 dB below the speech) and stops together with the read-aloud. You can adjust its volume during read-aloud with the music note button.",
  "Ébresztő: a terv ébresztőjénél a Zene sorban kiválasztható a letöltött ébresztő-zene. A felolvasással együtt, halkan indul és együtt erősödik vele, és leáll, amikor az ébresztő véget ér, vagy a Leállítom / Szundi gombot megnyomod.": "Alarm: at the plan's alarm, the downloaded alarm music can be chosen in the Music row. It starts quietly together with the read-aloud and grows louder with it, and stops when the alarm ends or when you press the Stop / Snooze button.",
  "Eszközök szoba: a szoba tagjainál (a fejléc pontjára koppintva) új Eszközök rész mutatja, él-e a panel, és mellette minden eszközét zöld vagy szürke ponttal: zöld, ha az elmúlt tíz percben jelzett, mellette az is, hogy utoljára hány perce. Az internetes és a helyi (bluetooth) szobában is működik, amint a panel új szoftvere küldi az életjelet; addig a lista nem változik.": "Tools room: under the room's members (tap the dot in the header) a new Devices section shows whether the panel is alive, and next to it each of its devices with a green or grey dot: green if it signalled in the last ten minutes, also showing how many minutes ago it last did. It works in both internet and local (Bluetooth) rooms as soon as the panel's new software sends the heartbeat; until then the list does not change.",
  "Helyi szoba, társgazda: ha a panel a szoba gazdája, és téged társgazdává tett, a telefonod nem készít saját kulcsot és nem osztja ki, így a szoba kulcsa nem válhat ketté. A belépési kérelmeket ugyanúgy beengedheted vagy elutasíthatod; a szoba törlése a panelnél marad.": "Local room, co-host: if the panel is the room's host and has made you a co-host, your phone does not create its own key or hand it out, so the room key cannot split in two. You can still admit or reject join requests; deleting the room stays with the panel.",
  "Bibliaolvasási ébresztő: a felolvasás most a teljes napi szakaszt végigolvassa, akkor is, ha közben az app a háttérbe kerül (eddig előfordult, hogy az első vers után megállt). A végén elhangzik az „Áldott napot kívánok!”, és az ébresztő magától leáll; az értesítés Leállítom és Szundi gombja azonnal elhallgattatja.": "Bible reading alarm: read-aloud now reads the whole daily passage, even if the app goes into the background meanwhile (until now it sometimes stopped after the first verse). At the end it says “Have a blessed day!” and the alarm stops by itself; the Stop and Snooze buttons on the notification silence it at once.",
  "Androidon a felolvasás a Google beszédmotorját használja, ha telepítve van és van hozzá letöltött magyar (vagy az app nyelvén elérhető) hang; a legjobb minőségű, internet nélkül is működő hangot választja. Ha nincs ilyen, marad a telefon saját felolvasója. A hangot a Beállítások → Szövegfelolvasás → Google → Hangadatok telepítése menüben lehet letölteni.": "On Android, read-aloud uses the Google speech engine if it is installed and has a downloaded Hungarian voice (or one available in the app's language); it chooses the best-quality voice that also works without internet. If there is none, the phone's own reader stays. The voice can be downloaded under Settings → Text-to-speech → Google → Install voice data.",
  "Szobák: a szoba gazdája eltávolíthat egy tagot. A szoba beállításaiban A szoba tagjai alatt (vagy a fejléc pontjára koppintva) koppints a tagra, majd az Eltávolítás gombra; az app előbb rákérdez. Saját magadat nem tudod eltávolítani.": "Rooms: the room's host can remove a member. In the room settings under Room members (or by tapping the dot in the header) tap the member, then the Remove button; the app asks first. You cannot remove yourself.",
  "Akit eltávolítottak, annál a szoba bezárul, és megjelenik: „A szoba gazdája eltávolított a szobából.” Ha épp nem volt bent, a Szobák listán szól egyszer. Új üzenetet a szobából már nem kap, a régi meghívóval és a szoba kódjával nem jöhet vissza, csak egy új meghívóval.": "For someone who has been removed, the room closes and shows: “The room's host removed you from the room.” If they were not in it at the time, the Rooms list tells them once. They no longer get new messages from the room and cannot come back with the old invitation or the room code, only with a new invitation.",
  "Kezdőlap: a készültség-kártyákon a „4 fő · 30 nap” sor nem vágódik le kétjegyű vagy háromjegyű napszámnál sem. Ha a teljes szöveg nem fér ki (főleg háromjegyű napszámnál vagy más nyelven), az app rövidebb alakot ír ki, például „120 n.”, és mindig egy sorban marad.": "Home: on the readiness cards the “4 people · 30 days” row is not cut off even with two- or three-digit day counts. If the full text does not fit (mainly with three-digit day counts or in other languages), the app writes a shorter form, for example “120 d”, and it always stays on one line.",
  "Túrán visszafordulási ébresztő: a Kalkulátor Menetidő lapján a Túra indítása kapcsolóval élesítheted. Az app a helyzeted szerinti napnyugtából (vagy a szürkület végéből) kivonja a visszaút idejét és egy biztonsági tartalékot (alapból 30 perc), és megmutatja, mikor kell visszafordulnod. Az időpontot kézzel is átállíthatod.": "Turnaround alarm on hikes: on the Travel time page of the Calculator you can arm it with the Start hike switch. The app subtracts the time of the way back and a safety margin (30 minutes by default) from sunset at your position (or the end of twilight), and shows when you need to turn back. You can also change the time by hand.",
  "A visszafordulás percében a telefon felébred, lezárt képernyőn is teljes képernyőn mutatja, mennyi idő van sötétedésig és mennyi a visszaút, és riasztó hangon szól, amíg meg nem nyomod a Láttam gombot. A Visszaút indítása gomb a túra kiindulópontjához tervez utat és elindítja a navigációt; ha nincs turistaút-adat, a tájoló mutatja az irányt.": "At the turnaround minute the phone wakes up, shows full screen even on the locked screen how much time is left until dark and how long the way back is, and sounds an alarm until you press the Seen button. The Start the way back button plans a route to the hike's starting point and starts navigation; if there is no hiking trail data, the compass shows the direction.",
  "A visszaút idejét a Menetidő számításából vagy a térképen tervezett útvonalból egy gombbal kitöltheted. Ugyanazzal a kapcsolóval ki is kapcsolhatod. Böngészőben és iPhone-on csak akkor szól, ha az oldal nyitva van; a lezárt telefont az Android app ébreszti fel.": "You can fill in the time of the way back with one button from the Travel time calculation or from a route planned on the map. The same switch also turns it off. In the browser and on iPhone it only sounds if the page is open; the Android app wakes up a locked phone.",
  "Eszközök szoba: ha az eszközök sürgős riasztást küldenek, például élesített riasztónál kinyílik az ajtó, a telefonod felébred, és lezárt képernyőn is teljes képernyőn mutatja, mi történt, mikor és melyik szobában, riasztó hangon szól, amíg meg nem nyomod a Láttam vagy a Megnyitom gombot.": "Tools room: if the devices send an urgent alarm, for example a door opens while the alarm is armed, your phone wakes up and shows full screen, even on the locked screen, what happened, when and in which room, and sounds an alarm until you press the Seen or Open button.",
  "A nem sürgős eszköz-üzenetek, például a napi összegzés vagy az ajtónyitás élesítés nélkül, továbbra is sima értesítések. Ugyanaz a riasztás csak egyszer szól, a régi üzenetek újracsatlakozáskor nem szólnak újra.": "Non-urgent device messages, for example the daily summary or a door opening while not armed, remain ordinary notifications. The same alarm sounds only once, and old messages do not sound again when reconnecting.",
  "Szobák, SOS: ha egy szobatársad SOS-t küld (például az esés-érzékelés automatikus SOS-ét), a telefonod felébred, lezárt képernyőn is teljes képernyőn mutatja, ki küldte, mikor, melyik szobából és honnan, ha a helyzete benne van, és riasztó hangon szól, amíg meg nem nyomod a Megnyitom vagy a Láttam gombot. A Megnyitom a szobát nyitja meg, a helyzetet a térképen is megnézheted.": "Rooms, SOS: if a room mate sends an SOS (for example the automatic SOS from fall detection), your phone wakes up and shows full screen, even on the locked screen, who sent it, when, from which room and from where, if their location is included, and sounds an alarm until you press the Open or Seen button. Open opens the room, and you can also see the location on the map.",
  "Internetes szobánál ez akkor is működik, ha az app be van zárva; helyi szobánál (Bluetooth vagy wifi, internet nélkül) akkor, ha az app a háttérben fut. Csak a vészjelzés ébreszt: a sima és a sürgős üzenet továbbra is sima értesítés, a saját SOS-od pedig a te telefonodon nem szól.": "For an internet room this works even if the app is closed; for a local room (Bluetooth or Wi-Fi, without internet) when the app is running in the background. Only emergency alerts wake the phone: ordinary and urgent messages remain ordinary notifications, and your own SOS does not sound on your own phone.",
  "Az esés-érzékelés SOS-e mostantól a helyi szobába is elmegy, ha éppen helyi szobában vagy, nem csak az internetes szobáidba.": "The fall detection SOS now also goes to the local room if you are in a local room at the time, not only to your internet rooms.",
  "Esés-érzékelés: ha esés után elindul a visszaszámlálás, a telefon felkapcsolja a kijelzőt, és lezárt telefonon is mutatja a hátralevő másodperceket nagy számokkal, alatta a nagy Jól vagyok gombbal. Nem csak a hangját hallod.": "Fall detection: when the countdown starts after a fall, the phone turns on the display and shows the remaining seconds in large numbers even on a locked phone, with the large I'm OK button below. You do not just hear it.",
  "Az értesítés is visszaszámol, és van rajta Jól vagyok gomb. Ha a telefonod nem engedi a teljes képernyős értesítést, az esés-érzékelés beállításánál ezt kiírja, és egy gombbal engedélyezheted.": "The notification also counts down and has an I'm OK button. If your phone does not allow full-screen notifications, the fall detection setting says so, and you can allow it with one button.",
  "Biblia, ébresztő: a köszöntés most az időt, a dátumot és a hét napját mondja be, utána a mai olvasmányt; a terv nevét nem. A végén áldott napot kíván. Minden nyelven a saját formájában.": "Bible, alarm: the greeting now announces the time, the date and the day of the week, then today's reading; not the name of the plan. At the end it wishes you a blessed day. In every language in its own form.",
  "Noah, az offline MI segéd mostantól minden tesztelőnek elérhető. Az Android appban a Beállításokban kapcsolható be, a modellt a segéd oldalán, a fogaskerék alatt töltheted le. Letöltés előtt az app megmutatja a modell méretét, a szükséges szabad helyet és memóriát, és ha mobilinterneten vagy, Wi-Fi-t javasol. 6 GB-nál kevesebb memóriájú telefonon Noah nem használható, mert a rendszer válasz közben leállítaná az appot; ezt a segéd oldala ki is írja.": "Noah, the offline AI assistant, is now available to every tester. In the Android app it can be turned on in Settings, and you can download the model on the assistant's page, under the gear. Before downloading, the app shows the model's size, the free space and memory needed, and suggests Wi-Fi if you are on mobile data. Noah cannot be used on phones with less than 6 GB of memory, because the system would stop the app while it answers; the assistant's page says so too.",
  "A böngészős változatban és iPhone-on Noah a Több menüben látszik, és megnyitva elmagyarázza, hogy az Android appban fut, mert ide a modell nem tölthető le.": "In the browser version and on iPhone, Noah appears in the More menu, and when opened it explains that it runs in the Android app, because the model cannot be downloaded here.",
  "Mai tesztfeladat: naponta egyszer, az első megnyitáskor egy ablak ajánl egy rövid feladatot, ami a te telefonodhoz és felületedhez illik (név nélkül). Mellette pár mondatban az is ott áll, hogyan működik az adott funkció és mit kell látnod. A Működik gomb egy koppintással visszajelez, a Hibás megnyitja a visszajelzés lapot a feladat nevével kitöltve, a Később bezárja mára. Amire már válaszoltál, az nem jön elő újra. A Visszajelzés lapon a Mai tesztfeladat gombbal bármikor újra megnyithatod.": "Today's test task: once a day, at the first opening, a window suggests a short task that suits your phone and interface (without your name). A few sentences next to it also explain how the feature works and what you should see. The Works button gives feedback with one tap, the Broken button opens the feedback page with the task name filled in, and Later closes it for today. Tasks you have already answered do not come up again. On the Feedback page you can reopen it at any time with the Today's test task button.",
  "Kalkulátor, súgó: az első lépés a csempék első sorát mutatja, nem az egész rácsot, így a buborék nem takarja el a középső csempéket.": "Calculator, help: the first step shows the first row of tiles, not the whole grid, so the bubble does not cover the middle tiles.",
  "Helyi szoba (eszközök panele): a később megérkező régebbi üzenetek az időrendben a helyükre kerülnek, nem a lista végére; újranyitáskor a panel csak a hiányzó üzeneteket küldi.": "Local room (devices panel): older messages that arrive later go to their place in chronological order, not to the end of the list; on reopening the panel sends only the missing messages.",
  "Biblia, olvasási terv, ébresztő: a be- és kikapcsolás csúszkás kapcsoló lett, a napok egyforma körök, az időpontot pedig az app saját időválasztója állítja be (óra és perc nagy plusz-mínusz gombokkal, Mégse és Kész).": "Bible, reading plan, alarm: turning on and off is now a slider switch, the days are identical circles, and the time is set with the app's own time picker (hour and minute with large plus-minus buttons, Cancel and Done).",
  "Az ébresztő felolvasása halkan indul, és az első bő fél percben fokozatosan erősödik. Előtte egy rövid köszöntés elmondja, melyik tervből mi a mai olvasmány, a végén pedig áldott napot kíván, mindig az app nyelvén.": "The alarm read-aloud starts quietly and gradually gets louder over the first good half minute. Before it a short greeting says what today's reading is from which plan, and at the end it wishes you a blessed day, always in the app's language.",
  "Amíg az ébresztő olvas, a képernyő alján egy nagy Leállítom gomb van; egy koppintással azonnal leállítja. A sima felolvasásnál ez a gomb nem jelenik meg. Az értesítésen a gomb neve is Leállítom lett.": "While the alarm is reading there is a large Stop button at the bottom of the screen; one tap stops it at once. This button does not appear for ordinary read-aloud. The button on the notification is now also called Stop.",
  "Biblia: a könyvcsoportok csempéi ugyanazokkal a zöld árnyalatokkal, de váltakozó világos-sötét sorrendben, így a szomszédos csoportok jobban elválnak.": "Bible: the tiles of the book groups use the same shades of green, but in alternating light and dark order, so neighbouring groups stand apart better.",
  "Javítás: a lenyíló lista (például a Rádió-hatótáv sávválasztója) nem marad nyitva a következő képernyő fölött. A vissza gomb nyitott listánál csak a listát zárja be.": "Fix: a drop-down list (for example the band picker of Radio range) no longer stays open over the next screen. With a list open, the back button only closes the list.",
  "Biblia, olvasási terv: ébresztő. A futó terv oldalán bekapcsolhatsz egy ébresztőt, megadhatod az időpontot és a napokat (alapból minden nap), és látod, mikor szól legközelebb. Az Android appban az ébresztő a megadott időben felébreszti a telefont, a lezárt képernyő fölött megnyitja a terv aznapi olvasmányát, elkezdi felolvasni, és amíg olvas, a kijelző nem alszik el. Az értesítésen Szundi (10 perc) és Leállítás gomb van. Első használatkor az app engedélyt kér az értesítéshez; ha a pontos időzítés vagy a teljes képernyős megjelenés nincs engedélyezve, a beállításnál egy gombbal megnyitható a hozzá tartozó telefon-beállítás. A böngészőben és iPhone-on az ébresztő nem tud megszólalni, ezt a beállításnál ki is írja.": "Bible, reading plan: alarm. On the page of the running plan you can turn on an alarm, set the time and the days (every day by default), and see when it rings next. In the Android app the alarm wakes the phone at the set time, opens the plan's reading for the day over the locked screen, starts reading it aloud, and the display does not sleep while it reads. The notification has Snooze (10 minutes) and Stop buttons. On first use the app asks for notification permission; if exact timing or full-screen display is not allowed, one button in the setting opens the related phone setting. In the browser and on iPhone the alarm cannot ring, and the setting says so.",
  "Szobák, privát üzenet: a „Csak neki” üzenet most már akkor is elmegy, ha a címzett egy másik telefonról, saját fiókkal van a szobában (eddig ilyenkor „Az üzenet nem ment el” jelent meg). A „Csak neki” sáv nem takarja el a legutolsó üzenetet, az mindig fölötte látszik. Ha egy üzenet mégsem megy el, az app megmondja, miért: nincs internet, a címzett már nem tagja a szobának, túl hosszú, vagy a szerver hibát jelzett. A beírt szöveg ilyenkor megmarad.": "Rooms, private message: an “Only to” message is now also sent if the recipient is in the room from another phone with their own account (until now “The message was not sent” appeared then). The “Only to” bar does not cover the last message, which is always shown above it. If a message does fail to send, the app says why: no internet, the recipient is no longer a member of the room, it is too long, or the server reported an error. The typed text is kept in that case.",
  "Súgó-bemutató: a magyarázó buborék Tovább és Kihagyom gombja már nem csúszik le az alsó menüsávra vagy a telefon saját gombjai alá, így mindig kényelmesen megnyomható. Ha a megmutatott rész nagy (például a Helyi szoba üzenetei vagy a Kalkulátor csempéi), a buborék a rész alján jelenik meg, és nem takarja el az első sort. A Helyi szobában a „Ha nem talál senkit” lépés a beíró sorra mutat, nem az egész üzenetlistára.": "Help tour: the Next and Skip buttons of the explanation bubble no longer slide onto the bottom menu bar or under the phone's own buttons, so they are always easy to press. If the part shown is large (for example the messages of a Local room or the Calculator tiles), the bubble appears at the bottom of that part and does not cover the first row. In the Local room the “If it finds no one” step points to the input line, not to the whole message list.",
  "Biblia, olvasási terv: ha a tervből megnyitod a napi olvasmányt, csak az aznapi fejezetek látszanak, és nem lehet továbbgörgetni a Biblia többi részébe. Az olvasmány végén egy jelzés áll, ahonnan egy koppintással visszamehetsz a tervhez, vagy elolvasottnak jelölheted a napot. A felolvasás is az olvasmány utolsó versénél megáll. A Biblia szokásos olvasása nem változott.": "Bible, reading plan: if you open the daily reading from the plan, only that day's chapters are shown, and you cannot scroll on into the rest of the Bible. At the end of the reading there is a mark from which one tap takes you back to the plan, or marks the day as read. Read-aloud also stops at the last verse of the reading. Ordinary Bible reading has not changed.",
  "Vagyon, Nemesfém: minden tételnél az összeg alatt látszik a fém és a súly is (például „ezüst · 1000 g”), akkor is, ha a tétel össze van csukva. A kezdőlap összesítő kártyája nem változott.": "Assets, Precious metals: for every item the metal and the weight are shown below the amount too (for example “silver · 1000 g”), even when the item is collapsed. The summary card on the start page has not changed.",
  "Kalkulátor és Tudástár: görgetéskor, vagy amikor a billentyűzet megjelenik, már nem takarja el sötét sáv a fejléc alatti részt. A Víztisztítás, a Menetidő és a többi számoló, a Számológép, valamint a Tudástár témái és cikkei is rendesen látszanak, és visszalépés után sem marad ott a sáv.": "Calculator and Knowledge base: when scrolling, or when the keyboard appears, a dark band no longer covers the area below the header. Water purification, Travel time and the other calculators, the Calculator, and the Knowledge base topics and articles are all shown properly, and the band does not remain after going back.",
  "Kalkulátor, első megnyitás: a rövid súgó-buborék görgetésre bezárul, és nem ugrik a képernyő aljára. Ha megnyitsz egy számolót, a buborék eltűnik, így nem takarja a számológép előzmény-sorát.": "Calculator, first opening: the short help bubble closes on scrolling and does not jump to the bottom of the screen. If you open a calculator, the bubble disappears, so it does not cover the calculator's history row.",
  "Biblia, keresés: ha a keresőmezőbe koppintasz, a korábbi kereséseid jelennek meg, és egy koppintással újra lefuttathatod őket. Amint gépelni kezdesz, a lista eltűnik.": "Bible, search: when you tap the search field your earlier searches appear, and one tap runs them again. As soon as you start typing, the list disappears.",
  "Biblia, előzmények: a keresőmező jobb oldalán lévő előzmény-jelre koppintva a legutóbb olvasott igéket látod, fejezetenként egyet, a legfrissebbel kezdve, dátummal (például „ma 20:41” vagy „tegnap 18:05”). Koppintásra az ige kiemelve nyílik meg. Mindkét listát külön lehet törölni.": "Bible, history: tapping the history mark on the right of the search field shows the verses you read most recently, one per chapter, newest first, with the date (for example “today 20:41” or “yesterday 18:05”). Tapping opens the verse highlighted. Both lists can be cleared separately.",
  "Biblia, Imák, Megvallások: amíg a Bibliát olvasod, igét keresel, imádkozol vagy a megvallásaidat olvasod, a képernyő nem sötétedik el és nem zár le. Amikor kilépsz a Bibliából, vagy az app a háttérbe kerül, a telefon újra a megszokott módon zár.": "Bible, Prayers, Confessions: while you are reading the Bible, searching for verses, praying or reading your confessions, the screen does not dim or lock. When you leave the Bible, or the app goes into the background, the phone locks again as usual.",
  "Biblia: a vers melletti térkép-jelre koppintva a térkép mindig műholdas nézetben nyílik meg. Amikor visszalépsz, a térkép visszaáll arra a nézetre, amit korábban magadnak választottál.": "Bible: tapping the map mark next to a verse always opens the map in satellite view. When you go back, the map returns to the view you had chosen for yourself before.",
  "Tájoló: a kamerás nézet a telefon fő hátsó kameráját nyitja meg, nem a széles látószögűt. A választott kamerát az app megjegyzi.": "Compass: the camera view opens the phone's main rear camera, not the wide-angle one. The app remembers the chosen camera.",
  "Lámpa (böngészős változat): ha a vaku nem kapcsolható, vagy nem adsz engedélyt a kamerához, az app azonnal elengedi a kamerát, és nem kéri újra minden koppintásra. A kamera így nem marad bekapcsolva vaku nélkül.": "Lamp (browser version): if the flash cannot be switched on, or you do not grant camera permission, the app releases the camera at once and does not ask again on every tap. So the camera does not stay on without the flash.",
  "Kérdezz: a nagy (12B) modell kikerült az appból. Ha korábban letöltötted, az app frissítés után magától törli, és vele a hozzá tartozó ideiglenes fájlokat is, így visszakapod a helyet. Az E4B és az E2B változatlanul megmarad.": "Ask: the large (12B) model has been removed from the app. If you downloaded it earlier, the app deletes it by itself after the update, together with its temporary files, so you get the space back. E4B and E2B remain unchanged.",
  "Kérdezz: ha az app egy modell futása közben váratlanul bezáródott, a segéd beállításaiban egy sor megmondja, miért (például memóriahiány).": "Ask: if the app closed unexpectedly while a model was running, a row in the assistant settings says why (for example lack of memory).",
  "Útvonaltervezés: messzi célhoz (például Budapestről a Kékesre) is tervez. Eddig a kezdőponthoz legközelebbi, sehová nem csatlakozó turistaút-darabra tette az indulást, és azt írta, hogy nem talált útvonalat. Most a célig összefüggő turistaút-hálózat legközelebbi pontjáról indul, és kiírja, milyen messze van az légvonalban.": "Route planning: it also plans to distant destinations (for example from Budapest to Kékes). Until now it put the start on the hiking trail segment nearest the starting point even if it connected nowhere, and said it found no route. Now it starts from the nearest point of the hiking trail network connected to the destination, and shows how far that is in a straight line.",
  "Kérdezz: a nagyobb (12B) modell a 12 GB memóriájú telefonokon is választható (kísérleti). Ha egy modell egy telefonon nem választható, a listában ott áll, hány GB-os telefon kell hozzá, és hány GB-os ez.": "Ask: the larger (12B) model can also be chosen on phones with 12 GB of memory (experimental). If a model cannot be chosen on a phone, the list shows what size of phone in GB it needs and what size this one is.",
  "Szobák: az értesítés kapcsolója frissítés után is a valódi beállítást mutatja. Eddig az app frissítése után kikapcsoltnak látszott, és ha rákoppintottál, akkor ténylegesen kikapcsolt.": "Rooms: the notification switch shows the real setting even after an update. Until now it looked off after the app updated, and if you tapped it, it really turned off.",
  "Saját térkép: a letöltött tájegységen nagy nagyításnál nem maradnak szürke foltok és fehér négyzetek. A térkép csak azokat a rétegeket rajzolja, amelyek a látott területre esnek, így a telefon memóriája elég az egész képernyőhöz.": "Own map: on a downloaded region no grey patches or white squares remain at high zoom. The map draws only the layers that fall within the visible area, so the phone's memory is enough for the whole screen.",
  "Tájoló: amikor az irány ráfordul a felvett irányra (a zöld háromszögre), a telefon egyet rezzen. Csak a ráfordulás pillanatában jelez, a kis remegésre nem ismétli; ha kikapcsoltad a rezgést a beállításokban, akkor itt sem rezeg.": "Compass: when the direction turns onto the recorded bearing (the green triangle), the phone vibrates once. It signals only at the moment of turning onto it, not repeatedly for small trembling; if you turned off vibration in the settings, it does not vibrate here either.",
  "Nincs többé Mentés gomb: amit beírsz, magától elmentődik (Rólam, készlet-adatlap, családtagok, háziállatok, helyszínek, saját ima és megvallás, rajzos jegyzet, igehely-kommentár, a neved a szobákban, a szoba nyelve). Ahol a gomb maradt, ott „Kész” lett belőle, és csak bezár.": "No more Save button: what you type is saved by itself (About me, stock item details, family members, pets, locations, your own prayer and confession, drawn note, verse commentary, your name in rooms, the room language). Where the button remained, it is now “Done” and only closes.",
  "Javítva: a kötelező frissítés nem ragad be többé a „mentsd el, amit írsz” csíknál, ha minden el van mentve.": "Fixed: the mandatory update no longer gets stuck at the “save what you are writing” bar when everything is saved.",
  "A térkép gyorsabb: csak a képernyő környékén lévő, épp látható turistautakat rajzolja, így nagyításkor és mozgatáskor kevesebbet számol.": "The map is faster: it draws only the hiking trails currently visible around the screen, so it calculates less when zooming and panning.",
  "Turistautak távolról: az Alföldön sem tűnnek el. Közepes távolságból a regionális utak is látszanak, egy lépéssel közelebbről pedig minden legalább 10 km-es út is; csak a rövid helyi körök jönnek elő később.": "Hiking trails from afar: they no longer disappear on the Great Plain either. From medium distance regional trails are shown too, and one step closer every trail of at least 10 km; only short local loops appear later.",
  "Felolvasás: a hosszú, saját megvallások és imák is végig felolvashatók a telefon hangjával. Eddig egy hosszú bekezdésnél a felolvasás el sem indult; most a szöveg kisebb darabokban szól, a kiemelés ugyanúgy követi.": "Read-aloud: long confessions and prayers of your own can also be read to the end with the phone's voice. Until now read-aloud did not even start for a long paragraph; now the text is spoken in smaller pieces, and the highlight follows as before.",
  "Turistautak a térképen: egy nagyítással távolabbról is minden jelzett út látszik; ennél távolabbról csak a nagy, hosszú távú utak (Országos Kéktúra, a Kékkör szakaszai, Camino, Mária-út, európai utak), hogy a térkép ne legyen zsúfolt.": "Hiking trails on the map: every marked trail is shown from one zoom level further out; from further away only the big long-distance trails (National Blue Trail, the sections of the Blue Circle, Camino, Mary's Way, European trails), so that the map is not crowded.",
  "Felolvasás közben a hangjegy gomb és a stop gomb most egyforma méretű, és egy vonalban áll.": "During read-aloud the music note button and the stop button are now the same size and in one line.",
  "A tesztidőszakban a frissítés kötelező, de nem veszi el, amit épp írsz: ha egy mezőben félbehagyott szöveg van, a frissítés megvárja, amíg elmented vagy bezárod, és a felső sáv szól, hogy ezt várja.": "During the test period updates are mandatory, but they do not take away what you are writing: if a field has unfinished text, the update waits until you save or close it, and the top bar says that it is waiting for this.",
  "Ha a frissítés letöltése nem sikerül, a régi verzióval még 30 percig tovább dolgozhatsz, nem zár ki az app.": "If downloading the update fails, you can keep working with the old version for another 30 minutes; the app does not lock you out.",
  "Felolvasás közben új hangjegy gomb: egy áttetsző panelen egy helyen, csúszkával állítható a versek közötti szünet, a felolvasás sebessége és a zene hangereje.": "New music note button during read-aloud: on a translucent panel you can set the pause between verses, the reading speed and the music volume with sliders, in one place.",
  "Zene a felolvasás alá: a panelen a telefonodról választhatsz zenét, az app maga játssza le, saját hangerővel. A felolvasás közbeni -/+ gombok helyett ez a panel van; a dupla koppintásos görgetésnél a -/+ megmaradt.": "Music under read-aloud: on the panel you can choose music from your phone, and the app plays it itself, with its own volume. This panel replaces the -/+ buttons during read-aloud; the -/+ remain for double-tap scrolling.",
  "Felolvasás: a telefon hangja már nem mondja ki a kereszthivatkozás-jelet és a jelölő ikonokat.": "Read-aloud: the phone's voice no longer speaks the cross reference mark and the marker icons.",
  "Zene a felolvasás alatt: a zenelejátszó most lehalkul, amíg a felolvasás szól (akkor is, ha a Zene gombbal később indítod), és a felolvasás a média-hangerőt követi.": "Music during read-aloud: the music player now turns down while read-aloud is speaking (even if you start it later with the Music button), and read-aloud follows the media volume.",
  "Felolvasás az imáknál és a megvallásoknál is (ugyanaz a hangszóró-gomb, mint a Bibliánál), kiemeléssel és görgetéssel.": "Read-aloud for prayers and confessions too (the same speaker button as in the Bible), with highlighting and scrolling.",
  "Felolvasás közben állítható a sebesség (0,7×–1,2×), és a Zene gombbal a telefon zenelejátszója szólhat alatta.": "During read-aloud the speed can be adjusted (0.7× to 1.2×), and with the Music button the phone's music player can play underneath.",
  "Vészkártya: a családtagnál bepipálható, hogy az én adataim jelenjenek meg; a szobanév és a profilkép ugyanitt szerkeszthető.": "Emergency card: for a family member you can tick that my data should be shown; the room name and profile picture can be edited here too.",
  "A Bibliában, az Apokrif könyvek között mindhárom Énok-könyv letölthető: magyarul saját fordításban (az első könyv a görög szöveggel is összevetve, a harmadik közvetlenül héberből), angolul is.": "In the Bible, among the Apocryphal books, all three books of Enoch can be downloaded: in Hungarian in our own translation (the first book also checked against the Greek text, the third translated directly from Hebrew), and in English too.",
  "Esés után csak a szaggatott vészsíp szól, a vaku nem villog, hogy a telefon tovább bírja, amíg segítség érkezik.": "After a fall only the intermittent emergency whistle sounds and the flash does not blink, so the phone lasts longer until help arrives.",
  "Nem magyar nyelvű felületen nem jelenik meg a magyar hangos Biblia letöltése (a beállítás és a letöltött hang megmarad).": "On non-Hungarian interfaces the Hungarian audio Bible download does not appear (the setting and the downloaded voice are kept).",
  "Esés után a szabványos szaggatott vészsíp szól, és a vaku SOS-t villog. Az értesítésből le lehet állítani, és a riasztást a „Jól vagyok” gombbal az app megnyitása nélkül is le lehet mondani.": "After a fall the standard intermittent emergency whistle sounds and the flash blinks SOS. It can be stopped from the notification, and the alarm can be cancelled with the “I'm OK” button without opening the app.",
  "A piros gombokon fehér a felirat (éjszakai módban marad a sötét).": "Labels on red buttons are white (in night mode they stay dark).",
  "Esés-riasztás: csak akkor riaszt, ha a telefon előbb zuhant, aztán ütközött. Az asztalra letett vagy leejtett telefon nem okoz többé riasztást.": "Fall alarm: it alarms only if the phone first fell and then hit something. A phone put down on the table or dropped no longer causes an alarm.",
  "Az app ikonján nem jelenik meg többé piros szám a háttérben futó esés-érzékelés vagy helyi szoba miatt.": "The app icon no longer shows a red number because of fall detection or a local room running in the background.",
  "A hanggenerátor az SOS lapról az Eszközök közé került, saját lapra. A telefonos appban háttérben és kikapcsolt képernyőn is szól, amíg a lapján le nem állítod (vagy az értesítésből).": "The tone generator has moved from the SOS page to Tools, on its own page. In the phone app it plays in the background and with the screen off too, until you stop it on its page (or from the notification).",
  "A kezdőlap csempéi témakörök szerint rendeződtek: felkészülés, vészhelyzet és terep, tudás és közösség, értékek és iratok.": "The start page tiles are arranged by topic: preparedness, emergency and outdoors, knowledge and community, assets and documents.",
  "Szoba tagjai: egy tagot hosszan nyomva menü nyílik: privát üzenet neki, vagy Gerah küldése (ha neki már van Gerah-azonosítója).": "Room members: long-pressing a member opens a menu: a private message to them, or Send Gerah (if they already have a Gerah ID).",
  "Az Eszközök csempe új ikont kapott: villáskulcs és csavarhúzó.": "The Tools tile got a new icon: a wrench and a screwdriver.",
  "Tükör: a szelfikamera a legnagyobb felbontásán dolgozik, és nyitáskor már nem villan fel a lejátszó-ikon.": "Mirror: the selfie camera works at its highest resolution, and the player icon no longer flashes up on opening.",
  "Új Eszközök csempe a Kalkulátor helyén: benne a Kalkulátorok, a Fémdetektor és az új Tükör.": "New Tools tile in place of the Calculator: it contains the calculators, the Metal detector and the new Mirror.",
  "Tükör: az előlapi kamera teljes képernyőn, körben fehér fénykerettel és maximális kijelző-fényerővel, amíg nyitva van a képernyő nem alszik el. Két ujjal nagyítható. Bezárás az alsó gombbal vagy oldalra söpréssel, ilyenkor a kamera és a fény is kikapcsol.": "Mirror: the front camera full screen, with a white light frame all around and maximum display brightness; the screen does not sleep while it is open. It can be zoomed with two fingers. Close it with the bottom button or a side swipe, which also turns off the camera and the light.",
  "Esés-érzékelés (Vészhelyzet lap, alapból kikapcsolva): ha a telefon nagy ütés után egy percig nem mozdul, hangosan visszaszámol, és ha nem nyomod meg a Jól vagyok gombot, SOS-t küld a helyzeteddel. A telefonos appban kikapcsolt képernyőn is figyel.": "Fall detection (Emergency page, off by default): if the phone does not move for a minute after a hard impact, it counts down loudly, and if you do not press the I'm OK button, it sends an SOS with your location. In the phone app it also watches with the screen off.",
  "Fémkereső (Kalkulátor → Fémkereső): a telefon iránytű-érzékelőjével vasat, acélt, vezetéket keres néhány centiről, pittyegéssel. Csak a telefonos appban működik.": "Metal detector (Calculator → Metal detector): with the phone's compass sensor it finds iron, steel and wires from a few centimetres away, with beeps. It works only in the phone app.",
  "Térkép: az utcanevek sötétbarnák és jobban olvashatók, és az út közepén futnak, nem mellette.": "Map: street names are dark brown and easier to read, and they run along the middle of the road, not beside it.",
  "Androidon az alsó menüsor már nem csúszik a telefon gombsora alá (háromgombos navigációnál félig takarásban volt).": "On Android the bottom menu bar no longer slides under the phone's button bar (with three-button navigation it was half covered).",
  "Térkép: az utak kategóriánként finom pasztell színt kaptak – autópálya rózsaszín, autóút barack, főút vajsárga; az alsóbbrendű utak fehérek maradtak.": "Map: roads got subtle pastel colours by category: motorways pink, expressways peach, main roads butter yellow; minor roads stayed white.",
  "Térkép: a városon kívüli utakat – a mellékutakat és földutakat is – vékony, lakóterület-színű keret szegélyezi, így a világos alapon is jól látszanak.": "Map: roads outside towns, including minor roads and dirt roads, are edged with a thin frame in the residential area colour, so they show well on the light background too.",
  "Térkép: a Saját térkép tájegységenkénti letöltése a térkép jobb alsó gombja alatt, az „Offline térkép” csoportban található (eddig a teljes képernyős térkép alatt elérhetetlen volt).": "Map: downloading the Own map by region is under the bottom right button of the map, in the “Offline map” group (until now it could not be reached under the full-screen map).",
  "Térkép: a Saját térkép turistatérkép-színezést kapott – barna lakóterület, fehér utcák, zöld erdő, sárgás rét és szántó.": "Map: the Own map got hiking map colouring: brown residential areas, white streets, green forest, yellowish meadows and fields.",
  "Térkép: a domborzat-árnyékolás egy darabban fedi az országot – nincsenek sötét csíkok a tájegységek határán, és a sík terület nem lesz szürke.": "Map: hill shading covers the country in one piece: no dark stripes at region borders, and flat areas do not turn grey.",
  "Térkép: a távoli turistaút-adat mindig a friss változat (hálózaton újra letöltődik), offline a tárolt marad.": "Map: remote hiking trail data is always the latest version (downloaded again online), and offline the stored version stays.",
  "Az alkalmazás csak egy példányban fut – frissítés után sem nyílik meg kétszer.": "The app runs in only one instance: it does not open twice even after an update.",
  "Térkép: középtávolról (9–10-es nagyítás) a regionális turistautak is látszanak, nem csak az országosak – az Alföldön így nem üres a térkép.": "Map: from medium distance (zoom 9-10) regional hiking trails are shown too, not only national ones, so the map is not empty on the Great Plain.",
  "Térkép: a domborzat és a szintvonalak a Saját térképen akkor is látszanak, ha a tájegységet nem töltötted le (hálózaton); offline a letöltött tájegységeken.": "Map: relief and contour lines are shown on the Own map even if you have not downloaded the region (online); offline on downloaded regions.",
  "Térkép: a kereső mező üveghatású maradt, de sűrűbb, és a felirata világosabb, így világos térképen is olvasható.": "Map: the search field kept its glass effect but is denser, and its label is lighter, so it can be read on a light map too.",
  "Térkép: a kereső mező felirata világos térképen is olvasható.": "Map: the search field label can be read on a light map too.",
  "Térkép: a Saját térkép turistatérkép lett – domborzat-árnyékolás és 20 méteres szintvonalak (minden 100 méteres vastagabb, nagyításkor magassági számmal), mind a 11 tájegységre, offline is.": "Map: the Own map has become a hiking map: hill shading and 20-metre contour lines (every 100 metres thicker, with elevation numbers when zoomed in), for all 11 regions, offline too.",
  "Térkép: a már letöltött tájegységekhez a domborzat magától letöltődik, a térképet nem kell újra letölteni.": "Map: for regions already downloaded the relief downloads by itself; there is no need to download the map again.",
  "Frissítés: az app magától letölti az új verziót, és magától feldobja a telefon telepítő ablakát – csak a telefon „Frissítés” gombját kell megnyomni.": "Update: the app downloads the new version by itself and brings up the phone's installer window by itself: you only need to press the phone's “Update” button.",
  "Frissítés: két letöltés többé nem írhatja felül egymást („Probléma van az alkalmazásfájllal” hiba javítva), és egy új verzió már nem zárja ki a régebbit használókat.": "Update: two downloads can no longer overwrite each other (the “There was a problem with the app file” error is fixed), and a new version no longer locks out those using an older one.",
  "Térkép: új réteg a Rétegek menüben – rádióamatőr átjátszók (hívójel, frekvencia, eltolás, CTCSS, mód), egyelőre Európa.": "Map: new layer in the Layers menu: amateur radio repeaters (call sign, frequency, offset, CTCSS, mode), Europe for now.",
  "Térkép: ha elhúzod a térképet, az „Itt vagy” buborék bezárul, és a térkép többé nem ugrik vissza.": "Map: if you drag the map, the “You are here” bubble closes, and the map no longer jumps back.",
  "Térkép, terület letöltése: az alaptérképnél érthető magyarázat, és egy gomb, ami átvált az offline letölthető Saját térképre.": "Map, area download: a clear explanation for the base map, and a button that switches to the Own map, which can be downloaded for offline use.",
  "Térkép: egy turistaút kiválasztásakor adatlap jelenik meg – hossz, menetidő, kezdő- és végpont, MTSZ-szám, a jelzés festésének éve, leírás, weboldal, és az út menti források, menedékházak, kilátók.": "Map: when you select a hiking trail a details sheet appears: length, travel time, start and end point, MTSZ number, the year the marking was painted, description, website, and springs, mountain huts and lookouts along the trail.",
  "Térkép: egy turistaút vonalára koppintva csak az a szakasz marad a térképen, alatta az adatlappal.": "Map: tapping the line of a hiking trail leaves only that section on the map, with the details sheet below.",
  "Térkép: a külföldi, színjelzés nélküli turistautak a halvány szürke helyett jól látható magentát kapnak, a Via Alpina a saját színét.": "Map: foreign hiking trails without colour markings get a clearly visible magenta instead of faint grey, and the Via Alpina its own colour.",
  "Térkép, útvonaltervezés: a tervezés kártyáján már indulás előtt látszik a menetidő, a várható érkezés és a szintdiagram (emelkedés, lejtés).": "Map, route planning: the planning card shows the travel time, the expected arrival and the elevation profile (ascent, descent) already before departure.",
  "A lépéslistában minden szakasz mellett ott a turistajelzés rajza; a jelzés nélküli szakaszokat (utca, földút, ösvény) egy kék szaggatott vonal jelöli, ugyanaz, mint a térképen.": "In the step list each section shows a drawing of its trail marking; sections without markings (street, dirt road, path) are marked by a blue dashed line, the same as on the map.",
  "Ima-stopper: új név, egyetlen gomb (Indítás, futás közben Leállítás, lejárat után Újra), és a csengés ismétlése plusz-mínusszal 1 és 15 másodperc között állítható.": "Prayer timer: a new name, a single button (Start, Stop while running, Again after it ends), and the bell repeat can be set with plus-minus between 1 and 15 seconds.",
  "Újdonságok és Bejelentéseim ablak: a fejlécben mindig látható bezáró gomb, és a háttérre koppintva is bezárul.": "What's new and My reports windows: a close button always visible in the header, and they also close when you tap the background.",
  "Imák, stopper: új csengőhang, mint amikor egy kristálypoharat kanállal megkoccintanak, lassan lecsengve.": "Prayers, timer: a new bell sound, like a crystal glass tapped with a spoon, slowly fading.",
  "Tájoló: a hangvezetés gombja az app saját ikonját kapta. Jó irányban lassú a sípolás, minél jobban eltérsz, annál sűrűbb.": "Compass: the audio guidance button got the app's own icon. In the right direction the beeping is slow, and the further off you are, the more frequent it gets.",
  "Tájoló (telepített app, Android): a hangvezetés kikapcsolt képernyővel és háttérben is követi az irányt; értesítésből leállítható.": "Compass (installed app, Android): audio guidance follows the direction with the screen off and in the background too; it can be stopped from the notification.",
  "A gombok felirata ismét a rendes betűméretű ott, ahol kifér; eddig sok gombon feleslegesen apró volt.": "Button labels are back to the normal font size where they fit; until now many buttons had needlessly tiny labels.",
  "Tájoló, hangvezetés: megfordult a hang. Jó irányban mély, kettős sípolás szól; minél jobban eltérsz, annál magasabb.": "Compass, audio guidance: the sound is reversed. In the right direction a low double beep plays; the further off you are, the higher it gets.",
  "Térkép, útvonaltervezés: a jelzés nélküli szakasz szaggatott vonala kék lett és vastagabb, hogy jobban látszódjon.": "Map, route planning: the dashed line of a section without markings is now blue and thicker, so that it shows better.",
  "Térkép, navigáció közben: a kanyar-utasítás alulra került, a „Hol vagyok” gomb mellé; fent szabadon marad a kereső.": "Map, during navigation: the turn instruction has moved to the bottom, next to the “Where am I” button; the search stays free at the top.",
  "Térkép, útvonaltervezés: a GPX és az Indulás gomb a tervezés kártyájába került, a Törlés mellé.": "Map, route planning: the GPX and Start buttons have moved into the planning card, next to Delete.",
  "Imák: a stopper csengője a fejlécbe került, a fogaskerék mellé.": "Prayers: the timer bell has moved into the header, next to the gear.",
  // Ujdonsagok v43.466 (2026-11-09)
  "Imaszoba: új Imakérések rész: mások kéréseiért imádkozhatsz, és saját imakérést küldhetsz be; az idegen nyelvű kéréseket a telefon a saját nyelvedre fordítja, az eredeti egy koppintással látható.": "Prayer room: new Prayer requests section: pray for other people's requests and send your own; requests in another language are translated by the phone into your language, the original is one tap away.",
  "Imaszoba: áttekinthetőbb kezdőlap; a vezetett ima egész évre szóló sorozatból jön, minden napra saját imával, a választott nyelven.": "Prayer room: a clearer start page; the guided prayer now comes from a series for the whole year, with its own prayer for every day, in your chosen language.",
  "Biblia: a jegyzetek, kiemelések, könyvjelzők és a többi Biblia-adat titkosítva szinkronizálható a készülékeid és a két app között; a Beállításokban kapcsolható be.": "Bible: notes, highlights, bookmarks and your other Bible data can be synced, encrypted, between your devices and both apps; switch it on in Settings.",
  "Biblia: névtelen olvasási és ima-statisztika, alapból kikapcsolva; a Beállításokban kapcsolható be.": "Bible: anonymous reading and prayer statistics, off by default; switch it on in Settings.",
  "Biblia: több vers is kijelölhető a versszámra koppintva, és a kijelölés együtt kiemelhető vagy megosztható; újabb koppintás leveszi a kijelölést.": "Bible: select several verses by tapping their numbers, then highlight or share the whole selection; a second tap deselects.",
  "Biblia: a fejezetválasztó görgetve a következő könyvvel folytatódik.": "Bible: the chapter picker scrolls on into the next book.",
  "Biblia: a jegyzetablak a szövegtől külön, lebegő ablakban nyílik, saját ablakgombokkal.": "Bible: the note window opens as a separate floating window with its own window controls.",
  "Biblia: tableten és laptopon fekvő helyzetben tömör könyv-, fejezet- és versválasztó; a Strong-ablak szélesebb margót kapott.": "Bible: on tablet and laptop a compact book, chapter and verse picker in landscape; the Strong window has wider margins.",
  "Biblia: a Prófécia- vagy Vészhelyzet-listából megnyitott versből a Vissza gomb ugyanarra a helyre visz vissza a listában.": "Bible: Back from a verse opened from the Prophecy or Emergency list returns to the same place in the list.",
  "Biblia: szövegjavítások a Luther 1912, a Reina-Valera, a Biblia 1914 és a Károli fordításban (elírások és versfelosztás).": "Bible: text fixes in Luther 1912, Reina-Valera, Biblia 1914 and Károli (typos and verse division).",
  "Igetanuló: az igekártyák tintatakarékosak, kétoldalas nyomtatásra készülnek, és „Wordlight Biblia” felirat áll rajtuk.": "Verse learning: verse cards are ink-friendly, made for double-sided printing, and carry the label “Wordlight Biblia”.",
  "Helyi szoba: az értesítés szobánként kikapcsolható.": "Local room: notifications can be switched off per room.",
  "Beállítások: hét csoportba rendezve, képjelekkel.": "Settings: arranged into seven groups with pictograms.",
  "Wordlight tableten és laptopon: személyes irányítópult világtérképpel és oldalsávval; álló helyzetben egy közös statisztika- és világhelyzet-csempe a gombok fölött.": "Wordlight on tablet and laptop: a personal dashboard with the world map and a sidebar; in portrait one combined statistics and world situation tile above the buttons.",
  "Fordítások: idegen nyelvű felületen nem marad magyar szöveg, az újdonságok teljes listája is le van fordítva.": "Translations: no Hungarian text is left on a foreign-language screen, and the full what's-new history is translated.",
  // Ujdonsagok v43.467 (2026-11-09)
  "Megvallások: a Szellemi fegyverek felvétele megvallás mind a 8 nyelven elérhető, a választott nyelven.": "Confessions: the confession “Putting on the spiritual armour” is available in all 8 languages, in your chosen language.",
  "Prémium: a Google Play-en és az App Store-ban vásárolt prémium is 2 készüléken működik, és a Készülékeim listában kezelhető.": "Premium: premium bought on Google Play or the App Store also works on 2 devices and can be managed in My devices."
});
// ===== 2026-11-09 Ablak A (Boss TG 36583, card 524da1cb): a goal day refused as too old is told to the user =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "A {nap} napi célodért már nem jár Gerah: egy teljesített nap {n} napig írható jóvá, és ez a nap addig nem jutott el a szerverhez.": "No Gerah can be credited any more for your goal on {nap}: a completed day can be credited for {n} days, and this day did not reach the server in time.",
  // Ujdonsagok v43.468 (2026-11-09)
  "Gerah: az éjfélen átnyúló olvasás teljes egészében a kezdés napjába számít: a percek, a napi cél, a gratuláció és a Gerah-nap is.": "Gerah: a reading session that runs past midnight counts entirely to the day it started: the minutes, the daily goal, the congratulation and the Gerah day.",
  "Gerah: a saját napi célod napját 3 napig visszamenőleg is jóváírjuk, a sorrendtől függetlenül; ha egy nap már nem írható jóvá, az app ezt megmondja.": "Gerah: a day you reached your own daily goal is credited up to 3 days later, in any order; if a day can no longer be credited, the app tells you.",
  "Wordlight: a Biblia-beállításokban nem jelenik meg kétszer a „Biblia” cím.": "Wordlight: the Bible settings no longer show the “Bible” heading twice."
});
// ===== 2026-11-09 Éjfél text (Thomas 30737, card 4f0b74b5): the congratulation for yesterday shown after midnight names yesterday =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Tegnap is {n} percet töltöttél Isten beszédével.": "Yesterday, too, you spent {n} minutes with God's Word.",
  "Tegnapi cél teljesítve · {n} perc": "Yesterday's goal reached · {n} min",
  "A tegnapi napért {n} gerah járna, de még nincs Gerah-tárcád, ezért nem került letétbe. Hozd létre a tárcádat mielőbb, hogy a tegnapi nap is letétbe kerülhessen.": "Yesterday would earn {n} gerah, but you have no Gerah wallet yet, so nothing went into escrow. Create your wallet soon so that yesterday can still go into escrow.",
  "A tegnapi napért {n} gerah-t letétbe helyeztünk. Heti cél: {k} / {h} nap.": "For yesterday {n} gerah was placed in escrow. Weekly goal: {k} / {h} days.",
  "A tegnapi napért kibányásztál {n} gerah-t!": "You mined {n} gerah for yesterday!",
  "A tegnapi napot a PrepperPapa alkalmazás veszi át, amikor legközelebb megnyitod. Ha a nap csatlakozik a heti cél egymást követő napjaihoz, {n} gerah kerül érte letétbe, és a heti cél teljesítésekor a tárcádba.": "PrepperPapa takes over yesterday the next time you open it. If the day joins the consecutive days of your weekly goal, {n} gerah goes into escrow for it, and into your wallet when you reach the weekly goal."
});
// ===== Ujdonsagok v43.469 (2026-11-09) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Imaszoba: az egész évre szóló vezetett ima mostantól angol, német, spanyol, lengyel, román, orosz és ukrán nyelven is elérhető.": "Prayer room: the year-long guided prayer is now also available in English, German, Spanish, Polish, Romanian, Russian and Ukrainian.",
  "Gerah: éjfél után a tegnapi napról szóló gratuláció és célösszesítő a tegnapot nevezi meg, és helyesen jelzi, hogy a megemelt cél már mától érvényes.": "Gerah: after midnight the congratulation and goal summary for yesterday name yesterday, and correctly say that the raised goal applies from today.",
  "Gerah: a már jóvá nem írható napról szóló értesítést nem takarja el egy másik üzenet.": "Gerah: the notice about a day that can no longer be credited is not covered by another message.",
  "Szobák: a hamis aláírású Gerah-könyv csomagra figyelmeztető üzenet minden nyelven megjelenik.": "Rooms: the warning about a Gerah ledger package with a forged signature now appears in every language.",
  "Szobák: meghívó linkkel csatlakozva és új szoba létrehozásakor is el kell fogadni a Szoba szabályzatát, és meg kell erősíteni, hogy elmúltál 16 éves, vagy van szülői hozzájárulásod.": "Rooms: joining by invite link and creating a new room also ask you to accept the Room rules and to confirm that you are over 16 or have parental consent.",
  "Mentés: a hozzájáruláshoz kötött kapcsolókat a mentés és a visszaállítás nem viszi át; új telefonon az app újra megkérdez.": "Backup: switches that depend on your consent are not carried over by backup and restore; on a new phone the app asks you again.",
  "Imakérések: a feltételek elfogadása fiókhoz kötött; másik fiókkal belépve újra el kell fogadni őket.": "Prayer requests: accepting the terms is tied to your account; signed in with another account, you accept them again.",
  // the Bible sub-views' own guides (Boss TG 37158, Marveen 30856)
  "Mai vezetett ima: koppints rá, és lépésenként végigvezet a mai imán.": "Today's guided prayer: tap it and it leads you through today's prayer step by step.",
  "Összes vezetett ima: innen nyithatod meg a többi vezetett imát is.": "All guided prayers: open the other guided prayers from here.",
  "Imádkozz minden nap: állíts be egy időpontot, és a telefon minden nap emlékeztet.": "Pray every day: set a time and the phone reminds you every day.",
  "Saját imatémáim: itt vezeted az imalistádat és a megválaszolt imákat.": "My prayer topics: keep your prayer list and your answered prayers here.",
  "Imakérések: elolvashatod mások kéréseit, és a sajátodat is beküldheted.": "Prayer requests: read other people's requests and send in your own.",
  "Imatérkép: az országok, amelyekért a vezetett imában imádkoztál.": "Prayer map: the countries you prayed for in the guided prayer.",
  "Ima-stopper: megadod, hány percig imádkozol, és a végén csengő szól.": "Prayer timer: set how many minutes you pray, and a bell rings at the end.",
  "Koppints egy megvallásra a megnyitásához.": "Tap a confession to open it.",
  "A plusz gombbal saját megvallást írhatsz.": "Use the plus button to write your own confession.",
  "Koppints egy tervre: megnyílnak a napjai, és látod, hol tartasz.": "Tap a plan: its days open and you see where you are.",
  "Új terv: egy újabb tervet indíthatsz, több tervet is olvashatsz egyszerre.": "New plan: start another plan; you can read several plans at once.",
  "Vissza a terveimhez: innen visszajutsz a terveid listájához.": "Back to my plans: this takes you back to the list of your plans.",
  // a room message's menu: save it to the profile (it showed in Hungarian in every language, 2026-11-09)
  "Mentés a profilomba": "Save to my profile",
  "Mentés visszavonása": "Remove from my profile",
  // the deeper prayer views' and the local room's own guides (Marveen 30886)
  "Itt látod, hányadik lépésnél tartasz, és mennyi idő van még belőle.": "Here you see which step you are on and how much time is left of it.",
  "Indítás: elindul az idő, és a lépések egymás után jönnek.": "Start: the time starts and the steps follow one after another.",
  "Következő lépés: továbbléphetsz, ha egy lépéssel hamarabb végeztél.": "Next step: move on if you finished a step sooner.",
  "Háttérzene: ha bekapcsolod, halk zene szól az ima alatt.": "Background music: switch it on and quiet music plays during the prayer.",
  "Indítás felolvasással: a telefon felolvassa az ima szövegét.": "Start with read-aloud: the phone reads the prayer's text aloud.",
  "Vezetett imák: koppints egyre, és megnyílik.": "Guided prayers: tap one and it opens.",
  "Imalista: az imatémáid; egy témára koppintva megnyitod.": "Prayer list: your prayer topics; tap a topic to open it.",
  "Imatéma hozzáadása: írd be, amiért imádkozni szeretnél.": "Add a prayer topic: write what you want to pray for.",
  "Megválaszolt: azok az imatémáid, amelyeket megválaszoltnak jelöltél.": "Answered: the prayer topics you marked as answered.",
  "Szűrés: az aktív vagy a már megválaszolt kérések.": "Filter: active or already answered requests.",
  "Ország szerint is szűrheted a kéréseket.": "You can also filter the requests by country.",
  "Kategória szerint is szűrheted a kéréseket.": "You can also filter the requests by category.",
  "A kérések listája: mindegyiknél jelezheted, hogy imádkoztál érte.": "The list of requests: for each one you can mark that you prayed for it.",
  "Imakérés beküldése: a sajátodat is elküldheted.": "Send a prayer request: you can send your own too.",
  "Saját imakéréseid: itt látod őket, és azt is, honnan imádkoztak értük.": "Your prayer requests: see them here, and also where people prayed for them from.",
  "Az üzenetek internet nélkül jutnak el a szoba tagjaihoz.": "Messages reach the room's members without internet.",
  "Írd ide az üzenetet, és a küldés gombbal elküldöd.": "Write your message here and send it with the send button.",
  "Sürgős: az üzenet pirossal kiemelve érkezik a többiekhez.": "Urgent: the message arrives highlighted in red for the others.",
  "A fogaskerékkel nyílnak a szoba beállításai.": "The gear opens the room's settings.",
});
// ===== Ujdonsagok v43.470 (2026-11-09) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Térkép: a térkép mindig az alaptérképpel nyílik meg, nem műholdképpel.": "Map: the map always opens on the base map, not on satellite.",
  "Térkép: az imakérések saját rétegként jelennek meg a térképen, és ez a réteg kikapcsolható; az irányítópult gombjával az imakérés-pontok elrejthetők és újra megjeleníthetők.": "Map: prayer requests appear as their own layer on the map, and the layer can be switched off; the dashboard button hides and shows the prayer request points.",
  "Vezetett ima: felolvasáskor az éppen felolvasott rész középre kerül, és a kiemelés egyszer fut végig rajta.": "Guided prayer: while reading aloud, the part being read is centred, and the highlight runs over it once.",
  "Biblia felolvasás: a piros betűs szavak is fehérre váltanak, amikor sorra kerülnek.": "Bible read-aloud: red-letter words also turn white when their turn comes.",
  "Biblia: a (?) súgó minden Biblia-aloldalon az adott oldal saját útmutatóját mutatja.": "Bible: the (?) help on every Bible sub-page shows that page's own guide.",
  "Biblia: a napi olvasási percek csak akkor számítanak, amikor egy bibliai könyv szövege nyitva van, vagy felolvasás közben.": "Bible: the daily reading minutes count only while the text of a Bible book is open, or while it is read aloud.",
  "Biblia szinkron: ha a kapcsoló nem tud bekapcsolni, az app megmondja, miért.": "Bible sync: if the switch cannot turn on, the app tells you why.",
  "Ébresztők: a telefon újraindítása után az ébresztők a képernyő feloldása előtt is újra be vannak állítva.": "Alarms: after the phone restarts, alarms are set again even before the screen is unlocked.",
  "Gerah küldés: ha egy tagnak több tárcája van, a tárcát eszközjelölés azonosítja, és a küldés mindig ugyanarra a tárcára megy.": "Gerah send: if a member has several wallets, a device mark identifies the wallet, and sending always goes to the same wallet.",
  "Szobák: a szobameghívó linkek mindig a PrepperPapa alkalmazást nyitják meg.": "Rooms: room invite links always open the PrepperPapa app.",
  "Kisebb fordítási javítások.": "Small translation fixes.",
  "Irányítópult: tableten, fekvő helyzetben új, zöld radaros irányítópult.": "Dashboard: a new green radar dashboard on tablets in landscape.",
  // the map guide's layers steps (Boss TG 37261)
  "Rétegek: itt kapcsolhatod be vagy ki a térkép rétegeit, köztük a Világhelyzetet és az Imakéréseket.": "Layers: switch the map's layers on or off here, among them World situation and Prayer requests.",
  "Imakérések: az emberek által beküldött imakérések, mindegyik kb. 50 km-es körzettel. A vezetett ima világhelyzet-témái a Világhelyzet rétegben vannak.": "Prayer requests: the requests people have sent in, each with a radius of about 50 km. The guided prayer's world-situation topics are in the World situation layer.",
  // ===== 2026-11-09 Bible workspace on wide screens (owner TG 9713/9714/9722/9728, card dfea1f7d) =====
  "Kereszt-hivatk.": "Cross-refs",
  "Elrendezés": "Layout",
  "Kutatás": "Research",
  "Strong nagy": "Strong large",
  "Jegyzetelés": "Note-taking",
  "Saját": "Own",
  "Ablakok": "Windows",
  "ablak": "windows",
  "Olvasás": "Reading",
  "Feljebb": "Move up",
  "Lejjebb": "Move down",
  "Átméretezés": "Resize",
  "Legfeljebb 5 ablak": "At most 5 windows",
  "lehet nyitva. Zárj be egyet, és ez megnyílik a helyén.": "can be open. Close one and this one opens in its place.",
  "{n} kapcsolódó ige": "{n} related verses",
  "Ehhez a vershez nincs kereszthivatkozás.": "This verse has no cross-references.",
  "Koppints egy szóra a Bibliában, és itt megjelenik az eredeti szó.": "Tap a word in the Bible and its original word appears here.",
});
// ===== 2026-11-09 feedback sheet support hint (card a0a2d3d6, Boss TG 37291-37297): in-app only, never a web hint =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Az alkalmazás szándékosan nem havidíjas. Ha szeretnéd, egy kisebb összeggel hozzájárulhatsz az üzemeltetés költségeihez; hálásan köszönjük.": "The app deliberately has no monthly fee. If you wish, you can contribute a small amount towards its running costs; we are truly grateful."
});

// ===== 2026-11-09 dashboard news filter (Boss TG 9702/9706) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Mind": "All",
  "Természet": "Nature",
  "Hírek szűrése": "Filter news",
  "Ebben a szűrőben most nincs friss hír.": "No fresh news in this filter right now."
});

// ===== 2026-11-09 QR pairing: camera error line in the UI language (Thomas 31160, Marveen 31161) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "A kamera nem indult el: {hiba}": "The camera didn't start: {hiba}"
});

// ===== 2026-11-09 QR reader did not load (Marveen, follow-up of fix/wl-qr-kamera) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "A QR-olvasó nem töltődött be ezen a készüléken. Próbáld újra, vagy használd a Beillesztés/Kép-ből gombot.": "The QR reader did not load on this device. Try again, or use the Paste / From image button."
});
// ===== Ujdonsagok v43.471 (2026-11-09) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Biblia: laptopon és fekvő tableten új munkafelület, egyszerre akár öt ablakkal (szöveg, jegyzet, kereszthivatkozások, eredeti szó).": "Bible: a new workspace on laptops and landscape tablets, with up to five windows at once (text, note, cross-references, original word).",
  "Biblia jegyzetek: visszavonás és újra gomb a szerkesztőben; az „Új jegyzet” gomb mindig új jegyzetet nyit.": "Bible notes: undo and redo buttons in the editor; the “New note” button always opens a new note.",
  "Biblia: több vers másolásakor az egymást követő versek egy idézetbe kerülnek, egy helymegjelöléssel, és a megosztott igehely linkje az alkalmazásban nyílik meg.": "Bible: when copying several verses, consecutive verses become one quote with one reference, and the link of a shared passage opens it in the app.",
  "Biblia keresés: több szónál elöl a pontos kifejezés találatai állnak; egy oldal elhagyásakor a keresőmezők kiürülnek.": "Bible search: with several words, the exact phrase matches come first; leaving a page clears its search boxes.",
  "Biblia: a könyv-, fejezet- és versválasztó mögött is látszik a 3D galaxis, a könyvek rajzai finoman áttűnnek, és a szövegben a megfelelő verseknél ott vannak a piktogramok.": "Bible: the 3D galaxy also shows behind the book, chapter and verse pickers, the book drawings cross-fade softly, and the pictograms appear in the text at their verses.",
  "Olvasási tervek: minden elkezdett tervnél látszik a várható befejezés a jelenlegi tempóval.": "Reading plans: every started plan shows its expected finish at your current pace.",
  "Kvíz: a válasz kiválasztása után rögzítő hang és rövid feszültség, mielőtt kiderül, jó-e a válasz.": "Quiz: after you pick an answer, a lock-in sound and a short moment of suspense before the result is revealed.",
  "Térkép: az imakérések csak a Biblia térképén látszanak, saját, kb. 50 km-es körrel; a világnézet kitölti a képernyőt, és a térképnek is van (?) súgója.": "Map: prayer requests show only on the Bible's map, each with its own circle of about 50 km; the world view fills the screen, and the map has its own (?) help.",
  "Világhelyzet: a jelmagyarázatban egy típusra koppintva az elrejthető vagy visszahozható a térképen, mellette a darabszám; kevesebb téves támadás-jelzés.": "World situation: tap a type in the legend to hide it on the map or bring it back, with the count beside it; fewer false attack reports.",
  "Átjátszók rétege: a LoRaWAN átjárók és a Meshtastic csomópontok is megjelennek, mindegyik saját színnel.": "Repeater layer: LoRaWAN gateways and Meshtastic nodes are shown too, each in its own colour.",
  "LoRa szoba: ugyanolyan csevegőfelület, mint a többi szobában; a saját üzenet állapota „rádiónak átadva”.": "LoRa room: the same chat screen as the other rooms; your own message shows “handed to the radio”.",
  "Imakérések: erősebb védelem kéretlen üzenetek, trágárság és rejtett linkek ellen; ha egyszerre szokatlanul sok kérés érkezik, az app ezt meg is mondja.": "Prayer requests: stronger protection against spam, profanity and hidden links; if unusually many requests arrive at once, the app says so.",
  "Biblia szinkron: új eszköz egyszeri QR-kóddal köthető be, és az app elmagyarázza a jelmondatot.": "Bible sync: a new device can be linked with a one-time QR code, and the app explains the passphrase.",
  "Irányítópult: simább radar gyengébb tableten, hírszűrő (Mind / Imák / Természet), és a napi olvasás kártyája azonnal a friss perceket mutatja.": "Dashboard: smoother radar on weaker tablets, a news filter (All / Prayers / Nature), and the daily reading card shows the current minutes at once.",
  "Ébresztő: a telefon újraindítása után, az első feloldás előtt is megszólal, lassan erősödő hanggal.": "Alarm: after the phone restarts it rings even before the first unlock, with a slowly rising tone.",
  "Visszajelzés: új Támogatás gomb a visszajelzés lapon.": "Feedback: a new Support button on the feedback sheet.",
  "Webes változat: belépés után felajánlja, hogy programként telepíthető legyen.": "Web version: after sign-in it offers to install itself as a program.",
  "iPad és iPhone: javított tabletes elrendezés, és az engedélykérő szövegek mind a 8 nyelven.": "iPad and iPhone: improved tablet layout, and the permission texts in all 8 languages.",
  "Kisebb javítások és fordítások.": "Small fixes and translations."
});
// ===== Ujdonsagok v43.472 (2026-11-09) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Wordlight: minden képernyőn egyszerű vissza nyíl, a beállításokban, a Biblia aloldalain és az irányítópulton is, a sötét sáv nélkül; a PrepperPapa Biblia aloldalain is.": "Wordlight: a plain back arrow on every screen, including settings, the Bible sub-pages and the dashboard, without the dark band; on the PrepperPapa Bible sub-pages too.",
  "Kvíz: a várakozó zene már a kérdés megjelenésekor elindul, és az Ellenőrzés után sem csúszik el a hangneme.": "Quiz: the waiting music starts as soon as the question appears, and it stays in key after Check.",
  "LoRa szoba (LongFast): az üzenetmező a szöveggel együtt nő, így a beírt szöveg mindig teljesen látszik.": "LoRa room (LongFast): the message box grows with the text, so what you type is always fully visible.",
  "Térkép: mindig bekapcsolt Világhelyzet réteggel nyílik meg, így az eseményszűrő is látszik; a kikapcsolás csak az adott alkalomra szól.": "Map: it always opens with the World situation layer on, so the event filter is visible too; switching it off lasts for that visit only.",
  "Biblia: a szövegben a piktogramok kétszer akkorák.": "Bible: the pictograms in the text are twice as large.",
  "Wordlight: álló helyzetben, elforgatás után nem marad a kezdőlapon a „Panel összecsukása” gomb.": "Wordlight: in portrait, after a rotation, the “Collapse panel” button no longer stays on the start page.",
  "Könnyített megjelenítés gyengébb telefonokra: az app magától felméri a telefont, és szükség esetén kevesebb animációval, elmosás nélkül fut; a Beállítások › Általános › Könnyített megjelenítés alatt át is állítható.": "Light display mode for weaker phones: the app checks the phone by itself and, if needed, runs with fewer animations and no blur; it can be changed under Settings › General › Light display mode.",
  "Biblia: simább görgetés olvasás közben.": "Bible: smoother scrolling while reading.",
  "Felolvasás: ha a választott Samuel hang egy könyvhöz még nem készült el, az app a legjobb elérhető felvétellel olvas, és megmondja, kinek a hangján.": "Read aloud: if the chosen Samuel voice is not yet ready for a book, the app reads it with the best available recording and tells you whose voice it is.",
  "Olvasási terv: a napi rész végén a felolvasás leáll, de a háttérzene szól tovább, amíg az „Elolvastam” vagy a „Vissza a tervemhez” gombot meg nem nyomod.": "Reading plan: at the end of the day’s portion the reading voice stops, but the background music plays on until you tap “I have read it” or “Back to my plan”.",
  "Biblia: néhány jelenetkép a pontos versnél jelenik meg, minden fordításban.": "Bible: some scene pictures now appear at the exact verse, in every translation.",
  "Tesztelőknek: aki a tesztelői változatról a boltból letöltött appra vált, egyszer megkapja az új tárcájára a korábban jóváírt Gerah-egyenlegét.": "For testers: when you move from the tester version to the app from the store, your previously credited Gerah balance is given once to your new wallet.",
  "Csempe hozzáadása": "Add tile",
  "Programok": "Programs",
  "Szobák": "Rooms",
  "Kikapcsolás": "Switch off",
  "Nincs több hozzáadható csempe.": "No more tiles to add.",
  "Szoba": "Room",
  "Bekapcsolás": "Switch on",
  "Útvonaltervező": "Route planner",
  "Családfa": "Family tree",
  "Kiindulás": "Start"
});
// ===== Ujdonsagok v43.473 (2026-11-10) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Kezdőlap: hosszú nyomásra a csempék felemelkednek és lebegnek (hosszú rezgéssel); a zöld mínusszal kikapcsolhatod, a plusszal visszakapcsolhatod őket, a nagy, kereshető listából bármelyik programot, eszközt, szobát vagy Biblia-funkciót hozzáadhatod, húzással pedig átrendezheted; csak a Biblia csempe és az alsó kapszula marad a helyén.": "Home screen: long press and the tiles lift and float, with one long vibration; switch tiles off with the green minus and back on with the plus, add any program, tool, room or Bible feature from a big searchable list, and drag to reorder; only the Bible tile and the bottom capsule stay in place.",
  "Biblia: családfa mind a 8 nyelven; két szülő, „nem ismert” jelzés, széles képernyőn fa-nézet.": "Bible: the family tree in all 8 languages; two parents, an “unknown” marker, and a tree view on wide screens.",
  "A rögzített fejléc alatt görgetett tartalomnál a fejléc határvonalat és árnyékot kap, mindkét appban.": "When content is scrolled under a sticky header, the header gets a border line and a shadow, in both apps.",
  "Könnyített megjelenítés: a műveleti lapok és panelek már nem átlátszók, jól olvashatók.": "Light display mode: action sheets and panels are no longer see-through and read clearly.",
  "Térkép: a panelek gombjai (bezárás, súgó, vissza) újra működnek.": "Map: the buttons on the panels (close, help, back) work again.",
  "QR-olvasó: letiltott kamera után az engedély megadásával újraindul a beolvasás, újraindítás nélkül.": "QR scanner: after a refused camera, allowing the permission restarts the scan by itself, no restart needed.",
  "Vezetett ima: minden lépésre elég idő jut az olvasásra és az imádkozásra.": "Guided prayer: every step now gives you enough time to read and pray.",
  "Irányítópult: a radar könnyített módban is forog; az új pontok nagyobbat villannak, a Befutó hírek elemei megnyitják az eseményt, a térkép nagyítható és húzható.": "Dashboard: the radar keeps turning in light mode; fresh dots flash bigger, the Incoming news items open their event, and the map can be zoomed and dragged.",
  "Biblia: simább 3D galaxis a háttérben.": "Bible: smoother 3D galaxy in the background.",
  "Wordlight: minden megosztási link a wordlight.hu oldalra mutat.": "Wordlight: every share link now points to wordlight.hu.",
  "Kisebb javítások és fordítások.": "Small fixes and translations.",
  // Wordlight phone start page (Boss TG 10052): lantern aria-label, the ring centre button, the weekly card title
  "Menü": "Menu",
  "Bezár": "Close",
  "A héten": "This week"
});
// ===== Ujdonsagok v43.474 (2026-11-11) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Wordlight, telefon álló helyzetben: új kezdőlap, felül lapos térkép, alatta 2×2 csempe a lámpással a közepén; koppintásra forgatható modulgyűrű nyílik, lejjebb a Befutó hírek.": "Wordlight, phone in portrait: a new home page with a flat map on top, 2×2 tiles below with the lantern in the middle; a tap opens a rotatable ring of modules, and Incoming news sits further down.",
  "Az oldalfejlécek visszaálltak a korábbi kinézetre: görgetéskor nincs vonal és árnyék; a Biblia lapjainak fejléce megtartja.": "The page headers are back to their earlier look: no line and no shadow when scrolled; the Bible sheet headers keep theirs.",
  "Térkép: a hírfolyamból megnyitott esemény már nem kerül a keresősáv alá.": "Map: an event opened from the news feed is no longer hidden under the search bar.",
  "Irányítópult: keskeny telefonon az üdvözlés már nem mutat levágott betűket.": "Dashboard: on narrow phones the greeting no longer shows cut-off letters.",
  "Igekártyák nyomtatása: a telefon saját nyomtatási előnézetében nyílnak meg, és teljes vonalak helyett sarokjelek mutatják a vágást.": "Verse card printing: the cards open in the phone's own print preview, and corner marks show the cut instead of full lines.",
  "Kezdőlap szerkesztése: a KÉSZ gomb a helyére került, és nem takarja a fejléc gombjait.": "Home screen editing: the DONE button sits in the right place and no longer covers the header buttons.",
  "Hirdetés: a teljes kártya megnyitja a terméket.": "Ads: the whole card opens the product.",
  "Könnyített megjelenítés: erős telefon magától nem vált át, és a kereső- és üzenetmezők üveghatása megmarad.": "Light display mode: a strong phone does not switch to it by itself, and the search and message fields keep their glass effect.",
  "Világhelyzet: csak az igazán figyelmet érdemlő események jelennek meg, a kisebb földrengések és az ismétlődő hírek nem.": "World situation: only events that really deserve attention appear; minor earthquakes and repeated reports are left out.",
  "Bibliai játékok: a válasz megjelölése azonnal ellenőriz (nincs külön Ellenőrzés gomb), és közben egy rövid, a játék zenéjéhez illő felfokozó hang szól.": "Bible games: marking an answer checks it right away (no separate Check button), with a short build-up sound that fits the game's music.",
  "Kisebb javítások és fordítások.": "Small fixes and translations.",
  "A licenc szövege": "Licence text",
  "Linket nem tehetsz bele. Vedd ki, és küldd újra.": "You cannot put a link in it. Remove it and send again.",
  "Háromnál több számjegy egymás után nem lehet benne (például telefonszám). Vedd ki, és küldd újra.": "It cannot contain more than three digits in a row (for example a phone number). Remove them and send again."
});
// ===== Ujdonsagok v43.475 (2026-11-11) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Wordlight, telefonos kezdőlap: a modulgyűrű ott marad, ahová elforgattad, újraindítás után is; forgatás közben finoman kattog, mint egy racsnis tárcsa.": "Wordlight, phone home page: the module ring stays where you turned it, even after a restart; while you turn it, it ticks gently like a ratchet dial.",
  "Wordlight, telefonos kezdőlap: a lámpás csak középen áll, és úgy csillog, mint a fejléc keresztje; a fejléc a csempék széléhez igazodik.": "Wordlight, phone home page: the lantern stands in the middle only and shimmers like the cross in the header; the header lines up with the edges of the tiles.",
  "Wordlight, telefonos kezdőlap: a radarra koppintva megnyílik a világtérkép az eseményekkel; telefonon nincs jelmagyarázat, az UTC-idő zölden, háttér nélkül a radar alján áll.": "Wordlight, phone home page: a tap on the radar opens the world map with the events; on the phone there is no legend, and the UTC time stands in green, without a background, at the bottom of the radar.",
  "Wordlight, telefonos kezdőlap: a hosszú feliratok (például oroszul, németül) már nem csúsznak egymásra.": "Wordlight, phone home page: long labels (for example in Russian or German) no longer run into each other.",
  "Bibliai családfa: minden megnevezett bibliai szereplő benne van, mind időben elhelyezve, köztük Jób és gyermekei; a nagyszülők ágán a gyermekek és az unokák külön sorban állnak, a nézett személy a nevével, aranykeretben.": "Bible family tree: every named person of the Bible is in it, all placed in time, among them Job and his children; on the grandparents' branch the children and the grandchildren stand in separate rows, the person you are viewing with their name, in a gold frame.",
  "Biblia: a kijelölt vers számára újra koppintva a kijelölés megszűnik, akkor is, ha kicsit mellé koppintasz.": "Bible: tapping the number of a selected verse again removes the selection, even if your tap lands slightly beside it.",
  "Imakérések: link és háromnál több egymás utáni számjegy nem küldhető be, és a szűrő 8 nyelven több sértő szót ismer fel.": "Prayer requests: a link or more than three digits in a row cannot be sent, and the filter recognises more offensive words in 8 languages.",
  "Névjegy: a Sámuel-hang hangkódolójának (Higgs Audio 2) licence-feltüntetése.": "About: the licence notice for the audio tokenizer (Higgs Audio 2) behind Samuel's voice.",
  // Pipa A, prayer form (Boss TG 38204/38206)
  "A Beküldés gombbal elfogadod a {link}.": "By tapping Send, you accept the {link}.",
  "Felhasználási feltételeket": "Terms of Use",
  "A beküldéshez jelöld be a hozzájárulást.": "To send, tick the consent box."
});
// ===== Ujdonsagok v43.476 (2026-11-11) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Wordlight, telefonos kezdőlap: a pontok akkor villannak fel, amikor a radarvonal áthalad rajtuk, akkor is, ha az oldal sokáig nyitva van; a térkép kitölti a csempét, az UTC-idő a csempe alján áll.": "Wordlight, phone home page: the dots light up when the radar line passes over them, also when the page has been open for a long time; the map fills the tile, the UTC time stands at the bottom of the tile.",
  "Memóriajáték, két játékos: minden pár annak a játékosnak a színével kap keretet, aki megtalálta, és a pontszám is ugyanezekkel a színekkel látszik.": "Memory game, two players: every pair gets the frame colour of the player who found it, and the score shows the same colours.",
  "Biblia: új mottó, „Ha pedig a világosságban járunk, közösségünk van egymással.” (1Ján 1:7), a nyitóképen, minden fejezet végén a forrássor alatt és a Mások imakérései oldal tetején.": "Bible: a new motto, \"But if we walk in the light, we have fellowship one with another.\" (1Jn 1:7), on the start screen, under the source line at the end of every chapter and at the top of the Others' prayer requests page.",
  "Biblia: a könyvválasztó fejlécén a galaxis-háttér mellett is átlátszanak a csillagok, ahogy az imádság oldalán.": "Bible: the head of the book picker lets the stars show through with the galaxy background too, as on the prayer page.",
  "Imakérés beküldése: egyetlen jelölőnégyzet a hozzájárulásra, a Felhasználási feltételeket a Beküldés gomb melletti sor jelzi; a szűrő a kicsillagozott és kipontozott csúnya szavakat is felismeri.": "Sending a prayer request: a single box for the consent, the Terms of Use are stated in a line next to the Send button; the filter also recognises offensive words written with stars or dots.",
  "Beállítások: a választható mentési és szinkron-beállítások kapcsolóként jelennek meg.": "Settings: the optional backup and sync settings appear as switches.",
  "Versek kvíz és Igetanuló: a kezdőbetűs segítség más nyelvű felületen sem változik meg.": "Verse quiz and Memoriser: the first-letter hints no longer change in other interface languages."
});
// ===== Biblia-kereso torlo X (2026-11-11, card 05df7bed) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Keresés törlése": "Clear search"
});
// ===== Ujdonsagok v43.477 (2026-11-11) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Wordlight: a Beállításokban a Használati útmutató gomb a Wordlight saját útmutatóját nyitja meg, a felület nyelvén.": "Wordlight: in Settings the User guide button opens Wordlight's own guide, in the interface language.",
  "Wordlight: az értesítéseknél a telefon fejlécében a Wordlight saját ikonja látszik a PrepperPapa lámpása helyett.": "Wordlight: notifications show Wordlight's own icon in the phone's status bar instead of the PrepperPapa lantern.",
  "Biblia-kereső: elírt szónál vagy rossz ragozásnál a hasonló alakokat ajánlja fel, és azokkal keres, több szónál az összesített találatban is.": "Bible search: for a mistyped word or a wrong ending it offers the similar forms and searches with them, with several words in the combined result too.",
  "Biblia-kereső: a mezőt az X gombbal egy koppintással ki lehet üríteni.": "Bible search: the X button empties the field with one tap."
});
// ===== Ujdonsagok v43.478 (2026-11-11) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Biblia-felolvasás: a sebesség csúszkájának vagy a felolvasó panel gombjainak megnyomása közben a görgetés nem torpan meg, csak az új sebességre vált; ugyanígy az automatikus görgetés +/- gombjánál.": "Bible read-aloud: while you press the speed slider or the buttons of the reading panel, the scrolling no longer pauses, it only changes to the new speed; the same for the +/- buttons of the automatic scrolling."
});
// ===== Hirlevel megerosites ablak (2026-11-11, card fb0e3000, Istvan 32532) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Küldtünk egy megerősítő e-mailt ide:": "We have sent a confirmation e-mail to:",
  "A feliratkozás akkor lesz érvényes, ha a levélben lévő linket megnyitod, és megnyomod a „Megerősítem” gombot.": "Your subscription becomes valid when you open the link in the e-mail and press the “I confirm” button.",
  "Ha nem találod, nézd meg a Spam mappát is.": "If you cannot find it, check your Spam folder too."
});
// ===== Ujdonsagok v43.479 (2026-11-12) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Wordlight: a Fiók és hírlevél részben feliratkozhatsz a havi Wordlight-hírlevélre: a hónap meghallgatott imakéréseinek összefoglalója és a havi statisztika, havonta legfeljebb egyszer. A feliratkozás a megerősítő levélben lévő gombbal lesz érvényes.": "Wordlight: in Account and newsletter you can subscribe to the monthly Wordlight newsletter: a summary of the month's answered prayer requests and the monthly statistics, at most once a month. The subscription becomes valid with the button in the confirmation e-mail.",
  "Hírlevél: a pipa bejelölése után egy ablak megmondja, hogy a feliratkozást a kapott e-mailben kell megerősíteni.": "Newsletter: after you tick the box, a window tells you to confirm the subscription in the e-mail you receive.",
  "Wordlight: egyetlen beállítási képernyő; a kezdőlap és az olvasó fogaskereke ugyanazt nyitja meg.": "Wordlight: one settings screen; the gear on the start page and in the reader open the same screen.",
  "Wordlight: a Biblia keresőmezőjébe koppintva a fejléc már nem változik meg.": "Wordlight: tapping into the Bible search field no longer changes the header.",
  "Wordlight: a lámpás gyűrű kinyílásakor minden csempe egy finom rezgéssel érkezik.": "Wordlight: when the lantern ring opens, every tile arrives with a gentle vibration.",
  "A mottó a Wordlight nyitóképernyőjén, a „Mások imakérései” lap tetején és minden fejezet végén látszik; a PrepperPapa Biblia kezdőlapjáról lekerült.": "The motto shows on the Wordlight start screen, at the top of the “Others' prayer requests” page and at the end of every chapter; it has been removed from the PrepperPapa Bible start page.",
});
// ===== Betumeret-valaszto (v43.479 nyelvi kapu: a Wordlight osszevont beallitasaban magyarul maradt) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Kicsi (90%)": "Small (90%)",
  "Nagyobb (115%)": "Larger (115%)",
});

// ===== PrepperPapa irányítópult (kártya d41df713, Főnök TG 38516) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "{n} esemény": "{n} events",
  "Most nincs friss esemény.": "No fresh events right now.",
  "A világhelyzet még nem töltődött le.": "The world situation has not been downloaded yet.",
  "Hozzád legközelebb": "Nearest to you",
  "nap (gyűrű)": "d",
  "hó (gyűrű)": "mo",
  "év (gyűrű)": "yr",
  "Kevés": "Low",
  "Kritikus": "Critical",
  "Nincs adat": "No data",
  "Még nincs helyszín.": "No location yet.",
  "Nap · légnyomás": "Sun · pressure",
  "Légnyomás": "Pressure",
  "nap múlva": "days left",
  "hónap múlva": "months left",
  "év múlva": "years left",
  "{mi} fogy el": "{mi} runs out",
  "Nincs mért készlet.": "No stock measured.",
  "Lejárt": "Expired",
  "Ma jár le": "Expires today",
  "Lejár {n} nap": "Expires in {n} d",
  "Szoba · üzenetek": "Room · messages",
  "Még nem vagy tagja szobának. Koppints ide, és csatlakozz egyhez.": "You are not in a room yet. Tap here to join one.",
  "{n} új": "{n} new",
  "Titkosított üzenet": "Encrypted message",
  "Még nincs üzenet ezen a készüléken. Koppints ide a szoba megnyitásához.": "No messages on this device yet. Tap here to open the room.",
  "Melyik szoba üzenetei látszódjanak?": "Which room's messages should show?",
  "Tudástár · napi kártya": "Knowledge base · daily card",
  "A mai kártya betöltése…": "Loading today's card…",
  "Funkciók": "Functions",
});
// the dashboard news rows use short category names (approved mockup, card d41df713)
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Tűz": "Fire",
  "Vihar": "Storm",
  "Vulkán": "Volcano",
  "Zavargás": "Unrest",
  "Konfliktus": "Conflict",
});

// ===== Ujdonsagok v43.480 (2026-11-12) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "PrepperPapa: új kezdőképernyő, az irányítópult. Egy helyen látod a helyszínek készültségét, a napkeltét, a légnyomást, a készletet, a világhelyzet-térképet, a szobákat és a tudástárat; a középső pajzs nyitja a funkciókat.": "PrepperPapa: a new start screen, the dashboard. In one place you see your places' readiness, sunrise, air pressure, your stock, the world situation map, the rooms and the knowledge base; the shield in the middle opens the functions.",
  "Irányítópult: a világhelyzet-térkép két ujjal nagyítható és mozgatható, dupla koppintással közelít, és megjegyzi a nézetet.": "Dashboard: the world situation map zooms and pans with two fingers, a double tap zooms in, and it remembers the view.",
  "Irányítópult: a helyszín állapota (Rendben, Kevés, Kritikus) a víz, az élelem és a fűtés alapján jön; az áram a Kockázat lapon látszik.": "Dashboard: a place's status (OK, Low, Critical) comes from water, food and heating; power is shown on the Risk tab.",
  "Biblia-felolvasás: a háttérzene az elején 3,5 másodperc alatt fokozatosan hangosodik fel.": "Bible read-aloud: the background music fades in gently over 3.5 seconds at the start.",
  "Biblia-kvíz: a Ki mondta? és a Hol van? válaszai A, B, C, D betűs, TV-kvíz stílusú sávokon jelennek meg.": "Bible quiz: the answers in Who said it? and Where is it? appear on TV-quiz style bars with the letters A, B, C, D.",
  "Világhelyzet és imakérések: ország helyett a palesztin lakosokat nevezzük meg, és ahol az esemény ott történt, Gázát vagy Ciszjordániát is.": "World situation and prayer requests: instead of a country, we name the Palestinian people, and Gaza or the West Bank where the event happened there.",
});
Object.assign(window.PP_FORD_SZOTAR.en, {
  "Irányítópult: a pajzs menüjének tetején, a pajzs fölött van az éjszakai (vörös) mód kapcsolója és a tesztelőknek a Visszajelzés gomb.": "Dashboard: at the top of the shield menu, above the shield, you find the night (red) mode switch and, for testers, the Feedback button.",
  "Irányítópult: a világhelyzet akkor is frissül, ha a kezdőképernyő nyitva marad.": "Dashboard: the world situation also refreshes while the start screen stays open.",
});

// ===== II. Mihály book audio version offer (Boss TG 11158) =====
Object.assign(window.PP_FORD_SZOTAR.en, {
  "{konyv}: ehhez a könyvhöz újabb felolvasás érhető el ({hang} {v}). Letöltöd most az újat?": "{konyv}: a newer recording of this book is available ({hang} {v}). Download the new one now?",
});
