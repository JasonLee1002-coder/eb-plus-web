"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * 智慧門市情境
 *
 * 2026-08-16 修正：原本這一區用我方臨時以 Gemini 生成的四張泛用設備圖，
 * 但東方美與 MCS 早已有做好的官方情境圖，且畫的是真正的產品設計
 * （GraBox 品牌牆、冷凍櫃帶價格螢幕、刷 LINE QR Code 才能啟動微波）。
 * 自己生的圖不但多餘，還畫錯了機制。全數換成官方素材。
 *
 * 教訓：生任何素材之前先翻既有資產（雲端客戶資料夾 + 專案 public/）。
 *
 * 標註原則不變：情境圖仍標「情境示意」，不宣稱為已完成的門市實景。
 */

const ITEMS = [
  {
    src: "/images/scenes/grabox-store-scene.jpg",
    alt: "智慧門市情境圖：店內設置冷凍櫃、微波區與 GraBox 會員登入終端，顧客自助選購與加熱",
    title: "店內自助動線",
    body: "冷凍櫃陳列餐點與價格，顧客自行選取後到微波區加熱，店員專注在需要人的服務上。",
    tag: "情境示意",
  },
  {
    src: "/images/scenes/grabox-microwave-wall.jpg",
    alt: "智慧門市情境圖：微波爐牆與冷凍櫃，每台微波爐標示需刷 LINE QR Code 才能啟動",
    title: "刷 QR Code 才能啟動",
    body: "微波爐不是誰都能開。掃描 LINE QR Code 完成身分確認後才會啟動，避免誤用與未結帳取用。",
    tag: "情境示意",
  },
  {
    src: "/images/scenes/grabox-line-qr-microwave.jpg",
    alt: "智慧門市情境圖：顧客以手機掃描終端上的 LINE QR Code，店員在旁協助取出加熱後的餐盒",
    title: "手機就是鑰匙",
    body: "不必另外辦卡或下載 App。用平常在用的 LINE 掃碼，就完成會員辨識與設備啟動。",
    tag: "情境示意",
  },
  {
    src: "/images/scenes/smart-cabinet-01.jpg",
    alt: "巧沛東方美門市外設置的 GraBox 智取櫃，格內放置實際販售的餐點與飲品",
    title: "門市外的取餐櫃",
    body: "已實際設置於門市。顧客線上下單後自行取餐，不受店內尖峰排隊影響。",
    tag: "實際場景",
  },
];

const TAG_STYLE: Record<string, string> = {
  情境示意: "bg-black/75 text-white/85",
  實際場景: "bg-[#C8102E]/85 text-white",
};

export default function ConceptGallery() {
  return (
    <section className="surface-base py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-primary-token mb-3 text-3xl font-bold sm:text-4xl">
            設備如何分擔門市作業
          </h2>
          <p className="text-muted-token mx-auto max-w-2xl text-sm leading-relaxed sm:text-base">
            設備不是為了取代人，是把重複性的動作接過去。實際導入項目與配置，
            依各門市狀況而定，歡迎與東方美總部洽談。
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {ITEMS.map((it, i) => (
            <motion.figure
              key={it.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              className="overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.04]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* 標籤壓在圖上，確保被截圖轉貼時一起帶走 */}
                <span
                  className={`absolute bottom-2 left-2 rounded-md px-2 py-1 text-[10px] font-medium backdrop-blur-sm ${TAG_STYLE[it.tag]}`}
                >
                  {it.tag}
                </span>
              </div>
              <figcaption className="p-5 sm:p-6">
                <h3 className="text-primary-token mb-2 text-base font-bold sm:text-lg">
                  {it.title}
                </h3>
                <p className="text-muted-token text-sm leading-relaxed">{it.body}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="text-muted-token mt-8 text-center text-xs leading-relaxed">
          標示「情境示意」者為設計情境圖，用於說明運作方式，非特定門市之實景；
          <br className="hidden sm:block" />
          標示「實際場景」者為已設置之門市照片。
        </p>
      </div>
    </section>
  );
}
