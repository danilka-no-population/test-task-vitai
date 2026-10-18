import { Flame, Phone, PhoneCall, Truck } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const STEPS = [
  {
    icon: PhoneCall,
    title: "Оставляете заявку",
    text: "Заполните форму ниже — это займёт минуту.",
  },
  {
    icon: Phone,
    title: "Менеджер звонит",
    text: "Уточним детали и поможем выбрать сорт.",
  },
  {
    icon: Flame,
    title: "Обжариваем в четверг",
    text: "Жарим небольшую партию под вашу заявку.",
  },
  {
    icon: Truck,
    title: "Привозим в пятницу",
    text: "Развозим по Минску или ждём на самовывозе.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-b border-line">
      <Container>
        <div className="py-16 lg:py-24">
          <SectionHeading
            id="how"
            index="05"
            eyebrow="Как это работает"
            title="От заявки до чашки — четыре шага"
          />

          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="h-full">
                <Reveal delay={i * 90} className="h-full">
                  <div className="relative h-full rounded-3xl border border-line bg-paper-soft p-6">
                    <span
                      aria-hidden="true"
                      className="absolute top-6 right-6 font-serif text-4xl font-semibold text-line"
                    >
                      {i + 1}
                    </span>
                    <span className="grid size-12 place-items-center rounded-2xl bg-ink text-paper-soft">
                      <s.icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-semibold text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
