// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on
/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/
// =============> write your explanation here
/*
1. Undeclared variables are automatically declared when first used. As a parameter in the 'convertToPercentage' function,
'decimalNumber' is (automatically) already declared. trying to declare it again with 'const' causes a syntax error.
2. Also, the 'console.log(decimalNumber);' line is outside the function, so 'decimalNumber' is not defined in that scope.
3 decimalNumber = 0.5; overwrites the argument supplied, and so to make the function work as intended, this line should be removed, so the function does not ignore its input argument.
*/
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.25)); // This line is inserted only to test the code. It returns "25%"
