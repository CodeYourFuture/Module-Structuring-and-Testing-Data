// Predict and explain first...
//  =============> write your prediction here

//The output will be:
// "The sum of 10 and 32 is not defined because the return statement without a value.
// The line "a + b;"  after return will not executed
// return undefined. The code after return is unreachable.


function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//   a + b;         ← This line will not executes (unreachable code)
// So the function effectively becomes:
//   function sum(a, b) {
//     return undefined;
//     a + b;  // not execute
//   }
// The return statement immediately exits the function and returns undefined.
// Any code after a return statement is "unreachable" and not execute.
// result is the sum of 10 and 32 is undefined"
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
