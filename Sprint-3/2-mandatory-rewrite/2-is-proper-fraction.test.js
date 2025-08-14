const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 3)).toEqual(false);
});

test("should return true for a proper fraction with negative numerator", () => {
  expect(isProperFraction(-2, 3)).toEqual(true);
});

test("should return false when numerator is equal to denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});

