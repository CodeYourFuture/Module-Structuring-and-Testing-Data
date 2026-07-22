// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, returns true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or infinity).

// Note: If you are unfamiliar with proper fractions, please look it up.

// Acceptance criteria:
// After you have implemented the function, write tests to
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  return Math.abs(numerator) < Math.abs(denominator);
}

// The line below allows us to load the isProperFraction function into other files
// This will be useful in the "rewrite tests with jest" step later
module.exports = isProperFraction;

// Here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should be tested?

// Example: 1/2 is a proper fraction
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(2, 1), false);
assertEquals(isProperFraction(-1, 2), true);
assertEquals(isProperFraction(3, 3), false);

