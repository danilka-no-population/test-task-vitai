import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import Logo from "@/components/layout/Logo";
import Container from "@/components/ui/Container";
import { CONTACTS } from "@/lib/site";

const NAV = [
  { href: "#coffee", label: "Кофе" },
  { href: "#subscription", label: "Подписка" },
  { href: "#delivery", label: "Доставка" },
  { href: "#about", label: "О нас" },
];

export default function Footer() {
  return (
    <footer className="grain-dark bg-bean text-paper-soft">
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-rust/50 to-transparent"
      />
      <Container>
        <div className="grid gap-x-8 gap-y-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <Logo dark />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-paper-soft/60">
              Маленькая обжарка в Минске. Обжариваем по четвергам, развозим по
              пятницам — свежесть, которую можно попробовать.
            </p>
            <a
              href="#order"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3 text-sm font-semibold text-paper-soft transition-colors hover:bg-rust-deep"
            >
              Оставить заявку
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-xs tracking-[0.2em] text-paper-soft/60 uppercase">
              Навигация
            </p>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-paper-soft/75 transition-colors hover:text-paper-soft"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-rust transition-all duration-300 group-hover:w-3"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-xs tracking-[0.2em] text-paper-soft/60 uppercase">
              Контакты
            </p>
            <ul className="mt-5 space-y-3.5 text-sm text-paper-soft/75">
              <li>
                <a
                  href={CONTACTS.phoneHref}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-paper-soft"
                >
                  <Phone
                    className="size-4 text-paper-soft/60"
                    aria-hidden="true"
                  />
                  {CONTACTS.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACTS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-paper-soft"
                >
                  <ArrowUpRight
                    className="size-4 text-paper-soft/60"
                    aria-hidden="true"
                  />
                  Instagram
                </a>
              </li>
              <li className="inline-flex w-60 items-start gap-2.5">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-paper-soft/60"
                  aria-hidden="true"
                />
                {CONTACTS.address}
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-xs tracking-[0.2em] text-paper-soft/60 uppercase">
              Часы работы
            </p>
            <ul className="mt-5 space-y-3.5 text-sm text-paper-soft/75">
              <li className="flex items-center gap-2.5">
                <Clock
                  className="size-4 text-paper-soft/60"
                  aria-hidden="true"
                />
                {CONTACTS.hoursWeekday}
              </li>
              <li className="flex items-center gap-2.5">
                <Clock
                  className="size-4 text-paper-soft/60"
                  aria-hidden="true"
                />
                {CONTACTS.hoursWeekend}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-bean-line py-6 font-mono text-xs text-paper-soft/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Обжарка «Кварта», Минск</p>
          <p>Свежеобжаренный кофе с 2019 года</p>
        </div>
      </Container>
    </footer>
  );
}
