// Predict and explain first...
//  =============> write your prediction here
// An error will occur because the function 'sum' has a return statement that is not returning any value.

/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/

// =============> write your explanation here
/* The error occurs because the 'sum' function has a return statement that does not return any value. In JavaScript, 
when a function reaches a return statement without a value, it returns 'undefined' by default. Therefore, when we 
call 'sum(10, 32)', it returns 'undefined', and the output will be "The sum of 10 and 32 is undefined". To fix this, 
we need to ensure that the function returns the result of 'a + b'.*/

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);