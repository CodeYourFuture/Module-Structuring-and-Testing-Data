// Predict and explain first...

// =============> I think the result will be undefined because in the function there is no return statement.

function multiply(a, b) {
  console.log(a * b);
}

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> Its interesting - function log the result  but doesn't return it. So when we see the output 320 and "undefined"

// Finally, correct the code to fix the problem
//  =============> function multiply(a, b) {
//                   return a * b;
//                 }
//                 console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
