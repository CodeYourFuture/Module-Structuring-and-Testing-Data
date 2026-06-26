// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// There will be two errors, First syntax errors as decimalNumber has already been declared and tried to redeclare it again inside function.
// second without defining decimalNumber try to use decimalNumber in log.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.9));

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
