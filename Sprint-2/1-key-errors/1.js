// Predict and explain first...
// using function parameter to declare a variable will throw up a syntax error

// Why will an error occur when this program runs?
// =============> write your prediction here
//syntax error using function parameter to declare variable

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);*/

// =============> write your explanation here
// its a function to convert a decimal number into a percentage

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.1));
