// Predict and explain first...

// Why will an error occur when this program runs?
// Prediction: The program will throw a SyntaxError because 'decimalNumber' is declared twice. If that is fixed, it will then throw a ReferenceError because 'decimalNumber' is used outside the function where it is defined.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

// Explanation: The function parameter is already called 'decimalNumber', so declaring 'const decimalNumber' again is not allowed. Also, 'decimalNumber' only exists inside the function, so trying to use it outside the function causes a ReferenceError.

// Finally, correct the code to fix the problem
// =============> write your new code here
