"use client";

import { motion } from "framer-motion";

/**
 * 加盟入口的「新版建置中」霓虹告示
 *
 * Jason 2026-08-29 裁示：「目前總部的流程還沒訂好，所以加盟的部分，
 * 請先改成『新版建置中』美美的霓虹燈動畫。」
 *
 * 為什麼是收起來而不是修好：
 * 2026-08-29 實測發現加盟動線是死循環——加盟洽詢說「請直接與總部聯繫」，
 * 按鈕帶到總部區，總部區沒有電話，唯一的按鈕又把人帶回加盟洽詢。
 * 根因不在程式，在於總部的加盟進線流程（誰收件、多久回、後續怎麼跑）
 * 尚未定案，沒有流程就沒有可以留的窗口。
 *
 * 與其讓訪客繞圈到放棄，不如明講這一區在整修。霓虹燈是店面招牌的語言：
 * 「今天沒開，但這家店是活的」，比灰色的「敬請期待」誠實，也留得住人。
 *
 * 動態全部包在 prefers-reduced-motion 之外（樣式在 globals.css），
 * 會暈眩的使用者看到的是靜態霓虹。
 */

type Props = {
  /** 主標，預設「新版建置中」 */
  title?: string;
  /** 副標：說明為什麼在整修 */
  lead?: string;
  /** 底部小字：期間怎麼辦 */
  note?: string;
  className?: string;
};

export default function NeonUnderConstruction({
  title = "新版建置中",
  lead = "加盟的洽詢流程正在與總部一起重新規劃，完成後會在這裡開放。",
  note = "在此之前，若您已有與東方美接洽的窗口，請直接與該窗口聯繫。",
  className = "",
}: Props) {
  // 最後一個字單獨閃爍——整排一起閃會像壞掉的招牌
  const head = title.slice(0, -1);
  const tail = title.slice(-1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className={`relative mx-auto max-w-2xl overflow-hidden rounded-3xl p-[1.5px] ${className}`}
    >
      {/* 旋轉光束外框 */}
      <div className="neon-beam absolute inset-0 overflow-hidden rounded-3xl" aria-hidden />

      {/* 內容底板：蓋在光束上，只留一圈邊 */}
      <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#0b0f16] px-6 py-12 text-center sm:px-10 sm:py-16">
        {/* 背景光暈 */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8102E]/20 blur-[110px]"
        />
        {/* 掃描光條 */}
        <div
          aria-hidden
          className="neon-scanline pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-white/[0.07] to-transparent"
        />

        <div className="relative">
          <p className="neon-text-gold mb-5 text-[11px] font-medium uppercase tracking-[0.32em] sm:text-xs">
            EB PLUS · FRANCHISE
          </p>

          <h3 className="mb-6 text-4xl font-black leading-none tracking-[0.06em] sm:text-6xl">
            <span className="neon-text">{head}</span>
            <span className="neon-text neon-flicker">{tail}</span>
          </h3>

          {/* 霓虹管底線 */}
          <div
            aria-hidden
            className="mx-auto mb-7 h-[2px] w-40 rounded-full bg-gradient-to-r from-transparent via-[#C8102E] to-transparent shadow-[0_0_12px_2px_rgba(200,16,46,0.65)] sm:w-56"
          />

          <p className="mx-auto max-w-md text-sm leading-relaxed text-white/75 sm:text-[15px]">
            {lead}
          </p>

          <p className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-white/40">{note}</p>
        </div>
      </div>
    </motion.div>
  );
}
