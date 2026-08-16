/**
 * 店型插畫（inline SVG）
 *
 * Jason 2026-08-16 原則：
 *  「還沒有的東西先別亂畫。寧可用真實照片。」
 *  「若還沒有的東西，就改成不用實際寫實圖，改用插畫方式豐富網頁。」
 *
 * 因此本站的視覺分兩類：
 *  - 已經存在的（早午餐門市、駁二餐酒館）→ 真實照片
 *  - 還沒有的（智慧店、店中店）→ 插畫，一眼看得出是示意，不會被誤認為實景
 *
 * 用 inline SVG 而非圖檔：文字不烘焙進圖片（會繞過 content-gate），
 * 且可隨主題色變化、無額外請求。
 */

type Props = { variant: "smart" | "shop-in-shop"; className?: string };

const RED = "#C8102E";
const GOLD = "#F5A623";

export default function StoreTypeIllustration({ variant, className = "" }: Props) {
  if (variant === "smart") {
    return (
      <svg
        viewBox="0 0 320 200"
        className={className}
        role="img"
        aria-label="智慧店概念插畫：門市內設置自助點餐機與取餐櫃"
      >
        <rect width="320" height="200" fill="#151b23" />
        <line x1="0" y1="158" x2="320" y2="158" stroke="#ffffff" strokeOpacity="0.1" />
        {/* 取餐櫃 */}
        <g stroke={GOLD} strokeOpacity="0.75" fill="none" strokeWidth="1.6">
          <rect x="28" y="62" width="86" height="96" rx="4" />
          {[0, 1, 2].map((r) =>
            [0, 1].map((c) => (
              <rect key={`${r}${c}`} x={36 + c * 41} y={70 + r * 30} width="35" height="24" rx="2" />
            ))
          )}
        </g>
        {/* 自助點餐機 */}
        <g stroke={RED} strokeOpacity="0.85" fill="none" strokeWidth="1.6">
          <rect x="146" y="52" width="58" height="42" rx="3" />
          <rect x="168" y="94" width="14" height="52" />
          <rect x="152" y="146" width="46" height="12" rx="2" />
          <line x1="156" y1="64" x2="188" y2="64" strokeOpacity="0.5" />
          <line x1="156" y1="74" x2="176" y2="74" strokeOpacity="0.5" />
        </g>
        {/* 手機掃碼 */}
        <g stroke="#ffffff" strokeOpacity="0.45" fill="none" strokeWidth="1.4">
          <rect x="238" y="86" width="30" height="54" rx="5" />
          <line x1="248" y1="94" x2="258" y2="94" />
          <rect x="245" y="104" width="16" height="16" rx="1.5" strokeOpacity="0.7" />
        </g>
        {/* 連線示意 */}
        <path
          d="M205 90 Q 224 70 238 100"
          stroke={GOLD}
          strokeOpacity="0.5"
          strokeWidth="1.4"
          strokeDasharray="3 4"
          fill="none"
        />
        <circle cx="222" cy="79" r="2.4" fill={GOLD} fillOpacity="0.8" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 200"
      className={className}
      role="img"
      aria-label="店中店概念插畫：在既有賣場空間內設置小型服務據點"
    >
      <rect width="320" height="200" fill="#151b23" />
      {/* 母場域外框 */}
      <g stroke="#ffffff" strokeOpacity="0.18" fill="none" strokeWidth="1.4">
        <rect x="18" y="30" width="284" height="128" rx="5" />
        <line x1="18" y1="52" x2="302" y2="52" />
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1={70 + i * 58} y1="52" x2={70 + i * 58} y2="158" strokeDasharray="2 6" />
        ))}
      </g>
      {/* 嵌入的小型據點 */}
      <g>
        <rect
          x="118"
          y="70"
          width="84"
          height="76"
          rx="4"
          fill={RED}
          fillOpacity="0.1"
          stroke={RED}
          strokeOpacity="0.85"
          strokeWidth="1.8"
        />
        <rect
          x="130"
          y="84"
          width="60"
          height="26"
          rx="2"
          stroke={GOLD}
          strokeOpacity="0.7"
          fill="none"
          strokeWidth="1.5"
        />
        <line x1="130" y1="122" x2="190" y2="122" stroke={GOLD} strokeOpacity="0.5" strokeWidth="1.4" />
        <line x1="130" y1="132" x2="172" y2="132" stroke={GOLD} strokeOpacity="0.35" strokeWidth="1.4" />
      </g>
      {/* 人流 */}
      <g stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.4" fill="none">
        <path d="M40 170 Q 100 152 118 132" strokeDasharray="3 5" />
        <path d="M280 170 Q 220 152 202 132" strokeDasharray="3 5" />
      </g>
      <circle cx="160" cy="60" r="3" fill={GOLD} fillOpacity="0.9" />
    </svg>
  );
}
