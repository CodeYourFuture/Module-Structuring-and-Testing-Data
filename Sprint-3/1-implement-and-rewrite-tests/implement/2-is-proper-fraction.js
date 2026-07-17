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
  if (Math.abs(numerator / denominator) < 1) {
      return true;// if numerator is smaller than denominator - return true
  } else {
  return false;//return false if numerator if bigger that denominator
  }
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

// Example: 2/3 is a proper fraction
assertEquals(isProperFraction(2, 3), true);

// Example: 4/2 is not a proper fraction
assertEquals(isProperFraction(4, 2), false);

// Example: 4/4 is not a proper fraction
assertEquals(isProperFraction(4, 4), false);
