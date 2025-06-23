const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a Negative Fraction", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for improper fraction because the numerator is equal to the denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});

//
test("should return false, The fraction -5/-2 is a improper fraction because the absolute value of the numerator (5) is more than the absolute value of denominator (2). The function should return false.", () => {
  expect(isProperFraction(-5, -2)).toEqual(false);
});