import type { Metadata } from "next";
import Image from "next/image";

/**
 * 首都高速道路株式会社 来台迎賓頁（Jason 2026-09-06 指示）
 *
 * 事實依據：`shared_intel/partners/shutoko-expressway.md`
 *  - 來訪期間 2026/09/08–09/10（三天，行程含拜訪銓幻元與高雄微勤）
 *  - 對外日文正式名稱一律「首都高速道路株式会社」（Jason 2026-09-03 指定），
 *    不可寫「首都高速道路チーム」
 *
 * 三條刻意不寫的：
 *  1. **不寫「高層」**。CRM 記載這趟來的是三浦先生的下屬，即工作層／執行層，
 *     非決策層本人（2026-07-29 LINE 群組確認）。職級未經日方確認前不標。
 *  2. **不寫 9/9 晚餐後到店**。那是「如果決定」的狀態，還沒確認，
 *     印在頁面上等於替日方定行程。
 *  3. **不寫任何商務內容**（設備、合約、金額）。這是迎賓頁不是提案。
 *
 * 影片：/video/xindian-pier2-ja.mp4（日語旁白＋日文字幕，開頭 8 秒為首都高專屬迎賓卡）
 * 原檔 H:\...\2026業務\日本業務\JASON_欣殿萬飲_歓迎映像_日本語版_20260903.mp4
 */

export const metadata: Metadata = {
  title: "歓迎 首都高速道路株式会社 御一行様 | 欣殿萬飲",
  description:
    "首都高速道路株式会社の皆様の台湾ご訪問を、高雄・駁二の欣殿萬飲より心より歓迎いたします。",
  // root layout 的 keywords 含「早午餐加盟／早餐店加盟」，會被這頁繼承。
  // 加盟那條線現階段不對外曝光（Jason 2026-09-06），且對日方來賓也不相干，清掉。
  keywords: [],
  robots: { index: false, follow: false, nocache: true },
};

/** 日文為主、中文為輔——中文那行是給總部與現場同仁看的 */
function Line({ ja, zh }: { ja: string; zh: string }) {
  return (
    <p className="mb-5 last:mb-0">
      <span lang="ja" className="block text-base leading-loose text-white/85 sm:text-lg">
        {ja}
      </span>
      <span className="mt-1 block text-sm leading-relaxed text-white/40">{zh}</span>
    </p>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white">
      {/* ── 迎賓 ── */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 py-24">
        <Image
          src="/images/xindian/storefront.jpg"
          alt="高雄・駁二 欣殿萬飲の外観"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0b0b0d]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p
            lang="ja"
            className="mb-8 text-sm font-medium tracking-[0.5em] text-[#F5A623] sm:text-base"
          >
            歓迎
          </p>

          <h1
            lang="ja"
            className="text-3xl font-black leading-tight tracking-wide sm:text-5xl lg:text-6xl"
          >
            首都高速道路株式会社
            <span className="mt-3 block text-xl font-bold text-white/80 sm:text-2xl lg:text-3xl">
              御一行様
            </span>
          </h1>

          <div className="mx-auto my-10 h-px w-20 bg-[#C8102E]" />

          <p lang="ja" className="text-lg leading-relaxed text-white/75 sm:text-xl">
            台湾へようこそ。
            <br />
            高雄・駁二の欣殿萬飲にて、
            <br className="sm:hidden" />
            皆様のお越しを心よりお待ちしております。
          </p>

          <p className="mt-6 text-sm leading-relaxed text-white/40">
            歡迎首都高速道路株式会社一行蒞臨台灣。
            <br />
            高雄駁二・欣殿萬飲，誠摯期待各位的到來。
          </p>

          <p
            lang="ja"
            className="mt-12 inline-block rounded-full border border-white/20 px-6 py-2 text-sm tracking-widest text-white/70"
          >
            2026.09.08 — 09.10 ／ 台湾・高雄
          </p>
        </div>
      </section>

      {/* ── 歓迎映像 ── */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <header className="mb-10 text-center">
            <p lang="ja" className="mb-3 text-xs tracking-[0.35em] text-[#F5A623]">
              歓迎映像
            </p>
            <h2 lang="ja" className="text-2xl font-bold sm:text-3xl">
              欣殿萬飲へようこそ
            </h2>
            <p className="mt-2 text-sm text-white/40">迎賓影片（日語旁白，約 84 秒）</p>
          </header>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
            <video
              className="aspect-video w-full"
              controls
              preload="none"
              playsInline
              poster="/video/shutoko-welcome-poster.jpg"
            >
              <source src="/video/xindian-pier2-ja.mp4" type="video/mp4" />
              <span lang="ja">お使いのブラウザは動画再生に対応していません。</span>
            </video>
          </div>
        </div>
      </section>

      {/* ── 会場 ── */}
      <section className="border-t border-white/10 px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p lang="ja" className="mb-3 text-xs tracking-[0.35em] text-[#F5A623]">
              会場
            </p>
            <h2 lang="ja" className="mb-8 text-2xl font-bold sm:text-3xl">
              欣殿萬飲
            </h2>

            <Line
              ja="高雄市塩埕区大義街2号 C6-7"
              zh="高雄市鹽埕區大義街 2 號 C6-7"
            />
            <Line
              ja="駁二芸術特区・大義倉庫群"
              zh="駁二藝術特區・大義倉庫群"
            />
            <Line
              ja="昼はブランチ、夕方からはビストロバー。同じ空間、同じカウンターで、時間帯だけが変わります。"
              zh="白天早午餐，傍晚起餐酒館。同一個空間、同一座吧台，換的只是時段。"
            />
            <Line
              ja="営業時間　月〜木 10:00–翌1:00 ／ 金〜日 10:00–翌3:00"
              zh="營業時間　週一〜四 10:00–01:00 ／ 週五〜日 10:00–03:00"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 self-start">
            {[
              { src: "/images/xindian/dining-area.jpg", alt: "欣殿萬飲の客席" },
              { src: "/images/xindian/bar-shelf.jpg", alt: "欣殿萬飲のカウンター" },
              { src: "/images/xindian/seating.jpg", alt: "欣殿萬飲の座席" },
              { src: "/images/xindian/scene-b.jpg", alt: "欣殿萬飲の店内" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 結び ── */}
      <section className="border-t border-white/10 px-6 py-20 text-center sm:py-24">
        <p lang="ja" className="text-lg leading-relaxed text-white/75 sm:text-xl">
          皆様にお目にかかれることを、
          <br className="sm:hidden" />
          楽しみにしております。
        </p>
        <p className="mt-4 text-sm text-white/40">期待與各位見面。</p>

        <div className="mx-auto my-10 h-px w-16 bg-white/15" />

        <p lang="ja" className="text-sm leading-loose text-white/55">
          欣殿萬飲（東方美グループ）
          <br />
          銓幻元科技　MCS
        </p>
      </section>
    </div>
  );
}
