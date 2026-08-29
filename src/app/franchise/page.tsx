import type { Metadata } from "next";
import HashRedirect from "@/components/HashRedirect";

export const metadata: Metadata = { title: "加盟方案 | 東方美+ EB Plus", robots: { index: false, follow: true } };

export default function Page() {
  return <HashRedirect to="/#franchise" label="加盟方案" />;
}
