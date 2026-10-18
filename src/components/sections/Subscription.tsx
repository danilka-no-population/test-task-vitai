import { Check } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import OrderButton from "@/components/ui/OrderButton";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { SUBSCRIPTION } from "@/lib/site";

export default function Subscription() {
  return (
    <section className="grain-dark bg-bean">
      <Container>
        <div className="grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-6">
            <SectionHeading
              id="subscription"
              dark
              index="03"
              eyebrow="Подписка"
              title={
                <>
                  Кофе, который{" "}
                  <em className="font-serif-italic text-rust">приезжает сам</em>
                </>
              }
              description="Раз в месяц привозим две свежие пачки — обжариваем под вас в четверг и доставляем в пятницу. Вам не нужно ничего вспоминать."
            />

            <Reveal delay={80}>
              <ul className="mt-8 space-y-3.5">
                {SUBSCRIPTION.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-paper-soft/85"
                  >
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-rust/20 text-rust">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-9">
                <OrderButton
                  interest="subscription"
                  label="Оформить подписку"
                  className="rounded-full bg-rust px-7 py-3.5 text-base font-semibold text-paper-soft transition-colors hover:bg-rust-deep"
                />
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6" delay={120}>
            <div className="relative overflow-hidden rounded-3xl border border-bean-line bg-bean-soft p-8 sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-rust/15 blur-3xl"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-paper-soft/60 uppercase">
                    Ежемесячно
                  </span>
                  <span className="rounded-full bg-rust px-3 py-1 font-mono text-[11px] text-paper-soft">
                    −30% к разовому
                  </span>
                </div>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="font-serif text-6xl font-semibold text-paper-soft">
                    {SUBSCRIPTION.price}
                  </span>
                  <span className="font-mono text-lg text-paper-soft/60">
                    BYN / {SUBSCRIPTION.unit}
                  </span>
                </div>
                <p className="mt-2 text-sm text-paper-soft/60">
                  Две пачки по 250 г раз в месяц, доставка бесплатно.
                </p>

                <div className="mt-8 flex items-end justify-between gap-6">
                  <p className="max-w-[14rem] text-sm leading-relaxed text-paper-soft/70">
                    «Перестал вспоминать про кофе — теперь он просто есть.»
                  </p>
                  <div className="hidden w-28 shrink-0 overflow-hidden rounded-2xl border border-bean-line">
                    <Image
                      src="/images/beans-texture.jpg"
                      alt="Свежеобжаренное зерно «Кварта»"
                      width={1600}
                      height={1200}
                      sizes="7rem"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
