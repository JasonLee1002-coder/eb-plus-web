"use client";

import { motion } from "framer-motion";

/**
 * 加盟主的一天
 *
 * 取代原本的 eb-ecosystem-vision.png。那張圖的問題：
 *  ① 站在「我們賣什麼」的角度（原物料／物流／設備），不是加盟主角度
 *  ② 內容與科專定義不同（科專講的是三時段營運帶與三個 AI 代理人）
 *  ③ 有生魚片、烤雞等與早餐店無關的元素，「引領餐飲業未來新革命」也是誇大詞
 *
 * Jason 2026-08-16：「讓東方美加盟主看到後覺得有特色，想加盟，會想打電話過去。」
 *
 * 因此改成一條「一天」的時間軸——加盟主最有感的不是設備清單，
 * 是「哪幾件事我不用再自己扛」。對齊科專的三時段營運帶（PPT P13/P16/P24）。
 *
 * 紀律：
 *  - 全部 HTML 文字，不烘焙進圖片（圖片會繞過 content-gate）
 *  - 已在營運的與規劃中的分開標，不混為一談
 *  - 不寫任何時數、成效百分比、獲利暗示
 */

type Phase = {
  time: string;
  label: string;
  status: "現在就有" | "規劃中";
  title: string;
  you: string;
  system: string[];
};

const PHASES: Phase[] = [
  {
    time: "05:00",
    label: "開店",
    status: "規劃中",
    title: "不用再打電話叫貨",
    you: "你在準備開店。以前這個時間要抽空打電話叫貨，打不通就要一直重打。",
    system: [
      "系統依照昨天的銷售整理出建議訂單",
      "你看過、改掉不對的數量，送出",
      "總部同一時間就收到，不必等人工彙整",
    ],
  },
  {
    time: "07:30",
    label: "尖峰",
    status: "現在就有",
    title: "最忙的九十分鐘，有人幫你分擔",
    you: "客人一波接一波，你的手沒停過。",
    system: [
      "顧客自己在點餐機下單，不必排隊等你聽單",
      "訂單直接列印到廚房，少了聽錯寫錯的環節",
      "外帶的客人到門口智取櫃自取，不佔用店內動線",
    ],
  },
  {
    time: "11:00",
    label: "收尾",
    status: "規劃中",
    title: "貨到了，對不對得起來",
    you: "配送到店，你要一邊做餐一邊點收。",
    system: ["到貨品項與數量留下紀錄", "對不上的地方有憑據，不必事後回想"],
  },
  {
    time: "14:00",
    label: "離峰",
    status: "規劃中",
    title: "店還開著，但不用一直站著",
    you: "客人少了，但店還得開。",
    system: ["飲品與部分品項由設備出品", "你可以去備料、去休息，或者去看下一家店"],
  },
  {
    time: "21:00",
    label: "打烊後",
    status: "規劃中",
    title: "你回家了，設備還在營業",
    you: "以前這個時間拉下鐵門，一天就結束了。",
    system: [
      "取餐櫃與自助設備繼續接單",
      "溫度異常、設備故障，系統會通知並先做處置",
      "隔天早上你會收到一份夜間發生了什麼的摘要",
    ],
  },
];

const STATUS_STYLE: Record<Phase["status"], string> = {
  現在就有: "border-[#C8102E]/40 bg-[#C8102E]/15 text-[#e8607a]",
  規劃中: "border-[#F5A623]/30 bg-[#F5A623]/10 text-[#F5A623]",
};

export default function DayInLife() {
  return (
    <section id="day" className="surface-raised py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#F5A623]">
            加盟主的一天
          </p>
          <h2 className="text-primary-token mx-auto max-w-3xl text-3xl font-bold leading-snug sm:text-4xl">
            開一家早餐店，最累的不是做餐
          </h2>
          <p className="text-muted-token mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:text-base">
            是叫貨、點收、排班、盯設備、還有打烊之後才開始算的那些帳。
            <br className="hidden sm:block" />
            我們想做的，是把其中幾件事接過去。
          </p>
        </motion.div>

        <div className="mb-12 mt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
          {(["現在就有", "規劃中"] as const).map((s) => (
            <span key={s} className="inline-flex items-center gap-1.5">
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-medium ${STATUS_STYLE[s]}`}
              >
                {s}
              </span>
              <span className="text-muted-token">
                {s === "現在就有" ? "已在門市運作" : "規劃中，尚未上線"}
              </span>
            </span>
          ))}
        </div>

        <div className="relative">
          {/* 時間軸線 */}
          <div
            aria-hidden
            className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-[#F5A623]/50 via-white/15 to-transparent sm:block"
          />

          <ol className="space-y-4">
            {PHASES.map((p, i) => (
              <motion.li
                key={p.time}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="relative sm:pl-12"
              >
                {/* 時間點 */}
                <span
                  aria-hidden
                  className="absolute left-0 top-6 hidden h-[31px] w-[31px] items-center justify-center rounded-full border border-[#F5A623]/40 bg-[#151b23] text-[10px] font-bold text-[#F5A623] sm:flex"
                >
                  {p.label}
                </span>

                <article className="rounded-2xl border border-white/[0.12] bg-white/[0.04] p-5 sm:p-7">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-lg font-bold text-[#F5A623]">{p.time}</span>
                    <h3 className="text-primary-token text-lg font-bold sm:text-xl">{p.title}</h3>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${STATUS_STYLE[p.status]}`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <p className="text-secondary-token mb-4 text-sm leading-relaxed sm:text-[15px]">
                    {p.you}
                  </p>

                  <ul className="space-y-2">
                    {p.system.map((s) => (
                      <li key={s} className="flex gap-2.5">
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#C8102E]"
                        />
                        <span className="text-muted-token text-sm leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* 導向聯繫 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl border border-[#C8102E]/25 bg-[#C8102E]/[0.07] p-7 text-center sm:p-9"
        >
          <h3 className="text-primary-token mb-3 text-xl font-bold sm:text-2xl">
            想知道你的店可以做到哪一步？
          </h3>
          <p className="text-secondary-token mx-auto mb-6 max-w-xl text-sm leading-relaxed">
            每家店的坪數、動線、人力與商圈都不一樣，能導入什麼、先做哪一段，
            要看過才知道。留個聯絡方式，總部會安排人跟你談。
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-[#C8102E] px-9 py-3.5 text-base font-bold text-white transition-colors hover:bg-red-700"
          >
            我想了解加盟
          </a>
          <p className="text-muted-token mt-4 text-xs">
            標示「規劃中」者尚未上線，實際可導入的項目依門市狀況而定。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
