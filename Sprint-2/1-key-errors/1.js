// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here return syntax error

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here decimalNumber has already been declared when used as parameter
// in line 8 and 9 trying to declare decimalNumber twice:
  // As a parameter to the function.
  // Again inside the function with const decimalNumber = 0.5;.



// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage("0.5")); //  ====> 50%
