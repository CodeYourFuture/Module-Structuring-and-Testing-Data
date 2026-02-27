// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  // TODO: Implement this function
   // Denominator cannot be zero
  if (denominator === 0) {
    return false;
  }

  return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;


// The line below allows us to load the isProperFraction function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = isProperFraction;

// Here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

// Example: 1/2 is a proper fraction
assertEquals(isProperFraction(1, 2), true);

// 2. Improper fraction
assertEquals(isProperFraction(3, 2), false);

// 3. Equal numerator & denominator
assertEquals(isProperFraction(2, 2), false);

// 4. Negative numerator
assertEquals(isProperFraction(-1, 2), true);

// 5. Negative denominator
assertEquals(isProperFraction(1, -2), true);

// 6. Both negative
assertEquals(isProperFraction(-1, -2), true);

// 7. Zero numerator
assertEquals(isProperFraction(0, 5), true);

// 8. Zero denominator (invalid fraction)
assertEquals(isProperFraction(5, 0), false);

console.log("All tests executed");


