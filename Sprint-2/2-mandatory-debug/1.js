// Predict and explain first...
//  =============> write your prediction here
// When the code is run the console log will show undefined because the function returns before the sum is calculated
// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
  // When a return statement is reached the function exits immediately. Therefore the line a + b is never executed and the function returns undefined.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
