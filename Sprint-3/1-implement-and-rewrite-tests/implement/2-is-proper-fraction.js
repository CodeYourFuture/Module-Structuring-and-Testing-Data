// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
   //if numerator or denominator is not an integer, it is not a proper
  if (!Number.isInteger(numerator) || !Number.isInteger(denominator)) {
    return false;
  }
  // if absolute numerator is strictly equal to zero or absolute denominator, it is not a proper fraction
  if (Math.abs(numerator) === 0 || Math.abs(denominator) === 0) {
    return false;
  }
  // if absolute numerator is strictly equals to absolute, it is not a proper fraction
  else if (Math.abs(numerator) === Math.abs(denominator)) {
    return false;
  }
  
  // if absolute Numerator is greater than zero and smaller than absolute denominator, it is a proper fraction
  else if (Math.abs(numerator) < Math.abs(denominator)) {
    return true;
  }
  
  // All other cases are not proper fractions
  else {
    return false;
  }
 
}


// The line below allows us to load the isProperFraction function into tests in other files.
// This will be useful in the "rewrite tests with jest" step
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
// Target output: false
// Explanation: A fraction with numerator 0 is not considered a proper fraction.
const zeroNumerator = isProperFraction(0, 5);
assertEquals(zeroNumerator, false);

// Negative Denominator check:
// Input: numerator = 3, denominator = -5
// Target output: false
// Explanation: Denominator must be positive for a proper fraction.
const negativeDenominator = isProperFraction(3, -5);
assertEquals(negativeDenominator, true);

// Both Negative check:
// Input: numerator = -2, denominator = -3
// Target output: false
// Explanation: Proper fractions must have positive numerator and denominator.
const bothNegative = isProperFraction(-2, -3);
assertEquals(bothNegative, true);

// Zero Denominator check:
// Input: numerator = 1, denominator = 0
// Target output: false
// Explanation: Division by zero is invalid; fraction cannot be proper.
const zeroDenominator = isProperFraction(1, 0);
assertEquals(zeroDenominator, false);


// Float Numerator check:
// Input: numerator = 2.5, denominator = 3
// Target output: false
// Explanation: Fractions with a non-integer numerator are not considered proper fractions.
const floatNumerator = isProperFraction(2.5, 3);
assertEquals(floatNumerator, false);

// Float Denominator check:
// Input: numerator = 2, denominator = 3.5
// Target output: false
// Explanation: Fractions with a non-integer denominator are invalid and should not be considered proper fractions.
const floatDenominator = isProperFraction(2, 3.5);
assertEquals(floatDenominator, false);

// Both Numerator and Denominator as Floats check:
// Input: numerator = 1.5, denominator = 2.5
// Target output: false
// Explanation: Fractions with both numerator and denominator as floats are invalid and should not be considered proper fractions.
const floatBoth = isProperFraction(1.5, 2.5);
assertEquals(floatBoth, false);

// Large Number check:
// Input: numerator = 99, denominator = 100
// Target output: true
// Explanation: 99/100 is a valid proper fraction, even with large values.
const largeNumbers = isProperFraction(99, 100);
assertEquals(largeNumbers, true);

// Negative Zero check:
// Input: numerator = -0, denominator = 5
// Target output: false
// Explanation: Negative zero is equivalent to zero; not a proper fraction.
const negativeZero = isProperFraction(-0, 5);
assertEquals(negativeZero, false);

// Denominator less than -1 check:
// Input: numerator = 1, denominator = -1
// Target output: false
// Explanation: Equal magnitude makes it improper, regardless of sign.
const negOneDenominator = isProperFraction(1, -1);
assertEquals(negOneDenominator, false);

// Proper Fraction check:
// Input: numerator = 2, denominator = 4
// Target output: true
// Explanation: 2/4 is a proper fraction because the absolute value of the numerator is less than the absolute value of the denominator.
const twoOverFour = isProperFraction(2, 4);
assertEquals(twoOverFour, true);

