// Function to validate the credit card number
function isCreditCardValid(cardNumber) {
  // Step 1: Check if the card number is exactly 16 digits long
  if (cardNumber.length !== 16) {
    return false; // Return false if the length is not 16
  }

  // Step 2: Check if the card number contains only digits
  if (!/^\d{16}$/.test(cardNumber)) {
    return false; // Return false if the card number contains any non-digit characters
  }

  // Step 3: Check if the card number has at least two different digits
  const uniqueDigits = new Set(cardNumber); // Create a set to store unique digits
  if (uniqueDigits.size === 1) {
    return false; // Return false if all digits are the same
  }

  // Step 4: Check if the last digit is even
  const lastDigit = parseInt(cardNumber[cardNumber.length - 1], 10); // Get the last digit and convert it to an integer
  if (lastDigit % 2 !== 0) {
    return false; // Return false if the last digit is not even
  }

  // Step 5: Check if the sum of all digits is greater than 16
  const sumOfDigits = cardNumber.split('').reduce((sum, digit) => sum + parseInt(digit), 0); // Sum all the digits
  if (sumOfDigits <= 16) {
    return false; // Return false if the sum is 16 or less
  }

  // If all conditions are met, return true (valid credit card number)
  return true;
}

// Example Tests:
console.log(isCreditCardValid("9999777788880000")); // Should return true
console.log(isCreditCardValid("6666666666661666")); // Should return true
console.log(isCreditCardValid("4444444444444444")); // Should return false (only one type of digit)
console.log(isCreditCardValid("1111111111111110")); // Should return false (sum is not greater than 16)
console.log(isCreditCardValid("6666666666666661")); // Should return false (odd final digit)
console.log(isCreditCardValid("a92332119c011112")); // Should return false (invalid characters)

// Corrected Test Cases using the correct function name 'isCreditCardValid'
test('Valid credit card number with 16 digits', () => {
  expect(isCreditCardValid('9999777788880000')).toBe(true); // Valid card
});

test('Invalid credit card number with non-numeric characters', () => {
  expect(isCreditCardValid('a92332119c011112')).toBe(false); // Invalid due to letters
});

test('Invalid credit card number with less than 16 digits', () => {
  expect(isCreditCardValid('12345678901234')).toBe(false); // Invalid due to less than 16 digits
});

test('Invalid credit card number with more than 16 digits', () => {
  expect(isCreditCardValid('12345678901234567')).toBe(false); // Invalid due to more than 16 digits
});

test('Invalid credit card number with all the same digits', () => {
  expect(isCreditCardValid('4444444444444444')).toBe(false); // Invalid due to same digits
});

test('Invalid credit card number where the sum of digits is less than 16', () => {
  expect(isCreditCardValid('1111111111111110')).toBe(false); // Invalid due to sum less than 16
});

test('Invalid credit card number where the last digit is odd', () => {
  expect(isCreditCardValid('6666666666666661')).toBe(false); // Invalid due to last digit being odd
});
