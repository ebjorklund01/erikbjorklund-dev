import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#5a7c6e",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 15,
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          EB
        </span>
      </div>
    ),
    { ...size }
  );
}
