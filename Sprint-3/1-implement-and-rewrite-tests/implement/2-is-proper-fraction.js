
function isProperFraction(numerator, denominator) {
  if (numerator < denominator) {
    return true;
  }
  else {
    return false;
  }
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

// Case 1
// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.
const properFraction = isProperFraction(2, 3);
assertEquals(properFraction, true);

//Case 2
// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.
const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false);

//Case 3
// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.
const negativeFraction = isProperFraction(-4, 7);
assertEquals(negativeFraction, true);
//The function already works for negative numerators, so no changes are needed.

//case 4
// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false);

// Stretch:
// What other scenarios could you test for?
// Case 5
//Negative denominator
const negativeDenominator = isProperFraction(4, -5);
assertEquals(negativeDenominator, true);
// Explanation: The fraction 4/-5 is a proper fraction because the absolute value of the numerator (4) is less than the absolute value of the denominator (5). The function should return true.

// Case 6
//Both numerator and denominator negative
const bothNegative = isProperFraction(-3, -4);
assertEquals(bothNegative, true);
// Explanation: The fraction -3/-4 is a proper fraction because the absolute value of the numerator (3) is less than the absolute value of the denominator (4). The function should return true.

// Case 7
//Zero numerator
const zeroNumerator = isProperFraction(0, 5);
assertEquals(zeroNumerator, true);
// Explanation: The fraction 0/5 is a proper fraction because the numerator (0) is less than the denominator (5). The function should return true.
