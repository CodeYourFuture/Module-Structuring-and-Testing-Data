function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here
}
function isProperFraction(numerator, denominator) {
  if (denominator === 0) return false; // Can't divide by zero
  return Math.abs(numerator) < Math.abs(denominator);
}


// here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.
assertEquals(isProperFraction(2, 3), true); // ✅ should pass

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.
assertEquals(isProperFraction(5, 2), false); // ✅ should pass

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
assertEquals(equalFraction, false);
// ====> complete with your assertion

// Stretch:
// What other scenarios could you test for?
// Zero Numerator check:
// Input: numerator = 0, denominator = 5
// target output: true
// Explanation: The fraction 0/5 is a proper fraction because the numerator is zero,
// which is less than the denominator. The function should return true.
const zeroNumerator = isProperFraction(0, 5);
assertEquals(zeroNumerator, true); // ✅ should pass

module.exports = isProperFraction;