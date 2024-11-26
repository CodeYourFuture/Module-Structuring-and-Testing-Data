// Predict and explain first...

// Why will an error occur when this program runs?
// Because of the variable scope issue in the function convertToPercentage(decimalNumber).
// The parameter decimalNumber is being shadowed by a local constant variable decimalNumber declared with const inside the function body. This causes a conflict.
// The error will be SyntaxError: Identifier 'decimalNumber' has already been declared.

// Try playing computer with the example to work out what is going on
/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); // Output: 50%
