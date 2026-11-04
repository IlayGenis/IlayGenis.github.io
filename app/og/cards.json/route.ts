import { ogCards } from "@/lib/og";

// Build input for scripts/build-og.mjs, which removes it from out/ when done.
export const dynamic = "force-static";

export function GET() {
  return Response.json(ogCards);
}
