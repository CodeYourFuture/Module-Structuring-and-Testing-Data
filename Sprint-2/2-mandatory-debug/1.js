// Predict and explain first...
//  =============> write your prediction here
// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
// The output will be: The sum of 10 and 32 is undefined
// This is because the function returns immediately with no value, so a + b is never executed.

// =============> write your explanation here
// The return statement ends the function before a + b is calculated, so the function returns undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
