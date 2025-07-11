// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
//an error will occur because the variable `decimalNumber` is declared twice in the same scope, which is not allowed in JavaScript. The first declaration is as a function parameter, and the second one is inside the function body. the code will throw a syntax error.
//the console log will not work because the variable `decimalNumber` is not defined in the global scope, it is only defined within the function `convertToPercentage`.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
//we received a syntax error for declaring an identifier which had alread been declared as a parameter.
//we also received a reference error because the variable `decimalNumber` was not defined in the global scope, it was only defined within the function `convertToPercentage`.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage());
