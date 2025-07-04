const isProperFraction = require("./2-is-proper-fraction");


test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an Improper fraction", () => {
  expect(isProperFraction(6, 3)).toEqual(false);
});

test("should return false for a negative improper fraction", () => {
  expect(isProperFraction(-7, 4)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative proper fraction", () => {
  expect(isProperFraction(3, -5)).toEqual(true);
  expect(isProperFraction(-3, 5)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for equal numerator and denominator", () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});

// Case 6: Identify Zero Denominator:
test("should throw an error for zero denominator", () => {
  expect(() => isProperFraction(3, 0)).toThrow("Denominator cannot be zero.");
});

// Case 5: Identify Fractions with Absolute Values:
test("should return false for equal numerator and denominator regardless of sign", () => {
  expect(isProperFraction(5, 5)).toEqual(false);
  expect(isProperFraction(-5, 5)).toEqual(false);
  expect(isProperFraction(5, -5)).toEqual(false);
  expect(isProperFraction(-5, -5)).toEqual(false);
});