// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
/* - The function will throw a syntax error because we have redeclared the parameter variable "decimalNumber".
 - we are console logging the variable decimalNumber outside the function - the variable lives only inside the function
 */

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;
//
//   return percentage;
// }
//
// console.log(decimalNumber);

// =============> write your explanation here
/*I will remove line 14 - a redeclaration of the parameter variable, we will not reassign it, we will get the decimal
 number by calling the function with an argument, and we will console.log the function call*/
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}
// i have also removed the reassignment of decimal number "decimalNumber = 0.5;" so we can pass any number in the function
console.log(convertToPercentage(1.5));
