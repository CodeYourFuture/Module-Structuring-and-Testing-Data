// Predict and explain first...
//  =============> write your prediction here
// The output of the code will be: undefined.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The function sum takes two arguments, a and b, and has a return statement that
// does not return any value. The line a + b is never executed because it comes after
// the return statement. Therefore, when we call sum(10, 32) inside the template literal,
// it will return undefined. As a result, the output of the console.log statement will be:
// "The sum of 10 and 32 is undefined".

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}