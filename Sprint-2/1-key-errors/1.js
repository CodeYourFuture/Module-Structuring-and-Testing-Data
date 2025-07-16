// Predict and explain first...

// Why will an error occur when this program runs?
// =============> Due to the redeclaration of the variable 'decimalNumber' within the function.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> Given that 'decimalNumber' is declared as a parameter, it should not be redeclared with 'const' inside the function. This will lead to a syntax error because you cannot declare a variable with the same name in the same scope.
// =============> console.log(decimalNumber); causes an error because 'decimalNumber' is not defined in the global scope, it is only defined within the function.

// Finally, correct the code to fix the problem
// =============> function convertToPercentage(decimalNumber) {
// =============>   const percentage = `${decimalNumber * 100}%`;
// =============>   return percentage;
// =============> }
// =============> console.log(convertToPercentage(0.5));
