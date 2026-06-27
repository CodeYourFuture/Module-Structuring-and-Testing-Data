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
  if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
    return false;
  }
  return Math.abs(numerator) < Math.abs(denominator);
}

// The line below allows us to load the isProperFraction function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = isProperFraction;

// Here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
// Proper fractions
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(3, 4), true);
assertEquals(isProperFraction(-1, 5), true);
assertEquals(isProperFraction(1, -5), true);

// Improper fractions
assertEquals(isProperFraction(5, 3), false);
assertEquals(isProperFraction(10, 10), false);
assertEquals(isProperFraction(-7, 3), false);

// Zero cases
assertEquals(isProperFraction(0, 5), false);
assertEquals(isProperFraction(3, 0), false);

// NaN cases
assertEquals(isProperFraction(NaN, 5), false);
assertEquals(isProperFraction(3, NaN), false);
assertEquals(isProperFraction(NaN, NaN), false);

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

// Example: 1/2 is a proper fraction
assertEquals(isProperFraction(1, 2), true);
