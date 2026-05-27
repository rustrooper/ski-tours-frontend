const PHONE_MASK = '+7 (DDD) DDD-DD-DD';
const PHONE_VALID_RE = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

export function extractDigits(input: string): string {
  const digits = input.replace(/\D/g, '');
  const trimmed = digits.startsWith('7') || digits.startsWith('8') ? digits.slice(1) : digits;
  return trimmed.slice(0, 10);
}

export function formatPhone(input: string): string {
  const digits = extractDigits(input);
  if (digits.length === 0) return '';

  let result = '';
  let digitIdx = 0;
  for (const ch of PHONE_MASK) {
    if (ch === 'D') {
      if (digitIdx >= digits.length) break;
      result += digits[digitIdx++];
    } else {
      result += ch;
    }
  }
  return result;
}

export function isValidPhone(input: string): boolean {
  return PHONE_VALID_RE.test(input);
}
