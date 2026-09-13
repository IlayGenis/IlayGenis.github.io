import type { ReactNode } from "react";
import { Document } from "@/components/layout/Document";
import { portfolioMetadata } from "@/lib/metadata";

export const metadata = portfolioMetadata("he");

export default function Layout({ children }: { children: ReactNode }) {
  return <Document locale="he">{children}</Document>;
}
