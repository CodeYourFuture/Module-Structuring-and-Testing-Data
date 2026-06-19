// Predict and explain:
// Error occurs because decimalNumber is declared twice inside the function, and it is also a local variable not accessible outside the function.

//----------------------------------------------------------------------------------------------------------

// Original code
/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(decimalNumber);*/

//----------------------------------------------------------------------------------------------------------

// My explanation :
// decimalNumber is already declared as a function parameter, so it cannot be declared again with const inside the function.
// Also, decimalNumber only exists inside the function, so it cannot be used in console.log outside the function.

//----------------------------------------------------------------------------------------------------------

// Corrected code :
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
