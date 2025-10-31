// Predict and explain first...
//  =============> SyntaxError will occur due to putting a semicolon after return.

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> unlike the expectation that the code runs without error as 'the sum of 10 and 32 is undefined'.
// Finally, correct the code to fix the problem
//  =============> write your new code here
// we needed just to remove the semicolon after return statement and to bring up the a+b expression side by side with return.