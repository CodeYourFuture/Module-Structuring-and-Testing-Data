// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// An error will occur because the variable `decimalNumber` is declared twice, 
// which is not allowed in JavaScript.

// Try playing computer with the example to work out what is going on
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// The error occurs because the variable 'decimalNumber' is declared again 
// inside the function 'convertToPercentage', although it has already been 
// defined as a parameter. JavaScript does not allow redeclaring a parameter 
// using const, let or var within the same scope. This causes a syntax error 
// when the code is executed.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
