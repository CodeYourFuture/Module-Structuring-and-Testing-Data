// Predict and explain first...
//  =============> write your prediction here
// The console will print: "The sum of 10 and 32 is undefined"
// This happens because the `return` statement ends the function immediately,
// so the expression `a + b` after it is never executed. 
// As a result, the function returns `undefined`.

/**
function sum(a, b) {
  return;
  a + b;
}


console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/

// =============> write your explanation here
// In JavaScript, when the interpreter encounters a `return` statement, 
// it stops executing the rest of the function and immediately exits. 
// Since there’s nothing after `return` on the same line, 
// the function effectively returns `undefined`.
// The expression `a + b` is never reached due to JavaScript’s automatic semicolon insertion.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
// Output: "The sum of 10 and 32 is 42"

