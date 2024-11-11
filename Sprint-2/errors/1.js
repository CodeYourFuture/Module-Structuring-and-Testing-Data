// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// An error will occur when this program runs due to a variable redeclaration conflict with const for decimalNumber.
// decimalNumber is first passed as an argument to the function, This redeclaration is not allowed in JavaScript because the variable already exists in the current scope
// To fix this, we should either remove the const decimalNumber = 0.5; , and pass it as argument like this:

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
