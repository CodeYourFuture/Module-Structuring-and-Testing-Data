// Validate whether a credit card number meets the rules from card-validator.md
function validateCreditCardNumber(cardNumber) {
  // Rule 1: the value must be exactly 16 characters long and contain only digits.
  if (!/^\d{16}$/.test(cardNumber)) {
    return false;
  }

  // Rule 2: not all digits can be the same.
  const uniqueDigits = new Set(cardNumber);
  if (uniqueDigits.size < 2) {
    return false;
  }

  // Rule 3: the final digit must be even.
  const lastDigit = Number(cardNumber[cardNumber.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // Rule 4: the sum of all digits must be greater than 16.
  let sum = 0;
  for (const digit of cardNumber) {
    sum += Number(digit);
  }

  if (sum <= 16) {
    return false;
  }

  return true;
}

module.exports = validateCreditCardNumber;
