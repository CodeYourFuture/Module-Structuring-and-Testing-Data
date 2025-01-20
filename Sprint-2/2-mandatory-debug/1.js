// Predict and explain first...
// The function execution stops immediately after the return command,and no value is returned.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// To return from function we need to have what return. In that case i moved a+b as a value.
// Finally, correct the code to fix the problem
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
