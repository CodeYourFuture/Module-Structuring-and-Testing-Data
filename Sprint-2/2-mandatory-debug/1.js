// Predict and explain first...
//  =============> write your prediction here
// This code will output:
// The sum of 10 and 32 is undefined
// because the sum function does not return a value.
// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The sum function does not return a value because the return statement is immediately followed by a semicolon.
// This means the function exits before it can execute the a + b expression.

// Finally, correct the code to fix the problem
function sum(a, b) {
  return a + b; // Corrected to return the sum of a and b
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); // Output: The sum of 10 and 32 is 42
//  =============> write your new code here
