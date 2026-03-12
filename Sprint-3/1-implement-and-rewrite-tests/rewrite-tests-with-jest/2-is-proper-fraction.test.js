// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test("returns false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test("returns false when numerator is zero", () => {
  expect(isProperFraction(0, 1)).toEqual(false);
});

test("returns false when numerator > denominator", () => {
  expect(isProperFraction(2, 1)).toEqual(false);
});

test("returns false when numerator is negative", () => {
  expect(isProperFraction(-2, 2)).toEqual(false);
});

test("returns false when denominator is negative", () => {
  expect(isProperFraction(2, -2)).toEqual(false);
});

test("returns false when both numerator and denominator are negative", () => {
  expect(isProperFraction(-3, -4)).toEqual(false);
});
