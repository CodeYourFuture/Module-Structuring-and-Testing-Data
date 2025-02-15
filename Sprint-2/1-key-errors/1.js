// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

/* The function parameter decimalNumber is already declared in the function signature.
Inside the function, we try to declare const decimalNumber again, which is not allowed in the same scope.*/

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// I deleted "const decimalNumber". And just call result. 

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
  const result = convertToPercentage(0.5);
console.log(result);
