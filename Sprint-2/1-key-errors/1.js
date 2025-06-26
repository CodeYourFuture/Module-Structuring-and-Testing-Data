// Predict and explain first...
it will bring an SyntaxError message because the 'decimalNumber' has already been declared by function, 
Declaring const decimalNumber again inside the function is not accepted by javascript
// Why will an error occur when this program runs?
// =============> write your prediction here
SyntaxError: Identifier 'decimalNumber' has already been declared.
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
The function convertToPercentage takes a parameter decimalNumber, Multiply it by 100 and result should be in "%" 
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(0.5));