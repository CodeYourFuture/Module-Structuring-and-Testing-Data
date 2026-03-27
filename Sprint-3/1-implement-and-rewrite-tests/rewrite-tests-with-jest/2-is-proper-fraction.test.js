// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Special case: numerator is zero
test(`should return true when numerator is zero`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// Special case: positive numerator and denominator
test(`should return true when numerator is less than denominator`, () => {
  expect(isProperFraction(5, 9)).toEqual(true);
});

// Special case; negative numerator and positive denominatore
test(` should return true when numertaor is negative and less than demoniator`, () => {
  expect(isProperFraction(-5, 9)).toEqual(true);
});

// special case: postive numerator and negative deminator
test(`should return true when numerator is positive and less than denominator`, () => {
  expect(isProperFraction(5, -9)).toEqual(true);
});

// Special case: negative numerator and negative denominator
test(`should return true when both are negative`, () => {
  expect(isProperFraction(-5, -9)).toEqual(true);
});

// Special case: Equal values
test(`should return false when numerator and denominator are equal`, () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});
