// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// I guess decimalNumber is declared already so an error will be thrown.
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// It is the same as i have predicted decimalNumber has already declared. And also there will be a reference error decimalNumber is logged outside the function. 
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));

