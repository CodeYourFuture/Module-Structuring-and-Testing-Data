// Predict and explain first...
//  =============> write your prediction here
// there will be an error because return should not have semicolon which is the end of the declaration and a+b should be with it together.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// it is undefined because it stopped reading at return;
// Finally, correct the code to fix the problem
//  =============> write your new code here.
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
