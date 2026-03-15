// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// Special case: numerator equals zero
test(`returns true if numerator equals zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
  expect(isProperFraction(0, -2)).toEqual(true);
});

test(`returns true when abs(denominator) > abs(numerator)`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(-1, -2)).toEqual(true);
  expect(isProperFraction(0, 1)).toEqual(true);
});

test(`returns false when denominator equals numerator`, () => {
  expect(isProperFraction(2, 2)).toEqual(false);
  expect(isProperFraction(-2, -2)).toEqual(false);
});

test(`returns false when abs(denominator) < abs(numerator)`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(-2, 1)).toEqual(false);
  expect(isProperFraction(2, -1)).toEqual(false);
  expect(isProperFraction(-2, -1)).toEqual(false);
});

test(`returns false when 0/0`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});

test(`returns false when denominator equals 0`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(-1, 0)).toEqual(false);
});
