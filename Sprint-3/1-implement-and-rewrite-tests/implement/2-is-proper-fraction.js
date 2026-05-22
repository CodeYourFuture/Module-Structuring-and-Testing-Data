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
  // a denominator of 0 is not a proper fraction - it is invalid. divison by 0 undefined.
  if (denominator === 0) return false;
  // Maths.abs handles negative numbers, -> e.g. -1/2 is a proper fraction, but 1/-2 is not.
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

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?
// Using inline style as the result doesn't need to be stored,
// we only need to check if it equals the expected value

// Example: 1/2 is a proper fraction
assertEquals(isProperFraction(1, 2), true);

// Proper fractions: numerator smaller than denominator
assertEquals(isProperFraction(3, 4), true); // normal proper fraction
assertEquals(isProperFraction(-1, 2), true); // negative numerator - still proper
assertEquals(isProperFraction(0, 5), true); // zero numerator - 0/5 = 0, which is proper

// Improper fractions: numerator greater than or equal to denominator
assertEquals(isProperFraction(2, 1), false); // numerator bigger than denominator
assertEquals(isProperFraction(5, 3), false); // normal improper fraction
assertEquals(isProperFraction(4, 4), false); // boundary: equal - 4/4 = 1, a whole number not proper

// Invalid: zero denominator - division by zero is undefined
assertEquals(isProperFraction(1, 0), false);

