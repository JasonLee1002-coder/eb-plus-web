"use client";

import { usePathname } from "next/navigation";

/**
 * /welcome/* 是給特定來賓看的迎賓頁，不掛全站的導覽列與頁尾——
 * 那一整排「加盟方案／加盟支援」對日方來賓是雜訊，而且加盟那條線
 * 依 Jason 2026-09-06 裁示現階段不對外曝光。
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/welcome")) return null;
  return <>{children}</>;
}
