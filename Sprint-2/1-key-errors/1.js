// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
The error will occur because the variable `decimalNumber` is being declared twice in 
the same scope.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

An error will occur because the variable `decimalNumber` is being declared twice 
in the same scope. The first declaration is in the function parameter, 
and the second declaration is inside the function body. This will cause a 
"SyntaxError: Identifier 'decimalNumber' has already been declared" error.


// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
