import { Cv } from "@/components/Cv";
import { cvMetadata } from "@/lib/metadata";

export const metadata = cvMetadata("he");

export default function CvPage() {
  return <Cv locale="he" />;
}
