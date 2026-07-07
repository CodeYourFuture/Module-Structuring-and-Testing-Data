// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

function isProperFraction(numerator, denominator) {
  // A denominator of 0 is mathematically undefined, so it cannot be a proper fraction.
  if (denominator === 0) {
    return false;
  }

  // A fraction is proper if the absolute value of the numerator 
  // is strictly less than the absolute value of the denominator.
  return Math.abs(numerator) < Math.abs(denominator);
}

// The line below allows us to load the isProperFraction function into tests in other files.
module.exports = isProperFraction;

// Here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// ==========================================
// TEST SUITE
// ==========================================

console.log("Running tests...");

// 1. Standard Proper Fractions (Positive)
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(3, 4), true);
assertEquals(isProperFraction(99, 100), true);

// 2. Standard Improper Fractions (Positive)
assertEquals(isProperFraction(5, 4), false);
assertEquals(isProperFraction(10, 2), false);

// 3. Fraction Equals One (Improper)
assertEquals(isProperFraction(4, 4), false);
assertEquals(isProperFraction(1, 1), false);

// 4. Numerator is Zero (Proper, since |0/d| = 0, which is < 1)
assertEquals(isProperFraction(0, 5), true);

// 5. Handling Negative Numbers 
// (Proper fractions must have an absolute value strictly less than 1)
assertEquals(isProperFraction(-1, 3), true);   // Negative numerator
assertEquals(isProperFraction(1, -3), true);   // Negative denominator
assertEquals(isProperFraction(-1, -3), true);  // Both negative
assertEquals(isProperFraction(-5, 4), false);  // Improper negative fraction
assertEquals(isProperFraction(-4, -4), false); // Equals 1, improper

// 6. Zero Denominator Boundary Case
assertEquals(isProperFraction(5, 0), false);
assertEquals(isProperFraction(0, 0), false);

// 7. Decimal/Floating Point Numbers
assertEquals(isProperFraction(1.5, 3), true);
assertEquals(isProperFraction(4.5, 3), false);

console.log("All tests completed!");