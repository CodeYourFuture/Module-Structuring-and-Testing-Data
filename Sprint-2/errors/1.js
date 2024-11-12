// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on
// There are 2 declarations of decimalNumber, one in the parameter and again on const
// The code will give an error stating that we have declared decimalNumber twice
// The assignment of 0.5 can lso be done in the console.log rather than as a declaration

function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}

console.log(convertToPercentage(0.5));
