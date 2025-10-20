// Predict and explain first...

// Why will an error occur when this program runs?
// constant decimalNumber is being declared twice within the same scope, which will cause a syntax error.

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  //const percentage = `${decimalNumber * 100}%`;

  //return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here
// SyntaxError: Identifier 'decimalNumber' has already been declared
// decimalNumber is declared as a parameter of the function and then again inside the function using const.
// In JavaScript, you cannot declare the same variable name in the same scope using let or const.
// Function input is ignored if a variable with the same name is declared inside the function body.
// const decimalNumber = 0.5 will always output 50% regardless of the input value.

// Finally, correct the code to fix the problem
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(0.75)); // Example call to test the function