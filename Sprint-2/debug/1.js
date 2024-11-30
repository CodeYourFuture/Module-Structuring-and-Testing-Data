// Predict and explain first...

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// The line return; ends the function sum early, so anything written after it(like a + b; will not run, this means the function returns undefined
// To fix this we move a + b after return

function sum(a, b) {
  return a + b;
}
