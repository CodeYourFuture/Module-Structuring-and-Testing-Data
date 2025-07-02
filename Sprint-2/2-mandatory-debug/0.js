// Predict and explain first...

// It will log: "320", followed by: "The result of multiplying 10 and 32 is undefined"
// The original multiply function only printed the result but did not return it.
// When used inside a template string, it returned undefined because there was no return value.
// To fix this, we add a return statement to send back the multiplication result.

function multiply(a, b) {
  return a * b;
}
// Now the function returns the correct value, so the output will be:

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
