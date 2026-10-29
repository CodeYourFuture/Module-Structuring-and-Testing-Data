// Case 1 valid card numbers.
import { creditCardValidator } from "./credit-card-validator.js";
test("should return true for a valid card number", () => {
  const number = "2222222222222224";
  const result = creditCardValidator(number);
  expect(result).toEqual(true);
});

// Case 2 number must be 16 digits.
test("should return false when the numbers has fewer than 16 digits", () => {
  const number = "123";
  const result = creditCardValidator(number);
  expect(result).toEqual(false);
});

// Case 3 numbers must be whole numbers.
test("should return false when the number contains a letter", () => {
  const number = "22222222222222b4";
  const result = creditCardValidator(number);
  expect(result).toEqual(false);
});

// Case 4 numbers must have at least two different digits represented.
test("should return false when all digits are the same.", () => {
  const number = "2222222222222222";
  const result = creditCardValidator(number);
  expect(result).toEqual(false);
});

// Case 5 the final digit of the number must be even.
test("should return false when the last digit is odd", () => {
  const number = "2222222222222223";
  const result = creditCardValidator(number);
  expect(result).toEqual(false);
});

// Case 6 the sum of all the digits must be greater than 16.
test("should return false when the sum of digits is 16 or less", () => {
  const number = "1111111111110002";
  const result = creditCardValidator(number);
  expect(result).toEqual(false);
});
