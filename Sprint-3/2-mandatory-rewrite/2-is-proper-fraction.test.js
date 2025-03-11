const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction", () => {
  expect(isProperFraction(4, 3)).toEqual(false);
  expect(isProperFraction(3, 3)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a proper fraction with negative numerator", () => {
  expect(isProperFraction(-2, 3)).toEqual(true);
});

test("should return false for an improper fraction with negative numerator", () => {
  expect(isProperFraction(-4, 3)).toEqual(false);
});

test("should return true for a proper fraction with negative denominator", () => {
  expect(isProperFraction(2, -3)).toEqual(true);
});

test("should return false for an improper fraction with negative denominator", () => {
  expect(isProperFraction(4, -3)).toEqual(false);
});
// Case 4: Identify Equal Numerator and Denominator:
test("should return false for equal numerator and denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});
