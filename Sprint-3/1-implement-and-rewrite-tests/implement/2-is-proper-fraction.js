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
  // A proper fraction is a fraction where the absolute value of the numerator is less than the absolute value of the denominator. Additionally, the denominator cannot be zero. Therefore, we can check if the absolute value of the numerator is less than the absolute value of the denominator and if the denominator is not zero to determine if it is a proper fraction.
  if (denominator === 0) {
    return false; // A fraction cannot have a denominator of zero
  }
  return Math.abs(numerator) < Math.abs(denominator); 
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
// Example: 2/1 is not a proper fraction
assertEquals(isProperFraction(2, 1), false);
// Example: -1/2 is a proper fraction
assertEquals(isProperFraction(-1, 2), true);
// Example: 1/-2 is a proper fraction
assertEquals(isProperFraction(1, -2), true);
// Example: -1/-2 is a proper fraction
assertEquals(isProperFraction(-1, -2), true);
// Example: 0/5 is a proper fraction
assertEquals(isProperFraction(0, 5), true);
// Example: 5/0 is not a proper fraction
assertEquals(isProperFraction(5, 0), false);
// Example: 5/5 is not a proper fraction
assertEquals(isProperFraction(5, 5), false);    

