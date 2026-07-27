const isValidCardNumber = require("./card-validator");

test("should return true for a valid card number", () => {
  expect(isValidCardNumber("9999777788880000")).toEqual(true);
  expect(isValidCardNumber("6666666666661666")).toEqual(true);
});

test("should return false when card contains non-digit characters", () => {
  expect(isValidCardNumber("a92332119c011112")).toEqual(false);
});

test("should return false when card has fewer than 16 digits", () => {
  expect(isValidCardNumber("123456789012345")).toEqual(false);
});

test("should return false when card has more than 16 digits", () => {
  expect(isValidCardNumber("12345678901234567")).toEqual(false);
});

test("should return false when all digits are the same", () => {
  expect(isValidCardNumber("4444444444444444")).toEqual(false);
});

test("should return false when final digit is odd", () => {
  expect(isValidCardNumber("6666666666666661")).toEqual(false);
});

test("should return false when sum of digits is not greater than 16", () => {
  expect(isValidCardNumber("1111111111111110")).toEqual(false);
});
