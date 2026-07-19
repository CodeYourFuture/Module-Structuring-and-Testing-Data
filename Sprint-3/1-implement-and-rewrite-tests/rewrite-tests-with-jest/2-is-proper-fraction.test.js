// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");


test("should correctly identify proper fractions", () => {
  // Whole number fractions
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(5, 5)).toEqual(false);

  // Zero
  expect(isProperFraction(0, 5)).toEqual(true);
  expect(isProperFraction(5, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);

  // Negative numbers
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(1, -2)).toEqual(false);
  expect(isProperFraction(-2, -1)).toEqual(true);
  expect(isProperFraction(-1, -2)).toEqual(false);

  // Decimal numbers
  expect(isProperFraction(0.5, 1)).toEqual(true);
  expect(isProperFraction(1.5, 1)).toEqual(false);

  // Infinity
  expect(isProperFraction(Infinity, 2)).toEqual(false);
  expect(isProperFraction(2, Infinity)).toEqual(false);

  // NaN
  expect(isProperFraction(NaN, 2)).toEqual(false);
  expect(isProperFraction(2, NaN)).toEqual(false);

  // Large numbers
  expect(isProperFraction(999999999, 1000000000)).toEqual(true);
});
