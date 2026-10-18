"use client";

import { Coffee } from "lucide-react";

type LogoProps = {
  className?: string;
  dark?: boolean;
};

export default function Logo({ className = "", dark = false }: LogoProps) {
  function scrollToTop() {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Кварта — наверх"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="grid size-10 transform-gpu place-items-center rounded-full bg-rust text-paper-soft transition-transform duration-500 ease-out will-change-transform group-hover:rotate-12">
        <Coffee className="size-5" strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span
        className={`font-serif text-xl font-semibold tracking-tight ${
          dark ? "text-paper-soft" : "text-ink"
        }`}
      >
        Кварта
      </span>
    </button>
  );
}
