// Predict and explain first...
//  =============> write your prediction here
// PREDICTION: The function will not return the sum because the return statement is placed before the actual addition operation.

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The return statement is placed before the addition operation, so the function will return undefined instead of the sum.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);