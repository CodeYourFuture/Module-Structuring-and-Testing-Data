// Predict and explain first...

// =============> the function when called will throw an error

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> the function multiply has no return statement
// when we call the function multiply(10, 32) it will throw this message: The result of multiplying 10 and 32 is undefined
// Finally, correct the code to fix the problem
//  =============>
function multiply(a, b) {
  return a * b; // we change the console.log statement with the return statement
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
