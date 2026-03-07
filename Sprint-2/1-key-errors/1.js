// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
//The program will return undefined because the console log which is outside the function is calling a local variable within the function scope

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// The program did not return undefined on first call, but rather returned an identifier redeclaration syntaxerror. However when corrected without variable redeclaration, it returns undefined because console.log(decimalNumber) is not defined.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
