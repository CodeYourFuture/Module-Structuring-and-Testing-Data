// Predict and explain first...
//  =============> write your prediction here
// return statement doesn't have a value. so the returned value will be undefined.
// a + b never gets executed, and if it did, it wouldn't give any result because it only calculates the sum, it doesn't return it or save it anywhere.
// function sum(a, b) {
//   return;
//   a + b;
// }
//
// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
//
// =============> write your explanation here
// The output is: The sum of 10 and 32 is undefined
// This is because the return statement doesn't have a value, so the returned value is undefined.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
