// Predict and explain first...

// Why will an error occur when this program runs?
=============> write your prediction here: the error will occur because the variable decimslNumber gevine a value of 0.5
 with a const declaration and this will make an error if the brograme given a diffrent value for the decimalNumber.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here 
when the program run it give a SyntaxError: Identifier 'decimalNumber' has already been declared. This is because the variable decimalNumber is declared twice in the function
convertToPercentage.
  Also using the function name decimalNumber with the console.log function will give an error because the function name should be a prober name not a Number.
to fix this error we can remove the const variable declaration of decimalNumber from the function and use the function name
  'ConvertToPercentage' to recall the function and pass the value of the decimalNumber.CSSStyleDeclaration

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));