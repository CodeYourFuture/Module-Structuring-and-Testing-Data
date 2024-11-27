// Predict and explain first...

// My prediction:
// This function will error out saying "SyntaxError: Identifier 'decimalNumber' has already been declared"

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  // keyword "function" starts a function declaration, convertToPercentage is the function identifier, decimalNumber is the parameter
  const decimalNumber = 0.5; // keyword "const" declares a constant variable with the identifier "decimalNumber" and assigns it the value 0.5,
  // this is a redeclaration of the parameter decimalNumber so the code will error out
  const percentage = `${decimalNumber * 100}%`; // code not reached

  return percentage; // code not reached
}

console.log(decimalNumber); // code not reached, but this would also error out "ReferenceError: decimalNumber is not defined"
// because the variable decimalNumber is declared inside the function and is not accessible outside the function

// Explanation:
// The code will error out because the parameter decimalNumber is being redeclared as a constant variable.
// This is not allowed in JavaScript.
// We can fix this by removing the line that redeclares the parameter as a constant variable.

function convertToPercentageFixed(decimalNumber) {
  // keyword "function" starts a function declaration, convertToPercentage is the function identifier, decimalNumber is the parameter
  const percentage = `${decimalNumber * 100}%`; // compute the percentage of the decimalNumber and assign it to the constant variable percentage

  return percentage;
}

console.log(convertToPercentageFixed(0.5));
console.assert(
  convertToPercentageFixed(0.5) === "50%",
  "0.5 should be converted to 50%"
);
