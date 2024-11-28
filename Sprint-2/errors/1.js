// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
let decimalNumber = convertToPercentage(0.5); // The decimalNumber variable was declared inside the function, which makes it inaccessible outside the function's scope. I declared the decimalNumber variable and returned the value of the percentage variable.
console.log(decimalNumber);


