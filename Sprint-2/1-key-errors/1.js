// Predict and explain first...

// We are not calling to the function from console.log, the function is convertToPercentage
// Also, its using decimalNumber outside the function, decimalnumber is a parameter it’s not defined in the global scope.

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on


// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); // "50%"
console.log(convertToPercentage(0.25)); // "25%"

