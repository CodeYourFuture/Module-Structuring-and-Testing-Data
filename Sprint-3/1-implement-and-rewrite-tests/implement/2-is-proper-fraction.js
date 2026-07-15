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
  if (denominator === 0) {
    return false;
  }
  let fraction = numerator / denominator;
  return Math.abs(fraction) < 1 && fraction !== 0;
}

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

// Example: 1/2 is a proper fraction.
assertEquals(isProperFraction(1, 2), true);

// Example: numerator is 0, not a proper fraction.
assertEquals(isProperFraction(0, 2), false);

// Example: numerator is equal to denominators, not a proper fraction.
assertEquals(isProperFraction(2, 2), false);

// Example: denominator is 0,not a proper fraction.
assertEquals(isProperFraction(5, 0), false);

// Example: numerator is negative,is a proper fraction.
assertEquals(isProperFraction(-1, 2), true);

// Example: denominator is smaller than numerator,not a proper fraction.
assertEquals(isProperFraction(4, -3), false);

// Example: numerator and denominator are both negative values is a proper fraction.
assertEquals(isProperFraction(-5, -6), true);

// Example: negative numerator with smaller value then negative dominator, not a proper fraction.
assertEquals(isProperFraction(-6, -5), false);
