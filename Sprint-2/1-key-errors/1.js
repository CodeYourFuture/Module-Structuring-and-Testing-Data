// Predict and explain first...

// Why will an error occur when this program runs?
// =============> Prediction:
// There will be an error because 'decimalNumber' is declared twice inside the function
// and console.log(decimalNumber) outside the function will not work.

// Original code:
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5; //  cannot declare again
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(decimalNumber); //  not defined

// =============> Explanation:
// 1. The function already has a parameter called 'decimalNumber', so using 'const decimalNumber' again is not allowed.
// 2. The variable 'decimalNumber' only exists inside the function.
//    You cannot use it outside the function.

// =============> Corrected Code:
function convertToPercentage(decimalNumber) {
  const percentage = decimalNumber * 100 + "%"; // calculate percentage
  return percentage;
}

// Example
console.log(convertToPercentage(0.5)); // Output: "50%"
