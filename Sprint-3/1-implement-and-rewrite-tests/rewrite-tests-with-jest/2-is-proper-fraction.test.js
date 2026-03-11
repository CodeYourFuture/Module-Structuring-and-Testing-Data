// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.
// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(-11, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
  expect(isProperFraction(7, 0)).toEqual(false);
});
// It should return false when the numerator > the denominator
test("should return true when numerator is 0", () => {
  expect(isProperFraction(0, -1)).toEqual(true);
  expect(isProperFraction(0, 3)).toEqual(true);
  expect(isProperFraction(0, -2)).toEqual(true);
});
test("should return true when numerator > denominator", () => {
  expect(isProperFraction(-12, -19)).toEqual(true);
  expect(isProperFraction(0, 6)).toEqual(true);
  expect(isProperFraction(17, -71)).toEqual(true);
});
test("should return false when numerator < denominator", () => {
  expect(isProperFraction(-180, -109)).toEqual(false);
  expect(isProperFraction(27, 5)).toEqual(false);
  expect(isProperFraction(-29, 17)).toEqual(false);
});
