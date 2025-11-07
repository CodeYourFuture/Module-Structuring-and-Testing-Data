// Predict and explain first...
// The console will print:
// 320
// The result of multiplying 10 and 32 is undefined

// =============> write your prediction here
// The first `console.log` inside the function prints the multiplication result (320).
// However, since `multiply()` does not return anything, the outer `console.log` 
// receives `undefined` as the value of the function call, leading to the message 
// "The result of multiplying 10 and 32 is undefined".

/**
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

// =============> write your explanation here
// The first `console.log` inside the function prints the multiplication result (320).
// However, since `multiply()` does not return anything, the outer `console.log` 
// receives `undefined` as the value of the function call, leading to the message 
// "The result of multiplying 10 and 32 is undefined".
//
// To fix this, the function should `return` the result instead of just logging it.
// Finally, correct the code to fix the problem

//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// Output: "The result of multiplying 10 and 32 is 320"
