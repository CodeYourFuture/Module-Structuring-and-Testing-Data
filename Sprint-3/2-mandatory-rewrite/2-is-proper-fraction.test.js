const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
  expect(isProperFraction(1, 2)).toEqual(true);
});

// Case 2: Identify Improper Fractions:

test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 3)).toEqual(false);
  expect(isProperFraction(3, 3)).toEqual(false);
});

// Case 3: Identify Negative Fractions:

 test("should return false for negative fractions", () => {
  expect(isProperFraction(-2, 3)).toEqual(false);
  expect(isProperFraction(2, -3)).toEqual(false);
  expect(isProperFraction(-2, -3)).toEqual(false);
});

// Case 4: Identify Equal Numerator and Denominator:

test("should return false when numerator and denominator are equal", () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});


