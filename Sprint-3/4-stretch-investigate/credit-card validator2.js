function validateCreditCard(cardNumber) {
    const trimmed = cardNumber.toString().trim();
  
    // Must be exactly 16 digits
    if (trimmed.length !== 16) return false;
  
    // Must be all numeric
    if (!/^\d+$/.test(trimmed)) return false;
  
    // Must contain at least two different digits
    const uniqueDigits = new Set(trimmed);
    if (uniqueDigits.size < 2) return false;
  
    // Last digit must be even
    const lastDigit = parseInt(trimmed[trimmed.length - 1]);
    if (lastDigit % 2 !== 0) return false;
  
    // Sum of all digits must be > 16
    const sum = trimmed.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    if (sum <= 16) return false;
  
    return true;
  }
  
  module.exports = validateCreditCard;