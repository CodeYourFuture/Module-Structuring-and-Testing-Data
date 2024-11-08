// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5; // variable redeclaration
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage()); // we should call the function
