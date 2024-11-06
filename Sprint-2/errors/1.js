// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);*/
/*Answer: We’ve already used decimalNumber as a parameter of the function, and JavaScript doesn’t allow us to redeclare a parameter with the same name in the same scope (especially when using const or let). This causes a SyntaxError like:SyntaxError: Identifier 'decimalNumber' has already been declared. Because of the error in the declaration (const decimalNumber = 0.5;), the function never completes, and the rest of the code will not run as expected.

Additionally, console.log(decimalNumber); will also fail because decimalNumber is not defined outside the function scope (it only exists as a parameter inside the function).So,the correct one would be as below which the function is called with 0.5, and the result ("50%") is logged.*/
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(0.5))
