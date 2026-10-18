import type { JsonLdObject } from "@/lib/structured-data";

export default function JsonLd({
  data,
}: {
  data: JsonLdObject | JsonLdObject[];
}) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item) => (
        <script
          key={String(item["@id"] ?? item["@type"])}
          type="application/ld+json"
        >
          {JSON.stringify(item)}
        </script>
      ))}
    </>
  );
}
