// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
//There are two errors in the code. Firstly the variable decimalNumber is being used as a parameter to the function but is then  redeclared in the function. Secondly the console log is trying to access a variable that is not in its scope.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
//line 9 creates a a new variable called decimal number, then on line 10 the code attempts to declare a new variable with the same name and thus a syntax error is thrown.

// Finally, correct the code to fix the problem
// =============> write your new code here
const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}

console.log(decimalNumber);
