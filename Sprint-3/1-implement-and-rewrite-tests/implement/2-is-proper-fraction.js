// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
       if (denominator === 0){
        return false;
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

// Example: 1/2 is a proper fraction
assertEquals(isProperFraction(1, 2), true);

// Proper fraction
assertEquals(isProperFraction(2,4), true);

// Improper fraction
assertEquals(isProperFraction(5,3), false);

// Equal numerator & denominator
assertEquals(isProperFraction(5,5), false);

// Negative numbers
assertEquals(isProperFraction(-1,-2), true);

// Zero numerator
assertEquals(isProperFraction(0,5), true);

// Zero denominator (invalid)
assertEquals(isProperFraction(2,0), false);







// What combinations of numerators and denominators should you test?

// Normal proper fractions

// Improper fractions

// Equal numerator & denominator

// Negative numbers

// Zero numerator

// Zero denominator (invalid)


