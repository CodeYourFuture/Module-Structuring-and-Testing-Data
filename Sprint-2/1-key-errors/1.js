// Predict and explain first...
// The function is trying to convert a decimal number into a percentage.
// Why will an error occur when this program runs?
// =============> write your prediction here:  in the function, on line 9, the variable name 'decimalNumber' has already been used on line 8, so we need a new name or else, we will get a referencing error. ON line 15, the 'decimalNumber' cannot be printed because it is a local variable which exists only inside the function 'convertToPercentage' and cannot be access when outside of this function.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here: When running the code, I get an error on line 9 for because I used the variable name decimalNumber a 2nd time. Then there is a reference error on line 15 because 'decimalNumber' cannot be accessed when outside of the function. Also, we do not really need the code on line 9.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const firstDecimal = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.1));
console.log(convertToPercentage(0.5));