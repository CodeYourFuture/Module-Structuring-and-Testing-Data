// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> JavaScript does not allow a parameter and a const variable inside the same scope to have the same name, so it gives an error.
//console.log(decimalNumber);

//decimalNumber only exists inside the function. It is a local variable, so it cannot be accessed outside the function. This causes a ReferenceError.

// Finally, correct the code to fix the problem
// =============> write your new code here
 
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));