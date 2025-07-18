// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
  if (
    typeof numerator !== "number" ||
    typeof denominator !== "number" ||
    denominator === 0
  ) {
    return false; // invalid input
  }

  const value = numerator / denominator;
  return value > 0 && value < 1;
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

// Test 3: Negative Proper Fraction (should be false!)
const test3 = isProperFraction(-4, 7);
assertEquals(test3, false);

// Test 4: Equal Numerator and Denominator
const test4 = isProperFraction(3, 3);
assertEquals(test4, false);
