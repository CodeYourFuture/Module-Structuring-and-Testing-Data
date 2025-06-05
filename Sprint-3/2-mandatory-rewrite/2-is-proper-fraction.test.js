const isProperFraction = require("./2-is-proper-fraction");

test("Should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("Should return false for a improper fraction", () => {
  expect(isProperFraction(8, 2)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("Should return true for a negative proper fraction", () => {
  expect(isProperFraction(-6, 13)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("Should return false when numerator and denominator are equal", () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});
