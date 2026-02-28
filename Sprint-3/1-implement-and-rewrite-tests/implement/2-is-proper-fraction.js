// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

const properFraction = isProperFraction(2, 3);
assertEquals(properFraction, true);

const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false);

const negativeFraction = isProperFraction(-4, 7);
assertEquals(negativeFraction, true);

const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false);

const zeroNumerator = isProperFraction(0, 5);
assertEquals(zeroNumerator, true);

const zeroDenominator = isProperFraction(5, 0);
assertEquals(zeroDenominator, false);
