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
// Test 1: Proper Fraction
const test1 = isProperFraction(2, 3);
assertEquals(test1, true);

// Test 2: Improper Fraction
const test2 = isProperFraction(5, 2);
assertEquals(test2, false);

// Test 3: Negative Proper Fraction
const test3 = isProperFraction(-4, 7);
assertEquals(test3, true);

// Test 4: Equal Numerator and Denominator
const test4 = isProperFraction(3, 3);
assertEquals(test4, false);

// Stretch Tests

// Test 5: Zero numerator
const test5 = isProperFraction(0, 5);
assertEquals(test5, true);

// Test 6: Denominator is zero
const test6 = isProperFraction(1, 0);
assertEquals(test6, false);

// Test 7: Negative denominator
const test7 = isProperFraction(3, -5);
assertEquals(test7, true);

// Test 8: Non-number input
const test8 = isProperFraction("a", 5);
assertEquals(test8, false);
