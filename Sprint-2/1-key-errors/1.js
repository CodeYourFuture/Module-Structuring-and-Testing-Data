// Predict and explain first...
// The function is intended to take a decimal number and convert it to a percentage (e.g. 1.5 => 150%)

// Why will an error occur when this program runs?
// There will be a syntax error due to the redeclaration of the variable 'decimalNumber'

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// Redeclaring the variable decimalNumber causes a syntax error
// The parameter decimalNumber cannot be logged to the console as it is a parameter and holds no value until the function is called

// Finally, correct the code to fix the problem
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}

console.log(convertToPercentage(0.5));
