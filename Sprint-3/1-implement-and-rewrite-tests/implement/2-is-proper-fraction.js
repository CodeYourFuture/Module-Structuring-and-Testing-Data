// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {

  if (numerator < denominator) {
    return true;
   } else {
    return false;
  }
}
  // TODO: Implement this function


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

//test
// Example: 1/2 is a proper fraction
assertEquals(isProperFraction(1, 2), true);
// Proper fractions
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(3, 5), true);

// Not proper fractions
assertEquals(isProperFraction(5, 5), false);
assertEquals(isProperFraction(7, 3), false);

// Edge case
assertEquals(isProperFraction(0, 5), true);
What the function does
