import Image from "next/image";
import Link from "next/link";
import { BRANDS, type Brand, type Photo } from "@/lib/brands";


/**
 * 照片格。`badge` 會壓在圖片上——標示會跟著圖片一起被截圖轉貼出去，
 * 寫在圖片外面的說明轉貼時就掉了（StoreFormat 已用同一招）。
 */
function PhotoGrid({
  items,
  badge,
  cols = 3,
}: {
  items: Photo[];
  badge?: string;
  cols?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-5 sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : ""}`}
    >
      {items.map((p) => (
        <figure
          key={p.src}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes={
                cols === 3
                  ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  : "(max-width: 640px) 100vw, 50vw"
              }
              className="object-cover"
            />
            {badge && (
              <span className="absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                {badge}
              </span>
            )}
          </div>
          <figcaption className="p-5 text-sm leading-relaxed text-white/50">
            {p.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/**
 * 兩家餐酒館共用的品牌頁版型。
 *
 * 刻意沒有的東西，都是內容政策擋下來的：
 *  - 沒有評分與評論數（要看去 Google 商家頁，連結在頁面上）
 *  - 沒有價格、客單價
 *  - 沒有加盟／招商入口。加盟線現階段不對外曝光（Jason 2026-09-06）
 */
export default function BrandPage({ brand }: { brand: Brand }) {
  const hero = brand.photos[0];
  const sibling = BRANDS.find((b) => b.slug === brand.sibling);

  return (
    <div className="bg-[#0b0b0d] text-white">
      {/* ── 首屏 ── */}
      <section
        className={`relative flex items-end overflow-hidden ${
          hero ? "min-h-[70vh]" : "min-h-[42vh] pt-24"
        }`}
      >
        {hero ? (
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#2b1620] to-[#0b0b0d]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-black/55 to-black/35" />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 sm:pb-20">
          <nav className="mb-6 text-sm text-white/45">
            <Link href="/#brands" className="transition-colors hover:text-white/80">
              品牌版圖
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">{brand.name}</span>
          </nav>

          <p className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-wider text-white/80 backdrop-blur-sm">
            {brand.area}
          </p>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            {brand.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            {brand.tagline}
          </p>
          {brand.slogan && (
            <p className="mt-4 text-sm italic text-[#F5A623]/80">{brand.slogan}</p>
          )}
        </div>
      </section>

      {/* ── 店家資訊 ── */}
      <section className="border-t border-white/10 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <dl className="grid gap-8 sm:grid-cols-3">
            <div>
              <dt className="mb-2 text-xs tracking-[0.3em] text-[#F5A623]">地址</dt>
              <dd className="text-sm leading-relaxed text-white/80">{brand.address}</dd>
            </div>
            <div>
              <dt className="mb-2 text-xs tracking-[0.3em] text-[#F5A623]">營業時間</dt>
              <dd className="space-y-1 text-sm leading-relaxed text-white/80">
                {brand.hoursText.map((h) => (
                  <p key={h}>{h}</p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="mb-2 text-xs tracking-[0.3em] text-[#F5A623]">訂位・怎麼去</dt>
              <dd className="flex flex-wrap gap-2">
                {/*
                  站上不寫評分與評論數——那是會變動的數字，寫死就是未查證宣稱。
                  導航另外給一顆：來吃飯的人第一件事是「怎麼去」，
                  原本只有一個叫「看評價」的連結，要導航得自己想辦法。
                  電話：我方沒有經查證的訂位電話，寧可不放，也不放猜的號碼。
                */}
                <a
                  href={brand.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#F5A623] px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-[#ffc457]"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  導航前往
                </a>
                {/* 手機上按了直接撥號，這是餐廳頁最該有的一顆 */}
                {brand.tel && (
                  <a
                    href={`tel:${brand.tel.replace(/-/g, "")}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#F5A623]/50 bg-[#F5A623]/10 px-4 py-2 text-sm font-medium text-[#F5A623] transition-colors hover:bg-[#F5A623]/20"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    {brand.tel}
                  </a>
                )}
                <a
                  href={brand.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-sm text-white/75 transition-colors hover:border-white/40 hover:text-white"
                >
                  Google 評價
                </a>
                {brand.instagram && (
                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-sm text-white/75 transition-colors hover:border-white/40 hover:text-white"
                  >
                    Instagram
                  </a>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── 關於這家店 ── */}
      <section className="border-t border-white/10 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold sm:text-3xl">關於這家店</h2>
          <div className="space-y-5">
            {brand.about.map((line) => (
              <p key={line} className="text-[15px] leading-loose text-white/65 sm:text-base">
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── 影片（有才顯示）── */}
      {brand.video && (
        <section className="border-t border-white/10 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
              <video
                className="aspect-video w-full"
                controls
                preload="none"
                playsInline
                poster={brand.video.poster}
              >
                <source src={brand.video.src} type="video/mp4" />
                您的瀏覽器不支援影片播放。
              </video>
            </div>
            <p className="mt-4 text-center text-xs leading-relaxed text-white/40">
              {brand.video.note}
            </p>
          </div>
        </section>
      )}

      {/* ── 實拍 ── */}
      {brand.photos.length > 0 && (
        <section className="border-t border-white/10 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-2xl font-bold sm:text-3xl">店裡的樣子</h2>
            <PhotoGrid items={brand.photos} badge="實際場景" />
          </div>
        </section>
      )}

      {/* ── 菜單 ── */}
      {brand.menu && (
        <section className="border-t border-white/10 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">菜單</h2>
            {/*
              菜單價格會調整。放上拍攝月份並寫明以店內為準，
              免得客人拿著舊價格上門。
            */}
            <p className="mb-10 text-sm text-white/40">
              {brand.menu.asOf}店內菜單。品項與價格會調整，以店內公告為準。
            </p>
            <PhotoGrid items={brand.menu.photos} cols={2} />
          </div>
        </section>
      )}

      {/* ── 餐點 ── */}
      {brand.food && brand.food.length > 0 && (
        <section className="border-t border-white/10 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">餐點</h2>
            <p className="mb-10 text-sm text-white/40">
              店內實際供應的品項，菜單會依季節調整。
            </p>
            <PhotoGrid items={brand.food} badge="實際餐點" cols={2} />
          </div>
        </section>
      )}

      {/* ── 商圈 ── */}
      {brand.neighborhood && brand.neighborhood.length > 0 && (
        <section className="border-t border-white/10 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">走出店門</h2>
            <p className="mb-10 text-sm text-white/40">
              以下是店周邊的實拍，非本店室內。
            </p>
            <PhotoGrid items={brand.neighborhood} badge="周邊實拍" />
          </div>
        </section>
      )}

      {/*
        插畫情境區。Jason 2026-09-06：「一些插畫也可以用。但別變成圖文不實就好，
        要註明示意圖之類。」所以這一段：①標題就寫「情境插畫」②段首說明白不是實景
        ③每張圖上壓「示意圖」標籤，被截圖轉貼時標示會跟著走。
      */}
      {brand.illustrations && brand.illustrations.length > 0 && (
        <section className="border-t border-white/10 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">情境插畫</h2>
            <p className="mb-10 max-w-2xl text-sm leading-relaxed text-white/40">
              以下是插畫，不是店內實景，畫的是這家店晚上大概的樣子。
              要看真的長什麼樣，請看上面的實拍與 Google 商家頁。
            </p>
            <PhotoGrid items={brand.illustrations} badge="示意圖" />
          </div>
        </section>
      )}

      {/* 照片還沒有的店，就照實說，不拿別家照片充數 */}
      {brand.photos.length === 0 && (
        <section className="border-t border-white/10 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm leading-relaxed text-white/45">
              這家店的現場照片還在整理，先放地址與時間。要看現場，
              <a
                href={brand.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5A623] underline underline-offset-4 transition-colors hover:text-[#ffc457]"
              >
                Google 商家頁
              </a>
              上有客人拍的。
            </p>
          </div>
        </section>
      )}

      {/* ── 姊妹店 ── */}
      <section className="border-t border-white/10 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          {sibling && (
            <Link
              href={`/brands/${sibling.slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-white/25 hover:bg-white/[0.06] sm:p-10"
            >
              <p className="mb-2 text-xs tracking-[0.3em] text-[#F5A623]">同一組團隊的另一家店</p>
              <h2 className="text-2xl font-bold transition-colors group-hover:text-white sm:text-3xl">
                {sibling.name}
                <span className="ml-3 align-middle text-sm font-normal text-white/45">
                  {sibling.area}
                </span>
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                {sibling.tagline}
              </p>
            </Link>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/#brands"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              看東方美的其他品牌
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
