// Predict and explain first...

// =============> write your prediction // The result of multiplying 10 and 32 is undefined

function multiply(a, b) {
  console.log(a * b);
}
// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// When `multiply(10, 32)` is called inside the template string, 
// it runs the function (which logs `320`), but since it doesn't return anything, 
// it inserts `undefined` into the string.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
 return `The result of multiplying ${a} and ${b} is ${a * b}`
}
console.log(multiply(10, 32));