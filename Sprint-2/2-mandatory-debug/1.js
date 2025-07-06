// Predict and explain first...
//  =============> write your prediction here - the function will not work because we don't have a return statement in the function.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here = I'vee added a return statement to the function to ensure it returns the sum of the two numbers.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
