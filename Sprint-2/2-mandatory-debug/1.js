// Predict and explain first...
//  =============> write your prediction here
// Prediction: The code should output - "The sum of 10 and 32 is 42"
// But the code will return undefined instead of 42.

/* Original code
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/

// =============> Error message
// The sum of 10 and 32 is undefined

// =============> write your explanation here
// MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return

// The function uses `return;` without an expression.
// According to MDN, if a return statement has no value, the function returns undefined.
// So when `sum(10, 32)` is called, it returns undefined.
// To fix this, the return statement must include the expression `a + b`.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum (a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);