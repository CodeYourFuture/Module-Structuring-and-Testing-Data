// Predict and explain first...
//  =============> i think there will be and error message because at doesn't show what value to return so it will be undefined.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// ============= it should be in the same line after return statement to return the value
// Finally, correct the code to fix the problem
//  =============> corrected code:
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
