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
  if (numerator >= denominator || denominator <= 0) return false;
  return false;
}

// here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Assertion failed: ${actualOutput} !== ${targetOutput}. ``Expected ${actualOutput} to equal ${targetOutput}`
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
const zeroNumerator = isProperFraction(0, 5);
assertEquals(zeroNumerator, true); // 0/5 is a proper fraction

const zeroDenominator = isProperFraction(5, 0);
assertEquals(zeroDenominator, false); // 5/0 is not a proper fraction

const negativeDenominator = isProperFraction(3, -4);
assertEquals(negativeDenominator, false); // 3/-4 is not a proper fraction

const negativeFractionBoth = isProperFraction(-3, -4);
assertEquals(negativeFractionBoth, true); // -3/-4 is a proper fraction

const largeNumerator = isProperFraction(1, 1000);
assertEquals(largeNumerator, true); // 1/1000 is a proper fraction

const largeDenominator = isProperFraction(1000, 1);
assertEquals(largeDenominator, false); // 1000/1 is not a proper



[Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/2-is-proper-fraction.js"
Assertion failed: Expected undefined to equal false

[Done] exited with code=0 in 0.859 seconds

[Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/2-is-proper-fraction.js"
Assertion failed: Expected undefined to equal false

[Done] exited with code=0 in 0.054 seconds

[Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/2-is-proper-fraction.js"
Assertion failed: Expected undefined to equal false

[Done] exited with code=0 in 0.052 seconds

[Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/2-is-proper-fraction.js"
Assertion failed: Expected undefined to equal false

[Done] exited with code=0 in 0.054 seconds

[Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/2-is-proper-fraction.js"
Assertion failed: Expected undefined to equal false

[Done] exited with code=0 in 0.053 seconds

[Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/2-is-proper-fraction.js"
Assertion failed: Assertion failed: false !== true. Check your function isProperFraction. You may need to fix your code or the test case. If you think your code is correct, check the test case. If the test case is correct, check your function. Expected false to equal true

[Done] exited with code=0 in 0.035 seconds

