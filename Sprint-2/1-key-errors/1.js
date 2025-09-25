// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// the code will throw an error because the variable str is being declared twice within the same scope

// Try playing computer with the example to work out what is going on

/*

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

*/

// =============> write your explanation here
/* The error occurs because the variable 'decimalNumber' is declared twice within the same function scope using 'const'. 
This is not allowed in JavaScript, as each variable must have a unique name within its scope. When the function is called, 
the JavaScript engine encounters the second declaration of 'decimalNumber' and throws a SyntaxError indicating that the 
identifier has already been declared.*/

// Finally, correct the code to fix the problem
// =============> write your new code here

let decimalNumber = 0.6;

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(decimalNumber));
