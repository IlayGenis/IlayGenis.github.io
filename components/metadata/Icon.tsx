import { ImageResponse } from "next/og";

/**
 * פאביקון מותאם אישית: סמל ">" בירוק מנטה על רקע כהה.
 * נוצר דינמית ב-build דרך ה-API של Next.
 */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 22,
        background: "#0a0e0a",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#5eead4",
        fontFamily: "monospace",
        fontWeight: 700,
      }}
    >
      {">"}
    </div>,
    { ...size },
  );
}
