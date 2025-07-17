// Predict and explain first...
//  =============> write your prediction here
// The output should be `The sum of 10 and 32 is undefined` given that the `return;` statement is on a line by itself before the actual calculation.
// This should cause the function to exit and return `undefined`.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The `return` keyword immediately stops the execution of a function and returns a value.
// Here, `return;` is called without a value, so the function exits and returns `undefined`.
// As a result, the line `a + b;` is never executed.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sumFixed(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sumFixed(10, 32)}`);
