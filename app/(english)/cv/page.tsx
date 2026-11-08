import { Cv } from "@/components/Cv";
import { cvMetadata } from "@/lib/metadata";

export const metadata = cvMetadata();

export default function CvPage() {
  return <Cv />;
}
