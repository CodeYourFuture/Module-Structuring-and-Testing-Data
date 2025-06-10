// Predict and explain first...

// Why will an error occur when this program runs?
/* =============> write your prediction here: because on line 11 decimalNumber isn't between 2 curly brackets,also
decimalNumber already used as parameter so it can't be declared again inside the function*/

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  //decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(7));//ReferenceError: decimalNumber is not defined
console.log(convertToPercentage(0.5));
// =============> write your explanation here

// Finally, correct the code to fix the problem
 =============> write your new code here:*/
function convertToPercentage(decimalNumber) {
decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage());