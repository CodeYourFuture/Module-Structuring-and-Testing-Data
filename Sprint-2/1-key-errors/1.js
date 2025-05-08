// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
  // There will be an error message 
// 
// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  //const percentage = ${decimalNumber * 100}%;

  //return percentage;}

// =============> write your explanation here
// the "decimalNumber" variable was declared twice in the code

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.3));