// Predict and explain first...
//
// Why will an error occur when this program runs?
// ==============> This will throw a SyntaxError because decimalNumber is already declared as the function's parameter, and line 9 tries to redeclare it with const.

// Try playing computer with the example to work out what will happen

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));

// ==============> The error is "SyntaxError: Identifier 'decimalNumber' has already been declared". It happens for the same reason as before - you can't redeclare a variable with the same name as an existing function parameter using const.

// Finally, correct the code to fix the problem
// ==============> function convertToPercentage(decimalNumber) {
//   const percentage = ${decimalNumber * 100}%;
//   return percentage;
// }
// console.log(convertToPercentage(0.5));

