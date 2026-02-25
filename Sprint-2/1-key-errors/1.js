// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
//2 errors: 1. The parameter decimalNumber is already declared 2. it should show error or undefined as console.log is calling variable not the function
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// Identifier 'decimalNumber' has already been declared - 
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));