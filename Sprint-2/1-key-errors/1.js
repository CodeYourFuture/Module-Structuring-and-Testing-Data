// Predict and explain first...
// The code will throw an error because the variable 'decimalNumber' is being redeclared with 'const' inside the function,
// which is not allowed since 'decimalNumber' is already defined as a parameter of the function.


// Why will an error occur when this program runs?
// =============> write your prediction here
// The code will throw an error because the variable 'decimalNumber' is being redeclared with 'const' inside the function,
// which is not allowed since 'decimalNumber' is already defined as a parameter of the function.

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);*/

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
// The error message indicates that 'decimalNumber' has already been declared, which is true because 'decimalNumber' is
// both a parameter of the function and being redeclared with 'const' inside the function. To fix this, we can simply remove
