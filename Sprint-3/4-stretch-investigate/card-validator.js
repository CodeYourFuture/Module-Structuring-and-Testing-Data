// Function to validate a credit card number based on given rules
function isValidCreditCard(cardNumber) {
  // Rule 1: Check if it's 16 digits and all are numbers
  if (!/^\d{16}$/.test(cardNumber)) {
    return false;
  }

  // Rule 2: Must contain at least two different digits
  const uniqueDigits = new Set(cardNumber);
  if (uniqueDigits.size < 2) {
    return false;
  }

  // Rule 3: Final digit must be even
  const lastDigit = parseInt(cardNumber[cardNumber.length - 1], 10);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // Rule 4: Sum of all digits must be greater than 16
  const digitSum = cardNumber.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  if (digitSum <= 16) {
    return false;
  }

  // All checks passed, return true
  return true;
}

// Example usage:
console.log(isValidCreditCard("9999777788880000")); // true
console.log(isValidCreditCard("4444444444444444")); // false
