function creditCardValidator(cardNumber) {
  // Remove all - and spaces from the input
  const sanitized = cardNumber.replace(/[-\s]/g, "");

  //check if the length of the sanitized input is 16
  if (sanitized.length !== 16) {
    return false;
  }
  // check if the sanitized input contains only digits
  if (!/^\d{16}$/.test(sanitized)) {
    return false;
  }

  // check if there ara at least two different digits
  const uniqueDigits = new Set(sanitized);
  if (uniqueDigits.size < 2) {
    return false;
  }

  // check if the last digit is even
  const lastDigit = Number(sanitized[sanitized.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // check if the sum of all digits is greater than 16
  const sum = sanitized
    .split("")
    .reduce((total, digit) => total + Number(digit), 0);
  if (sum <= 16) {
    return false;
  }

  return true;
}

module.exports = creditCardValidator;
