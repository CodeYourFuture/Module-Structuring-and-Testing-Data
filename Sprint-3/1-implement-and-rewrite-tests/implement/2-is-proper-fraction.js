// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    return false;
  } else if (Math.abs(numerator) < Math.abs(denominator)) {
    return true;
  } else return false;
}
module.exports = isProperFraction;

// Here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// TODO: Write tests to cover all cases.

// numerator < denominator (in absolute value) → proper fraction
assertEquals(isProperFraction(1, 2), true);
assertEquals(isProperFraction(8, 9), true);
assertEquals(isProperFraction(0, 5), true); // numerator = 0

// numerator > denominator (in absolute value) → improper fraction
assertEquals(isProperFraction(3, 2), false);
assertEquals(isProperFraction(-4, 1), false);

// numerator = denominator (in absolute value) → not a proper fraction
assertEquals(isProperFraction(5, 5), false);
assertEquals(isProperFraction(-7, -7), false);

// denominator = 0 → invalid fraction
assertEquals(isProperFraction(1, 0), false);
assertEquals(isProperFraction(0, 0), false);

// negative numbers still follow the rule: numerator < denominator (in absolute value)
assertEquals(isProperFraction(2, -4), true);
assertEquals(isProperFraction(-2, -5), true);
