// Predict and explain first...
//  =============> write your prediction here
// Output: "The sum of 10 and 32 is undefined"
// Return statement has no value, so returns undefined. Expression "a + b" is unreachable code

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// Bug: return; exits immediately without a value (returns undefined). Code after return never executes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
