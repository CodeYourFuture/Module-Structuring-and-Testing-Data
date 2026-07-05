// Prediction: The sum will print "undefined" because return; exits the function
// immediately without a value, so a + b is never evaluated.
// Explanation: return; with no expression returns undefined. The a + b on the next
// line is unreachable dead code.
// Fix: put a + b on the same line as return.

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
