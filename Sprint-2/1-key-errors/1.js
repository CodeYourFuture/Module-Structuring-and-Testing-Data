// Predict and explain first...

// Why will an error occur when this program runs?
// =============> because first: the variable decimalNumber is declared twice
// second: the parameter decimalNumber is assigned to a value inside the function

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> Identifier 'decimalNumber' has already been declared is the error msg thrown by the code

// Finally, correct the code to fix the problem
// =============>
function convertToPercentage(decimalNumber) {
  //  const decimalNumber = 0.5; this line must be deleted
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
