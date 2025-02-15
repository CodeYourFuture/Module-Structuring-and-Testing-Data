// Predict and explain first...
//  =============> write your prediction here
// Answer: we will have am error message, because the return statement has no value
// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// the return statement is not returning the sum of a and b, it is returning undefined. The code will not run the sum function and will return undefined. The expression should be in the same line of return statement.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);