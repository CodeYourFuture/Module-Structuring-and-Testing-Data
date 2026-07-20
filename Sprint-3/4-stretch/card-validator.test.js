const isValidCardNumber = require("./card-validator");

// Valid cards
test("should return true for a valid card number", () => {
  expect(isValidCardNumber("9999777788880000")).toEqual(true);
  expect(isValidCardNumber("6666666666661666")).toEqual(true);
});

// Rule 1: must be exactly 16 digits
test("should return false when card contains non-digit characters", () => {
  expect(isValidCardNumber("a92332119c011112")).toEqual(false);
});

test("should return false when card has fewer than 16 digits", () => {
  expect(isValidCardNumber("123456789012345")).toEqual(false);
});

test("should return false when card has more than 16 digits", () => {
  expect(isValidCardNumber("12345678901234567")).toEqual(false);
});

// Rule 2: at least two different digits
test("should return false when all digits are the same", () => {
  expect(isValidCardNumber("4444444444444444")).toEqual(false);
});

// Rule 3: final digit must be even
test("should return false when final digit is odd", () => {
  expect(isValidCardNumber("6666666666666661")).toEqual(false);
});

// Rule 4: sum of all digits must be greater than 16
test("should return false when sum of digits is not greater than 16", () => {
  expect(isValidCardNumber("1111111111111110")).toEqual(false);
});
