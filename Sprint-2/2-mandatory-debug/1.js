// Predict and explain first...
//  =============> write your prediction here
// I predict that the error will be a ReferenceError because the function `sum` does not return any value, so when we try to use it inside the template literal, it will return `undefined`.  This will cause the output to be "The sum of 10 and 32 is undefined" instead of the expected sum of 10 and 32.
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The error occurs because the `sum` function does not return a value; it only has a return statement without any expression. When we use `sum(10, 32)` inside the template literal, it evaluates to `undefined` since there is no return value from the function. To fix this, we need to return the result of `a + b` instead of just having a return statement with no value.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
} 