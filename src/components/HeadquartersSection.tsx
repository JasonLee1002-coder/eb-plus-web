"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * 總部與後勤
 *
 * Jason 2026-08-16：
 *  「加盟方案還沒決定，妳別亂寫，寧可寫『加盟方案請洽總公司』附上電話地圖。
 *    本網頁最好可以附上東方美總部、以及地下室的車的壯觀照片。」
 *
 * 素材全部是實拍（G:\...\科專規劃\東方美\招工素材，2026-04-29 拍攝）：
 *  - 巧沛國際總部大樓（招牌可辨識）
 *  - 地下室冷藏配送車隊
 *  - 民國 102 年新廠落成賀匾（上書「東方美實業股份有限公司 陳董事長弘欽」，
 *    也是「陳弘欽」姓名的第三方書面佐證）
 *
 * ⚠️ HQ 聯絡資訊為待填，必須由東方美提供正式電話與地址後才能對外。
 *    原 Footer 的 (02) XXXX-XXXX 是假號碼，已一併處理。
 */

export const HQ = {
  tel: "",
  address: "",
  mapQuery: "巧沛國際股份有限公司",
};

const SHOTS = [
  {
    src: "/images/hq/fleet-basement.jpg",
    alt: "總部地下室停放的冷藏配送車隊",
    title: "自有冷藏配送車隊",
    body: "從中央廚房到門市，物流自己跑。這是純軟體公司跨不過去的一段。",
    span: true,
  },
  {
    src: "/images/hq/hq-building.jpg",
    alt: "巧沛國際總部大樓外觀",
    title: "總部",
    body: "營運、採購、教育訓練與加盟服務都在這裡。",
  },
  {
    src: "/images/hq/plaque.jpg",
    alt: "民國 102 年新廠落成賀匾",
    title: "一路走過來",
    body: "從第一家店，到自有廠房與自有物流，全台 582 家門市（依東方美科專計畫書送件資料）。",
  },
];

export default function HeadquartersSection() {
  const hasContact = Boolean(HQ.tel || HQ.address);

  return (
    <section id="hq" className="surface-elevated py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#F5A623]">
            總部與後勤
          </p>
          <h2 className="text-primary-token mx-auto max-w-3xl text-3xl font-bold leading-snug sm:text-4xl">
            一家店的背後，是一整套跑了很久的東西
          </h2>
        </motion.div>

        <div className="mb-14 grid gap-4 sm:grid-cols-2">
          {SHOTS.map((s, i) => (
            <motion.figure
              key={s.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              className={`overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.04] ${
                s.span ? "sm:col-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${s.span ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes={s.span ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
                  className="object-cover"
                />
              </div>
              <figcaption className="p-5 sm:p-6">
                <h3 className="text-primary-token mb-2 text-base font-bold sm:text-lg">
                  {s.title}
                </h3>
                <p className="text-muted-token text-sm leading-relaxed">{s.body}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* 加盟洽詢：方案未定，一律導向總公司 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-[#C8102E]/25 bg-[#C8102E]/[0.07] p-8 text-center sm:p-10"
        >
          <h3 className="text-primary-token mb-3 text-xl font-bold sm:text-2xl">
            想加盟，直接找總公司談
          </h3>
          <p className="text-secondary-token mx-auto mb-7 max-w-xl text-sm leading-relaxed sm:text-base">
            每家店的坪數、商圈與經營型態都不一樣，適合哪一種做法、費用怎麼算，
            由總部依實際狀況說明會比較準確。
          </p>

          {hasContact ? (
            <div className="mb-7 grid gap-4 sm:grid-cols-2">
              {HQ.tel && (
                <a
                  href={`tel:${HQ.tel.replace(/[^0-9+]/g, "")}`}
                  className="group rounded-xl border border-white/[0.12] bg-white/[0.04] p-5 transition-colors hover:border-[#C8102E]/50"
                >
                  <span className="text-muted-token mb-1.5 block text-xs">總公司電話</span>
                  <span className="text-primary-token block text-lg font-bold group-hover:text-[#e8607a]">
                    {HQ.tel}
                  </span>
                </a>
              )}
              {HQ.address && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HQ.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-white/[0.12] bg-white/[0.04] p-5 transition-colors hover:border-[#C8102E]/50"
                >
                  <span className="text-muted-token mb-1.5 block text-xs">總公司地址</span>
                  <span className="text-primary-token block text-base font-bold leading-snug group-hover:text-[#e8607a]">
                    {HQ.address}
                  </span>
                  <span className="text-muted-token mt-1 block text-xs">在地圖上開啟</span>
                </a>
              )}
            </div>
          ) : null}

          <a
            href="#contact"
            className="inline-block rounded-full bg-[#C8102E] px-9 py-3.5 text-base font-bold text-white transition-colors hover:bg-red-700"
          >
            留下聯絡方式，總部與你聯繫
          </a>
        </motion.div>
      </div>
    </section>
  );
}
