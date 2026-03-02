// Predict and explain first...
//  =============> write your prediction here: The function does not return any value. The a + b should be before the semi-colon and after the return. It will print undefined instead of 42.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here: It is a logic error as it prints out an unexpected answer, undefined.
// Finally, correct the code to fix the problem
//  =============> write your new code here
// function sum(a, b) {
//   return a + b;
//}