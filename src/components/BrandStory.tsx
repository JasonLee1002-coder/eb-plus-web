"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * 品牌故事
 *
 * 素材由 Jason 於 2026-08-16 提供，為東方美創辦人的真實經歷：
 * 早年人稱「蛋餅之父」、跟隨美而美創辦人學習、從攤車做到店面、
 * 首度引進炒麵類早餐。年份 1987、創立地台北市萬華區。
 *
 * 寫作紀律（見 docs/CONTENT_POLICY.md）：
 *  - 「蛋餅之父」用「人稱」帶出，是他人給的稱呼，不是我方的宣稱
 *  - 不寫「開創」「革命」「傳奇」這類無法查證的評價詞，改敘述做了什麼
 *  - 不放任何營運數字、門市數、成效百分比
 *  - 提到美而美是師承脈絡，不做比較、不貶抑
 */

const MILESTONES = [
  {
    label: "起點",
    title: "從一台攤車開始",
    body: "創辦人陳弘欽早年跟隨美而美創辦人學習早餐這門生意，從一台路邊攤車做起。那個年代的台灣，西式早餐才剛要走進日常。",
  },
  {
    label: "落腳",
    title: "1987 年，萬華",
    body: "攤車做出穩定的客群之後，在台北市萬華區有了第一家店面。東方美從這裡開始。",
  },
  {
    label: "轉折",
    title: "把炒麵端上早餐桌",
    body: "在多數早餐店還只賣漢堡、三明治的時候，東方美率先把炒麵類餐點引進早餐菜單，讓中式與西式在同一張菜單上並存。這個組合後來成為台灣早餐店的日常風景。",
  },
  {
    label: "現在",
    title: "從一家店到連鎖體系",
    body: "如今東方美實業旗下擁有巧沛東方美、巧沛廚房、東方美早餐等品牌。同樣的問題換了規模再問一次：怎麼讓每一家店，都端得出同樣水準的一份早餐。",
  },
];

export default function BrandStory() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <section id="story" className="surface-raised py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#F5A623]">
            品牌故事
          </p>
          <h2 className="text-primary-token mx-auto max-w-3xl text-3xl font-bold leading-snug sm:text-4xl">
            台灣人的早餐長什麼樣子，
            <br className="hidden sm:block" />
            有一部分是從這裡開始的
          </h2>
        </motion.div>

        {/* 影片：不自動播放，避免行動裝置耗流量 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="relative mb-16 overflow-hidden rounded-2xl border border-white/[0.12]"
        >
          <video
            ref={videoRef}
            className="aspect-video w-full bg-black"
            controls={playing}
            preload="none"
            playsInline
            poster="/video/dongfangmei-intro-poster.jpg"
            onPause={() => setPlaying(false)}
          >
            <source src="/video/dongfangmei-intro.mp4" type="video/mp4" />
            您的瀏覽器不支援影片播放。
          </video>

          {!playing && (
            <button
              onClick={play}
              aria-label="播放東方美品牌影片"
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

        <p className="text-muted-token -mt-10 mb-16 text-center text-xs leading-relaxed">
          影片為巧沛國際股份有限公司形象片。巧沛國際為東方美實業旗下公司，
          <br className="hidden sm:block" />
          共同經營巧沛東方美等品牌。
        </p>

        {/* 里程碑 */}
        <div className="grid gap-5 sm:grid-cols-2">
          {MILESTONES.map((m, i) => (
            <motion.article
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              className="rounded-2xl border border-white/[0.12] bg-white/[0.04] p-6 sm:p-7"
            >
              <span className="mb-3 inline-flex items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#F5A623]">
                {m.label}
              </span>
              <h3 className="text-primary-token mb-2.5 text-lg font-bold sm:text-xl">
                {m.title}
              </h3>
              <p className="text-secondary-token text-sm leading-relaxed sm:text-[15px]">
                {m.body}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="text-muted-token mt-10 text-center text-sm leading-relaxed">
          早年業界稱陳弘欽為「蛋餅之父」。
          <br className="hidden sm:block" />
          從攤車到店面，從一份蛋餅到一整套早餐菜單，這條路走了很久。
        </p>
      </div>
    </section>
  );
}
