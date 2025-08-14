// =============> write your prediction here
// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// The output will be:
// 320
// The result of multiplying 10 and 32 is undefined
// This is because multiply logs the result but does not return it, so the template literal gets undefined.

// =============> write your explanation here
// The function multiply only prints the result to the console and does not return anything.
// When we use multiply(10, 32) inside the template literal, it evaluates to undefined because the function has no return value.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
