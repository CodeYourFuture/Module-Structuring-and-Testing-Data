// Predict and explain first...
//  =============> write your prediction here

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The error occurs because the `return` statement is placed before the expression `a + b`,
// which means the function returns `undefined` instead of the sum of `a` and `b`.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b; // Return the sum of a and b
} 
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); // This will now correctly output the sum
// The output will be: The sum of 10 and 32 is 42
// This indicates that the function now correctly computes and returns the sum of the two numbers.
