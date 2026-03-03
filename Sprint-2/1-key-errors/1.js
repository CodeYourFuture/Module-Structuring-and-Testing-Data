// Predict and explain first...
// The functions takes a decimal number as input and converts it to percentage by multiplying by 100

// Why will an error occur when this program runs?
// =============> write your prediction here
// I suspect than an error will occur

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

//console.log(decimalNumber);
let test = convertToPercentage(0.5)
console.log(test);
