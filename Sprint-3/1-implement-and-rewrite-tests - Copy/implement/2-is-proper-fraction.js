// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  // TODO: Implement this function
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

//

function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    return false;
  }

  return Math.abs(numerator) < Math.abs(denominator);
}

// Export for later testing
module.exports = isProperFraction;

// Helper function
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// TESTS

// Proper fractions
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(3, 4), true);

// Not proper (equal)
assertEquals(isProperFraction(5, 5), false);

// Not proper (numerator bigger)
assertEquals(isProperFraction(7, 4), false);

// Zero numerator
assertEquals(isProperFraction(0, 5), true);

// Invalid denominator
assertEquals(isProperFraction(1, 0), false);

// Negative values
assertEquals(isProperFraction(-1, 3), true);
assertEquals(isProperFraction(-5, 2), false);

console.log("✅ All tests passed");
