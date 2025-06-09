// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
// A proper fraction has an absolute numerator less than denominator
if (Math.abs(numerator) < denominator) return true;
return false;
}

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
// Proper Fraction check
// Input: 2/3 → Output: true
const properFraction = isProperFraction(2, 3);
assertEquals(properFraction, true);

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.
// Improper Fraction check
// Input: 5/2 → Output: false
const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false);

// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.
// Negative Fraction check
// Input: -4/7 → Output: true
assertEquals(negativeFraction, true);

// ====> complete with your assertion

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
// Equal Numerator and Denominator check
// Input: 3/3 → Output: false
assertEquals(equalFraction, false);

// ====> complete with your assertion

// Stretch:
// What other scenarios could you test for?
// Zero numerator
assertEquals(isProperFraction(0, 5), true);

// Negative denominator (not common, but worth testing)
assertEquals(isProperFraction(4, -5), false);

// Very large numbers
assertEquals(isProperFraction(1000000, 2000000), true);
