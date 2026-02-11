// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// I predict this will throw a SyntaxError because
// the parameter 'decimalNumber' is redeclared
// using const inside the function


// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;
//   return percentage;
// }

// console.log(decimalNumber);


// =============> write your explanation here

// This code throws a SyntaxError: Identifier 'decimalNumber' has already been declared.
// The function already has a parameter called 'decimalNumber'
// Declaring 'const decimalNumber' inside the function
// redeclares the same variable in the same scope,
// which JavaScript does not allow.
//
// Also, console.log(decimalNumber) will cause a ReferenceError
// because decimalNumber is not defined outside the function.


// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));

