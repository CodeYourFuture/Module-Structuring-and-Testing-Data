// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
<<<<<<< HEAD
  if (denominator) {
    return true;
=======
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    return false; // Invalid input types
>>>>>>> 52740052fb0ad97a2c7253a04978b14a15b9e763
  }

  if (denominator === 0) {
    return false; // Division by zero is undefined
  }

  const value = numerator / denominator;
  return Math.abs(value) < 1; // Proper fraction if the value is between -1 and 1
}

module.exports = isProperFraction;


// Acceptance criteria:

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
// ====> complete with your assertion
assertEquals(negativeFraction, true);

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
const equalFraction = isProperFraction(3, 3);
// ====> complete with your assertion
assertEquals(equalFraction, false);

// Stretch:
// What other scenarios could you test for?


// Zero Numerator check:
// Input: numerator = 0, denominator = 5
// target output: true
// Explanation: The fraction 0/5 is a proper fraction because the numerator (0) is less than the denominator (5). The function should return true.
const zeroNumerator = isProperFraction(0, 5);
assertEquals(zeroNumerator, true);

// Negative Denominator check:
// Input: numerator = 2, denominator = -3
// target output: false
// Explanation: The fraction 2/-3 is not a proper fraction because the denominator is negative. The function should return false.
const negativeDenominator = isProperFraction(2, -3);
assertEquals(negativeDenominator, true);

let numerator= 1;
let denominator= 7;
console.log(numerator + "/" + denominator + " check =", isProperFraction(numerator, denominator));
numerator= 5;
denominator= 1;
console.log(numerator + "/" + denominator + " check =", isProperFraction(numerator, denominator));
numerator= -4;
denominator= 9;
console.log(numerator + "/" + denominator + " check =", isProperFraction(numerator, denominator));
numerator= 0;
denominator= 6;
console.log(numerator + "/" + denominator + " check =", isProperFraction(numerator, denominator));   
numerator= 4;
denominator= 4;
console.log(numerator + "/" + denominator + " check =", isProperFraction(numerator, denominator));
numerator= -5;
denominator= 8;
console.log(numerator + "/" + denominator + " check =", isProperFraction(numerator, denominator));
numerator= 4;
denominator= -2;
console.log(numerator + "/" + denominator + " check =", isProperFraction(numerator, denominator));
numerator= -3;
denominator= -7;
console.log(numerator + "/" + denominator + " check =", isProperFraction(numerator, denominator));
