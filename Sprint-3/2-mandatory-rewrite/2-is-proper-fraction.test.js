const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
// When the numerator is greater than the denominator
// Then the function should return false.
test("should return false for an improper fraction", () => {
  expect(isProperFraction(4, 3)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
// When the numerator or denominator is negative
// Then the function should return false.
test("should return false for a negative fraction with negative numerator", () => {
  expect(isProperFraction(-2, 3)).toEqual(false);
});

test("should return false for a negative fraction with negative denominator", () => {
  expect(isProperFraction(2, -3)).toEqual(false);
});

// Case 4: Identify Equal Numerator and Denominator:
// When the numerator and denominator are equal
// Then the function should return false.
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});