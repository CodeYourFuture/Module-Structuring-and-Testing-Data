const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
  expect(isProperFraction(7, 9)).toEqual(true);
  expect(isProperFraction(4, 5)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for improper fraction", () => {
  expect(isProperFraction(10, 3)).toEqual(false);
  expect(isProperFraction(7, 5)).toEqual(false);
  expect(isProperFraction(2, 1)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("Should return true if absolute value numerator<denominator and false if absolute numerator>denominator", () => {
  expect(isProperFraction(-4, 3)).toEqual(false);
  expect(isProperFraction(-2, -3)).toEqual(true);
  expect(isProperFraction(-2, 3)).toEqual(true);
  expect(isProperFraction(2, -3)).toEqual(true);
  expect(isProperFraction(-4, -3)).toEqual(false);
  expect(isProperFraction(4, -3)).toEqual(false);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for Equal Numerator and Denominator", () => {
  expect(isProperFraction(7, 7)).toEqual(false);
  expect(isProperFraction(5, 5)).toEqual(false);
  expect(isProperFraction(1, 1)).toEqual(false);
});
