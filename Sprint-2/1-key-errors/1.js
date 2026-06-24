// Predict and explain first...

// Why will an error occur when this program runs?
// =============> same as before, decimalNumber in the function para, but also as a constant inside the function. also we are trying to log decimalNumber, but thats the input, or inside the function the new variable which would result in a scope issue, since this does not exist outside of the function

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimal = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> Uncaught SyntaxError: Identifier 'decimalNumber' has already been declared - so the same issue as the previous
//also after changing the decimalNumber to decimal inside the function: Uncaught ReferenceError ReferenceError: decimalNumber is not defined -->in console log we should ask for the function
// Finally, correct the code to fix the problem
// =============>
function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage());
