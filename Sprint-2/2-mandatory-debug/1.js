// Predict and explain first...

//  =============> Prediction:
// The code will not throw an error, but the output will be `undefined`
// because the `sum` function does not return a value. 

/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/

// =============> Explanation:
// The output is `undefined` because the `sum` function has a `return` statement
// that does not return any value. The line `a + b;` is unreachable code because
// the function exits immediately after the `return` statement. 
// Therefore, the function does not compute or return the sum of `a` and `b`.

// Finally, correct the code to fix the problem
//  =============> Solution:
// The `return` statement should return the sum of `a` and `b`.
// Corrected code:

function sum(a, b) {
  return a + b;
} 

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
// Output: The sum of 10 and 32 is 42 
