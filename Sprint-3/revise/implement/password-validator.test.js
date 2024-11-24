
const isNumberValid = require("./password-validator");

test("Should validate a number with at least 5 characters", () => {
  const input = 112206;
  const output = isNumberValid(input);
  expect(output).toBe(true); // A valid number
});

test("Should invalidate a string longer than one character", () => {
  const input = "password";
  const output = isNumberValid(input);
  expect(output).toBe(false); // Invalid because it's longer than one character
});

test("Should validate a single uppercase letter", () => {
  const input = "A";
  const output = isNumberValid(input);
  expect(output).toBe(true); // Valid
});

test("Should invalidate a special character not in the list", () => {
  const input = "@";
  const output = isNumberValid(input);
  expect(output).toBe(false); // Invalid because "@" is not in the list of special characters
});





