// Predict and explain first...

// =============> write your prediction here
// There should be a result of multiplying 10 and 32.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// multiply(10, 32) runs, prints 320 to the console (because of console.log(a * b) inside the function), he outer console.log(...) prints: undefined message
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);