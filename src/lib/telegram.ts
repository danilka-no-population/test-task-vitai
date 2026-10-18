import { INTEREST_LABELS } from "./lead";
import type { Lead } from "./leads";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildMessage(lead: Lead): string {
  const lines: string[] = [
    "<b>Новая заявка</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(lead.name)}`,
    `<b>Телефон:</b> ${lead.phone}`,
    `<b>Интересует:</b> ${INTEREST_LABELS[lead.interest]}`,
  ];

  if (lead.comment) {
    lines.push("", `<b>Комментарий:</b> ${escapeHtml(lead.comment)}`);
  }

  const source = [
    lead.utm_source,
    lead.utm_medium,
    lead.utm_campaign,
    lead.utm_content,
    lead.utm_term,
  ]
    .filter(Boolean)
    .join(" · ");

  if (source) {
    lines.push("", `<b>Источник:</b> ${escapeHtml(source)}`);
  }

  if (lead.referrer) {
    lines.push(`<b>Реферер:</b> ${escapeHtml(lead.referrer)}`);
  }

  if (lead.landing_page) {
    lines.push(`<b>Страница:</b> ${escapeHtml(lead.landing_page)}`);
  }

  return lines.join("\n");
}

export async function notifyLead(lead: Lead): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: buildMessage(lead),
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
        signal: controller.signal,
      },
    );

    clearTimeout(timer);

    if (!res.ok) {
      const detail = await res.text();
      console.error("[telegram] sendMessage failed", res.status, detail);
    }
  } catch (error) {
    console.error("[telegram] failed to notify", error);
  }
}
