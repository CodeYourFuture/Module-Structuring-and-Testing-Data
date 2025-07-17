// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// An error will occur because 'decimalNumber' is redeclared inside the function using 'const',
// which is not allowed. Also, 'decimalNumber' is not defined in the global scope,
// so console.log(decimalNumber) will throw a ReferenceError.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// The error occurs because we cannot redeclare the parameter 'decimalNumber' inside the function
// using 'const'. Also, 'decimalNumber' is not defined outside the function, so
// console.log(decimalNumber) will throw a ReferenceError.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.9)); // Output: 90%
