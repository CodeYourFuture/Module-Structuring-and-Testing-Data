// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
  if (denominator === 0) return false;
  if (numerator === 0) return true;
  if (Math.abs(numerator) < Math.abs(denominator)) return true;
  else {
    return false;
  }
}

// here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    (actualOutput = isProperFraction(2, 3)),
    (targetOutput = true),
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

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    (actualOutput = isProperFraction(5, 2)),
    (targetOutput = false),
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.
const negativeFraction = isProperFraction(-4, 7);
assertEquals(properFraction, true);

// ====> complete with your assertion

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    (actualOutput = isProperFraction(-4, 7)),
    (targetOutput = true),
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
// Negative Fraction check:
// Input: numerator = -14, denominator = 7
// target output: false
// Explanation: The fraction -14/7 is not a proper fraction because the absolute value of the numerator (14) is greater than the denominator (7). The function should return false.

const negativeFraction1 = isProperFraction(-14, 7);
assertEquals(improperFraction, false);

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    (actualOutput = isProperFraction(-14, 7)),
    (targetOutput = false),
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Negative Fraction check:
// Input: numerator = 4, denominator = -7
// target output: true
// Explanation: The fraction 4/-7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.

const negativeFraction2 = isProperFraction(4, -7);
assertEquals(properFraction, true);

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    (actualOutput = isProperFraction(4, -7)),
    (targetOutput = true),
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
const equalFraction = isProperFraction(3, 3);
assertEquals(improperFraction, false);
// ====> complete with your assertion

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    (actualOutput = isProperFraction(3, 3)),
    (targetOutput = false),
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Stretch:
// What other scenarios could you test for?
// Zero Fraction check:
// Input: numerator = 0, denominator = 7
// target output: true
// Explanation: The fraction 0/7 is a proper fraction because the numerator is equal 0. The function should return true.

const zeroFraction = isProperFraction(0, 7);
assertEquals(properFraction, true);

// ====> complete with your assertion

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    (actualOutput = isProperFraction(0, 7)),
    (targetOutput = true),
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Zero Fraction check:
// Input: numerator = 7, denominator = 0
// target output: false
// Explanation: The fraction 7/0 is not a proper fraction because the denominator in fraction can not be equal 0. The function should return false.

const zeroFraction2 = isProperFraction(7, 0);
assertEquals(improperFraction, false);

// ====> complete with your assertion

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    (actualOutput = isProperFraction(7, 0)),
    (targetOutput = false),
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
