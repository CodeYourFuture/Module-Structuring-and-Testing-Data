// Predict and explain first...

// =============> the function when called will throw an error

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> the function multiply has no return statement

// Finally, correct the code to fix the problem
//  =============>
function multiply(a, b) {
  return a * b; // we change the console.log statement with the return statement
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// an extra notice: the purpose of creating a function is to reuse it when needed
// I've noticed that the parameters are already assigned to values 10 and 32, so I changed the code to the following:
function multiply(a, b) {
  return console.log(
    `The result of multiplying ` + a + ` and ` + b + ` is ` + a * b
  );
}
multiply(10, 32);
//
