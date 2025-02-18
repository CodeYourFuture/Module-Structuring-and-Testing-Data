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
function isProperFraction(numerator, denominator) {
  if (numerator < denominator) return true; 
}

const properFraction = isProperFraction(2, 3);
assertEquals(properFraction, true);

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.
function isProperFraction(numerator, denominator) {
  if (numerator < denominator) return true; // Proper fraction
  return false; // Improper fraction
}

// **Test Case 1**: Proper Fraction (numerator < denominator)
const properFraction = isProperFraction(2, 3);
assertEquals(properFraction, true); // Expected output: true

// **Test Case 2**: Improper Fraction (numerator >= denominator)
const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false); // Expected output: false


// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.
function isProperFraction(numerator, denominator) {
  if (Math.abs(numerator) < Math.abs(denominator)) return true; // Proper fraction
  return false; // Improper fraction
}

// **Test Case 1**: Proper Fraction (numerator < denominator)
const properFraction = isProperFraction(2, 3);
assertEquals(properFraction, true); // Expected output: true

// **Test Case 2**: Improper Fraction (numerator >= denominator)
const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false); // Expected output: false

// **Test Case 3**: Negative Proper Fraction
const negativeFraction = isProperFraction(-4, 7);
assertEquals(negativeFraction, true); // Expected output: true


// ====> complete with your assertion

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
const equalFraction = isProperFraction(3, 3);
// ====> complete with your assertion
function isProperFraction(numerator, denominator) {
  if (Math.abs(numerator) < Math.abs(denominator)) return true; // Proper fraction
  return false; // Improper fraction
}

const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false); // Expected output: false


// Stretch:
// What other scenarios could you test for?
//Zero numerator (e.g., 0/5) is a proper fraction.
//Zero denominator is invalid.
function isProperFraction(numerator, denominator) {
  if (denominator === 0) return "Invalid"; // Division by zero
  if (Math.abs(numerator) < Math.abs(denominator)) return true; // Proper fraction
  return false; // Improper fraction
}
const zeroNumerator = isProperFraction(0, 5);
assertEquals(zeroNumerator, true); 

const zeroDenominator = isProperFraction(4, 0);
assertEquals(zeroDenominator, "Invalid");

