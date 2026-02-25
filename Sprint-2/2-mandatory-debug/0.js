// Predict and explain first...

// =============> write your prediction here
//It will print "320", followed by "The result... is undefined". The function lacks a return value.
/* Commented out the broken code:
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
// =============> write your explanation here
// `console.log` just prints to the screen. Without a `return` statement, the function evaluates to `undefined`, which gets injected into the template literal.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);