// Predict and explain first...
//  Since the function stops executing after the return statement, we won't get any result from the code written after it.
//  The computer will not see or run the code that comes after return.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// new code :
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
