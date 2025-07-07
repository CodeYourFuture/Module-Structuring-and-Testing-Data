// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// decimalNumber variable was declared twice. First as parameter and second as const in function body
// use different variable name, either in parameter or the one in function body.
// any way this function always return the same value because the variable is constant and define inside th function,
// usually a function take a variable from function parameters.
// console.log() will fail to print because no parameter define first.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  //-----> should be place as parameter and not as a constant ,,,,,const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

decimalNumber = 0.27;
console.log(convertToPercentage(decimalNumber));
