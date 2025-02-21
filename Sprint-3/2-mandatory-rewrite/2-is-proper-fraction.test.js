const isProperFraction = require("./2-is-proper-fraction");
const isImProperFraction = require("./2-is-improper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return true for a Improper fraction", () => {
  expect(isImProperFraction(6, 3)).toEqual(true);
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative fraction", () => {
  expect(isImProperFraction(-5, 3)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for equal Numerator and Denominator", () => {
  expect(isEqualNumeratorandDenominator(5, 5)).toEqual(false);
});

