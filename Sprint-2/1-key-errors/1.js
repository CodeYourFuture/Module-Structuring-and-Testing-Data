// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
// const decimalNumber = 0.5;
// The above line will cause an error because 'decimalNumber' is being redeclared with 'const'
// after it has already been defined as a parameter of the function.
// This will result in a SyntaxError: Identifier 'decimalNumber' has already been declared.
//  it is trying to declare a new constant variable with the same name as the parameter of the function: decimalNumber
// const percentage = `${decimalNumber * 100}%`;
// The above line correctly converts the decimal number to a percentage by multiplying it by 100
// and appending a '%' sign.
// However, the function will not execute due to the redeclaration error.

//   return percentage;
// // }

// console.log(decimalNumber);
// console.log(decimalNumber) outside the function — but decimalNumber was only defined inside the function.
// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
// =============> write your explanation here
// The function now correctly takes a decimal number as input, converts it to a percentage by multiplying it by 100,
// and returns the result as a string with a '%' sign appended. The redeclaration error has been fixed by removing the
// unnecessary declaration of 'decimalNumber' inside the function. The function can now be called with a decimal number,
// and it will return the corresponding percentage string.
console.log(convertToPercentage(0.5)); // "50%"

// The function now works correctly and returns the expected output without any errors.
