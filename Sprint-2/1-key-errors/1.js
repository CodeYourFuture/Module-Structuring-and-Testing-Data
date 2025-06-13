// Predict and explain first...
/*The function below is trying to convert a decimal number to percentage */

// Why will an error occur when this program runs?
// =============> write your prediction here
/*An error will occur because the program logs the parameter decimalNumber instead of the function*/
// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
/*
- The function convertToPercentage() takes a parameter called decimalNumber
- it's declaring a constant variable with the parameter decimalNumber which will throw an error because it's withing the same scope and in JS is not allowed. Variable names suppose to be unique within the same scope.
- It's storing a hardcoded value of 0.5 as value to the constant variable decimalNumber
- It creates a constant variable percentage to store the value of multiplying decimalNumber by 100 to get the percentage
- It returns percentage
- Finally, it logs the parameter decimalNumber without the function which will generate an error.
*/

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const decimalNumberValue = decimalNumber;
  const percentage = `${decimalNumberValue * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.8));
