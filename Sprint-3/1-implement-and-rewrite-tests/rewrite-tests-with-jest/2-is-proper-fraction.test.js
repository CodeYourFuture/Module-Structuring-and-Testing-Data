// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.]

//case 1: proper function

test("should return true when |numerator| < |denominator|", () => {
  expect(isProperFraction(-3, 4)).toEqual(true);
  expect(isProperFraction(3, -4)).toEqual(true);
  expect(isProperFraction(1, 2)).toEqual(true);
});

//case 2: result is a whole number
test("should return false when the result is a whole number", () => {
  expect(isProperFraction(2, 2)).toEqual(false);
  expect(isProperFraction(-2 - 2)).toEqual(false);
  expect(isProperFraction(2, -2)).toEqual(false);
});

//case 3: numerator or denominator is a decimal
test("should return false if the numerator or denominator is a decimal", () => {
  expect(isProperFraction(1.5, 2)).toEqual(false);
  expect(isProperFraction(1, 1.5)).toEqual(false);
});

//case 4: numerator or denominator is negative
test("should return true even if the numerator or denominator is negative", () => {
  expect(isProperFraction(-4, 5)).toEqual(true);
  expect(isProperFraction(4, -5)).toEqual(true);
});

// Special case: numerator or denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(0, 1)).toEqual(false);
});
