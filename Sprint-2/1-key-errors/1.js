// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// I predict that this program will throw a error - due to the variable decimalNumber being redeclared.

// Try playing computer with the example to work out what is going on

/* function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber); */

// =============> write your explanation here
// Function covertToPercentage(decimalNumber) - it has a parameter named decimalNumber
// Inside the function: const decimalNumber =0.5; - this redeclares the same variable name that's already used for the parameter.
// That causes an error: SyntaxError: Identifier 'decimalNumber' has already been declared - because you can't declare a const (or let) with the same name as a parameter inside the same function scope.
// JavaScript doesn't allow us to declare a new variable with the same name in the same scope, so it caused an error.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));

// Function decimalNumber = 0.5
// It calculates 0.5 * 100 = 50
// it returns "50%"
// console logs 50%
