function isValidCreditCard(cardNumber) {
  if (cardNumber.length === 16 && !isNaN(cardNumber)) {
    //number must be 16 digits
    let uniqueDigits = new Set(cardNumber);
    if (uniqueDigits.size < 2) {
      return false; // Not enough different digits
    }

    // Check if the last digit is even
    let lastDigit = parseInt(cardNumber.charAt(cardNumber.length - 1));
    if (lastDigit % 2 !== 0) {
      return false; // Last digit is not even
    }
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
      sum += parseInt(cardNumber.charAt(i));
    }
    if (sum <= 16) {
      return false; // Sum of digits is less than or equal to 16
    }
    return true; // All checks passed
  } else {
    return false;
  }
}
module.exports = isValidCreditCard;
