// Predict and explain first...
// The issue is that return is on one line and a + b is on the next.
// Therefore, a + b is never returned.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// After running the code, the sum of 10 and 32 is undefined.
// JavaScript inserts a semicolon after return when a + b is placed on the next line.
// This causes the function to return before calculating the sum.

// Finally, correct the code to fix the problem
//  function sum(a, b) {
//    return a + b;
//  }
