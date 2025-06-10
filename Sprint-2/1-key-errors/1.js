// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
/* Error will occur because the variable 'decimalNumber' declared inside the function and it should not
   be passed as a parameter. Also variable decimalNumber is defined in the local scope and it cannot
   be used in the global scope in 'console.log()'
*/

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);*/

// =============> write your explanation here
/* SyntaxError: Identifier 'decimalNumber' has already been declared occurs because
   the same name is used for the parameter
*/
/* ReferenceError: decimalNumber is not defined occurs because it is defined inside the function and not
   recognized in the global scope
*/

// Finally, correct the code to fix the problem
// =============> write your new code here

const decimalNumber = 0.5;

function convertToPercentage() {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

result = convertToPercentage();
console.log(result);
