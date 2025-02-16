// Predict and explain first...
// =============> write your prediction here
// that we will have a*b and the next line undefined

// function multiply(a, b) {
//   console.log(a * b);
// }
// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// Line 10 gets executed first, because we call the function multiply in this line, it will direct to line 6 and execute the function and show the argument of the function which is 32 and 10, then it will return undefined because the function does not return anything.
// Finally, correct the code to fix the problem
// We should return the value of the function instead of console.log it.
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); 