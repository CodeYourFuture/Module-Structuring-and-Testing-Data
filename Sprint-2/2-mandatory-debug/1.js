// Predict and explain first...
//  =============> write your prediction here
// # The function `sum` is expected to return the sum of `a` and `b`, but it will not work as intended.
// # The return statement is placed before the expression, causing the function to return `undefined`.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// # The function `sum` has a return statement that is placed before the expression `a + b`, which means it will return `undefined`.
// # As a result, when we try to log the result of `sum(10, 32)`, it will log `undefined` instead of the expected sum.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b; // Move the return statement to return the sum of a and b
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); // This will now log the correct result
