// Predict and explain first...
//  =============> write your prediction here
// It will be print: The sum of 10 and 32 is undefined

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// In the function, the return; on line 6 stops the function before it reaches a + b on line 7.
// So nothing is returned — that's why the result is undefined.
// When to write return; with a semicolon and put the next line on a new line, the function ends early and ignores everything after it.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
