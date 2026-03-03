/**
 * Original file:
 *
// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
*
*/

// This statement loads the isProperFraction function written in the implement directory.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

describe('isProperFraction', () => {
  // Test 1: Proper fractions with positive numbers
  describe('positive proper fractions', () => {
    test('should return true when numerator < denominator', () => {
      expect(isProperFraction(1, 2)).toBe(true);
      expect(isProperFraction(3, 4)).toBe(true);
      expect(isProperFraction(5, 8)).toBe(true);
    });
  });

  // Test 2: Improper fractions with positive numbers
  describe('positive improper fractions', () => {
    test('should return false when numerator > denominator', () => {
      expect(isProperFraction(3, 2)).toBe(false);
      expect(isProperFraction(4, 3)).toBe(false);
    });

    test('should return false when numerator = denominator', () => {
      expect(isProperFraction(5, 5)).toBe(false);
      expect(isProperFraction(1, 1)).toBe(false);
    });
  });

  // Test 3: Fractions with negative numbers
  describe('fractions with negative numbers', () => {
    test('should return true when |numerator| < |denominator|', () => {
      expect(isProperFraction(-1, 2)).toBe(true);
      expect(isProperFraction(1, -2)).toBe(true);
      expect(isProperFraction(-3, -4)).toBe(true);
    });

    test('should return false when |numerator| >= |denominator|', () => {
      expect(isProperFraction(-3, 2)).toBe(false);
      expect(isProperFraction(3, -2)).toBe(false);
      expect(isProperFraction(-4, -3)).toBe(false);
      expect(isProperFraction(-2, -2)).toBe(false);
    });
  });

  // Test 4: Zero cases
  describe('fractions with zero', () => {
    test('should return true when numerator is zero and denominator non-zero', () => {
      expect(isProperFraction(0, 1)).toBe(true);
      expect(isProperFraction(0, -5)).toBe(true);
    });

    test('should return false when denominator is zero', () => {
      expect(isProperFraction(1, 0)).toBe(false);
      expect(isProperFraction(0, 0)).toBe(false);
      expect(isProperFraction(-5, 0)).toBe(false);
    });
  });

  // Test 5: Non-integer inputs
  describe('non-integer inputs', () => {
    test('should return false when numerator is not an integer', () => {
      expect(isProperFraction(1.5, 2)).toBe(false);
      expect(isProperFraction(1.1, 3)).toBe(false);
    });

    test('should return false when denominator is not an integer', () => {
      expect(isProperFraction(1, 2.5)).toBe(false);
      expect(isProperFraction(3, 4.2)).toBe(false);
    });

    test('should return false when both are not integers', () => {
      expect(isProperFraction(1.5, 2.5)).toBe(false);
      expect(isProperFraction(3.14, 1.5)).toBe(false);
    });
  });

  // Test 6: Large numbers
  describe('large numbers', () => {
    test('should handle large proper fractions', () => {
      expect(isProperFraction(100, 101)).toBe(true);
      expect(isProperFraction(1000, 1001)).toBe(true);
      expect(isProperFraction(999999, 1000000)).toBe(true);
    });

    test('should handle large improper fractions', () => {
      expect(isProperFraction(1000, 999)).toBe(false);
      expect(isProperFraction(1000000, 999999)).toBe(false);
    });
  });

  // Test 7: Edge cases with negative large numbers
  describe('negative large numbers', () => {
    test('should handle negative large proper fractions', () => {
      expect(isProperFraction(-100, 101)).toBe(true);
      expect(isProperFraction(100, -101)).toBe(true);
      expect(isProperFraction(-1000, -1001)).toBe(true);
    });

    test('should handle negative large improper fractions', () => {
      expect(isProperFraction(-101, 100)).toBe(false);
      expect(isProperFraction(101, -100)).toBe(false);
      expect(isProperFraction(-1001, -1000)).toBe(false);
    });
  });

  // Test 8: Special cases with Number.MIN_SAFE_INTEGER and MAX_SAFE_INTEGER
  describe('edge integer values', () => {
    test('should handle minimum and maximum safe integers', () => {
      expect(isProperFraction(Number.MAX_SAFE_INTEGER - 1, Number.MAX_SAFE_INTEGER)).toBe(true);
      expect(isProperFraction(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER - 1)).toBe(false);
      expect(isProperFraction(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(false);
    });
  });
});

