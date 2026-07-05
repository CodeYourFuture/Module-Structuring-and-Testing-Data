// Prediction: The template literal will print "undefined" for the function result because
// multiply uses console.log internally but does not return a value (returns undefined).
// Explanation: Functions without a return statement return undefined.
//              The outer console.log then interpolates undefined into the string.
// Fix: replace console.log inside multiply with a return statement.

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
