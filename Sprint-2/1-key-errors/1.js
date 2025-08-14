// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
//// The variable decimalNmber has been declared twice once as a parameter for convertToPercentage
// function and the second time inside the function
// Try playing computer with the example to work out what is going on
/* 
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber); */

// =============> write your explanation here
//The function convertToPercentage(decimalNumber) accepts a parameter decimalNumber
//Inside the function, ywe have decimalNumber redeclared using const decimalNumber = 0.5;, which creates a conflict
// Finally, correct the code to fix the problem
//we should remove the redeclaration of decimalNumber inside the function. Instead, use the parameter directly.and then
//pass a decimal number as input => 0.5 in the function call

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const result = convertToPercentage(0.5); 
console.log(result); // Output => "50%"