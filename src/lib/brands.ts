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
  photos: { src: string; alt: string; caption: string }[];
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
  photos: [
    {
      src: "/images/xindian/storefront.jpg",
      alt: "欣殿萬飲店外觀，招牌掛在駁二紅磚老倉庫外牆上",
      caption: "駁二大義倉庫群的老屋外牆，店招與磚牆並存",
    },
    {
      src: "/images/xindian/dining-area.jpg",
      alt: "欣殿萬飲店內挑高用餐區，落地窗與植栽",
      caption: "白天的用餐區：採光、桌距與動線都以早午餐客群安排",
    },
    {
      src: "/images/xindian/bar-shelf.jpg",
      alt: "欣殿萬飲吧台，後方酒櫃陳列酒瓶，旁邊是咖啡機",
      caption: "同一座吧台：咖啡機與酒櫃並排，換時段不必換場地",
    },
    {
      src: "/images/xindian/seating.jpg",
      alt: "欣殿萬飲店內座位區",
      caption: "座位配置留了走道，出餐與客人動線分開",
    },
    {
      src: "/images/xindian/kiosk-bar.jpg",
      alt: "欣殿萬飲店內自助點餐機與吧台",
      caption: "自助點餐機設在進門處，點單直接進廚房",
    },
    {
      src: "/images/xindian/scene-b.jpg",
      alt: "欣殿萬飲店內用餐情境",
      caption: "白天時段的現場",
    },
  ],
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
  // 站上目前沒有 TACB 的實拍照。寧可不放，也不拿別家的照片充數。
  photos: [],
  about: [
    "店在新崛江商圈的巷子裡，離駁二約四公里。",
    "只做晚上，19:00 開店到凌晨兩點。沒有白天時段，整家店的節奏就是為夜裡設計的。",
    "與高雄駁二的欣殿萬飲是同一組團隊。",
    "這家店開得比欣殿萬飲早，累積的評價也多得多——要看客人怎麼說，Google 商家頁上都在。",
  ],
  sibling: "xindian",
};

export const BRANDS: Brand[] = [XINDIAN, TACB];
