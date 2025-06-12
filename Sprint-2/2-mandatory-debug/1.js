// Predict and explain first...
//  =============> will get a syntax error

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> the return statement is void and not connected with the expression
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);