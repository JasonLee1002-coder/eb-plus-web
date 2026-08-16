"use client";

import { motion } from "framer-motion";

/**
 * 加盟支援藍圖
 *
 * 內容規範見 docs/franchise-blueprint-spec.md 與 docs/CONTENT_POLICY.md。
 * 素材來自科專二次提報計畫書，但該計畫【尚未核定】，因此：
 *  - 所有內容只描述「現況痛點」與「機制構想」，不寫成已具備的能力
 *  - 每個區塊都帶狀態標籤，不靠頁尾一行免責帶過
 *  - 禁用「不再／不會／絕不／保證／省下／多賺」等已達成或獲利暗示語氣
 *  - 文字一律留在 HTML，不烘焙進圖片（圖片會繞過 content-gate 掃描）
 */

type Status = "現況" | "構想" | "待確認";

const STATUS_STYLE: Record<Status, string> = {
  現況: "bg-white/10 text-white/70 border-white/20",
  構想: "bg-[#F5A623]/12 text-[#F5A623] border-[#F5A623]/30",
  待確認: "bg-[#C8102E]/12 text-[#e8607a] border-[#C8102E]/30",
};

const STATUS_HINT: Record<Status, string> = {
  現況: "門市目前確實遇到的情況",
  構想: "規劃中的做法，尚未上線",
  待確認: "細節需與東方美總部確認後定案",
};

