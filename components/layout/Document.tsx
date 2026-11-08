import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export function Document({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
