// Implement a function isProperFraction.
// When given two numbers, a numerator and a denominator, it should return true
// if the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Definition:
// A proper fraction is a fraction where:
// - the denominator is not zero
// - both numbers are non-negative
// - the numerator is smaller than the denominator

// Acceptance criteria:
// After implementing the function, write tests to cover all cases
// and run the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  // A fraction with denominator 0 is invalid
  if (denominator === 0) {
    return false;
  }

  // Negative values are not allowed
  if (numerator < 0 || denominator < 0) {
    return false;
  }

  // A proper fraction must have numerator smaller than denominator
  if (numerator < denominator) {
    return true;
  }

  // All other cases are not proper fractions
  return false;
}

// The line below allows us to load the isProperFraction function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = isProperFraction;

// Helper function for simple assertions in this file
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Tests to cover different combinations of numerators and denominators

// Example: 1/2 is a proper fraction
assertEquals(isProperFraction(1, 2), true);

// Proper fractions (numerator smaller than denominator)
assertEquals(isProperFraction(3, 5), true);
assertEquals(isProperFraction(2, 7), true);

// Improper fractions (numerator greater than or equal to denominator)
assertEquals(isProperFraction(5, 5), false);
assertEquals(isProperFraction(7, 3), false);

// Negative numbers should return false
assertEquals(isProperFraction(-2, 7), false);
assertEquals(isProperFraction(2, -7), false);

// Zero numerator is allowed if denominator is positive
assertEquals(isProperFraction(0, 5), true);

// Invalid fraction (denominator is zero)
assertEquals(isProperFraction(2, 0), false);
