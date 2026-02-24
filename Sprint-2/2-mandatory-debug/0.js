// Predict and explain first...

// ===========> write your prediction here
// Prediction: The output sentence will say "... is undefined" because the multiply function does not return a value.

function multiply(a, b) {
  // We removed console.log and added 'return' so the function gives the result back
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// ===========> write your explanation here
// Explanation: Without a 'return' statement, a function evaluates to 'undefined'. To use the result of the calculation inside the template literal string, the function MUST return it.

// Finally, correct the code to fix the problem
// ===========> write your new code here
// The fixed code is written above. We changed 'console.log(a * b)' to 'return a * b'.
