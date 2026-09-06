/**
 * 兩家餐酒館的事實資料 — 單一真相來源，兩個品牌頁與 JSON-LD 都吃這裡。
 *
 * 紀律（docs/CONTENT_POLICY.md）：
 *  - 這裡只放**可查證**的欄位：地址、營業時間、業態。
 *  - **不放評分與評論數**。TACB 的 4.7★／678 則是 2026-08-12 Google Places
 *    的快照，評論數天天在動，寫死在頁面上就是下一個未查證數字。要呈現
 *    就連到 Google 商家頁讓讀者自己看（內容政策紅線一允許的做法）。
 *  - **不放價格**（web-ebplus/CLAUDE.md 內容規範：不顯示具體價格或交期）。
 *  - 不放店長與員工姓名。Google 評論裡有，但寫上官網要當事人同意。
 *
 * 「旗下」的寫法是 Jason 2026-09-06 裁示，取代 2026-08-16 Codex 稽核定的
 * 「合作場域／獨立品牌」。TACB 與東方美的持股關係我方無書面資料，
 * 依裁示行文，若日後總部另有說法以總部為準。
 */

export type Photo = { src: string; alt: string; caption: string };

export type Brand = {
  slug: string;
  name: string;
  nameEn: string;
  area: string;
  /** 一句話講清楚這家店是什麼 */
  tagline: string;
  address: string;
  /** 給 schema.org PostalAddress 用 */
  addressLocality: string;
  addressRegion: string;
  streetAddress: string;
  /** 營業時間：顯示用字串 + schema 用結構 */
  hoursText: string[];
  openingHours: string[];
  servesCuisine: string[];
  /** Google 商家頁——評分與評論一律導去這裡看，不在站上寫死數字 */
  googleMapsUrl: string;
  photos: Photo[];
  /** 插畫情境圖——與實拍分開放，頁面上會標示「示意圖」 */
  illustrations?: Photo[];
  /** 餐點實拍 */
  food?: Photo[];
  /** 商圈周邊實拍 */
  neighborhood?: Photo[];
  /** 菜單實拍。價格會變，頁面上一定要標拍攝月份與「以店內為準」 */
  menu?: { photos: Photo[]; asOf: string };
  /** 店家自己的官方標語（來源：店內菜單），沒有就不寫 */
  slogan?: string;
  /** Google 地圖導航連結——來吃飯的人第一件事是「怎麼去」 */
  directionsUrl: string;
  instagram?: string;
  /** 對外電話。來源必須是 Google 商家頁或店家自己印的東西，不放猜的號碼 */
  tel?: string;
  video?: { src: string; poster: string; note: string };
  /** 關於這家店：只寫可查證的事實，一段一句話 */
  about: string[];
  /** 姊妹店的 slug，用來互相連結 */
  sibling: string;
};

