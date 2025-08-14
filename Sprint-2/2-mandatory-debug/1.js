// Predict and explain first...
//  =============> write your prediction here there is no thing after return in the function sum so it will return undefined.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// the output is:
// The sum of 10 and 32 is undefined
// there is no return in sum function so it will return undefined
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);