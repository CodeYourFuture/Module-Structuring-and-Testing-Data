// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
/* The code will throw an error because the code is declaring decimal number as a variable where we already
have it as a parameter of the function. It causes a conflict.*/

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);*/

// =============> write your explanation here
//The code throws a SyntaxError: Identifier 'decimalNumber' has already been declared.
//This means the code is  trying to declare a const with the same name as a parameter (decimalNumber). 
// This causes a syntax error, because JavaScript does not allow redeclaring a parameter name as a local variable 
// inside the same scope.


// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5))