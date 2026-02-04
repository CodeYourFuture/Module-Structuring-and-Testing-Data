// Predict and explain first...

// =============> write your prediction here
// Prediction: The function will not multiply the numbers.
// Instead, it will print the sum of a and b (42) and the final console.log will ouput:
// The result of multiplying 10 and 32 is undefined

/* Original code
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

// =============> Error message
// 320
// The result of multiplying 10 and 32 is undefined

// =============> write your explanation here
// MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return

// The function multiply() uses console.log() to print the result but it does not return anything.
// In JavaScript, if a function does not explicitly return a value, it returns undefined.
// When we try to use multiplay(10, 32) inside a console.log, it returns undefined.
// To fix this, we must use the return statement so the function gives back a value that can be used.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

// The result of multiplying 10 and 32 is 320
console.log(`The result of multiplying 10 and 32 is ` + multiply(10, 32)); 