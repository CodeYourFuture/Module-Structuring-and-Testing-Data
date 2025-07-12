// Predict and explain first...

// Why will an error occur when this program runs?
// =============> An error code will occur because 'decimalNumber' has already been declared.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> The original code didn't work because the variable name was reused and the value was printed outside the function.

// Finally, correct the code to fix the problem
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
