"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * 餐飲型態 — 早午餐 × 餐酒館（日夜雙時段）
 *
 * Jason 2026-08-29 指示加入此型態，素材為欣殿萬飲（高雄駁二）形象影片
 * 原檔：G:\我的雲端硬碟\claude_code_projects\VideoStudio\outputs\欣殿萬飲_駁二形象影片_v2_20260829.mp4
 * 站上版本已轉檔壓縮為 /video/xindian-pier2.mp4（1080p / H.264 / faststart）。
 *
 * 寫作紀律（docs/CONTENT_POLICY.md）：
 *  - 照片與影片皆為 2026-08-10 起於該店實地取得的素材，非生成圖
 *  - 不寫坪效、翻桌率、營收、客單價等任何未經東方美書面提供的數字
 *  - 欣殿萬飲寫「旗下品牌」（Jason 2026-09-06 裁示，取代 2026-08-16 的「合作場域」寫法）
 *  - 但**不寫成「可加盟的方案」**——Jason 2026-09-06：「未來會，現在規劃中，先別曝光」。
 *    站上不得出現招商、加盟、店型可選之類的字眼，也不要寫「是否納入招商範圍」
 *    （那句本身就把還在考慮講出去了）
 */

const PHOTOS = [
  {
    src: "/images/xindian/storefront.jpg",
    alt: "高雄駁二欣殿萬飲店外觀，招牌掛在紅磚老倉庫外牆上",
    caption: "駁二大義倉庫群的老屋外牆，店招與磚牆並存",
  },
  {
    src: "/images/xindian/dining-area.jpg",
    alt: "店內挑高用餐區，落地窗、布簾與植栽，桌椅配置為日間用餐型態",
    caption: "白天的用餐區：採光、桌距與動線都以早午餐客群安排",
  },
  {
    src: "/images/xindian/bar-shelf.jpg",
    alt: "店內吧台，後方酒櫃陳列酒瓶，吧台旁另有咖啡機與飲料機組",
    caption: "同一座吧台：咖啡機與酒櫃並排，換時段不必換場地",
  },
];

const DAYPARTS = [
  {
    tag: "白天",
    title: "早午餐",
    body: "延續東方美熟悉的早餐與早午餐內容，服務在地與遊客客群。這一段是既有的本業。",
  },
  {
    tag: "傍晚起",
    title: "餐酒館",
    body: "同一組空間與吧台在晚間承接餐酒服務，由欣殿萬飲團隊負責酒單與現場。",
  },
  {
    tag: "共用的部分",
    title: "設備、系統與人",
    body: "自助點餐、出單、收銀與後台紀錄兩個時段共用一套，交接時不必重建資料。",
  },
];

export default function StoreFormat() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <section id="formats" className="surface-base py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#F5A623]">
            餐飲型態
          </p>
          <h2 className="text-primary-token mx-auto max-w-3xl text-3xl font-bold leading-snug sm:text-4xl">
            同一個空間，
            <br className="hidden sm:block" />
            白天是早午餐，晚上是餐酒館
          </h2>
          <p className="text-muted-token mx-auto mt-5 max-w-2xl text-sm leading-relaxed sm:text-base">
            早餐尖峰結束之後，場地與設備並沒有閒下來。高雄駁二的欣殿萬飲把兩個時段
            放進同一家店——這不是構想圖，是已經在營運的現場。
          </p>
        </motion.div>

        {/* 影片：不自動播放，避免行動裝置耗流量 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="relative mb-4 overflow-hidden rounded-2xl border border-white/[0.12]"
        >
          <video
            ref={videoRef}
            className="aspect-video w-full bg-black"
            controls={playing}
            preload="none"
            playsInline
            poster="/video/xindian-pier2-poster.jpg"
            onPause={() => setPlaying(false)}
          >
            <source src="/video/xindian-pier2.mp4" type="video/mp4" />
            您的瀏覽器不支援影片播放。
          </video>

          {!playing && (
            <button
              onClick={play}
              aria-label="播放欣殿萬飲駁二形象影片"
              className="group absolute inset-0 flex items-center justify-center bg-black/25 transition-colors hover:bg-black/15"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C8102E] shadow-lg transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
                <svg
                  className="ml-1 h-7 w-7 text-white sm:h-8 sm:w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </motion.div>

        <p className="text-muted-token mb-14 text-center text-xs leading-relaxed">
          影片為欣殿萬飲（高雄駁二）形象片，拍的是夜間餐酒時段。
          <br className="hidden sm:block" />
          白天的早午餐時段見下方實拍。
          {/* 日／韓版在品牌頁可切換，這裡指過去，免得訪客不知道有 */}
          <a
            href="/brands/xindian#video"
            className="ml-2 text-[#F5A623] underline underline-offset-4 transition-colors hover:text-[#ffc457]"
          >
            日本語・한국어版はこちら
          </a>
        </p>

        {/* 三個時段區塊 */}
        <div className="mb-14 grid gap-5 md:grid-cols-3">
          {DAYPARTS.map((d, i) => (
            <motion.article
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-white/[0.12] bg-white/[0.04] p-6 sm:p-7"
            >
              <span className="mb-3 inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#F5A623]">
                {d.tag}
              </span>
              <h3 className="text-primary-token mb-2.5 text-lg font-bold sm:text-xl">
                {d.title}
              </h3>
              <p className="text-secondary-token text-sm leading-relaxed sm:text-[15px]">
                {d.body}
              </p>
            </motion.article>
          ))}
        </div>

        {/* 實拍照片 */}
        <div className="grid gap-5 sm:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.04]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
                {/* 標籤壓在圖上，確保被截圖轉貼時一起帶走 */}
                <span className="absolute bottom-2 left-2 rounded-md bg-[#C8102E]/85 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                  實際場景
                </span>
              </div>
              <figcaption className="text-muted-token p-5 text-sm leading-relaxed">
                {p.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="text-muted-token mt-8 text-center text-xs leading-relaxed">
          雙時段要不要做、怎麼配，跟坪數、商圈與人力都有關係，每家店的答案不會一樣。
        </p>
      </div>
    </section>
  );
}
