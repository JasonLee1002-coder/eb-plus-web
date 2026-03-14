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
  FloatingElement,
  TiltCard,
  GlowPulse,
  ParallaxSection,
  TextReveal,
} from "@/components/motion";

/* ===== Floating Particles ===== */
function HeroParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 6,
    opacity: Math.random() * 0.5 + 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

/* ===== Brand Ticker Marquee ===== */
function BrandTicker() {
  const brands = [
    "巧沛東方美",
    "巧沛廚房",
    "東方美早餐",
    "東方美+ 科技中台",
    "AI 智慧廚房",
    "現點現做",
    "970+ 門市",
    "4.89 星好評",
    "30 元起",
  ];

  return (
    <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 py-4 overflow-hidden">
      <div className="ticker-track">
        {[...brands, ...brands].map((brand, i) => (
          <span
            key={i}
            className="flex-shrink-0 mx-8 text-sm font-bold text-white/90 tracking-wider whitespace-nowrap"
          >
            {brand}
            <span className="mx-8 text-white/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  HomeShowcase — animated visual content for the EB Plus homepage    */
/* ================================================================== */

export default function HomeShowcase() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 0.5], [1, 0.92]);
  const heroY = useTransform(heroScroll, [0, 0.5], [0, -80]);

  return (
    <>
      {/* ===== 1. CINEMATIC HERO ===== */}
      <section
        ref={heroRef}
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
      >
        {/* Background image */}
        <Image
          src="/images/food/dongfangmei-cover.jpg"
          alt="東方美早午餐店面"
          fill
          className="object-cover opacity-40"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-red-900/40" />

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        <HeroParticles />

        {/* Radial glow orbs */}
        <motion.div
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#C8102E]/20 blur-[150px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#F5A623]/15 blur-[150px]"
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 h-[300px] w-[300px] rounded-full bg-[#C8102E]/10 blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating spec badges */}
        <motion.div
          className="absolute right-8 top-1/3 hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className="text-amber-400 font-bold">AI</span>
          <span className="text-white/50 ml-2 text-sm">智慧餐飲</span>
        </motion.div>
        <motion.div
          className="absolute left-8 bottom-1/3 hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 lg:block"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
        >
          <span className="text-red-400 font-bold">IoT</span>
          <span className="text-white/50 ml-2 text-sm">物聯網</span>
        </motion.div>
        <motion.div
          className="absolute right-16 bottom-1/4 hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
        >
          <span className="text-green-400 font-bold">Big Data</span>
          <span className="text-white/50 ml-2 text-sm">大數據</span>
        </motion.div>

        {/* Hero content — parallax */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center text-white sm:px-6"
        >
          {/* Title */}
          <motion.h1
            className="mb-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-8xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
              東方美
            </span>
            <span className="bg-gradient-to-r from-[#F5A623] to-amber-300 bg-clip-text text-transparent">
              +
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mb-4 text-xl font-medium text-amber-300 sm:text-2xl"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            科技賦能&middot;智慧餐飲
          </motion.p>

          {/* Description */}
          <TextReveal
            text="結合 AI 人工智慧、自動化供應鏈、數據驅動營運，重新定義台灣餐飲產業的未來。"
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-300"
          />

          {/* Stats row */}
          <StaggerContainer className="mb-12 grid grid-cols-2 gap-6 sm:grid-cols-4" staggerDelay={0.15}>
            {[
              { value: 970, suffix: "+", label: "全台門市" },
              { value: 192, suffix: " 台", label: "配送車隊" },
              { value: 489, suffix: " 星", label: "加盟滿意度", prefix: "4.", isDecimal: true },
              { value: 30, suffix: "+ 年", label: "品牌歷史" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <div className="text-3xl font-black text-white sm:text-4xl">
                    {stat.isDecimal ? (
                      <>
                        <span>4.</span>
                        <AnimatedCounter value={89} suffix={stat.suffix} className="inline" />
                      </>
                    ) : (
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        className="inline"
                      />
                    )}
                  </div>
                  <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <GlowPulse color="rgba(200,16,46,0.5)" className="rounded-full">
              <a
                href="#contact"
                className="inline-block rounded-full bg-[#C8102E] px-8 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
              >
                加盟諮詢
              </a>
            </GlowPulse>
            <a
              href="#about"
              className="rounded-full border-2 border-white/20 bg-white/5 px-8 py-3 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
            >
              了解更多
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="h-6 w-6 text-white/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* ===== 1.5 ECOSYSTEM VISION — 總體精神（有傳統 有未來）===== */}
      <section className="relative overflow-hidden bg-[#050a15] py-0">
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-red-500/8 rounded-full blur-[200px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/6 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-blue-500/4 rounded-full blur-[180px]" />
        </div>

        <div className="relative z-10">
          {/* "有傳統，有未來" contrast header */}
          <div className="pt-24 pb-12 sm:pt-32 sm:pb-16">
            <ScrollReveal className="text-center max-w-4xl mx-auto px-4 sm:px-6">
              <motion.p
                className="text-red-400 text-sm font-mono tracking-[0.3em] uppercase mb-6"
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Ecosystem Vision
              </motion.p>

              {/* Tradition vs Future contrast */}
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
                  className="text-2xl sm:text-3xl text-white/30 font-light"
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
              <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
                傳承 50 年東方美早餐的美味根基，結合 AI 科技與數位系統，
                打造下一代智慧餐飲生態圈 —— 引領餐飲業未來新革命。
              </p>
            </ScrollReveal>
          </div>

          {/* Hero image — cinematic full-width */}
          <ScrollReveal delay={0.2}>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Glow frame behind image */}
              <motion.div
                className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-r from-red-500/20 via-amber-500/10 to-blue-500/20 blur-2xl"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Image container with glass border */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-red-500/10">
                <LightboxImage
                  src="/images/scenes/eb-ecosystem-vision.png"
                  alt="東方美EB+ 智慧餐飲整合服務生態系 — 原物料供應、物流配送、QR code點餐、智取櫃取餐、智慧系統平台、AI副店長、餐飲設備"
                  width={1920}
                  height={1080}
                  quality={90}
                  className="w-full"
                />
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050a15]/60 via-transparent to-[#050a15]/30" />
              </div>
            </div>
          </ScrollReveal>

          {/* 6 Ecosystem pillars */}
          <div className="pt-16 pb-8 sm:pt-20 sm:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4" staggerDelay={0.08}>
              {[
                { icon: "🥬", title: "原物料供應", desc: "新鮮食材・穩定供應" },
                { icon: "🚚", title: "物流配送", desc: "冷鏈直達・全台覆蓋" },
                { icon: "📱", title: "QR Code 點餐", desc: "智取櫃取餐・販賣機" },
                { icon: "🖥️", title: "智慧系統平台", desc: "POS・訂餐・AI 營收分析" },
                { icon: "🤖", title: "AI 副店長", desc: "智能庫存・決策支援" },
                { icon: "⚙️", title: "餐飲設備", desc: "尖端設備・高效火力" },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-5 text-center transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.06]"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                    <div className="relative z-10">
                      <span className="text-3xl mb-3 block">{item.icon}</span>
                      <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-white/40">{item.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Bottom tagline + CTA */}
          <div className="pb-24 sm:pb-32">
            <ScrollReveal delay={0.15} className="text-center max-w-3xl mx-auto px-4 sm:px-6">
              <div className="mb-8">
                <motion.div
                  className="inline-block h-px w-20 bg-gradient-to-r from-transparent via-red-500 to-transparent mb-8"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  一站式解決方案，全方位支持餐飲業升級
                </h3>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  從原物料到 AI 數據分析，從設備到智慧系統平台 —— 加入東方美 EB+ 生態圈，
                  讓我們用科技陪你的餐廳一起邁向未來。
                </p>
              </div>
              <GlowPulse>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C8102E] to-red-500 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-red-500/25 transition-all hover:shadow-red-500/40"
                  whileHover={{ scale: 1.05 }}
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

      {/* ===== 2. ABOUT SECTION ===== */}
      <section id="about" className="bg-[#FBF7F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
                關於
                <span className="bg-gradient-to-r from-[#C8102E] to-[#F5A623] bg-clip-text text-transparent">
                  東方美+
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mb-12 text-lg leading-relaxed text-gray-600">
                東方美集團自 1985
                年創立以來，以「精緻的早餐、充沛的活力」為理念，旗下擁有巧沛東方美、巧沛廚房、東方美早餐等品牌，全台約 970 家分店，是台灣最受歡迎的連鎖早午餐品牌之一。東方美+ 為東方美集團相關合作團隊，負責科技賦能與數位轉型。
                <strong>東方美+</strong> 是新世代品牌概念 ——
                在傳統餐飲的穩固基礎上，注入 AI
                人工智慧、IoT 物聯網、大數據分析等尖端科技，打造
                <strong>「零成本轉型」</strong>的智慧餐飲生態系。
              </p>
            </ScrollReveal>
          </div>

          {/* Brand showcase images */}
          <ScrollReveal delay={0.2}>
            <div className="mb-12 grid grid-cols-3 gap-4 overflow-hidden rounded-2xl">
              <div className="relative h-48 overflow-hidden rounded-2xl">
                <LightboxImage
                  src="/images/food/dongfangmei-cover.jpg"
                  alt="巧沛東方美早午餐店面"
                  fill
                  className="relative h-full w-full"
                />
              </div>
              <div className="relative h-48 overflow-hidden rounded-2xl">
                <LightboxImage
                  src="/images/brands/eb-breakfast-yt.jpg"
                  alt="東方美早餐經典餐點"
                  fill
                  className="relative h-full w-full"
                />
              </div>
              <div className="relative h-48 overflow-hidden rounded-2xl">
                <LightboxImage
                  src="/images/scenes/pier2-01.jpg"
                  alt="東方美+ 駁二智慧門市"
                  fill
                  className="relative h-full w-full"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Four feature cards */}
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.12}>
            {[
              {
                title: "AI 數位化轉型",
                icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
                desc: "訂餐點餐、AI 副店長，資訊軟體零成本轉型。加盟即享完整智慧餐飲系統，不需額外購買軟體。",
                color: "bg-red-100 text-[#C8102E]",
              },
              {
                title: "FreshLink 冷鏈配送",
                icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h-.375a3 3 0 013-3h.75m0 0h10.5m-10.5 0V6.375a1.125 1.125 0 011.125-1.125h6.75c.621 0 1.125.504 1.125 1.125v7.875m0 0h.375a3 3 0 013 3v.375M17.25 14.25h.375",
                desc: "專業配送車隊從倉庫直送 970 家門市，先進導航系統確保食材新鮮度與品質，供應不中斷。",
                color: "bg-amber-100 text-[#F5A623]",
              },
              {
                title: "加盟＋直營雙軌",
                icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z",
                desc: "加盟店提供完整教育訓練、物料供應與營運指導；直營店確保品牌品質標準，雙軌並行穩定成長。",
                color: "bg-blue-100 text-blue-600",
              },
              {
                title: "全時段經營模式",
                icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
                desc: "早上 5:30 即開始營業，週末延長至下午 1 點。現點現做、自助式服務，適合各種用餐場合。",
                color: "bg-purple-100 text-purple-600",
              },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <TiltCard className="h-full">
                  <article className="h-full rounded-2xl border border-white/50 bg-white/70 p-8 shadow-sm backdrop-blur-md transition-shadow hover:shadow-lg">
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={card.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
                    <p className="leading-relaxed text-gray-600">{card.desc}</p>
                  </article>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Brand ticker marquee */}
      <BrandTicker />

      {/* ===== Food Parallax Divider 1 — 美食視覺衝擊 ===== */}
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: typeof window !== "undefined" ? undefined : 0 }}
        >
          <Image
            src="/images/menu/menu-01.jpeg"
            alt="東方美早午餐精選餐點 — 品牌飲品、三明治、鍋燒拉麵、豬排飯"
            fill
            className="object-cover scale-110"
            quality={85}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <ScrollReveal className="text-center px-4">
            <motion.p
              className="text-white/60 text-sm font-mono tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              200+ Items · Since 1985
            </motion.p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-2xl">
              美味，是我們的根基
            </h2>
            <p className="text-white/70 text-lg sm:text-xl max-w-lg mx-auto">
              現點現做，超過 200 品項，從經典早餐到創意午餐
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 3. BRANDS SECTION ===== */}
      <section id="brands" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">品牌版圖</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600">
                美好的一天就在東方美 — 精緻的早餐、充沛的活力
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.12}>
            {[
              {
                name: "巧沛東方美",
                desc: "東方美集團旗艦早午餐品牌，1985 年創立。講求衛生、快速、品質服務，中西式餐點應有盡有，4.89 星超高評價。",
                image: "/images/food/dongfangmei-cover.jpg",
              },
              {
                name: "巧沛廚房",
                desc: "東方美集團旗下特色餐飲品牌，以多元料理與健康餐點為主軸，提供主廚特餐、各式湯品與創意料理。",
                image: null,
                color: "bg-gradient-to-br from-amber-600 to-red-600",
                placeholder: "巧沛廚房",
              },
              {
                name: "東方美早餐",
                desc: "經典早餐連鎖，遍布全台各地。早上 5:30 就開始營業，週末延長至下午 1 點，想吃就吃。",
                image: "/images/brands/eb-breakfast-yt.jpg",
              },
              {
                name: "東方美+ 科技中台",
                desc: "AI 驅動的供應鏈與數據平台，整合 POS 系統、智慧廚房、自動補貨等技術，為全體系賦能。",
                image: "/images/scenes/pier2-01.jpg",
              },
            ].map((brand) => (
              <StaggerItem key={brand.name}>
                <TiltCard className="h-full">
                  <article className="group h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative h-40 w-full overflow-hidden">
                      {brand.image ? (
                        <LightboxImage
                          src={brand.image}
                          alt={brand.name}
                          fill
                          className="relative h-full w-full"
                        />
                      ) : (
                        <div
                          className={`flex h-full w-full items-center justify-center ${brand.color || "bg-gray-200"}`}
                        >
                          <span className={`font-black text-white/80 ${(brand.placeholder || brand.name).length > 3 ? "text-2xl" : "text-4xl"}`}>
                            {brand.placeholder || brand.name.substring(0, 2)}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-bold">{brand.name}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {brand.desc}
                      </p>
                    </div>
                  </article>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      {/* ===== 3.5 MENU SHOWCASE SECTION ===== */}
      <section id="menu" className="relative overflow-hidden bg-[#050a15] py-20 text-white sm:py-28">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <p className="text-red-400 text-sm font-mono tracking-widest uppercase mb-4">
              Menu Highlights
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">人氣餐點菜單</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              東方美早午餐 — 超過 200 品項，從 30 元起就能享用，早上 5:30 營業至下午
            </p>
          </ScrollReveal>

          {/* Menu Photo Gallery — cinematic masonry */}
          <ScrollReveal delay={0.1} className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] sm:auto-rows-[220px]">
              {/* Large featured image — spans 2 cols + 2 rows */}
              <motion.div
                className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <LightboxImage
                  src="/images/menu/menu-01.jpeg"
                  alt="東方美早午餐精選套餐 — 三明治、鍋燒拉麵、品牌飲品"
                  fill
                  className="relative h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 pointer-events-none">
                  <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">招牌推薦</span>
                  <p className="text-white font-bold text-lg drop-shadow-lg">經典早午餐全餐</p>
                </div>
              </motion.div>

              {/* Top right */}
              <motion.div
                className="relative rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <LightboxImage
                  src="/images/menu/menu-full-02.jpg"
                  alt="東方美漢堡蛋餅水餃全餐"
                  fill
                  className="relative h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-bold drop-shadow-lg pointer-events-none">漢堡 · 蛋餅 · 水餃</span>
              </motion.div>

              <motion.div
                className="relative rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <LightboxImage
                  src="/images/menu/menu-04.jpeg"
                  alt="東方美三明治鐵板麵蛋捲"
                  fill
                  className="relative h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-bold drop-shadow-lg pointer-events-none">三明治 · 鐵板麵</span>
              </motion.div>

              {/* Bottom right */}
              <motion.div
                className="relative rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <LightboxImage
                  src="/images/menu/menu-03.jpeg"
                  alt="東方美漢堡義大利麵套餐"
                  fill
                  className="relative h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-bold drop-shadow-lg pointer-events-none">漢堡 · 義大利麵</span>
              </motion.div>

              <motion.div
                className="relative rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <LightboxImage
                  src="/images/menu/menu-05.jpeg"
                  alt="東方美貝果焗烤薯條拼盤"
                  fill
                  className="relative h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-bold drop-shadow-lg pointer-events-none">貝果 · 焗烤 · 炸物</span>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Set Meals */}
          <ScrollReveal delay={0.1}>
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm">★</span>
                超值套餐組合
              </h3>
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
                    <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 hover:bg-white/[0.08] transition-all duration-300 group relative overflow-hidden h-full">
                      {meal.hot && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                          人氣
                        </span>
                      )}
                      <div className="text-2xl font-black text-red-400 mb-1">
                        ${meal.price}
                        <span className="text-xs text-white/30 font-normal ml-1">元</span>
                      </div>
                      <div className="font-bold text-white mb-1 group-hover:text-red-300 transition-colors">
                        {meal.name}
                      </div>
                      <div className="text-xs text-white/40 leading-relaxed">
                        {meal.desc}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>

          {/* Category Grid */}
          <ScrollReveal delay={0.2}>
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm">☰</span>
                餐點分類
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { cat: "漢堡 / 吐司", items: "厚牛堡、炸豬排、鱈魚排...", range: "$40–95" },
                  { cat: "軟法堡", items: "西西里雞腿、香煎雞腿、鐵板牛...", range: "$75–95" },
                  { cat: "總匯三明治", items: "牛肉起司、炸豬排起司...", range: "$70–145" },
                  { cat: "蛋餅 / 河粉", items: "牛柳、里肌、泡菜、鮪魚...", range: "$30–70" },
                  { cat: "鐵板麵", items: "黑胡椒、蘑菇、義式肉醬...", range: "$55" },
                  { cat: "炒蛋黃麵", items: "牛柳刀削、蝦醬炒蛋黃...", range: "$85–95" },
                  { cat: "飯類", items: "咖哩飯、塔香飯、宮保飯...", range: "$40–95" },
                  { cat: "專業咖啡", items: "義式拿鐵、鴛鴦咖啡...", range: "$35–65" },
                  { cat: "鮮果特調", items: "紅心芭樂、愛文芒果...", range: "$35–65" },
                  { cat: "湯品 / 粥品", items: "野菇濃湯、芋頭瘦肉粥...", range: "$40–55" },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 hover:bg-white/[0.06] hover:border-red-500/20 transition-all duration-300"
                  >
                    <div className="font-bold text-white text-sm mb-1">{c.cat}</div>
                    <div className="text-xs text-white/30 mb-2 leading-relaxed">{c.items}</div>
                    <div className="text-red-400 text-sm font-bold">{c.range}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Combo Add-on */}
          <ScrollReveal delay={0.3}>
            <div className="bg-gradient-to-r from-red-500/10 to-amber-500/10 border border-white/[0.08] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-4">主餐加價組合 — 可搭配所有餐點</h3>
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
                      <div className="text-xs text-white/40">{combo.content}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-white/30 text-center">
                搭配任何飲品折價 $20 · 套餐系列除外 · 更換飲料補差額
              </p>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-white/40 text-sm mb-4">
                以上為東方美早午餐部分菜單，各門市可能略有差異
              </p>
              <a
                href="#franchise"
                className="inline-block rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-3 font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(200,16,46,0.4)] hover:scale-105"
              >
                加盟開店 → 擁有完整菜單
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      {/* ===== 4. FRANCHISE SECTION ===== */}
      <section id="franchise" className="bg-[#FBF7F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">加盟方案</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600">
                四大店型，滿足不同場景與商圈需求
              </p>
            </ScrollReveal>
          </div>

          {/* Four franchise types */}
          <StaggerContainer className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {[
              {
                type: "早午餐",
                desc: "經典東方美早午餐模式，融合中西式餐點，適合社區與學區商圈。",
                icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
                highlight: "970+ 門市實績",
              },
              {
                type: "餐酒館",
                desc: "日夜雙時段營運，白天咖啡輕食、夜晚餐酒體驗，最大化空間坪效。",
                icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 16.5m14.8-1.2l.268 1.572a.75.75 0 01-.766.872H4.698a.75.75 0 01-.766-.872l.268-1.572",
                highlight: "駁二示範店",
              },
              {
                type: "智慧店",
                desc: "AI 自動化 + 少人力營運模式，智慧取餐櫃、自助點餐、自動繳費一站完成。",
                icon: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z",
                highlight: "人力成本 -50%",
              },
              {
                type: "店中店",
                desc: "在現有商場、超市、交通樞紐等場域內設點，低坪數高坪效快速展店。",
                icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.994 2.994 0 00.209 1.126",
                highlight: "快速展店",
              },
            ].map((f) => (
              <StaggerItem key={f.type}>
                <TiltCard className="h-full">
                  <article className="h-full rounded-2xl border border-white/50 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-[#C8102E]">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={f.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{f.type}</h3>
                    <p className="mb-3 text-sm leading-relaxed text-gray-600">
                      {f.desc}
                    </p>
                    <span className="inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#C8102E]">
                      {f.highlight}
                    </span>
                  </article>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Pier-2 Showcase */}
          <ScrollReveal>
            <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
              <div className="grid md:grid-cols-2">
                {/* Left: Images */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-1">
                    {[
                      { src: "/images/scenes/pier2-01.jpg", alt: "東方美駁二示範店外觀" },
                      { src: "/images/scenes/smart-cabinet-01.jpg", alt: "欣殿萬飲智慧櫃子" },
                      { src: "/images/scenes/pier2-03.jpg", alt: "東方美駁二店內空間" },
                      { src: "/images/scenes/smart-cabinet-02.jpg", alt: "欣殿萬飲智慧櫃子白天實景" },
                    ].map((img) => (
                      <div key={img.src} className="relative h-64 overflow-hidden">
                        <LightboxImage
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="relative h-full w-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Info */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="mb-4 inline-block self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                    餐酒館示範案例
                  </div>
                  <h3 className="mb-4 text-2xl font-bold lg:text-3xl">
                    高雄駁二特區 — 欣殿萬飲
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-600">
                    東方美+ 合作團隊與欣殿萬飲有限公司策略合作，在高雄駁二藝術特區打造
                    <strong>「早午餐 + 餐酒館」日夜雙時段營運模式</strong>
                    ，以創新商業模型啟動南台灣夜生活經濟。結合東方美供應鏈優勢與
                    8 年餐酒館實戰經驗，打造高雄首創「咖啡 x 餐酒」複合式體驗空間。
                  </p>

                  {/* Time segments */}
                  <div className="mb-6 space-y-3">
                    <motion.div
                      className="flex items-start gap-3 rounded-xl bg-amber-50 p-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-200 text-sm font-bold text-amber-800">
                        AM
                      </div>
                      <div>
                        <div className="text-sm font-bold text-amber-800">
                          8:00-19:00 餐飲咖啡 x 文創空間
                        </div>
                        <div className="text-xs text-amber-600">
                          親子/遊客/IG客 — 咖啡、輕食、伴手禮
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-start gap-3 rounded-xl bg-purple-50 p-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-200 text-sm font-bold text-purple-800">
                        PM
                      </div>
                      <div>
                        <div className="text-sm font-bold text-purple-800">
                          19:00-03:00 餐酒館 x 夜經濟入口
                        </div>
                        <div className="text-xs text-purple-600">
                          上班族/企業客 — 調酒、餐點、包場活動
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Key stats */}
                  <div className="grid grid-cols-3 gap-4 rounded-xl bg-gray-50 p-4">
                    <div className="text-center">
                      <div className="text-lg font-black text-[#C8102E]">
                        <AnimatedCounter value={816} suffix="萬" />
                      </div>
                      <div className="text-xs text-gray-500">年度造訪人次</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-black text-[#C8102E]">
                        雙時段
                      </div>
                      <div className="text-xs text-gray-500">最大化坪效</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-black text-[#C8102E]">
                        第一排
                      </div>
                      <div className="text-xs text-gray-500">駁二步行街</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Food Parallax Divider 2 — 科技 × 美食 ===== */}
      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <Image
          src="/images/menu/menu-05.jpeg"
          alt="東方美貝果焗烤薯條精緻拼盤"
          fill
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050a15]/90 via-[#050a15]/50 to-[#050a15]/90" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <ScrollReveal className="text-center px-4">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 drop-shadow-2xl">
              用科技守護每一道美味
            </h3>
            <p className="text-white/60 text-base sm:text-lg max-w-md mx-auto">
              從食材源頭到顧客餐桌，AI 全程把關品質與效率
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 5. TECHNOLOGY SECTION ===== */}
      <section id="technology" className="relative overflow-hidden bg-[#050a15] py-20 text-white sm:py-28">
        {/* Radial glow orbs */}
        <motion.div
          className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#C8102E]/10 blur-[150px]"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-[#F5A623]/10 blur-[150px]"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                智慧餐飲生態圈
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-red-400 text-sm font-mono tracking-widest uppercase mb-2">
                Smart Restaurant Ecosystem
              </p>
              <p className="text-lg text-gray-400">
                以 AI 為核心，從供應鏈到餐盤的全方位賦能 — 不只賣系統，提供的是「開店的捷徑」
              </p>
            </ScrollReveal>
          </div>

          {/* 四大核心賦能支柱 */}
          <ScrollReveal>
            <h3 className="mb-8 text-center text-xl font-bold text-white/80">
              四大核心賦能支柱
            </h3>
          </ScrollReveal>

          <StaggerContainer className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {[
              {
                pillar: "數位營收終端",
                subtitle: "讓客人隨處都能點",
                borderColor: "border-red-500/30",
                items: ["LINE 智慧語音點餐", "多功能雲端 POS 系統", "行動支付與會員整合"],
              },
              {
                pillar: "AI 數位店長",
                subtitle: "讓 AI 幫您做決策",
                borderColor: "border-amber-500/30",
                items: ["分店 AI：自動調度訂單", "總部 AI：營運分析與預測", "異常自動偵測與告警"],
              },
              {
                pillar: "自動化智慧硬體",
                subtitle: "解決缺工與取餐問題",
                borderColor: "border-blue-500/30",
                items: ["智慧自取櫃：零接觸取餐", "KDS 出餐管理螢幕", "AI 影像辨識與品質控管"],
              },
              {
                pillar: "戰略供應鏈",
                subtitle: "最強大的後勤盾牌",
                borderColor: "border-purple-500/30",
                items: ["優質原物料穩定供應", "全台高效物流配送網", "數位化報貨與庫存管理"],
              },
            ].map((p) => (
              <StaggerItem key={p.pillar}>
                <motion.article
                  className={`group rounded-2xl border ${p.borderColor} bg-white/[0.03] p-6 backdrop-blur-sm transition-all h-full`}
                  whileHover={{ boxShadow: "0 0 30px rgba(200,16,46,0.15)", y: -4 }}
                >
                  <h4 className="mb-1 text-lg font-black text-white">{p.pillar}</h4>
                  <p className="mb-4 text-xs text-white/50">{p.subtitle}</p>
                  <ul className="space-y-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* 資訊管控中台 */}
          <ScrollReveal>
            <div className="mb-16 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 sm:p-10 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">東方美資訊管控中台 — 您的「數位大腦」</h3>
                <p className="text-gray-400 text-sm">集結數十年餐飲經驗的「獲利公式」</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3 mb-8">
                {[
                  { title: "智慧決策中樞", tag: "AI Agent Layer", desc: "透過 AI 進行補貨預測，不浪費食材、不漏掉訂單" },
                  { title: "標準化介接技術", tag: "Digital Gateway", desc: "無縫串接外送平台、支付系統與硬體，像樂高一樣輕鬆擴充" },
                  { title: "營運大數據", tag: "Data Lake", desc: "記錄每一筆交易與客戶喜好，將「資料」變「現金」" },
                ].map((layer) => (
                  <div key={layer.title} className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-5">
                    <h4 className="font-bold text-white mb-1">{layer.title}</h4>
                    <p className="text-xs text-red-400 font-mono mb-2">{layer.tag}</p>
                    <p className="text-sm text-gray-400">{layer.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5">
                <h4 className="font-bold text-white mb-3 text-sm">雲端基石：企業級的安全與穩定</h4>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { title: "資安監控", desc: "保護營業秘密與會員資料" },
                    { title: "備援系統", desc: "網路波動，店務依然穩定如常" },
                    { title: "專業 SI 團隊", desc: "技術專家全程支援，您專注服務顧客" },
                  ].map((s) => (
                    <div key={s.title} className="flex items-start gap-2">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-xs text-green-400">✓</span>
                      <div>
                        <div className="text-sm font-bold text-gray-200">{s.title}</div>
                        <div className="text-xs text-gray-500">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* old comparison removed */}

          {/* old EB+ comparison removed */}

          {/* 為什麼選擇東方美+ */}
          <ScrollReveal>
            <h3 className="mb-8 text-center text-xl font-bold text-white/80">
              為什麼選擇東方美+？
            </h3>
          </ScrollReveal>

          <StaggerContainer className="grid gap-6 sm:grid-cols-3" staggerDelay={0.12}>
            {[
              {
                title: "快速複製",
                desc: "支援多店模式，從一家店輕鬆變連鎖集團",
                stat: "970+ 家門市",
              },
              {
                title: "降低門檻",
                desc: "整合設備、物流、原物料，不需要懂 IT 也能經營智慧餐廳",
                stat: "資訊軟體零成本",
              },
              {
                title: "精實人力",
                desc: "透過 AI 代理人與智慧櫃，緩解缺工壓力，提升人效",
                stat: "人力需求 -30%",
              },
            ].map((s) => (
              <StaggerItem key={s.title}>
                <motion.article
                  className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm transition-all"
                  whileHover={{
                    borderColor: "rgba(200,16,46,0.3)",
                    boxShadow: "0 0 30px rgba(200,16,46,0.1)",
                  }}
                >
                  <h4 className="mb-2 text-lg font-bold text-white">
                    {s.title}
                  </h4>
                  <p className="mb-4 text-sm text-gray-400">{s.desc}</p>
                  <div className="inline-block rounded-full border border-[#C8102E]/30 bg-[#C8102E]/10 px-3 py-1 text-sm font-bold text-[#C8102E]">
                    {s.stat}
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      {/* ===== 6. AI KITCHEN SECTION ===== */}
      <section id="ai-kitchen" className="relative overflow-hidden bg-[#080e1c] py-20 text-white sm:py-28">
        {/* Radial glow orbs */}
        <motion.div
          className="absolute top-20 -left-20 h-[400px] w-[400px] rounded-full bg-[#C8102E]/8 blur-[150px]"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 h-[350px] w-[350px] rounded-full bg-[#F5A623]/8 blur-[150px]"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                AI 智慧廚房
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-400">
                不只自動化，更具備「思考能力」的未來廚房
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer className="mb-16 grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {[
              {
                title: "智慧需求預測",
                desc: "AI 分析歷史銷售數據、即時天氣、商圈活動，精準預測次日物料需求量，降低 15% 食材浪費。",
                icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
              },
              {
                title: "動態生產排程",
                desc: "AI 即時調度煎台、炸鍋、飲料站負載量，自動優化出餐順序，外送單與現場單智慧併發管理。",
                icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
              },
              {
                title: "IoT 設備監控",
                desc: "全廚房設備聯網，即時監控烤箱溫度、冰箱能耗、設備健康度，預防故障確保餐點品質一致。",
                icon: "M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
              },
            ].map((f) => (
              <StaggerItem key={f.title}>
                <motion.article
                  className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-sm transition-all"
                  whileHover={{
                    borderColor: "rgba(200,16,46,0.4)",
                    boxShadow: "0 0 40px rgba(200,16,46,0.1)",
                  }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8102E]/20 text-red-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={f.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{f.title}</h3>
                  <p className="leading-relaxed text-gray-400">{f.desc}</p>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Metrics */}
          <StaggerContainer className="grid gap-6 sm:grid-cols-3" staggerDelay={0.15}>
            {[
              {
                value: 0.5,
                suffix: "%",
                label: "缺貨率",
                desc: "AI 精準預測確保庫存充足",
              },
              {
                value: 3,
                suffix: "%",
                label: "物料浪費",
                desc: "數據驅動的採購決策",
              },
              {
                value: 98.5,
                suffix: "%",
                label: "設備效率",
                desc: "IoT 預防性維護",
              },
            ].map((m) => (
              <StaggerItem key={m.label}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 text-center backdrop-blur-sm">
                  <div className="mb-1 text-4xl font-black text-red-400">
                    {m.value === 0.5 ? (
                      <span>0.5%</span>
                    ) : m.value === 98.5 ? (
                      <>
                        <AnimatedCounter value={98} className="inline" />.5%
                      </>
                    ) : (
                      <AnimatedCounter value={m.value} suffix={m.suffix} className="inline" />
                    )}
                  </div>
                  <div className="mb-2 text-lg font-bold text-white">
                    {m.label}
                  </div>
                  <div className="text-sm text-gray-500">{m.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      {/* ===== 7. SUPPLY CHAIN SECTION ===== */}
      <section id="supply-chain" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                全鏈路供應鏈
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600">
                從銷售到採購的智慧迴圈：數據驅動的零浪費供應鏈
              </p>
            </ScrollReveal>
          </div>

          {/* Three step flow */}
          <StaggerContainer className="mb-12 grid gap-6 md:grid-cols-3" staggerDelay={0.2}>
            {[
              {
                step: 1,
                stepLabel: "01",
                title: "實時銷售數據",
                desc: "每一筆 QR 點餐訂單即時上傳雲端，建立完整的銷售數據庫。",
                color: "text-[#C8102E]",
                circleColor: "bg-[#C8102E]",
              },
              {
                step: 2,
                stepLabel: "02",
                title: "AI 需求預估",
                desc: "分析歷史銷售趨勢，預測未來一週需求，考量季節與天氣因素。",
                color: "text-[#F5A623]",
                circleColor: "bg-[#F5A623]",
              },
              {
                step: 3,
                stepLabel: "03",
                title: "自動補貨決策",
                desc: "低於安全庫存自動下單，優化 192 台車隊路徑，精準配送零積壓。",
                color: "text-green-600",
                circleColor: "bg-green-600",
              },
            ].map((s, i) => (
              <StaggerItem key={s.stepLabel}>
                <div className="relative text-center">
                  {/* Numbered circle */}
                  <div className="mb-4 flex justify-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full ${s.circleColor} text-2xl font-black text-white shadow-lg`}
                    >
                      <AnimatedCounter value={s.step} className="inline" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                  {/* Connecting arrow */}
                  {i < 2 && (
                    <div className="absolute -right-3 top-8 hidden text-3xl text-gray-300 md:block">
                      &rarr;
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Red banner */}
          <ScrollReveal>
            <div className="rounded-2xl bg-gradient-to-r from-[#C8102E] to-red-700 p-8 text-center text-white">
              <p className="text-xl font-bold">
                <AnimatedCounter value={192} className="inline" /> 台專業配送車隊 — 這是純軟體公司無法跨越的實體門檻
              </p>
              <p className="mt-2 text-red-200">
                從倉庫到全台 970 家門市，確保物資與資訊流同步到貨
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      {/* ===== 8. SUCCESS STORIES SECTION ===== */}
      <section id="success" className="bg-[#FBF7F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">成功案例</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600">
                真實數據，見證東方美+的科技轉型成效
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {[
              {
                store: "北投早午餐店",
                results: [
                  { label: "人力成本", before: "", value: "↓ NT$22,500/月" },
                  { label: "月營業額", before: "", value: "↑ NT$100,000" },
                ],
                highlight: "淨利增加 +NT$122,500/月",
                profitNum: 122500,
              },
              {
                store: "台中連鎖咖啡（5店）",
                results: [
                  { label: "物料浪費", before: "12%", value: "12% → 3%" },
                  { label: "採購成本", before: "", value: "↓ NT$60,000" },
                ],
                highlight: "淨利增加 +NT$114,000/月",
                profitNum: 114000,
              },
              {
                store: "新竹便當店",
                results: [
                  { label: "外帶比例", before: "30%", value: "30% → 55%" },
                  { label: "排隊時間", before: "15分", value: "15 分 → 2 分" },
                ],
                highlight: "淨利增加 +NT$85,000/月",
                profitNum: 85000,
              },
            ].map((c) => (
              <StaggerItem key={c.store}>
                <motion.article
                  className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow"
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#C8102E] to-red-500 px-6 py-4">
                    <h3 className="text-lg font-bold text-white">{c.store}</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {c.results.map((r) => (
                        <div
                          key={r.label}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm text-gray-500">
                            {r.label}
                          </span>
                          <span className="text-lg font-bold text-gray-900">
                            {r.value}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 rounded-xl bg-green-50 px-4 py-3 text-center">
                      <span className="text-sm font-bold text-green-700">
                        {c.highlight}
                      </span>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== Food Parallax Divider 3 — 美味收尾 ===== */}
      <section className="relative h-[35vh] sm:h-[45vh] overflow-hidden">
        <Image
          src="/images/menu/menu-03.jpeg"
          alt="東方美經典漢堡義大利麵套餐"
          fill
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-black/40 to-black/60" />
        <div className="relative z-10 flex h-full items-end justify-center pb-12">
          <ScrollReveal className="text-center px-4">
            <p className="text-white/50 text-sm font-mono tracking-widest uppercase mb-3">Join The Future</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-xl">
              準備好加入東方美 EB+ 了嗎？
            </h3>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 9. CONTACT / CTA SECTION ===== */}
      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#0a0f1a] to-gray-900 py-20 text-white sm:py-28"
      >
        {/* Radial glow orbs */}
        <motion.div
          className="absolute -top-20 left-1/4 h-[400px] w-[400px] rounded-full bg-[#C8102E]/10 blur-[150px]"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 right-1/4 h-[400px] w-[400px] rounded-full bg-[#F5A623]/8 blur-[150px]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                加入東方美+，讓科技為你的美味服務
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mb-8 text-lg text-gray-400">
                實現「高產出、低人力、精準供應」的未來
              </p>
            </ScrollReveal>

            {/* Benefit pills with shimmer border */}
            <ScrollReveal delay={0.2}>
              <div className="mb-12 flex flex-wrap justify-center gap-3">
                {[
                  "翻桌率提升 25%",
                  "節省 50% 櫃檯人力",
                  "零庫存浪費",
                  "原物料成本最佳化",
                ].map((b) => (
                  <motion.span
                    key={b}
                    className="rounded-full border border-[#C8102E]/30 bg-[#C8102E]/10 px-4 py-2 text-sm font-medium text-red-300"
                    whileHover={{
                      borderColor: "rgba(200,16,46,0.6)",
                      boxShadow: "0 0 20px rgba(200,16,46,0.2)",
                    }}
                  >
                    {b}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>

            {/* Roadmap */}
            <StaggerContainer className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4" staggerDelay={0.15}>
              {[
                { step: "1", title: "預約諮詢", desc: "了解您的店面狀況" },
                { step: "2", title: "現場評估", desc: "規劃動線與設備" },
                { step: "3", title: "系統導入", desc: "完全免費" },
                { step: "4", title: "正式營運", desc: "享受數據紅利" },
              ].map((r) => (
                <StaggerItem key={r.step}>
                  <div className="text-center">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#C8102E] text-lg font-bold shadow-lg shadow-red-500/30">
                      {r.step}
                    </div>
                    <div className="text-sm font-bold">{r.title}</div>
                    <div className="text-xs text-gray-500">{r.desc}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Contact Form */}
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-md">
              <h3 className="mb-6 text-center text-xl font-bold">
                立即諮詢轉型方案
              </h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm text-gray-400">
                      姓名
                    </label>
                    <input
                      type="text"
                      placeholder="您的姓名"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-gray-400">
                      電話
                    </label>
                    <input
                      type="tel"
                      placeholder="聯絡電話"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="電子信箱"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-gray-400">
                      店型
                    </label>
                    <select className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]">
                      <option value="" className="bg-gray-900">
                        請選擇加盟店型
                      </option>
                      <option value="brunch" className="bg-gray-900">
                        早午餐
                      </option>
                      <option value="bistro" className="bg-gray-900">
                        餐酒館
                      </option>
                      <option value="smart" className="bg-gray-900">
                        智慧店（少人力）
                      </option>
                      <option value="shop-in-shop" className="bg-gray-900">
                        店中店
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm text-gray-400">
                    需求說明
                  </label>
                  <textarea
                    rows={4}
                    placeholder="請簡述您的需求或想了解的內容..."
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]"
                  />
                </div>
                <GlowPulse
                  color="rgba(200,16,46,0.5)"
                  className="rounded-full"
                >
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#C8102E] py-3 text-lg font-bold text-white transition-colors hover:bg-red-700"
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
