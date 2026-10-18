"use client";

import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  INTEREST_LABELS,
  type Interest,
  LEAD_INTEREST_EVENT,
  type LeadPayload,
} from "@/lib/lead";
import { normalizeBelarusianPhone } from "@/lib/phone";
import { CONTACTS } from "@/lib/site";

const INTERESTS: Interest[] = ["subscription", "one-time", "question"];

type Status = "idle" | "submitting" | "success" | "error";

type UTM = Pick<
  LeadPayload,
  | "utm_source"
  | "utm_medium"
  | "utm_campaign"
  | "utm_content"
  | "utm_term"
  | "referrer"
  | "landing_page"
>;

const inputClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-faint transition-colors focus:border-rust focus:outline-none";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<Interest>("one-time");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const utmRef = useRef<UTM>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    utmRef.current = {
      utm_source: params.get("utm_source") ?? undefined,
      utm_medium: params.get("utm_medium") ?? undefined,
      utm_campaign: params.get("utm_campaign") ?? undefined,
      utm_content: params.get("utm_content") ?? undefined,
      utm_term: params.get("utm_term") ?? undefined,
      referrer: document.referrer || undefined,
      landing_page: window.location.pathname,
    };

    const onInterest = (e: Event) => {
      const detail = (e as CustomEvent<Interest>).detail;
      setInterest(detail);
    };
    window.addEventListener(LEAD_INTEREST_EVENT, onInterest);
    return () => window.removeEventListener(LEAD_INTEREST_EVENT, onInterest);
  }, []);

  function validate() {
    const next: { name?: string; phone?: string } = {};
    if (name.trim().length < 2) {
      next.name = "Подскажите, как к вам обращаться";
    }
    if (!normalizeBelarusianPhone(phone)) {
      next.phone = "Введите белорусский номер, например +375 29 000-00-00";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    if (!validate()) return;

    const normalizedPhone = normalizeBelarusianPhone(phone);
    if (!normalizedPhone) return;

    setStatus("submitting");

    const payload: LeadPayload = {
      name: name.trim(),
      phone: normalizedPhone,
      interest,
      comment: comment.trim() || undefined,
      ...utmRef.current,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setPhone("");
      setComment("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="border-b border-line">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-5">
            <SectionHeading
              id="order"
              index="06"
              eyebrow="Заявка"
              title={
                <>
                  Оставьте заявку —{" "}
                  <em className="font-serif-italic text-rust">перезвоним</em>
                </>
              }
              description="Менеджер уточнит детали и поможет выбрать сорт. Никаких предоплат — платите, когда получите кофе."
            />

            <Reveal delay={100}>
              <div className="mt-8 space-y-4 text-[15px] text-ink-soft">
                <p>
                  Быстрее — по телефону{" "}
                  <a
                    href={CONTACTS.phoneHref}
                    className="font-semibold text-ink underline decoration-rust/40 underline-offset-4 transition-colors hover:text-rust"
                  >
                    {CONTACTS.phone}
                  </a>{" "}
                  или в{" "}
                  <a
                    href={CONTACTS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink underline decoration-rust/40 underline-offset-4 transition-colors hover:text-rust"
                  >
                    Instagram
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={120}>
            <div className="rounded-3xl border border-line bg-paper-soft p-7 sm:p-9">
              {status === "success" ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <span className="grid size-16 place-items-center rounded-full bg-moss/15 text-moss">
                    <CircleCheck className="size-8" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">
                    Заявка отправлена
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft">
                    Спасибо! Перезвоним в ближайшее время и поможем выбрать
                    кофе.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-7 rounded-full border border-line px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/30"
                  >
                    Отправить ещё одну
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="mb-2 block text-sm font-medium text-ink"
                      >
                        Имя
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Как к вам обращаться"
                        className={inputClass}
                        aria-invalid={Boolean(errors.name)}
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-rust">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lead-phone"
                        className="mb-2 block text-sm font-medium text-ink"
                      >
                        Телефон
                      </label>
                      <input
                        id="lead-phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+375 29 000-00-00"
                        className={inputClass}
                        aria-invalid={Boolean(errors.phone)}
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-rust">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <fieldset className="mt-5">
                    <legend className="mb-2 text-sm font-medium text-ink">
                      Что вас интересует
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {INTERESTS.map((i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setInterest(i)}
                          aria-pressed={interest === i}
                          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                            interest === i
                              ? "bg-ink text-paper-soft"
                              : "border border-line text-ink-soft hover:border-ink/30"
                          }`}
                        >
                          {INTEREST_LABELS[i]}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div className="mt-5">
                    <label
                      htmlFor="lead-comment"
                      className="mb-2 block text-sm font-medium text-ink"
                    >
                      Комментарий{" "}
                      <span className="font-normal text-ink-faint">
                        (необязательно)
                      </span>
                    </label>
                    <textarea
                      id="lead-comment"
                      rows={4}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Например: любим молочные напитки, что посоветуете?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <div className="mt-5 flex items-start gap-3 rounded-xl border border-rust/30 bg-rust-soft p-4">
                      <CircleAlert
                        className="mt-0.5 size-5 shrink-0 text-rust"
                        aria-hidden="true"
                      />
                      <p className="text-sm leading-relaxed text-ink">
                        Не получилось отправить заявку. Попробуйте ещё раз или
                        позвоните нам:{" "}
                        <a
                          href={CONTACTS.phoneHref}
                          className="font-semibold underline underline-offset-2"
                        >
                          {CONTACTS.phone}
                        </a>
                        .
                      </p>
                    </div>
                  )}

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-rust px-7 py-3.5 text-base font-semibold whitespace-nowrap text-paper-soft transition-colors hover:bg-rust-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {status === "submitting" ? (
                        <>
                          <LoaderCircle
                            className="size-4 animate-spin"
                            aria-hidden="true"
                          />
                          Отправляем…
                        </>
                      ) : (
                        <>
                          <Send className="size-4" aria-hidden="true" />
                          Отправить заявку
                        </>
                      )}
                    </button>
                    <p className="max-w-xs text-xs leading-snug text-ink-faint">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных
                      данных.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
