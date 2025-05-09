// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// Prediction: The function changes decimal number (0.5) to percentage (50%)

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// This will occur error because it is re-defining the decimalNumber variable inside the function, 
// but decimalNumber has already been used as a variable.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage());

// ----------Or------------

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));