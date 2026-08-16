export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { PUBLIC_INDEXING, SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!PUBLIC_INDEXING) {
    // 正式網域下來之前整站不進搜尋（見 src/lib/site.ts）。
    // 不提供 sitemap——給了 sitemap 又擋爬蟲是自相矛盾的訊號。
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
