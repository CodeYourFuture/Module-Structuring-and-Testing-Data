// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    return false;
  }
  return Math.abs(numerator) < Math.abs(denominator);
}

// The line below allows us to load the isProperFraction function into tests in other files.
module.exports = isProperFraction;

// Helper function
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

console.log("Starting tests for isProperFraction...");

// 1. Proper fraction: 1/2
assertEquals(isProperFraction(1, 2), true);

// 2. Improper fraction: numerator greater than denominator
assertEquals(isProperFraction(3, 2), false);

// 3. Improper fraction: numerator equals denominator
assertEquals(isProperFraction(5, 5), false);

// 4. Proper fraction with negative numerator
assertEquals(isProperFraction(-1, 4), true);

// 5. Proper fraction with negative denominator
assertEquals(isProperFraction(2, -5), true);

// 6. Improper fraction with negative numerator
assertEquals(isProperFraction(-7, 3), false);

// 7. Zero numerator — 0/5 is proper because 0 < 5
assertEquals(isProperFraction(0, 5), true);

// 8. Zero denominator — invalid, return false
assertEquals(isProperFraction(1, 0), false);

console.log("All tests completed!");
