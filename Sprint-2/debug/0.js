// Predict and explain first...

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// The function multiply(10, 32) logs 320 but returns undefined.
// The template literal prints "undefined" because the multiply function does not return a value.
