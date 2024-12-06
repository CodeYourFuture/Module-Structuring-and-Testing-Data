.exit// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

//There is something wrong with our syntax. What is happening is that the expression in our function parameters shares the same name as the variable declared inside of the function. That is why we are getting an error
//Fixed solution
 function convertToPercentage(decimal) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
let result = convertToPercentage();
console.log(result);



