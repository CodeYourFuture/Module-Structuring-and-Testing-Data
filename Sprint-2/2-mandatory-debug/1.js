// Predict and explain first...
//  =============> write your prediction here
// I predict there will be a syntax error but not sure what the error is yet.
// I think it has something to do with return as it return nothing , so the function was'nt well defined.

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The function sum is not returning the result of a + b, instead it is returning undefined
// because the return statement is on a separate line and does not include the expression a + b.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
