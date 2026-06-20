import { ImageResponse } from "next/og";

// Default social-share image for every route that doesn't define its own.
export const alt = "Yev Ledenov — Senior product design for founders";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafafa",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 18, height: 18, borderRadius: 9999, background: "#ff3e02" }} />
          <div style={{ fontSize: 30, fontWeight: 600, color: "#1b1b1b", letterSpacing: "-0.02em" }}>ledenov.</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 68, fontWeight: 600, color: "#1b1b1b", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            <span>Design that ships.</span>
            <span>Not Figma files that don&apos;t.</span>
          </div>
          <div style={{ fontSize: 30, color: "#727272" }}>
            One senior product-design partner — product, site &amp; brand, at founder speed.
          </div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 24, color: "#9a2a07", fontWeight: 600 }}>
          <span>10+ years senior</span>
          <span>·</span>
          <span>Top Rated Plus</span>
          <span>·</span>
          <span>~$2M delivered</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
