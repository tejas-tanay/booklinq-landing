/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(135deg, #0a2540 0%, #6b5bff 100%)",
          color: "white",
          fontFamily:
            "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Inline logo mark */}
          <svg width="64" height="64" viewBox="0 0 128 128" fill="none">
            <circle cx="64" cy="56" r="32" stroke="white" strokeWidth="10" opacity="0.9" />
            <path d="M82 74 L98 90" stroke="white" strokeWidth="10" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: -0.5 }}>
            Booklinq
          </span>
        </div>
        <div style={{ height: 40 }} />
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
          Your booking link, anywhere.
        </div>
        <div style={{ height: 16 }} />
        <div style={{ fontSize: 28, opacity: 0.9, maxWidth: 900 }}>
          Keep your money. Own your guests. Convert directly.
        </div>
        <div style={{ height: 40 }} />
        <div style={{ display: "flex", gap: 16, opacity: 0.9 }}>
          <span
            style={{
              fontSize: 22,
              padding: "10px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            Hospitality alpha • Nov 2025
          </span>
          <span
            style={{
              fontSize: 22,
              padding: "10px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            Ticketing • Dec 2025
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}


