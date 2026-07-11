import { ImageResponse } from "next/og";

// Next.js auto-wires this into `openGraph.images` and, when no dedicated
// `twitter-image` exists, into the Twitter card as well.
export const alt =
  "Kloyya — The intelligence behind every decision you make";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#15171C",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            color: "#EAE6DC",
            fontSize: 40,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              backgroundColor: "#C8801F",
            }}
          />
          Kloyya
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              color: "#EAE6DC",
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            The intelligence behind every decision you make.
          </div>
          <div
            style={{
              color: "#D9A441",
              fontSize: 32,
              letterSpacing: "0.02em",
              fontFamily: "monospace",
            }}
          >
            An autonomous AI Chief of Staff — join the waitlist.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
