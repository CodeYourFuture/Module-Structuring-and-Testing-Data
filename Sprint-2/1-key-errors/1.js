// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// My prediction is that this will solution will fail due to the fact that the decimalNumber is being declared twice.
// The second issue is the decimalNumber is being logged to the console, but this is parameter for convertToPercentage.
// So to call the function accurately we need to call convertToPercentage not decimalNumber.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// The function convertToPercentage takes a decimal number as parameter.
// It multiplies the number by 100 and converts it into a string with a "%" symbol.
// The corrected version removes the duplicate declaration and calls the function properly.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber){
  const percentage = `${decimalNumber * 100}%`;
  return percentage 
}
console.log(convertToPercentage(0.5));