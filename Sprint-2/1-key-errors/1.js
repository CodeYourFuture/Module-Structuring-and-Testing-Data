// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Prediction:
// An error will occur because `decimalNumber` is declared twice.
// It is first declared as a function parameter and then declared again
// inside the function using `const decimalNumber = 0.5;`.
// JavaScript does not allow redeclaring the same variable in the same scope.
// Also, `console.log(decimalNumber);` is outside the function,
// so `decimalNumber` is not defined in the global scope.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// Explanation:
// The parameter `decimalNumber` is already defined in the function.
// Declaring `const decimalNumber = 0.5;` again causes a SyntaxError:
// "Identifier 'decimalNumber' has already been declared".
// Additionally, `console.log(decimalNumber);` causes a ReferenceError
// because `decimalNumber` only exists inside the function and
// cannot be accessed outside of it.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const result = convertToPercentage(0.5);
console.log(result); // 50%
