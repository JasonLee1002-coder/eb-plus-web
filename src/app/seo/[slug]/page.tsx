import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | 東方美+ EB Plus`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      siteName: "東方美+ EB Plus",
      locale: "zh_TW",
      images: post.image ? [{ url: post.image }] : [],
    },
    alternates: {
      canonical: `https://ebplus.tw/seo/${slug}/`,
    },
    robots: { index: true, follow: true },
  };
}

export default async function SeoArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      {/* Category + Date */}
      <div className="mb-4 flex items-center gap-3 text-sm text-white/40">
        {post.category && (
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-0.5 text-xs text-red-400">
            {post.category}
          </span>
        )}
        <time dateTime={post.date}>{post.date}</time>
      </div>

      {/* Title */}
      <h1 className="mb-8 text-3xl font-black leading-tight sm:text-4xl">
        {post.title}
      </h1>

      {/* Content */}
      <div
        className="prose prose-invert prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-white
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-gray-300 prose-p:leading-relaxed
          prose-a:text-red-400 prose-a:no-underline hover:prose-a:text-red-300
          prose-strong:text-white
          prose-blockquote:border-red-500/50 prose-blockquote:bg-white/[0.03] prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:px-4
          prose-table:text-sm
          prose-th:text-white prose-th:bg-white/5
          prose-td:text-gray-400 prose-td:border-white/10
          prose-li:text-gray-300
          prose-hr:border-white/10"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {/* Bottom CTA */}
      <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm">
        <h3 className="mb-3 text-xl font-bold">
          想了解更多東方美+ 加盟方案？
        </h3>
        <p className="mb-6 text-gray-400">
          免費諮詢，零成本導入 AI 智慧餐飲系統
        </p>
        <a
          href="/#contact"
          className="inline-block rounded-full bg-red-600 px-8 py-3 font-bold text-white transition-colors hover:bg-red-500"
        >
          立即諮詢加盟
        </a>
      </div>

      {/* Related links */}
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/#about"
          className="text-sm text-white/40 transition-colors hover:text-red-400"
        >
          → 關於東方美+
        </a>
        <a
          href="/#franchise"
          className="text-sm text-white/40 transition-colors hover:text-red-400"
        >
          → 加盟方案
        </a>
        <a
          href="/#technology"
          className="text-sm text-white/40 transition-colors hover:text-red-400"
        >
          → 科技賦能
        </a>
        <a
          href="/#ai-kitchen"
          className="text-sm text-white/40 transition-colors hover:text-red-400"
        >
          → AI 智慧廚房
        </a>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Organization",
              name: "東方美+ 合作團隊",
            },
            publisher: {
              "@type": "Organization",
              name: "東方美+ EB Plus",
            },
            inLanguage: "zh-Hant-TW",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://ebplus.tw/seo/${slug}/`,
            },
            keywords: post.keywords.join(", "),
          }),
        }}
      />
    </article>
  );
}
