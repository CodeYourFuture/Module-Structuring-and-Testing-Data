// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
/* - The function will throw a syntax error because we have redeclared the parameter variable "decimalNumber", and we have
 also used const for declaring percentage, percentage will change when we call the function with different arguments so it should
 be declared using let.
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
 number by calling the function with an argument and we will console.log the function call*/
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber){
  return `${decimalNumber * 100}%`;
}
console.log(convertToPercentage(0.5))