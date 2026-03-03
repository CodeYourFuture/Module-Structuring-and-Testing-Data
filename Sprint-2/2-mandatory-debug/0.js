// Predict and explain first...

// =============> write your prediction here
// I predict that the error will be a ReferenceError because the function `multiply` does not return any value, so when we try to use it inside the template literal, it will return `undefined`.  This will cause the output to be "The result of multiplying 10 and 32 is undefined" instead of the expected product of 10 and 32.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The error occurs because the `multiply` function does not return a value; it only logs the result to the console. When we use `multiply(10, 32)` inside the template literal, it evaluates to `undefined` since there is no return statement in the function. To fix this, we need to add a return statement to the `multiply` function so that it returns the product of `a` and `b` instead of just logging it.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}