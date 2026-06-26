// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here. /* Error will occur when this program is run because a variable already declared inside the function parameter , was redeclared inside the function body. Also the console.log function is calling the variable decimalNumber which is not defined in the global scope. */

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
