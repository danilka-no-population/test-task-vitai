import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Кварта — свежеобжаренный кофе из Минска";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [regular, bold] = await Promise.all([
    readFile(path.join(process.cwd(), "src/lib/assets/og-font.woff")),
    readFile(path.join(process.cwd(), "src/lib/assets/og-font-bold.woff")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "68px 76px",
        background: "#1f1610",
        color: "#f6f0e4",
        fontFamily: "Manrope",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "#c0531f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            role="img"
            aria-label="Кварта"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f6f0e4"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 2v2" />
            <path d="M14 2v2" />
            <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
            <path d="M6 2v2" />
          </svg>
        </div>
        <span
          style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          Кварта
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
          }}
        >
          Свежеобжаренный кофе
        </div>
        <div
          style={{
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: "#c0531f",
          }}
        >
          из Минска
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#f6f0e4",
            opacity: 0.85,
          }}
        >
          Обжариваем по четвергам — развозим по пятницам
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#f6f0e4",
            opacity: 0.55,
          }}
        >
          Зерно у вас на 1–3 день после обжарки
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Manrope", data: regular, weight: 600, style: "normal" },
        { name: "Manrope", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
