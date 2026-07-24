// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test(`should return true when denominator is smaller or equal to the numerator`,() =>{
  expect(isProperFraction(2, 4)).toEqual(true);
  expect(isProperFraction(3, 3)).toEqual(true);
  expect(isProperFraction(5, 10)).toEqual(true);
  expect(isProperFraction(2, 2)).toEqual(true);
});
  
test(`should return false when denominator is bigger than the numerator`, () => {
  expect(isProperFraction(12, 4)).toEqual(false);
});

test("should return false when the numerator or denominator is not a positive number", () => {
  expect(isProperFraction(5, -2)).toEqual(false);
  expect(isProperFraction(-1, 0)).toEqual(false);
});
  
