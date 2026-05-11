// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

test('should return true when the numerator is less than the denominator (1 and 2)', () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test('should return true when the numerator is less than the denominator using decimals (0.1 and 2)', () => {
  expect(isProperFraction(0.1, 2)).toEqual(true);
});

test('should return true when the numerator is less than the denominator and numerator is negative (-1 and 2)', () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});

test('should return true when the numerator is less than the denominator and denominator is negative (1 and -2)', () => {
  expect(isProperFraction(1, -2)).toEqual(true); 
});

test('should return true for large numbers when numerator is less than denominator (1,000,000 and 2,000,000)', () => {
  expect(isProperFraction(1000000, 2000000)).toEqual(true);
});


test('should return false when the numerator is greater than the denominator (2 and 1)', () => {
  expect(isProperFraction(2, 1)).toEqual(false);
});

test('should return false when the numerator is larger than the denominator with decimals (2 and 0.1)', () => {
  expect(isProperFraction(2, 0.1)).toEqual(false);
});

test('should return false when the numerator is larger than the denominator (2 and -1)', () => {
  expect(isProperFraction(2, -1)).toEqual(false);
});

test('should return false when the numerator is larger than the denominator (-2 and 1)', () => {
  expect(isProperFraction(-2, 1)).toEqual(false);
});

test('should return false for large numbers when the numerator is larger than the denominator (2,000,000 and 1,000,000)', () => {
  expect(isProperFraction(2000000, 1000000)).toEqual(false);
});

// Special case: denominator is zero
test('should return false when denominator is zero', () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Special case: numerator is string
test('should return false when denominator is zero', () => {
  expect(isProperFraction("hello", 0)).toEqual(false);
});