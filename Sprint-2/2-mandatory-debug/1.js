// Predict and explain first...
//  Printing this function in terminal will throw Undefined. > write your prediction here

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// This function as the previous exercise have an issue in the way return statement is done,
// is this case even if the return statement is there however should be in the same line as the operation.> write your explanation here
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
   return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);