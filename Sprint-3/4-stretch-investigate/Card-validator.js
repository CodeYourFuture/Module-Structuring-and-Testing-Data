function isValidCard(number) {
  // Convert to string if not already
  const numStr = String(number);

  // Must be 16 digits and all numbers
  if (!/^\d{16}$/.test(numStr)) {
    return false;
  }

  // Must have at least two different digits
  const allSame = numStr.split("").every((digit) => digit === numStr[0]);
  if (allSame) {
    return false;
  }

  // Last digit must be even
  const lastDigit = parseInt(numStr[numStr.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // Sum of all digits must be greater than 16
  const sum = numStr.split("").reduce((acc, digit) => acc + parseInt(digit), 0);
  if (sum <= 16) {
    return false;
  }

  // All checks passed
  return true;
}

module.exports = isValidCard;
