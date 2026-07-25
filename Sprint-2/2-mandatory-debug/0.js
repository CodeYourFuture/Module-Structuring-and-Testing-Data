// Predict and explain first...

// Prediction: The function will print 320, but the final message will show "undefined".

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Explanation: The original function used console.log() instead of return. console.log() displays the result on the screen but does not return a value, so the function returned undefined. Changing console.log() to return fixes the problem.

// Finally, correct the code to fix the problem
// =============> write your new code here
