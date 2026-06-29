// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// The error will occure because of the redeclaration of the variable decimalNumber in the function body.
// I believe there will be another error when this one's fixed. The console.log (decimalNumber) will not work.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;
//
//   return percentage;
// }
//
// console.log(decimalNumber);

// =============> write your explanation here
// As said earlier, the error is because of the redeclaration of the variable decimalNumber in the function body.
// The error message details: SyntaxError: Identifier 'decimalNumber' has already been declared
// Once I've coreecte the code, I get the following error:
// ReferenceError: decimalNumber is not defined
// This is because the variable decimalNumber is not declared in the global scope, but only in the function scope.
// Being 0.5 the value we want to apply the function to, we could just use it in the function call.

// Finally, correct the code to fix the problem
//
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
