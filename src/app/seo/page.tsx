import { getAllPosts } from "@/lib/posts";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "部落格 | 東方美+ EB Plus — 餐飲科技趨勢與加盟攻略",
  description:
    "東方美+ 部落格：早午餐加盟攻略、AI智慧餐飲系統解析、餐飲數位轉型趨勢、品牌故事與成功案例分享。",
  keywords: [
    "東方美",
    "早午餐加盟",
    "餐飲科技",
    "AI智慧廚房",
    "巧沛東方美",
    "巧沛廚房",
    "餐飲數位轉型",
  ],
  openGraph: {
    title: "部落格 | 東方美+ EB Plus",
    description: "餐飲科技趨勢、加盟攻略與品牌故事",
    type: "website",
    siteName: "東方美+ EB Plus",
    locale: "zh_TW",
  },
  alternates: { canonical: "https://eb-plus-web.vercel.app/seo/" },
};

export default function SeoBlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a0000] via-[#2a0a0a] to-[#0a0a0a] py-16 sm:py-20">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-white/40">
            <a href="/" className="hover:text-white/60 transition-colors">
              首頁
            </a>
            <span className="mx-2">&gt;</span>
            <span className="text-white/60">部落格</span>
          </nav>

          <h1 className="mb-4 text-4xl font-black text-white sm:text-5xl">
            部落格
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            早午餐加盟攻略、AI
            智慧餐飲系統解析、餐飲數位轉型趨勢、品牌故事與實戰案例分享。
          </p>
        </div>
      </div>

      {/* Post grid */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/seo/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.06] hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-red-900/40 to-gray-900">
                      <span className="text-3xl font-black text-white/20">
                        EB+
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a15] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Date */}
                  <time className="text-xs text-gray-500">{post.date}</time>

                  {/* Title */}
                  <h2 className="mt-2 mb-2 text-lg font-bold text-white leading-snug line-clamp-2 group-hover:text-red-400 transition-colors">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="mb-4 text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.slice(0, 3).map((kw) => (
                      <span
                        key={kw}
                        className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-xs text-gray-400"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/5 py-12 text-center">
        <h3 className="mb-3 text-xl font-bold text-white">
          想了解更多東方美+ 加盟資訊？
        </h3>
        <p className="mb-6 text-gray-500">
          免費諮詢，零成本導入 AI 智慧餐飲系統
        </p>
        <a
          href="/#contact"
          className="inline-block rounded-full bg-red-600 px-8 py-3 font-bold text-white transition-colors hover:bg-red-500"
        >
          立即諮詢加盟
        </a>
      </div>
    </>
  );
}
