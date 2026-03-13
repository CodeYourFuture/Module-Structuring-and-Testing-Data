// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

test("returns true when |numerator| < |denominator|", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test("returns true when numerator is zero", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

test("returns false when |numerator| > |denominator|", () => {
  expect(isProperFraction(3, 2)).toEqual(false);
});

test("returns false when |numerator| = |denominator|", () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});

test("returns false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test("returns true when denominator is negative but |numerator| < |denominator|", () => {
  expect(isProperFraction(2, -4)).toEqual(true);
});

test("returns true when both numbers are negative but |numerator| < |denominator|", () => {
  expect(isProperFraction(-3, -4)).toEqual(true);
});
