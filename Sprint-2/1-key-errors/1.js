// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// my prediction it will throw a syntaxerror because the parameter decimalNumber is already declare in the definition.
//and  line 11 try to declare another variable with the same name so the error will be identifier 'str'has already been declared .
//
// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> As I predicted, SyntaxError: Identifier 'decimalNumber' has already been declared

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
