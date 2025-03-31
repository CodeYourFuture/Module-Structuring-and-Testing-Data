// Predict and explain first...
//  =============> The code is trying to return the sum of two numbers, but it will throw an error when it runs. Specifically, it will result in a SyntaxError or ReferenceError
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> The code is trying to sum two numbers, but it will throw an error when it runs. Specifically, it will result in a SyntaxError or ReferenceError. This is because the return statement is followed by a semicolon, which ends the statement and prevents the code after it from running. This means that the function doesn't return a value, so it returns undefined by default.
// Finally, correct the code to fix the problem
//  =============> function sum(a, b) {
  return a + b; // Ensure the return statement is on the same line as the expression
//}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

