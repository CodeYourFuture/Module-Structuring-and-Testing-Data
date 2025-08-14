// Predict and explain first...

// Why will an error occur when this program runs?
// =============> My prediction is that the code will not give an error,
// but it will be only giving 50% as a result when the function is called,
// because the variable 'decimal number' is assigned the value of 0.5.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> The error "Identifier 'decimalNumber' has already been declared" is occurring
// because the variable `decimalNumber` is being declared twice in the function.
// And console.log cannot access the variable `decimalNumber` because of its scope.

// Finally, correct the code to fix the problem
// =============> Here's my code:

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.7));
