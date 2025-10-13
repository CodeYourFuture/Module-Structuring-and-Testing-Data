// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here : The variable decimalNumber has been declared.

// Try playing computer with the example to work out what is going on

// The old code :
/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/

// =============> write your explanation here :
/*
-The variable decimalNumber has been declared within the function as a parameter then declared again using const.
- The variable decimalNumber should be defined first.
*/
// Finally, correct the code to fix the problem
// =============> write your new code here

//The correct code :
const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}


console.log(convertToPercentage(decimalNumber));
