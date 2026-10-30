export function creditCardValidator(cardNumber) {
  // rejects the number if itn's exactly 16 characters or contain non-digits
  if (cardNumber.length !== 16 || !Number.isInteger(Number(cardNumber))) {
    return false;
  }

  if (cardNumber.slice(-1) % 2 !== 0) {
    return false;
  }

  let hasDifferentDigit = false;
  let digitSum = 0;

  for (const digit of cardNumber) {
    // the last digit must be even, so reject it if dividing by 2 leaves a reminder
    digitSum += Number(digit);

    // if any digit differs from the first one, at least two different digits are used
    if (digit !== cardNumber[0]) {
      hasDifferentDigit = true;
    }
  }

  // the number needs two different digits and a digit sum greater than 16
  if (!hasDifferentDigit || digitSum <= 16) {
    return false;
  }
  return true;
}
