import { ArrowRight, Coffee } from "lucide-react";
import ArchImage from "@/components/ui/ArchImage";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { PRODUCTS, SUBSCRIPTION } from "@/lib/site";

const STATS = [
  { value: "1–3 дня", label: "от обжарки до вашей чашки" },
  { value: "5 кг", label: "размер одной партии" },
  { value: "2019", label: "обжариваем кофе" },
];

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-6 pr-6">
      <span>{text}</span>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-rust/60" />
    </span>
  );
}

export default function Hero() {
  const marqueeItems = [
    ...PRODUCTS.map((p) => `${p.name} — ${p.price} BYN`),
    `Подписка — ${SUBSCRIPTION.price} BYN / мес`,
  ];

  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="grid items-center gap-14 pt-14 pb-16 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-24">
          <div className="lg:col-span-7 lg:pr-6">
            <Reveal>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-rust" />
                <p className="font-mono text-xs tracking-[0.2em] text-ink-faint uppercase">
                  Обжарка в Минске · с 2019 года
                </p>
              </div>

              <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-ink text-balance sm:text-6xl lg:text-[4.1rem]">
                Кофе, который{" "}
                <em className="font-serif-italic text-rust">не успевает</em>{" "}
                залежаться
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
                Обжариваем небольшими партиями по четвергам и в пятницу привозим
                по Минску. Зерно у вас на 1–3 день после обжарки — а не месяцы
                спустя.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#order"
                  className="group inline-flex items-center gap-2 rounded-full bg-rust px-7 py-3.5 text-base font-semibold text-paper-soft transition-colors hover:bg-rust-deep"
                >
                  Оставить заявку
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#coffee"
                  className="rounded-full border border-line px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-ink/30"
                >
                  Смотреть кофе
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <dl className="mt-12 grid max-w-md grid-cols-3">
                {STATS.map((s, i) => (
                  <div
                    key={s.value}
                    className={i > 0 ? "border-l border-line pl-6 pr-2" : ""}
                  >
                    <dt className="font-mono text-xl font-semibold text-ink sm:text-2xl">
                      {s.value}
                    </dt>
                    <dd className="mt-1.5 text-xs leading-snug text-ink-faint">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={160}>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <ArchImage
                  src="/images/hero-beans.jpg"
                  alt="Свежеобжаренные кофейные зёрна крупным планом"
                  priority
                />

                <div className="absolute -top-7 -right-3 z-10 sm:-right-6">
                  <div className="relative grid size-28 place-items-center sm:size-32">
                    <svg
                      viewBox="0 0 100 100"
                      className="absolute inset-0 size-full animate-spin-slow"
                      aria-hidden="true"
                    >
                      <defs>
                        <path
                          id="hero-circle"
                          d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                        />
                      </defs>
                      <text
                        className="fill-bean font-mono"
                        fontSize="7"
                        letterSpacing="1.6"
                      >
                        <textPath href="#hero-circle">
                          СВЕЖАЯ ОБЖАРКА · КАЖДЫЙ ЧЕТВЕРГ ·
                        </textPath>
                      </text>
                    </svg>
                    <div className="grid size-12 place-items-center rounded-full bg-rust text-paper-soft shadow-lg shadow-rust/30">
                      <Coffee className="size-5" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      <div className="border-y border-line bg-cream/60">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center py-3 font-mono text-sm text-ink-soft">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center">
                {marqueeItems.map((item) => (
                  <MarqueeItem key={item} text={item} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
