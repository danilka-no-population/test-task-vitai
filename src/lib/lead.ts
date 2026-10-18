export type Interest = "subscription" | "one-time" | "question";

export const LEAD_INTEREST_EVENT = "kvarta:lead-interest";

export const INTEREST_LABELS: Record<Interest, string> = {
  subscription: "Подписка",
  "one-time": "Разовый заказ",
  question: "Вопрос",
};

export type LeadPayload = {
  name: string;
  phone: string;
  interest: Interest;
  comment?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  landing_page?: string;
};
