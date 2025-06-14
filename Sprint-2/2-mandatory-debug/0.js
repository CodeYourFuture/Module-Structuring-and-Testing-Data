// Predict and explain first...

// It will log: "320", followed by: "The result of multiplying 10 and 32 is undefined"
// because the function `multiply` logs the result but doesn't return it.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// The `multiply` function only logs the result of a * b; it does NOT return the result.
// So when you call `multiply(10, 32)` inside the template literal, it returns `undefined`.
// That's why you get: "The result of multiplying 10 and 32 is undefined"

// Finally, correct the code to fix the problem
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);