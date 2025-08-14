// Predict and explain first...

// Why will an error occur when this program runs?
// =============> An error will occur because decimalNumber is declared twice

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/

// =============> An error will occur because decimalNumber is declared twice
// and decimalNumber is given as input but also is assigned a value which is problematic

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
