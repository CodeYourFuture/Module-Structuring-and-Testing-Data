// Predict and explain first...
//  =============> write your prediction here
// I predict the code will give an error because the sum function does not return a value.
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The function sum(a, b) has a return statement that does not return the result of a + b.
// Instead, it returns undefined because the return statement is followed by a semicolon, which ends the statement before the addition operation is executed.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
