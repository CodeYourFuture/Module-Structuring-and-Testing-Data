const isProperFraction = require("../implement/2-is-proper-fraction");

// Special case: denominator is zero
test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Special case: numerator is zero
test("should return true when numerator is zero and denominator is not zero", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
  expect(isProperFraction(0, -5)).toEqual(true);
});

// Positive proper fractions
test("should return true for positive proper fractions", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(2, 5)).toEqual(true);
});

// Positive improper fractions
test("should return false for positive improper fractions", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
  expect(isProperFraction(2, 2)).toEqual(false);
});

// Negative proper fractions
test("should return true for negative proper fractions", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(-2, -5)).toEqual(true);
});

// Negative improper fractions
test("should return false for negative improper fractions", () => {
  expect(isProperFraction(-5, 2)).toEqual(false);
  expect(isProperFraction(5, -2)).toEqual(false);
  expect(isProperFraction(-5, -2)).toEqual(false);
});
