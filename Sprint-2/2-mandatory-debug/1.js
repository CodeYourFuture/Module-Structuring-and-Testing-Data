// Predict and explain first...
//  =============> Return being by it self and just ending with a ; is definitely just going to return nothing.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> Return is not returning the a + b because it is cut off by the ; and on a different line.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);