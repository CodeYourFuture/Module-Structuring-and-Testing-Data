// Predict and explain first...

// =============> write your prediction here
//
// In the console.log of the function call, the result of multiplication will not be logged, but instead the undefined value will be logged.

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The result of the multiplication is being logged but from within the function, not from the console.log of the function call which gives the result of undefined.
// The reason for this is that the function is not returning anything, therefore the console.log is not giving the result of the multiplication.
// To fix this, instead of console.log in the function, we can use return to return the result of the multiplication.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
