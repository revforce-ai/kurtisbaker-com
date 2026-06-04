import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Static social card for link shares (X, LinkedIn, iMessage, AI engines).
export const alt =
  "Kurt Baker — Private Wealth Manager (CFP, CEPA, AIF). Helping owners build a Freedom Ready business.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const portrait = await readFile(join(process.cwd(), "public/kurt-baker.jpg"));
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0f1a2e 0%, #1b2c49 100%)",
          color: "#f7f4ed",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "76px",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#d8b15c",
              fontSize: 26,
              letterSpacing: 8,
              fontWeight: 700,
            }}
          >
            CFP · CEPA · AIF
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.02,
              marginTop: 26,
            }}
          >
            Kurt Baker
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#c8cdd8",
              marginTop: 26,
              maxWidth: 560,
              lineHeight: 1.3,
            }}
          >
            Helping owners build a Freedom Ready business.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#9aa5bd",
              marginTop: 44,
            }}
          >
            kurtisbaker.com
          </div>
        </div>
        <div style={{ display: "flex", width: 440, position: "relative" }}>
          <img
            src={portraitSrc}
            width={440}
            height={630}
            style={{ width: "440px", height: "630px", objectFit: "cover" }}
            alt=""
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
