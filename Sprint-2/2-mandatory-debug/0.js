// Predict and explain first...

// The result of multiplying 10 and 32 is expected to be undefined because the multiply() function does not return the result.
// It only prints it using console.log().

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// After running the code, the result of multiplying 10 and 32 is undefined indeed.
// The problem occurs because the function has no return statement to send a value back to where the function was called.

// Finally, correct the code to fix the problem
//  function multiply(a, b) {
//  return a * b;
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
