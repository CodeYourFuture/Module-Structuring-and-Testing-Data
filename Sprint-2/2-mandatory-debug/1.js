// Predict and explain first...
//  =============> write your prediction here
// I expect the code to log the sum of 10 and 32, but it will return undefined because the function "sum" does not have a return statement for the sum operation as line 7 has unreachable code due to the return statement on line 6 is returning nothing.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The code defines a function "sum" that is intended to return the sum of two numbers "a" and "b". However, the return statement is placed before the addition operation, which means that the function will return `undefined` immediately without performing the addition. As a result, when we log the output, it will show "The sum of 10 and 32 is undefined".
// Finally, correct the code to fix the problem
//  =============> write your new code here
// To fix this we need to moving the unreachable code after the return statement into the return statement itself, so that the function returns the sum of "a" and "b".

function sum(a, b){
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); // This will now correctly log "The sum of 10 and 32 is 42".