// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  // A fraction with denominator 0 is invalid.
  if (denominator === 0) {
    return false;
  }

  // For this implementation, proper fractions are positive fractions
  // where the numerator is smaller than the denominator.
  if (numerator < 0 || denominator < 0) {
    return false;
  }

  if (numerator < denominator) {
    return true;
  }

  return false;
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

// Proper fractions
assertEquals(isProperFraction(3, 5), true);
assertEquals(isProperFraction(0, 5), true);

// Improper fractions
assertEquals(isProperFraction(5, 5), false);
assertEquals(isProperFraction(7, 3), false);

// Invalid fractions
assertEquals(isProperFraction(2, 0), false);
assertEquals(isProperFraction(-1, 2), false);
assertEquals(isProperFraction(1, -2), false);