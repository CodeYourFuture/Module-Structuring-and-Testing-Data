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

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

// Example: 1/2 is a proper fraction
assertEquals(isProperFraction(1, 2), true);

// Basic non-proper examples
assertEquals(isProperFraction(2, 1), false);

// Negative numerators or denominators should still use absolute values
assertEquals(isProperFraction(-1, 2), true);
assertEquals(isProperFraction(1, -2), true);
assertEquals(isProperFraction(-1, -2), true);

// Zero numerator is a proper fraction when denominator != 0
assertEquals(isProperFraction(0, 5), true);

// Equal magnitude (including signs) is not proper
assertEquals(isProperFraction(5, 5), false);
assertEquals(isProperFraction(-5, 5), false);

// Denominator zero (no division here, but should be considered invalid/proper=false)
assertEquals(isProperFraction(0, 0), false);
assertEquals(isProperFraction(3, 0), false);

// Larger values and decimals
assertEquals(isProperFraction(100, 101), true);
assertEquals(isProperFraction(101, 100), false);
assertEquals(isProperFraction(0.5, 1), true);
assertEquals(isProperFraction(0.9999, 1), true);
assertEquals(isProperFraction(1, 1.0001), true);
