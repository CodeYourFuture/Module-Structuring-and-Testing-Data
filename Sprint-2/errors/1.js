// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on
//
//Answer: SyntaxError: Identifier 'decimalNumber' has already been declared
//Inside the function, the code attempts to redeclare the decimalNumber variable using const
//This leads to a conflict because const does not allow the redeclaration of a variable within the same scope. JavaScript throws a SyntaxError when it encounters this.

function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
