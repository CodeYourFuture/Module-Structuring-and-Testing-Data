// Predict and explain first...
// Why will an error occur when this program runs?
// =============> write your prediction here
//  1.*Answer
// We have declared "decimalNumber" twice.
// It is already declared as a function parameter, causing a conflict.
// console.log(decimalNumber) results in an error because it is outside
// the function scope.

// Try playing computer with the example to work out what is going on
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
