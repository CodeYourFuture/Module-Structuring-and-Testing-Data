// Predict and explain first...

// Why will an error occur when this program runs?
// Because we already have a variable called decimalNumber. We can't create a constant with the same name.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const number = 0.5;
console.log(convertToPercentage(number));

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
