// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// Martin response - an error will occur because the variable decimalNumber is called without being declared in the global scope.  There is also a secondary error in that the parameter for convertToPercentage function is decimalNumber which is re-declared inside the function

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// Martin response - the cause of the error is the parameter for convertToPercentage function is decimalNumber which is re-declared inside the function

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}

console.log(convertToPercentage(0.5));
