// Predict and explain first...
//  =============> write your prediction here

// I think the error will probably be because the return statement is not correctly placed in the function.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

// The message printed is "The sum of 10 and 32 is undefined". As the expression of the return statement is placed in a new line, it is not being executed.
// To allow the function to return the result of the sum, we need to place the expression in the same line as the return statement.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
