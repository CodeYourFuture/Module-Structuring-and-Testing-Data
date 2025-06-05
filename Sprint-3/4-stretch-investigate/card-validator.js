function cardValidator(ccNumber) {
  // Convert input to string
  const ccString = ccNumber.toString();

  // Validate length and numeric characters with regex
  if (!/^\d{16}$/.test(ccString)) {
    return false;
  }

  // Convert to array of numbers
  const digits = ccString.split("").map((dig) => Number(dig));

  // Last digit must be even
  if (digits[15] % 2 !== 0) {
    return false;
  }

  // At least two distinct digits
  if (new Set(digits).size < 2) {
    return false;
  }

  // Sum of digits > 16
  if (digits.reduce((sum, digit) => sum + digit, 0) <= 16) {
    return false;
  }

  // All validation passed
  return true;
}

module.exports = cardValidator;
