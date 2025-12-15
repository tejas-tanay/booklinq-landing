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
          background: "linear-gradient(135deg, #fbfcff 0%, #f3f6ff 60%, #ecfbfb 100%)",
          color: "#1D0B5B",
          fontFamily:
            "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Inline logo mark: Purple L with teal arrow */}
          <svg width="64" height="64" viewBox="0 0 32 32" fill="none">
            {/* Purple L shape */}
            <rect x="0" y="0" width="12" height="32" fill="#1D0B5B" />
            <rect x="0" y="20" width="32" height="12" fill="#1D0B5B" />
            {/* Teal arrow */}
            <path
              d="M14 18 L22 10 M22 10 L22 14 M22 10 L18 10"
              stroke="#02A6A5"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: -0.5, color: "#1D0B5B" }}>
            booklinq
          </span>
        </div>
        <div style={{ height: 40 }} />
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
          Your booking link.
          <br />
          Your guests.
          <br />
          Your terms.
        </div>
        <div style={{ height: 16 }} />
        <div style={{ fontSize: 28, opacity: 0.8, maxWidth: 900 }}>
          A direct booking page for independent hotels and short-stay hosts — without commissions or lock-in.
        </div>
        <div style={{ height: 40 }} />
        <div style={{ display: "flex", gap: 16, opacity: 0.9 }}>
          <span
            style={{
              fontSize: 22,
              padding: "10px 16px",
              borderRadius: 999,
              background: "rgba(2,166,165,0.12)",
              border: "1px solid rgba(2,166,165,0.25)",
              color: "#1D0B5B",
            }}
          >
            Hospitality alpha • Nov 2025
          </span>
          <span
            style={{
              fontSize: 22,
              padding: "10px 16px",
              borderRadius: 999,
              background: "rgba(2,166,165,0.12)",
              border: "1px solid rgba(2,166,165,0.25)",
              color: "#1D0B5B",
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


