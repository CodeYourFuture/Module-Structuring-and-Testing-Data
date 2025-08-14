// Predict and explain first...
//  =============> The syntax of the function `sum` is incorrect.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> "a + b" should be on the same line as the return statement.

// Finally, correct the code to fix the problem
//  =============> Here's the new code:
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
