const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("returns false for improper fractions (numerator > denominator)", () => {
  expect(isProperFraction(5, 2)).toBe(false);
  expect(isProperFraction(3, 3)).toBe(false);
});

// Case 3: Identify Negative Fractions:
test("handles negative denominators correctly", () => {
  expect(isProperFraction(-3, -4)).toBe(true);
  expect(isProperFraction(6, -5)).toBe(false);
});

// Case 4: Identify Equal Numerator and Denominator:
  test("should return false when numerator = denominator", () => {
    expect(isProperFraction(2, 2)).toBe(false);
    expect(isProperFraction(3, 3)).toBe(false);
  });