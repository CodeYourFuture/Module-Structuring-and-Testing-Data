// Predict and explain first...

// Why will an error occur when this program runs?
// =============>The variable decimalNumber has already been declared and redeclaration of the variable inside function will give an error 

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> SyntaxError: Identifier 'decimalNumber' has already been declared
// decimalNumber was declared as a function parameter (function convertToPercentage(decimalNumber).
// Then, inside the function, decimalNumber was redeclared using const decimalNumber = 0.5;.
// JavaScript does not allow redeclaring function parameters as constants or variables inside the same scope.


// =============>
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); 

