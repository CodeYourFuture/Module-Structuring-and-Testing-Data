// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// This code will throw an error because 'decimalNumber' is declared twice: 
// once as a parameter and again inside the function using 'const'.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// In JavaScript, you cannot redeclare a variable in the same scope with 'const'.
// The function already receives 'decimalNumber' as a parameter, so there's no need
// to declare it again.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
