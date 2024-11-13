// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  // const decimalNumber = 0.5;  we declare a new constant variable named decimalNumber using const, but the function already has a parameter with the same name
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber(0.5)); // the variable decimalNumber is not defined in the global scope; it only exists inside the function scope.
