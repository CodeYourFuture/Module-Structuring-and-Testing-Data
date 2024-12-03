// Predict and explain first...

//This function will return 50% regardless of the input given to the function because it is given as a constant
//console.log wont run because it is calling a local variable, which is only available to the function.

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on
const decimalNumber = 0.5;
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage(decimalNumber));

console.log(convertToPercentage(0.67));
//WHAT I UNDERSTAND:
//decimalNumber has already been declared, use another variable
//we have to take in a parameter called decimal value, not declare it within our function
//also we actually need to console an actual decimal value not just the variable name.

//GPT:
//Better explained by GPT: This code will throw an error because the parameter decimalNumber is re-declared as a constant inside the function, which is not allowed in JavaScript. Function parameter: The function takes decimalNumber as a parameter. Re-declaration: Inside the function, const decimalNumber = 0.5; tries to re-declare the same decimalNumber identifier, which causes a SyntaxError since you cannot re-declare a parameter within its scope.