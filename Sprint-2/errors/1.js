// Predict and explain first...
// *** interpretation : decimalnumber is not a global variable. The console.log() will return undefined.
// Why will an error occur when this program runs?
//*** Why? Because decimalnumber is the scope of the function. You cannot redeclare it again.
// Try playing computer with the example to work out what is going on
decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(decimalNumber);
console.log(convertToPercentage(decimalNumber));
console.log(convertToPercentage(.6));