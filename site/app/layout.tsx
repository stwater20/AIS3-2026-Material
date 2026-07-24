import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ais3-2026.sectools.tw/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AIS3 2026｜AI 資安應用實作與模型安全 — LLM Security 與 Prompt Injection 實作課程",
  description:
    "陳勝舢博士於 AIS3 2026 的「AI 資安應用實作與模型安全」課程教材。三堂實作課涵蓋 LLM 模型安全與 Activation Steering、AI Agent 安全與 Prompt Injection（提示注入）攻防、LLM 評測與紅隊演練，附 Jupyter Notebook Labs 與課程筆記。",
  keywords: [
    "AIS3 2026",
    "AI 資安",
    "AI Security",
    "LLM Security",
    "LLM 安全",
    "模型安全",
    "Model Safety",
    "Activation Steering",
    "Prompt Injection",
    "提示注入",
    "AI Agent Security",
    "Jailbreak",
    "LLM Evaluation",
    "LLM 評測",
    "Red Teaming",
    "紅隊演練",
    "陳勝舢",
    "Sheng-Shan Chen",
    "SecTools.tw",
    "台灣資安課程",
  ],
  authors: [{ name: "Dr. Sheng-Shan Chen", url: "https://sectools.tw/" }],
  creator: "Dr. Sheng-Shan Chen",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "AIS3 2026｜AI 資安應用實作與模型安全",
    description:
      "三堂實作課：LLM 模型安全與 Activation Steering、AI Agent 安全與 Prompt Injection、LLM 評測與紅隊演練。",
    url: siteUrl,
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
    description:
      "三堂實作課：LLM 安全、AI Agent 與 Prompt Injection、LLM 評測與紅隊演練。",
    images: ["og.png"],
  },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "AIS3 2026 — AI 資安應用實作與模型安全",
  description:
    "涵蓋 LLM 模型安全、Activation Steering、AI Agent 安全、Prompt Injection 與 LLM 評測的實作課程。",
  provider: {
    "@type": "Organization",
    name: "AIS3",
    sameAs: "https://ais3.org/",
  },
  instructor: {
    "@type": "Person",
    name: "Sheng-Shan Chen",
    alternateName: "陳勝舢",
    url: "https://sectools.tw/",
  },
  url: siteUrl,
  inLanguage: "zh-Hant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
