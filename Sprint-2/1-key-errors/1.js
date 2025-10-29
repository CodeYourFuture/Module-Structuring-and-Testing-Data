// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// SyntaxError: Cannot redeclare parameter 'decimalNumber' inside function body

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;
//   return percentage;
// }
// console.log(decimalNumber);

// =============> write your explanation here
// SyntaxError: Identifier 'decimalNumber' has already been declared - parameter cannot be redeclared
// Also, console.log(decimalNumber) would cause ReferenceError - variable only exists inside function scope
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}
