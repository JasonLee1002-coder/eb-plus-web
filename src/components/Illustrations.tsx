/**
 * 區塊插畫庫（inline SVG 線稿）
 *
 * Jason 2026-08-16：「『從加盟管理，走向協助門市探索…』還有『智慧餐飲生態圈』
 * 這兩段，都需要補充大量插圖，看起來不會艱澀生硬。」
 *
 * 沿用 StoreTypeIllustration 的原則：
 *  - 已經存在的東西用真實照片；還沒有的用插畫，一眼看得出是示意
 *  - inline SVG 而非圖檔：文字不烘焙進圖片（會繞過 content-gate）、
 *    可隨主題色變化、零額外請求
 *  - 純線稿不填色塊，跟深底卡片融在一起，不搶文字
 *  - SVG 內不寫任何文字與數字，說明一律留在 HTML
 */

const RED = "#C8102E";
const GOLD = "#F5A623";
const W = "#ffffff";

type P = { className?: string };

/** 卡片用插畫共用外框：160×100，透明底 */
function Frame({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 160 100"
      className={className}
      role="img"
      aria-label={label}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

/* ================= 智慧餐飲生態圈 ================= */

/** 數位營收終端：手機掃碼 → POS → 出單 */
export function IllusTerminal({ className }: P) {
  return (
    <Frame label="數位營收終端示意：顧客用手機掃碼下單，訂單進入 POS 後印出單據" className={className}>
      <g stroke={W} strokeOpacity="0.4" strokeWidth="1.5">
        <rect x="14" y="26" width="30" height="52" rx="5" />
        <line x1="24" y1="34" x2="34" y2="34" />
      </g>
      <g stroke={GOLD} strokeOpacity="0.8" strokeWidth="1.5">
        <rect x="22" y="44" width="14" height="14" rx="1.5" />
        <path d="M25 47h3M32 47h1M25 55h1M31 55h3" strokeOpacity="0.55" />
      </g>
      <path d="M48 50q14-20 26-2" stroke={GOLD} strokeOpacity="0.55" strokeWidth="1.4" strokeDasharray="3 3" />
      <g stroke={RED} strokeOpacity="0.85" strokeWidth="1.5">
        <rect x="76" y="30" width="42" height="30" rx="3" />
        <path d="M84 40h20M84 47h13" strokeOpacity="0.5" />
        <path d="M90 60v10h14V60" />
        <rect x="84" y="70" width="26" height="8" rx="1.5" />
      </g>
      <g stroke={W} strokeOpacity="0.35" strokeWidth="1.4">
        <path d="M124 34h20v30l-5-4-5 4-5-4-5 4z" />
        <path d="M130 42h9M130 49h6" strokeOpacity="0.7" />
      </g>
      <line x1="6" y1="86" x2="154" y2="86" stroke={W} strokeOpacity="0.1" strokeWidth="1" />
    </Frame>
  );
}

/** AI 數位店長：節點推論 → 建議與異常 */
export function IllusBrain({ className }: P) {
  const nodes = [
    [42, 32], [66, 22], [66, 46], [90, 34], [42, 60], [66, 70],
  ];
  return (
    <Frame label="AI 數位店長示意：多筆門市資料匯入推論後，輸出建議與異常提醒" className={className}>
      <g stroke={GOLD} strokeOpacity="0.4" strokeWidth="1.3">
        <path d="M42 32 66 22M42 32 66 46M66 22 90 34M66 46 90 34M42 60 66 46M42 60 66 70M66 70 90 34" />
      </g>
      {nodes.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3.2" stroke={GOLD} strokeOpacity="0.85" strokeWidth="1.4" />
      ))}
      <g stroke={W} strokeOpacity="0.3" strokeWidth="1.4">
        <path d="M14 26h16M14 42h16M14 58h16M14 74h16" />
      </g>
      <g stroke={RED} strokeOpacity="0.8" strokeWidth="1.5">
        <path d="M108 24h38v26h-24l-8 8v-8h-6z" />
        <path d="M116 33h20M116 41h13" strokeOpacity="0.5" />
      </g>
      <g stroke={GOLD} strokeOpacity="0.75" strokeWidth="1.5">
        <path d="M120 62v14M120 82v1.5" />
        <path d="M112 76h16l-8-14z" strokeOpacity="0.55" />
      </g>
    </Frame>
  );
}

