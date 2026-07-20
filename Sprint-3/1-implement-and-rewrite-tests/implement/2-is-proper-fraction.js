// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: A proper fraction is one where the absolute value of the numerator
// is strictly less than the absolute value of the denominator.

function isProperFraction(numerator, denominator) {
  if (denominator === 0) return false;
  return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Tests covering all cases
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(2, 1), false);   // numerator > denominator
assertEquals(isProperFraction(3, 3), false);   // equal -> not proper
assertEquals(isProperFraction(-1, 2), true);   // negative numerator
assertEquals(isProperFraction(1, -2), true);   // negative denominator
assertEquals(isProperFraction(1, 0), false);   // zero denominator
