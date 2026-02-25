// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;


// we already have a parameter "decimalNumber" which has been declared in the function. declaring it again with constant is going to give syntax error.
// Also the console.log is trying to print "decimalNumber" which only exist in a function that is outside its scope.=============> write your explanation here

// Finally, correct the code to fix the problem



function convertToPercentage(decimalNumber) {
  
   const percentage = `${decimalNumber * 100}%`;
   return percentage;

}

console.log(convertToPercentage(0.5));// =============> write your new code here
