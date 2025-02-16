// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
//  Answer | Variable decimalNumber declared twice in the convertToPercentage frame
// Try playing computer with the example to work out what is going on

/* function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/

// =============> write your explanation here
// Answer | Added the variable declaration in the global frame and called the function with the parameter already declared.
// Finally, correct the code to fix the problem
// =============> write your new code here


function convertToPercentage(decimalNumber) {
  
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
const decimalNumber = 0.5;
console.log(convertToPercentage(decimalNumber));
