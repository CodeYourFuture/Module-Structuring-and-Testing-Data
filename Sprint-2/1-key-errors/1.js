// Predict and explain first...

// =============> Prediction:
// The code will throw an error because the variable `decimalNumber` is being redeclared
// with `const` inside the function, which is not allowed. 

// Try playing computer with the example to work out what is going on

/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/

// =============> Explanation:
// SyntaxError: Identifier 'decimalNumber' has already been declared
// The error occurs because the variable `decimalNumber` is declared twice in the same scope.

// Finally, correct the code to fix the problem
// =============> Solution:
// Remove the `const` keyword from the second declaration of `decimalNumber` inside the function.
// =============> Corrected Code:

function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5; // Remove const to avoid redeclaration
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5)); // Output: "50%" 
