// Predict and explain first...
// Why will an error occur when this program runs?
// =============> The error will be a syntax error because the variable decimalNumber has already been declared as a parameter. The console log is trying to access decimalNumber which is not within its scope.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> I got a syntax error that the variable is already declared.

// Finally, correct the code to fix the problem
// =============> write your new code here
// function convertToPercentage(decimalNumber) {
//   const percentage = `${decimalNumber * 100}%`;
//   return percentage;
// }

// console.log(convertToPercentage(0.5));