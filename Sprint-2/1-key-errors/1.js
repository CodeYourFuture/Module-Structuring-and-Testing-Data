// Predict and explain first...
// Why will an error occur when this program runs?
// =============> write your prediction here
/*
I didn't run the code and first impression is we have decimalNumber input parameter, 
but in the function, it is declared and assign again. 
  If we remove const key word, the function will produce same solution for all different input. 
  If we change variable name, percentage will calculate with input but first declaration will not be used.
Additionally, in console.log function, decimalNumber is used but it is declared in convertToPercentage.
It cannot be used outside of function.
The function is never called, we should call in console.log
*/
// Try playing computer with the example to work out what is going on
/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/
// =============> write your explanation here
/*
There is an error in line 14,
SyntaxError: Identifier 'decimalNumber' has already been declared
*/
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(.05) );
