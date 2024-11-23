function isValidCreditCardNumber(cardNumber) {
  if (
    typeof cardNumber !== "string" ||
    cardNumber.length !== 16 ||
    !/^\d+$/.test(cardNumber)
  ) {
    return false;
  }

  const uniqueDigits = new Set(cardNumber);
  if (uniqueDigits.size < 2) {
    return false;
  }

  const lastDigit = parseInt(cardNumber[cardNumber.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  const digitSum = cardNumber
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
  if (digitSum <= 16) {
    return false;
  }

  return true;
}

// Test cases
console.log(isValidCreditCardNumber("9999777788880000"));
console.log(isValidCreditCardNumber("6666666666661666"));
console.log(isValidCreditCardNumber("a92332119c011112"));
console.log(isValidCreditCardNumber("4444444444444444"));
console.log(isValidCreditCardNumber("1111111111111110"));
console.log(isValidCreditCardNumber("6666666666666661"));
