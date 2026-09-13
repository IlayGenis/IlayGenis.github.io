import type { ReactNode } from "react";
import { Heebo, Inter, JetBrains_Mono } from "next/font/google";
import type { Locale } from "@/lib/types";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export function Document({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <html
      lang={locale}
      dir={locale === "he" ? "rtl" : "ltr"}
      className={`${inter.variable} ${heebo.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
