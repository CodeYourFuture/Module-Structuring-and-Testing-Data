function isProperFraction(numerator, denominator) {
  if (denominator === 0) throw new Error("Denominator cannot be zero.");
  return Math.abs(numerator) < Math.abs(denominator);
}

// here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Proper Fraction check:
const properFraction = isProperFraction(2, 3);
assertEquals(properFraction, true);

// Improper Fraction check:
const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false);

// Negative Fraction check:
const negativeFraction = isProperFraction(-4, 7);
assertEquals(negativeFraction, true);

// Equal Numerator and Denominator check:
const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false);

// Negative Denominator check:
const negativeDenominator = isProperFraction(0, -3);
assertEquals(negativeDenominator, true);




module.exports = isProperFraction;