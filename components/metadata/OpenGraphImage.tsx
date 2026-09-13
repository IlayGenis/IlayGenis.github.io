import { ImageResponse } from "next/og";
import { resume } from "@/data/resume";

/**
 * תמונת Open Graph לשיתוף ברשתות חברתיות.
 * נוצרת בזמן build ומשותפת לגרסאות השפה.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${resume.name} — ${resume.title}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0a0e0a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          color: "#5eead4",
          fontSize: 28,
          marginBottom: 24,
          display: "flex",
        }}
      >
        $ whoami
      </div>
      <div
        style={{
          color: "#e6edf3",
          fontSize: 96,
          fontWeight: 700,
          display: "flex",
        }}
      >
        {resume.name}
      </div>
      <div
        style={{
          color: "#5eead4",
          fontSize: 48,
          marginTop: 16,
          display: "flex",
        }}
      >
        {resume.title}
      </div>
      <div
        style={{
          color: "#8b949e",
          fontSize: 28,
          marginTop: 32,
          display: "flex",
        }}
      >
        {resume.hero.focus.join(" / ")}
      </div>
    </div>,
    { ...size },
  );
}
