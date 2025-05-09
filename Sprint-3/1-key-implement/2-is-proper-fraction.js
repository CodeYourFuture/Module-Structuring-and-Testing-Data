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


function isProperFraction(numerator, denominator) {
  return Math.abs(numerator) < Math.abs(denominator);
}

// Helper function to check if the test passes
function assertEquals(actualOutput, targetOutput) {
console.assert(
  actualOutput === targetOutput,
  `Expected ${actualOutput} to equal ${targetOutput}`
);
}

// ======= TEST CASES =======

// Edge Case 1: Negative Improper Fraction (absolute numerator > denominator)
const negativeImproperFraction = isProperFraction(-8, 5);
assertEquals(negativeImproperFraction, false);

// Edge Case 2: Zero as numerator (should be proper since 0 is always less)
const zeroNumerator = isProperFraction(0, 4);
assertEquals(zeroNumerator, true);

// Edge Case 3: Zero as denominator (should be invalid, possibly return `false`)
const zeroDenominator = isProperFraction(5, 0);
assertEquals(zeroDenominator, false); // Since division by zero is undefined

// Edge Case 4: Large numerator vs denominator (should still be proper)
const largeNumbers = isProperFraction(100, 500);
assertEquals(largeNumbers, true);

// Edge Case 5: Large improper fraction (numerator > denominator)
const largeImproper = isProperFraction(500, 100);
assertEquals(largeImproper, false);

function isProperFraction(numerator, denominator) {
  // Check for invalid denominator (division by zero)
  if (denominator === 0) return false;
  
  // Check if the absolute value of numerator is less than that of the denominator
  return Math.abs(numerator) < Math.abs(denominator);
}
