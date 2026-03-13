"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

/* ================================================================== */
/*  HomeShowcase — animated visual content for the EB Plus homepage    */
/* ================================================================== */

export default function HomeShowcase() {
  return (
    <>
      {/* ===== 1. CINEMATIC HERO ===== */}
      <section
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

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center text-white sm:px-6">
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
              { value: 192, suffix: "", label: "台配送車隊" },
              { value: 489, suffix: "", label: "星加盟滿意度", prefix: "4.", isDecimal: true },
              { value: 30, suffix: "+", label: "年品牌歷史" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <div className="text-3xl font-black text-white sm:text-4xl">
                    {stat.isDecimal ? (
                      <>
                        <span>4.</span>
                        <AnimatedCounter value={89} className="inline" />
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
        </div>

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
                年創立以來，旗下擁有巧沛東方美、東方美早餐、美芝城（早安美芝城）、美而美、瑞麟美而美等知名早午餐品牌，是台灣餐飲供應鏈的領導者。
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
                <Image
                  src="/images/food/dongfangmei-cover.jpg"
                  alt="巧沛東方美早午餐店面"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="relative h-48 overflow-hidden rounded-2xl">
                <Image
                  src="/images/brands/macc-food-1.jpg"
                  alt="早安美芝城餐點"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="relative h-48 overflow-hidden rounded-2xl">
                <Image
                  src="/images/scenes/pier2-01.jpg"
                  alt="東方美+ 駁二智慧門市"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Three feature cards */}
          <StaggerContainer className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {[
              {
                title: "零成本轉型",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                desc: "不賣軟體，賣供應鏈。系統免費提供，只要繼續採購原物料，即享完整的智慧餐飲系統。",
                color: "bg-red-100 text-[#C8102E]",
              },
              {
                title: "數據驅動營運",
                icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
                desc: "銷售數據直接轉化為採購決策，AI 自動補貨提醒，實現零浪費、高效率的營運模式。",
                color: "bg-amber-100 text-[#F5A623]",
              },
              {
                title: "AI 智慧賦能",
                icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
                desc: "從需求預測到智能排程，AI 全面優化餐飲營運每個環節，降低加盟門檻。",
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

      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      {/* ===== 3. BRANDS SECTION ===== */}
      <section id="brands" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">品牌版圖</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600">
                橫跨早午餐、通路、原物料供應鏈的餐飲帝國
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.12}>
            {[
              {
                name: "巧沛東方美",
                desc: "精緻早午餐品牌，融合中西式餐點，4.89 星好評。提供多樣化的套餐組合，從經典蛋餅到創意吐司應有盡有。",
                image: "/images/food/dongfangmei-cover.jpg",
              },
              {
                name: "東方美早餐",
                desc: "經典早餐連鎖，遍布全台各地。以平價美味的早餐服務，陪伴台灣人開啟美好的每一天。",
                image: "/images/brands/eb-breakfast-yt.jpg",
              },
              {
                name: "早安美芝城",
                desc: "1983 年創立於台南，全台約 1,400 家門市。台灣早餐連鎖產業的重要品牌之一。",
                image: "/images/brands/macc-food-1.jpg",
              },
              {
                name: "美而美",
                desc: "台灣西式早餐文化的開創者，1981 年創立。開啟了台灣連鎖早餐店的黃金時代。",
                image: null,
                color: "bg-green-500",
                placeholder: "美而",
              },
              {
                name: "瑞麟美而美",
                desc: "美而美餐飲連鎖企業集團，1988 年創立於台北通化街，以嚴格的品質管控聞名。",
                image: null,
                color: "bg-blue-500",
                placeholder: "瑞麟",
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
                        <Image
                          src={brand.image}
                          alt={brand.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div
                          className={`flex h-full w-full items-center justify-center ${brand.color || "bg-gray-200"}`}
                        >
                          <span className="text-4xl font-black text-white/80">
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
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
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
                    東方美集團與欣殿萬飲有限公司策略合作，在高雄駁二藝術特區打造
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

      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

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
                科技賦能&middot;降維打擊
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-400">
                我們不賣軟體，我們提供「生意」
              </p>
            </ScrollReveal>
          </div>

          {/* Comparison */}
          <ScrollReveal>
            <div className="mb-16 grid gap-6 md:grid-cols-2">
              {/* Traditional */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-sm">
                <div className="mb-4 inline-block rounded-full bg-gray-800 px-4 py-1 text-sm font-semibold text-gray-400">
                  傳統模式
                </div>
                <ul className="space-y-4 text-gray-400">
                  {[
                    { label: "營收來源：", text: "軟體月費 — 增加店家固定成本" },
                    { label: "系統費用：", text: "每年 NT$60,000 額外支出" },
                    { label: "物流支撐：", text: "無（僅提供軟體）" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-xs text-gray-500">
                        ✕
                      </span>
                      <div>
                        <strong className="text-gray-300">{item.label}</strong>
                        {item.text}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* EB+ */}
              <div className="rounded-2xl border border-[#C8102E]/30 bg-white/[0.03] p-8 backdrop-blur-sm ring-1 ring-[#C8102E]/20">
                <div className="mb-4 inline-block rounded-full bg-[#C8102E]/20 px-4 py-1 text-sm font-semibold text-[#C8102E]">
                  東方美+ 模式
                </div>
                <ul className="space-y-4 text-gray-400">
                  {[
                    { label: "營收來源：", text: "原物料供應 — 轉換為採購優勢" },
                    { label: "系統費用：", text: "免費（內含於服務）" },
                    { label: "物流支撐：", text: "192 台自有車隊同步到貨" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-xs text-green-400">
                        ✓
                      </span>
                      <div>
                        <strong className="text-gray-200">{item.label}</strong>
                        {item.text}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Smart Scenarios */}
          <ScrollReveal>
            <h3 className="mb-8 text-center text-2xl font-bold">
              四大智慧場景
            </h3>
          </ScrollReveal>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {[
              {
                title: "自助點餐系統",
                desc: "QR Code 掃碼點餐支付一次完成，櫃檯零排隊",
                stat: "翻桌率 +40%",
              },
              {
                title: "智慧雙面取餐櫃",
                desc: "GraBox-R101 線上預約 + 零接觸自取，告別排隊",
                stat: "等待時間 → 0",
              },
              {
                title: "外送動線分流",
                desc: "外送員不進店，專屬取餐區動線徹底分離",
                stat: "取餐效率 +300%",
              },
              {
                title: "智慧自助繳費機",
                desc: "現金/多元支付全支援，自動生成憑證",
                stat: "收銀人力 -50%",
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

      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

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
