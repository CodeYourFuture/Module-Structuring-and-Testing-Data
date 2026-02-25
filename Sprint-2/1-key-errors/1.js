// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// It will crash for two reasons. 1. Trying to log a local variable 'decimalNumber' outside its function. 2. Trying to re-declare the parameter 'decimalNumber' using 'const' inside the function.
// Try playing computer with the example to work out what is going on
/* Commented out broken code:
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/
// =============> write your explanation here
// 'decimalNumber' is scoped to the function, so console.log outside can't see it (ReferenceError). Inside, re-declaring the parameter with 'const' causes a SyntaxError. Also, the function was never actually called.
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}
console.log(convertToPercentage(0.5));