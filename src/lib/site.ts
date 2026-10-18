export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://test-task-vitai-61l5e6soe-yazvinski.vercel.app";

export type Product = {
  id: string;
  name: string;
  origin: string;
  price: number;
  unit: string;
  description: string;
  notes: string[];
  roast?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "ethiopia",
    name: "Эфиопия Иргачеффе",
    origin: "Иргачеффе, Эфиопия",
    price: 32,
    unit: "250 г",
    description:
      "Классика, с которой мы начинали. Плотное тело, но при этом прозрачный и чистый вкус.",
    notes: ["цветочный", "бергамот", "светлая обжарка"],
    roast: "светлая",
  },
  {
    id: "colombia",
    name: "Колумбия Уила",
    origin: "Уила, Колумбия",
    price: 29,
    unit: "250 г",
    description:
      "Сбалансированный кофе на каждый день. Сладкий и понятный — то, что пьётся само.",
    notes: ["карамель", "красное яблоко"],
    roast: "средняя",
  },
  {
    id: "brazil",
    name: "Бразилия Серрадо",
    origin: "Серрадо, Бразилия",
    price: 26,
    unit: "250 г",
    description:
      "Густой и шоколадный, создан для эспрессо и молочных напитков. Не теряется в капучино.",
    notes: ["орех", "шоколад", "под эспрессо"],
    roast: "тёмная",
  },
  {
    id: "drip",
    name: "Дрип-пакеты, ассорти",
    origin: "три сорта в одной коробке",
    price: 18,
    unit: "10 штук",
    description:
      "Свежемолотый кофе в фильтр-пакетах. Залили горячей водой — и готово, где бы вы ни были.",
    notes: ["в дорогу", "в офис"],
  },
];

export const SUBSCRIPTION = {
  price: 54,
  unit: "мес",
  title: "Подписка на кофе",
  description:
    "Две пачки по 250 г раз в месяц. Обжариваем под вас в четверг и привозим в пятницу — доставка бесплатно.",
  features: [
    "2 пачки по 250 г каждый месяц",
    "Доставка по Минску бесплатно",
    "Можно менять сорт перед каждой обжаркой",
    "Отмена в любой момент — без обязательств",
  ],
};

export const CONTACTS = {
  address: "Минск, ул. Короля, 9",
  addressNote: "самовывоз",
  hoursWeekday: "пн–пт 8:00–20:00",
  hoursWeekend: "сб–вс 10:00–18:00",
  phone: "+375291234567",
  phoneHref: "tel:+375291234567",
  instagram: "https://instagram.com",
};

export const FREE_DELIVERY_FROM = 50;
