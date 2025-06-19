// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    if (numerator > denominator) return false;

    return Math.abs(numerator) < Math.abs(denominator); // Using Maths.abs() to handle negative numbers and zero as a denominator returning undefined
}

// here's our helper again  if (denominator === 0) return false; // invalid fraction
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
assertEquals(negativeFraction, true);

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
const equalNumeratorDenominator = isProperFraction(3, 3);
assertEquals(equalNumeratorDenominator, false);

// Stretch:
// What other scenarios could you test for?

// Mixed number check: 2 3/5
// Input: numerator = 3, denominator = 5
// Target output: true
// Explanation: The fraction 2 3/5 is a proper fraction because we only evaluate to fractional part of the mixed number (3/5), which is a proper fraction as numerator < denominator. The function should return true.
const mixedFraction = isProperFraction(3, 5);
assertEquals(mixedFraction, true);

// Zero denominator check:
// Input: numerator = 4, denominator = 0
// Target output: false
// Explanation: The fraction 4/0 is not a valid fraction because the denominator must be a non-zero number, so in this case a denominator of 0 is undefined as it has no value as an operation. The function should return false.
const zeroDenominator = isProperFraction(4, 0);
assertEquals(zeroDenominator, false);

// Zero numerator check:
// Input: numerator = 0, denominator = 6
// Target output: true
// Explanation: 0/6 is a proper fraction because although the numerator has no value, 0 is < the denominator. The function should return true.
const zeroNumerator = isProperFraction(0, 6);
assertEquals(zeroNumerator, true);

