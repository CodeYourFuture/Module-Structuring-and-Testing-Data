// Predict and explain first...
// The program will log: "The sum of 10 and 32 is undefined"
// because the function `sum` returns nothing — the `a + b` line is unreachable.
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// The `return` statement is on its own line, so the function exits before executing `a + b`.
// In JavaScript, a `return` without a value returns `undefined`, and the line after is ignored.
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);