function validateCreditCard(number) {
  const numStr = String(number);

  // Must be exactly 16 digits, only numbers
  if (!/^\d{16}$/.test(numStr)) return false;

  // Must contain at least two different digits
  const uniqueDigits = new Set(numStr);
  if (uniqueDigits.size < 2) return false;

  // Last digit must be even
  const lastDigit = Number(numStr[numStr.length - 1]);
  if (lastDigit % 2 !== 0) return false;

  // Sum must be greater than 16
  const sum = numStr
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  if (sum <= 16) return false;

  return true;
}

module.exports = validateCreditCard;
