import OpenGraphImage from "@/components/metadata/OpenGraphImage";

// Preserve a shared asset URL across both language root layouts.
export const dynamic = "force-static";

export function GET() {
  return OpenGraphImage();
}
