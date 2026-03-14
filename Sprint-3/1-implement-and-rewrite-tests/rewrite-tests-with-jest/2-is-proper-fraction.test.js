// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// Special case: numerator is zero
test(`should return true when the numerator is zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
});

test(`should return true when the denominator is bigger then the numerator` => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test(`should return false when the denominator is equal to the numerator`, () => {
  expect(isProperFraction(2, 2)).toEqual(false);
});

test(`should return false when the denominator is smaller than the numerator`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
});

test(`should return false when the denominator and the numerator are both zero`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});

test(`should return false when the denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
