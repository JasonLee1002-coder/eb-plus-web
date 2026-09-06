"use client";

import { useState, useEffect } from "react";
import { BRANDS } from "@/lib/brands";

/**
 * 一律用絕對路徑錨點（/#xxx），不可以只寫 #xxx。
 *
 * 2026-08-29 實測發現的災情：原本全部寫成同頁錨點，在首頁沒事，
 * 但 83 篇文章與文章列表頁沒有這些區塊，於是頁首整排導覽、紅色「加盟諮詢」
 * 按鈕、連 LOGO 按了都完全不動——從 Google 進來的訪客一條路都走不出去。
 * 寫成 /#xxx 後：首頁仍是同文件捲動（不會重新載入），子頁則正確導回首頁。
 */
/**
 * 「品牌版圖」改成有下拉的項目（Jason 2026-09-06：「我找不到」）。
 *
 * 為什麼原本找不到：#brands 落在 24,000px 高的首頁 30% 處，就算從導覽列跳過去，
 * 兩家餐酒館的卡還在第二排、視窗外；而上排四個品牌都不能點，
 * 訪客會先學到「這些卡不能點」，就不會去試下面兩張。
 * 從頁首直接給路徑，是唯一每一頁都看得到的入口。
 */
const navLinks = [
  { label: "關於我們", href: "/#about" },
  { label: "品牌版圖", href: "/#brands", children: BRANDS },
  { label: "人氣菜單", href: "/#menu" },
  { label: "品牌故事", href: "/#story" },
  { label: "加盟主的一天", href: "/#day" },
  { label: "加盟支援", href: "/#blueprint" },
  { label: "餐飲型態", href: "/#formats" },
  { label: "加盟方案", href: "/#franchise" },
  { label: "科技賦能", href: "/#technology" },
  { label: "AI 智慧廚房", href: "/#ai-kitchen" },
  { label: "聯絡我們", href: "/#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <a href="/#hero" className="flex-shrink-0">
          <span className="text-xl font-black tracking-tight text-white">
            東方美<span className="text-[#F5A623]">+</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(link.href)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white xl:px-3"
                >
                  {link.label}
                  <svg className="h-3 w-3 opacity-60" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </a>

                {openMenu === link.href && (
                  <div className="absolute left-0 top-full w-64 pt-2">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111113] shadow-xl shadow-black/40">
                      {link.children.map((b) => (
                        <a
                          key={b.slug}
                          href={`/brands/${b.slug}`}
                          className="block border-b border-white/[0.06] px-4 py-3 transition-colors last:border-b-0 hover:bg-white/[0.06]"
                        >
                          <span className="block text-sm font-medium text-white">{b.name}</span>
                          <span className="mt-0.5 block text-xs text-white/40">{b.area}</span>
                        </a>
                      ))}
                      <a
                        href={link.href}
                        className="block bg-white/[0.03] px-4 py-2.5 text-xs text-white/45 transition-colors hover:text-white/70"
                      >
                        看全部品牌
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white xl:px-3"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <a
          href="/#contact"
          className="hidden flex-shrink-0 whitespace-nowrap rounded-full bg-[#C8102E] px-5 py-2 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-red-500/20 hover:shadow-md lg:inline-block"
        >
          加盟諮詢
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white/70 hover:bg-white/10 hover:text-white lg:hidden transition-colors"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-white/[0.08] bg-black/95 backdrop-blur-md px-6 pb-5 pt-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
                {/* 手機不做收合，直接把兩家店攤開——多一次點擊就少一半的人找得到 */}
                {link.children?.map((b) => (
                  <a
                    key={b.slug}
                    href={`/brands/${b.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="ml-3 block rounded-lg border-l border-white/10 px-3 py-2 pl-4 text-sm text-white/50 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {b.name}
                    <span className="ml-2 text-xs text-white/30">{b.area}</span>
                  </a>
                ))}
              </div>
            ))}
            <a
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-full bg-[#C8102E] px-5 py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-red-700"
            >
              加盟諮詢
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
