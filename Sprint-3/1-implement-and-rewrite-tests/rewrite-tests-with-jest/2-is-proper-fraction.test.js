// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Case 1: Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Case 2: Numerator is zero
test(`should return true when numerator is zero and denominator is non-zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
}); 

// Case 3: Proper fractions 
test("should return true for proper fractions", () => {
  expect(isProperFraction(1,2)).toEqual(true);
  expect(isProperFraction(2,5)).toEqual(true);
})

// Case 4: Equal Numerator and Denominator  
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(2,2)).toEqual(false);
})

// Case 5: Improper fractions
test("should return false for improper fractions", () => {
  expect(isProperFraction(5,3)).toEqual(false);
})

// Case 6: Negative numerator
test("should return true when numerator is negative but absolute value is smaller", () => {
  expect(isProperFraction(-1, 3)).toEqual(true);
})

// Case 7: Negative denominator
test("should return true when denominator is negative but absolute value is larger", () => {
  expect(isProperFraction(1, -3)).toEqual(true);
})

// Case 8: Both Negative
test("should return true when both numerator and denominator are negative and proper", () => {
  expect(isProperFraction(-2, -5)).toEqual(true);
})