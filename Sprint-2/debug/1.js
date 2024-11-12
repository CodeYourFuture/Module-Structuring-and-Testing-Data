// Predict and explain first...
// 〰️ The program isn’t behaving as intended because of the placement of the return statement in the sum function.
// 〰️ When the return keyword is used, it immediately exits the function, so no code after return is executed.
// 〰️ In the sum function, there’s a return statement followed by a line with a + b, but since return is on its own line and isn’t followed by any expression on the same line, the function exits right after the return statement, effectively returning undefined.
// 〰️ The line a + b; is ignored because it’s unreachable due to the return statement above it.

function sum(a, b) {
  return a + b;  // Return the sum directly
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
