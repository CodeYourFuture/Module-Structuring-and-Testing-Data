// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// First, it's trying to print decimalNumber, an undeclared value.
// Second, the decimalNumber variable name is already taken when it tries to declare it in the first
// line of the function body.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// when Javascript reads the function definition, and sees a parameter, it creates a variable with that name
// scoped to the body of the function. Then when it reads the first line within the body, the 'decimalNumber'
// name is already taken.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
