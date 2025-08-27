// Predict and explain first...
//  =============> write your prediction here
// The sum of 10 and 32 is undefined

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The function called `sum` is defined to take two parameters `a` and `b`, but it does not return the result of adding them together.
// Instead, it has a `return` statement which exits the function without returning any value.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 32));
