function isValidCreditCardNumber(creditCardNumber) {
    // Check if the credit card number is 16 digits long and contains only numbers
    if (creditCardNumber.length !== 16 || !/^\d+$/.test(creditCardNumber)) {
      return false;
    }
  
    // Check if all digits are the same
    const allDigitsSame = creditCardNumber.split('').every(digit => digit === creditCardNumber[0]);
    if (allDigitsSame) {
      return false;
    }
  
    // Check if the last digit is even
    const lastDigit = parseInt(creditCardNumber[15], 10);
    if (lastDigit % 2 !== 0) {
      return false;
    }
  
    // Calculate the sum of all digits
    const digitSum = creditCardNumber.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    if (digitSum <= 16) {
      return false;
    }
  
    return true;
}

// Example of credit card numbers:
const validCard1 = '9999777788880000';
const validCard2 = '6666666666661666';
const invalidCard1 = 'a92332119c011112';
const invalidCard2 = '4444444444444444';
const invalidCard3 = '1111111111111110';
const invalidCard4 = '6666666666666661';

console.log(isValidCreditCardNumber(validCard1));
console.log(isValidCreditCardNumber(validCard2));
console.log(isValidCreditCardNumber(invalidCard1));
console.log(isValidCreditCardNumber(invalidCard2));
console.log(isValidCreditCardNumber(invalidCard3));
console.log(isValidCreditCardNumber(invalidCard4));