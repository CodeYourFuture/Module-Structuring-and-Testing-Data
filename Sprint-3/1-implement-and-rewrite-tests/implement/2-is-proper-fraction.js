(properfraction (// Implement a function isProperFraction,
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
module.exports = isProperFraction;

// The line below allows us to load the isProperFraction function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.

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
//Test
// Proper fraction 
assertEqual(isproperFraction(3,5), true);
assertEual(isProperFraction(4,8), true);
assertEqual(isproperfraction (-1,-2) false);


//Not
assertEqual(isproperFraction(9/7),false);
assertEqual(isproperFracton(13/11),false);

//Edge case
assertEqual(isperoperFractio(0/5),true);


