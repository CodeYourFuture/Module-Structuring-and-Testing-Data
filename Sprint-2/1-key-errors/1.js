// Predict and explain first...

// Why will an error occur when this program runs?
// =============> Line 9 the variable "decimalNumber" is declared as a parameter passed to the function
// but again on line 10 inside the function, the variable is declared

// Try playing computer with the example to work out what is going on

const decimalNumber = 0.5;
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(decimalNumber));

// Finally, correct the code to fix the problem
// =============> decimalNumber = 0.5;
