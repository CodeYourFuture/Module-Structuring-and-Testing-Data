// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  const properFraction = numerator / denominator;
  return properFraction > 0 && properFraction < 1;
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


// TEST CASES
// Normal Scenarios
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(5, 10), true);

// Boundary Values
assertEquals(isProperFraction(0, 5), false);
assertEquals(isProperFraction(1, 1), false);

// Improper Fraction
assertEquals(isProperFraction(8, 3), false)

// Negative Values
assertEquals(isProperFraction(-3, 8), false);
assertEquals(isProperFraction(-8, -3), false);
assertEquals(isProperFraction(-3, -8), true);

//Very Small
assertEquals(isProperFraction(0.0001, 999999), true);

//Very Large
assertEquals(isProperFraction(999999, 0.0001), false);

