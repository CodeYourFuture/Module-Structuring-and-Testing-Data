// Predict and explain first...
//  =============> write your prediction here

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
/// The code is expected to return undefined because the return statement 
// is placed before the actual addition operation. The function `sum` is 
// defined to take two parameters, `a` and `b`, but it does not return their 
// sum due to the misplaced semicolon after the `return` statement.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
