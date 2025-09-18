// Predict and explain first...
//  =============> write your prediction here
// It looks like the function sum return nothing because a+b is written in the next line after return statement.
// Therefore, the output should be "The sum of 10 and 32 is undefined".

/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/
// =============> write your explanation here
// After running the code, I got "The sum of 10 and 32 is undefined".
// The return statement ends the function execution and a+b is never evaluated.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); // should return "The sum of 10 and 32 is 42"
