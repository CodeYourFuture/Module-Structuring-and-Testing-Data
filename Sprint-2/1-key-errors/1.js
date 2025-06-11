// Predict and explain first...

// Why will an error occur when this program runs?

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//  return percentage;
//}

// console.log(decimalNumber);

// On my opinion there will be error message because decimalNumber is
// a local function variable. But console.log() tis trying to use it like an outside variable.
// but we are trying to assign it as variable on Line 10. The function parameter can't be redeclaring as a new variable.
// When I run the file, the eSyntaxError jumped up. SyntaxError: Identifier 'decimalNumber' has already been declared

// Finally, correct the code to fix the problem

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