/** 自動化智慧硬體：智取櫃 + 出餐螢幕 */
export function IllusLocker({ className }: P) {
  return (
    <Frame label="自動化智慧硬體示意：門口智取櫃其中一格已開啟，廚房出餐螢幕列出待製作項目" className={className}>
      <g stroke={GOLD} strokeOpacity="0.8" strokeWidth="1.5">
        <rect x="14" y="18" width="58" height="66" rx="3" />
        {[0, 1, 2].map((r) =>
          [0, 1].map((c) => (
            <rect key={`${r}${c}`} x={20 + c * 27} y={25 + r * 20} width="23" height="16" rx="1.5" strokeOpacity="0.55" />
          ))
        )}
        <path d="M47 45l12-6v16l-12-6z" strokeOpacity="0.9" />
      </g>
      <g stroke={RED} strokeOpacity="0.85" strokeWidth="1.5">
        <rect x="88" y="22" width="58" height="40" rx="3" />
        <path d="M96 32h26M96 40h34M96 48h20" strokeOpacity="0.5" />
        <path d="M112 62v10M100 72h24" />
      </g>
      <path d="M74 46h10" stroke={W} strokeOpacity="0.35" strokeWidth="1.4" strokeDasharray="3 3" />
      <line x1="6" y1="88" x2="154" y2="88" stroke={W} strokeOpacity="0.1" strokeWidth="1" />
    </Frame>
  );
}

/** 戰略供應鏈：倉儲 → 冷鏈車 → 門市 */
export function IllusSupply({ className }: P) {
  return (
    <Frame label="戰略供應鏈示意：中央倉儲備料後由冷鏈車配送到門市" className={className}>
      <g stroke={W} strokeOpacity="0.4" strokeWidth="1.5">
        <path d="M10 44l14-12 14 12v34H10z" />
        <rect x="17" y="58" width="14" height="20" strokeOpacity="0.6" />
      </g>
      <g stroke={RED} strokeOpacity="0.85" strokeWidth="1.5">
        <path d="M58 46h32v24H58z" />
        <path d="M90 54h14l8 10v6H90z" />
        <circle cx="70" cy="76" r="5" />
        <circle cx="103" cy="76" r="5" />
        <path d="M64 54h18M64 61h12" strokeOpacity="0.45" />
      </g>
      <path d="M118 70h10" stroke={GOLD} strokeOpacity="0.6" strokeWidth="1.4" strokeDasharray="3 3" />
      <g stroke={GOLD} strokeOpacity="0.8" strokeWidth="1.5">
        <path d="M130 40h22v38h-22z" />
        <path d="M130 50h22" strokeOpacity="0.5" />
        <path d="M137 66h8v12h-8z" strokeOpacity="0.6" />
      </g>
      <line x1="6" y1="86" x2="154" y2="86" stroke={W} strokeOpacity="0.1" strokeWidth="1" />
    </Frame>
  );
}

