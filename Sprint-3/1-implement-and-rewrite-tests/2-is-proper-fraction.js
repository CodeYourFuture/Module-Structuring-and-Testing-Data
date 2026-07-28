// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  if (denominator === 0) return false;
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

// Tests covering all cases
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(2, 1), false);    // numerator > denominator
assertEquals(isProperFraction(3, 3), false);    // equal -> not proper
assertEquals(isProperFraction(-1, 2), true);    // negative numerator
assertEquals(isProperFraction(1, -2), true);    // negative denominator
assertEquals(isProperFraction(1, 0), false);    // zero denominator
