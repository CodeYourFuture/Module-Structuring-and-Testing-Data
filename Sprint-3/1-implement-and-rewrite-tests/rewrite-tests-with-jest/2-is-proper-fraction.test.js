// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.
test(`should return True when denominator is positive and  less than numerator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(-1, 2)).toEqual(true );
  expect(isProperFraction(20, 21)).toEqual(true );
  expect(isProperFraction(60, 90)).toEqual(true );
});

test(`should return false when denominator greater than numerator`, () => {
  expect(isProperFraction(10, 1)).toEqual(false);
  expect(isProperFraction(11, 1)).toEqual(false);
});

test(`should return false when denominator and numerators are Equal`, () => {
  expect(isProperFraction(1, 1)).toEqual(false);
  expect(isProperFraction(-1,-1)).toEqual(false);
  expect(isProperFraction(-1, 1)).toEqual(false);
});

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(-1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
});
