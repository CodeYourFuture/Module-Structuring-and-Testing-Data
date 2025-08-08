// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// The code will shows an error because the variable 'decimalNumber' is being redeclared with 'const' inside the function, which is not allowed in JavaScript.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// there is a SyntaxError because the variable 'decimalNumber' is being redeclared with 'const' inside the function. 
// The function convertToPercentage is trying to declare 'decimalNumber' again with 'const', which is already declared in the outer scope. This leads to a SyntaxError because 'const' does not allow redeclaration of the same variable in the same scope.


// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) { // Remove 'const' to avoid redeclaration
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage(0.7));