// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// I predict that the decimalNumber variable will be timed 100 and will get a percentage value of 50%, but that only my predictions.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   // const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// SyntaxError: Identifier 'decimalNumber' has already been declared
// This error occurs because we have declared the variable decimalNumber twice, 
// once as a parameter and once as a variable inside the function.

// apparently there is another error that we only console logged the variable decimalNumber which is not declared in the global scope,
//  to fix this we instead call the function convertToPercentage with a decimal number as an argument and log the result of that function call to the console.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
