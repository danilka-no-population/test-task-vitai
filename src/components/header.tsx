"use client";

import { useState } from "react";
import Container from "./container";
import Logo from "./logo";

const NAV = [
  { href: "#coffee", label: "Кофе" },
  { href: "#subscription", label: "Подписка" },
  { href: "#delivery", label: "Доставка" },
  { href: "#about", label: "О нас" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#order"
              className="hidden rounded-full bg-rust px-5 py-2.5 text-sm font-semibold text-paper-soft transition-colors hover:bg-rust-deep sm:inline-flex"
            >
              Оставить заявку
            </a>
            <button
              type="button"
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full border border-line text-ink md:hidden"
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 top-0 h-px w-4 bg-ink transition-transform ${
                    open ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-px w-4 bg-ink transition-opacity ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-px w-4 bg-ink transition-transform ${
                    open ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-line py-4 md:hidden">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-ink transition-colors hover:bg-cream"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                document
                  .getElementById("order")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-2 rounded-full bg-rust px-5 py-3 text-center text-base font-semibold text-paper-soft"
            >
              Оставить заявку
            </button>
          </nav>
        )}
      </Container>
    </header>
  );
}
