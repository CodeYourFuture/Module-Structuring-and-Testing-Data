// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// PREDICTION: There will be a SyntaxError because 'decimalNumber' is declared twice - once as parameter, once as variable

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// Cannot redeclare 'decimalNumber' with 'const' inside function - it's already the parameter name
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));