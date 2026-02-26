// Predict and explain first...
// Why will an error occur when this program runs?
// =============> There would be a syntax error because the decimalNumber is declared again as const
//and logically there is no need for initializing decimalNumber again with 0.5 value as in that case the method would return 50% always
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> Yes, the error is because the identifier decimalNumber has already been declared.

// Finally, correct the code to fix the problem
// =============> the correct code would be as follows:-

/*function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}*/
