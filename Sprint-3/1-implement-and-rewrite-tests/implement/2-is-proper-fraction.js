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
  if (denominator === 0 || numerator / denominator > 1) {
    return false;
  }
  return true;
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
// Test Cases
// testCases is an array of arrays
// [
//   [numerator, denominator, output]...
// ]
const testCases = [
  [1, 2, true],
  [2, 4, true],
  [3, 6, true],
  [4, 8, true],
  [5, 10, true],
  [2, 0, false],
  [5, 4, false],
  [6, 3, false],
  [8, 4, false],
  [10, 5, false],
];

// loop through each case and assert that the output is correct
for (const [numerator, denominator, expected] of testCases) {
  const actual = isProperFraction(numerator, denominator);
  assertEquals(actual, expected);
}
//
