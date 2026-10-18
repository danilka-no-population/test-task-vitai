import type { Metadata } from "next";
import { IBM_Plex_Mono, Lora, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "cyrillic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Кварта — свежеобжаренный кофе из Минска",
    template: "%s · Кварта",
  },
  description:
    "Маленькая обжарка из Минска. Обжариваем по четвергам, развозим по пятницам — зерно у вас на 1–3 день после обжарки. Эфиопия, Колумбия, Бразилия и дрип-пакеты.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${lora.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
