// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  if (denominator === 0) return false;
  if (!(denominator % 1 === 0 && numerator % 1 === 0)) return false;
  if (Math.abs(numerator) < Math.abs(denominator)) return true;
  else return false;
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
// definition is |numerator| < |denominator| so negative values need to be tested as well; also 0 for either - wouldn't be a fraction (or a valid fraction if its the den); also when the num = den
// Example: 1/2 is a proper fraction
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(-3, 4), true);
assertEquals(isProperFraction(3, -4), true);
assertEquals(isProperFraction(0, 2), true);

//denominator is 0

assertEquals(isProperFraction(2, 0), false);

//result is a whole number
assertEquals(isProperFraction(-2, 2), false);
assertEquals(isProperFraction(-3, -3), false);
assertEquals(isProperFraction(3, 3), false);

//numerator or denominator is a decimal
assertEquals(isProperFraction(1.2, 3), false);
assertEquals(isProperFraction(1, 1.2), false);

//numerator or denominator is negative
assertEquals(isProperFraction(-4, 5), true);
assertEquals(isProperFraction(-5, 4), false);
