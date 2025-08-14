// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero");
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

// Proper Negative Fraction check:
// Input: numerator = 3, denominator = -7
// target output: true
// Explanation: The fraction 3/-7 is a proper fraction, where the numerator is less than the absolute denominator. The function should return true.
const properNegativeFraction = isProperFraction(3, -7);
assertEquals(properFraction, true);

// Equal Negative Numerator and Denominator check:
// Input: numerator = -5, denominator = 5
// target output: false
// Explanation: The fraction -5/5 is not a proper fraction because the absolute numerator is equal to the denominator. The function should return false.
const equalNegativeFraction = isProperFraction(-5, 5);
assertEquals(equalNegativeFraction, false);

// Improper Negative Fraction check:
// Input: numerator = -7, denominator = 4
// target output: false
// Explanation: The fraction -7/4 is an improper fraction, where the absolute numerator is greater than or equal to the denominator. The function should return false.
const improperNegativeFraction = isProperFraction(-7, 4);
assertEquals(improperFraction, false);


