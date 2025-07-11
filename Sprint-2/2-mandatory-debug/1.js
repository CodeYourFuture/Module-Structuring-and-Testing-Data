// Predict and explain first...
//  =============> write your prediction here
//the function sum terminates at the return statement but does not return anything so it will return undefined the line after return is not executed.
//the console log will output "The sum of 10 and 32 is undefined".

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//the console logged "The sum of 10 and 32 is undefined". this is because the function sum does not return any value. The return statement is followed by a semicolon, which means the function exits at that point without executing the line that adds a and b together. Therefore, the function returns undefined.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
