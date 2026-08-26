import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

/* Social share preview (og:image / twitter:image), generated at build time. */

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0e1a",
          backgroundImage:
            "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0) 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 24,
            color: "#8b8fa3",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#c9a84c",
            }}
          />
          Software Developer &amp; Fintech Enthusiast — Rwanda
        </div>
        <div
          style={{
            marginTop: 32,
            maxWidth: 900,
            fontSize: 72,
            fontWeight: 500,
            lineHeight: 1.15,
            color: "#f0f0f5",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 24,
            maxWidth: 860,
            fontSize: 28,
            lineHeight: 1.4,
            color: "#8b8fa3",
          }}
        >
          I build scalable web applications, fintech platforms &amp; digital
          systems that solve real problems.
        </div>
      </div>
    ),
    { ...size }
  );
}
