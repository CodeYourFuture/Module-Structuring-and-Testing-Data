// Predict and explain first...

// Why will an error occur when this program runs?
// this will throw a SyntaxError: Identifier 'decimalNumber' has already been declared.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// it will throw this error SyntaxError: Identifier 'decimalNumber' has already been declared.
// by declaring the variable decimalNumber as a parameter inside the function parentheses. 
// This will create it again on the next line using const, JavaScript gets confused and blocks the code from running.

// Finally, correct the code to fix the problem
// this is the correct code below

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
