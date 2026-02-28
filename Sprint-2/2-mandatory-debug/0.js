// Predict and explain first...

// =============> write your prediction here
// The error will occur because the function 'multiply' does not return a value, so when we try to use it will return 'undefined'.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The error occurs because the 'multiply' function does not have a return statement, so it returns 'undefined' by default.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
