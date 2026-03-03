/**
 * Original file:
 *
// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  // TODO: Implement this function
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

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

// Example: 1/2 is a proper fraction
assertEquals(isProperFraction(1, 2), true);
*
*/

// Implementation of a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

function isProperFraction(numerator, denominator) {
  // Check if denominator is zero - not a valid fraction
  if (denominator === 0) {
    return false;
  }

  // Check if both numbers are integers
  if (!Number.isInteger(numerator) || !Number.isInteger(denominator)) {
    return false;
  }

  // Check if absolute value of numerator is less than absolute value of denominator
  return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;

// Here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// TODO: Write tests to cover all cases.
console.log("Running tests for isProperFraction...");

// Test 1: Proper fractions with positive numbers
assertEquals(isProperFraction(1, 2), true);     // 1/2 is proper
assertEquals(isProperFraction(3, 4), true);     // 3/4 is proper
assertEquals(isProperFraction(5, 8), true);     // 5/8 is proper
assertEquals(isProperFraction(0, 5), true);     // 0/5 is proper (0 < 5)

// Test 2: Improper fractions with positive numbers
assertEquals(isProperFraction(3, 2), false);    // 3/2 is improper
assertEquals(isProperFraction(4, 3), false);    // 4/3 is improper
assertEquals(isProperFraction(5, 5), false);    // 5/5 is equal, so improper

// Test 3: Fractions with negative numbers
assertEquals(isProperFraction(-1, 2), true);    // |-1| < 2, so proper
assertEquals(isProperFraction(1, -2), true);    // 1 < |-2|, so proper
assertEquals(isProperFraction(-3, -4), true);   // |-3| < |-4|, so proper
assertEquals(isProperFraction(-3, 2), false);   // |-3| > 2, so improper
assertEquals(isProperFraction(3, -2), false);   // 3 > |-2|, so improper
assertEquals(isProperFraction(-4, -3), false);  // |-4| > |-3|, so improper

// Test 4: Edge cases with zero
assertEquals(isProperFraction(0, 1), true);     // 0/1 is proper
assertEquals(isProperFraction(0, -5), true);    // 0/ -5 is proper
assertEquals(isProperFraction(5, 0), false);    // Denominator cannot be zero
assertEquals(isProperFraction(0, 0), false);    // Denominator cannot be zero

// Test 5: Non-integer inputs
assertEquals(isProperFraction(1.5, 2), false);  // Numerator not integer
assertEquals(isProperFraction(1, 2.5), false);  // Denominator not integer
assertEquals(isProperFraction(1.5, 2.5), false); // Both not integers

// Test 6: Large numbers
assertEquals(isProperFraction(100, 101), true);  // 100 < 101
assertEquals(isProperFraction(1000, 999), false); // 1000 > 999
assertEquals(isProperFraction(-100, 101), true);  // |-100| < 101

console.log("Tests completed!");
