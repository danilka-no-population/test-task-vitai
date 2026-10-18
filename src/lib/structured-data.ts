import { CONTACTS, PRODUCTS, SITE_URL, SUBSCRIPTION } from "./site";

export type JsonLdObject = Record<string, unknown>;

function localBusiness(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@id": `${SITE_URL}/#organization`,
    "@type": "Store",
    name: "Обжарка «Кварта»",
    description:
      "Маленькая обжарка кофе в Минске. Обжариваем по четвергам, развозим по пятницам — свежеобжаренное зерно.",
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-beans.jpg`,
    telephone: CONTACTS.phone,
    priceRange: "18 BYN – 54 BYN",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Короля, 9",
      addressLocality: "Минск",
      addressCountry: "BY",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
  };
}

function productList(): JsonLdObject {
  const elements = PRODUCTS.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.name,
      description: product.description,
      offers: {
        "@type": "Offer",
        price: String(product.price),
        priceCurrency: "BYN",
        availability: "https://schema.org/InStock",
      },
    },
  }));

  elements.push({
    "@type": "ListItem",
    position: elements.length + 1,
    item: {
      "@type": "Product",
      name: SUBSCRIPTION.title,
      description: SUBSCRIPTION.description,
      offers: {
        "@type": "Offer",
        price: String(SUBSCRIPTION.price),
        priceCurrency: "BYN",
        availability: "https://schema.org/InStock",
      },
    },
  });

  return {
    "@context": "https://schema.org",
    "@id": `${SITE_URL}/#menu`,
    "@type": "ItemList",
    name: "Ассортимент «Кварта»",
    itemListElement: elements,
  };
}

export function pageJsonLd(): JsonLdObject[] {
  return [localBusiness(), productList()];
}
