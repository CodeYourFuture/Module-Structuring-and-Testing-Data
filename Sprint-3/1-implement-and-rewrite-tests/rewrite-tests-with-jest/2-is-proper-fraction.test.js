// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

//case:absolute numerator is bigger than absolute denominator
test ('should return false when numerator absolute is bigger than denominator absolute',() => {
  expect(isProperFraction(5, -4)).toEqual(false);
})

//case:numerator is the same as denominator
test('should return false if numerator is the same as denominator', () =>{
  expect(isProperFraction(-9,-9)).toEqual(false)
})

//case: absolute numerator is less than absolute denominator
test ('should return true when numerator absolute is less than denominator absolute',() => {
  expect(isProperFraction(3,-8)).toEqual(true);
})

//case: numerator is zero
test(`should return true when nominator is zero`, () => {
  expect(isProperFraction(0,-3)).toEqual(true);
});



