// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here: my prediction: The error will occur because i am  trying to redeclare the variable "decimalNumber".//

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

// =============> write your explanation here: // the error: identifier `decimalNumber` has already been declared. this error shows that identifier has already been declared and we can not redeclare it again.The identifier `decimalNumber` declared in parameter.//

// Finally, correct the code to fix the problem
// =============> write your new code here
// function convertTopercentage(decimalNumber) {
// const percentage = `${decimalNumber * 100}%`;
// return percentage;
// }
// console.log(convertTopercentage(0.5));//
