function validateCreditCardNumber(cardNumber) {
  // Check if the card number is a positive integer.
  if (typeof cardNumber !== "number" || cardNumber < 0) {
    return false;
  }

  const cardNumberString = String(cardNumber);
  // Check if the card number has at least two different digits
  const uniqueDigits = new Set(cardNumberString);

  if (uniqueDigits.size < 2) {
    return false;
  }

  // Check if the card number has exactly 16 digits.
  if (cardNumberString.length !== 16) {
    return false;
  }

  // Check if the last digit is even
  if (Number(cardNumberString.slice(-1)) % 2 !== 0) {
    return false;
  }

  // Check if the sum of all the digits is greater than 16
  const sumOfAllDigits = Array.from(cardNumberString).reduce(
    (sum, digit) => sum + Number(digit),
    0
  );

  if (sumOfAllDigits <= 16) {
    return false;
  }

  return true;
}

module.exports = validateCreditCardNumber;
