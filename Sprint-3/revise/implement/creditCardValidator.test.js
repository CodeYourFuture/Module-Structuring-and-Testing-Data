const isValidCreditCard = require("./creditCardValidator");

function testIsValidCreditCard() {
  // Valid test cases
  console.log(isValidCreditCard("9999777788880000")); // true, 16 digits, at least two different digits, even last digit, sum > 16
  console.log(isValidCreditCard("6666666666661666")); // true, 16 digits, at least two different digits, even last digit, sum > 16

  // Invalid test cases
  console.log(isValidCreditCard("a92332119c011112")); // false, contains non-numeric characters
  console.log(isValidCreditCard("4444444444444444")); // false, only one type of number
  console.log(isValidCreditCard("1111111111111110")); // false, sum of digits is less than 16
  console.log(isValidCreditCard("6666666666666661")); // false, last digit is odd
  console.log(isValidCreditCard("123456789012345")); // false, only 15 digits
  console.log(isValidCreditCard("12345678901234567")); // false, more than 16 digits
  console.log(isValidCreditCard("1111111111111111")); // false, sum of digits is 16, not greater
}

// Run test cases
testIsValidCreditCard();
