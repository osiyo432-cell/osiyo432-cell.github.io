// ========================================================
// GAZ METER — YANGILANGAN SPA VA MULTI-PAGE APPLICATION LOGIKASI
// 14 ta mahsulot, to'liq ishchi bosim (Davleniya), oq fondagi 4-rakursli galereya
// ========================================================

// 1. DATA: 14 TA RASMIY SERTIFIKATLANGAN MAHSULOT KATALOGI
const PRODUCTS = [
  // --- AHOLI VA SMART MODELLAR ---
  {
    id: "zekr-g4",
    name: "Zekr G4 (Smart Gibrid)",
    category: "residential",
    price: 1644500,
    image: "assets/img/angles/zekr-g4-front.png",
    angles: [
      { key: "front", labelUz: "1. Oldidan (Fasad)", labelRu: "1. Спереди (Фасад)", src: "assets/img/angles/zekr-g4-front.png" },
      { key: "side", labelUz: "2. Yonidan (3D)", labelRu: "2. Сбоку (3D)", src: "assets/img/angles/zekr-g4-side.png" },
      { key: "back", labelUz: "3. Orqasidan (Kronshteyn)", labelRu: "3. Сзади (Кронштейн)", src: "assets/img/angles/zekr-g4-back.png" },
      { key: "top", labelUz: "4. Tepasidan (Truba)", labelRu: "4. Сверху (Труба)", src: "assets/img/angles/zekr-g4-top.png" }
    ],
    badgeUz: "Smart Gibrid",
    badgeRu: "Smart Гибрид",
    icon: "fa-gauge-simple-high",
    specsUz: {
      flow: "0.04 ~ 6.0 m³/soat",
      pressure: "0 ~ 50 kPa (Kam bosim)",
      connection: "G 1 (DN 25 / G 1¼)",
      dimensions: "360 x 120 x 130 mm",
      ip: "IP 54/65",
      battery: "Smart-karta + Masofaviy GSM"
    },
    specsRu: {
      flow: "0.04 ~ 6.0 м³/час",
      pressure: "0 ~ 50 кПа (Низкое давление)",
      connection: "G 1 (DN 25 / G 1¼)",
      dimensions: "360 x 120 x 130 мм",
      ip: "IP 54/65",
      battery: "Смарт-карта + Удаленный GSM"
    },
    descUz: "Gibrid aqlli hisoblagich: ham kontaktli smart-karta bilan, ham masofaviy GSM orqali ishlaydi. Ichki otsechnoy klapan, modem va harorat korreksiyasi mavjud.",
    descRu: "Гибридный ультразвуковой счетчик газа: передача данных через смарт-карту и по GSM. Встроенный отсечной клапан и температурная коррекция.",
    passportUz: {
      pressureDetail: "0 ~ 50 kPa (Ishchi maksimal bosim 50 kPa gacha)",
      dimensionsDetail: "360 * 120 * 130 mm",
      connectionDetail: "G 1 dyuymli standart rezba",
      ipDetail: "IP 54 / IP 65 namlik va changdan himoyalangan",
      poverka: "Aholi xonadonlari uchun: 4 - 8 yil",
      warranty: "2 yil rasmiy zavod kafolati",
      sim: "M2M SIM-karta ulangan (Hududgaz billing)",
      complect: "Hisoblagich, texnik pasport, gaykalar va prokladkalar",
      application: "Aholi xonadonlari, ko'p qavatli uylar, hovlilar"
    },
    passportRu: {
      pressureDetail: "0 ~ 50 кПа (Рабочее давление до 50 кПа)",
      dimensionsDetail: "360 * 120 * 130 мм",
      connectionDetail: "G 1 дюйм",
      ipDetail: "IP 54 / IP 65",
      poverka: "Для населения: 4 - 8 лет",
      warranty: "2 года официальной гарантии",
      sim: "M2M SIM-карта установлена",
      complect: "Счетчик, техпаспорт, штуцеры и уплотнители",
      application: "Квартиры, частные дома, коттеджи"
    }
  },
  {
    id: "smart-g4",
    name: "Smart G4 (ASKUG)",
    category: "residential",
    price: 1644500,
    image: "assets/img/angles/smart-g4-front.png",
    angles: [
      { key: "front", labelUz: "1. Oldidan (Fasad)", labelRu: "1. Спереди (Фасад)", src: "assets/img/angles/smart-g4-front.png" },
      { key: "side", labelUz: "2. Yonidan (3D)", labelRu: "2. Сбоку (3D)", src: "assets/img/angles/smart-g4-side.png" },
      { key: "back", labelUz: "3. Orqasidan (Kronshteyn)", labelRu: "3. Сзади (Кронштейн)", src: "assets/img/angles/smart-g4-back.png" },
      { key: "top", labelUz: "4. Tepasidan (Truba)", labelRu: "4. Сверху (Труба)", src: "assets/img/angles/smart-g4-top.png" }
    ],
    badgeUz: "ASKUG Mos",
    badgeRu: "АСКУГ Совместим",
    icon: "fa-wifi",
    specsUz: {
      flow: "0.04 ~ 6.0 m³/soat",
      pressure: "0 ~ 50 kPa",
      connection: "G 1 (DN 25 / G 1¼)",
      dimensions: "220 x 120 x 130 mm",
      ip: "IP 65",
      battery: "Tayyor zavod M2M SIM-karta"
    },
    specsRu: {
      flow: "0.04 ~ 6.0 м³/час",
      pressure: "0 ~ 50 кПа",
      connection: "G 1 (DN 25 / G 1¼)",
      dimensions: "220 x 120 x 130 мм",
      ip: "IP 65",
      battery: "Встроенная заводская M2M SIM"
    },
    descUz: "Hududgazta'minot billing tizimiga to'liq integratsiya qilingan aqlli hisoblagich. Ichki otsechnoy klapan, modem va harorat korreksiyasi bilan jihozlangan.",
    descRu: "Умный ультразвуковой счетчик со встроенным отсечным клапаном, модемом и коррекцией по температуре.",
    passportUz: {
      pressureDetail: "0 ~ 50 kPa (Ishchi bosim)",
      dimensionsDetail: "220 * 120 * 130 mm",
      connectionDetail: "G 1 dyuymli standart ulanish",
      ipDetail: "IP 65 yuqori toifali germetiklik",
      poverka: "Aholi uchun: 4 - 8 yil",
      warranty: "2 yil rasmiy kafolat",
      sim: "M2M SIM-karta mavjud (avtomatik ko'rsatkich jo'natish)",
      complect: "Hisoblagich, pasport, qiyoslash dalolatnomasi, ulovchi gaykalar",
      application: "Aholi xonadonlari, kottejlar"
    },
    passportRu: {
      pressureDetail: "0 ~ 50 кПа",
      dimensionsDetail: "220 * 120 * 130 мм",
      connectionDetail: "G 1",
      ipDetail: "IP 65",
      poverka: "Для населения: 4 - 8 лет",
      warranty: "2 года гарантии",
      sim: "Заводская M2M SIM-карта",
      complect: "Счетчик, техпаспорт, акт поверки, штуцеры",
      application: "Квартиры, частные дома"
    }
  },
  {
    id: "smart-g6",
    name: "Smart GM G6",
    category: "commercial",
    price: 3072160,
    image: "assets/img/angles/smart-g6-front.png",
    angles: [
      { key: "front", labelUz: "1. Oldidan (Fasad)", labelRu: "1. Спереди (Фасад)", src: "assets/img/angles/smart-g6-front.png" },
      { key: "side", labelUz: "2. Yonidan (3D)", labelRu: "2. Сбоку (3D)", src: "assets/img/angles/smart-g6-side.png" },
      { key: "back", labelUz: "3. Orqasidan (Kronshteyn)", labelRu: "3. Сзади (Кронштейн)", src: "assets/img/angles/smart-g6-back.png" },
      { key: "top", labelUz: "4. Tepasidan (Truba)", labelRu: "4. Сверху (Труба)", src: "assets/img/angles/smart-g6-top.png" }
    ],
    badgeUz: "Katta Hovlilar",
    badgeRu: "Большие Дома",
    icon: "fa-house-chimney",
    specsUz: {
      flow: "0.06 ~ 10.0 m³/soat",
      pressure: "0 ~ 50 kPa",
      connection: "G 2 1/2",
      dimensions: "246 x 204 x 110 mm",
      ip: "IP 65",
      battery: "T, P va gaz tarkibi korreksiyasi"
    },
    specsRu: {
      flow: "0.06 ~ 10.0 м³/час",
      pressure: "0 ~ 50 кПа",
      connection: "G 2 1/2",
      dimensions: "246 x 204 x 110 мм",
      ip: "IP 65",
      battery: "Коррекция T, P и состава газа"
    },
    descUz: "Katta hovlilar, 2-3 qavatli kottejlar va quvvatli isitish qozonlari uchun. Ichki otsechnoy klapan, modem va uch tomonlama korreksiya (T, P, gaz tarkibi).",
    descRu: "Для больших частных домов и коттеджей. Встроенный клапан, модем и коррекция по температуре, давлению и составу газа.",
    passportUz: {
      pressureDetail: "0 ~ 50 kPa",
      dimensionsDetail: "246 * 204 * 110 mm",
      connectionDetail: "G 2 1/2 dyuym",
      ipDetail: "IP 65",
      poverka: "Aholi: 4-8 yil / Tashkilot: 2 yil",
      warranty: "2 yil rasmiy kafolat",
      sim: "Zavod SIM-kartasi tayyor",
      complect: "Hisoblagich, pasport, ulovchilar",
      application: "Katta xususiy hovlilar, kottejlar, mini-sexlar"
    },
    passportRu: {
      pressureDetail: "0 ~ 50 кПа",
      dimensionsDetail: "246 * 204 * 110 мм",
      connectionDetail: "G 2 1/2",
      ipDetail: "IP 65",
      poverka: "Население: 4-8 лет / Организации: 2 года",
      warranty: "2 года гарантии",
      sim: "Заводская SIM-карта установлена",
      complect: "Счетчик, паспорт, штуцеры",
      application: "Крупные особняки, коттеджи, мастерские"
    }
  },
  {
    id: "smart-g10",
    name: "Smart GM G10",
    category: "commercial",
    price: 4607700,
    image: "assets/img/angles/smart-g10-front.png",
    angles: [
      { key: "front", labelUz: "1. Oldidan (Fasad)", labelRu: "1. Спереди (Фасад)", src: "assets/img/angles/smart-g10-front.png" },
      { key: "side", labelUz: "2. Yonidan (3D)", labelRu: "2. Сбоку (3D)", src: "assets/img/angles/smart-g10-side.png" },
      { key: "back", labelUz: "3. Orqasidan (Kronshteyn)", labelRu: "3. Сзади (Кронштейн)", src: "assets/img/angles/smart-g10-back.png" },
      { key: "top", labelUz: "4. Tepasidan (Truba)", labelRu: "4. Сверху (Труба)", src: "assets/img/angles/smart-g10-top.png" }
    ],
    badgeUz: "Kichik Biznes",
    badgeRu: "Малый Бизнес",
    icon: "fa-shop",
    specsUz: {
      flow: "0.1 ~ 16.0 m³/soat",
      pressure: "0 ~ 50 kPa",
      connection: "G 2 1/2",
      dimensions: "246 x 204 x 110 mm",
      ip: "IP 65",
      battery: "Raqamli LCD ekran + Modem"
    },
    specsRu: {
      flow: "0.1 ~ 16.0 м³/час",
      pressure: "0 ~ 50 кПа",
      connection: "G 2 1/2",
      dimensions: "246 x 204 x 110 мм",
      ip: "IP 65",
      battery: "Цифровой LCD + Модем"
    },
    descUz: "Novvoyxonalar, umumiy ovqatlanish maskanlari, kafe va oshxonalar uchun. Ichki otsechnoy klapan, modem va T, P korreksiyasi mavjud.",
    descRu: "Для пекарен, кафе, ресторанов и пищевых цехов. Со встроенным отсечным клапаном, модемом и коррекцией T, P.",
    passportUz: {
      pressureDetail: "0 ~ 50 kPa",
      dimensionsDetail: "246 * 204 * 110 mm",
      connectionDetail: "G 2 1/2 dyuym",
      ipDetail: "IP 65",
      poverka: "Yuridik shaxslar: 2 yil",
      warranty: "2 yil rasmiy kafolat",
      sim: "Smart GSM aloqa moduli",
      complect: "Hisoblagich, pasport, ulovchi gaykalar",
      application: "Novvoyxona, kafe, oshxona, sexlar"
    },
    passportRu: {
      pressureDetail: "0 ~ 50 кПа",
      dimensionsDetail: "246 * 204 * 110 мм",
      connectionDetail: "G 2 1/2",
      ipDetail: "IP 65",
      poverka: "Юр. лица: 2 года",
      warranty: "2 года гарантии",
      sim: "GSM модуль связи",
      complect: "Счетчик, техпаспорт, штуцеры",
      application: "Пекарни, кафе, цеха"
    }
  },
  {
    id: "smart-g16",
    name: "Smart GM G16",
    category: "commercial",
    price: 6036800,
    image: "assets/img/angles/smart-g16-front.png",
    angles: [
      { key: "front", labelUz: "1. Oldidan (Fasad)", labelRu: "1. Спереди (Фасад)", src: "assets/img/angles/smart-g16-front.png" },
      { key: "side", labelUz: "2. Yonidan (3D)", labelRu: "2. Сбоку (3D)", src: "assets/img/angles/smart-g16-side.png" },
      { key: "back", labelUz: "3. Orqasidan (Kronshteyn)", labelRu: "3. Сзади (Кронштейн)", src: "assets/img/angles/smart-g16-back.png" },
      { key: "top", labelUz: "4. Tepasidan (Truba)", labelRu: "4. Сверху (Труба)", src: "assets/img/angles/smart-g16-top.png" }
    ],
    badgeUz: "O'rta Tijorat",
    badgeRu: "Средний Бизнес",
    icon: "fa-store",
    specsUz: {
      flow: "0.16 ~ 25.0 m³/soat",
      pressure: "0 ~ 50 kPa",
      connection: "G 2 1/2",
      dimensions: "246 x 204 x 110 mm",
      ip: "IP 65",
      battery: "Avtomat telemetriya ASKUG"
    },
    specsRu: {
      flow: "0.16 ~ 25.0 м³/час",
      pressure: "0 ~ 50 кПа",
      connection: "G 2 1/2",
      dimensions: "246 x 204 x 110 мм",
      ip: "IP 65",
      battery: "Автоматическая телеметрия"
    },
    descUz: "O'rta ishlab chiqarish sexlari, yirik restoranlar va korxonalar uchun. Ichki otsechnoy klapan, modem va T, P korreksiyasi bilan jihozlangan.",
    descRu: "Для средних производственных цехов, крупных ресторанов и мини-заводов.",
    passportUz: {
      pressureDetail: "0 ~ 50 kPa",
      dimensionsDetail: "246 * 204 * 110 mm",
      connectionDetail: "G 2 1/2 dyuym",
      ipDetail: "IP 65",
      poverka: "Yuridik shaxslar: 2 yil",
      warranty: "2 yil rasmiy kafolat",
      sim: "M2M Telemetriya tizimi",
      complect: "Hisoblagich, ulovchilar, davlat qiyoslov guvohnomasi",
      application: "O'rta biznes, restoranlar, ishlab chiqarish"
    },
    passportRu: {
      pressureDetail: "0 ~ 50 кПа",
      dimensionsDetail: "246 * 204 * 110 мм",
      connectionDetail: "G 2 1/2",
      ipDetail: "IP 65",
      poverka: "Юр. лица: 2 года",
      warranty: "2 года гарантии",
      sim: "M2M Телеметрия",
      complect: "Счетчик, штуцеры, свидетельство поверки",
      application: "Средний бизнес, рестораны, производство"
    }
  },
  {
    id: "smart-g25",
    name: "Smart GM G25",
    category: "commercial",
    price: 7367360,
    image: "assets/img/angles/smart-g25-front.png",
    angles: [
      { key: "front", labelUz: "1. Oldidan (Fasad)", labelRu: "1. Спереди (Фасад)", src: "assets/img/angles/smart-g25-front.png" },
      { key: "side", labelUz: "2. Yonidan (3D)", labelRu: "2. Сбоку (3D)", src: "assets/img/angles/smart-g25-side.png" },
      { key: "back", labelUz: "3. Orqasidan (Kronshteyn)", labelRu: "3. Сзади (Кронштейн)", src: "assets/img/angles/smart-g25-back.png" },
      { key: "top", labelUz: "4. Tepasidan (Truba)", labelRu: "4. Сверху (Труба)", src: "assets/img/angles/smart-g25-top.png" }
    ],
    badgeUz: "Tijorat & Teplitsa",
    badgeRu: "Коммерческий",
    icon: "fa-building",
    specsUz: {
      flow: "0.25 ~ 40.0 m³/soat",
      pressure: "0 ~ 50 kPa",
      connection: "G 2",
      dimensions: "330 x 244 x 167 mm",
      ip: "IP 65",
      battery: "Ichki klapan + T, P korreksiya"
    },
    specsRu: {
      flow: "0.25 ~ 40.0 м³/час",
      pressure: "0 ~ 50 кПа",
      connection: "G 2",
      dimensions: "330 x 244 x 167 мм",
      ip: "IP 65",
      battery: "Встроенный клапан + коррекция T, P"
    },
    descUz: "Katta qozonxonalar, issiqxonalar (teplitsa), mehmonxonalar va tijorat korxonalari uchun. Ichki otsechnoy klapan, modem va T, P korreksiyasi mavjud.",
    descRu: "Для крупных котельных, тепличных хозяйств, гостиниц и производственных объектов.",
    passportUz: {
      pressureDetail: "0 ~ 50 kPa",
      dimensionsDetail: "330 * 244 * 167 mm",
      connectionDetail: "G 2 dyuym",
      ipDetail: "IP 65",
      poverka: "Yuridik shaxslar: 2 yil",
      warranty: "2 yil rasmiy kafolat",
      sim: "M2M Smart Telemetriya",
      complect: "Hisoblagich, ulovchilar, pasport",
      application: "Teplitsalar, katta qozonxonalar, mehmonxonalar"
    },
    passportRu: {
      pressureDetail: "0 ~ 50 кПа",
      dimensionsDetail: "330 * 244 * 167 мм",
      connectionDetail: "G 2",
      ipDetail: "IP 65",
      poverka: "Юр. лица: 2 года",
      warranty: "2 года гарантии",
      sim: "M2M Телеметрия",
      complect: "Счетчик, штуцеры, паспорт",
      application: "Теплицы, котельные, гостиницы"
    }
  },

  // --- SANOAT MODELLARI ---
  {
    id: "smart-g40",
    name: "Smart GM G40 (Standart)",
    category: "industrial",
    price: 22000000,
    image: "assets/img/angles/smart-g40-front.png",
    angles: [
      { key: "front", labelUz: "1. Oldidan (Fasad)", labelRu: "1. Спереди (Фасад)", src: "assets/img/angles/smart-g40-front.png" },
      { key: "side", labelUz: "2. Yonidan (3D)", labelRu: "2. Сбоку (3D)", src: "assets/img/angles/smart-g40-side.png" },
      { key: "back", labelUz: "3. Orqasidan (Kronshteyn)", labelRu: "3. Сзади (Кронштейн)", src: "assets/img/angles/smart-g40-back.png" },
      { key: "top", labelUz: "4. Tepasidan (Truba)", labelRu: "4. Сверху (Труба)", src: "assets/img/angles/smart-g40-top.png" }
    ],
    badgeUz: "Sanoat Standart",
    badgeRu: "Пром Стандарт",
    icon: "fa-industry",
    specsUz: {
      flow: "0.4 ~ 65.0 m³/soat",
      pressure: "0 ~ 250 kPa (0.25 MPa)",
      connection: "G 2 1/2",
      dimensions: "330 x 244 x 167 mm",
      ip: "IP 65",
      battery: "Ichki klapan + Modem + T, P"
    },
    specsRu: {
      flow: "0.4 ~ 65.0 м³/час",
      pressure: "0 ~ 250 кПа (0.25 МПа)",
      connection: "G 2 1/2",
      dimensions: "330 x 244 x 167 мм",
      ip: "IP 65",
      battery: "Встроенный клапан + Модем + T, P"
    },
    descUz: "Sanoat pechlari, ishlab chiqarish sexlari va qozonxonalar uchun standart ichki klapanli sanoat hisoblagichi. Davleniyasi 250 kPa gacha.",
    descRu: "Промышленный ультразвуковой счетчик со встроенным клапаном, модемом и коррекцией T, P, давление до 250 кПа.",
    passportUz: {
      pressureDetail: "0 ~ 250 kPa (Ishchi bosim 0.25 MPa)",
      dimensionsDetail: "330 * 244 * 167 mm",
      connectionDetail: "G 2 1/2",
      ipDetail: "IP 65 sanoat toifasi",
      poverka: "Yuridik shaxslar: 2 yil",
      warranty: "2 yil rasmiy kafolat",
      sim: "Avtomat telemetriya ASKUG",
      complect: "Hisoblagich, ulovchilar to'plami, pasport",
      application: "Sanoat qozonxonalari, zavod sexlari"
    },
    passportRu: {
      pressureDetail: "0 ~ 250 кПа (0.25 МПа)",
      dimensionsDetail: "330 * 244 * 167 мм",
      connectionDetail: "G 2 1/2",
      ipDetail: "IP 65",
      poverka: "Юр. лица: 2 года",
      warranty: "2 года гарантии",
      sim: "Телеметрия АСКУГ",
      complect: "Счетчик, комплект штуцеров, паспорт",
      application: "Котельные, заводы"
    }
  },
  {
    id: "smart-g40-hp",
    name: "Smart GM G40 (Yuqori Bosimli Pro)",
    category: "industrial",
    price: 48200000,
    image: "assets/img/angles/smart-g40-hp-front.png",
    angles: [
      { key: "front", labelUz: "1. Oldidan (Fasad)", labelRu: "1. Спереди (Фасад)", src: "assets/img/angles/smart-g40-hp-front.png" },
      { key: "side", labelUz: "2. Yonidan (3D)", labelRu: "2. Сбоку (3D)", src: "assets/img/angles/smart-g40-hp-side.png" },
      { key: "back", labelUz: "3. Orqasidan (Kronshteyn)", labelRu: "3. Сзади (Кронштейн)", src: "assets/img/angles/smart-g40-hp-back.png" },
      { key: "top", labelUz: "4. Tepasidan (Truba)", labelRu: "4. Сверху (Truba)", src: "assets/img/angles/smart-g40-hp-top.png" }
    ],
    badgeUz: "Yuqori Bosimli Pro",
    badgeRu: "Высокое Давление Pro",
    icon: "fa-fire-burner",
    specsUz: {
      flow: "0.4 ~ 65.0 m³/soat",
      pressure: "0 ~ 250 kPa (Tashqi Klapanli)",
      connection: "G 2 1/2",
      dimensions: "500 x 400 x 167 mm",
      ip: "IP 65",
      battery: "Tashqi otsechnoy avariya klapani"
    },
    specsRu: {
      flow: "0.4 ~ 65.0 м³/час",
      pressure: "0 ~ 250 кПа (Внешний Клапан)",
      connection: "G 2 1/2",
      dimensions: "500 x 400 x 167 мм",
      ip: "IP 65",
      battery: "Внешний отсечной клапан в сборе"
    },
    descUz: "Tashqi ko'rinishi bir xil, lekin davleniyasi balandroq va yaxshiroq ishlaydigan yuqori toifadagi model. Tashqi otsechnoy avariya klapani komplektda beriladi.",
    descRu: "Модель повышенной надежности с внешним отсечным клапаном. Рассчитана на более высокое давление и стабильную работу в тяжелых условиях.",
    passportUz: {
      pressureDetail: "0 ~ 250 kPa (Kuchaytirilgan tashqi klapanli tizim)",
      dimensionsDetail: "500 * 400 * 167 mm (Klapan bloki bilan birga)",
      connectionDetail: "G 2 1/2",
      ipDetail: "IP 65",
      poverka: "Yuridik shaxslar: 2 yil",
      warranty: "2 yil rasmiy kafolat",
      sim: "SCADA & Telemetriya",
      complect: "Hisoblagich, tashqi otsechnoy klapan, montaj simlari, pasport",
      application: "Yuqori bosimli gaz quvurlari, og'ir sanoat, qozonxonalar"
    },
    passportRu: {
      pressureDetail: "0 ~ 250 кПа (Система с внешним клапаном)",
      dimensionsDetail: "500 * 400 * 167 мм",
      connectionDetail: "G 2 1/2",
      ipDetail: "IP 65",
      poverka: "Юр. лица: 2 года",
      warranty: "2 года гарантии",
      sim: "SCADA & Телеметрия",
      complect: "Счетчик, внешний отсечной клапан, паспорт",
      application: "Газопроводы высокого давления, тяжелая промышленность"
    }
  },
  {
    id: "smart-g65",
    name: "Smart GM G65 (Standart)",
    category: "industrial",
    price: 25000000,
    image: "assets/img/angles/smart-g65-front.png",
    angles: [
      { key: "front", labelUz: "1. Oldidan (Fasad)", labelRu: "1. Спереди (Фасад)", src: "assets/img/angles/smart-g65-front.png" },
      { key: "side", labelUz: "2. Yonidan (3D)", labelRu: "2. Сбоku (3D)", src: "assets/img/angles/smart-g65-side.png" },
      { key: "back", labelUz: "3. Orqasidan (Kronshteyn)", labelRu: "3. Сзади (Кронштейн)", src: "assets/img/angles/smart-g65-back.png" },
      { key: "top", labelUz: "4. Tepasidan (Truba)", labelRu: "4. Сверху (Труба)", src: "assets/img/angles/smart-g65-top.png" }
    ],
    badgeUz: "Sanoat G65",
    badgeRu: "Пром G65",
    icon: "fa-industry",
    specsUz: {
      flow: "0.6 ~ 100.0 m³/soat",
      pressure: "0 ~ 250 kPa (0.25 MPa)",
      connection: "G 2 1/2",
      dimensions: "330 x 244 x 167 mm",
      ip: "IP 65",
      battery: "Ichki klapan + Modem + T, P"
    },
    specsRu: {
      flow: "0.6 ~ 100.0 м³/час",
      pressure: "0 ~ 250 кПа (0.25 МПа)",
      connection: "G 2 1/2",
      dimensions: "330 x 244 x 167 мм",
      ip: "IP 65",
      battery: "Встроенный клапан + Модем + T, P"
    },
    descUz: "Zavodlar, yirik fabrika va markaziy issiqlik qozonxonalari uchun standart sanoat hisoblagichi. Davleniyasi 250 kPa gacha.",
    descRu: "Для крупных заводов, фабрик и котельных комплексов. Встроенный клапан, модем и полная коррекция.",
    passportUz: {
      pressureDetail: "0 ~ 250 kPa (0.25 MPa)",
      dimensionsDetail: "330 * 244 * 167 mm",
      connectionDetail: "G 2 1/2",
      ipDetail: "IP 65",
      poverka: "Yuridik shaxslar: 2 yil",
      warranty: "2 yil rasmiy kafolat",
      sim: "Smart M2M GSM",
      complect: "Hisoblagich, ulovchilar, pasport",
      application: "Yirik zavodlar, markaziy qozonxonalar"
    },
    passportRu: {
      pressureDetail: "0 ~ 250 кПа (0.25 МПа)",
      dimensionsDetail: "330 * 244 * 167 мм",
      connectionDetail: "G 2 1/2",
      ipDetail: "IP 65",
      poverka: "Юр. лица: 2 года",
      warranty: "2 года гарантии",
      sim: "Smart M2M GSM",
      complect: "Счетчик, штуцеры, техпаспорт",
      application: "Крупные заводы, котельные"
    }
  },
  {
    id: "smart-g65-hp",
    name: "Smart GM G65 (Yuqori Bosimli Pro)",
    category: "industrial",
    price: 50200000,
    image: "assets/img/angles/smart-g65-hp-front.png",
    angles: [
      { key: "front", labelUz: "1. Oldidan (Fasad)", labelRu: "1. Спереди (Фасад)", src: "assets/img/angles/smart-g65-hp-front.png" },
      { key: "side", labelUz: "2. Yonidan (3D)", labelRu: "2. Сбоку (3D)", src: "assets/img/angles/smart-g65-hp-side.png" },
      { key: "back", labelUz: "3. Orqasidan (Kronshteyn)", labelRu: "3. Сзади (Кронштейн)", src: "assets/img/angles/smart-g65-hp-back.png" },
      { key: "top", labelUz: "4. Tepasidan (Truba)", labelRu: "4. Сверху (Труба)", src: "assets/img/angles/smart-g65-hp-top.png" }
    ],
    badgeUz: "Yuqori Bosimli Pro",
    badgeRu: "Высокое Давление Pro",
    icon: "fa-fire-burner",
    specsUz: {
      flow: "0.6 ~ 100.0 m³/soat",
      pressure: "0 ~ 250 kPa (Tashqi Klapanli)",
      connection: "G 2 1/2",
      dimensions: "500 x 400 x 167 mm",
      ip: "IP 65",
      battery: "Tashqi otsechnoy avariya klapani"
    },
    specsRu: {
      flow: "0.6 ~ 100.0 м³/час",
      pressure: "0 ~ 250 кПа (Внешний Клапан)",
      connection: "G 2 1/2",
      dimensions: "500 x 400 x 167 мм",
      ip: "IP 65",
      battery: "Внешний отсечной клапан в сборе"
    },
    descUz: "Tashqi ko'rinishi bir xil, lekin davleniyasi balandroq va yaxshiroq ishlaydigan yuqori toifadagi G65 hisoblagich. Tashqi avariya klapani bilan jihozlangan.",
    descRu: "Внешний вид идентичен стандартному G65, но прибор рассчитан на повышенное давление и оснащен внешним отсечным клапаном.",
    passportUz: {
      pressureDetail: "0 ~ 250 kPa (Yuqori bosim bardoshliligi)",
      dimensionsDetail: "500 * 400 * 167 mm",
      connectionDetail: "G 2 1/2",
      ipDetail: "IP 65",
      poverka: "Yuridik shaxslar: 2 yil",
      warranty: "2 yil rasmiy kafolat",
      sim: "SCADA telemetriya",
      complect: "Yuqori bosimli hisoblagich, tashqi klapan, pasport",
      application: "Magistral ulanishlar, yuqori bosimli zavodlar"
    },
    passportRu: {
      pressureDetail: "0 ~ 250 кПа",
      dimensionsDetail: "500 * 400 * 167 мм",
      connectionDetail: "G 2 1/2",
      ipDetail: "IP 65",
      poverka: "Юр. лица: 2 года",
      warranty: "2 года гарантии",
      sim: "SCADA телеметрия",
      complect: "Счетчик высокого давления, внешний клапан, паспорт",
      application: "Магистрали, заводы высокого давления"
    }
  },

  // --- SMART GTI XAVFSIZLIK KLAPANLARI ---
  {
    id: "smart-gti-valve-dn65",
    name: "Smart GTI Valve DN65",
    category: "valves",
    price: 27000000,
    image: "assets/img/angles/smart-gti-valve-dn65-front.png",
    angles: [
      { key: "front", labelUz: "1. Oldidan (Fasad)", labelRu: "1. Спереди (Фасад)", src: "assets/img/angles/smart-gti-valve-dn65-front.png" },
      { key: "side", labelUz: "2. Yonidan (3D)", labelRu: "2. Сбоку (3D)", src: "assets/img/angles/smart-gti-valve-dn65-side.png" },
      { key: "back", labelUz: "3. Orqasidan (Kronshteyn)", labelRu: "3. Сзади (Кронштейн)", src: "assets/img/angles/smart-gti-valve-dn65-back.png" },
      { key: "top", labelUz: "4. Tepasidan (Truba)", labelRu: "4. Сверху (Труба)", src: "assets/img/angles/smart-gti-valve-dn65-top.png" }
    ],
    badgeUz: "Klapan DN65",
    badgeRu: "Клапан DN65",
    icon: "fa-shield-virus",
    specsUz: {
      flow: "Tezkor uzilish: 0.1 soniya",
      pressure: "0 ~ 1.6 MPa (16 bar)",
      connection: "DN 65 (G 2 1/2)",
      dimensions: "300 x 250 x 150 mm",
      ip: "IP 67",
      battery: "O'rnatilgan modem, tashqi quvvatsiz"
    },
    specsRu: {
      flow: "Срабатывание: 0.1 сек",
      pressure: "0 ~ 1.6 МПа (16 бар)",
      connection: "DN 65 (G 2 1/2)",
      dimensions: "300 x 250 x 150 мм",
      ip: "IP 67",
      battery: "Встроенный модем, автономный"
    },
    descUz: "Smart GTI avariya otsechnoy klapani DN65. O'rnatilgan modem bilan jihozlangan va tashqi quvvat talab qilmaydi. Davleniyasi 1.6 MPa (16 bar).",
    descRu: "Отсечной клапан типа SMART GTI VALVE DN 65 со встроенным модемом и автономным питанием. Давление 0 ~ 1.6 МПа.",
    passportUz: {
      pressureDetail: "0 ~ 1.6 MPa (16 bar yuqori sanoat bosimi)",
      dimensionsDetail: "300 * 250 * 150 mm",
      connectionDetail: "DN 65 rezbali / flanesli",
      ipDetail: "IP 67 (nam va ochiq havoda ishlashga chidamli)",
      poverka: "Muntazam texnik ko'rik",
      warranty: "2 yil rasmiy kafolat",
      sim: "O'rnatilgan masofaviy boshqaruv modemi",
      complect: "Klapan, ulovchilar, texnik pasport",
      application: "Sanoat tarmoqlari, DN65 gaz quvurlari"
    },
    passportRu: {
      pressureDetail: "0 ~ 1.6 МПа (16 бар)",
      dimensionsDetail: "300 * 250 * 150 мм",
      connectionDetail: "DN 65",
      ipDetail: "IP 67",
      poverka: "Регулярный техосмотр",
      warranty: "2 года гарантии",
      sim: "Встроенный модем",
      complect: "Клапан, штуцеры, паспорт",
      application: "Промышленные сети DN65"
    }
  },
  {
    id: "smart-gti-valve-dn100",
    name: "Smart GTI Valve DN100",
    category: "valves",
    price: 40000000,
    image: "assets/img/angles/smart-gti-valve-dn100-front.png",
    angles: [
      { key: "front", labelUz: "1. Oldidan (Fasad)", labelRu: "1. Спереди (Фасад)", src: "assets/img/angles/smart-gti-valve-dn100-front.png" },
      { key: "side", labelUz: "2. Yonidan (3D)", labelRu: "2. Сбоку (3D)", src: "assets/img/angles/smart-gti-valve-dn100-side.png" },
      { key: "back", labelUz: "3. Orqasidan (Kronshteyn)", labelRu: "3. Сзади (Кронштейн)", src: "assets/img/angles/smart-gti-valve-dn100-back.png" },
      { key: "top", labelUz: "4. Tepasidan (Truba)", labelRu: "4. Сверху (Труба)", src: "assets/img/angles/smart-gti-valve-dn100-top.png" }
    ],
    badgeUz: "Klapan DN100",
    badgeRu: "Клапан DN100",
    icon: "fa-shield-virus",
    specsUz: {
      flow: "Tezkor uzilish: 0.1 soniya",
      pressure: "0 ~ 1.6 MPa (16 bar)",
      connection: "DN 100 Flanesli",
      dimensions: "350 x 250 x 380 mm",
      ip: "IP 67",
      battery: "O'rnatilgan modem, avtonom quvvat"
    },
    specsRu: {
      flow: "Срабатывание: 0.1 сек",
      pressure: "0 ~ 1.6 МПа (16 бар)",
      connection: "Фланцевый DN 100",
      dimensions: "350 x 250 x 380 мм",
      ip: "IP 67",
      battery: "Встроенный модем, автономный"
    },
    descUz: "AGTKSH metan quyish shoxobchalari va yirik sanoat korxonalari uchun. O'rnatilgan modem, avtonom batareya, 1.6 MPa ishchi bosim.",
    descRu: "Отсечной клапан SMART GTI VALVE DN 100 со встроенным модемом, не требующий внешнего питания. Для АГНКС и заводов.",
    passportUz: {
      pressureDetail: "0 ~ 1.6 MPa (16 bar)",
      dimensionsDetail: "350 * 250 * 380 mm",
      connectionDetail: "Flanesli DN 100",
      ipDetail: "IP 67",
      poverka: "Muntazam texnik ko'rik",
      warranty: "2 yil rasmiy kafolat",
      sim: "O'rnatilgan telemetriya modemi",
      complect: "DN100 klapan, flaneslar to'plami, pasport",
      application: "AGTKSH, metan quyish, sanoat korxonalari"
    },
    passportRu: {
      pressureDetail: "0 ~ 1.6 МПа (16 бар)",
      dimensionsDetail: "350 * 250 * 380 мм",
      connectionDetail: "Фланцевый DN 100",
      ipDetail: "IP 67",
      poverka: "Регулярный техосмотр",
      warranty: "2 года гарантии",
      sim: "Встроенный модем",
      complect: "Клапан DN100, фланцы, паспорт",
      application: "АГНКС, промышленность"
    }
  },
  {
    id: "smart-gti-valve-dn150",
    name: "Smart GTI Valve DN150",
    category: "valves",
    price: 50000000,
    image: "assets/img/angles/smart-gti-valve-dn150-front.png",
    angles: [
      { key: "front", labelUz: "1. Oldidan (Fasad)", labelRu: "1. Спереди (Фасад)", src: "assets/img/angles/smart-gti-valve-dn150-front.png" },
      { key: "side", labelUz: "2. Yonidan (3D)", labelRu: "2. Сбоку (3D)", src: "assets/img/angles/smart-gti-valve-dn150-side.png" },
      { key: "back", labelUz: "3. Orqasidan (Kronshteyn)", labelRu: "3. Сзади (Кронштейн)", src: "assets/img/angles/smart-gti-valve-dn150-back.png" },
      { key: "top", labelUz: "4. Tepasidan (Truba)", labelRu: "4. Сверху (Труба)", src: "assets/img/angles/smart-gti-valve-dn150-top.png" }
    ],
    badgeUz: "Klapan DN150",
    badgeRu: "Клапан DN150",
    icon: "fa-shield-virus",
    specsUz: {
      flow: "Tezkor uzilish: 0.1 soniya",
      pressure: "0 ~ 1.6 MPa (16 bar)",
      connection: "DN 150 Flanesli",
      dimensions: "480 x 350 x 430 mm",
      ip: "IP 67",
      battery: "O'rnatilgan modem, avtonom quvvat"
    },
    specsRu: {
      flow: "Срабатывание: 0.1 сек",
      pressure: "0 ~ 1.6 МПа (16 бар)",
      connection: "Фланцевый DN 150",
      dimensions: "480 x 350 x 430 мм",
      ip: "IP 67",
      battery: "Встроенный модем, автономный"
    },
    descUz: "Ko'p kolonnali AGTKSH va magistral yuqori bosimli gaz quvurlari uchun mo'ljallangan Smart GTI DN150 avariya klapani. Davleniya 1.6 MPa.",
    descRu: "Отсечной клапан SMART GTI VALVE DN 150 со встроенным модемом для магистральных сетей и крупных АГНКС.",
    passportUz: {
      pressureDetail: "0 ~ 1.6 MPa (16 bar)",
      dimensionsDetail: "480 * 350 * 430 mm",
      connectionDetail: "DN 150 Flanesli",
      ipDetail: "IP 67",
      poverka: "Muntazam texnik ko'rik",
      warranty: "2 yil rasmiy kafolat",
      sim: "O'rnatilgan SCADA avariya modemi",
      complect: "DN150 klapan, pasport, muvofiqlik sertifikati",
      application: "Magistral gaz quvurlari, yirik AGTKSH"
    },
    passportRu: {
      pressureDetail: "0 ~ 1.6 МПа (16 бар)",
      dimensionsDetail: "480 * 350 * 430 мм",
      connectionDetail: "DN 150",
      ipDetail: "IP 67",
      poverka: "Регулярный техосмотр",
      warranty: "2 года гарантии",
      sim: "Встроенный модем",
      complect: "Клапан DN150, паспорт, сертификат",
      application: "Магистрали, крупные АГНКС"
    }
  },
  {
    id: "smart-gti-valve-dn200",
    name: "Smart GTI Valve DN200",
    category: "valves",
    price: 57000000,
    image: "assets/img/angles/smart-gti-valve-dn200-front.png",
    angles: [
      { key: "front", labelUz: "1. Oldidan (Fasad)", labelRu: "1. Спереди (Фасад)", src: "assets/img/angles/smart-gti-valve-dn200-front.png" },
      { key: "side", labelUz: "2. Yonidan (3D)", labelRu: "2. Сбоку (3D)", src: "assets/img/angles/smart-gti-valve-dn200-side.png" },
      { key: "back", labelUz: "3. Orqasidan (Kronshteyn)", labelRu: "3. Сзади (Кронштейн)", src: "assets/img/angles/smart-gti-valve-dn200-back.png" },
      { key: "top", labelUz: "4. Tepasidan (Truba)", labelRu: "4. Сверху (Труба)", src: "assets/img/angles/smart-gti-valve-dn200-top.png" }
    ],
    badgeUz: "Klapan DN200",
    badgeRu: "Клапан DN200",
    icon: "fa-shield-virus",
    specsUz: {
      flow: "Tezkor uzilish: 0.1 soniya",
      pressure: "0 ~ 1.6 MPa (16 bar)",
      connection: "DN 200 Flanesli",
      dimensions: "520 x 420 x 500 mm",
      ip: "IP 67",
      battery: "O'rnatilgan modem, avtonom quvvat"
    },
    specsRu: {
      flow: "Срабатывание: 0.1 сек",
      pressure: "0 ~ 1.6 МПа (16 бар)",
      connection: "Фланцевый DN 200",
      dimensions: "520 x 420 x 500 мм",
      ip: "IP 67",
      battery: "Встроенный модем, автономный"
    },
    descUz: "Eng yirik metallurgiya majmualari, sement zavodlari va elektr stansiyalari uchun maksimal o'lchamli Smart GTI DN200 xavfsizlik klapani.",
    descRu: "Максимальный отсечной клапан SMART GTI VALVE DN 200 со встроенным модемом для металлургии, ТЭЦ и магистралей.",
    passportUz: {
      pressureDetail: "0 ~ 1.6 MPa (16 bar)",
      dimensionsDetail: "520 * 420 * 500 mm",
      connectionDetail: "DN 200 Flanesli",
      ipDetail: "IP 67",
      poverka: "Muntazam texnik ko'rik",
      warranty: "2 yil rasmiy kafolat",
      sim: "SCADA avtomatik blokirovka modemi",
      complect: "DN200 klapan, flanes to'plami, pasport",
      application: "IES, IEM, og'ir metallurgiya, sement zavodlari"
    },
    passportRu: {
      pressureDetail: "0 ~ 1.6 МПа (16 бар)",
      dimensionsDetail: "520 * 420 * 500 мм",
      connectionDetail: "DN 200",
      ipDetail: "IP 67",
      poverka: "Регулярный техосмотр",
      warranty: "2 года гарантии",
      sim: "SCADA автоматическая блокировка",
      complect: "Клапан DN200, фланцы, паспорт",
      application: "ТЭЦ, металлургия, цементные заводы"
    }
  }
];