function StatusTag({ s }: { s: Status }) {
  return (
    <span
      title={STATUS_HINT[s]}
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${STATUS_STYLE[s]}`}
    >
      {s}
    </span>
  );
}

/** 流程節點只用中性名詞——「自動驗收」「智慧補貨」這類名詞本身就構成能力宣稱 */
const FLOW = [
  { step: "提出需求", note: "門市列出要叫的品項" },
  { step: "系統整理", note: "彙整成結構化訂單" },
  { step: "人工確認", note: "店長過目後才送出" },
  { step: "建立訂單", note: "總部同步收到" },
  { step: "到貨核對", note: "數量與品項留下紀錄" },
];

const BLOCKS: {
  id: string;
  title: string;
  status: Status;
  lead: string;
  points: string[];
}[] = [
  {
    id: "ordering",
    title: "從電話叫貨到可追蹤訂單",
    status: "現況",
    lead: "門市現在多半以電話、LINE 或表單叫貨，總部再人工彙整。打不通要重打，數量記錯只能事後補救，過程沒有紀錄可查。",
    points: [
      "訂單有明確的建立時間與內容，事後查得到",
      "總部不必等收單才知道整體需求",
      "到貨數量與品項對不上時，留得下憑據",
    ],
  },
  {
    id: "off-peak",
    title: "非營業時段的可能性",
    status: "構想",
    lead: "當早餐尖峰結束後，既有場地與設備還有哪些可被安全運用的可能？這是我們正在和門市一起探索的問題。",
    points: [
      "不是無人商店，而是有人店在無人時段的延伸",
      "設備與場地已經在那裡，重點是能不能安全地運作",
      "實際可行的時段與品項，需要逐店評估",
    ],
  },
  {
    id: "equipment",
    title: "尖峰作業的設備協作",
    status: "待確認",
    lead: "飲料與部分餐點在尖峰時段最占人手。設備能否分擔這一段，取決於店型、動線與人力配置。",
    points: [
      "自助點餐與自動出品設備，用來分擔重複性作業",
      "設備為選配，不強制導入",
      "分攤方式、維護責任與費用計算，需與總部確認",
    ],
  },
  {
    id: "knowledge",
    title: "門市經驗如何被整理與留存",
    status: "待確認",
    lead: "段考週人變少、附近廟會人變多——這些只有店長知道的事，目前多半留在腦袋裡，換人就斷了。",
    points: [
      "作業流程可用問答方式查詢，新人不必靠人帶",
      "在地觀察可以記錄下來，成為這家店自己的判斷依據",
      "資料的存放位置與存取權限，需與總部確認後明確定義",
    ],
  },
  {
    id: "alert",
    title: "異常發生時的通知與人工處置",
    status: "待確認",
    lead: "設備故障、溫度異常、逾時未取——這些狀況若沒人發現，損失會累積。",
    points: [
      "異常依嚴重程度分級，決定通知誰、多快通知",
      "涉及食品安全的處置，一律保留人工覆核",
      "自動化的範圍與責任歸屬，需與總部及相關規範確認",
    ],
  },
];

const NOT_DOING = [
  "不強制導入任何設備或系統",
  "不取代門市現有的 POS 與 ERP，是接起來不是換掉",
  "AI 只提供建議，決定權在店長",
];

export default function FranchiseBlueprint() {
  return (
    <section id="blueprint" className="surface-raised py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#F5A623]">
            加盟支援藍圖
          </p>
          <h2 className="text-primary-token mx-auto max-w-3xl text-3xl font-bold leading-snug sm:text-4xl">
            從加盟管理，走向協助門市探索
            <br className="hidden sm:block" />
            更多營運時段與服務模式
          </h2>
        </motion.div>

        {/* 狀態圖例：就地說明，不放頁尾 */}
        <div className="mb-14 flex flex-wrap items-center justify-center gap-3 text-xs">
          {(["現況", "構想", "待確認"] as Status[]).map((s) => (
            <span key={s} className="inline-flex items-center gap-1.5">
              <StatusTag s={s} />
              <span className="text-muted-token">{STATUS_HINT[s]}</span>
            </span>
          ))}
        </div>

        {/* 叫貨流程：HTML 組成，不是圖片，讓內容閘門掃得到 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 rounded-2xl border border-white/[0.12] bg-white/[0.04] p-6 sm:p-8"
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <h3 className="text-primary-token text-lg font-bold">叫貨流程的樣子</h3>
            <StatusTag s="構想" />
          </div>
          <ol className="grid gap-3 sm:grid-cols-5">
            {FLOW.map((f, i) => (
              <li
                key={f.step}
                className="relative rounded-xl border border-white/[0.1] bg-white/[0.03] p-4"
              >
                <span className="mb-2 block text-xs font-medium text-[#F5A623]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-primary-token block text-sm font-bold">{f.step}</span>
                <span className="text-muted-token mt-1 block text-xs leading-relaxed">
                  {f.note}
                </span>
              </li>
            ))}
          </ol>
          <p className="text-muted-token mt-5 text-xs leading-relaxed">
            其中「人工確認」是刻意保留的一步：系統可以整理與建議，但送不送出由店長決定。
          </p>
        </motion.div>

        {/* 五個區塊 */}
        <div className="grid gap-5 lg:grid-cols-2">
          {BLOCKS.map((b, i) => (
            <motion.article
              key={b.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              className={`rounded-2xl border border-white/[0.12] bg-white/[0.04] p-6 sm:p-7 ${
                i === BLOCKS.length - 1 && BLOCKS.length % 2 === 1 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h3 className="text-primary-token text-lg font-bold sm:text-xl">{b.title}</h3>
                <StatusTag s={b.status} />
              </div>
              <p className="text-secondary-token mb-5 text-sm leading-relaxed sm:text-[15px]">
                {b.lead}
              </p>
              <ul className="space-y-2.5">
                {b.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#F5A623]"
                    />
                    <span className="text-muted-token text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* 誠實邊界 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mt-14 rounded-2xl border border-white/[0.12] bg-white/[0.02] p-6 sm:p-8"
        >
          <h3 className="text-primary-token mb-5 text-lg font-bold">我們不會做的事</h3>
          <ul className="grid gap-3 sm:grid-cols-3">
            {NOT_DOING.map((n) => (
              <li
                key={n}
                className="text-secondary-token rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm leading-relaxed"
              >
                {n}
              </li>
            ))}
          </ul>
        </motion.div>

        <p className="text-muted-token mt-8 text-center text-xs leading-relaxed">
          本頁描述的是規劃方向與運作機制，實際導入項目、時程與費用方案，
          <br className="hidden sm:block" />
          依各門市狀況與東方美總部確認後為準。
        </p>
      </div>
    </section>
  );
}
