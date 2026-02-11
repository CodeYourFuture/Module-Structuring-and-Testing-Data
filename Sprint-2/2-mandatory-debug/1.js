// Predict and explain first...
//  =============> write your prediction here
// I think this might print undefined
// The return statement looks separate from a + b,
// so maybe the function is not actually returning the sum.


// function sum(a, b) {
//   return;
//   a + b;
// }
//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The function has 'return;' on its own line.
// When JavaScript sees return, it stops the function immediately.
// That means 'a + b' never runs.
// Because nothing is returned, the function returns undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

