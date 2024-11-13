// Predict and explain first...

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// Line4:This function contains a return; statement on the first line. In JavaScript, encountering return without a value ends the function and returns undefined.
// Output: The sum of 10 and 32 is undefined
// Fixed code:
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);