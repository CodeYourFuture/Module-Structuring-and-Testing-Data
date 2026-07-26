// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

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

assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(2, 1), false);
assertEquals(isProperFraction(3, 3), false);
assertEquals(isProperFraction(-1, 2), true);
assertEquals(isProperFraction(1, -2), true);
assertEquals(isProperFraction(1, 0), false);
