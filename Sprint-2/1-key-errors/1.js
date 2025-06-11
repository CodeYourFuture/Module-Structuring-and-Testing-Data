// Predict and explain first...
// =============> ANSWER
// convertToPercentage function takes a number and multiplaited it to 100,to give the percentage and  then return it.
//  but it doesn't work because we did'nt call it in the main part.
//  Also  we can not declare a variable which has been declared already

// Why will an error occur when this program runs?
// we can not declare a variable which has been declared already
// SyntaxError: Identifier 'decimalNumber' has already been declared

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> ANSWER
// It doesn't work because we did'nt call the function.

// Finally, correct the code to fix the problem

// =============> write your new code here

const decimalNumber = 0.5;
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(decimalNumber));
