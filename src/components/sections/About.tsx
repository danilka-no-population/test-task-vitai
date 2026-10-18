import { Clock, Flame, Leaf } from "lucide-react";
import ArchImage from "@/components/ui/ArchImage";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const REASONS = [
  {
    icon: Leaf,
    title: "Аромат на пике",
    text: "Через 2–4 недели после обжарки кофе заметно теряет вкус. Мы привозим его раньше, чем это успевает случиться.",
  },
  {
    icon: Clock,
    title: "1–3 дня до чашки",
    text: "От обжарки до вашей чашки — меньше недели. Не месяцы на полке, как у кофе из супермаркета.",
  },
  {
    icon: Flame,
    title: "Обжарка под заявку",
    text: "Жарим в четверг под уже собранные заявки — ничего не лежит на складе впрок.",
  },
];

export default function About() {
  return (
    <section className="border-b border-line">
      <Container>
        <div className="grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <Reveal className="order-2 lg:order-1 lg:col-span-5">
            <ArchImage
              src="/images/roaster.jpg"
              alt="Обжарка кофе в мастерской «Кварта»"
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 24rem, 100vw"
              accent="moss"
            />
          </Reveal>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <SectionHeading
              id="about"
              index="01"
              eyebrow="О нас"
              title={
                <>
                  Маленькая мастерская{" "}
                  <em className="font-serif-italic text-rust">на двоих</em>
                </>
              }
            />

            <Reveal delay={80}>
              <div className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  «Кварту» придумали Аня и Дмитрий — раньше оба работали
                  бариста, а с 2019 года сами обжаривают кофе. Партиями всего по
                  5 килограммов, чтобы каждое зёрнышко было под контролем.
                </p>
                <p>
                  Обжариваем по четвергам, в пятницу развозим по Минску. Поэтому
                  зерно приходит к вам на 1–3 день после обжарки — пока вкус и
                  сладость на пике.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 md:ml-2 grid gap-4 sm:grid-cols-3">
              {REASONS.map((r, i) => (
                <Reveal key={r.title} delay={i * 90}>
                  <div className="h-full rounded-2xl border border-line bg-paper-soft p-5 transition-colors hover:border-rust/40">
                    <span className="grid size-11 place-items-center rounded-full bg-rust-soft text-rust">
                      <r.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-semibold text-ink">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {r.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
