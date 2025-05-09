// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
    if (!Number.isFinite(numerator) || !Number.isFinite(denominator)) {
        throw new Error("Inputs must be finite numbers.");
    }
    if (denominator === 0) {
        return false;
    }
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

// Zero Numerator check
// Input: numerator = 0, denominator = 5
// target output: true
// Explanation: The fraction 0/5 is a proper fraction since 0 is always less than any positive denominator.
const zeroNumerator = isProperFraction(0, 5);
assertEquals(zeroNumerator, true);


// Large Numerator check
// Input: numerator = 100, denominator = 3
// target output: false
// Explanation: The fraction 100/3 is improper since 100 > 3.
const largeNumerator = isProperFraction(100, 3);
assertEquals(largeNumerator, false);


// Large Negative Numerator check
// Input: numerator = -50, denominator = 7
// target output: false
// Explanation: The absolute value of -50 is 50, which is greater than 7.
const largeNegativeNumerator = isProperFraction(-50, 7);
assertEquals(largeNegativeNumerator, false);

// Negative Denominator check
// Input: numerator = 3, denominator = -4
// target output: true
// Explanation: The fraction 3/-4 is still proper since the absolute value of 3 is less than 4.
const negativeDenominator = isProperFraction(3, -4);
assertEquals(negativeDenominator, true);

// Zero Denominator check (Edge case, should return false or throw an error)
// Input: numerator = 3, denominator = 0
// target output: false (or an error, depending on how you want to handle division by zero)
const zeroDenominator = isProperFraction(3, 0);
assertEquals(zeroDenominator, false);

// Test for decimal values:
// Input: numerator = 3.5, denominator = 7.2
// target output: true
const decimalFraction = isProperFraction(3.5, 7.2);
assertEquals(decimalFraction, true);