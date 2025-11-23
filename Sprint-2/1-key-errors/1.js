// Predict and explain first...

// Why will an error occur when this program runs?
// decimalNumber is already used as a parameter so it can not be used as a variable inside the function,
// the code is logging the parameter instead of the function

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// I'm not sure about what to write here

// Finally, correct the code to fix the problem
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.9))
