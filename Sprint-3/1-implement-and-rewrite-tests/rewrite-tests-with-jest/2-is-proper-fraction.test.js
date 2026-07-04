// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return FALSE when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test("should return FALSE when numerator is zero", () => {
  expect(isProperFraction(0, 5)).toEqual(false);
});

test("should return TRUE when numerator is negative and smaller than denominator", () => {
  expect(isProperFraction(-1, 7)).toEqual(true);
});

test("should return TRUE when denominator is negative AND bigger than numerator", () => {
  expect(isProperFraction(1, -7)).toEqual(true);
});

test("should return FALSE when numerator > denominator ", () => {
  expect(isProperFraction(9, 7)).toEqual(false);
});

test("should return TRUE when numerator < denominator ", () => {
  expect(isProperFraction(4, 7)).toEqual(true);
});

test("should return TRUE when numerator AND denominator are negative values and the denominator is bigger than numerator", () => {
  expect(isProperFraction(-4, -7)).toEqual(true);
});
