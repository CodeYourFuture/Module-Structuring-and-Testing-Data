// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

//correction
// the problem in the above code is that it redeclaring  the decimalNumber with const.
// and the The variable decimalNumber is only available inside the function calling it outside will  result in error

function convertToPercentage(decimalNumber) {

  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));