export const XINDIAN: Brand = {
  slug: "xindian",
  name: "欣殿萬飲",
  nameEn: "Xindian Wanyin",
  area: "高雄駁二",
  tagline: "白天早午餐，傍晚起餐酒館。同一個空間、同一座吧台，換的只是時段。",
  address: "高雄市鹽埕區大義街 2 號 C6-7",
  streetAddress: "大義街 2 號 C6-7",
  addressLocality: "鹽埕區",
  addressRegion: "高雄市",
  hoursText: ["週一至週四　10:00–01:00", "週五至週日　10:00–03:00"],
  openingHours: ["Mo-Th 10:00-01:00", "Fr-Su 10:00-03:00"],
  servesCuisine: ["早午餐", "餐酒館", "咖啡"],
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%E6%AC%A3%E6%AE%BF%E8%90%AC%E9%A3%B2+%E9%AB%98%E9%9B%84%E9%A7%81%E4%BA%8C",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=%E9%AB%98%E9%9B%84%E5%B8%82%E9%B9%BD%E5%9F%95%E5%8D%80%E5%A4%A7%E7%BE%A9%E8%A1%972%E8%99%9F",
  // 來源：店內菜單「品牌故事與社群 QR」頁（2026-08-10 實拍），店家自己印的
  instagram: "https://www.instagram.com/shindian.wanyin/",
  // 來源：Google 商家頁「欣殿萬飲 SHIN DIAN WAN YIN・BISTRO」（Jason 2026-09-06 提供截圖）
  tel: "07-5218857",
  slogan: "從晨光到微醺，收藏每一段美好時光。",
  photos: [
    {
      src: "/images/xindian/storefront.jpg",
      alt: "欣殿萬飲店外觀，招牌掛在駁二紅磚老倉庫外牆上",
      caption: "駁二大義倉庫群的老屋外牆，店招與磚牆並存",
    },
    {
      src: "/images/xindian/window-logo.jpg",
      alt: "欣殿萬飲窗面的燈箱 Logo",
      caption: "窗面燈箱，晚上從街上就看得到",
    },
    {
      src: "/images/xindian/full-view-bar.jpg",
      alt: "欣殿萬飲店內全區空景，可見吧台與座位配置",
      caption: "全區空景：吧台在中央，座位繞著配置",
    },
    {
      src: "/images/xindian/drape-ceiling.jpg",
      alt: "欣殿萬飲用餐區，天花懸掛布幔",
      caption: "布幔天花把挑高的倉庫空間拉出層次",
    },
    {
      src: "/images/xindian/sofa-area.jpg",
      alt: "欣殿萬飲沙發座位區",
      caption: "沙發區留給久坐的客人",
    },
    {
      src: "/images/xindian/bar-shelf.jpg",
      alt: "欣殿萬飲吧台，後方酒櫃陳列酒瓶，旁邊是咖啡機",
      caption: "同一座吧台：咖啡機與酒櫃並排，換時段不必換場地",
    },
    {
      src: "/images/xindian/long-table-bar.jpg",
      alt: "欣殿萬飲用餐長桌與吧台",
      caption: "長桌坐得下一群人",
    },
    {
      src: "/images/xindian/kiosk-bar.jpg",
      alt: "欣殿萬飲店內自助點餐機與吧台",
      caption: "自助點餐機設在進門處，點單直接進廚房",
    },
  ],
  food: [
    {
      src: "/images/xindian/food/beef-platter.jpg",
      alt: "晨宴牛板腱拼盤，含炒蛋、薯餅、吐司與沙拉",
      caption: "晨宴牛板腱拼盤",
    },
    {
      src: "/images/xindian/food/truffle-eggs.jpg",
      alt: "松露晨食炒蛋與時蔬",
      caption: "松露晨食炒蛋時蔬",
    },
    {
      src: "/images/xindian/food/chicken-platter.jpg",
      alt: "晨宴香煎雞腿拼盤",
      caption: "晨宴香煎雞腿拼盤",
    },
    {
      src: "/images/xindian/food/blueberry-cheesecake.jpg",
      alt: "藍莓乳酪蛋糕",
      caption: "藍莓乳酪蛋糕",
    },
  ],
  neighborhood: [
    {
      src: "/images/xindian/area/dagang-bridge.jpg",
      alt: "高雄大港橋夜景",
      caption: "大港橋就在步行範圍內",
    },
    {
      src: "/images/xindian/area/warehouse-market.jpg",
      alt: "駁二倉庫群與夜間市集",
      caption: "倉庫群晚上有市集",
    },
    {
      src: "/images/xindian/area/pier2-plaza.jpg",
      alt: "駁二廣場夜間人流",
      caption: "駁二廣場的夜間人流",
    },
  ],
  menu: {
    asOf: "2026 年 8 月",
    photos: [
      { src: "/images/xindian/menu/brunch-platter.jpg", alt: "欣殿萬飲早午餐拼盤菜單頁", caption: "早午餐拼盤（10:00–15:00）" },
      { src: "/images/xindian/menu/pasta.jpg", alt: "欣殿萬飲義大利麵菜單頁", caption: "義大利麵" },
      { src: "/images/xindian/menu/risotto.jpg", alt: "欣殿萬飲義大利燉飯菜單頁", caption: "義大利燉飯" },
      { src: "/images/xindian/menu/croissant.jpg", alt: "欣殿萬飲可頌與佛卡夏菜單頁", caption: "可頌・佛卡夏" },
      { src: "/images/xindian/menu/light-bites.jpg", alt: "欣殿萬飲輕食小點菜單頁", caption: "輕食小點" },
      { src: "/images/xindian/menu/coffee.jpg", alt: "欣殿萬飲咖啡與果汁菜單頁", caption: "咖啡與果汁" },
      { src: "/images/xindian/menu/drinks-1.jpg", alt: "欣殿萬飲調酒菜單頁一", caption: "萬飲輕酒（一）" },
      { src: "/images/xindian/menu/drinks-2.jpg", alt: "欣殿萬飲調酒菜單頁二", caption: "萬飲輕酒（二）" },
    ],
  },
  video: {
    src: "/video/xindian-pier2.mp4",
    poster: "/video/xindian-pier2-poster.jpg",
    note: "形象影片拍的是夜間餐酒時段，白天的早午餐時段見下方實拍。",
  },
  about: [
    "店開在駁二藝術特區的大義倉庫群裡，是老倉庫改的空間，紅磚外牆與店招並存。",
    "白天做早午餐，傍晚換成餐酒館。兩個時段用同一個空間、同一座吧台——咖啡機與酒櫃並排，換時段不必換場地。",
    "點餐、出單、收銀與後台紀錄兩個時段共用一套系統，交接時不必重建資料。",
    "駁二是觀光區，來的客人不只在地人。",
  ],
  sibling: "tacb",
};

