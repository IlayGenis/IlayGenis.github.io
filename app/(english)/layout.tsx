import type { ReactNode } from "react";
import { Document } from "@/components/layout/Document";
import { portfolioMetadata } from "@/lib/metadata";

export const metadata = portfolioMetadata("en");

export default function Layout({ children }: { children: ReactNode }) {
  return <Document locale="en">{children}</Document>;
}
