// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Denominator is zero
test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(-1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
});

// Proper fractions with positive values
test("should return true when the absolute value of the numerator is less than the absolute value of the denominator", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(2, 4)).toEqual(true);
  expect(isProperFraction(15, 30)).toEqual(true);
});

// Numerator is zero
test("should return true when numerator is zero and denominator is non-zero", () => {
  expect(isProperFraction(0, 9)).toEqual(true);
  expect(isProperFraction(0, -9)).toEqual(true);
});

// Equal numerator and denominator
test("should return false when numerator and denominator have equal absolute values", () => {
  expect(isProperFraction(5, 5)).toEqual(false);
  expect(isProperFraction(-5, -5)).toEqual(false);
});

// Negative values that form proper fractions
test("should return true for negative values when the absolute numerator is less than the absolute denominator", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(-1, -2)).toEqual(true);
});

// Positive and negative values that do not form proper fractions
test("should return false when the absolute numerator is greater than or equal to the absolute denominator", () => {
  expect(isProperFraction(-2, 1)).toEqual(false);
  expect(isProperFraction(2, -1)).toEqual(false);
  expect(isProperFraction(-2, -1)).toEqual(false);
  expect(isProperFraction(6, 3)).toEqual(false);
  expect(isProperFraction(10, 4)).toEqual(false);
});