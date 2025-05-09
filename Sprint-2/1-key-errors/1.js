// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// The function convertToPercentage(decimalNumber) accepts a parameter decimalNumber
//Inside the function, we have decimalNumber redeclared in the line 9, which creates a conflict
//we should remove the redeclaration of decimalNumber inside the function. Instead, use the parameter directly.and pass a decimal number as input => 0.5 in the function call

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

const decimalNumber = 0.5;
console.log(convertToPercentage(decimalNumber)); // Output is "50%"