// Predict and explain first...

// =============> write your prediction here
// I predict that this will print: "The sum of 10 and 32 is undefined"
// because the function has a return statement with no value.

// Explanation:
function sum(a, b) {
  return;
  a + b;
  // =============> write your explanation here
  // The `return;` statement ends the function early, so `a + b` is never reached.
  // In JavaScript, any code after a bare `return;` is ignored (unreachable code).
  // That's why the function returns `undefined`, not the actual sum.
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
// Now the function returns the correct result: 42

