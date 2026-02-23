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
  if (denominator <= 0) {
    return false;
  }
  if (numerator < denominator && numerator >= 0) {
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

// Example: 3/5 is a proper fraction
assertEquals(isProperFraction(3, 5), true);

// Example: 1/100 is a proper fraction
assertEquals(isProperFraction(1, 100), true);

// Example: 5/2 is not a proper fraction
assertEquals(isProperFraction(5, 2), false);

// Example: 7/7 is an improper fraction
assertEquals(isProperFraction(7, 7), false);

// Example: 8/3 is an improper fraction
assertEquals(isProperFraction(8, 3), false);

// Example: 5/0 is an invalid fraction
assertEquals(isProperFraction(5, 0), false);

// Example: 2/-6 is an invalid fraction
assertEquals(isProperFraction(2, -6), false);

// Example: -1/4 is an invalid fraction
assertEquals(isProperFraction(-1, 4), false);
