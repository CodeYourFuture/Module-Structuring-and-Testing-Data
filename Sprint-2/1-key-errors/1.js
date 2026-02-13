// Predict and explain first...
// =====> This function tries to convert a decimal number to percentage, but I think it will not run as we have declared same variable name two times.

// Why will an error occur when this program runs?
// =============> It will throw an error as we have declared decimalNumber variable in our function parameter and again we declared this decimalNumber variable inside our function.

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(decimalNumber);*/

// =============> I tried to run this, it throw an error like: 'decimalNumber' has already been declared. to fix this we should remove the decimalNumber variable which we have inside our function.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  console.log(`Your Decimal number will be ${percentage}.`);
  return percentage;
}
convertToPercentage(0.9);