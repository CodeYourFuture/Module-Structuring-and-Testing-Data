// Predict and explain first...
//  =============> write your prediction here
//I believe code won't work because return's value isn't assigned
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
/*
The function returns undefined because return is followed by a line break.
 JavaScript ends the return statement immediately, so the line a + b; is never executed. 
To fix this, the expression must be placed on the same line as return.
*/
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}
