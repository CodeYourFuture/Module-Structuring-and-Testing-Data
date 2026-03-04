// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(0,0)).toEqual(false)
});

// Where the numerator is > than the denominator
test(`should return false when the (numerator > denominator)`,()=>{
  expect(isProperFraction(4,2)).toEqual(false)
  expect(isProperFraction(100,6)).toEqual(false)
  expect(isProperFraction(5,-10)).toEqual(false)
});

// Where the fraction is correct
test(`Should return a true when the (numerator < denominator)`,()=>{
  expect(isProperFraction(1,2)).toEqual(true)
  expect(isProperFraction(6,8)).toEqual(true)
  expect(isProperFraction(-3,2)).toEqual(true)
});

