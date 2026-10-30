// PrepperPapa -- OROSZ SZOVEGTAR (teljes felulet-forditas)
//
// Fonok kerese 2026-08-24 10:54: "Johet az orosz, es a nemet."
//
// A SZERKEZET AZONOS AZ `en.js`-EVEL ES AZ `uk.js`-EVEL: a kulcs MAGA A MAGYAR SZoVEG.
//
// **EZ A HAROM SZoTAR KoZuL AZ ELSo.** Egy nyelv NEM egy fajl -- lasd az `uk.js` fejlecet:
//   1. ez a fajl              -> `PP_FORD_SZOTAR.ru`   (szoveg-egyezes)
//   2. `i18n/vagyon-ru.js`    -> `PP_VAGYON_SZOTAR.ru` (Vagyon modul, KET azonos fajlban)
//   3. `PP_SZOTAR.ru`         -> az index.html-be agyazva (`data-i18n` elemek)
// A 3. NEM fajl, tehat fajl-szintu grep nem talalja meg. Ha barmelyik hianyzik, a felulet
// NEM hibat ad, hanem csendben magyarul marad.
//
// AZ oT BIBLIAI IGEVERS 2026-08-24 12:0x OTA A KIADOTT SZoVEGBoL VAN, NEM TOLEM.
// Forras: Szinodalis forditas (`szinodalis.json`, getbible v2 / synodal), szo szerint
// masolva a letoltott fajlbol. A delelotti sajat szovegem egyebkent beture egyezett --
// de ezt csak a meres utan tudom, elotte nem tudhattam.
//
// A ZSOLTAR SZAMOZASA SZANDEKOSAN ELTER: a magyar Karoli 46,2-3, a Szinodalis
// szamozasban ugyanez a **45:2-3** (a gorog/szlav hagyomany egy verssel eltol). Ez nem
// elgepeles -- aki javitani akarja, elobb nezze meg a kiadott szoveget.

window.PP_FORD_SZOTAR = window.PP_FORD_SZOTAR || {};
window.PP_FORD_SZOTAR.ru = {
  // ===== 2026-10-28 SOS sharing per room (TG 30631) =====
  "Vészhelyzet ebben a szobában": "Экстренная ситуация в этой комнате",
  "Szobánként döntöd el, mit kapnak meg az SOS-odból. Ha az SOS-t kikapcsolod, ebbe a szobába semmi nem megy; a hely és a vércsoport csak az SOS-üzenetben jelenik meg.": "Для каждой комнаты ты решаешь, что она получит из твоего SOS. Если выключить SOS, в эту комнату ничего не уйдёт; местоположение и группа крови появляются только в сообщении SOS.",
  "SOS-jelzésem ide is menjen": "Отправлять мой SOS и сюда",
  "Lássák a GPS-helyzetemet az SOS-ban": "Показывать моё GPS-местоположение в SOS",
  "Lássák a vércsoportomat az SOS-ban": "Показывать мою группу крови в SOS",
  "Később a szoba beállításaiban is átállíthatod.": "Позже это можно изменить в настройках комнаты.",
  "Az SOS egyik szobádba sem ment el: a szobák beállításában mindenhol ki van kapcsolva. A vészsíp szól.": "SOS не ушёл ни в одну из твоих комнат: в настройках всех комнат он выключен. Звучит аварийный свисток.",
  "Szobánként, a szoba beállításaiban szűkítheted: melyik szoba kapja meg az SOS-t, és látszik-e benne a helyed és a vércsoportod.": "В настройках каждой комнаты это можно ограничить: какая комната получает SOS и видны ли в нём твоё местоположение и группа крови.",
  "gombot, SOS üzenetet küld a helyzeteddel a szobáidba (ahová a szoba beállításában engedted), és megszólal a vészsíp.": ", он отправит SOS с вашим местоположением в ваши комнаты (в те, где это разрешено в настройках) и включит аварийный свисток.",
  "Esés után automatikus SOS: alapból ki van kapcsolva. Ha bekapcsolod, és a telefon nagy ütés után egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a Jól vagyok gombot, SOS üzenetet küld a helyzeteddel a szobáidba (ahová a szoba beállításában engedted), és megszólal a vészsíp.": "Автоматический SOS после падения: по умолчанию выключен. Если ты его включишь и телефон после сильного удара минуту не двигается, он громко ведёт обратный отсчёт. Если ты не нажмёшь кнопку «Я в порядке», он отправит SOS с твоим местоположением в твои комнаты (в те, где это разрешено в настройках) и включит аварийный свисток.",
  "Vészhelyzet: szobánként eldöntöd, hogy az SOS-od ide is menjen-e, és látszik-e benne a GPS-helyzeted és a vércsoportod. Alapból mindhárom be van kapcsolva.": "Экстренная ситуация: для каждой комнаты ты решаешь, уходит ли туда твой SOS и показывает ли он твоё GPS-местоположение и группу крови. По умолчанию все три включены.",
  // ===== 2026-10-28 route planning: sunset / dark timing (TG 30629) =====
  "Most": "Сейчас",
  "Napnyugta előtt érkezel, a tartalék:": "Придёшь до заката, запас:",
  "Napnyugta után érkezel, ennyivel:": "Придёшь после заката, на:",
  "Sötétedés előtt még odaérsz.": "До темноты ещё успеешь.",
  "Sötétedés után érkezel.": "Придёшь после наступления темноты.",
  "Napnyugta után indulsz.": "Выходишь после заката.",
  "Sötétedés után indulsz.": "Выходишь после наступления темноты.",
  "Napnyugtakor itt jársz, a kezdéstől:": "На закате ты будешь здесь, от старта:",
  "Sötétedéskor itt jársz, a kezdéstől:": "С наступлением темноты ты будешь здесь, от старта:",
  "Az út utolsó szakasza sötétben van:": "Последний участок маршрута в темноте:",
  "A tábort a sötétedés pontja előtt válaszd ki.": "Выбери место для лагеря до точки наступления темноты.",
  // ===== 2026-10-28 Barometer + Napkelte, napnyugta: own screens under Eszkozok (TG 30627) =====
  "Barométer": "Барометр",
  "Légnyomás, trend és viharjelzés": "Давление, тенденция и предупреждение о буре",
  "Napkelte, napnyugta": "Восход, закат",
  "Nap és hold: mennyi világosod van, holdfázis": "Солнце и луна: сколько у тебя светлого времени, фаза луны",
  "Nem kaptunk engedélyt az iránytűhöz.": "Мы не получили разрешения на компас.",
  "Ez a készülék nem ad iránytű-adatot, vagy nincs rá engedély.": "Это устройство не даёт данных компаса, или нет разрешения.",
  "A nap pályájához tudni kell, hol vagy: az Eszközök, Napkelte, napnyugta lapon nyomd meg a „Mérés a helyzetemre” gombot.": "Для пути солнца нужно знать, где ты: в разделе Инструменты, Восход, закат нажми «Рассчитать для моего места».",
  "Tájoló: irány és azimut, a visszaút is.": "Компас: направление и азимут, а также обратный путь.",
  "Eszközök: a kalkulátorok, a fémdetektor, a tükör, a vad- és rovarriasztó, a barométer és a napkelte-napnyugta egy helyen.": "Инструменты: калькуляторы, металлоискатель, зеркало, отпугиватель зверей и насекомых, барометр и восход-закат в одном месте.",
  // ===== 2026-10-27 titkosított teljes mentés: Token tárca + Gíra (kártya 96306244) =====
  "Ez a fájl nem PrepperPapa mentés.": "Этот файл не является резервной копией PrepperPapa.",
  "Nincs elég tárhely ezen a készüléken a visszatöltéshez. Semmi nem változott.": "На этом устройстве недостаточно места для восстановления. Ничего не изменено.",
  "A visszatöltés nem sikerült. Semmi nem változott.": "Восстановление не удалось. Ничего не изменено.",
  "Ezen a készüléken már vannak saját adataid (készlet, pontok, háztartás). A visszatöltés ezeket a mentésben levőkre cseréli. Előtte a készleted és a háztartásod biztonsági másolatba kerül, amit a „Visszaállítás a biztonsági másolatból” gomb visszahoz. Folytatod?": "На этом устройстве уже есть ваши собственные данные (запасы, точки, хозяйство). Восстановление заменит их данными из копии. Перед этим ваши запасы и хозяйство попадут в страховочную копию, которую возвращает кнопка «Восстановить из страховочной копии». Продолжить?",
  "Visszatöltöm": "Восстановить",
  "Hibás mentés-fájl.": "Неверный файл копии.",
  "A teljes mentés egy általad választott mentési kulccsal titkosítva készül. Visszatöltéskor a mentési kulcs kell.": "Полная резервная копия шифруется выбранным вами ключом копии. Для восстановления нужен ключ копии.",
  "A teljes mentés egy általad választott mentési kulccsal titkosítva készül, és benne van a Token tárca és a Gíra is (a tárca PIN-je mögött). Visszatöltéskor a mentési kulcs kell, utána a tárca a PIN-nel nyílik. Az irattárca nem kerül bele.": "Полная резервная копия шифруется выбранным вами ключом копии и содержит также токен-кошелёк и вашу Гиру (за PIN-кодом кошелька). Для восстановления нужен ключ копии, после этого кошелёк открывается PIN-кодом. Кошелёк документов в неё не входит.",
  "A mentés óta indított vagy kapott fizetéseid ebből a könyvből hiányoznak (a többiek könyvében megvannak), ezért az egyenleg eltérhet.": "Платежи, сделанные или полученные после создания копии, в этой книге отсутствуют (в книгах других они есть), поэтому баланс может отличаться.",
  "A mentésben levő Gíra sérült, ezért nem töltöttünk vissza semmit.": "Гира в копии повреждена, поэтому ничего не восстановлено.",
  "A mentési kulcs legyen legalább 8 karakter és 2 szó, vagy legalább 12 karakter.": "Ключ копии должен содержать не менее 8 символов и 2 слов или не менее 12 символов.",
  "A mentési kulcs ne a neved legyen.": "Ключом копии не может быть ваше имя.",
  "A mentési kulcs nem egyezik, a fájlt nem lehetett visszafejteni. Semmit nem írtunk felül.": "Ключ копии не подходит, файл не удалось расшифровать. Ничего не перезаписано.",
  "A mentési kulcsod: „{kod}”. Írd le magadnak most, és ellenőrizd, hogy pontosan így írtad le. Ne felejtsd el ezt a kulcsot, és a tárca PIN-jét se: visszatöltés után a Token tárca és a Gíra a PIN-nel nyílik.": "Ваш ключ копии: «{kod}». Запишите его сейчас и проверьте, что записали его именно так. Не забудьте этот ключ и PIN-код кошелька: после восстановления токен-кошелёк и Гира открываются PIN-кодом.",
  "A mostani Gírád maradt; a mentésben levőt nem vettük át.": "Ваша текущая Гира сохранена; Гира из копии не перенесена.",
  "A titkosított mentés nem készült el, nem töltöttünk le semmit.": "Зашифрованную копию создать не удалось, ничего не скачано.",
  "A Token tárca és a Gíra visszaállítása nem sikerült.": "Не удалось восстановить токен-кошелёк и Гиру.",
  "Add meg ennek a készüléknek a tárca PIN-jét.": "Введите PIN-код кошелька этого устройства.",
  "Adj meg egy mentési kulcsot: egy általad kitalált szót vagy rövid mondatot (legalább 8 karakter és 2 szó, vagy legalább 12 karakter). Ne a neved legyen. A kis- és nagybetű nem számít. Írd le magadnak: a mentés csak ezzel tölthető vissza.": "Введите ключ копии: придуманное вами слово или короткую фразу (не менее 8 символов и 2 слов или не менее 12 символов). Это не должно быть ваше имя. Регистр букв не важен. Запишите его: копию можно восстановить только с ним.",
  "Biztosan lecseréled? A mostani Gíra ({most}) kulcsa ezzel elvész ezen a készüléken; ha nincs róla mentésed, véglegesen.": "Точно заменить? Ключ текущей Гиры ({most}) на этом устройстве будет утрачен; если у вас нет его копии, навсегда.",
  "Ez egy titkosított mentés. Add meg a mentési kulcsot.": "Это зашифрованная копия. Введите ключ копии.",
  "Ezen a készüléken már van egy MÁSIK Gíra ({most}). A mentésben levő: {mentes}. Megtartod a mostanit, vagy lecseréled a mentésben levőre?": "На этом устройстве уже есть ДРУГАЯ Гира ({most}). Гира из копии: {mentes}. Оставить текущую или заменить её Гирой из копии?",
  "Ezen a készüléken már van tárca. A mentett Token tárca átvételéhez add meg azt a PIN-t, amellyel a mentett tárca nyílt.": "На этом устройстве уже есть кошелёк. Чтобы перенести сохранённый токен-кошелёк, введите PIN-код, которым открывался сохранённый кошелёк.",
  "Gíra visszaállítva: {az}, egyenleg {egy} gíra.": "Гира восстановлена: {az}, баланс {egy} гир.",
  "Igen, lecserélem": "Да, заменить",
  "Igen, nélkülük": "Да, без них",
  "Javítom": "Исправлю",
  "Lecserélem": "Заменить",
  "Megtartom a mostanit": "Оставить текущую",
  "Mentés megszakítva, nem töltöttünk le semmit.": "Копирование отменено, ничего не скачано.",
  "Titkosított mentés": "Зашифрованная копия",
  "Titkosított mentés visszatöltése": "Восстановление зашифрованной копии",
  "Token tárca visszaállítva: a mentéskor használt PIN-nel nyílik.": "Токен-кошелёк восстановлен: он открывается PIN-кодом, который был при создании копии.",
  "Token tárca: {n} bejegyzés hozzáadva a tárcádhoz.": "Токен-кошелёк: в ваш кошелёк добавлено записей: {n}.",
  "Visszatöltés megszakítva, semmit nem írtunk felül.": "Восстановление отменено, ничего не перезаписано.",
  "Visszatöltöd a többi adatot a Token tárca és a Gíra nélkül?": "Восстановить остальные данные без токен-кошелька и Гиры?",
  // ===== 2026-10-26 v43.386 (tester #84): water purification, ice-cold water + altitude bands =====
  "Buzgó forrás {perc} percig.": "Кипятить при сильном кипении {perc} мин.",
  "Buzgó forrás {perc} percig — kétezer méter felett vagy, ott hosszabb kell, mert alacsonyabb a forráspont.": "Кипятить при сильном кипении {perc} мин — вы выше двух тысяч метров, там нужно дольше, потому что температура кипения ниже.",
  "{liter} liter tiszta vízhez {csepp} csepp {hipo} százalékos hipó, ami körülbelül {ml} milliliter.": "На {liter} л чистой воды: {csepp} капель {hipo}-процентного гипохлорита, примерно {ml} мл.",
  "{liter} liter zavaros vízhez {csepp} csepp {hipo} százalékos hipó, ami körülbelül {ml} milliliter.": "На {liter} л мутной воды: {csepp} капель {hipo}-процентного гипохлорита, примерно {ml} мл.",
  "Keverd el, várj {perc} percet, és utána is enyhén klóros szagúnak kell lennie.": "Перемешайте, подождите {perc} минут; после этого вода должна слегка пахнуть хлором.",
  "Ha nem érzed a szagot, adj hozzá ugyanennyit, és várj még {perc} percet.": "Если запаха нет, добавьте столько же и подождите ещё {perc} минут.",
  "Zavaros, színes vagy jéghideg (pl. olvadt hó, jeges patak)": "Мутная, цветная или ледяная (например, талый снег, ледяной ручей)",
  "Tengerszint feletti magasság": "Высота над уровнем моря",
  "2000 m alatt": "Ниже 2000 м",
  "2000 m felett": "Выше 2000 м",
  // ===== 2026-10-25 v43.381 (card 43a80047, Boss 23:38): premium code from the purchase e-mail link =====
  "Túl sok hibás kódot írtál be. Biztonsági okból egy ideig nem próbálhatod újra.": "Вы ввели слишком много неверных кодов. В целях безопасности повторить попытку пока нельзя.",
  "Újra próbálhatod ekkor:": "Повторить можно в:",
  "A vásárlási levélben kapott kódod be van írva. Koppints a „Kód beváltása” gombra.": "Код из письма о покупке уже введён. Нажмите «Активировать код».",
  // ===== 2026-10-25 v43.380 (Thomas 24623): stale offline region =====
  "Új változat a szerveren": "Новая версия на сервере",
  // ===== 2026-10-25 v43.380 (card 6b287cfb, Boss 20:13): Solar panel setup tool =====
  "Napelem-beállítás": "Настройка солнечной панели",
  "Merre nézzen és mennyire dőljön a panel, évszakonként": "Куда направить панель и под каким углом, по сезонам",
  "Helyszín": "Местоположение",
  "Mérés a helyzetemre": "Рассчитать для моего места",
  "Kézi megadás": "Ввести вручную",
  "Dátum": "Дата",
  "Ma": "Сегодня",
  "Téli napforduló": "Зимнее солнцестояние",
  "Tavaszi napéjegyenlőség": "Весеннее равноденствие",
  "Nyári napforduló": "Летнее солнцестояние",
  "Őszi napéjegyenlőség": "Осеннее равноденствие",
  "A nap járása": "Путь солнца",
  "Ajánlott beállítás": "Рекомендуемая установка",
  "Panel igazítása a tájolóval": "Выставить панель по компасу",
  "Várható termelés ezen a napon": "Ожидаемая выработка в этот день",
  "Szélesség, pl. 47.50": "Широта, напр. 47.50",
  "Hosszúság, pl. 19.04": "Долгота, напр. 19.04",
  "pl. 400": "напр. 400",
  "A szélesség -90 és 90, a hosszúság -180 és 180 fok közötti szám.": "Широта — число от -90 до 90, долгота — от -180 до 180 градусов.",
  "Még nem tudom, hol vagy. Nyomd meg a „Mérés a helyzetemre” gombot, vagy add meg kézzel.": "Я пока не знаю, где ты. Нажми «Рассчитать для моего места» или введи вручную.",
  "kézzel megadva": "введено вручную",
  "Ezen a napon itt a nap nem kel fel.": "В этот день солнце здесь не восходит.",
  "Ezen a napon itt a nap nem nyugszik le.": "В этот день солнце здесь не заходит.",
  "Nappal hossza:": "Долгота дня:",
  "napsütés derült égnél, 10° fölött:": "солнце при ясном небе, выше 10°:",
  "A panel erre nézzen (valódi égtáj, nem mágneses).": "Панель должна смотреть сюда (истинное направление, не магнитное).",
  "Erre a napra": "На этот день",
  "Tél": "Зима",
  "Tavasz": "Весна",
  "Nyár": "Лето",
  "Ősz": "Осень",
  "Egész évre, fixen": "Круглый год, неподвижно",
  "A dőlésszög a vízszinteshez mért szög: 0° = fekvő panel, 90° = függőleges.": "Наклон отсчитывается от горизонтали: 0° = панель лежит, 90° = вертикально.",
  "Add meg a panel teljesítményét (a címkéjén W-ban), és kiszámolom, nagyjából mennyit termel ezen a napon.": "Введи мощность панели (в Вт, на этикетке), и я примерно посчитаю, сколько она выработает в этот день.",
  "A napra ajánlott dőléssel": "С наклоном, рекомендованным на день",
  "Az egész évre beállított dőléssel": "С наклоном на весь год",
  "Becslés, felhő nélkül: tiszta égbolttal, árnyék nélkül, 20% veszteséggel számolva. Felhős időben ennek csak a töredéke jön, borult égnél akár a tizede.": "Оценка, без облаков: ясное небо, без тени, 20% потерь. В облачную погоду лишь часть этого, при сплошной облачности до десятой доли.",
  "a választott nap": "выбранный день",
  "napfordulók, napéjegyenlőség": "солнцестояния, равноденствие",
  "Tartsd a telefont állva, a kamerával a panel felé: a kamera bekapcsol, és a nap pályája a képen látszik. A tájoló a panel irányára mutat.": "Держи телефон вертикально, камерой в сторону панели: камера включится, и путь солнца появится на изображении. Компас указывает направление панели.",
  "AMIT EZ TUD ÉS AMIT NEM. A nap helyzetét és a napkeltét pár perc pontossággal számolja, internet nélkül. A dőlésszög és a termelés tiszta égboltra szóló becslés: a felhőt, az árnyékot (fa, ház, domb) és a panel melegedését nem ismeri. A tájoló mágneses irányt mutat, ami Magyarországon kb. 5 fokkal tér el a valódi déltől; a panel termelésén ez alig látszik.": "ЧТО ЭТО УМЕЕТ И ЧЕГО НЕТ. Положение солнца и восход рассчитываются с точностью до нескольких минут, без интернета. Наклон и выработка — оценки для ясного неба: облака, тень (деревья, дома, холмы) и нагрев панели не учитываются. Компас показывает магнитное направление, которое может отличаться от истинного юга на несколько градусов; на выработке это почти не сказывается.",
  // ===== 2026-10-25 v43.379: short closed-message bubble =====
  "Zárt üzenet": "Закрытое сообщение",
  // ===== 2026-10-25 v43.378 (card 6b4458db, Boss 20:26): offline map page, one row per region =====
  "Tájegységek letöltése": "Скачать регионы",
  "Alaptérkép, turistautak, pontok": "Базовая карта, тропы, точки",
  "Hiányzó részek letöltése": "Скачать недостающие части",
  "hiányzik": "не хватает",
  // ===== 2026-10-25 v43.377 (card 6b4458db, Boss 18:55): Local room help, step by step =====
  "Mire jó: a Helyi szoba internet nélkül köti össze a közeledben lévő telefonokat, ha egy Wi-Fi-n vagytok (vagy Bluetooth-on). Például áramszünetben, vagy otthon a családdal, amikor nincs térerő.": "Для чего: Локальная комната соединяет телефоны рядом без интернета, когда вы в одной сети Wi-Fi (или по Bluetooth). Например, при отключении электричества или дома с семьёй, когда нет связи.",
  "Szoba nyitása: az egyik telefonon a + gombbal nyiss egy új helyi szobát, és adj neki nevet. Ez a telefon lesz a gazda; amíg a szoba kell, az appja maradjon nyitva.": "Создание комнаты: на одном телефоне создай новую локальную комнату кнопкой + и дай ей название. Этот телефон станет владельцем; пока комната нужна, приложение на нём должно быть открыто.",
  "Belépés a másik telefonról: kapcsolódj ugyanarra a Wi-Fi-re, nyisd meg a Helyi szobát, és koppints a listában megjelenő szobára. A gazda jóváhagyja a belépést; a szoba jelszava (kulcsa) titkosítja az üzeneteket, és minden telefonon ugyanannak kell lennie.": "Вход с другого телефона: подключись к той же Wi-Fi, открой Локальную комнату и нажми на комнату в списке. Владелец одобряет вход; пароль (ключ) комнаты шифрует сообщения и должен быть одинаковым на всех телефонах.",
  "A pontok: zöld = él a kapcsolat; piros = most nem éri el a gazdát. A listában a halvány szoba most nincs hatótávon.": "Точки: зелёная = соединение работает; красная = владелец сейчас недоступен. Бледная комната в списке сейчас вне зоны досягаемости.",
  "Ha „a gazda nem érhető el”: nézd meg, hogy ugyanazon a Wi-Fi-n vagytok-e, és a gazdánál nyitva van-e az app; kapcsold ki a mobiladatot; vendég Wi-Fi-n a router elszigetelheti a készülékeket. Három sikertelen próba után az app ezt ki is írja, és újra keresi a gazdát.": "Если «владелец недоступен»: проверь, что вы в одной Wi-Fi и приложение у владельца открыто; выключи мобильные данные; в гостевой Wi-Fi роутер может изолировать устройства. После трёх неудачных попыток приложение тоже это подскажет и снова будет искать владельца.",
  // ===== 2026-10-25 v43.352 (idea #63, card 6b4458db): native volume guard =====
  "A telefonos appban ezen a lapon a hangerő magától maximumra áll, és kilépéskor visszaáll a korábbira. A hang a telefon hangszóróján szól akkor is, ha fülhallgató vagy Bluetooth-eszköz csatlakozik.": "В приложении на телефоне на этом экране громкость сама выставляется на максимум, а при выходе возвращается к прежней. Звук идёт из динамика телефона, даже если подключены наушники или Bluetooth-устройство.",
  // ===== 2026-10-19 v43.313 (card 6b4458db) =====
  "(sérült üzenet — egy 2026. 10. 12. előtti szerverhiba levágta, nem állítható helyre)": "(повреждённое сообщение — обрезано ошибкой сервера до 12.10.2026, восстановить нельзя)",
  "Ezen a készüléken a böngésző nem támogatja a rezgést (iPhone-on a Safari nem tudja). A kapcsoló ezért nem aktív.": "Браузер этого устройства не поддерживает вибрацию (Safari на iPhone этого не умеет). Поэтому переключатель неактивен.",
  "Bejelentéseim": "Мои сообщения",
  "Újdonságok": "Новое",
  "Facebook-csoport": "Группа в Facebook",
  "Facebook-oldal": "Страница в Facebook",
  // ===== 2026-10-19: sugo-szovegek a kepernyokhoz igazitva (kartya eaaba276, Fonok 1a) =====
  "A gyűrű a jelen lévő típusok átlagát mutatja, a színe a leggyengébbet. A sávokon látod, melyik terület gyenge: egy alacsony érték az átlag mögött is ott lehet.": "Кольцо показывает среднее значение присутствующих типов, а его цвет показывает самый слабый. По полосам видно, какая область слабая: низкое значение может прятаться за средним.",
  "Nyelv: az app felületének nyelve. A tartalom (tudástár, Biblia) egyelőre nem változik tőle; a Biblia fordítását a Biblia fejlécében választod.": "Язык: язык интерфейса приложения. Содержимое (база знаний, Библия) от этого пока не меняется; перевод Библии выбирается в заголовке Библии.",
  "Fény-SOS képernyővel: a kijelző villogtatja a jelet. Ez minden telefonon megy, akkor is, ha a vaku nem indul.": "Световой SOS экраном: дисплей мигает сигналом. Это работает на любом телефоне, даже если вспышка не включается.",
  "Esés után automatikus SOS: alapból ki van kapcsolva. Ha bekapcsolod, és a telefon nagy ütés után egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a Jól vagyok gombot, SOS üzenetet küld a helyzeteddel minden szobádba, és megszólal a vészsíp.": "Автоматический SOS после падения: по умолчанию выключен. Если ты его включишь и телефон после сильного удара минуту не двигается, он громко ведёт обратный отсчёт. Если ты не нажмёшь кнопку «Я в порядке», он отправит SOS с твоим местоположением во все твои комнаты и включит аварийный свисток.",
  "Export: a lista fájlba, például a családnak. A teljes készlet törlése (Készlet ürítése) a Beállítások > Adatkezelés alatt van; előtte exportálj.": "Экспорт: список в файл, например для семьи. Удаление всех запасов (Очистить запасы) находится в Настройки > Данные; сначала экспортируй.",
  // ===== 2026-10-11 23:4x: teljes atnezes (bemutatkozas, visszajelzes, hianyzo feliratok) =====
  "Üdv Prepperek!": "Привет, препперы!",
  "PrepperPapa vagyok, egy készülődő ember, aki mindenhez érteni szeret. Gyerekkorom óta vonz minden, ami hálózattól és rendszertől független, és az az érzés, amikor arra számíthatsz, ami a fejedben van tudás, és ami nálad van eszköz.": "Я PrepperPapa, человек, который готовится и любит во всём разбираться. С детства меня привлекает всё, что не зависит от сетей и системы, и то чувство, когда можешь положиться на знания в голове и на инструменты в руках.",
  "A prepperekről sokan hideg, bezárkózó embereket képzelnek el. Én azt hiszem, hogy a felkészülést nem a félelemnek kell vezetnie, hanem az önfeláldozó szeretetnek.": "Многие представляют препперов холодными, замкнутыми людьми. Я верю, что подготовкой должен руководить не страх, а жертвенная любовь.",
  "Ezért álmodtam meg ezt az alkalmazást: hogy mindenkinek reménysége legyen a sötétségben, és a nehéz időkben valódi eszköz, valódi segítség legyen a kezében, akkor is, ha nincs áram és nincs térerő.": "Поэтому я задумал это приложение: чтобы у каждого была надежда во тьме, а в трудные времена настоящий инструмент, настоящая помощь в руках, даже без электричества и связи.",
  "Készülj, ne félj!": "Готовься, не бойся!",
  "Erőt reménységet!": "Силы и надежды!",
  "Hibát találtál, vagy ötleted van?": "Нашли ошибку или есть идея?",
  "Írd meg, és ha kell, csatolj képet. Minden visszajelzést elolvasunk.": "Напишите нам и при необходимости приложите снимок. Мы читаем каждое сообщение.",
  "Visszajelzés küldése": "Отправить отзыв",
  "a sajátod, pl. +36 30 123 4567": "ваш собственный, напр. +36 30 123 4567",
  "Küldetést kaptam: a tíz szűz példázatát, hogy fel kell készülni. Az eszesek éjfélkor nem tudtak a saját olajukból adni": "Я получил миссию: притчу о десяти девах, что нужно быть готовым. В полночь мудрые не могли дать своего масла",
  "Máté 25,9": "Матфея 25:9",
  ", ezért a tudást időben kell átadni.": ", поэтому знания нужно передавать вовремя.",
  "A csomagod felhasználó-korlátja betelt:": "Достигнут лимит пользователей вашего пакета:",
  "A csomagod termék-korlátja betelt:": "Достигнут лимит товаров вашего пакета:",
  "A felolvasás nem indult el: a telefonon nincs ehhez a nyelvhez felolvasó hang (Beállítások → Szövegfelolvasás).": "Чтение не началось: на телефоне нет голоса для этого языка (Настройки → Синтез речи).",
  "A kamerát nem sikerült elindítani. Adj rá engedélyt a telefon beállításaiban.": "Не удалось запустить камеру. Разрешите её в настройках телефона.",
  "A mentős beolvashatja.": "Медики могут его отсканировать.",
  "A próba-csomag beállítva.": "Пробный пакет установлен.",
  "Bővíts a Beállításokban, vagy törölj egy tagot.": "Расширьте в настройках или удалите участника.",
  "Bővíts a Beállításokban, vagy törölj egy tételt.": "Расширьте в настройках или удалите позицию.",
  "Felhasználók": "Пользователи",
  "Fizetek": "Плачу",
  "Gyorsabb": "Быстрее",
  "Hiányzik:": "Не хватает:",
  "Lassabb": "Медленнее",
  "Megnézem térképen": "Показать на карте",
  "Modulok": "Модули",
  "Nincs internet: a telefon hangja olvas": "Нет интернета: читает голос телефона",
  "Próba-mód kikapcsolva, a valódi feloldásod áll vissza.": "Пробный режим выключен, ваша настоящая разблокировка восстановлена.",
  "Szünet": "Пауза",
  "Termékek": "Товары",
  "Teszt-adatok betöltve: 3 fő, 1 háziállat, 5 helyszín (köztük autó és hétvégi ház),": "Тестовые данные загружены: 3 человека, 1 питомец, 5 мест (включая машину и дачу),",
  "Vissza az igéhez": "Назад к стиху",
  "Panel összecsukása": "Свернуть панель",
  "Panel kinyitása": "Развернуть панель",
  "Vészkártyák": "Экстренные карточки",
  "adat frissítve a már felvett teszt-tagoknál": "данные обновлены у уже добавленных тестовых участников",
  "egy sincs": "нет",
  "korlátlan": "без ограничений",
  "légvonalban": "по прямой",
  "légvonalban, szakaszonként összeadva": "по прямой, суммируя по участкам",
  "megálló": "остановка",
  "mérés az elmúlt 48 órából. A telefon légnyomás-szenzora automatikusan méri; kézzel is bevihetsz értéket.": "измерений за последние 48 часов. Датчик давления телефона измеряет автоматически; значения можно вводить и вручную.",
  "nincs ismert": "нет известных",
  "nincs megadva": "не указано",
  "válassz könyvet": "выберите книгу",
  "összesen": "всего",
  "A többiek a „Szobák a hálón\" listában magától látják a szobát. Ha valakinél mégsem jelenik meg, ezt a címet írja be a „Csatlakozás más szobájához\" gombbal.": "Остальные видят комнату автоматически в списке «Комнаты в сети». Если у кого-то она не появилась, пусть введёт этот адрес кнопкой «Подключиться к чужой комнате».",
  "Másik cím": "Другой адрес",
  "A szoba címe": "Адрес комнаты",
  "Vissza a saját szobámba": "Вернуться в свою комнату",
  "Fénykép": "Фото",
  "Jóváírva.": "Зачислено.",
  "küldött neked": "отправил вам",
  "Gíra küldése neki": "Отправить гиру",
  // ===== 2026-10-11 22:3x: gira-kozosseg a gazda dontese =====
  "A szoba gazdája Gíra-közösségnek jelölte: a telefonod magától részt vesz.": "Администратор комнаты отметил её как сообщество Gíra: ваш телефон участвует автоматически.",
  "Ezt a szoba gazdája kapcsolja be; még nem jelölte Gíra-közösségnek.": "Это включает администратор комнаты; пока не отмечено как сообщество Gíra.",
  "Bekapcsolva a szoba minden tagjának. Átküldöm a Gíra-könyvet…": "Включено для всех участников комнаты. Отправляю книгу Gíra…",
  "Kikapcsolva a szoba minden tagjának.": "Выключено для всех участников комнаты.",
  "A szoba gazdája kapcsolja be; ilyenkor minden tag telefonja magától átküldi ide a Gíra-könyvét, és innen fogadja a többiekét. A szoba minden tagja látja a gíra-mozgásokat.": "Включает администратор комнаты; тогда телефон каждого участника сам отправляет сюда свою книгу Gíra и получает книги остальных. Все участники видят движения гиры.",
  // ===== 2026-10-11 22:2x: LoRa a radio-kalkulatorban =====
  "LoRa (868 MHz) — engedély nélküli adatrádió": "LoRa (868 МГц) — безлицензионная радиосвязь для данных",
  "Engedély nélkül használható: alapból 25 mW, a 869,4-869,65 MHz-es alsávon 500 mW, korlátozott adásidővel. Nem beszéd, hanem rövid szöveges üzenet; cserébe kis teljesítménnyel is kilométereket visz, mert a zaj alatt is vesz. A telefon nem tud LoRát: egy LoRa-egység kell, amihez a telefon Bluetooth-on csatlakozik.": "Без лицензии: по умолчанию 25 мВт, в поддиапазоне 869,4-869,65 МГц 500 мВт с ограниченным временем передачи. Не голос, а короткие текстовые сообщения; зато малой мощностью покрывает километры, так как принимает ниже уровня шума. В телефоне нет LoRa: нужен модуль LoRa, к которому телефон подключается по Bluetooth.",
  // ===== 2026-10-11 21:4x: gira minusz-hatar =====
  "ennyit fizethetsz most": "можно заплатить сейчас",
  "Ez túllépné a mínusz-határodat.": "Это превысит ваш минусовой лимит.",
  "Most legfeljebb ennyit fizethetsz:": "Сейчас можно заплатить не больше:",
  "határ": "лимит",
  "Mínuszba mehetsz": "Можно уйти в минус до",
  "gíráig": "гиры",
  "most ennyit fizethetsz": "доступно сейчас",
  // ===== 2026-10-11 21:3x: gira-egyenleg az urlapon =====
  "Egyenleged": "Ваш баланс",
  "a gíra nem mehet mínuszba, ezért fizetni akkor tudsz, ha előbb kapsz valakitől.": "гира не может уйти в минус, поэтому платить можно, когда сначала кто-то заплатит вам.",
  "Ennyi gírád nincs. Egyenleged:": "У вас нет столько гиры. Ваш баланс:",
  "A gíra nem mehet mínuszba: előbb kapnod kell valakitől.": "Гира не может уйти в минус: сначала вам должны заплатить.",
  // ===== 2026-10-11 21:3x: legnyomas-kartya, mozgas-szures =====
  "Járműben vagy (a GPS szerint 15 km/h felett): a riasztás szünetel, mert ilyenkor a nyomás az emelkedőtől és a szellőzéstől is változik.": "Вы в транспорте (по GPS быстрее 15 км/ч): сигнал приостановлен, так как давление меняется ещё и от подъёмов и вентиляции.",
  "Magasság-korrekcióval: közben": "С поправкой на высоту: за это время",
  "volt a szintkülönbség, a mért nyers változás": "перепад высоты, измеренное изменение без поправки",
  "Szenzor, előzmény, tudnivalók": "Датчик, история, примечания",
  // ===== 2026-10-11 21:0x: szintarcsa, 24 oras napiv, allo tajolo, felolvaso-ertesites =====
  "Válassz színt a tárcsán": "Выберите цвет на круге",
  "Fényerő": "Яркость",
  "Kiválasztom": "Выбрать",
  "napkelte": "восход",
  "napnyugta": "закат",
  "éjközép": "полночь",
  "Nappal": "День",
  "Éjszaka": "Ночь",
  "Biblia felolvasás": "Чтение Библии",
  "Jó irány": "Верное направление",
  "Fordulj jobbra": "Поверните направо",
  "Fordulj balra": "Поверните налево",
  "Fordulj a kívánt irányba, és nyomd meg: Irány felvétele.": "Повернитесь в нужном направлении и нажмите: Записать направление.",
  "Állítsd fel a telefont: álló módban a hátsó kamera irányát mérjük, fektetve ez nem pontos.": "Держите телефон вертикально: в вертикальном режиме измеряется направление задней камеры, лёжа это неточно.",
  "Álló mód: a hátsó kamera iránya számít. A keret zöld, ha a felvett irányba nézel, és piros, ha nem.": "Вертикальный режим: важно направление задней камеры. Рамка зелёная, если вы смотрите в записанном направлении, и красная, если нет.",
  "Vízszintes": "Горизонтально",
  "Álló": "Вертикально",
  "Kamera a háttérben": "Камера на фоне",
  "A hátsó kamera képe a tájoló mögött, hogy lásd, merre mutat.": "Изображение задней камеры за компасом, чтобы видеть, куда он указывает.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Privát üzenet neki":
    "Личное сообщение",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "még nincs Gíra-azonosítója":
    "пока нет ID Гира",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Elküldve a szobán keresztül":
    "Отправлено через комнату",
  "Nála magától jóváíródik, és a nyugtája is magától visszajön.":
    "У получателя зачислится автоматически, и его квитанция тоже вернётся автоматически.",
  "A szobába most nem ment el (nincs kapcsolat vagy kulcs). Itt a QR, ezzel is átadhatod.":
    "Сейчас не удалось отправить в комнату (нет связи или ключа). Вот QR-код, им тоже можно передать.",
  "Gíra-fizetés":
    "Платёж Гира",
  "hamis aláírás, nem fogadom el":
    "поддельная подпись, не принято",
  "jóváírva nálad":
    "зачислено тебе",
  "Szobatársat választhatsz, ha egy Gíra-közösség szobában ők is bekapcsolták.":
    "Можно выбрать участника комнаты, если он тоже включил это в комнате сообщества Гира.",
  "Szobatárs kiválasztása…":
    "Выбери участника комнаты…",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Helyek":
    "Места",
  "a határok közelítők":
    "границы приблизительны",
  "A területhatárok közelítő rekonstrukciók, nem mért vonalak.":
    "Границы территорий — приблизительные реконструкции, а не измеренные линии.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Gíra-közösség":
    "Сообщество Гира",
  "A telefon ebbe a szobába magától átküldi a Gíra-könyvedet, és innen fogadja a többiekét. A szoba minden tagja látja a gíra-mozgásokat.":
    "Телефон автоматически отправляет твою книгу Гира в эту комнату и получает здесь книги других. Все участники комнаты видят движения Гира.",
  "Gíra-közösségnek jelölt szobák":
    "Комнаты, отмеченные как сообщество Гира",
  "A szoba beállításaiban kapcsolhatod be („Gíra-közösség”); oda a telefon magától átküldi a könyvet.":
    "Включи в настройках комнаты («Сообщество Гира»); телефон будет автоматически отправлять туда книгу.",
  "Utoljára egyeztetve":
    "Последняя синхронизация",
  "Egyeztetés most":
    "Синхронизировать сейчас",
  "szoba":
    "комн.",
  "Nincs elérhető Gíra-közösség szoba. Kapcsold be egy szoba beállításaiban.":
    "Нет доступной комнаты сообщества Гира. Включи её в настройках комнаты.",
  "Bekapcsolva. Átküldöm a Gíra-könyvet…":
    "Включено. Отправляю книгу Гира…",
  "Kikapcsolva. Ide többé nem küldöm a könyvet.":
    "Выключено. Книга больше не будет сюда отправляться.",
  "Bekapcsolva, a könyv átment.":
    "Включено, книга отправлена.",
  "Bekapcsolva. A könyv akkor megy át, amikor a szoba elérhető és van aláírt tételed.":
    "Включено. Книга уйдёт, когда комната будет доступна и у тебя будут подписанные записи.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Titkos kódok":
    "Секретные коды",
  "Kérek":
    "Запросить",
  "Beolvasás":
    "Сканировать",
  "Azonosítóm":
    "Мой ID",
  "Nincs kamera? Beillesztés szövegből":
    "Нет камеры? Вставить из текста",
  "Mozgások":
    "Движения",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Apokrif könyvek":
    "Апокрифические книги",
  "Énok ↓":
    "Енох ↓",
  "Énok könyve letöltése":
    "Скачать Книгу Еноха",
  "Nem sikerült, próbáld újra":
    "Не удалось, попробуй ещё раз",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "SÜRGŐS ·":
    "СРОЧНО ·",
  "3 nappal":
    "за 3 дня",
  "Megnézem":
    "Посмотреть",
  "(te)":
    "(ты)",
  "ENGEDÉLYKÖTELES, mint a 2 méter. Beépítésben, épületek között jobb, mint a 2 méter; nyílt terepen rosszabb.":
    "ТРЕБУЕТСЯ ЛИЦЕНЗИЯ, как и для 2 м. В застройке, между зданиями работает лучше, чем 2 м; на открытой местности хуже.",
  "Írd be az e-mail címed. Küldünk rá egy 6 jegyű kódot; ha beírod, bent vagy. Jelszó nem kell, a telefon megjegyzi a belépést.":
    "Введи свой e-mail. Мы отправим на него 6-значный код; введёшь его, и ты внутри. Пароль не нужен, телефон запомнит вход.",
  "Add meg az e-mail címed és az ÚJ jelszót kétszer. Küldünk egy kódot e-mailben; ha beírod, az új jelszó lép életbe.":
    "Введи e-mail и НОВЫЙ пароль дважды. Мы отправим код по почте; когда введёшь его, новый пароль вступит в силу.",
  "Bekapcsolva, de a bezárt appos értesítés regisztrálása most nem sikerült; amíg az app fut, jelez.":
    "Включено, но зарегистрировать уведомления для закрытого приложения сейчас не удалось; пока приложение работает, оно будет сообщать.",
  "Alul írod az üzenetet; a papírrepülő gomb küldi el a szoba minden tagjának.":
    "Сообщение пишешь внизу; кнопка с бумажным самолётиком отправляет его всем участникам комнаты.",
  "Az értesítés le van tiltva. A telefon Beállítások > Alkalmazások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Уведомления заблокированы. Разрешить их снова можно в Настройках телефона > Приложения > PrepperPapa > Уведомления.",
  "Az értesítés le van tiltva. A telefon Beállítások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Уведомления заблокированы. Разрешить их снова можно в Настройках телефона > PrepperPapa > Уведомления.",
  "Letiltva. A telefon Beállítások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Заблокировано. Разрешить снова можно в Настройках телефона > PrepperPapa > Уведомления.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Kép csatolása":
    "Прикрепить изображение",
  "Új helyi szoba":
    "Новая локальная комната",
  "Nincs internetkapcsolat.":
    "Нет подключения к интернету.",
  "Visszajelzés":
    "Обратная связь",
  "Saját vészkártya adatai":
    "Данные моей экстренной карты",
  "Nem ez volt.":
    "Это было не то.",
  "Eredmény":
    "Результат",
  "E-mail cím":
    "Адрес e-mail",
  "helyi háló, internet nélkül":
    "локальная сеть, без интернета",
  "Forgatás balra":
    "Повернуть влево",
  "Forgatás jobbra":
    "Повернуть вправо",
  "Saját telefonszám":
    "Мой номер телефона",
  "Térképről":
    "С карты",
  "Koppints a másoláshoz":
    "Нажми, чтобы скопировать",
  "Belépés e-mail címmel":
    "Вход по e-mail",
  "A szoba kódja, koppints a másoláshoz":
    "Код комнаты, нажми, чтобы скопировать",
  "A jel nem vált pont és vonás között. Ez nem tiszta Morze — állíts a vételen, és próbáld újra.":
    "Сигнал не переключается между точкой и тире. Это не чистая морзянка — настрой приём и попробуй снова.",
  "Ez nagyjából":
    "Это примерно",
  "18650 (a gyártó saját cellája kb. 3400 mAh)":
    "18650 (собственный элемент производителя ок. 3400 mAh)",
  "kWh hőigénnyel, összesen":
    "кВт·ч потребности в тепле, всего",
  "Állj":
    "Стоп",
  "Kód küldése e-mailben":
    "Отправить код по e-mail",
  "Add meg az e-mail címed.":
    "Введи свой адрес e-mail.",
  "Ez nem tűnik e-mail címnek.":
    "Это не похоже на адрес e-mail.",
  "Nem sikerült, próbáld újra.":
    "Не получилось, попробуй снова.",
  "nincs bejelentkezve":
    "вход не выполнен",
  "Kikapcsolva ezen az eszközön.":
    "Отключено на этом устройстве.",
  "Kicsinyítem...":
    "Уменьшаю...",
  "Kép törölve.":
    "Изображение удалено.",
  "Ezt a képet nem tudom megnyitni.":
    "Не могу открыть это изображение.",
  "Frissítés keresése":
    "Проверить обновления",
  "Normál":
    "Обычный",
  "Ki vagyok?":
    "Кто я?",
  "2018 óta készítek videókat PrepperPapa néven a felkészülésről. Hiszem, hogy a keresztény értékek és a jó gyakorlati eszközök együtt segítenek abban, hogy könnyebben vegyük a mindennapok kihívásait, ezért a célom az, hogy fényt hozzak az életedbe, lelkiekben és a szó szoros értelmében is.":
    "С 2018 года я снимаю видео о подготовке под именем PrepperPapa. Я верю, что христианские ценности и хорошие практичные инструменты вместе помогают легче справляться с повседневными трудностями, поэтому моя цель — принести свет в твою жизнь, и в духовном, и в самом прямом смысле.",
  "Lámpákat, késeket, táskákat és energiaforrásokat tesztelek valós használatban, és ha valami nem vált be, azt is elmondom. Nem világvége-hangulatot árulok, hanem azt a néhány dolgot mutatom meg, ami egy áramszünetben, egy viharban vagy egy túrán tényleg számít.":
    "Я тестирую фонари, ножи, сумки и источники энергии в реальном использовании, и если что-то не оправдало себя, я тоже об этом говорю. Я не продаю настроение конца света, а показываю те немногие вещи, которые действительно важны при отключении электричества, в бурю или в походе.",
  "Felkészülés józan ésszel, magyar valóságra.":
    "Подготовка со здравым смыслом, для венгерской реальности.",
  "Elérhetőségek":
    "Контакты",
  "Prepper Vészkijárat csoport":
    "Группа «Prepper Vészkijárat»",
  "Gyülekező fórum":
    "Форум «Gyülekező»",
  "Melyik betű?":
    "Какая буква?",
  "Mi hiányzik?":
    "Чего не хватает?",
  "Az adat a Háztartásból jön, személyenként: vércsoport, allergia, gyógyszer, betegség, a saját telefonszám és a vészhelyzeti kontakt (név és telefon). Akinél még nincs kontakt megadva, ott a saját kártyád kontaktját használjuk.":
    "Данные берутся из раздела «Домохозяйство», по каждому человеку: группа крови, аллергия, лекарства, болезни, собственный номер телефона и экстренный контакт (имя и телефон). Если у кого-то контакт ещё не указан, используется контакт из твоей карты.",
  "Vészhelyzeti kontakt – ki?":
    "Экстренный контакт – кто?",
  "anya, apa, szomszéd…":
    "мама, папа, сосед…",
  "Vészhelyzeti kontakt – telefon":
    "Экстренный контакт – телефон",
  "A jegyzet neve":
    "Название заметки",
  "Értesítések":
    "Уведомления",
  "Lejáró élelmiszer és készlet":
    "Истекающие продукты и запасы",
  "Mennyivel előre szóljon:":
    "За сколько предупреждать:",
  "1 héttel":
    "За 1 неделю",
  "2 héttel":
    "За 2 недели",
  "1 hónappal":
    "За 1 месяц",
  "Próbaértesítés":
    "Тестовое уведомление",
  "Rezgő visszajelzés":
    "Вибрация",
  "Rövid rezgés a gombok megnyomásakor":
    "Короткая вибрация при нажатии кнопок",
  "A készülék rövid koppanással jelez minden gombnyomást.":
    "Устройство отвечает коротким толчком на каждое нажатие кнопки.",
  "Készlet ürítése":
    "Очистить запасы",
  "Fejlesztői próba-mód":
    "Тестовый режим разработчика",
  "Teszt funkció: beállíthatsz egy fizetős csomagot, és az app úgy viselkedik, mintha azt vásárolták volna meg. Csak ezen a készüléken, csak a felületen. A valódi feloldásaid megmaradnak, kikapcsolva visszaáll minden.":
    "Тестовая функция: можно выбрать платный пакет, и приложение будет вести себя так, будто его купили. Только на этом устройстве, только в интерфейсе. Твои настоящие разблокировки сохранятся, при выключении всё вернётся.",
  "Próba-mód bekapcsolása":
    "Включить тестовый режим",
  "Felhasználó-korlát":
    "Лимит пользователей",
  "Termék-korlát":
    "Лимит товаров",
  "A 0 korlátlant jelent.":
    "0 означает без ограничений.",
  "Beállítás":
    "Применить",
  "Próba-mód ki":
    "Выключить тестовый режим",
  "Vészhelyzeti kontakt neve":
    "Имя экстренного контакта",
  "pl. anya, apa, szomszéd":
    "напр. мама, папа, сосед",
  "Vészhelyzeti kontakt telefonszáma":
    "Телефон экстренного контакта",
  "Koordináta térképről":
    "Координаты с карты",
  "· vagy egy bemásolt Google Térkép-link. Ha nem tudom értelmezni, szólok — üresen nem mentem el. Vagy nyomd meg a":
    "· или вставленная ссылка Google Карт. Если не смогу разобрать, скажу — пустым не сохраню. Или нажми кнопку",
  "gombot, és húzd a térképet a célkereszt alá.":
    "и перемести карту под перекрестие.",
  "Koordináta a térképről":
    "Координаты с карты",
  "Ezt választom":
    "Выбрать это",
  "MESH-hálózat: szöveg a közeledben lévőknek, internet nélkül":
    "MESH-сеть: текст для тех, кто рядом, без интернета",
  "Internet és térerő nélkül: közös Wi-Fi-n, hotspoton vagy Bluetooth-on. Itt látod a saját szobáidat és a közelben hallottakat.":
    "Без интернета и сотовой связи: через общий Wi-Fi, точку доступа или Bluetooth. Здесь видны твои комнаты и то, что слышно поблизости.",
  "Csatlakozás címmel":
    "Подключиться по адресу",
  "Ez látszik a szobák listáján, ezen ismerik fel. A telefonod a képet magától lekicsinyíti.":
    "Это видно в списке комнат, по этому её узнают. Телефон сам уменьшит изображение.",
  "Fiók":
    "Аккаунт",
  "Jelszó megváltoztatása":
    "Изменить пароль",
  "Kép a szobához (nem kötelező)":
    "Изображение для комнаты (необязательно)",
  "Mérés fut… tartsd a jelen,":
    "Идёт измерение… держи сигнал,",
  "másodperc.":
    "секунд.",
  "Kevés jel érkezett. Indítsd újra, és nézd meg, hogy a vétel egyáltalán lát-e jelet.":
    "Пришло мало сигнала. Запусти снова и проверь, видит ли приём вообще сигнал.",
  "mért arány":
    "измеренное соотношение",
  "Mért sebesség":
    "Измеренная скорость",
  "Beállítom":
    "Установить",
  "A vétel sebessége beállítva":
    "Скорость приёма установлена",
  "Figyelj: lekopogom a betűt. Előbb a sor, aztán az oszlop.":
    "Слушай: я простучу букву. Сначала строка, потом столбец.",
  "Kopogd le ezt a betűt":
    "Простучи эту букву",
  "Írd be, melyik betűt hallottad.":
    "Введи, какую букву ты услышал.",
  "Írd le, mit hallottál, aztán nyomd meg az Ellenőrzést.":
    "Запиши, что ты услышал, потом нажми «Проверить».",
  "Saját telefon:":
    "Мой телефон:",
  "Ez a cikk zárt: a bővített tudástár nincs feloldva ezen a készüléken.":
    "Эта статья закрыта: расширенная база знаний не разблокирована на этом устройстве.",
  "Előbb írd be a szöveget a mezőbe, aztán koppints a lapra.":
    "Сначала введи текст в поле, потом нажми на лист.",
  "T Szöveg":
    "T Текст",
  "Eldobod a rajzot?":
    "Удалить рисунок?",
  "Új lapot kezdesz? A mostani rajz elvész.":
    "Начать новый лист? Текущий рисунок пропадёт.",
  "Adj nevet a jegyzetnek.":
    "Дай название заметке.",
  "Wh tárolt energia":
    "Вт·ч накопленной энергии",
  "saját megadás":
    "своё значение",
  "A megadott wattórából 10 százalékot levonunk átalakítási veszteségre.":
    "Из указанных ватт-часов вычитаем 10 процентов на потери преобразования.",
  "A savas akkut csak félig szabad lemeríteni, különben tönkremegy, és az átalakító is elvisz 15 százalékot. Ezért a névlegesnek nagyjából 42 százalékával számolunk.":
    "Кислотный аккумулятор можно разряжать только наполовину, иначе он испортится, и инвертор тоже забирает 15 процентов. Поэтому считаем примерно 42 процента от номинала.",
  "A LiFePO4-et 80 százalékig le lehet meríteni (a savasat csak felére), az átalakító 10 százalékot visz.":
    "LiFePO4 можно разряжать до 80 процентов (кислотный — только наполовину), инвертор забирает 10 процентов.",
  "A tárolt energiából kb. 10 százalékot elvisz az átalakítás, ezért nem a teljes wattóra használható fel.":
    "Около 10 процентов накопленной энергии уходит на преобразование, поэтому используется не вся ёмкость в ватт-часах.",
  "saját eszköz":
    "своё устройство",
  "Tölts ki legalább egy sort: hány darab, hány watt, hány óra naponta.":
    "Заполни хотя бы одну строку: сколько штук, сколько ватт, сколько часов в день.",
  "Nem fogy el":
    "Не закончится",
  "Ez nem fér el egyszerre. A felsorolt fogyasztók együtt":
    "Это не потянуть одновременно. Перечисленные потребители вместе",
  "wattot kérnek, a gép":
    "ватт требуют, а устройство",
  "Nem attól múlik, hogy mekkora a wattórája — ennyit egyszerre nem bír.":
    "Дело не в ватт-часах — столько сразу оно не выдержит.",
  "Vagy nagyobb teljesítményű gép kell, vagy nem egyszerre kell működtetni őket.":
    "Нужно либо более мощное устройство, либо не включать их одновременно.",
  "Az indulási áram kiviheti. A folyamatos fogyasztás belefér,":
    "Пусковой ток может его выбить. Постоянное потребление укладывается,",
  "de a motoros készülék induláskor kb.":
    "но моторный прибор при запуске примерно",
  "wattot húz pár másodpercig,":
    "ватт тянет несколько секунд,",
  "a gép":
    "устройство",
  "wattos. Ilyenkor a gép lekapcsol, pedig „papíron belefért volna\".":
    "ватт. В таком случае устройство отключится, хотя «на бумаге всё укладывалось\".",
  "Wh valóban felhasználható energia kell":
    "Вт·ч реально используемой энергии нужно",
  "(névlegesen kb.":
    "(номинально около",
  "Wh, a veszteség miatt).":
    "Вт·ч, из-за потерь).",
  "A választott gép ezt tudja.":
    "Выбранное устройство это потянет.",
  "A választott gép ehhez kevés.":
    "Выбранного устройства для этого мало.",
  "Ezek elegendők lennének erre a listára:":
    "Для этого списка хватило бы:",
  "A napelem naponta":
    "Солнечная панель в день даёт на",
  "wattórával többet ad, mint amennyit elhasználsz. Ez így önfenntartó — de csak amíg süt: két borús nap":
    "ватт-часов больше, чем ты расходуешь. Так система самодостаточна — но только пока светит солнце: два пасмурных дня",
  "wattórát vinne el a tartalékból.":
    "ватт-часов забрали бы из резерва.",
  "ezzel a listával.":
    "с этим списком.",
  "Napi fogyasztás:":
    "Дневное потребление:",
  "| csúcsterhelés:":
    "| пиковая нагрузка:",
  "(a gép":
    "(устройство",
  "Wh névlegesből":
    "Вт·ч из номинальных",
  "Wh a valóban felhasználható.":
    "Вт·ч реально используемых.",
  "A napelem:":
    "Солнечная панель:",
  "napfényórának felel meg, tehát napi kb.":
    "соответствует солнечным часам, то есть в день примерно",
  "Wh jön be. A névleges teljesítmény 70 százalékával számolunk:":
    "Вт·ч поступает. Считаем 70 процентов от номинальной мощности:",
  "az állásszög, a hő és a töltésvezérlő mind levesz belőle.":
    "угол наклона, нагрев и контроллер заряда — всё это отнимает часть.",
  "teletöltése ilyen időben":
    "полная зарядка при такой погоде",
  "Saját / kézi megadás (bármilyen lámpa)":
    "Своё / ручное значение (любой фонарь)",
  "NEXTORCH eStar (fejlámpa, max. 1300 lm)":
    "NEXTORCH eStar (налобный фонарь, макс. 1300 lm)",
  "2× 1200 mAh (2400 mAh összesen)":
    "2× 1200 mAh (всего 2400 mAh)",
  "NEXTORCH myStar V2.0 (fejlámpa, max. 760 lm)":
    "NEXTORCH myStar V2.0 (налобный фонарь, макс. 760 lm)",
  "NEXTORCH iStar (fejlámpa, max. 450 lm)":
    "NEXTORCH iStar (налобный фонарь, макс. 450 lm)",
  "Piros villogó":
    "Красный мигающий",
  "NEXTORCH MAX STAR (fejlámpa, max. 1200 lm)":
    "NEXTORCH MAX STAR (налобный фонарь, макс. 1200 lm)",
  "NEXTORCH oStar (sisak-/fejlámpa, max. 500 lm)":
    "NEXTORCH oStar (фонарь на каску / налобный, макс. 500 lm)",
  "Decathlon Quechua HL50 (fejlámpa, 50 lm)":
    "Decathlon Quechua HL50 (налобный фонарь, 50 lm)",
  "Decathlon Ontrail 900 (fejlámpa terepfutáshoz)":
    "Decathlon Ontrail 900 (налобный фонарь для трейлраннинга)",
  "Boost, 900→350 lm (túlmelegedés ellen csökken)":
    "Boost, 900→350 lm (снижается против перегрева)",
  "Erős, 300 lm, állandó fényerő":
    "Сильный, 300 lm, постоянная яркость",
  "Decathlon Caperlan Moonlight 500 (horgász fejlámpa)":
    "Decathlon Caperlan Moonlight 500 (налобный фонарь для рыбалки)",
  "Horgászat, 80 lm":
    "Рыбалка, 80 lm",
  "Optimál, 200 lm":
    "Оптимальный, 200 lm",
  "UV mód":
    "Режим UV",
  "Decathlon Forclaz ONNight 300 (fejlámpa túrázáshoz)":
    "Decathlon Forclaz ONNight 300 (налобный фонарь для походов)",
  "Környezeti fény":
    "Окружающий свет",
  "Erős, 130 lm":
    "Сильный, 130 lm",
  "Saját megadás (mA)":
    "Своё значение (mA)",
  "Kis 5 mm-es LED (jelzőfény-szerű, gyenge)":
    "Маленький 5-мм LED (как индикатор, слабый)",
  "~1 W teljesítmény-LED (pl. Cree XP-E)":
    "~1 W мощный LED (напр. Cree XP-E)",
  "~3 W teljesítmény-LED (pl. Cree XP-G, Osram)":
    "~3 W мощный LED (напр. Cree XP-G, Osram)",
  "~5 W teljesítmény-LED (erős fejlámpa/zseblámpa)":
    "~5 W мощный LED (сильный налобный/ручной фонарь)",
  "COB LED-sáv (kempinglámpa)":
    "COB LED-лента (кемпинговый фонарь)",
  "Saját megadás (mAh)":
    "Своё значение (mAh)",
  "AA alkáli elem (~2500 mAh)":
    "Щелочная батарейка AA (~2500 mAh)",
  "AA NiMH tölthető akku (~2000 mAh)":
    "Аккумулятор AA NiMH (~2000 mAh)",
  "AAA alkáli elem (~1000 mAh)":
    "Щелочная батарейка AAA (~1000 mAh)",
  "— a gyártó szerint":
    "— по данным производителя",
  "— a gyártó saját, mért adata":
    "— собственные измеренные данные производителя",
  "Add meg az akku kapacitását és a LED áramfelvételét is.":
    "Укажи и ёмкость аккумулятора, и ток потребления LED.",
  "mAh névleges kapacitásból":
    "mAh из номинальной ёмкости",
  "mAh a valóban felhasználható (a merítési és driver-veszteség miatt 15 százalékot levonva),":
    "mAh реально используемых (за вычетом 15 процентов на разряд и потери драйвера),",
  "mA folyamatos áramfelvétel mellett.":
    "mA при постоянном потреблении тока.",
  "Rejtőzködés, fekvés, olvasás. Ennyivel nem hízol és nem is fogysz gyorsan, de a fejed tiszta marad.":
    "Укрытие, лёжа, чтение. С таким количеством не потолстеешь и не похудеешь быстро, но голова останется ясной.",
  "Járkálás, ház körüli teendők. Ez a nemzetközi vészhelyzeti tervezés alapszáma is.":
    "Ходьба, дела по дому. Это и базовое число международного планирования на случай ЧС.",
  "Favágás, sáncolás, teherrel gyaloglás, hideg. Ez a szám gyorsan elviszi a készletet -- éppen ezért érdemes előre számolni vele.":
    "Рубка дров, рытьё окопов, ходьба с грузом, холод. Это число быстро съедает запасы -- именно поэтому стоит считать с ним заранее.",
  "kcal fejenként naponta.":
    "ккал на человека в день.",
  "saját tétel":
    "свой продукт",
  "egység":
    "единица",
  "Engedély nélküli, 4 watt AM/FM (SSB-n 12). Nagy antennát kíván, de a hosszú hullám jobban hajlik a domb mögé, mint bármelyik kézirádió.":
    "Без лицензии, 4 ватта AM/FM (на SSB 12). Требует большой антенны, но длинная волна лучше огибает холм, чем любая портативная рация.",
  "ENGEDÉLYKÖTELES: vizsga és hívójel kell hozzá. Vészhelyzetben az életveszély elhárítására a törvény enged kivételt, de arra épülő tervet ne csinálj -- a vizsga előre megszerezhető.":
    "ТРЕБУЕТ ЛИЦЕНЗИИ: нужны экзамен и позывной. В чрезвычайной ситуации закон допускает исключение для устранения угрозы жизни, но не строй на этом план -- экзамен можно сдать заранее.",
  "ENGEDÉLYKÖTELES. Itt NEM a rálátás dönt: nappal 100-400 km-re, éjjel akár több ezerre visz az ionoszféráról visszaverődve. Ezt a kalkulátor nem modellezi -- lásd a figyelmeztetést az eredménynél.":
    "ТРЕБУЕТ ЛИЦЕНЗИИ. Здесь решает НЕ прямая видимость: днём на 100-400 км, ночью даже на тысячи, отражаясь от ионосферы. Калькулятор это не моделирует -- см. предупреждение в результате.",
  "ENGEDÉLYKÖTELES. Éjszakai sáv, a környék (50-300 km) megbízható lefedésére a legjobb -- ez a klasszikus \"megyényi\" összeköttetés.":
    "ТРЕБУЕТ ЛИЦЕНЗИИ. Ночной диапазон, лучший для надёжного покрытия окрестностей (50-300 км) -- это классическая связь \"на область\".",
  "Mező, tópart, autópálya. Itt a rálátás a korlát, nem a terep.":
    "Поле, берег озера, автотрасса. Здесь ограничивает прямая видимость, а не рельеф.",
  "A domb mögé a jel behajlik, de gyengülve. Egy dombtetőre felsétálni többet ér, mint tízszeres teljesítmény.":
    "За холм сигнал огибает, но ослабевая. Подняться на вершину холма даёт больше, чем десятикратная мощность.",
  "A lombozat a rövid hullámot nyeli el jobban, ezért itt a 70 centi a leggyengébb.":
    "Листва сильнее поглощает короткую волну, поэтому здесь 70 сантиметров — самый слабый.",
  "Itt fordul meg a sorrend: a 70 centi jobban jut át épületek között, a CB-nek meg antennája sincs hova.":
    "Здесь порядок меняется: 70 сантиметров лучше проходит между зданиями, а для CB и антенну поставить некуда.",
  "Völgyben ülve a rálátás nulla. Itt a megoldás nem a watt, hanem az átjátszó vagy a gerincre feljutás.":
    "В долине прямая видимость нулевая. Решение здесь не ватты, а ретранслятор или подъём на гребень.",
  "talajhullám":
    "земная волна",
  "terep és teljesítmény":
    "рельеф и мощность",
  "rálátás (a Föld görbülete)":
    "прямая видимость (кривизна Земли)",
  "Adj meg legalább egy embert.":
    "Укажи хотя бы одного человека.",
  "Tölts ki legalább egy tételt (mennyiség és kcal), vagy add meg az összeset egyben.":
    "Заполни хотя бы одну позицию (количество и ккал) или укажи общее значение.",
  "kcal hiányzik a":
    "ккал не хватает у",
  "húskonzerv .":
    "мясные консервы .",
  "Ennyi ideig elég a készlet":
    "На столько хватит запасов",
  "felnőttnek":
    "взрослых",
  "Napi igény:":
    "Дневная потребность:",
  "készlet:":
    "запасы:",
  "kcal kell.":
    "ккал нужно.",
  "Ez megvan.":
    "Это есть.",
  "Ehhez a készlet kevés.":
    "Для этого запасов мало.",
  "A gyerekekkel a felnőtt adag 60 százalékával számoltunk — ez átlag,":
    "Для детей мы считали 60 процентов взрослой порции — это среднее,",
  "egy tizenkét éves többet eszik egy hároméves(nél). A kalória nem minden:":
    "двенадцатилетний ест больше, чем трёхлетний. Калории — это не всё:",
  "fehérje, só és zsír nélkül a puszta kalória pár hét alatt legyengít, és a":
    "без белка, соли и жира одни калории за несколько недель ослабят, а",
  "C-vitamin hiánya hetek alatt jelentkezik. Ez a szám a KIHÚZÁST méri, nem az egészséget.":
    "нехватка витамина C проявится через недели. Это число измеряет ВЫЖИВАНИЕ, а не здоровье.",
  "A víz nincs ebben a számban, és hamarabb fogy el.":
    "Вода в это число не входит, и она закончится раньше.",
  "Élelem nélkül hetekig el lehet lenni, víz nélkül napokig. Ha a készletet tervezed,":
    "Без еды можно продержаться неделями, без воды — днями. Если планируешь запасы,",
  "a vízzel kezdd — arra külön kalkulátor van.":
    "начни с воды — для неё есть отдельный калькулятор.",
  "Ez a teljesítmény PMR446-on nem legális. A sávon":
    "Такая мощность на PMR446 незаконна. В диапазоне",
  "maximum 0,5 watt engedélyezett, gyári antennával. A számot kiszámoltuk, de egy":
    "разрешено максимум 0,5 ватта с заводской антенной. Число мы посчитали, но с",
  "erősebb adóval a saját frekvenciádon te zavarod meg azokat, akikkel beszélni akarsz.":
    "более мощным передатчиком на своей частоте ты мешаешь тем, с кем хочешь говорить.",
  "Ez a sáv engedélyköteles.":
    "Этот диапазон требует лицензии.",
  "használatához":
    "Для его использования",
  "vizsga és hívójel kell. A vizsga előre megszerezhető — és pont ez a lényeg:":
    "нужны экзамен и позывной. Экзамен можно сдать заранее — и в этом вся суть:",
  "egy vészhelyzetben már késő elkezdeni.":
    "в чрезвычайной ситуации начинать уже поздно.",
  "kilométerre ezen a sávon a teljesítmény":
    "км на этом диапазоне мощности",
  "nem elég — bármennyi. A rálátásod":
    "не хватит — сколько ни добавляй. Твоя прямая видимость",
  "kilométer, és a Föld görbülete":
    "км, и за кривизну Земли",
  "mögé a VHF/UHF jel nem hajlik be. Amin múlik: magasság (menj fel egy dombra vagy":
    "сигнал VHF/UHF не огибает. От чего зависит: высота (поднимись на холм или",
  "tedd fel az antennát), átjátszó , vagy alacsonyabb sáv (CB vagy rövidhullám).":
    "подними антенну), ретранслятор , или более низкий диапазон (CB или КВ).",
  "kilométerhez kb.":
    "км нужно примерно",
  "watt kellene ezen a sávon és ezen a terepen":
    "ватт на этом диапазоне и на этом рельефе",
  "— ami már nem kézirádió-kategória, és rendszerint olcsóbb feljebb vinni az antennát.":
    "— это уже не уровень портативной рации, и обычно дешевле поднять антенну выше.",
  "Ennyire várható összeköttetés":
    "Ожидаемая дальность связи",
  "méter antennamagassággal.":
    "м при высоте антенны.",
  "Amin most múlik:":
    "От чего сейчас зависит:",
  "Rövidhullámon a talajhullámmal számoltunk.":
    "На КВ мы считали по земной волне.",
  "A rálátásod":
    "Твоя прямая видимость",
  "km, a terep és a teljesítmény":
    "км, рельеф и мощность",
  "km-t enged — a kettő közül a kisebbik számít.":
    "км позволяют — учитывается меньшее из двух.",
  "A watt a leggyengébb eszközöd. A távolság a teljesítmény negyedik":
    "Ватты — твой самый слабый инструмент. Дальность растёт как корень четвёртой степени",
  "gyökével nő: négyszer annyi watt másfélszer nagyobb távolság. Egy méterrel feljebb tett":
    "из мощности: в четыре раза больше ватт — в полтора раза больше дальность. Антенна, поднятая на метр выше,",
  "antenna rendszerint többet ad, mint a teljesítmény megduplázása — és nem fogyaszt.":
    "обычно даёт больше, чем удвоение мощности — и ничего не потребляет.",
  "Rövidhullámon ez a szám csak a talajhullám. A 7 és a 3,6":
    "На КВ это число — только земная волна. Настоящую дальность диапазонов 7 и 3,6",
  "megahertzes sáv igazi hatótávját az ionoszféra adja: napszaktól és napfolt-tevékenységtől":
    "мегагерц даёт ионосфера: в зависимости от времени суток и солнечной активности",
  "függően 100-tól több ezer kilométerig. Azt ez a kalkulátor nem modellezi — arra":
    "от 100 до нескольких тысяч километров. Этот калькулятор это не моделирует — для этого",
  "terjedési előrejelzés kell.":
    "нужен прогноз прохождения.",
  "Tölts ki minden mezőt.":
    "Заполни все поля.",
  "kg fa, ez körülbelül":
    "кг дров, это примерно",
  "ömlesztett köbméter":
    "насыпных кубометров",
  "Légszáraz keményfával és 70 százalékos kályha-hatásfokkal számolva. Nedves fa ennek a felét adja, tehát kétszer annyi kell belőle.":
    "Расчёт для воздушно-сухой твёрдой древесины и КПД печи 70 процентов. Сырые дрова дают вдвое меньше, значит, их нужно вдвое больше.",
  "kg gáz, ez":
    "кг газа, это",
  "darab 11,5 kilós palack":
    "баллонов по 11,5 кг",
  "PB-gázt zárt térben égetni életveszélyes lehet. Szén-monoxid keletkezik, ami szagtalan, és álmodban öl meg. Kell mellé szén-monoxid-érzékelő, és kell folyamatos szellőzés — nem elég percenként kinyitni az ablakot.":
    "Сжигать пропан-бутан в закрытом помещении может быть смертельно опасно. Образуется угарный газ, у которого нет запаха, и он убивает во сне. Нужен датчик угарного газа и постоянная вентиляция — недостаточно открывать окно раз в минуту.",
  "Párát is termel: minden elégetett kiló gázból másfél liter víz kerül a levegőbe. Ettől penészedik a fal, és hidegebbnek érzed a szobát.":
    "Он также даёт влагу: с каждого сожжённого килограмма газа в воздух попадает полтора литра воды. От этого плесневеют стены, и комната кажется холоднее.",
  "Palackot soha ne tarts a lakótérben tartalékként, és ne a fűtés mellett.":
    "Никогда не храни баллон в жилом помещении про запас и рядом с отоплением.",
  "Tölts ki mindkét mezőt.":
    "Заполни оба поля.",
  "négyzetméter tetőről":
    "квадратных метров крыши",
  "milliméter esőből, húsz százalék veszteséggel számolva.":
    "миллиметров дождя, с учётом потерь двадцать процентов.",
  "A tető vízszintes vetülete számít, nem a ferde felület: felülről nézve mekkora.":
    "Важна горизонтальная проекция крыши, а не наклонная поверхность: какая она, если смотреть сверху.",
  "Ivásra és főzésre, három liter fejenként naponta:":
    "Для питья и готовки, три литра на человека в день:",
  "Az első lefolyó vizet engedd el. Az mossa le a tetőről a port, a madárürüléket és a leveleket. Nagyjából az első fél milliméter esőnek megfelelő mennyiség.":
    "Первую стекающую воду пропусти. Она смывает с крыши пыль, птичий помёт и листья. Примерно количество, соответствующее первому полумиллиметру дождя.",
  "A tető anyaga számít. Bitumenzsindelyről, ólomtartalmú festésről vagy azbesztpalán át gyűjtött vizet ne igyál. Mosásra, öblítésre az is jó.":
    "Материал крыши важен. Воду, собранную с битумной черепицы, свинцовой краски или асбестового шифера, не пей. Для стирки и полива она годится.",
  "Az összegyűjtött víz nem ivóvíz. A Víztisztítás rész fent megmondja, mennyi forralás vagy hipó kell hozzá.":
    "Собранная вода — не питьевая. В разделе «Очистка воды» выше сказано, сколько нужно кипячения или хлорки.",
  "Dörgés":
    "Гром",
  "Most várd meg a dörgést, és nyomd meg újra.":
    "Теперь дождись грома и нажми снова.",
  "Ez a fejed fölött van. Azonnal menj be épületbe vagy autóba. Fa alá soha.":
    "Это прямо над тобой. Немедленно иди в здание или в машину. Никогда под дерево.",
  "Tíz kilométeren belül van, tehát veszélyes. A következő villám már téged is elérhet: menj fedezékbe, és maradj is ott.":
    "Это в пределах десяти километров, значит, опасно. Следующая молния может достать и тебя: иди в укрытие и оставайся там.",
  "Egyelőre távol van, de figyeld: ha az idő rövidül, közeledik.":
    "Пока далеко, но следи: если время сокращается, гроза приближается.",
  "másodperc telt el. A hang három másodperc alatt tesz meg egy kilométert.":
    "секунд прошло. Звук проходит один километр за три секунды.",
  "Harminc-harminc szabály: ha a dörgés harminc másodpercen belül megjön, menj fedezékbe, és az utolsó dörgés után még harminc percig maradj bent. A vihar utolsó villámai a legalattomosabbak, mert akkor már mindenki előjön.":
    "Правило тридцать-тридцать: если гром приходит в пределах тридцати секунд, иди в укрытие и оставайся внутри ещё тридцать минут после последнего грома. Последние молнии грозы самые коварные, потому что к тому времени все уже выходят.",
  "Add meg a távolságot.":
    "Укажи расстояние.",
  "tartalékkal.":
    "с запасом.",
  ": ebből":
    ": из них",
  "már sötétben lenne. Vagy indulj hamarabb, vagy vigyél lámpát.":
    "уже придётся на темноту. Либо выходи раньше, либо возьми фонарь.",
  "kilométer":
    "километров",
  "méter emelkedés.":
    "м набора высоты.",
  "Az emelkedés minden hatszáz métere egy órát ad hozzá. Most indulva":
    "Каждые шестьсот метров подъёма добавляют час. Выйдя сейчас,",
  "-kor érnél oda.":
    "ты будешь на месте в",
  "Pihenő nincs benne. Hosszabb úton számolj óránként tíz perccel, és étkezéssel.":
    "Привалы не учтены. На длинном пути добавляй десять минут в час и время на еду.",
  "Mérés…":
    "Измерение…",
  "nyomás.":
    "нажатий.",
  "Forralás (ez a legbiztosabb)":
    "Кипячение (самый надёжный способ)",
  "Buzgó forrás":
    "Бурное кипение",
  "— kétezer méter felett vagy, ott hosszabb kell, mert alacsonyabb a forráspont.":
    "— ты выше двух тысяч метров, там нужно дольше, потому что температура кипения ниже.",
  "Hagyd kihűlni fedő alatt.":
    "Дай остыть под крышкой.",
  "Ha nem tudsz forralni: hipó":
    "Если не можешь кипятить: хлорка",
  "vízhez":
    "на воду",
  "százalékos hipó, ami körülbelül":
    "процентной хлорки, это примерно",
  "Keverd el, várj":
    "Перемешай, подожди",
  "percet, és utána is enyhén klóros szagúnak kell lennie.":
    "минут, и после этого должен остаться лёгкий запах хлора.",
  "Ha nem érzed a szagot, adj hozzá ugyanennyit, és várj még":
    "Если запаха нет, добавь столько же и подожди ещё",
  "Zavaros vizet előbb tisztítsd le. Hagyd ülepedni, majd szűrd át ruhán vagy kávéfilteren. A hipó a lebegő szennyeződésre pazarlódik el, és nem jut a kórokozókra.":
    "Мутную воду сначала очисти. Дай отстояться, затем процеди через ткань или кофейный фильтр. Хлорка тратится на взвешенную грязь и не достаётся возбудителям.",
  "Illatosított, sűrített vagy tisztítószeres hipót ne használj. Csak sima nátrium-hipoklorit oldat való bele.":
    "Не используй ароматизированную, концентрированную хлорку или хлорку с моющими средствами. Подходит только простой раствор гипохлорита натрия.",
  "Amit ez nem old meg: vegyszer, olaj, növényvédőszer, nehézfém, sóstalanítás. Ezeket sem a forralás, sem a hipó nem távolítja el, a forralás inkább töményíti őket. Ipari terület, út menti árok vagy szántóföld melletti vízzel ne is próbálkozz.":
    "Что это не решает: химикаты, нефтепродукты, пестициды, тяжёлые металлы, опреснение. Их не убирает ни кипячение, ни хлорка, кипячение их скорее концентрирует. С водой рядом с промзоной, из придорожной канавы или у пашни даже не пытайся.",
  "A hipó nem öl meg mindent. A Cryptosporidium ellenáll neki. Ha ilyet gyanítasz (állati ürülékkel érintkezett felszíni víz), forralj, vagy használj arra való szűrőt.":
    "Хлорка убивает не всё. Cryptosporidium к ней устойчив. Если подозреваешь такое (поверхностная вода, контактировавшая с помётом животных), кипяти или используй подходящий фильтр.",
  "csempe van eltárolva ezen a készüléken.":
    "плиток сохранено на этом устройстве.",
  "Ez a kivágás túl nagy:":
    "Эта область слишком большая:",
  "csempe lenne. Nagyíts rá jobban, és úgy töltsd le.":
    "плиток получилось бы. Приблизь сильнее и скачай так.",
  "csempe letöltése (kb.":
    "плиток для загрузки (ок.",
  "nagyításon. Folytatod?":
    "на масштабе. Продолжить?",
  "Letöltés…":
    "Загрузка…",
  "Letöltés:":
    "Загрузка:",
  "Kész:":
    "Готово:",
  "nem jött le)":
    "не загрузилось)",
  ". Összesen":
    ". Всего",
  "csempe van eltárolva.":
    "плиток сохранено.",
  "Kilépés a teljes képernyőből":
    "Выйти из полноэкранного режима",
  "Várj, amíg a térkép betölt.":
    "Подожди, пока загрузится карта.",
  "Nincs eltárolt csempe.":
    "Нет сохранённых плиток.",
  "Törlöd a letöltött térkép-területeket?":
    "Удалить загруженные области карты?",
  "Törölve. A térkép ezután csak online töltődik.":
    "Удалено. Карта теперь будет загружаться только онлайн.",
  "A mikrofon nem indult el:":
    "Микрофон не запустился:",
  "Vétel leállítása":
    "Остановить приём",
  "Vétel fut. Tartsd a hangforráshoz.":
    "Идёт приём. Держи у источника звука.",
  "sor vétel alatt…":
    "строк во время приёма…",
  "Vétel fut, még nincs jel.":
    "Идёт приём, сигнала пока нет.",
  "Vétel leállítva.":
    "Приём остановлен.",
  "Dekódolás…":
    "Декодирование…",
  "sor dekódolva.":
    "строк декодировано.",
  "Nem találtam SSTV-jelet ebben a felvételben.":
    "В этой записи не найден сигнал SSTV.",
  "Nem sikerült a kép betöltése.":
    "Не удалось загрузить изображение.",
  "Kódolás…":
    "Кодирование…",
  "Küldés…":
    "Отправка…",
  "mp) — tartsd a vevő mikrofonjához":
    "с) — держи у микрофона приёмника",
  "Kész.":
    "Готово.",
  "Leállítva.":
    "Остановлено.",
  "WAV készítése…":
    "Создание WAV…",
  "WAV letöltve:":
    "WAV скачан:",
  "Üzenet csak neki:":
    "Сообщение только ему/ей:",
  "kilépett, innentől mindenkinek írsz.":
    "вышел(а), теперь ты пишешь всем.",
  "Zárt üzenet. Ehhez a szoba kulcsa kell.":
    "Закрытое сообщение. Для него нужен ключ комнаты.",
  "csak neki":
    "только ему/ей",
  "csak neked":
    "только тебе",
  "csak neki:":
    "только ему/ей:",
  "Az internetes szobákhoz egyszer be kell lépned.":
    "Для интернет-комнат нужно один раз войти.",
  "Nem vagy bejelentkezve. Töltsd újra a lapot, és add meg a jelszót.":
    "Ты не вошёл. Перезагрузи страницу и введи пароль.",
  "Jelszó megjelenítése":
    "Показать пароль",
  "Belépés jelszóval":
    "Вход с паролем",
  "Az e-mail címed és a jelszavad. A telefon megjegyzi, többször nem kell.":
    "Твой e-mail и пароль. Телефон запомнит, больше вводить не придётся.",
  "Belépés e-mailes kóddal (jelszó nélkül)":
    "Вход по коду из e-mail (без пароля)",
  "Új fiók":
    "Новый аккаунт",
  "Új jelszó beállítása":
    "Установить новый пароль",
  "Add meg az e-mail címed, és válassz jelszót (legalább 8 karakter), kétszer. Utána küldünk egy 6 jegyű kódot e-mailben.":
    "Введи свой e-mail и выбери пароль (минимум 8 символов), дважды. Затем мы отправим 6-значный код по e-mail.",
  "Jelszó (legalább 8 karakter)":
    "Пароль (минимум 8 символов)",
  "Jelszó még egyszer":
    "Пароль ещё раз",
  "Vissza a belépéshez":
    "Назад ко входу",
  "Írd be a kódot":
    "Введи код",
  "Küldtünk egy 6 jegyű kódot ide:":
    "Мы отправили 6-значный код сюда:",
  "Nézd meg a levelezőben (a Spam mappát is), és írd be. 10 percig érvényes.":
    "Проверь почту (и папку «Спам»), и введи его. Действует 10 минут.",
  "6 jegyű kód":
    "6-значный код",
  "Megerősítés":
    "Подтвердить",
  "Elölről":
    "Сначала",
  "Bejelentkeztél. A telefon megjegyzi.":
    "Ты вошёл. Телефон запомнит.",
  "Ellenőrzés folyamatban…":
    "Идёт проверка…",
  "Belépés folyamatban…":
    "Идёт вход…",
  "Küldés folyamatban, pár másodperc…":
    "Идёт отправка, несколько секунд…",
  "Add meg az e-mail címed és a jelszavad.":
    "Введи свой e-mail и пароль.",
  "Hibás e-mail cím vagy jelszó.":
    "Неверный e-mail или пароль.",
  "Ha elfelejtetted, nyomd meg az „Elfelejtettem a jelszót\" gombot.":
    "Если забыл, нажми кнопку «Забыл пароль\".",
  "A jelszó legalább 8 karakter legyen.":
    "Пароль должен быть не короче 8 символов.",
  "A két jelszó nem egyezik. Írd be újra mindkettőt.":
    "Пароли не совпадают. Введи оба заново.",
  "A kód 6 számjegy.":
    "Код — это 6 цифр.",
  "Hibás kód.":
    "Неверный код.",
  "Nem vagy bejelentkezve.":
    "Ты не вошёл.",
  "Kiléptél.":
    "Ты вышел.",
  "nincs kapcsolat":
    "нет связи",
  "Bekapcsolva. Ha valaki ír ide, jelez a telefonod, akkor is, ha az app be van zárva.":
    "Включено. Если кто-то сюда напишет, телефон сообщит, даже если приложение закрыто.",
  "Ha valaki ír ide, jelezzen a telefonod.":
    "Пусть телефон сообщает, если кто-то сюда напишет.",
  "Ez a böngésző nem tud értesítést fogadni. Telefonon tedd ki az appot a főképernyőre.":
    "Этот браузер не может получать уведомления. На телефоне добавь приложение на главный экран.",
  "Bekapcsolva. Ha valaki ír ide, jelez a telefonod.":
    "Включено. Если кто-то сюда напишет, телефон сообщит.",
  "Nem adtál engedélyt az értesítéshez. A telefon beállításainál, az alkalmazásnál adhatod meg.":
    "Ты не дал разрешение на уведомления. Его можно дать в настройках телефона, в разделе приложения.",
  "Bekapcsolva. Küldök egy próbát.":
    "Включено. Отправляю тестовое.",
  "Nem adtál engedélyt. A telefon beállításainál később visszaadhatod.":
    "Ты не дал разрешение. Позже его можно вернуть в настройках телефона.",
  "a szerver nem adott kulcsot":
    "сервер не выдал ключ",
  "a szerver nem fogadta el a feliratkozást":
    "сервер не принял подписку",
  "Bekapcsolva. Küldök egy próbát, hogy lásd, tényleg megérkezik.":
    "Включено. Отправляю тестовое, чтобы ты увидел, что оно действительно приходит.",
  "A próbát a szerver elküldte a Google-nek. Pár másodpercen belül meg kell jelennie a telefon értesítései között, akkor is, ha bezárod az appot.":
    "Сервер отправил тестовое уведомление в Google. Через несколько секунд оно должно появиться в уведомлениях телефона, даже если ты закроешь приложение.",
  "Próba: így jelez majd, ha valaki ír ide.":
    "Тест: так телефон сообщит, когда кто-то сюда напишет.",
  "Kiküldtem a próbát, nézd meg a telefon értesítései között.":
    "Тестовое отправлено, проверь уведомления телефона.",
  "Nincs engedély az értesítéshez.":
    "Нет разрешения на уведомления.",
  "Ezen az eszközön nincs bekapcsolva az értesítés.":
    "На этом устройстве уведомления не включены.",
  "A próba nem ment ki.":
    "Тестовое не отправилось.",
  "A próbaértesítést a szolgáltató átvette. Ha pár másodpercen belül nem":
    "Сервис принял тестовое уведомление. Если через несколько секунд оно не",
  "jelenik meg a telefonodon, akkor a telefon beállításánál akad el, nem az appban.":
    "появится на телефоне, значит, проблема в настройках телефона, а не в приложении.",
  "Nyiss egyet: internet és térerő nélkül, egy hálón":
    "Открой: без интернета и сотовой связи, в одной сети",
  "Minden nyelv":
    "Все языки",
  "Erre a keresésre nincs nyitott szoba.":
    "По этому запросу нет открытых комнат.",
  "Ezen a nyelven most nincs nyitott szoba. Állítsd vissza Minden nyelvre.":
    "На этом языке сейчас нет открытых комнат. Верни «Все языки».",
  "indította":
    "создал(а)",
  "nem vagy tag — koppints a jelentkezéshez":
    "ты не участник — нажми, чтобы подать заявку",
  "tag olvasta el":
    "участников прочитали",
  "Elküldve":
    "Отправлено",
  "Még senki nem olvasta el":
    "Ещё никто не прочитал",
  "Módosítás: írd át, és küldd el. A mező kiürítésével elveted.":
    "Изменение: исправь и отправь. Очистив поле, ты отменишь.",
  "Módosítva:":
    "Изменено:",
  "Törlöd ezt az üzenetet? Mindenkinél eltűnik a tartalma, és azoknál is, akik elmentették.":
    "Удалить это сообщение? Его содержимое исчезнет у всех, даже у тех, кто его сохранил.",
  "Törölt üzenet":
    "Удалённое сообщение",
  "(zárt üzenet — kérj új meghívó linket a szoba gazdájától)":
    "(закрытое сообщение — попроси новую ссылку-приглашение у владельца комнаты)",
  "(zárt üzenet — ez a kulcs nem ehhez a szobához való)":
    "(закрытое сообщение — этот ключ не от этой комнаты)",
  "(zárt üzenet — nincs meg a kulcs)":
    "(закрытое сообщение — нет ключа)",
  "Rendszerüzenet":
    "Системное сообщение",
  "Állandó jel — a névtől és a képtől független":
    "Постоянный знак — не зависит от имени и изображения",
  "Ehhez a szobához most készült titkosító kulcs. Küldj ÚJ meghívó linket a tagoknak, hogy olvasni tudják az üzeneteidet.":
    "Для этой комнаты только что создан ключ шифрования. Отправь участникам НОВУЮ ссылку-приглашение, чтобы они могли читать твои сообщения.",
  "Kapcsolódva.":
    "Подключено.",
  "Megszakadt a kapcsolat, újrapróbálom...":
    "Связь прервалась, пробую снова...",
  "belépési kérelmet küldött — a fogaskerék mögött döntesz róla.":
    "отправил(а) заявку на вступление — решение за шестерёнкой.",
  "új üzenetet írt.":
    "написал(а) новое сообщение.",
  "Kész. A szobák listáján már ez látszik. (":
    "Готово. В списке комнат теперь видно это. (",
  "Adj nevet a szobának.":
    "Дай название комнате.",
  "Kész, a szoba létrejött. Itt a kódja, és itt tudsz képet feltölteni vagy meghívót küldeni. Ugyanezt később a fogaskerék alatt éred el.":
    "Готово, комната создана. Вот её код, здесь можно загрузить изображение или отправить приглашение. То же самое потом доступно под шестерёнкой.",
  "Írd be a szoba kódját.":
    "Введи код комнаты.",
  "Kérelem elküldve. Amíg a gazda jóvá nem hagyja, nem látod az üzeneteket.":
    "Заявка отправлена. Пока владелец её не одобрит, ты не видишь сообщения.",
  "Már tag vagy ebben a szobában.":
    "Ты уже участник этой комнаты.",
  "Nincs ilyen kódú szoba.":
    "Комнаты с таким кодом нет.",
  "Illeszd be a meghívó linket.":
    "Вставь ссылку-приглашение.",
  "Ebben nincs meghívó. Másold be a teljes linket.":
    "Здесь нет приглашения. Скопируй ссылку целиком.",
  "Beváltom...":
    "Активирую...",
  "Kész. A csempén már ez látszik. (":
    "Готово. На плитке теперь видно это. (",
  "Erről a szobáról nem jelez.":
    "Об этой комнате уведомлений не будет.",
  "Küldöm...":
    "Отправляю...",
  "A szoba kódja a vágólapon.":
    "Код комнаты скопирован в буфер обмена.",
  "Nem sikerült a vágólapra tenni. Jelöld ki és másold ki kézzel.":
    "Не удалось скопировать в буфер обмена. Выдели и скопируй вручную.",
  "Biztosan törlöd? A szoba MINDENKINEK megszűnik, az üzenetekkel együtt. Ez nem vonható vissza.":
    "Точно удалить? Комната исчезнет для ВСЕХ, вместе с сообщениями. Это нельзя отменить.",
  "Biztosan kilépsz? A szoba a többieknek megmarad, te nem látod tovább.":
    "Точно выйти? Для остальных комната останется, ты её больше не увидишь.",
  "A szoba megszűnt.":
    "Комната удалена.",
  "Kiléptél a szobából.":
    "Ты вышел из комнаты.",
  "Nem fért el a tárolóban. Próbálj kisebb képet.":
    "Не поместилось в хранилище. Попробуй изображение поменьше.",
  "Mentve. Igazíthatod a kivágást, majd nyomd meg a Kész gombot.":
    "Сохранено. Можно подправить обрезку, затем нажми «Готово».",
  "Mentve. Minden szobában ezen a néven látnak.":
    "Сохранено. Во всех комнатах тебя видят под этим именем.",
  "Ezt a nevet ebben a szobában már használja valaki. Adj meg másikat.":
    "Это имя в этой комнате уже кто-то использует. Укажи другое.",
  "Ez a név szabad ebben a szobában.":
    "Это имя в этой комнате свободно.",
  "Ezt a nevet már használja valaki ebben a szobában.":
    "Это имя в этой комнате уже кто-то использует.",
  "Egy embert enged be, és 7 nap múlva lejár.":
    "Пускает одного человека и истекает через 7 дней.",
  "PrepperPapa meghívó":
    "Приглашение PrepperPapa",
  "Meghívlak a(z) „":
    "Приглашаю тебя в комнату «",
  "\" szobába:":
    "\":",
  "A linket a böngésző CÍMSORÁBA illeszd be, ne a keresőbe.":
    "Вставь ссылку в АДРЕСНУЮ СТРОКУ браузера, а не в поиск.",
  "A vágólapra másolva. Egy embert enged be, és 7 nap múlva lejár.":
    "Скопировано в буфер обмена. Пускает одного человека и истекает через 7 дней.",
  "Kép csatolva — koppints az elvetéshez":
    "Изображение прикреплено — нажми, чтобы убрать",
  "A csatolt képet elvetettem.":
    "Прикреплённое изображение убрано.",
  "Kép csatolva. A Küldéssel megy el.":
    "Изображение прикреплено. Уйдёт при нажатии «Отправить».",
  "A módosítás elvetve.":
    "Изменение отменено.",
  "Módosítva.":
    "Изменено.",
  "Lejárt a módosítási idő (15 perc).":
    "Время на изменение истекло (15 минут).",
  "A módosítás nem sikerült.":
    "Изменить не удалось.",
  "Az üzenet nem ment el.":
    "Сообщение не отправилось.",
  "Ez a meghívó lejárt. Kérj újat attól, aki küldte.":
    "Это приглашение истекло. Попроси новое у того, кто его прислал.",
  "Ezt a meghívót már felhasználták. Kérj újat attól, aki küldte.":
    "Это приглашение уже использовано. Попроси новое у того, кто его прислал.",
  "Ismeretlen meghívó. Lehet, hogy hiányzik a link vége.":
    "Неизвестное приглашение. Возможно, не хватает конца ссылки.",
  "A meghívót most nem sikerült beváltani. Van interneted?":
    "Сейчас не удалось активировать приглашение. Есть ли у тебя интернет?",
  "Küldés: kiválasztasz egy képet, és a telefon hangként játssza le.":
    "Отправка: выбираешь изображение, и телефон проигрывает его звуком.",
  "Vétel: a telefon hallgatja a hangot, és soronként rajzolja ki a képet.":
    "Приём: телефон слушает звук и построчно рисует изображение.",
  "Kép választása: a telefon magától átméretezi a 320x256-os keretre.":
    "Выбор изображения: телефон сам подгонит его под кадр 320x256.",
  "Lejátszás: ugyanaz a gomb indít és állít. A WAV a hangot fájlba menti, ha máshogy akarod átvinni.":
    "Воспроизведение: одна и та же кнопка запускает и останавливает. WAV сохраняет звук в файл, если хочешь передать его иначе.",
  "Vétel indítása: ugyanaz a gomb indít és állít. Tartsd a telefont a hangszóró közelébe.":
    "Запуск приёма: одна и та же кнопка запускает и останавливает. Держи телефон рядом с динамиком.",
  "Hangfájlból is megy, ha valaki felvételt küld.":
    "Работает и с аудиофайла, если кто-то прислал запись.",
  "A kész képet elmentheted, vagy törölheted és új vételbe kezdhetsz.":
    "Готовое изображение можно сохранить или удалить и начать новый приём.",
  "Forralás":
    "Кипячение",
  "A Szoba zárt csoport, ami interneten át is elérhető: aki messze van, az is beszélget.":
    "Комната — закрытая группа, доступная и через интернет: кто далеко, тоже может общаться.",
  "A gemkapoccsal képet csatolsz, a háromszög jellel sürgősnek jelölöd — az pirossal emeli ki mindenkinél.":
    "Скрепкой прикрепляешь изображение, значком треугольника помечаешь как срочное — оно выделится красным у всех.",
  "Egy üzenetet hosszan nyomva tudsz rá emojival válaszolni, elmenteni, a sajátodat módosítani vagy törölni.":
    "Долгим нажатием на сообщение можно ответить эмодзи, сохранить его, изменить или удалить своё.",
  "A fejlécben a fogaskerék nyitja a szoba beállításait: értesítés, tagok, belépési kérelmek, a szoba kódja.":
    "Шестерёнка в заголовке открывает настройки комнаты: уведомления, участники, заявки на вступление, код комнаты.",
  "Az üzenetek szövege és képei végponttól végpontig titkosítva mennek: a szerver ezeket nem tudja elolvasni. A neveket, a profilképeket, a szoba képét, a reakciókat és az időpontokat viszont látja.":
    "Текст и изображения сообщений зашифрованы сквозным шифрованием: сервер не может их прочитать. Но он видит имена, фото профиля, изображение комнаты, реакции и время.",
  "Kezdőlap":
    "Главная",
  "Előbb add meg a neved — így látnak a többiek a szobákban.":
    "Сначала укажи своё имя — так тебя будут видеть другие в комнатах.",
  "Tegyél fel egy profilképet — a neved mellett jelenik meg.":
    "Добавь фото профиля — оно появится рядом с твоим именем.",
  "(meg nem volt nyitva a szoba kepernyo)":
    "(экран комнаты ещё не был открыт)",
  "Frissítés keresése…":
    "Проверить обновления…",
  "Főoldal":
    "Главная страница",
  "Lámpa, vészfény":
    "Фонарь, аварийный свет",
  "Vészjelzés fény/hang":
    "Сигнал бедствия светом/звуком",
  "A menüsor — ez mindig elérhető alul":
    "Строка меню — она всегда доступна внизу",
  "Félkövér":
    "Жирный",
  "Dőlt":
    "Курсив",
  "Felsorolás":
    "Маркированный список",
  "Szerkesztés":
    "Редактировать",
  "Most jöhet két befúvás, ha vállalod. Ha nem, folytasd a nyomásokat szünet nélkül.":
    "Сейчас два вдоха, если готов. Если нет, продолжай нажатия без перерыва.",
  // ===== MENTETT uZENETEK a Profilon (2026-10-06) =====
  "Mentett üzenetek":
    "Сохранённые сообщения",
  "Amit egy szobában hosszan nyomva elmentettél. A mentés hivatkozás, nem másolat: ha a szerzője törli az üzenetet, innen is eltűnik.":
    "То, что ты сохранил долгим нажатием в комнате. Сохранение — это ссылка, а не копия: если автор удалит сообщение, оно исчезнет и отсюда.",
  // ===== FAX (SSTV): csak Martin M1 (Fonok dontese, 2026-10-06 21:00) =====
  "Martin M1 mód: 320×256 képpont, egy kép ~114 másodperc. Ez az idő magából az SSTV-ből jön — a kép soronként épül fel hangból, és nem gyorsítható.":
    "Режим Martin M1: 320×256 пикселей, одно изображение — около 114 секунд. Это время заложено в самом SSTV: картинка строится строка за строкой из звука, и ускорить её нельзя.",
  "Küldéshez: a másik eszközön indíts SSTV-vevőt (a mi Fax-vevőnket, vagy pl. Robot36, MMSSTV) Martin M1 módban, és tartsd a hangszórót a mikrofonjához. A VIS-fejléc automatikus, a vevő magától felismeri a módot. Egy kép ~114 másodperc, és ez alatt a hangnak folyamatosnak kell lennie.":
    "Чтобы отправить: на другом устройстве запусти SSTV-приёмник (наш Факс-приёмник или, напр., Robot36, MMSSTV) в режиме Martin M1 и поднеси динамик к его микрофону. Заголовок VIS автоматический, приёмник сам распознаёт режим. Одно изображение — около 114 секунд, и всё это время звук должен быть непрерывным.",
  // ===== SZOBA: szabalyzat, belepesi kerelem, meghivo-bevaltas, profil (2026-10-06) =====
  // A SZABALYZAT JOGI SZOVEG: Istvan irta magyarul, a forditas Marveene -- ATNEZESRE VAR.
  "Szoba-szabályzat és adatkezelés":
    "Правила комнаты и обработка данных",
  "A Szoba zárt, meghívásos közösségi tér.":
    "Комната — закрытое пространство сообщества по приглашениям.",
  "Nem osztok meg jogsértő tartalmat, más személyes adatát, zaklató üzenetet vagy kereskedelmi, reklám tartalmat.":
    "Я не публикую противоправный контент, персональные данные других людей, сообщения с преследованием, коммерческий или рекламный контент.",
  "Tilos a fegyver, lőszer, robbanóanyag, kábítószer és bármilyen tiltott áru adásvétele, cseréje vagy közvetítése — ajánlat, kereslet és kapcsolatfelvétel formájában is.":
    "Запрещена купля-продажа, обмен и посредничество с оружием, боеприпасами, взрывчаткой, наркотиками и любыми запрещёнными товарами — в том числе в виде предложений, запросов и установления контакта.",
  "Tilos fegyver, lőszer, robbanóanyag vagy más veszélyes eszköz készítéséhez, átalakításához útmutatót megosztani, és tilos bármilyen bűncselekményre felbujtani vagy azt megszervezni. A felkészülés, a készletezés, az elsősegély és a rádiózás mint téma ettől természetesen megmarad.":
    "Запрещено распространять инструкции по изготовлению или переделке оружия, боеприпасов, взрывчатки и других опасных устройств, а также подстрекать к преступлению или организовывать его. Подготовка, запасы, первая помощь и радиосвязь как темы, разумеется, остаются.",
  "Amit beírok, a szoba többi tagja látja, és el is mentheti — a titkosítás a szervertől védi az üzenetet, a tagoktól nem.":
    "Всё, что я пишу, видят другие участники и могут это сохранить — шифрование защищает сообщение от сервера, а не от участников.",
  "A szobát létrehozó gazda felel a szobában folytatott tartalomért: ő dönt a belépésről, ő távolíthat el tagot, és más üzenetét is csak ő törölheti.": "Создатель комнаты отвечает за её содержимое: он решает, кого впускать, может удалить участника, и только он может удалить чужое сообщение.",
  "Járművek": "Транспорт",
  "Helyszínek": "Места",
  "Telefonszám": "Номер телефона",
  "Hajó": "Лодка",
  "A gazda bármikor eltávolíthat egy tagot, és bármikor törölheti a szobát — ez minden tag üzenetét visszavonhatatlanul megszünteti.":
    "Хозяин может в любой момент удалить участника и удалить комнату — это безвозвратно уничтожает сообщения всех участников.",
  "Ha kilépek vagy eltávolítanak, a szerver több üzenetet nem ad ki nekem — a készülékemen már meglévők viszont olvashatók maradnak.":
    "Если я выйду или меня удалят, сервер больше не выдаст мне сообщений — но те, что уже на моём устройстве, останутся читаемыми.",
  "A szobában megosztott hely- vagy készlet-adat érzékeny: a saját biztonságomért én felelek.":
    "Данные о местоположении или запасах, опубликованные в комнате, чувствительны: за собственную безопасность отвечаю я.",
  "A szoba használata saját belátást és felelősséget kíván.":
    "Пользование комнатой требует собственного суждения и ответственности.",
  "16 év alatti csak szülő vagy gondviselő hozzájárulásával csatlakozhat.":
    "Лицо младше 16 лет может присоединиться только с согласия родителя или опекуна.",
  "A szerver tárolja: a szoba és a tagok nevét, a profilképet, az üzenetek TITKOSÍTOTT tartalmát, a képeket (max 500 kB), a reakciókat és az olvasási jelzéseket.":
    "Сервер хранит: название комнаты и имена участников, фото профиля, ЗАШИФРОВАННОЕ содержимое сообщений, изображения (до 500 кБ), реакции и отметки о прочтении.",
  "Ha meghívó linket kaptál, és az böngészőben nyílt meg, másold ide az egészet — innen az app váltja be.":
    "Если ты получил ссылку-приглашение и она открылась в браузере, вставь её сюда целиком — приложение её активирует.",
  "Meghívó beváltása":
    "Активировать приглашение",
  "Eszköz-diagnosztika":
    "Диагностика устройства",
  "Értesítés erről a szobáról":
    "Уведомления об этой комнате",
  "Ha valaki ír ide, jelezzen a telefonod — akkor is, ha az app be van zárva.":
    "Если кто-то напишет сюда, пусть телефон уведомит — даже когда приложение закрыто.",
  "Ez a másik út, és szándékosan marad meg. A meghívó link csak ott működik, ahol át is tudod küldeni. A kódot viszont be lehet mondani telefonon vagy rádión, le lehet írni egy papírra, le lehet adni morzével — nyolc karakter, és kész.":
    "Это второй путь, и он остаётся намеренно. Ссылка-приглашение работает только там, куда ты можешь её отправить. А код можно продиктовать по телефону или рации, написать на бумаге, передать морзянкой — восемь символов, и готово.",
  "Aki a kódot ismeri, kérelmet küld; te döntöd el, beengeded-e. A jóváhagyással a te készüléked adja át neki a szoba kulcsát, a szerver nem látja.":
    "Тот, кто знает код, отправляет запрос; ты решаешь, впускать ли. При одобрении твоё устройство передаёт ему ключ комнаты — сервер его не видит.",
  "Profil":
    "Профиль",
  "Profilkép":
    "Фото профиля",
  "A neved mellett jelenik meg. Nem kötelező.":
    "Появляется рядом с твоим именем. Не обязательно.",
  "Húzd a képet a körben, a csúszkával nagyíts. Csak a körben látszó rész kerül mentésre.":
    "Перетащи изображение внутри круга, масштабируй ползунком. Сохраняется только видимая в круге часть.",
  // TELJES FORDITAS-KOR (Fonok, 2026-10-05 21:36: "az osszes forditas megtortenjen mindenhol")
  "Válaszd ki, mit szeretnél: adást vagy vételt.":
    "Выбери, что тебе нужно: передача или приём.",
  "Morze kulcs":
    "Телеграфный ключ",
  "Kopogás (rács-kód)":
    "Перестукивание (тюремная азбука)",
  "72h csomag":
    "Набор на 72 часа",
  "Export":
    "Экспорт",
  "Egészségügyi adatok":
    "Медицинские данные",
  "Nem kötelező, de ebből jön a vészkártyád, és ebből számoljuk, mi kell a csomagba.":
    "Не обязательно, но отсюда формируется твоя экстренная карточка, и по ней мы считаем, что положить в набор.",
  "Lámpa-üzemidő":
    "Время работы фонаря",
  "Meddig világít egy fejlámpa vagy zseblámpa":
    "Сколько светит налобный или ручной фонарь",
  "Lámpa-üzemidő: meddig világít":
    "Время работы фонаря: сколько светит",
  "Lámpa vagy fejlámpa":
    "Фонарь или налобный фонарь",
  "Üzemmód":
    "Режим",
  "LED / fényerő-osztály":
    "Светодиод / класс яркости",
  "LED áramfelvétel (mA)":
    "Потребление светодиода (мА)",
  "Elem / akku típusa":
    "Тип батарейки или аккумулятора",
  "Kapacitás (mAh)":
    "Ёмкость (мА·ч)",
  "Hány elem/akku (párhuzamosan összeadódó kapacitás)":
    "Сколько элементов (при параллельном включении ёмкость складывается)",
  "A gyártói adat a fényerő NÉVLEGES üzemideje — a valóságban a hideg, az elem életkora és a fokozatos elhalványulás ennél mindig kevesebbet ad. A saját megadásos számításnál a névleges kapacitásból 15 százalékot levonunk erre.":
    "Данные производителя — НОМИНАЛЬНОЕ время работы при этой яркости; на деле холод, возраст батарейки и постепенное угасание всегда дают меньше. В ручном расчёте мы вычитаем на это 15 процентов от номинальной ёмкости.",
  "Ezt látják a többiek":
    "Это видят остальные",
  "minden szobában":
    "во всех комнатах",
  ". Egy nevet használ a rendszer; a szobába lépéskor ezt kérdezi meg, ha még nincs megadva.":
    ". Система использует одно имя; она спрашивает его при входе в комнату, если оно ещё не задано.",
  "Szalag ✕":
    "Лента ✕",
  "Saját térképek":
    "Твои карты",
  // Igazitas finomhangolasa (Fonok kerese 2026-10-05 20:52)
  "Finomhangolás":
    "Точная подстройка",
  "Alaphelyzet":
    "Сброс",
  "A saját térkép a helyén van.":
    "Твоя карта на месте.",
  // UJ PONT felvevo a terkepen (Fonok kerese 2026-10-05 20:37)
  "Új pont":
    "Новая точка",
  "Menedék":
    "Укрытие",
  "Tűzrakó":
    "Костровище",
  "Veszély":
    "Опасность",
  "Találkozó":
    "Место встречи",
  "A pont neve":
    "Название точки",
  "Koppints a térképre újra, ha arrébb tennéd. A pont csak a Mentéssel jön létre.":
    "Коснись карты ещё раз, чтобы переместить. Точка создаётся только при сохранении.",
  // VAD- ES ROVAR-TAVOLTARTO (Fonok kerese 2026-10-05 20:16)
  "Vad- és rovar-távoltartó":
    "Отпугиватель зверей и насекомых",
  "Vadak ellen":
    "Против зверей",
  "Szúnyogok ellen":
    "Против комаров",
  "Vad-frekvencia":
    "Частота для зверей",
  "Szúnyog-frekvencia":
    "Частота для комаров",
  "Hz, lassan söprő hang. A legtöbb felnőtt ezt már nem hallja.":
    "Гц, медленно скользящий тон. Большинство взрослых его уже не слышит.",
  "Hz, folyamatos hang.":
    "Гц, непрерывный тон.",
  "AMIT EZ TUD ÉS AMIT NEM. A telefon hangszórója ilyen magas hangon lényegesen halkabb, mint a vészsípnál, és ezt a készüléked dönti el, nem az app. A szúnyogriasztó ultrahangnak nincs bizonyított hatása, több vizsgálat is eredménytelennek találta. Nagyobb vadnál a bizonyítottan működő eszköz a HANGOS, EMBERI FÜLNEK IS HALLHATÓ zaj, tehát az SOS lap vészsípja, nem ez. Ezt a két gombot akkor használd, ha ki akarod próbálni, és ne építs rá védelmet.":
    "ЧТО ЭТО МОЖЕТ И ЧЕГО НЕ МОЖЕТ. На таком высоком тоне динамик твоего телефона заметно тише, чем при аварийном свистке, и это решает твоё устройство, а не приложение. У ультразвука против комаров нет доказанного действия; несколько исследований признали его бесполезным. Против крупного зверя средство с доказанным действием — ГРОМКИЙ шум, СЛЫШИМЫЙ И ЧЕЛОВЕКУ, то есть свисток на странице SOS, а не это. Пользуйся этими двумя кнопками, если хочешь попробовать, и не строй на них свою защиту.",
  "Ne tartsd a füledhez, és ne irányítsd más fülére. Kutya, macska és más házi állat jóval magasabbra hall, mint az ember: nekik ez zavaró lehet akkor is, ha te nem hallod.":
    "Не подноси его к уху и не направляй в ухо другому. Собаки, кошки и другие домашние животные слышат намного выше человека: их это может беспокоить, даже если ты ничего не слышишь.",
  // TERKEP mester-gomb es funkcio-tabla (Fonok kerese 2026-10-05 20:11)
  "Térkép-funkciók":
    "Функции карты",
  "Helyzet és pontok":
    "Положение и точки",
  "Mérés":
    "Измерение",
  "Térkép és tároló":
    "Карта и хранилище",
  // TERKEP lap: data-i18n kulcsok, amiknek SEM a PP_SZOTAR-ban, SEM itt nem volt forditasa
  "Vissza":
    "Назад",
  "Kész":
    "Готово",
  "Tárolt térkép törlése":
    "Удалить сохранённую карту",
  "Saját térkép hozzáadása":
    "Добавить свою карту",
  "Saját térkép: fotózz le egy turista- vagy katonai térképet, és igazítsd rá az alaptérképre 2–3 ismert pont (falu, csúcs, útkereszteződés) párosításával. A kép rétegként az alaptérkép fölé kerül, átlátszósága állítható, és a készüléken tárolódik, térerő nélkül is megvan. A rajzolt, nem méretarányos térképeknél az igazítás közelítő. A pontjaidat ugyanúgy teszed le, mint eddig: valódi koordinátán tárolódnak, a rétegtől függetlenül.":
    "Своя карта: сфотографируй туристическую или военную карту и наложи её на основную, сопоставив 2-3 известные точки (деревню, вершину, перекрёсток). Изображение становится слоем над основной картой, его прозрачность настраивается, и оно хранится на устройстве, поэтому доступно без связи. На рисованных, не масштабных картах выравнивание приблизительное. Точки ты ставишь как раньше: они хранятся в реальных координатах, независимо от слоя.",
  // TERKEP lebego gomb-panel (Fonok kerese 2026-10-05 19:56)
  "Gombok elrejtése":
    "Скрыть кнопки",
  "Gombok megjelenítése":
    "Показать кнопки",
  // FAX kep-igazito (Fonok kerese 2026-10-05 19:50): forgatas + zoom + tolas a kereten belul
  "Ez nem papír-fax: egy képet küld hangként, szabványos SSTV módban, amit bármely SSTV-vevő megért. A keret ezért kötött: 320x256 képpont, fekvő. Egy gépelt A4-es laphoz ez kevés, de egy rövid, nagy betűs kézírás olvashatóan átmegy.":
    "Это не бумажный факс: он передаёт изображение звуком, в стандартном режиме SSTV, который понимает любой приёмник SSTV. Поэтому кадр фиксированный: 320x256 пикселей, горизонтальный. Для набранной страницы A4 этого мало, но короткая записка крупным почерком дойдёт разборчиво.",
  "Forgatás":
    "Повернуть",
  "Teljes kép":
    "Всё изображение",
  "Nagyítás":
    "Увеличение",
  "A keretbe eső rész:":
    "Часть внутри кадра:",
  "képpont a forrásból":
    "пикселей из исходного изображения",
  "Húzd a képet a helyére, két ujjal nagyíthatsz, a Forgatás kilencven fokonként fordít. Amit a keretben látsz, pontosan az megy el. A Forgatás és a Teljes kép újra beilleszti a képet a keretbe, onnan tudsz belezoomolni.":
    "Перетащи изображение на место, сведи два пальца для увеличения, а «Повернуть» поворачивает его на девяносто градусов. То, что ты видишь в кадре, именно это и отправится. «Повернуть» и «Всё изображение» снова вписывают картинку в кадр, и оттуда можно увеличивать.",
  // FAX (SSTV) -- allo kep kezelese + a ket fax lap feliratai, 2026-10-05 (Fonok: 'ne vesszen el ... egy csomo adat')
  "Fax küldés":
    "Отправка факса",
  "Fax vétel":
    "Приём факса",
  "Álló kép":
    "Вертикальное изображение",
  "Elforgatva, teljes felbontás":
    "Повёрнутое, полное разрешение",
  "Egész kép, fekete sávokkal":
    "Всё изображение, с чёрными полосами",
  "Kitöltés, a széleket levágja":
    "Заполнить кадр, обрезав края",
  "Álló kép elforgatva, teljes felbontás:":
    "Вертикальное изображение повёрнуто, полное разрешение:",
  "A keretre vágva, a széleit levágta:":
    "Обрезано по кадру, края срезаны:",
  "Egész kép, fekete sávokkal:":
    "Всё изображение, с чёрными полосами:",
  "Egész kép a keretben:":
    "Всё изображение в кадре:",
  "képpont a 320×256-os keretből":
    "пикселей из кадра 320×256",
  "A saját vételünk egyelőre csak Martin M1-et fejt vissza. A többi mód adásra kész, és egy szabványos SSTV-vevő (Robot36, MMSSTV) veszi, de ezt a telefonod nem tudja magának visszaolvasni.":
    "Наш собственный приёмник пока декодирует только Martin M1. Остальные режимы готовы к передаче, и стандартный приёмник SSTV (Robot36, MMSSTV) их принимает, но твой телефон пока не может прочитать их сам.",
  "A fax kerete fekvő, 320x256 képpont, ezt a mód szabványa adja. Álló képnél az elforgatás használja ki a legjobban a keretet, tehát ott veszik el a legkevesebb részlet, a vevő oldalán viszont fordítsd el a telefont. A kitöltés levágja a kép tetejét és alját. Fekvő képnél mindhárom beállítás ugyanazt adja.":
    "Кадр факса горизонтальный, 320x256 пикселей, так задаёт стандарт режима. У вертикального изображения поворот лучше всего использует кадр, поэтому теряется меньше всего деталей, но на приёмной стороне поверни телефон. Заполнение обрезает верх и низ изображения. У горизонтального изображения все три настройки дают одно и то же.",
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
  "Nagy gombok, szalag, memória — kesztyűben és sötétben is": "Крупные клавиши, лента, память — даже в перчатках и в темноте",

  // --- ATTRIBUTUM-SZOVEGEK (2026-08-26, Istvan). Thomas merte az angol keszlet
  // felvetele kozben: a `placeholder`/`title`/`aria-label` magyarul allt. A fordito
  // MAR bejarja az attributumokat -- ezek a kulcsok hianyoztak a szotarbol.
  // A `pl.` MAGYAR roviditès: nyelvenkent mas (e.g. / z. B. / p. ej. / np. / ex. / напр.),
  // es a tizedesjel is (`1013.2` angolul, `1013,2` a tobbin).
  "Keresés a tételek közt": "Поиск среди позиций",
  "Mégse": "Отмена",
  "Szalag ürítése": "Очистить ленту",
  "Visszavonás": "Отменить действие",
  "a tétel neve": "название позиции",
  "az eszköz neve": "название устройства",
  "hány darab": "сколько штук",
  "kalória egységenként": "калорий на единицу",
  "mennyiség": "количество",
  "sor törlése": "удалить строку",
  "Új lap": "Новый лист",
  "Írd be a szöveget, majd koppints a lapra": "Введи текст, затем коснись листа",
  "pl. 15": "напр. 15",
  "pl. 18": "напр. 18",
  "pl. 85": "напр. 85",
  "pl. 500": "напр. 500",
  "pl. 47.4979, 19.0402": "напр. 47.4979, 19.0402",
  "pl. A Rh+": "напр. A Rh+",
  "pl. Anna": "напр. Anna",
  "pl. 1013,2": "напр. 1013,2",
  "pl. 6,5": "напр. 6,5",
  "pl. Feri": "напр. Иван",
  "pl. Otthon": "напр. Дом",
  "pl. SOS Fonok": "напр. SOS Папа",
  "pl. inzulin": "напр. инсулин",

  // --- NYOMTATOTT VESZKARTYA (2026-08-26, Istvan). Thomas merte: a nyomtatott lap
  // angol nyelven is vegig MAGYAR volt. A lap KULON ablakban keszul, tehat a DOM-bejaro
  // fordito nem eri el -- a szoveg a felepiteskor fordul (`ppForditSzoveg` a cardNyomtat-ban).
  "VÉSZKÁRTYA": "ЭКСТРЕННАЯ КАРТА",
  "CSALÁDI VÉSZKÁRTYA": "СЕМЕЙНАЯ ЭКСТРЕННАЯ КАРТА",
  "Születés:": "Рождение:",
  "Allergia:": "Аллергия:",
  "Kontakt:": "Контакт:",
  "személyes QR": "личный QR",
  "családi QR": "семейный QR",
  "allergia:": "аллергия:",
  "gyógyszer:": "лекарства:",
  "A böngésző letiltotta az új ablakot. Engedélyezd, és próbáld újra.": "Браузер заблокировал новое окно. Разреши его и попробуй ещё раз.",
  "Nincs profil, amiből kártyát csinálhatnék. A Háztartásnál vedd fel őket.": "Нет профиля, из которого можно сделать карточку. Добавь их в Домохозяйстве.",

  "Otthon": "Дом",
  "Nyaraló": "Дача",
  "Hétvégi ház": "Загородный дом",
  "Garázs": "Гараж",
  "Lakókocsi": "Автодом",
  "Jármű": "Транспорт",
  "Rejtési pont": "Тайник",
  "Egyéb": "Другое",
  "egyéb": "другое",
  "Gépjármű": "Автомобиль",
  "Autó": "Машина",
  "Autós": "На машине",
  "Motorkerékpár": "Мотоцикл",
  "Elektromos bicikli": "Электровелосипед",
  "Elektromos roller": "Электросамокат",
  "Utánfutó": "Прицеп",
  "(motoros)": "(моторный)",
  "Megnevezés": "Название",
  "Név": "Имя",
  "A neved": "Твоё имя",
  "Törlés": "Удалить",
  "Mentés": "Сохранить",
  "Mégsem": "Отмена",
  "Hozzáadás": "Добавить",
  "Küldés": "Отправить",
  "Kilépés": "Выход",
  "Csatlakozás": "Подключение",
  "Csatlakozz": "Присоединиться",
  "Nincs": "Нет",
  "Számold ki": "Рассчитать",
  "Kategória": "Категория",
  "Cím": "Адрес",
  "Adat": "Данные",
  "Beállítások": "Настройки",
  "Feloldás": "Разблокировать",
  "A feloldás": "Разблокировка",
  "Zárolás": "Заблокировать",
  "Értesítés": "Уведомление",
  "Értesítés bekapcsolása": "Включить уведомления",
  "Beolvasás kamerával": "Сканировать камерой",
  "Betöltés fájlból": "Загрузить из файла",
  "Fájl kiválasztása és mentés": "Выбрать файл и сохранить",
  "Kép mentése": "Сохранить изображение",
  "Kép választása": "Выбрать изображение",
  "Betűsor másolása": "Копировать строку",
  "Hangfájlból": "Из аудиофайла",
  "English": "English",
  "Kommunikáció": "Связь",
  "Morze": "Морзе",
  "Fax (SSTV)": "Факс (SSTV)",
  // 2026-10-19 (kartya 43a80047): "(SSTV)" kivetve; a feloldas a fiokhoz kotott, max. ket keszulek
  "Használati útmutató": "Руководство пользователя",
  "Fax": "Факс",
  "Fax: kép átküldése hangban, rádión is. Ugyanaz a gomb indít és állít.": "Факс: передача изображения в звуке, в том числе по рации. Та же кнопка запускает и останавливает.",
  "A kód a fiókodhoz tartozik, és legfeljebb két készüléken használhatod. A feloldott modulok offline is működnek, semmi nem zár le. Ha kódot kaptál, itt válthatod be.": "Код привязан к твоей учётной записи и работает максимум на двух устройствах. Разблокированные модули работают и офлайн, ничего не блокируется. Если ты получил код, здесь можешь его активировать.",
  "Feloldva ✓ A kód a fiókodhoz tartozik, legfeljebb két készüléken.": "Разблокировано ✓ Код привязан к твоей учётной записи, максимум на двух устройствах.",
  "Üzenet": "Сообщение",
  "Hangüzenet": "Голосовое сообщение",
  "Digitális üzenet": "Цифровое сообщение",
  "Helyi szoba": "Локальная комната",
  "Tudástár": "База знаний",
  "Vészkártya": "Карточка экстренной помощи",
  "Titkos QR": "Секретный QR",
  "Biblia": "Библия",
  "Imádság": "Молитва",
  "Háztartás": "Домохозяйство",
  "Alapismeretek": "Основы",
  "Élelmiszer és víz": "Еда и вода",
  "Egészségügy": "Здоровье",
  "Háborús övezet": "Зона боевых действий",
  "SOS": "SOS",
  "Alaptérkép": "Базовая карта",
  "Irattárca": "Кошелёк документов",
  "Dokumentum": "Документ",
  "Dokumentumok · nyílt (QR)": "Документы · открытые (QR)",
  "Dokumentumok · PIN-zár": "Документы · PIN-замок",
  "Dokumentumok és adatmentés": "Документы и резервная копия",
  "Belépési és helyreállítási kódok": "Коды входа и восстановления",
  "Belépési kérelmek": "Заявки на вход",
  "Gyakorlónap": "День учений",
  "Csomaglista személyre és útra": "Список сборов по людям и поездке",
  "EDC: a mindennap magadnál hordott felszerelés": "EDC: снаряжение, которое носишь с собой каждый день",
  "Családtagok": "Члены семьи",
  "Családtag hozzáadása": "Добавить члена семьи",
  "Családtag törlése": "Удалить члена семьи",
  "Családtagok · állatok · helyszínek": "Члены семьи · животные · локации",
  "Családtagok vészkártyái": "Карточки экстренной помощи семьи",
  "Családi kártya (egy QR)": "Семейная карточка (один QR)",
  "Családi jelszó": "Семейный пароль",
  "Háziállatok": "Домашние животные",
  "Háziállat a felkészülésben": "Домашнее животное в подготовке",
  "+ Új háziállat": "+ Новое животное",
  "+ Új helyszín": "+ Новая локация",
  "Állat hozzáadása": "Добавить животное",
  "Állat törlése": "Удалить животное",
  "Faj": "Вид",
  "felnőtt férfi": "взрослый мужчина",
  "felnőtt nő": "взрослая женщина",
  "gyermek": "ребёнок",
  "csecsemő": "младенец",
  "fiú": "мальчик",
  "haszonállat": "сельхозживотное",
  "Helyszín hozzáadása": "Добавить локацию",
  "Helyszín törlése": "Удалить локацию",
  "Helyszínek készültsége": "Готовность локаций",
  "Ingatlanok és helyszínek": "Недвижимость и локации",
  "Emelet": "Этаж",
  "Alapterület (m²)": "Площадь (м²)",
  "GPS koordináta": "GPS-координаты",
  "Hány napra": "На сколько дней",
  "Kalória": "Калории",
  "Meddig elég az élelmed, és mennyi hiányzik": "На сколько хватит еды и чего не хватает",
  "Rádió-hatótáv": "Дальность рации",
  "Meddig hallanak a sávtól és a tereptől függően": "На каком расстоянии вас слышно — по диапазону и местности",
  "Kalória: meddig elég az élelmed": "Калории: на сколько хватит еды",
  "Hány felnőtt?": "Сколько взрослых?",
  "Hány gyerek? (kb. 12 év alatt)": "Сколько детей? (примерно до 12 лет)",
  "Mit csináltok ezekben a napokban?": "Чем вы будете заниматься в эти дни?",
  "Mi van a készletben?": "Что есть в запасе?",
  "+ Saját tétel hozzáadása": "+ Добавить свою позицию",
  "Vagy add meg egyben, ha tudod": "Или укажите общее, если знаете",
  "összes kilokalória (üresen hagyhatod)": "всего килокалорий (можно оставить пустым)",
  "Mi ez? (pl. szárított hús)": "Что это? (напр. вяленое мясо)",
  "kcal/egység": "ккал/единица",
  "mennyi": "сколько",
  "bent maradunk, keveset mozgunk": "сидим дома, мало двигаемся",
  "normál napi ügyintézés": "обычный день дел",
  "fizikai munka, gyaloglás": "физическая работа, ходьба",
  "Rizs": "Рис",
  "Száraztészta": "Сухие макароны",
  "Liszt": "Мука",
  "Bab, lencse, borsó": "Фасоль, чечевица, горох",
  "Zabpehely": "Овсяные хлопья",
  "Cukor, méz": "Сахар, мёд",
  "Olaj, zsír": "Масло, жир",
  "Húskonzerv (400 g)": "Мясные консервы (400 г)",
  "Zöldségkonzerv (400 g)": "Овощные консервы (400 г)",
  "Tejpor": "Сухое молоко",
  "Keksz, kétszersült": "Печенье, сухари",
  "Csokoládé, müzliszelet": "Шоколад, злаковый батончик",
  "Rádió: meddig hallanak": "Рация: на каком расстоянии слышно",
  "Milyen sávon?": "Какой диапазон?",
  "Adóteljesítmény (watt)": "Мощность передатчика (Вт)",
  "Milyen terepen?": "Какая местность?",
  "Milyen magasan van az antennád? (méter)": "На какой высоте ваша антенна? (метры)",
  "És a másiké?": "А у второго?",
  "Mekkora távolságot szeretnél áthidalni? (km, üresen hagyhatod)": "Какое расстояние хотите перекрыть? (км, можно оставить пустым)",
  "nyílt, sík terep": "открытая, ровная местность",
  "dombos, hullámos": "холмистая, волнистая",
  "erdő, sűrű növényzet": "лес, густая растительность",
  "város, beépített": "город, застройка",
  "hegyvidék, völgyben": "горы, в долине",
  "(db)": "(шт.)",
  "(kg)": "(кг)",
  "(liter/kg)": "(литр/кг)",
  "(egység)": "(единица)",
  "Hány napra kell?": "На сколько дней нужно?",
  "Hány napra tervezel itt": "На сколько дней планируешь здесь",
  "Vércsoport": "Группа крови",
  "Allergia": "Аллергия",
  "Allergiák": "Аллергии",
  "Gyógyszer": "Лекарство",
  "Gyógyszerek": "Лекарства",
  "Érszorító": "Жгут",
  "Elsősegélykészlet": "Аптечка",
  "Glutén": "Глютен",
  "Diófélék": "Орехи",
  "Földimogyoró": "Арахис",
  "Hal / tenger gyümölcsei": "Рыба / морепродукты",
  "Darázs- és méhcsípés": "Укус осы и пчелы",
  "Kullancsriasztó": "Средство от клещей",
  "Naptej": "Солнцезащитный крем",
  "CPAP": "CPAP",
  "Bébiétel": "Детское питание",
  "Állateledel": "Корм для животных",
  "Tisztálkodó eszközök": "Средства гигиены",
  "Női higiéniai termékek": "Женские гигиенические средства",
  "Kannás víz": "Вода в канистрах",
  "Palackos víz": "Вода в бутылках",
  "Száraz élelmiszer": "Сухие продукты",
  "Konzerv": "Консервы",
  "MRE pack": "Сухпаёк MRE",
  "Romlandó": "Скоропортящееся",
  "Hosszú távú": "Длительного хранения",
  "30 napos": "На 30 дней",
  "72 órás": "На 72 часа",
  "Menekülőzsák": "Тревожный рюкзак",
  "Téli túra": "Зимний поход",
  "Vízi túra": "Водный поход",
  "Hálózsák": "Спальный мешок",
  "Derékalj": "Коврик",
  "Párna": "Подушка",
  "Sátor/sátorlap": "Палатка/тент",
  "Fejlámpa": "Налобный фонарь",
  "Kézilámpa": "Ручной фонарь",
  "Munkalámpa": "Рабочая лампа",
  "Szikravető": "Огниво",
  "Gyújtós": "Растопка",
  "Főzőfej": "Горелка",
  "Spiritusz égő": "Спиртовая горелка",
  "Hobokályha": "Печь-щепочница",
  "Fa tüzelésű kályha": "Дровяная печь",
  "Dízel kályha": "Дизельная печь",
  "Vegyi melegítő": "Химическая грелка",
  "Ágyfűtés": "Обогрев постели",
  "Gázpalack": "Газовый баллон",
  "Tüzifa": "Дрова",
  "Fűtőolaj": "Печное топливо",
  "Fa, kályhában": "Дрова, в печи",
  "Hideg időjárási öltözet": "Одежда для холодной погоды",
  "Meleg időjárási öltözet": "Одежда для тёплой погоды",
  "EDC csomag felszerelései": "Снаряжение EDC-набора",
  "Víztisztító tabletta": "Таблетки для обеззараживания воды",
  "Vízszűrő": "Фильтр для воды",
  "Ciszterna": "Цистерна",
  "Esővíz": "Дождевая вода",
  "Esővíz: mennyi gyűlik össze": "Дождевая вода: сколько наберётся",
  "Hűtő": "Холодильник",
  "Áram": "Электричество",
  "Áramforrás": "Источник питания",
  "Áram: mit tudsz róla üzemeltetni, és meddig": "Электричество: что от него сможешь запитать и насколько",
  "Powerbank": "Павербанк",
  "Power station": "Зарядная станция",
  "Tank / akku": "Бак / аккумулятор",
  "Kapacitás (Wh/db)": "Ёмкость (Вт·ч/шт.)",
  "Autó-/szünetmentes akku 100 Ah": "Автомобильный/ИБП аккумулятор 100 А·ч",
  "Anker 521 PowerHouse (256 Wh)": "Anker 521 PowerHouse (256 Вт·ч)",
  "Bluetti AC200L (2048 Wh)": "Bluetti AC200L (2048 Вт·ч)",
  "Bluetti EB70 (716 Wh)": "Bluetti EB70 (716 Вт·ч)",
  "EcoFlow Delta 2 (1024 Wh)": "EcoFlow Delta 2 (1024 Вт·ч)",
  "EcoFlow River 2 (256 Wh)": "EcoFlow River 2 (256 Вт·ч)",
  "EcoFlow River 2 Pro (768 Wh)": "EcoFlow River 2 Pro (768 Вт·ч)",
  "Szolárpanel": "Солнечная панель",
  "Üzemanyag": "Топливо",
  "Üzemanyag (mobilitás)": "Топливо (мобильность)",
  "Üzemanyag-készlet": "Запас топлива",
  "benzin": "бензин",
  "dízel": "дизель",
  "Fogyasztás (/100 km)": "Расход (/100 км)",
  "Most mennyi van benne": "Сколько сейчас в нём",
  "tele": "полный",
  "háromnegyed": "три четверти",
  "fele": "половина",
  "negyede": "четверть",
  "ötöde": "пятая часть",
  "tizede": "десятая часть",
  "üres": "пустой",
  "Fűtés": "Отопление",
  "Fűtés áram nélkül is?": "Отопление и без электричества?",
  "Fűtés hatásfoka (%)": "КПД отопления (%)",
  "Fűtés: mennyi tüzelő kell": "Отопление: сколько нужно топлива",
  "Fűtött terület (m²)": "Отапливаемая площадь (м²)",
  "Átlagos (100 W/m²)": "Средний (100 Вт/м²)",
  "igen (kandalló, kályha, fa)": "да (камин, печь, дрова)",
  "igen (kút kézi szivattyúval, ciszterna)": "да (колодец с ручным насосом, цистерна)",
  "Energia (kcal/100 g)": "Энергия (ккал/100 г)",
  "Emelkedés összesen (m)": "Суммарный подъём (м)",
  "5% nátrium-hipoklorit (a szokásos háztartási)": "5% гипохлорит натрия (обычный бытовой)",
  "10% (ipari)": "10% (промышленный)",
  "A hipó töménysége (nézd meg az üvegen)": "Концентрация отбеливателя (посмотри на бутылке)",
  "WPM": "WPM",
  "Hz": "Гц",
  "Hang:": "Звук:",
  "Hangerő:": "Громкость:",
  "Hangmagasság:": "Высота тона:",
  "Fényerő:": "Яркость:",
  "Fehér": "Белый",
  "hang és fény, hálózat nélkül": "звук и свет, без сети",
  "Vétel sebesség (magától követi a jelet, kézzel is állíthatod):": "Скорость приёма (сама следует за сигналом, можно задать и вручную):",
  "Vétel-sebesség: magától követi a vett Morze tempóját, és a csúszkát is odaállítja. Kézzel is állíthatod, onnan követi tovább.": "Скорость приёма: сама следует за темпом принимаемой Морзе и передвигает ползунок. Можно задать и вручную; дальше она следует от этого значения.",
  "Vétel sebesség (állítsd a vett Morze tempójához):": "Скорость приёма (подстрой под темп принимаемой Морзе):",
  "Érzékenység (balra érzékenyebb, jobbra szigorúbb a zajra):": "Чувствительность (влево — чувствительнее, вправо — строже к шуму):",
  "Ha nem indul a kamera.": "Если камера не запускается.",
  "Internet nem kell.": "Интернет не нужен.",
  "A szoba képe": "Изображение комнаты",
  "A szoba kódja": "Код комнаты",
  "Helyzet (GPS)": "Местоположение (GPS)",
  "Helyzetem küldése": "Отправить моё местоположение",
  "A mostani helyzetem": "Моё текущее местоположение",
  "Iratai az Irattárcában": "Его документы в Кошельке документов",
  "Amikor akut helyzetben kell döntened": "Когда решать нужно в острой ситуации",
  "Amikor éjszaka nem hagy aludni a félelem": "Когда ночью страх не даёт уснуть",
  "Gyerekekkel és idősekkel": "С детьми и пожилыми",
  "Amit a rendszer garantál:": "Что система гарантирует:",
  "Amit nem garantál:": "Чего она не гарантирует:",
  "Amit vészhelyzetben tudni kell róla (nem kötelező)": "Что нужно знать об этом человеке в экстренной ситуации (необязательно)",
  "Ez a közös titok. Aki ismeri, az olvassa a kódjaidat, aki nem, annak értelmetlen betűsor. Add meg ugyanazt a jelszót azon a készüléken is, amelyik olvasni fogja.": "Это общий секрет. Кто его знает, тот читает твои коды; для остальных это бессмысленный набор букв. Введи тот же пароль и на том устройстве, которое будет их читать.",
  "PIN beállítása": "Установить PIN",
  "Állíts be egy PIN-t (4-6 számjegy)": "Задай PIN (4-6 цифр)",
  "Biblia letöltése": "Скачать Библию",
  "Ezen a készüléken még nincs feloldott modul.": "На этом устройстве пока нет разблокированных модулей.",
  "Ezt látják a többiek. Ugyanaz, mint a helyi szobában.": "Это видят другие. То же самое, что и в локальной комнате.",
  "Előbb vedd fel a Háztartásnál, kik vagytok — a lista onnan jön.": "Сначала добавь в разделе «Домохозяйство», кто вы — список берётся оттуда.",
  "Előbb vedd fel a Háztartásnál, kik vagytok. A lista abból dolgozik.": "Сначала добавь в разделе «Домохозяйство», кто вы. Список работает с этих данных.",
  "Előbb vegyél fel helyszínt a Háztartásnál. Alapesetben az otthon az első.": "Сначала добавь локацию в разделе «Домохозяйство». По умолчанию дом идёт первым.",
  "A törlés itt van, nem a listában — hogy ne lehessen véletlenül megnyomni.": "Удаление здесь, а не в списке — чтобы нельзя было нажать случайно.",
  "A mentős beolvashatja. Az adat a QR-ben van, nem megy szerverre.": "Медик может отсканировать. Данные в QR-коде, на сервер не отправляются.",
  "Egészségügyi vészhelyzeti adatok. A mentős beolvashatja (nyílt QR). Helyben tárolva.": "Медицинские данные для экстренных случаев. Медик может отсканировать (открытый QR). Хранятся локально.",
  "Egészségügyi adatok (nem kötelező, de ebből tudjuk, mi kell a csomagba)": "Медицинские данные (необязательно, но по ним мы знаем, что нужно положить в набор)",
  "Allergia (koppints, amennyi kell — a mezőbe írja be, ott át is írhatod)": "Аллергия (нажимай столько раз, сколько нужно — записывается в поле, там можно и изменить)",
  "Kié (üresen hagyva: közös)": "Чьё (оставить пустым: общее)",
  "Melyik készlethez tartozik (több is lehet)": "К какому запасу относится (можно несколько)",
  "Tárolási hely (több is lehet)": "Место хранения (можно несколько)",
  "A koordináta többféle alakban mehet:": "Координаты можно вводить в разных форматах:",
  "Három rövid jel, szünet, ismétlés — ez a nemzetközi vészjelzés. Hangosabban és tovább hallatszik, mint a kiabálás.": "Три коротких сигнала, пауза, повтор — это международный сигнал бедствия. Слышно громче и дальше, чем крик.",
  "A kód alatti betűsor UGYANEZ az adat. Faxon a képet küldd, morzével a betűsort.": "Строка букв под кодом — ЭТИ ЖЕ данные. Факсом отправляй изображение, азбукой Морзе — строку букв.",
  "A lejátszás ugyanazzal a gombbal indul és áll. Nincs külön Állj gomb — ha újra rákoppintasz, leáll.": "Воспроизведение запускается и останавливается той же кнопкой. Отдельной кнопки «Стоп» нет — нажми ещё раз, и оно остановится.",
  "A wattóra és a watt nem ugyanaz, és ezt szokás összekeverni.": "Ватт-час и ватт — это не одно и то же, и их часто путают.",
  "A wattóra (Wh) azt mondja meg, MEDDIG megy; a watt (W) azt, hogy MIT tudsz egyáltalán ráakasztani. Egy 2000 wattórás gép sem indít el egy 2000 wattos vízforralót, ha csak 600 wattot tud leadni — akkor sem, ha tele van.": "Ватт-час (Вт·ч) говорит, КАК ДОЛГО будет работать; ватт (Вт) — ЧТО ты вообще можешь подключить. Даже устройство на 2000 ватт-часов не запустит чайник на 2000 ватт, если способно отдать лишь 600 ватт — даже полностью заряженным.",
  "Helyszínenként: kik érkeznek oda, hány napra, és elég-e az ott lévő víz és élelem.": "По локациям: кто туда прибывает, на сколько дней, и хватит ли имеющейся там воды и еды.",
  "Telepítés a kezdőképernyőre": "Установить на главный экран",
  "Nemzetközi vészjelzés Morzéval: SOS (··· ─── ···), folyamatosan ismételve. Fénnyel, hang nélkül — a hangjelzés lent külön van, mert az mást tud.": "Международный сигнал бедствия азбукой Морзе: SOS (··· ─── ···), непрерывно повторяемый. Светом, без звука — звуковой сигнал ниже отдельно, потому что он умеет другое.",
  "TEKERD FEL A HANGERŐT. Az app a telefon hangerejét nem tudja felülírni, tehát ha az le van halkítva, a síp is halk lesz.": "УВЕЛИЧЬ ГРОМКОСТЬ. Приложение не может перекрыть громкость телефона, поэтому если она убавлена, свисток тоже будет тихим.",
  "Hz. A 3-4 kHz a legjobban hallható tartomány, ezért sípol ott a mentőmellény sípja is.": "Гц. 3-4 кГц — диапазон, слышимый лучше всего, поэтому свисток спасательного жилета звучит именно там.",
  "Percenként 110 koppanás. Nyomd a mellkas közepét a koppanás ütemére, körülbelül 5-6 centit, és hagyd teljesen visszaemelkedni.": "110 нажатий в минуту. Нажимай на середину грудной клетки в ритме сигнала, примерно на 5-6 сантиметров, и давай ей полностью подняться.",
  "Ez ütemadó, nem oktatás. Mentő: 112. Ha van a közelben defibrillátor, valaki hozza, de te ne hagyd abba.": "Это метроном, а не обучение. Скорая: 112. Если поблизости есть дефибриллятор, пусть кто-нибудь его принесёт, но ты не останавливайся.",
  "— egységes európai segélyhívó (mentő, tűzoltó, rendőrség). Térerő nélkül is hívható, ha van bármilyen hálózat a közelben.": "— единый европейский номер экстренных служб (скорая, пожарные, полиция). Позвонить можно даже без сигнала своего оператора, если поблизости есть любая сеть.",
  "A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan. Töltsd ki a": "Твоя карточка экстренной помощи (группа крови, аллергия, лекарства, контакт) быстро появляется здесь. Заполни в разделе",
  "szekcióban.": ".",
  "Írj be szöveget, játszd le hangként vagy fénnyel, vagy vegyél kamerával/mikrofonnal.": "Введи текст, воспроизведи его звуком или светом, либо прими камерой/микрофоном.",
  "Próbaidő: még 14 nap. A lejárat után sem áll le semmi.": "Пробный период: ещё 14 дней. После окончания ничего не отключится.",
  "Szöveg": "Текст",
  "Sebesség:": "Скорость:",
  "Ismétlés (folyamatos)": "Повтор (непрерывно)",
  "Lejátszás": "Воспроизведение",
  "Villogtatás (Lejátszás és SOS is):": "Мигание (и воспроизведение, и SOS):",
  "Képernyő": "Экран",
  "Vaku": "Вспышка",
  "Mindkettő": "Оба",
  "Vétel: KAMERA (fény → szöveg)": "Приём: КАМЕРА (свет → текст)",
  "Kamera vétel indítása": "Начать приём камерой",
  "Nagyítás (távoli fényhez):": "Увеличение (для дальнего света):",
  "Indítsd, és irányítsd a kamerát egy Morzét villogó fényre (pl. egy másik telefon vakuja). A háttér legyen sötét, a fény a kép KÖZEPÉN. A fény-küszöb magától hangolódik; a \"Fényerő\" sáv és a lámpa mutatja, mit lát. A \"Vétel sebesség\" csúszkát állítsd a vett Morze tempójához, amíg tisztán jönnek a betűk.": "Запусти и наведи камеру на свет, мигающий азбукой Морзе (например, вспышка другого телефона). Фон должен быть тёмным, свет — в ЦЕНТРЕ кадра. Порог света настраивается сам; полоса \"Яркость\" и лампа показывают, что он видит. Ползунок \"Скорость приёма\" подстрой под темп принимаемой Морзе, пока буквы не пойдут чётко.",
  "Vétel: MIKROFON (hang → szöveg)": "Приём: МИКРОФОН (звук → текст)",
  "Mikrofon vétel indítása": "Начать приём микрофоном",
  "FONTOS: külön eszközről vedd (az egyik telefon lejátssza, a másikon fut a vétel) -- ugyanazon a telefonon a mikrofon foglalása miatt a lejátszás halkul. Tartsd a Morze-hangot a mikrofon közelébe. Csendes környezet a legjobb; a hangerő-sáv és a lámpa mutatja, mit hall. Kalibrálás: a \"Vétel sebesség\" csúszkát told lassan, amíg a szövegben tisztán, hibátlanul jönnek a betűk.": "ВАЖНО: принимай с отдельного устройства (один телефон воспроизводит, на втором идёт приём) -- на том же телефоне воспроизведение тише из-за занятого микрофона. Держи звук Морзе рядом с микрофоном. Лучше всего тихая обстановка; полоса громкости и лампа показывают, что он слышит. Калибровка: медленно двигай ползунок \"Скорость приёма\", пока буквы в тексте не пойдут чётко и без ошибок.",
  "Tanuló: Morze → szöveg (kézi: illeszd be . és -, szóköz a betűk közt, / a szavak közt)": "Тренажёр: Морзе → текст (вручную: вставляй . и -, пробел между буквами, / между словами)",
  "A kétirányú kód-tábla (nemzetközi + magyar Á/É/Ö/Ü) és az interaktív tanuló a végleges appban bővül. Egyelőre a fenti mező visszafejt bármilyen beírt Morze-jelet.": "Двусторонняя таблица кодов (международная + венгерские Á/É/Ö/Ü) и интерактивный тренажёр будут расширены в финальном приложении. Пока поле выше расшифровывает любой введённый сигнал Морзе.",
  "Kép küldése hangként (Martin M1). Játszd egy másik telefon SSTV-vevőjébe vagy egy rádió mikrofonjába.": "Передача изображения звуком (Martin M1). Воспроизведи его в SSTV-приёмник другого телефона или в микрофон рации.",
  "Mód": "Режим",
  "Martin M1 (320×256, működik)": "Martin M1 (320×256, работает)",
  "Robot36 (hamarosan)": "Robot36 (скоро)",
  "Scottie S1 (hamarosan)": "Scottie S1 (скоро)",
  "PD120 (hamarosan)": "PD120 (скоро)",
  "Kép": "Изображение",
  "Kódolás és lejátszás": "Кодирование и воспроизведение",
  "Küldéshez: a másik eszközön indíts SSTV-vevőt (pl. Robot36 vagy MMSSTV) Martin M1 módban, és tartsd a hangszórót a mikrofonjához. A VIS-fejléc automatikus, a vevő magától felismeri a módot. Egy kép ~114 másodperc.": "Для передачи: на другом устройстве запусти SSTV-приёмник (например, Robot36 или MMSSTV) в режиме Martin M1 и держи динамик рядом с его микрофоном. Заголовок VIS передаётся автоматически, приёмник сам распознаёт режим. Одно изображение — около 114 секунд.",
  "Vétel (hang → kép)": "Приём (звук → изображение)",
  "Vétel indítása": "Начать приём",
  "Martin M1-et fogad. Tartsd a telefont a hangszóró vagy a rádió közelébe, és a kép soronként épül fel. Csendes környezet kell hozzá: a mikrofon minden mást is hall. Hangfájlból is megy, ha valaki felvételt küld.": "Принимает Martin M1. Держи телефон рядом с динамиком или рацией, и изображение будет строиться строка за строкой. Нужна тихая обстановка: микрофон слышит и всё остальное. Работает и из аудиофайла, если кто-то пришлёт запись.",
  "Készletezés": "Запасы",
  "Menedék és tábor": "Укрытие и лагерь",
  "Városi túlélés": "Городское выживание",
  "Tájékozódás és mozgás": "Ориентирование и передвижение",
  "Jelek és időjárás olvasása": "Чтение знаков и погоды",
  "Közlekedés és mobilitás": "Транспорт и мобильность",
  "Lelki felkészültség": "Душевная готовность",
  "Tartós áramszünet": "Длительное отключение электричества",
  "Tűzvédelem otthon": "Пожарная безопасность дома",
  "Pénz és megélhetés": "Деньги и средства к существованию",
  "Víznyerés és víztisztítás": "Добыча и очистка воды",
  "Mikro-önellátás": "Микро-самообеспечение",
  "Új tétel": "Новая позиция",
  "Mennyiség": "Количество",
  "Mennyiség (db)": "Количество (шт.)",
  "Súly (gramm/db)": "Вес (грамм/шт.)",
  "Vonalkód / QR beolvasása": "Сканировать штрихкод / QR",
  "Lejárat (opcionális)": "Срок годности (необязательно)",
  "Lejárat": "Срок годности",
  "Tétel adatlapja": "Карточка позиции",
  "Tétel törlése": "Удалить позицию",
  "+6 hónap": "+6 месяцев",
  "+1 év": "+1 год",
  "+2 év": "+2 года",
  "+5 év": "+5 лет",
  "Turista / domborzat": "Туристическая / рельеф",
  "Műhold": "Спутник",
  "Pont ide, ahol vagyok": "Точка там, где я",
  "Terület letöltése": "Скачать участок",
  "Koppints a térképre pont hozzáadásához (menedék, víz, találkozópont). Ha ott": "Нажми на карту, чтобы добавить точку (укрытие, вода, место встречи). Если ты",
  "állsz": "стоишь там",
  ", ahová a pont való, a": ", куда нужна точка,",
  "pontosabb: az a GPS-edet használja, nem azt, ahová az ujjad ér. A": "точнее: он использует твой GPS, а не то место, куда достаёт палец. Кнопка",
  "a mostani koordinátádat adja tovább üzenetben, a": "передаёт твои текущие координаты сообщением, а",
  "Pontok kimentése": "Экспорт точек",
  "pedig GPX-fájlba menti mindet, amit a térkép- és navigációs programok beolvasnak. A pontok és a jelenlegi pozíció helyben tárolódnak. A": "сохраняет их все в файл GPX, который читают картографические и навигационные программы. Точки и текущая позиция хранятся локально. Кнопка",
  "a most látható kivágást menti a készülékre, három nagyítási szinten — utána térerő nélkül is megvan.": "сохраняет видимый сейчас фрагмент на устройство в трёх уровнях масштаба — после этого он доступен и без связи.",
  "Rendszeres gyógyszerek": "Постоянные лекарства",
  "Rendszeres gyógyszer": "Постоянное лекарство",
  "Krónikus betegségek": "Хронические заболевания",
  "Krónikus betegség": "Хроническое заболевание",
  "Vészhelyzeti kontakt (név, telefon)": "Контакт для экстренных случаев (имя, телефон)",
  "QR-kód generálása": "Создать QR-код",
  "A QR a fenti adatokat kódolja. Kihelyezheted a zárolt képernyődre vagy kinyomtatva a hátizsákodba.": "QR кодирует приведённые выше данные. Можешь вывести его на экран блокировки или распечатать и положить в рюкзак.",
  "Mindenkinek, akinek van profilja a Háztartásnál. Az adat onnan jön: vércsoport, allergia, gyógyszer, betegség. A vészhelyzeti kontakt a fenti közös mezőből.": "Для всех, у кого есть профиль в разделе «Домохозяйство». Данные берутся оттуда: группа крови, аллергия, лекарства, заболевания. Контакт для экстренных случаев — из общего поля выше.",
  "Még nincs profil. A Háztartásnál vedd fel, kik vagytok — mindenki kap egy kártyát.": "Профилей пока нет. Добавь в разделе «Домохозяйство», кто вы — каждый получит карточку.",
  "Mind nyomtatása": "Печать всех",
  "Megtérő ima": "Молитва покаяния",
  "Letöltés": "Скачать",
  "halvány": "бледный",
  "erős": "яркий",
  "É": "С",
  "az üvegről olvasd le": "посмотри на бутылке",
  "‹ Fejezetek": "‹ Главы",
  "‹ Előző": "‹ Предыдущая",
  "Következő ›": "Следующая ›",
  "A kiemeléseidhez előbb töltsd le a Bibliát.": "Для своих выделений сначала скачай Библию.",
  "A teljes Károli-fordítás egyszer letöltődik (kb. 4 MB), és utána internet nélkül is elérhető marad.": "Полный перевод Карои скачивается один раз (около 4 МБ), после чего остаётся доступным без интернета.",
  "Vészhelyzeti igék": "Стихи для экстренных ситуаций",
  "Próféciák": "Пророчества",
  "Kiemeléseim": "Мои выделения",
  "Token tárca": "Кошелёк токенов",
  "Titkos kódok PIN mögött, helyben tárolva. Ugyanaz a PIN nyitja, mint az Irattárcát.": "Секретные коды за PIN-кодом, хранятся локально. Открывает тот же PIN, что и Кошелёк документов.",
  "Új PIN (4-6 számjegy)": "Новый PIN (4-6 цифр)",
  "TESZT ÜZEMMÓD: a PIN most": "ТЕСТОВЫЙ РЕЖИМ: PIN сейчас",
  ", előre kitöltve. Éles használat előtt ez kikerül, és saját PIN-t adsz meg.": ", заполнен заранее. Перед реальным использованием это будет убрано, и ты задашь свой PIN.",
  "A web-demó nem ad operációs rendszer szintű titkosítást: a kódok a böngésző tárolójában vannak. Valódi seed-mondatot vagy éles banki kódot majd a végleges appba tegyél (biometrikus zár, titkosított tár). Itt a folyamatot próbáld ki. A teljes mentésbe ez a rész SOSEM kerül bele.": "Веб-демо не даёт шифрования на уровне операционной системы: коды лежат в хранилище браузера. Настоящую seed-фразу или банковский код клади уже в финальное приложение (биометрический замок, зашифрованное хранилище). Здесь попробуй сам процесс. В полную резервную копию эта часть НИКОГДА не попадает.",
  "Súgó — hogyan fizetek, hogyan kérek": "Справка — как платить, как запрашивать",
  "Fizetés, három lépés.": "Платёж, три шага.",
  "1. Ő megmutatja az azonosító-QR-jét, vagy küld egy kérést. Te beolvasod: ettől nálad kitöltődik az űrlap.": "1. Он показывает свой QR-код личности или присылает запрос. Ты сканируешь: после этого форма у тебя заполняется.",
  "2. Megadod az összeget és hogy miért, majd Fizetés elkészítése. A telefonod aláírja, és mutat egy QR-t.": "2. Вводишь сумму и назначение, затем «Подготовить платёж». Твой телефон подписывает его и показывает QR-код.",
  "Ő beolvassa ezt a QR-t.": "Он сканирует этот QR-код.",
  "Az érték ekkor kerül át hozzá — a telefonja ellenőrzi az aláírást, és jóváírja.": "Именно тогда стоимость переходит к нему — его телефон проверяет подпись и зачисляет её.",
  "Pénzkérés.": "Запрос денег.",
  "Kérek gírát, beírod mennyit és miért, kapsz egy QR-t. Ő beolvassa, és nála kitöltve áll a fizetés, csak jóvá kell hagynia.": "Запроси гиру, введи сколько и зачем, получишь QR-код. Он сканирует, и платёж у него уже заполнен — остаётся только подтвердить.",
  "Miért két beolvasás?": "Почему два сканирования?",
  "Mert az ő kódja csak azt mondja meg, kinek és mennyit. Az értéket a te aláírásod viszi át, és az a te QR-edben van. Amíg ő nem olvasta be, a tétel nálad „átadásra vár” jelöléssel áll.": "Потому что его код говорит лишь, кому и сколько. Стоимость переносит твоя подпись, а она в твоём QR-коде. Пока он не отсканировал, запись у тебя стоит с пометкой „ожидает передачи”.",
  "Minden a két telefon között megy, kamerával és képernyővel. Se szerver, se térerő.": "Всё происходит между двумя телефонами, через камеру и экран. Ни сервера, ни связи.",
  "Van, ahol a böngésző nem tud QR-t olvasni (jellemzően iPhone Safari). Ilyenkor a Beillesztés szövegből gomb ugyanazt tudja: a fizetés elkészítése után a QR alatti Szöveg másolása gombbal átküldöd a tételt üzenetben, ő pedig a Beillesztés szövegből gombbal beveszi. Az ellenőrzés ugyanúgy megtörténik, az aláírás a szövegben is benne van.": "Бывает, что браузер не умеет читать QR-коды (обычно Safari на iPhone). Тогда кнопка «Вставить из текста» делает то же самое: после подготовки платежа кнопкой «Копировать текст» под QR-кодом отправляешь запись сообщением, а он принимает её кнопкой «Вставить из текста». Проверка происходит так же, подпись содержится и в тексте.",
  "a nevedben más nem tud fizetni (a titkos kulcs a telefonodon marad), és egy aláírt tétel utólag nem módosítható észrevétlenül.": "от твоего имени никто другой заплатить не может (секретный ключ остаётся на твоём телефоне), а подписанную запись невозможно незаметно изменить задним числом.",
  "offline a kettős költést megelőzni nem lehet. Ha valaki ugyanazt a gírát két embernek adja, az akkor derül ki, amikor a két tétel találkozik — és a saját aláírása bizonyítja. Ezért érdemes időnként összefésülni a könyveket a közösségben.": "офлайн предотвратить двойную трату невозможно. Если кто-то отдаст ту же гиру двум людям, это выяснится, когда две записи встретятся — и его собственная подпись это докажет. Поэтому стоит время от времени сверять книги в сообществе.",
  "Rekesz": "Отделение",
  "Kripto-kulcsok": "Крипто-ключи",
  "Új bejegyzés": "Новая запись",
  "Seed-mondatnál a papír-másolat nem elavult ötlet: egy elveszett vagy letörölt telefon a kulcsot is viszi. Amit ide beírsz, azt tartsd meg máshol is.": "Для seed-фразы бумажная копия — не устаревшая идея: потерянный или стёртый телефон забирает и ключ. То, что вводишь сюда, храни и где-то ещё.",
  "PIN-nel védett helyi tároló okmányokhoz (szig, jogosítvány, TAJ, biztosítás, forgalmi).": "Защищённое PIN-кодом локальное хранилище для документов (паспорт, права, медицинская карта, страховка, техпаспорт).",
  "A PIN és a dokumentumok CSAK ezen az eszközön, a böngésződben tárolódnak — a vészkártyával ellentétben ezt csak te nyithatod meg. Figyelem: a web-demó nem nyújt OS-szintű titkosítást; VALÓDI okmányokat majd a végleges appba tölts (biometrikus zár, titkosított tár). Itt a folyamatot teszteld.": "PIN и документы хранятся ТОЛЬКО на этом устройстве, в твоём браузере — в отличие от карточки экстренной помощи, это можешь открыть только ты. Внимание: веб-демо не обеспечивает шифрование на уровне ОС; НАСТОЯЩИЕ документы загружай уже в финальное приложение (биометрический замок, зашифрованное хранилище). Здесь испытай сам процесс.",
  "Szűrés: kinek az iratait mutassuk": "Фильтр: чьи документы показать",
  "Új dokumentum": "Новый документ",
  "Ehhez a dokumentumhoz: kié? Személy, állat vagy jármű. Ha egyiket sem jelölöd, közösként mentjük.": "К этому документу: чей он? Человек, животное или транспорт. Если не отметишь ни одного, сохраним как общий.",
  "Magyar": "Magyar",
  "véglegesen": "навсегда",
  "szól erre a készülékre, nincs lejárata és nincs megújítás. Ha kódot kaptál, itt válthatod be.": "действует на этом устройстве, без срока и без продления. Если ты получил код, здесь можешь его активировать.",
  "Kód beváltása": "Активировать код",
  "Névjegy": "О приложении",
  "PrepperPapa — vészhelyzeti prepper eszköztár.": "PrepperPapa — набор инструментов для чрезвычайных ситуаций.",
  "Verzió:": "Версия:",
  "Web-demo a gyors próbához. A végleges app: Flutter, Google Play.": "Веб-демо для быстрой пробы. Финальное приложение: Flutter, Google Play.",
  "Teljes fejadattal számol: 3 liter fő/nap. Ez a helyben maradáshoz és az autós úthoz való — nyaraló, tábor, otthon.": "Считает по полной норме: 3 литра на человека в день. Это для пребывания на месте и для поездки на машине — дача, лагерь, дом.",
  "Ki tartozik a háztartáshoz és hol vannak a helyszíneid. A készültségi számítás ebből dolgozik.": "Кто входит в домохозяйство и где твои локации. Расчёт готовности работает с этих данных.",
  "Még nincs családtag felvéve.": "Члены семьи ещё не добавлены.",
  "Még nincs állat felvéve.": "Животные ещё не добавлены.",
  "Még nincs jármű felvéve. Autó, kisbusz, lakókocsi vagy hajó lehet.": "Транспорт пока не добавлен. Это может быть автомобиль, микроавтобус, дом на колёсах или лодка.",
  "Még nincs helyszín felvéve. Alapesetben az otthon az első.": "Локации ещё не добавлены. По умолчанию дом идёт первым.",
  "Születési dátum": "Дата рождения",
  "Ki ő": "Кто он",
  "kiskorú": "несовершеннолетний",
  "Neme (gyereknél)": "Пол (для ребёнка)",
  "lány": "девочка",
  "kutya": "собака",
  "macska": "кошка",
  "Teherbírás (kg)": "Грузоподъёмность (кг)",
  "Testtömeg (kg)": "Масса тела (кг)",
  "Laktóz": "Лактоза",
  "Tojás": "Яйцо",
  "Szója": "Соя",
  "Penicillin": "Пенициллин",
  "Pollen": "Пыльца",
  "Poratka": "Пылевой клещ",
  "Latex": "Латекс",
  "Jód": "Йод",
  "Típus": "Тип",
  "· vagy egy bemásolt Google Térkép-link. Ha nem tudom értelmezni, szólok — üresen nem mentem el.": "· или вставленная ссылка на Google Карты. Если я не смогу её разобрать, сообщу — пустым не сохраню.",
  "Megközelítés": "Подъезд",
  "nem (csak árammal/gázzal)": "нет (только с электричеством/газом)",
  "Víz áram nélkül is?": "Вода и без электричества?",
  "nem (vezetékes/szivattyús)": "нет (водопровод/насос)",
  "Napi fűtésigény (kWh)": "Суточная потребность в отоплении (кВт·ч)",
  "Kijáratok száma": "Число выходов",
  "Több": "Ещё",
  "Morze · fax · helyi szoba": "Морзе · факс · локальная комната",
  "Térkép": "Карта",
  "Kockázatelemzés": "Оценка рисков",
  "Mit vigyek?": "Что взять?",
  "Titkosított üzenet · helyzet · lista": "Зашифрованное сообщение · местоположение · список",
  "Ezen a készüléken a böngésző nem éri el a légnyomás-szenzort, ezért kézzel kell bevinni az értéket. A telefonos appban magától mér majd. Addig is: írj be egy értéket, és a trendet innentől számolja.": "На этом устройстве браузер не имеет доступа к датчику давления, поэтому значение нужно вводить вручную. В мобильном приложении измерение будет автоматическим. А пока: введи значение, и тенденцию будем считать от него.",
  "Két mérés kell a trendhez.": "Для тенденции нужны два измерения.",
  "Az első mérés óta eltelt idő:": "Прошло с первого измерения:",
  "Trendet húsz perctől mondok.": "Тенденцию показываю начиная с двадцати минут.",
  "Hézag van a mérésekben. Az előző mérés óta eltelt:": "В измерениях есть пробел. Прошло с предыдущего измерения:",
  "A hézag óta eltelt idő:": "Прошло после пробела:",
  "Közelítő trend: az utóbbi órákban hézag van a mérésekben, ezért az ablak elejét a hézag előtti utolsó mérésből számoltam.": "Приблизительная тенденция: в последние часы в измерениях есть пробел, поэтому начало окна рассчитано по последнему измерению перед пробелом.",
  "Ha autóval hegyre mész, a nyomás esik, de nem jön vihar: száz méter emelkedés körülbelül 12 hPa. Ilyen napon ne vedd komolyan a jelzést.": "Если едешь на машине в горы, давление падает, но буря не идёт: сто метров подъёма — примерно 12 гПа. В такой день не воспринимай сигнал всерьёз.",
  "Kalkulátor": "Калькулятор",
  "Meddig visz el egy powerbank vagy egy akku": "Насколько хватит павербанка или аккумулятора",
  "Mennyi fa vagy gáz kell N napra": "Сколько дров или газа нужно на N дней",
  "Mennyi gyűlik össze a tetőről": "Сколько наберётся с крыши",
  "Menetidő": "Время в пути",
  "Meddig tart gyalog, és odaérsz-e világosban": "Сколько идти пешком и успеешь ли засветло",
  "Villám": "Молния",
  "Milyen messze van a vihar": "Насколько далеко гроза",
  "Víztisztítás": "Очистка воды",
  "Mennyi hipó kell, és meddig kell forralni": "Сколько нужно отбеливателя и сколько кипятить",
  "Mennyi víz": "Сколько воды",
  "Milyen a víz": "Какая вода",
  "Tiszta, átlátszó": "Чистая, прозрачная",
  "Zavaros, hideg vagy színes": "Мутная, холодная или цветная",
  "Tengerszint feletti magasság (méter)": "Высота над уровнем моря (метров)",
  "Saját / kézi megadás": "Своё / ввод вручную",
  "Powerbank 20 000 mAh (~74 Wh)": "Павербанк 20 000 мА·ч (~74 Вт·ч)",
  "Kapacitás (Wh)": "Ёмкость (Вт·ч)",
  "Max. teljesítmény (W)": "Макс. мощность (Вт)",
  "Jackery Explorer 1000: 1002 Wh tárolt energia, 1000 W folyamatos kimenet": "Jackery Explorer 1000: 1002 Вт·ч накопленной энергии, 1000 Вт постоянной выходной мощности",
  "Mit üzemeltetnél? (hány darab · watt · naponta mennyit)": "Что хочешь запитать? (сколько штук · ватт · сколько в день)",
  "nem használom": "не использую",
  "negyed óra": "четверть часа",
  "fél óra": "полчаса",
  "1 óra": "1 час",
  "2 óra": "2 часа",
  "3 óra": "3 часа",
  "4 óra": "4 часа",
  "5 óra": "5 часов",
  "6 óra": "6 часов",
  "8 óra": "8 часов",
  "10 óra": "10 часов",
  "12 óra": "12 часов",
  "16 óra": "16 часов",
  "egész nap": "весь день",
  "Telefon töltés": "Зарядка телефона",
  "LED lámpa": "Светодиодная лампа",
  "Wifi router": "Wi-Fi роутер",
  "Rádió, PMR": "Рация, PMR",
  "Laptop": "Ноутбук",
  "TV": "Телевизор",
  "Szivattyú, kút": "Насос, колодец",
  "Vízforraló": "Электрочайник",
  "Van napelemed?": "Есть солнечная панель?",
  "Melyik évszakban?": "В какое время года?",
  "Milyen idő van?": "Какая погода?",
  "A panel névleges teljesítménye (W)": "Номинальная мощность панели (Вт)",
  "+ Saját eszköz hozzáadása": "+ Добавить своё устройство",
  "Mi ez? (pl. oxigénkoncentrátor)": "Что это? (напр. кислородный концентратор)",
  "Megnézem a boltban ↗": "Посмотреть в магазине ↗",
  "nyár (június-augusztus)": "лето (июнь-август)",
  "tavasz (március-május)": "весна (март-май)",
  "ősz (szeptember-november)": "осень (сентябрь-ноябрь)",
  "tél (december-február)": "зима (декабрь-февраль)",
  "derült, napos": "ясно, солнечно",
  "változó, felhős": "переменно, облачно",
  "borult, esős": "пасмурно, дождливо",
  "nincs napelem": "нет солнечной панели",
  "saját panel — megadom a wattot": "своя панель — укажу ватты",
  "Panel": "Панель",
  "Milyen a ház": "Какой дом",
  "Jól szigetelt (60 W/m²)": "Хорошо утеплённый (60 Вт/м²)",
  "Rossz, régi (140 W/m²)": "Плохой, старый (140 Вт/м²)",
  "Mivel fűtesz": "Чем отапливаешь",
  "PB-gáz palackkal": "Газовым баллоном",
  "Tetőfelület vízszintes vetülete (m²)": "Горизонтальная проекция площади крыши (м²)",
  "Mennyi eső esett vagy várható (mm)": "Сколько дождя выпало или ожидается (мм)",
  "Menetidő gyalog": "Время в пути пешком",
  "Távolság (km)": "Расстояние (км)",
  "Milyen terep": "Какой рельеф",
  "Jó út, sík (5 km/h)": "Хорошая дорога, равнина (5 км/ч)",
  "Ösvény, erdei út (4 km/h)": "Тропа, лесная дорога (4 км/ч)",
  "Nehéz terep, hó, sár (3 km/h)": "Тяжёлый рельеф, снег, грязь (3 км/ч)",
  "Mit viszel": "Что несёшь",
  "Könnyű, napi cucc": "Лёгкие, повседневные вещи",
  "Megpakolt hátizsák": "Полный рюкзак",
  "Nehéz teher vagy gyerekkel": "Тяжёлый груз или с ребёнком",
  "Villám: milyen messze van": "Молния: насколько далеко",
  "Nyomd meg a villanáskor, aztán újra, amikor meghallod a dörgést.": "Нажми при вспышке, а потом ещё раз, когда услышишь гром.",
  "Villanás": "Вспышка",
  "Jelszó": "Пароль",
  "Jelszó mentése": "Сохранить пароль",
  "Nincs saját jelszó.": "Своего пароля нет.",
  "beállítva": "задан",
  "Tudástár: a cikkekből most már tizennyolc helyen gomb vezet át az app funkcióira (Készlet, Vészkártya, Kockázatelemzés, Tudástár).": "База знаний: теперь в восемнадцати местах кнопки ведут из статей к функциям приложения (Запасы, Экстренная карта, Анализ рисков, База знаний).",
  "Irattárca és Token tárca: a tartalom mostantól titkosítva tárolódik, a kulcs a PIN-edből készül, a PIN-t nem tároljuk. Az első belépéskor a meglévő adatod magától átkerül titkosított formába. Fontos: elfelejtett PIN mellett a tartalom nem állítható vissza.": "Хранилище документов и токен-кошелёк: содержимое теперь хранится в зашифрованном виде, ключ создаётся из твоего PIN-кода, сам PIN не сохраняется. При первом открытии существующие данные автоматически переводятся в зашифрованный вид. Важно: если забудешь PIN, содержимое восстановить нельзя.",
  "A kódok titkosítva tárolódnak ezen az eszközön: a kulcs a PIN-edből készül (AES-256), magát a PIN-t nem tároljuk. Ha elfelejted a PIN-t, a tartalom nem állítható vissza, ezért a seed-mondatról tarts papírmásolatot is. A teljes mentésbe ez a rész SOSEM kerül bele.": "Коды хранятся на этом устройстве в зашифрованном виде: ключ создаётся из твоего PIN-кода (AES‑256), сам PIN не сохраняется. Если забудешь PIN, содержимое восстановить нельзя, поэтому храни бумажную копию сид-фразы. Этот раздел НИКОГДА не попадает в полную резервную копию.",
  "A dokumentumok CSAK ezen az eszközön tárolódnak, a PIN-edből képzett kulccsal titkosítva (AES-256) — a vészkártyával ellentétben ezt csak te nyithatod meg. A PIN-t nem tároljuk: ha elfelejted, a dokumentumok nem állíthatók vissza.": "Документы хранятся ТОЛЬКО на этом устройстве, зашифрованные ключом из твоего PIN-кода (AES‑256), — в отличие от экстренной карты, открыть их можешь только ты. PIN не сохраняется: если забудешь его, документы восстановить нельзя.",
  "Tudástár: a cikkekben álló hivatkozások (például „a 20.2 cikk”) kattinthatók, és a cikkekből gomb vezet át az app megfelelő funkciójára.": "База знаний: ссылки в статьях (например, «статья 20.2») кликабельны, а кнопки в статьях ведут к нужной функции приложения.",
  "Vagyonkezelő: új, választós oldalak saját legördülő listával.": "Имущество: новые страницы выбора с собственным выпадающим списком.",
  "Térkép, navigáció: alul egy sáv mutatja a hátralévő és a megtett utat, a sebességet és a várható érkezést; a sarkában a leállító gomb.": "Карта, навигация: внизу полоса показывает оставшееся и пройденное расстояние, скорость и ожидаемое прибытие; в углу кнопка остановки.",
  "Térkép, navigáció: tervezett útvonalon a ▲ gomb megnyitja a szintgrafikont: hol vagy, merre emelkedik vagy lejt az út, mennyit kell még mászni, és mikor jön a következő emelkedő.": "Карта, навигация: на запланированном маршруте кнопка ▲ открывает профиль высоты: где вы, где маршрут поднимается или спускается, сколько подъёма осталось и когда следующий подъём.",
  "Tudástár: ötvenegy új kép került a cikkekbe, így már mind a kilencvenkilenc cikkben legalább két kép van.": "База знаний: пятьдесят одно новое изображение, теперь во всех девяноста девяти статьях не меньше двух изображений.",
  "Közös ima · stopper": "Совместная молитва · таймер",
  "Folytatás": "Продолжить",
  "Újra": "Ещё раз",
  "Letelt az idő. Az Újra gombbal még egy kör indul.": "Время вышло. Нажмите «Ещё раз» для следующего круга.",
  "Vége. Az Újra gombbal elölről kezdheted.": "Готово. «Ещё раз» начнёт сначала.",
  "Második kör": "Второй круг",
  "Ima-stopper": "Таймер молитвы",
  "Útvonal": "Маршрут",
  "Körút": "Кольцевой",
  "igen": "да",
  "MTSZ-szám": "№ MTSZ",
  "Jelzés festve": "Маркировка нанесена",
  "Weboldal": "Сайт",
  "Az út mentén": "Вдоль маршрута",
  "menetidő": "время в пути",
  "érkezés": "прибытие",
  "ó": "ч",
  "p": "мин",
  "Magassági adat nélkül, az emelkedőkkel nem számolva.": "Без данных о высоте, подъёмы не учтены.",
  "Imák: a lista alján egy kis harang gomb nyitja a közös imához való stoppert. Te állítod be a perceket; lejáratkor halkan csilingel, és amíg nem nyúlsz hozzá, tízmásodpercenként újra jelez. Az Újra gomb még egy kört indít, annak a végén egyszer csilingel, és leáll.": "Молитвы: маленькая кнопка с колокольчиком внизу списка открывает таймер для совместной молитвы. Вы задаёте минуты; по окончании он тихо звенит и повторяет каждые десять секунд, пока вы его не коснётесь. «Ещё раз» запускает ещё один круг, который в конце звенит один раз и останавливается.",
  "Imák: a stopper harang gombja az app saját ikon-stílusát kapta.": "Молитвы: кнопка-колокольчик таймера теперь в стиле значков приложения.",
  "Tudástár: harminckilenc új kép került a prémium cikkekbe, így már szinte minden cikkben van kép.": "База знаний: в премиум-статьи добавлено тридцать девять новых изображений, теперь почти в каждой статье есть изображение.",
  "Tudástár: a már letöltött prémium cikkek is frissülnek, ha új változat jelenik meg. A PMR446 cikkbe bekerült a csatornák frekvencia-táblázata és a digitális PMR.": "База знаний: уже загруженные премиум-статьи теперь обновляются, когда выходит новая версия. В статью о PMR446 добавлены таблица частот каналов и цифровой PMR.",
  "Tudástár: tizenöt prémium cikkben megjelentek a képek, tizenegy cikk új képet kapott.": "База знаний: в пятнадцати премиум-статьях теперь видны изображения, одиннадцать статей получили новое изображение.",
  "Újdonságok: a korábbi bejegyzések is olvashatók most már minden nyelven.": "Новое: прежние записи теперь тоже можно прочитать на любом языке.",
  // Ujdonsagok v43.126-v43.138 (2026-10-12 22:1x, hianypotlas)
  "Szobák: ha a „Csak neki” címzés látszik, az üzenet biztosan privátként megy el. Ha a címzés egy másik szobából maradt itt, az app nem küldi el csoportba, hanem szól, hogy válaszd ki újra a címzettet.": "Комнаты: если видна адресация «Только для», сообщение точно уйдёт как личное. Если адресация осталась из другой комнаты, приложение не отправит его в группу, а попросит выбрать получателя заново.",
  "Vagyonkezelő: az euró, a dollár és a nemesfémek árfolyama internet mellett magától frissül (a Magyar Nemzeti Bank és a tőzsdei ár alapján). A kézzel beírt érték marad.": "Имущество: курсы евро, доллара и драгоценных металлов при подключении к интернету обновляются сами (по данным Национального банка Венгрии и биржевым ценам). Значение, введённое вручную, сохраняется.",
  "Vagyonkezelő: kikerültek belőle a cégspecifikus részek, csak az általános pénzügyi funkciók maradtak.": "Имущество: из него убраны части, относящиеся к компании, остались только общие финансовые функции.",
  "Vagyonkezelő: bal oldali menü (a bal felső gombbal). Minden menüpont egy témát mutat, így nem kell végtelen hosszan görgetni. A főoldalon a számlák egyenlege csempékben.": "Имущество: меню слева (кнопкой в левом верхнем углу). Каждый пункт меню показывает одну тему, поэтому не нужно бесконечно прокручивать. На главной странице остатки на счетах в плитках.",
  "Visszajelzés: a „Bejelentéseim” alatt látod a saját bejelentéseidet, és hogy hol tart mindegyik. A kijavított hibánál egy koppintással jelezheted, hogy nálad is működik-e.": "Обратная связь: в разделе «Мои сообщения» видны твои собственные сообщения и на каком этапе каждое из них. При исправленной ошибке одним касанием можно подтвердить, работает ли у тебя.",
  "Újdonságok: verziónként itt olvasható, mi változott és mi lett javítva.": "Новое: здесь по версиям можно прочитать, что изменилось и что исправлено.",
  "Biblia: egyszerre több olvasási tervet is követhetsz, a „Másik terv” gombbal válthatsz köztük. A haladás tervenként megmarad.": "Библия: можно следовать нескольким планам чтения одновременно и переключаться между ними кнопкой «Другой план». Прогресс сохраняется для каждого плана.",
  "Biblia: „A Biblia egy év alatt” heti felosztásban is választható, 52 hétre bontva.": "Библия: «Библия за год» доступна и в недельной разбивке, на 52 недели.",
  "Biblia: a „Terv leállítása” gomb a terv tetején is ott van, nem kell a lista aljáig görgetni érte.": "Библия: кнопка «Остановить план» теперь есть и вверху плана, не нужно прокручивать до конца списка.",
  "Biztonsági javítások a Szobákban és a prémium tartalmak védelmében.": "Исправления безопасности в Комнатах и в защите премиум-материалов.",
  "Szobák: elrejtett üzenetről már nem jön értesítés.": "Комнаты: о скрытых сообщениях уведомления больше не приходят.",
  "Gíra: ha a névjegy elsőre nem ért célba, magától újra elküldődik.": "Гира: если визитная карточка не дошла с первого раза, она отправляется повторно автоматически.",
  "Gíra: a közösséghez később csatlakozó tag is megkapja a közösség jelzéseit.": "Гира: участник, присоединившийся к сообществу позже, тоже получает сигналы сообщества.",
  "A kezdőképernyőre tett webes ikon ugyanaz lett, mint a telepített alkalmazásé.": "Веб-значок, добавленный на главный экран, теперь такой же, как у установленного приложения.",
  "Térkép: a funkciók ikonos csempékben jelennek meg, az iránytű folyamatosan forog.": "Карта: функции отображаются плитками со значками, компас вращается непрерывно.",
  "Szobák: a tagok egymásnak is átadhatják a szoba titkosító kulcsát, így új eszközön is olvasható minden korábbi üzenet.": "Комнаты: участники могут передавать друг другу ключ шифрования комнаты, поэтому на новом устройстве читаются все прежние сообщения.",
  "Titkos QR: a családi jelszó egy összecsukható sor lett az oldal tetején, színes jelzéssel (be van-e állítva). Így az oldal rögtön a kód készítésével kezdődik.": "Секретный QR: семейный пароль теперь — сворачиваемая строка вверху страницы с цветной отметкой (задан ли он). Поэтому страница сразу начинается с создания кода.",
  "Közös jelszó: koppints a Családi jelszó sorra, és adj meg egy mondatot, amit csak ti tudtok. Ugyanaz kell mindkét telefonon; mentsd el.": "Общий пароль: нажми на строку «Семейный пароль» и введи фразу, которую знаете только вы. На обоих телефонах нужен один и тот же; сохрани его.",
  "nincs beállítva": "не задан",
  "Saját jelszó nélkül a beépített kulcs véd, ami MINDEN PrepperPapa-készüléken megvan. Az idegen, aki sima szkennerrel ránéz, csak betűsort lát, de aki letöltötte az appot, elolvassa. Ez álcázás, nem titkosítás.": "Без своего пароля защищает встроенный ключ, который есть на КАЖДОМ устройстве с PrepperPapa. Посторонний с обычным сканером увидит лишь набор букв, но тот, кто скачал приложение, прочитает. Это маскировка, а не шифрование.",
  "Kód készítése": "Создать код",
  "Mit teszel bele?": "Что положишь внутрь?",
  "Lista": "Список",
  "Személyes adat": "Личные данные",
  "Koordináta": "Координаты",
  "Lista címe": "Название списка",
  "Sorok (soronként egy)": "Строки (по одной в строке)",
  "QR készítése": "Создать QR",
  "Morze fénnyel": "Морзе светом",
  "Morze hanggal": "Морзе звуком",
  "Rádión ne add le.": "Не передавай по рации.",
  "Az amatőr sávokon tilos információrejtő módszert alkalmazni (15/2013. NMHH rendelet 15. § (6) e)), és a forgalmazást közérthető nyelven kell folytatni (15. § (4)). Ez a kód egyikbe sem fér bele, és a saját jelszó nélkül készült változatra is áll. Morzézni szabad, rejtett tartalmat leadni nem. QR-kódban, papíron, kézből átadva használható.": "На любительских диапазонах запрещено применять методы сокрытия информации (постановление NMHH 15/2013, § 15 (6) e)), а обмен должен вестись на понятном языке (§ 15 (4)). Этот код не укладывается ни в одно из требований, и это относится и к варианту, созданному без своего пароля. Передавать азбукой Морзе можно, скрытое содержимое — нет. В QR-коде, на бумаге, из рук в руки — можно.",
  "Kód beolvasása": "Считать код",
  "Vagy írd be a betűsort (morzéból, faxról)": "Или введи строку букв (из Морзе, с факса)",
  "Megfejtés": "Расшифровка",
  "Ahogy üzenni tudsz, amikor a telefonhálózat nem segít. Válaszd ki, mivel próbálkozol: a helyi szoba szöveget visz a közeledben lévőknek, a hang pedig ott is átmegy, ahol semmilyen hálózat nincs.": "Как передать весть, когда телефонная сеть не помогает. Выбери, чем попробуешь: локальная комната передаёт текст тем, кто рядом, а звук проходит и там, где никакой сети нет.",
  "szöveg, hálón": "текст, в сети",
  "Szöveg a közeledben lévőknek, közös hálón, internet nélkül": "Текст для тех, кто рядом, в общей сети, без интернета",
  // MESH (Fonok, 2026-10-06 21:44 es 21:47): a helyi szoba neve es leirasa a mesh-halozatot
  // is kimondja -- ez ugyanaz a szoba, csak a nevevel egyutt most a technologiat is viszi.
  "Helyi szoba (mesh)": "Локальная комната (mesh)",
  "Mesh-hálózat: szöveg a közeledben lévőknek, internet nélkül": "Mesh-сеть: текст тем, кто рядом, без интернета",
  "Szobák (interneten)": "Комнаты (через интернет)",
  "Zárt csoportok távolról is, belépés a szoba gazdájának jóváhagyásával": "Закрытые группы даже на расстоянии, вход по согласию владельца комнаты",
  "Rövid üzenet hanggal vagy fénnyel, vétel kamerával és mikrofonnal": "Короткое сообщение звуком или светом, приём камерой и микрофоном",
  "Kép átküldése hangban, rádión is": "Передача изображения звуком, в том числе по рации",
  "névtelen (te)": "аноним (ты)",
  "Ez a modul akkor működik, ha a készülékek egy hálón vannak, és azon valaki futtatja a szobát. Internet nem kell hozzá.": "Этот модуль работает, если устройства в одной сети и кто-то в ней запустил комнату. Интернет для этого не нужен.",
  "kapcsold be a telefonodon a mobil hotspotot (vagy használjatok egy közös routert), a többiek csatlakozzanak rá, és nyissák meg ugyanazt a címet, amit te. Aki megnyitotta, az bent van a szobában.": "включи на своём телефоне мобильную точку доступа (или воспользуйтесь общим роутером), остальные пусть подключатся к ней и откроют тот же адрес, что и ты. Кто открыл, тот уже в комнате.",
  "Közös jelszó. Aki ugyanezt adja meg, az olvassa az üzeneteket, akinek nincs meg, annak értelmetlen betűsor marad. A kulcsot NE a szobában küldd el, hanem élőszóban vagy papíron add át.": "Общий пароль. Кто введёт такой же, читает сообщения; у кого его нет, для того останется бессмысленный набор букв. Ключ НЕ отправляй в комнате — передай устно или на бумаге.",
  "Nincs kulcs. Az üzenetek nyíltan mennek: aki a hálón van és megnyitja a szobát, olvassa őket.": "Ключа нет. Сообщения идут открыто: кто в сети и откроет комнату, тот их читает.",
  "Szobák": "Комнаты",
  "Még egy szobában sem vagy benne.": "Ты ещё ни в одной комнате.",
  "Nyitott közösségek. Egy koppintás, és megy a jelentkezésed — a szoba gazdája engedi be.": "Открытые сообщества. Одно нажатие — и заявка ушла; впускает владелец комнаты.",
  "Új szoba": "Новая комната",
  "Te leszel a gazdája. Aki csatlakozni akar, kérelmet küld, és te döntöd el, beengeded-e. A szoba kódját add meg nekik, azzal találnak rá.": "Ты будешь её владельцем. Кто захочет присоединиться, пришлёт заявку, и ты решишь, впускать ли. Дай им код комнаты — по нему они её найдут.",
  "Szoba létrehozása": "Создать комнату",
  "Írd be a szoba kódját. A gazda jóváhagyásáig nem látod az üzeneteket.": "Введи код комнаты. До согласия владельца ты не видишь сообщений.",
  "Kérelem küldése": "Отправить заявку",
  "A böngészőben letiltottad az értesítést. A telefon beállításainál lehet visszaadni — innen nem tudom.": "Ты запретил уведомления в браузере. Вернуть можно в настройках телефона — отсюда я не могу.",
  "Próba": "Проба",
  "Szoba": "Комната",
  "Kapcsolódás...": "Соединение...",
  "Sürgős": "Срочно",
  "Meghívó": "Приглашение",
  "Készíts egy meghívót, és küldd át annak, akit be akarsz hívni. Ő megnyitja, és bent van — nem kell külön jóváhagynod, és nem kell a szoba kódját közhírré tenni.": "Создай приглашение и отправь тому, кого хочешь позвать. Он откроет его — и уже внутри: отдельно подтверждать не надо, и код комнаты разглашать тоже.",
  "Meghívó készítése": "Создать приглашение",
  "Vagy legyen nyitott:": "Или пусть будет открытой:",
  "ha kirakod, a szoba megjelenik mindenkinél a „Csatlakozz\" listában, és jelentkezni tudnak rá. Beengedni akkor is te engeded be őket.": "если выставишь её, комната появится у всех в списке „Присоединиться\", и они смогут подавать заявки. Впускаешь их всё равно ты.",
  "Jelenjen meg a Csatlakozz listában": "Показывать в списке «Присоединиться»",
  "Ez látszik a csempén, ezen ismerik fel. Fényképet válassz, ne rajzot — kis méretben az mond valamit. A telefonod a képet magától lekicsinyíti.": "Это видно на плитке, по нему её узнают. Выбери фотографию, а не рисунок — в маленьком размере именно она что-то говорит. Твой телефон уменьшит изображение сам.",
  "Kép törlése": "Удалить изображение",
  "Ez a másik út: aki a kódot ismeri, kérelmet küldhet, és te döntöd el, beengeded-e. Meghívóval egyszerűbb.": "Это второй путь: кто знает код, может отправить заявку, а ты решишь, впускать ли. С приглашением проще.",
  "Kihagyom": "Закрыть", // ROVIDEBB CIMKE (2026-10-01): a hosszu alak 390 px-en kitort a gombbol (105 > 96), a tullogas-mero fogta meg. A gomb a turat zarja le, ezert a rovid alak ugyanazt nevezi meg.
  "Tovább": "Далее",
  "Tartsd a vonalkódot a keretbe.": "Держи штрихкод в рамке.",
  "Húzd az ujjad: vízszintben a szín, függőlegesen a fényerő. Koppints a képernyőre a gombok elrejtéséhez / előhozásához.": "Проведи пальцем: по горизонтали — цвет, по вертикали — яркость. Нажми на экран, чтобы скрыть / показать кнопки.",
  "Piros": "Красный",
  "Zöld": "Зелёный",
  "Villogás": "Мигание",
  "LED ki": "LED выкл.",
  "PrepperPapa": "PrepperPapa",
  "SSTV": "SSTV",
  "WAV": "WAV",
  "ForTiPrep": "ForTiPrep",
  "Leaflet": "Leaflet",
  "© OpenStreetMap": "© OpenStreetMap",
  "Jackery Explorer 240": "Jackery Explorer 240",
  "Jackery Explorer 1000": "Jackery Explorer 1000",
  "PowerMax 2400 Pro": "PowerMax 2400 Pro",
  "LiFePO4 100 Ah (12 V)": "LiFePO4 100 A·ч (12 В)",
  "47°29'52.4\"N 19°02'24.7\"E": "47°29'52.4\"N 19°02'24.7\"E",
  "otthon": "дом",
  "Teszt autó": "Тестовая машина",
  "Teszt Apa": "Тестовый Папа",
  "Teszt Anya": "Тестовая Мама",
  "Teszt Gyerek": "Тестовый Ребёнок",
  "Víz": "Вода",
  "Étel": "Еда",
  "Azaz": "То есть",
  "nincs ide rendelt készlet": "запас не назначен",
  "Készültség": "Готовность",
  "Készlet": "Запасы",
  "Kockázat": "Риск",
  "Közösség": "Сообщество",
  "Iránytű": "Компас",
  "Fény": "Свет",
  "Vagyonkezelő": "Имущество",
  "Otthon ": "Дом ",
  "nincs megadva, ki jön": "не указано, кто придёт",
  "Nincs megadva, ki érkezik ide.": "Не указано, кто сюда прибывает.",
  "Kik érkeznek ide:": "Кто сюда прибывает:",
  "Mi van itt (nincs ide rendelt tétel)": "Что здесь есть (сюда не назначена ни одна позиция)",
  "Sípolás": "Свисток",
  "Ütem indítása": "Запустить ритм",
  "vércsoport hiányzik · nincs ismert allergia": "группа крови не указана · известных аллергий нет",
  "Rögzítés a térképre (itt vagyok most)": "Отметить на карте (я сейчас здесь)",
  "Kezdőlapon látszik ✓": "Видно на главной ✓",
  "+ Új családtag": "+ Новый член семьи",
  "Otthon · készültség: nincs adat": "Дом · готовность: данных нет",
  "Jármű · készültség: nincs adat": "Транспорт · готовность: данных нет",
  "Ez a készülék nem ad iránytű-adatot, vagy nincs rá engedély. A nap és hold rész ettől függetlenül működik.": "Это устройство не даёт данных компаса, или нет разрешения. Раздел о солнце и луне работает независимо от этого.",
  "víz 5 liter elemlámpa gyógyszerek": "вода 5 литров фонарик лекарства",
  "Ennyi holdfénynél nyílt terepen lámpa nélkül is lehet menni.": "При таком лунном свете на открытой местности можно идти и без фонаря.",
  "A számítás a térkép utolsó nézete alapján készült, néhány perc pontossággal.": "Расчёт сделан по последнему виду карты, с точностью до нескольких минут.",
  "A böngészőben letiltottad. A telefon beállításainál lehet visszaadni.": "Ты запретил это в браузере. Вернуть можно в настройках телефона.",
  "Kapcsolódva · egyedül vagy a szobában": "Подключено · ты один в комнате",
  "növekvő hold, 82%": "растущая луна, 82%",
  "Súgó": "Справка",
  "Frissítés": "Обновить",
  "Éjszakai mód": "Ночной режим",
  "Tájoló": "Ориентирование",
  "Kalkulátorok": "Калькуляторы",
  "Gyülekező": "Сбор",
  "Másikat": "Другое",
  "Másik tanács": "Другой совет",
  "Keresés a tudástárban…": "Поиск в базе знаний…",
  "Megnevezés (pl. Palackozott víz)": "Название (напр. Вода в бутылках)",
  "a dobozról, pl. 380": "с коробки, напр. 380",
  "pl. 37 vagy 2000": "напр. 37 или 2000",
  "teli tank, liter vagy kWh": "полный бак, литры или кВт·ч",
  "Egyéb hely megnevezése": "Название другого места",
  "Teljes képernyő": "Во весь экран",
  "Húzd, ha görgetnél": "Потяни, чтобы прокрутить",
  "Nyomtatás": "Печать",
  "Keresés: szó, vagy hely (Ján 3,16)": "Поиск: слово или место (Ин. 3:16)",
  "Betűméret": "Размер шрифта",
  "Megnevezés (pl. Gmail helyreállítási kódok)": "Название (напр. Коды восстановления Gmail)",
  "A kód, kulcs vagy seed-mondat": "Код, ключ или seed-фраза",
  "Megjegyzés (hol használod, melyik fiók)": "Примечание (где используешь, какая учётная запись)",
  "Megnevezés (pl. Személyi igazolvány)": "Название (напр. Паспорт)",
  "Kód (pl. PP-MINTA-1234)": "Код (напр. PP-OBRAZEC-1234)",
  "mennyit bír hátizsákban": "сколько выдержит в рюкзаке",
  "pl. glutén, kivi — vesszővel": "напр. глютен, киви — через запятую",
  "pl. cukorbetegség": "напр. диабет",
  "pl. Bogáncs": "напр. Рекс",
  "egy mondat, ha a GPS nem visz oda": "одно предложение, если GPS туда не ведёт",
  "üresen: alapterület vagy típus szerint": "пусто: по площади или типу",
  "üresen: típus szerint (ház 75, lakókocsi 80)": "пусто: по типу (дом 75, автодом 80)",
  "0 = földszint": "0 = первый этаж",
  "A nap pályája ma": "Путь солнца сегодня",
  "Holdfázis: növekvő hold": "Фаза луны: растущая луна",
  "Értesítés a telefonra": "Уведомление на телефон",
  "watt darabonként": "ватт за штуку",
  "ó/nap": "ч/день",
  "óra/nap": "часов/день",
  "óra naponta": "часов в день",
  "összesen W": "всего Вт",
  "napos óra": "солнечных часов",
  "pl. egy mondat, amit csak ti tudtok": "напр. фраза, которую знаете только вы",
  "Amit át akarsz adni.": "То, что хочешь передать.",
  "pl. Találkozó, Rejtek": "напр. Встреча, Тайник",
  "pl. Vércsoport és gyógyszerek": "напр. Группа крови и лекарства",
  "Amit csak a családod olvashat.": "То, что может прочитать только твоя семья.",
  "pl. Feri, vagy Kovácsék": "напр. Пётр или Ковалёвы",
  "Írd ide az üzenetet": "Напиши здесь сообщение",
  "pl. Ceglédi kör": "напр. Соседский круг",
  "a szoba kódja": "код комнаты",
  "Bezárás": "Закрыть",
  "Ige — Máté 6,34": "Слово — Матфея 6:34",
  "A tájoló indul…": "Ориентирование запускается…",
  "Nem kaptunk engedélyt az iránytűhöz. A nap és hold rész ettől függetlenül működik.": "Мы не получили разрешения на компас. Раздел о солнце и луне работает независимо от этого.",
  "db": "шт.",
  "lejár:": "истекает:",
  "LEJÁRT": "ИСТЁК",
  "1 hónapon belül lejár": "истекает в течение 1 месяца",
  "fél éven belül lejár": "истекает в течение полугода",
  "hatótáv kb.": "запас хода прибл.",
  "kg teherbírás": "кг грузоподъёмность",
  "Mi van itt": "Что здесь есть",
  "tétel": "позиций",
  "Térképen ✓ — pozíció frissítése": "На карте ✓ — обновить позицию",
  "térképen ✓": "на карте ✓",
  "készültség": "готовность",
  "készültség: nincs adat": "готовность: данных нет",
  "fő": "человек",
  "nap": "дней",
  "Teszt-adatok betöltve: 3 fő, 1 háziállat, 4 helyszín (közte autó),": "Тестовые данные загружены: 3 человека, 1 домашнее животное, 4 локации (включая машину),",
  "készlet-tétel ✓ (a neveket az adatlapjukon átírhatod)": "позиций запаса ✓ (имена можно изменить в их карточках)",
  "óra": "часов",
  "perc": "минут",
  "Napkeltéig még": "До восхода солнца ещё",
  "Napnyugtáig még": "До заката солнца ещё",
  "A nap": "Солнце",
  "-e ment le.": "-го зашло.",
  "Ezen a szélességen ma nem megy le a nap.": "На этой широте сегодня солнце не заходит.",
  "Ezen a szélességen ma nem kel fel a nap.": "На этой широте сегодня солнце не восходит.",
  "napra": "на дней",
  "Víz:": "Вода:",
  "Élelem:": "Еда:",
  "Áram:": "Электричество:",
  "Fűtés:": "Отопление:",
  "nincs megmérve": "не измерено",
  "nincs ide rendelt áramforrás": "сюда не назначен источник питания",
  "— a szükséglet": "— потребность",
  "lenne": "составила бы",
  "— powerbank, power station és napelem-termelés; az üzemanyag a fűtésnél számít": "— павербанк, зарядная станция и выработка солнечных панелей; топливо учитывается в отоплении",
  "A gyűrű a vízre és az élelemre vonatkozik: a gyengébbiket mutatja.": "Кольцо относится к воде и еде: показывает более слабое из двух.",
  "A leggyengébb": "Самое слабое",
  "A gyűrű a jelen lévő típusok átlagát mutatja, a színe a leggyengébbet.": "Кольцо показывает среднее значение присутствующих типов; его цвет показывает самый слабый.",
  "Leggyengébb:": "Самое слабое:",
  "— a készültség ezt mutatja, mert a hiányzó láncszem dönt.": "— готовность показывает именно это, потому что решает недостающее звено.",
  "élelem": "еда",
  "víz": "вода",
  "fűtés": "отопление",
  "áram": "электричество",
  "Áramszünetre: hordozható energia": "На случай отключения: переносная энергия",
  "Hirdetés": "Объявление",
  "delelés": "кульминация",
  "Holdfázis:": "Фаза луны:",
  "Használható fény": "Пригодный свет",
  "és": "и",
  "között: a napkelte előtt és a napnyugta után is van még annyi, amivel lehet menni.": "между: и перед восходом, и после заката его ещё столько, что можно идти.",
  "A számítás": "Расчёт сделан по",
  "alapján készült, néhány perc pontossággal.": ", с точностью до нескольких минут.",
  "a térkép utolsó nézete": "последнему виду карты",
  "egy mentett pontod": "одной из сохранённых тобой точек",
  "a mostani helyzeted": "твоему текущему местоположению",
  "növekvő hold": "растущая луна",
  "fogyó hold": "убывающая луна",
  "újhold": "новолуние",
  "telihold": "полнолуние",
  "első negyed": "первая четверть",
  "utolsó negyed": "последняя четверть",
  "Ma éjjel gyakorlatilag nincs holdfény, számolj lámpával.": "Этой ночью лунного света практически нет, рассчитывай на фонарь.",
  "Közepes holdfény: nyílt terepen segít, erdőben nem.": "Умеренный лунный свет: на открытой местности помогает, в лесу — нет.",
  "mérés az elmúlt 48 órából. Ezen a készüléken a böngésző nem éri el a légnyomás-szenzort, ezért kézzel viszed be; a telefonos appban magától fog mérni.": "измерений за последние 48 часов. На этом устройстве браузер не имеет доступа к датчику давления, поэтому ты вводишь значение вручную; в мобильном приложении измерение будет автоматическим.",
  "Ez a böngésző nem tud értesítést megjeleníteni": "Этот браузер не умеет показывать уведомления",
  "Bekapcsolva — riasztáskor a telefonod jelez": "Включено — при тревоге телефон подаст сигнал",
  "Kikapcsolva": "Выключено",
  "Adás indítása": "Начать передачу",
  "Adás megy — koppints újra": "Передача идёт — нажми ещё раз",
  "Adás": "Передача",
  "Vétel": "Приём",
  "Vétel megy — koppints újra": "Приём идёт — нажми ещё раз",
  "Megy — koppints újra": "Идёт — нажми ещё раз",
  "Áll — koppints újra": "Остановлено — нажми ещё раз",
  "Fény-SOS": "Световой SOS",
  "alapok — mindenkinek": "основы — для всех",
  "részletek, mélyebben": "подробнее, глубже",
  "ennyi áll a tárcádban": "столько в твоём кошельке",
  "nincs internet · minden a kódban": "интернета нет · всё в коде",
  "a leggyengébb": "самое слабое звено",
  "Indítás": "Запустить",
  "Számolók": "Калькуляторы",
  "Nem sikerült a helymeghatározás:": "Не удалось определить местоположение:",
  "A térkép utolsó nézete alapján is tudok számolni, nyisd meg egyszer a térképet.": "Могу посчитать и по последнему виду карты — открой карту хотя бы раз.",
  "Ehhez előbb le kell tölteni a Biblia szövegét (a Biblia képernyőn, egyszer).": "Для этого сначала нужно скачать текст Библии (на экране Библии, один раз).",
  "‹ Könyvek": "‹ Книги",
  "Ószövetség": "Ветхий Завет",
  "Újszövetség": "Новый Завет",
  "300+ találat (az elsőket mutatom)": "300+ результатов (показываю первые)",
  "találat": "результатов",
  "Nincs találat erre:": "Нет результатов для:",
  "fejezet": "Глава",
  "Egész fejezet": "Вся глава",
  "Még nincs kiemelt vers. Nyiss meg egy fejezetet, és koppints egy versre.": "Выделенных стихов пока нет. Открой главу и нажми на стих.",
  "Klasszikus prófétai szakaszok. Az értelmezésük felekezetenként eltér — itt a szöveg áll, magyarázat nélkül.": "Классические пророческие отрывки. Их толкование различается между конфессиями — здесь стоит только текст, без пояснений.",
  "Amikor félsz": "Когда боишься",
  "Amikor nem tudod, mit tegyél": "Когда не знаешь, что делать",
  "Amikor kifogytál az erődből": "Когда силы иссякли",
  "Amikor veszteség ér": "Когда постигла утрата",
  "Amikor félted a családodat": "Когда боишься за семью",
  "Amikor az ellátás a kérdés": "Когда вопрос в запасах",
  "Amikor másokon kell segítened": "Когда нужно помочь другим",
  "Amikor a kitartás a tét": "Когда речь о выдержке",
  "Jézus beszéde az utolsó időkről": "Речь Иисуса о последних временах",
  "Dániel látomásai": "Видения Даниила",
  "A szenvedő szolga és a Messiás": "Страдающий раб и Мессия",
  "Az utolsó idők jellemzői": "Признаки последних времён",
  "Ítélet és helyreállítás": "Суд и восстановление",
  "teherbírás": "грузоподъёмность",
  "Bogáncs": "Рекс",
  "Belépés": "Вход",
  "Betöltés...": "Загрузка...",
  "Betöltés…": "Загрузка…",
  "Értem": "Понятно",
  "Ha valaki ír egy szobádba, jelezzen a telefonod — akkor is, ha az app be van zárva.": "Если кто-то напишет в твою комнату, пусть телефон подаст сигнал — даже когда приложение закрыто.",
  "Ehhez tudni kell, hol vagy. Nyomd meg a Mérés a helyzetemre gombot.": "Для этого нужно знать, где ты. Нажми кнопку «Рассчитать для моего места».",
  "Nézd meg most, mennyi üzemanyag van az autóban. Ha kevesebb mint fél tank, tankolj fel a héten, és onnantól tartsd ezt a szintet. Ez az egyetlen szokás, ami pénzbe nem kerül, mert azt a benzint úgyis megvennéd, csak korábban.": "Посмотри сейчас, сколько топлива в машине. Если меньше половины бака, заправься на этой неделе и дальше держи этот уровень. Это единственная привычка, которая не стоит денег, потому что тот бензин ты всё равно купишь — просто раньше.",
  "Tudástár — Közlekedés és mobilitás": "База знаний — Транспорт и мобильность",
  "A lista a családtagjaidból áll össze, akiket a Háztartásnál vettél fel.": "Список составляется из членов семьи, которых ты добавил в разделе «Домохозяйство».",
  "A dokumentumok a telefonodon maradnak. Nem megy belőlük semmi sehova, felhőbe sem.": "Документы остаются на твоём телефоне. Ничего из них никуда не уходит, в облако тоже.",
  "A gomb be- és kikapcsol. Ugyanaz a gomb indítja az adást és állítja meg — nincs külön Állj.": "Кнопка включает и выключает. Та же кнопка запускает передачу и останавливает её — отдельной «Стоп» нет.",
  "A gyűrű a leggyengébb láncszemet mutatja, nem az átlagot. Egy hiányzó dolog lehúzza az egészet — és ez szándékos.": "Кольцо показывает самое слабое звено, а не среднее. Одна недостающая вещь тянет вниз всё — и это сделано намеренно.",
  "A vétel és az adás ugyanazzal a gombbal kapcsol. Amíg megy, hagyd a telefont nyugton.": "Приём и передача переключаются той же кнопкой. Пока идёт, не трогай телефон.",
  "Egy témán belül két réteg van. Az alap- és az életmentő cikkek ingyenesek, mindenkinek.": "В рамках темы есть два уровня. Базовые и жизненно важные статьи бесплатны, для всех.",
  "Ezt látja az, aki megtalálja a telefonodat. Csak azt írd bele, amit egy idegen is láthat.": "Это увидит тот, кто найдёт твой телефон. Пиши сюда только то, что может увидеть посторонний.",
  "Felveszed az azimutot, és a tájoló megmutatja a visszautat is — nem kell fejben tartanod.": "Берёшь азимут, и компас покажет также дорогу назад — держать в голове не нужно.",
  "Itt veszed fel a családot. Innen jön a fejadag-számítás és a helyszínek listája is.": "Здесь ты добавляешь семью. Отсюда берётся расчёт норм и список локаций.",
  "Keresés szó szerint, és amit megjelölsz, azt könyvjelzővel bármikor visszatalálod.": "Поиск дословно, а то, что отметишь, всегда найдёшь по закладке.",
  "Koppints a térképre, és ott új pontot veszel fel.": "Нажми на карту — и там добавится новая точка.",
  "Több számoló van egy helyen — víz, élelem, üzemanyag. Nincs külön csempéjük, mind itt található.": "Несколько калькуляторов в одном месте — вода, еда, топливо. Отдельных плиток у них нет, все здесь.",
  "Új tételt a listához adsz: megadod, mi az, hova teszed, és mikor jár le.": "Добавляешь новую позицию в список: что это, куда кладёшь и когда истекает срок.",
  "A gombok be- és kikapcsolnak. Ugyanaz a gomb indítja és állítja le a jelzést.": "Кнопки включают и выключают. Та же кнопка запускает сигнал и останавливает его.",
  "A QR-kód a TELJES adatot viszi, nem egy linket. Ezért működik akkor is, ha nincs internet — a másik telefon a kódból olvassa ki.": "QR-код несёт ПОЛНЫЕ данные, а не ссылку. Поэтому работает и без интернета — второй телефон читает их прямо из кода.",
  "A vaku nem minden telefonon működik. Ha nem indul, használd a képernyő-fényt — az mindenhol megy.": "Вспышка работает не на каждом телефоне. Если не включается, используй свет экрана — он есть везде.",
  "A szám azt mutatja, mennyi áll a tárcádban.": "Число показывает, сколько в твоём кошельке.",
  "D": "Ю",
  "K": "В",
  "Ny": "З",
  "ÉK": "СВ",
  "ÉNy": "СЗ",
  "DK": "ЮВ",
  "DNy": "ЮЗ",
  "Példabeszédek 22,3": "Притчи 22:3",
  "Az eszes meglátja a bajt és elrejti magát; a bolondok pedig neki mennek és kárát vallják.": "Благоразумный видит беду, и укрывается; а неопытные идут вперед, и наказываются.",
  "2Timóteus 1,7": "2 Тимофею 1:7",
  "Mert nem félelemnek lelkét adott nékünk az Isten; hanem erőnek és szeretetnek és józanságnak lelkét.": "ибо дал нам Бог духа не боязни, но силы и любви и целомудрия.",
  "Máté 6,34": "Матфея 6:34",
  "Ne aggodalmaskodjatok tehát a holnap felől; mert a holnap majd aggodalmaskodik a maga dolgai felől. Elég minden napnak a maga baja.": "Итак не заботьтесь о завтрашнем дне, ибо завтрашний сам будет заботиться о своем: довольно для каждого дня своей заботы.",
  "Zsoltárok 46,2-3": "Псалом 45:2-3",
  "Isten a mi oltalmunk és erősségünk! igen bizonyos segítség a nyomorúságban. Azért nem félünk, ha elváltoznék is a föld, ha hegyek omlanának is a tenger közepébe.": "Бог нам прибежище и сила, скорый помощник в бедах, посему не убоимся, хотя бы поколебалась земля, и горы двинулись в сердце морей.",
  "Jakab 1,3": "Иакова 1:3",
  "Tudván, hogy a ti hiteteknek megpróbáltatása kitartást szerez.": "зная, что испытание вашей веры производит терпение.",
  "Uram, Te látod, mi nyomaszt engem. Ma éjjel nem tudom megoldani, és nem is akarom azt hazudni Neked, hogy nem félek. Kérlek, vedd le rólam a holnap terhét, és adj erőt ahhoz, amit ma kell elhordoznom. Csendesíts le. Te őrködsz, én alhatok. Jézus nevében, ámen.": "Господи, Ты видишь, что меня гнетёт. Этой ночью я не могу это решить и не хочу лгать Тебе, что не боюсь. Прошу, сними с меня бремя завтрашнего дня и дай силы на то, что нужно нести сегодня. Успокой меня. Ты бодрствуешь, я могу спать. Во имя Иисуса, аминь.",
  "Uram, most kell döntenem, és nincs időm. Adj tiszta fejet, és őrizz meg a pániktól. Mutasd meg a következő egy lépést, nem az egészet, csak a következőt. Legyen erőm megtenni. Jézus nevében, ámen.": "Господи, мне нужно решать сейчас, а времени нет. Дай ясную голову и сохрани от паники. Покажи следующий один шаг, не всё — только следующий. Дай мне силы его сделать. Во имя Иисуса, аминь.",
  "Mennyei Atyám! Az Úr Jézus Krisztus nevében megyek eléd. Elismerem, hogy mindenható, örökkévaló Isten vagy, az egész világmindenségnek a teremtője. Én is a Te teremtményed vagyok. Elismerem, hogy bűnös ember vagyok, és sokat vétkeztem ellened. De én ma elhatározom, hogy megtérek és elfogadom a Názáreti Jézus áldozatát, és elismerem, hogy erre az áldozatra nekem is szükségem van. Ezért a szívemet, életemet megnyitom. Kérlek Uram, jöjj a szívembe. Bocsásd meg a bűneimet, szabadíts meg engem a bűntől és annak minden következményétől! Hiszek Benned Jézus. Hiszem, hogy Te vagy az élő Istennek a Fia, ki meghaltál az én bűneimért és feltámadtál a halálból, hogy megigazítsál engem. Elfogadlak Uramnak, Megváltómnak, Szabadítómnak és átadom az életemet, szívemet Neked. Szabadíts meg Uram! Tiszta szívet teremts bennem! Te azt ígérted, hogy a zörgetőnek ajtó nyittatik. Én Isten jelenlétébe akarok kerülni, és Te vagy az Út. Kérlek, vezess engem a Mindenható jelenlétébe! Dicsérlek és áldalak. Szeretlek Uram szívemből, lelkemből, erőmből, a Názáreti Jézus nevében. Dicsőség Istennek, most és mindörökké! Ámen!": "Небесный Отец! Во имя Господа Иисуса Христа прихожу к Тебе. Признаю, что Ты всемогущий, вечный Бог, Творец всей вселенной. И я — Твоё творение. Признаю, что я грешный человек и много согрешил против Тебя. Но сегодня я решаю покаяться и принять жертву Иисуса из Назарета, и признаю, что эта жертва нужна и мне. Поэтому открываю своё сердце и свою жизнь. Прошу Тебя, Господи, войди в моё сердце. Прости мои грехи, освободи меня от греха и от всех его последствий! Верю в Тебя, Иисус. Верю, что Ты — Сын живого Бога, что умер за мои грехи и воскрес из мёртвых, чтобы оправдать меня. Принимаю Тебя как Господа, Спасителя, Избавителя и отдаю Тебе свою жизнь и своё сердце. Освободи меня, Господи! Сотвори во мне чистое сердце! Ты обещал, что стучащему отворят. Я хочу предстать пред Богом, а Ты — Путь. Прошу, веди меня в присутствие Всемогущего! Хвалю Тебя и благословляю. Люблю Тебя, Господи, всем сердцем, всей душой, всей силой, во имя Иисуса из Назарета. Слава Богу ныне и вовеки! Аминь!",
  "fűtés kevés": "отопления мало",
  "még egyedül": "пока один",
  "te indítottad": "ты запустил",
  "Csatlakozom": "Присоединяюсь",
  "jelentkezés elküldve": "заявка отправлена",
  "a gazda nem engedett be": "владелец не впустил",
  "jóváhagyásra vár": "ожидает подтверждения",
  "névtelen": "аноним",
  "Egy powerbank a telefonhoz kevés, ha a router és a lámpa is menne. Nézd meg, mekkora kapacitás kell három napra.": "Одного павербанка для телефона мало, если должны работать ещё роутер и лампа. Посмотри, какая ёмкость нужна на три дня.",
  "A nyílt lángú fűtés zárt térben szén-monoxidot termel. Ha bent fűtesz, CO-érzékelő nem opció, hanem alapfelszerelés.": "Отопление открытым пламенем в закрытом помещении производит угарный газ. Если топишь внутри, датчик CO — не опция, а базовое снаряжение.",
  "Napi három liter fejenként, csak ivásra. Mellé egy szűrő vagy klórtabletta, ha a csapvíz eredete kétségessé válik.": "Три литра в день на человека, только для питья. Плюс фильтр или таблетки хлора, если происхождение водопроводной воды становится сомнительным.",
  "Fejlámpa, hogy szabad maradjon a két kezed, és tartalék elem hozzá. A gyertya tűzveszély, nem megoldás.": "Налобный фонарь, чтобы обе руки оставались свободными, и запасные батарейки к нему. Свеча — это пожарная опасность, а не решение.",
  "— ennyi jut ténylegesen a fűtésbe,": "— столько фактически идёт в отопление,",
  "Nyers tüzelő:": "Сырое топливо:",
  "(tüzifa, fűtőolaj és gázpalack együtt) — ebből a berendezés": "(дрова, печное топливо и газовый баллон вместе) — из этого установка отдаёт",
  "%-ot ad át": "%",
  "Napi fűtésigény:": "Суточная потребность в отоплении:",
  "Víz (csempe)": "Вода",
  "Étel (csempe)": "Еда",
  "Fűtés (csempe)": "Тепло",
  "Áram (csempe)": "Ток",
  "KÖZÖS": "ОБЩЕЕ",
  "Közös": "Общее",
  "közös": "общее",
  "Közös felszerelés": "Общее снаряжение",
  "Közös felszerelés (egyszer az egész csoportnak)": "Общее снаряжение (один раз на всю группу)",
  "kannás víz": "вода в канистрах",
  "palackos víz": "вода в бутылках",
  "száraz élelmiszer": "сухие продукты",
  "romlandó": "скоропортящееся",
  "tüzifa": "дрова",
  "fűtőolaj": "печное топливо",
  "gázpalack": "газовый баллон",
  "üzemanyag-készlet": "запас топлива",
  "üzemanyag (mobilitás)": "топливо (мобильность)",
  "üzemanyag": "топливо",
  "bébiétel": "детское питание",
  "háziállat": "домашнее животное",
  "saját gyógyszer": "своё лекарство",
  "hátizsák": "рюкзак",
  "1 készlet": "1 комплект",
  "Gyógyszer:": "Лекарства:",
  "Vércsoport:": "Группа крови:",
  "Betegség:": "Заболевание:",
  "Vércsoport-kártya:": "Карточка группы крови:",
  "Élelmiszer": "Продукты",
  "Elsősegély": "Первая помощь",
  "Eszközök - alvás/menedék": "Снаряжение - сон/укрытие",
  "Eszközök - főzés/tűzgyújtás": "Снаряжение - готовка/разжигание",
  "Eszközök - fűtés": "Снаряжение - отопление",
  "Eszközök - világítás": "Снаряжение - освещение",
  "Eszközök - öltözet": "Снаряжение - одежда",
  "Eszközök - EDC": "Снаряжение - EDC",
  "Higiénia": "Гигиена",
  "Mobilitás": "Мобильность",
  "Mobilitás:": "Мобильность:",
  "Mit vigyek": "Что взять",
  "Fény-SOS (képernyő)": "Световой SOS (экран)",
  "Fény-SOS (vaku)": "Световой SOS (вспышка)",
  "Ürítés": "Очистить",
  "Pontok kimentése (GPX)": "Экспорт точек (GPX)",
  "Teljes mentés": "Полная резервная копия",
  "Visszatöltés": "Восстановление",
  "Checklista nyomtatása": "Печать контрольного списка",
  "Kezdő": "Главная",
  "Lámpa": "Фонарь",
  "Beállít": "Настроить",
  "LED be": "LED вкл.",
  "Nincs vaku": "Вспышки нет",
  "Kamera vétel leállítása": "Остановить приём камерой",
  "Mikrofon vétel leállítása": "Остановить приём микрофоном",
  "Másolás": "Копировать",
  "Beillesztés szövegből": "Вставить из текста",
  "Bemutató-adatok betöltése": "Загрузить демоданные",
  "A neved a közösségben": "Твоё имя в сообществе",
  "Összes kategória": "Все категории",
  "Összes készlet": "Все запасы",
  "Mennyiség (ml/db)": "Количество (мл/шт.)",
  "Hol áll általában": "Где обычно стоит",
  "Miért (pl. 10 tojás, favágás)": "За что (напр. 10 яиц, рубка дров)",
  "Ez összesen": "Это в сумме",
  "kg vagy liter": "кг или литров",
  "Nincs találat.": "Нет результатов.",
  "(névtelen)": "(без имени)",
  "nincs adat": "данных нет",
  "Összesen": "Всего",
  "Élelem": "Еда",
  "hiányzik": "не хватает",
  "Hiányzik": "Не хватает",
  "személyre szóló": "на человека",
  "alap ruházat": "базовая одежда",
  "állat-specifikus": "для животного",
  "autó": "машина",
  "pár": "пар",
  "1 pár": "1 пара",
  "1 pár (lábon)": "1 пара (на ногах)",
  "egy az egész csoportnak": "одна на всю группу",
  "kép": "изображение",
  "PDF/fájl": "PDF/файл",
  "a tárban": "в хранилище",
  "tárolt": "сохранено",
  "átadásra vár": "ожидает передачи",
  "Gíra": "Гира",
  "Hány gírát kérsz": "Сколько гир просишь",
  "Hány gíra": "Сколько гир",
  "Kinek (azonosító)": "Кому (идентификатор)",
  "Neve (nem kötelező)": "Название (необязательно)",
  "Kezdőlapon nem látszik": "На главной не видно",
  "Nincs napkelte vagy napnyugta": "Нет восхода или заката",
  "Légnyomás az elmúlt órákban": "Атмосферное давление за последние часы",
  "Adj nevet a dokumentumnak.": "Дай документу название.",
  "Nem sikerült.": "Не удалось.",
  "Nem sikerült:": "Не удалось:",
  "Nem sikerült a kamera:": "Не удалось с камерой:",
  "Nem sikerült a mikrofon:": "Не удалось с микрофоном:",
  "Nem fért el: megtelt a tár. Törölj egy régi dokumentumot.": "Не поместилось: хранилище заполнено. Удали какой-нибудь старый документ.",
  "Add meg a PIN-t": "Введи PIN",
  "4-6 számjegy kell.": "Нужно 4-6 цифр.",
  "Hibás PIN.": "Неверный PIN.",
  "Feldolgozás:": "Обработка:",
  "Feldolgozás…": "Обработка…",
  "(túl nagy fájl)": "(слишком большой файл)",
  "(nem sikerült beolvasni)": "(не удалось считать)",
  "(PDF, max 2 MB. Fényképezd le inkább — a fotót magamtól kicsinyítem)": "(PDF, максимум 2 МБ. Лучше сфотографируй — фото я уменьшу сам)",
  "Még nincs dokumentum.": "Документов пока нет.",
  "Törlöd a dokumentumot?": "Удалить документ?",
  "Biztosan törlöd? Koppints újra": "Точно удалить? Нажми ещё раз",
  "Előbb vegyél fel családtagot a Háztartásnál.": "Сначала добавь члена семьи в разделе «Домохозяйство».",
  "Ezen az eszközön nincs helymeghatározás": "На этом устройстве определение местоположения недоступно",
  "Helymeghatározás…": "Определение местоположения…",
  "Új változat érhető el (": "Доступна новая версия (",
  "Áramforrás hiányzik": "Не хватает источника питания",
  "Kevés a tüzelő": "Мало топлива для обогрева",
  "Kevés a víz": "Мало воды",
  "Nincs fényforrás": "Нет источника света",
  "A tudástár üres.": "База знаний пуста.",
  "zárt": "закрыто",
  "Bővített tudástár": "Расширенная база знаний",
  "Ebben a témában": "В этой теме есть ещё",
  "további cikk van, a bevezetőjüket fent olvashatod.": "статей, их вступления можно прочитать выше.",
  "A teljes szövegük a bővített tudástár része, ami egyszeri feloldással, véglegesen elérhető.": "Их полный текст входит в расширенную базу знаний, которая открывается однократно и навсегда.",
  "Ennek a cikknek a szövege nem jött meg.": "Текст этой статьи не загрузился.",
  "A cikk szövege most nem érhető el.": "Текст статьи сейчас недоступен.",
  "Tudástár —": "База знаний —",
  "Elsősegély-készlet": "Аптечка",
  "Fejlámpa + tartalék elem": "Налобный фонарь + запасные батарейки",
  "Powerbank (feltöltve)": "Павербанк (заряженный)",
  "Vízszűrő vagy víztisztító tabletta": "Фильтр для воды или таблетки для обеззараживания",
  "Öngyújtó / vízálló gyufa": "Зажигалка / водостойкие спички",
  "Többfunkciós kés": "Многофункциональный нож",
  "Gázfőző + gázpalack": "Газовая горелка + баллон",
  "Spirituszfőző (denaturált szesz) + üzemanyag": "Спиртовка (денатурат) + топливо",
  "Vegyi melegítő tasak (tűz nélkül)": "Химический согревающий пакет (без огня)",
  "Bögre / edény a főzéshez": "Кружка / посуда для готовки",
  "Hőfólia": "Спасательное одеяло",
  "Papírtérkép és iránytű": "Бумажная карта и компас",
  "Készpénz kis címletekben": "Наличные мелкими купюрами",
  "Dokumentum-másolatok": "Копии документов",
  "Vízhatlan zsák (dry bag)": "Гермомешок (dry bag)",
  "Mentőmellény": "Спасательный жилет",
  "Gyorsan száradó ruha": "Быстросохнущая одежда",
  "Vízálló tok a telefonra": "Водонепроницаемый чехол для телефона",
  "Réteges téli öltözet": "Многослойная зимняя одежда",
  "Sapka, sál, kesztyű": "Шапка, шарф, перчатки",
  "Vízhatlan bakancs": "Водонепроницаемые ботинки",
  "Kémiai melegítő párna": "Химическая грелка",
  "Réteges őszi öltözet": "Многослойная осенняя одежда",
  "Fejlámpa (korán sötétedik)": "Налобный фонарь (рано темнеет)",
  "Naptej és fejfedő": "Солнцезащитный крем и головной убор",
  "Rovarriasztó": "Средство от насекомых",
  "Extra víz (meleg miatt)": "Дополнительная вода (из-за жары)",
  "Kanna víz (tartalék)": "Канистра воды (запас)",
  "Hálózsák / takaró": "Спальный мешок / одеяло",
  "Szerszámkészlet": "Набор инструментов",
  "Ponyva / sátorlap": "Тент / полотнище",
  "Bakancs vagy zárt cipő": "Ботинки или закрытая обувь",
  "Alsónemű": "Нижнее бельё",
  "Póló": "Футболка",
  "Hosszú nadrág": "Длинные брюки",
  "Pulóver vagy polár": "Свитер или флис",
  "Aláöltözet (hosszú alsó, hosszú ujjú)": "Термобельё (кальсоны, длинный рукав)",
  "Esőkabát vagy esőponcsó": "Дождевик или пончо",
  "Kesztyű": "Перчатки",
  "Váltóruha (csecsemő)": "Сменная одежда (младенец)",
  "Zokni / rugdalózó": "Носки / ползунки",
  "Sapka (csecsemő)": "Шапочка (младенец)",
  "Esővédő a babahordozóra": "Дождевик на переноску для малыша",
  "intim higiénia (tisztasági betét / tampon)": "интимная гигиена (прокладки / тампоны)",
  "intim higiénia, ha lány": "интимная гигиена, если девочка",
  "tápszer (a szokásos márka, napi adag +2 nap)": "смесь (привычная марка, дневная порция +2 дня)",
  "pelenka (napi 6-8 db)": "подгузники (6-8 шт. в день)",
  "törlőkendő": "влажные салфетки",
  "cumi és pótcumi": "соска и запасная соска",
  "saját tápja (NE váltsunk hirtelen: gyomorrontást okoz)": "его собственный корм (НЕ меняй резко: вызовет расстройство желудка)",
  "oltási könyv másolata": "копия прививочного паспорта",
  "póráz és szájkosár": "поводок и намордник",
  "víztisztító tabletta": "таблетки для обеззараживания воды",
  "vízszűrő": "фильтр для воды",
  "Inzulin hűtve: hűtőtáska + gélakku": "Инсулин в холоде: термосумка + аккумулятор холода",
  "az inzulin 2-8 °C-ot kíván": "инсулину нужно 2-8 °C",
  "Vércukormérő, tesztcsík, lándzsa": "Глюкометр, тест-полоски, ланцеты",
  "cukorbetegség az adatlapján": "диабет в его карточке",
  "Szőlőcukor / gyors cukor": "Глюкоза / быстрый сахар",
  "hipoglikémia esetére": "на случай гипогликемии",
  "Tartalék toll/tű + éles-gyűjtő": "Запасная ручка/игла + контейнер для острого",
  "ha az egyik elromlik vagy elvész": "если одна сломается или потеряется",
  "Allergia-gyógyszer (": "Лекарство от аллергии (",
  "allergia az adatlapján": "аллергия в его карточке",
  "Adrenalin autoinjektor, ha fel van írva": "Автоинжектор с адреналином, если назначен",
  "súlyos allergiás reakció percek alatt kialakulhat": "тяжёлая аллергическая реакция может развиться за минуты",
  "az adatlapjáról": "из его карточки",
  "az ő adatlapjáról, +2 nap tartalék": "из его карточки, +2 дня запаса",
  "amit viszünk; a teljes igény": "то, что берём; полная потребность",
  "indulásra; a teljes igény": "на выход; полная потребность",
  ": nincs megadva a testtömeg, 15 kg-mal számoltam. Az adatlapján javítható.": ": вес не указан, посчитал как 15 кг. Исправить можно в его карточке.",
  "Több helyen is bejelölve:": "Отмечено в нескольких местах:",
  "— mindegyiknél teljes mennyiséggel számít.": "— в каждом учитывается полное количество.",
  "A víz csak az indulásra elég: a teljes igény": "Воды хватит только на выход: полная потребность",
  "liter lenne, ebből": "литров, из них",
  "liter megy veletek. A többit útközben kell megszerezni és tisztítani.": "литров идёт с вами. Остальное придётся добывать и очищать в пути.",
  "Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez túrához való, és a listán kiírom, mennyit kell útközben szerezni.": "Считает только то, что ты способен нести: 1,5 литра на человека. Это для похода, и в списке я выпишу, сколько нужно добыть в пути.",
  "Jelöld ki, ki megy. Enélkül nem tudom kiszámolni, mennyi kell.": "Отметь, кто идёт. Без этого я не могу посчитать, сколько нужно.",
  "kategóriájú ruházatot kíván. A készletedben": "— одежда этой категории нужна. В твоих запасах",
  "ilyen tétel van.": "таких позиций.",
  "nincs ilyen tétel — a készletnél ez egy kategória.": "таких позиций нет — в запасах это категория.",
  "liter víz és": "литров воды и",
  "kcal élelem. Becsült tömeg:": "ккал еды. Ориентировочный вес:",
  "A víz csak az indulásra elég.": "Воды хватит только на выход.",
  "napra valójában": "дней на самом деле нужно",
  "liter kellene, ennyit viszont nem lehet elvinni.": "литров, но столько унести невозможно.",
  "liter, amit útközben kell megszerezni:": "литров нужно добыть в пути:",
  "vízszűrő, víztisztító tabletta, ismert vízvételi pont. Ezt a listán is nézd meg.": "фильтр для воды, таблетки для обеззараживания, известная точка набора воды. Посмотри это также в списке.",
  "A készletedben most": "В твоих запасах сейчас",
  "kcal van megadva, ami ennek az útnak a": "ккал, что для этой дороги составляет",
  "Hiányzik még kb.": "Не хватает ещё примерно",
  "Ez elég.": "Этого достаточно.",
  "tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz.": "позициях не указана энергетическая ценность (ккал/100 г), они не учтены. Если списать с коробки, будет точнее.",
  "Ez nehezebb, mint amit el tudtok vinni. A kijelölt személyek együtt kb.": "Это тяжелее, чем вы способны унести. Отмеченные люди вместе выдержат примерно",
  "kg-ot bírnak, a lista": "кг, а список весит",
  "kg. A víz a legnehezebb: fontold meg a vízszűrőt kanna helyett, vagy vidd rövidebb szakaszra.": "кг. Вода тяжелее всего: подумай о фильтре вместо канистры или бери на более короткий отрезок.",
  "Belefér: a kijelöltek kb.": "Помещается: отмеченные выдержат примерно",
  "kg-ot bírnak.": "кг.",
  "fő között: fejenként kb.": "людьми: на каждого примерно",
  "Nála:": "У него:",
  "kg (ebből": "кг (из них",
  "kg a sajátja": "кг своего",
  "kg a közösből": "кг из общего",
  "· teherbírása": "· грузоподъёмность",
  "— EZ TÖBB, MINT AMIT ELBÍR": "— ЭТО БОЛЬШЕ, ЧЕМ ОН СПОСОБЕН НЕСТИ",
  "— belefér": "— помещается",
  "A hiányzik jelölésűek a beszerzési listád. Most": "Отмеченные как «не хватает» — это твой список покупок. Сейчас",
  "ilyen van. A vizet és az élelmet a készlet KATEGÓRIÁJÁBÓL ismeri fel, a többit a nevéből.": "таких. Воду и еду распознаёт по КАТЕГОРИИ запаса, остальное — по названию.",
  "A víz- és energia-számok tervezési értékek, nem orvosi előírás. A csecsemő és az állat külön normával számol.": "Числа по воде и энергии — плановые величины, а не медицинское предписание. Младенец и животное считаются по отдельной норме.",
  "Egy power station a telefont, a lámpát és egy rádiót is elviszi napokig. Kisebb igényre powerbank is elég.": "Одна зарядная станция потянет телефон, лампу и рацию на несколько дней. При меньшей потребности хватит и павербанка.",
  "Tűzifa, PB-palack vagy fűtőolaj — a kockázatelemzés kiszámolja, mennyi kell a megadott napokra.": "Дрова, газовый баллон или печное топливо — оценка рисков посчитает, сколько нужно на заданное число дней.",
  "Kannás víz és víztisztító a legolcsóbb biztosíték. Egy IBC tartály hosszú távra megoldja.": "Вода в канистрах и средство для обеззараживания — самая дешёвая страховка. Ёмкость IBC решает вопрос надолго.",
  "Egy fejlámpa a legfontosabb: szabadon hagyja a kezed. Mellé egy tartalék elemkészlet.": "Самое важное — налобный фонарь: оставляет руки свободными. Плюс запасной комплект батареек.",
  "A tárolt üzemanyag a fűtésnél is szerepel: ugyanaz a liter vagy fűt, vagy visz.": "Хранимое топливо учитывается и в отоплении: тот же литр либо греет, либо везёт.",
  "Ehhez a helyszínhez még nincs készlet rendelve, ezért nem tudjuk mérni. A Készletnél a tétel Tárolási helyénél tudod bejelölni.": "К этой локации ещё не назначены запасы, поэтому измерить не можем. Отметить можно в разделе «Запасы», в поле «Место хранения» позиции.",
  "Ehhez a helyszínhez nincs tétel rendelve. A Készletnél a tétel Tárolási helyénél tudod bejelölni.": "К этой локации не назначена ни одна позиция. Отметить можно в разделе «Запасы», в поле «Место хранения» позиции.",
  ": nincs hatótáv — add meg a fogyasztást az adatlapján": ": запаса хода нет — укажи расход в его карточке",
  "20000 = 20 liter (millilitert kérünk)": "20000 = 20 литров (просим в миллилитрах)",
  "5000 = egy 5 literes kanna": "5000 = одна 5-литровая канистра",
  "1500 = másfél literes": "1500 = полуторалитровая",
  "100000 = egy mázsa": "100000 = один центнер",
  "11500 = egy 11,5 kg-os PB": "11500 = один баллон 11,5 кг",
  ". Ez soknak tűnik. Biztos, hogy jó a mennyiség": ". Это выглядит слишком много. Точно верное количество",
  "és az egységnyi súly? (Egy IBC tartály például 1 darab, 1000 kg.) OK = mégis felveszem.": "и вес единицы? (Ёмкость IBC, например, — 1 штука, 1000 кг.) OK = всё равно добавлю.",
  "A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan. Töltsd ki a Vészkártya szekcióban.": "Твоя карточка экстренной помощи (группа крови, аллергия, лекарства, контакт) быстро появляется здесь. Заполни в разделе «Карточка экстренной помощи».",
  "pl. Amit hozz magaddal": "напр. Что взять с собой",
  "víz 5 liter&#10;elemlámpa&#10;gyógyszerek": "вода 5 литров&#10;фонарик&#10;лекарства",
  "Vízitúra": "Водный поход",
  "Őszi túra": "Осенний поход",
  "Nyári túra": "Летний поход",
  "Esőkabát": "Дождевик",
  "Ehhez a helyszínhez még nincs készlet rendelve, ezért nem tudjuk mérni. A Készletnél a tétel Tárolási helyénél válaszd ki:": "К этой локации ещё не назначены запасы, поэтому измерить не можем. В разделе «Запасы», в поле «Место хранения» позиции выбери:",
  "élelmiszernél hiányzik az energia (kcal/100 g) — addig az étel „?”.": "в продуктах не хватает энергетической ценности (ккал/100 г) — до тех пор еда помечена „?”.",
  "Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez túrához való, és a listán kiírom, mennyi hiányzik a teljes fejadaghoz.": "Считает только то, что ты способен нести: 1,5 литра на человека. Это для похода, и в списке я выпишу, сколько не хватает до полной нормы.",
  "tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz a kép.": "позициях не указана энергетическая ценность (ккал/100 г), они не учтены. Если списать с коробки, картина будет точнее.",
  "A víz- és energia-számok tervezési értékek, nem orvosi előírás. A csecsemő és az állat külön normán fut, nem a felnőtt arányosításából.": "Числа по воде и энергии — плановые величины, а не медицинское предписание. Младенец и животное считаются по отдельной норме, а не пропорционально от взрослого.",
  "fő ·": "человек ·",
  "nap ·": "дней ·",
  "fő/állat ·": "человек/животных ·",
  "fő)": "человек)",
  "Víz (": "Вода (",
  "kg testtömegre)": "кг массы тела)",
  "0,06 l/testtömeg-kg/nap": "0,06 л/кг массы тела/сутки",
  "l/nap ×": "л/сутки ×",
  "kcal/nap ×": "ккал/сутки ×",
  "személyre szóló (": "на человека (",
  ": be van írva a betegség (": ": заболевание указано (",
  "fejenként egy (": "по одному на человека (",
  "— a": "— из",
  "-es tank": "-литрового бака",
  "m² alapján": "по м²",
  "%-a .": "% .",
  "a helyszín típusa szerint": "по типу локации",
  "kézzel megadott": "задано вручную",
  "kézzel megadott napi igény": "вручную заданная суточная потребность",
  "itteni élelmiszernél hiányzik a súly vagy az energia (kcal/100 g), ezért nem számít bele. Nyisd meg a tételt a Készletnél, és írd be a doboz adatait.": "здешних продуктов не хватает веса или энергетической ценности (ккал/100 г), поэтому они не учтены. Открой позицию в разделе «Запасы» и впиши данные с коробки.",

  // --- POTLAS 2026-08-31 (Marveen): a het szotar osszevetesebol hianyzo kulcsok.
  // Az UKRAN valtozat volt az egyetlen teljes (1218 kulcs); ezek a tobbi hatbol
  // kimaradtak. Forditatlanul nem hibaznak, hanem MAGYARUL jelennek meg.
  "A szoba kulcsa": "Ключ комнаты",
  "A tudástár betöltése folyamatban…": "Загрузка базы знаний…",
  "Távolság mérése": "Измерение расстояния",
  "Törölve.": "Удалено.",
  "helyszín": "место",
  "Élelmiszer:": "Продукты:",
  "Összes hely": "Все места",
  "ÜTEM INDÍTÁSA": "ЗАПУСТИТЬ РИТМ",

  // --- POTLAS 2026-08-31 (Marveen), a `pp-i18n-hiany.mjs` MERESEBoL: 18 szoveg, ami
  // tenylegesen MAGYARUL jelent meg az idegen nyelvu feluleten. A kulcsok a mero
  // kimenetebol valok (`store/pp-i18n-hiany.json`), nem kezzel gepelve.
  // Az ALLPOWERS-tetelknel a MARKANEV es a TIPUS valtozatlan, csak a leiras fordul.
  "2 méter (145 MHz) — amatőr": "2 метра (145 МГц) — любительский",
  "40 méter (7 MHz) — amatőr, rövidhullám": "40 метров (7 МГц) — любительский, коротковолновый",
  "70 cm (435 MHz) — amatőr": "70 см (435 МГц) — любительский",
  "80 méter (3,6 MHz) — amatőr, rövidhullám": "80 метров (3,6 МГц) — любительский, коротковолновый",
  "CB (27 MHz) — polgári sáv": "CB (27 МГц) — гражданский диапазон",
  "PMR446 (446 MHz) — engedély nélküli kézirádió": "PMR446 (446 МГц) — рация без лицензии",
  "ALLPOWERS B1000 bővítő akku (1152 Wh)": "ALLPOWERS B1000 дополнительный аккумулятор (1152 Вт·ч)",
  "ALLPOWERS B3000 bővítő akku (3168 Wh)": "ALLPOWERS B3000 дополнительный аккумулятор (3168 Вт·ч)",
  "ALLPOWERS P1800 (1024 Wh): 1024 Wh tárolt energia, 1800 W folyamatos kimenet": "ALLPOWERS P1800 (1024 Вт·ч): 1024 Вт·ч запасённой энергии, 1800 Вт постоянной мощности",
  "ALLPOWERS SF100 (100 W, hajlékony)": "ALLPOWERS SF100 (100 Вт, гибкая)",
  "ALLPOWERS SF200 (200 W, hajlékony)": "ALLPOWERS SF200 (200 Вт, гибкая)",
  "ALLPOWERS SP012 (100 W, terepszínű)": "ALLPOWERS SP012 (100 Вт, камуфляж)",
  "Jegyzet rajzolása": "Нарисовать заметку",
  "2100 kcal fejenként naponta. Járkálás, ház körüli teendők. Ez a nemzetközi vészhelyzeti tervezés alapszáma is.": "2100 ккал на человека в сутки. Ходьба, дела по дому. Это также базовая цифра международного планирования на случай ЧС.",
  "A hatótávot HÁROM dolog dönti el, és a watt csak az egyik — rendszerint a legkisebb súlyú. A másik kettő: hogy MILYEN SÁVON adsz, és hogy MI van közted és a másik között. Ezért nem lehet egy rádióra egyetlen kilométer-számot mondani.": "Дальность определяют ТРИ вещи, и ватты — лишь одна из них, обычно наименее важная. Другие две: в КАКОМ ДИАПАЗОНЕ вы передаёте и ЧТО находится между вами и корреспондентом. Поэтому для рации нельзя назвать одну цифру в километрах.",
  "Írd be, amit tudsz — ami nincs a listán, azt add hozzá a végén. A kilogrammnál a SZÁRAZ tömeg számít (a rizs főzve nehezebb, de ugyanannyi kalória).": "Впишите, что знаете — чего нет в списке, добавьте в конце. В килограммах считается СУХОЙ вес (варёный рис тяжелее, но калорий столько же).",
  "Magyarországon engedély nélkül használható, de a törvény MAXIMUM 0,5 wattot és gyári, nem cserélhető antennát enged. Ezért van, hogy a doboz 10 kilométert ígér, a valóság meg 1-3.": "В Венгрии её можно использовать без лицензии, но закон разрешает МАКСИМУМ 0,5 ватта и заводскую несменную антенну. Поэтому на коробке обещают 10 километров, а на деле выходит 1-3.",
  "Nem fogyókúrás számoló. Azt mondja meg, hogy a KÉSZLETED hány napra elég, és mennyi hiányzik ahhoz a naphoz, ameddig ki akarod húzni. A napi szükséglet nem „normál\" étkezés: vészhelyzetben a cél a működőképesség, nem a jóllakottság.": "Это не калькулятор для похудения. Он говорит, на сколько дней хватит ВАШЕГО ЗАПАСА и сколько не хватает до того дня, до которого вы хотите продержаться. Суточная потребность — не 'обычное' питание: в чрезвычайной ситуации цель — сохранить работоспособность, а не сытость.",

  // SUGO-TURA (coach) szovegei, 2026-10-05 -- Fonok: "Menjen a forditas."
  "Helyi szoba: szöveg a közeledben lévőknek, közös hálón, internet nélkül.": "Локальная комната: текст для тех, кто рядом с тобой, в общей сети, без интернета.",
  "Szobák: zárt csoport, amit a gazda kódjával lehet elérni, interneten át. Messziről is.": "Комнаты: закрытая группа, доступная по коду владельца, через интернет. Даже издалека.",
  "Morze: rövid üzenet hanggal vagy fénnyel; a vétel kamerával és mikrofonnal megy.": "Морзе: короткое сообщение звуком или светом; приём работает через камеру и микрофон.",
  "Fax (SSTV): kép átküldése hangban, rádión is. Ugyanaz a gomb indít és állít.": "Факс (SSTV): передача изображения в звуке, в том числе по рации. Та же кнопка запускает и останавливает.",
  "Adás: ide írod az üzenetet, és a telefon hanggal vagy fénnyel leadja.": "Передача: здесь ты вводишь сообщение, и телефон передаёт его звуком или светом.",
  "Olvasás fényből: a kamera a másik villogó fényét olvassa vissza szöveggé.": "Чтение по свету: камера превращает мигающий свет другого обратно в текст.",
  "Olvasás hangból: a mikrofon a sípoló jelet fejti vissza.": "Чтение по звуку: микрофон расшифровывает пищащий сигнал.",
  "Gyakorló: hallás utáni fejtés, kézi kulcs és kopogás — itt tanulod meg.": "Тренажёр: расшифровка на слух, ручной ключ и стук — здесь ты этому учишься.",
  "Alapok: időzítés, sebesség, a teljes ábécé, és mit tegyél zárt helyen.": "Основы: ритм, скорость, полный алфавит и что делать в закрытом помещении.",
  "A szoba beállításai": "Настройки комнаты",
  "A szoba kódja: ezt add meg annak, akit behívsz. Koppints rá, és a vágólapra kerül.": "Код комнаты: дай его тому, кого приглашаешь. Коснись — и он попадёт в буфер обмена.",
  "Értesítés: a készülék engedélye, és külön az, hogy EBBEN a szobában jelezzen-e.": "Уведомление: разрешение устройства и отдельно то, должно ли оно оповещать в ЭТОЙ комнате.",
  "A neved: ezen a néven látnak minden szobában. Egy szobában egy nevet csak egy valaki használhat.": "Твоё имя: под этим именем тебя видят в каждой комнате. В одной комнате имя может использовать только один человек.",
  "Tagok: a szoba tagjainak listája. Ha te vagy a gazda, egy tagra koppintva eltávolíthatod: az új üzeneteket már nem látja, és csak új meghívóval jöhet vissza.":
    "Участники: список участников комнаты. Если вы владелец, нажмите на участника, чтобы удалить его: он больше не увидит новых сообщений и сможет вернуться только по новому приглашению.",
  "Megszüntetés: ha te vagy a gazda, a törlés mindenkinek megszünteti. Ha nem, csak te lépsz ki.": "Удаление: если ты владелец, удаление убирает комнату для всех. Если нет, выходишь только ты.",
  "A helyi szoba beállításai": "Настройки локальной комнаты",
  "A szoba kulcsa: közös jelszó. Akinek nincs meg, annak értelmetlen betűsor marad az üzenet.": "Ключ комнаты: общий пароль. У кого его нет, для того сообщение остаётся бессмысленным набором букв.",
  "A neved: ezt látják a többiek az üzeneted mellett.": "Твоё имя: это видят остальные рядом с твоим сообщением.",
  "Morze adás": "Передача Морзе",
  "Ide írod az üzenetet. Ékezet és cirill nem megy: a Morze-tábla latin betűt és számot ismer.": "Здесь ты вводишь сообщение. Диакритика и кириллица не работают: таблица Морзе знает латинские буквы и цифры.",
  "Alatta rögtön látod, hogy néz ki Morze-jelekben.": "Сразу под ним видно, как это выглядит в знаках Морзе.",
  "Adás: ugyanaz a gomb indít és állít. Nincs külön Állj.": "Передача: та же кнопка запускает и останавливает. Отдельного Стоп нет.",
  "SOS: egy koppintás, és megy a nemzetközi vészjel, amíg le nem állítod.": "SOS: одно касание — и идёт международный сигнал бедствия, пока ты его не остановишь.",
  "A fogaskerék alatt a sebesség, a hangmagasság, az ismétlés és a villogtatás.": "Под шестерёнкой: скорость, высота тона, повтор и мигание.",
  "Olvasás fényből": "Чтение по свету",
  "Indítsd, és irányítsd a kamerát a villogó fényre. Sötét háttér, a fény a kép közepén.": "Запусти и наведи камеру на мигающий свет. Тёмный фон, свет посередине кадра.",
  "A lámpa és a sáv mutatja, mit lát a kamera. Ha nem villan, nem jó a kivágás.": "Лампа и полоса показывают, что видит камера. Если не мигает, кадр выбран неудачно.",
  "Fent a nyers jel, alatta a megfejtett szöveg.": "Сверху сырой сигнал, под ним расшифрованный текст.",
  "A fogaskerék alatt a vétel-sebesség, a nagyítás és a kalibráció.": "Под шестерёнкой: скорость приёма, увеличение и калибровка.",
  "Olvasás hangból": "Чтение по звуку",
  "Indítsd, és tartsd a telefont a hang felé. Csendben megy a legjobban.": "Запусти и держи телефон к звуку. Лучше всего работает в тишине.",
  "A lámpa és a frekvencia mutatja, mit hall. Zajra az érzékenységet szigorítsd.": "Лампа и частота показывают, что он слышит. Против шума сделай чувствительность строже.",
  "A fogaskerék alatt a vétel-sebesség, az érzékenység és a kalibráció.": "Под шестерёнкой: скорость приёма, чувствительность и калибровка.",
  "Morze gyakorló": "Тренажёр Морзе",
  "Három mód: hallás után, kézi kulcs és kopogás. Egy koppintás a váltás.": "Три режима: на слух, ручной ключ и стук. Одно касание переключает.",
  "Mit gyakorolsz: betű, szám, három jel vagy szó. Kezdd a betűvel.": "Что тренируешь: буква, цифра, три знака или слово. Начни с буквы.",
  "Új feladat lejátszik egy jelet. Ha nem kaptad el, játszd le újra.": "Новое задание проигрывает сигнал. Если не уловил, проиграй ещё раз.",
  "Írd le, amit hallottál, és ellenőrizd. A megoldás és a Morze-minta csak utána látszik.": "Запиши, что услышал, и проверь. Ответ и рисунок Морзе появляются только потом.",
  "Kézi kulcs": "Ручной ключ",
  "Nyomd és tartsd: rövid a pont, hosszú a vonás. Gépen a szóköz is kulcs.": "Нажми и держи: коротко — точка, долго — тире. На компьютере пробел тоже ключ.",
  "Fent a jel, alatta amit a gép kiolvasott belőle. A szünet hossza adja a betű- és szóhatárt.": "Сверху сигнал, под ним то, что приложение из него прочитало. Длина паузы задаёт границу буквы и слова.",
  "Törlés: tiszta lappal kezdesz.": "Очистить: начинаешь с чистого листа.",
  "Kopogás": "Стук",
  "A rács: minden betű két koppintás-csoport, előbb a sor, aztán az oszlop. A C és a K egy mezőn van.": "Сетка: каждая буква — это две группы стуков, сначала строка, потом столбец. C и K в одной клетке.",
  "Mutat egy betűt, te lekopogod: sor, szünet, oszlop. A szünet zárja a csoportot.": "Показывает букву, а ты её выстукиваешь: строка, пауза, столбец. Пауза закрывает группу.",
  "Megmondja, jó volt-e, és kiírja a betű helyét a rácsban.": "Говорит, верно ли было, и показывает место буквы в сетке.",
  "Morze alapok": "Основы Морзе",
  "A teljes ábécé. Ez a táblázat magából a kódból épül, tehát nem tud eltérni attól, amit az app ad.": "Полный алфавит. Эта таблица строится из самого кода, поэтому она не может отличаться от того, что передаёт приложение.",
  "Kézi visszafejtés: ha leírtad a hallott jelet, ide beírva megkapod a szöveget.": "Ручная расшифровка: если ты записал услышанный сигнал, введи его здесь — и получишь текст.",
  "Adás beállításai": "Настройки передачи",
  "Sebesség és hangmagasság. Kezdőnek a lassabb a jobb.": "Скорость и высота тона. Новичку лучше помедленнее.",
  "Ismétlés: addig megy a jel, amíg le nem állítod.": "Повтор: сигнал идёт, пока ты его не остановишь.",
  "Fény, hang vagy mindkettő. A vaku nem minden telefonon megy; a képernyő mindig.": "Свет, звук или оба. Вспышка работает не на каждом телефоне; экран — всегда.",
  "Kalibrációs adás: a PARIS szót küldi, amiből a másik fél beállítja a tempót.": "Калибровочная передача: посылает слово PARIS, по которому другая сторона настраивает темп.",
  "Fény-vétel beállításai": "Настройки приёма по свету",
  "Vétel-sebesség: állítsd a vett Morze tempójához, amíg tisztán jönnek a betűk.": "Скорость приёма: настрой её на темп принимаемой Морзе, пока буквы не пойдут чисто.",
  "Nagyítás: távoli fényhez.": "Увеличение: для далёкого света.",
  "Kalibráció: a másik PARIS-t küld, ez megméri belőle a tempót.": "Калибровка: другая сторона посылает PARIS, и по нему измеряется темп.",
  "Hang-vétel beállításai": "Настройки приёма по звуку",
  "Vétel-sebesség: állítsd a vett Morze tempójához.": "Скорость приёма: настрой её на темп принимаемой Морзе.",
  "Érzékenység: balra érzékenyebb, jobbra szigorúbb a zajra.": "Чувствительность: влево чувствительнее, вправо строже к шуму.",
  "Mód: Martin M1 a biztos; a vevőnek ugyanezt kell tudnia.": "Режим: Martin M1 надёжен; приёмник должен знать тот же.",
  "Kép választása, majd Adás: a telefon hangként játssza le. Tartsd a rádió mikrofonjához.": "Выбери изображение, затем Передача: телефон проигрывает его как звук. Поднеси его к микрофону рации.",
  "Vétel: ugyanaz a gomb indít és állít. Hangfájlból is megy, ha valaki felvételt küld.": "Приём: та же кнопка запускает и останавливает. Работает и из аудиофайла, если кто-то пришлёт запись.",
  "Nyomd hosszan a térképet: ott új pontot veszel fel. A helyszínek jelölőjén a szám a készültség, nem sorszám.": "Нажмите и удерживайте карту: там вы добавите новую точку. На метках ваших мест число означает уровень готовности, а не порядковый номер.",
  "Mérés: két koppintás, és megkapod a távolságot.": "Измерение: два касания — и у тебя расстояние.",
  "Pont ide, ahol vagyok: a GPS helyedet menti. Helyzetem küldése: elküldöd valakinek, hol vagy.": "Точка прямо здесь: сохраняет твою GPS-позицию. Отправить мою позицию: ты отправляешь кому-то, где ты.",
  "Pontok kimentése (GPX): a pontjaid fájlba, más térképbe is.": "Экспорт точек (GPX): твои точки в файл, в том числе для других карт.",
  "Terület letöltése: a térkép offline is meglesz. Ha nem kell már, a Tárolt térkép törlése felszabadítja a helyet.": "Скачать область: карта будет и офлайн. Если она больше не нужна, Удалить сохранённую карту освобождает место.",
  "A bővített tudástár a Prémium része: prémium kóddal, egyszeri feloldással, véglegesen. A cikk elején látod, meddig tart az ingyenes rész és hol kezdődik a bővített.": "Расширенная база знаний входит в Премиум: разблокируется один раз премиум-кодом, навсегда. В начале статьи видно, где заканчивается бесплатная часть и начинается расширенная.",
  "Kereséssel gyorsabban odaérsz, mint görgetéssel.": "Поиском доберёшься быстрее, чем прокруткой.",
  "Új tétel: mi az, mennyi, hol tartod, mikor jár le. A lejárat színe magától változik.": "Новая позиция: что это, сколько, где хранишь, когда истекает срок. Цвет срока меняется сам.",
  "Szűrés kategóriára, helyszínre és készlet-fajtára: a 72 órás csomagot például külön látod.": "Фильтрация по категории, месту и виду запаса: 72-часовой набор, например, видишь отдельно.",
  "72h csomag: egy koppintással feltölti az alap-listát, amit aztán a sajátodra igazítasz.": "Набор 72 ч: одно касание заполняет базовый список, который ты потом подгоняешь под себя.",
  "Export: a lista fájlba, például a családnak. Ürítés: mindent töröl, előtte exportálj.": "Экспорт: список в файл, например для семьи. Очистка: удаляет всё, сначала экспортируй.",
  "Kik mennek: a lista a Háztartásnál felvett családtagokból áll össze.": "Кто идёт: список складывается из членов семьи, добавленных в Домохозяйстве.",
  "Hogyan és milyen út: autóval más fér, mint hátizsákkal; a túra fajtája hozza a saját tételeit.": "Как и какая дорога: в машину помещается другое, чем в рюкзак; тип вылазки приносит свои позиции.",
  "Hány napra: ebből számol a víz és az élelem.": "На сколько дней: из этого считаются вода и еда.",
  "A súlykeret azt mutatja, mennyit bírtok el összesen, nem azt, mennyi fér a zsákba.": "Предел веса показывает, сколько вы унесёте вместе, а не сколько поместится в рюкзак.",
  "Itt veszed fel a családot. Innen jön a fejadag és a Mit vigyek lista.": "Здесь ты добавляешь семью. Отсюда берутся суточная норма и список Что взять.",
  "Háziállat is számít: víz és élelem neki is kell.": "Домашние животные тоже считаются: им тоже нужны вода и еда.",
  "Helyszín: otthon, nyaraló, autó. Mindegyiknek saját készlete és készültség-kártyája lesz a kezdőlapon.": "Место: дом, дача, машина. У каждого будет свой запас и своя карточка готовности на главной странице.",
  "Ezt látja, aki megtalálja a telefonod. Csak azt írd ide, amit egy idegen is láthat.": "Это видит тот, кто найдёт твой телефон. Пиши сюда только то, что может увидеть и незнакомец.",
  "Vércsoport, allergia, gyógyszer, betegség: ez az, ami egy mentőnek számít.": "Группа крови, аллергия, лекарство, болезнь: именно это важно для медика.",
  "Kit hívjanak: egy név és egy szám elég.": "Кого вызвать: достаточно одного имени и одного номера.",
  "QR-kód: a kártya egy képben, amit a másik telefon beolvas.": "QR-код: карточка в одном изображении, которое считает другой телефон.",
  "Nyomtatás: a tárcába. Mind nyomtatása minden családtagét, a Családi kártya egy QR-ral az egész családot.": "Печать: в кошелёк. Печатать всё печатает карточку каждого члена семьи, а Семейная карточка вмещает всю семью в один QR.",
  "PIN: az iratok zárva vannak, amíg be nem írod.": "PIN: документы заблокированы, пока ты его не введёшь.",
  "Hozzáadás: fotó vagy PDF. A telefonon marad, felhőbe nem megy.": "Добавить: фото или PDF. Остаётся на телефоне, в облако не уходит.",
  "Közös jelszó: egy mondat, amit csak ti tudtok. Ugyanaz kell mindkét telefonon; mentsd el.": "Общий пароль: фраза, которую знаете только вы. На обоих телефонах нужен один и тот же; сохрани его.",
  "Üzenet vagy hely, majd QR készítése. A kód a teljes adatot viszi, nem linket: internet nélkül is megy.": "Сообщение или место, затем Создать QR. Код несёт полные данные, а не ссылку: работает и без интернета.",
  "Beolvasás kamerával vagy fájlból, majd Megfejtés. Csak a jelszó birtokosa olvassa.": "Считывание камерой или из файла, затем Расшифровать. Читает только тот, у кого есть пароль.",
  "Az imádságok mindig itt vannak, letöltés nélkül is. Koppints egy címre, és olvasd.": "Молитвы всегда здесь, даже без загрузки. Коснись заголовка и читай.",
  "A teljes Biblia egyszer letöltendő, utána offline is működik. Ha ez a gomb látszik, még nincs letöltve.": "Полную Библию нужно скачать один раз, после этого она работает и офлайн. Если эта кнопка видна, она ещё не скачана.",
  "A könyvek rácsa: Ószövetség fent, Újszövetség lent. Koppints a könyvre, aztán a fejezetre, aztán a versre.": "Сетка книг: Ветхий Завет сверху, Новый Завет снизу. Коснись книги, затем главы, затем стиха.",
  "Keresés szó szerint, vagy hely szerint (Ján 3,16). Amit megjelölsz, a Kiemeléseim alatt visszatalálod.": "Поиск по словам или по месту (Ин. 3,16). То, что отметишь, найдёшь снова в Моих выделениях.",
  "PIN: a tárca zárva van, amíg be nem írod. Első használatkor te adod meg.": "PIN: кошелёк заблокирован, пока ты его не введёшь. При первом использовании ты задаёшь его сам.",
  "A szám azt mutatja, mennyi áll a tárcádban; a rekeszek külön célra tesznek félre.": "Число показывает, сколько есть в твоём кошельке; отделения откладывают на отдельные цели.",
  "Felveszed az azimutot, és a tájoló mutatja a visszautat is. Törlés, ha új irány kell.": "Ты берёшь азимут, и компас показывает также обратный путь. Очисти, если нужно новое направление.",
  "Napkelte, napnyugta, holdfázis: mennyi világosod van. Mérés a helyzetemre pontosít GPS-szel.": "Восход, закат, фаза луны: сколько у тебя дневного света. Измерение уточняет это до твоей позиции по GPS.",
  "Légnyomás: írd be vagy mérd a szenzorral, és rögzítsd. Az esés vihart jelez; a küszöb és az értesítés itt állítható.": "Атмосферное давление: введи его или измерь датчиком и запиши. Падение предвещает бурю; порог и уведомление настраиваются здесь.",
  "Több számoló egy helyen: koppints arra, amelyik kell. Mindegyik egy kérdésre válaszol: meddig elég, mennyi kell.": "Несколько калькуляторов в одном месте: коснись того, который нужен. Каждый отвечает на один вопрос: на сколько хватит, сколько нужно.",
  "Víztisztítás: mennyi hipó kell, és meddig kell forralni. A töménységet az üvegről olvasd le.": "Очистка воды: сколько нужно отбеливателя и сколько надо кипятить. Концентрацию читай на бутылке.",
  "Két út van: forralás vagy hipó. A forralás egyszerűbb, a hipó akkor jó, ha nincs mivel tüzelni.": "Есть два пути: кипячение или отбеливатель. Кипячение проще, отбеливатель хорош, когда нечем развести огонь.",
  "A hipó töménységét az ÜVEGRŐL olvasd le. A megadott mennyiségek 5 százalékos szerre szólnak — gyengébből több kell. Ha az üvegen más áll, ne fejből számolj.": "Концентрацию отбеливателя читай НА БУТЫЛКЕ. Указанные количества рассчитаны на 5-процентное средство — более слабого нужно больше. Если на бутылке другое, не считай по памяти.",
  "A számoló a megadott töménységgel dolgozik. Ha átállítod, a mennyiség is változik — ezért kérdezi meg.": "Калькулятор работает с заданной концентрацией. Если её изменить, изменится и количество — поэтому он спрашивает.",
  "A Szoba zárt csoport, ami interneten át is elérhető: aki messze van, az is beszélget. A Helyi szoba ezzel szemben a közeledben lévőknek szól, hálózat nélkül.": "Комната — это закрытая группа, доступная и через интернет: говорит и тот, кто далеко. Локальная комната, напротив, для тех, кто рядом с тобой, без сети.",
  "Új szobát itt hozol létre. Te leszel a gazdája: te engeded be, aki kér.": "Здесь ты создаёшь новую комнату. Ты будешь её владельцем: ты впускаешь того, кто просит.",
  "Ha máshoz csatlakoznál: írd be a gazdától kapott kódot, és küldd el a kérelmet. A gazda jóváhagyása után vagy bent.": "Если хочешь присоединиться к кому-то: введи код, полученный от владельца, и отправь запрос. После его одобрения ты внутри.",
  "Ide írod az üzenetet, és a Küldés viszi el a szoba minden tagjának.": "Здесь ты вводишь сообщение, и Отправить доносит его до всех участников комнаты.",
  "A Sürgős jelölés pirossal emeli ki az üzenetet mindenkinél.": "Пометка Срочно выделяет сообщение красным у всех.",
  "Gazdaként itt látod a belépési kérelmeket, és itt adod ki a meghívó-kódot.": "Как владелец здесь ты видишь запросы на вход и здесь выдаёшь код приглашения.",
  "Helyi üzenetek": "Локальные сообщения",
  "A Helyi szoba a közeledben lévő telefonoknak szól, közös hálón, internet nélkül. A pont zölden mutatja, ha él a kapcsolat.": "Локальная комната предназначена для телефонов рядом с тобой, в общей сети, без интернета. Точка горит зелёным, если связь жива.",
  "Ha nem talál senkit: Próbáld újra. Mindenkinek ugyanazon a helyi hálón kell lennie.": "Если никого не находит: Попробуй снова. Все должны быть в одной локальной сети.",
  "A közös kulcs titkosítja az üzeneteket: ugyanazt a kulcsot add meg minden telefonon, és mentsd el.": "Общий ключ шифрует сообщения: введи один и тот же ключ на каждом телефоне и сохрани его.",
  "Kommunikáció: üzenet szöveggel, hanggal vagy fénnyel, akkor is, ha nincs térerő.": "Связь: сообщение текстом, звуком или светом, даже когда нет покрытия.",
  "Térkép: helyszíneid, offline térképpel és mért távolsággal.": "Карта: твои места, с офлайн-картой и измеренным расстоянием.",
  "Tudástár: a felkészülés cikkei, kereshetően.": "База знаний: статьи о подготовке, с поиском.",
  "Készlet: mi van, hol van, mikor jár le.": "Запасы: что есть, где оно, когда истекает срок.",
  "Mit vigyek: a csomaglista a családodra és az útra szabva.": "Что взять: список вещей, подобранный под твою семью и дорогу.",
  "Kockázat: a leggyengébb pontod egy gyűrűn.": "Риск: твоё самое слабое место на одном кольце.",
  "Háztartás: a családtagok és a helyszínek; innen számol minden más.": "Домохозяйство: члены семьи и места; отсюда считается всё остальное.",
  "Vészkártya: amit egy idegen láthat, ha megtalálja a telefonod.": "Карточка на случай беды: то, что может увидеть незнакомец, если найдёт твой телефон.",
  "Irattárca: az iratok fotói a telefonon, PIN mögött.": "Кошелёк документов: фото твоих документов на телефоне, за PIN-кодом.",
  "Titkos QR: üzenet vagy hely, amit csak a kód olvasója lát.": "Секретный QR: сообщение или место, которое видит только владелец кода.",
  "Biblia: imádságok, keresés, kiemelések, offline.": "Библия: молитвы, поиск, выделения, офлайн.",
  "Token tárca: az egyenleged és a rekeszeid.": "Кошелёк токенов: твой баланс и твои отделения.",
  "Tájoló: irány, azimut, napkelte és napnyugta.": "Компас: направление, азимут, восход и закат.",
  "Kalkulátor: víz, áram, kalória, fűtés és a többi számoló egy helyen.": "Калькулятор: вода, электричество, калории, отопление и остальные калькуляторы в одном месте.",
  "Vagyonkezelő: kiadás, bevétel, zsebek, a saját lapján.": "Управление имуществом: расходы, доходы, карманы, на своей странице.",
  "Gyülekező: a közösség fóruma, interneten.": "Сообщество: форум сообщества, в интернете.",
  "Nyelv: az app felülete azonnal átvált, a tudástár cikkei is, ha van fordításuk.": "Язык: интерфейс приложения переключается сразу, и статьи базы знаний тоже, если у них есть перевод.",
  "Teljes mentés: minden adatod egy fájlba, amit vissza tudsz tölteni egy másik telefonon.": "Полная резервная копия: все твои данные в один файл, который можно восстановить на другом телефоне.",
  "Visszatöltés a mentett fájlból. A biztonsági másolatból akkor állíts vissza, ha egy mentés félresikerült.": "Восстановление из сохранённого файла. Из резервной копии восстанавливай тогда, когда сохранение не удалось.",
  "Menüsor bemutatása: az alsó gombok súgója újra.": "Обзор панели меню: справка по нижним кнопкам ещё раз.",
  "Gyári visszaállítás mindent töröl a telefonról. Előtte ments.": "Сброс к заводским настройкам удаляет всё с телефона. Перед этим сохрани.",
  "Ha az app sötét vagy üres marad: engedélyezd a vírusirtóban (például Avast), vagy használd a böngészős változatot. A Play-áruházban vásárolt prémium árát 48 órán belül visszakérheted.": "Если приложение остаётся тёмным или пустым: разрешите его в антивирусе (например, Avast) или используйте версию в браузере. Премиум, купленный в Google Play, можно вернуть в течение 48 часов.",
  "Itt minden modul listában is elérhető, ugyanoda visz, mint a kezdőlap csempéi.": "Здесь каждый модуль доступен и списком, ведёт туда же, куда плитки главной страницы.",
  "Add meg, mi az, mennyi, és mennyit nyom: ebből számol a készlet és a Mit vigyek.": "Укажи, что это, сколько и сколько весит: из этого считаются запасы и Что взять.",
  "A lejárathoz elég egy gyors gomb: +6 hónap, +1 év. A színe magától változik, ahogy közeledik.": "Для срока хватает быстрой кнопки: +6 месяцев, +1 год. Цвет меняется сам, по мере приближения.",
  "Hol tartod: a helyszín dönti el, melyik készültség-kártyán jelenik meg.": "Где хранишь: место решает, на какой карточке готовности оно появится.",
  "A képernyő-fény húzással állítható: minél erősebb, annál messzebbről látszik — de annál gyorsabban fogy az akku.": "Яркость экрана регулируется перетаскиванием: чем сильнее, тем издалека виднее — но тем быстрее садится батарея.",
  "Böngészőből iPhone-on a vaku egyáltalán nem indul, Androidon sem mindenhol. A képernyő-fény viszont mindig van.": "Из браузера на iPhone вспышка не запускается вообще, да и на Android не везде. Свет экрана, напротив, есть всегда.",
  "Sípolás: éles hang a telefonból; a Folyamatos addig szól, amíg le nem állítod. A hangmagasság állítható.": "Свист: резкий звук из телефона; Непрерывный звучит, пока ты его не остановишь. Высоту тона можно настроить.",
  "Újraélesztés üteme: a gomb tartja a helyes tempót. Nyomd a mellkast a jelre.": "Ритм реанимации: кнопка держит правильный темп. Нажимай на грудь в такт.",
  "112 hívása: közvetlenül tárcsáz. Ha nincs térerő, a segélyhívás akkor is próbálkozik.": "Вызов 112: набирает напрямую. Если нет покрытия, экстренный вызов всё равно пытается.",
  "Mobiltelefon": "Мобильный телефон",
  "Kézi rádió (adóvevő)": "Портативная рация",
  "Zsebrádió": "Карманный радиоприёмник",
  "Átjátszó": "Ретранслятор",
  "Antenna": "Антенна",
  "Takaró / pokróc": "Одеяло",
};

// ---------------------------------------------------------------------------
// MINTAK -- ami SZAMOT tartalmaz, az nem lehet szotar-kulcs.
// A SORREND SZAMIT: a fordito az ELSo illeszkedot hasznalja, a pontosabb all elol.
// ---------------------------------------------------------------------------
// 2026-10-11: Biblia nyito csempek, beallitasok, vers-menu, jegyzetek, kereszthivatkozasok, hang-letoltes
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "+ Új kategória…": "+ Новая категория…",
  "A letölthető hanganyag listája most nem érhető el.": "Список аудио для загрузки сейчас недоступен.",
  "A letöltés csak nyitott alkalmazással halad. Ha bezárod, a következő megnyitáskor magától folytatódik.": "Загрузка идёт, только пока приложение открыто. Если закрыть его, она сама продолжится при следующем открытии.",
  "A letöltés megállt": "Загрузка остановлена",
  "A letöltéshez be kell jelentkezned a fiókodba (Profil → Fiók).": "Чтобы скачать, войдите в свою учётную запись (Профиль → Аккаунт).",
  "A letöltéshez újra be kell lépned. Frissítsd az oldalt, és lépj be.": "Чтобы скачать, нужно войти снова. Обновите страницу и войдите.",
  "A telefon saját hangja": "Собственный голос телефона",
  "A vers a vágólapra került, illeszd be, ahová szeretnéd.": "Стих скопирован в буфер обмена; вставьте его куда нужно.",
  "A versek mellett egy kis jel mutatja, ha más igék kapcsolódnak hozzá; rákoppintva átugorhatsz a kapcsolódó igére. Forrás: OpenBible.info (CC BY).": "Небольшой значок у стиха показывает, что с ним связаны другие стихи; нажмите, чтобы перейти к связанному стиху. Источник: OpenBible.info (CC BY).",
  "Az új kategória neve:": "Название новой категории:",
  "Biblia beállítások": "Настройки Библии",
  "Csak magyar nyelven érhető el.": "Доступно только на венгерском.",
  "Ez az eszköz nem enged másolni.": "Это устройство не разрешает копирование.",
  "Felolvasás beállításai": "Настройки чтения вслух",
  "Felolvasó hang": "Голос чтения",
  "Forrás: OpenBible.info kereszthivatkozások (CC BY), a legtöbbet szavazottak.": "Источник: перекрёстные ссылки OpenBible.info (CC BY), самые популярные.",
  "Imák": "Молитвы",
  "Jegyzeteim": "Мои заметки",
  "Jobb minőségű, természetesebb felolvasás a Károli-fordításhoz. Internettel azonnal szól; ha letöltöd, internet nélkül is.": "Более качественное и естественное чтение перевода Кароли. С интернетом звучит сразу; после загрузки — и без сети.",
  "Kapcsolódó igék": "Связанные стихи",
  "Kereszthivatkozások": "Перекрёстные ссылки",
  "Kereszthivatkozások megjelenítése": "Показывать перекрёстные ссылки",
  "Keresés": "Поиск",
  "Kiemelés": "Выделить",
  "Kiemelés levétele": "Снять выделение",
  "Kiemelések": "Выделения",
  "Kommentár": "Комментарий",
  "Kommentár hozzáadása": "Добавить комментарий",
  "Kommentár megnyitása": "Открыть комментарий",
  "Kommentár szerkesztése": "Изменить комментарий",
  "Kommentárjaim": "Мои комментарии",
  "Kommentárok": "Комментарии",
  "Könyvjelző": "Закладка",
  "Könyvjelző hozzáadása": "Добавить закладку",
  "Könyvjelző módosítása": "Изменить закладку",
  "Könyvjelző törlése": "Удалить закладку",
  "Könyvjelzők": "Закладки",
  "Letöltve": "Загружено",
  "Letöltés folyamatban": "Идёт загрузка",
  "Letöltés folytatása": "Продолжить загрузку",
  "Letöltés internet nélküli felolvasáshoz": "Скачать для чтения без интернета",
  "Megosztás": "Поделиться",
  "Megszakadt az internetkapcsolat. Amit már letöltöttél, megmarad; a gombbal folytathatod.": "Интернет-соединение прервалось. Уже загруженное сохранится; продолжите кнопкой.",
  "Melyik szóra keressünk a Bibliában?": "Какое слово искать в Библии?",
  "Mind törlése": "Удалить всё",
  "Még nincs kiemelt vers. Tartsd nyomva egy verset, és válaszd a Kiemelés pontot.": "Пока нет выделенных стихов. Нажмите и удерживайте стих и выберите «Выделить».",
  "Még nincs kommentár. Tartsd nyomva egy verset, és válaszd a Kommentár hozzáadása pontot.": "Пока нет комментариев. Нажмите и удерживайте стих и выберите «Добавить комментарий».",
  "Még nincs könyvjelző. Tartsd nyomva egy verset, és válaszd a Könyvjelző hozzáadása pontot.": "Пока нет закладок. Нажмите и удерживайте стих и выберите «Добавить закладку».",
  "Nem foglal helyet, internet nélkül is szól. Kisebb telefonokra ezt ajánljuk.": "Не занимает места и работает без интернета. Рекомендуется для небольших телефонов.",
  "PrepperPapa hang": "Голос PrepperPapa",
  "Saját szín hozzáadása": "Добавить свой цвет",
  "Saját szín törlése: tartsd nyomva a színt.": "Удалить свой цвет: нажмите и удерживайте его.",
  "Teljes Biblia letöltése": "Скачать всю Библию",
  "Törlöd az összes letöltött hanganyagot?": "Удалить все загруженные аудио?",
  "Törlöd ezt a saját színt a választékból? A már kiemelt versek megmaradnak.": "Убрать этот цвет из палитры? Уже выделенные стихи останутся.",
  "Válassz színt": "Выберите цвет",
  "Vár": "Ждёт",
  "Általános": "Общее",
  "Várakozó könyvek": "Книги в очереди",
});

// 2026-10-11: a Biblia sugo v4 szovegei
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Biblia: itt a könyvek rácsa és a keresés. A teljes szöveg egyszer letöltendő, utána internet nélkül is olvasható.": "Библия: здесь сетка книг и поиск. Полный текст скачивается один раз, потом его можно читать без интернета.",
  "Imák: mindig elérhetők, letöltés nélkül is. Koppints egy címre, és olvasd.": "Молитвы: всегда доступны, даже без загрузки. Нажмите на название и читайте.",
  "Vészhelyzeti igék és próféciák: válogatott szakaszok, egy koppintással.": "Стихи на случай беды и пророчества: избранные отрывки, одним нажатием.",
  "Az app bibliaolvasót tartalmaz. A lelki felkészültség rész keresztény szemszögből készült.": "Приложение содержит читалку Библии. Раздел о духовной подготовке написан с христианской точки зрения.",
  "Tartsd nyomva egy verset: keresés, kiemelés, kommentár, könyvjelző és megosztás. Amit így jelölsz, a Kiemeléseim és a Kommentárjaim alatt visszatalálod.": "Нажмите и удерживайте стих: поиск, выделение, комментарий, закладка и отправка. Всё, что так отметите, найдёте в «Мои выделения» и «Мои комментарии».",
  "Beállítások: a felolvasó hang, a letöltés internet nélküli felolvasáshoz, és a kereszthivatkozások bekapcsolása.": "Настройки: голос чтения, загрузка для чтения без интернета и включение перекрёстных ссылок.",
});

// 2026-10-11: Biblia forditas-valaszto
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Biblia-fordítás": "Перевод Библии",
  "Itt azok a fordítások látszanak, amelyeket már letöltöttél. Másik nyelvű Bibliát a felület nyelvének átállításával tölthetsz le.": "Здесь видны переводы, которые вы уже скачали. Библию на другом языке можно скачать, переключив язык приложения.",
  "Ez a fordítás most nem érhető el.": "Этот перевод сейчас недоступен.",
});

// MEGVALLASOK + SAJAT IMA (Fonok 2026-10-11 10:09/10:10)
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Megvallások": "Исповедания",
  "Még nincs itt semmi. A jobb alsó plusz gombbal hozzáadhatsz egy sajátot.": "Здесь пока ничего нет. Кнопкой «плюс» справа внизу можно добавить своё.",
  "Csak ezen a készüléken tárolódik.": "Хранится только на этом устройстве.",
  "Saját hozzáadása": "Добавить своё",
  "Add meg a címet és a szöveget.": "Введите заголовок и текст.",
  "Nem sikerült menteni.": "Не удалось сохранить.",
  "Biztosan törlöd?": "Точно удалить?",
  "saját": "своё",
});

// OLVASASI TERV (Fonok 2026-10-11 10:42)
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Olvasási terv": "План чтения",
  "Válassz egy tervet. A haladásodat a telefon megjegyzi, és mutatja, hol tartasz.": "Выберите план. Телефон запомнит ваш прогресс и покажет, где вы находитесь.",
  "Válassz egy tervet. Több tervet is olvashatsz egyszerre, mindegyiknél külön megmarad, hol tartasz.": "Выберите план. Можно читать несколько планов одновременно; для каждого отдельно сохраняется, где вы остановились.",
  "Teljes Biblia egy év alatt": "Вся Библия за год",
  "Az elejétől a végéig, a könyvek sorrendjében.": "От начала до конца, в порядке книг.",
  "Kronologikus Biblia egy év alatt": "Хронологическая Библия за год",
  "Az események időrendjében: Jób a pátriárkák korában, a Zsoltárok Dávid idején, a próféták a királyok mellett, a levelek az Apostolok cselekedetei közé illesztve.": "В порядке событий: Иов во времена патриархов, Псалмы во времена Давида, пророки рядом с царями, послания вставлены в Деяния.",
  "Teljes Biblia 90 nap alatt": "Вся Библия за 90 дней",
  "Gyors ütemű, a könyvek sorrendjében.": "Быстрый темп, в порядке книг.",
  "Újszövetség 90 nap alatt": "Новый Завет за 90 дней",
  "Máté evangéliumától a Jelenésekig.": "От Матфея до Откровения.",
  "Az evangéliumok 30 nap alatt": "Евангелия за 30 дней",
  "Máté, Márk, Lukács és János.": "Матфей, Марк, Лука и Иоанн.",
  "Zsoltárok és Példabeszédek 60 nap alatt": "Псалмы и Притчи за 60 дней",
  "Napi néhány zsoltár és egy kis bölcsesség.": "Каждый день несколько псалмов и немного мудрости.",
  "Elindítod ezt a tervet?": "Начать этот план?",
  "A tervet befejezted. Áldás rá!": "Вы завершили план. Благослови вас Бог!",
  "Tartod az ütemet.": "Вы идёте по графику.",
  "Elolvastam": "Прочитано",
  "Minden nap": "Все дни",
  "Terv leállítása": "Остановить план",
  "Leállítod a tervet? A haladásod törlődik.": "Остановить план? Ваш прогресс будет удалён.",
});

// SUGO bible v5 (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Biblia: itt a könyvek rácsa és a keresés. Fönt a fordítás, a könyv, a fejezet és a vers koppintható, így gyorsan odaugrasz. A teljes szöveg egyszer letöltendő, utána internet nélkül is olvasható.": "Библия: сетка книг и поиск. Вверху перевод, книгу, главу и стих можно нажать, чтобы быстро перейти. Полный текст загружается один раз и потом доступен без интернета.",
  "Imák és megvallások: a jobb alsó plusz gombbal hozzáadhatod a sajátjaidat. Ezek csak ezen a telefonon tárolódnak.": "Молитвы и исповедания: добавляйте свои кнопкой «плюс» справа внизу. Они хранятся только на этом телефоне.",
  "Olvasási terv: válassz egy tervet, például a kronologikusat, és itt látod, hol tartasz, és mi a következő olvasmány.": "План чтения: выберите план, например хронологический, и смотрите, где вы и что читать дальше.",
});

// SZOBAKULCS UJ ESZKOZON (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Ezen az eszközön nincs meg ennek a szobának a kulcsa: a korábbi üzenetek egy másik kulccsal készültek (másik telefonon vagy újratelepítés előtt). Ha megvan egy régi meghívó linked ehhez a szobához, nyisd meg azt ezen a telefonon, és minden olvasható lesz. Ha most új kulcsot készítesz, a régi tagok csak új meghívó link után olvassák az üzeneteidet. Készítsek új kulcsot?": "На этом устройстве нет ключа этой комнаты: прежние сообщения созданы другим ключом (на другом телефоне или до переустановки). Если у вас есть старая ссылка-приглашение в эту комнату, откройте её на этом телефоне, и всё станет читаемым. Если сейчас создать новый ключ, прежние участники прочтут ваши сообщения только после новой ссылки. Создать новый ключ?",
  "Új titkosító kulcs készült. Küldj ÚJ meghívó linket minden tagnak.": "Создан новый ключ шифрования. Отправьте НОВУЮ ссылку-приглашение каждому участнику.",
});

// GIRA KONYV-OSSZEFESULES (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Gíra-könyv csomag (ismeretlen formátum)": "Пакет книги гира (неизвестный формат)",
  "Gíra-könyv": "Книга гира",
  "hamis aláírás": "поддельная подпись",
  "KÉTSZERI KÖLTÉS": "ДВОЙНАЯ ТРАТА",
  "aláírások rendben": "подписи в порядке",
  "Előbb csatlakozz egy helyi szobához (Bluetooth vagy wifi).": "Сначала подключитесь к локальной комнате (Bluetooth или wifi).",
  "Még nincs aláírt gíra-tételed, amit megoszthatnál.": "У вас пока нет подписанных записей гира для обмена.",
  "A helyi szobának nincs titkosító kulcsa, ezért nem küldöm el a könyvet.": "У локальной комнаты нет ключа шифрования, поэтому книгу не отправляю.",
  "Elküldve a helyi szobába": "Отправлено в локальную комнату",
  "csomag": "пакетов",
  "Nem ment el minden csomag. Nézd meg, hogy egy hálón vagytok-e.": "Не все пакеты отправлены. Проверьте, что вы в одной сети.",
  "Előbb nyiss meg egy online szobát.": "Сначала откройте онлайн-комнату.",
  "Az online szobának nincs titkosító kulcsa ezen a telefonon, ezért nem küldöm el a könyvet.": "У онлайн-комнаты нет ключа на этом телефоне, поэтому книгу не отправляю.",
  "Elküldve az online szobába": "Отправлено в онлайн-комнату",
  "Nem ment el minden csomag.": "Не все пакеты отправлены.",
  "Könyvek összefésülése": "Сверка книг",
  "A tagok kicserélik az aláírt gíra-tételeiket, és a telefon minden aláírást ellenőriz. Ha valaki ugyanazt a gírát kétszer adta oda, itt kiderül. Szerver és blokklánc nélkül megy: a szoba csak továbbítja a titkosított csomagot.": "Участники обмениваются подписанными записями гира, и телефон проверяет каждую подпись. Если кто-то отдал одну и ту же гиру дважды, это видно здесь. Без сервера и без блокчейна: комната лишь пересылает зашифрованный пакет.",
  "Küldés a helyi szobába (Bluetooth / wifi)": "Отправить в локальную комнату (Bluetooth / wifi)",
  "Küldés az online szobába": "Отправить в онлайн-комнату",
  "Közösségi könyv": "Общая книга",
  "kétszeri költés": "двойные траты",
  "sorszám": "номер",
});

window.PP_FORD_MINTAK = window.PP_FORD_MINTAK || {};
window.PP_FORD_MINTAK.ru = (function () {
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
    csere: (_, n) => 'В этой теме есть ещё ' + n + ' ' + alak(+n, 'статья, её вступление можно прочитать выше.', 'статьи, их вступления можно прочитать выше.', 'статей, их вступления можно прочитать выше.') },
  { minta: /^Használható fény (\d{1,2}:\d{2}) és (\d{1,2}:\d{2}) között: a napkelte előtt és a napnyugta után is van még annyi, amivel lehet menni\.$/,
    csere: 'Пригодный свет между $1 и $2: и перед восходом, и после заката его ещё столько, что можно идти.' },
  { minta: /^([\d.,]+) m² alapján$/,
    csere: 'по $1 м²' },
  { minta: /^(\d+) fő · (\d+) nap · (.+)$/,
    csere: (_, a, b, c) => a + ' ' + alak(+a, "человек", "человека", "человек") + ' · ' + b + ' ' + alak(+b, "день", "дня", "дней") + ' · ' + c },
  { minta: /^(\d+) fő · (\d+) nap$/,
    csere: (_, a, b) => a + ' ' + alak(+a, "человек", "человека", "человек") + ' · ' + b + ' ' + alak(+b, "день", "дня", "дней") },
  { minta: /^(\d+) fő$/,
    csere: (_, n) => n + ' ' + alak(+n, "человек", "человека", "человек") },
  { minta: /^(\d+) nap$/,
    csere: (_, n) => n + ' ' + alak(+n, "день", "дня", "дней") },
  { minta: /^(\d+) db$/,
    csere: '$1 шт.' },
  { minta: /^(\d+) tétel$/,
    csere: (_, n) => n + ' ' + alak(+n, "позиция", "позиции", "позиций") },
  { minta: /^IGE — (.+)$/,
    csere: 'СЛОВО — $1' },
  { minta: /^Ige — (.+)$/,
    csere: 'Слово — $1' },
  { minta: /^Tudástár — (.+)$/,
    csere: 'База знаний — $1' },
  { minta: /^(\d+)\. fejezet$/,
    csere: 'Глава $1' },
  { minta: /^(\d+)\. fejezet · vers$/,
    csere: 'Глава $1 · стих' },
  { minta: /^(\d+) fejezet$/,
    csere: (_, n) => n + ' ' + alak(+n, "глава", "главы", "глав") },
  { minta: /^Kész: (\d+) könyv, offline is megvan\.$/,
    csere: 'Готово: $1 книг, доступно офлайн.' },
  { minta: /^Nem sikerült a helymeghatározás: (.+)$/,
    csere: 'Не удалось определить местоположение: $1' },
  { minta: /^Nem sikerült a helymeghatározás\.$/,
    csere: 'Не удалось определить местоположение.' },
  { minta: /^Nem sikerült: (.+)$/,
    csere: 'Не удалось: $1' },
  { minta: /^Felvéve: (.+)$/,
    csere: 'Добавлено: $1' },
  { minta: /^Módosítva: (.+)$/,
    csere: 'Изменено: $1' },
  { minta: /^Törlöd: (.+)$/,
    csere: 'Удалить: $1' },
  { minta: /^vércsoport hiányzik · allergia: (.+)$/,
    csere: 'группа крови не указана · аллергия: $1' },
  { minta: /^vércsoport hiányzik · nincs ismert allergia$/,
    csere: 'группа крови не указана · известных аллергий нет' },
  { minta: /^(.+) · nincs ismert allergia$/,
    csere: '$1 · известных аллергий нет' },
  { minta: /^(.+) · allergia: (.+)$/,
    csere: '$1 · аллергия: $2' },
  { minta: /^növekvő hold, (\d+)%$/,
    csere: 'растущая луна, $1%' },
  { minta: /^fogyó hold, (\d+)%$/,
    csere: 'убывающая луна, $1%' },
  { minta: /^(.+) · (\d+) tag · te indítottad$/,
    csere: (_, a, n) => a + ' · ' + n + ' ' + alak(+n, "участник", "участника", "участников") + " · ты запустил" },
  { minta: /^(.+) · (\d+) tag · (.+) indította$/,
    csere: (_, a, n, k) => a + ' · ' + n + ' ' + alak(+n, "участник", "участника", "участников") + " · запустил " + k },
  { minta: /^(\d+) tag · te indítottad$/,
    csere: (_, n) => n + ' ' + alak(+n, "участник", "участника", "участников") + " · ты запустил" },
  { minta: /^(\d+) tag · (.+) indította$/,
    csere: (_, n, k) => n + ' ' + alak(+n, "участник", "участника", "участников") + " · запустил " + k },
  { minta: /^még egyedül · te indítottad$/,
    csere: 'пока один · ты запустил' },
  { minta: /^még egyedül · (.+) indította$/,
    csere: 'пока один · запустил $1' },
  { minta: /^(.+) · (\d+) tag$/,
    csere: (_, a, n) => a + ' · ' + n + ' ' + alak(+n, "участник", "участника", "участников") },
  { minta: /^(.+) · te indítottad$/,
    csere: '$1 · ты запустил' },
  { minta: /^(.+) · (.+) indította$/,
    csere: '$1 · запустил $2' },
  { minta: /^(\d+) tag$/,
    csere: (_, n) => n + ' ' + alak(+n, "участник", "участника", "участников") },
  // OLVASASI TERV (2026-10-11)
  { minta: /^Kész: (\d+) \/ (\d+) nap \((\d+)%\)$/, csere: "Готово: $1 / $2 дн. ($3%)" },
  { minta: /^Következő olvasmány: (\d+)\. nap$/, csere: "Следующее чтение: день $1" },
  { minta: /^Lemaradás: (\d+) nap$/, csere: (_, n) => "Отставание: " + n + ' ' + alak(+n, "день", "дня", "дней") },
  { minta: /^Előrébb jársz: (\d+) nap$/, csere: (_, n) => "Опережение: " + n + ' ' + alak(+n, "день", "дня", "дней") },
  { minta: /^Napi átlag: ([\d,]+) fejezet$/, csere: "В среднем в день: $1 гл." },
  { minta: /^Heti átlag: (\d+) fejezet$/, csere: "В среднем в неделю: $1 гл." },
  { minta: /^(\d+)\. nap( •)?$/, csere: (_, n, p) => "День #".replace('#', n) + (p || '') },
  ];
})();

// ===== 2026-10-13: ujjlenyomatos feloldas + PIN modositasa (v43.157) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Ujjlenyomattal": "Отпечаток",
  "Ujjlenyomat bekapcsolása": "Включить разблокировку отпечатком",
  "Tárca feloldása": "Разблокировать кошелёк",
  "PIN-nel": "По PIN-коду",
  "Az ujjlenyomathoz mentett PIN már nem érvényes. Add meg a PIN-t, utána újra bekapcsolhatod.": "PIN-код, сохранённый для отпечатка, больше не действует. Введите PIN-код, после этого функцию можно включить снова.",
  "Új ujjlenyomatot vettél fel a telefonon, ezért egyszer add meg a PIN-t.": "На телефоне добавлен новый отпечаток, поэтому один раз введите PIN-код.",
  "Az ujjlenyomatos feloldás most nem sikerült, add meg a PIN-t.": "Разблокировка отпечатком на этот раз не удалась, введите PIN-код.",
  "Bekapcsolod az ujjlenyomatos feloldást? A PIN-t ekkor a telefon saját biztonsági kulcstára őrzi, az ujjad csak azt nyitja. A PIN ugyanúgy működik.": "Включить разблокировку отпечатком? PIN-код будет храниться в защищённом хранилище ключей телефона, а палец лишь открывает его. PIN-код работает как прежде.",
  "Bekapcsolom": "Включить",
  "Most nem": "Не сейчас",
  "Bekapcsolva: legközelebb ujjlenyomattal is beléphetsz.": "Включено: в следующий раз можно войти и по отпечатку.",
  "Nem kapcsoltuk be. Később is megteheted: koppints újra a gombra.": "Не включено. Это можно сделать позже: нажмите кнопку ещё раз.",
  "Nem sikerült bekapcsolni.": "Не удалось включить.",
  "A tár megnyitása nem sikerült.": "Не удалось открыть хранилище.",
  "PIN módosítása": "Изменить PIN-код",
  "Régi PIN": "Старый PIN-код",
  "Új PIN (4-6 számjegy)": "Новый PIN-код (4-6 цифр)",
  "Új PIN még egyszer": "Новый PIN-код ещё раз",
  "Hibás a régi PIN.": "Старый PIN-код неверен.",
  "Az új PIN 4-6 számjegy legyen.": "Новый PIN-код должен содержать 4-6 цифр.",
  "A két új PIN nem egyezik.": "Два новых PIN-кода не совпадают.",
  "A PIN módosítása nem sikerült, a régi PIN maradt érvényben.": "Не удалось изменить PIN-код, старый остаётся в силе.",
  "A PIN megváltozott.": "PIN-код изменён.",
  "A PIN megváltozott. Az ujjlenyomatos feloldás kikapcsolt, a következő PIN-es belépéskor újra bekapcsolhatod.": "PIN-код изменён. Разблокировка отпечатком отключена; её можно снова включить при следующем входе по PIN-коду."
});

// ===== 2026-10-13: teszt-PIN, 6 szamjegy, Gira-kulcs a PIN mogott (v43.159) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Állíts be egy PIN-t (6 számjegy)": "Задайте PIN-код (6 цифр)",
  "Új PIN (6 számjegy)": "Новый PIN-код (6 цифр)",
  "6 számjegy kell.": "Нужно 6 цифр.",
  "Az új PIN 6 számjegy legyen.": "Новый PIN-код должен содержать 6 цифр.",
  "Tesztidőszak: a PIN 000000": "Тестовый период: PIN-код 000000",
  "Tesztidőszak: a PIN 0000": "Тестовый период: PIN-код 0000",
  "A Gíra aláíró kulcsa a PIN mögött van: nyisd meg a Token tárcát.": "Ключ подписи Gíra защищён PIN-кодом: откройте кошелёк токенов."
});

// ===== 2026-10-13: ujjlenyomat-animacio (v43.160) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Tedd az ujjad az érzékelőre": "Приложите палец к сканеру",
  "Feloldva": "Разблокировано"
});

// ===== 2026-10-13: ujjlenyomat-kor huzasa (v43.161) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Ha a kör nem az ujjlenyomat-olvasón van, húzd a helyére: a telefon megjegyzi.": "Если круг не над сканером отпечатка, перетащите его туда: телефон запомнит."
});

// ===== 2026-10-13: OSM-alapreteg elore letoltese szunetel (v43.162) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Az alaptérkép előre letöltése szünetel, amíg elkészül a saját térképszerverünk. A már megnézett részek megmaradnak; a Turista réteget továbbra is letöltheted.": "Предварительная загрузка базовой карты приостановлена, пока не готов наш собственный сервер карт. Уже просмотренные участки сохраняются; туристический слой по-прежнему можно скачать."
});


// ===== 2026-10-13: app-engedely a tesztidoszakra (v43.169, 0a58dbbb) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "PrepperPapa · tesztidőszak": "PrepperPapa · тестовый период",
  "A tesztidőszakban az app csak jóváhagyott tesztelői fiókkal használható. Lépj be az e-mail címeddel: kapsz egy 6 jegyű kódot, és utána a telefon megjegyzi, frissítés után sem kell újra.": "В тестовый период приложением можно пользоваться только с одобренной учётной записью тестировщика. Войдите по адресу e-mail: вы получите 6-значный код, после этого телефон запомнит вход, даже после обновлений.",
  "Belépés": "Войти",
  "Engedély kérése…": "Запрос разрешения…",
  "Ehhez a fiókhoz nincs engedély. Ha szerinted ez hiba, írj a prepperpapa@gmail.com címre.": "У этой учётной записи нет разрешения. Если вы считаете это ошибкой, напишите на prepperpapa@gmail.com.",
  "Az első belépéshez internetkapcsolat kell.": "Для первого входа нужно подключение к интернету.",
  "Az engedély most nem sikerült, próbáld újra.": "Не удалось получить разрешение, попробуйте ещё раз.",
  "Lejárt az engedélyed. Lépj be újra (ehhez internet kell).": "Срок вашего разрешения истёк. Войдите снова (нужен интернет)."
});


// ===== 2026-10-13: terkep-kereso es turistapontok (v43.171, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "saját pont": "своя точка",
  "helyszín": "место",
  "Nincs találat.": "Ничего не найдено.",
  "Turistaút": "Туристическая тропа",
  "internet kell hozzá": "нужен интернет",
  "nemzetközi": "международный",
  "országos": "национальный",
  "regionális": "региональный",
  "helyi": "местный",
  "csúcs": "вершина",
  "nyereg": "седловина",
  "forrás": "родник",
  "ivóvíz": "питьевая вода",
  "kút": "колодец",
  "barlang": "пещера",
  "kilátópont": "смотровая площадка",
  "kilátó": "смотровая башня",
  "menedékház, esőbeálló": "приют, навес",
  "kórház": "больница",
  "rendelőintézet": "поликлиника",
  "temető": "кладбище",
  "menedékház": "приют",
  "esőbeálló, menedék": "навес, укрытие",
  "szálloda": "гостиница",
  "vendégház, panzió": "гостевой дом",
  "turistaszálló": "хостел",
  "motel": "мотель",
  "üdülő": "курорт",
  "apartman": "апартаменты",
  "szálláshely": "жильё",
  "szupermarket": "супермаркет",
  "áruház": "универмаг",
  "bevásárlóközpont": "торговый центр",
  "piac": "рынок",
  "élelmiszerbolt": "продуктовый магазин",
  "zöldséges": "овощной магазин",
  "pékség": "пекарня",
  "hentes": "мясная лавка",
  "vegyesbolt": "универсальный магазин",
  "cukrászda": "кондитерская",
  "édességbolt": "кондитерский магазин",
  "italbolt": "магазин напитков",
  "posta": "почта",
  "bolt": "магазин",
  "táborhely": "кемпинг",
  "pihenőhely": "место отдыха",
  "útjelző tábla": "указатель",
  "rom": "руины",
  "vár": "замок",
  "kereszt, kápolna": "крест, часовня"
});
Object.assign(window.PP_FORD_SZOTAR.ru, {"Turistaút, csúcs, forrás, hely…": "Тропа, вершина, родник, место…"});

// ===== 2026-10-13: utvonalon megyek (v43.172, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Indulás": "Старт",
  "Leállítás": "Стоп",
  "Navigáció indul": "Навигация начинается",
  "Indulj el az útvonalon: az első lépésekből látom, merre mész.": "Идите по маршруту: по первым шагам я пойму, куда вы идёте.",
  "Letértél az útvonalról.": "Вы сошли с маршрута.",
  "Letértél az útvonalról": "Вы сошли с маршрута",
  "Az útvonal": "Маршрут",
  "irány": "направление",
  "Visszatértél az útvonalra.": "Вы вернулись на маршрут.",
  "Az útvonalon vagy": "Вы на маршруте",
  "Indulj el: az első lépésekből látom, merre mész.": "Идите: по первым шагам я пойму направление.",
  "Megérkeztél az útvonal végére.": "Вы дошли до конца маршрута.",
  "Hátra": "Осталось",
  "Megtett": "Пройдено",
  "Érkezés": "Прибытие",
  "Szintgrafikon": "Профиль высоты",
  "emelkedő": "подъём",
  "múlva": "через",
  "előtted": "впереди",
  "cél": "финиш",
  "utána ezt kövesd:": "затем следуйте:",
  "élesen jobbra": "резко направо",
  "jobbra": "направо",
  "élesen balra": "резко налево",
  "balra": "налево",
  "Most fordulj": "Поверните сейчас",
  "méter múlva fordulj": "метров, затем поверните",
  "Egyenesen tovább": "Прямо"
});

// ===== 2026-10-13: utvonaltervezes A-bol B-be (v43.173, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Útvonal ide": "Маршрут сюда",
  "Innen indulok": "Начать отсюда",
  "Saját helyzetem": "Моё местоположение",
  "Válaszd ki a célt: keresés vagy egy pont buboréka": "Выберите цель: поиск или пузырь точки",
  "Tervezés törlése": "Удалить план",
  "Tervezés…": "Планирование…",
  "Nincs GPS-helyzet: válassz kezdőpontot (egy pont buborékán: „Innen indulok”).": "Нет GPS-позиции: выберите начальную точку («Начать отсюда» в пузыре точки).",
  "A turistaút-hálózat nem töltődött be.": "Сеть троп не загрузилась.",
  "Nem találtam turistaút-útvonalat a két pont között.": "Не найден маршрут по тропам между точками.",
  "A turistaútig": "До тропы",
  "légvonalban": "по прямой",
  "Tervezett útvonal": "Запланированный маршрут",
  "Kövesd ezt a jelzést:": "Следуйте этой маркировке:",
  "Kövesd az utat": "Следуйте по дороге",
  "és kövesd ezt:": "и следуйте:"
});

// ===== 2026-10-13: kulfoldi turistautak =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Külföld országonként: térkép és turistautak": "Зарубежье по странам: карта и тропы",
  "Tájegységek": "Регионы",
  "Turistautak és pontok": "Тропы и точки",
  "Alaptérkép": "Базовая карта",
  "Ennek az országnak a térképe egyben túl nagy.": "Карта этой страны слишком велика одним файлом.",
  "Tájegységenként letöltheted: nyisd le a listáját.": "Её можно скачать по регионам: раскройте список.",
  "Országonként külön letölthetők a turistautak a pontokkal és az útvonaltervezővel (ezek az online térképen is működnek, és kevés helyet foglalnak), és külön az alaptérkép a térerő nélküli használathoz. Az alaptérképet az első kéréskor a szerver készíti elő, ez néhány perc lehet.": "Для каждой страны можно отдельно скачать тропы с точками и планировщиком маршрутов (они работают и на онлайн-карте и занимают мало места) и отдельно базовую карту для работы без связи. Базовую карту сервер готовит при первом запросе, это может занять несколько минут.",
  "tájegységenként letölthető": "можно скачать по регионам",
  "a méret letöltéskor derül ki": "размер станет известен при загрузке",
  "Ennek a tájegységnek a térképe egyben túl nagy.": "Карта этого региона слишком велика одним файлом.",
  "A tájegység térképét most nem sikerült előkészíteni.": "Не удалось подготовить карту региона.",
  "Előkészítés…": "Подготовка…",
  "a térkép túl nagy egyben": "карта слишком велика целиком",
  "Most egy másik ország térképe készül, próbáld újra pár perc múlva.": "Сейчас готовится карта другой страны, попробуй снова через несколько минут.",
  "Az ország térképét most nem sikerült előkészíteni.": "Сейчас не удалось подготовить карту страны.",
  "A külföldi lista most nem érhető el.": "Зарубежный список сейчас недоступен.",
  "A két pont túl messze van egymástól (legfeljebb kb. 80 km).": "Точки слишком далеко друг от друга (не более ~80 км)."
});

// ===== 2026-10-13: GPX be/ki (v43.178) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Nincs kiválasztott útvonal.": "Маршрут не выбран.",
  "Az útvonal megjelent, de a telefon tárhelye megtelt, nem mentődött el.": "Маршрут показан, но память заполнена, он не сохранён.",
  "Ezt a fájlt nem tudtam GPX-ként beolvasni.": "Не удалось прочитать файл как GPX.",
  "GPX útvonal betöltése": "Загрузить маршрут GPX",
  "fájl a telefonról": "файл с телефона"
});

// ===== 2026-10-13: tajolo hangvezetes (v43.179) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Hangvezetés": "Звуковое ведение",
  "Előbb vegyél fel egy irányt, utána szól a hangvezetés.": "Сначала задайте направление, затем зазвучит ведение."
});
// ===== 2026-10-14: jelzes nelkuli utak, ujratervezes, hosszu nyomas (v43.182) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Kijelölt pont": "Отмеченная точка",
  "Új útvonalat tervezek innen…": "Прокладываю новый маршрут отсюда…",
  "Új útvonalat terveztem, hossza": "Новый маршрут проложен, длина",
  "Jelzés nélküli ösvényen": "По немаркированной тропе",
  "Jelzés nélküli földúton": "По немаркированной грунтовой дороге",
  "Utcán vagy közúton": "По улице или дороге",
  "a jelzés nélküli ösvényt": "немаркированной тропой",
  "a földutat": "грунтовой дорогой",
  "az utcát vagy közutat": "улицей или дорогой",
  "Az út végétől a célig": "От конца пути до цели",
  "teljes túra": "весь маршрут",
  "szakasz": "участков",
  "Rádióamatőr átjátszók": "Любительские ретрансляторы",
  "Rádióamatőr átjátszó": "Любительский ретранслятор",
  "Kimenő (hallgatás)": "Выход (приём)",
  "Bemenő / eltolás": "Вход / сдвиг",
  "Csak rádióamatőr vizsgával és engedéllyel használható.": "Только для радиолюбителей с лицензией.",
  "Az alaptérképet az OpenStreetMap szabályai miatt nem lehet előre letölteni (a megnézett részek megmaradnak). Internet nélkül a Saját térkép működik: Magyarországra tájegységenként letöltheted itt lent, az „Offline térkép” csoportban.": "Базовую карту нельзя скачать заранее по правилам OpenStreetMap (просмотренные участки сохраняются). Без интернета работает Своя карта: для Венгрии её можно скачать ниже по регионам.",
  "Átváltok a Saját térképre": "Переключиться на Свою карту",
  "Saját térkép bekapcsolva. A tájegységeket itt lent, az „Offline térkép” csoportban töltheted le.": "Своя карта включена. Регионы скачиваются ниже, в разделе «Офлайн-карта по регионам»."
});

// ===== 2026-10-15: femkereso + eses-erzekeles (kartya 898b5891) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Fémkereső: vas és acél a közelben": "Металлоискатель: железо и сталь рядом",
 "Fémkereső": "Металлоискатель",
 "Vezeték, cső, fém a falban vagy a földben": "Провод, труба, металл в стене или в земле",
 "Nullázás után itt látszik a változás": "После обнуления здесь видно изменение",
 "Nullázás": "Обнулить",
 "Hang: be": "Звук: вкл.",
 "Hang: ki": "Звук: выкл.",
 "Tartsd a telefont távol a fémtől, és nyomd meg a Nullázást. Utána lassan húzd végig a falon vagy a talajon: fém közelében nő a szám, és sűrűbben, magasabban pittyeg.": "Держите телефон подальше от металла и нажмите «Обнулить». Затем медленно ведите его вдоль стены или по земле: рядом с металлом число растёт, а сигнал становится чаще и выше.",
 "AMIT EZ TUD ÉS AMIT NEM. A vas- és acéltárgyat (cső, szög, vasbeton, áramalatti vezeték) néhány centiméterről érzékeli, mélyebbről nem. Rezet, alumíniumot, aranyat nem talál. A pontosság telefononként nagyon eltér; ne erre bízd, hogy fúrhatsz-e a falba.": "ЧТО ОН УМЕЕТ И ЧЕГО НЕТ. Железо и сталь (труба, гвоздь, арматура, провод под напряжением) он чувствует за несколько сантиметров, глубже — нет. Медь, алюминий и золото не находит. Точность сильно зависит от телефона; не решайте по нему, можно ли сверлить стену.",
 "Ehhez a telefonos PrepperPapa app kell: a böngésző nem adja ki az iránytű-érzékelő nyers értékét.": "Для этого нужно приложение PrepperPapa для телефона: браузер не выдаёт сырое значение датчика компаса.",
 "a nullához képest": "относительно нуля",
 "Az érzékelő pontatlan: mozgasd a telefont nyolcas alakban néhányszor, aztán nullázz.": "Датчик неточен: несколько раз поводите телефоном восьмёркой, затем обнулите.",
 "Esés-érzékelés": "Распознавание падения",
 "Esés után automatikus SOS": "Автоматический SOS после падения",
 "Ha a telefon nagy ütést érez, és utána egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a": "Если телефон почувствует сильный удар и потом минуту не двигается, он громко ведёт обратный отсчёт. Если вы не нажмёте кнопку",
 "Jól vagyok": "Я в порядке",
 "gombot, SOS üzenetet küld a helyzeteddel minden szobádba, és megszólal a vészsíp.": ", он отправит SOS с вашим местоположением во все ваши комнаты и включит аварийный свисток.",
 "Esést érzékeltem": "Обнаружено падение",
 "másodperc múlva SOS üzenet megy a helyzeteddel": "секунд до отправки SOS с вашим местоположением",
 "SOS most": "SOS сейчас",
 "Bekapcsolva. Háttérben és kikapcsolt képernyőn is figyel.": "Включено. Следит и в фоне, и при выключенном экране.",
 "Bekapcsolva, de csak addig figyel, amíg az app nyitva van (a telefonos appban háttérben is).": "Включено, но следит, только пока приложение открыто (в приложении для телефона — и в фоне).",
 "A mozgás-érzékelő használatát nem engedélyezted.": "Вы не разрешили датчик движения.",
 "Rendben, nem küldtem SOS-t.": "Хорошо, SOS не отправлен.",
 "Esést érzékeltem, és nem reagálok.": "Я обнаружил падение и не реагирую.",
 "Itt vagyok": "Я здесь",
 "A helyzetemet nem sikerült meghatározni.": "Не удалось определить моё местоположение.",
 "SOS elküldve": "SOS отправлен",
 "szobába": "комнат",
 "Az SOS üzenet nem ment el (nincs szoba vagy kapcsolat). A vészsíp szól.": "SOS не отправлен (нет комнаты или связи). Звучит свисток.",
 "Eszközök": "Инструменты",
 "Fémdetektor": "Металлоискатель",
 "Víz, áram, kalória, fűtés és a többi számoló": "Вода, электричество, калории, отопление и другие калькуляторы",
 "Eszközök: a kalkulátorok, a fémdetektor, a tükör és a vad- és rovarriasztó egy helyen.": "Инструменты: калькуляторы, металлоискатель, зеркало и отпугиватель зверей и насекомых в одном месте.",
 "Tükör": "Зеркало",
 "Előlapi kamera fénykerettel, sérülés megnézéséhez": "Фронтальная камера со световой рамкой, чтобы осмотреть травму",
 "Fény: be": "Свет: вкл.",
 "Fény: ki": "Свет: выкл.",
 "A kamera nem nyitható meg. Engedélyezd a kamerát az app beállításaiban.": "Не удаётся открыть камеру. Разрешите камеру в настройках приложения.",
 "Két ujjal csippentve nagyítasz. A fehér keret világítja meg az arcod; sötétben tedd a képernyő fényerejét maximumra.": "Сведите два пальца, чтобы увеличить. Белая рамка освещает лицо; в темноте поставьте яркость экрана на максимум.",
 "Privát üzenet": "Личное сообщение",
 "Gíra küldése": "Отправить гиру",
 "Vad- és rovarriasztó": "Отпугиватель зверей и насекомых",
 "Magas hang vadak és szúnyogok ellen": "Высокий звук против диких зверей и комаров",
 "A riasztó hangja most nem indult el.": "Звук отпугивателя не запустился.",
 "Előzmény": "История",
 "Legutóbb olvasott igék": "Недавно прочитанные стихи",
 "Korábbi keresések": "Предыдущие поиски",
 "Még nincs olvasott ige. Amit a Bibliában megnyitsz, itt jelenik meg.": "Вы ещё не читали стихов. То, что вы откроете в Библии, появится здесь.",
 "Még nincs korábbi keresés. Amit itt keresel, ide kerül.": "Предыдущих поисков пока нет. То, что вы ищете здесь, появится в этом списке.",
 "Olvasási terv: csak ez az olvasmány látszik, a felolvasás a végén megáll.": "План чтения: показано только это чтение, и чтение вслух останавливается в его конце.",
 "Az olvasmány vége": "Конец чтения",
 "Vissza a tervemhez": "Назад к моему плану",
 "Ébresztő": "Будильник",
 "Ébresztő bekapcsolva": "Будильник включён",
 "Reggel felébreszti a telefont, és felolvassa a terv mai olvasmányát.": "Утром будит телефон и читает вслух сегодняшнее чтение по плану.",
 "Bekapcsolva": "Включён",
 "Időpont": "Время",
 "Napok": "Дни",
 "Válassz legalább egy napot.": "Выберите хотя бы один день.",
 "Következő ébresztés:": "Следующий будильник:",
 "Ebben a böngészőben és iPhone-on az ébresztő nem tud megszólalni: a weboldal nem kapcsolhatja be a lezárt telefont. Az ébresztő az Android appban működik. A beállításod itt megmarad.": "В этом браузере и на iPhone будильник не может прозвонить: веб-страница не может включить заблокированный телефон. Будильник работает в приложении для Android. Ваша настройка сохраняется здесь.",
 "Ehhez az ébresztőhöz frissítsd az appot a legújabb változatra.": "Обновите приложение до последней версии, чтобы пользоваться этим будильником.",
 "Az értesítés nincs engedélyezve: enélkül az ébresztő nem tud megjelenni.": "Уведомления не разрешены: без них будильник не может появиться.",
 "Értesítés engedélyezése": "Разрешить уведомления",
 "A pontos időzítés nincs engedélyezve (Ébresztők és emlékeztetők): az ébresztő így akár negyed órát is késhet.": "Точное время не разрешено (Будильники и напоминания): будильник может опоздать до четверти часа.",
 "Pontos időzítés engedélyezése": "Разрешить точное время",
 "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon csak értesítés jelenik meg, a felolvasás a koppintásra indul.": "Полноэкранные уведомления не разрешены: на заблокированном телефоне появится только уведомление, а чтение начнётся после нажатия на него.",
 "Teljes képernyő engedélyezése": "Разрешить полный экран",
  // v43.407 (kartya 0ef65ebd): eszkoz-riasztas elore hozasa, szoba beallitasai
  "Az értesítés nincs engedélyezve: enélkül a szoba riasztása nem jelenik meg a telefonon.": "Уведомления не разрешены: без них тревога комнаты не появится на телефоне.",
  "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon a riasztás csak értesítésként jelenik meg.": "Полноэкранные уведомления не разрешены: на заблокированном телефоне тревога появится только как уведомление.",
  "A megjelenítés más alkalmazások felett nincs engedélyezve: amíg a telefont használod, a riasztás oldala nem ugrik elő, csak értesítés érkezik.": "Показ поверх других приложений не разрешён: пока вы пользуетесь телефоном, страница тревоги не появится, придёт только уведомление.",
  "Megjelenítés más alkalmazások felett": "Показ поверх других приложений",
  "A szoba riasztása lezárt és használatban lévő telefonon is előreugrik.": "Тревога комнаты появляется на заблокированном телефоне и во время его использования.",
 "Az ébresztő be van állítva.": "Будильник установлен.",
 "Az ébresztőt most nem sikerült beállítani. Próbáld újra később.": "Сейчас не удалось установить будильник. Попробуйте позже.",
 "Bibliaolvasás ébresztő": "Будильник для чтения Библии",
 "Reggeli ige": "Утреннее слово",
 "A mai olvasmány felolvasása indul.": "Начинается сегодняшнее чтение.",
 "Szundi 10 perc": "Отложить на 10 мин"
});

// ===== 2026-10-18: Bible alarm polish (v43.259): stop button, time picker, spoken intro/blessing =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Leállítom": "Остановить",
 "Óra": "Часы",
 "Perc": "Минуты",
 "{konyv} {a}. fejezet": "{konyv}, глава {a}",
 "{konyv} {a}–{b}. fejezet": "{konyv}, главы с {a} по {b}",
 "Jó reggelt! Olvasási terv: {terv}. A mai olvasmány: {resz}.": "Доброе утро! План чтения: {terv}. Сегодняшнее чтение: {resz}.",
 "Jó reggelt! {ido} van. Ma {datum}. A mai olvasmány: {resz}.": "Доброе утро! Сейчас {ido}. Сегодня {datum}. Сегодняшнее чтение: {resz}.",
 "Áldott napot kívánok!": "Благословенного дня!"
});

// ===== 2026-10-18: daily tester task popup (v43.261, card 84c182b9): the popup and the seeded tasks =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Mai tesztfeladat": "Тестовое задание на сегодня",
 "Hogyan működik": "Как это работает",
 "Mit próbálj ki": "Что попробовать",
 "Ezt a feladatot a készüléked és a felület alapján kaptad, név nélkül.": "Это задание вы получили по вашему устройству и интерфейсу (приложение или браузер), без имени.",
 "Működik": "Работает",
 "Hibás": "Ошибка",
 "Később": "Позже",
 "Köszönjük, megkaptuk a visszajelzést.": "Спасибо, мы получили ваш отзыв.",
 "Most nincs kapcsolat. Elmentettem, és magától elküldöm, amint lesz.": "Сейчас нет связи. Я сохранил и отправлю сам, как только она появится.",
 "Ezt a szerver most nem fogadta el. Próbáld újra később.": "Сервер сейчас это не принял. Попробуйте позже.",
 "Most nem érem el a szervert. Próbáld újra később.": "Сейчас не удаётся связаться с сервером. Попробуйте позже.",
 "Mára nincs több tesztfeladat. Köszönjük a segítséget!": "На сегодня тестовых заданий больше нет. Спасибо за помощь!",
 "Tesztfeladat": "Тестовое задание",
 "Mi nem működött?": "Что не работало?",
 "Biblia: az olvasási terv ébresztője": "Библия: будильник плана чтения",
 "Az olvasási terv ébresztője a beállított időben felébreszti a telefont, a lezárt képernyő fölött megnyitja az aznapi olvasmányt, és felolvassa. Halkan indul, és bő fél perc alatt erősödik fel; előtte egy rövid köszöntés elmondja, mi a mai olvasmány. Amíg olvas, a képernyő alján egy nagy Leállítom gomb van.": "Будильник плана чтения будит телефон в заданное время, открывает сегодняшнее чтение поверх экрана блокировки и читает его вслух. Он начинает тихо и за полминуты с небольшим становится громче; перед этим короткое приветствие говорит, какое сегодня чтение. Пока он читает, внизу экрана есть большая кнопка Остановить.",
 "Biblia > Olvasási terv: nyiss meg egy futó tervet, kapcsold be az ébresztőt, és állítsd az időpontot 2 perccel későbbre.": "Библия > План чтения: откройте текущий план, включите будильник и поставьте время на 2 минуты позже.",
 "Zárd le a telefont, és tedd le. Figyeld: felébred-e a telefon, halkan indul-e a hang, és elhangzik-e a köszöntés.": "Заблокируйте телефон и положите его. Следите: просыпается ли телефон, начинается ли звук тихо и слышно ли приветствие?",
 "Koppints a nagy Leállítom gombra: a felolvasásnak azonnal meg kell állnia.": "Нажмите большую кнопку Остановить: чтение должно сразу прекратиться.",
 "Biblia: a könyvcsoportok színei": "Библия: цвета групп книг",
 "A Biblia könyvlistáján a könyvek csoportonként színes csempéken állnak. A csoportok ugyanazt az öt zöld árnyalatot kapják, de világos és sötét váltakozva, hogy két szomszédos csoport jól elváljon egymástól. Éjszakai módban ugyanez vörös árnyalatokkal.": "В списке книг Библии книги стоят на цветных плитках по группам. У групп те же пять оттенков зелёного, но светлые и тёмные чередуются, чтобы две соседние группы хорошо различались. В ночном режиме то же самое в красных тонах.",
 "Nyisd meg a Bibliát, és koppints a Biblia csempére, hogy megjelenjen a könyvek listája.": "Откройте Библию и нажмите плитку Библия, чтобы появился список книг.",
 "Nézd végig a csempéket: jól elválnak-e a szomszédos csoportok, és minden könyvnév olvasható-e a háttéren?": "Просмотрите плитки: хорошо ли различаются соседние группы и читается ли каждое название книги на своём фоне?",
 "Lenyíló lista: a vissza csak a listát zárja": "Выпадающий список: «Назад» закрывает только список",
 "Ha egy lenyíló lista (például a Rádió-hatótáv sávválasztója) nyitva van, a vissza gomb először csak a listát zárja be, és ugyanazon a képernyőn maradsz. Ha közben másik képernyőre lépsz, a nyitott lista nem maradhat ott a következő képernyő fölött.": "Когда выпадающий список (например, выбор диапазона в «Дальности рации») открыт, кнопка «Назад» сначала закрывает только список, и вы остаётесь на том же экране. Если тем временем вы переходите на другой экран, открытый список не должен оставаться поверх следующего экрана.",
 "Kalkulátor > Rádió-hatótáv: koppints a sáv választójára, hogy lenyíljon a lista.": "Калькулятор > Дальность рации: нажмите на выбор диапазона, чтобы открыть список.",
 "Nyomd meg a vissza gombot: a lista bezárul, és a Rádió-hatótáv képernyő marad.": "Нажмите «Назад»: список закрывается, а экран «Дальность рации» остаётся.",
 "Nyisd ki újra a listát, és lépj át egy másik képernyőre: a lista nem maradhat ott lebegve.": "Снова откройте список и перейдите на другой экран: список не должен там висеть.",
 "Szobák: privát üzenet (Csak neki)": "Комнаты: личное сообщение (Только для)",
 "Egy internetes szobában egy tagnak úgy is írhatsz, hogy csak ő lássa. Ilyenkor a beíró mező fölött „Csak neki” sáv áll a nevével; amíg ez látszik, az üzenet biztosan privátként megy el, és a sáv nem takarja el a legutolsó üzenetet. Ha mégsem megy el, az app megmondja, miért, és a beírt szöveg megmarad.": "В интернет-комнате можно написать одному участнику так, чтобы видел только он. Тогда над полем ввода стоит полоса «Только для» с его именем; пока она видна, сообщение точно уходит как личное, и полоса не закрывает последнее сообщение. Если оно всё же не уходит, приложение говорит почему, а набранный текст сохраняется.",
 "Nyiss meg egy szobát, ahol van legalább egy másik tag, és koppints egy tőle jött üzenet mellett a képére.": "Откройте комнату, где есть хотя бы ещё один участник, и нажмите на картинку рядом с его сообщением.",
 "Írj egy rövid üzenetet, és küldd el. A legutolsó üzenetnek a „Csak neki” sáv fölött kell látszania.": "Напишите короткое сообщение и отправьте его. Последнее сообщение должно быть видно над полосой «Только для».",
 "Ha meg tudod kérdezni: a címzett megkapta, a többiek nem látják.": "Если можете спросить: получатель его получил, остальные не видят."
});
// ===== 2026-10-18: Noah for every tester (v43.262, card 84bede18): Android-only note, download confirm, memory reason, daily task =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Noah, az offline MI segéd a telefonra telepített Android appban fut: a nyelvi modellt a telefon egyszer letölti, utána internet nélkül, helyben válaszol. A böngészős változatban és iPhone-on nem érhető el, mert ide a modell nem tölthető le.": "Noah, офлайн-помощник с ИИ, работает в Android-приложении, установленном на телефоне: телефон один раз скачивает языковую модель, а затем отвечает локально, без интернета. В браузерной версии и на iPhone он недоступен, потому что туда модель скачать нельзя.",
 "Ehhez Android 11 vagy újabb, legalább 6 GB memóriás telefon kell, és 6-8 GB szabad hely.": "Для этого нужен телефон с Android 11 или новее, не менее 6 ГБ памяти и 6-8 ГБ свободного места.",
 "A nyelvi modell válasz közben kb. 3 GB memóriát használ. 6 GB-nál kevesebb memóriájú telefonon a rendszer ilyenkor leállítaná az appot, ezért itt Noah nem használható.": "Во время ответа языковая модель использует около 3 ГБ памяти. На телефоне с памятью меньше 6 ГБ система остановила бы приложение, поэтому здесь Noah недоступен.",
 "Ezen a telefonon nem fut:": "На этом телефоне не работает:",
 "Android 11 vagy újabb kell": "нужен Android 11 или новее",
 "64 bites ARM processzor kell": "нужен 64-битный процессор ARM",
 "legalább 6 GB memória kell": "нужно не менее 6 ГБ памяти",
 "nem támogatott": "не поддерживается",
 "Ehhez a modellhez kevés a telefon memóriája.": "Для этой модели у телефона недостаточно памяти.",
 "Letöltöd a(z) {modell} modellt?": "Скачать модель {modell}?",
 "Letöltés: {meret}, egyszer kell letölteni.": "Загрузка: {meret}, нужна один раз.",
 "Szabad hely: kb. {hely} kell, mert az első használatkor a telefon még egyszer ennyit foglal a gyorsabb futáshoz.": "Свободное место: нужно около {hely}, потому что при первом использовании телефон занимает ещё столько же для более быстрой работы.",
 "Memória: legalább {ajanlott} GB-os telefon ajánlott.": "Память: рекомендуется телефон не менее чем с {ajanlott} ГБ.",
 "Ez a telefon {ram} GB-os.": "У этого телефона {ram} ГБ.",
 "Most mobilinternetet használsz: a letöltés {meret} adatforgalom. Wi-Fi ajánlott.": "Сейчас вы в мобильной сети: загрузка — это {meret} трафика. Рекомендуется Wi-Fi.",
 "Offline MI segéd": "Офлайн-помощник с ИИ",
 "Offline MI segéd használata": "Использовать офлайн-помощника с ИИ",
 "A segéd a fejléc gombjával nyílik; a modell letöltése és a beállításai a segéd oldalán vannak.": "Помощник открывается кнопкой в заголовке; загрузка модели и его настройки находятся на странице помощника.",
 "Offline MI segéd · a tudástárból, forrással": "Офлайн-помощник с ИИ · из базы знаний, с источниками",
 "Kérdezz": "Спросить",
 "Noah, az offline MI segéd": "Noah, офлайн-помощник с ИИ",
 "Noah a telefonon futó MI segéd: a tudástárból, a Bibliából és az app adataidból válaszol, internet nélkül. A nyelvi modellt egyszer kell letölteni (2,6 vagy 3,7 GB). Letöltés előtt az app kiírja a méretet, a szükséges szabad helyet és memóriát, mobilinterneten pedig Wi-Fi-t javasol. 6 GB-nál kevesebb memóriájú telefonon nem használható, és ezt meg is indokolja.": "Noah — помощник с ИИ, работающий на телефоне: он отвечает по базе знаний, Библии и данным вашего приложения, без интернета. Языковую модель нужно скачать один раз (2,6 или 3,7 ГБ). Перед загрузкой приложение показывает размер, нужное свободное место и память, а в мобильной сети советует Wi-Fi. На телефоне с памятью меньше 6 ГБ он недоступен, и приложение объясняет почему.",
 "Beállítások: kapcsold be az „Offline MI segéd használata” pontot, majd nyisd meg Noah-t a fejléc szikra gombjával.": "Настройки: включите «Использовать офлайн-помощника с ИИ», затем откройте Noah кнопкой-искрой в заголовке.",
 "A fogaskerék alatt nyomd meg a Letöltés gombot: nézd meg, kiírja-e a méretet, a helyet és a memóriát, mielőtt elindul. Wi-Fi-n töltsd le.": "Под шестерёнкой нажмите «Скачать»: проверьте, показывает ли приложение размер, место и память до начала. Скачивайте по Wi-Fi.",
 "Kérdezz tőle valamit, például: „Hogyan tisztítsak vizet?” Nézd meg, kapsz-e választ forrással.": "Спросите его о чём-нибудь, например: «Как очистить воду?» Проверьте, получаете ли вы ответ с источником.",
 "Ha a telefon nagy ütést érez, és utána egy percig nem mozdul, felkapcsolja a kijelzőt (lezárt telefonon is), és hangosan visszaszámol. Ha nem nyomod meg a": "Если телефон почувствует сильный удар и потом минуту не двигается, он включает экран (и на заблокированном телефоне) и громко ведёт обратный отсчёт. Если вы не нажмёте кнопку",
 "Utána megszólal a vészsíp.": "Затем звучит аварийный свисток.",
 "Esés-riasztás": "Сигнал о падении",
 "%d másodperc múlva SOS üzenet megy a helyzeteddel. Ha jól vagy, nyomd meg: Jól vagyok.": "Через %d секунд будет отправлено сообщение SOS с вашим местоположением. Если вы в порядке, нажмите: Я в порядке.",
 "Az értesítés nincs engedélyezve: enélkül esés után a lezárt telefonon nem jelenik meg a visszaszámlálás.": "Уведомления не разрешены: без них обратный отсчёт не появится на заблокированном телефоне после падения.",
 "A teljes képernyős értesítés nincs engedélyezve: esés után a lezárt telefonon csak egy értesítés jelenik meg a visszaszámlálással és a Jól vagyok gombbal, a nagy számláló koppintásra nyílik meg.": "Полноэкранные уведомления не разрешены: после падения заблокированный телефон показывает только уведомление с обратным отсчётом и кнопкой Я в порядке; большой счётчик открывается по нажатию.",
 "Esés után a lezárt telefonon is felkapcsolja a kijelzőt, és mutatja a visszaszámlálást.": "После падения включает экран, даже на заблокированном телефоне, и показывает обратный отсчёт.",
 "Megnyitom": "Открыть",
 "Láttam": "Видел",
 "Egy szobatárs": "Участник комнаты",
 "vészjelzést küldött": "отправил сигнал бедствия",
 "Itt van": "Местоположение",
 "Megnézem a térképen": "Показать на карте",
 "SOS · vészjelzés": "SOS · сигнал бедствия",
 "Egy szobatárs vészjelzést küldött.": "Участник комнаты отправил сигнал бедствия.",
 "SOS a szobából": "SOS из комнаты",
 "Egy szobatárs vészjelzést küldött: a lezárt telefon is felébred.": "Участник комнаты отправил сигнал бедствия: заблокированный телефон тоже просыпается.",
 "RIASZTÁS": "ТРЕВОГА",
 "Eszköz-riasztás": "Тревога устройства",
 "Egy eszköz riasztást küldött.": "Устройство отправило тревогу.",
 "Eszköz-riasztás a szobából": "Тревога устройства из комнаты",
 "Egy eszköz riasztást küldött: a lezárt telefon is felébred.": "Устройство отправило тревогу: заблокированный телефон тоже проснётся.",
 "Ideje visszafordulni": "Пора поворачивать назад",
 "visszaút": "обратный путь",
 "Ma már elmúlt a sötétedés: lámpával indulj vissza.": "Сегодня уже темно: возвращайся с фонарём.",
 "A visszafordulás ideje már elmúlt: indulj vissza most.": "Время разворота прошло: возвращайся сейчас.",
 "Sötétedésig": "До темноты",
 "Már sötétedik.": "Уже темнеет.",
 "Visszaút": "Обратный путь",
 "Tartalék": "Запас",
 "Ha most elindulsz, világosban érsz vissza.": "Если выйдешь сейчас, вернёшься засветло.",
 "A visszaút hosszabb, mint ami a sötétedésig hátravan: indulj most, és készítsd elő a lámpát.": "Обратный путь дольше, чем осталось до темноты: выходи сейчас и приготовь фонарь.",
 "A tájoló a felvett irány ellentétére mutat: ez a visszaút.": "Компас показывает направление, обратное сохранённому: это обратный путь.",
 "A tájoló a kiindulópont felé mutat.": "Компас показывает на точку старта.",
 "Nincs GPS-helyzet: a térképen látod a kiindulópontot.": "Нет GPS-позиции: точка старта видна на карте.",
 "Kiindulópont": "Точка старта",
 "Élesítve, ekkor szól:": "Включён, сработает в:",
 "Szólt": "Сработал",
 "Visszafordulási ébresztő": "Будильник разворота",
 "Túrán a visszafordulás idejében felébreszti a telefont, és mutatja, mennyi idő van sötétedésig, és mennyi a visszaút.": "В походе будит телефон во время разворота и показывает, сколько осталось до темноты и сколько займёт обратный путь.",
 "Túra indítása": "Начать поход",
 "Visszaút ideje (perc)": "Обратный путь (минуты)",
 "A fenti számításból": "Из расчёта выше",
 "A tervezett útvonalból": "Из запланированного маршрута",
 "A fenti Menetidővel kiszámolhatod: add meg a visszaút távolságát és emelkedését.": "Можно рассчитать во Времени в пути выше: введи расстояние и набор высоты обратного пути.",
 "Biztonsági tartalék (perc)": "Запас безопасности (минуты)",
 "Sötétedés": "Темнота",
 "Napnyugta": "Закат",
 "A szürkület vége (kb. fél órával a napnyugta után)": "Конец сумерек (примерно через полчаса после заката)",
 "tartalék": "запас",
 "Visszafordulás időpontja (kézzel)": "Время разворота (вручную)",
 "Számított időre": "Рассчитанное время",
 "Böngészőben és iPhone-on csak akkor szól, ha az oldal nyitva van. A lezárt telefont az Android app ébreszti fel.": "В браузере и на iPhone срабатывает, только пока страница открыта. Заблокированный телефон будит Android-приложение.",
 "Az ébresztő be van állítva, lezárt telefonon is szól.": "Будильник установлен и сработает и на заблокированном телефоне.",
 "Visszafordulás": "Разворот",
 "Visszafordulás (kézzel állítva)": "Разворот (задан вручную)",
 "Nincs helyzet a napnyugtához: engedélyezd a helymeghatározást, vagy nyisd meg egyszer a térképet.": "Нет позиции для расчёта заката: разреши геолокацию или один раз открой карту.",
 "Add meg a visszaút idejét.": "Укажи, сколько займёт обратный путь.",
 "Ezen a helyen ma nincs napnyugta.": "Здесь сегодня нет заката.",
 "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon csak értesítés jelenik meg.": "Полноэкранные уведомления запрещены: на заблокированном телефоне появится только уведомление.",
 "VISSZA": "НАЗАД",
 "Visszaút indítása": "Начать обратный путь",
 "Indulj vissza, hogy világosban érj le.": "Возвращайся, чтобы спуститься засветло.",
 "Túrán a visszafordulás idejében a lezárt telefon is felébred.": "В походе заблокированный телефон просыпается во время разворота.",
 // ===== 2026-10-18: hatterzene a felolvasas alatt (kartya 694fc83c) =====
 "Háttérzene": "Фоновая музыка",
 "Halk, ismétlődő zene a felolvasás alatt. Előbb töltsd le; utána internet nélkül is szól. A hangerejét felolvasás közben a hangjegy gombbal állíthatod.": "Тихая зацикленная музыка во время чтения. Сначала скачайте её; потом она звучит и без интернета. Громкость регулируется во время чтения кнопкой с нотой.",
 "Zene a Biblia felolvasása alatt": "Музыка при чтении Библии",
 "Ki": "Выкл.",
 "nincs letöltve": "не скачано",
 "Biblia-felolvasáshoz": "Для чтения Библии",
 "Ébresztőhöz": "Для будильника",
 "Akusztikus gitár": "Акустическая гитара",
 "Kelta": "Кельтская",
 "Epikus 1": "Эпическая 1",
 "Epikus 2": "Эпическая 2",
 "Epikus 3": "Эпическая 3",
 "Zene": "Музыка",
 "Háttérzenét a Biblia beállításaiban (fogaskerék) tölthetsz le.": "Фоновую музыку можно скачать в настройках Библии (шестерёнка).",
 "A letöltött zene hiányos volt, ezért nem mentettük el. Próbáld újra.": "Скачанная музыка была неполной, поэтому не сохранена. Попробуйте ещё раз.",
 "Ez a zene most nem érhető el a szerveren.": "Эта музыка сейчас недоступна на сервере.",
 // a felolvaso panel (hangjegy gomb) feliratai -- eddig forditatlanok voltak (2026-10-18, 694fc83c mellett)
 "Felolvasás": "Чтение вслух",
 "Szünet a versek között": "Пауза между стихами",
 "Sebesség": "Скорость",
 "Zene hangereje": "Громкость музыки",
 "Zene választása": "Выбрать музыку",
 "Nincs kiválasztott zene": "Музыка не выбрана",
 "Zene szünet": "Пауза музыки",
 "Zene indítása": "Включить музыку",
 "Telefon zenelejátszója (hangereje itt nem állítható)": "Музыкальный плеер телефона (его громкость здесь не настраивается)",
 "Megvallás felolvasás": "Чтение исповедания",
 "Ima felolvasás": "Чтение молитвы",
 "Saját zene a telefonról": "Своя музыка с телефона",
 "Telefon hangja": "Голос телефона",
 "Előbb töltsd le; utána internet nélkül is szól.": "Сначала скачайте; потом она играет и без интернета.",
 "Csatazene": "Боевая музыка",
 "Tempó": "Темп",
 "Lassú": "Медленно",
 "Szünet a mondatok után": "Пауза после каждого предложения",
 "Auto": "Авто",
 "Auto: a mondat hossza": "Авто: длина предложения",
 "Minden mondat után megáll, hogy hangosan elismételhesd. A zene a szünetben is szól.": "После каждого предложения делает паузу, чтобы вы могли повторить его вслух. Музыка в паузе продолжает звучать.",
 "A telefon beszédmotorja: ha a Google magyar hangja telepítve van, azzal olvas. Nem foglal helyet, internet nélkül is szól.": "Синтезатор речи телефона: если установлен голос Google для языка, читает им. Не занимает места, работает без интернета.",
 "Előre felolvasott hang a Károli-fordításhoz. Internettel azonnal szól; ha letöltöd, internet nélkül is.": "Заранее записанный голос для перевода Кароли. С интернетом звучит сразу; после загрузки и без него.",
 "A PrepperPapa hang a saját tempójában szól (nem lassítjuk, mert torzítana).": "Голос PrepperPapa звучит в своём темпе (мы его не замедляем, иначе он исказится).",
 "jobb": "лучше",
 "internet": "интернет",
 "letöltött": "загруженный",
 "Hang": "Голос",
 "Most ez szól": "Сейчас звучит",
 "A telefon beszédmotorja: internettel a Google legjobb hangján olvas, internet nélkül a telefonra letöltött hangon. Nem foglal helyet.": "Синтезатор речи телефона: с интернетом читает лучшим голосом Google, без интернета голосом, загруженным на телефон. Не занимает места.",
 "A Lassú egy külön, lassabban felolvasott felvétel.": "Медленный темп — это отдельная запись, прочитанная медленнее.",
 "A Lassú tempó lassabban beszélteti a telefon hangját.": "Медленный темп заставляет голос телефона говорить медленнее."
});

// ===== 2026-10-18: vilagterkep-letoltes (korabban hianyzo kulcsok) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "a telefonon": "на телефоне",
  "A letöltés nem sikerült": "Загрузка не удалась",
  "A letöltéshez be kell jelentkezni (Beállítások).": "Чтобы скачать, нужно войти (Настройки)."
});

// ===== 2026-10-18: AKTUALIS VILAGHELYZET terkep-reteg (kartya 771683de) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Világhelyzet (események)": "Ситуация в мире (события)",
  "Tűzveszély-előrejelzés (EFFIS) – veszély, nem tilalom": "Прогноз пожарной опасности (EFFIS) – опасность, не запрет",
  "Földrengés": "Землетрясение",
  "Erdőtűz": "Лесной пожар",
  "Árvíz": "Наводнение",
  "Trópusi ciklon": "Тропический циклон",
  "Vulkánkitörés": "Извержение вулкана",
  "Aszály": "Засуха",
  "Járvány": "Эпидемия",
  "Háborús övezet": "Зона войны",
  "Tűzgyújtási tilalom": "Запрет на разведение огня",
  "Súlyosság": "Серьёзность",
  "alacsony": "низкая",
  "közepes": "средняя",
  "magas": "высокая",
  "Nagy háború (évi 10 000+ halott)": "Крупная война (более 10 000 погибших в год)",
  "Háború (évi 1000–9999 halott)": "Война (1000–9999 погибших в год)",
  "Fegyveres konfliktus (évi 100–999 halott)": "Вооружённый конфликт (100–999 погибших в год)",
  "Összecsapások (évi 100 alatti halott)": "Столкновения (менее 100 погибших в год)",
  "Megye": "Медье",
  "Napi tilalom": "Ежедневный запрет",
  "A tilalom a megye külterületi erdeire, fásításaira és azok 200 méteres sávjára vonatkozik.": "Запрет действует для лесов и лесонасаждений медье вне населённых пунктов и 200-метровой полосы вокруг них.",
  "Erősség": "Магнитуда",
  "Mélység": "Глубина",
  "Cunamiriasztás": "Предупреждение о цунами",
  "Hírek alapján (előző nap):": "По новостям (предыдущий день):",
  "független forrás": "независимых источников",
  "esemény": "событий",
  "Érintett ország, a konfliktus fő helyszíne máshol van.": "Вовлечённая страна; основная арена конфликта в другом месте.",
  "Időpont": "Время",
  "Forrás": "Источник",
  "Forrás megnyitása": "Открыть источник",
  "Világhelyzet": "Ситуация в мире",
  "nincs adat": "нет данных",
  "frissítve": "обновлено",
  "mentett adat (offline)": "сохранённые данные (офлайн)",
  "Még nincs letöltött világhelyzet-adat. Kapcsold be internettel.": "Данные о ситуации в мире ещё не загружены. Включите при наличии интернета.",
  "Távolról ikonok, közelítve az érintett terület körvonallal és fátyollal. Koppints egy jelre vagy területre a részletekért.": "Издалека значки; при приближении затронутая территория обведена и затенена. Нажмите на знак или территорию, чтобы увидеть подробности.",
  "tűzveszély-előrejelzés (FWI), csak internettel. Ez veszély-index, NEM tilalom.": "прогноз пожарной опасности (FWI), только с интернетом. Это индекс опасности, НЕ запрет.",
  "Források": "Источники",
  "később (hozzáférésre vár)": "позже (ожидает доступа)",
  "most nem frissült": "сейчас не обновлено"
});

// ===== 2026-10-18 16:4x: vilaghelyzet v2 (haboru / instabilitas, tilalom tavolrol egy jel; kartya 771683de) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Fegyveres összecsapás / instabilitás": "Вооружённые столкновения / нестабильность",
  "Felkelés, terrorizmus vagy szervezett bűnözés (nem háború)": "Повстанческое движение, терроризм или организованная преступность (не война)",
  "helyszín": "мест",
  "Megyék tilalommal": "Медье с запретом",
  "Közelíts a megyék megjelenítéséhez.": "Приблизьте карту, чтобы увидеть медье."
});

// ===== 2026-10-18: ige-melletti jegyzetek (Biblia, kartya c7ec8846) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Mértékegység": "Единица измерения",
  "Scofield-jegyzet": "Примечание Скофилда",
  "Jegyzetek": "Примечания",
  "Jegyzetek az igék mellett": "Примечания у стихов",
  "Ahol egy vershez jegyzet tartozik, egy kis jel áll mellette; rákoppintva megnyílik. A jegyzetcsomag a most olvasott fordításhoz tartozik, és letöltés után internet nélkül is megvan.": "Если к стиху есть примечание, рядом стоит маленький значок; нажмите, чтобы открыть. Пакет примечаний относится к переводу, который вы читаете, и после загрузки работает без интернета.",
  "Ehhez a fordításhoz még nincs jegyzetcsomag.": "Для этого перевода пакета примечаний пока нет.",
  "A letölthető jegyzetcsomagok listája most nem érhető el.": "Список загружаемых пакетов примечаний сейчас недоступен.",
  "Jelek megjelenítése": "Показывать значки",
  "jegyzet": "примечаний",
  "Még nincs letöltve": "Ещё не загружено",
  "Törlöd ezt a jegyzetcsomagot?": "Удалить этот пакет примечаний?"
});

// ===== APOKRIF KONYVEK a Bibliaban (kartya 28758956, 2026-10-18) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Apokrifek ↓": "Апокрифы ↓",
  "Apokrif könyvek letöltése": "Загрузить апокрифические книги",
  "Deuterokanonikus könyvek": "Неканонические (второканонические) книги",
  "Ószövetségi apokrifek": "Ветхозаветные апокрифы",
  "További ószövetségi apokrifek": "Другие ветхозаветные апокрифы",
  "Pszeudepigráfák": "Псевдоэпиграфы",
  "Apostoli atyák": "Мужи апостольские",
  "vers": "стих",
  "Énok könyvei letöltése": "Загрузить книги Еноха",
  "Énok 2–3 ↓": "Енох 2–3 ↓"
});

// ===== OFFLINE TERKEP CSOPORT a terkep-funkciok tablan (2026-10-18) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Helyzet, pontok és mérés": "Положение, точки и измерение",
  "Offline térkép": "Офлайн-карта",
  "A tájegységek letöltése a telefonos alkalmazásban működik.": "Загрузка по регионам работает в приложении для телефона.",
  "Külföld: országok és tájegységeik ›": "Зарубежье: страны и их регионы ›",
  "Magyarország tájegységei": "Регионы Венгрии",
  "Külföldi térképek": "Зарубежные карты",
  "A saját térképet tájegységenként töltheted le: itt lent, az „Offline térkép” csoportban.": "Свою карту можно скачать по регионам: прямо ниже, в группе «Офлайн-карта».",
  "A tájegységek listája most nem érhető el (nincs kapcsolat vagy belépés).": "Список регионов сейчас недоступен (нет связи или не выполнен вход).",
  "Saját térkép bekapcsolva. A tájegységeket itt lent, az „Offline térkép” csoportban töltheted le.": "Своя карта включена. Регионы скачиваются прямо ниже, в группе «Офлайн-карта».",
  "Az alaptérképet az OpenStreetMap szabályai miatt nem lehet előre letölteni (a megnézett részek megmaradnak). Internet nélkül a Saját térkép működik: Magyarországra tájegységenként letöltheted itt lent, az „Offline térkép” csoportban.": "Базовую карту нельзя скачать заранее по правилам OpenStreetMap (просмотренные участки сохраняются). Без интернета работает Своя карта: для Венгрии её можно скачать по регионам прямо ниже, в группе «Офлайн-карта».",
  // 2026-10-19 (card 4c1a5683): own country first, Más országok térképei, separate trails / points
  "Turistautak": "Туристические тропы",
  "Turistapontok": "Туристические точки",
  "Az egész ország": "Вся страна",
  "Más országok térképei": "Карты других стран",
  "Más országok térképei ›": "Карты других стран ›",
  "A telefon beállításaiból nem derül ki, melyik a saját országod: a Más országok térképei között megtalálod.": "Из настроек телефона не видно, какая страна ваша: вы найдёте её в разделе «Карты других стран».",
  "Koppints egy országra, és lenyílik. Az alaptérkép, a turistautak és a turistapontok külön-külön letölthetők, az egész országra vagy tájegységenként. A turistautak és a pontok az online térképen is működnek, és kevés helyet foglalnak. Az alaptérképet az első kéréskor a szerver készíti elő, ez néhány perc lehet.": "Нажмите на страну, чтобы раскрыть её. Базовую карту, туристические тропы и туристические точки можно скачать отдельно, для всей страны или по регионам. Тропы и точки работают и на онлайн-карте и занимают мало места. Базовую карту сервер готовит при первом запросе, это может занять несколько минут."
});

// 2026-10-19 (card 19b4756f): second recorded Bible voice (Charon)
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "A PrepperPapa hang felvétele": "Запись голоса PrepperPapa",
  "Imre (gépi)": "Имре (синтетический)",
  "Charon (új, jobb minőségű)": "Харон (новый, лучшего качества)",
  "Az eredeti felvétel, a teljes Biblia elérhető.": "Исходная запись, доступна вся Библия.",
  "Új, természetesebb felvétel, könyvenként érkezik. Amelyik könyv még nem készült el, azt Imre olvassa fel.": "Новая, более естественная запись, появляется по книгам. Ещё не готовые книги читает Имре.",
  "Letöltés közben a felvétel nem váltható.": "Во время загрузки запись нельзя переключить.",
  "A Charon-felvétel készül, könyvenként érkezik. Amint egy könyv elkészül, itt letölthető lesz.": "Запись Харона готовится, книги появляются по одной. Как только книга будет готова, её можно будет скачать здесь.",
  "A Charon-felvétel készül, könyvenként érkezik.": "Запись Харона готовится, книги появляются по одной.",
  "Minden elkészült könyv letöltése": "Скачать все готовые книги"
});

// 2026-10-19 (card eaaba276): calculator validation, settlement search, secret QR, compass, household, reminders
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Add meg, hány liter vizet tisztítasz (nullánál több).": "Укажи, сколько литров воды обеззараживаешь (больше нуля).",
  "Ez a számoló legfeljebb 10 000 literig számol.": "Этот калькулятор считает максимум до 10 000 литров.",
  "A magasság -500 és 9000 méter között legyen.": "Высота должна быть от -500 до 9000 метров.",
  "Tölts ki minden mezőt nullánál nagyobb számmal.": "Заполни каждое поле числом больше нуля.",
  "A fűtött terület legfeljebb 2000 m² lehet.": "Отапливаемая площадь может быть не больше 2000 м².",
  "Legfeljebb 365 napra számol.": "Считает максимум на 365 дней.",
  "Tölts ki mindkét mezőt nullánál nagyobb számmal.": "Заполни оба поля числом больше нуля.",
  "A tetőfelület legfeljebb 10 000 m² lehet.": "Площадь крыши может быть не больше 10 000 м².",
  "Egyetlen esőből legfeljebb 500 mm-rel számol: ennél több egy esőzésből nem esik.": "Для одного дождя считает максимум 500 мм: больше за один дождь не выпадает.",
  "Gyalog legfeljebb 1000 km-rel számol. Hosszabb utat bonts szakaszokra.": "Пешком считает максимум 1000 км. Более длинный маршрут раздели на отрезки.",
  "Az emelkedés nem lehet negatív: a lejtőt ne vond le, írj 0-t.": "Подъём не может быть отрицательным: не вычитай спуск, введи 0.",
  "Az összes emelkedés legfeljebb 20 000 méter lehet.": "Общий подъём может быть не больше 20 000 метров.",
  "A létszám nem lehet negatív.": "Число людей не может быть отрицательным.",
  "Add meg, hány felnőtt és hány gyerek van (legalább egy fő).": "Укажи, сколько взрослых и детей (хотя бы один человек).",
  "Legfeljebb 500 főre számol.": "Считает максимум на 500 человек.",
  "Hány napra kell? Legalább 1 napot adj meg.": "На сколько дней? Укажи хотя бы 1 день.",
  "Legfeljebb 3650 napra (10 évre) számol.": "Считает максимум на 3650 дней (10 лет).",
  "Legalább 1 elem vagy akku kell.": "Нужна хотя бы 1 батарейка или аккумулятор.",
  "Legfeljebb 100 elemmel számol.": "Считает максимум со 100 батарейками.",
  "Add meg a LED áramfelvételét (mA, nullánál több).": "Укажи ток потребления светодиода (мА, больше нуля).",
  "Add meg az elem vagy akku kapacitását (mAh, nullánál több).": "Укажи ёмкость батарейки или аккумулятора (мА·ч, больше нуля).",
  "Add meg az adóteljesítményt (watt, nullánál több).": "Укажи мощность передатчика (ватты, больше нуля).",
  "Legfeljebb 1500 wattal számol.": "Считает максимум с 1500 ваттами.",
  "Az antennamagasság 0 és 1000 méter között legyen.": "Высота антенны должна быть от 0 до 1000 метров.",
  "A távolság nem lehet negatív.": "Расстояние не может быть отрицательным.",
  "A napok száma nem lehet negatív.": "Число дней не может быть отрицательным.",
  "Hány napra: 1 és 60 nap között adj meg egy számot.": "На сколько дней: укажи число от 1 до 60.",
  "város": "город",
  "település": "населённый пункт",
  "településrész": "часть населённого пункта",
  "tanya, külterület": "хутор, окраина",
  "A koordinátát nem tudtam értelmezni. Írd be így: 47.4979, 19.0402": "Не удалось распознать координату. Введи так: 47.4979, 19.0402",
  "Tölts ki valamit, amit bele lehet tenni.": "Заполни что-нибудь, что можно вложить.",
  "Túl hosszú: ennyi szöveg nem fér el egy QR-kódban. Rövidítsd le, vagy oszd két kódra.": "Слишком длинно: столько текста не поместится в один QR-код. Сократи его или раздели на два кода.",
  "A titkosítás nem sikerült. Próbáld újra.": "Шифрование не удалось. Попробуй ещё раз.",
  "Előre:": "Впереди:",
  "Az É betű mindig az északot mutatja, a felső jel az, amerre a telefon néz.": "С всегда указывает на север, верхняя отметка показывает, куда смотрит телефон.",
  "vércsoport": "группа крови",
  "kontakt": "контакт",
  "még nincs felvéve": "пока ничего не добавлено",
  "Bekapcsolva.": "Включено.",
  "Kikapcsolva.": "Выключено.",
  "Reggel 9-kor szól, a fent választott idővel a lejárat előtt és a lejárat napján, akkor is, ha az app be van zárva.": "Напоминает в 9 утра, с выбранным выше запасом времени до истечения срока и в день истечения, даже если приложение закрыто.",
  "Most nincs olyan tétel, aminek közelgő lejárata lenne.": "Сейчас нет позиций с приближающимся сроком.",
  "Beütemezett emlékeztetők:": "Запланированные напоминания:",
  "Kapcsold be, és engedélyezd az értesítést: szól, mielőtt egy élelmiszer vagy készlet-tétel lejár.": "Включи и разреши уведомления: напомнит, прежде чем истечёт срок продукта или запаса.",
  "Bekapcsolva. Amikor megnyitod az appot, naponta egyszer jelez a lejáró tételekről.": "Включено. Когда открываешь приложение, раз в день напоминает о позициях с истекающим сроком.",
  "Helyi szoba (MESH)": "Локальная комната (MESH)",
  "Offline segéd · tudástár, Biblia, készlet, térkép": "Офлайн-помощник · база знаний, Библия, запасы, карта"
});

Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Név a szobákban (ezen látnak a csevegésben)": "Имя в комнатах (так тебя видят в чате)",
  "A családtag fényképe a profilképed is lesz a szobákban.": "Фото члена семьи станет и твоим фото профиля в комнатах."
});

// kartya 28758956: halk jeloles az apokrif konyveknel
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Nem a Szentírás része – ajánlott irodalom.": "Не входит в Священное Писание – рекомендуемое чтение."
});

// kartya 6b4458db: veszkartya-cimkek + riaszto probahang (v43.308)
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "A kártya tulajdonosának telefonszáma": "Телефон владельца карты",
  "A kártya tulajdonosának telefonszáma:": "Телефон владельца карты:",
  "Vész esetén értesítendő személy": "Кого известить в экстренном случае",
  "Vész esetén értesítendő telefonszáma": "Телефон того, кого известить в экстренном случае",
  "Vész esetén értesítendő:": "Известить в экстренном случае:",
  "pl. +36 30 123 4567": "напр. +36 30 123 4567",
  "Szól, de hallhatatlanul magas. Ha semmit nem hallasz, az normális.": "Звук идёт, но он слишком высокий, чтобы его услышать. Если вы ничего не слышите, это нормально.",
  "Próbahang": "Пробный сигнал",
  "A próbahang nem indult el.": "Пробный сигнал не запустился."
});
// ===== 2026-10-20 v43.326 (card 6b287cfb): PIN recovery code, reminder sentence, PIN setup without a default PIN =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Írd be a PIN-kódod": "Введите PIN-код",
  "Írd be még egyszer": "Введите ещё раз",
  "A PIN még egyszer": "PIN-код ещё раз",
  "Elfelejtettem a PIN-t": "Я забыл PIN-код",
  "Állíts be egy PIN-kódot (6 számjegy)": "Задайте PIN-код (6 цифр)",
  "A PIN 6 számjegy legyen.": "PIN-код должен состоять из 6 цифр.",
  "A két PIN nem egyezik.": "Два PIN-кода не совпадают.",
  "Válassz másik PIN-kódot.": "Выберите другой PIN-код.",
  "Mentési kód a PIN-hez": "Код восстановления PIN-кода",
  "Ha elfelejted a PIN-t, ezzel a kóddal nyithatod meg a tárat, és állíthatsz be új PIN-t. Írd le papírra, és tartsd biztonságos helyen. Csak most látod: a telefon nem őrzi meg, és sehova nem küldjük el.": "Если вы забудете PIN-код, этот код откроет хранилище и позволит задать новый PIN-код. Запишите его на бумаге и храните в надёжном месте. Вы видите его только сейчас: телефон его не хранит, и мы никуда его не отправляем.",
  "Emlékeztető mondat (nem kötelező; titkosítás nélkül tárolódik, ne írd bele a PIN-t)": "Фраза-подсказка (необязательно; хранится без шифрования, не пишите в неё PIN-код)",
  "A kód utolsó négy karaktere (ellenőrzéshez)": "Последние четыре символа кода (для проверки)",
  "Leírtam": "Я записал",
  "Később": "Позже",
  "Mentve. A mentési kód mostantól érvényes.": "Сохранено. Код восстановления действует с этого момента.",
  "Nem egyezik a kód utolsó négy karakterével. Nézd meg újra a leírt kódot.": "Не совпадает с последними четырьмя символами кода. Посмотрите ещё раз на записанный код.",
  "A mentés nem sikerült, próbáld újra.": "Не удалось сохранить, попробуйте ещё раз.",
  "Rendben, a következő belépéskor újra felajánljuk.": "Хорошо, предложим снова при следующем входе.",
  "Emlékeztető mondat:": "Фраза-подсказка:",
  "Új PIN ujjlenyomattal": "Новый PIN-код по отпечатку",
  "Mentési kód": "Код восстановления",
  "Ehhez a tárhoz még nincs mentési kód, és az ujjlenyomatos feloldás sincs bekapcsolva, ezért a PIN nem állítható vissza.": "У этого хранилища ещё нет кода восстановления, и разблокировка по отпечатку не включена, поэтому PIN-код восстановить нельзя.",
  "Új PIN beállítása": "Задать новый PIN-код",
  "Az ujjlenyomat rendben. Add meg az új PIN-t.": "Отпечаток подтверждён. Введите новый PIN-код.",
  "Az ujjlenyomatos feloldás most nem sikerült.": "Разблокировка по отпечатку сейчас не удалась.",
  "Hibás mentési kód.": "Неверный код восстановления.",
  "Az új PIN beállítása nem sikerült, a régi PIN maradt érvényben.": "Не удалось задать новый PIN-код; старый PIN-код остаётся в силе.",
  "A dokumentumok CSAK ezen az eszközön tárolódnak, a PIN-edből képzett kulccsal titkosítva (AES-256) — a vészkártyával ellentétben ezt csak te nyithatod meg. A PIN-t nem tároljuk. Ha elfelejted, a mentési kóddal vagy ujjlenyomattal állíthatsz be újat; ezek nélkül a dokumentumok nem állíthatók vissza.": "Документы хранятся ТОЛЬКО на этом устройстве, зашифрованные ключом, созданным из вашего PIN-кода (AES-256) — в отличие от экстренной карты, открыть их можете только вы. PIN-код не хранится. Если вы его забудете, новый можно задать кодом восстановления или отпечатком пальца; без них документы восстановить нельзя.",
  "A kódok titkosítva tárolódnak ezen az eszközön: a kulcs a PIN-edből készül (AES-256), magát a PIN-t nem tároljuk. Ha elfelejted a PIN-t, a mentési kóddal vagy ujjlenyomattal állíthatsz be újat; ezek nélkül a tartalom nem állítható vissza, ezért a seed-mondatról tarts papírmásolatot is. A teljes mentésbe ez a rész SOSEM kerül bele.": "Коды хранятся на этом устройстве в зашифрованном виде: ключ создаётся из вашего PIN-кода (AES-256), сам PIN-код не хранится. Если вы забудете PIN-код, новый можно задать кодом восстановления или отпечатком пальца; без них содержимое восстановить нельзя, поэтому храните и бумажную копию сид-фразы. Эта часть НИКОГДА не попадает в полную резервную копию."
});
// ===== 2026-10-20 v43.327 (card 6b287cfb): wallet-creation acknowledgement (HU text approved by the owner 21:39) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Értem, hogy a tárcám kulcsait (PIN, helyreállító kód, seed phrase) csak én ismerem. Ha elveszítem őket, a tárcám tartalma végleg elveszhet, és a PrepperPapa nem tudja visszaállítani. A kulcsok biztonságos megőrzése az én felelősségem.": "Я понимаю, что ключи моего кошелька (PIN-код, код восстановления, сид-фраза) знаю только я. Если я их потеряю, содержимое кошелька может быть утрачено навсегда, и PrepperPapa не сможет его восстановить. Надёжное хранение ключей — моя ответственность.",
  "Rendben": "Хорошо",
  "A tárca létrehozásához jelöld be, hogy tudomásul vetted a fenti szöveget.": "Чтобы создать кошелёк, отметьте, что вы ознакомились с текстом выше."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): "Fontos tudnivaló" notice (HU approved by the owner 21:47, TG 28515) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Fontos tudnivaló az Irattárcáról és a tárcáról": "Важная информация о Кошельке документов и кошельке",
  "Az adataid csak a te eszközödön vannak, titkosítva. A PrepperPapa nem fér hozzájuk, és nem tudja visszaállítani őket.": "Ваши данные хранятся только на вашем устройстве, в зашифрованном виде. PrepperPapa не имеет к ним доступа и не может их восстановить.",
  "A PIN-kódod, a helyreállító kódod és a tárcád kulcsai (seed phrase) kizárólag nálad vannak. Ha elveszíted, megosztod vagy illetéktelen megszerzi őket, az adataid és a tárcád tartalma végleg elveszhet.": "Ваш PIN-код, код восстановления и ключи кошелька (сид-фраза) есть только у вас. Если вы их потеряете, передадите кому-то или их получит посторонний, ваши данные и содержимое кошелька могут быть утрачены навсегда.",
  "Ha a helyreállító kódot e-mailben is kéred, a hozzáférésed csak olyan biztonságos, mint a postafiókod.": "Если вы также запросите код восстановления по электронной почте, ваш доступ будет защищён не лучше, чем ваш почтовый ящик.",
  "A kulcsok, a kód, a postafiók és az eszköz biztonságos megőrzéséért, valamint a mentésekért te felelsz. A PrepperPapa nem felel az ebből eredő kárért, kivéve azt a felelősséget, amelyet jogszabály nem enged kizárni.": "Вы отвечаете за надёжное хранение ключей, кода, почтового ящика и устройства, а также за резервные копии. PrepperPapa не несёт ответственности за возникший из-за этого ущерб, за исключением ответственности, которую закон не позволяет исключить.",
  "Elolvastam, értem.": "Я прочитал(а) и понимаю."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): Gíra paragraph (HU approved by the owner 21:58, TG 28530) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "A gíra a közösségen belüli elszámolás egysége, nem pénz és nem fizetőeszköz. A PrepperPapa nem váltja át pénzre, nem garantálja az értékét, és nem részese a tagok közötti ügyleteknek. A tagok közötti vitákat és elszámolást a felhasználók egymás közt rendezik. Az offline fizetésnél előfordulhat, hogy ugyanazt a gírát kétszer költik el; ennek kockázata a felhasználókat terheli.": "Гира — единица взаимных расчётов внутри сообщества, не деньги и не платёжное средство. PrepperPapa не обменивает её на деньги, не гарантирует её стоимость и не является стороной сделок между участниками. Споры и расчёты между участниками пользователи решают между собой. При офлайн-платежах одна и та же гира может быть потрачена дважды; этот риск несут пользователи."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): SOS fail-closed -- nothing goes out unencrypted =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Az SOS NEM ment el: a titkosítás nem sikerült, ezért nyíltan nem küldöm el. Életveszélyben hívd a 112-t! A vészsíp szól.": "SOS НЕ отправлен: шифрование не удалось, поэтому без шифрования он не отправляется. При угрозе жизни звони 112! Сигнальный свисток звучит.",
  "{n} helyre NEM ment el, mert a titkosítás nem sikerült. Életveszélyben hívd a 112-t!": "В {n} мест(а) он НЕ отправлен, потому что шифрование не удалось. При угрозе жизни звони 112!"
});
// ===== 2026-10-20 v43.329 (card 6b287cfb): room chat fail-closed -- nothing goes out unencrypted =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Az üzenet nem ment el: a titkosítás nem sikerült, vagy ezen a telefonon hiányzik a szoba kulcsa. Titkosítatlanul nem küldöm el. A szöveg megmaradt: lépj be újra a szobába (vagy kérj új meghívót a gazdától), és küldd újra.": "Сообщение НЕ отправлено: шифрование не удалось, или на этом телефоне нет ключа комнаты. Без шифрования оно не отправляется. Твой текст сохранён: войди в комнату заново (или попроси у хозяина новое приглашение) и отправь ещё раз.",
  "A kép nem ment el: a titkosítás nem sikerült, vagy hiányzik a szoba kulcsa. Titkosítatlanul nem küldöm el. Lépj be újra a szobába.": "Изображение НЕ отправлено: шифрование не удалось, или нет ключа комнаты. Без шифрования оно не отправляется. Войди в комнату заново."
});
// ===== 2026-10-20 v43.329 (card 6b287cfb): SOS / fall-detection notices (HU approved by the owner, TG 28555) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Ez nem segélyhívás. Az SOS-jelzés és az esés-érzékelés csak a te szobáidba, az ott lévő tagoknak küld értesítést. Nem hívja a mentőket, a rendőrséget vagy a tűzoltókat, és nem biztos, hogy bárki időben meglátja. Az esés-érzékelés nem pontos: téves riasztást adhat, és előfordulhat, hogy egy esést nem érzékel. Életveszélyben, balesetnél, rosszullétnél hívd a 112-t. A PrepperPapa nem segélyszolgálat, és nem garantálja, hogy a jelzés célba ér.": "Это не экстренный вызов. Сигнал SOS и определение падения отправляют уведомление только в твои комнаты, их участникам. Они не вызывают скорую помощь, полицию или пожарных, и нет уверенности, что кто-то вовремя его увидит. Определение падения неточно: оно может дать ложную тревогу и может не распознать падение. При угрозе жизни, несчастном случае или плохом самочувствии звони 112. PrepperPapa не является экстренной службой и не гарантирует, что сигнал дойдёт до адресата.",
  "Az SOS elküldi a pontos helyedet, és ha bejelölted, a Vészkártyád adatait (vércsoport, allergia, gyógyszer, betegség, kontakt) is az összes szobádnak.": "SOS отправляет твоё точное местоположение и, если ты отметил(а), данные твоей Карточки экстренной помощи (группа крови, аллергия, лекарство, болезнь, контакт) во все твои комнаты.",
  "A Vészkártya adataimat is küldjétek az SOS-szal.": "Отправляйте вместе с SOS и данные моей Карточки экстренной помощи.",
  "Ez nem hívja a mentőket. Életveszélyben hívd a 112-t.": "Это не вызывает скорую помощь. При угрозе жизни звони 112.",
  "%s SOS-jelzést küldött. Ha nem éred el, és veszélyben lehet, hívd a 112-t.": "%s отправил(а) сигнал SOS. Если ты не можешь связаться с этим человеком и он может быть в опасности, звони 112.",
  "(zárt kép — ehhez a szobához nincs meg a kulcs)": "(зашифрованное изображение — нет ключа этой комнаты)",
  "Fontos tudnivaló az SOS-ról és az esés-érzékelésről": "Важная информация об SOS и обнаружении падения",
  "Nem kell megnyomnod: a telefon két percenként magától egyeztet. A gomb csak azonnali egyeztetésre való.": "Нажимать не нужно: телефон сам синхронизирует каждые две минуты. Кнопка нужна только для немедленной синхронизации.",
  "Nincs elérhető Gíra-szoba: egy szoba gazdája kapcsolhatja be a szoba beállításaiban („Gíra-közösség”).": "Нет доступной комнаты Gíra: владелец комнаты может включить это в настройках комнаты («Сообщество Gíra»).",
  "Automatikus egyeztetés bekapcsolva, de most nincs elérhető Gíra-szoba": "Автосинхронизация включена, но сейчас ни одна комната Gíra недоступна",
  "utoljára próbálva": "последняя попытка",
  "Automatikus egyeztetés bekapcsolva": "Автосинхронизация включена",
  "utoljára ellenőrizve": "последняя проверка",
  "Utolsó változás elküldve": "Последнее изменение отправлено",
  "Utolsó beérkezett könyv": "Последняя полученная книга",
  "Fortiprep vagy konzerv": "Fortiprep или консервы",
  "Mennyibe kerül a tartalék hosszú távon": "Сколько стоит запас в долгосрочной перспективе",
  "Fortiprep vagy konzerv: mennyibe kerül a tartalék": "Fortiprep или консервы: сколько стоит запас",
  "Ugyanannyi kalóriát hasonlít össze ugyanarra az időszakra. Az árakat a saját boltod szerint átírhatod.": "Сравнивает одинаковое количество калорий за один и тот же период. Цены можно изменить под свой магазин.",
  "Hány fő": "Сколько человек",
  "Napi kalória fejenként (kcal)": "Калории в день на человека (ккал)",
  "Hány évig álljon a tartalék": "Сколько лет должен храниться запас",
  "Egy csomag ára (Ft)": "Цена одной упаковки (HUF)",
  "Kalória egy csomagban (kcal)": "Калории в одной упаковке (ккал)",
  "Eltarthatóság (év)": "Срок хранения (лет)",
  "Alapérték: 42 adagos (14 napos, egy fős) csomag a PP-2-2026 kóddal, 2026. augusztusi áron. A mostani gyártás minőségmegőrzési ideje 2050. november.": "По умолчанию: упаковка на 42 порции (14 дней, один человек) с кодом PP-2-2026, цена августа 2026 года. Текущая партия годна до ноября 2050 года.",
  "Egy doboz ára (Ft)": "Цена одной банки (HUF)",
  "Kalória egy dobozban (kcal)": "Калории в одной банке (ккал)",
  "A konzervnél azzal számol, hogy lejáratkor az egészet lecseréled. Ha rotálva megeszed, a csere nem veszteség, de figyelni kell rá.": "Для консервов считается, что по истечении срока ты всё заменяешь. Если съедаешь их по ротации, замена не потеря, но за ней нужно следить.",
  "A FortiPrep 14 napos csomagja a PP-2-2026 kóddal, kedvezménnyel:": "14-дневная упаковка FortiPrep с кодом PP-2-2026, со скидкой:",
  "Megnézem a FortiPrep oldalán": "Посмотреть на сайте FortiPrep",
  "Minden mezőbe nullánál nagyobb számot írj.": "Введи в каждое поле число больше нуля.",
  "Ekkora értékkel nem számol.": "С такими большими значениями не считает.",
  "Erre az időszakra a Fortiprep az olcsóbb.": "На этот период Fortiprep дешевле.",
  "Erre az időszakra a konzerv az olcsóbb.": "На этот период консервы дешевле.",
  "Erre az időszakra a kettő ugyanannyiba kerül.": "На этот период оба варианта стоят одинаково.",
  "Különbség": "Разница",
  "Szükséges kalória (kcal)": "Нужно калорий (ккал)",
  "Csomag": "Упаковки",
  "Egyszeri vásárlás": "Разовая покупка",
  "Ezer kalória ára": "Цена за 1000 ккал",
  "Vásárlás a teljes időszakra": "Покупок за весь период",
  "Évente": "В год",
  "Doboz": "Банки",
  "FortiPrep 14 napos csomag, 15% kedvezménnyel": "Упаковка FortiPrep на 14 дней, скидка 15%",
  "Kuponkód": "Промокод",
  "Másol": "Копировать",
  "A gomb mögötti link magától érvényesíti a kódot a kosárban.": "Ссылка за кнопкой сама применит код в корзине.",
  "Megveszem kedvezménnyel": "Купить со скидкой",
  // Biblia konyvszin-sema (2026-10-25, kartya 6b4458db)
  "Könyvszínek": "Цвета книг",
  "Új": "Новая",
  "Régi": "Старая",
  "Minden könyvcsoport saját színt kap, az Ószövetségben és az Újszövetségben is.": "Каждая группа книг получает свой цвет, и в Ветхом, и в Новом Завете.",
  "A korábbi zöld árnyalatok: az Újszövetség is az Ószövetség színeit kapja.": "Прежние оттенки зелёного: Новый Завет получает те же цвета, что и Ветхий.",
  // Biblia terkep: helyleiras (2026-10-25, kartya 6b4458db)
  "biztos": "точно",
  "valószínű": "вероятно",
  "lehetséges": "возможно",
  "Mai azonosítás": "Современная идентификация",
  "Megjegyzés (OpenBible, angolul)": "Примечание (OpenBible, на английском)",
  "Más nevek (angol fordításokban)": "Другие названия (в английских переводах)",
  "További versek": "Другие стихи"
});
// ===== 2026-10-25 v43.355: camera Morse follows the tempo (#65); Noah memory lines from about 8 GB (#52) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Indítsd, és irányítsd a kamerát egy Morzét villogó fényre (pl. egy másik telefon vakuja). A háttér legyen sötét, a fény a kép KÖZEPÉN. A fény-küszöb magától hangolódik; a \"Fényerő\" sáv és a lámpa mutatja, mit lát. A vétel magától követi a villogás tempóját, és a \"Vétel sebesség\" csúszkát is odaállítja; kézzel is állíthatod.": "Запусти и направь камеру на свет, мигающий азбукой Морзе (например, вспышку другого телефона). Фон должен быть тёмным, свет — в ЦЕНТРЕ кадра. Порог света подстраивается сам; полоса «Яркость» и лампа показывают, что видит камера. Приём сам следует за темпом мигания и сам ставит туда ползунок «Скорость приёма»; его можно двигать и вручную.",
 "A nyelvi modell válasz közben kb. 3 GB memóriát használ, ezért Noah legalább 5,5 GB jelentett memóriát kér, ami kb. 8 GB-os telefonnak felel meg. Kisebb telefonon a rendszer válasz közben leállítaná az appot, ezért itt Noah nem használható.": "При ответе языковая модель использует около 3 ГБ памяти, поэтому Noah требует не менее 5,5 ГБ сообщаемой памяти, что соответствует телефону примерно на 8 ГБ. На телефоне меньше система остановила бы приложение во время ответа, поэтому здесь Noah использовать нельзя.",
 "A telefon memóriáját nem sikerült lekérdezni.": "Не удалось узнать память телефона.",
 "A telefon által jelentett memória: {jel} GB, ez kb. {nev} GB-os telefon (a rendszer a névleges memória kb. 90%-át jelenti).": "Память, которую сообщает телефон: {jel} ГБ, то есть телефон примерно на {nev} ГБ (система сообщает около 90% номинальной памяти).",
 "Ebbe a telefonba mindkét modell belefér (E2B és E4B).": "На этот телефон помещаются обе модели (E2B и E4B).",
 "Ebbe a telefonba az E2B modell fér bele. Az E4B nem, mert ahhoz legalább {kapu} GB jelentett memória kell.": "На этот телефон помещается модель E2B. E4B — нет, ей нужно не менее {kapu} ГБ сообщаемой памяти.",
 "Ebbe a telefonba egyik modell sem fér bele.": "На этот телефон не помещается ни одна модель.",
 "Noah kb. 8 GB-os telefontól fut (a telefon névleges memóriája), a nagyobb E4B modell kb. 10 GB-ostól.": "Noah работает на телефоне примерно от 8 ГБ (номинальная память телефона), более крупная модель E4B — примерно от 10 ГБ.",
 "A telefon {jel} GB memóriát jelent, ez kb. {nev} GB-os telefon.": "Телефон сообщает {jel} ГБ памяти, то есть это телефон примерно на {nev} ГБ.",
 "Ez a telefon: {modell}.": "Этот телефон: {modell}.",
 "Szabad hely: {hely}.": "Свободное место: {hely}.",
 "Ajánlott: {modell}.": "Рекомендуется: {modell}.",
 "nem választható: legalább {ajanlott} GB-os telefon kell": "недоступно: нужен телефон не менее чем на {ajanlott} ГБ",
 "ez kb. {nev} GB-os": "этот примерно на {nev} ГБ",
 "Ajánlott memória: legalább {ajanlott} GB-os telefon": "Рекомендуемая память: телефон не менее чем на {ajanlott} ГБ",
 "ez a telefon {jel} GB-ot jelent, kb. {nev} GB-os": "этот телефон сообщает {jel} ГБ, примерно {nev} ГБ",
 "ezért ez a modell itt nem választható": "поэтому эту модель здесь выбрать нельзя",
 "ennek a telefonnak a memóriáját nem sikerült lekérdezni": "не удалось узнать память этого телефона",
 "Processzor:": "Процессор:",
 "kb. 8 GB-os telefon kell": "нужен телефон примерно на 8 ГБ",
 "Ehhez Android 11 vagy újabb, kb. 8 GB-os (névleges memóriájú) telefon kell, és 6-8 GB szabad hely.": "Для этого нужен телефон с Android 11 или новее, примерно 8 ГБ (номинальной) памяти и 6-8 ГБ свободного места.",
  "Becslés a légnyomás-trendből (Zambretti-módszer), a félgömb és az évszak szerint igazítva. Szelet és felhőzetet nem lát, ezért csak tájékoztató.": "Оценка по тренду атмосферного давления (метод Замбретти) с поправкой на полушарие и время года. Ветер и облачность она не видит, поэтому носит лишь ориентировочный характер.",
  "Magasság nélkül csak a trendet veszi figyelembe, a nyomás szintjét nem.": "Без высоты учитывается только тренд, а не уровень давления.",
  "A trópusokon a légnyomás napi ingadozása elfedi a frontokat, ezért itt a becslés kevésbé megbízható.": "В тропиках суточные колебания давления маскируют фронты, поэтому здесь оценка менее надёжна.",
  "A sarkvidéken a módszer kevésbé megbízható.": "В полярных районах метод менее надёжен.",
  "Becslés": "Оценка",
  "Napos, nyugodt idő": "Солнечно, спокойно",
  "Változékony idő": "Переменная погода",
  "Eső valószínű": "Вероятен дождь",
  "Vihar, sok eső": "Шторм, сильный дождь",
  "Gyorsan emelkedik": "Быстро растёт",
  "Lassan emelkedik": "Медленно растёт",
  "Állandó": "Стабильно",
  "Lassan süllyed": "Медленно падает",
  "Gyorsan süllyed": "Быстро падает"
});
// Vercsoport calculator (2026-10-25, card 6b4458db): the red-cell table of tudastar article 3.6
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Vércsoport": "Группа крови",
 "Kinek adhatsz vért, és kitől kaphatsz": "Кому можно отдать кровь и от кого её можно получить",
 "Vércsoport: kinek adhatsz, kitől kaphatsz": "Группа крови: кому можно отдать, от кого можно получить",
 "Vérátömlesztést csak egészségügyi személyzet végez, vércsoport-meghatározás és keresztpróba után.": "Переливание крови проводит только медицинский персонал, после определения группы крови и пробы на совместимость.",
 "Terepen vért adni vagy kapni nem szabad. Ezt nem lehet rögtönözni.": "В полевых условиях отдавать или получать кровь нельзя. Это невозможно импровизировать.",
 "A kalkulátor tájékoztató: arra való, hogy értsd a szabályt, nem arra, hogy terepen dönts belőle.": "Калькулятор носит справочный характер: он помогает понять правило, а не принимать по нему решения в полевых условиях.",
 "A te vércsoportod": "Ваша группа крови",
 "Válaszd ki": "Выберите",
 "Mutasd": "Показать",
 "Források: Magyar Vöröskereszt, Ausztrál Vöröskereszt (Lifeblood), Amerikai Vöröskereszt.": "Источники: Венгерский Красный Крест, Австралийский Красный Крест (Lifeblood), Американский Красный Крест.",
 "Válaszd ki a vércsoportodat.": "Выберите свою группу крови.",
 "Kinek adhatsz vörösvérsejtet": "Кому можно перелить ваши эритроциты",
 "Kitől kaphatsz vörösvérsejtet": "От кого вам можно перелить эритроциты",
 "Mind a nyolc vércsoportnak": "Всем восьми группам крови",
 "Mind a nyolc vércsoporttól": "От всех восьми групп крови",
 "A 0 Rh-negatív vörösvérsejt bárkinek adható, ezért hívják univerzális vörösvérsejt-adónak.": "Эритроциты 0 резус-отрицательные можно перелить любому, поэтому группу 0 резус-отрицательную называют универсальным донором эритроцитов.",
 "A plazmánál a szabály megfordul: az AB vércsoportú plazma bárkinek adható, a 0 vércsoportú csak 0 vércsoportúnak.": "С плазмой правило переворачивается: плазму AB можно перелить любому, плазму 0 только группе 0.",
 "Ez tájékoztató, nem döntési alap.": "Это справка, а не основание для решения.",
 "Hogy egy beteg milyen vért kap, azt vércsoport-meghatározás és keresztpróba után az ellátó orvos dönti el.": "Какую кровь получит пациент, решает лечащий врач после определения группы крови и пробы на совместимость.",
 "0 Rh-negatív": "0 резус-отрицательная",
 "0 Rh-pozitív": "0 резус-положительная",
 "A Rh-negatív": "A резус-отрицательная",
 "A Rh-pozitív": "A резус-положительная",
 "B Rh-negatív": "B резус-отрицательная",
 "B Rh-pozitív": "B резус-положительная",
 "AB Rh-negatív": "AB резус-отрицательная",
 "AB Rh-pozitív": "AB резус-положительная"
});
// Bible package by default (2026-10-25, card 6b4458db): notes and apocrypha download with the Bible, settings keep display switches
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Ahol egy vershez jegyzet tartozik, egy kis jel áll mellette; rákoppintva megnyílik. A jegyzetek a Bibliával együtt töltődnek le, és internet nélkül is megvannak.": "Если к стиху есть примечание, рядом стоит маленький значок; нажмите, чтобы открыть. Примечания загружаются вместе с Библией и доступны без интернета.",
 "A Bibliával együtt töltődik le": "Загружается вместе с Библией",
 "Apokrif könyvek megjelenítése": "Показывать апокрифические книги"
});

// feedback sheet fields + one-press screenshot (card 6b4458db, v43.374)
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Típus": "Тип",
 "Modul": "Модуль",
 "Leírás": "Описание",
 "Képernyőkép": "Снимок экрана",
 "Képernyőkép erről a képernyőről": "Снимок этого экрана",
 "Kép feltöltése": "Загрузить изображение",
 "Kép eltávolítása": "Удалить изображение",
 "Ezt a képet nem tudtam beolvasni.": "Не удалось прочитать это изображение.",
 "Hiba": "Ошибка",
 "Ötlet": "Идея",
 "Kérdés": "Вопрос",
 "Működik (kipróbáltam, rendben)": "Работает (проверил, всё в порядке)"
});

// ===== 2026-10-25 v43.375: Noah in every language, answer report, about/licence, morning summary, sun path (card 6b287cfb) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Válasz jelentése": "Пожаловаться на ответ",
 "A jelentéssel a kérdésed és Noah válasza a PrepperPapa csapatához kerül, hogy kijavíthassuk. Mást nem küldünk el.": "Вместе с жалобой твой вопрос и ответ Ноя отправляются команде PrepperPapa, чтобы мы могли это исправить. Больше ничего не отправляется.",
 "Mi a gond a válasszal?": "Что не так с ответом?",
 "Sértő vagy bántó": "Оскорбительный или обидный",
 "Veszélyes vagy káros": "Опасный или вредный",
 "Téves vagy félrevezető": "Неверный или вводящий в заблуждение",
 "Megjegyzés (nem kötelező)": "Комментарий (необязательно)",
 "A jelentett válasz": "Ответ, на который жалуешься",
 "A szerver most nem fogadta el a jelentést. Próbáld újra később.": "Сервер сейчас не принял жалобу. Попробуй позже.",
 "Jelentve": "Отправлено",
 "Köszönjük, a jelentést megkaptuk.": "Спасибо, мы получили жалобу.",
 "Noah névjegye": "О Ное",
 "Noah a Gemma 4 nyílt nyelvi modellel működik (Gemma 4, Google, Apache 2.0 licenc).": "Ной работает на открытой языковой модели Gemma 4 (Gemma 4, Google, лицензия Apache 2.0).",
 "A Gemma 4 modellt a Google fejlesztette és adja ki az Apache License 2.0 licenc szerint. A licenc szövege:": "Модель Gemma 4 разработана и выпускается компанией Google по лицензии Apache License 2.0. Текст лицензии:",
 "A PrepperPapa nem a Google terméke, és a Google nem támogatja vagy hagyja jóvá.": "PrepperPapa не является продуктом Google, и Google его не поддерживает и не одобряет.",
 "Noah válaszait gépi modell írja, és tévedhet. Ha egy válasz sértő, veszélyes vagy téves, a válasz alatti „Válasz jelentése” gombbal jelezd nekünk.": "Ответы Ноя пишет машинная модель, и они могут быть неверными. Если ответ оскорбительный, опасный или неверный, сообщи нам кнопкой «Пожаловаться на ответ» под ним.",
 "Noah, az offline MI segéd: Gemma 4, Google, Apache 2.0 licenc.": "Ной, офлайн-помощник с ИИ: Gemma 4, Google, лицензия Apache 2.0.",
 "A modell a Google Gemma 4 (Apache 2.0 licenc), a Google hivatalos LiteRT-tárából (Hugging Face) töltődik le. Wi-Fi ajánlott.": "Модель — Google Gemma 4 (лицензия Apache 2.0), загружается из официального хранилища LiteRT от Google (Hugging Face). Рекомендуется Wi-Fi.",
 "Reggeli összefoglaló": "Утренняя сводка",
 "Minden reggel értesítés: a készlet hiányai, a készenléti szint, egy ige és egy felkészülési tanács. Ha megnyitod Noah-t, kártyaként is látod.": "Каждое утро уведомление: нехватка в запасах, уровень готовности, стих из Библии и совет по подготовке. Когда откроешь Ноя, увидишь это и как карточку.",
 "Reggeli összefoglaló bekapcsolva": "Утренняя сводка включена",
 "Mutasd most": "Показать сейчас",
 "Értesítés engedélyezése": "Разрешить уведомления",
 "Noah · Reggeli összefoglaló": "Ной · Утренняя сводка",
 "Készenlét: {hely}, {szint} szint, {pct}%.": "Готовность: {hely}, уровень «{szint}», {pct}%.",
 "Hiányzik a következő szinthez: {lista}.": "Не хватает до следующего уровня: {lista}.",
 "Készenlét: még nem mérhető. Add meg a Háztartásban a helyszínt, kik érkeznek oda, és rendelj hozzá készletet.": "Готовность: пока не измерить. В разделе «Домохозяйство» добавь место, кто туда прибудет, и назначь ему запасы.",
 "Hiányzik: {lista}.": "Не хватает: {lista}.",
 "Ige ({hely}): {szoveg}": "Стих ({hely}): {szoveg}",
 "Tipp: {szoveg}": "Совет: {szoveg}",
 "A reggeli összefoglaló a telefonra telepített Android appban működik.": "Утренняя сводка работает в Android-приложении, установленном на телефоне.",
 "Kikapcsolva.": "Выключено.",
 "Az értesítéshez engedély kell: koppints az „Értesítés engedélyezése” gombra.": "Для уведомления нужно разрешение: нажми «Разрешить уведомления».",
 "Beütemezve: a következő {n} reggel, {ido}-kor.": "Запланировано: следующие {n} утр в {ido}.",
 "Minden reggel {ido}-kor.": "Каждое утро в {ido}.",
 "A tipp a tudástárban": "Совет в базе знаний",
 "A nap pályájához tudni kell, hol vagy: nyomd meg lent a „Mérés a helyzetemre” gombot.": "Для пути солнца нужно знать, где ты: нажми внизу «Измерить по моему месту».",
 "A nap most a horizont alatt van: a pályáját nappal rajzolom a képre.": "Солнце сейчас за горизонтом: его путь рисуется на изображении днём.",
 "A nap pályájához iránytű- és dőlésadat kell.": "Для пути солнца нужны данные компаса и наклона.",
 "Napkelte": "Восход",
 "delel": "полдень",
 "A pálya most nincs a képen: fordulj {fok}° felé.": "Пути сейчас нет на изображении: повернись на {fok}°.",
 "A segéd beállításai": "Настройки помощника",
 "A segédhez először le kell tölteni a nyelvi modellt a telefonra (egyszer, Wi-Fi ajánlott).": "Для помощника сначала загрузи языковую модель на телефон (один раз, рекомендуется Wi-Fi).",
 "A választ a telefonon futó gépi modell írja. Életveszélyben a forráscikket olvasd el, és hívd a 112-t. Az igét a Károli-fordításból az app illeszti be, nem a modell.": "Ответ пишет машинная модель, работающая на телефоне. При угрозе жизни прочитай статью-источник и звони по номеру экстренной помощи. Стихи вставляет приложение из своего перевода Библии, а не модель.",
 "Amit még tudjon rólad. Kérdezzben is mondhatod: „jegyezd meg, hogy …”": "Что ещё ему знать о тебе. Можно сказать и в «Спроси»: «запомни, что …»",
 "Az első használatkor a telefon még egyszer ennyi helyet foglal a gyorsabb futáshoz, tehát a letöltés méretének kétszerese kell szabadon.": "При первом использовании телефон занимает столько же места ещё раз для более быстрой работы, поэтому свободным должно быть вдвое больше размера загрузки.",
 "Csak ezen a telefonon marad, sehova nem küldjük el. Gépelés közben magától mentődik.": "Остаётся только на этом телефоне и никуда не отправляется. Сохраняется само при наборе.",
 "Hogyan tisztítsak vizet, ha nincs forraló?": "Как очистить воду, если не могу её вскипятить?",
 "Hogyan tisztítsak vizet?": "Как очистить воду?",
 "Hol van megírva, hogy ne aggódjunk a holnapért?": "Где написано, чтобы мы не заботились о завтрашнем дне?",
 "Hol van megírva, hogy ne aggódjunk?": "Где написано не заботиться?",
 "Károli-fordítás": "Перевод Библии в приложении",
 "Kérdezz a tudástárból, a Bibliából, vagy bármiről. Internet nélkül, a telefonon fut.": "Спрашивай о базе знаний, Библии или о чём угодно. Работает на телефоне, без интернета.",
 "Lakóhely, térség (pl. Gyömrő, Pest megye)": "Место жительства, регион (напр. город, область)",
 "Megszakítás": "Прервать",
 "Mit tudsz?": "Что ты умеешь?",
 "Modell letöltése": "Загрузить модель",
 "Részletes válaszok": "Подробные ответы",
 "Rövid válaszok": "Короткие ответы",
 "Rólam (a válaszokhoz)": "Обо мне (для ответов)",
 "A Háztartás családtagjait is vegye figyelembe": "Учитывать и членов домохозяйства",
 "Írj egy kérdést…": "Напиши вопрос…",
 "Új beszélgetés": "Новый разговор",
 "Még nincs letöltött modell.": "Ещё нет загруженной модели.",
 "Letöltve": "Загружено",
 "A letöltés megszakítva.": "Загрузка прервана.",
 "Kész, a modell a telefonon van.": "Готово, модель на телефоне.",
 "Mentve, csak ezen a telefonon.": "Сохранено, только на этом телефоне.",
 "Törölve.": "Удалено.",
 "{n} liter víz": "{n} л воды",
 "{n} kcal élelem": "{n} ккал еды",
 "{n} kWh hasznos fűtési energia": "{n} кВт·ч полезной энергии для отопления",
 "{fo} fő és {allat} állat, {nap} napra": "{fo} чел. и {allat} животных, на {nap} дн.",
 "{fo} fő, {nap} napra": "{fo} чел., на {nap} дн.",
 "**{hely}**: nincs megadva, ki érkezik ide, ezért a készenléti szint nem számolható (Háztartás › Helyszínek › {hely}).": "**{hely}**: не указано, кто сюда прибудет, поэтому уровень готовности не рассчитать (Домохозяйство › Места › {hely}).",
 "**{hely}** ({keret}): ehhez a helyszínhez még nincs készlet rendelve, ezért a szint nem mérhető. A Készletnél a tétel Tárolási helyénél válaszd ki: {hely}.": "**{hely}** ({keret}): этому месту ещё не назначены запасы, поэтому уровень не измерить. В «Запасах» выбери в месте хранения предмета: {hely}.",
 "**{hely}** ({keret}): van ide rendelt készlet, de se víz, se mérhető élelem, se fűtés nincs benne, ezért a szint nem számolható.": "**{hely}** ({keret}): сюда назначены запасы, но в них нет ни воды, ни измеримой еды, ни отопления, поэтому уровень не рассчитать.",
 "**{hely}** ({keret}): **{szint}** készenléti szint, {pct}%.": "**{hely}** ({keret}): уровень готовности **{szint}**, {pct}%.",
 "élelem": "еда",
 "fűtés": "отопление",
 "jó": "хороший",
 "gyenge": "слабый",
 "teljes": "полный",
 "Az élelmiszereknél nincs megadva az energia (kcal), ezért az élelem nem mérhető.": "Для продуктов не указана энергия (ккал), поэтому еду не измерить.",
 "A teljes (100%) készlethez hiányzik: {lista}.": "До полного (100%) запаса не хватает: {lista}.",
 "A következő, {szint} szinthez (minden legalább {min}%) hiányzik: {lista}.": "До следующего уровня, «{szint}» (всё не меньше {min}%), не хватает: {lista}.",
 "Minden mért összetevő 100%.": "Каждая измеренная составляющая — 100%.",
 "A Háztartásban még nincs helyszín, ezért a készenléti szint nem számolható. Vedd fel az otthonodat a Háztartás › Helyszínek alatt, és add meg, kik érkeznek oda és hány napra számolsz.": "В домохозяйстве ещё нет места, поэтому уровень готовности не рассчитать. Добавь свой дом в «Домохозяйство › Места» и укажи, кто туда прибудет и на сколько дней рассчитываешь.",
 "A készlet üres: még egyetlen tételt sem vettél fel.": "Запасы пусты: ты ещё не добавил ни одного предмета.",
 "A készleted üres: még egyetlen tételt sem vettél fel.": "Твои запасы пусты: ты ещё не добавил ни одного предмета.",
 "A Mi hiányzik? listából ({db} tétel, az első 6):": "Из списка «Чего не хватает?» ({db} пунктов, первые 6):",
 "A Mi hiányzik? listából ({db} tétel):": "Из списка «Чего не хватает?» ({db} пунктов):",
 "tag": "член",
 "{n} éves": "{n} лет",
 "{db} db": "{db} шт.",
 "lejár:": "срок:",
 "A Háztartásban még nincs helyszín. A Háztartás › Helyszínek alatt veheted fel.": "В домохозяйстве ещё нет места. Его можно добавить в «Домохозяйство › Места».",
 "Helyszíneid ({db}):": "Твои места ({db}):",
 "{n} fő": "{n} чел.",
 "{n} állat": "{n} животных",
 "{n} nap": "{n} дн.",
 "A Háztartásban nincs háziállat felvéve.": "В домохозяйстве не добавлено домашнее животное.",
 "Háziállataid ({db}):": "Твои домашние животные ({db}):",
 "állat": "животное",
 "A Háztartásban még nincs családtag felvéve. A Háztartás › Családtagok alatt veheted fel őket.": "В домохозяйстве ещё не добавлен член семьи. Их можно добавить в «Домохозяйство › Члены семьи».",
 "A háztartásod ({db} fő):": "Твоё домохозяйство ({db} чел.):",
 "A Háztartásban nincs családtag felvéve.": "В домохозяйстве не добавлен член семьи.",
 "Háziállat:": "Домашнее животное:",
 "Nincs mentett pontod a térképen.": "У тебя нет сохранённой точки на карте.",
 "Mentett pontjaid ({db}):": "Твои сохранённые точки ({db}):",
 "A készletben ({db} tétel):": "В запасах ({db} предм.):",
 "… és még {n}": "… и ещё {n}",
 "Ilyen tétel nincs a készletedben. (A készletben {db} tétel van.)": "Такого предмета нет в твоих запасах. (В запасах {db} предм.)",
 "A készletedben {db} tétel van, összesen {ossz} darab. Kategóriánként:": "В твоих запасах {db} предм., всего {ossz} шт. По категориям:",
 "{t} tétel, {db} db": "{t} предм., {db} шт.",
 "{nap} napos túra hátizsákkal": "{nap}-дневный поход с рюкзаком",
 "{nap} napos út autóval": "{nap}-дневная поездка на машине",
 "{nap} napos út": "{nap}-дневная поездка",
 "A Háztartásban még nincs családtag, ezért nem tudom kijelölni, kik mennek. A Mit vigyek? ablakot megnyitom, a napokat beállítottam ({nap}); a résztvevőket a Háztartás › Családtagok alatt vedd fel, utána a lista kiszámolja, mi kell.": "В домохозяйстве ещё нет члена семьи, поэтому я не могу выбрать, кто идёт. Открываю окно «Что взять?» с настроенными днями ({nap}); добавь участников в «Домохозяйство › Члены семьи», и список посчитает, что нужно.",
 "Összeállítottam: {fej}, {fo} fő és {allat} állat ({nevek}). Megnyitom a Mit vigyek? ablakban, kitöltve; a listát ott látod és pipálhatod.": "Составил: {fej}, {fo} чел. и {allat} животных ({nevek}). Открываю заполненным в окне «Что взять?»; там видишь список и можешь отмечать.",
 "Összeállítottam: {fej}, {fo} fő ({nevek}). Megnyitom a Mit vigyek? ablakban, kitöltve; a listát ott látod és pipálhatod.": "Составил: {fej}, {fo} чел. ({nevek}). Открываю заполненным в окне «Что взять?»; там видишь список и можешь отмечать.",
 "A Háztartásban csak {ossz} fő van, őket jelöltem ki. A hiányzó {hiany} főt vedd fel a Háztartásnál, hogy a lista velük is számoljon.": "В домохозяйстве только {ossz} чел., их я и выбрал. Добавь недостающих {hiany} чел. в домохозяйстве, чтобы список их тоже учёл.",
 "A napok számát nem mondtad, {nap} nappal számoltam.": "Ты не сказал число дней, я считал {nap} дн.",
 "Hová tervezzem az útvonalat? Írd meg a cél nevét (település, turistapont, saját pont vagy helyszín), például: „Tervezd meg az útvonalat Dobogókőre.”": "Куда спланировать маршрут? Напиши название места назначения (населённый пункт, туристическая точка, сохранённая точка или место).",
 "Nem találom ezt a helyet: „{cel}”. Sem a saját pontjaid, sem a helyszíneid, sem a letöltött turistapontok, sem a települések között nincs ilyen nevű. Útvonalat fejből nem írok le; ha máshogy hívják, írd meg pontosabban, vagy a térképen egy pont buborékán válaszd az „Útvonal ide”-t.": "Не нахожу этого места: «{cel}». Такого названия нет ни среди твоих точек, ни мест, ни загруженных туристических точек, ни населённых пунктов. Маршрут я никогда не описываю по памяти; если место называется иначе, напиши точнее или на карте выбери «Маршрут сюда» в пузыре точки.",
 "Nem tudom, hol vagy (nincs GPS-helyzet), ezért a távolságot nem tudom megmondani.": "Не знаю, где ты (нет GPS-позиции), поэтому не могу сказать расстояние.",
 "légvonalban {km} km, {egtaj} felé ({fok}°), {honnan} alapján.": "{km} км по прямой, на {egtaj} ({fok}°), по: {honnan}.",
 "észak": "север",
 "északkelet": "северо-восток",
 "kelet": "восток",
 "délkelet": "юго-восток",
 "dél": "юг",
 "délnyugat": "юго-запад",
 "nyugat": "запад",
 "északnyugat": "северо-запад",
 "a mostani helyzeted": "твоё текущее место",
 "az otthonod helye": "место твоего дома",
 "a térkép utolsó nézete": "последний вид карты",
 "egy mentett pontod": "одна из твоих сохранённых точек",
 "saját pont": "своя точка",
 "község": "село",
 "településrész": "часть населённого пункта",
 "turistapont": "туристическая точка",
 "Útvonal ide: {nev} ({al}). Megnyitom a térképen a tervezőt: a mostani helyzetedből, turistautakon számolja (legfeljebb kb. 80 km).": "Маршрут до: {nev} ({al}). Открываю планировщик на карте: он считает от твоего текущего места по туристическим тропам (до ок. 80 км).",
 "Több hely is illik erre: „{cel}”. Melyikre gondolsz? Koppints rá, vagy írd meg pontosabban.": "Несколько мест подходят к «{cel}». Какое ты имеешь в виду? Нажми на него или напиши точнее.",
 "(… és még {n})": "(… и ещё {n})",
 "lejárt {d} ({n} napja)": "истёк {d} ({n} дн. назад)",
 "ma jár le ({d})": "истекает сегодня ({d})",
 "{d} ({n} nap múlva)": "{d} (через {n} дн.)",
 "… és még {n} tétel": "… и ещё {n} предм.",
 "Lejárt ({db} tétel):": "Истёк срок ({db} предм.):",
 "Semmi nem járt le a készletedben.": "В твоих запасах ничего не истекло.",
 "{nap} napon belül lejár ({db} tétel):": "Истекает в течение {nap} дн. ({db} предм.):",
 "{nap} napon belül sem jár le semmi. A következő lejáratok:": "В течение {nap} дн. тоже ничего не истекает. Ближайшие сроки:",
 "{db} tételnél nincs megadva lejárati dátum, ezeket nem tudom figyelni.": "У {db} предм. не указан срок, их я не могу отслеживать.",
 "Nem tudom, hol vagy: nincs GPS-helyzet, mentett pont vagy otthon-koordináta, ezért a napkeltét nem tudom kiszámolni.": "Не знаю, где ты: нет GPS-позиции, сохранённой точки или координат дома, поэтому не могу рассчитать восход.",
 "{nap}: ezen a helyen ma nincs napkelte vagy napnyugta.": "{nap}: в этом месте сегодня нет восхода или заката.",
 "{nap} ({honnan} alapján): napkelte {kelte}, napnyugta {nyugta}; világos még a polgári szürkület végéig, {szurk}. Hold: {hold}, {szaz}% megvilágítva. (Az app számolja, néhány perc pontossággal.)": "{nap} (по: {honnan}): восход {kelte}, закат {nyugta}; светло до конца гражданских сумерек, {szurk}. Луна: {hold}, освещена на {szaz}%. (Считает приложение, с точностью до нескольких минут.)",
 "újhold": "новолуние",
 "növekvő sarló": "растущий серп",
 "első negyed": "первая четверть",
 "növekvő hold": "растущая луна",
 "fogyó hold": "убывающая луна",
 "utolsó negyed": "последняя четверть",
 "fogyó sarló": "убывающий серп",
 "Mit jegyezzek meg?": "Что мне запомнить?",
 "Megjegyeztem: {mit}": "Запомнил: {mit}",
 "(A segéd beállításai › Rólam alatt látod és szerkesztheted.)": "(Можешь посмотреть и изменить это в «Настройки помощника › Обо мне».)",
 "Megnyitás: Mi hiányzik?": "Открыть: Чего не хватает?",
 "Megnyitás: Mit vigyek?": "Открыть: Что взять?",
 "Útvonal a térképen: {nev}": "Маршрут на карте: {nev}",
 "Melyik turistautat nyissam meg?": "Какую туристическую тропу открыть?",
 "{nev}: megnyitom a térképen.": "{nev}: открываю на карте.",
 "Itt vagyok. Miben segíthetek?": "Я здесь. Чем могу помочь?",
 "Erről offline nem tudok megbízhatót mondani: sem a tudástár, sem a Biblia nem ír róla, és kitalálni nem fogok.": "Об этом я не могу сказать ничего надёжного офлайн: ни база знаний, ни Библия об этом не пишут, а выдумывать я не буду.",
 "Alaposabban is kerestem, de a Bibliában ({biblia}) erre nem találtam helyet: „{q}”.": "Я искал и тщательнее, но не нашёл в Библии ({biblia}) места об этом: «{q}».",
 "A Bibliában ({biblia}) erre nem találtam helyet: „{q}”.": "Я не нашёл в Библии ({biblia}) места об этом: «{q}».",
 "Szó szerint nem így áll, de talán erre gondolsz:": "Дословно так не написано, но, возможно, ты имеешь в виду это:",
 "Ez csak a telefonra telepített appban működik.": "Это работает только в приложении, установленном на телефоне.",
 "{nev} gondolkodik…": "{nev} думает…",
 "Nem érhető el:": "Недоступно:",
 "Előbb töltsd le a modellt: a fogaskerék alatt, „Modell letöltése”.": "Сначала загрузи модель: под шестерёнкой, «Загрузить модель».",
 "A modell betöltése (első alkalommal 10-60 másodperc)…": "Загрузка модели (в первый раз 10-60 секунд)…",
 "Nincs elég szabad hely a telefonon a modell első betöltéséhez (a letöltés méretének megfelelő hely kell).": "На телефоне недостаточно свободного места для первой загрузки модели (нужно столько, сколько занимает загрузка).",
 "Hiba:": "Ошибка:",
 "A Bibliában itt van megírva (elöl az eredeti hely, utána, ahol idézik):": "В Библии это написано здесь (сначала первоисточник, затем где его цитируют):",
 "A gép {n} nem létező vagy hibás igehelyet írt, ezeket kivettük.": "Машина написала {n} несуществующих или неверных ссылок на Библию; мы их убрали.",
 "Alaposabban kerestem.": "Я искал тщательнее.",
 "A Bibliában ({biblia}), talán erre gondolsz:": "В Библии ({biblia}), возможно, ты имеешь в виду это:",
 "A Bibliában ({biblia})": "В Библии ({biblia})",
 "Forrás a tudástárból": "Источник из базы знаний",
 "Erről a prémium tudástár is ír: {lista}. (Zárolt cikk szövege nem kerül a modell elé.)": "Об этом пишет и премиум-база знаний: {lista}. (Текст заблокированной статьи не передаётся модели.)",
 "Megnyitás a térképen: {nev}": "Открыть на карте: {nev}",
 "A válaszban említett hely": "Место, упомянутое в ответе",
 "Szia, Noah vagyok, a PrepperPapa segédje.": "Привет, я Ной, помощник PrepperPapa.",
 "Ezt tudom:": "Вот что я умею:",
 "• **Készlet:** megmondom, milyen készenléti szinten áll egy helyszíned, és mi hiányzik a következő szinthez; a számokat az app számolja a készletedből, nem én találom ki. Például: „Milyen készenléti szinten áll az otthon?”, „Mi hiányzik?”": "• **Запасы:** скажу, на каком уровне готовности твоё место и чего не хватает до следующего уровня; числа считает приложение по твоим запасам, я их не выдумываю. Например: «Какой уровень готовности дома?», «Чего не хватает?»",
 "• **Út tervezése:** összerakok egy több napos utat a háztartásod tagjaiból, és kitöltve megnyitom a Mit vigyek? ablakban. Például: „Rakj össze egy 3 napos túrát 4 főre.”": "• **Планирование поездки:** составляю многодневную поездку из членов твоего домохозяйства и открываю её заполненной в окне «Что взять?». Например: «Составь 3-дневный поход на 4 человек.»",
 "• **Útvonal:** a térképen megtervezem az útvonalat a mostani helyzetedből; a célt a saját pontjaid, a helyszíneid, a turistapontok és a települések között keresem, és ha több is illik, megkérdezem, melyikre gondolsz. A turistautakat név szerint is megnyitom a térképen. Például: „Hogyan jutok el a hétvégi házhoz?”, „Mutasd meg a térképen az E4-et.”": "• **Маршрут:** планирую маршрут на карте от твоего текущего места; место назначения ищу среди твоих точек, мест, туристических точек и населённых пунктов, а если подходят несколько, спрашиваю, какое ты имеешь в виду. Туристические тропы тоже открываю на карте по названию. Например: «Как добраться до дачи?», «Покажи E4 на карте.»",
 "• **Tudástár:** a PrepperPapa tudástárából válaszolok, és megmutatom, melyik cikkből (rákoppintva megnyílik). Például: „Hogyan tisztítsak vizet, ha nincs forraló?”": "• **База знаний:** отвечаю из базы знаний PrepperPapa и показываю, из какой статьи (нажми, чтобы открыть). Например: «Как очистить воду, если не могу её вскипятить?»",
 "• **Megjegyzem,** amit magadról mondasz, és a beszélgetés utolsó öt kérdésére emlékszem. Például: „Jegyezd meg, hogy két kutyánk van.”": "• **Запоминаю,** что ты рассказываешь о себе, и помню последние пять вопросов разговора. Например: «Запомни, что у нас две собаки.»",
 "• **Az app többi adata:** ismerem a háztartásodat (családtagok, háziállatok), a helyszíneidet és a mentett pontjaidat. A titkos kódokat, az Irattárcát és a Gíra kulcsait nem látom. Például: „Kik vannak a háztartásomban?”": "• **Остальные данные приложения:** я знаю твоё домохозяйство (члены семьи, домашние животные), твои места и сохранённые точки. Секретных кодов, Кошелька документов и ключей Gíra я не вижу. Например: «Кто есть в моём домохозяйстве?»",
 "• Ha sem a tudástár, sem a Biblia nem ír a kérdésről, általános tudásból válaszolok, és ezt jelzem. Egészségről és veszélyről nem találgatok, útvonalat pedig fejből soha nem írok le: azt csak a térkép tervezője számolja.": "• Если ни база знаний, ни Библия не пишут о вопросе, отвечаю из общих знаний и говорю об этом. О здоровье и опасности не гадаю, а маршрут никогда не описываю по памяти: его считает только планировщик карты.",
 "**Lelki segítség**": "**Духовная поддержка**",
 "Lelkileg is melletted vagyok: ha félsz, elfáradtál vagy gyászolsz, igét teszek a válasz mellé, és a Bibliában is keresek: megmutatom, hol van megírva valami, a helyre koppintva megnyílik. Az igeverset soha nem én írom: mindig a Károli-fordítás pontos szövegéből jön. Például: „Hol van megírva, hogy ne aggódjunk a holnapért?”": "Я рядом и духовно: если тебе страшно, ты устал или в трауре, добавляю к ответу стих, а также ищу в Библии: показываю, где что-то написано, а нажатие на ссылку открывает её. Стих я никогда не пишу сам: он всегда из точного текста перевода Библии в приложении. Например: «Где написано, чтобы мы не заботились о завтрашнем дне?»",
 "Internet nélkül működöm, itt futok a telefonodon. Amit kérdezel, amit válaszolok, és amit magadról megadsz, a telefonon marad: semmit nem küldök el sehova, akkor sem, ha van internet, kivéve, ha egy válaszomat te magad jelented a „Válasz jelentése” gombbal: akkor a kérdés és a válasz szövege a PrepperPapa csapatához kerül. Internet csak a nyelvi modell egyszeri letöltéséhez kell, és a térképhez, ha egy területét még nem töltötted le.": "Я работаю без интернета, здесь, на твоём телефоне. То, что ты спрашиваешь, что я отвечаю и что ты рассказываешь о себе, остаётся на телефоне: я ничего никуда не отправляю, даже когда есть интернет, если только ты сам не пожалуешься на мой ответ кнопкой «Пожаловаться на ответ»: тогда вопрос и ответ отправляются команде PrepperPapa. Интернет нужен только для однократной загрузки языковой модели и для карты, если ты ещё не загрузил её участок.",
 "Tévedhetek; életveszélyben a 112 az első.": "Я могу ошибаться; при угрозе жизни сначала звони по номеру экстренной помощи."
});

// ===== 2026-10-26 v43.382 (task 6b287cfb-noah-nyelvek, Boss 2026-10-25 16:46): Noah settings sheet and measurement line =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "A telefonon: {lista}.": "На телефоне: {lista}.",
 "kísérleti": "экспериментальная",
 "Letöltés: {modell} {szaz}% ({kesz} / {ossz})": "Загрузка: {modell} {szaz}% ({kesz} / {ossz})",
 "A letöltés nem sikerült:": "Загрузка не удалась:",
 "Nincs elég szabad hely a telefonon ehhez a modellhez.": "На телефоне недостаточно свободного места для этой модели.",
 "Nem indult el:": "Не запустилось:",
 "Törlöd, amit a Kérdezz rólad tud?": "Удалить то, что «Спросить» знает о вас?",
 "Törlöd a letöltött modellt? Újra le kell tölteni, ha később használnád.": "Удалить загруженную модель? Чтобы пользоваться ею позже, её придётся загрузить заново.",
 "A Háztartásból: {lista}": "Из хозяйства: {lista}",
 "A Háztartásban még nincs családtag.": "В хозяйстве пока нет ни одного члена семьи.",
 "ő a kérdező": "это спрашивающий",
 "betöltés {n} mp": "загрузка {n} с",
 "első szó {n} mp": "первое слово {n} с",
 "{n} token/mp": "{n} токенов/с",
 "memória csúcs {n} MB": "пик памяти {n} МБ"
});

// Bible settings tidy-up (owner 2026-10-26 17:50): short labels, one display block, one voice list
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Színes": "Цветные",
 "Egyszínű": "Одноцветные",
 "zöld árnyalatok": "оттенки зелёного",
 "Megjelenítés az igék mellett": "Показывать рядом со стихами",
 "Forrás: OpenBible.info (CC BY)": "Источник: OpenBible.info (CC BY)",
 "A telefon hangja": "Голос телефона",
 "Gépi hang · nem foglal helyet": "Синтезированный голос · не занимает места",
 "Gépi felvétel · magyar": "Синтезированная запись · венгерский",
 "Professzionális · magyar": "Профессиональный · венгерский",
 "Professzionális · hamarosan": "Профессиональный · скоро",
 "Készül": "Готовится",
 "Megszakítás": "Отмена",
 "Letöltés": "Скачать",
 "Törlés": "Удалить",
 "Letöltés internet nélkül": "Скачать для работы без интернета",
 "magyar": "венгерский",
 "Könyvenként": "По книгам",
 "Mértékegységek": "Единицы измерения"
});

// Bible alarms on their own screen (owner 2026-10-26 17:54): several alarms, each with its own plan
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Ébresztő törlése": "Удалить будильник",
 "Új ébresztő": "Новый будильник",
 "Válassz tervet": "Выберите план",
 "Törlöd ezt az ébresztőt?": "Удалить этот будильник?",
 "Az ébresztő egy olvasási terv napi olvasmányát olvassa fel. Előbb indíts el egy tervet.": "Будильник зачитывает дневное чтение из плана чтения. Сначала начните план."
});
// v43.389: foreign official fire bans in the fire-ban layer (card 4f0b74b5)
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Területek tilalommal vagy korlátozással": "Территории с запретом или ограничением",
 "Közelíts a területek megjelenítéséhez.": "Приблизьте, чтобы увидеть территории.",
 "Tűzhasználati korlátozás": "Ограничение на использование огня",
 "Tűz miatti területlezárás": "Территория закрыта из-за пожарной опасности",
 "Kockázat miatti törvényi korlátozás": "Законодательное ограничение из-за риска пожара",
 "Terület": "Территория",
 "Érvényes": "Действует на",
 "Hatályos ettől": "Действует с",
 "Hatályos eddig": "Действует до",
 "Ez veszélyszint, nem külön tilalmi rendelet: ezen a szinten a portugál jogszabály (DL 82/2021) korlátozza a tűzhasználatot.": "Это уровень риска, а не отдельное распоряжение о запрете: на этом уровне португальский закон (DL 82/2021) ограничивает использование огня.",
 "A hivatalos forrás nem tartalmazza a helyi (községi) tilalmakat. Indulás előtt ellenőrizd a forrásnál.": "Официальный источник не включает местные (муниципальные) запреты. Перед выходом проверьте в источнике."
});

// ===== 2026-10-27 v43.392 (report + block): internet-room report sheet, block list, collapsed messages =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Illegális tartalom": "Незаконный контент",
 "Zaklatás vagy fenyegetés": "Травля или угрозы",
 "Kéretlen üzenet (spam)": "Нежелательное сообщение (спам)",
 "Bejelentetted ezt az üzenetet. Elrejtve, a csapat ellenőrzi.": "Вы пожаловались на это сообщение. Скрыто, команда проверяет его.",
 "Letiltott felhasználó üzenete.": "Сообщение заблокированного пользователя.",
 "Bejelentett üzenet, ellenőrzés alatt.": "Сообщение с жалобой, на проверке.",
 "Üzenet bejelentése": "Пожаловаться на сообщение",
 "Felhasználó bejelentése": "Пожаловаться на пользователя",
 "A bejelentéssel az üzenet szövege (ahogy a te telefonod megfejtette), a küldője és a szoba neve a PrepperPapa csapatához kerül. Nálad az üzenet azonnal eltűnik, a többieknél ellenőrzésig összecsukva marad.": "Вместе с жалобой команде PrepperPapa передаются текст сообщения (так, как его расшифровал ваш телефон), его отправитель и название комнаты. У вас сообщение сразу исчезает, у остальных остаётся свёрнутым до проверки.",
 "A bejelentéssel a felhasználó neve és a szoba neve a PrepperPapa csapatához kerül, hogy ellenőrizhessük.": "Вместе с жалобой команде PrepperPapa передаются имя пользователя и название комнаты, чтобы мы могли это проверить.",
 "Bejelentett": "Жалоба",
 "Mi a gond?": "В чём проблема?",
 "A felhasználót le is tiltom": "Также заблокировать этого пользователя",
 "Bejelentés": "Пожаловаться",
 "Túl sok bejelentést küldtél rövid idő alatt. Próbáld újra később.": "Вы отправили слишком много жалоб за короткое время. Попробуйте позже.",
 "Most nincs internetkapcsolat. A bejelentés nem ment el, próbáld újra.": "Сейчас нет подключения к интернету. Жалоба не отправлена, попробуйте ещё раз.",
 "A bejelentést most nem sikerült elküldeni. Próbáld újra később.": "Сейчас не удалось отправить жалобу. Попробуйте позже.",
 "Köszönjük, a bejelentést megkaptuk. A csapat hamarosan ellenőrzi.": "Спасибо, мы получили жалобу. Команда скоро её проверит.",
 "Letiltod ezt a felhasználót?": "Заблокировать этого пользователя?",
 "Az üzeneteit nálad elrejtjük, és privát üzenetet nem küldhet neked. A Beállításokban bármikor feloldhatod.": "Его сообщения будут у вас скрыты, и он не сможет отправлять вам личные сообщения. Разблокировать можно в любой момент в Настройках.",
 "Most nem sikerült, próbáld újra később.": "Сейчас не получилось, попробуйте позже.",
 "Letiltva.": "Заблокирован.",
 "A letiltás feloldva.": "Разблокирован.",
 "Nincs letiltott felhasználó.": "Нет заблокированных пользователей.",
 "Letiltás feloldása": "Разблокировать",
 "A küldő letiltása": "Заблокировать отправителя",
 "Letiltás": "Заблокировать",
 "A privát üzenet nem ment el: ez a felhasználó nem fogad tőled privát üzenetet.": "Личное сообщение не отправлено: этот пользователь не принимает от вас личные сообщения.",
 "Letiltott felhasználók": "Заблокированные пользователи",
 "Az internetes szobákban letiltott felhasználók. Az üzeneteiket nálad elrejtjük, és privát üzenetet nem küldhetnek neked.": "Пользователи, заблокированные вами в интернет-комнатах. Их сообщения у вас скрыты, и они не могут отправлять вам личные сообщения."
});
// v43.393: map search -- coordinate result
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Mentés pontként": "Сохранить как точку",
 "ideiglenes jelölő a térképen": "временная метка на карте"
});

// 2026-10-27: map point categories (marker picker, point list)
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Szállás": "Ночлег",
 "Egészség": "Здоровье",
 "Táborhely": "Стоянка",
 "Alap": "Обычный",
 "jelölő": "значок"
});

// ===== GIRA: GYORS UT ERINTESSEL (owner 2026-10-27, TG 30121-30128): NFC / Bluetooth next to the QR =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Az NFC ki van kapcsolva, ezért most csak a QR-kód működik.":
    "NFC выключен, поэтому сейчас работает только QR-код.",
  "NFC bekapcsolása":
    "Включить NFC",
  "A Bluetooth ki van kapcsolva, ezért most csak a QR-kód működik.":
    "Bluetooth выключен, поэтому сейчас работает только QR-код.",
  "Bluetooth bekapcsolása":
    "Включить Bluetooth",
  "Gyorsabb: a másik telefonon nyomják meg a Beolvasás gombot, és tartsd össze a két telefont.":
    "Быстрее: на другом телефоне нажмите «Сканировать» и приложите телефоны друг к другу.",
  "Tartsd össze a két telefont.":
    "Приложите телефоны друг к другу.",
  "A két telefon túl hamar vált el. Tartsd össze őket újra.":
    "Телефоны разъединили слишком рано. Приложите их снова.",
  "A nyugta nem ért át: a másik telefon a QR-kódjáról olvassa be.":
    "Квитанция не дошла: другой телефон может отсканировать её QR-код.",
  "Az átvitel nem sikerült. Próbáld újra, vagy olvasd be a QR-kódot.":
    "Передача не удалась. Попробуйте ещё раз или отсканируйте QR-код.",
  "Átadva. Tartsd még egy pillanatig össze, jön a nyugta.":
    "Передано. Подержите их вместе ещё мгновение, квитанция идёт.",
  "Átadva a másik telefonnak.":
    "Передано на другой телефон.",
  "Nem érkezett semmi. Nyomd meg újra a Beolvasás gombot.":
    "Ничего не пришло. Снова нажмите «Сканировать».",
  "Tartsd a fizetés QR-kódját a keretbe, vagy tartsd össze a két telefont.":
    "Наведите рамку на QR-код платежа или приложите телефоны друг к другу.",
  "Ha elkészült a fizetés, tartsd újra össze a két telefont.":
    "Когда платёж будет готов, снова приложите телефоны друг к другу."
});

// 2026-10-27: barometer -- no storm alarm in a vehicle (activity recognition), card 4f0b74b5
Object.assign(window.PP_FORD_SZOTAR.ru, {
 "Autóban ne riasszon": "Без тревоги в транспорте",
 "A telefon mozgásfelismerése jelzi, ha járműben ülsz, és addig nem jön viharriasztás: vezetés közben a légnyomás az emelkedőktől és a szellőzéstől is változik. Ehhez a „Fizikai tevékenység” engedély kell. Helyadatot nem használ, és semmit nem küld el.": "Распознавание движения в телефоне определяет, что вы едете в транспорте, и до этого штормовая тревога не приходит: во время езды давление меняется и на подъёмах, и от вентиляции. Для этого нужно разрешение «Физическая активность». Данные о местоположении не используются, ничего никуда не отправляется.",
 "Bekapcsolva — most járműben vagy, a riasztás szünetel": "Включено — сейчас вы в транспорте, тревога приостановлена",
 "Bekapcsolva — járműben szünetel a riasztás": "Включено — в транспорте тревога приостанавливается",
 "Bekapcsolva. Kikapcsolni a telefon beállításaiban lehet: Alkalmazások > PrepperPapa > Engedélyek > Fizikai tevékenység.": "Включено. Отключить можно в настройках телефона: Приложения > PrepperPapa > Разрешения > Физическая активность.",
 "Kész: járműben nem jön viharriasztás.": "Готово: в транспорте штормовой тревоги не будет.",
 "A telefon már nem kérdez rá. A beállításokban kapcsold be: Engedélyek > Fizikai tevékenység.": "Телефон больше не спрашивает. Включите в настройках: Разрешения > Физическая активность.",
 "Nem adtál engedélyt. A riasztást ilyenkor a GPS-sebesség alapján szüneteltetem, ha van helyadat.": "Вы не дали разрешения. Тогда тревога приостанавливается по скорости GPS, если есть данные о местоположении.",
 "Járműben vagy (a telefon mozgásfelismerése szerint): a riasztás szünetel, mert ilyenkor a nyomás az emelkedőtől és a szellőzéstől is változik.": "Вы в транспорте (по распознаванию движения телефона): тревога приостановлена, потому что давление тогда меняется и на подъёмах, и от вентиляции.",
 "Az elmúlt órákban járműben is mért a telefon: a riasztást csak a kiszállás utáni mérésekből számolom.": "В последние часы телефон измерял и в транспорте: тревогу я считаю только по измерениям после выхода из транспорта."
});

// ===== GIRA: FIZETES ERINTESSEL (owner 2026-10-29): guided touch payment, re-delivery of a pending payment =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Fogadás érintéssel":
    "Получить касанием",
  "Fizetés érintéssel":
    "Оплатить касанием",
  "Újra átadás":
    "Передать снова",
  "Az összeg nulla vagy hiányzik.":
    "Сумма равна нулю или не указана.",
  "Ez a fizetés már jóváírva volt nálad, másodszor nem írtam jóvá. A nyugtát újra kiadtam.":
    "Этот платёж уже был зачислен; повторно он не зачислен. Квитанция выдана заново.",
  "A másik telefon érintéses fogadásra vár. Írd be az összeget, nyomd meg a Fizetés érintéssel gombot, és tartsátok össze a két telefont.":
    "Другой телефон ждёт получения касанием. Введите сумму, нажмите «Оплатить касанием» и приложите телефоны друг к другу.",
  "A fizetés nem ért át: a két telefon túl hamar vált el. Tartsátok újra össze (a másik telefonon maradjon nyitva a Fogadás).":
    "Платёж не прошёл: телефоны разъединили слишком рано. Приложите их снова (на другом телефоне должно оставаться открытым «Получить»).",
  "Érintéssel nem vette át senki. A másik telefonon előbb nyomják meg a Beolvasás gombot, vagy olvassák be a QR-kódot.":
    "Никто не принял касанием. На другом телефоне сначала нажмите «Сканировать» или отсканируйте QR-код.",
  "Érintésre vár. A másik telefonon legyen bekapcsolva a Fogadás érintéssel, és tartsátok össze a két telefont.":
    "Ждёт касания. На другом телефоне должно быть включено «Получить касанием»; приложите телефоны друг к другу.",
  "Fizetés aláírva és átadva":
    "Платёж подписан и передан",
  "Fizetés aláírása és átadása":
    "Подпись и передача платежа",
  "Nyugta megérkezett. Kész.":
    "Квитанция получена. Готово.",
  "Nyugta visszaérkezése":
    "Возврат квитанции",
  "Érintésre vár. A fizető telefonon a Fizetés érintéssel gombot nyomják meg, és tartsátok össze a két telefont.":
    "Ждёт касания. На телефоне плательщика нажмите «Оплатить касанием» и приложите телефоны друг к другу.",
  "Azonosítód átadva, jön a fizetés…":
    "Твой идентификатор передан, платёж идёт…",
  "Megérkezett és jóváírva":
    "Получено и зачислено",
  "Fizetés megérkezése":
    "Поступление платежа",
  "Nyugta visszaküldve. Kész.":
    "Квитанция отправлена обратно. Готово.",
  "Nyugta visszaküldése":
    "Отправка квитанции обратно",
  "Még nem jött semmi. A másik telefonon előbb nyomják meg a Fogadás érintéssel gombot, aztán tartsátok össze a két telefont.":
    "Пока ничего. На другом телефоне сначала нажмите «Получить касанием», затем приложите телефоны друг к другу.",
  "Még nem jött semmi. A fizető telefonon előbb írják be az összeget, és nyomják meg a Fizetés érintéssel gombot, aztán tartsátok össze a két telefont.":
    "Пока ничего. На телефоне плательщика сначала введите сумму и нажмите «Оплатить касанием», затем приложите телефоны друг к другу.",
  "A fizetés átment, a nyugta még nem jött meg. Tartsátok újra össze a két telefont, vagy a Beolvasás gombbal olvasd be a nyugta QR-kódját a másik telefonról.":
    "Платёж прошёл, квитанция ещё не пришла. Приложите телефоны снова или отсканируйте кнопкой «Сканировать» QR-код квитанции на другом телефоне.",
  "A fizetés átment, a nyugta még nem jött meg. Tartsátok újra össze a két telefont.":
    "Платёж прошёл, квитанция ещё не пришла. Приложите телефоны снова.",
  "A nyugta még nem jött vissza. Tartsátok újra össze a két telefont, vagy a másik telefon olvassa be a QR-kódot.":
    "Квитанция ещё не вернулась. Приложите телефоны снова или пусть другой телефон отсканирует QR-код.",
  "A fizetés még nem jött meg. Tartsátok újra össze a két telefont.":
    "Платёж ещё не пришёл. Приложите телефоны снова.",
  "A nyugta még nem ment vissza. Tartsátok újra össze a két telefont, vagy a fizető olvassa be a nyugta QR-kódját.":
    "Квитанция ещё не ушла обратно. Приложите телефоны снова или пусть плательщик отсканирует QR-код квитанции.",
  "Lejárt az idő. Nyomd meg újra a Fogadás érintéssel gombot.":
    "Время вышло. Нажмите «Получить касанием» ещё раз.",
  "Lejárt az idő. A fizetés nálad „átadásra vár”: a Mozgások között az Újra átadás gombbal még átadhatod.":
    "Время вышло. Платёж «ожидает передачи»: в разделе «Движения» его ещё можно передать кнопкой «Передать снова».",
  "Lejárt az idő, nem jött létre kapcsolat. A másik telefonon előbb nyomják meg a Fogadás érintéssel gombot, aztán nyomd meg újra a Fizetés érintéssel gombot.":
    "Время вышло, соединения не было. На другом телефоне сначала нажмите «Получить касанием», затем снова нажмите «Оплатить касанием».",
  "Ha az érintés nem megy: a fizető olvassa be ezt a QR-kódot.":
    "Если касание не работает: плательщик сканирует этот QR-код.",
  "Az érintéses átadás most nem indult el. Olvassák be a QR-kódot.":
    "Передача касанием не запустилась. Отсканируйте QR-код.",
  "Az érintéses olvasás nem indult el. Próbáld újra, vagy használd a QR-kódot.":
    "Чтение касанием не запустилось. Попробуйте снова или используйте QR-код.",
  "Ez nem egy másik telefon azonosítója.":
    "Это не идентификатор другого телефона.",
  "Ez a fizetés nem ennek a telefonnak szól, hanem neki:":
    "Этот платёж не для этого телефона, а для:",
  "A fizetés nem készült el.":
    "Платёж не создан.",
  "A fizetés nem volt érvényes.":
    "Платёж был недействителен.",
  "Ugyanaz az aláírt fizetés, nem új: a másik telefonon nyomják meg a Fogadás érintéssel gombot, és tartsátok össze a két telefont, vagy olvassa be ezt a QR-kódot.":
    "Тот же подписанный платёж, не новый: на другом телефоне нажмите «Получить касанием» и приложите телефоны или отсканируйте этот QR-код.",
  "Ugyanaz az aláírt fizetés, nem új: a másik telefon olvassa be ezt a QR-kódot.":
    "Тот же подписанный платёж, не новый: пусть другой телефон отсканирует этот QR-код."
});

// ===== GIRA: switch-on offer when the wallet opens (owner 2026-10-29 09:18) =====
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Az érintéses fizetéshez kapcsold be az NFC-t.":
    "Включите NFC, чтобы платить касанием.",
  "Az érintéses fizetéshez kapcsold be a Bluetooth-t.":
    "Включите Bluetooth, чтобы платить касанием."
});
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Érintés nélkül: címzett megadása (QR-kód, szobatárs, azonosító)":
    "Без касания: укажите получателя (QR-код, участник комнаты, идентификатор)"
});
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Kész: a fizetés megérkezett, a nyugtát a másik telefon átvette.":
    "Готово: платёж получен, другой телефон принял квитанцию."
});

// ===== 2026-10-29 pack list, compass bearing, SOS card stub, Bible download (Agnes: Hungarian in the EN UI) =====
// Keys with {slots} are templates (index.html ppForditKitolt): the slots are filled after the lookup.
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "A kijelölt személyek együtt kb. {keret} kg-ot bírnak, a lista {lista} kg. A víz a legnehezebb: fontold meg a vízszűrőt kanna helyett, vagy vidd rövidebb szakaszra.": "Выбранные люди вместе унесут около {keret} кг, список весит {lista} кг. Вода тяжелее всего: подумай о фильтре для воды вместо канистры или о более коротком отрезке.",
  "A készletedben most {kcal} van megadva, ami ennek az útnak a {sz}.": "В твоих запасах сейчас указано {kcal}, это {sz} того, что нужно на эту дорогу.",
  "A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan.": "Твоя карточка экстренной помощи (группа крови, аллергия, лекарства, контакт) быстро появляется здесь.",
  "A víz csak az indulásra elég: a teljes igény {teljes} liter lenne, ebből {viz} liter megy veletek. A többit útközben kell megszerezni és tisztítani.": "Воды хватит только на выход: полная потребность составила бы {teljes} л, из них {viz} л идут с вами. Остальное нужно добыть и очистить в пути.",
  "A {haz} a saját adatlapodon pipáld be: {jelolo}.": "В разделе {haz}, в своей анкете, отметь: {jelolo}.",
  "A {hianyzik} jelölésűek a beszerzési listád. Most {n} ilyen van. A vizet és az élelmet a készlet KATEGÓRIÁJÁBÓL ismeri fel, a többit a nevéből.": "Отмеченное как {hianyzik} — твой список покупок. Сейчас: {n}. Воду и еду список узнаёт по КАТЕГОРИИ в запасах, остальное — по названию.",
  "Allergia-gyógyszer ({all})": "Лекарство от аллергии ({all})",
  "Az én adataim jelenjenek meg a vészkártyán": "Показывать мои данные на карточке экстренной помощи",
  "Belefér: a kijelöltek kb. {keret} kg-ot bírnak.": "Влезает: выбранные унесут около {keret} кг.",
  "Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez {tura} való, és a listán kiírom, mennyi hiányzik a teljes fejadaghoz.": "Считает только то, что ты унесёшь: 1,5 литра на человека. Это {tura}, а в списке видно, сколько не хватает до полной нормы.",
  "Csomaglista": "Список вещей",
  "EZ TÖBB, MINT AMIT ELBÍR": "БОЛЬШЕ, ЧЕМ МОЖЕТ УНЕСТИ",
  "Ez nehezebb, mint amit el tudtok vinni.": "Это тяжелее, чем вы можете унести.",
  "Ez {olt} kategóriájú ruházatot kíván. A készletedben nincs ilyen tétel — a készletnél ez egy kategória.": "Для этого нужна одежда категории {olt}. В твоих запасах такой позиции нет — в запасах это категория.",
  "Ez {olt} kategóriájú ruházatot kíván. A készletedben {n} ilyen tétel van.": "Для этого нужна одежда категории {olt}. Таких позиций в твоих запасах: {n}.",
  "Felvett irány: {fok} fok ({betu}). Visszafelé: {vfok} fok ({vbetu}). A zöld háromszög a felvett irányt mutatja.": "Записанное направление: {fok}° ({betu}). Обратно: {vfok}° ({vbetu}). Зелёный треугольник показывает записанное направление.",
  "Gyógyszer: {gy}": "Лекарство: {gy}",
  "Hiányzik még kb. {kcal} kcal.": "Не хватает ещё около {kcal} ккал.",
  "Háztartásban": "Домохозяйство",
  "Nem sikerült: {ok}. Ehhez az egy lépéshez internet kell.": "Не удалось: {ok}. Для этого одного шага нужен интернет.",
  "Nincs iránytű-adat, ezért nincs mit felvenni.": "Нет данных компаса, поэтому записывать нечего.",
  "Nála: {ossz} kg (ebből {sajat} kg a sajátja)": "Несёт: {ossz} кг (из них {sajat} кг своего)",
  "Nála: {ossz} kg (ebből {sajat} kg a sajátja, {kozos} kg a közösből)": "Несёт: {ossz} кг (из них {sajat} кг своего и {kozos} кг из общего снаряжения)",
  "Sapka": "Шапка",
  "Termosz meleg itallal": "Термос с горячим напитком",
  "Vércsoport-kártya: {ver}": "Карточка группы крови: {ver}",
  "Víz ({kg} kg testtömegre)": "Вода (на {kg} кг массы тела)",
  "Zokni": "Носки",
  "amit viszünk; a teljes igény {l} l": "что несём; полная потребность {l} л",
  "belefér": "влезает",
  "fejenként egy ({fo})": "по одному ({fo})",
  "indulásra; a teljes igény {l} l lenne": "на выход; полная потребность была бы {l} л",
  "megvan": "есть",
  "személyre szóló ({tipus})": "личное ({tipus})",
  "teherbírása {kg} kg": "унесёт {kg} кг",
  "túrához": "для похода",
  "{kcal} kcal/nap × {nap}": "{kcal} ккал/день × {nap}",
  "{kesz} / {ossz} bepakolva": "{kesz} / {ossz} упаковано",
  "{kg} kg, elosztva {fo} között: fejenként kb. {fej} kg": "{kg} кг, на {fo}: примерно по {fej} кг",
  "{l} liter víz": "{l} л воды",
  "{napra} valójában {teljes} liter kellene, ennyit viszont nem lehet elvinni. Hiányzik {hiany} liter, amit útközben kell megszerezni: vízszűrő, víztisztító tabletta, ismert vízvételi pont. Ezt a listán is nézd meg.": "На самом деле нужно {teljes} л {napra}, но столько не унести. Не хватает {hiany} л, их нужно добыть в пути: фильтр для воды, таблетки для очистки, известный источник воды. Проверь это и в списке.",
  "{nev}: be van írva a betegség ({b}), de nincs megadva gyógyszer. A Háztartás adatlapján pótolható.": "{nev}: указана болезнь ({b}), но не указано лекарство. Это можно дополнить в анкете в Домохозяйстве.",
  "{nev}: nincs megadva a testtömeg, 15 kg-mal számoltam. Az adatlapján javítható.": "{nev}: масса тела не указана, я посчитал с 15 кг. Это можно исправить в анкете.",
  "{n} tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz a kép.": "Позиции без энергетической ценности (ккал/100 г): {n}. Они не учитываются. Если списать её с упаковки, картина будет точнее.",
  "{n}%-a": "{n}%",
  "{viz} l/nap × {nap}": "{viz} л/день × {nap}",
  "Összesen {viz} és {kcal} élelem. Becsült tömeg: {kg}.": "Всего {viz} и {kcal} еды. Примерный вес: {kg}.",
  "ÉÉK": "ССВ",
  "KÉK": "ВСВ",
  "KDK": "ВЮВ",
  "DDK": "ЮЮВ",
  "DDNy": "ЮЮЗ",
  "NyDNy": "ЗЮЗ",
  "NyÉNy": "ЗСЗ",
  "ÉÉNy": "ССЗ"
});
// count patterns used by the pack list (`3 pár`, `5 napra`, `4 fő/állat` ...), same plural rules as above
(function () {
  const alak=(n,e,k,s)=>{const u=n%10,sz=n%100;if(u===1&&sz!==11)return e;if(u>=2&&u<=4&&!(sz>=12&&sz<=14))return k;return s;};
  window.PP_FORD_MINTAK.ru.push(
    { minta: /^(\d+) fő\/állat$/, csere: (_, n) => n + ' ' + alak(+n, 'человек/животное', 'человека/животных', 'человек/животных') },
    { minta: /^(\d+) napra$/, csere: (_, n) => 'на ' + n + ' ' + alak(+n, 'день', 'дня', 'дней') },
    { minta: /^(\d+) csomag$/, csere: (_, n) => n + ' ' + alak(+n, 'упаковка', 'упаковки', 'упаковок') },
    { minta: /^(\d+) szett$/, csere: (_, n) => n + ' ' + alak(+n, 'комплект', 'комплекта', 'комплектов') },
    { minta: /^(\d+) pár$/, csere: (_, n) => n + ' ' + alak(+n, 'пара', 'пары', 'пар') }
  );
})();
// map locate button title (2026-10-29, written by mapKovetJel)
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Követés bekapcsolva — koppints a középre igazításhoz": "Слежение включено — нажми, чтобы отцентрировать",
  "Hol vagyok (követés visszakapcsolása)": "Где я (снова включить слежение)",
  "Hol vagyok": "Где я"
});
// Bible prayer timer, weekly reading plans, map route GPX button (2026-10-29, untranslated-text sweep)
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Ismétlés": "Повтор",
  "mp": "с",
  "GPX mentése": "Сохранить GPX",
  "Teljes Biblia egy év alatt, heti bontásban": "Вся Библия за год, по неделям",
  "Kronologikus Biblia egy év alatt, heti bontásban": "Хронологическая Библия за год, по неделям",
  "A könyvek sorrendjében, hetente egy adag.": "В порядке книг, одна порция в неделю.",
  "Az események időrendjében, hetente egy adag.": "В порядке событий, одна порция в неделю."
});
// Bible: original words on tap (Biblia premium, card cf02b3ee, 2026-10-29)
Object.assign(window.PP_FORD_SZOTAR.ru, {
  "Eredeti szó": "Исходное слово",
  "Héber": "Иврит",
  "Arámi": "Арамейский",
  "Görög": "Греческий",
  "Átírás": "Транслитерация",
  "Strong-szám": "Номер Стронга",
  "Jelentés itt": "Значение здесь",
  "Szótári alak": "Словарная форма",
  "Eredet": "Происхождение",
  "Meghatározás": "Определение",
  "A KJV így fordítja": "В KJV переведено как",
  "Szótár: Strong (1894)": "Словарь: Стронг (1894)",
  "Nincs megbízható egyezés.": "Надёжного соответствия нет.",
  "Ennél a szónál a gépi szó-összekötés nem elég biztos, ezért nem mutatunk eredeti szót.": "Для этого слова автоматическое сопоставление слов недостаточно надёжно, поэтому исходное слово не показывается.",
  "Biblia prémium": "Библия Премиум",
  "A Biblia prémiumban egy szóra koppintva megjelenik az eredeti héber, arámi vagy görög szó, átírással, Strong-számmal és szótári jelentéssel. Biblia prémium kóddal feloldható.": "В Библии Премиум касание слова показывает исходное еврейское, арамейское или греческое слово с транслитерацией, номером Стронга и словарным значением. Открывается кодом Библия Премиум.",
  "Az eredeti szavak betöltése…": "Загрузка исходных слов…",
  "Az eredeti szavak most nem tölthetők be. Az első megnyitáshoz internetkapcsolat kell.": "Сейчас нельзя загрузить исходные слова. Для первого открытия нужно подключение к интернету.",
  "Forrás: STEP Bible (www.STEPBible.org), CC BY 4.0": "Источник: STEP Bible (www.STEPBible.org), CC BY 4.0",
  "Szótár: Strong-féle héber és görög szótár (1894), közkincs. A szótár szövege angol nyelvű.": "Словарь: еврейский и греческий словарь Стронга (1894), общественное достояние. Текст словаря на английском.",
  "Válaszd ki, melyiket folytatod, vagy indíts újat.": "Выбери, какой продолжить, или начни новый.",
  "Új terv": "Новый план",
  "Terveim": "Мои планы",
  "Vissza a terveimhez": "Назад к моим планам",
  // Biblia premium: napi ido az Igevel (2026-10-30, kartya 38877050)
  "Napi idő az Igével": "Ежедневное время со Словом",
  "Ma eddig {n} perc az Igével.": "Сегодня пока: {n} мин со Словом.",
  "A mai cél teljesült.": "Цель на сегодня достигнута.",
  "Még {m} perc a mai célig.": "До цели на сегодня осталось {m} мин.",
  "Ma {n} / {c} perc az Igével": "Сегодня {n} / {c} мин со Словом",
  "Gratulálok!": "Поздравляем!",
  "Ma is {n} percet töltöttél Isten beszédével.": "И сегодня ты провёл {n} мин со Словом Божьим.",
  "Köszönöm": "Спасибо",
  "Méri, mennyi időt töltesz naponta a Bibliában, és gratulál, amikor eléred a napi célodat.": "Измеряет, сколько времени ты каждый день проводишь с Библией, и поздравляет, когда ты достигаешь дневной цели.",
  "{n} perc": "{n} мин",
  "Nincs cél": "Без цели",
  "Szótár: Strong-féle héber és görög szótár (1894), közkincs.": "Словарь: еврейский и греческий словарь Стронга (1894), общественное достояние.",
  "Szótár: Strong-féle héber és görög szótár (1894), közkincs; a szótár szövege gépi fordítás.": "Словарь: еврейский и греческий словарь Стронга (1894), общественное достояние; текст словаря — машинный перевод.",
  "Ehhez a fordításhoz még nincs eredeti szó adat.": "Для этого перевода пока нет данных об исходных словах."
});
