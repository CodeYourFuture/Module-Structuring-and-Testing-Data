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

// Proper fractions
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(2, 3), true);
assertEquals(isProperFraction(7, 10), true);

// Improper fractions
assertEquals(isProperFraction(3, 2), false);
assertEquals(isProperFraction(5, 5), false);

// Negative fractions (still proper)
assertEquals(isProperFraction(-1, 2), true);
assertEquals(isProperFraction(1, -2), true);
assertEquals(isProperFraction(-3, -4), true);

// Zero cases
assertEquals(isProperFraction(0, 2), true);
assertEquals(isProperFraction(1, 0), false);