import type { Brand } from "./brands";

/**
 * Restaurant schema（LocalBusiness 的子型別）。
 *
 * 刻意沒有 aggregateRating——Google 的規範是評分要來自站方自己收集且可查證，
 * 把別處的 Google 評分抄進自家 JSON-LD 屬於不當標記。要看評價走 sameAs 的連結。
 */
export function restaurantSchema(brand: Brand, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: brand.name,
    alternateName: brand.nameEn,
    description: brand.tagline,
    url,
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.streetAddress,
      addressLocality: brand.addressLocality,
      addressRegion: brand.addressRegion,
      addressCountry: "TW",
    },
    openingHours: brand.openingHours,
    ...(brand.tel ? { telephone: brand.tel } : {}),
    servesCuisine: brand.servesCuisine,
    sameAs: [brand.googleMapsUrl],
    parentOrganization: {
      "@type": "Organization",
      name: "東方美集團",
    },
  };
}
