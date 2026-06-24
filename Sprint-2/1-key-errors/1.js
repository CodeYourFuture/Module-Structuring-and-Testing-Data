// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// decimalNumber is declared twice and passed a value inside the function.
// The function hasn't been called properly

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// The error occurred because decimalNumber is declared twice. No need to create the percentage variable too.
// Instead the expression is returned directly without declaring a new variable.
// The function should be called with a value passed in as an argument and the result should be stored in a variable to be logged to the console.
// convertedPercentage is declared to store the result of the function call and then logged to the console.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  return`${decimalNumber * 100}%`;
}

const convertedPercentage = convertToPercentage(0.5);
console.log(convertedPercentage);
