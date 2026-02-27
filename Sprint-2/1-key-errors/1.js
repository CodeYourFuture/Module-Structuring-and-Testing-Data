// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// You cannot re-declare decimalNumber, it already exists as a parameter.

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  //const percentage = `${decimalNumber * 100}%`;

  //return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here
// We have to remove the re-declaration and pass a value into the function, then log the result of the fucntion.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`
  return percentage;
}

console.log(convertToPercentage(0.5));
