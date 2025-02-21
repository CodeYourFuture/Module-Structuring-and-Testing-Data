function validateCreditCard(cardNumber) {
    // Check if the card number has exactly 16 digits
    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
      return false; // Invalid if not 16 digits or if there are non-digit characters
    }
  
    // Check if there are at least two different digits
    //note:We use a Set (which only stores unique values) to check if there’s more than one unique digit.
    if (new Set(cardNumber).size === 1) {
      return false; // Invalid if all digits are the same
    }
  
    // Check if the final digit is even
    if (parseInt(cardNumber[cardNumber.length - 1]) % 2 !== 0) {
      return false; // Invalid if the final digit is not even
    }
  
    // Check if the sum of all digits is greater than 16
    //note: reduce() method is an array method in JavaScript used to reduce an array to a single value by applying a function to each element in the array.
    const sum = cardNumber.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    if (sum <= 16) {
      return false; // Invalid if sum is less than or equal to 16
    }
  
    // If all conditions are met, the card is valid
    return true;
  }
  
  module.exports = validateCreditCard;
  