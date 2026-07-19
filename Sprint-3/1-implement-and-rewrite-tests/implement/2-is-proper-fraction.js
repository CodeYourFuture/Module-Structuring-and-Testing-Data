// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
    if (Number.isFinite(numerator) && Number.isFinite(denominator)) {
        if(numerator < denominator){
            return true
        }
    } return false
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

// What combinations of numerators and denominators should you test?

// Example: 1/2 is a proper fraction
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(2, 1), false);
assertEquals(isProperFraction(5, 5), false);
assertEquals(isProperFraction(0, 5), true);
assertEquals(isProperFraction(5, 0), false);
assertEquals(isProperFraction(0, 0), false);
assertEquals(isProperFraction(-1, 2), true);
assertEquals(isProperFraction(1, -2), false);
assertEquals(isProperFraction(-2, -1), true);
assertEquals(isProperFraction(-1, -2), false);
assertEquals(isProperFraction(0.5, 1), true);
assertEquals(isProperFraction(1.5, 1), false);
assertEquals(isProperFraction(Infinity, 2), false);
assertEquals(isProperFraction(2, Infinity), false);
assertEquals(isProperFraction(NaN, 2), false);
assertEquals(isProperFraction(2, NaN), false);
assertEquals(isProperFraction(999999999, 1000000000), true);







