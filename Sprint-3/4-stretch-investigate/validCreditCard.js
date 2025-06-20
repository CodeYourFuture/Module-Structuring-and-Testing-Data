function validateCreditCard(cardNumber) {
    // Remove any dashes or spaces
    const sanitized = cardNumber.replace(/[^0-9]/g, '');
  
    // Rule 1: Must be exactly 16 digits
    if (sanitized.length !== 16) {
      return false;
    }
  
    // Rule 2: All characters must be digits
    if (!/^\d{16}$/.test(sanitized)) {
      return false;
    }
  
    // Rule 3: Must contain at least two different digits
    if (/^(\d)\1{15}$/.test(sanitized)) {
      return false;
    }
  
    // Rule 4: Final digit must be even
    const lastDigit = parseInt(sanitized[sanitized.length - 1], 10);
    if (lastDigit % 2 !== 0) {
      return false;
    }
  
    // Rule 5: Sum of digits must be greater than 16
    const sum = sanitized
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  
    if (sum <= 16) {
      return false;
    }
  
    // All checks passed
    return true;
  }
  

  module.exports = passwordValidator;


// - Number must be 16 digits, all of them must be numbers.
// - You must have at least two different digits represented (all of the digits cannot be the same).
// - The final digit must be even.
// - The sum of all the digits must be greater than 16.
