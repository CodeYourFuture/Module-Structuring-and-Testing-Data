const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toBe(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction", () => {
  expect(isProperFraction(9, 5)).toBe(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative fraction", () => {
  expect(isProperFraction(-6, 10)).toBe(true);
  expect(isProperFraction(-2, -3)).toBe(true);
  expect(isProperFraction(2, -3)).toBe(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for a fraction with equal numerator and denominator", () => {
  expect(isProperFraction(4, 4)).toBe(false);
});

// Case 5: Handle zero numerator or denominator 
test("returns false for 0 numerator or 0 denominator", () => {
  expect(isProperFraction(0, 5)).toBe(false);
  expect(isProperFraction(5, 0)).toBe(false);
});


