// Predict and explain first...

// ==============> This will print "320" first (from inside the function), then print "The result of multiplying 10 and 32 is undefined", because multiply() doesn't return a value - it only logs it.

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// ==============> The function was using console.log to display the answer, instead of returning it. This meant when the outer console.log tried to use the value from multiply(10, 32), it got undefined instead of the actual number, since the function returned nothing.

// Finally, correct the code to fix the problem
// ==============> function multiply(a, b) {
//   return a * b;
// }
