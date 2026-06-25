// Predict and explain first...
// Why will an error occur when this program runs?
// =============> write your prediction here
// I think there will be an error as "decimalNumber" variable has already been declared as a parameter in
// "convertToPercentage" function
// 
// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber); */

// =============> write your explanation here
// =============Explanation ===============
// the "decimalNumber" variable is a local variable and can only be seen inside "convertToPercentage" function
// therefore when called outside the function it triggers "ReferenceError"

// Finally, correct the code to fix the problem
// =========correction=========
// problem can be fixed by moving the variable declaration outside the function
//  and making it global

// =============> write your new code here

const decimalNumber = 0.5;
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
console.log(convertToPercentage(decimalNumber));


