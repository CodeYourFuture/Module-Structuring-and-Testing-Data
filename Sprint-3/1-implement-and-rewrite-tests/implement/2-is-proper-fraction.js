// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  // console.log(numerator, denominator);
  // console.log(Math.abs(numerator), Math.abs(denominator));
  if (denominator !== 0 && Math.abs(numerator) < Math.abs(denominator)) {
    return true;
  } else {
    return false;
  }
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

assertEquals(isProperFraction(9, 10), true);

assertEquals(isProperFraction(-6, 8), true);

assertEquals(isProperFraction(-2, -3), true);

assertEquals(isProperFraction(3.5, 6), true);

assertEquals(isProperFraction(4, 4.67), true);

assertEquals(isProperFraction(7, 0), false);

assertEquals(isProperFraction(2, 1), false);

assertEquals(isProperFraction(-9, -3), false);

assertEquals(isProperFraction(-5.68, 0), false);
