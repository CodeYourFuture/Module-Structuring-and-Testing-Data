// Predict and explain first...

// =============> write your prediction here
// The console will output two lines.
//    1. `320` (from inside the multiply function)
//    2. Second line: `The result of multiplying 10 and 32 is undefined`
// This is because the `multiply` function logs the result but does not return it, as functions that do not explicitly return a value return `undefined` by default.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The bug occurs because the `multiply` function uses `console.log()` to display the result instead of using the `return` keyword.
// When the function call is placed inside the template literal, it resolves to its return value, which is `undefined`.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiplyFixed(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiplyFixed(10, 32)}`);
