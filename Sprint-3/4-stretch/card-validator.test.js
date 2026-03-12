const validateCreditCardNumber = require("./card-validator");

test("returns true for a valid card number", () => {
  expect(validateCreditCardNumber("9999777788880000")).toEqual(true);
  expect(validateCreditCardNumber("6666666666661666")).toEqual(true);
});

test("returns false when the card contains non-digit characters", () => {
  expect(validateCreditCardNumber("a92332119c011112")).toEqual(false);
});

test("returns false when all digits are the same", () => {
  expect(validateCreditCardNumber("4444444444444444")).toEqual(false);
});

test("returns false when the sum of digits is not greater than 16", () => {
  expect(validateCreditCardNumber("1111111111111110")).toEqual(false);
});

test("returns false when the final digit is odd", () => {
  expect(validateCreditCardNumber("6666666666666661")).toEqual(false);
});

test("returns false when the number is not 16 digits long", () => {
  expect(validateCreditCardNumber("1234")).toEqual(false);
});
