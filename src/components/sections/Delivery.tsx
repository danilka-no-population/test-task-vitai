import { Clock, MapPin, Truck } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { CONTACTS, FREE_DELIVERY_FROM } from "@/lib/site";

export default function Delivery() {
  return (
    <section className="border-b border-line">
      <Container>
        <div className="py-16 lg:py-24">
          <SectionHeading
            id="delivery"
            index="04"
            eyebrow="Доставка и самовывоз"
            title="Как кофе попадает к вам"
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-3xl border border-line bg-paper-soft p-8 sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-rust-soft text-rust">
                    <MapPin className="size-6" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-ink-faint uppercase">
                    Самовывоз
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">
                  {CONTACTS.address}
                </h3>
                <p className="mt-2 text-[15px] text-ink-soft">
                  Заберите кофе прямо из мастерской — увидите, где его
                  обжаривают.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-4 border-t border-line pt-6">
                  <div className="flex items-center gap-3">
                    <Clock
                      className="size-4 text-ink-faint"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-mono text-sm text-ink">
                        {CONTACTS.hoursWeekday}
                      </p>
                      <p className="text-xs text-ink-faint">будни</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock
                      className="size-4 text-ink-faint"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-mono text-sm text-ink">
                        {CONTACTS.hoursWeekend}
                      </p>
                      <p className="text-xs text-ink-faint">выходные</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article className="h-full rounded-3xl border border-line bg-paper-soft p-8 sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-moss/15 text-moss">
                    <Truck className="size-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-moss/15 px-3 py-1 font-mono text-[11px] text-moss uppercase">
                    Бесплатно от {FREE_DELIVERY_FROM} BYN
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">
                  Доставка по Минску
                </h3>
                <p className="mt-2 text-[15px] text-ink-soft">
                  Развозим по пятницам, сразу после обжарки. При заказе от{" "}
                  {FREE_DELIVERY_FROM} BYN — привезём бесплатно.
                </p>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6">
                  {["в пятницу", "свежая обжарка", "от 50 BYN — бесплатно"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink-soft"
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
