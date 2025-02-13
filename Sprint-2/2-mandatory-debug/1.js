// Predict and explain first...
//  =============> write your prediction here
/*
the function sum(10,32) will return undefined because the return statement if the function
doesn't return anything and the return statement ends the function execution immediately 
so the line a+b will never get executed 
*/

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
/*
the return statement in the sum function is ending the function early 
before the addition of a + b can execute 
since there is no value being returned, undefined is returned by default 
*/

// Finally, correct the code to fix the problem
//  =============> write your new code here
/*
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

*/