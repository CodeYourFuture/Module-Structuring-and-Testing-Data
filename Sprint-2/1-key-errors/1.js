// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// decimal number has been passed as nn argument
// and is not accessible outside of the function scope because it has not been returned to console.log it will throw an error

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
decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
console.log(convertToPercentage(decimalNumber));
