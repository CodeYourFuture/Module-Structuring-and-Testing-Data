// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
  // ensure that the both inputs are evaluated to positive numbers by using Math.abs(), eg -4 returns 4, 4 returns 4, and 0 returns 0
  if (Math.abs(numerator) < Math.abs(denominator)) return true;
  return false; //if the inputs don't satisfy the expression it returns false
}

// here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Acceptance criteria:

// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.
// const properFraction = isProperFraction(2, 3);
// assertEquals(properFraction, true);

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.
// const improperFraction = isProperFraction(5, 2);
// assertEquals(improperFraction, false);

// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.
// const negativeFraction = isProperFraction(-4, 7);
// assertEquals(negativeFraction, true);

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
// const equalFraction = isProperFraction(3, 3);
// assertEquals(equalFraction, false);

// Stretch:
// What other scenarios could you test for?

/* 
Using an array to make code DRY and easier to review, using the format [numerator, denominator, expected] that will be used in the updated helper function
*/
const testCases = [
  // original tests from earlier in file
  [2, 3, true],
  [5, 2, false],
  [-4, 7, true],
  [3, 3, false],

  // additional tests
  [1, 0, false], //zero denominator input
  ["2", "3", true], //string inputs
  [2.5, 3.1, true], //decimal number inputs
  [true, false, false], //boolean inputs
  [null, 3, true], //null numerator input, (N.B. Math.abs(null) is 0, therefore this is the equivalent of evaluating to [0, 3, true])
  [2, null, false], //null denominator input, (N.B. Math.abs(null) is 0, therefore this is the equivalent of evaluating to [2, 0, false])
  [NaN, 3, false], //Nan numerator input
  [2, NaN, false], //Nan denominator input
  [undefined, 3, false], //undefined numerator input
  [2, undefined, false], //undefined denominator input
];

// adjust helper function to loop through the array values, and assigns the array values to numerator, denominator, expected, eg, [2, 3, True].
for (const [numerator, denominator, expected] of testCases) {
  const result = isProperFraction(numerator, denominator);
  assertEquals(result, expected);
}
