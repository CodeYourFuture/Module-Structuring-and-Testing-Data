// Predict and explain first...
//  =============> write your prediction here
// Answer
// I predict that calling sum(10, 32) will return `undefined`.
// This is because the `return` statement has a semicolon immediately after it, 
// so JavaScript interprets it as `return;` which evaluate to "undefined" when the function is called
// The expression `a + b` on the next line will never be executed.
// Therefore, any console.log using sum(10, 32) will display `undefined` in the output.


//function sum(a, b) {
  //return;
  //a + b;
//}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// Explanation
// function sum(a, b) {
// This declares a function named sum that takes two parameters: a and b.

// return;
// The return statement is immediately followed by a semicolon.
// This causes the function to exit immediately.
// Since nothing is returned explicitly, JavaScript returns undefined by default.

//   a + b;
// This line never executes because the function has already exited at the `return;` line.

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
// In this expression, sum(10, 32) is called.
// Because the function returns undefined, the template literal becomes: "The sum of 10 and 32 is undefined"
// That string is printed to the console.

// Finally, correct the code to fix the problem
// I will fix the error by placing the expression a + b on the same line as the return statement.
// Optionally, I can use parentheses around the expression, but this is not required.

//  =============> write your new code here

function sum(a, b) {
  return (a + b);
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);