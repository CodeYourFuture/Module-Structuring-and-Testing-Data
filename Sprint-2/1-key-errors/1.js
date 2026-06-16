// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// When trying to console.log(decimalNumber) we will occur an error  bcs the decimalNumber 
// was declared inside the function scop but console.log() is outside the function.


// Try playing computer with the example to work out what is going on
 
function convertToPercentage(decimalNumber) {
  
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

// =============> write your explanation here
// Also decimalNumber was declared as parameter in function.

// Finally, correct the code to fix the problem
// =============> write your new code here
