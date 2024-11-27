// You wil need to implement a function isProperFraction
// You need to write assertions for your function to check it works in different cases

function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero");
  }
  return Math.abs(numerator) < denominator;
}

// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator

// Acceptance criteria:

// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.

try {
  const numeratorLessThanDenom = isProperFraction(2, 3);
  console.assert(
    numeratorLessThanDenom === true,
    `Expected true for 2/3, got: ${numeratorLessThanDenom}`
  );
} catch (error) {
  console.error(error.message);
}

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.

try {
  const numeratorGreaterThanDenom = isProperFraction(5, 2);
  console.assert(
    numeratorGreaterThanDenom === false,
    `Expected false for 5/2, got: ${numeratorGreaterThanDenom}`
  );
} catch (error) {
  console.error(error.message);
}

// Zero Denominator check:
// Input: numerator = 3, denominator = 0
// No target output: Error (Denominator cannot be zero)
// Explanation: The function should throw an error when the denominator is zero, as it's not a valid fraction.

try {
  const zeroDenom = isProperFraction(3, 0);
  console.assert(false, `Function accepted invalid denominator 0`);
} catch (error) {
  console.log("✅ Function correctly rejected denominator 0");
}

// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.

try {
  const negativeFraction = isProperFraction(-4, 7);
  console.assert(
    negativeFraction === true,
    `Expected true for -4/7, got: ${negativeFraction}`
  );
} catch (error) {
  console.error(error.message);
}

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.

try {
  const equalNumDenom = isProperFraction(3, 3);
  console.assert(
    equalNumDenom === false,
    `Expected false for 3/3, got: ${equalNumDenom}`
  );
} catch (error) {
  console.error(error.message);
}

// These acceptance criteria cover a range of scenarios to ensure that the isProperFraction function handles both proper and improper fractions correctly and handles potential errors such as a zero denominator.
