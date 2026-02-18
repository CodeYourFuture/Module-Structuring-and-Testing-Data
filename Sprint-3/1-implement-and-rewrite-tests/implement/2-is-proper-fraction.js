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
    return false; // not a valid fraction
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

// Example: 3/5 is a postive proper fraction
const properFraction = isProperFraction(3, 5);
assertEquals(properFraction, true);

// Example: 0/4 is a proper fraction with zero numerator
// Zero numerator is allowed in proper fractions
const zeroNumerator = isProperFraction(0, 4);
assertEquals(zeroNumerator, true);

// Example: 7/7 is an improper fraction,
// numerator equals denominator
const equalFraction = isProperFraction(7, 7);
assertEquals(equalFraction, false);

// Example: 8/3 is an improper fraction,
// numerator is larger
const numeratorLarger = isProperFraction(8, 3);
assertEquals(numeratorLarger, false);

// Example: 5/0 is an invalid fraction
// Division by zero is not a valid fraction
const zeroDenominator = isProperFraction(5, 0);
assertEquals(zeroDenominator, false);

// Example: 2/-6 is an invalid fraction
// Negative denominator makes fraction invalid
const negativeDenominator = isProperFraction(2, -6);
assertEquals(negativeDenominator, false);

// Example: -1/4 is an invalid fraction
// Negative numerator makes fraction negative
const negativeNumerator = isProperFraction(-1, 4);
assertEquals(negativeNumerator, false);

// Example: 1/100 is a positive fraction
// Small numerator with large denominator
const smallFraction = isProperFraction(1, 100);
assertEquals(smallFraction, true);