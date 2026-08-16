"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LightboxImage } from "@/components/Lightbox";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  TiltCard,
  GlowPulse,
} from "@/components/motion";

/* ===== Brand Ticker ===== */
function BrandTicker() {
  const brands = [
    "巧沛東方美",
    "巧沛廚房",
    "東方美早餐",
    "東方美+ 科技中台",
    "AI 智慧廚房",
    "現點現做",
    "中西式早午餐",
    "中西式早午餐",
  ];
  return (
    <div className="bg-[#C8102E] py-3.5 overflow-hidden">
      <div className="ticker-track">
        {[...brands, ...brands].map((brand, i) => (
          <span
            key={i}
            className="flex-shrink-0 mx-8 text-sm font-bold text-white/90 tracking-wider whitespace-nowrap"
          >
            {brand}
            <span className="mx-8 text-white/30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  HomeShowcase                                                       */
/* ================================================================== */
export default function HomeShowcase() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroY = useTransform(heroScroll, [0, 0.5], [0, -60]);

  return (
    <>
      {/* ===== 1. HERO — Split Screen, Left-Aligned ===== */}
      <section
        ref={heroRef}
        id="hero"
        className="surface-base relative min-h-[100dvh] overflow-hidden"
      >
        {/* Full-bleed background image */}
        <Image
          src="/images/food/dongfangmei-cover.jpg"
          alt="東方美早午餐店面"
          fill
          className="object-cover object-center opacity-70"
          priority
        />
        {/* Left-to-right gradient: dark left, clear right */}
        <div className="media-scrim-inline absolute inset-0" />
        <div className="media-scrim-block absolute inset-0" />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 flex min-h-[100dvh] items-center"
        >
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-xl py-28">
              {/* Brand strip */}
              <motion.p
                className="mb-5 text-sm font-medium tracking-[0.22em] text-[#F5A623] uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                科技賦能智慧餐飲
              </motion.p>

              {/* Headline */}
              <motion.h1
                className="mb-6 text-7xl font-black leading-none tracking-tighter text-white lg:text-[7rem] xl:text-[8rem]"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                東方美<span className="text-[#F5A623]">+</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                className="text-secondary-token mb-10 max-w-md text-lg leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                AI 驅動的智慧餐飲生態圈，從供應鏈到餐桌全方位數位升級。
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col gap-3 sm:flex-row"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <GlowPulse className="rounded-full self-start sm:self-auto">
                  <a
                    href="#contact"
                    className="inline-block rounded-full bg-[#C8102E] px-8 py-3.5 font-bold text-white transition-colors hover:bg-red-700"
                  >
                    加盟諮詢
                  </a>
                </GlowPulse>
                <a
                  href="#about"
                  className="self-start rounded-full border border-white/25 px-8 py-3.5 font-bold text-white transition-all hover:border-white/50 hover:bg-white/5 sm:self-auto"
                >
                  了解更多
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== 2. BRAND TICKER ===== */}
      <BrandTicker />

      {/* ===== 3. ABOUT ===== */}
      <section id="about" className="bg-[#111111] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[55fr_45fr] items-start">

            {/* Left: Heading + description + features */}
            <div>
              <ScrollReveal>
                <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                  關於{" "}
                  <span className="text-[#C8102E]">東方美+</span>
                </h2>
                <p className="mb-12 max-w-lg text-lg leading-relaxed text-gray-400">
                  東方美集團長期深耕台灣早餐與餐飲服務市場，旗下擁有巧沛東方美、巧沛廚房、東方美早餐等品牌。東方美+ 在傳統餐飲的根基上，注入 AI、IoT 與數據分析，探索門市數位化的新做法。
                </p>
              </ScrollReveal>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8" staggerDelay={0.1}>
                {[
                  {
                    title: "AI 數位化轉型",
                    desc: "訂餐點餐與 AI 副店長，協助門市把日常作業數位化。實際導入內容與費用方案請與團隊確認。",
                    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
                  },
                  {
                    title: "FreshLink 冷鏈配送",
                    desc: "專業車隊從倉庫直送多家門市，先進導航確保食材新鮮，供應不中斷。",
                    icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h-.375a3 3 0 013-3h.75m0 0h10.5m-10.5 0V6.375a1.125 1.125 0 011.125-1.125h6.75c.621 0 1.125.504 1.125 1.125v7.875m0 0h.375a3 3 0 013 3v.375M17.25 14.25h.375",
                  },
                  {
                    title: "加盟＋直營雙軌",
                    desc: "加盟店提供完整教育訓練與物料供應；直營店確保品質標準，雙軌並行穩定成長。",
                    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z",
                  },
                  {
                    title: "全時段經營模式",
                    desc: "早上 5:30 即開始營業，週末延長至下午 1 點。現點現做，適合各種用餐場合。",
                    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
                  },
                ].map((f) => (
                  <StaggerItem key={f.title}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C8102E]/15">
                        <svg className="h-5 w-5 text-[#C8102E]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-1 font-bold text-white">{f.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-500">{f.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Right: Stats + Images */}
            <ScrollReveal delay={0.15}>
              {/* Stats */}
              <div className="mb-8 grid grid-cols-3 gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-white">萬華</div>
                  <div className="mt-1 text-xs text-gray-500">起家的地方</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">
                    <AnimatedCounter value={39} className="inline" />
                    <span className="text-lg text-white/40"> 年</span>
                  </div>
                  <div className="mt-1 text-xs text-gray-500">品牌歷史</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">
                    <AnimatedCounter value={200} suffix="+" className="inline" />
                  </div>
                  <div className="mt-1 text-xs text-gray-500">餐點品項</div>
                </div>
              </div>

              {/* Images: 1 wide top + 2 bottom */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative col-span-2 h-52 overflow-hidden rounded-2xl">
                  <LightboxImage
                    src="/images/food/dongfangmei-cover.jpg"
                    alt="巧沛東方美早午餐店面"
                    fill
                    className="relative h-full w-full"
                  />
                </div>
                <div className="relative h-36 overflow-hidden rounded-2xl">
                  <LightboxImage
                    src="/images/brands/eb-breakfast-yt.jpg"
                    alt="東方美早餐經典餐點"
                    fill
                    className="relative h-full w-full"
                  />
                </div>
                <div className="relative h-36 overflow-hidden rounded-2xl">
                  <LightboxImage
                    src="/images/scenes/pier2-01.jpg"
                    alt="東方美+ 駁二智慧門市"
                    fill
                    className="relative h-full w-full"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 4. ECOSYSTEM VISION ===== */}
      <section className="relative overflow-hidden bg-[#0a0a0a] py-0">
        <div className="relative z-10">
          {/* Contrast heading */}
          <div className="pt-24 pb-12 sm:pt-32 sm:pb-16">
            <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
              <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
                <motion.span
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-white/80"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  有傳統
                </motion.span>
                <motion.span
                  className="text-2xl sm:text-3xl text-white/25 font-light"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  ×
                </motion.span>
                <motion.span
                  className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#C8102E] to-[#F5A623] bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  有未來
                </motion.span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                智慧餐飲整合服務
              </h2>
              <p className="text-lg sm:text-xl text-white/45 max-w-2xl mx-auto leading-relaxed">
                傳承東方美早餐的美味根基，結合 AI 科技與數位系統，探索下一代餐飲服務的做法。
              </p>
            </ScrollReveal>
          </div>

          {/* Ecosystem image */}
          <ScrollReveal delay={0.2}>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-red-500/10">
                <LightboxImage
                  src="/images/scenes/eb-ecosystem-vision.png"
                  alt="東方美EB+ 智慧餐飲整合服務生態系"
                  width={1920}
                  height={1080}
                  quality={90}
                  className="w-full"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/20" />
              </div>
            </div>
          </ScrollReveal>

          {/* 6 Ecosystem pillars with SVG icons (no emoji) */}
          <div className="pt-16 pb-8 sm:pt-20 sm:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4" staggerDelay={0.08}>
              {[
                {
                  icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
                  title: "原物料供應",
                  desc: "新鮮食材 · 穩定供應",
                },
                {
                  icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h-.375a3 3 0 013-3h.75m0 0h10.5m-10.5 0V6.375a1.125 1.125 0 011.125-1.125h6.75c.621 0 1.125.504 1.125 1.125v7.875m0 0h.375a3 3 0 013 3v.375M17.25 14.25h.375",
                  title: "物流配送",
                  desc: "冷鏈直達 · 全台覆蓋",
                },
                {
                  icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 9.75h3",
                  title: "QR Code 點餐",
                  desc: "智取櫃取餐 · 販賣機",
                },
                {
                  icon: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z",
                  title: "智慧系統平台",
                  desc: "POS · 訂餐 · AI 分析",
                },
                {
                  icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
                  title: "AI 副店長",
                  desc: "智能庫存 · 決策支援",
                },
                {
                  icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
                  title: "餐飲設備",
                  desc: "尖端設備 · 高效火力",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 text-center transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.05]"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative z-10">
                      <div className="mb-3 flex justify-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#C8102E]/15">
                          <svg className="h-5 w-5 text-[#C8102E]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                          </svg>
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-white/35">{item.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* CTA */}
          <div className="pb-24 sm:pb-32 text-center">
            <ScrollReveal>
              <GlowPulse>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C8102E] to-red-500 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:shadow-red-500/35"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  加入 EB+ 生態圈
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </motion.a>
              </GlowPulse>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 5. EDITORIAL PHOTO BREAK ===== */}
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <Image
          src="/images/menu/menu-01.jpeg"
          alt="東方美早午餐精選餐點"
          fill
          className="object-cover scale-105"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/65" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <ScrollReveal className="text-center px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-2xl">
              美味，是我們的根基
            </h2>
            <p className="text-white/65 text-lg sm:text-xl max-w-lg mx-auto">
              現點現做，超過 200 品項，從經典早餐到創意午餐
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 6. BRANDS ===== */}
      <section id="brands" className="bg-[#0d0d0d] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-14">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">品牌版圖</h2>
            <p className="mt-3 text-lg text-gray-500">美好的一天就在東方美</p>
          </ScrollReveal>

          {/* Asymmetric brand grid: large + 3 stacked */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {/* Featured flagship - left large */}
            <TiltCard className="md:col-span-3">
              <article className="group relative h-80 overflow-hidden rounded-2xl md:h-full md:min-h-[420px]">
                <Image
                  src="/images/food/dongfangmei-cover.jpg"
                  alt="巧沛東方美"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="mb-2 inline-block rounded-full bg-[#C8102E] px-3 py-1 text-xs font-bold text-white">旗艦品牌</div>
                  <h3 className="text-2xl font-black text-white">巧沛東方美</h3>
                  <p className="mt-2 text-sm text-white/60 max-w-xs">東方美集團旗艦早午餐品牌，中西式餐點應有盡有。</p>
                </div>
              </article>
            </TiltCard>

            {/* Right column: 3 brands */}
            <div className="flex flex-col gap-4 md:col-span-2">
              {[
                {
                  name: "巧沛廚房",
                  desc: "多元料理與健康餐點，提供主廚特餐、各式湯品與創意料理。",
                  image: null,
                  gradient: "from-amber-700 to-red-700",
                },
                {
                  name: "東方美早餐",
                  desc: "經典早餐連鎖，早上 5:30 開始營業，週末延長至下午 1 點。",
                  image: "/images/brands/eb-breakfast-yt.jpg",
                  gradient: null,
                },
                {
                  name: "東方美+ 科技中台",
                  desc: "AI 驅動的供應鏈與數據平台，整合 POS、智慧廚房與自動補貨。",
                  image: "/images/scenes/pier2-01.jpg",
                  gradient: null,
                },
              ].map((brand) => (
                <TiltCard key={brand.name} className="flex-1">
                  <article className="group relative h-36 overflow-hidden rounded-2xl">
                    {brand.image ? (
                      <Image
                        src={brand.image}
                        alt={brand.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className={`h-full w-full bg-gradient-to-br ${brand.gradient}`} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5">
                      <h3 className="font-bold text-white text-sm">{brand.name}</h3>
                      <p className="mt-0.5 text-xs text-white/50 line-clamp-1">{brand.desc}</p>
                    </div>
                  </article>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. MENU ===== */}
      <section id="menu" className="relative overflow-hidden bg-[#050a15] py-20 text-white sm:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/4 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/4 rounded-full blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-3">人氣餐點菜單</h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              東方美早午餐 — 超過 200 品項，從 30 元起就能享用，早上 5:30 營業至下午
            </p>
          </ScrollReveal>

          {/* Masonry gallery */}
          <ScrollReveal delay={0.1} className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] sm:auto-rows-[220px]">
              <motion.div
                className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <LightboxImage
                  src="/images/menu/menu-01.jpeg"
                  alt="東方美早午餐精選套餐"
                  fill
                  className="relative h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 pointer-events-none">
                  <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">招牌推薦</span>
                  <p className="text-white font-bold text-lg drop-shadow-lg">經典早午餐全餐</p>
                </div>
              </motion.div>
              {[
                { src: "/images/menu/menu-full-02.jpg", alt: "漢堡蛋餅水餃全餐", label: "漢堡 · 蛋餅 · 水餃" },
                { src: "/images/menu/menu-04.jpeg", alt: "三明治鐵板麵", label: "三明治 · 鐵板麵" },
                { src: "/images/menu/menu-03.jpeg", alt: "漢堡義大利麵", label: "漢堡 · 義大利麵" },
                { src: "/images/menu/menu-05.jpeg", alt: "貝果焗烤薯條", label: "貝果 · 焗烤 · 炸物" },
              ].map((img) => (
                <motion.div
                  key={img.src}
                  className="relative rounded-2xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <LightboxImage src={img.src} alt={img.alt} fill className="relative h-full w-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-white text-sm font-bold drop-shadow-lg pointer-events-none">{img.label}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Set Meals */}
          <ScrollReveal delay={0.1}>
            <div className="mb-12">
              <h3 className="text-lg font-bold text-white mb-6">超值套餐組合</h3>
              <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: "美式早餐", price: 105, desc: "厚牛堡/炸豬排＋培根＋德腸＋丹麥", hot: true },
                  { name: "優質早餐", price: 95, desc: "里肌豬排＋培根＋德腸＋丹麥" },
                  { name: "中式早餐", price: 85, desc: "原味蛋餅＋蘿蔔糕×1＋蝦捲×2" },
                  { name: "營養早餐", price: 75, desc: "大火腿＋培根＋熱狗×2＋丹麥" },
                  { name: "老闆特餐", price: 155, desc: "主餐四選一＋德式香腸＋培根＋蛋", hot: true },
                  { name: "主廚特餐", price: 155, desc: "主餐四選一＋配料四選" },
                  { name: "元氣麵特餐", price: 145, desc: "麵類四選一＋塔香肉蛋＋泡菜肉蛋" },
                  { name: "寶貝特餐", price: 135, desc: "主餐＋醬燒＋玉米散蛋＋丹麥" },
                ].map((meal, i) => (
                  <StaggerItem key={i}>
                    <div className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-4 hover:bg-white/[0.07] transition-all duration-200 group relative overflow-hidden h-full">
                      {meal.hot && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">人氣</span>
                      )}
                      <div className="text-2xl font-black text-[#C8102E] mb-1">
                        ${meal.price}
                        <span className="text-xs text-white/25 font-normal ml-1">元</span>
                      </div>
                      <div className="font-bold text-white mb-1 text-sm group-hover:text-red-300 transition-colors">{meal.name}</div>
                      <div className="text-xs text-white/35 leading-relaxed">{meal.desc}</div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>

          {/* Categories */}
          <ScrollReveal delay={0.2}>
            <div className="mb-12">
              <h3 className="text-lg font-bold text-white mb-6">餐點分類</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { cat: "漢堡 / 吐司", items: "厚牛堡、炸豬排、鱈魚排...", range: "$40-95" },
                  { cat: "軟法堡", items: "西西里雞腿、香煎雞腿...", range: "$75-95" },
                  { cat: "總匯三明治", items: "牛肉起司、炸豬排起司...", range: "$70-145" },
                  { cat: "蛋餅 / 河粉", items: "牛柳、里肌、泡菜、鮪魚...", range: "$30-70" },
                  { cat: "鐵板麵", items: "黑胡椒、蘑菇、義式肉醬...", range: "$55" },
                  { cat: "炒蛋黃麵", items: "牛柳刀削、蝦醬炒蛋黃...", range: "$85-95" },
                  { cat: "飯類", items: "咖哩飯、塔香飯、宮保飯...", range: "$40-95" },
                  { cat: "專業咖啡", items: "義式拿鐵、鴛鴦咖啡...", range: "$35-65" },
                  { cat: "鮮果特調", items: "紅心芭樂、愛文芒果...", range: "$35-65" },
                  { cat: "湯品 / 粥品", items: "野菇濃湯、芋頭瘦肉粥...", range: "$40-55" },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-4 hover:bg-white/[0.05] hover:border-red-500/15 transition-all duration-200"
                  >
                    <div className="font-bold text-white text-sm mb-1">{c.cat}</div>
                    <div className="text-xs text-white/25 mb-2 leading-relaxed">{c.items}</div>
                    <div className="text-[#C8102E] text-sm font-bold">{c.range}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Combo Add-on */}
          <ScrollReveal delay={0.3}>
            <div className="bg-gradient-to-r from-red-500/8 to-amber-500/8 border border-white/[0.07] rounded-2xl p-6 sm:p-8">
              <h3 className="text-base font-bold text-white mb-4">主餐加價組合 — 可搭配所有餐點</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "A 組合", add: "+40", content: "中冰紅茶＋熱狗", color: "text-red-400" },
                  { label: "B 組合", add: "+50", content: "中冰紅茶＋薯條", color: "text-amber-400" },
                  { label: "C 組合", add: "+50", content: "中冰紅茶＋雞塊", color: "text-orange-400" },
                ].map((combo, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/[0.04] rounded-xl p-4">
                    <div className={`text-2xl font-black ${combo.color}`}>{combo.add}</div>
                    <div>
                      <div className="font-bold text-white text-sm">{combo.label}</div>
                      <div className="text-xs text-white/35">{combo.content}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-white/25 text-center">
                搭配任何飲品折價 $20 · 套餐系列除外 · 更換飲料補差額
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <a
                href="#franchise"
                className="inline-block rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-3 font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(200,16,46,0.3)] hover:scale-[1.02]"
              >
                加盟開店，擁有完整菜單
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 8. FRANCHISE ===== */}
      <section id="franchise" className="bg-[#111111] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-14">
            <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">加盟方案</h2>
            <p className="text-lg text-gray-500">四大店型，滿足不同場景與商圈需求</p>
          </ScrollReveal>

          {/* Split layout: left types list, right Pier-2 case study */}
          <div className="grid gap-12 lg:grid-cols-[40fr_60fr]">

            {/* Left: 4 franchise types as compact rows */}
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {[
                {
                  type: "早午餐",
                  desc: "經典東方美早午餐模式，中西式餐點，適合社區與學區商圈。",
                  highlight: "多家門市實績",
                  icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
                },
                {
                  type: "餐酒館",
                  desc: "日夜雙時段營運，白天咖啡輕食、夜晚餐酒體驗，最大化坪效。",
                  highlight: "駁二示範店",
                  icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 16.5m14.8-1.2l.268 1.572a.75.75 0 01-.766.872H4.698a.75.75 0 01-.766-.872l.268-1.572",
                },
                {
                  type: "智慧店",
                  desc: "AI 自動化少人力模式，智慧取餐櫃、自助點餐、自動繳費一站完成。",
                  highlight: "人力成本大幅降低",
                  icon: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z",
                },
                {
                  type: "店中店",
                  desc: "在現有商場、超市、交通樞紐內設點，低坪數高坪效快速展店。",
                  highlight: "快速展店",
                  icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.994 2.994 0 00.209 1.126",
                },
              ].map((f) => (
                <StaggerItem key={f.type}>
                  <div className="flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 transition-all hover:border-white/[0.12] hover:bg-white/[0.05]">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C8102E]/15">
                      <svg className="h-5 w-5 text-[#C8102E]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1.5">
                        <h3 className="font-bold text-white">{f.type}</h3>
                        <span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-bold text-[#C8102E]">{f.highlight}</span>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-500">{f.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Right: Pier-2 case study */}
            <ScrollReveal delay={0.15}>
              <div className="overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03]">
                {/* Images 2x2 */}
                <div className="grid grid-cols-2 gap-1">
                  {[
                    { src: "/images/scenes/pier2-01.jpg", alt: "東方美駁二示範店外觀" },
                    { src: "/images/scenes/smart-cabinet-01.jpg", alt: "欣殿萬飲智慧櫃子" },
                    { src: "/images/scenes/pier2-03.jpg", alt: "東方美駁二店內空間" },
                    { src: "/images/scenes/smart-cabinet-02.jpg", alt: "欣殿萬飲智慧櫃子白天實景" },
                  ].map((img) => (
                    <div key={img.src} className="relative h-48 overflow-hidden">
                      <LightboxImage src={img.src} alt={img.alt} fill className="relative h-full w-full" />
                    </div>
                  ))}
                </div>

                {/* Info */}
                <div className="p-7">
                  <div className="mb-3 inline-block rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-400">
                    餐酒館示範案例
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white lg:text-2xl">
                    高雄駁二特區 — 欣殿萬飲
                  </h3>
                  <p className="mb-5 leading-relaxed text-gray-400 text-sm">
                    與欣殿萬飲策略合作，在高雄駁二藝術特區打造
                    <strong className="text-white">「早午餐 + 餐酒館」日夜雙時段</strong>
                    營運模式，結合東方美供應鏈優勢與 8 年餐酒館實戰經驗，打造高雄首創複合式體驗空間。
                  </p>

                  <div className="space-y-3 mb-5">
                    <div className="flex items-start gap-3 rounded-xl bg-amber-500/8 border border-amber-500/15 p-3.5">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-400">AM</div>
                      <div>
                        <div className="text-sm font-bold text-amber-300">8:00-19:00 餐飲咖啡 × 文創空間</div>
                        <div className="text-xs text-amber-500/70">親子/遊客/IG 客 — 咖啡、輕食、伴手禮</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl bg-purple-500/8 border border-purple-500/15 p-3.5">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-400">PM</div>
                      <div>
                        <div className="text-sm font-bold text-purple-300">19:00-03:00 餐酒館 × 夜經濟入口</div>
                        <div className="text-xs text-purple-500/70">上班族/企業客 — 調酒、餐點、包場活動</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 rounded-xl bg-white/[0.03] p-4">
                    <div className="text-center">
                      <div className="text-lg font-black text-[#C8102E]">駁二特區</div>
                      <div className="text-xs text-gray-500">高雄文創聚落</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-black text-[#C8102E]">雙時段</div>
                      <div className="text-xs text-gray-500">最大化坪效</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-black text-[#C8102E]">第一排</div>
                      <div className="text-xs text-gray-500">駁二步行街</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 9. TECHNOLOGY ===== */}
      <section id="technology" className="relative overflow-hidden bg-[#050a15] py-20 text-white sm:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 h-[400px] w-[400px] rounded-full bg-[#C8102E]/8 blur-[150px]" />
          <div className="absolute -bottom-40 left-0 h-[350px] w-[350px] rounded-full bg-[#F5A623]/8 blur-[130px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header with 1 eyebrow (our only eyebrow on the page) */}
          <ScrollReveal className="mb-14">
            <p className="mb-3 text-xs font-mono tracking-[0.25em] uppercase text-[#C8102E]">Smart Restaurant Ecosystem</p>
            <h2 className="text-3xl font-bold sm:text-4xl mb-3">智慧餐飲生態圈</h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              以 AI 為核心，從供應鏈到餐盤的全方位賦能。不只賣系統，提供的是開店的捷徑。
            </p>
          </ScrollReveal>

          {/* Asymmetric bento: 1 wide featured + 3 equal */}
          <div className="mb-16">
            <StaggerContainer className="grid gap-4 grid-cols-1 md:grid-cols-3" staggerDelay={0.1}>
              {/* Featured wide card */}
              <StaggerItem className="md:col-span-2">
                <motion.article
                  className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-[#C8102E]/10 to-transparent p-7 h-full"
                  whileHover={{ borderColor: "rgba(200,16,46,0.4)" }}
                >
                  <h4 className="mb-1 text-xl font-black text-white">數位營收終端</h4>
                  <p className="mb-5 text-sm text-white/45">讓客人隨處都能點</p>
                  <ul className="space-y-2.5">
                    {["LINE 智慧語音點餐", "多功能雲端 POS 系統", "行動支付與會員整合"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C8102E]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </StaggerItem>

              {/* 3 normal cards */}
              {[
                {
                  pillar: "AI 數位店長",
                  subtitle: "讓 AI 幫您做決策",
                  borderColor: "border-amber-500/20",
                  items: ["分店 AI：自動調度訂單", "總部 AI：營運預測", "異常自動偵測告警"],
                },
                {
                  pillar: "自動化智慧硬體",
                  subtitle: "解決缺工與取餐問題",
                  borderColor: "border-blue-500/20",
                  items: ["智慧自取櫃：零接觸取餐", "KDS 出餐管理螢幕", "AI 影像品質控管"],
                },
                {
                  pillar: "戰略供應鏈",
                  subtitle: "最強大的後勤盾牌",
                  borderColor: "border-purple-500/20",
                  items: ["優質原物料穩定供應", "全台高效物流配送網", "數位化報貨庫存管理"],
                },
              ].map((p) => (
                <StaggerItem key={p.pillar}>
                  <motion.article
                    className={`group rounded-2xl border ${p.borderColor} bg-white/[0.03] p-6 h-full`}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 280 }}
                  >
                    <h4 className="mb-1 text-lg font-black text-white">{p.pillar}</h4>
                    <p className="mb-4 text-xs text-white/40">{p.subtitle}</p>
                    <ul className="space-y-2">
                      {p.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Control platform */}
          <ScrollReveal>
            <div className="mb-16 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 sm:p-10">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">東方美資訊管控中台，您的數位大腦</h3>
                <p className="text-gray-500 text-sm">把門市每天的實際運作，變成看得懂的數字</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-3 mb-8">
                {[
                  { title: "智慧決策中樞", tag: "AI Agent Layer", desc: "透過 AI 進行補貨預測，減少憑印象抓量造成的報廢與缺料" },
                  { title: "標準化介接技術", tag: "Digital Gateway", desc: "無縫串接外送平台、支付系統與硬體，像樂高一樣擴充" },
                  { title: "營運大數據", tag: "Data Lake", desc: "記錄每一筆交易與客戶喜好，將資料變現金" },
                ].map((layer) => (
                  <div key={layer.title} className="rounded-xl bg-white/[0.04] border border-white/[0.05] p-5">
                    <h4 className="font-bold text-white mb-1">{layer.title}</h4>
                    <p className="text-xs text-[#C8102E] font-mono mb-2">{layer.tag}</p>
                    <p className="text-sm text-gray-400">{layer.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3 rounded-xl bg-white/[0.02] border border-white/[0.05] p-5">
                {[
                  { title: "資安監控", desc: "保護營業秘密與會員資料" },
                  { title: "備援系統", desc: "網路波動，店務依然穩定如常" },
                  { title: "專業 SI 團隊", desc: "技術專家全程支援" },
                ].map((s) => (
                  <div key={s.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-xs text-green-400">✓</span>
                    <div>
                      <div className="text-sm font-bold text-gray-200">{s.title}</div>
                      <div className="text-xs text-gray-500">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Why choose */}
          <StaggerContainer className="grid gap-5 sm:grid-cols-3" staggerDelay={0.12}>
            {[
              { title: "快速複製", desc: "支援多店模式，從一家店輕鬆變連鎖集團", stat: "多家門市" },
              { title: "降低門檻", desc: "整合設備、物流、原物料，不需要懂 IT 也能經營智慧餐廳", stat: "軟體零成本" },
              { title: "精實人力", desc: "透過 AI 代理人與智慧櫃，緩解缺工壓力，提升人效", stat: "緩解缺工" },
            ].map((s) => (
              <StaggerItem key={s.title}>
                <motion.article
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6"
                  whileHover={{ borderColor: "rgba(200,16,46,0.25)" }}
                >
                  <h4 className="mb-2 text-lg font-bold text-white">{s.title}</h4>
                  <p className="mb-4 text-sm text-gray-400">{s.desc}</p>
                  <div className="inline-block rounded-full border border-[#C8102E]/25 bg-[#C8102E]/8 px-3 py-1 text-sm font-bold text-[#C8102E]">
                    {s.stat}
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== 10. AI KITCHEN ===== */}
      <section id="ai-kitchen" className="relative overflow-hidden bg-[#080e1c] py-20 text-white sm:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#C8102E]/6 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#F5A623]/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">AI 智慧廚房</h2>
            <p className="text-lg text-gray-400">不只自動化，更具備思考能力的未來廚房</p>
          </ScrollReveal>

          <StaggerContainer className="mb-14 grid gap-7 md:grid-cols-3" staggerDelay={0.15}>
            {[
              {
                title: "智慧需求預測",
                desc: "AI 分析歷史銷售數據、即時天氣、商圈活動，精準預測次日物料需求，降低食材浪費。",
                icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
              },
              {
                title: "動態生產排程",
                desc: "AI 即時調度煎台、炸鍋、飲料站負載量，自動優化出餐順序，外送單與現場單智慧併發。",
                icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
              },
              {
                title: "IoT 設備監控",
                desc: "全廚房設備聯網，即時監控烤箱溫度、冰箱能耗、設備健康度，預防故障確保品質一致。",
                icon: "M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
              },
            ].map((f) => (
              <StaggerItem key={f.title}>
                <motion.article
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8"
                  whileHover={{ borderColor: "rgba(200,16,46,0.3)", y: -4 }}
                  transition={{ type: "spring", stiffness: 280 }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8102E]/15">
                    <svg className="h-6 w-6 text-[#C8102E]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{f.title}</h3>
                  <p className="leading-relaxed text-gray-400 text-sm">{f.desc}</p>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Metrics */}
          <StaggerContainer className="grid gap-5 sm:grid-cols-3" staggerDelay={0.15}>
            {[
              { display: "即時", label: "庫存可見度", desc: "系統掌握門市需求，減少缺貨與囤貨" },
              { display: "數據", label: "採購決策", desc: "以實際銷售紀錄取代憑印象備料" },
              { display: "預防性", label: "設備維護", desc: "IoT 回報異常，故障前先處理" },
            ].map((m) => (
              <StaggerItem key={m.label}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 text-center">
                  <div className="mb-1 text-4xl font-black text-[#C8102E]">{m.display}</div>
                  <div className="mb-1 text-lg font-bold text-white">{m.label}</div>
                  <div className="text-sm text-gray-500">{m.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== 11. SUPPLY CHAIN ===== */}
      <section id="supply-chain" className="bg-[#0a0a0a] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-14 text-center">
            <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">全鏈路供應鏈</h2>
            <p className="text-lg text-gray-500">從銷售到採購的智慧迴圈，用實際銷售紀錄推估備料</p>
          </ScrollReveal>

          {/* Horizontal flow: no numbered labels */}
          <StaggerContainer className="mb-12 grid gap-0 md:grid-cols-3" staggerDelay={0.2}>
            {[
              { title: "實時銷售數據", desc: "每一筆 QR 點餐訂單即時上傳雲端，建立完整銷售數據庫。", accent: "border-t-[#C8102E]" },
              { title: "AI 需求預估", desc: "分析歷史趨勢，預測未來一週需求，考量季節與天氣因素。", accent: "border-t-[#F5A623]" },
              { title: "自動補貨決策", desc: "低於安全庫存自動下單，優化車隊路徑，精準配送零積壓。", accent: "border-t-green-500" },
            ].map((s, i) => (
              <StaggerItem key={s.title} className="relative">
                <div className={`border-t-2 ${s.accent} bg-white/[0.03] border-x border-b border-white/[0.06] ${i === 0 ? "rounded-l-2xl" : ""} ${i === 2 ? "rounded-r-2xl" : ""} p-7`}>
                  {/* Arrow connector (desktop only) */}
                  {i < 2 && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                      <svg className="w-3 h-3 text-white/50" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  )}
                  <h3 className="mb-3 text-lg font-bold text-white">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal>
            <div className="rounded-2xl bg-gradient-to-r from-[#C8102E] to-red-700 p-8 text-center text-white">
              <p className="text-xl font-bold">
                自有配送車隊，這是純軟體公司無法跨越的實體門檻
              </p>
              <p className="mt-2 text-red-200 text-sm">
                從倉庫到連鎖門市，確保物資與資訊流同步到貨
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 12. FOOD DIVIDER 2 ===== */}
      <section className="relative h-[35vh] sm:h-[45vh] overflow-hidden">
        <Image
          src="/images/menu/menu-03.jpeg"
          alt="東方美經典漢堡義大利麵套餐"
          fill
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-black/45 to-black/65" />
        <div className="relative z-10 flex h-full items-end justify-center pb-14">
          <ScrollReveal className="text-center px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-xl">
              準備好加入東方美 EB+ 了嗎？
            </h3>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 13. CONTACT ===== */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#0a0f1a] py-20 text-white sm:py-28"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#C8102E]/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#F5A623]/6 rounded-full blur-[130px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                加入東方美+，讓科技為你的美味服務
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mb-10 text-lg text-gray-400">
                實現高產出、低人力、精準供應的未來
              </p>
            </ScrollReveal>

            {/* Process: horizontal text flow, no numbered circles */}
            <ScrollReveal delay={0.2}>
              <div className="mb-14 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-0">
                {[
                  { title: "預約諮詢", desc: "了解您的店面狀況" },
                  { title: "現場評估", desc: "規劃動線與設備" },
                  { title: "系統導入", desc: "教育訓練與上線協助" },
                  { title: "正式營運", desc: "持續調整與支援" },
                ].map((r, i) => (
                  <div key={r.title} className="flex items-center gap-2">
                    <div className="text-center px-4">
                      <div className="text-sm font-bold text-white">{r.title}</div>
                      <div className="text-xs text-gray-500">{r.desc}</div>
                    </div>
                    {i < 3 && (
                      <svg className="hidden sm:block w-4 h-4 text-white/20 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 backdrop-blur-md">
              <h3 className="mb-6 text-center text-xl font-bold">立即諮詢轉型方案</h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm text-gray-400">姓名</label>
                    <input
                      type="text"
                      placeholder="您的姓名"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-gray-600 transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-gray-400">電話</label>
                    <input
                      type="tel"
                      placeholder="聯絡電話"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-gray-600 transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm text-gray-400">Email</label>
                    <input
                      type="email"
                      placeholder="電子信箱"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-gray-600 transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-gray-400">店型</label>
                    <select className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-2.5 text-white transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]">
                      <option value="">請選擇加盟店型</option>
                      <option value="brunch">早午餐</option>
                      <option value="bistro">餐酒館</option>
                      <option value="smart">智慧店（少人力）</option>
                      <option value="shop-in-shop">店中店</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-gray-400">需求說明</label>
                  <textarea
                    rows={4}
                    placeholder="請簡述您的需求或想了解的內容..."
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-gray-600 transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]"
                  />
                </div>
                <GlowPulse color="rgba(200,16,46,0.5)" className="rounded-full">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#C8102E] py-3.5 text-lg font-bold text-white transition-colors hover:bg-red-700"
                  >
                    立即諮詢
                  </button>
                </GlowPulse>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
