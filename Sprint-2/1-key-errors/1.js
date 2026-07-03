// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// console.log(decimalNumber); will cause error because decimalNumber only exists inside the function.
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
//The error happens because the function already has a parameter called decimalNumber.
//Creating another variable with the same name inside the function causes a conflict
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
