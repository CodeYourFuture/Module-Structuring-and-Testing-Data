// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// Undefined, decimalNumber is not in the right scope for the console.log statement to access it.

// Try playing computer with the example to work out what is going on

// =============> write your explanation here
// Declaring variable with the same name in the same scope causes error.

// Finally, correct the code to fix the problem
// =============> write your new code here
const decimalNumber = 0.5;
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(decimalNumber));
