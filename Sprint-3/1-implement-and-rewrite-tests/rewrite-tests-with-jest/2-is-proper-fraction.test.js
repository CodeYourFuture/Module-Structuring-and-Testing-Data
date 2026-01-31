// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test("should return true when numerator is zero and denominator is non-zero", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

test("should return false when both numerator and denominator are zero", () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});

// Case 2: Identify Improper Fractions:
test("should return false for improper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 3: Identify Negative Fractions:
test("should return true for proper negative fraction", () => {
  expect(isProperFraction(-3, 6)).toEqual(true);
});

test("should return false for improper negative fraction", () => {
  expect(isProperFraction(-5, 2)).toEqual(false);
});

test("should return true for proper fraction with negative denominator", () => {
  expect(isProperFraction(2, -5)).toEqual(true);
});

test("should return false for improper fraction with negative denominator", () => {
  expect(isProperFraction(7, -3)).toEqual(false);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for improper fraction (numerator === denominator)", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});

// Case 5: Identify both Numerator and Denominator as negative
test("should return true when both numerator and denominator are negative and proper", () => {
  expect(isProperFraction(-2, -5)).toEqual(true);
});

test("should return false when both numerator and denominator are negative and improper", () => {
  expect(isProperFraction(-6, -3)).toEqual(false);
});

// Case 6: Identify both Numerator and Denominator as decimal
test("should return true for proper decimal fractions", () => {
  expect(isProperFraction(1.5, 2.5)).toEqual(true);
});

test("should return false for improper decimal fractions", () => {
  expect(isProperFraction(2.5, 1.5)).toEqual(false);
});

// Case 7: Identify both Numerator and Denominator as large numbers
test("should return true for large proper fractions", () => {
  expect(isProperFraction(100, 1000)).toEqual(true);
});

test("should return false for large improper fractions", () => {
  expect(isProperFraction(1000, 100)).toEqual(false);
});
