function isProperFraction(numerator, denominator) {
  return Math.abs(numerator) < Math.abs(denominator);
}

// The line below allows us to load the isProperFraction function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = isProperFraction;

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Positive proper fraction test
assertEquals(isProperFraction(1, 2), true);

// Improper proper fraction test
assertEquals(isProperFraction(3, 2), false);

// Negative proper fraction test
assertEquals(isProperFraction(-1, 2), true);

// Zero numerator test
assertEquals(isProperFraction(0, 2), true);
