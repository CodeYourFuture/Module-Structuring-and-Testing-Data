// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Proper fractions (positive numbers
test(`should return true when numerator is smaller than denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
});

// Equal numbers → not proper
test(`should return false when numerator equals denominator`, () => {
  expect(isProperFraction(2, 2)).toEqual(false);
});

// Improper fractions
test(`should return false when numerator is greater than denominator`, () => {
  expect(isProperFraction(5, 4)).toEqual(false);
  expect(isProperFraction(10, 3)).toEqual(false);
});

// Zero numerator
test(`should return true when numerator is zero and denominator is non-zero`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// Negative numbers
test("should return true when |numerator| < |denominator| and signs differ", () => {
  expect(isProperFraction(-1, 2)).toBe(true);
  expect(isProperFraction(1, -2)).toBe(true);
});

test("should return false when |numerator| > |denominator| and both are negative", () => {
  expect(isProperFraction(-3, -2)).toBe(false);
});

// Both zero
test(`should return false when both numerator and denominator are zero`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});
