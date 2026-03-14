import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "東方美+ | EB Plus — 科技賦能的智慧餐飲集團",
  description:
    "東方美+ (EB Plus) 是東方美集團相關合作團隊打造的科技升級品牌。旗下擁有巧沛東方美、巧沛廚房、東方美早餐等品牌，結合 AI 智慧廚房、自動化供應鏈、數據驅動營運，全台超過 970 家門市。",
  keywords: [
    "東方美",
    "東方美+",
    "EB Plus",
    "Eastern Beauty",
    "東方美早餐",
    "巧沛東方美",
    "巧沛廚房",
    "早午餐加盟",
    "餐飲科技",
    "AI智慧廚房",
    "餐飲供應鏈",
    "原物料供應",
    "智慧餐飲",
    "餐飲自動化",
    "早餐店加盟",
    "台灣早餐連鎖",
    "餐飲數位轉型",
  ],
  openGraph: {
    title: "東方美+ | EB Plus — 科技賦能的智慧餐飲集團",
    description:
      "全台 970+ 門市、192 台配送車隊。東方美+ 以 AI 與科技重新定義台灣餐飲業，打造零成本轉型的智慧餐飲生態系。",
    locale: "zh_TW",
    type: "website",
    siteName: "東方美+ EB Plus",
  },
  twitter: {
    card: "summary_large_image",
    title: "東方美+ | EB Plus — 科技賦能的智慧餐飲集團",
    description:
      "全台 970+ 門市。東方美+ 以 AI 與科技重新定義台灣餐飲業。",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ebplus.tw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#C8102E" />
      </head>
      <body className={`${notoSansTC.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
