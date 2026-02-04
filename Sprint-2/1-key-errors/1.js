// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// Prediction: The error will occur because the variable 'decimalNumber' is being redeclared 
// inside the function using 'const', which is an illegal operation. 
// Variables declared with 'const' cannot be redeclared in the same scope.

// Try playing computer with the example to work out what is going on

/*
Original code:
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/

// =============> write your explanation here
// Explanation: The error occurs because 'decimalNumber' is declared as a parameter of the function. 
// When we try to declare it again inside the function with 'const', it causes a syntax error.
// To fix this, we should either use the parameter directly or rename the inner variable.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); // Output: 50%