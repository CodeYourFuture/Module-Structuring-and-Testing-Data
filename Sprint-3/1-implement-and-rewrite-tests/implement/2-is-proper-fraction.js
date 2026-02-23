// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  return numerator > 0 && denominator > 0 && numerator < denominator;
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

// Proper fractions - should return true
assertEquals(isProperFraction(3, 4), true);
assertEquals(isProperFraction(1, 5), true);
assertEquals(isProperFraction(2, 3), true);
assertEquals(isProperFraction(5, 8), true);
assertEquals(isProperFraction(1, 100), true);

// Improper fractions - should return false
assertEquals(isProperFraction(2, 1), false);
assertEquals(isProperFraction(5, 3), false);
assertEquals(isProperFraction(4, 4), false);
assertEquals(isProperFraction(10, 5), false);
assertEquals(isProperFraction(100, 99), false);

// Edge cases with zero - should return false
assertEquals(isProperFraction(0, 5), false);
assertEquals(isProperFraction(0, 1), false);

// Negative numbers - should return false
assertEquals(isProperFraction(-1, 2), false);
assertEquals(isProperFraction(1, -2), false);
assertEquals(isProperFraction(-1, -2), false);
