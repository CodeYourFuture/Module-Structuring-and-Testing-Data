// Predict and explain first...
    // the code won't work
// Why will an error occur when this program runs?
// =============> write your prediction here
    // because of variable decimaNumber is already declared. And out of range of conlole function
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  console.log(decimalNumber);
  return percentage;
}


