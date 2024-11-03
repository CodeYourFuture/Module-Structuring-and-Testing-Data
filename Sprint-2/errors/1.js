// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

// decimalNumber is already defined as a variable in the parameter. You can't declare it again.
// console.log will not output decimalNumber as the variable decimal number only exists within the function convertToPercentage. decimalNumber is only a parameter inside of the function and cannot be accessed globally.
// SyntaxError: Identifier 'decimalNumber' has already been declared.
// decimalNumber has already been declared as a variable in the parameter.
// removed const decimalNumber and changed console.log(decimalNumber); to console.log(convertToPercentage(0.5));