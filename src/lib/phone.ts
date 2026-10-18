export function normalizeBelarusianPhone(input: string): string | null {
  let digits = input.replace(/\D/g, "");

  if (digits.startsWith("375")) {
    digits = digits.slice(3);
  } else if (digits.startsWith("80")) {
    digits = digits.slice(2);
  }

  if (digits.length !== 9) return null;

  return `+375${digits}`;
}

export function formatPhoneInput(raw: string): string {
  let digits = raw.replace(/\D/g, "");

  if (digits.startsWith("375")) {
    digits = digits.slice(3);
  } else if (digits.startsWith("80")) {
    digits = digits.slice(2);
  }

  digits = digits.slice(0, 9);

  if (digits === "") return "";

  let out = "+375";
  out += ` ${digits.slice(0, 2)}`;
  if (digits.length >= 3) out += ` ${digits.slice(2, 5)}`;
  if (digits.length >= 6) out += `-${digits.slice(5, 7)}`;
  if (digits.length >= 8) out += `-${digits.slice(7, 9)}`;

  return out;
}
