// Predict and explain first...
//  =============> write your prediction here
// I predict that the error will occur because the function 'sum' does not return any value, so when we try to use it inside the template literal, it will return 'undefined'.
//  This will result in the output being "The sum of 10 and 32 is undefined" instead of the expected sum of 10 and 32.
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The error occurs because the function 'sum' has a return statement that does not return any value, which means it returns 'undefined' by default. 
// When we try to use the result of 'sum(10, 32)' inside the template literal, it evaluates to 'undefined', which is not the expected output.
//  To fix this error, we need to change the return statement in the 'sum' function to return the sum of 'a' and 'b'.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}