const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("Should be able to identify Improper fractions (5/2)", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("Should be able to identify Improper fractions (-5/2)", () => {
  expect(isProperFraction(-5, 2)).toEqual(false);
});
// Case 4: Identify Equal Numerator and Denominator:
test("Should be able to identify Improper fractions (5/5)", () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});
