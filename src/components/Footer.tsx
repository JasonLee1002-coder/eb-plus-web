const footerLinks = [
  { label: "關於我們", href: "#about" },
  { label: "品牌版圖", href: "#brands" },
  { label: "人氣菜單", href: "#menu" },
  { label: "加盟方案", href: "#franchise" },
  { label: "科技賦能", href: "#technology" },
  { label: "AI 智慧廚房", href: "#ai-kitchen" },
  { label: "成功案例", href: "#success" },
  { label: "聯絡我們", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Left: Logo, tagline & SEO description */}
          <div className="space-y-4">
            <a href="#" className="inline-block">
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
              智慧餐飲科技，為全台超過 970
              家門市提供高效營運支援，持續引領餐飲業數位轉型。
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
                <a
                  href="tel:+886-2-XXXX-XXXX"
                  className="transition-colors hover:text-red-400"
                >
                  (02) XXXX-XXXX
                </a>
              </li>
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:contact@ebplus.tw"
                  className="transition-colors hover:text-red-400"
                >
                  contact@ebplus.tw
                </a>
              </li>
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
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span>台北市XX區XX路XX號</span>
              </li>
            </ul>
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
