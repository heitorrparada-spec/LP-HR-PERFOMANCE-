import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          border: "2px solid #b7975f",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 34,
            fontWeight: 600,
            color: "#b7975f",
            letterSpacing: "-0.02em",
          }}
        >
          HR
        </span>
      </div>
    ),
    { ...size },
  );
}
