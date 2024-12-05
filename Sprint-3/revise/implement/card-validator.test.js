
// Import the function to test
const validateCreditCard = require('./card-validator');

// Test Suite for the validateCreditCard function
describe('validateCreditCard', () => {

  test('should return true for valid credit card numbers', () => {
    // Test valid card numbers
    expect(validateCreditCard('9999777788880000')).toBe(true);
    expect(validateCreditCard('6666666666661666')).toBe(true);
  });

  test('should return false for credit card numbers with invalid characters', () => {
    // Test invalid card numbers with non-numeric characters
    expect(validateCreditCard('a92332119c011112')).toBe(false);
  });

  test('should return false for credit card numbers with only one type of digit', () => {
    // Test card numbers with the same digit repeated
    expect(validateCreditCard('4444444444444444')).toBe(false);
    expect(validateCreditCard('1111111111111110')).toBe(false);
  });

  test('should return false for credit card numbers with sum less than or equal to 16', () => {
    // Test card numbers with a sum less than or equal to 16
    expect(validateCreditCard('1111111111111111')).toBe(false); // sum of digits = 16
  });

  test('should return false for credit card numbers with an odd last digit', () => {
    // Test card numbers with an odd last digit
    expect(validateCreditCard('6666666666666661')).toBe(false); // last digit is odd
  });

  test('should return false for credit card numbers not 16 digits long', () => {
    // Test card numbers not exactly 16 digits long
    expect(validateCreditCard('123456789012345')).toBe(false); // 15 digits
    expect(validateCreditCard('1234567890123456789')).toBe(false); // 19 digits
  });
});