"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * 智慧門市情境
 *
 * 2026-08-16 兩次修正：
 *  ① 原本用我方以 Gemini 生成的四張泛用設備圖 → 東方美早有官方情境圖，
 *     且畫的是真正的產品設計（刷 LINE QR Code 才能啟動微波），我生的畫錯了機制。
 *  ② 換成官方情境圖後，Jason 進一步指示「還沒有的東西先別亂畫，寧可用真實照片」
 *     → 再換成 2026-08-10 於高雄駁二欣殿萬飲實地拍攝的照片。
 *
 * 現在這一區全部是實拍，不需要「情境示意」標註。
 * 還沒有的東西改用插畫呈現（見 StoreTypeIllustration.tsx）。
 */

const ITEMS = [
  {
    src: "/images/xindian/kiosk-bar.jpg",
    alt: "高雄駁二欣殿萬飲店內，吧台旁設置兩台 WiXtar 自助點餐機，店員在旁待命",
    title: "自助點餐分擔尖峰",
    body: "顧客自己完成點餐與結帳，店員的時間可以留給需要人的服務。高雄駁二欣殿萬飲已在使用。",
    tag: "實際場景",
  },
  {
    src: "/images/xindian/kiosk-ui.jpg",
    alt: "自助點餐機的操作介面特寫",
    title: "點餐介面",
    body: "品項、加購與付款在同一個畫面完成，不需要口頭覆述。",
    tag: "實際場景",
  },
  {
    src: "/images/xindian/pos-printer.jpg",
    alt: "收銀 POS 與出單機，訂單自動列印",
    title: "訂單直接進廚房",
    body: "點餐送出後直接出單，少了人工傳遞這一段，也少了聽錯寫錯的機會。",
    tag: "實際場景",
  },
  {
    src: "/images/scenes/smart-cabinet-01.jpg",
    alt: "巧沛東方美門市外設置的 GraBox 智取櫃，格內放置實際販售的餐點與飲品",
    title: "門市外的取餐櫃",
    body: "顧客線上下單後自行取餐，不受店內尖峰排隊影響。已實際設置於門市。",
    tag: "實際場景",
  },
];

const TAG_STYLE: Record<string, string> = {
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
          以上皆為實際門市照片。設備配置依店型與動線而異，
          <br className="hidden sm:block" />
          實際導入項目歡迎與東方美總部洽談。
        </p>
      </div>
    </section>
  );
}
