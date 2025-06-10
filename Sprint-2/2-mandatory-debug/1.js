// Predict and explain first...
//  =============> write your prediction here
/*
sum function return nothing because there is ; after return.
*/
/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/
// =============> write your explanation here
/*
The output of the code is "The sum of 10 and 32 is undefined".
There is no return value of the function as expected.
*/

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
