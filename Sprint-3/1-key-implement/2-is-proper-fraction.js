// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
  return Math.abs(numerator) < Math.abs(denominator);
}

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
assertEquals(negativeFraction, true);
// ====> complete with your assertion

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
const equalFraction = isProperFraction(3, 3);
assertEquals(improperFraction, false);
// ====> complete with your assertion

// Stretch:
// What other scenarios could you test for?

// Zero as the Numerator check:
// Input: numerator = 0, denominator = 5
// target output: true
// Explanation: The fraction 0/5 is a proper fraction because the absolute value of the numerator (0) is always smaller than any positiv number (5). The function should return true.
const zeroAsTheNumeratorFraction = isProperFraction(0, 5);
assertEquals( zeroAsTheNumeratorFraction, true);

// Large Numbers(Edge Case) check:
// Input: numerator = 9999, denominator = 9999
// target output: false
// Explanation: The fraction 9999/9999 is not a proper fraction because the numerator equal to the denominator. the function should return false.
const largeNumbersFraction = isProperFraction(0, 5);
assertEquals( largeNumbersFraction, true);