/** 中台橫幅：門市 → 中台 → 決策輸出（640×170） */
export function IllusHub({ className }: P) {
  const stores = [22, 68, 114, 160];
  const outs = [18, 82, 146];
  return (
    <svg
      viewBox="0 0 640 200"
      className={className}
      role="img"
      aria-label="資訊管控中台示意：各門市的交易與設備資料匯入中台，整理後輸出為戰情、異常提醒與訂單"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {stores.map((y) => (
        <g key={y}>
          <g stroke={W} strokeOpacity="0.4" strokeWidth="1.5">
            <path d={`M30 ${y}h38v26H30z`} />
            <path d={`M30 ${y}l9-10h20l9 10`} strokeOpacity="0.55" />
            <path d={`M43 ${y + 26}v-12h12v12`} strokeOpacity="0.35" />
          </g>
          <path
            d={`M68 ${y + 13}C136 ${y + 13} 160 100 226 100`}
            stroke={GOLD}
            strokeOpacity="0.32"
            strokeWidth="1.3"
            strokeDasharray="4 4"
          />
        </g>
      ))}
      <g stroke={RED} strokeOpacity="0.85" strokeWidth="1.6">
        <rect x="228" y="42" width="184" height="116" rx="9" />
        <rect x="250" y="64" width="140" height="24" rx="3" strokeOpacity="0.5" />
        <rect x="250" y="96" width="140" height="24" rx="3" strokeOpacity="0.5" />
        <rect x="250" y="128" width="140" height="14" rx="3" strokeOpacity="0.32" />
      </g>
      <g stroke={GOLD} strokeOpacity="0.7" strokeWidth="1.4">
        <circle cx="268" cy="76" r="3.6" />
        <circle cx="268" cy="108" r="3.6" />
        <path d="M282 76h84M282 108h60" strokeOpacity="0.28" />
      </g>
      {outs.map((y) => (
        <path
          key={y}
          d={`M412 100C478 100 500 ${y + 22} 556 ${y + 22}`}
          stroke={RED}
          strokeOpacity="0.38"
          strokeWidth="1.3"
          strokeDasharray="4 4"
        />
      ))}
      {/* 戰情儀表 */}
      <g stroke={W} strokeOpacity="0.45" strokeWidth="1.5">
        <rect x="556" y="18" width="56" height="42" rx="3" />
        <path d="M564 52l11-15 9 9 12-17" strokeOpacity="0.75" />
      </g>
      {/* 異常提醒 */}
      <g stroke={GOLD} strokeOpacity="0.8" strokeWidth="1.5">
        <path d="M584 96v14M584 118v2" />
        <path d="M568 112h32l-16-26z" strokeOpacity="0.6" />
      </g>
      {/* 訂單 */}
      <g stroke={RED} strokeOpacity="0.75" strokeWidth="1.5">
        <path d="M562 146h44v34l-7-5-7 5-8-5-7 5-8-5z" strokeOpacity="0.7" />
        <path d="M572 158h24M572 168h15" strokeOpacity="0.5" />
      </g>
    </svg>
  );
}

/**
 * 中台直式版（手機用）
 *
 * 640×200 的橫幅在 390px 寬的螢幕會被壓到看不清楚（實測 iPhone 13 截圖），
 * 所以小螢幕改成上→下的直式流程，內容與橫幅一致。
 */
export function IllusHubStack({ className }: P) {
  const cols = [46, 118, 190, 262];
  return (
    <svg
      viewBox="0 0 308 340"
      className={className}
      role="img"
      aria-label="資訊管控中台示意：各門市的交易與設備資料匯入中台，整理後輸出為戰情、異常提醒與訂單"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {cols.map((x) => (
        <g key={x}>
          <g stroke={W} strokeOpacity="0.4" strokeWidth="1.5">
            <path d={`M${x - 16} 24h32v24h-32z`} />
            <path d={`M${x - 16} 24l8-10h16l8 10`} strokeOpacity="0.55" />
          </g>
          <path
            d={`M${x} 48C${x} 82 154 84 154 108`}
            stroke={GOLD}
            strokeOpacity="0.32"
            strokeWidth="1.3"
            strokeDasharray="4 4"
          />
        </g>
      ))}
      <g stroke={RED} strokeOpacity="0.85" strokeWidth="1.6">
        <rect x="46" y="110" width="216" height="94" rx="9" />
        <rect x="66" y="130" width="176" height="22" rx="3" strokeOpacity="0.5" />
        <rect x="66" y="160" width="176" height="22" rx="3" strokeOpacity="0.5" />
      </g>
      <g stroke={GOLD} strokeOpacity="0.7" strokeWidth="1.4">
        <circle cx="82" cy="141" r="3.4" />
        <circle cx="82" cy="171" r="3.4" />
      </g>
      {cols.slice(0, 3).map((x, i) => (
        <path
          key={x}
          d={`M154 204C154 232 ${64 + i * 90} 234 ${64 + i * 90} 258`}
          stroke={RED}
          strokeOpacity="0.38"
          strokeWidth="1.3"
          strokeDasharray="4 4"
        />
      ))}
      <g stroke={W} strokeOpacity="0.45" strokeWidth="1.5">
        <rect x="38" y="258" width="52" height="38" rx="3" />
        <path d="M46 288l10-14 8 8 11-15" strokeOpacity="0.75" />
      </g>
      <g stroke={GOLD} strokeOpacity="0.8" strokeWidth="1.5">
        <path d="M154 276v14M154 298v2" />
        <path d="M138 290h32l-16-26z" strokeOpacity="0.6" />
      </g>
      <g stroke={RED} strokeOpacity="0.75" strokeWidth="1.5">
        <path d="M222 258h44v42l-7-5-7 5-8-5-7 5-8-5z" strokeOpacity="0.7" />
        <path d="M232 272h24M232 284h15" strokeOpacity="0.5" />
      </g>
    </svg>
  );
}

