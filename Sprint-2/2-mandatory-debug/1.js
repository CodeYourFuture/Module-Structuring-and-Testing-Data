// Predict and explain first...
//  =============> write your prediction here
// The output will be "The sum of 10 and 32 is undefined" because the 
// function sum does not return the result of a + b. The return
// statement is empty, so it returns undefined by default.

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// In JS, when a function has a return statement without a value,
// it returns undefined. The expression a+b on the next line is
// never reached. Fix -> put a+b on the same line as return,
// or remove the return statement and just have a+b as the last line
// of the function.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);