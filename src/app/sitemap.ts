export const dynamic = "force-static";
import { getAllPosts } from "@/lib/posts";
import { PUBLIC_INDEXING, SITE_URL } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // 不對外索引期間輸出空 sitemap——留一張列滿網址的 sitemap 又在 robots.txt 擋爬蟲，
  // 是自相矛盾的訊號，等於把該藏的網址整理好送出去
  if (!PUBLIC_INDEXING) return [];

  const baseUrl = SITE_URL;
  const posts = getAllPosts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/seo`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const seoPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/seo/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...seoPages];
}
