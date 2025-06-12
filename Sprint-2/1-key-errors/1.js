// Predict and explain first...

// Why will an error occur when this program runs?
// =============> this wont work as the variable was assigned to the argument name  

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============>'decimalNumber' was already declared so we need to remove it and get add the argument in the console rather

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.7))