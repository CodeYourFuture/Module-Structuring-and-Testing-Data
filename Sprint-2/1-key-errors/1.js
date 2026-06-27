// Predict and explain first...

// Why will an error occur when this program runs? 
// =============> decimalNumber is a constant variable, and cannot be changed. 
// The code is attempting to change it which will cause an error.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> The code is attempting to get the percentage of decimalNumber

// Finally, correct the code to fix the problem
function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log (convertToPercentage(0.5));