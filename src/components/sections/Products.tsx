import Container from "@/components/ui/Container";
import OrderButton from "@/components/ui/OrderButton";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PRODUCTS } from "@/lib/site";

export default function Products() {
  return (
    <section className="border-b border-line">
      <Container>
        <div className="py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              id="coffee"
              index="02"
              eyebrow="Ассортимент"
              title="Четыре причины заварить"
              description="Три сорта зерна и дрип-пакеты для тех, у кого нет турки под рукой."
            />
            <Reveal delay={100}>
              <p className="hidden font-mono text-xs text-ink-faint lg:block">
                Обжарка под вашу заявку — в четверг
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 80}>
                <article className="group flex h-full flex-col rounded-3xl border border-line bg-paper-soft p-7 transition-all duration-300 hover:-translate-y-1 hover:border-rust/40 hover:shadow-[0_24px_60px_-32px_rgba(192,83,31,0.4)] sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-[0.2em] text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-wide text-ink-soft uppercase">
                      {p.roast ?? p.unit}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-2xl font-semibold tracking-tight text-ink sm:text-[1.7rem]">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-ink-faint uppercase">
                    {p.origin}
                  </p>

                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
                    {p.description}
                  </p>

                  <div className="my-5 flex flex-wrap gap-2">
                    {p.notes.map((note) => (
                      <span
                        key={note}
                        className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink-soft"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-end justify-between border-t border-line pt-6">
                    <div>
                      <p className="font-mono text-2xl font-semibold text-ink">
                        {p.price} <span className="text-sm">BYN</span>
                      </p>
                      <p className="mt-0.5 text-xs text-ink-faint">
                        / {p.unit}
                      </p>
                    </div>
                    <OrderButton
                      interest="one-time"
                      label="Заказать"
                      className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper-soft"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
