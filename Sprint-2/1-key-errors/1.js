// Predict and explain first...

// Why will an error occur when this program runs?
// =============> this program will produce a SyntaxError because decimalNumber is declared twice inside the function

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> The error happens because decimalNumber is already a parameter of the function, so we cannot declare it again using const

// Finally, correct the code to fix the problem
// =============>
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
