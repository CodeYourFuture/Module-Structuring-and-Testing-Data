// Predict and explain first...
//  =============> write your prediction here
// Martin response - I expect this to return a blank value as there is a return statement, with no expression;

function sum(a, b) {
  return;
  a + b;
}

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// Martin response - the value returned is undefined because the return statement is return with no expression;
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
