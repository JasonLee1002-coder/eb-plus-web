import type { Metadata } from "next";
import BrandPage from "@/components/BrandPage";
import { XINDIAN } from "@/lib/brands";
import { restaurantSchema } from "@/lib/brand-schema";
import { PUBLIC_INDEXING, SITE_URL } from "@/lib/site";

const URL = `${SITE_URL}/brands/xindian`;

export const metadata: Metadata = {
  title: "欣殿萬飲（高雄駁二） | 東方美+ EB Plus",
  description: "欣殿萬飲位於高雄駁二藝術特區大義倉庫群，白天早午餐、傍晚起餐酒館，同一個空間與吧台承接兩個時段。東方美旗下品牌。",
  keywords: [
    "欣殿萬飲",
    "高雄駁二餐酒館",
    "駁二早午餐",
    "鹽埕區餐酒館",
    "大義倉庫群",
    "高雄早午餐",
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
          __html: JSON.stringify(restaurantSchema(XINDIAN, URL)),
        }}
      />
      <BrandPage brand={XINDIAN} />
    </>
  );
}
