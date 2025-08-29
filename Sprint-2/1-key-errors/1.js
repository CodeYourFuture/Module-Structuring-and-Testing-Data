// Predict and explain first...
// =============> write your prediction here
//   I predict this program will throw a `SyntaxError` because 
// the parameter `decimalNumber` is being redeclared inside the function using `const`. 
// Also, the variable `decimalNumber` is being accessed outside the function where it's not defined.


// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// The function already has a parameter named `decimalNumber`, 
// but inside the function, it's trying to declare another 
// constant with the same name: `const decimalNumber = 0.5;`. 
// JavaScript doesn’t allow redeclaring a variable that already exists in the same scope.  
// Also, `console.log(decimalNumber)` is outside the function and `decimalNumber` is not 
// defined in the global scope, so that will cause a `ReferenceError`.


// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); 
