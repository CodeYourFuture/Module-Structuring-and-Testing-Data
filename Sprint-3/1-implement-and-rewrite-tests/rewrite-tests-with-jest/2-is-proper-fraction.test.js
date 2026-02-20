/**
// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  // A proper fraction is defined as a fraction where the absolute value of the numerator
  // is less than the absolute value of the denominator, and the denominator is not zero.
  // Additionally, both numerator and denominator must be non-zero (zero numerator is acceptable
  // as 0/5 = 0, which is less than 1, but we need to check definition)

  // Check for invalid denominator (zero)
  if (denominator === 0) {
    return false;
  }

  // Get absolute values for comparison
  const absNumerator = Math.abs(numerator);
  const absDenominator = Math.abs(denominator);

  // A proper fraction has |numerator| < |denominator|
  // Note: 0/5 is considered a proper fraction as 0 < 5
  // Negative numbers are also considered: -2/3 is proper because |-2| < |3|
  return absNumerator < absDenominator;
}

// The line below allows us to load the isProperFraction function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = isProperFraction;

// Here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Write tests to cover all cases.
console.log("Running tests for isProperFraction function...\n");

// Test 1: Basic proper fractions with positive numbers
console.log("Testing proper fractions with positive numbers:");
assertEquals(isProperFraction(1, 2), true);      // 1/2 is proper
assertEquals(isProperFraction(3, 4), true);      // 3/4 is proper
assertEquals(isProperFraction(5, 8), true);      // 5/8 is proper
assertEquals(isProperFraction(1, 100), true);    // 1/100 is proper

// Test 2: Fractions that are NOT proper (numerator >= denominator)
console.log("\nTesting improper fractions with positive numbers:");
assertEquals(isProperFraction(2, 2), false);     // 2/2 = 1 (equal)
assertEquals(isProperFraction(3, 2), false);     // 3/2 > 1
assertEquals(isProperFraction(5, 3), false);     // 5/3 > 1
assertEquals(isProperFraction(10, 1), false);    // 10/1 > 1

// Test 3: Fractions with zero numerator
console.log("\nTesting fractions with zero numerator:");
assertEquals(isProperFraction(0, 5), true);      // 0/5 = 0 (proper)
assertEquals(isProperFraction(0, 1), true);      // 0/1 = 0 (proper)
assertEquals(isProperFraction(0, 100), true);    // 0/100 = 0 (proper)

// Test 4: Fractions with negative numerator
console.log("\nTesting fractions with negative numerator:");
assertEquals(isProperFraction(-1, 2), true);     // |-1| < |2| -> proper
assertEquals(isProperFraction(-3, 4), true);     // |-3| < |4| -> proper
assertEquals(isProperFraction(-5, 3), false);    // |-5| > |3| -> improper
assertEquals(isProperFraction(-2, 2), false);    // |-2| = |2| -> improper

// Test 5: Fractions with negative denominator
console.log("\nTesting fractions with negative denominator:");
assertEquals(isProperFraction(1, -2), true);     // |1| < |-2| -> proper
assertEquals(isProperFraction(3, -4), true);     // |3| < |-4| -> proper
assertEquals(isProperFraction(5, -3), false);    // |5| > |-3| -> improper
assertEquals(isProperFraction(2, -2), false);    // |2| = |-2| -> improper

// Test 6: Fractions with both numerator and denominator negative
console.log("\nTesting fractions with both numbers negative:");
assertEquals(isProperFraction(-1, -2), true);    // |-1| < |-2| -> proper
assertEquals(isProperFraction(-3, -4), true);    // |-3| < |-4| -> proper
assertEquals(isProperFraction(-5, -3), false);   // |-5| > |-3| -> improper
assertEquals(isProperFraction(-2, -2), false);   // |-2| = |-2| -> improper

// Test 7: Fractions with numerator zero and negative denominator
console.log("\nTesting fractions with zero numerator and negative denominator:");
assertEquals(isProperFraction(0, -5), true);     // |0| < |-5| -> proper
assertEquals(isProperFraction(0, -1), true);     // |0| < |-1| -> proper

// Test 8: Edge cases with denominator zero
console.log("\nTesting denominator equals zero:");
assertEquals(isProperFraction(1, 0), false);     // Denominator zero -> invalid
assertEquals(isProperFraction(0, 0), false);     // Both zero -> invalid
assertEquals(isProperFraction(-5, 0), false);    // Denominator zero -> invalid

// Test 9: Fractions with large numbers
console.log("\nTesting with large numbers:");
assertEquals(isProperFraction(1000, 1001), true);   // 1000/1001 is proper
assertEquals(isProperFraction(1000, 1000), false);  // Equal -> improper
assertEquals(isProperFraction(1001, 1000), false);  // Numerator larger -> improper

console.log("\nAll tests completed!");
*
*/

// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// Write tests in Jest syntax to cover all combinations

describe('isProperFraction function', () => {

  describe('Proper fractions with positive numbers', () => {
    test('should return true when numerator < denominator', () => {
      expect(isProperFraction(1, 2)).toBe(true);
      expect(isProperFraction(3, 4)).toBe(true);
      expect(isProperFraction(5, 8)).toBe(true);
      expect(isProperFraction(1, 100)).toBe(true);
    });
  });

  describe('Improper fractions with positive numbers', () => {
    test('should return false when numerator >= denominator', () => {
      expect(isProperFraction(2, 2)).toBe(false);  // Equal
      expect(isProperFraction(3, 2)).toBe(false);  // Numerator larger
      expect(isProperFraction(5, 3)).toBe(false);  // Numerator larger
      expect(isProperFraction(10, 1)).toBe(false); // Numerator larger
    });
  });

  describe('Fractions with zero numerator', () => {
    test('should return true when numerator is zero and denominator non-zero', () => {
      expect(isProperFraction(0, 5)).toBe(true);
      expect(isProperFraction(0, 1)).toBe(true);
      expect(isProperFraction(0, 100)).toBe(true);
    });
  });

  describe('Fractions with negative numerator', () => {
    test('should compare absolute values when numerator is negative', () => {
      expect(isProperFraction(-1, 2)).toBe(true);   // |-1| < |2|
      expect(isProperFraction(-3, 4)).toBe(true);   // |-3| < |4|
      expect(isProperFraction(-5, 3)).toBe(false);  // |-5| > |3|
      expect(isProperFraction(-2, 2)).toBe(false);  // |-2| = |2|
    });
  });

  describe('Fractions with negative denominator', () => {
    test('should compare absolute values when denominator is negative', () => {
      expect(isProperFraction(1, -2)).toBe(true);   // |1| < |-2|
      expect(isProperFraction(3, -4)).toBe(true);   // |3| < |-4|
      expect(isProperFraction(5, -3)).toBe(false);  // |5| > |-3|
      expect(isProperFraction(2, -2)).toBe(false);  // |2| = |-2|
    });
  });

  describe('Fractions with both numbers negative', () => {
    test('should compare absolute values when both are negative', () => {
      expect(isProperFraction(-1, -2)).toBe(true);  // |-1| < |-2|
      expect(isProperFraction(-3, -4)).toBe(true);  // |-3| < |-4|
      expect(isProperFraction(-5, -3)).toBe(false); // |-5| > |-3|
      expect(isProperFraction(-2, -2)).toBe(false); // |-2| = |-2|
    });
  });

  describe('Fractions with zero numerator and negative denominator', () => {
    test('should return true for 0/negative denominator', () => {
      expect(isProperFraction(0, -5)).toBe(true);   // |0| < |-5|
      expect(isProperFraction(0, -1)).toBe(true);   // |0| < |-1|
    });
  });

  describe('Denominator equals zero', () => {
    test('should return false when denominator is zero', () => {
      expect(isProperFraction(1, 0)).toBe(false);   // Division by zero
      expect(isProperFraction(0, 0)).toBe(false);   // Both zero
      expect(isProperFraction(-5, 0)).toBe(false);  // Denominator zero
    });
  });

  describe('Large numbers', () => {
    test('should handle large numbers correctly', () => {
      expect(isProperFraction(1000, 1001)).toBe(true);   // Proper
      expect(isProperFraction(1000, 1000)).toBe(false);  // Equal
      expect(isProperFraction(1001, 1000)).toBe(false);  // Improper
    });
  });

});

