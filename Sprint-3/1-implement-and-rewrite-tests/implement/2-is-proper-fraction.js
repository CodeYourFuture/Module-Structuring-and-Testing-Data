// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  return Math.abs(numerator) < Math.abs(denominator)
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

//Case 2: 5/5 is not a proper fraction
assertEquals(isProperFraction(5,5), false);

//Case 3: (-3)/(-5) is a proper fraction
assertEquals(isFinite(-3,-5), true);

//Case 4: (-4)/6 is a proper fraction
assertEquals(isProperFraction(-4,6),true);

//case 5: 5/(-8) is a proper fraction
assertEquals(isProperFraction(5,-8), true);

//case 6: 9/7 is not a proper fraction
assertEquals(isProperFraction(9,7), false);

//case 7: 7/0 is not a proper fraction
assertEquals(isProperFraction(7,0), false);

//case 8: 0/6 is a proper fraction
assertEquals(isProperFraction(0,6), true);

//case 9: 0/-8 is a proper fraction
assertEquals(isProperFraction(0,-8), true);