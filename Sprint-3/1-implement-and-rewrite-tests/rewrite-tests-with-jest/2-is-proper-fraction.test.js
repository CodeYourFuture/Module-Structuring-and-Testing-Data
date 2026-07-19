// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");


// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1,2 )).toEqual(true);
  expect(isProperFraction(2,1)).toEqual(false);
  expect(isProperFraction(5,5)).toEqual(false);
  expect(isProperFraction(0,5)).toEqual(true);
  expect(isProperFraction(5,0)).toEqual(false);
  expect(isProperFraction(0,0)).toEqual(false);
  expect(isProperFraction(-1,2)).toEqual(true);
  expect(isProperFraction(1,-2)).toEqual(false);
  expect(isProperFraction(-2,-1)).toEqual(true);
  expect(isProperFraction(-1,-2)).toEqual(false);
  expect(isProperFraction(0.5,1)).toEqual(true);
  expect(isProperFraction(1.5,1)).toEqual(false);
  expect(isProperFraction(Infinity,2)).toEqual(false);
  expect(isProperFraction(2,Infinity)).toEqual(false);
  expect(isProperFraction(NaN,2)).toEqual(false)
  expect(isProperFraction(2,NaN)).toEqual(false);
  expect(isProperFraction(999999999, 1000000000)).toEqual(true)








});
