// Predict and explain first...

// Why will an error occur when this program runs?
// Here the name decimalNumber in 'const decimalNumber' has already been used, so we will get a synthax Error for that line. 

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// JavaScript is read from top to bottom, so when the processor reads an error, the program will stop running and will get the error message.
//The first error is on line 9 with the reuse of the variable declaration name of 'decimalNumber.
//The second error is on line 15 where we are trying to call the variable 'decimalNumber',which is a local variable inside the function. We cannot access this variable outside of the function. We will need to call the whole function.
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${(decimalNumber * 100).toFixed(2)}`;
  return percentage;
}


console.log(convertToPercentage(0.5));   
console.log(convertToPercentage(0.1234)); 
console.log(convertToPercentage(1)); 
