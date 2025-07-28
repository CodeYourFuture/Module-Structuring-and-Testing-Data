// Predict and explain first...

// =============> write your prediction here
//The code will be undefined because the "console.log(a * b)" function
// will not return a value, rather it will only log a result.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The `multiply` function is designed to log the product of `a` and `b` 
// to the console, but it does not return any value.
// When `multiply(10, 32)` is used inside the template string, 
// it shows `undefined` because the function does not return anything.
// As a result, the console will first display 320 from inside the function,
// and then print; "The result of multiplying 10 and 32 is undefined".

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);