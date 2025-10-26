// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction", () => {  
  expect(isProperFraction(5, 3)).toEqual(false);
});


// Case 3: Function call with negative parameters
// Negative proper fraction: numerator absolute value less than denominator
test("should return true for negative proper fraction", () => {
  expect(isProperFraction(-2, 3)).toEqual(true); // -2/3 is proper
  expect(isProperFraction(2, -3)).toEqual(true); // 2/-3 is proper
  expect(isProperFraction(-2, -3)).toEqual(true); // -2/-3 is proper
});

// Negative improper fraction: numerator absolute value greater than or equal to denominator
test("should return false for negative improper fraction", () => {
  expect(isProperFraction(-5, 3)).toEqual(false); // -5/3 is improper
  expect(isProperFraction(5, -3)).toEqual(false); // 5/-3 is improper
  expect(isProperFraction(-5, -3)).toEqual(false); // -5/-3 is improper
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for equal numerator and denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});