// 2. I18N LUG'ATI (FAQAT GAZ_METER, DILLERLAR BO'LIMI CHEKLANGAN)
const I18N = {
  uz: {
    nav_home: "Bosh sahifa",
    nav_products: "Mahsulotlar Katalogi",
    nav_dealers: "Dillerlar",
    nav_unblock: "Blokdan Ochish",
    nav_about: "Kompaniya haqida",
    nav_contact: "Bog'lanish",
    
    hero_badge: "O'zbekistonda 450 000+ dan ortiq o'rnatilgan hisoblagichlar",
    hero_title_1: "Gaz Hisoblagichlari",
    hero_title_2: "va Xavfsizlik Klapanlari",
    hero_desc: "\"Gaz Meter\" — O'zbekistonda 450 000 dan ortiq xonadon va yirik zavodlarga zamonaviy smart hisoblagichlarni 2 yillik rasmiy kafolat bilan yetkazib bergan ishonchli diler.",
    
    feat_1_sub: "O'zstandart",
    feat_1_title: "Davlat Reyestri",
    feat_2_sub: "Kafolat muddati",
    feat_2_title: "2 Yil Rasmiy Kafolat",
    feat_3_sub: "Muvaffaqiyatli savdo",
    feat_3_title: "450 000+ Sotilgan",

    hero_btn_catalog: "Katalogni Ko'rish",
    hero_btn_unblock: "Blokdan Ochish (@sensuschat)",
    hero_card_title: "Gaz Meter Rasmiy Do'koni",
    hero_card_sub: "Toshkent sh., Sho'ta Rustaveli 101",
    hero_stat_1: "450 000+",
    hero_stat_1_l: "Sotilgan Schyotchiklar",
    hero_stat_2: "150+",
    hero_stat_2_l: "AGTKSH va Korxonalar",
    hero_stat_3: "100%",
    hero_stat_3_l: "O'zstandart Sertifikati",
    hero_stat_4: "2 Yil",
    hero_stat_4_l: "Rasmiy Kafolat",

    catalog_badge: "Katalog & Narxlar",
    catalog_title: "Gaz Hisoblagichlari Katalogi",
    catalog_sub: "Aholi xonadonlari, tijorat va yirik sanoat uchun 14 turdagi original uskunalar. Har bir model uchun aniq davleniya va 4 tomondan oq fondagi ko'rinish.",
    filter_all: "Barchasi (14)",
    filter_res: "Aholi uchun (2)",
    filter_comm: "Tijorat (4)",
    filter_ind: "Sanoat (4)",
    filter_valves: "Klapanlar (4)",
    search_placeholder: "Modelni qidirish (G4, G10, G16, Klapan)...",
    passport_btn: "Batafsil Pasport (4 Rakurs)",
    order_btn_text: "Buyurtma berish",

    dealers_badge: "Dillerlar Bo'limi",
    dealers_title: "Ulgurji Xaridorlar va Qurilish Kompaniyalari",
    dealers_desc: "Dillerlik narxlari va ulgurji shartlar bo'yicha to'g'ridan-to'g'ri dillerlar menejeri @DILSHOD_GTI yoki +998 93 544-04-40 bilan bog'laning.",
    dealers_btn: "Telegramda @DILSHOD_GTI ga yozish",

    toast_success_title: "Rahmat! Arizangiz qabul qilindi.",
    toast_success_desc: "Menejerimiz tez orada (ish vaqtida 15 daqiqa ichida) siz bilan bog'lanadi."
  },
  ru: {
    nav_home: "Главная",
    nav_products: "Каталог Продукции",
    nav_dealers: "Дилерам",
    nav_unblock: "Разблокировка",
    nav_about: "О компании",
    nav_contact: "Контакты",
    
    hero_badge: "Более 450 000+ установленных счетчиков по Узбекистану",
    hero_title_1: "Газовые Счетчики",
    hero_title_2: "и Клапаны Безопасности",
    hero_desc: "\"Gaz Meter\" — надежный поставщик сертифицированных газовых счетчиков. Более 450 000 приборов успешно установлены по всей республике с официальной гарантией 2 года.",
    
    feat_1_sub: "Узстандарт",
    feat_1_title: "Госреестр РУз",
    feat_2_sub: "Гарантия",
    feat_2_title: "2 Года Гарантии",
    feat_3_sub: "Успешные продажи",
    feat_3_title: "450 000+ Продано",

    hero_btn_catalog: "Смотреть Каталог",
    hero_btn_unblock: "Разблокировка (@sensuschat)",
    hero_card_title: "Официальный Магазин Gaz Meter",
    hero_card_sub: "г. Ташкент, ул. Шота Руставели 101",
    hero_stat_1: "450 000+",
    hero_stat_1_l: "Продано счетчиков",
    hero_stat_2: "150+",
    hero_stat_2_l: "АГНКС и предприятий",
    hero_stat_3: "100%",
    hero_stat_3_l: "Госстандарт",
    hero_stat_4: "2 Года",
    hero_stat_4_l: "Гарантия",

    catalog_badge: "Каталог и Цены",
    catalog_title: "Каталог Газовых Счетчиков",
    catalog_sub: "14 видов сертифицированного оборудования. Полные данные по рабочему давлению и 4 ракурса на белом фоне для каждого прибора.",
    filter_all: "Все (14)",
    filter_res: "Для дома (2)",
    filter_comm: "Коммерческие (4)",
    filter_ind: "Пром (4)",
    filter_valves: "Клапаны (4)",
    search_placeholder: "Поиск модели (G4, G10, G16, Клапан)...",
    passport_btn: "Техпаспорт (4 Ракурса)",
    order_btn_text: "Заказать",

    dealers_badge: "Дилерский Отдел",
    dealers_title: "Оптовым Покупателям и Застройщикам",
    dealers_desc: "По вопросам дилерских цен и крупных оптовых поставок связывайтесь напрямую с дилерским менеджером @DILSHOD_GTI или по телефону +998 93 544-04-40.",
    dealers_btn: "Написать в Telegram @DILSHOD_GTI",

    toast_success_title: "Спасибо! Ваша заявка принята.",
    toast_success_desc: "Наш менеджер свяжется с вами в течение 15 минут в рабочее время."
  }
};

