// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero

// Case 1: Denominator is Zero (The Impossible Pizza)
test("should return false when denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
});

// Case 2: Numerator is Zero (Empty Plate)
test("should return true when numerator is zero and denominator is not zero", () => {
  expect(isProperFraction(0, 2)).toEqual(true);
});

// Case 3: Normal Positive Fractions
test("should handle normal positive numbers correctly", () => {
  expect(isProperFraction(1, 2)).toEqual(true); // Small top, big bottom -> True!
  expect(isProperFraction(3, 2)).toEqual(false); // Big top, small bottom -> False!
  expect(isProperFraction(2, 2)).toEqual(false); // Same size (whole pizza) -> False!
});

// Case 4: Negative Numbers (Minus Signs)
test("should ignore minus signs and look only at the size of the numbers", () => {
  expect(isProperFraction(-1, 2)).toEqual(true); // 1 is smaller than 2 -> True!
  expect(isProperFraction(1, -2)).toEqual(true); // 1 is smaller than 2 -> True!
  expect(isProperFraction(-3, 2)).toEqual(false); // 3 is bigger than 2 -> False!
  expect(isProperFraction(-2, -2)).toEqual(false); // Same size -> False!
});
