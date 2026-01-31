// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// My prediction of the error is that nothing will be displayed because console.log isn't calling a function
// it is just calling a variable that is not defined in this scope.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// The error occurs because the variable 'decimalNumber' is the parameter of the function
// but it is being re-declared inside the function which causes a conflict.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
