// Predict and explain first...
//  =============> The sum of 10 and 32 is undefined because the function returns nothing

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> The problem is that the semicolon after return ends the function immediately. This means that a + b never runs, so the function returns undefined instead of the sum
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
