// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber = 0.5) {
 // const decimalNumber = 0.5  ==> declared already
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

// wrong function call
//console.log(decimalNumber);

console.log(convertToPercentage())
