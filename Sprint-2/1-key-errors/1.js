// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// This code will throw an error because 'decimalNumber' is declared twice:
// once as a parameter and again inside the function using 'const'.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5; // <-- This line causes the error
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber); // <-- This line also causes an error because decimalNumber is not accessible here

// =============> write your explanation here
// Explanation:
// In JavaScript, you cannot redeclare a variable in the same scope with 'const' (or 'let').
// The function `convertToPercentage` already receives `decimalNumber` as a parameter,
// which effectively declares it within the function's scope.
// Therefore, the line `const decimalNumber = 0.5;` attempts to redeclare an existing identifier,
// leading to a `SyntaxError: Identifier 'decimalNumber' has already been declared`.
// Additionally, the `console.log(decimalNumber);` outside the function would also cause a `ReferenceError`
// because `decimalNumber` (the parameter or the inner const) is not defined in the global scope.

// Finally, correct the code to fix the problem
// =============> write your new code here

// Fixed Code:
function convertToPercentage(decimalNumber) {
  // We use the parameter 'decimalNumber' directly, no need to redeclare it.
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

// To use the function, we need to call it and pass a value.
console.log(convertToPercentage(0.5)); // Example call: will log "50%"
// console.log(convertToPercentage(0.75)); // Another example call: will log "75%"