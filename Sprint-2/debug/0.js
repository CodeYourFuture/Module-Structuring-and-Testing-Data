// Predict and explain first...

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// The console will log 320 as we have console.log(a*b), followed by "The result of multiplying 10 and 32 is undefined"
// This is happening because the function does not return any value. 