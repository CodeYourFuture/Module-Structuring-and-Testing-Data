// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here - it won't work because the variable decimalNumber is being declared twice, once as a parameter and then again inside the function.


// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.8));

// =============> write your explanation here
// previously the code was not working because the variable decimalNumber was being declared twice, once as a parameter and then again inside the function. This caused a conflict and resulted in an error.
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.8));