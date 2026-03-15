// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});


// Case 2: positive proper fractions
test(`should return true when |numerator| < |denominator|`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(2, 4)).toEqual(true);
})

// Case 3: negative proper fractions
test(`should return true when |numerator| < |denominator|`, () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
  expect(isProperFraction(-2, -4)).toEqual(true);
})

// Case 4: improper fractions (numerator >= denominator)
test(`should return false when |numerator| >= |denominator|`, () => {
  expect(isProperFraction(4, 2)).toEqual(false);
  expect(isProperFraction(4, 4)).toEqual(false);
  expect(isProperFraction(-6, 4)).toEqual(false);
  expect(isProperFraction(7, -2)).toEqual(false);
});

// Case 5: numerator is zero
test(`should return true when numerator is 0 and denominator is non-zero`, () => {
  expect(isProperFraction(0, 3)).toEqual(true);
  expect(isProperFraction(0, -5)).toEqual(true);
});