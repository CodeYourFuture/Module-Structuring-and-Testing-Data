// Predict and explain first...

// Why will an error occur when this program runs?
// =============> Firstly we have the same name of our variable and parameter of function decimalNumber, and also we trying to use inside console log our variable that is in locale scope

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here We just need to remove  const decimalNumber = 0.5; and invoke the function inside console.log
// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(1000));
