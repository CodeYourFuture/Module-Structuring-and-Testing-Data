// Predict and explain first...
//  =============> write your prediction here
//My perdiction the code will show "undefined" becuse the function does not return the sum numbers.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The return statemment is ematy and the "c=b" is written after return.
//When JavaScript see return it stops the function, so a+b is never used.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
