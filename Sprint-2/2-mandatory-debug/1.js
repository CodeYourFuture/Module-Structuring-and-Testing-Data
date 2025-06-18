// Predict and explain first...
//  =============> write your prediction here
//sum will be undefined
/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

// =============> write your explanation here
// there is a semicolon after the return statement which automatically end the return statement
//the line after it is then completely ignored
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
