// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
//decimalnumber  is first declared as a paremiter and then declared as a constant which is a syntax error
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);


// =============> write your explanation here
// decimalnumber is declared twice which is a syntax error, it will also return an error with the console.log call as decimal number is not defined outside of the convertToPercentage function
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
