// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

// Firstly, the decimalNumber variable has already been declared. Secondly, the function convertToPercentage has not been called correctly, instead console.log was used to log decimalNumber. By removing the const keyword and calling the function correctly allows the code to convert the given decimalNumber to a percentage.

function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

let myPercentage = convertToPercentage()
console.log(myPercentage);
