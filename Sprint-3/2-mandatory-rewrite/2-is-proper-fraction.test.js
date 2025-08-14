const isProperFraction = require("./2-is-proper-fraction");
test("Identifies Proper Fraction", () => {
  expect(isProperFraction(2, 3)).toBe(true);
});

test("Identifies Improper Fraction", () => {
  expect(isProperFraction(5, 2)).toBe(false);
});

test("Identifies Negative Proper Fraction", () => {
  expect(isProperFraction(-4, 7)).toBe(true);
});

test("Identifies Equal Numerator and Denominator as Improper", () => {
  expect(isProperFraction(3, 3)).toBe(false);
});