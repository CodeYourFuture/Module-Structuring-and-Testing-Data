// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// Proper fraction
test("should return true when the denominator is greater than the numerator", () => {
  expect(isProperFraction(1, 2)).toBe(true);
});

// Improper fraction
test("should return false when the numerator is greater than the denominator", () => {
  expect(isProperFraction(2, 1)).toBe(false);
});

// Zero numerator
test("should return true when the numerator is zero", () => {
  expect(isProperFraction(0, 5)).toBe(true);
});

// Zero denominator
test("should return false when the denominator is zero", () => {
  expect(isProperFraction(5, 0)).toBe(false);
});

// numerator equals denominator
test("should return false when numerator equals denominator ", () => {
  expect(isProperFraction(5, 5)).toBe(false);
});

// Both numerator and denominator are zero
test("should return false when both the numerator and denominator are zero", () => {
  expect(isProperFraction(0, 0)).toBe(false);
});

// Negative numbers
test("should correctly identify proper fractions when given negative numbers", () => {
  expect(isProperFraction(-1, 2)).toBe(true);
  expect(isProperFraction(1, -2)).toBe(true);
  expect(isProperFraction(-1, -2)).toBe(true);
  expect(isProperFraction(-2, -1)).toBe(false);
});

// Decimal numbers
test("should correctly identify proper fractions when given decimal numbers", () => {
  expect(isProperFraction(0.5, 1)).toBe(true);
  expect(isProperFraction(1.5, 1)).toBe(false);
});

// Large numbers
test("should correctly identify proper fractions when given very large numbers", () => {
  expect(isProperFraction(999999999, 1000000000)).toBe(true);
});
