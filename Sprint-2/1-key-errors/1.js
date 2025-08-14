// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============>const decimalNumber =0.5 is wrong because we can not redeclare parameter using const inside function. 
// what is more, decimalNumber is not defined in the global scope so we can not use console.log(decimalNumber)
    

// Finally, correct the code to fix the problem
// =============> 
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); // Output: "50%"

//or another concised code
function convertToPercentage(decimalNumber) {
  return`${decimalNumber * 100}%`;
}

console.log(convertToPercentage(0.5)); // Output: "50%"