// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
  return Math.abs(numerator) < denominator;
}

module.exports = isProperFraction;

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Proper Fraction: 2/3 → true
assertEquals(isProperFraction(2, 3), true);

// Improper Fraction: 5/2 → false
assertEquals(isProperFraction(5, 2), false);

// Negative Fraction: -4/7 → true (absolute value < denominator)
assertEquals(isProperFraction(-4, 7), true);

// Equal Numerator and Denominator: 3/3 → false
assertEquals(isProperFraction(3, 3), false);

console.log("✅ All tests passed!");
