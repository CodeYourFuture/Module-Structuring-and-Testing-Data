// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Case 2: Identify Improper Fractions:
test("should return false for improper fraction",()=>{
  expect(isProperFraction(3,2)).toEqual(false)
})

// Case 3: Identify Negative Fractions:
test("should return true for negative proper fraction",()=>{
  expect(isProperFraction(-2,7)).toEqual(true)
})

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for equal nominator and denominator",()=>{
  expect(isProperFraction(2,2)).toEqual(false)
})
