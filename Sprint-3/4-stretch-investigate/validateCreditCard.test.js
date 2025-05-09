const validateCreditCard = require("./credit-card-validator");

test("valid card", () => {
  expect(validateCreditCard("9999777788880000")).toEqual(true); // This is a valid card
});

test("invalid card: contains non-digit characters", () => {
  expect(validateCreditCard("a92332119c011112")).toEqual(false); // Invalid because of letters
});

test("invalid card: only one type of digit", () => {
  expect(validateCreditCard("4444444444444444")).toEqual(false); // Invalid, all digits are the same
});

test("invalid card: sum less than 16", () => {
  expect(validateCreditCard("1111111111111110")).toEqual(false); // Invalid, sum is less than 16
});

test("invalid card: odd final digit", () => {
  expect(validateCreditCard("6666666666666661")).toEqual(false); // Invalid, final digit is odd
});

test("valid card with different digits", () => {
  expect(validateCreditCard("6666666666661666")).toEqual(true); // Valid, final digit is even and sum > 16
});