let currentLang = localStorage.getItem("site_lang") || "uz";
let activeCategory = "all";
let searchQuery = "";

// Format UZS currency helper
function formatPrice(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (currentLang === "uz" ? " so'm" : " сум");
}

// 3. MAHSULOTLARNI RENDER QILISH (4-RAKURS SWITCHER BILAN)
function renderProducts() {
  const container = document.getElementById("productsGrid");
  if (!container) return;

  const filtered = PRODUCTS.filter(item => {
    let matchCat = false;
    if (activeCategory === "all") matchCat = true;
    else if (activeCategory === "residential") matchCat = item.category === "residential";
    else if (activeCategory === "commercial") matchCat = item.category === "commercial";
    else if (activeCategory === "industrial") matchCat = item.category === "industrial";
    else if (activeCategory === "valves") matchCat = item.category === "valves";

    const q = searchQuery.toLowerCase();
    const nameMatch = item.name.toLowerCase().includes(q) || item.id.toLowerCase().includes(q);
    return matchCat && nameMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-500">
        <i class="fa-solid fa-box-open text-5xl mb-4 text-slate-600"></i>
        <p class="text-base font-semibold text-slate-400">${currentLang === "uz" ? "Mahsulot topilmadi" : "Товары не найдены"}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const badge = currentLang === "uz" ? item.badgeUz : item.badgeRu;
    const desc = currentLang === "uz" ? item.descUz : item.descRu;
    const specs = currentLang === "uz" ? item.specsUz : item.specsRu;
    const orderBtnLabel = currentLang === "uz" ? I18N.uz.order_btn_text : I18N.ru.order_btn_text;
    const passportBtnLabel = currentLang === "uz" ? I18N.uz.passport_btn : I18N.ru.passport_btn;

    return `
      <div class="bg-[#131B2A] border border-[#1F2E45] hover:border-amber-500/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/15 group relative">
        
        <div>
          <!-- Top Card Meta -->
          <div class="flex items-start justify-between gap-2 mb-3">
            <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400">
              ${badge}
            </span>
            <span class="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
              <i class="fa-solid fa-shield text-amber-500 text-[9px]"></i> 2 Yil Kafolat
            </span>
          </div>

          <!-- Product 4-Angle White Studio Container -->
          <div class="w-full rounded-xl bg-white border border-slate-300/80 p-2.5 mb-3 flex flex-col items-center justify-center relative shadow-sm group-hover:border-amber-500/50 transition-all">
            <!-- Viewport -->
            <div class="w-full h-44 flex items-center justify-center overflow-hidden">
              <img id="card-img-${item.id}" src="${item.angles[0].src}" alt="${item.name}" class="max-h-full max-w-full object-contain filter drop-shadow-md transition-all duration-300 group-hover:scale-105">
            </div>

            <!-- 4-Angle Switcher Buttons beneath image -->
            <div class="flex items-center justify-between gap-1 mt-2 w-full pt-2 border-t border-slate-200">
              <button type="button" title="Oldidan ko'rinish" onclick="switchCardAngle('${item.id}', 0, event)" class="angle-btn-${item.id} flex-1 py-1 rounded text-[10px] font-bold bg-amber-500 text-slate-950 transition-all text-center">1. Oldi</button>
              <button type="button" title="Yon tomondan ko'rinish" onclick="switchCardAngle('${item.id}', 1, event)" class="angle-btn-${item.id} flex-1 py-1 rounded text-[10px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all text-center">2. Yoni</button>
              <button type="button" title="Orqa tomondan ko'rinish" onclick="switchCardAngle('${item.id}', 2, event)" class="angle-btn-${item.id} flex-1 py-1 rounded text-[10px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all text-center">3. Orqa</button>
              <button type="button" title="Tepadan ko'rinish" onclick="switchCardAngle('${item.id}', 3, event)" class="angle-btn-${item.id} flex-1 py-1 rounded text-[10px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all text-center">4. Tepasi</button>
            </div>
          </div>

          <!-- Product Title -->
          <h3 class="text-base font-bold text-white font-heading group-hover:text-amber-400 transition-colors">
            ${item.name}
          </h3>

          <p class="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            ${desc}
          </p>

          <!-- Technical Specs with Prominent Davleniya -->
          <div class="mt-3 pt-3 border-t border-slate-800/80 space-y-1.5 text-xs">
            <div class="flex justify-between items-center py-0.5 px-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <span class="font-bold text-amber-400">${currentLang === "uz" ? "Davleniya (Bosim):" : "Давление:"}</span>
              <span class="font-extrabold text-amber-300 font-mono text-[11px]">${specs.pressure}</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>${currentLang === "uz" ? "Sarf diapazoni:" : "Расход:"}</span>
              <span class="font-semibold text-slate-200">${specs.flow}</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>${currentLang === "uz" ? "Ulanish rezbasi:" : "Подключение:"}</span>
              <span class="font-semibold text-slate-200">${specs.connection}</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>${currentLang === "uz" ? "O'lchamlari (mm):" : "Габариты:"}</span>
              <span class="font-semibold text-slate-300 text-[11px]">${specs.dimensions}</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>${currentLang === "uz" ? "Himoya darajasi:" : "Защита:"}</span>
              <span class="font-semibold text-emerald-400 text-[11px]">${specs.ip}</span>
            </div>
          </div>
        </div>

        <!-- Buttons & Pricing -->
        <div class="mt-4 pt-3 border-t border-slate-800 space-y-3">
          
          <div>
            <span class="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
              ${currentLang === "uz" ? "Narxi:" : "Цена:"}
            </span>
            <span class="text-lg font-extrabold text-amber-400 font-heading">
              ${formatPrice(item.price)}
            </span>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <!-- Technical Passport Modal Button -->
            <button onclick="openProductPassport('${item.id}')" class="px-2 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1 transition-all">
              <i class="fa-solid fa-images text-amber-400 text-xs"></i>
              <span class="truncate">${passportBtnLabel}</span>
            </button>

            <!-- Order Button -->
            <button onclick="selectProductAndOrder('${item.name}')" class="px-2 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md hover:shadow-amber-500/25">
              <i class="fa-solid fa-cart-shopping"></i>
              <span>${orderBtnLabel}</span>
            </button>
          </div>

        </div>

      </div>
    `;
  }).join("");
}

