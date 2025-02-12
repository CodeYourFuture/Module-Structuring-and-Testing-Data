// Predict and explain first...
//  =============> write your prediction here
// We are going to have an error on line 6, because the return statement is not returning the sum of a and b, it is returning undefined. The code will not run the sum function and will return undefined.
// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// the return statement is not returning the sum of a and b, it is returning undefined. The code will not run the sum function and will return undefined. The expression should be in the same line of return statement.
// function sum(a, b) {
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);


