// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative proper fraction", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});

// Stretch 1: Identify Negative Denominator:
test("should return true when 2 < |3|", () => {
  expect(isProperFraction(2, -3)).toEqual(true);
});

// Stretch 2: Identify Zero Numerator:
test("should return true when 0 < 5", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// Stretch 3: Handle Zero Denominator:
// This test checks how the function handles a zero denominator, which is mathematically undefined.
// We expect the function to return false in this case.
test("should return false when 3 > 0", () => {
  expect(isProperFraction(3, 0)).toEqual(false);
});

// Stretch 4: Handle Both Numerator and Denominator as Zero:
// This test checks how the function handles both numerator and denominator being zero.
// We expect the function to return false in this case as well.
test("should return false when both numerator and denominator are zero", () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});

// Stretch 5: Identify Negative Numerator and Negative Denominator:
test("should return true when |3| < |5|", () => {
  expect(isProperFraction(-3, -5)).toEqual(true);
});

// Stretch 6: Identify Improper Negative Numerator and Negative Denominator:
test("should return false when |3| > |2|", () => {
  expect(isProperFraction(-3, -2)).toEqual(false);
});

// Stretch 7: Identify Decimal Values:
test("should return true when 2.5 < 3.5", () => {
  expect(isProperFraction(2.5, 3.5)).toEqual(true);
});

// Stretch 8: Identify Improper Decimal Values:
test("should return false when 3.5 > 2.5", () => {
  expect(isProperFraction(3.5, 2.5)).toEqual(false);
});

// Stretch 9: Identify invalid Inputs (Non-numeric Values):
test("should return false for non-numeric inputs", () => {
  expect(isProperFraction("a", 2)).toEqual(false);
});

// Stretch  10: numerator is a string that can be converted to a number
test("should return true when '2' < 3", () => {
  expect(isProperFraction("2", 3)).toEqual(true);
});

// Stretch 11: denominator is a string that can be converted to a number
test("should return false when 5 > '2'", () => {
  expect(isProperFraction(5, "2")).toEqual(false);
});

// Stretch 12: both numerator and denominator are strings that can be converted to numbers
test("should return true when '2' < '3'", () => {
  expect(isProperFraction("2", "3")).toEqual(true);
});

// Stretch 13: numerator is null
test("should return false when numerator is null", () => {
  expect(isProperFraction(null, 3)).toEqual(false);
});

// Stretch 14: denominator is null
test("should return false when denominator is null", () => {
  expect(isProperFraction(3, null)).toEqual(false);
});

// Stretch 15: both numerator and denominator are null
test("should return false when both numerator and denominator are null", () => {
  expect(isProperFraction(null, null)).toEqual(false);
});

// Stretch 16: numerator is undefined
test("should return false when numerator is undefined", () => {
  expect(isProperFraction(undefined, 3)).toEqual(false);
});

// Stretch 17: denominator is undefined
test("should return false when denominator is undefined", () => {
  expect(isProperFraction(3, undefined)).toEqual(false);
});

// Stretch 18: both numerator and denominator are undefined
test("should return false when both numerator and denominator are undefined", () => {
  expect(isProperFraction(undefined, undefined)).toEqual(false);
});

// Stretch 19: numerator is an array
test("should return false when numerator is an array", () => {
  expect(isProperFraction([2], 3)).toEqual(false);
});

// Stretch 20: denominator is an array
test("should return false when denominator is an array", () => {
  expect(isProperFraction(2, [3])).toEqual(false);
});

// Stretch 21: numerator is an object
test("should return false when numerator is an object", () => {
  expect(isProperFraction({ num: 2 }, 3)).toEqual(false);
});

// Stretch 22: denominator is an object
test("should return false when denominator is an object", () => {
  expect(isProperFraction(2, { den: 3 })).toEqual(false);
});
