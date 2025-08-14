// Predict and explain first...
// It will print the result as undefined.
// =============> write your prediction here
//undefined because there is no return of the value.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// when the code run, it will show "the result of multiplying 10 and 32 is undefined because
// // what console.log does is that it prints the result of a*b but it doesn't return any value"

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
