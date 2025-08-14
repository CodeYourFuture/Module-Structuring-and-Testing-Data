// Case 2: Identify Improper Fractions:

// Case 3: Identify Negative Fractions:

// Case 4: Identify Equal Numerator and Denominator:
const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true); // 2/3 is a proper fraction
});

test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 3)).toEqual(false); // 5/3 is an improper fraction
});

test("should return true for a proper fraction with negative numerator", () => {
  expect(isProperFraction(-2, 3)).toEqual(true); // -2/3 is a proper fraction
});

test("should return false for an improper fraction with negative numerator", () => {
  expect(isProperFraction(-5, 3)).toEqual(false); // -5/3 is an improper fraction
});

test("should return false when numerator is equal to denominator", () => {
  expect(isProperFraction(5, 5)).toEqual(false); // 5/5 is not a proper fraction
});

test("should return false when denominator is zero", () => {
  expect(isProperFraction(2, 0)).toEqual(false); // Division by zero is invalid
});
