// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Positive proper fraction
test("should return true for a proper positive fraction", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

// Positive improper fraction
test("should return false for an improper positive fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

// Equal numerator and denominator
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});

// Zero numerator
test("should return true when numerator is zero", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// Zero denominator
test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Both numerator and denominator are negative
test("should return true for a proper fraction with both values negative", () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
});

// Negative numerator, positive denominator
test("should return true when numerator is negative and denominator is positive", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});

// Positive numerator, negative denominator
test("should return false when numerator is positive and denominator is negative", () => {
  expect(isProperFraction(1, -2)).toEqual(false);
});
