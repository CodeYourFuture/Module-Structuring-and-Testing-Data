// Predict and explain first...

// Why will an error occur when this program runs?
// It will throw syntaxError, the code will not work.> write your prediction here

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber); */

// The first error: the code will not work because as the previous exercise we cannot redeclare a variable that already assigned as function parameter.
// The second error: to use the function correctly to display in console we need to call the function name not the variable name.> write your explanation here

// Finally, correct the code to fix the problem
//   > write your new code here

function convertToPercentage(decimalNumber) {
  const decimalNumber2 = 0.5;
  const percentage = `${decimalNumber2 * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
