function creditCardValidator(cardNumber) {
  // declare the length of valid card number
  const VALID_LENGTH = 16;
  const minimumSum = 16;

  // Remove all - and spaces from the input
  const sanitized = cardNumber.replace(/[-\s]/g, "");

  //check if the length of the sanitized input is 16
  if (sanitized.length !== VALID_LENGTH) {
    return false;
  }
  // check if the sanitized input contains only digits
  if (!new RegExp(`^\\d{${VALID_LENGTH}}$`).test(sanitized)) {
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
  if (sum <= minimumSum) {
    return false;
  }

  return true;
}

module.exports = creditCardValidator;
