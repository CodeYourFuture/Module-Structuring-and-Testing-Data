// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// The error will occur because the variable 'decimalNumber' is being redeclared.

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
// The parameter decimalNumber is already declared as part of the function.
// When we try to declare it again inside the function, it causes a syntax error because
// we cannot redeclare a variable that is already declared in the same scope.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
