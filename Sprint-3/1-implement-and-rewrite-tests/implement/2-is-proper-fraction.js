function isProperFraction(numerator, denominator) {
  // Return non numeric numerators and denominators as false
  if (typeof numerator != "number" || typeof denominator != "number")
    return false;

  return Math.abs(numerator) < Math.abs(denominator);
}

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
