// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`should return true when numerator is zero and denominator is positive`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
});

test(`should return true when numerator is zero and denominator is negative`, () => {
  expect(isProperFraction(0, -1)).toEqual(true);
});


test("1/2 is proper", () => {
  expect(isProperFraction(1, 2)).toBe(true);
});

test("2/1 is improper", () => {
  expect(isProperFraction(2, 1)).toBe(false);
});

test("0/1 is proper", () => {
  expect(isProperFraction(0, 1)).toBe(true);
});

test("-1/2 is proper", () => {
  expect(isProperFraction(-1, 2)).toBe(true);
});

test("1/-2 is proper", () => {
  expect(isProperFraction(1, -2)).toBe(true);
});

test("-1/-2 is proper", () => {
  expect(isProperFraction(-1, -2)).toBe(true);
});

test("3/4 is proper", () => {
  expect(isProperFraction(3, 4)).toBe(true);
});

test("4/3 is improper", () => {
  expect(isProperFraction(4, 3)).toBe(false);
});

test("denominator 0 returns false", () => {
  expect(isProperFraction(1, 0)).toBe(false);
});