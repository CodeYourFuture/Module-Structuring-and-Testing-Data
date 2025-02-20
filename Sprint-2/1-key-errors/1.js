// Predict and explain first...

// Why will an error occur when this program runs?
// =============> decimalNumber is declared twice, once as a parameter and once as a variable.
// =============> console.log(decimalNumber); should be console.log(convertToPercentage(0.5));

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> SyntaxError: Identifier 'decimalNumber' has already been declared
// =============> this error because the variable decimalNumber was declared twice.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
const decimalNumber = 0.5;
console.log(convertToPercentage(decimalNumber));