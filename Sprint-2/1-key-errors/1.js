// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// The code will throw an error because the variable 'decimalNumber' is being redeclared with 'const' inside the function,
// which is not allowed since 'decimalNumber' is already defined as a parameter of the function

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }
// console.log(decimalNumber);

// =============> write your explanation here
// The error occurs because the variable 'decimalNumber' is being declared again with 'const' inside the function,
// which conflicts with the parameter 'decimalNumber' that is already defined. In JavaScript,

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
 // decimalNumber = 0.5; // Remove 'const' to avoid redeclaration
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage(0.5)); // Output: "50%"
console.log(convertToPercentage(0.1)); // Output: "10%"