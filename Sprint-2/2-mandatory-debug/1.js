// Predict and explain first...
//  =============> write your prediction here
// It will print "undefined". The 'return;' statement stops the function immediately before it even looks at 'a + b'.
/* Commented out the broken code:
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/
// =============> write your explanation here
// The 'return' keyword instantly exits the function. Since nothing is attached to it, it returns 'undefined'. The 'a + b;' line is dead code that never gets executed.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);