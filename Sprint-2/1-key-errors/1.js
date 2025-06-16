// Predict and explain first...

// Why will an error occur when this program runs?
/* We will get an error message for this code because the variable named decimalNumber is declared again inside the function, 
which causes a syntax error.Also, calling the function directly with console.log(decimalNumber) will cause an error because it
tries to access the decimalNumber parameter defined inside the function. Therefore, we need to define decimalNumber outside the 
function as well. */

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// correct cod:
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
const convertedNumber = convertToPercentage(0.2);
console.log(convertedNumber);
