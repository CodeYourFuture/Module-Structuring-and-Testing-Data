const isProperFraction = require("./2-is-proper-fraction");
const isImproperFraction = require("./2-is-improper-fraction");
const isEqualNumeratorAndDenominator = require("./2-is-equal-numerator-denominator");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return true for a Improper fraction", () => {
  expect(isImproperFraction(6, 3)).toEqual(true);
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative fraction", () => {
  expect(isImproperFraction(-5, 3)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for equal numerator and denominator", () => {
  expect(isEqualNumeratorAndDenominator(5, 5)).toEqual(false);
});

