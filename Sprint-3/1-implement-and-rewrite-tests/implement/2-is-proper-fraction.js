// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
<<<<<<< HEAD:Sprint-3/1-key-implement/2-is-proper-fraction.js
  // Use absolute value of numerator to handle negatives
    if (numerator < denominator) return true;
    return false; // for all other cases
=======
  if (numerator < denominator) {
    return true;
  }
>>>>>>> 8f3d6cf2d1733da02a010f1a16c46b8b5ab4c491:Sprint-3/1-implement-and-rewrite-tests/implement/2-is-proper-fraction.js
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
assertEquals(negativeFraction, true);

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false);

// Stretch:
// What other scenarios could you test for?

// Other scenarios to test could include:

// Cases where the numerator or denominator is zero (e.g., 0/5, 5/0) — 
// especially to check for division by zero or invalid fractions.

// Fractions with negative denominators (e.g., 3/-4) 
// to see if the function handles sign correctly.

// Very large numbers 
// to check if the function works with large integers.

// Non-integer inputs (e.g., decimals or strings) 
// to test input validation (if applicable).