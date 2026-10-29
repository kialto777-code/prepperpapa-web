// PrepperPapa -- ROMAN SZOVEGTAR (teljes felulet-forditas)
//
// Fonok kerese 2026-08-24 12:49: "keszulni fog lengyelul, romanul es spanyolul".
//
// A SZERKEZET AZONOS AZ `en.js`-EVEL: a kulcs MAGA A MAGYAR SZoVEG.
// HAROM SZoTAR VAN: ez + `i18n/vagyon-ro.js` (KET peldanyban) + `PP_SZOTAR.ro` az index.html-ben.
//
// AZ oT BIBLIAI IGEVERS A KIADOTT SZoVEGBoL VAN: 2026-10-21 (v43.334) ota Biblia 1914, a Szent Szinodus
// kiadasa (`biblia1914.json`, archive.org biblia-1914-v123, Public Domain Mark), szo szerint masolva.
// ELOZMENY: addig a Cornilescu (EU-ban 2045-ig vedett) szovege allt itt.
// A ZSOLTAR HIVATKOZASA "Psalmii 46,1-2", NEM "46,2-3": a magyar Karoli a feliratot is versnek szamolja,
// az app roman Bibliaja nem (a fajl a heber/KJV szerkezetet koveti; a nyomtatott 1914-es kiadasban
// ez a Szeptuaginta szerinti 45. zsoltar). Ez NEM elgepeles.


window.PP_FORD_SZOTAR = window.PP_FORD_SZOTAR || {};
window.PP_FORD_SZOTAR.ro = {
  // ===== 2026-10-28 SOS sharing per room (TG 30631) =====
  "Vészhelyzet ebben a szobában": "Urgență în această cameră",
  "Szobánként döntöd el, mit kapnak meg az SOS-odból. Ha az SOS-t kikapcsolod, ebbe a szobába semmi nem megy; a hely és a vércsoport csak az SOS-üzenetben jelenik meg.": "Hotărăști pentru fiecare cameră ce primește din SOS-ul tău. Dacă oprești SOS-ul, în această cameră nu ajunge nimic; locația și grupa sanguină apar doar în mesajul SOS.",
  "SOS-jelzésem ide is menjen": "SOS-ul meu să ajungă și aici",
  "Lássák a GPS-helyzetemet az SOS-ban": "Să-mi vadă poziția GPS în SOS",
  "Lássák a vércsoportomat az SOS-ban": "Să-mi vadă grupa sanguină în SOS",
  "Később a szoba beállításaiban is átállíthatod.": "Poți schimba asta mai târziu în setările camerei.",
  "Az SOS egyik szobádba sem ment el: a szobák beállításában mindenhol ki van kapcsolva. A vészsíp szól.": "SOS-ul nu a ajuns în niciuna dintre camerele tale: este oprit în setările tuturor. Pornește fluierul de urgență.",
  "Szobánként, a szoba beállításaiban szűkítheted: melyik szoba kapja meg az SOS-t, és látszik-e benne a helyed és a vércsoportod.": "În setările fiecărei camere poți restrânge: care cameră primește SOS-ul și dacă se văd locația și grupa ta sanguină.",
  "gombot, SOS üzenetet küld a helyzeteddel a szobáidba (ahová a szoba beállításában engedted), és megszólal a vészsíp.": ", trimite un mesaj SOS cu locația ta în camerele tale (cele ale căror setări permit) și pornește fluierul de urgență.",
  "Esés után automatikus SOS: alapból ki van kapcsolva. Ha bekapcsolod, és a telefon nagy ütés után egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a Jól vagyok gombot, SOS üzenetet küld a helyzeteddel a szobáidba (ahová a szoba beállításában engedted), és megszólal a vészsíp.": "SOS automat după o cădere: implicit este oprit. Dacă îl pornești și telefonul nu se mișcă un minut după un impact puternic, numără invers cu voce tare. Dacă nu apeși butonul Sunt bine, trimite un mesaj SOS cu locația ta în camerele tale (cele ale căror setări permit) și pornește fluierul de urgență.",
  "Vészhelyzet: szobánként eldöntöd, hogy az SOS-od ide is menjen-e, és látszik-e benne a GPS-helyzeted és a vércsoportod. Alapból mindhárom be van kapcsolva.": "Urgență: pentru fiecare cameră hotărăști dacă SOS-ul tău ajunge și aici și dacă arată poziția ta GPS și grupa sanguină. Implicit toate trei sunt pornite.",
  // ===== 2026-10-28 route planning: sunset / dark timing (TG 30629) =====
  "Most": "Acum",
  "Napnyugta előtt érkezel, a tartalék:": "Ajungi înainte de apus, rezervă:",
  "Napnyugta után érkezel, ennyivel:": "Ajungi după apus, cu:",
  "Sötétedés előtt még odaérsz.": "Ajungi totuși înainte de întuneric.",
  "Sötétedés után érkezel.": "Ajungi după lăsarea întunericului.",
  "Napnyugta után indulsz.": "Pornești după apus.",
  "Sötétedés után indulsz.": "Pornești după lăsarea întunericului.",
  "Napnyugtakor itt jársz, a kezdéstől:": "La apus ești aici, de la start:",
  "Sötétedéskor itt jársz, a kezdéstől:": "La lăsarea întunericului ești aici, de la start:",
  "Az út utolsó szakasza sötétben van:": "Ultima parte a traseului este pe întuneric:",
  "A tábort a sötétedés pontja előtt válaszd ki.": "Alege locul de tabără înainte de punctul de întuneric.",
  // ===== 2026-10-28 Barometer + Napkelte, napnyugta: own screens under Eszkozok (TG 30627) =====
  "Barométer": "Barometru",
  "Légnyomás, trend és viharjelzés": "Presiune, tendință și avertizare de furtună",
  "Napkelte, napnyugta": "Răsărit, apus",
  "Nap és hold: mennyi világosod van, holdfázis": "Soare și lună: câtă lumină de zi ai, faza lunii",
  "Nem kaptunk engedélyt az iránytűhöz.": "Nu am primit permisiune pentru busolă.",
  "Ez a készülék nem ad iránytű-adatot, vagy nincs rá engedély.": "Acest dispozitiv nu furnizează date de busolă sau nu există permisiune.",
  "A nap pályájához tudni kell, hol vagy: az Eszközök, Napkelte, napnyugta lapon nyomd meg a „Mérés a helyzetemre” gombot.": "Pentru traiectoria soarelui aplicația trebuie să știe unde ești: în Unelte, Răsărit, apus apasă „Calculează pentru poziția mea”.",
  "Tájoló: irány és azimut, a visszaút is.": "Busolă: direcție și azimut, și drumul înapoi.",
  "Eszközök: a kalkulátorok, a fémdetektor, a tükör, a vad- és rovarriasztó, a barométer és a napkelte-napnyugta egy helyen.": "Unelte: calculatoarele, detectorul de metale, oglinda, repelentul pentru animale și insecte, barometrul și răsăritul-apusul într-un singur loc.",
  // ===== 2026-10-27 titkosított teljes mentés: Token tárca + Gíra (kártya 96306244) =====
  "Ez a fájl nem PrepperPapa mentés.": "Acest fișier nu este o copie de siguranță PrepperPapa.",
  "Nincs elég tárhely ezen a készüléken a visszatöltéshez. Semmi nem változott.": "Nu este destul spațiu pe acest dispozitiv pentru restaurare. Nu s-a schimbat nimic.",
  "A visszatöltés nem sikerült. Semmi nem változott.": "Restaurarea nu a reușit. Nu s-a schimbat nimic.",
  "Ezen a készüléken már vannak saját adataid (készlet, pontok, háztartás). A visszatöltés ezeket a mentésben levőkre cseréli. Előtte a készleted és a háztartásod biztonsági másolatba kerül, amit a „Visszaállítás a biztonsági másolatból” gomb visszahoz. Folytatod?": "Pe acest dispozitiv există deja datele tale (stoc, puncte, gospodărie). Restaurarea le înlocuiește cu cele din copie. Înainte, stocul și gospodăria ta ajung în copia de siguranță, pe care butonul „Restaurare din copia de siguranță” o aduce înapoi. Continui?",
  "Visszatöltöm": "Restaurez",
  "Hibás mentés-fájl.": "Fișier de copie invalid.",
  "A teljes mentés egy általad választott mentési kulccsal titkosítva készül. Visszatöltéskor a mentési kulcs kell.": "Copia de siguranță completă este criptată cu o cheie de copie aleasă de tine. Pentru restaurare este nevoie de cheia de copie.",
  "A teljes mentés egy általad választott mentési kulccsal titkosítva készül, és benne van a Token tárca és a Gíra is (a tárca PIN-je mögött). Visszatöltéskor a mentési kulcs kell, utána a tárca a PIN-nel nyílik. Az irattárca nem kerül bele.": "Copia de siguranță completă este criptată cu o cheie de copie aleasă de tine și conține și portofelul de tokenuri și Gíra ta (în spatele PIN-ului portofelului). La restaurare e nevoie de cheia de copie; apoi portofelul se deschide cu PIN-ul. Portofelul de documente nu este inclus.",
  "A mentés óta indított vagy kapott fizetéseid ebből a könyvből hiányoznak (a többiek könyvében megvannak), ezért az egyenleg eltérhet.": "Plățile făcute sau primite de la copie lipsesc din această carte (în cărțile celorlalți există), de aceea soldul poate diferi.",
  "A mentésben levő Gíra sérült, ezért nem töltöttünk vissza semmit.": "Gíra din copie este deteriorată, de aceea nu s-a restaurat nimic.",
  "A mentési kulcs legyen legalább 8 karakter és 2 szó, vagy legalább 12 karakter.": "Cheia de copie trebuie să aibă cel puțin 8 caractere și 2 cuvinte sau cel puțin 12 caractere.",
  "A mentési kulcs ne a neved legyen.": "Cheia de copie nu poate fi numele tău.",
  "A mentési kulcs nem egyezik, a fájlt nem lehetett visszafejteni. Semmit nem írtunk felül.": "Cheia de copie nu se potrivește, fișierul nu a putut fi decriptat. Nu s-a suprascris nimic.",
  "A mentési kulcsod: „{kod}”. Írd le magadnak most, és ellenőrizd, hogy pontosan így írtad le. Ne felejtsd el ezt a kulcsot, és a tárca PIN-jét se: visszatöltés után a Token tárca és a Gíra a PIN-nel nyílik.": "Cheia ta de copie: „{kod}”. Noteaz-o acum și verifică dacă ai scris-o exact așa. Nu uita această cheie și nici PIN-ul portofelului: după restaurare, portofelul de tokenuri și Gíra se deschid cu PIN-ul.",
  "A mostani Gírád maradt; a mentésben levőt nem vettük át.": "Gíra ta actuală a rămas; cea din copie nu a fost preluată.",
  "A titkosított mentés nem készült el, nem töltöttünk le semmit.": "Copia criptată nu a putut fi creată, nu s-a descărcat nimic.",
  "A Token tárca és a Gíra visszaállítása nem sikerült.": "Restaurarea portofelului de tokenuri și a Gírei nu a reușit.",
  "Add meg ennek a készüléknek a tárca PIN-jét.": "Introdu PIN-ul portofelului de pe acest dispozitiv.",
  "Adj meg egy mentési kulcsot: egy általad kitalált szót vagy rövid mondatot (legalább 8 karakter és 2 szó, vagy legalább 12 karakter). Ne a neved legyen. A kis- és nagybetű nem számít. Írd le magadnak: a mentés csak ezzel tölthető vissza.": "Introdu o cheie de copie: un cuvânt sau o propoziție scurtă inventată de tine (cel puțin 8 caractere și 2 cuvinte sau cel puțin 12 caractere). Să nu fie numele tău. Literele mari și mici nu contează. Noteaz-o: copia se poate restaura doar cu ea.",
  "Biztosan lecseréled? A mostani Gíra ({most}) kulcsa ezzel elvész ezen a készüléken; ha nincs róla mentésed, véglegesen.": "Sigur o înlocuiești? Cheia Gírei actuale ({most}) se pierde pe acest dispozitiv; dacă nu ai copie a ei, definitiv.",
  "Ez egy titkosított mentés. Add meg a mentési kulcsot.": "Aceasta este o copie criptată. Introdu cheia de copie.",
  "Ezen a készüléken már van egy MÁSIK Gíra ({most}). A mentésben levő: {mentes}. Megtartod a mostanit, vagy lecseréled a mentésben levőre?": "Pe acest dispozitiv există deja o ALTĂ Gíra ({most}). Cea din copie: {mentes}. O păstrezi pe cea actuală sau o înlocuiești cu cea din copie?",
  "Ezen a készüléken már van tárca. A mentett Token tárca átvételéhez add meg azt a PIN-t, amellyel a mentett tárca nyílt.": "Pe acest dispozitiv există deja un portofel. Pentru a prelua portofelul de tokenuri salvat, introdu PIN-ul cu care se deschidea portofelul salvat.",
  "Gíra visszaállítva: {az}, egyenleg {egy} gíra.": "Gíra restaurată: {az}, sold {egy} gíra.",
  "Igen, lecserélem": "Da, înlocuiește",
  "Igen, nélkülük": "Da, fără ele",
  "Javítom": "O corectez",
  "Lecserélem": "Înlocuiesc",
  "Megtartom a mostanit": "O păstrez pe cea actuală",
  "Mentés megszakítva, nem töltöttünk le semmit.": "Copie întreruptă, nu s-a descărcat nimic.",
  "Titkosított mentés": "Copie de siguranță criptată",
  "Titkosított mentés visszatöltése": "Restaurarea copiei criptate",
  "Token tárca visszaállítva: a mentéskor használt PIN-nel nyílik.": "Portofel de tokenuri restaurat: se deschide cu PIN-ul folosit la crearea copiei.",
  "Token tárca: {n} bejegyzés hozzáadva a tárcádhoz.": "Portofel de tokenuri: {n} intrări adăugate în portofelul tău.",
  "Visszatöltés megszakítva, semmit nem írtunk felül.": "Restaurare întreruptă, nu s-a suprascris nimic.",
  "Visszatöltöd a többi adatot a Token tárca és a Gíra nélkül?": "Restaurezi restul datelor fără portofelul de tokenuri și Gíra?",
  // ===== 2026-10-26 v43.386 (tester #84): water purification, ice-cold water + altitude bands =====
  "Buzgó forrás {perc} percig.": "Fierbere în clocot {perc} min.",
  "Buzgó forrás {perc} percig — kétezer méter felett vagy, ott hosszabb kell, mert alacsonyabb a forráspont.": "Fierbere în clocot {perc} min — ești peste două mii de metri, acolo durează mai mult, pentru că punctul de fierbere e mai jos.",
  "{liter} liter tiszta vízhez {csepp} csepp {hipo} százalékos hipó, ami körülbelül {ml} milliliter.": "Pentru {liter} litri de apă limpede: {csepp} picături de clor (hipoclorit) {hipo} la sută, aproximativ {ml} mililitri.",
  "{liter} liter zavaros vízhez {csepp} csepp {hipo} százalékos hipó, ami körülbelül {ml} milliliter.": "Pentru {liter} litri de apă tulbure: {csepp} picături de clor (hipoclorit) {hipo} la sută, aproximativ {ml} mililitri.",
  "Keverd el, várj {perc} percet, és utána is enyhén klóros szagúnak kell lennie.": "Amestecă, așteaptă {perc} minute; după aceea trebuie să miroasă încă ușor a clor.",
  "Ha nem érzed a szagot, adj hozzá ugyanennyit, és várj még {perc} percet.": "Dacă nu simți mirosul, adaugă aceeași cantitate și mai așteaptă {perc} minute.",
  "Zavaros, színes vagy jéghideg (pl. olvadt hó, jeges patak)": "Tulbure, colorată sau rece ca gheața (de ex. zăpadă topită, pârâu înghețat)",
  "Tengerszint feletti magasság": "Altitudine deasupra nivelului mării",
  "2000 m alatt": "Sub 2000 m",
  "2000 m felett": "Peste 2000 m",
  // ===== 2026-10-25 v43.381 (card 43a80047, Boss 23:38): premium code from the purchase e-mail link =====
  "Túl sok hibás kódot írtál be. Biztonsági okból egy ideig nem próbálhatod újra.": "Ai introdus prea multe coduri greșite. Din motive de securitate nu poți încerca din nou o vreme.",
  "Újra próbálhatod ekkor:": "Poți încerca din nou la:",
  "A vásárlási levélben kapott kódod be van írva. Koppints a „Kód beváltása” gombra.": "Codul din e-mailul de cumpărare este deja completat. Atinge „Valorifică codul”.",
  // ===== 2026-10-25 v43.380 (Thomas 24623): stale offline region =====
  "Új változat a szerveren": "Versiune nouă pe server",
  // ===== 2026-10-25 v43.380 (card 6b287cfb, Boss 20:13): Solar panel setup tool =====
  "Napelem-beállítás": "Reglarea panoului solar",
  "Merre nézzen és mennyire dőljön a panel, évszakonként": "Încotro să privească panoul și cât să fie înclinat, pe anotimpuri",
  "Helyszín": "Locație",
  "Mérés a helyzetemre": "Calculează pentru poziția mea",
  "Kézi megadás": "Introdu manual",
  "Dátum": "Data",
  "Ma": "Azi",
  "Téli napforduló": "Solstițiul de iarnă",
  "Tavaszi napéjegyenlőség": "Echinocțiul de primăvară",
  "Nyári napforduló": "Solstițiul de vară",
  "Őszi napéjegyenlőség": "Echinocțiul de toamnă",
  "A nap járása": "Drumul soarelui",
  "Ajánlott beállítás": "Reglaj recomandat",
  "Panel igazítása a tájolóval": "Aliniază panoul cu busola",
  "Várható termelés ezen a napon": "Producția estimată în această zi",
  "Szélesség, pl. 47.50": "Latitudine, de ex. 47.50",
  "Hosszúság, pl. 19.04": "Longitudine, de ex. 19.04",
  "pl. 400": "de ex. 400",
  "A szélesség -90 és 90, a hosszúság -180 és 180 fok közötti szám.": "Latitudinea este un număr între -90 și 90, longitudinea între -180 și 180 de grade.",
  "Még nem tudom, hol vagy. Nyomd meg a „Mérés a helyzetemre” gombot, vagy add meg kézzel.": "Încă nu știu unde ești. Apasă „Calculează pentru poziția mea” sau introdu-o manual.",
  "kézzel megadva": "introdusă manual",
  "Ezen a napon itt a nap nem kel fel.": "În această zi soarele nu răsare aici.",
  "Ezen a napon itt a nap nem nyugszik le.": "În această zi soarele nu apune aici.",
  "Nappal hossza:": "Durata zilei:",
  "napsütés derült égnél, 10° fölött:": "soare cu cer senin, peste 10°:",
  "A panel erre nézzen (valódi égtáj, nem mágneses).": "Panoul să privească încoace (direcție reală, nu magnetică).",
  "Erre a napra": "Pentru această zi",
  "Tél": "Iarnă",
  "Tavasz": "Primăvară",
  "Nyár": "Vară",
  "Ősz": "Toamnă",
  "Egész évre, fixen": "Tot anul, fix",
  "A dőlésszög a vízszinteshez mért szög: 0° = fekvő panel, 90° = függőleges.": "Înclinarea se măsoară față de orizontală: 0° = panou culcat, 90° = vertical.",
  "Add meg a panel teljesítményét (a címkéjén W-ban), és kiszámolom, nagyjából mennyit termel ezen a napon.": "Introdu puterea panoului (în W, de pe etichetă) și calculez cu aproximație cât produce în această zi.",
  "A napra ajánlott dőléssel": "Cu înclinarea recomandată pentru zi",
  "Az egész évre beállított dőléssel": "Cu înclinarea pentru tot anul",
  "Becslés, felhő nélkül: tiszta égbolttal, árnyék nélkül, 20% veszteséggel számolva. Felhős időben ennek csak a töredéke jön, borult égnél akár a tizede.": "Estimare, fără nori: cer senin, fără umbră, 20% pierderi. Pe vreme noroasă vine doar o fracțiune, la cer acoperit chiar o zecime.",
  "a választott nap": "ziua aleasă",
  "napfordulók, napéjegyenlőség": "solstiții, echinocțiu",
  "Tartsd a telefont állva, a kamerával a panel felé: a kamera bekapcsol, és a nap pályája a képen látszik. A tájoló a panel irányára mutat.": "Ține telefonul vertical, cu camera spre direcția panoului: camera pornește și drumul soarelui apare în imagine. Busola arată direcția panoului.",
  "AMIT EZ TUD ÉS AMIT NEM. A nap helyzetét és a napkeltét pár perc pontossággal számolja, internet nélkül. A dőlésszög és a termelés tiszta égboltra szóló becslés: a felhőt, az árnyékot (fa, ház, domb) és a panel melegedését nem ismeri. A tájoló mágneses irányt mutat, ami Magyarországon kb. 5 fokkal tér el a valódi déltől; a panel termelésén ez alig látszik.": "CE POATE ȘI CE NU. Calculează poziția soarelui și răsăritul cu o precizie de câteva minute, fără internet. Înclinarea și producția sunt estimări pentru cer senin: nu cunoaște norii, umbra (copaci, case, dealuri) sau încălzirea panoului. Busola arată direcția magnetică, care poate diferi cu câteva grade de sudul real; la producție abia se observă.",
  // ===== 2026-10-25 v43.379: short closed-message bubble =====
  "Zárt üzenet": "Mesaj închis",
  // ===== 2026-10-25 v43.378 (card 6b4458db, Boss 20:26): offline map page, one row per region =====
  "Tájegységek letöltése": "Descarcă regiunile",
  "Alaptérkép, turistautak, pontok": "Hartă de bază, trasee, puncte",
  "Hiányzó részek letöltése": "Descarcă părțile lipsă",
  "hiányzik": "lipsește",
  // ===== 2026-10-25 v43.377 (card 6b4458db, Boss 18:55): Local room help, step by step =====
  "Mire jó: a Helyi szoba internet nélkül köti össze a közeledben lévő telefonokat, ha egy Wi-Fi-n vagytok (vagy Bluetooth-on). Például áramszünetben, vagy otthon a családdal, amikor nincs térerő.": "La ce folosește: Camera locală leagă telefoanele din apropiere fără internet, când sunteți pe aceeași rețea Wi-Fi (sau prin Bluetooth). De exemplu la o pană de curent sau acasă cu familia, când nu e semnal.",
  "Szoba nyitása: az egyik telefonon a + gombbal nyiss egy új helyi szobát, és adj neki nevet. Ez a telefon lesz a gazda; amíg a szoba kell, az appja maradjon nyitva.": "Deschiderea unei camere: pe un telefon deschide o cameră locală nouă cu butonul + și dă-i un nume. Acest telefon devine gazda; cât timp e nevoie de cameră, aplicația lui trebuie să rămână deschisă.",
  "Belépés a másik telefonról: kapcsolódj ugyanarra a Wi-Fi-re, nyisd meg a Helyi szobát, és koppints a listában megjelenő szobára. A gazda jóváhagyja a belépést; a szoba jelszava (kulcsa) titkosítja az üzeneteket, és minden telefonon ugyanannak kell lennie.": "Intrarea de pe celălalt telefon: conectează-te la aceeași rețea Wi-Fi, deschide Camera locală și atinge camera care apare în listă. Gazda aprobă intrarea; parola (cheia) camerei criptează mesajele și trebuie să fie aceeași pe fiecare telefon.",
  "A pontok: zöld = él a kapcsolat; piros = most nem éri el a gazdát. A listában a halvány szoba most nincs hatótávon.": "Punctele: verde = conexiunea funcționează; roșu = gazda nu poate fi contactată acum. O cameră estompată în listă e acum în afara razei.",
  "Ha „a gazda nem érhető el”: nézd meg, hogy ugyanazon a Wi-Fi-n vagytok-e, és a gazdánál nyitva van-e az app; kapcsold ki a mobiladatot; vendég Wi-Fi-n a router elszigetelheti a készülékeket. Három sikertelen próba után az app ezt ki is írja, és újra keresi a gazdát.": "Dacă „gazda nu poate fi contactată”: verifică dacă sunteți pe aceeași rețea Wi-Fi și dacă aplicația e deschisă la gazdă; oprește datele mobile; pe un Wi-Fi pentru oaspeți routerul poate izola dispozitivele. După trei încercări eșuate aplicația spune și ea asta și caută din nou gazda.",
  // ===== 2026-10-25 v43.352 (idea #63, card 6b4458db): native volume guard =====
  "A telefonos appban ezen a lapon a hangerő magától maximumra áll, és kilépéskor visszaáll a korábbira. A hang a telefon hangszóróján szól akkor is, ha fülhallgató vagy Bluetooth-eszköz csatlakozik.": "În aplicația de pe telefon, pe acest ecran volumul se dă singur la maxim și revine la cel anterior când ieși. Sunetul se aude din difuzorul telefonului chiar dacă sunt conectate căști sau un dispozitiv Bluetooth.",
  // ===== 2026-10-19 v43.313 (card 6b4458db) =====
  "(sérült üzenet — egy 2026. 10. 12. előtti szerverhiba levágta, nem állítható helyre)": "(mesaj deteriorat — trunchiat de o eroare de server dinainte de 12.10.2026, nu poate fi recuperat)",
  "Ezen a készüléken a böngésző nem támogatja a rezgést (iPhone-on a Safari nem tudja). A kapcsoló ezért nem aktív.": "Browserul acestui dispozitiv nu acceptă vibrația (Safari pe iPhone nu poate). De aceea comutatorul nu este activ.",
  "Bejelentéseim": "Raportările mele",
  "Újdonságok": "Noutăți",
  "Facebook-csoport": "Grup de Facebook",
  "Facebook-oldal": "Pagină de Facebook",
  // ===== 2026-10-19: sugo-szovegek a kepernyokhoz igazitva (kartya eaaba276, Fonok 1a) =====
  "A gyűrű a jelen lévő típusok átlagát mutatja, a színe a leggyengébbet. A sávokon látod, melyik terület gyenge: egy alacsony érték az átlag mögött is ott lehet.": "Inelul arată media tipurilor prezente, iar culoarea lui pe cel mai slab. Pe bare vezi ce domeniu e slab: o valoare mică se poate ascunde în spatele mediei.",
  "Nyelv: az app felületének nyelve. A tartalom (tudástár, Biblia) egyelőre nem változik tőle; a Biblia fordítását a Biblia fejlécében választod.": "Limba: limba interfeței aplicației. Conținutul (baza de cunoștințe, Biblia) deocamdată nu se schimbă odată cu ea; traducerea Bibliei o alegi în antetul Bibliei.",
  "Fény-SOS képernyővel: a kijelző villogtatja a jelet. Ez minden telefonon megy, akkor is, ha a vaku nem indul.": "SOS cu lumina ecranului: afișajul clipește semnalul. Merge pe orice telefon, chiar dacă blițul nu pornește.",
  "Esés után automatikus SOS: alapból ki van kapcsolva. Ha bekapcsolod, és a telefon nagy ütés után egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a Jól vagyok gombot, SOS üzenetet küld a helyzeteddel minden szobádba, és megszólal a vészsíp.": "SOS automat după o cădere: implicit este oprit. Dacă îl pornești și telefonul nu se mișcă un minut după un impact puternic, numără invers cu voce tare. Dacă nu apeși butonul Sunt bine, trimite un mesaj SOS cu locația ta în toate camerele tale și pornește fluierul de urgență.",
  "Export: a lista fájlba, például a családnak. A teljes készlet törlése (Készlet ürítése) a Beállítások > Adatkezelés alatt van; előtte exportálj.": "Export: lista într-un fișier, de exemplu pentru familie. Ștergerea întregului stoc (Golește stocul) este la Setări > Date; exportă înainte.",
  // ===== 2026-10-11 23:4x: teljes atnezes (bemutatkozas, visszajelzes, hianyzo feliratok) =====
  "Üdv Prepperek!": "Salut, prepperi!",
  "PrepperPapa vagyok, egy készülődő ember, aki mindenhez érteni szeret. Gyerekkorom óta vonz minden, ami hálózattól és rendszertől független, és az az érzés, amikor arra számíthatsz, ami a fejedben van tudás, és ami nálad van eszköz.": "Sunt PrepperPapa, un om care se pregătește și căruia îi place să înțeleagă totul. Încă din copilărie mă atrage tot ce este independent de rețea și de sistem și sentimentul că te poți baza pe cunoștințele din mintea ta și pe uneltele pe care le ai la tine.",
  "A prepperekről sokan hideg, bezárkózó embereket képzelnek el. Én azt hiszem, hogy a felkészülést nem a félelemnek kell vezetnie, hanem az önfeláldozó szeretetnek.": "Mulți își imaginează prepperii ca pe niște oameni reci și închiși. Eu cred că pregătirea nu trebuie condusă de frică, ci de dragostea care se dăruiește.",
  "Ezért álmodtam meg ezt az alkalmazást: hogy mindenkinek reménysége legyen a sötétségben, és a nehéz időkben valódi eszköz, valódi segítség legyen a kezében, akkor is, ha nincs áram és nincs térerő.": "De aceea am visat această aplicație: ca fiecare să aibă speranță în întuneric și, în vremuri grele, un instrument real, un ajutor real în mână, chiar și fără curent și fără semnal.",
  "Készülj, ne félj!": "Pregătește-te, nu te teme!",
  "Erőt reménységet!": "Putere și speranță!",
  "Hibát találtál, vagy ötleted van?": "Ai găsit o eroare sau ai o idee?",
  "Írd meg, és ha kell, csatolj képet. Minden visszajelzést elolvasunk.": "Scrie-ne și, dacă e nevoie, atașează o imagine. Citim fiecare mesaj.",
  "Visszajelzés küldése": "Trimite feedback",
  "a sajátod, pl. +36 30 123 4567": "al tău, de ex. +36 30 123 4567",
  "Küldetést kaptam: a tíz szűz példázatát, hogy fel kell készülni. Az eszesek éjfélkor nem tudtak a saját olajukból adni": "Am primit o misiune: pilda celor zece fecioare, că trebuie să fim pregătiți. La miezul nopții, cele înțelepte nu au putut da din propriul lor untdelemn",
  "Máté 25,9": "Matei 25:9",
  ", ezért a tudást időben kell átadni.": ", de aceea cunoașterea trebuie transmisă la timp.",
  "A csomagod felhasználó-korlátja betelt:": "Limita de utilizatori a pachetului tău a fost atinsă:",
  "A csomagod termék-korlátja betelt:": "Limita de produse a pachetului tău a fost atinsă:",
  "A felolvasás nem indult el: a telefonon nincs ehhez a nyelvhez felolvasó hang (Beállítások → Szövegfelolvasás).": "Citirea nu a pornit: telefonul nu are voce pentru această limbă (Setări → Text în vorbire).",
  "A kamerát nem sikerült elindítani. Adj rá engedélyt a telefon beállításaiban.": "Camera nu a putut porni. Permite accesul în setările telefonului.",
  "A mentős beolvashatja.": "Echipajul medical îl poate scana.",
  "A próba-csomag beállítva.": "Pachet de probă setat.",
  "Bővíts a Beállításokban, vagy törölj egy tagot.": "Extinde din Setări sau șterge un membru.",
  "Bővíts a Beállításokban, vagy törölj egy tételt.": "Extinde din Setări sau șterge un articol.",
  "Felhasználók": "Utilizatori",
  "Fizetek": "Plătesc",
  "Gyorsabb": "Mai repede",
  "Hiányzik:": "Lipsește:",
  "Lassabb": "Mai încet",
  "Megnézem térképen": "Arată pe hartă",
  "Modulok": "Module",
  "Nincs internet: a telefon hangja olvas": "Fără internet: citește vocea telefonului",
  "Próba-mód kikapcsolva, a valódi feloldásod áll vissza.": "Modul de probă dezactivat, deblocarea ta reală a revenit.",
  "Szünet": "Pauză",
  "Termékek": "Produse",
  "Teszt-adatok betöltve: 3 fő, 1 háziállat, 5 helyszín (köztük autó és hétvégi ház),": "Date de test încărcate: 3 persoane, 1 animal de companie, 5 locuri (inclusiv o mașină și o casă de vacanță),",
  "Vissza az igéhez": "Înapoi la verset",
  "Panel összecsukása": "Restrânge panoul",
  "Panel kinyitása": "Extinde panoul",
  "Vészkártyák": "Carduri de urgență",
  "adat frissítve a már felvett teszt-tagoknál": "date actualizate la membrii de test deja adăugați",
  "egy sincs": "niciunul",
  "korlátlan": "nelimitat",
  "légvonalban": "în linie dreaptă",
  "légvonalban, szakaszonként összeadva": "în linie dreaptă, adunat pe tronsoane",
  "megálló": "oprire",
  "mérés az elmúlt 48 órából. A telefon légnyomás-szenzora automatikusan méri; kézzel is bevihetsz értéket.": "măsurători din ultimele 48 de ore. Senzorul de presiune al telefonului măsoară automat; poți introduce și manual valori.",
  "nincs ismert": "niciunul cunoscut",
  "nincs megadva": "nespecificat",
  "válassz könyvet": "alege o carte",
  "összesen": "în total",
  "A többiek a „Szobák a hálón\" listában magától látják a szobát. Ha valakinél mégsem jelenik meg, ezt a címet írja be a „Csatlakozás más szobájához\" gombbal.": "Ceilalți văd camera automat în lista „Camere în rețea”. Dacă la cineva nu apare, să introducă această adresă cu butonul „Alătură-te camerei altcuiva”.",
  "Másik cím": "Altă adresă",
  "A szoba címe": "Adresa camerei",
  "Vissza a saját szobámba": "Înapoi în camera mea",
  "Fénykép": "Fotografie",
  "Jóváírva.": "Creditat.",
  "küldött neked": "ți-a trimis",
  "Gíra küldése neki": "Trimite-i gíra",
  // ===== 2026-10-11 22:3x: gira-kozosseg a gazda dontese =====
  "A szoba gazdája Gíra-közösségnek jelölte: a telefonod magától részt vesz.": "Administratorul camerei a marcat-o ca comunitate Gíra: telefonul tău participă automat.",
  "Ezt a szoba gazdája kapcsolja be; még nem jelölte Gíra-közösségnek.": "Aceasta o activează administratorul camerei; încă nu e marcată ca comunitate Gíra.",
  "Bekapcsolva a szoba minden tagjának. Átküldöm a Gíra-könyvet…": "Activat pentru toți membrii camerei. Trimit registrul Gíra…",
  "Kikapcsolva a szoba minden tagjának.": "Dezactivat pentru toți membrii camerei.",
  "A szoba gazdája kapcsolja be; ilyenkor minden tag telefonja magától átküldi ide a Gíra-könyvét, és innen fogadja a többiekét. A szoba minden tagja látja a gíra-mozgásokat.": "O activează administratorul camerei; atunci telefonul fiecărui membru trimite automat aici registrul Gíra și le primește pe ale celorlalți. Toți membrii văd mișcările gíra.",
  // ===== 2026-10-11 22:2x: LoRa a radio-kalkulatorban =====
  "LoRa (868 MHz) — engedély nélküli adatrádió": "LoRa (868 MHz) — radio de date fără licență",
  "Engedély nélkül használható: alapból 25 mW, a 869,4-869,65 MHz-es alsávon 500 mW, korlátozott adásidővel. Nem beszéd, hanem rövid szöveges üzenet; cserébe kis teljesítménnyel is kilométereket visz, mert a zaj alatt is vesz. A telefon nem tud LoRát: egy LoRa-egység kell, amihez a telefon Bluetooth-on csatlakozik.": "Fără licență: implicit 25 mW, pe subbanda 869,4-869,65 MHz 500 mW, cu timp de emisie limitat. Nu voce, ci mesaje text scurte; în schimb acoperă kilometri cu putere mică, pentru că recepționează sub zgomot. Telefonul nu are LoRa: e nevoie de o unitate LoRa la care telefonul se conectează prin Bluetooth.",
  // ===== 2026-10-11 21:4x: gira minusz-hatar =====
  "ennyit fizethetsz most": "poți plăti acum",
  "Ez túllépné a mínusz-határodat.": "Asta ar depăși limita ta negativă.",
  "Most legfeljebb ennyit fizethetsz:": "Acum poți plăti cel mult:",
  "határ": "limită",
  "Mínuszba mehetsz": "Poți coborî până la",
  "gíráig": "gíra",
  "most ennyit fizethetsz": "poți plăti acum",
  // ===== 2026-10-11 21:3x: gira-egyenleg az urlapon =====
  "Egyenleged": "Soldul tău",
  "a gíra nem mehet mínuszba, ezért fizetni akkor tudsz, ha előbb kapsz valakitől.": "gíra nu poate fi negativă, deci poți plăti după ce primești mai întâi de la cineva.",
  "Ennyi gírád nincs. Egyenleged:": "Nu ai atâta gíra. Soldul tău:",
  "A gíra nem mehet mínuszba: előbb kapnod kell valakitől.": "Gíra nu poate fi negativă: mai întâi trebuie să primești de la cineva.",
  // ===== 2026-10-11 21:3x: legnyomas-kartya, mozgas-szures =====
  "Járműben vagy (a GPS szerint 15 km/h felett): a riasztás szünetel, mert ilyenkor a nyomás az emelkedőtől és a szellőzéstől is változik.": "Ești într-un vehicul (peste 15 km/h după GPS): alarma e suspendată, pentru că presiunea se schimbă și din cauza pantelor și a ventilației.",
  "Magasság-korrekcióval: közben": "Cu corecție de altitudine: între timp",
  "volt a szintkülönbség, a mért nyers változás": "diferență de nivel, schimbarea brută măsurată a fost",
  "Szenzor, előzmény, tudnivalók": "Senzor, istoric, note",
  // ===== 2026-10-11 21:0x: szintarcsa, 24 oras napiv, allo tajolo, felolvaso-ertesites =====
  "Válassz színt a tárcsán": "Alege o culoare de pe cerc",
  "Fényerő": "Luminozitate",
  "Kiválasztom": "Selectează",
  "napkelte": "răsărit",
  "napnyugta": "apus",
  "éjközép": "miezul nopții",
  "Nappal": "Zi",
  "Éjszaka": "Noapte",
  "Biblia felolvasás": "Citirea Bibliei",
  "Jó irány": "Direcție bună",
  "Fordulj jobbra": "Întoarce-te la dreapta",
  "Fordulj balra": "Întoarce-te la stânga",
  "Fordulj a kívánt irányba, és nyomd meg: Irány felvétele.": "Întoarce-te în direcția dorită și apasă: Înregistrează direcția.",
  "Állítsd fel a telefont: álló módban a hátsó kamera irányát mérjük, fektetve ez nem pontos.": "Ține telefonul vertical: în modul vertical măsurăm direcția camerei din spate; culcat nu e precis.",
  "Álló mód: a hátsó kamera iránya számít. A keret zöld, ha a felvett irányba nézel, és piros, ha nem.": "Mod vertical: contează direcția camerei din spate. Rama e verde când privești în direcția înregistrată și roșie când nu.",
  "Vízszintes": "Orizontal",
  "Álló": "Vertical",
  "Kamera a háttérben": "Cameră în fundal",
  "A hátsó kamera képe a tájoló mögött, hogy lásd, merre mutat.": "Imaginea camerei din spate în spatele busolei, ca să vezi încotro arată.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Privát üzenet neki":
    "Mesaj privat",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "még nincs Gíra-azonosítója":
    "încă fără ID Gíra",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Elküldve a szobán keresztül":
    "Trimis prin cameră",
  "Nála magától jóváíródik, és a nyugtája is magától visszajön.":
    "Îi este creditat automat, iar chitanța lui revine tot automat.",
  "A szobába most nem ment el (nincs kapcsolat vagy kulcs). Itt a QR, ezzel is átadhatod.":
    "Nu s-a putut trimite acum în cameră (fără conexiune sau cheie). Iată codul QR, îl poți preda și cu acesta.",
  "Gíra-fizetés":
    "Plată Gíra",
  "hamis aláírás, nem fogadom el":
    "semnătură falsă, nu se acceptă",
  "jóváírva nálad":
    "creditat la tine",
  "Szobatársat választhatsz, ha egy Gíra-közösség szobában ők is bekapcsolták.":
    "Poți alege un coleg de cameră dacă și el a activat-o într-o cameră de comunitate Gíra.",
  "Szobatárs kiválasztása…":
    "Alege un coleg de cameră…",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Helyek":
    "Locuri",
  "a határok közelítők":
    "granițele sunt aproximative",
  "A területhatárok közelítő rekonstrukciók, nem mért vonalak.":
    "Granițele teritoriilor sunt reconstituiri aproximative, nu linii măsurate.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Gíra-közösség":
    "Comunitatea Gíra",
  "A telefon ebbe a szobába magától átküldi a Gíra-könyvedet, és innen fogadja a többiekét. A szoba minden tagja látja a gíra-mozgásokat.":
    "Telefonul trimite automat registrul tău Gíra în această cameră și primește aici registrele celorlalți. Fiecare membru al camerei vede mișcările Gíra.",
  "Gíra-közösségnek jelölt szobák":
    "Camere marcate ca comunitate Gíra",
  "A szoba beállításaiban kapcsolhatod be („Gíra-közösség”); oda a telefon magától átküldi a könyvet.":
    "Activează în setările unei camere („Comunitatea Gíra”); telefonul trimite registrul acolo automat.",
  "Utoljára egyeztetve":
    "Ultima sincronizare",
  "Egyeztetés most":
    "Sincronizează acum",
  "szoba":
    "cameră/camere",
  "Nincs elérhető Gíra-közösség szoba. Kapcsold be egy szoba beállításaiban.":
    "Nicio cameră de comunitate Gíra accesibilă. Activeaz-o în setările unei camere.",
  "Bekapcsolva. Átküldöm a Gíra-könyvet…":
    "Activat. Trimit registrul Gíra…",
  "Kikapcsolva. Ide többé nem küldöm a könyvet.":
    "Dezactivat. Registrul nu va mai fi trimis aici.",
  "Bekapcsolva, a könyv átment.":
    "Activat, registrul a ajuns.",
  "Bekapcsolva. A könyv akkor megy át, amikor a szoba elérhető és van aláírt tételed.":
    "Activat. Registrul va ajunge când camera este accesibilă și ai înregistrări semnate.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Titkos kódok":
    "Coduri secrete",
  "Kérek":
    "Cer",
  "Beolvasás":
    "Scanare",
  "Azonosítóm":
    "ID-ul meu",
  "Nincs kamera? Beillesztés szövegből":
    "Fără cameră? Lipește din text",
  "Mozgások":
    "Mișcări",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Apokrif könyvek":
    "Cărți apocrife",
  "Énok ↓":
    "Enoh ↓",
  "Énok könyve letöltése":
    "Descarcă Cartea lui Enoh",
  "Nem sikerült, próbáld újra":
    "Nu a reușit, încearcă din nou",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "SÜRGŐS ·":
    "URGENT ·",
  "3 nappal":
    "cu 3 zile înainte",
  "Megnézem":
    "Vezi",
  "(te)":
    "(tu)",
  "ENGEDÉLYKÖTELES, mint a 2 méter. Beépítésben, épületek között jobb, mint a 2 méter; nyílt terepen rosszabb.":
    "NECESITĂ LICENȚĂ, ca banda de 2 metri. În zone construite, între clădiri, merge mai bine decât 2 metri; în teren deschis, mai prost.",
  "Írd be az e-mail címed. Küldünk rá egy 6 jegyű kódot; ha beírod, bent vagy. Jelszó nem kell, a telefon megjegyzi a belépést.":
    "Scrie adresa ta de e-mail. Îți trimitem un cod de 6 cifre; dacă îl introduci, ai intrat. Nu e nevoie de parolă, telefonul ține minte autentificarea.",
  "Add meg az e-mail címed és az ÚJ jelszót kétszer. Küldünk egy kódot e-mailben; ha beírod, az új jelszó lép életbe.":
    "Introdu adresa de e-mail și parola NOUĂ de două ori. Îți trimitem un cod pe e-mail; dacă îl introduci, noua parolă intră în vigoare.",
  "Bekapcsolva, de a bezárt appos értesítés regisztrálása most nem sikerült; amíg az app fut, jelez.":
    "Activat, dar înregistrarea notificărilor cu aplicația închisă nu a reușit acum; cât timp aplicația rulează, te anunță.",
  "Alul írod az üzenetet; a papírrepülő gomb küldi el a szoba minden tagjának.":
    "Scrii mesajul jos; butonul cu avionul de hârtie îl trimite tuturor membrilor camerei.",
  "Az értesítés le van tiltva. A telefon Beállítások > Alkalmazások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Notificările sunt blocate. Le poți permite din nou în Setările telefonului > Aplicații > PrepperPapa > Notificări.",
  "Az értesítés le van tiltva. A telefon Beállítások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Notificările sunt blocate. Le poți permite din nou în Setările telefonului > PrepperPapa > Notificări.",
  "Letiltva. A telefon Beállítások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Blocat. Poți permite din nou în Setările telefonului > PrepperPapa > Notificări.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Kép csatolása":
    "Atașează imagine",
  "Új helyi szoba":
    "Cameră locală nouă",
  "Nincs internetkapcsolat.":
    "Nu există conexiune la internet.",
  "Visszajelzés":
    "Feedback",
  "Saját vészkártya adatai":
    "Datele cardului tău de urgență",
  "Nem ez volt.":
    "Nu asta era.",
  "Eredmény":
    "Rezultat",
  "E-mail cím":
    "Adresă de e-mail",
  "helyi háló, internet nélkül":
    "rețea locală, fără internet",
  "Forgatás balra":
    "Rotire la stânga",
  "Forgatás jobbra":
    "Rotire la dreapta",
  "Saját telefonszám":
    "Numărul tău de telefon",
  "Térképről":
    "De pe hartă",
  "Koppints a másoláshoz":
    "Atinge pentru a copia",
  "Belépés e-mail címmel":
    "Autentificare cu adresa de e-mail",
  "A szoba kódja, koppints a másoláshoz":
    "Codul camerei, atinge pentru a copia",
  "A jel nem vált pont és vonás között. Ez nem tiszta Morze — állíts a vételen, és próbáld újra.":
    "Semnalul nu alternează între punct și linie. Nu e Morse curat — reglează recepția și încearcă din nou.",
  "Ez nagyjából":
    "Asta înseamnă aproximativ",
  "18650 (a gyártó saját cellája kb. 3400 mAh)":
    "18650 (celula proprie a producătorului, cca 3400 mAh)",
  "kWh hőigénnyel, összesen":
    "kWh necesar de căldură, în total",
  "Állj":
    "Stop",
  "Kód küldése e-mailben":
    "Trimite codul pe e-mail",
  "Add meg az e-mail címed.":
    "Introdu adresa ta de e-mail.",
  "Ez nem tűnik e-mail címnek.":
    "Asta nu pare o adresă de e-mail.",
  "Nem sikerült, próbáld újra.":
    "Nu a reușit, încearcă din nou.",
  "nincs bejelentkezve":
    "neautentificat",
  "Kikapcsolva ezen az eszközön.":
    "Dezactivat pe acest dispozitiv.",
  "Kicsinyítem...":
    "Micșorez...",
  "Kép törölve.":
    "Imagine ștearsă.",
  "Ezt a képet nem tudom megnyitni.":
    "Nu pot deschide această imagine.",
  "Frissítés keresése":
    "Caută actualizări",
  "Normál":
    "Normal",
  "Ki vagyok?":
    "Cine sunt?",
  "2018 óta készítek videókat PrepperPapa néven a felkészülésről. Hiszem, hogy a keresztény értékek és a jó gyakorlati eszközök együtt segítenek abban, hogy könnyebben vegyük a mindennapok kihívásait, ezért a célom az, hogy fényt hozzak az életedbe, lelkiekben és a szó szoros értelmében is.":
    "Din 2018 fac videoclipuri despre pregătire sub numele PrepperPapa. Cred că valorile creștine și uneltele practice bune, împreună, ne ajută să trecem mai ușor prin provocările de zi cu zi, de aceea scopul meu este să aduc lumină în viața ta, atât sufletește, cât și la propriu.",
  "Lámpákat, késeket, táskákat és energiaforrásokat tesztelek valós használatban, és ha valami nem vált be, azt is elmondom. Nem világvége-hangulatot árulok, hanem azt a néhány dolgot mutatom meg, ami egy áramszünetben, egy viharban vagy egy túrán tényleg számít.":
    "Testez lanterne, cuțite, genți și surse de energie în folosire reală, iar dacă ceva nu s-a dovedit bun, spun și asta. Nu vând atmosferă de sfârșit de lume, ci îți arăt acele câteva lucruri care chiar contează într-o pană de curent, într-o furtună sau într-o drumeție.",
  "Felkészülés józan ésszel, magyar valóságra.":
    "Pregătire cu bun-simț, pentru realitatea maghiară.",
  "Elérhetőségek":
    "Contact",
  "Prepper Vészkijárat csoport":
    "Grupul Prepper Vészkijárat",
  "Gyülekező fórum":
    "Forumul Gyülekező",
  "Melyik betű?":
    "Ce literă?",
  "Mi hiányzik?":
    "Ce lipsește?",
  "Az adat a Háztartásból jön, személyenként: vércsoport, allergia, gyógyszer, betegség, a saját telefonszám és a vészhelyzeti kontakt (név és telefon). Akinél még nincs kontakt megadva, ott a saját kártyád kontaktját használjuk.":
    "Datele vin din Gospodărie, pe persoană: grupa sanguină, alergii, medicamente, boli, numărul propriu de telefon și contactul de urgență (nume și telefon). Unde nu e încă setat un contact, folosim contactul de pe cardul tău.",
  "Vészhelyzeti kontakt – ki?":
    "Contact de urgență – cine?",
  "anya, apa, szomszéd…":
    "mama, tata, vecinul…",
  "Vészhelyzeti kontakt – telefon":
    "Contact de urgență – telefon",
  "A jegyzet neve":
    "Numele notiței",
  "Értesítések":
    "Notificări",
  "Lejáró élelmiszer és készlet":
    "Alimente și provizii care expiră",
  "Mennyivel előre szóljon:":
    "Cu cât timp înainte să anunțe:",
  "1 héttel":
    "cu 1 săptămână",
  "2 héttel":
    "cu 2 săptămâni",
  "1 hónappal":
    "cu 1 lună",
  "Próbaértesítés":
    "Notificare de probă",
  "Rezgő visszajelzés":
    "Feedback prin vibrație",
  "Rövid rezgés a gombok megnyomásakor":
    "Vibrație scurtă la apăsarea butoanelor",
  "A készülék rövid koppanással jelez minden gombnyomást.":
    "Dispozitivul semnalează fiecare apăsare de buton cu o atingere scurtă.",
  "Készlet ürítése":
    "Golește proviziile",
  "Fejlesztői próba-mód":
    "Mod de probă pentru dezvoltatori",
  "Teszt funkció: beállíthatsz egy fizetős csomagot, és az app úgy viselkedik, mintha azt vásárolták volna meg. Csak ezen a készüléken, csak a felületen. A valódi feloldásaid megmaradnak, kikapcsolva visszaáll minden.":
    "Funcție de test: poți seta un pachet plătit, iar aplicația se comportă ca și cum ar fi fost cumpărat. Doar pe acest dispozitiv, doar în interfață. Deblocările tale reale rămân, iar la dezactivare totul revine.",
  "Próba-mód bekapcsolása":
    "Activează modul de probă",
  "Felhasználó-korlát":
    "Limită de utilizatori",
  "Termék-korlát":
    "Limită de produse",
  "A 0 korlátlant jelent.":
    "0 înseamnă nelimitat.",
  "Beállítás":
    "Setează",
  "Próba-mód ki":
    "Mod de probă oprit",
  "Vészhelyzeti kontakt neve":
    "Numele contactului de urgență",
  "pl. anya, apa, szomszéd":
    "de ex. mama, tata, vecinul",
  "Vészhelyzeti kontakt telefonszáma":
    "Numărul de telefon al contactului de urgență",
  "Koordináta térképről":
    "Coordonată de pe hartă",
  "· vagy egy bemásolt Google Térkép-link. Ha nem tudom értelmezni, szólok — üresen nem mentem el. Vagy nyomd meg a":
    "· sau un link Google Maps copiat. Dacă nu îl pot interpreta, îți spun — nu salvez gol. Sau apasă butonul",
  "gombot, és húzd a térképet a célkereszt alá.":
    "și trage harta sub reticul.",
  "Koordináta a térképről":
    "Coordonată de pe hartă",
  "Ezt választom":
    "Aleg asta",
  "MESH-hálózat: szöveg a közeledben lévőknek, internet nélkül":
    "Rețea MESH: text pentru cei din apropiere, fără internet",
  "Internet és térerő nélkül: közös Wi-Fi-n, hotspoton vagy Bluetooth-on. Itt látod a saját szobáidat és a közelben hallottakat.":
    "Fără internet și semnal: pe Wi-Fi comun, hotspot sau Bluetooth. Aici vezi camerele tale și ce s-a auzit în apropiere.",
  "Csatlakozás címmel":
    "Conectare prin adresă",
  "Ez látszik a szobák listáján, ezen ismerik fel. A telefonod a képet magától lekicsinyíti.":
    "Asta apare în lista camerelor, după asta o recunosc. Telefonul micșorează imaginea singur.",
  "Fiók":
    "Cont",
  "Jelszó megváltoztatása":
    "Schimbă parola",
  "Kép a szobához (nem kötelező)":
    "Imagine pentru cameră (opțional)",
  "Mérés fut… tartsd a jelen,":
    "Măsurare în curs… ține semnalul",
  "másodperc.":
    "secunde.",
  "Kevés jel érkezett. Indítsd újra, és nézd meg, hogy a vétel egyáltalán lát-e jelet.":
    "Au venit prea puține semnale. Repornește și verifică dacă recepția vede vreun semnal.",
  "mért arány":
    "raport măsurat",
  "Mért sebesség":
    "Viteză măsurată",
  "Beállítom":
    "Setez",
  "A vétel sebessége beállítva":
    "Viteza de recepție a fost setată",
  "Figyelj: lekopogom a betűt. Előbb a sor, aztán az oszlop.":
    "Ascultă: bat litera. Întâi rândul, apoi coloana.",
  "Kopogd le ezt a betűt":
    "Bate această literă",
  "Írd be, melyik betűt hallottad.":
    "Scrie ce literă ai auzit.",
  "Írd le, mit hallottál, aztán nyomd meg az Ellenőrzést.":
    "Scrie ce ai auzit, apoi apasă Verificare.",
  "Saját telefon:":
    "Telefonul tău:",
  "Ez a cikk zárt: a bővített tudástár nincs feloldva ezen a készüléken.":
    "Acest articol e blocat: baza de cunoștințe extinsă nu e deblocată pe acest dispozitiv.",
  "Előbb írd be a szöveget a mezőbe, aztán koppints a lapra.":
    "Întâi scrie textul în câmp, apoi atinge foaia.",
  "T Szöveg":
    "T Text",
  "Eldobod a rajzot?":
    "Renunți la desen?",
  "Új lapot kezdesz? A mostani rajz elvész.":
    "Începi o foaie nouă? Desenul actual se pierde.",
  "Adj nevet a jegyzetnek.":
    "Dă un nume notiței.",
  "Wh tárolt energia":
    "Wh energie stocată",
  "saját megadás":
    "valoare proprie",
  "A megadott wattórából 10 százalékot levonunk átalakítási veszteségre.":
    "Din wattorele introduse scădem 10 la sută pentru pierderile de conversie.",
  "A savas akkut csak félig szabad lemeríteni, különben tönkremegy, és az átalakító is elvisz 15 százalékot. Ezért a névlegesnek nagyjából 42 százalékával számolunk.":
    "Acumulatorul cu plumb poate fi descărcat doar pe jumătate, altfel se strică, iar invertorul mai ia 15 la sută. De aceea calculăm cu aproximativ 42 la sută din valoarea nominală.",
  "A LiFePO4-et 80 százalékig le lehet meríteni (a savasat csak felére), az átalakító 10 százalékot visz.":
    "LiFePO4 poate fi descărcat până la 80 la sută (cel cu plumb doar pe jumătate), invertorul ia 10 la sută.",
  "A tárolt energiából kb. 10 százalékot elvisz az átalakítás, ezért nem a teljes wattóra használható fel.":
    "Din energia stocată, conversia ia cca 10 la sută, de aceea nu poți folosi toți wattorii.",
  "saját eszköz":
    "dispozitiv propriu",
  "Tölts ki legalább egy sort: hány darab, hány watt, hány óra naponta.":
    "Completează cel puțin un rând: câte bucăți, câți wați, câte ore pe zi.",
  "Nem fogy el":
    "Nu se termină",
  "Ez nem fér el egyszerre. A felsorolt fogyasztók együtt":
    "Nu încap simultan. Consumatorii enumerați cer împreună",
  "wattot kérnek, a gép":
    "wați, aparatul",
  "Nem attól múlik, hogy mekkora a wattórája — ennyit egyszerre nem bír.":
    "Nu depinde de câți wattori are — atât nu duce simultan.",
  "Vagy nagyobb teljesítményű gép kell, vagy nem egyszerre kell működtetni őket.":
    "Ori îți trebuie un aparat mai puternic, ori nu trebuie să funcționeze toate deodată.",
  "Az indulási áram kiviheti. A folyamatos fogyasztás belefér,":
    "Curentul de pornire îl poate opri. Consumul continuu încape,",
  "de a motoros készülék induláskor kb.":
    "dar aparatul cu motor la pornire trage cca",
  "wattot húz pár másodpercig,":
    "wați câteva secunde,",
  "a gép":
    "aparatul",
  "wattos. Ilyenkor a gép lekapcsol, pedig „papíron belefért volna\".":
    "wați. În acest caz aparatul se oprește, deși „pe hârtie ar fi încăput\".",
  "Wh valóban felhasználható energia kell":
    "Wh energie efectiv utilizabilă necesară",
  "(névlegesen kb.":
    "(nominal cca",
  "Wh, a veszteség miatt).":
    "Wh, din cauza pierderilor).",
  "A választott gép ezt tudja.":
    "Aparatul ales face față.",
  "A választott gép ehhez kevés.":
    "Aparatul ales e prea slab pentru asta.",
  "Ezek elegendők lennének erre a listára:":
    "Acestea ar fi suficiente pentru această listă:",
  "A napelem naponta":
    "Panoul solar dă zilnic cu",
  "wattórával többet ad, mint amennyit elhasználsz. Ez így önfenntartó — de csak amíg süt: két borús nap":
    "wattori mai mult decât consumi. Așa e autosuficient — dar doar cât e soare: două zile înnorate",
  "wattórát vinne el a tartalékból.":
    "wattori ar lua din rezervă.",
  "ezzel a listával.":
    "cu această listă.",
  "Napi fogyasztás:":
    "Consum zilnic:",
  "| csúcsterhelés:":
    "| sarcină de vârf:",
  "(a gép":
    "(aparatul",
  "Wh névlegesből":
    "Wh nominali, din care",
  "Wh a valóban felhasználható.":
    "Wh sunt efectiv utilizabili.",
  "A napelem:":
    "Panoul solar:",
  "napfényórának felel meg, tehát napi kb.":
    "ore de soare, deci zilnic cca",
  "Wh jön be. A névleges teljesítmény 70 százalékával számolunk:":
    "Wh intră. Calculăm cu 70 la sută din puterea nominală:",
  "az állásszög, a hő és a töltésvezérlő mind levesz belőle.":
    "unghiul, căldura și regulatorul de încărcare iau toate din ea.",
  "teletöltése ilyen időben":
    "încărcare completă pe o astfel de vreme",
  "Saját / kézi megadás (bármilyen lámpa)":
    "Valoare proprie / manuală (orice lanternă)",
  "NEXTORCH eStar (fejlámpa, max. 1300 lm)":
    "NEXTORCH eStar (frontală, max. 1300 lm)",
  "2× 1200 mAh (2400 mAh összesen)":
    "2× 1200 mAh (2400 mAh în total)",
  "NEXTORCH myStar V2.0 (fejlámpa, max. 760 lm)":
    "NEXTORCH myStar V2.0 (frontală, max. 760 lm)",
  "NEXTORCH iStar (fejlámpa, max. 450 lm)":
    "NEXTORCH iStar (frontală, max. 450 lm)",
  "Piros villogó":
    "Roșu intermitent",
  "NEXTORCH MAX STAR (fejlámpa, max. 1200 lm)":
    "NEXTORCH MAX STAR (frontală, max. 1200 lm)",
  "NEXTORCH oStar (sisak-/fejlámpa, max. 500 lm)":
    "NEXTORCH oStar (lanternă de cască/frontală, max. 500 lm)",
  "Decathlon Quechua HL50 (fejlámpa, 50 lm)":
    "Decathlon Quechua HL50 (frontală, 50 lm)",
  "Decathlon Ontrail 900 (fejlámpa terepfutáshoz)":
    "Decathlon Ontrail 900 (frontală pentru alergare montană)",
  "Boost, 900→350 lm (túlmelegedés ellen csökken)":
    "Boost, 900→350 lm (scade împotriva supraîncălzirii)",
  "Erős, 300 lm, állandó fényerő":
    "Puternic, 300 lm, luminozitate constantă",
  "Decathlon Caperlan Moonlight 500 (horgász fejlámpa)":
    "Decathlon Caperlan Moonlight 500 (frontală pentru pescuit)",
  "Horgászat, 80 lm":
    "Pescuit, 80 lm",
  "Optimál, 200 lm":
    "Optim, 200 lm",
  "UV mód":
    "Mod UV",
  "Decathlon Forclaz ONNight 300 (fejlámpa túrázáshoz)":
    "Decathlon Forclaz ONNight 300 (frontală pentru drumeții)",
  "Környezeti fény":
    "Lumină ambientală",
  "Erős, 130 lm":
    "Puternic, 130 lm",
  "Saját megadás (mA)":
    "Valoare proprie (mA)",
  "Kis 5 mm-es LED (jelzőfény-szerű, gyenge)":
    "LED mic de 5 mm (ca un indicator, slab)",
  "~1 W teljesítmény-LED (pl. Cree XP-E)":
    "LED de putere ~1 W (de ex. Cree XP-E)",
  "~3 W teljesítmény-LED (pl. Cree XP-G, Osram)":
    "LED de putere ~3 W (de ex. Cree XP-G, Osram)",
  "~5 W teljesítmény-LED (erős fejlámpa/zseblámpa)":
    "LED de putere ~5 W (frontală/lanternă puternică)",
  "COB LED-sáv (kempinglámpa)":
    "Bandă LED COB (lampă de camping)",
  "Saját megadás (mAh)":
    "Valoare proprie (mAh)",
  "AA alkáli elem (~2500 mAh)":
    "Baterie alcalină AA (~2500 mAh)",
  "AA NiMH tölthető akku (~2000 mAh)":
    "Acumulator NiMH AA reîncărcabil (~2000 mAh)",
  "AAA alkáli elem (~1000 mAh)":
    "Baterie alcalină AAA (~1000 mAh)",
  "— a gyártó szerint":
    "— conform producătorului",
  "— a gyártó saját, mért adata":
    "— date proprii, măsurate de producător",
  "Add meg az akku kapacitását és a LED áramfelvételét is.":
    "Introdu și capacitatea acumulatorului, și consumul de curent al LED-ului.",
  "mAh névleges kapacitásból":
    "mAh capacitate nominală, din care",
  "mAh a valóban felhasználható (a merítési és driver-veszteség miatt 15 százalékot levonva),":
    "mAh sunt efectiv utilizabili (scăzând 15 la sută pentru pierderile de descărcare și de driver),",
  "mA folyamatos áramfelvétel mellett.":
    "mA consum continuu de curent.",
  "Rejtőzködés, fekvés, olvasás. Ennyivel nem hízol és nem is fogysz gyorsan, de a fejed tiszta marad.":
    "Ascuns, culcat, citit. Cu atât nu te îngrași și nici nu slăbești repede, dar mintea îți rămâne limpede.",
  "Járkálás, ház körüli teendők. Ez a nemzetközi vészhelyzeti tervezés alapszáma is.":
    "Mers, treburi în jurul casei. Aceasta e și cifra de bază a planificării internaționale pentru urgențe.",
  "Favágás, sáncolás, teherrel gyaloglás, hideg. Ez a szám gyorsan elviszi a készletet -- éppen ezért érdemes előre számolni vele.":
    "Tăiat lemne, săpat șanțuri, mers cu greutăți, frig. Cifra asta golește repede proviziile -- tocmai de aceea merită calculată din timp.",
  "kcal fejenként naponta.":
    "kcal de persoană pe zi.",
  "saját tétel":
    "articol propriu",
  "egység":
    "unitate",
  "Engedély nélküli, 4 watt AM/FM (SSB-n 12). Nagy antennát kíván, de a hosszú hullám jobban hajlik a domb mögé, mint bármelyik kézirádió.":
    "Fără licență, 4 wați AM/FM (12 pe SSB). Cere antenă mare, dar unda lungă se curbează mai bine după deal decât orice stație portabilă.",
  "ENGEDÉLYKÖTELES: vizsga és hívójel kell hozzá. Vészhelyzetben az életveszély elhárítására a törvény enged kivételt, de arra épülő tervet ne csinálj -- a vizsga előre megszerezhető.":
    "NECESITĂ LICENȚĂ: îți trebuie examen și indicativ. În caz de urgență, legea permite o excepție pentru înlăturarea pericolului de moarte, dar nu face un plan bazat pe asta -- examenul se poate lua din timp.",
  "ENGEDÉLYKÖTELES. Itt NEM a rálátás dönt: nappal 100-400 km-re, éjjel akár több ezerre visz az ionoszféráról visszaverődve. Ezt a kalkulátor nem modellezi -- lásd a figyelmeztetést az eredménynél.":
    "NECESITĂ LICENȚĂ. Aici NU vizibilitatea directă decide: ziua ajunge la 100-400 km, noaptea chiar la mii, reflectat de ionosferă. Calculatorul nu modelează asta -- vezi avertismentul la rezultat.",
  "ENGEDÉLYKÖTELES. Éjszakai sáv, a környék (50-300 km) megbízható lefedésére a legjobb -- ez a klasszikus \"megyényi\" összeköttetés.":
    "NECESITĂ LICENȚĂ. Bandă de noapte, cea mai bună pentru acoperirea sigură a împrejurimilor (50-300 km) -- legătura clasică „la nivel de județ\".",
  "Mező, tópart, autópálya. Itt a rálátás a korlát, nem a terep.":
    "Câmp, mal de lac, autostradă. Aici limita e vizibilitatea directă, nu terenul.",
  "A domb mögé a jel behajlik, de gyengülve. Egy dombtetőre felsétálni többet ér, mint tízszeres teljesítmény.":
    "Semnalul se curbează după deal, dar slăbit. Să urci pe vârful unui deal valorează mai mult decât de zece ori puterea.",
  "A lombozat a rövid hullámot nyeli el jobban, ezért itt a 70 centi a leggyengébb.":
    "Frunzișul absoarbe mai mult unda scurtă, de aceea aici 70 cm e cea mai slabă.",
  "Itt fordul meg a sorrend: a 70 centi jobban jut át épületek között, a CB-nek meg antennája sincs hova.":
    "Aici se inversează ordinea: 70 cm trece mai bine printre clădiri, iar CB-ul nici nu are unde să-și pună antena.",
  "Völgyben ülve a rálátás nulla. Itt a megoldás nem a watt, hanem az átjátszó vagy a gerincre feljutás.":
    "Stând în vale, vizibilitatea directă e zero. Aici soluția nu sunt wații, ci repetorul sau urcarea pe creastă.",
  "talajhullám":
    "undă de sol",
  "terep és teljesítmény":
    "teren și putere",
  "rálátás (a Föld görbülete)":
    "vizibilitate directă (curbura Pământului)",
  "Adj meg legalább egy embert.":
    "Introdu cel puțin o persoană.",
  "Tölts ki legalább egy tételt (mennyiség és kcal), vagy add meg az összeset egyben.":
    "Completează cel puțin un articol (cantitate și kcal), sau introdu totalul dintr-odată.",
  "kcal hiányzik a":
    "kcal lipsesc la",
  "húskonzerv .":
    "conservă de carne .",
  "Ennyi ideig elég a készlet":
    "Proviziile ajung atât timp",
  "felnőttnek":
    "adulți",
  "Napi igény:":
    "Necesar zilnic:",
  "készlet:":
    "provizii:",
  "kcal kell.":
    "kcal necesare.",
  "Ez megvan.":
    "Asta există.",
  "Ehhez a készlet kevés.":
    "Pentru asta proviziile sunt prea puține.",
  "A gyerekekkel a felnőtt adag 60 százalékával számoltunk — ez átlag,":
    "Pentru copii am calculat cu 60 la sută din porția unui adult — e o medie,",
  "egy tizenkét éves többet eszik egy hároméves(nél). A kalória nem minden:":
    "un copil de doisprezece ani mănâncă mai mult decât unul de trei. Caloriile nu sunt totul:",
  "fehérje, só és zsír nélkül a puszta kalória pár hét alatt legyengít, és a":
    "fără proteine, sare și grăsimi, caloriile simple te slăbesc în câteva săptămâni, iar",
  "C-vitamin hiánya hetek alatt jelentkezik. Ez a szám a KIHÚZÁST méri, nem az egészséget.":
    "lipsa vitaminei C apare în câteva săptămâni. Cifra asta măsoară SUPRAVIEȚUIREA, nu sănătatea.",
  "A víz nincs ebben a számban, és hamarabb fogy el.":
    "Apa nu e inclusă în această cifră și se termină mai repede.",
  "Élelem nélkül hetekig el lehet lenni, víz nélkül napokig. Ha a készletet tervezed,":
    "Fără mâncare se poate rezista săptămâni, fără apă doar zile. Dacă îți planifici proviziile,",
  "a vízzel kezdd — arra külön kalkulátor van.":
    "începe cu apa — pentru asta există un calculator separat.",
  "Ez a teljesítmény PMR446-on nem legális. A sávon":
    "Această putere nu e legală pe PMR446. Pe această bandă",
  "maximum 0,5 watt engedélyezett, gyári antennával. A számot kiszámoltuk, de egy":
    "sunt permiși maximum 0,5 wați, cu antenă originală. Am calculat cifra, dar cu un",
  "erősebb adóval a saját frekvenciádon te zavarod meg azokat, akikkel beszélni akarsz.":
    "emițător mai puternic, pe propria frecvență îi perturbi chiar pe cei cu care vrei să vorbești.",
  "Ez a sáv engedélyköteles.":
    "Această bandă necesită licență.",
  "használatához":
    "pentru folosire",
  "vizsga és hívójel kell. A vizsga előre megszerezhető — és pont ez a lényeg:":
    "îți trebuie examen și indicativ. Examenul se poate lua din timp — și exact asta e ideea:",
  "egy vészhelyzetben már késő elkezdeni.":
    "într-o situație de urgență e deja prea târziu să începi.",
  "kilométerre ezen a sávon a teljesítmény":
    "kilometri, pe această bandă puterea",
  "nem elég — bármennyi. A rálátásod":
    "nu ajunge — oricât ar fi. Vizibilitatea ta directă e de",
  "kilométer, és a Föld görbülete":
    "kilometri, iar după curbura Pământului",
  "mögé a VHF/UHF jel nem hajlik be. Amin múlik: magasság (menj fel egy dombra vagy":
    "semnalul VHF/UHF nu se curbează. De ce depinde: înălțime (urcă pe un deal sau",
  "tedd fel az antennát), átjátszó , vagy alacsonyabb sáv (CB vagy rövidhullám).":
    "pune antena sus), repetor , sau o bandă mai joasă (CB sau unde scurte).",
  "kilométerhez kb.":
    "kilometri ar fi nevoie de cca",
  "watt kellene ezen a sávon és ezen a terepen":
    "wați pe această bandă și pe acest teren",
  "— ami már nem kézirádió-kategória, és rendszerint olcsóbb feljebb vinni az antennát.":
    "— ceea ce nu mai e categoria stațiilor portabile, și de obicei e mai ieftin să urci antena mai sus.",
  "Ennyire várható összeköttetés":
    "Legătură estimată până la",
  "méter antennamagassággal.":
    "metri înălțime a antenei.",
  "Amin most múlik:":
    "De ce depinde acum:",
  "Rövidhullámon a talajhullámmal számoltunk.":
    "Pe unde scurte am calculat cu unda de sol.",
  "A rálátásod":
    "Vizibilitatea ta directă",
  "km, a terep és a teljesítmény":
    "km, terenul și puterea",
  "km-t enged — a kettő közül a kisebbik számít.":
    "km permit — contează cea mai mică dintre ele.",
  "A watt a leggyengébb eszközöd. A távolság a teljesítmény negyedik":
    "Wații sunt unealta ta cea mai slabă. Distanța crește cu rădăcina a patra",
  "gyökével nő: négyszer annyi watt másfélszer nagyobb távolság. Egy méterrel feljebb tett":
    "a puterii: de patru ori mai mulți wați dau o distanță de o dată și jumătate mai mare. O antenă ridicată cu un metru",
  "antenna rendszerint többet ad, mint a teljesítmény megduplázása — és nem fogyaszt.":
    "aduce de obicei mai mult decât dublarea puterii — și nu consumă.",
  "Rövidhullámon ez a szám csak a talajhullám. A 7 és a 3,6":
    "Pe unde scurte cifra asta e doar unda de sol. Raza reală a benzilor de 7 și 3,6",
  "megahertzes sáv igazi hatótávját az ionoszféra adja: napszaktól és napfolt-tevékenységtől":
    "megahertzi o dă ionosfera: în funcție de momentul zilei și de activitatea petelor solare",
  "függően 100-tól több ezer kilométerig. Azt ez a kalkulátor nem modellezi — arra":
    "de la 100 până la mii de kilometri. Calculatorul nu modelează asta — pentru asta",
  "terjedési előrejelzés kell.":
    "îți trebuie o prognoză de propagare.",
  "Tölts ki minden mezőt.":
    "Completează toate câmpurile.",
  "kg fa, ez körülbelül":
    "kg de lemne, adică aproximativ",
  "ömlesztett köbméter":
    "metri cubi vrac",
  "Légszáraz keményfával és 70 százalékos kályha-hatásfokkal számolva. Nedves fa ennek a felét adja, tehát kétszer annyi kell belőle.":
    "Calculat cu lemn de esență tare uscat în aer și randament de 70 la sută al sobei. Lemnul umed dă jumătate, deci îți trebuie de două ori mai mult.",
  "kg gáz, ez":
    "kg de gaz, adică",
  "darab 11,5 kilós palack":
    "butelii de 11,5 kg",
  "PB-gázt zárt térben égetni életveszélyes lehet. Szén-monoxid keletkezik, ami szagtalan, és álmodban öl meg. Kell mellé szén-monoxid-érzékelő, és kell folyamatos szellőzés — nem elég percenként kinyitni az ablakot.":
    "Arderea GPL-ului într-un spațiu închis poate fi mortală. Se formează monoxid de carbon, care e inodor și te omoară în somn. Îți trebuie un detector de monoxid de carbon și aerisire continuă — nu ajunge să deschizi geamul din când în când.",
  "Párát is termel: minden elégetett kiló gázból másfél liter víz kerül a levegőbe. Ettől penészedik a fal, és hidegebbnek érzed a szobát.":
    "Produce și umezeală: din fiecare kilogram de gaz ars ajunge în aer un litru și jumătate de apă. De la asta mucegăiește peretele și simți camera mai rece.",
  "Palackot soha ne tarts a lakótérben tartalékként, és ne a fűtés mellett.":
    "Nu ține niciodată butelii de rezervă în spațiul de locuit și nici lângă încălzire.",
  "Tölts ki mindkét mezőt.":
    "Completează ambele câmpuri.",
  "négyzetméter tetőről":
    "metri pătrați de acoperiș",
  "milliméter esőből, húsz százalék veszteséggel számolva.":
    "milimetri de ploaie, calculat cu douăzeci la sută pierderi.",
  "A tető vízszintes vetülete számít, nem a ferde felület: felülről nézve mekkora.":
    "Contează proiecția orizontală a acoperișului, nu suprafața înclinată: cât de mare e privit de sus.",
  "Ivásra és főzésre, három liter fejenként naponta:":
    "Pentru băut și gătit, trei litri de persoană pe zi:",
  "Az első lefolyó vizet engedd el. Az mossa le a tetőről a port, a madárürüléket és a leveleket. Nagyjából az első fél milliméter esőnek megfelelő mennyiség.":
    "Lasă să se scurgă prima apă. Ea spală de pe acoperiș praful, găinațul și frunzele. Aproximativ cantitatea corespunzătoare primei jumătăți de milimetru de ploaie.",
  "A tető anyaga számít. Bitumenzsindelyről, ólomtartalmú festésről vagy azbesztpalán át gyűjtött vizet ne igyál. Mosásra, öblítésre az is jó.":
    "Contează materialul acoperișului. Nu bea apă colectată de pe șindrilă bituminoasă, vopsea cu plumb sau plăci de azbest. Pentru spălat și clătit e bună și aceea.",
  "Az összegyűjtött víz nem ivóvíz. A Víztisztítás rész fent megmondja, mennyi forralás vagy hipó kell hozzá.":
    "Apa colectată nu e apă potabilă. Secțiunea Purificarea apei de mai sus îți spune câtă fierbere sau clor îi trebuie.",
  "Dörgés":
    "Tunet",
  "Most várd meg a dörgést, és nyomd meg újra.":
    "Acum așteaptă tunetul și apasă din nou.",
  "Ez a fejed fölött van. Azonnal menj be épületbe vagy autóba. Fa alá soha.":
    "E deasupra ta. Intră imediat într-o clădire sau în mașină. Niciodată sub copac.",
  "Tíz kilométeren belül van, tehát veszélyes. A következő villám már téged is elérhet: menj fedezékbe, és maradj is ott.":
    "E la mai puțin de zece kilometri, deci e periculos. Următorul fulger te poate atinge și pe tine: adăpostește-te și rămâi acolo.",
  "Egyelőre távol van, de figyeld: ha az idő rövidül, közeledik.":
    "Deocamdată e departe, dar fii atent: dacă timpul scade, se apropie.",
  "másodperc telt el. A hang három másodperc alatt tesz meg egy kilométert.":
    "secunde au trecut. Sunetul parcurge un kilometru în trei secunde.",
  "Harminc-harminc szabály: ha a dörgés harminc másodpercen belül megjön, menj fedezékbe, és az utolsó dörgés után még harminc percig maradj bent. A vihar utolsó villámai a legalattomosabbak, mert akkor már mindenki előjön.":
    "Regula treizeci-treizeci: dacă tunetul vine în mai puțin de treizeci de secunde, adăpostește-te și rămâi înăuntru încă treizeci de minute după ultimul tunet. Ultimele fulgere ale furtunii sunt cele mai perfide, pentru că atunci toată lumea iese deja afară.",
  "Add meg a távolságot.":
    "Introdu distanța.",
  "tartalékkal.":
    "cu rezervă.",
  ": ebből":
    ": din asta",
  "már sötétben lenne. Vagy indulj hamarabb, vagy vigyél lámpát.":
    "ar fi deja pe întuneric. Ori pleacă mai devreme, ori ia o lanternă.",
  "kilométer":
    "kilometri",
  "méter emelkedés.":
    "metri urcare.",
  "Az emelkedés minden hatszáz métere egy órát ad hozzá. Most indulva":
    "Fiecare șase sute de metri de urcare adaugă o oră. Plecând acum",
  "-kor érnél oda.":
    "ai ajunge la",
  "Pihenő nincs benne. Hosszabb úton számolj óránként tíz perccel, és étkezéssel.":
    "Pauzele nu sunt incluse. Pe un drum mai lung, socotește zece minute pe oră, plus mesele.",
  "Mérés…":
    "Măsurare…",
  "nyomás.":
    "compresii.",
  "Forralás (ez a legbiztosabb)":
    "Fierbere (cea mai sigură)",
  "Buzgó forrás":
    "Clocot puternic",
  "— kétezer méter felett vagy, ott hosszabb kell, mert alacsonyabb a forráspont.":
    "— ești peste două mii de metri, acolo trebuie mai mult, pentru că punctul de fierbere e mai jos.",
  "Hagyd kihűlni fedő alatt.":
    "Las-o să se răcească sub capac.",
  "Ha nem tudsz forralni: hipó":
    "Dacă nu poți fierbe: clor (înălbitor)",
  "vízhez":
    "pentru apă",
  "százalékos hipó, ami körülbelül":
    "la sută înălbitor, adică aproximativ",
  "Keverd el, várj":
    "Amestecă, așteaptă",
  "percet, és utána is enyhén klóros szagúnak kell lennie.":
    "minute, iar după aceea trebuie să miroasă ușor a clor.",
  "Ha nem érzed a szagot, adj hozzá ugyanennyit, és várj még":
    "Dacă nu simți mirosul, mai adaugă aceeași cantitate și mai așteaptă",
  "Zavaros vizet előbb tisztítsd le. Hagyd ülepedni, majd szűrd át ruhán vagy kávéfilteren. A hipó a lebegő szennyeződésre pazarlódik el, és nem jut a kórokozókra.":
    "Apa tulbure limpezește-o întâi. Las-o să se depună, apoi strecoar-o printr-o cârpă sau un filtru de cafea. Clorul se irosește pe impuritățile în suspensie și nu ajunge la germeni.",
  "Illatosított, sűrített vagy tisztítószeres hipót ne használj. Csak sima nátrium-hipoklorit oldat való bele.":
    "Nu folosi înălbitor parfumat, concentrat sau cu detergent. Doar soluție simplă de hipoclorit de sodiu e potrivită.",
  "Amit ez nem old meg: vegyszer, olaj, növényvédőszer, nehézfém, sóstalanítás. Ezeket sem a forralás, sem a hipó nem távolítja el, a forralás inkább töményíti őket. Ipari terület, út menti árok vagy szántóföld melletti vízzel ne is próbálkozz.":
    "Ce nu rezolvă asta: chimicale, ulei, pesticide, metale grele, desalinizare. Nici fierberea, nici clorul nu le îndepărtează, fierberea mai degrabă le concentrează. Cu apă din zone industriale, șanțuri de lângă drum sau de lângă câmpuri arate nici nu încerca.",
  "A hipó nem öl meg mindent. A Cryptosporidium ellenáll neki. Ha ilyet gyanítasz (állati ürülékkel érintkezett felszíni víz), forralj, vagy használj arra való szűrőt.":
    "Clorul nu omoară tot. Cryptosporidium îi rezistă. Dacă bănuiești așa ceva (apă de suprafață în contact cu dejecții de animale), fierbe-o sau folosește un filtru potrivit.",
  "csempe van eltárolva ezen a készüléken.":
    "plăci de hartă sunt stocate pe acest dispozitiv.",
  "Ez a kivágás túl nagy:":
    "Această decupare e prea mare:",
  "csempe lenne. Nagyíts rá jobban, és úgy töltsd le.":
    "plăci ar fi. Mărește mai mult și descarcă așa.",
  "csempe letöltése (kb.":
    "plăci de descărcat (cca",
  "nagyításon. Folytatod?":
    "la nivelul de zoom. Continui?",
  "Letöltés…":
    "Descărcare…",
  "Letöltés:":
    "Descărcare:",
  "Kész:":
    "Gata:",
  "nem jött le)":
    "nu s-au descărcat)",
  ". Összesen":
    ". În total",
  "csempe van eltárolva.":
    "plăci de hartă sunt stocate.",
  "Kilépés a teljes képernyőből":
    "Ieși din ecran complet",
  "Várj, amíg a térkép betölt.":
    "Așteaptă până se încarcă harta.",
  "Nincs eltárolt csempe.":
    "Nu există plăci de hartă stocate.",
  "Törlöd a letöltött térkép-területeket?":
    "Ștergi zonele de hartă descărcate?",
  "Törölve. A térkép ezután csak online töltődik.":
    "Șters. De acum harta se încarcă doar online.",
  "A mikrofon nem indult el:":
    "Microfonul nu a pornit:",
  "Vétel leállítása":
    "Oprește recepția",
  "Vétel fut. Tartsd a hangforráshoz.":
    "Recepție în curs. Ține-l lângă sursa de sunet.",
  "sor vétel alatt…":
    "rânduri în recepție…",
  "Vétel fut, még nincs jel.":
    "Recepție în curs, încă niciun semnal.",
  "Vétel leállítva.":
    "Recepție oprită.",
  "Dekódolás…":
    "Decodare…",
  "sor dekódolva.":
    "rânduri decodate.",
  "Nem találtam SSTV-jelet ebben a felvételben.":
    "Nu am găsit semnal SSTV în această înregistrare.",
  "Nem sikerült a kép betöltése.":
    "Nu s-a putut încărca imaginea.",
  "Kódolás…":
    "Codare…",
  "Küldés…":
    "Trimitere…",
  "mp) — tartsd a vevő mikrofonjához":
    "s) — ține-l lângă microfonul receptorului",
  "Kész.":
    "Gata.",
  "Leállítva.":
    "Oprit.",
  "WAV készítése…":
    "Se creează WAV…",
  "WAV letöltve:":
    "WAV descărcat:",
  "Üzenet csak neki:":
    "Mesaj doar pentru el/ea:",
  "kilépett, innentől mindenkinek írsz.":
    "a ieșit, de acum scrii tuturor.",
  "Zárt üzenet. Ehhez a szoba kulcsa kell.":
    "Mesaj închis. Pentru el îți trebuie cheia camerei.",
  "csak neki":
    "doar pentru el/ea",
  "csak neked":
    "doar pentru tine",
  "csak neki:":
    "doar pentru el/ea:",
  "Az internetes szobákhoz egyszer be kell lépned.":
    "Pentru camerele pe internet trebuie să te autentifici o dată.",
  "Nem vagy bejelentkezve. Töltsd újra a lapot, és add meg a jelszót.":
    "Nu ești autentificat. Reîncarcă pagina și introdu parola.",
  "Jelszó megjelenítése":
    "Arată parola",
  "Belépés jelszóval":
    "Autentificare cu parolă",
  "Az e-mail címed és a jelszavad. A telefon megjegyzi, többször nem kell.":
    "Adresa ta de e-mail și parola. Telefonul le ține minte, nu mai trebuie din nou.",
  "Belépés e-mailes kóddal (jelszó nélkül)":
    "Autentificare cu cod pe e-mail (fără parolă)",
  "Új fiók":
    "Cont nou",
  "Új jelszó beállítása":
    "Setează o parolă nouă",
  "Add meg az e-mail címed, és válassz jelszót (legalább 8 karakter), kétszer. Utána küldünk egy 6 jegyű kódot e-mailben.":
    "Introdu adresa ta de e-mail și alege o parolă (cel puțin 8 caractere), de două ori. Apoi îți trimitem un cod de 6 cifre pe e-mail.",
  "Jelszó (legalább 8 karakter)":
    "Parolă (cel puțin 8 caractere)",
  "Jelszó még egyszer":
    "Parola încă o dată",
  "Vissza a belépéshez":
    "Înapoi la autentificare",
  "Írd be a kódot":
    "Introdu codul",
  "Küldtünk egy 6 jegyű kódot ide:":
    "Am trimis un cod de 6 cifre la:",
  "Nézd meg a levelezőben (a Spam mappát is), és írd be. 10 percig érvényes.":
    "Verifică în e-mail (și dosarul Spam) și introdu-l. E valabil 10 minute.",
  "6 jegyű kód":
    "Cod de 6 cifre",
  "Megerősítés":
    "Confirmare",
  "Elölről":
    "De la început",
  "Bejelentkeztél. A telefon megjegyzi.":
    "Te-ai autentificat. Telefonul ține minte.",
  "Ellenőrzés folyamatban…":
    "Verificare în curs…",
  "Belépés folyamatban…":
    "Autentificare în curs…",
  "Küldés folyamatban, pár másodperc…":
    "Trimitere în curs, câteva secunde…",
  "Add meg az e-mail címed és a jelszavad.":
    "Introdu adresa de e-mail și parola.",
  "Hibás e-mail cím vagy jelszó.":
    "Adresă de e-mail sau parolă greșită.",
  "Ha elfelejtetted, nyomd meg az „Elfelejtettem a jelszót\" gombot.":
    "Dacă ai uitat-o, apasă butonul „Am uitat parola\".",
  "A jelszó legalább 8 karakter legyen.":
    "Parola trebuie să aibă cel puțin 8 caractere.",
  "A két jelszó nem egyezik. Írd be újra mindkettőt.":
    "Cele două parole nu se potrivesc. Introdu-le din nou pe amândouă.",
  "A kód 6 számjegy.":
    "Codul are 6 cifre.",
  "Hibás kód.":
    "Cod greșit.",
  "Nem vagy bejelentkezve.":
    "Nu ești autentificat.",
  "Kiléptél.":
    "Ai ieșit din cont.",
  "nincs kapcsolat":
    "fără conexiune",
  "Bekapcsolva. Ha valaki ír ide, jelez a telefonod, akkor is, ha az app be van zárva.":
    "Activat. Dacă cineva scrie aici, telefonul te anunță, chiar dacă aplicația e închisă.",
  "Ha valaki ír ide, jelezzen a telefonod.":
    "Dacă cineva scrie aici, telefonul să te anunțe.",
  "Ez a böngésző nem tud értesítést fogadni. Telefonon tedd ki az appot a főképernyőre.":
    "Acest browser nu poate primi notificări. Pe telefon, adaugă aplicația pe ecranul principal.",
  "Bekapcsolva. Ha valaki ír ide, jelez a telefonod.":
    "Activat. Dacă cineva scrie aici, telefonul te anunță.",
  "Nem adtál engedélyt az értesítéshez. A telefon beállításainál, az alkalmazásnál adhatod meg.":
    "Nu ai dat permisiunea pentru notificări. O poți da din setările telefonului, la aplicație.",
  "Bekapcsolva. Küldök egy próbát.":
    "Activat. Trimit o notificare de probă.",
  "Nem adtál engedélyt. A telefon beállításainál később visszaadhatod.":
    "Nu ai dat permisiunea. O poți da mai târziu din setările telefonului.",
  "a szerver nem adott kulcsot":
    "serverul nu a dat cheie",
  "a szerver nem fogadta el a feliratkozást":
    "serverul nu a acceptat abonarea",
  "Bekapcsolva. Küldök egy próbát, hogy lásd, tényleg megérkezik.":
    "Activat. Trimit o probă, ca să vezi că sosește cu adevărat.",
  "A próbát a szerver elküldte a Google-nek. Pár másodpercen belül meg kell jelennie a telefon értesítései között, akkor is, ha bezárod az appot.":
    "Serverul a trimis proba către Google. În câteva secunde trebuie să apară între notificările telefonului, chiar dacă închizi aplicația.",
  "Próba: így jelez majd, ha valaki ír ide.":
    "Probă: așa te va anunța când cineva scrie aici.",
  "Kiküldtem a próbát, nézd meg a telefon értesítései között.":
    "Am trimis proba, uită-te între notificările telefonului.",
  "Nincs engedély az értesítéshez.":
    "Nu există permisiune pentru notificări.",
  "Ezen az eszközön nincs bekapcsolva az értesítés.":
    "Notificările nu sunt activate pe acest dispozitiv.",
  "A próba nem ment ki.":
    "Proba nu a plecat.",
  "A próbaértesítést a szolgáltató átvette. Ha pár másodpercen belül nem":
    "Furnizorul a preluat notificarea de probă. Dacă în câteva secunde nu",
  "jelenik meg a telefonodon, akkor a telefon beállításánál akad el, nem az appban.":
    "apare pe telefon, se blochează în setările telefonului, nu în aplicație.",
  "Nyiss egyet: internet és térerő nélkül, egy hálón":
    "Deschide una: fără internet și semnal, în aceeași rețea",
  "Minden nyelv":
    "Toate limbile",
  "Erre a keresésre nincs nyitott szoba.":
    "Pentru această căutare nu există cameră deschisă.",
  "Ezen a nyelven most nincs nyitott szoba. Állítsd vissza Minden nyelvre.":
    "În această limbă nu există acum cameră deschisă. Revino la Toate limbile.",
  "indította":
    "a pornit-o",
  "nem vagy tag — koppints a jelentkezéshez":
    "nu ești membru — atinge pentru a cere intrarea",
  "tag olvasta el":
    "membri au citit",
  "Elküldve":
    "Trimis",
  "Még senki nem olvasta el":
    "Încă nu l-a citit nimeni",
  "Módosítás: írd át, és küldd el. A mező kiürítésével elveted.":
    "Modificare: rescrie și trimite. Dacă golești câmpul, renunți.",
  "Módosítva:":
    "Modificat:",
  "Törlöd ezt az üzenetet? Mindenkinél eltűnik a tartalma, és azoknál is, akik elmentették.":
    "Ștergi acest mesaj? Conținutul dispare la toți, chiar și la cei care l-au salvat.",
  "Törölt üzenet":
    "Mesaj șters",
  "(zárt üzenet — kérj új meghívó linket a szoba gazdájától)":
    "(mesaj închis — cere un nou link de invitație de la gazda camerei)",
  "(zárt üzenet — ez a kulcs nem ehhez a szobához való)":
    "(mesaj închis — această cheie nu e pentru această cameră)",
  "(zárt üzenet — nincs meg a kulcs)":
    "(mesaj închis — lipsește cheia)",
  "Rendszerüzenet":
    "Mesaj de sistem",
  "Állandó jel — a névtől és a képtől független":
    "Semn permanent — independent de nume și imagine",
  "Ehhez a szobához most készült titkosító kulcs. Küldj ÚJ meghívó linket a tagoknak, hogy olvasni tudják az üzeneteidet.":
    "Pentru această cameră s-a creat acum o cheie de criptare. Trimite un link de invitație NOU membrilor, ca să-ți poată citi mesajele.",
  "Kapcsolódva.":
    "Conectat.",
  "Megszakadt a kapcsolat, újrapróbálom...":
    "Conexiunea s-a întrerupt, reîncerc...",
  "belépési kérelmet küldött — a fogaskerék mögött döntesz róla.":
    "a trimis o cerere de intrare — decizi din spatele rotiței.",
  "új üzenetet írt.":
    "a scris un mesaj nou.",
  "Kész. A szobák listáján már ez látszik. (":
    "Gata. În lista camerelor apare deja asta. (",
  "Adj nevet a szobának.":
    "Dă un nume camerei.",
  "Kész, a szoba létrejött. Itt a kódja, és itt tudsz képet feltölteni vagy meghívót küldeni. Ugyanezt később a fogaskerék alatt éred el.":
    "Gata, camera a fost creată. Aici e codul ei și aici poți încărca o imagine sau trimite o invitație. Același lucru îl găsești mai târziu sub rotiță.",
  "Írd be a szoba kódját.":
    "Introdu codul camerei.",
  "Kérelem elküldve. Amíg a gazda jóvá nem hagyja, nem látod az üzeneteket.":
    "Cerere trimisă. Până nu o aprobă gazda, nu vezi mesajele.",
  "Már tag vagy ebben a szobában.":
    "Ești deja membru în această cameră.",
  "Nincs ilyen kódú szoba.":
    "Nu există cameră cu acest cod.",
  "Illeszd be a meghívó linket.":
    "Lipește linkul de invitație.",
  "Ebben nincs meghívó. Másold be a teljes linket.":
    "Aici nu e nicio invitație. Copiază linkul întreg.",
  "Beváltom...":
    "Folosesc invitația...",
  "Kész. A csempén már ez látszik. (":
    "Gata. Pe placă apare deja asta. (",
  "Erről a szobáról nem jelez.":
    "Nu te anunță despre această cameră.",
  "Küldöm...":
    "Trimit...",
  "A szoba kódja a vágólapon.":
    "Codul camerei e în clipboard.",
  "Nem sikerült a vágólapra tenni. Jelöld ki és másold ki kézzel.":
    "Nu s-a putut copia în clipboard. Selectează-l și copiază-l manual.",
  "Biztosan törlöd? A szoba MINDENKINEK megszűnik, az üzenetekkel együtt. Ez nem vonható vissza.":
    "Sigur ștergi? Camera dispare pentru TOȚI, împreună cu mesajele. Acțiunea nu poate fi anulată.",
  "Biztosan kilépsz? A szoba a többieknek megmarad, te nem látod tovább.":
    "Sigur ieși? Camera rămâne pentru ceilalți, tu nu o mai vezi.",
  "A szoba megszűnt.":
    "Camera a fost desființată.",
  "Kiléptél a szobából.":
    "Ai ieșit din cameră.",
  "Nem fért el a tárolóban. Próbálj kisebb képet.":
    "Nu a încăput în spațiul de stocare. Încearcă o imagine mai mică.",
  "Mentve. Igazíthatod a kivágást, majd nyomd meg a Kész gombot.":
    "Salvat. Poți ajusta decuparea, apoi apasă butonul Gata.",
  "Mentve. Minden szobában ezen a néven látnak.":
    "Salvat. În toate camerele te văd cu acest nume.",
  "Ezt a nevet ebben a szobában már használja valaki. Adj meg másikat.":
    "Acest nume îl folosește deja cineva în această cameră. Alege altul.",
  "Ez a név szabad ebben a szobában.":
    "Acest nume e liber în această cameră.",
  "Ezt a nevet már használja valaki ebben a szobában.":
    "Acest nume îl folosește deja cineva în această cameră.",
  "Egy embert enged be, és 7 nap múlva lejár.":
    "Lasă să intre o persoană și expiră după 7 zile.",
  "PrepperPapa meghívó":
    "Invitație PrepperPapa",
  "Meghívlak a(z) „":
    "Te invit în camera „",
  "\" szobába:":
    "\":",
  "A linket a böngésző CÍMSORÁBA illeszd be, ne a keresőbe.":
    "Lipește linkul în BARA DE ADRESE a browserului, nu în motorul de căutare.",
  "A vágólapra másolva. Egy embert enged be, és 7 nap múlva lejár.":
    "Copiat în clipboard. Lasă să intre o persoană și expiră după 7 zile.",
  "Kép csatolva — koppints az elvetéshez":
    "Imagine atașată — atinge pentru a renunța",
  "A csatolt képet elvetettem.":
    "Am renunțat la imaginea atașată.",
  "Kép csatolva. A Küldéssel megy el.":
    "Imagine atașată. Pleacă la Trimitere.",
  "A módosítás elvetve.":
    "Modificarea a fost anulată.",
  "Módosítva.":
    "Modificat.",
  "Lejárt a módosítási idő (15 perc).":
    "Timpul de modificare a expirat (15 minute).",
  "A módosítás nem sikerült.":
    "Modificarea nu a reușit.",
  "Az üzenet nem ment el.":
    "Mesajul nu a plecat.",
  "Ez a meghívó lejárt. Kérj újat attól, aki küldte.":
    "Această invitație a expirat. Cere una nouă de la cel care a trimis-o.",
  "Ezt a meghívót már felhasználták. Kérj újat attól, aki küldte.":
    "Această invitație a fost deja folosită. Cere una nouă de la cel care a trimis-o.",
  "Ismeretlen meghívó. Lehet, hogy hiányzik a link vége.":
    "Invitație necunoscută. Poate lipsește sfârșitul linkului.",
  "A meghívót most nem sikerült beváltani. Van interneted?":
    "Invitația nu a putut fi folosită acum. Ai internet?",
  "Küldés: kiválasztasz egy képet, és a telefon hangként játssza le.":
    "Trimitere: alegi o imagine, iar telefonul o redă ca sunet.",
  "Vétel: a telefon hallgatja a hangot, és soronként rajzolja ki a képet.":
    "Recepție: telefonul ascultă sunetul și desenează imaginea rând cu rând.",
  "Kép választása: a telefon magától átméretezi a 320x256-os keretre.":
    "Alegerea imaginii: telefonul o redimensionează singur la cadrul de 320x256.",
  "Lejátszás: ugyanaz a gomb indít és állít. A WAV a hangot fájlba menti, ha máshogy akarod átvinni.":
    "Redare: același buton pornește și oprește. WAV salvează sunetul într-un fișier, dacă vrei să-l transferi altfel.",
  "Vétel indítása: ugyanaz a gomb indít és állít. Tartsd a telefont a hangszóró közelébe.":
    "Pornirea recepției: același buton pornește și oprește. Ține telefonul aproape de difuzor.",
  "Hangfájlból is megy, ha valaki felvételt küld.":
    "Merge și dintr-un fișier audio, dacă cineva trimite o înregistrare.",
  "A kész képet elmentheted, vagy törölheted és új vételbe kezdhetsz.":
    "Imaginea gata o poți salva, sau o poți șterge și începe o recepție nouă.",
  "Forralás":
    "Fierbere",
  "A Szoba zárt csoport, ami interneten át is elérhető: aki messze van, az is beszélget.":
    "Camera e un grup închis, accesibil și prin internet: și cine e departe poate conversa.",
  "A gemkapoccsal képet csatolsz, a háromszög jellel sürgősnek jelölöd — az pirossal emeli ki mindenkinél.":
    "Cu agrafa atașezi o imagine, cu semnul triunghi o marchezi urgentă — o evidențiază cu roșu la toți.",
  "Egy üzenetet hosszan nyomva tudsz rá emojival válaszolni, elmenteni, a sajátodat módosítani vagy törölni.":
    "Ținând apăsat un mesaj poți răspunde cu emoji, îl poți salva, iar pe al tău îl poți modifica sau șterge.",
  "A fejlécben a fogaskerék nyitja a szoba beállításait: értesítés, tagok, belépési kérelmek, a szoba kódja.":
    "În antet, rotița deschide setările camerei: notificări, membri, cereri de intrare, codul camerei.",
  "Az üzenetek szövege és képei végponttól végpontig titkosítva mennek: a szerver ezeket nem tudja elolvasni. A neveket, a profilképeket, a szoba képét, a reakciókat és az időpontokat viszont látja.":
    "Textul și imaginile mesajelor sunt criptate end-to-end: serverul nu le poate citi. Vede însă numele, pozele de profil, imaginea camerei, reacțiile și orele.",
  "Kezdőlap":
    "Pagina de start",
  "Előbb add meg a neved — így látnak a többiek a szobákban.":
    "Întâi introdu-ți numele — așa te văd ceilalți în camere.",
  "Tegyél fel egy profilképet — a neved mellett jelenik meg.":
    "Pune o fotografie de profil — apare lângă numele tău.",
  "(meg nem volt nyitva a szoba kepernyo)":
    "(ecranul camerei nu a fost încă deschis)",
  "Frissítés keresése…":
    "Caută actualizări…",
  "Főoldal":
    "Pagina principală",
  "Lámpa, vészfény":
    "Lanternă, lumină de urgență",
  "Vészjelzés fény/hang":
    "Semnal de urgență lumină/sunet",
  "A menüsor — ez mindig elérhető alul":
    "Bara de meniu — e mereu disponibilă jos",
  "Félkövér":
    "Aldin",
  "Dőlt":
    "Cursiv",
  "Felsorolás":
    "Enumerare",
  "Szerkesztés":
    "Editare",
  "Most jöhet két befúvás, ha vállalod. Ha nem, folytasd a nyomásokat szünet nélkül.":
    "Acum două insuflații, dacă îți asumi. Dacă nu, continuă compresiile fără pauză.",
  // ===== MENTETT uZENETEK a Profilon (2026-10-06) =====
  "Mentett üzenetek":
    "Mesaje salvate",
  "Amit egy szobában hosszan nyomva elmentettél. A mentés hivatkozás, nem másolat: ha a szerzője törli az üzenetet, innen is eltűnik.":
    "Ce ai salvat apăsând lung pe un mesaj într-o cameră. Salvarea este o referință, nu o copie: dacă autorul șterge mesajul, dispare și de aici.",
  // ===== FAX (SSTV): csak Martin M1 (Fonok dontese, 2026-10-06 21:00) =====
  "Martin M1 mód: 320×256 képpont, egy kép ~114 másodperc. Ez az idő magából az SSTV-ből jön — a kép soronként épül fel hangból, és nem gyorsítható.":
    "Modul Martin M1: 320×256 pixeli, o imagine durează ~114 secunde. Timpul vine din SSTV însuși — imaginea se construiește linie cu linie din sunet și nu poate fi accelerată.",
  "Küldéshez: a másik eszközön indíts SSTV-vevőt (a mi Fax-vevőnket, vagy pl. Robot36, MMSSTV) Martin M1 módban, és tartsd a hangszórót a mikrofonjához. A VIS-fejléc automatikus, a vevő magától felismeri a módot. Egy kép ~114 másodperc, és ez alatt a hangnak folyamatosnak kell lennie.":
    "Pentru trimitere: pe celălalt dispozitiv pornește un receptor SSTV (receptorul nostru Fax sau, de ex., Robot36, MMSSTV) în modul Martin M1 și ține difuzorul la microfonul lui. Antetul VIS este automat, receptorul recunoaște singur modul. O imagine durează ~114 secunde, iar sunetul trebuie să fie continuu pe toată durata.",
  // ===== SZOBA: szabalyzat, belepesi kerelem, meghivo-bevaltas, profil (2026-10-06) =====
  // A SZABALYZAT JOGI SZOVEG: Istvan irta magyarul, a forditas Marveene -- ATNEZESRE VAR.
  "Szoba-szabályzat és adatkezelés":
    "Regulamentul camerei și prelucrarea datelor",
  "A Szoba zárt, meghívásos közösségi tér.":
    "Camera este un spațiu comunitar închis, doar pe bază de invitație.",
  "Nem osztok meg jogsértő tartalmat, más személyes adatát, zaklató üzenetet vagy kereskedelmi, reklám tartalmat.":
    "Nu distribui conținut ilegal, date personale ale altora, mesaje de hărțuire sau conținut comercial ori publicitar.",
  "Tilos a fegyver, lőszer, robbanóanyag, kábítószer és bármilyen tiltott áru adásvétele, cseréje vagy közvetítése — ajánlat, kereslet és kapcsolatfelvétel formájában is.":
    "Este interzisă vânzarea, schimbul sau intermedierea de arme, muniție, explozivi, droguri și orice bunuri interzise — inclusiv sub formă de oferte, cereri și luare de contact.",
  "Tilos fegyver, lőszer, robbanóanyag vagy más veszélyes eszköz készítéséhez, átalakításához útmutatót megosztani, és tilos bármilyen bűncselekményre felbujtani vagy azt megszervezni. A felkészülés, a készletezés, az elsősegély és a rádiózás mint téma ettől természetesen megmarad.":
    "Este interzisă distribuirea de instrucțiuni pentru fabricarea sau modificarea armelor, munițiilor, explozivilor ori a altor dispozitive periculoase, precum și instigarea la infracțiuni sau organizarea lor. Pregătirea, stocarea, primul ajutor și radioul rămân, firește, subiecte permise.",
  "Amit beírok, a szoba többi tagja látja, és el is mentheti — a titkosítás a szervertől védi az üzenetet, a tagoktól nem.":
    "Ce scriu văd ceilalți membri și pot salva — criptarea protejează mesajul față de server, nu față de membri.",
  "A szobát létrehozó gazda felel a szobában folytatott tartalomért: ő dönt a belépésről, ő távolíthat el tagot, és más üzenetét is csak ő törölheti.": "Gazda care a creat camera răspunde pentru conținutul din ea: decide cine intră, poate elimina un membru, iar mesajele altora le poate șterge doar ea.",
  "Járművek": "Vehicule",
  "Helyszínek": "Locuri",
  "Telefonszám": "Număr de telefon",
  "Hajó": "Barcă",
  "A gazda bármikor eltávolíthat egy tagot, és bármikor törölheti a szobát — ez minden tag üzenetét visszavonhatatlanul megszünteti.":
    "Gazda poate elimina oricând un membru și poate șterge camera oricând — aceasta distruge ireversibil mesajele tuturor membrilor.",
  "Ha kilépek vagy eltávolítanak, a szerver több üzenetet nem ad ki nekem — a készülékemen már meglévők viszont olvashatók maradnak.":
    "Dacă plec sau sunt eliminat, serverul nu îmi mai trimite mesaje — dar cele aflate deja pe dispozitivul meu rămân lizibile.",
  "A szobában megosztott hely- vagy készlet-adat érzékeny: a saját biztonságomért én felelek.":
    "Datele despre locație sau provizii partajate în cameră sunt sensibile: de propria siguranță răspund eu.",
  "A szoba használata saját belátást és felelősséget kíván.":
    "Folosirea camerei cere propria judecată și responsabilitate.",
  "16 év alatti csak szülő vagy gondviselő hozzájárulásával csatlakozhat.":
    "Persoanele sub 16 ani se pot alătura doar cu acordul unui părinte sau tutore.",
  "A szerver tárolja: a szoba és a tagok nevét, a profilképet, az üzenetek TITKOSÍTOTT tartalmát, a képeket (max 500 kB), a reakciókat és az olvasási jelzéseket.":
    "Serverul stochează: numele camerei și ale membrilor, poza de profil, conținutul CRIPTAT al mesajelor, imaginile (max 500 kB), reacțiile și confirmările de citire.",
  "Ha meghívó linket kaptál, és az böngészőben nyílt meg, másold ide az egészet — innen az app váltja be.":
    "Dacă ai primit un link de invitație și s-a deschis în browser, lipește-l aici în întregime — aplicația îl va valida.",
  "Meghívó beváltása":
    "Validează invitația",
  "Eszköz-diagnosztika":
    "Diagnosticarea dispozitivului",
  "Értesítés erről a szobáról":
    "Notificare despre această cameră",
  "Ha valaki ír ide, jelezzen a telefonod — akkor is, ha az app be van zárva.":
    "Dacă scrie cineva aici, telefonul să te anunțe — chiar și când aplicația e închisă.",
  "Ez a másik út, és szándékosan marad meg. A meghívó link csak ott működik, ahol át is tudod küldeni. A kódot viszont be lehet mondani telefonon vagy rádión, le lehet írni egy papírra, le lehet adni morzével — nyolc karakter, és kész.":
    "Aceasta este cealaltă cale și rămâne intenționat. Un link de invitație funcționează doar acolo unde îl poți și trimite. Codul însă poate fi dictat la telefon sau prin stație, scris pe hârtie, transmis în Morse — opt caractere și gata.",
  "Aki a kódot ismeri, kérelmet küld; te döntöd el, beengeded-e. A jóváhagyással a te készüléked adja át neki a szoba kulcsát, a szerver nem látja.":
    "Cine știe codul trimite o cerere; tu decizi dacă îl lași să intre. La aprobare, dispozitivul tău îi predă cheia camerei — serverul nu o vede.",
  "Profil":
    "Profil",
  "Profilkép":
    "Poză de profil",
  "A neved mellett jelenik meg. Nem kötelező.":
    "Apare lângă numele tău. Opțional.",
  "Húzd a képet a körben, a csúszkával nagyíts. Csak a körben látszó rész kerül mentésre.":
    "Trage imaginea în cerc, mărește cu glisorul. Se salvează doar partea vizibilă în cerc.",
  // TELJES FORDITAS-KOR (Fonok, 2026-10-05 21:36: "az osszes forditas megtortenjen mindenhol")
  "Válaszd ki, mit szeretnél: adást vagy vételt.":
    "Alege ce vrei: emisie sau recepție.",
  "Morze kulcs":
    "Manipulator Morse",
  "Kopogás (rács-kód)":
    "Ciocănit (cod prin ciocănit)",
  "72h csomag":
    "Kit de 72 h",
  "Export":
    "Export",
  "Egészségügyi adatok":
    "Date medicale",
  "Nem kötelező, de ebből jön a vészkártyád, és ebből számoljuk, mi kell a csomagba.":
    "Nu este obligatoriu, dar de aici rezultă cardul tău de urgență și pe baza lui calculăm ce intră în kit.",
  "Lámpa-üzemidő":
    "Autonomia lanternei",
  "Meddig világít egy fejlámpa vagy zseblámpa":
    "Cât ține o lanternă frontală sau de mână",
  "Lámpa-üzemidő: meddig világít":
    "Autonomia lanternei: cât ține",
  "Lámpa vagy fejlámpa":
    "Lanternă sau frontală",
  "Üzemmód":
    "Mod",
  "LED / fényerő-osztály":
    "LED / clasă de luminozitate",
  "LED áramfelvétel (mA)":
    "Consumul LED (mA)",
  "Elem / akku típusa":
    "Tipul bateriei sau acumulatorului",
  "Kapacitás (mAh)":
    "Capacitate (mAh)",
  "Hány elem/akku (párhuzamosan összeadódó kapacitás)":
    "Câte baterii (în paralel capacitatea se adună)",
  "A gyártói adat a fényerő NÉVLEGES üzemideje — a valóságban a hideg, az elem életkora és a fokozatos elhalványulás ennél mindig kevesebbet ad. A saját megadásos számításnál a névleges kapacitásból 15 százalékot levonunk erre.":
    "Datele producătorului reprezintă autonomia NOMINALĂ la acea luminozitate; în realitate frigul, vechimea bateriei și estomparea treptată dau mereu mai puțin. În calculul manual scădem 15 la sută din capacitatea nominală pentru asta.",
  "Ezt látják a többiek":
    "Asta văd ceilalți",
  "minden szobában":
    "în toate camerele",
  ". Egy nevet használ a rendszer; a szobába lépéskor ezt kérdezi meg, ha még nincs megadva.":
    ". Sistemul folosește un singur nume; îl cere la intrarea în cameră, dacă nu a fost setat încă.",
  "Szalag ✕":
    "Bandă ✕",
  "Saját térképek":
    "Hărțile tale",
  // Igazitas finomhangolasa (Fonok kerese 2026-10-05 20:52)
  "Finomhangolás":
    "Reglaj fin",
  "Alaphelyzet":
    "Resetare",
  "A saját térkép a helyén van.":
    "Harta ta este la locul ei.",
  // UJ PONT felvevo a terkepen (Fonok kerese 2026-10-05 20:37)
  "Új pont":
    "Punct nou",
  "Menedék":
    "Adăpost",
  "Tűzrakó":
    "Vatră de foc",
  "Veszély":
    "Pericol",
  "Találkozó":
    "Punct de întâlnire",
  "A pont neve":
    "Numele punctului",
  "Koppints a térképre újra, ha arrébb tennéd. A pont csak a Mentéssel jön létre.":
    "Atinge harta din nou ca să îl muți. Punctul se creează doar la salvare.",
  // VAD- ES ROVAR-TAVOLTARTO (Fonok kerese 2026-10-05 20:16)
  "Vad- és rovar-távoltartó":
    "Dispozitiv de îndepărtare a animalelor și insectelor",
  "Vadak ellen":
    "Împotriva animalelor sălbatice",
  "Szúnyogok ellen":
    "Împotriva țânțarilor",
  "Vad-frekvencia":
    "Frecvență pentru animale",
  "Szúnyog-frekvencia":
    "Frecvență pentru țânțari",
  "Hz, lassan söprő hang. A legtöbb felnőtt ezt már nem hallja.":
    "Hz, un ton care baleiază lent. Majoritatea adulților nu îl mai aud.",
  "Hz, folyamatos hang.":
    "Hz, un ton continuu.",
  "AMIT EZ TUD ÉS AMIT NEM. A telefon hangszórója ilyen magas hangon lényegesen halkabb, mint a vészsípnál, és ezt a készüléked dönti el, nem az app. A szúnyogriasztó ultrahangnak nincs bizonyított hatása, több vizsgálat is eredménytelennek találta. Nagyobb vadnál a bizonyítottan működő eszköz a HANGOS, EMBERI FÜLNEK IS HALLHATÓ zaj, tehát az SOS lap vészsípja, nem ez. Ezt a két gombot akkor használd, ha ki akarod próbálni, és ne építs rá védelmet.":
    "CE POATE ȘI CE NU POATE. La un sunet atât de înalt difuzorul telefonului este considerabil mai slab decât la fluierul de urgență, iar asta o decide dispozitivul tău, nu aplicația. Ultrasunetele împotriva țânțarilor nu au efect dovedit; mai multe studii le-au găsit ineficiente. Împotriva animalelor mari mijlocul cu efect dovedit este zgomotul PUTERNIC, AUZIBIL ȘI PENTRU OM, adică fluierul de pe pagina SOS, nu acesta. Folosește aceste două butoane dacă vrei să le încerci și nu-ți baza protecția pe ele.",
  "Ne tartsd a füledhez, és ne irányítsd más fülére. Kutya, macska és más házi állat jóval magasabbra hall, mint az ember: nekik ez zavaró lehet akkor is, ha te nem hallod.":
    "Nu îl ține la ureche și nu îl îndrepta spre urechea altcuiva. Câinii, pisicile și alte animale de companie aud mult mai sus decât omul: asta îi poate deranja chiar dacă tu nu auzi nimic.",
  // TERKEP mester-gomb es funkcio-tabla (Fonok kerese 2026-10-05 20:11)
  "Térkép-funkciók":
    "Funcțiile hărții",
  "Helyzet és pontok":
    "Poziție și puncte",
  "Mérés":
    "Măsurare",
  "Térkép és tároló":
    "Hartă și stocare",
  // TERKEP lap: data-i18n kulcsok, amiknek SEM a PP_SZOTAR-ban, SEM itt nem volt forditasa
  "Vissza":
    "Înapoi",
  "Kész":
    "Gata",
  "Tárolt térkép törlése":
    "Șterge harta salvată",
  "Saját térkép hozzáadása":
    "Adaugă harta ta",
  "Saját térkép: fotózz le egy turista- vagy katonai térképet, és igazítsd rá az alaptérképre 2–3 ismert pont (falu, csúcs, útkereszteződés) párosításával. A kép rétegként az alaptérkép fölé kerül, átlátszósága állítható, és a készüléken tárolódik, térerő nélkül is megvan. A rajzolt, nem méretarányos térképeknél az igazítás közelítő. A pontjaidat ugyanúgy teszed le, mint eddig: valódi koordinátán tárolódnak, a rétegtől függetlenül.":
    "Harta ta: fotografiază o hartă turistică sau militară și aliniază-o pe harta de bază potrivind 2-3 puncte cunoscute (un sat, un vârf, o intersecție). Imaginea devine un strat peste harta de bază, transparența se poate regla, iar se salvează pe dispozitiv, deci o ai și fără semnal. Pe hărțile desenate, fără scară, alinierea este aproximativă. Punctele le pui ca până acum: se salvează la coordonate reale, independent de strat.",
  // TERKEP lebego gomb-panel (Fonok kerese 2026-10-05 19:56)
  "Gombok elrejtése":
    "Ascunde butoanele",
  "Gombok megjelenítése":
    "Arată butoanele",
  // FAX kep-igazito (Fonok kerese 2026-10-05 19:50): forgatas + zoom + tolas a kereten belul
  "Ez nem papír-fax: egy képet küld hangként, szabványos SSTV módban, amit bármely SSTV-vevő megért. A keret ezért kötött: 320x256 képpont, fekvő. Egy gépelt A4-es laphoz ez kevés, de egy rövid, nagy betűs kézírás olvashatóan átmegy.":
    "Acesta nu este un fax pe hârtie: trimite o imagine ca sunet, în mod SSTV standard, pe care orice receptor SSTV îl înțelege. De aceea cadrul este fix: 320x256 pixeli, orizontal. Pentru o pagină A4 dactilografiată este prea puțin, dar o notă scurtă scrisă de mână mare ajunge lizibil.",
  "Forgatás":
    "Rotește",
  "Teljes kép":
    "Imaginea întreagă",
  "Nagyítás":
    "Zoom",
  "A keretbe eső rész:":
    "Partea din cadru:",
  "képpont a forrásból":
    "pixeli din original",
  "Húzd a képet a helyére, két ujjal nagyíthatsz, a Forgatás kilencven fokonként fordít. Amit a keretben látsz, pontosan az megy el. A Forgatás és a Teljes kép újra beilleszti a képet a keretbe, onnan tudsz belezoomolni.":
    "Trage imaginea la locul ei, apropie două degete pentru a mări, iar Rotește o întoarce cu nouăzeci de grade. Ce vezi în cadru este exact ce se trimite. Rotește și Imaginea întreagă încadrează din nou imaginea, iar de acolo poți mări.",
  // FAX (SSTV) -- allo kep kezelese + a ket fax lap feliratai, 2026-10-05 (Fonok: 'ne vesszen el ... egy csomo adat')
  "Fax küldés":
    "Trimitere fax",
  "Fax vétel":
    "Recepție fax",
  "Álló kép":
    "Imagine verticală",
  "Elforgatva, teljes felbontás":
    "Rotită, rezoluție completă",
  "Egész kép, fekete sávokkal":
    "Imaginea întreagă, cu benzi negre",
  "Kitöltés, a széleket levágja":
    "Umplerea cadrului, cu tăierea marginilor",
  "Álló kép elforgatva, teljes felbontás:":
    "Imagine verticală rotită, rezoluție completă:",
  "A keretre vágva, a széleit levágta:":
    "Tăiată la cadru, marginile eliminate:",
  "Egész kép, fekete sávokkal:":
    "Imaginea întreagă, cu benzi negre:",
  "Egész kép a keretben:":
    "Imaginea întreagă în cadru:",
  "képpont a 320×256-os keretből":
    "pixeli din cadrul de 320×256",
  "A saját vételünk egyelőre csak Martin M1-et fejt vissza. A többi mód adásra kész, és egy szabványos SSTV-vevő (Robot36, MMSSTV) veszi, de ezt a telefonod nem tudja magának visszaolvasni.":
    "Receptorul nostru decodează deocamdată doar Martin M1. Celelalte moduri sunt pregătite pentru emisie și un receptor SSTV standard (Robot36, MMSSTV) le primește, dar telefonul tău nu le poate reciti singur.",
  "A fax kerete fekvő, 320x256 képpont, ezt a mód szabványa adja. Álló képnél az elforgatás használja ki a legjobban a keretet, tehát ott veszik el a legkevesebb részlet, a vevő oldalán viszont fordítsd el a telefont. A kitöltés levágja a kép tetejét és alját. Fekvő képnél mindhárom beállítás ugyanazt adja.":
    "Cadrul faxului este orizontal, 320x256 pixeli, așa prevede standardul modului. La o imagine verticală rotirea folosește cel mai bine cadrul, deci se pierd cele mai puține detalii, dar la recepție rotește telefonul. Umplerea taie partea de sus și de jos a imaginii. La o imagine orizontală toate trei setările dau același rezultat.",
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
  "Nagy gombok, szalag, memória — kesztyűben és sötétben is": "Taste mari, bandă, memorie — și cu mănuși, și pe întuneric",

  // --- ATTRIBUTUM-SZOVEGEK (2026-08-26, Istvan). Thomas merte az angol keszlet
  // felvetele kozben: a `placeholder`/`title`/`aria-label` magyarul allt. A fordito
  // MAR bejarja az attributumokat -- ezek a kulcsok hianyoztak a szotarbol.
  // A `pl.` MAGYAR roviditès: nyelvenkent mas (e.g. / z. B. / p. ej. / np. / ex. / напр.),
  // es a tizedesjel is (`1013.2` angolul, `1013,2` a tobbin).
  "Keresés a tételek közt": "Caută printre articole",
  "Mégse": "Anulează",
  "Szalag ürítése": "Golește banda",
  "Visszavonás": "Anulează ultima acțiune",
  "a tétel neve": "numele articolului",
  "az eszköz neve": "numele dispozitivului",
  "hány darab": "câte bucăți",
  "kalória egységenként": "calorii pe unitate",
  "mennyiség": "cantitate",
  "sor törlése": "șterge rândul",
  "Új lap": "Foaie nouă",
  "Írd be a szöveget, majd koppints a lapra": "Scrie textul, apoi atinge foaia",
  "pl. 15": "ex. 15",
  "pl. 18": "ex. 18",
  "pl. 85": "ex. 85",
  "pl. 500": "ex. 500",
  "pl. 47.4979, 19.0402": "ex. 47.4979, 19.0402",
  "pl. A Rh+": "ex. A Rh+",
  "pl. Anna": "ex. Anna",
  "pl. 1013,2": "ex. 1013,2",
  "pl. 6,5": "ex. 6,5",
  "pl. Feri": "ex. Radu",
  "pl. Otthon": "ex. Acasă",
  "pl. SOS Fonok": "ex. SOS Tata",
  "pl. inzulin": "ex. insulină",

  // --- NYOMTATOTT VESZKARTYA (2026-08-26, Istvan). Thomas merte: a nyomtatott lap
  // angol nyelven is vegig MAGYAR volt. A lap KULON ablakban keszul, tehat a DOM-bejaro
  // fordito nem eri el -- a szoveg a felepiteskor fordul (`ppForditSzoveg` a cardNyomtat-ban).
  "VÉSZKÁRTYA": "CARD DE URGENȚĂ",
  "CSALÁDI VÉSZKÁRTYA": "CARD DE URGENȚĂ AL FAMILIEI",
  "Születés:": "Naștere:",
  "Allergia:": "Alergii:",
  "Kontakt:": "Contact:",
  "személyes QR": "QR personal",
  "családi QR": "QR familial",
  "allergia:": "alergie:",
  "gyógyszer:": "medicație:",
  "A böngésző letiltotta az új ablakot. Engedélyezd, és próbáld újra.": "Browserul a blocat fereastra nouă. Permite-o și încearcă din nou.",
  "Nincs profil, amiből kártyát csinálhatnék. A Háztartásnál vedd fel őket.": "Nu există niciun profil din care să fac un card. Adaugă-i la Gospodărie.",

  "Otthon": "Acasă",
  "Nyaraló": "Casă de vacanță",
  "Hétvégi ház": "Casă de weekend",
  "Garázs": "Garaj",
  "Lakókocsi": "Rulotă",
  "Jármű": "Vehicul",
  "Rejtési pont": "Ascunzătoare",
  "Egyéb": "Altele",
  "egyéb": "altele",
  "Gépjármű": "Autovehicul",
  "Autó": "Mașină",
  "Autós": "Cu mașina",
  "Motorkerékpár": "Motocicletă",
  "Elektromos bicikli": "Bicicletă electrică",
  "Elektromos roller": "Trotinetă electrică",
  "Utánfutó": "Remorcă",
  "(motoros)": "(cu motor)",
  "Megnevezés": "Denumire",
  "Név": "Nume",
  "A neved": "Numele tău",
  "Törlés": "Șterge",
  "Mentés": "Salvează",
  "Mégsem": "Anulează",
  "Hozzáadás": "Adaugă",
  "Küldés": "Trimite",
  "Kilépés": "Ieșire",
  "Csatlakozás": "Conectare",
  "Csatlakozz": "Alătură-te",
  "Nincs": "Niciunul",
  "Számold ki": "Calculează",
  "Kategória": "Categorie",
  "Cím": "Adresă",
  "Adat": "Date",
  "Beállítások": "Setări",
  "Feloldás": "Deblochează",
  "A feloldás": "Deblocarea",
  "Zárolás": "Blochează",
  "Értesítés": "Notificare",
  "Értesítés bekapcsolása": "Activează notificările",
  "Beolvasás kamerával": "Scanează cu camera",
  "Betöltés fájlból": "Încarcă din fișier",
  "Fájl kiválasztása és mentés": "Alege fișierul și salvează",
  "Kép mentése": "Salvează imaginea",
  "Kép választása": "Alege imaginea",
  "Betűsor másolása": "Copiază șirul de caractere",
  "Hangfájlból": "Din fișier audio",
  "English": "English",
  "Kommunikáció": "Comunicare",
  "Morze": "Morse",
  "Fax (SSTV)": "Fax (SSTV)",
  // 2026-10-19 (kartya 43a80047): "(SSTV)" kivetve; a feloldas a fiokhoz kotott, max. ket keszulek
  "Használati útmutató": "Ghid de utilizare",
  "Fax": "Fax",
  "Fax: kép átküldése hangban, rádión is. Ugyanaz a gomb indít és állít.": "Fax: trimiterea unei imagini în sunet, și prin radio. Același buton pornește și oprește.",
  "A kód a fiókodhoz tartozik, és legfeljebb két készüléken használhatod. A feloldott modulok offline is működnek, semmi nem zár le. Ha kódot kaptál, itt válthatod be.": "Codul aparține contului tău și îl poți folosi pe cel mult două dispozitive. Modulele deblocate funcționează și offline, nimic nu se blochează. Dacă ai primit un cod, aici îl poți valorifica.",
  "Feloldva ✓ A kód a fiókodhoz tartozik, legfeljebb két készüléken.": "Deblocat ✓ Codul aparține contului tău, pe cel mult două dispozitive.",
  "Üzenet": "Mesaj",
  "Hangüzenet": "Mesaj vocal",
  "Digitális üzenet": "Mesaj digital",
  "Helyi szoba": "Cameră locală",
  "Tudástár": "Bază de cunoștințe",
  "Vészkártya": "Card de urgență",
  "Titkos QR": "QR secret",
  "Biblia": "Biblia",
  "Imádság": "Rugăciune",
  "Háztartás": "Gospodărie",
  "Alapismeretek": "Noțiuni de bază",
  "Élelmiszer és víz": "Alimente și apă",
  "Egészségügy": "Sănătate",
  "Háborús övezet": "Zonă de război",
  "SOS": "SOS",
  "Alaptérkép": "Hartă de bază",
  "Irattárca": "Portofel de documente",
  "Dokumentum": "Document",
  "Dokumentumok · nyílt (QR)": "Documente · deschise (QR)",
  "Dokumentumok · PIN-zár": "Documente · blocare PIN",
  "Dokumentumok és adatmentés": "Documente și copie de siguranță",
  "Belépési és helyreállítási kódok": "Coduri de acces și de recuperare",
  "Belépési kérelmek": "Cereri de aderare",
  "Gyakorlónap": "Zi de exercițiu",
  "Csomaglista személyre és útra": "Listă de bagaje pe persoană și pe drum",
  "EDC: a mindennap magadnál hordott felszerelés": "EDC: echipamentul purtat zilnic asupra ta",
  "Családtagok": "Membrii familiei",
  "Családtag hozzáadása": "Adaugă membru al familiei",
  "Családtag törlése": "Șterge membrul familiei",
  "Családtagok · állatok · helyszínek": "Familie · animale · locuri",
  "Családtagok vészkártyái": "Cardurile de urgență ale familiei",
  "Családi kártya (egy QR)": "Card de familie (un QR)",
  "Családi jelszó": "Parolă de familie",
  "Háziállatok": "Animale de companie",
  "Háziállat a felkészülésben": "Animalul de companie în pregătire",
  "+ Új háziállat": "+ Animal nou",
  "+ Új helyszín": "+ Loc nou",
  "Állat hozzáadása": "Adaugă animal",
  "Állat törlése": "Șterge animalul",
  "Faj": "Specie",
  "felnőtt férfi": "bărbat adult",
  "felnőtt nő": "femeie adultă",
  "gyermek": "copil",
  "csecsemő": "sugar",
  "fiú": "băiat",
  "haszonállat": "animal de fermă",
  "Helyszín hozzáadása": "Adaugă loc",
  "Helyszín törlése": "Șterge locul",
  "Helyszínek készültsége": "Gradul de pregătire al locurilor",
  "Ingatlanok és helyszínek": "Imobile și locuri",
  "Emelet": "Etaj",
  "Alapterület (m²)": "Suprafață (m²)",
  "GPS koordináta": "Coordonate GPS",
  "Hány napra": "Pentru câte zile",
  "Kalória": "Calorii",
  "Meddig elég az élelmed, és mennyi hiányzik": "Cât timp îți ajunge mâncarea și cât lipsește",
  "Rádió-hatótáv": "Rază radio",
  "Meddig hallanak a sávtól és a tereptől függően": "Cât de departe te aud, în funcție de bandă și teren",
  "Kalória: meddig elég az élelmed": "Calorii: cât timp îți ajunge mâncarea",
  "Hány felnőtt?": "Câți adulți?",
  "Hány gyerek? (kb. 12 év alatt)": "Câți copii? (sub aproximativ 12 ani)",
  "Mit csináltok ezekben a napokban?": "Ce veți face în acele zile?",
  "Mi van a készletben?": "Ce ai în rezervă?",
  "+ Saját tétel hozzáadása": "+ Adaugă propriul articol",
  "Vagy add meg egyben, ha tudod": "Sau dă totalul, dacă îl știi",
  "összes kilokalória (üresen hagyhatod)": "total kilocalorii (poate rămâne gol)",
  "Mi ez? (pl. szárított hús)": "Ce este? (ex. carne uscată)",
  "kcal/egység": "kcal/unitate",
  "mennyi": "cât",
  "bent maradunk, keveset mozgunk": "stăm în casă, ne mișcăm puțin",
  "normál napi ügyintézés": "zi normală de treburi",
  "fizikai munka, gyaloglás": "muncă fizică, mers pe jos",
  "Rizs": "Orez",
  "Száraztészta": "Paste uscate",
  "Liszt": "Făină",
  "Bab, lencse, borsó": "Fasole, linte, mazăre",
  "Zabpehely": "Fulgi de ovăz",
  "Cukor, méz": "Zahăr, miere",
  "Olaj, zsír": "Ulei, grăsime",
  "Húskonzerv (400 g)": "Conservă de carne (400 g)",
  "Zöldségkonzerv (400 g)": "Conservă de legume (400 g)",
  "Tejpor": "Lapte praf",
  "Keksz, kétszersült": "Biscuiți, pesmet",
  "Csokoládé, müzliszelet": "Ciocolată, baton de cereale",
  "Rádió: meddig hallanak": "Radio: cât de departe te aud",
  "Milyen sávon?": "Ce bandă?",
  "Adóteljesítmény (watt)": "Putere de emisie (wați)",
  "Milyen terepen?": "Ce teren?",
  "Milyen magasan van az antennád? (méter)": "Cât de sus e antena ta? (metri)",
  "És a másiké?": "Și a celuilalt?",
  "Mekkora távolságot szeretnél áthidalni? (km, üresen hagyhatod)": "Ce distanță ai vrea să acoperi? (km, poate rămâne gol)",
  "nyílt, sík terep": "teren deschis, plat",
  "dombos, hullámos": "deluros, ondulat",
  "erdő, sűrű növényzet": "pădure, vegetație deasă",
  "város, beépített": "oraș, construit",
  "hegyvidék, völgyben": "munte, în vale",
  "(db)": "(buc.)",
  "(kg)": "(kg)",
  "(liter/kg)": "(litru/kg)",
  "(egység)": "(unitate)",
  "Hány napra kell?": "Pentru câte zile este nevoie?",
  "Hány napra tervezel itt": "Pentru câte zile plănuiești aici",
  "Vércsoport": "Grupă de sânge",
  "Allergia": "Alergie",
  "Allergiák": "Alergii",
  "Gyógyszer": "Medicament",
  "Gyógyszerek": "Medicamente",
  "Érszorító": "Garou",
  "Elsősegélykészlet": "Trusă de prim ajutor",
  "Glutén": "Gluten",
  "Diófélék": "Nuci",
  "Földimogyoró": "Arahide",
  "Hal / tenger gyümölcsei": "Pește / fructe de mare",
  "Darázs- és méhcsípés": "Înțepătură de viespe și albină",
  "Kullancsriasztó": "Soluție împotriva căpușelor",
  "Naptej": "Cremă de protecție solară",
  "CPAP": "CPAP",
  "Bébiétel": "Mâncare pentru bebeluși",
  "Állateledel": "Hrană pentru animale",
  "Tisztálkodó eszközök": "Articole de igienă",
  "Női higiéniai termékek": "Produse de igienă feminină",
  "Kannás víz": "Apă în canistră",
  "Palackos víz": "Apă îmbuteliată",
  "Száraz élelmiszer": "Alimente uscate",
  "Konzerv": "Conserve",
  "MRE pack": "Pachet MRE",
  "Romlandó": "Perisabil",
  "Hosszú távú": "Pe termen lung",
  "30 napos": "30 de zile",
  "72 órás": "72 de ore",
  "Menekülőzsák": "Rucsac de evacuare",
  "Téli túra": "Tură de iarnă",
  "Vízi túra": "Tură pe apă",
  "Hálózsák": "Sac de dormit",
  "Derékalj": "Izopren",
  "Párna": "Pernă",
  "Sátor/sátorlap": "Cort/prelată",
  "Fejlámpa": "Lanternă frontală",
  "Kézilámpa": "Lanternă de mână",
  "Munkalámpa": "Lampă de lucru",
  "Szikravető": "Amnar",
  "Gyújtós": "Vreascuri",
  "Főzőfej": "Arzător de gătit",
  "Spiritusz égő": "Arzător cu spirt",
  "Hobokályha": "Sobă hobo",
  "Fa tüzelésű kályha": "Sobă cu lemne",
  "Dízel kályha": "Sobă cu motorină",
  "Vegyi melegítő": "Încălzitor chimic",
  "Ágyfűtés": "Încălzirea patului",
  "Gázpalack": "Butelie de gaz",
  "Tüzifa": "Lemne de foc",
  "Fűtőolaj": "Păcură",
  "Fa, kályhában": "Lemne, în sobă",
  "Hideg időjárási öltözet": "Îmbrăcăminte pentru vreme rece",
  "Meleg időjárási öltözet": "Îmbrăcăminte pentru vreme caldă",
  "EDC csomag felszerelései": "Echipamentul pachetului EDC",
  "Víztisztító tabletta": "Tablete de purificare a apei",
  "Vízszűrő": "Filtru de apă",
  "Ciszterna": "Cisternă",
  "Esővíz": "Apă de ploaie",
  "Esővíz: mennyi gyűlik össze": "Apă de ploaie: cât se adună",
  "Hűtő": "Frigider",
  "Áram": "Curent",
  "Áramforrás": "Sursă de curent",
  "Áram: mit tudsz róla üzemeltetni, és meddig": "Curent: ce poți alimenta cu el și cât timp",
  "Powerbank": "Baterie externă",
  "Power station": "Stație de alimentare",
  "Tank / akku": "Rezervor / acumulator",
  "Kapacitás (Wh/db)": "Capacitate (Wh/buc.)",
  "Autó-/szünetmentes akku 100 Ah": "Acumulator auto/UPS 100 Ah",
  "Anker 521 PowerHouse (256 Wh)": "Anker 521 PowerHouse (256 Wh)",
  "Bluetti AC200L (2048 Wh)": "Bluetti AC200L (2048 Wh)",
  "Bluetti EB70 (716 Wh)": "Bluetti EB70 (716 Wh)",
  "EcoFlow Delta 2 (1024 Wh)": "EcoFlow Delta 2 (1024 Wh)",
  "EcoFlow River 2 (256 Wh)": "EcoFlow River 2 (256 Wh)",
  "EcoFlow River 2 Pro (768 Wh)": "EcoFlow River 2 Pro (768 Wh)",
  "Szolárpanel": "Panou solar",
  "Üzemanyag": "Combustibil",
  "Üzemanyag (mobilitás)": "Combustibil (mobilitate)",
  "Üzemanyag-készlet": "Rezervă de combustibil",
  "benzin": "benzină",
  "dízel": "motorină",
  "Fogyasztás (/100 km)": "Consum (/100 km)",
  "Most mennyi van benne": "Cât este acum în el",
  "tele": "plin",
  "háromnegyed": "trei sferturi",
  "fele": "jumătate",
  "negyede": "un sfert",
  "ötöde": "o cincime",
  "tizede": "o zecime",
  "üres": "gol",
  "Fűtés": "Încălzire",
  "Fűtés áram nélkül is?": "Încălzire și fără curent?",
  "Fűtés hatásfoka (%)": "Randamentul încălzirii (%)",
  "Fűtés: mennyi tüzelő kell": "Încălzire: cât combustibil este necesar",
  "Fűtött terület (m²)": "Suprafață încălzită (m²)",
  "Átlagos (100 W/m²)": "Medie (100 W/m²)",
  "igen (kandalló, kályha, fa)": "da (șemineu, sobă, lemne)",
  "igen (kút kézi szivattyúval, ciszterna)": "da (fântână cu pompă manuală, cisternă)",
  "Energia (kcal/100 g)": "Energie (kcal/100 g)",
  "Emelkedés összesen (m)": "Diferență de nivel totală (m)",
  "5% nátrium-hipoklorit (a szokásos háztartási)": "5% hipoclorit de sodiu (cel obișnuit, de uz casnic)",
  "10% (ipari)": "10% (industrial)",
  "A hipó töménysége (nézd meg az üvegen)": "Concentrația clorului (verifică pe sticlă)",
  "WPM": "WPM",
  "Hz": "Hz",
  "Hang:": "Sunet:",
  "Hangerő:": "Volum:",
  "Hangmagasság:": "Înălțimea sunetului:",
  "Fényerő:": "Luminozitate:",
  "Fehér": "Alb",
  "hang és fény, hálózat nélkül": "sunet și lumină, fără rețea",
  "Vétel sebesség (magától követi a jelet, kézzel is állíthatod):": "Viteza de recepție (urmărește singură semnalul, o poți seta și manual):",
  "Vétel-sebesség: magától követi a vett Morze tempóját, és a csúszkát is odaállítja. Kézzel is állíthatod, onnan követi tovább.": "Viteza de recepție: urmărește singură ritmul semnalului Morse recepționat și mută cursorul acolo. O poți seta și manual; de acolo urmărește mai departe.",
  "Vétel sebesség (állítsd a vett Morze tempójához):": "Viteza de recepție (potrivește-o cu ritmul semnalului Morse recepționat):",
  "Érzékenység (balra érzékenyebb, jobbra szigorúbb a zajra):": "Sensibilitate (spre stânga mai sensibil, spre dreapta mai sever cu zgomotul):",
  "Ha nem indul a kamera.": "Dacă nu pornește camera.",
  "Internet nem kell.": "Internetul nu este necesar.",
  "A szoba képe": "Imaginea camerei",
  "A szoba kódja": "Codul camerei",
  "Helyzet (GPS)": "Poziție (GPS)",
  "Helyzetem küldése": "Trimite poziția mea",
  "A mostani helyzetem": "Poziția mea actuală",
  "Iratai az Irattárcában": "Documentele sale în Portofelul de documente",
  "Amikor akut helyzetben kell döntened": "Când trebuie să decizi într-o situație acută",
  "Amikor éjszaka nem hagy aludni a félelem": "Când noaptea frica nu te lasă să dormi",
  "Gyerekekkel és idősekkel": "Cu copii și vârstnici",
  "Amit a rendszer garantál:": "Ce garantează sistemul:",
  "Amit nem garantál:": "Ce nu garantează:",
  "Amit vészhelyzetben tudni kell róla (nem kötelező)": "Ce trebuie știut despre ea în caz de urgență (neobligatoriu)",
  "Ez a közös titok. Aki ismeri, az olvassa a kódjaidat, aki nem, annak értelmetlen betűsor. Add meg ugyanazt a jelszót azon a készüléken is, amelyik olvasni fogja.": "Acesta este secretul comun. Cine îl cunoaște îți citește codurile; pentru ceilalți rămâne un șir de caractere fără sens. Introdu aceeași parolă și pe dispozitivul care le va citi.",
  "PIN beállítása": "Setează PIN-ul",
  "Állíts be egy PIN-t (4-6 számjegy)": "Setează un PIN (4-6 cifre)",
  "Biblia letöltése": "Descarcă Biblia",
  "Ezen a készüléken még nincs feloldott modul.": "Pe acest dispozitiv nu există încă niciun modul deblocat.",
  "Ezt látják a többiek. Ugyanaz, mint a helyi szobában.": "Asta văd ceilalți. La fel ca în camera locală.",
  "Előbb vedd fel a Háztartásnál, kik vagytok — a lista onnan jön.": "Înscrie mai întâi la Gospodărie cine sunteți — lista vine de acolo.",
  "Előbb vedd fel a Háztartásnál, kik vagytok. A lista abból dolgozik.": "Înscrie mai întâi la Gospodărie cine sunteți. Lista lucrează cu aceste date.",
  "Előbb vegyél fel helyszínt a Háztartásnál. Alapesetben az otthon az első.": "Adaugă mai întâi un loc la Gospodărie. În mod implicit casa este prima.",
  "A törlés itt van, nem a listában — hogy ne lehessen véletlenül megnyomni.": "Ștergerea este aici, nu în listă — ca să nu poată fi apăsată din greșeală.",
  "A mentős beolvashatja. Az adat a QR-ben van, nem megy szerverre.": "Paramedicul îl poate scana. Datele sunt în codul QR și nu ajung pe niciun server.",
  "Egészségügyi vészhelyzeti adatok. A mentős beolvashatja (nyílt QR). Helyben tárolva.": "Date medicale de urgență. Paramedicul le poate scana (QR deschis). Stocate local.",
  "Egészségügyi adatok (nem kötelező, de ebből tudjuk, mi kell a csomagba)": "Date medicale (neobligatoriu, dar din ele știm ce trebuie pus în pachet)",
  "Allergia (koppints, amennyi kell — a mezőbe írja be, ott át is írhatod)": "Alergie (atinge de câte ori este nevoie — se scrie în câmp, unde poți și modifica)",
  "Kié (üresen hagyva: közös)": "Al cui este (lăsat gol: comun)",
  "Melyik készlethez tartozik (több is lehet)": "Cărei rezerve îi aparține (pot fi mai multe)",
  "Tárolási hely (több is lehet)": "Loc de depozitare (pot fi mai multe)",
  "A koordináta többféle alakban mehet:": "Coordonatele pot fi date în mai multe formate:",
  "Három rövid jel, szünet, ismétlés — ez a nemzetközi vészjelzés. Hangosabban és tovább hallatszik, mint a kiabálás.": "Trei semnale scurte, pauză, repetare — acesta este semnalul internațional de urgență. Se aude mai tare și mai departe decât strigătul.",
  "A kód alatti betűsor UGYANEZ az adat. Faxon a képet küldd, morzével a betűsort.": "Șirul de caractere de sub cod conține ACELEAȘI date. Prin fax trimite imaginea, prin Morse șirul de caractere.",
  "A lejátszás ugyanazzal a gombbal indul és áll. Nincs külön Állj gomb — ha újra rákoppintasz, leáll.": "Redarea pornește și se oprește cu același buton. Nu există un buton Stop separat — dacă atingi din nou, se oprește.",
  "A wattóra és a watt nem ugyanaz, és ezt szokás összekeverni.": "Wattora și wattul nu sunt același lucru, iar acestea se confundă adesea.",
  "A wattóra (Wh) azt mondja meg, MEDDIG megy; a watt (W) azt, hogy MIT tudsz egyáltalán ráakasztani. Egy 2000 wattórás gép sem indít el egy 2000 wattos vízforralót, ha csak 600 wattot tud leadni — akkor sem, ha tele van.": "Wattora (Wh) spune CÂT TIMP funcționează; wattul (W) spune CE poți conecta în general. Nici un aparat de 2000 de wattore nu pornește un fierbător de 2000 de wați dacă poate livra doar 600 de wați — nici măcar plin.",
  "Helyszínenként: kik érkeznek oda, hány napra, és elég-e az ott lévő víz és élelem.": "Pentru fiecare loc: cine ajunge acolo, pentru câte zile și dacă ajung apa și hrana de acolo.",
  "Telepítés a kezdőképernyőre": "Adaugă la ecranul principal",
  "Nemzetközi vészjelzés Morzéval: SOS (··· ─── ···), folyamatosan ismételve. Fénnyel, hang nélkül — a hangjelzés lent külön van, mert az mást tud.": "Semnal internațional de urgență în Morse: SOS (··· ─── ···), repetat continuu. Cu lumină, fără sunet — semnalul sonor este separat mai jos, pentru că face altceva.",
  "TEKERD FEL A HANGERŐT. Az app a telefon hangerejét nem tudja felülírni, tehát ha az le van halkítva, a síp is halk lesz.": "DĂ VOLUMUL LA MAXIM. Aplicația nu poate suprascrie volumul telefonului, deci dacă acesta este dat încet, și fluierul va fi slab.",
  "Hz. A 3-4 kHz a legjobban hallható tartomány, ezért sípol ott a mentőmellény sípja is.": "Hz. 3-4 kHz este intervalul cel mai bine auzit, de aceea fluieră acolo și fluierul vestei de salvare.",
  "Percenként 110 koppanás. Nyomd a mellkas közepét a koppanás ütemére, körülbelül 5-6 centit, és hagyd teljesen visszaemelkedni.": "110 bătăi pe minut. Apasă mijlocul toracelui în ritmul bătăilor, aproximativ 5-6 centimetri, și lasă-l să revină complet.",
  "Ez ütemadó, nem oktatás. Mentő: 112. Ha van a közelben defibrillátor, valaki hozza, de te ne hagyd abba.": "Acesta este un metronom, nu un curs. Ambulanța: 112. Dacă există un defibrilator în apropiere, să îl aducă cineva, dar tu nu te opri.",
  "— egységes európai segélyhívó (mentő, tűzoltó, rendőrség). Térerő nélkül is hívható, ha van bármilyen hálózat a közelben.": "— numărul unic european de urgență (ambulanță, pompieri, poliție). Poate fi apelat și fără semnal propriu, dacă există orice rețea în apropiere.",
  "A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan. Töltsd ki a": "Cardul tău de urgență (grupă de sânge, alergie, medicamente, contact) apare aici rapid. Completează-l în secțiunea",
  "szekcióban.": ".",
  "Írj be szöveget, játszd le hangként vagy fénnyel, vagy vegyél kamerával/mikrofonnal.": "Scrie un text, redă-l ca sunet sau lumină, ori recepționează-l cu camera/microfonul.",
  "Próbaidő: még 14 nap. A lejárat után sem áll le semmi.": "Perioadă de probă: încă 14 zile. Nici după expirare nu se oprește nimic.",
  "Szöveg": "Text",
  "Sebesség:": "Viteză:",
  "Ismétlés (folyamatos)": "Repetare (continuă)",
  "Lejátszás": "Redare",
  "Villogtatás (Lejátszás és SOS is):": "Clipire (și la Redare, și la SOS):",
  "Képernyő": "Ecran",
  "Vaku": "Bliț",
  "Mindkettő": "Ambele",
  "Vétel: KAMERA (fény → szöveg)": "Recepție: CAMERĂ (lumină → text)",
  "Kamera vétel indítása": "Pornește recepția cu camera",
  "Nagyítás (távoli fényhez):": "Zoom (pentru lumină îndepărtată):",
  "Indítsd, és irányítsd a kamerát egy Morzét villogó fényre (pl. egy másik telefon vakuja). A háttér legyen sötét, a fény a kép KÖZEPÉN. A fény-küszöb magától hangolódik; a \"Fényerő\" sáv és a lámpa mutatja, mit lát. A \"Vétel sebesség\" csúszkát állítsd a vett Morze tempójához, amíg tisztán jönnek a betűk.": "Pornește și îndreaptă camera spre o lumină care clipește în Morse (de exemplu blițul altui telefon). Fundalul să fie întunecat, iar lumina în MIJLOCUL imaginii. Pragul de lumină se reglează singur; bara \"Luminozitate\" și becul arată ce vede. Reglează cursorul \"Viteza de recepție\" după ritmul semnalului Morse recepționat, până când literele vin clar.",
  "Vétel: MIKROFON (hang → szöveg)": "Recepție: MICROFON (sunet → text)",
  "Mikrofon vétel indítása": "Pornește recepția cu microfonul",
  "FONTOS: külön eszközről vedd (az egyik telefon lejátssza, a másikon fut a vétel) -- ugyanazon a telefonon a mikrofon foglalása miatt a lejátszás halkul. Tartsd a Morze-hangot a mikrofon közelébe. Csendes környezet a legjobb; a hangerő-sáv és a lámpa mutatja, mit hall. Kalibrálás: a \"Vétel sebesség\" csúszkát told lassan, amíg a szövegben tisztán, hibátlanul jönnek a betűk.": "IMPORTANT: recepționează de pe alt dispozitiv (un telefon redă, pe celălalt rulează recepția) -- pe același telefon redarea slăbește, pentru că microfonul este ocupat. Ține sunetul Morse aproape de microfon. Cel mai bine este un mediu liniștit; bara de volum și becul arată ce se aude. Calibrare: mișcă încet cursorul \"Viteza de recepție\", până când literele vin clar și fără greșeli în text.",
  "Tanuló: Morze → szöveg (kézi: illeszd be . és -, szóköz a betűk közt, / a szavak közt)": "Învățare: Morse → text (manual: inserează . și -, spațiu între litere, / între cuvinte)",
  "A kétirányú kód-tábla (nemzetközi + magyar Á/É/Ö/Ü) és az interaktív tanuló a végleges appban bővül. Egyelőre a fenti mező visszafejt bármilyen beírt Morze-jelet.": "Tabelul de coduri în ambele sensuri (internațional + Á/É/Ö/Ü maghiare) și modulul interactiv de învățare vor fi extinse în aplicația finală. Deocamdată câmpul de mai sus decodează orice semn Morse introdus.",
  "Kép küldése hangként (Martin M1). Játszd egy másik telefon SSTV-vevőjébe vagy egy rádió mikrofonjába.": "Trimiterea imaginii ca sunet (Martin M1). Redă-l în receptorul SSTV al altui telefon sau în microfonul unei stații radio.",
  "Mód": "Mod",
  "Martin M1 (320×256, működik)": "Martin M1 (320×256, funcționează)",
  "Robot36 (hamarosan)": "Robot36 (în curând)",
  "Scottie S1 (hamarosan)": "Scottie S1 (în curând)",
  "PD120 (hamarosan)": "PD120 (în curând)",
  "Kép": "Imagine",
  "Kódolás és lejátszás": "Codare și redare",
  "Küldéshez: a másik eszközön indíts SSTV-vevőt (pl. Robot36 vagy MMSSTV) Martin M1 módban, és tartsd a hangszórót a mikrofonjához. A VIS-fejléc automatikus, a vevő magától felismeri a módot. Egy kép ~114 másodperc.": "Pentru trimitere: pornește pe celălalt dispozitiv un receptor SSTV (de exemplu Robot36 sau MMSSTV) în modul Martin M1 și ține difuzorul lângă microfonul lui. Antetul VIS este automat, receptorul recunoaște singur modul. O imagine durează circa 114 secunde.",
  "Vétel (hang → kép)": "Recepție (sunet → imagine)",
  "Vétel indítása": "Pornește recepția",
  "Martin M1-et fogad. Tartsd a telefont a hangszóró vagy a rádió közelébe, és a kép soronként épül fel. Csendes környezet kell hozzá: a mikrofon minden mást is hall. Hangfájlból is megy, ha valaki felvételt küld.": "Recepționează Martin M1. Ține telefonul aproape de difuzor sau de stația radio, iar imaginea se construiește linie cu linie. Este nevoie de un mediu liniștit: microfonul aude și tot restul. Funcționează și dintr-un fișier audio, dacă cineva trimite o înregistrare.",
  "Készletezés": "Constituirea rezervelor",
  "Menedék és tábor": "Adăpost și tabără",
  "Városi túlélés": "Supraviețuire în oraș",
  "Tájékozódás és mozgás": "Orientare și deplasare",
  "Jelek és időjárás olvasása": "Citirea semnelor și a vremii",
  "Közlekedés és mobilitás": "Transport și mobilitate",
  "Lelki felkészültség": "Pregătire sufletească",
  "Tartós áramszünet": "Pană de curent de lungă durată",
  "Tűzvédelem otthon": "Protecție împotriva incendiilor acasă",
  "Pénz és megélhetés": "Bani și trai",
  "Víznyerés és víztisztítás": "Obținerea și purificarea apei",
  "Mikro-önellátás": "Micro-autosuficiență",
  "Új tétel": "Element nou",
  "Mennyiség": "Cantitate",
  "Mennyiség (db)": "Cantitate (buc.)",
  "Súly (gramm/db)": "Greutate (grame/buc.)",
  "Vonalkód / QR beolvasása": "Scanează codul de bare / QR",
  "Lejárat (opcionális)": "Data expirării (opțional)",
  "Lejárat": "Data expirării",
  "Tétel adatlapja": "Fișa elementului",
  "Tétel törlése": "Șterge elementul",
  "+6 hónap": "+6 luni",
  "+1 év": "+1 an",
  "+2 év": "+2 ani",
  "+5 év": "+5 ani",
  "Turista / domborzat": "Turistică / relief",
  "Műhold": "Satelit",
  "Pont ide, ahol vagyok": "Punct aici, unde sunt",
  "Terület letöltése": "Descarcă zona",
  "Koppints a térképre pont hozzáadásához (menedék, víz, találkozópont). Ha ott": "Atinge harta pentru a adăuga un punct (adăpost, apă, punct de întâlnire). Dacă",
  "állsz": "stai",
  ", ahová a pont való, a": " acolo unde trebuie să fie punctul,",
  "pontosabb: az a GPS-edet használja, nem azt, ahová az ujjad ér. A": "este mai exact: folosește GPS-ul tău, nu locul unde ajunge degetul. Butonul",
  "a mostani koordinátádat adja tovább üzenetben, a": "transmite coordonatele tale actuale într-un mesaj, iar",
  "Pontok kimentése": "Exportă punctele",
  "pedig GPX-fájlba menti mindet, amit a térkép- és navigációs programok beolvasnak. A pontok és a jelenlegi pozíció helyben tárolódnak. A": "le salvează pe toate într-un fișier GPX, pe care programele de hărți și de navigație îl pot citi. Punctele și poziția actuală se stochează local. Butonul",
  "a most látható kivágást menti a készülékre, három nagyítási szinten — utána térerő nélkül is megvan.": "salvează pe dispozitiv porțiunea vizibilă acum, la trei niveluri de zoom — după aceea o ai și fără semnal.",
  "Rendszeres gyógyszerek": "Medicamente permanente",
  "Rendszeres gyógyszer": "Medicament permanent",
  "Krónikus betegségek": "Boli cronice",
  "Krónikus betegség": "Boală cronică",
  "Vészhelyzeti kontakt (név, telefon)": "Contact de urgență (nume, telefon)",
  "QR-kód generálása": "Generează cod QR",
  "A QR a fenti adatokat kódolja. Kihelyezheted a zárolt képernyődre vagy kinyomtatva a hátizsákodba.": "Codul QR conține datele de mai sus. Îl poți pune pe ecranul de blocare sau tipărit în rucsac.",
  "Mindenkinek, akinek van profilja a Háztartásnál. Az adat onnan jön: vércsoport, allergia, gyógyszer, betegség. A vészhelyzeti kontakt a fenti közös mezőből.": "Pentru toți cei care au profil la Gospodărie. Datele vin de acolo: grupă de sânge, alergie, medicamente, boli. Contactul de urgență provine din câmpul comun de mai sus.",
  "Még nincs profil. A Háztartásnál vedd fel, kik vagytok — mindenki kap egy kártyát.": "Nu există încă niciun profil. Înscrie la Gospodărie cine sunteți — fiecare primește un card.",
  "Mind nyomtatása": "Tipărește-le pe toate",
  "Megtérő ima": "Rugăciunea de pocăință",
  "Letöltés": "Descarcă",
  "halvány": "slab",
  "erős": "puternic",
  "É": "N",
  "az üvegről olvasd le": "citește de pe sticlă",
  "‹ Fejezetek": "‹ Capitole",
  "‹ Előző": "‹ Anterior",
  "Következő ›": "Următor ›",
  "A kiemeléseidhez előbb töltsd le a Bibliát.": "Pentru evidențierile tale, descarcă mai întâi Biblia.",
  "A teljes Károli-fordítás egyszer letöltődik (kb. 4 MB), és utána internet nélkül is elérhető marad.": "Traducerea completă se descarcă o singură dată (circa 4 MB) și rămâne apoi disponibilă și fără internet.",
  "Vészhelyzeti igék": "Versete pentru situații de urgență",
  "Próféciák": "Profeții",
  "Kiemeléseim": "Evidențierile mele",
  "Token tárca": "Portofel de tokenuri",
  "Titkos kódok PIN mögött, helyben tárolva. Ugyanaz a PIN nyitja, mint az Irattárcát.": "Coduri secrete în spatele unui PIN, stocate local. Se deschid cu același PIN ca Portofelul de documente.",
  "Új PIN (4-6 számjegy)": "PIN nou (4-6 cifre)",
  "TESZT ÜZEMMÓD: a PIN most": "MOD DE TEST: PIN-ul este acum",
  ", előre kitöltve. Éles használat előtt ez kikerül, és saját PIN-t adsz meg.": ", precompletat. Înainte de utilizarea reală acesta dispare și îți setezi propriul PIN.",
  "A web-demó nem ad operációs rendszer szintű titkosítást: a kódok a böngésző tárolójában vannak. Valódi seed-mondatot vagy éles banki kódot majd a végleges appba tegyél (biometrikus zár, titkosított tár). Itt a folyamatot próbáld ki. A teljes mentésbe ez a rész SOSEM kerül bele.": "Demoul web nu oferă criptare la nivel de sistem de operare: codurile se află în memoria browserului. O frază seed reală sau un cod bancar real pune-le abia în aplicația finală (blocare biometrică, stocare criptată). Aici încearcă doar procesul. În copia completă de siguranță această parte NU intră NICIODATĂ.",
  "Súgó — hogyan fizetek, hogyan kérek": "Ajutor — cum plătesc, cum cer",
  "Fizetés, három lépés.": "Plata, în trei pași.",
  "1. Ő megmutatja az azonosító-QR-jét, vagy küld egy kérést. Te beolvasod: ettől nálad kitöltődik az űrlap.": "1. El îți arată codul QR de identificare sau trimite o cerere. Tu îl scanezi: astfel formularul se completează la tine.",
  "2. Megadod az összeget és hogy miért, majd Fizetés elkészítése. A telefonod aláírja, és mutat egy QR-t.": "2. Introduci suma și motivul, apoi Pregătește plata. Telefonul tău o semnează și afișează un cod QR.",
  "Ő beolvassa ezt a QR-t.": "El scanează acest cod QR.",
  "Az érték ekkor kerül át hozzá — a telefonja ellenőrzi az aláírást, és jóváírja.": "Abia atunci valoarea trece la el — telefonul lui verifică semnătura și o înregistrează.",
  "Pénzkérés.": "Cerere de bani.",
  "Kérek gírát, beírod mennyit és miért, kapsz egy QR-t. Ő beolvassa, és nála kitöltve áll a fizetés, csak jóvá kell hagynia.": "Cere gira, scrii cât și pentru ce, și primești un cod QR. El îl scanează, iar la el plata stă completată — trebuie doar să o confirme.",
  "Miért két beolvasás?": "De ce două scanări?",
  "Mert az ő kódja csak azt mondja meg, kinek és mennyit. Az értéket a te aláírásod viszi át, és az a te QR-edben van. Amíg ő nem olvasta be, a tétel nálad „átadásra vár” jelöléssel áll.": "Pentru că codul lui spune doar cui și cât. Valoarea o transferă semnătura ta, iar aceasta se află în codul tău QR. Până când el nu l-a scanat, elementul stă la tine cu marcajul „așteaptă predarea”.",
  "Minden a két telefon között megy, kamerával és képernyővel. Se szerver, se térerő.": "Totul se petrece între cele două telefoane, prin cameră și ecran. Nici server, nici semnal.",
  "Van, ahol a böngésző nem tud QR-t olvasni (jellemzően iPhone Safari). Ilyenkor a Beillesztés szövegből gomb ugyanazt tudja: a fizetés elkészítése után a QR alatti Szöveg másolása gombbal átküldöd a tételt üzenetben, ő pedig a Beillesztés szövegből gombbal beveszi. Az ellenőrzés ugyanúgy megtörténik, az aláírás a szövegben is benne van.": "Există cazuri în care browserul nu poate citi coduri QR (de regulă Safari pe iPhone). Atunci butonul Inserează din text face același lucru: după pregătirea plății, trimiți elementul într-un mesaj cu butonul Copiază textul de sub codul QR, iar el îl preia cu butonul Inserează din text. Verificarea se face la fel, semnătura este cuprinsă și în text.",
  "a nevedben más nem tud fizetni (a titkos kulcs a telefonodon marad), és egy aláírt tétel utólag nem módosítható észrevétlenül.": "nimeni altcineva nu poate plăti în numele tău (cheia secretă rămâne pe telefonul tău), iar un element semnat nu poate fi modificat ulterior fără să se observe.",
  "offline a kettős költést megelőzni nem lehet. Ha valaki ugyanazt a gírát két embernek adja, az akkor derül ki, amikor a két tétel találkozik — és a saját aláírása bizonyítja. Ezért érdemes időnként összefésülni a könyveket a közösségben.": "offline cheltuiala dublă nu poate fi împiedicată. Dacă cineva dă aceeași gira la două persoane, se descoperă atunci când cele două elemente se întâlnesc — iar propria lui semnătură o dovedește. De aceea merită ca din când în când să comparați registrele în comunitate.",
  "Rekesz": "Compartiment",
  "Kripto-kulcsok": "Chei cripto",
  "Új bejegyzés": "Înregistrare nouă",
  "Seed-mondatnál a papír-másolat nem elavult ötlet: egy elveszett vagy letörölt telefon a kulcsot is viszi. Amit ide beírsz, azt tartsd meg máshol is.": "La fraza seed, copia pe hârtie nu este o idee învechită: un telefon pierdut sau șters duce cu el și cheia. Ce scrii aici, păstrează și în altă parte.",
  "PIN-nel védett helyi tároló okmányokhoz (szig, jogosítvány, TAJ, biztosítás, forgalmi).": "Stocare locală protejată cu PIN pentru acte (buletin, permis, card de sănătate, asigurare, talon).",
  "A PIN és a dokumentumok CSAK ezen az eszközön, a böngésződben tárolódnak — a vészkártyával ellentétben ezt csak te nyithatod meg. Figyelem: a web-demó nem nyújt OS-szintű titkosítást; VALÓDI okmányokat majd a végleges appba tölts (biometrikus zár, titkosított tár). Itt a folyamatot teszteld.": "PIN-ul și documentele se stochează DOAR pe acest dispozitiv, în browserul tău — spre deosebire de cardul de urgență, acestea le poți deschide numai tu. Atenție: demoul web nu oferă criptare la nivel de sistem de operare; acte REALE încarcă abia în aplicația finală (blocare biometrică, stocare criptată). Aici testează doar procesul.",
  "Szűrés: kinek az iratait mutassuk": "Filtru: ale cui documente să afișăm",
  "Új dokumentum": "Document nou",
  "Ehhez a dokumentumhoz: kié? Személy, állat vagy jármű. Ha egyiket sem jelölöd, közösként mentjük.": "Pentru acest document: al cui este? Persoană, animal sau vehicul. Dacă nu bifezi niciunul, îl salvăm ca fiind comun.",
  "Magyar": "Magyar",
  "véglegesen": "definitiv",
  "szól erre a készülékre, nincs lejárata és nincs megújítás. Ha kódot kaptál, itt válthatod be.": "este valabil pentru acest dispozitiv, nu expiră și nu se reînnoiește. Dacă ai primit un cod, aici îl poți valorifica.",
  "Kód beváltása": "Valorifică codul",
  "Névjegy": "Despre aplicație",
  "PrepperPapa — vészhelyzeti prepper eszköztár.": "PrepperPapa — trusă de instrumente pentru situații de urgență.",
  "Verzió:": "Versiune:",
  "Web-demo a gyors próbához. A végleges app: Flutter, Google Play.": "Demo web pentru o încercare rapidă. Aplicația finală: Flutter, Google Play.",
  "Teljes fejadattal számol: 3 liter fő/nap. Ez a helyben maradáshoz és az autós úthoz való — nyaraló, tábor, otthon.": "Calculează cu rația completă: 3 litri de persoană pe zi. Este pentru rămânerea pe loc și pentru drumul cu mașina — casă de vacanță, tabără, acasă.",
  "Ki tartozik a háztartáshoz és hol vannak a helyszíneid. A készültségi számítás ebből dolgozik.": "Cine aparține gospodăriei și unde sunt locurile tale. Calculul gradului de pregătire lucrează cu aceste date.",
  "Még nincs családtag felvéve.": "Nu s-a adăugat încă niciun membru al familiei.",
  "Még nincs állat felvéve.": "Nu s-a adăugat încă niciun animal.",
  "Még nincs jármű felvéve. Autó, kisbusz, lakókocsi vagy hajó lehet.": "Încă nu ai adăugat niciun vehicul. Poate fi o mașină, o dubă, o rulotă sau o barcă.",
  "Még nincs helyszín felvéve. Alapesetben az otthon az első.": "Nu s-a adăugat încă niciun loc. În mod implicit casa este prima.",
  "Születési dátum": "Data nașterii",
  "Ki ő": "Cine este",
  "kiskorú": "minor",
  "Neme (gyereknél)": "Sexul (la copii)",
  "lány": "fată",
  "kutya": "câine",
  "macska": "pisică",
  "Teherbírás (kg)": "Capacitate de transport (kg)",
  "Testtömeg (kg)": "Greutate corporală (kg)",
  "Laktóz": "Lactoză",
  "Tojás": "Ou",
  "Szója": "Soia",
  "Penicillin": "Penicilină",
  "Pollen": "Polen",
  "Poratka": "Acarieni de praf",
  "Latex": "Latex",
  "Jód": "Iod",
  "Típus": "Tip",
  "· vagy egy bemásolt Google Térkép-link. Ha nem tudom értelmezni, szólok — üresen nem mentem el.": "· sau un link Google Maps lipit. Dacă nu îl pot interpreta, te anunț — gol nu îl salvez.",
  "Megközelítés": "Acces",
  "nem (csak árammal/gázzal)": "nu (doar cu curent/gaz)",
  "Víz áram nélkül is?": "Apă și fără curent?",
  "nem (vezetékes/szivattyús)": "nu (rețea/pompă)",
  "Napi fűtésigény (kWh)": "Necesar zilnic de încălzire (kWh)",
  "Kijáratok száma": "Numărul ieșirilor",
  "Több": "Mai mult",
  "Morze · fax · helyi szoba": "Morse · fax · cameră locală",
  "Térkép": "Hartă",
  "Kockázatelemzés": "Analiza riscurilor",
  "Mit vigyek?": "Ce să iau?",
  "Titkosított üzenet · helyzet · lista": "Mesaj criptat · poziție · listă",
  "Ezen a készüléken a böngésző nem éri el a légnyomás-szenzort, ezért kézzel kell bevinni az értéket. A telefonos appban magától mér majd. Addig is: írj be egy értéket, és a trendet innentől számolja.": "Pe acest dispozitiv browserul nu are acces la senzorul de presiune, de aceea valoarea trebuie introdusă manual. În aplicația de telefon va măsura singură. Până atunci: introdu o valoare, iar tendința se va calcula de aici înainte.",
  "Két mérés kell a trendhez.": "Pentru tendință sunt necesare două măsurători.",
  "Az első mérés óta eltelt idő:": "Timp de la prima măsurătoare:",
  "Trendet húsz perctől mondok.": "Tendința o arăt de la douăzeci de minute.",
  "Hézag van a mérésekben. Az előző mérés óta eltelt:": "Există o pauză în măsurători. Timp de la măsurătoarea anterioară:",
  "A hézag óta eltelt idő:": "Timp de la pauză:",
  "Közelítő trend: az utóbbi órákban hézag van a mérésekben, ezért az ablak elejét a hézag előtti utolsó mérésből számoltam.": "Tendință aproximativă: în ultimele ore există o pauză în măsurători, așa că începutul ferestrei a fost calculat din ultima măsurătoare dinaintea pauzei.",
  "Ha autóval hegyre mész, a nyomás esik, de nem jön vihar: száz méter emelkedés körülbelül 12 hPa. Ilyen napon ne vedd komolyan a jelzést.": "Dacă urci cu mașina la munte, presiunea scade, dar nu vine furtună: o sută de metri diferență de nivel înseamnă circa 12 hPa. Într-o astfel de zi nu lua avertismentul în serios.",
  "Kalkulátor": "Calculator",
  "Meddig visz el egy powerbank vagy egy akku": "Cât te duce o baterie externă sau un acumulator",
  "Mennyi fa vagy gáz kell N napra": "Câte lemne sau cât gaz sunt necesare pentru N zile",
  "Mennyi gyűlik össze a tetőről": "Cât se adună de pe acoperiș",
  "Menetidő": "Durata drumului",
  "Meddig tart gyalog, és odaérsz-e világosban": "Cât durează pe jos și dacă ajungi pe lumină",
  "Villám": "Fulger",
  "Milyen messze van a vihar": "Cât de departe este furtuna",
  "Víztisztítás": "Purificarea apei",
  "Mennyi hipó kell, és meddig kell forralni": "Cât clor este necesar și cât trebuie fiert",
  "Mennyi víz": "Câtă apă",
  "Milyen a víz": "Cum este apa",
  "Tiszta, átlátszó": "Curată, limpede",
  "Zavaros, hideg vagy színes": "Tulbure, rece sau colorată",
  "Tengerszint feletti magasság (méter)": "Altitudine deasupra nivelului mării (metri)",
  "Saját / kézi megadás": "Propriu / introducere manuală",
  "Powerbank 20 000 mAh (~74 Wh)": "Baterie externă 20 000 mAh (~74 Wh)",
  "Kapacitás (Wh)": "Capacitate (Wh)",
  "Max. teljesítmény (W)": "Putere max. (W)",
  "Jackery Explorer 1000: 1002 Wh tárolt energia, 1000 W folyamatos kimenet": "Jackery Explorer 1000: 1002 Wh energie stocată, 1000 W putere continuă",
  "Mit üzemeltetnél? (hány darab · watt · naponta mennyit)": "Ce ai vrea să alimentezi? (câte bucăți · wați · cât timp zilnic)",
  "nem használom": "nu îl folosesc",
  "negyed óra": "un sfert de oră",
  "fél óra": "o jumătate de oră",
  "1 óra": "1 oră",
  "2 óra": "2 ore",
  "3 óra": "3 ore",
  "4 óra": "4 ore",
  "5 óra": "5 ore",
  "6 óra": "6 ore",
  "8 óra": "8 ore",
  "10 óra": "10 ore",
  "12 óra": "12 ore",
  "16 óra": "16 ore",
  "egész nap": "toată ziua",
  "Telefon töltés": "Încărcarea telefonului",
  "LED lámpa": "Lampă LED",
  "Wifi router": "Router Wi-Fi",
  "Rádió, PMR": "Stație radio, PMR",
  "Laptop": "Laptop",
  "TV": "Televizor",
  "Szivattyú, kút": "Pompă, fântână",
  "Vízforraló": "Fierbător de apă",
  "Van napelemed?": "Ai panou solar?",
  "Melyik évszakban?": "În ce anotimp?",
  "Milyen idő van?": "Cum e vremea?",
  "A panel névleges teljesítménye (W)": "Puterea nominală a panoului (W)",
  "+ Saját eszköz hozzáadása": "+ Adaugă propriul dispozitiv",
  "Mi ez? (pl. oxigénkoncentrátor)": "Ce este? (ex. concentrator de oxigen)",
  "Megnézem a boltban ↗": "Vezi în magazin ↗",
  "nyár (június-augusztus)": "vară (iunie-august)",
  "tavasz (március-május)": "primăvară (martie-mai)",
  "ősz (szeptember-november)": "toamnă (septembrie-noiembrie)",
  "tél (december-február)": "iarnă (decembrie-februarie)",
  "derült, napos": "senin, însorit",
  "változó, felhős": "variabil, noros",
  "borult, esős": "acoperit, ploios",
  "nincs napelem": "fără panou solar",
  "saját panel — megadom a wattot": "panoul meu — introduc wații",
  "Panel": "Panou",
  "Milyen a ház": "Cum este casa",
  "Jól szigetelt (60 W/m²)": "Bine izolată (60 W/m²)",
  "Rossz, régi (140 W/m²)": "Slabă, veche (140 W/m²)",
  "Mivel fűtesz": "Cu ce încălzești",
  "PB-gáz palackkal": "Cu butelie de gaz",
  "Tetőfelület vízszintes vetülete (m²)": "Proiecția orizontală a acoperișului (m²)",
  "Mennyi eső esett vagy várható (mm)": "Câtă ploaie a căzut sau este așteptată (mm)",
  "Menetidő gyalog": "Durata drumului pe jos",
  "Távolság (km)": "Distanță (km)",
  "Milyen terep": "Ce fel de teren",
  "Jó út, sík (5 km/h)": "Drum bun, plat (5 km/h)",
  "Ösvény, erdei út (4 km/h)": "Potecă, drum forestier (4 km/h)",
  "Nehéz terep, hó, sár (3 km/h)": "Teren greu, zăpadă, noroi (3 km/h)",
  "Mit viszel": "Ce duci",
  "Könnyű, napi cucc": "Bagaj ușor, de zi cu zi",
  "Megpakolt hátizsák": "Rucsac încărcat",
  "Nehéz teher vagy gyerekkel": "Sarcină grea sau cu copil",
  "Villám: milyen messze van": "Fulger: cât de departe este",
  "Nyomd meg a villanáskor, aztán újra, amikor meghallod a dörgést.": "Apasă la fulger, apoi din nou când auzi tunetul.",
  "Villanás": "Fulgerare",
  "Jelszó": "Parolă",
  "Jelszó mentése": "Salvează parola",
  "Nincs saját jelszó.": "Nu există parolă proprie.",
  "beállítva": "setată",
  "Tudástár: a cikkekből most már tizennyolc helyen gomb vezet át az app funkcióira (Készlet, Vészkártya, Kockázatelemzés, Tudástár).": "Bază de cunoștințe: acum în optsprezece locuri butoanele duc din articole la funcțiile aplicației (Inventar, Card de urgență, Analiza riscurilor, Bază de cunoștințe).",
  "Irattárca és Token tárca: a tartalom mostantól titkosítva tárolódik, a kulcs a PIN-edből készül, a PIN-t nem tároljuk. Az első belépéskor a meglévő adatod magától átkerül titkosított formába. Fontos: elfelejtett PIN mellett a tartalom nem állítható vissza.": "Portofelul de documente și portofelul de tokenuri: conținutul este acum stocat criptat, cheia se obține din PIN-ul tău, iar PIN-ul nu este stocat. La prima deschidere datele existente trec automat în formă criptată. Important: dacă uiți PIN-ul, conținutul nu poate fi recuperat.",
  "A kódok titkosítva tárolódnak ezen az eszközön: a kulcs a PIN-edből készül (AES-256), magát a PIN-t nem tároljuk. Ha elfelejted a PIN-t, a tartalom nem állítható vissza, ezért a seed-mondatról tarts papírmásolatot is. A teljes mentésbe ez a rész SOSEM kerül bele.": "Codurile sunt stocate criptat pe acest dispozitiv: cheia se obține din PIN-ul tău (AES‑256), iar PIN-ul în sine nu este stocat. Dacă uiți PIN-ul, conținutul nu poate fi recuperat, așa că păstrează și o copie pe hârtie a frazei seed. Această secțiune NU intră NICIODATĂ în copia de siguranță completă.",
  "A dokumentumok CSAK ezen az eszközön tárolódnak, a PIN-edből képzett kulccsal titkosítva (AES-256) — a vészkártyával ellentétben ezt csak te nyithatod meg. A PIN-t nem tároljuk: ha elfelejted, a dokumentumok nem állíthatók vissza.": "Documentele sunt stocate DOAR pe acest dispozitiv, criptate cu o cheie obținută din PIN-ul tău (AES‑256) — spre deosebire de cardul de urgență, doar tu le poți deschide. PIN-ul nu este stocat: dacă îl uiți, documentele nu pot fi recuperate.",
  "Tudástár: a cikkekben álló hivatkozások (például „a 20.2 cikk”) kattinthatók, és a cikkekből gomb vezet át az app megfelelő funkciójára.": "Bază de cunoștințe: trimiterile din articole (de exemplu „articolul 20.2”) se pot apăsa, iar butoanele din articole duc la funcția potrivită din aplicație.",
  "Vagyonkezelő: új, választós oldalak saját legördülő listával.": "Patrimoniu: pagini noi de selecție cu propria listă derulantă.",
  "Térkép, navigáció: alul egy sáv mutatja a hátralévő és a megtett utat, a sebességet és a várható érkezést; a sarkában a leállító gomb.": "Hartă, navigare: o bară jos arată distanța rămasă și parcursă, viteza și sosirea estimată; în colț, butonul de oprire.",
  "Térkép, navigáció: tervezett útvonalon a ▲ gomb megnyitja a szintgrafikont: hol vagy, merre emelkedik vagy lejt az út, mennyit kell még mászni, és mikor jön a következő emelkedő.": "Hartă, navigare: pe un traseu planificat, butonul ▲ deschide profilul de altitudine: unde ești, unde urcă sau coboară traseul, cât urcuș a mai rămas și când vine următoarea urcare.",
  "Tudástár: ötvenegy új kép került a cikkekbe, így már mind a kilencvenkilenc cikkben legalább két kép van.": "Bază de cunoștințe: cincizeci și una de imagini noi; acum toate cele nouăzeci și nouă de articole au cel puțin două imagini.",
  "Közös ima · stopper": "Rugăciune comună · cronometru",
  "Folytatás": "Continuă",
  "Újra": "Din nou",
  "Letelt az idő. Az Újra gombbal még egy kör indul.": "Timpul a expirat. Apasă Din nou pentru încă o rundă.",
  "Vége. Az Újra gombbal elölről kezdheted.": "Gata. Din nou o ia de la capăt.",
  "Második kör": "A doua rundă",
  "Ima-stopper": "Cronometru de rugăciune",
  "Útvonal": "Traseu",
  "Körút": "Circuit",
  "igen": "da",
  "MTSZ-szám": "Nr. MTSZ",
  "Jelzés festve": "Marcaj vopsit",
  "Weboldal": "Site web",
  "Az út mentén": "De-a lungul traseului",
  "menetidő": "timp de mers",
  "érkezés": "sosire",
  "ó": "h",
  "p": "min",
  "Magassági adat nélkül, az emelkedőkkel nem számolva.": "Fără date de altitudine, urcușurile nu sunt incluse.",
  "Imák: a lista alján egy kis harang gomb nyitja a közös imához való stoppert. Te állítod be a perceket; lejáratkor halkan csilingel, és amíg nem nyúlsz hozzá, tízmásodpercenként újra jelez. Az Újra gomb még egy kört indít, annak a végén egyszer csilingel, és leáll.": "Rugăciuni: un mic buton cu clopoțel în josul listei deschide cronometrul pentru rugăciunea comună. Tu setezi minutele; la final sună încet și repetă la fiecare zece secunde, până îl atingi. Din nou pornește încă o rundă, care sună o dată la final și se oprește.",
  "Imák: a stopper harang gombja az app saját ikon-stílusát kapta.": "Rugăciuni: butonul cu clopoțel al cronometrului are acum stilul de pictograme al aplicației.",
  "Tudástár: harminckilenc új kép került a prémium cikkekbe, így már szinte minden cikkben van kép.": "Bază de cunoștințe: au fost adăugate treizeci și nouă de imagini noi în articolele premium, astfel aproape fiecare articol are acum o imagine.",
  "Tudástár: a már letöltött prémium cikkek is frissülnek, ha új változat jelenik meg. A PMR446 cikkbe bekerült a csatornák frekvencia-táblázata és a digitális PMR.": "Bază de cunoștințe: articolele premium deja descărcate se actualizează acum când apare o versiune nouă. Articolul despre PMR446 conține acum tabelul de frecvențe al canalelor și PMR digital.",
  "Tudástár: tizenöt prémium cikkben megjelentek a képek, tizenegy cikk új képet kapott.": "Bază de cunoștințe: imaginile apar acum în cincisprezece articole premium, iar unsprezece articole au primit o imagine nouă.",
  "Újdonságok: a korábbi bejegyzések is olvashatók most már minden nyelven.": "Noutăți: intrările anterioare pot fi citite acum în orice limbă.",
  // Ujdonsagok v43.126-v43.138 (2026-10-12 22:1x, hianypotlas)
  "Szobák: ha a „Csak neki” címzés látszik, az üzenet biztosan privátként megy el. Ha a címzés egy másik szobából maradt itt, az app nem küldi el csoportba, hanem szól, hogy válaszd ki újra a címzettet.": "Camere: dacă se vede adresarea „Doar pentru”, mesajul pleacă sigur ca privat. Dacă adresarea a rămas dintr-o altă cameră, aplicația nu îl trimite grupului, ci îți cere să alegi din nou destinatarul.",
  "Vagyonkezelő: az euró, a dollár és a nemesfémek árfolyama internet mellett magától frissül (a Magyar Nemzeti Bank és a tőzsdei ár alapján). A kézzel beírt érték marad.": "Patrimoniu: cursurile euro, dolarului și metalelor prețioase se actualizează singure când ești online (pe baza Băncii Naționale a Ungariei și a prețurilor bursiere). Valoarea introdusă manual se păstrează.",
  "Vagyonkezelő: kikerültek belőle a cégspecifikus részek, csak az általános pénzügyi funkciók maradtak.": "Patrimoniu: au fost scoase părțile specifice firmei, au rămas doar funcțiile financiare generale.",
  "Vagyonkezelő: bal oldali menü (a bal felső gombbal). Minden menüpont egy témát mutat, így nem kell végtelen hosszan görgetni. A főoldalon a számlák egyenlege csempékben.": "Patrimoniu: meniu în partea stângă (cu butonul din stânga sus). Fiecare opțiune arată o temă, așa că nu trebuie să derulezi la nesfârșit. Pe pagina principală, soldurile conturilor în dale.",
  "Visszajelzés: a „Bejelentéseim” alatt látod a saját bejelentéseidet, és hogy hol tart mindegyik. A kijavított hibánál egy koppintással jelezheted, hogy nálad is működik-e.": "Feedback: la „Raportările mele” îți vezi propriile raportări și stadiul fiecăreia. La o eroare corectată poți confirma cu o atingere dacă la tine funcționează.",
  "Újdonságok: verziónként itt olvasható, mi változott és mi lett javítva.": "Noutăți: aici poți citi, versiune cu versiune, ce s-a schimbat și ce s-a reparat.",
  "Biblia: egyszerre több olvasási tervet is követhetsz, a „Másik terv” gombbal válthatsz köztük. A haladás tervenként megmarad.": "Biblia: poți urma mai multe planuri de citire în același timp și poți comuta între ele cu butonul „Alt plan”. Progresul se păstrează pentru fiecare plan.",
  "Biblia: „A Biblia egy év alatt” heti felosztásban is választható, 52 hétre bontva.": "Biblia: „Biblia într-un an” poate fi aleasă și în împărțire săptămânală, pe 52 de săptămâni.",
  "Biblia: a „Terv leállítása” gomb a terv tetején is ott van, nem kell a lista aljáig görgetni érte.": "Biblia: butonul „Oprește planul” este acum și în partea de sus a planului, nu mai trebuie să derulezi până la capătul listei.",
  "Biztonsági javítások a Szobákban és a prémium tartalmak védelmében.": "Corecturi de securitate în Camere și în protecția conținutului premium.",
  "Szobák: elrejtett üzenetről már nem jön értesítés.": "Camere: nu mai vin notificări despre mesajele ascunse.",
  "Gíra: ha a névjegy elsőre nem ért célba, magától újra elküldődik.": "Gira: dacă cartea de vizită nu a ajuns prima dată, este retrimisă automat.",
  "Gíra: a közösséghez később csatlakozó tag is megkapja a közösség jelzéseit.": "Gira: un membru care se alătură comunității mai târziu primește și el semnalele comunității.",
  "A kezdőképernyőre tett webes ikon ugyanaz lett, mint a telepített alkalmazásé.": "Pictograma web pusă pe ecranul de start este acum aceeași cu cea a aplicației instalate.",
  "Térkép: a funkciók ikonos csempékben jelennek meg, az iránytű folyamatosan forog.": "Hartă: funcțiile apar ca dale cu pictograme, iar busola se rotește continuu.",
  "Szobák: a tagok egymásnak is átadhatják a szoba titkosító kulcsát, így új eszközön is olvasható minden korábbi üzenet.": "Camere: membrii își pot transmite și unii altora cheia de criptare a camerei, astfel pe un dispozitiv nou se pot citi toate mesajele anterioare.",
  "Titkos QR: a családi jelszó egy összecsukható sor lett az oldal tetején, színes jelzéssel (be van-e állítva). Így az oldal rögtön a kód készítésével kezdődik.": "QR secret: parola de familie este acum un rând pliabil în partea de sus a paginii, cu un marcaj colorat (dacă este setată). Astfel pagina începe direct cu crearea codului.",
  "Közös jelszó: koppints a Családi jelszó sorra, és adj meg egy mondatot, amit csak ti tudtok. Ugyanaz kell mindkét telefonon; mentsd el.": "Parolă comună: atinge rândul Parolă de familie și introdu o propoziție pe care o știți doar voi. Pe ambele telefoane e nevoie de aceeași; salveaz-o.",
  "nincs beállítva": "nesetată",
  "Saját jelszó nélkül a beépített kulcs véd, ami MINDEN PrepperPapa-készüléken megvan. Az idegen, aki sima szkennerrel ránéz, csak betűsort lát, de aki letöltötte az appot, elolvassa. Ez álcázás, nem titkosítás.": "Fără parolă proprie te protejează cheia încorporată, pe care o are ORICE dispozitiv cu PrepperPapa. Străinul care se uită cu un scaner obișnuit vede doar un șir de caractere, dar cine a descărcat aplicația îl citește. Aceasta este camuflare, nu criptare.",
  "Kód készítése": "Creează cod",
  "Mit teszel bele?": "Ce pui în el?",
  "Lista": "Listă",
  "Személyes adat": "Date personale",
  "Koordináta": "Coordonate",
  "Lista címe": "Titlul listei",
  "Sorok (soronként egy)": "Rânduri (câte unul pe rând)",
  "QR készítése": "Creează QR",
  "Morze fénnyel": "Morse cu lumină",
  "Morze hanggal": "Morse cu sunet",
  "Rádión ne add le.": "Nu-l transmite prin radio.",
  "Az amatőr sávokon tilos információrejtő módszert alkalmazni (15/2013. NMHH rendelet 15. § (6) e)), és a forgalmazást közérthető nyelven kell folytatni (15. § (4)). Ez a kód egyikbe sem fér bele, és a saját jelszó nélkül készült változatra is áll. Morzézni szabad, rejtett tartalmat leadni nem. QR-kódban, papíron, kézből átadva használható.": "Pe benzile de radioamatori este interzisă folosirea metodelor de ascundere a informației (regulamentul maghiar NMHH 15/2013, art. 15 alin. 6 lit. e), iar traficul trebuie purtat într-un limbaj inteligibil (art. 15 alin. 4). Acest cod nu se încadrează în niciuna dintre cerințe, iar acest lucru este valabil și pentru varianta creată fără parolă proprie. Este permis să transmiți în Morse, dar nu conținut ascuns. În cod QR, pe hârtie, predat din mână în mână, poate fi folosit.",
  "Kód beolvasása": "Scanează codul",
  "Vagy írd be a betűsort (morzéból, faxról)": "Sau introdu șirul de caractere (din Morse, de pe fax)",
  "Megfejtés": "Descifrare",
  "Ahogy üzenni tudsz, amikor a telefonhálózat nem segít. Válaszd ki, mivel próbálkozol: a helyi szoba szöveget visz a közeledben lévőknek, a hang pedig ott is átmegy, ahol semmilyen hálózat nincs.": "Cum poți transmite un mesaj când rețeaua de telefonie nu ajută. Alege cu ce încerci: camera locală duce text celor din apropierea ta, iar sunetul trece și acolo unde nu există nicio rețea.",
  "szöveg, hálón": "text, în rețea",
  "Szöveg a közeledben lévőknek, közös hálón, internet nélkül": "Text pentru cei din apropiere, în rețea comună, fără internet",
  // MESH (Fonok, 2026-10-06 21:44 es 21:47): a helyi szoba neve es leirasa a mesh-halozatot
  // is kimondja -- ez ugyanaz a szoba, csak a nevevel egyutt most a technologiat is viszi.
  "Helyi szoba (mesh)": "Cameră locală (mesh)",
  "Mesh-hálózat: szöveg a közeledben lévőknek, internet nélkül": "Rețea mesh: text pentru cei din apropiere, fără internet",
  "Szobák (interneten)": "Camere (prin internet)",
  "Zárt csoportok távolról is, belépés a szoba gazdájának jóváhagyásával": "Grupuri închise și de la distanță, intrarea cu aprobarea proprietarului camerei",
  "Rövid üzenet hanggal vagy fénnyel, vétel kamerával és mikrofonnal": "Mesaj scurt cu sunet sau lumină, recepție cu camera și microfonul",
  "Kép átküldése hangban, rádión is": "Transmiterea imaginii prin sunet, și pe radio",
  "névtelen (te)": "anonim (tu)",
  "Ez a modul akkor működik, ha a készülékek egy hálón vannak, és azon valaki futtatja a szobát. Internet nem kell hozzá.": "Acest modul funcționează dacă dispozitivele sunt în aceeași rețea și cineva găzduiește camera în ea. Internetul nu este necesar.",
  "kapcsold be a telefonodon a mobil hotspotot (vagy használjatok egy közös routert), a többiek csatlakozzanak rá, és nyissák meg ugyanazt a címet, amit te. Aki megnyitotta, az bent van a szobában.": "activează hotspotul mobil pe telefonul tău (sau folosiți un router comun), ceilalți să se conecteze la el și să deschidă aceeași adresă ca tine. Cine a deschis-o este în cameră.",
  "Közös jelszó. Aki ugyanezt adja meg, az olvassa az üzeneteket, akinek nincs meg, annak értelmetlen betűsor marad. A kulcsot NE a szobában küldd el, hanem élőszóban vagy papíron add át.": "Parolă comună. Cine introduce aceeași parolă citește mesajele; pentru cine nu o are rămâne un șir de caractere fără sens. NU trimite cheia în cameră — predă-o verbal sau pe hârtie.",
  "Nincs kulcs. Az üzenetek nyíltan mennek: aki a hálón van és megnyitja a szobát, olvassa őket.": "Nu există cheie. Mesajele merg deschis: cine este în rețea și deschide camera le citește.",
  "Szobák": "Camere",
  "Még egy szobában sem vagy benne.": "Nu ești încă în nicio cameră.",
  "Nyitott közösségek. Egy koppintás, és megy a jelentkezésed — a szoba gazdája engedi be.": "Comunități deschise. O atingere și cererea ta pleacă — proprietarul camerei te lasă să intri.",
  "Új szoba": "Cameră nouă",
  "Te leszel a gazdája. Aki csatlakozni akar, kérelmet küld, és te döntöd el, beengeded-e. A szoba kódját add meg nekik, azzal találnak rá.": "Tu vei fi proprietarul. Cine vrea să se alăture trimite o cerere, iar tu decizi dacă îl lași să intre. Dă-le codul camerei — cu el o găsesc.",
  "Szoba létrehozása": "Creează cameră",
  "Írd be a szoba kódját. A gazda jóváhagyásáig nem látod az üzeneteket.": "Introdu codul camerei. Până la aprobarea proprietarului nu vezi mesajele.",
  "Kérelem küldése": "Trimite cererea",
  "A böngészőben letiltottad az értesítést. A telefon beállításainál lehet visszaadni — innen nem tudom.": "Ai blocat notificările în browser. Le poți reactiva din setările telefonului — de aici nu pot.",
  "Próba": "Test",
  "Szoba": "Cameră",
  "Kapcsolódás...": "Se conectează...",
  "Sürgős": "Urgent",
  "Meghívó": "Invitație",
  "Készíts egy meghívót, és küldd át annak, akit be akarsz hívni. Ő megnyitja, és bent van — nem kell külön jóváhagynod, és nem kell a szoba kódját közhírré tenni.": "Creează o invitație și trimite-o celui pe care vrei să îl chemi. El o deschide și este înăuntru — nu trebuie să aprobi separat și nici să faci public codul camerei.",
  "Meghívó készítése": "Creează invitație",
  "Vagy legyen nyitott:": "Sau fă-o deschisă:",
  "ha kirakod, a szoba megjelenik mindenkinél a „Csatlakozz\" listában, és jelentkezni tudnak rá. Beengedni akkor is te engeded be őket.": "dacă o publici, camera apare la toți în lista „Alătură-te\" și se pot înscrie. Tot tu ești cel care îi lasă să intre.",
  "Jelenjen meg a Csatlakozz listában": "Să apară în lista Alătură-te",
  "Ez látszik a csempén, ezen ismerik fel. Fényképet válassz, ne rajzot — kis méretben az mond valamit. A telefonod a képet magától lekicsinyíti.": "Aceasta se vede pe dală, după ea o recunosc. Alege o fotografie, nu un desen — la dimensiuni mici aceea spune ceva. Telefonul tău micșorează singur imaginea.",
  "Kép törlése": "Șterge imaginea",
  "Ez a másik út: aki a kódot ismeri, kérelmet küldhet, és te döntöd el, beengeded-e. Meghívóval egyszerűbb.": "Aceasta este cealaltă cale: cine cunoaște codul poate trimite o cerere, iar tu decizi dacă îl lași să intre. Cu invitație este mai simplu.",
  "Kihagyom": "Sar peste",
  "Tovább": "Mai departe",
  "Tartsd a vonalkódot a keretbe.": "Ține codul de bare în cadru.",
  "Húzd az ujjad: vízszintben a szín, függőlegesen a fényerő. Koppints a képernyőre a gombok elrejtéséhez / előhozásához.": "Trage cu degetul: pe orizontală culoarea, pe verticală luminozitatea. Atinge ecranul pentru a ascunde / a afișa butoanele.",
  "Piros": "Roșu",
  "Zöld": "Verde",
  "Villogás": "Clipire",
  "LED ki": "LED oprit",
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
  "otthon": "acasă",
  "Teszt autó": "Mașină de test",
  "Teszt Apa": "Tata de test",
  "Teszt Anya": "Mama de test",
  "Teszt Gyerek": "Copil de test",
  "Víz": "Apă",
  "Étel": "Hrană",
  "Azaz": "Adică",
  "nincs ide rendelt készlet": "nu există rezervă alocată aici",
  "Készültség": "Grad de pregătire",
  "Készlet": "Rezervă",
  "Kockázat": "Risc",
  "Közösség": "Comunitate",
  "Iránytű": "Busolă",
  "Fény": "Lumină",
  "Vagyonkezelő": "Patrimoniu",
  "Otthon ": "Acasă ",
  "nincs megadva, ki jön": "nu s-a specificat cine vine",
  "Nincs megadva, ki érkezik ide.": "Nu s-a specificat cine ajunge aici.",
  "Kik érkeznek ide:": "Cine ajunge aici:",
  "Mi van itt (nincs ide rendelt tétel)": "Ce este aici (nu există element alocat aici)",
  "Sípolás": "Fluier",
  "Ütem indítása": "Pornește ritmul",
  "vércsoport hiányzik · nincs ismert allergia": "lipsește grupa de sânge · nicio alergie cunoscută",
  "Rögzítés a térképre (itt vagyok most)": "Fixează pe hartă (sunt aici acum)",
  "Kezdőlapon látszik ✓": "Vizibil pe pagina principală ✓",
  "+ Új családtag": "+ Membru nou al familiei",
  "Otthon · készültség: nincs adat": "Acasă · grad de pregătire: fără date",
  "Jármű · készültség: nincs adat": "Vehicul · grad de pregătire: fără date",
  "Ez a készülék nem ad iránytű-adatot, vagy nincs rá engedély. A nap és hold rész ettől függetlenül működik.": "Acest dispozitiv nu furnizează date de busolă sau nu există permisiune. Partea cu soarele și luna funcționează independent de asta.",
  "víz 5 liter elemlámpa gyógyszerek": "apă 5 litri lanternă medicamente",
  "Ennyi holdfénynél nyílt terepen lámpa nélkül is lehet menni.": "Cu atâta lumină de lună, în teren deschis se poate merge și fără lanternă.",
  "A számítás a térkép utolsó nézete alapján készült, néhány perc pontossággal.": "Calculul s-a făcut pe baza ultimei vederi a hărții, cu o precizie de câteva minute.",
  "A böngészőben letiltottad. A telefon beállításainál lehet visszaadni.": "Ai blocat-o în browser. O poți reactiva din setările telefonului.",
  "Kapcsolódva · egyedül vagy a szobában": "Conectat · ești singur în cameră",
  "növekvő hold, 82%": "lună în creștere, 82%",
  "Súgó": "Ajutor",
  "Frissítés": "Actualizare",
  "Éjszakai mód": "Mod de noapte",
  "Tájoló": "Orientare",
  "Kalkulátorok": "Calculatoare",
  "Gyülekező": "Punct de adunare",
  "Másikat": "Altul",
  "Másik tanács": "Alt sfat",
  "Keresés a tudástárban…": "Caută în baza de cunoștințe…",
  "Megnevezés (pl. Palackozott víz)": "Denumire (de ex. Apă îmbuteliată)",
  "a dobozról, pl. 380": "de pe ambalaj, de ex. 380",
  "pl. 37 vagy 2000": "de ex. 37 sau 2000",
  "teli tank, liter vagy kWh": "rezervor plin, litri sau kWh",
  "Egyéb hely megnevezése": "Denumirea altui loc",
  "Teljes képernyő": "Ecran complet",
  "Húzd, ha görgetnél": "Trage pentru a derula",
  "Nyomtatás": "Tipărire",
  "Keresés: szó, vagy hely (Ján 3,16)": "Caută: cuvânt sau referință (Ioan 3,16)",
  "Betűméret": "Mărimea literelor",
  "Megnevezés (pl. Gmail helyreállítási kódok)": "Denumire (de ex. coduri de recuperare Gmail)",
  "A kód, kulcs vagy seed-mondat": "Codul, cheia sau fraza seed",
  "Megjegyzés (hol használod, melyik fiók)": "Notă (unde îl folosești, care cont)",
  "Megnevezés (pl. Személyi igazolvány)": "Denumire (de ex. Carte de identitate)",
  "Kód (pl. PP-MINTA-1234)": "Cod (de ex. PP-MODEL-1234)",
  "mennyit bír hátizsákban": "cât poate duce în rucsac",
  "pl. glutén, kivi — vesszővel": "de ex. gluten, kiwi — separate prin virgulă",
  "pl. cukorbetegség": "de ex. diabet",
  "pl. Bogáncs": "de ex. Azorel",
  "egy mondat, ha a GPS nem visz oda": "o propoziție, dacă GPS-ul nu duce acolo",
  "üresen: alapterület vagy típus szerint": "gol: după suprafață sau tip",
  "üresen: típus szerint (ház 75, lakókocsi 80)": "gol: după tip (casă 75, rulotă 80)",
  "0 = földszint": "0 = parter",
  "A nap pályája ma": "Traseul soarelui azi",
  "Holdfázis: növekvő hold": "Faza lunii: lună în creștere",
  "Értesítés a telefonra": "Notificare pe telefon",
  "watt darabonként": "wați pe bucată",
  "ó/nap": "h/zi",
  "óra/nap": "ore/zi",
  "óra naponta": "ore pe zi",
  "összesen W": "total W",
  "napos óra": "ore de soare",
  "pl. egy mondat, amit csak ti tudtok": "de ex. o propoziție pe care o știți doar voi",
  "Amit át akarsz adni.": "Ceea ce vrei să predai.",
  "pl. Találkozó, Rejtek": "de ex. Întâlnire, Ascunzătoare",
  "pl. Vércsoport és gyógyszerek": "de ex. Grupă de sânge și medicamente",
  "Amit csak a családod olvashat.": "Ceea ce poate citi doar familia ta.",
  "pl. Feri, vagy Kovácsék": "de ex. Ionuț sau familia Popescu",
  "Írd ide az üzenetet": "Scrie aici mesajul",
  "pl. Ceglédi kör": "de ex. Cercul din cartier",
  "a szoba kódja": "codul camerei",
  "Bezárás": "Închide",
  "Ige — Máté 6,34": "Verset — Matei 6,34",
  "A tájoló indul…": "Orientarea pornește…",
  "Nem kaptunk engedélyt az iránytűhöz. A nap és hold rész ettől függetlenül működik.": "Nu am primit permisiune pentru busolă. Partea cu soarele și luna funcționează independent de asta.",
  "db": "buc.",
  "lejár:": "expiră:",
  "LEJÁRT": "EXPIRAT",
  "1 hónapon belül lejár": "expiră în termen de o lună",
  "fél éven belül lejár": "expiră în termen de jumătate de an",
  "hatótáv kb.": "autonomie cca.",
  "kg teherbírás": "kg capacitate",
  "Mi van itt": "Ce este aici",
  "tétel": "elemente",
  "Térképen ✓ — pozíció frissítése": "Pe hartă ✓ — actualizează poziția",
  "térképen ✓": "pe hartă ✓",
  "készültség": "grad de pregătire",
  "készültség: nincs adat": "grad de pregătire: fără date",
  "fő": "persoane",
  "nap": "zile",
  "Teszt-adatok betöltve: 3 fő, 1 háziállat, 4 helyszín (közte autó),": "Date de test încărcate: 3 persoane, 1 animal de companie, 4 locuri (între care o mașină),",
  "készlet-tétel ✓ (a neveket az adatlapjukon átírhatod)": "elemente de rezervă ✓ (numele le poți modifica în fișele lor)",
  "óra": "ore",
  "perc": "minute",
  "Napkeltéig még": "Până la răsărit mai sunt",
  "Napnyugtáig még": "Până la apus mai sunt",
  "A nap": "Soarele",
  "-e ment le.": " a apus.",
  "Ezen a szélességen ma nem megy le a nap.": "La această latitudine soarele nu apune azi.",
  "Ezen a szélességen ma nem kel fel a nap.": "La această latitudine soarele nu răsare azi.",
  "napra": "pentru zile",
  "Víz:": "Apă:",
  "Élelem:": "Hrană:",
  "Áram:": "Curent:",
  "Fűtés:": "Încălzire:",
  "nincs megmérve": "nu s-a măsurat",
  "nincs ide rendelt áramforrás": "nu există sursă de curent alocată aici",
  "— a szükséglet": "— necesarul",
  "lenne": "ar fi",
  "— powerbank, power station és napelem-termelés; az üzemanyag a fűtésnél számít": "— baterie externă, stație de alimentare și producția panourilor; combustibilul contează la încălzire",
  "A gyűrű a vízre és az élelemre vonatkozik: a gyengébbiket mutatja.": "Inelul se referă la apă și hrană: o arată pe cea mai slabă dintre ele.",
  "A leggyengébb": "Cea mai slabă verigă",
  "A gyűrű a jelen lévő típusok átlagát mutatja, a színe a leggyengébbet.": "Inelul arată media tipurilor prezente; culoarea lui arată cel mai slab.",
  "Leggyengébb:": "Cel mai slab:",
  "— a készültség ezt mutatja, mert a hiányzó láncszem dönt.": "— gradul de pregătire tocmai asta arată, pentru că veriga lipsă decide.",
  "élelem": "hrană",
  "víz": "apă",
  "fűtés": "încălzire",
  "áram": "curent",
  "Áramszünetre: hordozható energia": "Pentru pana de curent: energie portabilă",
  "Hirdetés": "Reclamă",
  "delelés": "culminație",
  "Holdfázis:": "Faza lunii:",
  "Használható fény": "Lumină utilizabilă",
  "és": "și",
  "között: a napkelte előtt és a napnyugta után is van még annyi, amivel lehet menni.": "între: și înainte de răsărit, și după apus mai este atâta încât se poate merge.",
  "A számítás": "Calculul s-a făcut pe baza",
  "alapján készült, néhány perc pontossággal.": ", cu o precizie de câteva minute.",
  "a térkép utolsó nézete": "ultimei vederi a hărții",
  "egy mentett pontod": "unui punct salvat de tine",
  "a mostani helyzeted": "poziției tale actuale",
  "növekvő hold": "lună în creștere",
  "fogyó hold": "lună în descreștere",
  "újhold": "lună nouă",
  "telihold": "lună plină",
  "első negyed": "primul pătrar",
  "utolsó negyed": "ultimul pătrar",
  "Ma éjjel gyakorlatilag nincs holdfény, számolj lámpával.": "În noaptea asta practic nu există lumină de lună, contează pe lanternă.",
  "Közepes holdfény: nyílt terepen segít, erdőben nem.": "Lumină de lună medie: în teren deschis ajută, în pădure nu.",
  "mérés az elmúlt 48 órából. Ezen a készüléken a böngésző nem éri el a légnyomás-szenzort, ezért kézzel viszed be; a telefonos appban magától fog mérni.": "măsurători din ultimele 48 de ore. Pe acest dispozitiv browserul nu are acces la senzorul de presiune, de aceea le introduci manual; în aplicația de telefon va măsura singură.",
  "Ez a böngésző nem tud értesítést megjeleníteni": "Acest browser nu poate afișa notificări",
  "Bekapcsolva — riasztáskor a telefonod jelez": "Activat — la alarmă telefonul tău anunță",
  "Kikapcsolva": "Dezactivat",
  "Adás indítása": "Pornește emisia",
  "Adás megy — koppints újra": "Emisia rulează — atinge din nou",
  "Adás": "Emisie",
  "Vétel": "Recepție",
  "Vétel megy — koppints újra": "Recepția rulează — atinge din nou",
  "Megy — koppints újra": "Rulează — atinge din nou",
  "Áll — koppints újra": "Oprit — atinge din nou",
  "Fény-SOS": "SOS cu lumină",
  "alapok — mindenkinek": "bazele — pentru toți",
  "részletek, mélyebben": "detalii, mai în profunzime",
  "ennyi áll a tárcádban": "atât se află în portofelul tău",
  "nincs internet · minden a kódban": "fără internet · totul în cod",
  "a leggyengébb": "cea mai slabă verigă",
  "Indítás": "Pornire",
  "Számolók": "Calculatoare",
  "Nem sikerült a helymeghatározás:": "Localizarea nu a reușit:",
  "A térkép utolsó nézete alapján is tudok számolni, nyisd meg egyszer a térképet.": "Pot calcula și pe baza ultimei vederi a hărții — deschide harta măcar o dată.",
  "Ehhez előbb le kell tölteni a Biblia szövegét (a Biblia képernyőn, egyszer).": "Pentru asta trebuie descărcat mai întâi textul Bibliei (pe ecranul Biblia, o singură dată).",
  "‹ Könyvek": "‹ Cărți",
  "Ószövetség": "Vechiul Testament",
  "Újszövetség": "Noul Testament",
  "300+ találat (az elsőket mutatom)": "300+ rezultate (le arăt pe primele)",
  "találat": "rezultate",
  "Nincs találat erre:": "Niciun rezultat pentru:",
  "fejezet": "Capitol",
  "Egész fejezet": "Capitolul întreg",
  "Még nincs kiemelt vers. Nyiss meg egy fejezetet, és koppints egy versre.": "Nu există încă versete evidențiate. Deschide un capitol și atinge un verset.",
  "Klasszikus prófétai szakaszok. Az értelmezésük felekezetenként eltér — itt a szöveg áll, magyarázat nélkül.": "Fragmente profetice clasice. Interpretarea lor diferă de la o confesiune la alta — aici stă doar textul, fără explicație.",
  "Amikor félsz": "Când ți-e frică",
  "Amikor nem tudod, mit tegyél": "Când nu știi ce să faci",
  "Amikor kifogytál az erődből": "Când ți s-au terminat puterile",
  "Amikor veszteség ér": "Când te lovește o pierdere",
  "Amikor félted a családodat": "Când te temi pentru familia ta",
  "Amikor az ellátás a kérdés": "Când problema este aprovizionarea",
  "Amikor másokon kell segítened": "Când trebuie să ajuți pe alții",
  "Amikor a kitartás a tét": "Când miza este perseverența",
  "Jézus beszéde az utolsó időkről": "Cuvântarea lui Isus despre vremurile din urmă",
  "Dániel látomásai": "Viziunile lui Daniel",
  "A szenvedő szolga és a Messiás": "Robul suferind și Mesia",
  "Az utolsó idők jellemzői": "Semnele vremurilor din urmă",
  "Ítélet és helyreállítás": "Judecată și restaurare",
  "teherbírás": "capacitate de transport",
  "Bogáncs": "Azorel",
  "Belépés": "Autentificare",
  "Betöltés...": "Se încarcă...",
  "Betöltés…": "Se încarcă…",
  "Értem": "Am înțeles",
  "Ha valaki ír egy szobádba, jelezzen a telefonod — akkor is, ha az app be van zárva.": "Dacă cineva scrie într-una dintre camerele tale, telefonul să te anunțe — chiar dacă aplicația este închisă.",
  "Ehhez tudni kell, hol vagy. Nyomd meg a Mérés a helyzetemre gombot.": "Pentru asta trebuie știut unde ești. Apasă butonul Calculează pentru poziția mea.",
  "Nézd meg most, mennyi üzemanyag van az autóban. Ha kevesebb mint fél tank, tankolj fel a héten, és onnantól tartsd ezt a szintet. Ez az egyetlen szokás, ami pénzbe nem kerül, mert azt a benzint úgyis megvennéd, csak korábban.": "Verifică acum cât combustibil este în mașină. Dacă este mai puțin de jumătate de rezervor, alimentează plin în această săptămână și menține de atunci acest nivel. Este singurul obicei care nu costă bani, pentru că benzina aceea oricum ai fi cumpărat-o — doar mai devreme.",
  "Tudástár — Közlekedés és mobilitás": "Bază de cunoștințe — Transport și mobilitate",
  "A lista a családtagjaidból áll össze, akiket a Háztartásnál vettél fel.": "Lista se compune din membrii familiei tale, pe care i-ai înscris la Gospodărie.",
  "A dokumentumok a telefonodon maradnak. Nem megy belőlük semmi sehova, felhőbe sem.": "Documentele rămân pe telefonul tău. Nimic din ele nu pleacă nicăieri, nici în cloud.",
  "A gomb be- és kikapcsol. Ugyanaz a gomb indítja az adást és állítja meg — nincs külön Állj.": "Butonul pornește și oprește. Același buton pornește emisia și o oprește — nu există un Stop separat.",
  "A gyűrű a leggyengébb láncszemet mutatja, nem az átlagot. Egy hiányzó dolog lehúzza az egészet — és ez szándékos.": "Inelul arată veriga cea mai slabă, nu media. Un singur lucru lipsă trage în jos totul — și asta este intenționat.",
  "A vétel és az adás ugyanazzal a gombbal kapcsol. Amíg megy, hagyd a telefont nyugton.": "Recepția și emisia se comută cu același buton. Cât timp rulează, lasă telefonul în pace.",
  "Egy témán belül két réteg van. Az alap- és az életmentő cikkek ingyenesek, mindenkinek.": "În cadrul unei teme există două straturi. Articolele de bază și cele care salvează vieți sunt gratuite, pentru toți.",
  "Ezt látja az, aki megtalálja a telefonodat. Csak azt írd bele, amit egy idegen is láthat.": "Asta vede cel care găsește telefonul tău. Scrie în el doar ceea ce poate vedea și un străin.",
  "Felveszed az azimutot, és a tájoló megmutatja a visszautat is — nem kell fejben tartanod.": "Înregistrezi azimutul, iar orientarea îți arată și drumul de întoarcere — nu trebuie să îl ții minte.",
  "Itt veszed fel a családot. Innen jön a fejadag-számítás és a helyszínek listája is.": "Aici înscrii familia. De aici provine calculul rațiilor și lista locurilor.",
  "Keresés szó szerint, és amit megjelölsz, azt könyvjelzővel bármikor visszatalálod.": "Căutare literală, iar ceea ce marchezi regăsești oricând prin semn de carte.",
  "Koppints a térképre, és ott új pontot veszel fel.": "Atinge harta și acolo se adaugă un punct nou.",
  "Több számoló van egy helyen — víz, élelem, üzemanyag. Nincs külön csempéjük, mind itt található.": "Mai multe calculatoare într-un singur loc — apă, hrană, combustibil. Nu au dală proprie, toate se găsesc aici.",
  "Új tételt a listához adsz: megadod, mi az, hova teszed, és mikor jár le.": "Adaugi un element nou la listă: ce este, unde îl pui și când expiră.",
  "A gombok be- és kikapcsolnak. Ugyanaz a gomb indítja és állítja le a jelzést.": "Butoanele pornesc și opresc. Același buton pornește semnalul și îl oprește.",
  "A QR-kód a TELJES adatot viszi, nem egy linket. Ezért működik akkor is, ha nincs internet — a másik telefon a kódból olvassa ki.": "Codul QR poartă datele COMPLETE, nu un link. De aceea funcționează și fără internet — celălalt telefon le citește direct din cod.",
  "A vaku nem minden telefonon működik. Ha nem indul, használd a képernyő-fényt — az mindenhol megy.": "Blițul nu funcționează pe orice telefon. Dacă nu pornește, folosește lumina ecranului — aceea merge peste tot.",
  "A szám azt mutatja, mennyi áll a tárcádban.": "Numărul arată cât se află în portofelul tău.",
  "D": "S",
  "K": "E",
  "Ny": "V",
  "ÉK": "NE",
  "ÉNy": "NV",
  "DK": "SE",
  "DNy": "SV",
  "Példabeszédek 22,3": "Proverbe 27,12",  // v43.335: the LXX-based 1914 Prov 22:3 says something else; the same Hebrew proverb stands in 27:12 (card 6b287cfb, 11.4 source)
  "Az eszes meglátja a bajt és elrejti magát; a bolondok pedig neki mennek és kárát vallják.": "Istețul când îi vin rele se ascunde; iar cei fără de minte umblând se păgubesc.",
  "2Timóteus 1,7": "2 Timotei 1,7",
  "Mert nem félelemnek lelkét adott nékünk az Isten; hanem erőnek és szeretetnek és józanságnak lelkét.": "Că nu ne-au dat nouă Dumnezeu duhul temerei; ci al puterei și al dragostei și al întregei înțelepciuni.",
  "Máté 6,34": "Matei 6,34",
  "Ne aggodalmaskodjatok tehát a holnap felől; mert a holnap majd aggodalmaskodik a maga dolgai felől. Elég minden napnak a maga baja.": "Drept aceea, nu vă grijiți de ziua de mâine, că ziua de mâine va grijì de ale sale. Ajunge’i zilei răutatea ei.",
  "Zsoltárok 46,2-3": "Psalmii 46,1-2",
  "Isten a mi oltalmunk és erősségünk! igen bizonyos segítség a nyomorúságban. Azért nem félünk, ha elváltoznék is a föld, ha hegyek omlanának is a tenger közepébe.": "Dumnezeu este scăparea noastră și puterea, ajutor întru necazurile cele ce ne-au aflat pre noi foarte. Pentru aceasta nu ne vom teme când se va turburà pământul și se vor mutà munții în inimile mărilor.",
  "Jakab 1,3": "Iacov 1,3",
  "Tudván, hogy a ti hiteteknek megpróbáltatása kitartást szerez.": "Știind că lămurirea credinței voastre lucrează răbdare.",
  "Uram, Te látod, mi nyomaszt engem. Ma éjjel nem tudom megoldani, és nem is akarom azt hazudni Neked, hogy nem félek. Kérlek, vedd le rólam a holnap terhét, és adj erőt ahhoz, amit ma kell elhordoznom. Csendesíts le. Te őrködsz, én alhatok. Jézus nevében, ámen.": "Doamne, Tu vezi ce mă apasă. În noaptea aceasta nu pot rezolva, și nici nu vreau să Te mint că nu mi-e frică. Te rog, ia de pe mine povara zilei de mâine și dă-mi putere pentru ceea ce trebuie să duc astăzi. Liniștește-mă. Tu veghezi, eu pot dormi. În numele lui Isus, amin.",
  "Uram, most kell döntenem, és nincs időm. Adj tiszta fejet, és őrizz meg a pániktól. Mutasd meg a következő egy lépést, nem az egészet, csak a következőt. Legyen erőm megtenni. Jézus nevében, ámen.": "Doamne, trebuie să decid acum și nu am timp. Dă-mi minte limpede și păzește-mă de panică. Arată-mi următorul pas, nu totul — doar pe următorul. Dă-mi putere să îl fac. În numele lui Isus, amin.",
  "Mennyei Atyám! Az Úr Jézus Krisztus nevében megyek eléd. Elismerem, hogy mindenható, örökkévaló Isten vagy, az egész világmindenségnek a teremtője. Én is a Te teremtményed vagyok. Elismerem, hogy bűnös ember vagyok, és sokat vétkeztem ellened. De én ma elhatározom, hogy megtérek és elfogadom a Názáreti Jézus áldozatát, és elismerem, hogy erre az áldozatra nekem is szükségem van. Ezért a szívemet, életemet megnyitom. Kérlek Uram, jöjj a szívembe. Bocsásd meg a bűneimet, szabadíts meg engem a bűntől és annak minden következményétől! Hiszek Benned Jézus. Hiszem, hogy Te vagy az élő Istennek a Fia, ki meghaltál az én bűneimért és feltámadtál a halálból, hogy megigazítsál engem. Elfogadlak Uramnak, Megváltómnak, Szabadítómnak és átadom az életemet, szívemet Neked. Szabadíts meg Uram! Tiszta szívet teremts bennem! Te azt ígérted, hogy a zörgetőnek ajtó nyittatik. Én Isten jelenlétébe akarok kerülni, és Te vagy az Út. Kérlek, vezess engem a Mindenható jelenlétébe! Dicsérlek és áldalak. Szeretlek Uram szívemből, lelkemből, erőmből, a Názáreti Jézus nevében. Dicsőség Istennek, most és mindörökké! Ámen!": "Tată ceresc! În numele Domnului Isus Hristos vin înaintea Ta. Recunosc că ești Dumnezeul atotputernic și veșnic, Creatorul întregului univers. Și eu sunt făptura Ta. Recunosc că sunt om păcătos și am greșit mult împotriva Ta. Dar astăzi hotărăsc să mă pocăiesc și să primesc jertfa lui Isus din Nazaret, și recunosc că și eu am nevoie de această jertfă. De aceea îmi deschid inima și viața. Te rog, Doamne, vino în inima mea. Iartă-mi păcatele, izbăvește-mă de păcat și de toate urmările lui! Cred în Tine, Isuse. Cred că Tu ești Fiul Dumnezeului celui viu, care ai murit pentru păcatele mele și ai înviat din morți ca să mă îndreptățești. Te primesc ca Domn, Mântuitor și Izbăvitor al meu și Îți dau viața și inima mea. Izbăvește-mă, Doamne! Zidește în mine o inimă curată! Tu ai făgăduit că celui ce bate i se va deschide. Vreau să ajung în prezența lui Dumnezeu, iar Tu ești Calea. Te rog, condu-mă înaintea Celui Atotputernic! Te laud și Te binecuvântez. Te iubesc, Doamne, din toată inima, din tot sufletul, din toată puterea, în numele lui Isus din Nazaret. Slavă lui Dumnezeu, acum și în veci! Amin!",
  "fűtés kevés": "încălzire puțină",
  "még egyedül": "încă singur",
  "te indítottad": "tu ai pornit-o",
  "Csatlakozom": "Mă alătur",
  "jelentkezés elküldve": "cerere trimisă",
  "a gazda nem engedett be": "proprietarul nu te-a lăsat să intri",
  "jóváhagyásra vár": "așteaptă aprobare",
  "névtelen": "anonim",
  "Egy powerbank a telefonhoz kevés, ha a router és a lámpa is menne. Nézd meg, mekkora kapacitás kell három napra.": "O baterie externă pentru telefon nu ajunge dacă ar trebui să meargă și routerul, și lampa. Vezi ce capacitate este necesară pentru trei zile.",
  "A nyílt lángú fűtés zárt térben szén-monoxidot termel. Ha bent fűtesz, CO-érzékelő nem opció, hanem alapfelszerelés.": "Încălzirea cu flacără deschisă în spațiu închis produce monoxid de carbon. Dacă încălzești înăuntru, detectorul de CO nu este o opțiune, ci dotare de bază.",
  "Napi három liter fejenként, csak ivásra. Mellé egy szűrő vagy klórtabletta, ha a csapvíz eredete kétségessé válik.": "Trei litri pe zi de persoană, doar pentru băut. Pe lângă asta un filtru sau tablete de clor, dacă proveniența apei de la robinet devine îndoielnică.",
  "Fejlámpa, hogy szabad maradjon a két kezed, és tartalék elem hozzá. A gyertya tűzveszély, nem megoldás.": "O lanternă frontală, ca să îți rămână ambele mâini libere, și baterii de rezervă la ea. Lumânarea este pericol de incendiu, nu soluție.",
  "— ennyi jut ténylegesen a fűtésbe,": "— atât ajunge efectiv în încălzire,",
  "Nyers tüzelő:": "Combustibil brut:",
  "(tüzifa, fűtőolaj és gázpalack együtt) — ebből a berendezés": "(lemne de foc, păcură și butelie de gaz împreună) — din care instalația transmite",
  "%-ot ad át": "%",
  "Napi fűtésigény:": "Necesar zilnic de încălzire:",
  "Víz (csempe)": "Apă",
  "Étel (csempe)": "Hrană",
  "Fűtés (csempe)": "Căldură",
  "Áram (csempe)": "Curent",
  "KÖZÖS": "COMUN",
  "Közös": "Comun",
  "közös": "comun",
  "Közös felszerelés": "Echipament comun",
  "Közös felszerelés (egyszer az egész csoportnak)": "Echipament comun (o dată pentru tot grupul)",
  "kannás víz": "apă în canistră",
  "palackos víz": "apă îmbuteliată",
  "száraz élelmiszer": "alimente uscate",
  "romlandó": "perisabil",
  "tüzifa": "lemne de foc",
  "fűtőolaj": "păcură",
  "gázpalack": "butelie de gaz",
  "üzemanyag-készlet": "rezervă de combustibil",
  "üzemanyag (mobilitás)": "combustibil (mobilitate)",
  "üzemanyag": "combustibil",
  "bébiétel": "mâncare pentru bebeluși",
  "háziállat": "animal de companie",
  "saját gyógyszer": "medicament propriu",
  "hátizsák": "rucsac",
  "1 készlet": "1 set",
  "Gyógyszer:": "Medicamente:",
  "Vércsoport:": "Grupă de sânge:",
  "Betegség:": "Boală:",
  "Vércsoport-kártya:": "Card de grupă sanguină:",
  "Élelmiszer": "Alimente",
  "Elsősegély": "Prim ajutor",
  "Eszközök - alvás/menedék": "Echipament - dormit/adăpost",
  "Eszközök - főzés/tűzgyújtás": "Echipament - gătit/aprins focul",
  "Eszközök - fűtés": "Echipament - încălzire",
  "Eszközök - világítás": "Echipament - iluminat",
  "Eszközök - öltözet": "Echipament - îmbrăcăminte",
  "Eszközök - EDC": "Echipament - EDC",
  "Higiénia": "Igienă",
  "Mobilitás": "Mobilitate",
  "Mobilitás:": "Mobilitate:",
  "Mit vigyek": "Ce să iau",
  "Fény-SOS (képernyő)": "SOS cu lumină (ecran)",
  "Fény-SOS (vaku)": "SOS cu lumină (bliț)",
  "Ürítés": "Golește",
  "Pontok kimentése (GPX)": "Exportă punctele (GPX)",
  "Teljes mentés": "Copie de siguranță completă",
  "Visszatöltés": "Restaurează",
  "Checklista nyomtatása": "Tipărește lista de verificare",
  "Kezdő": "Start",
  "Lámpa": "Lampă",
  "Beállít": "Setează",
  "LED be": "LED pornit",
  "Nincs vaku": "Fără bliț",
  "Kamera vétel leállítása": "Oprește recepția cu camera",
  "Mikrofon vétel leállítása": "Oprește recepția cu microfonul",
  "Másolás": "Copiază",
  "Beillesztés szövegből": "Inserează din text",
  "Bemutató-adatok betöltése": "Încarcă datele demonstrative",
  "A neved a közösségben": "Numele tău în comunitate",
  "Összes kategória": "Toate categoriile",
  "Összes készlet": "Toate rezervele",
  "Mennyiség (ml/db)": "Cantitate (ml/buc.)",
  "Hol áll általában": "Unde stă de obicei",
  "Miért (pl. 10 tojás, favágás)": "Pentru ce (de ex. 10 ouă, tăiat lemne)",
  "Ez összesen": "Aceasta înseamnă în total",
  "kg vagy liter": "kg sau litri",
  "Nincs találat.": "Niciun rezultat.",
  "(névtelen)": "(fără nume)",
  "nincs adat": "fără date",
  "Összesen": "Total",
  "Élelem": "Hrană",
  "hiányzik": "lipsește",
  "Hiányzik": "Lipsește",
  "személyre szóló": "pe persoană",
  "alap ruházat": "îmbrăcăminte de bază",
  "állat-specifikus": "specific animalului",
  "autó": "mașină",
  "pár": "pereche",
  "1 pár": "1 pereche",
  "1 pár (lábon)": "1 pereche (în picioare)",
  "egy az egész csoportnak": "unul pentru tot grupul",
  "kép": "imagine",
  "PDF/fájl": "PDF/fișier",
  "a tárban": "în memorie",
  "tárolt": "stocat",
  "átadásra vár": "așteaptă predarea",
  "Gíra": "Gira",
  "Hány gírát kérsz": "Câte gira ceri",
  "Hány gíra": "Câte gira",
  "Kinek (azonosító)": "Cui (identificator)",
  "Neve (nem kötelező)": "Numele (neobligatoriu)",
  "Kezdőlapon nem látszik": "Nu se vede pe pagina principală",
  "Nincs napkelte vagy napnyugta": "Nu există răsărit sau apus",
  "Légnyomás az elmúlt órákban": "Presiunea în ultimele ore",
  "Adj nevet a dokumentumnak.": "Dă un nume documentului.",
  "Nem sikerült.": "Nu a reușit.",
  "Nem sikerült:": "Nu a reușit:",
  "Nem sikerült a kamera:": "Camera nu a reușit:",
  "Nem sikerült a mikrofon:": "Microfonul nu a reușit:",
  "Nem fért el: megtelt a tár. Törölj egy régi dokumentumot.": "Nu a încăput: memoria s-a umplut. Șterge un document vechi.",
  "Add meg a PIN-t": "Introdu PIN-ul",
  "4-6 számjegy kell.": "Sunt necesare 4-6 cifre.",
  "Hibás PIN.": "PIN greșit.",
  "Feldolgozás:": "Procesare:",
  "Feldolgozás…": "Procesare…",
  "(túl nagy fájl)": "(fișier prea mare)",
  "(nem sikerült beolvasni)": "(nu a putut fi citit)",
  "(PDF, max 2 MB. Fényképezd le inkább — a fotót magamtól kicsinyítem)": "(PDF, max. 2 MB. Mai bine fotografiază-l — fotografia o micșorez singur)",
  "Még nincs dokumentum.": "Nu există încă documente.",
  "Törlöd a dokumentumot?": "Ștergi documentul?",
  "Biztosan törlöd? Koppints újra": "Sigur ștergi? Atinge din nou",
  "Előbb vegyél fel családtagot a Háztartásnál.": "Adaugă mai întâi un membru al familiei la Gospodărie.",
  "Ezen az eszközön nincs helymeghatározás": "Pe acest dispozitiv nu există localizare",
  "Helymeghatározás…": "Localizare…",
  "Új változat érhető el (": "Este disponibilă o versiune nouă (",
  "Áramforrás hiányzik": "Lipsește sursa de curent",
  "Kevés a tüzelő": "Combustibilul este puțin",
  "Kevés a víz": "Apa este puțină",
  "Nincs fényforrás": "Nu există sursă de lumină",
  "A tudástár üres.": "Baza de cunoștințe este goală.",
  "zárt": "blocat",
  "Bővített tudástár": "Bază de cunoștințe extinsă",
  "Ebben a témában": "În această temă mai există",
  "további cikk van, a bevezetőjüket fent olvashatod.": "articole, introducerile lor le poți citi mai sus.",
  "A teljes szövegük a bővített tudástár része, ami egyszeri feloldással, véglegesen elérhető.": "Textul lor complet face parte din baza de cunoștințe extinsă, accesibilă definitiv după o deblocare unică.",
  "Ennek a cikknek a szövege nem jött meg.": "Textul acestui articol nu a sosit.",
  "A cikk szövege most nem érhető el.": "Textul articolului nu este disponibil acum.",
  "Tudástár —": "Cunoștințe —",
  "Elsősegély-készlet": "Trusă de prim ajutor",
  "Fejlámpa + tartalék elem": "Lanternă frontală + baterii de rezervă",
  "Powerbank (feltöltve)": "Baterie externă (încărcată)",
  "Vízszűrő vagy víztisztító tabletta": "Filtru de apă sau tablete de purificare",
  "Öngyújtó / vízálló gyufa": "Brichetă / chibrituri impermeabile",
  "Többfunkciós kés": "Cuțit multifuncțional",
  "Gázfőző + gázpalack": "Aragaz portabil + butelie",
  "Spirituszfőző (denaturált szesz) + üzemanyag": "Reșou cu spirt (alcool denaturat) + combustibil",
  "Vegyi melegítő tasak (tűz nélkül)": "Pliculeț chimic de încălzire (fără foc)",
  "Bögre / edény a főzéshez": "Cană / vas pentru gătit",
  "Hőfólia": "Folie termoizolantă",
  "Papírtérkép és iránytű": "Hartă pe hârtie și busolă",
  "Készpénz kis címletekben": "Numerar în bancnote mici",
  "Dokumentum-másolatok": "Copii ale documentelor",
  "Vízhatlan zsák (dry bag)": "Sac impermeabil (dry bag)",
  "Mentőmellény": "Vestă de salvare",
  "Gyorsan száradó ruha": "Haine cu uscare rapidă",
  "Vízálló tok a telefonra": "Husă impermeabilă pentru telefon",
  "Réteges téli öltözet": "Îmbrăcăminte de iarnă în straturi",
  "Sapka, sál, kesztyű": "Căciulă, fular, mănuși",
  "Vízhatlan bakancs": "Bocanci impermeabili",
  "Kémiai melegítő párna": "Pernă chimică de încălzire",
  "Réteges őszi öltözet": "Îmbrăcăminte de toamnă în straturi",
  "Fejlámpa (korán sötétedik)": "Lanternă frontală (se întunecă devreme)",
  "Naptej és fejfedő": "Cremă solară și acoperământ de cap",
  "Rovarriasztó": "Soluție împotriva insectelor",
  "Extra víz (meleg miatt)": "Apă suplimentară (din cauza căldurii)",
  "Kanna víz (tartalék)": "Canistră cu apă (rezervă)",
  "Hálózsák / takaró": "Sac de dormit / pătură",
  "Szerszámkészlet": "Trusă de scule",
  "Ponyva / sátorlap": "Prelată / foaie de cort",
  "Bakancs vagy zárt cipő": "Bocanci sau pantofi închiși",
  "Alsónemű": "Lenjerie",
  "Póló": "Tricou",
  "Hosszú nadrág": "Pantaloni lungi",
  "Pulóver vagy polár": "Pulover sau fleece",
  "Aláöltözet (hosszú alsó, hosszú ujjú)": "Îmbrăcăminte termică (izmene lungi, mânecă lungă)",
  "Esőkabát vagy esőponcsó": "Pelerină sau poncho de ploaie",
  "Kesztyű": "Mănuși",
  "Váltóruha (csecsemő)": "Haine de schimb (sugar)",
  "Zokni / rugdalózó": "Șosete / salopetă",
  "Sapka (csecsemő)": "Căciuliță (sugar)",
  "Esővédő a babahordozóra": "Protecție de ploaie pentru marsupiu",
  "intim higiénia (tisztasági betét / tampon)": "igienă intimă (absorbante / tampoane)",
  "intim higiénia, ha lány": "igienă intimă, dacă este fată",
  "tápszer (a szokásos márka, napi adag +2 nap)": "lapte praf (marca obișnuită, rația zilnică +2 zile)",
  "pelenka (napi 6-8 db)": "scutece (6-8 buc. pe zi)",
  "törlőkendő": "șervețele umede",
  "cumi és pótcumi": "suzetă și suzetă de rezervă",
  "saját tápja (NE váltsunk hirtelen: gyomorrontást okoz)": "hrana lui obișnuită (NU schimba brusc: provoacă deranjament stomacal)",
  "oltási könyv másolata": "copia carnetului de vaccinare",
  "póráz és szájkosár": "lesă și botniță",
  "víztisztító tabletta": "tablete de purificare a apei",
  "vízszűrő": "filtru de apă",
  "Inzulin hűtve: hűtőtáska + gélakku": "Insulină la rece: geantă frigorifică + acumulator de gel",
  "az inzulin 2-8 °C-ot kíván": "insulina necesită 2-8 °C",
  "Vércukormérő, tesztcsík, lándzsa": "Glucometru, teste, ace",
  "cukorbetegség az adatlapján": "diabet în fișa lui",
  "Szőlőcukor / gyors cukor": "Glucoză / zahăr rapid",
  "hipoglikémia esetére": "în caz de hipoglicemie",
  "Tartalék toll/tű + éles-gyűjtő": "Pen/ac de rezervă + recipient pentru ace",
  "ha az egyik elromlik vagy elvész": "dacă unul se strică sau se pierde",
  "Allergia-gyógyszer (": "Medicament pentru alergie (",
  "allergia az adatlapján": "alergie în fișa lui",
  "Adrenalin autoinjektor, ha fel van írva": "Autoinjector cu adrenalină, dacă este prescris",
  "súlyos allergiás reakció percek alatt kialakulhat": "o reacție alergică gravă poate apărea în câteva minute",
  "az adatlapjáról": "din fișa lui",
  "az ő adatlapjáról, +2 nap tartalék": "din fișa lui, +2 zile rezervă",
  "amit viszünk; a teljes igény": "ce ducem; necesarul complet",
  "indulásra; a teljes igény": "pentru plecare; necesarul complet",
  ": nincs megadva a testtömeg, 15 kg-mal számoltam. Az adatlapján javítható.": ": nu s-a specificat greutatea corporală, am calculat cu 15 kg. Se poate corecta în fișa lui.",
  "Több helyen is bejelölve:": "Bifat în mai multe locuri:",
  "— mindegyiknél teljes mennyiséggel számít.": "— la fiecare se socotește cantitatea completă.",
  "A víz csak az indulásra elég: a teljes igény": "Apa ajunge doar pentru plecare: necesarul complet ar fi",
  "liter lenne, ebből": "litri, din care",
  "liter megy veletek. A többit útközben kell megszerezni és tisztítani.": "litri merg cu voi. Restul trebuie procurat și purificat pe drum.",
  "Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez túrához való, és a listán kiírom, mennyit kell útközben szerezni.": "Calculează doar cu ce poți duce: 1,5 litri de persoană. Este pentru tură, iar pe listă scriu cât trebuie procurat pe drum.",
  "Jelöld ki, ki megy. Enélkül nem tudom kiszámolni, mennyi kell.": "Bifează cine merge. Fără asta nu pot calcula cât este necesar.",
  "kategóriájú ruházatot kíván. A készletedben": "— este nevoie de îmbrăcăminte din această categorie. În rezerva ta sunt",
  "ilyen tétel van.": "astfel de elemente.",
  "nincs ilyen tétel — a készletnél ez egy kategória.": "nu există astfel de element — în rezervă aceasta este o categorie.",
  "liter víz és": "litri de apă și",
  "kcal élelem. Becsült tömeg:": "kcal hrană. Greutate estimată:",
  "A víz csak az indulásra elég.": "Apa ajunge doar pentru plecare.",
  "napra valójában": "zile ar fi nevoie în realitate de",
  "liter kellene, ennyit viszont nem lehet elvinni.": "litri, dar atâta nu se poate duce.",
  "liter, amit útközben kell megszerezni:": "litri trebuie procurați pe drum:",
  "vízszűrő, víztisztító tabletta, ismert vízvételi pont. Ezt a listán is nézd meg.": "filtru de apă, tablete de purificare, un punct de apă cunoscut. Vezi asta și pe listă.",
  "A készletedben most": "În rezerva ta sunt acum",
  "kcal van megadva, ami ennek az útnak a": "kcal, ceea ce pentru acest drum reprezintă",
  "Hiányzik még kb.": "Mai lipsesc circa",
  "Ez elég.": "Aceasta ajunge.",
  "tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz.": "elemente nu au energia specificată (kcal/100 g), acelea nu se iau în calcul. Citită de pe ambalaj va fi mai exact.",
  "Ez nehezebb, mint amit el tudtok vinni. A kijelölt személyek együtt kb.": "Aceasta este mai greu decât puteți duce. Persoanele bifate duc împreună circa",
  "kg-ot bírnak, a lista": "kg, iar lista cântărește",
  "kg. A víz a legnehezebb: fontold meg a vízszűrőt kanna helyett, vagy vidd rövidebb szakaszra.": "kg. Apa este cea mai grea: ia în calcul un filtru în loc de canistră, sau du-o pe o distanță mai scurtă.",
  "Belefér: a kijelöltek kb.": "Încape: cei bifați duc circa",
  "kg-ot bírnak.": "kg.",
  "fő között: fejenként kb.": "persoane: de fiecare circa",
  "Nála:": "La el:",
  "kg (ebből": "kg (din care",
  "kg a sajátja": "kg ale lui",
  "kg a közösből": "kg din cele comune",
  "· teherbírása": "· capacitatea sa",
  "— EZ TÖBB, MINT AMIT ELBÍR": "— ACEASTA ESTE MAI MULT DECÂT POATE DUCE",
  "— belefér": "— încape",
  "A hiányzik jelölésűek a beszerzési listád. Most": "Cele marcate ca lipsă sunt lista ta de cumpărături. Acum sunt",
  "ilyen van. A vizet és az élelmet a készlet KATEGÓRIÁJÁBÓL ismeri fel, a többit a nevéből.": "astfel de elemente. Apa și hrana le recunoaște după CATEGORIA rezervei, restul după nume.",
  "A víz- és energia-számok tervezési értékek, nem orvosi előírás. A csecsemő és az állat külön normával számol.": "Valorile de apă și energie sunt valori de planificare, nu prescripție medicală. Sugarul și animalul se calculează după normă proprie.",
  "Egy power station a telefont, a lámpát és egy rádiót is elviszi napokig. Kisebb igényre powerbank is elég.": "O stație de alimentare duce telefonul, lampa și o stație radio zile întregi. Pentru un necesar mai mic ajunge și o baterie externă.",
  "Tűzifa, PB-palack vagy fűtőolaj — a kockázatelemzés kiszámolja, mennyi kell a megadott napokra.": "Lemne de foc, butelie de gaz sau păcură — analiza riscurilor calculează cât este necesar pentru zilele indicate.",
  "Kannás víz és víztisztító a legolcsóbb biztosíték. Egy IBC tartály hosszú távra megoldja.": "Apa în canistră și soluția de purificare sunt cea mai ieftină asigurare. Un rezervor IBC rezolvă pe termen lung.",
  "Egy fejlámpa a legfontosabb: szabadon hagyja a kezed. Mellé egy tartalék elemkészlet.": "Cea mai importantă este o lanternă frontală: îți lasă mâinile libere. Pe lângă ea un set de baterii de rezervă.",
  "A tárolt üzemanyag a fűtésnél is szerepel: ugyanaz a liter vagy fűt, vagy visz.": "Combustibilul depozitat apare și la încălzire: același litru ori încălzește, ori te duce.",
  "Ehhez a helyszínhez még nincs készlet rendelve, ezért nem tudjuk mérni. A Készletnél a tétel Tárolási helyénél tudod bejelölni.": "Acestui loc nu i s-a alocat încă nicio rezervă, de aceea nu putem măsura. O poți bifa la Rezervă, la Locul de depozitare al elementului.",
  "Ehhez a helyszínhez nincs tétel rendelve. A Készletnél a tétel Tárolási helyénél tudod bejelölni.": "Acestui loc nu i s-a alocat niciun element. O poți bifa la Rezervă, la Locul de depozitare al elementului.",
  ": nincs hatótáv — add meg a fogyasztást az adatlapján": ": fără autonomie — specifică consumul în fișa lui",
  "20000 = 20 liter (millilitert kérünk)": "20000 = 20 de litri (cerem mililitri)",
  "5000 = egy 5 literes kanna": "5000 = o canistră de 5 litri",
  "1500 = másfél literes": "1500 = un litru și jumătate",
  "100000 = egy mázsa": "100000 = un chintal",
  "11500 = egy 11,5 kg-os PB": "11500 = o butelie de 11,5 kg",
  ". Ez soknak tűnik. Biztos, hogy jó a mennyiség": ". Pare mult. Sigur sunt corecte cantitatea",
  "és az egységnyi súly? (Egy IBC tartály például 1 darab, 1000 kg.) OK = mégis felveszem.": "și greutatea unitară? (Un rezervor IBC este de exemplu 1 bucată, 1000 kg.) OK = îl adaug totuși.",
  "A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan. Töltsd ki a Vészkártya szekcióban.": "Cardul tău de urgență (grupă de sânge, alergie, medicamente, contact) apare aici rapid. Completează-l în secțiunea Card de urgență.",
  "pl. Amit hozz magaddal": "de ex. Ce să aduci cu tine",
  "víz 5 liter&#10;elemlámpa&#10;gyógyszerek": "apă 5 litri&#10;lanternă&#10;medicamente",
  "Vízitúra": "Tură pe apă",
  "Őszi túra": "Tură de toamnă",
  "Nyári túra": "Tură de vară",
  "Esőkabát": "Pelerină de ploaie",
  "Ehhez a helyszínhez még nincs készlet rendelve, ezért nem tudjuk mérni. A Készletnél a tétel Tárolási helyénél válaszd ki:": "Acestui loc nu i s-a alocat încă nicio rezervă, de aceea nu putem măsura. La Rezervă, la Locul de depozitare al elementului alege:",
  "élelmiszernél hiányzik az energia (kcal/100 g) — addig az étel „?”.": "alimente lipsește energia (kcal/100 g) — până atunci la hrană stă „?”.",
  "Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez túrához való, és a listán kiírom, mennyi hiányzik a teljes fejadaghoz.": "Calculează doar cu ce poți duce: 1,5 litri de persoană. Este pentru tură, iar pe listă scriu cât lipsește până la rația completă.",
  "tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz a kép.": "elemente nu au energia specificată (kcal/100 g), acelea nu se iau în calcul. Citită de pe ambalaj imaginea va fi mai exactă.",
  "A víz- és energia-számok tervezési értékek, nem orvosi előírás. A csecsemő és az állat külön normán fut, nem a felnőtt arányosításából.": "Valorile de apă și energie sunt valori de planificare, nu prescripție medicală. Sugarul și animalul au normă proprie, nu una dedusă proporțional din cea a adultului.",
  "fő ·": "persoane ·",
  "nap ·": "zile ·",
  "fő/állat ·": "persoane/animale ·",
  "fő)": "persoane)",
  "Víz (": "Apă (",
  "kg testtömegre)": "kg greutate corporală)",
  "0,06 l/testtömeg-kg/nap": "0,06 l/kg greutate corporală/zi",
  "l/nap ×": "l/zi ×",
  "kcal/nap ×": "kcal/zi ×",
  "személyre szóló (": "pe persoană (",
  ": be van írva a betegség (": ": boala este înscrisă (",
  "fejenként egy (": "câte unul de persoană (",
  "— a": "— din",
  "-es tank": "-litri rezervor",
  "m² alapján": "pe baza a m²",
  "%-a .": "% .",
  "a helyszín típusa szerint": "după tipul locului",
  "kézzel megadott": "introdus manual",
  "kézzel megadott napi igény": "necesar zilnic introdus manual",
  "itteni élelmiszernél hiányzik a súly vagy az energia (kcal/100 g), ezért nem számít bele. Nyisd meg a tételt a Készletnél, és írd be a doboz adatait.": "alimente de aici le lipsește greutatea sau energia (kcal/100 g), de aceea nu se iau în calcul. Deschide elementul la Rezervă și introdu datele de pe ambalaj.",

  // --- POTLAS 2026-08-31 (Marveen): a het szotar osszevetesebol hianyzo kulcsok.
  // Az UKRAN valtozat volt az egyetlen teljes (1218 kulcs); ezek a tobbi hatbol
  // kimaradtak. Forditatlanul nem hibaznak, hanem MAGYARUL jelennek meg.
  "A szoba kulcsa": "Cheia camerei",
  "A tudástár betöltése folyamatban…": "Se încarcă baza de cunoștințe…",
  "Távolság mérése": "Măsurarea distanței",
  "Törölve.": "Șters.",
  "helyszín": "loc",
  "Élelmiszer:": "Alimente:",
  "Összes hely": "Toate locurile",
  "ÜTEM INDÍTÁSA": "PORNEȘTE RITMUL",

  // --- POTLAS 2026-08-31 (Marveen), a `pp-i18n-hiany.mjs` MERESEBoL: 18 szoveg, ami
  // tenylegesen MAGYARUL jelent meg az idegen nyelvu feluleten. A kulcsok a mero
  // kimenetebol valok (`store/pp-i18n-hiany.json`), nem kezzel gepelve.
  // Az ALLPOWERS-tetelknel a MARKANEV es a TIPUS valtozatlan, csak a leiras fordul.
  "2 méter (145 MHz) — amatőr": "2 metri (145 MHz) — radioamatori",
  "40 méter (7 MHz) — amatőr, rövidhullám": "40 de metri (7 MHz) — radioamatori, unde scurte",
  "70 cm (435 MHz) — amatőr": "70 cm (435 MHz) — radioamatori",
  "80 méter (3,6 MHz) — amatőr, rövidhullám": "80 de metri (3,6 MHz) — radioamatori, unde scurte",
  "CB (27 MHz) — polgári sáv": "CB (27 MHz) — banda cetățenească",
  "PMR446 (446 MHz) — engedély nélküli kézirádió": "PMR446 (446 MHz) — stație portabilă fără licență",
  "ALLPOWERS B1000 bővítő akku (1152 Wh)": "ALLPOWERS B1000 acumulator de extensie (1152 Wh)",
  "ALLPOWERS B3000 bővítő akku (3168 Wh)": "ALLPOWERS B3000 acumulator de extensie (3168 Wh)",
  "ALLPOWERS P1800 (1024 Wh): 1024 Wh tárolt energia, 1800 W folyamatos kimenet": "ALLPOWERS P1800 (1024 Wh): 1024 Wh energie stocată, 1800 W putere continuă",
  "ALLPOWERS SF100 (100 W, hajlékony)": "ALLPOWERS SF100 (100 W, flexibil)",
  "ALLPOWERS SF200 (200 W, hajlékony)": "ALLPOWERS SF200 (200 W, flexibil)",
  "ALLPOWERS SP012 (100 W, terepszínű)": "ALLPOWERS SP012 (100 W, camuflaj)",
  "Jegyzet rajzolása": "Desenează o notiță",
  "2100 kcal fejenként naponta. Járkálás, ház körüli teendők. Ez a nemzetközi vészhelyzeti tervezés alapszáma is.": "2100 kcal de persoană pe zi. Mers prin casă, treburi în jurul casei. Este și cifra de bază a planificării internaționale de urgență.",
  "A hatótávot HÁROM dolog dönti el, és a watt csak az egyik — rendszerint a legkisebb súlyú. A másik kettő: hogy MILYEN SÁVON adsz, és hogy MI van közted és a másik között. Ezért nem lehet egy rádióra egyetlen kilométer-számot mondani.": "Raza de acțiune este decisă de TREI lucruri, iar wații sunt doar unul dintre ele — de obicei cel mai puțin important. Celelalte două: pe CE BANDĂ emiți și CE se află între tine și celălalt. De aceea nu se poate da o singură cifră în kilometri pentru o stație.",
  "Írd be, amit tudsz — ami nincs a listán, azt add hozzá a végén. A kilogrammnál a SZÁRAZ tömeg számít (a rizs főzve nehezebb, de ugyanannyi kalória).": "Scrie ce știi — ce nu e pe listă, adaugă la sfârșit. La kilograme contează masa USCATĂ (orezul fiert e mai greu, dar are aceleași calorii).",
  "Magyarországon engedély nélkül használható, de a törvény MAXIMUM 0,5 wattot és gyári, nem cserélhető antennát enged. Ezért van, hogy a doboz 10 kilométert ígér, a valóság meg 1-3.": "În Ungaria poate fi folosit fără licență, dar legea permite MAXIMUM 0,5 wați și o antenă din fabrică, neînlocuibilă. De aceea cutia promite 10 kilometri, iar realitatea este 1-3.",
  "Nem fogyókúrás számoló. Azt mondja meg, hogy a KÉSZLETED hány napra elég, és mennyi hiányzik ahhoz a naphoz, ameddig ki akarod húzni. A napi szükséglet nem „normál\" étkezés: vészhelyzetben a cél a működőképesség, nem a jóllakottság.": "Nu este un calculator de slăbit. Îți spune pentru câte zile ajunge REZERVA TA și cât lipsește până în ziua până la care vrei să reziști. Necesarul zilnic nu este o alimentație 'normală': în situație de urgență scopul este să rămâi funcțional, nu sătul.",

  // SUGO-TURA (coach) szovegei, 2026-10-05 -- Fonok: "Menjen a forditas."
  "Helyi szoba: szöveg a közeledben lévőknek, közös hálón, internet nélkül.": "Cameră locală: text pentru cei din apropierea ta, într-o rețea comună, fără internet.",
  "Szobák: zárt csoport, amit a gazda kódjával lehet elérni, interneten át. Messziről is.": "Camere: un grup închis accesibil cu codul proprietarului, prin internet. Chiar și de departe.",
  "Morze: rövid üzenet hanggal vagy fénnyel; a vétel kamerával és mikrofonnal megy.": "Morse: un mesaj scurt prin sunet sau lumină; recepția merge cu camera și cu microfonul.",
  "Fax (SSTV): kép átküldése hangban, rádión is. Ugyanaz a gomb indít és állít.": "Fax (SSTV): trimiterea unei imagini în sunet, și prin radio. Același buton pornește și oprește.",
  "Adás: ide írod az üzenetet, és a telefon hanggal vagy fénnyel leadja.": "Emisie: aici scrii mesajul, iar telefonul îl transmite prin sunet sau lumină.",
  "Olvasás fényből: a kamera a másik villogó fényét olvassa vissza szöveggé.": "Citire din lumină: camera transformă înapoi în text lumina intermitentă a celuilalt.",
  "Olvasás hangból: a mikrofon a sípoló jelet fejti vissza.": "Citire din sunet: microfonul decodează semnalul care piuie.",
  "Gyakorló: hallás utáni fejtés, kézi kulcs és kopogás — itt tanulod meg.": "Antrenament: descifrare după auz, manipulator manual și bătăi — aici înveți.",
  "Alapok: időzítés, sebesség, a teljes ábécé, és mit tegyél zárt helyen.": "Baze: ritm, viteză, alfabetul complet și ce să faci într-un spațiu închis.",
  "A szoba beállításai": "Setările camerei",
  "A szoba kódja: ezt add meg annak, akit behívsz. Koppints rá, és a vágólapra kerül.": "Codul camerei: dă-l celui pe care îl inviți. Atinge-l și ajunge în clipboard.",
  "Értesítés: a készülék engedélye, és külön az, hogy EBBEN a szobában jelezzen-e.": "Notificare: permisiunea dispozitivului și, separat, dacă să te anunțe în ACEASTĂ cameră.",
  "A neved: ezen a néven látnak minden szobában. Egy szobában egy nevet csak egy valaki használhat.": "Numele tău: sub acest nume te văd în fiecare cameră. Într-o cameră un nume poate fi folosit de o singură persoană.",
  "Tagok: a szoba tagjainak listája. Ha te vagy a gazda, egy tagra koppintva eltávolíthatod: az új üzeneteket már nem látja, és csak új meghívóval jöhet vissza.":
    "Membri: lista membrilor camerei. Dacă tu ești gazda, atinge un membru ca să-l elimini: nu mai vede mesajele noi și poate reveni doar cu o invitație nouă.",
  "Megszüntetés: ha te vagy a gazda, a törlés mindenkinek megszünteti. Ha nem, csak te lépsz ki.": "Desființare: dacă ești proprietar, ștergerea elimină camera pentru toți. Dacă nu, ieși doar tu.",
  "A helyi szoba beállításai": "Setările camerei locale",
  "A szoba kulcsa: közös jelszó. Akinek nincs meg, annak értelmetlen betűsor marad az üzenet.": "Cheia camerei: o parolă comună. Cine nu o are, pentru el mesajul rămâne un șir de litere fără sens.",
  "A neved: ezt látják a többiek az üzeneted mellett.": "Numele tău: asta văd ceilalți lângă mesajul tău.",
  "Morze adás": "Emisie Morse",
  "Ide írod az üzenetet. Ékezet és cirill nem megy: a Morze-tábla latin betűt és számot ismer.": "Aici scrii mesajul. Diacriticele și chirilicele nu merg: tabelul Morse cunoaște litere latine și cifre.",
  "Alatta rögtön látod, hogy néz ki Morze-jelekben.": "Imediat dedesubt vezi cum arată în semne Morse.",
  "Adás: ugyanaz a gomb indít és állít. Nincs külön Állj.": "Emisie: același buton pornește și oprește. Nu există un Stop separat.",
  "SOS: egy koppintás, és megy a nemzetközi vészjel, amíg le nem állítod.": "SOS: o atingere și pleacă semnalul internațional de pericol, până îl oprești.",
  "A fogaskerék alatt a sebesség, a hangmagasság, az ismétlés és a villogtatás.": "Sub roata dințată: viteza, înălțimea sunetului, repetarea și clipirea.",
  "Olvasás fényből": "Citire din lumină",
  "Indítsd, és irányítsd a kamerát a villogó fényre. Sötét háttér, a fény a kép közepén.": "Pornește și îndreaptă camera spre lumina intermitentă. Fundal întunecat, lumina în mijlocul cadrului.",
  "A lámpa és a sáv mutatja, mit lát a kamera. Ha nem villan, nem jó a kivágás.": "Lampa și bara arată ce vede camera. Dacă nu clipește, cadrul nu e bun.",
  "Fent a nyers jel, alatta a megfejtett szöveg.": "Sus semnalul brut, dedesubt textul descifrat.",
  "A fogaskerék alatt a vétel-sebesség, a nagyítás és a kalibráció.": "Sub roata dințată: viteza de recepție, mărirea și calibrarea.",
  "Olvasás hangból": "Citire din sunet",
  "Indítsd, és tartsd a telefont a hang felé. Csendben megy a legjobban.": "Pornește și ține telefonul spre sunet. Merge cel mai bine în liniște.",
  "A lámpa és a frekvencia mutatja, mit hall. Zajra az érzékenységet szigorítsd.": "Lampa și frecvența arată ce aude. Împotriva zgomotului, strânge sensibilitatea.",
  "A fogaskerék alatt a vétel-sebesség, az érzékenység és a kalibráció.": "Sub roata dințată: viteza de recepție, sensibilitatea și calibrarea.",
  "Morze gyakorló": "Antrenor Morse",
  "Három mód: hallás után, kézi kulcs és kopogás. Egy koppintás a váltás.": "Trei moduri: după auz, manipulator manual și bătăi. O atingere schimbă între ele.",
  "Mit gyakorolsz: betű, szám, három jel vagy szó. Kezdd a betűvel.": "Ce exersezi: literă, cifră, trei semne sau cuvânt. Începe cu litera.",
  "Új feladat lejátszik egy jelet. Ha nem kaptad el, játszd le újra.": "Exercițiu nou redă un semnal. Dacă nu l-ai prins, redă-l din nou.",
  "Írd le, amit hallottál, és ellenőrizd. A megoldás és a Morze-minta csak utána látszik.": "Scrie ce ai auzit și verifică. Soluția și tiparul Morse apar abia după aceea.",
  "Kézi kulcs": "Manipulator manual",
  "Nyomd és tartsd: rövid a pont, hosszú a vonás. Gépen a szóköz is kulcs.": "Apasă și ține: scurt este punctul, lung este linia. Pe calculator și bara de spațiu este manipulator.",
  "Fent a jel, alatta amit a gép kiolvasott belőle. A szünet hossza adja a betű- és szóhatárt.": "Sus semnalul, dedesubt ce a citit aplicația din el. Durata pauzei dă granița de literă și de cuvânt.",
  "Törlés: tiszta lappal kezdesz.": "Șterge: începi cu foaia curată.",
  "Kopogás": "Bătăi",
  "A rács: minden betű két koppintás-csoport, előbb a sor, aztán az oszlop. A C és a K egy mezőn van.": "Grila: fiecare literă înseamnă două grupuri de bătăi, întâi rândul, apoi coloana. C și K împart o căsuță.",
  "Mutat egy betűt, te lekopogod: sor, szünet, oszlop. A szünet zárja a csoportot.": "Îți arată o literă și tu o bați: rând, pauză, coloană. Pauza închide grupul.",
  "Megmondja, jó volt-e, és kiírja a betű helyét a rácsban.": "Îți spune dacă a fost corect și arată locul literei în grilă.",
  "Morze alapok": "Bazele Morse",
  "A teljes ábécé. Ez a táblázat magából a kódból épül, tehát nem tud eltérni attól, amit az app ad.": "Alfabetul complet. Acest tabel este construit chiar din cod, deci nu poate diferi de ce transmite aplicația.",
  "Kézi visszafejtés: ha leírtad a hallott jelet, ide beírva megkapod a szöveget.": "Decodare manuală: dacă ai notat semnalul auzit, scrie-l aici și primești textul.",
  "Adás beállításai": "Setări de emisie",
  "Sebesség és hangmagasság. Kezdőnek a lassabb a jobb.": "Viteză și înălțimea sunetului. Pentru începător e mai bună cea mai lentă.",
  "Ismétlés: addig megy a jel, amíg le nem állítod.": "Repetare: semnalul merge până îl oprești.",
  "Fény, hang vagy mindkettő. A vaku nem minden telefonon megy; a képernyő mindig.": "Lumină, sunet sau amândouă. Blițul nu merge pe orice telefon; ecranul întotdeauna.",
  "Kalibrációs adás: a PARIS szót küldi, amiből a másik fél beállítja a tempót.": "Emisie de calibrare: trimite cuvântul PARIS, după care cealaltă parte își reglează ritmul.",
  "Fény-vétel beállításai": "Setări pentru recepția din lumină",
  "Vétel-sebesség: állítsd a vett Morze tempójához, amíg tisztán jönnek a betűk.": "Viteza de recepție: reglează-o după ritmul semnalului Morse recepționat, până când literele vin curat.",
  "Nagyítás: távoli fényhez.": "Mărire: pentru o lumină îndepărtată.",
  "Kalibráció: a másik PARIS-t küld, ez megméri belőle a tempót.": "Calibrare: celălalt trimite PARIS, iar de aici se măsoară ritmul.",
  "Hang-vétel beállításai": "Setări pentru recepția din sunet",
  "Vétel-sebesség: állítsd a vett Morze tempójához.": "Viteza de recepție: reglează-o după ritmul semnalului Morse recepționat.",
  "Érzékenység: balra érzékenyebb, jobbra szigorúbb a zajra.": "Sensibilitate: spre stânga mai sensibilă, spre dreapta mai strictă față de zgomot.",
  "Mód: Martin M1 a biztos; a vevőnek ugyanezt kell tudnia.": "Mod: Martin M1 este cel sigur; receptorul trebuie să cunoască același mod.",
  "Kép választása, majd Adás: a telefon hangként játssza le. Tartsd a rádió mikrofonjához.": "Alegi o imagine, apoi Emisie: telefonul o redă ca sunet. Ține-l la microfonul stației radio.",
  "Vétel: ugyanaz a gomb indít és állít. Hangfájlból is megy, ha valaki felvételt küld.": "Recepție: același buton pornește și oprește. Merge și dintr-un fișier audio, dacă cineva trimite o înregistrare.",
  "Nyomd hosszan a térképet: ott új pontot veszel fel. A helyszínek jelölőjén a szám a készültség, nem sorszám.": "Ține apăsat pe hartă: acolo adaugi un punct nou. Pe marcajele locațiilor tale, numărul este nivelul de pregătire, nu un număr de ordine.",
  "Mérés: két koppintás, és megkapod a távolságot.": "Măsurare: două atingeri și ai distanța.",
  "Pont ide, ahol vagyok: a GPS helyedet menti. Helyzetem küldése: elküldöd valakinek, hol vagy.": "Un punct chiar aici: salvează poziția ta GPS. Trimite poziția mea: trimiți cuiva unde ești.",
  "Pontok kimentése (GPX): a pontjaid fájlba, más térképbe is.": "Export puncte (GPX): punctele tale într-un fișier, și pentru alte hărți.",
  "Terület letöltése: a térkép offline is meglesz. Ha nem kell már, a Tárolt térkép törlése felszabadítja a helyet.": "Descarcă zona: harta va fi disponibilă și offline. Dacă nu mai ai nevoie de ea, Șterge harta salvată eliberează spațiul.",
  "A bővített tudástár a Prémium része: prémium kóddal, egyszeri feloldással, véglegesen. A cikk elején látod, meddig tart az ingyenes rész és hol kezdődik a bővített.": "Baza de cunoștințe extinsă face parte din Premium: deblocată o singură dată cu un cod premium, definitiv. La începutul articolului vezi unde se termină partea gratuită și unde începe cea extinsă.",
  "Kereséssel gyorsabban odaérsz, mint görgetéssel.": "Cu căutarea ajungi mai repede decât derulând.",
  "Új tétel: mi az, mennyi, hol tartod, mikor jár le. A lejárat színe magától változik.": "Articol nou: ce este, cât, unde îl ții, când expiră. Culoarea expirării se schimbă singură.",
  "Szűrés kategóriára, helyszínre és készlet-fajtára: a 72 órás csomagot például külön látod.": "Filtrare după categorie, locație și tip de rezervă: pachetul de 72 de ore, de exemplu, îl vezi separat.",
  "72h csomag: egy koppintással feltölti az alap-listát, amit aztán a sajátodra igazítasz.": "Pachetul 72h: o atingere completează lista de bază, pe care apoi o ajustezi după tine.",
  "Export: a lista fájlba, például a családnak. Ürítés: mindent töröl, előtte exportálj.": "Export: lista într-un fișier, de exemplu pentru familie. Golire: șterge tot, exportă înainte.",
  "Kik mennek: a lista a Háztartásnál felvett családtagokból áll össze.": "Cine merge: lista se formează din membrii familiei adăugați la Gospodărie.",
  "Hogyan és milyen út: autóval más fér, mint hátizsákkal; a túra fajtája hozza a saját tételeit.": "Cum și ce fel de drum: în mașină încape altceva decât în rucsac; tipul de ieșire aduce propriile articole.",
  "Hány napra: ebből számol a víz és az élelem.": "Pentru câte zile: de aici se calculează apa și mâncarea.",
  "A súlykeret azt mutatja, mennyit bírtok el összesen, nem azt, mennyi fér a zsákba.": "Limita de greutate arată cât puteți duce împreună, nu cât încape în rucsac.",
  "Itt veszed fel a családot. Innen jön a fejadag és a Mit vigyek lista.": "Aici adaugi familia. De aici vin rația zilnică și lista Ce să iau.",
  "Háziállat is számít: víz és élelem neki is kell.": "Și animalele de companie contează: și ele au nevoie de apă și mâncare.",
  "Helyszín: otthon, nyaraló, autó. Mindegyiknek saját készlete és készültség-kártyája lesz a kezdőlapon.": "Locație: acasă, casă de vacanță, mașină. Fiecare va avea propria rezervă și propriul card de pregătire pe pagina de start.",
  "Ezt látja, aki megtalálja a telefonod. Csak azt írd ide, amit egy idegen is láthat.": "Asta vede cel care îți găsește telefonul. Scrie aici doar ce poate vedea și un străin.",
  "Vércsoport, allergia, gyógyszer, betegség: ez az, ami egy mentőnek számít.": "Grupa de sânge, alergie, medicament, boală: asta contează pentru un paramedic.",
  "Kit hívjanak: egy név és egy szám elég.": "Pe cine să sune: ajung un nume și un număr.",
  "QR-kód: a kártya egy képben, amit a másik telefon beolvas.": "Cod QR: cardul într-o singură imagine, pe care alt telefon o poate citi.",
  "Nyomtatás: a tárcába. Mind nyomtatása minden családtagét, a Családi kártya egy QR-ral az egész családot.": "Tipărire: pentru portofel. Tipărește tot tipărește cardul fiecărui membru, iar Cardul de familie cuprinde toată familia într-un singur QR.",
  "PIN: az iratok zárva vannak, amíg be nem írod.": "PIN: documentele rămân blocate până îl introduci.",
  "Hozzáadás: fotó vagy PDF. A telefonon marad, felhőbe nem megy.": "Adaugă: o fotografie sau un PDF. Rămâne pe telefon, nu ajunge în cloud.",
  "Közös jelszó: egy mondat, amit csak ti tudtok. Ugyanaz kell mindkét telefonon; mentsd el.": "Parolă comună: o propoziție pe care o știți doar voi. Pe ambele telefoane e nevoie de aceeași; salveaz-o.",
  "Üzenet vagy hely, majd QR készítése. A kód a teljes adatot viszi, nem linket: internet nélkül is megy.": "Mesaj sau loc, apoi Creează QR. Codul duce datele complete, nu un link: merge și fără internet.",
  "Beolvasás kamerával vagy fájlból, majd Megfejtés. Csak a jelszó birtokosa olvassa.": "Citire cu camera sau dintr-un fișier, apoi Decodează. Îl citește doar cine are parola.",
  "Az imádságok mindig itt vannak, letöltés nélkül is. Koppints egy címre, és olvasd.": "Rugăciunile sunt mereu aici, chiar și fără descărcare. Atinge un titlu și citește.",
  "A teljes Biblia egyszer letöltendő, utána offline is működik. Ha ez a gomb látszik, még nincs letöltve.": "Biblia completă trebuie descărcată o dată, după aceea funcționează și offline. Dacă acest buton este vizibil, încă nu a fost descărcată.",
  "A könyvek rácsa: Ószövetség fent, Újszövetség lent. Koppints a könyvre, aztán a fejezetre, aztán a versre.": "Grila cărților: Vechiul Testament sus, Noul Testament jos. Atinge cartea, apoi capitolul, apoi versetul.",
  "Keresés szó szerint, vagy hely szerint (Ján 3,16). Amit megjelölsz, a Kiemeléseim alatt visszatalálod.": "Caută după cuvinte sau după referință (Ioan 3,16). Ce marchezi regăsești la Evidențierile mele.",
  "PIN: a tárca zárva van, amíg be nem írod. Első használatkor te adod meg.": "PIN: portofelul rămâne blocat până îl introduci. La prima folosire îl stabilești tu.",
  "A szám azt mutatja, mennyi áll a tárcádban; a rekeszek külön célra tesznek félre.": "Numărul arată cât ai în portofel; compartimentele pun deoparte pentru scopuri separate.",
  "Felveszed az azimutot, és a tájoló mutatja a visszautat is. Törlés, ha új irány kell.": "Înregistrezi azimutul, iar busola îți arată și drumul de întoarcere. Șterge dacă ai nevoie de o direcție nouă.",
  "Napkelte, napnyugta, holdfázis: mennyi világosod van. Mérés a helyzetemre pontosít GPS-szel.": "Răsărit, apus, faza lunii: cât lumină de zi ai. Măsurarea o precizează la poziția ta cu GPS.",
  "Légnyomás: írd be vagy mérd a szenzorral, és rögzítsd. Az esés vihart jelez; a küszöb és az értesítés itt állítható.": "Presiunea aerului: scrie-o sau măsoar-o cu senzorul și înregistreaz-o. O scădere anunță furtună; pragul și notificarea se reglează aici.",
  "Több számoló egy helyen: koppints arra, amelyik kell. Mindegyik egy kérdésre válaszol: meddig elég, mennyi kell.": "Mai multe calculatoare într-un loc: atinge-l pe cel de care ai nevoie. Fiecare răspunde la o întrebare: cât ajunge, cât trebuie.",
  "Víztisztítás: mennyi hipó kell, és meddig kell forralni. A töménységet az üvegről olvasd le.": "Purificarea apei: cât clor trebuie și cât timp trebuie fiert. Concentrația o citești de pe sticlă.",
  "Két út van: forralás vagy hipó. A forralás egyszerűbb, a hipó akkor jó, ha nincs mivel tüzelni.": "Sunt două căi: fierberea sau clorul. Fierberea e mai simplă, clorul e bun când nu ai cu ce face focul.",
  "A hipó töménységét az ÜVEGRŐL olvasd le. A megadott mennyiségek 5 százalékos szerre szólnak — gyengébből több kell. Ha az üvegen más áll, ne fejből számolj.": "Citește concentrația clorului DE PE STICLĂ. Cantitățile date sunt pentru un produs de 5 la sută — dintr-unul mai slab trebuie mai mult. Dacă pe sticlă scrie altceva, nu calcula din memorie.",
  "A számoló a megadott töménységgel dolgozik. Ha átállítod, a mennyiség is változik — ezért kérdezi meg.": "Calculatorul lucrează cu concentrația dată. Dacă o schimbi, se schimbă și cantitatea — de aceea întreabă.",
  "A Szoba zárt csoport, ami interneten át is elérhető: aki messze van, az is beszélget. A Helyi szoba ezzel szemben a közeledben lévőknek szól, hálózat nélkül.": "Camera este un grup închis accesibil și prin internet: vorbește și cine este departe. Camera locală, în schimb, este pentru cei din apropierea ta, fără rețea.",
  "Új szobát itt hozol létre. Te leszel a gazdája: te engeded be, aki kér.": "Aici creezi o cameră nouă. Vei fi proprietarul ei: tu lași înăuntru pe cine cere.",
  "Ha máshoz csatlakoznál: írd be a gazdától kapott kódot, és küldd el a kérelmet. A gazda jóváhagyása után vagy bent.": "Dacă vrei să te alături altcuiva: scrie codul primit de la proprietar și trimite cererea. După aprobarea lui ești înăuntru.",
  "Ide írod az üzenetet, és a Küldés viszi el a szoba minden tagjának.": "Aici scrii mesajul, iar Trimite îl duce la toți membrii camerei.",
  "A Sürgős jelölés pirossal emeli ki az üzenetet mindenkinél.": "Marcajul Urgent evidențiază mesajul cu roșu la toată lumea.",
  "Gazdaként itt látod a belépési kérelmeket, és itt adod ki a meghívó-kódot.": "Ca proprietar aici vezi cererile de intrare și tot aici emiți codul de invitație.",
  "Helyi üzenetek": "Mesaje locale",
  "A Helyi szoba a közeledben lévő telefonoknak szól, közös hálón, internet nélkül. A pont zölden mutatja, ha él a kapcsolat.": "Camera locală este pentru telefoanele din apropierea ta, într-o rețea comună, fără internet. Punctul se face verde dacă legătura este vie.",
  "Ha nem talál senkit: Próbáld újra. Mindenkinek ugyanazon a helyi hálón kell lennie.": "Dacă nu găsește pe nimeni: Încearcă din nou. Toți trebuie să fie în aceeași rețea locală.",
  "A közös kulcs titkosítja az üzeneteket: ugyanazt a kulcsot add meg minden telefonon, és mentsd el.": "Cheia comună criptează mesajele: dă aceeași cheie pe fiecare telefon și salveaz-o.",
  "Kommunikáció: üzenet szöveggel, hanggal vagy fénnyel, akkor is, ha nincs térerő.": "Comunicare: mesaj prin text, sunet sau lumină, chiar și când nu este semnal.",
  "Térkép: helyszíneid, offline térképpel és mért távolsággal.": "Hartă: locațiile tale, cu hartă offline și distanță măsurată.",
  "Tudástár: a felkészülés cikkei, kereshetően.": "Bază de cunoștințe: articolele pregătirii, cu căutare.",
  "Készlet: mi van, hol van, mikor jár le.": "Rezerve: ce ai, unde este, când expiră.",
  "Mit vigyek: a csomaglista a családodra és az útra szabva.": "Ce să iau: lista de bagaj croită pe familia ta și pe drum.",
  "Kockázat: a leggyengébb pontod egy gyűrűn.": "Risc: punctul tău cel mai slab pe un inel.",
  "Háztartás: a családtagok és a helyszínek; innen számol minden más.": "Gospodărie: membrii familiei și locațiile; de aici se calculează tot restul.",
  "Vészkártya: amit egy idegen láthat, ha megtalálja a telefonod.": "Card de urgență: ce poate vedea un străin dacă îți găsește telefonul.",
  "Irattárca: az iratok fotói a telefonon, PIN mögött.": "Portofel de documente: fotografiile documentelor tale pe telefon, în spatele unui PIN.",
  "Titkos QR: üzenet vagy hely, amit csak a kód olvasója lát.": "QR secret: un mesaj sau un loc pe care îl vede doar cel care are codul.",
  "Biblia: imádságok, keresés, kiemelések, offline.": "Biblie: rugăciuni, căutare, evidențieri, offline.",
  "Token tárca: az egyenleged és a rekeszeid.": "Portofel de jetoane: soldul tău și compartimentele tale.",
  "Tájoló: irány, azimut, napkelte és napnyugta.": "Busolă: direcție, azimut, răsărit și apus.",
  "Kalkulátor: víz, áram, kalória, fűtés és a többi számoló egy helyen.": "Calculator: apă, curent, calorii, încălzire și celelalte calculatoare într-un loc.",
  "Vagyonkezelő: kiadás, bevétel, zsebek, a saját lapján.": "Administrator de avere: cheltuieli, venituri, buzunare, pe pagina proprie.",
  "Gyülekező: a közösség fóruma, interneten.": "Comunitate: forumul comunității, pe internet.",
  "Nyelv: az app felülete azonnal átvált, a tudástár cikkei is, ha van fordításuk.": "Limbă: interfața aplicației se schimbă imediat, iar articolele bazei de cunoștințe la fel, dacă au traducere.",
  "Teljes mentés: minden adatod egy fájlba, amit vissza tudsz tölteni egy másik telefonon.": "Salvare completă: toate datele tale într-un fișier pe care îl poți restaura pe alt telefon.",
  "Visszatöltés a mentett fájlból. A biztonsági másolatból akkor állíts vissza, ha egy mentés félresikerült.": "Restaurare din fișierul salvat. Din copia de siguranță restaurează atunci când o salvare a ieșit prost.",
  "Menüsor bemutatása: az alsó gombok súgója újra.": "Prezentarea barei de meniu: ajutorul butoanelor de jos din nou.",
  "Gyári visszaállítás mindent töröl a telefonról. Előtte ments.": "Revenirea la setările din fabrică șterge tot de pe telefon. Salvează înainte.",
  "Ha az app sötét vagy üres marad: engedélyezd a vírusirtóban (például Avast), vagy használd a böngészős változatot. A Play-áruházban vásárolt prémium árát 48 órán belül visszakérheted.": "Dacă aplicația rămâne întunecată sau goală: permite-o în antivirus (de exemplu Avast) sau folosește versiunea din browser. Pentru premiumul cumpărat din Google Play poți cere rambursarea în 48 de ore.",
  "Itt minden modul listában is elérhető, ugyanoda visz, mint a kezdőlap csempéi.": "Aici fiecare modul este disponibil și în listă, duce în același loc ca plăcile paginii de start.",
  "Add meg, mi az, mennyi, és mennyit nyom: ebből számol a készlet és a Mit vigyek.": "Dă ce este, cât și cât cântărește: de aici se calculează rezervele și Ce să iau.",
  "A lejárathoz elég egy gyors gomb: +6 hónap, +1 év. A színe magától változik, ahogy közeledik.": "Pentru expirare ajunge un buton rapid: +6 luni, +1 an. Culoarea se schimbă singură pe măsură ce se apropie.",
  "Hol tartod: a helyszín dönti el, melyik készültség-kártyán jelenik meg.": "Unde îl ții: locația decide pe ce card de pregătire apare.",
  "A képernyő-fény húzással állítható: minél erősebb, annál messzebbről látszik — de annál gyorsabban fogy az akku.": "Lumina ecranului se reglează prin tragere: cu cât e mai puternică, cu atât se vede de mai departe — dar cu atât se consumă mai repede bateria.",
  "Böngészőből iPhone-on a vaku egyáltalán nem indul, Androidon sem mindenhol. A képernyő-fény viszont mindig van.": "Din browser, pe iPhone blițul nu pornește deloc, iar pe Android nici el peste tot. Lumina ecranului însă există întotdeauna.",
  "Sípolás: éles hang a telefonból; a Folyamatos addig szól, amíg le nem állítod. A hangmagasság állítható.": "Fluierat: un sunet ascuțit din telefon; cel Continuu sună până îl oprești. Înălțimea sunetului se poate regla.",
  "Újraélesztés üteme: a gomb tartja a helyes tempót. Nyomd a mellkast a jelre.": "Ritmul resuscitării: butonul ține tempoul corect. Apasă pieptul pe ritm.",
  "112 hívása: közvetlenül tárcsáz. Ha nincs térerő, a segélyhívás akkor is próbálkozik.": "Apel la 112: formează direct. Dacă nu este semnal, apelul de urgență încearcă oricum.",
  "Mobiltelefon": "Telefon mobil",
  "Kézi rádió (adóvevő)": "Stație radio portabilă",
  "Zsebrádió": "Radio de buzunar",
  "Átjátszó": "Releu (repetor)",
  "Antenna": "Antenă",
  "Takaró / pokróc": "Pătură",
};

// 2026-10-11: Biblia nyito csempek, beallitasok, vers-menu, jegyzetek, kereszthivatkozasok, hang-letoltes
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "+ Új kategória…": "+ Categorie nouă…",
  "A letölthető hanganyag listája most nem érhető el.": "Lista fișierelor audio descărcabile nu este disponibilă acum.",
  "A letöltés csak nyitott alkalmazással halad. Ha bezárod, a következő megnyitáskor magától folytatódik.": "Descărcarea avansează doar cu aplicația deschisă. Dacă o închizi, continuă singură la următoarea deschidere.",
  "A letöltés megállt": "Descărcarea s-a oprit",
  "A letöltéshez be kell jelentkezned a fiókodba (Profil → Fiók).": "Pentru descărcare, conectează-te la contul tău (Profil → Cont).",
  "A letöltéshez újra be kell lépned. Frissítsd az oldalt, és lépj be.": "Pentru descărcare trebuie să te conectezi din nou. Reîncarcă pagina și conectează-te.",
  "A telefon saját hangja": "Vocea proprie a telefonului",
  "A vers a vágólapra került, illeszd be, ahová szeretnéd.": "Versetul a fost copiat în clipboard; lipește-l unde vrei.",
  "A versek mellett egy kis jel mutatja, ha más igék kapcsolódnak hozzá; rákoppintva átugorhatsz a kapcsolódó igére. Forrás: OpenBible.info (CC BY).": "Un mic semn lângă verset arată că alte versete sunt legate de el; atinge-l ca să sari la versetul legat. Sursă: OpenBible.info (CC BY).",
  "Az új kategória neve:": "Numele noii categorii:",
  "Biblia beállítások": "Setări Biblie",
  "Csak magyar nyelven érhető el.": "Disponibil doar în maghiară.",
  "Ez az eszköz nem enged másolni.": "Acest dispozitiv nu permite copierea.",
  "Felolvasás beállításai": "Setări citire cu voce tare",
  "Felolvasó hang": "Vocea de citire",
  "Forrás: OpenBible.info kereszthivatkozások (CC BY), a legtöbbet szavazottak.": "Sursă: trimiteri OpenBible.info (CC BY), cele mai votate.",
  "Imák": "Rugăciuni",
  "Jegyzeteim": "Notițele mele",
  "Jobb minőségű, természetesebb felolvasás a Károli-fordításhoz. Internettel azonnal szól; ha letöltöd, internet nélkül is.": "Citire de calitate mai bună, mai naturală, a traducerii Károli. Cu internet pornește imediat; descărcată, și fără internet.",
  "Kapcsolódó igék": "Versete legate",
  "Kereszthivatkozások": "Trimiteri",
  "Kereszthivatkozások megjelenítése": "Afișează trimiterile",
  "Keresés": "Căutare",
  "Kiemelés": "Evidențiere",
  "Kiemelés levétele": "Elimină evidențierea",
  "Kiemelések": "Evidențieri",
  "Kommentár": "Comentariu",
  "Kommentár hozzáadása": "Adaugă comentariu",
  "Kommentár megnyitása": "Deschide comentariul",
  "Kommentár szerkesztése": "Editează comentariul",
  "Kommentárjaim": "Comentariile mele",
  "Kommentárok": "Comentarii",
  "Könyvjelző": "Semn de carte",
  "Könyvjelző hozzáadása": "Adaugă semn de carte",
  "Könyvjelző módosítása": "Modifică semnul de carte",
  "Könyvjelző törlése": "Șterge semnul de carte",
  "Könyvjelzők": "Semne de carte",
  "Letöltve": "Descărcat",
  "Letöltés folyamatban": "Descărcare în curs",
  "Letöltés folytatása": "Continuă descărcarea",
  "Letöltés internet nélküli felolvasáshoz": "Descarcă pentru citire fără internet",
  "Megosztás": "Distribuie",
  "Megszakadt az internetkapcsolat. Amit már letöltöttél, megmarad; a gombbal folytathatod.": "Conexiunea la internet s-a întrerupt. Ce ai descărcat deja rămâne; continuă cu butonul.",
  "Melyik szóra keressünk a Bibliában?": "Ce cuvânt căutăm în Biblie?",
  "Mind törlése": "Șterge tot",
  "Még nincs kiemelt vers. Tartsd nyomva egy verset, és válaszd a Kiemelés pontot.": "Încă nu ai versete evidențiate. Ține apăsat un verset și alege Evidențiere.",
  "Még nincs kommentár. Tartsd nyomva egy verset, és válaszd a Kommentár hozzáadása pontot.": "Încă nu ai comentarii. Ține apăsat un verset și alege Adaugă comentariu.",
  "Még nincs könyvjelző. Tartsd nyomva egy verset, és válaszd a Könyvjelző hozzáadása pontot.": "Încă nu ai semne de carte. Ține apăsat un verset și alege Adaugă semn de carte.",
  "Nem foglal helyet, internet nélkül is szól. Kisebb telefonokra ezt ajánljuk.": "Nu ocupă spațiu și funcționează fără internet. Recomandată pentru telefoane mai mici.",
  "PrepperPapa hang": "Vocea PrepperPapa",
  "Saját szín hozzáadása": "Adaugă o culoare proprie",
  "Saját szín törlése: tartsd nyomva a színt.": "Șterge o culoare proprie: ține-o apăsată.",
  "Teljes Biblia letöltése": "Descarcă toată Biblia",
  "Törlöd az összes letöltött hanganyagot?": "Ștergi toate fișierele audio descărcate?",
  "Törlöd ezt a saját színt a választékból? A már kiemelt versek megmaradnak.": "Elimini această culoare din paletă? Versetele deja evidențiate rămân.",
  "Válassz színt": "Alege o culoare",
  "Vár": "În așteptare",
  "Általános": "General",
  "Várakozó könyvek": "Cărți în așteptare",
});

// 2026-10-11: a Biblia sugo v4 szovegei
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Biblia: itt a könyvek rácsa és a keresés. A teljes szöveg egyszer letöltendő, utána internet nélkül is olvasható.": "Biblia: aici sunt grila cărților și căutarea. Textul complet se descarcă o dată, apoi se poate citi și fără internet.",
  "Imák: mindig elérhetők, letöltés nélkül is. Koppints egy címre, és olvasd.": "Rugăciuni: mereu disponibile, chiar și fără descărcare. Atinge un titlu și citește.",
  "Vészhelyzeti igék és próféciák: válogatott szakaszok, egy koppintással.": "Versete pentru situații de urgență și profeții: pasaje alese, la o atingere.",
  "Az app bibliaolvasót tartalmaz. A lelki felkészültség rész keresztény szemszögből készült.": "Aplicația conține un cititor de Biblie. Secțiunea despre pregătirea spirituală este scrisă dintr-o perspectivă creștină.",
  "Tartsd nyomva egy verset: keresés, kiemelés, kommentár, könyvjelző és megosztás. Amit így jelölsz, a Kiemeléseim és a Kommentárjaim alatt visszatalálod.": "Ține apăsat un verset: căutare, evidențiere, comentariu, semn de carte și distribuire. Ce marchezi așa găsești la Evidențierile mele și Comentariile mele.",
  "Beállítások: a felolvasó hang, a letöltés internet nélküli felolvasáshoz, és a kereszthivatkozások bekapcsolása.": "Setări: vocea de citire, descărcarea pentru citire fără internet și activarea trimiterilor.",
});

// 2026-10-11: Biblia forditas-valaszto
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Biblia-fordítás": "Traducerea Bibliei",
  "Itt azok a fordítások látszanak, amelyeket már letöltöttél. Másik nyelvű Bibliát a felület nyelvének átállításával tölthetsz le.": "Aici apar traducerile pe care le-ai descărcat deja. O Biblie în altă limbă o descarci schimbând limba aplicației.",
  "Ez a fordítás most nem érhető el.": "Această traducere nu este disponibilă acum.",
});

// MEGVALLASOK + SAJAT IMA (Fonok 2026-10-11 10:09/10:10)
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Megvallások": "Mărturisiri",
  "Még nincs itt semmi. A jobb alsó plusz gombbal hozzáadhatsz egy sajátot.": "Încă nu e nimic aici. Cu butonul plus din dreapta jos poți adăuga unul propriu.",
  "Csak ezen a készüléken tárolódik.": "Se păstrează doar pe acest dispozitiv.",
  "Saját hozzáadása": "Adaugă propriu",
  "Add meg a címet és a szöveget.": "Introdu un titlu și textul.",
  "Nem sikerült menteni.": "Nu s-a putut salva.",
  "Biztosan törlöd?": "Sigur ștergi?",
  "saját": "propriu",
});

// OLVASASI TERV (Fonok 2026-10-11 10:42)
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Olvasási terv": "Plan de citire",
  "Válassz egy tervet. A haladásodat a telefon megjegyzi, és mutatja, hol tartasz.": "Alege un plan. Telefonul îți reține progresul și arată unde ai ajuns.",
  "Válassz egy tervet. Több tervet is olvashatsz egyszerre, mindegyiknél külön megmarad, hol tartasz.": "Alege un plan. Poți citi mai multe planuri în același timp; fiecare își păstrează separat locul unde ai ajuns.",
  "Teljes Biblia egy év alatt": "Toată Biblia într-un an",
  "Az elejétől a végéig, a könyvek sorrendjében.": "De la început până la sfârșit, în ordinea cărților.",
  "Kronologikus Biblia egy év alatt": "Biblia cronologic într-un an",
  "Az események időrendjében: Jób a pátriárkák korában, a Zsoltárok Dávid idején, a próféták a királyok mellett, a levelek az Apostolok cselekedetei közé illesztve.": "În ordinea evenimentelor: Iov în vremea patriarhilor, Psalmii în vremea lui David, profeții alături de împărați, epistolele intercalate în Faptele Apostolilor.",
  "Teljes Biblia 90 nap alatt": "Toată Biblia în 90 de zile",
  "Gyors ütemű, a könyvek sorrendjében.": "Ritm alert, în ordinea cărților.",
  "Újszövetség 90 nap alatt": "Noul Testament în 90 de zile",
  "Máté evangéliumától a Jelenésekig.": "De la Matei la Apocalipsa.",
  "Az evangéliumok 30 nap alatt": "Evangheliile în 30 de zile",
  "Máté, Márk, Lukács és János.": "Matei, Marcu, Luca și Ioan.",
  "Zsoltárok és Példabeszédek 60 nap alatt": "Psalmii și Proverbele în 60 de zile",
  "Napi néhány zsoltár és egy kis bölcsesség.": "Câțiva psalmi și puțină înțelepciune în fiecare zi.",
  "Elindítod ezt a tervet?": "Pornești acest plan?",
  "A tervet befejezted. Áldás rá!": "Ai terminat planul. Dumnezeu să te binecuvânteze!",
  "Tartod az ütemet.": "Ești în grafic.",
  "Elolvastam": "Am citit",
  "Minden nap": "Toate zilele",
  "Terv leállítása": "Oprește planul",
  "Leállítod a tervet? A haladásod törlődik.": "Oprești planul? Progresul tău se va șterge.",
});

// SUGO bible v5 (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Biblia: itt a könyvek rácsa és a keresés. Fönt a fordítás, a könyv, a fejezet és a vers koppintható, így gyorsan odaugrasz. A teljes szöveg egyszer letöltendő, utána internet nélkül is olvasható.": "Biblia: grila cărților și căutarea. Sus, traducerea, cartea, capitolul și versetul pot fi atinse pentru a sări rapid acolo. Textul complet se descarcă o dată, apoi merge fără internet.",
  "Imák és megvallások: a jobb alsó plusz gombbal hozzáadhatod a sajátjaidat. Ezek csak ezen a telefonon tárolódnak.": "Rugăciuni și mărturisiri: adaugă-le pe ale tale cu butonul plus din dreapta jos. Se păstrează doar pe acest telefon.",
  "Olvasási terv: válassz egy tervet, például a kronologikusat, és itt látod, hol tartasz, és mi a következő olvasmány.": "Plan de citire: alege un plan, de exemplu cel cronologic, și vezi unde ai ajuns și ce urmează.",
});

// SZOBAKULCS UJ ESZKOZON (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Ezen az eszközön nincs meg ennek a szobának a kulcsa: a korábbi üzenetek egy másik kulccsal készültek (másik telefonon vagy újratelepítés előtt). Ha megvan egy régi meghívó linked ehhez a szobához, nyisd meg azt ezen a telefonon, és minden olvasható lesz. Ha most új kulcsot készítesz, a régi tagok csak új meghívó link után olvassák az üzeneteidet. Készítsek új kulcsot?": "Acest dispozitiv nu are cheia acestei camere: mesajele anterioare au fost făcute cu altă cheie (pe alt telefon sau înainte de reinstalare). Dacă mai ai un link de invitație vechi pentru această cameră, deschide-l pe acest telefon și totul va fi lizibil. Dacă creezi acum o cheie nouă, membrii vechi îți vor citi mesajele doar după un link de invitație nou. Creez o cheie nouă?",
  "Új titkosító kulcs készült. Küldj ÚJ meghívó linket minden tagnak.": "A fost creată o nouă cheie de criptare. Trimite un link de invitație NOU fiecărui membru.",
});

// GIRA KONYV-OSSZEFESULES (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Gíra-könyv csomag (ismeretlen formátum)": "Pachet registru gira (format necunoscut)",
  "Gíra-könyv": "Registru gira",
  "hamis aláírás": "semnătură falsă",
  "KÉTSZERI KÖLTÉS": "CHELTUIRE DUBLĂ",
  "aláírások rendben": "semnături în regulă",
  "Előbb csatlakozz egy helyi szobához (Bluetooth vagy wifi).": "Mai întâi intră într-o cameră locală (Bluetooth sau wifi).",
  "Még nincs aláírt gíra-tételed, amit megoszthatnál.": "Încă nu ai înregistrări gira semnate de împărtășit.",
  "A helyi szobának nincs titkosító kulcsa, ezért nem küldöm el a könyvet.": "Camera locală nu are cheie de criptare, așa că nu trimit registrul.",
  "Elküldve a helyi szobába": "Trimis în camera locală",
  "csomag": "pachete",
  "Nem ment el minden csomag. Nézd meg, hogy egy hálón vagytok-e.": "Nu s-au trimis toate pachetele. Verifică dacă sunteți în aceeași rețea.",
  "Előbb nyiss meg egy online szobát.": "Mai întâi deschide o cameră online.",
  "Az online szobának nincs titkosító kulcsa ezen a telefonon, ezért nem küldöm el a könyvet.": "Camera online nu are cheie pe acest telefon, așa că nu trimit registrul.",
  "Elküldve az online szobába": "Trimis în camera online",
  "Nem ment el minden csomag.": "Nu s-au trimis toate pachetele.",
  "Könyvek összefésülése": "Reconcilierea registrelor",
  "A tagok kicserélik az aláírt gíra-tételeiket, és a telefon minden aláírást ellenőriz. Ha valaki ugyanazt a gírát kétszer adta oda, itt kiderül. Szerver és blokklánc nélkül megy: a szoba csak továbbítja a titkosított csomagot.": "Membrii își schimbă înregistrările gira semnate, iar telefonul verifică fiecare semnătură. Dacă cineva a dat aceeași gira de două ori, aici se vede. Fără server și fără blockchain: camera doar transmite pachetul criptat.",
  "Küldés a helyi szobába (Bluetooth / wifi)": "Trimite în camera locală (Bluetooth / wifi)",
  "Küldés az online szobába": "Trimite în camera online",
  "Közösségi könyv": "Registrul comunității",
  "kétszeri költés": "cheltuieli duble",
  "sorszám": "număr",
});

window.PP_FORD_MINTAK = window.PP_FORD_MINTAK || {};
window.PP_FORD_MINTAK.ro = (function () {
  // SZAMNEV-EGYEZTETES. A magyar szamnev utan nem egyeztet, a het celnyelvbol hat igen.
  // A `csere` ezeknel FUGGVENY (a motor 2026-09-02 ota elfogadja, `index.html`), es a
  // szignatura a nativ String.replace-e: (match, p1, p2, ...).
  // Kezzel, szam-osztalyonkent kulon sorral ez het nyelven kb. 330 bejegyzes lenne
  // -- ket szammal ugyanis a ket osztaly SZORZODIK (3x3).
  // ROMAN: 1 / 2-19 / 20-tol "de"-s alak (az utolso ket jegy 0 vagy 20 folott).
  const alak = (n, egy, tobb, husz) => {
    if (n === 1) return egy;
    const sz = n % 100;
    return (sz === 0 || sz >= 20) ? husz : tobb;
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
    csere: (_, n) => 'În această temă mai există ' + n + ' ' + alak(+n, 'articol, introducerea lui o poți citi mai sus.', 'articole, introducerile lor le poți citi mai sus.', 'de articole, introducerile lor le poți citi mai sus.') },
  { minta: /^Használható fény (\d{1,2}:\d{2}) és (\d{1,2}:\d{2}) között: a napkelte előtt és a napnyugta után is van még annyi, amivel lehet menni\.$/,
    csere: "Lumină utilizabilă între $1 și $2: și înainte de răsărit, și după apus mai este atâta încât se poate merge." },
  { minta: /^([\d.,]+) m² alapján$/,
    csere: "pe baza a $1 m²" },
  { minta: /^(\d+) fő · (\d+) nap · (.+)$/,
    csere: (_, a, b, c) => a + ' ' + alak(+a, "persoană", "persoane", "de persoane") + ' · ' + b + ' ' + alak(+b, "zi", "zile", "de zile") + ' · ' + c },
  { minta: /^(\d+) fő · (\d+) nap$/,
    csere: (_, a, b) => a + ' ' + alak(+a, "persoană", "persoane", "de persoane") + ' · ' + b + ' ' + alak(+b, "zi", "zile", "de zile") },
  { minta: /^(\d+) fő$/,
    csere: (_, n) => n + ' ' + alak(+n, "persoană", "persoane", "de persoane") },
  { minta: /^(\d+) nap$/,
    csere: (_, n) => n + ' ' + alak(+n, "zi", "zile", "de zile") },
  { minta: /^(\d+) db$/,
    csere: "$1 buc." },
  { minta: /^(\d+) tétel$/,
    csere: (_, n) => n + ' ' + alak(+n, "element", "elemente", "de elemente") },
  { minta: /^IGE — (.+)$/,
    csere: "VERSET — $1" },
  { minta: /^Ige — (.+)$/,
    csere: "Verset — $1" },
  { minta: /^Tudástár — (.+)$/,
    csere: "Cunoștințe — $1" },
  { minta: /^(\d+)\. fejezet$/,
    csere: "Capitolul $1" },
  { minta: /^(\d+)\. fejezet · vers$/,
    csere: "Capitolul $1 · verset" },
  { minta: /^(\d+) fejezet$/,
    csere: (_, n) => n + ' ' + alak(+n, "capitol", "capitole", "de capitole") },
  { minta: /^Kész: (\d+) könyv, offline is megvan\.$/,
    csere: "Gata: $1 cărți, disponibile și offline." },
  { minta: /^Nem sikerült a helymeghatározás: (.+)$/,
    csere: "Localizarea nu a reușit: $1" },
  { minta: /^Nem sikerült a helymeghatározás\.$/,
    csere: "Localizarea nu a reușit." },
  { minta: /^Nem sikerült: (.+)$/,
    csere: "Nu a reușit: $1" },
  { minta: /^Felvéve: (.+)$/,
    csere: "Adăugat: $1" },
  { minta: /^Módosítva: (.+)$/,
    csere: "Modificat: $1" },
  { minta: /^Törlöd: (.+)$/,
    csere: "Ștergi: $1" },
  { minta: /^vércsoport hiányzik · allergia: (.+)$/,
    csere: "lipsește grupa de sânge · alergie: $1" },
  { minta: /^vércsoport hiányzik · nincs ismert allergia$/,
    csere: "lipsește grupa de sânge · nicio alergie cunoscută" },
  { minta: /^(.+) · nincs ismert allergia$/,
    csere: "$1 · nicio alergie cunoscută" },
  { minta: /^(.+) · allergia: (.+)$/,
    csere: "$1 · alergie: $2" },
  { minta: /^növekvő hold, (\d+)%$/,
    csere: "lună în creștere, $1%" },
  { minta: /^fogyó hold, (\d+)%$/,
    csere: "lună în descreștere, $1%" },
  { minta: /^(.+) · (\d+) tag · te indítottad$/,
    csere: (_, a, n) => a + ' · ' + n + ' ' + alak(+n, "membru", "membri", "de membri") + " · tu ai pornit-o" },
  { minta: /^(.+) · (\d+) tag · (.+) indította$/,
    csere: (_, a, n, k) => a + ' · ' + n + ' ' + alak(+n, "membru", "membri", "de membri") + " · pornită de " + k },
  { minta: /^(\d+) tag · te indítottad$/,
    csere: (_, n) => n + ' ' + alak(+n, "membru", "membri", "de membri") + " · tu ai pornit-o" },
  { minta: /^(\d+) tag · (.+) indította$/,
    csere: (_, n, k) => n + ' ' + alak(+n, "membru", "membri", "de membri") + " · pornită de " + k },
  { minta: /^még egyedül · te indítottad$/,
    csere: "încă singur · tu ai pornit-o" },
  { minta: /^még egyedül · (.+) indította$/,
    csere: "încă singur · pornită de $1" },
  { minta: /^(.+) · (\d+) tag$/,
    csere: (_, a, n) => a + ' · ' + n + ' ' + alak(+n, "membru", "membri", "de membri") },
  { minta: /^(.+) · te indítottad$/,
    csere: "$1 · tu ai pornit-o" },
  { minta: /^(.+) · (.+) indította$/,
    csere: "$1 · pornită de $2" },
  { minta: /^(\d+) tag$/,
    csere: (_, n) => n + ' ' + alak(+n, "membru", "membri", "de membri") },
  // OLVASASI TERV (2026-10-11)
  { minta: /^Kész: (\d+) \/ (\d+) nap \((\d+)%\)$/, csere: "Gata: $1 / $2 zile ($3%)" },
  { minta: /^Következő olvasmány: (\d+)\. nap$/, csere: "Următoarea lectură: ziua $1" },
  { minta: /^Lemaradás: (\d+) nap$/, csere: (_, n) => "Rămânere în urmă: " + n + ' ' + alak(+n, "zi", "zile", "de zile") },
  { minta: /^Előrébb jársz: (\d+) nap$/, csere: (_, n) => "Înainte cu: " + n + ' ' + alak(+n, "zi", "zile", "de zile") },
  { minta: /^Napi átlag: ([\d,]+) fejezet$/, csere: "Medie zilnică: $1 capitole" },
  { minta: /^Heti átlag: (\d+) fejezet$/, csere: "Medie săptămânală: $1 capitole" },
  { minta: /^(\d+)\. nap( •)?$/, csere: (_, n, p) => "Ziua #".replace('#', n) + (p || '') },
  ];
})();

// ===== 2026-10-13: ujjlenyomatos feloldas + PIN modositasa (v43.157) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Ujjlenyomattal": "Cu amprenta",
  "Ujjlenyomat bekapcsolása": "Activează deblocarea cu amprenta",
  "Tárca feloldása": "Deblochează portofelul",
  "PIN-nel": "Cu PIN",
  "Az ujjlenyomathoz mentett PIN már nem érvényes. Add meg a PIN-t, utána újra bekapcsolhatod.": "PIN-ul salvat pentru amprentă nu mai este valabil. Introdu PIN-ul, apoi o poți activa din nou.",
  "Új ujjlenyomatot vettél fel a telefonon, ezért egyszer add meg a PIN-t.": "Pe telefon a fost adăugată o amprentă nouă, așa că introdu o dată PIN-ul.",
  "Az ujjlenyomatos feloldás most nem sikerült, add meg a PIN-t.": "Deblocarea cu amprenta nu a reușit de data aceasta, introdu PIN-ul.",
  "Bekapcsolod az ujjlenyomatos feloldást? A PIN-t ekkor a telefon saját biztonsági kulcstára őrzi, az ujjad csak azt nyitja. A PIN ugyanúgy működik.": "Activezi deblocarea cu amprenta? PIN-ul va fi păstrat în depozitul securizat de chei al telefonului, iar degetul tău doar îl deschide. PIN-ul funcționează în continuare.",
  "Bekapcsolom": "Activez",
  "Most nem": "Nu acum",
  "Bekapcsolva: legközelebb ujjlenyomattal is beléphetsz.": "Activat: data viitoare poți intra și cu amprenta.",
  "Nem kapcsoltuk be. Később is megteheted: koppints újra a gombra.": "Nu a fost activată. O poți face mai târziu: atinge din nou butonul.",
  "Nem sikerült bekapcsolni.": "Activarea nu a reușit.",
  "A tár megnyitása nem sikerült.": "Depozitul nu a putut fi deschis.",
  "PIN módosítása": "Schimbă PIN-ul",
  "Régi PIN": "PIN vechi",
  "Új PIN (4-6 számjegy)": "PIN nou (4-6 cifre)",
  "Új PIN még egyszer": "PIN nou încă o dată",
  "Hibás a régi PIN.": "PIN-ul vechi este greșit.",
  "Az új PIN 4-6 számjegy legyen.": "PIN-ul nou trebuie să aibă 4-6 cifre.",
  "A két új PIN nem egyezik.": "Cele două PIN-uri noi nu coincid.",
  "A PIN módosítása nem sikerült, a régi PIN maradt érvényben.": "Schimbarea PIN-ului nu a reușit, PIN-ul vechi rămâne valabil.",
  "A PIN megváltozott.": "PIN-ul a fost schimbat.",
  "A PIN megváltozott. Az ujjlenyomatos feloldás kikapcsolt, a következő PIN-es belépéskor újra bekapcsolhatod.": "PIN-ul a fost schimbat. Deblocarea cu amprenta a fost dezactivată; o poți reactiva la următoarea intrare cu PIN."
});

// ===== 2026-10-13: teszt-PIN, 6 szamjegy, Gira-kulcs a PIN mogott (v43.159) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Állíts be egy PIN-t (6 számjegy)": "Setează un PIN (6 cifre)",
  "Új PIN (6 számjegy)": "PIN nou (6 cifre)",
  "6 számjegy kell.": "Sunt necesare 6 cifre.",
  "Az új PIN 6 számjegy legyen.": "PIN-ul nou trebuie să aibă 6 cifre.",
  "Tesztidőszak: a PIN 000000": "Perioadă de test: PIN-ul este 000000",
  "Tesztidőszak: a PIN 0000": "Perioadă de test: PIN-ul este 0000",
  "A Gíra aláíró kulcsa a PIN mögött van: nyisd meg a Token tárcát.": "Cheia de semnare Gíra este în spatele PIN-ului: deschide portofelul de tokenuri."
});

// ===== 2026-10-13: ujjlenyomat-animacio (v43.160) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Tedd az ujjad az érzékelőre": "Pune degetul pe senzor",
  "Feloldva": "Deblocat"
});

// ===== 2026-10-13: ujjlenyomat-kor huzasa (v43.161) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Ha a kör nem az ujjlenyomat-olvasón van, húzd a helyére: a telefon megjegyzi.": "Dacă cercul nu este pe senzorul de amprentă, trage-l acolo: telefonul îl va ține minte."
});

// ===== 2026-10-13: OSM-alapreteg elore letoltese szunetel (v43.162) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Az alaptérkép előre letöltése szünetel, amíg elkészül a saját térképszerverünk. A már megnézett részek megmaradnak; a Turista réteget továbbra is letöltheted.": "Descărcarea prealabilă a hărții de bază este suspendată până când serverul nostru de hărți este gata. Părțile deja văzute rămân salvate; stratul turistic îl poți descărca în continuare."
});


// ===== 2026-10-13: app-engedely a tesztidoszakra (v43.169, 0a58dbbb) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "PrepperPapa · tesztidőszak": "PrepperPapa · perioadă de testare",
  "A tesztidőszakban az app csak jóváhagyott tesztelői fiókkal használható. Lépj be az e-mail címeddel: kapsz egy 6 jegyű kódot, és utána a telefon megjegyzi, frissítés után sem kell újra.": "În perioada de testare aplicația poate fi folosită doar cu un cont de tester aprobat. Autentifică-te cu adresa de e-mail: primești un cod de 6 cifre, iar apoi telefonul îl reține, și după actualizări.",
  "Belépés": "Autentificare",
  "Engedély kérése…": "Se solicită permisiunea…",
  "Ehhez a fiókhoz nincs engedély. Ha szerinted ez hiba, írj a prepperpapa@gmail.com címre.": "Acest cont nu are permisiune. Dacă crezi că e o greșeală, scrie la prepperpapa@gmail.com.",
  "Az első belépéshez internetkapcsolat kell.": "Prima autentificare necesită conexiune la internet.",
  "Az engedély most nem sikerült, próbáld újra.": "Permisiunea nu a putut fi obținută acum, încearcă din nou.",
  "Lejárt az engedélyed. Lépj be újra (ehhez internet kell).": "Permisiunea ta a expirat. Autentifică-te din nou (necesită internet)."
});


// ===== 2026-10-13: terkep-kereso es turistapontok (v43.171, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "saját pont": "punct propriu",
  "helyszín": "loc",
  "Nincs találat.": "Niciun rezultat.",
  "Turistaút": "Traseu turistic",
  "internet kell hozzá": "necesită internet",
  "nemzetközi": "internațional",
  "országos": "național",
  "regionális": "regional",
  "helyi": "local",
  "csúcs": "vârf",
  "nyereg": "șa",
  "forrás": "izvor",
  "ivóvíz": "apă potabilă",
  "kút": "fântână",
  "barlang": "peșteră",
  "kilátópont": "punct de belvedere",
  "kilátó": "turn de belvedere",
  "menedékház, esőbeálló": "cabană, adăpost",
  "kórház": "spital",
  "rendelőintézet": "policlinică",
  "temető": "cimitir",
  "menedékház": "cabană",
  "esőbeálló, menedék": "adăpost",
  "szálloda": "hotel",
  "vendégház, panzió": "pensiune",
  "turistaszálló": "hostel",
  "motel": "motel",
  "üdülő": "stațiune",
  "apartman": "apartament",
  "szálláshely": "cazare",
  "szupermarket": "supermarket",
  "áruház": "magazin universal",
  "bevásárlóközpont": "centru comercial",
  "piac": "piață",
  "élelmiszerbolt": "magazin alimentar",
  "zöldséges": "aprozar",
  "pékség": "brutărie",
  "hentes": "măcelărie",
  "vegyesbolt": "magazin mixt",
  "cukrászda": "cofetărie",
  "édességbolt": "magazin de dulciuri",
  "italbolt": "magazin de băuturi",
  "posta": "oficiu poștal",
  "bolt": "magazin",
  "táborhely": "loc de campare",
  "pihenőhely": "loc de popas",
  "útjelző tábla": "indicator",
  "rom": "ruine",
  "vár": "cetate",
  "kereszt, kápolna": "cruce, capelă"
});
Object.assign(window.PP_FORD_SZOTAR.ro, {"Turistaút, csúcs, forrás, hely…": "Traseu, vârf, izvor, loc…"});

// ===== 2026-10-13: utvonalon megyek (v43.172, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Indulás": "Pornire",
  "Leállítás": "Oprire",
  "Navigáció indul": "Navigarea pornește",
  "Indulj el az útvonalon: az első lépésekből látom, merre mész.": "Pornește pe traseu: din primii pași văd încotro mergi.",
  "Letértél az útvonalról.": "Ai părăsit traseul.",
  "Letértél az útvonalról": "Ai părăsit traseul",
  "Az útvonal": "Traseu",
  "irány": "direcție",
  "Visszatértél az útvonalra.": "Te-ai întors pe traseu.",
  "Az útvonalon vagy": "Ești pe traseu",
  "Indulj el: az első lépésekből látom, merre mész.": "Pornește: din primii pași văd încotro mergi.",
  "Megérkeztél az útvonal végére.": "Ai ajuns la capătul traseului.",
  "Hátra": "Rămas",
  "Megtett": "Parcurs",
  "Érkezés": "Sosire",
  "Szintgrafikon": "Profil de altitudine",
  "emelkedő": "urcuș",
  "múlva": "peste",
  "előtted": "în față",
  "cél": "destinație",
  "utána ezt kövesd:": "apoi urmează:",
  "élesen jobbra": "brusc la dreapta",
  "jobbra": "la dreapta",
  "élesen balra": "brusc la stânga",
  "balra": "la stânga",
  "Most fordulj": "Virează acum",
  "méter múlva fordulj": "metri, apoi virează",
  "Egyenesen tovább": "Înainte"
});

// ===== 2026-10-13: utvonaltervezes A-bol B-be (v43.173, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Útvonal ide": "Traseu până aici",
  "Innen indulok": "Pornesc de aici",
  "Saját helyzetem": "Poziția mea",
  "Válaszd ki a célt: keresés vagy egy pont buboréka": "Alege destinația: căutare sau bula unui punct",
  "Tervezés törlése": "Șterge planul",
  "Tervezés…": "Planificare…",
  "Nincs GPS-helyzet: válassz kezdőpontot (egy pont buborékán: „Innen indulok”).": "Nicio poziție GPS: alege un punct de plecare („Pornesc de aici” în bula unui punct).",
  "A turistaút-hálózat nem töltődött be.": "Rețeaua de trasee nu s-a încărcat.",
  "Nem találtam turistaút-útvonalat a két pont között.": "Nu am găsit traseu turistic între cele două puncte.",
  "A turistaútig": "Până la traseu",
  "légvonalban": "în linie dreaptă",
  "Tervezett útvonal": "Traseu planificat",
  "Kövesd ezt a jelzést:": "Urmează acest marcaj:",
  "Kövesd az utat": "Urmează drumul",
  "és kövesd ezt:": "și urmează:"
});

// ===== 2026-10-13: kulfoldi turistautak =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Külföld országonként: térkép és turistautak": "Străinătate pe țări: hartă și trasee",
  "Tájegységek": "Regiuni",
  "Turistautak és pontok": "Trasee și puncte",
  "Alaptérkép": "Hartă de bază",
  "Ennek az országnak a térképe egyben túl nagy.": "Harta acestei țări este prea mare dintr-o bucată.",
  "Tájegységenként letöltheted: nyisd le a listáját.": "O poți descărca pe regiuni: deschide lista.",
  "Országonként külön letölthetők a turistautak a pontokkal és az útvonaltervezővel (ezek az online térképen is működnek, és kevés helyet foglalnak), és külön az alaptérkép a térerő nélküli használathoz. Az alaptérképet az első kéréskor a szerver készíti elő, ez néhány perc lehet.": "Pentru fiecare țară se pot descărca separat traseele cu punctele și planificatorul de rute (funcționează și pe harta online și ocupă puțin spațiu), și separat harta de bază pentru folosire fără semnal. Harta de bază este pregătită de server la prima cerere, ceea ce poate dura câteva minute.",
  "tájegységenként letölthető": "se poate descărca pe regiuni",
  "a méret letöltéskor derül ki": "mărimea se află la descărcare",
  "Ennek a tájegységnek a térképe egyben túl nagy.": "Harta acestei regiuni este prea mare dintr-o bucată.",
  "A tájegység térképét most nem sikerült előkészíteni.": "Harta regiunii nu a putut fi pregătită acum.",
  "Előkészítés…": "Se pregătește…",
  "a térkép túl nagy egyben": "harta este prea mare dintr-o bucată",
  "Most egy másik ország térképe készül, próbáld újra pár perc múlva.": "Se pregătește harta altei țări, încearcă din nou peste câteva minute.",
  "Az ország térképét most nem sikerült előkészíteni.": "Harta țării nu a putut fi pregătită acum.",
  "A külföldi lista most nem érhető el.": "Lista din străinătate nu este disponibilă acum.",
  "A két pont túl messze van egymástól (legfeljebb kb. 80 km).": "Cele două puncte sunt prea departe (cel mult cca 80 km)."
});

// ===== 2026-10-13: GPX be/ki (v43.178) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Nincs kiválasztott útvonal.": "Niciun traseu selectat.",
  "Az útvonal megjelent, de a telefon tárhelye megtelt, nem mentődött el.": "Traseul apare, dar memoria e plină, nu a fost salvat.",
  "Ezt a fájlt nem tudtam GPX-ként beolvasni.": "Nu am putut citi fișierul ca GPX.",
  "GPX útvonal betöltése": "Încarcă traseu GPX",
  "fájl a telefonról": "fișier de pe telefon"
});

// ===== 2026-10-13: tajolo hangvezetes (v43.179) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Hangvezetés": "Ghidare sonoră",
  "Előbb vegyél fel egy irányt, utána szól a hangvezetés.": "Mai întâi fixează o direcție, apoi pornește ghidarea."
});
// ===== 2026-10-14: jelzes nelkuli utak, ujratervezes, hosszu nyomas (v43.182) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Kijelölt pont": "Punct marcat",
  "Új útvonalat tervezek innen…": "Planific un traseu nou de aici…",
  "Új útvonalat terveztem, hossza": "Traseu nou planificat, lungime",
  "Jelzés nélküli ösvényen": "Pe o potecă nemarcată",
  "Jelzés nélküli földúton": "Pe un drum de pământ nemarcat",
  "Utcán vagy közúton": "Pe stradă sau drum",
  "a jelzés nélküli ösvényt": "poteca nemarcată",
  "a földutat": "drumul de pământ",
  "az utcát vagy közutat": "strada sau drumul",
  "Az út végétől a célig": "De la capătul traseului până la destinație",
  "teljes túra": "traseu complet",
  "szakasz": "etape",
  "Rádióamatőr átjátszók": "Repetoare radioamatori",
  "Rádióamatőr átjátszó": "Repetor radioamator",
  "Kimenő (hallgatás)": "Ieșire (ascultare)",
  "Bemenő / eltolás": "Intrare / decalaj",
  "Csak rádióamatőr vizsgával és engedéllyel használható.": "Utilizabil doar cu examen și licență de radioamator.",
  "Az alaptérképet az OpenStreetMap szabályai miatt nem lehet előre letölteni (a megnézett részek megmaradnak). Internet nélkül a Saját térkép működik: Magyarországra tájegységenként letöltheted itt lent, az „Offline térkép” csoportban.": "Harta de bază nu poate fi descărcată în avans din cauza regulilor OpenStreetMap (zonele vizualizate rămân salvate). Fără internet funcționează Harta proprie: pentru Ungaria o poți descărca mai jos, pe regiuni.",
  "Átváltok a Saját térképre": "Trec la Harta proprie",
  "Saját térkép bekapcsolva. A tájegységeket itt lent, az „Offline térkép” csoportban töltheted le.": "Harta proprie activată. Regiunile le descarci mai jos, la „Hartă offline pe regiuni”."
});

// ===== 2026-10-15: femkereso + eses-erzekeles (kartya 898b5891) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Fémkereső: vas és acél a közelben": "Detector de metale: fier și oțel în apropiere",
 "Fémkereső": "Detector de metale",
 "Vezeték, cső, fém a falban vagy a földben": "Cablu, țeavă, metal în perete sau în pământ",
 "Nullázás után itt látszik a változás": "După aducerea la zero, aici se vede schimbarea",
 "Nullázás": "Zero",
 "Hang: be": "Sunet: pornit",
 "Hang: ki": "Sunet: oprit",
 "Tartsd a telefont távol a fémtől, és nyomd meg a Nullázást. Utána lassan húzd végig a falon vagy a talajon: fém közelében nő a szám, és sűrűbben, magasabban pittyeg.": "Ține telefonul departe de metal și apasă Zero. Apoi plimbă-l încet pe perete sau pe sol: lângă metal numărul crește, iar semnalul e mai des și mai înalt.",
 "AMIT EZ TUD ÉS AMIT NEM. A vas- és acéltárgyat (cső, szög, vasbeton, áramalatti vezeték) néhány centiméterről érzékeli, mélyebbről nem. Rezet, alumíniumot, aranyat nem talál. A pontosság telefononként nagyon eltér; ne erre bízd, hogy fúrhatsz-e a falba.": "CE POATE ȘI CE NU. Detectează fierul și oțelul (țeavă, cui, armătură, cablu sub tensiune) de la câțiva centimetri, nu mai adânc. Nu găsește cupru, aluminiu sau aur. Precizia diferă mult de la un telefon la altul; nu te baza pe el ca să decizi dacă poți găuri peretele.",
 "Ehhez a telefonos PrepperPapa app kell: a böngésző nem adja ki az iránytű-érzékelő nyers értékét.": "Pentru asta e nevoie de aplicația PrepperPapa pentru telefon: browserul nu oferă valoarea brută a senzorului busolei.",
 "a nullához képest": "față de zero",
 "Az érzékelő pontatlan: mozgasd a telefont nyolcas alakban néhányszor, aztán nullázz.": "Senzorul e imprecis: mișcă telefonul în formă de opt de câteva ori, apoi adu la zero.",
 "Esés-érzékelés": "Detectarea căderii",
 "Esés után automatikus SOS": "SOS automat după o cădere",
 "Ha a telefon nagy ütést érez, és utána egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a": "Dacă telefonul simte un impact puternic și apoi nu se mișcă un minut, numără invers cu voce tare. Dacă nu apeși butonul",
 "Jól vagyok": "Sunt bine",
 "gombot, SOS üzenetet küld a helyzeteddel minden szobádba, és megszólal a vészsíp.": ", trimite un mesaj SOS cu locația ta în toate camerele tale și pornește fluierul de urgență.",
 "Esést érzékeltem": "Cădere detectată",
 "másodperc múlva SOS üzenet megy a helyzeteddel": "secunde până la trimiterea mesajului SOS cu locația ta",
 "SOS most": "SOS acum",
 "Bekapcsolva. Háttérben és kikapcsolt képernyőn is figyel.": "Pornit. Veghează și în fundal, și cu ecranul stins.",
 "Bekapcsolva, de csak addig figyel, amíg az app nyitva van (a telefonos appban háttérben is).": "Pornit, dar veghează doar cât timp aplicația e deschisă (în aplicația de telefon și în fundal).",
 "A mozgás-érzékelő használatát nem engedélyezted.": "Nu ai permis senzorul de mișcare.",
 "Rendben, nem küldtem SOS-t.": "Bine, nu s-a trimis SOS.",
 "Esést érzékeltem, és nem reagálok.": "Am detectat o cădere și nu reacționez.",
 "Itt vagyok": "Sunt aici",
 "A helyzetemet nem sikerült meghatározni.": "Locația mea nu a putut fi determinată.",
 "SOS elküldve": "SOS trimis",
 "szobába": "camere",
 "Az SOS üzenet nem ment el (nincs szoba vagy kapcsolat). A vészsíp szól.": "Mesajul SOS nu a plecat (nicio cameră sau fără conexiune). Fluierul sună.",
 "Eszközök": "Unelte",
 "Fémdetektor": "Detector de metale",
 "Víz, áram, kalória, fűtés és a többi számoló": "Apă, curent, calorii, încălzire și celelalte calculatoare",
 "Eszközök: a kalkulátorok, a fémdetektor, a tükör és a vad- és rovarriasztó egy helyen.": "Unelte: calculatoarele, detectorul de metale, oglinda și repelentul pentru animale și insecte într-un singur loc.",
 "Tükör": "Oglindă",
 "Előlapi kamera fénykerettel, sérülés megnézéséhez": "Camera frontală cu ramă luminoasă, pentru a verifica o rană",
 "Fény: be": "Lumină: pornită",
 "Fény: ki": "Lumină: oprită",
 "A kamera nem nyitható meg. Engedélyezd a kamerát az app beállításaiban.": "Camera nu poate fi deschisă. Permite camera în setările aplicației.",
 "Két ujjal csippentve nagyítasz. A fehér keret világítja meg az arcod; sötétben tedd a képernyő fényerejét maximumra.": "Ciupește cu două degete pentru zoom. Rama albă îți luminează fața; pe întuneric, pune luminozitatea ecranului la maxim.",
 "Privát üzenet": "Mesaj privat",
 "Gíra küldése": "Trimite gíra",
 "Vad- és rovarriasztó": "Repelent pentru animale și insecte",
 "Magas hang vadak és szúnyogok ellen": "Sunet înalt împotriva animalelor sălbatice și țânțarilor",
 "A riasztó hangja most nem indult el.": "Sunetul repelentului nu a pornit.",
 "Előzmény": "Istoric",
 "Legutóbb olvasott igék": "Versete citite recent",
 "Korábbi keresések": "Căutări anterioare",
 "Még nincs olvasott ige. Amit a Bibliában megnyitsz, itt jelenik meg.": "Încă nu ai citit niciun verset. Ce deschizi în Biblie va apărea aici.",
 "Még nincs korábbi keresés. Amit itt keresel, ide kerül.": "Încă nu există căutări anterioare. Ce cauți aici va apărea în această listă.",
 "Olvasási terv: csak ez az olvasmány látszik, a felolvasás a végén megáll.": "Plan de citire: se vede doar această lectură, iar citirea cu voce tare se oprește la final.",
 "Az olvasmány vége": "Sfârșitul lecturii",
 "Vissza a tervemhez": "Înapoi la planul meu",
 "Ébresztő": "Alarmă",
 "Ébresztő bekapcsolva": "Alarmă activată",
 "Reggel felébreszti a telefont, és felolvassa a terv mai olvasmányát.": "Trezește telefonul dimineața și citește cu voce tare lectura de azi din plan.",
 "Bekapcsolva": "Pornită",
 "Időpont": "Ora",
 "Napok": "Zile",
 "Válassz legalább egy napot.": "Alege cel puțin o zi.",
 "Következő ébresztés:": "Următoarea alarmă:",
 "Ebben a böngészőben és iPhone-on az ébresztő nem tud megszólalni: a weboldal nem kapcsolhatja be a lezárt telefont. Az ébresztő az Android appban működik. A beállításod itt megmarad.": "În acest browser și pe iPhone alarma nu poate suna: o pagină web nu poate porni un telefon blocat. Alarma funcționează în aplicația Android. Setarea ta rămâne salvată aici.",
 "Ehhez az ébresztőhöz frissítsd az appot a legújabb változatra.": "Actualizează aplicația la cea mai nouă versiune pentru a folosi această alarmă.",
 "Az értesítés nincs engedélyezve: enélkül az ébresztő nem tud megjelenni.": "Notificările nu sunt permise: fără ele alarma nu poate apărea.",
 "Értesítés engedélyezése": "Permite notificările",
 "A pontos időzítés nincs engedélyezve (Ébresztők és emlékeztetők): az ébresztő így akár negyed órát is késhet.": "Ora exactă nu este permisă (Alarme și mementouri): alarma poate întârzia până la un sfert de oră.",
 "Pontos időzítés engedélyezése": "Permite ora exactă",
 "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon csak értesítés jelenik meg, a felolvasás a koppintásra indul.": "Notificările pe tot ecranul nu sunt permise: pe un telefon blocat apare doar o notificare, iar citirea începe când o atingi.",
 "Teljes képernyő engedélyezése": "Permite ecranul complet",
  // v43.407 (kartya 0ef65ebd): eszkoz-riasztas elore hozasa, szoba beallitasai
  "Az értesítés nincs engedélyezve: enélkül a szoba riasztása nem jelenik meg a telefonon.": "Notificările nu sunt permise: fără ele alarma camerei nu apare pe telefon.",
  "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon a riasztás csak értesítésként jelenik meg.": "Notificările pe ecran complet nu sunt permise: pe un telefon blocat alarma apare doar ca notificare.",
  "A megjelenítés más alkalmazások felett nincs engedélyezve: amíg a telefont használod, a riasztás oldala nem ugrik elő, csak értesítés érkezik.": "Afișarea peste alte aplicații nu este permisă: cât timp folosești telefonul, pagina de alarmă nu apare, sosește doar o notificare.",
  "Megjelenítés más alkalmazások felett": "Afișare peste alte aplicații",
  "A szoba riasztása lezárt és használatban lévő telefonon is előreugrik.": "Alarma camerei apare pe telefonul blocat și în timp ce îl folosești.",
 "Az ébresztő be van állítva.": "Alarma este setată.",
 "Az ébresztőt most nem sikerült beállítani. Próbáld újra később.": "Alarma nu a putut fi setată acum. Încearcă din nou mai târziu.",
 "Bibliaolvasás ébresztő": "Alarmă pentru citirea Bibliei",
 "Reggeli ige": "Cuvântul dimineții",
 "A mai olvasmány felolvasása indul.": "Începe lectura de azi.",
 "Szundi 10 perc": "Amână 10 min"
});

// ===== 2026-10-18: Bible alarm polish (v43.259): stop button, time picker, spoken intro/blessing =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Leállítom": "Oprește",
 "Óra": "Ora",
 "Perc": "Minutul",
 "{konyv} {a}. fejezet": "{konyv}, capitolul {a}",
 "{konyv} {a}–{b}. fejezet": "{konyv}, capitolele {a} până la {b}",
 "Jó reggelt! Olvasási terv: {terv}. A mai olvasmány: {resz}.": "Bună dimineața! Plan de citire: {terv}. Lectura de azi: {resz}.",
 "Jó reggelt! {ido} van. Ma {datum}. A mai olvasmány: {resz}.": "Bună dimineața! Este ora {ido}. Astăzi este {datum}. Lectura de azi: {resz}.",
 "Áldott napot kívánok!": "Îți doresc o zi binecuvântată!"
});

// ===== 2026-10-18: daily tester task popup (v43.261, card 84c182b9): the popup and the seeded tasks =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Mai tesztfeladat": "Sarcina de test de azi",
 "Hogyan működik": "Cum funcționează",
 "Mit próbálj ki": "Ce să încerci",
 "Ezt a feladatot a készüléked és a felület alapján kaptad, név nélkül.": "Ai primit această sarcină după dispozitivul tău și interfață (aplicație sau browser), fără numele tău.",
 "Működik": "Funcționează",
 "Hibás": "Defect",
 "Később": "Mai târziu",
 "Köszönjük, megkaptuk a visszajelzést.": "Mulțumim, am primit feedbackul tău.",
 "Most nincs kapcsolat. Elmentettem, és magától elküldöm, amint lesz.": "Acum nu există conexiune. Am salvat și se trimite singur imediat ce apare.",
 "Ezt a szerver most nem fogadta el. Próbáld újra később.": "Serverul nu a acceptat acum. Încearcă din nou mai târziu.",
 "Most nem érem el a szervert. Próbáld újra később.": "Acum nu pot ajunge la server. Încearcă din nou mai târziu.",
 "Mára nincs több tesztfeladat. Köszönjük a segítséget!": "Pentru azi nu mai sunt sarcini de test. Mulțumim pentru ajutor!",
 "Tesztfeladat": "Sarcină de test",
 "Mi nem működött?": "Ce nu a funcționat?",
 "Biblia: az olvasási terv ébresztője": "Biblia: alarma planului de citire",
 "Az olvasási terv ébresztője a beállított időben felébreszti a telefont, a lezárt képernyő fölött megnyitja az aznapi olvasmányt, és felolvassa. Halkan indul, és bő fél perc alatt erősödik fel; előtte egy rövid köszöntés elmondja, mi a mai olvasmány. Amíg olvas, a képernyő alján egy nagy Leállítom gomb van.": "Alarma planului de citire trezește telefonul la ora setată, deschide citirea zilei peste ecranul blocat și o citește cu voce tare. Pornește încet și crește treptat în ceva mai mult de jumătate de minut; înainte, un scurt salut spune care este citirea de azi. Cât timp citește, în partea de jos a ecranului este un buton mare Oprește.",
 "Biblia > Olvasási terv: nyiss meg egy futó tervet, kapcsold be az ébresztőt, és állítsd az időpontot 2 perccel későbbre.": "Biblia > Plan de citire: deschide un plan în curs, pornește alarma și setează ora cu 2 minute mai târziu.",
 "Zárd le a telefont, és tedd le. Figyeld: felébred-e a telefon, halkan indul-e a hang, és elhangzik-e a köszöntés.": "Blochează telefonul și pune-l jos. Urmărește: se trezește telefonul, pornește sunetul încet și se aude salutul?",
 "Koppints a nagy Leállítom gombra: a felolvasásnak azonnal meg kell állnia.": "Atinge butonul mare Oprește: citirea trebuie să se oprească imediat.",
 "Biblia: a könyvcsoportok színei": "Biblia: culorile grupurilor de cărți",
 "A Biblia könyvlistáján a könyvek csoportonként színes csempéken állnak. A csoportok ugyanazt az öt zöld árnyalatot kapják, de világos és sötét váltakozva, hogy két szomszédos csoport jól elváljon egymástól. Éjszakai módban ugyanez vörös árnyalatokkal.": "În lista de cărți a Bibliei, cărțile stau pe plăci colorate, pe grupuri. Grupurile au aceleași cinci nuanțe de verde, dar deschis și închis alternează, ca două grupuri vecine să se distingă bine. În modul de noapte, la fel, cu nuanțe de roșu.",
 "Nyisd meg a Bibliát, és koppints a Biblia csempére, hogy megjelenjen a könyvek listája.": "Deschide Biblia și atinge placa Biblia, ca să apară lista cărților.",
 "Nézd végig a csempéket: jól elválnak-e a szomszédos csoportok, és minden könyvnév olvasható-e a háttéren?": "Parcurge plăcile: se disting bine grupurile vecine și se citește fiecare nume de carte pe fundalul său?",
 "Lenyíló lista: a vissza csak a listát zárja": "Listă derulantă: Înapoi închide doar lista",
 "Ha egy lenyíló lista (például a Rádió-hatótáv sávválasztója) nyitva van, a vissza gomb először csak a listát zárja be, és ugyanazon a képernyőn maradsz. Ha közben másik képernyőre lépsz, a nyitott lista nem maradhat ott a következő képernyő fölött.": "Când o listă derulantă (de exemplu selectorul de bandă din Rază radio) este deschisă, butonul Înapoi închide mai întâi doar lista și rămâi pe același ecran. Dacă între timp treci la alt ecran, lista deschisă nu poate rămâne peste ecranul următor.",
 "Kalkulátor > Rádió-hatótáv: koppints a sáv választójára, hogy lenyíljon a lista.": "Calculator > Rază radio: atinge selectorul de bandă ca să se deschidă lista.",
 "Nyomd meg a vissza gombot: a lista bezárul, és a Rádió-hatótáv képernyő marad.": "Apasă Înapoi: lista se închide, iar ecranul Rază radio rămâne.",
 "Nyisd ki újra a listát, és lépj át egy másik képernyőre: a lista nem maradhat ott lebegve.": "Deschide din nou lista și treci la alt ecran: lista nu poate rămâne acolo plutind.",
 "Szobák: privát üzenet (Csak neki)": "Camere: mesaj privat (Doar către)",
 "Egy internetes szobában egy tagnak úgy is írhatsz, hogy csak ő lássa. Ilyenkor a beíró mező fölött „Csak neki” sáv áll a nevével; amíg ez látszik, az üzenet biztosan privátként megy el, és a sáv nem takarja el a legutolsó üzenetet. Ha mégsem megy el, az app megmondja, miért, és a beírt szöveg megmarad.": "Într-o cameră pe internet poți scrie unui membru astfel încât doar el să vadă. Atunci deasupra câmpului de scriere apare bara „Doar către” cu numele lui; cât timp se vede, mesajul pleacă sigur ca privat, iar bara nu acoperă ultimul mesaj. Dacă totuși nu pleacă, aplicația îți spune de ce, iar textul scris rămâne.",
 "Nyiss meg egy szobát, ahol van legalább egy másik tag, és koppints egy tőle jött üzenet mellett a képére.": "Deschide o cameră cu cel puțin încă un membru și atinge imaginea de lângă un mesaj de la el.",
 "Írj egy rövid üzenetet, és küldd el. A legutolsó üzenetnek a „Csak neki” sáv fölött kell látszania.": "Scrie un mesaj scurt și trimite-l. Ultimul mesaj trebuie să se vadă deasupra barei „Doar către”.",
 "Ha meg tudod kérdezni: a címzett megkapta, a többiek nem látják.": "Dacă poți întreba: destinatarul l-a primit, ceilalți nu îl văd."
});
// ===== 2026-10-18: Noah for every tester (v43.262, card 84bede18): Android-only note, download confirm, memory reason, daily task =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Noah, az offline MI segéd a telefonra telepített Android appban fut: a nyelvi modellt a telefon egyszer letölti, utána internet nélkül, helyben válaszol. A böngészős változatban és iPhone-on nem érhető el, mert ide a modell nem tölthető le.": "Noah, asistentul AI offline, rulează în aplicația Android instalată pe telefon: telefonul descarcă o singură dată modelul de limbaj, apoi răspunde local, fără internet. Nu este disponibil în versiunea din browser și nici pe iPhone, pentru că acolo modelul nu poate fi descărcat.",
 "Ehhez Android 11 vagy újabb, legalább 6 GB memóriás telefon kell, és 6-8 GB szabad hely.": "Pentru asta e nevoie de un telefon cu Android 11 sau mai nou, cel puțin 6 GB de memorie și 6-8 GB spațiu liber.",
 "A nyelvi modell válasz közben kb. 3 GB memóriát használ. 6 GB-nál kevesebb memóriájú telefonon a rendszer ilyenkor leállítaná az appot, ezért itt Noah nem használható.": "Când răspunde, modelul de limbaj folosește aproximativ 3 GB de memorie. Pe un telefon cu mai puțin de 6 GB de memorie sistemul ar opri aplicația, de aceea Noah nu poate fi folosit aici.",
 "Ezen a telefonon nem fut:": "Nu rulează pe acest telefon:",
 "Android 11 vagy újabb kell": "este nevoie de Android 11 sau mai nou",
 "64 bites ARM processzor kell": "este nevoie de un procesor ARM pe 64 de biți",
 "legalább 6 GB memória kell": "sunt necesari cel puțin 6 GB de memorie",
 "nem támogatott": "neacceptat",
 "Ehhez a modellhez kevés a telefon memóriája.": "Acest telefon nu are suficientă memorie pentru acest model.",
 "Letöltöd a(z) {modell} modellt?": "Descarci modelul {modell}?",
 "Letöltés: {meret}, egyszer kell letölteni.": "Descărcare: {meret}, o singură dată.",
 "Szabad hely: kb. {hely} kell, mert az első használatkor a telefon még egyszer ennyit foglal a gyorsabb futáshoz.": "Spațiu liber: e nevoie de aproximativ {hely}, pentru că la prima utilizare telefonul mai ocupă o dată pe atât, ca să ruleze mai repede.",
 "Memória: legalább {ajanlott} GB-os telefon ajánlott.": "Memorie: se recomandă un telefon de cel puțin {ajanlott} GB.",
 "Ez a telefon {ram} GB-os.": "Acest telefon are {ram} GB.",
 "Most mobilinternetet használsz: a letöltés {meret} adatforgalom. Wi-Fi ajánlott.": "Acum folosești date mobile: descărcarea înseamnă {meret} de trafic. Se recomandă Wi-Fi.",
 "Offline MI segéd": "Asistent AI offline",
 "Offline MI segéd használata": "Folosește asistentul AI offline",
 "A segéd a fejléc gombjával nyílik; a modell letöltése és a beállításai a segéd oldalán vannak.": "Asistentul se deschide cu butonul din antet; descărcarea modelului și setările lui sunt pe pagina asistentului.",
 "Offline MI segéd · a tudástárból, forrással": "Asistent AI offline · din baza de cunoștințe, cu surse",
 "Kérdezz": "Întreabă",
 "Noah, az offline MI segéd": "Noah, asistentul AI offline",
 "Noah a telefonon futó MI segéd: a tudástárból, a Bibliából és az app adataidból válaszol, internet nélkül. A nyelvi modellt egyszer kell letölteni (2,6 vagy 3,7 GB). Letöltés előtt az app kiírja a méretet, a szükséges szabad helyet és memóriát, mobilinterneten pedig Wi-Fi-t javasol. 6 GB-nál kevesebb memóriájú telefonon nem használható, és ezt meg is indokolja.": "Noah este asistentul AI care rulează pe telefon: răspunde din baza de cunoștințe, din Biblie și din datele tale din aplicație, fără internet. Modelul de limbaj trebuie descărcat o singură dată (2,6 sau 3,7 GB). Înainte de descărcare aplicația arată dimensiunea, spațiul liber și memoria necesare, iar pe date mobile recomandă Wi-Fi. Pe un telefon cu mai puțin de 6 GB de memorie nu poate fi folosit, iar aplicația explică de ce.",
 "Beállítások: kapcsold be az „Offline MI segéd használata” pontot, majd nyisd meg Noah-t a fejléc szikra gombjával.": "Setări: activează „Folosește asistentul AI offline”, apoi deschide-l pe Noah cu butonul scânteie din antet.",
 "A fogaskerék alatt nyomd meg a Letöltés gombot: nézd meg, kiírja-e a méretet, a helyet és a memóriát, mielőtt elindul. Wi-Fi-n töltsd le.": "Sub rotița dințată apasă Descarcă: verifică dacă afișează dimensiunea, spațiul și memoria înainte să înceapă. Descarcă-l pe Wi-Fi.",
 "Kérdezz tőle valamit, például: „Hogyan tisztítsak vizet?” Nézd meg, kapsz-e választ forrással.": "Întreabă-l ceva, de exemplu: „Cum purific apa?” Verifică dacă primești un răspuns cu sursă.",
 "Ha a telefon nagy ütést érez, és utána egy percig nem mozdul, felkapcsolja a kijelzőt (lezárt telefonon is), és hangosan visszaszámol. Ha nem nyomod meg a": "Dacă telefonul simte un impact puternic și apoi nu se mișcă un minut, aprinde ecranul (și pe telefonul blocat) și numără invers cu voce tare. Dacă nu apeși butonul",
 "Utána megszólal a vészsíp.": "Apoi sună fluierul de urgență.",
 "Esés-riasztás": "Alarmă de cădere",
 "%d másodperc múlva SOS üzenet megy a helyzeteddel. Ha jól vagy, nyomd meg: Jól vagyok.": "Peste %d secunde se trimite un mesaj SOS cu locația ta. Dacă ești bine, apasă: Sunt bine.",
 "Az értesítés nincs engedélyezve: enélkül esés után a lezárt telefonon nem jelenik meg a visszaszámlálás.": "Notificările nu sunt permise: fără ele numărătoarea inversă nu poate apărea pe telefonul blocat după o cădere.",
 "A teljes képernyős értesítés nincs engedélyezve: esés után a lezárt telefonon csak egy értesítés jelenik meg a visszaszámlálással és a Jól vagyok gombbal, a nagy számláló koppintásra nyílik meg.": "Notificările pe ecran complet nu sunt permise: după o cădere telefonul blocat arată doar o notificare cu numărătoarea inversă și butonul Sunt bine; contorul mare se deschide la atingere.",
 "Esés után a lezárt telefonon is felkapcsolja a kijelzőt, és mutatja a visszaszámlálást.": "După o cădere aprinde ecranul, și pe telefonul blocat, și arată numărătoarea inversă.",
 "Megnyitom": "Deschid",
 "Láttam": "Am văzut",
 "Egy szobatárs": "Un membru al camerei",
 "vészjelzést küldött": "a trimis un semnal de urgență",
 "Itt van": "Locație",
 "Megnézem a térképen": "Arată pe hartă",
 "SOS · vészjelzés": "SOS · semnal de urgență",
 "Egy szobatárs vészjelzést küldött.": "Un membru al camerei a trimis un semnal de urgență.",
 "SOS a szobából": "SOS dintr-o cameră",
 "Egy szobatárs vészjelzést küldött: a lezárt telefon is felébred.": "Un membru al camerei a trimis un semnal de urgență: și telefonul blocat se trezește.",
 "RIASZTÁS": "ALARMĂ",
 "Eszköz-riasztás": "Alarmă de la dispozitiv",
 "Egy eszköz riasztást küldött.": "Un dispozitiv a trimis o alarmă.",
 "Eszköz-riasztás a szobából": "Alarmă de la dispozitiv dintr-o cameră",
 "Egy eszköz riasztást küldött: a lezárt telefon is felébred.": "Un dispozitiv a trimis o alarmă: și telefonul blocat se trezește.",
 "Ideje visszafordulni": "E timpul să te întorci",
 "visszaút": "întoarcere",
 "Ma már elmúlt a sötétedés: lámpával indulj vissza.": "Azi e deja întuneric: întoarce-te cu lanterna.",
 "A visszafordulás ideje már elmúlt: indulj vissza most.": "Ora de întoarcere a trecut: întoarce-te acum.",
 "Sötétedésig": "Până la întuneric",
 "Már sötétedik.": "Se întunecă.",
 "Visszaút": "Întoarcere",
 "Tartalék": "Rezervă",
 "Ha most elindulsz, világosban érsz vissza.": "Dacă pleci acum, ajungi înapoi pe lumină.",
 "A visszaút hosszabb, mint ami a sötétedésig hátravan: indulj most, és készítsd elő a lámpát.": "Întoarcerea durează mai mult decât timpul rămas până la întuneric: pleacă acum și pregătește lanterna.",
 "A tájoló a felvett irány ellentétére mutat: ez a visszaút.": "Busola arată direcția opusă celei salvate: acesta e drumul înapoi.",
 "A tájoló a kiindulópont felé mutat.": "Busola arată spre punctul de plecare.",
 "Nincs GPS-helyzet: a térképen látod a kiindulópontot.": "Fără poziție GPS: punctul de plecare se vede pe hartă.",
 "Kiindulópont": "Punct de plecare",
 "Élesítve, ekkor szól:": "Activă, sună la:",
 "Szólt": "A sunat",
 "Visszafordulási ébresztő": "Alarmă de întoarcere",
 "Túrán a visszafordulás idejében felébreszti a telefont, és mutatja, mennyi idő van sötétedésig, és mennyi a visszaút.": "Pe traseu trezește telefonul la ora de întoarcere și arată cât timp mai e până la întuneric și cât durează drumul înapoi.",
 "Túra indítása": "Pornește tura",
 "Visszaút ideje (perc)": "Durata întoarcerii (minute)",
 "A fenti számításból": "Din calculul de mai sus",
 "A tervezett útvonalból": "Din traseul planificat",
 "A fenti Menetidővel kiszámolhatod: add meg a visszaút távolságát és emelkedését.": "O poți calcula cu Timpul de mers de mai sus: introdu distanța și urcarea drumului înapoi.",
 "Biztonsági tartalék (perc)": "Rezervă de siguranță (minute)",
 "Sötétedés": "Întuneric",
 "Napnyugta": "Apus",
 "A szürkület vége (kb. fél órával a napnyugta után)": "Sfârșitul amurgului (cam o jumătate de oră după apus)",
 "tartalék": "rezervă",
 "Visszafordulás időpontja (kézzel)": "Ora de întoarcere (manual)",
 "Számított időre": "Ora calculată",
 "Böngészőben és iPhone-on csak akkor szól, ha az oldal nyitva van. A lezárt telefont az Android app ébreszti fel.": "În browser și pe iPhone sună doar cât pagina e deschisă. Telefonul blocat îl trezește aplicația Android.",
 "Az ébresztő be van állítva, lezárt telefonon is szól.": "Alarma e setată și sună și pe telefonul blocat.",
 "Visszafordulás": "Întoarcere",
 "Visszafordulás (kézzel állítva)": "Întoarcere (setată manual)",
 "Nincs helyzet a napnyugtához: engedélyezd a helymeghatározást, vagy nyisd meg egyszer a térképet.": "Nu există poziție pentru apus: permite localizarea sau deschide o dată harta.",
 "Add meg a visszaút idejét.": "Introdu cât durează întoarcerea.",
 "Ezen a helyen ma nincs napnyugta.": "Aici azi nu e apus.",
 "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon csak értesítés jelenik meg.": "Notificările pe tot ecranul nu sunt permise: pe telefonul blocat apare doar o notificare.",
 "VISSZA": "ÎNAPOI",
 "Visszaút indítása": "Pornește întoarcerea",
 "Indulj vissza, hogy világosban érj le.": "Întoarce-te ca să cobori pe lumină.",
 "Túrán a visszafordulás idejében a lezárt telefon is felébred.": "Pe traseu, telefonul blocat se trezește la ora de întoarcere.",
 // ===== 2026-10-18: hatterzene a felolvasas alatt (kartya 694fc83c) =====
 "Háttérzene": "Muzică de fundal",
 "Halk, ismétlődő zene a felolvasás alatt. Előbb töltsd le; utána internet nélkül is szól. A hangerejét felolvasás közben a hangjegy gombbal állíthatod.": "Muzică liniștită, în buclă, în timpul lecturii. Descarc-o mai întâi; apoi se aude și fără internet. Volumul îl reglezi în timpul lecturii cu butonul cu nota muzicală.",
 "Zene a Biblia felolvasása alatt": "Muzică la citirea Bibliei",
 "Ki": "Oprit",
 "nincs letöltve": "nedescărcată",
 "Biblia-felolvasáshoz": "Pentru citirea Bibliei",
 "Ébresztőhöz": "Pentru alarmă",
 "Akusztikus gitár": "Chitară acustică",
 "Kelta": "Celtică",
 "Epikus 1": "Epic 1",
 "Epikus 2": "Epic 2",
 "Epikus 3": "Epic 3",
 "Zene": "Muzică",
 "Háttérzenét a Biblia beállításaiban (fogaskerék) tölthetsz le.": "Muzica de fundal o poți descărca din setările Bibliei (rotița).",
 "A letöltött zene hiányos volt, ezért nem mentettük el. Próbáld újra.": "Muzica descărcată era incompletă, așa că nu a fost salvată. Încearcă din nou.",
 "Ez a zene most nem érhető el a szerveren.": "Această muzică nu este disponibilă acum pe server.",
 // a felolvaso panel (hangjegy gomb) feliratai -- eddig forditatlanok voltak (2026-10-18, 694fc83c mellett)
 "Felolvasás": "Citire cu voce tare",
 "Szünet a versek között": "Pauză între versete",
 "Sebesség": "Viteză",
 "Zene hangereje": "Volumul muzicii",
 "Zene választása": "Alege muzica",
 "Nincs kiválasztott zene": "Nicio muzică aleasă",
 "Zene szünet": "Pauză muzică",
 "Zene indítása": "Pornește muzica",
 "Telefon zenelejátszója (hangereje itt nem állítható)": "Playerul de muzică al telefonului (volumul nu se poate regla aici)",
 "Megvallás felolvasás": "Citirea mărturisirii",
 "Ima felolvasás": "Citirea rugăciunii",
 "Saját zene a telefonról": "Muzică proprie de pe telefon",
 "Telefon hangja": "Vocea telefonului",
 "Előbb töltsd le; utána internet nélkül is szól.": "Descarc-o mai întâi; apoi se aude și fără internet.",
 "Csatazene": "Muzică de luptă",
 "Tempó": "Tempo",
 "Lassú": "Lent",
 "Szünet a mondatok után": "Pauză după fiecare propoziție",
 "Auto": "Auto",
 "Auto: a mondat hossza": "Auto: lungimea propoziției",
 "Minden mondat után megáll, hogy hangosan elismételhesd. A zene a szünetben is szól.": "Se oprește după fiecare propoziție, ca s-o poți repeta cu voce tare. Muzica se aude și în pauză.",
 "A telefon beszédmotorja: ha a Google magyar hangja telepítve van, azzal olvas. Nem foglal helyet, internet nélkül is szól.": "Motorul de vorbire al telefonului: dacă vocea Google a limbii este instalată, citește cu ea. Nu ocupă spațiu, merge și fără internet.",
 "Előre felolvasott hang a Károli-fordításhoz. Internettel azonnal szól; ha letöltöd, internet nélkül is.": "O voce înregistrată în prealabil pentru traducerea Károli. Cu internet se aude imediat; descărcată, și fără.",
 "A PrepperPapa hang a saját tempójában szól (nem lassítjuk, mert torzítana).": "Vocea PrepperPapa se aude în ritmul ei (nu o încetinim, s-ar distorsiona).",
 "jobb": "mai bună",
 "internet": "internet",
 "letöltött": "descărcată",
 "Hang": "Voce",
 "Most ez szól": "Acum citește",
 "A telefon beszédmotorja: internettel a Google legjobb hangján olvas, internet nélkül a telefonra letöltött hangon. Nem foglal helyet.": "Motorul de vorbire al telefonului: cu internet citește cu cea mai bună voce Google, fără internet cu vocea descărcată pe telefon. Nu ocupă spațiu.",
 "A Lassú egy külön, lassabban felolvasott felvétel.": "Tempoul Lent este o înregistrare separată, citită mai rar.",
 "A Lassú tempó lassabban beszélteti a telefon hangját.": "Tempoul Lent face ca vocea telefonului să vorbească mai rar."
});

// ===== 2026-10-18: vilagterkep-letoltes (korabban hianyzo kulcsok) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "a telefonon": "pe telefon",
  "A letöltés nem sikerült": "Descărcarea nu a reușit",
  "A letöltéshez be kell jelentkezni (Beállítások).": "Pentru descărcare trebuie să te autentifici (Setări)."
});

// ===== 2026-10-18: AKTUALIS VILAGHELYZET terkep-reteg (kartya 771683de) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Világhelyzet (események)": "Situația mondială (evenimente)",
  "Tűzveszély-előrejelzés (EFFIS) – veszély, nem tilalom": "Prognoza pericolului de incendiu (EFFIS) – pericol, nu interdicție",
  "Földrengés": "Cutremur",
  "Erdőtűz": "Incendiu de pădure",
  "Árvíz": "Inundație",
  "Trópusi ciklon": "Ciclon tropical",
  "Vulkánkitörés": "Erupție vulcanică",
  "Aszály": "Secetă",
  "Járvány": "Epidemie",
  "Háborús övezet": "Zonă de război",
  "Tűzgyújtási tilalom": "Interdicție de a face focul",
  "Súlyosság": "Gravitate",
  "alacsony": "scăzută",
  "közepes": "medie",
  "magas": "ridicată",
  "Nagy háború (évi 10 000+ halott)": "Război major (peste 10 000 de morți pe an)",
  "Háború (évi 1000–9999 halott)": "Război (1000–9999 de morți pe an)",
  "Fegyveres konfliktus (évi 100–999 halott)": "Conflict armat (100–999 de morți pe an)",
  "Összecsapások (évi 100 alatti halott)": "Ciocniri (sub 100 de morți pe an)",
  "Megye": "Județ",
  "Napi tilalom": "Interdicție zilnică",
  "A tilalom a megye külterületi erdeire, fásításaira és azok 200 méteres sávjára vonatkozik.": "Interdicția privește pădurile și plantațiile județului din afara localităților și o fâșie de 200 de metri în jurul lor.",
  "Erősség": "Magnitudine",
  "Mélység": "Adâncime",
  "Cunamiriasztás": "Alertă de tsunami",
  "Hírek alapján (előző nap):": "Din știri (ziua precedentă):",
  "független forrás": "surse independente",
  "esemény": "evenimente",
  "Érintett ország, a konfliktus fő helyszíne máshol van.": "Țară implicată; scena principală a conflictului este în altă parte.",
  "Időpont": "Ora",
  "Forrás": "Sursa",
  "Forrás megnyitása": "Deschide sursa",
  "Világhelyzet": "Situația mondială",
  "nincs adat": "fără date",
  "frissítve": "actualizat",
  "mentett adat (offline)": "date salvate (offline)",
  "Még nincs letöltött világhelyzet-adat. Kapcsold be internettel.": "Încă nu există date descărcate despre situația mondială. Activează cu internet.",
  "Távolról ikonok, közelítve az érintett terület körvonallal és fátyollal. Koppints egy jelre vagy területre a részletekért.": "De departe, pictograme; la apropiere, zona afectată este conturată și voalată. Atinge un semn sau o zonă pentru detalii.",
  "tűzveszély-előrejelzés (FWI), csak internettel. Ez veszély-index, NEM tilalom.": "prognoza pericolului de incendiu (FWI), doar cu internet. Este un indice de pericol, NU o interdicție.",
  "Források": "Surse",
  "később (hozzáférésre vár)": "mai târziu (așteaptă acces)",
  "most nem frissült": "nu s-a actualizat acum"
});

// ===== 2026-10-18 16:4x: vilaghelyzet v2 (haboru / instabilitas, tilalom tavolrol egy jel; kartya 771683de) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Fegyveres összecsapás / instabilitás": "Ciocniri armate / instabilitate",
  "Felkelés, terrorizmus vagy szervezett bűnözés (nem háború)": "Insurgență, terorism sau crimă organizată (nu război)",
  "helyszín": "locuri",
  "Megyék tilalommal": "Comitate cu interdicție",
  "Közelíts a megyék megjelenítéséhez.": "Mărește harta pentru a vedea comitatele."
});

// ===== 2026-10-18: ige-melletti jegyzetek (Biblia, kartya c7ec8846) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Mértékegység": "Unitate de măsură",
  "Scofield-jegyzet": "Notă Scofield",
  "Jegyzetek": "Note",
  "Jegyzetek az igék mellett": "Note lângă versete",
  "Ahol egy vershez jegyzet tartozik, egy kis jel áll mellette; rákoppintva megnyílik. A jegyzetcsomag a most olvasott fordításhoz tartozik, és letöltés után internet nélkül is megvan.": "Unde un verset are o notă, lângă el stă un mic semn; atinge-l pentru a o deschide. Pachetul de note aparține traducerii pe care o citești și, după descărcare, funcționează și fără internet.",
  "Ehhez a fordításhoz még nincs jegyzetcsomag.": "Pentru această traducere nu există încă un pachet de note.",
  "A letölthető jegyzetcsomagok listája most nem érhető el.": "Lista pachetelor de note descărcabile nu este disponibilă acum.",
  "Jelek megjelenítése": "Afișează semnele",
  "jegyzet": "note",
  "Még nincs letöltve": "Încă nedescărcat",
  "Törlöd ezt a jegyzetcsomagot?": "Ștergi acest pachet de note?"
});

// ===== APOKRIF KONYVEK a Bibliaban (kartya 28758956, 2026-10-18) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Apokrifek ↓": "Apocrife ↓",
  "Apokrif könyvek letöltése": "Descarcă cărțile apocrife",
  "Deuterokanonikus könyvek": "Cărți deuterocanonice",
  "Ószövetségi apokrifek": "Apocrife ale Vechiului Testament",
  "További ószövetségi apokrifek": "Alte apocrife ale Vechiului Testament",
  "Pszeudepigráfák": "Pseudepigrafe",
  "Apostoli atyák": "Părinții apostolici",
  "vers": "verset",
  "Énok könyvei letöltése": "Descarcă cărțile lui Enoh",
  "Énok 2–3 ↓": "Enoh 2–3 ↓"
});

// ===== OFFLINE TERKEP CSOPORT a terkep-funkciok tablan (2026-10-18) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Helyzet, pontok és mérés": "Poziție, puncte și măsurare",
  "Offline térkép": "Hartă offline",
  "A tájegységek letöltése a telefonos alkalmazásban működik.": "Descărcarea pe regiuni funcționează în aplicația de telefon.",
  "Külföld: országok és tájegységeik ›": "Străinătate: țări și regiunile lor ›",
  "Magyarország tájegységei": "Regiunile Ungariei",
  "Külföldi térképek": "Hărți din străinătate",
  "A saját térképet tájegységenként töltheted le: itt lent, az „Offline térkép” csoportban.": "Harta proprie se descarcă pe regiuni: chiar dedesubt, în grupul „Hartă offline”.",
  "A tájegységek listája most nem érhető el (nincs kapcsolat vagy belépés).": "Lista regiunilor nu este disponibilă acum (fără conexiune sau neautentificat).",
  "Saját térkép bekapcsolva. A tájegységeket itt lent, az „Offline térkép” csoportban töltheted le.": "Harta proprie activată. Regiunile le descarci chiar dedesubt, în grupul „Hartă offline”.",
  "Az alaptérképet az OpenStreetMap szabályai miatt nem lehet előre letölteni (a megnézett részek megmaradnak). Internet nélkül a Saját térkép működik: Magyarországra tájegységenként letöltheted itt lent, az „Offline térkép” csoportban.": "Harta de bază nu poate fi descărcată în avans din cauza regulilor OpenStreetMap (zonele vizualizate rămân salvate). Fără internet funcționează Harta proprie: pentru Ungaria o poți descărca pe regiuni chiar dedesubt, în grupul „Hartă offline”.",
  // 2026-10-19 (card 4c1a5683): own country first, Más országok térképei, separate trails / points
  "Turistautak": "Trasee turistice",
  "Turistapontok": "Puncte turistice",
  "Az egész ország": "Toată țara",
  "Más országok térképei": "Hărțile altor țări",
  "Más országok térképei ›": "Hărțile altor țări ›",
  "A telefon beállításaiból nem derül ki, melyik a saját országod: a Más országok térképei között megtalálod.": "Din setările telefonului nu reiese care este țara ta: o găsești la Hărțile altor țări.",
  "Koppints egy országra, és lenyílik. Az alaptérkép, a turistautak és a turistapontok külön-külön letölthetők, az egész országra vagy tájegységenként. A turistautak és a pontok az online térképen is működnek, és kevés helyet foglalnak. Az alaptérképet az első kéréskor a szerver készíti elő, ez néhány perc lehet.": "Atinge o țară pentru a o deschide. Harta de bază, traseele turistice și punctele turistice se descarcă separat, pentru toată țara sau pe regiuni. Traseele și punctele funcționează și pe harta online și ocupă puțin spațiu. Harta de bază este pregătită de server la prima cerere, ceea ce poate dura câteva minute."
});

// 2026-10-19 (card 19b4756f): second recorded Bible voice (Charon)
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "A PrepperPapa hang felvétele": "Înregistrarea vocii PrepperPapa",
  "Imre (gépi)": "Imre (sintetică)",
  "Charon (új, jobb minőségű)": "Charon (nouă, de calitate mai bună)",
  "Az eredeti felvétel, a teljes Biblia elérhető.": "Înregistrarea originală, întreaga Biblie este disponibilă.",
  "Új, természetesebb felvétel, könyvenként érkezik. Amelyik könyv még nem készült el, azt Imre olvassa fel.": "O înregistrare nouă, mai naturală, care sosește carte cu carte. Cărțile încă nefinalizate sunt citite de Imre.",
  "Letöltés közben a felvétel nem váltható.": "Înregistrarea nu poate fi schimbată în timpul unei descărcări.",
  "A Charon-felvétel készül, könyvenként érkezik. Amint egy könyv elkészül, itt letölthető lesz.": "Înregistrarea Charon este în lucru și sosește carte cu carte. Imediat ce o carte este gata, o poți descărca aici.",
  "A Charon-felvétel készül, könyvenként érkezik.": "Înregistrarea Charon este în lucru și sosește carte cu carte.",
  "Minden elkészült könyv letöltése": "Descarcă toate cărțile finalizate"
});

// 2026-10-19 (card eaaba276): calculator validation, settlement search, secret QR, compass, household, reminders
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Add meg, hány liter vizet tisztítasz (nullánál több).": "Introdu câți litri de apă tratezi (mai mult de zero).",
  "Ez a számoló legfeljebb 10 000 literig számol.": "Acest calculator socotește până la cel mult 10 000 de litri.",
  "A magasság -500 és 9000 méter között legyen.": "Altitudinea trebuie să fie între -500 și 9000 de metri.",
  "Tölts ki minden mezőt nullánál nagyobb számmal.": "Completează fiecare câmp cu un număr mai mare decât zero.",
  "A fűtött terület legfeljebb 2000 m² lehet.": "Suprafața încălzită poate fi de cel mult 2000 m².",
  "Legfeljebb 365 napra számol.": "Calculează pentru cel mult 365 de zile.",
  "Tölts ki mindkét mezőt nullánál nagyobb számmal.": "Completează ambele câmpuri cu un număr mai mare decât zero.",
  "A tetőfelület legfeljebb 10 000 m² lehet.": "Suprafața acoperișului poate fi de cel mult 10 000 m².",
  "Egyetlen esőből legfeljebb 500 mm-rel számol: ennél több egy esőzésből nem esik.": "Pentru o singură ploaie socotește cel mult 500 mm: mai mult de atât nu cade într-o ploaie.",
  "Gyalog legfeljebb 1000 km-rel számol. Hosszabb utat bonts szakaszokra.": "Pe jos calculează cel mult 1000 km. Împarte un traseu mai lung în etape.",
  "Az emelkedés nem lehet negatív: a lejtőt ne vond le, írj 0-t.": "Urcarea nu poate fi negativă: nu scădea coborârea, scrie 0.",
  "Az összes emelkedés legfeljebb 20 000 méter lehet.": "Urcarea totală poate fi de cel mult 20 000 de metri.",
  "A létszám nem lehet negatív.": "Numărul de persoane nu poate fi negativ.",
  "Add meg, hány felnőtt és hány gyerek van (legalább egy fő).": "Introdu câți adulți și câți copii sunt (cel puțin o persoană).",
  "Legfeljebb 500 főre számol.": "Calculează pentru cel mult 500 de persoane.",
  "Hány napra kell? Legalább 1 napot adj meg.": "Pentru câte zile? Introdu cel puțin 1 zi.",
  "Legfeljebb 3650 napra (10 évre) számol.": "Calculează pentru cel mult 3650 de zile (10 ani).",
  "Legalább 1 elem vagy akku kell.": "Este nevoie de cel puțin 1 baterie sau acumulator.",
  "Legfeljebb 100 elemmel számol.": "Calculează cu cel mult 100 de baterii.",
  "Add meg a LED áramfelvételét (mA, nullánál több).": "Introdu consumul de curent al LED-ului (mA, mai mult de zero).",
  "Add meg az elem vagy akku kapacitását (mAh, nullánál több).": "Introdu capacitatea bateriei sau a acumulatorului (mAh, mai mult de zero).",
  "Add meg az adóteljesítményt (watt, nullánál több).": "Introdu puterea de emisie (wați, mai mult de zero).",
  "Legfeljebb 1500 wattal számol.": "Calculează cu cel mult 1500 de wați.",
  "Az antennamagasság 0 és 1000 méter között legyen.": "Înălțimea antenei trebuie să fie între 0 și 1000 de metri.",
  "A távolság nem lehet negatív.": "Distanța nu poate fi negativă.",
  "A napok száma nem lehet negatív.": "Numărul de zile nu poate fi negativ.",
  "Hány napra: 1 és 60 nap között adj meg egy számot.": "Câte zile: introdu un număr între 1 și 60.",
  "város": "oraș",
  "település": "localitate",
  "településrész": "cartier",
  "tanya, külterület": "fermă, periferie",
  "A koordinátát nem tudtam értelmezni. Írd be így: 47.4979, 19.0402": "Nu am putut interpreta coordonata. Scrie-o așa: 47.4979, 19.0402",
  "Tölts ki valamit, amit bele lehet tenni.": "Completează ceva ce poate fi pus în el.",
  "Túl hosszú: ennyi szöveg nem fér el egy QR-kódban. Rövidítsd le, vagy oszd két kódra.": "Prea lung: atâta text nu încape într-un cod QR. Scurtează-l sau împarte-l în două coduri.",
  "A titkosítás nem sikerült. Próbáld újra.": "Criptarea nu a reușit. Încearcă din nou.",
  "Előre:": "Înainte:",
  "Az É betű mindig az északot mutatja, a felső jel az, amerre a telefon néz.": "N arată întotdeauna nordul, semnul de sus este direcția în care privește telefonul.",
  "vércsoport": "grupa sanguină",
  "kontakt": "contact",
  "még nincs felvéve": "încă nu există",
  "Bekapcsolva.": "Activat.",
  "Kikapcsolva.": "Dezactivat.",
  "Reggel 9-kor szól, a fent választott idővel a lejárat előtt és a lejárat napján, akkor is, ha az app be van zárva.": "Te anunță la ora 9 dimineața, cu timpul ales mai sus înainte de expirare și în ziua expirării, chiar dacă aplicația este închisă.",
  "Most nincs olyan tétel, aminek közelgő lejárata lenne.": "Acum niciun articol nu este aproape de expirare.",
  "Beütemezett emlékeztetők:": "Mementouri programate:",
  "Kapcsold be, és engedélyezd az értesítést: szól, mielőtt egy élelmiszer vagy készlet-tétel lejár.": "Activează și permite notificările: te anunță înainte să expire un aliment sau un articol din stoc.",
  "Bekapcsolva. Amikor megnyitod az appot, naponta egyszer jelez a lejáró tételekről.": "Activat. Când deschizi aplicația, te anunță o dată pe zi despre articolele care expiră.",
  "Helyi szoba (MESH)": "Cameră locală (MESH)",
  "Offline segéd · tudástár, Biblia, készlet, térkép": "Asistent offline · cunoștințe, Biblie, stocuri, hartă"
});

Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Név a szobákban (ezen látnak a csevegésben)": "Nume în camere (așa te văd ceilalți în chat)",
  "A családtag fényképe a profilképed is lesz a szobákban.": "Fotografia membrului familiei va fi și poza ta de profil în camere."
});

// kartya 28758956: halk jeloles az apokrif konyveknel
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Nem a Szentírás része – ajánlott irodalom.": "Nu face parte din Sfânta Scriptură – lectură recomandată."
});

// kartya 6b4458db: veszkartya-cimkek + riaszto probahang (v43.308)
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "A kártya tulajdonosának telefonszáma": "Numărul de telefon al titularului cardului",
  "A kártya tulajdonosának telefonszáma:": "Numărul de telefon al titularului cardului:",
  "Vész esetén értesítendő személy": "Persoană de anunțat în caz de urgență",
  "Vész esetén értesítendő telefonszáma": "Telefonul persoanei de anunțat în caz de urgență",
  "Vész esetén értesítendő:": "De anunțat în caz de urgență:",
  "pl. +36 30 123 4567": "de ex. +36 30 123 4567",
  "Szól, de hallhatatlanul magas. Ha semmit nem hallasz, az normális.": "Sună, dar este prea înalt pentru a fi auzit. Dacă nu auzi nimic, este normal.",
  "Próbahang": "Sunet de test",
  "A próbahang nem indult el.": "Sunetul de test nu a pornit."
});
// ===== 2026-10-20 v43.326 (card 6b287cfb): PIN recovery code, reminder sentence, PIN setup without a default PIN =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Írd be a PIN-kódod": "Introdu PIN-ul",
  "Írd be még egyszer": "Introdu-l din nou",
  "A PIN még egyszer": "PIN-ul încă o dată",
  "Elfelejtettem a PIN-t": "Am uitat PIN-ul",
  "Állíts be egy PIN-kódot (6 számjegy)": "Setează un PIN (6 cifre)",
  "A PIN 6 számjegy legyen.": "PIN-ul trebuie să aibă 6 cifre.",
  "A két PIN nem egyezik.": "Cele două PIN-uri nu coincid.",
  "Válassz másik PIN-kódot.": "Alege alt PIN.",
  "Mentési kód a PIN-hez": "Cod de recuperare pentru PIN",
  "Ha elfelejted a PIN-t, ezzel a kóddal nyithatod meg a tárat, és állíthatsz be új PIN-t. Írd le papírra, és tartsd biztonságos helyen. Csak most látod: a telefon nem őrzi meg, és sehova nem küldjük el.": "Dacă uiți PIN-ul, acest cod deschide spațiul de stocare și îți permite să setezi un PIN nou. Scrie-l pe hârtie și păstrează-l într-un loc sigur. Îl vezi doar acum: telefonul nu îl păstrează și nu îl trimitem nicăieri.",
  "Emlékeztető mondat (nem kötelező; titkosítás nélkül tárolódik, ne írd bele a PIN-t)": "Propoziție de reamintire (opțională; se păstrează necriptat, nu scrie PIN-ul în ea)",
  "A kód utolsó négy karaktere (ellenőrzéshez)": "Ultimele patru caractere ale codului (pentru verificare)",
  "Leírtam": "L-am notat",
  "Később": "Mai târziu",
  "Mentve. A mentési kód mostantól érvényes.": "Salvat. Codul de recuperare este valabil de acum.",
  "Nem egyezik a kód utolsó négy karakterével. Nézd meg újra a leírt kódot.": "Nu se potrivește cu ultimele patru caractere ale codului. Uită-te din nou la codul notat.",
  "A mentés nem sikerült, próbáld újra.": "Salvarea nu a reușit, încearcă din nou.",
  "Rendben, a következő belépéskor újra felajánljuk.": "În regulă, îl oferim din nou la următoarea autentificare.",
  "Emlékeztető mondat:": "Propoziție de reamintire:",
  "Új PIN ujjlenyomattal": "PIN nou cu amprenta",
  "Mentési kód": "Cod de recuperare",
  "Ehhez a tárhoz még nincs mentési kód, és az ujjlenyomatos feloldás sincs bekapcsolva, ezért a PIN nem állítható vissza.": "Acest spațiu de stocare nu are încă un cod de recuperare, iar deblocarea cu amprenta nu este activată, deci PIN-ul nu poate fi recuperat.",
  "Új PIN beállítása": "Setează un PIN nou",
  "Az ujjlenyomat rendben. Add meg az új PIN-t.": "Amprenta este în regulă. Introdu PIN-ul nou.",
  "Az ujjlenyomatos feloldás most nem sikerült.": "Deblocarea cu amprenta nu a reușit acum.",
  "Hibás mentési kód.": "Cod de recuperare greșit.",
  "Az új PIN beállítása nem sikerült, a régi PIN maradt érvényben.": "PIN-ul nou nu a putut fi setat; PIN-ul vechi rămâne valabil.",
  "A dokumentumok CSAK ezen az eszközön tárolódnak, a PIN-edből képzett kulccsal titkosítva (AES-256) — a vészkártyával ellentétben ezt csak te nyithatod meg. A PIN-t nem tároljuk. Ha elfelejted, a mentési kóddal vagy ujjlenyomattal állíthatsz be újat; ezek nélkül a dokumentumok nem állíthatók vissza.": "Documentele sunt păstrate DOAR pe acest dispozitiv, criptate cu o cheie creată din PIN-ul tău (AES-256) — spre deosebire de cardul de urgență, doar tu le poți deschide. PIN-ul nu este păstrat. Dacă îl uiți, poți seta unul nou cu codul de recuperare sau cu amprenta; fără acestea documentele nu pot fi recuperate.",
  "A kódok titkosítva tárolódnak ezen az eszközön: a kulcs a PIN-edből készül (AES-256), magát a PIN-t nem tároljuk. Ha elfelejted a PIN-t, a mentési kóddal vagy ujjlenyomattal állíthatsz be újat; ezek nélkül a tartalom nem állítható vissza, ezért a seed-mondatról tarts papírmásolatot is. A teljes mentésbe ez a rész SOSEM kerül bele.": "Codurile sunt păstrate criptat pe acest dispozitiv: cheia este creată din PIN-ul tău (AES-256), PIN-ul în sine nu este păstrat. Dacă uiți PIN-ul, poți seta unul nou cu codul de recuperare sau cu amprenta; fără acestea conținutul nu poate fi recuperat, așa că păstrează și o copie pe hârtie a frazei seed. Această parte NU intră NICIODATĂ în copia de rezervă completă."
});
// ===== 2026-10-20 v43.327 (card 6b287cfb): wallet-creation acknowledgement (HU text approved by the owner 21:39) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Értem, hogy a tárcám kulcsait (PIN, helyreállító kód, seed phrase) csak én ismerem. Ha elveszítem őket, a tárcám tartalma végleg elveszhet, és a PrepperPapa nem tudja visszaállítani. A kulcsok biztonságos megőrzése az én felelősségem.": "Înțeleg că doar eu cunosc cheile portofelului meu (PIN, cod de recuperare, frază seed). Dacă le pierd, conținutul portofelului se poate pierde definitiv, iar PrepperPapa nu îl poate restaura. Păstrarea în siguranță a cheilor este responsabilitatea mea.",
  "Rendben": "În regulă",
  "A tárca létrehozásához jelöld be, hogy tudomásul vetted a fenti szöveget.": "Pentru a crea portofelul, bifează caseta ca să confirmi că ai luat la cunoștință textul de mai sus."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): "Fontos tudnivaló" notice (HU approved by the owner 21:47, TG 28515) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Fontos tudnivaló az Irattárcáról és a tárcáról": "Informație importantă despre Portofelul de documente și portofel",
  "Az adataid csak a te eszközödön vannak, titkosítva. A PrepperPapa nem fér hozzájuk, és nem tudja visszaállítani őket.": "Datele tale sunt doar pe dispozitivul tău, criptate. PrepperPapa nu are acces la ele și nu le poate restaura.",
  "A PIN-kódod, a helyreállító kódod és a tárcád kulcsai (seed phrase) kizárólag nálad vannak. Ha elveszíted, megosztod vagy illetéktelen megszerzi őket, az adataid és a tárcád tartalma végleg elveszhet.": "PIN-ul, codul de recuperare și cheile portofelului tău (fraza seed) sunt exclusiv la tine. Dacă le pierzi, le împarți sau le obține cineva neautorizat, datele tale și conținutul portofelului se pot pierde definitiv.",
  "Ha a helyreállító kódot e-mailben is kéred, a hozzáférésed csak olyan biztonságos, mint a postafiókod.": "Dacă ceri codul de recuperare și prin e-mail, accesul tău este doar atât de sigur cât căsuța ta de e-mail.",
  "A kulcsok, a kód, a postafiók és az eszköz biztonságos megőrzéséért, valamint a mentésekért te felelsz. A PrepperPapa nem felel az ebből eredő kárért, kivéve azt a felelősséget, amelyet jogszabály nem enged kizárni.": "Tu răspunzi de păstrarea în siguranță a cheilor, a codului, a căsuței de e-mail și a dispozitivului, precum și de copiile de rezervă. PrepperPapa nu răspunde pentru daunele rezultate de aici, cu excepția răspunderii pe care legea nu permite să fie exclusă.",
  "Elolvastam, értem.": "Am citit și am înțeles."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): Gíra paragraph (HU approved by the owner 21:58, TG 28530) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "A gíra a közösségen belüli elszámolás egysége, nem pénz és nem fizetőeszköz. A PrepperPapa nem váltja át pénzre, nem garantálja az értékét, és nem részese a tagok közötti ügyleteknek. A tagok közötti vitákat és elszámolást a felhasználók egymás közt rendezik. Az offline fizetésnél előfordulhat, hogy ugyanazt a gírát kétszer költik el; ennek kockázata a felhasználókat terheli.": "Gíra este o unitate de decontare în cadrul comunității, nu este bani și nici mijloc de plată. PrepperPapa nu o schimbă în bani, nu îi garantează valoarea și nu este parte la tranzacțiile dintre membri. Disputele și decontările dintre membri le rezolvă utilizatorii între ei. La plățile offline se poate întâmpla ca aceeași gíra să fie cheltuită de două ori; acest risc îl poartă utilizatorii."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): SOS fail-closed -- nothing goes out unencrypted =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Az SOS NEM ment el: a titkosítás nem sikerült, ezért nyíltan nem küldöm el. Életveszélyben hívd a 112-t! A vészsíp szól.": "SOS-ul NU a fost trimis: criptarea a eșuat, de aceea nu îl trimit necriptat. În caz de pericol de moarte, sună la 112! Fluierul de urgență sună.",
  "{n} helyre NEM ment el, mert a titkosítás nem sikerült. Életveszélyben hívd a 112-t!": "Către {n} destinație(i) NU a fost trimis, pentru că criptarea a eșuat. În caz de pericol de moarte, sună la 112!"
});
// ===== 2026-10-20 v43.329 (card 6b287cfb): room chat fail-closed -- nothing goes out unencrypted =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Az üzenet nem ment el: a titkosítás nem sikerült, vagy ezen a telefonon hiányzik a szoba kulcsa. Titkosítatlanul nem küldöm el. A szöveg megmaradt: lépj be újra a szobába (vagy kérj új meghívót a gazdától), és küldd újra.": "Mesajul NU a fost trimis: criptarea a eșuat sau pe acest telefon lipsește cheia camerei. Nu se trimite necriptat. Textul tău a rămas: intră din nou în cameră (sau cere gazdei o invitație nouă) și trimite-l din nou.",
  "A kép nem ment el: a titkosítás nem sikerült, vagy hiányzik a szoba kulcsa. Titkosítatlanul nem küldöm el. Lépj be újra a szobába.": "Imaginea NU a fost trimisă: criptarea a eșuat sau lipsește cheia camerei. Nu se trimite necriptată. Intră din nou în cameră."
});
// ===== 2026-10-20 v43.329 (card 6b287cfb): SOS / fall-detection notices (HU approved by the owner, TG 28555) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Ez nem segélyhívás. Az SOS-jelzés és az esés-érzékelés csak a te szobáidba, az ott lévő tagoknak küld értesítést. Nem hívja a mentőket, a rendőrséget vagy a tűzoltókat, és nem biztos, hogy bárki időben meglátja. Az esés-érzékelés nem pontos: téves riasztást adhat, és előfordulhat, hogy egy esést nem érzékel. Életveszélyben, balesetnél, rosszullétnél hívd a 112-t. A PrepperPapa nem segélyszolgálat, és nem garantálja, hogy a jelzés célba ér.": "Acesta nu este un apel de urgență. Semnalul SOS și detectarea căderii trimit o notificare doar în camerele tale, membrilor de acolo. Nu sună ambulanța, poliția sau pompierii și nu este sigur că cineva o va vedea la timp. Detectarea căderii nu este precisă: poate da o alarmă falsă și se poate întâmpla să nu detecteze o cădere. În pericol de moarte, la un accident sau dacă îți este rău, sună la 112. PrepperPapa nu este un serviciu de urgență și nu garantează că semnalul ajunge la destinație.",
  "Az SOS elküldi a pontos helyedet, és ha bejelölted, a Vészkártyád adatait (vércsoport, allergia, gyógyszer, betegség, kontakt) is az összes szobádnak.": "SOS-ul trimite locația ta exactă și, dacă ai bifat, și datele Cardului tău de urgență (grupa sanguină, alergie, medicament, boală, contact) în toate camerele tale.",
  "A Vészkártya adataimat is küldjétek az SOS-szal.": "Trimiteți și datele Cardului meu de urgență cu SOS-ul.",
  "Ez nem hívja a mentőket. Életveszélyben hívd a 112-t.": "Aceasta nu sună ambulanța. În pericol de moarte, sună la 112.",
  "%s SOS-jelzést küldött. Ha nem éred el, és veszélyben lehet, hívd a 112-t.": "%s a trimis un semnal SOS. Dacă nu reușești să dai de persoana respectivă și ar putea fi în pericol, sună la 112.",
  "(zárt kép — ehhez a szobához nincs meg a kulcs)": "(imagine criptată — lipsește cheia acestei camere)",
  "Fontos tudnivaló az SOS-ról és az esés-érzékelésről": "Informații importante despre SOS și detectarea căderii",
  "Nem kell megnyomnod: a telefon két percenként magától egyeztet. A gomb csak azonnali egyeztetésre való.": "Nu trebuie să-l apeși: telefonul sincronizează singur la fiecare două minute. Butonul e doar pentru o sincronizare imediată.",
  "Nincs elérhető Gíra-szoba: egy szoba gazdája kapcsolhatja be a szoba beállításaiban („Gíra-közösség”).": "Nu există nicio cameră Gíra disponibilă: proprietarul unei camere o poate activa în setările camerei („Comunitate Gíra”).",
  "Automatikus egyeztetés bekapcsolva, de most nincs elérhető Gíra-szoba": "Sincronizare automată pornită, dar acum nu este accesibilă nicio cameră Gíra",
  "utoljára próbálva": "ultima încercare",
  "Automatikus egyeztetés bekapcsolva": "Sincronizare automată pornită",
  "utoljára ellenőrizve": "ultima verificare",
  "Utolsó változás elküldve": "Ultima modificare trimisă",
  "Utolsó beérkezett könyv": "Ultima carte primită",
  "Fortiprep vagy konzerv": "Fortiprep sau conserve",
  "Mennyibe kerül a tartalék hosszú távon": "Cât costă rezerva pe termen lung",
  "Fortiprep vagy konzerv: mennyibe kerül a tartalék": "Fortiprep sau conserve: cât costă rezerva",
  "Ugyanannyi kalóriát hasonlít össze ugyanarra az időszakra. Az árakat a saját boltod szerint átírhatod.": "Compară aceleași calorii pe aceeași perioadă. Poți modifica prețurile după magazinul tău.",
  "Hány fő": "Persoane",
  "Napi kalória fejenként (kcal)": "Calorii zilnice de persoană (kcal)",
  "Hány évig álljon a tartalék": "Câți ani să țină rezerva",
  "Egy csomag ára (Ft)": "Prețul unui pachet (HUF)",
  "Kalória egy csomagban (kcal)": "Calorii într-un pachet (kcal)",
  "Eltarthatóság (év)": "Termen de valabilitate (ani)",
  "Alapérték: 42 adagos (14 napos, egy fős) csomag a PP-2-2026 kóddal, 2026. augusztusi áron. A mostani gyártás minőségmegőrzési ideje 2050. november.": "Implicit: pachet de 42 de porții (14 zile, o persoană) cu codul PP-2-2026, preț din august 2026. Lotul actual expiră în noiembrie 2050.",
  "Egy doboz ára (Ft)": "Prețul unei conserve (HUF)",
  "Kalória egy dobozban (kcal)": "Calorii într-o conservă (kcal)",
  "A konzervnél azzal számol, hogy lejáratkor az egészet lecseréled. Ha rotálva megeszed, a csere nem veszteség, de figyelni kell rá.": "La conserve presupune că înlocuiești totul la expirare. Dacă le consumi prin rotație, înlocuirea nu e o pierdere, dar trebuie urmărită.",
  "A FortiPrep 14 napos csomagja a PP-2-2026 kóddal, kedvezménnyel:": "Pachetul de 14 zile FortiPrep cu codul PP-2-2026, cu reducere:",
  "Megnézem a FortiPrep oldalán": "Vezi pe site-ul FortiPrep",
  "Minden mezőbe nullánál nagyobb számot írj.": "Scrie în fiecare câmp un număr mai mare decât zero.",
  "Ekkora értékkel nem számol.": "Nu calculează cu valori atât de mari.",
  "Erre az időszakra a Fortiprep az olcsóbb.": "Pentru această perioadă Fortiprep este mai ieftin.",
  "Erre az időszakra a konzerv az olcsóbb.": "Pentru această perioadă conservele sunt mai ieftine.",
  "Erre az időszakra a kettő ugyanannyiba kerül.": "Pentru această perioadă ambele costă la fel.",
  "Különbség": "Diferență",
  "Szükséges kalória (kcal)": "Calorii necesare (kcal)",
  "Csomag": "Pachete",
  "Egyszeri vásárlás": "Cumpărare unică",
  "Ezer kalória ára": "Preț pe 1000 kcal",
  "Vásárlás a teljes időszakra": "Cumpărări pe întreaga perioadă",
  "Évente": "Pe an",
  "Doboz": "Conserve (bucăți)",
  "FortiPrep 14 napos csomag, 15% kedvezménnyel": "Pachet FortiPrep de 14 zile, 15% reducere",
  "Kuponkód": "Cod de cupon",
  "Másol": "Copiază",
  "A gomb mögötti link magától érvényesíti a kódot a kosárban.": "Linkul din spatele butonului aplică automat codul în coș.",
  "Megveszem kedvezménnyel": "Cumpăr cu reducere",
  // Biblia konyvszin-sema (2026-10-25, kartya 6b4458db)
  "Könyvszínek": "Culorile cărților",
  "Új": "Nou",
  "Régi": "Vechi",
  "Minden könyvcsoport saját színt kap, az Ószövetségben és az Újszövetségben is.": "Fiecare grup de cărți are culoarea sa, atât în Vechiul, cât și în Noul Testament.",
  "A korábbi zöld árnyalatok: az Újszövetség is az Ószövetség színeit kapja.": "Nuanțele verzi de dinainte: Noul Testament primește și el culorile Vechiului Testament.",
  // Biblia terkep: helyleiras (2026-10-25, kartya 6b4458db)
  "biztos": "sigură",
  "valószínű": "probabilă",
  "lehetséges": "posibilă",
  "Mai azonosítás": "Identificare actuală",
  "Megjegyzés (OpenBible, angolul)": "Notă (OpenBible, în engleză)",
  "Más nevek (angol fordításokban)": "Alte nume (în traduceri engleze)",
  "További versek": "Alte versete"
});
// ===== 2026-10-25 v43.355: camera Morse follows the tempo (#65); Noah memory lines from about 8 GB (#52) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Indítsd, és irányítsd a kamerát egy Morzét villogó fényre (pl. egy másik telefon vakuja). A háttér legyen sötét, a fény a kép KÖZEPÉN. A fény-küszöb magától hangolódik; a \"Fényerő\" sáv és a lámpa mutatja, mit lát. A vétel magától követi a villogás tempóját, és a \"Vétel sebesség\" csúszkát is odaállítja; kézzel is állíthatod.": "Pornește și îndreaptă camera spre o lumină care clipește în Morse (de ex. blițul altui telefon). Fundalul să fie întunecat, lumina în CENTRUL imaginii. Pragul de lumină se reglează singur; bara \"Luminozitate\" și lampa arată ce vede. Recepția urmează singură ritmul clipirii și mută acolo și cursorul \"Viteză recepție\"; îl poți regla și manual.",
 "A nyelvi modell válasz közben kb. 3 GB memóriát használ, ezért Noah legalább 5,5 GB jelentett memóriát kér, ami kb. 8 GB-os telefonnak felel meg. Kisebb telefonon a rendszer válasz közben leállítaná az appot, ezért itt Noah nem használható.": "În timp ce răspunde, modelul de limbaj folosește aproximativ 3 GB de memorie, de aceea Noah cere cel puțin 5,5 GB de memorie raportată, ceea ce corespunde unui telefon de aproximativ 8 GB. Pe un telefon mai mic sistemul ar opri aplicația în timpul răspunsului, de aceea aici Noah nu poate fi folosit.",
 "A telefon memóriáját nem sikerült lekérdezni.": "Memoria telefonului nu a putut fi citită.",
 "A telefon által jelentett memória: {jel} GB, ez kb. {nev} GB-os telefon (a rendszer a névleges memória kb. 90%-át jelenti).": "Memoria raportată de telefon: {jel} GB, adică un telefon de aproximativ {nev} GB (sistemul raportează aproximativ 90% din memoria nominală).",
 "Ebbe a telefonba mindkét modell belefér (E2B és E4B).": "Pe acest telefon încap ambele modele (E2B și E4B).",
 "Ebbe a telefonba az E2B modell fér bele. Az E4B nem, mert ahhoz legalább {kapu} GB jelentett memória kell.": "Pe acest telefon încape modelul E2B. E4B nu, pentru că are nevoie de cel puțin {kapu} GB de memorie raportată.",
 "Ebbe a telefonba egyik modell sem fér bele.": "Pe acest telefon nu încape niciun model.",
 "Noah kb. 8 GB-os telefontól fut (a telefon névleges memóriája), a nagyobb E4B modell kb. 10 GB-ostól.": "Noah rulează de la un telefon de aproximativ 8 GB (memoria nominală a telefonului), modelul mai mare E4B de la aproximativ 10 GB.",
 "A telefon {jel} GB memóriát jelent, ez kb. {nev} GB-os telefon.": "Telefonul raportează {jel} GB de memorie, adică un telefon de aproximativ {nev} GB.",
 "Ez a telefon: {modell}.": "Acest telefon: {modell}.",
 "Szabad hely: {hely}.": "Spațiu liber: {hely}.",
 "Ajánlott: {modell}.": "Recomandat: {modell}.",
 "nem választható: legalább {ajanlott} GB-os telefon kell": "indisponibil: e nevoie de un telefon de cel puțin {ajanlott} GB",
 "ez kb. {nev} GB-os": "acesta are aproximativ {nev} GB",
 "Ajánlott memória: legalább {ajanlott} GB-os telefon": "Memorie recomandată: un telefon de cel puțin {ajanlott} GB",
 "ez a telefon {jel} GB-ot jelent, kb. {nev} GB-os": "acest telefon raportează {jel} GB, aproximativ {nev} GB",
 "ezért ez a modell itt nem választható": "de aceea acest model nu poate fi ales aici",
 "ennek a telefonnak a memóriáját nem sikerült lekérdezni": "memoria acestui telefon nu a putut fi citită",
 "Processzor:": "Procesor:",
 "kb. 8 GB-os telefon kell": "e nevoie de un telefon de aproximativ 8 GB",
 "Ehhez Android 11 vagy újabb, kb. 8 GB-os (névleges memóriájú) telefon kell, és 6-8 GB szabad hely.": "Pentru aceasta e nevoie de un telefon cu Android 11 sau mai nou, aproximativ 8 GB de memorie (nominală) și 6-8 GB spațiu liber.",
  "Becslés a légnyomás-trendből (Zambretti-módszer), a félgömb és az évszak szerint igazítva. Szelet és felhőzetet nem lát, ezért csak tájékoztató.": "Estimare din tendința presiunii atmosferice (metoda Zambretti), ajustată după emisferă și anotimp. Nu vede vântul și norii, deci are doar rol orientativ.",
  "Magasság nélkül csak a trendet veszi figyelembe, a nyomás szintjét nem.": "Fără altitudine ia în calcul doar tendința, nu nivelul presiunii.",
  "A trópusokon a légnyomás napi ingadozása elfedi a frontokat, ezért itt a becslés kevésbé megbízható.": "La tropice oscilația zilnică a presiunii ascunde fronturile, de aceea aici estimarea este mai puțin sigură.",
  "A sarkvidéken a módszer kevésbé megbízható.": "În regiunile polare metoda este mai puțin sigură.",
  "Becslés": "Estimare",
  "Napos, nyugodt idő": "Însorit, stabil",
  "Változékony idő": "Schimbător",
  "Eső valószínű": "Ploaie probabilă",
  "Vihar, sok eső": "Furtună, multă ploaie",
  "Gyorsan emelkedik": "Crește rapid",
  "Lassan emelkedik": "Crește lent",
  "Állandó": "Constantă",
  "Lassan süllyed": "Scade lent",
  "Gyorsan süllyed": "Scade rapid"
});
// Vercsoport calculator (2026-10-25, card 6b4458db): the red-cell table of tudastar article 3.6
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Vércsoport": "Grupa sanguină",
 "Kinek adhatsz vért, és kitől kaphatsz": "Cui poți da sânge și de la cine poți primi",
 "Vércsoport: kinek adhatsz, kitől kaphatsz": "Grupa sanguină: cui poți da, de la cine poți primi",
 "Vérátömlesztést csak egészségügyi személyzet végez, vércsoport-meghatározás és keresztpróba után.": "Transfuzia de sânge o face doar personalul medical, după determinarea grupei sanguine și proba de compatibilitate.",
 "Terepen vért adni vagy kapni nem szabad. Ezt nem lehet rögtönözni.": "Pe teren nu ai voie să dai sau să primești sânge. Asta nu se poate improviza.",
 "A kalkulátor tájékoztató: arra való, hogy értsd a szabályt, nem arra, hogy terepen dönts belőle.": "Calculatorul este informativ: te ajută să înțelegi regula, nu să decizi pe baza lui pe teren.",
 "A te vércsoportod": "Grupa ta sanguină",
 "Válaszd ki": "Alege",
 "Mutasd": "Arată",
 "Források: Magyar Vöröskereszt, Ausztrál Vöröskereszt (Lifeblood), Amerikai Vöröskereszt.": "Surse: Crucea Roșie Maghiară, Crucea Roșie Australiană (Lifeblood), Crucea Roșie Americană.",
 "Válaszd ki a vércsoportodat.": "Alege-ți grupa sanguină.",
 "Kinek adhatsz vörösvérsejtet": "Cui poți da globule roșii",
 "Kitől kaphatsz vörösvérsejtet": "De la cine poți primi globule roșii",
 "Mind a nyolc vércsoportnak": "Tuturor celor opt grupe sanguine",
 "Mind a nyolc vércsoporttól": "De la toate cele opt grupe sanguine",
 "A 0 Rh-negatív vörösvérsejt bárkinek adható, ezért hívják univerzális vörösvérsejt-adónak.": "Globulele roșii 0 Rh negativ pot fi date oricui, de aceea grupa 0 Rh negativ se numește donator universal de globule roșii.",
 "A plazmánál a szabály megfordul: az AB vércsoportú plazma bárkinek adható, a 0 vércsoportú csak 0 vércsoportúnak.": "La plasmă regula se inversează: plasma AB poate fi dată oricui, plasma 0 doar grupei 0.",
 "Ez tájékoztató, nem döntési alap.": "Este informativ, nu o bază de decizie.",
 "Hogy egy beteg milyen vért kap, azt vércsoport-meghatározás és keresztpróba után az ellátó orvos dönti el.": "Ce sânge primește un pacient decide medicul curant, după determinarea grupei și proba de compatibilitate.",
 "0 Rh-negatív": "0 Rh negativ",
 "0 Rh-pozitív": "0 Rh pozitiv",
 "A Rh-negatív": "A Rh negativ",
 "A Rh-pozitív": "A Rh pozitiv",
 "B Rh-negatív": "B Rh negativ",
 "B Rh-pozitív": "B Rh pozitiv",
 "AB Rh-negatív": "AB Rh negativ",
 "AB Rh-pozitív": "AB Rh pozitiv"
});
// Bible package by default (2026-10-25, card 6b4458db): notes and apocrypha download with the Bible, settings keep display switches
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Ahol egy vershez jegyzet tartozik, egy kis jel áll mellette; rákoppintva megnyílik. A jegyzetek a Bibliával együtt töltődnek le, és internet nélkül is megvannak.": "Unde un verset are o notă, lângă el apare un mic semn; atinge-l ca să o deschizi. Notele se descarcă împreună cu Biblia și sunt disponibile și fără internet.",
 "A Bibliával együtt töltődik le": "Se descarcă odată cu Biblia",
 "Apokrif könyvek megjelenítése": "Afișează cărțile apocrife"
});

// feedback sheet fields + one-press screenshot (card 6b4458db, v43.374)
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Típus": "Tip",
 "Modul": "Modul",
 "Leírás": "Descriere",
 "Képernyőkép": "Captură de ecran",
 "Képernyőkép erről a képernyőről": "Captură a acestui ecran",
 "Kép feltöltése": "Încarcă o imagine",
 "Kép eltávolítása": "Elimină imaginea",
 "Ezt a képet nem tudtam beolvasni.": "Nu am putut citi această imagine.",
 "Hiba": "Eroare",
 "Ötlet": "Idee",
 "Kérdés": "Întrebare",
 "Működik (kipróbáltam, rendben)": "Funcționează (am încercat, e în regulă)"
});

// ===== 2026-10-25 v43.375: Noah in every language, answer report, about/licence, morning summary, sun path (card 6b287cfb) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Válasz jelentése": "Raportează acest răspuns",
 "A jelentéssel a kérdésed és Noah válasza a PrepperPapa csapatához kerül, hogy kijavíthassuk. Mást nem küldünk el.": "Odată cu raportul, întrebarea ta și răspunsul lui Noah ajung la echipa PrepperPapa, ca să le putem corecta. Nu se trimite nimic altceva.",
 "Mi a gond a válasszal?": "Ce problemă are răspunsul?",
 "Sértő vagy bántó": "Ofensator sau jignitor",
 "Veszélyes vagy káros": "Periculos sau dăunător",
 "Téves vagy félrevezető": "Greșit sau înșelător",
 "Megjegyzés (nem kötelező)": "Comentariu (opțional)",
 "A jelentett válasz": "Răspunsul raportat",
 "A szerver most nem fogadta el a jelentést. Próbáld újra később.": "Serverul nu a acceptat acum raportul. Încearcă din nou mai târziu.",
 "Jelentve": "Raportat",
 "Köszönjük, a jelentést megkaptuk.": "Mulțumim, am primit raportul.",
 "Noah névjegye": "Despre Noah",
 "Noah a Gemma 4 nyílt nyelvi modellel működik (Gemma 4, Google, Apache 2.0 licenc).": "Noah funcționează cu modelul lingvistic deschis Gemma 4 (Gemma 4, Google, licență Apache 2.0).",
 "A Gemma 4 modellt a Google fejlesztette és adja ki az Apache License 2.0 licenc szerint. A licenc szövege:": "Modelul Gemma 4 a fost dezvoltat de Google și este publicat sub licența Apache License 2.0. Textul licenței:",
 "A PrepperPapa nem a Google terméke, és a Google nem támogatja vagy hagyja jóvá.": "PrepperPapa nu este un produs Google și nu este sponsorizat sau aprobat de Google.",
 "Noah válaszait gépi modell írja, és tévedhet. Ha egy válasz sértő, veszélyes vagy téves, a válasz alatti „Válasz jelentése” gombbal jelezd nekünk.": "Răspunsurile lui Noah sunt scrise de un model automat și pot fi greșite. Dacă un răspuns este ofensator, periculos sau greșit, anunță-ne cu butonul „Raportează acest răspuns” de sub el.",
 "Noah, az offline MI segéd: Gemma 4, Google, Apache 2.0 licenc.": "Noah, asistentul AI offline: Gemma 4, Google, licență Apache 2.0.",
 "A modell a Google Gemma 4 (Apache 2.0 licenc), a Google hivatalos LiteRT-tárából (Hugging Face) töltődik le. Wi-Fi ajánlott.": "Modelul este Google Gemma 4 (licență Apache 2.0) și se descarcă din depozitul oficial LiteRT al Google (Hugging Face). Se recomandă Wi-Fi.",
 "Reggeli összefoglaló": "Rezumatul de dimineață",
 "Minden reggel értesítés: a készlet hiányai, a készenléti szint, egy ige és egy felkészülési tanács. Ha megnyitod Noah-t, kártyaként is látod.": "În fiecare dimineață o notificare: lipsurile din stoc, nivelul de pregătire, un verset și un sfat de pregătire. Când deschizi Noah, îl vezi și ca un card.",
 "Reggeli összefoglaló bekapcsolva": "Rezumatul de dimineață activat",
 "Mutasd most": "Arată acum",
 "Értesítés engedélyezése": "Permite notificările",
 "Noah · Reggeli összefoglaló": "Noah · Rezumatul de dimineață",
 "Készenlét: {hely}, {szint} szint, {pct}%.": "Pregătire: {hely}, nivel {szint}, {pct}%.",
 "Hiányzik a következő szinthez: {lista}.": "Lipsește pentru nivelul următor: {lista}.",
 "Készenlét: még nem mérhető. Add meg a Háztartásban a helyszínt, kik érkeznek oda, és rendelj hozzá készletet.": "Pregătire: încă nu se poate măsura. În Gospodărie adaugă locul, cine ajunge acolo și atribuie-i stoc.",
 "Hiányzik: {lista}.": "Lipsește: {lista}.",
 "Ige ({hely}): {szoveg}": "Verset ({hely}): {szoveg}",
 "Tipp: {szoveg}": "Sfat: {szoveg}",
 "A reggeli összefoglaló a telefonra telepített Android appban működik.": "Rezumatul de dimineață funcționează în aplicația Android instalată pe telefon.",
 "Kikapcsolva.": "Dezactivat.",
 "Az értesítéshez engedély kell: koppints az „Értesítés engedélyezése” gombra.": "Notificarea are nevoie de permisiune: atinge „Permite notificările”.",
 "Beütemezve: a következő {n} reggel, {ido}-kor.": "Programat: următoarele {n} dimineți la ora {ido}.",
 "Minden reggel {ido}-kor.": "În fiecare dimineață la ora {ido}.",
 "A tipp a tudástárban": "Sfatul în baza de cunoștințe",
 "A nap pályájához tudni kell, hol vagy: nyomd meg lent a „Mérés a helyzetemre” gombot.": "Pentru traiectoria soarelui aplicația trebuie să știe unde ești: apasă mai jos „Măsurare la poziția mea”.",
 "A nap most a horizont alatt van: a pályáját nappal rajzolom a képre.": "Soarele este acum sub orizont: traiectoria lui se desenează pe imagine ziua.",
 "A nap pályájához iránytű- és dőlésadat kell.": "Traiectoria soarelui are nevoie de date de busolă și înclinare.",
 "Napkelte": "Răsărit",
 "delel": "amiază",
 "A pálya most nincs a képen: fordulj {fok}° felé.": "Traiectoria nu este acum pe imagine: întoarce-te spre {fok}°.",
 "A segéd beállításai": "Setările asistentului",
 "A segédhez először le kell tölteni a nyelvi modellt a telefonra (egyszer, Wi-Fi ajánlott).": "Pentru asistent descarcă întâi modelul lingvistic pe telefon (o singură dată, se recomandă Wi-Fi).",
 "A választ a telefonon futó gépi modell írja. Életveszélyben a forráscikket olvasd el, és hívd a 112-t. Az igét a Károli-fordításból az app illeszti be, nem a modell.": "Răspunsul îl scrie un model automat care rulează pe telefon. În pericol de moarte citește articolul sursă și sună la numărul de urgență. Versetele le inserează aplicația din traducerea ei a Bibliei, nu modelul.",
 "Amit még tudjon rólad. Kérdezzben is mondhatod: „jegyezd meg, hogy …”": "Ce ar mai trebui să știe despre tine. Poți spune și la Întreabă: „ține minte că …”",
 "Az első használatkor a telefon még egyszer ennyi helyet foglal a gyorsabb futáshoz, tehát a letöltés méretének kétszerese kell szabadon.": "La prima utilizare telefonul mai ocupă o dată același spațiu pentru o rulare mai rapidă, deci trebuie să fie liber dublul dimensiunii descărcării.",
 "Csak ezen a telefonon marad, sehova nem küldjük el. Gépelés közben magától mentődik.": "Rămâne doar pe acest telefon și nu se trimite nicăieri. Se salvează singur în timp ce scrii.",
 "Hogyan tisztítsak vizet, ha nincs forraló?": "Cum purific apa dacă nu o pot fierbe?",
 "Hogyan tisztítsak vizet?": "Cum purific apa?",
 "Hol van megírva, hogy ne aggódjunk a holnapért?": "Unde scrie să nu ne îngrijorăm de ziua de mâine?",
 "Hol van megírva, hogy ne aggódjunk?": "Unde scrie să nu ne îngrijorăm?",
 "Károli-fordítás": "Traducerea Bibliei din aplicație",
 "Kérdezz a tudástárból, a Bibliából, vagy bármiről. Internet nélkül, a telefonon fut.": "Întreabă despre baza de cunoștințe, Biblie sau orice altceva. Rulează pe telefon, fără internet.",
 "Lakóhely, térség (pl. Gyömrő, Pest megye)": "Localitate, regiune (de ex. oraș, județ)",
 "Megszakítás": "Întrerupe",
 "Mit tudsz?": "Ce știi să faci?",
 "Modell letöltése": "Descarcă modelul",
 "Részletes válaszok": "Răspunsuri detaliate",
 "Rövid válaszok": "Răspunsuri scurte",
 "Rólam (a válaszokhoz)": "Despre mine (pentru răspunsuri)",
 "A Háztartás családtagjait is vegye figyelembe": "Ține cont și de membrii Gospodăriei",
 "Írj egy kérdést…": "Scrie o întrebare…",
 "Új beszélgetés": "Conversație nouă",
 "Még nincs letöltött modell.": "Încă nu există niciun model descărcat.",
 "Letöltve": "Descărcat",
 "A letöltés megszakítva.": "Descărcarea a fost întreruptă.",
 "Kész, a modell a telefonon van.": "Gata, modelul este pe telefon.",
 "Mentve, csak ezen a telefonon.": "Salvat, doar pe acest telefon.",
 "Törölve.": "Șters.",
 "{n} liter víz": "{n} litri de apă",
 "{n} kcal élelem": "{n} kcal de alimente",
 "{n} kWh hasznos fűtési energia": "{n} kWh de energie utilă de încălzire",
 "{fo} fő és {allat} állat, {nap} napra": "{fo} persoane și {allat} animale, pentru {nap} zile",
 "{fo} fő, {nap} napra": "{fo} persoane, pentru {nap} zile",
 "**{hely}**: nincs megadva, ki érkezik ide, ezért a készenléti szint nem számolható (Háztartás › Helyszínek › {hely}).": "**{hely}**: nu este setat cine ajunge aici, deci nivelul de pregătire nu se poate calcula (Gospodărie › Locuri › {hely}).",
 "**{hely}** ({keret}): ehhez a helyszínhez még nincs készlet rendelve, ezért a szint nem mérhető. A Készletnél a tétel Tárolási helyénél válaszd ki: {hely}.": "**{hely}** ({keret}): acestui loc încă nu i s-a atribuit stoc, deci nivelul nu se poate măsura. În Stoc, alege-l la Locul de depozitare al articolului: {hely}.",
 "**{hely}** ({keret}): van ide rendelt készlet, de se víz, se mérhető élelem, se fűtés nincs benne, ezért a szint nem számolható.": "**{hely}** ({keret}): aici este atribuit stoc, dar nu conține apă, alimente măsurabile sau încălzire, deci nivelul nu se poate calcula.",
 "**{hely}** ({keret}): **{szint}** készenléti szint, {pct}%.": "**{hely}** ({keret}): nivel de pregătire **{szint}**, {pct}%.",
 "élelem": "alimente",
 "fűtés": "încălzire",
 "jó": "bun",
 "gyenge": "slab",
 "teljes": "complet",
 "Az élelmiszereknél nincs megadva az energia (kcal), ezért az élelem nem mérhető.": "La alimente nu este setată energia (kcal), deci alimentele nu se pot măsura.",
 "A teljes (100%) készlethez hiányzik: {lista}.": "Pentru stocul complet (100%) lipsește: {lista}.",
 "A következő, {szint} szinthez (minden legalább {min}%) hiányzik: {lista}.": "Pentru nivelul următor, {szint} (totul cel puțin {min}%), lipsește: {lista}.",
 "Minden mért összetevő 100%.": "Fiecare componentă măsurată este la 100%.",
 "A Háztartásban még nincs helyszín, ezért a készenléti szint nem számolható. Vedd fel az otthonodat a Háztartás › Helyszínek alatt, és add meg, kik érkeznek oda és hány napra számolsz.": "În Gospodărie încă nu există niciun loc, deci nivelul de pregătire nu se poate calcula. Adaugă-ți casa la Gospodărie › Locuri și setează cine ajunge acolo și pentru câte zile planifici.",
 "A készlet üres: még egyetlen tételt sem vettél fel.": "Stocul este gol: încă nu ai adăugat niciun articol.",
 "A készleted üres: még egyetlen tételt sem vettél fel.": "Stocul tău este gol: încă nu ai adăugat niciun articol.",
 "A Mi hiányzik? listából ({db} tétel, az első 6):": "Din lista Ce lipsește? ({db} articole, primele 6):",
 "A Mi hiányzik? listából ({db} tétel):": "Din lista Ce lipsește? ({db} articole):",
 "tag": "membru",
 "{n} éves": "{n} ani",
 "{db} db": "{db} buc.",
 "lejár:": "expiră:",
 "A Háztartásban még nincs helyszín. A Háztartás › Helyszínek alatt veheted fel.": "În Gospodărie încă nu există niciun loc. Îl poți adăuga la Gospodărie › Locuri.",
 "Helyszíneid ({db}):": "Locurile tale ({db}):",
 "{n} fő": "{n} persoane",
 "{n} állat": "{n} animale",
 "{n} nap": "{n} zile",
 "A Háztartásban nincs háziállat felvéve.": "În Gospodărie nu este adăugat niciun animal de companie.",
 "Háziállataid ({db}):": "Animalele tale de companie ({db}):",
 "állat": "animal",
 "A Háztartásban még nincs családtag felvéve. A Háztartás › Családtagok alatt veheted fel őket.": "În Gospodărie încă nu este adăugat niciun membru al familiei. Îi poți adăuga la Gospodărie › Membrii familiei.",
 "A háztartásod ({db} fő):": "Gospodăria ta ({db} persoane):",
 "A Háztartásban nincs családtag felvéve.": "În Gospodărie nu este adăugat niciun membru al familiei.",
 "Háziállat:": "Animal de companie:",
 "Nincs mentett pontod a térképen.": "Nu ai niciun punct salvat pe hartă.",
 "Mentett pontjaid ({db}):": "Punctele tale salvate ({db}):",
 "A készletben ({db} tétel):": "În stoc ({db} articole):",
 "… és még {n}": "… și încă {n}",
 "Ilyen tétel nincs a készletedben. (A készletben {db} tétel van.)": "Nu există un astfel de articol în stocul tău. (Stocul are {db} articole.)",
 "A készletedben {db} tétel van, összesen {ossz} darab. Kategóriánként:": "Stocul tău are {db} articole, în total {ossz} bucăți. Pe categorii:",
 "{t} tétel, {db} db": "{t} articole, {db} buc.",
 "{nap} napos túra hátizsákkal": "o drumeție de {nap} zile cu rucsacul",
 "{nap} napos út autóval": "o călătorie de {nap} zile cu mașina",
 "{nap} napos út": "o călătorie de {nap} zile",
 "A Háztartásban még nincs családtag, ezért nem tudom kijelölni, kik mennek. A Mit vigyek? ablakot megnyitom, a napokat beállítottam ({nap}); a résztvevőket a Háztartás › Családtagok alatt vedd fel, utána a lista kiszámolja, mi kell.": "În Gospodărie încă nu există niciun membru al familiei, deci nu pot alege cine merge. Deschid fereastra Ce iau? cu zilele setate ({nap}); adaugă participanții la Gospodărie › Membrii familiei, apoi lista calculează ce trebuie.",
 "Összeállítottam: {fej}, {fo} fő és {allat} állat ({nevek}). Megnyitom a Mit vigyek? ablakban, kitöltve; a listát ott látod és pipálhatod.": "Am alcătuit: {fej}, {fo} persoane și {allat} animale ({nevek}). Îl deschid completat în fereastra Ce iau?; acolo vezi lista și o poți bifa.",
 "Összeállítottam: {fej}, {fo} fő ({nevek}). Megnyitom a Mit vigyek? ablakban, kitöltve; a listát ott látod és pipálhatod.": "Am alcătuit: {fej}, {fo} persoane ({nevek}). Îl deschid completat în fereastra Ce iau?; acolo vezi lista și o poți bifa.",
 "A Háztartásban csak {ossz} fő van, őket jelöltem ki. A hiányzó {hiany} főt vedd fel a Háztartásnál, hogy a lista velük is számoljon.": "În Gospodărie sunt doar {ossz} persoane, pe ele le-am ales. Adaugă cele {hiany} persoane lipsă în Gospodărie, ca lista să le ia în calcul.",
 "A napok számát nem mondtad, {nap} nappal számoltam.": "Nu ai spus numărul de zile, am calculat cu {nap} zile.",
 "Hová tervezzem az útvonalat? Írd meg a cél nevét (település, turistapont, saját pont vagy helyszín), például: „Tervezd meg az útvonalat Dobogókőre.”": "Unde să planific traseul? Scrie numele destinației (localitate, punct turistic, punct salvat sau loc).",
 "Nem találom ezt a helyet: „{cel}”. Sem a saját pontjaid, sem a helyszíneid, sem a letöltött turistapontok, sem a települések között nincs ilyen nevű. Útvonalat fejből nem írok le; ha máshogy hívják, írd meg pontosabban, vagy a térképen egy pont buborékán válaszd az „Útvonal ide”-t.": "Nu găsesc acest loc: „{cel}”. Nu există acest nume printre punctele tale salvate, locurile tale, punctele turistice descărcate sau localități. Nu descriu niciodată un traseu din memorie; dacă se numește altfel, scrie mai precis sau pe hartă alege „Traseu până aici” în balonul unui punct.",
 "Nem tudom, hol vagy (nincs GPS-helyzet), ezért a távolságot nem tudom megmondani.": "Nu știu unde ești (fără poziție GPS), deci nu pot spune distanța.",
 "légvonalban {km} km, {egtaj} felé ({fok}°), {honnan} alapján.": "{km} km în linie dreaptă, spre {egtaj} ({fok}°), pe baza: {honnan}.",
 "észak": "nord",
 "északkelet": "nord-est",
 "kelet": "est",
 "délkelet": "sud-est",
 "dél": "sud",
 "délnyugat": "sud-vest",
 "nyugat": "vest",
 "északnyugat": "nord-vest",
 "a mostani helyzeted": "poziția ta actuală",
 "az otthonod helye": "locația casei tale",
 "a térkép utolsó nézete": "ultima vizualizare a hărții",
 "egy mentett pontod": "unul dintre punctele tale salvate",
 "saját pont": "punct propriu",
 "község": "comună",
 "településrész": "parte de localitate",
 "turistapont": "punct turistic",
 "Útvonal ide: {nev} ({al}). Megnyitom a térképen a tervezőt: a mostani helyzetedből, turistautakon számolja (legfeljebb kb. 80 km).": "Traseu până la: {nev} ({al}). Deschid planificatorul pe hartă: calculează din poziția ta actuală pe trasee turistice (până la aprox. 80 km).",
 "Több hely is illik erre: „{cel}”. Melyikre gondolsz? Koppints rá, vagy írd meg pontosabban.": "Mai multe locuri se potrivesc cu „{cel}”. La care te gândești? Atinge-l sau scrie mai precis.",
 "(… és még {n})": "(… și încă {n})",
 "lejárt {d} ({n} napja)": "expirat {d} (acum {n} zile)",
 "ma jár le ({d})": "expiră azi ({d})",
 "{d} ({n} nap múlva)": "{d} (peste {n} zile)",
 "… és még {n} tétel": "… și încă {n} articole",
 "Lejárt ({db} tétel):": "Expirate ({db} articole):",
 "Semmi nem járt le a készletedben.": "Nimic din stocul tău nu a expirat.",
 "{nap} napon belül lejár ({db} tétel):": "Expiră în {nap} zile ({db} articole):",
 "{nap} napon belül sem jár le semmi. A következő lejáratok:": "Nici în {nap} zile nu expiră nimic. Următoarele expirări:",
 "{db} tételnél nincs megadva lejárati dátum, ezeket nem tudom figyelni.": "{db} articole nu au data de expirare setată, pe acestea nu le pot urmări.",
 "Nem tudom, hol vagy: nincs GPS-helyzet, mentett pont vagy otthon-koordináta, ezért a napkeltét nem tudom kiszámolni.": "Nu știu unde ești: nu există poziție GPS, punct salvat sau coordonata casei, deci nu pot calcula răsăritul.",
 "{nap}: ezen a helyen ma nincs napkelte vagy napnyugta.": "{nap}: în acest loc azi nu există răsărit sau apus.",
 "{nap} ({honnan} alapján): napkelte {kelte}, napnyugta {nyugta}; világos még a polgári szürkület végéig, {szurk}. Hold: {hold}, {szaz}% megvilágítva. (Az app számolja, néhány perc pontossággal.)": "{nap} (pe baza: {honnan}): răsărit {kelte}, apus {nyugta}; lumină până la sfârșitul amurgului civil, {szurk}. Luna: {hold}, {szaz}% luminată. (Calculat de aplicație, cu o precizie de câteva minute.)",
 "újhold": "lună nouă",
 "növekvő sarló": "semilună crescătoare",
 "első negyed": "primul pătrar",
 "növekvő hold": "lună crescătoare",
 "fogyó hold": "lună descrescătoare",
 "utolsó negyed": "ultimul pătrar",
 "fogyó sarló": "semilună descrescătoare",
 "Mit jegyezzek meg?": "Ce să țin minte?",
 "Megjegyeztem: {mit}": "Am reținut: {mit}",
 "(A segéd beállításai › Rólam alatt látod és szerkesztheted.)": "(Îl vezi și îl editezi la Setările asistentului › Despre mine.)",
 "Megnyitás: Mi hiányzik?": "Deschide: Ce lipsește?",
 "Megnyitás: Mit vigyek?": "Deschide: Ce iau?",
 "Útvonal a térképen: {nev}": "Traseu pe hartă: {nev}",
 "Melyik turistautat nyissam meg?": "Ce traseu turistic să deschid?",
 "{nev}: megnyitom a térképen.": "{nev}: îl deschid pe hartă.",
 "Itt vagyok. Miben segíthetek?": "Sunt aici. Cu ce te pot ajuta?",
 "Erről offline nem tudok megbízhatót mondani: sem a tudástár, sem a Biblia nem ír róla, és kitalálni nem fogok.": "Despre asta nu pot spune nimic sigur offline: nici baza de cunoștințe, nici Biblia nu scriu despre asta, iar eu nu voi inventa.",
 "Alaposabban is kerestem, de a Bibliában ({biblia}) erre nem találtam helyet: „{q}”.": "Am căutat și mai temeinic, dar nu am găsit niciun loc în Biblie ({biblia}) pentru asta: „{q}”.",
 "A Bibliában ({biblia}) erre nem találtam helyet: „{q}”.": "Nu am găsit niciun loc în Biblie ({biblia}) pentru asta: „{q}”.",
 "Szó szerint nem így áll, de talán erre gondolsz:": "Cuvânt cu cuvânt nu scrie așa, dar poate te gândești la asta:",
 "Ez csak a telefonra telepített appban működik.": "Asta funcționează doar în aplicația instalată pe telefon.",
 "{nev} gondolkodik…": "{nev} se gândește…",
 "Nem érhető el:": "Indisponibil:",
 "Előbb töltsd le a modellt: a fogaskerék alatt, „Modell letöltése”.": "Mai întâi descarcă modelul: sub rotiță, „Descarcă modelul”.",
 "A modell betöltése (első alkalommal 10-60 másodperc)…": "Se încarcă modelul (prima dată 10-60 de secunde)…",
 "Nincs elég szabad hely a telefonon a modell első betöltéséhez (a letöltés méretének megfelelő hely kell).": "Nu este suficient spațiu liber pe telefon pentru prima încărcare a modelului (e nevoie de spațiu cât dimensiunea descărcării).",
 "Hiba:": "Eroare:",
 "A Bibliában itt van megírva (elöl az eredeti hely, utána, ahol idézik):": "În Biblie este scris aici (întâi locul original, apoi unde este citat):",
 "A gép {n} nem létező vagy hibás igehelyet írt, ezeket kivettük.": "Mașina a scris {n} referințe biblice inexistente sau greșite; le-am eliminat.",
 "Alaposabban kerestem.": "Am căutat mai temeinic.",
 "A Bibliában ({biblia}), talán erre gondolsz:": "În Biblie ({biblia}), poate te gândești la asta:",
 "A Bibliában ({biblia})": "În Biblie ({biblia})",
 "Forrás a tudástárból": "Sursă din baza de cunoștințe",
 "Erről a prémium tudástár is ír: {lista}. (Zárolt cikk szövege nem kerül a modell elé.)": "Despre asta scrie și baza de cunoștințe premium: {lista}. (Textul unui articol blocat nu ajunge la model.)",
 "Megnyitás a térképen: {nev}": "Deschide pe hartă: {nev}",
 "A válaszban említett hely": "Locul menționat în răspuns",
 "Szia, Noah vagyok, a PrepperPapa segédje.": "Salut, sunt Noah, asistentul PrepperPapa.",
 "Ezt tudom:": "Iată ce știu să fac:",
 "• **Készlet:** megmondom, milyen készenléti szinten áll egy helyszíned, és mi hiányzik a következő szinthez; a számokat az app számolja a készletedből, nem én találom ki. Például: „Milyen készenléti szinten áll az otthon?”, „Mi hiányzik?”": "• **Stoc:** îți spun la ce nivel de pregătire este unul dintre locurile tale și ce lipsește pentru nivelul următor; cifrele le calculează aplicația din stocul tău, nu le inventez eu. De exemplu: „Ce nivel de pregătire are casa?”, „Ce lipsește?”",
 "• **Út tervezése:** összerakok egy több napos utat a háztartásod tagjaiból, és kitöltve megnyitom a Mit vigyek? ablakban. Például: „Rakj össze egy 3 napos túrát 4 főre.”": "• **Planificarea unei călătorii:** alcătuiesc o călătorie de mai multe zile din membrii gospodăriei tale și o deschid completată în fereastra Ce iau?. De exemplu: „Alcătuiește o drumeție de 3 zile pentru 4 persoane.”",
 "• **Útvonal:** a térképen megtervezem az útvonalat a mostani helyzetedből; a célt a saját pontjaid, a helyszíneid, a turistapontok és a települések között keresem, és ha több is illik, megkérdezem, melyikre gondolsz. A turistautakat név szerint is megnyitom a térképen. Például: „Hogyan jutok el a hétvégi házhoz?”, „Mutasd meg a térképen az E4-et.”": "• **Traseu:** planific traseul pe hartă din poziția ta actuală; caut destinația printre punctele tale salvate, locurile tale, punctele turistice și localități, iar dacă se potrivesc mai multe, te întreb la care te gândești. Deschid pe hartă și traseele turistice după nume. De exemplu: „Cum ajung la casa de vacanță?”, „Arată-mi E4 pe hartă.”",
 "• **Tudástár:** a PrepperPapa tudástárából válaszolok, és megmutatom, melyik cikkből (rákoppintva megnyílik). Például: „Hogyan tisztítsak vizet, ha nincs forraló?”": "• **Baza de cunoștințe:** răspund din baza de cunoștințe PrepperPapa și îți arăt din ce articol (atinge-l ca să se deschidă). De exemplu: „Cum purific apa dacă nu o pot fierbe?”",
 "• **Megjegyzem,** amit magadról mondasz, és a beszélgetés utolsó öt kérdésére emlékszem. Például: „Jegyezd meg, hogy két kutyánk van.”": "• **Țin minte** ce îmi spui despre tine și ultimele cinci întrebări ale conversației. De exemplu: „Ține minte că avem doi câini.”",
 "• **Az app többi adata:** ismerem a háztartásodat (családtagok, háziállatok), a helyszíneidet és a mentett pontjaidat. A titkos kódokat, az Irattárcát és a Gíra kulcsait nem látom. Például: „Kik vannak a háztartásomban?”": "• **Celelalte date ale aplicației:** îți cunosc gospodăria (membrii familiei, animalele de companie), locurile și punctele salvate. Nu văd codurile secrete, Portofelul de documente sau cheile Gíra. De exemplu: „Cine este în gospodăria mea?”",
 "• Ha sem a tudástár, sem a Biblia nem ír a kérdésről, általános tudásból válaszolok, és ezt jelzem. Egészségről és veszélyről nem találgatok, útvonalat pedig fejből soha nem írok le: azt csak a térkép tervezője számolja.": "• Dacă nici baza de cunoștințe, nici Biblia nu scriu despre întrebare, răspund din cunoștințe generale și semnalez asta. Nu ghicesc despre sănătate și pericol, iar un traseu nu îl descriu niciodată din memorie: îl calculează doar planificatorul hărții.",
 "**Lelki segítség**": "**Ajutor sufletesc**",
 "Lelkileg is melletted vagyok: ha félsz, elfáradtál vagy gyászolsz, igét teszek a válasz mellé, és a Bibliában is keresek: megmutatom, hol van megírva valami, a helyre koppintva megnyílik. Az igeverset soha nem én írom: mindig a Károli-fordítás pontos szövegéből jön. Például: „Hol van megírva, hogy ne aggódjunk a holnapért?”": "Sunt alături de tine și sufletește: dacă ți-e frică, ești obosit sau în doliu, pun un verset lângă răspuns și caut și în Biblie: îți arăt unde scrie ceva, iar atingerea locului îl deschide. Versetul nu îl scriu niciodată eu: vine mereu din textul exact al traducerii Bibliei din aplicație. De exemplu: „Unde scrie să nu ne îngrijorăm de ziua de mâine?”",
 "Internet nélkül működöm, itt futok a telefonodon. Amit kérdezel, amit válaszolok, és amit magadról megadsz, a telefonon marad: semmit nem küldök el sehova, akkor sem, ha van internet, kivéve, ha egy válaszomat te magad jelented a „Válasz jelentése” gombbal: akkor a kérdés és a válasz szövege a PrepperPapa csapatához kerül. Internet csak a nyelvi modell egyszeri letöltéséhez kell, és a térképhez, ha egy területét még nem töltötted le.": "Funcționez fără internet, aici pe telefonul tău. Ce întrebi, ce răspund și ce îmi spui despre tine rămân pe telefon: nu trimit nimic nicăieri, nici când există internet, decât dacă tu raportezi unul dintre răspunsurile mele cu butonul „Raportează acest răspuns”: atunci întrebarea și răspunsul ajung la echipa PrepperPapa. Internetul trebuie doar pentru descărcarea unică a modelului lingvistic și pentru hartă, dacă nu ai descărcat încă o zonă.",
 "Tévedhetek; életveszélyben a 112 az első.": "Pot greși; în pericol de moarte, sună întâi la numărul de urgență."
});

// ===== 2026-10-26 v43.382 (task 6b287cfb-noah-nyelvek, Boss 2026-10-25 16:46): Noah settings sheet and measurement line =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "A telefonon: {lista}.": "Pe telefon: {lista}.",
 "kísérleti": "experimental",
 "Letöltés: {modell} {szaz}% ({kesz} / {ossz})": "Descărcare: {modell} {szaz}% ({kesz} / {ossz})",
 "A letöltés nem sikerült:": "Descărcarea nu a reușit:",
 "Nincs elég szabad hely a telefonon ehhez a modellhez.": "Nu este suficient spațiu liber pe telefon pentru acest model.",
 "Nem indult el:": "Nu a pornit:",
 "Törlöd, amit a Kérdezz rólad tud?": "Ștergi ce știe Întreabă despre tine?",
 "Törlöd a letöltött modellt? Újra le kell tölteni, ha később használnád.": "Ștergi modelul descărcat? Va trebui să-l descarci din nou dacă vrei să-l folosești mai târziu.",
 "A Háztartásból: {lista}": "Din gospodărie: {lista}",
 "A Háztartásban még nincs családtag.": "În gospodărie nu există încă niciun membru al familiei.",
 "ő a kérdező": "el întreabă",
 "betöltés {n} mp": "încărcare {n} s",
 "első szó {n} mp": "primul cuvânt {n} s",
 "{n} token/mp": "{n} tokeni/s",
 "memória csúcs {n} MB": "vârf de memorie {n} MB"
});

// Bible settings tidy-up (owner 2026-10-26 17:50): short labels, one display block, one voice list
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Színes": "Colorat",
 "Egyszínű": "Monocrom",
 "zöld árnyalatok": "nuanțe de verde",
 "Megjelenítés az igék mellett": "Afișate lângă versete",
 "Forrás: OpenBible.info (CC BY)": "Sursa: OpenBible.info (CC BY)",
 "A telefon hangja": "Vocea telefonului",
 "Gépi hang · nem foglal helyet": "Voce sintetică · nu ocupă spațiu",
 "Gépi felvétel · magyar": "Înregistrare sintetică · maghiară",
 "Professzionális · magyar": "Profesională · maghiară",
 "Professzionális · hamarosan": "Profesională · în curând",
 "Készül": "În pregătire",
 "Megszakítás": "Anulează",
 "Letöltés": "Descarcă",
 "Törlés": "Șterge",
 "Letöltés internet nélkül": "Descarcă pentru utilizare offline",
 "magyar": "maghiară",
 "Könyvenként": "Pe cărți",
 "Mértékegységek": "Unități de măsură"
});

// Bible alarms on their own screen (owner 2026-10-26 17:54): several alarms, each with its own plan
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Ébresztő törlése": "Șterge alarma",
 "Új ébresztő": "Alarmă nouă",
 "Válassz tervet": "Alege un plan",
 "Törlöd ezt az ébresztőt?": "Ștergi această alarmă?",
 "Az ébresztő egy olvasási terv napi olvasmányát olvassa fel. Előbb indíts el egy tervet.": "Alarma citește cu voce tare lectura zilei dintr-un plan de citire. Mai întâi pornește un plan."
});
// v43.389: foreign official fire bans in the fire-ban layer (card 4f0b74b5)
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Területek tilalommal vagy korlátozással": "Zone cu interdicție sau restricție",
 "Közelíts a területek megjelenítéséhez.": "Apropie harta pentru a vedea zonele.",
 "Tűzhasználati korlátozás": "Restricție privind focul",
 "Tűz miatti területlezárás": "Zonă închisă din cauza pericolului de incendiu",
 "Kockázat miatti törvényi korlátozás": "Restricție legală din cauza riscului de incendiu",
 "Terület": "Zonă",
 "Érvényes": "Valabil pentru",
 "Hatályos ettől": "În vigoare din",
 "Hatályos eddig": "În vigoare până la",
 "Ez veszélyszint, nem külön tilalmi rendelet: ezen a szinten a portugál jogszabály (DL 82/2021) korlátozza a tűzhasználatot.": "Acesta este un nivel de risc, nu un ordin de interdicție separat: la acest nivel legea portugheză (DL 82/2021) restricționează folosirea focului.",
 "A hivatalos forrás nem tartalmazza a helyi (községi) tilalmakat. Indulás előtt ellenőrizd a forrásnál.": "Sursa oficială nu include interdicțiile locale (comunale). Verifică la sursă înainte de plecare."
});

// ===== 2026-10-27 v43.392 (report + block): internet-room report sheet, block list, collapsed messages =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Illegális tartalom": "Conținut ilegal",
 "Zaklatás vagy fenyegetés": "Hărțuire sau amenințări",
 "Kéretlen üzenet (spam)": "Mesaj nesolicitat (spam)",
 "Bejelentetted ezt az üzenetet. Elrejtve, a csapat ellenőrzi.": "Ai raportat acest mesaj. Ascuns; echipa îl verifică.",
 "Letiltott felhasználó üzenete.": "Mesaj de la un utilizator blocat.",
 "Bejelentett üzenet, ellenőrzés alatt.": "Mesaj raportat, în curs de verificare.",
 "Üzenet bejelentése": "Raportează mesajul",
 "Felhasználó bejelentése": "Raportează utilizatorul",
 "A bejelentéssel az üzenet szövege (ahogy a te telefonod megfejtette), a küldője és a szoba neve a PrepperPapa csapatához kerül. Nálad az üzenet azonnal eltűnik, a többieknél ellenőrzésig összecsukva marad.": "Odată cu raportarea, textul mesajului (așa cum l-a decriptat telefonul tău), expeditorul și numele camerei ajung la echipa PrepperPapa. La tine mesajul dispare imediat, la ceilalți rămâne restrâns până la verificare.",
 "A bejelentéssel a felhasználó neve és a szoba neve a PrepperPapa csapatához kerül, hogy ellenőrizhessük.": "Odată cu raportarea, numele utilizatorului și numele camerei ajung la echipa PrepperPapa, ca să le putem verifica.",
 "Bejelentett": "Raportat",
 "Mi a gond?": "Care este problema?",
 "A felhasználót le is tiltom": "Blochez și acest utilizator",
 "Bejelentés": "Raportează",
 "Túl sok bejelentést küldtél rövid idő alatt. Próbáld újra később.": "Ai trimis prea multe raportări într-un timp scurt. Încearcă din nou mai târziu.",
 "Most nincs internetkapcsolat. A bejelentés nem ment el, próbáld újra.": "Acum nu există conexiune la internet. Raportarea nu a fost trimisă; încearcă din nou.",
 "A bejelentést most nem sikerült elküldeni. Próbáld újra később.": "Raportarea nu a putut fi trimisă acum. Încearcă din nou mai târziu.",
 "Köszönjük, a bejelentést megkaptuk. A csapat hamarosan ellenőrzi.": "Mulțumim, am primit raportarea. Echipa o va verifica în curând.",
 "Letiltod ezt a felhasználót?": "Blochezi acest utilizator?",
 "Az üzeneteit nálad elrejtjük, és privát üzenetet nem küldhet neked. A Beállításokban bármikor feloldhatod.": "Mesajele lui vor fi ascunse la tine și nu îți poate trimite mesaje private. Îl poți debloca oricând din Setări.",
 "Most nem sikerült, próbáld újra később.": "Acum nu a reușit; încearcă din nou mai târziu.",
 "Letiltva.": "Blocat.",
 "A letiltás feloldva.": "Deblocat.",
 "Nincs letiltott felhasználó.": "Niciun utilizator blocat.",
 "Letiltás feloldása": "Deblochează",
 "A küldő letiltása": "Blochează expeditorul",
 "Letiltás": "Blochează",
 "A privát üzenet nem ment el: ez a felhasználó nem fogad tőled privát üzenetet.": "Mesajul privat nu a fost trimis: acest utilizator nu acceptă mesaje private de la tine.",
 "Letiltott felhasználók": "Utilizatori blocați",
 "Az internetes szobákban letiltott felhasználók. Az üzeneteiket nálad elrejtjük, és privát üzenetet nem küldhetnek neked.": "Utilizatorii blocați în camerele de internet. Mesajele lor sunt ascunse la tine și nu îți pot trimite mesaje private."
});
// v43.393: map search -- coordinate result
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Mentés pontként": "Salvează ca punct",
 "ideiglenes jelölő a térképen": "marcaj temporar pe hartă"
});

// 2026-10-27: map point categories (marker picker, point list)
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Szállás": "Cazare",
 "Egészség": "Sănătate",
 "Táborhely": "Loc de tabără",
 "Alap": "Implicit",
 "jelölő": "marcaj"
});

// ===== GIRA: GYORS UT ERINTESSEL (owner 2026-10-27, TG 30121-30128): NFC / Bluetooth next to the QR =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Az NFC ki van kapcsolva, ezért most csak a QR-kód működik.":
    "NFC este oprit, așa că acum funcționează doar codul QR.",
  "NFC bekapcsolása":
    "Pornește NFC",
  "A Bluetooth ki van kapcsolva, ezért most csak a QR-kód működik.":
    "Bluetooth este oprit, așa că acum funcționează doar codul QR.",
  "Bluetooth bekapcsolása":
    "Pornește Bluetooth",
  "Gyorsabb: a másik telefonon nyomják meg a Beolvasás gombot, és tartsd össze a két telefont.":
    "Mai rapid: pe celălalt telefon apasă Scanare, apoi ține cele două telefoane lipite.",
  "Tartsd össze a két telefont.":
    "Ține cele două telefoane lipite.",
  "A két telefon túl hamar vált el. Tartsd össze őket újra.":
    "Telefoanele s-au despărțit prea devreme. Ține-le din nou lipite.",
  "A nyugta nem ért át: a másik telefon a QR-kódjáról olvassa be.":
    "Chitanța nu a ajuns: celălalt telefon o poate scana de pe codul QR.",
  "Az átvitel nem sikerült. Próbáld újra, vagy olvasd be a QR-kódot.":
    "Transferul a eșuat. Încearcă din nou sau scanează codul QR.",
  "Átadva. Tartsd még egy pillanatig össze, jön a nyugta.":
    "Predat. Mai ține-le lipite o clipă, vine chitanța.",
  "Átadva a másik telefonnak.":
    "Predat celuilalt telefon.",
  "Nem érkezett semmi. Nyomd meg újra a Beolvasás gombot.":
    "Nu a sosit nimic. Apasă din nou Scanare.",
  "Tartsd a fizetés QR-kódját a keretbe, vagy tartsd össze a két telefont.":
    "Ține codul QR al plății în cadru sau ține cele două telefoane lipite.",
  "Ha elkészült a fizetés, tartsd újra össze a két telefont.":
    "Când plata este gata, ține din nou cele două telefoane lipite."
});

// 2026-10-27: barometer -- no storm alarm in a vehicle (activity recognition), card 4f0b74b5
Object.assign(window.PP_FORD_SZOTAR.ro, {
 "Autóban ne riasszon": "Fără alarmă în vehicul",
 "A telefon mozgásfelismerése jelzi, ha járműben ülsz, és addig nem jön viharriasztás: vezetés közben a légnyomás az emelkedőktől és a szellőzéstől is változik. Ehhez a „Fizikai tevékenység” engedély kell. Helyadatot nem használ, és semmit nem küld el.": "Recunoașterea mișcării din telefon semnalează când ești într-un vehicul și până atunci nu vine alarmă de furtună: la condus, presiunea se schimbă și din cauza pantelor și a ventilației. Pentru asta este nevoie de permisiunea „Activitate fizică”. Nu folosește date de localizare și nu trimite nimic.",
 "Bekapcsolva — most járműben vagy, a riasztás szünetel": "Pornit — acum ești într-un vehicul, alarma este suspendată",
 "Bekapcsolva — járműben szünetel a riasztás": "Pornit — în vehicul alarma este suspendată",
 "Bekapcsolva. Kikapcsolni a telefon beállításaiban lehet: Alkalmazások > PrepperPapa > Engedélyek > Fizikai tevékenység.": "Pornit. Se poate opri din setările telefonului: Aplicații > PrepperPapa > Permisiuni > Activitate fizică.",
 "Kész: járműben nem jön viharriasztás.": "Gata: în vehicul nu vine alarmă de furtună.",
 "A telefon már nem kérdez rá. A beállításokban kapcsold be: Engedélyek > Fizikai tevékenység.": "Telefonul nu mai întreabă. Pornește din setări: Permisiuni > Activitate fizică.",
 "Nem adtál engedélyt. A riasztást ilyenkor a GPS-sebesség alapján szüneteltetem, ha van helyadat.": "Nu ai dat permisiunea. În acest caz alarma este suspendată pe baza vitezei GPS, dacă există date de localizare.",
 "Járműben vagy (a telefon mozgásfelismerése szerint): a riasztás szünetel, mert ilyenkor a nyomás az emelkedőtől és a szellőzéstől is változik.": "Ești într-un vehicul (după recunoașterea mișcării din telefon): alarma este suspendată, pentru că atunci presiunea se schimbă și din cauza pantelor și a ventilației.",
 "Az elmúlt órákban járműben is mért a telefon: a riasztást csak a kiszállás utáni mérésekből számolom.": "În ultimele ore telefonul a măsurat și în vehicul: alarma o calculez doar din măsurătorile de după coborâre."
});

// ===== GIRA: FIZETES ERINTESSEL (owner 2026-10-29): guided touch payment, re-delivery of a pending payment =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Fogadás érintéssel":
    "Primește prin atingere",
  "Fizetés érintéssel":
    "Plătește prin atingere",
  "Újra átadás":
    "Predă din nou",
  "Az összeg nulla vagy hiányzik.":
    "Suma este zero sau lipsește.",
  "Ez a fizetés már jóváírva volt nálad, másodszor nem írtam jóvá. A nyugtát újra kiadtam.":
    "Această plată era deja creditată; nu a fost creditată a doua oară. Chitanța a fost emisă din nou.",
  "A másik telefon érintéses fogadásra vár. Írd be az összeget, nyomd meg a Fizetés érintéssel gombot, és tartsátok össze a két telefont.":
    "Celălalt telefon așteaptă primirea prin atingere. Introdu suma, apasă Plătește prin atingere și țineți cele două telefoane lipite.",
  "A fizetés nem ért át: a két telefon túl hamar vált el. Tartsátok újra össze (a másik telefonon maradjon nyitva a Fogadás).":
    "Plata nu a ajuns: telefoanele au fost despărțite prea devreme. Țineți-le din nou lipite (pe celălalt telefon să rămână deschis Primește).",
  "Érintéssel nem vette át senki. A másik telefonon előbb nyomják meg a Beolvasás gombot, vagy olvassák be a QR-kódot.":
    "Nimeni nu l-a preluat prin atingere. Pe celălalt telefon apăsați întâi Scanare sau scanați codul QR.",
  "Érintésre vár. A másik telefonon legyen bekapcsolva a Fogadás érintéssel, és tartsátok össze a két telefont.":
    "Așteaptă atingerea. Pe celălalt telefon trebuie să fie pornit Primește prin atingere; țineți cele două telefoane lipite.",
  "Fizetés aláírva és átadva":
    "Plată semnată și predată",
  "Fizetés aláírása és átadása":
    "Semnarea și predarea plății",
  "Nyugta megérkezett. Kész.":
    "Chitanță primită. Gata.",
  "Nyugta visszaérkezése":
    "Chitanța revine",
  "Érintésre vár. A fizető telefonon a Fizetés érintéssel gombot nyomják meg, és tartsátok össze a két telefont.":
    "Așteaptă atingerea. Pe telefonul care plătește apăsați Plătește prin atingere și țineți cele două telefoane lipite.",
  "Azonosítód átadva, jön a fizetés…":
    "ID-ul tău a fost predat, vine plata…",
  "Megérkezett és jóváírva":
    "Sosită și creditată",
  "Fizetés megérkezése":
    "Sosirea plății",
  "Nyugta visszaküldve. Kész.":
    "Chitanță trimisă înapoi. Gata.",
  "Nyugta visszaküldése":
    "Trimiterea chitanței înapoi",
  "Még nem jött semmi. A másik telefonon előbb nyomják meg a Fogadás érintéssel gombot, aztán tartsátok össze a két telefont.":
    "Încă nimic. Pe celălalt telefon apăsați întâi Primește prin atingere, apoi țineți cele două telefoane lipite.",
  "Még nem jött semmi. A fizető telefonon előbb írják be az összeget, és nyomják meg a Fizetés érintéssel gombot, aztán tartsátok össze a két telefont.":
    "Încă nimic. Pe telefonul care plătește introduceți întâi suma și apăsați Plătește prin atingere, apoi țineți cele două telefoane lipite.",
  "A fizetés átment, a nyugta még nem jött meg. Tartsátok újra össze a két telefont, vagy a Beolvasás gombbal olvasd be a nyugta QR-kódját a másik telefonról.":
    "Plata a trecut, chitanța nu a sosit încă. Țineți din nou telefoanele lipite sau scanează cu „Scanare” codul QR al chitanței de pe celălalt telefon.",
  "A fizetés átment, a nyugta még nem jött meg. Tartsátok újra össze a két telefont.":
    "Plata a trecut, chitanța nu a sosit încă. Țineți din nou telefoanele lipite.",
  "A nyugta még nem jött vissza. Tartsátok újra össze a két telefont, vagy a másik telefon olvassa be a QR-kódot.":
    "Chitanța nu a revenit încă. Țineți din nou telefoanele lipite sau celălalt telefon să scaneze codul QR.",
  "A fizetés még nem jött meg. Tartsátok újra össze a két telefont.":
    "Plata nu a sosit încă. Țineți din nou telefoanele lipite.",
  "A nyugta még nem ment vissza. Tartsátok újra össze a két telefont, vagy a fizető olvassa be a nyugta QR-kódját.":
    "Chitanța nu a plecat încă înapoi. Țineți din nou telefoanele lipite sau cel care plătește să scaneze codul QR al chitanței.",
  "Lejárt az idő. Nyomd meg újra a Fogadás érintéssel gombot.":
    "Timpul a expirat. Apasă din nou Primește prin atingere.",
  "Lejárt az idő. A fizetés nálad „átadásra vár”: a Mozgások között az Újra átadás gombbal még átadhatod.":
    "Timpul a expirat. Plata „așteaptă predarea”: la Mișcări o mai poți preda cu Predă din nou.",
  "Lejárt az idő, nem jött létre kapcsolat. A másik telefonon előbb nyomják meg a Fogadás érintéssel gombot, aztán nyomd meg újra a Fizetés érintéssel gombot.":
    "Timpul a expirat, nu s-a făcut conexiunea. Pe celălalt telefon apăsați întâi Primește prin atingere, apoi apasă din nou Plătește prin atingere.",
  "Ha az érintés nem megy: a fizető olvassa be ezt a QR-kódot.":
    "Dacă atingerea nu merge: cel care plătește scanează acest cod QR.",
  "Az érintéses átadás most nem indult el. Olvassák be a QR-kódot.":
    "Predarea prin atingere nu a pornit. Scanați codul QR.",
  "Az érintéses olvasás nem indult el. Próbáld újra, vagy használd a QR-kódot.":
    "Citirea prin atingere nu a pornit. Încearcă din nou sau folosește codul QR.",
  "Ez nem egy másik telefon azonosítója.":
    "Acesta nu este ID-ul altui telefon.",
  "Ez a fizetés nem ennek a telefonnak szól, hanem neki:":
    "Această plată nu este pentru acest telefon, ci pentru:",
  "A fizetés nem készült el.":
    "Plata nu a fost creată.",
  "A fizetés nem volt érvényes.":
    "Plata nu a fost validă.",
  "Ugyanaz az aláírt fizetés, nem új: a másik telefonon nyomják meg a Fogadás érintéssel gombot, és tartsátok össze a két telefont, vagy olvassa be ezt a QR-kódot.":
    "Aceeași plată semnată, nu una nouă: pe celălalt telefon apăsați Primește prin atingere și țineți telefoanele lipite sau scanați acest cod QR.",
  "Ugyanaz az aláírt fizetés, nem új: a másik telefon olvassa be ezt a QR-kódot.":
    "Aceeași plată semnată, nu una nouă: celălalt telefon să scaneze acest cod QR."
});

// ===== GIRA: switch-on offer when the wallet opens (owner 2026-10-29 09:18) =====
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Az érintéses fizetéshez kapcsold be az NFC-t.":
    "Pornește NFC pentru a plăti prin atingere.",
  "Az érintéses fizetéshez kapcsold be a Bluetooth-t.":
    "Pornește Bluetooth pentru a plăti prin atingere."
});
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Érintés nélkül: címzett megadása (QR-kód, szobatárs, azonosító)":
    "Fără atingere: introdu destinatarul (cod QR, coleg de cameră, ID)"
});
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Kész: a fizetés megérkezett, a nyugtát a másik telefon átvette.":
    "Gata: plata a sosit, celălalt telefon a preluat chitanța."
});

// ===== 2026-10-29 pack list, compass bearing, SOS card stub, Bible download (Agnes: Hungarian in the EN UI) =====
// Keys with {slots} are templates (index.html ppForditKitolt): the slots are filled after the lookup.
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "A kijelölt személyek együtt kb. {keret} kg-ot bírnak, a lista {lista} kg. A víz a legnehezebb: fontold meg a vízszűrőt kanna helyett, vagy vidd rövidebb szakaszra.": "Persoanele selectate pot duce împreună cam {keret} kg, lista are {lista} kg. Apa este cea mai grea: ia în calcul un filtru de apă în loc de canistră sau o etapă mai scurtă.",
  "A készletedben most {kcal} van megadva, ami ennek az útnak a {sz}.": "În stocul tău sunt trecute acum {kcal}, adică {sz} din cât îi trebuie acestui drum.",
  "A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan.": "Cardul tău de urgență (grupă de sânge, alergie, medicamente, contact) apare aici rapid.",
  "A víz csak az indulásra elég: a teljes igény {teljes} liter lenne, ebből {viz} liter megy veletek. A többit útközben kell megszerezni és tisztítani.": "Apa ajunge doar pentru plecare: necesarul complet ar fi {teljes} litri, din care {viz} litri merg cu voi. Restul trebuie procurat și tratat pe drum.",
  "A {haz} a saját adatlapodon pipáld be: {jelolo}.": "La {haz}, pe propria ta fișă, bifează: {jelolo}.",
  "A {hianyzik} jelölésűek a beszerzési listád. Most {n} ilyen van. A vizet és az élelmet a készlet KATEGÓRIÁJÁBÓL ismeri fel, a többit a nevéből.": "Ce este marcat cu {hianyzik} este lista ta de cumpărături. Acum: {n}. Apa și mâncarea le recunoaște după CATEGORIA din stoc, restul după nume.",
  "Allergia-gyógyszer ({all})": "Medicament pentru alergie ({all})",
  "Az én adataim jelenjenek meg a vészkártyán": "Datele mele să apară pe cardul de urgență",
  "Belefér: a kijelöltek kb. {keret} kg-ot bírnak.": "Încape: cei selectați pot duce cam {keret} kg.",
  "Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez {tura} való, és a listán kiírom, mennyi hiányzik a teljes fejadaghoz.": "Ia în calcul doar ce poți duce: 1,5 litri de persoană. Asta este {tura}, iar lista arată cât lipsește până la rația completă.",
  "Csomaglista": "Listă de bagaje",
  "EZ TÖBB, MINT AMIT ELBÍR": "MAI MULT DECÂT POATE DUCE",
  "Ez nehezebb, mint amit el tudtok vinni.": "Este mai greu decât puteți duce.",
  "Ez {olt} kategóriájú ruházatot kíván. A készletedben nincs ilyen tétel — a készletnél ez egy kategória.": "Asta cere îmbrăcăminte din categoria {olt}. În stocul tău nu există un astfel de articol — în stoc aceasta este o categorie.",
  "Ez {olt} kategóriájú ruházatot kíván. A készletedben {n} ilyen tétel van.": "Asta cere îmbrăcăminte din categoria {olt}. Astfel de articole în stocul tău: {n}.",
  "Felvett irány: {fok} fok ({betu}). Visszafelé: {vfok} fok ({vbetu}). A zöld háromszög a felvett irányt mutatja.": "Direcție înregistrată: {fok}° ({betu}). Întoarcere: {vfok}° ({vbetu}). Triunghiul verde arată direcția înregistrată.",
  "Gyógyszer: {gy}": "Medicament: {gy}",
  "Hiányzik még kb. {kcal} kcal.": "Mai lipsesc cam {kcal} kcal.",
  "Háztartásban": "Gospodărie",
  "Nem sikerült: {ok}. Ehhez az egy lépéshez internet kell.": "Nu a reușit: {ok}. Pentru acest singur pas e nevoie de internet.",
  "Nincs iránytű-adat, ezért nincs mit felvenni.": "Nu există date de la busolă, deci nu e nimic de înregistrat.",
  "Nála: {ossz} kg (ebből {sajat} kg a sajátja)": "Duce: {ossz} kg (din care {sajat} kg ale sale)",
  "Nála: {ossz} kg (ebből {sajat} kg a sajátja, {kozos} kg a közösből)": "Duce: {ossz} kg (din care {sajat} kg ale sale și {kozos} kg din echipamentul comun)",
  "Sapka": "Căciulă",
  "Termosz meleg itallal": "Termos cu băutură caldă",
  "Vércsoport-kártya: {ver}": "Card cu grupa de sânge: {ver}",
  "Víz ({kg} kg testtömegre)": "Apă (pentru {kg} kg greutate corporală)",
  "Zokni": "Șosete",
  "amit viszünk; a teljes igény {l} l": "ce ducem; necesarul complet este {l} l",
  "belefér": "încape",
  "fejenként egy ({fo})": "câte unul ({fo})",
  "indulásra; a teljes igény {l} l lenne": "pentru plecare; necesarul complet ar fi {l} l",
  "megvan": "există",
  "személyre szóló ({tipus})": "personal ({tipus})",
  "teherbírása {kg} kg": "poate duce {kg} kg",
  "túrához": "pentru drumeție",
  "{kcal} kcal/nap × {nap}": "{kcal} kcal/zi × {nap}",
  "{kesz} / {ossz} bepakolva": "{kesz} / {ossz} împachetate",
  "{kg} kg, elosztva {fo} között: fejenként kb. {fej} kg": "{kg} kg, împărțite între {fo}: cam {fej} kg fiecare",
  "{l} liter víz": "{l} litri de apă",
  "{napra} valójában {teljes} liter kellene, ennyit viszont nem lehet elvinni. Hiányzik {hiany} liter, amit útközben kell megszerezni: vízszűrő, víztisztító tabletta, ismert vízvételi pont. Ezt a listán is nézd meg.": "De fapt ar trebui {teljes} litri {napra}, dar atât nu se poate duce. Lipsesc {hiany} litri, care trebuie procurați pe drum: filtru de apă, tablete de purificare, un punct de apă cunoscut. Verifică asta și pe listă.",
  "{nev}: be van írva a betegség ({b}), de nincs megadva gyógyszer. A Háztartás adatlapján pótolható.": "{nev}: este trecută o boală ({b}), dar niciun medicament. Se poate completa pe fișa din Gospodărie.",
  "{nev}: nincs megadva a testtömeg, 15 kg-mal számoltam. Az adatlapján javítható.": "{nev}: nu este dată greutatea corporală, am calculat cu 15 kg. Se poate corecta pe fișă.",
  "{n} tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz a kép.": "Articole fără valoare energetică (kcal/100 g): {n}. Nu sunt luate în calcul. Citită de pe ambalaj, imaginea va fi mai exactă.",
  "{n}%-a": "{n}%",
  "{viz} l/nap × {nap}": "{viz} l/zi × {nap}",
  "Összesen {viz} és {kcal} élelem. Becsült tömeg: {kg}.": "În total {viz} și {kcal} de mâncare. Greutate estimată: {kg}.",
  "ÉÉK": "NNE",
  "KÉK": "ENE",
  "KDK": "ESE",
  "DDK": "SSE",
  "DDNy": "SSV",
  "NyDNy": "VSV",
  "NyÉNy": "VNV",
  "ÉÉNy": "NNV"
});
// count patterns used by the pack list (`3 pár`, `5 napra`, `4 fő/állat` ...), same plural rules as above
(function () {
  const alak=(n,e,t,d)=>{if(n===1)return e;const r=n%100;return (n===0||(r>=1&&r<=19))?t:d;};
  window.PP_FORD_MINTAK.ro.push(
    { minta: /^(\d+) fő\/állat$/, csere: (_, n) => n + ' ' + alak(+n, 'persoană/animal', 'persoane/animale', 'de persoane/animale') },
    { minta: /^(\d+) napra$/, csere: (_, n) => 'pentru ' + n + ' ' + alak(+n, 'zi', 'zile', 'de zile') },
    { minta: /^(\d+) csomag$/, csere: (_, n) => n + ' ' + alak(+n, 'pachet', 'pachete', 'de pachete') },
    { minta: /^(\d+) szett$/, csere: (_, n) => n + ' ' + alak(+n, 'set', 'seturi', 'de seturi') },
    { minta: /^(\d+) pár$/, csere: (_, n) => n + ' ' + alak(+n, 'pereche', 'perechi', 'de perechi') }
  );
})();
// map locate button title (2026-10-29, written by mapKovetJel)
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Követés bekapcsolva — koppints a középre igazításhoz": "Urmărirea este pornită — atinge pentru centrare",
  "Hol vagyok (követés visszakapcsolása)": "Unde sunt (repornește urmărirea)",
  "Hol vagyok": "Unde sunt"
});
// Bible prayer timer, weekly reading plans, map route GPX button (2026-10-29, untranslated-text sweep)
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Ismétlés": "Repetare",
  "mp": "s",
  "GPX mentése": "Salvează GPX",
  "Teljes Biblia egy év alatt, heti bontásban": "Toată Biblia într-un an, pe săptămâni",
  "Kronologikus Biblia egy év alatt, heti bontásban": "Biblia cronologic într-un an, pe săptămâni",
  "A könyvek sorrendjében, hetente egy adag.": "În ordinea cărților, o porție pe săptămână.",
  "Az események időrendjében, hetente egy adag.": "În ordinea evenimentelor, o porție pe săptămână."
});
// Bible: original words on tap (Biblia premium, card cf02b3ee, 2026-10-29)
Object.assign(window.PP_FORD_SZOTAR.ro, {
  "Eredeti szó": "Cuvântul original",
  "Héber": "Ebraică",
  "Arámi": "Aramaică",
  "Görög": "Greacă",
  "Átírás": "Transliterare",
  "Strong-szám": "Număr Strong",
  "Jelentés itt": "Sensul aici",
  "Szótári alak": "Forma de dicționar",
  "Eredet": "Origine",
  "Meghatározás": "Definiție",
  "A KJV így fordítja": "KJV îl traduce prin",
  "Szótár: Strong (1894)": "Dicționar: Strong (1894)",
  "Nincs megbízható egyezés.": "Nicio potrivire sigură.",
  "Ennél a szónál a gépi szó-összekötés nem elég biztos, ezért nem mutatunk eredeti szót.": "Pentru acest cuvânt alinierea automată a cuvintelor nu este suficient de sigură, de aceea nu afișăm cuvântul original.",
  "Biblia prémium": "Biblia Premium",
  "A Biblia prémiumban egy szóra koppintva megjelenik az eredeti héber, arámi vagy görög szó, átírással, Strong-számmal és szótári jelentéssel. Biblia prémium kóddal feloldható.": "Cu Biblia Premium, atingând un cuvânt apare cuvântul original ebraic, aramaic sau grec, cu transliterare, număr Strong și sens de dicționar. Se deblochează cu un cod Biblia Premium.",
  "Az eredeti szavak betöltése…": "Se încarcă cuvintele originale…",
  "Az eredeti szavak most nem tölthetők be. Az első megnyitáshoz internetkapcsolat kell.": "Cuvintele originale nu pot fi încărcate acum. Prima deschidere necesită conexiune la internet.",
  "Forrás: STEP Bible (www.STEPBible.org), CC BY 4.0": "Sursa: STEP Bible (www.STEPBible.org), CC BY 4.0",
  "Szótár: Strong-féle héber és görög szótár (1894), közkincs. A szótár szövege angol nyelvű.": "Dicționar: dicționarul ebraic și grec al lui Strong (1894), domeniu public. Textul dicționarului este în engleză."
});
