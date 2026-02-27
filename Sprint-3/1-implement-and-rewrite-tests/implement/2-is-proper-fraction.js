/**
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

/** 
 * The code below was written by me, Carlos Abreu
 */

function isProperFraction(numerator, denominator) {
  // Handle division by zero - not a valid fraction
  if (denominator === 0) {
    return false;
  }

  // Check if both numbers are integers
  if (!Number.isInteger(numerator) || !Number.isInteger(denominator)) {
    return false;
  }

  // A proper fraction has |numerator| < |denominator|
  return Math.abs(numerator) < Math.abs(denominator);
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
console.log("Running tests for isProperFraction...");

// Test 1: Proper fractions with positive numbers
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(3, 4), true);
assertEquals(isProperFraction(1, 10), true);
assertEquals(isProperFraction(0, 5), true); // 0/5 = 0, which is a proper fraction

// Test 2: Improper fractions with positive numbers
assertEquals(isProperFraction(2, 1), false);
assertEquals(isProperFraction(5, 3), false);
assertEquals(isProperFraction(10, 10), false); // Equal numbers are not proper

// Test 3: Proper fractions with negative numbers
assertEquals(isProperFraction(-1, 2), true);
assertEquals(isProperFraction(1, -2), true);
assertEquals(isProperFraction(-3, -4), true);

// Test 4: Improper fractions with negative numbers
assertEquals(isProperFraction(-3, 2), false);
assertEquals(isProperFraction(5, -3), false);
assertEquals(isProperFraction(-5, -3), false);

// Test 5: Fractions equal to 1 or -1
assertEquals(isProperFraction(1, 1), false);
assertEquals(isProperFraction(-1, 1), false);
assertEquals(isProperFraction(1, -1), false);

// Test 6: Zero numerator
assertEquals(isProperFraction(0, 1), true);
assertEquals(isProperFraction(0, -5), true);
assertEquals(isProperFraction(0, 0), false); // Denominator zero - invalid

// Test 7: Denominator zero
assertEquals(isProperFraction(5, 0), false);
assertEquals(isProperFraction(-3, 0), false);

// Test 8: Non-integer inputs
assertEquals(isProperFraction(1.5, 2), false);
assertEquals(isProperFraction(1, 2.5), false);
assertEquals(isProperFraction(1.5, 2.5), false);

// Test 9: Large numbers
assertEquals(isProperFraction(1000000, 2000000), true);
assertEquals(isProperFraction(2000000, 1000000), false);

// Test 10: Edge cases with very small/large differences
assertEquals(isProperFraction(999999, 1000000), true);
assertEquals(isProperFraction(1000000, 999999), false);

console.log("All tests completed!");

