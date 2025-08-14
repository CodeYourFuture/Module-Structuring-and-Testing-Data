const isValidCardNumber = require("./card-validator");

/*
Testing the is ValidCardNumber function with various test cases.
Each test case checks a specific condition of the card number validation.
*/

// test case 1: card number is a string
test("card number is a string", () => {
  expect(isValidCardNumber("1234567890123456")).toBe(true);
});

// test case 2: card number is not a string
test("card number is not a string", () => {
  expect(isValidCardNumber(1234567890123456)).toBe(
    "Card number must be a string"
  );
});

// test case 3: card number contains only 16 digits
test("card number with 16 digits returns true", () => {
  expect(isValidCardNumber("1234567890123456")).toBe(true);
});

//  test case 4: card number contains less than 16 digits
test("card number with less than 16 digits returns error message", () => {
  expect(isValidCardNumber("123456789012345")).toBe(
    "Card number must be exactly 16 digits"
  );
});

// test case 5: card number contains more than 16 digits
test("card number with more than 16 digits returns error message", () => {
  expect(isValidCardNumber("12345678901234567")).toBe(
    "Card number must be exactly 16 digits"
  );
});

// test case 6: card number contains at least 2 unique digits
test("card number with at least 2 unique digits returns true", () => {
  expect(isValidCardNumber("1112111311111114")).toBe(true);
});

// test case 7: card number contains only one unique digit
test("Card number must contain at least two unique digits", () => {
  expect(isValidCardNumber("1111111111111111")).toBe(
    "Card number must contain at least two unique digits"
  );
});

//  test case 8: card number last single digit is even
test("card number with exactly 16 digits and last single digit even returns true", () => {
  expect(isValidCardNumber("1234567890123456")).toBe(true);
});

// test case 9: card number last single digit is odd
test("card number with exactly 16 digits and last digit odd returns error message", () => {
  expect(isValidCardNumber("1234567890123455")).toBe(
    "The last digit must be an even number"
  );
});

// test case 10: the sum of all card number digits is greater than 16
test("card number with sum of digits greater than 16 returns true", () => {
  expect(isValidCardNumber("1234567890123456")).toBe(true);
});

// test case 11: the sum of all card number digits is less than or equal to 16
test("card number with sum of digits less than or equal to 16 returns error message", () => {
  expect(isValidCardNumber("1111111111111110")).toBe(
    "The sum of all digits must be greater than 16"
  );
});

// test case 12: card number contains non-digit characters
test("card number with non-digit characters returns error message", () => {
  expect(isValidCardNumber("1234a67890123456")).toBe(
    "Card number must contain only digits"
  );
});

// test case 13: card number contains special characters
test("card number with special characters returns error message", () => {
  expect(isValidCardNumber("1234-5678-9012-3456")).toBe(
    "Card number must be exactly 16 digits"
  );
});

// test case 14: card number contains spaces
test("card number with spaces returns error message", () => {
  expect(isValidCardNumber("1234 5678 9012 3456")).toBe(
    "Card number must be exactly 16 digits"
  );
});

// test case 15: card number is empty
test("empty card number returns error message", () => {
  expect(isValidCardNumber("")).toBe("Card number must be exactly 16 digits");
});

// test case 16: card number is null
test("null card number returns error message", () => {
  expect(isValidCardNumber(null)).toBe("Card number must be a string");
});

// test case 17: card number is undefined
test("undefined card number returns error message", () => {
  expect(isValidCardNumber(undefined)).toBe("Card number must be a string");
});

// test case 18: card number is a string with leading zeros
test("card number with leading zeros returns true", () => {
  expect(isValidCardNumber("0000123456789012")).toBe(true);
});
// test case 19: card number is a string with trailing spaces
