// PrepperPapa -- UKRAN SZOVEGTAR (teljes felulet-forditas)
//
// Fonok kerese 2026-08-24 06:08: "Ha vegeztunk az angolral, mehet az ukran es az orosz."
//
// A SZERKEZET AZONOS AZ `en.js`-EVEL, es ez szandekos: a kulcs MAGA A MAGYAR SZoVEG, nem
// azonosito. Igy a harom szotar egymas melle teheto, es egy hianyzo sor azonnal latszik.
//
// **A NYELVVALASZToBA CSAK KESZ NYELV KERuLHET BE.** Amig ez a fajl nem teljes, az `uk` NEM
// szerepel a `PP_NYELVEK`-ben -- kulonben a felhasznalo egy FELIG forditott feluletet kapna,
// es pont ez volt az, amit Fonok 2026-08-23-an kifogasolt ("a nyelvvalaszto kicsit zavaro").
// Ugyanaz a kapu-logika, mint a tudastar angol valtozatanal.
//
// A LISTA FORRASA MERES: `node scripts/pp-i18n-forras.mjs --nyelv uk --json`
// es a bongeszos `pp-i18n-gyujtes.mjs`. MINDKETTo kell -- a modszert a
// `app-nyelvi-valtozat-hianypotlas` skill irja le.
window.PP_FORD_SZOTAR = window.PP_FORD_SZOTAR || {};
window.PP_FORD_SZOTAR.uk = {
  // ===== 2026-10-25 v43.352 (idea #63, card 6b4458db): native volume guard =====
  "A telefonos appban ezen a lapon a hangerő magától maximumra áll, és kilépéskor visszaáll a korábbira. A hang a telefon hangszóróján szól akkor is, ha fülhallgató vagy Bluetooth-eszköz csatlakozik.": "У застосунку на телефоні на цьому екрані гучність сама стає максимальною, а після виходу повертається до попередньої. Звук іде з динаміка телефона, навіть якщо підключено навушники чи Bluetooth-пристрій.",
  // ===== 2026-10-19 v43.313 (card 6b4458db) =====
  "(sérült üzenet — egy 2026. 10. 12. előtti szerverhiba levágta, nem állítható helyre)": "(пошкоджене повідомлення — обрізане помилкою сервера до 12.10.2026, відновити неможливо)",
  "Ezen a készüléken a böngésző nem támogatja a rezgést (iPhone-on a Safari nem tudja). A kapcsoló ezért nem aktív.": "Браузер цього пристрою не підтримує вібрацію (Safari на iPhone цього не вміє). Тому перемикач неактивний.",
  "Bejelentéseim": "Мої повідомлення",
  "Újdonságok": "Новини",
  "Facebook-csoport": "Група у Facebook",
  "Facebook-oldal": "Сторінка у Facebook",
  // ===== 2026-10-19: sugo-szovegek a kepernyokhoz igazitva (kartya eaaba276, Fonok 1a) =====
  "A gyűrű a jelen lévő típusok átlagát mutatja, a színe a leggyengébbet. A sávokon látod, melyik terület gyenge: egy alacsony érték az átlag mögött is ott lehet.": "Кільце показує середнє значення наявних типів, а його колір показує найслабший. На смугах видно, яка ділянка слабка: низьке значення може ховатися за середнім.",
  "Nyelv: az app felületének nyelve. A tartalom (tudástár, Biblia) egyelőre nem változik tőle; a Biblia fordítását a Biblia fejlécében választod.": "Мова: мова інтерфейсу застосунку. Вміст (база знань, Біблія) від цього поки не змінюється; переклад Біблії обирається в заголовку Біблії.",
  "Fény-SOS képernyővel: a kijelző villogtatja a jelet. Ez minden telefonon megy, akkor is, ha a vaku nem indul.": "Світловий SOS екраном: дисплей блимає сигналом. Це працює на будь-якому телефоні, навіть якщо спалах не вмикається.",
  "Esés után automatikus SOS: alapból ki van kapcsolva. Ha bekapcsolod, és a telefon nagy ütés után egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a Jól vagyok gombot, SOS üzenetet küld a helyzeteddel minden szobádba, és megszólal a vészsíp.": "Автоматичний SOS після падіння: типово вимкнений. Якщо ти його ввімкнеш і телефон після сильного удару хвилину не рухається, він голосно веде зворотний відлік. Якщо ти не натиснеш кнопку «Я в порядку», він надішле SOS з твоїм місцезнаходженням до всіх твоїх кімнат і ввімкне аварійний свисток.",
  "Export: a lista fájlba, például a családnak. A teljes készlet törlése (Készlet ürítése) a Beállítások > Adatkezelés alatt van; előtte exportálj.": "Експорт: список у файл, наприклад для родини. Видалення всіх запасів (Очистити запаси) є в Налаштування > Дані; спершу експортуй.",
  // ===== 2026-10-11 23:4x: teljes atnezes (bemutatkozas, visszajelzes, hianyzo feliratok) =====
  "Üdv Prepperek!": "Вітаю, препери!",
  "PrepperPapa vagyok, egy készülődő ember, aki mindenhez érteni szeret. Gyerekkorom óta vonz minden, ami hálózattól és rendszertől független, és az az érzés, amikor arra számíthatsz, ami a fejedben van tudás, és ami nálad van eszköz.": "Я PrepperPapa, людина, яка готується і любить у всьому розбиратися. Змалку мене приваблює все, що не залежить від мереж і системи, і те відчуття, коли можеш покластися на знання в голові та інструменти в руках.",
  "A prepperekről sokan hideg, bezárkózó embereket képzelnek el. Én azt hiszem, hogy a felkészülést nem a félelemnek kell vezetnie, hanem az önfeláldozó szeretetnek.": "Багато хто уявляє преперів холодними, замкненими людьми. Я вірю, що підготовкою має керувати не страх, а жертовна любов.",
  "Ezért álmodtam meg ezt az alkalmazást: hogy mindenkinek reménysége legyen a sötétségben, és a nehéz időkben valódi eszköz, valódi segítség legyen a kezében, akkor is, ha nincs áram és nincs térerő.": "Тому я замріяв цей застосунок: щоб кожен мав надію в темряві, а в важкі часи справжній інструмент, справжню допомогу в руках, навіть без електрики й зв’язку.",
  "Készülj, ne félj!": "Готуйся, не бійся!",
  "Erőt reménységet!": "Сили й надії!",
  "Hibát találtál, vagy ötleted van?": "Знайшли помилку чи маєте ідею?",
  "Írd meg, és ha kell, csatolj képet. Minden visszajelzést elolvasunk.": "Напишіть нам і за потреби додайте знімок. Ми читаємо кожне повідомлення.",
  "Visszajelzés küldése": "Надіслати відгук",
  "a sajátod, pl. +36 30 123 4567": "ваш власний, напр. +36 30 123 4567",
  "Küldetést kaptam: a tíz szűz példázatát, hogy fel kell készülni. Az eszesek éjfélkor nem tudtak a saját olajukból adni": "Я отримав місію: притчу про десять дів, що треба бути готовим. Опівночі мудрі не могли дати власної олії",
  "Máté 25,9": "Матвія 25:9",
  ", ezért a tudást időben kell átadni.": ", тож знання треба передавати вчасно.",
  "A csomagod felhasználó-korlátja betelt:": "Досягнуто ліміту користувачів вашого пакета:",
  "A csomagod termék-korlátja betelt:": "Досягнуто ліміту товарів вашого пакета:",
  "A felolvasás nem indult el: a telefonon nincs ehhez a nyelvhez felolvasó hang (Beállítások → Szövegfelolvasás).": "Читання не почалося: на телефоні немає голосу для цієї мови (Налаштування → Синтез мовлення).",
  "A kamerát nem sikerült elindítani. Adj rá engedélyt a telefon beállításaiban.": "Не вдалося запустити камеру. Дозвольте її в налаштуваннях телефона.",
  "A mentős beolvashatja.": "Медики можуть його відсканувати.",
  "A próba-csomag beállítva.": "Пробний пакет встановлено.",
  "Bővíts a Beállításokban, vagy törölj egy tagot.": "Розширте в налаштуваннях або видаліть учасника.",
  "Bővíts a Beállításokban, vagy törölj egy tételt.": "Розширте в налаштуваннях або видаліть позицію.",
  "Felhasználók": "Користувачі",
  "Fizetek": "Плачу",
  "Gyorsabb": "Швидше",
  "Hiányzik:": "Бракує:",
  "Lassabb": "Повільніше",
  "Megnézem térképen": "Показати на мапі",
  "Modulok": "Модулі",
  "Nincs internet: a telefon hangja olvas": "Немає інтернету: читає голос телефона",
  "Próba-mód kikapcsolva, a valódi feloldásod áll vissza.": "Пробний режим вимкнено, вашу справжню розблокованість відновлено.",
  "Szünet": "Пауза",
  "Termékek": "Товари",
  "Teszt-adatok betöltve: 3 fő, 1 háziállat, 5 helyszín (köztük autó és hétvégi ház),": "Тестові дані завантажено: 3 людини, 1 улюбленець, 5 місць (серед них авто та дача),",
  "Vissza az igéhez": "Назад до вірша",
  "Vészkártyák": "Екстрені картки",
  "adat frissítve a már felvett teszt-tagoknál": "дані оновлено в уже доданих тестових учасників",
  "egy sincs": "немає",
  "korlátlan": "без обмежень",
  "légvonalban": "по прямій",
  "légvonalban, szakaszonként összeadva": "по прямій, підсумовуючи за ділянками",
  "megálló": "зупинка",
  "mérés az elmúlt 48 órából. A telefon légnyomás-szenzora automatikusan méri; kézzel is bevihetsz értéket.": "вимірювань за останні 48 годин. Датчик тиску телефона вимірює автоматично; значення можна вводити й вручну.",
  "nincs ismert": "немає відомих",
  "nincs megadva": "не вказано",
  "válassz könyvet": "оберіть книгу",
  "összesen": "усього",
  "A többiek a „Szobák a hálón\" listában magától látják a szobát. Ha valakinél mégsem jelenik meg, ezt a címet írja be a „Csatlakozás más szobájához\" gombbal.": "Інші бачать кімнату автоматично в списку «Кімнати в мережі». Якщо в когось вона не з’явилася, хай введе цю адресу кнопкою «Приєднатися до чужої кімнати».",
  "Másik cím": "Інша адреса",
  "A szoba címe": "Адреса кімнати",
  "Vissza a saját szobámba": "Повернутися до своєї кімнати",
  "Fénykép": "Фото",
  "Jóváírva.": "Зараховано.",
  "küldött neked": "надіслав вам",
  "Gíra küldése neki": "Надіслати гіру",
  // ===== 2026-10-11 22:3x: gira-kozosseg a gazda dontese =====
  "A szoba gazdája Gíra-közösségnek jelölte: a telefonod magától részt vesz.": "Адміністратор кімнати позначив її як спільноту Gíra: ваш телефон бере участь автоматично.",
  "Ezt a szoba gazdája kapcsolja be; még nem jelölte Gíra-közösségnek.": "Це вмикає адміністратор кімнати; ще не позначено як спільноту Gíra.",
  "Bekapcsolva a szoba minden tagjának. Átküldöm a Gíra-könyvet…": "Увімкнено для всіх учасників кімнати. Надсилаю книгу Gíra…",
  "Kikapcsolva a szoba minden tagjának.": "Вимкнено для всіх учасників кімнати.",
  "A szoba gazdája kapcsolja be; ilyenkor minden tag telefonja magától átküldi ide a Gíra-könyvét, és innen fogadja a többiekét. A szoba minden tagja látja a gíra-mozgásokat.": "Вмикає адміністратор кімнати; тоді телефон кожного учасника сам надсилає сюди свою книгу Gíra й отримує книги інших. Усі учасники бачать рухи гіри.",
  // ===== 2026-10-11 22:2x: LoRa a radio-kalkulatorban =====
  "LoRa (868 MHz) — engedély nélküli adatrádió": "LoRa (868 МГц) — безліцензійний радіозв’язок для даних",
  "Engedély nélkül használható: alapból 25 mW, a 869,4-869,65 MHz-es alsávon 500 mW, korlátozott adásidővel. Nem beszéd, hanem rövid szöveges üzenet; cserébe kis teljesítménnyel is kilométereket visz, mert a zaj alatt is vesz. A telefon nem tud LoRát: egy LoRa-egység kell, amihez a telefon Bluetooth-on csatlakozik.": "Без ліцензії: за замовчуванням 25 мВт, у піддіапазоні 869,4-869,65 МГц 500 мВт з обмеженим часом передачі. Не голос, а короткі текстові повідомлення; натомість малою потужністю покриває кілометри, бо приймає нижче рівня шуму. У телефоні немає LoRa: потрібен модуль LoRa, до якого телефон підключається через Bluetooth.",
  // ===== 2026-10-11 21:4x: gira minusz-hatar =====
  "ennyit fizethetsz most": "можна сплатити зараз",
  "Ez túllépné a mínusz-határodat.": "Це перевищить ваш мінусовий ліміт.",
  "Most legfeljebb ennyit fizethetsz:": "Зараз можна сплатити щонайбільше:",
  "határ": "ліміт",
  "Mínuszba mehetsz": "Можна піти в мінус до",
  "gíráig": "гіри",
  "most ennyit fizethetsz": "доступно зараз",
  // ===== 2026-10-11 21:3x: gira-egyenleg az urlapon =====
  "Egyenleged": "Ваш баланс",
  "a gíra nem mehet mínuszba, ezért fizetni akkor tudsz, ha előbb kapsz valakitől.": "гіра не може піти в мінус, тож платити можна, коли спершу хтось заплатить вам.",
  "Ennyi gírád nincs. Egyenleged:": "У вас немає стільки гіри. Ваш баланс:",
  "A gíra nem mehet mínuszba: előbb kapnod kell valakitől.": "Гіра не може піти в мінус: спершу вам мають заплатити.",
  // ===== 2026-10-11 21:3x: legnyomas-kartya, mozgas-szures =====
  "Járműben vagy (a GPS szerint 15 km/h felett): a riasztás szünetel, mert ilyenkor a nyomás az emelkedőtől és a szellőzéstől is változik.": "Ви в транспорті (за GPS понад 15 км/год): сигнал призупинено, бо тиск тоді змінюється ще й від підйомів і вентиляції.",
  "Magasság-korrekcióval: közben": "З поправкою на висоту: за цей час",
  "volt a szintkülönbség, a mért nyers változás": "перепад висоти, виміряна зміна без поправки",
  "Szenzor, előzmény, tudnivalók": "Датчик, історія, примітки",
  // ===== 2026-10-11 21:0x: szintarcsa, 24 oras napiv, allo tajolo, felolvaso-ertesites =====
  "Válassz színt a tárcsán": "Виберіть колір на колі",
  "Fényerő": "Яскравість",
  "Kiválasztom": "Вибрати",
  "napkelte": "схід",
  "napnyugta": "захід",
  "éjközép": "північ",
  "Nappal": "День",
  "Éjszaka": "Ніч",
  "Biblia felolvasás": "Читання Біблії",
  "Jó irány": "Правильний напрямок",
  "Fordulj jobbra": "Поверніть праворуч",
  "Fordulj balra": "Поверніть ліворуч",
  "Fordulj a kívánt irányba, és nyomd meg: Irány felvétele.": "Поверніться в потрібному напрямку й натисніть: Записати напрямок.",
  "Állítsd fel a telefont: álló módban a hátsó kamera irányát mérjük, fektetve ez nem pontos.": "Тримайте телефон вертикально: у вертикальному режимі вимірюємо напрямок задньої камери, лежачи це неточно.",
  "Álló mód: a hátsó kamera iránya számít. A keret zöld, ha a felvett irányba nézel, és piros, ha nem.": "Вертикальний режим: важливий напрямок задньої камери. Рамка зелена, якщо ви дивитеся в записаному напрямку, і червона, якщо ні.",
  "Vízszintes": "Горизонтально",
  "Álló": "Вертикально",
  "Kamera a háttérben": "Камера на тлі",
  "A hátsó kamera képe a tájoló mögött, hogy lásd, merre mutat.": "Зображення задньої камери за компасом, щоб бачити, куди він вказує.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Privát üzenet neki":
    "Особисте повідомлення",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "még nincs Gíra-azonosítója":
    "ще немає ID Гіра",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Elküldve a szobán keresztül":
    "Надіслано через кімнату",
  "Nála magától jóváíródik, és a nyugtája is magától visszajön.":
    "Отримувачу зарахується автоматично, і його квитанція теж повернеться автоматично.",
  "A szobába most nem ment el (nincs kapcsolat vagy kulcs). Itt a QR, ezzel is átadhatod.":
    "Зараз не вдалося надіслати до кімнати (немає зв’язку або ключа). Ось QR-код, ним теж можна передати.",
  "Gíra-fizetés":
    "Платіж Гіра",
  "hamis aláírás, nem fogadom el":
    "підроблений підпис, не прийнято",
  "jóváírva nálad":
    "зараховано тобі",
  "Szobatársat választhatsz, ha egy Gíra-közösség szobában ők is bekapcsolták.":
    "Можна вибрати учасника кімнати, якщо він теж увімкнув це в кімнаті спільноти Гіра.",
  "Szobatárs kiválasztása…":
    "Вибери учасника кімнати…",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Helyek":
    "Місця",
  "a határok közelítők":
    "кордони приблизні",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Gíra-közösség":
    "Спільнота Гіра",
  "A telefon ebbe a szobába magától átküldi a Gíra-könyvedet, és innen fogadja a többiekét. A szoba minden tagja látja a gíra-mozgásokat.":
    "Телефон автоматично надсилає твою книгу Гіра до цієї кімнати й отримує тут книги інших. Усі учасники кімнати бачать рухи Гіра.",
  "Gíra-közösségnek jelölt szobák":
    "Кімнати, позначені як спільнота Гіра",
  "A szoba beállításaiban kapcsolhatod be („Gíra-közösség”); oda a telefon magától átküldi a könyvet.":
    "Увімкни в налаштуваннях кімнати («Спільнота Гіра»); телефон автоматично надсилатиме туди книгу.",
  "Utoljára egyeztetve":
    "Остання синхронізація",
  "Egyeztetés most":
    "Синхронізувати зараз",
  "szoba":
    "кімн.",
  "Nincs elérhető Gíra-közösség szoba. Kapcsold be egy szoba beállításaiban.":
    "Немає доступної кімнати спільноти Гіра. Увімкни її в налаштуваннях кімнати.",
  "Bekapcsolva. Átküldöm a Gíra-könyvet…":
    "Увімкнено. Надсилаю книгу Гіра…",
  "Kikapcsolva. Ide többé nem küldöm a könyvet.":
    "Вимкнено. Книга більше не надсилатиметься сюди.",
  "Bekapcsolva, a könyv átment.":
    "Увімкнено, книга надіслана.",
  "Bekapcsolva. A könyv akkor megy át, amikor a szoba elérhető és van aláírt tételed.":
    "Увімкнено. Книга піде, коли кімната буде доступна і в тебе будуть підписані записи.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Titkos kódok":
    "Секретні коди",
  "Kérek":
    "Запросити",
  "Beolvasás":
    "Сканувати",
  "Azonosítóm":
    "Мій ID",
  "Nincs kamera? Beillesztés szövegből":
    "Немає камери? Вставити з тексту",
  "Mozgások":
    "Рухи",
  "Zárolás":
    "Заблокувати",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Apokrif könyvek":
    "Апокрифічні книги",
  "Énok ↓":
    "Енох ↓",
  "Énok könyve letöltése":
    "Завантажити Книгу Еноха",
  "Nem sikerült, próbáld újra":
    "Не вдалося, спробуй ще раз",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "SÜRGŐS ·":
    "ТЕРМІНОВО ·",
  "3 nappal":
    "за 3 дні",
  "Megnézem":
    "Переглянути",
  "(te)":
    "(ти)",
  "ENGEDÉLYKÖTELES, mint a 2 méter. Beépítésben, épületek között jobb, mint a 2 méter; nyílt terepen rosszabb.":
    "ПОТРІБНА ЛІЦЕНЗІЯ, як і для 2 м. У забудові, між будинками працює краще, ніж 2 м; на відкритій місцевості гірше.",
  "Írd be az e-mail címed. Küldünk rá egy 6 jegyű kódot; ha beírod, bent vagy. Jelszó nem kell, a telefon megjegyzi a belépést.":
    "Введи свою e-mail адресу. Ми надішлемо на неї 6-значний код; введеш його, і ти всередині. Пароль не потрібен, телефон запам’ятає вхід.",
  "Add meg az e-mail címed és az ÚJ jelszót kétszer. Küldünk egy kódot e-mailben; ha beírod, az új jelszó lép életbe.":
    "Введи e-mail і НОВИЙ пароль двічі. Ми надішлемо код поштою; коли введеш його, новий пароль почне діяти.",
  "Bekapcsolva, de a bezárt appos értesítés regisztrálása most nem sikerült; amíg az app fut, jelez.":
    "Увімкнено, але зареєструвати сповіщення для закритого застосунку зараз не вдалося; поки застосунок працює, він повідомлятиме.",
  "Alul írod az üzenetet; a papírrepülő gomb küldi el a szoba minden tagjának.":
    "Повідомлення пишеш унизу; кнопка з паперовим літачком надсилає його всім учасникам кімнати.",
  "Az értesítés le van tiltva. A telefon Beállítások > Alkalmazások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Сповіщення заблоковано. Дозволити їх знову можна в Налаштуваннях телефону > Застосунки > PrepperPapa > Сповіщення.",
  "Az értesítés le van tiltva. A telefon Beállítások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Сповіщення заблоковано. Дозволити їх знову можна в Налаштуваннях телефону > PrepperPapa > Сповіщення.",
  "Letiltva. A telefon Beállítások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Заблоковано. Дозволити знову можна в Налаштуваннях телефону > PrepperPapa > Сповіщення.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Kép csatolása":
    "Прикріпити фото",
  "Új helyi szoba":
    "Нова локальна кімната",
  "Nincs internetkapcsolat.":
    "Немає підключення до інтернету.",
  "Visszajelzés":
    "Відгук",
  "Saját vészkártya adatai":
    "Дані моєї екстреної картки",
  "Nem ez volt.":
    "Це не те.",
  "Eredmény":
    "Результат",
  "E-mail cím":
    "Електронна пошта",
  "helyi háló, internet nélkül":
    "локальна мережа, без інтернету",
  "Forgatás balra":
    "Повернути ліворуч",
  "Forgatás jobbra":
    "Повернути праворуч",
  "Saját telefonszám":
    "Мій номер телефону",
  "Térképről":
    "З карти",
  "Koppints a másoláshoz":
    "Торкнися, щоб скопіювати",
  "Belépés e-mail címmel":
    "Вхід через електронну пошту",
  "A szoba kódja, koppints a másoláshoz":
    "Код кімнати, торкнися, щоб скопіювати",
  "A jel nem vált pont és vonás között. Ez nem tiszta Morze — állíts a vételen, és próbáld újra.":
    "Сигнал не перемикається між крапкою і тире. Це не чиста Морзе — налаштуй приймання і спробуй ще раз.",
  "Ez nagyjából":
    "Це приблизно",
  "18650 (a gyártó saját cellája kb. 3400 mAh)":
    "18650 (власна комірка виробника прибл. 3400 mAh)",
  "kWh hőigénnyel, összesen":
    "кВт·год потреби в теплі, разом",
  "Állj":
    "Стоп",
  "Kód küldése e-mailben":
    "Надіслати код електронною поштою",
  "Add meg az e-mail címed.":
    "Вкажи свою електронну пошту.",
  "Ez nem tűnik e-mail címnek.":
    "Це не схоже на адресу електронної пошти.",
  "Nem sikerült, próbáld újra.":
    "Не вдалося, спробуй ще раз.",
  "nincs bejelentkezve":
    "не виконано вхід",
  "Kikapcsolva ezen az eszközön.":
    "Вимкнено на цьому пристрої.",
  "Kicsinyítem...":
    "Зменшую...",
  "Kép törölve.":
    "Фото видалено.",
  "Ezt a képet nem tudom megnyitni.":
    "Не можу відкрити це фото.",
  "Frissítés keresése":
    "Перевірити оновлення",
  "Normál":
    "Звичайний",
  "Ki vagyok?":
    "Хто я?",
  "2018 óta készítek videókat PrepperPapa néven a felkészülésről. Hiszem, hogy a keresztény értékek és a jó gyakorlati eszközök együtt segítenek abban, hogy könnyebben vegyük a mindennapok kihívásait, ezért a célom az, hogy fényt hozzak az életedbe, lelkiekben és a szó szoros értelmében is.":
    "З 2018 року я знімаю відео про підготовку під ім'ям PrepperPapa. Я вірю, що християнські цінності разом із добрими практичними засобами допомагають легше долати щоденні виклики, тому моя мета — принести світло у твоє життя, і духовно, і в прямому сенсі слова.",
  "Lámpákat, késeket, táskákat és energiaforrásokat tesztelek valós használatban, és ha valami nem vált be, azt is elmondom. Nem világvége-hangulatot árulok, hanem azt a néhány dolgot mutatom meg, ami egy áramszünetben, egy viharban vagy egy túrán tényleg számít.":
    "Я тестую ліхтарі, ножі, сумки та джерела живлення в реальному використанні, і якщо щось не виправдало себе, теж про це розповідаю. Я не продаю настрій кінця світу, а показую ті кілька речей, які справді важать під час відключення світла, бурі чи в поході.",
  "Felkészülés józan ésszel, magyar valóságra.":
    "Підготовка зі здоровим глуздом, для угорських реалій.",
  "Elérhetőségek":
    "Контакти",
  "Prepper Vészkijárat csoport":
    "Група Prepper Vészkijárat",
  "Gyülekező fórum":
    "Форум Gyülekező",
  "Melyik betű?":
    "Яка літера?",
  "Mi hiányzik?":
    "Чого бракує?",
  "Az adat a Háztartásból jön, személyenként: vércsoport, allergia, gyógyszer, betegség, a saját telefonszám és a vészhelyzeti kontakt (név és telefon). Akinél még nincs kontakt megadva, ott a saját kártyád kontaktját használjuk.":
    "Дані беруться з Домогосподарства, для кожної особи: група крові, алергія, ліки, хвороби, власний номер телефону та екстрений контакт (ім'я і телефон). Якщо в когось контакт ще не вказано, використовуємо контакт із твоєї власної картки.",
  "Vészhelyzeti kontakt – ki?":
    "Екстрений контакт – хто?",
  "anya, apa, szomszéd…":
    "мама, тато, сусід…",
  "Vészhelyzeti kontakt – telefon":
    "Екстрений контакт – телефон",
  "A jegyzet neve":
    "Назва нотатки",
  "Értesítések":
    "Сповіщення",
  "Lejáró élelmiszer és készlet":
    "Продукти й запаси, у яких спливає термін",
  "Mennyivel előre szóljon:":
    "За скільки попереджати:",
  "1 héttel":
    "за 1 тиждень",
  "2 héttel":
    "за 2 тижні",
  "1 hónappal":
    "за 1 місяць",
  "Próbaértesítés":
    "Тестове сповіщення",
  "Rezgő visszajelzés":
    "Вібровідгук",
  "Rövid rezgés a gombok megnyomásakor":
    "Коротка вібрація при натисканні кнопок",
  "A készülék rövid koppanással jelez minden gombnyomást.":
    "Пристрій коротким поштовхом сигналізує про кожне натискання кнопки.",
  "Készlet ürítése":
    "Очистити запаси",
  "Fejlesztői próba-mód":
    "Тестовий режим розробника",
  "Teszt funkció: beállíthatsz egy fizetős csomagot, és az app úgy viselkedik, mintha azt vásárolták volna meg. Csak ezen a készüléken, csak a felületen. A valódi feloldásaid megmaradnak, kikapcsolva visszaáll minden.":
    "Тестова функція: можна вибрати платний пакет, і застосунок поводитиметься так, ніби його придбано. Лише на цьому пристрої, лише в інтерфейсі. Твої справжні розблокування збережуться, після вимкнення все повернеться.",
  "Próba-mód bekapcsolása":
    "Увімкнути тестовий режим",
  "Felhasználó-korlát":
    "Ліміт користувачів",
  "Termék-korlát":
    "Ліміт товарів",
  "A 0 korlátlant jelent.":
    "0 означає без обмежень.",
  "Beállítás":
    "Налаштувати",
  "Próba-mód ki":
    "Вимкнути тестовий режим",
  "Vészhelyzeti kontakt neve":
    "Ім'я екстреного контакту",
  "pl. anya, apa, szomszéd":
    "напр. мама, тато, сусід",
  "Vészhelyzeti kontakt telefonszáma":
    "Телефон екстреного контакту",
  "Koordináta térképről":
    "Координата з карти",
  "· vagy egy bemásolt Google Térkép-link. Ha nem tudom értelmezni, szólok — üresen nem mentem el. Vagy nyomd meg a":
    "· або вставлене посилання з Google Карт. Якщо не зможу розібрати, скажу — порожнім не збережу. Або натисни",
  "gombot, és húzd a térképet a célkereszt alá.":
    "кнопку і перетягни карту під перехрестя.",
  "Koordináta a térképről":
    "Координата з карти",
  "Ezt választom":
    "Вибираю це",
  "MESH-hálózat: szöveg a közeledben lévőknek, internet nélkül":
    "Мережа MESH: текст для тих, хто поруч, без інтернету",
  "Internet és térerő nélkül: közös Wi-Fi-n, hotspoton vagy Bluetooth-on. Itt látod a saját szobáidat és a közelben hallottakat.":
    "Без інтернету й мобільного зв'язку: через спільну Wi-Fi, точку доступу або Bluetooth. Тут ти бачиш свої кімнати і те, що почуто поблизу.",
  "Csatlakozás címmel":
    "Приєднатися за адресою",
  "Ez látszik a szobák listáján, ezen ismerik fel. A telefonod a képet magától lekicsinyíti.":
    "Це видно у списку кімнат, за цим її впізнають. Телефон сам зменшить фото.",
  "Fiók":
    "Обліковий запис",
  "Jelszó megváltoztatása":
    "Змінити пароль",
  "Kép a szobához (nem kötelező)":
    "Фото для кімнати (необов'язково)",
  "Mérés fut… tartsd a jelen,":
    "Вимірювання триває… тримай сигнал ще",
  "másodperc.":
    "секунд.",
  "Kevés jel érkezett. Indítsd újra, és nézd meg, hogy a vétel egyáltalán lát-e jelet.":
    "Надійшло замало сигналу. Запусти знову і перевір, чи приймання взагалі бачить сигнал.",
  "mért arány":
    "виміряне співвідношення",
  "Mért sebesség":
    "Виміряна швидкість",
  "Beállítom":
    "Встановити",
  "A vétel sebessége beállítva":
    "Швидкість приймання встановлено",
  "Figyelj: lekopogom a betűt. Előbb a sor, aztán az oszlop.":
    "Слухай: я вистукаю літеру. Спочатку рядок, потім стовпець.",
  "Kopogd le ezt a betűt":
    "Вистукай цю літеру",
  "Írd be, melyik betűt hallottad.":
    "Введи, яку літеру ти почув.",
  "Írd le, mit hallottál, aztán nyomd meg az Ellenőrzést.":
    "Запиши, що почув, а потім натисни Перевірити.",
  "Saját telefon:":
    "Мій телефон:",
  "Ez a cikk zárt: a bővített tudástár nincs feloldva ezen a készüléken.":
    "Ця стаття закрита: розширену базу знань на цьому пристрої не розблоковано.",
  "Előbb írd be a szöveget a mezőbe, aztán koppints a lapra.":
    "Спочатку введи текст у поле, потім торкнися аркуша.",
  "T Szöveg":
    "T Текст",
  "Eldobod a rajzot?":
    "Відкинути малюнок?",
  "Új lapot kezdesz? A mostani rajz elvész.":
    "Почати новий аркуш? Поточний малюнок буде втрачено.",
  "Adj nevet a jegyzetnek.":
    "Дай назву нотатці.",
  "Wh tárolt energia":
    "Вт·год накопиченої енергії",
  "saját megadás":
    "власне значення",
  "A megadott wattórából 10 százalékot levonunk átalakítási veszteségre.":
    "Від вказаних ват-годин віднімаємо 10 відсотків на втрати перетворення.",
  "A savas akkut csak félig szabad lemeríteni, különben tönkremegy, és az átalakító is elvisz 15 százalékot. Ezért a névlegesnek nagyjából 42 százalékával számolunk.":
    "Кислотний акумулятор можна розряджати лише наполовину, інакше він зіпсується, а інвертор ще забирає 15 відсотків. Тому рахуємо приблизно 42 відсотки від номіналу.",
  "A LiFePO4-et 80 százalékig le lehet meríteni (a savasat csak felére), az átalakító 10 százalékot visz.":
    "LiFePO4 можна розряджати до 80 відсотків (кислотний — лише наполовину), інвертор забирає 10 відсотків.",
  "A tárolt energiából kb. 10 százalékot elvisz az átalakítás, ezért nem a teljes wattóra használható fel.":
    "Близько 10 відсотків накопиченої енергії забирає перетворення, тому використати можна не всі ват-години.",
  "saját eszköz":
    "власний пристрій",
  "Tölts ki legalább egy sort: hány darab, hány watt, hány óra naponta.":
    "Заповни хоча б один рядок: скільки штук, скільки ват, скільки годин на день.",
  "Nem fogy el":
    "Не закінчиться",
  "Ez nem fér el egyszerre. A felsorolt fogyasztók együtt":
    "Це не потягне все одночасно. Перелічені споживачі разом",
  "wattot kérnek, a gép":
    "ват потребують, пристрій",
  "Nem attól múlik, hogy mekkora a wattórája — ennyit egyszerre nem bír.":
    "Справа не в ємності у ват-годинах — стільки одночасно він не витримає.",
  "Vagy nagyobb teljesítményű gép kell, vagy nem egyszerre kell működtetni őket.":
    "Потрібен потужніший пристрій або не вмикати їх одночасно.",
  "Az indulási áram kiviheti. A folyamatos fogyasztás belefér,":
    "Пусковий струм може його вибити. Тривале споживання вміщається,",
  "de a motoros készülék induláskor kb.":
    "але прилад із двигуном під час запуску бере прибл.",
  "wattot húz pár másodpercig,":
    "ват на кілька секунд,",
  "a gép":
    "пристрій",
  "wattos. Ilyenkor a gép lekapcsol, pedig „papíron belefért volna\".":
    "ват. У такому разі пристрій вимкнеться, хоча «на папері вміщалося».",
  "Wh valóban felhasználható energia kell":
    "Вт·год реально доступної енергії потрібно",
  "(névlegesen kb.":
    "(номінально прибл.",
  "Wh, a veszteség miatt).":
    "Вт·год, через втрати).",
  "A választott gép ezt tudja.":
    "Вибраний пристрій це може.",
  "A választott gép ehhez kevés.":
    "Вибраного пристрою для цього замало.",
  "Ezek elegendők lennének erre a listára:":
    "Для цього списку вистачило б таких:",
  "A napelem naponta":
    "Сонячна панель щодня дає на",
  "wattórával többet ad, mint amennyit elhasználsz. Ez így önfenntartó — de csak amíg süt: két borús nap":
    "ват-годин більше, ніж ти витрачаєш. Так система самодостатня — але лише поки світить сонце: два хмарні дні",
  "wattórát vinne el a tartalékból.":
    "ват-годин забрали б із запасу.",
  "ezzel a listával.":
    "з цим списком.",
  "Napi fogyasztás:":
    "Добове споживання:",
  "| csúcsterhelés:":
    "| пікове навантаження:",
  "(a gép":
    "(пристрій",
  "Wh névlegesből":
    "Вт·год номінальних —",
  "Wh a valóban felhasználható.":
    "Вт·год реально доступно.",
  "A napelem:":
    "Сонячна панель:",
  "napfényórának felel meg, tehát napi kb.":
    "сонячних годин, тобто щодня прибл.",
  "Wh jön be. A névleges teljesítmény 70 százalékával számolunk:":
    "Вт·год надходить. Рахуємо 70 відсотків номінальної потужності:",
  "az állásszög, a hő és a töltésvezérlő mind levesz belőle.":
    "кут нахилу, нагрів і контролер заряду — усе забирає частину.",
  "teletöltése ilyen időben":
    "повна зарядка за такої погоди",
  "Saját / kézi megadás (bármilyen lámpa)":
    "Власне / ручне введення (будь-який ліхтар)",
  "NEXTORCH eStar (fejlámpa, max. 1300 lm)":
    "NEXTORCH eStar (налобний ліхтар, макс. 1300 lm)",
  "2× 1200 mAh (2400 mAh összesen)":
    "2× 1200 mAh (разом 2400 mAh)",
  "NEXTORCH myStar V2.0 (fejlámpa, max. 760 lm)":
    "NEXTORCH myStar V2.0 (налобний ліхтар, макс. 760 lm)",
  "NEXTORCH iStar (fejlámpa, max. 450 lm)":
    "NEXTORCH iStar (налобний ліхтар, макс. 450 lm)",
  "Piros villogó":
    "Червоне блимання",
  "NEXTORCH MAX STAR (fejlámpa, max. 1200 lm)":
    "NEXTORCH MAX STAR (налобний ліхтар, макс. 1200 lm)",
  "NEXTORCH oStar (sisak-/fejlámpa, max. 500 lm)":
    "NEXTORCH oStar (шоломний/налобний ліхтар, макс. 500 lm)",
  "Decathlon Quechua HL50 (fejlámpa, 50 lm)":
    "Decathlon Quechua HL50 (налобний ліхтар, 50 lm)",
  "Decathlon Ontrail 900 (fejlámpa terepfutáshoz)":
    "Decathlon Ontrail 900 (налобний ліхтар для трейлраннінгу)",
  "Boost, 900→350 lm (túlmelegedés ellen csökken)":
    "Boost, 900→350 lm (знижується від перегріву)",
  "Erős, 300 lm, állandó fényerő":
    "Сильний, 300 lm, стабільна яскравість",
  "Decathlon Caperlan Moonlight 500 (horgász fejlámpa)":
    "Decathlon Caperlan Moonlight 500 (налобний ліхтар для риболовлі)",
  "Horgászat, 80 lm":
    "Риболовля, 80 lm",
  "Optimál, 200 lm":
    "Оптимальний, 200 lm",
  "UV mód":
    "UV-режим",
  "Decathlon Forclaz ONNight 300 (fejlámpa túrázáshoz)":
    "Decathlon Forclaz ONNight 300 (налобний ліхтар для походів)",
  "Környezeti fény":
    "Навколишнє світло",
  "Erős, 130 lm":
    "Сильний, 130 lm",
  "Saját megadás (mA)":
    "Власне значення (mA)",
  "Kis 5 mm-es LED (jelzőfény-szerű, gyenge)":
    "Малий 5-мм світлодіод (як індикатор, слабкий)",
  "~1 W teljesítmény-LED (pl. Cree XP-E)":
    "~1 W потужний світлодіод (напр. Cree XP-E)",
  "~3 W teljesítmény-LED (pl. Cree XP-G, Osram)":
    "~3 W потужний світлодіод (напр. Cree XP-G, Osram)",
  "~5 W teljesítmény-LED (erős fejlámpa/zseblámpa)":
    "~5 W потужний світлодіод (потужний налобний/кишеньковий ліхтар)",
  "COB LED-sáv (kempinglámpa)":
    "COB LED-смуга (кемпінговий ліхтар)",
  "Saját megadás (mAh)":
    "Власне значення (mAh)",
  "AA alkáli elem (~2500 mAh)":
    "Лужна батарейка AA (~2500 mAh)",
  "AA NiMH tölthető akku (~2000 mAh)":
    "Акумулятор AA NiMH (~2000 mAh)",
  "AAA alkáli elem (~1000 mAh)":
    "Лужна батарейка AAA (~1000 mAh)",
  "— a gyártó szerint":
    "— за даними виробника",
  "— a gyártó saját, mért adata":
    "— власні виміряні дані виробника",
  "Add meg az akku kapacitását és a LED áramfelvételét is.":
    "Вкажи ємність акумулятора і струм споживання світлодіода.",
  "mAh névleges kapacitásból":
    "mAh номінальної ємності —",
  "mAh a valóban felhasználható (a merítési és driver-veszteség miatt 15 százalékot levonva),":
    "mAh реально доступно (з урахуванням втрат розряду й драйвера мінус 15 відсотків),",
  "mA folyamatos áramfelvétel mellett.":
    "mA за безперервного споживання.",
  "Rejtőzködés, fekvés, olvasás. Ennyivel nem hízol és nem is fogysz gyorsan, de a fejed tiszta marad.":
    "Переховування, лежання, читання. З цим не погладшаєш і не схуднеш швидко, але голова залишиться ясною.",
  "Járkálás, ház körüli teendők. Ez a nemzetközi vészhelyzeti tervezés alapszáma is.":
    "Ходіння, справи біля дому. Це й базове число міжнародного планування на випадок надзвичайних ситуацій.",
  "Favágás, sáncolás, teherrel gyaloglás, hideg. Ez a szám gyorsan elviszi a készletet -- éppen ezért érdemes előre számolni vele.":
    "Рубання дров, копання окопів, ходьба з вантажем, холод. Це число швидко з'їдає запаси — саме тому варто врахувати його заздалегідь.",
  "kcal fejenként naponta.":
    "ккал на людину на день.",
  "saját tétel":
    "власна позиція",
  "egység":
    "одиниця",
  "Engedély nélküli, 4 watt AM/FM (SSB-n 12). Nagy antennát kíván, de a hosszú hullám jobban hajlik a domb mögé, mint bármelyik kézirádió.":
    "Без дозволу, 4 вати AM/FM (на SSB 12). Потребує великої антени, але довга хвиля краще огинає пагорб, ніж будь-яка портативна рація.",
  "ENGEDÉLYKÖTELES: vizsga és hívójel kell hozzá. Vészhelyzetben az életveszély elhárítására a törvény enged kivételt, de arra épülő tervet ne csinálj -- a vizsga előre megszerezhető.":
    "ПОТРІБЕН ДОЗВІЛ: потрібні іспит і позивний. У надзвичайній ситуації закон дозволяє виняток для відвернення загрози життю, але не будуй план на цьому — іспит можна скласти заздалегідь.",
  "ENGEDÉLYKÖTELES. Itt NEM a rálátás dönt: nappal 100-400 km-re, éjjel akár több ezerre visz az ionoszféráról visszaverődve. Ezt a kalkulátor nem modellezi -- lásd a figyelmeztetést az eredménynél.":
    "ПОТРІБЕН ДОЗВІЛ. Тут вирішує НЕ пряма видимість: вдень 100-400 км, уночі навіть тисячі, відбиваючись від іоносфери. Цей калькулятор цього не моделює — дивись попередження біля результату.",
  "ENGEDÉLYKÖTELES. Éjszakai sáv, a környék (50-300 km) megbízható lefedésére a legjobb -- ez a klasszikus \"megyényi\" összeköttetés.":
    "ПОТРІБЕН ДОЗВІЛ. Нічний діапазон, найкращий для надійного покриття околиць (50-300 км) — це класичний зв'язок «на область».",
  "Mező, tópart, autópálya. Itt a rálátás a korlát, nem a terep.":
    "Поле, берег озера, автотраса. Тут обмеження — пряма видимість, а не рельєф.",
  "A domb mögé a jel behajlik, de gyengülve. Egy dombtetőre felsétálni többet ér, mint tízszeres teljesítmény.":
    "За пагорб сигнал огинає, але слабшає. Піднятися на вершину пагорба дає більше, ніж удесятеро більша потужність.",
  "A lombozat a rövid hullámot nyeli el jobban, ezért itt a 70 centi a leggyengébb.":
    "Листя сильніше поглинає коротку хвилю, тому тут 70 сантиметрів найслабший.",
  "Itt fordul meg a sorrend: a 70 centi jobban jut át épületek között, a CB-nek meg antennája sincs hova.":
    "Тут порядок змінюється: 70 сантиметрів краще проходить між будівлями, а для CB навіть немає де поставити антену.",
  "Völgyben ülve a rálátás nulla. Itt a megoldás nem a watt, hanem az átjátszó vagy a gerincre feljutás.":
    "У долині пряма видимість нульова. Тут рішення не вати, а ретранслятор або вихід на хребет.",
  "talajhullám":
    "земна хвиля",
  "terep és teljesítmény":
    "рельєф і потужність",
  "rálátás (a Föld görbülete)":
    "пряма видимість (кривизна Землі)",
  "Adj meg legalább egy embert.":
    "Вкажи хоча б одну людину.",
  "Tölts ki legalább egy tételt (mennyiség és kcal), vagy add meg az összeset egyben.":
    "Заповни хоча б одну позицію (кількість і ккал) або вкажи загальну суму одразу.",
  "kcal hiányzik a":
    "ккал бракує на",
  "húskonzerv .":
    "м'ясних консерв .",
  "Ennyi ideig elég a készlet":
    "На стільки вистачить запасів",
  "felnőttnek":
    "дорослим",
  "Napi igény:":
    "Добова потреба:",
  "készlet:":
    "запаси:",
  "kcal kell.":
    "ккал потрібно.",
  "Ez megvan.":
    "Це є.",
  "Ehhez a készlet kevés.":
    "Для цього запасів замало.",
  "A gyerekekkel a felnőtt adag 60 százalékával számoltunk — ez átlag,":
    "Для дітей ми рахували 60 відсотків дорослої порції — це середнє,",
  "egy tizenkét éves többet eszik egy hároméves(nél). A kalória nem minden:":
    "дванадцятирічний їсть більше, ніж трирічний. Калорії — це ще не все:",
  "fehérje, só és zsír nélkül a puszta kalória pár hét alatt legyengít, és a":
    "без білка, солі й жиру самі калорії за кілька тижнів виснажать, а",
  "C-vitamin hiánya hetek alatt jelentkezik. Ez a szám a KIHÚZÁST méri, nem az egészséget.":
    "нестача вітаміну C проявляється за кілька тижнів. Це число вимірює ВИЖИВАННЯ, а не здоров'я.",
  "A víz nincs ebben a számban, és hamarabb fogy el.":
    "Вода в це число не входить, і вона закінчиться раніше.",
  "Élelem nélkül hetekig el lehet lenni, víz nélkül napokig. Ha a készletet tervezed,":
    "Без їжі можна протриматися тижнями, без води — днями. Якщо плануєш запаси,",
  "a vízzel kezdd — arra külön kalkulátor van.":
    "почни з води — для неї є окремий калькулятор.",
  "Ez a teljesítmény PMR446-on nem legális. A sávon":
    "Така потужність на PMR446 незаконна. У цьому діапазоні",
  "maximum 0,5 watt engedélyezett, gyári antennával. A számot kiszámoltuk, de egy":
    "дозволено максимум 0,5 вата із заводською антеною. Число ми розрахували, але",
  "erősebb adóval a saját frekvenciádon te zavarod meg azokat, akikkel beszélni akarsz.":
    "з потужнішим передавачем на своїй частоті ти заважаєш тим, з ким хочеш говорити.",
  "Ez a sáv engedélyköteles.":
    "Цей діапазон потребує дозволу.",
  "használatához":
    "для використання",
  "vizsga és hívójel kell. A vizsga előre megszerezhető — és pont ez a lényeg:":
    "потрібні іспит і позивний. Іспит можна скласти заздалегідь — і в цьому вся суть:",
  "egy vészhelyzetben már késő elkezdeni.":
    "у надзвичайній ситуації починати вже пізно.",
  "kilométerre ezen a sávon a teljesítmény":
    "кілометрів у цьому діапазоні потужності",
  "nem elég — bármennyi. A rálátásod":
    "не вистачить — хоч скільки. Твоя пряма видимість",
  "kilométer, és a Föld görbülete":
    "кілометрів, і за кривизну Землі",
  "mögé a VHF/UHF jel nem hajlik be. Amin múlik: magasság (menj fel egy dombra vagy":
    "сигнал VHF/UHF не огинає. Від чого залежить: висота (піднімись на пагорб або",
  "tedd fel az antennát), átjátszó , vagy alacsonyabb sáv (CB vagy rövidhullám).":
    "підніми антену), ретранслятор , або нижчий діапазон (CB чи короткі хвилі).",
  "kilométerhez kb.":
    "кілометрів потрібно прибл.",
  "watt kellene ezen a sávon és ezen a terepen":
    "ват у цьому діапазоні й на цьому рельєфі",
  "— ami már nem kézirádió-kategória, és rendszerint olcsóbb feljebb vinni az antennát.":
    "— це вже не категорія портативної рації, і зазвичай дешевше підняти антену вище.",
  "Ennyire várható összeköttetés":
    "Очікувана дальність зв'язку",
  "méter antennamagassággal.":
    "метрів висоти антени.",
  "Amin most múlik:":
    "Від чого зараз залежить:",
  "Rövidhullámon a talajhullámmal számoltunk.":
    "На коротких хвилях ми рахували земну хвилю.",
  "A rálátásod":
    "Твоя пряма видимість",
  "km, a terep és a teljesítmény":
    "км, рельєф і потужність",
  "km-t enged — a kettő közül a kisebbik számít.":
    "км дозволяють — важить менше з двох.",
  "A watt a leggyengébb eszközöd. A távolság a teljesítmény negyedik":
    "Вати — твій найслабший інструмент. Дальність зростає як корінь четвертого",
  "gyökével nő: négyszer annyi watt másfélszer nagyobb távolság. Egy méterrel feljebb tett":
    "степеня з потужності: учетверо більше ват — у півтора раза більша дальність. Антена, піднята на метр вище,",
  "antenna rendszerint többet ad, mint a teljesítmény megduplázása — és nem fogyaszt.":
    "зазвичай дає більше, ніж подвоєння потужності — і не споживає енергії.",
  "Rövidhullámon ez a szám csak a talajhullám. A 7 és a 3,6":
    "На коротких хвилях це число — лише земна хвиля. Справжню дальність діапазонів 7 і 3,6",
  "megahertzes sáv igazi hatótávját az ionoszféra adja: napszaktól és napfolt-tevékenységtől":
    "мегагерц дає іоносфера: залежно від пори доби та сонячної активності",
  "függően 100-tól több ezer kilométerig. Azt ez a kalkulátor nem modellezi — arra":
    "від 100 до кількох тисяч кілометрів. Цей калькулятор цього не моделює — для цього",
  "terjedési előrejelzés kell.":
    "потрібен прогноз поширення радіохвиль.",
  "Tölts ki minden mezőt.":
    "Заповни всі поля.",
  "kg fa, ez körülbelül":
    "кг дров, це приблизно",
  "ömlesztett köbméter":
    "насипних кубометрів",
  "Légszáraz keményfával és 70 százalékos kályha-hatásfokkal számolva. Nedves fa ennek a felét adja, tehát kétszer annyi kell belőle.":
    "Розраховано для повітряно-сухої твердої деревини і ККД печі 70 відсотків. Сирі дрова дають половину цього, тож їх потрібно вдвічі більше.",
  "kg gáz, ez":
    "кг газу, це",
  "darab 11,5 kilós palack":
    "балонів по 11,5 кг",
  "PB-gázt zárt térben égetni életveszélyes lehet. Szén-monoxid keletkezik, ami szagtalan, és álmodban öl meg. Kell mellé szén-monoxid-érzékelő, és kell folyamatos szellőzés — nem elég percenként kinyitni az ablakot.":
    "Спалювати пропан-бутан у закритому приміщенні може бути смертельно небезпечно. Утворюється чадний газ, який не має запаху і вбиває уві сні. Потрібен датчик чадного газу і постійна вентиляція — недостатньо раз на хвилину відчиняти вікно.",
  "Párát is termel: minden elégetett kiló gázból másfél liter víz kerül a levegőbe. Ettől penészedik a fal, és hidegebbnek érzed a szobát.":
    "Він також утворює вологу: з кожного спаленого кілограма газу півтора літра води потрапляє в повітря. Від цього стіни пліснявіють, і кімната здається холоднішою.",
  "Palackot soha ne tarts a lakótérben tartalékként, és ne a fűtés mellett.":
    "Ніколи не зберігай балон про запас у житловому приміщенні і поруч з опаленням.",
  "Tölts ki mindkét mezőt.":
    "Заповни обидва поля.",
  "négyzetméter tetőről":
    "квадратних метрів даху",
  "milliméter esőből, húsz százalék veszteséggel számolva.":
    "міліметрів дощу, з урахуванням двадцяти відсотків втрат.",
  "A tető vízszintes vetülete számít, nem a ferde felület: felülről nézve mekkora.":
    "Важить горизонтальна проєкція даху, а не похила поверхня: який він, якщо дивитися згори.",
  "Ivásra és főzésre, három liter fejenként naponta:":
    "Для пиття й готування, три літри на людину на день:",
  "Az első lefolyó vizet engedd el. Az mossa le a tetőről a port, a madárürüléket és a leveleket. Nagyjából az első fél milliméter esőnek megfelelő mennyiség.":
    "Першу стічну воду злий. Вона змиває з даху пил, пташиний послід і листя. Приблизно кількість, що відповідає першим пів міліметра дощу.",
  "A tető anyaga számít. Bitumenzsindelyről, ólomtartalmú festésről vagy azbesztpalán át gyűjtött vizet ne igyál. Mosásra, öblítésre az is jó.":
    "Матеріал даху має значення. Воду, зібрану з бітумної черепиці, свинцевої фарби чи азбестового шиферу, не пий. Для прання й полоскання вона годиться.",
  "Az összegyűjtött víz nem ivóvíz. A Víztisztítás rész fent megmondja, mennyi forralás vagy hipó kell hozzá.":
    "Зібрана вода — не питна. Розділ «Очищення води» вище підкаже, скільки кип'ятіння чи хлорки для неї потрібно.",
  "Dörgés":
    "Грім",
  "Most várd meg a dörgést, és nyomd meg újra.":
    "Тепер дочекайся грому і натисни ще раз.",
  "Ez a fejed fölött van. Azonnal menj be épületbe vagy autóba. Fa alá soha.":
    "Це над твоєю головою. Негайно йди в будівлю або в авто. Ніколи не під дерево.",
  "Tíz kilométeren belül van, tehát veszélyes. A következő villám már téged is elérhet: menj fedezékbe, és maradj is ott.":
    "Це ближче ніж десять кілометрів, отже небезпечно. Наступна блискавка може влучити і в тебе: іди в укриття і залишайся там.",
  "Egyelőre távol van, de figyeld: ha az idő rövidül, közeledik.":
    "Поки що далеко, але стеж: якщо час скорочується, гроза наближається.",
  "másodperc telt el. A hang három másodperc alatt tesz meg egy kilométert.":
    "секунд минуло. Звук долає один кілометр за три секунди.",
  "Harminc-harminc szabály: ha a dörgés harminc másodpercen belül megjön, menj fedezékbe, és az utolsó dörgés után még harminc percig maradj bent. A vihar utolsó villámai a legalattomosabbak, mert akkor már mindenki előjön.":
    "Правило тридцять-тридцять: якщо грім лунає протягом тридцяти секунд, іди в укриття і залишайся всередині ще тридцять хвилин після останнього грому. Останні блискавки грози найпідступніші, бо тоді всі вже виходять надвір.",
  "Add meg a távolságot.":
    "Вкажи відстань.",
  "tartalékkal.":
    "із запасом.",
  ": ebből":
    ": з цього",
  "már sötétben lenne. Vagy indulj hamarabb, vagy vigyél lámpát.":
    "припало б уже на темряву. Або вирушай раніше, або візьми ліхтар.",
  "kilométer":
    "кілометрів",
  "méter emelkedés.":
    "метрів підйому.",
  "Az emelkedés minden hatszáz métere egy órát ad hozzá. Most indulva":
    "Кожні шістсот метрів підйому додають годину. Вирушивши зараз, ти прибув би о",
  "-kor érnél oda.":
    ".",
  "Pihenő nincs benne. Hosszabb úton számolj óránként tíz perccel, és étkezéssel.":
    "Відпочинок не враховано. На довгому шляху рахуй десять хвилин на годину, плюс їжа.",
  "Mérés…":
    "Вимірювання…",
  "nyomás.":
    "натискань.",
  "Forralás (ez a legbiztosabb)":
    "Кип'ятіння (найнадійніше)",
  "Buzgó forrás":
    "Інтенсивне кипіння",
  "— kétezer méter felett vagy, ott hosszabb kell, mert alacsonyabb a forráspont.":
    "— ти вище двох тисяч метрів, там потрібно довше, бо температура кипіння нижча.",
  "Hagyd kihűlni fedő alatt.":
    "Дай охолонути під кришкою.",
  "Ha nem tudsz forralni: hipó":
    "Якщо не можеш кип'ятити: хлорка",
  "vízhez":
    "води",
  "százalékos hipó, ami körülbelül":
    "відсоткової хлорки, що приблизно",
  "Keverd el, várj":
    "Перемішай, зачекай",
  "percet, és utána is enyhén klóros szagúnak kell lennie.":
    "хвилин, і після цього вода має злегка пахнути хлором.",
  "Ha nem érzed a szagot, adj hozzá ugyanennyit, és várj még":
    "Якщо запаху не відчуваєш, додай стільки ж і зачекай ще",
  "Zavaros vizet előbb tisztítsd le. Hagyd ülepedni, majd szűrd át ruhán vagy kávéfilteren. A hipó a lebegő szennyeződésre pazarlódik el, és nem jut a kórokozókra.":
    "Каламутну воду спершу очисти. Дай відстоятися, потім процідь через тканину або кавовий фільтр. Хлорка витрачається на завислі домішки й не дістається до збудників.",
  "Illatosított, sűrített vagy tisztítószeres hipót ne használj. Csak sima nátrium-hipoklorit oldat való bele.":
    "Не використовуй ароматизовану, концентровану чи хлорку з миючими засобами. Підходить лише звичайний розчин гіпохлориту натрію.",
  "Amit ez nem old meg: vegyszer, olaj, növényvédőszer, nehézfém, sóstalanítás. Ezeket sem a forralás, sem a hipó nem távolítja el, a forralás inkább töményíti őket. Ipari terület, út menti árok vagy szántóföld melletti vízzel ne is próbálkozz.":
    "Чого це не вирішує: хімікати, нафтопродукти, пестициди, важкі метали, опріснення. Їх не видаляє ні кип'ятіння, ні хлорка, кип'ятіння їх радше концентрує. З водою біля промзони, з придорожньої канави чи біля поля навіть не пробуй.",
  "A hipó nem öl meg mindent. A Cryptosporidium ellenáll neki. Ha ilyet gyanítasz (állati ürülékkel érintkezett felszíni víz), forralj, vagy használj arra való szűrőt.":
    "Хлорка вбиває не все. Криптоспоридій до неї стійкий. Якщо підозрюєш таке (поверхнева вода, що контактувала з тваринними випорожненнями), кип'яти або використовуй відповідний фільтр.",
  "csempe van eltárolva ezen a készüléken.":
    "тайлів збережено на цьому пристрої.",
  "Ez a kivágás túl nagy:":
    "Цей фрагмент завеликий:",
  "csempe lenne. Nagyíts rá jobban, és úgy töltsd le.":
    "тайлів вийшло б. Збільш масштаб і завантаж так.",
  "csempe letöltése (kb.":
    "завантаження тайлів (прибл.",
  "nagyításon. Folytatod?":
    "на масштабі. Продовжити?",
  "Letöltés…":
    "Завантаження…",
  "Letöltés:":
    "Завантаження:",
  "Kész:":
    "Готово:",
  "nem jött le)":
    "не завантажилося)",
  ". Összesen":
    ". Разом",
  "csempe van eltárolva.":
    "тайлів збережено.",
  "Kilépés a teljes képernyőből":
    "Вийти з повноекранного режиму",
  "Várj, amíg a térkép betölt.":
    "Зачекай, поки завантажиться карта.",
  "Nincs eltárolt csempe.":
    "Немає збережених тайлів.",
  "Törlöd a letöltött térkép-területeket?":
    "Видалити завантажені ділянки карти?",
  "Törölve. A térkép ezután csak online töltődik.":
    "Видалено. Тепер карта завантажуватиметься лише онлайн.",
  "A mikrofon nem indult el:":
    "Мікрофон не запустився:",
  "Vétel leállítása":
    "Зупинити приймання",
  "Vétel fut. Tartsd a hangforráshoz.":
    "Приймання триває. Тримай біля джерела звуку.",
  "sor vétel alatt…":
    "рядків приймається…",
  "Vétel fut, még nincs jel.":
    "Приймання триває, сигналу ще немає.",
  "Vétel leállítva.":
    "Приймання зупинено.",
  "Dekódolás…":
    "Декодування…",
  "sor dekódolva.":
    "рядків декодовано.",
  "Nem találtam SSTV-jelet ebben a felvételben.":
    "У цьому записі не знайдено SSTV-сигналу.",
  "Nem sikerült a kép betöltése.":
    "Не вдалося завантажити зображення.",
  "Kódolás…":
    "Кодування…",
  "Küldés…":
    "Надсилання…",
  "mp) — tartsd a vevő mikrofonjához":
    "с) — тримай біля мікрофона приймача",
  "Kész.":
    "Готово.",
  "Leállítva.":
    "Зупинено.",
  "WAV készítése…":
    "Створення WAV…",
  "WAV letöltve:":
    "WAV завантажено:",
  "Üzenet csak neki:":
    "Повідомлення лише для нього:",
  "kilépett, innentől mindenkinek írsz.":
    "вийшов, відтепер ти пишеш усім.",
  "Zárt üzenet. Ehhez a szoba kulcsa kell.":
    "Закрите повідомлення. Для нього потрібен ключ кімнати.",
  "csak neki":
    "лише йому",
  "csak neked":
    "лише тобі",
  "csak neki:":
    "лише йому:",
  "Az internetes szobákhoz egyszer be kell lépned.":
    "Для інтернет-кімнат потрібно один раз увійти.",
  "Nem vagy bejelentkezve. Töltsd újra a lapot, és add meg a jelszót.":
    "Ти не ввійшов. Онови сторінку і введи пароль.",
  "Jelszó megjelenítése":
    "Показати пароль",
  "Belépés jelszóval":
    "Вхід із паролем",
  "Az e-mail címed és a jelszavad. A telefon megjegyzi, többször nem kell.":
    "Твоя електронна пошта і пароль. Телефон запам'ятає, більше не доведеться.",
  "Belépés e-mailes kóddal (jelszó nélkül)":
    "Вхід із кодом на пошту (без пароля)",
  "Új fiók":
    "Новий обліковий запис",
  "Új jelszó beállítása":
    "Встановити новий пароль",
  "Add meg az e-mail címed, és válassz jelszót (legalább 8 karakter), kétszer. Utána küldünk egy 6 jegyű kódot e-mailben.":
    "Вкажи свою електронну пошту і двічі введи пароль (щонайменше 8 символів). Потім ми надішлемо 6-значний код на пошту.",
  "Jelszó (legalább 8 karakter)":
    "Пароль (щонайменше 8 символів)",
  "Jelszó még egyszer":
    "Пароль ще раз",
  "Vissza a belépéshez":
    "Назад до входу",
  "Írd be a kódot":
    "Введи код",
  "Küldtünk egy 6 jegyű kódot ide:":
    "Ми надіслали 6-значний код на:",
  "Nézd meg a levelezőben (a Spam mappát is), és írd be. 10 percig érvényes.":
    "Перевір пошту (і папку Спам) та введи його. Дійсний 10 хвилин.",
  "6 jegyű kód":
    "6-значний код",
  "Megerősítés":
    "Підтвердити",
  "Elölről":
    "Спочатку",
  "Bejelentkeztél. A telefon megjegyzi.":
    "Ти ввійшов. Телефон запам'ятає.",
  "Ellenőrzés folyamatban…":
    "Перевірка…",
  "Belépés folyamatban…":
    "Вхід…",
  "Küldés folyamatban, pár másodperc…":
    "Надсилання, кілька секунд…",
  "Add meg az e-mail címed és a jelszavad.":
    "Вкажи свою електронну пошту і пароль.",
  "Hibás e-mail cím vagy jelszó.":
    "Неправильна електронна пошта або пароль.",
  "Ha elfelejtetted, nyomd meg az „Elfelejtettem a jelszót\" gombot.":
    "Якщо забув, натисни кнопку «Я забув пароль».",
  "A jelszó legalább 8 karakter legyen.":
    "Пароль має містити щонайменше 8 символів.",
  "A két jelszó nem egyezik. Írd be újra mindkettőt.":
    "Паролі не збігаються. Введи обидва ще раз.",
  "A kód 6 számjegy.":
    "Код — це 6 цифр.",
  "Hibás kód.":
    "Неправильний код.",
  "Nem vagy bejelentkezve.":
    "Ти не ввійшов.",
  "Kiléptél.":
    "Ти вийшов.",
  "nincs kapcsolat":
    "немає з'єднання",
  "Bekapcsolva. Ha valaki ír ide, jelez a telefonod, akkor is, ha az app be van zárva.":
    "Увімкнено. Якщо хтось напише сюди, телефон сповістить, навіть якщо застосунок закритий.",
  "Ha valaki ír ide, jelezzen a telefonod.":
    "Якщо хтось напише сюди, хай телефон сповістить.",
  "Ez a böngésző nem tud értesítést fogadni. Telefonon tedd ki az appot a főképernyőre.":
    "Цей браузер не може отримувати сповіщення. На телефоні додай застосунок на головний екран.",
  "Bekapcsolva. Ha valaki ír ide, jelez a telefonod.":
    "Увімкнено. Якщо хтось напише сюди, телефон сповістить.",
  "Nem adtál engedélyt az értesítéshez. A telefon beállításainál, az alkalmazásnál adhatod meg.":
    "Ти не дав дозволу на сповіщення. Його можна надати в налаштуваннях телефону, у розділі застосунку.",
  "Bekapcsolva. Küldök egy próbát.":
    "Увімкнено. Надсилаю тестове.",
  "Nem adtál engedélyt. A telefon beállításainál később visszaadhatod.":
    "Ти не дав дозволу. Пізніше його можна повернути в налаштуваннях телефону.",
  "a szerver nem adott kulcsot":
    "сервер не видав ключ",
  "a szerver nem fogadta el a feliratkozást":
    "сервер не прийняв підписку",
  "Bekapcsolva. Küldök egy próbát, hogy lásd, tényleg megérkezik.":
    "Увімкнено. Надсилаю тестове, щоб ти побачив, що воно справді приходить.",
  "A próbát a szerver elküldte a Google-nek. Pár másodpercen belül meg kell jelennie a telefon értesítései között, akkor is, ha bezárod az appot.":
    "Сервер надіслав тестове сповіщення в Google. За кілька секунд воно має з'явитися серед сповіщень телефону, навіть якщо закриєш застосунок.",
  "Próba: így jelez majd, ha valaki ír ide.":
    "Тест: так буде сповіщати, коли хтось напише сюди.",
  "Kiküldtem a próbát, nézd meg a telefon értesítései között.":
    "Тестове надіслано, перевір сповіщення телефону.",
  "Nincs engedély az értesítéshez.":
    "Немає дозволу на сповіщення.",
  "Ezen az eszközön nincs bekapcsolva az értesítés.":
    "На цьому пристрої сповіщення не увімкнені.",
  "A próba nem ment ki.":
    "Тестове не надіслалося.",
  "A próbaértesítést a szolgáltató átvette. Ha pár másodpercen belül nem":
    "Сервіс прийняв тестове сповіщення. Якщо за кілька секунд воно не",
  "jelenik meg a telefonodon, akkor a telefon beállításánál akad el, nem az appban.":
    "з'явиться на телефоні, то затримка в налаштуваннях телефону, а не в застосунку.",
  "Nyiss egyet: internet és térerő nélkül, egy hálón":
    "Відкрий кімнату: без інтернету й мобільного зв'язку, в одній мережі",
  "Minden nyelv":
    "Усі мови",
  "Erre a keresésre nincs nyitott szoba.":
    "За цим пошуком немає відкритих кімнат.",
  "Ezen a nyelven most nincs nyitott szoba. Állítsd vissza Minden nyelvre.":
    "Цією мовою зараз немає відкритих кімнат. Повернись до «Усі мови».",
  "indította":
    "створив(ла)",
  "nem vagy tag — koppints a jelentkezéshez":
    "ти не учасник — торкнися, щоб подати заявку",
  "tag olvasta el":
    "учасників прочитали",
  "Elküldve":
    "Надіслано",
  "Még senki nem olvasta el":
    "Ще ніхто не прочитав",
  "Módosítás: írd át, és küldd el. A mező kiürítésével elveted.":
    "Редагування: зміни текст і надішли. Очистивши поле, скасуєш.",
  "Módosítva:":
    "Змінено:",
  "Törlöd ezt az üzenetet? Mindenkinél eltűnik a tartalma, és azoknál is, akik elmentették.":
    "Видалити це повідомлення? Його вміст зникне в усіх, навіть у тих, хто його зберіг.",
  "Törölt üzenet":
    "Видалене повідомлення",
  "(zárt üzenet — kérj új meghívó linket a szoba gazdájától)":
    "(закрите повідомлення — попроси нове посилання-запрошення у власника кімнати)",
  "(zárt üzenet — ez a kulcs nem ehhez a szobához való)":
    "(закрите повідомлення — цей ключ не від цієї кімнати)",
  "(zárt üzenet — nincs meg a kulcs)":
    "(закрите повідомлення — ключа немає)",
  "Rendszerüzenet":
    "Системне повідомлення",
  "Állandó jel — a névtől és a képtől független":
    "Постійна позначка — не залежить від імені та фото",
  "Ehhez a szobához most készült titkosító kulcs. Küldj ÚJ meghívó linket a tagoknak, hogy olvasni tudják az üzeneteidet.":
    "Для цієї кімнати щойно створено ключ шифрування. Надішли учасникам НОВЕ посилання-запрошення, щоб вони могли читати твої повідомлення.",
  "Kapcsolódva.":
    "Під'єднано.",
  "Megszakadt a kapcsolat, újrapróbálom...":
    "З'єднання перервалося, пробую знову...",
  "belépési kérelmet küldött — a fogaskerék mögött döntesz róla.":
    "надіслав(ла) запит на вступ — рішення ухвалюєш за шестернею.",
  "új üzenetet írt.":
    "написав(ла) нове повідомлення.",
  "Kész. A szobák listáján már ez látszik. (":
    "Готово. У списку кімнат тепер видно це. (",
  "Adj nevet a szobának.":
    "Дай назву кімнаті.",
  "Kész, a szoba létrejött. Itt a kódja, és itt tudsz képet feltölteni vagy meghívót küldeni. Ugyanezt később a fogaskerék alatt éred el.":
    "Готово, кімнату створено. Ось її код, тут можна завантажити фото або надіслати запрошення. Те саме пізніше знайдеш за шестернею.",
  "Írd be a szoba kódját.":
    "Введи код кімнати.",
  "Kérelem elküldve. Amíg a gazda jóvá nem hagyja, nem látod az üzeneteket.":
    "Запит надіслано. Поки власник не схвалить, ти не бачиш повідомлень.",
  "Már tag vagy ebben a szobában.":
    "Ти вже учасник цієї кімнати.",
  "Nincs ilyen kódú szoba.":
    "Кімнати з таким кодом немає.",
  "Illeszd be a meghívó linket.":
    "Встав посилання-запрошення.",
  "Ebben nincs meghívó. Másold be a teljes linket.":
    "Тут немає запрошення. Скопіюй посилання повністю.",
  "Beváltom...":
    "Активую...",
  "Kész. A csempén már ez látszik. (":
    "Готово. На плитці тепер видно це. (",
  "Erről a szobáról nem jelez.":
    "Про цю кімнату не сповіщає.",
  "Küldöm...":
    "Надсилаю...",
  "A szoba kódja a vágólapon.":
    "Код кімнати скопійовано.",
  "Nem sikerült a vágólapra tenni. Jelöld ki és másold ki kézzel.":
    "Не вдалося скопіювати. Виділи і скопіюй вручну.",
  "Biztosan törlöd? A szoba MINDENKINEK megszűnik, az üzenetekkel együtt. Ez nem vonható vissza.":
    "Точно видалити? Кімната зникне для ВСІХ разом із повідомленнями. Це не можна скасувати.",
  "Biztosan kilépsz? A szoba a többieknek megmarad, te nem látod tovább.":
    "Точно вийти? Для інших кімната залишиться, а ти її більше не бачитимеш.",
  "A szoba megszűnt.":
    "Кімнату видалено.",
  "Kiléptél a szobából.":
    "Ти вийшов із кімнати.",
  "Nem fért el a tárolóban. Próbálj kisebb képet.":
    "Не вмістилося у сховище. Спробуй менше фото.",
  "Mentve. Igazíthatod a kivágást, majd nyomd meg a Kész gombot.":
    "Збережено. Можеш підправити кадрування, потім натисни Готово.",
  "Mentve. Minden szobában ezen a néven látnak.":
    "Збережено. У всіх кімнатах тебе бачать під цим ім'ям.",
  "Ezt a nevet ebben a szobában már használja valaki. Adj meg másikat.":
    "Це ім'я в цій кімнаті вже хтось використовує. Вкажи інше.",
  "Ez a név szabad ebben a szobában.":
    "Це ім'я в цій кімнаті вільне.",
  "Ezt a nevet már használja valaki ebben a szobában.":
    "Це ім'я в цій кімнаті вже хтось використовує.",
  "Egy embert enged be, és 7 nap múlva lejár.":
    "Впускає одну людину, діє 7 днів.",
  "PrepperPapa meghívó":
    "Запрошення PrepperPapa",
  "Meghívlak a(z) „":
    "Запрошую тебе до кімнати «",
  "\" szobába:":
    "»:",
  "A linket a böngésző CÍMSORÁBA illeszd be, ne a keresőbe.":
    "Встав посилання в АДРЕСНИЙ РЯДОК браузера, а не в пошук.",
  "A vágólapra másolva. Egy embert enged be, és 7 nap múlva lejár.":
    "Скопійовано. Впускає одну людину, діє 7 днів.",
  "Kép csatolva — koppints az elvetéshez":
    "Фото прикріплено — торкнися, щоб скасувати",
  "A csatolt képet elvetettem.":
    "Прикріплене фото скасовано.",
  "Kép csatolva. A Küldéssel megy el.":
    "Фото прикріплено. Надішлеться кнопкою Надіслати.",
  "A módosítás elvetve.":
    "Редагування скасовано.",
  "Módosítva.":
    "Змінено.",
  "Lejárt a módosítási idő (15 perc).":
    "Час на редагування минув (15 хвилин).",
  "A módosítás nem sikerült.":
    "Не вдалося змінити.",
  "Az üzenet nem ment el.":
    "Повідомлення не надіслано.",
  "Ez a meghívó lejárt. Kérj újat attól, aki küldte.":
    "Це запрошення прострочене. Попроси нове в того, хто його надіслав.",
  "Ezt a meghívót már felhasználták. Kérj újat attól, aki küldte.":
    "Це запрошення вже використано. Попроси нове в того, хто його надіслав.",
  "Ismeretlen meghívó. Lehet, hogy hiányzik a link vége.":
    "Невідоме запрошення. Можливо, бракує кінця посилання.",
  "A meghívót most nem sikerült beváltani. Van interneted?":
    "Зараз не вдалося активувати запрошення. У тебе є інтернет?",
  "Küldés: kiválasztasz egy képet, és a telefon hangként játssza le.":
    "Надсилання: вибираєш фото, і телефон відтворює його як звук.",
  "Vétel: a telefon hallgatja a hangot, és soronként rajzolja ki a képet.":
    "Приймання: телефон слухає звук і рядок за рядком малює зображення.",
  "Kép választása: a telefon magától átméretezi a 320x256-os keretre.":
    "Вибір фото: телефон сам підганяє його під рамку 320x256.",
  "Lejátszás: ugyanaz a gomb indít és állít. A WAV a hangot fájlba menti, ha máshogy akarod átvinni.":
    "Відтворення: та сама кнопка запускає і зупиняє. WAV зберігає звук у файл, якщо хочеш передати інакше.",
  "Vétel indítása: ugyanaz a gomb indít és állít. Tartsd a telefont a hangszóró közelébe.":
    "Почати приймання: та сама кнопка запускає і зупиняє. Тримай телефон біля динаміка.",
  "Hangfájlból is megy, ha valaki felvételt küld.":
    "Працює й з аудіофайлу, якщо хтось надішле запис.",
  "A kész képet elmentheted, vagy törölheted és új vételbe kezdhetsz.":
    "Готове зображення можна зберегти або видалити й почати нове приймання.",
  "Forralás":
    "Кип'ятіння",
  "A Szoba zárt csoport, ami interneten át is elérhető: aki messze van, az is beszélget.":
    "Кімната — закрита група, доступна й через інтернет: поспілкуватися може навіть той, хто далеко.",
  "A gemkapoccsal képet csatolsz, a háromszög jellel sürgősnek jelölöd — az pirossal emeli ki mindenkinél.":
    "Скріпкою прикріплюєш фото, знаком трикутника позначаєш як термінове — у всіх воно виділиться червоним.",
  "Egy üzenetet hosszan nyomva tudsz rá emojival válaszolni, elmenteni, a sajátodat módosítani vagy törölni.":
    "Довгим натисканням на повідомлення можна відповісти емодзі, зберегти його, змінити або видалити своє.",
  "A fejlécben a fogaskerék nyitja a szoba beállításait: értesítés, tagok, belépési kérelmek, a szoba kódja.":
    "Шестерня в заголовку відкриває налаштування кімнати: сповіщення, учасники, запити на вступ, код кімнати.",
  "Az üzenetek szövege és képei végponttól végpontig titkosítva mennek: a szerver ezeket nem tudja elolvasni. A neveket, a profilképeket, a szoba képét, a reakciókat és az időpontokat viszont látja.":
    "Текст і зображення повідомлень зашифровані наскрізно: сервер не може їх прочитати. Але він бачить імена, фото профілю, зображення кімнати, реакції та час.",
  "Kezdőlap":
    "Головна",
  "Előbb add meg a neved — így látnak a többiek a szobákban.":
    "Спочатку вкажи своє ім'я — так тебе бачитимуть інші в кімнатах.",
  "Tegyél fel egy profilképet — a neved mellett jelenik meg.":
    "Додай фото профілю — воно з'явиться біля твого імені.",
  "(meg nem volt nyitva a szoba kepernyo)":
    "(екран кімнати ще не був відкритий)",
  "Frissítés keresése…":
    "Перевірка оновлень…",
  "Főoldal":
    "Головна сторінка",
  "Lámpa, vészfény":
    "Ліхтар, аварійне світло",
  "Vészjelzés fény/hang":
    "Сигнал тривоги світлом/звуком",
  "A menüsor — ez mindig elérhető alul":
    "Панель меню — завжди доступна внизу",
  "Félkövér":
    "Жирний",
  "Dőlt":
    "Курсив",
  "Felsorolás":
    "Маркований список",
  "Szerkesztés":
    "Редагування",
  "Most jöhet két befúvás, ha vállalod. Ha nem, folytasd a nyomásokat szünet nélkül.":
    "Зараз два вдихи, якщо готовий. Якщо ні, продовжуй натискання без перерви.",
  // ===== MENTETT uZENETEK a Profilon (2026-10-06) =====
  "Mentett üzenetek":
    "Збережені повідомлення",
  "Amit egy szobában hosszan nyomva elmentettél. A mentés hivatkozás, nem másolat: ha a szerzője törli az üzenetet, innen is eltűnik.":
    "Те, що ти зберіг довгим натисканням у кімнаті. Збереження — це посилання, а не копія: якщо автор видалить повідомлення, воно зникне й звідси.",
  // ===== FAX (SSTV): csak Martin M1 (Fonok dontese, 2026-10-06 21:00) =====
  "Martin M1 mód: 320×256 képpont, egy kép ~114 másodperc. Ez az idő magából az SSTV-ből jön — a kép soronként épül fel hangból, és nem gyorsítható.":
    "Режим Martin M1: 320×256 пікселів, одне зображення — близько 114 секунд. Цей час закладений у самому SSTV: зображення будується рядок за рядком зі звуку, і пришвидшити його не можна.",
  "Küldéshez: a másik eszközön indíts SSTV-vevőt (a mi Fax-vevőnket, vagy pl. Robot36, MMSSTV) Martin M1 módban, és tartsd a hangszórót a mikrofonjához. A VIS-fejléc automatikus, a vevő magától felismeri a módot. Egy kép ~114 másodperc, és ez alatt a hangnak folyamatosnak kell lennie.":
    "Щоб надіслати: на іншому пристрої запусти SSTV-приймач (наш Факс-приймач або, напр., Robot36, MMSSTV) у режимі Martin M1 і піднеси динамік до його мікрофона. Заголовок VIS автоматичний, приймач сам розпізнає режим. Одне зображення — близько 114 секунд, і весь цей час звук має бути безперервним.",
  // ===== SZOBA: szabalyzat, belepesi kerelem, meghivo-bevaltas, profil (2026-10-06) =====
  // A SZABALYZAT JOGI SZOVEG: Istvan irta magyarul, a forditas Marveene -- ATNEZESRE VAR.
  "Szoba-szabályzat és adatkezelés":
    "Правила кімнати та обробка даних",
  "A Szoba zárt, meghívásos közösségi tér.":
    "Кімната — це закритий простір спільноти за запрошеннями.",
  "Nem osztok meg jogsértő tartalmat, más személyes adatát, zaklató üzenetet vagy kereskedelmi, reklám tartalmat.":
    "Я не поширюю протиправний вміст, персональні дані інших людей, повідомлення з переслідуванням, комерційний чи рекламний вміст.",
  "Tilos a fegyver, lőszer, robbanóanyag, kábítószer és bármilyen tiltott áru adásvétele, cseréje vagy közvetítése — ajánlat, kereslet és kapcsolatfelvétel formájában is.":
    "Заборонено продавати, обмінювати чи посередничати зі зброєю, боєприпасами, вибухівкою, наркотиками та будь-якими забороненими товарами — зокрема у вигляді пропозицій, запитів і встановлення контакту.",
  "Tilos fegyver, lőszer, robbanóanyag vagy más veszélyes eszköz készítéséhez, átalakításához útmutatót megosztani, és tilos bármilyen bűncselekményre felbujtani vagy azt megszervezni. A felkészülés, a készletezés, az elsősegély és a rádiózás mint téma ettől természetesen megmarad.":
    "Заборонено поширювати інструкції з виготовлення чи переробки зброї, боєприпасів, вибухівки та інших небезпечних пристроїв, а також підбурювати до злочину чи організовувати його. Підготовка, запаси, перша допомога та радіозвʼязок як теми, звісно, залишаються.",
  "Amit beírok, a szoba többi tagja látja, és el is mentheti — a titkosítás a szervertől védi az üzenetet, a tagoktól nem.":
    "Усе, що я пишу, бачать інші учасники й можуть це зберегти — шифрування захищає повідомлення від сервера, а не від учасників.",
  "A szobát létrehozó gazda felel a szobában folytatott tartalomért: ő dönt a belépésről, ő távolíthat el tagot, és más üzenetét is csak ő törölheti.": "Господар, який створив кімнату, відповідає за її вміст: він вирішує, кого впускати, може видалити учасника, і лише він може видалити чуже повідомлення.",
  "Járművek": "Транспорт",
  "Helyszínek": "Місця",
  "Telefonszám": "Номер телефону",
  "Hajó": "Човен",
  "A gazda bármikor eltávolíthat egy tagot, és bármikor törölheti a szobát — ez minden tag üzenetét visszavonhatatlanul megszünteti.":
    "Господар може будь-коли вилучити учасника й будь-коли видалити кімнату — це безповоротно знищує повідомлення всіх учасників.",
  "Ha kilépek vagy eltávolítanak, a szerver több üzenetet nem ad ki nekem — a készülékemen már meglévők viszont olvashatók maradnak.":
    "Якщо я вийду або мене вилучать, сервер більше не надсилатиме мені повідомлень — але ті, що вже є на моєму пристрої, залишаються читабельними.",
  "A szobában megosztott hely- vagy készlet-adat érzékeny: a saját biztonságomért én felelek.":
    "Дані про місце перебування чи запаси, поширені в кімнаті, є чутливими: за власну безпеку відповідаю я.",
  "A szoba használata saját belátást és felelősséget kíván.":
    "Користування кімнатою вимагає власного розсуду та відповідальності.",
  "16 év alatti csak szülő vagy gondviselő hozzájárulásával csatlakozhat.":
    "Особа до 16 років може приєднатися лише за згодою батьків або опікуна.",
  "A szerver tárolja: a szoba és a tagok nevét, a profilképet, az üzenetek TITKOSÍTOTT tartalmát, a képeket (max 500 kB), a reakciókat és az olvasási jelzéseket.":
    "Сервер зберігає: назву кімнати та імена учасників, фото профілю, ЗАШИФРОВАНИЙ вміст повідомлень, зображення (до 500 кБ), реакції та позначки прочитання.",
  "Ha meghívó linket kaptál, és az böngészőben nyílt meg, másold ide az egészet — innen az app váltja be.":
    "Якщо ти отримав посилання-запрошення і воно відкрилося у браузері, встав його сюди повністю — застосунок активує його.",
  "Meghívó beváltása":
    "Активувати запрошення",
  "Eszköz-diagnosztika":
    "Діагностика пристрою",
  "Értesítés erről a szobáról":
    "Сповіщення про цю кімнату",
  "Ha valaki ír ide, jelezzen a telefonod — akkor is, ha az app be van zárva.":
    "Якщо хтось сюди напише, нехай телефон сповістить — навіть коли застосунок закритий.",
  "Ez a másik út, és szándékosan marad meg. A meghívó link csak ott működik, ahol át is tudod küldeni. A kódot viszont be lehet mondani telefonon vagy rádión, le lehet írni egy papírra, le lehet adni morzével — nyolc karakter, és kész.":
    "Це другий шлях, і він залишається навмисно. Посилання-запрошення працює лише там, куди ти можеш його надіслати. А код можна продиктувати телефоном чи рацією, написати на папері, передати морзянкою — вісім символів, і готово.",
  "Aki a kódot ismeri, kérelmet küld; te döntöd el, beengeded-e. A jóváhagyással a te készüléked adja át neki a szoba kulcsát, a szerver nem látja.":
    "Той, хто знає код, надсилає запит; ти вирішуєш, чи впустити. Під час схвалення твій пристрій передає йому ключ кімнати — сервер його не бачить.",
  "Profil":
    "Профіль",
  "Profilkép":
    "Фото профілю",
  "A neved mellett jelenik meg. Nem kötelező.":
    "Зʼявляється поряд з твоїм імʼям. Не обовʼязково.",
  "Húzd a képet a körben, a csúszkával nagyíts. Csak a körben látszó rész kerül mentésre.":
    "Перетягни зображення в колі, масштабуй повзунком. Зберігається лише видима в колі частина.",
  // TELJES FORDITAS-KOR (Fonok, 2026-10-05 21:36: "az osszes forditas megtortenjen mindenhol")
  "Válaszd ki, mit szeretnél: adást vagy vételt.":
    "Обери, що тобі потрібно: передавання чи приймання.",
  "Morze kulcs":
    "Телеграфний ключ",
  "Kopogás (rács-kód)":
    "Перестукування (тюремна абетка)",
  "72h csomag":
    "Набір на 72 години",
  "Export":
    "Експорт",
  "Egészségügyi adatok":
    "Медичні дані",
  "Nem kötelező, de ebből jön a vészkártyád, és ebből számoljuk, mi kell a csomagba.":
    "Не обов'язково, але звідси формується твоя екстрена картка, і за нею ми рахуємо, що покласти в набір.",
  "Lámpa-üzemidő":
    "Час роботи ліхтаря",
  "Meddig világít egy fejlámpa vagy zseblámpa":
    "Скільки світить налобний або ручний ліхтар",
  "Lámpa-üzemidő: meddig világít":
    "Час роботи ліхтаря: скільки світить",
  "Lámpa vagy fejlámpa":
    "Ліхтар або налобний ліхтар",
  "Üzemmód":
    "Режим",
  "LED / fényerő-osztály":
    "Світлодіод / клас яскравості",
  "LED áramfelvétel (mA)":
    "Споживання світлодіода (мА)",
  "Elem / akku típusa":
    "Тип батарейки або акумулятора",
  "Kapacitás (mAh)":
    "Ємність (мА·год)",
  "Hány elem/akku (párhuzamosan összeadódó kapacitás)":
    "Скільки елементів (при паралельному з'єднанні ємність додається)",
  "A gyártói adat a fényerő NÉVLEGES üzemideje — a valóságban a hideg, az elem életkora és a fokozatos elhalványulás ennél mindig kevesebbet ad. A saját megadásos számításnál a névleges kapacitásból 15 százalékot levonunk erre.":
    "Дані виробника — НОМІНАЛЬНИЙ час роботи за цієї яскравості; насправді холод, вік батарейки та поступове згасання завжди дають менше. У ручному розрахунку ми віднімаємо на це 15 відсотків від номінальної ємності.",
  "Ezt látják a többiek":
    "Це бачать інші",
  "minden szobában":
    "в усіх кімнатах",
  ". Egy nevet használ a rendszer; a szobába lépéskor ezt kérdezi meg, ha még nincs megadva.":
    ". Система використовує одне ім'я; вона запитує його при вході до кімнати, якщо його ще не задано.",
  "Szalag ✕":
    "Стрічка ✕",
  "Saját térképek":
    "Твої карти",
  // Igazitas finomhangolasa (Fonok kerese 2026-10-05 20:52)
  "Finomhangolás":
    "Точне налаштування",
  "Alaphelyzet":
    "Скидання",
  "A saját térkép a helyén van.":
    "Твоя карта на місці.",
  // UJ PONT felvevo a terkepen (Fonok kerese 2026-10-05 20:37)
  "Új pont":
    "Нова точка",
  "Menedék":
    "Укриття",
  "Tűzrakó":
    "Кострище",
  "Veszély":
    "Небезпека",
  "Találkozó":
    "Місце зустрічі",
  "A pont neve":
    "Назва точки",
  "Koppints a térképre újra, ha arrébb tennéd. A pont csak a Mentéssel jön létre.":
    "Торкнися карти ще раз, щоб перемістити. Точка створюється лише при збереженні.",
  // VAD- ES ROVAR-TAVOLTARTO (Fonok kerese 2026-10-05 20:16)
  "Vad- és rovar-távoltartó":
    "Відлякувач звірів і комах",
  "Vadak ellen":
    "Проти звірів",
  "Szúnyogok ellen":
    "Проти комарів",
  "Vad-frekvencia":
    "Частота для звірів",
  "Szúnyog-frekvencia":
    "Частота для комарів",
  "Hz, lassan söprő hang. A legtöbb felnőtt ezt már nem hallja.":
    "Гц, повільно ковзний тон. Більшість дорослих його вже не чує.",
  "Hz, folyamatos hang.":
    "Гц, безперервний тон.",
  "AMIT EZ TUD ÉS AMIT NEM. A telefon hangszórója ilyen magas hangon lényegesen halkabb, mint a vészsípnál, és ezt a készüléked dönti el, nem az app. A szúnyogriasztó ultrahangnak nincs bizonyított hatása, több vizsgálat is eredménytelennek találta. Nagyobb vadnál a bizonyítottan működő eszköz a HANGOS, EMBERI FÜLNEK IS HALLHATÓ zaj, tehát az SOS lap vészsípja, nem ez. Ezt a két gombot akkor használd, ha ki akarod próbálni, és ne építs rá védelmet.":
    "ЩО ЦЕ МОЖЕ І ЧОГО НЕ МОЖЕ. На такому високому тоні динамік твого телефона помітно тихіший, ніж при аварійному свистку, і це вирішує твій пристрій, а не застосунок. Ультразвук проти комарів не має доведеної дії; кілька досліджень визнали його неефективним. Проти великого звіра засіб із доведеною дією — ГУЧНИЙ шум, ЧУТНИЙ І ЛЮДИНІ, тобто свисток на сторінці SOS, а не це. Користуйся цими двома кнопками, якщо хочеш спробувати, і не будуй на них свій захист.",
  "Ne tartsd a füledhez, és ne irányítsd más fülére. Kutya, macska és más házi állat jóval magasabbra hall, mint az ember: nekik ez zavaró lehet akkor is, ha te nem hallod.":
    "Не підноси його до вуха і не спрямовуй у вухо іншому. Собаки, коти та інші домашні тварини чують набагато вище за людину: їх це може турбувати, навіть якщо ти нічого не чуєш.",
  // TERKEP mester-gomb es funkcio-tabla (Fonok kerese 2026-10-05 20:11)
  "Térkép-funkciók":
    "Функції карти",
  "Helyzet és pontok":
    "Положення і точки",
  "Mérés":
    "Вимірювання",
  "Térkép és tároló":
    "Карта і сховище",
  // TERKEP lap: data-i18n kulcsok, amiknek SEM a PP_SZOTAR-ban, SEM itt nem volt forditasa
  "Vissza":
    "Назад",
  "Kész":
    "Готово",
  "Tárolt térkép törlése":
    "Видалити збережену карту",
  "Saját térkép hozzáadása":
    "Додати власну карту",
  "Saját térkép: fotózz le egy turista- vagy katonai térképet, és igazítsd rá az alaptérképre 2–3 ismert pont (falu, csúcs, útkereszteződés) párosításával. A kép rétegként az alaptérkép fölé kerül, átlátszósága állítható, és a készüléken tárolódik, térerő nélkül is megvan. A rajzolt, nem méretarányos térképeknél az igazítás közelítő. A pontjaidat ugyanúgy teszed le, mint eddig: valódi koordinátán tárolódnak, a rétegtől függetlenül.":
    "Своя карта: сфотографуй туристичну або військову карту й накладай її на основну, зіставивши 2-3 відомі точки (село, вершину, перехрестя). Зображення стає шаром над основною картою, його прозорість налаштовується, і воно зберігається на пристрої, тому доступне без зв'язку. На мальованих, не масштабних картах вирівнювання приблизне. Точки ти ставиш як раніше: вони зберігаються в реальних координатах, незалежно від шару.",
  // TERKEP lebego gomb-panel (Fonok kerese 2026-10-05 19:56)
  "Gombok elrejtése":
    "Сховати кнопки",
  "Gombok megjelenítése":
    "Показати кнопки",
  // FAX kep-igazito (Fonok kerese 2026-10-05 19:50): forgatas + zoom + tolas a kereten belul
  "Ez nem papír-fax: egy képet küld hangként, szabványos SSTV módban, amit bármely SSTV-vevő megért. A keret ezért kötött: 320x256 képpont, fekvő. Egy gépelt A4-es laphoz ez kevés, de egy rövid, nagy betűs kézírás olvashatóan átmegy.":
    "Це не паперовий факс: він передає зображення звуком, у стандартному режимі SSTV, який розуміє будь-який приймач SSTV. Тому кадр фіксований: 320x256 пікселів, горизонтальний. Для набраної сторінки A4 цього мало, але коротка записка великим почерком дійде розбірливо.",
  "Forgatás":
    "Повернути",
  "Teljes kép":
    "Усе зображення",
  "Nagyítás":
    "Збільшення",
  "A keretbe eső rész:":
    "Частина в кадрі:",
  "képpont a forrásból":
    "пікселів із вихідного зображення",
  "Húzd a képet a helyére, két ujjal nagyíthatsz, a Forgatás kilencven fokonként fordít. Amit a keretben látsz, pontosan az megy el. A Forgatás és a Teljes kép újra beilleszti a képet a keretbe, onnan tudsz belezoomolni.":
    "Перетягни зображення на місце, зведи два пальці для збільшення, а «Повернути» обертає його на дев'яносто градусів. Те, що ти бачиш у кадрі, саме це й надішлеться. «Повернути» та «Усе зображення» знову вписують картинку в кадр, і звідти можна збільшувати.",
  // FAX (SSTV) -- allo kep kezelese + a ket fax lap feliratai, 2026-10-05 (Fonok: 'ne vesszen el ... egy csomo adat')
  "Fax küldés":
    "Надсилання факсу",
  "Fax vétel":
    "Отримання факсу",
  "Álló kép":
    "Вертикальне зображення",
  "Elforgatva, teljes felbontás":
    "Повернуте, повна роздільність",
  "Egész kép, fekete sávokkal":
    "Усе зображення, з чорними смугами",
  "Kitöltés, a széleket levágja":
    "Заповнити кадр, обрізавши краї",
  "Álló kép elforgatva, teljes felbontás:":
    "Вертикальне зображення повернуте, повна роздільність:",
  "A keretre vágva, a széleit levágta:":
    "Обрізано під кадр, краї зрізано:",
  "Egész kép, fekete sávokkal:":
    "Усе зображення, з чорними смугами:",
  "Egész kép a keretben:":
    "Усе зображення в кадрі:",
  "képpont a 320×256-os keretből":
    "пікселів із кадру 320×256",
  "A saját vételünk egyelőre csak Martin M1-et fejt vissza. A többi mód adásra kész, és egy szabványos SSTV-vevő (Robot36, MMSSTV) veszi, de ezt a telefonod nem tudja magának visszaolvasni.":
    "Наш власний приймач поки декодує лише Martin M1. Інші режими готові до передачі, і стандартний приймач SSTV (Robot36, MMSSTV) їх приймає, але твій телефон поки не може прочитати їх сам.",
  "A fax kerete fekvő, 320x256 képpont, ezt a mód szabványa adja. Álló képnél az elforgatás használja ki a legjobban a keretet, tehát ott veszik el a legkevesebb részlet, a vevő oldalán viszont fordítsd el a telefont. A kitöltés levágja a kép tetejét és alját. Fekvő képnél mindhárom beállítás ugyanazt adja.":
    "Кадр факсу горизонтальний, 320x256 пікселів, так задає стандарт режиму. Для вертикального зображення поворот найкраще використовує кадр, тому втрачається найменше деталей, але на боці приймача поверни телефон. Заповнення обрізає верх і низ зображення. Для горизонтального зображення всі три налаштування дають те саме.",
  "Martin M1 (320×256, ~114 mp)":
    "Martin M1 (320×256, ~114 с)",
  "Martin M2 (320×256, ~58 mp)":
    "Martin M2 (320×256, ~58 с)",
  "Scottie S1 (320×256, ~110 mp)":
    "Scottie S1 (320×256, ~110 с)",
  "Scottie S2 (320×256, ~71 mp)":
    "Scottie S2 (320×256, ~71 с)",
  "Scottie DX (320×256, ~269 mp)":
    "Scottie DX (320×256, ~269 с)",
  // --- KALKULATOR-CSEMPE (2026-08-26, Thomas merese: kilenc tetelbol nyolc angol volt,
  // egy magyar). Kesobb hozzaadott csempe, a szotarbol kimaradt.
  "Számológép": "Калькулятор",
  "Nagy gombok, szalag, memória — kesztyűben és sötétben is": "Великі клавіші, стрічка, пам’ять — навіть у рукавицях і в темряві",

  // --- ATTRIBUTUM-SZOVEGEK (2026-08-26, Istvan). Thomas merte az angol keszlet
  // felvetele kozben: a `placeholder`/`title`/`aria-label` magyarul allt. A fordito
  // MAR bejarja az attributumokat -- ezek a kulcsok hianyoztak a szotarbol.
  // A `pl.` MAGYAR roviditès: nyelvenkent mas (e.g. / z. B. / p. ej. / np. / ex. / напр.),
  // es a tizedesjel is (`1013.2` angolul, `1013,2` a tobbin).
  "Keresés a tételek közt": "Пошук серед позицій",
  "Mégse": "Скасувати",
  "Szalag ürítése": "Очистити стрічку",
  "Visszavonás": "Скасувати дію",
  "a tétel neve": "назва позиції",
  "az eszköz neve": "назва пристрою",
  "hány darab": "скільки штук",
  "kalória egységenként": "калорій на одиницю",
  "mennyiség": "кількість",
  "sor törlése": "видалити рядок",
  "Új lap": "Новий аркуш",
  "Írd be a szöveget, majd koppints a lapra": "Введи текст, потім торкнись аркуша",
  "pl. 15": "напр. 15",
  "pl. 18": "напр. 18",
  "pl. 85": "напр. 85",
  "pl. 500": "напр. 500",
  "pl. 47.4979, 19.0402": "напр. 47.4979, 19.0402",
  "pl. A Rh+": "напр. A Rh+",
  "pl. Anna": "напр. Anna",
  "pl. 1013,2": "напр. 1013,2",
  "pl. 6,5": "напр. 6,5",
  "pl. Feri": "напр. Іван",
  "pl. Otthon": "напр. Дім",
  "pl. SOS Fonok": "напр. SOS Тато",
  "pl. inzulin": "напр. інсулін",

  // --- NYOMTATOTT VESZKARTYA (2026-08-26, Istvan). Thomas merte: a nyomtatott lap
  // angol nyelven is vegig MAGYAR volt. A lap KULON ablakban keszul, tehat a DOM-bejaro
  // fordito nem eri el -- a szoveg a felepiteskor fordul (`ppForditSzoveg` a cardNyomtat-ban).
  "VÉSZKÁRTYA": "ЕКСТРЕНА КАРТКА",
  "CSALÁDI VÉSZKÁRTYA": "СІМЕЙНА ЕКСТРЕНА КАРТКА",
  "Születés:": "Народження:",
  "Allergia:": "Алергія:",
  "Kontakt:": "Контакт:",
  "személyes QR": "особистий QR",
  "családi QR": "сімейний QR",
  "allergia:": "алергія:",
  "gyógyszer:": "ліки:",
  "A böngésző letiltotta az új ablakot. Engedélyezd, és próbáld újra.": "Браузер заблокував нове вікно. Дозволь його і спробуй ще раз.",
  "Nincs profil, amiből kártyát csinálhatnék. A Háztartásnál vedd fel őket.": "Немає профілю, з якого можна зробити картку. Додай їх у Домогосподарстві.",

  // --- Helyszin-tipusok, alap fogalmak ---
  'Otthon': 'Дім',
  'Nyaraló': 'Дача',
  'Hétvégi ház': 'Заміський дім',
  'Garázs': 'Гараж',
  'Lakókocsi': 'Причіп-дача',
  'Jármű': 'Транспорт',
  'Rejtési pont': 'Схованка',
  'Egyéb': 'Інше',
  'egyéb': 'інше',
  'Gépjármű': 'Автомобіль',
  'Autó': 'Авто',
  'Autós': 'Автомобільний набір',
  'Motorkerékpár': 'Мотоцикл',
  'Elektromos bicikli': 'Електровелосипед',
  'Elektromos roller': 'Електросамокат',
  'Utánfutó': 'Причіп',
  '(motoros)': '(моторний)',

  // --- Gyakori gombok, cimkek ---
  'Megnevezés': 'Назва',
  'Név': 'Ім’я',
  'A neved': 'Ваше ім’я',
  'Törlés': 'Видалити',
  'Mentés': 'Зберегти',
  'Mégsem': 'Скасувати',
  'Hozzáadás': 'Додати',
  'Küldés': 'Надіслати',
  'Kilépés': 'Вийти',
  'Csatlakozás': 'Приєднатися',
  'Csatlakozz': 'Приєднайтеся',
  'Csatlakozom': 'Приєднатися',
  'Nincs': 'Немає',
  'Számold ki': 'Обчислити',
  'Kategória': 'Категорія',
  'Cím': 'Адреса',
  'Adat': 'Дані',
  'Beállítások': 'Налаштування',
  'Feloldás': 'Розблокувати',
  'A feloldás': 'Розблокування',
  'Zárolás': 'Заблокувати',
  'Értesítés': 'Сповіщення',
  'Értesítés bekapcsolása': 'Увімкнути сповіщення',
  'Beolvasás kamerával': 'Сканувати камерою',
  'Betöltés fájlból': 'Завантажити з файлу',
  'Fájl kiválasztása és mentés': 'Вибрати файл і зберегти',
  'Kép mentése': 'Зберегти зображення',
  'Kép választása': 'Вибрати зображення',
  'Betűsor másolása': 'Копіювати рядок літер',
  'Hangfájlból': 'З аудіофайлу',
  'English': 'English',

  // --- Fo kepernyok, csempek ---
  'Kommunikáció': 'Зв’язок',
  'Morze': 'Морзе',
  'Fax (SSTV)': 'Факс (SSTV)',
  // 2026-10-19 (kartya 43a80047): "(SSTV)" kivetve; a feloldas a fiokhoz kotott, max. ket keszulek
  "Használati útmutató": "Посібник користувача",
  "Fax": "Факс",
  "Fax: kép átküldése hangban, rádión is. Ugyanaz a gomb indít és állít.": "Факс: передавання зображення у звуці, також через радіо. Та сама кнопка запускає й зупиняє.",
  "A kód a fiókodhoz tartozik, és legfeljebb két készüléken használhatod. A feloldott modulok offline is működnek, semmi nem zár le. Ha kódot kaptál, itt válthatod be.": "Код прив'язаний до твого облікового запису й працює щонайбільше на двох пристроях. Розблоковані модулі працюють і офлайн, нічого не блокується. Якщо ти отримав код, тут можеш його активувати.",
  "Feloldva ✓ A kód a fiókodhoz tartozik, legfeljebb két készüléken.": "Розблоковано ✓ Код прив'язаний до твого облікового запису, щонайбільше на двох пристроях.",
  'Üzenet': 'Повідомлення',
  'Hangüzenet': 'Голосове повідомлення',
  'Digitális üzenet': 'Цифрове повідомлення',
  'Helyi szoba': 'Локальна кімната',
  'Tudástár': 'База знань',
  'Vészkártya': 'Картка екстреної допомоги',
  'Titkos QR': 'Секретний QR',
  'Biblia': 'Біблія',
  'Imádság': 'Молитва',
  'Háztartás': 'Домогосподарство',
  'Alapismeretek': 'Основи',
  'Élelmiszer és víz': 'Їжа та вода',
  'Egészségügy': 'Здоров’я',
  'Háborús övezet': 'Зона бойових дій',
  'SOS': 'SOS',
  'Alaptérkép': 'Базова карта',
  'Irattárca': 'Гаманець документів',
  'Dokumentum': 'Документ',
  'Dokumentumok · nyílt (QR)': 'Документи · відкриті (QR)',
  'Dokumentumok · PIN-zár': 'Документи · PIN-замок',
  'Dokumentumok és adatmentés': 'Документи та резервна копія',
  'Belépési és helyreállítási kódok': 'Коди доступу та відновлення',
  'Belépési kérelmek': 'Запити на приєднання',
  'Gyakorlónap': 'Тренувальний день',
  'Csomaglista személyre és útra': 'Список речей за особою та подорожжю',
  'EDC: a mindennap magadnál hordott felszerelés': 'EDC: спорядження, яке ви носите щодня',

  // --- Haztartas, szemelyek, allatok ---
  'Családtagok': 'Члени родини',
  'Családtag hozzáadása': 'Додати члена родини',
  'Családtag törlése': 'Видалити члена родини',
  'Családtagok · állatok · helyszínek': 'Родина · тварини · місця',
  'Családtagok vészkártyái': 'Картки екстреної допомоги родини',
  'Családi kártya (egy QR)': 'Сімейна картка (один QR)',
  'Családi jelszó': 'Сімейний пароль',
  'Háziállatok': 'Домашні тварини',
  'Háziállat a felkészülésben': 'Домашні тварини в підготовці',
  '+ Új háziállat': '+ Нова тварина',
  '+ Új helyszín': '+ Нове місце',
  'Állat hozzáadása': 'Додати тварину',
  'Állat törlése': 'Видалити тварину',
  'Faj': 'Вид',
  'felnőtt férfi': 'дорослий чоловік',
  'felnőtt nő': 'доросла жінка',
  'gyermek': 'дитина',
  'csecsemő': 'немовля',
  'fiú': 'хлопчик',
  'haszonállat': 'свійська худоба',
  'Helyszín hozzáadása': 'Додати місце',
  'Helyszín törlése': 'Видалити місце',
  'Helyszínek készültsége': 'Готовність за місцями',
  'Ingatlanok és helyszínek': 'Нерухомість і місця',
  'Emelet': 'Поверх',
  'Alapterület (m²)': 'Площа (м²)',
  'GPS koordináta': 'GPS-координати',
  'Hány napra': 'На скільки днів',
  'Kalória': 'Калорії',
  'Meddig elég az élelmed, és mennyi hiányzik': 'На скільки вистачить їжі та чого бракує',
  'Rádió-hatótáv': 'Дальність рації',
  'Meddig hallanak a sávtól és a tereptől függően': 'Як далеко вас чути — залежно від діапазону й місцевості',
  'Kalória: meddig elég az élelmed': 'Калорії: на скільки вистачить їжі',
  'Hány felnőtt?': 'Скільки дорослих?',
  'Hány gyerek? (kb. 12 év alatt)': 'Скільки дітей? (приблизно до 12 років)',
  'Mit csináltok ezekben a napokban?': 'Що ви робитимете в ці дні?',
  'Mi van a készletben?': 'Що є в запасі?',
  '+ Saját tétel hozzáadása': '+ Додати свою позицію',
  'Vagy add meg egyben, ha tudod': 'Або вкажіть загальну кількість, якщо знаєте',
  'összes kilokalória (üresen hagyhatod)': 'усього кілокалорій (можна залишити порожнім)',
  'Mi ez? (pl. szárított hús)': 'Що це? (напр. в’ялене м’ясо)',
  'kcal/egység': 'ккал/одиниця',
  'mennyi': 'скільки',
  'bent maradunk, keveset mozgunk': 'сидимо вдома, мало рухаємось',
  'normál napi ügyintézés': 'звичайний день справ',
  'fizikai munka, gyaloglás': 'фізична робота, ходьба',
  'Rizs': 'Рис',
  'Száraztészta': 'Сухі макарони',
  'Liszt': 'Борошно',
  'Bab, lencse, borsó': 'Квасоля, сочевиця, горох',
  'Zabpehely': 'Вівсяні пластівці',
  'Cukor, méz': 'Цукор, мед',
  'Olaj, zsír': 'Олія, жир',
  'Húskonzerv (400 g)': 'М’ясні консерви (400 г)',
  'Zöldségkonzerv (400 g)': 'Овочеві консерви (400 г)',
  'Tejpor': 'Сухе молоко',
  'Keksz, kétszersült': 'Печиво, сухарі',
  'Csokoládé, müzliszelet': 'Шоколад, злаковий батончик',
  'Rádió: meddig hallanak': 'Рація: як далеко вас чути',
  'Milyen sávon?': 'Який діапазон?',
  'Adóteljesítmény (watt)': 'Потужність передавача (Вт)',
  'Milyen terepen?': 'Яка місцевість?',
  'Milyen magasan van az antennád? (méter)': 'На якій висоті ваша антена? (метри)',
  'És a másiké?': 'А в другого?',
  'Mekkora távolságot szeretnél áthidalni? (km, üresen hagyhatod)': 'Яку відстань хочете перекрити? (км, можна залишити порожнім)',
  'nyílt, sík terep': 'відкрита, рівна місцевість',
  'dombos, hullámos': 'пагорби, хвиляста',
  'erdő, sűrű növényzet': 'ліс, густа рослинність',
  'város, beépített': 'місто, забудова',
  'hegyvidék, völgyben': 'гори, у долині',
  '(db)': '(шт.)',
  '(kg)': '(кг)',
  '(liter/kg)': '(літр/кг)',
  '(egység)': '(одиниця)',
  'Hány napra kell?': 'На скільки днів потрібно?',
  'Hány napra tervezel itt': 'На скільки днів ви плануєте тут',

  // --- Egeszseg, veszkartya ---
  'Vércsoport': 'Група крові',
  'Allergia': 'Алергія',
  'Allergiák': 'Алергії',
  'Gyógyszer': 'Ліки',
  'Gyógyszerek': 'Ліки',
  'Érszorító': 'Джгут',
  'Elsősegélykészlet': 'Аптечка',
  'Elsősegély-készlet': 'Аптечка',
  'Glutén': 'Глютен',
  'Diófélék': 'Горіхи',
  'Földimogyoró': 'Арахіс',
  'Hal / tenger gyümölcsei': 'Риба / морепродукти',
  'Szója': 'Соя',
  'Penicillin': 'Пеніцилін',
  'Darázs- és méhcsípés': 'Укуси ос і бджіл',
  'Kullancsriasztó': 'Засіб від кліщів',
  'Naptej': 'Сонцезахисний крем',
  'CPAP': 'CPAP',
  'Bébiétel': 'Дитяче харчування',
  'Állateledel': 'Корм для тварин',
  'Tisztálkodó eszközök': 'Засоби гігієни',
  'Női higiéniai termékek': 'Жіночі засоби гігієни',

  // --- Keszlet, kategoriak ---
  'Kannás víz': 'Вода в каністрі',
  'Palackos víz': 'Вода в пляшках',
  'kannás víz': 'вода в каністрі',
  'palackos víz': 'вода в пляшках',
  'Száraz élelmiszer': 'Сухі продукти',
  'száraz élelmiszer': 'сухі продукти',
  'Konzerv': 'Консерви',
  'MRE pack': 'Сухпайок MRE',
  'Romlandó': 'Швидкопсувне',
  'romlandó': 'швидкопсувне',
  'Hosszú távú': 'Довготривале',
  '30 napos': '30-денний',
  '72 órás': '72-годинний',
  'Menekülőzsák': 'Тривожна валіза',
  'Téli túra': 'Зимовий похід',
  'Vízi túra': 'Водний похід',
  'Vízitúra': 'Водний похід',
  'Őszi túra': 'Осінній похід',
  'Nyári túra': 'Літній похід',
  'Hálózsák': 'Спальний мішок',
  'Derékalj': 'Каремат',
  'Párna': 'Подушка',
  'Sátor/sátorlap': 'Намет / тент',
  'Fejlámpa': 'Налобний ліхтар',
  'Kézilámpa': 'Кишеньковий ліхтар',
  'Munkalámpa': 'Робоча лампа',
  'Szikravető': 'Кресало',
  'Gyújtós': 'Розпалювання',
  'Főzőfej': 'Пальник',
  'Spiritusz égő': 'Спиртівка',
  'Hobokályha': 'Пічка-щіпочниця',
  'Fa tüzelésű kályha': 'Дров’яна піч',
  'Dízel kályha': 'Дизельна піч',
  'Vegyi melegítő': 'Хімічна грілка',
  'Ágyfűtés': 'Обігрів ліжка',
  'Gázpalack': 'Газовий балон',
  'Tüzifa': 'Дрова',
  'tüzifa': 'дрова',
  'Fűtőolaj': 'Пічне паливо',
  'fűtőolaj': 'пічне паливо',
  'gázpalack': 'газовий балон',
  'Fa, kályhában': 'Дрова, у печі',
  'Hideg időjárási öltözet': 'Одяг для холодної погоди',
  'Meleg időjárási öltözet': 'Одяг для теплої погоди',
  'Esőkabát': 'Дощовик',
  'EDC csomag felszerelései': 'Вміст EDC-набору',
  'Víztisztító tabletta': 'Таблетки для очищення води',
  'Vízszűrő': 'Фільтр для води',
  'Ciszterna': 'Цистерна',
  'Esővíz': 'Дощова вода',
  'Esővíz: mennyi gyűlik össze': 'Дощова вода: скільки збереться',
  'Hűtő': 'Холодильник',
  'hátizsák': 'рюкзак',
  'háziállat': 'домашня тварина',
  'saját gyógyszer': 'власні ліки',
  'üzemanyag-készlet': 'запас палива',
  'üzemanyag (mobilitás)': 'паливо (мобільність)',
  'bébiétel': 'дитяче харчування',
  'helyszín': 'місце',
  '1 készlet': '1 набір',

  // --- Aram, energia ---
  'Áram': 'Електроенергія',
  'Áramforrás': 'Джерело живлення',
  'Áram: mit tudsz róla üzemeltetni, és meddig': 'Живлення: що можна від нього живити і як довго',
  'Powerbank': 'Павербанк',
  'Power station': 'Зарядна станція',
  'Tank / akku': 'Бак / акумулятор',
  'Kapacitás (Wh/db)': 'Ємність (Вт·год/шт)',
  'Autó-/szünetmentes akku 100 Ah': 'Автомобільний / ДБЖ акумулятор 100 А·год',
  'Szolárpanel': 'Сонячна панель',

  // --- uzemanyag, futes ---
  'Üzemanyag': 'Паливо',
  'Üzemanyag (mobilitás)': 'Паливо (мобільність)',
  'Üzemanyag-készlet': 'Запас палива',
  'benzin': 'бензин',
  'dízel': 'дизель',
  'Fogyasztás (/100 km)': 'Витрата (/100 км)',
  'Most mennyi van benne': 'Скільки зараз усередині',
  'tele': 'повний',
  'háromnegyed': 'три четверті',
  'fele': 'половина',
  'negyede': 'четверть',
  'ötöde': 'п’ята частина',
  'tizede': 'десята частина',
  'üres': 'порожній',
  'Fűtés': 'Опалення',
  'fűtés kevés': 'опалення недостатнє',
  'Fűtés áram nélkül is?': 'Опалення і без електрики?',
  'Fűtés hatásfoka (%)': 'ККД опалення (%)',
  'Fűtés: mennyi tüzelő kell': 'Опалення: скільки палива потрібно',
  'Fűtött terület (m²)': 'Опалювана площа (м²)',
  'Átlagos (100 W/m²)': 'Середнє (100 Вт/м²)',
  'igen (kandalló, kályha, fa)': 'так (камін, піч, дрова)',
  'igen (kút kézi szivattyúval, ciszterna)': 'так (криниця з ручним насосом, цистерна)',
  'nem (csak árammal/gázzal)': 'ні (лише електрика/газ)',
  'Energia (kcal/100 g)': 'Енергія (ккал/100 г)',
  'Emelkedés összesen (m)': 'Загальний підйом (м)',
  'A hipó töménysége (nézd meg az üvegen)': 'Концентрація хлору (перевірте на пляшці)',
  '10% (ipari)': '10% (промисловий)',

  // --- A kockazatelemzes futes-blokkja ---
  'Fűtés:': 'Опалення:',
  '— ennyi jut ténylegesen a fűtésbe,': '— саме стільки фактично йде на опалення,',
  'Nyers tüzelő:': 'Сире паливо:',
  '(tüzifa, fűtőolaj és gázpalack együtt) — ebből a berendezés':
    '(дрова, пічне паливо і газовий балон разом) — з цього пристрій віддає',
  '%-ot ad át': '%',
  'Napi fűtésigény:': 'Добова потреба в опаленні:',
  'a helyszín típusa szerint': 'за типом місця',
  'kézzel megadott': 'введено вручну',
  'Víz:': 'Вода:',
  'Élelem:': 'Їжа:',
  'Élelmiszer:': 'Продукти:',
  'Áram:': 'Електроенергія:',
  'Víz': 'Вода',
  'Étel': 'Їжа',
  'nincs megmérve': 'не виміряно',
  'nincs ide rendelt áramforrás': 'до цього місця не призначено джерела живлення',
  '— a szükséglet': '— потреба була б',
  'lenne': '',
  'napra': 'днів',
  'fő': 'осіб',
  'A gyűrű a vízre és az élelemre vonatkozik: a gyengébbiket mutatja.':
    'Кільце стосується води та їжі: показує слабшу з двох.',
  'A leggyengébb': 'Найслабша ланка',
  'A gyűrű a jelen lévő típusok átlagát mutatja, a színe a leggyengébbet.':
    'Кільце показує середнє значення наявних типів; його колір показує найслабший.',
  'Leggyengébb:': 'Найслабше:',
  '— a készültség ezt mutatja, mert a hiányzó láncszem dönt.':
    '— готовність показує саме це, бо вирішує відсутня ланка.',
  'élelem': 'їжа',
  'víz': 'вода',
  'nincs ide rendelt készlet': 'запас не призначено',
  'nincs megadva, ki jön': 'не вказано, хто прибуде',
  'itteni élelmiszernél hiányzik a súly vagy az energia (kcal/100 g), ezért nem számít bele. Nyisd meg a tételt a Készletnél, és írd be a doboz adatait.':
    'продуктів тут не мають ваги або енергії (ккал/100 г), тому вони не враховані. Відкрийте позицію в Запасі та введіть дані з упаковки.',

  // --- Morze, hang, feny ---
  'Hang:': 'Звук:',
  'Hangerő:': 'Гучність:',
  'Hangmagasság:': 'Висота тону:',
  'Fényerő:': 'Яскравість:',
  'Fehér': 'Білий',
  'hang és fény, hálózat nélkül': 'звук і світло, без мережі',
  'Ha nem indul a kamera.': 'Якщо камера не запускається.',
  'Internet nem kell.': 'Інтернет не потрібен.',
  'A szoba képe': 'Зображення кімнати',
  'A szoba kódja': 'Код кімнати',
  'A szoba kulcsa': 'Ключ кімнати',
  'Helyzet (GPS)': 'Позиція (GPS)',
  'Helyzetem küldése': 'Надіслати мою позицію',
  'A mostani helyzetem': 'Моя поточна позиція',
  'Helymeghatározás…': 'Визначення місця…',
  'Szöveg': 'Текст',
  'Sebesség:': 'Швидкість:',
  'Ismétlés (folyamatos)': 'Повтор (безперервно)',
  'Lejátszás': 'Відтворити',
  'Képernyő': 'Екран',
  'Vaku': 'Спалах',
  'Mindkettő': 'Обидва',
  'Mód': 'Режим',
  'Kép': 'Зображення',
  'Kódolás és lejátszás': 'Кодувати і відтворити',
  'Vétel indítása': 'Почати приймання',
  'Kamera vétel indítása': 'Почати приймання камерою',
  'Mikrofon vétel indítása': 'Почати приймання мікрофоном',
  'Vétel: KAMERA (fény → szöveg)': 'Приймання: КАМЕРА (світло → текст)',
  'Vétel: MIKROFON (hang → szöveg)': 'Приймання: МІКРОФОН (звук → текст)',
  'Vétel (hang → kép)': 'Приймання (звук → зображення)',
  'Nagyítás (távoli fényhez):': 'Збільшення (для віддаленого світла):',
  'Telepítés a kezdőképernyőre': 'Встановити на головний екран',
  'ÜTEM INDÍTÁSA': 'ЗАПУСТИТИ РИТМ',
  "Vétel sebesség (magától követi a jelet, kézzel is állíthatod):": "Швидкість приймання (сама стежить за сигналом, можна задати й вручну):",
  "Vétel-sebesség: magától követi a vett Morze tempóját, és a csúszkát is odaállítja. Kézzel is állíthatod, onnan követi tovább.": "Швидкість приймання: сама стежить за темпом прийнятої морзянки й пересуває повзунок. Можна задати й вручну; далі вона стежить від цього значення.",
  'Vétel sebesség (állítsd a vett Morze tempójához):':
    'Швидкість приймання (налаштуйте під темп прийнятої морзянки):',
  'Érzékenység (balra érzékenyebb, jobbra szigorúbb a zajra):':
    'Чутливість (ліворуч — чутливіше, праворуч — суворіше до шуму):',
  'Villogtatás (Lejátszás és SOS is):': 'Блимання (і Відтворення, і SOS):',

  // --- Tudastar temanevek ---
  'Készletezés': 'Створення запасів',
  'Menedék és tábor': 'Укриття і табір',
  'Városi túlélés': 'Виживання в місті',
  'Tájékozódás és mozgás': 'Орієнтування і рух',
  'Jelek és időjárás olvasása': 'Читання знаків і погоди',
  'Közlekedés és mobilitás': 'Транспорт і мобільність',
  'Lelki felkészültség': 'Психологічна готовність',
  'Tartós áramszünet': 'Тривале відключення світла',
  'Tűzvédelem otthon': 'Пожежна безпека вдома',
  'Pénz és megélhetés': 'Гроші та засоби для життя',
  'Víznyerés és víztisztítás': 'Добування і очищення води',
  'Mikro-önellátás': 'Мікро-самозабезпечення',

  // --- Keszlet-tetel urlap ---
  'Új tétel': 'Нова позиція',
  'Mennyiség': 'Кількість',
  'Összes hely': 'Усі місця',
  'Távolság mérése': 'Вимірювання відстані',
  'Mit vigyek': 'Що взяти',
  'Betöltés…': 'Завантаження…',
  'Adj nevet a dokumentumnak.': 'Дайте документу назву.',
  'Törölve.': 'Видалено.',
  'jelentkezés elküldve': 'заявку надіслано',
  'a gazda nem engedett be': 'власник не впустив',
  'jóváhagyásra vár': 'очікує підтвердження',
  'még egyedül': 'поки що самі',
  'te indítottad': 'ви створили',
  'névtelen': 'без імені',
  'zárt': 'закрито',
  'Feloldás': 'Розблокувати',
  'Bővített tudástár': 'Розширена база знань',
  'A tudástár üres.': 'База знань порожня.',
  'A tudástár betöltése folyamatban…': 'База знань завантажується…',

  // --- MARKANEVEK ES MERTEKEGYSEGEK: valtozatlanul mennek at ---
  // Azert allnak MEGIS a szotarban, mert kulonben a mero HIANYKENT jelzi oket, es a
  // "mi van meg hatra" szam hasznalhatatlan lesz. Ugyanez a rend az `en.js`-ben.
  'Anker 521 PowerHouse (256 Wh)': 'Anker 521 PowerHouse (256 Вт·год)',
  'Bluetti AC200L (2048 Wh)': 'Bluetti AC200L (2048 Вт·год)',
  'Bluetti EB70 (716 Wh)': 'Bluetti EB70 (716 Вт·год)',
  'EcoFlow Delta 2 (1024 Wh)': 'EcoFlow Delta 2 (1024 Вт·год)',
  'EcoFlow River 2 (256 Wh)': 'EcoFlow River 2 (256 Вт·год)',
  'EcoFlow River 2 Pro (768 Wh)': 'EcoFlow River 2 Pro (768 Вт·год)',
  'Powerbank 20 000 mAh (~74 Wh)': 'Павербанк 20 000 мА·год (~74 Вт·год)',
  'Martin M1 (320×256, működik)': 'Martin M1 (320×256, працює)',
  'Robot36 (hamarosan)': 'Robot36 (незабаром)',
  'Scottie S1 (hamarosan)': 'Scottie S1 (незабаром)',
  'PD120 (hamarosan)': 'PD120 (незабаром)',
  'WPM': 'WPM',
  'Hz': 'Гц',
  '5% nátrium-hipoklorit (a szokásos háztartási)': '5% гіпохлорит натрію (звичайний побутовий)',

  // --- Imak, lelki resz ---
  'Iratai az Irattárcában': 'Їхні документи в гаманці документів',
  'Amikor akut helyzetben kell döntened': 'Коли треба вирішувати в гострій ситуації',
  'Amikor éjszaka nem hagy aludni a félelem': 'Коли страх не дає спати вночі',
  'Gyerekekkel és idősekkel': 'З дітьми та літніми',
  'Megtérő ima': 'Молитва покаяння',
  'Vészhelyzeti igék': 'Вірші для надзвичайних ситуацій',
  'Próféciák': 'Пророцтва',
  'Kiemeléseim': 'Мої виділення',
  'A kiemeléseidhez előbb töltsd le a Bibliát.': 'Спочатку завантажте Біблію, щоб побачити виділення.',
  'Biblia letöltése': 'Завантажити Біблію',
  '‹ Fejezetek': '‹ Розділи',
  '‹ Előző': '‹ Попередній',
  'Következő ›': 'Наступний ›',

  // --- Biztonsag, PIN, token ---
  'Amit a rendszer garantál:': 'Що система гарантує:',
  'Amit nem garantál:': 'Чого вона не гарантує:',
  'PIN beállítása': 'Встановити PIN',
  'Állíts be egy PIN-t (4-6 számjegy)': 'Встановіть PIN (4-6 цифр)',
  'Új PIN (4-6 számjegy)': 'Новий PIN (4-6 цифр)',
  'TESZT ÜZEMMÓD: a PIN most': 'ТЕСТОВИЙ РЕЖИМ: PIN зараз',
  'Ezen a készüléken még nincs feloldott modul.': 'На цьому пристрої ще немає розблокованих модулів.',
  'Token tárca': 'Гаманець токенів',
  'Rekesz': 'Відділення',
  'Kripto-kulcsok': 'Криптоключі',
  'Kód beváltása': 'Використати код',
  'véglegesen': 'остаточно',
  'Súgó — hogyan fizetek, hogyan kérek': 'Довідка — як платити, як запитувати',
  'Fizetés, három lépés.': 'Оплата, три кроки.',
  'Ő beolvassa ezt a QR-t.': 'Він сканує цей QR.',
  'Pénzkérés.': 'Запит грошей.',
  'Miért két beolvasás?': 'Чому два сканування?',
  'QR-kód generálása': 'Створити QR-код',
  'Mind nyomtatása': 'Друкувати всі',
  'Letöltés': 'Завантажити',

  // --- Keszlet-tetel urlap ---
  'Mennyiség (db)': 'Кількість (шт)',
  'Súly (gramm/db)': 'Вага (грамів/шт)',
  'Vonalkód / QR beolvasása': 'Сканувати штрихкод / QR',
  'Lejárat (opcionális)': 'Термін придатності (необов’язково)',
  'Lejárat': 'Термін придатності',
  'Tétel adatlapja': 'Картка позиції',
  'Tétel törlése': 'Видалити позицію',
  '+6 hónap': '+6 місяців',
  '+1 év': '+1 рік',
  '+2 év': '+2 роки',
  '+5 év': '+5 років',

  // --- Terkep ---
  'Térkép': 'Карта',
  'Turista / domborzat': 'Туристична / рельєф',
  'Műhold': 'Супутник',
  'Pont ide, ahol vagyok': 'Точка тут, де я є',
  'Terület letöltése': 'Завантажити ділянку',
  'Pontok kimentése': 'Експортувати точки',
  'állsz': 'ви стоїте',
  ', ahová a pont való, a': ', куди належить точка,',
  'É': 'Пн',

  // --- Veszkartya, egeszseg ---
  'Rendszeres gyógyszerek': 'Регулярні ліки',
  'Rendszeres gyógyszer': 'Регулярні ліки',
  'Krónikus betegségek': 'Хронічні захворювання',
  'Krónikus betegség': 'Хронічне захворювання',
  'Vészhelyzeti kontakt (név, telefon)': 'Екстрений контакт (ім’я, телефон)',
  'Laktóz': 'Лактоза',
  'Tojás': 'Яйце',
  'Pollen': 'Пилок',
  'Poratka': 'Пиловий кліщ',
  'Latex': 'Латекс',
  'Jód': 'Йод',

  // --- Haztartas urlapok ---
  'Még nincs családtag felvéve.': 'Ще не додано членів родини.',
  'Még nincs állat felvéve.': 'Ще не додано тварин.',
  'Születési dátum': 'Дата народження',
  'Ki ő': 'Хто це',
  'kiskorú': 'неповнолітній',
  'Neme (gyereknél)': 'Стать (для дитини)',
  'lány': 'дівчинка',
  'kutya': 'пес',
  'macska': 'кіт',
  'Teherbírás (kg)': 'Навантаження (кг)',
  'Testtömeg (kg)': 'Вага тіла (кг)',
  'Típus': 'Тип',
  'Megközelítés': 'Доступ',
  'Víz áram nélkül is?': 'Вода і без електрики?',
  'nem (vezetékes/szivattyús)': 'ні (водопровід / насос)',
  'Napi fűtésigény (kWh)': 'Добова потреба в опаленні (кВт·год)',
  'Kijáratok száma': 'Кількість виходів',

  // --- Csempek, navigacio ---
  'Több': 'Більше',
  'Morze · fax · helyi szoba': 'Морзе · факс · локальна кімната',
  'Kockázatelemzés': 'Аналіз ризиків',
  'Mit vigyek?': 'Що взяти?',
  'Titkosított üzenet · helyzet · lista': 'Зашифроване повідомлення · позиція · список',
  'Két mérés kell a trendhez.': 'Для тренду потрібні два вимірювання.',
  'Névjegy': 'Про застосунок',
  'PrepperPapa — vészhelyzeti prepper eszköztár.': 'PrepperPapa — набір інструментів для надзвичайних ситуацій.',
  'Verzió:': 'Версія:',
  'Magyar': 'Угорська',
  'Új dokumentum': 'Новий документ',
  'Új bejegyzés': 'Новий запис',
  'Szűrés: kinek az iratait mutassuk': 'Фільтр: чиї документи показати',
  'Kié (üresen hagyva: közös)': 'Чиє (порожньо: спільне)',
  'Melyik készlethez tartozik (több is lehet)': 'До якого запасу належить (можна кілька)',
  'Tárolási hely (több is lehet)': 'Місце зберігання (можна кілька)',
  'A koordináta többféle alakban mehet:': 'Координату можна вказати в різних форматах:',
  'szekcióban.': 'розділі.',
  'halvány': 'тускле',
  'erős': 'яскраве',
  'az üvegről olvasd le': 'прочитайте з пляшки',

  // --- Kalkulatorok ---
  'Kalkulátor': 'Калькулятор',
  'Meddig visz el egy powerbank vagy egy akku': 'Наскільки вистачить павербанка або акумулятора',
  'Mennyi fa vagy gáz kell N napra': 'Скільки дров або газу потрібно на N днів',
  'Mennyi gyűlik össze a tetőről': 'Скільки збереться з даху',
  'Menetidő': 'Час у дорозі',
  'Meddig tart gyalog, és odaérsz-e világosban': 'Скільки триває пішки і чи дійдете завидна',
  'Villám': 'Блискавка',
  'Milyen messze van a vihar': 'Наскільки далеко гроза',
  'Víztisztítás': 'Очищення води',
  'Mennyi hipó kell, és meddig kell forralni': 'Скільки хлору потрібно і як довго кипʼятити',
  'Mennyi víz': 'Скільки води',
  'Milyen a víz': 'Яка вода',
  'Tiszta, átlátszó': 'Чиста, прозора',
  'Zavaros, hideg vagy színes': 'Мутна, холодна або кольорова',
  'Tengerszint feletti magasság (méter)': 'Висота над рівнем моря (метрів)',
  'Saját / kézi megadás': 'Власне / вручну',
  'Kapacitás (Wh)': 'Ємність (Вт·год)',
  'Max. teljesítmény (W)': 'Макс. потужність (Вт)',
  'Mit üzemeltetnél? (hány darab · watt · naponta mennyit)': 'Що б ви живили? (скільки штук · Вт · скільки на добу)',
  'nem használom': 'не використовую',
  'negyed óra': 'чверть години',
  'fél óra': 'півгодини',
  '1 óra': '1 година',
  '2 óra': '2 години',
  '3 óra': '3 години',
  '4 óra': '4 години',
  '5 óra': '5 годин',
  '6 óra': '6 годин',
  '8 óra': '8 годин',
  '10 óra': '10 годин',
  '12 óra': '12 годин',
  '16 óra': '16 годин',
  'egész nap': 'цілий день',
  'Telefon töltés': 'Заряджання телефону',
  'LED lámpa': 'LED-лампа',
  'Wifi router': 'Wi-Fi роутер',
  'Rádió, PMR': 'Радіо, PMR',
  'Laptop': 'Ноутбук',
  'TV': 'Телевізор',
  'Szivattyú, kút': 'Насос, криниця',
  'Vízforraló': 'Електрочайник',
  'Van napelemed?': 'Маєте сонячну панель?',
  'Melyik évszakban?': 'У яку пору року?',
  'Milyen idő van?': 'Яка погода?',
  'A panel névleges teljesítménye (W)': 'Номінальна потужність панелі (Вт)',
  '+ Saját eszköz hozzáadása': '+ Додати свій пристрій',
  'Mi ez? (pl. oxigénkoncentrátor)': 'Що це? (напр. кисневий концентратор)',
  'Megnézem a boltban ↗': 'Подивитися в магазині ↗',
  'nyár (június-augusztus)': 'літо (червень-серпень)',
  'tavasz (március-május)': 'весна (березень-травень)',
  'ősz (szeptember-november)': 'осінь (вересень-листопад)',
  'tél (december-február)': 'зима (грудень-лютий)',
  'derült, napos': 'ясно, сонячно',
  'változó, felhős': 'мінливо, хмарно',
  'borult, esős': 'похмуро, дощово',
  'nincs napelem': 'немає панелі',
  'saját panel — megadom a wattot': 'власна панель — вкажу вати',
  'Panel': 'Панель',
  'Milyen a ház': 'Який будинок',
  'Jól szigetelt (60 W/m²)': 'Добре утеплений (60 Вт/м²)',
  'Rossz, régi (140 W/m²)': 'Поганий, старий (140 Вт/м²)',
  'Mivel fűtesz': 'Чим ви опалюєте',
  'PB-gáz palackkal': 'Газовим балоном',

  // -------------------------------------------------------------------------
  // 2026-08-24: A HIANYZO 634 KULCS POTLASA (az `en.js`-hez kepest mert kulonbseg).
  //
  // A LISTA FORRASA MERES, NEM ATOLVASAS: az `en.js` es az `uk.js` kulcshalmazanak
  // kulonbsege (`en` 1097, `uk` 471 -> 634 hianyzo). Ugyanez a meres a zaras
  // bizonyiteka is: utana a ket halmaz kulonbsege NULLA.
  //
  // AZ oT BIBLIAI IGEVERS 2026-08-24 12:0x OTA A KIADOTT SZoVEGBoL VAN, NEM ToLEM.
  // Forras 2026-10-18 ota: Kulis-Puljuj-forditas 1903-1905 (`kulish.json`, eBible.org ukr1871, kozkincs; kartya
  // 0b1fa38d), szo szerint masolva. A KORABBI Ogijenko-szoveg (†1972, az EU-ban vedett lehet) kikerult. A Kulis
  // HEBER/KJV szamozasu, a zsoltarcim az 1. versben all: Karoli Zsolt 46,2-3 = Kulis Псалми 46:1-2.
  // (Az alabbi 2026-08-24-i jegyzet az Ogijenko szamozasarol szol, tortenetnek maradt.)
  //
  // **ES ITT DoLT KI EGY SAJAT TEVEDESEM, amit delelott meg ALLITOTTAM:** azt irtam, hogy a
  // zsoltar-szamozas CSAK az orosznal tolodik el. **Az ukrannal is:** a Karoli "Zsoltarok 46,2"
  // az Ogijenkoban **Псалми 45:1** -- az Ogijenko is a gorog-szlav szamozast koveti (a
  // Zsoltarok konyve nala 151 fejezet). A delelotti `Псалми 46:2-3` tehat KETSZERESEN teves
  // volt: rossz fejezet ES rossz verssor.
  // **AMI EZT ELoHOZTA: nem az ujraolvasas, hanem a MERES** -- rakerestem a mondat kezdetere
  // a letoltott fajlban, es megneztem, hanyadik helyen all. A hagyomanyra hagyatkozva
  // ("a szlav szamozas az oroszban tolodik el") ugyanezt a hibat irtam volna le megegyszer.
  // -------------------------------------------------------------------------
  "Amit vészhelyzetben tudni kell róla (nem kötelező)": "Що потрібно знати про цю особу в надзвичайній ситуації (необов'язково)",
  "Ez a közös titok. Aki ismeri, az olvassa a kódjaidat, aki nem, annak értelmetlen betűsor. Add meg ugyanazt a jelszót azon a készüléken is, amelyik olvasni fogja.": "Це спільна таємниця. Хто її знає, той читає твої коди; для решти це безглуздий набір літер. Введи той самий пароль і на тому пристрої, який їх читатиме.",
  "Ezt látják a többiek. Ugyanaz, mint a helyi szobában.": "Це бачать інші. Те саме, що й у локальній кімнаті.",
  "Előbb vedd fel a Háztartásnál, kik vagytok — a lista onnan jön.": "Спершу додай у розділі «Домогосподарство», хто ви — список береться звідти.",
  "Előbb vedd fel a Háztartásnál, kik vagytok. A lista abból dolgozik.": "Спершу додай у розділі «Домогосподарство», хто ви. Список працює з цих даних.",
  "Előbb vegyél fel helyszínt a Háztartásnál. Alapesetben az otthon az első.": "Спершу додай локацію в розділі «Домогосподарство». За замовчуванням дім іде першим.",
  "A törlés itt van, nem a listában — hogy ne lehessen véletlenül megnyomni.": "Видалення тут, а не в списку — щоб не можна було натиснути випадково.",
  "A mentős beolvashatja. Az adat a QR-ben van, nem megy szerverre.": "Медик може відсканувати. Дані в QR-коді, на сервер не надсилаються.",
  "Egészségügyi vészhelyzeti adatok. A mentős beolvashatja (nyílt QR). Helyben tárolva.": "Медичні дані для надзвичайних ситуацій. Медик може відсканувати (відкритий QR). Зберігаються локально.",
  "Egészségügyi adatok (nem kötelező, de ebből tudjuk, mi kell a csomagba)": "Медичні дані (необов'язково, але з них ми знаємо, що потрібно покласти в набір)",
  "Allergia (koppints, amennyi kell — a mezőbe írja be, ott át is írhatod)": "Алергія (торкайся стільки разів, скільки треба — записується в поле, там можна й змінити)",
  "Három rövid jel, szünet, ismétlés — ez a nemzetközi vészjelzés. Hangosabban és tovább hallatszik, mint a kiabálás.": "Три короткі сигнали, пауза, повтор — це міжнародний сигнал лиха. Чути гучніше й далі, ніж крик.",
  "A kód alatti betűsor UGYANEZ az adat. Faxon a képet küldd, morzével a betűsort.": "Рядок літер під кодом — ЦЕ ТІ САМІ дані. Факсом надсилай зображення, азбукою Морзе — рядок літер.",
  "A lejátszás ugyanazzal a gombbal indul és áll. Nincs külön Állj gomb — ha újra rákoppintasz, leáll.": "Відтворення запускається і зупиняється тією ж кнопкою. Окремої кнопки «Стоп» немає — торкнися ще раз, і воно зупиниться.",
  "A wattóra és a watt nem ugyanaz, és ezt szokás összekeverni.": "Ват-година і ват — це не те саме, і їх часто плутають.",
  "A wattóra (Wh) azt mondja meg, MEDDIG megy; a watt (W) azt, hogy MIT tudsz egyáltalán ráakasztani. Egy 2000 wattórás gép sem indít el egy 2000 wattos vízforralót, ha csak 600 wattot tud leadni — akkor sem, ha tele van.": "Ват-година (Вт·год) каже, ЯК ДОВГО працюватиме; ват (Вт) — ЩО ти взагалі можеш під'єднати. Навіть пристрій на 2000 ват-годин не запустить чайник на 2000 ват, якщо здатен віддати лише 600 ват — навіть повністю зарядженим.",
  "Helyszínenként: kik érkeznek oda, hány napra, és elég-e az ott lévő víz és élelem.": "За локаціями: хто туди прибуває, на скільки днів, і чи вистачить наявної там води та їжі.",
  "Nemzetközi vészjelzés Morzéval: SOS (··· ─── ···), folyamatosan ismételve. Fénnyel, hang nélkül — a hangjelzés lent külön van, mert az mást tud.": "Міжнародний сигнал лиха азбукою Морзе: SOS (··· ─── ···), безперервно повторюваний. Світлом, без звуку — звуковий сигнал нижче окремо, бо він уміє інше.",
  "TEKERD FEL A HANGERŐT. Az app a telefon hangerejét nem tudja felülírni, tehát ha az le van halkítva, a síp is halk lesz.": "ЗБІЛЬШ ГУЧНІСТЬ. Застосунок не може перекрити гучність телефона, тож якщо вона стишена, свисток теж буде тихим.",
  "Hz. A 3-4 kHz a legjobban hallható tartomány, ezért sípol ott a mentőmellény sípja is.": "Гц. 3-4 кГц — діапазон, який чути найкраще, тому свисток рятувального жилета звучить саме там.",
  "Percenként 110 koppanás. Nyomd a mellkas közepét a koppanás ütemére, körülbelül 5-6 centit, és hagyd teljesen visszaemelkedni.": "110 натискань за хвилину. Натискай на середину грудної клітки в ритмі сигналу, приблизно на 5-6 сантиметрів, і давай їй повністю піднятися.",
  "Ez ütemadó, nem oktatás. Mentő: 112. Ha van a közelben defibrillátor, valaki hozza, de te ne hagyd abba.": "Це метроном, а не навчання. Швидка: 112. Якщо поблизу є дефібрилятор, хай хтось його принесе, але ти не зупиняйся.",
  "— egységes európai segélyhívó (mentő, tűzoltó, rendőrség). Térerő nélkül is hívható, ha van bármilyen hálózat a közelben.": "— єдиний європейський номер екстреної допомоги (швидка, пожежники, поліція). Подзвонити можна навіть без сигналу власного оператора, якщо поблизу є будь-яка мережа.",
  "A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan. Töltsd ki a": "Твоя картка екстреної допомоги (група крові, алергія, ліки, контакт) швидко з'являється тут. Заповни:",
  "Írj be szöveget, játszd le hangként vagy fénnyel, vagy vegyél kamerával/mikrofonnal.": "Введи текст, відтвори його звуком або світлом, чи прийми камерою/мікрофоном.",
  "Próbaidő: még 14 nap. A lejárat után sem áll le semmi.": "Пробний період: ще 14 днів. Після завершення нічого не вимкнеться.",
  "Indítsd, és irányítsd a kamerát egy Morzét villogó fényre (pl. egy másik telefon vakuja). A háttér legyen sötét, a fény a kép KÖZEPÉN. A fény-küszöb magától hangolódik; a \"Fényerő\" sáv és a lámpa mutatja, mit lát. A \"Vétel sebesség\" csúszkát állítsd a vett Morze tempójához, amíg tisztán jönnek a betűk.": "Запусти і наведи камеру на світло, що блимає азбукою Морзе (наприклад, спалах іншого телефона). Тло має бути темним, світло — у ЦЕНТРІ кадру. Поріг світла налаштовується сам; смуга \"Яскравість\" і лампа показують, що він бачить. Повзунок \"Швидкість прийому\" встав під темп прийнятої Морзе, доки літери не йтимуть чітко.",
  "FONTOS: külön eszközről vedd (az egyik telefon lejátssza, a másikon fut a vétel) -- ugyanazon a telefonon a mikrofon foglalása miatt a lejátszás halkul. Tartsd a Morze-hangot a mikrofon közelébe. Csendes környezet a legjobb; a hangerő-sáv és a lámpa mutatja, mit hall. Kalibrálás: a \"Vétel sebesség\" csúszkát told lassan, amíg a szövegben tisztán, hibátlanul jönnek a betűk.": "ВАЖЛИВО: приймай з окремого пристрою (один телефон відтворює, на другому працює прийом) -- на тому самому телефоні відтворення стишується через зайнятий мікрофон. Тримай звук Морзе біля мікрофона. Найкраще тихе середовище; смуга гучності й лампа показують, що він чує. Калібрування: повільно пересувай повзунок \"Швидкість прийому\", доки літери в тексті не йтимуть чітко й без помилок.",
  "Tanuló: Morze → szöveg (kézi: illeszd be . és -, szóköz a betűk közt, / a szavak közt)": "Тренажер: Морзе → текст (вручну: вставляй . і -, пробіл між літерами, / між словами)",
  "A kétirányú kód-tábla (nemzetközi + magyar Á/É/Ö/Ü) és az interaktív tanuló a végleges appban bővül. Egyelőre a fenti mező visszafejt bármilyen beírt Morze-jelet.": "Двостороння таблиця кодів (міжнародна + угорські Á/É/Ö/Ü) та інтерактивний тренажер розширяться у фінальному застосунку. Наразі поле вище розшифровує будь-який введений сигнал Морзе.",
  "Kép küldése hangként (Martin M1). Játszd egy másik telefon SSTV-vevőjébe vagy egy rádió mikrofonjába.": "Надсилання зображення звуком (Martin M1). Відтвори його в SSTV-приймач іншого телефона або в мікрофон рації.",
  "Küldéshez: a másik eszközön indíts SSTV-vevőt (pl. Robot36 vagy MMSSTV) Martin M1 módban, és tartsd a hangszórót a mikrofonjához. A VIS-fejléc automatikus, a vevő magától felismeri a módot. Egy kép ~114 másodperc.": "Для передавання: на іншому пристрої запусти SSTV-приймач (наприклад, Robot36 або MMSSTV) у режимі Martin M1 і тримай динамік біля його мікрофона. Заголовок VIS передається автоматично, приймач сам розпізнає режим. Одне зображення — близько 114 секунд.",
  "Martin M1-et fogad. Tartsd a telefont a hangszóró vagy a rádió közelébe, és a kép soronként épül fel. Csendes környezet kell hozzá: a mikrofon minden mást is hall. Hangfájlból is megy, ha valaki felvételt küld.": "Приймає Martin M1. Тримай телефон біля динаміка або рації, і зображення будуватиметься рядок за рядком. Потрібне тихе середовище: мікрофон чує і все інше. Працює і зі звукового файлу, якщо хтось надішле запис.",
  "Koppints a térképre pont hozzáadásához (menedék, víz, találkozópont). Ha ott": "Торкнися карти, щоб додати точку (укриття, вода, місце зустрічі). Якщо там",
  "pontosabb: az a GPS-edet használja, nem azt, ahová az ujjad ér. A": "точніше: він використовує твій GPS, а не те місце, куди дістає палець. Кнопка",
  "a mostani koordinátádat adja tovább üzenetben, a": "передає твої поточні координати повідомленням, а",
  "pedig GPX-fájlba menti mindet, amit a térkép- és navigációs programok beolvasnak. A pontok és a jelenlegi pozíció helyben tárolódnak. A": "зберігає їх усі у файл GPX, який читають картографічні та навігаційні програми. Точки й поточна позиція зберігаються локально. Кнопка",
  "a most látható kivágást menti a készülékre, három nagyítási szinten — utána térerő nélkül is megvan.": "зберігає видимий зараз фрагмент на пристрій у трьох рівнях масштабу — після цього він доступний і без зв'язку.",
  "A QR a fenti adatokat kódolja. Kihelyezheted a zárolt képernyődre vagy kinyomtatva a hátizsákodba.": "QR кодує наведені вище дані. Можеш вивести його на екран блокування або роздрукувати й покласти в рюкзак.",
  "Mindenkinek, akinek van profilja a Háztartásnál. Az adat onnan jön: vércsoport, allergia, gyógyszer, betegség. A vészhelyzeti kontakt a fenti közös mezőből.": "Для всіх, хто має профіль у розділі «Домогосподарство». Дані беруться звідти: група крові, алергія, ліки, хвороби. Контакт для надзвичайних ситуацій — зі спільного поля вище.",
  "Még nincs profil. A Háztartásnál vedd fel, kik vagytok — mindenki kap egy kártyát.": "Профілів поки немає. Додай у розділі «Домогосподарство», хто ви — кожен отримає картку.",
  "A teljes Károli-fordítás egyszer letöltődik (kb. 4 MB), és utána internet nélkül is elérhető marad.": "Повний переклад Карої завантажується один раз (близько 4 МБ), після чого залишається доступним без інтернету.",
  "Titkos kódok PIN mögött, helyben tárolva. Ugyanaz a PIN nyitja, mint az Irattárcát.": "Секретні коди за PIN-кодом, зберігаються локально. Відкриває той самий PIN, що й Гаманець документів.",
  ", előre kitöltve. Éles használat előtt ez kikerül, és saját PIN-t adsz meg.": ", попередньо заповнено. Перед реальним використанням це буде прибрано, і ти задаси власний PIN.",
  "A web-demó nem ad operációs rendszer szintű titkosítást: a kódok a böngésző tárolójában vannak. Valódi seed-mondatot vagy éles banki kódot majd a végleges appba tegyél (biometrikus zár, titkosított tár). Itt a folyamatot próbáld ki. A teljes mentésbe ez a rész SOSEM kerül bele.": "Веб-демо не дає шифрування на рівні операційної системи: коди лежать у сховищі браузера. Справжню seed-фразу або банківський код клади вже у фінальний застосунок (біометричний замок, зашифроване сховище). Тут випробуй сам процес. У повну резервну копію ця частина НІКОЛИ не потрапляє.",
  "1. Ő megmutatja az azonosító-QR-jét, vagy küld egy kérést. Te beolvasod: ettől nálad kitöltődik az űrlap.": "1. Він показує свій QR-код особи або надсилає запит. Ти скануєш: після цього форма в тебе заповнюється.",
  "2. Megadod az összeget és hogy miért, majd Fizetés elkészítése. A telefonod aláírja, és mutat egy QR-t.": "2. Вводиш суму й призначення, тоді «Підготувати платіж». Твій телефон підписує його і показує QR-код.",
  "Az érték ekkor kerül át hozzá — a telefonja ellenőrzi az aláírást, és jóváírja.": "Саме тоді вартість переходить до нього — його телефон перевіряє підпис і зараховує її.",
  "Kérek gírát, beírod mennyit és miért, kapsz egy QR-t. Ő beolvassa, és nála kitöltve áll a fizetés, csak jóvá kell hagynia.": "Запроси гіру, введи скільки й навіщо, отримаєш QR-код. Він сканує, і платіж у нього вже заповнений — лишається тільки підтвердити.",
  "Mert az ő kódja csak azt mondja meg, kinek és mennyit. Az értéket a te aláírásod viszi át, és az a te QR-edben van. Amíg ő nem olvasta be, a tétel nálad „átadásra vár” jelöléssel áll.": "Бо його код каже лише, кому й скільки. Вартість переносить твій підпис, а він у твоєму QR-коді. Доки він не відсканував, запис у тебе стоїть із позначкою „очікує передавання”.",
  "Minden a két telefon között megy, kamerával és képernyővel. Se szerver, se térerő.": "Усе відбувається між двома телефонами, через камеру та екран. Ні сервера, ні зв'язку.",
  "Van, ahol a böngésző nem tud QR-t olvasni (jellemzően iPhone Safari). Ilyenkor a Beillesztés szövegből gomb ugyanazt tudja: a fizetés elkészítése után a QR alatti Szöveg másolása gombbal átküldöd a tételt üzenetben, ő pedig a Beillesztés szövegből gombbal beveszi. Az ellenőrzés ugyanúgy megtörténik, az aláírás a szövegben is benne van.": "Буває, що браузер не вміє читати QR-коди (зазвичай Safari на iPhone). Тоді кнопка «Вставити з тексту» робить те саме: після підготовки платежу кнопкою «Копіювати текст» під QR-кодом надсилаєш запис повідомленням, а він приймає його кнопкою «Вставити з тексту». Перевірка відбувається так само, підпис міститься й у тексті.",
  "a nevedben más nem tud fizetni (a titkos kulcs a telefonodon marad), és egy aláírt tétel utólag nem módosítható észrevétlenül.": "від твого імені ніхто інший заплатити не може (секретний ключ залишається на твоєму телефоні), а підписаний запис неможливо непомітно змінити заднім числом.",
  "offline a kettős költést megelőzni nem lehet. Ha valaki ugyanazt a gírát két embernek adja, az akkor derül ki, amikor a két tétel találkozik — és a saját aláírása bizonyítja. Ezért érdemes időnként összefésülni a könyveket a közösségben.": "офлайн запобігти подвійній витраті неможливо. Якщо хтось віддасть ту саму гіру двом людям, це виявиться тоді, коли два записи зустрінуться — і його власний підпис це доведе. Тому варто час від часу звіряти книги в громаді.",
  "Seed-mondatnál a papír-másolat nem elavult ötlet: egy elveszett vagy letörölt telefon a kulcsot is viszi. Amit ide beírsz, azt tartsd meg máshol is.": "Для seed-фрази паперова копія — не застаріла ідея: втрачений або стертий телефон забирає й ключ. Те, що вводиш сюди, зберігай і десь інде.",
  "PIN-nel védett helyi tároló okmányokhoz (szig, jogosítvány, TAJ, biztosítás, forgalmi).": "Захищене PIN-кодом локальне сховище для документів (паспорт, посвідчення водія, медична картка, страховка, техпаспорт).",
  "A PIN és a dokumentumok CSAK ezen az eszközön, a böngésződben tárolódnak — a vészkártyával ellentétben ezt csak te nyithatod meg. Figyelem: a web-demó nem nyújt OS-szintű titkosítást; VALÓDI okmányokat majd a végleges appba tölts (biometrikus zár, titkosított tár). Itt a folyamatot teszteld.": "PIN і документи зберігаються ЛИШЕ на цьому пристрої, у твоєму браузері — на відміну від картки екстреної допомоги, це можеш відкрити тільки ти. Увага: веб-демо не забезпечує шифрування на рівні ОС; СПРАВЖНІ документи завантажуй уже у фінальний застосунок (біометричний замок, зашифроване сховище). Тут випробуй сам процес.",
  "Ehhez a dokumentumhoz: kié? Személy, állat vagy jármű. Ha egyiket sem jelölöd, közösként mentjük.": "До цього документа: чий він? Особа, тварина чи транспортний засіб. Якщо не позначиш жодного, збережемо як спільний.",
  "szól erre a készülékre, nincs lejárata és nincs megújítás. Ha kódot kaptál, itt válthatod be.": "діє на цьому пристрої, без терміну дії та без поновлення. Якщо ти отримав код, тут можеш його активувати.",
  "Web-demo a gyors próbához. A végleges app: Flutter, Google Play.": "Веб-демо для швидкої проби. Фінальний застосунок: Flutter, Google Play.",
  "Teljes fejadattal számol: 3 liter fő/nap. Ez a helyben maradáshoz és az autós úthoz való — nyaraló, tábor, otthon.": "Рахує за повною нормою: 3 літри на особу на день. Це для перебування на місці та для поїздки автомобілем — дача, табір, дім.",
  "Ki tartozik a háztartáshoz és hol vannak a helyszíneid. A készültségi számítás ebből dolgozik.": "Хто входить до домогосподарства і де твої локації. Розрахунок готовності працює з цих даних.",
  "Még nincs jármű felvéve. Autó, kisbusz, lakókocsi vagy hajó lehet.": "Транспорт ще не додано. Це може бути автомобіль, мікроавтобус, дім на колесах або човен.",
  "Még nincs helyszín felvéve. Alapesetben az otthon az első.": "Локацій поки не додано. За замовчуванням дім іде першим.",
  "· vagy egy bemásolt Google Térkép-link. Ha nem tudom értelmezni, szólok — üresen nem mentem el.": "· або вставлене посилання на Google Карти. Якщо я не зможу його розібрати, повідомлю — порожнім не збережу.",
  "Ezen a készüléken a böngésző nem éri el a légnyomás-szenzort, ezért kézzel kell bevinni az értéket. A telefonos appban magától mér majd. Addig is: írj be egy értéket, és a trendet innentől számolja.": "На цьому пристрої браузер не має доступу до датчика тиску, тому значення треба вводити вручну. У мобільному застосунку вимірювання буде автоматичним. А поки що: введи значення, і тенденцію рахуватимемо від нього.",
  "Ha autóval hegyre mész, a nyomás esik, de nem jön vihar: száz méter emelkedés körülbelül 12 hPa. Ilyen napon ne vedd komolyan a jelzést.": "Якщо їдеш автомобілем у гори, тиск падає, але буря не насувається: сто метрів підйому — приблизно 12 гПа. У такий день не сприймай сигнал серйозно.",
  "Jackery Explorer 1000: 1002 Wh tárolt energia, 1000 W folyamatos kimenet": "Jackery Explorer 1000: 1002 Вт·год накопиченої енергії, 1000 Вт постійної вихідної потужності",
  "Tetőfelület vízszintes vetülete (m²)": "Горизонтальна проєкція площі даху (м²)",
  "Mennyi eső esett vagy várható (mm)": "Скільки дощу випало або очікується (мм)",
  "Menetidő gyalog": "Час у дорозі пішки",
  "Távolság (km)": "Відстань (км)",
  "Milyen terep": "Який рельєф",
  "Jó út, sík (5 km/h)": "Гарна дорога, рівнина (5 км/год)",
  "Ösvény, erdei út (4 km/h)": "Стежка, лісова дорога (4 км/год)",
  "Nehéz terep, hó, sár (3 km/h)": "Важкий рельєф, сніг, багно (3 км/год)",
  "Mit viszel": "Що несеш",
  "Könnyű, napi cucc": "Легкі, щоденні речі",
  "Megpakolt hátizsák": "Повний рюкзак",
  "Nehéz teher vagy gyerekkel": "Важкий вантаж або з дитиною",
  "Villám: milyen messze van": "Блискавка: наскільки далеко",
  "Nyomd meg a villanáskor, aztán újra, amikor meghallod a dörgést.": "Натисни під час спалаху, а потім ще раз, коли почуєш грім.",
  "Villanás": "Спалах",
  "Jelszó": "Пароль",
  "Jelszó mentése": "Зберегти пароль",
  "Nincs saját jelszó.": "Власного пароля немає.",
  "beállítva": "встановлено",
  "Tudástár: a cikkekből most már tizennyolc helyen gomb vezet át az app funkcióira (Készlet, Vészkártya, Kockázatelemzés, Tudástár).": "База знань: тепер у вісімнадцяти місцях кнопки ведуть зі статей до функцій застосунку (Запаси, Екстрена картка, Аналіз ризиків, База знань).",
  "Irattárca és Token tárca: a tartalom mostantól titkosítva tárolódik, a kulcs a PIN-edből készül, a PIN-t nem tároljuk. Az első belépéskor a meglévő adatod magától átkerül titkosított formába. Fontos: elfelejtett PIN mellett a tartalom nem állítható vissza.": "Сховище документів і токен-гаманець: вміст тепер зберігається в зашифрованому вигляді, ключ створюється з твого PIN-коду, сам PIN не зберігається. Під час першого відкриття наявні дані автоматично переводяться в зашифрований вигляд. Важливо: якщо забудеш PIN, вміст відновити неможливо.",
  "A kódok titkosítva tárolódnak ezen az eszközön: a kulcs a PIN-edből készül (AES-256), magát a PIN-t nem tároljuk. Ha elfelejted a PIN-t, a tartalom nem állítható vissza, ezért a seed-mondatról tarts papírmásolatot is. A teljes mentésbe ez a rész SOSEM kerül bele.": "Коди зберігаються на цьому пристрої в зашифрованому вигляді: ключ створюється з твого PIN-коду (AES‑256), сам PIN не зберігається. Якщо забудеш PIN, вміст відновити неможливо, тож тримай паперову копію сид-фрази. Цей розділ НІКОЛИ не потрапляє до повної резервної копії.",
  "A dokumentumok CSAK ezen az eszközön tárolódnak, a PIN-edből képzett kulccsal titkosítva (AES-256) — a vészkártyával ellentétben ezt csak te nyithatod meg. A PIN-t nem tároljuk: ha elfelejted, a dokumentumok nem állíthatók vissza.": "Документи зберігаються ЛИШЕ на цьому пристрої, зашифровані ключем із твого PIN-коду (AES‑256), — на відміну від екстреної картки, відкрити їх можеш лише ти. PIN не зберігається: якщо забудеш його, документи відновити неможливо.",
  "Tudástár: a cikkekben álló hivatkozások (például „a 20.2 cikk”) kattinthatók, és a cikkekből gomb vezet át az app megfelelő funkciójára.": "База знань: посилання в статтях (наприклад, «стаття 20.2») клікабельні, а кнопки в статтях ведуть до відповідної функції застосунку.",
  "Vagyonkezelő: új, választós oldalak saját legördülő listával.": "Майно: нові сторінки вибору з власним випадним списком.",
  "Térkép, navigáció: alul egy sáv mutatja a hátralévő és a megtett utat, a sebességet és a várható érkezést; a sarkában a leállító gomb.": "Карта, навігація: унизу смуга показує залишок і пройдену відстань, швидкість і очікуване прибуття; у куті кнопка зупинки.",
  "Térkép, navigáció: tervezett útvonalon a ▲ gomb megnyitja a szintgrafikont: hol vagy, merre emelkedik vagy lejt az út, mennyit kell még mászni, és mikor jön a következő emelkedő.": "Карта, навігація: на запланованому маршруті кнопка ▲ відкриває профіль висоти: де ви, де маршрут підіймається чи спускається, скільки підйому лишилося і коли наступний підйом.",
  "Tudástár: ötvenegy új kép került a cikkekbe, így már mind a kilencvenkilenc cikkben legalább két kép van.": "База знань: п'ятдесят одне нове зображення, тепер у всіх дев'яноста дев'яти статтях щонайменше два зображення.",
  "Közös ima · stopper": "Спільна молитва · таймер",
  "Folytatás": "Продовжити",
  "Újra": "Ще раз",
  "Letelt az idő. Az Újra gombbal még egy kör indul.": "Час вийшов. Натисніть «Ще раз» для наступного кола.",
  "Vége. Az Újra gombbal elölről kezdheted.": "Готово. «Ще раз» почне спочатку.",
  "Második kör": "Друге коло",
  "Ima-stopper": "Таймер молитви",
  "Útvonal": "Маршрут",
  "Körút": "Кільцевий",
  "igen": "так",
  "MTSZ-szám": "№ MTSZ",
  "Jelzés festve": "Маркування нанесено",
  "Weboldal": "Сайт",
  "Az út mentén": "Уздовж маршруту",
  "menetidő": "час у дорозі",
  "érkezés": "прибуття",
  "ó": "год",
  "p": "хв",
  "Magassági adat nélkül, az emelkedőkkel nem számolva.": "Без даних про висоту, підйоми не враховано.",
  "Imák: a lista alján egy kis harang gomb nyitja a közös imához való stoppert. Te állítod be a perceket; lejáratkor halkan csilingel, és amíg nem nyúlsz hozzá, tízmásodpercenként újra jelez. Az Újra gomb még egy kört indít, annak a végén egyszer csilingel, és leáll.": "Молитви: маленька кнопка з дзвіночком унизу списку відкриває таймер для спільної молитви. Ви задаєте хвилини; наприкінці він тихо дзвенить і повторює кожні десять секунд, доки ви його не торкнетеся. «Ще раз» запускає ще одне коло, яке наприкінці дзвенить один раз і зупиняється.",
  "Imák: a stopper harang gombja az app saját ikon-stílusát kapta.": "Молитви: кнопка-дзвіночок таймера тепер у стилі значків застосунку.",
  "Tudástár: harminckilenc új kép került a prémium cikkekbe, így már szinte minden cikkben van kép.": "База знань: до преміум-статей додано тридцять дев'ять нових зображень, тож майже в кожній статті тепер є зображення.",
  "Tudástár: a már letöltött prémium cikkek is frissülnek, ha új változat jelenik meg. A PMR446 cikkbe bekerült a csatornák frekvencia-táblázata és a digitális PMR.": "База знань: уже завантажені преміум-статті тепер оновлюються, коли з'являється нова версія. До статті про PMR446 додано таблицю частот каналів і цифровий PMR.",
  "Tudástár: tizenöt prémium cikkben megjelentek a képek, tizenegy cikk új képet kapott.": "База знань: у п'ятнадцяти преміум-статтях тепер видно зображення, одинадцять статей отримали нове зображення.",
  "Újdonságok: a korábbi bejegyzések is olvashatók most már minden nyelven.": "Новини: попередні записи тепер теж можна прочитати будь-якою мовою.",
  // Ujdonsagok v43.126-v43.138 (2026-10-12 22:1x, hianypotlas)
  "Szobák: ha a „Csak neki” címzés látszik, az üzenet biztosan privátként megy el. Ha a címzés egy másik szobából maradt itt, az app nem küldi el csoportba, hanem szól, hogy válaszd ki újra a címzettet.": "Кімнати: якщо видно адресацію «Лише для», повідомлення точно піде як приватне. Якщо адресація залишилася з іншої кімнати, застосунок не надішле його в групу, а попросить знову вибрати отримувача.",
  "Vagyonkezelő: az euró, a dollár és a nemesfémek árfolyama internet mellett magától frissül (a Magyar Nemzeti Bank és a tőzsdei ár alapján). A kézzel beírt érték marad.": "Майно: курси євро, долара та дорогоцінних металів за наявності інтернету оновлюються самі (за даними Національного банку Угорщини та біржовими цінами). Значення, введене вручну, зберігається.",
  "Vagyonkezelő: kikerültek belőle a cégspecifikus részek, csak az általános pénzügyi funkciók maradtak.": "Майно: з нього прибрано частини, що стосуються компанії, залишилися лише загальні фінансові функції.",
  "Vagyonkezelő: bal oldali menü (a bal felső gombbal). Minden menüpont egy témát mutat, így nem kell végtelen hosszan görgetni. A főoldalon a számlák egyenlege csempékben.": "Майно: меню ліворуч (кнопкою у верхньому лівому куті). Кожен пункт меню показує одну тему, тож не треба нескінченно прокручувати. На головній сторінці залишки на рахунках у плитках.",
  "Visszajelzés: a „Bejelentéseim” alatt látod a saját bejelentéseidet, és hogy hol tart mindegyik. A kijavított hibánál egy koppintással jelezheted, hogy nálad is működik-e.": "Відгук: у розділі «Мої повідомлення» видно твої власні повідомлення і на якому етапі кожне з них. Для виправленої помилки одним дотиком можна підтвердити, чи працює в тебе.",
  "Újdonságok: verziónként itt olvasható, mi változott és mi lett javítva.": "Новини: тут за версіями можна прочитати, що змінилося і що виправлено.",
  "Biblia: egyszerre több olvasási tervet is követhetsz, a „Másik terv” gombbal válthatsz köztük. A haladás tervenként megmarad.": "Біблія: можна стежити за кількома планами читання одночасно й перемикатися між ними кнопкою «Інший план». Поступ зберігається для кожного плану.",
  "Biblia: „A Biblia egy év alatt” heti felosztásban is választható, 52 hétre bontva.": "Біблія: «Біблія за рік» доступна й у тижневому розподілі, на 52 тижні.",
  "Biblia: a „Terv leállítása” gomb a terv tetején is ott van, nem kell a lista aljáig görgetni érte.": "Біблія: кнопка «Зупинити план» тепер є й угорі плану, не треба прокручувати до кінця списку.",
  "Biztonsági javítások a Szobákban és a prémium tartalmak védelmében.": "Виправлення безпеки в Кімнатах і в захисті преміум-вмісту.",
  "Szobák: elrejtett üzenetről már nem jön értesítés.": "Кімнати: про приховані повідомлення сповіщення більше не надходять.",
  "Gíra: ha a névjegy elsőre nem ért célba, magától újra elküldődik.": "Гіра: якщо візитівка не дійшла з першого разу, вона надсилається повторно автоматично.",
  "Gíra: a közösséghez később csatlakozó tag is megkapja a közösség jelzéseit.": "Гіра: учасник, який приєднався до спільноти пізніше, теж отримує сигнали спільноти.",
  "A kezdőképernyőre tett webes ikon ugyanaz lett, mint a telepített alkalmazásé.": "Веб-значок, доданий на головний екран, тепер такий самий, як у встановленого застосунку.",
  "Térkép: a funkciók ikonos csempékben jelennek meg, az iránytű folyamatosan forog.": "Карта: функції показано плитками зі значками, компас обертається безперервно.",
  "Szobák: a tagok egymásnak is átadhatják a szoba titkosító kulcsát, így új eszközön is olvasható minden korábbi üzenet.": "Кімнати: учасники можуть передавати одне одному ключ шифрування кімнати, тож на новому пристрої можна прочитати всі попередні повідомлення.",
  "Titkos QR: a családi jelszó egy összecsukható sor lett az oldal tetején, színes jelzéssel (be van-e állítva). Így az oldal rögtön a kód készítésével kezdődik.": "Секретний QR: сімейний пароль тепер — рядок, що згортається, угорі сторінки з кольоровою позначкою (чи встановлено). Тож сторінка одразу починається зі створення коду.",
  "Közös jelszó: koppints a Családi jelszó sorra, és adj meg egy mondatot, amit csak ti tudtok. Ugyanaz kell mindkét telefonon; mentsd el.": "Спільний пароль: торкнися рядка «Сімейний пароль» і введи речення, яке знаєте тільки ви. На обох телефонах потрібен той самий; збережи його.",
  "nincs beállítva": "не встановлено",
  "Saját jelszó nélkül a beépített kulcs véd, ami MINDEN PrepperPapa-készüléken megvan. Az idegen, aki sima szkennerrel ránéz, csak betűsort lát, de aki letöltötte az appot, elolvassa. Ez álcázás, nem titkosítás.": "Без власного пароля захищає вбудований ключ, який є на КОЖНОМУ пристрої з PrepperPapa. Стороння людина зі звичайним сканером побачить лише набір літер, але той, хто завантажив застосунок, прочитає. Це маскування, а не шифрування.",
  "Kód készítése": "Створити код",
  "Mit teszel bele?": "Що покладеш усередину?",
  "Lista": "Список",
  "Személyes adat": "Особисті дані",
  "Koordináta": "Координати",
  "Lista címe": "Назва списку",
  "Sorok (soronként egy)": "Рядки (по одному в рядку)",
  "QR készítése": "Створити QR",
  "Morze fénnyel": "Морзе світлом",
  "Morze hanggal": "Морзе звуком",
  "Rádión ne add le.": "Не передавай по рації.",
  "Az amatőr sávokon tilos információrejtő módszert alkalmazni (15/2013. NMHH rendelet 15. § (6) e)), és a forgalmazást közérthető nyelven kell folytatni (15. § (4)). Ez a kód egyikbe sem fér bele, és a saját jelszó nélkül készült változatra is áll. Morzézni szabad, rejtett tartalmat leadni nem. QR-kódban, papíron, kézből átadva használható.": "На аматорських діапазонах заборонено застосовувати методи приховування інформації (розпорядження NMHH 15/2013, § 15 (6) e)), а обмін має вестися зрозумілою мовою (§ 15 (4)). Цей код не вкладається в жодну з цих вимог, і це стосується також варіанта, створеного без власного пароля. Передавати азбукою Морзе можна, приховуваний вміст — ні. У QR-коді, на папері, з рук у руки — можна.",
  "Kód beolvasása": "Зчитати код",
  "Vagy írd be a betűsort (morzéból, faxról)": "Або введи рядок літер (з Морзе, з факсу)",
  "Megfejtés": "Розшифровка",
  "Ahogy üzenni tudsz, amikor a telefonhálózat nem segít. Válaszd ki, mivel próbálkozol: a helyi szoba szöveget visz a közeledben lévőknek, a hang pedig ott is átmegy, ahol semmilyen hálózat nincs.": "Як передати звістку, коли телефонна мережа не допомагає. Обери, чим спробуєш: локальна кімната передає текст тим, хто поруч, а звук проходить і там, де жодної мережі немає.",
  "szöveg, hálón": "текст, у мережі",
  "Szöveg a közeledben lévőknek, közös hálón, internet nélkül": "Текст для тих, хто поруч, у спільній мережі, без інтернету",
  // MESH (Fonok, 2026-10-06 21:44 es 21:47): a helyi szoba neve es leirasa a mesh-halozatot
  // is kimondja -- ez ugyanaz a szoba, csak a nevevel egyutt most a technologiat is viszi.
  "Helyi szoba (mesh)": "Локальна кімната (mesh)",
  "Mesh-hálózat: szöveg a közeledben lévőknek, internet nélkül": "Mesh-мережа: текст тим, хто поруч, без інтернету",
  "Szobák (interneten)": "Кімнати (через інтернет)",
  "Zárt csoportok távolról is, belépés a szoba gazdájának jóváhagyásával": "Закриті групи навіть на відстані, вхід за погодженням власника кімнати",
  "Rövid üzenet hanggal vagy fénnyel, vétel kamerával és mikrofonnal": "Коротке повідомлення звуком або світлом, прийом камерою та мікрофоном",
  "Kép átküldése hangban, rádión is": "Передавання зображення звуком, зокрема по рації",
  "névtelen (te)": "анонім (ти)",
  "Ez a modul akkor működik, ha a készülékek egy hálón vannak, és azon valaki futtatja a szobát. Internet nem kell hozzá.": "Цей модуль працює, якщо пристрої в одній мережі і хтось у ній запустив кімнату. Інтернет для цього не потрібен.",
  "kapcsold be a telefonodon a mobil hotspotot (vagy használjatok egy közös routert), a többiek csatlakozzanak rá, és nyissák meg ugyanazt a címet, amit te. Aki megnyitotta, az bent van a szobában.": "увімкни на своєму телефоні мобільну точку доступу (або скористайтеся спільним роутером), решта хай під'єднається до неї та відкриє ту саму адресу, що й ти. Хто відкрив, той уже в кімнаті.",
  "Közös jelszó. Aki ugyanezt adja meg, az olvassa az üzeneteket, akinek nincs meg, annak értelmetlen betűsor marad. A kulcsot NE a szobában küldd el, hanem élőszóban vagy papíron add át.": "Спільний пароль. Хто введе такий самий, читає повідомлення; у кого його немає, для того лишається безглуздий набір літер. Ключ НЕ надсилай у кімнаті — передай усно або на папері.",
  "Nincs kulcs. Az üzenetek nyíltan mennek: aki a hálón van és megnyitja a szobát, olvassa őket.": "Ключа немає. Повідомлення йдуть відкрито: хто в мережі й відкриє кімнату, той їх читає.",
  "Szobák": "Кімнати",
  "Még egy szobában sem vagy benne.": "Ти ще не в жодній кімнаті.",
  "Nyitott közösségek. Egy koppintás, és megy a jelentkezésed — a szoba gazdája engedi be.": "Відкриті спільноти. Один дотик — і заявка пішла; впускає власник кімнати.",
  "Új szoba": "Нова кімната",
  "Te leszel a gazdája. Aki csatlakozni akar, kérelmet küld, és te döntöd el, beengeded-e. A szoba kódját add meg nekik, azzal találnak rá.": "Ти будеш її власником. Хто захоче приєднатися, надішле заявку, і ти вирішиш, чи впустити. Дай їм код кімнати — за ним вони її знайдуть.",
  "Szoba létrehozása": "Створити кімнату",
  "Írd be a szoba kódját. A gazda jóváhagyásáig nem látod az üzeneteket.": "Введи код кімнати. До погодження власником ти не бачиш повідомлень.",
  "Kérelem küldése": "Надіслати заявку",
  "A böngészőben letiltottad az értesítést. A telefon beállításainál lehet visszaadni — innen nem tudom.": "Ти заборонив сповіщення в браузері. Повернути можна в налаштуваннях телефона — звідси я не можу.",
  "Próba": "Проба",
  "Szoba": "Кімната",
  "Kapcsolódás...": "З'єднання...",
  "Sürgős": "Терміново",
  "Meghívó": "Запрошення",
  "Készíts egy meghívót, és küldd át annak, akit be akarsz hívni. Ő megnyitja, és bent van — nem kell külön jóváhagynod, és nem kell a szoba kódját közhírré tenni.": "Створи запрошення й надішли тому, кого хочеш покликати. Він відкриє його — і вже всередині: окремо погоджувати не треба, і код кімнати розголошувати теж.",
  "Meghívó készítése": "Створити запрошення",
  "Vagy legyen nyitott:": "Або хай буде відкритою:",
  "ha kirakod, a szoba megjelenik mindenkinél a „Csatlakozz\" listában, és jelentkezni tudnak rá. Beengedni akkor is te engeded be őket.": "якщо виставиш її, кімната з'явиться в усіх у списку „Приєднатися\", і вони зможуть подавати заявки. Впускаєш їх усе одно ти.",
  "Jelenjen meg a Csatlakozz listában": "Показувати у списку «Приєднатися»",
  "Ez látszik a csempén, ezen ismerik fel. Fényképet válassz, ne rajzot — kis méretben az mond valamit. A telefonod a képet magától lekicsinyíti.": "Це видно на плитці, за цим її впізнають. Обери фотографію, а не малюнок — у малому розмірі саме вона щось каже. Твій телефон зменшить зображення сам.",
  "Kép törlése": "Видалити зображення",
  "Ez a másik út: aki a kódot ismeri, kérelmet küldhet, és te döntöd el, beengeded-e. Meghívóval egyszerűbb.": "Це другий шлях: хто знає код, може надіслати заявку, а ти вирішиш, чи впустити. Із запрошенням простіше.",
  "Kihagyom": "Закрити", // ROVIDEBB CIMKE (2026-10-01): a hosszu alak 390 px-en kitort a gombbol (105 > 96), a tullogas-mero fogta meg. A gomb a turat zarja le, ezert a rovid alak ugyanazt nevezi meg.
  "Tovább": "Далі",
  "Tartsd a vonalkódot a keretbe.": "Тримай штрихкод у рамці.",
  "Húzd az ujjad: vízszintben a szín, függőlegesen a fényerő. Koppints a képernyőre a gombok elrejtéséhez / előhozásához.": "Проведи пальцем: по горизонталі — колір, по вертикалі — яскравість. Торкнися екрана, щоб сховати / показати кнопки.",
  "Piros": "Червоний",
  "Zöld": "Зелений",
  "Villogás": "Блимання",
  "LED ki": "LED вимк.",
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
  "otthon": "дім",
  "Teszt autó": "Тестове авто",
  "Teszt Apa": "Тестовий Тато",
  "Teszt Anya": "Тестова Мама",
  "Teszt Gyerek": "Тестова Дитина",
  "Azaz": "Тобто",
  "Készültség": "Готовність",
  "Készlet": "Запаси",
  "Kockázat": "Ризик",
  "Közösség": "Спільнота",
  "Iránytű": "Компас",
  "Fény": "Світло",
  "Vagyonkezelő": "Майно",
  "Otthon ": "Дім ",
  "Nincs megadva, ki érkezik ide.": "Не вказано, хто сюди прибуває.",
  "Kik érkeznek ide:": "Хто сюди прибуває:",
  "Mi van itt (nincs ide rendelt tétel)": "Що тут є (жодної позиції сюди не призначено)",
  "Sípolás": "Свисток",
  "Ütem indítása": "Запустити ритм",
  "vércsoport hiányzik · nincs ismert allergia": "групу крові не вказано · відомих алергій немає",
  "Rögzítés a térképre (itt vagyok most)": "Зафіксувати на карті (я зараз тут)",
  "Kezdőlapon látszik ✓": "Видно на головній ✓",
  "+ Új családtag": "+ Новий член родини",
  "Otthon · készültség: nincs adat": "Дім · готовність: даних немає",
  "Jármű · készültség: nincs adat": "Транспорт · готовність: даних немає",
  "Ez a készülék nem ad iránytű-adatot, vagy nincs rá engedély. A nap és hold rész ettől függetlenül működik.": "Цей пристрій не дає даних компаса, або немає дозволу. Розділ про сонце й місяць працює незалежно від цього.",
  "víz 5 liter elemlámpa gyógyszerek": "вода 5 літрів ліхтарик ліки",
  "Ennyi holdfénynél nyílt terepen lámpa nélkül is lehet menni.": "За такого місячного світла на відкритій місцевості можна йти й без ліхтаря.",
  "A számítás a térkép utolsó nézete alapján készült, néhány perc pontossággal.": "Розрахунок зроблено за останнім видом карти, з точністю до кількох хвилин.",
  "A böngészőben letiltottad. A telefon beállításainál lehet visszaadni.": "Ти заборонив це в браузері. Повернути можна в налаштуваннях телефона.",
  "Kapcsolódva · egyedül vagy a szobában": "З'єднано · ти сам у кімнаті",
  "növekvő hold, 82%": "місяць у фазі росту, 82%",
  "Súgó": "Довідка",
  "Frissítés": "Оновити",
  "Éjszakai mód": "Нічний режим",
  "Tájoló": "Орієнтування",
  "Kalkulátorok": "Калькулятори",
  "Gyülekező": "Збірний пункт",
  "Másikat": "Інше",
  "Másik tanács": "Інша порада",
  "Keresés a tudástárban…": "Пошук у базі знань…",
  "Megnevezés (pl. Palackozott víz)": "Назва (напр. Вода в пляшках)",
  "a dobozról, pl. 380": "з коробки, напр. 380",
  "pl. 37 vagy 2000": "напр. 37 або 2000",
  "teli tank, liter vagy kWh": "повний бак, літри або кВт·год",
  "Egyéb hely megnevezése": "Назва іншого місця",
  "Teljes képernyő": "На весь екран",
  "Húzd, ha görgetnél": "Потягни, щоб прокрутити",
  "Nyomtatás": "Друк",
  "Keresés: szó, vagy hely (Ján 3,16)": "Пошук: слово або місце (Ів. 3:16)",
  "Betűméret": "Розмір шрифту",
  "Megnevezés (pl. Gmail helyreállítási kódok)": "Назва (напр. Коди відновлення Gmail)",
  "A kód, kulcs vagy seed-mondat": "Код, ключ або seed-фраза",
  "Megjegyzés (hol használod, melyik fiók)": "Примітка (де використовуєш, який обліковий запис)",
  "Megnevezés (pl. Személyi igazolvány)": "Назва (напр. Паспорт)",
  "Kód (pl. PP-MINTA-1234)": "Код (напр. PP-ZRAZOK-1234)",
  "mennyit bír hátizsákban": "скільки витримає в рюкзаку",
  "pl. glutén, kivi — vesszővel": "напр. глютен, ківі — через кому",
  "pl. cukorbetegség": "напр. діабет",
  "pl. Bogáncs": "напр. Рекс",
  "egy mondat, ha a GPS nem visz oda": "одне речення, якщо GPS туди не веде",
  "üresen: alapterület vagy típus szerint": "порожнє: за площею або типом",
  "üresen: típus szerint (ház 75, lakókocsi 80)": "порожнє: за типом (будинок 75, автодім 80)",
  "0 = földszint": "0 = перший поверх",
  "A nap pályája ma": "Шлях сонця сьогодні",
  "Holdfázis: növekvő hold": "Фаза місяця: місяць у фазі росту",
  "Értesítés a telefonra": "Сповіщення на телефон",
  "watt darabonként": "ват за штуку",
  "ó/nap": "год/день",
  "óra/nap": "годин/день",
  "óra naponta": "годин на день",
  "összesen W": "разом Вт",
  "napos óra": "сонячних годин",
  "pl. egy mondat, amit csak ti tudtok": "напр. речення, яке знаєте лише ви",
  "Amit át akarsz adni.": "Те, що хочеш передати.",
  "pl. Találkozó, Rejtek": "напр. Зустріч, Схованка",
  "pl. Vércsoport és gyógyszerek": "напр. Група крові та ліки",
  "Amit csak a családod olvashat.": "Те, що може прочитати лише твоя родина.",
  "pl. Feri, vagy Kovácsék": "напр. Петро або Ковалі",
  "Írd ide az üzenetet": "Напиши тут повідомлення",
  "pl. Ceglédi kör": "напр. Сусідське коло",
  "a szoba kódja": "код кімнати",
  "Bezárás": "Закрити",
  "Ige — Máté 6,34": "Слово — Матвія 6:34",
  "A tájoló indul…": "Орієнтування запускається…",
  "Nem kaptunk engedélyt az iránytűhöz. A nap és hold rész ettől függetlenül működik.": "Ми не отримали дозволу на компас. Розділ про сонце й місяць працює незалежно від цього.",
  "db": "шт.",
  "lejár:": "спливає:",
  "LEJÁRT": "СПЛИВ",
  "1 hónapon belül lejár": "спливає протягом 1 місяця",
  "fél éven belül lejár": "спливає протягом пів року",
  "hatótáv kb.": "запас ходу прибл.",
  "kg teherbírás": "кг вантажопідйомність",
  "Mi van itt": "Що тут є",
  "tétel": "позицій",
  "Térképen ✓ — pozíció frissítése": "На карті ✓ — оновити позицію",
  "térképen ✓": "на карті ✓",
  "készültség": "готовність",
  "készültség: nincs adat": "готовність: даних немає",
  "nap": "днів",
  "Teszt-adatok betöltve: 3 fő, 1 háziállat, 4 helyszín (közte autó),": "Тестові дані завантажено: 3 особи, 1 домашня тварина, 4 локації (зокрема авто),",
  "készlet-tétel ✓ (a neveket az adatlapjukon átírhatod)": "позицій запасу ✓ (імена можна змінити на їхніх картках)",
  "óra": "годин",
  "perc": "хвилин",
  "Napkeltéig még": "До сходу сонця ще",
  "Napnyugtáig még": "До заходу сонця ще",
  "A nap": "Сонце",
  "-e ment le.": "-го зайшло.",
  "Ezen a szélességen ma nem megy le a nap.": "На цій широті сьогодні сонце не заходить.",
  "Ezen a szélességen ma nem kel fel a nap.": "На цій широті сьогодні сонце не сходить.",
  "— powerbank, power station és napelem-termelés; az üzemanyag a fűtésnél számít": "— павербанк, зарядна станція та виробіток сонячних панелей; пальне враховується в опаленні",
  "fűtés": "опалення",
  "áram": "електрика",
  "Áramszünetre: hordozható energia": "На випадок відключення: переносна енергія",
  "Hirdetés": "Оголошення",
  "delelés": "кульмінація",
  "Holdfázis:": "Фаза місяця:",
  "Használható fény": "Придатне світло",
  "és": "і",
  "között: a napkelte előtt és a napnyugta után is van még annyi, amivel lehet menni.": "між: і перед сходом, і після заходу сонця його ще стільки, що можна йти.",
  "A számítás": "Розрахунок зроблено за",
  "alapján készült, néhány perc pontossággal.": ", з точністю до кількох хвилин.",
  "a térkép utolsó nézete": "останнім видом карти",
  "egy mentett pontod": "однією зі збережених тобою точок",
  "a mostani helyzeted": "твоїм поточним місцем",
  "növekvő hold": "місяць у фазі росту",
  "fogyó hold": "місяць у фазі спаду",
  "újhold": "молодий місяць",
  "telihold": "повний місяць",
  "első negyed": "перша чверть",
  "utolsó negyed": "остання чверть",
  "Ma éjjel gyakorlatilag nincs holdfény, számolj lámpával.": "Цієї ночі місячного світла практично немає, розраховуй на ліхтар.",
  "Közepes holdfény: nyílt terepen segít, erdőben nem.": "Помірне місячне світло: на відкритій місцевості допомагає, у лісі — ні.",
  "mérés az elmúlt 48 órából. Ezen a készüléken a böngésző nem éri el a légnyomás-szenzort, ezért kézzel viszed be; a telefonos appban magától fog mérni.": "вимірювань за останні 48 годин. На цьому пристрої браузер не має доступу до датчика тиску, тому ти вводиш значення вручну; у мобільному застосунку вимірювання буде автоматичним.",
  "Ez a böngésző nem tud értesítést megjeleníteni": "Цей браузер не вміє показувати сповіщення",
  "Bekapcsolva — riasztáskor a telefonod jelez": "Увімкнено — при тривозі телефон подасть сигнал",
  "Kikapcsolva": "Вимкнено",
  "Adás indítása": "Почати передавання",
  "Adás megy — koppints újra": "Передавання триває — торкнися ще раз",
  "Adás": "Передавання",
  "Vétel": "Прийом",
  "Vétel megy — koppints újra": "Прийом триває — торкнися ще раз",
  "Megy — koppints újra": "Триває — торкнися ще раз",
  "Áll — koppints újra": "Зупинено — торкнися ще раз",
  "Fény-SOS": "Світловий SOS",
  "alapok — mindenkinek": "основи — для всіх",
  "részletek, mélyebben": "докладніше, глибше",
  "ennyi áll a tárcádban": "стільки в твоєму гаманці",
  "nincs internet · minden a kódban": "інтернету немає · усе в коді",
  "a leggyengébb": "найслабша ланка",
  "Indítás": "Запустити",
  "Számolók": "Калькулятори",
  "Nem sikerült a helymeghatározás:": "Не вдалося визначити місцеперебування:",
  "A térkép utolsó nézete alapján is tudok számolni, nyisd meg egyszer a térképet.": "Можу порахувати й за останнім видом карти — відкрий карту хоча б раз.",
  "Ehhez előbb le kell tölteni a Biblia szövegét (a Biblia képernyőn, egyszer).": "Для цього спершу треба завантажити текст Біблії (на екрані Біблії, один раз).",
  "‹ Könyvek": "‹ Книги",
  "Ószövetség": "Старий Заповіт",
  "Újszövetség": "Новий Заповіт",
  "300+ találat (az elsőket mutatom)": "300+ результатів (показую перші)",
  "találat": "результатів",
  "Nincs találat erre:": "Немає результатів для:",
  "fejezet": "Розділ",
  "Egész fejezet": "Увесь розділ",
  "Még nincs kiemelt vers. Nyiss meg egy fejezetet, és koppints egy versre.": "Виділених віршів ще немає. Відкрий розділ і торкнися вірша.",
  "Klasszikus prófétai szakaszok. Az értelmezésük felekezetenként eltér — itt a szöveg áll, magyarázat nélkül.": "Класичні пророчі уривки. Їх тлумачення різниться між конфесіями — тут стоїть лише текст, без пояснень.",
  "Amikor félsz": "Коли боїшся",
  "Amikor nem tudod, mit tegyél": "Коли не знаєш, що робити",
  "Amikor kifogytál az erődből": "Коли сили вичерпалися",
  "Amikor veszteség ér": "Коли спіткала втрата",
  "Amikor félted a családodat": "Коли боїшся за родину",
  "Amikor az ellátás a kérdés": "Коли питання в запасах",
  "Amikor másokon kell segítened": "Коли треба допомогти іншим",
  "Amikor a kitartás a tét": "Коли йдеться про витривалість",
  "Jézus beszéde az utolsó időkről": "Промова Ісуса про останні часи",
  "Dániel látomásai": "Видіння Даниїла",
  "A szenvedő szolga és a Messiás": "Стражденний слуга і Месія",
  "Az utolsó idők jellemzői": "Ознаки останніх часів",
  "Ítélet és helyreállítás": "Суд і відновлення",
  "teherbírás": "вантажопідйомність",
  "Bogáncs": "Рекс",
  "Belépés": "Вхід",
  "Betöltés...": "Завантаження...",
  "Értem": "Зрозуміло",
  "Ha valaki ír egy szobádba, jelezzen a telefonod — akkor is, ha az app be van zárva.": "Якщо хтось напише у твою кімнату, хай телефон подасть сигнал — навіть коли застосунок закритий.",
  "Ehhez tudni kell, hol vagy. Nyomd meg a Mérés a helyzetemre gombot.": "Для цього треба знати, де ти. Натисни кнопку «Розрахувати для мого місця».",
  "Nézd meg most, mennyi üzemanyag van az autóban. Ha kevesebb mint fél tank, tankolj fel a héten, és onnantól tartsd ezt a szintet. Ez az egyetlen szokás, ami pénzbe nem kerül, mert azt a benzint úgyis megvennéd, csak korábban.": "Подивися зараз, скільки пального в автомобілі. Якщо менше пів бака, заправся цього тижня і надалі тримай цей рівень. Це єдина звичка, яка не коштує грошей, бо той бензин ти все одно купиш — просто раніше.",
  "Tudástár — Közlekedés és mobilitás": "База знань — Транспорт і мобільність",
  "A lista a családtagjaidból áll össze, akiket a Háztartásnál vettél fel.": "Список складається з членів родини, яких ти додав у розділі «Домогосподарство».",
  "A dokumentumok a telefonodon maradnak. Nem megy belőlük semmi sehova, felhőbe sem.": "Документи залишаються на твоєму телефоні. Нічого з них нікуди не йде, у хмару теж.",
  "A gomb be- és kikapcsol. Ugyanaz a gomb indítja az adást és állítja meg — nincs külön Állj.": "Кнопка вмикає і вимикає. Та сама кнопка запускає передавання і зупиняє його — окремої «Стоп» немає.",
  "A gyűrű a leggyengébb láncszemet mutatja, nem az átlagot. Egy hiányzó dolog lehúzza az egészet — és ez szándékos.": "Кільце показує найслабшу ланку, а не середнє. Одна відсутня річ тягне вниз усе — і це зроблено навмисне.",
  "A vétel és az adás ugyanazzal a gombbal kapcsol. Amíg megy, hagyd a telefont nyugton.": "Прийом і передавання перемикаються тією ж кнопкою. Поки триває, не чіпай телефон.",
  "Egy témán belül két réteg van. Az alap- és az életmentő cikkek ingyenesek, mindenkinek.": "У межах теми є два рівні. Базові та рятівні статті безкоштовні, для всіх.",
  "Ezt látja az, aki megtalálja a telefonodat. Csak azt írd bele, amit egy idegen is láthat.": "Це побачить той, хто знайде твій телефон. Пиши сюди лише те, що може побачити стороння людина.",
  "Felveszed az azimutot, és a tájoló megmutatja a visszautat is — nem kell fejben tartanod.": "Береш азимут, і компас покаже також дорогу назад — тримати в голові не треба.",
  "Itt veszed fel a családot. Innen jön a fejadag-számítás és a helyszínek listája is.": "Тут ти додаєш родину. Звідси береться розрахунок норм і список локацій.",
  "Keresés szó szerint, és amit megjelölsz, azt könyvjelzővel bármikor visszatalálod.": "Пошук дослівно, а те, що позначиш, завжди знайдеш за закладкою.",
  "Koppints a térképre, és ott új pontot veszel fel.": "Торкнися карти — і там додасться нова точка.",
  "Több számoló van egy helyen — víz, élelem, üzemanyag. Nincs külön csempéjük, mind itt található.": "Кілька калькуляторів в одному місці — вода, їжа, пальне. Окремих плиток у них немає, усі тут.",
  "Új tételt a listához adsz: megadod, mi az, hova teszed, és mikor jár le.": "Додаєш нову позицію до списку: що це, куди кладеш і коли спливає термін.",
  "A gombok be- és kikapcsolnak. Ugyanaz a gomb indítja és állítja le a jelzést.": "Кнопки вмикають і вимикають. Та сама кнопка запускає сигнал і зупиняє його.",
  "A QR-kód a TELJES adatot viszi, nem egy linket. Ezért működik akkor is, ha nincs internet — a másik telefon a kódból olvassa ki.": "QR-код несе ПОВНІ дані, а не посилання. Тому працює і без інтернету — другий телефон читає їх просто з коду.",
  "A vaku nem minden telefonon működik. Ha nem indul, használd a képernyő-fényt — az mindenhol megy.": "Спалах працює не на кожному телефоні. Якщо не вмикається, використай світло екрана — воно є всюди.",
  "A szám azt mutatja, mennyi áll a tárcádban.": "Число показує, скільки в твоєму гаманці.",
  "D": "Пд",
  "K": "Сх",
  "Ny": "Зх",
  "ÉK": "ПнСх",
  "ÉNy": "ПнЗх",
  "DK": "ПдСх",
  "DNy": "ПдЗх",
  "Példabeszédek 22,3": "Приповісті 22:3",
  "Az eszes meglátja a bajt és elrejti magát; a bolondok pedig neki mennek és kárát vallják.": "Заздалегідь біди розумний стережеться, простак іде собі байдужен, і бідує.",
  "2Timóteus 1,7": "2 Тимофію 1:7",
  "Mert nem félelemnek lelkét adott nékünk az Isten; hanem erőnek és szeretetnek és józanságnak lelkét.": "Бо дав нам Бог не духа страху, а (духа) сили і любови і здорового розуму.",
  "Máté 6,34": "Матвія 6:34",
  "Ne aggodalmaskodjatok tehát a holnap felől; mert a holnap majd aggodalmaskodik a maga dolgai felől. Elég minden napnak a maga baja.": "Оце ж не журіть ся про завтра; бо завтра журити меть ся само про своє. Доволї в кожного дня лиха свого.",
  "Zsoltárok 46,2-3": "Псалми 46:1-2",
  "Isten a mi oltalmunk és erősségünk! igen bizonyos segítség a nyomorúságban. Azért nem félünk, ha elváltoznék is a föld, ha hegyek omlanának is a tenger közepébe.": "Бог нам прибіжище і сила, поміч скора в нещастях. Тому не злякаємось, хоч би земля зворушилась і гори захитались серед моря.",
  "Jakab 1,3": "Якова 1:3",
  "Tudván, hogy a ti hiteteknek megpróbáltatása kitartást szerez.": "знаючи, що доказ вашої віри робить терпіннє.",
  "Uram, Te látod, mi nyomaszt engem. Ma éjjel nem tudom megoldani, és nem is akarom azt hazudni Neked, hogy nem félek. Kérlek, vedd le rólam a holnap terhét, és adj erőt ahhoz, amit ma kell elhordoznom. Csendesíts le. Te őrködsz, én alhatok. Jézus nevében, ámen.": "Господи, Ти бачиш, що мене гнітить. Цієї ночі я не можу цього розв'язати і не хочу брехати Тобі, що не боюся. Прошу, зніми з мене тягар завтрашнього дня і дай сили на те, що маю нести сьогодні. Утихомир мене. Ти пильнуєш, я можу спати. В ім'я Ісуса, амінь.",
  "Uram, most kell döntenem, és nincs időm. Adj tiszta fejet, és őrizz meg a pániktól. Mutasd meg a következő egy lépést, nem az egészet, csak a következőt. Legyen erőm megtenni. Jézus nevében, ámen.": "Господи, мені треба вирішувати зараз, а часу немає. Дай ясну голову і збережи від паніки. Покажи наступний один крок, не все — тільки наступний. Дай мені сили його зробити. В ім'я Ісуса, амінь.",
  "Mennyei Atyám! Az Úr Jézus Krisztus nevében megyek eléd. Elismerem, hogy mindenható, örökkévaló Isten vagy, az egész világmindenségnek a teremtője. Én is a Te teremtményed vagyok. Elismerem, hogy bűnös ember vagyok, és sokat vétkeztem ellened. De én ma elhatározom, hogy megtérek és elfogadom a Názáreti Jézus áldozatát, és elismerem, hogy erre az áldozatra nekem is szükségem van. Ezért a szívemet, életemet megnyitom. Kérlek Uram, jöjj a szívembe. Bocsásd meg a bűneimet, szabadíts meg engem a bűntől és annak minden következményétől! Hiszek Benned Jézus. Hiszem, hogy Te vagy az élő Istennek a Fia, ki meghaltál az én bűneimért és feltámadtál a halálból, hogy megigazítsál engem. Elfogadlak Uramnak, Megváltómnak, Szabadítómnak és átadom az életemet, szívemet Neked. Szabadíts meg Uram! Tiszta szívet teremts bennem! Te azt ígérted, hogy a zörgetőnek ajtó nyittatik. Én Isten jelenlétébe akarok kerülni, és Te vagy az Út. Kérlek, vezess engem a Mindenható jelenlétébe! Dicsérlek és áldalak. Szeretlek Uram szívemből, lelkemből, erőmből, a Názáreti Jézus nevében. Dicsőség Istennek, most és mindörökké! Ámen!": "Небесний Отче! В ім'я Господа Ісуса Христа приходжу до Тебе. Визнаю, що Ти всемогутній, вічний Бог, Творець усього всесвіту. І я — Твоє творіння. Визнаю, що я грішна людина і багато чим завинив проти Тебе. Але сьогодні я вирішую покаятися і прийняти жертву Ісуса з Назарету, і визнаю, що ця жертва потрібна й мені. Тому відкриваю своє серце і своє життя. Прошу Тебе, Господи, увійди в моє серце. Прости мої гріхи, визволи мене від гріха і від усіх його наслідків! Вірю в Тебе, Ісусе. Вірю, що Ти — Син живого Бога, що помер за мої гріхи і воскрес із мертвих, щоб виправдати мене. Приймаю Тебе як Господа, Спасителя, Визволителя і віддаю Тобі своє життя і своє серце. Визволи мене, Господи! Створи в мені чисте серце! Ти обіцяв, що хто стукає, тому відчинять. Я хочу стати перед Божим обличчям, а Ти — Дорога. Прошу, веди мене в присутність Всемогутнього! Хвалю Тебе і благословляю. Люблю Тебе, Господи, усім серцем, усією душею, усією силою, в ім'я Ісуса з Назарету. Слава Богу нині і повіки! Амінь!",
  "Egy powerbank a telefonhoz kevés, ha a router és a lámpa is menne. Nézd meg, mekkora kapacitás kell három napra.": "Одного павербанка для телефона замало, якщо мають працювати ще роутер і лампа. Подивися, яка ємність потрібна на три дні.",
  "A nyílt lángú fűtés zárt térben szén-monoxidot termel. Ha bent fűtesz, CO-érzékelő nem opció, hanem alapfelszerelés.": "Опалення відкритим полум'ям у закритому приміщенні виробляє чадний газ. Якщо палиш у приміщенні, датчик CO — не опція, а базове спорядження.",
  "Napi három liter fejenként, csak ivásra. Mellé egy szűrő vagy klórtabletta, ha a csapvíz eredete kétségessé válik.": "Три літри на день на особу, лише для пиття. Плюс фільтр або таблетки хлору, якщо походження водопровідної води стає сумнівним.",
  "Fejlámpa, hogy szabad maradjon a két kezed, és tartalék elem hozzá. A gyertya tűzveszély, nem megoldás.": "Налобний ліхтар, щоб обидві руки лишалися вільними, і запасні батарейки до нього. Свічка — це пожежна небезпека, а не рішення.",
  "Víz (csempe)": "Вода",
  "Étel (csempe)": "Їжа",
  "Fűtés (csempe)": "Тепло",
  "Áram (csempe)": "Струм",
  "KÖZÖS": "СПІЛЬНЕ",
  "Közös": "Спільне",
  "közös": "спільне",
  "Közös felszerelés": "Спільне спорядження",
  "Közös felszerelés (egyszer az egész csoportnak)": "Спільне спорядження (один раз на всю групу)",
  "üzemanyag": "пальне",
  "Gyógyszer:": "Ліки:",
  "Vércsoport:": "Група крові:",
  "Betegség:": "Хвороба:",
  "Vércsoport-kártya:": "Картка групи крові:",
  "Élelmiszer": "Продукти",
  "Elsősegély": "Перша допомога",
  "Eszközök - alvás/menedék": "Спорядження - сон/укриття",
  "Eszközök - főzés/tűzgyújtás": "Спорядження - готування/розпалювання",
  "Eszközök - fűtés": "Спорядження - опалення",
  "Eszközök - világítás": "Спорядження - освітлення",
  "Eszközök - öltözet": "Спорядження - одяг",
  "Eszközök - EDC": "Спорядження - EDC",
  "Higiénia": "Гігієна",
  "Mobilitás": "Мобільність",
  "Mobilitás:": "Мобільність:",
  "Fény-SOS (képernyő)": "Світловий SOS (екран)",
  "Fény-SOS (vaku)": "Світловий SOS (спалах)",
  "Ürítés": "Очистити",
  "Pontok kimentése (GPX)": "Експорт точок (GPX)",
  "Teljes mentés": "Повна резервна копія",
  "Visszatöltés": "Відновлення",
  "Checklista nyomtatása": "Друк контрольного списку",
  "Kezdő": "Початок",
  "Lámpa": "Ліхтар",
  "Beállít": "Налаштувати",
  "LED be": "LED увімк.",
  "Nincs vaku": "Спалаху немає",
  "Kamera vétel leállítása": "Зупинити прийом камерою",
  "Mikrofon vétel leállítása": "Зупинити прийом мікрофоном",
  "Másolás": "Копіювати",
  "Beillesztés szövegből": "Вставити з тексту",
  "Bemutató-adatok betöltése": "Завантажити демодані",
  "A neved a közösségben": "Твоє ім'я у спільноті",
  "Összes kategória": "Усі категорії",
  "Összes készlet": "Усі запаси",
  "Mennyiség (ml/db)": "Кількість (мл/шт.)",
  "Hol áll általában": "Де зазвичай стоїть",
  "Miért (pl. 10 tojás, favágás)": "За що (напр. 10 яєць, рубання дров)",
  "Ez összesen": "Це разом",
  "kg vagy liter": "кг або літрів",
  "Nincs találat.": "Немає результатів.",
  "(névtelen)": "(без імені)",
  "nincs adat": "даних немає",
  "Összesen": "Разом",
  "Élelem": "Їжа",
  "hiányzik": "бракує",
  "Hiányzik": "Бракує",
  "személyre szóló": "на особу",
  "alap ruházat": "базовий одяг",
  "állat-specifikus": "для тварини",
  "autó": "авто",
  "pár": "пар",
  "1 pár": "1 пара",
  "1 pár (lábon)": "1 пара (на ногах)",
  "egy az egész csoportnak": "одна на всю групу",
  "kép": "зображення",
  "PDF/fájl": "PDF/файл",
  "a tárban": "у сховищі",
  "tárolt": "збережено",
  "átadásra vár": "очікує передавання",
  "Gíra": "Гіра",
  "Hány gírát kérsz": "Скільки гір просиш",
  "Hány gíra": "Скільки гір",
  "Kinek (azonosító)": "Кому (ідентифікатор)",
  "Neve (nem kötelező)": "Назва (необов'язково)",
  "Kezdőlapon nem látszik": "На головній не видно",
  "Nincs napkelte vagy napnyugta": "Немає сходу або заходу сонця",
  "Légnyomás az elmúlt órákban": "Атмосферний тиск за останні години",
  "Nem sikerült.": "Не вдалося.",
  "Nem sikerült:": "Не вдалося:",
  "Nem sikerült a kamera:": "Не вдалося з камерою:",
  "Nem sikerült a mikrofon:": "Не вдалося з мікрофоном:",
  "Nem fért el: megtelt a tár. Törölj egy régi dokumentumot.": "Не помістилося: сховище заповнене. Видали якийсь старий документ.",
  "Add meg a PIN-t": "Введи PIN",
  "4-6 számjegy kell.": "Потрібно 4-6 цифр.",
  "Hibás PIN.": "Хибний PIN.",
  "Feldolgozás:": "Обробка:",
  "Feldolgozás…": "Обробка…",
  "(túl nagy fájl)": "(завеликий файл)",
  "(nem sikerült beolvasni)": "(не вдалося зчитати)",
  "(PDF, max 2 MB. Fényképezd le inkább — a fotót magamtól kicsinyítem)": "(PDF, максимум 2 МБ. Краще сфотографуй — фото я зменшу сам)",
  "Még nincs dokumentum.": "Документів поки немає.",
  "Törlöd a dokumentumot?": "Видалити документ?",
  "Biztosan törlöd? Koppints újra": "Точно видалити? Торкнися ще раз",
  "Előbb vegyél fel családtagot a Háztartásnál.": "Спершу додай члена родини в розділі «Домогосподарство».",
  "Ezen az eszközön nincs helymeghatározás": "На цьому пристрої визначення місця недоступне",
  "Új változat érhető el (": "Доступна нова версія (",
  "Áramforrás hiányzik": "Бракує джерела живлення",
  "Kevés a tüzelő": "Мало палива для обігріву",
  "Kevés a víz": "Мало води",
  "Nincs fényforrás": "Немає джерела світла",
  "Ebben a témában": "У цій темі є ще",
  "további cikk van, a bevezetőjüket fent olvashatod.": "статей, їхні вступи можна прочитати вище.",
  "A teljes szövegük a bővített tudástár része, ami egyszeri feloldással, véglegesen elérhető.": "Їхній повний текст входить до розширеної бази знань, яка відкривається одноразово і назавжди.",
  "Ennek a cikknek a szövege nem jött meg.": "Текст цієї статті не завантажився.",
  "A cikk szövege most nem érhető el.": "Текст статті зараз недоступний.",
  "Tudástár —": "База знань —",
  "Fejlámpa + tartalék elem": "Налобний ліхтар + запасні батарейки",
  "Powerbank (feltöltve)": "Павербанк (заряджений)",
  "Vízszűrő vagy víztisztító tabletta": "Фільтр для води або таблетки для знезараження",
  "Öngyújtó / vízálló gyufa": "Запальничка / водостійкі сірники",
  "Többfunkciós kés": "Багатофункціональний ніж",
  "Gázfőző + gázpalack": "Газовий пальник + балон",
  "Spirituszfőző (denaturált szesz) + üzemanyag": "Спиртівка (денатурат) + пальне",
  "Vegyi melegítő tasak (tűz nélkül)": "Хімічний зігрівальний пакет (без вогню)",
  "Bögre / edény a főzéshez": "Кухоль / посудина для готування",
  "Hőfólia": "Термоковдра",
  "Papírtérkép és iránytű": "Паперова карта і компас",
  "Készpénz kis címletekben": "Готівка дрібними купюрами",
  "Dokumentum-másolatok": "Копії документів",
  "Vízhatlan zsák (dry bag)": "Гермомішок (dry bag)",
  "Mentőmellény": "Рятувальний жилет",
  "Gyorsan száradó ruha": "Швидковисихаючий одяг",
  "Vízálló tok a telefonra": "Водонепроникний чохол для телефона",
  "Réteges téli öltözet": "Багатошаровий зимовий одяг",
  "Sapka, sál, kesztyű": "Шапка, шарф, рукавиці",
  "Vízhatlan bakancs": "Водонепроникні черевики",
  "Kémiai melegítő párna": "Хімічна грілка",
  "Réteges őszi öltözet": "Багатошаровий осінній одяг",
  "Fejlámpa (korán sötétedik)": "Налобний ліхтар (рано темніє)",
  "Naptej és fejfedő": "Сонцезахисний крем і головний убір",
  "Rovarriasztó": "Засіб від комах",
  "Extra víz (meleg miatt)": "Додаткова вода (через спеку)",
  "Kanna víz (tartalék)": "Каністра води (запас)",
  "Hálózsák / takaró": "Спальний мішок / ковдра",
  "Szerszámkészlet": "Набір інструментів",
  "Ponyva / sátorlap": "Тент / полотнище",
  "Bakancs vagy zárt cipő": "Черевики або закрите взуття",
  "Alsónemű": "Спідня білизна",
  "Póló": "Футболка",
  "Hosszú nadrág": "Довгі штани",
  "Pulóver vagy polár": "Светр або фліс",
  "Aláöltözet (hosszú alsó, hosszú ujjú)": "Термобілизна (довгі кальсони, довгий рукав)",
  "Esőkabát vagy esőponcsó": "Дощовик або пончо",
  "Kesztyű": "Рукавиці",
  "Váltóruha (csecsemő)": "Змінний одяг (немовля)",
  "Zokni / rugdalózó": "Шкарпетки / повзунки",
  "Sapka (csecsemő)": "Шапочка (немовля)",
  "Esővédő a babahordozóra": "Дощовик на переноску для малюка",
  "intim higiénia (tisztasági betét / tampon)": "інтимна гігієна (прокладки / тампони)",
  "intim higiénia, ha lány": "інтимна гігієна, якщо дівчина",
  "tápszer (a szokásos márka, napi adag +2 nap)": "суміш (звична марка, денна порція +2 дні)",
  "pelenka (napi 6-8 db)": "підгузки (6-8 шт. на день)",
  "törlőkendő": "вологі серветки",
  "cumi és pótcumi": "соска і запасна соска",
  "saját tápja (NE váltsunk hirtelen: gyomorrontást okoz)": "її власний корм (НЕ міняй різко: спричинить розлад шлунка)",
  "oltási könyv másolata": "копія щеплювального паспорта",
  "póráz és szájkosár": "повідець і намордник",
  "víztisztító tabletta": "таблетки для знезараження води",
  "vízszűrő": "фільтр для води",
  "Inzulin hűtve: hűtőtáska + gélakku": "Інсулін у холоді: термосумка + акумулятор холоду",
  "az inzulin 2-8 °C-ot kíván": "інсулін потребує 2-8 °C",
  "Vércukormérő, tesztcsík, lándzsa": "Глюкометр, тест-смужки, ланцети",
  "cukorbetegség az adatlapján": "діабет у його картці",
  "Szőlőcukor / gyors cukor": "Глюкоза / швидкий цукор",
  "hipoglikémia esetére": "на випадок гіпоглікемії",
  "Tartalék toll/tű + éles-gyűjtő": "Запасна ручка/голка + контейнер для гострого",
  "ha az egyik elromlik vagy elvész": "якщо одна зламається або загубиться",
  "Allergia-gyógyszer (": "Ліки від алергії (",
  "allergia az adatlapján": "алергія в його картці",
  "Adrenalin autoinjektor, ha fel van írva": "Автоінжектор з адреналіном, якщо призначений",
  "súlyos allergiás reakció percek alatt kialakulhat": "тяжка алергічна реакція може розвинутися за хвилини",
  "az adatlapjáról": "з його картки",
  "az ő adatlapjáról, +2 nap tartalék": "з його картки, +2 дні запасу",
  "amit viszünk; a teljes igény": "те, що беремо; повна потреба",
  "indulásra; a teljes igény": "на вихід; повна потреба",
  ": nincs megadva a testtömeg, 15 kg-mal számoltam. Az adatlapján javítható.": ": вагу не вказано, порахував як 15 кг. Виправити можна в його картці.",
  "Több helyen is bejelölve:": "Позначено в кількох місцях:",
  "— mindegyiknél teljes mennyiséggel számít.": "— у кожному враховується повна кількість.",
  "A víz csak az indulásra elég: a teljes igény": "Води вистачить лише на вихід: повна потреба",
  "liter lenne, ebből": "літрів, з них",
  "liter megy veletek. A többit útközben kell megszerezni és tisztítani.": "літрів іде з вами. Решту доведеться здобувати й очищати в дорозі.",
  "Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez túrához való, és a listán kiírom, mennyit kell útközben szerezni.": "Рахує лише те, що ти здатен нести: 1,5 літра на особу. Це для походу, і в списку я випишу, скільки треба здобути в дорозі.",
  "Jelöld ki, ki megy. Enélkül nem tudom kiszámolni, mennyi kell.": "Познач, хто йде. Без цього я не можу порахувати, скільки потрібно.",
  "kategóriájú ruházatot kíván. A készletedben": "— одяг цієї категорії потрібен. У твоїх запасах",
  "ilyen tétel van.": "таких позицій.",
  "nincs ilyen tétel — a készletnél ez egy kategória.": "таких позицій немає — у запасах це категорія.",
  "liter víz és": "літрів води і",
  "kcal élelem. Becsült tömeg:": "ккал їжі. Орієнтовна вага:",
  "A víz csak az indulásra elég.": "Води вистачить лише на вихід.",
  "napra valójában": "днів насправді потрібно",
  "liter kellene, ennyit viszont nem lehet elvinni.": "літрів, але стільки понести неможливо.",
  "liter, amit útközben kell megszerezni:": "літрів треба здобути в дорозі:",
  "vízszűrő, víztisztító tabletta, ismert vízvételi pont. Ezt a listán is nézd meg.": "фільтр для води, таблетки для знезараження, відома точка набору води. Подивися це також у списку.",
  "A készletedben most": "У твоїх запасах зараз",
  "kcal van megadva, ami ennek az útnak a": "ккал, що для цієї дороги становить",
  "Hiányzik még kb.": "Бракує ще приблизно",
  "Ez elég.": "Цього достатньо.",
  "tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz.": "позиціях не вказано енергетичну цінність (ккал/100 г), вони не враховані. Якщо списати з коробки, буде точніше.",
  "Ez nehezebb, mint amit el tudtok vinni. A kijelölt személyek együtt kb.": "Це важче, ніж ви здатні понести. Позначені особи разом витримають приблизно",
  "kg-ot bírnak, a lista": "кг, а список важить",
  "kg. A víz a legnehezebb: fontold meg a vízszűrőt kanna helyett, vagy vidd rövidebb szakaszra.": "кг. Вода найважча: подумай про фільтр замість каністри або бери на коротший відрізок.",
  "Belefér: a kijelöltek kb.": "Поміщається: позначені витримають приблизно",
  "kg-ot bírnak.": "кг.",
  "fő között: fejenként kb.": "особами: на кожного приблизно",
  "Nála:": "У нього:",
  "kg (ebből": "кг (з них",
  "kg a sajátja": "кг власного",
  "kg a közösből": "кг зі спільного",
  "· teherbírása": "· вантажопідйомність",
  "— EZ TÖBB, MINT AMIT ELBÍR": "— ЦЕ БІЛЬШЕ, НІЖ ВІН ЗДАТЕН НЕСТИ",
  "— belefér": "— поміщається",
  "A hiányzik jelölésűek a beszerzési listád. Most": "Позначені як «бракує» — це твій список покупок. Зараз",
  "ilyen van. A vizet és az élelmet a készlet KATEGÓRIÁJÁBÓL ismeri fel, a többit a nevéből.": "таких. Воду та їжу розпізнає за КАТЕГОРІЄЮ запасу, решту — за назвою.",
  "A víz- és energia-számok tervezési értékek, nem orvosi előírás. A csecsemő és az állat külön normával számol.": "Числа щодо води та енергії — планові величини, а не медичний припис. Немовля і тварина рахуються за окремою нормою.",
  "Egy power station a telefont, a lámpát és egy rádiót is elviszi napokig. Kisebb igényre powerbank is elég.": "Одна зарядна станція потягне телефон, лампу і рацію на кілька днів. За меншої потреби вистачить і павербанка.",
  "Tűzifa, PB-palack vagy fűtőolaj — a kockázatelemzés kiszámolja, mennyi kell a megadott napokra.": "Дрова, газовий балон або пічне паливо — розрахунок ризиків порахує, скільки потрібно на задану кількість днів.",
  "Kannás víz és víztisztító a legolcsóbb biztosíték. Egy IBC tartály hosszú távra megoldja.": "Вода в каністрах і засіб для знезараження — найдешевша страховка. Ємність IBC вирішує питання надовго.",
  "Egy fejlámpa a legfontosabb: szabadon hagyja a kezed. Mellé egy tartalék elemkészlet.": "Найважливіший — налобний ліхтар: залишає руки вільними. Плюс запасний комплект батарейок.",
  "A tárolt üzemanyag a fűtésnél is szerepel: ugyanaz a liter vagy fűt, vagy visz.": "Збережене пальне враховується і в опаленні: той самий літр або гріє, або везе.",
  "Ehhez a helyszínhez még nincs készlet rendelve, ezért nem tudjuk mérni. A Készletnél a tétel Tárolási helyénél tudod bejelölni.": "До цієї локації ще не призначено запасів, тому виміряти не можемо. Позначити можна в розділі «Запаси», у полі «Місце зберігання» позиції.",
  "Ehhez a helyszínhez nincs tétel rendelve. A Készletnél a tétel Tárolási helyénél tudod bejelölni.": "До цієї локації не призначено жодної позиції. Позначити можна в розділі «Запаси», у полі «Місце зберігання» позиції.",
  ": nincs hatótáv — add meg a fogyasztást az adatlapján": ": запасу ходу немає — вкажи витрату в його картці",
  "20000 = 20 liter (millilitert kérünk)": "20000 = 20 літрів (просимо в мілілітрах)",
  "5000 = egy 5 literes kanna": "5000 = одна 5-літрова каністра",
  "1500 = másfél literes": "1500 = півторалітрова",
  "100000 = egy mázsa": "100000 = один центнер",
  "11500 = egy 11,5 kg-os PB": "11500 = один балон 11,5 кг",
  ". Ez soknak tűnik. Biztos, hogy jó a mennyiség": ". Це виглядає забагато. Точно правильна кількість",
  "és az egységnyi súly? (Egy IBC tartály például 1 darab, 1000 kg.) OK = mégis felveszem.": "і вага одиниці? (Ємність IBC, наприклад, — 1 штука, 1000 кг.) OK = усе одно додам.",
  "A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan. Töltsd ki a Vészkártya szekcióban.": "Твоя картка екстреної допомоги (група крові, алергія, ліки, контакт) швидко з'являється тут. Заповни в розділі «Картка екстреної допомоги».",
  "pl. Amit hozz magaddal": "напр. Що взяти з собою",
  "víz 5 liter&#10;elemlámpa&#10;gyógyszerek": "вода 5 літрів&#10;ліхтарик&#10;ліки",
  "Ehhez a helyszínhez még nincs készlet rendelve, ezért nem tudjuk mérni. A Készletnél a tétel Tárolási helyénél válaszd ki:": "До цієї локації ще не призначено запасів, тому виміряти не можемо. У розділі «Запаси», у полі «Місце зберігання» позиції обери:",
  "élelmiszernél hiányzik az energia (kcal/100 g) — addig az étel „?”.": "у продуктах бракує енергетичної цінності (ккал/100 г) — доти їжа позначена „?”.",
  "Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez túrához való, és a listán kiírom, mennyi hiányzik a teljes fejadaghoz.": "Рахує лише те, що ти здатен нести: 1,5 літра на особу. Це для походу, і в списку я випишу, скільки бракує до повної норми.",
  "tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz a kép.": "позиціях не вказано енергетичну цінність (ккал/100 г), вони не враховані. Якщо списати з коробки, картина буде точнішою.",
  "A víz- és energia-számok tervezési értékek, nem orvosi előírás. A csecsemő és az állat külön normán fut, nem a felnőtt arányosításából.": "Числа щодо води та енергії — планові величини, а не медичний припис. Немовля і тварина рахуються за окремою нормою, а не пропорційно від дорослого.",
  "fő ·": "осіб ·",
  "nap ·": "днів ·",
  "fő/állat ·": "осіб/тварин ·",
  "fő)": "осіб)",
  "Víz (": "Вода (",
  "kg testtömegre)": "кг маси тіла)",
  "0,06 l/testtömeg-kg/nap": "0,06 л/кг маси тіла/добу",
  "l/nap ×": "л/добу ×",
  "kcal/nap ×": "ккал/добу ×",
  "személyre szóló (": "на особу (",
  ": be van írva a betegség (": ": хвороба вказана (",
  "fejenként egy (": "по одному на особу (",
  "— a": "— з",
  "-es tank": "-літрового бака",
  "m² alapján": "за м²",
  "%-a .": "% .",
  "kézzel megadott napi igény": "вручну задана добова потреба",

  // -- 2026-09-02, Istvan: a het szotar osszevetesekor EZ A 18 KULCS CSAK AZ UKRANBOL hianyzott.
  // Nem uj szoveg: a masik hat nyelv mind ismerte oket, tehat ukranul MAGYARUL jelentek meg a
  // feluleten -- ugyanaz a nema visszaesés, mint az `alapok — mindenkinek` cimkenel.
  // A forma a MEGLEVo orosz valtozatot koveti (az a legkozelebbi minta), de ukranul, tegezve:
  // a szotar tulnyomo resze `ti`-alakot hasznal (63 kontra 15), es az idezojel `«»` (23 kontra 3).
  "2 méter (145 MHz) — amatőr": "2 метри (145 МГц) — аматорський",
  "40 méter (7 MHz) — amatőr, rövidhullám": "40 метрів (7 МГц) — аматорський, короткохвильовий",
  "70 cm (435 MHz) — amatőr": "70 см (435 МГц) — аматорський",
  "80 méter (3,6 MHz) — amatőr, rövidhullám": "80 метрів (3,6 МГц) — аматорський, короткохвильовий",
  "CB (27 MHz) — polgári sáv": "CB (27 МГц) — громадянський діапазон",
  "PMR446 (446 MHz) — engedély nélküli kézirádió": "PMR446 (446 МГц) — рація без ліцензії",
  "ALLPOWERS B1000 bővítő akku (1152 Wh)": "ALLPOWERS B1000 додатковий акумулятор (1152 Вт·год)",
  "ALLPOWERS B3000 bővítő akku (3168 Wh)": "ALLPOWERS B3000 додатковий акумулятор (3168 Вт·год)",
  "ALLPOWERS P1800 (1024 Wh): 1024 Wh tárolt energia, 1800 W folyamatos kimenet": "ALLPOWERS P1800 (1024 Вт·год): 1024 Вт·год запасеної енергії, 1800 Вт постійної потужності",
  "ALLPOWERS SF100 (100 W, hajlékony)": "ALLPOWERS SF100 (100 Вт, гнучка)",
  "ALLPOWERS SF200 (200 W, hajlékony)": "ALLPOWERS SF200 (200 Вт, гнучка)",
  "ALLPOWERS SP012 (100 W, terepszínű)": "ALLPOWERS SP012 (100 Вт, камуфляж)",
  "Jegyzet rajzolása": "Намалювати нотатку",
  "2100 kcal fejenként naponta. Járkálás, ház körüli teendők. Ez a nemzetközi vészhelyzeti tervezés alapszáma is.": "2100 ккал на людину на добу. Ходьба, справи по дому. Це також базова цифра міжнародного планування на випадок надзвичайних ситуацій.",
  "A hatótávot HÁROM dolog dönti el, és a watt csak az egyik — rendszerint a legkisebb súlyú. A másik kettő: hogy MILYEN SÁVON adsz, és hogy MI van közted és a másik között. Ezért nem lehet egy rádióra egyetlen kilométer-számot mondani.": "Дальність визначають ТРИ речі, і вати — лише одна з них, зазвичай найменш важлива. Інші дві: у ЯКОМУ ДІАПАЗОНІ ти передаєш і ЩО є між тобою та іншим. Тому для рації не можна назвати одну цифру в кілометрах.",
  "Írd be, amit tudsz — ami nincs a listán, azt add hozzá a végén. A kilogrammnál a SZÁRAZ tömeg számít (a rizs főzve nehezebb, de ugyanannyi kalória).": "Впиши, що знаєш — чого немає в списку, додай у кінці. У кілограмах рахується СУХА вага (варений рис важчий, але калорій стільки ж).",
  "Magyarországon engedély nélkül használható, de a törvény MAXIMUM 0,5 wattot és gyári, nem cserélhető antennát enged. Ezért van, hogy a doboz 10 kilométert ígér, a valóság meg 1-3.": "В Угорщині її можна використовувати без ліцензії, але закон дозволяє МАКСИМУМ 0,5 вата і заводську незмінну антену. Тому на коробці обіцяють 10 кілометрів, а насправді виходить 1-3.",
  "Nem fogyókúrás számoló. Azt mondja meg, hogy a KÉSZLETED hány napra elég, és mennyi hiányzik ahhoz a naphoz, ameddig ki akarod húzni. A napi szükséglet nem „normál\" étkezés: vészhelyzetben a cél a működőképesség, nem a jóllakottság.": "Це не калькулятор для схуднення. Він каже, на скільки днів вистачить ТВОГО ЗАПАСУ і скільки бракує до того дня, до якого ти хочеш протриматися. Добова потреба — це не «звичайне» харчування: у надзвичайній ситуації мета — зберегти працездатність, а не ситість.",

  // SUGO-TURA (coach) szovegei, 2026-10-05 -- Fonok: "Menjen a forditas."
  "Helyi szoba: szöveg a közeledben lévőknek, közös hálón, internet nélkül.": "Локальна кімната: текст для тих, хто поруч із тобою, у спільній мережі, без інтернету.",
  "Szobák: zárt csoport, amit a gazda kódjával lehet elérni, interneten át. Messziről is.": "Кімнати: закрита група, доступна за кодом власника, через інтернет. Навіть здалеку.",
  "Morze: rövid üzenet hanggal vagy fénnyel; a vétel kamerával és mikrofonnal megy.": "Морзе: коротке повідомлення звуком або світлом; приймання працює через камеру й мікрофон.",
  "Fax (SSTV): kép átküldése hangban, rádión is. Ugyanaz a gomb indít és állít.": "Факс (SSTV): передавання зображення у звуці, також через радіо. Та сама кнопка запускає й зупиняє.",
  "Adás: ide írod az üzenetet, és a telefon hanggal vagy fénnyel leadja.": "Передача: тут ти вводиш повідомлення, і телефон передає його звуком або світлом.",
  "Olvasás fényből: a kamera a másik villogó fényét olvassa vissza szöveggé.": "Читання зі світла: камера перетворює мерехтливе світло іншого назад у текст.",
  "Olvasás hangból: a mikrofon a sípoló jelet fejti vissza.": "Читання зі звуку: мікрофон розшифровує сигнал, що пищить.",
  "Gyakorló: hallás utáni fejtés, kézi kulcs és kopogás — itt tanulod meg.": "Тренажер: розшифрування на слух, ручний ключ і стукіт — тут ти цього вчишся.",
  "Alapok: időzítés, sebesség, a teljes ábécé, és mit tegyél zárt helyen.": "Основи: ритм, швидкість, повна абетка і що робити в замкненому приміщенні.",
  "A szoba beállításai": "Налаштування кімнати",
  "A szoba kódja: ezt add meg annak, akit behívsz. Koppints rá, és a vágólapra kerül.": "Код кімнати: дай його тому, кого запрошуєш. Торкнися — і він потрапить у буфер обміну.",
  "Értesítés: a készülék engedélye, és külön az, hogy EBBEN a szobában jelezzen-e.": "Сповіщення: дозвіл пристрою і окремо те, чи має воно сповіщати в ЦІЙ кімнаті.",
  "A neved: ezen a néven látnak minden szobában. Egy szobában egy nevet csak egy valaki használhat.": "Твоє імʼя: під цим імʼям тебе бачать у кожній кімнаті. В одній кімнаті імʼям може користуватися лише одна людина.",
  "Tagok: a szoba tagjainak listája. Ha te vagy a gazda, egy tagra koppintva eltávolíthatod: az új üzeneteket már nem látja, és csak új meghívóval jöhet vissza.":
    "Учасники: список учасників кімнати. Якщо ви власник, торкніться учасника, щоб видалити його: він більше не бачитиме нових повідомлень і зможе повернутися лише за новим запрошенням.",
  "Megszüntetés: ha te vagy a gazda, a törlés mindenkinek megszünteti. Ha nem, csak te lépsz ki.": "Видалення: якщо ти власник, видалення прибирає кімнату для всіх. Якщо ні, виходиш лише ти.",
  "A helyi szoba beállításai": "Налаштування локальної кімнати",
  "A szoba kulcsa: közös jelszó. Akinek nincs meg, annak értelmetlen betűsor marad az üzenet.": "Ключ кімнати: спільний пароль. Хто його не має, для того повідомлення лишається беззмістовним набором літер.",
  "A neved: ezt látják a többiek az üzeneted mellett.": "Твоє імʼя: це бачать інші поруч із твоїм повідомленням.",
  "Morze adás": "Передача Морзе",
  "Ide írod az üzenetet. Ékezet és cirill nem megy: a Morze-tábla latin betűt és számot ismer.": "Тут ти вводиш повідомлення. Діакритика й кирилиця не працюють: таблиця Морзе знає латинські літери й цифри.",
  "Alatta rögtön látod, hogy néz ki Morze-jelekben.": "Одразу під ним видно, як це виглядає у знаках Морзе.",
  "Adás: ugyanaz a gomb indít és állít. Nincs külön Állj.": "Передача: та сама кнопка запускає й зупиняє. Окремого Стоп немає.",
  "SOS: egy koppintás, és megy a nemzetközi vészjel, amíg le nem állítod.": "SOS: один дотик — і йде міжнародний сигнал лиха, доки ти його не зупиниш.",
  "A fogaskerék alatt a sebesség, a hangmagasság, az ismétlés és a villogtatás.": "Під шестернею: швидкість, висота тону, повтор і блимання.",
  "Olvasás fényből": "Читання зі світла",
  "Indítsd, és irányítsd a kamerát a villogó fényre. Sötét háttér, a fény a kép közepén.": "Запусти й наведи камеру на мерехтливе світло. Темне тло, світло посередині кадру.",
  "A lámpa és a sáv mutatja, mit lát a kamera. Ha nem villan, nem jó a kivágás.": "Лампа і смуга показують, що бачить камера. Якщо не блимає, кадр підібрано погано.",
  "Fent a nyers jel, alatta a megfejtett szöveg.": "Угорі сирий сигнал, під ним розшифрований текст.",
  "A fogaskerék alatt a vétel-sebesség, a nagyítás és a kalibráció.": "Під шестернею: швидкість приймання, збільшення й калібрування.",
  "Olvasás hangból": "Читання зі звуку",
  "Indítsd, és tartsd a telefont a hang felé. Csendben megy a legjobban.": "Запусти й тримай телефон до звуку. Найкраще працює в тиші.",
  "A lámpa és a frekvencia mutatja, mit hall. Zajra az érzékenységet szigorítsd.": "Лампа і частота показують, що він чує. Проти шуму зроби чутливість суворішою.",
  "A fogaskerék alatt a vétel-sebesség, az érzékenység és a kalibráció.": "Під шестернею: швидкість приймання, чутливість і калібрування.",
  "Morze gyakorló": "Тренажер Морзе",
  "Három mód: hallás után, kézi kulcs és kopogás. Egy koppintás a váltás.": "Три режими: на слух, ручний ключ і стукіт. Один дотик перемикає.",
  "Mit gyakorolsz: betű, szám, három jel vagy szó. Kezdd a betűvel.": "Що тренуєш: літера, цифра, три знаки чи слово. Почни з літери.",
  "Új feladat lejátszik egy jelet. Ha nem kaptad el, játszd le újra.": "Нове завдання програє сигнал. Якщо не вловив, програй ще раз.",
  "Írd le, amit hallottál, és ellenőrizd. A megoldás és a Morze-minta csak utána látszik.": "Запиши, що почув, і перевір. Відповідь і візерунок Морзе зʼявляються лише потім.",
  "Kézi kulcs": "Ручний ключ",
  "Nyomd és tartsd: rövid a pont, hosszú a vonás. Gépen a szóköz is kulcs.": "Натисни й тримай: коротко — крапка, довго — тире. На компʼютері пробіл теж є ключем.",
  "Fent a jel, alatta amit a gép kiolvasott belőle. A szünet hossza adja a betű- és szóhatárt.": "Угорі сигнал, під ним те, що застосунок із нього прочитав. Довжина паузи дає межу літери й слова.",
  "Törlés: tiszta lappal kezdesz.": "Очистити: починаєш з чистого аркуша.",
  "Kopogás": "Стукіт",
  "A rács: minden betű két koppintás-csoport, előbb a sor, aztán az oszlop. A C és a K egy mezőn van.": "Сітка: кожна літера — це дві групи стуків, спершу рядок, потім стовпець. C і K в одній клітинці.",
  "Mutat egy betűt, te lekopogod: sor, szünet, oszlop. A szünet zárja a csoportot.": "Показує літеру, а ти її вистукуєш: рядок, пауза, стовпець. Пауза закриває групу.",
  "Megmondja, jó volt-e, és kiírja a betű helyét a rácsban.": "Каже, чи було правильно, і показує місце літери в сітці.",
  "Morze alapok": "Основи Морзе",
  "A teljes ábécé. Ez a táblázat magából a kódból épül, tehát nem tud eltérni attól, amit az app ad.": "Повна абетка. Ця таблиця будується з самого коду, тож вона не може відрізнятися від того, що передає застосунок.",
  "Kézi visszafejtés: ha leírtad a hallott jelet, ide beírva megkapod a szöveget.": "Ручне розшифрування: якщо ти записав почутий сигнал, введи його тут — і отримаєш текст.",
  "Adás beállításai": "Налаштування передачі",
  "Sebesség és hangmagasság. Kezdőnek a lassabb a jobb.": "Швидкість і висота тону. Початківцю краще повільніше.",
  "Ismétlés: addig megy a jel, amíg le nem állítod.": "Повтор: сигнал іде, доки ти його не зупиниш.",
  "Fény, hang vagy mindkettő. A vaku nem minden telefonon megy; a képernyő mindig.": "Світло, звук або і те, і те. Спалах працює не на кожному телефоні; екран — завжди.",
  "Kalibrációs adás: a PARIS szót küldi, amiből a másik fél beállítja a tempót.": "Калібрувальна передача: надсилає слово PARIS, за яким інша сторона налаштовує темп.",
  "Fény-vétel beállításai": "Налаштування приймання зі світла",
  "Vétel-sebesség: állítsd a vett Morze tempójához, amíg tisztán jönnek a betűk.": "Швидкість приймання: налаштуй її на темп прийнятого Морзе, доки літери не йтимуть чисто.",
  "Nagyítás: távoli fényhez.": "Збільшення: для далекого світла.",
  "Kalibráció: a másik PARIS-t küld, ez megméri belőle a tempót.": "Калібрування: інша сторона надсилає PARIS, і з цього вимірюється темп.",
  "Hang-vétel beállításai": "Налаштування приймання зі звуку",
  "Vétel-sebesség: állítsd a vett Morze tempójához.": "Швидкість приймання: налаштуй її на темп прийнятого Морзе.",
  "Érzékenység: balra érzékenyebb, jobbra szigorúbb a zajra.": "Чутливість: ліворуч чутливіше, праворуч суворіше до шуму.",
  "Mód: Martin M1 a biztos; a vevőnek ugyanezt kell tudnia.": "Режим: Martin M1 надійний; приймач має знати той самий.",
  "Kép választása, majd Adás: a telefon hangként játssza le. Tartsd a rádió mikrofonjához.": "Вибери зображення, тоді Передача: телефон програє його як звук. Піднеси його до мікрофона рації.",
  "Vétel: ugyanaz a gomb indít és állít. Hangfájlból is megy, ha valaki felvételt küld.": "Приймання: та сама кнопка запускає й зупиняє. Працює і з аудіофайлу, якщо хтось надішле запис.",
  "Nyomd hosszan a térképet: ott új pontot veszel fel. A helyszínek jelölőjén a szám a készültség, nem sorszám.": "Натисніть і утримуйте мапу: там ви додасте нову точку. На позначках ваших місць число означає рівень готовності, а не порядковий номер.",
  "Mérés: két koppintás, és megkapod a távolságot.": "Вимірювання: два дотики — і маєш відстань.",
  "Pont ide, ahol vagyok: a GPS helyedet menti. Helyzetem küldése: elküldöd valakinek, hol vagy.": "Точка саме тут: зберігає твою GPS-позицію. Надіслати мою позицію: ти надсилаєш комусь, де ти.",
  "Pontok kimentése (GPX): a pontjaid fájlba, más térképbe is.": "Експорт точок (GPX): твої точки у файл, також для інших карт.",
  "Terület letöltése: a térkép offline is meglesz. Ha nem kell már, a Tárolt térkép törlése felszabadítja a helyet.": "Завантажити ділянку: карта буде й офлайн. Якщо вона більше не потрібна, Видалити збережену карту звільняє місце.",
  "A bővített tudástár a Prémium része: prémium kóddal, egyszeri feloldással, véglegesen. A cikk elején látod, meddig tart az ingyenes rész és hol kezdődik a bővített.": "Розширена база знань входить до Преміуму: розблоковується один раз преміум-кодом, назавжди. На початку статті видно, де закінчується безкоштовна частина й починається розширена.",
  "Kereséssel gyorsabban odaérsz, mint görgetéssel.": "Пошуком дістанешся швидше, ніж прокручуванням.",
  "Új tétel: mi az, mennyi, hol tartod, mikor jár le. A lejárat színe magától változik.": "Нова позиція: що це, скільки, де тримаєш, коли спливає термін. Колір терміну змінюється сам.",
  "Szűrés kategóriára, helyszínre és készlet-fajtára: a 72 órás csomagot például külön látod.": "Фільтрування за категорією, локацією і видом запасу: 72-годинний пакет, наприклад, бачиш окремо.",
  "72h csomag: egy koppintással feltölti az alap-listát, amit aztán a sajátodra igazítasz.": "Пакет 72 год: один дотик заповнює базовий список, який ти потім підганяєш під себе.",
  "Export: a lista fájlba, például a családnak. Ürítés: mindent töröl, előtte exportálj.": "Експорт: список у файл, наприклад для родини. Очищення: видаляє все, спершу експортуй.",
  "Kik mennek: a lista a Háztartásnál felvett családtagokból áll össze.": "Хто йде: список складається з членів родини, доданих у Домогосподарстві.",
  "Hogyan és milyen út: autóval más fér, mint hátizsákkal; a túra fajtája hozza a saját tételeit.": "Як і яка дорога: в авто вміщається інше, ніж у рюкзак; тип виходу приносить свої позиції.",
  "Hány napra: ebből számol a víz és az élelem.": "На скільки днів: із цього рахуються вода і їжа.",
  "A súlykeret azt mutatja, mennyit bírtok el összesen, nem azt, mennyi fér a zsákba.": "Ліміт ваги показує, скільки ви здатні нести разом, а не скільки вміститься в рюкзак.",
  "Itt veszed fel a családot. Innen jön a fejadag és a Mit vigyek lista.": "Тут ти додаєш родину. Звідси беруться добова норма і список Що взяти.",
  "Háziállat is számít: víz és élelem neki is kell.": "Домашні тварини теж рахуються: їм також потрібні вода і їжа.",
  "Helyszín: otthon, nyaraló, autó. Mindegyiknek saját készlete és készültség-kártyája lesz a kezdőlapon.": "Локація: дім, дача, авто. Кожна матиме власний запас і власну картку готовності на головній сторінці.",
  "Ezt látja, aki megtalálja a telefonod. Csak azt írd ide, amit egy idegen is láthat.": "Це бачить той, хто знайде твій телефон. Пиши сюди лише те, що може побачити й незнайомець.",
  "Vércsoport, allergia, gyógyszer, betegség: ez az, ami egy mentőnek számít.": "Група крові, алергія, ліки, хвороба: саме це важить для медика.",
  "Kit hívjanak: egy név és egy szám elég.": "Кого викликати: достатньо одного імені й одного номера.",
  "QR-kód: a kártya egy képben, amit a másik telefon beolvas.": "QR-код: картка в одному зображенні, яке зчитає інший телефон.",
  "Nyomtatás: a tárcába. Mind nyomtatása minden családtagét, a Családi kártya egy QR-ral az egész családot.": "Друк: у гаманець. Друкувати все друкує картку кожного члена родини, а Родинна картка вміщує всю родину в одному QR.",
  "PIN: az iratok zárva vannak, amíg be nem írod.": "PIN: документи заблоковані, доки ти його не введеш.",
  "Hozzáadás: fotó vagy PDF. A telefonon marad, felhőbe nem megy.": "Додати: фото або PDF. Лишається на телефоні, у хмару не йде.",
  "Közös jelszó: egy mondat, amit csak ti tudtok. Ugyanaz kell mindkét telefonon; mentsd el.": "Спільний пароль: речення, яке знаєте тільки ви. На обох телефонах потрібен той самий; збережи його.",
  "Üzenet vagy hely, majd QR készítése. A kód a teljes adatot viszi, nem linket: internet nélkül is megy.": "Повідомлення або місце, тоді Створити QR. Код несе повні дані, а не посилання: працює й без інтернету.",
  "Beolvasás kamerával vagy fájlból, majd Megfejtés. Csak a jelszó birtokosa olvassa.": "Зчитування камерою або з файлу, тоді Розшифрувати. Читає лише той, хто має пароль.",
  "Az imádságok mindig itt vannak, letöltés nélkül is. Koppints egy címre, és olvasd.": "Молитви завжди тут, навіть без завантаження. Торкнися заголовка і читай.",
  "A teljes Biblia egyszer letöltendő, utána offline is működik. Ha ez a gomb látszik, még nincs letöltve.": "Повну Біблію треба завантажити один раз, після цього вона працює й офлайн. Якщо ця кнопка видна, її ще не завантажено.",
  "A könyvek rácsa: Ószövetség fent, Újszövetség lent. Koppints a könyvre, aztán a fejezetre, aztán a versre.": "Сітка книг: Старий Заповіт угорі, Новий Заповіт унизу. Торкнися книги, тоді розділу, тоді вірша.",
  "Keresés szó szerint, vagy hely szerint (Ján 3,16). Amit megjelölsz, a Kiemeléseim alatt visszatalálod.": "Пошук за словами або за місцем (Ів. 3,16). Те, що ти позначиш, знайдеш у Моїх позначках.",
  "PIN: a tárca zárva van, amíg be nem írod. Első használatkor te adod meg.": "PIN: гаманець заблокований, доки ти його не введеш. Під час першого використання ти задаєш його сам.",
  "A szám azt mutatja, mennyi áll a tárcádban; a rekeszek külön célra tesznek félre.": "Число показує, скільки є в твоєму гаманці; відділення відкладають на окремі цілі.",
  "Felveszed az azimutot, és a tájoló mutatja a visszautat is. Törlés, ha új irány kell.": "Ти береш азимут, і компас показує також зворотний шлях. Очисти, якщо потрібен новий напрямок.",
  "Napkelte, napnyugta, holdfázis: mennyi világosod van. Mérés a helyzetemre pontosít GPS-szel.": "Схід, захід сонця, фаза місяця: скільки в тебе денного світла. Вимірювання уточнює це до твоєї позиції через GPS.",
  "Légnyomás: írd be vagy mérd a szenzorral, és rögzítsd. Az esés vihart jelez; a küszöb és az értesítés itt állítható.": "Атмосферний тиск: введи його або виміряй датчиком і запиши. Падіння віщує бурю; поріг і сповіщення налаштовуються тут.",
  "Több számoló egy helyen: koppints arra, amelyik kell. Mindegyik egy kérdésre válaszol: meddig elég, mennyi kell.": "Кілька калькуляторів в одному місці: торкнися того, який потрібен. Кожен відповідає на одне питання: на скільки вистачить, скільки треба.",
  "Víztisztítás: mennyi hipó kell, és meddig kell forralni. A töménységet az üvegről olvasd le.": "Очищення води: скільки потрібно білизни і скільки треба кипʼятити. Концентрацію читай із пляшки.",
  "Két út van: forralás vagy hipó. A forralás egyszerűbb, a hipó akkor jó, ha nincs mivel tüzelni.": "Є два шляхи: кипʼятіння або білизна. Кипʼятіння простіше, білизна добра тоді, коли немає чим розпалити вогонь.",
  "A hipó töménységét az ÜVEGRŐL olvasd le. A megadott mennyiségek 5 százalékos szerre szólnak — gyengébből több kell. Ha az üvegen más áll, ne fejből számolj.": "Концентрацію білизни читай ІЗ ПЛЯШКИ. Наведені кількості стосуються 5-відсоткового засобу — слабшого потрібно більше. Якщо на пляшці інше, не рахуй з памʼяті.",
  "A számoló a megadott töménységgel dolgozik. Ha átállítod, a mennyiség is változik — ezért kérdezi meg.": "Калькулятор працює із заданою концентрацією. Якщо ти її зміниш, зміниться й кількість — тому він питає.",
  "A Szoba zárt csoport, ami interneten át is elérhető: aki messze van, az is beszélget. A Helyi szoba ezzel szemben a közeledben lévőknek szól, hálózat nélkül.": "Кімната — це закрита група, доступна і через інтернет: говорить і той, хто далеко. Локальна кімната, натомість, для тих, хто поруч із тобою, без мережі.",
  "Új szobát itt hozol létre. Te leszel a gazdája: te engeded be, aki kér.": "Тут ти створюєш нову кімнату. Ти будеш її власником: ти впускаєш того, хто просить.",
  "Ha máshoz csatlakoznál: írd be a gazdától kapott kódot, és küldd el a kérelmet. A gazda jóváhagyása után vagy bent.": "Якщо хочеш приєднатися до когось: введи код, отриманий від власника, і надішли запит. Після його схвалення ти всередині.",
  "Ide írod az üzenetet, és a Küldés viszi el a szoba minden tagjának.": "Тут ти вводиш повідомлення, і Надіслати доносить його до всіх учасників кімнати.",
  "A Sürgős jelölés pirossal emeli ki az üzenetet mindenkinél.": "Позначка Терміново виділяє повідомлення червоним у всіх.",
  "Gazdaként itt látod a belépési kérelmeket, és itt adod ki a meghívó-kódot.": "Як власник тут ти бачиш запити на вхід і тут видаєш код запрошення.",
  "Helyi üzenetek": "Локальні повідомлення",
  "A Helyi szoba a közeledben lévő telefonoknak szól, közös hálón, internet nélkül. A pont zölden mutatja, ha él a kapcsolat.": "Локальна кімната призначена для телефонів поруч із тобою, у спільній мережі, без інтернету. Крапка світиться зеленим, якщо звʼязок живий.",
  "Ha nem talál senkit: Próbáld újra. Mindenkinek ugyanazon a helyi hálón kell lennie.": "Якщо нікого не знаходить: Спробуй ще раз. Усі мають бути в одній локальній мережі.",
  "A közös kulcs titkosítja az üzeneteket: ugyanazt a kulcsot add meg minden telefonon, és mentsd el.": "Спільний ключ шифрує повідомлення: введи той самий ключ на кожному телефоні і збережи його.",
  "Kommunikáció: üzenet szöveggel, hanggal vagy fénnyel, akkor is, ha nincs térerő.": "Звʼязок: повідомлення текстом, звуком або світлом, навіть коли немає покриття.",
  "Térkép: helyszíneid, offline térképpel és mért távolsággal.": "Карта: твої локації, з офлайн-картою і виміряною відстанню.",
  "Tudástár: a felkészülés cikkei, kereshetően.": "База знань: статті про підготовку, з пошуком.",
  "Készlet: mi van, hol van, mikor jár le.": "Запаси: що є, де воно, коли спливає термін.",
  "Mit vigyek: a csomaglista a családodra és az útra szabva.": "Що взяти: список речей, підібраний під твою родину і дорогу.",
  "Kockázat: a leggyengébb pontod egy gyűrűn.": "Ризик: твоє найслабше місце на одному кільці.",
  "Háztartás: a családtagok és a helyszínek; innen számol minden más.": "Родина: члени родини й локації; звідси рахується все інше.",
  "Vészkártya: amit egy idegen láthat, ha megtalálja a telefonod.": "Картка на випадок біди: те, що може побачити незнайомець, якщо знайде твій телефон.",
  "Irattárca: az iratok fotói a telefonon, PIN mögött.": "Гаманець документів: фото твоїх документів на телефоні, за PIN-кодом.",
  "Titkos QR: üzenet vagy hely, amit csak a kód olvasója lát.": "Таємний QR: повідомлення або місце, яке бачить лише власник коду.",
  "Biblia: imádságok, keresés, kiemelések, offline.": "Біблія: молитви, пошук, позначки, офлайн.",
  "Token tárca: az egyenleged és a rekeszeid.": "Гаманець токенів: твій баланс і твої відділення.",
  "Tájoló: irány, azimut, napkelte és napnyugta.": "Компас: напрямок, азимут, схід і захід сонця.",
  "Kalkulátor: víz, áram, kalória, fűtés és a többi számoló egy helyen.": "Калькулятор: вода, струм, калорії, опалення та інші калькулятори в одному місці.",
  "Vagyonkezelő: kiadás, bevétel, zsebek, a saját lapján.": "Керування майном: витрати, надходження, кишені, на власній сторінці.",
  "Gyülekező: a közösség fóruma, interneten.": "Спільнота: форум спільноти, в інтернеті.",
  "Nyelv: az app felülete azonnal átvált, a tudástár cikkei is, ha van fordításuk.": "Мова: інтерфейс застосунку перемикається одразу, і статті бази знань також, якщо мають переклад.",
  "Teljes mentés: minden adatod egy fájlba, amit vissza tudsz tölteni egy másik telefonon.": "Повна резервна копія: усі твої дані в один файл, який можна відновити на іншому телефоні.",
  "Visszatöltés a mentett fájlból. A biztonsági másolatból akkor állíts vissza, ha egy mentés félresikerült.": "Відновлення зі збереженого файлу. Із резервної копії відновлюй тоді, коли збереження не вдалося.",
  "Menüsor bemutatása: az alsó gombok súgója újra.": "Огляд панелі меню: довідка нижніх кнопок ще раз.",
  "Gyári visszaállítás mindent töröl a telefonról. Előtte ments.": "Скидання до заводських налаштувань видаляє все з телефона. Перед цим збережи.",
  "Itt minden modul listában is elérhető, ugyanoda visz, mint a kezdőlap csempéi.": "Тут кожен модуль доступний і списком, веде туди ж, куди плитки головної сторінки.",
  "Add meg, mi az, mennyi, és mennyit nyom: ebből számol a készlet és a Mit vigyek.": "Вкажи, що це, скільки й скільки важить: із цього рахуються запаси і Що взяти.",
  "A lejárathoz elég egy gyors gomb: +6 hónap, +1 év. A színe magától változik, ahogy közeledik.": "Для терміну достатньо швидкої кнопки: +6 місяців, +1 рік. Колір змінюється сам, у міру наближення.",
  "Hol tartod: a helyszín dönti el, melyik készültség-kártyán jelenik meg.": "Де тримаєш: локація вирішує, на якій картці готовності воно зʼявиться.",
  "A képernyő-fény húzással állítható: minél erősebb, annál messzebbről látszik — de annál gyorsabban fogy az akku.": "Яскравість екрана регулюється перетягуванням: що сильніша, то здалеку видніша — але то швидше сідає батарея.",
  "Böngészőből iPhone-on a vaku egyáltalán nem indul, Androidon sem mindenhol. A képernyő-fény viszont mindig van.": "З браузера на iPhone спалах не вмикається взагалі, та й на Android не всюди. Світло екрана натомість є завжди.",
  "Sípolás: éles hang a telefonból; a Folyamatos addig szól, amíg le nem állítod. A hangmagasság állítható.": "Свист: різкий звук із телефона; Безперервний звучить, доки ти його не зупиниш. Висоту тону можна регулювати.",
  "Újraélesztés üteme: a gomb tartja a helyes tempót. Nyomd a mellkast a jelre.": "Ритм реанімації: кнопка тримає правильний темп. Натискай на груди в такт.",
  "112 hívása: közvetlenül tárcsáz. Ha nincs térerő, a segélyhívás akkor is próbálkozik.": "Виклик 112: набирає напряму. Якщо немає покриття, екстрений виклик усе одно намагається.",
  "Mobiltelefon": "Мобільний телефон",
  "Kézi rádió (adóvevő)": "Портативна рація",
  "Zsebrádió": "Кишеньковий радіоприймач",
  "Átjátszó": "Ретранслятор",
  "Antenna": "Антена",
  "Takaró / pokróc": "Ковдра",
};

// ---------------------------------------------------------------------------
// MINTAK -- ami SZAMOT tartalmaz, az nem lehet szotar-kulcs.
// A csoportokban allo ADAT (nev, szam, datum) valtozatlanul megy at.
// A SORREND SZAMIT: a fordito az ELSo illeszkedot hasznalja, tehat a pontosabb all elol.
// ---------------------------------------------------------------------------
// 2026-10-11: Biblia nyito csempek, beallitasok, vers-menu, jegyzetek, kereszthivatkozasok, hang-letoltes
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "+ Új kategória…": "+ Нова категорія…",
  "A letölthető hanganyag listája most nem érhető el.": "Список аудіо для завантаження зараз недоступний.",
  "A letöltés csak nyitott alkalmazással halad. Ha bezárod, a következő megnyitáskor magától folytatódik.": "Завантаження триває, лише поки застосунок відкритий. Якщо закрити його, воно саме продовжиться під час наступного відкриття.",
  "A letöltés megállt": "Завантаження зупинено",
  "A letöltéshez be kell jelentkezned a fiókodba (Profil → Fiók).": "Щоб завантажити, увійдіть у свій обліковий запис (Профіль → Обліковий запис).",
  "A letöltéshez újra be kell lépned. Frissítsd az oldalt, és lépj be.": "Щоб завантажити, потрібно увійти знову. Оновіть сторінку й увійдіть.",
  "A telefon saját hangja": "Власний голос телефону",
  "A vers a vágólapra került, illeszd be, ahová szeretnéd.": "Вірш скопійовано в буфер обміну; вставте його куди потрібно.",
  "A versek mellett egy kis jel mutatja, ha más igék kapcsolódnak hozzá; rákoppintva átugorhatsz a kapcsolódó igére. Forrás: OpenBible.info (CC BY).": "Невеликий значок біля вірша показує, що з ним пов’язані інші вірші; торкніться, щоб перейти до пов’язаного вірша. Джерело: OpenBible.info (CC BY).",
  "Az új kategória neve:": "Назва нової категорії:",
  "Biblia beállítások": "Налаштування Біблії",
  "Csak magyar nyelven érhető el.": "Доступно лише угорською.",
  "Ez az eszköz nem enged másolni.": "Цей пристрій не дозволяє копіювати.",
  "Felolvasás beállításai": "Налаштування читання вголос",
  "Felolvasó hang": "Голос читання",
  "Forrás: OpenBible.info kereszthivatkozások (CC BY), a legtöbbet szavazottak.": "Джерело: перехресні посилання OpenBible.info (CC BY), найпопулярніші.",
  "Imák": "Молитви",
  "Jegyzeteim": "Мої нотатки",
  "Jobb minőségű, természetesebb felolvasás a Károli-fordításhoz. Internettel azonnal szól; ha letöltöd, internet nélkül is.": "Якісніше й природніше читання перекладу Кароля. З інтернетом звучить одразу; після завантаження — і без мережі.",
  "Kapcsolódó igék": "Пов’язані вірші",
  "Kereszthivatkozások": "Перехресні посилання",
  "Kereszthivatkozások megjelenítése": "Показувати перехресні посилання",
  "Keresés": "Пошук",
  "Kiemelés": "Виділити",
  "Kiemelés levétele": "Зняти виділення",
  "Kiemelések": "Виділення",
  "Kommentár": "Коментар",
  "Kommentár hozzáadása": "Додати коментар",
  "Kommentár megnyitása": "Відкрити коментар",
  "Kommentár szerkesztése": "Редагувати коментар",
  "Kommentárjaim": "Мої коментарі",
  "Kommentárok": "Коментарі",
  "Könyvjelző": "Закладка",
  "Könyvjelző hozzáadása": "Додати закладку",
  "Könyvjelző módosítása": "Змінити закладку",
  "Könyvjelző törlése": "Видалити закладку",
  "Könyvjelzők": "Закладки",
  "Letöltve": "Завантажено",
  "Letöltés folyamatban": "Триває завантаження",
  "Letöltés folytatása": "Продовжити завантаження",
  "Letöltés internet nélküli felolvasáshoz": "Завантажити для читання без інтернету",
  "Megosztás": "Поділитися",
  "Megszakadt az internetkapcsolat. Amit már letöltöttél, megmarad; a gombbal folytathatod.": "Інтернет-з’єднання перервалося. Уже завантажене збережеться; продовжте кнопкою.",
  "Melyik szóra keressünk a Bibliában?": "Яке слово шукати в Біблії?",
  "Mind törlése": "Видалити все",
  "Még nincs kiemelt vers. Tartsd nyomva egy verset, és válaszd a Kiemelés pontot.": "Ще немає виділених віршів. Натисніть і утримуйте вірш та виберіть «Виділити».",
  "Még nincs kommentár. Tartsd nyomva egy verset, és válaszd a Kommentár hozzáadása pontot.": "Ще немає коментарів. Натисніть і утримуйте вірш та виберіть «Додати коментар».",
  "Még nincs könyvjelző. Tartsd nyomva egy verset, és válaszd a Könyvjelző hozzáadása pontot.": "Ще немає закладок. Натисніть і утримуйте вірш та виберіть «Додати закладку».",
  "Nem foglal helyet, internet nélkül is szól. Kisebb telefonokra ezt ajánljuk.": "Не займає місця й працює без інтернету. Рекомендовано для менших телефонів.",
  "PrepperPapa hang": "Голос PrepperPapa",
  "Saját szín hozzáadása": "Додати власний колір",
  "Saját szín törlése: tartsd nyomva a színt.": "Видалити власний колір: натисніть і утримуйте його.",
  "Teljes Biblia letöltése": "Завантажити всю Біблію",
  "Törlöd az összes letöltött hanganyagot?": "Видалити всі завантажені аудіо?",
  "Törlöd ezt a saját színt a választékból? A már kiemelt versek megmaradnak.": "Прибрати цей колір із палітри? Уже виділені вірші залишаться.",
  "Válassz színt": "Виберіть колір",
  "Vár": "Чекає",
  "Általános": "Загальне",
  "Várakozó könyvek": "Книги в черзі",
});

// 2026-10-11: a Biblia sugo v4 szovegei
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Biblia: itt a könyvek rácsa és a keresés. A teljes szöveg egyszer letöltendő, utána internet nélkül is olvasható.": "Біблія: тут сітка книг і пошук. Повний текст завантажується один раз, потім його можна читати без інтернету.",
  "Imák: mindig elérhetők, letöltés nélkül is. Koppints egy címre, és olvasd.": "Молитви: завжди доступні, навіть без завантаження. Торкніться назви й читайте.",
  "Vészhelyzeti igék és próféciák: válogatott szakaszok, egy koppintással.": "Вірші на випадок біди та пророцтва: вибрані уривки, одним дотиком.",
  "Tartsd nyomva egy verset: keresés, kiemelés, kommentár, könyvjelző és megosztás. Amit így jelölsz, a Kiemeléseim és a Kommentárjaim alatt visszatalálod.": "Натисніть і утримуйте вірш: пошук, виділення, коментар, закладка й надсилання. Усе, що так позначите, знайдете в «Мої виділення» та «Мої коментарі».",
  "Beállítások: a felolvasó hang, a letöltés internet nélküli felolvasáshoz, és a kereszthivatkozások bekapcsolása.": "Налаштування: голос читання, завантаження для читання без інтернету та увімкнення перехресних посилань.",
});

// 2026-10-11: Biblia forditas-valaszto
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Biblia-fordítás": "Переклад Біблії",
  "Itt azok a fordítások látszanak, amelyeket már letöltöttél. Másik nyelvű Bibliát a felület nyelvének átállításával tölthetsz le.": "Тут видно переклади, які ви вже завантажили. Біблію іншою мовою можна завантажити, перемкнувши мову застосунку.",
  "Ez a fordítás most nem érhető el.": "Цей переклад зараз недоступний.",
});

// MEGVALLASOK + SAJAT IMA (Fonok 2026-10-11 10:09/10:10)
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Megvallások": "Сповідання",
  "Még nincs itt semmi. A jobb alsó plusz gombbal hozzáadhatsz egy sajátot.": "Тут поки нічого немає. Кнопкою «плюс» праворуч унизу можна додати своє.",
  "Csak ezen a készüléken tárolódik.": "Зберігається лише на цьому пристрої.",
  "Saját hozzáadása": "Додати своє",
  "Add meg a címet és a szöveget.": "Введіть заголовок і текст.",
  "Nem sikerült menteni.": "Не вдалося зберегти.",
  "Biztosan törlöd?": "Точно видалити?",
  "saját": "своє",
});

// OLVASASI TERV (Fonok 2026-10-11 10:42)
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Olvasási terv": "План читання",
  "Válassz egy tervet. A haladásodat a telefon megjegyzi, és mutatja, hol tartasz.": "Оберіть план. Телефон запам'ятає ваш поступ і покаже, де ви зараз.",
  "Teljes Biblia egy év alatt": "Уся Біблія за рік",
  "Az elejétől a végéig, a könyvek sorrendjében.": "Від початку до кінця, у порядку книг.",
  "Kronologikus Biblia egy év alatt": "Хронологічна Біблія за рік",
  "Az események időrendjében: Jób a pátriárkák korában, a Zsoltárok Dávid idején, a próféták a királyok mellett, a levelek az Apostolok cselekedetei közé illesztve.": "У порядку подій: Йов за часів патріархів, Псалми за часів Давида, пророки поруч із царями, послання вставлені в Дії.",
  "Teljes Biblia 90 nap alatt": "Уся Біблія за 90 днів",
  "Gyors ütemű, a könyvek sorrendjében.": "Швидкий темп, у порядку книг.",
  "Újszövetség 90 nap alatt": "Новий Заповіт за 90 днів",
  "Máté evangéliumától a Jelenésekig.": "Від Матвія до Об'явлення.",
  "Az evangéliumok 30 nap alatt": "Євангелія за 30 днів",
  "Máté, Márk, Lukács és János.": "Матвій, Марко, Лука та Іван.",
  "Zsoltárok és Példabeszédek 60 nap alatt": "Псалми та Приповісті за 60 днів",
  "Napi néhány zsoltár és egy kis bölcsesség.": "Щодня кілька псалмів і трохи мудрості.",
  "Elindítod ezt a tervet?": "Почати цей план?",
  "A tervet befejezted. Áldás rá!": "Ви завершили план. Благослови вас Бог!",
  "Tartod az ütemet.": "Ви йдете за графіком.",
  "Elolvastam": "Прочитано",
  "Minden nap": "Усі дні",
  "Terv leállítása": "Зупинити план",
  "Leállítod a tervet? A haladásod törlődik.": "Зупинити план? Ваш поступ буде видалено.",
});

// SUGO bible v5 (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Biblia: itt a könyvek rácsa és a keresés. Fönt a fordítás, a könyv, a fejezet és a vers koppintható, így gyorsan odaugrasz. A teljes szöveg egyszer letöltendő, utána internet nélkül is olvasható.": "Біблія: сітка книг і пошук. Угорі переклад, книгу, розділ і вірш можна натиснути, щоб швидко перейти. Повний текст завантажується один раз і потім доступний без інтернету.",
  "Imák és megvallások: a jobb alsó plusz gombbal hozzáadhatod a sajátjaidat. Ezek csak ezen a telefonon tárolódnak.": "Молитви та сповідання: додавайте свої кнопкою «плюс» праворуч унизу. Вони зберігаються лише на цьому телефоні.",
  "Olvasási terv: válassz egy tervet, például a kronologikusat, és itt látod, hol tartasz, és mi a következő olvasmány.": "План читання: оберіть план, наприклад хронологічний, і дивіться, де ви і що читати далі.",
});

// SZOBAKULCS UJ ESZKOZON (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Ezen az eszközön nincs meg ennek a szobának a kulcsa: a korábbi üzenetek egy másik kulccsal készültek (másik telefonon vagy újratelepítés előtt). Ha megvan egy régi meghívó linked ehhez a szobához, nyisd meg azt ezen a telefonon, és minden olvasható lesz. Ha most új kulcsot készítesz, a régi tagok csak új meghívó link után olvassák az üzeneteidet. Készítsek új kulcsot?": "На цьому пристрої немає ключа цієї кімнати: попередні повідомлення створено іншим ключем (на іншому телефоні або до перевстановлення). Якщо у вас є старе посилання-запрошення до цієї кімнати, відкрийте його на цьому телефоні, і все стане читабельним. Якщо зараз створити новий ключ, давні учасники прочитають ваші повідомлення лише після нового посилання. Створити новий ключ?",
  "Új titkosító kulcs készült. Küldj ÚJ meghívó linket minden tagnak.": "Створено новий ключ шифрування. Надішліть НОВЕ посилання-запрошення кожному учаснику.",
});

// GIRA KONYV-OSSZEFESULES (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Gíra-könyv csomag (ismeretlen formátum)": "Пакет книги гіра (невідомий формат)",
  "Gíra-könyv": "Книга гіра",
  "hamis aláírás": "підроблений підпис",
  "KÉTSZERI KÖLTÉS": "ПОДВІЙНА ВИТРАТА",
  "aláírások rendben": "підписи в порядку",
  "Előbb csatlakozz egy helyi szobához (Bluetooth vagy wifi).": "Спершу приєднайтеся до локальної кімнати (Bluetooth або wifi).",
  "Még nincs aláírt gíra-tételed, amit megoszthatnál.": "У вас ще немає підписаних записів гіра для обміну.",
  "A helyi szobának nincs titkosító kulcsa, ezért nem küldöm el a könyvet.": "Локальна кімната не має ключа шифрування, тож книгу не надсилаю.",
  "Elküldve a helyi szobába": "Надіслано до локальної кімнати",
  "csomag": "пакетів",
  "Nem ment el minden csomag. Nézd meg, hogy egy hálón vagytok-e.": "Не всі пакети надіслано. Перевірте, що ви в одній мережі.",
  "Előbb nyiss meg egy online szobát.": "Спершу відкрийте онлайн-кімнату.",
  "Az online szobának nincs titkosító kulcsa ezen a telefonon, ezért nem küldöm el a könyvet.": "Онлайн-кімната не має ключа на цьому телефоні, тож книгу не надсилаю.",
  "Elküldve az online szobába": "Надіслано до онлайн-кімнати",
  "Nem ment el minden csomag.": "Не всі пакети надіслано.",
  "Könyvek összefésülése": "Звіряння книг",
  "A tagok kicserélik az aláírt gíra-tételeiket, és a telefon minden aláírást ellenőriz. Ha valaki ugyanazt a gírát kétszer adta oda, itt kiderül. Szerver és blokklánc nélkül megy: a szoba csak továbbítja a titkosított csomagot.": "Учасники обмінюються підписаними записами гіра, а телефон перевіряє кожен підпис. Якщо хтось віддав ту саму гіру двічі, це видно тут. Без сервера і без блокчейну: кімната лише пересилає зашифрований пакет.",
  "Küldés a helyi szobába (Bluetooth / wifi)": "Надіслати до локальної кімнати (Bluetooth / wifi)",
  "Küldés az online szobába": "Надіслати до онлайн-кімнати",
  "Közösségi könyv": "Спільна книга",
  "kétszeri költés": "подвійні витрати",
  "sorszám": "номер",
});

window.PP_FORD_MINTAK = window.PP_FORD_MINTAK || {};
window.PP_FORD_MINTAK.uk = (function () {
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
    csere: (_, n) => 'У цій темі є ще ' + n + ' ' + alak(+n, 'стаття, її вступ можна прочитати вище.', 'статті, їхні вступи можна прочитати вище.', 'статей, їхні вступи можна прочитати вище.') },
  // 2026-08-24: a ket minta, ami az `en.js`-ben megvolt, itt nem. Megmerve a ket
  // tomb `minta` mezoinek osszevetesevel (en 36 / uk 34), nem atolvasassal.
  // ELoL allnak, mert mindketto NAGYON specifikus -- igy nem takarhat el semmit,
  // es oket sem takarhatja el egy altalanosabb minta (a fordito az ELSo illeszkedot veszi).
  { minta: /^Használható fény (\d{1,2}:\d{2}) és (\d{1,2}:\d{2}) között: a napkelte előtt és a napnyugta után is van még annyi, amivel lehet menni\.$/,
    csere: 'Придатне світло між $1 і $2: і перед сходом, і після заходу сонця його ще стільки, що можна йти.' },
  { minta: /^([\d.,]+) m² alapján$/, csere: 'за $1 м²' },
  { minta: /^(\d+) fő · (\d+) nap$/,
    csere: (_, a, b) => a + ' ' + alak(+a, "особа", "особи", "осіб") + ' · ' + b + ' ' + alak(+b, "день", "дні", "днів") },
  { minta: /^(\d+) fő$/,
    csere: (_, n) => n + ' ' + alak(+n, "особа", "особи", "осіб") },
  { minta: /^(\d+) nap$/,
    csere: (_, n) => n + ' ' + alak(+n, "день", "дні", "днів") },
  { minta: /^(\d+) db$/, csere: '$1 шт' },
  { minta: /^(\d+) tétel$/,
    csere: (_, n) => n + ' ' + alak(+n, "позиція", "позиції", "позицій") },
  { minta: /^IGE — (.+)$/, csere: 'ВІРШ — $1' },
  { minta: /^Ige — (.+)$/, csere: 'Вірш — $1' },
  { minta: /^Tudástár — (.+)$/, csere: 'База знань — $1' },
  { minta: /^(\d+)\. fejezet$/, csere: 'Розділ $1' },
  { minta: /^(\d+)\. fejezet · vers$/, csere: 'Розділ $1 · вірш' },
  { minta: /^(\d+) fejezet$/,
    csere: (_, n) => n + ' ' + alak(+n, "розділ", "розділи", "розділів") },
  { minta: /^Kész: (\d+) könyv, offline is megvan\.$/, csere: 'Готово: $1 книг, доступно офлайн.' },
  { minta: /^Nem sikerült: (.+)$/, csere: 'Не вдалося: $1' },
  { minta: /^Felvéve: (.+)$/, csere: 'Додано: $1' },
  { minta: /^Módosítva: (.+)$/, csere: 'Змінено: $1' },
  { minta: /^Törlöd: (.+)$/, csere: 'Видалити: $1' },
  { minta: /^Nem sikerült a helymeghatározás: (.+)$/, csere: 'Не вдалося визначити місце: $1' },
  { minta: /^Nem sikerült a helymeghatározás\.$/, csere: 'Не вдалося визначити місце.' },
  { minta: /^vércsoport hiányzik · allergia: (.+)$/, csere: 'групу крові не вказано · алергія: $1' },
  { minta: /^vércsoport hiányzik · nincs ismert allergia$/, csere: 'групу крові не вказано · відомих алергій немає' },
  { minta: /^(.+) · nincs ismert allergia$/, csere: '$1 · відомих алергій немає' },
  { minta: /^(.+) · allergia: (.+)$/, csere: '$1 · алергія: $2' },
  { minta: /^növekvő hold, (\d+)%$/, csere: 'зростаючий місяць, $1%' },
  { minta: /^fogyó hold, (\d+)%$/, csere: 'спадний місяць, $1%' },
  { minta: /^(\d+) fő · (\d+) nap · (.+)$/,
    csere: (_, a, b, c) => a + ' ' + alak(+a, "особа", "особи", "осіб") + ' · ' + b + ' ' + alak(+b, "день", "дні", "днів") + ' · ' + c },
  // Kozossegi szobak -- a szoba neve es a gazda neve ADAT, valtozatlanul megy at.
  { minta: /^(.+) · (\d+) tag · te indítottad$/,
    csere: (_, a, n) => a + ' · ' + n + ' ' + alak(+n, "учасник", "учасники", "учасників") + " · ви створили" },
  { minta: /^(.+) · (\d+) tag · (.+) indította$/,
    csere: (_, a, n, k) => a + ' · ' + n + ' ' + alak(+n, "учасник", "учасники", "учасників") + " · створив " + k },
  { minta: /^(\d+) tag · te indítottad$/,
    csere: (_, n) => n + ' ' + alak(+n, "учасник", "учасники", "учасників") + " · ви створили" },
  { minta: /^(\d+) tag · (.+) indította$/,
    csere: (_, n, k) => n + ' ' + alak(+n, "учасник", "учасники", "учасників") + " · створив " + k },
  { minta: /^még egyedül · te indítottad$/, csere: 'поки що самі · ви створили' },
  { minta: /^még egyedül · (.+) indította$/, csere: 'поки що самі · створив $1' },
  { minta: /^(.+) · (\d+) tag$/,
    csere: (_, a, n) => a + ' · ' + n + ' ' + alak(+n, "учасник", "учасники", "учасників") },
  { minta: /^(.+) · te indítottad$/, csere: '$1 · ви створили' },
  { minta: /^(.+) · (.+) indította$/, csere: '$1 · створив $2' },
  { minta: /^(\d+) tag$/,
    csere: (_, n) => n + ' ' + alak(+n, "учасник", "учасники", "учасників") },
  // OLVASASI TERV (2026-10-11)
  { minta: /^Kész: (\d+) \/ (\d+) nap \((\d+)%\)$/, csere: "Готово: $1 / $2 дн. ($3%)" },
  { minta: /^Következő olvasmány: (\d+)\. nap$/, csere: "Наступне читання: день $1" },
  { minta: /^Lemaradás: (\d+) nap$/, csere: (_, n) => "Відставання: " + n + ' ' + alak(+n, "день", "дні", "днів") },
  { minta: /^Előrébb jársz: (\d+) nap$/, csere: (_, n) => "Випередження: " + n + ' ' + alak(+n, "день", "дні", "днів") },
  { minta: /^Napi átlag: ([\d,]+) fejezet$/, csere: "У середньому на день: $1 розд." },
  { minta: /^(\d+)\. nap( •)?$/, csere: (_, n, p) => "День #".replace('#', n) + (p || '') },
  ];
})();

// ===== 2026-10-13: ujjlenyomatos feloldas + PIN modositasa (v43.157) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Ujjlenyomattal": "Відбиток",
  "Ujjlenyomat bekapcsolása": "Увімкнути розблокування відбитком",
  "Tárca feloldása": "Розблокувати гаманець",
  "PIN-nel": "За PIN-кодом",
  "Az ujjlenyomathoz mentett PIN már nem érvényes. Add meg a PIN-t, utána újra bekapcsolhatod.": "PIN-код, збережений для відбитка, більше не дійсний. Введіть PIN-код, після цього функцію можна знову увімкнути.",
  "Új ujjlenyomatot vettél fel a telefonon, ezért egyszer add meg a PIN-t.": "На телефоні додано новий відбиток, тому один раз введіть PIN-код.",
  "Az ujjlenyomatos feloldás most nem sikerült, add meg a PIN-t.": "Розблокування відбитком цього разу не вдалося, введіть PIN-код.",
  "Bekapcsolod az ujjlenyomatos feloldást? A PIN-t ekkor a telefon saját biztonsági kulcstára őrzi, az ujjad csak azt nyitja. A PIN ugyanúgy működik.": "Увімкнути розблокування відбитком? PIN-код зберігатиметься в захищеному сховищі ключів телефону, а палець лише відкриває його. PIN-код працює як і раніше.",
  "Bekapcsolom": "Увімкнути",
  "Most nem": "Не зараз",
  "Bekapcsolva: legközelebb ujjlenyomattal is beléphetsz.": "Увімкнено: наступного разу можна увійти й за відбитком.",
  "Nem kapcsoltuk be. Később is megteheted: koppints újra a gombra.": "Не увімкнено. Це можна зробити пізніше: натисніть кнопку ще раз.",
  "Nem sikerült bekapcsolni.": "Не вдалося увімкнути.",
  "A tár megnyitása nem sikerült.": "Не вдалося відкрити сховище.",
  "PIN módosítása": "Змінити PIN-код",
  "Régi PIN": "Старий PIN-код",
  "Új PIN (4-6 számjegy)": "Новий PIN-код (4-6 цифр)",
  "Új PIN még egyszer": "Новий PIN-код ще раз",
  "Hibás a régi PIN.": "Старий PIN-код неправильний.",
  "Az új PIN 4-6 számjegy legyen.": "Новий PIN-код має містити 4-6 цифр.",
  "A két új PIN nem egyezik.": "Два нові PIN-коди не збігаються.",
  "A PIN módosítása nem sikerült, a régi PIN maradt érvényben.": "Не вдалося змінити PIN-код, старий залишається дійсним.",
  "A PIN megváltozott.": "PIN-код змінено.",
  "A PIN megváltozott. Az ujjlenyomatos feloldás kikapcsolt, a következő PIN-es belépéskor újra bekapcsolhatod.": "PIN-код змінено. Розблокування відбитком вимкнено; його можна знову увімкнути під час наступного входу за PIN-кодом."
});

// ===== 2026-10-13: teszt-PIN, 6 szamjegy, Gira-kulcs a PIN mogott (v43.159) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Állíts be egy PIN-t (6 számjegy)": "Задайте PIN-код (6 цифр)",
  "Új PIN (6 számjegy)": "Новий PIN-код (6 цифр)",
  "6 számjegy kell.": "Потрібно 6 цифр.",
  "Az új PIN 6 számjegy legyen.": "Новий PIN-код має містити 6 цифр.",
  "Tesztidőszak: a PIN 000000": "Тестовий період: PIN-код 000000",
  "Tesztidőszak: a PIN 0000": "Тестовий період: PIN-код 0000",
  "A Gíra aláíró kulcsa a PIN mögött van: nyisd meg a Token tárcát.": "Ключ підпису Gíra захищений PIN-кодом: відкрийте гаманець токенів."
});

// ===== 2026-10-13: ujjlenyomat-animacio (v43.160) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Tedd az ujjad az érzékelőre": "Прикладіть палець до сканера",
  "Feloldva": "Розблоковано"
});

// ===== 2026-10-13: ujjlenyomat-kor huzasa (v43.161) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Ha a kör nem az ujjlenyomat-olvasón van, húzd a helyére: a telefon megjegyzi.": "Якщо коло не над сканером відбитка, перетягніть його туди: телефон запам'ятає."
});

// ===== 2026-10-13: OSM-alapreteg elore letoltese szunetel (v43.162) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Az alaptérkép előre letöltése szünetel, amíg elkészül a saját térképszerverünk. A már megnézett részek megmaradnak; a Turista réteget továbbra is letöltheted.": "Попереднє завантаження базової карти призупинено, доки не буде готовий наш власний сервер карт. Уже переглянуті ділянки зберігаються; туристичний шар і далі можна завантажити."
});


// ===== 2026-10-13: app-engedely a tesztidoszakra (v43.169, 0a58dbbb) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "PrepperPapa · tesztidőszak": "PrepperPapa · тестовий період",
  "A tesztidőszakban az app csak jóváhagyott tesztelői fiókkal használható. Lépj be az e-mail címeddel: kapsz egy 6 jegyű kódot, és utána a telefon megjegyzi, frissítés után sem kell újra.": "У тестовий період застосунком можна користуватися лише зі схваленим обліковим записом тестувальника. Увійдіть за адресою e-mail: ви отримаєте 6-значний код, після цього телефон запам’ятає вхід, навіть після оновлень.",
  "Belépés": "Увійти",
  "Engedély kérése…": "Запит дозволу…",
  "Ehhez a fiókhoz nincs engedély. Ha szerinted ez hiba, írj a prepperpapa@gmail.com címre.": "Цей обліковий запис не має дозволу. Якщо вважаєте це помилкою, напишіть на prepperpapa@gmail.com.",
  "Az első belépéshez internetkapcsolat kell.": "Для першого входу потрібне підключення до інтернету.",
  "Az engedély most nem sikerült, próbáld újra.": "Не вдалося отримати дозвіл, спробуйте ще раз.",
  "Lejárt az engedélyed. Lépj be újra (ehhez internet kell).": "Термін дії вашого дозволу минув. Увійдіть знову (потрібен інтернет)."
});


// ===== 2026-10-13: terkep-kereso es turistapontok (v43.171, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "saját pont": "власна точка",
  "helyszín": "місце",
  "Nincs találat.": "Нічого не знайдено.",
  "Turistaút": "Туристична стежка",
  "internet kell hozzá": "потрібен інтернет",
  "nemzetközi": "міжнародний",
  "országos": "національний",
  "regionális": "регіональний",
  "helyi": "місцевий",
  "csúcs": "вершина",
  "nyereg": "сідловина",
  "forrás": "джерело",
  "ivóvíz": "питна вода",
  "kút": "криниця",
  "barlang": "печера",
  "kilátópont": "оглядовий майданчик",
  "kilátó": "оглядова вежа",
  "menedékház, esőbeálló": "притулок, навіс",
  "táborhely": "кемпінг",
  "pihenőhely": "місце відпочинку",
  "útjelző tábla": "вказівник",
  "rom": "руїни",
  "vár": "замок",
  "kereszt, kápolna": "хрест, каплиця"
});
Object.assign(window.PP_FORD_SZOTAR.uk, {"Turistaút, csúcs, forrás, hely…": "Стежка, вершина, джерело, місце…"});

// ===== 2026-10-13: utvonalon megyek (v43.172, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Indulás": "Старт",
  "Leállítás": "Стоп",
  "Navigáció indul": "Навігація починається",
  "Indulj el az útvonalon: az első lépésekből látom, merre mész.": "Йдіть маршрутом: за першими кроками я зрозумію, куди ви йдете.",
  "Letértél az útvonalról.": "Ви зійшли з маршруту.",
  "Letértél az útvonalról": "Ви зійшли з маршруту",
  "Az útvonal": "Маршрут",
  "irány": "напрямок",
  "Visszatértél az útvonalra.": "Ви повернулися на маршрут.",
  "Az útvonalon vagy": "Ви на маршруті",
  "Indulj el: az első lépésekből látom, merre mész.": "Йдіть: за першими кроками я зрозумію напрямок.",
  "Megérkeztél az útvonal végére.": "Ви дійшли до кінця маршруту.",
  "Hátra": "Залишилось",
  "Megtett": "Пройдено",
  "Érkezés": "Прибуття",
  "Szintgrafikon": "Профіль висоти",
  "emelkedő": "підйом",
  "múlva": "через",
  "előtted": "попереду",
  "cél": "фініш",
  "utána ezt kövesd:": "потім ідіть за:",
  "élesen jobbra": "різко праворуч",
  "jobbra": "праворуч",
  "élesen balra": "різко ліворуч",
  "balra": "ліворуч",
  "Most fordulj": "Поверніть зараз",
  "méter múlva fordulj": "метрів, потім поверніть",
  "Egyenesen tovább": "Прямо"
});

// ===== 2026-10-13: utvonaltervezes A-bol B-be (v43.173, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Útvonal ide": "Маршрут сюди",
  "Innen indulok": "Почати звідси",
  "Saját helyzetem": "Моє місцезнаходження",
  "Válaszd ki a célt: keresés vagy egy pont buboréka": "Оберіть ціль: пошук або бульбашка точки",
  "Tervezés törlése": "Видалити план",
  "Tervezés…": "Планування…",
  "Nincs GPS-helyzet: válassz kezdőpontot (egy pont buborékán: „Innen indulok”).": "Немає GPS-позиції: оберіть початкову точку («Почати звідси» в бульбашці точки).",
  "A turistaút-hálózat nem töltődött be.": "Мережа стежок не завантажилася.",
  "Nem találtam turistaút-útvonalat a két pont között.": "Не знайдено маршруту стежками між точками.",
  "A turistaútig": "До стежки",
  "légvonalban": "по прямій",
  "Tervezett útvonal": "Запланований маршрут",
  "Kövesd ezt a jelzést:": "Йдіть за цим маркуванням:",
  "Kövesd az utat": "Йдіть дорогою",
  "és kövesd ezt:": "і йдіть за:"
});

// ===== 2026-10-13: kulfoldi turistautak =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Külföld országonként: térkép és turistautak": "Закордон за країнами: карта і стежки",
  "Tájegységek": "Регіони",
  "Turistautak és pontok": "Стежки й точки",
  "Alaptérkép": "Базова карта",
  "Ennek az országnak a térképe egyben túl nagy.": "Карта цієї країни завелика одним файлом.",
  "Tájegységenként letöltheted: nyisd le a listáját.": "Її можна завантажити за регіонами: розгорніть список.",
  "Országonként külön letölthetők a turistautak a pontokkal és az útvonaltervezővel (ezek az online térképen is működnek, és kevés helyet foglalnak), és külön az alaptérkép a térerő nélküli használathoz. Az alaptérképet az első kéréskor a szerver készíti elő, ez néhány perc lehet.": "Для кожної країни можна окремо завантажити стежки з точками й планувальником маршрутів (вони працюють і на онлайн-карті та займають мало місця) і окремо базову карту для роботи без зв’язку. Базову карту сервер готує під час першого запиту, це може тривати кілька хвилин.",
  "tájegységenként letölthető": "можна завантажити за регіонами",
  "a méret letöltéskor derül ki": "розмір стане відомий під час завантаження",
  "Ennek a tájegységnek a térképe egyben túl nagy.": "Карта цього регіону завелика одним файлом.",
  "A tájegység térképét most nem sikerült előkészíteni.": "Не вдалося підготувати карту регіону.",
  "Előkészítés…": "Підготовка…",
  "a térkép túl nagy egyben": "карта завелика цілою",
  "Most egy másik ország térképe készül, próbáld újra pár perc múlva.": "Зараз готується карта іншої країни, спробуй ще раз за кілька хвилин.",
  "Az ország térképét most nem sikerült előkészíteni.": "Зараз не вдалося підготувати карту країни.",
  "A külföldi lista most nem érhető el.": "Закордонний список зараз недоступний.",
  "A két pont túl messze van egymástól (legfeljebb kb. 80 km).": "Точки надто далеко одна від одної (не більше ~80 км)."
});

// ===== 2026-10-13: GPX be/ki (v43.178) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Nincs kiválasztott útvonal.": "Маршрут не вибрано.",
  "Az útvonal megjelent, de a telefon tárhelye megtelt, nem mentődött el.": "Маршрут показано, але пам’ять заповнена, його не збережено.",
  "Ezt a fájlt nem tudtam GPX-ként beolvasni.": "Не вдалося прочитати файл як GPX.",
  "GPX útvonal betöltése": "Завантажити маршрут GPX",
  "fájl a telefonról": "файл з телефону"
});

// ===== 2026-10-13: tajolo hangvezetes (v43.179) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Hangvezetés": "Звукове ведення",
  "Előbb vegyél fel egy irányt, utána szól a hangvezetés.": "Спершу задайте напрямок, потім увімкнеться звук."
});
// ===== 2026-10-14: jelzes nelkuli utak, ujratervezes, hosszu nyomas (v43.182) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Kijelölt pont": "Позначена точка",
  "Új útvonalat tervezek innen…": "Прокладаю новий маршрут звідси…",
  "Új útvonalat terveztem, hossza": "Новий маршрут прокладено, довжина",
  "Jelzés nélküli ösvényen": "Немаркованою стежкою",
  "Jelzés nélküli földúton": "Немаркованою ґрунтовою дорогою",
  "Utcán vagy közúton": "Вулицею або дорогою",
  "a jelzés nélküli ösvényt": "немаркованою стежкою",
  "a földutat": "ґрунтовою дорогою",
  "az utcát vagy közutat": "вулицею або дорогою",
  "Az út végétől a célig": "Від кінця шляху до мети",
  "teljes túra": "увесь маршрут",
  "szakasz": "ділянок",
  "Rádióamatőr átjátszók": "Аматорські ретранслятори",
  "Rádióamatőr átjátszó": "Аматорський ретранслятор",
  "Kimenő (hallgatás)": "Вихід (прийом)",
  "Bemenő / eltolás": "Вхід / зсув",
  "Mód": "Вид зв'язку",
  "Csak rádióamatőr vizsgával és engedéllyel használható.": "Лише для радіоаматорів із ліцензією.",
  "Az alaptérképet az OpenStreetMap szabályai miatt nem lehet előre letölteni (a megnézett részek megmaradnak). Internet nélkül a Saját térkép működik: Magyarországra tájegységenként letöltheted itt lent, az „Offline térkép” csoportban.": "Базову карту не можна завантажити заздалегідь через правила OpenStreetMap (переглянуті ділянки зберігаються). Без інтернету працює Власна карта: для Угорщини її можна завантажити нижче за регіонами.",
  "Átváltok a Saját térképre": "Перейти на Власну карту",
  "Saját térkép bekapcsolva. A tájegységeket itt lent, az „Offline térkép” csoportban töltheted le.": "Власну карту увімкнено. Регіони завантажуються нижче, у розділі «Офлайн-карта за регіонами»."
});

// ===== 2026-10-15: femkereso + eses-erzekeles (kartya 898b5891) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
 "Fémkereső: vas és acél a közelben": "Металошукач: залізо й сталь поруч",
 "Fémkereső": "Металошукач",
 "Vezeték, cső, fém a falban vagy a földben": "Провід, труба, метал у стіні чи в землі",
 "Nullázás után itt látszik a változás": "Після обнулення тут видно зміну",
 "Nullázás": "Обнулити",
 "Hang: be": "Звук: увімк.",
 "Hang: ki": "Звук: вимк.",
 "Tartsd a telefont távol a fémtől, és nyomd meg a Nullázást. Utána lassan húzd végig a falon vagy a talajon: fém közelében nő a szám, és sűrűbben, magasabban pittyeg.": "Тримайте телефон подалі від металу й натисніть «Обнулити». Потім повільно ведіть ним уздовж стіни чи по землі: біля металу число зростає, а сигнал частішає й вищає.",
 "AMIT EZ TUD ÉS AMIT NEM. A vas- és acéltárgyat (cső, szög, vasbeton, áramalatti vezeték) néhány centiméterről érzékeli, mélyebbről nem. Rezet, alumíniumot, aranyat nem talál. A pontosság telefononként nagyon eltér; ne erre bízd, hogy fúrhatsz-e a falba.": "ЩО ВІН ВМІЄ І ЧОГО НІ. Залізо й сталь (труба, цвях, арматура, провід під напругою) відчуває за кілька сантиметрів, глибше — ні. Мідь, алюміній і золото не знаходить. Точність дуже залежить від телефону; не вирішуйте за ним, чи можна свердлити стіну.",
 "Ehhez a telefonos PrepperPapa app kell: a böngésző nem adja ki az iránytű-érzékelő nyers értékét.": "Для цього потрібен застосунок PrepperPapa для телефону: браузер не видає сирого значення датчика компаса.",
 "a nullához képest": "відносно нуля",
 "Az érzékelő pontatlan: mozgasd a telefont nyolcas alakban néhányszor, aztán nullázz.": "Датчик неточний: кілька разів поводьте телефоном вісімкою, потім обнуліть.",
 "Esés-érzékelés": "Розпізнавання падіння",
 "Esés után automatikus SOS": "Автоматичний SOS після падіння",
 "Ha a telefon nagy ütést érez, és utána egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a": "Якщо телефон відчує сильний удар і потім хвилину не рухається, він голосно веде зворотний відлік. Якщо ви не натиснете кнопку",
 "Jól vagyok": "Я в порядку",
 "gombot, SOS üzenetet küld a helyzeteddel minden szobádba, és megszólal a vészsíp.": ", він надішле SOS з вашим місцезнаходженням до всіх ваших кімнат і ввімкне аварійний свисток.",
 "Esést érzékeltem": "Виявлено падіння",
 "másodperc múlva SOS üzenet megy a helyzeteddel": "секунд до надсилання SOS з вашим місцезнаходженням",
 "SOS most": "SOS зараз",
 "Bekapcsolva. Háttérben és kikapcsolt képernyőn is figyel.": "Увімкнено. Стежить і у фоні, і при вимкненому екрані.",
 "Bekapcsolva, de csak addig figyel, amíg az app nyitva van (a telefonos appban háttérben is).": "Увімкнено, але стежить, лише поки застосунок відкритий (у застосунку для телефону — і у фоні).",
 "A mozgás-érzékelő használatát nem engedélyezted.": "Ви не дозволили датчик руху.",
 "Rendben, nem küldtem SOS-t.": "Добре, SOS не надіслано.",
 "Esést érzékeltem, és nem reagálok.": "Я виявив падіння і не реагую.",
 "Itt vagyok": "Я тут",
 "A helyzetemet nem sikerült meghatározni.": "Не вдалося визначити моє місцезнаходження.",
 "SOS elküldve": "SOS надіслано",
 "szobába": "кімнат",
 "Az SOS üzenet nem ment el (nincs szoba vagy kapcsolat). A vészsíp szól.": "SOS не надіслано (немає кімнати чи зв'язку). Звучить свисток.",
 "Eszközök": "Інструменти",
 "Fémdetektor": "Металошукач",
 "Víz, áram, kalória, fűtés és a többi számoló": "Вода, електрика, калорії, опалення та інші калькулятори",
 "Eszközök: a kalkulátorok, a fémdetektor, a tükör és a vad- és rovarriasztó egy helyen.": "Інструменти: калькулятори, металошукач, дзеркало та відлякувач звірів і комах в одному місці.",
 "Tükör": "Дзеркало",
 "Előlapi kamera fénykerettel, sérülés megnézéséhez": "Фронтальна камера зі світловою рамкою, щоб оглянути травму",
 "Fény: be": "Світло: увім.",
 "Fény: ki": "Світло: вимк.",
 "A kamera nem nyitható meg. Engedélyezd a kamerát az app beállításaiban.": "Не вдається відкрити камеру. Дозвольте камеру в налаштуваннях застосунку.",
 "Két ujjal csippentve nagyítasz. A fehér keret világítja meg az arcod; sötétben tedd a képernyő fényerejét maximumra.": "Зведіть два пальці, щоб збільшити. Біла рамка освітлює обличчя; у темряві поставте яскравість екрана на максимум.",
 "Privát üzenet": "Особисте повідомлення",
 "Gíra küldése": "Надіслати гіру",
 "Vad- és rovarriasztó": "Відлякувач звірів і комах",
 "Magas hang vadak és szúnyogok ellen": "Високий звук проти диких звірів і комарів",
 "A riasztó hangja most nem indult el.": "Звук відлякувача не запустився.",
 "Előzmény": "Історія",
 "Legutóbb olvasott igék": "Нещодавно прочитані вірші",
 "Korábbi keresések": "Попередні пошуки",
 "Még nincs olvasott ige. Amit a Bibliában megnyitsz, itt jelenik meg.": "Ви ще не читали віршів. Те, що ви відкриєте в Біблії, з’явиться тут.",
 "Még nincs korábbi keresés. Amit itt keresel, ide kerül.": "Попередніх пошуків поки немає. Те, що ви шукаєте тут, з’явиться в цьому списку.",
 "Olvasási terv: csak ez az olvasmány látszik, a felolvasás a végén megáll.": "План читання: показано лише це читання, і читання вголос зупиняється в його кінці.",
 "Az olvasmány vége": "Кінець читання",
 "Vissza a tervemhez": "Назад до мого плану",
 "Ébresztő": "Будильник",
 "Reggel felébreszti a telefont, és felolvassa a terv mai olvasmányát.": "Вранці будить телефон і читає вголос сьогоднішнє читання з плану.",
 "Bekapcsolva": "Увімкнено",
 "Időpont": "Час",
 "Napok": "Дні",
 "Válassz legalább egy napot.": "Виберіть хоча б один день.",
 "Következő ébresztés:": "Наступний будильник:",
 "Ebben a böngészőben és iPhone-on az ébresztő nem tud megszólalni: a weboldal nem kapcsolhatja be a lezárt telefont. Az ébresztő az Android appban működik. A beállításod itt megmarad.": "У цьому браузері та на iPhone будильник не може задзвонити: вебсторінка не може ввімкнути заблокований телефон. Будильник працює в застосунку для Android. Ваше налаштування зберігається тут.",
 "Ehhez az ébresztőhöz frissítsd az appot a legújabb változatra.": "Оновіть застосунок до найновішої версії, щоб користуватися цим будильником.",
 "Az értesítés nincs engedélyezve: enélkül az ébresztő nem tud megjelenni.": "Сповіщення не дозволені: без них будильник не може з'явитися.",
 "Értesítés engedélyezése": "Дозволити сповіщення",
 "A pontos időzítés nincs engedélyezve (Ébresztők és emlékeztetők): az ébresztő így akár negyed órát is késhet.": "Точний час не дозволено (Будильники й нагадування): будильник може запізнитися до чверті години.",
 "Pontos időzítés engedélyezése": "Дозволити точний час",
 "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon csak értesítés jelenik meg, a felolvasás a koppintásra indul.": "Повноекранні сповіщення не дозволені: на заблокованому телефоні з'явиться лише сповіщення, а читання почнеться після натискання на нього.",
 "Teljes képernyő engedélyezése": "Дозволити повний екран",
 "Az ébresztő be van állítva.": "Будильник встановлено.",
 "Az ébresztőt most nem sikerült beállítani. Próbáld újra később.": "Зараз не вдалося встановити будильник. Спробуйте пізніше.",
 "Bibliaolvasás ébresztő": "Будильник для читання Біблії",
 "Reggeli ige": "Ранкове слово",
 "A mai olvasmány felolvasása indul.": "Починається сьогоднішнє читання.",
 "Szundi 10 perc": "Відкласти на 10 хв"
});

// ===== 2026-10-18: Bible alarm polish (v43.259): stop button, time picker, spoken intro/blessing =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
 "Leállítom": "Зупинити",
 "Óra": "Години",
 "Perc": "Хвилини",
 "{konyv} {a}. fejezet": "{konyv}, розділ {a}",
 "{konyv} {a}–{b}. fejezet": "{konyv}, розділи з {a} по {b}",
 "Jó reggelt! Olvasási terv: {terv}. A mai olvasmány: {resz}.": "Доброго ранку! План читання: {terv}. Сьогоднішнє читання: {resz}.",
 "Jó reggelt! {ido} van. Ma {datum}. A mai olvasmány: {resz}.": "Доброго ранку! Зараз {ido}. Сьогодні {datum}. Сьогоднішнє читання: {resz}.",
 "Áldott napot kívánok!": "Благословенного дня!"
});

// ===== 2026-10-18: daily tester task popup (v43.261, card 84c182b9): the popup and the seeded tasks =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
 "Mai tesztfeladat": "Тестове завдання на сьогодні",
 "Hogyan működik": "Як це працює",
 "Mit próbálj ki": "Що спробувати",
 "Ezt a feladatot a készüléked és a felület alapján kaptad, név nélkül.": "Це завдання ви отримали за вашим пристроєм та інтерфейсом (застосунок чи браузер), без імені.",
 "Működik": "Працює",
 "Hibás": "Помилка",
 "Később": "Пізніше",
 "Köszönjük, megkaptuk a visszajelzést.": "Дякуємо, ми отримали ваш відгук.",
 "Most nincs kapcsolat. Elmentettem, és magától elküldöm, amint lesz.": "Зараз немає зв'язку. Я зберіг і надішлю сам, щойно він з'явиться.",
 "Ezt a szerver most nem fogadta el. Próbáld újra később.": "Сервер зараз цього не прийняв. Спробуйте пізніше.",
 "Most nem érem el a szervert. Próbáld újra később.": "Зараз не вдається зв'язатися з сервером. Спробуйте пізніше.",
 "Mára nincs több tesztfeladat. Köszönjük a segítséget!": "На сьогодні тестових завдань більше немає. Дякуємо за допомогу!",
 "Tesztfeladat": "Тестове завдання",
 "Mi nem működött?": "Що не працювало?",
 "Biblia: az olvasási terv ébresztője": "Біблія: будильник плану читання",
 "Az olvasási terv ébresztője a beállított időben felébreszti a telefont, a lezárt képernyő fölött megnyitja az aznapi olvasmányt, és felolvassa. Halkan indul, és bő fél perc alatt erősödik fel; előtte egy rövid köszöntés elmondja, mi a mai olvasmány. Amíg olvas, a képernyő alján egy nagy Leállítom gomb van.": "Будильник плану читання будить телефон у заданий час, відкриває сьогоднішнє читання поверх екрана блокування і читає його вголос. Він починає тихо і за пів хвилини з гаком стає гучнішим; перед цим коротке привітання каже, яке сьогодні читання. Поки він читає, внизу екрана є велика кнопка Зупинити.",
 "Biblia > Olvasási terv: nyiss meg egy futó tervet, kapcsold be az ébresztőt, és állítsd az időpontot 2 perccel későbbre.": "Біблія > План читання: відкрийте поточний план, увімкніть будильник і поставте час на 2 хвилини пізніше.",
 "Zárd le a telefont, és tedd le. Figyeld: felébred-e a telefon, halkan indul-e a hang, és elhangzik-e a köszöntés.": "Заблокуйте телефон і покладіть його. Стежте: чи прокидається телефон, чи звук починається тихо і чи чути привітання?",
 "Koppints a nagy Leállítom gombra: a felolvasásnak azonnal meg kell állnia.": "Натисніть велику кнопку Зупинити: читання має одразу припинитися.",
 "Biblia: a könyvcsoportok színei": "Біблія: кольори груп книг",
 "A Biblia könyvlistáján a könyvek csoportonként színes csempéken állnak. A csoportok ugyanazt az öt zöld árnyalatot kapják, de világos és sötét váltakozva, hogy két szomszédos csoport jól elváljon egymástól. Éjszakai módban ugyanez vörös árnyalatokkal.": "У списку книг Біблії книги стоять на кольорових плитках за групами. Групи мають ті самі п'ять відтінків зеленого, але світлі й темні чергуються, щоб дві сусідні групи добре розрізнялися. У нічному режимі те саме в червоних тонах.",
 "Nyisd meg a Bibliát, és koppints a Biblia csempére, hogy megjelenjen a könyvek listája.": "Відкрийте Біблію і натисніть плитку Біблія, щоб з'явився список книг.",
 "Nézd végig a csempéket: jól elválnak-e a szomszédos csoportok, és minden könyvnév olvasható-e a háttéren?": "Перегляньте плитки: чи добре розрізняються сусідні групи і чи читається кожна назва книги на своєму тлі?",
 "Lenyíló lista: a vissza csak a listát zárja": "Випадний список: «Назад» закриває лише список",
 "Ha egy lenyíló lista (például a Rádió-hatótáv sávválasztója) nyitva van, a vissza gomb először csak a listát zárja be, és ugyanazon a képernyőn maradsz. Ha közben másik képernyőre lépsz, a nyitott lista nem maradhat ott a következő képernyő fölött.": "Коли випадний список (наприклад, вибір діапазону в «Дальності рації») відкритий, кнопка «Назад» спершу закриває лише список, і ви залишаєтеся на тому самому екрані. Якщо тим часом ви переходите на інший екран, відкритий список не повинен залишатися над наступним екраном.",
 "Kalkulátor > Rádió-hatótáv: koppints a sáv választójára, hogy lenyíljon a lista.": "Калькулятор > Дальність рації: натисніть на вибір діапазону, щоб відкрити список.",
 "Nyomd meg a vissza gombot: a lista bezárul, és a Rádió-hatótáv képernyő marad.": "Натисніть «Назад»: список закривається, а екран «Дальність рації» залишається.",
 "Nyisd ki újra a listát, és lépj át egy másik képernyőre: a lista nem maradhat ott lebegve.": "Знову відкрийте список і перейдіть на інший екран: список не повинен там висіти.",
 "Szobák: privát üzenet (Csak neki)": "Кімнати: особисте повідомлення (Лише для)",
 "Egy internetes szobában egy tagnak úgy is írhatsz, hogy csak ő lássa. Ilyenkor a beíró mező fölött „Csak neki” sáv áll a nevével; amíg ez látszik, az üzenet biztosan privátként megy el, és a sáv nem takarja el a legutolsó üzenetet. Ha mégsem megy el, az app megmondja, miért, és a beírt szöveg megmarad.": "В інтернет-кімнаті можна написати одному учаснику так, щоб бачив лише він. Тоді над полем введення стоїть смуга «Лише для» з його іменем; поки вона видна, повідомлення точно йде як особисте, і смуга не закриває останнє повідомлення. Якщо воно все ж не йде, застосунок каже чому, а набраний текст зберігається.",
 "Nyiss meg egy szobát, ahol van legalább egy másik tag, és koppints egy tőle jött üzenet mellett a képére.": "Відкрийте кімнату, де є щонайменше ще один учасник, і натисніть на картинку біля його повідомлення.",
 "Írj egy rövid üzenetet, és küldd el. A legutolsó üzenetnek a „Csak neki” sáv fölött kell látszania.": "Напишіть коротке повідомлення і надішліть його. Останнє повідомлення має бути видно над смугою «Лише для».",
 "Ha meg tudod kérdezni: a címzett megkapta, a többiek nem látják.": "Якщо можете запитати: одержувач його отримав, інші не бачать."
});
// ===== 2026-10-18: Noah for every tester (v43.262, card 84bede18): Android-only note, download confirm, memory reason, daily task =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
 "Noah, az offline MI segéd a telefonra telepített Android appban fut: a nyelvi modellt a telefon egyszer letölti, utána internet nélkül, helyben válaszol. A böngészős változatban és iPhone-on nem érhető el, mert ide a modell nem tölthető le.": "Noah, офлайн-помічник зі ШІ, працює в Android-застосунку, встановленому на телефоні: телефон один раз завантажує мовну модель, а потім відповідає локально, без інтернету. У версії для браузера та на iPhone він недоступний, бо туди модель завантажити не можна.",
 "Ehhez Android 11 vagy újabb, legalább 6 GB memóriás telefon kell, és 6-8 GB szabad hely.": "Для цього потрібен телефон з Android 11 або новішим, щонайменше 6 ГБ пам'яті та 6-8 ГБ вільного місця.",
 "A nyelvi modell válasz közben kb. 3 GB memóriát használ. 6 GB-nál kevesebb memóriájú telefonon a rendszer ilyenkor leállítaná az appot, ezért itt Noah nem használható.": "Під час відповіді мовна модель використовує близько 3 ГБ пам'яті. На телефоні з пам'яттю менше 6 ГБ система зупинила б застосунок, тому тут Noah недоступний.",
 "Ezen a telefonon nem fut:": "На цьому телефоні не працює:",
 "Android 11 vagy újabb kell": "потрібен Android 11 або новіший",
 "64 bites ARM processzor kell": "потрібен 64-бітний процесор ARM",
 "legalább 6 GB memória kell": "потрібно щонайменше 6 ГБ пам'яті",
 "nem támogatott": "не підтримується",
 "Ehhez a modellhez kevés a telefon memóriája.": "Для цієї моделі телефону бракує пам'яті.",
 "Letöltöd a(z) {modell} modellt?": "Завантажити модель {modell}?",
 "Letöltés: {meret}, egyszer kell letölteni.": "Завантаження: {meret}, потрібне один раз.",
 "Szabad hely: kb. {hely} kell, mert az első használatkor a telefon még egyszer ennyit foglal a gyorsabb futáshoz.": "Вільне місце: потрібно близько {hely}, бо під час першого використання телефон займає ще стільки ж для швидшої роботи.",
 "Memória: legalább {ajanlott} GB-os telefon ajánlott.": "Пам'ять: рекомендовано телефон щонайменше з {ajanlott} ГБ.",
 "Ez a telefon {ram} GB-os.": "Цей телефон має {ram} ГБ.",
 "Most mobilinternetet használsz: a letöltés {meret} adatforgalom. Wi-Fi ajánlott.": "Зараз ви в мобільній мережі: завантаження — це {meret} трафіку. Рекомендовано Wi-Fi.",
 "Offline MI segéd": "Офлайн-помічник зі ШІ",
 "Offline MI segéd használata": "Використовувати офлайн-помічника зі ШІ",
 "A segéd a fejléc gombjával nyílik; a modell letöltése és a beállításai a segéd oldalán vannak.": "Помічник відкривається кнопкою в заголовку; завантаження моделі та його налаштування — на сторінці помічника.",
 "Offline MI segéd · a tudástárból, forrással": "Офлайн-помічник зі ШІ · з бази знань, з джерелами",
 "Kérdezz": "Запитати",
 "Noah, az offline MI segéd": "Noah, офлайн-помічник зі ШІ",
 "Noah a telefonon futó MI segéd: a tudástárból, a Bibliából és az app adataidból válaszol, internet nélkül. A nyelvi modellt egyszer kell letölteni (2,6 vagy 3,7 GB). Letöltés előtt az app kiírja a méretet, a szükséges szabad helyet és memóriát, mobilinterneten pedig Wi-Fi-t javasol. 6 GB-nál kevesebb memóriájú telefonon nem használható, és ezt meg is indokolja.": "Noah — помічник зі ШІ, що працює на телефоні: він відповідає з бази знань, Біблії та даних вашого застосунку, без інтернету. Мовну модель треба завантажити один раз (2,6 або 3,7 ГБ). Перед завантаженням застосунок показує розмір, потрібне вільне місце й пам'ять, а в мобільній мережі радить Wi-Fi. На телефоні з пам'яттю менше 6 ГБ він недоступний, і застосунок пояснює чому.",
 "Beállítások: kapcsold be az „Offline MI segéd használata” pontot, majd nyisd meg Noah-t a fejléc szikra gombjával.": "Налаштування: увімкніть «Використовувати офлайн-помічника зі ШІ», потім відкрийте Noah кнопкою-іскрою в заголовку.",
 "A fogaskerék alatt nyomd meg a Letöltés gombot: nézd meg, kiírja-e a méretet, a helyet és a memóriát, mielőtt elindul. Wi-Fi-n töltsd le.": "Під шестернею натисніть «Завантажити»: перевірте, чи показує застосунок розмір, місце й пам'ять перед початком. Завантажуйте через Wi-Fi.",
 "Kérdezz tőle valamit, például: „Hogyan tisztítsak vizet?” Nézd meg, kapsz-e választ forrással.": "Запитайте його про щось, наприклад: «Як очистити воду?» Перевірте, чи отримуєте відповідь із джерелом.",
 "Ha a telefon nagy ütést érez, és utána egy percig nem mozdul, felkapcsolja a kijelzőt (lezárt telefonon is), és hangosan visszaszámol. Ha nem nyomod meg a": "Якщо телефон відчує сильний удар і потім хвилину не рухається, він вмикає екран (і на заблокованому телефоні) та голосно веде зворотний відлік. Якщо ви не натиснете кнопку",
 "Utána megszólal a vészsíp.": "Потім лунає аварійний свисток.",
 "Esés-riasztás": "Сигнал про падіння",
 "%d másodperc múlva SOS üzenet megy a helyzeteddel. Ha jól vagy, nyomd meg: Jól vagyok.": "Через %d секунд буде надіслано повідомлення SOS з вашим місцезнаходженням. Якщо ви в порядку, натисніть: Я в порядку.",
 "Az értesítés nincs engedélyezve: enélkül esés után a lezárt telefonon nem jelenik meg a visszaszámlálás.": "Сповіщення не дозволені: без них зворотний відлік не з'явиться на заблокованому телефоні після падіння.",
 "A teljes képernyős értesítés nincs engedélyezve: esés után a lezárt telefonon csak egy értesítés jelenik meg a visszaszámlálással és a Jól vagyok gombbal, a nagy számláló koppintásra nyílik meg.": "Повноекранні сповіщення не дозволені: після падіння заблокований телефон показує лише сповіщення зі зворотним відліком і кнопкою Я в порядку; великий лічильник відкривається після дотику.",
 "Esés után a lezárt telefonon is felkapcsolja a kijelzőt, és mutatja a visszaszámlálást.": "Після падіння вмикає екран, навіть на заблокованому телефоні, і показує зворотний відлік.",
 "Megnyitom": "Відкрити",
 "Láttam": "Бачив",
 "Egy szobatárs": "Учасник кімнати",
 "vészjelzést küldött": "надіслав сигнал лиха",
 "Helyi szoba": "Локальна кімната",
 "Itt van": "Місцезнаходження",
 "Megnézem a térképen": "Показати на карті",
 "SOS · vészjelzés": "SOS · сигнал лиха",
 "Egy szobatárs vészjelzést küldött.": "Учасник кімнати надіслав сигнал лиха.",
 "SOS a szobából": "SOS з кімнати",
 "Egy szobatárs vészjelzést küldött: a lezárt telefon is felébred.": "Учасник кімнати надіслав сигнал лиха: заблокований телефон теж прокидається.",
 "RIASZTÁS": "ТРИВОГА",
 "Eszköz-riasztás": "Тривога пристрою",
 "Egy eszköz riasztást küldött.": "Пристрій надіслав тривогу.",
 "Eszköz-riasztás a szobából": "Тривога пристрою з кімнати",
 "Egy eszköz riasztást küldött: a lezárt telefon is felébred.": "Пристрій надіслав тривогу: заблокований телефон теж прокинеться.",
 "Ideje visszafordulni": "Час повертати назад",
 "visszaút": "зворотний шлях",
 "Ma már elmúlt a sötétedés: lámpával indulj vissza.": "Сьогодні вже темно: повертайся з ліхтариком.",
 "A visszafordulás ideje már elmúlt: indulj vissza most.": "Час розвороту минув: повертайся зараз.",
 "Sötétedésig": "До темряви",
 "Már sötétedik.": "Уже темніє.",
 "Visszaút": "Зворотний шлях",
 "Tartalék": "Запас",
 "Ha most elindulsz, világosban érsz vissza.": "Якщо вийдеш зараз, повернешся засвітла.",
 "A visszaút hosszabb, mint ami a sötétedésig hátravan: indulj most, és készítsd elő a lámpát.": "Зворотний шлях довший, ніж лишилося до темряви: виходь зараз і підготуй ліхтарик.",
 "A tájoló a felvett irány ellentétére mutat: ez a visszaút.": "Компас показує напрямок, протилежний збереженому: це зворотний шлях.",
 "A tájoló a kiindulópont felé mutat.": "Компас показує на точку старту.",
 "Nincs GPS-helyzet: a térképen látod a kiindulópontot.": "Немає GPS-позиції: точку старту видно на мапі.",
 "Kiindulópont": "Точка старту",
 "Élesítve, ekkor szól:": "Увімкнено, спрацює о:",
 "Szólt": "Спрацював",
 "Visszafordulási ébresztő": "Будильник розвороту",
 "Túrán a visszafordulás idejében felébreszti a telefont, és mutatja, mennyi idő van sötétedésig, és mennyi a visszaút.": "У поході будить телефон у час розвороту й показує, скільки лишилося до темряви і скільки триватиме зворотний шлях.",
 "Túra indítása": "Почати похід",
 "Visszaút ideje (perc)": "Зворотний шлях (хвилини)",
 "A fenti számításból": "З розрахунку вище",
 "A tervezett útvonalból": "Із запланованого маршруту",
 "A fenti Menetidővel kiszámolhatod: add meg a visszaút távolságát és emelkedését.": "Можна розрахувати в Часі в дорозі вище: введи відстань і набір висоти зворотного шляху.",
 "Biztonsági tartalék (perc)": "Запас безпеки (хвилини)",
 "Sötétedés": "Темрява",
 "Napnyugta": "Захід сонця",
 "A szürkület vége (kb. fél órával a napnyugta után)": "Кінець сутінків (приблизно через пів години після заходу)",
 "tartalék": "запас",
 "Visszafordulás időpontja (kézzel)": "Час розвороту (вручну)",
 "Számított időre": "Розрахований час",
 "Böngészőben és iPhone-on csak akkor szól, ha az oldal nyitva van. A lezárt telefont az Android app ébreszti fel.": "У браузері та на iPhone спрацьовує, лише поки сторінка відкрита. Заблокований телефон будить Android-застосунок.",
 "Az ébresztő be van állítva, lezárt telefonon is szól.": "Будильник встановлено, він спрацює й на заблокованому телефоні.",
 "Visszafordulás": "Розворот",
 "Visszafordulás (kézzel állítva)": "Розворот (задано вручну)",
 "Nincs helyzet a napnyugtához: engedélyezd a helymeghatározást, vagy nyisd meg egyszer a térképet.": "Немає позиції для розрахунку заходу: дозволь геолокацію або один раз відкрий мапу.",
 "Add meg a visszaút idejét.": "Вкажи, скільки триває зворотний шлях.",
 "Ezen a helyen ma nincs napnyugta.": "Тут сьогодні немає заходу сонця.",
 "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon csak értesítés jelenik meg.": "Повноекранні сповіщення заборонено: на заблокованому телефоні з'явиться лише сповіщення.",
 "VISSZA": "НАЗАД",
 "Visszaút indítása": "Почати зворотний шлях",
 "Indulj vissza, hogy világosban érj le.": "Повертайся, щоб спуститися засвітла.",
 "Túrán a visszafordulás idejében a lezárt telefon is felébred.": "У поході заблокований телефон прокидається в час розвороту.",
 // ===== 2026-10-18: hatterzene a felolvasas alatt (kartya 694fc83c) =====
 "Háttérzene": "Фонова музика",
 "Halk, ismétlődő zene a felolvasás alatt. Előbb töltsd le; utána internet nélkül is szól. A hangerejét felolvasás közben a hangjegy gombbal állíthatod.": "Тиха зациклена музика під час читання. Спершу завантажте її; потім вона звучить і без інтернету. Гучність регулюється під час читання кнопкою з нотою.",
 "Zene a Biblia felolvasása alatt": "Музика під час читання Біблії",
 "Ki": "Вимк.",
 "nincs letöltve": "не завантажено",
 "Biblia-felolvasáshoz": "Для читання Біблії",
 "Ébresztőhöz": "Для будильника",
 "Akusztikus gitár": "Акустична гітара",
 "Kelta": "Кельтська",
 "Epikus 1": "Епічна 1",
 "Epikus 2": "Епічна 2",
 "Epikus 3": "Епічна 3",
 "Zene": "Музика",
 "Háttérzenét a Biblia beállításaiban (fogaskerék) tölthetsz le.": "Фонову музику можна завантажити в налаштуваннях Біблії (шестерня).",
 "A letöltött zene hiányos volt, ezért nem mentettük el. Próbáld újra.": "Завантажена музика була неповною, тому її не збережено. Спробуйте ще раз.",
 "Ez a zene most nem érhető el a szerveren.": "Ця музика зараз недоступна на сервері.",
 // a felolvaso panel (hangjegy gomb) feliratai -- eddig forditatlanok voltak (2026-10-18, 694fc83c mellett)
 "Felolvasás": "Читання вголос",
 "Szünet a versek között": "Пауза між віршами",
 "Sebesség": "Швидкість",
 "Zene hangereje": "Гучність музики",
 "Zene választása": "Вибрати музику",
 "Nincs kiválasztott zene": "Музику не вибрано",
 "Zene szünet": "Пауза музики",
 "Zene indítása": "Увімкнути музику",
 "Telefon zenelejátszója (hangereje itt nem állítható)": "Музичний плеєр телефону (його гучність тут не налаштовується)",
 "Megvallás felolvasás": "Читання сповідання",
 "Ima felolvasás": "Читання молитви",
 "Saját zene a telefonról": "Власна музика з телефона",
 "Telefon hangja": "Голос телефона",
 "Előbb töltsd le; utána internet nélkül is szól.": "Спершу завантажте; потім вона грає і без інтернету.",
 "Csatazene": "Бойова музика",
 "Tempó": "Темп",
 "Lassú": "Повільно",
 "Szünet a mondatok után": "Пауза після кожного речення",
 "Auto": "Авто",
 "Auto: a mondat hossza": "Авто: довжина речення",
 "Minden mondat után megáll, hogy hangosan elismételhesd. A zene a szünetben is szól.": "Після кожного речення робить паузу, щоб ви могли повторити його вголос. Музика в паузі звучить далі.",
 "A telefon beszédmotorja: ha a Google magyar hangja telepítve van, azzal olvas. Nem foglal helyet, internet nélkül is szól.": "Синтезатор мовлення телефона: якщо встановлено голос Google для мови, читає ним. Не займає місця, працює без інтернету.",
 "Előre felolvasott hang a Károli-fordításhoz. Internettel azonnal szól; ha letöltöd, internet nélkül is.": "Заздалегідь записаний голос для перекладу Кароля. З інтернетом звучить одразу; після завантаження і без нього.",
 "Letöltés": "Завантажити",
 "Törlés": "Видалити",
 "A PrepperPapa hang a saját tempójában szól (nem lassítjuk, mert torzítana).": "Голос PrepperPapa звучить у власному темпі (ми його не сповільнюємо, бо він спотворився б).",
 "jobb": "кращий",
 "internet": "інтернет",
 "letöltött": "завантажений",
 "Hang": "Голос",
 "Most ez szól": "Зараз звучить",
 "A telefon beszédmotorja: internettel a Google legjobb hangján olvas, internet nélkül a telefonra letöltött hangon. Nem foglal helyet.": "Синтезатор мовлення телефона: з інтернетом читає найкращим голосом Google, без інтернету голосом, завантаженим на телефон. Не займає місця.",
 "A Lassú egy külön, lassabban felolvasott felvétel.": "Повільний темп — це окремий запис, прочитаний повільніше.",
 "A Lassú tempó lassabban beszélteti a telefon hangját.": "Повільний темп змушує голос телефона говорити повільніше."
});

// ===== 2026-10-18: vilagterkep-letoltes (korabban hianyzo kulcsok) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "a telefonon": "на телефоні",
  "A letöltés nem sikerült": "Завантаження не вдалося",
  "A letöltéshez be kell jelentkezni (Beállítások).": "Щоб завантажити, потрібно увійти (Налаштування)."
});

// ===== 2026-10-18: AKTUALIS VILAGHELYZET terkep-reteg (kartya 771683de) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Világhelyzet (események)": "Ситуація у світі (події)",
  "Tűzveszély-előrejelzés (EFFIS) – veszély, nem tilalom": "Прогноз пожежної небезпеки (EFFIS) – небезпека, не заборона",
  "Földrengés": "Землетрус",
  "Erdőtűz": "Лісова пожежа",
  "Árvíz": "Повінь",
  "Trópusi ciklon": "Тропічний циклон",
  "Vulkánkitörés": "Виверження вулкана",
  "Aszály": "Посуха",
  "Járvány": "Епідемія",
  "Háborús övezet": "Зона війни",
  "Tűzgyújtási tilalom": "Заборона розпалювати вогонь",
  "Súlyosság": "Серйозність",
  "alacsony": "низька",
  "közepes": "середня",
  "magas": "висока",
  "Nagy háború (évi 10 000+ halott)": "Велика війна (понад 10 000 загиблих на рік)",
  "Háború (évi 1000–9999 halott)": "Війна (1000–9999 загиблих на рік)",
  "Fegyveres konfliktus (évi 100–999 halott)": "Збройний конфлікт (100–999 загиблих на рік)",
  "Összecsapások (évi 100 alatti halott)": "Сутички (менше 100 загиблих на рік)",
  "Megye": "Медьє",
  "Napi tilalom": "Щоденна заборона",
  "A tilalom a megye külterületi erdeire, fásításaira és azok 200 méteres sávjára vonatkozik.": "Заборона стосується лісів і лісонасаджень медьє поза населеними пунктами та 200-метрової смуги навколо них.",
  "Erősség": "Магнітуда",
  "Mélység": "Глибина",
  "Cunamiriasztás": "Попередження про цунамі",
  "Hírek alapján (előző nap):": "За новинами (попередній день):",
  "független forrás": "незалежних джерел",
  "esemény": "подій",
  "Érintett ország, a konfliktus fő helyszíne máshol van.": "Залучена країна; основна арена конфлікту деінде.",
  "Időpont": "Час",
  "Forrás": "Джерело",
  "Forrás megnyitása": "Відкрити джерело",
  "Világhelyzet": "Ситуація у світі",
  "nincs adat": "немає даних",
  "frissítve": "оновлено",
  "mentett adat (offline)": "збережені дані (офлайн)",
  "Még nincs letöltött világhelyzet-adat. Kapcsold be internettel.": "Ще немає завантажених даних про ситуацію у світі. Увімкніть з інтернетом.",
  "Távolról ikonok, közelítve az érintett terület körvonallal és fátyollal. Koppints egy jelre vagy területre a részletekért.": "Здалеку значки; при наближенні уражена територія обведена й затінена. Торкніться знака або території, щоб побачити деталі.",
  "tűzveszély-előrejelzés (FWI), csak internettel. Ez veszély-index, NEM tilalom.": "прогноз пожежної небезпеки (FWI), лише з інтернетом. Це індекс небезпеки, НЕ заборона.",
  "Források": "Джерела",
  "később (hozzáférésre vár)": "пізніше (очікує доступу)",
  "most nem frissült": "зараз не оновлено"
});

// ===== 2026-10-18 16:4x: vilaghelyzet v2 (haboru / instabilitas, tilalom tavolrol egy jel; kartya 771683de) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Fegyveres összecsapás / instabilitás": "Збройні сутички / нестабільність",
  "Felkelés, terrorizmus vagy szervezett bűnözés (nem háború)": "Повстанський рух, тероризм або організована злочинність (не війна)",
  "helyszín": "місць",
  "Megyék tilalommal": "Медьє із забороною",
  "Közelíts a megyék megjelenítéséhez.": "Наблизьте мапу, щоб побачити медьє."
});

// ===== 2026-10-18: ige-melletti jegyzetek (Biblia, kartya c7ec8846) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Mértékegység": "Одиниця виміру",
  "Scofield-jegyzet": "Примітка Скофілда",
  "Jegyzetek": "Примітки",
  "Jegyzetek az igék mellett": "Примітки біля віршів",
  "Ahol egy vershez jegyzet tartozik, egy kis jel áll mellette; rákoppintva megnyílik. A jegyzetcsomag a most olvasott fordításhoz tartozik, és letöltés után internet nélkül is megvan.": "Якщо до вірша є примітка, поруч стоїть маленький значок; торкніться, щоб відкрити. Пакет приміток належить до перекладу, який ви читаєте, і після завантаження працює без інтернету.",
  "Ehhez a fordításhoz még nincs jegyzetcsomag.": "Для цього перекладу пакета приміток ще немає.",
  "A letölthető jegyzetcsomagok listája most nem érhető el.": "Список пакетів приміток для завантаження зараз недоступний.",
  "Jelek megjelenítése": "Показувати значки",
  "jegyzet": "приміток",
  "Még nincs letöltve": "Ще не завантажено",
  "Törlöd ezt a jegyzetcsomagot?": "Видалити цей пакет приміток?"
});

// ===== APOKRIF KONYVEK a Bibliaban (kartya 28758956, 2026-10-18) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Apokrifek ↓": "Апокрифи ↓",
  "Apokrif könyvek letöltése": "Завантажити апокрифічні книги",
  "Deuterokanonikus könyvek": "Второканонічні книги",
  "További ószövetségi apokrifek": "Інші старозавітні апокрифи",
  "Pszeudepigráfák": "Псевдоепіграфи",
  "Apostoli atyák": "Апостольські мужі",
  "vers": "вірш",
  "Énok könyvei letöltése": "Завантажити книги Еноха",
  "Énok 2–3 ↓": "Енох 2–3 ↓"
});

// ===== OFFLINE TERKEP CSOPORT a terkep-funkciok tablan (2026-10-18) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Helyzet, pontok és mérés": "Положення, точки й вимірювання",
  "Offline térkép": "Офлайн-карта",
  "A tájegységek letöltése a telefonos alkalmazásban működik.": "Завантаження за регіонами працює в застосунку для телефона.",
  "Külföld: országok és tájegységeik ›": "Закордон: країни та їхні регіони ›",
  "Magyarország tájegységei": "Регіони Угорщини",
  "Külföldi térképek": "Закордонні карти",
  "A saját térképet tájegységenként töltheted le: itt lent, az „Offline térkép” csoportban.": "Власну карту можна завантажити за регіонами: просто нижче, у групі «Офлайн-карта».",
  "A tájegységek listája most nem érhető el (nincs kapcsolat vagy belépés).": "Список регіонів зараз недоступний (немає зв’язку або не виконано вхід).",
  "Saját térkép bekapcsolva. A tájegységeket itt lent, az „Offline térkép” csoportban töltheted le.": "Власну карту увімкнено. Регіони завантажуються просто нижче, у групі «Офлайн-карта».",
  "Az alaptérképet az OpenStreetMap szabályai miatt nem lehet előre letölteni (a megnézett részek megmaradnak). Internet nélkül a Saját térkép működik: Magyarországra tájegységenként letöltheted itt lent, az „Offline térkép” csoportban.": "Базову карту не можна завантажити заздалегідь через правила OpenStreetMap (переглянуті ділянки зберігаються). Без інтернету працює Власна карта: для Угорщини її можна завантажити за регіонами просто нижче, у групі «Офлайн-карта».",
  // 2026-10-19 (card 4c1a5683): own country first, Más országok térképei, separate trails / points
  "Turistautak": "Туристичні стежки",
  "Turistapontok": "Туристичні точки",
  "Az egész ország": "Уся країна",
  "Más országok térképei": "Карти інших країн",
  "Más országok térképei ›": "Карти інших країн ›",
  "A telefon beállításaiból nem derül ki, melyik a saját országod: a Más országok térképei között megtalálod.": "З налаштувань телефону не видно, яка країна ваша: ви знайдете її в розділі «Карти інших країн».",
  "Koppints egy országra, és lenyílik. Az alaptérkép, a turistautak és a turistapontok külön-külön letölthetők, az egész országra vagy tájegységenként. A turistautak és a pontok az online térképen is működnek, és kevés helyet foglalnak. Az alaptérképet az első kéréskor a szerver készíti elő, ez néhány perc lehet.": "Натисніть на країну, щоб розгорнути її. Базову карту, туристичні стежки й туристичні точки можна завантажити окремо, для всієї країни або за регіонами. Стежки й точки працюють і на онлайн-карті та займають мало місця. Базову карту сервер готує під час першого запиту, це може тривати кілька хвилин."
});

// 2026-10-19 (card 19b4756f): second recorded Bible voice (Charon)
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "A PrepperPapa hang felvétele": "Запис голосу PrepperPapa",
  "Imre (gépi)": "Імре (синтетичний)",
  "Charon (új, jobb minőségű)": "Харон (новий, кращої якості)",
  "Az eredeti felvétel, a teljes Biblia elérhető.": "Початковий запис, доступна вся Біблія.",
  "Új, természetesebb felvétel, könyvenként érkezik. Amelyik könyv még nem készült el, azt Imre olvassa fel.": "Новий, природніший запис, з’являється по книгах. Ще не готові книги читає Імре.",
  "Letöltés közben a felvétel nem váltható.": "Під час завантаження запис не можна змінити.",
  "A Charon-felvétel készül, könyvenként érkezik. Amint egy könyv elkészül, itt letölthető lesz.": "Запис Харона готується, книги з’являються по одній. Щойно книга буде готова, її можна буде завантажити тут.",
  "A Charon-felvétel készül, könyvenként érkezik.": "Запис Харона готується, книги з’являються по одній.",
  "Minden elkészült könyv letöltése": "Завантажити всі готові книги"
});

// 2026-10-19 (card eaaba276): calculator validation, settlement search, secret QR, compass, household, reminders
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Add meg, hány liter vizet tisztítasz (nullánál több).": "Вкажи, скільки літрів води знезаражуєш (більше нуля).",
  "Ez a számoló legfeljebb 10 000 literig számol.": "Цей калькулятор рахує щонайбільше до 10 000 літрів.",
  "A magasság -500 és 9000 méter között legyen.": "Висота має бути від -500 до 9000 метрів.",
  "Tölts ki minden mezőt nullánál nagyobb számmal.": "Заповни кожне поле числом, більшим за нуль.",
  "A fűtött terület legfeljebb 2000 m² lehet.": "Опалювана площа може бути не більше 2000 м².",
  "Legfeljebb 365 napra számol.": "Рахує щонайбільше на 365 днів.",
  "Tölts ki mindkét mezőt nullánál nagyobb számmal.": "Заповни обидва поля числом, більшим за нуль.",
  "A tetőfelület legfeljebb 10 000 m² lehet.": "Площа даху може бути не більше 10 000 м².",
  "Egyetlen esőből legfeljebb 500 mm-rel számol: ennél több egy esőzésből nem esik.": "Для одного дощу рахує щонайбільше 500 мм: більше за один дощ не випадає.",
  "Gyalog legfeljebb 1000 km-rel számol. Hosszabb utat bonts szakaszokra.": "Пішки рахує щонайбільше 1000 км. Довший маршрут розділи на відрізки.",
  "Az emelkedés nem lehet negatív: a lejtőt ne vond le, írj 0-t.": "Підйом не може бути від'ємним: не віднімай спуск, введи 0.",
  "Az összes emelkedés legfeljebb 20 000 méter lehet.": "Загальний підйом може бути не більше 20 000 метрів.",
  "A létszám nem lehet negatív.": "Кількість людей не може бути від'ємною.",
  "Add meg, hány felnőtt és hány gyerek van (legalább egy fő).": "Вкажи, скільки дорослих і дітей (щонайменше одна особа).",
  "Legfeljebb 500 főre számol.": "Рахує щонайбільше на 500 осіб.",
  "Hány napra kell? Legalább 1 napot adj meg.": "На скільки днів? Вкажи щонайменше 1 день.",
  "Legfeljebb 3650 napra (10 évre) számol.": "Рахує щонайбільше на 3650 днів (10 років).",
  "Legalább 1 elem vagy akku kell.": "Потрібна щонайменше 1 батарейка або акумулятор.",
  "Legfeljebb 100 elemmel számol.": "Рахує щонайбільше зі 100 батарейками.",
  "Add meg a LED áramfelvételét (mA, nullánál több).": "Вкажи струм споживання світлодіода (мА, більше нуля).",
  "Add meg az elem vagy akku kapacitását (mAh, nullánál több).": "Вкажи ємність батарейки або акумулятора (мА·год, більше нуля).",
  "Add meg az adóteljesítményt (watt, nullánál több).": "Вкажи потужність передавача (вати, більше нуля).",
  "Legfeljebb 1500 wattal számol.": "Рахує щонайбільше з 1500 ватами.",
  "Az antennamagasság 0 és 1000 méter között legyen.": "Висота антени має бути від 0 до 1000 метрів.",
  "A távolság nem lehet negatív.": "Відстань не може бути від'ємною.",
  "A napok száma nem lehet negatív.": "Кількість днів не може бути від'ємною.",
  "Hány napra: 1 és 60 nap között adj meg egy számot.": "На скільки днів: вкажи число від 1 до 60.",
  "város": "місто",
  "település": "населений пункт",
  "településrész": "частина населеного пункту",
  "tanya, külterület": "хутір, околиця",
  "A koordinátát nem tudtam értelmezni. Írd be így: 47.4979, 19.0402": "Не вдалося розпізнати координату. Введи так: 47.4979, 19.0402",
  "Tölts ki valamit, amit bele lehet tenni.": "Заповни щось, що можна вкласти.",
  "Túl hosszú: ennyi szöveg nem fér el egy QR-kódban. Rövidítsd le, vagy oszd két kódra.": "Задовго: стільки тексту не вміститься в один QR-код. Скороти його або розділи на два коди.",
  "A titkosítás nem sikerült. Próbáld újra.": "Шифрування не вдалося. Спробуй ще раз.",
  "Előre:": "Попереду:",
  "Az É betű mindig az északot mutatja, a felső jel az, amerre a telefon néz.": "Пн завжди вказує на північ, верхня позначка показує, куди дивиться телефон.",
  "vércsoport": "група крові",
  "kontakt": "контакт",
  "még nincs felvéve": "ще нічого не додано",
  "Bekapcsolva.": "Увімкнено.",
  "Kikapcsolva.": "Вимкнено.",
  "Reggel 9-kor szól, a fent választott idővel a lejárat előtt és a lejárat napján, akkor is, ha az app be van zárva.": "Нагадує о 9 ранку, із вибраним вище запасом часу до закінчення терміну і в день закінчення, навіть коли застосунок закрито.",
  "Most nincs olyan tétel, aminek közelgő lejárata lenne.": "Зараз немає позицій, у яких скоро закінчується термін.",
  "Beütemezett emlékeztetők:": "Заплановані нагадування:",
  "Kapcsold be, és engedélyezd az értesítést: szól, mielőtt egy élelmiszer vagy készlet-tétel lejár.": "Увімкни й дозволь сповіщення: нагадає, перш ніж закінчиться термін продукту чи запасу.",
  "Bekapcsolva. Amikor megnyitod az appot, naponta egyszer jelez a lejáró tételekről.": "Увімкнено. Коли відкриваєш застосунок, раз на день нагадує про позиції, у яких закінчується термін.",
  "Helyi szoba (MESH)": "Локальна кімната (MESH)",
  "Offline segéd · tudástár, Biblia, készlet, térkép": "Офлайн-помічник · база знань, Біблія, запаси, карта"
});

Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Név a szobákban (ezen látnak a csevegésben)": "Ім'я в кімнатах (так тебе бачать у чаті)",
  "A családtag fényképe a profilképed is lesz a szobákban.": "Фото члена родини стане й твоїм фото профілю в кімнатах."
});

// kartya 28758956: halk jeloles az apokrif konyveknel
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Nem a Szentírás része – ajánlott irodalom.": "Не входить до Святого Письма – рекомендоване читання."
});

// kartya 6b4458db: veszkartya-cimkek + riaszto probahang (v43.308)
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "A kártya tulajdonosának telefonszáma": "Телефон власника картки",
  "A kártya tulajdonosának telefonszáma:": "Телефон власника картки:",
  "Vész esetén értesítendő személy": "Кого сповістити в екстреному випадку",
  "Vész esetén értesítendő telefonszáma": "Телефон того, кого сповістити в екстреному випадку",
  "Vész esetén értesítendő:": "Сповістити в екстреному випадку:",
  "pl. +36 30 123 4567": "напр. +36 30 123 4567",
  "Szól, de hallhatatlanul magas. Ha semmit nem hallasz, az normális.": "Звук лунає, але він надто високий, щоб його почути. Якщо ви нічого не чуєте, це нормально.",
  "Próbahang": "Пробний сигнал",
  "A próbahang nem indult el.": "Пробний сигнал не запустився."
});
// ===== 2026-10-20 v43.326 (card 6b287cfb): PIN recovery code, reminder sentence, PIN setup without a default PIN =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Írd be a PIN-kódod": "Введіть PIN-код",
  "Írd be még egyszer": "Введіть ще раз",
  "A PIN még egyszer": "PIN-код ще раз",
  "Elfelejtettem a PIN-t": "Я забув PIN-код",
  "Állíts be egy PIN-kódot (6 számjegy)": "Задайте PIN-код (6 цифр)",
  "A PIN 6 számjegy legyen.": "PIN-код має складатися з 6 цифр.",
  "A két PIN nem egyezik.": "Два PIN-коди не збігаються.",
  "Válassz másik PIN-kódot.": "Виберіть інший PIN-код.",
  "Mentési kód a PIN-hez": "Код відновлення PIN-коду",
  "Ha elfelejted a PIN-t, ezzel a kóddal nyithatod meg a tárat, és állíthatsz be új PIN-t. Írd le papírra, és tartsd biztonságos helyen. Csak most látod: a telefon nem őrzi meg, és sehova nem küldjük el.": "Якщо ви забудете PIN-код, цей код відкриє сховище й дозволить задати новий PIN-код. Запишіть його на папері й зберігайте в надійному місці. Ви бачите його лише зараз: телефон його не зберігає, і ми нікуди його не надсилаємо.",
  "Emlékeztető mondat (nem kötelező; titkosítás nélkül tárolódik, ne írd bele a PIN-t)": "Речення-підказка (необов’язково; зберігається без шифрування, не пишіть у нього PIN-код)",
  "A kód utolsó négy karaktere (ellenőrzéshez)": "Останні чотири символи коду (для перевірки)",
  "Leírtam": "Я записав",
  "Később": "Пізніше",
  "Mentve. A mentési kód mostantól érvényes.": "Збережено. Код відновлення діє з цього моменту.",
  "Nem egyezik a kód utolsó négy karakterével. Nézd meg újra a leírt kódot.": "Не збігається з останніми чотирма символами коду. Перегляньте ще раз записаний код.",
  "A mentés nem sikerült, próbáld újra.": "Не вдалося зберегти, спробуйте ще раз.",
  "Rendben, a következő belépéskor újra felajánljuk.": "Гаразд, запропонуємо знову під час наступного входу.",
  "Emlékeztető mondat:": "Речення-підказка:",
  "Új PIN ujjlenyomattal": "Новий PIN-код відбитком",
  "Mentési kód": "Код відновлення",
  "Ehhez a tárhoz még nincs mentési kód, és az ujjlenyomatos feloldás sincs bekapcsolva, ezért a PIN nem állítható vissza.": "Для цього сховища ще немає коду відновлення, і розблокування відбитком не ввімкнено, тому PIN-код відновити неможливо.",
  "Új PIN beállítása": "Задати новий PIN-код",
  "Az ujjlenyomat rendben. Add meg az új PIN-t.": "Відбиток підтверджено. Введіть новий PIN-код.",
  "Az ujjlenyomatos feloldás most nem sikerült.": "Розблокування відбитком зараз не вдалося.",
  "Hibás mentési kód.": "Неправильний код відновлення.",
  "Az új PIN beállítása nem sikerült, a régi PIN maradt érvényben.": "Не вдалося задати новий PIN-код; старий PIN-код залишається чинним.",
  "A dokumentumok CSAK ezen az eszközön tárolódnak, a PIN-edből képzett kulccsal titkosítva (AES-256) — a vészkártyával ellentétben ezt csak te nyithatod meg. A PIN-t nem tároljuk. Ha elfelejted, a mentési kóddal vagy ujjlenyomattal állíthatsz be újat; ezek nélkül a dokumentumok nem állíthatók vissza.": "Документи зберігаються ЛИШЕ на цьому пристрої, зашифровані ключем, створеним із вашого PIN-коду (AES-256) — на відміну від екстреної картки, відкрити їх можете лише ви. PIN-код не зберігається. Якщо ви його забудете, новий можна задати кодом відновлення або відбитком пальця; без них документи відновити неможливо.",
  "A kódok titkosítva tárolódnak ezen az eszközön: a kulcs a PIN-edből készül (AES-256), magát a PIN-t nem tároljuk. Ha elfelejted a PIN-t, a mentési kóddal vagy ujjlenyomattal állíthatsz be újat; ezek nélkül a tartalom nem állítható vissza, ezért a seed-mondatról tarts papírmásolatot is. A teljes mentésbe ez a rész SOSEM kerül bele.": "Коди зберігаються на цьому пристрої в зашифрованому вигляді: ключ створюється з вашого PIN-коду (AES-256), сам PIN-код не зберігається. Якщо ви забудете PIN-код, новий можна задати кодом відновлення або відбитком пальця; без них вміст відновити неможливо, тому зберігайте й паперову копію сід-фрази. Ця частина НІКОЛИ не потрапляє до повної резервної копії."
});
// ===== 2026-10-20 v43.327 (card 6b287cfb): wallet-creation acknowledgement (HU text approved by the owner 21:39) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Értem, hogy a tárcám kulcsait (PIN, helyreállító kód, seed phrase) csak én ismerem. Ha elveszítem őket, a tárcám tartalma végleg elveszhet, és a PrepperPapa nem tudja visszaállítani. A kulcsok biztonságos megőrzése az én felelősségem.": "Я розумію, що ключі мого гаманця (PIN-код, код відновлення, сід-фраза) знаю лише я. Якщо я їх втрачу, вміст гаманця може бути втрачено назавжди, і PrepperPapa не зможе його відновити. Надійне зберігання ключів — моя відповідальність.",
  "Rendben": "Гаразд",
  "A tárca létrehozásához jelöld be, hogy tudomásul vetted a fenti szöveget.": "Щоб створити гаманець, позначте, що ви ознайомилися з текстом вище."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): "Fontos tudnivaló" notice (HU approved by the owner 21:47, TG 28515) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Fontos tudnivaló az Irattárcáról és a tárcáról": "Важлива інформація про Гаманець документів і криптогаманець",
  "Az adataid csak a te eszközödön vannak, titkosítva. A PrepperPapa nem fér hozzájuk, és nem tudja visszaállítani őket.": "Ваші дані зберігаються лише на вашому пристрої, у зашифрованому вигляді. PrepperPapa не має до них доступу й не може їх відновити.",
  "A PIN-kódod, a helyreállító kódod és a tárcád kulcsai (seed phrase) kizárólag nálad vannak. Ha elveszíted, megosztod vagy illetéktelen megszerzi őket, az adataid és a tárcád tartalma végleg elveszhet.": "Ваш PIN-код, код відновлення та ключі гаманця (сід-фраза) є лише у вас. Якщо ви їх загубите, передасте комусь або їх отримає стороння особа, ваші дані та вміст гаманця можуть бути втрачені назавжди.",
  "Ha a helyreállító kódot e-mailben is kéred, a hozzáférésed csak olyan biztonságos, mint a postafiókod.": "Якщо ви також попросите код відновлення електронною поштою, ваш доступ захищений не краще, ніж ваша поштова скринька.",
  "A kulcsok, a kód, a postafiók és az eszköz biztonságos megőrzéséért, valamint a mentésekért te felelsz. A PrepperPapa nem felel az ebből eredő kárért, kivéve azt a felelősséget, amelyet jogszabály nem enged kizárni.": "Ви відповідаєте за надійне зберігання ключів, коду, поштової скриньки та пристрою, а також за резервні копії. PrepperPapa не несе відповідальності за спричинену цим шкоду, крім відповідальності, яку закон не дозволяє виключити.",
  "Elolvastam, értem.": "Я прочитав(ла) і розумію."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): Gíra paragraph (HU approved by the owner 21:58, TG 28530) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "A gíra a közösségen belüli elszámolás egysége, nem pénz és nem fizetőeszköz. A PrepperPapa nem váltja át pénzre, nem garantálja az értékét, és nem részese a tagok közötti ügyleteknek. A tagok közötti vitákat és elszámolást a felhasználók egymás közt rendezik. Az offline fizetésnél előfordulhat, hogy ugyanazt a gírát kétszer költik el; ennek kockázata a felhasználókat terheli.": "Гіра — одиниця взаєморозрахунків усередині спільноти, не гроші й не платіжний засіб. PrepperPapa не обмінює її на гроші, не гарантує її вартість і не є стороною угод між учасниками. Суперечки та розрахунки між учасниками користувачі вирішують між собою. Під час офлайн-платежів та сама гіра може бути витрачена двічі; цей ризик несуть користувачі."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): SOS fail-closed -- nothing goes out unencrypted =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Az SOS NEM ment el: a titkosítás nem sikerült, ezért nyíltan nem küldöm el. Életveszélyben hívd a 112-t! A vészsíp szól.": "SOS НЕ надіслано: шифрування не вдалося, тому без шифрування його не надсилаю. У разі загрози життю телефонуй 112! Аварійний свисток звучить.",
  "{n} helyre NEM ment el, mert a titkosítás nem sikerült. Életveszélyben hívd a 112-t!": "До {n} місць(я) його НЕ надіслано, бо шифрування не вдалося. У разі загрози життю телефонуй 112!"
});
// ===== 2026-10-20 v43.329 (card 6b287cfb): room chat fail-closed -- nothing goes out unencrypted =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Az üzenet nem ment el: a titkosítás nem sikerült, vagy ezen a telefonon hiányzik a szoba kulcsa. Titkosítatlanul nem küldöm el. A szöveg megmaradt: lépj be újra a szobába (vagy kérj új meghívót a gazdától), és küldd újra.": "Повідомлення НЕ надіслано: шифрування не вдалося, або на цьому телефоні немає ключа кімнати. Без шифрування воно не надсилається. Твій текст збережено: увійди в кімнату знову (або попроси в господаря нове запрошення) і надішли ще раз.",
  "A kép nem ment el: a titkosítás nem sikerült, vagy hiányzik a szoba kulcsa. Titkosítatlanul nem küldöm el. Lépj be újra a szobába.": "Зображення НЕ надіслано: шифрування не вдалося, або немає ключа кімнати. Без шифрування воно не надсилається. Увійди в кімнату знову."
});
// ===== 2026-10-20 v43.329 (card 6b287cfb): SOS / fall-detection notices (HU approved by the owner, TG 28555) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
  "Ez nem segélyhívás. Az SOS-jelzés és az esés-érzékelés csak a te szobáidba, az ott lévő tagoknak küld értesítést. Nem hívja a mentőket, a rendőrséget vagy a tűzoltókat, és nem biztos, hogy bárki időben meglátja. Az esés-érzékelés nem pontos: téves riasztást adhat, és előfordulhat, hogy egy esést nem érzékel. Életveszélyben, balesetnél, rosszullétnél hívd a 112-t. A PrepperPapa nem segélyszolgálat, és nem garantálja, hogy a jelzés célba ér.": "Це не екстрений виклик. Сигнал SOS і визначення падіння надсилають сповіщення лише у твої кімнати, їхнім учасникам. Вони не викликають швидку допомогу, поліцію чи пожежників, і немає певності, що хтось вчасно його побачить. Визначення падіння неточне: воно може дати хибну тривогу і може не розпізнати падіння. У разі загрози життю, нещасного випадку чи поганого самопочуття телефонуй 112. PrepperPapa не є екстреною службою і не гарантує, що сигнал дійде до адресата.",
  "Az SOS elküldi a pontos helyedet, és ha bejelölted, a Vészkártyád adatait (vércsoport, allergia, gyógyszer, betegség, kontakt) is az összes szobádnak.": "SOS надсилає твоє точне місцезнаходження і, якщо ти позначив(ла), дані твоєї Картки на випадок біди (група крові, алергія, ліки, хвороба, контакт) в усі твої кімнати.",
  "A Vészkártya adataimat is küldjétek az SOS-szal.": "Надсилайте разом із SOS і дані моєї Картки на випадок біди.",
  "Ez nem hívja a mentőket. Életveszélyben hívd a 112-t.": "Це не викликає швидку допомогу. У разі загрози життю телефонуй 112.",
  "%s SOS-jelzést küldött. Ha nem éred el, és veszélyben lehet, hívd a 112-t.": "%s надіслав(ла) сигнал SOS. Якщо ти не можеш зв'язатися з цією людиною і вона може бути в небезпеці, телефонуй 112.",
  "(zárt kép — ehhez a szobához nincs meg a kulcs)": "(зашифроване зображення — немає ключа цієї кімнати)",
  "Fontos tudnivaló az SOS-ról és az esés-érzékelésről": "Важлива інформація про SOS і виявлення падіння",
  "Nem kell megnyomnod: a telefon két percenként magától egyeztet. A gomb csak azonnali egyeztetésre való.": "Натискати не потрібно: телефон сам синхронізує кожні дві хвилини. Кнопка лише для негайної синхронізації.",
  "Nincs elérhető Gíra-szoba: egy szoba gazdája kapcsolhatja be a szoba beállításaiban („Gíra-közösség”).": "Немає доступної кімнати Gíra: власник кімнати може ввімкнути це в налаштуваннях кімнати («Спільнота Gíra»).",
  "Automatikus egyeztetés bekapcsolva, de most nincs elérhető Gíra-szoba": "Автосинхронізацію ввімкнено, але зараз жодна кімната Gíra недоступна",
  "utoljára próbálva": "остання спроба",
  "Automatikus egyeztetés bekapcsolva": "Автосинхронізацію ввімкнено",
  "utoljára ellenőrizve": "остання перевірка",
  "Utolsó változás elküldve": "Остання зміна надіслана",
  "Utolsó beérkezett könyv": "Остання отримана книга",
  "Fortiprep vagy konzerv": "Fortiprep чи консерви",
  "Mennyibe kerül a tartalék hosszú távon": "Скільки коштує запас у довгостроковій перспективі",
  "Fortiprep vagy konzerv: mennyibe kerül a tartalék": "Fortiprep чи консерви: скільки коштує запас",
  "Ugyanannyi kalóriát hasonlít össze ugyanarra az időszakra. Az árakat a saját boltod szerint átírhatod.": "Порівнює однакову кількість калорій за той самий період. Ціни можна змінити під свій магазин.",
  "Hány fő": "Скільки людей",
  "Hány napra": "Скільки днів",
  "Napi kalória fejenként (kcal)": "Калорії на день на людину (ккал)",
  "Hány évig álljon a tartalék": "Скільки років має зберігатися запас",
  "Egy csomag ára (Ft)": "Ціна однієї упаковки (HUF)",
  "Kalória egy csomagban (kcal)": "Калорії в одній упаковці (ккал)",
  "Eltarthatóság (év)": "Термін зберігання (років)",
  "Alapérték: 42 adagos (14 napos, egy fős) csomag a PP-2-2026 kóddal, 2026. augusztusi áron. A mostani gyártás minőségmegőrzési ideje 2050. november.": "За замовчуванням: упаковка на 42 порції (14 днів, одна людина) з кодом PP-2-2026, ціна серпня 2026 року. Поточна партія придатна до листопада 2050 року.",
  "Konzerv": "Консерви",
  "Egy doboz ára (Ft)": "Ціна однієї банки (HUF)",
  "Kalória egy dobozban (kcal)": "Калорії в одній банці (ккал)",
  "A konzervnél azzal számol, hogy lejáratkor az egészet lecseréled. Ha rotálva megeszed, a csere nem veszteség, de figyelni kell rá.": "Для консервів вважається, що після закінчення терміну ти все замінюєш. Якщо з'їдаєш їх по ротації, заміна не втрата, але за нею треба стежити.",
  "A FortiPrep 14 napos csomagja a PP-2-2026 kóddal, kedvezménnyel:": "14-денна упаковка FortiPrep з кодом PP-2-2026, зі знижкою:",
  "Megnézem a FortiPrep oldalán": "Переглянути на сайті FortiPrep",
  "Minden mezőbe nullánál nagyobb számot írj.": "Введи в кожне поле число більше нуля.",
  "Ekkora értékkel nem számol.": "З такими великими значеннями не рахує.",
  "Erre az időszakra a Fortiprep az olcsóbb.": "На цей період Fortiprep дешевший.",
  "Erre az időszakra a konzerv az olcsóbb.": "На цей період консерви дешевші.",
  "Erre az időszakra a kettő ugyanannyiba kerül.": "На цей період обидва варіанти коштують однаково.",
  "Különbség": "Різниця",
  "Szükséges kalória (kcal)": "Потрібно калорій (ккал)",
  "Csomag": "Упаковки",
  "Egyszeri vásárlás": "Разова покупка",
  "Ezer kalória ára": "Ціна за 1000 ккал",
  "Vásárlás a teljes időszakra": "Покупок за весь період",
  "Évente": "На рік",
  "Doboz": "Банки",
  "FortiPrep 14 napos csomag, 15% kedvezménnyel": "Упаковка FortiPrep на 14 днів, знижка 15%",
  "Kuponkód": "Промокод",
  "Másol": "Копіювати",
  "A gomb mögötti link magától érvényesíti a kódot a kosárban.": "Посилання за кнопкою саме застосує код у кошику.",
  "Megveszem kedvezménnyel": "Купити зі знижкою",
  // Biblia konyvszin-sema (2026-10-25, kartya 6b4458db)
  "Könyvszínek": "Кольори книг",
  "Új": "Нова",
  "Régi": "Стара",
  "Minden könyvcsoport saját színt kap, az Ószövetségben és az Újszövetségben is.": "Кожна група книг має власний колір, і в Старому, і в Новому Заповіті.",
  "A korábbi zöld árnyalatok: az Újszövetség is az Ószövetség színeit kapja.": "Попередні відтінки зеленого: Новий Заповіт отримує ті самі кольори, що й Старий.",
  // Biblia terkep: helyleiras (2026-10-25, kartya 6b4458db)
  "biztos": "точно",
  "valószínű": "ймовірно",
  "lehetséges": "можливо",
  "Mai azonosítás": "Сучасна ідентифікація",
  "Megjegyzés (OpenBible, angolul)": "Примітка (OpenBible, англійською)",
  "Más nevek (angol fordításokban)": "Інші назви (в англійських перекладах)",
  "További versek": "Інші вірші"
});
// ===== 2026-10-25 v43.355: camera Morse follows the tempo (#65); Noah memory lines from about 8 GB (#52) =====
Object.assign(window.PP_FORD_SZOTAR.uk, {
 "Indítsd, és irányítsd a kamerát egy Morzét villogó fényre (pl. egy másik telefon vakuja). A háttér legyen sötét, a fény a kép KÖZEPÉN. A fény-küszöb magától hangolódik; a \"Fényerő\" sáv és a lámpa mutatja, mit lát. A vétel magától követi a villogás tempóját, és a \"Vétel sebesség\" csúszkát is odaállítja; kézzel is állíthatod.": "Запусти й наведи камеру на світло, що блимає абеткою Морзе (наприклад, спалах іншого телефона). Тло має бути темним, світло — у ЦЕНТРІ кадру. Поріг світла налаштовується сам; смуга «Яскравість» і лампа показують, що бачить камера. Приймання саме стежить за темпом блимання й саме ставить туди повзунок «Швидкість приймання»; його можна рухати й вручну.",
 "A nyelvi modell válasz közben kb. 3 GB memóriát használ, ezért Noah legalább 5,5 GB jelentett memóriát kér, ami kb. 8 GB-os telefonnak felel meg. Kisebb telefonon a rendszer válasz közben leállítaná az appot, ezért itt Noah nem használható.": "Під час відповіді мовна модель використовує близько 3 ГБ пам’яті, тому Noah потребує щонайменше 5,5 ГБ повідомленої пам’яті, що відповідає телефону приблизно на 8 ГБ. На меншому телефоні система зупинила б застосунок під час відповіді, тому тут Noah використовувати не можна.",
 "A telefon memóriáját nem sikerült lekérdezni.": "Не вдалося дізнатися пам’ять телефона.",
 "A telefon által jelentett memória: {jel} GB, ez kb. {nev} GB-os telefon (a rendszer a névleges memória kb. 90%-át jelenti).": "Пам’ять, яку повідомляє телефон: {jel} ГБ, тобто телефон приблизно на {nev} ГБ (система повідомляє близько 90% номінальної пам’яті).",
 "Ebbe a telefonba mindkét modell belefér (E2B és E4B).": "На цей телефон вміщаються обидві моделі (E2B і E4B).",
 "Ebbe a telefonba az E2B modell fér bele. Az E4B nem, mert ahhoz legalább {kapu} GB jelentett memória kell.": "На цей телефон вміщається модель E2B. E4B — ні, їй потрібно щонайменше {kapu} ГБ повідомленої пам’яті.",
 "Ebbe a telefonba egyik modell sem fér bele.": "На цей телефон не вміщається жодна модель.",
 "Noah kb. 8 GB-os telefontól fut (a telefon névleges memóriája), a nagyobb E4B modell kb. 10 GB-ostól.": "Noah працює на телефоні приблизно від 8 ГБ (номінальна пам’ять телефона), більша модель E4B — приблизно від 10 ГБ.",
 "A telefon {jel} GB memóriát jelent, ez kb. {nev} GB-os telefon.": "Телефон повідомляє {jel} ГБ пам’яті, тобто це телефон приблизно на {nev} ГБ.",
 "Ez a telefon: {modell}.": "Цей телефон: {modell}.",
 "Szabad hely: {hely}.": "Вільне місце: {hely}.",
 "Ajánlott: {modell}.": "Рекомендовано: {modell}.",
 "nem választható: legalább {ajanlott} GB-os telefon kell": "недоступно: потрібен телефон щонайменше на {ajanlott} ГБ",
 "ez kb. {nev} GB-os": "цей приблизно на {nev} ГБ",
 "Ajánlott memória: legalább {ajanlott} GB-os telefon": "Рекомендована пам’ять: телефон щонайменше на {ajanlott} ГБ",
 "ez a telefon {jel} GB-ot jelent, kb. {nev} GB-os": "цей телефон повідомляє {jel} ГБ, приблизно {nev} ГБ",
 "ezért ez a modell itt nem választható": "тому цю модель тут вибрати не можна",
 "ennek a telefonnak a memóriáját nem sikerült lekérdezni": "не вдалося дізнатися пам’ять цього телефона",
 "Processzor:": "Процесор:",
 "kb. 8 GB-os telefon kell": "потрібен телефон приблизно на 8 ГБ",
 "Ehhez Android 11 vagy újabb, kb. 8 GB-os (névleges memóriájú) telefon kell, és 6-8 GB szabad hely.": "Для цього потрібен телефон з Android 11 або новішим, приблизно 8 ГБ (номінальної) пам’яті та 6-8 ГБ вільного місця."
});
