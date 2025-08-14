// Predict and explain first...
//  =============> write your prediction here
// There'll be an undefined error in final output.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The sum operation comes after the return statement, but because there's a semicolon after (return;)
// the function stops before it gets to the 'a + b' sum. This means nothing is returned, so the result is undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
