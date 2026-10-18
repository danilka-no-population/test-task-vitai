import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Lora, Manrope } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "cyrillic"],
  weight: ["600"],
});

const loraItalic = Lora({
  variable: "--font-lora-italic",
  subsets: ["latin", "cyrillic"],
  style: "italic",
  weight: ["600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
});

const TITLE = "Кварта — свежеобжаренный кофе из Минска";
const DESCRIPTION =
  "Маленькая обжарка из Минска. Обжариваем по четвергам, развозим по пятницам — зерно у вас на 1–3 день после обжарки. Эфиопия, Колумбия, Бразилия и дрип-пакеты.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Кварта",
  },
  description: DESCRIPTION,
  applicationName: "Кварта",
  authors: [{ name: "Обжарка «Кварта»" }],
  keywords: [
    "кофе",
    "свежеобжаренный кофе",
    "обжарка кофе Минск",
    "кофе с доставкой Минск",
    "дрип-пакеты",
    "подписка на кофе",
    "кофе в зёрнах",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "Кварта",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "https://test-task-vitai.vercel.app/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Кварта — свежеобжаренный кофе из Минска",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://test-task-vitai.vercel.app/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f0e4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${lora.variable} ${loraItalic.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
