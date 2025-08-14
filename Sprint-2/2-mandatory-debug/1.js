// Predict and explain first...
//  =============> write your prediction here
// The code doesn't work because the expression a + b comes after the return statement
// Once the compiler reaches return it exit the function.
// There is no error. we just don't have answer
// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// There is no error. we just do not have correct answer.===> The sum of 10 and 32 is undefined
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
