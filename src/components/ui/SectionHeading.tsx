import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  id?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  dark = false,
  align = "left",
  id,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div id={id} className={`scroll-mt-28 ${centered ? "text-center" : ""}`}>
      <Reveal>
        <div
          className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        >
          <span
            aria-hidden="true"
            className="font-mono text-xs tracking-[0.2em] text-rust uppercase"
          >
            {index}
          </span>
          <span
            aria-hidden="true"
            className={`h-px w-8 ${dark ? "bg-bean-line" : "bg-line"}`}
          />
          <span
            className={`font-mono text-xs tracking-[0.2em] uppercase ${
              dark ? "text-paper-soft/60" : "text-ink-faint"
            }`}
          >
            {eyebrow}
          </span>
        </div>

        <h2
          className={`mt-5 font-serif text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl ${
            dark ? "text-paper-soft" : "text-ink"
          }`}
        >
          {title}
        </h2>

        {description && (
          <p
            className={`mt-5 max-w-2xl text-lg leading-relaxed text-pretty ${
              centered ? "mx-auto" : ""
            } ${dark ? "text-paper-soft/70" : "text-ink-soft"}`}
          >
            {description}
          </p>
        )}
      </Reveal>
    </div>
  );
}
