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
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold sm:text-3xl">形象影片</h2>

          {/* 語言切換 */}
          <div className="flex gap-1.5 rounded-full border border-white/12 bg-white/[0.04] p-1">
            {variants.map((item, i) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  i === active
                    ? "bg-[#F5A623] font-bold text-black"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
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
