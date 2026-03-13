import HomeShowcase from "@/components/HomeShowcase";

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "東方美集團",
            alternateName: ["Eastern Beauty Group", "EB Plus", "東方美+"],
            description:
              "台灣最大早午餐連鎖集團，旗下擁有巧沛東方美、美芝城、美而美、瑞麟美而美等品牌，結合 AI 科技打造智慧餐飲生態系。",
            numberOfEmployees: { "@type": "QuantitativeValue", value: 970 },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "東方美+ EB Plus",
            description: "科技賦能的智慧餐飲集團",
            priceRange: "$$",
            servesCuisine: ["早午餐", "西式早餐", "中式早餐"],
            areaServed: { "@type": "Country", name: "台灣" },
          }),
        }}
      />

      <HomeShowcase />
    </>
  );
}
