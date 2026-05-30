// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test("1/2 is proper", () => {
  expect(isProperFraction(1, 2)).toBe(true);
});

test("3/2 is improper", () => {
  expect(isProperFraction(3, 2)).toBe(false);
});

test("0/5 is proper", () => {
  expect(isProperFraction(0, 5)).toBe(true);
});

test("denominator 0 is invalid", () => {
  expect(isProperFraction(1, 0)).toBe(false);
});

test("-1/2 is proper", () => {
  expect(isProperFraction(-1, 2)).toBe(true);
});

test("1/-2 is proper", () => {
  expect(isProperFraction(1, -2)).toBe(true);
});

test("-3/2 is improper", () => {
  expect(isProperFraction(-3, 2)).toBe(false);
});

