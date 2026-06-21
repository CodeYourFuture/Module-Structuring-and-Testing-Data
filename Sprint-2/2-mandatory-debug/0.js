// Predict and explain first...

// I predict this will show 'undefined' because the function doesn't return a value.

/*
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
// The function doesn't return a value, so the template literal displays 'undefined'.

// Finally, correct the code to fix the problem
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
