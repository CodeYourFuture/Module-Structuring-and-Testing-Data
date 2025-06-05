const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for improper fractions", () => {
  expect(isProperFraction(3, 2)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for negative fractions", () => {
  expect(isProperFraction(-2, 3)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for equal numerator and denominator", () => {
  expect(isProperFraction(2, 2)).toEqual(false);
});
