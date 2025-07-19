// Implement a function isProperFraction
// Definition:
// A proper fraction is defined as a fraction in the form
//   numerator/denominator 
// where
// - Both numerator and denominator are integers
// - denominator ≠ 0
// - |numerator| < |denominator| (note: |x| denotes the absolute value of x)
//
// Examples of proper fractions, 1/2, -1/2.
// 1/-2 and -1/-2 are also considered proepr fractions because 
// mathematically, 1/-2 is equal to -1/2 and -1/-2 is equal to 1/2.

// Write assertions for your function to check it works in different cases
// The first test and first case is written for you
// Complete the rest of the tests and cases
// Write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
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

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
const equalFraction = isProperFraction(3, 3);
// ====> complete with your assertion

// Stretch:
// What other scenarios could you test for?
