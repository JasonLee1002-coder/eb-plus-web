import type { Metadata } from "next";
import HashRedirect from "@/components/HashRedirect";

export const metadata: Metadata = { title: "關於我們 | 東方美+ EB Plus", robots: { index: false, follow: true } };

export default function Page() {
  return <HashRedirect to="/#about" label="關於我們" />;
}