// 4. ACTION: SWITCH CARD ANGLE
window.switchCardAngle = function(productId, angleIndex, event) {
  if (event) event.stopPropagation();
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item || !item.angles || !item.angles[angleIndex]) return;

  const imgEl = document.getElementById(`card-img-${productId}`);
  if (imgEl) {
    imgEl.src = item.angles[angleIndex].src;
  }

  // Update button active state
  const buttons = document.querySelectorAll(`.angle-btn-${productId}`);
  buttons.forEach((btn, idx) => {
    if (idx === angleIndex) {
      btn.classList.remove("bg-slate-100", "text-slate-700");
      btn.classList.add("bg-amber-500", "text-slate-950", "font-bold");
    } else {
      btn.classList.remove("bg-amber-500", "text-slate-950", "font-bold");
      btn.classList.add("bg-slate-100", "text-slate-700", "font-semibold");
    }
  });
};

// 5. ACTION: SELECT PRODUCT AND ORDER (MULTIPLE PAGES SAFE)
window.selectProductAndOrder = function(productName) {
  closeProductPassport();

  const select = document.getElementById("productSelect");
  const contactSection = document.getElementById("contact");

  if (select && contactSection) {
    // Current page has form
    for (let opt of select.options) {
      if (opt.value && productName.toLowerCase().includes(opt.value.toLowerCase().split(' ')[0])) {
        opt.selected = true;
        break;
      }
    }
    contactSection.scrollIntoView({ behavior: "smooth" });
    const nameInput = document.getElementById("userName");
    setTimeout(() => { if (nameInput) nameInput.focus(); }, 600);
  } else {
    // Redirect to contact page with pre-selected product query
    window.location.href = `contact.html?product=${encodeURIComponent(productName)}`;
  }
};

