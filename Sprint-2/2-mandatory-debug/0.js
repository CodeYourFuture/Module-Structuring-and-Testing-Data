// Predict and explain first...

// =============> write your prediction here
// I predict that the error will occur because the function 'multiply' does not return any value, so when we try to use it inside the template literal, it will return 'undefined'.
//  This will result in the output being "The result of multiplying 10 and 32 is undefined" instead of the expected product of 10 and 32.
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The error occurs because the function 'multiply' does not have a return statement, so it returns 'undefined' by default. When we try to use the result of 'multiply(10, 32)' inside the template literal, it evaluates to 'undefined', which is not the expected output. To fix this error, we need to add a return statement in the 'multiply' function to return the product of 'a' and 'b'.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;