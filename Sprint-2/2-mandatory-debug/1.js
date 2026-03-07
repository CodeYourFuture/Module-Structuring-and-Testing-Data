// Predict and explain first...
//  =============> write your prediction here
// The command is to calculate the sum of two numbers and print the result. However, the function sum does not return any value, it only has a return statement without an expression. Therefore, when we try to use the result of sum in a template literal, it will be undefined, which will lead to an incorrect output.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The function sum takes two parameters, a and b, and has a return statement without an expression. This means that the function will return undefined when called. When we try to use the result of sum in the template literal, it will be undefined, which will lead to the output: "The sum of 10 and 32 is undefined". To fix this, we need to modify the sum function to return the actual sum of a and b instead of just having a return statement without an expression.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// Now the function sum returns the actual sum of a and b, and the output will be: "The sum of 10 and 32 is 42".
