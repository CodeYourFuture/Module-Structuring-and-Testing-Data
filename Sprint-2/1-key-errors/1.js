// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// An error such as `decimalNumber is not defined` will occur because `decimalNumber` is not defined in the global scope.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// The first error occurs when attempting to run `console.log(decimalNumber)`, resulting in a `SyntaxError: Identifier 'decimalNumber' has already been declared`.
// This happens because `decimalNumber` is declared twice within the same scope: once as a parameter of the function and again as a constant inside the function.
// The second error is that `decimalNumber` is not defined in the global scope.
// Therefore, trying to log it outside the function will result in a `ReferenceError: decimalNumber is not defined`.
// Instead, the function should use the parameter `decimalNumber` directly without redeclaring it.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