/* ---- 三張小圖：快速複製 / 降低門檻 / 精實人力 ---- */

export function IllusReplicate({ className }: P) {
  return (
    <Frame label="快速複製示意：一家店的做法可以複製到多家門市" className={className}>
      <g stroke={RED} strokeOpacity="0.85" strokeWidth="1.6">
        <path d="M18 44h34v34H18z" />
        <path d="M18 44l17-16 17 16" />
      </g>
      <path d="M58 60h14" stroke={GOLD} strokeOpacity="0.6" strokeWidth="1.4" strokeDasharray="3 3" />
      {[80, 112].map((x, i) => (
        <g key={x} stroke={W} strokeOpacity={0.42 - i * 0.12} strokeWidth="1.5">
          <path d={`M${x} 50h28v28h-28z`} />
          <path d={`M${x} 50l14-13 14 13`} />
        </g>
      ))}
      <line x1="6" y1="86" x2="154" y2="86" stroke={W} strokeOpacity="0.1" strokeWidth="1" />
    </Frame>
  );
}

export function IllusThreshold({ className }: P) {
  return (
    <Frame label="降低門檻示意：設備、物流與原物料整合成模組，逐階往上接" className={className}>
      <g stroke={W} strokeOpacity="0.35" strokeWidth="1.5">
        <path d="M14 82h30V64h30V46h30V30h30" />
      </g>
      <g stroke={GOLD} strokeOpacity="0.8" strokeWidth="1.5">
        <rect x="20" y="66" width="18" height="14" rx="2" />
        <rect x="50" y="48" width="18" height="14" rx="2" />
        <rect x="80" y="30" width="18" height="14" rx="2" />
      </g>
      <g stroke={RED} strokeOpacity="0.85" strokeWidth="1.6">
        <circle cx="124" cy="24" r="6" />
        <path d="M124 30v16M116 36h16M118 60l6-14 6 14" />
      </g>
      <line x1="6" y1="86" x2="154" y2="86" stroke={W} strokeOpacity="0.1" strokeWidth="1" />
    </Frame>
  );
}

export function IllusManpower({ className }: P) {
  return (
    <Frame label="精實人力示意：重複性作業交給設備，人力回到需要判斷的環節" className={className}>
      <g stroke={RED} strokeOpacity="0.85" strokeWidth="1.6">
        <circle cx="40" cy="30" r="7" />
        <path d="M40 38v20M28 46h24M30 78l10-20 10 20" />
      </g>
      <path d="M62 50h18" stroke={GOLD} strokeOpacity="0.55" strokeWidth="1.4" strokeDasharray="3 3" />
      <g stroke={GOLD} strokeOpacity="0.8" strokeWidth="1.5">
        <rect x="90" y="26" width="34" height="52" rx="3" />
        <rect x="97" y="34" width="20" height="14" rx="2" strokeOpacity="0.55" />
        <path d="M97 58h20M97 66h13" strokeOpacity="0.45" />
      </g>
      <g stroke={W} strokeOpacity="0.35" strokeWidth="1.4">
        <circle cx="140" cy="34" r="10" />
        <path d="M140 28v6l4 3" />
      </g>
      <line x1="6" y1="86" x2="154" y2="86" stroke={W} strokeOpacity="0.1" strokeWidth="1" />
    </Frame>
  );
}

/* ================= 加盟支援藍圖 ================= */

