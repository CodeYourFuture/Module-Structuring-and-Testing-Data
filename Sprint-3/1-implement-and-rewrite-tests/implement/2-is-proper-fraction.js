// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

function isProperFraction(numerator, denominator) {
  // A denominator of 0 is mathematically undefined, so it cannot be a proper fraction.
  if (denominator === 0) {
    return false;
  }

  // A fraction is proper if the absolute value of the numerator 
  // is strictly less than the absolute value of the denominator.
  return Math.abs(numerator) < Math.abs(denominator);
}

// The line below allows us to load the isProperFraction function into tests in other files.
module.exports = isProperFraction;

// Here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

