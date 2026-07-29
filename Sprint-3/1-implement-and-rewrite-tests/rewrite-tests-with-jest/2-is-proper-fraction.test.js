// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test(`should return true when numerator is less than denominator`, () => {
  // Proper fractions
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
});
// Improper fractions
test("should return false when numerator is greater than denominator`", () => {
  expect(isPrperFraction(5, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
});
// Equal numerator and denominator
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});

// Numerator is zero
test("should return true when numerator is zero and denominator is positive", () => {
  expect(isProperFunction(0.5)).toEqual(true);
});
// Denominator is zero
test("should return false when denominator is zero", () => {
  expect(isProperFunction(1, 0)).toEqual(false);
});
// Both numerator and denominator are zero
test("should return false when numerator and denominator are zero", () => {
  expect(isProperFunction(0, 0)).toEqual(false);
});
// Negative numerator
test("should return false when numerator is negative", () => {
  expect(isProperFunction(-1, 6)).toEqual(false);
});
// Negative denominator
test("should return false when denominator is negative", () => {
  expect(isProperFraction(1, -5)).toEqual(false);
});
// Both numerator and denominator are negative
test("should return false when both numerator and denominator is negative", () => {
  expect(isProperFraction(-4, -5)).toEqual(false);
});
