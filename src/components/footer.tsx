import { CONTACTS } from "@/lib/site";
import Container from "./container";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bean text-paper-soft">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="[&>span:last-child]:text-paper-soft" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper-soft/70">
              Маленькая обжарка в Минске. Обжариваем по четвергам, развозим по
              пятницам. Свежесть — то, что мы продаём.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-wider text-paper-soft/50 uppercase">
              Контакты
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={CONTACTS.phoneHref}
                  className="text-paper-soft transition-colors hover:text-rust"
                >
                  {CONTACTS.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACTS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper-soft transition-colors hover:text-rust"
                >
                  Instagram
                </a>
              </li>
              <li className="text-paper-soft/70">{CONTACTS.address}</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-wider text-paper-soft/50 uppercase">
              Часы работы
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper-soft/70">
              <li>{CONTACTS.hoursWeekday}</li>
              <li>{CONTACTS.hoursWeekend}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-paper-soft/15 py-6 text-xs text-paper-soft/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Обжарка «Кварта», Минск</p>
          <p>Свежеобжаренный кофе с 2019 года</p>
        </div>
      </Container>
    </footer>
  );
}
