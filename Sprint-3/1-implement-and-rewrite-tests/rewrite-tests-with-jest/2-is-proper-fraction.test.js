// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for numerator>denominator",()=>{
  expect(isProperFraction(5, 2)).toEqual(false);
} );

// Case 3: Identify Negative Fractions:
test("should return true when the fraction is negative but proper (numerator smaller than denominator in absolute value)", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});


test("should return false when the numerator is negative and greater in absolute value than the denominator", () => {
  expect(isProperFraction(-3, 2)).toEqual(false);
});

// Case 4: Identify Equal Numerator and Denominator:
test (" should return false for Equal Numerator and Denominator ",()=>{
  expect(isProperFraction(3,3)).toEqual(false);
});