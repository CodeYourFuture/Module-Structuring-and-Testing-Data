const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false if the numerator is greater than or equal to the denominator", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});
// Case 3: Identify Negative Fractions:
test("should return true if the numerator is negative", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});
// Case 4: Identify Equal Numerator and Denominator:
test("should return false if the numerator and denominator are equal", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});