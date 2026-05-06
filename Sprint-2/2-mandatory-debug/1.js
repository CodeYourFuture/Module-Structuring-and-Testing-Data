// Predict and explain first...
//  =============> write your prediction here
// the output of console log should be 'The sub of 10 and 32 is undefined'

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// since the return statement is the first thing in the function body, and it returns nothing.
// the return value of the function is undefined.
// so in the console log, it will coerce undefined to string, and print that.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
