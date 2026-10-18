"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { scrollToSection } from "@/lib/scroll";
import Logo from "./Logo";

const NAV = [
  { href: "#coffee", label: "Кофе" },
  { href: "#subscription", label: "Подписка" },
  { href: "#delivery", label: "Доставка" },
  { href: "#about", label: "О нас" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-bean text-paper-soft/80">
        <Container>
          <p className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-center font-mono text-[11px] tracking-[0.14em] uppercase">
            <span>Обжарка — четверг</span>
            <span className="hidden sm:inline">Развоз по Минску — пятница</span>
            <span className="hidden md:inline">
              Бесплатная доставка от 50 BYN
            </span>
          </p>
        </Container>
      </div>

      <div className="relative border-b border-line bg-paper/80 backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center justify-between gap-4">
            <Logo />

            <nav className="hidden items-center gap-8 md:flex">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-rust transition-transform duration-300 group-hover:scale-x-100"
                  />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#order"
                className="hidden items-center gap-2 rounded-full bg-rust px-5 py-2.5 text-sm font-semibold text-paper-soft transition-colors hover:bg-rust-deep sm:inline-flex"
              >
                Оставить заявку
              </a>
              <button
                type="button"
                aria-label={open ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-cream md:hidden"
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </Container>

        <div
          className={`absolute inset-x-0 top-full border-b border-line bg-paper shadow-lg transition-all duration-300 md:hidden ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <Container className="py-4">
            <nav className="flex flex-col gap-1">
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
                  scrollToSection("order");
                }}
                className="mt-2 rounded-full bg-rust px-5 py-3 text-center text-base font-semibold text-paper-soft"
              >
                Оставить заявку
              </button>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
