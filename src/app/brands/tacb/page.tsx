import type { Metadata } from "next";
import BrandPage from "@/components/BrandPage";
import { TACB } from "@/lib/brands";
import { restaurantSchema } from "@/lib/brand-schema";
import { PUBLIC_INDEXING, SITE_URL } from "@/lib/site";

const URL = `${SITE_URL}/brands/tacb`;

export const metadata: Metadata = {
  title: "TACB 人文餐酒（高雄新崛江） | 東方美+ EB Plus",
  description: "TACB 人文餐酒位於高雄新崛江商圈，純夜間營業的餐酒館，19:00 開店。東方美旗下品牌。",
  keywords: [
    "TACB",
    "TACB人文餐酒",
    "高雄餐酒館",
    "新崛江餐酒館",
    "新興區餐酒館",
    "高雄調酒",
    "東方美",
  ],
  alternates: { canonical: URL },
  robots: PUBLIC_INDEXING
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantSchema(TACB, URL)),
        }}
      />
      <BrandPage brand={TACB} />
    </>
  );
}
