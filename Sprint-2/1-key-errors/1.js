// Predict and explain first...
// I predict that the code will throw an error when trying to call the function convertToPercentage with a decimal input
// because the variable 'decimalNumber' is being declared twice within the same scope, which is not allowed in JavaScript.
// Why will an error occur when this program runs?
// The code will throw a SyntaxError because the variable 'decimalNumber' is being declared twice within the same scope.



// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// The code will throw a SyntaxError because the variable 'decimalNumber' is being declared twice within the same scope.
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;