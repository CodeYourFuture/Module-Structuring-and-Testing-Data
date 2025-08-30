const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for a improper fraction", () => {
  expect(isProperFraction(7, 3)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative fraction", () => {
  expect(isProperFraction(-2, 3)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for a whole number fraction", () => {
  expect(isProperFraction(7, 7)).toEqual(false);
});