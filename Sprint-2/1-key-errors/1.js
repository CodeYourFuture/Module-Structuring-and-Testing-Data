// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// decimalNUmber has already been declared as a function parameter so we need a different for the variable.
// also we need to call the function before the computer can run it.

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
//  const decimalNumber = 0.5;
//  const percentage = `${decimalNumber * 100}%`;

//  return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here
// we cannot declare the same variable twice so we need a different name for our variable than the parameter 
// also it's better to run the function with a given parameter after its been declared

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
const newDecimalNumber = 0.5;
const percentage = convertToPercentage(newDecimalNumber)
console.log(percentage);