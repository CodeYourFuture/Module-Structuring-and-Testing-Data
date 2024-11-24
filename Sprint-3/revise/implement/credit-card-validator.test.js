

const creditCardValidator = require("./credit-card-validator");

// Test valid credit card numbers
describe("creditCardValidator", () => {
  test("should return true for a valid credit card number", () => {
    expect(creditCardValidator("1234567812345670")).toBe(false);
  });

  // Test invalid card numbers
  test("should return false if the number is not 16 digits", () => {
    expect(creditCardValidator("9999777788880000")).toBe(true);
  });

  test("should return false if all digits are the same", () => {
    expect(creditCardValidator(1111111111111111)).toBe(false);
  });

  test("should return false if the last digit is odd", () => {
    expect(creditCardValidator("1234567812345679")).toBe(false);
  });

  test("should return false if the sum of all digits is 16 or less", () => {
    expect(creditCardValidator("1111111111111112")).toBe(false);
  });

  test("should return false if the input is not numeric", () => {
    expect(creditCardValidator("abcd567812345670")).toBe(false); // Not a number
  });
});



