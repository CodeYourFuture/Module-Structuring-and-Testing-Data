// Validates a credit card number string against the following rules:
// - Must be exactly 16 digits (no letters or other characters)
// - Must contain at least two different digits
// - The final digit must be even
// - The sum of all digits must be greater than 16

function isValidCardNumber(cardNumber) {
  // Rule 1: must be exactly 16 digit characters
  if (!/^\d{16}$/.test(cardNumber)) return false;

  const digits = cardNumber.split("").map(Number);

  // Rule 2: at least two different digits must be present
  if (new Set(digits).size < 2) return false;

  // Rule 3: final digit must be even
  if (digits[15] % 2 !== 0) return false;

  // Rule 4: sum of all digits must be greater than 16
  const sum = digits.reduce((acc, d) => acc + d, 0);
  if (sum <= 16) return false;

  return true;
}

module.exports = isValidCardNumber;
