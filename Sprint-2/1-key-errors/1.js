// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
decimalNumber can not be printed by console.log because it isn't string type .
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
error: SyntaxError: Identifier 'decimalNumber' has already been declared. 
decimalNumber is declared as function's parameter and again as const variable.
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