// 6. TECHNICAL PASSPORT MODAL (OQ FONDA 4-RAKURS INTERACTIVE VIEWER)
let activePassportProductId = null;
let activePassportAngleIndex = 0;

window.openProductPassport = function(productId) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  activePassportProductId = productId;
  activePassportAngleIndex = 0;

  const modal = document.getElementById("passportModal");
  const content = document.getElementById("passportModalContent");
  if (!modal || !content) return;

  const pData = currentLang === "uz" ? item.passportUz : item.passportRu;
  const specs = currentLang === "uz" ? item.specsUz : item.specsRu;
  const desc = currentLang === "uz" ? item.descUz : item.descRu;

  content.innerHTML = `
    <!-- Modal Header -->
    <div class="flex items-start justify-between border-b border-slate-800 pb-4 mb-5">
      <div>
        <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
          <i class="fa-solid fa-camera"></i> Oq Fonda 4-Tomonlama Ko'rinish
        </div>
        <h3 class="text-2xl font-bold text-white font-heading">${item.name}</h3>
        <p class="text-xs text-slate-400">Rasmiy Davlat Standart Texnik Pasporti & Davleniya Ko'rsatkichi</p>
      </div>
      <button onclick="closeProductPassport()" class="text-slate-400 hover:text-white text-2xl p-1 transition-colors">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <!-- 4-Angle High-Resolution Studio Viewer -->
    <div class="mb-6 bg-slate-950 p-4 rounded-2xl border border-slate-800">
      
      <!-- Main White Viewport -->
      <div class="w-full bg-white rounded-xl p-4 sm:p-6 border border-slate-200 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[380px] relative shadow-inner">
        <div class="absolute top-3 left-3 bg-slate-900/90 text-amber-400 text-[11px] font-bold px-3 py-1 rounded-lg border border-slate-700 flex items-center gap-1.5 shadow">
          <i class="fa-solid fa-eye text-xs"></i>
          <span id="passportAngleLabel">${item.angles[0].labelUz}</span>
        </div>
        <div class="absolute top-3 right-3 bg-emerald-500/10 text-emerald-700 text-[11px] font-extrabold px-2.5 py-1 rounded-md border border-emerald-500/30">
          Davleniya: ${specs.pressure}
        </div>

        <img id="passportMainImg" src="${item.angles[0].src}" alt="${item.name}" class="max-h-72 sm:max-h-80 max-w-full object-contain filter drop-shadow-xl transition-all duration-300">
      </div>

      <!-- 4 Thumbnails Gallery -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3.5">
        ${item.angles.map((ang, idx) => `
          <button type="button" onclick="switchPassportAngle(${idx})" id="passport-thumb-${idx}" class="passport-thumb flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all ${idx === 0 ? 'bg-amber-500/15 border-amber-500 text-white' : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'}">
            <div class="w-12 h-12 rounded-lg bg-white p-1 border border-slate-200 shrink-0 flex items-center justify-center overflow-hidden">
              <img src="${ang.src}" alt="${ang.labelUz}" class="max-h-full max-w-full object-contain">
            </div>
            <div class="min-w-0">
              <p class="text-[11px] font-bold truncate">${currentLang === "uz" ? ang.labelUz : ang.labelRu}</p>
              <span class="text-[9px] text-slate-400 block">${currentLang === "uz" ? "Oq fonda" : "На белом фоне"}</span>
            </div>
          </button>
        `).join("")}
      </div>

    </div>

    <!-- Description -->
    <p class="text-sm text-slate-300 leading-relaxed mb-6 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
      ${desc}
    </p>

    <!-- Comprehensive Technical Specs Table -->
    <div class="space-y-2 text-sm bg-slate-950 p-4 rounded-2xl border border-slate-800">
      <div class="flex justify-between py-2 border-b border-slate-800/80 items-center">
        <span class="text-slate-400 font-semibold">${currentLang === "uz" ? "Ishchi bosim (Davleniya):" : "Рабочее давление:"}</span>
        <span class="font-extrabold text-amber-400 font-mono text-base bg-amber-500/10 px-3 py-0.5 rounded-lg border border-amber-500/30">${pData.pressureDetail}</span>
      </div>
      <div class="flex justify-between py-2 border-b border-slate-800/80">
        <span class="text-slate-400">${currentLang === "uz" ? "Sarf diapazoni (Q):" : "Диапазон расхода:"}</span>
        <span class="font-bold text-white font-mono">${specs.flow}</span>
      </div>
      <div class="flex justify-between py-2 border-b border-slate-800/80">
        <span class="text-slate-400">${currentLang === "uz" ? "Ulanish diametri:" : "Подключение:"}</span>
        <span class="font-bold text-white font-mono">${pData.connectionDetail}</span>
      </div>
      <div class="flex justify-between py-2 border-b border-slate-800/80">
        <span class="text-slate-400">${currentLang === "uz" ? "Gabarit o'lchamlari:" : "Габариты:"}</span>
        <span class="font-semibold text-slate-200 font-mono">${pData.dimensionsDetail}</span>
      </div>
      <div class="flex justify-between py-2 border-b border-slate-800/80">
        <span class="text-slate-400">${currentLang === "uz" ? "Himoya darajasi:" : "Степень защиты:"}</span>
        <span class="font-bold text-emerald-400">${pData.ipDetail}</span>
      </div>
      <div class="flex justify-between py-2 border-b border-slate-800/80">
        <span class="text-slate-400">${currentLang === "uz" ? "Davlat poverkasi muddati:" : "Госповерка:"}</span>
        <span class="font-bold text-emerald-400">${pData.poverka}</span>
      </div>
      <div class="flex justify-between py-2 border-b border-slate-800/80">
        <span class="text-slate-400">${currentLang === "uz" ? "Kafolat muddati:" : "Срок гарантии:"}</span>
        <span class="font-bold text-amber-400">${pData.warranty}</span>
      </div>
      <div class="flex justify-between py-2 border-b border-slate-800/80">
        <span class="text-slate-400">${currentLang === "uz" ? "SIM-karta & Telemetriya:" : "SIM-карта:"}</span>
        <span class="font-semibold text-slate-200">${pData.sim}</span>
      </div>
      <div class="flex justify-between py-2 border-b border-slate-800/80">
        <span class="text-slate-400">${currentLang === "uz" ? "Zavod komplektatsiyasi:" : "Комплектация:"}</span>
        <span class="font-semibold text-slate-200 text-right max-w-xs">${pData.complect}</span>
      </div>
      <div class="flex justify-between py-2">
        <span class="text-slate-400">${currentLang === "uz" ? "Tavsiya etiladigan soha:" : "Применение:"}</span>
        <span class="font-semibold text-slate-200 text-right max-w-xs">${pData.application}</span>
      </div>
    </div>

    <!-- Pricing and Order CTA inside Modal -->
    <div class="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <span class="text-xs text-slate-400 block">${currentLang === "uz" ? "Rasmiy narxi:" : "Официальная цена:"}</span>
        <span class="text-2xl font-extrabold text-amber-400 font-heading">${formatPrice(item.price)}</span>
      </div>

      <div class="flex items-center gap-3 w-full sm:w-auto">
        <a href="https://t.me/gaz_meter" target="_blank" class="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-sky-400 font-bold text-xs flex items-center justify-center gap-2 transition-all">
          <i class="fa-brands fa-telegram text-base"></i>
          <span>@gaz_meter</span>
        </a>
        <button onclick="selectProductAndOrder('${item.name}')" class="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all">
          <i class="fa-solid fa-cart-shopping"></i>
          <span>${currentLang === "uz" ? "Buyurtma berish" : "Заказать эту модель"}</span>
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
};

// 7. ACTION: SWITCH PASSPORT ANGLE
window.switchPassportAngle = function(angleIndex) {
  if (!activePassportProductId) return;
  const item = PRODUCTS.find(p => p.id === activePassportProductId);
  if (!item || !item.angles || !item.angles[angleIndex]) return;

  activePassportAngleIndex = angleIndex;

  const mainImg = document.getElementById("passportMainImg");
  const labelEl = document.getElementById("passportAngleLabel");

  if (mainImg) mainImg.src = item.angles[angleIndex].src;
  if (labelEl) {
    labelEl.innerText = currentLang === "uz" ? item.angles[angleIndex].labelUz : item.angles[angleIndex].labelRu;
  }

  // Update thumbnails active state
  for (let i = 0; i < item.angles.length; i++) {
    const thumb = document.getElementById(`passport-thumb-${i}`);
    if (thumb) {
      if (i === angleIndex) {
        thumb.className = "passport-thumb flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all bg-amber-500/15 border-amber-500 text-white shadow-md";
      } else {
        thumb.className = "passport-thumb flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300";
      }
    }
  }
};

window.closeProductPassport = function() {
  const modal = document.getElementById("passportModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
  activePassportProductId = null;
};

// 8. LANGUAGE SWITCHER LOGIC
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("site_lang", lang);
  
  const label = document.getElementById("currentLangLabel");
  if (label) label.innerText = lang.toUpperCase();

  const dict = I18N[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  const searchInput = document.getElementById("productSearch");
  if (searchInput && dict.search_placeholder) {
    searchInput.placeholder = dict.search_placeholder;
  }

  renderProducts();
}

// 9. TELEGRAM DISPATCH HELPER (DIRECT API)
async function sendToTelegram(textMessage) {
  const botToken = (typeof APP_CONFIG !== "undefined" && APP_CONFIG.telegramBotToken && APP_CONFIG.telegramBotToken.length > 5)
    ? APP_CONFIG.telegramBotToken
    : "8873663265:AAFkxE1lDcccnjrGDpYj_VS05nTcwV9gh1U";

  const chatId = (typeof APP_CONFIG !== "undefined" && APP_CONFIG.telegramChatId && String(APP_CONFIG.telegramChatId).length > 2)
    ? APP_CONFIG.telegramChatId
    : "629645449";

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: textMessage,
        parse_mode: "HTML"
      })
    });
    const data = await response.json();
    return data && data.ok === true;
  } catch (err) {
    console.error("Telegram API xatosi:", err);
    return false;
  }
}

// 10. SUCCESS MODAL
function showSuccessModal(customTitle, customMessage) {
  const modal = document.getElementById("orderSuccessModal");
  const titleEl = document.getElementById("successModalTitle");
  const descEl = document.getElementById("successModalDesc");

  if (titleEl) {
    titleEl.innerText = customTitle || (currentLang === "uz" ? I18N.uz.toast_success_title : I18N.ru.toast_success_title);
  }
  if (descEl) {
    descEl.innerText = customMessage || (currentLang === "uz" ? I18N.uz.toast_success_desc : I18N.ru.toast_success_desc);
  }

  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

window.closeSuccessModal = function() {
  const modal = document.getElementById("orderSuccessModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
};

// 10.1 REVIEWS & FEEDBACK SYSTEM (TELEGRAM MODERATSIYA)
window.openReviewModal = function() {
  const modal = document.getElementById("reviewModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
};

window.closeReviewModal = function() {
  const modal = document.getElementById("reviewModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
};

window.submitReview = async function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const name = document.getElementById("reviewName")?.value.trim();
  const city = document.getElementById("reviewCity")?.value.trim();
  const product = document.getElementById("reviewProduct")?.value || "Belgilanmagan";
  const rating = document.getElementById("reviewRating")?.value || "5";
  const text = document.getElementById("reviewText")?.value.trim();
  const btn = document.getElementById("submitReviewBtn");

  if (!name || !text) return;

  if (btn) {
    btn.disabled = true;
    btn.innerText = currentLang === "uz" ? "Yuborilmoqda..." : "Отправка...";
  }

  const tgMessage = `🌟 <b>YANGI MIJOZ SHARHI (OTZIV) — GAZ METER</b>\n\n👤 <b>Mijoz:</b> ${name}\n📍 <b>Shahar / Viloyat:</b> ${city || "Ko'rsatilmagan"}\n📦 <b>Xarid qilingan uskuna:</b> ${product}\n⭐ <b>Baholash:</b> ${rating} / 5 yulduz\n💬 <b>Sharh matni:</b>\n"${text}"\n\n⏱ <b>Vaqt:</b> ${new Date().toLocaleString()}`;

  await sendToTelegram(tgMessage);

  document.getElementById("reviewForm")?.reset();
  closeReviewModal();

  if (btn) {
    btn.disabled = false;
    btn.innerText = currentLang === "uz" ? "Sharhni Yuborish" : "Отправить отзыв";
  }

  showSuccessModal(
    currentLang === "uz" ? "Katta rahmat! Sharhingiz qabul qilindi." : "Большое спасибо! Ваш отзыв принят.",
    currentLang === "uz" 
      ? "Sizning fikringiz biz uchun juda qadrli! Moderatsiya tekshiruvidan so'ng saytimizda e'lon qilinadi." 
      : "Ваш отзыв очень важен для нас! Он будет опубликован на сайте после модерации."
  );
};

// 10.2 INTERAKTIV GAZ KALKULYATORI
window.calculateGasMeter = function() {
  const objType = document.querySelector("input[name='calcObjType']:checked")?.value || "flat";
  const hasPlita = document.getElementById("calcEquipPlita")?.checked ?? true;
  const hasBoiler24 = document.getElementById("calcEquipBoiler24")?.checked ?? false;
  const hasBoiler40 = document.getElementById("calcEquipBoiler40")?.checked ?? false;
  const hasTandir = document.getElementById("calcEquipTandir")?.checked ?? false;
  const hasGorelka = document.getElementById("calcEquipGorelka")?.checked ?? false;
  const hasMetan = document.getElementById("calcEquipMetan")?.checked ?? false;

  let recommendedId = "smart-g4";
  let explanationUz = "Aholi xonadoni va gaz plita uchun ASKUG tizimiga to'liq mos Smart G4 tavsiya etiladi.";
  let explanationRu = "Для квартиры и стандартной плиты рекомендуется ультразвуковой Smart G4 с интеграцией в АСКУГ.";

  if (objType === "cng" || hasMetan) {
    recommendedId = "smart-gti-valve-dn100";
    explanationUz = "AGTKSH (metan quyish) va yuqori bosimli sanoat gaz quvurlari uchun Smart GTI Valve DN100 avariya klapani (1.6 MPa, avtonom) tavsiya etiladi.";
    explanationRu = "Для АГНКС и промышленных сетей рекомендуется отсечной клапан Smart GTI Valve DN100 (1.6 МПа).";
  } else if (objType === "factory" || (hasGorelka && hasBoiler40)) {
    recommendedId = "smart-g65";
    explanationUz = "Yirik zavodlar, qozonxona komplekslari va katta ishlab chiqarish uchun Smart GM G65 (100 m³/soat, 250 kPa) yuqori quvvatli model tavsiya etiladi.";
    explanationRu = "Для крупных заводов и котельных комплексов рекомендуется промышленный Smart GM G65 (100 м³/час).";
  } else if (objType === "greenhouse" || hasGorelka) {
    recommendedId = "smart-g40";
    explanationUz = "Issiqxonalar (teplitsa) va sanoat sexlari uchun 250 kPa bosimga chidamli Smart GM G40 sanoat hisoblagichi tavsiya etiladi.";
    explanationRu = "Для тепличных комплексов и цехов рекомендуется промышленный счетчик Smart GM G40 (до 250 кПа).";
  } else if (objType === "restaurant") {
    recommendedId = "smart-g25";
    explanationUz = "Restoranlar, oshxonalar va yirik qozonxonalar uchun Smart GM G25 (40 m³/soat) tijorat modeli tavsiya etiladi.";
    explanationRu = "Для ресторанов и крупных котельных рекомендуется коммерческий счетчик Smart GM G25.";
  } else if (objType === "bakery" || hasTandir) {
    recommendedId = "smart-g10";
    explanationUz = "Novvoyxonalar, non sexlari va umumiy ovqatlanish uchun 16 m³/soat o'tkazuvchanlikka ega Smart GM G10 tavsiya etiladi.";
    explanationRu = "Для пекарен и пищевых цехов рекомендуется счетчик Smart GM G10 с расходом до 16 м³/час.";
  } else if (objType === "large_house" || hasBoiler40) {
    recommendedId = "smart-g6";
    explanationUz = "Katta hovlilar va 2-3 qavatli kottejlar uchun Smart GM G6 (10 m³/soat) modeli tavsiya etiladi.";
    explanationRu = "Для больших частных домов и коттеджей рекомендуется Smart GM G6.";
  } else if (objType === "yard" || hasBoiler24) {
    recommendedId = "smart-g4";
    explanationUz = "Oddiy hovli uy va 24 kW isitish qozoni uchun eng ommabop Smart G4 yoki Zekr G4 to'g'ri keladi.";
    explanationRu = "Для частного дома с котлом 24 кВт отлично подходит Smart G4 или Zekr G4.";
  }

  const product = PRODUCTS.find(p => p.id === recommendedId) || PRODUCTS[1];
  const resultCard = document.getElementById("calcResultBox");
  if (!resultCard) return;

  const specs = currentLang === "uz" ? product.specsUz : product.specsRu;
  const badge = currentLang === "uz" ? product.badgeUz : product.badgeRu;

  resultCard.innerHTML = `
    <div class="bg-gradient-to-b from-[#131B2A] to-slate-900 border-2 border-amber-500/50 rounded-2xl p-6 shadow-2xl relative">
      <div class="absolute -top-3 right-4 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
        ${currentLang === "uz" ? "Eng Mos Model" : "Рекомендуется"}
      </div>

      <div class="flex flex-col sm:flex-row items-center gap-5 pb-5 border-b border-slate-800">
        <div class="w-32 h-32 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 border border-slate-300">
          <img src="${product.angles[0].src}" alt="${product.name}" class="max-h-full max-w-full object-contain filter drop-shadow">
        </div>
        <div class="text-center sm:text-left">
          <span class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">${badge}</span>
          <h4 class="text-xl font-bold text-white font-heading mt-1">${product.name}</h4>
          <p class="text-xs text-slate-300 mt-1 leading-relaxed">${currentLang === "uz" ? explanationUz : explanationRu}</p>
          <p class="text-xl font-black text-amber-400 font-heading mt-2">${formatPrice(product.price)}</p>
        </div>
      </div>

      <!-- Quick specs -->
      <div class="grid grid-cols-2 gap-2.5 py-4 text-xs border-b border-slate-800">
        <div class="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
          <span class="text-slate-400 block text-[10px] uppercase font-semibold">${currentLang === "uz" ? "Davleniya (Bosim)" : "Давление"}</span>
          <span class="text-amber-400 font-bold font-mono">${specs.pressure}</span>
        </div>
        <div class="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
          <span class="text-slate-400 block text-[10px] uppercase font-semibold">${currentLang === "uz" ? "Maksimal sarf" : "Макс. расход"}</span>
          <span class="text-white font-bold">${specs.flow}</span>
        </div>
        <div class="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
          <span class="text-slate-400 block text-[10px] uppercase font-semibold">${currentLang === "uz" ? "Ulanish rezbasi" : "Подключение"}</span>
          <span class="text-white font-bold">${specs.connection}</span>
        </div>
        <div class="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
          <span class="text-slate-400 block text-[10px] uppercase font-semibold">${currentLang === "uz" ? "Kafolat muddati" : "Гарантия"}</span>
          <span class="text-emerald-400 font-bold">2 Yil Rasmiy</span>
        </div>
      </div>

      <div class="pt-4 flex flex-col sm:flex-row gap-2.5">
        <button type="button" onclick="selectProductAndOrder('${product.name}')" class="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all">
          <i class="fa-solid fa-cart-shopping"></i>
          <span>${currentLang === "uz" ? "Ushbu modelga buyurtma berish" : "Заказать эту модель"}</span>
        </button>
        <button type="button" onclick="openProductPassport('${product.id}')" class="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-amber-400 font-bold text-xs flex items-center justify-center gap-2 transition-all">
          <i class="fa-solid fa-cube"></i>
          <span>${currentLang === "uz" ? "4 Rakurs & Pasport" : "4 Ракурса и Паспорт"}</span>
        </button>
      </div>
    </div>
  `;
};

// 10.3 FAQ AKKORDEON
window.toggleFaq = function(faqId) {
  const ans = document.getElementById(`faq-ans-${faqId}`);
  const icon = document.getElementById(`faq-icon-${faqId}`);
  if (!ans) return;
  const isHidden = ans.classList.contains("hidden");

  document.querySelectorAll("[id^='faq-ans-']").forEach(el => el.classList.add("hidden"));
  document.querySelectorAll("[id^='faq-icon-']").forEach(el => el.classList.remove("rotate-180"));

  if (isHidden) {
    ans.classList.remove("hidden");
    if (icon) icon.classList.add("rotate-180");
  }
};

// 11. INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);

  // Check URL params for pre-selected product
  const urlParams = new URLSearchParams(window.location.search);
  const preSelectedProduct = urlParams.get("product");
  if (preSelectedProduct) {
    const select = document.getElementById("productSelect");
    if (select) {
      for (let opt of select.options) {
        if (opt.value && preSelectedProduct.toLowerCase().includes(opt.value.toLowerCase().split(' ')[0])) {
          opt.selected = true;
          break;
        }
      }
    }
  }

  // Language switcher toggle
  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const nextLang = currentLang === "uz" ? "ru" : "uz";
      applyLanguage(nextLang);
    });
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Category filters
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("active", "bg-amber-500", "text-slate-950", "shadow");
        b.classList.add("text-slate-300");
      });
      btn.classList.add("active", "bg-amber-500", "text-slate-950", "shadow");
      btn.classList.remove("text-slate-300");

      activeCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });

  // Product real-time search
  const searchInput = document.getElementById("productSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Phone input formatting +998
  const phoneInput = document.getElementById("userPhone");
  if (phoneInput) {
    phoneInput.addEventListener("focus", () => {
      if (!phoneInput.value || phoneInput.value.trim() === "") {
        phoneInput.value = "+998 ";
      }
    });
  }

  // Order Form Submit
  const orderForm = document.getElementById("orderForm");
  const submitBtn = document.getElementById("submitBtn");
  const submitBtnText = document.getElementById("submitBtnText");

  if (orderForm) {
    orderForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("userName").value.trim();
      const phone = document.getElementById("userPhone").value.trim();
      const product = document.getElementById("productSelect").value || "Umumiy konsultatsiya";
      const needMontaj = document.getElementById("needMontaj")?.checked;
      const message = document.getElementById("userMessage")?.value.trim() || "";

      if (!name || !phone) return;

      if (submitBtn) submitBtn.disabled = true;
      if (submitBtnText) submitBtnText.innerText = currentLang === "uz" ? "Yuborilmoqda..." : "Отправка...";

      const textForTgBot = `🔥 <b>YANGI BUYURTMA — GAZ METER</b>\n\n👤 <b>Ism / Tashkilot:</b> ${name}\n📞 <b>Telefon:</b> ${phone}\n📦 <b>Tanlangan Mahsulot:</b> ${product}\n🔧 <b>Montaj xizmati:</b> ${needMontaj ? "HA (Narxi kelishiladi)" : "YO'Q"}\n📍 <b>Olib ketish:</b> Samovivoz (Sho'ta Rustaveli 101)\n💰 <b>To'lov:</b> 100% to'lov\n💬 <b>Izoh:</b> ${message || "Yo'q"}\n⏱ <b>Vaqt:</b> ${new Date().toLocaleString()}`;

      await sendToTelegram(textForTgBot);

      orderForm.reset();
      if (phoneInput) phoneInput.value = "+998 ";

      if (submitBtn) submitBtn.disabled = false;
      if (submitBtnText) submitBtnText.innerText = currentLang === "uz" ? I18N.uz.order_btn_text : I18N.ru.order_btn_text;

      showSuccessModal(
        currentLang === "uz" ? I18N.uz.toast_success_title : I18N.ru.toast_success_title,
        currentLang === "uz" ? I18N.uz.toast_success_desc : I18N.ru.toast_success_desc
      );
    });
  }

  // Review Form Listener
  const reviewForm = document.getElementById("reviewForm");
  if (reviewForm) {
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      submitReview(e);
    });
  }

  // Auto initialize calculator
  if (document.getElementById("calcResultBox")) {
    calculateGasMeter();
  }
});

