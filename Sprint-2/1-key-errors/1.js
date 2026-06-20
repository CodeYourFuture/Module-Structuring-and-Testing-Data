// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
/*When this program runs, there will be two errors: the function redeclares decimalNumber,
and decimalNumber is used in console.log even though it is not defined outside the function.*/

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);*/

// =============> write your explanation here
// When I run this code, I get a SyntaxError because decimalNumber is already declared inside the function.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(0.5));
console.log(convertToPercentage(0.45));
