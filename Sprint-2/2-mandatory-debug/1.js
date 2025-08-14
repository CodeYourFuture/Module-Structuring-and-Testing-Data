// Predict and explain first...

// the function will return `undefined` because the `return` statement is empty and ends immediately.
// So, the output will be: "The sum of 10 and 32 is undefined"

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

/* In JavaScript, when the `return` statement is written with a semicolon immediately after it (`return;`),  
the function returns `undefined` and stops executing.  
The line `a + b;` is never calculated because it comes after the return.
so, the function doesn’t return the sum, and the string prints `undefined`. */

// Finally, correct the code to fix the problem

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
