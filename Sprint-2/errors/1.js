// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
//The parameter decimalNumber is already declared in the function then and then trying  to redeclare it inside the function.
//decimal number has been already decleard .
//in the last line we can not console.log decimal number directly 
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
const result = convertToPercentage(0.5);
console.log(result); 