export const TACB: Brand = {
  slug: "tacb",
  name: "TACB 人文餐酒",
  nameEn: "TACB",
  area: "高雄新崛江",
  tagline: "純夜間的餐酒館，19:00 開店。酒單與現場服務是這家店的底子。",
  address: "高雄市新興區林森二路 135 巷 35 號",
  streetAddress: "林森二路 135 巷 35 號",
  addressLocality: "新興區",
  addressRegion: "高雄市",
  hoursText: ["每日　19:00–02:00"],
  openingHours: ["Mo-Su 19:00-02:00"],
  servesCuisine: ["餐酒館", "調酒"],
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=TACB+%E4%BA%BA%E6%96%87%E9%A4%90%E9%85%92+%E9%AB%98%E9%9B%84",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=%E9%AB%98%E9%9B%84%E5%B8%82%E6%96%B0%E8%88%88%E5%8D%80%E6%9E%97%E6%A3%AE%E4%BA%8C%E8%B7%AF135%E5%B7%B735%E8%99%9F",
  photos: [
    {
      src: "/images/tacb/bar-counter.jpg",
      alt: "TACB 人文餐酒的吧台長桌，後方層架陳列酒瓶",
      caption: "一整條吧台長桌，後方是酒櫃",
    },
    {
      src: "/images/tacb/dining-negroni.jpg",
      alt: "TACB 用餐區，牆面壁畫與 NEGRONI 霓虹燈",
      caption: "用餐區的牆面壁畫，吧台上方掛著 NEGRONI 霓虹",
    },
    {
      src: "/images/tacb/long-table.jpg",
      alt: "TACB 店內長桌與綠色牆面壁畫",
      caption: "長桌配皮革椅，牆上是整面手繪",
    },
    {
      src: "/images/tacb/gallery-wall.jpg",
      alt: "TACB 店內綠牆、時鐘與畫框牆",
      caption: "時鐘與畫框牆，是這家店最好認的一面",
    },
    {
      src: "/images/tacb/seating-deep.jpg",
      alt: "TACB 座位區深景，可見畫框牆與吧台",
      caption: "從座位看進去，一路到吧台",
    },
  ],
  // 插畫是 2026-07-08「TACB 觀光介紹 國際旅人插畫版」的情境圖，**不是實景**，
  // 頁面上每張都壓「示意圖」標籤並在段首說明（Jason 2026-09-06：插畫可以用，
  // 但別變成圖文不實）。同批另有兩張沒收：一張有虛構店名「BISTRO LE JOIE」，
  // 一張是神燈奇幻場景，都不適合掛在真實店家頁面上。
  illustrations: [
    {
      src: "/images/tacb/illus/bar-neon.jpg",
      alt: "插畫：客人在吧台前舉杯，牆上是 TACB 霓虹字",
      caption: "吧台前的一輪敬酒",
    },
    {
      src: "/images/tacb/illus/toast-selfie.jpg",
      alt: "插畫：一群客人在綠牆與畫框牆前合照",
      caption: "畫框牆前的合照",
    },
    {
      src: "/images/tacb/illus/kaohsiung-night.jpg",
      alt: "插畫：高雄夜市街景，旅人在攤販與小店之間穿梭",
      caption: "夜裡的高雄街區",
    },
  ],
  about: [
    "店在新崛江商圈的巷子裡，離駁二約四公里。",
    "只做晚上，19:00 開店到凌晨兩點。沒有白天時段，整家店的節奏就是為夜裡設計的。",
    "與高雄駁二的欣殿萬飲是同一組團隊。",
    "這家店開得比欣殿萬飲早，累積的評價也多得多——要看客人怎麼說，Google 商家頁上都在。",
    "綠色牆面、整排時鐘與畫框牆，是這家店最好認的一面。",
  ],
  sibling: "xindian",
};

export const BRANDS: Brand[] = [XINDIAN, TACB];
