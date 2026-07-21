import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ais3-2026.sectools.tw/"),
  title: "AIS3 2026｜AI 資安應用實作與模型安全",
  description:
    "陳勝舢博士於 AIS3 2026 的「AI 資安應用實作與模型安全」課程教材。",
  openGraph: {
    title: "AIS3 2026｜AI 資安應用實作與模型安全",
    description: "三堂課：從模型的沉默、代理者的工具，到答案成為真相以前。",
    type: "website",
    locale: "zh_TW",
    siteName: "AIS3 2026 Course Materials",
    images: [
      {
        url: "og.png",
        width: 1731,
        height: 909,
        alt: "AIS3 2026 — Refusal, Agency, Truth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIS3 2026｜AI 資安應用實作與模型安全",
    description: "三堂課，探索模型、工具與真相。",
    images: ["og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
