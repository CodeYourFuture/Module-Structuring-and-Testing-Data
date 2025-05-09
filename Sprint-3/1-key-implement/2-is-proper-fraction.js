function isProperFraction(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Invalid input: both numerator and denominator must be numbers");
  }
  if (denominator === 0) {
    throw new Error("Invalid fraction: denominator cannot be zero");
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
assertEquals(negativeFraction, true);

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false);

// Edge Case: Numerator is zero (should always return true)
const zeroNumerator = isProperFraction(0, 5);
assertEquals(zeroNumerator, true);

// Edge Case: Denominator is zero (should throw an error)
try {
  isProperFraction(4, 0);
} catch (error) {
  assertEquals(error.message, "Invalid fraction: denominator cannot be zero");
}

// Edge Case: Non-numeric input (should throw an error)
try {
  isProperFraction("a", 2);
} catch (error) {
  assertEquals(error.message, "Invalid input: both numerator and denominator must be numbers");
}
