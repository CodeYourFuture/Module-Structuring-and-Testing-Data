const validateCreditCard = require("./credit-card-validator");

describe("Credit Card Validator", () => {
// Case 1: Valid card number
  test("valid card number", () => {
    expect(validateCreditCard("1234567890123456")).toBe(true);
  });

// Case 2: Invalid card number - not 16 digits
  test("invalid card number - not 16 digits", () => {
    expect(validateCreditCard("123456789012345")).toBe(false);
    expect(validateCreditCard("12345678901234567")).toBe(false);
    expect(validateCreditCard("123456789012345a")).toBe(false);
  });

// Case 3: Invalid card number - less than two different digits
  test("invalid card number - less than two different digits", () => {
    expect(validateCreditCard("1111111111111111")).toBe(false);
    expect(validateCreditCard("2222222222222222")).toBe(false);
  });

// Case 4: Invalid card number - last digit not even
  test("invalid card number - last digit not even", () => {
    expect(validateCreditCard("1234567890123457")).toBe(false);
  });

// Case 5: Invalid card number - sum of digits not greater than 16
  test("invalid card number - sum of digits not greater than 16", () => {
    expect(validateCreditCard("0000000000000000")).toBe(false);
    expect(validateCreditCard("1111111111111110")).toBe(false);
  });
});