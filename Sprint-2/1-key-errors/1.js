// Predict and explain first...

// Why will an error occur when this program runs? JavaScript does not allow redeclaring function parameters with const or let.
// and the function does not use the argument passed to it
// =============> write your prediction here : We have a SyntaxError

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here: console.log(decimalNumber); is outside the function and attempts to access decimalNumber, which is not defined in the global scope

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

const value = 0.5;
console.log(convertToPercentage(value));
