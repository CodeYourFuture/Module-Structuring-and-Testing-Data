// Predict and explain first...
//  =============> write your prediction here
// the code will throw an error because the operation a + b is outside the return syntax.

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The code will throw an error because the return statement is not followed by any value. The function `sum` is expected to return the result of adding `a` and `b`, but since the return statement is immediately followed by a semicolon, it effectively returns `undefined`. This leads to an incorrect output when trying to log the result of the sum operation.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b; // Corrected to return the sum of a and b
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);