"use client";

import { useRef, useState } from "react";
import type { Brand } from "@/lib/brands";

/**
 * 品牌影片播放器，支援多語切換（Jason 2026-09-06「這兩個都要上東方美網頁」）。
 *
 * 切換語言時把 <video> 的 key 換掉強制重掛，避免瀏覽器沿用前一支的緩衝。
 * preload="none"：三支各 10MB，不預載，按了才抓。
 */
export default function BrandVideo({ brand }: { brand: Brand }) {
  const variants = brand.videoVariants;
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLVideoElement>(null);

  if (!variants || variants.length === 0) return null;
  const v = variants[active];

  return (
    <section id="video" className="border-t border-white/10 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl">形象影片</h2>

        {/*
          語言切換（Jason 2026-09-06：靠左、加大兩倍、發光）。
          原本跟標題同一列靠右、text-sm，在手機上又小又不起眼。
          改成獨立一列靠左，字級與內距各放大約一倍，選取中的鈕帶琥珀脈動光暈。
        */}
        <div className="mb-8 flex flex-wrap gap-3">
          {variants.map((item, i) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              style={
                {
                  "--breathe-rgb": item.glow,
                  // 三顆錯開起始相位，不同步呼吸才會「活」；
                  // 一起閃會像警示燈，反而讓人不想按
                  animationDelay: `${i * 0.9}s`,
                } as React.CSSProperties
              }
              className={`breathe rounded-full px-8 py-3.5 text-lg font-bold tracking-wide transition-[transform,background-color,color] duration-300 sm:text-xl ${
                i === active
                  ? "scale-105 text-black [background-color:rgb(var(--breathe-rgb))]"
                  : "border border-white/25 bg-white/[0.04] text-white/80 hover:text-white"
              }`}
            >
              <span
                className="pointer-events-none"
                style={i === active ? undefined : { color: `rgb(${item.glow})` }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
          <video
            key={v.src}
            ref={ref}
            className="aspect-video w-full"
            controls
            preload="none"
            playsInline
            poster={v.poster}
          >
            <source src={v.src} type="video/mp4" />
            您的瀏覽器不支援影片播放。
          </video>
        </div>

        <p className="mt-4 text-center text-xs leading-relaxed text-white/40">{v.note}</p>
      </div>
    </section>
  );
}
