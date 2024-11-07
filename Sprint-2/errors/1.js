// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on
//
//Answer: SyntaxError: Identifier 'decimalNumber' has already been declared

function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
