// Predict and explain first...

// =============> write your prediction here
// It seems the function multiply did not return any value.
// Therefore, it is like a console.log returning undefined, while it is inside another console.log.
// So the output should be "The result of multiplying 10 and 32 is undefined".
/*
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
// =============> write your explanation here
// After running the code, I got a separate output of 320 and "The result of multiplying 10 and 32 is undefined".
// This is because the function multiply does not return any value, so it returns undefined by default.
// The console.log inside the function multiply prints 320 when the function is called.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); // should return "The result of multiplying 10 and 32 is 320"
