const isProperFraction = require("../implement/2-is-proper-fraction");

// Case 1: Proper fraction
// When numerator < denominator, it should return true.
test("should return true for a proper fraction", () => {

// Case 1: Proper Fraction
// Given a numerator smaller than denominator (2/3),
// When the function is called,
// Then it should return true because it's a proper fraction.
test("should return true for a proper fraction (2/3)", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Improper fraction
// When numerator > denominator, it should return false.
test("should return false for an improper fraction", () => {

// Case 2: Improper Fraction
// Given a numerator greater than denominator (5/2),
// When the function is called,
// Then it should return false because it's an improper fraction.
test("should return false for an improper fraction (5/2)", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

// Case 3: Negative proper fraction
// When numerator is negative but |numerator| < |denominator|, it should return true.
test("should return true for a negative proper fraction", () => {

// Case 3: Negative Proper Fraction
// Given a negative proper fraction (-1/2),
// When the function is called,
// Then it should return true because the value is between -1 and 1.
test("should return true for a negative proper fraction (-1/2)", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});

// Case 4: Equal numerator and denominator
// When numerator === denominator, it should return false.
test("should return false for equal numerator and denominator", () => {

// Case 4: Equal Numerator and Denominator
// Given a numerator equal to denominator (3/3),
// When the function is called,
// Then it should return false because it's equal to 1 (not proper).
test("should return false for equal numerator and denominator (3/3)", () => {
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

// Case 5: Negative Improper Fraction
// Given a negative improper fraction (-4/3),
// When the function is called,
// Then it should return false because the absolute value is greater than 1.
test("should return false for a negative improper fraction (-4/3)", () => {
  expect(isProperFraction(-4, 3)).toEqual(false);
});

// Case 6: Both Negative (Proper Fraction)
// Given both numerator and denominator negative (-2/-3),
// When the function is called,
// Then it should return true because the value is positive and less than 1.
test("should return true for both negative proper fraction (-2/-3)", () => {
  expect(isProperFraction(-2, -3)).toEqual(true);
});

// Case 7: Zero Numerator
// Given a numerator of 0 (0/5),
// When the function is called,
// Then it should return true because 0 is less than any nonzero denominator.
test("should return true for zero numerator (0/5)", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// Case 8: Zero Denominator
// Given a denominator of 0 (5/0),
// When the function is called,
// Then it should return false because division by zero is undefined.
test("should return false for zero denominator (5/0)", () => {
  expect(isProperFraction(5, 0)).toEqual(false);
});
