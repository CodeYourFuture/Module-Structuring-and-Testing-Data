// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`should return true when numerator is zero and denominator is non-zero`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// Proper fractions with positive numbers
test(`should return true for proper fractions with positive numerator and denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
});

// Improper fractions with positive numbers
test(`should return false for improper fractions with positive numerator and denominator`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(5, 3)).toEqual(false);
});

// Proper fractions with negative numbers
test(`should return true for proper fractions with negative numerator and positive denominator`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(-3, 4)).toEqual(true);
});

test(`should return true for proper fractions with positive numerator and negative denominator`, () => {
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(3, -4)).toEqual(true);
});

// Improper fractions with negative numbers
test(`should return false for improper fractions with negative numerator and positive denominator`, () => {
  expect(isProperFraction(-2, 1)).toEqual(false);
  expect(isProperFraction(-5, 3)).toEqual(false);
});
test(`should return false for improper fractions with positive numerator and negative denominator`, () => {
  expect(isProperFraction(2, -1)).toEqual(false);
  expect(isProperFraction(5, -3)).toEqual(false);
});

// Special case: both numerator and denominator are zero
test(`should return false when both numerator and denominator are zero`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});

// Numerator equals denominator
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(5, 5)).toBe(false);
  expect(isProperFraction(-5, -5)).toBe(false);
});

// Both numerator and denominator are negative
test("should return true for proper fractions with two negative numbers", () => {
  expect(isProperFraction(-1, -3)).toBe(true);
});

test("should return false for improper fractions with two negative numbers", () => {
  expect(isProperFraction(-10, -2)).toBe(false);
});
