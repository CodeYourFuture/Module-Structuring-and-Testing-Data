// Predict and explain first...
// ===========> write your prediction here
// Prediction: The output will say "... is undefined" because the function returns nothing before it even calculates the sum.

function sum(a, b) {
  // We fix the error by putting the expression on the SAME line as the 'return' keyword.
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// ===========> write your explanation here
// Explanation: In JavaScript, if you put a line break immediately after the 'return' keyword, it acts as 'return;' and stops the function, returning 'undefined'. The expression 'a + b' must be on the same line.

// Finally, correct the code to fix the problem
// ===========> write your new code here
// The fixed code is written above. I moved 'a + b' to the same line as 'return'.
