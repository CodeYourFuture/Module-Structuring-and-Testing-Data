// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  // let  decimalNumber = 0.5;   // => thisline cause error
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
// the decimalNumber has already been declared its constant cant except

console.log(convertToPercentage(0.5));
// console.log(decimalNumber);