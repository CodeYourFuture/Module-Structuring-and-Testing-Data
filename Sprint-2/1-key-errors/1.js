// Predict and explain first...

// Why will an error occur when this program runs?
// =============> Similar to previous js, "const decimalNumber" already exists due to "convertToPercentage(decimalNumber)"

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> "const decimalNumber = 0.5;" should come before the function...? However I didn't notice another problem if I did that until I tried it was console.log is going to just grab the 0.5 that has nothing done to it, skipping the function. To correct this I changed it to "console.log(convertToPercentage(decimalNumber))"

// Finally, correct the code to fix the problem
// =============> write your new code here

const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(decimalNumber));