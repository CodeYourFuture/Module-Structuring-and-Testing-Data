// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  if (numerator === undefined || denominator === undefined)
    return "Incomplete fraction";
  if (typeof numerator !== "number" || typeof denominator !== "number")
    return "Use only numbers";
  if (denominator === 0) return false;

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

// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.
const properFraction = isProperFraction(2, 3);
assertEquals(properFraction, true);

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.
const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false);

// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.
const negativeFraction = isProperFraction(-4, 7);
assertEquals(negativeFraction, true);

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false);
// ====> complete with your assertion

// Stretch:
// What other scenarios could you test for?

// Negative Fraction check:
// Input: numerator = 4, denominator = -7
// target output: true
// Explanation: The fraction 4/-7 is a proper fraction because the  numerator (4) is less than the  absolute value of the denominator (7). The function should return true.
const negativeFraction2 = isProperFraction(4, -7);
assertEquals(negativeFraction2, true);

// Negative Fraction check:
// Input: numerator = -4, denominator = -7
// target output: true
// Explanation: The fraction -4/-7 is a proper fraction because the absolute value of the  numerator (4) is less than the  absolute value of the denominator (7). The function should return true.
const negativeFraction3 = isProperFraction(-4, -7);
assertEquals(negativeFraction3, true);

//Invalid input
//Input:numerator = "q", denominator = 7
// target output: message
//Explanation: the fraction only takes numbers
const notANumber = isProperFraction("q", 7);
assertEquals(notANumber, "Use only numbers");

//Invalid input
//Input:numerator = 7, denominator = "q"
// target output: message
//Explanation: the fraction only takes numbers
const notANumber2 = isProperFraction(7, "q");
assertEquals(notANumber2, "Use only numbers");

//Incomplete input
//Input:2
// target output: message
//Explanation: the fraction needs both a numerator and a denominator
const incompleteFraction = isProperFraction(2);
assertEquals(incompleteFraction, "Incomplete fraction");
