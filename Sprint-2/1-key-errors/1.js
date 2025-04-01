// Predict and explain first...
//My prediction: The program will throw an error when it runs. Specifically, it will result in a SyntaxError or ReferenceError

// Why will an error occur when this program runs?
// =============> An error will occur because the function parameter decimalNumber is redeclared inside the function using const, which is not allowed in JavaScript.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> The error happens because the function tries to redeclare decimalNumber inside its own scope, which isn't allowed in JavaScript. Also, console.log(decimalNumber); is trying to print a variable that doesn't exist in the global scope, causing another error.

// Finally, correct the code to fix the problem
// =============> function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const result = convertToPercentage(0.5);
console.log(result);
//The code above fixes the issue by removing the redeclaration of decimalNumber inside the function and moving the console.log(decimalNumber); outside the function. This way, the function can access the decimalNumber parameter passed to it and return the correct result. The console.log() statement will then print the result to the console.

//CORRECTED CODE 
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const result = convertToPercentage(0.5);

console.log(result); // Outputs: "50%"
