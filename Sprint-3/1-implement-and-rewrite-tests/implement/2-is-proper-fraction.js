// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  if (numerator < denominator) return true;
  else if (numerator > denominator) return false;
  else if (numerator === denominator) return false;
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

// Example: 1/2 is a proper fraction
assertEquals(isProperFraction(1, 2), true);

// Example: 5/2 is not a proper fraction
const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false);

// Example: -4/7 is a proper fraction
const negativeFraction = isProperFraction(-4, 7);
assertEquals(negativeFraction, true);

// Example: 3/3 is not a proper fraction
const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false);

// Example: 4/-7 is a proper fraction
const negativeFraction1 = isProperFraction(4, -7);
assertEquals(negativeFraction1, true);

// Example: -4/-7 is a proper fraction
const negativeFraction2 = isProperFraction(4, 7);
assertEquals(negativeFraction2, true);
