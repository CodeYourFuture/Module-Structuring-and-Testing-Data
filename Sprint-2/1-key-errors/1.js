// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// In this function declaration, we can see that `decimalNumber` is already a parameter of the function.
// We cannot redeclare the same variable name in the same scope using `const` or `let`.

// When I originally called `console.log(decimalNumber);` outside the function,
// It printed the value `0.5` because `decimalNumber` was declared in the global scope.

// Finally, correct the code to fix the problem
// =============> write your new code here

// Corrected Code:
// To fix the issue, we define the value of `decimalNumber` outside the function and pass it in.
// This ensures the variable exists in the global scope and avoids redeclaring it inside the function.
// We also change the console log to call the function properly.

const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(decimalNumber));  // Output: "50%"
