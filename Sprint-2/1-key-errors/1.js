// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// The program will give an error because of the `decimalNumber` is used outside the function.
// Even though it is only created inside the function.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

//The variable `decimalNumber`is only insdie the function.
// At the end of the program, console.log( decimalNumber) tries to print it ,
// however, JavaScript cannot find that varible outside the function.
// Because of this, the program throws an error.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertTopercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(0.5));
