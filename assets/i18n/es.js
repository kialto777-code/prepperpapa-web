// PrepperPapa -- SPANYOL SZOVEGTAR (teljes felulet-forditas)
//
// Fonok kerese 2026-08-24 12:49: "keszulni fog lengyelul, romanul es spanyolul".
//
// HAROM SZoTAR VAN: ez + `i18n/vagyon-es.js` (KET peldanyban) + `PP_SZOTAR.es` az index.html-ben.
//
// AZ oT BIBLIAI IGEVERS A KIADOTT SZoVEGBoL VAN: Reina Valera (1909) -- `valera.json`,
// getbible v2 --, szo szerint masolva a letoltott fajlbol.
// A ZSOLTAR HIVATKOZASA "Salmos 46,1-2", NEM "46,2-3": a magyar Karoli a feliratot is
// versnek szamolja, a Reina Valera nem. Ez NEM elgepeles.


window.PP_FORD_SZOTAR = window.PP_FORD_SZOTAR || {};
window.PP_FORD_SZOTAR.es = {
  // ===== 2026-10-28 SOS sharing per room (TG 30631) =====
  "Vészhelyzet ebben a szobában": "Emergencia en esta sala",
  "Szobánként döntöd el, mit kapnak meg az SOS-odból. Ha az SOS-t kikapcsolod, ebbe a szobába semmi nem megy; a hely és a vércsoport csak az SOS-üzenetben jelenik meg.": "Decides por sala qué recibe de tu SOS. Si desactivas el SOS, a esta sala no llega nada; la ubicación y el grupo sanguíneo solo aparecen en el mensaje SOS.",
  "SOS-jelzésem ide is menjen": "Enviar también aquí mi SOS",
  "Lássák a GPS-helyzetemet az SOS-ban": "Mostrar mi posición GPS en el SOS",
  "Lássák a vércsoportomat az SOS-ban": "Mostrar mi grupo sanguíneo en el SOS",
  "Később a szoba beállításaiban is átállíthatod.": "Puedes cambiarlo más tarde en los ajustes de la sala.",
  "Az SOS egyik szobádba sem ment el: a szobák beállításában mindenhol ki van kapcsolva. A vészsíp szól.": "El SOS no llegó a ninguna de tus salas: está desactivado en los ajustes de todas. Suena el silbato de emergencia.",
  "Szobánként, a szoba beállításaiban szűkítheted: melyik szoba kapja meg az SOS-t, és látszik-e benne a helyed és a vércsoportod.": "En los ajustes de cada sala puedes limitarlo: qué sala recibe el SOS y si se ven tu ubicación y tu grupo sanguíneo.",
  "gombot, SOS üzenetet küld a helyzeteddel a szobáidba (ahová a szoba beállításában engedted), és megszólal a vészsíp.": ", envía un mensaje SOS con tu ubicación a tus salas (a las que lo permiten en sus ajustes) y suena el silbato de emergencia.",
  "Esés után automatikus SOS: alapból ki van kapcsolva. Ha bekapcsolod, és a telefon nagy ütés után egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a Jól vagyok gombot, SOS üzenetet küld a helyzeteddel a szobáidba (ahová a szoba beállításában engedted), és megszólal a vészsíp.": "SOS automático tras una caída: viene desactivado. Si lo activas y el teléfono no se mueve durante un minuto después de un golpe fuerte, hace una cuenta atrás en voz alta. Si no pulsas el botón Estoy bien, envía un mensaje SOS con tu ubicación a tus salas (a las que lo permiten en sus ajustes) y suena el silbato de emergencia.",
  "Vészhelyzet: szobánként eldöntöd, hogy az SOS-od ide is menjen-e, és látszik-e benne a GPS-helyzeted és a vércsoportod. Alapból mindhárom be van kapcsolva.": "Emergencia: en cada sala decides si tu SOS llega también allí y si muestra tu posición GPS y tu grupo sanguíneo. Las tres opciones vienen activadas.",
  // ===== 2026-10-28 route planning: sunset / dark timing (TG 30629) =====
  "Most": "Ahora",
  "Napnyugta előtt érkezel, a tartalék:": "Llegas antes del atardecer, margen:",
  "Napnyugta után érkezel, ennyivel:": "Llegas después del atardecer, con un retraso de:",
  "Sötétedés előtt még odaérsz.": "Aún llegas antes de que oscurezca.",
  "Sötétedés után érkezel.": "Llegas cuando ya ha oscurecido.",
  "Napnyugta után indulsz.": "Sales después del atardecer.",
  "Sötétedés után indulsz.": "Sales cuando ya ha oscurecido.",
  "Napnyugtakor itt jársz, a kezdéstől:": "Al atardecer estarás aquí, desde el inicio:",
  "Sötétedéskor itt jársz, a kezdéstől:": "Al oscurecer estarás aquí, desde el inicio:",
  "Az út utolsó szakasza sötétben van:": "El último tramo de la ruta es de noche:",
  "A tábort a sötétedés pontja előtt válaszd ki.": "Elige el lugar del campamento antes del punto de oscuridad.",
  // ===== 2026-10-28 Barometer + Napkelte, napnyugta: own screens under Eszkozok (TG 30627) =====
  "Barométer": "Barómetro",
  "Légnyomás, trend és viharjelzés": "Presión, tendencia y aviso de tormenta",
  "Napkelte, napnyugta": "Amanecer, atardecer",
  "Nap és hold: mennyi világosod van, holdfázis": "Sol y luna: cuánta luz de día te queda, fase lunar",
  "Nem kaptunk engedélyt az iránytűhöz.": "No hemos recibido permiso para la brújula.",
  "Ez a készülék nem ad iránytű-adatot, vagy nincs rá engedély.": "Este dispositivo no proporciona datos de brújula o no hay permiso.",
  "A nap pályájához tudni kell, hol vagy: az Eszközök, Napkelte, napnyugta lapon nyomd meg a „Mérés a helyzetemre” gombot.": "Para la trayectoria del sol la app necesita saber dónde estás: en Herramientas, Amanecer, atardecer pulsa «Calcular para mi posición».",
  "Tájoló: irány és azimut, a visszaút is.": "Brújula: dirección y azimut, también el camino de vuelta.",
  "Eszközök: a kalkulátorok, a fémdetektor, a tükör, a vad- és rovarriasztó, a barométer és a napkelte-napnyugta egy helyen.": "Herramientas: las calculadoras, el detector de metales, el espejo, el ahuyentador de animales e insectos, el barómetro y el amanecer-atardecer en un solo lugar.",
  // ===== 2026-10-27 titkosított teljes mentés: Token tárca + Gíra (kártya 96306244) =====
  "Ez a fájl nem PrepperPapa mentés.": "Este archivo no es una copia de seguridad de PrepperPapa.",
  "Nincs elég tárhely ezen a készüléken a visszatöltéshez. Semmi nem változott.": "No hay espacio suficiente en este dispositivo para la restauración. No se ha cambiado nada.",
  "A visszatöltés nem sikerült. Semmi nem változott.": "La restauración ha fallado. No se ha cambiado nada.",
  "Ezen a készüléken már vannak saját adataid (készlet, pontok, háztartás). A visszatöltés ezeket a mentésben levőkre cseréli. Előtte a készleted és a háztartásod biztonsági másolatba kerül, amit a „Visszaállítás a biztonsági másolatból” gomb visszahoz. Folytatod?": "Este dispositivo ya tiene datos propios (inventario, puntos, hogar). La restauración los sustituye por los de la copia. Antes, tu inventario y tu hogar pasan a la copia de seguridad interna, que el botón «Restaurar desde la copia de seguridad» recupera. ¿Continuar?",
  "Visszatöltöm": "Restaurar",
  "Hibás mentés-fájl.": "Archivo de copia no válido.",
  "A teljes mentés egy általad választott mentési kulccsal titkosítva készül. Visszatöltéskor a mentési kulcs kell.": "La copia de seguridad completa se cifra con una clave de copia que eliges tú. Para restaurarla hace falta la clave de copia.",
  "A teljes mentés egy általad választott mentési kulccsal titkosítva készül, és benne van a Token tárca és a Gíra is (a tárca PIN-je mögött). Visszatöltéskor a mentési kulcs kell, utána a tárca a PIN-nel nyílik. Az irattárca nem kerül bele.": "La copia de seguridad completa se cifra con una clave de copia que eliges tú, y también contiene el monedero de tokens y tu Gíra (tras el PIN del monedero). Para restaurarla hace falta la clave de copia; después el monedero se abre con el PIN. La cartera de documentos no se incluye.",
  "A mentés óta indított vagy kapott fizetéseid ebből a könyvből hiányoznak (a többiek könyvében megvannak), ezért az egyenleg eltérhet.": "Los pagos que hiciste o recibiste desde la copia faltan en este libro (en los libros de los demás siguen estando), por eso el saldo puede diferir.",
  "A mentésben levő Gíra sérült, ezért nem töltöttünk vissza semmit.": "La Gíra de la copia está dañada, por eso no se ha restaurado nada.",
  "A mentési kulcs legyen legalább 8 karakter és 2 szó, vagy legalább 12 karakter.": "La clave de copia debe tener al menos 8 caracteres y 2 palabras, o al menos 12 caracteres.",
  "A mentési kulcs ne a neved legyen.": "La clave de copia no puede ser tu nombre.",
  "A mentési kulcs nem egyezik, a fájlt nem lehetett visszafejteni. Semmit nem írtunk felül.": "La clave de copia no coincide, no se pudo descifrar el archivo. No se ha sobrescrito nada.",
  "A mentési kulcsod: „{kod}”. Írd le magadnak most, és ellenőrizd, hogy pontosan így írtad le. Ne felejtsd el ezt a kulcsot, és a tárca PIN-jét se: visszatöltés után a Token tárca és a Gíra a PIN-nel nyílik.": "Tu clave de copia: «{kod}». Anótala ahora y comprueba que la has escrito exactamente así. No olvides esta clave, ni tampoco el PIN del monedero: tras restaurar, el monedero de tokens y la Gíra se abren con el PIN.",
  "A mostani Gírád maradt; a mentésben levőt nem vettük át.": "Se ha mantenido tu Gíra actual; la de la copia no se ha incorporado.",
  "A titkosított mentés nem készült el, nem töltöttünk le semmit.": "No se pudo crear la copia cifrada, no se ha descargado nada.",
  "A Token tárca és a Gíra visszaállítása nem sikerült.": "No se pudo restaurar el monedero de tokens ni la Gíra.",
  "Add meg ennek a készüléknek a tárca PIN-jét.": "Introduce el PIN del monedero de este dispositivo.",
  "Adj meg egy mentési kulcsot: egy általad kitalált szót vagy rövid mondatot (legalább 8 karakter és 2 szó, vagy legalább 12 karakter). Ne a neved legyen. A kis- és nagybetű nem számít. Írd le magadnak: a mentés csak ezzel tölthető vissza.": "Introduce una clave de copia: una palabra o frase corta inventada por ti (al menos 8 caracteres y 2 palabras, o al menos 12 caracteres). Que no sea tu nombre. Las mayúsculas y minúsculas no importan. Anótala: la copia solo se puede restaurar con ella.",
  "Biztosan lecseréled? A mostani Gíra ({most}) kulcsa ezzel elvész ezen a készüléken; ha nincs róla mentésed, véglegesen.": "¿Seguro que la sustituyes? La clave de la Gíra actual ({most}) se perderá en este dispositivo; si no tienes copia de ella, para siempre.",
  "Ez egy titkosított mentés. Add meg a mentési kulcsot.": "Esta es una copia cifrada. Introduce la clave de copia.",
  "Ezen a készüléken már van egy MÁSIK Gíra ({most}). A mentésben levő: {mentes}. Megtartod a mostanit, vagy lecseréled a mentésben levőre?": "Este dispositivo ya tiene OTRA Gíra ({most}). La de la copia: {mentes}. ¿Mantienes la actual o la sustituyes por la de la copia?",
  "Ezen a készüléken már van tárca. A mentett Token tárca átvételéhez add meg azt a PIN-t, amellyel a mentett tárca nyílt.": "Este dispositivo ya tiene un monedero. Para incorporar el monedero de tokens guardado, introduce el PIN con el que se abría el monedero guardado.",
  "Gíra visszaállítva: {az}, egyenleg {egy} gíra.": "Gíra restaurada: {az}, saldo {egy} gíra.",
  "Igen, lecserélem": "Sí, sustituir",
  "Igen, nélkülük": "Sí, sin ellos",
  "Javítom": "La corrijo",
  "Lecserélem": "Sustituir",
  "Megtartom a mostanit": "Mantener la actual",
  "Mentés megszakítva, nem töltöttünk le semmit.": "Copia cancelada, no se ha descargado nada.",
  "Titkosított mentés": "Copia de seguridad cifrada",
  "Titkosított mentés visszatöltése": "Restaurar copia cifrada",
  "Token tárca visszaállítva: a mentéskor használt PIN-nel nyílik.": "Monedero de tokens restaurado: se abre con el PIN que tenía al hacer la copia.",
  "Token tárca: {n} bejegyzés hozzáadva a tárcádhoz.": "Monedero de tokens: {n} entradas añadidas a tu monedero.",
  "Visszatöltés megszakítva, semmit nem írtunk felül.": "Restauración cancelada, no se ha sobrescrito nada.",
  "Visszatöltöd a többi adatot a Token tárca és a Gíra nélkül?": "¿Restaurar el resto de los datos sin el monedero de tokens ni la Gíra?",
  // ===== 2026-10-26 v43.386 (tester #84): water purification, ice-cold water + altitude bands =====
  "Buzgó forrás {perc} percig.": "Hervor fuerte durante {perc} min.",
  "Buzgó forrás {perc} percig — kétezer méter felett vagy, ott hosszabb kell, mert alacsonyabb a forráspont.": "Hervor fuerte durante {perc} min — estás por encima de dos mil metros, allí hace falta más tiempo porque el punto de ebullición es más bajo.",
  "{liter} liter tiszta vízhez {csepp} csepp {hipo} százalékos hipó, ami körülbelül {ml} milliliter.": "Para {liter} litros de agua clara: {csepp} gotas de lejía al {hipo} por ciento, unos {ml} mililitros.",
  "{liter} liter zavaros vízhez {csepp} csepp {hipo} százalékos hipó, ami körülbelül {ml} milliliter.": "Para {liter} litros de agua turbia: {csepp} gotas de lejía al {hipo} por ciento, unos {ml} mililitros.",
  "Keverd el, várj {perc} percet, és utána is enyhén klóros szagúnak kell lennie.": "Remueve, espera {perc} minutos, y después debe seguir oliendo ligeramente a cloro.",
  "Ha nem érzed a szagot, adj hozzá ugyanennyit, és várj még {perc} percet.": "Si no notas el olor, añade la misma cantidad y espera otros {perc} minutos.",
  "Zavaros, színes vagy jéghideg (pl. olvadt hó, jeges patak)": "Turbia, con color o helada (p. ej. nieve derretida, arroyo helado)",
  "Tengerszint feletti magasság": "Altitud sobre el nivel del mar",
  "2000 m alatt": "Por debajo de 2000 m",
  "2000 m felett": "Por encima de 2000 m",
  // ===== 2026-10-25 v43.381 (card 43a80047, Boss 23:38): premium code from the purchase e-mail link =====
  "Túl sok hibás kódot írtál be. Biztonsági okból egy ideig nem próbálhatod újra.": "Has introducido demasiados códigos incorrectos. Por seguridad no puedes volver a intentarlo durante un tiempo.",
  "Újra próbálhatod ekkor:": "Podrás intentarlo de nuevo a las:",
  "A vásárlási levélben kapott kódod be van írva. Koppints a „Kód beváltása” gombra.": "El código de tu correo de compra ya está escrito. Toca «Canjear código».",
  // ===== 2026-10-25 v43.380 (Thomas 24623): stale offline region =====
  "Új változat a szerveren": "Nueva versión en el servidor",
  // ===== 2026-10-25 v43.380 (card 6b287cfb, Boss 20:13): Solar panel setup tool =====
  "Napelem-beállítás": "Ajuste del panel solar",
  "Merre nézzen és mennyire dőljön a panel, évszakonként": "Hacia dónde orientar el panel y cuánto inclinarlo, según la estación",
  "Helyszín": "Ubicación",
  "Mérés a helyzetemre": "Calcular para mi posición",
  "Kézi megadás": "Introducir a mano",
  "Dátum": "Fecha",
  "Ma": "Hoy",
  "Téli napforduló": "Solsticio de invierno",
  "Tavaszi napéjegyenlőség": "Equinoccio de primavera",
  "Nyári napforduló": "Solsticio de verano",
  "Őszi napéjegyenlőség": "Equinoccio de otoño",
  "A nap járása": "El recorrido del sol",
  "Ajánlott beállítás": "Ajuste recomendado",
  "Panel igazítása a tájolóval": "Orientar el panel con la brújula",
  "Várható termelés ezen a napon": "Producción prevista este día",
  "Szélesség, pl. 47.50": "Latitud, p. ej. 47.50",
  "Hosszúság, pl. 19.04": "Longitud, p. ej. 19.04",
  "pl. 400": "p. ej. 400",
  "A szélesség -90 és 90, a hosszúság -180 és 180 fok közötti szám.": "La latitud es un número entre -90 y 90, la longitud entre -180 y 180 grados.",
  "Még nem tudom, hol vagy. Nyomd meg a „Mérés a helyzetemre” gombot, vagy add meg kézzel.": "Todavía no sé dónde estás. Pulsa «Calcular para mi posición» o introdúcela a mano.",
  "kézzel megadva": "introducida a mano",
  "Ezen a napon itt a nap nem kel fel.": "Este día el sol no sale aquí.",
  "Ezen a napon itt a nap nem nyugszik le.": "Este día el sol no se pone aquí.",
  "Nappal hossza:": "Duración del día:",
  "napsütés derült égnél, 10° fölött:": "sol con cielo despejado, por encima de 10°:",
  "A panel erre nézzen (valódi égtáj, nem mágneses).": "El panel debe mirar hacia aquí (dirección real, no magnética).",
  "Erre a napra": "Para este día",
  "Tél": "Invierno",
  "Tavasz": "Primavera",
  "Nyár": "Verano",
  "Ősz": "Otoño",
  "Egész évre, fixen": "Todo el año, fijo",
  "A dőlésszög a vízszinteshez mért szög: 0° = fekvő panel, 90° = függőleges.": "La inclinación se mide desde la horizontal: 0° = panel tumbado, 90° = vertical.",
  "Add meg a panel teljesítményét (a címkéjén W-ban), és kiszámolom, nagyjából mennyit termel ezen a napon.": "Introduce la potencia del panel (en W, en su etiqueta) y calcularé aproximadamente cuánto produce este día.",
  "A napra ajánlott dőléssel": "Con la inclinación recomendada para el día",
  "Az egész évre beállított dőléssel": "Con la inclinación para todo el año",
  "Becslés, felhő nélkül: tiszta égbolttal, árnyék nélkül, 20% veszteséggel számolva. Felhős időben ennek csak a töredéke jön, borult égnél akár a tizede.": "Estimación, sin nubes: cielo despejado, sin sombra, con un 20 % de pérdidas. Con nubes llega solo una fracción, con cielo cubierto hasta una décima parte.",
  "a választott nap": "el día elegido",
  "napfordulók, napéjegyenlőség": "solsticios, equinoccio",
  "Tartsd a telefont állva, a kamerával a panel felé: a kamera bekapcsol, és a nap pályája a képen látszik. A tájoló a panel irányára mutat.": "Sostén el teléfono en vertical, con la cámara hacia donde mira el panel: la cámara se enciende y el recorrido del sol aparece en la imagen. La brújula apunta a la dirección del panel.",
  "AMIT EZ TUD ÉS AMIT NEM. A nap helyzetét és a napkeltét pár perc pontossággal számolja, internet nélkül. A dőlésszög és a termelés tiszta égboltra szóló becslés: a felhőt, az árnyékot (fa, ház, domb) és a panel melegedését nem ismeri. A tájoló mágneses irányt mutat, ami Magyarországon kb. 5 fokkal tér el a valódi déltől; a panel termelésén ez alig látszik.": "LO QUE ESTO HACE Y LO QUE NO. Calcula la posición del sol y el amanecer con unos minutos de precisión, sin internet. La inclinación y la producción son estimaciones para cielo despejado: no conoce las nubes, la sombra (árboles, casas, colinas) ni el calentamiento del panel. La brújula muestra la dirección magnética, que puede diferir unos grados del sur real; en la producción apenas se nota.",
  // ===== 2026-10-25 v43.379: short closed-message bubble =====
  "Zárt üzenet": "Mensaje cerrado",
  // ===== 2026-10-25 v43.378 (card 6b4458db, Boss 20:26): offline map page, one row per region =====
  "Tájegységek letöltése": "Descargar regiones",
  "Alaptérkép, turistautak, pontok": "Mapa base, senderos, puntos",
  "Hiányzó részek letöltése": "Descargar las partes que faltan",
  "hiányzik": "falta",
  // ===== 2026-10-25 v43.377 (card 6b4458db, Boss 18:55): Local room help, step by step =====
  "Mire jó: a Helyi szoba internet nélkül köti össze a közeledben lévő telefonokat, ha egy Wi-Fi-n vagytok (vagy Bluetooth-on). Például áramszünetben, vagy otthon a családdal, amikor nincs térerő.": "Para qué sirve: la Sala local conecta los teléfonos cercanos sin internet, cuando estáis en la misma red Wi-Fi (o por Bluetooth). Por ejemplo, en un apagón o en casa con la familia cuando no hay cobertura.",
  "Szoba nyitása: az egyik telefonon a + gombbal nyiss egy új helyi szobát, és adj neki nevet. Ez a telefon lesz a gazda; amíg a szoba kell, az appja maradjon nyitva.": "Abrir una sala: en un teléfono abre una sala local nueva con el botón + y ponle un nombre. Ese teléfono será el anfitrión; mientras se necesite la sala, su app debe seguir abierta.",
  "Belépés a másik telefonról: kapcsolódj ugyanarra a Wi-Fi-re, nyisd meg a Helyi szobát, és koppints a listában megjelenő szobára. A gazda jóváhagyja a belépést; a szoba jelszava (kulcsa) titkosítja az üzeneteket, és minden telefonon ugyanannak kell lennie.": "Entrar desde el otro teléfono: conéctate a la misma red Wi-Fi, abre la Sala local y toca la sala que aparece en la lista. El anfitrión aprueba la entrada; la contraseña (clave) de la sala cifra los mensajes y debe ser la misma en todos los teléfonos.",
  "A pontok: zöld = él a kapcsolat; piros = most nem éri el a gazdát. A listában a halvány szoba most nincs hatótávon.": "Los puntos: verde = la conexión funciona; rojo = ahora no se puede contactar con el anfitrión. Una sala atenuada en la lista está ahora fuera de alcance.",
  "Ha „a gazda nem érhető el”: nézd meg, hogy ugyanazon a Wi-Fi-n vagytok-e, és a gazdánál nyitva van-e az app; kapcsold ki a mobiladatot; vendég Wi-Fi-n a router elszigetelheti a készülékeket. Három sikertelen próba után az app ezt ki is írja, és újra keresi a gazdát.": "Si «no se puede contactar con el anfitrión»: comprueba que estáis en la misma red Wi-Fi y que la app está abierta en el teléfono del anfitrión; desactiva los datos móviles; en una Wi-Fi de invitados el router puede aislar los dispositivos. Tras tres intentos fallidos la app también lo indica y vuelve a buscar al anfitrión.",
  // ===== 2026-10-25 v43.352 (idea #63, card 6b4458db): native volume guard =====
  "A telefonos appban ezen a lapon a hangerő magától maximumra áll, és kilépéskor visszaáll a korábbira. A hang a telefon hangszóróján szól akkor is, ha fülhallgató vagy Bluetooth-eszköz csatlakozik.": "En la aplicación del teléfono, en esta pantalla el volumen sube solo al máximo y vuelve al nivel anterior cuando sales. El sonido sale por el altavoz del teléfono aunque haya auriculares o un dispositivo Bluetooth conectado.",
  // ===== 2026-10-19 v43.313 (card 6b4458db) =====
  "(sérült üzenet — egy 2026. 10. 12. előtti szerverhiba levágta, nem állítható helyre)": "(mensaje dañado — un fallo del servidor anterior al 12/10/2026 lo cortó, no se puede recuperar)",
  "Ezen a készüléken a böngésző nem támogatja a rezgést (iPhone-on a Safari nem tudja). A kapcsoló ezért nem aktív.": "El navegador de este dispositivo no admite la vibración (Safari en iPhone no puede). Por eso el interruptor no está activo.",
  "Bejelentéseim": "Mis informes",
  "Újdonságok": "Novedades",
  "Facebook-csoport": "Grupo de Facebook",
  "Facebook-oldal": "Página de Facebook",
  // ===== 2026-10-19: sugo-szovegek a kepernyokhoz igazitva (kartya eaaba276, Fonok 1a) =====
  "A gyűrű a jelen lévő típusok átlagát mutatja, a színe a leggyengébbet. A sávokon látod, melyik terület gyenge: egy alacsony érték az átlag mögött is ott lehet.": "El anillo muestra el promedio de los tipos presentes, y su color muestra el más débil. En las barras ves qué área es débil: un valor bajo puede esconderse detrás del promedio.",
  "Nyelv: az app felületének nyelve. A tartalom (tudástár, Biblia) egyelőre nem változik tőle; a Biblia fordítását a Biblia fejlécében választod.": "Idioma: el idioma de la interfaz de la app. El contenido (base de conocimientos, Biblia) de momento no cambia con él; la traducción de la Biblia la eliges en la cabecera de la Biblia.",
  "Fény-SOS képernyővel: a kijelző villogtatja a jelet. Ez minden telefonon megy, akkor is, ha a vaku nem indul.": "SOS con la luz de la pantalla: la pantalla parpadea con la señal. Funciona en todos los teléfonos, aunque el flash no arranque.",
  "Esés után automatikus SOS: alapból ki van kapcsolva. Ha bekapcsolod, és a telefon nagy ütés után egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a Jól vagyok gombot, SOS üzenetet küld a helyzeteddel minden szobádba, és megszólal a vészsíp.": "SOS automático tras una caída: viene desactivado. Si lo activas y el teléfono no se mueve durante un minuto después de un golpe fuerte, hace una cuenta atrás en voz alta. Si no pulsas el botón Estoy bien, envía un mensaje SOS con tu ubicación a todas tus salas y suena el silbato de emergencia.",
  "Export: a lista fájlba, például a családnak. A teljes készlet törlése (Készlet ürítése) a Beállítások > Adatkezelés alatt van; előtte exportálj.": "Exportar: la lista a un archivo, por ejemplo para la familia. Borrar todo el inventario (Vaciar inventario) está en Ajustes > Datos; exporta antes.",
  // ===== 2026-10-11 23:4x: teljes atnezes (bemutatkozas, visszajelzes, hianyzo feliratok) =====
  "Üdv Prepperek!": "¡Saludos, preppers!",
  "PrepperPapa vagyok, egy készülődő ember, aki mindenhez érteni szeret. Gyerekkorom óta vonz minden, ami hálózattól és rendszertől független, és az az érzés, amikor arra számíthatsz, ami a fejedben van tudás, és ami nálad van eszköz.": "Soy PrepperPapa, un hombre que se prepara y al que le gusta entender de todo. Desde niño me atrae todo lo que es independiente de la red y del sistema, y la sensación de poder contar con el conocimiento que llevas en la cabeza y las herramientas que llevas contigo.",
  "A prepperekről sokan hideg, bezárkózó embereket képzelnek el. Én azt hiszem, hogy a felkészülést nem a félelemnek kell vezetnie, hanem az önfeláldozó szeretetnek.": "Muchos imaginan a los preppers como personas frías y cerradas. Yo creo que la preparación no debe guiarla el miedo, sino el amor que se entrega.",
  "Ezért álmodtam meg ezt az alkalmazást: hogy mindenkinek reménysége legyen a sötétségben, és a nehéz időkben valódi eszköz, valódi segítség legyen a kezében, akkor is, ha nincs áram és nincs térerő.": "Por eso soñé esta aplicación: para que todos tengan esperanza en la oscuridad y, en tiempos difíciles, una herramienta real, una ayuda real en sus manos, aunque no haya electricidad ni cobertura.",
  "Készülj, ne félj!": "¡Prepárate, no temas!",
  "Erőt reménységet!": "¡Fuerza y esperanza!",
  "Hibát találtál, vagy ötleted van?": "¿Has encontrado un error o tienes una idea?",
  "Írd meg, és ha kell, csatolj képet. Minden visszajelzést elolvasunk.": "Escríbenos y, si hace falta, adjunta una imagen. Leemos todos los mensajes.",
  "Visszajelzés küldése": "Enviar comentarios",
  "a sajátod, pl. +36 30 123 4567": "el tuyo, p. ej. +36 30 123 4567",
  "Küldetést kaptam: a tíz szűz példázatát, hogy fel kell készülni. Az eszesek éjfélkor nem tudtak a saját olajukból adni": "Recibí una misión: la parábola de las diez vírgenes, que hay que estar preparados. A medianoche las prudentes no pudieron dar de su propio aceite",
  "Máté 25,9": "Mateo 25:9",
  ", ezért a tudást időben kell átadni.": ", por eso el conocimiento hay que transmitirlo a tiempo.",
  "A csomagod felhasználó-korlátja betelt:": "Se alcanzó el límite de usuarios de tu plan:",
  "A csomagod termék-korlátja betelt:": "Se alcanzó el límite de artículos de tu plan:",
  "A felolvasás nem indult el: a telefonon nincs ehhez a nyelvhez felolvasó hang (Beállítások → Szövegfelolvasás).": "La lectura no se inició: el teléfono no tiene voz para este idioma (Ajustes → Texto a voz).",
  "A kamerát nem sikerült elindítani. Adj rá engedélyt a telefon beállításaiban.": "No se pudo iniciar la cámara. Concede el permiso en los ajustes del teléfono.",
  "A mentős beolvashatja.": "Los sanitarios pueden escanearlo.",
  "A próba-csomag beállítva.": "Plan de prueba configurado.",
  "Bővíts a Beállításokban, vagy törölj egy tagot.": "Amplía en Ajustes o elimina a un miembro.",
  "Bővíts a Beállításokban, vagy törölj egy tételt.": "Amplía en Ajustes o elimina un artículo.",
  "Felhasználók": "Usuarios",
  "Fizetek": "Pagar",
  "Gyorsabb": "Más rápido",
  "Hiányzik:": "Falta:",
  "Lassabb": "Más lento",
  "Megnézem térképen": "Ver en el mapa",
  "Modulok": "Módulos",
  "Nincs internet: a telefon hangja olvas": "Sin internet: lee la voz del teléfono",
  "Próba-mód kikapcsolva, a valódi feloldásod áll vissza.": "Modo de prueba desactivado, se restaura tu desbloqueo real.",
  "Szünet": "Pausa",
  "Termékek": "Artículos",
  "Teszt-adatok betöltve: 3 fő, 1 háziállat, 5 helyszín (köztük autó és hétvégi ház),": "Datos de prueba cargados: 3 personas, 1 mascota, 5 lugares (incluidos un coche y una casa de fin de semana),",
  "Vissza az igéhez": "Volver al versículo",
  "Panel összecsukása": "Contraer panel",
  "Panel kinyitása": "Expandir panel",
  "Vészkártyák": "Tarjetas de emergencia",
  "adat frissítve a már felvett teszt-tagoknál": "datos actualizados en los miembros de prueba ya añadidos",
  "egy sincs": "ninguno",
  "korlátlan": "ilimitado",
  "légvonalban": "en línea recta",
  "légvonalban, szakaszonként összeadva": "en línea recta, sumando tramo a tramo",
  "megálló": "parada",
  "mérés az elmúlt 48 órából. A telefon légnyomás-szenzora automatikusan méri; kézzel is bevihetsz értéket.": "mediciones de las últimas 48 horas. El sensor de presión del teléfono mide automáticamente; también puedes introducir valores a mano.",
  "nincs ismert": "ninguno conocido",
  "nincs megadva": "no indicado",
  "válassz könyvet": "elige un libro",
  "összesen": "en total",
  "A többiek a „Szobák a hálón\" listában magától látják a szobát. Ha valakinél mégsem jelenik meg, ezt a címet írja be a „Csatlakozás más szobájához\" gombbal.": "Los demás ven la sala automáticamente en la lista «Salas en la red». Si a alguien no le aparece, que escriba esta dirección con el botón «Unirse a la sala de otro».",
  "Másik cím": "Otra dirección",
  "A szoba címe": "Dirección de la sala",
  "Vissza a saját szobámba": "Volver a mi sala",
  "Fénykép": "Foto",
  "Jóváírva.": "Abonado.",
  "küldött neked": "te envió",
  "Gíra küldése neki": "Enviarle gíra",
  // ===== 2026-10-11 22:3x: gira-kozosseg a gazda dontese =====
  "A szoba gazdája Gíra-közösségnek jelölte: a telefonod magától részt vesz.": "El administrador de la sala la marcó como comunidad Gíra: tu teléfono participa automáticamente.",
  "Ezt a szoba gazdája kapcsolja be; még nem jelölte Gíra-közösségnek.": "Esto lo activa el administrador de la sala; aún no está marcada como comunidad Gíra.",
  "Bekapcsolva a szoba minden tagjának. Átküldöm a Gíra-könyvet…": "Activado para todos los miembros de la sala. Enviando el libro Gíra…",
  "Kikapcsolva a szoba minden tagjának.": "Desactivado para todos los miembros de la sala.",
  "A szoba gazdája kapcsolja be; ilyenkor minden tag telefonja magától átküldi ide a Gíra-könyvét, és innen fogadja a többiekét. A szoba minden tagja látja a gíra-mozgásokat.": "El administrador de la sala lo activa; entonces el teléfono de cada miembro envía aquí su libro Gíra automáticamente y recibe los de los demás. Todos los miembros ven los movimientos de gíra.",
  // ===== 2026-10-11 22:2x: LoRa a radio-kalkulatorban =====
  "LoRa (868 MHz) — engedély nélküli adatrádió": "LoRa (868 MHz) — radio de datos sin licencia",
  "Engedély nélkül használható: alapból 25 mW, a 869,4-869,65 MHz-es alsávon 500 mW, korlátozott adásidővel. Nem beszéd, hanem rövid szöveges üzenet; cserébe kis teljesítménnyel is kilométereket visz, mert a zaj alatt is vesz. A telefon nem tud LoRát: egy LoRa-egység kell, amihez a telefon Bluetooth-on csatlakozik.": "Sin licencia: 25 mW por defecto, 500 mW en la subbanda 869,4-869,65 MHz, con tiempo de emisión limitado. No es voz, sino mensajes de texto cortos; a cambio alcanza kilómetros con poca potencia porque recibe por debajo del ruido. El teléfono no tiene LoRa: hace falta una unidad LoRa a la que se conecta por Bluetooth.",
  // ===== 2026-10-11 21:4x: gira minusz-hatar =====
  "ennyit fizethetsz most": "puedes pagar ahora",
  "Ez túllépné a mínusz-határodat.": "Esto superaría tu límite negativo.",
  "Most legfeljebb ennyit fizethetsz:": "Lo máximo que puedes pagar ahora:",
  "határ": "límite",
  "Mínuszba mehetsz": "Puedes bajar hasta",
  "gíráig": "gíra",
  "most ennyit fizethetsz": "puedes pagar ahora",
  // ===== 2026-10-11 21:3x: gira-egyenleg az urlapon =====
  "Egyenleged": "Tu saldo",
  "a gíra nem mehet mínuszba, ezért fizetni akkor tudsz, ha előbb kapsz valakitől.": "la gíra no puede ser negativa, así que podrás pagar cuando alguien te pague primero.",
  "Ennyi gírád nincs. Egyenleged:": "No tienes tanta gíra. Tu saldo:",
  "A gíra nem mehet mínuszba: előbb kapnod kell valakitől.": "La gíra no puede ser negativa: primero alguien tiene que pagarte.",
  // ===== 2026-10-11 21:3x: legnyomas-kartya, mozgas-szures =====
  "Járműben vagy (a GPS szerint 15 km/h felett): a riasztás szünetel, mert ilyenkor a nyomás az emelkedőtől és a szellőzéstől is változik.": "Estás en un vehículo (más de 15 km/h según el GPS): la alarma está en pausa, porque la presión también cambia por las cuestas y la ventilación.",
  "Magasság-korrekcióval: közben": "Con corrección de altitud: entretanto",
  "volt a szintkülönbség, a mért nyers változás": "de desnivel, el cambio bruto medido fue",
  "Szenzor, előzmény, tudnivalók": "Sensor, historial, notas",
  // ===== 2026-10-11 21:0x: szintarcsa, 24 oras napiv, allo tajolo, felolvaso-ertesites =====
  "Válassz színt a tárcsán": "Elige un color en el círculo",
  "Fényerő": "Brillo",
  "Kiválasztom": "Seleccionar",
  "napkelte": "amanecer",
  "napnyugta": "atardecer",
  "éjközép": "medianoche",
  "Nappal": "Día",
  "Éjszaka": "Noche",
  "Biblia felolvasás": "Lectura de la Biblia",
  "Jó irány": "Dirección correcta",
  "Fordulj jobbra": "Gira a la derecha",
  "Fordulj balra": "Gira a la izquierda",
  "Fordulj a kívánt irányba, és nyomd meg: Irány felvétele.": "Mira hacia la dirección deseada y pulsa: Registrar dirección.",
  "Állítsd fel a telefont: álló módban a hátsó kamera irányát mérjük, fektetve ez nem pontos.": "Pon el teléfono en vertical: en modo vertical medimos hacia dónde apunta la cámara trasera; en horizontal no es preciso.",
  "Álló mód: a hátsó kamera iránya számít. A keret zöld, ha a felvett irányba nézel, és piros, ha nem.": "Modo vertical: cuenta la dirección de la cámara trasera. El marco es verde si miras hacia la dirección registrada y rojo si no.",
  "Vízszintes": "Horizontal",
  "Álló": "Vertical",
  "Kamera a háttérben": "Cámara de fondo",
  "A hátsó kamera képe a tájoló mögött, hogy lásd, merre mutat.": "La imagen de la cámara trasera detrás de la brújula, para que veas hacia dónde apunta.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Privát üzenet neki":
    "Mensaje privado",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "még nincs Gíra-azonosítója":
    "aún sin ID de Gíra",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Elküldve a szobán keresztül":
    "Enviado a través de la sala",
  "Nála magától jóváíródik, és a nyugtája is magától visszajön.":
    "Se le abona automáticamente, y su recibo también vuelve automáticamente.",
  "A szobába most nem ment el (nincs kapcsolat vagy kulcs). Itt a QR, ezzel is átadhatod.":
    "No se pudo enviar a la sala ahora (sin conexión o sin clave). Aquí tienes el QR, también puedes entregarlo con él.",
  "Gíra-fizetés":
    "Pago Gíra",
  "hamis aláírás, nem fogadom el":
    "firma falsa, no aceptado",
  "jóváírva nálad":
    "abonado a ti",
  "Szobatársat választhatsz, ha egy Gíra-közösség szobában ők is bekapcsolták.":
    "Puedes elegir a un compañero de sala si también lo activó en una sala de comunidad Gíra.",
  "Szobatárs kiválasztása…":
    "Elegir compañero de sala…",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Helyek":
    "Lugares",
  "a határok közelítők":
    "las fronteras son aproximadas",
  "A területhatárok közelítő rekonstrukciók, nem mért vonalak.":
    "Las fronteras territoriales son reconstrucciones aproximadas, no líneas medidas.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Gíra-közösség":
    "Comunidad Gíra",
  "A telefon ebbe a szobába magától átküldi a Gíra-könyvedet, és innen fogadja a többiekét. A szoba minden tagja látja a gíra-mozgásokat.":
    "El teléfono envía automáticamente tu libro Gíra a esta sala y recibe aquí el de los demás. Todos los miembros de la sala ven los movimientos de Gíra.",
  "Gíra-közösségnek jelölt szobák":
    "Salas marcadas como comunidad Gíra",
  "A szoba beállításaiban kapcsolhatod be („Gíra-közösség”); oda a telefon magától átküldi a könyvet.":
    "Actívalo en los ajustes de una sala («Comunidad Gíra»); el teléfono enviará allí el libro automáticamente.",
  "Utoljára egyeztetve":
    "Última sincronización",
  "Egyeztetés most":
    "Sincronizar ahora",
  "szoba":
    "sala(s)",
  "Nincs elérhető Gíra-közösség szoba. Kapcsold be egy szoba beállításaiban.":
    "No hay ninguna sala de comunidad Gíra accesible. Actívala en los ajustes de una sala.",
  "Bekapcsolva. Átküldöm a Gíra-könyvet…":
    "Activado. Enviando el libro Gíra…",
  "Kikapcsolva. Ide többé nem küldöm a könyvet.":
    "Desactivado. El libro ya no se enviará aquí.",
  "Bekapcsolva, a könyv átment.":
    "Activado, el libro se ha enviado.",
  "Bekapcsolva. A könyv akkor megy át, amikor a szoba elérhető és van aláírt tételed.":
    "Activado. El libro se enviará cuando la sala esté accesible y tengas movimientos firmados.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Titkos kódok":
    "Códigos secretos",
  "Kérek":
    "Pedir",
  "Beolvasás":
    "Escanear",
  "Azonosítóm":
    "Mi ID",
  "Nincs kamera? Beillesztés szövegből":
    "¿Sin cámara? Pegar desde texto",
  "Mozgások":
    "Movimientos",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Apokrif könyvek":
    "Libros apócrifos",
  "Énok ↓":
    "Enoc ↓",
  "Énok könyve letöltése":
    "Descargar el Libro de Enoc",
  "Nem sikerült, próbáld újra":
    "No se pudo, inténtalo de nuevo",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "SÜRGŐS ·":
    "URGENTE ·",
  "3 nappal":
    "3 días antes",
  "Megnézem":
    "Ver",
  "(te)":
    "(tú)",
  "ENGEDÉLYKÖTELES, mint a 2 méter. Beépítésben, épületek között jobb, mint a 2 méter; nyílt terepen rosszabb.":
    "REQUIERE LICENCIA, como los 2 metros. En zonas urbanas, entre edificios, funciona mejor que 2 metros; en terreno abierto, peor.",
  "Írd be az e-mail címed. Küldünk rá egy 6 jegyű kódot; ha beírod, bent vagy. Jelszó nem kell, a telefon megjegyzi a belépést.":
    "Escribe tu correo electrónico. Te enviamos un código de 6 dígitos; cuando lo escribas, ya estás dentro. No hace falta contraseña, el teléfono recuerda el acceso.",
  "Add meg az e-mail címed és az ÚJ jelszót kétszer. Küldünk egy kódot e-mailben; ha beírod, az új jelszó lép életbe.":
    "Escribe tu correo electrónico y la NUEVA contraseña dos veces. Te enviamos un código por correo; cuando lo escribas, la nueva contraseña entra en vigor.",
  "Bekapcsolva, de a bezárt appos értesítés regisztrálása most nem sikerült; amíg az app fut, jelez.":
    "Activado, pero ahora no se pudo registrar la notificación con la app cerrada; mientras la app esté abierta, avisará.",
  "Alul írod az üzenetet; a papírrepülő gomb küldi el a szoba minden tagjának.":
    "Escribes el mensaje abajo; el botón del avión de papel lo envía a todos los miembros de la sala.",
  "Az értesítés le van tiltva. A telefon Beállítások > Alkalmazások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Las notificaciones están bloqueadas. Puedes volver a permitirlas en Ajustes del teléfono > Aplicaciones > PrepperPapa > Notificaciones.",
  "Az értesítés le van tiltva. A telefon Beállítások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Las notificaciones están bloqueadas. Puedes volver a permitirlas en Ajustes del teléfono > PrepperPapa > Notificaciones.",
  "Letiltva. A telefon Beállítások > PrepperPapa > Értesítések menüben lehet visszaadni.":
    "Bloqueado. Puedes volver a permitirlo en Ajustes del teléfono > PrepperPapa > Notificaciones.",
  // ===== HIANYPOTLAS 2026-10-11 (Fonok kepe: a Beallitasok Ertesitesek resze magyarul allt;
  // forras-alapu meres: pp-i18n-forras.mjs, a PP_SZOTAR soraival egyutt kiszurve) =====
  "Kép csatolása":
    "Adjuntar imagen",
  "Új helyi szoba":
    "Nueva sala local",
  "Nincs internetkapcsolat.":
    "No hay conexión a internet.",
  "Visszajelzés":
    "Comentarios",
  "Saját vészkártya adatai":
    "Datos de mi tarjeta de emergencia",
  "Nem ez volt.":
    "No era esto.",
  "Eredmény":
    "Resultado",
  "E-mail cím":
    "Correo electrónico",
  "helyi háló, internet nélkül":
    "red local, sin internet",
  "Forgatás balra":
    "Girar a la izquierda",
  "Forgatás jobbra":
    "Girar a la derecha",
  "Saját telefonszám":
    "Mi número de teléfono",
  "Térképről":
    "Desde el mapa",
  "Koppints a másoláshoz":
    "Toca para copiar",
  "Belépés e-mail címmel":
    "Iniciar sesión con correo electrónico",
  "A szoba kódja, koppints a másoláshoz":
    "El código de la sala, toca para copiarlo",
  "A jel nem vált pont és vonás között. Ez nem tiszta Morze — állíts a vételen, és próbáld újra.":
    "La señal no alterna entre punto y raya. Esto no es Morse limpio — ajusta la recepción y vuelve a intentarlo.",
  "Ez nagyjából":
    "Esto equivale aproximadamente a",
  "18650 (a gyártó saját cellája kb. 3400 mAh)":
    "18650 (la celda propia del fabricante, aprox. 3400 mAh)",
  "kWh hőigénnyel, összesen":
    "kWh de demanda de calor, en total",
  "Állj":
    "Detener",
  "Kód küldése e-mailben":
    "Enviar código por correo",
  "Add meg az e-mail címed.":
    "Introduce tu correo electrónico.",
  "Ez nem tűnik e-mail címnek.":
    "Esto no parece un correo electrónico.",
  "Nem sikerült, próbáld újra.":
    "No se pudo, inténtalo de nuevo.",
  "nincs bejelentkezve":
    "sesión no iniciada",
  "Kikapcsolva ezen az eszközön.":
    "Desactivado en este dispositivo.",
  "Kicsinyítem...":
    "Reduciendo...",
  "Kép törölve.":
    "Imagen eliminada.",
  "Ezt a képet nem tudom megnyitni.":
    "No puedo abrir esta imagen.",
  "Frissítés keresése":
    "Buscar actualizaciones",
  "Normál":
    "Normal",
  "Ki vagyok?":
    "¿Quién soy?",
  "2018 óta készítek videókat PrepperPapa néven a felkészülésről. Hiszem, hogy a keresztény értékek és a jó gyakorlati eszközök együtt segítenek abban, hogy könnyebben vegyük a mindennapok kihívásait, ezért a célom az, hogy fényt hozzak az életedbe, lelkiekben és a szó szoros értelmében is.":
    "Desde 2018 hago vídeos sobre preparación con el nombre PrepperPapa. Creo que los valores cristianos y unas buenas herramientas prácticas, juntos, nos ayudan a afrontar con más facilidad los retos del día a día; por eso mi objetivo es traer luz a tu vida, en lo espiritual y también en el sentido literal.",
  "Lámpákat, késeket, táskákat és energiaforrásokat tesztelek valós használatban, és ha valami nem vált be, azt is elmondom. Nem világvége-hangulatot árulok, hanem azt a néhány dolgot mutatom meg, ami egy áramszünetben, egy viharban vagy egy túrán tényleg számít.":
    "Pruebo linternas, cuchillos, mochilas y fuentes de energía en uso real, y si algo no funciona, también lo cuento. No vendo ambiente de fin del mundo, sino que muestro las pocas cosas que de verdad importan en un apagón, una tormenta o una excursión.",
  "Felkészülés józan ésszel, magyar valóságra.":
    "Preparación con sentido común, para la realidad húngara.",
  "Elérhetőségek":
    "Contacto",
  "Prepper Vészkijárat csoport":
    "Grupo Prepper Vészkijárat",
  "Gyülekező fórum":
    "Foro Gyülekező",
  "Melyik betű?":
    "¿Qué letra?",
  "Mi hiányzik?":
    "¿Qué falta?",
  "Az adat a Háztartásból jön, személyenként: vércsoport, allergia, gyógyszer, betegség, a saját telefonszám és a vészhelyzeti kontakt (név és telefon). Akinél még nincs kontakt megadva, ott a saját kártyád kontaktját használjuk.":
    "Los datos vienen de Hogar, por persona: grupo sanguíneo, alergias, medicamentos, enfermedades, el teléfono propio y el contacto de emergencia (nombre y teléfono). Si alguien aún no tiene contacto, usamos el contacto de tu propia tarjeta.",
  "Vészhelyzeti kontakt – ki?":
    "Contacto de emergencia – ¿quién?",
  "anya, apa, szomszéd…":
    "madre, padre, vecino…",
  "Vészhelyzeti kontakt – telefon":
    "Contacto de emergencia – teléfono",
  "A jegyzet neve":
    "Nombre de la nota",
  "Értesítések":
    "Notificaciones",
  "Lejáró élelmiszer és készlet":
    "Alimentos y reservas que caducan",
  "Mennyivel előre szóljon:":
    "Con cuánta antelación avisar:",
  "1 héttel":
    "1 semana",
  "2 héttel":
    "2 semanas",
  "1 hónappal":
    "1 mes",
  "Próbaértesítés":
    "Notificación de prueba",
  "Rezgő visszajelzés":
    "Respuesta háptica",
  "Rövid rezgés a gombok megnyomásakor":
    "Vibración breve al pulsar los botones",
  "A készülék rövid koppanással jelez minden gombnyomást.":
    "El dispositivo marca cada pulsación con un breve toque.",
  "Készlet ürítése":
    "Vaciar reservas",
  "Fejlesztői próba-mód":
    "Modo de prueba para desarrolladores",
  "Teszt funkció: beállíthatsz egy fizetős csomagot, és az app úgy viselkedik, mintha azt vásárolták volna meg. Csak ezen a készüléken, csak a felületen. A valódi feloldásaid megmaradnak, kikapcsolva visszaáll minden.":
    "Función de prueba: puedes elegir un paquete de pago y la app se comportará como si lo hubieras comprado. Solo en este dispositivo y solo en la interfaz. Tus desbloqueos reales se mantienen; al desactivarlo, todo vuelve a su estado.",
  "Próba-mód bekapcsolása":
    "Activar modo de prueba",
  "Felhasználó-korlát":
    "Límite de usuarios",
  "Termék-korlát":
    "Límite de productos",
  "A 0 korlátlant jelent.":
    "0 significa sin límite.",
  "Beállítás":
    "Aplicar",
  "Próba-mód ki":
    "Desactivar modo de prueba",
  "Vészhelyzeti kontakt neve":
    "Nombre del contacto de emergencia",
  "pl. anya, apa, szomszéd":
    "p. ej., madre, padre, vecino",
  "Vészhelyzeti kontakt telefonszáma":
    "Teléfono del contacto de emergencia",
  "Koordináta térképről":
    "Coordenada desde el mapa",
  "· vagy egy bemásolt Google Térkép-link. Ha nem tudom értelmezni, szólok — üresen nem mentem el. Vagy nyomd meg a":
    "· o un enlace de Google Maps copiado. Si no puedo interpretarlo, te aviso — vacío no lo guardo. O pulsa el botón",
  "gombot, és húzd a térképet a célkereszt alá.":
    "y arrastra el mapa bajo la cruz.",
  "Koordináta a térképről":
    "Coordenada desde el mapa",
  "Ezt választom":
    "Elijo esto",
  "MESH-hálózat: szöveg a közeledben lévőknek, internet nélkül":
    "Red MESH: texto para quienes están cerca, sin internet",
  "Internet és térerő nélkül: közös Wi-Fi-n, hotspoton vagy Bluetooth-on. Itt látod a saját szobáidat és a közelben hallottakat.":
    "Sin internet ni cobertura: por Wi-Fi compartido, punto de acceso o Bluetooth. Aquí ves tus salas y las que se oyen cerca.",
  "Csatlakozás címmel":
    "Unirse con dirección",
  "Ez látszik a szobák listáján, ezen ismerik fel. A telefonod a képet magától lekicsinyíti.":
    "Esto aparece en la lista de salas; así la reconocen. Tu teléfono reduce la imagen automáticamente.",
  "Fiók":
    "Cuenta",
  "Jelszó megváltoztatása":
    "Cambiar contraseña",
  "Kép a szobához (nem kötelező)":
    "Imagen de la sala (opcional)",
  "Mérés fut… tartsd a jelen,":
    "Midiendo… mantén la señal,",
  "másodperc.":
    "segundos.",
  "Kevés jel érkezett. Indítsd újra, és nézd meg, hogy a vétel egyáltalán lát-e jelet.":
    "Ha llegado poca señal. Reinicia y comprueba si la recepción detecta alguna señal.",
  "mért arány":
    "proporción medida",
  "Mért sebesség":
    "Velocidad medida",
  "Beállítom":
    "Aplicar",
  "A vétel sebessége beállítva":
    "Velocidad de recepción ajustada",
  "Figyelj: lekopogom a betűt. Előbb a sor, aztán az oszlop.":
    "Atento: golpeo la letra. Primero la fila, luego la columna.",
  "Kopogd le ezt a betűt":
    "Golpea esta letra",
  "Írd be, melyik betűt hallottad.":
    "Escribe qué letra has oído.",
  "Írd le, mit hallottál, aztán nyomd meg az Ellenőrzést.":
    "Escribe lo que has oído y pulsa Comprobar.",
  "Saját telefon:":
    "Mi teléfono:",
  "Ez a cikk zárt: a bővített tudástár nincs feloldva ezen a készüléken.":
    "Este artículo está bloqueado: la base de conocimiento ampliada no está desbloqueada en este dispositivo.",
  "Előbb írd be a szöveget a mezőbe, aztán koppints a lapra.":
    "Primero escribe el texto en el campo y luego toca la hoja.",
  "T Szöveg":
    "T Texto",
  "Eldobod a rajzot?":
    "¿Descartar el dibujo?",
  "Új lapot kezdesz? A mostani rajz elvész.":
    "¿Empezar una hoja nueva? El dibujo actual se perderá.",
  "Adj nevet a jegyzetnek.":
    "Ponle nombre a la nota.",
  "Wh tárolt energia":
    "Wh de energía almacenada",
  "saját megadás":
    "valor propio",
  "A megadott wattórából 10 százalékot levonunk átalakítási veszteségre.":
    "De los vatios-hora indicados restamos un 10 por ciento por pérdidas de conversión.",
  "A savas akkut csak félig szabad lemeríteni, különben tönkremegy, és az átalakító is elvisz 15 százalékot. Ezért a névlegesnek nagyjából 42 százalékával számolunk.":
    "La batería de plomo solo debe descargarse a la mitad, si no se estropea, y el inversor también se lleva un 15 por ciento. Por eso calculamos aproximadamente con el 42 por ciento de la nominal.",
  "A LiFePO4-et 80 százalékig le lehet meríteni (a savasat csak felére), az átalakító 10 százalékot visz.":
    "La LiFePO4 se puede descargar hasta el 80 por ciento (la de plomo solo a la mitad); el inversor se lleva un 10 por ciento.",
  "A tárolt energiából kb. 10 százalékot elvisz az átalakítás, ezért nem a teljes wattóra használható fel.":
    "La conversión se lleva aprox. un 10 por ciento de la energía almacenada, por eso no se pueden usar todos los vatios-hora.",
  "saját eszköz":
    "dispositivo propio",
  "Tölts ki legalább egy sort: hány darab, hány watt, hány óra naponta.":
    "Rellena al menos una fila: cuántas unidades, cuántos vatios, cuántas horas al día.",
  "Nem fogy el":
    "No se agota",
  "Ez nem fér el egyszerre. A felsorolt fogyasztók együtt":
    "Esto no cabe a la vez. Los consumidores de la lista juntos",
  "wattot kérnek, a gép":
    "vatios piden, el equipo",
  "Nem attól múlik, hogy mekkora a wattórája — ennyit egyszerre nem bír.":
    "No depende de sus vatios-hora — no aguanta tanto a la vez.",
  "Vagy nagyobb teljesítményű gép kell, vagy nem egyszerre kell működtetni őket.":
    "O hace falta un equipo más potente, o no hay que usarlos a la vez.",
  "Az indulási áram kiviheti. A folyamatos fogyasztás belefér,":
    "La corriente de arranque puede hacerlo saltar. El consumo continuo cabe,",
  "de a motoros készülék induláskor kb.":
    "pero el aparato con motor al arrancar consume aprox.",
  "wattot húz pár másodpercig,":
    "vatios durante unos segundos,",
  "a gép":
    "el equipo",
  "wattos. Ilyenkor a gép lekapcsol, pedig „papíron belefért volna\".":
    "vatios. En ese caso el equipo se apaga, aunque «sobre el papel cabía».",
  "Wh valóban felhasználható energia kell":
    "Wh de energía realmente utilizable hacen falta",
  "(névlegesen kb.":
    "(nominalmente aprox.",
  "Wh, a veszteség miatt).":
    "Wh, por las pérdidas).",
  "A választott gép ezt tudja.":
    "El equipo elegido puede con esto.",
  "A választott gép ehhez kevés.":
    "El equipo elegido se queda corto para esto.",
  "Ezek elegendők lennének erre a listára:":
    "Estos bastarían para esta lista:",
  "A napelem naponta":
    "El panel solar da al día",
  "wattórával többet ad, mint amennyit elhasználsz. Ez így önfenntartó — de csak amíg süt: két borús nap":
    "vatios-hora más de los que gastas. Así es autosuficiente — pero solo mientras haya sol: dos días nublados",
  "wattórát vinne el a tartalékból.":
    "vatios-hora se llevarían de la reserva.",
  "ezzel a listával.":
    "con esta lista.",
  "Napi fogyasztás:":
    "Consumo diario:",
  "| csúcsterhelés:":
    "| carga máxima:",
  "(a gép":
    "(el equipo",
  "Wh névlegesből":
    "Wh nominales,",
  "Wh a valóban felhasználható.":
    "Wh realmente utilizables.",
  "A napelem:":
    "El panel solar:",
  "napfényórának felel meg, tehát napi kb.":
    "horas de sol equivalen, así que al día aprox.",
  "Wh jön be. A névleges teljesítmény 70 százalékával számolunk:":
    "Wh entran. Calculamos con el 70 por ciento de la potencia nominal:",
  "az állásszög, a hő és a töltésvezérlő mind levesz belőle.":
    "la inclinación, el calor y el regulador de carga le restan algo.",
  "teletöltése ilyen időben":
    "para cargarlo por completo con este tiempo",
  "Saját / kézi megadás (bármilyen lámpa)":
    "Valor propio / manual (cualquier linterna)",
  "NEXTORCH eStar (fejlámpa, max. 1300 lm)":
    "NEXTORCH eStar (frontal, máx. 1300 lm)",
  "2× 1200 mAh (2400 mAh összesen)":
    "2× 1200 mAh (2400 mAh en total)",
  "NEXTORCH myStar V2.0 (fejlámpa, max. 760 lm)":
    "NEXTORCH myStar V2.0 (frontal, máx. 760 lm)",
  "NEXTORCH iStar (fejlámpa, max. 450 lm)":
    "NEXTORCH iStar (frontal, máx. 450 lm)",
  "Piros villogó":
    "Rojo intermitente",
  "NEXTORCH MAX STAR (fejlámpa, max. 1200 lm)":
    "NEXTORCH MAX STAR (frontal, máx. 1200 lm)",
  "NEXTORCH oStar (sisak-/fejlámpa, max. 500 lm)":
    "NEXTORCH oStar (frontal/de casco, máx. 500 lm)",
  "Decathlon Quechua HL50 (fejlámpa, 50 lm)":
    "Decathlon Quechua HL50 (frontal, 50 lm)",
  "Decathlon Ontrail 900 (fejlámpa terepfutáshoz)":
    "Decathlon Ontrail 900 (frontal para trail running)",
  "Boost, 900→350 lm (túlmelegedés ellen csökken)":
    "Boost, 900→350 lm (baja para evitar el sobrecalentamiento)",
  "Erős, 300 lm, állandó fényerő":
    "Fuerte, 300 lm, brillo constante",
  "Decathlon Caperlan Moonlight 500 (horgász fejlámpa)":
    "Decathlon Caperlan Moonlight 500 (frontal de pesca)",
  "Horgászat, 80 lm":
    "Pesca, 80 lm",
  "Optimál, 200 lm":
    "Óptimo, 200 lm",
  "UV mód":
    "Modo UV",
  "Decathlon Forclaz ONNight 300 (fejlámpa túrázáshoz)":
    "Decathlon Forclaz ONNight 300 (frontal de senderismo)",
  "Környezeti fény":
    "Luz ambiental",
  "Erős, 130 lm":
    "Fuerte, 130 lm",
  "Saját megadás (mA)":
    "Valor propio (mA)",
  "Kis 5 mm-es LED (jelzőfény-szerű, gyenge)":
    "LED pequeño de 5 mm (tipo piloto, débil)",
  "~1 W teljesítmény-LED (pl. Cree XP-E)":
    "LED de potencia de ~1 W (p. ej., Cree XP-E)",
  "~3 W teljesítmény-LED (pl. Cree XP-G, Osram)":
    "LED de potencia de ~3 W (p. ej., Cree XP-G, Osram)",
  "~5 W teljesítmény-LED (erős fejlámpa/zseblámpa)":
    "LED de potencia de ~5 W (frontal/linterna potente)",
  "COB LED-sáv (kempinglámpa)":
    "Tira LED COB (lámpara de camping)",
  "Saját megadás (mAh)":
    "Valor propio (mAh)",
  "AA alkáli elem (~2500 mAh)":
    "Pila alcalina AA (~2500 mAh)",
  "AA NiMH tölthető akku (~2000 mAh)":
    "Batería recargable NiMH AA (~2000 mAh)",
  "AAA alkáli elem (~1000 mAh)":
    "Pila alcalina AAA (~1000 mAh)",
  "— a gyártó szerint":
    "— según el fabricante",
  "— a gyártó saját, mért adata":
    "— dato propio medido por el fabricante",
  "Add meg az akku kapacitását és a LED áramfelvételét is.":
    "Indica también la capacidad de la batería y el consumo del LED.",
  "mAh névleges kapacitásból":
    "mAh de capacidad nominal,",
  "mAh a valóban felhasználható (a merítési és driver-veszteség miatt 15 százalékot levonva),":
    "mAh realmente utilizables (restando un 15 por ciento por pérdidas de descarga y del driver),",
  "mA folyamatos áramfelvétel mellett.":
    "mA de consumo continuo.",
  "Rejtőzködés, fekvés, olvasás. Ennyivel nem hízol és nem is fogysz gyorsan, de a fejed tiszta marad.":
    "Esconderse, estar tumbado, leer. Con esto no engordas ni adelgazas rápido, pero la cabeza se mantiene despejada.",
  "Járkálás, ház körüli teendők. Ez a nemzetközi vészhelyzeti tervezés alapszáma is.":
    "Caminar, tareas de la casa. Es también la cifra base de la planificación internacional de emergencias.",
  "Favágás, sáncolás, teherrel gyaloglás, hideg. Ez a szám gyorsan elviszi a készletet -- éppen ezért érdemes előre számolni vele.":
    "Cortar leña, cavar trincheras, caminar con carga, frío. Esta cifra agota las reservas rápido -- justo por eso conviene calcularla de antemano.",
  "kcal fejenként naponta.":
    "kcal por persona al día.",
  "saját tétel":
    "artículo propio",
  "egység":
    "unidad",
  "Engedély nélküli, 4 watt AM/FM (SSB-n 12). Nagy antennát kíván, de a hosszú hullám jobban hajlik a domb mögé, mint bármelyik kézirádió.":
    "Sin licencia, 4 vatios AM/FM (12 en SSB). Necesita una antena grande, pero la onda larga se curva mejor detrás de una colina que cualquier radio portátil.",
  "ENGEDÉLYKÖTELES: vizsga és hívójel kell hozzá. Vészhelyzetben az életveszély elhárítására a törvény enged kivételt, de arra épülő tervet ne csinálj -- a vizsga előre megszerezhető.":
    "REQUIERE LICENCIA: hace falta examen e indicativo. En una emergencia, la ley permite una excepción para evitar un peligro para la vida, pero no hagas un plan basado en eso -- el examen se puede obtener de antemano.",
  "ENGEDÉLYKÖTELES. Itt NEM a rálátás dönt: nappal 100-400 km-re, éjjel akár több ezerre visz az ionoszféráról visszaverődve. Ezt a kalkulátor nem modellezi -- lásd a figyelmeztetést az eredménynél.":
    "REQUIERE LICENCIA. Aquí NO decide la línea de visión: de día llega a 100-400 km, de noche incluso a miles, rebotando en la ionosfera. Esta calculadora no lo modela -- mira la advertencia en el resultado.",
  "ENGEDÉLYKÖTELES. Éjszakai sáv, a környék (50-300 km) megbízható lefedésére a legjobb -- ez a klasszikus \"megyényi\" összeköttetés.":
    "REQUIERE LICENCIA. Banda nocturna, la mejor para cubrir de forma fiable los alrededores (50-300 km) -- es la clásica conexión \"a escala de provincia\".",
  "Mező, tópart, autópálya. Itt a rálátás a korlát, nem a terep.":
    "Campo, orilla de lago, autopista. Aquí el límite es la línea de visión, no el terreno.",
  "A domb mögé a jel behajlik, de gyengülve. Egy dombtetőre felsétálni többet ér, mint tízszeres teljesítmény.":
    "La señal se curva detrás de la colina, pero se debilita. Subir a una cima vale más que diez veces más potencia.",
  "A lombozat a rövid hullámot nyeli el jobban, ezért itt a 70 centi a leggyengébb.":
    "El follaje absorbe más la onda corta, por eso aquí los 70 cm son los más débiles.",
  "Itt fordul meg a sorrend: a 70 centi jobban jut át épületek között, a CB-nek meg antennája sincs hova.":
    "Aquí se invierte el orden: los 70 cm pasan mejor entre edificios, y la CB ni siquiera tiene dónde poner la antena.",
  "Völgyben ülve a rálátás nulla. Itt a megoldás nem a watt, hanem az átjátszó vagy a gerincre feljutás.":
    "Sentado en un valle, la línea de visión es cero. Aquí la solución no son los vatios, sino el repetidor o subir a la cresta.",
  "talajhullám":
    "onda de tierra",
  "terep és teljesítmény":
    "terreno y potencia",
  "rálátás (a Föld görbülete)":
    "línea de visión (la curvatura de la Tierra)",
  "Adj meg legalább egy embert.":
    "Añade al menos una persona.",
  "Tölts ki legalább egy tételt (mennyiség és kcal), vagy add meg az összeset egyben.":
    "Rellena al menos un artículo (cantidad y kcal), o indica el total de una vez.",
  "kcal hiányzik a":
    "kcal faltan en",
  "húskonzerv .":
    "conserva de carne .",
  "Ennyi ideig elég a készlet":
    "Las reservas alcanzan para este tiempo",
  "felnőttnek":
    "para adultos",
  "Napi igény:":
    "Necesidad diaria:",
  "készlet:":
    "reservas:",
  "kcal kell.":
    "kcal necesarias.",
  "Ez megvan.":
    "Esto está cubierto.",
  "Ehhez a készlet kevés.":
    "Las reservas no bastan para esto.",
  "A gyerekekkel a felnőtt adag 60 százalékával számoltunk — ez átlag,":
    "Con los niños hemos calculado el 60 por ciento de la ración adulta — es una media,",
  "egy tizenkét éves többet eszik egy hároméves(nél). A kalória nem minden:":
    "un niño de doce años come más que uno de tres. Las calorías no lo son todo:",
  "fehérje, só és zsír nélkül a puszta kalória pár hét alatt legyengít, és a":
    "sin proteínas, sal y grasa, las calorías solas te debilitan en pocas semanas, y la",
  "C-vitamin hiánya hetek alatt jelentkezik. Ez a szám a KIHÚZÁST méri, nem az egészséget.":
    "falta de vitamina C aparece en semanas. Esta cifra mide la SUPERVIVENCIA, no la salud.",
  "A víz nincs ebben a számban, és hamarabb fogy el.":
    "El agua no está en esta cifra, y se acaba antes.",
  "Élelem nélkül hetekig el lehet lenni, víz nélkül napokig. Ha a készletet tervezed,":
    "Sin comida se puede aguantar semanas; sin agua, días. Si planificas las reservas,",
  "a vízzel kezdd — arra külön kalkulátor van.":
    "empieza por el agua — para eso hay una calculadora aparte.",
  "Ez a teljesítmény PMR446-on nem legális. A sávon":
    "Esta potencia no es legal en PMR446. En la banda",
  "maximum 0,5 watt engedélyezett, gyári antennával. A számot kiszámoltuk, de egy":
    "se permite como máximo 0,5 vatios, con la antena de fábrica. Hemos calculado la cifra, pero con un",
  "erősebb adóval a saját frekvenciádon te zavarod meg azokat, akikkel beszélni akarsz.":
    "emisor más potente en tu propia frecuencia molestas a quienes quieres hablar.",
  "Ez a sáv engedélyköteles.":
    "Esta banda requiere licencia.",
  "használatához":
    "para usar",
  "vizsga és hívójel kell. A vizsga előre megszerezhető — és pont ez a lényeg:":
    "hace falta examen e indicativo. El examen se puede obtener de antemano — y eso es lo esencial:",
  "egy vészhelyzetben már késő elkezdeni.":
    "en una emergencia ya es tarde para empezar.",
  "kilométerre ezen a sávon a teljesítmény":
    "kilómetros en esta banda, la potencia",
  "nem elég — bármennyi. A rálátásod":
    "no basta — sea cual sea. Tu línea de visión es de",
  "kilométer, és a Föld görbülete":
    "kilómetros, y detrás de la curvatura de la Tierra",
  "mögé a VHF/UHF jel nem hajlik be. Amin múlik: magasság (menj fel egy dombra vagy":
    "la señal VHF/UHF no se curva. De qué depende: la altura (sube a una colina o",
  "tedd fel az antennát), átjátszó , vagy alacsonyabb sáv (CB vagy rövidhullám).":
    "sube la antena), un repetidor , o una banda más baja (CB u onda corta).",
  "kilométerhez kb.":
    "kilómetros harían falta aprox.",
  "watt kellene ezen a sávon és ezen a terepen":
    "vatios en esta banda y en este terreno",
  "— ami már nem kézirádió-kategória, és rendszerint olcsóbb feljebb vinni az antennát.":
    "— lo que ya no es categoría de radio portátil, y normalmente sale más barato subir la antena.",
  "Ennyire várható összeköttetés":
    "Alcance de comunicación esperado",
  "méter antennamagassággal.":
    "metros de altura de antena.",
  "Amin most múlik:":
    "De qué depende ahora:",
  "Rövidhullámon a talajhullámmal számoltunk.":
    "En onda corta hemos calculado con la onda de tierra.",
  "A rálátásod":
    "Tu línea de visión es de",
  "km, a terep és a teljesítmény":
    "km, el terreno y la potencia permiten",
  "km-t enged — a kettő közül a kisebbik számít.":
    "km — cuenta el menor de los dos.",
  "A watt a leggyengébb eszközöd. A távolság a teljesítmény negyedik":
    "Los vatios son tu herramienta más débil. La distancia crece con la raíz cuarta",
  "gyökével nő: négyszer annyi watt másfélszer nagyobb távolság. Egy méterrel feljebb tett":
    "de la potencia: cuatro veces más vatios, una vez y media más distancia. Subir la antena un metro",
  "antenna rendszerint többet ad, mint a teljesítmény megduplázása — és nem fogyaszt.":
    "suele dar más que duplicar la potencia — y no consume.",
  "Rövidhullámon ez a szám csak a talajhullám. A 7 és a 3,6":
    "En onda corta esta cifra es solo la onda de tierra. El alcance real de las bandas de 7 y 3,6",
  "megahertzes sáv igazi hatótávját az ionoszféra adja: napszaktól és napfolt-tevékenységtől":
    "megahercios lo da la ionosfera: según la hora del día y la actividad solar,",
  "függően 100-tól több ezer kilométerig. Azt ez a kalkulátor nem modellezi — arra":
    "de 100 a varios miles de kilómetros. Esta calculadora no lo modela — para eso",
  "terjedési előrejelzés kell.":
    "hace falta una previsión de propagación.",
  "Tölts ki minden mezőt.":
    "Rellena todos los campos.",
  "kg fa, ez körülbelül":
    "kg de leña, aproximadamente",
  "ömlesztett köbméter":
    "metros cúbicos a granel",
  "Légszáraz keményfával és 70 százalékos kályha-hatásfokkal számolva. Nedves fa ennek a felét adja, tehát kétszer annyi kell belőle.":
    "Calculado con leña dura secada al aire y un rendimiento de estufa del 70 por ciento. La leña húmeda da la mitad, así que hace falta el doble.",
  "kg gáz, ez":
    "kg de gas, es decir",
  "darab 11,5 kilós palack":
    "bombonas de 11,5 kilos",
  "PB-gázt zárt térben égetni életveszélyes lehet. Szén-monoxid keletkezik, ami szagtalan, és álmodban öl meg. Kell mellé szén-monoxid-érzékelő, és kell folyamatos szellőzés — nem elég percenként kinyitni az ablakot.":
    "Quemar gas butano/propano en un espacio cerrado puede ser mortal. Se produce monóxido de carbono, que no huele y te mata mientras duermes. Necesitas un detector de monóxido de carbono y ventilación continua — no basta con abrir la ventana cada tanto.",
  "Párát is termel: minden elégetett kiló gázból másfél liter víz kerül a levegőbe. Ettől penészedik a fal, és hidegebbnek érzed a szobát.":
    "También produce humedad: cada kilo de gas quemado suelta litro y medio de agua al aire. Eso enmohece las paredes y hace que sientas la habitación más fría.",
  "Palackot soha ne tarts a lakótérben tartalékként, és ne a fűtés mellett.":
    "Nunca guardes bombonas de reserva en la vivienda, ni junto a la calefacción.",
  "Tölts ki mindkét mezőt.":
    "Rellena ambos campos.",
  "négyzetméter tetőről":
    "metros cuadrados de tejado",
  "milliméter esőből, húsz százalék veszteséggel számolva.":
    "milímetros de lluvia, calculando un veinte por ciento de pérdida.",
  "A tető vízszintes vetülete számít, nem a ferde felület: felülről nézve mekkora.":
    "Cuenta la proyección horizontal del tejado, no la superficie inclinada: cuánto mide vista desde arriba.",
  "Ivásra és főzésre, három liter fejenként naponta:":
    "Para beber y cocinar, tres litros por persona al día:",
  "Az első lefolyó vizet engedd el. Az mossa le a tetőről a port, a madárürüléket és a leveleket. Nagyjából az első fél milliméter esőnek megfelelő mennyiség.":
    "Deja correr la primera agua. Esa limpia del tejado el polvo, los excrementos de pájaro y las hojas. Aproximadamente lo que corresponde al primer medio milímetro de lluvia.",
  "A tető anyaga számít. Bitumenzsindelyről, ólomtartalmú festésről vagy azbesztpalán át gyűjtött vizet ne igyál. Mosásra, öblítésre az is jó.":
    "El material del tejado importa. No bebas agua recogida de tejas asfálticas, pintura con plomo o placas de amianto. Para lavar o enjuagar sí sirve.",
  "Az összegyűjtött víz nem ivóvíz. A Víztisztítás rész fent megmondja, mennyi forralás vagy hipó kell hozzá.":
    "El agua recogida no es agua potable. La sección Potabilización de arriba te dice cuánto hervirla o cuánta lejía necesita.",
  "Dörgés":
    "Trueno",
  "Most várd meg a dörgést, és nyomd meg újra.":
    "Ahora espera al trueno y pulsa otra vez.",
  "Ez a fejed fölött van. Azonnal menj be épületbe vagy autóba. Fa alá soha.":
    "Está encima de ti. Entra de inmediato en un edificio o un coche. Nunca bajo un árbol.",
  "Tíz kilométeren belül van, tehát veszélyes. A következő villám már téged is elérhet: menj fedezékbe, és maradj is ott.":
    "Está a menos de diez kilómetros, así que es peligroso. El próximo rayo ya puede alcanzarte: ponte a cubierto y quédate allí.",
  "Egyelőre távol van, de figyeld: ha az idő rövidül, közeledik.":
    "De momento está lejos, pero vigila: si el tiempo se acorta, se acerca.",
  "másodperc telt el. A hang három másodperc alatt tesz meg egy kilométert.":
    "segundos han pasado. El sonido recorre un kilómetro en tres segundos.",
  "Harminc-harminc szabály: ha a dörgés harminc másodpercen belül megjön, menj fedezékbe, és az utolsó dörgés után még harminc percig maradj bent. A vihar utolsó villámai a legalattomosabbak, mert akkor már mindenki előjön.":
    "Regla del treinta-treinta: si el trueno llega en menos de treinta segundos, ponte a cubierto, y quédate dentro hasta treinta minutos después del último trueno. Los últimos rayos de la tormenta son los más traicioneros, porque entonces todo el mundo ya sale.",
  "Add meg a távolságot.":
    "Indica la distancia.",
  "tartalékkal.":
    "con margen.",
  ": ebből":
    ": de ello",
  "már sötétben lenne. Vagy indulj hamarabb, vagy vigyél lámpát.":
    "ya sería de noche. O sal antes, o lleva una linterna.",
  "kilométer":
    "kilómetros",
  "méter emelkedés.":
    "metros de desnivel.",
  "Az emelkedés minden hatszáz métere egy órát ad hozzá. Most indulva":
    "Cada seiscientos metros de desnivel añaden una hora. Saliendo ahora",
  "-kor érnél oda.":
    "h: hora de llegada.",
  "Pihenő nincs benne. Hosszabb úton számolj óránként tíz perccel, és étkezéssel.":
    "No incluye descansos. En rutas largas cuenta diez minutos por hora, y las comidas.",
  "Mérés…":
    "Midiendo…",
  "nyomás.":
    "compresiones.",
  "Forralás (ez a legbiztosabb)":
    "Hervir (es lo más seguro)",
  "Buzgó forrás":
    "Hervor intenso",
  "— kétezer méter felett vagy, ott hosszabb kell, mert alacsonyabb a forráspont.":
    "— estás por encima de los dos mil metros; allí hace falta más tiempo, porque el punto de ebullición es más bajo.",
  "Hagyd kihűlni fedő alatt.":
    "Déjala enfriar tapada.",
  "Ha nem tudsz forralni: hipó":
    "Si no puedes hervir: lejía",
  "vízhez":
    "de agua",
  "százalékos hipó, ami körülbelül":
    "por ciento de lejía, aproximadamente",
  "Keverd el, várj":
    "Remueve, espera",
  "percet, és utána is enyhén klóros szagúnak kell lennie.":
    "minutos, y después debe seguir oliendo ligeramente a cloro.",
  "Ha nem érzed a szagot, adj hozzá ugyanennyit, és várj még":
    "Si no notas el olor, añade la misma cantidad y espera otros",
  "Zavaros vizet előbb tisztítsd le. Hagyd ülepedni, majd szűrd át ruhán vagy kávéfilteren. A hipó a lebegő szennyeződésre pazarlódik el, és nem jut a kórokozókra.":
    "Primero aclara el agua turbia. Déjala reposar y fíltrala con un paño o un filtro de café. La lejía se desperdicia en la suciedad en suspensión y no llega a los patógenos.",
  "Illatosított, sűrített vagy tisztítószeres hipót ne használj. Csak sima nátrium-hipoklorit oldat való bele.":
    "No uses lejía perfumada, concentrada ni con detergente. Solo sirve una solución simple de hipoclorito de sodio.",
  "Amit ez nem old meg: vegyszer, olaj, növényvédőszer, nehézfém, sóstalanítás. Ezeket sem a forralás, sem a hipó nem távolítja el, a forralás inkább töményíti őket. Ipari terület, út menti árok vagy szántóföld melletti vízzel ne is próbálkozz.":
    "Lo que esto no resuelve: químicos, aceite, pesticidas, metales pesados, desalinización. Ni hervir ni la lejía los eliminan; hervir más bien los concentra. Ni lo intentes con agua de zonas industriales, cunetas de carretera o junto a campos de cultivo.",
  "A hipó nem öl meg mindent. A Cryptosporidium ellenáll neki. Ha ilyet gyanítasz (állati ürülékkel érintkezett felszíni víz), forralj, vagy használj arra való szűrőt.":
    "La lejía no mata todo. El Cryptosporidium la resiste. Si lo sospechas (agua superficial en contacto con heces de animales), hiérvela o usa un filtro adecuado.",
  "csempe van eltárolva ezen a készüléken.":
    "teselas guardadas en este dispositivo.",
  "Ez a kivágás túl nagy:":
    "Este recorte es demasiado grande:",
  "csempe lenne. Nagyíts rá jobban, és úgy töltsd le.":
    "teselas serían. Acerca más el zoom y descárgalo así.",
  "csempe letöltése (kb.":
    "teselas a descargar (aprox.",
  "nagyításon. Folytatod?":
    "de zoom. ¿Continuar?",
  "Letöltés…":
    "Descargando…",
  "Letöltés:":
    "Descarga:",
  "Kész:":
    "Listo:",
  "nem jött le)":
    "no se descargaron)",
  ". Összesen":
    ". En total",
  "csempe van eltárolva.":
    "teselas guardadas.",
  "Kilépés a teljes képernyőből":
    "Salir de pantalla completa",
  "Várj, amíg a térkép betölt.":
    "Espera a que cargue el mapa.",
  "Nincs eltárolt csempe.":
    "No hay teselas guardadas.",
  "Törlöd a letöltött térkép-területeket?":
    "¿Eliminar las zonas de mapa descargadas?",
  "Törölve. A térkép ezután csak online töltődik.":
    "Eliminadas. A partir de ahora el mapa solo carga en línea.",
  "A mikrofon nem indult el:":
    "El micrófono no se inició:",
  "Vétel leállítása":
    "Detener recepción",
  "Vétel fut. Tartsd a hangforráshoz.":
    "Recepción en curso. Acércalo a la fuente de sonido.",
  "sor vétel alatt…":
    "líneas en recepción…",
  "Vétel fut, még nincs jel.":
    "Recepción en curso, aún no hay señal.",
  "Vétel leállítva.":
    "Recepción detenida.",
  "Dekódolás…":
    "Decodificando…",
  "sor dekódolva.":
    "líneas decodificadas.",
  "Nem találtam SSTV-jelet ebben a felvételben.":
    "No encontré señal SSTV en esta grabación.",
  "Nem sikerült a kép betöltése.":
    "No se pudo cargar la imagen.",
  "Kódolás…":
    "Codificando…",
  "Küldés…":
    "Enviando…",
  "mp) — tartsd a vevő mikrofonjához":
    "s) — acércalo al micrófono del receptor",
  "Kész.":
    "Listo.",
  "Leállítva.":
    "Detenido.",
  "WAV készítése…":
    "Creando WAV…",
  "WAV letöltve:":
    "WAV descargado:",
  "Üzenet csak neki:":
    "Mensaje solo para esta persona:",
  "kilépett, innentől mindenkinek írsz.":
    "ha salido; a partir de ahora escribes a todos.",
  "Zárt üzenet. Ehhez a szoba kulcsa kell.":
    "Mensaje cerrado. Hace falta la clave de la sala.",
  "csak neki":
    "solo para esta persona",
  "csak neked":
    "solo para ti",
  "csak neki:":
    "solo para esta persona:",
  "Az internetes szobákhoz egyszer be kell lépned.":
    "Para las salas por internet tienes que iniciar sesión una vez.",
  "Nem vagy bejelentkezve. Töltsd újra a lapot, és add meg a jelszót.":
    "No has iniciado sesión. Recarga la página e introduce la contraseña.",
  "Jelszó megjelenítése":
    "Mostrar contraseña",
  "Belépés jelszóval":
    "Iniciar sesión con contraseña",
  "Az e-mail címed és a jelszavad. A telefon megjegyzi, többször nem kell.":
    "Tu correo electrónico y tu contraseña. El teléfono los recuerda; no tendrás que repetirlo.",
  "Belépés e-mailes kóddal (jelszó nélkül)":
    "Iniciar sesión con código por correo (sin contraseña)",
  "Új fiók":
    "Cuenta nueva",
  "Új jelszó beállítása":
    "Establecer nueva contraseña",
  "Add meg az e-mail címed, és válassz jelszót (legalább 8 karakter), kétszer. Utána küldünk egy 6 jegyű kódot e-mailben.":
    "Introduce tu correo electrónico y elige una contraseña (al menos 8 caracteres), dos veces. Después te enviamos un código de 6 dígitos por correo.",
  "Jelszó (legalább 8 karakter)":
    "Contraseña (al menos 8 caracteres)",
  "Jelszó még egyszer":
    "Repite la contraseña",
  "Vissza a belépéshez":
    "Volver al inicio de sesión",
  "Írd be a kódot":
    "Introduce el código",
  "Küldtünk egy 6 jegyű kódot ide:":
    "Hemos enviado un código de 6 dígitos a:",
  "Nézd meg a levelezőben (a Spam mappát is), és írd be. 10 percig érvényes.":
    "Míralo en tu correo (también en la carpeta de spam) e introdúcelo. Es válido durante 10 minutos.",
  "6 jegyű kód":
    "Código de 6 dígitos",
  "Megerősítés":
    "Confirmar",
  "Elölről":
    "Empezar de nuevo",
  "Bejelentkeztél. A telefon megjegyzi.":
    "Has iniciado sesión. El teléfono lo recuerda.",
  "Ellenőrzés folyamatban…":
    "Comprobando…",
  "Belépés folyamatban…":
    "Iniciando sesión…",
  "Küldés folyamatban, pár másodperc…":
    "Enviando, unos segundos…",
  "Add meg az e-mail címed és a jelszavad.":
    "Introduce tu correo electrónico y tu contraseña.",
  "Hibás e-mail cím vagy jelszó.":
    "Correo electrónico o contraseña incorrectos.",
  "Ha elfelejtetted, nyomd meg az „Elfelejtettem a jelszót\" gombot.":
    "Si la has olvidado, pulsa el botón «He olvidado la contraseña».",
  "A jelszó legalább 8 karakter legyen.":
    "La contraseña debe tener al menos 8 caracteres.",
  "A két jelszó nem egyezik. Írd be újra mindkettőt.":
    "Las dos contraseñas no coinciden. Vuelve a escribir ambas.",
  "A kód 6 számjegy.":
    "El código tiene 6 dígitos.",
  "Hibás kód.":
    "Código incorrecto.",
  "Nem vagy bejelentkezve.":
    "No has iniciado sesión.",
  "Kiléptél.":
    "Has cerrado sesión.",
  "nincs kapcsolat":
    "sin conexión",
  "Bekapcsolva. Ha valaki ír ide, jelez a telefonod, akkor is, ha az app be van zárva.":
    "Activado. Si alguien escribe aquí, tu teléfono avisará, aunque la app esté cerrada.",
  "Ha valaki ír ide, jelezzen a telefonod.":
    "Que tu teléfono avise si alguien escribe aquí.",
  "Ez a böngésző nem tud értesítést fogadni. Telefonon tedd ki az appot a főképernyőre.":
    "Este navegador no puede recibir notificaciones. En el teléfono, añade la app a la pantalla de inicio.",
  "Bekapcsolva. Ha valaki ír ide, jelez a telefonod.":
    "Activado. Si alguien escribe aquí, tu teléfono avisará.",
  "Nem adtál engedélyt az értesítéshez. A telefon beállításainál, az alkalmazásnál adhatod meg.":
    "No has dado permiso para las notificaciones. Puedes darlo en los ajustes del teléfono, en la aplicación.",
  "Bekapcsolva. Küldök egy próbát.":
    "Activado. Te envío una prueba.",
  "Nem adtál engedélyt. A telefon beállításainál később visszaadhatod.":
    "No has dado permiso. Puedes darlo más tarde en los ajustes del teléfono.",
  "a szerver nem adott kulcsot":
    "el servidor no proporcionó la clave",
  "a szerver nem fogadta el a feliratkozást":
    "el servidor no aceptó la suscripción",
  "Bekapcsolva. Küldök egy próbát, hogy lásd, tényleg megérkezik.":
    "Activado. Te envío una prueba para que veas que llega de verdad.",
  "A próbát a szerver elküldte a Google-nek. Pár másodpercen belül meg kell jelennie a telefon értesítései között, akkor is, ha bezárod az appot.":
    "El servidor ha enviado la prueba a Google. En unos segundos debería aparecer entre las notificaciones del teléfono, aunque cierres la app.",
  "Próba: így jelez majd, ha valaki ír ide.":
    "Prueba: así avisará cuando alguien escriba aquí.",
  "Kiküldtem a próbát, nézd meg a telefon értesítései között.":
    "He enviado la prueba; mírala entre las notificaciones del teléfono.",
  "Nincs engedély az értesítéshez.":
    "No hay permiso para las notificaciones.",
  "Ezen az eszközön nincs bekapcsolva az értesítés.":
    "Las notificaciones no están activadas en este dispositivo.",
  "A próba nem ment ki.":
    "La prueba no se envió.",
  "A próbaértesítést a szolgáltató átvette. Ha pár másodpercen belül nem":
    "El proveedor ha recibido la notificación de prueba. Si en unos segundos no",
  "jelenik meg a telefonodon, akkor a telefon beállításánál akad el, nem az appban.":
    "aparece en tu teléfono, el problema está en los ajustes del teléfono, no en la app.",
  "Nyiss egyet: internet és térerő nélkül, egy hálón":
    "Abre una: sin internet ni cobertura, en una red",
  "Minden nyelv":
    "Todos los idiomas",
  "Erre a keresésre nincs nyitott szoba.":
    "No hay salas abiertas para esta búsqueda.",
  "Ezen a nyelven most nincs nyitott szoba. Állítsd vissza Minden nyelvre.":
    "Ahora no hay salas abiertas en este idioma. Vuelve a Todos los idiomas.",
  "indította":
    "la inició",
  "nem vagy tag — koppints a jelentkezéshez":
    "no eres miembro — toca para solicitar acceso",
  "tag olvasta el":
    "miembros lo han leído",
  "Elküldve":
    "Enviado",
  "Még senki nem olvasta el":
    "Nadie lo ha leído todavía",
  "Módosítás: írd át, és küldd el. A mező kiürítésével elveted.":
    "Editar: cámbialo y envíalo. Si vacías el campo, lo descartas.",
  "Módosítva:":
    "Editado:",
  "Törlöd ezt az üzenetet? Mindenkinél eltűnik a tartalma, és azoknál is, akik elmentették.":
    "¿Eliminar este mensaje? Su contenido desaparecerá para todos, también para quienes lo guardaron.",
  "Törölt üzenet":
    "Mensaje eliminado",
  "(zárt üzenet — kérj új meghívó linket a szoba gazdájától)":
    "(mensaje cerrado — pide un nuevo enlace de invitación al dueño de la sala)",
  "(zárt üzenet — ez a kulcs nem ehhez a szobához való)":
    "(mensaje cerrado — esta clave no es de esta sala)",
  "(zárt üzenet — nincs meg a kulcs)":
    "(mensaje cerrado — no tienes la clave)",
  "Rendszerüzenet":
    "Mensaje del sistema",
  "Állandó jel — a névtől és a képtől független":
    "Señal fija — independiente del nombre y la imagen",
  "Ehhez a szobához most készült titkosító kulcs. Küldj ÚJ meghívó linket a tagoknak, hogy olvasni tudják az üzeneteidet.":
    "Se acaba de crear una clave de cifrado para esta sala. Envía un NUEVO enlace de invitación a los miembros para que puedan leer tus mensajes.",
  "Kapcsolódva.":
    "Conectado.",
  "Megszakadt a kapcsolat, újrapróbálom...":
    "Se perdió la conexión, reintentando...",
  "belépési kérelmet küldött — a fogaskerék mögött döntesz róla.":
    "ha enviado una solicitud de acceso — decides en el engranaje.",
  "új üzenetet írt.":
    "ha escrito un mensaje nuevo.",
  "Kész. A szobák listáján már ez látszik. (":
    "Listo. En la lista de salas ya aparece esto. (",
  "Adj nevet a szobának.":
    "Ponle nombre a la sala.",
  "Kész, a szoba létrejött. Itt a kódja, és itt tudsz képet feltölteni vagy meghívót küldeni. Ugyanezt később a fogaskerék alatt éred el.":
    "Listo, la sala se ha creado. Aquí tienes su código, y aquí puedes subir una imagen o enviar una invitación. Lo mismo lo encuentras después en el engranaje.",
  "Írd be a szoba kódját.":
    "Escribe el código de la sala.",
  "Kérelem elküldve. Amíg a gazda jóvá nem hagyja, nem látod az üzeneteket.":
    "Solicitud enviada. Hasta que el dueño la apruebe, no verás los mensajes.",
  "Már tag vagy ebben a szobában.":
    "Ya eres miembro de esta sala.",
  "Nincs ilyen kódú szoba.":
    "No hay ninguna sala con este código.",
  "Illeszd be a meghívó linket.":
    "Pega el enlace de invitación.",
  "Ebben nincs meghívó. Másold be a teljes linket.":
    "Aquí no hay ninguna invitación. Copia el enlace completo.",
  "Beváltom...":
    "Canjeando...",
  "Kész. A csempén már ez látszik. (":
    "Listo. En la tesela ya aparece esto. (",
  "Erről a szobáról nem jelez.":
    "Esta sala no envía avisos.",
  "Küldöm...":
    "Enviando...",
  "A szoba kódja a vágólapon.":
    "El código de la sala está en el portapapeles.",
  "Nem sikerült a vágólapra tenni. Jelöld ki és másold ki kézzel.":
    "No se pudo copiar al portapapeles. Selecciónalo y cópialo a mano.",
  "Biztosan törlöd? A szoba MINDENKINEK megszűnik, az üzenetekkel együtt. Ez nem vonható vissza.":
    "¿Seguro que quieres eliminarla? La sala desaparecerá para TODOS, junto con los mensajes. No se puede deshacer.",
  "Biztosan kilépsz? A szoba a többieknek megmarad, te nem látod tovább.":
    "¿Seguro que quieres salir? La sala sigue para los demás, pero tú ya no la verás.",
  "A szoba megszűnt.":
    "La sala ya no existe.",
  "Kiléptél a szobából.":
    "Has salido de la sala.",
  "Nem fért el a tárolóban. Próbálj kisebb képet.":
    "No cabía en el almacenamiento. Prueba con una imagen más pequeña.",
  "Mentve. Igazíthatod a kivágást, majd nyomd meg a Kész gombot.":
    "Guardado. Puedes ajustar el recorte y luego pulsar el botón Listo.",
  "Mentve. Minden szobában ezen a néven látnak.":
    "Guardado. En todas las salas te ven con este nombre.",
  "Ezt a nevet ebben a szobában már használja valaki. Adj meg másikat.":
    "Alguien ya usa este nombre en esta sala. Elige otro.",
  "Ez a név szabad ebben a szobában.":
    "Este nombre está libre en esta sala.",
  "Ezt a nevet már használja valaki ebben a szobában.":
    "Alguien ya usa este nombre en esta sala.",
  "Egy embert enged be, és 7 nap múlva lejár.":
    "Deja entrar a una persona y caduca en 7 días.",
  "PrepperPapa meghívó":
    "Invitación de PrepperPapa",
  "Meghívlak a(z) „":
    "Te invito a la sala «",
  "\" szobába:":
    "»:",
  "A linket a böngésző CÍMSORÁBA illeszd be, ne a keresőbe.":
    "Pega el enlace en la BARRA DE DIRECCIONES del navegador, no en el buscador.",
  "A vágólapra másolva. Egy embert enged be, és 7 nap múlva lejár.":
    "Copiado al portapapeles. Deja entrar a una persona y caduca en 7 días.",
  "Kép csatolva — koppints az elvetéshez":
    "Imagen adjunta — toca para descartarla",
  "A csatolt képet elvetettem.":
    "He descartado la imagen adjunta.",
  "Kép csatolva. A Küldéssel megy el.":
    "Imagen adjunta. Se enviará con Enviar.",
  "A módosítás elvetve.":
    "Edición descartada.",
  "Módosítva.":
    "Editado.",
  "Lejárt a módosítási idő (15 perc).":
    "Se acabó el tiempo para editar (15 minutos).",
  "A módosítás nem sikerült.":
    "No se pudo editar.",
  "Az üzenet nem ment el.":
    "El mensaje no se envió.",
  "Ez a meghívó lejárt. Kérj újat attól, aki küldte.":
    "Esta invitación ha caducado. Pide una nueva a quien te la envió.",
  "Ezt a meghívót már felhasználták. Kérj újat attól, aki küldte.":
    "Esta invitación ya se ha usado. Pide una nueva a quien te la envió.",
  "Ismeretlen meghívó. Lehet, hogy hiányzik a link vége.":
    "Invitación desconocida. Puede que falte el final del enlace.",
  "A meghívót most nem sikerült beváltani. Van interneted?":
    "Ahora no se pudo canjear la invitación. ¿Tienes internet?",
  "Küldés: kiválasztasz egy képet, és a telefon hangként játssza le.":
    "Enviar: eliges una imagen y el teléfono la reproduce como sonido.",
  "Vétel: a telefon hallgatja a hangot, és soronként rajzolja ki a képet.":
    "Recibir: el teléfono escucha el sonido y dibuja la imagen línea a línea.",
  "Kép választása: a telefon magától átméretezi a 320x256-os keretre.":
    "Elegir imagen: el teléfono la redimensiona automáticamente al marco de 320x256.",
  "Lejátszás: ugyanaz a gomb indít és állít. A WAV a hangot fájlba menti, ha máshogy akarod átvinni.":
    "Reproducir: el mismo botón inicia y detiene. WAV guarda el sonido en un archivo, si quieres transmitirlo de otra forma.",
  "Vétel indítása: ugyanaz a gomb indít és állít. Tartsd a telefont a hangszóró közelébe.":
    "Iniciar recepción: el mismo botón inicia y detiene. Mantén el teléfono cerca del altavoz.",
  "Hangfájlból is megy, ha valaki felvételt küld.":
    "También funciona con un archivo de audio, si alguien te envía una grabación.",
  "A kész képet elmentheted, vagy törölheted és új vételbe kezdhetsz.":
    "Puedes guardar la imagen terminada, o borrarla y empezar una nueva recepción.",
  "Forralás":
    "Hervir",
  "A Szoba zárt csoport, ami interneten át is elérhető: aki messze van, az is beszélget.":
    "La Sala es un grupo cerrado que también funciona por internet: quien está lejos también puede conversar.",
  "A gemkapoccsal képet csatolsz, a háromszög jellel sürgősnek jelölöd — az pirossal emeli ki mindenkinél.":
    "Con el clip adjuntas una imagen; con el triángulo lo marcas como urgente — se resalta en rojo para todos.",
  "Egy üzenetet hosszan nyomva tudsz rá emojival válaszolni, elmenteni, a sajátodat módosítani vagy törölni.":
    "Mantén pulsado un mensaje para responder con un emoji, guardarlo, o editar o eliminar el tuyo.",
  "A fejlécben a fogaskerék nyitja a szoba beállításait: értesítés, tagok, belépési kérelmek, a szoba kódja.":
    "En la cabecera, el engranaje abre los ajustes de la sala: notificaciones, miembros, solicitudes de acceso, el código de la sala.",
  "Az üzenetek szövege és képei végponttól végpontig titkosítva mennek: a szerver ezeket nem tudja elolvasni. A neveket, a profilképeket, a szoba képét, a reakciókat és az időpontokat viszont látja.":
    "El texto y las imágenes de los mensajes van cifrados de extremo a extremo: el servidor no puede leerlos. Sí ve los nombres, las fotos de perfil, la imagen de la sala, las reacciones y las horas.",
  "Kezdőlap":
    "Inicio",
  "Előbb add meg a neved — így látnak a többiek a szobákban.":
    "Primero indica tu nombre — así te ven los demás en las salas.",
  "Tegyél fel egy profilképet — a neved mellett jelenik meg.":
    "Sube una foto de perfil — aparece junto a tu nombre.",
  "(meg nem volt nyitva a szoba kepernyo)":
    "(la pantalla de la sala aún no estaba abierta)",
  "Frissítés keresése…":
    "Buscando actualizaciones…",
  "Főoldal":
    "Página principal",
  "Lámpa, vészfény":
    "Linterna, luz de emergencia",
  "Vészjelzés fény/hang":
    "Señal de emergencia luz/sonido",
  "A menüsor — ez mindig elérhető alul":
    "La barra de menú — siempre disponible abajo",
  "Félkövér":
    "Negrita",
  "Dőlt":
    "Cursiva",
  "Felsorolás":
    "Viñetas",
  "Szerkesztés":
    "Editar",
  "Most jöhet két befúvás, ha vállalod. Ha nem, folytasd a nyomásokat szünet nélkül.":
    "Ahora dos insuflaciones, si te ves capaz. Si no, sigue con las compresiones sin pausa.",
  // ===== MENTETT uZENETEK a Profilon (2026-10-06) =====
  "Mentett üzenetek":
    "Mensajes guardados",
  "Amit egy szobában hosszan nyomva elmentettél. A mentés hivatkozás, nem másolat: ha a szerzője törli az üzenetet, innen is eltűnik.":
    "Lo que guardaste manteniendo pulsado un mensaje en una sala. Guardar es una referencia, no una copia: si el autor borra el mensaje, también desaparece de aquí.",
  // ===== FAX (SSTV): csak Martin M1 (Fonok dontese, 2026-10-06 21:00) =====
  "Martin M1 mód: 320×256 képpont, egy kép ~114 másodperc. Ez az idő magából az SSTV-ből jön — a kép soronként épül fel hangból, és nem gyorsítható.":
    "Modo Martin M1: 320×256 píxeles, una imagen tarda ~114 segundos. Ese tiempo viene del propio SSTV: la imagen se forma línea a línea a partir del sonido y no se puede acelerar.",
  "Küldéshez: a másik eszközön indíts SSTV-vevőt (a mi Fax-vevőnket, vagy pl. Robot36, MMSSTV) Martin M1 módban, és tartsd a hangszórót a mikrofonjához. A VIS-fejléc automatikus, a vevő magától felismeri a módot. Egy kép ~114 másodperc, és ez alatt a hangnak folyamatosnak kell lennie.":
    "Para enviar: en el otro dispositivo inicia un receptor SSTV (nuestro receptor de Fax, o p. ej. Robot36, MMSSTV) en modo Martin M1 y acerca el altavoz a su micrófono. La cabecera VIS es automática, el receptor detecta el modo por sí solo. Una imagen tarda ~114 segundos, y el sonido debe ser continuo todo ese tiempo.",
  // ===== SZOBA: szabalyzat, belepesi kerelem, meghivo-bevaltas, profil (2026-10-06) =====
  // A SZABALYZAT JOGI SZOVEG: Istvan irta magyarul, a forditas Marveene -- ATNEZESRE VAR.
  "Szoba-szabályzat és adatkezelés":
    "Normas de la sala y tratamiento de datos",
  "A Szoba zárt, meghívásos közösségi tér.":
    "La Sala es un espacio comunitario cerrado, solo por invitación.",
  "Nem osztok meg jogsértő tartalmat, más személyes adatát, zaklató üzenetet vagy kereskedelmi, reklám tartalmat.":
    "No comparto contenido ilegal, datos personales de otras personas, mensajes de acoso ni contenido comercial o publicitario.",
  "Tilos a fegyver, lőszer, robbanóanyag, kábítószer és bármilyen tiltott áru adásvétele, cseréje vagy közvetítése — ajánlat, kereslet és kapcsolatfelvétel formájában is.":
    "Está prohibida la compraventa, el intercambio o la intermediación de armas, munición, explosivos, drogas y cualquier bien prohibido — también en forma de ofertas, demandas y contactos.",
  "Tilos fegyver, lőszer, robbanóanyag vagy más veszélyes eszköz készítéséhez, átalakításához útmutatót megosztani, és tilos bármilyen bűncselekményre felbujtani vagy azt megszervezni. A felkészülés, a készletezés, az elsősegély és a rádiózás mint téma ettől természetesen megmarad.":
    "Está prohibido compartir instrucciones para fabricar o modificar armas, munición, explosivos u otros dispositivos peligrosos, así como incitar a un delito u organizarlo. La preparación, el acopio, los primeros auxilios y la radio siguen siendo temas perfectamente válidos.",
  "Amit beírok, a szoba többi tagja látja, és el is mentheti — a titkosítás a szervertől védi az üzenetet, a tagoktól nem.":
    "Lo que escribo lo ven los demás miembros y pueden guardarlo — el cifrado protege el mensaje del servidor, no de los miembros.",
  "A szobát létrehozó gazda felel a szobában folytatott tartalomért: ő dönt a belépésről, ő távolíthat el tagot, és más üzenetét is csak ő törölheti.": "El anfitrión que creó la sala es responsable del contenido publicado en ella: decide quién entra, puede expulsar a un miembro y solo él puede borrar los mensajes de otros.",
  "Járművek": "Vehículos",
  "Helyszínek": "Lugares",
  "Telefonszám": "Número de teléfono",
  "Hajó": "Barco",
  "A gazda bármikor eltávolíthat egy tagot, és bármikor törölheti a szobát — ez minden tag üzenetét visszavonhatatlanul megszünteti.":
    "El anfitrión puede expulsar a un miembro en cualquier momento y borrar la sala — esto destruye de forma irreversible los mensajes de todos.",
  "Ha kilépek vagy eltávolítanak, a szerver több üzenetet nem ad ki nekem — a készülékemen már meglévők viszont olvashatók maradnak.":
    "Si salgo o me expulsan, el servidor no me entrega más mensajes — pero los que ya están en mi dispositivo siguen siendo legibles.",
  "A szobában megosztott hely- vagy készlet-adat érzékeny: a saját biztonságomért én felelek.":
    "Los datos de ubicación o de reservas compartidos en la sala son sensibles: yo soy responsable de mi propia seguridad.",
  "A szoba használata saját belátást és felelősséget kíván.":
    "El uso de la sala exige criterio y responsabilidad propios.",
  "16 év alatti csak szülő vagy gondviselő hozzájárulásával csatlakozhat.":
    "Los menores de 16 años solo pueden unirse con el consentimiento de un progenitor o tutor.",
  "A szerver tárolja: a szoba és a tagok nevét, a profilképet, az üzenetek TITKOSÍTOTT tartalmát, a képeket (max 500 kB), a reakciókat és az olvasási jelzéseket.":
    "El servidor almacena: el nombre de la sala y de los miembros, la foto de perfil, el contenido CIFRADO de los mensajes, las imágenes (máx. 500 kB), las reacciones y los acuses de lectura.",
  "Ha meghívó linket kaptál, és az böngészőben nyílt meg, másold ide az egészet — innen az app váltja be.":
    "Si recibiste un enlace de invitación y se abrió en el navegador, pégalo aquí entero — la app lo canjeará.",
  "Meghívó beváltása":
    "Canjear invitación",
  "Eszköz-diagnosztika":
    "Diagnóstico del dispositivo",
  "Értesítés erről a szobáról":
    "Notificación sobre esta sala",
  "Ha valaki ír ide, jelezzen a telefonod — akkor is, ha az app be van zárva.":
    "Si alguien escribe aquí, que tu teléfono te avise — incluso con la app cerrada.",
  "Ez a másik út, és szándékosan marad meg. A meghívó link csak ott működik, ahol át is tudod küldeni. A kódot viszont be lehet mondani telefonon vagy rádión, le lehet írni egy papírra, le lehet adni morzével — nyolc karakter, és kész.":
    "Esta es la otra vía, y se mantiene a propósito. Un enlace de invitación solo sirve donde puedes enviarlo. En cambio, el código se puede dictar por teléfono o radio, escribir en un papel o transmitir en Morse — ocho caracteres y listo.",
  "Aki a kódot ismeri, kérelmet küld; te döntöd el, beengeded-e. A jóváhagyással a te készüléked adja át neki a szoba kulcsát, a szerver nem látja.":
    "Quien conoce el código envía una solicitud; tú decides si le dejas entrar. Al aprobar, tu dispositivo le entrega la clave de la sala — el servidor no la ve.",
  "Profil":
    "Perfil",
  "Profilkép":
    "Foto de perfil",
  "A neved mellett jelenik meg. Nem kötelező.":
    "Aparece junto a tu nombre. No es obligatorio.",
  "Húzd a képet a körben, a csúszkával nagyíts. Csak a körben látszó rész kerül mentésre.":
    "Arrastra la imagen dentro del círculo, amplía con el control. Solo se guarda la parte visible en el círculo.",
  // TELJES FORDITAS-KOR (Fonok, 2026-10-05 21:36: "az osszes forditas megtortenjen mindenhol")
  "Válaszd ki, mit szeretnél: adást vagy vételt.":
    "Elige qué quieres: enviar o recibir.",
  "Morze kulcs":
    "Manipulador Morse",
  "Kopogás (rács-kód)":
    "Golpecitos (código de golpes)",
  "72h csomag":
    "Kit de 72 h",
  "Export":
    "Exportar",
  "Egészségügyi adatok":
    "Datos de salud",
  "Nem kötelező, de ebből jön a vészkártyád, és ebből számoljuk, mi kell a csomagba.":
    "No es obligatorio, pero de aquí sale tu tarjeta de emergencia, y con esto calculamos qué va en el kit.",
  "Lámpa-üzemidő":
    "Autonomía de la linterna",
  "Meddig világít egy fejlámpa vagy zseblámpa":
    "Cuánto dura un frontal o una linterna",
  "Lámpa-üzemidő: meddig világít":
    "Autonomía de la linterna: cuánto dura",
  "Lámpa vagy fejlámpa":
    "Linterna o frontal",
  "Üzemmód":
    "Modo",
  "LED / fényerő-osztály":
    "LED / clase de brillo",
  "LED áramfelvétel (mA)":
    "Consumo del LED (mA)",
  "Elem / akku típusa":
    "Tipo de pila o batería",
  "Kapacitás (mAh)":
    "Capacidad (mAh)",
  "Hány elem/akku (párhuzamosan összeadódó kapacitás)":
    "Cuántas pilas (en paralelo la capacidad se suma)",
  "A gyártói adat a fényerő NÉVLEGES üzemideje — a valóságban a hideg, az elem életkora és a fokozatos elhalványulás ennél mindig kevesebbet ad. A saját megadásos számításnál a névleges kapacitásból 15 százalékot levonunk erre.":
    "El dato del fabricante es la autonomía NOMINAL para ese brillo; en la realidad el frío, la edad de la pila y el atenuado gradual siempre dan menos. En el cálculo manual restamos un 15 por ciento de la capacidad nominal por eso.",
  "Ezt látják a többiek":
    "Esto es lo que ven los demás",
  "minden szobában":
    "en todas las salas",
  ". Egy nevet használ a rendszer; a szobába lépéskor ezt kérdezi meg, ha még nincs megadva.":
    ". El sistema usa un solo nombre; lo pregunta al entrar en una sala, si aún no está puesto.",
  "Szalag ✕":
    "Cinta ✕",
  "Saját térképek":
    "Tus propios mapas",
  // Igazitas finomhangolasa (Fonok kerese 2026-10-05 20:52)
  "Finomhangolás":
    "Ajuste fino",
  "Alaphelyzet":
    "Restablecer",
  "A saját térkép a helyén van.":
    "Tu propio mapa está en su sitio.",
  // UJ PONT felvevo a terkepen (Fonok kerese 2026-10-05 20:37)
  "Új pont":
    "Nuevo punto",
  "Menedék":
    "Refugio",
  "Tűzrakó":
    "Hoguera",
  "Veszély":
    "Peligro",
  "Találkozó":
    "Punto de encuentro",
  "A pont neve":
    "Nombre del punto",
  "Koppints a térképre újra, ha arrébb tennéd. A pont csak a Mentéssel jön létre.":
    "Toca el mapa otra vez para moverlo. El punto se crea solo al guardar.",
  // VAD- ES ROVAR-TAVOLTARTO (Fonok kerese 2026-10-05 20:16)
  "Vad- és rovar-távoltartó":
    "Disuasor de fauna e insectos",
  "Vadak ellen":
    "Contra la fauna",
  "Szúnyogok ellen":
    "Contra los mosquitos",
  "Vad-frekvencia":
    "Frecuencia para la fauna",
  "Szúnyog-frekvencia":
    "Frecuencia para mosquitos",
  "Hz, lassan söprő hang. A legtöbb felnőtt ezt már nem hallja.":
    "Hz, un tono que barre lentamente. La mayoría de los adultos ya no lo oye.",
  "Hz, folyamatos hang.":
    "Hz, un tono continuo.",
  "AMIT EZ TUD ÉS AMIT NEM. A telefon hangszórója ilyen magas hangon lényegesen halkabb, mint a vészsípnál, és ezt a készüléked dönti el, nem az app. A szúnyogriasztó ultrahangnak nincs bizonyított hatása, több vizsgálat is eredménytelennek találta. Nagyobb vadnál a bizonyítottan működő eszköz a HANGOS, EMBERI FÜLNEK IS HALLHATÓ zaj, tehát az SOS lap vészsípja, nem ez. Ezt a két gombot akkor használd, ha ki akarod próbálni, és ne építs rá védelmet.":
    "LO QUE ESTO PUEDE Y LO QUE NO. A un tono tan agudo el altavoz de tu teléfono suena bastante más bajo que con el silbato de emergencia, y eso lo decide tu dispositivo, no la aplicación. El ultrasonido contra mosquitos no tiene efecto demostrado; varios estudios lo encontraron ineficaz. Contra fauna mayor el medio con efecto demostrado es el ruido FUERTE y AUDIBLE TAMBIÉN PARA EL OÍDO HUMANO, es decir el silbato de la página SOS, no esto. Usa estos dos botones si quieres probarlos, y no bases tu protección en ellos.",
  "Ne tartsd a füledhez, és ne irányítsd más fülére. Kutya, macska és más házi állat jóval magasabbra hall, mint az ember: nekik ez zavaró lehet akkor is, ha te nem hallod.":
    "No lo acerques a tu oído ni lo dirijas al oído de otra persona. Los perros, gatos y otras mascotas oyen mucho más agudo que las personas: esto puede molestarlos aunque tú no oigas nada.",
  // TERKEP mester-gomb es funkcio-tabla (Fonok kerese 2026-10-05 20:11)
  "Térkép-funkciók":
    "Funciones del mapa",
  "Helyzet és pontok":
    "Posición y puntos",
  "Mérés":
    "Medición",
  "Térkép és tároló":
    "Mapa y almacenamiento",
  // TERKEP lap: data-i18n kulcsok, amiknek SEM a PP_SZOTAR-ban, SEM itt nem volt forditasa
  "Vissza":
    "Atrás",
  "Kész":
    "Hecho",
  "Tárolt térkép törlése":
    "Borrar el mapa guardado",
  "Saját térkép hozzáadása":
    "Añadir tu propio mapa",
  "Saját térkép: fotózz le egy turista- vagy katonai térképet, és igazítsd rá az alaptérképre 2–3 ismert pont (falu, csúcs, útkereszteződés) párosításával. A kép rétegként az alaptérkép fölé kerül, átlátszósága állítható, és a készüléken tárolódik, térerő nélkül is megvan. A rajzolt, nem méretarányos térképeknél az igazítás közelítő. A pontjaidat ugyanúgy teszed le, mint eddig: valódi koordinátán tárolódnak, a rétegtől függetlenül.":
    "Tu propio mapa: fotografía un mapa de senderismo o militar y alinéalo sobre el mapa base emparejando 2-3 puntos conocidos (un pueblo, una cima, un cruce). La imagen queda como una capa sobre el mapa base, su transparencia es ajustable y se guarda en el dispositivo, así la tienes sin cobertura. En mapas dibujados, no a escala, la alineación es aproximada. Tus puntos los colocas como siempre: se guardan en coordenadas reales, independientemente de la capa.",
  // TERKEP lebego gomb-panel (Fonok kerese 2026-10-05 19:56)
  "Gombok elrejtése":
    "Ocultar los botones",
  "Gombok megjelenítése":
    "Mostrar los botones",
  // FAX kep-igazito (Fonok kerese 2026-10-05 19:50): forgatas + zoom + tolas a kereten belul
  "Ez nem papír-fax: egy képet küld hangként, szabványos SSTV módban, amit bármely SSTV-vevő megért. A keret ezért kötött: 320x256 képpont, fekvő. Egy gépelt A4-es laphoz ez kevés, de egy rövid, nagy betűs kézírás olvashatóan átmegy.":
    "Esto no es un fax de papel: envía una imagen como sonido, en modo SSTV estándar, que cualquier receptor SSTV entiende. Por eso el marco es fijo: 320x256 píxeles, horizontal. Para una página A4 escrita a máquina es poco, pero una nota corta con letra grande llega legible.",
  "Forgatás":
    "Girar",
  "Teljes kép":
    "Imagen completa",
  "Nagyítás":
    "Zoom",
  "A keretbe eső rész:":
    "La parte dentro del marco:",
  "képpont a forrásból":
    "píxeles del original",
  "Húzd a képet a helyére, két ujjal nagyíthatsz, a Forgatás kilencven fokonként fordít. Amit a keretben látsz, pontosan az megy el. A Forgatás és a Teljes kép újra beilleszti a képet a keretbe, onnan tudsz belezoomolni.":
    "Arrastra la imagen a su sitio, pellizca con dos dedos para ampliar, y Girar la gira noventa grados. Lo que ves en el marco es exactamente lo que se envía. Girar e Imagen completa vuelven a ajustar la imagen al marco, y desde ahí puedes ampliar.",
  // FAX (SSTV) -- allo kep kezelese + a ket fax lap feliratai, 2026-10-05 (Fonok: 'ne vesszen el ... egy csomo adat')
  "Fax küldés":
    "Enviar fax",
  "Fax vétel":
    "Recibir fax",
  "Álló kép":
    "Imagen vertical",
  "Elforgatva, teljes felbontás":
    "Girada, resolución completa",
  "Egész kép, fekete sávokkal":
    "Imagen completa, con bandas negras",
  "Kitöltés, a széleket levágja":
    "Rellenar el marco, recortando los bordes",
  "Álló kép elforgatva, teljes felbontás:":
    "Imagen vertical girada, resolución completa:",
  "A keretre vágva, a széleit levágta:":
    "Recortada al marco, bordes cortados:",
  "Egész kép, fekete sávokkal:":
    "Imagen completa, con bandas negras:",
  "Egész kép a keretben:":
    "Imagen completa en el marco:",
  "képpont a 320×256-os keretből":
    "píxeles del marco de 320×256",
  "A saját vételünk egyelőre csak Martin M1-et fejt vissza. A többi mód adásra kész, és egy szabványos SSTV-vevő (Robot36, MMSSTV) veszi, de ezt a telefonod nem tudja magának visszaolvasni.":
    "Nuestro propio receptor por ahora solo decodifica Martin M1. Los demás modos están listos para transmitir, y un receptor SSTV estándar (Robot36, MMSSTV) los recibe, pero tu teléfono todavía no puede releerlos por sí mismo.",
  "A fax kerete fekvő, 320x256 képpont, ezt a mód szabványa adja. Álló képnél az elforgatás használja ki a legjobban a keretet, tehát ott veszik el a legkevesebb részlet, a vevő oldalán viszont fordítsd el a telefont. A kitöltés levágja a kép tetejét és alját. Fekvő képnél mindhárom beállítás ugyanazt adja.":
    "El marco del fax es horizontal, 320x256 píxeles, lo fija la norma del modo. En una imagen vertical, girarla aprovecha mejor el marco, así se pierde el menor detalle, pero gira el teléfono en el lado receptor. El relleno recorta la parte superior e inferior de la imagen. En una imagen horizontal los tres ajustes dan el mismo resultado.",
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
  "Számológép": "Calculadora",
  "Nagy gombok, szalag, memória — kesztyűben és sötétben is": "Teclas grandes, cinta, memoria — también con guantes y a oscuras",

  // --- ATTRIBUTUM-SZOVEGEK (2026-08-26, Istvan). Thomas merte az angol keszlet
  // felvetele kozben: a `placeholder`/`title`/`aria-label` magyarul allt. A fordito
  // MAR bejarja az attributumokat -- ezek a kulcsok hianyoztak a szotarbol.
  // A `pl.` MAGYAR roviditès: nyelvenkent mas (e.g. / z. B. / p. ej. / np. / ex. / напр.),
  // es a tizedesjel is (`1013.2` angolul, `1013,2` a tobbin).
  "Keresés a tételek közt": "Buscar entre los artículos",
  "Mégse": "Cancelar",
  "Szalag ürítése": "Vaciar la cinta",
  "Visszavonás": "Deshacer",
  "a tétel neve": "el nombre del artículo",
  "az eszköz neve": "el nombre del dispositivo",
  "hány darab": "cuántas unidades",
  "kalória egységenként": "calorías por unidad",
  "mennyiség": "cantidad",
  "sor törlése": "eliminar la fila",
  "Új lap": "Hoja nueva",
  "Írd be a szöveget, majd koppints a lapra": "Escribe el texto y luego toca la hoja",
  "pl. 15": "p. ej. 15",
  "pl. 18": "p. ej. 18",
  "pl. 85": "p. ej. 85",
  "pl. 500": "p. ej. 500",
  "pl. 47.4979, 19.0402": "p. ej. 47.4979, 19.0402",
  "pl. A Rh+": "p. ej. A Rh+",
  "pl. Anna": "p. ej. Anna",
  "pl. 1013,2": "p. ej. 1013,2",
  "pl. 6,5": "p. ej. 6,5",
  "pl. Feri": "p. ej. Paco",
  "pl. Otthon": "p. ej. Hogar",
  "pl. SOS Fonok": "p. ej. SOS Papá",
  "pl. inzulin": "p. ej. insulina",

  // --- NYOMTATOTT VESZKARTYA (2026-08-26, Istvan). Thomas merte: a nyomtatott lap
  // angol nyelven is vegig MAGYAR volt. A lap KULON ablakban keszul, tehat a DOM-bejaro
  // fordito nem eri el -- a szoveg a felepiteskor fordul (`ppForditSzoveg` a cardNyomtat-ban).
  "VÉSZKÁRTYA": "TARJETA DE EMERGENCIA",
  "CSALÁDI VÉSZKÁRTYA": "TARJETA DE EMERGENCIA FAMILIAR",
  "Születés:": "Nacimiento:",
  "Allergia:": "Alergias:",
  "Kontakt:": "Contacto:",
  "személyes QR": "QR personal",
  "családi QR": "QR familiar",
  "allergia:": "alergia:",
  "gyógyszer:": "medicación:",
  "A böngésző letiltotta az új ablakot. Engedélyezd, és próbáld újra.": "El navegador ha bloqueado la ventana nueva. Permítela e inténtalo de nuevo.",
  "Nincs profil, amiből kártyát csinálhatnék. A Háztartásnál vedd fel őket.": "No hay ningún perfil con el que hacer una tarjeta. Añádelos en Hogar.",

  "Otthon": "Casa",
  "Nyaraló": "Casa de vacaciones",
  "Hétvégi ház": "Casa de fin de semana",
  "Garázs": "Garaje",
  "Lakókocsi": "Caravana",
  "Jármű": "Vehículo",
  "Rejtési pont": "Escondite",
  "Egyéb": "Otros",
  "egyéb": "otros",
  "Gépjármű": "Vehículo a motor",
  "Autó": "Coche",
  "Autós": "En coche",
  "Motorkerékpár": "Motocicleta",
  "Elektromos bicikli": "Bicicleta eléctrica",
  "Elektromos roller": "Patinete eléctrico",
  "Utánfutó": "Remolque",
  "(motoros)": "(a motor)",
  "Megnevezés": "Denominación",
  "Név": "Nombre",
  "A neved": "Tu nombre",
  "Törlés": "Eliminar",
  "Mentés": "Guardar",
  "Mégsem": "Cancelar",
  "Hozzáadás": "Añadir",
  "Küldés": "Enviar",
  "Kilépés": "Salir",
  "Csatlakozás": "Conexión",
  "Csatlakozz": "Únete",
  "Nincs": "Ninguno",
  "Számold ki": "Calcular",
  "Kategória": "Categoría",
  "Cím": "Dirección",
  "Adat": "Datos",
  "Beállítások": "Ajustes",
  "Feloldás": "Desbloquear",
  "A feloldás": "El desbloqueo",
  "Zárolás": "Bloquear",
  "Értesítés": "Notificación",
  "Értesítés bekapcsolása": "Activar notificaciones",
  "Beolvasás kamerával": "Escanear con la cámara",
  "Betöltés fájlból": "Cargar desde archivo",
  "Fájl kiválasztása és mentés": "Elegir archivo y guardar",
  "Kép mentése": "Guardar imagen",
  "Kép választása": "Elegir imagen",
  "Betűsor másolása": "Copiar la cadena de caracteres",
  "Hangfájlból": "Desde archivo de audio",
  "English": "English",
  "Kommunikáció": "Comunicación",
  "Morze": "Morse",
  "Fax (SSTV)": "Fax (SSTV)",
  // 2026-10-19 (kartya 43a80047): "(SSTV)" kivetve; a feloldas a fiokhoz kotott, max. ket keszulek
  "Használati útmutató": "Guía de uso",
  "Fax": "Fax",
  "Fax: kép átküldése hangban, rádión is. Ugyanaz a gomb indít és állít.": "Fax: enviar una imagen dentro del sonido, también por radio. El mismo botón inicia y detiene.",
  "A kód a fiókodhoz tartozik, és legfeljebb két készüléken használhatod. A feloldott modulok offline is működnek, semmi nem zár le. Ha kódot kaptál, itt válthatod be.": "El código pertenece a tu cuenta y puedes usarlo en hasta dos dispositivos. Los módulos desbloqueados también funcionan sin conexión, nada se bloquea. Si has recibido un código, aquí puedes canjearlo.",
  "Feloldva ✓ A kód a fiókodhoz tartozik, legfeljebb két készüléken.": "Desbloqueado ✓ El código pertenece a tu cuenta, en hasta dos dispositivos.",
  "Üzenet": "Mensaje",
  "Hangüzenet": "Mensaje de voz",
  "Digitális üzenet": "Mensaje digital",
  "Helyi szoba": "Sala local",
  "Tudástár": "Base de conocimientos",
  "Vészkártya": "Tarjeta de emergencia",
  "Titkos QR": "QR secreto",
  "Biblia": "Biblia",
  "Imádság": "Oración",
  "Háztartás": "Hogar",
  "Alapismeretek": "Nociones básicas",
  "Élelmiszer és víz": "Alimentos y agua",
  "Egészségügy": "Salud",
  "Háborús övezet": "Zona de guerra",
  "SOS": "SOS",
  "Alaptérkép": "Mapa base",
  "Irattárca": "Cartera de documentos",
  "Dokumentum": "Documento",
  "Dokumentumok · nyílt (QR)": "Documentos · abiertos (QR)",
  "Dokumentumok · PIN-zár": "Documentos · bloqueo con PIN",
  "Dokumentumok és adatmentés": "Documentos y copia de seguridad",
  "Belépési és helyreállítási kódok": "Códigos de acceso y de recuperación",
  "Belépési kérelmek": "Solicitudes de acceso",
  "Gyakorlónap": "Día de práctica",
  "Csomaglista személyre és útra": "Lista de equipaje por persona y por viaje",
  "EDC: a mindennap magadnál hordott felszerelés": "EDC: el equipo que llevas contigo a diario",
  "Családtagok": "Miembros de la familia",
  "Családtag hozzáadása": "Añadir miembro de la familia",
  "Családtag törlése": "Eliminar miembro de la familia",
  "Családtagok · állatok · helyszínek": "Familia · animales · lugares",
  "Családtagok vészkártyái": "Tarjetas de emergencia de la familia",
  "Családi kártya (egy QR)": "Tarjeta familiar (un QR)",
  "Családi jelszó": "Contraseña familiar",
  "Háziállatok": "Animales domésticos",
  "Háziállat a felkészülésben": "El animal doméstico en la preparación",
  "+ Új háziállat": "+ Nuevo animal",
  "+ Új helyszín": "+ Nuevo lugar",
  "Állat hozzáadása": "Añadir animal",
  "Állat törlése": "Eliminar animal",
  "Faj": "Especie",
  "felnőtt férfi": "hombre adulto",
  "felnőtt nő": "mujer adulta",
  "gyermek": "niño",
  "csecsemő": "bebé",
  "fiú": "niño",
  "haszonállat": "animal de granja",
  "Helyszín hozzáadása": "Añadir lugar",
  "Helyszín törlése": "Eliminar lugar",
  "Helyszínek készültsége": "Grado de preparación de los lugares",
  "Ingatlanok és helyszínek": "Inmuebles y lugares",
  "Emelet": "Planta",
  "Alapterület (m²)": "Superficie (m²)",
  "GPS koordináta": "Coordenadas GPS",
  "Hány napra": "Para cuántos días",
  "Kalória": "Calorías",
  "Meddig elég az élelmed, és mennyi hiányzik": "Cuánto te dura la comida y cuánto falta",
  "Rádió-hatótáv": "Alcance de radio",
  "Meddig hallanak a sávtól és a tereptől függően": "Hasta dónde te oyen, según banda y terreno",
  "Kalória: meddig elég az élelmed": "Calorías: cuánto te dura la comida",
  "Hány felnőtt?": "¿Cuántos adultos?",
  "Hány gyerek? (kb. 12 év alatt)": "¿Cuántos niños? (menores de unos 12)",
  "Mit csináltok ezekben a napokban?": "¿Qué haréis esos días?",
  "Mi van a készletben?": "¿Qué hay en la reserva?",
  "+ Saját tétel hozzáadása": "+ Añadir tu propio artículo",
  "Vagy add meg egyben, ha tudod": "O indica el total, si lo sabes",
  "összes kilokalória (üresen hagyhatod)": "kilocalorías totales (puede quedar vacío)",
  "Mi ez? (pl. szárított hús)": "¿Qué es? (p. ej. carne seca)",
  "kcal/egység": "kcal/unidad",
  "mennyi": "cuánto",
  "bent maradunk, keveset mozgunk": "nos quedamos dentro, poco movimiento",
  "normál napi ügyintézés": "día normal de gestiones",
  "fizikai munka, gyaloglás": "trabajo físico, caminar",
  "Rizs": "Arroz",
  "Száraztészta": "Pasta seca",
  "Liszt": "Harina",
  "Bab, lencse, borsó": "Alubias, lentejas, guisantes",
  "Zabpehely": "Copos de avena",
  "Cukor, méz": "Azúcar, miel",
  "Olaj, zsír": "Aceite, grasa",
  "Húskonzerv (400 g)": "Conserva de carne (400 g)",
  "Zöldségkonzerv (400 g)": "Conserva de verduras (400 g)",
  "Tejpor": "Leche en polvo",
  "Keksz, kétszersült": "Galletas, pan tostado",
  "Csokoládé, müzliszelet": "Chocolate, barrita de cereales",
  "Rádió: meddig hallanak": "Radio: hasta dónde te oyen",
  "Milyen sávon?": "¿Qué banda?",
  "Adóteljesítmény (watt)": "Potencia de emisión (vatios)",
  "Milyen terepen?": "¿Qué terreno?",
  "Milyen magasan van az antennád? (méter)": "¿A qué altura está tu antena? (metros)",
  "És a másiké?": "¿Y la del otro?",
  "Mekkora távolságot szeretnél áthidalni? (km, üresen hagyhatod)": "¿Qué distancia querrías cubrir? (km, puede quedar vacío)",
  "nyílt, sík terep": "terreno abierto y llano",
  "dombos, hullámos": "ondulado, con colinas",
  "erdő, sűrű növényzet": "bosque, vegetación densa",
  "város, beépített": "ciudad, zona construida",
  "hegyvidék, völgyben": "montaña, en un valle",
  "(db)": "(uds.)",
  "(kg)": "(kg)",
  "(liter/kg)": "(litro/kg)",
  "(egység)": "(unidad)",
  "Hány napra kell?": "¿Para cuántos días hace falta?",
  "Hány napra tervezel itt": "Para cuántos días planeas aquí",
  "Vércsoport": "Grupo sanguíneo",
  "Allergia": "Alergia",
  "Allergiák": "Alergias",
  "Gyógyszer": "Medicamento",
  "Gyógyszerek": "Medicamentos",
  "Érszorító": "Torniquete",
  "Elsősegélykészlet": "Botiquín de primeros auxilios",
  "Glutén": "Gluten",
  "Diófélék": "Frutos secos",
  "Földimogyoró": "Cacahuete",
  "Hal / tenger gyümölcsei": "Pescado / marisco",
  "Darázs- és méhcsípés": "Picadura de avispa y abeja",
  "Kullancsriasztó": "Repelente de garrapatas",
  "Naptej": "Crema solar",
  "CPAP": "CPAP",
  "Bébiétel": "Comida para bebés",
  "Állateledel": "Comida para animales",
  "Tisztálkodó eszközök": "Artículos de higiene",
  "Női higiéniai termékek": "Productos de higiene femenina",
  "Kannás víz": "Agua en garrafa",
  "Palackos víz": "Agua embotellada",
  "Száraz élelmiszer": "Alimentos secos",
  "Konzerv": "Conservas",
  "MRE pack": "Pack MRE",
  "Romlandó": "Perecedero",
  "Hosszú távú": "A largo plazo",
  "30 napos": "30 días",
  "72 órás": "72 horas",
  "Menekülőzsák": "Mochila de evacuación",
  "Téli túra": "Excursión de invierno",
  "Vízi túra": "Excursión acuática",
  "Hálózsák": "Saco de dormir",
  "Derékalj": "Esterilla",
  "Párna": "Almohada",
  "Sátor/sátorlap": "Tienda/lona",
  "Fejlámpa": "Linterna frontal",
  "Kézilámpa": "Linterna de mano",
  "Munkalámpa": "Lámpara de trabajo",
  "Szikravető": "Pedernal",
  "Gyújtós": "Astillas para encender",
  "Főzőfej": "Quemador de cocina",
  "Spiritusz égő": "Hornillo de alcohol",
  "Hobokályha": "Estufa hobo",
  "Fa tüzelésű kályha": "Estufa de leña",
  "Dízel kályha": "Estufa de gasóleo",
  "Vegyi melegítő": "Calentador químico",
  "Ágyfűtés": "Calefacción de la cama",
  "Gázpalack": "Bombona de gas",
  "Tüzifa": "Leña",
  "Fűtőolaj": "Gasóleo de calefacción",
  "Fa, kályhában": "Leña, en la estufa",
  "Hideg időjárási öltözet": "Ropa para clima frío",
  "Meleg időjárási öltözet": "Ropa para clima cálido",
  "EDC csomag felszerelései": "Equipo del pack EDC",
  "Víztisztító tabletta": "Pastillas potabilizadoras",
  "Vízszűrő": "Filtro de agua",
  "Ciszterna": "Cisterna",
  "Esővíz": "Agua de lluvia",
  "Esővíz: mennyi gyűlik össze": "Agua de lluvia: cuánta se acumula",
  "Hűtő": "Nevera",
  "Áram": "Electricidad",
  "Áramforrás": "Fuente de electricidad",
  "Áram: mit tudsz róla üzemeltetni, és meddig": "Electricidad: qué puedes alimentar con ella y durante cuánto tiempo",
  "Powerbank": "Batería externa",
  "Power station": "Estación de energía",
  "Tank / akku": "Depósito / batería",
  "Kapacitás (Wh/db)": "Capacidad (Wh/ud.)",
  "Autó-/szünetmentes akku 100 Ah": "Batería de coche/SAI 100 Ah",
  "Anker 521 PowerHouse (256 Wh)": "Anker 521 PowerHouse (256 Wh)",
  "Bluetti AC200L (2048 Wh)": "Bluetti AC200L (2048 Wh)",
  "Bluetti EB70 (716 Wh)": "Bluetti EB70 (716 Wh)",
  "EcoFlow Delta 2 (1024 Wh)": "EcoFlow Delta 2 (1024 Wh)",
  "EcoFlow River 2 (256 Wh)": "EcoFlow River 2 (256 Wh)",
  "EcoFlow River 2 Pro (768 Wh)": "EcoFlow River 2 Pro (768 Wh)",
  "Szolárpanel": "Panel solar",
  "Üzemanyag": "Combustible",
  "Üzemanyag (mobilitás)": "Combustible (movilidad)",
  "Üzemanyag-készlet": "Reserva de combustible",
  "benzin": "gasolina",
  "dízel": "gasóleo",
  "Fogyasztás (/100 km)": "Consumo (/100 km)",
  "Most mennyi van benne": "Cuánto hay ahora dentro",
  "tele": "lleno",
  "háromnegyed": "tres cuartos",
  "fele": "la mitad",
  "negyede": "un cuarto",
  "ötöde": "un quinto",
  "tizede": "un décimo",
  "üres": "vacío",
  "Fűtés": "Calefacción",
  "Fűtés áram nélkül is?": "¿Calefacción también sin electricidad?",
  "Fűtés hatásfoka (%)": "Rendimiento de la calefacción (%)",
  "Fűtés: mennyi tüzelő kell": "Calefacción: cuánto combustible hace falta",
  "Fűtött terület (m²)": "Superficie calefactada (m²)",
  "Átlagos (100 W/m²)": "Media (100 W/m²)",
  "igen (kandalló, kályha, fa)": "sí (chimenea, estufa, leña)",
  "igen (kút kézi szivattyúval, ciszterna)": "sí (pozo con bomba manual, cisterna)",
  "Energia (kcal/100 g)": "Energía (kcal/100 g)",
  "Emelkedés összesen (m)": "Desnivel total (m)",
  "5% nátrium-hipoklorit (a szokásos háztartási)": "5% de hipoclorito de sodio (la lejía doméstica habitual)",
  "10% (ipari)": "10% (industrial)",
  "A hipó töménysége (nézd meg az üvegen)": "Concentración de la lejía (míralo en la botella)",
  "WPM": "WPM",
  "Hz": "Hz",
  "Hang:": "Sonido:",
  "Hangerő:": "Volumen:",
  "Hangmagasság:": "Tono:",
  "Fényerő:": "Brillo:",
  "Fehér": "Blanco",
  "hang és fény, hálózat nélkül": "sonido y luz, sin red",
  "Vétel sebesség (magától követi a jelet, kézzel is állíthatod):": "Velocidad de recepción (sigue la señal sola, también puedes ajustarla a mano):",
  "Vétel-sebesség: magától követi a vett Morze tempóját, és a csúszkát is odaállítja. Kézzel is állíthatod, onnan követi tovább.": "Velocidad de recepción: sigue sola el ritmo del Morse recibido y mueve el control deslizante. También puedes ajustarla a mano; desde ahí sigue.",
  "Vétel sebesség (állítsd a vett Morze tempójához):": "Velocidad de recepción (ajústala al ritmo del Morse recibido):",
  "Érzékenység (balra érzékenyebb, jobbra szigorúbb a zajra):": "Sensibilidad (a la izquierda más sensible, a la derecha más estricta con el ruido):",
  "Ha nem indul a kamera.": "Si la cámara no se inicia.",
  "Internet nem kell.": "No hace falta internet.",
  "A szoba képe": "Imagen de la sala",
  "A szoba kódja": "Código de la sala",
  "Helyzet (GPS)": "Posición (GPS)",
  "Helyzetem küldése": "Enviar mi posición",
  "A mostani helyzetem": "Mi posición actual",
  "Iratai az Irattárcában": "Sus documentos en la Cartera de documentos",
  "Amikor akut helyzetben kell döntened": "Cuando tienes que decidir en una situación aguda",
  "Amikor éjszaka nem hagy aludni a félelem": "Cuando de noche el miedo no te deja dormir",
  "Gyerekekkel és idősekkel": "Con niños y personas mayores",
  "Amit a rendszer garantál:": "Lo que el sistema garantiza:",
  "Amit nem garantál:": "Lo que no garantiza:",
  "Amit vészhelyzetben tudni kell róla (nem kötelező)": "Lo que hay que saber sobre ella en una emergencia (no obligatorio)",
  "Ez a közös titok. Aki ismeri, az olvassa a kódjaidat, aki nem, annak értelmetlen betűsor. Add meg ugyanazt a jelszót azon a készüléken is, amelyik olvasni fogja.": "Este es el secreto compartido. Quien lo conoce lee tus códigos; para los demás es una cadena de caracteres sin sentido. Introduce la misma contraseña también en el dispositivo que vaya a leerlos.",
  "PIN beállítása": "Establecer el PIN",
  "Állíts be egy PIN-t (4-6 számjegy)": "Establece un PIN (4-6 dígitos)",
  "Biblia letöltése": "Descargar la Biblia",
  "Ezen a készüléken még nincs feloldott modul.": "En este dispositivo todavía no hay ningún módulo desbloqueado.",
  "Ezt látják a többiek. Ugyanaz, mint a helyi szobában.": "Esto es lo que ven los demás. Lo mismo que en la sala local.",
  "Előbb vedd fel a Háztartásnál, kik vagytok — a lista onnan jön.": "Registra primero en Hogar quiénes sois — la lista viene de ahí.",
  "Előbb vedd fel a Háztartásnál, kik vagytok. A lista abból dolgozik.": "Registra primero en Hogar quiénes sois. La lista trabaja con esos datos.",
  "Előbb vegyél fel helyszínt a Háztartásnál. Alapesetben az otthon az első.": "Añade primero un lugar en Hogar. Por defecto la casa es el primero.",
  "A törlés itt van, nem a listában — hogy ne lehessen véletlenül megnyomni.": "La eliminación está aquí, no en la lista — para que no se pueda pulsar por accidente.",
  "A mentős beolvashatja. Az adat a QR-ben van, nem megy szerverre.": "El sanitario puede escanearlo. Los datos están en el QR y no van a ningún servidor.",
  "Egészségügyi vészhelyzeti adatok. A mentős beolvashatja (nyílt QR). Helyben tárolva.": "Datos médicos de emergencia. El sanitario puede escanearlos (QR abierto). Almacenados localmente.",
  "Egészségügyi adatok (nem kötelező, de ebből tudjuk, mi kell a csomagba)": "Datos médicos (no obligatorios, pero de ellos sabemos qué hace falta en el paquete)",
  "Allergia (koppints, amennyi kell — a mezőbe írja be, ott át is írhatod)": "Alergia (toca tantas veces como haga falta — se escribe en el campo, donde también puedes modificarla)",
  "Kié (üresen hagyva: közös)": "De quién es (dejado en blanco: común)",
  "Melyik készlethez tartozik (több is lehet)": "A qué reserva pertenece (pueden ser varias)",
  "Tárolási hely (több is lehet)": "Lugar de almacenamiento (pueden ser varios)",
  "A koordináta többféle alakban mehet:": "Las coordenadas se pueden indicar en varios formatos:",
  "Három rövid jel, szünet, ismétlés — ez a nemzetközi vészjelzés. Hangosabban és tovább hallatszik, mint a kiabálás.": "Tres señales cortas, pausa, repetición — esta es la señal internacional de emergencia. Se oye más fuerte y más lejos que un grito.",
  "A kód alatti betűsor UGYANEZ az adat. Faxon a képet küldd, morzével a betűsort.": "La cadena de caracteres bajo el código contiene LOS MISMOS datos. Por fax envía la imagen, por Morse la cadena.",
  "A lejátszás ugyanazzal a gombbal indul és áll. Nincs külön Állj gomb — ha újra rákoppintasz, leáll.": "La reproducción se inicia y se detiene con el mismo botón. No hay un botón Parar aparte — si lo tocas de nuevo, se detiene.",
  "A wattóra és a watt nem ugyanaz, és ezt szokás összekeverni.": "El vatio-hora y el vatio no son lo mismo, y suelen confundirse.",
  "A wattóra (Wh) azt mondja meg, MEDDIG megy; a watt (W) azt, hogy MIT tudsz egyáltalán ráakasztani. Egy 2000 wattórás gép sem indít el egy 2000 wattos vízforralót, ha csak 600 wattot tud leadni — akkor sem, ha tele van.": "El vatio-hora (Wh) dice CUÁNTO TIEMPO funciona; el vatio (W), QUÉ puedes conectarle en absoluto. Ni siquiera un aparato de 2000 vatios-hora arranca un hervidor de 2000 vatios si solo puede entregar 600 vatios — ni aunque esté lleno.",
  "Helyszínenként: kik érkeznek oda, hány napra, és elég-e az ott lévő víz és élelem.": "Por lugar: quién llega allí, para cuántos días, y si bastan el agua y la comida que hay allí.",
  "Telepítés a kezdőképernyőre": "Añadir a la pantalla de inicio",
  "Nemzetközi vészjelzés Morzéval: SOS (··· ─── ···), folyamatosan ismételve. Fénnyel, hang nélkül — a hangjelzés lent külön van, mert az mást tud.": "Señal internacional de emergencia en Morse: SOS (··· ─── ···), repetida continuamente. Con luz, sin sonido — la señal sonora está aparte más abajo, porque hace otra cosa.",
  "TEKERD FEL A HANGERŐT. Az app a telefon hangerejét nem tudja felülírni, tehát ha az le van halkítva, a síp is halk lesz.": "SUBE EL VOLUMEN. La aplicación no puede anular el volumen del teléfono, así que si está bajo, el silbato también sonará flojo.",
  "Hz. A 3-4 kHz a legjobban hallható tartomány, ezért sípol ott a mentőmellény sípja is.": "Hz. De 3 a 4 kHz es la banda que mejor se oye, por eso silba ahí también el silbato del chaleco salvavidas.",
  "Percenként 110 koppanás. Nyomd a mellkas közepét a koppanás ütemére, körülbelül 5-6 centit, és hagyd teljesen visszaemelkedni.": "110 pulsaciones por minuto. Presiona el centro del pecho al ritmo de los toques, unos 5-6 centímetros, y deja que suba del todo.",
  "Ez ütemadó, nem oktatás. Mentő: 112. Ha van a közelben defibrillátor, valaki hozza, de te ne hagyd abba.": "Esto es un metrónomo, no una formación. Emergencias: 112. Si hay un desfibrilador cerca, que alguien lo traiga, pero tú no pares.",
  "— egységes európai segélyhívó (mentő, tűzoltó, rendőrség). Térerő nélkül is hívható, ha van bármilyen hálózat a közelben.": "— número único europeo de emergencias (ambulancia, bomberos, policía). Se puede llamar incluso sin cobertura propia, si hay cualquier red cerca.",
  "A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan. Töltsd ki a": "Tu tarjeta de emergencia (grupo sanguíneo, alergia, medicamentos, contacto) aparece aquí rápidamente. Rellénala en la sección",
  "szekcióban.": ".",
  "Írj be szöveget, játszd le hangként vagy fénnyel, vagy vegyél kamerával/mikrofonnal.": "Escribe un texto, reprodúcelo como sonido o luz, o recíbelo con la cámara/el micrófono.",
  "Próbaidő: még 14 nap. A lejárat után sem áll le semmi.": "Periodo de prueba: quedan 14 días. Tampoco se detiene nada al vencer.",
  "Szöveg": "Texto",
  "Sebesség:": "Velocidad:",
  "Ismétlés (folyamatos)": "Repetición (continua)",
  "Lejátszás": "Reproducir",
  "Villogtatás (Lejátszás és SOS is):": "Parpadeo (también en Reproducir y SOS):",
  "Képernyő": "Pantalla",
  "Vaku": "Flash",
  "Mindkettő": "Ambos",
  "Vétel: KAMERA (fény → szöveg)": "Recepción: CÁMARA (luz → texto)",
  "Kamera vétel indítása": "Iniciar recepción por cámara",
  "Nagyítás (távoli fényhez):": "Zoom (para luz lejana):",
  "Indítsd, és irányítsd a kamerát egy Morzét villogó fényre (pl. egy másik telefon vakuja). A háttér legyen sötét, a fény a kép KÖZEPÉN. A fény-küszöb magától hangolódik; a \"Fényerő\" sáv és a lámpa mutatja, mit lát. A \"Vétel sebesség\" csúszkát állítsd a vett Morze tempójához, amíg tisztán jönnek a betűk.": "Inicia y apunta la cámara a una luz que parpadee en Morse (por ejemplo el flash de otro teléfono). El fondo debe estar oscuro y la luz en el CENTRO de la imagen. El umbral de luz se ajusta solo; la barra \"Brillo\" y la lámpara muestran lo que ve. Ajusta el control \"Velocidad de recepción\" al ritmo del Morse recibido, hasta que las letras lleguen limpias.",
  "Vétel: MIKROFON (hang → szöveg)": "Recepción: MICRÓFONO (sonido → texto)",
  "Mikrofon vétel indítása": "Iniciar recepción por micrófono",
  "FONTOS: külön eszközről vedd (az egyik telefon lejátssza, a másikon fut a vétel) -- ugyanazon a telefonon a mikrofon foglalása miatt a lejátszás halkul. Tartsd a Morze-hangot a mikrofon közelébe. Csendes környezet a legjobb; a hangerő-sáv és a lámpa mutatja, mit hall. Kalibrálás: a \"Vétel sebesség\" csúszkát told lassan, amíg a szövegben tisztán, hibátlanul jönnek a betűk.": "IMPORTANTE: recibe desde otro dispositivo (un teléfono reproduce, en el otro corre la recepción) -- en el mismo teléfono la reproducción baja de volumen porque el micrófono está ocupado. Mantén el sonido Morse cerca del micrófono. Lo mejor es un entorno silencioso; la barra de volumen y la lámpara muestran lo que oye. Calibración: desplaza despacio el control \"Velocidad de recepción\" hasta que las letras lleguen limpias y sin errores en el texto.",
  "Tanuló: Morze → szöveg (kézi: illeszd be . és -, szóköz a betűk közt, / a szavak közt)": "Aprendizaje: Morse → texto (manual: inserta . y -, espacio entre letras, / entre palabras)",
  "A kétirányú kód-tábla (nemzetközi + magyar Á/É/Ö/Ü) és az interaktív tanuló a végleges appban bővül. Egyelőre a fenti mező visszafejt bármilyen beírt Morze-jelet.": "La tabla de códigos en ambos sentidos (internacional + Á/É/Ö/Ü húngaras) y el modo de aprendizaje interactivo se ampliarán en la aplicación final. Por ahora el campo de arriba descifra cualquier signo Morse introducido.",
  "Kép küldése hangként (Martin M1). Játszd egy másik telefon SSTV-vevőjébe vagy egy rádió mikrofonjába.": "Envío de imagen como sonido (Martin M1). Reprodúcelo en el receptor SSTV de otro teléfono o en el micrófono de una radio.",
  "Mód": "Modo",
  "Martin M1 (320×256, működik)": "Martin M1 (320×256, funciona)",
  "Robot36 (hamarosan)": "Robot36 (próximamente)",
  "Scottie S1 (hamarosan)": "Scottie S1 (próximamente)",
  "PD120 (hamarosan)": "PD120 (próximamente)",
  "Kép": "Imagen",
  "Kódolás és lejátszás": "Codificar y reproducir",
  "Küldéshez: a másik eszközön indíts SSTV-vevőt (pl. Robot36 vagy MMSSTV) Martin M1 módban, és tartsd a hangszórót a mikrofonjához. A VIS-fejléc automatikus, a vevő magától felismeri a módot. Egy kép ~114 másodperc.": "Para enviar: en el otro dispositivo inicia un receptor SSTV (por ejemplo Robot36 o MMSSTV) en modo Martin M1 y acerca el altavoz a su micrófono. La cabecera VIS es automática, el receptor reconoce el modo por sí solo. Una imagen dura unos 114 segundos.",
  "Vétel (hang → kép)": "Recepción (sonido → imagen)",
  "Vétel indítása": "Iniciar recepción",
  "Martin M1-et fogad. Tartsd a telefont a hangszóró vagy a rádió közelébe, és a kép soronként épül fel. Csendes környezet kell hozzá: a mikrofon minden mást is hall. Hangfájlból is megy, ha valaki felvételt küld.": "Recibe Martin M1. Acerca el teléfono al altavoz o a la radio, y la imagen se construye línea a línea. Hace falta un entorno silencioso: el micrófono también oye todo lo demás. También funciona desde un archivo de audio, si alguien envía una grabación.",
  "Készletezés": "Constitución de reservas",
  "Menedék és tábor": "Refugio y campamento",
  "Városi túlélés": "Supervivencia urbana",
  "Tájékozódás és mozgás": "Orientación y desplazamiento",
  "Jelek és időjárás olvasása": "Lectura de señales y del tiempo",
  "Közlekedés és mobilitás": "Transporte y movilidad",
  "Lelki felkészültség": "Preparación espiritual",
  "Tartós áramszünet": "Apagón prolongado",
  "Tűzvédelem otthon": "Protección contra incendios en casa",
  "Pénz és megélhetés": "Dinero y sustento",
  "Víznyerés és víztisztítás": "Obtención y potabilización del agua",
  "Mikro-önellátás": "Microautosuficiencia",
  "Új tétel": "Nuevo elemento",
  "Mennyiség": "Cantidad",
  "Mennyiség (db)": "Cantidad (uds.)",
  "Súly (gramm/db)": "Peso (gramos/ud.)",
  "Vonalkód / QR beolvasása": "Escanear código de barras / QR",
  "Lejárat (opcionális)": "Caducidad (opcional)",
  "Lejárat": "Caducidad",
  "Tétel adatlapja": "Ficha del elemento",
  "Tétel törlése": "Eliminar el elemento",
  "+6 hónap": "+6 meses",
  "+1 év": "+1 año",
  "+2 év": "+2 años",
  "+5 év": "+5 años",
  "Turista / domborzat": "Excursionista / relieve",
  "Műhold": "Satélite",
  "Pont ide, ahol vagyok": "Punto aquí, donde estoy",
  "Terület letöltése": "Descargar la zona",
  "Koppints a térképre pont hozzáadásához (menedék, víz, találkozópont). Ha ott": "Toca el mapa para añadir un punto (refugio, agua, punto de encuentro). Si",
  "állsz": "estás",
  ", ahová a pont való, a": " allí donde debe ir el punto,",
  "pontosabb: az a GPS-edet használja, nem azt, ahová az ujjad ér. A": "es más preciso: usa tu GPS, no el lugar donde llega tu dedo. El botón",
  "a mostani koordinátádat adja tovább üzenetben, a": "transmite tus coordenadas actuales en un mensaje, y",
  "Pontok kimentése": "Exportar los puntos",
  "pedig GPX-fájlba menti mindet, amit a térkép- és navigációs programok beolvasnak. A pontok és a jelenlegi pozíció helyben tárolódnak. A": "los guarda todos en un archivo GPX que los programas de mapas y navegación pueden leer. Los puntos y la posición actual se almacenan localmente. El botón",
  "a most látható kivágást menti a készülékre, három nagyítási szinten — utána térerő nélkül is megvan.": "guarda en el dispositivo la porción visible ahora, en tres niveles de zoom — después la tienes también sin cobertura.",
  "Rendszeres gyógyszerek": "Medicamentos habituales",
  "Rendszeres gyógyszer": "Medicamento habitual",
  "Krónikus betegségek": "Enfermedades crónicas",
  "Krónikus betegség": "Enfermedad crónica",
  "Vészhelyzeti kontakt (név, telefon)": "Contacto de emergencia (nombre, teléfono)",
  "QR-kód generálása": "Generar código QR",
  "A QR a fenti adatokat kódolja. Kihelyezheted a zárolt képernyődre vagy kinyomtatva a hátizsákodba.": "El QR contiene los datos de arriba. Puedes ponerlo en tu pantalla de bloqueo o impreso en la mochila.",
  "Mindenkinek, akinek van profilja a Háztartásnál. Az adat onnan jön: vércsoport, allergia, gyógyszer, betegség. A vészhelyzeti kontakt a fenti közös mezőből.": "Para todos los que tienen perfil en Hogar. Los datos vienen de allí: grupo sanguíneo, alergia, medicamentos, enfermedades. El contacto de emergencia procede del campo común de arriba.",
  "Még nincs profil. A Háztartásnál vedd fel, kik vagytok — mindenki kap egy kártyát.": "Todavía no hay perfil. Registra en Hogar quiénes sois — cada uno recibe una tarjeta.",
  "Mind nyomtatása": "Imprimir todas",
  "Megtérő ima": "Oración de conversión",
  "Letöltés": "Descargar",
  "halvány": "débil",
  "erős": "fuerte",
  "É": "N",
  "az üvegről olvasd le": "míralo en la botella",
  "‹ Fejezetek": "‹ Capítulos",
  "‹ Előző": "‹ Anterior",
  "Következő ›": "Siguiente ›",
  "A kiemeléseidhez előbb töltsd le a Bibliát.": "Para tus subrayados, descarga primero la Biblia.",
  "A teljes Károli-fordítás egyszer letöltődik (kb. 4 MB), és utána internet nélkül is elérhető marad.": "La traducción completa se descarga una sola vez (unos 4 MB) y después sigue estando disponible sin internet.",
  "Vészhelyzeti igék": "Versículos para emergencias",
  "Próféciák": "Profecías",
  "Kiemeléseim": "Mis subrayados",
  "Token tárca": "Cartera de tokens",
  "Titkos kódok PIN mögött, helyben tárolva. Ugyanaz a PIN nyitja, mint az Irattárcát.": "Códigos secretos tras un PIN, almacenados localmente. Los abre el mismo PIN que la Cartera de documentos.",
  "Új PIN (4-6 számjegy)": "Nuevo PIN (4-6 dígitos)",
  "TESZT ÜZEMMÓD: a PIN most": "MODO DE PRUEBA: el PIN es ahora",
  ", előre kitöltve. Éles használat előtt ez kikerül, és saját PIN-t adsz meg.": ", ya rellenado. Antes del uso real esto desaparece y estableces tu propio PIN.",
  "A web-demó nem ad operációs rendszer szintű titkosítást: a kódok a böngésző tárolójában vannak. Valódi seed-mondatot vagy éles banki kódot majd a végleges appba tegyél (biometrikus zár, titkosított tár). Itt a folyamatot próbáld ki. A teljes mentésbe ez a rész SOSEM kerül bele.": "La demo web no ofrece cifrado a nivel de sistema operativo: los códigos están en el almacenamiento del navegador. Una frase semilla real o un código bancario real ponlos solo en la aplicación final (bloqueo biométrico, almacenamiento cifrado). Aquí prueba el procedimiento. En la copia de seguridad completa esta parte NUNCA se incluye.",
  "Súgó — hogyan fizetek, hogyan kérek": "Ayuda — cómo pago, cómo pido",
  "Fizetés, három lépés.": "El pago, en tres pasos.",
  "1. Ő megmutatja az azonosító-QR-jét, vagy küld egy kérést. Te beolvasod: ettől nálad kitöltődik az űrlap.": "1. Él muestra su QR de identificación o envía una solicitud. Tú lo escaneas: con eso se rellena el formulario en tu dispositivo.",
  "2. Megadod az összeget és hogy miért, majd Fizetés elkészítése. A telefonod aláírja, és mutat egy QR-t.": "2. Introduces el importe y el motivo, y luego Preparar el pago. Tu teléfono lo firma y muestra un QR.",
  "Ő beolvassa ezt a QR-t.": "Él escanea ese QR.",
  "Az érték ekkor kerül át hozzá — a telefonja ellenőrzi az aláírást, és jóváírja.": "Solo entonces el valor pasa a él — su teléfono verifica la firma y lo abona.",
  "Pénzkérés.": "Solicitud de dinero.",
  "Kérek gírát, beírod mennyit és miért, kapsz egy QR-t. Ő beolvassa, és nála kitöltve áll a fizetés, csak jóvá kell hagynia.": "Pide gira, escribes cuánto y para qué, y recibes un QR. Él lo escanea y el pago le queda rellenado — solo tiene que confirmarlo.",
  "Miért két beolvasás?": "¿Por qué dos escaneos?",
  "Mert az ő kódja csak azt mondja meg, kinek és mennyit. Az értéket a te aláírásod viszi át, és az a te QR-edben van. Amíg ő nem olvasta be, a tétel nálad „átadásra vár” jelöléssel áll.": "Porque su código solo dice a quién y cuánto. El valor lo transfiere tu firma, y esa está en tu QR. Mientras él no lo haya escaneado, el apunte queda en tu dispositivo con la marca „pendiente de entrega”.",
  "Minden a két telefon között megy, kamerával és képernyővel. Se szerver, se térerő.": "Todo ocurre entre los dos teléfonos, con la cámara y la pantalla. Ni servidor ni cobertura.",
  "Van, ahol a böngésző nem tud QR-t olvasni (jellemzően iPhone Safari). Ilyenkor a Beillesztés szövegből gomb ugyanazt tudja: a fizetés elkészítése után a QR alatti Szöveg másolása gombbal átküldöd a tételt üzenetben, ő pedig a Beillesztés szövegből gombbal beveszi. Az ellenőrzés ugyanúgy megtörténik, az aláírás a szövegben is benne van.": "Hay casos en que el navegador no puede leer QR (normalmente Safari en iPhone). Entonces el botón Pegar desde texto hace lo mismo: tras preparar el pago, con el botón Copiar texto que hay bajo el QR envías el apunte en un mensaje, y él lo acepta con el botón Pegar desde texto. La verificación se hace igual, la firma también va dentro del texto.",
  "a nevedben más nem tud fizetni (a titkos kulcs a telefonodon marad), és egy aláírt tétel utólag nem módosítható észrevétlenül.": "nadie más puede pagar en tu nombre (la clave secreta permanece en tu teléfono), y un apunte firmado no se puede modificar después sin que se note.",
  "offline a kettős költést megelőzni nem lehet. Ha valaki ugyanazt a gírát két embernek adja, az akkor derül ki, amikor a két tétel találkozik — és a saját aláírása bizonyítja. Ezért érdemes időnként összefésülni a könyveket a közösségben.": "sin conexión no se puede impedir el doble gasto. Si alguien da la misma gira a dos personas, se descubre cuando los dos apuntes se encuentran — y su propia firma lo demuestra. Por eso conviene cotejar de vez en cuando los libros en la comunidad.",
  "Rekesz": "Compartimento",
  "Kripto-kulcsok": "Claves cripto",
  "Új bejegyzés": "Nueva entrada",
  "Seed-mondatnál a papír-másolat nem elavult ötlet: egy elveszett vagy letörölt telefon a kulcsot is viszi. Amit ide beírsz, azt tartsd meg máshol is.": "Con una frase semilla, la copia en papel no es una idea anticuada: un teléfono perdido o borrado se lleva también la clave. Lo que escribas aquí, guárdalo también en otro sitio.",
  "PIN-nel védett helyi tároló okmányokhoz (szig, jogosítvány, TAJ, biztosítás, forgalmi).": "Almacenamiento local protegido con PIN para documentos (DNI, permiso de conducir, tarjeta sanitaria, seguro, permiso de circulación).",
  "A PIN és a dokumentumok CSAK ezen az eszközön, a böngésződben tárolódnak — a vészkártyával ellentétben ezt csak te nyithatod meg. Figyelem: a web-demó nem nyújt OS-szintű titkosítást; VALÓDI okmányokat majd a végleges appba tölts (biometrikus zár, titkosított tár). Itt a folyamatot teszteld.": "El PIN y los documentos se almacenan SOLO en este dispositivo, en tu navegador — a diferencia de la tarjeta de emergencia, esto solo lo puedes abrir tú. Atención: la demo web no ofrece cifrado a nivel de sistema operativo; documentos REALES súbelos solo a la aplicación final (bloqueo biométrico, almacenamiento cifrado). Aquí prueba únicamente el procedimiento.",
  "Szűrés: kinek az iratait mutassuk": "Filtro: de quién mostramos los documentos",
  "Új dokumentum": "Nuevo documento",
  "Ehhez a dokumentumhoz: kié? Személy, állat vagy jármű. Ha egyiket sem jelölöd, közösként mentjük.": "Para este documento: ¿de quién es? Persona, animal o vehículo. Si no marcas ninguno, lo guardamos como común.",
  "Magyar": "Magyar",
  "véglegesen": "de forma definitiva",
  "szól erre a készülékre, nincs lejárata és nincs megújítás. Ha kódot kaptál, itt válthatod be.": "es válido para este dispositivo, sin caducidad y sin renovación. Si has recibido un código, aquí puedes canjearlo.",
  "Kód beváltása": "Canjear código",
  "Névjegy": "Acerca de",
  "PrepperPapa — vészhelyzeti prepper eszköztár.": "PrepperPapa — caja de herramientas para emergencias.",
  "Verzió:": "Versión:",
  "Web-demo a gyors próbához. A végleges app: Flutter, Google Play.": "Demo web para una prueba rápida. La aplicación final: Flutter, Google Play.",
  "Teljes fejadattal számol: 3 liter fő/nap. Ez a helyben maradáshoz és az autós úthoz való — nyaraló, tábor, otthon.": "Calcula con la ración completa: 3 litros por persona y día. Es para quedarse en el sitio y para el viaje en coche — casa de vacaciones, campamento, hogar.",
  "Ki tartozik a háztartáshoz és hol vannak a helyszíneid. A készültségi számítás ebből dolgozik.": "Quién pertenece al hogar y dónde están tus lugares. El cálculo del grado de preparación trabaja con estos datos.",
  "Még nincs családtag felvéve.": "Todavía no se ha añadido ningún miembro de la familia.",
  "Még nincs állat felvéve.": "Todavía no se ha añadido ningún animal.",
  "Még nincs jármű felvéve. Autó, kisbusz, lakókocsi vagy hajó lehet.": "Todavía no hay ningún vehículo. Puede ser un coche, una furgoneta, una caravana o un barco.",
  "Még nincs helyszín felvéve. Alapesetben az otthon az első.": "Todavía no se ha añadido ningún lugar. Por defecto la casa es el primero.",
  "Születési dátum": "Fecha de nacimiento",
  "Ki ő": "Quién es",
  "kiskorú": "menor",
  "Neme (gyereknél)": "Sexo (en niños)",
  "lány": "niña",
  "kutya": "perro",
  "macska": "gato",
  "Teherbírás (kg)": "Capacidad de carga (kg)",
  "Testtömeg (kg)": "Peso corporal (kg)",
  "Laktóz": "Lactosa",
  "Tojás": "Huevo",
  "Szója": "Soja",
  "Penicillin": "Penicilina",
  "Pollen": "Polen",
  "Poratka": "Ácaros del polvo",
  "Latex": "Látex",
  "Jód": "Yodo",
  "Típus": "Tipo",
  "· vagy egy bemásolt Google Térkép-link. Ha nem tudom értelmezni, szólok — üresen nem mentem el.": "· o un enlace de Google Maps pegado. Si no puedo interpretarlo, aviso — vacío no lo guardo.",
  "Megközelítés": "Acceso",
  "nem (csak árammal/gázzal)": "no (solo con electricidad/gas)",
  "Víz áram nélkül is?": "¿Agua también sin electricidad?",
  "nem (vezetékes/szivattyús)": "no (red/bomba)",
  "Napi fűtésigény (kWh)": "Demanda diaria de calefacción (kWh)",
  "Kijáratok száma": "Número de salidas",
  "Több": "Más",
  "Morze · fax · helyi szoba": "Morse · fax · sala local",
  "Térkép": "Mapa",
  "Kockázatelemzés": "Análisis de riesgos",
  "Mit vigyek?": "¿Qué llevo?",
  "Titkosított üzenet · helyzet · lista": "Mensaje cifrado · posición · lista",
  "Ezen a készüléken a böngésző nem éri el a légnyomás-szenzort, ezért kézzel kell bevinni az értéket. A telefonos appban magától mér majd. Addig is: írj be egy értéket, és a trendet innentől számolja.": "En este dispositivo el navegador no accede al sensor de presión, por eso hay que introducir el valor a mano. En la aplicación de teléfono medirá solo. Hasta entonces: introduce un valor y la tendencia se calculará desde aquí.",
  "Két mérés kell a trendhez.": "Para la tendencia hacen falta dos mediciones.",
  "Az első mérés óta eltelt idő:": "Tiempo desde la primera medición:",
  "Trendet húsz perctől mondok.": "La tendencia se muestra a partir de veinte minutos.",
  "Hézag van a mérésekben. Az előző mérés óta eltelt:": "Hay un hueco en las mediciones. Tiempo desde la medición anterior:",
  "A hézag óta eltelt idő:": "Tiempo desde el hueco:",
  "Közelítő trend: az utóbbi órákban hézag van a mérésekben, ezért az ablak elejét a hézag előtti utolsó mérésből számoltam.": "Tendencia aproximada: en las últimas horas hay un hueco en las mediciones, así que el inicio de la ventana se calculó con la última medición antes del hueco.",
  "Ha autóval hegyre mész, a nyomás esik, de nem jön vihar: száz méter emelkedés körülbelül 12 hPa. Ilyen napon ne vedd komolyan a jelzést.": "Si subes a la montaña en coche, la presión baja, pero no viene tormenta: cien metros de desnivel son unos 12 hPa. En un día así no te tomes en serio el aviso.",
  "Kalkulátor": "Calculadora",
  "Meddig visz el egy powerbank vagy egy akku": "Cuánto dura una batería externa o un acumulador",
  "Mennyi fa vagy gáz kell N napra": "Cuánta leña o gas hace falta para N días",
  "Mennyi gyűlik össze a tetőről": "Cuánta se acumula del tejado",
  "Menetidő": "Tiempo de marcha",
  "Meddig tart gyalog, és odaérsz-e világosban": "Cuánto se tarda a pie y si llegas con luz",
  "Villám": "Rayo",
  "Milyen messze van a vihar": "A qué distancia está la tormenta",
  "Víztisztítás": "Potabilización del agua",
  "Mennyi hipó kell, és meddig kell forralni": "Cuánta lejía hace falta y cuánto hay que hervir",
  "Mennyi víz": "Cuánta agua",
  "Milyen a víz": "Cómo es el agua",
  "Tiszta, átlátszó": "Limpia, transparente",
  "Zavaros, hideg vagy színes": "Turbia, fría o con color",
  "Tengerszint feletti magasság (méter)": "Altitud sobre el nivel del mar (metros)",
  "Saját / kézi megadás": "Propio / introducción manual",
  "Powerbank 20 000 mAh (~74 Wh)": "Batería externa 20 000 mAh (~74 Wh)",
  "Kapacitás (Wh)": "Capacidad (Wh)",
  "Max. teljesítmény (W)": "Potencia máx. (W)",
  "Jackery Explorer 1000: 1002 Wh tárolt energia, 1000 W folyamatos kimenet": "Jackery Explorer 1000: 1002 Wh de energía almacenada, 1000 W de salida continua",
  "Mit üzemeltetnél? (hány darab · watt · naponta mennyit)": "¿Qué querrías alimentar? (cuántas uds. · vatios · cuánto al día)",
  "nem használom": "no lo uso",
  "negyed óra": "cuarto de hora",
  "fél óra": "media hora",
  "1 óra": "1 hora",
  "2 óra": "2 horas",
  "3 óra": "3 horas",
  "4 óra": "4 horas",
  "5 óra": "5 horas",
  "6 óra": "6 horas",
  "8 óra": "8 horas",
  "10 óra": "10 horas",
  "12 óra": "12 horas",
  "16 óra": "16 horas",
  "egész nap": "todo el día",
  "Telefon töltés": "Carga del teléfono",
  "LED lámpa": "Lámpara LED",
  "Wifi router": "Router wifi",
  "Rádió, PMR": "Radio, PMR",
  "Laptop": "Portátil",
  "TV": "Televisor",
  "Szivattyú, kút": "Bomba, pozo",
  "Vízforraló": "Hervidor de agua",
  "Van napelemed?": "¿Tienes panel solar?",
  "Melyik évszakban?": "¿En qué estación?",
  "Milyen idő van?": "¿Qué tiempo hace?",
  "A panel névleges teljesítménye (W)": "Potencia nominal del panel (W)",
  "+ Saját eszköz hozzáadása": "+ Añadir tu propio aparato",
  "Mi ez? (pl. oxigénkoncentrátor)": "¿Qué es? (p. ej. concentrador de oxígeno)",
  "Megnézem a boltban ↗": "Verlo en la tienda ↗",
  "nyár (június-augusztus)": "verano (junio-agosto)",
  "tavasz (március-május)": "primavera (marzo-mayo)",
  "ősz (szeptember-november)": "otoño (septiembre-noviembre)",
  "tél (december-február)": "invierno (diciembre-febrero)",
  "derült, napos": "despejado, soleado",
  "változó, felhős": "variable, nublado",
  "borult, esős": "cubierto, lluvioso",
  "nincs napelem": "sin panel solar",
  "saját panel — megadom a wattot": "mi propio panel — indico los vatios",
  "Panel": "Panel",
  "Milyen a ház": "Cómo es la casa",
  "Jól szigetelt (60 W/m²)": "Bien aislada (60 W/m²)",
  "Rossz, régi (140 W/m²)": "Mala, antigua (140 W/m²)",
  "Mivel fűtesz": "Con qué calientas",
  "PB-gáz palackkal": "Con bombona de gas",
  "Tetőfelület vízszintes vetülete (m²)": "Proyección horizontal del tejado (m²)",
  "Mennyi eső esett vagy várható (mm)": "Cuánta lluvia ha caído o se espera (mm)",
  "Menetidő gyalog": "Tiempo de marcha a pie",
  "Távolság (km)": "Distancia (km)",
  "Milyen terep": "Qué terreno",
  "Jó út, sík (5 km/h)": "Buen camino, llano (5 km/h)",
  "Ösvény, erdei út (4 km/h)": "Sendero, camino forestal (4 km/h)",
  "Nehéz terep, hó, sár (3 km/h)": "Terreno difícil, nieve, barro (3 km/h)",
  "Mit viszel": "Qué llevas",
  "Könnyű, napi cucc": "Equipaje ligero, de diario",
  "Megpakolt hátizsák": "Mochila cargada",
  "Nehéz teher vagy gyerekkel": "Carga pesada o con niño",
  "Villám: milyen messze van": "Rayo: a qué distancia está",
  "Nyomd meg a villanáskor, aztán újra, amikor meghallod a dörgést.": "Pulsa al ver el relámpago y otra vez cuando oigas el trueno.",
  "Villanás": "Relámpago",
  "Jelszó": "Contraseña",
  "Jelszó mentése": "Guardar la contraseña",
  "Nincs saját jelszó.": "No hay contraseña propia.",
  "beállítva": "configurada",
  "Tudástár: a cikkekből most már tizennyolc helyen gomb vezet át az app funkcióira (Készlet, Vészkártya, Kockázatelemzés, Tudástár).": "Biblioteca: ahora en dieciocho lugares hay botones que llevan de los artículos a las funciones de la app (Inventario, Tarjeta de emergencia, Análisis de riesgos, Biblioteca).",
  "Irattárca és Token tárca: a tartalom mostantól titkosítva tárolódik, a kulcs a PIN-edből készül, a PIN-t nem tároljuk. Az első belépéskor a meglévő adatod magától átkerül titkosított formába. Fontos: elfelejtett PIN mellett a tartalom nem állítható vissza.": "Cartera de documentos y cartera de tokens: el contenido se guarda ahora cifrado, la clave se obtiene de tu PIN y el PIN no se guarda. En la primera apertura tus datos existentes pasan automáticamente a forma cifrada. Importante: si olvidas el PIN, el contenido no se puede recuperar.",
  "A kódok titkosítva tárolódnak ezen az eszközön: a kulcs a PIN-edből készül (AES-256), magát a PIN-t nem tároljuk. Ha elfelejted a PIN-t, a tartalom nem állítható vissza, ezért a seed-mondatról tarts papírmásolatot is. A teljes mentésbe ez a rész SOSEM kerül bele.": "Los códigos se guardan cifrados en este dispositivo: la clave se obtiene de tu PIN (AES‑256) y el PIN en sí no se guarda. Si olvidas el PIN, el contenido no se puede recuperar, así que guarda también una copia en papel de la frase semilla. Esta sección NUNCA se incluye en la copia de seguridad completa.",
  "A dokumentumok CSAK ezen az eszközön tárolódnak, a PIN-edből képzett kulccsal titkosítva (AES-256) — a vészkártyával ellentétben ezt csak te nyithatod meg. A PIN-t nem tároljuk: ha elfelejted, a dokumentumok nem állíthatók vissza.": "Los documentos se guardan SOLO en este dispositivo, cifrados con una clave obtenida de tu PIN (AES‑256): a diferencia de la tarjeta de emergencia, solo tú puedes abrirlos. El PIN no se guarda: si lo olvidas, los documentos no se pueden recuperar.",
  "Tudástár: a cikkekben álló hivatkozások (például „a 20.2 cikk”) kattinthatók, és a cikkekből gomb vezet át az app megfelelő funkciójára.": "Biblioteca: las referencias de los artículos (por ejemplo, «artículo 20.2») se pueden pulsar, y los botones de los artículos llevan a la función correspondiente de la app.",
  "Vagyonkezelő: új, választós oldalak saját legördülő listával.": "Patrimonio: nuevas páginas de selección con su propia lista desplegable.",
  "Térkép, navigáció: alul egy sáv mutatja a hátralévő és a megtett utat, a sebességet és a várható érkezést; a sarkában a leállító gomb.": "Mapa, navegación: una barra inferior muestra la distancia restante y recorrida, la velocidad y la llegada prevista; en su esquina, el botón de parar.",
  "Térkép, navigáció: tervezett útvonalon a ▲ gomb megnyitja a szintgrafikont: hol vagy, merre emelkedik vagy lejt az út, mennyit kell még mászni, és mikor jön a következő emelkedő.": "Mapa, navegación: en una ruta planificada, el botón ▲ abre el perfil de altitud: dónde estás, dónde sube o baja la ruta, cuánto desnivel queda y cuándo llega la próxima subida.",
  "Tudástár: ötvenegy új kép került a cikkekbe, így már mind a kilencvenkilenc cikkben legalább két kép van.": "Base de conocimiento: cincuenta y una imágenes nuevas; ahora los noventa y nueve artículos tienen al menos dos imágenes.",
  "Közös ima · stopper": "Oración en grupo · temporizador",
  "Folytatás": "Continuar",
  "Újra": "Otra vez",
  "Letelt az idő. Az Újra gombbal még egy kör indul.": "Se acabó el tiempo. Pulsa Otra vez para una ronda más.",
  "Vége. Az Újra gombbal elölről kezdheted.": "Fin. Pulsa Otra vez para empezar de nuevo.",
  "Második kör": "Segunda ronda",
  "Ima-stopper": "Temporizador de oración",
  "Útvonal": "Ruta",
  "Körút": "Circular",
  "igen": "sí",
  "MTSZ-szám": "N.º MTSZ",
  "Jelzés festve": "Señal pintada",
  "Weboldal": "Sitio web",
  "Az út mentén": "A lo largo de la ruta",
  "menetidő": "tiempo de marcha",
  "érkezés": "llegada",
  "ó": "h",
  "p": "min",
  "Magassági adat nélkül, az emelkedőkkel nem számolva.": "Sin datos de altitud, sin contar las subidas.",
  "Imák: a lista alján egy kis harang gomb nyitja a közös imához való stoppert. Te állítod be a perceket; lejáratkor halkan csilingel, és amíg nem nyúlsz hozzá, tízmásodpercenként újra jelez. Az Újra gomb még egy kört indít, annak a végén egyszer csilingel, és leáll.": "Oraciones: un pequeño botón de campana al final de la lista abre el temporizador para orar en grupo. Tú pones los minutos; al terminar suena suave y repite cada diez segundos hasta que lo toques. Otra vez inicia una ronda más, que suena una vez al final y se detiene.",
  "Imák: a stopper harang gombja az app saját ikon-stílusát kapta.": "Oraciones: el botón de campana del temporizador usa ahora el estilo de iconos de la app.",
  "Tudástár: harminckilenc új kép került a prémium cikkekbe, így már szinte minden cikkben van kép.": "Biblioteca: se añadieron treinta y nueve imágenes nuevas a los artículos premium, así que casi todos los artículos ya tienen imagen.",
  "Tudástár: a már letöltött prémium cikkek is frissülnek, ha új változat jelenik meg. A PMR446 cikkbe bekerült a csatornák frekvencia-táblázata és a digitális PMR.": "Biblioteca: los artículos premium ya descargados se actualizan cuando aparece una nueva versión. El artículo sobre PMR446 incluye ahora la tabla de frecuencias de los canales y el PMR digital.",
  "Tudástár: tizenöt prémium cikkben megjelentek a képek, tizenegy cikk új képet kapott.": "Biblioteca: ahora aparecen las imágenes en quince artículos premium, y once artículos recibieron una imagen nueva.",
  "Újdonságok: a korábbi bejegyzések is olvashatók most már minden nyelven.": "Novedades: las entradas anteriores ahora también se pueden leer en todos los idiomas.",
  // Ujdonsagok v43.126-v43.138 (2026-10-12 22:1x, hianypotlas)
  "Szobák: ha a „Csak neki” címzés látszik, az üzenet biztosan privátként megy el. Ha a címzés egy másik szobából maradt itt, az app nem küldi el csoportba, hanem szól, hogy válaszd ki újra a címzettet.": "Salas: si se ve el destinatario «Solo para», el mensaje se envía con seguridad como privado. Si el destinatario quedó de otra sala, la app no lo envía al grupo, sino que te pide que vuelvas a elegir el destinatario.",
  "Vagyonkezelő: az euró, a dollár és a nemesfémek árfolyama internet mellett magától frissül (a Magyar Nemzeti Bank és a tőzsdei ár alapján). A kézzel beírt érték marad.": "Patrimonio: los tipos del euro, el dólar y los metales preciosos se actualizan solos con internet (según el Banco Nacional de Hungría y los precios de mercado). El valor introducido a mano se mantiene.",
  "Vagyonkezelő: kikerültek belőle a cégspecifikus részek, csak az általános pénzügyi funkciók maradtak.": "Patrimonio: se quitaron las partes específicas de la empresa; solo quedan las funciones financieras generales.",
  "Vagyonkezelő: bal oldali menü (a bal felső gombbal). Minden menüpont egy témát mutat, így nem kell végtelen hosszan görgetni. A főoldalon a számlák egyenlege csempékben.": "Patrimonio: menú lateral izquierdo (con el botón de arriba a la izquierda). Cada opción muestra un tema, así no hay que desplazarse sin fin. En la página principal, los saldos de las cuentas en mosaicos.",
  "Visszajelzés: a „Bejelentéseim” alatt látod a saját bejelentéseidet, és hogy hol tart mindegyik. A kijavított hibánál egy koppintással jelezheted, hogy nálad is működik-e.": "Comentarios: en «Mis informes» ves tus propios informes y en qué punto está cada uno. En un error corregido puedes indicar con un toque si a ti también te funciona.",
  "Újdonságok: verziónként itt olvasható, mi változott és mi lett javítva.": "Novedades: aquí puedes leer, versión por versión, qué cambió y qué se corrigió.",
  "Biblia: egyszerre több olvasási tervet is követhetsz, a „Másik terv” gombbal válthatsz köztük. A haladás tervenként megmarad.": "Biblia: puedes seguir varios planes de lectura a la vez y cambiar entre ellos con el botón «Otro plan». El progreso se guarda para cada plan.",
  "Biblia: „A Biblia egy év alatt” heti felosztásban is választható, 52 hétre bontva.": "Biblia: «La Biblia en un año» también se puede elegir en reparto semanal, dividida en 52 semanas.",
  "Biblia: a „Terv leállítása” gomb a terv tetején is ott van, nem kell a lista aljáig görgetni érte.": "Biblia: el botón «Detener el plan» también está ahora en la parte superior del plan; no hace falta desplazarse hasta el final de la lista.",
  "Biztonsági javítások a Szobákban és a prémium tartalmak védelmében.": "Correcciones de seguridad en las Salas y en la protección del contenido premium.",
  "Szobák: elrejtett üzenetről már nem jön értesítés.": "Salas: ya no llegan notificaciones de mensajes ocultos.",
  "Gíra: ha a névjegy elsőre nem ért célba, magától újra elküldődik.": "Gira: si la tarjeta de contacto no llegó la primera vez, se vuelve a enviar automáticamente.",
  "Gíra: a közösséghez később csatlakozó tag is megkapja a közösség jelzéseit.": "Gira: un miembro que se une más tarde a la comunidad también recibe las señales de la comunidad.",
  "A kezdőképernyőre tett webes ikon ugyanaz lett, mint a telepített alkalmazásé.": "El icono web añadido a la pantalla de inicio es ahora el mismo que el de la app instalada.",
  "Térkép: a funkciók ikonos csempékben jelennek meg, az iránytű folyamatosan forog.": "Mapa: las funciones aparecen en mosaicos con iconos y la brújula gira continuamente.",
  "Szobák: a tagok egymásnak is átadhatják a szoba titkosító kulcsát, így új eszközön is olvasható minden korábbi üzenet.": "Salas: los miembros también pueden pasarse la clave de cifrado de la sala, así en un dispositivo nuevo se pueden leer todos los mensajes anteriores.",
  "Titkos QR: a családi jelszó egy összecsukható sor lett az oldal tetején, színes jelzéssel (be van-e állítva). Így az oldal rögtön a kód készítésével kezdődik.": "QR secreto: la contraseña familiar es ahora una fila plegable en la parte superior de la página, con un indicador de color (si está configurada). Así la página empieza directamente con la creación del código.",
  "Közös jelszó: koppints a Családi jelszó sorra, és adj meg egy mondatot, amit csak ti tudtok. Ugyanaz kell mindkét telefonon; mentsd el.": "Contraseña compartida: toca la fila Contraseña familiar e introduce una frase que solo conocéis vosotros. Hace falta la misma en los dos teléfonos; guárdala.",
  "nincs beállítva": "no configurada",
  "Saját jelszó nélkül a beépített kulcs véd, ami MINDEN PrepperPapa-készüléken megvan. Az idegen, aki sima szkennerrel ránéz, csak betűsort lát, de aki letöltötte az appot, elolvassa. Ez álcázás, nem titkosítás.": "Sin contraseña propia te protege la clave integrada, que tiene CUALQUIER dispositivo con PrepperPapa. El desconocido que lo mire con un escáner normal solo ve una cadena de caracteres, pero quien haya descargado la aplicación la lee. Esto es camuflaje, no cifrado.",
  "Kód készítése": "Crear código",
  "Mit teszel bele?": "¿Qué pones dentro?",
  "Lista": "Lista",
  "Személyes adat": "Datos personales",
  "Koordináta": "Coordenadas",
  "Lista címe": "Título de la lista",
  "Sorok (soronként egy)": "Líneas (una por línea)",
  "QR készítése": "Crear QR",
  "Morze fénnyel": "Morse con luz",
  "Morze hanggal": "Morse con sonido",
  "Rádión ne add le.": "No lo transmitas por radio.",
  "Az amatőr sávokon tilos információrejtő módszert alkalmazni (15/2013. NMHH rendelet 15. § (6) e)), és a forgalmazást közérthető nyelven kell folytatni (15. § (4)). Ez a kód egyikbe sem fér bele, és a saját jelszó nélkül készült változatra is áll. Morzézni szabad, rejtett tartalmat leadni nem. QR-kódban, papíron, kézből átadva használható.": "En las bandas de radioaficionado está prohibido emplear métodos que oculten información (reglamento húngaro NMHH 15/2013, art. 15, apdo. 6, letra e), y el tráfico debe realizarse en lenguaje comprensible (art. 15, apdo. 4). Este código no cumple ninguno de los dos requisitos, y esto vale también para la variante creada sin contraseña propia. Está permitido transmitir en Morse, pero no contenido oculto. En código QR, en papel, entregado en mano, sí se puede usar.",
  "Kód beolvasása": "Escanear código",
  "Vagy írd be a betűsort (morzéból, faxról)": "O introduce la cadena de caracteres (del Morse, del fax)",
  "Megfejtés": "Descifrado",
  "Ahogy üzenni tudsz, amikor a telefonhálózat nem segít. Válaszd ki, mivel próbálkozol: a helyi szoba szöveget visz a közeledben lévőknek, a hang pedig ott is átmegy, ahol semmilyen hálózat nincs.": "Cómo puedes enviar un mensaje cuando la red telefónica no ayuda. Elige con qué lo intentas: la sala local lleva texto a los que están cerca de ti, y el sonido pasa incluso donde no hay ninguna red.",
  "szöveg, hálón": "texto, en red",
  "Szöveg a közeledben lévőknek, közös hálón, internet nélkül": "Texto para los que están cerca, en una red común, sin internet",
  // MESH (Fonok, 2026-10-06 21:44 es 21:47): a helyi szoba neve es leirasa a mesh-halozatot
  // is kimondja -- ez ugyanaz a szoba, csak a nevevel egyutt most a technologiat is viszi.
  "Helyi szoba (mesh)": "Sala local (mesh)",
  "Mesh-hálózat: szöveg a közeledben lévőknek, internet nélkül": "Red mesh: texto para quienes están cerca, sin internet",
  "Szobák (interneten)": "Salas (por internet)",
  "Zárt csoportok távolról is, belépés a szoba gazdájának jóváhagyásával": "Grupos cerrados también a distancia, entrada con la aprobación del dueño de la sala",
  "Rövid üzenet hanggal vagy fénnyel, vétel kamerával és mikrofonnal": "Mensaje corto con sonido o luz, recepción con la cámara y el micrófono",
  "Kép átküldése hangban, rádión is": "Envío de imagen por sonido, también por radio",
  "névtelen (te)": "anónimo (tú)",
  "Ez a modul akkor működik, ha a készülékek egy hálón vannak, és azon valaki futtatja a szobát. Internet nem kell hozzá.": "Este módulo funciona si los dispositivos están en la misma red y alguien aloja la sala en ella. No hace falta internet.",
  "kapcsold be a telefonodon a mobil hotspotot (vagy használjatok egy közös routert), a többiek csatlakozzanak rá, és nyissák meg ugyanazt a címet, amit te. Aki megnyitotta, az bent van a szobában.": "activa el punto de acceso móvil en tu teléfono (o usad un router común), que los demás se conecten a él y abran la misma dirección que tú. Quien la haya abierto está dentro de la sala.",
  "Közös jelszó. Aki ugyanezt adja meg, az olvassa az üzeneteket, akinek nincs meg, annak értelmetlen betűsor marad. A kulcsot NE a szobában küldd el, hanem élőszóban vagy papíron add át.": "Contraseña común. Quien introduzca la misma lee los mensajes; para quien no la tenga queda una cadena de caracteres sin sentido. NO envíes la clave en la sala — entrégala de viva voz o en papel.",
  "Nincs kulcs. Az üzenetek nyíltan mennek: aki a hálón van és megnyitja a szobát, olvassa őket.": "No hay clave. Los mensajes van abiertos: quien esté en la red y abra la sala los lee.",
  "Szobák": "Salas",
  "Még egy szobában sem vagy benne.": "Todavía no estás en ninguna sala.",
  "Nyitott közösségek. Egy koppintás, és megy a jelentkezésed — a szoba gazdája engedi be.": "Comunidades abiertas. Un toque y tu solicitud sale — el dueño de la sala te deja entrar.",
  "Új szoba": "Nueva sala",
  "Te leszel a gazdája. Aki csatlakozni akar, kérelmet küld, és te döntöd el, beengeded-e. A szoba kódját add meg nekik, azzal találnak rá.": "Tú serás su dueño. Quien quiera unirse envía una solicitud y tú decides si lo dejas entrar. Dales el código de la sala — con él la encuentran.",
  "Szoba létrehozása": "Crear sala",
  "Írd be a szoba kódját. A gazda jóváhagyásáig nem látod az üzeneteket.": "Introduce el código de la sala. Hasta la aprobación del dueño no ves los mensajes.",
  "Kérelem küldése": "Enviar solicitud",
  "A böngészőben letiltottad az értesítést. A telefon beállításainál lehet visszaadni — innen nem tudom.": "Has bloqueado las notificaciones en el navegador. Se pueden restablecer en los ajustes del teléfono — desde aquí no puedo.",
  "Próba": "Prueba",
  "Szoba": "Sala",
  "Kapcsolódás...": "Conectando...",
  "Sürgős": "Urgente",
  "Meghívó": "Invitación",
  "Készíts egy meghívót, és küldd át annak, akit be akarsz hívni. Ő megnyitja, és bent van — nem kell külön jóváhagynod, és nem kell a szoba kódját közhírré tenni.": "Crea una invitación y envíasela a quien quieras invitar. Él la abre y ya está dentro — no tienes que aprobar nada aparte ni hacer público el código de la sala.",
  "Meghívó készítése": "Crear invitación",
  "Vagy legyen nyitott:": "O hazla abierta:",
  "ha kirakod, a szoba megjelenik mindenkinél a „Csatlakozz\" listában, és jelentkezni tudnak rá. Beengedni akkor is te engeded be őket.": "si la publicas, la sala aparece para todos en la lista „Únete\" y pueden solicitar entrar. Aun así eres tú quien los deja pasar.",
  "Jelenjen meg a Csatlakozz listában": "Que aparezca en la lista Únete",
  "Ez látszik a csempén, ezen ismerik fel. Fényképet válassz, ne rajzot — kis méretben az mond valamit. A telefonod a képet magától lekicsinyíti.": "Esto se ve en el mosaico, por esto la reconocen. Elige una fotografía, no un dibujo — en tamaño pequeño esa dice algo. Tu teléfono reduce la imagen por sí solo.",
  "Kép törlése": "Eliminar la imagen",
  "Ez a másik út: aki a kódot ismeri, kérelmet küldhet, és te döntöd el, beengeded-e. Meghívóval egyszerűbb.": "Este es el otro camino: quien conozca el código puede enviar una solicitud y tú decides si lo dejas entrar. Con una invitación es más sencillo.",
  "Kihagyom": "Lo omito",
  "Tovább": "Siguiente",
  "Tartsd a vonalkódot a keretbe.": "Mantén el código de barras dentro del marco.",
  "Húzd az ujjad: vízszintben a szín, függőlegesen a fényerő. Koppints a képernyőre a gombok elrejtéséhez / előhozásához.": "Desliza el dedo: en horizontal el color, en vertical el brillo. Toca la pantalla para ocultar / mostrar los botones.",
  "Piros": "Rojo",
  "Zöld": "Verde",
  "Villogás": "Parpadeo",
  "LED ki": "LED apagado",
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
  "otthon": "casa",
  "Teszt autó": "Coche de prueba",
  "Teszt Apa": "Papá de prueba",
  "Teszt Anya": "Mamá de prueba",
  "Teszt Gyerek": "Niño de prueba",
  "Víz": "Agua",
  "Étel": "Comida",
  "Azaz": "Es decir",
  "nincs ide rendelt készlet": "no hay reserva asignada aquí",
  "Készültség": "Preparación",
  "Készlet": "Reserva",
  "Kockázat": "Riesgo",
  "Közösség": "Comunidad",
  "Iránytű": "Brújula",
  "Fény": "Luz",
  "Vagyonkezelő": "Patrimonio",
  "Otthon ": "Casa ",
  "nincs megadva, ki jön": "no se ha indicado quién viene",
  "Nincs megadva, ki érkezik ide.": "No se ha indicado quién llega aquí.",
  "Kik érkeznek ide:": "Quién llega aquí:",
  "Mi van itt (nincs ide rendelt tétel)": "Qué hay aquí (no hay elementos asignados aquí)",
  "Sípolás": "Silbato",
  "Ütem indítása": "Iniciar el ritmo",
  "vércsoport hiányzik · nincs ismert allergia": "falta el grupo sanguíneo · ninguna alergia conocida",
  "Rögzítés a térképre (itt vagyok most)": "Fijar en el mapa (estoy aquí ahora)",
  "Kezdőlapon látszik ✓": "Visible en la pantalla de inicio ✓",
  "+ Új családtag": "+ Nuevo miembro de la familia",
  "Otthon · készültség: nincs adat": "Casa · preparación: sin datos",
  "Jármű · készültség: nincs adat": "Vehículo · preparación: sin datos",
  "Ez a készülék nem ad iránytű-adatot, vagy nincs rá engedély. A nap és hold rész ettől függetlenül működik.": "Este dispositivo no proporciona datos de brújula o no hay permiso. La parte del sol y la luna funciona con independencia de eso.",
  "víz 5 liter elemlámpa gyógyszerek": "agua 5 litros linterna medicamentos",
  "Ennyi holdfénynél nyílt terepen lámpa nélkül is lehet menni.": "Con esta luz de luna, en terreno abierto se puede caminar incluso sin linterna.",
  "A számítás a térkép utolsó nézete alapján készült, néhány perc pontossággal.": "El cálculo se ha hecho a partir de la última vista del mapa, con una precisión de unos minutos.",
  "A böngészőben letiltottad. A telefon beállításainál lehet visszaadni.": "Lo has bloqueado en el navegador. Se puede restablecer en los ajustes del teléfono.",
  "Kapcsolódva · egyedül vagy a szobában": "Conectado · estás solo en la sala",
  "növekvő hold, 82%": "luna creciente, 82%",
  "Súgó": "Ayuda",
  "Frissítés": "Actualizar",
  "Éjszakai mód": "Modo nocturno",
  "Tájoló": "Orientación",
  "Kalkulátorok": "Calculadoras",
  "Gyülekező": "Punto de reunión",
  "Másikat": "Otro",
  "Másik tanács": "Otro consejo",
  "Keresés a tudástárban…": "Buscar en la base de conocimientos…",
  "Megnevezés (pl. Palackozott víz)": "Denominación (p. ej. Agua embotellada)",
  "a dobozról, pl. 380": "del envase, p. ej. 380",
  "pl. 37 vagy 2000": "p. ej. 37 o 2000",
  "teli tank, liter vagy kWh": "depósito lleno, litros o kWh",
  "Egyéb hely megnevezése": "Denominación de otro lugar",
  "Teljes képernyő": "Pantalla completa",
  "Húzd, ha görgetnél": "Arrastra para desplazar",
  "Nyomtatás": "Imprimir",
  "Keresés: szó, vagy hely (Ján 3,16)": "Buscar: palabra o referencia (Juan 3,16)",
  "Betűméret": "Tamaño de letra",
  "Megnevezés (pl. Gmail helyreállítási kódok)": "Denominación (p. ej. códigos de recuperación de Gmail)",
  "A kód, kulcs vagy seed-mondat": "El código, la clave o la frase semilla",
  "Megjegyzés (hol használod, melyik fiók)": "Nota (dónde lo usas, qué cuenta)",
  "Megnevezés (pl. Személyi igazolvány)": "Denominación (p. ej. DNI)",
  "Kód (pl. PP-MINTA-1234)": "Código (p. ej. PP-MUESTRA-1234)",
  "mennyit bír hátizsákban": "cuánto puede llevar en la mochila",
  "pl. glutén, kivi — vesszővel": "p. ej. gluten, kiwi — separados por comas",
  "pl. cukorbetegség": "p. ej. diabetes",
  "pl. Bogáncs": "p. ej. Toby",
  "egy mondat, ha a GPS nem visz oda": "una frase, por si el GPS no lleva hasta allí",
  "üresen: alapterület vagy típus szerint": "vacío: según la superficie o el tipo",
  "üresen: típus szerint (ház 75, lakókocsi 80)": "vacío: según el tipo (casa 75, caravana 80)",
  "0 = földszint": "0 = planta baja",
  "A nap pályája ma": "La trayectoria del sol hoy",
  "Holdfázis: növekvő hold": "Fase lunar: luna creciente",
  "Értesítés a telefonra": "Notificación al teléfono",
  "watt darabonként": "vatios por unidad",
  "ó/nap": "h/día",
  "óra/nap": "horas/día",
  "óra naponta": "horas al día",
  "összesen W": "en total W",
  "napos óra": "horas de sol",
  "pl. egy mondat, amit csak ti tudtok": "p. ej. una frase que solo conocéis vosotros",
  "Amit át akarsz adni.": "Lo que quieres entregar.",
  "pl. Találkozó, Rejtek": "p. ej. Encuentro, Escondite",
  "pl. Vércsoport és gyógyszerek": "p. ej. Grupo sanguíneo y medicamentos",
  "Amit csak a családod olvashat.": "Lo que solo puede leer tu familia.",
  "pl. Feri, vagy Kovácsék": "p. ej. Pepe o los García",
  "Írd ide az üzenetet": "Escribe aquí el mensaje",
  "pl. Ceglédi kör": "p. ej. Círculo del barrio",
  "a szoba kódja": "el código de la sala",
  "Bezárás": "Cerrar",
  "Ige — Máté 6,34": "Versículo — Mateo 6,34",
  "A tájoló indul…": "La orientación se inicia…",
  "Nem kaptunk engedélyt az iránytűhöz. A nap és hold rész ettől függetlenül működik.": "No hemos recibido permiso para la brújula. La parte del sol y la luna funciona con independencia de eso.",
  "db": "uds.",
  "lejár:": "caduca:",
  "LEJÁRT": "CADUCADO",
  "1 hónapon belül lejár": "caduca en menos de un mes",
  "fél éven belül lejár": "caduca en menos de medio año",
  "hatótáv kb.": "autonomía aprox.",
  "kg teherbírás": "kg de capacidad",
  "Mi van itt": "Qué hay aquí",
  "tétel": "elementos",
  "Térképen ✓ — pozíció frissítése": "En el mapa ✓ — actualizar posición",
  "térképen ✓": "en el mapa ✓",
  "készültség": "preparación",
  "készültség: nincs adat": "preparación: sin datos",
  "fő": "personas",
  "nap": "días",
  "Teszt-adatok betöltve: 3 fő, 1 háziállat, 4 helyszín (közte autó),": "Datos de prueba cargados: 3 personas, 1 animal doméstico, 4 lugares (entre ellos un coche),",
  "készlet-tétel ✓ (a neveket az adatlapjukon átírhatod)": "elementos de reserva ✓ (los nombres los puedes cambiar en sus fichas)",
  "óra": "horas",
  "perc": "minutos",
  "Napkeltéig még": "Hasta el amanecer quedan",
  "Napnyugtáig még": "Hasta el atardecer quedan",
  "A nap": "El sol",
  "-e ment le.": " se ha puesto.",
  "Ezen a szélességen ma nem megy le a nap.": "En esta latitud el sol no se pone hoy.",
  "Ezen a szélességen ma nem kel fel a nap.": "En esta latitud el sol no sale hoy.",
  "napra": "para días",
  "Víz:": "Agua:",
  "Élelem:": "Comida:",
  "Áram:": "Electricidad:",
  "Fűtés:": "Calefacción:",
  "nincs megmérve": "no se ha medido",
  "nincs ide rendelt áramforrás": "no hay fuente de electricidad asignada aquí",
  "— a szükséglet": "— la necesidad",
  "lenne": "sería",
  "— powerbank, power station és napelem-termelés; az üzemanyag a fűtésnél számít": "— batería externa, estación de energía y producción solar; el combustible cuenta en la calefacción",
  "A gyűrű a vízre és az élelemre vonatkozik: a gyengébbiket mutatja.": "El anillo se refiere al agua y a la comida: muestra la más débil de las dos.",
  "A leggyengébb": "El eslabón más débil",
  "A gyűrű a jelen lévő típusok átlagát mutatja, a színe a leggyengébbet.": "El anillo muestra el promedio de los tipos presentes; su color muestra el más débil.",
  "Leggyengébb:": "Más débil:",
  "— a készültség ezt mutatja, mert a hiányzó láncszem dönt.": "— la preparación muestra justo eso, porque decide el eslabón que falta.",
  "élelem": "comida",
  "víz": "agua",
  "fűtés": "calefacción",
  "áram": "electricidad",
  "Áramszünetre: hordozható energia": "Para el apagón: energía portátil",
  "Hirdetés": "Anuncio",
  "delelés": "culminación",
  "Holdfázis:": "Fase lunar:",
  "Használható fény": "Luz utilizable",
  "és": "y",
  "között: a napkelte előtt és a napnyugta után is van még annyi, amivel lehet menni.": "entre medias: tanto antes del amanecer como después del atardecer queda todavía la suficiente para caminar.",
  "A számítás": "El cálculo se ha hecho a partir de",
  "alapján készült, néhány perc pontossággal.": ", con una precisión de unos minutos.",
  "a térkép utolsó nézete": "la última vista del mapa",
  "egy mentett pontod": "uno de tus puntos guardados",
  "a mostani helyzeted": "tu posición actual",
  "növekvő hold": "luna creciente",
  "fogyó hold": "luna menguante",
  "újhold": "luna nueva",
  "telihold": "luna llena",
  "első negyed": "cuarto creciente",
  "utolsó negyed": "cuarto menguante",
  "Ma éjjel gyakorlatilag nincs holdfény, számolj lámpával.": "Esta noche prácticamente no hay luz de luna, cuenta con la linterna.",
  "Közepes holdfény: nyílt terepen segít, erdőben nem.": "Luz de luna media: en terreno abierto ayuda, en el bosque no.",
  "mérés az elmúlt 48 órából. Ezen a készüléken a böngésző nem éri el a légnyomás-szenzort, ezért kézzel viszed be; a telefonos appban magától fog mérni.": "mediciones de las últimas 48 horas. En este dispositivo el navegador no accede al sensor de presión, por eso las introduces a mano; en la aplicación de teléfono medirá sola.",
  "Ez a böngésző nem tud értesítést megjeleníteni": "Este navegador no puede mostrar notificaciones",
  "Bekapcsolva — riasztáskor a telefonod jelez": "Activado — al saltar la alarma tu teléfono avisa",
  "Kikapcsolva": "Desactivado",
  "Adás indítása": "Iniciar transmisión",
  "Adás megy — koppints újra": "Transmitiendo — toca de nuevo",
  "Adás": "Transmisión",
  "Vétel": "Recepción",
  "Vétel megy — koppints újra": "Recibiendo — toca de nuevo",
  "Megy — koppints újra": "En marcha — toca de nuevo",
  "Áll — koppints újra": "Detenido — toca de nuevo",
  "Fény-SOS": "SOS con luz",
  "alapok — mindenkinek": "lo básico — para todos",
  "részletek, mélyebben": "detalles, más a fondo",
  "ennyi áll a tárcádban": "esto es lo que hay en tu cartera",
  "nincs internet · minden a kódban": "sin internet · todo en el código",
  "a leggyengébb": "el eslabón más débil",
  "Indítás": "Iniciar",
  "Számolók": "Calculadoras",
  "Nem sikerült a helymeghatározás:": "La localización no ha funcionado:",
  "A térkép utolsó nézete alapján is tudok számolni, nyisd meg egyszer a térképet.": "También puedo calcular a partir de la última vista del mapa — ábrelo al menos una vez.",
  "Ehhez előbb le kell tölteni a Biblia szövegét (a Biblia képernyőn, egyszer).": "Para esto hay que descargar antes el texto de la Biblia (en la pantalla Biblia, una vez).",
  "‹ Könyvek": "‹ Libros",
  "Ószövetség": "Antiguo Testamento",
  "Újszövetség": "Nuevo Testamento",
  "300+ találat (az elsőket mutatom)": "300+ resultados (muestro los primeros)",
  "találat": "resultados",
  "Nincs találat erre:": "Sin resultados para:",
  "fejezet": "Capítulo",
  "Egész fejezet": "Capítulo completo",
  "Még nincs kiemelt vers. Nyiss meg egy fejezetet, és koppints egy versre.": "Todavía no hay versículos subrayados. Abre un capítulo y toca un versículo.",
  "Klasszikus prófétai szakaszok. Az értelmezésük felekezetenként eltér — itt a szöveg áll, magyarázat nélkül.": "Pasajes proféticos clásicos. Su interpretación difiere según la confesión — aquí está solo el texto, sin explicación.",
  "Amikor félsz": "Cuando tienes miedo",
  "Amikor nem tudod, mit tegyél": "Cuando no sabes qué hacer",
  "Amikor kifogytál az erődből": "Cuando se te han acabado las fuerzas",
  "Amikor veszteség ér": "Cuando sufres una pérdida",
  "Amikor félted a családodat": "Cuando temes por tu familia",
  "Amikor az ellátás a kérdés": "Cuando la cuestión es el abastecimiento",
  "Amikor másokon kell segítened": "Cuando tienes que ayudar a otros",
  "Amikor a kitartás a tét": "Cuando lo que está en juego es la perseverancia",
  "Jézus beszéde az utolsó időkről": "El discurso de Jesús sobre los últimos tiempos",
  "Dániel látomásai": "Las visiones de Daniel",
  "A szenvedő szolga és a Messiás": "El siervo sufriente y el Mesías",
  "Az utolsó idők jellemzői": "Señales de los últimos tiempos",
  "Ítélet és helyreállítás": "Juicio y restauración",
  "teherbírás": "capacidad de carga",
  "Bogáncs": "Toby",
  "Belépés": "Iniciar sesión",
  "Betöltés...": "Cargando...",
  "Betöltés…": "Cargando…",
  "Értem": "Entendido",
  "Ha valaki ír egy szobádba, jelezzen a telefonod — akkor is, ha az app be van zárva.": "Si alguien escribe en una de tus salas, que tu teléfono avise — incluso si la aplicación está cerrada.",
  "Ehhez tudni kell, hol vagy. Nyomd meg a Mérés a helyzetemre gombot.": "Para esto hay que saber dónde estás. Pulsa el botón Calcular para mi posición.",
  "Nézd meg most, mennyi üzemanyag van az autóban. Ha kevesebb mint fél tank, tankolj fel a héten, és onnantól tartsd ezt a szintet. Ez az egyetlen szokás, ami pénzbe nem kerül, mert azt a benzint úgyis megvennéd, csak korábban.": "Mira ahora cuánto combustible hay en el coche. Si es menos de medio depósito, llénalo esta semana y mantén ese nivel a partir de entonces. Es la única costumbre que no cuesta dinero, porque esa gasolina la ibas a comprar de todos modos — solo que antes.",
  "Tudástár — Közlekedés és mobilitás": "Base de conocimientos — Transporte y movilidad",
  "A lista a családtagjaidból áll össze, akiket a Háztartásnál vettél fel.": "La lista se compone de los miembros de tu familia que has registrado en Hogar.",
  "A dokumentumok a telefonodon maradnak. Nem megy belőlük semmi sehova, felhőbe sem.": "Los documentos permanecen en tu teléfono. Nada de ellos va a ninguna parte, tampoco a la nube.",
  "A gomb be- és kikapcsol. Ugyanaz a gomb indítja az adást és állítja meg — nincs külön Állj.": "El botón enciende y apaga. El mismo botón inicia la transmisión y la detiene — no hay un Parar aparte.",
  "A gyűrű a leggyengébb láncszemet mutatja, nem az átlagot. Egy hiányzó dolog lehúzza az egészet — és ez szándékos.": "El anillo muestra el eslabón más débil, no la media. Una sola cosa que falte arrastra el conjunto hacia abajo — y eso es intencionado.",
  "A vétel és az adás ugyanazzal a gombbal kapcsol. Amíg megy, hagyd a telefont nyugton.": "La recepción y la transmisión se conmutan con el mismo botón. Mientras funcione, deja el teléfono en paz.",
  "Egy témán belül két réteg van. Az alap- és az életmentő cikkek ingyenesek, mindenkinek.": "Dentro de un tema hay dos capas. Los artículos básicos y los que salvan vidas son gratuitos, para todos.",
  "Ezt látja az, aki megtalálja a telefonodat. Csak azt írd bele, amit egy idegen is láthat.": "Esto lo ve quien encuentre tu teléfono. Escribe solo lo que también pueda ver un desconocido.",
  "Felveszed az azimutot, és a tájoló megmutatja a visszautat is — nem kell fejben tartanod.": "Registras el azimut y la orientación te muestra también el camino de vuelta — no tienes que recordarlo.",
  "Itt veszed fel a családot. Innen jön a fejadag-számítás és a helyszínek listája is.": "Aquí registras a la familia. De aquí salen el cálculo de las raciones y la lista de lugares.",
  "Keresés szó szerint, és amit megjelölsz, azt könyvjelzővel bármikor visszatalálod.": "Búsqueda literal, y lo que marques lo vuelves a encontrar en cualquier momento con el marcador.",
  "Koppints a térképre, és ott új pontot veszel fel.": "Toca el mapa y allí se añade un punto nuevo.",
  "Több számoló van egy helyen — víz, élelem, üzemanyag. Nincs külön csempéjük, mind itt található.": "Varias calculadoras en un mismo sitio — agua, comida, combustible. No tienen mosaico propio, todas están aquí.",
  "Új tételt a listához adsz: megadod, mi az, hova teszed, és mikor jár le.": "Añades un elemento nuevo a la lista: qué es, dónde lo pones y cuándo caduca.",
  "A gombok be- és kikapcsolnak. Ugyanaz a gomb indítja és állítja le a jelzést.": "Los botones encienden y apagan. El mismo botón inicia la señal y la detiene.",
  "A QR-kód a TELJES adatot viszi, nem egy linket. Ezért működik akkor is, ha nincs internet — a másik telefon a kódból olvassa ki.": "El código QR lleva los datos COMPLETOS, no un enlace. Por eso funciona también sin internet — el otro teléfono los lee directamente del código.",
  "A vaku nem minden telefonon működik. Ha nem indul, használd a képernyő-fényt — az mindenhol megy.": "El flash no funciona en todos los teléfonos. Si no se enciende, usa la luz de la pantalla — esa funciona en todas partes.",
  "A szám azt mutatja, mennyi áll a tárcádban.": "El número muestra cuánto hay en tu cartera.",
  "D": "S",
  "K": "E",
  "Ny": "O",
  "ÉK": "NE",
  "ÉNy": "NO",
  "DK": "SE",
  "DNy": "SO",
  "Példabeszédek 22,3": "Proverbios 22,3",
  "Az eszes meglátja a bajt és elrejti magát; a bolondok pedig neki mennek és kárát vallják.": "El avisado ve el mal, y escóndese: mas los simples pasan, y reciben el daño.",
  "2Timóteus 1,7": "2 Timoteo 1,7",
  "Mert nem félelemnek lelkét adott nékünk az Isten; hanem erőnek és szeretetnek és józanságnak lelkét.": "Porque no nos ha dado Dios el espíritu de temor, sino el de fortaleza, y de amor, y de templanza.",
  "Máté 6,34": "Mateo 6,34",
  "Ne aggodalmaskodjatok tehát a holnap felől; mert a holnap majd aggodalmaskodik a maga dolgai felől. Elég minden napnak a maga baja.": "Así que, no os congojéis por el día de mañana; que el día de mañana traerá su fatiga: basta al día su afán.",
  "Zsoltárok 46,2-3": "Salmos 46,1-2",
  "Isten a mi oltalmunk és erősségünk! igen bizonyos segítség a nyomorúságban. Azért nem félünk, ha elváltoznék is a föld, ha hegyek omlanának is a tenger közepébe.": "DIOS es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones. Por tanto no temeremos aunque la tierra sea removida; aunque se traspasen los montes al corazón de la mar.",
  "Jakab 1,3": "Santiago 1,3",
  "Tudván, hogy a ti hiteteknek megpróbáltatása kitartást szerez.": "Sabiendo que la prueba de vuestra fe obra paciencia.",
  "Uram, Te látod, mi nyomaszt engem. Ma éjjel nem tudom megoldani, és nem is akarom azt hazudni Neked, hogy nem félek. Kérlek, vedd le rólam a holnap terhét, és adj erőt ahhoz, amit ma kell elhordoznom. Csendesíts le. Te őrködsz, én alhatok. Jézus nevében, ámen.": "Señor, Tú ves lo que me oprime. Esta noche no puedo resolverlo, y tampoco quiero mentirte diciendo que no tengo miedo. Te ruego que quites de mí la carga del mañana y me des fuerza para lo que hoy tengo que soportar. Aquiétame. Tú velas, yo puedo dormir. En el nombre de Jesús, amén.",
  "Uram, most kell döntenem, és nincs időm. Adj tiszta fejet, és őrizz meg a pániktól. Mutasd meg a következő egy lépést, nem az egészet, csak a következőt. Legyen erőm megtenni. Jézus nevében, ámen.": "Señor, tengo que decidir ahora y no tengo tiempo. Dame la mente clara y guárdame del pánico. Muéstrame el siguiente paso, no el conjunto — solo el siguiente. Dame fuerza para darlo. En el nombre de Jesús, amén.",
  "Mennyei Atyám! Az Úr Jézus Krisztus nevében megyek eléd. Elismerem, hogy mindenható, örökkévaló Isten vagy, az egész világmindenségnek a teremtője. Én is a Te teremtményed vagyok. Elismerem, hogy bűnös ember vagyok, és sokat vétkeztem ellened. De én ma elhatározom, hogy megtérek és elfogadom a Názáreti Jézus áldozatát, és elismerem, hogy erre az áldozatra nekem is szükségem van. Ezért a szívemet, életemet megnyitom. Kérlek Uram, jöjj a szívembe. Bocsásd meg a bűneimet, szabadíts meg engem a bűntől és annak minden következményétől! Hiszek Benned Jézus. Hiszem, hogy Te vagy az élő Istennek a Fia, ki meghaltál az én bűneimért és feltámadtál a halálból, hogy megigazítsál engem. Elfogadlak Uramnak, Megváltómnak, Szabadítómnak és átadom az életemet, szívemet Neked. Szabadíts meg Uram! Tiszta szívet teremts bennem! Te azt ígérted, hogy a zörgetőnek ajtó nyittatik. Én Isten jelenlétébe akarok kerülni, és Te vagy az Út. Kérlek, vezess engem a Mindenható jelenlétébe! Dicsérlek és áldalak. Szeretlek Uram szívemből, lelkemből, erőmből, a Názáreti Jézus nevében. Dicsőség Istennek, most és mindörökké! Ámen!": "¡Padre celestial! En el nombre del Señor Jesucristo vengo ante Ti. Reconozco que eres el Dios todopoderoso y eterno, el Creador de todo el universo. Yo también soy criatura Tuya. Reconozco que soy un hombre pecador y que he pecado mucho contra Ti. Pero hoy decido arrepentirme y aceptar el sacrificio de Jesús de Nazaret, y reconozco que yo también necesito ese sacrificio. Por eso abro mi corazón y mi vida. Te ruego, Señor, ven a mi corazón. Perdona mis pecados, líbrame del pecado y de todas sus consecuencias. Creo en Ti, Jesús. Creo que Tú eres el Hijo del Dios vivo, que moriste por mis pecados y resucitaste de entre los muertos para justificarme. Te acepto como mi Señor, Salvador y Libertador, y Te entrego mi vida y mi corazón. ¡Líbrame, Señor! ¡Crea en mí un corazón limpio! Tú prometiste que al que llama se le abrirá. Quiero entrar en la presencia de Dios, y Tú eres el Camino. Te ruego que me conduzcas ante el Todopoderoso. Te alabo y Te bendigo. Te amo, Señor, de todo corazón, de toda alma, con todas mis fuerzas, en el nombre de Jesús de Nazaret. ¡Gloria a Dios, ahora y por siempre! ¡Amén!",
  "fűtés kevés": "poca calefacción",
  "még egyedül": "todavía solo",
  "te indítottad": "la iniciaste tú",
  "Csatlakozom": "Me uno",
  "jelentkezés elküldve": "solicitud enviada",
  "a gazda nem engedett be": "el dueño no te ha dejado entrar",
  "jóváhagyásra vár": "pendiente de aprobación",
  "névtelen": "anónimo",
  "Egy powerbank a telefonhoz kevés, ha a router és a lámpa is menne. Nézd meg, mekkora kapacitás kell három napra.": "Una batería externa para el teléfono no basta si también tuvieran que funcionar el router y la lámpara. Mira qué capacidad hace falta para tres días.",
  "A nyílt lángú fűtés zárt térben szén-monoxidot termel. Ha bent fűtesz, CO-érzékelő nem opció, hanem alapfelszerelés.": "La calefacción de llama abierta en un espacio cerrado produce monóxido de carbono. Si calientas dentro, el detector de CO no es una opción, sino equipo básico.",
  "Napi három liter fejenként, csak ivásra. Mellé egy szűrő vagy klórtabletta, ha a csapvíz eredete kétségessé válik.": "Tres litros al día por persona, solo para beber. Junto a eso un filtro o pastillas de cloro, por si el origen del agua del grifo se vuelve dudoso.",
  "Fejlámpa, hogy szabad maradjon a két kezed, és tartalék elem hozzá. A gyertya tűzveszély, nem megoldás.": "Una linterna frontal, para que te queden libres las dos manos, y pilas de repuesto. La vela es un riesgo de incendio, no una solución.",
  "— ennyi jut ténylegesen a fűtésbe,": "— esto es lo que llega realmente a la calefacción,",
  "Nyers tüzelő:": "Combustible bruto:",
  "(tüzifa, fűtőolaj és gázpalack együtt) — ebből a berendezés": "(leña, gasóleo de calefacción y bombona de gas juntos) — de esto el aparato entrega",
  "%-ot ad át": "%",
  "Napi fűtésigény:": "Demanda diaria de calefacción:",
  "Víz (csempe)": "Agua",
  "Étel (csempe)": "Comida",
  "Fűtés (csempe)": "Calor",
  "Áram (csempe)": "Energía",
  "KÖZÖS": "COMÚN",
  "Közös": "Común",
  "közös": "común",
  "Közös felszerelés": "Equipo común",
  "Közös felszerelés (egyszer az egész csoportnak)": "Equipo común (una vez para todo el grupo)",
  "kannás víz": "agua en garrafa",
  "palackos víz": "agua embotellada",
  "száraz élelmiszer": "alimentos secos",
  "romlandó": "perecedero",
  "tüzifa": "leña",
  "fűtőolaj": "gasóleo de calefacción",
  "gázpalack": "bombona de gas",
  "üzemanyag-készlet": "reserva de combustible",
  "üzemanyag (mobilitás)": "combustible (movilidad)",
  "üzemanyag": "combustible",
  "bébiétel": "comida para bebés",
  "háziállat": "animal doméstico",
  "saját gyógyszer": "medicamento propio",
  "hátizsák": "mochila",
  "1 készlet": "1 juego",
  "Gyógyszer:": "Medicamentos:",
  "Vércsoport:": "Grupo sanguíneo:",
  "Betegség:": "Enfermedad:",
  "Vércsoport-kártya:": "Tarjeta de grupo sanguíneo:",
  "Élelmiszer": "Alimentos",
  "Elsősegély": "Primeros auxilios",
  "Eszközök - alvás/menedék": "Equipo - dormir/refugio",
  "Eszközök - főzés/tűzgyújtás": "Equipo - cocinar/encender fuego",
  "Eszközök - fűtés": "Equipo - calefacción",
  "Eszközök - világítás": "Equipo - iluminación",
  "Eszközök - öltözet": "Equipo - vestimenta",
  "Eszközök - EDC": "Equipo - EDC",
  "Higiénia": "Higiene",
  "Mobilitás": "Movilidad",
  "Mobilitás:": "Movilidad:",
  "Mit vigyek": "Qué llevo",
  "Fény-SOS (képernyő)": "SOS con luz (pantalla)",
  "Fény-SOS (vaku)": "SOS con luz (flash)",
  "Ürítés": "Vaciar",
  "Pontok kimentése (GPX)": "Exportar los puntos (GPX)",
  "Teljes mentés": "Copia de seguridad completa",
  "Visszatöltés": "Restaurar",
  "Checklista nyomtatása": "Imprimir la lista de comprobación",
  "Kezdő": "Inicio",
  "Lámpa": "Lámpara",
  "Beállít": "Ajustar",
  "LED be": "LED encendido",
  "Nincs vaku": "Sin flash",
  "Kamera vétel leállítása": "Detener la recepción por cámara",
  "Mikrofon vétel leállítása": "Detener la recepción por micrófono",
  "Másolás": "Copiar",
  "Beillesztés szövegből": "Pegar desde texto",
  "Bemutató-adatok betöltése": "Cargar datos de demostración",
  "A neved a közösségben": "Tu nombre en la comunidad",
  "Összes kategória": "Todas las categorías",
  "Összes készlet": "Todas las reservas",
  "Mennyiség (ml/db)": "Cantidad (ml/ud.)",
  "Hol áll általában": "Dónde suele estar",
  "Miért (pl. 10 tojás, favágás)": "Por qué (p. ej. 10 huevos, cortar leña)",
  "Ez összesen": "Esto hace en total",
  "kg vagy liter": "kg o litros",
  "Nincs találat.": "Sin resultados.",
  "(névtelen)": "(sin nombre)",
  "nincs adat": "sin datos",
  "Összesen": "Total",
  "Élelem": "Comida",
  "hiányzik": "falta",
  "Hiányzik": "Falta",
  "személyre szóló": "por persona",
  "alap ruházat": "ropa básica",
  "állat-specifikus": "específico del animal",
  "autó": "coche",
  "pár": "par",
  "1 pár": "1 par",
  "1 pár (lábon)": "1 par (puesto)",
  "egy az egész csoportnak": "uno para todo el grupo",
  "kép": "imagen",
  "PDF/fájl": "PDF/archivo",
  "a tárban": "en el almacenamiento",
  "tárolt": "almacenado",
  "átadásra vár": "pendiente de entrega",
  "Gíra": "Gira",
  "Hány gírát kérsz": "Cuántas gira pides",
  "Hány gíra": "Cuántas gira",
  "Kinek (azonosító)": "A quién (identificador)",
  "Neve (nem kötelező)": "Nombre (no obligatorio)",
  "Kezdőlapon nem látszik": "No se ve en la pantalla de inicio",
  "Nincs napkelte vagy napnyugta": "No hay amanecer ni atardecer",
  "Légnyomás az elmúlt órákban": "Presión en las últimas horas",
  "Adj nevet a dokumentumnak.": "Dale un nombre al documento.",
  "Nem sikerült.": "No ha funcionado.",
  "Nem sikerült:": "No ha funcionado:",
  "Nem sikerült a kamera:": "La cámara no ha funcionado:",
  "Nem sikerült a mikrofon:": "El micrófono no ha funcionado:",
  "Nem fért el: megtelt a tár. Törölj egy régi dokumentumot.": "No ha cabido: el almacenamiento está lleno. Elimina un documento antiguo.",
  "Add meg a PIN-t": "Introduce el PIN",
  "4-6 számjegy kell.": "Hacen falta de 4 a 6 dígitos.",
  "Hibás PIN.": "PIN incorrecto.",
  "Feldolgozás:": "Procesando:",
  "Feldolgozás…": "Procesando…",
  "(túl nagy fájl)": "(archivo demasiado grande)",
  "(nem sikerült beolvasni)": "(no se ha podido leer)",
  "(PDF, max 2 MB. Fényképezd le inkább — a fotót magamtól kicsinyítem)": "(PDF, máx. 2 MB. Mejor fotografíalo — la foto la reduzco yo solo)",
  "Még nincs dokumentum.": "Todavía no hay documentos.",
  "Törlöd a dokumentumot?": "¿Eliminas el documento?",
  "Biztosan törlöd? Koppints újra": "¿Seguro que lo eliminas? Toca de nuevo",
  "Előbb vegyél fel családtagot a Háztartásnál.": "Añade primero un miembro de la familia en Hogar.",
  "Ezen az eszközön nincs helymeghatározás": "En este dispositivo no hay localización",
  "Helymeghatározás…": "Localizando…",
  "Új változat érhető el (": "Hay disponible una versión nueva (",
  "Áramforrás hiányzik": "Falta la fuente de electricidad",
  "Kevés a tüzelő": "Hay poco combustible",
  "Kevés a víz": "Hay poca agua",
  "Nincs fényforrás": "No hay fuente de luz",
  "A tudástár üres.": "La base de conocimientos está vacía.",
  "zárt": "cerrado",
  "Bővített tudástár": "Base de conocimientos ampliada",
  "Ebben a témában": "En este tema hay todavía",
  "további cikk van, a bevezetőjüket fent olvashatod.": "artículos más, sus introducciones puedes leerlas arriba.",
  "A teljes szövegük a bővített tudástár része, ami egyszeri feloldással, véglegesen elérhető.": "Su texto completo forma parte de la base de conocimientos ampliada, accesible de forma definitiva con un único desbloqueo.",
  "Ennek a cikknek a szövege nem jött meg.": "El texto de este artículo no ha llegado.",
  "A cikk szövege most nem érhető el.": "El texto del artículo no está disponible ahora.",
  "Tudástár —": "Saber —",
  "Elsősegély-készlet": "Botiquín de primeros auxilios",
  "Fejlámpa + tartalék elem": "Linterna frontal + pilas de repuesto",
  "Powerbank (feltöltve)": "Batería externa (cargada)",
  "Vízszűrő vagy víztisztító tabletta": "Filtro de agua o pastillas potabilizadoras",
  "Öngyújtó / vízálló gyufa": "Mechero / cerillas impermeables",
  "Többfunkciós kés": "Navaja multiusos",
  "Gázfőző + gázpalack": "Hornillo de gas + bombona",
  "Spirituszfőző (denaturált szesz) + üzemanyag": "Hornillo de alcohol (alcohol desnaturalizado) + combustible",
  "Vegyi melegítő tasak (tűz nélkül)": "Bolsa calentadora química (sin fuego)",
  "Bögre / edény a főzéshez": "Taza / recipiente para cocinar",
  "Hőfólia": "Manta térmica",
  "Papírtérkép és iránytű": "Mapa de papel y brújula",
  "Készpénz kis címletekben": "Efectivo en billetes pequeños",
  "Dokumentum-másolatok": "Copias de los documentos",
  "Vízhatlan zsák (dry bag)": "Bolsa estanca (dry bag)",
  "Mentőmellény": "Chaleco salvavidas",
  "Gyorsan száradó ruha": "Ropa de secado rápido",
  "Vízálló tok a telefonra": "Funda impermeable para el teléfono",
  "Réteges téli öltözet": "Ropa de invierno por capas",
  "Sapka, sál, kesztyű": "Gorro, bufanda, guantes",
  "Vízhatlan bakancs": "Botas impermeables",
  "Kémiai melegítő párna": "Almohadilla calentadora química",
  "Réteges őszi öltözet": "Ropa de otoño por capas",
  "Fejlámpa (korán sötétedik)": "Linterna frontal (anochece pronto)",
  "Naptej és fejfedő": "Crema solar y gorra",
  "Rovarriasztó": "Repelente de insectos",
  "Extra víz (meleg miatt)": "Agua adicional (por el calor)",
  "Kanna víz (tartalék)": "Garrafa de agua (reserva)",
  "Hálózsák / takaró": "Saco de dormir / manta",
  "Szerszámkészlet": "Juego de herramientas",
  "Ponyva / sátorlap": "Lona / toldo",
  "Bakancs vagy zárt cipő": "Botas o calzado cerrado",
  "Alsónemű": "Ropa interior",
  "Póló": "Camiseta",
  "Hosszú nadrág": "Pantalón largo",
  "Pulóver vagy polár": "Jersey o forro polar",
  "Aláöltözet (hosszú alsó, hosszú ujjú)": "Ropa térmica (calzoncillo largo, manga larga)",
  "Esőkabát vagy esőponcsó": "Chubasquero o poncho",
  "Kesztyű": "Guantes",
  "Váltóruha (csecsemő)": "Muda de ropa (bebé)",
  "Zokni / rugdalózó": "Calcetines / pelele",
  "Sapka (csecsemő)": "Gorrito (bebé)",
  "Esővédő a babahordozóra": "Protector de lluvia para la mochila portabebés",
  "intim higiénia (tisztasági betét / tampon)": "higiene íntima (compresas / tampones)",
  "intim higiénia, ha lány": "higiene íntima, si es niña",
  "tápszer (a szokásos márka, napi adag +2 nap)": "leche de fórmula (la marca habitual, ración diaria +2 días)",
  "pelenka (napi 6-8 db)": "pañales (6-8 uds. al día)",
  "törlőkendő": "toallitas húmedas",
  "cumi és pótcumi": "chupete y chupete de repuesto",
  "saját tápja (NE váltsunk hirtelen: gyomorrontást okoz)": "su pienso habitual (NO lo cambies de golpe: provoca trastorno digestivo)",
  "oltási könyv másolata": "copia de la cartilla de vacunación",
  "póráz és szájkosár": "correa y bozal",
  "víztisztító tabletta": "pastillas potabilizadoras",
  "vízszűrő": "filtro de agua",
  "Inzulin hűtve: hűtőtáska + gélakku": "Insulina en frío: nevera portátil + acumulador de gel",
  "az inzulin 2-8 °C-ot kíván": "la insulina requiere de 2 a 8 °C",
  "Vércukormérő, tesztcsík, lándzsa": "Glucómetro, tiras reactivas, lancetas",
  "cukorbetegség az adatlapján": "diabetes en su ficha",
  "Szőlőcukor / gyors cukor": "Glucosa / azúcar rápido",
  "hipoglikémia esetére": "por si hay hipoglucemia",
  "Tartalék toll/tű + éles-gyűjtő": "Pluma/aguja de repuesto + contenedor de objetos punzantes",
  "ha az egyik elromlik vagy elvész": "por si una se estropea o se pierde",
  "Allergia-gyógyszer (": "Medicamento para la alergia (",
  "allergia az adatlapján": "alergia en su ficha",
  "Adrenalin autoinjektor, ha fel van írva": "Autoinyector de adrenalina, si está recetado",
  "súlyos allergiás reakció percek alatt kialakulhat": "una reacción alérgica grave puede aparecer en minutos",
  "az adatlapjáról": "de su ficha",
  "az ő adatlapjáról, +2 nap tartalék": "de su ficha, +2 días de reserva",
  "amit viszünk; a teljes igény": "lo que llevamos; la necesidad completa",
  "indulásra; a teljes igény": "para la salida; la necesidad completa",
  ": nincs megadva a testtömeg, 15 kg-mal számoltam. Az adatlapján javítható.": ": no se ha indicado el peso corporal, he calculado con 15 kg. Se puede corregir en su ficha.",
  "Több helyen is bejelölve:": "Marcado en varios lugares:",
  "— mindegyiknél teljes mennyiséggel számít.": "— en cada uno cuenta con la cantidad completa.",
  "A víz csak az indulásra elég: a teljes igény": "El agua solo alcanza para la salida: la necesidad completa sería",
  "liter lenne, ebből": "litros, de los cuales",
  "liter megy veletek. A többit útközben kell megszerezni és tisztítani.": "litros van con vosotros. El resto hay que conseguirlo y potabilizarlo por el camino.",
  "Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez túrához való, és a listán kiírom, mennyit kell útközben szerezni.": "Cuenta solo con lo que puedes cargar: 1,5 litros por persona. Es para excursión, y en la lista escribo cuánto hay que conseguir por el camino.",
  "Jelöld ki, ki megy. Enélkül nem tudom kiszámolni, mennyi kell.": "Marca quién va. Sin eso no puedo calcular cuánto hace falta.",
  "kategóriájú ruházatot kíván. A készletedben": "— hace falta ropa de esta categoría. En tu reserva hay",
  "ilyen tétel van.": "elementos de este tipo.",
  "nincs ilyen tétel — a készletnél ez egy kategória.": "no hay elementos de este tipo — en la reserva esto es una categoría.",
  "liter víz és": "litros de agua y",
  "kcal élelem. Becsült tömeg:": "kcal de comida. Peso estimado:",
  "A víz csak az indulásra elég.": "El agua solo alcanza para la salida.",
  "napra valójában": "días harían falta en realidad",
  "liter kellene, ennyit viszont nem lehet elvinni.": "litros, pero tanto no se puede llevar.",
  "liter, amit útközben kell megszerezni:": "litros hay que conseguir por el camino:",
  "vízszűrő, víztisztító tabletta, ismert vízvételi pont. Ezt a listán is nézd meg.": "filtro de agua, pastillas potabilizadoras, un punto de agua conocido. Mira esto también en la lista.",
  "A készletedben most": "En tu reserva hay ahora",
  "kcal van megadva, ami ennek az útnak a": "kcal indicadas, lo que para este viaje supone",
  "Hiányzik még kb.": "Faltan todavía unas",
  "Ez elég.": "Esto es suficiente.",
  "tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz.": "elementos no tienen indicada la energía (kcal/100 g), esos no se incluyen. Leída del envase será más preciso.",
  "Ez nehezebb, mint amit el tudtok vinni. A kijelölt személyek együtt kb.": "Esto pesa más de lo que podéis llevar. Las personas marcadas cargan juntas unos",
  "kg-ot bírnak, a lista": "kg, y la lista pesa",
  "kg. A víz a legnehezebb: fontold meg a vízszűrőt kanna helyett, vagy vidd rövidebb szakaszra.": "kg. El agua es lo más pesado: valora un filtro en lugar de la garrafa, o llévala para un tramo más corto.",
  "Belefér: a kijelöltek kb.": "Cabe: los marcados cargan unos",
  "kg-ot bírnak.": "kg.",
  "fő között: fejenként kb.": "personas: unos",
  "Nála:": "En él:",
  "kg (ebből": "kg (de los cuales",
  "kg a sajátja": "kg propios",
  "kg a közösből": "kg de lo común",
  "· teherbírása": "· su capacidad",
  "— EZ TÖBB, MINT AMIT ELBÍR": "— ESTO ES MÁS DE LO QUE PUEDE CARGAR",
  "— belefér": "— cabe",
  "A hiányzik jelölésűek a beszerzési listád. Most": "Los marcados como que faltan son tu lista de la compra. Ahora hay",
  "ilyen van. A vizet és az élelmet a készlet KATEGÓRIÁJÁBÓL ismeri fel, a többit a nevéből.": "de estos. El agua y la comida los reconoce por la CATEGORÍA de la reserva, el resto por el nombre.",
  "A víz- és energia-számok tervezési értékek, nem orvosi előírás. A csecsemő és az állat külön normával számol.": "Las cifras de agua y energía son valores de planificación, no una prescripción médica. El bebé y el animal se calculan con una norma propia.",
  "Egy power station a telefont, a lámpát és egy rádiót is elviszi napokig. Kisebb igényre powerbank is elég.": "Una estación de energía mantiene el teléfono, la lámpara y una radio durante días. Para una necesidad menor basta también una batería externa.",
  "Tűzifa, PB-palack vagy fűtőolaj — a kockázatelemzés kiszámolja, mennyi kell a megadott napokra.": "Leña, bombona de gas o gasóleo de calefacción — el análisis de riesgos calcula cuánto hace falta para los días indicados.",
  "Kannás víz és víztisztító a legolcsóbb biztosíték. Egy IBC tartály hosszú távra megoldja.": "El agua en garrafa y un potabilizador son el seguro más barato. Un depósito IBC lo resuelve a largo plazo.",
  "Egy fejlámpa a legfontosabb: szabadon hagyja a kezed. Mellé egy tartalék elemkészlet.": "Lo más importante es una linterna frontal: te deja las manos libres. Junto a ella, un juego de pilas de repuesto.",
  "A tárolt üzemanyag a fűtésnél is szerepel: ugyanaz a liter vagy fűt, vagy visz.": "El combustible almacenado aparece también en la calefacción: el mismo litro o calienta, o te lleva.",
  "Ehhez a helyszínhez még nincs készlet rendelve, ezért nem tudjuk mérni. A Készletnél a tétel Tárolási helyénél tudod bejelölni.": "A este lugar todavía no se le ha asignado ninguna reserva, por eso no podemos medir. Lo puedes marcar en Reserva, en el Lugar de almacenamiento del elemento.",
  "Ehhez a helyszínhez nincs tétel rendelve. A Készletnél a tétel Tárolási helyénél tudod bejelölni.": "A este lugar no se le ha asignado ningún elemento. Lo puedes marcar en Reserva, en el Lugar de almacenamiento del elemento.",
  ": nincs hatótáv — add meg a fogyasztást az adatlapján": ": sin autonomía — indica el consumo en su ficha",
  "20000 = 20 liter (millilitert kérünk)": "20000 = 20 litros (pedimos mililitros)",
  "5000 = egy 5 literes kanna": "5000 = una garrafa de 5 litros",
  "1500 = másfél literes": "1500 = un litro y medio",
  "100000 = egy mázsa": "100000 = un quintal",
  "11500 = egy 11,5 kg-os PB": "11500 = una bombona de 11,5 kg",
  ". Ez soknak tűnik. Biztos, hogy jó a mennyiség": ". Parece mucho. ¿Seguro que son correctas la cantidad",
  "és az egységnyi súly? (Egy IBC tartály például 1 darab, 1000 kg.) OK = mégis felveszem.": "y el peso unitario? (Un depósito IBC, por ejemplo, es 1 unidad, 1000 kg.) OK = lo añado igualmente.",
  "A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan. Töltsd ki a Vészkártya szekcióban.": "Tu tarjeta de emergencia (grupo sanguíneo, alergia, medicamentos, contacto) aparece aquí rápidamente. Rellénala en la sección Tarjeta de emergencia.",
  "pl. Amit hozz magaddal": "p. ej. Lo que debes traer contigo",
  "víz 5 liter&#10;elemlámpa&#10;gyógyszerek": "agua 5 litros&#10;linterna&#10;medicamentos",
  "Vízitúra": "Excursión acuática",
  "Őszi túra": "Excursión de otoño",
  "Nyári túra": "Excursión de verano",
  "Esőkabát": "Chubasquero",
  "Ehhez a helyszínhez még nincs készlet rendelve, ezért nem tudjuk mérni. A Készletnél a tétel Tárolási helyénél válaszd ki:": "A este lugar todavía no se le ha asignado ninguna reserva, por eso no podemos medir. En Reserva, en el Lugar de almacenamiento del elemento elige:",
  "élelmiszernél hiányzik az energia (kcal/100 g) — addig az étel „?”.": "alimentos les falta la energía (kcal/100 g) — hasta entonces en la comida aparece „?”.",
  "Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez túrához való, és a listán kiírom, mennyi hiányzik a teljes fejadaghoz.": "Cuenta solo con lo que puedes cargar: 1,5 litros por persona. Es para excursión, y en la lista escribo cuánto falta para la ración completa.",
  "tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz a kép.": "elementos no tienen indicada la energía (kcal/100 g), esos no se incluyen. Leída del envase la imagen será más precisa.",
  "A víz- és energia-számok tervezési értékek, nem orvosi előírás. A csecsemő és az állat külön normán fut, nem a felnőtt arányosításából.": "Las cifras de agua y energía son valores de planificación, no una prescripción médica. El bebé y el animal siguen una norma propia, no una proporción del adulto.",
  "fő ·": "personas ·",
  "nap ·": "días ·",
  "fő/állat ·": "personas/animales ·",
  "fő)": "personas)",
  "Víz (": "Agua (",
  "kg testtömegre)": "kg de peso corporal)",
  "0,06 l/testtömeg-kg/nap": "0,06 l/kg de peso corporal/día",
  "l/nap ×": "l/día ×",
  "kcal/nap ×": "kcal/día ×",
  "személyre szóló (": "por persona (",
  ": be van írva a betegség (": ": la enfermedad está registrada (",
  "fejenként egy (": "uno por persona (",
  "— a": "— del",
  "-es tank": "-litros de depósito",
  "m² alapján": "a partir de m²",
  "%-a .": "% .",
  "a helyszín típusa szerint": "según el tipo de lugar",
  "kézzel megadott": "indicado manualmente",
  "kézzel megadott napi igény": "necesidad diaria indicada manualmente",
  "itteni élelmiszernél hiányzik a súly vagy az energia (kcal/100 g), ezért nem számít bele. Nyisd meg a tételt a Készletnél, és írd be a doboz adatait.": "alimentos de aquí les falta el peso o la energía (kcal/100 g), por eso no se incluyen. Abre el elemento en Reserva y escribe los datos del envase.",

  // --- POTLAS 2026-08-31 (Marveen): a het szotar osszevetesebol hianyzo kulcsok.
  // Az UKRAN valtozat volt az egyetlen teljes (1218 kulcs); ezek a tobbi hatbol
  // kimaradtak. Forditatlanul nem hibaznak, hanem MAGYARUL jelennek meg.
  "A szoba kulcsa": "Clave de la sala",
  "A tudástár betöltése folyamatban…": "Cargando la base de conocimientos…",
  "Távolság mérése": "Medir distancia",
  "Törölve.": "Eliminado.",
  "helyszín": "lugar",
  "Élelmiszer:": "Alimentos:",
  "Összes hely": "Todos los lugares",
  "ÜTEM INDÍTÁSA": "INICIAR RITMO",

  // --- POTLAS 2026-08-31 (Marveen), a `pp-i18n-hiany.mjs` MERESEBoL: 18 szoveg, ami
  // tenylegesen MAGYARUL jelent meg az idegen nyelvu feluleten. A kulcsok a mero
  // kimenetebol valok (`store/pp-i18n-hiany.json`), nem kezzel gepelve.
  // Az ALLPOWERS-tetelknel a MARKANEV es a TIPUS valtozatlan, csak a leiras fordul.
  "2 méter (145 MHz) — amatőr": "2 metros (145 MHz) — radioafición",
  "40 méter (7 MHz) — amatőr, rövidhullám": "40 metros (7 MHz) — radioafición, onda corta",
  "70 cm (435 MHz) — amatőr": "70 cm (435 MHz) — radioafición",
  "80 méter (3,6 MHz) — amatőr, rövidhullám": "80 metros (3,6 MHz) — radioafición, onda corta",
  "CB (27 MHz) — polgári sáv": "CB (27 MHz) — banda ciudadana",
  "PMR446 (446 MHz) — engedély nélküli kézirádió": "PMR446 (446 MHz) — walkie-talkie sin licencia",
  "ALLPOWERS B1000 bővítő akku (1152 Wh)": "ALLPOWERS B1000 batería de expansión (1152 Wh)",
  "ALLPOWERS B3000 bővítő akku (3168 Wh)": "ALLPOWERS B3000 batería de expansión (3168 Wh)",
  "ALLPOWERS P1800 (1024 Wh): 1024 Wh tárolt energia, 1800 W folyamatos kimenet": "ALLPOWERS P1800 (1024 Wh): 1024 Wh de energía almacenada, 1800 W de salida continua",
  "ALLPOWERS SF100 (100 W, hajlékony)": "ALLPOWERS SF100 (100 W, flexible)",
  "ALLPOWERS SF200 (200 W, hajlékony)": "ALLPOWERS SF200 (200 W, flexible)",
  "ALLPOWERS SP012 (100 W, terepszínű)": "ALLPOWERS SP012 (100 W, camuflaje)",
  "Jegyzet rajzolása": "Dibujar una nota",
  "2100 kcal fejenként naponta. Járkálás, ház körüli teendők. Ez a nemzetközi vészhelyzeti tervezés alapszáma is.": "2100 kcal por persona y día. Caminar, tareas alrededor de la casa. Es también la cifra base de la planificación internacional de emergencias.",
  "A hatótávot HÁROM dolog dönti el, és a watt csak az egyik — rendszerint a legkisebb súlyú. A másik kettő: hogy MILYEN SÁVON adsz, és hogy MI van közted és a másik között. Ezért nem lehet egy rádióra egyetlen kilométer-számot mondani.": "El alcance lo deciden TRES cosas, y los vatios son solo una de ellas — normalmente la de menos peso. Las otras dos: en QUÉ BANDA transmites y QUÉ hay entre tú y el otro. Por eso no se puede dar una sola cifra en kilómetros para una radio.",
  "Írd be, amit tudsz — ami nincs a listán, azt add hozzá a végén. A kilogrammnál a SZÁRAZ tömeg számít (a rizs főzve nehezebb, de ugyanannyi kalória).": "Escribe lo que sepas — lo que no esté en la lista, añádelo al final. En los kilogramos cuenta el peso EN SECO (el arroz cocido pesa más, pero tiene las mismas calorías).",
  "Magyarországon engedély nélkül használható, de a törvény MAXIMUM 0,5 wattot és gyári, nem cserélhető antennát enged. Ezért van, hogy a doboz 10 kilométert ígér, a valóság meg 1-3.": "En Hungría puede usarse sin licencia, pero la ley permite un MÁXIMO de 0,5 vatios y una antena de fábrica no intercambiable. Por eso la caja promete 10 kilómetros y la realidad es de 1 a 3.",
  "Nem fogyókúrás számoló. Azt mondja meg, hogy a KÉSZLETED hány napra elég, és mennyi hiányzik ahhoz a naphoz, ameddig ki akarod húzni. A napi szükséglet nem „normál\" étkezés: vészhelyzetben a cél a működőképesség, nem a jóllakottság.": "No es una calculadora para adelgazar. Te dice para cuántos días alcanza TU RESERVA y cuánto falta hasta el día al que quieres llegar. La necesidad diaria no es una dieta 'normal': en una emergencia el objetivo es seguir operativo, no quedar saciado.",

  // SUGO-TURA (coach) szovegei, 2026-10-05 -- Fonok: "Menjen a forditas."
  "Helyi szoba: szöveg a közeledben lévőknek, közös hálón, internet nélkül.": "Sala local: texto para los que están cerca de ti, en una red compartida, sin internet.",
  "Szobák: zárt csoport, amit a gazda kódjával lehet elérni, interneten át. Messziről is.": "Salas: un grupo cerrado al que se accede con el código del propietario, por internet. También desde lejos.",
  "Morze: rövid üzenet hanggal vagy fénnyel; a vétel kamerával és mikrofonnal megy.": "Morse: un mensaje corto con sonido o luz; la recepción funciona con la cámara y el micrófono.",
  "Fax (SSTV): kép átküldése hangban, rádión is. Ugyanaz a gomb indít és állít.": "Fax (SSTV): enviar una imagen dentro del sonido, también por radio. El mismo botón inicia y detiene.",
  "Adás: ide írod az üzenetet, és a telefon hanggal vagy fénnyel leadja.": "Emisión: aquí escribes el mensaje y el teléfono lo emite con sonido o luz.",
  "Olvasás fényből: a kamera a másik villogó fényét olvassa vissza szöveggé.": "Leer de la luz: la cámara convierte en texto la luz intermitente del otro.",
  "Olvasás hangból: a mikrofon a sípoló jelet fejti vissza.": "Leer del sonido: el micrófono descifra la señal de pitidos.",
  "Gyakorló: hallás utáni fejtés, kézi kulcs és kopogás — itt tanulod meg.": "Entrenador: descifrar de oído, manipulador manual y golpes — aquí es donde se aprende.",
  "Alapok: időzítés, sebesség, a teljes ábécé, és mit tegyél zárt helyen.": "Fundamentos: ritmo, velocidad, el alfabeto completo y qué hacer en un espacio cerrado.",
  "A szoba beállításai": "Ajustes de la sala",
  "A szoba kódja: ezt add meg annak, akit behívsz. Koppints rá, és a vágólapra kerül.": "El código de la sala: dáselo a quien invites. Tócalo y pasa al portapapeles.",
  "Értesítés: a készülék engedélye, és külön az, hogy EBBEN a szobában jelezzen-e.": "Notificación: el permiso del dispositivo y, por separado, si debe avisarte en ESTA sala.",
  "A neved: ezen a néven látnak minden szobában. Egy szobában egy nevet csak egy valaki használhat.": "Tu nombre: con este nombre te ven en todas las salas. En una sala un nombre solo lo puede usar una persona.",
  "Tagok: a szoba tagjainak listája. Ha te vagy a gazda, egy tagra koppintva eltávolíthatod: az új üzeneteket már nem látja, és csak új meghívóval jöhet vissza.":
    "Miembros: la lista de miembros de la sala. Si eres el anfitrión, toca a un miembro para eliminarlo: ya no verá los mensajes nuevos y solo podrá volver con una invitación nueva.",
  "Megszüntetés: ha te vagy a gazda, a törlés mindenkinek megszünteti. Ha nem, csak te lépsz ki.": "Eliminación: si eres el propietario, borrarla la elimina para todos. Si no, solo sales tú.",
  "A helyi szoba beállításai": "Ajustes de la sala local",
  "A szoba kulcsa: közös jelszó. Akinek nincs meg, annak értelmetlen betűsor marad az üzenet.": "La clave de la sala: una contraseña compartida. Quien no la tenga, para él el mensaje queda como una serie de letras sin sentido.",
  "A neved: ezt látják a többiek az üzeneted mellett.": "Tu nombre: esto es lo que ven los demás junto a tu mensaje.",
  "Morze adás": "Emisión Morse",
  "Ide írod az üzenetet. Ékezet és cirill nem megy: a Morze-tábla latin betűt és számot ismer.": "Aquí escribes el mensaje. Las tildes y el cirílico no funcionan: la tabla Morse conoce letras latinas y cifras.",
  "Alatta rögtön látod, hogy néz ki Morze-jelekben.": "Justo debajo ves cómo queda en señales Morse.",
  "Adás: ugyanaz a gomb indít és állít. Nincs külön Állj.": "Emitir: el mismo botón inicia y detiene. No hay un Parar aparte.",
  "SOS: egy koppintás, és megy a nemzetközi vészjel, amíg le nem állítod.": "SOS: un toque y sale la señal internacional de socorro hasta que la detengas.",
  "A fogaskerék alatt a sebesség, a hangmagasság, az ismétlés és a villogtatás.": "Bajo el engranaje: la velocidad, el tono, la repetición y el parpadeo.",
  "Olvasás fényből": "Leer de la luz",
  "Indítsd, és irányítsd a kamerát a villogó fényre. Sötét háttér, a fény a kép közepén.": "Inícialo y apunta la cámara a la luz intermitente. Fondo oscuro, la luz en el centro de la imagen.",
  "A lámpa és a sáv mutatja, mit lát a kamera. Ha nem villan, nem jó a kivágás.": "La lámpara y la barra muestran lo que ve la cámara. Si no parpadea, el encuadre no es bueno.",
  "Fent a nyers jel, alatta a megfejtett szöveg.": "Arriba la señal en bruto, debajo el texto descifrado.",
  "A fogaskerék alatt a vétel-sebesség, a nagyítás és a kalibráció.": "Bajo el engranaje: la velocidad de recepción, el zoom y la calibración.",
  "Olvasás hangból": "Leer del sonido",
  "Indítsd, és tartsd a telefont a hang felé. Csendben megy a legjobban.": "Inícialo y acerca el teléfono al sonido. Funciona mejor en silencio.",
  "A lámpa és a frekvencia mutatja, mit hall. Zajra az érzékenységet szigorítsd.": "La lámpara y la frecuencia muestran lo que oye. Contra el ruido, aprieta la sensibilidad.",
  "A fogaskerék alatt a vétel-sebesség, az érzékenység és a kalibráció.": "Bajo el engranaje: la velocidad de recepción, la sensibilidad y la calibración.",
  "Morze gyakorló": "Entrenador de Morse",
  "Három mód: hallás után, kézi kulcs és kopogás. Egy koppintás a váltás.": "Tres modos: de oído, manipulador manual y golpes. Un toque cambia entre ellos.",
  "Mit gyakorolsz: betű, szám, három jel vagy szó. Kezdd a betűvel.": "Qué practicas: letra, número, tres signos o palabra. Empieza por la letra.",
  "Új feladat lejátszik egy jelet. Ha nem kaptad el, játszd le újra.": "Nuevo ejercicio reproduce una señal. Si no la has cogido, vuelve a reproducirla.",
  "Írd le, amit hallottál, és ellenőrizd. A megoldás és a Morze-minta csak utána látszik.": "Escribe lo que has oído y compruébalo. La solución y el patrón Morse solo aparecen después.",
  "Kézi kulcs": "Manipulador manual",
  "Nyomd és tartsd: rövid a pont, hosszú a vonás. Gépen a szóköz is kulcs.": "Pulsa y mantén: corto es el punto, largo la raya. En el ordenador la barra espaciadora también es manipulador.",
  "Fent a jel, alatta amit a gép kiolvasott belőle. A szünet hossza adja a betű- és szóhatárt.": "Arriba la señal, debajo lo que la aplicación ha leído de ella. La duración de la pausa marca el límite de letra y de palabra.",
  "Törlés: tiszta lappal kezdesz.": "Borrar: empiezas con la hoja en blanco.",
  "Kopogás": "Golpes",
  "A rács: minden betű két koppintás-csoport, előbb a sor, aztán az oszlop. A C és a K egy mezőn van.": "La cuadrícula: cada letra son dos grupos de golpes, primero la fila y luego la columna. La C y la K comparten casilla.",
  "Mutat egy betűt, te lekopogod: sor, szünet, oszlop. A szünet zárja a csoportot.": "Muestra una letra y tú la golpeas: fila, pausa, columna. La pausa cierra el grupo.",
  "Megmondja, jó volt-e, és kiírja a betű helyét a rácsban.": "Te dice si ha estado bien y muestra el lugar de la letra en la cuadrícula.",
  "Morze alapok": "Fundamentos del Morse",
  "A teljes ábécé. Ez a táblázat magából a kódból épül, tehát nem tud eltérni attól, amit az app ad.": "El alfabeto completo. Esta tabla se construye a partir del propio código, así que no puede diferir de lo que emite la aplicación.",
  "Kézi visszafejtés: ha leírtad a hallott jelet, ide beírva megkapod a szöveget.": "Descifrar a mano: si has anotado la señal que oíste, escríbela aquí y obtendrás el texto.",
  "Adás beállításai": "Ajustes de emisión",
  "Sebesség és hangmagasság. Kezdőnek a lassabb a jobb.": "Velocidad y tono. Para quien empieza, lo más lento es mejor.",
  "Ismétlés: addig megy a jel, amíg le nem állítod.": "Repetición: la señal sigue hasta que la detengas.",
  "Fény, hang vagy mindkettő. A vaku nem minden telefonon megy; a képernyő mindig.": "Luz, sonido o ambos. El flash no funciona en todos los teléfonos; la pantalla siempre.",
  "Kalibrációs adás: a PARIS szót küldi, amiből a másik fél beállítja a tempót.": "Emisión de calibración: envía la palabra PARIS, con la que la otra parte ajusta el ritmo.",
  "Fény-vétel beállításai": "Ajustes de recepción por luz",
  "Vétel-sebesség: állítsd a vett Morze tempójához, amíg tisztán jönnek a betűk.": "Velocidad de recepción: ajústala al ritmo del Morse recibido, hasta que las letras lleguen limpias.",
  "Nagyítás: távoli fényhez.": "Zoom: para una luz lejana.",
  "Kalibráció: a másik PARIS-t küld, ez megméri belőle a tempót.": "Calibración: el otro envía PARIS y de ahí se mide el ritmo.",
  "Hang-vétel beállításai": "Ajustes de recepción por sonido",
  "Vétel-sebesség: állítsd a vett Morze tempójához.": "Velocidad de recepción: ajústala al ritmo del Morse recibido.",
  "Érzékenység: balra érzékenyebb, jobbra szigorúbb a zajra.": "Sensibilidad: a la izquierda más sensible, a la derecha más estricta con el ruido.",
  "Mód: Martin M1 a biztos; a vevőnek ugyanezt kell tudnia.": "Modo: Martin M1 es el seguro; el receptor tiene que conocer el mismo.",
  "Kép választása, majd Adás: a telefon hangként játssza le. Tartsd a rádió mikrofonjához.": "Elegir imagen y luego Emitir: el teléfono la reproduce como sonido. Acércalo al micrófono de la radio.",
  "Vétel: ugyanaz a gomb indít és állít. Hangfájlból is megy, ha valaki felvételt küld.": "Recepción: el mismo botón inicia y detiene. También funciona desde un archivo de audio si alguien envía una grabación.",
  "Nyomd hosszan a térképet: ott új pontot veszel fel. A helyszínek jelölőjén a szám a készültség, nem sorszám.": "Mantén pulsado el mapa: ahí añades un nuevo punto. En los marcadores de tus lugares, el número es el nivel de preparación, no un número de orden.",
  "Mérés: két koppintás, és megkapod a távolságot.": "Medir: dos toques y obtienes la distancia.",
  "Pont ide, ahol vagyok: a GPS helyedet menti. Helyzetem küldése: elküldöd valakinek, hol vagy.": "Un punto justo aquí: guarda tu posición GPS. Enviar mi posición: le envías a alguien dónde estás.",
  "Pontok kimentése (GPX): a pontjaid fájlba, más térképbe is.": "Exportar puntos (GPX): tus puntos a un archivo, también para otros mapas.",
  "Terület letöltése: a térkép offline is meglesz. Ha nem kell már, a Tárolt térkép törlése felszabadítja a helyet.": "Descargar zona: el mapa estará también sin conexión. Si ya no lo necesitas, Borrar mapa guardado libera el espacio.",
  "A bővített tudástár a Prémium része: prémium kóddal, egyszeri feloldással, véglegesen. A cikk elején látod, meddig tart az ingyenes rész és hol kezdődik a bővített.": "La base de conocimientos ampliada forma parte de Premium: se desbloquea una vez con un código premium, para siempre. Al principio del artículo ves dónde acaba la parte gratuita y dónde empieza la ampliada.",
  "Kereséssel gyorsabban odaérsz, mint görgetéssel.": "Con la búsqueda llegas antes que desplazándote.",
  "Új tétel: mi az, mennyi, hol tartod, mikor jár le. A lejárat színe magától változik.": "Nuevo artículo: qué es, cuánto, dónde lo guardas, cuándo caduca. El color de la caducidad cambia solo.",
  "Szűrés kategóriára, helyszínre és készlet-fajtára: a 72 órás csomagot például külön látod.": "Filtrar por categoría, ubicación y tipo de reserva: el paquete de 72 horas, por ejemplo, lo ves aparte.",
  "72h csomag: egy koppintással feltölti az alap-listát, amit aztán a sajátodra igazítasz.": "Paquete 72h: un toque rellena la lista básica, que luego ajustas a la tuya.",
  "Export: a lista fájlba, például a családnak. Ürítés: mindent töröl, előtte exportálj.": "Exportar: la lista a un archivo, por ejemplo para la familia. Vaciar: lo borra todo, exporta antes.",
  "Kik mennek: a lista a Háztartásnál felvett családtagokból áll össze.": "Quiénes van: la lista se forma con los familiares añadidos en Hogar.",
  "Hogyan és milyen út: autóval más fér, mint hátizsákkal; a túra fajtája hozza a saját tételeit.": "Cómo y qué tipo de camino: en el coche cabe otra cosa que en la mochila; el tipo de salida trae sus propios artículos.",
  "Hány napra: ebből számol a víz és az élelem.": "Para cuántos días: de aquí se calculan el agua y la comida.",
  "A súlykeret azt mutatja, mennyit bírtok el összesen, nem azt, mennyi fér a zsákba.": "El límite de peso muestra cuánto podéis llevar entre todos, no cuánto cabe en la mochila.",
  "Itt veszed fel a családot. Innen jön a fejadag és a Mit vigyek lista.": "Aquí añades a la familia. De aquí salen la ración diaria y la lista Qué llevar.",
  "Háziállat is számít: víz és élelem neki is kell.": "Las mascotas también cuentan: ellas también necesitan agua y comida.",
  "Helyszín: otthon, nyaraló, autó. Mindegyiknek saját készlete és készültség-kártyája lesz a kezdőlapon.": "Ubicación: casa, casa de campo, coche. Cada una tendrá su propia reserva y su tarjeta de preparación en la página de inicio.",
  "Ezt látja, aki megtalálja a telefonod. Csak azt írd ide, amit egy idegen is láthat.": "Esto lo ve quien encuentre tu teléfono. Escribe aquí solo lo que también puede ver un desconocido.",
  "Vércsoport, allergia, gyógyszer, betegség: ez az, ami egy mentőnek számít.": "Grupo sanguíneo, alergia, medicamento, enfermedad: esto es lo que le importa a un sanitario.",
  "Kit hívjanak: egy név és egy szám elég.": "A quién llamar: basta con un nombre y un número.",
  "QR-kód: a kártya egy képben, amit a másik telefon beolvas.": "Código QR: la tarjeta en una imagen que otro teléfono puede leer.",
  "Nyomtatás: a tárcába. Mind nyomtatása minden családtagét, a Családi kártya egy QR-ral az egész családot.": "Imprimir: para la cartera. Imprimir todo imprime la de cada familiar, y la Tarjeta familiar reúne a toda la familia en un QR.",
  "PIN: az iratok zárva vannak, amíg be nem írod.": "PIN: los documentos están bloqueados hasta que lo escribas.",
  "Hozzáadás: fotó vagy PDF. A telefonon marad, felhőbe nem megy.": "Añadir: una foto o un PDF. Se queda en el teléfono, no va a la nube.",
  "Közös jelszó: egy mondat, amit csak ti tudtok. Ugyanaz kell mindkét telefonon; mentsd el.": "Contraseña compartida: una frase que solo conocéis vosotros. Hace falta la misma en los dos teléfonos; guárdala.",
  "Üzenet vagy hely, majd QR készítése. A kód a teljes adatot viszi, nem linket: internet nélkül is megy.": "Mensaje o lugar, y luego Crear QR. El código lleva los datos completos, no un enlace: funciona también sin internet.",
  "Beolvasás kamerával vagy fájlból, majd Megfejtés. Csak a jelszó birtokosa olvassa.": "Leer con la cámara o desde un archivo, y luego Descifrar. Solo lo lee quien tiene la contraseña.",
  "Az imádságok mindig itt vannak, letöltés nélkül is. Koppints egy címre, és olvasd.": "Las oraciones están siempre aquí, incluso sin descarga. Toca un título y lee.",
  "A teljes Biblia egyszer letöltendő, utána offline is működik. Ha ez a gomb látszik, még nincs letöltve.": "La Biblia completa hay que descargarla una vez; después funciona también sin conexión. Si se ve este botón, todavía no está descargada.",
  "A könyvek rácsa: Ószövetség fent, Újszövetség lent. Koppints a könyvre, aztán a fejezetre, aztán a versre.": "La cuadrícula de los libros: Antiguo Testamento arriba, Nuevo Testamento abajo. Toca el libro, luego el capítulo, luego el versículo.",
  "Keresés szó szerint, vagy hely szerint (Ján 3,16). Amit megjelölsz, a Kiemeléseim alatt visszatalálod.": "Buscar por palabras o por referencia (Jn 3,16). Lo que marques lo vuelves a encontrar en Mis destacados.",
  "PIN: a tárca zárva van, amíg be nem írod. Első használatkor te adod meg.": "PIN: la cartera está bloqueada hasta que lo escribas. La primera vez lo defines tú.",
  "A szám azt mutatja, mennyi áll a tárcádban; a rekeszek külön célra tesznek félre.": "El número muestra cuánto hay en tu cartera; los compartimentos apartan para fines distintos.",
  "Felveszed az azimutot, és a tájoló mutatja a visszautat is. Törlés, ha új irány kell.": "Tomas el azimut y la brújula te muestra también el camino de vuelta. Bórralo si necesitas una dirección nueva.",
  "Napkelte, napnyugta, holdfázis: mennyi világosod van. Mérés a helyzetemre pontosít GPS-szel.": "Amanecer, atardecer, fase lunar: cuánta luz de día tienes. Medir lo ajusta a tu posición con GPS.",
  "Légnyomás: írd be vagy mérd a szenzorral, és rögzítsd. Az esés vihart jelez; a küszöb és az értesítés itt állítható.": "Presión del aire: escríbela o mídela con el sensor, y regístrala. Una caída anuncia tormenta; el umbral y el aviso se ajustan aquí.",
  "Több számoló egy helyen: koppints arra, amelyik kell. Mindegyik egy kérdésre válaszol: meddig elég, mennyi kell.": "Varias calculadoras en un sitio: toca la que necesites. Cada una responde a una pregunta: cuánto dura, cuánto hace falta.",
  "Víztisztítás: mennyi hipó kell, és meddig kell forralni. A töménységet az üvegről olvasd le.": "Purificación del agua: cuánta lejía hace falta y cuánto hay que hervir. La concentración léela en la botella.",
  "Két út van: forralás vagy hipó. A forralás egyszerűbb, a hipó akkor jó, ha nincs mivel tüzelni.": "Hay dos caminos: hervir o lejía. Hervir es más sencillo; la lejía va bien cuando no hay con qué hacer fuego.",
  "A hipó töménységét az ÜVEGRŐL olvasd le. A megadott mennyiségek 5 százalékos szerre szólnak — gyengébből több kell. Ha az üvegen más áll, ne fejből számolj.": "Lee la concentración de la lejía EN LA BOTELLA. Las cantidades indicadas son para un producto al 5 por ciento: de uno más flojo hace falta más. Si en la botella pone otra cosa, no calcules de memoria.",
  "A számoló a megadott töménységgel dolgozik. Ha átállítod, a mennyiség is változik — ezért kérdezi meg.": "La calculadora trabaja con la concentración que has indicado. Si la cambias, la cantidad cambia también: por eso te lo pregunta.",
  "A Szoba zárt csoport, ami interneten át is elérhető: aki messze van, az is beszélget. A Helyi szoba ezzel szemben a közeledben lévőknek szól, hálózat nélkül.": "La Sala es un grupo cerrado accesible también por internet: incluso quien está lejos puede hablar. La Sala local, en cambio, es para los que están cerca de ti, sin red.",
  "Új szobát itt hozol létre. Te leszel a gazdája: te engeded be, aki kér.": "Aquí creas una sala nueva. Serás su propietario: tú dejas entrar a quien lo pide.",
  "Ha máshoz csatlakoznál: írd be a gazdától kapott kódot, és küldd el a kérelmet. A gazda jóváhagyása után vagy bent.": "Si quieres unirte a otro: escribe el código que te dio el propietario y envía la solicitud. Tras su aprobación ya estás dentro.",
  "Ide írod az üzenetet, és a Küldés viszi el a szoba minden tagjának.": "Aquí escribes el mensaje, y Enviar lo lleva a todos los miembros de la sala.",
  "A Sürgős jelölés pirossal emeli ki az üzenetet mindenkinél.": "La marca Urgente resalta el mensaje en rojo para todos.",
  "Gazdaként itt látod a belépési kérelmeket, és itt adod ki a meghívó-kódot.": "Como propietario aquí ves las solicitudes de entrada, y aquí emites el código de invitación.",
  "Helyi üzenetek": "Mensajes locales",
  "A Helyi szoba a közeledben lévő telefonoknak szól, közös hálón, internet nélkül. A pont zölden mutatja, ha él a kapcsolat.": "La Sala local es para los teléfonos que están cerca de ti, en una red compartida, sin internet. El punto se pone verde si la conexión está viva.",
  "Ha nem talál senkit: Próbáld újra. Mindenkinek ugyanazon a helyi hálón kell lennie.": "Si no encuentra a nadie: Inténtalo de nuevo. Todos tienen que estar en la misma red local.",
  "A közös kulcs titkosítja az üzeneteket: ugyanazt a kulcsot add meg minden telefonon, és mentsd el.": "La clave compartida cifra los mensajes: pon la misma clave en todos los teléfonos y guárdala.",
  "Kommunikáció: üzenet szöveggel, hanggal vagy fénnyel, akkor is, ha nincs térerő.": "Comunicación: mensaje por texto, sonido o luz, incluso cuando no hay cobertura.",
  "Térkép: helyszíneid, offline térképpel és mért távolsággal.": "Mapa: tus ubicaciones, con mapa sin conexión y distancia medida.",
  "Tudástár: a felkészülés cikkei, kereshetően.": "Base de conocimientos: los artículos de la preparación, con búsqueda.",
  "Készlet: mi van, hol van, mikor jár le.": "Reservas: qué hay, dónde está, cuándo caduca.",
  "Mit vigyek: a csomaglista a családodra és az útra szabva.": "Qué llevar: la lista de equipaje adaptada a tu familia y al camino.",
  "Kockázat: a leggyengébb pontod egy gyűrűn.": "Riesgo: tu punto más débil en un anillo.",
  "Háztartás: a családtagok és a helyszínek; innen számol minden más.": "Hogar: los miembros de la familia y las ubicaciones; a partir de aquí se calcula todo lo demás.",
  "Vészkártya: amit egy idegen láthat, ha megtalálja a telefonod.": "Tarjeta de emergencia: lo que un desconocido puede ver si encuentra tu teléfono.",
  "Irattárca: az iratok fotói a telefonon, PIN mögött.": "Cartera de documentos: las fotos de tus documentos en el teléfono, tras un PIN.",
  "Titkos QR: üzenet vagy hely, amit csak a kód olvasója lát.": "QR secreto: un mensaje o un lugar que solo ve quien tiene el código.",
  "Biblia: imádságok, keresés, kiemelések, offline.": "Biblia: oraciones, búsqueda, destacados, sin conexión.",
  "Token tárca: az egyenleged és a rekeszeid.": "Cartera de tokens: tu saldo y tus compartimentos.",
  "Tájoló: irány, azimut, napkelte és napnyugta.": "Brújula: dirección, azimut, amanecer y atardecer.",
  "Kalkulátor: víz, áram, kalória, fűtés és a többi számoló egy helyen.": "Calculadora: agua, electricidad, calorías, calefacción y las demás calculadoras en un sitio.",
  "Vagyonkezelő: kiadás, bevétel, zsebek, a saját lapján.": "Gestor de bienes: gastos, ingresos, bolsillos, en su propia página.",
  "Gyülekező: a közösség fóruma, interneten.": "Comunidad: el foro de la comunidad, en internet.",
  "Nyelv: az app felülete azonnal átvált, a tudástár cikkei is, ha van fordításuk.": "Idioma: la interfaz de la aplicación cambia al instante, y también los artículos de la base de conocimientos, si tienen traducción.",
  "Teljes mentés: minden adatod egy fájlba, amit vissza tudsz tölteni egy másik telefonon.": "Copia completa: todos tus datos en un archivo que puedes restaurar en otro teléfono.",
  "Visszatöltés a mentett fájlból. A biztonsági másolatból akkor állíts vissza, ha egy mentés félresikerült.": "Restaurar desde el archivo guardado. Restaura desde la copia de seguridad si una copia salió mal.",
  "Menüsor bemutatása: az alsó gombok súgója újra.": "Recorrido por la barra de menú: la ayuda de los botones inferiores otra vez.",
  "Gyári visszaállítás mindent töröl a telefonról. Előtte ments.": "El restablecimiento de fábrica borra todo del teléfono. Haz una copia antes.",
  "Ha az app sötét vagy üres marad: engedélyezd a vírusirtóban (például Avast), vagy használd a böngészős változatot. A Play-áruházban vásárolt prémium árát 48 órán belül visszakérheted.": "Si la app se queda oscura o vacía: permítela en tu antivirus (por ejemplo, Avast) o usa la versión del navegador. El premium comprado en Google Play se puede reembolsar en un plazo de 48 horas.",
  "Itt minden modul listában is elérhető, ugyanoda visz, mint a kezdőlap csempéi.": "Aquí cada módulo está también disponible en forma de lista, lleva al mismo sitio que las casillas de la página de inicio.",
  "Add meg, mi az, mennyi, és mennyit nyom: ebből számol a készlet és a Mit vigyek.": "Indica qué es, cuánto y cuánto pesa: de aquí se calculan las reservas y Qué llevar.",
  "A lejárathoz elég egy gyors gomb: +6 hónap, +1 év. A színe magától változik, ahogy közeledik.": "Para la caducidad basta un botón rápido: +6 meses, +1 año. Su color cambia solo a medida que se acerca.",
  "Hol tartod: a helyszín dönti el, melyik készültség-kártyán jelenik meg.": "Dónde lo guardas: la ubicación decide en qué tarjeta de preparación aparece.",
  "A képernyő-fény húzással állítható: minél erősebb, annál messzebbről látszik — de annál gyorsabban fogy az akku.": "La luz de la pantalla se ajusta arrastrando: cuanto más fuerte, desde más lejos se ve, pero más rápido se gasta la batería.",
  "Böngészőből iPhone-on a vaku egyáltalán nem indul, Androidon sem mindenhol. A képernyő-fény viszont mindig van.": "Desde el navegador, en el iPhone el flash no se enciende en absoluto, y en Android tampoco en todas partes. La luz de la pantalla, en cambio, siempre está.",
  "Sípolás: éles hang a telefonból; a Folyamatos addig szól, amíg le nem állítod. A hangmagasság állítható.": "Silbido: un sonido agudo del teléfono; el Continuo suena hasta que lo detengas. El tono se puede ajustar.",
  "Újraélesztés üteme: a gomb tartja a helyes tempót. Nyomd a mellkast a jelre.": "Ritmo de reanimación: el botón mantiene el tempo correcto. Presiona el pecho al compás.",
  "112 hívása: közvetlenül tárcsáz. Ha nincs térerő, a segélyhívás akkor is próbálkozik.": "Llamar al 112: marca directamente. Si no hay cobertura, la llamada de emergencia lo intenta igualmente.",
  "Mobiltelefon": "Teléfono móvil",
  "Kézi rádió (adóvevő)": "Radio portátil (transceptor)",
  "Zsebrádió": "Radio de bolsillo",
  "Átjátszó": "Repetidor",
  "Antenna": "Antena",
  "Takaró / pokróc": "Manta",
};

// 2026-10-11: Biblia nyito csempek, beallitasok, vers-menu, jegyzetek, kereszthivatkozasok, hang-letoltes
Object.assign(window.PP_FORD_SZOTAR.es, {
  "+ Új kategória…": "+ Nueva categoría…",
  "A letölthető hanganyag listája most nem érhető el.": "La lista de audios descargables no está disponible ahora.",
  "A letöltés csak nyitott alkalmazással halad. Ha bezárod, a következő megnyitáskor magától folytatódik.": "La descarga solo avanza con la app abierta. Si la cierras, continúa sola la próxima vez que la abras.",
  "A letöltés megállt": "La descarga se detuvo",
  "A letöltéshez be kell jelentkezned a fiókodba (Profil → Fiók).": "Para descargar, inicia sesión en tu cuenta (Perfil → Cuenta).",
  "A letöltéshez újra be kell lépned. Frissítsd az oldalt, és lépj be.": "Para descargar, debes iniciar sesión de nuevo. Recarga la página e inicia sesión.",
  "A telefon saját hangja": "La voz del propio teléfono",
  "A vers a vágólapra került, illeszd be, ahová szeretnéd.": "El versículo está en el portapapeles; pégalo donde quieras.",
  "A versek mellett egy kis jel mutatja, ha más igék kapcsolódnak hozzá; rákoppintva átugorhatsz a kapcsolódó igére. Forrás: OpenBible.info (CC BY).": "Una pequeña marca junto a un versículo indica que otros versículos se relacionan con él; tócala para saltar al versículo relacionado. Fuente: OpenBible.info (CC BY).",
  "Az új kategória neve:": "Nombre de la nueva categoría:",
  "Biblia beállítások": "Ajustes de la Biblia",
  "Csak magyar nyelven érhető el.": "Solo disponible en húngaro.",
  "Ez az eszköz nem enged másolni.": "Este dispositivo no permite copiar.",
  "Felolvasás beállításai": "Ajustes de lectura en voz alta",
  "Felolvasó hang": "Voz de lectura",
  "Forrás: OpenBible.info kereszthivatkozások (CC BY), a legtöbbet szavazottak.": "Fuente: referencias cruzadas de OpenBible.info (CC BY), las más votadas.",
  "Imák": "Oraciones",
  "Jegyzeteim": "Mis notas",
  "Jobb minőségű, természetesebb felolvasás a Károli-fordításhoz. Internettel azonnal szól; ha letöltöd, internet nélkül is.": "Lectura de mejor calidad y más natural de la traducción Károli. Con internet suena al instante; descargada, también sin conexión.",
  "Kapcsolódó igék": "Versículos relacionados",
  "Kereszthivatkozások": "Referencias cruzadas",
  "Kereszthivatkozások megjelenítése": "Mostrar referencias cruzadas",
  "Keresés": "Buscar",
  "Kiemelés": "Subrayar",
  "Kiemelés levétele": "Quitar subrayado",
  "Kiemelések": "Subrayados",
  "Kommentár": "Comentario",
  "Kommentár hozzáadása": "Añadir comentario",
  "Kommentár megnyitása": "Abrir comentario",
  "Kommentár szerkesztése": "Editar comentario",
  "Kommentárjaim": "Mis comentarios",
  "Kommentárok": "Comentarios",
  "Könyvjelző": "Marcador",
  "Könyvjelző hozzáadása": "Añadir marcador",
  "Könyvjelző módosítása": "Cambiar marcador",
  "Könyvjelző törlése": "Eliminar marcador",
  "Könyvjelzők": "Marcadores",
  "Letöltve": "Descargado",
  "Letöltés folyamatban": "Descarga en curso",
  "Letöltés folytatása": "Continuar descarga",
  "Letöltés internet nélküli felolvasáshoz": "Descargar para leer sin conexión",
  "Megosztás": "Compartir",
  "Megszakadt az internetkapcsolat. Amit már letöltöttél, megmarad; a gombbal folytathatod.": "Se cortó la conexión a internet. Lo ya descargado se conserva; continúa con el botón.",
  "Melyik szóra keressünk a Bibliában?": "¿Qué palabra buscamos en la Biblia?",
  "Mind törlése": "Eliminar todo",
  "Még nincs kiemelt vers. Tartsd nyomva egy verset, és válaszd a Kiemelés pontot.": "Aún no hay versículos subrayados. Mantén pulsado un versículo y elige Subrayar.",
  "Még nincs kommentár. Tartsd nyomva egy verset, és válaszd a Kommentár hozzáadása pontot.": "Aún no hay comentarios. Mantén pulsado un versículo y elige Añadir comentario.",
  "Még nincs könyvjelző. Tartsd nyomva egy verset, és válaszd a Könyvjelző hozzáadása pontot.": "Aún no hay marcadores. Mantén pulsado un versículo y elige Añadir marcador.",
  "Nem foglal helyet, internet nélkül is szól. Kisebb telefonokra ezt ajánljuk.": "No ocupa espacio y funciona sin conexión. Recomendada para teléfonos pequeños.",
  "PrepperPapa hang": "Voz de PrepperPapa",
  "Saját szín hozzáadása": "Añadir color propio",
  "Saját szín törlése: tartsd nyomva a színt.": "Eliminar un color propio: mantenlo pulsado.",
  "Teljes Biblia letöltése": "Descargar toda la Biblia",
  "Törlöd az összes letöltött hanganyagot?": "¿Eliminar todos los audios descargados?",
  "Törlöd ezt a saját színt a választékból? A már kiemelt versek megmaradnak.": "¿Quitar este color de la paleta? Los versículos ya subrayados se mantienen.",
  "Válassz színt": "Elige un color",
  "Vár": "En espera",
  "Általános": "General",
  "Várakozó könyvek": "Libros en espera",
});

// 2026-10-11: a Biblia sugo v4 szovegei
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Biblia: itt a könyvek rácsa és a keresés. A teljes szöveg egyszer letöltendő, utána internet nélkül is olvasható.": "Biblia: aquí están la cuadrícula de libros y la búsqueda. El texto completo se descarga una vez y luego se puede leer sin conexión.",
  "Imák: mindig elérhetők, letöltés nélkül is. Koppints egy címre, és olvasd.": "Oraciones: siempre disponibles, incluso sin descarga. Toca un título y léelo.",
  "Vészhelyzeti igék és próféciák: válogatott szakaszok, egy koppintással.": "Versículos para emergencias y profecías: pasajes seleccionados, a un toque.",
  "Az app bibliaolvasót tartalmaz. A lelki felkészültség rész keresztény szemszögből készült.": "La app incluye un lector de la Biblia. La sección de preparación espiritual está escrita desde una perspectiva cristiana.",
  "Tartsd nyomva egy verset: keresés, kiemelés, kommentár, könyvjelző és megosztás. Amit így jelölsz, a Kiemeléseim és a Kommentárjaim alatt visszatalálod.": "Mantén pulsado un versículo: buscar, subrayar, comentar, marcar y compartir. Lo que marques así lo encuentras en Mis subrayados y Mis comentarios.",
  "Beállítások: a felolvasó hang, a letöltés internet nélküli felolvasáshoz, és a kereszthivatkozások bekapcsolása.": "Ajustes: la voz de lectura, la descarga para leer sin conexión y la activación de las referencias cruzadas.",
});

// 2026-10-11: Biblia forditas-valaszto
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Biblia-fordítás": "Traducción de la Biblia",
  "Itt azok a fordítások látszanak, amelyeket már letöltöttél. Másik nyelvű Bibliát a felület nyelvének átállításával tölthetsz le.": "Aquí aparecen las traducciones que ya descargaste. Para descargar una Biblia en otro idioma, cambia el idioma de la app.",
  "Ez a fordítás most nem érhető el.": "Esta traducción no está disponible ahora.",
});

// MEGVALLASOK + SAJAT IMA (Fonok 2026-10-11 10:09/10:10)
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Megvallások": "Confesiones",
  "Még nincs itt semmi. A jobb alsó plusz gombbal hozzáadhatsz egy sajátot.": "Aún no hay nada aquí. Con el botón más de abajo a la derecha puedes añadir uno propio.",
  "Csak ezen a készüléken tárolódik.": "Se guarda solo en este dispositivo.",
  "Saját hozzáadása": "Añadir propio",
  "Add meg a címet és a szöveget.": "Escribe un título y el texto.",
  "Nem sikerült menteni.": "No se pudo guardar.",
  "Biztosan törlöd?": "¿Seguro que quieres borrarlo?",
  "saját": "propio",
});

// OLVASASI TERV (Fonok 2026-10-11 10:42)
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Olvasási terv": "Plan de lectura",
  "Válassz egy tervet. A haladásodat a telefon megjegyzi, és mutatja, hol tartasz.": "Elige un plan. Tu teléfono recuerda tu progreso y muestra dónde estás.",
  "Válassz egy tervet. Több tervet is olvashatsz egyszerre, mindegyiknél külön megmarad, hol tartasz.": "Elige un plan. Puedes leer varios planes a la vez; cada uno guarda por separado dónde vas.",
  "Teljes Biblia egy év alatt": "Toda la Biblia en un año",
  "Az elejétől a végéig, a könyvek sorrendjében.": "De principio a fin, en el orden de los libros.",
  "Kronologikus Biblia egy év alatt": "Biblia cronológica en un año",
  "Az események időrendjében: Jób a pátriárkák korában, a Zsoltárok Dávid idején, a próféták a királyok mellett, a levelek az Apostolok cselekedetei közé illesztve.": "En el orden de los acontecimientos: Job en la época de los patriarcas, los Salmos en tiempos de David, los profetas junto a los reyes, las cartas intercaladas en Hechos.",
  "Teljes Biblia 90 nap alatt": "Toda la Biblia en 90 días",
  "Gyors ütemű, a könyvek sorrendjében.": "Ritmo rápido, en el orden de los libros.",
  "Újszövetség 90 nap alatt": "Nuevo Testamento en 90 días",
  "Máté evangéliumától a Jelenésekig.": "De Mateo a Apocalipsis.",
  "Az evangéliumok 30 nap alatt": "Los Evangelios en 30 días",
  "Máté, Márk, Lukács és János.": "Mateo, Marcos, Lucas y Juan.",
  "Zsoltárok és Példabeszédek 60 nap alatt": "Salmos y Proverbios en 60 días",
  "Napi néhány zsoltár és egy kis bölcsesség.": "Unos salmos y un poco de sabiduría cada día.",
  "Elindítod ezt a tervet?": "¿Empezar este plan?",
  "A tervet befejezted. Áldás rá!": "Has terminado el plan. ¡Dios te bendiga!",
  "Tartod az ütemet.": "Vas al día.",
  "Elolvastam": "Lo he leído",
  "Minden nap": "Todos los días",
  "Terv leállítása": "Detener el plan",
  "Leállítod a tervet? A haladásod törlődik.": "¿Detener el plan? Tu progreso se borrará.",
});

// SUGO bible v5 (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Biblia: itt a könyvek rácsa és a keresés. Fönt a fordítás, a könyv, a fejezet és a vers koppintható, így gyorsan odaugrasz. A teljes szöveg egyszer letöltendő, utána internet nélkül is olvasható.": "Biblia: la cuadrícula de libros y la búsqueda. Arriba, la traducción, el libro, el capítulo y el versículo se pueden tocar para saltar rápido. El texto completo se descarga una vez y luego funciona sin internet.",
  "Imák és megvallások: a jobb alsó plusz gombbal hozzáadhatod a sajátjaidat. Ezek csak ezen a telefonon tárolódnak.": "Oraciones y confesiones: añade las tuyas con el botón más de abajo a la derecha. Se guardan solo en este teléfono.",
  "Olvasási terv: válassz egy tervet, például a kronologikusat, és itt látod, hol tartasz, és mi a következő olvasmány.": "Plan de lectura: elige un plan, por ejemplo el cronológico, y verás dónde estás y qué toca leer.",
});

// SZOBAKULCS UJ ESZKOZON (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Ezen az eszközön nincs meg ennek a szobának a kulcsa: a korábbi üzenetek egy másik kulccsal készültek (másik telefonon vagy újratelepítés előtt). Ha megvan egy régi meghívó linked ehhez a szobához, nyisd meg azt ezen a telefonon, és minden olvasható lesz. Ha most új kulcsot készítesz, a régi tagok csak új meghívó link után olvassák az üzeneteidet. Készítsek új kulcsot?": "Este dispositivo no tiene la clave de esta sala: los mensajes anteriores se hicieron con otra clave (en otro teléfono o antes de reinstalar). Si aún tienes un enlace de invitación antiguo de esta sala, ábrelo en este teléfono y todo será legible. Si creas una clave nueva ahora, los miembros antiguos solo podrán leer tus mensajes tras un nuevo enlace de invitación. ¿Crear una clave nueva?",
  "Új titkosító kulcs készült. Küldj ÚJ meghívó linket minden tagnak.": "Se ha creado una nueva clave de cifrado. Envía un NUEVO enlace de invitación a cada miembro.",
});

// GIRA KONYV-OSSZEFESULES (2026-10-11)
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Gíra-könyv csomag (ismeretlen formátum)": "Paquete del libro gira (formato desconocido)",
  "Gíra-könyv": "Libro gira",
  "hamis aláírás": "firma falsa",
  "KÉTSZERI KÖLTÉS": "DOBLE GASTO",
  "aláírások rendben": "firmas correctas",
  "Előbb csatlakozz egy helyi szobához (Bluetooth vagy wifi).": "Primero únete a una sala local (Bluetooth o wifi).",
  "Még nincs aláírt gíra-tételed, amit megoszthatnál.": "Aún no tienes partidas gira firmadas para compartir.",
  "A helyi szobának nincs titkosító kulcsa, ezért nem küldöm el a könyvet.": "La sala local no tiene clave de cifrado, así que no envío el libro.",
  "Elküldve a helyi szobába": "Enviado a la sala local",
  "csomag": "paquetes",
  "Nem ment el minden csomag. Nézd meg, hogy egy hálón vagytok-e.": "No se enviaron todos los paquetes. Comprueba que estáis en la misma red.",
  "Előbb nyiss meg egy online szobát.": "Primero abre una sala en línea.",
  "Az online szobának nincs titkosító kulcsa ezen a telefonon, ezért nem küldöm el a könyvet.": "La sala en línea no tiene clave de cifrado en este teléfono, así que no envío el libro.",
  "Elküldve az online szobába": "Enviado a la sala en línea",
  "Nem ment el minden csomag.": "No se enviaron todos los paquetes.",
  "Könyvek összefésülése": "Conciliar libros",
  "A tagok kicserélik az aláírt gíra-tételeiket, és a telefon minden aláírást ellenőriz. Ha valaki ugyanazt a gírát kétszer adta oda, itt kiderül. Szerver és blokklánc nélkül megy: a szoba csak továbbítja a titkosított csomagot.": "Los miembros intercambian sus partidas gira firmadas y el teléfono verifica cada firma. Si alguien entregó la misma gira dos veces, aquí se ve. Sin servidor ni blockchain: la sala solo reenvía el paquete cifrado.",
  "Küldés a helyi szobába (Bluetooth / wifi)": "Enviar a la sala local (Bluetooth / wifi)",
  "Küldés az online szobába": "Enviar a la sala en línea",
  "Közösségi könyv": "Libro comunitario",
  "kétszeri költés": "dobles gastos",
  "sorszám": "número",
});

window.PP_FORD_MINTAK = window.PP_FORD_MINTAK || {};
window.PP_FORD_MINTAK.es = (function () {
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
    csere: (_, n) => 'En este tema hay todavía ' + n + (+n === 1 ? ' artículo más, su introducción puedes leerla arriba.' : ' artículos más, sus introducciones puedes leerlas arriba.') },
  { minta: /^Használható fény (\d{1,2}:\d{2}) és (\d{1,2}:\d{2}) között: a napkelte előtt és a napnyugta után is van még annyi, amivel lehet menni\.$/,
    csere: "Luz utilizable entre las $1 y las $2: tanto antes del amanecer como después del atardecer queda todavía la suficiente para caminar." },
  { minta: /^([\d.,]+) m² alapján$/,
    csere: "a partir de $1 m²" },
  { minta: /^(\d+) fő · (\d+) nap · (.+)$/,
    csere: (_, a, b, c) => a + ' ' + alak(+a, "persona", "personas") + ' · ' + b + ' ' + alak(+b, "día", "días") + ' · ' + c },
  { minta: /^(\d+) fő · (\d+) nap$/,
    csere: (_, a, b) => a + ' ' + alak(+a, "persona", "personas") + ' · ' + b + ' ' + alak(+b, "día", "días") },
  { minta: /^(\d+) fő$/,
    csere: (_, n) => n + ' ' + alak(+n, "persona", "personas") },
  { minta: /^(\d+) nap$/,
    csere: (_, n) => n + ' ' + alak(+n, "día", "días") },
  { minta: /^(\d+) db$/,
    csere: "$1 uds." },
  { minta: /^(\d+) tétel$/,
    csere: (_, n) => n + ' ' + alak(+n, "elemento", "elementos") },
  { minta: /^IGE — (.+)$/,
    csere: "VERSÍCULO — $1" },
  { minta: /^Ige — (.+)$/,
    csere: "Versículo — $1" },
  { minta: /^Tudástár — (.+)$/,
    csere: "Saber — $1" },
  { minta: /^(\d+)\. fejezet$/,
    csere: "Capítulo $1" },
  { minta: /^(\d+)\. fejezet · vers$/,
    csere: "Capítulo $1 · versículo" },
  { minta: /^(\d+) fejezet$/,
    csere: (_, n) => n + ' ' + alak(+n, "capítulo", "capítulos") },
  { minta: /^Kész: (\d+) könyv, offline is megvan\.$/,
    csere: "Listo: $1 libros, disponibles también sin conexión." },
  { minta: /^Nem sikerült a helymeghatározás: (.+)$/,
    csere: "La localización no ha funcionado: $1" },
  { minta: /^Nem sikerült a helymeghatározás\.$/,
    csere: "La localización no ha funcionado." },
  { minta: /^Nem sikerült: (.+)$/,
    csere: "No ha funcionado: $1" },
  { minta: /^Felvéve: (.+)$/,
    csere: "Añadido: $1" },
  { minta: /^Módosítva: (.+)$/,
    csere: "Modificado: $1" },
  { minta: /^Törlöd: (.+)$/,
    csere: "Eliminar: $1" },
  { minta: /^vércsoport hiányzik · allergia: (.+)$/,
    csere: "falta el grupo sanguíneo · alergia: $1" },
  { minta: /^vércsoport hiányzik · nincs ismert allergia$/,
    csere: "falta el grupo sanguíneo · ninguna alergia conocida" },
  { minta: /^(.+) · nincs ismert allergia$/,
    csere: "$1 · ninguna alergia conocida" },
  { minta: /^(.+) · allergia: (.+)$/,
    csere: "$1 · alergia: $2" },
  { minta: /^növekvő hold, (\d+)%$/,
    csere: "luna creciente, $1%" },
  { minta: /^fogyó hold, (\d+)%$/,
    csere: "luna menguante, $1%" },
  { minta: /^(.+) · (\d+) tag · te indítottad$/,
    csere: (_, a, n) => a + ' · ' + n + ' ' + alak(+n, "miembro", "miembros") + " · lo iniciaste tú" },
  { minta: /^(.+) · (\d+) tag · (.+) indította$/,
    csere: (_, a, n, k) => a + ' · ' + n + ' ' + alak(+n, "miembro", "miembros") + " · iniciado por " + k },
  { minta: /^(\d+) tag · te indítottad$/,
    csere: (_, n) => n + ' ' + alak(+n, "miembro", "miembros") + " · lo iniciaste tú" },
  { minta: /^(\d+) tag · (.+) indította$/,
    csere: (_, n, k) => n + ' ' + alak(+n, "miembro", "miembros") + " · iniciado por " + k },
  { minta: /^még egyedül · te indítottad$/,
    csere: "todavía solo · la iniciaste tú" },
  { minta: /^még egyedül · (.+) indította$/,
    csere: "todavía solo · iniciada por $1" },
  { minta: /^(.+) · (\d+) tag$/,
    csere: (_, a, n) => a + ' · ' + n + ' ' + alak(+n, "miembro", "miembros") },
  { minta: /^(.+) · te indítottad$/,
    csere: "$1 · la iniciaste tú" },
  { minta: /^(.+) · (.+) indította$/,
    csere: "$1 · iniciada por $2" },
  { minta: /^(\d+) tag$/,
    csere: (_, n) => n + ' ' + alak(+n, "miembro", "miembros") },
  // OLVASASI TERV (2026-10-11)
  { minta: /^Kész: (\d+) \/ (\d+) nap \((\d+)%\)$/, csere: "Hecho: $1 / $2 días ($3%)" },
  { minta: /^Következő olvasmány: (\d+)\. nap$/, csere: "Próxima lectura: día $1" },
  { minta: /^Lemaradás: (\d+) nap$/, csere: (_, n) => "Retraso: " + n + ' ' + alak(+n, "día", "días") },
  { minta: /^Előrébb jársz: (\d+) nap$/, csere: (_, n) => "Adelanto: " + n + ' ' + alak(+n, "día", "días") },
  { minta: /^Napi átlag: ([\d,]+) fejezet$/, csere: "Media diaria: $1 capítulos" },
  { minta: /^Heti átlag: (\d+) fejezet$/, csere: "Media semanal: $1 capítulos" },
  { minta: /^(\d+)\. nap( •)?$/, csere: (_, n, p) => "Día #".replace('#', n) + (p || '') },
  ];
})();

// ===== 2026-10-13: ujjlenyomatos feloldas + PIN modositasa (v43.157) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Ujjlenyomattal": "Con huella",
  "Ujjlenyomat bekapcsolása": "Activar desbloqueo con huella",
  "Tárca feloldása": "Desbloquear cartera",
  "PIN-nel": "Usar PIN",
  "Az ujjlenyomathoz mentett PIN már nem érvényes. Add meg a PIN-t, utána újra bekapcsolhatod.": "El PIN guardado para tu huella ya no es válido. Introduce el PIN y luego podrás activarlo de nuevo.",
  "Új ujjlenyomatot vettél fel a telefonon, ezért egyszer add meg a PIN-t.": "Se añadió una huella nueva en el teléfono, así que introduce el PIN una vez.",
  "Az ujjlenyomatos feloldás most nem sikerült, add meg a PIN-t.": "El desbloqueo con huella no funcionó esta vez, introduce el PIN.",
  "Bekapcsolod az ujjlenyomatos feloldást? A PIN-t ekkor a telefon saját biztonsági kulcstára őrzi, az ujjad csak azt nyitja. A PIN ugyanúgy működik.": "¿Activar el desbloqueo con huella? El PIN quedará guardado en el almacén seguro del propio teléfono, y tu dedo solo abre ese almacén. El PIN sigue funcionando igual.",
  "Bekapcsolom": "Activar",
  "Most nem": "Ahora no",
  "Bekapcsolva: legközelebb ujjlenyomattal is beléphetsz.": "Activado: la próxima vez también podrás entrar con tu huella.",
  "Nem kapcsoltuk be. Később is megteheted: koppints újra a gombra.": "No se activó. Puedes hacerlo más tarde: vuelve a pulsar el botón.",
  "Nem sikerült bekapcsolni.": "No se pudo activar.",
  "A tár megnyitása nem sikerült.": "No se pudo abrir el almacén.",
  "PIN módosítása": "Cambiar PIN",
  "Régi PIN": "PIN anterior",
  "Új PIN (4-6 számjegy)": "PIN nuevo (4-6 dígitos)",
  "Új PIN még egyszer": "Repite el PIN nuevo",
  "Hibás a régi PIN.": "El PIN anterior es incorrecto.",
  "Az új PIN 4-6 számjegy legyen.": "El PIN nuevo debe tener 4-6 dígitos.",
  "A két új PIN nem egyezik.": "Los dos PIN nuevos no coinciden.",
  "A PIN módosítása nem sikerült, a régi PIN maradt érvényben.": "No se pudo cambiar el PIN; el anterior sigue siendo válido.",
  "A PIN megváltozott.": "El PIN se ha cambiado.",
  "A PIN megváltozott. Az ujjlenyomatos feloldás kikapcsolt, a következő PIN-es belépéskor újra bekapcsolhatod.": "El PIN se ha cambiado. El desbloqueo con huella se desactivó; podrás activarlo de nuevo en tu próximo acceso con PIN."
});

// ===== 2026-10-13: teszt-PIN, 6 szamjegy, Gira-kulcs a PIN mogott (v43.159) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Állíts be egy PIN-t (6 számjegy)": "Establece un PIN (6 dígitos)",
  "Új PIN (6 számjegy)": "PIN nuevo (6 dígitos)",
  "6 számjegy kell.": "Se necesitan 6 dígitos.",
  "Az új PIN 6 számjegy legyen.": "El PIN nuevo debe tener 6 dígitos.",
  "Tesztidőszak: a PIN 000000": "Periodo de prueba: el PIN es 000000",
  "Tesztidőszak: a PIN 0000": "Periodo de prueba: el PIN es 0000",
  "A Gíra aláíró kulcsa a PIN mögött van: nyisd meg a Token tárcát.": "La clave de firma de Gíra está tras el PIN: abre la cartera de tokens."
});

// ===== 2026-10-13: ujjlenyomat-animacio (v43.160) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Tedd az ujjad az érzékelőre": "Pon el dedo en el sensor",
  "Feloldva": "Desbloqueado"
});

// ===== 2026-10-13: ujjlenyomat-kor huzasa (v43.161) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Ha a kör nem az ujjlenyomat-olvasón van, húzd a helyére: a telefon megjegyzi.": "Si el círculo no está sobre el lector de huellas, arrástralo allí: el teléfono lo recordará."
});

// ===== 2026-10-13: OSM-alapreteg elore letoltese szunetel (v43.162) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Az alaptérkép előre letöltése szünetel, amíg elkészül a saját térképszerverünk. A már megnézett részek megmaradnak; a Turista réteget továbbra is letöltheted.": "La descarga previa del mapa base está en pausa hasta que nuestro propio servidor de mapas esté listo. Las partes ya vistas se conservan; la capa de senderismo se puede seguir descargando."
});


// ===== 2026-10-13: app-engedely a tesztidoszakra (v43.169, 0a58dbbb) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "PrepperPapa · tesztidőszak": "PrepperPapa · periodo de prueba",
  "A tesztidőszakban az app csak jóváhagyott tesztelői fiókkal használható. Lépj be az e-mail címeddel: kapsz egy 6 jegyű kódot, és utána a telefon megjegyzi, frissítés után sem kell újra.": "Durante el periodo de prueba la app solo se puede usar con una cuenta de probador aprobada. Inicia sesión con tu correo: recibirás un código de 6 dígitos y después el teléfono lo recordará, también tras las actualizaciones.",
  "Belépés": "Iniciar sesión",
  "Engedély kérése…": "Solicitando permiso…",
  "Ehhez a fiókhoz nincs engedély. Ha szerinted ez hiba, írj a prepperpapa@gmail.com címre.": "Esta cuenta no tiene permiso. Si crees que es un error, escribe a prepperpapa@gmail.com.",
  "Az első belépéshez internetkapcsolat kell.": "El primer inicio de sesión necesita conexión a internet.",
  "Az engedély most nem sikerült, próbáld újra.": "No se pudo obtener el permiso ahora, inténtalo de nuevo.",
  "Lejárt az engedélyed. Lépj be újra (ehhez internet kell).": "Tu permiso ha caducado. Vuelve a iniciar sesión (necesitas internet)."
});


// ===== 2026-10-13: terkep-kereso es turistapontok (v43.171, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "saját pont": "punto propio",
  "helyszín": "lugar",
  "Nincs találat.": "Sin resultados.",
  "Turistaút": "Sendero",
  "internet kell hozzá": "necesita internet",
  "nemzetközi": "internacional",
  "országos": "nacional",
  "regionális": "regional",
  "helyi": "local",
  "csúcs": "cumbre",
  "nyereg": "collado",
  "forrás": "manantial",
  "ivóvíz": "agua potable",
  "kút": "pozo",
  "barlang": "cueva",
  "kilátópont": "mirador",
  "kilátó": "torre mirador",
  "menedékház, esőbeálló": "refugio",
  "kórház": "hospital",
  "rendelőintézet": "clínica",
  "temető": "cementerio",
  "menedékház": "refugio",
  "esőbeálló, menedék": "refugio, cobertizo",
  "szálloda": "hotel",
  "vendégház, panzió": "casa de huéspedes",
  "turistaszálló": "albergue",
  "motel": "motel",
  "üdülő": "complejo vacacional",
  "apartman": "apartamento",
  "szálláshely": "alojamiento",
  "szupermarket": "supermercado",
  "áruház": "grandes almacenes",
  "bevásárlóközpont": "centro comercial",
  "piac": "mercado",
  "élelmiszerbolt": "tienda de alimentación",
  "zöldséges": "frutería",
  "pékség": "panadería",
  "hentes": "carnicería",
  "vegyesbolt": "tienda de comestibles",
  "cukrászda": "pastelería",
  "édességbolt": "tienda de golosinas",
  "italbolt": "tienda de bebidas",
  "posta": "oficina de correos",
  "bolt": "tienda",
  "táborhely": "camping",
  "pihenőhely": "área de descanso",
  "útjelző tábla": "poste indicador",
  "rom": "ruinas",
  "vár": "castillo",
  "kereszt, kápolna": "cruz, capilla"
});
Object.assign(window.PP_FORD_SZOTAR.es, {"Turistaút, csúcs, forrás, hely…": "Sendero, cumbre, manantial, lugar…"});

// ===== 2026-10-13: utvonalon megyek (v43.172, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Indulás": "Iniciar",
  "Leállítás": "Detener",
  "Navigáció indul": "Inicia la navegación",
  "Indulj el az útvonalon: az első lépésekből látom, merre mész.": "Empieza a caminar por la ruta: con los primeros pasos veo hacia dónde vas.",
  "Letértél az útvonalról.": "Te has salido de la ruta.",
  "Letértél az útvonalról": "Te has salido de la ruta",
  "Az útvonal": "Ruta",
  "irány": "rumbo",
  "Visszatértél az útvonalra.": "Has vuelto a la ruta.",
  "Az útvonalon vagy": "Estás en la ruta",
  "Indulj el: az első lépésekből látom, merre mész.": "Empieza a caminar: con los primeros pasos veo hacia dónde vas.",
  "Megérkeztél az útvonal végére.": "Has llegado al final de la ruta.",
  "Hátra": "Restante",
  "Megtett": "Recorrido",
  "Érkezés": "Llegada",
  "Szintgrafikon": "Perfil de altitud",
  "emelkedő": "subida",
  "múlva": "en",
  "előtted": "por delante",
  "cél": "meta",
  "utána ezt kövesd:": "luego sigue:",
  "élesen jobbra": "cerrado a la derecha",
  "jobbra": "a la derecha",
  "élesen balra": "cerrado a la izquierda",
  "balra": "a la izquierda",
  "Most fordulj": "Gira ahora",
  "méter múlva fordulj": "metros, luego gira",
  "Egyenesen tovább": "Sigue recto"
});

// ===== 2026-10-13: utvonaltervezes A-bol B-be (v43.173, 4c1a5683) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Útvonal ide": "Ruta hasta aquí",
  "Innen indulok": "Salir desde aquí",
  "Saját helyzetem": "Mi posición",
  "Válaszd ki a célt: keresés vagy egy pont buboréka": "Elige el destino: búsqueda o la burbuja de un punto",
  "Tervezés törlése": "Borrar plan",
  "Tervezés…": "Planificando…",
  "Nincs GPS-helyzet: válassz kezdőpontot (egy pont buborékán: „Innen indulok”).": "Sin posición GPS: elige un punto de salida («Salir desde aquí» en la burbuja de un punto).",
  "A turistaút-hálózat nem töltődött be.": "No se cargó la red de senderos.",
  "Nem találtam turistaút-útvonalat a két pont között.": "No hay ruta de senderos entre los dos puntos.",
  "A turistaútig": "Hasta el sendero",
  "légvonalban": "en línea recta",
  "Tervezett útvonal": "Ruta planificada",
  "Kövesd ezt a jelzést:": "Sigue esta marca:",
  "Kövesd az utat": "Sigue el camino",
  "és kövesd ezt:": "y sigue:"
});

// ===== 2026-10-13: kulfoldi turistautak =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Külföld országonként: térkép és turistautak": "Extranjero por país: mapa y senderos",
  "Tájegységek": "Regiones",
  "Turistautak és pontok": "Senderos y puntos",
  "Alaptérkép": "Mapa base",
  "Ennek az országnak a térképe egyben túl nagy.": "El mapa de este país es demasiado grande en una sola pieza.",
  "Tájegységenként letöltheted: nyisd le a listáját.": "Puedes descargarlo por regiones: abre su lista.",
  "Országonként külön letölthetők a turistautak a pontokkal és az útvonaltervezővel (ezek az online térképen is működnek, és kevés helyet foglalnak), és külön az alaptérkép a térerő nélküli használathoz. Az alaptérképet az első kéréskor a szerver készíti elő, ez néhány perc lehet.": "Para cada país se pueden descargar por separado los senderos con sus puntos y el planificador de rutas (también funcionan en el mapa en línea y ocupan poco espacio), y por separado el mapa base para usarlo sin cobertura. El servidor prepara el mapa base en la primera solicitud, lo que puede tardar unos minutos.",
  "tájegységenként letölthető": "descargable por regiones",
  "a méret letöltéskor derül ki": "el tamaño se sabrá al descargar",
  "Ennek a tájegységnek a térképe egyben túl nagy.": "El mapa de esta región es demasiado grande en una sola pieza.",
  "A tájegység térképét most nem sikerült előkészíteni.": "No se ha podido preparar el mapa de la región.",
  "Előkészítés…": "Preparando…",
  "a térkép túl nagy egyben": "el mapa es demasiado grande de una vez",
  "Most egy másik ország térképe készül, próbáld újra pár perc múlva.": "Se está preparando el mapa de otro país, inténtalo de nuevo en unos minutos.",
  "Az ország térképét most nem sikerült előkészíteni.": "Ahora no se pudo preparar el mapa del país.",
  "A külföldi lista most nem érhető el.": "La lista del extranjero no está disponible ahora.",
  "A két pont túl messze van egymástól (legfeljebb kb. 80 km).": "Los dos puntos están demasiado lejos (máximo unos 80 km)."
});

// ===== 2026-10-13: GPX be/ki (v43.178) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Nincs kiválasztott útvonal.": "No hay ruta seleccionada.",
  "Az útvonal megjelent, de a telefon tárhelye megtelt, nem mentődött el.": "La ruta se muestra, pero el almacenamiento está lleno y no se guardó.",
  "Ezt a fájlt nem tudtam GPX-ként beolvasni.": "No pude leer este archivo como GPX.",
  "GPX útvonal betöltése": "Cargar ruta GPX",
  "fájl a telefonról": "archivo del teléfono"
});

// ===== 2026-10-13: tajolo hangvezetes (v43.179) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Hangvezetés": "Guía sonora",
  "Előbb vegyél fel egy irányt, utána szól a hangvezetés.": "Primero fija un rumbo y luego suena la guía."
});
// ===== 2026-10-14: jelzes nelkuli utak, ujratervezes, hosszu nyomas (v43.182) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Kijelölt pont": "Punto marcado",
  "Új útvonalat tervezek innen…": "Planificando una nueva ruta desde aquí…",
  "Új útvonalat terveztem, hossza": "Nueva ruta planificada, longitud",
  "Jelzés nélküli ösvényen": "Por un sendero sin señalizar",
  "Jelzés nélküli földúton": "Por un camino de tierra sin señalizar",
  "Utcán vagy közúton": "Por una calle o carretera",
  "a jelzés nélküli ösvényt": "el sendero sin señalizar",
  "a földutat": "el camino de tierra",
  "az utcát vagy közutat": "la calle o carretera",
  "Az út végétől a célig": "Del final del camino al destino",
  "teljes túra": "ruta completa",
  "szakasz": "tramos",
  "Rádióamatőr átjátszók": "Repetidores de radioaficionado",
  "Rádióamatőr átjátszó": "Repetidor de radioaficionado",
  "Kimenő (hallgatás)": "Salida (escucha)",
  "Bemenő / eltolás": "Entrada / desplazamiento",
  "Csak rádióamatőr vizsgával és engedéllyel használható.": "Solo se puede usar con licencia de radioaficionado.",
  "Az alaptérképet az OpenStreetMap szabályai miatt nem lehet előre letölteni (a megnézett részek megmaradnak). Internet nélkül a Saját térkép működik: Magyarországra tájegységenként letöltheted itt lent, az „Offline térkép” csoportban.": "El mapa base no se puede descargar por adelantado por las normas de OpenStreetMap (las partes vistas se conservan). Sin internet funciona el Mapa propio: para Hungría puedes descargarlo por regiones abajo.",
  "Átváltok a Saját térképre": "Cambiar al Mapa propio",
  "Saját térkép bekapcsolva. A tájegységeket itt lent, az „Offline térkép” csoportban töltheted le.": "Mapa propio activado. Descarga las regiones abajo, en «Mapa sin conexión por regiones»."
});

// ===== 2026-10-15: femkereso + eses-erzekeles (kartya 898b5891) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Fémkereső: vas és acél a közelben": "Detector de metales: hierro y acero cerca",
 "Fémkereső": "Detector de metales",
 "Vezeték, cső, fém a falban vagy a földben": "Cable, tubería, metal en la pared o el suelo",
 "Nullázás után itt látszik a változás": "Tras poner a cero, aquí se ve el cambio",
 "Nullázás": "Poner a cero",
 "Hang: be": "Sonido: sí",
 "Hang: ki": "Sonido: no",
 "Tartsd a telefont távol a fémtől, és nyomd meg a Nullázást. Utána lassan húzd végig a falon vagy a talajon: fém közelében nő a szám, és sűrűbben, magasabban pittyeg.": "Aleja el teléfono del metal y pulsa Poner a cero. Luego pásalo despacio por la pared o el suelo: cerca del metal el número sube y pita más rápido y más agudo.",
 "AMIT EZ TUD ÉS AMIT NEM. A vas- és acéltárgyat (cső, szög, vasbeton, áramalatti vezeték) néhány centiméterről érzékeli, mélyebbről nem. Rezet, alumíniumot, aranyat nem talál. A pontosság telefononként nagyon eltér; ne erre bízd, hogy fúrhatsz-e a falba.": "LO QUE PUEDE Y LO QUE NO. Detecta hierro y acero (tubería, clavo, ferralla, cable con corriente) a pocos centímetros, no más profundo. No encuentra cobre, aluminio ni oro. La precisión varía mucho según el teléfono; no te fíes de ello para decidir si puedes taladrar la pared.",
 "Ehhez a telefonos PrepperPapa app kell: a böngésző nem adja ki az iránytű-érzékelő nyers értékét.": "Para esto hace falta la app PrepperPapa del teléfono: el navegador no da el valor bruto del sensor de brújula.",
 "a nullához képest": "respecto a cero",
 "Az érzékelő pontatlan: mozgasd a telefont nyolcas alakban néhányszor, aztán nullázz.": "El sensor no es preciso: mueve el teléfono en forma de ocho varias veces y luego pon a cero.",
 "Esés-érzékelés": "Detección de caídas",
 "Esés után automatikus SOS": "SOS automático tras una caída",
 "Ha a telefon nagy ütést érez, és utána egy percig nem mozdul, hangosan visszaszámol. Ha nem nyomod meg a": "Si el teléfono nota un golpe fuerte y después no se mueve durante un minuto, hace una cuenta atrás en voz alta. Si no pulsas el botón",
 "Jól vagyok": "Estoy bien",
 "gombot, SOS üzenetet küld a helyzeteddel minden szobádba, és megszólal a vészsíp.": ", envía un mensaje SOS con tu ubicación a todas tus salas y suena el silbato de emergencia.",
 "Esést érzékeltem": "Caída detectada",
 "másodperc múlva SOS üzenet megy a helyzeteddel": "segundos para enviar un mensaje SOS con tu ubicación",
 "SOS most": "SOS ya",
 "Bekapcsolva. Háttérben és kikapcsolt képernyőn is figyel.": "Activado. También vigila en segundo plano y con la pantalla apagada.",
 "Bekapcsolva, de csak addig figyel, amíg az app nyitva van (a telefonos appban háttérben is).": "Activado, pero solo vigila mientras la app está abierta (en la app del teléfono también en segundo plano).",
 "A mozgás-érzékelő használatát nem engedélyezted.": "No has permitido el sensor de movimiento.",
 "Rendben, nem küldtem SOS-t.": "De acuerdo, no se envió SOS.",
 "Esést érzékeltem, és nem reagálok.": "He detectado una caída y no respondo.",
 "Itt vagyok": "Estoy aquí",
 "A helyzetemet nem sikerült meghatározni.": "No se pudo determinar mi ubicación.",
 "SOS elküldve": "SOS enviado",
 "szobába": "salas",
 "Az SOS üzenet nem ment el (nincs szoba vagy kapcsolat). A vészsíp szól.": "El mensaje SOS no se envió (sin sala o sin conexión). Suena el silbato.",
 "Eszközök": "Herramientas",
 "Fémdetektor": "Detector de metales",
 "Víz, áram, kalória, fűtés és a többi számoló": "Agua, energía, calorías, calefacción y las demás calculadoras",
 "Eszközök: a kalkulátorok, a fémdetektor, a tükör és a vad- és rovarriasztó egy helyen.": "Herramientas: las calculadoras, el detector de metales, el espejo y el ahuyentador de animales e insectos en un solo lugar.",
 "Tükör": "Espejo",
 "Előlapi kamera fénykerettel, sérülés megnézéséhez": "Cámara frontal con marco de luz, para revisar una lesión",
 "Fény: be": "Luz: sí",
 "Fény: ki": "Luz: no",
 "A kamera nem nyitható meg. Engedélyezd a kamerát az app beállításaiban.": "No se puede abrir la cámara. Permite la cámara en los ajustes de la app.",
 "Két ujjal csippentve nagyítasz. A fehér keret világítja meg az arcod; sötétben tedd a képernyő fényerejét maximumra.": "Pellizca con dos dedos para ampliar. El marco blanco ilumina tu cara; a oscuras, sube el brillo de la pantalla al máximo.",
 "Privát üzenet": "Mensaje privado",
 "Gíra küldése": "Enviar gíra",
 "Vad- és rovarriasztó": "Ahuyentador de animales e insectos",
 "Magas hang vadak és szúnyogok ellen": "Sonido agudo contra animales salvajes y mosquitos",
 "A riasztó hangja most nem indult el.": "El sonido del ahuyentador no se inició.",
 "Előzmény": "Historial",
 "Legutóbb olvasott igék": "Versículos leídos recientemente",
 "Korábbi keresések": "Búsquedas anteriores",
 "Még nincs olvasott ige. Amit a Bibliában megnyitsz, itt jelenik meg.": "Todavía no has leído ningún versículo. Lo que abras en la Biblia aparecerá aquí.",
 "Még nincs korábbi keresés. Amit itt keresel, ide kerül.": "Todavía no hay búsquedas anteriores. Lo que busques aquí aparecerá en esta lista.",
 "Olvasási terv: csak ez az olvasmány látszik, a felolvasás a végén megáll.": "Plan de lectura: solo se muestra esta lectura, y la lectura en voz alta se detiene al final.",
 "Az olvasmány vége": "Fin de la lectura",
 "Vissza a tervemhez": "Volver a mi plan",
 "Ébresztő": "Alarma",
 "Ébresztő bekapcsolva": "Alarma activada",
 "Reggel felébreszti a telefont, és felolvassa a terv mai olvasmányát.": "Despierta el teléfono por la mañana y lee en voz alta la lectura de hoy del plan.",
 "Bekapcsolva": "Activada",
 "Időpont": "Hora",
 "Napok": "Días",
 "Válassz legalább egy napot.": "Elige al menos un día.",
 "Következő ébresztés:": "Próxima alarma:",
 "Ebben a böngészőben és iPhone-on az ébresztő nem tud megszólalni: a weboldal nem kapcsolhatja be a lezárt telefont. Az ébresztő az Android appban működik. A beállításod itt megmarad.": "En este navegador y en iPhone la alarma no puede sonar: una página web no puede encender un teléfono bloqueado. La alarma funciona en la app de Android. Tu ajuste se guarda aquí.",
 "Ehhez az ébresztőhöz frissítsd az appot a legújabb változatra.": "Actualiza la app a la última versión para usar esta alarma.",
 "Az értesítés nincs engedélyezve: enélkül az ébresztő nem tud megjelenni.": "Las notificaciones no están permitidas: sin ellas la alarma no puede aparecer.",
 "Értesítés engedélyezése": "Permitir notificaciones",
 "A pontos időzítés nincs engedélyezve (Ébresztők és emlékeztetők): az ébresztő így akár negyed órát is késhet.": "La hora exacta no está permitida (Alarmas y recordatorios): la alarma puede retrasarse hasta un cuarto de hora.",
 "Pontos időzítés engedélyezése": "Permitir hora exacta",
 "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon csak értesítés jelenik meg, a felolvasás a koppintásra indul.": "Las notificaciones a pantalla completa no están permitidas: con el teléfono bloqueado solo aparece una notificación, y la lectura empieza al tocarla.",
 "Teljes képernyő engedélyezése": "Permitir pantalla completa",
  // v43.407 (kartya 0ef65ebd): eszkoz-riasztas elore hozasa, szoba beallitasai
  "Az értesítés nincs engedélyezve: enélkül a szoba riasztása nem jelenik meg a telefonon.": "Las notificaciones no están permitidas: sin ellas la alarma de la sala no aparece en el teléfono.",
  "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon a riasztás csak értesítésként jelenik meg.": "Las notificaciones a pantalla completa no están permitidas: en un teléfono bloqueado la alarma solo aparece como notificación.",
  "A megjelenítés más alkalmazások felett nincs engedélyezve: amíg a telefont használod, a riasztás oldala nem ugrik elő, csak értesítés érkezik.": "Mostrar sobre otras apps no está permitido: mientras usas el teléfono la página de alarma no salta, solo llega una notificación.",
  "Megjelenítés más alkalmazások felett": "Mostrar sobre otras apps",
  "A szoba riasztása lezárt és használatban lévő telefonon is előreugrik.": "La alarma de la sala salta en el teléfono bloqueado y también mientras lo usas.",
 "Az ébresztő be van állítva.": "La alarma está configurada.",
 "Az ébresztőt most nem sikerült beállítani. Próbáld újra később.": "No se pudo configurar la alarma ahora. Inténtalo de nuevo más tarde.",
 "Bibliaolvasás ébresztő": "Alarma de lectura bíblica",
 "Reggeli ige": "Palabra de la mañana",
 "A mai olvasmány felolvasása indul.": "Empieza la lectura de hoy.",
 "Szundi 10 perc": "Posponer 10 min"
});

// ===== 2026-10-18: Bible alarm polish (v43.259): stop button, time picker, spoken intro/blessing =====
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Leállítom": "Detener",
 "Óra": "Hora",
 "Perc": "Minuto",
 "{konyv} {a}. fejezet": "{konyv}, capítulo {a}",
 "{konyv} {a}–{b}. fejezet": "{konyv}, capítulos {a} a {b}",
 "Jó reggelt! Olvasási terv: {terv}. A mai olvasmány: {resz}.": "¡Buenos días! Plan de lectura: {terv}. La lectura de hoy: {resz}.",
 "Jó reggelt! {ido} van. Ma {datum}. A mai olvasmány: {resz}.": "¡Buenos días! Son las {ido}. Hoy es {datum}. La lectura de hoy: {resz}.",
 "Áldott napot kívánok!": "¡Que tengas un día bendecido!"
});

// ===== 2026-10-18: daily tester task popup (v43.261, card 84c182b9): the popup and the seeded tasks =====
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Mai tesztfeladat": "Tarea de prueba de hoy",
 "Hogyan működik": "Cómo funciona",
 "Mit próbálj ki": "Qué probar",
 "Ezt a feladatot a készüléked és a felület alapján kaptad, név nélkül.": "Recibiste esta tarea según tu dispositivo y la interfaz (app o navegador), sin tu nombre.",
 "Működik": "Funciona",
 "Hibás": "Falla",
 "Később": "Más tarde",
 "Köszönjük, megkaptuk a visszajelzést.": "Gracias, hemos recibido tu comentario.",
 "Most nincs kapcsolat. Elmentettem, és magától elküldöm, amint lesz.": "Ahora no hay conexión. Lo he guardado y se enviará solo en cuanto la haya.",
 "Ezt a szerver most nem fogadta el. Próbáld újra később.": "El servidor no lo aceptó ahora. Inténtalo de nuevo más tarde.",
 "Most nem érem el a szervert. Próbáld újra később.": "Ahora no puedo conectar con el servidor. Inténtalo de nuevo más tarde.",
 "Mára nincs több tesztfeladat. Köszönjük a segítséget!": "No hay más tareas de prueba por hoy. ¡Gracias por tu ayuda!",
 "Tesztfeladat": "Tarea de prueba",
 "Mi nem működött?": "¿Qué no funcionó?",
 "Biblia: az olvasási terv ébresztője": "Biblia: la alarma del plan de lectura",
 "Az olvasási terv ébresztője a beállított időben felébreszti a telefont, a lezárt képernyő fölött megnyitja az aznapi olvasmányt, és felolvassa. Halkan indul, és bő fél perc alatt erősödik fel; előtte egy rövid köszöntés elmondja, mi a mai olvasmány. Amíg olvas, a képernyő alján egy nagy Leállítom gomb van.": "La alarma del plan de lectura despierta el teléfono a la hora fijada, abre la lectura del día sobre la pantalla bloqueada y la lee en voz alta. Empieza en voz baja y sube durante algo más de medio minuto; antes, un breve saludo dice cuál es la lectura de hoy. Mientras lee, hay un gran botón Detener en la parte inferior de la pantalla.",
 "Biblia > Olvasási terv: nyiss meg egy futó tervet, kapcsold be az ébresztőt, és állítsd az időpontot 2 perccel későbbre.": "Biblia > Plan de lectura: abre un plan en curso, activa la alarma y ponla 2 minutos más tarde.",
 "Zárd le a telefont, és tedd le. Figyeld: felébred-e a telefon, halkan indul-e a hang, és elhangzik-e a köszöntés.": "Bloquea el teléfono y déjalo. Observa: ¿se despierta el teléfono, empieza el sonido bajo y se oye el saludo?",
 "Koppints a nagy Leállítom gombra: a felolvasásnak azonnal meg kell állnia.": "Toca el gran botón Detener: la lectura debe pararse al instante.",
 "Biblia: a könyvcsoportok színei": "Biblia: los colores de los grupos de libros",
 "A Biblia könyvlistáján a könyvek csoportonként színes csempéken állnak. A csoportok ugyanazt az öt zöld árnyalatot kapják, de világos és sötét váltakozva, hogy két szomszédos csoport jól elváljon egymástól. Éjszakai módban ugyanez vörös árnyalatokkal.": "En la lista de libros de la Biblia, los libros están en mosaicos de color por grupos. Los grupos usan los mismos cinco tonos de verde, pero claro y oscuro se alternan para que dos grupos vecinos se distingan bien. En modo nocturno, lo mismo con tonos rojos.",
 "Nyisd meg a Bibliát, és koppints a Biblia csempére, hogy megjelenjen a könyvek listája.": "Abre la Biblia y toca el mosaico Biblia para ver la lista de libros.",
 "Nézd végig a csempéket: jól elválnak-e a szomszédos csoportok, és minden könyvnév olvasható-e a háttéren?": "Recorre los mosaicos: ¿se distinguen bien los grupos vecinos y se lee cada nombre de libro sobre su fondo?",
 "Lenyíló lista: a vissza csak a listát zárja": "Lista desplegable: Atrás solo cierra la lista",
 "Ha egy lenyíló lista (például a Rádió-hatótáv sávválasztója) nyitva van, a vissza gomb először csak a listát zárja be, és ugyanazon a képernyőn maradsz. Ha közben másik képernyőre lépsz, a nyitott lista nem maradhat ott a következő képernyő fölött.": "Cuando una lista desplegable (por ejemplo, el selector de banda de Alcance de radio) está abierta, el botón Atrás primero solo cierra la lista y te quedas en la misma pantalla. Si mientras tanto pasas a otra pantalla, la lista abierta no puede quedarse sobre la siguiente pantalla.",
 "Kalkulátor > Rádió-hatótáv: koppints a sáv választójára, hogy lenyíljon a lista.": "Calculadora > Alcance de radio: toca el selector de banda para abrir la lista.",
 "Nyomd meg a vissza gombot: a lista bezárul, és a Rádió-hatótáv képernyő marad.": "Pulsa Atrás: la lista se cierra y la pantalla Alcance de radio se queda.",
 "Nyisd ki újra a listát, és lépj át egy másik képernyőre: a lista nem maradhat ott lebegve.": "Abre de nuevo la lista y pasa a otra pantalla: la lista no puede quedarse allí flotando.",
 "Szobák: privát üzenet (Csak neki)": "Salas: mensaje privado (Solo a)",
 "Egy internetes szobában egy tagnak úgy is írhatsz, hogy csak ő lássa. Ilyenkor a beíró mező fölött „Csak neki” sáv áll a nevével; amíg ez látszik, az üzenet biztosan privátként megy el, és a sáv nem takarja el a legutolsó üzenetet. Ha mégsem megy el, az app megmondja, miért, és a beírt szöveg megmarad.": "En una sala de internet puedes escribir a un miembro de modo que solo él lo vea. Entonces, sobre el campo de texto aparece una barra «Solo a» con su nombre; mientras se vea, el mensaje sale seguro como privado, y la barra no tapa el último mensaje. Si aun así no sale, la app te dice por qué y tu texto se conserva.",
 "Nyiss meg egy szobát, ahol van legalább egy másik tag, és koppints egy tőle jött üzenet mellett a képére.": "Abre una sala con al menos otro miembro y toca la imagen junto a un mensaje suyo.",
 "Írj egy rövid üzenetet, és küldd el. A legutolsó üzenetnek a „Csak neki” sáv fölött kell látszania.": "Escribe un mensaje corto y envíalo. El último mensaje debe verse por encima de la barra «Solo a».",
 "Ha meg tudod kérdezni: a címzett megkapta, a többiek nem látják.": "Si puedes preguntar: el destinatario lo recibió y los demás no lo ven."
});
// ===== 2026-10-18: Noah for every tester (v43.262, card 84bede18): Android-only note, download confirm, memory reason, daily task =====
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Noah, az offline MI segéd a telefonra telepített Android appban fut: a nyelvi modellt a telefon egyszer letölti, utána internet nélkül, helyben válaszol. A böngészős változatban és iPhone-on nem érhető el, mert ide a modell nem tölthető le.": "Noah, el asistente de IA sin conexión, funciona en la app de Android instalada en el teléfono: el teléfono descarga el modelo de lenguaje una vez y después responde localmente, sin internet. No está disponible en la versión del navegador ni en iPhone, porque allí no se puede descargar el modelo.",
 "Ehhez Android 11 vagy újabb, legalább 6 GB memóriás telefon kell, és 6-8 GB szabad hely.": "Para ello se necesita un teléfono con Android 11 o posterior, al menos 6 GB de memoria y 6-8 GB de espacio libre.",
 "A nyelvi modell válasz közben kb. 3 GB memóriát használ. 6 GB-nál kevesebb memóriájú telefonon a rendszer ilyenkor leállítaná az appot, ezért itt Noah nem használható.": "Al responder, el modelo de lenguaje usa unos 3 GB de memoria. En un teléfono con menos de 6 GB de memoria el sistema cerraría la app, por eso Noah no se puede usar aquí.",
 "Ezen a telefonon nem fut:": "No funciona en este teléfono:",
 "Android 11 vagy újabb kell": "se necesita Android 11 o posterior",
 "64 bites ARM processzor kell": "se necesita un procesador ARM de 64 bits",
 "legalább 6 GB memória kell": "se necesitan al menos 6 GB de memoria",
 "nem támogatott": "no compatible",
 "Ehhez a modellhez kevés a telefon memóriája.": "Este teléfono no tiene suficiente memoria para este modelo.",
 "Letöltöd a(z) {modell} modellt?": "¿Descargar el modelo {modell}?",
 "Letöltés: {meret}, egyszer kell letölteni.": "Descarga: {meret}, solo hace falta una vez.",
 "Szabad hely: kb. {hely} kell, mert az első használatkor a telefon még egyszer ennyit foglal a gyorsabb futáshoz.": "Espacio libre: se necesitan unos {hely}, porque en el primer uso el teléfono ocupa otro tanto para funcionar más rápido.",
 "Memória: legalább {ajanlott} GB-os telefon ajánlott.": "Memoria: se recomienda un teléfono de al menos {ajanlott} GB.",
 "Ez a telefon {ram} GB-os.": "Este teléfono tiene {ram} GB.",
 "Most mobilinternetet használsz: a letöltés {meret} adatforgalom. Wi-Fi ajánlott.": "Ahora usas datos móviles: la descarga son {meret} de tráfico de datos. Se recomienda Wi-Fi.",
 "Offline MI segéd": "Asistente de IA sin conexión",
 "Offline MI segéd használata": "Usar el asistente de IA sin conexión",
 "A segéd a fejléc gombjával nyílik; a modell letöltése és a beállításai a segéd oldalán vannak.": "El asistente se abre con el botón de la cabecera; la descarga del modelo y sus ajustes están en la página del asistente.",
 "Offline MI segéd · a tudástárból, forrással": "Asistente de IA sin conexión · de la base de conocimiento, con fuentes",
 "Kérdezz": "Pregunta",
 "Noah, az offline MI segéd": "Noah, el asistente de IA sin conexión",
 "Noah a telefonon futó MI segéd: a tudástárból, a Bibliából és az app adataidból válaszol, internet nélkül. A nyelvi modellt egyszer kell letölteni (2,6 vagy 3,7 GB). Letöltés előtt az app kiírja a méretet, a szükséges szabad helyet és memóriát, mobilinterneten pedig Wi-Fi-t javasol. 6 GB-nál kevesebb memóriájú telefonon nem használható, és ezt meg is indokolja.": "Noah es el asistente de IA que funciona en el teléfono: responde desde la base de conocimiento, la Biblia y los datos de tu app, sin internet. El modelo de lenguaje se descarga una vez (2,6 o 3,7 GB). Antes de la descarga la app muestra el tamaño, el espacio libre y la memoria necesarios, y con datos móviles recomienda Wi-Fi. En un teléfono con menos de 6 GB de memoria no se puede usar, y la app explica por qué.",
 "Beállítások: kapcsold be az „Offline MI segéd használata” pontot, majd nyisd meg Noah-t a fejléc szikra gombjával.": "Ajustes: activa «Usar el asistente de IA sin conexión» y abre Noah con el botón de chispa de la cabecera.",
 "A fogaskerék alatt nyomd meg a Letöltés gombot: nézd meg, kiírja-e a méretet, a helyet és a memóriát, mielőtt elindul. Wi-Fi-n töltsd le.": "Bajo el engranaje, pulsa Descargar: comprueba si muestra el tamaño, el espacio y la memoria antes de empezar. Descárgalo con Wi-Fi.",
 "Kérdezz tőle valamit, például: „Hogyan tisztítsak vizet?” Nézd meg, kapsz-e választ forrással.": "Pregúntale algo, por ejemplo: «¿Cómo purifico el agua?» Comprueba si recibes una respuesta con fuente.",
 "Ha a telefon nagy ütést érez, és utána egy percig nem mozdul, felkapcsolja a kijelzőt (lezárt telefonon is), és hangosan visszaszámol. Ha nem nyomod meg a": "Si el teléfono nota un golpe fuerte y después no se mueve durante un minuto, enciende la pantalla (también con el teléfono bloqueado) y hace una cuenta atrás en voz alta. Si no pulsas el botón",
 "Utána megszólal a vészsíp.": "Después suena el silbato de emergencia.",
 "Esés-riasztás": "Alarma de caída",
 "%d másodperc múlva SOS üzenet megy a helyzeteddel. Ha jól vagy, nyomd meg: Jól vagyok.": "En %d segundos se enviará un mensaje SOS con tu ubicación. Si estás bien, pulsa: Estoy bien.",
 "Az értesítés nincs engedélyezve: enélkül esés után a lezárt telefonon nem jelenik meg a visszaszámlálás.": "Las notificaciones no están permitidas: sin ellas la cuenta atrás no puede aparecer en el teléfono bloqueado tras una caída.",
 "A teljes képernyős értesítés nincs engedélyezve: esés után a lezárt telefonon csak egy értesítés jelenik meg a visszaszámlálással és a Jól vagyok gombbal, a nagy számláló koppintásra nyílik meg.": "Las notificaciones a pantalla completa no están permitidas: tras una caída el teléfono bloqueado solo muestra una notificación con la cuenta atrás y el botón Estoy bien; el contador grande se abre al tocarla.",
 "Esés után a lezárt telefonon is felkapcsolja a kijelzőt, és mutatja a visszaszámlálást.": "Tras una caída enciende la pantalla, también con el teléfono bloqueado, y muestra la cuenta atrás.",
 "Megnyitom": "Abrir",
 "Láttam": "Visto",
 "Egy szobatárs": "Un miembro de la sala",
 "vészjelzést küldött": "envió una señal de emergencia",
 "Itt van": "Ubicación",
 "Megnézem a térképen": "Ver en el mapa",
 "SOS · vészjelzés": "SOS · señal de emergencia",
 "Egy szobatárs vészjelzést küldött.": "Un miembro de la sala envió una señal de emergencia.",
 "SOS a szobából": "SOS desde una sala",
 "Egy szobatárs vészjelzést küldött: a lezárt telefon is felébred.": "Un miembro de la sala envió una señal de emergencia: también se activa el teléfono bloqueado.",
 "RIASZTÁS": "ALARMA",
 "Eszköz-riasztás": "Alarma de dispositivo",
 "Egy eszköz riasztást küldött.": "Un dispositivo envió una alarma.",
 "Eszköz-riasztás a szobából": "Alarma de dispositivo de una sala",
 "Egy eszköz riasztást küldött: a lezárt telefon is felébred.": "Un dispositivo envió una alarma: el teléfono bloqueado también se despierta.",
 "Ideje visszafordulni": "Hora de dar la vuelta",
 "visszaút": "vuelta",
 "Ma már elmúlt a sötétedés: lámpával indulj vissza.": "Hoy ya ha oscurecido: vuelve con una linterna.",
 "A visszafordulás ideje már elmúlt: indulj vissza most.": "La hora de regreso ya pasó: vuelve ahora.",
 "Sötétedésig": "Hasta que oscurezca",
 "Már sötétedik.": "Ya está oscureciendo.",
 "Visszaút": "Vuelta",
 "Tartalék": "Margen",
 "Ha most elindulsz, világosban érsz vissza.": "Si sales ahora, volverás con luz de día.",
 "A visszaút hosszabb, mint ami a sötétedésig hátravan: indulj most, és készítsd elő a lámpát.": "La vuelta dura más que el tiempo que queda hasta que oscurezca: sal ahora y prepara la linterna.",
 "A tájoló a felvett irány ellentétére mutat: ez a visszaút.": "La brújula apunta en sentido contrario al rumbo guardado: ese es el camino de vuelta.",
 "A tájoló a kiindulópont felé mutat.": "La brújula apunta hacia el punto de partida.",
 "Nincs GPS-helyzet: a térképen látod a kiindulópontot.": "Sin posición GPS: el punto de partida se ve en el mapa.",
 "Kiindulópont": "Punto de partida",
 "Élesítve, ekkor szól:": "Activada, suena a las:",
 "Szólt": "Sonó",
 "Visszafordulási ébresztő": "Alarma de regreso",
 "Túrán a visszafordulás idejében felébreszti a telefont, és mutatja, mennyi idő van sötétedésig, és mennyi a visszaút.": "En una ruta despierta el teléfono a la hora de regreso y muestra cuánto falta para que oscurezca y cuánto dura la vuelta.",
 "Túra indítása": "Iniciar ruta",
 "Visszaút ideje (perc)": "Duración de la vuelta (minutos)",
 "A fenti számításból": "Del cálculo de arriba",
 "A tervezett útvonalból": "De la ruta planificada",
 "A fenti Menetidővel kiszámolhatod: add meg a visszaút távolságát és emelkedését.": "Puedes calcularlo con el Tiempo de marcha de arriba: introduce la distancia y el desnivel de la vuelta.",
 "Biztonsági tartalék (perc)": "Margen de seguridad (minutos)",
 "Sötétedés": "Anochecer",
 "Napnyugta": "Puesta de sol",
 "A szürkület vége (kb. fél órával a napnyugta után)": "Fin del crepúsculo (unos 30 minutos después de la puesta de sol)",
 "tartalék": "margen",
 "Visszafordulás időpontja (kézzel)": "Hora de regreso (a mano)",
 "Számított időre": "Usar hora calculada",
 "Böngészőben és iPhone-on csak akkor szól, ha az oldal nyitva van. A lezárt telefont az Android app ébreszti fel.": "En el navegador y en iPhone solo suena con la página abierta. La app de Android despierta el teléfono bloqueado.",
 "Az ébresztő be van állítva, lezárt telefonon is szól.": "La alarma está puesta y suena también con el teléfono bloqueado.",
 "Visszafordulás": "Regreso",
 "Visszafordulás (kézzel állítva)": "Regreso (puesto a mano)",
 "Nincs helyzet a napnyugtához: engedélyezd a helymeghatározást, vagy nyisd meg egyszer a térképet.": "No hay posición para la puesta de sol: permite la ubicación o abre el mapa una vez.",
 "Add meg a visszaút idejét.": "Indica cuánto dura la vuelta.",
 "Ezen a helyen ma nincs napnyugta.": "Aquí hoy no hay puesta de sol.",
 "A teljes képernyős értesítés nincs engedélyezve: lezárt telefonon csak értesítés jelenik meg.": "Las notificaciones a pantalla completa no están permitidas: con el teléfono bloqueado solo aparece una notificación.",
 "VISSZA": "VUELTA",
 "Visszaút indítása": "Iniciar la vuelta",
 "Indulj vissza, hogy világosban érj le.": "Vuelve para llegar abajo con luz de día.",
 "Túrán a visszafordulás idejében a lezárt telefon is felébred.": "En una ruta, el teléfono bloqueado se despierta a la hora de regreso.",
 // ===== 2026-10-18: hatterzene a felolvasas alatt (kartya 694fc83c) =====
 "Háttérzene": "Música de fondo",
 "Halk, ismétlődő zene a felolvasás alatt. Előbb töltsd le; utána internet nélkül is szól. A hangerejét felolvasás közben a hangjegy gombbal állíthatod.": "Música suave y en bucle durante la lectura. Descárgala primero; después suena también sin internet. Ajusta su volumen durante la lectura con el botón de la nota musical.",
 "Zene a Biblia felolvasása alatt": "Música durante la lectura de la Biblia",
 "Ki": "No",
 "nincs letöltve": "no descargada",
 "Biblia-felolvasáshoz": "Para la lectura de la Biblia",
 "Ébresztőhöz": "Para el despertador",
 "Akusztikus gitár": "Guitarra acústica",
 "Kelta": "Celta",
 "Epikus 1": "Épica 1",
 "Epikus 2": "Épica 2",
 "Epikus 3": "Épica 3",
 "Zene": "Música",
 "Háttérzenét a Biblia beállításaiban (fogaskerék) tölthetsz le.": "Descarga la música de fondo en los ajustes de la Biblia (rueda dentada).",
 "A letöltött zene hiányos volt, ezért nem mentettük el. Próbáld újra.": "La música descargada estaba incompleta, así que no se guardó. Inténtalo de nuevo.",
 "Ez a zene most nem érhető el a szerveren.": "Esta música no está disponible en el servidor ahora.",
 // a felolvaso panel (hangjegy gomb) feliratai -- eddig forditatlanok voltak (2026-10-18, 694fc83c mellett)
 "Felolvasás": "Lectura en voz alta",
 "Szünet a versek között": "Pausa entre versículos",
 "Sebesség": "Velocidad",
 "Zene hangereje": "Volumen de la música",
 "Zene választása": "Elegir música",
 "Nincs kiválasztott zene": "No hay música elegida",
 "Zene szünet": "Pausar música",
 "Zene indítása": "Iniciar música",
 "Telefon zenelejátszója (hangereje itt nem állítható)": "Reproductor de música del teléfono (su volumen no se ajusta aquí)",
 "Megvallás felolvasás": "Lectura de la confesión",
 "Ima felolvasás": "Lectura de la oración",
 "Saját zene a telefonról": "Música propia del teléfono",
 "Telefon hangja": "Voz del teléfono",
 "Előbb töltsd le; utána internet nélkül is szól.": "Descárgala primero; después suena también sin internet.",
 "Csatazene": "Música de batalla",
 "Tempó": "Ritmo",
 "Lassú": "Lento",
 "Szünet a mondatok után": "Pausa tras cada frase",
 "Auto": "Auto",
 "Auto: a mondat hossza": "Auto: duración de la frase",
 "Minden mondat után megáll, hogy hangosan elismételhesd. A zene a szünetben is szól.": "Se detiene tras cada frase para que puedas repetirla en voz alta. La música sigue sonando en la pausa.",
 "A telefon beszédmotorja: ha a Google magyar hangja telepítve van, azzal olvas. Nem foglal helyet, internet nélkül is szól.": "El motor de voz del teléfono: si está instalada la voz de Google del idioma, lee con ella. No ocupa espacio y funciona sin internet.",
 "Előre felolvasott hang a Károli-fordításhoz. Internettel azonnal szól; ha letöltöd, internet nélkül is.": "Una voz pregrabada para la traducción Károli. Con internet suena al instante; descargada, también sin él.",
 "A PrepperPapa hang a saját tempójában szól (nem lassítjuk, mert torzítana).": "La voz de PrepperPapa suena a su propio ritmo (no la ralentizamos, se distorsionaría).",
 "jobb": "mejor",
 "internet": "internet",
 "letöltött": "descargada",
 "Hang": "Voz",
 "Most ez szól": "Suena ahora",
 "A telefon beszédmotorja: internettel a Google legjobb hangján olvas, internet nélkül a telefonra letöltött hangon. Nem foglal helyet.": "El motor de voz del teléfono: con internet lee con la mejor voz de Google; sin internet, con la voz descargada en el teléfono. No ocupa espacio.",
 "A Lassú egy külön, lassabban felolvasott felvétel.": "El tempo Lento es una grabación aparte, leída más despacio.",
 "A Lassú tempó lassabban beszélteti a telefon hangját.": "El tempo Lento hace que la voz del teléfono hable más despacio."
});

// ===== 2026-10-18: vilagterkep-letoltes (korabban hianyzo kulcsok) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "a telefonon": "en el teléfono",
  "A letöltés nem sikerült": "La descarga ha fallado",
  "A letöltéshez be kell jelentkezni (Beállítások).": "Para descargar tienes que iniciar sesión (Ajustes)."
});

// ===== 2026-10-18: AKTUALIS VILAGHELYZET terkep-reteg (kartya 771683de) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Világhelyzet (események)": "Situación mundial (eventos)",
  "Tűzveszély-előrejelzés (EFFIS) – veszély, nem tilalom": "Previsión de peligro de incendio (EFFIS) – peligro, no prohibición",
  "Földrengés": "Terremoto",
  "Erdőtűz": "Incendio forestal",
  "Árvíz": "Inundación",
  "Trópusi ciklon": "Ciclón tropical",
  "Vulkánkitörés": "Erupción volcánica",
  "Aszály": "Sequía",
  "Járvány": "Epidemia",
  "Háborús övezet": "Zona de guerra",
  "Tűzgyújtási tilalom": "Prohibición de hacer fuego",
  "Súlyosság": "Gravedad",
  "alacsony": "baja",
  "közepes": "media",
  "magas": "alta",
  "Nagy háború (évi 10 000+ halott)": "Guerra mayor (más de 10 000 muertes al año)",
  "Háború (évi 1000–9999 halott)": "Guerra (1000–9999 muertes al año)",
  "Fegyveres konfliktus (évi 100–999 halott)": "Conflicto armado (100–999 muertes al año)",
  "Összecsapások (évi 100 alatti halott)": "Enfrentamientos (menos de 100 muertes al año)",
  "Megye": "Condado",
  "Napi tilalom": "Prohibición diaria",
  "A tilalom a megye külterületi erdeire, fásításaira és azok 200 méteres sávjára vonatkozik.": "La prohibición afecta a los bosques y arboledas del condado fuera de las poblaciones y a una franja de 200 metros a su alrededor.",
  "Erősség": "Magnitud",
  "Mélység": "Profundidad",
  "Cunamiriasztás": "Alerta de tsunami",
  "Hírek alapján (előző nap):": "Según las noticias (día anterior):",
  "független forrás": "fuentes independientes",
  "esemény": "eventos",
  "Érintett ország, a konfliktus fő helyszíne máshol van.": "País implicado; el escenario principal del conflicto está en otro lugar.",
  "Időpont": "Hora",
  "Forrás": "Fuente",
  "Forrás megnyitása": "Abrir la fuente",
  "Világhelyzet": "Situación mundial",
  "nincs adat": "sin datos",
  "frissítve": "actualizado",
  "mentett adat (offline)": "datos guardados (sin conexión)",
  "Még nincs letöltött világhelyzet-adat. Kapcsold be internettel.": "Aún no hay datos de la situación mundial. Actívalo con internet.",
  "Távolról ikonok, közelítve az érintett terület körvonallal és fátyollal. Koppints egy jelre vagy területre a részletekért.": "De lejos, iconos; al acercar, la zona afectada se contornea y se vela. Toca un signo o una zona para ver los detalles.",
  "tűzveszély-előrejelzés (FWI), csak internettel. Ez veszély-index, NEM tilalom.": "previsión de peligro de incendio (FWI), solo con internet. Es un índice de peligro, NO una prohibición.",
  "Források": "Fuentes",
  "később (hozzáférésre vár)": "más tarde (pendiente de acceso)",
  "most nem frissült": "no actualizado ahora"
});

// ===== 2026-10-18 16:4x: vilaghelyzet v2 (haboru / instabilitas, tilalom tavolrol egy jel; kartya 771683de) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Fegyveres összecsapás / instabilitás": "Enfrentamientos armados / inestabilidad",
  "Felkelés, terrorizmus vagy szervezett bűnözés (nem háború)": "Insurgencia, terrorismo o crimen organizado (no es una guerra)",
  "helyszín": "lugares",
  "Megyék tilalommal": "Condados con prohibición",
  "Közelíts a megyék megjelenítéséhez.": "Acerca el mapa para ver los condados."
});

// ===== 2026-10-18: ige-melletti jegyzetek (Biblia, kartya c7ec8846) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Mértékegység": "Unidad de medida",
  "Scofield-jegyzet": "Nota de Scofield",
  "Jegyzetek": "Notas",
  "Jegyzetek az igék mellett": "Notas junto a los versículos",
  "Ahol egy vershez jegyzet tartozik, egy kis jel áll mellette; rákoppintva megnyílik. A jegyzetcsomag a most olvasott fordításhoz tartozik, és letöltés után internet nélkül is megvan.": "Donde un versículo tiene una nota, aparece una pequeña marca a su lado; tócala para abrirla. El paquete de notas corresponde a la traducción que estás leyendo y, una vez descargado, funciona sin internet.",
  "Ehhez a fordításhoz még nincs jegyzetcsomag.": "Todavía no hay paquete de notas para esta traducción.",
  "A letölthető jegyzetcsomagok listája most nem érhető el.": "La lista de paquetes de notas descargables no está disponible ahora.",
  "Jelek megjelenítése": "Mostrar marcas",
  "jegyzet": "notas",
  "Még nincs letöltve": "Aún no descargado",
  "Törlöd ezt a jegyzetcsomagot?": "¿Eliminar este paquete de notas?"
});

// ===== APOKRIF KONYVEK a Bibliaban (kartya 28758956, 2026-10-18) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Apokrifek ↓": "Apócrifos ↓",
  "Apokrif könyvek letöltése": "Descargar los libros apócrifos",
  "Deuterokanonikus könyvek": "Libros deuterocanónicos",
  "Ószövetségi apokrifek": "Apócrifos del Antiguo Testamento",
  "További ószövetségi apokrifek": "Otros apócrifos del Antiguo Testamento",
  "Pszeudepigráfák": "Pseudoepígrafos",
  "Apostoli atyák": "Padres apostólicos",
  "vers": "versículo",
  "Énok könyvei letöltése": "Descargar los libros de Enoc",
  "Énok 2–3 ↓": "Enoc 2–3 ↓"
});

// ===== OFFLINE TERKEP CSOPORT a terkep-funkciok tablan (2026-10-18) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Helyzet, pontok és mérés": "Posición, puntos y medición",
  "Offline térkép": "Mapa sin conexión",
  "A tájegységek letöltése a telefonos alkalmazásban működik.": "La descarga por regiones funciona en la aplicación del teléfono.",
  "Külföld: országok és tájegységeik ›": "Extranjero: países y sus regiones ›",
  "Magyarország tájegységei": "Regiones de Hungría",
  "Külföldi térképek": "Mapas del extranjero",
  "A saját térképet tájegységenként töltheted le: itt lent, az „Offline térkép” csoportban.": "El mapa propio se descarga por regiones: justo debajo, en el grupo «Mapa sin conexión».",
  "A tájegységek listája most nem érhető el (nincs kapcsolat vagy belépés).": "La lista de regiones no está disponible ahora (sin conexión o sin iniciar sesión).",
  "Saját térkép bekapcsolva. A tájegységeket itt lent, az „Offline térkép” csoportban töltheted le.": "Mapa propio activado. Descarga las regiones justo debajo, en el grupo «Mapa sin conexión».",
  "Az alaptérképet az OpenStreetMap szabályai miatt nem lehet előre letölteni (a megnézett részek megmaradnak). Internet nélkül a Saját térkép működik: Magyarországra tájegységenként letöltheted itt lent, az „Offline térkép” csoportban.": "El mapa base no se puede descargar por adelantado por las normas de OpenStreetMap (las partes vistas se conservan). Sin internet funciona el Mapa propio: para Hungría puedes descargarlo por regiones justo debajo, en el grupo «Mapa sin conexión».",
  // 2026-10-19 (card 4c1a5683): own country first, Más országok térképei, separate trails / points
  "Turistautak": "Rutas de senderismo",
  "Turistapontok": "Puntos de senderismo",
  "Az egész ország": "Todo el país",
  "Más országok térképei": "Mapas de otros países",
  "Más országok térképei ›": "Mapas de otros países ›",
  "A telefon beállításaiból nem derül ki, melyik a saját országod: a Más országok térképei között megtalálod.": "La configuración del teléfono no indica cuál es tu país: lo encontrarás en Mapas de otros países.",
  "Koppints egy országra, és lenyílik. Az alaptérkép, a turistautak és a turistapontok külön-külön letölthetők, az egész országra vagy tájegységenként. A turistautak és a pontok az online térképen is működnek, és kevés helyet foglalnak. Az alaptérképet az első kéréskor a szerver készíti elő, ez néhány perc lehet.": "Toca un país para desplegarlo. El mapa base, las rutas de senderismo y los puntos de senderismo se descargan por separado, para todo el país o por regiones. Las rutas y los puntos también funcionan en el mapa en línea y ocupan poco espacio. El servidor prepara el mapa base en la primera solicitud, lo que puede tardar unos minutos."
});

// 2026-10-19 (card 19b4756f): second recorded Bible voice (Charon)
Object.assign(window.PP_FORD_SZOTAR.es, {
  "A PrepperPapa hang felvétele": "Grabación de la voz de PrepperPapa",
  "Imre (gépi)": "Imre (sintética)",
  "Charon (új, jobb minőségű)": "Charon (nueva, de mejor calidad)",
  "Az eredeti felvétel, a teljes Biblia elérhető.": "La grabación original, la Biblia completa está disponible.",
  "Új, természetesebb felvétel, könyvenként érkezik. Amelyik könyv még nem készült el, azt Imre olvassa fel.": "Una grabación nueva y más natural, que llega libro a libro. Los libros aún no terminados los lee Imre.",
  "Letöltés közben a felvétel nem váltható.": "La grabación no se puede cambiar durante una descarga.",
  "A Charon-felvétel készül, könyvenként érkezik. Amint egy könyv elkészül, itt letölthető lesz.": "La grabación de Charon está en curso y llega libro a libro. En cuanto un libro esté terminado, podrás descargarlo aquí.",
  "A Charon-felvétel készül, könyvenként érkezik.": "La grabación de Charon está en curso y llega libro a libro.",
  "Minden elkészült könyv letöltése": "Descargar todos los libros terminados"
});

// 2026-10-19 (card eaaba276): calculator validation, settlement search, secret QR, compass, household, reminders
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Add meg, hány liter vizet tisztítasz (nullánál több).": "Indica cuántos litros de agua vas a tratar (más de cero).",
  "Ez a számoló legfeljebb 10 000 literig számol.": "Esta calculadora calcula hasta 10 000 litros como máximo.",
  "A magasság -500 és 9000 méter között legyen.": "La altitud debe estar entre -500 y 9000 metros.",
  "Tölts ki minden mezőt nullánál nagyobb számmal.": "Rellena todos los campos con un número mayor que cero.",
  "A fűtött terület legfeljebb 2000 m² lehet.": "La superficie calefactada puede ser como máximo de 2000 m².",
  "Legfeljebb 365 napra számol.": "Calcula para 365 días como máximo.",
  "Tölts ki mindkét mezőt nullánál nagyobb számmal.": "Rellena los dos campos con un número mayor que cero.",
  "A tetőfelület legfeljebb 10 000 m² lehet.": "La superficie del tejado puede ser como máximo de 10 000 m².",
  "Egyetlen esőből legfeljebb 500 mm-rel számol: ennél több egy esőzésből nem esik.": "Para una sola lluvia calcula como máximo 500 mm: en una lluvia no cae más que eso.",
  "Gyalog legfeljebb 1000 km-rel számol. Hosszabb utat bonts szakaszokra.": "A pie calcula como máximo 1000 km. Divide una ruta más larga en tramos.",
  "Az emelkedés nem lehet negatív: a lejtőt ne vond le, írj 0-t.": "El desnivel no puede ser negativo: no restes la bajada, escribe 0.",
  "Az összes emelkedés legfeljebb 20 000 méter lehet.": "El desnivel total puede ser como máximo de 20 000 metros.",
  "A létszám nem lehet negatív.": "El número de personas no puede ser negativo.",
  "Add meg, hány felnőtt és hány gyerek van (legalább egy fő).": "Indica cuántos adultos y niños hay (al menos una persona).",
  "Legfeljebb 500 főre számol.": "Calcula para 500 personas como máximo.",
  "Hány napra kell? Legalább 1 napot adj meg.": "¿Para cuántos días? Indica al menos 1 día.",
  "Legfeljebb 3650 napra (10 évre) számol.": "Calcula para 3650 días (10 años) como máximo.",
  "Legalább 1 elem vagy akku kell.": "Hace falta al menos 1 pila o batería.",
  "Legfeljebb 100 elemmel számol.": "Calcula con 100 pilas como máximo.",
  "Add meg a LED áramfelvételét (mA, nullánál több).": "Indica el consumo del LED (mA, más de cero).",
  "Add meg az elem vagy akku kapacitását (mAh, nullánál több).": "Indica la capacidad de la pila o batería (mAh, más de cero).",
  "Add meg az adóteljesítményt (watt, nullánál több).": "Indica la potencia de transmisión (vatios, más de cero).",
  "Legfeljebb 1500 wattal számol.": "Calcula con 1500 vatios como máximo.",
  "Az antennamagasság 0 és 1000 méter között legyen.": "La altura de la antena debe estar entre 0 y 1000 metros.",
  "A távolság nem lehet negatív.": "La distancia no puede ser negativa.",
  "A napok száma nem lehet negatív.": "El número de días no puede ser negativo.",
  "Hány napra: 1 és 60 nap között adj meg egy számot.": "Cuántos días: indica un número entre 1 y 60.",
  "város": "ciudad",
  "település": "localidad",
  "településrész": "barrio",
  "tanya, külterület": "caserío, afueras",
  "A koordinátát nem tudtam értelmezni. Írd be így: 47.4979, 19.0402": "No he podido interpretar la coordenada. Escríbela así: 47.4979, 19.0402",
  "Tölts ki valamit, amit bele lehet tenni.": "Rellena algo que se pueda poner dentro.",
  "Túl hosszú: ennyi szöveg nem fér el egy QR-kódban. Rövidítsd le, vagy oszd két kódra.": "Demasiado largo: tanto texto no cabe en un código QR. Acórtalo o divídelo en dos códigos.",
  "A titkosítás nem sikerült. Próbáld újra.": "El cifrado ha fallado. Inténtalo de nuevo.",
  "Előre:": "Delante:",
  "Az É betű mindig az északot mutatja, a felső jel az, amerre a telefon néz.": "La N siempre señala el norte; la marca de arriba es hacia donde mira el teléfono.",
  "vércsoport": "grupo sanguíneo",
  "kontakt": "contacto",
  "még nincs felvéve": "todavía no hay ninguno",
  "Bekapcsolva.": "Activado.",
  "Kikapcsolva.": "Desactivado.",
  "Reggel 9-kor szól, a fent választott idővel a lejárat előtt és a lejárat napján, akkor is, ha az app be van zárva.": "Avisa a las 9 de la mañana, con la antelación elegida arriba antes de la caducidad y el mismo día, aunque la app esté cerrada.",
  "Most nincs olyan tétel, aminek közelgő lejárata lenne.": "Ahora mismo ningún artículo está a punto de caducar.",
  "Beütemezett emlékeztetők:": "Recordatorios programados:",
  "Kapcsold be, és engedélyezd az értesítést: szól, mielőtt egy élelmiszer vagy készlet-tétel lejár.": "Actívalo y permite las notificaciones: avisa antes de que caduque un alimento o un artículo de la despensa.",
  "Bekapcsolva. Amikor megnyitod az appot, naponta egyszer jelez a lejáró tételekről.": "Activado. Cuando abres la app, avisa una vez al día de los artículos que caducan.",
  "Helyi szoba (MESH)": "Sala local (MESH)",
  "Offline segéd · tudástár, Biblia, készlet, térkép": "Asistente sin conexión · conocimientos, Biblia, despensa, mapa"
});

Object.assign(window.PP_FORD_SZOTAR.es, {
  "Név a szobákban (ezen látnak a csevegésben)": "Nombre en las salas (así te ven en el chat)",
  "A családtag fényképe a profilképed is lesz a szobákban.": "La foto del familiar también será tu foto de perfil en las salas."
});

// kartya 28758956: halk jeloles az apokrif konyveknel
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Nem a Szentírás része – ajánlott irodalom.": "No forma parte de las Sagradas Escrituras – lectura recomendada."
});

// kartya 6b4458db: veszkartya-cimkek + riaszto probahang (v43.308)
Object.assign(window.PP_FORD_SZOTAR.es, {
  "A kártya tulajdonosának telefonszáma": "Teléfono del titular de la tarjeta",
  "A kártya tulajdonosának telefonszáma:": "Teléfono del titular de la tarjeta:",
  "Vész esetén értesítendő személy": "Contacto de emergencia (persona a avisar)",
  "Vész esetén értesítendő telefonszáma": "Teléfono del contacto de emergencia",
  "Vész esetén értesítendő:": "Contacto de emergencia:",
  "pl. +36 30 123 4567": "p. ej. +36 30 123 4567",
  "Szól, de hallhatatlanul magas. Ha semmit nem hallasz, az normális.": "Está sonando, pero es demasiado agudo para oírlo. Si no oyes nada, es normal.",
  "Próbahang": "Tono de prueba",
  "A próbahang nem indult el.": "El tono de prueba no se ha iniciado."
});
// ===== 2026-10-20 v43.326 (card 6b287cfb): PIN recovery code, reminder sentence, PIN setup without a default PIN =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Írd be a PIN-kódod": "Escribe tu PIN",
  "Írd be még egyszer": "Escríbelo otra vez",
  "A PIN még egyszer": "El PIN otra vez",
  "Elfelejtettem a PIN-t": "He olvidado el PIN",
  "Állíts be egy PIN-kódot (6 számjegy)": "Establece un PIN (6 dígitos)",
  "A PIN 6 számjegy legyen.": "El PIN debe tener 6 dígitos.",
  "A két PIN nem egyezik.": "Los dos PIN no coinciden.",
  "Válassz másik PIN-kódot.": "Elige otro PIN.",
  "Mentési kód a PIN-hez": "Código de recuperación del PIN",
  "Ha elfelejted a PIN-t, ezzel a kóddal nyithatod meg a tárat, és állíthatsz be új PIN-t. Írd le papírra, és tartsd biztonságos helyen. Csak most látod: a telefon nem őrzi meg, és sehova nem küldjük el.": "Si olvidas el PIN, este código abre el almacén y te permite establecer un PIN nuevo. Escríbelo en papel y guárdalo en un lugar seguro. Solo lo ves ahora: el teléfono no lo guarda y nunca lo enviamos a ninguna parte.",
  "Emlékeztető mondat (nem kötelező; titkosítás nélkül tárolódik, ne írd bele a PIN-t)": "Frase recordatoria (opcional; se guarda sin cifrar, no escribas el PIN en ella)",
  "A kód utolsó négy karaktere (ellenőrzéshez)": "Los cuatro últimos caracteres del código (para comprobar)",
  "Leírtam": "Lo he anotado",
  "Később": "Más tarde",
  "Mentve. A mentési kód mostantól érvényes.": "Guardado. El código de recuperación es válido desde ahora.",
  "Nem egyezik a kód utolsó négy karakterével. Nézd meg újra a leírt kódot.": "No coincide con los cuatro últimos caracteres del código. Vuelve a mirar el código que anotaste.",
  "A mentés nem sikerült, próbáld újra.": "No se pudo guardar, inténtalo de nuevo.",
  "Rendben, a következő belépéskor újra felajánljuk.": "De acuerdo, te lo ofreceremos de nuevo en el próximo acceso.",
  "Emlékeztető mondat:": "Frase recordatoria:",
  "Új PIN ujjlenyomattal": "PIN nuevo con huella",
  "Mentési kód": "Código de recuperación",
  "Ehhez a tárhoz még nincs mentési kód, és az ujjlenyomatos feloldás sincs bekapcsolva, ezért a PIN nem állítható vissza.": "Este almacén aún no tiene código de recuperación y el desbloqueo con huella no está activado, por lo que el PIN no se puede recuperar.",
  "Új PIN beállítása": "Establecer PIN nuevo",
  "Az ujjlenyomat rendben. Add meg az új PIN-t.": "Huella correcta. Escribe el PIN nuevo.",
  "Az ujjlenyomatos feloldás most nem sikerült.": "El desbloqueo con huella no ha funcionado ahora.",
  "Hibás mentési kód.": "Código de recuperación incorrecto.",
  "Az új PIN beállítása nem sikerült, a régi PIN maradt érvényben.": "No se pudo establecer el PIN nuevo; el PIN anterior sigue siendo válido.",
  "A dokumentumok CSAK ezen az eszközön tárolódnak, a PIN-edből képzett kulccsal titkosítva (AES-256) — a vészkártyával ellentétben ezt csak te nyithatod meg. A PIN-t nem tároljuk. Ha elfelejted, a mentési kóddal vagy ujjlenyomattal állíthatsz be újat; ezek nélkül a dokumentumok nem állíthatók vissza.": "Los documentos se guardan SOLO en este dispositivo, cifrados con una clave creada a partir de tu PIN (AES-256) — a diferencia de la tarjeta de emergencia, solo tú puedes abrirlos. El PIN no se guarda. Si lo olvidas, puedes establecer uno nuevo con el código de recuperación o con tu huella; sin ellos los documentos no se pueden recuperar.",
  "A kódok titkosítva tárolódnak ezen az eszközön: a kulcs a PIN-edből készül (AES-256), magát a PIN-t nem tároljuk. Ha elfelejted a PIN-t, a mentési kóddal vagy ujjlenyomattal állíthatsz be újat; ezek nélkül a tartalom nem állítható vissza, ezért a seed-mondatról tarts papírmásolatot is. A teljes mentésbe ez a rész SOSEM kerül bele.": "Los códigos se guardan cifrados en este dispositivo: la clave se crea a partir de tu PIN (AES-256); el PIN en sí no se guarda. Si olvidas el PIN, puedes establecer uno nuevo con el código de recuperación o con tu huella; sin ellos el contenido no se puede recuperar, así que guarda también una copia en papel de la frase semilla. Esta parte NUNCA entra en la copia de seguridad completa."
});
// ===== 2026-10-20 v43.327 (card 6b287cfb): wallet-creation acknowledgement (HU text approved by the owner 21:39) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Értem, hogy a tárcám kulcsait (PIN, helyreállító kód, seed phrase) csak én ismerem. Ha elveszítem őket, a tárcám tartalma végleg elveszhet, és a PrepperPapa nem tudja visszaállítani. A kulcsok biztonságos megőrzése az én felelősségem.": "Entiendo que solo yo conozco las claves de mi monedero (PIN, código de recuperación, frase semilla). Si las pierdo, el contenido de mi monedero puede perderse para siempre y PrepperPapa no puede restaurarlo. Guardar las claves de forma segura es mi responsabilidad.",
  "Rendben": "De acuerdo",
  "A tárca létrehozásához jelöld be, hogy tudomásul vetted a fenti szöveget.": "Para crear el monedero, marca la casilla para confirmar que has leído el texto de arriba."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): "Fontos tudnivaló" notice (HU approved by the owner 21:47, TG 28515) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Fontos tudnivaló az Irattárcáról és a tárcáról": "Información importante sobre la Cartera de documentos y el monedero",
  "Az adataid csak a te eszközödön vannak, titkosítva. A PrepperPapa nem fér hozzájuk, és nem tudja visszaállítani őket.": "Tus datos están solo en tu propio dispositivo, cifrados. PrepperPapa no tiene acceso a ellos y no puede restaurarlos.",
  "A PIN-kódod, a helyreállító kódod és a tárcád kulcsai (seed phrase) kizárólag nálad vannak. Ha elveszíted, megosztod vagy illetéktelen megszerzi őket, az adataid és a tárcád tartalma végleg elveszhet.": "Tu PIN, tu código de recuperación y las claves de tu monedero (frase semilla) solo los tienes tú. Si los pierdes, los compartes o alguien no autorizado los obtiene, tus datos y el contenido de tu monedero pueden perderse para siempre.",
  "Ha a helyreállító kódot e-mailben is kéred, a hozzáférésed csak olyan biztonságos, mint a postafiókod.": "Si también pides el código de recuperación por correo electrónico, tu acceso solo es tan seguro como tu buzón.",
  "A kulcsok, a kód, a postafiók és az eszköz biztonságos megőrzéséért, valamint a mentésekért te felelsz. A PrepperPapa nem felel az ebből eredő kárért, kivéve azt a felelősséget, amelyet jogszabály nem enged kizárni.": "Eres responsable de guardar de forma segura las claves, el código, el buzón y el dispositivo, así como de las copias de seguridad. PrepperPapa no responde de los daños que se deriven de ello, salvo la responsabilidad que la ley no permite excluir.",
  "Elolvastam, értem.": "Lo he leído y lo entiendo."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): Gíra paragraph (HU approved by the owner 21:58, TG 28530) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "A gíra a közösségen belüli elszámolás egysége, nem pénz és nem fizetőeszköz. A PrepperPapa nem váltja át pénzre, nem garantálja az értékét, és nem részese a tagok közötti ügyleteknek. A tagok közötti vitákat és elszámolást a felhasználók egymás közt rendezik. Az offline fizetésnél előfordulhat, hogy ugyanazt a gírát kétszer költik el; ennek kockázata a felhasználókat terheli.": "La gíra es una unidad de cuenta dentro de la comunidad; no es dinero ni medio de pago. PrepperPapa no la cambia por dinero, no garantiza su valor y no es parte de las operaciones entre los miembros. Las disputas y la liquidación entre los miembros las resuelven los usuarios entre sí. En los pagos sin conexión puede ocurrir que la misma gíra se gaste dos veces; ese riesgo corre a cargo de los usuarios."
});
// ===== 2026-10-20 v43.328 (card 6b287cfb): SOS fail-closed -- nothing goes out unencrypted =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Az SOS NEM ment el: a titkosítás nem sikerült, ezért nyíltan nem küldöm el. Életveszélyben hívd a 112-t! A vészsíp szól.": "El SOS NO se ha enviado: el cifrado ha fallado, por eso no se envía sin cifrar. ¡Si hay peligro para la vida, llama al 112! El silbato de emergencia está sonando.",
  "{n} helyre NEM ment el, mert a titkosítás nem sikerült. Életveszélyben hívd a 112-t!": "NO se ha enviado a {n} destino(s) porque el cifrado ha fallado. ¡Si hay peligro para la vida, llama al 112!"
});
// ===== 2026-10-20 v43.329 (card 6b287cfb): room chat fail-closed -- nothing goes out unencrypted =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Az üzenet nem ment el: a titkosítás nem sikerült, vagy ezen a telefonon hiányzik a szoba kulcsa. Titkosítatlanul nem küldöm el. A szöveg megmaradt: lépj be újra a szobába (vagy kérj új meghívót a gazdától), és küldd újra.": "El mensaje NO se ha enviado: el cifrado ha fallado o falta la clave de la sala en este teléfono. No se envía sin cifrar. Tu texto se conserva: vuelve a entrar en la sala (o pide al anfitrión una nueva invitación) y envíalo de nuevo.",
  "A kép nem ment el: a titkosítás nem sikerült, vagy hiányzik a szoba kulcsa. Titkosítatlanul nem küldöm el. Lépj be újra a szobába.": "La imagen NO se ha enviado: el cifrado ha fallado o falta la clave de la sala. No se envía sin cifrar. Vuelve a entrar en la sala."
});
// ===== 2026-10-20 v43.329 (card 6b287cfb): SOS / fall-detection notices (HU approved by the owner, TG 28555) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Ez nem segélyhívás. Az SOS-jelzés és az esés-érzékelés csak a te szobáidba, az ott lévő tagoknak küld értesítést. Nem hívja a mentőket, a rendőrséget vagy a tűzoltókat, és nem biztos, hogy bárki időben meglátja. Az esés-érzékelés nem pontos: téves riasztást adhat, és előfordulhat, hogy egy esést nem érzékel. Életveszélyben, balesetnél, rosszullétnél hívd a 112-t. A PrepperPapa nem segélyszolgálat, és nem garantálja, hogy a jelzés célba ér.": "Esto no es una llamada de emergencia. La alerta SOS y la detección de caídas solo envían una notificación a tus salas, a los miembros que hay en ellas. No llaman a la ambulancia, a la policía ni a los bomberos, y no es seguro que alguien la vea a tiempo. La detección de caídas no es precisa: puede dar una falsa alarma y puede que no detecte una caída. En peligro de muerte, en un accidente o si te encuentras mal, llama al 112. PrepperPapa no es un servicio de emergencias y no garantiza que la alerta llegue a su destino.",
  "Az SOS elküldi a pontos helyedet, és ha bejelölted, a Vészkártyád adatait (vércsoport, allergia, gyógyszer, betegség, kontakt) is az összes szobádnak.": "El SOS envía tu ubicación exacta y, si lo has marcado, también los datos de tu Tarjeta de emergencia (grupo sanguíneo, alergia, medicamento, enfermedad, contacto) a todas tus salas.",
  "A Vészkártya adataimat is küldjétek az SOS-szal.": "Enviad también los datos de mi Tarjeta de emergencia con el SOS.",
  "Ez nem hívja a mentőket. Életveszélyben hívd a 112-t.": "Esto no llama a la ambulancia. En peligro de muerte, llama al 112.",
  "%s SOS-jelzést küldött. Ha nem éred el, és veszélyben lehet, hívd a 112-t.": "%s ha enviado una alerta SOS. Si no consigues contactar con esa persona y puede estar en peligro, llama al 112.",
  "(zárt kép — ehhez a szobához nincs meg a kulcs)": "(imagen cifrada — falta la clave de esta sala)",
  "Fontos tudnivaló az SOS-ról és az esés-érzékelésről": "Información importante sobre el SOS y la detección de caídas",
  "Nem kell megnyomnod: a telefon két percenként magától egyeztet. A gomb csak azonnali egyeztetésre való.": "No hace falta pulsarlo: el teléfono sincroniza solo cada dos minutos. El botón es solo para sincronizar al instante.",
  "Nincs elérhető Gíra-szoba: egy szoba gazdája kapcsolhatja be a szoba beállításaiban („Gíra-közösség”).": "No hay ninguna sala Gíra disponible: el dueño de una sala puede activarlo en los ajustes de la sala («Comunidad Gíra»).",
  "Automatikus egyeztetés bekapcsolva, de most nincs elérhető Gíra-szoba": "Sincronización automática activada, pero ahora no hay ninguna sala Gíra accesible",
  "utoljára próbálva": "último intento",
  "Automatikus egyeztetés bekapcsolva": "Sincronización automática activada",
  "utoljára ellenőrizve": "última comprobación",
  "Utolsó változás elküldve": "Último cambio enviado",
  "Utolsó beérkezett könyv": "Último libro recibido",
  "Fortiprep vagy konzerv": "Fortiprep o conservas",
  "Mennyibe kerül a tartalék hosszú távon": "Cuánto cuesta la reserva a largo plazo",
  "Fortiprep vagy konzerv: mennyibe kerül a tartalék": "Fortiprep o conservas: cuánto cuesta la reserva",
  "Ugyanannyi kalóriát hasonlít össze ugyanarra az időszakra. Az árakat a saját boltod szerint átírhatod.": "Compara las mismas calorías durante el mismo periodo. Puedes cambiar los precios según tu tienda.",
  "Hány fő": "Personas",
  "Napi kalória fejenként (kcal)": "Calorías diarias por persona (kcal)",
  "Hány évig álljon a tartalék": "Cuántos años debe durar la reserva",
  "Egy csomag ára (Ft)": "Precio de un paquete (HUF)",
  "Kalória egy csomagban (kcal)": "Calorías en un paquete (kcal)",
  "Eltarthatóság (év)": "Caducidad (años)",
  "Alapérték: 42 adagos (14 napos, egy fős) csomag a PP-2-2026 kóddal, 2026. augusztusi áron. A mostani gyártás minőségmegőrzési ideje 2050. november.": "Por defecto: paquete de 42 raciones (14 días, una persona) con el código PP-2-2026, precio de agosto de 2026. El lote actual caduca en noviembre de 2050.",
  "Egy doboz ára (Ft)": "Precio de una lata (HUF)",
  "Kalória egy dobozban (kcal)": "Calorías en una lata (kcal)",
  "A konzervnél azzal számol, hogy lejáratkor az egészet lecseréled. Ha rotálva megeszed, a csere nem veszteség, de figyelni kell rá.": "Para las conservas supone que lo reemplazas todo al caducar. Si las consumes rotando, el cambio no es una pérdida, pero hay que vigilarlo.",
  "A FortiPrep 14 napos csomagja a PP-2-2026 kóddal, kedvezménnyel:": "El paquete de 14 días de FortiPrep con el código PP-2-2026, con descuento:",
  "Megnézem a FortiPrep oldalán": "Ver en la web de FortiPrep",
  "Minden mezőbe nullánál nagyobb számot írj.": "Escribe en cada campo un número mayor que cero.",
  "Ekkora értékkel nem számol.": "No calcula con valores tan grandes.",
  "Erre az időszakra a Fortiprep az olcsóbb.": "Para este periodo Fortiprep es más barato.",
  "Erre az időszakra a konzerv az olcsóbb.": "Para este periodo las conservas son más baratas.",
  "Erre az időszakra a kettő ugyanannyiba kerül.": "Para este periodo ambos cuestan lo mismo.",
  "Különbség": "Diferencia",
  "Szükséges kalória (kcal)": "Calorías necesarias (kcal)",
  "Csomag": "Paquetes",
  "Egyszeri vásárlás": "Compra única",
  "Ezer kalória ára": "Precio por 1000 kcal",
  "Vásárlás a teljes időszakra": "Compras en todo el periodo",
  "Évente": "Al año",
  "Doboz": "Latas",
  "FortiPrep 14 napos csomag, 15% kedvezménnyel": "Paquete FortiPrep de 14 días, 15 % de descuento",
  "Kuponkód": "Código de cupón",
  "Másol": "Copiar",
  "A gomb mögötti link magától érvényesíti a kódot a kosárban.": "El enlace del botón aplica el código en el carrito automáticamente.",
  "Megveszem kedvezménnyel": "Comprar con descuento",
  // Biblia konyvszin-sema (2026-10-25, kartya 6b4458db)
  "Könyvszínek": "Colores de los libros",
  "Új": "Nuevo",
  "Régi": "Antiguo",
  "Minden könyvcsoport saját színt kap, az Ószövetségben és az Újszövetségben is.": "Cada grupo de libros tiene su propio color, tanto en el Antiguo como en el Nuevo Testamento.",
  "A korábbi zöld árnyalatok: az Újszövetség is az Ószövetség színeit kapja.": "Los tonos verdes anteriores: el Nuevo Testamento usa también los colores del Antiguo.",
  // Biblia terkep: helyleiras (2026-10-25, kartya 6b4458db)
  "biztos": "segura",
  "valószínű": "probable",
  "lehetséges": "posible",
  "Mai azonosítás": "Identificación actual",
  "Megjegyzés (OpenBible, angolul)": "Nota (OpenBible, en inglés)",
  "Más nevek (angol fordításokban)": "Otros nombres (en traducciones inglesas)",
  "További versek": "Otros versículos"
});
// ===== 2026-10-25 v43.355: camera Morse follows the tempo (#65); Noah memory lines from about 8 GB (#52) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Indítsd, és irányítsd a kamerát egy Morzét villogó fényre (pl. egy másik telefon vakuja). A háttér legyen sötét, a fény a kép KÖZEPÉN. A fény-küszöb magától hangolódik; a \"Fényerő\" sáv és a lámpa mutatja, mit lát. A vétel magától követi a villogás tempóját, és a \"Vétel sebesség\" csúszkát is odaállítja; kézzel is állíthatod.": "Inícialo y apunta la cámara a una luz que parpadee en Morse (por ejemplo, el flash de otro teléfono). El fondo debe ser oscuro y la luz, en el CENTRO de la imagen. El umbral de luz se ajusta solo; la barra \"Brillo\" y la lámpara muestran lo que ve. La recepción sigue sola el ritmo del parpadeo y también coloca ahí el control \"Velocidad de recepción\"; también puedes ajustarlo a mano.",
 "A nyelvi modell válasz közben kb. 3 GB memóriát használ, ezért Noah legalább 5,5 GB jelentett memóriát kér, ami kb. 8 GB-os telefonnak felel meg. Kisebb telefonon a rendszer válasz közben leállítaná az appot, ezért itt Noah nem használható.": "Al responder, el modelo de lenguaje usa unos 3 GB de memoria, por eso Noah necesita al menos 5,5 GB de memoria informada, lo que corresponde a un teléfono de unos 8 GB. En un teléfono más pequeño el sistema cerraría la app mientras responde, por eso Noah no se puede usar aquí.",
 "A telefon memóriáját nem sikerült lekérdezni.": "No se pudo consultar la memoria del teléfono.",
 "A telefon által jelentett memória: {jel} GB, ez kb. {nev} GB-os telefon (a rendszer a névleges memória kb. 90%-át jelenti).": "Memoria que informa el teléfono: {jel} GB, es decir, un teléfono de unos {nev} GB (el sistema informa aproximadamente el 90 % de la memoria nominal).",
 "Ebbe a telefonba mindkét modell belefér (E2B és E4B).": "En este teléfono caben los dos modelos (E2B y E4B).",
 "Ebbe a telefonba az E2B modell fér bele. Az E4B nem, mert ahhoz legalább {kapu} GB jelentett memória kell.": "En este teléfono cabe el modelo E2B. El E4B no, porque necesita al menos {kapu} GB de memoria informada.",
 "Ebbe a telefonba egyik modell sem fér bele.": "En este teléfono no cabe ninguno de los modelos.",
 "Noah kb. 8 GB-os telefontól fut (a telefon névleges memóriája), a nagyobb E4B modell kb. 10 GB-ostól.": "Noah funciona a partir de un teléfono de unos 8 GB (memoria nominal del teléfono), el modelo E4B, más grande, a partir de unos 10 GB.",
 "A telefon {jel} GB memóriát jelent, ez kb. {nev} GB-os telefon.": "El teléfono informa {jel} GB de memoria, es decir, un teléfono de unos {nev} GB.",
 "Ez a telefon: {modell}.": "Este teléfono: {modell}.",
 "Szabad hely: {hely}.": "Espacio libre: {hely}.",
 "Ajánlott: {modell}.": "Recomendado: {modell}.",
 "nem választható: legalább {ajanlott} GB-os telefon kell": "no disponible: se necesita un teléfono de al menos {ajanlott} GB",
 "ez kb. {nev} GB-os": "este es de unos {nev} GB",
 "Ajánlott memória: legalább {ajanlott} GB-os telefon": "Memoria recomendada: un teléfono de al menos {ajanlott} GB",
 "ez a telefon {jel} GB-ot jelent, kb. {nev} GB-os": "este teléfono informa {jel} GB, un teléfono de unos {nev} GB",
 "ezért ez a modell itt nem választható": "por eso este modelo no se puede elegir aquí",
 "ennek a telefonnak a memóriáját nem sikerült lekérdezni": "no se pudo consultar la memoria de este teléfono",
 "Processzor:": "Procesador:",
 "kb. 8 GB-os telefon kell": "se necesita un teléfono de unos 8 GB",
 "Ehhez Android 11 vagy újabb, kb. 8 GB-os (névleges memóriájú) telefon kell, és 6-8 GB szabad hely.": "Para esto se necesita un teléfono con Android 11 o posterior, unos 8 GB de memoria (nominal) y 6-8 GB de espacio libre.",
  "Becslés a légnyomás-trendből (Zambretti-módszer), a félgömb és az évszak szerint igazítva. Szelet és felhőzetet nem lát, ezért csak tájékoztató.": "Estimación a partir de la tendencia de la presión (método Zambretti), ajustada al hemisferio y la estación. No ve el viento ni las nubes, así que es solo orientativa.",
  "Magasság nélkül csak a trendet veszi figyelembe, a nyomás szintjét nem.": "Sin altitud solo tiene en cuenta la tendencia, no el nivel de la presión.",
  "A trópusokon a légnyomás napi ingadozása elfedi a frontokat, ezért itt a becslés kevésbé megbízható.": "En los trópicos la oscilación diaria de la presión oculta los frentes, por eso aquí la estimación es menos fiable.",
  "A sarkvidéken a módszer kevésbé megbízható.": "En las regiones polares el método es menos fiable.",
  "Becslés": "Estimación",
  "Napos, nyugodt idő": "Soleado, estable",
  "Változékony idő": "Variable",
  "Eső valószínű": "Probable lluvia",
  "Vihar, sok eső": "Tormenta, mucha lluvia",
  "Gyorsan emelkedik": "Sube rápido",
  "Lassan emelkedik": "Sube despacio",
  "Állandó": "Estable",
  "Lassan süllyed": "Baja despacio",
  "Gyorsan süllyed": "Baja rápido"
});
// Vercsoport calculator (2026-10-25, card 6b4458db): the red-cell table of tudastar article 3.6
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Vércsoport": "Grupo sanguíneo",
 "Kinek adhatsz vért, és kitől kaphatsz": "A quién puedes dar sangre y de quién puedes recibirla",
 "Vércsoport: kinek adhatsz, kitől kaphatsz": "Grupo sanguíneo: a quién puedes dar, de quién puedes recibir",
 "Vérátömlesztést csak egészségügyi személyzet végez, vércsoport-meghatározás és keresztpróba után.": "Las transfusiones de sangre solo las hace personal sanitario, tras determinar el grupo sanguíneo y hacer la prueba cruzada.",
 "Terepen vért adni vagy kapni nem szabad. Ezt nem lehet rögtönözni.": "Nunca des ni recibas sangre sobre el terreno. Esto no se puede improvisar.",
 "A kalkulátor tájékoztató: arra való, hogy értsd a szabályt, nem arra, hogy terepen dönts belőle.": "Esta calculadora es informativa: sirve para entender la regla, no para decidir con ella sobre el terreno.",
 "A te vércsoportod": "Tu grupo sanguíneo",
 "Válaszd ki": "Elige",
 "Mutasd": "Mostrar",
 "Források: Magyar Vöröskereszt, Ausztrál Vöröskereszt (Lifeblood), Amerikai Vöröskereszt.": "Fuentes: Cruz Roja Húngara, Cruz Roja Australiana (Lifeblood), Cruz Roja Americana.",
 "Válaszd ki a vércsoportodat.": "Elige tu grupo sanguíneo.",
 "Kinek adhatsz vörösvérsejtet": "A quién puedes dar glóbulos rojos",
 "Kitől kaphatsz vörösvérsejtet": "De quién puedes recibir glóbulos rojos",
 "Mind a nyolc vércsoportnak": "A los ocho grupos sanguíneos",
 "Mind a nyolc vércsoporttól": "De los ocho grupos sanguíneos",
 "A 0 Rh-negatív vörösvérsejt bárkinek adható, ezért hívják univerzális vörösvérsejt-adónak.": "Los glóbulos rojos O negativos se pueden dar a cualquiera; por eso al O negativo se le llama donante universal de glóbulos rojos.",
 "A plazmánál a szabály megfordul: az AB vércsoportú plazma bárkinek adható, a 0 vércsoportú csak 0 vércsoportúnak.": "Con el plasma la regla se invierte: el plasma AB se puede dar a cualquiera, el plasma O solo al grupo O.",
 "Ez tájékoztató, nem döntési alap.": "Esto es informativo, no una base para decidir.",
 "Hogy egy beteg milyen vért kap, azt vércsoport-meghatározás és keresztpróba után az ellátó orvos dönti el.": "Qué sangre recibe un paciente lo decide el médico que lo atiende, tras determinar el grupo y hacer la prueba cruzada.",
 "0 Rh-negatív": "O negativo",
 "0 Rh-pozitív": "O positivo",
 "A Rh-negatív": "A negativo",
 "A Rh-pozitív": "A positivo",
 "B Rh-negatív": "B negativo",
 "B Rh-pozitív": "B positivo",
 "AB Rh-negatív": "AB negativo",
 "AB Rh-pozitív": "AB positivo"
});
// Bible package by default (2026-10-25, card 6b4458db): notes and apocrypha download with the Bible, settings keep display switches
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Ahol egy vershez jegyzet tartozik, egy kis jel áll mellette; rákoppintva megnyílik. A jegyzetek a Bibliával együtt töltődnek le, és internet nélkül is megvannak.": "Donde un versículo tiene una nota, aparece una pequeña marca a su lado; tócala para abrirla. Las notas se descargan junto con la Biblia y están disponibles sin internet.",
 "A Bibliával együtt töltődik le": "Se descarga con la Biblia",
 "Apokrif könyvek megjelenítése": "Mostrar los libros apócrifos"
});

// feedback sheet fields + one-press screenshot (card 6b4458db, v43.374)
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Típus": "Tipo",
 "Modul": "Módulo",
 "Leírás": "Descripción",
 "Képernyőkép": "Captura de pantalla",
 "Képernyőkép erről a képernyőről": "Captura de esta pantalla",
 "Kép feltöltése": "Subir una imagen",
 "Kép eltávolítása": "Quitar la imagen",
 "Ezt a képet nem tudtam beolvasni.": "No he podido leer esta imagen.",
 "Hiba": "Error",
 "Ötlet": "Idea",
 "Kérdés": "Pregunta",
 "Működik (kipróbáltam, rendben)": "Funciona (lo he probado, está bien)"
});

// ===== 2026-10-25 v43.375: Noah in every language, answer report, about/licence, morning summary, sun path (card 6b287cfb) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Válasz jelentése": "Denunciar esta respuesta",
 "A jelentéssel a kérdésed és Noah válasza a PrepperPapa csapatához kerül, hogy kijavíthassuk. Mást nem küldünk el.": "Con la denuncia, tu pregunta y la respuesta de Noah llegan al equipo de PrepperPapa para que podamos corregirlo. No se envía nada más.",
 "Mi a gond a válasszal?": "¿Qué problema tiene la respuesta?",
 "Sértő vagy bántó": "Ofensiva o hiriente",
 "Veszélyes vagy káros": "Peligrosa o dañina",
 "Téves vagy félrevezető": "Errónea o engañosa",
 "Megjegyzés (nem kötelező)": "Comentario (opcional)",
 "A jelentett válasz": "La respuesta denunciada",
 "A szerver most nem fogadta el a jelentést. Próbáld újra később.": "El servidor no ha aceptado la denuncia ahora. Inténtalo más tarde.",
 "Jelentve": "Denunciada",
 "Köszönjük, a jelentést megkaptuk.": "Gracias, hemos recibido la denuncia.",
 "Noah névjegye": "Acerca de Noah",
 "Noah a Gemma 4 nyílt nyelvi modellel működik (Gemma 4, Google, Apache 2.0 licenc).": "Noah funciona con el modelo de lenguaje abierto Gemma 4 (Gemma 4, Google, licencia Apache 2.0).",
 "A Gemma 4 modellt a Google fejlesztette és adja ki az Apache License 2.0 licenc szerint. A licenc szövege:": "El modelo Gemma 4 lo desarrolló Google y se publica bajo la Apache License 2.0. El texto de la licencia:",
 "A PrepperPapa nem a Google terméke, és a Google nem támogatja vagy hagyja jóvá.": "PrepperPapa no es un producto de Google, y Google no lo patrocina ni lo respalda.",
 "Noah válaszait gépi modell írja, és tévedhet. Ha egy válasz sértő, veszélyes vagy téves, a válasz alatti „Válasz jelentése” gombbal jelezd nekünk.": "Las respuestas de Noah las escribe un modelo automático y pueden ser erróneas. Si una respuesta es ofensiva, peligrosa o errónea, avísanos con el botón «Denunciar esta respuesta» que hay debajo.",
 "Noah, az offline MI segéd: Gemma 4, Google, Apache 2.0 licenc.": "Noah, el asistente de IA sin conexión: Gemma 4, Google, licencia Apache 2.0.",
 "A modell a Google Gemma 4 (Apache 2.0 licenc), a Google hivatalos LiteRT-tárából (Hugging Face) töltődik le. Wi-Fi ajánlott.": "El modelo es Google Gemma 4 (licencia Apache 2.0) y se descarga del repositorio oficial LiteRT de Google (Hugging Face). Se recomienda wifi.",
 "Reggeli összefoglaló": "Resumen matutino",
 "Minden reggel értesítés: a készlet hiányai, a készenléti szint, egy ige és egy felkészülési tanács. Ha megnyitod Noah-t, kártyaként is látod.": "Cada mañana una notificación: lo que falta en tus reservas, tu nivel de preparación, un versículo y un consejo de preparación. Al abrir Noah también lo ves como tarjeta.",
 "Reggeli összefoglaló bekapcsolva": "Resumen matutino activado",
 "Mutasd most": "Mostrar ahora",
 "Értesítés engedélyezése": "Permitir notificaciones",
 "Noah · Reggeli összefoglaló": "Noah · Resumen matutino",
 "Készenlét: {hely}, {szint} szint, {pct}%.": "Preparación: {hely}, nivel {szint}, {pct} %.",
 "Hiányzik a következő szinthez: {lista}.": "Falta para el siguiente nivel: {lista}.",
 "Készenlét: még nem mérhető. Add meg a Háztartásban a helyszínt, kik érkeznek oda, és rendelj hozzá készletet.": "Preparación: aún no se puede medir. En Hogar añade el lugar, quién llega allí, y asígnale reservas.",
 "Hiányzik: {lista}.": "Falta: {lista}.",
 "Ige ({hely}): {szoveg}": "Versículo ({hely}): {szoveg}",
 "Tipp: {szoveg}": "Consejo: {szoveg}",
 "A reggeli összefoglaló a telefonra telepített Android appban működik.": "El resumen matutino funciona en la app de Android instalada en el teléfono.",
 "Kikapcsolva.": "Desactivado.",
 "Az értesítéshez engedély kell: koppints az „Értesítés engedélyezése” gombra.": "La notificación necesita permiso: toca «Permitir notificaciones».",
 "Beütemezve: a következő {n} reggel, {ido}-kor.": "Programado: las próximas {n} mañanas a las {ido}.",
 "Minden reggel {ido}-kor.": "Cada mañana a las {ido}.",
 "A tipp a tudástárban": "El consejo en la base de conocimientos",
 "A nap pályájához tudni kell, hol vagy: nyomd meg lent a „Mérés a helyzetemre” gombot.": "Para la trayectoria del sol la app necesita saber dónde estás: pulsa abajo «Medir en mi posición».",
 "A nap most a horizont alatt van: a pályáját nappal rajzolom a képre.": "El sol está ahora bajo el horizonte: su trayectoria se dibuja en la imagen durante el día.",
 "A nap pályájához iránytű- és dőlésadat kell.": "La trayectoria del sol necesita datos de brújula e inclinación.",
 "Napkelte": "Amanecer",
 "delel": "mediodía",
 "A pálya most nincs a képen: fordulj {fok}° felé.": "La trayectoria no está ahora en la imagen: gírate hacia {fok}°.",
 "A segéd beállításai": "Ajustes del asistente",
 "A segédhez először le kell tölteni a nyelvi modellt a telefonra (egyszer, Wi-Fi ajánlott).": "Para el asistente, primero descarga el modelo de lenguaje en el teléfono (una vez, se recomienda wifi).",
 "A választ a telefonon futó gépi modell írja. Életveszélyben a forráscikket olvasd el, és hívd a 112-t. Az igét a Károli-fordításból az app illeszti be, nem a modell.": "La respuesta la escribe un modelo automático que funciona en el teléfono. En peligro de muerte, lee el artículo de origen y llama al número de emergencias. Los versículos los inserta la app de su traducción de la Biblia, no el modelo.",
 "Amit még tudjon rólad. Kérdezzben is mondhatod: „jegyezd meg, hogy …”": "Lo que más debe saber de ti. También puedes decirlo al preguntar: «recuerda que …»",
 "Az első használatkor a telefon még egyszer ennyi helyet foglal a gyorsabb futáshoz, tehát a letöltés méretének kétszerese kell szabadon.": "En el primer uso el teléfono ocupa otra vez el mismo espacio para funcionar más rápido, así que debe quedar libre el doble del tamaño de la descarga.",
 "Csak ezen a telefonon marad, sehova nem küldjük el. Gépelés közben magától mentődik.": "Solo se queda en este teléfono y no se envía a ninguna parte. Se guarda solo mientras escribes.",
 "Hogyan tisztítsak vizet, ha nincs forraló?": "¿Cómo purifico el agua si no puedo hervirla?",
 "Hogyan tisztítsak vizet?": "¿Cómo purifico el agua?",
 "Hol van megírva, hogy ne aggódjunk a holnapért?": "¿Dónde está escrito que no nos preocupemos por el mañana?",
 "Hol van megírva, hogy ne aggódjunk?": "¿Dónde dice que no nos preocupemos?",
 "Károli-fordítás": "La traducción de la Biblia de la app",
 "Kérdezz a tudástárból, a Bibliából, vagy bármiről. Internet nélkül, a telefonon fut.": "Pregunta sobre la base de conocimientos, la Biblia o lo que quieras. Funciona en el teléfono, sin internet.",
 "Lakóhely, térség (pl. Gyömrő, Pest megye)": "Dónde vives, región (p. ej. localidad, provincia)",
 "Megszakítás": "Cancelar",
 "Mit tudsz?": "¿Qué sabes hacer?",
 "Modell letöltése": "Descargar el modelo",
 "Részletes válaszok": "Respuestas detalladas",
 "Rövid válaszok": "Respuestas breves",
 "Rólam (a válaszokhoz)": "Sobre mí (para las respuestas)",
 "A Háztartás családtagjait is vegye figyelembe": "Tener en cuenta también a los miembros del Hogar",
 "Írj egy kérdést…": "Escribe una pregunta…",
 "Új beszélgetés": "Nueva conversación",
 "Még nincs letöltött modell.": "Aún no hay ningún modelo descargado.",
 "Letöltve": "Descargado",
 "A letöltés megszakítva.": "La descarga se ha cancelado.",
 "Kész, a modell a telefonon van.": "Listo, el modelo está en el teléfono.",
 "Mentve, csak ezen a telefonon.": "Guardado, solo en este teléfono.",
 "Törölve.": "Borrado.",
 "{n} liter víz": "{n} litros de agua",
 "{n} kcal élelem": "{n} kcal de comida",
 "{n} kWh hasznos fűtési energia": "{n} kWh de energía útil de calefacción",
 "{fo} fő és {allat} állat, {nap} napra": "{fo} personas y {allat} animales, para {nap} días",
 "{fo} fő, {nap} napra": "{fo} personas, para {nap} días",
 "**{hely}**: nincs megadva, ki érkezik ide, ezért a készenléti szint nem számolható (Háztartás › Helyszínek › {hely}).": "**{hely}**: no está indicado quién llega aquí, así que no se puede calcular el nivel de preparación (Hogar › Lugares › {hely}).",
 "**{hely}** ({keret}): ehhez a helyszínhez még nincs készlet rendelve, ezért a szint nem mérhető. A Készletnél a tétel Tárolási helyénél válaszd ki: {hely}.": "**{hely}** ({keret}): aún no hay reservas asignadas a este lugar, así que el nivel no se puede medir. En Reservas, elígelo en el Lugar de almacenamiento del artículo: {hely}.",
 "**{hely}** ({keret}): van ide rendelt készlet, de se víz, se mérhető élelem, se fűtés nincs benne, ezért a szint nem számolható.": "**{hely}** ({keret}): hay reservas asignadas aquí, pero sin agua, sin comida medible y sin calefacción, así que el nivel no se puede calcular.",
 "**{hely}** ({keret}): **{szint}** készenléti szint, {pct}%.": "**{hely}** ({keret}): nivel de preparación **{szint}**, {pct} %.",
 "élelem": "comida",
 "fűtés": "calefacción",
 "jó": "bueno",
 "gyenge": "débil",
 "teljes": "completo",
 "Az élelmiszereknél nincs megadva az energia (kcal), ezért az élelem nem mérhető.": "En los alimentos no está indicada la energía (kcal), así que la comida no se puede medir.",
 "A teljes (100%) készlethez hiányzik: {lista}.": "Para las reservas completas (100 %) falta: {lista}.",
 "A következő, {szint} szinthez (minden legalább {min}%) hiányzik: {lista}.": "Para el siguiente nivel, {szint} (todo al menos {min} %), falta: {lista}.",
 "Minden mért összetevő 100%.": "Todos los componentes medidos están al 100 %.",
 "A Háztartásban még nincs helyszín, ezért a készenléti szint nem számolható. Vedd fel az otthonodat a Háztartás › Helyszínek alatt, és add meg, kik érkeznek oda és hány napra számolsz.": "En Hogar aún no hay ningún lugar, así que no se puede calcular el nivel de preparación. Añade tu casa en Hogar › Lugares e indica quién llega allí y para cuántos días calculas.",
 "A készlet üres: még egyetlen tételt sem vettél fel.": "Las reservas están vacías: aún no has añadido ningún artículo.",
 "A készleted üres: még egyetlen tételt sem vettél fel.": "Tus reservas están vacías: aún no has añadido ningún artículo.",
 "A Mi hiányzik? listából ({db} tétel, az első 6):": "De la lista ¿Qué falta? ({db} artículos, los 6 primeros):",
 "A Mi hiányzik? listából ({db} tétel):": "De la lista ¿Qué falta? ({db} artículos):",
 "tag": "miembro",
 "{n} éves": "{n} años",
 "{db} db": "{db} uds.",
 "lejár:": "caduca:",
 "A Háztartásban még nincs helyszín. A Háztartás › Helyszínek alatt veheted fel.": "En Hogar aún no hay ningún lugar. Puedes añadirlo en Hogar › Lugares.",
 "Helyszíneid ({db}):": "Tus lugares ({db}):",
 "{n} fő": "{n} personas",
 "{n} állat": "{n} animales",
 "{n} nap": "{n} días",
 "A Háztartásban nincs háziállat felvéve.": "En Hogar no hay ninguna mascota añadida.",
 "Háziállataid ({db}):": "Tus mascotas ({db}):",
 "állat": "animal",
 "A Háztartásban még nincs családtag felvéve. A Háztartás › Családtagok alatt veheted fel őket.": "En Hogar aún no hay ningún familiar añadido. Puedes añadirlos en Hogar › Familiares.",
 "A háztartásod ({db} fő):": "Tu hogar ({db} personas):",
 "A Háztartásban nincs családtag felvéve.": "En Hogar no hay ningún familiar añadido.",
 "Háziállat:": "Mascota:",
 "Nincs mentett pontod a térképen.": "No tienes ningún punto guardado en el mapa.",
 "Mentett pontjaid ({db}):": "Tus puntos guardados ({db}):",
 "A készletben ({db} tétel):": "En las reservas ({db} artículos):",
 "… és még {n}": "… y {n} más",
 "Ilyen tétel nincs a készletedben. (A készletben {db} tétel van.)": "No hay ese artículo en tus reservas. (Las reservas tienen {db} artículos.)",
 "A készletedben {db} tétel van, összesen {ossz} darab. Kategóriánként:": "Tus reservas tienen {db} artículos, {ossz} unidades en total. Por categoría:",
 "{t} tétel, {db} db": "{t} artículos, {db} uds.",
 "{nap} napos túra hátizsákkal": "una excursión de {nap} días con mochila",
 "{nap} napos út autóval": "un viaje de {nap} días en coche",
 "{nap} napos út": "un viaje de {nap} días",
 "A Háztartásban még nincs családtag, ezért nem tudom kijelölni, kik mennek. A Mit vigyek? ablakot megnyitom, a napokat beállítottam ({nap}); a résztvevőket a Háztartás › Családtagok alatt vedd fel, utána a lista kiszámolja, mi kell.": "En Hogar aún no hay ningún familiar, así que no puedo elegir quién va. Abro la ventana ¿Qué llevo? con los días ajustados ({nap}); añade a los participantes en Hogar › Familiares y la lista calculará lo necesario.",
 "Összeállítottam: {fej}, {fo} fő és {allat} állat ({nevek}). Megnyitom a Mit vigyek? ablakban, kitöltve; a listát ott látod és pipálhatod.": "Preparado: {fej}, {fo} personas y {allat} animales ({nevek}). Lo abro relleno en la ventana ¿Qué llevo?; allí ves la lista y puedes marcarla.",
 "Összeállítottam: {fej}, {fo} fő ({nevek}). Megnyitom a Mit vigyek? ablakban, kitöltve; a listát ott látod és pipálhatod.": "Preparado: {fej}, {fo} personas ({nevek}). Lo abro relleno en la ventana ¿Qué llevo?; allí ves la lista y puedes marcarla.",
 "A Háztartásban csak {ossz} fő van, őket jelöltem ki. A hiányzó {hiany} főt vedd fel a Háztartásnál, hogy a lista velük is számoljon.": "En Hogar solo hay {ossz} personas, las he elegido. Añade las {hiany} personas que faltan en Hogar para que la lista también cuente con ellas.",
 "A napok számát nem mondtad, {nap} nappal számoltam.": "No dijiste el número de días, he calculado con {nap} días.",
 "Hová tervezzem az útvonalat? Írd meg a cél nevét (település, turistapont, saját pont vagy helyszín), például: „Tervezd meg az útvonalat Dobogókőre.”": "¿Hacia dónde planifico la ruta? Escribe el nombre del destino (localidad, punto de senderismo, punto guardado o lugar).",
 "Nem találom ezt a helyet: „{cel}”. Sem a saját pontjaid, sem a helyszíneid, sem a letöltött turistapontok, sem a települések között nincs ilyen nevű. Útvonalat fejből nem írok le; ha máshogy hívják, írd meg pontosabban, vagy a térképen egy pont buborékán válaszd az „Útvonal ide”-t.": "No encuentro este lugar: «{cel}». No hay nada con ese nombre entre tus puntos guardados, tus lugares, los puntos de senderismo descargados ni las localidades. Nunca describo una ruta de memoria; si se llama de otra forma, escríbelo con más precisión, o en el mapa elige «Ruta hasta aquí» en la burbuja de un punto.",
 "Nem tudom, hol vagy (nincs GPS-helyzet), ezért a távolságot nem tudom megmondani.": "No sé dónde estás (sin posición GPS), así que no puedo decir la distancia.",
 "légvonalban {km} km, {egtaj} felé ({fok}°), {honnan} alapján.": "{km} km en línea recta, hacia el {egtaj} ({fok}°), según {honnan}.",
 "észak": "norte",
 "északkelet": "noreste",
 "kelet": "este",
 "délkelet": "sureste",
 "dél": "sur",
 "délnyugat": "suroeste",
 "nyugat": "oeste",
 "északnyugat": "noroeste",
 "a mostani helyzeted": "tu posición actual",
 "az otthonod helye": "la ubicación de tu casa",
 "a térkép utolsó nézete": "la última vista del mapa",
 "egy mentett pontod": "uno de tus puntos guardados",
 "saját pont": "punto propio",
 "község": "pueblo",
 "településrész": "barrio",
 "turistapont": "punto de senderismo",
 "Útvonal ide: {nev} ({al}). Megnyitom a térképen a tervezőt: a mostani helyzetedből, turistautakon számolja (legfeljebb kb. 80 km).": "Ruta hasta: {nev} ({al}). Abro el planificador en el mapa: calcula desde tu posición actual por senderos (hasta unos 80 km).",
 "Több hely is illik erre: „{cel}”. Melyikre gondolsz? Koppints rá, vagy írd meg pontosabban.": "Varios lugares coinciden con «{cel}». ¿Cuál quieres decir? Tócalo o escríbelo con más precisión.",
 "(… és még {n})": "(… y {n} más)",
 "lejárt {d} ({n} napja)": "caducó {d} (hace {n} días)",
 "ma jár le ({d})": "caduca hoy ({d})",
 "{d} ({n} nap múlva)": "{d} (dentro de {n} días)",
 "… és még {n} tétel": "… y {n} artículos más",
 "Lejárt ({db} tétel):": "Caducado ({db} artículos):",
 "Semmi nem járt le a készletedben.": "No ha caducado nada en tus reservas.",
 "{nap} napon belül lejár ({db} tétel):": "Caduca en {nap} días ({db} artículos):",
 "{nap} napon belül sem jár le semmi. A következő lejáratok:": "Tampoco caduca nada en {nap} días. Las próximas caducidades:",
 "{db} tételnél nincs megadva lejárati dátum, ezeket nem tudom figyelni.": "{db} artículos no tienen fecha de caducidad, esos no los puedo vigilar.",
 "Nem tudom, hol vagy: nincs GPS-helyzet, mentett pont vagy otthon-koordináta, ezért a napkeltét nem tudom kiszámolni.": "No sé dónde estás: no hay posición GPS, punto guardado ni coordenada de casa, así que no puedo calcular el amanecer.",
 "{nap}: ezen a helyen ma nincs napkelte vagy napnyugta.": "{nap}: en este lugar hoy no hay amanecer ni atardecer.",
 "{nap} ({honnan} alapján): napkelte {kelte}, napnyugta {nyugta}; világos még a polgári szürkület végéig, {szurk}. Hold: {hold}, {szaz}% megvilágítva. (Az app számolja, néhány perc pontossággal.)": "{nap} (según {honnan}): amanecer {kelte}, atardecer {nyugta}; hay luz hasta el final del crepúsculo civil, {szurk}. Luna: {hold}, {szaz} % iluminada. (Lo calcula la app, con unos minutos de precisión.)",
 "újhold": "luna nueva",
 "növekvő sarló": "creciente",
 "első negyed": "cuarto creciente",
 "növekvő hold": "gibosa creciente",
 "fogyó hold": "gibosa menguante",
 "utolsó negyed": "cuarto menguante",
 "fogyó sarló": "menguante",
 "Mit jegyezzek meg?": "¿Qué debo recordar?",
 "Megjegyeztem: {mit}": "Recordado: {mit}",
 "(A segéd beállításai › Rólam alatt látod és szerkesztheted.)": "(Puedes verlo y editarlo en Ajustes del asistente › Sobre mí.)",
 "Megnyitás: Mi hiányzik?": "Abrir: ¿Qué falta?",
 "Megnyitás: Mit vigyek?": "Abrir: ¿Qué llevo?",
 "Útvonal a térképen: {nev}": "Ruta en el mapa: {nev}",
 "Melyik turistautat nyissam meg?": "¿Qué sendero abro?",
 "{nev}: megnyitom a térképen.": "{nev}: lo abro en el mapa.",
 "Itt vagyok. Miben segíthetek?": "Aquí estoy. ¿En qué puedo ayudar?",
 "Erről offline nem tudok megbízhatót mondani: sem a tudástár, sem a Biblia nem ír róla, és kitalálni nem fogok.": "Sobre esto no puedo decir nada fiable sin conexión: ni la base de conocimientos ni la Biblia hablan de ello, y no voy a inventarlo.",
 "Alaposabban is kerestem, de a Bibliában ({biblia}) erre nem találtam helyet: „{q}”.": "También busqué más a fondo, pero no encontré ningún pasaje en la Biblia ({biblia}) para esto: «{q}».",
 "A Bibliában ({biblia}) erre nem találtam helyet: „{q}”.": "No encontré ningún pasaje en la Biblia ({biblia}) para esto: «{q}».",
 "Szó szerint nem így áll, de talán erre gondolsz:": "Literalmente no dice así, pero quizá te refieres a esto:",
 "Ez csak a telefonra telepített appban működik.": "Esto solo funciona en la app instalada en el teléfono.",
 "{nev} gondolkodik…": "{nev} está pensando…",
 "Nem érhető el:": "No disponible:",
 "Előbb töltsd le a modellt: a fogaskerék alatt, „Modell letöltése”.": "Primero descarga el modelo: bajo el engranaje, «Descargar el modelo».",
 "A modell betöltése (első alkalommal 10-60 másodperc)…": "Cargando el modelo (la primera vez, 10-60 segundos)…",
 "Nincs elég szabad hely a telefonon a modell első betöltéséhez (a letöltés méretének megfelelő hely kell).": "No hay suficiente espacio libre en el teléfono para la primera carga del modelo (se necesita tanto espacio como el tamaño de la descarga).",
 "Hiba:": "Error:",
 "A Bibliában itt van megírva (elöl az eredeti hely, utána, ahol idézik):": "En la Biblia está escrito aquí (primero el pasaje original, luego donde se cita):",
 "A gép {n} nem létező vagy hibás igehelyet írt, ezeket kivettük.": "La máquina escribió {n} referencias bíblicas inexistentes o erróneas; las hemos quitado.",
 "Alaposabban kerestem.": "He buscado más a fondo.",
 "A Bibliában ({biblia}), talán erre gondolsz:": "En la Biblia ({biblia}), quizá te refieres a esto:",
 "A Bibliában ({biblia})": "En la Biblia ({biblia})",
 "Forrás a tudástárból": "Fuente de la base de conocimientos",
 "Erről a prémium tudástár is ír: {lista}. (Zárolt cikk szövege nem kerül a modell elé.)": "La base de conocimientos premium también trata esto: {lista}. (El texto de un artículo bloqueado no se da al modelo.)",
 "Megnyitás a térképen: {nev}": "Abrir en el mapa: {nev}",
 "A válaszban említett hely": "El pasaje mencionado en la respuesta",
 "Szia, Noah vagyok, a PrepperPapa segédje.": "Hola, soy Noah, el asistente de PrepperPapa.",
 "Ezt tudom:": "Esto es lo que sé hacer:",
 "• **Készlet:** megmondom, milyen készenléti szinten áll egy helyszíned, és mi hiányzik a következő szinthez; a számokat az app számolja a készletedből, nem én találom ki. Például: „Milyen készenléti szinten áll az otthon?”, „Mi hiányzik?”": "• **Reservas:** te digo en qué nivel de preparación está uno de tus lugares y qué falta para el siguiente nivel; los números los calcula la app a partir de tus reservas, no me los invento. Por ejemplo: «¿Qué nivel de preparación tiene la casa?», «¿Qué falta?»",
 "• **Út tervezése:** összerakok egy több napos utat a háztartásod tagjaiból, és kitöltve megnyitom a Mit vigyek? ablakban. Például: „Rakj össze egy 3 napos túrát 4 főre.”": "• **Planificar un viaje:** preparo un viaje de varios días con los miembros de tu hogar y lo abro relleno en la ventana ¿Qué llevo?. Por ejemplo: «Prepara una excursión de 3 días para 4 personas.»",
 "• **Útvonal:** a térképen megtervezem az útvonalat a mostani helyzetedből; a célt a saját pontjaid, a helyszíneid, a turistapontok és a települések között keresem, és ha több is illik, megkérdezem, melyikre gondolsz. A turistautakat név szerint is megnyitom a térképen. Például: „Hogyan jutok el a hétvégi házhoz?”, „Mutasd meg a térképen az E4-et.”": "• **Ruta:** planifico la ruta en el mapa desde tu posición actual; busco el destino entre tus puntos guardados, tus lugares, los puntos de senderismo y las localidades, y si coinciden varios, te pregunto cuál. También abro senderos en el mapa por su nombre. Por ejemplo: «¿Cómo llego a la casa de campo?», «Muéstrame el E4 en el mapa.»",
 "• **Tudástár:** a PrepperPapa tudástárából válaszolok, és megmutatom, melyik cikkből (rákoppintva megnyílik). Például: „Hogyan tisztítsak vizet, ha nincs forraló?”": "• **Base de conocimientos:** respondo desde la base de conocimientos de PrepperPapa y te muestro de qué artículo (al tocarlo se abre). Por ejemplo: «¿Cómo purifico el agua si no puedo hervirla?»",
 "• **Megjegyzem,** amit magadról mondasz, és a beszélgetés utolsó öt kérdésére emlékszem. Például: „Jegyezd meg, hogy két kutyánk van.”": "• **Recuerdo** lo que me cuentas de ti y las cinco últimas preguntas de la conversación. Por ejemplo: «Recuerda que tenemos dos perros.»",
 "• **Az app többi adata:** ismerem a háztartásodat (családtagok, háziállatok), a helyszíneidet és a mentett pontjaidat. A titkos kódokat, az Irattárcát és a Gíra kulcsait nem látom. Például: „Kik vannak a háztartásomban?”": "• **Los demás datos de la app:** conozco tu hogar (familiares, mascotas), tus lugares y tus puntos guardados. No veo los códigos secretos, la Cartera de documentos ni las claves de Gíra. Por ejemplo: «¿Quién hay en mi hogar?»",
 "• Ha sem a tudástár, sem a Biblia nem ír a kérdésről, általános tudásból válaszolok, és ezt jelzem. Egészségről és veszélyről nem találgatok, útvonalat pedig fejből soha nem írok le: azt csak a térkép tervezője számolja.": "• Si ni la base de conocimientos ni la Biblia hablan de la pregunta, respondo con conocimiento general y lo indico. No adivino sobre salud ni peligro, y nunca describo una ruta de memoria: eso solo lo calcula el planificador del mapa.",
 "**Lelki segítség**": "**Ayuda espiritual**",
 "Lelkileg is melletted vagyok: ha félsz, elfáradtál vagy gyászolsz, igét teszek a válasz mellé, és a Bibliában is keresek: megmutatom, hol van megírva valami, a helyre koppintva megnyílik. Az igeverset soha nem én írom: mindig a Károli-fordítás pontos szövegéből jön. Például: „Hol van megírva, hogy ne aggódjunk a holnapért?”": "También te acompaño en lo espiritual: si tienes miedo, estás cansado o de luto, pongo un versículo junto a la respuesta, y también busco en la Biblia: te muestro dónde está escrito algo, y al tocar la cita se abre. Nunca escribo yo el versículo: siempre viene del texto exacto de la traducción de la Biblia de la app. Por ejemplo: «¿Dónde está escrito que no nos preocupemos por el mañana?»",
 "Internet nélkül működöm, itt futok a telefonodon. Amit kérdezel, amit válaszolok, és amit magadról megadsz, a telefonon marad: semmit nem küldök el sehova, akkor sem, ha van internet, kivéve, ha egy válaszomat te magad jelented a „Válasz jelentése” gombbal: akkor a kérdés és a válasz szövege a PrepperPapa csapatához kerül. Internet csak a nyelvi modell egyszeri letöltéséhez kell, és a térképhez, ha egy területét még nem töltötted le.": "Funciono sin internet, aquí en tu teléfono. Lo que preguntas, lo que respondo y lo que me cuentas de ti se queda en el teléfono: no envío nada a ninguna parte, ni siquiera con internet, salvo que tú mismo denuncies una de mis respuestas con el botón «Denunciar esta respuesta»: entonces la pregunta y la respuesta llegan al equipo de PrepperPapa. Internet solo hace falta para descargar una vez el modelo de lenguaje, y para el mapa si aún no has descargado una zona.",
 "Tévedhetek; életveszélyben a 112 az első.": "Puedo equivocarme; en peligro de muerte, llama primero al número de emergencias."
});

// ===== 2026-10-26 v43.382 (task 6b287cfb-noah-nyelvek, Boss 2026-10-25 16:46): Noah settings sheet and measurement line =====
Object.assign(window.PP_FORD_SZOTAR.es, {
 "A telefonon: {lista}.": "En el teléfono: {lista}.",
 "kísérleti": "experimental",
 "Letöltés: {modell} {szaz}% ({kesz} / {ossz})": "Descargando: {modell} {szaz}% ({kesz} / {ossz})",
 "A letöltés nem sikerült:": "La descarga ha fallado:",
 "Nincs elég szabad hely a telefonon ehhez a modellhez.": "No hay suficiente espacio libre en el teléfono para este modelo.",
 "Nem indult el:": "No se ha iniciado:",
 "Törlöd, amit a Kérdezz rólad tud?": "¿Borrar lo que Pregunta sabe de ti?",
 "Törlöd a letöltött modellt? Újra le kell tölteni, ha később használnád.": "¿Borrar el modelo descargado? Tendrás que descargarlo de nuevo si quieres usarlo más adelante.",
 "A Háztartásból: {lista}": "Del hogar: {lista}",
 "A Háztartásban még nincs családtag.": "Todavía no hay ningún miembro de la familia en el hogar.",
 "ő a kérdező": "es quien pregunta",
 "betöltés {n} mp": "carga {n} s",
 "első szó {n} mp": "primera palabra {n} s",
 "{n} token/mp": "{n} tokens/s",
 "memória csúcs {n} MB": "memoria máxima {n} MB"
});

// Bible settings tidy-up (owner 2026-10-26 17:50): short labels, one display block, one voice list
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Színes": "En color",
 "Egyszínű": "Monocromo",
 "zöld árnyalatok": "tonos verdes",
 "Megjelenítés az igék mellett": "Mostrar junto a los versículos",
 "Forrás: OpenBible.info (CC BY)": "Fuente: OpenBible.info (CC BY)",
 "A telefon hangja": "La voz del teléfono",
 "Gépi hang · nem foglal helyet": "Voz sintética · no ocupa espacio",
 "Gépi felvétel · magyar": "Grabación sintética · húngaro",
 "Professzionális · magyar": "Profesional · húngaro",
 "Professzionális · hamarosan": "Profesional · próximamente",
 "Készül": "En preparación",
 "Megszakítás": "Cancelar",
 "Letöltés": "Descargar",
 "Törlés": "Eliminar",
 "Letöltés internet nélkül": "Descargar para uso sin conexión",
 "magyar": "húngaro",
 "Könyvenként": "Por libro",
 "Mértékegységek": "Unidades de medida"
});

// Bible alarms on their own screen (owner 2026-10-26 17:54): several alarms, each with its own plan
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Ébresztő törlése": "Eliminar alarma",
 "Új ébresztő": "Nueva alarma",
 "Válassz tervet": "Elige un plan",
 "Törlöd ezt az ébresztőt?": "¿Eliminar esta alarma?",
 "Az ébresztő egy olvasási terv napi olvasmányát olvassa fel. Előbb indíts el egy tervet.": "La alarma lee en voz alta la lectura del día de un plan de lectura. Primero inicia un plan."
});
// v43.389: foreign official fire bans in the fire-ban layer (card 4f0b74b5)
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Területek tilalommal vagy korlátozással": "Zonas con prohibición o restricción",
 "Közelíts a területek megjelenítéséhez.": "Acerca el mapa para ver las zonas.",
 "Tűzhasználati korlátozás": "Restricción del uso del fuego",
 "Tűz miatti területlezárás": "Zona cerrada por peligro de incendio",
 "Kockázat miatti törvényi korlátozás": "Restricción legal por riesgo de incendio",
 "Terület": "Zona",
 "Érvényes": "Válido para",
 "Hatályos ettől": "En vigor desde",
 "Hatályos eddig": "En vigor hasta",
 "Ez veszélyszint, nem külön tilalmi rendelet: ezen a szinten a portugál jogszabály (DL 82/2021) korlátozza a tűzhasználatot.": "Es un nivel de riesgo, no una orden de prohibición aparte: en este nivel la ley portuguesa (DL 82/2021) restringe el uso del fuego.",
 "A hivatalos forrás nem tartalmazza a helyi (községi) tilalmakat. Indulás előtt ellenőrizd a forrásnál.": "La fuente oficial no incluye las prohibiciones locales (municipales). Compruébalo en la fuente antes de salir."
});

// ===== 2026-10-27 v43.392 (report + block): internet-room report sheet, block list, collapsed messages =====
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Illegális tartalom": "Contenido ilegal",
 "Zaklatás vagy fenyegetés": "Acoso o amenazas",
 "Kéretlen üzenet (spam)": "Mensaje no deseado (spam)",
 "Bejelentetted ezt az üzenetet. Elrejtve, a csapat ellenőrzi.": "Has denunciado este mensaje. Oculto; el equipo lo está revisando.",
 "Letiltott felhasználó üzenete.": "Mensaje de un usuario bloqueado.",
 "Bejelentett üzenet, ellenőrzés alatt.": "Mensaje denunciado, en revisión.",
 "Üzenet bejelentése": "Denunciar mensaje",
 "Felhasználó bejelentése": "Denunciar usuario",
 "A bejelentéssel az üzenet szövege (ahogy a te telefonod megfejtette), a küldője és a szoba neve a PrepperPapa csapatához kerül. Nálad az üzenet azonnal eltűnik, a többieknél ellenőrzésig összecsukva marad.": "Con la denuncia, el texto del mensaje (tal como lo descifró tu teléfono), su remitente y el nombre de la sala llegan al equipo de PrepperPapa. Para ti el mensaje desaparece al instante; para los demás queda contraído hasta que se revise.",
 "A bejelentéssel a felhasználó neve és a szoba neve a PrepperPapa csapatához kerül, hogy ellenőrizhessük.": "Con la denuncia, el nombre del usuario y el nombre de la sala llegan al equipo de PrepperPapa para que podamos revisarlos.",
 "Bejelentett": "Denunciado",
 "Mi a gond?": "¿Cuál es el problema?",
 "A felhasználót le is tiltom": "Bloquear también a este usuario",
 "Bejelentés": "Denunciar",
 "Túl sok bejelentést küldtél rövid idő alatt. Próbáld újra később.": "Has enviado demasiadas denuncias en poco tiempo. Inténtalo más tarde.",
 "Most nincs internetkapcsolat. A bejelentés nem ment el, próbáld újra.": "Ahora no hay conexión a internet. La denuncia no se envió; inténtalo de nuevo.",
 "A bejelentést most nem sikerült elküldeni. Próbáld újra később.": "Ahora no se pudo enviar la denuncia. Inténtalo más tarde.",
 "Köszönjük, a bejelentést megkaptuk. A csapat hamarosan ellenőrzi.": "Gracias, hemos recibido la denuncia. El equipo la revisará en breve.",
 "Letiltod ezt a felhasználót?": "¿Bloquear a este usuario?",
 "Az üzeneteit nálad elrejtjük, és privát üzenetet nem küldhet neked. A Beállításokban bármikor feloldhatod.": "Sus mensajes se ocultarán para ti y no podrá enviarte mensajes privados. Puedes desbloquearlo en Ajustes en cualquier momento.",
 "Most nem sikerült, próbáld újra később.": "Ahora no ha funcionado; inténtalo más tarde.",
 "Letiltva.": "Bloqueado.",
 "A letiltás feloldva.": "Desbloqueado.",
 "Nincs letiltott felhasználó.": "No hay usuarios bloqueados.",
 "Letiltás feloldása": "Desbloquear",
 "A küldő letiltása": "Bloquear al remitente",
 "Letiltás": "Bloquear",
 "A privát üzenet nem ment el: ez a felhasználó nem fogad tőled privát üzenetet.": "El mensaje privado no se envió: este usuario no acepta mensajes privados tuyos.",
 "Letiltott felhasználók": "Usuarios bloqueados",
 "Az internetes szobákban letiltott felhasználók. Az üzeneteiket nálad elrejtjük, és privát üzenetet nem küldhetnek neked.": "Usuarios que bloqueaste en las salas de internet. Sus mensajes se ocultan para ti y no pueden enviarte mensajes privados."
});
// v43.393: map search -- coordinate result
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Mentés pontként": "Guardar como punto",
 "ideiglenes jelölő a térképen": "marcador temporal en el mapa"
});

// 2026-10-27: map point categories (marker picker, point list)
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Szállás": "Alojamiento",
 "Egészség": "Salud",
 "Táborhely": "Lugar de acampada",
 "Alap": "Predeterminado",
 "jelölő": "marcador"
});

// ===== GIRA: GYORS UT ERINTESSEL (owner 2026-10-27, TG 30121-30128): NFC / Bluetooth next to the QR =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Az NFC ki van kapcsolva, ezért most csak a QR-kód működik.":
    "El NFC está desactivado, así que ahora solo funciona el código QR.",
  "NFC bekapcsolása":
    "Activar NFC",
  "A Bluetooth ki van kapcsolva, ezért most csak a QR-kód működik.":
    "El Bluetooth está desactivado, así que ahora solo funciona el código QR.",
  "Bluetooth bekapcsolása":
    "Activar Bluetooth",
  "Gyorsabb: a másik telefonon nyomják meg a Beolvasás gombot, és tartsd össze a két telefont.":
    "Más rápido: en el otro teléfono, pulsa Escanear y junta los dos teléfonos.",
  "Tartsd össze a két telefont.":
    "Junta los dos teléfonos.",
  "A két telefon túl hamar vált el. Tartsd össze őket újra.":
    "Los teléfonos se separaron demasiado pronto. Vuelve a juntarlos.",
  "A nyugta nem ért át: a másik telefon a QR-kódjáról olvassa be.":
    "El recibo no llegó: el otro teléfono puede escanearlo desde su código QR.",
  "Az átvitel nem sikerült. Próbáld újra, vagy olvasd be a QR-kódot.":
    "La transferencia falló. Inténtalo de nuevo o escanea el código QR.",
  "Átadva. Tartsd még egy pillanatig össze, jön a nyugta.":
    "Entregado. Mantenlos juntos un momento más, llega el recibo.",
  "Átadva a másik telefonnak.":
    "Entregado al otro teléfono.",
  "Nem érkezett semmi. Nyomd meg újra a Beolvasás gombot.":
    "No llegó nada. Pulsa Escanear otra vez.",
  "Tartsd a fizetés QR-kódját a keretbe, vagy tartsd össze a két telefont.":
    "Coloca el código QR del pago en el marco o junta los dos teléfonos.",
  "Ha elkészült a fizetés, tartsd újra össze a két telefont.":
    "Cuando el pago esté listo, vuelve a juntar los dos teléfonos."
});

// 2026-10-27: barometer -- no storm alarm in a vehicle (activity recognition), card 4f0b74b5
Object.assign(window.PP_FORD_SZOTAR.es, {
 "Autóban ne riasszon": "Sin alarma en un vehículo",
 "A telefon mozgásfelismerése jelzi, ha járműben ülsz, és addig nem jön viharriasztás: vezetés közben a légnyomás az emelkedőktől és a szellőzéstől is változik. Ehhez a „Fizikai tevékenység” engedély kell. Helyadatot nem használ, és semmit nem küld el.": "El reconocimiento de movimiento del teléfono detecta cuando vas en un vehículo, y hasta entonces no hay alarma de tormenta: al conducir, la presión también cambia con las cuestas y la ventilación. Para ello hace falta el permiso «Actividad física». No usa datos de ubicación ni envía nada.",
 "Bekapcsolva — most járműben vagy, a riasztás szünetel": "Activado — ahora vas en un vehículo, la alarma está en pausa",
 "Bekapcsolva — járműben szünetel a riasztás": "Activado — en un vehículo la alarma se pausa",
 "Bekapcsolva. Kikapcsolni a telefon beállításaiban lehet: Alkalmazások > PrepperPapa > Engedélyek > Fizikai tevékenység.": "Activado. Se puede desactivar en los ajustes del teléfono: Aplicaciones > PrepperPapa > Permisos > Actividad física.",
 "Kész: járműben nem jön viharriasztás.": "Listo: en un vehículo no habrá alarma de tormenta.",
 "A telefon már nem kérdez rá. A beállításokban kapcsold be: Engedélyek > Fizikai tevékenység.": "El teléfono ya no lo pregunta. Actívalo en los ajustes: Permisos > Actividad física.",
 "Nem adtál engedélyt. A riasztást ilyenkor a GPS-sebesség alapján szüneteltetem, ha van helyadat.": "No diste permiso. En ese caso la alarma se pausa según la velocidad del GPS, si hay ubicación.",
 "Járműben vagy (a telefon mozgásfelismerése szerint): a riasztás szünetel, mert ilyenkor a nyomás az emelkedőtől és a szellőzéstől is változik.": "Vas en un vehículo (según el reconocimiento de movimiento del teléfono): la alarma está en pausa, porque entonces la presión también cambia con las cuestas y la ventilación.",
 "Az elmúlt órákban járműben is mért a telefon: a riasztást csak a kiszállás utáni mérésekből számolom.": "En las últimas horas el teléfono también midió en un vehículo: la alarma solo se calcula con las mediciones posteriores a bajar del vehículo."
});

// ===== GIRA: FIZETES ERINTESSEL (owner 2026-10-29): guided touch payment, re-delivery of a pending payment =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Fogadás érintéssel":
    "Recibir por contacto",
  "Fizetés érintéssel":
    "Pagar por contacto",
  "Újra átadás":
    "Entregar de nuevo",
  "Az összeg nulla vagy hiányzik.":
    "El importe es cero o falta.",
  "Ez a fizetés már jóváírva volt nálad, másodszor nem írtam jóvá. A nyugtát újra kiadtam.":
    "Este pago ya estaba abonado; no se abonó por segunda vez. El recibo se ha emitido de nuevo.",
  "A másik telefon érintéses fogadásra vár. Írd be az összeget, nyomd meg a Fizetés érintéssel gombot, és tartsátok össze a két telefont.":
    "El otro teléfono espera recibir por contacto. Escribe el importe, pulsa Pagar por contacto y juntad los dos teléfonos.",
  "A fizetés nem ért át: a két telefon túl hamar vált el. Tartsátok újra össze (a másik telefonon maradjon nyitva a Fogadás).":
    "El pago no llegó: los teléfonos se separaron demasiado pronto. Juntadlos de nuevo (en el otro teléfono debe seguir abierto Recibir).",
  "Érintéssel nem vette át senki. A másik telefonon előbb nyomják meg a Beolvasás gombot, vagy olvassák be a QR-kódot.":
    "Nadie lo recibió por contacto. En el otro teléfono hay que pulsar primero Escanear, o escanear el código QR.",
  "Érintésre vár. A másik telefonon legyen bekapcsolva a Fogadás érintéssel, és tartsátok össze a két telefont.":
    "Esperando el contacto. En el otro teléfono debe estar activo Recibir por contacto; juntad los dos teléfonos.",
  "Fizetés aláírva és átadva":
    "Pago firmado y entregado",
  "Fizetés aláírása és átadása":
    "Se firma y entrega el pago",
  "Nyugta megérkezett. Kész.":
    "Recibo recibido. Listo.",
  "Nyugta visszaérkezése":
    "Llega el recibo",
  "Érintésre vár. A fizető telefonon a Fizetés érintéssel gombot nyomják meg, és tartsátok össze a két telefont.":
    "Esperando el contacto. En el teléfono que paga hay que pulsar Pagar por contacto, y juntad los dos teléfonos.",
  "Azonosítód átadva, jön a fizetés…":
    "Tu identificador entregado, llega el pago…",
  "Megérkezett és jóváírva":
    "Recibido y abonado",
  "Fizetés megérkezése":
    "Llegada del pago",
  "Nyugta visszaküldve. Kész.":
    "Recibo devuelto. Listo.",
  "Nyugta visszaküldése":
    "Devolución del recibo",
  "Még nem jött semmi. A másik telefonon előbb nyomják meg a Fogadás érintéssel gombot, aztán tartsátok össze a két telefont.":
    "Aún nada. En el otro teléfono hay que pulsar primero Recibir por contacto, y luego juntad los dos teléfonos.",
  "Még nem jött semmi. A fizető telefonon előbb írják be az összeget, és nyomják meg a Fizetés érintéssel gombot, aztán tartsátok össze a két telefont.":
    "Aún nada. En el teléfono que paga hay que escribir primero el importe y pulsar Pagar por contacto, y luego juntad los dos teléfonos.",
  "A fizetés átment, a nyugta még nem jött meg. Tartsátok újra össze a két telefont, vagy a Beolvasás gombbal olvasd be a nyugta QR-kódját a másik telefonról.":
    "El pago se ha realizado, el recibo aún no ha llegado. Juntad de nuevo los dos teléfonos, o escanea con «Escanear» el código QR del recibo en el otro teléfono.",
  "A fizetés átment, a nyugta még nem jött meg. Tartsátok újra össze a két telefont.":
    "El pago se ha realizado, el recibo aún no ha llegado. Juntad de nuevo los dos teléfonos.",
  "A nyugta még nem jött vissza. Tartsátok újra össze a két telefont, vagy a másik telefon olvassa be a QR-kódot.":
    "El recibo aún no ha vuelto. Juntad de nuevo los dos teléfonos, o que el otro teléfono escanee el código QR.",
  "A fizetés még nem jött meg. Tartsátok újra össze a két telefont.":
    "El pago aún no ha llegado. Juntad de nuevo los dos teléfonos.",
  "A nyugta még nem ment vissza. Tartsátok újra össze a két telefont, vagy a fizető olvassa be a nyugta QR-kódját.":
    "El recibo aún no ha vuelto. Juntad de nuevo los dos teléfonos, o que quien paga escanee el código QR del recibo.",
  "Lejárt az idő. Nyomd meg újra a Fogadás érintéssel gombot.":
    "Se acabó el tiempo. Pulsa de nuevo Recibir por contacto.",
  "Lejárt az idő. A fizetés nálad „átadásra vár”: a Mozgások között az Újra átadás gombbal még átadhatod.":
    "Se acabó el tiempo. El pago está «pendiente de entrega»: en Movimientos aún puedes entregarlo con Entregar de nuevo.",
  "Lejárt az idő, nem jött létre kapcsolat. A másik telefonon előbb nyomják meg a Fogadás érintéssel gombot, aztán nyomd meg újra a Fizetés érintéssel gombot.":
    "Se acabó el tiempo, no hubo conexión. En el otro teléfono hay que pulsar primero Recibir por contacto; luego pulsa de nuevo Pagar por contacto.",
  "Ha az érintés nem megy: a fizető olvassa be ezt a QR-kódot.":
    "Si el contacto no funciona: quien paga escanea este código QR.",
  "Az érintéses átadás most nem indult el. Olvassák be a QR-kódot.":
    "La entrega por contacto no se inició. Escanead el código QR.",
  "Az érintéses olvasás nem indult el. Próbáld újra, vagy használd a QR-kódot.":
    "La lectura por contacto no se inició. Inténtalo de nuevo o usa el código QR.",
  "Ez nem egy másik telefon azonosítója.":
    "Esto no es el identificador de otro teléfono.",
  "Ez a fizetés nem ennek a telefonnak szól, hanem neki:":
    "Este pago no es para este teléfono, sino para:",
  "A fizetés nem készült el.":
    "El pago no se ha creado.",
  "A fizetés nem volt érvényes.":
    "El pago no era válido.",
  "Ugyanaz az aláírt fizetés, nem új: a másik telefonon nyomják meg a Fogadás érintéssel gombot, és tartsátok össze a két telefont, vagy olvassa be ezt a QR-kódot.":
    "El mismo pago firmado, no uno nuevo: en el otro teléfono pulsad Recibir por contacto y juntad los teléfonos, o escanead este código QR.",
  "Ugyanaz az aláírt fizetés, nem új: a másik telefon olvassa be ezt a QR-kódot.":
    "El mismo pago firmado, no uno nuevo: que el otro teléfono escanee este código QR."
});

// ===== GIRA: switch-on offer when the wallet opens (owner 2026-10-29 09:18) =====
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Az érintéses fizetéshez kapcsold be az NFC-t.":
    "Activa el NFC para pagar por contacto.",
  "Az érintéses fizetéshez kapcsold be a Bluetooth-t.":
    "Activa el Bluetooth para pagar por contacto."
});
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Érintés nélkül: címzett megadása (QR-kód, szobatárs, azonosító)":
    "Sin contacto: indica el destinatario (código QR, compañero de sala, identificador)"
});
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Kész: a fizetés megérkezett, a nyugtát a másik telefon átvette.":
    "Listo: el pago ha llegado y el otro teléfono ha recibido el recibo."
});

// ===== 2026-10-29 pack list, compass bearing, SOS card stub, Bible download (Agnes: Hungarian in the EN UI) =====
// Keys with {slots} are templates (index.html ppForditKitolt): the slots are filled after the lookup.
Object.assign(window.PP_FORD_SZOTAR.es, {
  "A kijelölt személyek együtt kb. {keret} kg-ot bírnak, a lista {lista} kg. A víz a legnehezebb: fontold meg a vízszűrőt kanna helyett, vagy vidd rövidebb szakaszra.": "Las personas seleccionadas cargan juntas unos {keret} kg; la lista pesa {lista} kg. El agua es lo más pesado: plantéate un filtro de agua en lugar de un bidón, o un tramo más corto.",
  "A készletedben most {kcal} van megadva, ami ennek az útnak a {sz}.": "En tu inventario figuran ahora {kcal}, que es el {sz} de lo que necesita este viaje.",
  "A vészkártyád (vércsoport, allergia, gyógyszerek, kontakt) itt jelenik meg gyorsan.": "Tu tarjeta de emergencia (grupo sanguíneo, alergia, medicamentos, contacto) aparece aquí rápidamente.",
  "A víz csak az indulásra elég: a teljes igény {teljes} liter lenne, ebből {viz} liter megy veletek. A többit útközben kell megszerezni és tisztítani.": "El agua solo alcanza para la salida: la necesidad completa serían {teljes} litros, de los que {viz} litros van con vosotros. El resto hay que conseguirlo y potabilizarlo por el camino.",
  "A {haz} a saját adatlapodon pipáld be: {jelolo}.": "En {haz}, en tu propia ficha, marca: {jelolo}.",
  "A {hianyzik} jelölésűek a beszerzési listád. Most {n} ilyen van. A vizet és az élelmet a készlet KATEGÓRIÁJÁBÓL ismeri fel, a többit a nevéből.": "Lo marcado como {hianyzik} es tu lista de compras. Ahora: {n}. El agua y la comida se reconocen por su CATEGORÍA del inventario, lo demás por el nombre.",
  "Allergia-gyógyszer ({all})": "Medicamento para la alergia ({all})",
  "Az én adataim jelenjenek meg a vészkártyán": "Mostrar mis datos en la tarjeta de emergencia",
  "Belefér: a kijelöltek kb. {keret} kg-ot bírnak.": "Cabe: los seleccionados cargan unos {keret} kg.",
  "Csak azzal számol, amit elbírsz: 1,5 liter fejenként. Ez {tura} való, és a listán kiírom, mennyi hiányzik a teljes fejadaghoz.": "Solo cuenta con lo que puedes cargar: 1,5 litros por persona. Esto es {tura}, y la lista indica cuánto falta para la ración completa.",
  "Csomaglista": "Lista de equipaje",
  "EZ TÖBB, MINT AMIT ELBÍR": "MÁS DE LO QUE PUEDE CARGAR",
  "Ez nehezebb, mint amit el tudtok vinni.": "Esto pesa más de lo que podéis llevar.",
  "Ez {olt} kategóriájú ruházatot kíván. A készletedben nincs ilyen tétel — a készletnél ez egy kategória.": "Esto requiere ropa de la categoría {olt}. En tu inventario no hay ningún artículo así — en el inventario esto es una categoría.",
  "Ez {olt} kategóriájú ruházatot kíván. A készletedben {n} ilyen tétel van.": "Esto requiere ropa de la categoría {olt}. Artículos así en tu inventario: {n}.",
  "Felvett irány: {fok} fok ({betu}). Visszafelé: {vfok} fok ({vbetu}). A zöld háromszög a felvett irányt mutatja.": "Rumbo registrado: {fok}° ({betu}). Vuelta: {vfok}° ({vbetu}). El triángulo verde indica el rumbo registrado.",
  "Gyógyszer: {gy}": "Medicamento: {gy}",
  "Hiányzik még kb. {kcal} kcal.": "Faltan todavía unas {kcal} kcal.",
  "Háztartásban": "Hogar",
  "Nem sikerült: {ok}. Ehhez az egy lépéshez internet kell.": "No se pudo: {ok}. Este único paso necesita internet.",
  "Nincs iránytű-adat, ezért nincs mit felvenni.": "No hay datos de brújula, así que no hay nada que registrar.",
  "Nála: {ossz} kg (ebből {sajat} kg a sajátja)": "Lleva: {ossz} kg (de ellos {sajat} kg propios)",
  "Nála: {ossz} kg (ebből {sajat} kg a sajátja, {kozos} kg a közösből)": "Lleva: {ossz} kg (de ellos {sajat} kg propios y {kozos} kg del equipo común)",
  "Sapka": "Gorro",
  "Termosz meleg itallal": "Termo con bebida caliente",
  "Vércsoport-kártya: {ver}": "Tarjeta de grupo sanguíneo: {ver}",
  "Víz ({kg} kg testtömegre)": "Agua (para {kg} kg de peso corporal)",
  "Zokni": "Calcetines",
  "amit viszünk; a teljes igény {l} l": "lo que llevamos; la necesidad completa es {l} l",
  "belefér": "cabe",
  "fejenként egy ({fo})": "uno por persona ({fo})",
  "indulásra; a teljes igény {l} l lenne": "para la salida; la necesidad completa sería {l} l",
  "megvan": "lo tienes",
  "személyre szóló ({tipus})": "por persona ({tipus})",
  "teherbírása {kg} kg": "carga {kg} kg",
  "túrához": "para excursiones",
  "{kcal} kcal/nap × {nap}": "{kcal} kcal/día × {nap}",
  "{kesz} / {ossz} bepakolva": "{kesz} / {ossz} empacados",
  "{kg} kg, elosztva {fo} között: fejenként kb. {fej} kg": "{kg} kg, repartidos entre {fo}: unos {fej} kg cada uno",
  "{l} liter víz": "{l} litros de agua",
  "{napra} valójában {teljes} liter kellene, ennyit viszont nem lehet elvinni. Hiányzik {hiany} liter, amit útközben kell megszerezni: vízszűrő, víztisztító tabletta, ismert vízvételi pont. Ezt a listán is nézd meg.": "En realidad harían falta {teljes} litros {napra}, pero no se puede cargar tanto. Faltan {hiany} litros que hay que conseguir por el camino: filtro de agua, pastillas potabilizadoras, un punto de agua conocido. Revísalo también en la lista.",
  "{nev}: be van írva a betegség ({b}), de nincs megadva gyógyszer. A Háztartás adatlapján pótolható.": "{nev}: hay una enfermedad anotada ({b}), pero ningún medicamento. Se puede completar en su ficha del Hogar.",
  "{nev}: nincs megadva a testtömeg, 15 kg-mal számoltam. Az adatlapján javítható.": "{nev}: no hay peso corporal indicado, he calculado con 15 kg. Se puede corregir en su ficha.",
  "{n} tételnél nincs megadva az energia (kcal/100 g), azok nem számítanak bele. A dobozról leolvasva pontosabb lesz a kép.": "Artículos sin valor energético (kcal/100 g): {n}. No se cuentan. Leyéndolo del envase la imagen será más precisa.",
  "{n}%-a": "{n} %",
  "{viz} l/nap × {nap}": "{viz} l/día × {nap}",
  "Összesen {viz} és {kcal} élelem. Becsült tömeg: {kg}.": "En total {viz} y {kcal} de comida. Peso estimado: {kg}.",
  "ÉÉK": "NNE",
  "KÉK": "ENE",
  "KDK": "ESE",
  "DDK": "SSE",
  "DDNy": "SSO",
  "NyDNy": "OSO",
  "NyÉNy": "ONO",
  "ÉÉNy": "NNO"
});
// count patterns used by the pack list (`3 pár`, `5 napra`, `4 fő/állat` ...), same plural rules as above
(function () {
  const alak=(n,e,t)=>(n===1?e:t);
  window.PP_FORD_MINTAK.es.push(
    { minta: /^(\d+) fő\/állat$/, csere: (_, n) => n + ' ' + alak(+n, 'persona/animal', 'personas/animales') },
    { minta: /^(\d+) napra$/, csere: (_, n) => 'para ' + n + ' ' + alak(+n, 'día', 'días') },
    { minta: /^(\d+) csomag$/, csere: (_, n) => n + ' ' + alak(+n, 'paquete', 'paquetes') },
    { minta: /^(\d+) szett$/, csere: (_, n) => n + ' ' + alak(+n, 'juego', 'juegos') },
    { minta: /^(\d+) pár$/, csere: (_, n) => n + ' ' + alak(+n, 'par', 'pares') }
  );
})();
// map locate button title (2026-10-29, written by mapKovetJel)
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Követés bekapcsolva — koppints a középre igazításhoz": "Seguimiento activado — toca para centrar",
  "Hol vagyok (követés visszakapcsolása)": "Dónde estoy (volver a activar el seguimiento)",
  "Hol vagyok": "Dónde estoy"
});
// Bible prayer timer, weekly reading plans, map route GPX button (2026-10-29, untranslated-text sweep)
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Ismétlés": "Repetición",
  "mp": "s",
  "GPX mentése": "Guardar GPX",
  "Teljes Biblia egy év alatt, heti bontásban": "Toda la Biblia en un año, por semanas",
  "Kronologikus Biblia egy év alatt, heti bontásban": "Biblia cronológica en un año, por semanas",
  "A könyvek sorrendjében, hetente egy adag.": "En el orden de los libros, una porción por semana.",
  "Az események időrendjében, hetente egy adag.": "En el orden de los acontecimientos, una porción por semana."
});
// Bible: original words on tap (Biblia premium, card cf02b3ee, 2026-10-29)
Object.assign(window.PP_FORD_SZOTAR.es, {
  "Eredeti szó": "Palabra original",
  "Héber": "Hebreo",
  "Arámi": "Arameo",
  "Görög": "Griego",
  "Átírás": "Transliteración",
  "Strong-szám": "Número Strong",
  "Jelentés itt": "Significado aquí",
  "Szótári alak": "Forma de diccionario",
  "Eredet": "Origen",
  "Meghatározás": "Definición",
  "A KJV így fordítja": "La KJV lo traduce como",
  "Szótár: Strong (1894)": "Diccionario: Strong (1894)",
  "Nincs megbízható egyezés.": "No hay una correspondencia fiable.",
  "Ennél a szónál a gépi szó-összekötés nem elég biztos, ezért nem mutatunk eredeti szót.": "Para esta palabra la alineación automática de palabras no es lo bastante segura, por eso no se muestra la palabra original.",
  "Biblia prémium": "Biblia Premium",
  "A Biblia prémiumban egy szóra koppintva megjelenik az eredeti héber, arámi vagy görög szó, átírással, Strong-számmal és szótári jelentéssel. Biblia prémium kóddal feloldható.": "Con Biblia Premium, al tocar una palabra aparece la palabra original hebrea, aramea o griega, con transliteración, número Strong y significado de diccionario. Se desbloquea con un código Biblia Premium.",
  "Az eredeti szavak betöltése…": "Cargando las palabras originales…",
  "Az eredeti szavak most nem tölthetők be. Az első megnyitáshoz internetkapcsolat kell.": "Ahora no se pueden cargar las palabras originales. La primera apertura necesita conexión a internet.",
  "Forrás: STEP Bible (www.STEPBible.org), CC BY 4.0": "Fuente: STEP Bible (www.STEPBible.org), CC BY 4.0",
  "Szótár: Strong-féle héber és görög szótár (1894), közkincs. A szótár szövege angol nyelvű.": "Diccionario: diccionario hebreo y griego de Strong (1894), dominio público. El texto del diccionario está en inglés."
});
