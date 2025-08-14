const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("returns false for improper fraction (5/2)", () => {
  expect(isProperFraction(5, 2)).toBe(false);
});


// Case 3: Identify Negative Fractions:
test("returns true for negative proper fraction (-4/7)", () => {
  expect(isProperFraction(-4, 7)).toBe(true);
});


// Case 4: Identify Equal Numerator and Denominator:

test("returns false for equal numerator and denominator (3/3)", () => {
  expect(isProperFraction(3, 3)).toBe(false);
});
 // Zero numerator
 test("returns true when numerator is 0 and denominator is non-zero", () => {
  expect(isProperFraction(0, 5)).toBe(true);
  expect(isProperFraction(0, -5)).toBe(true);
});
// Zero denominator
test("returns false when denominator is 0", () => {
  expect(isProperFraction(1, 0)).toBe(false);
  expect(isProperFraction(0, 0)).toBe(false);
});
// Negative denominator
test("handles negative denominators correctly", () => {
  expect(isProperFraction(2, -3)).toBe(true);
  expect(isProperFraction(-4, -5)).toBe(true);
});
