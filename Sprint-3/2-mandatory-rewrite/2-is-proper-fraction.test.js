const isProperFraction = require("./2-is-proper-fraction");


test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return true for an Improper fraction", () => {
  expect(isImproperFraction(6, 3)).toEqual(true);
});

test("should return true for a negative improper fraction", () => {
  expect(isImproperFraction(-7, 4)).toEqual(true);
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative proper fraction", () => {
  expect(isProperFraction(3, -5)).toEqual(true);
  expect(isProperFraction(-3, 5)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for equal numerator and denominator", () => {
  expect(isEqualNumeratorAndDenominator(5, 5)).toEqual(false);
});

