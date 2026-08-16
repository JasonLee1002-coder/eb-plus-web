"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * 設備概念示意
 *
 * 依 2026-08-16 與 Codex 的共識：
 *  - 這一輪不放任何人物照。真實授權素材要東方美提供；AI 生成的人物就算標註，
 *    放在招商版位仍可能讓訪客誤以為是東方美的真實門市與加盟主。
 *  - 圖片本身不含文字、招牌、品牌識別與產品 UI，避免看起來像已部署的現況。
 *  - 「概念示意」標籤直接壓在每張圖上，不放頁尾一行免責帶過。
 */

const ITEMS = [
  {
    src: "/images/concept/equipment-kiosk.png",
    alt: "自助點餐機的概念示意圖，畫面中為空白螢幕的落地式點餐終端，非實際門市照片",
    title: "自助點餐",
    note: "把點餐這道工序交給顧客自己完成，人力挪去出餐與現場服務。",
  },
  {
    src: "/images/concept/equipment-beverage.png",
    alt: "自助飲品設備的概念示意圖，非實際門市照片",
    title: "飲品自動出品",
    note: "飲品是尖峰時段最占人手的品項之一，由設備分擔製作。",
  },
  {
    src: "/images/concept/equipment-locker.png",
    alt: "溫控取餐櫃的概念示意圖，櫃門關閉且無任何文字標示，非實際門市照片",
    title: "溫控取餐櫃",
    note: "顧客自行取餐，減少等待與交付時的人力接觸。",
  },
  {
    src: "/images/concept/ops-central-kitchen.png",
    alt: "中央廚房備料檯面的概念示意圖，畫面中無人員，非實際場域照片",
    title: "中央廚房備料",
    note: "門市訂單彙整後，成為中央廚房備料與配送的依據。",
  },
];

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
            以下為設備類型與運作方式的概念示意。實際導入項目、規格與配置，
            依各門市狀況與東方美總部確認後為準。
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <motion.figure
              key={it.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.04]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                {/* 標籤壓在圖上，確保與圖一起被看見、一起被轉貼 */}
                <span className="absolute bottom-2 left-2 rounded-md bg-black/75 px-2 py-1 text-[10px] font-medium text-white/85 backdrop-blur-sm">
                  概念示意
                </span>
              </div>
              <figcaption className="p-4">
                <h3 className="text-primary-token mb-1.5 text-sm font-bold">{it.title}</h3>
                <p className="text-muted-token text-xs leading-relaxed">{it.note}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="text-muted-token mt-8 text-center text-xs leading-relaxed">
          上列影像為 AI 生成的概念示意，非實際門市或設備照片，亦不代表已完成導入。
        </p>
      </div>
    </section>
  );
}
