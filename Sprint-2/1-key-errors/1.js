// Predict and explain first...

// Why will an error occur when this program runs?
// ===========> write your prediction here
// Prediction: There are two errors. First, we are trying to redeclare the parameter 'decimalNumber' using 'const'. Second, we are trying to log 'decimalNumber' outside the function where it doesn't exist.

function convertToPercentage(decimalNumber) {
  // We removed 'const decimalNumber = 0.5;' to use the parameter directly
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

// ===========> write your explanation here
// Explanation: A function parameter cannot be redeclared using 'const'. Also, parameters are local variables, meaning they cannot be accessed outside the function globally.

// Finally, correct the code to fix the problem
// ===========> write your new code here
// We fix this by calling the function properly and passing 0.5 as an argument inside console.log.
console.log(convertToPercentage(0.5));
