// Predict and explain first...
//  =============> write your prediction here==> Within the function, the sum of the parameters comes
// after the return statement has been closed. The function will not return anything, and "a" and "b"
// are summed up but are not held in any variable.

/* function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); */

// =============> write your explanation here==> The literal function was printed as "undefined" because
// the return statement was closed with nothing next to it.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
console.log(`The sum of 5 and 6 is ${sum(5, 6)}`);