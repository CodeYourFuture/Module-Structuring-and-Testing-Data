// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    return false;
  }

  return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Proper fractions
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(0, 5), true);
assertEquals(isProperFraction(-1, 2), true);
assertEquals(isProperFraction(1, -2), true);
assertEquals(isProperFraction(-1, -2), true);

// Improper fractions
assertEquals(isProperFraction(4, 3), false);
assertEquals(isProperFraction(6, 5), false);
assertEquals(isProperFraction(-4, 3), false);
assertEquals(isProperFraction(4, -3), false);
assertEquals(isProperFraction(-4, -3), false);

// Zero denominator
assertEquals(isProperFraction(5, 0), false);