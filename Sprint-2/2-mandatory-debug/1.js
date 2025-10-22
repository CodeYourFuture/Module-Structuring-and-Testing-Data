// Predict and explain first...
//  =============> write your prediction here
/* The code will give us the sum of 10 and 32 which will be " The sum of 10 and 32 is 42" */

/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

// =============> write your explanation here
/* the call of the function gives undefine result. the reason for this is the semicolon after return which shouldn't be placed there.
// Finally, correct the code to fix the problem
//  =============> write your new code here */
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);