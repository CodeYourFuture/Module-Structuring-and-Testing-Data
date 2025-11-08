function passwordValidator(password) {
    return password.length < 5 ? false : true
}


module.exports = passwordValidator;
function validateCreditCard(number) {
  // Convert input to a string so we can check characters easily
  const numStr = String(number);

  // Rule 1: Must be 16 digits, all numbers
  if (!/^\d{16}$/.test(numStr)) {
    return false;
  }

  // Rule 2: Must contain at least two different digits
  const uniqueDigits = new Set(numStr);
  if (uniqueDigits.size < 2) {
    return false;
  }

  // Rule 3: The last digit must be even
  const lastDigit = parseInt(numStr[numStr.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // Rule 4: The sum of all digits must be greater than 16
  const sum = numStr
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  if (sum <= 16) {
    return false;
  }

  // If all checks pass, return true ✅
  return true;
}

module.exports = validateCreditCard;
