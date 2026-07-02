// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Case 1: Standard Positive Numbers
test("should handle standard positive fractions correctly", () => {
  expect(isProperFraction(1, 2)).toEqual(true);  
  expect(isProperFraction(5, 3)).toEqual(false);   
});

// Case 2: Equal Numbers (Boundary)
test("should return false when numerator and denominator are equal", () => {
  expect(isProperFraction(5, 5)).toEqual(false);   // Equals 1 whole (Improper)
});

// Case 3: Numerator is Zero
test("should return true when numerator is zero and denominator is positive", () => {
  expect(isProperFraction(0, 5)).toEqual(true);   
});

// Case 4: Negative Numbers
test("should handle negative integers according to mathematical comparison rules", () => {
  expect(isProperFraction(-5, -2)).toEqual(true); 
  expect(isProperFraction(-1, -4)).toEqual(false); 
});

// Case 5: Mixed Positive and Negative Numbers
test("should return true when only the numerator is negative", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);   
  expect(isProperFraction(1, -2)).toEqual(false); 
});