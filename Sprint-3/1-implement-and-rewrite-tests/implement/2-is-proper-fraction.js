// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
  if (Math.abs(numerator) < Math.abs(denominator)) {
    return true;
  }
  if (numerator >= denominator) {
    return false;
  }
  if(numerator == 0 && denominator !== 0){
    return true;
  }
  if (denominator === 0) {
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
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.
const negativeFraction = isProperFraction(-4, 7);
// ====> complete with your assertion
assertEquals(negativeFraction, true);
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
// target output: true
// Explanation: The fraction 0/5 is a proper fraction because the numerator (0) is less than the denominator (5). The function should return true.
const zeroNumerator = isProperFraction(0, 5);
// ====> complete with your assertion
assertEquals(zeroNumerator, true);
// Zero Denominator check:
// Input: numerator = 4, denominator = 0 
// target output: false
// Explanation: The fraction 4/0 is undefined because division by zero is not allowed. The function should return false.
const zeroDenominator = isProperFraction(4, 0);
// ====> complete with your assertion
assertEquals(zeroDenominator, false);
// Negative Denominator check:
// Input: numerator = 3, denominator = -5
// target output: true
// Explanation: The fraction 3/-5 is a proper fraction because the absolute value of the numerator (3) is less than the absolute value of the denominator (5). The function should return true.
const negativeDenominator = isProperFraction(3, -5);
// ====> complete with your assertion
assertEquals(negativeDenominator, true);
// Both Negative check:
// Input: numerator = -2, denominator = -6
// target output: true
// Explanation: The fraction -2/-6 is a proper fraction because the absolute value of the numerator (2) is less than the absolute value of the denominator (6). The function should return true.
const bothNegative = isProperFraction(-2, -6);
// ====> complete with your assertion
assertEquals(bothNegative, true);
// Zero Numerator and Denominator check:
// Input: numerator = 0, denominator = 0
// target output: false
// Explanation: The fraction 0/0 is undefined. The function should return false.
const zeroNumeratorDenominator = isProperFraction(0, 0);
// ====> complete with your assertion
assertEquals(zeroNumeratorDenominator, false);    
