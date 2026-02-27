// Predict and explain first...

// Why will an error occur when this program runs?

// =============> write your prediction here
// decimalNumber is supplied as a function parameter and and also declared as a variable,
// it will throw an identifier syntaxError.
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// playing computer with the first code throw syntaxError: decimalNumber has been already declared.
// Finally, correct the code to fix the problem

// =============> write your new code here

function convertToPercentage(decimalNumber) {
  // const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
