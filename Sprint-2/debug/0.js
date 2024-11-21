// Predict and explain first...
// The code will give an error because we are trying to nest console.log into another console.log
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
