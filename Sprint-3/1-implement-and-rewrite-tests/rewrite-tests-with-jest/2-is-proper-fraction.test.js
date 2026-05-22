// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Proper fractions: numerator smaller than denominator
test("should return true for a proper fraction", () => {
  expect(isProperFraction(1, 2)).toEqual(true); // basic proper fraction
  expect(isProperFraction(3, 4)).toEqual(true);
  expect(isProperFraction(-1, 2)).toEqual(true); // negative numerator still proper
  expect(isProperFraction(0, 5)).toEqual(true); // 0/5 = 0, which is proper
});

// Improper fractions: numerator greater than denominator
test("should return false for an improper fraction", () => {
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(5, 3)).toEqual(false);
});

// Boundary: equal numerator and denominator - 4/4 = 1, a whole number not a fraction
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});
