const BELARUSIAN_CODES = ["25", "29", "33", "44", "17"];

export function normalizeBelarusianPhone(input: string): string | null {
  let digits = input.replace(/\D/g, "");

  if (digits.startsWith("375")) {
    digits = digits.slice(3);
  } else if (digits.startsWith("80")) {
    digits = digits.slice(2);
  }

  if (digits.length !== 9) return null;

  const code = digits.slice(0, 2);
  if (!BELARUSIAN_CODES.includes(code)) return null;

  return `+375${digits}`;
}

export function isValidBelarusianPhone(input: string): boolean {
  return normalizeBelarusianPhone(input) !== null;
}