/** 從電話叫貨到可追蹤訂單 */
export function IllusOrdering({ className }: P) {
  return (
    <Frame label="叫貨方式示意：從電話口頭交辦，改成有時間與內容紀錄的訂單" className={className}>
      <g stroke={W} strokeOpacity="0.3" strokeWidth="1.5">
        <path d="M16 34c0 22 12 34 30 40l6-9-9-7-6 4c-6-4-10-9-12-16l6-5-5-10-8 3z" />
        <path d="M14 26l40 46" stroke={RED} strokeOpacity="0.5" />
      </g>
      <g stroke={GOLD} strokeOpacity="0.85" strokeWidth="1.5">
        <rect x="76" y="20" width="52" height="62" rx="3" />
        <path d="M86 34h32M86 46h32M86 58h22" strokeOpacity="0.45" />
        <path d="M132 30l6 6 10-12" stroke={RED} strokeOpacity="0.8" />
      </g>
      <g stroke={GOLD} strokeOpacity="0.6" strokeWidth="1.4">
        <circle cx="86" cy="34" r="2.6" />
        <circle cx="86" cy="46" r="2.6" />
        <circle cx="86" cy="58" r="2.6" />
      </g>
      <line x1="6" y1="88" x2="154" y2="88" stroke={W} strokeOpacity="0.1" strokeWidth="1" />
    </Frame>
  );
}

/** 非營業時段的可能性 */
export function IllusOffPeak({ className }: P) {
  return (
    <Frame label="非營業時段示意：白天營業之外，同一組空間在夜間仍能承接服務" className={className}>
      <g stroke={GOLD} strokeOpacity="0.75" strokeWidth="1.5">
        <path d="M20 60a34 34 0 0 1 68 0" strokeDasharray="4 4" strokeOpacity="0.45" />
        <circle cx="34" cy="40" r="6" />
        <path d="M34 28v-5M22 40h-5M25 31l-3-3" strokeOpacity="0.55" />
      </g>
      <g stroke={W} strokeOpacity="0.42" strokeWidth="1.5">
        <path d="M80 32a9 9 0 1 0 8 13 10 10 0 0 1-8-13z" />
      </g>
      <g stroke={RED} strokeOpacity="0.85" strokeWidth="1.6">
        <path d="M104 40h44v42h-44z" />
        <path d="M104 40l22-14 22 14" />
        <rect x="118" y="58" width="16" height="24" rx="1.5" strokeOpacity="0.55" />
      </g>
      <path d="M126 26v-8" stroke={GOLD} strokeOpacity="0.6" strokeWidth="1.4" />
      <line x1="6" y1="88" x2="154" y2="88" stroke={W} strokeOpacity="0.1" strokeWidth="1" />
    </Frame>
  );
}

/** 尖峰作業的設備協作 */
export function IllusEquipment({ className }: P) {
  return (
    <Frame label="設備協作示意：飲料與部分餐點由設備出品，人力留給需要判斷的事" className={className}>
      <g stroke={GOLD} strokeOpacity="0.8" strokeWidth="1.5">
        <rect x="16" y="22" width="34" height="40" rx="3" />
        <path d="M24 34h18M24 42h12" strokeOpacity="0.45" />
        <path d="M31 62v6M26 68h14" />
        <path d="M28 74h10l-2 10h-6z" strokeOpacity="0.6" />
      </g>
      <g stroke={RED} strokeOpacity="0.85" strokeWidth="1.6">
        <rect x="66" y="30" width="40" height="30" rx="3" />
        <path d="M74 44a12 12 0 0 0 24 0z" strokeOpacity="0.6" />
        <path d="M80 60v14M72 74h26" />
      </g>
      <g stroke={W} strokeOpacity="0.4" strokeWidth="1.5">
        <circle cx="132" cy="34" r="6" />
        <path d="M132 42v18M124 48h16M124 78l8-18 8 18" />
      </g>
      <path d="M110 50h12" stroke={GOLD} strokeOpacity="0.5" strokeWidth="1.4" strokeDasharray="3 3" />
      <line x1="6" y1="88" x2="154" y2="88" stroke={W} strokeOpacity="0.1" strokeWidth="1" />
    </Frame>
  );
}

