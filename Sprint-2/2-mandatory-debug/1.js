// Predict and explain first...
//  =============> write your prediction here
// in this code we have a function called sum that takes two parameters a and b,
// inside the function there is a return statement followed by a; and then an expression a + b;
// but in JavaScript, when a return statement is executed, the function exits immediately and any code after the return statement is not executed.
// so the function will always return undefined because there is no value after the return statement.
// so the final output will be "The sum of 10 and 32 is undefined"

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

// it behaved exactly as I predicted, the console log statement printed "The sum of 10 and 32 is undefined"
// Finally, correct the code to fix the problem
//  =============> write your new code here
// to correct the code we just need to remove the semicolon after the return statement.

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
