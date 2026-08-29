import type { Metadata } from "next";
import HashRedirect from "@/components/HashRedirect";

export const metadata: Metadata = { title: "聯絡我們 | 東方美+ EB Plus", robots: { index: false, follow: true } };

export default function Page() {
  return <HashRedirect to="/#contact" label="聯絡我們" />;
}
