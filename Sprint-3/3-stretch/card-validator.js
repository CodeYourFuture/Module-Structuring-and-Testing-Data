// Function to validate a credit card number
function isValidCreditCard(cardNumber) {
  // Convert the input to a string to handle numbers safely
  const cardStr = String(cardNumber);

  // Rule 1: Must be 16 digits, all numbers
  if (!/^\d{16}$/.test(cardStr)) {
    return false;
  }

  // Rule 2: Must contain at least two different digits
  const uniqueDigits = new Set(cardStr);
  if (uniqueDigits.size < 2) {
    return false;
  }

  // Rule 3: Final digit must be even
  const lastDigit = Number(cardStr[cardStr.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // Rule 4: Sum of all digits must be greater than 16
  const sum = cardStr.split("").reduce((acc, digit) => acc + Number(digit), 0);
  if (sum <= 16) {
    return false;
  }

  // If all checks pass, the card number is valid
  return true;
}

// Example test cases
console.log(isValidCreditCard("9999777788880000")); // true
console.log(isValidCreditCard("6666666666661666")); // true
console.log(isValidCreditCard("a92332119c011112")); // false
console.log(isValidCreditCard("4444444444444444")); // false
console.log(isValidCreditCard("1111111111111110")); // false
console.log(isValidCreditCard("6666666666666661")); // false

// Export function for testing in other files
module.exports = isValidCreditCard;
