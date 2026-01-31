// Predict and explain first...
//  =============> write your prediction here
// The function sum does not return any value because of the misplaced semicolon after return.

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The function sum has a return statement followed by a semicolon, which causes the function to return undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
