// Predict and explain first...

// Why will an error occur when this program runs?
// Declaring a variable with the same name as the function parameter in the function body causes a SyntaxError.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// After running the code, the following error message was displayed:
// Uncaught SyntaxError: Identifier 'decimalNumber' has already been declared

// Finally, correct the code to fix the problem
// function convertToPercentage(decimalNumber) {
//  const percentage = `${decimalNumber * 100}%`;
//  return percentage;
// }

// console.log(convertToPercentage(0.5));
