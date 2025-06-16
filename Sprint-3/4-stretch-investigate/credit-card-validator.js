function validateCreditCard(cardNumber) {
    // Rule 1: Must be 16 characters and all digits
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
  
    // Rule 4: Sum of digits must be greater than 16
    const digitSum = cardNumber
      .split("")
      .map(Number)
      .reduce((sum, digit) => sum + digit, 0);
  
    if (digitSum <= 16) {
      return false;
    }
  
    // If all checks pass, the card number is valid
    return true;
  }
  
  module.exports = validateCreditCard;
  