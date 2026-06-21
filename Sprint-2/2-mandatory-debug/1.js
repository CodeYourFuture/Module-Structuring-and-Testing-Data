// Predict and explain first...
// I predict this will show 'undefined' because the function doesn't return a value.
/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/
// The function returns 'undefined', so the template literal displays 'undefined'.
// Finally, correct the code to fix the problem
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
