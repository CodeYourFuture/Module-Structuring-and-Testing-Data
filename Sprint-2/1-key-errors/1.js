// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
   // i predict that the error will be a syntax error because the variable decimalNumber is being declared twice, once as a parameter and once inside the function body  
// Try playing computer with the example to work out what is going on
/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/
// =============> write your explanation here
  // removing the const keyword would fix this error, for the function to work properly.
// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {  
  decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
let converted = convertToPercentage(0.5);
console.log(converted);