// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Special case: numerator is zero
test(`should return true when numerator is zero `, () => {
  expect(isProperFraction(0, 2)).toEqual(true);
});

// negative numerator and positive denominator
test(`should return true when numerator is negative and denominator is positive`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});

// positive numerator, negative denominator
test(` should return false when numerator is positive and denominator is negative`, () => {
  expect(isProperFraction(1, -2)).toEqual(true);
})




