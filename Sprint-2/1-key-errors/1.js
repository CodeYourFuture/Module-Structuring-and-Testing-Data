// Predict and explain first...
//the program will run into an error because we declared one variable two times with in the same scope.

// Why will an error occur when this program runs?
// =============> it is because we are trying to redeclare the variable decimalNumber again

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
//we declared the variable decimalNumber twice in the function parameter and inside the function and this is not allowed in js
//variable declaration must be done once if it is with in the same scope.


// Finally, correct the code to fix the problem
/*
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.3));
*/
