// Predict and explain first...

// Prediction: The function will return undefined because the return statement ends before a + b is executed.

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// Explanation: In the original code, JavaScript automatically inserts a semicolon after `return` because it is on its own line. This means the function returns undefined immediately, and `a + b` is never executed.

// Finally, correct the code to fix the problem
// =============> write your new code here
