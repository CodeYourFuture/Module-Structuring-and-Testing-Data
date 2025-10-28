// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically



function isProperFraction(numerator, denominator) {
  let actualOutput;
  // Denominator must be positive
  if (denominator <= 0) {
    actualOutput = false;
  }
  // Numerator must be positive and smaller than denominator
  else if (numerator > 0 && numerator < denominator) {
    actualOutput = true;
  }
  // All other cases are not proper fractions
  else {
    actualOutput = false;
  }
  return actualOutput;
}

// The line below allows us to load the isProperFraction function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = isProperFraction;

// here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Acceptance criteria:

// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.
const properFraction = isProperFraction(2, 3);
assertEquals(properFraction, true);

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.
const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false);

// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: false
// Explanation: Negative numerator should not count as proper fraction.
const negativeFraction = isProperFraction(-4, 7);
// ====> complete with your assertion
assertEquals(negativeFraction, false);

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
const equalFraction = isProperFraction(3, 3);
// ====> complete with your assertion
assertEquals(equalFraction, false);

// Stretch:
// What other scenarios could you test for?

// Zero Numerator check:
// Input: numerator = 0, denominator = 5
// Target output: false
// Explanation: A fraction with numerator 0 is not considered a proper fraction.
const zeroNumerator = isProperFraction(0, 5);
assertEquals(zeroNumerator, false);

// Negative Denominator check:
// Input: numerator = 3, denominator = -5
// Target output: false
// Explanation: Denominator must be positive for a proper fraction.
const negativeDenominator = isProperFraction(3, -5);
assertEquals(negativeDenominator, false);

// Both Negative check:
// Input: numerator = -2, denominator = -3
// Target output: false
// Explanation: Proper fractions must have positive numerator and denominator.
const bothNegative = isProperFraction(-2, -3);
assertEquals(bothNegative, false);

// Zero Denominator check:
// Input: numerator = 1, denominator = 0
// Target output: false
// Explanation: Division by zero is invalid; fraction cannot be proper.
const zeroDenominator = isProperFraction(1, 0);
assertEquals(zeroDenominator, false);
