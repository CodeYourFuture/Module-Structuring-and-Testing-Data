// Predict and explain first...

// =============> write your prediction here
// The code will print "The result of multiplying 10 and 32 is undefined"
// for the result because the function multiply does not return any
// value, it only uses console.log to print the result of the 
// multiplication instead of return. Therefore when we try to use
// the result of the function in the template literal, it will be
// undefined as it logs the value but returns nothing.

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// console.log() inside a function will print the result to the console
// but it does not return any value. When we try to use the result
// of the function in a template literal, it will be undefined
// because the function does not return anything. To use a function's
// results inside a template literal, the function must return
// a value instead of just logging it to the console.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);