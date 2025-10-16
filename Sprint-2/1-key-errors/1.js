// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// Prediction
// An error will occur when the program runs because a variable cannot be redeclared.
// The parameter "decimalNumber" is already a declared variable, so it cannot be redeclared again using const decimalNumber = 0.5; inside the same function.


// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  //const percentage = `${decimalNumber * 100}%`;

  //return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here
// Explanation
//function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  //const percentage = `${decimalNumber * 100}%`;

  //return percentage;
//}

// When the script starts, JavaScript defines the function convertToPercentage, but it doesn’t run it yet.
// This means that nothing is executed inside the function; only the function itself is stored in memory.

// console.log(decimalNumber);
// At this point, JavaScript looks for a variable called decimalNumber in the current scope (the global scope), but none exists. 
// We only declared decimalNumber as a parameter inside the function (which hasn’t been called yet).
// Result: Because decimalNumber isn’t defined globally, JavaScript will throw an error
// At this point, JavaScript looks for a variable called decimalNumber in the current scope (the global scope).
// But none exists — we only declared decimalNumber as a parameter inside the function (which hasn’t been called yet).
// Error message: "SyntaxError: Identifier 'decimalNumber' has already been declared"

// Finally, correct the code to fix the problem
// =============> write your new code here

decimalNumber = 0.5;
function convertToPercentage(decimalNumber) {
  
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

const actualOutput = convertToPercentage(15);
console.log(actualOutput);
console.log(decimalNumber);