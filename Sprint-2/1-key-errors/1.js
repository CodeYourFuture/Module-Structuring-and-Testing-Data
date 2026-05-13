// Predict and explain first...
// Why will an error occur when this program runs?

// =============> write your prediction here
// Assuming we define decimalNumber for the function (otherwise that will throw an error)
// then we run into the same problem as the last exercise, const decimalNumber = 0.5;
// is trying to define a variable that has already been determined

// Try playing computer with the example to work out what is going on

/* Original code:
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/

// =============> write your explanation here
// Uncaught SyntaxError: Identifier 'decimalNumber' has already been declared
// As predicted the function is trying to declare a variable that has already been determined

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
