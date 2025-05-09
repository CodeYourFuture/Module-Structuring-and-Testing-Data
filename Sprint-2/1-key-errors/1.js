// Predict and explain first...

// Why will an error occur when this program runs?
// =============> decimalNumber is declared as a parameter for the function. A redeclaration is done using const and this causes an error

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(conversionToupperSnakeCase(0.5));

// =============> The function is named convertToPercentage with a parameter decimalNumber.
// A redeclaration is done of decimalNumber which will cause an error
// return will end the function and give the percentage value
// console.log will result in an error because it is outside the function and also not defined

// Finally, correct the code to fix the problem
// =============> Answer:New code
const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

let result = convertToPercentage(decimalNumber);
console.log(result);
