// Predict and explain first...



// Why will an error occur when this program runs?
// The error will occur because the variable 'decimalNumber' is being redeclared.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// the error is occurring because we are trying to declare a variable with the same name as the function parameter, which is not allowed in JavaScript.

// Finally, correct the code to fix the problem

 function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
