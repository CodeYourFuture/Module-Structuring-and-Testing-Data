// Predict and explain first...
// changes decimal numbers to percentage
// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// trying to redeclare the variable called decimalNumber twice in the function.
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

let decimalNumber1 = 0.5;
console.log(convertToPercentage(decimalNumber1));