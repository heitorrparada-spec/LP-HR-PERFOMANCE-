import { ImageResponse } from "next/og";

export const alt = "HR Performance — Acompanhamento Esportivo Multidisciplinar";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse 900px 500px at 50% -10%, rgba(201,162,39,0.22), transparent 60%), #2f4a3e",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
            fontFamily: "Georgia, serif",
            color: "#ede6d6",
            fontSize: 88,
          }}
        >
          <span style={{ color: "#c9a227", fontWeight: 600 }}>HR</span>
          <span style={{ letterSpacing: -1 }}>PERFORMANCE</span>
        </div>
        <div
          style={{
            marginTop: 28,
            width: 88,
            height: 2,
            background: "#c9a227",
          }}
        />
        <div
          style={{
            marginTop: 28,
            display: "flex",
            fontFamily: "sans-serif",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#aeb7ab",
          }}
        >
          Nutrição · Psicologia · Performance
        </div>
      </div>
    ),
    { ...size },
  );
}
