// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// A proper fraction is when |numerator| < |denominator|

function isProperFraction(numerator, denominator) {

  // A fraction cannot have denominator 0
  if (denominator === 0) {
    return false;
  }

  // Check if absolute value of numerator is less than denominator
  if (Math.abs(numerator) < Math.abs(denominator)) {
    return true;
  } else {
    return false;
  }
}


module.exports = isProperFraction;

// Helper function for testing
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}


// Tests
// ========================

// Proper fractions
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(3, 4), true);
assertEquals(isProperFraction(-1, 2), true);
assertEquals(isProperFraction(2, -5), true);
assertEquals(isProperFraction(-3, -7), true);

// Not proper (equal values)
assertEquals(isProperFraction(5, 5), false);
assertEquals(isProperFraction(-4, -4), false);

// Not proper (numerator larger)
assertEquals(isProperFraction(7, 3), false);
assertEquals(isProperFraction(-9, 4), false);
assertEquals(isProperFraction(10, -2), false);

// Denominator zero (invalid fraction)
assertEquals(isProperFraction(1, 0), false);
assertEquals(isProperFraction(0, 0), false);

console.log("All tests passed!");
