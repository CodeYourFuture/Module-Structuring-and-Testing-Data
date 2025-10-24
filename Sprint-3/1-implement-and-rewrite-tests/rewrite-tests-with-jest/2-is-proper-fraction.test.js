const isProperFraction = require("../implement/2-is-proper-fraction");

// Case 1: Proper fraction
// When numerator < denominator, it should return true.
test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Improper fraction
// When numerator > denominator, it should return false.
test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

// Case 3: Negative proper fraction
// When numerator is negative but |numerator| < |denominator|, it should return true.
test("should return true for a negative proper fraction", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});

// Case 4: Equal numerator and denominator
// When numerator === denominator, it should return false.
test("should return false for equal numerator and denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});

// Case 5: Zero numerator
// 0 divided by any non-zero denominator is a proper fraction.
test("should return true for zero numerator", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// Case 6: Negative denominator
// When denominator is negative, the fraction is still valid, so check absolute values.
test("should return true when denominator is negative but |numerator| < |denominator|", () => {
  expect(isProperFraction(2, -3)).toEqual(true);
});

// Case 7: Denominator is zero
// Division by zero is undefined, should return false.
test("should return false when denominator is zero", () => {
  expect(isProperFraction(3, 0)).toEqual(false);
});

// Case 8: Both numerator and denominator are negative but |numerator| < |denominator|
// Negative/negative cancels out, still a proper fraction.
test("should return true when both numerator and denominator are negative and |numerator| < |denominator|", () => {
  expect(isProperFraction(-3, -7)).toEqual(true);
});

// Case 9: Large numbers
// It should handle large numbers correctly.
test("should return true for large proper fractions", () => {
  expect(isProperFraction(999, 1000)).toEqual(true);
});
