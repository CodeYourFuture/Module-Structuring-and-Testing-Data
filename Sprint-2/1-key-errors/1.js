// Predict and explain first...

// Why will an error occur when this program runs?
// =============> There are 2 errors that will occur with this function:
// 1. The function is trying to redeclare decimalNumber, but that's not possible.
// 2. console.log() is trying to print decimalNumber, but that's a local variable in the function so it cannot be accessed outside of it.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// Like in the previous exercise, decimalNumber is the function parameter, so it is already a local variable in the function and cannot be redeclared.
// After fixing the first error, another one would appear:
// Because decimalNumber, and percentage, are both local variables, the console.log outside the function cannot access them, so it would not be able to print anything.
// Additionally, I have a feeling the console.log() was meant to log the function response by calling the function inside of it.
// For this reason, I've decided to hard code the decimal number values in my function calls, inside console.log() I think this makes more sense.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
console.log(convertToPercentage(1.2));
console.log(convertToPercentage(0.74));
