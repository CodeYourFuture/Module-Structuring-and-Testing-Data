// Predict and explain first...
// I predict that the program will throw a ReferenceError when trying to log decimalNumber. 
// The reason for this is that the variable is defined within the function, and therefore, it is not accessible from outside the function.

// Why will an error occur when this program runs?
// 

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// The error occurs because the variable `decimalNumber` is declared inside the function 
// `convertToPercentage`, so it has function scope and cannot be accessed outside.
// Also, there's a naming conflict: `decimalNumber` is both the parameter and a const declared inside the function.
// This causes a SyntaxError due to duplicate declaration in the same scope.
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); // Outputs: "50%"