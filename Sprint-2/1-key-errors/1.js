// Predict and explain first...
/*
The console is returning decimalNumber, which is the original number instead of the result of the function. 
The variable decimalNumber was declared in the function parameters.
*/
// Why will an error occur when this program runs?
// =============> write your prediction here
// An error of variable, because the variable decimalNumber must was declared inside of the function. 
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;
  
  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// The variable decimalNumber was declared inside the function. Also, the console.log was trying to call the variable decimalNumber.
// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(0.5));
