// Predict and explain first...

// =============> Prediction:
// The program will print "The sum of 10 and 32 is undefined"
// because the function returns nothing due to the 'return;' line.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> Explanation:
// 1. In JavaScript, as soon as the function hits 'return;' it stops and returns undefined.
// 2. The line 'a + b;' is never reached because it's after the return statement.
// 3. Therefore, the function does not actually return the sum.

// =============> Corrected Code:
// We need to return the sum directly.

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
// Output: "The sum of 10 and 32 is 42"
