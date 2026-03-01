// Predict and explain first...
//  =============> write your prediction here
// The function will return undefined because the return statement
// is followed by a line break. JavaScript inserts a semicolon automatically,
// so the function exits before a + b is executed.

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The return statement is on its own line.
// JavaScript automatically inserts a semicolon after return.
// This means the function returns undefined immediately,
// and the expression a + b is never executed.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);