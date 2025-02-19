// Predict and explain first...

// Why will an error occur when this program runs? decimalNumber should be assigned a value outside the function only.
// =============> write your prediction here: const decimalNumber = 0.5 will give an error message.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here: The re-assignment of decimal number inside the function is unecessary

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {

  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));