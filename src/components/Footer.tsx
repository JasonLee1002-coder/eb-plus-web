/**
 * 同 Header：一律絕對路徑錨點，否則在文章頁按了不會動。
 *
 * 2026-08-29 移除「成功案例」（href="#success"）——這個區塊從來不存在，
 * 而且站上也沒有可具名的成功案例（虛構證言已於 8/16 全數清除，
 * 依內容政策不得補寫）。連結指向不存在的東西比沒有連結更糟。
 */
const footerLinks = [
  { label: "關於我們", href: "/#about" },
  { label: "品牌版圖", href: "/#brands" },
  { label: "人氣菜單", href: "/#menu" },
  { label: "加盟支援", href: "/#blueprint" },
  { label: "加盟方案", href: "/#franchise" },
  { label: "科技賦能", href: "/#technology" },
  { label: "AI 智慧廚房", href: "/#ai-kitchen" },
  { label: "部落格", href: "/seo" },
  { label: "聯絡我們", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Left: Logo, tagline & SEO description */}
          <div className="space-y-4">
            <a href="/#hero" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                東方美+
              </span>
            </a>
            <p className="text-sm font-medium text-gray-400">
              科技賦能的智慧餐飲集團
            </p>
            <p className="text-sm leading-relaxed text-gray-500">
              東方美+ 為東方美集團相關合作團隊，旗下擁有巧沛東方美、巧沛廚房、東方美早餐等品牌，透過原物料供應鏈與
              AI
              智慧餐飲科技，為連鎖門市提供營運支援，協助傳統餐飲數位轉型。
            </p>
          </div>

          {/* Middle: Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              快速連結
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-red-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right: Contact info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              聯絡資訊
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <a href="/#contact" className="transition-colors hover:text-red-400">
                  加盟與合作洽詢
                </a>
              </li>
            </ul>
            {/*
              2026-08-29 移除頁尾的 Email 與地址：
                · contact@ebplus.tw —— ebplus.tw 這個網域當天實查仍可註冊，
                  代表信箱不存在、寄出必退；更麻煩的是網域一旦被他人搶註，
                  寄給東方美的客戶信會直接進到對方手上。
                · 台北市XX區XX路XX號 —— 佔位符沒換掉就上線了。
              兩者都由總部確認後才放回來（總部資訊回填表 v3 第二節）。
              寧可少一行，不要掛假的。
            */}
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              總部正式電話、地址與對外信箱確認中，確認後會在這裡與
              <a href="/#franchise" className="text-gray-400 underline underline-offset-2 hover:text-red-400">
                總部與後勤
              </a>
              一併公布。
            </p>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-gray-500">
            &copy;{" "}
            <a href="/seo" className="text-gray-500 hover:text-gray-400 transition-colors">
              2026 東方美集團
            </a>{" "}
            Eastern Beauty Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
