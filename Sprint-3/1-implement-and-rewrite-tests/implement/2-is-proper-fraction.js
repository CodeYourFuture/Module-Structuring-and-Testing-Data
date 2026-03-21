// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  return numerator < denominator;
}

// The line below allows us to load the isProperFraction function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.

// Here's our hel per again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
module.exports = isProperFraction;

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

//Test
// Proper fraction
assertEquals(isProperFraction(3, 5), true);
assertEquals(isProperFraction(4, 8), true);
assertEquals(isProperFraction(-1, 2), true);
assertEquals(isProperFraction(-1, -2), true);
assertEquals(isProperFraction(1, -2), true);

//Not
assertEquals(isProperFraction(9, 7), false);
assertEquals(isProperFraction(13, 11), false);
assertEquals(isProperFraction(19, 10), false);
assertEquals(isProperFraction(17, 3), false);

//Edge case
assertEquals(isProperFraction(0, 5), true);
