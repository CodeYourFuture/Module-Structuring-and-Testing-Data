// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// decimal number has been declared in the funcion scope as a param
// and is not accessible outside of the function scope to console.log it will throw an error

// Try playing computer with the example to work out what is going on
decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
console.log(convertToPercentage(decimalNumber));

// =============> write your explanation here
// decim alNumber has to be availabke outside of the function scope to log its value

// Finally, correct the code to fix the problem
// =============> write your new code here
console.log(decimalNumber);
