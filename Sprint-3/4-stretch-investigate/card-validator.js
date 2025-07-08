function validateCreditCard(cardNumber) {
  // Check length and numeric characters
  if (cardNumber.length !== 16 || !/^\d{16}$/.test(cardNumber)) {
    return false;
  }

  // Check at least two different digits
  const uniqueDigits = new Set(cardNumber);
  if (uniqueDigits.size < 2) {
    return false;
  }

  // Check last digit is even
  const lastDigit = Number(cardNumber[cardNumber.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // Check sum of digits
  let digitSum = 0;
  for (let digit of cardNumber) {
    digitSum += Number(digit);
  }
  if (digitSum <= 16) {
    return false;
  }

  // If all checks passed, return true
  return true;
}

module.exports = validateCreditCard;
