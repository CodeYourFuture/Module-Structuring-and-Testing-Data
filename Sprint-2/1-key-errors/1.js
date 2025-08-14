// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// 'decimalNumber' has already been declared
// after previous fixed: decimalNumber is not defined

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

// First error will occur in first line inside function code, 
// because variable 'decimalNumber' already given as parameter
// In order to fix this error we can remove first line inside function code
// Next error will be during 'console.log(decimalNumber)' 
// because 'decimalNumber' does not declared
// to fix this we need replace variable with function call with some decimal number as parameter

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));