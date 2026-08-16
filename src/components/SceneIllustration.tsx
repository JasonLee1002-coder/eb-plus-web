import Image from "next/image";

/**
 * 情境示意圖
 *
 * Jason 2026-08-16：「反而我希望妳用示意圖，不要用線稿，代表這是我們未來目標。」
 * → 前一版是 inline SVG 線稿，看起來像草稿。改成有畫面、有溫度的等角情境插畫，
 *   讓加盟主看得出「以後會長這樣」。
 *
 * 仍受既有兩條原則約束：
 *  1. Jason 8/16「還沒有的東西不用寫實圖，改用插畫」→ 全部是插畫風，一眼不會誤認成實景照片
 *  2. 本站鐵則：文字不烘焙進圖片（圖片會繞過 content-gate）→ 生成 prompt 明令禁止任何字元，
 *     產出後逐張放大目視驗過。首輪 supply 曾把「BREAKFAST」畫進招牌、hub 畫出亂碼假字，
 *     已重生修掉（見 scripts/gen_section_illustrations.py 的紀錄）
 *
 * 素材：scripts/gen_section_illustrations.py 產生 → scripts/fit_illustrations.py 去邊裁切
 *       → public/images/illus/*.webp（原圖留在 public 外的 assets/illus-raw）
 *
 * 2026-08-16 第二輪：Codex 以東方美經營層角度稽核後，五張依共識重畫——
 *   alert     原本畫店長半夜在床上被叫醒 → 反而強化「24 小時待命」焦慮，
 *             也跟「總部會支援」相反。改成總部值班窗口與店長同時收到，由人確認。
 *   hub       原本與 brain 都在畫「門市資料匯集」，訊息重複。改成總部戰情室：
 *             營運／採購／物流三個角色看同一份狀況，各自行動——這才是經營層要看的中台價值。
 *   brain     原本像店員操控 AI 大腦，責任不明。改成系統提建議、店長按確認。
 *   manpower  原本機械手臂＋輸送帶像工廠，不像台灣早餐店，且引發「取代人」聯想。
 *   threshold 原本畫「門檻一階一階降下」是成效暗示。改成模組依店型組合。
 */

export type SceneKey =
  | "ordering"
  | "off-peak"
  | "equipment"
  | "knowledge"
  | "alert"
  | "terminal"
  | "brain"
  | "locker"
  | "supply"
  | "hub"
  | "replicate"
  | "threshold"
  | "manpower"
  | "day-0500"
  | "day-0730"
  | "day-1100"
  | "day-1400"
  | "day-2100";

/** alt 一律以「示意」開頭，讓讀者與搜尋引擎都知道這是概念圖不是實景 */
const ALT: Record<SceneKey, string> = {
  ordering: "示意圖：店長用平板送出叫貨單，訂單同步到總部，桌邊的舊電話已經用不到",
  "off-peak": "示意圖：同一家店，白天內用滿座，夜間由智取櫃與點餐機繼續服務",
  equipment: "示意圖：尖峰時段由點餐機與自動出品設備分擔重複作業，人力回到面對顧客",
  knowledge: "示意圖：資深店長的在地經驗被整理成可查詢的紀錄，新人用手機就問得到",
  alert: "示意圖：夜間設備異常同時通知總部值班窗口與店長，由人確認後才處置",
  terminal: "示意圖：顧客用手機掃碼下單，訂單直接進入 POS 並印出單據",
  brain: "示意圖：系統提出建議、標記異常，由店長逐項確認後才生效",
  locker: "示意圖：門口智取櫃其中一格開啟供顧客自取，店內出餐螢幕同步顯示",
  supply: "示意圖：冷鏈配送車從中央倉出發，把食材直送到門市",
  hub: "示意圖：總部營運、採購、物流三個角色看同一份門市狀況，各自採取行動",
  replicate: "示意圖：一家店驗證可行的做法，複製到其他門市",
  threshold: "示意圖：設備、物流與原物料先做成可選模組，依店型組合，不必一項一項自己談",
  manpower: "示意圖：飲品站由顧客自助操作，店員回到備餐與接待顧客",
  "day-0500": "示意圖：清晨開店，鐵門半開，店長在備料台上確認系統整理好的叫貨單",
  "day-0730": "示意圖：早餐尖峰，顧客在點餐機下單，店員從容遞出餐點，廚房螢幕同步顯示",
  "day-1100": "示意圖：配送車到店，店長拿手機掃碼點收，數量與品項當場核對",
  "day-1400": "示意圖：午後離峰，顧客自行操作飲品設備，店長坐下來喘口氣",
  "day-2100": "示意圖：打烊拉下鐵門後，門口取餐櫃仍亮著供顧客掃碼自取，摘要送到店長家裡",
};

type Props = {
  scene: SceneKey;
  /** 外框比例。預設 4:3；橫幅型（中台）用 wide */
  ratio?: "card" | "wide";
  className?: string;
  priority?: boolean;
};

export default function SceneIllustration({
  scene,
  ratio = "card",
  className = "",
  priority = false,
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#101720] ${
        ratio === "wide" ? "aspect-[2/1]" : "aspect-[4/3]"
      } ${className}`}
    >
      <Image
        src={`/images/illus/${scene}.webp`}
        alt={ALT[scene]}
        fill
        sizes={ratio === "wide" ? "(max-width: 768px) 100vw, 900px" : "(max-width: 768px) 100vw, 450px"}
        /* 圖已由 scripts/fit_illustrations.py 去邊裁成 4:3 / 2:1，
           所以用 cover 剛好填滿，不會有 contain 的左右色差留白。 */
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
