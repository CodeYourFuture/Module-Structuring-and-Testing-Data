const isProperFraction = require("./2-is-proper-fraction");
// Test cases for isProperFraction function
// Case 1: Identify Proper Fractions:
// When the numerator is less than the denominator,
// Then the function should return true indicating a proper fraction.
test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

// Case 2: Identify Zero Numerator:
test("should return true for a zero numerator", () => {
  expect(isProperFraction(0, 5)).toEqual(true); 
});

// Case 3: Identify Negative proper Fractions:

test("should return true for a negative improper fraction", () => {
  expect(isProperFraction(-3, -4)).toEqual(true);
});

// Case 4: Identify Negative Improper Fractions:
test("should return false for a negative proper fraction", () => {
  expect(isProperFraction(-5, -3)).toEqual(false);
});

// Case 5: Identify Equal Numerator and Denominator:
test("should return false for equal numerator and denominator", () => {
  expect(isProperFraction(5,5)).toEqual(false);
});

// Case 6: Identify Zero Denominator:
test("should return false for zero denominator", () => {
  expect(isProperFraction(5, 0)).toEqual(false);
});

// Case 7: Identify Negative Denominator:
test("should return true for a negative denominator", () => {
  expect(isProperFraction(3, -4)).toEqual(true);
});

// Case 8: invalid input:
test("should return false for invalid input", () => {
  expect(isProperFraction("a", 3)).toEqual(false);
  expect(isProperFraction(2, "b")).toEqual(false);
  expect(isProperFraction("c", "d")).toEqual(false);
});

// Case 9: empty input:
test("should return false for empty input", () => {
  expect(isProperFraction()).toEqual(false);
  expect(isProperFraction("", "")).toEqual(false);
});