/** 門市經驗如何被整理與留存 */
export function IllusKnowledge({ className }: P) {
  return (
    <Frame label="經驗留存示意：店長的在地觀察記錄下來，新人可以用問答方式查詢" className={className}>
      <g stroke={W} strokeOpacity="0.4" strokeWidth="1.5">
        <circle cx="34" cy="32" r="7" />
        <path d="M34 40v16M24 48h20M26 76l8-20 8 20" />
      </g>
      <path d="M50 44q14-10 24 0" stroke={GOLD} strokeOpacity="0.55" strokeWidth="1.4" strokeDasharray="3 3" />
      <g stroke={GOLD} strokeOpacity="0.8" strokeWidth="1.5">
        <path d="M78 20h40v18H98l-8 8v-8h-12z" />
        <path d="M86 28h22" strokeOpacity="0.45" />
        <path d="M78 52h40v18H98l-8 8v-8H78z" strokeOpacity="0.55" />
        <path d="M86 60h16" strokeOpacity="0.4" />
      </g>
      <g stroke={RED} strokeOpacity="0.8" strokeWidth="1.5">
        <path d="M128 30h22v46h-22z" />
        <path d="M128 42h22M128 54h22M128 66h22" strokeOpacity="0.4" />
      </g>
      <line x1="6" y1="88" x2="154" y2="88" stroke={W} strokeOpacity="0.1" strokeWidth="1" />
    </Frame>
  );
}

/** 異常發生時的通知與人工處置 */
export function IllusAlert({ className }: P) {
  return (
    <Frame label="異常處置示意：設備或溫度異常依嚴重程度分級通知，食安相關保留人工覆核" className={className}>
      <g stroke={GOLD} strokeOpacity="0.85" strokeWidth="1.6">
        <path d="M22 60c0-12 6-22 16-22s16 10 16 22l5 8H17z" />
        <path d="M33 68a5 5 0 0 0 10 0" strokeOpacity="0.6" />
        <path d="M38 38v-6" />
      </g>
      <g stroke={RED} strokeOpacity="0.75" strokeWidth="1.5">
        <path d="M72 72v-8M84 72v-18M96 72v-28" />
      </g>
      <g stroke={W} strokeOpacity="0.4" strokeWidth="1.5">
        <path d="M118 24h14v34a7 7 0 1 1-14 0V24z" />
        <path d="M125 34v22" strokeOpacity="0.6" />
        <circle cx="125" cy="62" r="4" strokeOpacity="0.7" />
      </g>
      <path d="M142 44l6 6 8-12" stroke={GOLD} strokeOpacity="0.7" strokeWidth="1.6" />
      <line x1="6" y1="88" x2="154" y2="88" stroke={W} strokeOpacity="0.1" strokeWidth="1" />
    </Frame>
  );
}

/* ---- 叫貨流程五個小圖示（28×28） ---- */

function Step({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 28 28"
      className="h-7 w-7"
      role="img"
      aria-label={label}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      {children}
    </svg>
  );
}

export const FLOW_ICONS = [
  <Step key="1" label="門市列出要叫的品項">
    <g stroke={GOLD} strokeOpacity="0.85">
      <rect x="6" y="4" width="16" height="20" rx="2" />
      <path d="M10 10h8M10 14h8M10 18h5" strokeOpacity="0.5" />
    </g>
  </Step>,
  <Step key="2" label="系統彙整成結構化訂單">
    <g stroke={GOLD} strokeOpacity="0.85">
      <path d="M5 8h6M5 14h6M5 20h6" strokeOpacity="0.5" />
      <path d="M11 8q6 0 6 6M11 14h6M11 20q6 0 6-6" strokeOpacity="0.4" />
      <rect x="17" y="10" width="6" height="8" rx="1.5" />
    </g>
  </Step>,
  <Step key="3" label="店長過目後才送出">
    <g stroke={RED} strokeOpacity="0.9">
      <circle cx="11" cy="9" r="3.5" />
      <path d="M5 22c0-4 3-6 6-6s6 2 6 6" />
      <path d="M17 12l3 3 5-6" strokeOpacity="0.85" />
    </g>
  </Step>,
  <Step key="4" label="總部同步收到訂單">
    <g stroke={GOLD} strokeOpacity="0.85">
      <path d="M5 12l9-7 9 7v11H5z" />
      <path d="M11 23v-6h6v6" strokeOpacity="0.5" />
    </g>
  </Step>,
  <Step key="5" label="到貨數量與品項留下紀錄">
    <g stroke={GOLD} strokeOpacity="0.85">
      <path d="M5 10h14v13H5z" />
      <path d="M5 10l3-5h8l3 5" strokeOpacity="0.5" />
      <path d="M18 18l3 3 4-6" stroke={RED} strokeOpacity="0.85" />
    </g>
  </Step>,
];
