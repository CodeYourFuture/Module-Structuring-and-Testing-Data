// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

/*SyntaxError: Identifier 'decimalNumber' has already been declared*/
//Because same name is used again with const decimalNumber = 0.5;
// inside the function.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// console.log(decimalNumber); line is outside the function,
//  so the variable decimalNumber is not defined in that scope.
//  This will cause a ReferenceError.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(500));
