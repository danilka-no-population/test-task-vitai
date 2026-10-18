import { NextResponse } from "next/server";
import type { Interest } from "@/lib/lead";
import { findRecentByPhone, saveLead } from "@/lib/leads";
import { normalizeBelarusianPhone } from "@/lib/phone";
import { notifyLead } from "@/lib/telegram";

export const runtime = "nodejs";

const DEDUP_WINDOW_MS = 10 * 60 * 1000;
const INTERESTS: Interest[] = ["subscription", "one-time", "question"];

function cleanString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() !== ""
    ? value.trim()
    : undefined;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректный запрос" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  if (name.length < 2) {
    return NextResponse.json(
      { error: "Подскажите, как к вам обращаться" },
      { status: 400 },
    );
  }

  const phone = normalizeBelarusianPhone(
    typeof body.phone === "string" ? body.phone : "",
  );
  if (!phone) {
    return NextResponse.json(
      { error: "Введите корректный белорусский номер телефона" },
      { status: 400 },
    );
  }

  const interest = body.interest as Interest;
  if (!INTERESTS.includes(interest)) {
    return NextResponse.json(
      { error: "Выберите, что вас интересует" },
      { status: 400 },
    );
  }

  const existing = await findRecentByPhone(phone, DEDUP_WINDOW_MS);
  if (existing) {
    return NextResponse.json({ ok: true, duplicate: true });
  }

  try {
    const lead = await saveLead({
      name,
      phone,
      interest,
      comment: cleanString(body.comment),
      utm_source: cleanString(body.utm_source),
      utm_medium: cleanString(body.utm_medium),
      utm_campaign: cleanString(body.utm_campaign),
      utm_content: cleanString(body.utm_content),
      utm_term: cleanString(body.utm_term),
      referrer: cleanString(body.referrer),
      landing_page: cleanString(body.landing_page),
    });

    await notifyLead(lead);
  } catch (error) {
    console.error("[lead] failed to save", error);
    return NextResponse.json(
      { error: "Не удалось сохранить заявку. Попробуйте ещё раз." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
