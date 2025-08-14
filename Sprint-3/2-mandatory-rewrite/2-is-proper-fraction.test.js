const isProperFraction = require("./2-is-proper-fraction");

//testing for proper fractions
test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
  expect(isProperFraction(-2, 3)).toEqual(true);
  expect(isProperFraction(2, -3)).toEqual(true);
});

//testing for zero denominator
test("should throw error for denominator zero", () => {
  expect(() => isProperFraction(3, 0)).toThrow("Denominator cannot be 0");
});

// testing for negative fractions
test("should correctly handle negative fractions", () => {
  expect(isProperFraction(-2, -3)).toEqual(true);
  expect(isProperFraction(-3, -2)).toEqual(false);
  expect(isProperFraction(-3, 2)).toEqual(false);
  expect(isProperFraction(3, -2)).toEqual(false);
});
