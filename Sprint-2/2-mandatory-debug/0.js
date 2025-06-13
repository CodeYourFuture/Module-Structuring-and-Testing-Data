// Predict and explain first...

// =============> write your prediction here
// The code will log the result of multiplying 10 and 32, but it will not return a value from the multiply function.
// The function multiply will log the product of a and b, but it will not return any value.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function `multiply` logs the product of `a` and `b`, but it does not return a value.
// This means that when we try to log the result of `multiply(10, 32)`, it will log `undefined` because the function does not return anything.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b; // Change console.log to return
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); // This will now log the correct result
