// Predict and explain first...
// program is made for converting a decimal number into a percentage.

// Why will an error occur when this program runs?
// =============> I think error would occur because decimalNumber is declared twice.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> to fix the problem I will remove the second declaration of decimalNumber and use the parameter instead.

// Finally, correct the code to fix the problem
// =============> 
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
} 

// to call the function
console.log(convertToPercentage(1)); // Output: "100%"
